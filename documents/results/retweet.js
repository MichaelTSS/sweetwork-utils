'use strict';
const md5 = require('blueimp-md5');
const moment = require('moment-timezone');
const ISO_DATE_TIME_FORMAT = 'ddd MMM DD HH:mm:ss ZZ YYYY';

class Retweet {
    /**
     * @param  {object} data
     * @return {object}
     */
    constructor(data) {
        this.data = data;
        this.provider = 'twitter';
    }

    getResultUid() {
        return md5(this.getUrl());
    }

    getType() {
        return 'tweet_retweet';
    }

    getTitle() {
        return null;
    }

    getDescription() {
        return null;
    }

    getContent() {
        return `@${this.data.retweeted_status.user.screen_name}: ${this.data.retweeted_status.text}`;
    }

    getUrl() {
        return `https://twitter.com/${this.data.user.id_str}/status/${this.data.id_str}`;
    }

    getLanguages() {
        return {
            iso: this.data.lang,
            score: 1
        };
    }

    getCreatedAt() {
        return moment(this.data.created_at, ISO_DATE_TIME_FORMAT).unix();
    }

    getCountries() {
        return {
            iso: 'undef'
        };
    }

    getParentId() {
        return 0;
    }

    getMedia() {
        let media = {};
        if (this.data.entities.media && this.data.entities.media.indexOf(0) === -1) {
            if (this.data.entities.media.length > 0 && this.data.entities.media[0].type === 'photo') {
                const img = this.data.entities.media[0].media_url_https;
                media = {
                    type: 'image',
                    name: null,
                    caption: null,
                    description: null,
                    link: img,
                    url: img,
                    duration: null
                };
            }
        }

        return media;
    }

    getSocialEchoes() {
        return {
            score: 0,
            tw: {
                nb_favorites: 0,
                nb_retweets: 0
            }
        };
    }

    getPlatformTags() {
        return null;
    }

    getFeed() {
        return {
            feed_uid: md5(`https://twitter.com/${this.data.user.id_str}`),
            feed_id: null,
            crc32: null
        };
    }
}

module.exports = Retweet;
