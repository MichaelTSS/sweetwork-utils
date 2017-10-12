/* eslint-disable prefer-arrow-callback, max-len */
'use strict';
const expect = require('chai').expect;
const md5 = require('blueimp-md5');
const TwitterTimelineDocument = require('../../../documents/feeds/twitter-timeline');

describe('Document feed twitter', () => {
    it('should successfully return twitter_timeline document from user request', function () {
        let data;
        function fn() {
            data = new TwitterTimelineDocument({
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
    });

    it('should successfully return twitter_timeline document from search query request', function () {
        let data;
        function fn() {
            data = new TwitterTimelineDocument({
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
    });

    it('should successfully return twitter_timeline document from search all user\'s publications request', function () {
        let data;
        function fn() {
            data = new TwitterTimelineDocument({
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
    });
});
