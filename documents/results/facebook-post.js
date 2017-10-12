'use strict';
const md5 = require('blueimp-md5');
const moment = require('moment-timezone');
const ISO_DATE_TIME_FORMAT = moment.ISO_8601; // 2016-10-20T16:24:17+0000

class FacebookPost {
    /**
     * @param  {object} data
     * @return {object}
     */
    constructor(data) {
        this.data = data;
        this.provider = 'facebook';

        this.userId = '';
        this.postId = '';
        if (this.data.id && typeof this.data.id === 'string') {
            const tab = this.data.id.split('_');
            if (tab.length === 2) {
                this.userId = tab[0];
                this.postId = tab[1];
            }
        }
        if (!this.userId || !this.postId) {
            throw new TypeError('Missing Parameters');
        }
    }

    getResultUid() {
        return md5(this.getUrl());
    }

    getType() {
        return 'facebook_post';
    }

    getTitle() {
        return '';
    }

    getDescription() {
        return '';
    }

    getContent() {
        return this.data.message || this.data.story || this.data.description || '';
    }

    getUrl() {
        let url = '';
        if (this.data.link) {
            url = this.data.link;
        } else {
            url = `https://www.facebook.com/${this.userId}/posts/${this.postId}`;
        }
        return url;
    }

    getLanguages() {
        return {
            iso: 'undef',
            score: 1
        };
    }

    getCreatedAt() {
        return moment(this.data.created_time, ISO_DATE_TIME_FORMAT).unix();
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
        return null;
    }

    getSocialEchoes() {
        return null;
    }

    getPlatformTags() {
        return null;
    }

    getFeed() {
        return {
            feed_uid: md5(`https://www.facebook.com/${this.userId}`),
            feed_id: null,
            crc32: null
        };
    }
}

module.exports = FacebookPost;
