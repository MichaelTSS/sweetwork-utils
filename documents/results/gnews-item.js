'use strict';
const md5 = require('blueimp-md5');
const moment = require('moment-timezone');
const striptags = require('striptags');
const GNEWS_DATE_TIME_FORMAT = 'ddd, DD MMM YYYY HH:mm:ss'; // Tue, 18 Oct 2016 10:19:09

// ex : view-source:https://news.google.com/news?ned=fr&num=100&output=rss&q=%28%22youpi%22
class GnewsItem {
    /**
     * @param  {object} data
     * @return {object}
     */
    constructor(data) {
        this.data = data;
        this.provider = 'googlenews';
    }

    getResultUid() {
        return md5(this.getUrl());
    }

    getType() {
        return 'google_news';
    }

    getTitle() {
        return this.data.title;
    }

    getDescription() {
        return striptags(this.data.description);
    }

    getContent() {
        return '';
    }

    getUrl() {
        const tab = this.data.link.split('url=');
        return tab[1];
    }

    getLanguages() {
        return {
            iso: 'undef',
            score: 1
        };
    }

    getCreatedAt() {
        return moment(this.data.pubDate, GNEWS_DATE_TIME_FORMAT).unix();
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

module.exports = GnewsItem;
