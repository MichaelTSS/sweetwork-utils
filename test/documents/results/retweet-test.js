/* eslint-disable prefer-arrow-callback */
'use strict';
const expect = require('chai').expect;
const md5 = require('blueimp-md5');
const Retweet = require('../../../documents/results/retweet');

describe('Document result retweet', () => {
    it('should successfully return retweet document from search request', function () {
        let data;
        function fn() {
            data = new Retweet({ created_at: 'Thu Oct 27 09:39:33 +0000 2016',
            id: 791575049073328100,
            id_str: '791575049073328128',
            text: 'RT @CP_yuriya_ist: All Black\n\n#yuriya_ootd https://t.co/xrvA6E6oI2',
            truncated: false,
            entities:
            { hashtags: [],
             symbols: [],
             user_mentions: [],
             urls: [],
             media: [] },
            extended_entities: { media: {} },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user:
            { id: 729983369346322400,
             id_str: '729983369346322432',
             name: 'ゆめりんﾗﾌﾞ♡',
             screen_name: 'rinayumeri',
             location: '阿部夢梨♡',
             description: 'i dol street / ｽﾊﾟｶﾞ ゆめりん♡ しおりん♡ / ｻｯﾎﾟﾛ れいち- / ｾﾝﾀﾞｲ しんじゅ / ﾄ-ｷｮ さらだにょ / ﾅｺﾞﾔ ほののん / ｵｵｻｶ す-ちゃん / ﾌｸｵｶ なのちん / ﾁｷﾊﾟ もも / GEM まほち ひいちゃん/ わ→すた / るか',
             url: null,
             entities: { description: { urls: [] } },
             protected: false,
             followers_count: 94,
             friends_count: 60,
             listed_count: 5,
             created_at: 'Tue May 10 10:36:12 +0000 2016',
             favourites_count: 17894,
             utc_offset: null,
             time_zone: null,
             geo_enabled: false,
             verified: false,
             statuses_count: 19551,
             lang: 'ja',
             contributors_enabled: false,
             is_translator: false,
             is_translation_enabled: false,
             profile_background_color: '000000',
             profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
             profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
             profile_background_tile: false,
             profile_image_url: 'http://pbs.twimg.com/profile_images/758495098573160448/APaRaUhc_normal.jpg',
             profile_image_url_https: 'https://pbs.twimg.com/profile_images/758495098573160448/APaRaUhc_normal.jpg',
             profile_banner_url: 'https://pbs.twimg.com/profile_banners/729983369346322432/1469541674',
             profile_link_color: 'FF691F',
             profile_sidebar_border_color: '000000',
             profile_sidebar_fill_color: '000000',
             profile_text_color: '000000',
             profile_use_background_image: false,
             has_extended_profile: false,
             default_profile: false,
             default_profile_image: false,
             following: false,
             follow_request_sent: false,
             notifications: false,
             translator_type: 'none' },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            retweeted_status:
            { created_at: 'Thu Oct 27 09:29:06 +0000 2016',
             id: 791572422029811700,
             id_str: '791572422029811712',
             text: 'All Black\n\n#yuriya_ootd https://t.co/xrvA6E6oI2',
             truncated: false,
             entities:
              { hashtags: {},
                symbols: [],
                user_mentions: [],
                urls: [],
                media: {} },
             extended_entities: { media: {} },
             metadata: { iso_language_code: 'en', result_type: 'recent' },
             source: '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
             in_reply_to_status_id: null,
             in_reply_to_status_id_str: null,
             in_reply_to_user_id: null,
             in_reply_to_user_id_str: null,
             in_reply_to_screen_name: null,
             user:
              { id: 2857838556,
                id_str: '2857838556',
                name: 'チキパ鈴木友梨耶',
                screen_name: 'CP_yuriya_ist',
                location: 'Japan Tokyo',
                description: 'リーダーのゆりやだよ。ゆりあじゃないよ。まりやのお姉ちゃん NATASHA 赤リップ.動物.K-POP好き #チキパ #鈴木姉妹 #自慢のペット #yuriya_ootd #yuriya_cosme ＊showroomレギュラー番組チキチキパンパン＊11/4〜LIVE LIVE LIVE!＊2/19結成五周年記念ライブ',
                url: 'https://t.co/oSW0VczPHV',
                entities: {},
                protected: false,
                followers_count: 15392,
                friends_count: 155,
                listed_count: 544,
                created_at: 'Thu Oct 16 10:19:38 +0000 2014',
                favourites_count: 778,
                utc_offset: null,
                time_zone: null,
                geo_enabled: false,
                verified: true,
                statuses_count: 7811,
                lang: 'ja',
                contributors_enabled: false,
                is_translator: false,
                is_translation_enabled: false,
                profile_background_color: 'C0DEED',
                profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
                profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
                profile_background_tile: false,
                profile_image_url: 'http://pbs.twimg.com/profile_images/746685217063088132/3cE9J-8M_normal.jpg',
                profile_image_url_https: 'https://pbs.twimg.com/profile_images/746685217063088132/3cE9J-8M_normal.jpg',
                profile_banner_url: 'https://pbs.twimg.com/profile_banners/2857838556/1477453597',
                profile_link_color: '0084B4',
                profile_sidebar_border_color: 'C0DEED',
                profile_sidebar_fill_color: 'DDEEF6',
                profile_text_color: '333333',
                profile_use_background_image: true,
                has_extended_profile: true,
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
             retweet_count: 6,
             favorite_count: 40,
             favorited: false,
             retweeted: false,
             possibly_sensitive: false,
             lang: 'en' },
            is_quote_status: false,
            retweet_count: 6,
            favorite_count: 0,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en' });
        }
        expect(fn).not.to.throw(Error);
        expect(data.getResultUid()).to.equal(md5('https://twitter.com/729983369346322432/status/791575049073328128'));
        expect(data.getType()).to.equal('tweet_retweet');
        expect(data.getTitle()).to.equal(null);
        expect(data.getDescription()).to.equal(null);
        expect(data.getContent()).to.equal('@CP_yuriya_ist: All Black\n\n#yuriya_ootd https://t.co/xrvA6E6oI2');
        expect(data.getUrl()).to.equal('https://twitter.com/729983369346322432/status/791575049073328128');
        expect(data.getLanguages()).to.deep.equal({
            iso: 'en',
            score: 1
        });
        expect(data.getCreatedAt()).to.equal(1477561173);
        expect(data.getCountries()).to.deep.equal({
            iso: 'undef'
        });
        expect(data.getParentId()).to.equal(0);
        expect(data.getMedia()).to.deep.equal({});
        expect(data.getSocialEchoes()).to.deep.equal({
            score: 0,
            tw: {
                nb_favorites: 0,
                nb_retweets: 0
            }
        });
        expect(data.getFeed()).to.deep.equal({
            crc32: null,
            feed_id: null,
            feed_uid: '3969e4b054d7e79a005b3fd477378c80'
        });
    });
});
