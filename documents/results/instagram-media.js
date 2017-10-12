'use strict';
const md5 = require('blueimp-md5');

class InstagramMedia {
    /**
     * @param  {object} data
     * @return {object}
     */
    constructor(data) {
        this.data = data;
        this.provider = 'instagram';
    }

    getResultUid() {
        return md5(this.getUrl());
    }

    getType() {
        return 'instagram_media';
    }

    getTitle() {
        return null;
    }

    getDescription() {
        return null;
    }

    getContent() {
        return this.data.caption.text;
    }

    getUrl() {
        return this.data.link;
    }

    getLanguages() {
        return {
            iso: 'undef',
            score: 1
        };
    }

    getCreatedAt() {
        return parseInt(this.data.created_time, 10);
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
        if (this.data.images && this.data.images.standard_resolution) {
            const img = this.data.images.standard_resolution;
            media = {
                type: 'image',
                name: null,
                caption: null,
                description: null,
                link: img.url,
                url: img.url,
                duration: null
            };
        }
        if (this.data.videos && this.data.videos.standard_resolution) {
            const video = this.data.videos.standard_resolution;
            media = {
                type: 'video',
                name: null,
                caption: null,
                description: null,
                link: video.url,
                url: video.url,
                duration: null
            };
        }

        return media;
    }

    getSocialEchoes() {
        return {
            score: this.data.comments.count + this.data.likes.count,
            ig: {
                nb_comments: this.data.comments.count,
                nb_likes: this.data.likes.count
            }
        };
    }
    getPlatformTags() {
        return this.data.tags;
    }

    getFeed() {
        return {
            feed_uid: md5(`https://instagram.com/users/${this.data.user.id}`),
            feed_id: null,
            crc32: null
        };
    }
}

module.exports = InstagramMedia;
