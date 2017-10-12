/* eslint-disable prefer-arrow-callback */
'use strict';
const expect = require('chai').expect;
const md5 = require('blueimp-md5');
const InstagramFeedDocument = require('../../../documents/feeds/instagram-feed');

describe('Document feed instagram', () => {
    it('should successfully return instagram_feed document from user request', function () {
        let data;
        function fn() {
            data = new InstagramFeedDocument({
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
    });

    it('should successfully return instagram_feed document from search tag request', function () {
        let data;
        function fn() {
            data = new InstagramFeedDocument({
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
    });

    it('should successfully return instagram_feed document from search all user\'s publications request', function () {
        let data;
        function fn() {
            data = new InstagramFeedDocument({
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
    });
});
