/* eslint-disable prefer-arrow-callback */
'use strict';
const expect = require('chai').expect;
const BarometerScore = require('../../../scores/influential/barometer-score');

describe('Barometer score', () => {
    let barometerScore;

    it('should successfully instantiate barometerScore for Facebook', function () {
        function fn() {
            barometerScore = new BarometerScore('facebook');
        }
        expect(fn).not.to.throw(Error);
        expect(barometerScore.type).to.equal('facebook');
        expect(barometerScore.barometer).to.have.members([0, 300, 1500, 4500, 13500, 40500, 121500, 364500, 1093500, 3280500, 200000000]);
    });

    it('should successfully instantiate barometerScore for G+', function () {
        function fn() {
            barometerScore = new BarometerScore('googleplus');
        }
        expect(fn).not.to.throw(Error);
        expect(barometerScore.type).to.equal('googleplus');
        expect(barometerScore.barometer).to.have.members([0, 300, 1500, 4500, 13500, 40500, 121500, 364500, 1093500, 3280500, 200000000]);
    });

    it('should successfully instantiate barometerScore for Instagram', function () {
        function fn() {
            barometerScore = new BarometerScore('instagram');
        }
        expect(fn).not.to.throw(Error);
        expect(barometerScore.type).to.equal('instagram');
        expect(barometerScore.barometer).to.have.members([0, 1000, 5000, 15000, 45000, 135000, 405000, 1215000, 3645000, 10935000, 100000000]);
    });

    it('should successfully instantiate barometerScore for Twitter', function () {
        function fn() {
            barometerScore = new BarometerScore('twitter');
        }
        expect(fn).not.to.throw(Error);
        expect(barometerScore.type).to.equal('twitter');
        expect(barometerScore.barometer).to.have.members([0, 1000, 5000, 15000, 45000, 135000, 405000, 1215000, 3645000, 10935000, 100000000]);
    });

    it('should successfully instantiate barometerScore for Web', function () {
        function fn() {
            barometerScore = new BarometerScore('web');
        }
        expect(fn).not.to.throw(Error);
        expect(barometerScore.type).to.equal('web');
        expect(barometerScore.barometer).to.have.members([200000000, 10935000, 3645000, 1215000, 405000, 135000, 45000, 15000, 5000, 1000, 0]);
    });

    it('should successfully instantiate barometerScore for Youtube', function () {
        function fn() {
            barometerScore = new BarometerScore('youtube');
        }
        expect(fn).not.to.throw(Error);
        expect(barometerScore.type).to.equal('youtube');
        expect(barometerScore.barometer).to.have.members([0, 300, 1500, 4500, 13500, 40500, 121500, 364500, 1093500, 3280500, 200000000]);
    });

    it('should successfully return barometer score for Facebook', function () {
        let score;
        function fn() {
            barometerScore = new BarometerScore('facebook');
            score = barometerScore.getScore(154);
        }
        expect(fn).not.to.throw(Error);
        expect(score).to.equal(0.5133333333333333);
    });

    it('should successfully return barometer score for G+', function () {
        let score;
        function fn() {
            barometerScore = new BarometerScore('googleplus');
            score = barometerScore.getScore(150300);
        }
        expect(fn).not.to.throw(Error);
        expect(score).to.equal(6.118518518518519);
    });

    it('should successfully return barometer score for Instagram', function () {
        let score;
        function fn() {
            barometerScore = new BarometerScore('instagram');
            score = barometerScore.getScore(473343, 2095);
        }
        expect(fn).not.to.throw(Error);
        expect(score).to.equal(5.663575308641975);
    });

    it('should successfully return barometer score for Twitter', function () {
        let score;
        function fn() {
            barometerScore = new BarometerScore('twitter');
            score = barometerScore.getScore(29947004, 298);
        }
        expect(fn).not.to.throw(Error);
        expect(score).to.equal(9.101380684518798);
    });

    it('should successfully return barometer score for Web', function () {
        let score;
        function fn() {
            barometerScore = new BarometerScore('web');
            score = barometerScore.getScore(800);
        }
        expect(fn).not.to.throw(Error);
        expect(score).to.equal(9.2);
    });

    it('should successfully return barometer score for Youtube', function () {
        let score;
        function fn() {
            barometerScore = new BarometerScore('youtube');
            score = barometerScore.getScore(217361);
        }
        expect(fn).not.to.throw(Error);
        expect(score).to.equal(6.394489711934156);
    });
});
