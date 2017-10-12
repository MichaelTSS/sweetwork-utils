'use strict';
const md5 = require('blueimp-md5');
const _ = require('lodash');

class FacebookFeed {

    /**
     * constructor
     *
     * @param  {Object} data
     */
    constructor(data) {
        if (data === undefined) throw Error('Missing data');
        if (!_.isObject(data)) throw Error('Wrong type data');
        if (_.isEmpty(data)) throw Error('Empty data');

        this.userId = '';
        if (_.has(data, 'user')) {
            this.data = data.user;
            // TODO : get userId
        } else {
            this.data = data;
            if (this.data.id && typeof this.data.id === 'string') {
                this.userId = this.data.id.split('_')[0];
            }
        }

        if (!this.userId) {
            throw new TypeError('Missing Parameters');
        }

        this.provider = 'facebook';
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
        return 'facebook_feed';
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
        return this.userId;
    }

    /**
     * getUri - Return the feed's Plugr uri
     *
     * @return {String}
     */
    getUri() {
        return `https://www.facebook.com/${this.userId}`;
    }

    /**
     * getUsername - Return the user's platform username
     *
     * @return {String}
     */
    getUsername() {
        return (this.from && this.from.name) ? this.from.name : '';
    }

    /**
     * getDescription - Return the user's platform description
     *
     * @return {Object}
     */
    getDescription() {
        return null;
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
        return `https://www.facebook.com/${this.userId}`;
    }

    /**
     * getAvatarUrl - Return the user's platform avatar url
     *
     * @return {Object}
     */
    getAvatarUrl() {
        return null;
    }

    /**
     * getFullName - Return the user's platform fullname
     *
     * @return {Object}
     */
    getFullName() {
        return null;
    }
}

module.exports = FacebookFeed;
