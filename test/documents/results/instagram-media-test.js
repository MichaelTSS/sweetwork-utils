/* eslint-disable prefer-arrow-callback */
'use strict';
const expect = require('chai').expect;
const md5 = require('blueimp-md5');
const InstagramMedia = require('../../../documents/results/instagram-media');

describe('Document result instagram', () => {
    it('should successfully return instagram_media document from search request', function () {
        let data;
        function fn() {
            data = new InstagramMedia({ attribution: null,
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
    });
});
