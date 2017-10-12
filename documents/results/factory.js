'use strict';

const FacebookPost = require('./facebook-post');
const InstagramMedia = require('./instagram-media');
const GnewsItem = require('./gnews-item');
const Retweet = require('./retweet');
const RssItem = require('./rss-item');
const Tweet = require('./tweet');

class Factory {
    constructor() {
        this.document = null;
    }

    /**
     * @param  {string} platformType
     * @param  {string} provider
     * @param  {object} data
     * @return {object}
     */
    fromType(platformType, data) {
        switch (platformType) {
        case 'facebook':
            this.document = new FacebookPost(data);
            break;
        case 'instagram':
            this.document = new InstagramMedia(data);
            break;
        case 'twitter':
            if (data.retweeted_status) {
                this.document = new Retweet(data);
            } else {
                this.document = new Tweet(data);
            }
            break;
        case 'googlenews':
            this.document = new GnewsItem(data);
            break;
        case 'rss':
            this.document = new RssItem(data);
            break;
        default:
            throw new Error(`Type ${platformType} not implemented`);
        }

        return this.document;
    }

    getIndex(clientId) {
        if (this.document == null) throw new Error('Document instance property equals null, please use fromType() method first');

        let index = null;
        try {
            index = {
                result_uid: this.document.getResultUid(),
                result_id: null,
                client_id: clientId,
                type: this.document.getType(),
                title: this.document.getTitle(),
                description: this.document.getDescription(),
                content: this.document.getContent(),
                url: this.document.getUrl(),
                languages: this.document.getLanguages(),
                created_at: this.document.getCreatedAt(),
                countries: this.document.getCountries(),
                parent_id: this.document.getParentId(),
                media: this.document.getMedia(),
                sentiment: 0,
                pinned: {
                    is_pinned: 0,
                    content: null
                },
                top_score: 0,
                status: {
                    value: 'published'
                },
                social_echoes: this.document.getSocialEchoes(),
                feed: this.document.getFeed(),
                profile: {},
                platform_tags: this.document.getPlatformTags(),
                tags: []
            };
        } catch (e) {
            throw new Error(`${typeof this.document} failed to parse the passed data ${e}`);
        }

        return index;
    }
}

module.exports = Factory;
