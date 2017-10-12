/* eslint-disable prefer-arrow-callback, max-len */
'use strict';
const expect = require('chai').expect;
const md5 = require('blueimp-md5');
const Factory = require('../../../documents/feeds/factory');

describe('Document feed factory', () => {
    let factory;

    it('should successfully instantiate factory', function () {
        function fn() {
            factory = new Factory();
        }
        expect(fn).not.to.throw(Error);
        expect(factory.document).to.equal(null);
    });

    it('should successfully return instagram_feed document from user request', function () {
        let data;
        let feed;
        function fn() {
            data = factory.fromType('instagram', {
                id: 1574083,
                username: 'snoopdogg',
                full_name: 'Snoop Dogg',
                profile_picture: 'http://distillery.s3.amazonaws.com/profiles/profile_1574083_75sq_1295469061.jpg',
                bio: 'This is my bio',
                website: 'http://snoopdogg.com',
                counts: {
                    media: 1320,
                    follows: 420,
                    followed_by: 3410
                }
            });
            feed = factory.getFeed();
        }
        expect(fn).not.to.throw(Error);
        expect(data.data).to.deep.equal({
            id: 1574083,
            username: 'snoopdogg',
            full_name: 'Snoop Dogg',
            profile_picture: 'http://distillery.s3.amazonaws.com/profiles/profile_1574083_75sq_1295469061.jpg',
            bio: 'This is my bio',
            website: 'http://snoopdogg.com',
            counts: {
                media: 1320,
                follows: 420,
                followed_by: 3410
            }
        });
        expect(data.provider).to.equal('instagram');
        expect(data.getUid()).to.equal(md5('https://instagram.com/users/1574083'));
        expect(data.getType()).to.equal('instagram_feed');
        expect(data.getSubType()).to.equal(null);
        expect(data.getPlatformId()).to.equal(1574083);
        expect(data.getUri()).to.equal('https://instagram.com/users/1574083');
        expect(data.getUsername()).to.equal('snoopdogg');
        expect(data.getDescription()).to.equal('This is my bio');
        expect(data.getLanguage()).to.equal(null);
        expect(data.getUrl()).to.equal('https://instagram.com/snoopdogg');
        expect(data.getAvatarUrl()).to.equal('http://distillery.s3.amazonaws.com/profiles/profile_1574083_75sq_1295469061.jpg');
        expect(data.getFullName()).to.equal('Snoop Dogg');
        expect(data.getWebsite()).to.equal('http://snoopdogg.com');
        expect(data.getCounts()).to.deep.equal({
            media: 1320,
            follows: 420,
            followed_by: 3410
        });
        expect(data.getMediaCount()).to.equal(1320);
        expect(data.getFollowsCount()).to.equal(420);
        expect(data.getFollowedByCount()).to.equal(3410);
        // factory tests :
        expect(feed).to.be.an('object');
        expect(feed).to.deep.equal({
            feed_uid: md5('https://instagram.com/users/1574083'),
            feed_id: null,
            type: 'instagram_feed',
            subtype: null,
            original_id: 1574083,
            screen_name: 'snoopdogg',
            full_name: 'Snoop Dogg',
            description: 'This is my bio',
            language: null,
            uri: 'https://instagram.com/users/1574083',
            url: 'https://instagram.com/snoopdogg',
            metadatas: {
                media: 1320,
                follows: 420,
                followed_by: 3410
            }
        });
    });

    it('should successfully return instagram_feed document from search tag request', function () {
        let data;
        let feed;
        function fn() {
            data = factory.fromType('instagram', {
                type: 'image',
                users_in_photo: [],
                filter: 'Earlybird',
                tags: ['snow'],
                comments: {
                    count: 3
                },
                caption: {
                    created_time: 1296703540,
                    text: '#Snow',
                    from: {
                        username: 'emohatch',
                        id: 1242695
                    },
                    id: 26589964
                },
                likes: {
                    count: 1
                },
                link: 'http://instagr.am/p/BWl6P/',
                user: {
                    username: 'emohatch',
                    profile_picture: 'http://distillery.s3.amazonaws.com/profiles/profile_1242695_75sq_1293915800.jpg',
                    id: 1242695,
                    full_name: 'Dave'
                },
                created_time: 1296703536,
                images: {
                    low_resolution: {
                        url: 'http://distillery.s3.amazonaws.com/media/2011/02/02/f9443f3443484c40b4792fa7c76214d5_6.jpg',
                        width: 306,
                        height: 306
                    },
                    thumbnail: {
                        url: 'http://distillery.s3.amazonaws.com/media/2011/02/02/f9443f3443484c40b4792fa7c76214d5_5.jpg',
                        width: 150,
                        height: 150
                    },
                    standard_resolution: {
                        url: 'http://distillery.s3.amazonaws.com/media/2011/02/02/f9443f3443484c40b4792fa7c76214d5_7.jpg',
                        width: 612,
                        height: 612
                    }
                },
                id: 22699663,
                location: null
            });
            feed = factory.getFeed();
        }
        expect(fn).not.to.throw(Error);
        expect(data.data).to.deep.equal({
            username: 'emohatch',
            profile_picture: 'http://distillery.s3.amazonaws.com/profiles/profile_1242695_75sq_1293915800.jpg',
            id: 1242695,
            full_name: 'Dave'
        });
        expect(data.provider).to.equal('instagram');
        expect(data.getUid()).to.equal(md5('https://instagram.com/users/1242695'));
        expect(data.getType()).to.equal('instagram_feed');
        expect(data.getSubType()).to.equal(null);
        expect(data.getPlatformId()).to.equal(1242695);
        expect(data.getUri()).to.equal('https://instagram.com/users/1242695');
        expect(data.getUsername()).to.equal('emohatch');
        expect(data.getDescription()).to.equal(undefined);
        expect(data.getLanguage()).to.equal(null);
        expect(data.getUrl()).to.equal('https://instagram.com/emohatch');
        expect(data.getAvatarUrl()).to.equal('http://distillery.s3.amazonaws.com/profiles/profile_1242695_75sq_1293915800.jpg');
        expect(data.getFullName()).to.equal('Dave');
        expect(data.getWebsite()).to.equal(undefined);
        expect(data.getCounts()).to.equal(undefined);
        expect(data.getMediaCount()).to.equal(undefined);
        expect(data.getFollowsCount()).to.equal(undefined);
        expect(data.getFollowedByCount()).to.equal(undefined);
        // factory tests :
        expect(feed).to.be.an('object');
        expect(feed).to.deep.equal({
            feed_uid: md5('https://instagram.com/users/1242695'),
            feed_id: null,
            type: 'instagram_feed',
            subtype: null,
            original_id: 1242695,
            screen_name: 'emohatch',
            full_name: 'Dave',
            description: undefined,
            language: null,
            uri: 'https://instagram.com/users/1242695',
            url: 'https://instagram.com/emohatch',
            metadatas: undefined
        });
    });

    it('should successfully return instagram_feed document from search all user\'s publications request', function () {
        let data;
        let feed;
        function fn() {
            data = factory.fromType('instagram', {
                comments: {
                    count: 0
                },
                caption: {
                    created_time: 1296710352,
                    text: 'Inside le truc #foodtruck',
                    from: {
                        username: 'kevin',
                        full_name: 'Kevin Systrom',
                        type: 'user',
                        id: 3
                    },
                    id: 26621408
                },
                likes: {
                    count: 15
                },
                link: 'http://instagr.am/p/BWrVZ/',
                user: {
                    username: 'kevin',
                    profile_picture: 'http://distillery.s3.amazonaws.com/profiles/profile_3_75sq_1295574122.jpg',
                    id: 3,
                    full_name: 'Kevin Systrom'
                },
                created_time: 1296710327,
                images: {
                    low_resolution: {
                        url: 'http://distillery.s3.amazonaws.com/media/2011/02/02/6ea7baea55774c5e81e7e3e1f6e791a7_6.jpg',
                        width: 306,
                        height: 306
                    },
                    thumbnail: {
                        url: 'http://distillery.s3.amazonaws.com/media/2011/02/02/6ea7baea55774c5e81e7e3e1f6e791a7_5.jpg',
                        width: 150,
                        height: 150
                    },
                    standard_resolution: {
                        url: 'http://distillery.s3.amazonaws.com/media/2011/02/02/6ea7baea55774c5e81e7e3e1f6e791a7_7.jpg',
                        width: 612,
                        height: 612
                    }
                },
                type: 'image',
                users_in_photo: [],
                filter: 'Earlybird',
                tags: ['foodtruck'],
                id: 22721881,
                location: {
                    latitude: 37.778720183610183,
                    longitude: -122.3962783813477,
                    id: 520640,
                    street_address: '',
                    name: 'Le Truc'
                }
            });
            feed = factory.getFeed();
        }
        expect(fn).not.to.throw(Error);
        expect(data.data).to.deep.equal({
            username: 'kevin',
            profile_picture: 'http://distillery.s3.amazonaws.com/profiles/profile_3_75sq_1295574122.jpg',
            id: 3,
            full_name: 'Kevin Systrom'
        });
        expect(data.provider).to.equal('instagram');
        expect(data.getUid()).to.equal(md5('https://instagram.com/users/3'));
        expect(data.getType()).to.equal('instagram_feed');
        expect(data.getSubType()).to.equal(null);
        expect(data.getPlatformId()).to.equal(3);
        expect(data.getUri()).to.equal('https://instagram.com/users/3');
        expect(data.getUsername()).to.equal('kevin');
        expect(data.getDescription()).to.equal(undefined);
        expect(data.getLanguage()).to.equal(null);
        expect(data.getUrl()).to.equal('https://instagram.com/kevin');
        expect(data.getAvatarUrl()).to.equal('http://distillery.s3.amazonaws.com/profiles/profile_3_75sq_1295574122.jpg');
        expect(data.getFullName()).to.equal('Kevin Systrom');
        expect(data.getWebsite()).to.equal(undefined);
        expect(data.getCounts()).to.equal(undefined);
        expect(data.getMediaCount()).to.equal(undefined);
        expect(data.getFollowsCount()).to.equal(undefined);
        expect(data.getFollowedByCount()).to.equal(undefined);
        // factory tests :
        expect(feed).to.be.an('object');
        expect(feed).to.deep.equal({
            feed_uid: md5('https://instagram.com/users/3'),
            feed_id: null,
            type: 'instagram_feed',
            subtype: null,
            original_id: 3,
            screen_name: 'kevin',
            full_name: 'Kevin Systrom',
            description: undefined,
            language: null,
            uri: 'https://instagram.com/users/3',
            url: 'https://instagram.com/kevin',
            metadatas: undefined
        });
    });

    it('should successfully return twitter_timeline document from user request', function () {
        let data;
        let feed;
        function fn() {
            data = factory.fromType('twitter', {
                id: 2244994945,
                id_str: '2244994945',
                name: 'TwitterDev',
                screen_name: 'TwitterDev',
                location: 'Internet',
                profile_location: null,
                description: 'Developer and Platform Relations @Twitter. We are developer advocates. We can\'t answer all your questions, but we listen to all of them!',
                url: 'https://t.co/66w26cua1O',
                entities: {
                    url: {
                        urls: [
                            {
                                url: 'https://t.co/66w26cua1O',
                                expanded_url: 'https://dev.twitter.com/',
                                display_url: 'dev.twitter.com',
                                indices: [
                                    0,
                                    23
                                ]
                            }
                        ]
                    },
                    description: {
                        urls: []
                    }
                },
                protected: false,
                followers_count: 429831,
                friends_count: 1535,
                listed_count: 999,
                created_at: 'Sat Dec 14 04:35:55 +0000 2013',
                favourites_count: 1713,
                utc_offset: -25200,
                time_zone: 'Pacific Time (US & Canada)',
                geo_enabled: true,
                verified: true,
                statuses_count: 2588,
                lang: 'en',
                status: {
                    created_at: 'Tue Aug 30 10:52:20 +0000 2016',
                    id: 770574870841331700,
                    id_str: '770574870841331712',
                    text: '@lesterhan oops! Thanks for pointing that out, looks like the image is no longer available! we will fix in a future doc version! ^AP',
                    truncated: false,
                    entities: {
                        hashtags: [],
                        symbols: [],
                        user_mentions: [
                            {
                                screen_name: 'lesterhan',
                                name: 'Lester Han',
                                id: 126025266,
                                id_str: '126025266',
                                indices: [
                                    0,
                                    10
                                ]
                            }
                        ],
                        urls: []
                    },
                    source: '<a href=\'//about.twitter.com/products/tweetdeck%5C%22\' rel=\'nofollow\'>TweetDeck</a>',
                    in_reply_to_status_id: 770332467626672100,
                    in_reply_to_status_id_str: '770332467626672129',
                    in_reply_to_user_id: 126025266,
                    in_reply_to_user_id_str: '126025266',
                    in_reply_to_screen_name: 'lesterhan',
                    geo: null,
                    coordinates: null,
                    place: null,
                    contributors: null,
                    is_quote_status: false,
                    retweet_count: 0,
                    favorite_count: 0,
                    favorited: false,
                    retweeted: false,
                    lang: 'en'
                },
                contributors_enabled: false,
                is_translator: false,
                is_translation_enabled: false,
                profile_background_color: 'FFFFFF',
                profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
                profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
                profile_background_tile: false,
                profile_image_url: 'http://pbs.twimg.com/profile_images/530814764687949824/npQQVkq8_normal.png',
                profile_image_url_https: 'https://pbs.twimg.com/profile_images/530814764687949824/npQQVkq8_normal.png',
                profile_banner_url: 'https://pbs.twimg.com/profile_banners/2244994945/1396995246',
                profile_link_color: '0084B4',
                profile_sidebar_border_color: 'FFFFFF',
                profile_sidebar_fill_color: 'DDEEF6',
                profile_text_color: '333333',
                profile_use_background_image: false,
                has_extended_profile: false,
                default_profile: false,
                default_profile_image: false,
                following: false,
                follow_request_sent: false,
                notifications: false,
                translator_type: 'regular'
            });
            feed = factory.getFeed();
        }
        expect(fn).not.to.throw(Error);
        expect(data.data).to.deep.equal({
            id: 2244994945,
            id_str: '2244994945',
            name: 'TwitterDev',
            screen_name: 'TwitterDev',
            location: 'Internet',
            profile_location: null,
            description: 'Developer and Platform Relations @Twitter. We are developer advocates. We can\'t answer all your questions, but we listen to all of them!',
            url: 'https://t.co/66w26cua1O',
            entities: {
                url: {
                    urls: [
                        {
                            url: 'https://t.co/66w26cua1O',
                            expanded_url: 'https://dev.twitter.com/',
                            display_url: 'dev.twitter.com',
                            indices: [
                                0,
                                23
                            ]
                        }
                    ]
                },
                description: {
                    urls: []
                }
            },
            protected: false,
            followers_count: 429831,
            friends_count: 1535,
            listed_count: 999,
            created_at: 'Sat Dec 14 04:35:55 +0000 2013',
            favourites_count: 1713,
            utc_offset: -25200,
            time_zone: 'Pacific Time (US & Canada)',
            geo_enabled: true,
            verified: true,
            statuses_count: 2588,
            lang: 'en',
            status: {
                created_at: 'Tue Aug 30 10:52:20 +0000 2016',
                id: 770574870841331700,
                id_str: '770574870841331712',
                text: '@lesterhan oops! Thanks for pointing that out, looks like the image is no longer available! we will fix in a future doc version! ^AP',
                truncated: false,
                entities: {
                    hashtags: [],
                    symbols: [],
                    user_mentions: [
                        {
                            screen_name: 'lesterhan',
                            name: 'Lester Han',
                            id: 126025266,
                            id_str: '126025266',
                            indices: [
                                0,
                                10
                            ]
                        }
                    ],
                    urls: []
                },
                source: '<a href=\'//about.twitter.com/products/tweetdeck%5C%22\' rel=\'nofollow\'>TweetDeck</a>',
                in_reply_to_status_id: 770332467626672100,
                in_reply_to_status_id_str: '770332467626672129',
                in_reply_to_user_id: 126025266,
                in_reply_to_user_id_str: '126025266',
                in_reply_to_screen_name: 'lesterhan',
                geo: null,
                coordinates: null,
                place: null,
                contributors: null,
                is_quote_status: false,
                retweet_count: 0,
                favorite_count: 0,
                favorited: false,
                retweeted: false,
                lang: 'en'
            },
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: 'FFFFFF',
            profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
            profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/530814764687949824/npQQVkq8_normal.png',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/530814764687949824/npQQVkq8_normal.png',
            profile_banner_url: 'https://pbs.twimg.com/profile_banners/2244994945/1396995246',
            profile_link_color: '0084B4',
            profile_sidebar_border_color: 'FFFFFF',
            profile_sidebar_fill_color: 'DDEEF6',
            profile_text_color: '333333',
            profile_use_background_image: false,
            has_extended_profile: false,
            default_profile: false,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'regular'
        });
        expect(data.provider).to.equal('twitter');
        expect(data.getUid()).to.equal(md5('https://twitter.com/2244994945'));
        expect(data.getType()).to.equal('twitter_timeline');
        expect(data.getSubType()).to.equal(null);
        expect(data.getPlatformId()).to.equal('2244994945');
        expect(data.getUri()).to.equal('https://twitter.com/2244994945');
        expect(data.getUsername()).to.equal('TwitterDev');
        expect(data.getDescription()).to.equal('Developer and Platform Relations @Twitter. We are developer advocates. We can\'t answer all your questions, but we listen to all of them!');
        expect(data.getLanguage()).to.equal('en');
        expect(data.getUrl()).to.equal('https://twitter.com/TwitterDev');
        expect(data.getAvatarUrl()).to.equal('https://pbs.twimg.com/profile_images/530814764687949824/npQQVkq8_normal.png');
        expect(data.getFullName()).to.equal('TwitterDev');
        expect(data.isVerified()).to.equal(true);
        expect(data.getCounts()).to.deep.equal({
            followers_count: 429831,
            friends_count: 1535,
            listed_count: 999,
            favourites_count: 1713,
            statuses_count: 2588
        });
        expect(data.getFollowersCount()).to.equal(429831);
        expect(data.getFriendsCount()).to.equal(1535);
        expect(data.getListedCount()).to.equal(999);
        expect(data.getFavouritesCount()).to.equal(1713);
        expect(data.getStatusesCount()).to.equal(2588);
        // factory tests :
        expect(feed).to.be.an('object');
        expect(feed).to.deep.equal({
            feed_uid: md5('https://twitter.com/2244994945'),
            feed_id: null,
            type: 'twitter_timeline',
            subtype: null,
            original_id: '2244994945',
            screen_name: 'TwitterDev',
            full_name: 'TwitterDev',
            description: 'Developer and Platform Relations @Twitter. We are developer advocates. We can\'t answer all your questions, but we listen to all of them!',
            language: 'en',
            uri: 'https://twitter.com/2244994945',
            url: 'https://twitter.com/TwitterDev',
            metadatas: {
                followers_count: 429831,
                friends_count: 1535,
                listed_count: 999,
                favourites_count: 1713,
                statuses_count: 2588
            }
        });
    });

    it('should successfully return twitter_timeline document from search query request', function () {
        let data;
        let feed;
        function fn() {
            data = factory.fromType('twitter', {
                coordinates: null,
                favorited: false,
                truncated: false,
                created_at: 'Fri Sep 21 22:51:18 +0000 2012',
                id_str: '249279667666817024',
                entities: {
                    urls: [],
                    hashtags: [
                        {
                            text: 'freebandnames',
                            indices: [
                                20,
                                34
                            ]
                        }
                    ],
                    user_mentions: []
                },
                in_reply_to_user_id_str: null,
                contributors: null,
                text: 'The Foolish Mortals #freebandnames',
                metadata: {
                    iso_language_code: 'en',
                    result_type: 'recent'
                },
                retweet_count: 0,
                in_reply_to_status_id_str: null,
                id: 249279667666817024,
                geo: null,
                retweeted: false,
                in_reply_to_user_id: null,
                place: null,
                user: {
                    profile_sidebar_fill_color: 'BFAC83',
                    profile_sidebar_border_color: '615A44',
                    profile_background_tile: true,
                    name: 'Marty Elmer',
                    profile_image_url: 'http://a0.twimg.com/profile_images/1629790393/shrinker_2000_trans_normal.png',
                    created_at: 'Mon May 04 00:05:00 +0000 2009',
                    location: 'Wisconsin, USA',
                    follow_request_sent: null,
                    profile_link_color: '3B2A26',
                    is_translator: false,
                    id_str: '37539828',
                    entities: {
                        url: {
                            urls: [
                                {
                                    expanded_url: null,
                                    url: 'http://www.omnitarian.me',
                                    indices: [
                                        0,
                                        24
                                    ]
                                }
                            ]
                        },
                        description: {
                            urls: []
                        }
                    },
                    default_profile: false,
                    contributors_enabled: false,
                    favourites_count: 647,
                    url: 'http://www.omnitarian.me',
                    profile_image_url_https: 'https://si0.twimg.com/profile_images/1629790393/shrinker_2000_trans_normal.png',
                    utc_offset: -21600,
                    id: 37539828,
                    profile_use_background_image: true,
                    listed_count: 52,
                    profile_text_color: '000000',
                    lang: 'en',
                    followers_count: 608,
                    protected: false,
                    notifications: null,
                    profile_background_image_url_https: 'https://si0.twimg.com/profile_background_images/106455659/rect6056-9.png',
                    profile_background_color: 'EEE3C4',
                    verified: false,
                    geo_enabled: false,
                    time_zone: 'Central Time (US & Canada)',
                    description: 'Cartoonist, Illustrator, and T-Shirt connoisseur',
                    default_profile_image: false,
                    profile_background_image_url: 'http://a0.twimg.com/profile_background_images/106455659/rect6056-9.png',
                    statuses_count: 3575,
                    friends_count: 249,
                    following: null,
                    show_all_inline_media: true,
                    screen_name: 'Omnitarian'
                },
                in_reply_to_screen_name: null,
                source: '<a href=\'//twitter.com/download/iphone%5C%22\' rel=\'nofollow\'>Twitter for iPhone</a>',
                in_reply_to_status_id: null
            });
            feed = factory.getFeed();
        }
        expect(fn).not.to.throw(Error);
        expect(data.data).to.deep.equal({
            profile_sidebar_fill_color: 'BFAC83',
            profile_sidebar_border_color: '615A44',
            profile_background_tile: true,
            name: 'Marty Elmer',
            profile_image_url: 'http://a0.twimg.com/profile_images/1629790393/shrinker_2000_trans_normal.png',
            created_at: 'Mon May 04 00:05:00 +0000 2009',
            location: 'Wisconsin, USA',
            follow_request_sent: null,
            profile_link_color: '3B2A26',
            is_translator: false,
            id_str: '37539828',
            entities: {
                url: {
                    urls: [
                        {
                            expanded_url: null,
                            url: 'http://www.omnitarian.me',
                            indices: [
                                0,
                                24
                            ]
                        }
                    ]
                },
                description: {
                    urls: []
                }
            },
            default_profile: false,
            contributors_enabled: false,
            favourites_count: 647,
            url: 'http://www.omnitarian.me',
            profile_image_url_https: 'https://si0.twimg.com/profile_images/1629790393/shrinker_2000_trans_normal.png',
            utc_offset: -21600,
            id: 37539828,
            profile_use_background_image: true,
            listed_count: 52,
            profile_text_color: '000000',
            lang: 'en',
            followers_count: 608,
            protected: false,
            notifications: null,
            profile_background_image_url_https: 'https://si0.twimg.com/profile_background_images/106455659/rect6056-9.png',
            profile_background_color: 'EEE3C4',
            verified: false,
            geo_enabled: false,
            time_zone: 'Central Time (US & Canada)',
            description: 'Cartoonist, Illustrator, and T-Shirt connoisseur',
            default_profile_image: false,
            profile_background_image_url: 'http://a0.twimg.com/profile_background_images/106455659/rect6056-9.png',
            statuses_count: 3575,
            friends_count: 249,
            following: null,
            show_all_inline_media: true,
            screen_name: 'Omnitarian'
        });
        expect(data.provider).to.equal('twitter');
        expect(data.getUid()).to.equal(md5('https://twitter.com/37539828'));
        expect(data.getType()).to.equal('twitter_timeline');
        expect(data.getSubType()).to.equal(null);
        expect(data.getPlatformId()).to.equal('37539828');
        expect(data.getUri()).to.equal('https://twitter.com/37539828');
        expect(data.getUsername()).to.equal('Omnitarian');
        expect(data.getDescription()).to.equal('Cartoonist, Illustrator, and T-Shirt connoisseur');
        expect(data.getLanguage()).to.equal('en');
        expect(data.getUrl()).to.equal('https://twitter.com/Omnitarian');
        expect(data.getAvatarUrl()).to.equal('https://si0.twimg.com/profile_images/1629790393/shrinker_2000_trans_normal.png');
        expect(data.getFullName()).to.equal('Marty Elmer');
        expect(data.isVerified()).to.equal(false);
        expect(data.getCounts()).to.deep.equal({
            followers_count: 608,
            friends_count: 249,
            listed_count: 52,
            favourites_count: 647,
            statuses_count: 3575
        });
        expect(data.getFollowersCount()).to.equal(608);
        expect(data.getFriendsCount()).to.equal(249);
        expect(data.getListedCount()).to.equal(52);
        expect(data.getFavouritesCount()).to.equal(647);
        expect(data.getStatusesCount()).to.equal(3575);
        // factory tests :
        expect(feed).to.be.an('object');
        expect(feed).to.deep.equal({
            feed_uid: md5('https://twitter.com/37539828'),
            feed_id: null,
            type: 'twitter_timeline',
            subtype: null,
            original_id: '37539828',
            screen_name: 'Omnitarian',
            full_name: 'Marty Elmer',
            description: 'Cartoonist, Illustrator, and T-Shirt connoisseur',
            language: 'en',
            uri: 'https://twitter.com/37539828',
            url: 'https://twitter.com/Omnitarian',
            metadatas: {
                followers_count: 608,
                friends_count: 249,
                listed_count: 52,
                favourites_count: 647,
                statuses_count: 3575
            }
        });
    });

    it('should successfully return twitter_timeline document from search all user\'s publications request', function () {
        let data;
        let feed;
        function fn() {
            data = factory.fromType('twitter', {
                coordinates: null,
                truncated: false,
                created_at: 'Tue Aug 28 19:59:34 +0000 2012',
                favorited: false,
                id_str: '240539141056638977',
                in_reply_to_user_id_str: null,
                entities: {
                    urls: [],
                    hashtags: [],
                    user_mentions: []
                },
                text: 'You\'d be right more often if you thought you were wrong.',
                contributors: null,
                id: 240539141056638977,
                retweet_count: 1,
                in_reply_to_status_id_str: null,
                geo: null,
                retweeted: false,
                in_reply_to_user_id: null,
                place: null,
                source: 'web',
                user: {
                    name: 'Taylor Singletary',
                    profile_sidebar_fill_color: 'FBFBFB',
                    profile_background_tile: true,
                    profile_sidebar_border_color: '000000',
                    profile_image_url: 'http://a0.twimg.com/profile_images/2546730059/f6a8zq58mg1hn0ha8vie_normal.jpeg',
                    created_at: 'Wed Mar 07 22:23:19 +0000 2007',
                    location: 'San Francisco, CA',
                    follow_request_sent: false,
                    id_str: '819797',
                    is_translator: false,
                    profile_link_color: 'c71818',
                    entities: {
                        url: {
                            urls: [
                                {
                                    expanded_url: 'http://www.rebelmouse.com/episod/',
                                    url: 'http://t.co/Lxw7upbN',
                                    indices: [
                                        0,
                                        20
                                    ],
                                    display_url: 'rebelmouse.com/episod/'
                                }
                            ]
                        },
                        description: {
                            urls: []
                        }
                    },
                    default_profile: false,
                    url: 'http://t.co/Lxw7upbN',
                    contributors_enabled: false,
                    favourites_count: 15990,
                    utc_offset: -28800,
                    profile_image_url_https: 'https://si0.twimg.com/profile_images/2546730059/f6a8zq58mg1hn0ha8vie_normal.jpeg',
                    id: 819797,
                    listed_count: 340,
                    profile_use_background_image: true,
                    profile_text_color: 'D20909',
                    followers_count: 7126,
                    lang: 'en',
                    protected: false,
                    geo_enabled: true,
                    notifications: false,
                    description: 'Reality Technician, Twitter API team, synthesizer enthusiast; a most excellent adventure in timelines. I know it\'s hard to believe in something you can\'t see.',
                    profile_background_color: '000000',
                    verified: false,
                    time_zone: 'Pacific Time (US & Canada)',
                    profile_background_image_url_https: 'https://si0.twimg.com/profile_background_images/643655842/hzfv12wini4q60zzrthg.png',
                    statuses_count: 18076,
                    profile_background_image_url: 'http://a0.twimg.com/profile_background_images/643655842/hzfv12wini4q60zzrthg.png',
                    default_profile_image: false,
                    friends_count: 5444,
                    following: true,
                    show_all_inline_media: true,
                    screen_name: 'episod'
                },
                in_reply_to_screen_name: null,
                in_reply_to_status_id: null
            });
            feed = factory.getFeed();
        }
        expect(fn).not.to.throw(Error);
        expect(data.data).to.deep.equal({
            name: 'Taylor Singletary',
            profile_sidebar_fill_color: 'FBFBFB',
            profile_background_tile: true,
            profile_sidebar_border_color: '000000',
            profile_image_url: 'http://a0.twimg.com/profile_images/2546730059/f6a8zq58mg1hn0ha8vie_normal.jpeg',
            created_at: 'Wed Mar 07 22:23:19 +0000 2007',
            location: 'San Francisco, CA',
            follow_request_sent: false,
            id_str: '819797',
            is_translator: false,
            profile_link_color: 'c71818',
            entities: {
                url: {
                    urls: [
                        {
                            expanded_url: 'http://www.rebelmouse.com/episod/',
                            url: 'http://t.co/Lxw7upbN',
                            indices: [
                                0,
                                20
                            ],
                            display_url: 'rebelmouse.com/episod/'
                        }
                    ]
                },
                description: {
                    urls: []
                }
            },
            default_profile: false,
            url: 'http://t.co/Lxw7upbN',
            contributors_enabled: false,
            favourites_count: 15990,
            utc_offset: -28800,
            profile_image_url_https: 'https://si0.twimg.com/profile_images/2546730059/f6a8zq58mg1hn0ha8vie_normal.jpeg',
            id: 819797,
            listed_count: 340,
            profile_use_background_image: true,
            profile_text_color: 'D20909',
            followers_count: 7126,
            lang: 'en',
            protected: false,
            geo_enabled: true,
            notifications: false,
            description: 'Reality Technician, Twitter API team, synthesizer enthusiast; a most excellent adventure in timelines. I know it\'s hard to believe in something you can\'t see.',
            profile_background_color: '000000',
            verified: false,
            time_zone: 'Pacific Time (US & Canada)',
            profile_background_image_url_https: 'https://si0.twimg.com/profile_background_images/643655842/hzfv12wini4q60zzrthg.png',
            statuses_count: 18076,
            profile_background_image_url: 'http://a0.twimg.com/profile_background_images/643655842/hzfv12wini4q60zzrthg.png',
            default_profile_image: false,
            friends_count: 5444,
            following: true,
            show_all_inline_media: true,
            screen_name: 'episod'
        });
        expect(data.provider).to.equal('twitter');
        expect(data.getUid()).to.equal(md5('https://twitter.com/819797'));
        expect(data.getType()).to.equal('twitter_timeline');
        expect(data.getSubType()).to.equal(null);
        expect(data.getPlatformId()).to.equal('819797');
        expect(data.getUri()).to.equal('https://twitter.com/819797');
        expect(data.getUsername()).to.equal('episod');
        expect(data.getDescription()).to.equal('Reality Technician, Twitter API team, synthesizer enthusiast; a most excellent adventure in timelines. I know it\'s hard to believe in something you can\'t see.');
        expect(data.getLanguage()).to.equal('en');
        expect(data.getUrl()).to.equal('https://twitter.com/episod');
        expect(data.getAvatarUrl()).to.equal('https://si0.twimg.com/profile_images/2546730059/f6a8zq58mg1hn0ha8vie_normal.jpeg');
        expect(data.getFullName()).to.equal('Taylor Singletary');
        expect(data.isVerified()).to.equal(false);
        expect(data.getCounts()).to.deep.equal({
            followers_count: 7126,
            friends_count: 5444,
            listed_count: 340,
            favourites_count: 15990,
            statuses_count: 18076
        });
        expect(data.getFollowersCount()).to.equal(7126);
        expect(data.getFriendsCount()).to.equal(5444);
        expect(data.getListedCount()).to.equal(340);
        expect(data.getFavouritesCount()).to.equal(15990);
        expect(data.getStatusesCount()).to.equal(18076);
        // factory tests :
        expect(feed).to.be.an('object');
        expect(feed).to.deep.equal({
            feed_uid: md5('https://twitter.com/819797'),
            feed_id: null,
            type: 'twitter_timeline',
            subtype: null,
            original_id: '819797',
            screen_name: 'episod',
            full_name: 'Taylor Singletary',
            description: 'Reality Technician, Twitter API team, synthesizer enthusiast; a most excellent adventure in timelines. I know it\'s hard to believe in something you can\'t see.',
            language: 'en',
            uri: 'https://twitter.com/819797',
            url: 'https://twitter.com/episod',
            metadatas: {
                followers_count: 7126,
                friends_count: 5444,
                listed_count: 340,
                favourites_count: 15990,
                statuses_count: 18076
            }
        });
    });

    it('should successfully return website_dummy document from googlenews request', function () {
        let data;
        let feed;
        function fn() {
            data = factory.fromType('googlenews', {
                title: 'Trump names Nikki Haley as UN ambassador - BBC News',
                description: '<table border="0" cellpadding="2" cellspacing="7" style="vertical-align:top;"><tr><td width="80" align="center" valign="top"><font style="font-size:85%;font-family:arial,sans-serif"></font></td><td valign="top" class="j"><font style="font-size:85%;font-family:arial,sans-serif"><br><div style="padding-top:0.8em;"><img alt="" height="1" width="1"></div><div class="lh"><a href="http://news.google.com/news/url?sa=t&amp;fd=R&amp;ct2=us&amp;usg=AFQjCNGzopxuWGxXZCA72RL-wIVrvcC8nA&amp;clid=c3a7d30bb8a4878e06b80cf16b898331&amp;cid=52779278825925&amp;ei=zas1WLDbBtHIzAa3vquoBw&amp;url=http://www.bbc.co.uk/news/world-us-canada-38076114"><b><b>Trump</b> names Nikki Haley as UN ambassador</b></a><br><font size="-1"><b><font color="#6f6f6f">BBC News</font></b></font><br><font size="-1">President-elect Donald <b>Trump</b> has named South Carolina Governor Nikki Haley as US ambassador to the UN, praising his former critic as &quot;a proven dealmaker&quot;. She is the first non-white female cabinet-level official appointed to the incoming <b>Trump</b>&nbsp;...</font><br><font size="-1" class="p"></font><br><font class="p" size="-1"><a class="p" href="http://news.google.com/news/more?ncl=dkagukLB1ZghpxM&amp;authuser=0&amp;ned=us"><nobr><b>and more&nbsp;&raquo;</b></nobr></a></font></div></font></td></tr></table>',
                link: 'http://news.google.com/news/url?sa=t&fd=R&ct2=us&usg=AFQjCNGzopxuWGxXZCA72RL-wIVrvcC8nA&clid=c3a7d30bb8a4878e06b80cf16b898331&cid=52779278825925&ei=zas1WLDbBtHIzAa3vquoBw&url=http://www.bbc.co.uk/news/world-us-canada-38076114',
                url: 'http://news.google.com/news/url?sa=t&fd=R&ct2=us&usg=AFQjCNGzopxuWGxXZCA72RL-wIVrvcC8nA&clid=c3a7d30bb8a4878e06b80cf16b898331&cid=52779278825925&ei=zas1WLDbBtHIzAa3vquoBw&url=http://www.bbc.co.uk/news/world-us-canada-38076114',
                created: 1479908471000
            });
            feed = factory.getFeed();
        }
        expect(fn).not.to.throw(Error);
        expect(data.data).to.deep.equal({
            title: 'Trump names Nikki Haley as UN ambassador - BBC News',
            description: '<table border="0" cellpadding="2" cellspacing="7" style="vertical-align:top;"><tr><td width="80" align="center" valign="top"><font style="font-size:85%;font-family:arial,sans-serif"></font></td><td valign="top" class="j"><font style="font-size:85%;font-family:arial,sans-serif"><br><div style="padding-top:0.8em;"><img alt="" height="1" width="1"></div><div class="lh"><a href="http://news.google.com/news/url?sa=t&amp;fd=R&amp;ct2=us&amp;usg=AFQjCNGzopxuWGxXZCA72RL-wIVrvcC8nA&amp;clid=c3a7d30bb8a4878e06b80cf16b898331&amp;cid=52779278825925&amp;ei=zas1WLDbBtHIzAa3vquoBw&amp;url=http://www.bbc.co.uk/news/world-us-canada-38076114"><b><b>Trump</b> names Nikki Haley as UN ambassador</b></a><br><font size="-1"><b><font color="#6f6f6f">BBC News</font></b></font><br><font size="-1">President-elect Donald <b>Trump</b> has named South Carolina Governor Nikki Haley as US ambassador to the UN, praising his former critic as &quot;a proven dealmaker&quot;. She is the first non-white female cabinet-level official appointed to the incoming <b>Trump</b>&nbsp;...</font><br><font size="-1" class="p"></font><br><font class="p" size="-1"><a class="p" href="http://news.google.com/news/more?ncl=dkagukLB1ZghpxM&amp;authuser=0&amp;ned=us"><nobr><b>and more&nbsp;&raquo;</b></nobr></a></font></div></font></td></tr></table>',
            link: 'http://news.google.com/news/url?sa=t&fd=R&ct2=us&usg=AFQjCNGzopxuWGxXZCA72RL-wIVrvcC8nA&clid=c3a7d30bb8a4878e06b80cf16b898331&cid=52779278825925&ei=zas1WLDbBtHIzAa3vquoBw&url=http://www.bbc.co.uk/news/world-us-canada-38076114',
            url: 'http://news.google.com/news/url?sa=t&fd=R&ct2=us&usg=AFQjCNGzopxuWGxXZCA72RL-wIVrvcC8nA&clid=c3a7d30bb8a4878e06b80cf16b898331&cid=52779278825925&ei=zas1WLDbBtHIzAa3vquoBw&url=http://www.bbc.co.uk/news/world-us-canada-38076114',
            created: 1479908471000
        });
        expect(data.provider).to.equal('googlenews');
        expect(data.getUid()).to.equal(md5('http://www.bbc.co.uk'));
        expect(data.getType()).to.equal('website_dummy');
        expect(data.getSubType()).to.equal(null);
        expect(data.getPlatformId()).to.equal(0);
        expect(data.getUri()).to.equal('http://www.bbc.co.uk');
        expect(data.getUsername()).to.equal(null);
        expect(data.getDescription()).to.equal(null);
        expect(data.getLanguage()).to.equal(null);
        expect(data.getUrl()).to.equal('http://www.bbc.co.uk');
        expect(data.getAvatarUrl()).to.equal(null);
        expect(data.getFullName()).to.equal(null);
        // factory tests :
        expect(feed).to.be.an('object');
        expect(feed).to.deep.equal({
            feed_uid: md5('http://www.bbc.co.uk'),
            feed_id: null,
            type: 'website_dummy',
            subtype: null,
            original_id: 0,
            screen_name: null,
            full_name: null,
            description: null,
            language: null,
            uri: 'http://www.bbc.co.uk',
            url: 'http://www.bbc.co.uk',
            metadatas: {}
        });
    });

    it('should successfully return website_dummy document from rss request', function () {
        let data;
        let feed;
        function fn() {
            data = factory.fromType('rss', {
                title: 'La Chine généralise l’interdiction de fumer dans les lieux publics',
                description: 'L’interdiction de fumer dans les lieux publics, qui existe déjà dans plusieurs grandes villes, est une gageure dans un pays qui compte 300 millions de fumeurs.',
                link: 'http://www.lemonde.fr/asie-pacifique/article/2016/11/22/la-chine-generalise-l-interdiction-de-fumer-dans-les-lieux-publics_5035551_3216.html',
                url: 'http://www.lemonde.fr/asie-pacifique/article/2016/11/22/la-chine-generalise-l-interdiction-de-fumer-dans-les-lieux-publics_5035551_3216.html',
                created: 1479801647000,
                enclosures: [
                    {
                        url: 'http://s2.lemde.fr/image/2016/11/22/644x322/5035550_3_ee75_le-defi-est-immense-le-pays-compte-plus-de_ab88ca342a372cd32b33509b0a61de61.jpg',
                        type: 'image/jpeg',
                        length: '31850'
                    }
                ]
            });
            feed = factory.getFeed();
        }
        expect(fn).not.to.throw(Error);
        expect(data.data).to.deep.equal({
            title: 'La Chine généralise l’interdiction de fumer dans les lieux publics',
            description: 'L’interdiction de fumer dans les lieux publics, qui existe déjà dans plusieurs grandes villes, est une gageure dans un pays qui compte 300 millions de fumeurs.',
            link: 'http://www.lemonde.fr/asie-pacifique/article/2016/11/22/la-chine-generalise-l-interdiction-de-fumer-dans-les-lieux-publics_5035551_3216.html',
            url: 'http://www.lemonde.fr/asie-pacifique/article/2016/11/22/la-chine-generalise-l-interdiction-de-fumer-dans-les-lieux-publics_5035551_3216.html',
            created: 1479801647000,
            enclosures: [
                {
                    url: 'http://s2.lemde.fr/image/2016/11/22/644x322/5035550_3_ee75_le-defi-est-immense-le-pays-compte-plus-de_ab88ca342a372cd32b33509b0a61de61.jpg',
                    type: 'image/jpeg',
                    length: '31850'
                }
            ]
        });
        expect(data.provider).to.equal('rss');
        expect(data.getUid()).to.equal(md5('http://www.lemonde.fr'));
        expect(data.getType()).to.equal('website_dummy');
        expect(data.getSubType()).to.equal(null);
        expect(data.getPlatformId()).to.equal(0);
        expect(data.getUri()).to.equal('http://www.lemonde.fr');
        expect(data.getUsername()).to.equal(null);
        expect(data.getDescription()).to.equal(null);
        expect(data.getLanguage()).to.equal(null);
        expect(data.getUrl()).to.equal('http://www.lemonde.fr');
        expect(data.getAvatarUrl()).to.equal(null);
        expect(data.getFullName()).to.equal(null);
        // factory tests :
        expect(feed).to.be.an('object');
        expect(feed).to.deep.equal({
            feed_uid: md5('http://www.lemonde.fr'),
            feed_id: null,
            type: 'website_dummy',
            subtype: null,
            original_id: 0,
            screen_name: null,
            full_name: null,
            description: null,
            language: null,
            uri: 'http://www.lemonde.fr',
            url: 'http://www.lemonde.fr',
            metadatas: {}
        });
    });
});
