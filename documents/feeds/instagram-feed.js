'use strict';
const md5 = require('blueimp-md5');
const _ = require('lodash');

class InstagramFeed {

    /**
     * constructor
     *
     * @param  {Object} data
     */
    constructor(data) {
        if (data === undefined) throw Error('Missing data');
        if (!_.isObject(data)) throw Error('Wrong type data');
        if (_.isEmpty(data)) throw Error('Empty data');

        this.data = (_.has(data, 'user')) ? data.user : data;
        this.provider = 'instagram';
    }

    /**
     * getUid - Return the feed's Plugr uid'
     *
     * @return {String}
     */
    getUid() {
        return md5(this.getUri());
    }

    /**
     * getType - Return the feed's Plugr type
     *
     * @return {String}
     */
    getType() {
        return 'instagram_feed';
    }

    /**
     * getSubType - Return the feed's Plugr subtype
     *
     * @return {Object}
     */
    getSubType() {
        return null;
    }

    /**
     * getPlatformId - Return the user's platform id
     *
     * @return {Number}
     */
    getPlatformId() {
        return this.data.id;
    }

    /**
     * getUri - Return the feed's Plugr uri
     *
     * @return {String}
     */
    getUri() {
        return `https://instagram.com/users/${this.data.id}`;
    }

    /**
     * getUsername - Return the user's platform username
     *
     * @return {String}
     */
    getUsername() {
        return this.data.username;
    }

    /**
     * getDescription - Return the user's platform description
     *
     * @return {String}
     */
    getDescription() {
        return this.data.bio;
    }

    /**
     * getLanguage - Return the user's platform language
     *
     * @return {Object}
     */
    getLanguage() {
        return null;
    }

    /**
     * getUrl - Return the user's platform url
     *
     * @return {String}
     */
    getUrl() {
        return `https://instagram.com/${this.data.username}`;
    }

    /**
     * getAvatarUrl - Return the user's platform avatar url
     *
     * @return {String}
     */
    getAvatarUrl() {
        return this.data.profile_picture;
    }

    /**
     * getFullName - Return the user's platform fullname
     *
     * @return {String}
     */
    getFullName() {
        return (_.has(this.data, 'full_name')) ? this.data.full_name : `${this.data.first_name} ${this.data.last_name}`;
    }

    /**
     * getWebsite - Return the user's platform website
     *
     * @return {String}
     */
    getWebsite() {
        return this.data.website;
    }

    /**
     * getCounts - Return the user's platform counters (media / follows / followed_by)
     *
     * @return {Object}
     */
    getCounts() {
        return this.data.counts;
    }

    /**
     * getMediaCount - Return the user's platform media counter
     *
     * @return {Number}
     */
    getMediaCount() {
        return (_.has(this.data, ['counts', 'media'])) ? this.data.counts.media : undefined;
    }

    /**
     * getFollowsCount - Return the user's platform follows counter
     *
     * @return {Number}
     */
    getFollowsCount() {
        return (_.has(this.data, ['counts', 'follows'])) ? this.data.counts.follows : undefined;
    }

    /**
     * getFollowedByCount - Return the user's platform followed_by counter
     *
     * @return {Number}
     */
    getFollowedByCount() {
        return (_.has(this.data, ['counts', 'followed_by'])) ? this.data.counts.followed_by : undefined;
    }
}

module.exports = InstagramFeed;
