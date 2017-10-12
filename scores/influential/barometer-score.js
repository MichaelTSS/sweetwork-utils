/* eslint-disable consistent-return */
'use strict';

const _ = require('lodash');

const ALLOWED_TYPES = ['facebook', 'googleplus', 'instagram', 'twitter', 'web', 'youtube'];
const FACEBOOK_BAROMETER_RANGE = [0, 300, 1500, 4500, 13500, 40500, 121500, 364500, 1093500, 3280500, 200000000];
const GOOGLEPLUS_BAROMETER_SCORE = [0, 300, 1500, 4500, 13500, 40500, 121500, 364500, 1093500, 3280500, 200000000];
const INSTAGRAM_BAROMETER_RANGE = [0, 1000, 5000, 15000, 45000, 135000, 405000, 1215000, 3645000, 10935000, 100000000];
const TWITTER_BAROMETER_RANGE = [0, 1000, 5000, 15000, 45000, 135000, 405000, 1215000, 3645000, 10935000, 100000000];
const WEB_BAROMETER_RANGE = [200000000, 10935000, 3645000, 1215000, 405000, 135000, 45000, 15000, 5000, 1000, 0];
const YOUTUBE_BAROMETER_RANGE = [0, 300, 1500, 4500, 13500, 40500, 121500, 364500, 1093500, 3280500, 200000000];

class BarometerScore {
    constructor(type) {
        if (typeof type !== 'string') return new TypeError(`Wrong type type : ${typeof type}`);
        if (!ALLOWED_TYPES.includes(type)) return Error(`Type ${type} not implemented`);

        this.type = type;
        switch (type) {
        case 'facebook':
            this.barometer = FACEBOOK_BAROMETER_RANGE;
            break;
        case 'googleplus':
            this.barometer = GOOGLEPLUS_BAROMETER_SCORE;
            break;
        case 'instagram':
            this.barometer = INSTAGRAM_BAROMETER_RANGE;
            break;
        case 'twitter':
            this.barometer = TWITTER_BAROMETER_RANGE;
            break;
        case 'web':
            this.barometer = WEB_BAROMETER_RANGE;
            break;
        case 'youtube':
            this.barometer = YOUTUBE_BAROMETER_RANGE;
            break;
        default:
            this.barometer = [];
            return Error(`Type ${type} not implemented. Impossible to select a barometer`);
        }
    }

    /**
     * getScore - Evaluate the audience score
     * type facebook => {value1: like, value2: undefined || null}
     * type googleplus => {value1: circled, value2: undefined || null}
     * type instagram => {value1: followed_by, value2: follows}
     * type twitter => {value1: followers, value2: friends}
     * type web => {value1: alexaRank, value2: undefined || null}
     * type youtube => {value1: subscribers, value2: undefined || null}
     *
     * @param  {Number} value1
     * @param  {Number} value2
     * @return {Number}
     */
    getScore(value1, value2) {
        let val1 = value1;
        let val2 = value2;
        if (!['instagram', 'twitter'].includes(this.type) && (!isFinite(value1) || value1 === 0)) return 0;
        if (['instagram', 'twitter'].includes(this.type)) {
            if (!isFinite(value1)) val1 = 0;
            if (!isFinite(value2)) val2 = 0;
            if (val1 === 0 && val2 === 0) return 0;
            val1 = Math.abs((val1 - val2) / 1.5);
        }

        let score = 0;
        if (this.type === 'web' && val1 >= this.barometer[0]) {
            score = 0;
        } else if (this.type !== 'web' && val1 >= this.barometer[10]) {
            score = 10;
        } else {
            _.each(this.barometer, (n, i) => {
                if ((this.type !== 'web' && val1 <= n) || (this.type === 'web' && val1 >= n)) {
                    score = (val1 === n) ? i : i - 1;
                    score =  (score < 0) ? 0 : score;
                    return false;
                }
            });
        }

        if (this.type === 'web') return (val1 < this.barometer[0] && score < 10) ? score + (val1 - this.barometer[score]) / (this.barometer[score + 1] - this.barometer[score]) : score;
        return  (score < 10) ? score + (val1 - this.barometer[score]) / (this.barometer[score + 1] - this.barometer[score]) : score;
    }
}

module.exports = BarometerScore;
