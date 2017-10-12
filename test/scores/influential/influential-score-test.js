/* eslint-disable prefer-arrow-callback */
'use strict';
const expect = require('chai').expect;
const BarometerScore = require('../../../scores/influential/barometer-score');
const InfluentialScore = require('../../../scores/influential/influential-score');

describe('Influential score', () => {
    let influentialScore;

    it('should successfully instantiate influentialScore', function () {
        function fn() {
            influentialScore = new InfluentialScore();
        }
        expect(fn).not.to.throw(Error);
    });

    it('should successfully return influential score from array of Facebook metadatas object', function () {
        let data;
        function fn() {
            data = influentialScore.getInfluentialScore([
                {
                    feed_type: 'facebook_feed',
                    likes: 10553935
                }
            ]);
        }
        expect(fn).not.to.throw(Error);
        expect(data).to.equal(76);
    });

    it('should successfully return influential score from array of G+ metadatas object', function () {
        let data;
        function fn() {
            data = influentialScore.getInfluentialScore([
                {
                    feed_type: 'googleplus_feed',
                    circled: 3935814
                }
            ]);
        }
        expect(fn).not.to.throw(Error);
        expect(data).to.equal(76);
    });

    it('should successfully return influential score from array of Instagram metadatas object', function () {
        let data;
        function fn() {
            data = influentialScore.getInfluentialScore([
                {
                    feed_type: 'instagram_feed',
                    media: 2930,
                    follows: 459,
                    followed_by: 1890858
                }
            ]);
        }
        expect(fn).not.to.throw(Error);
        expect(data).to.equal(59);
    });

    it('should successfully return influential score from array of Twitter metadatas object', function () {
        let data;
        function fn() {
            data = influentialScore.getInfluentialScore([
                {
                    feed_type: 'twitter_timeline',
                    listed: 173736,
                    favourites: 9849,
                    followers: 24688769,
                    friends: 987,
                    statuses: 219677
                }
            ]);
        }
        expect(fn).not.to.throw(Error);
        expect(data).to.equal(77);
    });

    it('should successfully return influential score from array of Website metadatas object', function () {
        let data;
        function fn() {
            data = influentialScore.getInfluentialScore([
                {
                    feed_type: 'website_dummy',
                    alexa_rank: 85
                }
            ]);
        }
        expect(fn).not.to.throw(Error);
        expect(data).to.equal(84);
    });

    it('should successfully return influential score from array of Youtube metadatas object', function () {
        let data;
        function fn() {
            data = influentialScore.getInfluentialScore([
                {
                    feed_type: 'youtube_channel',
                    views: 307826143,
                    videos: 7928,
                    subscribers: 755096,
                    comments: 1572
                }
            ]);
        }
        expect(fn).not.to.throw(Error);
        expect(data).to.equal(64);
    });

    it('should successfully return influential score from array of multi-source metadatas object', function () {
        let data;
        function fn() {
            data = influentialScore.getInfluentialScore([
                {
                    feed_type: 'facebook_feed',
                    likes: 10553935
                },
                {
                    feed_type: 'googleplus_feed',
                    circled: 3935814
                },
                {
                    feed_type: 'instagram_feed',
                    media: 2930,
                    follows: 459,
                    followed_by: 1890858
                },
                {
                    feed_type: 'twitter_timeline',
                    listed: 173736,
                    favourites: 9849,
                    followers: 24688769,
                    friends: 987,
                    statuses: 219677
                },
                {
                    feed_type: 'website_dummy',
                    alexa_rank: 85
                },
                {
                    feed_type: 'youtube_channel',
                    views: 307826143,
                    videos: 7928,
                    subscribers: 755096,
                    comments: 1572
                }
            ]);
        }
        expect(fn).not.to.throw(Error);
        expect(data).to.equal(99);
    });

    describe('Influential score from Barometer scores', () => {
        let barometerScore;

        it('should successfully return barometer score for Facebook', function () {
            let score;
            let influential;
            function fn() {
                barometerScore = new BarometerScore('facebook');
                score = barometerScore.getScore(154);
                influential = influentialScore.getScore([score]);
            }
            expect(fn).not.to.throw(Error);
            expect(score).to.equal(0.5133333333333333);
            expect(influential).to.equal(4);
        });

        it('should successfully return barometer score for G+', function () {
            let score;
            let influential;
            function fn() {
                barometerScore = new BarometerScore('googleplus');
                score = barometerScore.getScore(150300);
                influential = influentialScore.getScore([score]);
            }
            expect(fn).not.to.throw(Error);
            expect(score).to.equal(6.118518518518519);
            expect(influential).to.equal(52);
        });

        it('should successfully return barometer score for Instagram', function () {
            let score;
            let influential;
            function fn() {
                barometerScore = new BarometerScore('instagram');
                score = barometerScore.getScore(473343, 2095);
                influential = influentialScore.getScore([score]);
            }
            expect(fn).not.to.throw(Error);
            expect(score).to.equal(5.663575308641975);
            expect(influential).to.equal(48);
        });

        it('should successfully return barometer score for Twitter', function () {
            let score;
            let influential;
            function fn() {
                barometerScore = new BarometerScore('twitter');
                score = barometerScore.getScore(29947004, 298);
                influential = influentialScore.getScore([score]);
            }
            expect(fn).not.to.throw(Error);
            expect(score).to.equal(9.101380684518798);
            expect(influential).to.equal(77);
        });

        it('should successfully return barometer score for Web', function () {
            let score;
            let influential;
            function fn() {
                barometerScore = new BarometerScore('web');
                score = barometerScore.getScore(800);
                influential = influentialScore.getScore([score]);
            }
            expect(fn).not.to.throw(Error);
            expect(score).to.equal(9.2);
            expect(influential).to.equal(78);
        });

        it('should successfully return barometer score for Youtube', function () {
            let score;
            let influential;
            function fn() {
                barometerScore = new BarometerScore('youtube');
                score = barometerScore.getScore(217361);
                influential = influentialScore.getScore([score]);
            }
            expect(fn).not.to.throw();
            expect(score).to.equal(6.394489711934156);
            expect(influential).to.equal(54);
        });
    });
});
