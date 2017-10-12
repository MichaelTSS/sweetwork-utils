'use strict';

const _ = require('lodash');
const FacebookFeed = require('./facebook-feed');
const InstagramFeed = require('./instagram-feed');
const TwitterTimeline = require('./twitter-timeline');
const WebsiteDummy = require('./website-dummy');

class Factory {
    constructor() {
        this.document = null;
    }

    /**
     * fromType - description
     *
     * @param  {String} platformType
     * @param  {Object} data
     * @return {type}
     */

    fromType(platformType, data) {
        if (platformType === undefined) throw Error('Missing platformType');
        if (data === undefined) throw Error('Missing data');
        if (!_.isObject(data)) throw Error('Wrong type data');
        if (_.isEmpty(data)) throw Error('Empty data');

        switch (platformType) {
        case 'facebook':
            this.document = new FacebookFeed(data);
            break;
        case 'instagram':
            this.document = new InstagramFeed(data);
            break;
        case 'twitter':
            this.document = new TwitterTimeline(data);
            break;
        case 'googlenews':
            this.document = new WebsiteDummy(data, 'googlenews');
            break;
        case 'rss':
            this.document = new WebsiteDummy(data, 'rss');
            break;
        default:
            throw new Error(`Type ${platformType} not implemented`);
        }

        return this.document;
    }


    /**
     * getFeed - Get feed Object to create entry into DyDB + ES and create profile
     *
     * @return {Object}
     */
    getFeed() {
        if (this.document == null) throw new Error('Document instance property equals null, please use fromType() method first');

        let feed = null;
        try {
            feed = {
                feed_uid: this.document.getUid(),
                feed_id: null,
                type: this.document.getType(),
                subtype: this.document.getSubType(),
                original_id: this.document.getPlatformId(),
                screen_name: this.document.getUsername(),
                full_name: this.document.getFullName(),
                description: this.document.getDescription(),
                language: this.document.getLanguage(),
                uri: this.document.getUri(),
                url: this.document.getUrl(),
                metadatas: this.document.getCounts()
            };
        } catch (e) {
            throw new Error(`${typeof this.document} failed to parse the passed data ${e}`);
        }

        return feed;
    }
}

module.exports = Factory;
