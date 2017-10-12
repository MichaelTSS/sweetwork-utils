/* eslint-disable no-underscore-dangle */
'use strict';
const md5 = require('blueimp-md5');
const _ = require('lodash');

class WebsiteDummy {

    /**
     * constructor
     *
     * @param  {Object} data
     * @param  {String} provide
     */
    constructor(data, provider = 'rss') {
        if (data === undefined) throw Error('Missing data');
        if (!_.isObject(data)) throw Error('Wrong type data');
        if (_.isEmpty(data)) throw Error('Empty data');

        this.data = (_.has(data, 'user')) ? data.user : data;
        this.provider = provider;
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
        return 'website_dummy';
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
        return 0;
    }

    /**
     * getUri - Return the feed's Plugr uri
     *
     * @return {String}
     */
    getUri() {
        let uri = '';
        switch (this.provider) {
        case 'googlenews':
            uri = this.data.link.split('&url=')[1];
            break;
        case 'rss':
        default:
            uri = this.data.link;
        }
        return this._getRootUrl(uri);
    }

    /**
     * getUsername - Return the user's platform username
     *
     * @return {Object}
     */
    getUsername() {
        return null;
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
        return this.getUri();
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

    /**
     * getCounts
     *
     * @return {Object}
     */
    getCounts() {
        return {};
    }

    /**
     * _getRootUrl - Return a cleaned url
     *
     * @param  {String} url
     * @return {String}
     */
    _getRootUrl(url) {
        return url.toString().replace(/^(.*\/\/[^\/?#]*).*$/, '$1');
    }
}

module.exports = WebsiteDummy;
