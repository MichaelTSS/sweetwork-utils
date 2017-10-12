/* eslint-disable prefer-arrow-callback, max-len */
'use strict';
const expect = require('chai').expect;
const md5 = require('blueimp-md5');
const Factory = require('../../../documents/results/factory');

describe('Document result factory', () => {
    let factory;

    it('should successfully instantiate factory', function () {
        function fn() {
            factory = new Factory();
        }
        expect(fn).not.to.throw(Error);
        expect(factory.document).to.equal(null);
    });

    it('should successfully return instagram_media document from search request', function () {
        let data;
        let result;
        function fn() {
            data = factory.fromType('instagram', { attribution: null,
            tags:
            ['king',
             'priest',
             'selassie',
             'blackmarcus',
             'prophet',
             'emmanuel'],
            type: 'image',
            location: null,
            comments: { count: 2 },
            filter: 'Clarendon',
            created_time: '1477297088',
            link: 'https://www.instagram.com/p/BL8E0d0jUlS/',
            likes: { count: 68 },
            images:
            { low_resolution:
              { url: 'https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/14723736_399239973798307_4666042463100600320_n.jpg?ig_cache_key=MTM2Nzk4OTU4NDQzMjgxMDMyMg%3D%3D.2',
                width: 320,
                height: 320 },
             thumbnail:
              { url: 'https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/14723736_399239973798307_4666042463100600320_n.jpg?ig_cache_key=MTM2Nzk4OTU4NDQzMjgxMDMyMg%3D%3D.2',
                width: 150,
                height: 150 },
             standard_resolution:
              { url: 'https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/14723736_399239973798307_4666042463100600320_n.jpg?ig_cache_key=MTM2Nzk4OTU4NDQzMjgxMDMyMg%3D%3D.2',
                width: 320,
                height: 320 } },
            users_in_photo: [],
            caption:
            { created_time: '1477297088',
             text: 'Holy trinity #prophet #priest #king #blackmarcus i #emmanuel i #selassie i LIVE',
             from:
              { username: 'bobokisubika',
                profile_picture: 'https://scontent.cdninstagram.com/t51.2885-19/s150x150/14478433_1796419633972604_9825665402535936_a.jpg',
                id: '2165602389',
                full_name: 'BOBO KISUBIKA' },
             id: '17843610085158486' },
            user_has_liked: false,
            id: '1367989584432810322_2165602389',
            user:
            { username: 'bobokisubika',
             profile_picture: 'https://scontent.cdninstagram.com/t51.2885-19/s150x150/14478433_1796419633972604_9825665402535936_a.jpg',
             id: '2165602389',
             full_name: 'BOBO KISUBIKA' }
            });
            result = factory.getIndex();
        }
        expect(fn).not.to.throw(Error);
        expect(data.getResultUid()).to.equal(md5('https://www.instagram.com/p/BL8E0d0jUlS/'));
        expect(data.getType()).to.equal('instagram_media');
        expect(data.getTitle()).to.equal(null);
        expect(data.getDescription()).to.equal(null);
        expect(data.getContent()).to.equal('Holy trinity #prophet #priest #king #blackmarcus i #emmanuel i #selassie i LIVE');
        expect(data.getUrl()).to.equal('https://www.instagram.com/p/BL8E0d0jUlS/');
        expect(data.getLanguages()).to.deep.equal({
            iso: 'undef',
            score: 1
        });
        expect(data.getCreatedAt()).to.equal(1477297088);
        expect(data.getCountries()).to.deep.equal({
            iso: 'undef'
        });
        expect(data.getParentId()).to.equal(0);
        expect(data.getMedia()).to.deep.equal({
            type: 'image',
            name: null,
            caption: null,
            description: null,
            link: 'https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/14723736_399239973798307_4666042463100600320_n.jpg?ig_cache_key=MTM2Nzk4OTU4NDQzMjgxMDMyMg%3D%3D.2',
            url: 'https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/14723736_399239973798307_4666042463100600320_n.jpg?ig_cache_key=MTM2Nzk4OTU4NDQzMjgxMDMyMg%3D%3D.2',
            duration: null
        });
        expect(data.getSocialEchoes()).to.deep.equal({
            score: 70,
            ig: {
                nb_comments: 2,
                nb_likes: 68
            }
        });
        expect(data.getFeed()).to.deep.equal({
            crc32: null,
            feed_id: null,
            feed_uid: '1a5c49392863d287bade252b89cca1fa'
        });
        // factory tests :
        expect(result).to.be.an('object');
        expect(result).to.deep.equal({
            result_uid: md5('https://www.instagram.com/p/BL8E0d0jUlS/'),
            result_id: null,
            client_id: undefined,
            type: 'instagram_media',
            title: null,
            description: null,
            content: 'Holy trinity #prophet #priest #king #blackmarcus i #emmanuel i #selassie i LIVE',
            url: 'https://www.instagram.com/p/BL8E0d0jUlS/',
            languages: { iso: 'undef', score: 1 },
            created_at: 1477297088,
            countries: { iso: 'undef' },
            parent_id: 0,
            media: {
                type: 'image',
                name: null,
                caption: null,
                description: null,
                link: 'https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/14723736_399239973798307_4666042463100600320_n.jpg?ig_cache_key=MTM2Nzk4OTU4NDQzMjgxMDMyMg%3D%3D.2',
                url: 'https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/14723736_399239973798307_4666042463100600320_n.jpg?ig_cache_key=MTM2Nzk4OTU4NDQzMjgxMDMyMg%3D%3D.2',
                duration: null
            },
            sentiment: 0,
            pinned: { is_pinned: 0, content: null },
            top_score: 0,
            status: { value: 'published' },
            social_echoes: { score: 70, ig: { nb_comments: 2, nb_likes: 68 } },
            feed:
            { feed_uid: '1a5c49392863d287bade252b89cca1fa',
            feed_id: null,
            crc32: null },
            profile: {},
            platform_tags: [
                'king',
                'priest',
                'selassie',
                'blackmarcus',
                'prophet',
                'emmanuel'
            ],
            tags: []
        });
    });

    it('should successfully return retweet document from search request', function () {
        let data;
        let result;
        function fn() {
            data = factory.fromType('twitter', { created_at: 'Thu Oct 27 09:39:33 +0000 2016',
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
            result = factory.getIndex();
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
        // factory tests :
        expect(result).to.be.an('object');
        expect(result).to.deep.equal({
            result_uid: md5('https://twitter.com/729983369346322432/status/791575049073328128'),
            result_id: null,
            client_id: undefined,
            type: 'tweet_retweet',
            title: null,
            description: null,
            content: '@CP_yuriya_ist: All Black\n\n#yuriya_ootd https://t.co/xrvA6E6oI2',
            url: 'https://twitter.com/729983369346322432/status/791575049073328128',
            languages: { iso: 'en', score: 1 },
            created_at: 1477561173,
            countries: { iso: 'undef' },
            parent_id: 0,
            media: {},
            sentiment: 0,
            pinned: { is_pinned: 0, content: null },
            top_score: 0,
            status: { value: 'published' },
            social_echoes: { score: 0, tw: { nb_favorites: 0, nb_retweets: 0 } },
            feed:
            { feed_uid: '3969e4b054d7e79a005b3fd477378c80',
            feed_id: null,
            crc32: null },
            profile: {},
            platform_tags: null,
            tags: []
        });
    });

    it('should successfully return tweet document from search request', function () {
        let data;
        let result;
        function fn() {
            data = factory.fromType('twitter', { created_at: 'Thu Oct 27 07:26:53 +0000 2016',
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
            result = factory.getIndex();
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
        // factory tests :
        expect(result).to.be.an('object');
        expect(result).to.deep.equal({
            result_uid: md5('https://twitter.com/3400859474/status/791541665232072704'),
            result_id: null,
            client_id: undefined,
            type: 'tweet',
            title: null,
            description: null,
            content: 'Emmanuel Macron est-il le Tom Cruise de la vie politique française ? https://t.co/5SoZiwnV0s',
            url: 'https://twitter.com/3400859474/status/791541665232072704',
            languages: { iso: 'fr', score: 1 },
            created_at: 1477553213,
            countries: { iso: 'undef' },
            parent_id: 0,
            media: {},
            sentiment: 0,
            pinned: { is_pinned: 0, content: null },
            top_score: 0,
            status: { value: 'published' },
            social_echoes: { score: 1, tw: { nb_favorites: 0, nb_retweets: 1 } },
            feed:
            { feed_uid: '1f9e4e38328750c16dcfad1fd4057f69',
            feed_id: null,
            crc32: null },
            profile: {},
            platform_tags: null,
            tags: []
        });
    });
});
