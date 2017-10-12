'use strict';

const _ = require('lodash');

class TopScore {
    /**
     * getScore - Evaluate the importance score for a client
     *
     * {String} type is required ['facebook', 'googleplus', 'instagram', 'twitter', 'web', 'youtube']
     * {Number} profile_influential not required default : 0 || 30 (web type)
     * {Number} social_echoes_score (sum of all social_echoes) not required default : 0
     * {Number} topics_coefficient (max of all matching topics) not required default : 1
     * {Boolean} is_pinned not required
     * {Boolean} is_tagged not required
     *
     * @param  {Object} infos
     * @return {Number}
     */
    getScore(infos) {
        if (!_.isObject(infos)) return new TypeError(`Wrong type infos : ${typeof infos}`);
        if (_.isEmpty(infos)) return Error('Empty infos : impossible to calculate importance score');
        if (!_.has(infos, 'type')) return Error(`Result type is undefined : ${infos.type}`);

        const RESULT_TYPES = ['facebook', 'googleplus', 'instagram', 'twitter', 'web', 'youtube'];
        if (RESULT_TYPES.indexOf(infos.type) === -1) return Error(`Type ${infos.type} not implemented`);

        const DEFAULT_INFLUENTIAL = 30;
        const INFLUENTIAL_DIVISOR = 5;
        const PINNED_SCORE = 100000;
        const WEB_COEFFICIENT = 1.5;

        let profileInfluential = (_.has(infos, 'profile_influential') && isFinite(infos.profile_influential)) ? infos.profile_influential : 0;
        profileInfluential = (infos.type === 'web' && profileInfluential === 0) ? DEFAULT_INFLUENTIAL : profileInfluential;
        const socialEchoesScore = (_.has(infos, 'social_echoes_score') && isFinite(infos.social_echoes_score)) ? Math.sqrt(infos.social_echoes_score) : 0;
        const topicsCoefficient = (_.has(infos, 'topics_coefficient') && isFinite(infos.topics_coefficient) && infos.topics_coefficient > 0) ? infos.topics_coefficient : 1;
        let isPinned = (_.has(infos, 'is_pinned') && typeof infos.is_pinned === 'boolean') ? infos.is_pinned : false;
        isPinned = (isPinned) ? PINNED_SCORE : 1;
        const isTagged = (_.has(infos, 'is_tagged') && typeof infos.is_tagged === 'boolean') ? infos.is_tagged : false;

        let score = (((profileInfluential / INFLUENTIAL_DIVISOR) + socialEchoesScore) * topicsCoefficient) + isPinned;
        score = (infos.type === 'web' && isTagged) ? score * WEB_COEFFICIENT : score;

        return score;
    }
}

module.exports = TopScore;
