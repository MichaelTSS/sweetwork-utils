'use strict';
const md5 = require('blueimp-md5');
const moment = require('moment-timezone');
const TWITTER_DATE_TIME_FORMAT = 'ddd MMM DD HH:mm:ss ZZ YYYY';

class Tweet {
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
        return 'tweet';
    }

    getTitle() {
        return null;
    }

    getDescription() {
        return null;
    }

    getContent() {
        return this.data.text;
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
        return moment(this.data.created_at, TWITTER_DATE_TIME_FORMAT).unix();
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
            if (this.data.entities.media[0].type === 'photo') {
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
            score: this.data.favorite_count + this.data.retweet_count,
            tw: {
                nb_favorites: this.data.favorite_count,
                nb_retweets: this.data.retweet_count
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

module.exports = Tweet;
