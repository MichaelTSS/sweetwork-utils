/* eslint-disable prefer-arrow-callback, max-len */
'use strict';
const expect = require('chai').expect;
const md5 = require('blueimp-md5');
const WebsiteDummyDocument = require('../../../documents/feeds/website-dummy');

describe('Document feed web', () => {
    it('should successfully return website_dummy document from googlenews request', function () {
        let data;
        function fn() {
            data = new WebsiteDummyDocument({
                title: 'Trump names Nikki Haley as UN ambassador - BBC News',
                description: '<table border="0" cellpadding="2" cellspacing="7" style="vertical-align:top;"><tr><td width="80" align="center" valign="top"><font style="font-size:85%;font-family:arial,sans-serif"></font></td><td valign="top" class="j"><font style="font-size:85%;font-family:arial,sans-serif"><br><div style="padding-top:0.8em;"><img alt="" height="1" width="1"></div><div class="lh"><a href="http://news.google.com/news/url?sa=t&amp;fd=R&amp;ct2=us&amp;usg=AFQjCNGzopxuWGxXZCA72RL-wIVrvcC8nA&amp;clid=c3a7d30bb8a4878e06b80cf16b898331&amp;cid=52779278825925&amp;ei=zas1WLDbBtHIzAa3vquoBw&amp;url=http://www.bbc.co.uk/news/world-us-canada-38076114"><b><b>Trump</b> names Nikki Haley as UN ambassador</b></a><br><font size="-1"><b><font color="#6f6f6f">BBC News</font></b></font><br><font size="-1">President-elect Donald <b>Trump</b> has named South Carolina Governor Nikki Haley as US ambassador to the UN, praising his former critic as &quot;a proven dealmaker&quot;. She is the first non-white female cabinet-level official appointed to the incoming <b>Trump</b>&nbsp;...</font><br><font size="-1" class="p"></font><br><font class="p" size="-1"><a class="p" href="http://news.google.com/news/more?ncl=dkagukLB1ZghpxM&amp;authuser=0&amp;ned=us"><nobr><b>and more&nbsp;&raquo;</b></nobr></a></font></div></font></td></tr></table>',
                link: 'http://news.google.com/news/url?sa=t&fd=R&ct2=us&usg=AFQjCNGzopxuWGxXZCA72RL-wIVrvcC8nA&clid=c3a7d30bb8a4878e06b80cf16b898331&cid=52779278825925&ei=zas1WLDbBtHIzAa3vquoBw&url=http://www.bbc.co.uk/news/world-us-canada-38076114',
                url: 'http://news.google.com/news/url?sa=t&fd=R&ct2=us&usg=AFQjCNGzopxuWGxXZCA72RL-wIVrvcC8nA&clid=c3a7d30bb8a4878e06b80cf16b898331&cid=52779278825925&ei=zas1WLDbBtHIzAa3vquoBw&url=http://www.bbc.co.uk/news/world-us-canada-38076114',
                created: 1479908471000
            }, 'googlenews');
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
    });

    it('should successfully return website_dummy document from rss request', function () {
        let data;
        function fn() {
            data = new WebsiteDummyDocument({
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
            }, 'rss');
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
    });
});
