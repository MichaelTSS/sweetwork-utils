'use strict';
const md5 = require('blueimp-md5');
const _ = require('lodash');

class TwitterTimeline {

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
        this.provider = 'twitter';
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
        return 'twitter_timeline';
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
     * getPlatformId - Return the user's Twitter id
     *
     * @return {String}
     */
    getPlatformId() {
        return this.data.id_str;
    }

    /**
     * getUri - Return the feed's Plugr uri
     *
     * @return {String}
     */
    getUri() {
        return `https://twitter.com/${this.data.id_str}`;
    }

    /**
     * getUsername - Return the user's Twitter screen_name
     *
     * @return {String}
     */
    getUsername() {
        return this.data.screen_name;
    }

    /**
     * getDescription - Return the user's Twitter description
     *
     * @return {String}
     */
    getDescription() {
        return this.data.description;
    }

    /**
     * getLanguage - Return the user's Twitter language
     *
     * @return {String}
     */
    getLanguage() {
        return this.data.lang;
    }

    /**
     * getUrl - Return the user's Twitter url
     *
     * @return {String}
     */
    getUrl() {
        return `https://twitter.com/${this.data.screen_name}`;
    }

    /**
     * getAvatarUrl - Return the user's Twitter avatar url
     *
     * @return {String}
     */
    getAvatarUrl() {
        return this.data.profile_image_url_https;
    }

    /**
     * getFullName - Return the user's Twitter name
     *
     * @return {String}
     */
    getFullName() {
        return this.data.name;
    }

    /**
     * isVerified - Return the user's Twitter verified status
     *
     * @return {Boolean}
     */
    isVerified() {
        return this.data.verified;
    }

    /**
     * getCounts - Return the user's Twitter counters (followers / friends / listed / favourites / statuses)
     *
     * @return {Object}
     */
    getCounts() {
        return {
            followers_count: this.getFollowersCount(),
            friends_count: this.getFriendsCount(),
            listed_count: this.getListedCount(),
            favourites_count: this.getFavouritesCount(),
            statuses_count: this.getStatusesCount()
        };
    }

    /**
     * getFollowersCount - Return the user's Twitter followers counter
     *
     * @return {Number}
     */
    getFollowersCount() {
        return this.data.followers_count;
    }

    /**
     * getFriendsCount - Return the user's Twitter friends counter
     *
     * @return {Number}
     */
    getFriendsCount() {
        return this.data.friends_count;
    }

    /**
     * getListedCount - Return the user's Twitter listed counter
     *
     * @return {Number}
     */
    getListedCount() {
        return this.data.listed_count;
    }

    /**
     * getFavouritesCount - Return the user's Twitter favourites counter
     *
     * @return {Number}
     */
    getFavouritesCount() {
        return this.data.favourites_count;
    }

    /**
     * getStatusesCount - Return the user's Twitter statuses counter
     *
     * @return {Number}
     */
    getStatusesCount() {
        return this.data.statuses_count;
    }
}

module.exports = TwitterTimeline;
