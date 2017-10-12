/* eslint-disable no-param-reassign */
'use strict';

const _ = require('lodash');
const BarometerScore = require('./barometer-score');

const ALLOWED_TYPES = ['facebook_feed', 'googleplus_feed', 'instagram_feed', 'twitter_timeline', 'website_dummy', 'youtube_channel'];
const TRANSTYPAGE = {
    facebook_feed: 'facebook',
    googleplus_feed: 'googleplus',
    instagram_feed: 'instagram',
    twitter_timeline: 'twitter',
    website_dummy: 'web',
    youtube_channel: 'youtube'
};

class InfluentialScore {
    /**
     * getScore - Evaluate the influential score
     *
     * base score +=
     * we add scores[i]% of the remaining items,
     * which we take the reverse delta% (lrager the difference between the highest score and the current score is, the less we add),
     * which we take the ${current score}% (lower the current score is, the less we add),
     * which we take the x% (x is 100% minus 10% for each feed (the more feed, the less they effect)).
     * CONDENSED FORMULA
     * baseScore += (10 - baseScore) * (10 - highestScore - scores[i]) * (1 - 0.1 * lengthScores) * 0.1 * pow(scores[i], 2);
     *
     * @param  {Object[Array]} scores
     * @return {Number}
     */
    getScore(scores) {
        if (!Array.isArray(scores) || scores.length === 0) return 0;

        scores = _.sortBy(scores);
        let delta;
        let pointsLeft;
        const highestScore = scores.pop();
        const lengthScores = scores.length;
        let baseScore = highestScore * (0.9 + (0.05 * (((lengthScores - 1) < 3) ? (lengthScores - 1) : 2)));

        for (let i = 0; i < lengthScores; i++) {
            delta = highestScore - scores[i];
            pointsLeft = 10 - baseScore;
            baseScore += (pointsLeft / 10 * scores[i]) * ((10 - delta) / 10) * (scores[i] / 10) * (1 - (0.15 * lengthScores)); // * 100% - delta%
        }

        return Math.floor(baseScore * 10);
    }

    /**
     * getInfluential - Evaluate the profile influential score
     *
     * @param  {Object[Array]} metadatas
     * @return {Number}
     */
    getInfluentialScore(metadatas) {
        // TODO: throw condition!!!!

        const scores = [];

        _.each(metadatas, (n, i) => {
            let type;
            let value1;
            let value2;

            if (typeof n.feed_type !== 'string' || n.feed_type === '' || !ALLOWED_TYPES.includes(n.feed_type)) {
                /* TODO: log error! */
            } else {
                switch (n.feed_type) {
                case 'facebook_feed':
                    value1 = n.likes;
                    break;
                case 'googleplus_feed':
                    value1 = n.circled;
                    break;
                case 'instagram_feed':
                    value1 = n.followed_by;
                    value2 = n.follows;
                    break;
                case 'twitter_timeline':
                    value1 = n.followers;
                    value2 = n.friends;
                    break;
                case 'website_dummy':
                    value1 = n.alexa_rank;
                    value2 = n.page_rank;
                    break;
                case 'youtube_channel':
                    value1 = n.subscribers;
                    break;
                default:
                    throw new Error(`Type ${n.feed_type} not implemented`);
                }
                type = n.feed_type;
                let influentialScore;
                const barometerScore = new BarometerScore(TRANSTYPAGE[type]);

                if (_.isError(barometerScore)) {
                    // TODO: log error!
                } else {
                    if (!isFinite(value1)) {
                        value1 = 0;
                        // TODO: log error data format!
                    }
                    if (['instagram_feed', 'twitter_timeline'].includes(type) && !isFinite(value2)) {
                        value2 = 0;
                        // TODO: log error data format!
                    }
                    influentialScore = barometerScore.getScore(value1, value2);
                    if (_.isError(influentialScore)) {
                        influentialScore = 0;
                        // TODO: log error!
                    }
                    scores.push(influentialScore);
                    if (type === 'website_dummy' && isFinite(value2) && value2 > 0) {
                        scores.push(value2);
                    }
                }
            }
        });

        return this.getScore(scores);
    }
}

module.exports = InfluentialScore;
