/* eslint-disable prefer-arrow-callback */
'use strict';
const expect = require('chai').expect;
const md5 = require('blueimp-md5');
const Tweet = require('../../../documents/results/tweet');

describe('Document result tweet', () => {
    it('should successfully return tweet document from search request', function () {
        let data;
        function fn() {
            data = new Tweet({ created_at: 'Thu Oct 27 07:26:53 +0000 2016',
            id: 791541665232072700,
            id_str: '791541665232072704',
            text: 'Emmanuel Macron est-il le Tom Cruise de la vie politique française ? https://t.co/5SoZiwnV0s',
            truncated: false,
            entities:
            { hashtags: [],
             symbols: [],
             user_mentions: [],
             urls: [] },
            metadata: { iso_language_code: 'fr', result_type: 'recent' },
            source: '<a href="http://twitter.com" rel="nofollow">Twitter Web Client</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user:
            { id: 3400859474,
             id_str: '3400859474',
             name: 'Borntokill',
             screen_name: 'groila1',
             location: '',
             description: 'Passer pour un nazi aux yeux du peuple de Gôche est une volupté de fin gourmet (excusez-moi Mr G.Courteline). BornToKill ? Un hommage à Oliver Stone.',
             url: null,
             entities: { description: [Object] },
             protected: false,
             followers_count: 1870,
             friends_count: 1864,
             listed_count: 50,
             created_at: 'Mon Aug 31 06:27:35 +0000 2015',
             favourites_count: 2490,
             utc_offset: 7200,
             time_zone: 'Paris',
             geo_enabled: false,
             verified: false,
             statuses_count: 34619,
             lang: 'fr',
             contributors_enabled: false,
             is_translator: false,
             is_translation_enabled: false,
             profile_background_color: 'C0DEED',
             profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
             profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
             profile_background_tile: false,
             profile_image_url: 'http://pbs.twimg.com/profile_images/638851870530781184/SJPaxDIC_normal.jpg',
             profile_image_url_https: 'https://pbs.twimg.com/profile_images/638851870530781184/SJPaxDIC_normal.jpg',
             profile_banner_url: 'https://pbs.twimg.com/profile_banners/3400859474/1443771778',
             profile_link_color: '0084B4',
             profile_sidebar_border_color: 'C0DEED',
             profile_sidebar_fill_color: 'DDEEF6',
             profile_text_color: '333333',
             profile_use_background_image: true,
             has_extended_profile: false,
             default_profile: true,
             default_profile_image: false,
             following: false,
             follow_request_sent: false,
             notifications: false,
             translator_type: 'none' },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 1,
            favorite_count: 0,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'fr' });
        }
        expect(fn).not.to.throw(Error);
        expect(data.getResultUid()).to.equal(md5('https://twitter.com/3400859474/status/791541665232072704'));
        expect(data.getType()).to.equal('tweet');
        expect(data.getTitle()).to.equal(null);
        expect(data.getDescription()).to.equal(null);
        expect(data.getContent()).to.equal('Emmanuel Macron est-il le Tom Cruise de la vie politique française ? https://t.co/5SoZiwnV0s');
        expect(data.getUrl()).to.equal('https://twitter.com/3400859474/status/791541665232072704');
        expect(data.getLanguages()).to.deep.equal({
            iso: 'fr',
            score: 1
        });
        expect(data.getCreatedAt()).to.equal(1477553213);
        expect(data.getCountries()).to.deep.equal({
            iso: 'undef'
        });
        expect(data.getParentId()).to.equal(0);
        expect(data.getMedia()).to.deep.equal({});
        expect(data.getSocialEchoes()).to.deep.equal({
            score: 1,
            tw: {
                nb_favorites: 0,
                nb_retweets: 1
            }
        });
        expect(data.getFeed()).to.deep.equal({
            crc32: null,
            feed_id: null,
            feed_uid: '1f9e4e38328750c16dcfad1fd4057f69'
        });
    });
});
