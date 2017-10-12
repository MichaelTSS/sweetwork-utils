'use strict';
const md5 = require('blueimp-md5');
const moment = require('moment-timezone');
const RSS_DATE_TIME_FORMAT = 'ddd, DD MMM YYYY HH:mm:ss ZZ'; // Fri, 21 Oct 2016 09:20:15 +0200

// ex : view-source:http://www.lemonde.fr/services-aux-internautes/rss_full.xml
class RssItem {
    /**
     * @param  {object} data
     * @return {object}
     */
    constructor(data) {
        this.data = data;
        this.provider = 'rss';
    }

    getResultUid() {
        return md5(this.getUrl());
    }

    getType() {
        return 'rss';
    }

    getTitle() {
        return this.data.title;
    }

    getDescription() {
        return this.data.description;
    }

    getContent() {
        return '';
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
        return moment(this.data.pubDate, RSS_DATE_TIME_FORMAT).unix();
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
        return null;
    }
}

module.exports = RssItem;
