/* eslint-disable prefer-arrow-callback */
'use strict';
const expect = require('chai').expect;
const TopScore = require('../../scores/top-score');

describe('Top score', () => {
    let topScore;

    it('should successfully instantiate topScore', function () {
        function fn() {
            topScore = new TopScore();
        }
        expect(fn).not.to.throw(Error);
    });

    it('should successfully return importance score for facebook type', function () {
        let score;
        function fn() {
            score = topScore.getScore({
                type: 'facebook',
                profile_influential: 81,
                social_echoes_score: 92145,
                topics_coefficient: 1,
                is_pinned: false,
                is_tagged: true
            });
        }
        expect(fn).not.to.throw(Error);
        expect(score).to.equal(320.75394907660154);
    });

    it('should successfully return importance score for facebook type with higher topics_coefficient', function () {
        let score;
        function fn() {
            score = topScore.getScore({
                type: 'facebook',
                profile_influential: 81,
                social_echoes_score: 92145,
                topics_coefficient: 2,
                is_pinned: false,
                is_tagged: true
            });
        }
        expect(fn).not.to.throw(Error);
        expect(score).to.equal(640.5078981532031);
    });

    it('should successfully return importance score for facebook type not tagged', function () {
        let score;
        function fn() {
            score = topScore.getScore({
                type: 'facebook',
                profile_influential: 81,
                social_echoes_score: 92145,
                topics_coefficient: 1,
                is_pinned: false,
                is_tagged: false
            });
        }
        expect(fn).not.to.throw(Error);
        expect(score).to.equal(320.75394907660154);
    });

    it('should successfully return importance score for facebook type pinned', function () {
        let score;
        function fn() {
            score = topScore.getScore({
                type: 'facebook',
                profile_influential: 81,
                social_echoes_score: 92145,
                topics_coefficient: 1,
                is_pinned: true,
                is_tagged: true
            });
        }
        expect(fn).not.to.throw(Error);
        expect(score).to.equal(100319.7539490766);
    });

    it('should successfully return importance score for googleplus type', function () {
        let score;
        function fn() {
            score = topScore.getScore({
                type: 'googleplus',
                profile_influential: 81,
                social_echoes_score: 819,
                topics_coefficient: 1,
                is_pinned: false,
                is_tagged: true
            });
        }
        expect(fn).not.to.throw(Error);
        expect(score).to.equal(45.81817604250837);
    });

    it('should successfully return importance score for googleplus type with higher topics_coefficient', function () {
        let score;
        function fn() {
            score = topScore.getScore({
                type: 'googleplus',
                profile_influential: 81,
                social_echoes_score: 819,
                topics_coefficient: 2,
                is_pinned: false,
                is_tagged: true
            });
        }
        expect(fn).not.to.throw(Error);
        expect(score).to.equal(90.63635208501674);
    });

    it('should successfully return importance score for googleplus type not tagged', function () {
        let score;
        function fn() {
            score = topScore.getScore({
                type: 'googleplus',
                profile_influential: 81,
                social_echoes_score: 819,
                topics_coefficient: 1,
                is_pinned: false,
                is_tagged: false
            });
        }
        expect(fn).not.to.throw(Error);
        expect(score).to.equal(45.81817604250837);
    });

    it('should successfully return importance score for googleplus type pinned', function () {
        let score;
        function fn() {
            score = topScore.getScore({
                type: 'googleplus',
                profile_influential: 81,
                social_echoes_score: 819,
                topics_coefficient: 1,
                is_pinned: true,
                is_tagged: true
            });
        }
        expect(fn).not.to.throw(Error);
        expect(score).to.equal(100044.8181760425);
    });

    it('should successfully return importance score for instagram type', function () {
        let score;
        function fn() {
            score = topScore.getScore({
                type: 'instagram',
                profile_influential: 9,
                social_echoes_score: 24,
                topics_coefficient: 1,
                is_pinned: false,
                is_tagged: true
            });
        }
        expect(fn).not.to.throw(Error);
        expect(score).to.equal(7.698979485566356);
    });

    it('should successfully return importance score for instagram type with higher topics_coefficient', function () {
        let score;
        function fn() {
            score = topScore.getScore({
                type: 'instagram',
                profile_influential: 9,
                social_echoes_score: 24,
                topics_coefficient: 2,
                is_pinned: false,
                is_tagged: true
            });
        }
        expect(fn).not.to.throw(Error);
        expect(score).to.equal(14.397958971132711);
    });

    it('should successfully return importance score for instagram type not tagged', function () {
        let score;
        function fn() {
            score = topScore.getScore({
                type: 'instagram',
                profile_influential: 9,
                social_echoes_score: 24,
                topics_coefficient: 1,
                is_pinned: false,
                is_tagged: false
            });
        }
        expect(fn).not.to.throw(Error);
        expect(score).to.equal(7.698979485566356);
    });

    it('should successfully return importance score for instagram type pinned', function () {
        let score;
        function fn() {
            score = topScore.getScore({
                type: 'instagram',
                profile_influential: 9,
                social_echoes_score: 24,
                topics_coefficient: 1,
                is_pinned: true,
                is_tagged: true
            });
        }
        expect(fn).not.to.throw(Error);
        expect(score).to.equal(100006.69897948556);
    });

    it('should successfully return importance score for twitter type', function () {
        let score;
        function fn() {
            score = topScore.getScore({
                type: 'twitter',
                profile_influential: 81,
                social_echoes_score: 960711,
                topics_coefficient: 1,
                is_pinned: false,
                is_tagged: true
            });
        }
        expect(fn).not.to.throw(Error);
        expect(score).to.equal(997.3586606259214);
    });

    it('should successfully return importance score for twitter type with higher topics_coefficient', function () {
        let score;
        function fn() {
            score = topScore.getScore({
                type: 'twitter',
                profile_influential: 81,
                social_echoes_score: 960711,
                topics_coefficient: 2,
                is_pinned: false,
                is_tagged: true
            });
        }
        expect(fn).not.to.throw(Error);
        expect(score).to.equal(1993.7173212518428);
    });

    it('should successfully return importance score for twitter type not tagged', function () {
        let score;
        function fn() {
            score = topScore.getScore({
                type: 'twitter',
                profile_influential: 81,
                social_echoes_score: 960711,
                topics_coefficient: 1,
                is_pinned: false,
                is_tagged: false
            });
        }
        expect(fn).not.to.throw(Error);
        expect(score).to.equal(997.3586606259214);
    });

    it('should successfully return importance score for twitter type pinned', function () {
        let score;
        function fn() {
            score = topScore.getScore({
                type: 'twitter',
                profile_influential: 81,
                social_echoes_score: 960711,
                topics_coefficient: 1,
                is_pinned: true,
                is_tagged: true
            });
        }
        expect(fn).not.to.throw(Error);
        expect(score).to.equal(100996.35866062592);
    });

    it('should successfully return importance score for web type', function () {
        let score;
        function fn() {
            score = topScore.getScore({
                type: 'web',
                profile_influential: 62,
                social_echoes_score: 158,
                topics_coefficient: 1,
                is_pinned: false,
                is_tagged: true
            });
        }
        expect(fn).not.to.throw(Error);
        expect(score).to.equal(38.954707634964805);
    });

    it('should successfully return importance score for web type with higher topics_coefficient', function () {
        let score;
        function fn() {
            score = topScore.getScore({
                type: 'web',
                profile_influential: 62,
                social_echoes_score: 158,
                topics_coefficient: 2,
                is_pinned: false,
                is_tagged: true
            });
        }
        expect(fn).not.to.throw(Error);
        expect(score).to.equal(76.40941526992961);
    });

    it('should successfully return importance score for web type not tagged', function () {
        let score;
        function fn() {
            score = topScore.getScore({
                type: 'web',
                profile_influential: 62,
                social_echoes_score: 158,
                topics_coefficient: 1,
                is_pinned: false,
                is_tagged: false
            });
        }
        expect(fn).not.to.throw(Error);
        expect(score).to.equal(25.969805089976536);
    });

    it('should successfully return importance score for web type pinned', function () {
        let score;
        function fn() {
            score = topScore.getScore({
                type: 'web',
                profile_influential: 62,
                social_echoes_score: 158,
                topics_coefficient: 1,
                is_pinned: true,
                is_tagged: true
            });
        }
        expect(fn).not.to.throw(Error);
        expect(score).to.equal(150037.45470763496);
    });

    it('should successfully return importance score for youtube type', function () {
        let score;
        function fn() {
            score = topScore.getScore({
                type: 'youtube',
                profile_influential: 52,
                social_echoes_score: 52537,
                topics_coefficient: 1,
                is_pinned: false,
                is_tagged: true
            });
        }
        expect(fn).not.to.throw(Error);
        expect(score).to.equal(240.6095111464618);
    });

    it('should successfully return importance score for youtube type with higher topics_coefficient', function () {
        let score;
        function fn() {
            score = topScore.getScore({
                type: 'youtube',
                profile_influential: 52,
                social_echoes_score: 52537,
                topics_coefficient: 2,
                is_pinned: false,
                is_tagged: true
            });
        }
        expect(fn).not.to.throw(Error);
        expect(score).to.equal(480.2190222929236);
    });

    it('should successfully return importance score for youtube type not tagged', function () {
        let score;
        function fn() {
            score = topScore.getScore({
                type: 'youtube',
                profile_influential: 52,
                social_echoes_score: 52537,
                topics_coefficient: 1,
                is_pinned: false,
                is_tagged: false
            });
        }
        expect(fn).not.to.throw(Error);
        expect(score).to.equal(240.6095111464618);
    });

    it('should successfully return importance score for youtube type pinned', function () {
        let score;
        function fn() {
            score = topScore.getScore({
                type: 'youtube',
                profile_influential: 52,
                social_echoes_score: 52537,
                topics_coefficient: 1,
                is_pinned: true,
                is_tagged: true
            });
        }
        expect(fn).not.to.throw(Error);
        expect(score).to.equal(100239.60951114647);
    });
});
