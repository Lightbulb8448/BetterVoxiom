//85da08161978b949530d.js
'use strict';
setInterval(() => {
    try {
        onbeforeunload = null; // allow reload
        if (!!(document.querySelector('.sc-kITQLZ.kGCZjc') || document.querySelector('.sc-efaPnb.hiScFt'))) {
            window.removeMinimap = !!localStorage.VCL_removeMinimap;
        } else {
            window.removeMinimap = false;
        }
        if (removeMinimap) {
            document.querySelector('.sc-eHyqeh.hhRbH').classList.add('vcl-hide');
        } else {
            document.querySelector('.sc-eHyqeh.hhRbH').classList.remove('vcl-hide');
        }
    } catch (e) {/* ... */ }
}, 1000);
(self['webpackChunkclient'] = self['webpackChunkclient'] || [])['push']([[0x2e3], {
    0x31c3: function(l0, l1, l2) {
        l2['r'](l1),
        l2['d'](l1, {
            'default': function() {
                return ga;
            }
        });
        var l3, l4 = l2(0x3df5), l5 = l2(0x156cd), l6 = l2['n'](l5), l7 = l2(0xd1a1), l8 = l2(0x514d), l9 = l2(0xc880), ll = l2(0x12ccc), lC = (function() {
            function gm(gN, gr) {
                var gD = this;
                this['zoa'] = gN,
                this['zoZ'] = gr,
                this['zoR'] = document['getElementById'](this['zoZ']),
                this['zuW'] = 0x1,
                this['zuz'] = l8['Z']['zLy'],
                this['zuH'] = l8['Z']['zLP'],
                this['zuT'] = new l7['cPb'](this['zoa']['zuL'],window['innerWidth'] / window['innerHeight'],0.01,0x3e8),
                this['zuT']['type'] = (0x0,
                ll['D_'])(),
                this['zug'] = new l7['cPb'](this['zoa']['zur'],window['innerWidth'] / window['innerHeight'],0.01,0x3e8),
                this['zug']['type'] = (0x0,
                ll['D_'])(),
                this['zuD'] = new l7['cPb'](0x3c,window['innerWidth'] / window['innerHeight'],0.01,0x3e8),
                this['zuD']['type'] = (0x0,
                ll['D_'])(),
                this['zuV'] = new l7['iKG'](-window['innerWidth'] / 0x2,window['innerWidth'] / 0x2,window['innerHeight'] / 0x2,-window['innerHeight'] / 0x2,0.01,0x3e8),
                this['zuV']['type'] = (0x0,
                ll['D_'])(),
                this['zuj'] = l8['Z']['zgu'],
                this['zuK'](),
                this['zuo'](),
                window['addEventListener']('resize', function(gQ) {
                    gD['zuo']();
                });
            }
            var gE = gm['prototype'];
            return gE['zuK'] = function() {
                this['zuu'] && this['zuu']['dispose'](),
                this['zub'] && this['zub']['dispose'](),
                this['zuF'] && this['zuF']['dispose'](),
                this['zuC'] && this['zuC']['dispose'](),
                this['zuu'] = new l7['xsS'](),
                this['zuu']['type'] = (0x0,
                ll['D_'])(),
                this['zub'] = new l7['xsS'](),
                this['zub']['type'] = (0x0,
                ll['D_'])(),
                this['zuF'] = new l7['xsS'](),
                this['zuF']['type'] = (0x0,
                ll['D_'])(),
                this['zuC'] = new l7['xsS'](),
                this['zuC']['type'] = (0x0,
                ll['D_'])(),
                this['zuF']['add'](this['zuV']),
                this['zui'] && this['zui']['dispose'](),
                this['zui'] = new l7['CP7']({
                    'canvas': this['zoR'],
                    'antialias': !0x1,
                    'powerPreference': 'high-performance'
                }),
                this['zui']['setClearColor'](this['zuj']),
                this['zui']['debug']['checkShaderErrors'] = !0x1,
                this['zui']['setPixelRatio'](window['devicePixelRatio'] * this['zoa']['zuB']),
                this['zui']['setSize'](window['innerWidth'], window['innerHeight']),
                this['zui']['autoClear'] = !0x1,
                this['zui']['gammaFactor'] = 2.2,
                this['zui']['outputEncoding'] = l7['knz'],
                this['zui']['info']['autoReset'] = !0x1,
                this['zui']['initTexture'](l9['Z']['zuA']()),
                this['zui']['initTexture'](l9['Z']['zuk']());
            }
            ,
            gE['zus'] = function(gN, gr) {
                this['zui']['info']['reset'](),
                this['zui']['clear'](),
                this['zui']['render'](this['zuu'], this['zuT']),
                this['zui']['clearDepth'](),
                this['zui']['render'](this['zub'], this['zug']),
                this['zui']['clearDepth'](),
                (!window.removeMinimap && this['zui']['render'](this['zuC'], this['zuD'])),
                this['zui']['render'](this['zuF'], this['zuV']);
            }
            ,
            gE['zuo'] = function() {
                var gN = window['innerWidth']
                  , gr = window['innerHeight'];
                this['zuW'] = Math['max'](gN / this['zuz'], gr / this['zuH']),
                this['zui']['setSize'](gN, gr),
                this['zuT']['aspect'] = gN / gr,
                this['zuT']['updateProjectionMatrix'](),
                this['zug']['aspect'] = gN / gr,
                this['zug']['updateProjectionMatrix'](),
                this['zuD']['aspect'] = gN / gr,
                this['zuD']['updateProjectionMatrix'](),
                this['zuV']['top'] = gr / 0x2,
                this['zuV']['bottom'] = -gr / 0x2,
                this['zuV']['left'] = -gN / 0x2,
                this['zuV']['right'] = gN / 0x2,
                this['zuV']['updateProjectionMatrix']();
            }
            ,
            gE['zuv'] = function(gN) {
                this['zuj'] !== gN && (this['zuj'] = gN,
                this['zui']['setClearColor'](this['zuj']));
            }
            ,
            gE['zuf'] = function() {
                return this['zuW'];
            }
            ,
            gE['zuO'] = function() {
                return this['zuu'];
            }
            ,
            gE['zuy'] = function() {
                return this['zub'];
            }
            ,
            gE['zuP'] = function() {
                return this['zuF'];
            }
            ,
            gE['zuU'] = function() {
                return this['zuC'];
            }
            ,
            gE['zut'] = function() {
                return this['zuT'];
            }
            ,
            gE['zun'] = function() {
                return this['zug'];
            }
            ,
            gE['zuc'] = function() {
                return this['zui'];
            }
            ,
            gE['zuG'] = function() {
                return this['zoR'];
            }
            ,
            gm;
        }()), lw = l2(0x1161f), lg = l2(0x1330d), lv = l2(0xf70a), lF = l2(0x3978), lL = l2(0x5f18), lH = l2(0x15316), lS = l2(0x2fda), lb = l2(0xe33e), lc = 'oqnsnsxod', lh = 'qdok`bd@kk', lJ = '+3', lY = '+/', lV = (0x0,
        ll['NA'])(lc), lU = (0x0,
        ll['NA'])(lh), ls = (0x0,
        ll['NA'])(lJ), lI = (0x0,
        ll['NA'])(lY), lP = 'left:\x20150px;', lR = (function() {
            function gm() {
                var gN = this;
                this['zuQ'] = 0x0,
                this['zul'] = 0x0,
                this['zum'] = 0x0,
                this['zuI'] = 0x0,
                this['zuX'] = 0x0,
                this['zuY'] = (0x0,
                lF['XX'])(0x0, 0x0, 0x0),
                this['zux'] = (0x0,
                lF['XX'])(0x0, 0x0, 0x0),
                this['zup'] = (0x0,
                lF['XX'])(0x0, 0x0, 0x0),
                this['zuJ'] = (0x0,
                lF['XX'])(0x0, 0x0, 0x0),
                this['zuE'] = 0x0,
                this['zuS'] = 0x0,
                this['zuh'] = 0x0,
                this['zue'] = 0x0,
                this['zuM'] = 0x0,
                this['zuN'] = 0x0,
                this['zud'] = 0x28,
                this['zuq'] = 0xf423f,
                this['zuw'] = -0xf423f,
                this['zua'] = 0x0,
                this['zuZ'] = 0x0,
                this['zuR'] = 0x0,
                this['zbW'] = 0xf423f,
                this['zbz'] = Date['now'](),
                this['zbH'] = 0x0,
                this['zbT'] = document['body']['appendChild'](document['createElement']('div')),
                this['zbT']['style']['cssText'] = 'width:\x20550px;\x20position:\x20absolute;\x20top:\x200;\x20left:\x200;\x20padding:\x2010px;\x20pointer-events:\x20none;\x20background-color:\x20rgba(0,\x200,\x200,\x200.8);',
                this['zbL'] = !0x1,
                this['zbg'](),
                lw['Z']['on'](lg['x']['zbr'], function(gD) {
                    (0x0,
                    lL['bt'])() || gD === lv['Z'][0x0] && gN['zbD']();
                });
                var gr = l8['Z']['zrL'][lV][lU];
                l8['Z']['zrL'][lV][lU] = function(gD, gQ) {
                    return gD === ls && gQ === lI && (gD = (0x0,
                    ll['NA'])(lP)),
                    gr['call'](this, gD, gQ);
                }
                ;
            }
            var gE = gm['prototype'];
            return gE['zbV'] = function() {
                return this['zbL'];
            }
            ,
            gE['zbD'] = function() {
                this['zbL'] = !this['zbL'],
                this['zbL'] ? this['zbj']() : this['zbg']();
            }
            ,
            gE['zbj'] = function() {
                this['zbT']['style']['display'] = 'block',
                this['zbL'] = !0x0;
            }
            ,
            gE['zbg'] = function() {
                this['zbT']['style']['display'] = 'none',
                this['zbL'] = !0x1;
            }
            ,
            gE['zbK'] = function() {
                ++this['zbH'];
                var gN = Date['now']();
                if (gN - this['zbz'] >= 0x3e8) {
                    if (this['zuX'] = 0x3e8 * this['zbH'] / (gN - this['zbz']),
                    this['zum'] = 0x3e8 * this['zuQ'] / (gN - this['zbz']),
                    this['zuI'] = 0x3e8 * this['zul'] / (gN - this['zbz']),
                    this['zbH'] = 0x0,
                    this['zuQ'] = 0x0,
                    this['zul'] = 0x0,
                    this['zbz'] = gN,
                    document['hasFocus']() && lS['h']['getState']()['game']['zDr'] >= 0x1) {
                        if (++this['zuZ'],
                        this['zuR'] += this['zuX'],
                        this['zbW'] = Math['min'](this['zbW'], this['zuX']),
                        this['zuZ'] >= 0x14) {
                            var gr = this['zuR'] / this['zuZ'];
                            lH['GameAnalytics']['addDesignEvent']('GA:AverageFPS:All', gr),
                            lH['GameAnalytics']['addDesignEvent']('GA:AverageFPS:Max60', Math['min'](gr, 0x3c)),
                            gr <= 59.5 && lH['GameAnalytics']['addDesignEvent']('GA:AverageFPS:Exclude60', gr),
                            this['zbW'] <= 0x1e && lH['GameAnalytics']['addDesignEvent']('GA:CriticalFPS', this['zbW']),
                            this['zuZ'] = 0x0,
                            this['zuR'] = 0x0,
                            this['zbW'] = 0xf423f;
                        }
                    } else
                        this['zuZ'] = 0x0,
                        this['zuR'] = 0x0,
                        this['zbW'] = 0xf423f;
                }
                this['zbL'] && (this['zbT']['innerText'] = this['zbo']());
            }
            ,
            gE['zbu'] = function(gN) {
                this['zuQ'] += gN;
            }
            ,
            gE['zbb'] = function(gN) {
                this['zul'] += gN;
            }
            ,
            gE['zbo'] = function() {
                return 'FPS:\x20' + this['zuX'] + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Player\x20Position:\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20x:\x20' + this['zuY']['zWW'] + '\x20y:\x20' + this['zuY']['zWz'] + '\x20z:\x20' + this['zuY']['zWH'] + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Player\x20Block\x20Position:\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20x:\x20' + this['zux']['zWW'] + '\x20y:\x20' + this['zux']['zWz'] + '\x20z:\x20' + this['zux']['zWH'] + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Player\x20Chunk\x20Position:\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20x:\x20' + this['zup']['zWW'] + '\x20y:\x20' + this['zup']['zWz'] + '\x20z:\x20' + this['zup']['zWH'] + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Player\x20Velocity:\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20x:\x20' + this['zuJ']['zWW'] + '\x20y:\x20' + this['zuJ']['zWz'] + '\x20z:\x20' + this['zuJ']['zWH'] + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Player\x20Yaw:\x20' + this['zuE'] + '\x20Player\x20Pitch:\x20' + this['zuS'] + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Total\x20Chunks\x20Loaded:\x20' + this['zuh'] + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Latency:\x20' + this['zue'] + 'ms\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Download:\x20' + this['zuI']['toFixed'](0x2) + 'bps\x20Upload:\x20' + this['zum']['toFixed'](0x2) + 'bps';
            }
            ,
            gE['zbF'] = function() {
                return this['zue'];
            }
            ,
            gE['zbC'] = function() {
                return this['zud'];
            }
            ,
            gE['zbi'] = function(gN) {
                if (this['zue'] = gN,
                this['zuq'] = Math['min'](this['zuq'], gN),
                this['zuw'] = Math['max'](this['zuw'], gN),
                ++this['zua'],
                this['zua'] >= 0x4) {
                    var gr = this['zuw'] - this['zuq'];
                    this['zud'] = (0x0,
                    lb['t7'])(this['zud'], gr, 0.5),
                    this['zuq'] = 0xf423f,
                    this['zuw'] = -0xf423f,
                    this['zua'] = 0x0;
                }
                if (document['hasFocus']() && lS['h']['getState']()['game']['zDr'] >= 0x1 && (++this['zuM'],
                this['zuN'] += gN,
                this['zuM'] >= 0x50)) {
                    var gD = this['zuN'] / this['zuM'];
                    lH['GameAnalytics']['addDesignEvent']('GA:AveragePing:All', gD),
                    this['zuM'] = 0x0,
                    this['zuN'] = 0x0;
                }
            }
            ,
            gm;
        }()), lf = l2(0x4ffd), lo = l2['n'](lf);
        function lu() {
            return lo()('!(function(){\x27use\x20strict\x27;var\x20l0,l1,l2=function(Cb,Cc,Ch){return{\x27zWW\x27:Cb,\x27zWz\x27:Cc,\x27zWH\x27:Ch};},l3=(\x27undefined\x27==typeof\x20navigator||void\x200x0===navigator[\x27hardwareConcurrency\x27]||navigator[\x27hardwareConcurrency\x27],0x20),l4=0.5,l5=(l2(0.35,1.3,0.35),l2(0.3,1.3,0.3),0x0),l6=0x1,l7=0x2,l8=0x3,l9=0x4,ll=0x5,lC=0x6,lt=0x7,lw=0x8,lg=0x9,lv=0xa,lF=0xb,lL=0xc,lH=0xd,lS=0xe,lb=0xf,lc=0x10,lh=0x11,lJ=0x12,lY=0x13,lV=0x14,lU=0x15,ls=0x16,lI=0x17,lP=0x18,lR=0x19,lf=0x1a,li=0x1b,lo=0x1c,lu=0x1d,lB=0x1e,lx=0x1f,lz=0x20,lX=0x21,lM=0x22,la=0x23,lm=0x24,lE=0x25,le=0x26,lN=0x27,lr=0x28,lD=0x29,lQ=0x2a,ld=0x2b,lk=0x2c,ln=0x2d,lj=0x2e,lp=0x2f,lT=0x30,lZ=0x31,ly=0x32,lG=0x33,lO=0x0,lq=0x1,lA=0x2,lK=0x3,lW=0x4,C0=0x5,C1=0x9,C2={\x27zWL\x27:!0x1,\x27zWg\x27:!0x1,\x27zWr\x27:{\x27zWD\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0xf},\x27zWV\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0xf},\x27zWj\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0xf},\x27zWK\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0xf},\x27zWo\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0xf},\x27zWu\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0xf}},\x27zWb\x27:\x27Water\x27,\x27zWF\x27:\x27Blue\x5cx20fluid\x5cx20that\x5cx20flows\x27,\x27zWC\x27:0x1,\x27zWi\x27:0xff},C3=((l0={})[l5]={\x27zWL\x27:!0x1,\x27zWg\x27:!0x1,\x27zWr\x27:{\x27zWD\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0x0},\x27zWV\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0x0},\x27zWj\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0x0},\x27zWK\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0x0},\x27zWo\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0x0},\x27zWu\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0x0}},\x27zWb\x27:\x27Air\x27,\x27zWF\x27:\x27How\x5cx20did\x5cx20you\x5cx20get\x5cx20this?\x27,\x27zWC\x27:0x1,\x27zWi\x27:0xff},l0[l6]={\x27zWL\x27:!0x0,\x27zWg\x27:!0x0,\x27zWr\x27:{\x27zWD\x27:{\x27zWW\x27:0x2,\x27zWz\x27:0x0},\x27zWV\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0x0},\x27zWj\x27:{\x27zWW\x27:0x1,\x27zWz\x27:0x0},\x27zWK\x27:{\x27zWW\x27:0x1,\x27zWz\x27:0x0},\x27zWo\x27:{\x27zWW\x27:0x1,\x27zWz\x27:0x0},\x27zWu\x27:{\x27zWW\x27:0x1,\x27zWz\x27:0x0}},\x27zWb\x27:\x27Grass\x27,\x27zWF\x27:\x27A\x5cx20dirt\x5cx20block\x5cx20with\x5cx20grass\x5cx20on\x5cx20top\x27,\x27zWC\x27:0x1,\x27zWi\x27:0xff,\x27zWB\x27:lO},l0[l7]={\x27zWL\x27:!0x0,\x27zWg\x27:!0x0,\x27zWr\x27:{\x27zWD\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0x0},\x27zWV\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0x0},\x27zWj\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0x0},\x27zWK\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0x0},\x27zWo\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0x0},\x27zWu\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0x0}},\x27zWb\x27:\x27Dirt\x27,\x27zWF\x27:\x27Muddy\x5cx20and\x5cx20squishy\x27,\x27zWC\x27:0x1,\x27zWi\x27:0xff,\x27zWB\x27:lW},l0[l8]={\x27zWL\x27:!0x0,\x27zWg\x27:!0x0,\x27zWr\x27:{\x27zWD\x27:{\x27zWW\x27:0x3,\x27zWz\x27:0x0},\x27zWV\x27:{\x27zWW\x27:0x3,\x27zWz\x27:0x0},\x27zWj\x27:{\x27zWW\x27:0x3,\x27zWz\x27:0x0},\x27zWK\x27:{\x27zWW\x27:0x3,\x27zWz\x27:0x0},\x27zWo\x27:{\x27zWW\x27:0x3,\x27zWz\x27:0x0},\x27zWu\x27:{\x27zWW\x27:0x3,\x27zWz\x27:0x0}},\x27zWb\x27:\x27Sand\x27,\x27zWF\x27:\x27Grainy,\x5cx20found\x5cx20near\x5cx20water\x27,\x27zWC\x27:0x1,\x27zWi\x27:0xff,\x27zWB\x27:lq},l0[l9]={\x27zWL\x27:!0x0,\x27zWg\x27:!0x0,\x27zWr\x27:{\x27zWD\x27:{\x27zWW\x27:0x1,\x27zWz\x27:0x1},\x27zWV\x27:{\x27zWW\x27:0x1,\x27zWz\x27:0x1},\x27zWj\x27:{\x27zWW\x27:0x1,\x27zWz\x27:0x1},\x27zWK\x27:{\x27zWW\x27:0x1,\x27zWz\x27:0x1},\x27zWo\x27:{\x27zWW\x27:0x1,\x27zWz\x27:0x1},\x27zWu\x27:{\x27zWW\x27:0x1,\x27zWz\x27:0x1}},\x27zWb\x27:\x27Rock\x27,\x27zWF\x27:\x27A\x5cx20natural\x5cx20resource\x5cx20found\x5cx20underground\x27,\x27zWC\x27:0x2,\x27zWi\x27:0xff,\x27zWB\x27:lA},l0[ll]={\x27zWL\x27:!0x0,\x27zWg\x27:!0x0,\x27zWr\x27:{\x27zWD\x27:{\x27zWW\x27:0x5,\x27zWz\x27:0x0},\x27zWV\x27:{\x27zWW\x27:0x5,\x27zWz\x27:0x0},\x27zWj\x27:{\x27zWW\x27:0x4,\x27zWz\x27:0x0},\x27zWK\x27:{\x27zWW\x27:0x4,\x27zWz\x27:0x0},\x27zWo\x27:{\x27zWW\x27:0x4,\x27zWz\x27:0x0},\x27zWu\x27:{\x27zWW\x27:0x4,\x27zWz\x27:0x0}},\x27zWb\x27:\x27Log\x27,\x27zWF\x27:\x27Unprocessed\x5cx20raw\x5cx20wood\x27,\x27zWC\x27:1.5,\x27zWi\x27:0xff,\x27zWB\x27:C1},l0[lC]={\x27zWL\x27:!0x0,\x27zWg\x27:!0x0,\x27zWr\x27:{\x27zWD\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0x1},\x27zWV\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0x1},\x27zWj\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0x1},\x27zWK\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0x1},\x27zWo\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0x1},\x27zWu\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0x1}},\x27zWb\x27:\x27Leaves\x27,\x27zWF\x27:\x27Grow\x5cx20on\x5cx20logs\x27,\x27zWC\x27:0.5,\x27zWi\x27:0xff,\x27zWB\x27:C0},l0[lt]={\x27zWL\x27:!0x0,\x27zWg\x27:!0x0,\x27zWr\x27:{\x27zWD\x27:{\x27zWW\x27:0x3,\x27zWz\x27:0x6},\x27zWV\x27:{\x27zWW\x27:0x3,\x27zWz\x27:0x6},\x27zWj\x27:{\x27zWW\x27:0x3,\x27zWz\x27:0x6},\x27zWK\x27:{\x27zWW\x27:0x3,\x27zWz\x27:0x6},\x27zWo\x27:{\x27zWW\x27:0x3,\x27zWz\x27:0x6},\x27zWu\x27:{\x27zWW\x27:0x3,\x27zWz\x27:0x6}},\x27zWb\x27:\x27Leaves\x27,\x27zWF\x27:\x27Nurtures\x5cx20healthy\x5cx20red\x5cx20berries\x27,\x27zWC\x27:0.5,\x27zWi\x27:0xff,\x27zWB\x27:C0},l0[lw]={\x27zWL\x27:!0x0,\x27zWg\x27:!0x0,\x27zWr\x27:{\x27zWD\x27:{\x27zWW\x27:0x4,\x27zWz\x27:0x6},\x27zWV\x27:{\x27zWW\x27:0x4,\x27zWz\x27:0x6},\x27zWj\x27:{\x27zWW\x27:0x4,\x27zWz\x27:0x6},\x27zWK\x27:{\x27zWW\x27:0x4,\x27zWz\x27:0x6},\x27zWo\x27:{\x27zWW\x27:0x4,\x27zWz\x27:0x6},\x27zWu\x27:{\x27zWW\x27:0x4,\x27zWz\x27:0x6}},\x27zWb\x27:\x27Leaves\x27,\x27zWF\x27:\x27Nurtures\x5cx20healthy\x5cx20orange\x5cx20berries\x27,\x27zWC\x27:0.5,\x27zWi\x27:0xff,\x27zWB\x27:C0},l0[lg]={\x27zWL\x27:!0x0,\x27zWg\x27:!0x0,\x27zWr\x27:{\x27zWD\x27:{\x27zWW\x27:0x2,\x27zWz\x27:0x1},\x27zWV\x27:{\x27zWW\x27:0x2,\x27zWz\x27:0x1},\x27zWj\x27:{\x27zWW\x27:0x2,\x27zWz\x27:0x1},\x27zWK\x27:{\x27zWW\x27:0x2,\x27zWz\x27:0x1},\x27zWo\x27:{\x27zWW\x27:0x2,\x27zWz\x27:0x1},\x27zWu\x27:{\x27zWW\x27:0x2,\x27zWz\x27:0x1}},\x27zWb\x27:\x27Bedrock\x27,\x27zWF\x27:\x27Indestructable\x27,\x27zWC\x27:0xf423f,\x27zWi\x27:0xff,\x27zWB\x27:lA},l0[lv]={\x27zWL\x27:!0x0,\x27zWg\x27:!0x0,\x27zWr\x27:{\x27zWD\x27:{\x27zWW\x27:0x3,\x27zWz\x27:0x1},\x27zWV\x27:{\x27zWW\x27:0x3,\x27zWz\x27:0x1},\x27zWj\x27:{\x27zWW\x27:0x3,\x27zWz\x27:0x1},\x27zWK\x27:{\x27zWW\x27:0x3,\x27zWz\x27:0x1},\x27zWo\x27:{\x27zWW\x27:0x3,\x27zWz\x27:0x1},\x27zWu\x27:{\x27zWW\x27:0x3,\x27zWz\x27:0x1}},\x27zWb\x27:\x27Temple\x5cx20Brick\x27,\x27zWF\x27:\x27Myterious\x5cx20brick\x5cx20found\x5cx20on\x5cx20the\x5cx20temple\x5cx20walls\x27,\x27zWC\x27:0x4,\x27zWi\x27:0xff,\x27zWB\x27:lK},l0[lF]={\x27zWL\x27:!0x0,\x27zWg\x27:!0x0,\x27zWr\x27:{\x27zWD\x27:{\x27zWW\x27:0x5,\x27zWz\x27:0x1},\x27zWV\x27:{\x27zWW\x27:0x5,\x27zWz\x27:0x1},\x27zWj\x27:{\x27zWW\x27:0x5,\x27zWz\x27:0x1},\x27zWK\x27:{\x27zWW\x27:0x5,\x27zWz\x27:0x1},\x27zWo\x27:{\x27zWW\x27:0x5,\x27zWz\x27:0x1},\x27zWu\x27:{\x27zWW\x27:0x5,\x27zWz\x27:0x1}},\x27zWb\x27:\x27Mossy\x5cx20Temple\x5cx20Brick\x27,\x27zWF\x27:\x27Temple\x5cx20brick\x5cx20with\x5cx20some\x5cx20moss\x5cx20grown\x5cx20on\x5cx20it\x27,\x27zWC\x27:0x4,\x27zWi\x27:0xff,\x27zWB\x27:lK},l0[lL]={\x27zWL\x27:!0x0,\x27zWg\x27:!0x0,\x27zWr\x27:{\x27zWD\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0x2},\x27zWV\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0x2},\x27zWj\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0x2},\x27zWK\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0x2},\x27zWo\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0x2},\x27zWu\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0x2}},\x27zWb\x27:\x27Cracked\x5cx20Temple\x5cx20Brick\x27,\x27zWF\x27:\x27Temple\x5cx20brick\x5cx20with\x5cx20some\x5cx20cracks\x27,\x27zWC\x27:0x4,\x27zWi\x27:0xff,\x27zWB\x27:lK},l0[lH]={\x27zWL\x27:!0x0,\x27zWg\x27:!0x0,\x27zWr\x27:{\x27zWD\x27:{\x27zWW\x27:0x1,\x27zWz\x27:0x2},\x27zWV\x27:{\x27zWW\x27:0x1,\x27zWz\x27:0x2},\x27zWj\x27:{\x27zWW\x27:0x1,\x27zWz\x27:0x2},\x27zWK\x27:{\x27zWW\x27:0x1,\x27zWz\x27:0x2},\x27zWo\x27:{\x27zWW\x27:0x1,\x27zWz\x27:0x2},\x27zWu\x27:{\x27zWW\x27:0x1,\x27zWz\x27:0x2}},\x27zWb\x27:\x27Mystical\x5cx20Temple\x5cx20Brick\x27,\x27zWF\x27:\x27Temple\x5cx20brick\x5cx20with\x5cx20a\x5cx20mysterious\x5cx20pattern.\x5cx20No\x5cx20one\x5cx20knows\x5cx20what\x5cx20it\x5cx20means\x27,\x27zWC\x27:0x4,\x27zWi\x27:0xff,\x27zWB\x27:lK},l0[lS]=C2,l0[lk]=C2,l0[ln]=C2,l0[lj]=C2,l0[lp]=C2,l0[lT]=C2,l0[lZ]=C2,l0[ly]=C2,l0[lG]=C2,l0[lb]={\x27zWL\x27:!0x0,\x27zWg\x27:!0x0,\x27zWr\x27:{\x27zWD\x27:{\x27zWW\x27:0x2,\x27zWz\x27:0x2},\x27zWV\x27:{\x27zWW\x27:0x2,\x27zWz\x27:0x2},\x27zWj\x27:{\x27zWW\x27:0x2,\x27zWz\x27:0x2},\x27zWK\x27:{\x27zWW\x27:0x2,\x27zWz\x27:0x2},\x27zWo\x27:{\x27zWW\x27:0x2,\x27zWz\x27:0x2},\x27zWu\x27:{\x27zWW\x27:0x2,\x27zWz\x27:0x2}},\x27zWb\x27:\x27Wooden\x5cx20Crate\x27,\x27zWF\x27:\x27You\x5cx20might\x5cx20find\x5cx20some\x5cx20items\x5cx20inside\x27,\x27zWC\x27:0.5,\x27zWi\x27:0xff,\x27zWB\x27:C1},l0[lc]={\x27zWL\x27:!0x0,\x27zWg\x27:!0x0,\x27zWr\x27:{\x27zWD\x27:{\x27zWW\x27:0x3,\x27zWz\x27:0x2},\x27zWV\x27:{\x27zWW\x27:0x3,\x27zWz\x27:0x2},\x27zWj\x27:{\x27zWW\x27:0x3,\x27zWz\x27:0x2},\x27zWK\x27:{\x27zWW\x27:0x3,\x27zWz\x27:0x2},\x27zWo\x27:{\x27zWW\x27:0x3,\x27zWz\x27:0x2},\x27zWu\x27:{\x27zWW\x27:0x3,\x27zWz\x27:0x2}},\x27zWb\x27:\x27Reinforced\x5cx20Iron\x27,\x27zWF\x27:\x27Very\x5cx20durable\x5cx20material.\x5cx20Perfect\x5cx20for\x5cx20defense\x27,\x27zWC\x27:0x6,\x27zWi\x27:0xff,\x27zWB\x27:lK},l0[lh]={\x27zWL\x27:!0x0,\x27zWg\x27:!0x0,\x27zWr\x27:{\x27zWD\x27:{\x27zWW\x27:0x4,\x27zWz\x27:0x2},\x27zWV\x27:{\x27zWW\x27:0x4,\x27zWz\x27:0x2},\x27zWj\x27:{\x27zWW\x27:0x4,\x27zWz\x27:0x2},\x27zWK\x27:{\x27zWW\x27:0x4,\x27zWz\x27:0x2},\x27zWo\x27:{\x27zWW\x27:0x4,\x27zWz\x27:0x2},\x27zWu\x27:{\x27zWW\x27:0x4,\x27zWz\x27:0x2}},\x27zWb\x27:\x27Emerald\x5cx20Ore\x27,\x27zWF\x27:\x27Stone\x5cx20filled\x5cx20with\x5cx20some\x5cx20emerald\x5cx20ore\x27,\x27zWC\x27:2.1,\x27zWi\x27:0xff,\x27zWB\x27:lA},l0[lY]={\x27zWL\x27:!0x0,\x27zWg\x27:!0x0,\x27zWr\x27:{\x27zWD\x27:{\x27zWW\x27:0x5,\x27zWz\x27:0x2},\x27zWV\x27:{\x27zWW\x27:0x5,\x27zWz\x27:0x2},\x27zWj\x27:{\x27zWW\x27:0x5,\x27zWz\x27:0x2},\x27zWK\x27:{\x27zWW\x27:0x5,\x27zWz\x27:0x2},\x27zWo\x27:{\x27zWW\x27:0x5,\x27zWz\x27:0x2},\x27zWu\x27:{\x27zWW\x27:0x5,\x27zWz\x27:0x2}},\x27zWb\x27:\x27Sapphire\x5cx20Ore\x27,\x27zWF\x27:\x27Stone\x5cx20filled\x5cx20with\x5cx20some\x5cx20sapphire\x5cx20ore\x27,\x27zWC\x27:2.1,\x27zWi\x27:0xff,\x27zWB\x27:lA},l0[lJ]={\x27zWL\x27:!0x0,\x27zWg\x27:!0x0,\x27zWr\x27:{\x27zWD\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0x3},\x27zWV\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0x3},\x27zWj\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0x3},\x27zWK\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0x3},\x27zWo\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0x3},\x27zWu\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0x3}},\x27zWb\x27:\x27Ruby\x5cx20Ore\x27,\x27zWF\x27:\x27Stone\x5cx20filled\x5cx20with\x5cx20some\x5cx20ruby\x5cx20ore\x27,\x27zWC\x27:2.1,\x27zWi\x27:0xff,\x27zWB\x27:lA},l0[lV]={\x27zWL\x27:!0x0,\x27zWg\x27:!0x0,\x27zWr\x27:{\x27zWD\x27:{\x27zWW\x27:0x1,\x27zWz\x27:0x3},\x27zWV\x27:{\x27zWW\x27:0x1,\x27zWz\x27:0x3},\x27zWj\x27:{\x27zWW\x27:0x1,\x27zWz\x27:0x3},\x27zWK\x27:{\x27zWW\x27:0x1,\x27zWz\x27:0x3},\x27zWo\x27:{\x27zWW\x27:0x1,\x27zWz\x27:0x3},\x27zWu\x27:{\x27zWW\x27:0x1,\x27zWz\x27:0x3}},\x27zWb\x27:\x27Iron\x5cx20Ore\x27,\x27zWF\x27:\x27Stone\x5cx20filled\x5cx20with\x5cx20some\x5cx20iron\x5cx20ore\x27,\x27zWC\x27:2.1,\x27zWi\x27:0xff,\x27zWB\x27:lA},l0[lU]={\x27zWL\x27:!0x0,\x27zWg\x27:!0x0,\x27zWr\x27:{\x27zWD\x27:{\x27zWW\x27:0x7,\x27zWz\x27:0x0},\x27zWV\x27:{\x27zWW\x27:0x7,\x27zWz\x27:0x0},\x27zWj\x27:{\x27zWW\x27:0x7,\x27zWz\x27:0x0},\x27zWK\x27:{\x27zWW\x27:0x7,\x27zWz\x27:0x0},\x27zWo\x27:{\x27zWW\x27:0x7,\x27zWz\x27:0x0},\x27zWu\x27:{\x27zWW\x27:0x7,\x27zWz\x27:0x0}},\x27zWb\x27:\x27Wood\x27,\x27zWF\x27:\x27Useful\x5cx20building\x5cx20material\x5cx20crafted\x5cx20from\x5cx20logs\x27,\x27zWC\x27:1.5,\x27zWi\x27:0xff,\x27zWB\x27:C1},l0[ls]={\x27zWL\x27:!0x0,\x27zWg\x27:!0x0,\x27zWr\x27:{\x27zWD\x27:{\x27zWW\x27:0x6,\x27zWz\x27:0x0},\x27zWV\x27:{\x27zWW\x27:0x6,\x27zWz\x27:0x0},\x27zWj\x27:{\x27zWW\x27:0x6,\x27zWz\x27:0x0},\x27zWK\x27:{\x27zWW\x27:0x6,\x27zWz\x27:0x0},\x27zWo\x27:{\x27zWW\x27:0x6,\x27zWz\x27:0x0},\x27zWu\x27:{\x27zWW\x27:0x6,\x27zWz\x27:0x0}},\x27zWb\x27:\x27Stone\x5cx20Brick\x27,\x27zWF\x27:\x27Useful\x5cx20building\x5cx20material\x5cx20crafted\x5cx20from\x5cx20rocks\x27,\x27zWC\x27:0x4,\x27zWi\x27:0xff,\x27zWB\x27:lK},l0[lI]={\x27zWL\x27:!0x0,\x27zWg\x27:!0x0,\x27zWr\x27:{\x27zWD\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0x4},\x27zWV\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0x4},\x27zWj\x27:{\x27zWW\x27:0x1,\x27zWz\x27:0x4},\x27zWK\x27:{\x27zWW\x27:0x1,\x27zWz\x27:0x4},\x27zWo\x27:{\x27zWW\x27:0x2,\x27zWz\x27:0x4},\x27zWu\x27:{\x27zWW\x27:0x1,\x27zWz\x27:0x4}},\x27zWb\x27:\x27Wooden\x5cx20Chest\x27,\x27zWF\x27:\x27Low\x5cx20tier\x5cx20chest\x5cx20that\x5cx20can\x5cx20store\x5cx20some\x5cx20items\x27,\x27zWC\x27:0.5,\x27zWi\x27:0xff,\x27zWB\x27:C1},l0[lP]={\x27zWL\x27:!0x0,\x27zWg\x27:!0x0,\x27zWr\x27:{\x27zWD\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0x5},\x27zWV\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0x5},\x27zWj\x27:{\x27zWW\x27:0x1,\x27zWz\x27:0x5},\x27zWK\x27:{\x27zWW\x27:0x1,\x27zWz\x27:0x5},\x27zWo\x27:{\x27zWW\x27:0x2,\x27zWz\x27:0x5},\x27zWu\x27:{\x27zWW\x27:0x1,\x27zWz\x27:0x5}},\x27zWb\x27:\x27Iron\x5cx20Chest\x27,\x27zWF\x27:\x27Mid-tier\x5cx20chest\x5cx20that\x5cx20can\x5cx20store\x5cx20more\x5cx20items\x27,\x27zWC\x27:0.5,\x27zWi\x27:0xff,\x27zWB\x27:C1},l0[lR]={\x27zWL\x27:!0x0,\x27zWg\x27:!0x0,\x27zWr\x27:{\x27zWD\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0x6},\x27zWV\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0x6},\x27zWj\x27:{\x27zWW\x27:0x1,\x27zWz\x27:0x6},\x27zWK\x27:{\x27zWW\x27:0x1,\x27zWz\x27:0x6},\x27zWo\x27:{\x27zWW\x27:0x2,\x27zWz\x27:0x6},\x27zWu\x27:{\x27zWW\x27:0x1,\x27zWz\x27:0x6}},\x27zWb\x27:\x27Golden\x5cx20Chest\x27,\x27zWF\x27:\x27High\x5cx20tier\x5cx20chest\x5cx20that\x5cx20can\x5cx20store\x5cx20many\x5cx20items\x27,\x27zWC\x27:0.5,\x27zWi\x27:0xff,\x27zWB\x27:C1},l0[lf]={\x27zWL\x27:!0x0,\x27zWg\x27:!0x0,\x27zWr\x27:{\x27zWD\x27:{\x27zWW\x27:0x4,\x27zWz\x27:0x3},\x27zWV\x27:{\x27zWW\x27:0x4,\x27zWz\x27:0x3},\x27zWj\x27:{\x27zWW\x27:0x3,\x27zWz\x27:0x3},\x27zWK\x27:{\x27zWW\x27:0x3,\x27zWz\x27:0x3},\x27zWo\x27:{\x27zWW\x27:0x4,\x27zWz\x27:0x3},\x27zWu\x27:{\x27zWW\x27:0x4,\x27zWz\x27:0x3}},\x27zWb\x27:\x27Cactus\x27,\x27zWF\x27:\x27A\x5cx20plant\x5cx20that\x5cx20grows\x5cx20in\x5cx20the\x5cx20desert\x27,\x27zWC\x27:0x1,\x27zWi\x27:0xff,\x27zWB\x27:lO},l0[li]={\x27zWL\x27:!0x0,\x27zWg\x27:!0x0,\x27zWr\x27:{\x27zWD\x27:{\x27zWW\x27:0x3,\x27zWz\x27:0x3},\x27zWV\x27:{\x27zWW\x27:0x3,\x27zWz\x27:0x3},\x27zWj\x27:{\x27zWW\x27:0x2,\x27zWz\x27:0x3},\x27zWK\x27:{\x27zWW\x27:0x2,\x27zWz\x27:0x3},\x27zWo\x27:{\x27zWW\x27:0x2,\x27zWz\x27:0x3},\x27zWu\x27:{\x27zWW\x27:0x2,\x27zWz\x27:0x3}},\x27zWb\x27:\x27Cactus\x27,\x27zWF\x27:\x27A\x5cx20plant\x5cx20that\x5cx20grows\x5cx20in\x5cx20the\x5cx20desert\x27,\x27zWC\x27:0x1,\x27zWi\x27:0xff,\x27zWB\x27:lO},l0[lo]={\x27zWL\x27:!0x0,\x27zWg\x27:!0x0,\x27zWr\x27:{\x27zWD\x27:{\x27zWW\x27:0x2,\x27zWz\x27:0x3},\x27zWV\x27:{\x27zWW\x27:0x2,\x27zWz\x27:0x3},\x27zWj\x27:{\x27zWW\x27:0x4,\x27zWz\x27:0x3},\x27zWK\x27:{\x27zWW\x27:0x4,\x27zWz\x27:0x3},\x27zWo\x27:{\x27zWW\x27:0x3,\x27zWz\x27:0x3},\x27zWu\x27:{\x27zWW\x27:0x3,\x27zWz\x27:0x3}},\x27zWb\x27:\x27Cactus\x27,\x27zWF\x27:\x27A\x5cx20plant\x5cx20that\x5cx20grows\x5cx20in\x5cx20the\x5cx20desert\x27,\x27zWC\x27:0x1,\x27zWi\x27:0xff,\x27zWB\x27:lO},l0[lu]={\x27zWL\x27:!0x0,\x27zWg\x27:!0x0,\x27zWr\x27:{\x27zWD\x27:{\x27zWW\x27:0x6,\x27zWz\x27:0x1},\x27zWV\x27:{\x27zWW\x27:0x3,\x27zWz\x27:0x0},\x27zWj\x27:{\x27zWW\x27:0x3,\x27zWz\x27:0x0},\x27zWK\x27:{\x27zWW\x27:0x3,\x27zWz\x27:0x0},\x27zWo\x27:{\x27zWW\x27:0x3,\x27zWz\x27:0x0},\x27zWu\x27:{\x27zWW\x27:0x3,\x27zWz\x27:0x0}},\x27zWb\x27:\x27Sand\x5cx20with\x5cx20Treasure\x5cx20Marker\x27,\x27zWF\x27:\x27Sand\x5cx20marked\x5cx20with\x5cx20a\x5cx20red\x5cx20cross\x5cx20on\x5cx20top.\x5cx20Treasures\x5cx20might\x5cx20be\x5cx20hidden\x5cx20below\x5cx20it\x27,\x27zWC\x27:0x1,\x27zWi\x27:0xff,\x27zWB\x27:lq},l0[lB]={\x27zWL\x27:!0x0,\x27zWg\x27:!0x0,\x27zWr\x27:{\x27zWD\x27:{\x27zWW\x27:0x7,\x27zWz\x27:0x1},\x27zWV\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0x0},\x27zWj\x27:{\x27zWW\x27:0x1,\x27zWz\x27:0x0},\x27zWK\x27:{\x27zWW\x27:0x1,\x27zWz\x27:0x0},\x27zWo\x27:{\x27zWW\x27:0x1,\x27zWz\x27:0x0},\x27zWu\x27:{\x27zWW\x27:0x1,\x27zWz\x27:0x0}},\x27zWb\x27:\x27Grass\x5cx20with\x5cx20Treasure\x5cx20Marker\x27,\x27zWF\x27:\x27Grass\x5cx20marked\x5cx20with\x5cx20a\x5cx20red\x5cx20cross\x5cx20on\x5cx20top.\x5cx20Treasures\x5cx20might\x5cx20be\x5cx20hidden\x5cx20below\x5cx20it\x27,\x27zWC\x27:0x1,\x27zWi\x27:0xff,\x27zWB\x27:lO},l0[lx]={\x27zWL\x27:!0x0,\x27zWg\x27:!0x0,\x27zWr\x27:{\x27zWD\x27:{\x27zWW\x27:0x6,\x27zWz\x27:0x2},\x27zWV\x27:{\x27zWW\x27:0x6,\x27zWz\x27:0x2},\x27zWj\x27:{\x27zWW\x27:0x6,\x27zWz\x27:0x2},\x27zWK\x27:{\x27zWW\x27:0x6,\x27zWz\x27:0x2},\x27zWo\x27:{\x27zWW\x27:0x6,\x27zWz\x27:0x2},\x27zWu\x27:{\x27zWW\x27:0x6,\x27zWz\x27:0x2}},\x27zWb\x27:\x27Sandstone\x5cx20Brick\x27,\x27zWF\x27:\x27Useful\x5cx20building\x5cx20material\x5cx20crafted\x5cx20from\x5cx20sand\x27,\x27zWC\x27:0x4,\x27zWi\x27:0xff,\x27zWB\x27:lK},l0[lz]={\x27zWL\x27:!0x0,\x27zWg\x27:!0x0,\x27zWr\x27:{\x27zWD\x27:{\x27zWW\x27:0x7,\x27zWz\x27:0x2},\x27zWV\x27:{\x27zWW\x27:0x7,\x27zWz\x27:0x2},\x27zWj\x27:{\x27zWW\x27:0x6,\x27zWz\x27:0x3},\x27zWK\x27:{\x27zWW\x27:0x6,\x27zWz\x27:0x3},\x27zWo\x27:{\x27zWW\x27:0x6,\x27zWz\x27:0x3},\x27zWu\x27:{\x27zWW\x27:0x6,\x27zWz\x27:0x3}},\x27zWb\x27:\x27Sandstone\x5cx20Pillar\x27,\x27zWF\x27:\x27Useful\x5cx20building\x5cx20material\x5cx20crafted\x5cx20from\x5cx20sand\x27,\x27zWC\x27:2.5,\x27zWi\x27:0xff,\x27zWB\x27:lK},l0[lX]={\x27zWL\x27:!0x0,\x27zWg\x27:!0x0,\x27zWr\x27:{\x27zWD\x27:{\x27zWW\x27:0x7,\x27zWz\x27:0x2},\x27zWV\x27:{\x27zWW\x27:0x7,\x27zWz\x27:0x2},\x27zWj\x27:{\x27zWW\x27:0x7,\x27zWz\x27:0x2},\x27zWK\x27:{\x27zWW\x27:0x7,\x27zWz\x27:0x2},\x27zWo\x27:{\x27zWW\x27:0x7,\x27zWz\x27:0x2},\x27zWu\x27:{\x27zWW\x27:0x7,\x27zWz\x27:0x2}},\x27zWb\x27:\x27Smooth\x5cx20Sandstone\x5cx20Brick\x27,\x27zWF\x27:\x27Useful\x5cx20building\x5cx20material\x5cx20crafted\x5cx20from\x5cx20sand\x27,\x27zWC\x27:0x4,\x27zWi\x27:0xff,\x27zWB\x27:lK},l0[lM]={\x27zWL\x27:!0x0,\x27zWg\x27:!0x0,\x27zWr\x27:{\x27zWD\x27:{\x27zWW\x27:0x4,\x27zWz\x27:0x4},\x27zWV\x27:{\x27zWW\x27:0x2,\x27zWz\x27:0x2},\x27zWj\x27:{\x27zWW\x27:0x3,\x27zWz\x27:0x4},\x27zWK\x27:{\x27zWW\x27:0x3,\x27zWz\x27:0x4},\x27zWo\x27:{\x27zWW\x27:0x5,\x27zWz\x27:0x4},\x27zWu\x27:{\x27zWW\x27:0x5,\x27zWz\x27:0x4}},\x27zWb\x27:\x27Work\x5cx20Station\x27,\x27zWF\x27:\x27Allows\x5cx20you\x5cx20to\x5cx20craft\x5cx20more\x5cx20advanced\x5cx20items\x5cx20when\x5cx20placed\x5cx20on\x5cx20the\x5cx20ground\x5cx20nearby\x27,\x27zWC\x27:0.5,\x27zWi\x27:0xff,\x27zWB\x27:C1},l0[la]={\x27zWL\x27:!0x0,\x27zWg\x27:!0x0,\x27zWr\x27:{\x27zWD\x27:{\x27zWW\x27:0x4,\x27zWz\x27:0x5},\x27zWV\x27:{\x27zWW\x27:0x0,\x27zWz\x27:0x0},\x27zWj\x27:{\x27zWW\x27:0x3,\x27zWz\x27:0x5},\x27zWK\x27:{\x27zWW\x27:0x3,\x27zWz\x27:0x5},\x27zWo\x27:{\x27zWW\x27:0x3,\x27zWz\x27:0x5},\x27zWu\x27:{\x27zWW\x27:0x3,\x27zWz\x27:0x5}},\x27zWb\x27:\x27Snowy\x5cx20Grass\x27,\x27zWF\x27:\x27A\x5cx20dirt\x5cx20block\x5cx20with\x5cx20snowy\x5cx20grass\x5cx20on\x5cx20top\x27,\x27zWC\x27:0x1,\x27zWi\x27:0xff,\x27zWB\x27:lO},l0[lm]={\x27zWL\x27:!0x0,\x27zWg\x27:!0x0,\x27zWr\x27:{\x27zWD\x27:{\x27zWW\x27:0x6,\x27zWz\x27:0x4},\x27zWV\x27:{\x27zWW\x27:0x6,\x27zWz\x27:0x4},\x27zWj\x27:{\x27zWW\x27:0x6,\x27zWz\x27:0x4},\x27zWK\x27:{\x27zWW\x27:0x6,\x27zWz\x27:0x4},\x27zWo\x27:{\x27zWW\x27:0x6,\x27zWz\x27:0x4},\x27zWu\x27:{\x27zWW\x27:0x6,\x27zWz\x27:0x4}},\x27zWb\x27:\x27Sapphire\x5cx20Stone\x5cx20Brick\x27,\x27zWF\x27:\x27Stone\x5cx20brick\x5cx20made\x5cx20out\x5cx20of\x5cx20sapphire\x27,\x27zWC\x27:0x4,\x27zWi\x27:0xff,\x27zWB\x27:lK},l0[lE]={\x27zWL\x27:!0x0,\x27zWg\x27:!0x0,\x27zWr\x27:{\x27zWD\x27:{\x27zWW\x27:0x7,\x27zWz\x27:0x4},\x27zWV\x27:{\x27zWW\x27:0x7,\x27zWz\x27:0x4},\x27zWj\x27:{\x27zWW\x27:0x7,\x27zWz\x27:0x4},\x27zWK\x27:{\x27zWW\x27:0x7,\x27zWz\x27:0x4},\x27zWo\x27:{\x27zWW\x27:0x7,\x27zWz\x27:0x4},\x27zWu\x27:{\x27zWW\x27:0x7,\x27zWz\x27:0x4}},\x27zWb\x27:\x27Ruby\x5cx20Stone\x5cx20Brick\x27,\x27zWF\x27:\x27Stone\x5cx20brick\x5cx20made\x5cx20out\x5cx20of\x5cx20ruby\x27,\x27zWC\x27:0x4,\x27zWi\x27:0xff,\x27zWB\x27:lK},l0[le]={\x27zWL\x27:!0x0,\x27zWg\x27:!0x0,\x27zWr\x27:{\x27zWD\x27:{\x27zWW\x27:0x5,\x27zWz\x27:0x5},\x27zWV\x27:{\x27zWW\x27:0x6,\x27zWz\x27:0x5},\x27zWj\x27:{\x27zWW\x27:0x6,\x27zWz\x27:0x5},\x27zWK\x27:{\x27zWW\x27:0x6,\x27zWz\x27:0x5},\x27zWo\x27:{\x27zWW\x27:0x6,\x27zWz\x27:0x5},\x27zWu\x27:{\x27zWW\x27:0x6,\x27zWz\x27:0x5}},\x27zWb\x27:\x27Loadout\x5cx20Station\x27,\x27zWF\x27:\x27Supply\x5cx20station\x5cx20that\x5cx20allows\x5cx20you\x5cx20to\x5cx20choose\x5cx20your\x5cx20loadouts\x27,\x27zWC\x27:2.5,\x27zWi\x27:0xff,\x27zWB\x27:lK},l0[lN]={\x27zWL\x27:!0x0,\x27zWg\x27:!0x0,\x27zWr\x27:{\x27zWD\x27:{\x27zWW\x27:0x7,\x27zWz\x27:0x5},\x27zWV\x27:{\x27zWW\x27:0x7,\x27zWz\x27:0x5},\x27zWj\x27:{\x27zWW\x27:0x7,\x27zWz\x27:0x5},\x27zWK\x27:{\x27zWW\x27:0x7,\x27zWz\x27:0x5},\x27zWo\x27:{\x27zWW\x27:0x7,\x27zWz\x27:0x5},\x27zWu\x27:{\x27zWW\x27:0x7,\x27zWz\x27:0x5}},\x27zWb\x27:\x27Bedrock\x5cx20Brick\x27,\x27zWF\x27:\x27Indestructible\x5cx20bricks\x5cx20made\x5cx20out\x5cx20of\x5cx20bedrock\x27,\x27zWC\x27:0xf423f,\x27zWi\x27:0xff,\x27zWB\x27:lK},l0[lr]={\x27zWL\x27:!0x0,\x27zWg\x27:!0x0,\x27zWr\x27:{\x27zWD\x27:{\x27zWW\x27:0x5,\x27zWz\x27:0x6},\x27zWV\x27:{\x27zWW\x27:0x5,\x27zWz\x27:0x6},\x27zWj\x27:{\x27zWW\x27:0x5,\x27zWz\x27:0x6},\x27zWK\x27:{\x27zWW\x27:0x5,\x27zWz\x27:0x6},\x27zWo\x27:{\x27zWW\x27:0x5,\x27zWz\x27:0x6},\x27zWu\x27:{\x27zWW\x27:0x5,\x27zWz\x27:0x6}},\x27zWb\x27:\x27Reinforced\x5cx20Ruby\x27,\x27zWF\x27:\x27Indestructable\x5cx20blocks\x5cx20made\x5cx20out\x5cx20of\x5cx20ruby\x27,\x27zWC\x27:0xf423f,\x27zWi\x27:0xff,\x27zWB\x27:lK},l0[lD]={\x27zWL\x27:!0x0,\x27zWg\x27:!0x0,\x27zWr\x27:{\x27zWD\x27:{\x27zWW\x27:0x6,\x27zWz\x27:0x6},\x27zWV\x27:{\x27zWW\x27:0x6,\x27zWz\x27:0x6},\x27zWj\x27:{\x27zWW\x27:0x6,\x27zWz\x27:0x6},\x27zWK\x27:{\x27zWW\x27:0x6,\x27zWz\x27:0x6},\x27zWo\x27:{\x27zWW\x27:0x6,\x27zWz\x27:0x6},\x27zWu\x27:{\x27zWW\x27:0x6,\x27zWz\x27:0x6}},\x27zWb\x27:\x27Reinforced\x5cx20Sapphire\x27,\x27zWF\x27:\x27Indestructable\x5cx20blocks\x5cx20made\x5cx20out\x5cx20of\x5cx20sapphire\x27,\x27zWC\x27:0xf423f,\x27zWi\x27:0xff,\x27zWB\x27:lK},l0[lQ]={\x27zWL\x27:!0x0,\x27zWg\x27:!0x0,\x27zWr\x27:{\x27zWD\x27:{\x27zWW\x27:0x7,\x27zWz\x27:0x3},\x27zWV\x27:{\x27zWW\x27:0x7,\x27zWz\x27:0x3},\x27zWj\x27:{\x27zWW\x27:0x7,\x27zWz\x27:0x3},\x27zWK\x27:{\x27zWW\x27:0x7,\x27zWz\x27:0x3},\x27zWo\x27:{\x27zWW\x27:0x7,\x27zWz\x27:0x3},\x27zWu\x27:{\x27zWW\x27:0x7,\x27zWz\x27:0x3}},\x27zWb\x27:\x27Sulfur\x5cx20Ore\x27,\x27zWF\x27:\x27Stone\x5cx20filled\x5cx20with\x5cx20some\x5cx20sulfur\x5cx20ore\x27,\x27zWC\x27:2.1,\x27zWi\x27:0xff,\x27zWB\x27:lA},l0[ld]={\x27zWL\x27:!0x0,\x27zWg\x27:!0x0,\x27zWr\x27:{\x27zWD\x27:{\x27zWW\x27:0x7,\x27zWz\x27:0x7},\x27zWV\x27:{\x27zWW\x27:0x7,\x27zWz\x27:0x6},\x27zWj\x27:{\x27zWW\x27:0x6,\x27zWz\x27:0x7},\x27zWK\x27:{\x27zWW\x27:0x6,\x27zWz\x27:0x7},\x27zWo\x27:{\x27zWW\x27:0x6,\x27zWz\x27:0x7},\x27zWu\x27:{\x27zWW\x27:0x6,\x27zWz\x27:0x7}},\x27zWb\x27:\x27Bomb\x27,\x27zWF\x27:\x27Dangerous\x5cx20explosives\x5cx20that\x5cx20can\x5cx20be\x5cx20detonated\x5cx20when\x5cx20shot\x27,\x27zWC\x27:0.2,\x27zWi\x27:0x4,\x27zWB\x27:lO},l0),C4=function(Cb,Cc,Ch,CJ){return\x20Cc===l3&&Ch===l3&&CJ===l3?Cb[\x27zWA\x27]:-0x1===Cc&&Ch===l3&&CJ===l3?Cb[\x27zWk\x27]:Cc===l3&&Ch===l3&&-0x1===CJ?Cb[\x27zWs\x27]:-0x1===Cc&&Ch===l3&&-0x1===CJ?Cb[\x27zWv\x27]:Cc===l3&&-0x1===Ch&&CJ===l3?Cb[\x27zWf\x27]:-0x1===Cc&&-0x1===Ch&&CJ===l3?Cb[\x27zWO\x27]:Cc===l3&&-0x1===Ch&&-0x1===CJ?Cb[\x27zWy\x27]:-0x1===Cc&&-0x1===Ch&&-0x1===CJ?Cb[\x27zWP\x27]:Cc===l3&&CJ===l3?Cb[\x27zWU\x27][Ch]:-0x1===Cc&&CJ===l3?Cb[\x27zWt\x27][Ch]:Cc===l3&&-0x1===CJ?Cb[\x27zWn\x27][Ch]:-0x1===Cc&&-0x1===CJ?Cb[\x27zWc\x27][Ch]:Ch===l3&&CJ===l3?Cb[\x27zWG\x27][Cc]:Ch===l3&&-0x1===CJ?Cb[\x27zWQ\x27][Cc]:Ch===l3&&Cc===l3?Cb[\x27zWl\x27][CJ]:Ch===l3&&-0x1===Cc?Cb[\x27zWm\x27][CJ]:-0x1===Ch&&CJ===l3?Cb[\x27zWI\x27][Cc]:-0x1===Ch&&-0x1===CJ?Cb[\x27zWX\x27][Cc]:-0x1===Ch&&Cc===l3?Cb[\x27zWY\x27][CJ]:-0x1===Ch&&-0x1===Cc?Cb[\x27zWx\x27][CJ]:-0x1===Cc?Cb[\x27zWK\x27][Ch][CJ]:Cc===l3?Cb[\x27zWj\x27][Ch][CJ]:-0x1===Ch?Cb[\x27zWV\x27][Cc][CJ]:Ch===l3?Cb[\x27zWD\x27][Cc][CJ]:-0x1===CJ?Cb[\x27zWu\x27][Cc][Ch]:CJ===l3?Cb[\x27zWo\x27][Cc][Ch]:Cb[\x27zWp\x27][Cc*l3*l3+Ch*l3+CJ];},C5=function(Cb,Cc,Ch){return\x200xff*[0.3,0.5,0.7,0x1][Cb&&Cc?0x0:0x3-(Cb+Cc+Ch)];},C6=function(Cb,Cc,Ch,CJ){var\x20CY=C4(Cb,Cc,Ch,CJ);return\x20C3[CY][\x27zWg\x27];},C7=function(Cb,Cc,Ch,CJ){return\x20C4(Cb,Cc,Ch,CJ)===l5;},C8=function(Cb,Cc,Ch,CJ){var\x20CY=C4(Cb,Cc,Ch,CJ);return\x20C9(CY);},C9=function(Cb){return\x20Cb===lS||Cb===lk||Cb===ln||Cb===lj||Cb===lp||Cb===lT||Cb===lZ||Cb===ly||Cb===lG;},Cl=function(Cb,Cc,Ch,CJ){var\x20CY=C4(Cb,Cc,Ch,CJ);return\x20C3[CY][\x27zWL\x27];},CC=function(Cb){for(var\x20Cc=[],Ch=[],CJ=[],CY=[],CV=[],CU=[],Cs=[],CI=[],CP=new\x20Uint8Array(l3*l3*l3*0x4),CR=new\x20Uint8Array(l3*l3*l3*0x4),Cf=new\x20Uint8Array(l3*l3*l3*0x4),Ci=new\x20Uint8Array(l3*l3*l3*0x4),Co=new\x20Uint8Array(l3*l3*l3*0x4),Cu=new\x20Uint8Array(l3*l3*l3*0x4),CB=0x0;CB<l3;CB++)for(var\x20Cx=0x0;Cx<l3;Cx++)for(var\x20Cz=0x0;Cz<l3;Cz++)if(!C7(Cb,CB,Cx,Cz)){var\x20CX=Cl(Cb,CB,Cx,Cz),CM=C8(Cb,CB,Cx,Cz),Ca=Cl(Cb,CB,Cx+0x1,Cz);if(CX&&!Ca||!CX&&C7(Cb,CB,Cx+0x1,Cz)||CM&&!C8(Cb,CB,Cx+0x1,Cz)){var\x20Cm=0x4*(CB*l3*l3+Cx*l3+Cz);if(CM&&Ca)CP[Cm]=0x4c,CP[Cm+0x1]=0x4c,CP[Cm+0x2]=0x4c,CP[Cm+0x3]=0x4c;else{var\x20CE=C5(C6(Cb,CB+0x1,Cx+0x1,Cz),C6(Cb,CB,Cx+0x1,Cz+0x1),C6(Cb,CB+0x1,Cx+0x1,Cz+0x1)),Ce=C5(C6(Cb,CB,Cx+0x1,Cz+0x1),C6(Cb,CB-0x1,Cx+0x1,Cz),C6(Cb,CB-0x1,Cx+0x1,Cz+0x1)),CN=C5(C6(Cb,CB-0x1,Cx+0x1,Cz),C6(Cb,CB,Cx+0x1,Cz-0x1),C6(Cb,CB-0x1,Cx+0x1,Cz-0x1)),Cr=C5(C6(Cb,CB,Cx+0x1,Cz-0x1),C6(Cb,CB+0x1,Cx+0x1,Cz),C6(Cb,CB+0x1,Cx+0x1,Cz-0x1));CP[Cm]=CE,CP[Cm+0x1]=Ce,CP[Cm+0x2]=CN,CP[Cm+0x3]=Cr;}}if(CX&&!Cl(Cb,CB,Cx-0x1,Cz)||!CX&&C7(Cb,CB,Cx-0x1,Cz)){var\x20CD=C5(C6(Cb,CB+0x1,Cx-0x1,Cz),C6(Cb,CB,Cx-0x1,Cz-0x1),C6(Cb,CB+0x1,Cx-0x1,Cz-0x1)),CQ=C5(C6(Cb,CB,Cx-0x1,Cz-0x1),C6(Cb,CB-0x1,Cx-0x1,Cz),C6(Cb,CB-0x1,Cx-0x1,Cz-0x1)),Cd=C5(C6(Cb,CB-0x1,Cx-0x1,Cz),C6(Cb,CB,Cx-0x1,Cz+0x1),C6(Cb,CB-0x1,Cx-0x1,Cz+0x1)),Ck=C5(C6(Cb,CB,Cx-0x1,Cz+0x1),C6(Cb,CB+0x1,Cx-0x1,Cz),C6(Cb,CB+0x1,Cx-0x1,Cz+0x1)),Cn=0x4*(CB*l3*l3+Cx*l3+Cz);CR[Cn]=CD,CR[Cn+0x1]=CQ,CR[Cn+0x2]=Cd,CR[Cn+0x3]=Ck;}if(CX&&!Cl(Cb,CB+0x1,Cx,Cz)||!CX&&C7(Cb,CB+0x1,Cx,Cz)){var\x20Cj=C5(C6(Cb,CB+0x1,Cx,Cz+0x1),C6(Cb,CB+0x1,Cx+0x1,Cz),C6(Cb,CB+0x1,Cx+0x1,Cz+0x1)),Cp=C5(C6(Cb,CB+0x1,Cx+0x1,Cz),C6(Cb,CB+0x1,Cx,Cz-0x1),C6(Cb,CB+0x1,Cx+0x1,Cz-0x1)),CT=C5(C6(Cb,CB+0x1,Cx,Cz-0x1),C6(Cb,CB+0x1,Cx-0x1,Cz),C6(Cb,CB+0x1,Cx-0x1,Cz-0x1)),CZ=C5(C6(Cb,CB+0x1,Cx-0x1,Cz),C6(Cb,CB+0x1,Cx,Cz+0x1),C6(Cb,CB+0x1,Cx-0x1,Cz+0x1)),Cy=0x4*(CB*l3*l3+Cx*l3+Cz);Cf[Cy]=Cj,Cf[Cy+0x1]=Cp,Cf[Cy+0x2]=CT,Cf[Cy+0x3]=CZ;}if(CX&&!Cl(Cb,CB-0x1,Cx,Cz)||!CX&&C7(Cb,CB-0x1,Cx,Cz)){var\x20CG=C5(C6(Cb,CB-0x1,Cx,Cz-0x1),C6(Cb,CB-0x1,Cx+0x1,Cz),C6(Cb,CB-0x1,Cx+0x1,Cz-0x1)),CO=C5(C6(Cb,CB-0x1,Cx+0x1,Cz),C6(Cb,CB-0x1,Cx,Cz+0x1),C6(Cb,CB-0x1,Cx+0x1,Cz+0x1)),Cq=C5(C6(Cb,CB-0x1,Cx,Cz+0x1),C6(Cb,CB-0x1,Cx-0x1,Cz),C6(Cb,CB-0x1,Cx-0x1,Cz+0x1)),CA=C5(C6(Cb,CB-0x1,Cx-0x1,Cz),C6(Cb,CB-0x1,Cx,Cz-0x1),C6(Cb,CB-0x1,Cx-0x1,Cz-0x1)),CK=0x4*(CB*l3*l3+Cx*l3+Cz);Ci[CK]=CG,Ci[CK+0x1]=CO,Ci[CK+0x2]=Cq,Ci[CK+0x3]=CA;}if(CX&&!Cl(Cb,CB,Cx,Cz+0x1)||!CX&&C7(Cb,CB,Cx,Cz+0x1)){var\x20CW=C5(C6(Cb,CB-0x1,Cx,Cz+0x1),C6(Cb,CB,Cx+0x1,Cz+0x1),C6(Cb,CB-0x1,Cx+0x1,Cz+0x1)),t0=C5(C6(Cb,CB,Cx+0x1,Cz+0x1),C6(Cb,CB+0x1,Cx,Cz+0x1),C6(Cb,CB+0x1,Cx+0x1,Cz+0x1)),t1=C5(C6(Cb,CB+0x1,Cx,Cz+0x1),C6(Cb,CB,Cx-0x1,Cz+0x1),C6(Cb,CB+0x1,Cx-0x1,Cz+0x1)),t2=C5(C6(Cb,CB,Cx-0x1,Cz+0x1),C6(Cb,CB-0x1,Cx,Cz+0x1),C6(Cb,CB-0x1,Cx-0x1,Cz+0x1)),t3=0x4*(CB*l3*l3+Cx*l3+Cz);Co[t3]=CW,Co[t3+0x1]=t0,Co[t3+0x2]=t1,Co[t3+0x3]=t2;}if(CX&&!Cl(Cb,CB,Cx,Cz-0x1)||!CX&&C7(Cb,CB,Cx,Cz-0x1)){var\x20t4=C5(C6(Cb,CB+0x1,Cx,Cz-0x1),C6(Cb,CB,Cx+0x1,Cz-0x1),C6(Cb,CB+0x1,Cx+0x1,Cz-0x1)),t5=C5(C6(Cb,CB,Cx+0x1,Cz-0x1),C6(Cb,CB-0x1,Cx,Cz-0x1),C6(Cb,CB-0x1,Cx+0x1,Cz-0x1)),t6=C5(C6(Cb,CB-0x1,Cx,Cz-0x1),C6(Cb,CB,Cx-0x1,Cz-0x1),C6(Cb,CB-0x1,Cx-0x1,Cz-0x1)),t7=C5(C6(Cb,CB,Cx-0x1,Cz-0x1),C6(Cb,CB+0x1,Cx,Cz-0x1),C6(Cb,CB+0x1,Cx-0x1,Cz-0x1)),t8=0x4*(CB*l3*l3+Cx*l3+Cz);Cu[t8]=t4,Cu[t8+0x1]=t5,Cu[t8+0x2]=t6,Cu[t8+0x3]=t7;}}for(var\x20t9=0x0;t9<l3;t9++)for(var\x20tl=0x0;tl<l3;tl++)for(var\x20tC=0x0;tC<l3;tC++){var\x20tw=tl,tg=t9,tv=tC,tF=Cc,tL=Ch,tH=CJ,tS=CY;Cl(Cb,tl,t9,tC)||(tF=CV,tL=CU,tH=Cs,tS=CI);var\x20tb=0x4*(tl*l3*l3+t9*l3+tC),tc=Cb[\x27zWp\x27][tl*l3*l3+t9*l3+tC],th=0x1,tJ=0x1,tY=0x1,tV=0x1;tc!==lS||C8(Cb,tl,t9+0x1,tC)||(th=0.9,tJ=0.9,tY=0.9,tV=0.9);var\x20tU=CP[tb];if(0x0!==tU){for(var\x20ts=CP[tb+0x1],tI=CP[tb+0x2],tP=CP[tb+0x3],tR=0x1,tf=0x1,ti=tC+0x1;ti<l3;ti++){var\x20to=0x4*(tl*l3*l3+t9*l3+ti),tu=Cb[\x27zWp\x27][tl*l3*l3+t9*l3+ti];if(0x0===CP[to]||tc!==tu||tU!==CP[to]||ts!==CP[to+0x1]||tI!==CP[to+0x2]||tP!==CP[to+0x3])break;++tR;}for(var\x20tB=!0x0,tx=tl+0x1;tx<l3&&tB;tx++){tB=!0x0;for(var\x20tz=tC;tz<tC+tR;tz++){var\x20tX=0x4*(tx*l3*l3+t9*l3+tz),tM=Cb[\x27zWp\x27][tx*l3*l3+t9*l3+tz];if(0x0===CP[tX]||tc!==tM||tU!==CP[tX]||ts!==CP[tX+0x1]||tI!==CP[tX+0x2]||tP!==CP[tX+0x3]){tB=!0x1;break;}}tB&&++tf;}for(var\x20ta=tl;ta<tl+tf;ta++)for(var\x20tm=tC;tm<tC+tR;tm++)CP[0x4*(ta*l3*l3+t9*l3+tm)]=0x0;tF[\x27push\x27](0x1*(tw+0x1+(tf-0x1)),0x1*tg+th,0x1*(tv+0x1+(tR-0x1))),tF[\x27push\x27](0x1*tw,0x1*tg+tJ,0x1*(tv+0x1+(tR-0x1))),tF[\x27push\x27](0x1*tw,0x1*tg+tV,0x1*tv),tF[\x27push\x27](0x1*(tw+0x1+(tf-0x1)),0x1*tg+tY,0x1*tv),tH[\x27push\x27](tU,ts,tI,tP),tU+tI<ts+tP?(tL[\x27push\x27](tF[\x27length\x27]/0x3-0x3,tF[\x27length\x27]/0x3-0x4,tF[\x27length\x27]/0x3-0x1),tL[\x27push\x27](tF[\x27length\x27]/0x3-0x1,tF[\x27length\x27]/0x3-0x2,tF[\x27length\x27]/0x3-0x3)):(tL[\x27push\x27](tF[\x27length\x27]/0x3-0x4,tF[\x27length\x27]/0x3-0x1,tF[\x27length\x27]/0x3-0x2),tL[\x27push\x27](tF[\x27length\x27]/0x3-0x2,tF[\x27length\x27]/0x3-0x3,tF[\x27length\x27]/0x3-0x4));var\x20tE=C3[tc][\x27zWr\x27][\x27zWD\x27];tS[\x27push\x27](tE[\x27zWW\x27],tE[\x27zWz\x27],0x0,tR),tS[\x27push\x27](tE[\x27zWW\x27],tE[\x27zWz\x27],tf,tR),tS[\x27push\x27](tE[\x27zWW\x27],tE[\x27zWz\x27],tf,0x0),tS[\x27push\x27](tE[\x27zWW\x27],tE[\x27zWz\x27],0x0,0x0);}var\x20tN=CR[tb];if(0x0!==tN){for(var\x20tr=CR[tb+0x1],tD=CR[tb+0x2],tQ=CR[tb+0x3],td=0x1,tk=0x1,tn=tC+0x1;tn<l3;tn++){var\x20tj=0x4*(tl*l3*l3+t9*l3+tn),tp=Cb[\x27zWp\x27][tl*l3*l3+t9*l3+tn];if(0x0===CR[tj]||tc!==tp||tN!==CR[tj]||tr!==CR[tj+0x1]||tD!==CR[tj+0x2]||tQ!==CR[tj+0x3])break;++td;}for(var\x20tT=!0x0,tZ=tl+0x1;tZ<l3&&tT;tZ++){tT=!0x0;for(var\x20ty=tC;ty<tC+td;ty++){var\x20tG=0x4*(tZ*l3*l3+t9*l3+ty),tO=Cb[\x27zWp\x27][tZ*l3*l3+t9*l3+ty];if(0x0===CR[tG]||tc!==tO||tN!==CR[tG]||tr!==CR[tG+0x1]||tD!==CR[tG+0x2]||tQ!==CR[tG+0x3]){tT=!0x1;break;}}tT&&++tk;}for(var\x20tq=tl;tq<tl+tk;tq++)for(var\x20tA=tC;tA<tC+td;tA++)CR[0x4*(tq*l3*l3+t9*l3+tA)]=0x0;tF[\x27push\x27](0x1*(tw+0x1+(tk-0x1)),0x1*tg,0x1*tv),tF[\x27push\x27](0x1*tw,0x1*tg,0x1*tv),tF[\x27push\x27](0x1*tw,0x1*tg,0x1*(tv+0x1+(td-0x1))),tF[\x27push\x27](0x1*(tw+0x1+(tk-0x1)),0x1*tg,0x1*(tv+0x1+(td-0x1))),tH[\x27push\x27](tN,tr,tD,tQ),tN+tD<tr+tQ?(tL[\x27push\x27](tF[\x27length\x27]/0x3-0x3,tF[\x27length\x27]/0x3-0x4,tF[\x27length\x27]/0x3-0x1),tL[\x27push\x27](tF[\x27length\x27]/0x3-0x1,tF[\x27length\x27]/0x3-0x2,tF[\x27length\x27]/0x3-0x3)):(tL[\x27push\x27](tF[\x27length\x27]/0x3-0x4,tF[\x27length\x27]/0x3-0x1,tF[\x27length\x27]/0x3-0x2),tL[\x27push\x27](tF[\x27length\x27]/0x3-0x2,tF[\x27length\x27]/0x3-0x3,tF[\x27length\x27]/0x3-0x4));var\x20tK=C3[tc][\x27zWr\x27][\x27zWV\x27];tS[\x27push\x27](tK[\x27zWW\x27],tK[\x27zWz\x27],0x0,td),tS[\x27push\x27](tK[\x27zWW\x27],tK[\x27zWz\x27],tk,td),tS[\x27push\x27](tK[\x27zWW\x27],tK[\x27zWz\x27],tk,0x0),tS[\x27push\x27](tK[\x27zWW\x27],tK[\x27zWz\x27],0x0,0x0);}var\x20tW=Cf[tb];if(0x0!==tW){for(var\x20w0=Cf[tb+0x1],w1=Cf[tb+0x2],w2=Cf[tb+0x3],w3=0x1,w4=0x1,w5=tC+0x1;w5<l3;w5++){var\x20w6=0x4*(tl*l3*l3+t9*l3+w5),w7=Cb[\x27zWp\x27][tl*l3*l3+t9*l3+w5];if(0x0===Cf[w6]||tc!==w7||tW!==Cf[w6]||w0!==Cf[w6+0x1]||w1!==Cf[w6+0x2]||w2!==Cf[w6+0x3])break;++w3;}for(var\x20w8=!0x0,w9=t9+0x1;w9<l3&&w8;w9++){w8=!0x0;for(var\x20wl=tC;wl<tC+w3;wl++){var\x20wC=0x4*(tl*l3*l3+w9*l3+wl),ww=Cb[\x27zWp\x27][tl*l3*l3+w9*l3+wl];if(0x0===Cf[wC]||tc!==ww||tW!==Cf[wC]||w0!==Cf[wC+0x1]||w1!==Cf[wC+0x2]||w2!==Cf[wC+0x3]){w8=!0x1;break;}}w8&&++w4;}for(var\x20wg=t9;wg<t9+w4;wg++)for(var\x20wv=tC;wv<tC+w3;wv++)Cf[0x4*(tl*l3*l3+wg*l3+wv)]=0x0;tF[\x27push\x27](0x1*(tw+0x1),0x1*(tg+(w4-0x1))+th,0x1*(tv+0x1+(w3-0x1))),tF[\x27push\x27](0x1*(tw+0x1),0x1*(tg+(w4-0x1))+tY,0x1*tv),tF[\x27push\x27](0x1*(tw+0x1),0x1*tg,0x1*tv),tF[\x27push\x27](0x1*(tw+0x1),0x1*tg,0x1*(tv+0x1+(w3-0x1))),tH[\x27push\x27](tW,w0,w1,w2),tW+w1<w0+w2?(tL[\x27push\x27](tF[\x27length\x27]/0x3-0x3,tF[\x27length\x27]/0x3-0x4,tF[\x27length\x27]/0x3-0x1),tL[\x27push\x27](tF[\x27length\x27]/0x3-0x1,tF[\x27length\x27]/0x3-0x2,tF[\x27length\x27]/0x3-0x3)):(tL[\x27push\x27](tF[\x27length\x27]/0x3-0x4,tF[\x27length\x27]/0x3-0x1,tF[\x27length\x27]/0x3-0x2),tL[\x27push\x27](tF[\x27length\x27]/0x3-0x2,tF[\x27length\x27]/0x3-0x3,tF[\x27length\x27]/0x3-0x4));var\x20wF=C3[tc][\x27zWr\x27][\x27zWj\x27];tS[\x27push\x27](wF[\x27zWW\x27],wF[\x27zWz\x27],0x0,w4),tS[\x27push\x27](wF[\x27zWW\x27],wF[\x27zWz\x27],w3,w4),tS[\x27push\x27](wF[\x27zWW\x27],wF[\x27zWz\x27],w3,0x0),tS[\x27push\x27](wF[\x27zWW\x27],wF[\x27zWz\x27],0x0,0x0);}var\x20wL=Ci[tb];if(0x0!==wL){for(var\x20wH=Ci[tb+0x1],wS=Ci[tb+0x2],wb=Ci[tb+0x3],wc=0x1,wh=0x1,wJ=tC+0x1;wJ<l3;wJ++){var\x20wY=0x4*(tl*l3*l3+t9*l3+wJ),wV=Cb[\x27zWp\x27][tl*l3*l3+t9*l3+wJ];if(0x0===Ci[wY]||tc!==wV||wL!==Ci[wY]||wH!==Ci[wY+0x1]||wS!==Ci[wY+0x2]||wb!==Ci[wY+0x3])break;++wc;}for(var\x20wU=!0x0,ws=t9+0x1;ws<l3&&wU;ws++){wU=!0x0;for(var\x20wI=tC;wI<tC+wc;wI++){var\x20wP=0x4*(tl*l3*l3+ws*l3+wI),wR=Cb[\x27zWp\x27][tl*l3*l3+ws*l3+wI];if(0x0===Ci[wP]||tc!==wR||wL!==Ci[wP]||wH!==Ci[wP+0x1]||wS!==Ci[wP+0x2]||wb!==Ci[wP+0x3]){wU=!0x1;break;}}wU&&++wh;}for(var\x20wf=t9;wf<t9+wh;wf++)for(var\x20wi=tC;wi<tC+wc;wi++)Ci[0x4*(tl*l3*l3+wf*l3+wi)]=0x0;tF[\x27push\x27](0x1*tw,0x1*(tg+(wh-0x1))+tV,0x1*tv),tF[\x27push\x27](0x1*tw,0x1*(tg+(wh-0x1))+tJ,0x1*(tv+0x1+(wc-0x1))),tF[\x27push\x27](0x1*tw,0x1*tg,0x1*(tv+0x1+(wc-0x1))),tF[\x27push\x27](0x1*tw,0x1*tg,0x1*tv),tH[\x27push\x27](wL,wH,wS,wb),wL+wS<wH+wb?(tL[\x27push\x27](tF[\x27length\x27]/0x3-0x3,tF[\x27length\x27]/0x3-0x4,tF[\x27length\x27]/0x3-0x1),tL[\x27push\x27](tF[\x27length\x27]/0x3-0x1,tF[\x27length\x27]/0x3-0x2,tF[\x27length\x27]/0x3-0x3)):(tL[\x27push\x27](tF[\x27length\x27]/0x3-0x4,tF[\x27length\x27]/0x3-0x1,tF[\x27length\x27]/0x3-0x2),tL[\x27push\x27](tF[\x27length\x27]/0x3-0x2,tF[\x27length\x27]/0x3-0x3,tF[\x27length\x27]/0x3-0x4));var\x20wo=C3[tc][\x27zWr\x27][\x27zWK\x27];tS[\x27push\x27](wo[\x27zWW\x27],wo[\x27zWz\x27],0x0,wh),tS[\x27push\x27](wo[\x27zWW\x27],wo[\x27zWz\x27],wc,wh),tS[\x27push\x27](wo[\x27zWW\x27],wo[\x27zWz\x27],wc,0x0),tS[\x27push\x27](wo[\x27zWW\x27],wo[\x27zWz\x27],0x0,0x0);}var\x20wu=Co[tb];if(0x0!==wu){for(var\x20wB=Co[tb+0x1],wx=Co[tb+0x2],wz=Co[tb+0x3],wX=0x1,wM=0x1,wa=tl+0x1;wa<l3;wa++){var\x20wm=0x4*(wa*l3*l3+t9*l3+tC),wE=Cb[\x27zWp\x27][wa*l3*l3+t9*l3+tC];if(0x0===Co[wm]||tc!==wE||wu!==Co[wm]||wB!==Co[wm+0x1]||wx!==Co[wm+0x2]||wz!==Co[wm+0x3])break;++wX;}for(var\x20we=!0x0,wN=t9+0x1;wN<l3&&we;wN++){we=!0x0;for(var\x20wr=tl;wr<tl+wX;wr++){var\x20wD=0x4*(wr*l3*l3+wN*l3+tC),wQ=Cb[\x27zWp\x27][wr*l3*l3+wN*l3+tC];if(0x0===Co[wD]||tc!==wQ||wu!==Co[wD]||wB!==Co[wD+0x1]||wx!==Co[wD+0x2]||wz!==Co[wD+0x3]){we=!0x1;break;}}we&&++wM;}for(var\x20wd=t9;wd<t9+wM;wd++)for(var\x20wk=tl;wk<tl+wX;wk++)Co[0x4*(wk*l3*l3+wd*l3+tC)]=0x0;tF[\x27push\x27](0x1*tw,0x1*(tg+(wM-0x1))+tJ,0x1*(tv+0x1)),tF[\x27push\x27](0x1*(tw+0x1+(wX-0x1)),0x1*(tg+(wM-0x1))+th,0x1*(tv+0x1)),tF[\x27push\x27](0x1*(tw+0x1+(wX-0x1)),0x1*tg,0x1*(tv+0x1)),tF[\x27push\x27](0x1*tw,0x1*tg,0x1*(tv+0x1)),tH[\x27push\x27](wu,wB,wx,wz),wu+wx<wB+wz?(tL[\x27push\x27](tF[\x27length\x27]/0x3-0x3,tF[\x27length\x27]/0x3-0x4,tF[\x27length\x27]/0x3-0x1),tL[\x27push\x27](tF[\x27length\x27]/0x3-0x1,tF[\x27length\x27]/0x3-0x2,tF[\x27length\x27]/0x3-0x3)):(tL[\x27push\x27](tF[\x27length\x27]/0x3-0x4,tF[\x27length\x27]/0x3-0x1,tF[\x27length\x27]/0x3-0x2),tL[\x27push\x27](tF[\x27length\x27]/0x3-0x2,tF[\x27length\x27]/0x3-0x3,tF[\x27length\x27]/0x3-0x4));var\x20wn=C3[tc][\x27zWr\x27][\x27zWo\x27];tS[\x27push\x27](wn[\x27zWW\x27],wn[\x27zWz\x27],0x0,wM),tS[\x27push\x27](wn[\x27zWW\x27],wn[\x27zWz\x27],wX,wM),tS[\x27push\x27](wn[\x27zWW\x27],wn[\x27zWz\x27],wX,0x0),tS[\x27push\x27](wn[\x27zWW\x27],wn[\x27zWz\x27],0x0,0x0);}var\x20wj=Cu[tb];if(0x0!==wj){for(var\x20wp=Cu[tb+0x1],wT=Cu[tb+0x2],wZ=Cu[tb+0x3],wy=0x1,wG=0x1,wO=tl+0x1;wO<l3;wO++){var\x20wq=0x4*(wO*l3*l3+t9*l3+tC),wA=Cb[\x27zWp\x27][wO*l3*l3+t9*l3+tC];if(0x0===Cu[wq]||tc!==wA||wj!==Cu[wq]||wp!==Cu[wq+0x1]||wT!==Cu[wq+0x2]||wZ!==Cu[wq+0x3])break;++wy;}for(var\x20wK=!0x0,wW=t9+0x1;wW<l3&&wK;wW++){wK=!0x0;for(var\x20g0=tl;g0<tl+wy;g0++){var\x20g1=0x4*(g0*l3*l3+wW*l3+tC),g2=Cb[\x27zWp\x27][g0*l3*l3+wW*l3+tC];if(0x0===Cu[g1]||tc!==g2||wj!==Cu[g1]||wp!==Cu[g1+0x1]||wT!==Cu[g1+0x2]||wZ!==Cu[g1+0x3]){wK=!0x1;break;}}wK&&++wG;}for(var\x20g3=t9;g3<t9+wG;g3++)for(var\x20g4=tl;g4<tl+wy;g4++)Cu[0x4*(g4*l3*l3+g3*l3+tC)]=0x0;tF[\x27push\x27](0x1*(tw+0x1+(wy-0x1)),0x1*(tg+(wG-0x1))+tY,0x1*tv),tF[\x27push\x27](0x1*tw,0x1*(tg+(wG-0x1))+tV,0x1*tv),tF[\x27push\x27](0x1*tw,0x1*tg,0x1*tv),tF[\x27push\x27](0x1*(tw+0x1+(wy-0x1)),0x1*tg,0x1*tv),tH[\x27push\x27](wj,wp,wT,wZ),wj+wT<wp+wZ?(tL[\x27push\x27](tF[\x27length\x27]/0x3-0x3,tF[\x27length\x27]/0x3-0x4,tF[\x27length\x27]/0x3-0x1),tL[\x27push\x27](tF[\x27length\x27]/0x3-0x1,tF[\x27length\x27]/0x3-0x2,tF[\x27length\x27]/0x3-0x3)):(tL[\x27push\x27](tF[\x27length\x27]/0x3-0x4,tF[\x27length\x27]/0x3-0x1,tF[\x27length\x27]/0x3-0x2),tL[\x27push\x27](tF[\x27length\x27]/0x3-0x2,tF[\x27length\x27]/0x3-0x3,tF[\x27length\x27]/0x3-0x4));var\x20g5=C3[tc][\x27zWr\x27][\x27zWu\x27];tS[\x27push\x27](g5[\x27zWW\x27],g5[\x27zWz\x27],0x0,wG),tS[\x27push\x27](g5[\x27zWW\x27],g5[\x27zWz\x27],wy,wG),tS[\x27push\x27](g5[\x27zWW\x27],g5[\x27zWz\x27],wy,0x0),tS[\x27push\x27](g5[\x27zWW\x27],g5[\x27zWz\x27],0x0,0x0);}}return\x20function(g6){for(var\x20g7=Object[\x27entries\x27](g6),g8=g7[\x27length\x27]-0x1;g8>0x0;g8--){var\x20g9=Math[\x27floor\x27](Math[\x27random\x27]()*(g8+0x1)),gl=[g7[g9],g7[g8]];g7[g8]=gl[0x0],g7[g9]=gl[0x1];}return\x20Object[\x27fromEntries\x27](g7);}({\x27zWJ\x27:Cb[\x27zWJ\x27],\x27zWE\x27:new\x20Float32Array(Cc),\x27zWS\x27:new\x20Uint16Array(Ch),\x27zWh\x27:new\x20Uint8Array(CJ),\x27zWe\x27:new\x20Uint8Array(CY),\x27zWM\x27:new\x20Float32Array(CV),\x27zWN\x27:new\x20Uint16Array(CU),\x27zWd\x27:new\x20Uint8Array(Cs),\x27zWq\x27:new\x20Uint8Array(CI),\x27zWw\x27:Cb[\x27zWw\x27]});};!function(Cb){Cb[\x27CHUNK_MESH_DATA\x27]=\x27CHUNK_MESH_DATA\x27,Cb[\x27BLOCKS_MESH_DATA\x27]=\x27BLOCKS_MESH_DATA\x27;}(l1||(l1={}));var\x20Ct,Cw=l1;!function(Cb){Cb[\x27CHUNK_MESH\x27]=\x27CHUNK_MESH\x27,Cb[\x27BLOCKS_MESH\x27]=\x27BLOCKS_MESH\x27;}(Ct||(Ct={}));var\x20Cg=Ct,Cv=function(Cb,Cc,Ch){return\x20Cb+\x27:\x27+Cc+\x27:\x27+Ch;},CF=function(Cb,Cc,Ch,CJ){var\x20CY=Cb[\x27zWp\x27][Cv(Cc,Ch,CJ)];return\x20void\x200x0===CY?l5:CY;},CL=function(Cb,Cc,Ch,CJ){return\x20CF(Cb,Cc,Ch,CJ)!==l5;},CH=function(Cb,Cc,Ch,CJ){return\x20void\x200x0!==Cb[\x27zWp\x27][Cv(Cc,Ch,CJ)];},CS=function(Cb){var\x20Cc=[],Ch=[],CJ=[],CY=[],CV=[Cb[\x27zWa\x27]],CU=new\x20Set();for(CU[\x27add\x27](Cv(Cb[\x27zWa\x27][\x27zWW\x27],Cb[\x27zWa\x27][\x27zWz\x27],Cb[\x27zWa\x27][\x27zWH\x27]));CV[\x27length\x27]>0x0;){var\x20Cs=CV[\x27pop\x27](),CI=Cs[\x27zWW\x27],CP=Cs[\x27zWz\x27],CR=Cs[\x27zWH\x27],Cf=CI-Cb[\x27zWa\x27][\x27zWW\x27],Ci=CP-Cb[\x27zWa\x27][\x27zWz\x27],Co=CR-Cb[\x27zWa\x27][\x27zWH\x27],Cu=CL(Cb,CI,CP,CR),CB=Cv(CI,CP+0x1,CR);if(Cu&&!CL(Cb,CI,CP+0x1,CR)){Cc[\x27push\x27]((Cf+0.5)*l4,(Ci+0.5)*l4,(Co+0.5)*l4),Cc[\x27push\x27]((Cf-0.5)*l4,(Ci+0.5)*l4,(Co+0.5)*l4),Cc[\x27push\x27]((Cf-0.5)*l4,(Ci+0.5)*l4,(Co-0.5)*l4),Cc[\x27push\x27]((Cf+0.5)*l4,(Ci+0.5)*l4,(Co-0.5)*l4);var\x20Cx=C5(CL(Cb,CI+0x1,CP+0x1,CR),CL(Cb,CI,CP+0x1,CR+0x1),CL(Cb,CI+0x1,CP+0x1,CR+0x1)),Cz=C5(CL(Cb,CI,CP+0x1,CR+0x1),CL(Cb,CI-0x1,CP+0x1,CR),CL(Cb,CI-0x1,CP+0x1,CR+0x1)),CX=C5(CL(Cb,CI-0x1,CP+0x1,CR),CL(Cb,CI,CP+0x1,CR-0x1),CL(Cb,CI-0x1,CP+0x1,CR-0x1)),CM=C5(CL(Cb,CI,CP+0x1,CR-0x1),CL(Cb,CI+0x1,CP+0x1,CR),CL(Cb,CI+0x1,CP+0x1,CR-0x1));CJ[\x27push\x27](Cx),CJ[\x27push\x27](Cz),CJ[\x27push\x27](CX),CJ[\x27push\x27](CM),Cx+CX<Cz+CM?(Ch[\x27push\x27](Cc[\x27length\x27]/0x3-0x3,Cc[\x27length\x27]/0x3-0x4,Cc[\x27length\x27]/0x3-0x1),Ch[\x27push\x27](Cc[\x27length\x27]/0x3-0x1,Cc[\x27length\x27]/0x3-0x2,Cc[\x27length\x27]/0x3-0x3)):(Ch[\x27push\x27](Cc[\x27length\x27]/0x3-0x4,Cc[\x27length\x27]/0x3-0x1,Cc[\x27length\x27]/0x3-0x2),Ch[\x27push\x27](Cc[\x27length\x27]/0x3-0x2,Cc[\x27length\x27]/0x3-0x3,Cc[\x27length\x27]/0x3-0x4));var\x20Ca=C3[CF(Cb,CI,CP,CR)][\x27zWr\x27][\x27zWD\x27];CY[\x27push\x27](Ca[\x27zWW\x27],Ca[\x27zWz\x27],0x0,0x1),CY[\x27push\x27](Ca[\x27zWW\x27],Ca[\x27zWz\x27],0x1,0x1),CY[\x27push\x27](Ca[\x27zWW\x27],Ca[\x27zWz\x27],0x1,0x0),CY[\x27push\x27](Ca[\x27zWW\x27],Ca[\x27zWz\x27],0x0,0x0);}else\x20CH(Cb,CI,CP+0x1,CR)&&!CU[\x27has\x27](CB)&&(CV[\x27push\x27](l2(CI,CP+0x1,CR)),CU[\x27add\x27](CB));var\x20Cm=Cv(CI,CP-0x1,CR);if(Cu&&!CL(Cb,CI,CP-0x1,CR)){Cc[\x27push\x27]((Cf+0.5)*l4,(Ci-0.5)*l4,(Co-0.5)*l4),Cc[\x27push\x27]((Cf-0.5)*l4,(Ci-0.5)*l4,(Co-0.5)*l4),Cc[\x27push\x27]((Cf-0.5)*l4,(Ci-0.5)*l4,(Co+0.5)*l4),Cc[\x27push\x27]((Cf+0.5)*l4,(Ci-0.5)*l4,(Co+0.5)*l4);var\x20CE=C5(CL(Cb,CI+0x1,CP-0x1,CR),CL(Cb,CI,CP-0x1,CR-0x1),CL(Cb,CI+0x1,CP-0x1,CR-0x1)),Ce=C5(CL(Cb,CI,CP-0x1,CR-0x1),CL(Cb,CI-0x1,CP-0x1,CR),CL(Cb,CI-0x1,CP-0x1,CR-0x1)),CN=C5(CL(Cb,CI-0x1,CP-0x1,CR),CL(Cb,CI,CP-0x1,CR+0x1),CL(Cb,CI-0x1,CP-0x1,CR+0x1)),Cr=C5(CL(Cb,CI,CP-0x1,CR+0x1),CL(Cb,CI+0x1,CP-0x1,CR),CL(Cb,CI+0x1,CP-0x1,CR+0x1));CJ[\x27push\x27](CE),CJ[\x27push\x27](Ce),CJ[\x27push\x27](CN),CJ[\x27push\x27](Cr),CE+CN<Ce+Cr?(Ch[\x27push\x27](Cc[\x27length\x27]/0x3-0x3,Cc[\x27length\x27]/0x3-0x4,Cc[\x27length\x27]/0x3-0x1),Ch[\x27push\x27](Cc[\x27length\x27]/0x3-0x1,Cc[\x27length\x27]/0x3-0x2,Cc[\x27length\x27]/0x3-0x3)):(Ch[\x27push\x27](Cc[\x27length\x27]/0x3-0x4,Cc[\x27length\x27]/0x3-0x1,Cc[\x27length\x27]/0x3-0x2),Ch[\x27push\x27](Cc[\x27length\x27]/0x3-0x2,Cc[\x27length\x27]/0x3-0x3,Cc[\x27length\x27]/0x3-0x4));var\x20CD=C3[CF(Cb,CI,CP,CR)][\x27zWr\x27][\x27zWV\x27];CY[\x27push\x27](CD[\x27zWW\x27],CD[\x27zWz\x27],0x0,0x1),CY[\x27push\x27](CD[\x27zWW\x27],CD[\x27zWz\x27],0x1,0x1),CY[\x27push\x27](CD[\x27zWW\x27],CD[\x27zWz\x27],0x1,0x0),CY[\x27push\x27](CD[\x27zWW\x27],CD[\x27zWz\x27],0x0,0x0);}else\x20CH(Cb,CI,CP-0x1,CR)&&!CU[\x27has\x27](Cm)&&(CV[\x27push\x27](l2(CI,CP-0x1,CR)),CU[\x27add\x27](Cm));var\x20CQ=Cv(CI+0x1,CP,CR);if(Cu&&!CL(Cb,CI+0x1,CP,CR)){Cc[\x27push\x27]((Cf+0.5)*l4,(Ci+0.5)*l4,(Co+0.5)*l4),Cc[\x27push\x27]((Cf+0.5)*l4,(Ci+0.5)*l4,(Co-0.5)*l4),Cc[\x27push\x27]((Cf+0.5)*l4,(Ci-0.5)*l4,(Co-0.5)*l4),Cc[\x27push\x27]((Cf+0.5)*l4,(Ci-0.5)*l4,(Co+0.5)*l4);var\x20Cd=C5(CL(Cb,CI+0x1,CP,CR+0x1),CL(Cb,CI+0x1,CP+0x1,CR),CL(Cb,CI+0x1,CP+0x1,CR+0x1)),Ck=C5(CL(Cb,CI+0x1,CP+0x1,CR),CL(Cb,CI+0x1,CP,CR-0x1),CL(Cb,CI+0x1,CP+0x1,CR-0x1)),Cn=C5(CL(Cb,CI+0x1,CP,CR-0x1),CL(Cb,CI+0x1,CP-0x1,CR),CL(Cb,CI+0x1,CP-0x1,CR-0x1)),Cj=C5(CL(Cb,CI+0x1,CP-0x1,CR),CL(Cb,CI+0x1,CP,CR+0x1),CL(Cb,CI+0x1,CP-0x1,CR+0x1));CJ[\x27push\x27](Cd),CJ[\x27push\x27](Ck),CJ[\x27push\x27](Cn),CJ[\x27push\x27](Cj),Cd+Cn<Ck+Cj?(Ch[\x27push\x27](Cc[\x27length\x27]/0x3-0x3,Cc[\x27length\x27]/0x3-0x4,Cc[\x27length\x27]/0x3-0x1),Ch[\x27push\x27](Cc[\x27length\x27]/0x3-0x1,Cc[\x27length\x27]/0x3-0x2,Cc[\x27length\x27]/0x3-0x3)):(Ch[\x27push\x27](Cc[\x27length\x27]/0x3-0x4,Cc[\x27length\x27]/0x3-0x1,Cc[\x27length\x27]/0x3-0x2),Ch[\x27push\x27](Cc[\x27length\x27]/0x3-0x2,Cc[\x27length\x27]/0x3-0x3,Cc[\x27length\x27]/0x3-0x4));var\x20Cp=C3[CF(Cb,CI,CP,CR)][\x27zWr\x27][\x27zWj\x27];CY[\x27push\x27](Cp[\x27zWW\x27],Cp[\x27zWz\x27],0x0,0x1),CY[\x27push\x27](Cp[\x27zWW\x27],Cp[\x27zWz\x27],0x1,0x1),CY[\x27push\x27](Cp[\x27zWW\x27],Cp[\x27zWz\x27],0x1,0x0),CY[\x27push\x27](Cp[\x27zWW\x27],Cp[\x27zWz\x27],0x0,0x0);}else\x20CH(Cb,CI+0x1,CP,CR)&&!CU[\x27has\x27](CQ)&&(CV[\x27push\x27](l2(CI+0x1,CP,CR)),CU[\x27add\x27](CQ));var\x20CT=Cv(CI-0x1,CP,CR);if(Cu&&!CL(Cb,CI-0x1,CP,CR)){Cc[\x27push\x27]((Cf-0.5)*l4,(Ci+0.5)*l4,(Co-0.5)*l4),Cc[\x27push\x27]((Cf-0.5)*l4,(Ci+0.5)*l4,(Co+0.5)*l4),Cc[\x27push\x27]((Cf-0.5)*l4,(Ci-0.5)*l4,(Co+0.5)*l4),Cc[\x27push\x27]((Cf-0.5)*l4,(Ci-0.5)*l4,(Co-0.5)*l4);var\x20CZ=C5(CL(Cb,CI-0x1,CP,CR-0x1),CL(Cb,CI-0x1,CP+0x1,CR),CL(Cb,CI-0x1,CP+0x1,CR-0x1)),Cy=C5(CL(Cb,CI-0x1,CP+0x1,CR),CL(Cb,CI-0x1,CP,CR+0x1),CL(Cb,CI-0x1,CP+0x1,CR+0x1)),CG=C5(CL(Cb,CI-0x1,CP,CR+0x1),CL(Cb,CI-0x1,CP-0x1,CR),CL(Cb,CI-0x1,CP-0x1,CR+0x1)),CO=C5(CL(Cb,CI-0x1,CP-0x1,CR),CL(Cb,CI-0x1,CP,CR-0x1),CL(Cb,CI-0x1,CP-0x1,CR-0x1));CJ[\x27push\x27](CZ),CJ[\x27push\x27](Cy),CJ[\x27push\x27](CG),CJ[\x27push\x27](CO),CZ+CG<Cy+CO?(Ch[\x27push\x27](Cc[\x27length\x27]/0x3-0x3,Cc[\x27length\x27]/0x3-0x4,Cc[\x27length\x27]/0x3-0x1),Ch[\x27push\x27](Cc[\x27length\x27]/0x3-0x1,Cc[\x27length\x27]/0x3-0x2,Cc[\x27length\x27]/0x3-0x3)):(Ch[\x27push\x27](Cc[\x27length\x27]/0x3-0x4,Cc[\x27length\x27]/0x3-0x1,Cc[\x27length\x27]/0x3-0x2),Ch[\x27push\x27](Cc[\x27length\x27]/0x3-0x2,Cc[\x27length\x27]/0x3-0x3,Cc[\x27length\x27]/0x3-0x4));var\x20Cq=C3[CF(Cb,CI,CP,CR)][\x27zWr\x27][\x27zWK\x27];CY[\x27push\x27](Cq[\x27zWW\x27],Cq[\x27zWz\x27],0x0,0x1),CY[\x27push\x27](Cq[\x27zWW\x27],Cq[\x27zWz\x27],0x1,0x1),CY[\x27push\x27](Cq[\x27zWW\x27],Cq[\x27zWz\x27],0x1,0x0),CY[\x27push\x27](Cq[\x27zWW\x27],Cq[\x27zWz\x27],0x0,0x0);}else\x20CH(Cb,CI-0x1,CP,CR)&&!CU[\x27has\x27](CT)&&(CV[\x27push\x27](l2(CI-0x1,CP,CR)),CU[\x27add\x27](CT));var\x20CA=Cv(CI,CP,CR+0x1);if(Cu&&!CL(Cb,CI,CP,CR+0x1)){Cc[\x27push\x27]((Cf-0.5)*l4,(Ci+0.5)*l4,(Co+0.5)*l4),Cc[\x27push\x27]((Cf+0.5)*l4,(Ci+0.5)*l4,(Co+0.5)*l4),Cc[\x27push\x27]((Cf+0.5)*l4,(Ci-0.5)*l4,(Co+0.5)*l4),Cc[\x27push\x27]((Cf-0.5)*l4,(Ci-0.5)*l4,(Co+0.5)*l4);var\x20CK=C5(CL(Cb,CI-0x1,CP,CR+0x1),CL(Cb,CI,CP+0x1,CR+0x1),CL(Cb,CI-0x1,CP+0x1,CR+0x1)),CW=C5(CL(Cb,CI,CP+0x1,CR+0x1),CL(Cb,CI+0x1,CP,CR+0x1),CL(Cb,CI+0x1,CP+0x1,CR+0x1)),t0=C5(CL(Cb,CI+0x1,CP,CR+0x1),CL(Cb,CI,CP-0x1,CR+0x1),CL(Cb,CI+0x1,CP-0x1,CR+0x1)),t1=C5(CL(Cb,CI,CP-0x1,CR+0x1),CL(Cb,CI-0x1,CP,CR+0x1),CL(Cb,CI-0x1,CP-0x1,CR+0x1));CJ[\x27push\x27](CK),CJ[\x27push\x27](CW),CJ[\x27push\x27](t0),CJ[\x27push\x27](t1),CK+t0<CW+t1?(Ch[\x27push\x27](Cc[\x27length\x27]/0x3-0x3,Cc[\x27length\x27]/0x3-0x4,Cc[\x27length\x27]/0x3-0x1),Ch[\x27push\x27](Cc[\x27length\x27]/0x3-0x1,Cc[\x27length\x27]/0x3-0x2,Cc[\x27length\x27]/0x3-0x3)):(Ch[\x27push\x27](Cc[\x27length\x27]/0x3-0x4,Cc[\x27length\x27]/0x3-0x1,Cc[\x27length\x27]/0x3-0x2),Ch[\x27push\x27](Cc[\x27length\x27]/0x3-0x2,Cc[\x27length\x27]/0x3-0x3,Cc[\x27length\x27]/0x3-0x4));var\x20t2=C3[CF(Cb,CI,CP,CR)][\x27zWr\x27][\x27zWo\x27];CY[\x27push\x27](t2[\x27zWW\x27],t2[\x27zWz\x27],0x0,0x1),CY[\x27push\x27](t2[\x27zWW\x27],t2[\x27zWz\x27],0x1,0x1),CY[\x27push\x27](t2[\x27zWW\x27],t2[\x27zWz\x27],0x1,0x0),CY[\x27push\x27](t2[\x27zWW\x27],t2[\x27zWz\x27],0x0,0x0);}else\x20CH(Cb,CI,CP,CR+0x1)&&!CU[\x27has\x27](CA)&&(CV[\x27push\x27](l2(CI,CP,CR+0x1)),CU[\x27add\x27](CA));var\x20t3=Cv(CI,CP,CR-0x1);if(Cu&&!CL(Cb,CI,CP,CR-0x1)){Cc[\x27push\x27]((Cf+0.5)*l4,(Ci+0.5)*l4,(Co-0.5)*l4),Cc[\x27push\x27]((Cf-0.5)*l4,(Ci+0.5)*l4,(Co-0.5)*l4),Cc[\x27push\x27]((Cf-0.5)*l4,(Ci-0.5)*l4,(Co-0.5)*l4),Cc[\x27push\x27]((Cf+0.5)*l4,(Ci-0.5)*l4,(Co-0.5)*l4);var\x20t4=C5(CL(Cb,CI+0x1,CP,CR-0x1),CL(Cb,CI,CP+0x1,CR-0x1),CL(Cb,CI+0x1,CP+0x1,CR-0x1)),t5=C5(CL(Cb,CI,CP+0x1,CR-0x1),CL(Cb,CI-0x1,CP,CR-0x1),CL(Cb,CI-0x1,CP+0x1,CR-0x1)),t6=C5(CL(Cb,CI-0x1,CP,CR-0x1),CL(Cb,CI,CP-0x1,CR-0x1),CL(Cb,CI-0x1,CP-0x1,CR-0x1)),t7=C5(CL(Cb,CI,CP-0x1,CR-0x1),CL(Cb,CI+0x1,CP,CR-0x1),CL(Cb,CI+0x1,CP-0x1,CR-0x1));CJ[\x27push\x27](t4),CJ[\x27push\x27](t5),CJ[\x27push\x27](t6),CJ[\x27push\x27](t7),t4+t6<t5+t7?(Ch[\x27push\x27](Cc[\x27length\x27]/0x3-0x3,Cc[\x27length\x27]/0x3-0x4,Cc[\x27length\x27]/0x3-0x1),Ch[\x27push\x27](Cc[\x27length\x27]/0x3-0x1,Cc[\x27length\x27]/0x3-0x2,Cc[\x27length\x27]/0x3-0x3)):(Ch[\x27push\x27](Cc[\x27length\x27]/0x3-0x4,Cc[\x27length\x27]/0x3-0x1,Cc[\x27length\x27]/0x3-0x2),Ch[\x27push\x27](Cc[\x27length\x27]/0x3-0x2,Cc[\x27length\x27]/0x3-0x3,Cc[\x27length\x27]/0x3-0x4));var\x20t8=C3[CF(Cb,CI,CP,CR)][\x27zWr\x27][\x27zWu\x27];CY[\x27push\x27](t8[\x27zWW\x27],t8[\x27zWz\x27],0x0,0x1),CY[\x27push\x27](t8[\x27zWW\x27],t8[\x27zWz\x27],0x1,0x1),CY[\x27push\x27](t8[\x27zWW\x27],t8[\x27zWz\x27],0x1,0x0),CY[\x27push\x27](t8[\x27zWW\x27],t8[\x27zWz\x27],0x0,0x0);}else\x20CH(Cb,CI,CP,CR-0x1)&&!CU[\x27has\x27](t3)&&(CV[\x27push\x27](l2(CI,CP,CR-0x1)),CU[\x27add\x27](t3));}return{\x27zWZ\x27:l2((Cb[\x27zWa\x27][\x27zWW\x27]+0.5)*l4,(Cb[\x27zWa\x27][\x27zWz\x27]+0.5)*l4,(Cb[\x27zWa\x27][\x27zWH\x27]+0.5)*l4),\x27zWR\x27:Cc,\x27zzW\x27:Ch,\x27zzz\x27:CJ,\x27zzH\x27:CY};};onmessage=function(Cb){switch(Cb[\x27data\x27][\x27zzT\x27]){case\x20Cg[\x27CHUNK_MESH\x27]:const\x20Cc=CC(Cb[\x27data\x27]);postMessage({\x27event\x27:Cw[\x27CHUNK_MESH_DATA\x27],\x27data\x27:Cc},[Cc[\x27zWE\x27][\x27buffer\x27],Cc[\x27zWS\x27][\x27buffer\x27],Cc[\x27zWh\x27][\x27buffer\x27],Cc[\x27zWe\x27][\x27buffer\x27],Cc[\x27zWM\x27][\x27buffer\x27],Cc[\x27zWN\x27][\x27buffer\x27],Cc[\x27zWd\x27][\x27buffer\x27],Cc[\x27zWq\x27][\x27buffer\x27]]);break;case\x20Cg[\x27BLOCKS_MESH\x27]:postMessage({\x27event\x27:Cw[\x27BLOCKS_MESH_DATA\x27],\x27data\x27:CS(Cb[\x27data\x27])});}};}());', 'Worker', void 0x0, l2['p'] + './package/ddc6153092b8d5f0861c.worker.js');
        }
        !function(gm) {
            gm['CHUNK_MESH'] = 'CHUNK_MESH',
            gm['BLOCKS_MESH'] = 'BLOCKS_MESH';
        }(l3 || (l3 = {}));
        var lB, lx = l3;
        !function(gm) {
            gm['CHUNK_MESH_DATA'] = 'CHUNK_MESH_DATA',
            gm['BLOCKS_MESH_DATA'] = 'BLOCKS_MESH_DATA';
        }(lB || (lB = {}));
        var lz = lB
          , lX = l2(0xe8cc)
          , lM = (function() {
            function gm(gN, gr) {
                var gD = this;
                this['zbB'] = gN,
                this['zbA'] = gr,
                this['zbk'] = [],
                this['zbs'] = [],
                this['zbv'] = 0x0;
                var gQ = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20sampler2D\x20map;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20float\x20vAo;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec4\x20vRealUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20atlasDim\x20=\x20' + l8['Z']['zLs']['toFixed'](0x1) + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20diffuseColor\x20=\x20vec4(1.0,\x201.0,\x201.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20diffuseColor\x20*=\x20vec4(vec3(1.0,\x201.0,\x201.0)\x20*\x20vAo,\x201.0);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20tilePosX\x20=\x20max(0.01,\x20min(0.99,\x20fract(vRealUv.z)));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20tilePosY\x20=\x20max(0.01,\x20min(0.99,\x20fract(vRealUv.w)));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20uv\x20=\x20vec2(vRealUv.x\x20*\x20(1.0\x20/\x20atlasDim)\x20+\x20tilePosX\x20*\x20(1.0\x20/\x20atlasDim),\x20vRealUv.y\x20*\x20(1.0\x20/\x20atlasDim)\x20+\x20tilePosY\x20*\x20(1.0\x20/\x20atlasDim));\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20diffuseColor\x20*=\x20texture2D(map,\x20uv);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20diffuseColor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20'
                  , gd = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20sampler2D\x20map;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20time;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20float\x20vAo;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec4\x20vRealUv;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20atlasDim\x20=\x20' + l8['Z']['zLs']['toFixed'](0x1) + ';\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20diffuseColor\x20=\x20vec4(1.0,\x201.0,\x201.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20diffuseColor\x20*=\x20vec4(vec3(1.0,\x201.0,\x201.0)\x20*\x20vAo,\x201.0);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20xOffset\x20=\x20mod(floor(time\x20/\x20300.0),\x20atlasDim);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20tilePosX\x20=\x20max(0.01,\x20min(0.99,\x20fract(vRealUv.z)));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20tilePosY\x20=\x20max(0.01,\x20min(0.99,\x20fract(vRealUv.w)));\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20uv\x20=\x20vec2((vRealUv.x\x20+\x20xOffset)\x20*\x20(1.0\x20/\x20atlasDim)\x20+\x20tilePosX\x20*\x20(1.0\x20/\x20atlasDim),\x20vRealUv.y\x20*\x20(1.0\x20/\x20atlasDim)\x20+\x20tilePosY\x20*\x20(1.0\x20/\x20atlasDim));\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20diffuseColor\x20*=\x20texture2D(map,\x20uv);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20diffuseColor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20';
                this['zbf'] = new l7['jyz']({
                    'uniforms': {
                        'map': {
                            'value': l9['Z']['zbO']()
                        }
                    },
                    'zTl': '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20attribute\x20float\x20ao;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20attribute\x20vec4\x20realUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20float\x20vAo;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec4\x20vRealUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20mvPosition\x20=\x20modelViewMatrix\x20*\x20vec4(position,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20projectionMatrix\x20*\x20mvPosition;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vAo\x20=\x20ao;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vRealUv\x20=\x20realUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
                    'zTm': gQ,
                    'fog': !0x1
                }),
                this['zby'] = new l7['jyz']({
                    'transparent': !0x0,
                    'uniforms': {
                        'map': {
                            'value': l9['Z']['zbO']()
                        },
                        'time': {
                            'value': 0x0
                        }
                    },
                    'side': l7['ehD'],
                    'zTl': '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20attribute\x20float\x20ao;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20attribute\x20vec4\x20realUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20float\x20vAo;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec4\x20vRealUv;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20mvPosition\x20=\x20modelViewMatrix\x20*\x20vec4(position,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20projectionMatrix\x20*\x20mvPosition;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vAo\x20=\x20ao;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vRealUv\x20=\x20realUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
                    'zTm': gd,
                    'fog': !0x1,
                    'zTQ': !0x1
                });
                for (var gk = 0x0; gk < this['zbA']; gk++) {
                    var gn = new lu();
                    gn['onmessage'] = function(gj) {
                        switch (gj['data']['event']) {
                        case lz['CHUNK_MESH_DATA']:
                            gD['zbP'](gj['data']['data']);
                            break;
                        case lz['BLOCKS_MESH_DATA']:
                            var gp = gj['data']['data']
                              , gT = gp['zWZ']
                              , gZ = gp['zzW']
                              , gy = gp['zWR']
                              , gG = gp['zzH']
                              , gO = gp['zzz']
                              , gq = new l7['u9r']();
                            gq['setAttribute']('position', new l7['a$l'](gy,0x3)),
                            gq['setIndex'](new l7['qlB'](gZ,0x1)),
                            gq['setAttribute']('ao', new l7['WTc'](gO,0x1,!0x0)),
                            gq['setAttribute']('realUv', new l7['WTc'](gG,0x4));
                            var gA = new l7['Kj0'](gq,gD['zbf']);
                            gA['type'] = (0x0,
                            ll['D_'])(),
                            gA['position']['set'](gT['zWW'], gT['zWz'], gT['zWH']),
                            gD['zbB']['zbU'](gT, gA);
                        }
                    }
                    ,
                    this['zbs']['push'](gn);
                }
            }
            var gE = gm['prototype'];
            return gE['zbt'] = function() {
                this['zbk'] = [],
                this['zbf']['dispose']();
                for (var gN = 0x0; gN < this['zbs']['length']; gN++)
                    this['zbs'][gN]['terminate']();
                this['zbs'] = [];
            }
            ,
            gE['zus'] = function(gN, gr) {
                this['zby']['uniforms']['time']['value'] += 0x3e8 * gN,
                this['zby']['uniformsNeedUpdate'] = !0x0;
            }
            ,
            gE['zbn'] = function() {
                for (; this['zbk']['length'] > 0x0; ) {
                    0x0;
                    var gN = this['zbk']['shift']();
                    switch (gN['zzT']) {
                    case lx['CHUNK_MESH']:
                        if (this['zbB']['zbc']()['zbG'](gN['zWw']['zWW'], gN['zWw']['zWz'], gN['zWw']['zWH']))
                            this['zbQ']()['postMessage'](gN);
                        break;
                    case lx['BLOCKS_MESH']:
                    default:
                        this['zbQ']()['postMessage'](gN);
                    }
                }
            }
            ,
            gE['zbQ'] = function() {
                var gN = this['zbs'][this['zbv']];
                return ++this['zbv'] >= this['zbs']['length'] && (this['zbv'] = 0x0),
                gN;
            }
            ,
            gE['zbP'] = function(gN) {
                var gr = gN['zWJ']
                  , gD = gN['zWw']
                  , gQ = gN['zWE']
                  , gd = gN['zWS']
                  , gk = gN['zWe']
                  , gn = gN['zWh']
                  , gj = gN['zWM']
                  , gp = gN['zWN']
                  , gT = gN['zWq']
                  , gZ = gN['zWd']
                  , gy = void 0x0;
                if (gQ['length'] > 0x0) {
                    var gG = new l7['u9r']();
                    gG['setAttribute']('position', new l7['a$l'](gQ,0x3)),
                    gG['setIndex'](new l7['qlB'](gd,0x1)),
                    gG['setAttribute']('ao', new l7['WTc'](gn,0x1,!0x0)),
                    gG['setAttribute']('realUv', new l7['WTc'](gk,0x4)),
                    (gy = new l7['Kj0'](gG,this['zbf']))['type'] = (0x0,
                    ll['D_'])();
                }
                var gO = void 0x0;
                if (gj['length'] > 0x0) {
                    var gq = new l7['u9r']();
                    gq['setAttribute']('position', new l7['a$l'](gj,0x3)),
                    gq['setIndex'](new l7['qlB'](gp,0x1)),
                    gq['setAttribute']('ao', new l7['WTc'](gZ,0x1,!0x0)),
                    gq['setAttribute']('realUv', new l7['WTc'](gT,0x4)),
                    (gO = new l7['Kj0'](gq,this['zby']))['type'] = (0x0,
                    ll['D_'])();
                }
                this['zbB']['zbl'](gr, gD['zWW'], gD['zWz'], gD['zWH'], gy, gO);
            }
            ,
            gE['zbm'] = function(gN, gr, gD, gQ, gd, gk, gn, gj, gp, gT, gZ, gy, gG, gO, gq, gA, gK, gW, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, vl, vC) {
                var vw = (0x0,
                ll['bR'])({
                    'zzT': lx['CHUNK_MESH'],
                    'zWJ': gN,
                    'zWw': {
                        'zWW': gr['zWW'],
                        'zWz': gr['zWz'],
                        'zWH': gr['zWH']
                    },
                    'zWp': gD,
                    'zWD': gQ,
                    'zWV': gd,
                    'zWj': gk,
                    'zWK': gn,
                    'zWo': gj,
                    'zWu': gp,
                    'zWA': gT,
                    'zWk': gZ,
                    'zWs': gy,
                    'zWv': gG,
                    'zWf': gO,
                    'zWO': gq,
                    'zWy': gA,
                    'zWP': gK,
                    'zWU': gW,
                    'zWt': v0,
                    'zWn': v1,
                    'zWc': v2,
                    'zWG': v3,
                    'zWQ': v4,
                    'zWl': v5,
                    'zWm': v6,
                    'zWI': v7,
                    'zWX': v8,
                    'zWY': v9,
                    'zWx': vl
                });
                vC ? this['zbk']['push'](vw) : this['zbP']((0x0,
                lX['FX'])(vw));
            }
            ,
            gE['zbI'] = function(gN, gr) {
                this['zbk']['push']({
                    'zzT': lx['BLOCKS_MESH'],
                    'zWa': gN,
                    'zWp': gr
                });
            }
            ,
            gE['zbX'] = function() {
                return this['zbk']['length'];
            }
            ,
            gE['zbY'] = function() {
                return this['zbf'];
            }
            ,
            gm;
        }())
          , la = l2(0x97ed)
          , lm = function(gm, gE, gN) {
            return (gm + 0x80 & 0xff) << 0x10 | (gE + 0x80 & 0xff) << 0x8 | gN + 0x80 & 0xff;
        }
          , lE = function(gm, gE, gN) {
            return gm + ':' + gE + ':' + gN;
        }
          , lN = (function() {
            function gm(gN, gr, gD, gQ) {
                if (this['zbx'] = gN,
                this['zbp'] = gr,
                this['zbJ'] = gD,
                this['zbE'] = lm(this['zbp']['zWW'], this['zbp']['zWz'], this['zbp']['zWH']),
                gQ)
                    this['zbS'] = gQ;
                else {
                    this['zbS'] = new Uint8Array(l8['Z']['zLt']);
                    for (var gd = 0x0; gd < l8['Z']['zLt']; gd++)
                        this['zbS'][gd] = la['k']['zbh'];
                }
                this['zbe'] = !0x1,
                this['zbJ'] > 0x0 && this['zbM'](!0x1);
            }
            var gE = gm['prototype'];
            return gE['zbN'] = function() {
                return this['zbE'];
            }
            ,
            gE['zbd'] = function(gN, gr, gD) {
                return this['zbS'][gN * l8['Z']['zLU'] * l8['Z']['zLU'] + gr * l8['Z']['zLU'] + gD];
            }
            ,
            gE['zbq'] = function(gN, gr, gD, gQ) {
                var gd = this['zbd'](gN, gr, gD);
                this['zbS'][gN * l8['Z']['zLU'] * l8['Z']['zLU'] + gr * l8['Z']['zLU'] + gD] = gQ,
                gd !== gQ && this['zbM'](!0x0),
                gd === la['k']['zbh'] && gQ !== la['k']['zbh'] ? ++this['zbJ'] : gd !== la['k']['zbh'] && gQ === la['k']['zbh'] && --this['zbJ'];
            }
            ,
            gE['zbw'] = function(gN, gr, gD) {
                return (0x0,
                lF['XX'])(this['zbp']['zWW'] * l8['Z']['zLU'] + gN, this['zbp']['zWz'] * l8['Z']['zLU'] + gr, this['zbp']['zWH'] * l8['Z']['zLU'] + gD);
            }
            ,
            gE['zba'] = function() {
                return 0x0 === this['zbJ'];
            }
            ,
            gE['zbM'] = function(gN) {
                this['zbe'] || (this['zbx']['zbZ'](this['zbx']['zbR']() + 0x1),
                this['zbe'] = !0x0,
                gN ? this['zbx']['zFW'](this) : this['zbx']['zFz'](this));
            }
            ,
            gE['zFH'] = function() {
                this['zbe'] && (this['zbx']['zbZ'](this['zbx']['zbR']() - 0x1),
                this['zbe'] = !0x1);
            }
            ,
            gE['zFT'] = function() {
                return this['zbS'];
            }
            ,
            gE['zFL'] = function() {
                return this['zbp'];
            }
            ,
            gm;
        }())
          , lr = l2(0xa888)
          , lD = (function() {
            function gm(gE) {
                this['_dirVector'] = gE;
            }
            return (0x0,
            lr['Z'])(gm, [{
                'key': 'dir',
                'get': function() {
                    return (0x0,
                    lF['dg'])(this['_dirVector']);
                }
            }], [{
                'key': 'immediateNeighbors',
                'get': function() {
                    return [gm['UP'], gm['DOWN'], gm['FRONT'], gm['BACK'], gm['RIGHT'], gm['LEFT']];
                }
            }, {
                'key': 'secondaryNeighbors',
                'get': function() {
                    return [gm['UP_LEFT'], gm['UP_RIGHT'], gm['UP_FRONT'], gm['UP_BACK'], gm['DOWN_LEFT'], gm['DOWN_RIGHT'], gm['DOWN_FRONT'], gm['DOWN_BACK'], gm['LEFT_FRONT'], gm['FRONT_RIGHT'], gm['RIGHT_BACK'], gm['BACK_LEFT']];
                }
            }, {
                'key': 'tertiaryNeighbors',
                'get': function() {
                    return [gm['RIGHT_UP_BACK'], gm['RIGHT_UP_FRONT'], gm['RIGHT_DOWN_BACK'], gm['RIGHT_DOWN_FRONT'], gm['LEFT_UP_BACK'], gm['LEFT_UP_FRONT'], gm['LEFT_DOWN_BACK'], gm['LEFT_DOWN_FRONT']];
                }
            }, {
                'key': 'values',
                'get': function() {
                    return [gm['UP'], gm['DOWN'], gm['FRONT'], gm['BACK'], gm['RIGHT'], gm['LEFT'], gm['UP_LEFT'], gm['UP_RIGHT'], gm['UP_FRONT'], gm['UP_BACK'], gm['DOWN_LEFT'], gm['DOWN_RIGHT'], gm['DOWN_FRONT'], gm['DOWN_BACK'], gm['LEFT_FRONT'], gm['FRONT_RIGHT'], gm['RIGHT_BACK'], gm['BACK_LEFT'], gm['RIGHT_UP_BACK'], gm['RIGHT_UP_FRONT'], gm['RIGHT_DOWN_BACK'], gm['RIGHT_DOWN_FRONT'], gm['LEFT_UP_BACK'], gm['LEFT_UP_FRONT'], gm['LEFT_DOWN_BACK'], gm['LEFT_DOWN_FRONT']];
                }
            }]),
            gm;
        }());
        lD['UP'] = new lD((0x0,
        lF['XX'])(0x0, 0x1, 0x0)),
        lD['DOWN'] = new lD((0x0,
        lF['XX'])(0x0, -0x1, 0x0)),
        lD['FRONT'] = new lD((0x0,
        lF['XX'])(0x0, 0x0, 0x1)),
        lD['BACK'] = new lD((0x0,
        lF['XX'])(0x0, 0x0, -0x1)),
        lD['LEFT'] = new lD((0x0,
        lF['XX'])(0x1, 0x0, 0x0)),
        lD['RIGHT'] = new lD((0x0,
        lF['XX'])(-0x1, 0x0, 0x0)),
        lD['UP_LEFT'] = new lD((0x0,
        lF['XX'])(0x1, 0x1, 0x0)),
        lD['UP_RIGHT'] = new lD((0x0,
        lF['XX'])(-0x1, 0x1, 0x0)),
        lD['UP_FRONT'] = new lD((0x0,
        lF['XX'])(0x0, 0x1, 0x1)),
        lD['UP_BACK'] = new lD((0x0,
        lF['XX'])(0x0, 0x1, -0x1)),
        lD['DOWN_LEFT'] = new lD((0x0,
        lF['XX'])(0x1, -0x1, 0x0)),
        lD['DOWN_RIGHT'] = new lD((0x0,
        lF['XX'])(-0x1, -0x1, 0x0)),
        lD['DOWN_FRONT'] = new lD((0x0,
        lF['XX'])(0x0, -0x1, 0x1)),
        lD['DOWN_BACK'] = new lD((0x0,
        lF['XX'])(0x0, -0x1, -0x1)),
        lD['LEFT_FRONT'] = new lD((0x0,
        lF['XX'])(0x1, 0x0, 0x1)),
        lD['FRONT_RIGHT'] = new lD((0x0,
        lF['XX'])(-0x1, 0x0, 0x1)),
        lD['RIGHT_BACK'] = new lD((0x0,
        lF['XX'])(-0x1, 0x0, -0x1)),
        lD['BACK_LEFT'] = new lD((0x0,
        lF['XX'])(0x1, 0x0, -0x1)),
        lD['RIGHT_UP_BACK'] = new lD((0x0,
        lF['XX'])(-0x1, 0x1, -0x1)),
        lD['RIGHT_UP_FRONT'] = new lD((0x0,
        lF['XX'])(-0x1, 0x1, 0x1)),
        lD['RIGHT_DOWN_BACK'] = new lD((0x0,
        lF['XX'])(-0x1, -0x1, -0x1)),
        lD['RIGHT_DOWN_FRONT'] = new lD((0x0,
        lF['XX'])(-0x1, -0x1, 0x1)),
        lD['LEFT_UP_BACK'] = new lD((0x0,
        lF['XX'])(0x1, 0x1, -0x1)),
        lD['LEFT_UP_FRONT'] = new lD((0x0,
        lF['XX'])(0x1, 0x1, 0x1)),
        lD['LEFT_DOWN_BACK'] = new lD((0x0,
        lF['XX'])(0x1, -0x1, -0x1)),
        lD['LEFT_DOWN_FRONT'] = new lD((0x0,
        lF['XX'])(0x1, -0x1, 0x1));
        var lQ = (function() {
            function gm() {
                this['zFg'] = new Set(),
                this['zFr'] = void 0x0,
                this['zFD'] = void 0x0;
            }
            var gE = gm['prototype'];
            return gE['zFV'] = function(gN) {
                if (!this['zFg']['has'](gN)) {
                    this['zFg']['add'](gN);
                    var gr = {
                        'zFj': gN,
                        'zFK': void 0x0
                    };
                    void 0x0 === this['zFr'] ? this['zFr'] = this['zFD'] = gr : (this['zFD']['zFK'] = gr,
                    this['zFD'] = gr);
                }
            }
            ,
            gE['zFo'] = function() {
                if (void 0x0 !== this['zFr']) {
                    if (this['zFr'] === this['zFD']) {
                        var gN = this['zFr']['zFj'];
                        return this['zFg']['delete'](gN),
                        this['zFr'] = this['zFD'] = void 0x0,
                        gN;
                    }
                    var gr = this['zFr']['zFj'];
                    return this['zFg']['delete'](gr),
                    this['zFr'] = this['zFr']['zFK'],
                    gr;
                }
            }
            ,
            gE['zFu'] = function(gN) {
                if (!this['zFg']['has'](gN)) {
                    this['zFg']['add'](gN);
                    var gr = {
                        'zFj': gN,
                        'zFK': void 0x0
                    };
                    void 0x0 === this['zFr'] ? this['zFr'] = this['zFD'] = gr : (gr['zFK'] = this['zFr'],
                    this['zFr'] = gr);
                }
            }
            ,
            gm;
        }());
        function ld(gm, gE) {
            var gN = 'undefined' != typeof Symbol && gm[Symbol['iterator']] || gm['@@iterator'];
            if (gN)
                return (gN = gN['call'](gm))['next']['bind'](gN);
            if (Array['isArray'](gm) || (gN = function(gD, gQ) {
                if (!gD)
                    return;
                if ('string' == typeof gD)
                    return lk(gD, gQ);
                var gd = Object['prototype']['toString']['call'](gD)['slice'](0x8, -0x1);
                'Object' === gd && gD['constructor'] && (gd = gD['constructor']['name']);
                if ('Map' === gd || 'Set' === gd)
                    return Array['from'](gD);
                if ('Arguments' === gd || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/['test'](gd))
                    return lk(gD, gQ);
            }(gm)) || gE && gm && 'number' == typeof gm['length']) {
                gN && (gm = gN);
                var gr = 0x0;
                return function() {
                    return gr >= gm['length'] ? {
                        'done': !0x0
                    } : {
                        'done': !0x1,
                        'value': gm[gr++]
                    };
                }
                ;
            }
            throw new TypeError('Invalid\x20attempt\x20to\x20iterate\x20non-iterable\x20instance.\x0aIn\x20order\x20to\x20be\x20iterable,\x20non-array\x20objects\x20must\x20have\x20a\x20[Symbol.iterator]()\x20method.');
        }
        function lk(gm, gE) {
            (null == gE || gE > gm['length']) && (gE = gm['length']);
            for (var gN = 0x0, gr = new Array(gE); gN < gE; gN++)
                gr[gN] = gm[gN];
            return gr;
        }
        var ln = (function() {
            function gm(gN, gr) {
                this['zFb'] = gN,
                this['zFF'] = gr,
                this['zFC'] = new Map(),
                this['zFi'] = 0x0,
                this['zFB'] = new lQ();
            }
            var gE = gm['prototype'];
            return gE['zFA'] = function() {
                return this['zFb'];
            }
            ,
            gE['zFk'] = function() {
                return this['zFF'];
            }
            ,
            gE['zFs'] = function() {
                return this['zFC'];
            }
            ,
            gE['zFz'] = function(gN) {
                this['zFB']['zFV'](gN['zbN']());
            }
            ,
            gE['zFW'] = function(gN) {
                this['zFB']['zFu'](gN['zbN']());
            }
            ,
            gE['zFv'] = function() {
                for (var gN = this['zFB']['zFo'](); void 0x0 !== gN; ) {
                    var gr = this['zFC']['get'](gN);
                    if (void 0x0 !== gr)
                        return gr;
                    gN = this['zFB']['zFo']();
                }
            }
            ,
            gE['zbZ'] = function(gN) {
                this['zFi'] = gN;
            }
            ,
            gE['zbR'] = function() {
                return this['zFi'];
            }
            ,
            gE['zFL'] = function(gN, gr, gD) {
                return (0x0,
                lF['XX'])(Math['floor'](gN / l8['Z']['zLU']), Math['floor'](gr / l8['Z']['zLU']), Math['floor'](gD / l8['Z']['zLU']));
            }
            ,
            gE['zFf'] = function(gN, gr, gD) {
                return (0x0,
                lF['XX'])(0x0 | (0x0,
                lb['wQ'])(gN, l8['Z']['zLU']), 0x0 | (0x0,
                lb['wQ'])(gr, l8['Z']['zLU']), 0x0 | (0x0,
                lb['wQ'])(gD, l8['Z']['zLU']));
            }
            ,
            gE['zFO'] = function(gN, gr, gD) {
                return (0x0,
                lF['XX'])(Math['floor'](gN), Math['floor'](gr), Math['floor'](gD));
            }
            ,
            gE['zFy'] = function(gN, gr, gD) {
                return (0x0,
                lF['XX'])((Math['floor'](gN) + 0.5) * l8['Z']['zLn'], (Math['floor'](gr) + 0.5) * l8['Z']['zLn'], (Math['floor'](gD) + 0.5) * l8['Z']['zLn']);
            }
            ,
            gE['zFP'] = function(gN, gr, gD) {
                return gN >= this['zFb']['zWW'] && gr >= this['zFb']['zWz'] && gD >= this['zFb']['zWH'] && gN <= this['zFF']['zWW'] && gr <= this['zFF']['zWz'] && gD <= this['zFF']['zWH'];
            }
            ,
            gE['zbG'] = function(gN, gr, gD) {
                return this['zFC']['has'](lm(gN, gr, gD));
            }
            ,
            gE['zFU'] = function(gN, gr, gD) {
                return this['zFC']['get'](lm(gN, gr, gD));
            }
            ,
            gE['zFt'] = function(gN, gr, gD, gQ, gd) {
                var gk = new lN(this,(0x0,
                lF['XX'])(gN, gr, gD),gQ,gd);
                return this['zFC']['set'](gk['zbN'](), gk),
                this['zFn'](gN, gr, gD, !0x1),
                gk;
            }
            ,
            gE['zFc'] = function(gN, gr, gD) {
                this['zbG'](gN, gr, gD) && (this['zFU'](gN, gr, gD)['zFH'](),
                this['zFC']['delete'](lm(gN, gr, gD)));
            }
            ,
            gE['zFG'] = function(gN, gr, gD) {
                var gQ = this['zFL'](gN, gr, gD);
                if (!this['zbG'](gQ['zWW'], gQ['zWz'], gQ['zWH']))
                    return la['k']['zbh'];
                var gd = this['zFU'](gQ['zWW'], gQ['zWz'], gQ['zWH'])
                  , gk = this['zFf'](gN, gr, gD);
                return gd['zbd'](gk['zWW'], gk['zWz'], gk['zWH']);
            }
            ,
            gE['zFQ'] = function(gN, gr, gD, gQ) {
                var gd = this['zFL'](gN, gr, gD);
                if (this['zbG'](gd['zWW'], gd['zWz'], gd['zWH'])) {
                    var gk = this['zFU'](gd['zWW'], gd['zWz'], gd['zWH'])
                      , gn = this['zFf'](gN, gr, gD);
                    gk['zbq'](gn['zWW'], gn['zWz'], gn['zWH'], gQ);
                    for (var gj, gp = ld(lD['values']); !(gj = gp())['done']; ) {
                        var gT = gj['value'];
                        (0x1 === gT['dir']['zWW'] && gn['zWW'] === l8['Z']['zLU'] - 0x1 || -0x1 === gT['dir']['zWW'] && 0x0 === gn['zWW'] || 0x0 === gT['dir']['zWW']) && (0x1 === gT['dir']['zWz'] && gn['zWz'] === l8['Z']['zLU'] - 0x1 || -0x1 === gT['dir']['zWz'] && 0x0 === gn['zWz'] || 0x0 === gT['dir']['zWz']) && (0x1 === gT['dir']['zWH'] && gn['zWH'] === l8['Z']['zLU'] - 0x1 || -0x1 === gT['dir']['zWH'] && 0x0 === gn['zWH'] || 0x0 === gT['dir']['zWH']) && this['zFl'](gd['zWW'], gd['zWz'], gd['zWH'], gT['dir']['zWW'], gT['dir']['zWz'], gT['dir']['zWH'], !0x0);
                    }
                }
            }
            ,
            gE['zFm'] = function(gN, gr, gD, gQ) {
                this['zbG'](gN, gr, gD) && this['zFU'](gN, gr, gD)['zbM'](gQ);
            }
            ,
            gE['zFl'] = function(gN, gr, gD, gQ, gd, gk, gn) {
                this['zFm'](gN + gQ, gr + gd, gD + gk, gn);
            }
            ,
            gE['zFn'] = function(gN, gr, gD, gQ) {
                for (var gd, gk = ld(lD['values']); !(gd = gk())['done']; ) {
                    var gn = gd['value'];
                    this['zFl'](gN, gr, gD, gn['dir']['zWW'], gn['dir']['zWz'], gn['dir']['zWH'], gQ);
                }
            }
            ,
            gm;
        }())
          , lj = (function() {
            function gm(gN, gr, gD, gQ) {
                this['zFI'] = gN,
                this['zbx'] = gr,
                this['zFX'] = gD,
                this['zbB'] = gQ,
                this['zFY'] = 0x0,
                this['zFx'] = -0x1;
            }
            var gE = gm['prototype'];
            return gE['zbt'] = function() {
                this['zFp'] && (this['zbB']['zFJ']()['remove'](this['zFp']),
                this['zFp']['geometry']['dispose'](),
                this['zFp'] = void 0x0),
                this['zFE'] && (this['zbB']['zFJ']()['remove'](this['zFE']),
                this['zFE']['geometry']['dispose'](),
                this['zFE'] = void 0x0);
            }
            ,
            gE['zFS'] = function(gN, gr, gD) {
                gN < this['zFx'] || (this['zFx'] = gN,
                this['zbt'](),
                gr && (this['zFp'] = gr,
                this['zFp']['scale']['set'](l8['Z']['zLn'], l8['Z']['zLn'], l8['Z']['zLn']),
                this['zFp']['position']['set'](this['zFX']['zFL']()['zWW'] * (l8['Z']['zLU'] * l8['Z']['zLn']), this['zFX']['zFL']()['zWz'] * (l8['Z']['zLU'] * l8['Z']['zLn']), this['zFX']['zFL']()['zWH'] * (l8['Z']['zLU'] * l8['Z']['zLn'])),
                this['zFp']['matrixAutoUpdate'] = !0x1,
                this['zFp']['updateMatrix'](),
                this['zbB']['zFJ']()['add'](this['zFp'])),
                gD && (this['zFE'] = gD,
                this['zFE']['scale']['set'](l8['Z']['zLn'], l8['Z']['zLn'], l8['Z']['zLn']),
                this['zFE']['position']['set'](this['zFX']['zFL']()['zWW'] * (l8['Z']['zLU'] * l8['Z']['zLn']), this['zFX']['zFL']()['zWz'] * (l8['Z']['zLU'] * l8['Z']['zLn']), this['zFX']['zFL']()['zWH'] * (l8['Z']['zLU'] * l8['Z']['zLn'])),
                this['zFE']['matrixAutoUpdate'] = !0x1,
                this['zFE']['updateMatrix'](),
                this['zbB']['zFJ']()['add'](this['zFE'])));
            }
            ,
            gE['zFh'] = function(gN) {
                if (this['zFX']['zba']())
                    this['zbt']();
                else {
                    for (var gr = [], gD = [], gQ = [], gd = [], gk = [], gn = [], gj = this['zbx']['zbG'](this['zFX']['zFL']()['zWW'] + 0x1, this['zFX']['zFL']()['zWz'], this['zFX']['zFL']()['zWH']), gp = this['zbx']['zFU'](this['zFX']['zFL']()['zWW'] + 0x1, this['zFX']['zFL']()['zWz'], this['zFX']['zFL']()['zWH']), gT = this['zbx']['zbG'](this['zFX']['zFL']()['zWW'] - 0x1, this['zFX']['zFL']()['zWz'], this['zFX']['zFL']()['zWH']), gZ = this['zbx']['zFU'](this['zFX']['zFL']()['zWW'] - 0x1, this['zFX']['zFL']()['zWz'], this['zFX']['zFL']()['zWH']), gy = this['zbx']['zbG'](this['zFX']['zFL']()['zWW'], this['zFX']['zFL']()['zWz'] + 0x1, this['zFX']['zFL']()['zWH']), gG = this['zbx']['zFU'](this['zFX']['zFL']()['zWW'], this['zFX']['zFL']()['zWz'] + 0x1, this['zFX']['zFL']()['zWH']), gO = this['zbx']['zbG'](this['zFX']['zFL']()['zWW'], this['zFX']['zFL']()['zWz'] - 0x1, this['zFX']['zFL']()['zWH']), gq = this['zbx']['zFU'](this['zFX']['zFL']()['zWW'], this['zFX']['zFL']()['zWz'] - 0x1, this['zFX']['zFL']()['zWH']), gA = this['zbx']['zbG'](this['zFX']['zFL']()['zWW'], this['zFX']['zFL']()['zWz'], this['zFX']['zFL']()['zWH'] + 0x1), gK = this['zbx']['zFU'](this['zFX']['zFL']()['zWW'], this['zFX']['zFL']()['zWz'], this['zFX']['zFL']()['zWH'] + 0x1), gW = this['zbx']['zbG'](this['zFX']['zFL']()['zWW'], this['zFX']['zFL']()['zWz'], this['zFX']['zFL']()['zWH'] - 0x1), v0 = this['zbx']['zFU'](this['zFX']['zFL']()['zWW'], this['zFX']['zFL']()['zWz'], this['zFX']['zFL']()['zWH'] - 0x1), v1 = this['zFX']['zbw'](l8['Z']['zLU'], l8['Z']['zLU'], l8['Z']['zLU']), v2 = this['zbx']['zFG'](v1['zWW'], v1['zWz'], v1['zWH']), v3 = this['zFX']['zbw'](-0x1, l8['Z']['zLU'], l8['Z']['zLU']), v4 = this['zbx']['zFG'](v3['zWW'], v3['zWz'], v3['zWH']), v5 = this['zFX']['zbw'](l8['Z']['zLU'], l8['Z']['zLU'], -0x1), v6 = this['zbx']['zFG'](v5['zWW'], v5['zWz'], v5['zWH']), v7 = this['zFX']['zbw'](-0x1, l8['Z']['zLU'], -0x1), v8 = this['zbx']['zFG'](v7['zWW'], v7['zWz'], v7['zWH']), v9 = this['zFX']['zbw'](l8['Z']['zLU'], -0x1, l8['Z']['zLU']), vl = this['zbx']['zFG'](v9['zWW'], v9['zWz'], v9['zWH']), vC = this['zFX']['zbw'](-0x1, -0x1, l8['Z']['zLU']), vw = this['zbx']['zFG'](vC['zWW'], vC['zWz'], vC['zWH']), vg = this['zFX']['zbw'](l8['Z']['zLU'], -0x1, -0x1), vv = this['zbx']['zFG'](vg['zWW'], vg['zWz'], vg['zWH']), vF = this['zFX']['zbw'](-0x1, -0x1, -0x1), vL = this['zbx']['zFG'](vF['zWW'], vF['zWz'], vF['zWH']), vH = [], vS = [], vb = [], vc = [], vh = [], vJ = [], vY = [], vV = [], vU = [], vs = [], vI = [], vP = [], vR = this['zbx']['zbG'](this['zFX']['zFL']()['zWW'] + 0x1, this['zFX']['zFL']()['zWz'], this['zFX']['zFL']()['zWH'] + 0x1), vf = this['zbx']['zFU'](this['zFX']['zFL']()['zWW'] + 0x1, this['zFX']['zFL']()['zWz'], this['zFX']['zFL']()['zWH'] + 0x1), vo = this['zbx']['zbG'](this['zFX']['zFL']()['zWW'] - 0x1, this['zFX']['zFL']()['zWz'], this['zFX']['zFL']()['zWH'] + 0x1), vu = this['zbx']['zFU'](this['zFX']['zFL']()['zWW'] - 0x1, this['zFX']['zFL']()['zWz'], this['zFX']['zFL']()['zWH'] + 0x1), vB = this['zbx']['zbG'](this['zFX']['zFL']()['zWW'] + 0x1, this['zFX']['zFL']()['zWz'], this['zFX']['zFL']()['zWH'] - 0x1), vx = this['zbx']['zFU'](this['zFX']['zFL']()['zWW'] + 0x1, this['zFX']['zFL']()['zWz'], this['zFX']['zFL']()['zWH'] - 0x1), vz = this['zbx']['zbG'](this['zFX']['zFL']()['zWW'] - 0x1, this['zFX']['zFL']()['zWz'], this['zFX']['zFL']()['zWH'] - 0x1), vX = this['zbx']['zFU'](this['zFX']['zFL']()['zWW'] - 0x1, this['zFX']['zFL']()['zWz'], this['zFX']['zFL']()['zWH'] - 0x1), vM = this['zbx']['zbG'](this['zFX']['zFL']()['zWW'], this['zFX']['zFL']()['zWz'] + 0x1, this['zFX']['zFL']()['zWH'] + 0x1), va = this['zbx']['zFU'](this['zFX']['zFL']()['zWW'], this['zFX']['zFL']()['zWz'] + 0x1, this['zFX']['zFL']()['zWH'] + 0x1), vm = this['zbx']['zbG'](this['zFX']['zFL']()['zWW'], this['zFX']['zFL']()['zWz'] + 0x1, this['zFX']['zFL']()['zWH'] - 0x1), vE = this['zbx']['zFU'](this['zFX']['zFL']()['zWW'], this['zFX']['zFL']()['zWz'] + 0x1, this['zFX']['zFL']()['zWH'] - 0x1), vN = this['zbx']['zbG'](this['zFX']['zFL']()['zWW'] + 0x1, this['zFX']['zFL']()['zWz'] + 0x1, this['zFX']['zFL']()['zWH']), vr = this['zbx']['zFU'](this['zFX']['zFL']()['zWW'] + 0x1, this['zFX']['zFL']()['zWz'] + 0x1, this['zFX']['zFL']()['zWH']), vD = this['zbx']['zbG'](this['zFX']['zFL']()['zWW'] - 0x1, this['zFX']['zFL']()['zWz'] + 0x1, this['zFX']['zFL']()['zWH']), vQ = this['zbx']['zFU'](this['zFX']['zFL']()['zWW'] - 0x1, this['zFX']['zFL']()['zWz'] + 0x1, this['zFX']['zFL']()['zWH']), vd = this['zbx']['zbG'](this['zFX']['zFL']()['zWW'], this['zFX']['zFL']()['zWz'] - 0x1, this['zFX']['zFL']()['zWH'] + 0x1), vk = this['zbx']['zFU'](this['zFX']['zFL']()['zWW'], this['zFX']['zFL']()['zWz'] - 0x1, this['zFX']['zFL']()['zWH'] + 0x1), vn = this['zbx']['zbG'](this['zFX']['zFL']()['zWW'], this['zFX']['zFL']()['zWz'] - 0x1, this['zFX']['zFL']()['zWH'] - 0x1), vj = this['zbx']['zFU'](this['zFX']['zFL']()['zWW'], this['zFX']['zFL']()['zWz'] - 0x1, this['zFX']['zFL']()['zWH'] - 0x1), vp = this['zbx']['zbG'](this['zFX']['zFL']()['zWW'] + 0x1, this['zFX']['zFL']()['zWz'] - 0x1, this['zFX']['zFL']()['zWH']), vT = this['zbx']['zFU'](this['zFX']['zFL']()['zWW'] + 0x1, this['zFX']['zFL']()['zWz'] - 0x1, this['zFX']['zFL']()['zWH']), vZ = this['zbx']['zbG'](this['zFX']['zFL']()['zWW'] - 0x1, this['zFX']['zFL']()['zWz'] - 0x1, this['zFX']['zFL']()['zWH']), vy = this['zbx']['zFU'](this['zFX']['zFL']()['zWW'] - 0x1, this['zFX']['zFL']()['zWz'] - 0x1, this['zFX']['zFL']()['zWH']), vG = 0x0; vG < l8['Z']['zLU']; vG++) {
                        gr[vG] = [],
                        gD[vG] = [],
                        gQ[vG] = [],
                        gd[vG] = [],
                        gk[vG] = [],
                        gn[vG] = [];
                        for (var vO = 0x0; vO < l8['Z']['zLU']; vO++)
                            gr[vG][vO] = gj ? gp['zbd'](0x0, vG, vO) : la['k']['zbh'],
                            gD[vG][vO] = gT ? gZ['zbd'](l8['Z']['zLU'] - 0x1, vG, vO) : la['k']['zbh'],
                            gQ[vG][vO] = gy ? gG['zbd'](vG, 0x0, vO) : la['k']['zbh'],
                            gd[vG][vO] = gO ? gq['zbd'](vG, l8['Z']['zLU'] - 0x1, vO) : la['k']['zbh'],
                            gk[vG][vO] = gA ? gK['zbd'](vG, vO, 0x0) : la['k']['zbh'],
                            gn[vG][vO] = gW ? v0['zbd'](vG, vO, l8['Z']['zLU'] - 0x1) : la['k']['zbh'];
                        vH[vG] = vR ? vf['zbd'](0x0, vG, 0x0) : la['k']['zbh'],
                        vS[vG] = vo ? vu['zbd'](l8['Z']['zLU'] - 0x1, vG, 0x0) : la['k']['zbh'],
                        vb[vG] = vB ? vx['zbd'](0x0, vG, l8['Z']['zLU'] - 0x1) : la['k']['zbh'],
                        vc[vG] = vz ? vX['zbd'](l8['Z']['zLU'] - 0x1, vG, l8['Z']['zLU'] - 0x1) : la['k']['zbh'],
                        vh[vG] = vM ? va['zbd'](vG, 0x0, 0x0) : la['k']['zbh'],
                        vJ[vG] = vm ? vE['zbd'](vG, 0x0, l8['Z']['zLU'] - 0x1) : la['k']['zbh'],
                        vY[vG] = vN ? vr['zbd'](0x0, 0x0, vG) : la['k']['zbh'],
                        vV[vG] = vD ? vQ['zbd'](l8['Z']['zLU'] - 0x1, 0x0, vG) : la['k']['zbh'],
                        vU[vG] = vd ? vk['zbd'](vG, l8['Z']['zLU'] - 0x1, 0x0) : la['k']['zbh'],
                        vs[vG] = vn ? vj['zbd'](vG, l8['Z']['zLU'] - 0x1, l8['Z']['zLU'] - 0x1) : la['k']['zbh'],
                        vI[vG] = vp ? vT['zbd'](0x0, l8['Z']['zLU'] - 0x1, vG) : la['k']['zbh'],
                        vP[vG] = vZ ? vy['zbd'](l8['Z']['zLU'] - 0x1, l8['Z']['zLU'] - 0x1, vG) : la['k']['zbh'];
                    }
                    this['zFI']['zbm'](++this['zFY'], this['zFX']['zFL'](), this['zFX']['zFT'](), gQ, gd, gr, gD, gk, gn, v2, v4, v6, v8, vl, vw, vv, vL, vH, vS, vb, vc, vh, vJ, vY, vV, vU, vs, vI, vP, gN);
                }
            }
            ,
            gm;
        }())
          , lp = (function() {
            function gm(gN) {
                var gr = this;
                this['zus'] = function(gD, gQ) {
                    for (var gd = 0x0; gd < gr['zFe']['length']; gd++) {
                        var gk = gr['zFe'][gd]
                          , gn = gk['zFM']['position'];
                        gk['zFM']['position']['set'](gn['zWW'], gn['zWz'] - 0x2 * gD, gn['zWH']);
                        var gj = new l7['Pa4'](0x1,0x0,0x1);
                        gj['normalize'](),
                        gk['zFM']['rotateOnAxis'](gj, 1.5 * gD),
                        gk['zFM']['position']['zWz'] < gk['zFN'] - 0x5 * l8['Z']['zLn'] && (gr['zbB']['zFd']()['zuO']()['remove'](gk['zFM']),
                        gk['zFM']['geometry']['dispose'](),
                        gr['zFe'][gd] = gr['zFe'][gr['zFe']['length'] - 0x1],
                        gr['zFe']['pop'](),
                        --gd);
                    }
                }
                ,
                this['zbB'] = gN,
                this['zFe'] = [];
            }
            var gE = gm['prototype'];
            return gE['zFq'] = function(gN) {
                this['zFe']['push']({
                    'zFM': gN,
                    'zFN': gN['position']['zWz']
                }),
                this['zbB']['zFd']()['zuO']()['add'](gN);
            }
            ,
            gE['zbt'] = function() {
                for (var gN = 0x0; gN < this['zFe']['length']; gN++) {
                    var gr = this['zFe'][gN];
                    gr['zFM']['geometry']['dispose'](),
                    this['zbB']['zFd']()['zuO']()['remove'](gr['zFM']);
                }
            }
            ,
            gm;
        }())
          , lT = l2(0x13dd)
          , lZ = l2(0x1661b)
          , ly = (function() {
            function gm(gN) {
                var gr = this;
                this['zus'] = function(gn, gj) {}
                ,
                this['zbK'] = function(gn) {
                    for (var gj = Date['now'](), gp = 0x0, gT = Object['entries'](gr['zFw']); gp < gT['length']; gp++) {
                        var gZ = gT[gp]
                          , gy = gZ[0x0]
                          , gG = gZ[0x1];
                        if (gj - gG['zFa'] >= 0xbb8) {
                            if (gG['zrx'] = Math['max'](0x0, gG['zrx'] - (0x0,
                            lZ['Gc'])(0x1) / 0x4),
                            gG['zrx'] <= 0x0)
                                gr['zFZ'](gy);
                            else {
                                var gO = lT['Z'][gr['zbB']['zbc']()['zFG'](gG['zFR']['zWW'], gG['zFR']['zWz'], gG['zFR']['zWH'])]['zWC'];
                                gG['zCW'] >= 0x0 && gG['zCW'] < l8['Z']['zLc'] && (gG['zCz'] = Math['max'](0x0, Math['min'](0x1, gG['zrx'] / gO)),
                                gr['zCH']['set']([gG['zCz']], gG['zCW']),
                                gr['zCH']['needsUpdate'] = !0x0);
                            }
                        }
                    }
                }
                ,
                this['zbB'] = gN,
                this['zFw'] = {},
                this['zCT'] = [];
                for (var gD = new l7['nvb'](l8['Z']['zLn'],l8['Z']['zLn'],l8['Z']['zLn']), gQ = new l7['vBJ']({
                    'transparent': !0x0,
                    'map': l9['Z']['zbO'](),
                    'blending': l7['M5h'],
                    'fog': !0x1
                }), gd = [], gk = 0x0; gk < l8['Z']['zLc']; gk++)
                    gd['push'](0x0);
                this['zCH'] = new l7['lb7'](new Float32Array(gd),0x1),
                gD['setAttribute']('instanceCrack', this['zCH']),
                gQ['onBeforeCompile'] = function(gn) {
                    gn['zTl'] = gn['zTl']['replace']('#include\x20<common>', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20attribute\x20float\x20instanceCrack;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20float\x20vInstanceCrack;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#include\x20<common>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20')['replace']('#include\x20<begin_vertex>', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#include\x20<begin_vertex>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vInstanceCrack\x20=\x20instanceCrack;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'),
                    gn['zTm'] = gn['zTm']['replace']('#include\x20<common>', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20float\x20vInstanceCrack;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#include\x20<common>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20')['replace']('#include\x20<map_fragment>', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20atlasDim\x20=\x20' + l8['Z']['zLs']['toFixed'](0x1) + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20rawUv\x20=\x20vec2(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20fract(vUv.x)\x20/\x20atlasDim,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20fract(vUv.y)\x20/\x20atlasDim\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20crackU\x20=\x20floor(vInstanceCrack\x20*\x205.0)\x20/\x20atlasDim;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20crackV\x20=\x207.0\x20/\x20atlasDim;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20crackTexture\x20=\x20sRGBToLinear(texture2D(map,\x20vec2(rawUv.x\x20+\x20crackU,\x20rawUv.y\x20+\x20crackV)));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20identity\x20=\x20vec4(1.0,\x201.0,\x201.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20hasPixel\x20=\x20step(0.5,\x20crackTexture.a);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20crackTexture\x20=\x20(1.0\x20-\x20hasPixel)\x20*\x20identity\x20+\x20hasPixel\x20*\x20crackTexture;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20diffuseColor\x20=\x20crackTexture;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20');
                }
                ,
                this['zCL'] = new l7['SPe'](gD,gQ,l8['Z']['zLc']),
                this['zbB']['zFd']()['zuO']()['add'](this['zCL']),
                this['zCL']['count'] = this['zCT']['length'],
                this['zCg'] = new l7['Tme'](),
                this['zCg']['type'] = (0x0,
                ll['D_'])(),
                this['zCg']['scale']['set'](1.002, 1.002, 1.002);
            }
            var gE = gm['prototype'];
            return gE['zCr'] = function(gN, gr, gD, gQ, gd) {
                var gk = (0x0,
                lF['XX'])(gN, gr, gD)
                  , gn = lE(gN, gr, gD)
                  , gj = lT['Z'][this['zbB']['zbc']()['zFG'](gk['zWW'], gk['zWz'], gk['zWH'])]['zWC'];
                gQ = Math['min'](gj, gQ);
                var gp = Math['max'](0x0, Math['min'](gQ / gj))
                  , gT = this['zCD'](gN, gr, gD) / gj;
                if (gn in this['zFw'])
                    this['zFw'][gn]['zrx'] = gQ,
                    this['zFw'][gn]['zCz'] = gp,
                    this['zFw'][gn]['zFa'] = Date['now']();
                else {
                    var gZ = this['zCT']['length']
                      , gy = {
                        'zrx': gQ,
                        'zCz': gp,
                        'zFa': Date['now'](),
                        'zFR': gk,
                        'zCW': gZ
                    };
                    if (this['zFw'][gn] = gy,
                    this['zCT']['push'](gy),
                    gZ >= 0x0 && gZ < l8['Z']['zLc']) {
                        var gG = this['zbB']['zbc']()['zFy'](gN, gr, gD);
                        this['zCg']['position']['set'](gG['zWW'], gG['zWz'], gG['zWH']),
                        this['zCg']['updateMatrix'](),
                        this['zCL']['setMatrixAt'](gZ, this['zCg']['matrix']),
                        this['zCL']['count'] = Math['min'](l8['Z']['zLc'], this['zCT']['length']),
                        this['zCL']['instanceMatrix']['needsUpdate'] = !0x0;
                    }
                }
                var gO = gp;
                if (this['zFw'][gn]['zCW'] >= 0x0 && this['zFw'][gn]['zCW'] < l8['Z']['zLc'] && (this['zCH']['set']([gp], this['zFw'][gn]['zCW']),
                this['zCH']['needsUpdate'] = !0x0),
                this['zFw'][gn]['zrx'] >= gj)
                    gd && this['zbB']['zFd']()['zCV']()['zCj']()['zCK'](gk['zWW'], gk['zWz'], gk['zWH'], la['k']['zbh']),
                    this['zFZ'](gn);
                else {
                    if (gd) {
                        if (gT < gO && Math['floor'](gT / 0.2) !== Math['floor'](gO / 0.2)) {
                            var gq = this['zbB']['zbc']()['zFG'](gN, gr, gD)
                              , gA = this['zbB']['zbc']()['zFy'](gN, gr, gD)
                              , gK = lT['Z'][gq]['zWB'];
                            void 0x0 !== gK && this['zbB']['zFd']()['zCV']()['zCo'](gA, gK, -0x4b0, 0x1, 0x28 * l8['Z']['zLn'], 0x5 * l8['Z']['zLn'], 0x4);
                        }
                    }
                }
            }
            ,
            gE['zCu'] = function(gN, gr, gD) {
                var gQ = lE(gN, gr, gD);
                this['zFZ'](gQ);
            }
            ,
            gE['zFZ'] = function(gN) {
                if (gN in this['zFw']) {
                    if (this['zCT']['length'] > 0x1) {
                        var gr = this['zFw'][gN]
                          , gD = this['zCT'][this['zCT']['length'] - 0x1];
                        if (this['zCT'][gr['zCW']] = gD,
                        gD['zCW'] = gr['zCW'],
                        gD['zCW'] >= 0x0 && gD['zCW'] < l8['Z']['zLc']) {
                            var gQ = this['zbB']['zbc']()['zFy'](gD['zFR']['zWW'], gD['zFR']['zWz'], gD['zFR']['zWH']);
                            this['zCg']['position']['set'](gQ['zWW'], gQ['zWz'], gQ['zWH']),
                            this['zCg']['updateMatrix'](),
                            this['zCL']['setMatrixAt'](gD['zCW'], this['zCg']['matrix']),
                            this['zCH']['set']([gD['zCz']], gD['zCW']),
                            this['zCH']['needsUpdate'] = !0x0;
                        }
                    }
                    delete this['zFw'][gN],
                    this['zCT']['pop'](),
                    this['zCL']['count'] = Math['min'](l8['Z']['zLc'], this['zCT']['length']),
                    this['zCL']['instanceMatrix']['needsUpdate'] = !0x0;
                }
            }
            ,
            gE['zCD'] = function(gN, gr, gD) {
                var gQ = lE(gN, gr, gD);
                return gQ in this['zFw'] ? this['zFw'][gQ]['zrx'] : 0x0;
            }
            ,
            gE['zCb'] = function(gN, gr, gD, gQ, gd) {
                this['zCr'](gN, gr, gD, this['zCD'](gN, gr, gD) + gQ, gd);
            }
            ,
            gE['zbt'] = function() {}
            ,
            gm;
        }())
          , lG = l2(0x919b);
        function lO(gm, gE) {
            var gN = 'undefined' != typeof Symbol && gm[Symbol['iterator']] || gm['@@iterator'];
            if (gN)
                return (gN = gN['call'](gm))['next']['bind'](gN);
            if (Array['isArray'](gm) || (gN = function(gD, gQ) {
                if (!gD)
                    return;
                if ('string' == typeof gD)
                    return lq(gD, gQ);
                var gd = Object['prototype']['toString']['call'](gD)['slice'](0x8, -0x1);
                'Object' === gd && gD['constructor'] && (gd = gD['constructor']['name']);
                if ('Map' === gd || 'Set' === gd)
                    return Array['from'](gD);
                if ('Arguments' === gd || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/['test'](gd))
                    return lq(gD, gQ);
            }(gm)) || gE && gm && 'number' == typeof gm['length']) {
                gN && (gm = gN);
                var gr = 0x0;
                return function() {
                    return gr >= gm['length'] ? {
                        'done': !0x0
                    } : {
                        'done': !0x1,
                        'value': gm[gr++]
                    };
                }
                ;
            }
            throw new TypeError('Invalid\x20attempt\x20to\x20iterate\x20non-iterable\x20instance.\x0aIn\x20order\x20to\x20be\x20iterable,\x20non-array\x20objects\x20must\x20have\x20a\x20[Symbol.iterator]()\x20method.');
        }
        function lq(gm, gE) {
            (null == gE || gE > gm['length']) && (gE = gm['length']);
            for (var gN = 0x0, gr = new Array(gE); gN < gE; gN++)
                gr[gN] = gm[gN];
            return gr;
        }
        var lA = (function() {
            function gm(gN, gr, gD, gQ) {
                var gd = this;
                this['zCF'] = function(gk, gn, gj, gp) {
                    gd['zCC']['zCu'](gk, gn, gj);
                }
                ,
                this['zCi'] = function(gk, gn, gj, gp) {
                    gd['zCC']['zCr'](gk, gn, gj, gp, !0x0);
                }
                ,
                this['zFt'] = function(gk, gn, gj, gp, gT) {
                    if (!gd['zbx']['zbG'](gk, gn, gj)) {
                        var gZ = gd['zbx']['zFt'](gk, gn, gj, gp, gT)
                          , gy = new lj(gd['zFI'],gd['zbx'],gZ,gd);
                        gd['zCB']['set'](lm(gk, gn, gj), gy);
                    }
                }
                ,
                this['zCA'] = function(gk, gn, gj) {
                    if (gd['zbx']['zbG'](gk, gn, gj)) {
                        var gp = lm(gk, gn, gj);
                        gd['zbx']['zFc'](gk, gn, gj),
                        gd['zCB']['get'](gp)['zbt'](),
                        gd['zCB']['delete'](gp);
                    }
                }
                ,
                this['zCk'] = function(gk, gn, gj, gp, gT, gZ, gy) {
                    gd['zbx'] = new ln(gZ,gy),
                    gd['zCs']();
                }
                ,
                this['zCs'] = function() {
                    var gk = 0x46 * (gd['zbx']['zFk']()['zWz'] - gd['zbx']['zFA']()['zWz']);
                    if ((0x0,
                    lL['Fn'])() === lG['V4']['zrB']) {
                        var gn = Math['min'](0x1, Math['max'](0x0, gd['zbx']['zFs']()['size'] / gk)) / 0x2;
                        gn >= 0.5 && (gd['zCv'] = gd['zbx']['zbR']()),
                        lw['Z']['emit'](lg['x']['zCf'], gn >= 0.5 ? lG['V4']['zTJ'] : lG['V4']['zrB'], gn),
                        setTimeout(gd['zCs'], 0x64);
                    } else {
                        for (var gj = 0x0, gp = void 0x0; void 0x0 !== (gp = gd['zbx']['zFv']()); )
                            if (gd['zCB']['get'](gp['zbN']())['zFh'](!0x1),
                            gp['zFH'](),
                            ++gj >= 0x14 || 0x0 === gd['zbx']['zbR']()) {
                                var gT = Math['max'](0x0, Math['min'](0x1, 0x1 - gd['zbx']['zbR']() / gd['zCv'])) / 0x2 + 0.5;
                                lw['Z']['emit'](lg['x']['zCf'], lG['V4']['zTJ'], gT);
                                break;
                            }
                        gd['zbx']['zbR']() > 0x0 && setTimeout(gd['zCs'], 0x0);
                    }
                }
                ,
                this['zbK'] = function(gk) {
                    gd['zbx'] && ((0x0,
                    lL['aw'])() >= 0x1 && (gd['zCO'](),
                    gd['zFI']['zbn']()),
                    gd['zCy']['zuh'] = gd['zbx']['zFs']()['size'],
                    gd['zCC']['zbK'](gk));
                }
                ,
                this['zus'] = function(gk, gn) {
                    gd['zCP']['zus'](gk, gn),
                    gd['zFI']['zus'](gk, gn);
                }
                ,
                this['zCU'] = gN,
                this['zuT'] = gr,
                this['zCt'] = gD,
                this['zCy'] = gQ,
                this['zCn'] = new l7['Tme'](),
                this['zCn']['type'] = (0x0,
                ll['D_'])(),
                this['zCB'] = new Map(),
                this['zFI'] = new lM(this,Math['min'](0x3, l8['Z']['zLk'])),
                this['zCP'] = new lp(this),
                this['zCC'] = new ly(this),
                this['zCv'] = 0x0,
                this['zCc']();
            }
            var gE = gm['prototype'];
            return gE['zbc'] = function() {
                return this['zbx'];
            }
            ,
            gE['zCc'] = function() {
                lw['Z']['on'](lg['x']['zCG'], this['zCk']),
                lw['Z']['on'](lg['x']['zCQ'], this['zFt']),
                lw['Z']['on'](lg['x']['zCl'], this['zCA']),
                lw['Z']['on'](lg['x']['zCm'], this['zCi']),
                lw['Z']['on'](lg['x']['zCI'], this['zCF']);
            }
            ,
            gE['zCX'] = function() {
                lw['Z']['off'](lg['x']['zCG'], this['zCk']),
                lw['Z']['off'](lg['x']['zCQ'], this['zFt']),
                lw['Z']['off'](lg['x']['zCl'], this['zCA']),
                lw['Z']['off'](lg['x']['zCm'], this['zCi']),
                lw['Z']['off'](lg['x']['zCI'], this['zCF']);
            }
            ,
            gE['zbt'] = function() {
                this['zCX']();
                for (var gN, gr = lO(this['zCB']); !(gN = gr())['done']; ) {
                    var gD = gN['value'];
                    gD[0x0],
                    gD[0x1]['zbt']();
                }
                this['zFI']['zbt'](),
                this['zCP']['zbt']();
            }
            ,
            gE['zbl'] = function(gN, gr, gD, gQ, gd, gk) {
                var gn = lm(gr, gD, gQ);
                this['zCB']['has'](gn) && this['zCB']['get'](gn)['zFS'](gN, gd, gk);
            }
            ,
            gE['zbU'] = function(gN, gr) {
                this['zCP']['zFq'](gr);
            }
            ,
            gE['zCO'] = function() {
                var gN = 0x0;
                if (this['zbx']['zbR']() > 0x0) {
                    for (var gr = void 0x0; void 0x0 !== (gr = this['zbx']['zFv']()) && (this['zCB']['get'](gr['zbN']())['zFh'](!0x0),
                    gr['zFH'](),
                    !(++gN >= 0x2)); )
                        ;
                }
            }
            ,
            gE['zFQ'] = function(gN, gr, gD, gQ, gd) {
                var gk = this['zbx']['zFG'](gN, gr, gD);
                if (this['zbx']['zFQ'](gN, gr, gD, gQ),
                gd && gk !== gQ) {
                    var gn = this['zbx']['zFy'](gN, gr, gD)
                      , gj = lT['Z'][gQ]['zWB'];
                    gQ === la['k']['zbh'] && (gj = lT['Z'][gk]['zWB']),
                    void 0x0 !== gj && this['zCt']['zCV']()['zCo'](gn, gj, 0x0, 0x1, 0x28 * l8['Z']['zLn'], 0x5 * l8['Z']['zLn'], 0x4);
                }
            }
            ,
            gE['zFJ'] = function() {
                return this['zCn'];
            }
            ,
            gE['zFd'] = function() {
                return this['zCt'];
            }
            ,
            gE['zCY'] = function() {
                return this['zFI'];
            }
            ,
            gE['zCx'] = function() {
                return this['zCC'];
            }
            ,
            gm;
        }())
          , lK = l2(0x12a90)
          , lW = l2(0x1182)
          , C0 = l2(0x52c2)
          , C1 = l2['n'](C0)
          , C2 = l2(0x367b)
          , C3 = l2(0x15854)
          , C4 = (function() {
            function gm() {
                var gN = this;
                this['zCp'] = function() {
                    gN['zCJ'] = {},
                    gN['zCE'] = {};
                }
                ,
                this['zCS'] = function(gr) {
                    (0x0,
                    lL['D2'])() || (gr['deltaX'] > 0x0 || gr['deltaY'] > 0x0 ? gN['zCh'] = !0x0 : (gr['deltaX'] < 0x0 || gr['deltaY'] < 0x0) && (gN['zCe'] = !0x0));
                }
                ,
                this['zCM'] = function(gr) {
                    gN['zCN'](-gr['button']);
                }
                ,
                this['zCd'] = function(gr) {
                    gN['zCq'](-gr['button']);
                }
                ,
                this['zCw'] = function(gr) {
                    gN['zCN'](gr['keyCode']);
                }
                ,
                this['zCa'] = function(gr) {
                    gN['zCq'](gr['keyCode']);
                }
                ,
                this['zCJ'] = {},
                this['zCE'] = {},
                this['zCh'] = !0x1,
                this['zCe'] = !0x1,
                this['zCc']();
            }
            var gE = gm['prototype'];
            return gE['zCc'] = function() {
                document['addEventListener']('keydown', this['zCw'], !0x1),
                document['addEventListener']('keyup', this['zCa'], !0x1),
                document['addEventListener']('mousedown', this['zCM'], !0x1),
                document['addEventListener']('mouseup', this['zCd'], !0x1),
                document['addEventListener']('wheel', this['zCS'], !0x1),
                window['addEventListener']('blur', this['zCp'], !0x1);
            }
            ,
            gE['zCX'] = function() {
                document['removeEventListener']('keydown', this['zCw'], !0x1),
                document['removeEventListener']('keyup', this['zCa'], !0x1),
                document['removeEventListener']('mousedown', this['zCM'], !0x1),
                document['removeEventListener']('mouseup', this['zCd'], !0x1),
                document['removeEventListener']('wheel', this['zCS'], !0x1),
                window['removeEventListener']('blur', this['zCp'], !0x1);
            }
            ,
            gE['zbt'] = function() {
                this['zCX']();
            }
            ,
            gE['zCN'] = function(gN) {
                this['zCZ'](gN) || (lw['Z']['emit'](lg['x']['zbr'], gN),
                this['zCE'][gN] = !0x0),
                this['zCJ'][gN] = !0x0;
            }
            ,
            gE['zCq'] = function(gN) {
                delete this['zCJ'][gN],
                delete this['zCE'][gN];
            }
            ,
            gE['zCR'] = function(gN) {
                return this['zCZ'](gN);
            }
            ,
            gE['ziW'] = function(gN) {
                return !((0x0,
                lL['D2'])() || (0x0,
                lL['bt'])() || (0x0,
                lL['s9'])()) && this['zCZ'](gN);
            }
            ,
            gE['ziz'] = function(gN) {
                return !(0x0,
                lL['D2'])() && !(0x0,
                lL['bt'])() && this['zCZ'](gN);
            }
            ,
            gE['ziH'] = function(gN) {
                return !(0x0,
                lL['D2'])() && !(0x0,
                lL['bt'])() && this['ziT'](gN);
            }
            ,
            gE['zCZ'] = function(gN) {
                return !0x0 === this['zCJ'][gN];
            }
            ,
            gE['ziT'] = function(gN) {
                var gr = this['zCE'][gN];
                return delete this['zCE'][gN],
                gr;
            }
            ,
            gE['ziL'] = function() {
                return !((0x0,
                lL['D2'])() || (0x0,
                lL['bt'])() || (0x0,
                lL['s9'])()) && this['zig']();
            }
            ,
            gE['zir'] = function() {
                return !((0x0,
                lL['D2'])() || (0x0,
                lL['bt'])() || (0x0,
                lL['s9'])()) && this['ziD']();
            }
            ,
            gE['zig'] = function() {
                var gN = this['zCh'];
                return this['zCh'] = !0x1,
                gN;
            }
            ,
            gE['ziD'] = function() {
                var gN = this['zCe'];
                return this['zCe'] = !0x1,
                gN;
            }
            ,
            gm;
        }())
          , C5 = l2(0xa1ae)
          , C6 = l2(0xca09)
          , C7 = l2(0x11461)
          , C8 = function(gm) {
            function gE(gr, gD, gQ, gd, gk) {
                var gn;
                return (gn = gm['call'](this) || this)['ziV'] = function(gj) {
                    gn['zij'] = gj;
                }
                ,
                gn['ziK'] = function(gj, gp, gT) {
                    gn['zio'] = gj,
                    gn['ziu'] = gp,
                    gn['zib'] = gT,
                    gn['ziF'] = Date['now']();
                }
                ,
                gn['ziC'] = function() {
                    gn['zii'] = 0x0,
                    gn['ziB'] = 0x0,
                    gn['ziA'] = !0x0,
                    gn['zik'] = 0x0,
                    gn['zij'] = 0x1,
                    gn['zio'] = 0x0,
                    gn['ziu'] = 0x0,
                    gn['zib'] = 0x0,
                    gn['ziF'] = Date['now']();
                }
                ,
                gn['zus'] = function(gj, gp) {
                    if (0x0 === gn['zii']) {
                        gn['zis']['zWW'] -= gn['ziv']['zWz'],
                        gn['zis']['zWz'] -= gn['ziv']['zWW'],
                        gn['zis']['zWW'] = Math['max'](Math['PI'] / 0x2 - gn['zif'], Math['min'](Math['PI'] / 0x2 - gn['ziO'], gn['zis']['zWW'])),
                        Date['now']() - gn['ziF'] <= gn['zib'] ? gn['zik'] = Math['max'](0x0, Math['min'](gn['zij'], gn['zik'] + gn['zio'] * gj)) : gn['zik'] = Math['max'](0x0, Math['min'](gn['zij'], gn['zik'] - gn['ziu'] * gj));
                        var gT = 0.2
                          , gZ = 0.005;
                        gn['zik'] === gn['zij'] ? (gn['ziA'] ? gn['ziB'] = Math['min'](gZ, gn['ziB'] + gT * gj) : gn['ziB'] = Math['max'](-0.005, gn['ziB'] - gT * gj),
                        Math['abs'](gn['ziB']) === gZ && (gn['ziA'] = !gn['ziA'])) : (gn['ziB'] <= 0x0 ? gn['ziB'] = Math['min'](0x0, gn['ziB'] + gT * gj) : gn['ziB'] = Math['max'](0x0, gn['ziB'] - gT * gj),
                        gn['ziA'] = !0x0),
                        gn['ziy']();
                    } else
                        0x1 === gn['zii'] && (gn['ziP']['setFromVector3'](gn['ziU']),
                        gn['ziP']['theta'] -= gn['ziv']['zWW'],
                        gn['ziP']['phi'] -= gn['ziv']['zWz'],
                        gn['ziP']['makeSafe'](),
                        gn['ziP']['radius'] = gn['zit'],
                        gn['ziU']['setFromSpherical'](gn['ziP']),
                        gn['zuT']['position']['copy'](gn['zin']['position'])['add'](gn['ziU']),
                        gn['zuT']['lookAt'](gn['zin']['position']));
                    gn['ziv']['set'](0x0, 0x0);
                }
                ,
                gn['ziy'] = function() {
                    gn['zic']['zWW'] = gn['zis']['zWW'] + gn['zik'] + gn['ziB'],
                    gn['zic']['zWz'] = gn['zis']['zWz'],
                    gn['zuT']['quaternion']['setFromEuler'](gn['zic']),
                    gn['ziG']['quaternion']['setFromEuler'](gn['zic']);
                }
                ,
                gn['ziQ'] = function(gj) {
                    if (gn['zil']) {
                        if (gn['zim'])
                            gn['zim'] = !0x1;
                        else {
                            var gp = gj['movementX'] || gj['mozMovementX'] || gj['webkitMovementX'] || 0x0
                              , gT = gj['movementY'] || gj['mozMovementY'] || gj['webkitMovementY'] || 0x0;
                            gn['zoa']['ziI'] && (gT *= -0x1);
                            var gZ = 0.0002
                              , gy = (0x0,
                            C2['MH'])(gn['ziX']['ziY'](), gn['ziX']['zix']());
                            gy && (0x0,
                            C7['jf'])(gn['ziX']['zix']()['zrg']['zip']()['ziJ']()['ziE']()) ? gZ *= gn['zoa']['ziS'] : gy && (gZ *= gn['zoa']['zih']),
                            gn['ziv']['zWW'] += gp * gn['zoa']['zie'] * gZ,
                            gn['ziv']['zWz'] += gT * gn['zoa']['zie'] * gZ,
                            gn['dispatchEvent'](gn['ziM']);
                        }
                    }
                }
                ,
                gn['ziN'] = function() {
                    gn['zid']['ownerDocument']['pointerLockElement'] === gn['zid'] ? (gn['dispatchEvent'](gn['ziq']),
                    gn['zil'] = !0x0) : (gn['dispatchEvent'](gn['ziw']),
                    gn['zil'] = !0x1);
                }
                ,
                gn['zia'] = function(gj) {
                    console['error']('THREE.PointerLockControls:\x20Unable\x20to\x20use\x20Pointer\x20Lock\x20API');
                }
                ,
                gn['ziZ'] = function() {
                    gn['zid']['ownerDocument']['addEventListener']('mousemove', gn['ziQ'], !0x1),
                    gn['zid']['ownerDocument']['addEventListener']('pointerlockchange', gn['ziN'], !0x1),
                    gn['zid']['ownerDocument']['addEventListener']('pointerlockerror', gn['zia'], !0x1),
                    lw['Z']['on'](lg['x']['ziR'], gn['zBW']);
                }
                ,
                gn['zBz'] = function() {
                    gn['zid']['ownerDocument']['removeEventListener']('mousemove', gn['ziQ'], !0x1),
                    gn['zid']['ownerDocument']['removeEventListener']('pointerlockchange', gn['ziN'], !0x1),
                    gn['zid']['ownerDocument']['removeEventListener']('pointerlockerror', gn['zia'], !0x1),
                    lw['Z']['off'](lg['x']['ziR'], gn['zBW']);
                }
                ,
                gn['zBW'] = function() {
                    gn['zim'] = !0x0;
                }
                ,
                gn['zBH'] = function() {
                    gn['zBz']();
                }
                ,
                gn['zFJ'] = function() {
                    return gn['zuT'];
                }
                ,
                gn['zBT'] = function(gj) {
                    return gj['set'](0x0, 0x0, -0x1)['applyQuaternion'](gn['zuT']['quaternion']);
                }
                ,
                gn['zBL'] = function(gj) {
                    gn['zBg']['setFromMatrixColumn'](gn['zuT']['matrix'], 0x0),
                    gn['zBg']['crossVectors'](gn['zuT']['up'], gn['zBg']),
                    gn['zuT']['position']['addScaledVector'](gn['zBg'], gj);
                }
                ,
                gn['zBr'] = function(gj) {
                    gn['zBg']['setFromMatrixColumn'](gn['zuT']['matrix'], 0x0),
                    gn['zuT']['position']['addScaledVector'](gn['zBg'], gj);
                }
                ,
                gn['zBD'] = function() {
                    gn['zBV']() && gn['zBj'](gn['zid']);
                }
                ,
                gn['zBK'] = function() {
                    gn['zBV']() && gn['zid']['ownerDocument']['exitPointerLock']();
                }
                ,
                gn['zBV'] = function() {
                    return 'pointerLockElement'in document || 'mozPointerLockElement'in document || 'webkitPointerLockElement'in document;
                }
                ,
                gn['zoa'] = gr,
                gn['zuT'] = gD,
                gn['ziG'] = gQ,
                gn['zid'] = gd,
                gn['ziX'] = gk,
                gn['zil'] = !0x1,
                gn['ziO'] = 0x0,
                gn['zif'] = Math['PI'],
                gn['ziM'] = {
                    'type': 'change'
                },
                gn['ziq'] = {
                    'type': 'lock'
                },
                gn['ziw'] = {
                    'type': 'unlock'
                },
                gn['zic'] = new l7['USm'](0x0,0x0,0x0,'YXZ'),
                gn['zis'] = new l7['USm'](0x0,0x0,0x0,'YXZ'),
                gn['ziB'] = 0x0,
                gn['ziA'] = !0x0,
                gn['zik'] = 0x0,
                gn['zij'] = 0x1,
                gn['zio'] = 0x0,
                gn['ziu'] = 0x0,
                gn['zib'] = 0x0,
                gn['ziF'] = Date['now'](),
                gn['zBg'] = new l7['Pa4'](),
                gn['zii'] = 0x0,
                gn['ziv'] = new l7['FM8'](0x0,0x0),
                gn['ziP'] = new l7['$V'](),
                gn['zin'] = void 0x0,
                gn['zit'] = 0x0,
                gn['ziU'] = new l7['Pa4'](0x0,0x0,0x0),
                gn['zim'] = !0x1,
                gn['ziZ'](),
                gn;
            }
            (0x0,
            C6['Z'])(gE, gm);
            var gN = gE['prototype'];
            return gN['zBo'] = function(gr, gD, gQ) {
                this['ziC'](),
                this['zii'] = 0x1,
                this['zin'] = gr,
                this['zit'] = gD,
                void 0x0 !== gQ && this['ziU']['set'](gQ['zWW'], gQ['zWz'], gQ['zWH']);
            }
            ,
            gN['zBu'] = function(gr) {
                this['ziC'](),
                this['zin'] = void 0x0,
                this['zit'] = 0x0,
                this['zis']['zWW'] = gr['zWW'],
                this['zis']['zWz'] = gr['zWz'];
            }
            ,
            gN['zBb'] = function() {
                return this['zil'];
            }
            ,
            gN['zBj'] = function(gr) {
                var gD = gr['requestPointerLock']({
                    'unadjustedMovement': !0x0
                });
                if (gD)
                    return gD['then'](function() {})['catch'](function(gQ) {
                        if ('NotSupportedError' === gQ['name'])
                            return gr['requestPointerLock']();
                        console['error']('Pointer\x20lock\x20error\x20' + gQ['name']);
                    });
                console['log']('disabling\x20mouse\x20acceleration\x20is\x20not\x20supported');
            }
            ,
            gN['zBF'] = function() {
                return this['zis'];
            }
            ,
            gE;
        }(l7['pBf'])
          , C9 = l2(0x1532c)
          , Cl = l2(0x184e3)
          , CC = l2(0x17a74)
          , Cw = l2(0x93f9)
          , Cg = l2(0x4119)
          , Cv = function() {
            this['walkedDistFromLastSoundPlayed'] = 0x0,
            this['prevWaterSoundPlayedTime'] = 0x0,
            this['swamDistFromLastSoundPlayed'] = 0x0;
        }
          , CF = function(gm, gE, gN, gr, gD, gQ, gd) {
            var gk = gd ? gQ['zBC']['bind'](gQ) : function(gq, gA) {
                gQ['zBi'](gm, gq, gA);
            }
              , gn = gd ? gQ['zBB']['bind'](gQ) : function(gq, gA, gK) {
                gQ['zCo'](gm, gq, gA, gK);
            }
            ;
            void 0x0 === gr['prevOnGround'] && (gr['prevOnGround'] = gN),
            void 0x0 === gr['prevPos'] && (gr['prevPos'] = (0x0,
            lF['dg'])(gm));
            var gj = gD['zFG'](gr['prevPos']['zWW'] / l8['Z']['zLn'], gr['prevPos']['zWz'] / l8['Z']['zLn'], gr['prevPos']['zWH'] / l8['Z']['zLn'])
              , gp = gD['zFG'](gm['zWW'] / l8['Z']['zLn'], gm['zWz'] / l8['Z']['zLn'], gm['zWH'] / l8['Z']['zLn'])
              , gT = gD['zFG'](gm['zWW'] / l8['Z']['zLn'], (gm['zWz'] + l8['Z']['zLn']) / l8['Z']['zLn'], gm['zWH'] / l8['Z']['zLn'])
              , gZ = gD['zFG'](gm['zWW'] / l8['Z']['zLn'], (gm['zWz'] + 0x2 * l8['Z']['zLn']) / l8['Z']['zLn'], gm['zWH'] / l8['Z']['zLn']);
            if ((0x0,
            lX['PP'])(gp))
                gr['walkedDistFromLastSoundPlayed'] = 0x0,
                (0x0,
                lX['PP'])(gj) ? !(0x0,
                lX['PP'])(gp) || (0x0,
                lX['PP'])(gT) && (0x0,
                lX['PP'])(gZ) || (gr['swamDistFromLastSoundPlayed'] += (0x0,
                lF['qR'])(gm, gr['prevPos']),
                gr['swamDistFromLastSoundPlayed'] >= 0x4 && (gn(Cg['k']['zBA'], 0x960 * Math['random']() - 0x4b0, 0.2),
                gr['swamDistFromLastSoundPlayed'] = 0x0)) : (Date['now']() - gr['prevWaterSoundPlayedTime'] < 0x3e8 ? gn(Cg['k']['zBk'], 0x320, 0.1) : gn(Cg['k']['zBk']),
                gr['prevWaterSoundPlayedTime'] = Date['now']());
            else {
                if (gE !== lW['b']['zBs']) {
                    gr['swamDistFromLastSoundPlayed'] = 0x0;
                    var gy = (0x0,
                    C2['hO'])(gm, gD)
                      , gG = lT['Z'][gy]['zWB']
                      , gO = 0x3e8;
                    gy !== la['k']['zBv'] && gy !== la['k']['zBf'] || (gO = 0x0),
                    void 0x0 !== gG && (!gr['prevOnGround'] && gN ? (gk(gG, gO),
                    gr['walkedDistFromLastSoundPlayed'] = 0x0) : gN && gr['prevOnGround'] && (gr['walkedDistFromLastSoundPlayed'] += (0x0,
                    lF['qR'])(gm, gr['prevPos']),
                    gr['walkedDistFromLastSoundPlayed'] >= 1.5 && (gk(gG, gO),
                    gr['walkedDistFromLastSoundPlayed'] = 0x0)));
                }
            }
            gr['prevPos'] = (0x0,
            lF['dg'])(gm),
            gr['prevOnGround'] = gN;
        }
          , CL = function(gm, gE, gN, gr) {
            var gD = document['createElement']('canvas')['getContext']('2d')
              , gQ = gE + 'px\x20Arial';
            gD['font'] = gQ;
            var gd = gD['measureText'](gm)['width'] + 0x4
              , gk = gE + 0x4;
            gD['canvas']['width'] = gd,
            gD['canvas']['height'] = gk,
            gD['font'] = gQ,
            gD['textBaseline'] = 'top',
            gD['fillStyle'] = 'rgba(0,\x200,\x200,\x200)',
            gD['fillRect'](0x0, 0x0, gd, gk),
            gD['fillStyle'] = gN,
            gD['fillText'](gm, 0x2, 0x2);
            var gn = new l7['ROQ'](gD['canvas']);
            gn['encoding'] = l7['knz'],
            gn['minFilter'] = l7['wem'],
            gn['wrapS'] = l7['uWy'],
            gn['wrapT'] = l7['uWy'];
            var gj = new l7['xeV']({
                'map': gn,
                'transparent': !0x0,
                'zTQ': !0x1,
                'fog': !0x1
            })
              , gp = new l7['jyi'](gj);
            gp['type'] = (0x0,
            ll['D_'])();
            var gT = 0.2 * gr;
            return gp['scale']['set'](gd / gk * 0x1 * gT, 0x1 * gT, 0x1),
            gp['zTt'] = -0x1,
            gp;
        }
          , CH = l2(0x2259)
          , CS = l2(0x62db)
          , Cb = l2(0xe8f)
          , Cc = l2(0x1597a)
          , Ch = 0x0
          , CJ = 0x1
          , CY = 0x2
          , CV = 0x3
          , CU = l2(0x1483d)
          , Cs = l2(0x125dd)
          , CI = l2(0x1f63);
        function CP(gm, gE) {
            var gN = 'undefined' != typeof Symbol && gm[Symbol['iterator']] || gm['@@iterator'];
            if (gN)
                return (gN = gN['call'](gm))['next']['bind'](gN);
            if (Array['isArray'](gm) || (gN = function(gD, gQ) {
                if (!gD)
                    return;
                if ('string' == typeof gD)
                    return CR(gD, gQ);
                var gd = Object['prototype']['toString']['call'](gD)['slice'](0x8, -0x1);
                'Object' === gd && gD['constructor'] && (gd = gD['constructor']['name']);
                if ('Map' === gd || 'Set' === gd)
                    return Array['from'](gD);
                if ('Arguments' === gd || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/['test'](gd))
                    return CR(gD, gQ);
            }(gm)) || gE && gm && 'number' == typeof gm['length']) {
                gN && (gm = gN);
                var gr = 0x0;
                return function() {
                    return gr >= gm['length'] ? {
                        'done': !0x0
                    } : {
                        'done': !0x1,
                        'value': gm[gr++]
                    };
                }
                ;
            }
            throw new TypeError('Invalid\x20attempt\x20to\x20iterate\x20non-iterable\x20instance.\x0aIn\x20order\x20to\x20be\x20iterable,\x20non-array\x20objects\x20must\x20have\x20a\x20[Symbol.iterator]()\x20method.');
        }
        function CR(gm, gE) {
            (null == gE || gE > gm['length']) && (gE = gm['length']);
            for (var gN = 0x0, gr = new Array(gE); gN < gE; gN++)
                gr[gN] = gm[gN];
            return gr;
        }
        var Cf = function(gm) {
            function gE(gr, gD) {
                var gQ;
                return (gQ = gm['call'](this, gD, CS['p']['zBO'], gr) || this)['zbK'] = function(gd) {
                    gQ['zBy'] && CF((0x0,
                    lF['w1'])(gQ['zFJ']()['position']), gQ['zBP'], gQ['zBU'], gQ['zBt'], gQ['zBn']()['zFd']()['zBc']()['zbc'](), gQ['zBn']()['zFd']()['zCV'](), !0x1);
                }
                ,
                gQ['zBG'] = l9['Z']['zBQ'](CU['E']['zBl']),
                l9['Z']['zBm'](gQ['zBG']),
                gQ['zFJ']()['add'](gQ['zBG']),
                gQ['zBG']['visible'] = !0x1,
                gQ['zBG']['matrixAutoUpdate'] = !0x1,
                gQ['zBI'] = '',
                gQ['zBX'] = 'white',
                gQ['zBY'] = Cc['C']['zzu'],
                gQ['zBx'] = Cs['Z']['NONE'],
                gQ['zBp'] = 0x0,
                gQ['zBJ'] = 0x0,
                gQ['zBE'] = [],
                gQ['zBS'] = [],
                gQ['zBP'] = lW['b']['zBh'],
                gQ['zBe'] = (0x0,
                C3['Ak'])(0x0, 0x0),
                gQ['zBM'] = !0x1,
                gQ['zBN'] = !0x1,
                gQ['zBd'] = 0x0,
                gQ['zBq'] = l9['Z']['zBw'](),
                gQ['zBq']['matrixAutoUpdate'] = !0x1,
                gQ['zFJ']()['add'](gQ['zBq']),
                gQ['zBa'] = new l7['Xcj'](gQ['zBq']),
                gQ['zBq']['traverse'](function(gd) {
                    gd['material'] && (gQ['zBE']['push'](gd['material']),
                    gd['material']['fog'] = !0x1);
                }),
                gQ['zBZ'] = gQ['zBa']['clipAction'](l9['Z']['zBR']()),
                gQ['zAW'] = gQ['zBa']['clipAction'](l9['Z']['zAz']()),
                gQ['zAH'] = gQ['zBa']['clipAction'](l9['Z']['zAT']()),
                gQ['zAL'] = gQ['zBa']['clipAction'](l9['Z']['zAg']()),
                gQ['zAr'] = gQ['zBa']['clipAction'](l9['Z']['zAD']()),
                gQ['zAV'] = gQ['zBa']['clipAction'](l9['Z']['zAj']()),
                gQ['zAK'] = gQ['zBa']['clipAction'](l9['Z']['zAo']()),
                gQ['zAu'] = gQ['zBa']['clipAction'](l9['Z']['zAb']()),
                gQ['zAF'] = gQ['zBa']['clipAction'](l9['Z']['zAC']()),
                gQ['zAi'] = gQ['zBa']['clipAction'](l9['Z']['zAB']()),
                gQ['zAA'] = gQ['zBa']['clipAction'](l9['Z']['zAk']()),
                gQ['zAs'] = gQ['zBa']['clipAction'](l9['Z']['zAv']()),
                gQ['zAf'] = gQ['zBa']['clipAction'](l9['Z']['zAO']()),
                gQ['zAy'] = gQ['zBa']['clipAction'](l9['Z']['zAP']()),
                gQ['zAU'] = gQ['zBa']['clipAction'](l9['Z']['zAt']()),
                gQ['zAn'] = gQ['zBa']['clipAction'](l9['Z']['zAc']()),
                gQ['zAG'] = gQ['zBa']['clipAction'](l9['Z']['zAQ']()),
                gQ['zAl'] = gQ['zBa']['clipAction'](l9['Z']['zAm']()),
                gQ['zAI'] = gQ['zBa']['clipAction'](l9['Z']['zAX']()),
                gQ['zAY'] = gQ['zBa']['clipAction'](l9['Z']['zAx']()),
                gQ['zAp'] = gQ['zBa']['clipAction'](l9['Z']['zAJ']()),
                gQ['zAE'] = gQ['zBa']['clipAction'](l9['Z']['zAS']()),
                gQ['zAh'] = gQ['zBa']['clipAction'](l9['Z']['zAe']()),
                gQ['zAV']['setEffectiveWeight'](0x0),
                gQ['zAK']['setEffectiveWeight'](0x0),
                gQ['zAu']['setEffectiveWeight'](0x0),
                gQ['zAF']['setEffectiveWeight'](0x0),
                gQ['zAi']['setEffectiveWeight'](0x0),
                gQ['zAA']['setEffectiveWeight'](0x0),
                gQ['zAL']['setEffectiveTimeScale'](0x2),
                gQ['zAr']['setEffectiveTimeScale'](0x1),
                gQ['zAs']['setEffectiveWeight'](0x0),
                gQ['zAf']['setEffectiveWeight'](0x0),
                gQ['zAy']['setEffectiveWeight'](0x0),
                gQ['zAU']['setEffectiveWeight'](0x0),
                gQ['zAn']['setEffectiveWeight'](0x0),
                gQ['zAG']['setEffectiveWeight'](0x0),
                gQ['zAl']['setEffectiveWeight'](0x0),
                gQ['zAI']['setEffectiveWeight'](0x0),
                gQ['zAY']['setEffectiveWeight'](0x0),
                gQ['zAp']['setEffectiveWeight'](0x0),
                gQ['zAE']['setEffectiveWeight'](0x0),
                gQ['zAh']['setEffectiveWeight'](0x0),
                gQ['zAV']['play'](),
                gQ['zAK']['play'](),
                gQ['zAu']['play'](),
                gQ['zAF']['play'](),
                gQ['zAi']['play'](),
                gQ['zAA']['play'](),
                gQ['zAs']['play'](),
                gQ['zAf']['play'](),
                gQ['zAy']['play'](),
                gQ['zAU']['play'](),
                gQ['zAn']['play'](),
                gQ['zAG']['play'](),
                gQ['zAl']['play'](),
                gQ['zAI']['play'](),
                gQ['zAY']['play'](),
                gQ['zAp']['play'](),
                gQ['zAE']['play'](),
                gQ['zAh']['play'](),
                gQ['zAl']['paused'] = !0x0,
                gQ['zAI']['paused'] = !0x0,
                gQ['zAY']['paused'] = !0x0,
                gQ['zAp']['paused'] = !0x0,
                gQ['zAE']['paused'] = !0x0,
                gQ['zAh']['paused'] = !0x0,
                gQ['zAl']['setLoop'](l7['jAl'], 0x1),
                gQ['zAI']['setLoop'](l7['jAl'], 0x1),
                gQ['zAY']['setLoop'](l7['jAl'], 0x1),
                gQ['zAp']['setLoop'](l7['jAl'], 0x1),
                gQ['zAE']['setLoop'](l7['jAl'], 0x1),
                gQ['zAh']['setLoop'](l7['jAl'], 0x1),
                gQ['zAl']['clampWhenFinished'] = !0x0,
                gQ['zAI']['clampWhenFinished'] = !0x0,
                gQ['zAY']['clampWhenFinished'] = !0x0,
                gQ['zAp']['clampWhenFinished'] = !0x0,
                gQ['zAE']['clampWhenFinished'] = !0x0,
                gQ['zAh']['clampWhenFinished'] = !0x0,
                gQ['zAL']['play'](),
                gQ['zAr']['stop'](),
                gQ['zAL']['paused'] = !0x0,
                gQ['zAr']['paused'] = !0x0,
                gQ['zBt'] = new Cv(),
                gQ['zAM'] = !0x0,
                gQ['zAN'] = (0x0,
                C7['YJ'])(Cw['q']['zzc']),
                gQ['zBU'] = !0x1,
                gQ['zBy'] = !0x0,
                gQ['zAd']((0x0,
                lF['XX'])(0x0, -0x270f, 0x0)),
                gQ['zAq'] = !0x0,
                gQ;
            }
            (0x0,
            C6['Z'])(gE, gm);
            var gN = gE['prototype'];
            return gN['zAw'] = function() {
                this['zAa'] && (this['zAZ']()['remove'](this['zAa']),
                l9['Z']['zAR'](this['zAa']),
                this['zAa'] = void 0x0);
            }
            ,
            gN['zbt'] = function() {
                this['zAw'](),
                l9['Z']['zkW'](this['zBq']),
                l9['Z']['zkW'](this['zBG']);
                for (var gr = 0x0; gr < this['zBS']['length']; gr++) {
                    var gD = this['zBS'][gr];
                    gD['sprite']['geometry']['dispose'](),
                    gD['sprite']['material']['map']['dispose'](),
                    gD['sprite']['material']['dispose']();
                }
                this['zkz'] && (this['zkz']['geometry']['dispose'](),
                this['zkz']['material']['map']['dispose'](),
                this['zkz']['material']['dispose']());
            }
            ,
            gN['zus'] = function(gr, gD) {
                this['zBM'] && this['zAL']['time'] >= 0.8 && (this['zAL']['paused'] = !0x0,
                this['zBM'] = !0x1),
                this['zBN'] && this['zAr']['time'] >= 0.8 && (this['zAr']['paused'] = !0x0,
                this['zBN'] = !0x1),
                0x0 === this['zBd'] && this['zAl']['time'] >= 0x1 / 0x3 && (this['zAl']['paused'] = !0x0,
                this['zAI']['paused'] = !0x0,
                this['zAY']['paused'] = !0x0,
                this['zAp']['paused'] = !0x0,
                this['zAE']['paused'] = !0x0,
                this['zAh']['paused'] = !0x0,
                this['zBd'] = 0x1),
                this['zBa']['update'](gr);
                var gQ = Date['now']() - this['zBJ']
                  , gd = l8['Z']['zgH']
                  , gk = l8['Z']['zgT'];
                if (gQ > gd) {
                    var gn = 0x1 - Math['max'](0x0, (gd + gk - gQ) / gk);
                    this['zkH'](0x1, gn, gn);
                }
                for (var gj = 0x0; gj < this['zBS']['length']; gj++) {
                    var gp = this['zBS'][gj];
                    gp['sprite']['position']['set'](gp['sprite']['position']['zWW'] + 0x2 * gp['dir']['zWW'] * gr, gp['sprite']['position']['zWz'] + 0x3 * gp['dir']['zWz'] * gr, gp['sprite']['position']['zWH'] + 0x2 * gp['dir']['zWH'] * gr),
                    Date['now']() - gp['spawnTime'] > 0x320 && (this['zFJ']()['remove'](gp['sprite']),
                    gp['sprite']['geometry']['dispose'](),
                    gp['sprite']['material']['map']['dispose'](),
                    gp['sprite']['material']['dispose'](),
                    this['zBS'][gj] = this['zBS'][this['zBS']['length'] - 0x1],
                    this['zBS']['pop'](),
                    --gj);
                }
            }
            ,
            gN['zkT'] = function() {
                var gr = this['zAN']
                  , gD = (this['zBP'] === lW['b']['zBs'] ? l8['Z']['zLI'] : l8['Z']['zLQ'],
                (0x0,
                lF['w1'])(this['zFJ']()['position']))
                  , gQ = (0x0,
                C3['I$'])(this['zBe']);
                gQ['zWz'] = -gQ['zWz'];
                var gd = (0x0,
                lb['ny'])(gQ);
                (0x0,
                lF['$j'])(gD, (0x0,
                lF['XX'])(0x1 * gd['zWW'], 0x1 * gd['zWz'], 0x1 * gd['zWH']));
                for (var gk = 0x0; gk < gr['zkL'](); gk++)
                    this['zBn']()['zFd']()['zkg']()['zkr'](gD, gd, 0x0);
                this['zBn']()['zFd']()['zCV']()['zCo']((0x0,
                lF['w1'])(this['zFJ']()['position']), gr['zkD'](), 0x0, 0x1, 0xc8 * l8['Z']['zLn'], 0x1e * l8['Z']['zLn'], 0xa);
            }
            ,
            gN['zkV'] = function() {
                this['zBn']()['zFd']()['zCV']()['zCo']((0x0,
                lF['w1'])(this['zFJ']()['position']), Cg['k']['zkj'], 0x0, 0x1, 0x50 * l8['Z']['zLn'], 0x5 * l8['Z']['zLn'], 0x5);
            }
            ,
            gN['zkK'] = function() {
                this['zBn']()['zFd']()['zCV']()['zCo']((0x0,
                lF['w1'])(this['zFJ']()['position']), Cg['k']['zko'], 0x0, 0x1, 0x50 * l8['Z']['zLn'], 0x5 * l8['Z']['zLn'], 0x5);
            }
            ,
            gN['zku'] = function(gr, gD, gQ) {
                var gd = CL(gr['toString'](), 0x40, gD, gQ);
                gd['material']['zTG'] = !0x1,
                gd['position']['set'](0x0, 0x1, 0x0),
                this['zFJ']()['add'](gd);
                var gk = (0x0,
                lF['XX'])(0x2 * Math['random']() - 0x1, 0x2 * Math['random']() + 0x1, 0x2 * Math['random']() - 0x1);
                (0x0,
                lF['cz'])(gk),
                this['zBS']['push']({
                    'sprite': gd,
                    'dir': gk,
                    'spawnTime': Date['now']()
                });
            }
            ,
            gN['zkb'] = function(gr) {
                for (var gD, gQ = CP(gr); !(gD = gQ())['done']; ) {
                    var gd = gD['value'];
                    switch (gd['zkF']) {
                    case Cb['m']['zkC']:
                        this['zki'](gd['zkB']);
                        break;
                    case Cb['m']['zkA']:
                        this['zBX'] = gd['zkB'];
                        break;
                    case Cb['m']['zkk']:
                        this['zks'](gd['zkB']);
                        break;
                    case Cb['m']['zkv']:
                        this['zBx'] = gd['zkB'];
                        break;
                    case Cb['m']['zkf']:
                        this['zBp'] = gd['zkB'];
                        break;
                    case Cb['m']['zkO']:
                        this['zky'](gd['zkB']);
                        break;
                    case Cb['m']['zkP']:
                        var gk = gd['zkB'];
                        this['zkU'](0x7 & gk),
                        this['zBU'] = (0x8 & gk) > 0x0;
                        break;
                    case Cb['m']['zkt']:
                        var gn = gd['zkB'];
                        this['zFJ']()['visible'] = gn,
                        this['zAq'] = gn;
                    }
                }
            }
            ,
            gN['zkn'] = function(gr) {
                switch (gr) {
                case Ch:
                    this['zkT']();
                    break;
                case CJ:
                    this['zkV']();
                    break;
                case CY:
                    this['zkK']();
                    break;
                case CV:
                    this['zAN']['ziE']() === Cw['q']['zzc'] && this['zAl']['paused'] && (0x1 === this['zBd'] ? this['zBd'] = 0x2 : 0x2 === this['zBd'] && (this['zAl']['reset'](),
                    this['zAI']['reset'](),
                    this['zAY']['reset'](),
                    this['zAp']['reset'](),
                    this['zAE']['reset'](),
                    this['zAh']['reset'](),
                    this['zBd'] = 0x0),
                    this['zAl']['paused'] = !0x1,
                    this['zAI']['paused'] = !0x1,
                    this['zAY']['paused'] = !0x1,
                    this['zAp']['paused'] = !0x1,
                    this['zAE']['paused'] = !0x1,
                    this['zAh']['paused'] = !0x1);
                }
            }
            ,
            gN['zAd'] = function(gr) {
                this['setModelPos'](gr),
                this['zFJ']()['updateMatrix'](),
                this['zBq']['updateMatrix'](),
                this['zBG']['updateMatrix']();
            }
            ,
            gN['zkc'] = function(gr) {
                this['zkG'](gr['zWW']),
                this['zkQ'](-gr['zWz']),
                this['zFJ']()['updateMatrix'](),
                this['zBq']['updateMatrix'](),
                this['zBG']['updateMatrix']();
            }
            ,
            gN['setModelPos'] = function(gr) {
                var gD = (0x0,
                lF['XX'])(this['zFJ']()['position']['zWW'], this['zFJ']()['position']['zWz'], this['zFJ']()['position']['zWH']);
                this['zAM'] && (gD = gr,
                this['zAM'] = !0x1),
                this['zFJ']()['position']['set'](gr['zWW'], gr['zWz'], gr['zWH']),
                (gr['zWW'] - gD['zWW']) * (gr['zWW'] - gD['zWW']) + (gr['zWH'] - gD['zWH']) * (gr['zWH'] - gD['zWH']) >= 0.0001 ? (this['zAr']['paused'] && (this['zAr']['paused'] = !0x1),
                this['zAr']['setLoop'](l7['YKA'], 0x1 / 0x0),
                this['zAL']['paused'] && (this['zAL']['paused'] = !0x1),
                this['zAL']['setLoop'](l7['YKA'], 0x1 / 0x0)) : (this['zAr']['time'] < 0.8 ? this['zBN'] = !0x0 : (this['zAr']['setLoop'](l7['jAl'], 0x1),
                this['zAr']['clampWhenFinished'] = !0x0),
                this['zAL']['time'] < 0.8 ? this['zBM'] = !0x0 : (this['zAL']['setLoop'](l7['jAl'], 0x1),
                this['zAL']['clampWhenFinished'] = !0x0));
            }
            ,
            gN['zkl'] = function() {
                this['zAV']['setEffectiveWeight'](0x0),
                this['zAu']['setEffectiveWeight'](0x0),
                this['zAK']['setEffectiveWeight'](0x0),
                this['zAF']['setEffectiveWeight'](0x0),
                this['zAA']['setEffectiveWeight'](0x0),
                this['zAi']['setEffectiveWeight'](0x0),
                this['zAs']['setEffectiveWeight'](0x0),
                this['zAy']['setEffectiveWeight'](0x0),
                this['zAf']['setEffectiveWeight'](0x0),
                this['zAU']['setEffectiveWeight'](0x0),
                this['zAG']['setEffectiveWeight'](0x0),
                this['zAn']['setEffectiveWeight'](0x0),
                this['zAl']['setEffectiveWeight'](0x0),
                this['zAI']['setEffectiveWeight'](0x0),
                this['zAY']['setEffectiveWeight'](0x0),
                this['zAp']['setEffectiveWeight'](0x0),
                this['zAE']['setEffectiveWeight'](0x0),
                this['zAh']['setEffectiveWeight'](0x0);
                var gr = this['zAV']
                  , gD = this['zAK']
                  , gQ = this['zAu']
                  , gd = this['zAF']
                  , gk = this['zAi']
                  , gn = this['zAA'];
                if (this['zAN']['zkm']() === CI['E']['zkI'] ? (gr = this['zAs'],
                gD = this['zAf'],
                gQ = this['zAy'],
                gd = this['zAU'],
                gk = this['zAn'],
                gn = this['zAG']) : this['zAN']['zkm']() === CI['E']['zzc'] && (gr = this['zAl'],
                gD = this['zAI'],
                gQ = this['zAY'],
                gd = this['zAp'],
                gk = this['zAE'],
                gn = this['zAh']),
                void 0x0 !== this['zAa'] && (this['zBP'] === lW['b']['zkX'] || this['zBP'] === lW['b']['zkY'] ? this['zAa']['visible'] = !0x1 : this['zAa']['visible'] = !0x0),
                this['zBP'] === lW['b']['zkX']) {
                    var gj = Math['abs'](Math['min'](this['zBe']['zWW'] / (Math['PI'] / 0x2), 0x0));
                    this['zBZ']['setEffectiveWeight'](0x1 - gj),
                    this['zAW']['setEffectiveWeight'](gj);
                } else {
                    if (this['zBP'] === lW['b']['zBh'] || this['zBP'] === lW['b']['zkx'] || this['zBP'] === lW['b']['zBs'] || this['zBP'] === lW['b']['zkp']) {
                        var gp = Math['abs'](this['zBe']['zWW'] / (Math['PI'] / 0x2));
                        this['zBe']['zWW'] <= 0x0 ? this['zBP'] === lW['b']['zBs'] ? (gd['setEffectiveWeight'](0x1 - gp),
                        gn['setEffectiveWeight'](gp),
                        gk['setEffectiveWeight'](0x0)) : (gr['setEffectiveWeight'](0x1 - gp),
                        gQ['setEffectiveWeight'](gp),
                        gD['setEffectiveWeight'](0x0)) : this['zBP'] === lW['b']['zBs'] ? (gd['setEffectiveWeight'](0x1 - gp),
                        gn['setEffectiveWeight'](0x0),
                        gk['setEffectiveWeight'](gp)) : (gr['setEffectiveWeight'](0x1 - gp),
                        gQ['setEffectiveWeight'](0x0),
                        gD['setEffectiveWeight'](gp));
                    }
                }
            }
            ,
            gN['zkU'] = function(gr) {
                gr === lW['b']['zBs'] && this['zBP'] !== lW['b']['zBs'] ? (this['zAW']['stop'](),
                this['zBZ']['stop'](),
                this['zAH']['stop'](),
                this['zAL']['stop'](),
                this['zAr']['reset'](),
                this['zAr']['play'](),
                this['zAr']['paused'] = !0x0,
                this['zBG']['visible'] = !0x1) : gr !== lW['b']['zBh'] && gr !== lW['b']['zkx'] && gr !== lW['b']['zkp'] || this['zBP'] === lW['b']['zBh'] || this['zBP'] === lW['b']['zkx'] || this['zBP'] === lW['b']['zkp'] ? gr === lW['b']['zkX'] && this['zBP'] !== lW['b']['zkX'] ? (this['zAL']['stop'](),
                this['zAr']['stop'](),
                this['zAH']['stop'](),
                this['zBZ']['play'](),
                this['zAW']['play'](),
                this['zBG']['visible'] = !0x1) : gr === lW['b']['zkY'] && this['zBP'] !== lW['b']['zkY'] && (this['zAL']['stop'](),
                this['zAr']['stop'](),
                this['zBZ']['stop'](),
                this['zAW']['stop'](),
                this['zAH']['play'](),
                this['zBG']['visible'] = !0x0) : (this['zAW']['stop'](),
                this['zBZ']['stop'](),
                this['zAH']['stop'](),
                this['zAr']['stop'](),
                this['zAL']['reset'](),
                this['zAL']['play'](),
                this['zAL']['paused'] = !0x0,
                this['zBG']['visible'] = !0x1),
                this['zBP'] = gr,
                this['zkl']();
            }
            ,
            gN['zkJ'] = function() {
                return this['zBP'];
            }
            ,
            gN['zkQ'] = function(gr) {
                this['zBe']['zWz'] = gr,
                this['zBq']['rotation']['zWz'] = gr,
                this['zBG']['rotation']['zWz'] = -gr;
            }
            ,
            gN['zkG'] = function(gr) {
                this['zBe']['zWW'] = gr,
                this['zkl']();
            }
            ,
            gN['zAZ'] = function() {
                return this['zBq']['getObjectByName'](l9['Z']['zkE']('Bone_Right_Hand'));
            }
            ,
            gN['zky'] = (function() {
                var gr = (0x0,
                l4['Z'])(l6()['mark'](function gD(gQ) {
                    var gd, gk;
                    return l6()['wrap'](function(gn) {
                        for (; ; )
                            switch (gn['prev'] = gn['next']) {
                            case 0x0:
                                return (gd = (0x0,
                                C7['YJ'])(gQ))['zkS'](this['zBx'], this['zBp']),
                                gn['next'] = 0x4,
                                gd['zkh'](!0x1);
                            case 0x4:
                                gk = gn['sent'],
                                l9['Z']['zBm'](gk),
                                this['zAw'](),
                                this['zAN'] = gd,
                                this['zAa'] = gk,
                                this['zAZ']()['add'](gk),
                                this['zkl']();
                            case 0xb:
                            case 'end':
                                return gn['stop']();
                            }
                    }, gD, this);
                }));
                return function(gQ) {
                    return gr['apply'](this, arguments);
                }
                ;
            }()),
            gN['zke'] = function() {
                return this['zBI'];
            }
            ,
            gN['zki'] = function(gr) {
                this['zBI'] = gr,
                this['zkz'] && (this['zFJ']()['remove'](this['zkz']),
                this['zkz']['geometry']['dispose'](),
                this['zkz']['material']['map']['dispose'](),
                this['zkz']['material']['dispose'](),
                this['zkz'] = void 0x0),
                this['zkz'] = CL(this['zBI'], 0x40, this['zBX'], 0.8),
                this['zkz']['position']['set'](0x0, 1.5, 0x0),
                this['zFJ']()['add'](this['zkz']);
            }
            ,
            gN['zkM'] = function() {
                return this['zBY'];
            }
            ,
            gN['zks'] = function(gr) {
                this['zBY'] = gr,
                this['zBq']['traverse'](function(gD) {
                    gD['material'] && (gD['material']['map']['dispose'](),
                    gr === Cc['C']['zzu'] ? gD['material']['map'] = l9['Z']['zkN']() : gr === Cc['C']['zzF'] ? gD['material']['map'] = l9['Z']['zkd']() : gr === Cc['C']['zzb'] && (gD['material']['map'] = l9['Z']['zkq']()));
                });
            }
            ,
            gN['zkw'] = function(gr, gD, gQ) {
                this['zBJ'] = Date['now'](),
                this['zkH'](0x1, 0x0, 0x0),
                gr > 0x0 && this['zku'](gr, '#ffb900', gQ ? 0x2 : 0x1),
                gD > 0x0 && this['zku'](gD, 'white', gQ ? 0x2 : 0x1);
            }
            ,
            gN['zkH'] = function(gr, gD, gQ) {
                for (var gd = 0x0; gd < this['zBE']['length']; gd++)
                    this['zBE'][gd]['color']['r'] = gr,
                    this['zBE'][gd]['color']['g'] = gD,
                    this['zBE'][gd]['color']['b'] = gQ;
            }
            ,
            gN['zka'] = function() {
                return this['zAq'];
            }
            ,
            gE;
        }(CH['Z'])
          , Co = l2(0x17b07)
          , Cu = l2(0x11e39)
          , CB = l2(0x13bce)
          , Cx = l2(0xe462)
          , Cz = l2(0x9df8)
          , CX = l2(0x99dd)
          , CM = l2(0x13a4);
        function Ca(gm, gE) {
            var gN = 'undefined' != typeof Symbol && gm[Symbol['iterator']] || gm['@@iterator'];
            if (gN)
                return (gN = gN['call'](gm))['next']['bind'](gN);
            if (Array['isArray'](gm) || (gN = function(gD, gQ) {
                if (!gD)
                    return;
                if ('string' == typeof gD)
                    return Cm(gD, gQ);
                var gd = Object['prototype']['toString']['call'](gD)['slice'](0x8, -0x1);
                'Object' === gd && gD['constructor'] && (gd = gD['constructor']['name']);
                if ('Map' === gd || 'Set' === gd)
                    return Array['from'](gD);
                if ('Arguments' === gd || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/['test'](gd))
                    return Cm(gD, gQ);
            }(gm)) || gE && gm && 'number' == typeof gm['length']) {
                gN && (gm = gN);
                var gr = 0x0;
                return function() {
                    return gr >= gm['length'] ? {
                        'done': !0x0
                    } : {
                        'done': !0x1,
                        'value': gm[gr++]
                    };
                }
                ;
            }
            throw new TypeError('Invalid\x20attempt\x20to\x20iterate\x20non-iterable\x20instance.\x0aIn\x20order\x20to\x20be\x20iterable,\x20non-array\x20objects\x20must\x20have\x20a\x20[Symbol.iterator]()\x20method.');
        }
        function Cm(gm, gE) {
            (null == gE || gE > gm['length']) && (gE = gm['length']);
            for (var gN = 0x0, gr = new Array(gE); gN < gE; gN++)
                gr[gN] = gm[gN];
            return gr;
        }
        var CE = 0x0
          , CN = 0x1
          , Cr = (function() {
            function gm(gN, gr, gD, gQ, gd) {
                var gk = this;
                this['zkZ'] = function(gn, gj, gp, gT, gZ, gy, gG, gO, gq, gA, gK, gW, v0, v1, v2, v3, v4, v5, v6) {
                    for (var v7 = -0x1, v8 = 0x0; v8 < gk['zkR']['length']; v8++)
                        if (gk['zkR'][v8]['zsW'] >= gA['zsW']) {
                            v7 = v8;
                            break;
                        }
                    -0x1 === v7 ? gk['zkR'] = [] : gk['zkR']['splice'](0x0, v7 - 0x1),
                    gk['zsz']['zsH']['zsT'] = gA['zsT'],
                    gk['zsz']['zsH']['zsL'] = gA['zsL'],
                    gk['zsz']['zsH']['zsg'] = gA['zsg'],
                    gk['zsz']['zsH']['zsW'] = gA['zsW'],
                    gj && (gk['zsz']['zsH']['zFR'] = gA['zFR']),
                    gp && (gk['zsz']['zsH']['zsr'] = gA['zsr']),
                    gT && (gk['zsz']['zsH']['zsD'] = gA['zsD']),
                    gZ && (gk['zsz']['zsH']['zsV'] = gA['zsV']),
                    gy && gk['zsz']['zrg']['zsj'](gK, !0x1),
                    gO && (gk['zsz']['zsK'] = v5),
                    gq && (gk['zsz']['zrE'] = v6,
                    v6 === C9['P']['zzV'] ? gk['zsz']['zrg']['zso'](0x4) : v6 === C9['P']['zzj'] ? gk['zsz']['zrg']['zso'](0x8) : v6 === C9['P']['zzK'] ? gk['zsz']['zrg']['zso'](0xc) : gk['zsz']['zrg']['zso'](0x0));
                    for (var v9, vl = !0x0, vC = Ca(gW['entries']()); !(v9 = vC())['done']; ) {
                        var vw = v9['value']
                          , vg = vw[0x0]
                          , vv = vw[0x1];
                        gk['zsu'] && (gk['zsu'] = !0x1,
                        vl = !0x1),
                        -0x2 === vg ? gk['zsz']['zrg']['zVP'](vv) : gk['zsz']['zrg']['zsb'](vg, vv, !0x1);
                    }
                    for (var vF, vL = Ca(v0['entries']()); !(vF = vL())['done']; ) {
                        var vH = vF['value']
                          , vS = vH[0x0]
                          , vb = vH[0x1];
                        gk['zsz']['zsF']['zsC']()['set'](vS, vb);
                    }
                    gG && (gk['zsz']['zry'] = v1,
                    gk['zsz']['zrP'] = v2,
                    gk['zsz']['zrU'] = v3,
                    gk['zsz']['zrt'] = v4);
                    for (var vc = gk['zsz']['zsi'](), vh = 0x1; vh < gk['zkR']['length']; vh++) {
                        var vJ = gk['zkR'][vh - 0x1]
                          , vY = gk['zkR'][vh];
                        gk['zsB'](vc, vJ, vY, !0x1);
                    }
                    gk['zsA'] = gk['zsk']['zsi'](),
                    gk['zsk'] = vc,
                    gk['zss'](gk['zsA'], gk['zsk'], vl);
                }
                ,
                this['zsv'] = function(gn, gj, gp) {
                    for (var gT = 0x0; gT < gk['zsf']['length']; gT++) {
                        var gZ = gk['zsf'][gT];
                        if (gZ['zWW'] === gn && gZ['zWz'] === gj && gZ['zWH'] === gp) {
                            for (var gy = 0x0; gy < gZ['zsO']['length']; gy++)
                                clearTimeout(gZ['zsO'][gy]);
                            gk['zsf']['splice'](gT, 0x1);
                            break;
                        }
                    }
                }
                ,
                this['zCF'] = function(gn, gj, gp, gT) {
                    gk['zsv'](gn, gj, gp),
                    gk['zCt']['zBc']()['zFQ'](gn, gj, gp, gT, !0x0);
                }
                ,
                this['zsy'] = function(gn, gj, gp, gT) {
                    for (var gZ = {}, gy = 0x0; gy < gp['length']; gy++) {
                        var gG = lE(gp[gy]['zWW'], gp[gy]['zWz'], gp[gy]['zWH']);
                        gZ[gG] = gk['zCt']['zBc']()['zbc']()['zFG'](gp[gy]['zWW'], gp[gy]['zWz'], gp[gy]['zWH']),
                        gk['zsv'](gp[gy]['zWW'], gp[gy]['zWz'], gp[gy]['zWH']),
                        gk['zCt']['zBc']()['zFQ'](gp[gy]['zWW'], gp[gy]['zWz'], gp[gy]['zWH'], la['k']['zbh'], !0x1),
                        gk['zCt']['zBc']()['zCx']()['zFZ'](gG);
                    }
                    gn && gk['zCt']['zBc']()['zCY']()['zbI'](gj, gZ);
                    for (var gO = 0x0; gO < gT['length']; gO++)
                        gk['zCt']['zBc']()['zCx']()['zCr'](gT[gO]['pos']['zWW'], gT[gO]['pos']['zWz'], gT[gO]['pos']['zWH'], gT[gO]['progress'], !0x1);
                }
                ,
                this['zsP'] = function(gn, gj, gp) {
                    gn === (0x0,
                    lL['Yb'])() && gk['zsU'] === CN && (gk['zsU'] = CE,
                    gk['zst']['zsn'](),
                    gk['zst']['zsc'](),
                    gk['zsG'](gj, gp));
                }
                ,
                this['zsQ'] = function(gn) {
                    (0x0,
                    lL['Zp'])() === Cu['Q']['zTh'] && gk['ziX']['zBD']();
                }
                ,
                this['zsl'] = function(gn) {
                    lw['Z']['emit'](lg['x']['zsm']);
                }
                ,
                this['zBW'] = function(gn) {
                    lw['Z']['emit'](lg['x']['ziR']);
                }
                ,
                this['zsI'] = function(gn, gj) {
                    gk['zsX'] = !0x0,
                    gk['zsY'] = gn,
                    gk['zsx'] = gj,
                    gk['zsp']['zCR'](gk['zoa']['zsJ'][CX['ap']['INVENTORY_HELPER_KEY']]) && (gk['zsx'] = lK['G']['SHIFT_CLICK']);
                }
                ,
                this['zsE'] = function(gn) {
                    gk['zsS'] = !0x0,
                    gk['zsh'] = gn;
                }
                ,
                this['zse'] = function(gn) {
                    gk['zsM'] = !0x0,
                    gk['zsN'] = gn,
                    gk['zsx'] = lK['G']['LEFT'],
                    gk['zsp']['zCR'](gk['zoa']['zsJ'][CX['ap']['INVENTORY_HELPER_KEY']]) && (gk['zsx'] = lK['G']['SHIFT_CLICK']);
                }
                ,
                this['zsd'] = function() {
                    gk['ziX']['zBD']();
                }
                ,
                this['zsq'] = function() {
                    (0x0,
                    lL['Zp'])() !== Cu['Q']['zTh'] || gk['ziX']['zBb']() || gk['ziX']['zBD']();
                }
                ,
                this['zsw'] = function() {
                    gk['ziX']['zBK']();
                }
                ,
                this['zsa'] = function() {
                    gk['ziX']['zBK']();
                }
                ,
                this['zsZ'] = function(gn, gj) {
                    gj && gk['zsR'](gn);
                }
                ,
                this['zvW'] = function(gn, gj, gp, gT) {
                    var gZ = []
                      , gy = [];
                    return C1()(gT, [gn['zWW'], gn['zWz'], gn['zWH']], [gj['zWW'], gj['zWz'], gj['zWH']], gp, gZ, gy) === la['k']['zbh'] ? {
                        'zvz': !0x1,
                        'zWZ': (0x0,
                        lF['XX'])(0x0, 0x0, 0x0),
                        'zvH': (0x0,
                        lF['XX'])(0x0, 0x0, 0x0)
                    } : {
                        'zvz': !0x0,
                        'zWZ': (0x0,
                        lF['XX'])(gZ[0x0], gZ[0x1], gZ[0x2]),
                        'zvH': (0x0,
                        lF['XX'])(gy[0x0], gy[0x1], gy[0x2])
                    };
                }
                ,
                this['zvT'] = function(gn, gj, gp) {
                    return gk['zCt']['zBc']()['zbc']()['zFG'](gn, gj, gp);
                }
                ,
                this['zvL'] = function(gn, gj, gp) {
                    return lT['Z'][gk['zvT'](gn, gj, gp)]['zWg'];
                }
                ,
                this['zus'] = function(gn, gj) {
                    if (gk['zsU'] === CE) {
                        if ((0x0,
                        lL['Zp'])() === Cu['Q']['zTM'])
                            return;
                        gk['zsk']['zrg']['zip']()['ziJ']()['zvg'](gn, gk),
                        gk['ziX']['zus'](gn, gj);
                        var gp = gj / l8['Z']['zgK'];
                        if (gk['zsk']['zsH']['zsg'] === lW['b']['zkX'] || gk['zsk']['zsH']['zsg'] === lW['b']['zkY']) {
                            var gT, gZ = gk['zvr'](), gy = (0x0,
                            lb['t7'])(gk['zvD']['zWW'], gk['zsk']['zsH']['zFR']['zWW'], gp), gG = (0x0,
                            lb['t7'])(gk['zvD']['zWz'], gk['zsk']['zsH']['zFR']['zWz'], gp), gO = (0x0,
                            lb['t7'])(gk['zvD']['zWH'], gk['zsk']['zsH']['zFR']['zWH'], gp);
                            gk['zvV']['zAd']((0x0,
                            lF['XX'])(gy, gG, gO)),
                            gk['zvV']['zkc'](gZ),
                            null == (gT = gk['zvV']) || gT['zus'](gn, gj);
                        } else {
                            var gq = (0x0,
                            lb['t7'])(gk['zvD']['zWW'], gk['zsk']['zsH']['zFR']['zWW'], gp)
                              , gA = (0x0,
                            lb['t7'])(gk['zvD']['zWz'] + gk['zsA']['zsH']['zsD'], gk['zsk']['zsH']['zFR']['zWz'] + gk['zsk']['zsH']['zsD'], gp)
                              , gK = (0x0,
                            lb['t7'])(gk['zvD']['zWH'], gk['zsk']['zsH']['zFR']['zWH'], gp);
                            gk['ziX']['zFJ']()['position']['set'](gq, gA, gK);
                        }
                    } else {
                        if (gk['zsU'] === CN && Date['now']() - gk['zvj'] <= 0x3e8) {
                            var gW = Math['max'](0x0, Math['min'](0x1, (Date['now']() - gk['zvj']) / 0x3e8));
                            l7['_fP']['slerp'](gk['zvK'], gk['zvo'], gk['zvu']['zut']()['quaternion'], gW);
                        }
                    }
                }
                ,
                this['zoa'] = gN,
                this['zvu'] = gr,
                this['zCt'] = gD,
                this['zCy'] = gQ,
                this['zst'] = gd,
                this['ziX'] = new C8(this['zoa'],this['zvu']['zut'](),this['zvu']['zun'](),this['zvu']['zuG'](),this),
                this['zvD'] = (0x0,
                lF['XX'])(0x0, 0x0, 0x0),
                this['zsf'] = [],
                this['zsU'] = CE,
                this['zsX'] = !0x1,
                this['zsS'] = !0x1,
                this['zsY'] = 0x0,
                this['zsx'] = lK['G']['WHEEL'],
                this['zsh'] = C9['P']['zzL'],
                this['zsM'] = !0x1,
                this['zsN'] = Co['n']['zvb'],
                this['zvj'] = 0x0,
                this['zvK'] = new l7['_fP'](),
                this['zvo'] = new l7['_fP'](),
                this['zvF'] = 0x0,
                this['zvC'] = -0x1,
                this['zvi'] = 0x0;
            }
            var gE = gm['prototype'];
            return gE['zbt'] = function() {
                this['zCX'](),
                this['ziX']['zBH'](),
                this['zsp']['zbt']();
            }
            ,
            gE['zow'] = function(gN, gr, gD) {
                this['zsp'] = new C4(),
                this['zsG'](gr, gD),
                this['ziX']['zBD'](),
                this['zCc']();
            }
            ,
            gE['zsR'] = function(gN) {
                window['gtag'] && gtag('event', 'kill', {
                    'event_category': 'game_view'
                }),
                this['zsU'] = CN,
                this['ziX']['ziC'](),
                this['zst']['zvB'](),
                this['zst']['zvA'](),
                lw['Z']['emit'](lg['x']['zvk']),
                lw['Z']['emit'](lg['x']['zvs'], C9['P']['zzL']),
                this['zsk']['zrg']['zip']()['ziJ']()['zvv'](this['zsk'], this, !0x0);
                var gr = (0x0,
                lF['dg'])(gN);
                (0x0,
                lF['M4'])(gr, (0x0,
                lF['w1'])(this['zvu']['zut']()['position'])),
                (0x0,
                lF['cz'])(gr),
                this['zvj'] = Date['now'](),
                this['zvK']['copy'](this['zvu']['zut']()['quaternion']),
                this['zvo']['setFromUnitVectors'](new l7['Pa4'](0x0,0x0,-0x1), new l7['Pa4'](gr['zWW'],gr['zWz'],gr['zWH'])),
                this['ziX']['zBK']();
            }
            ,
            gE['zCc'] = function() {
                lw['Z']['on'](lg['x']['zvf'], this['zkZ']),
                lw['Z']['on'](lg['x']['zCI'], this['zCF']),
                lw['Z']['on'](lg['x']['zvO'], this['zsy']),
                lw['Z']['on'](lg['x']['zvy'], this['zsP']),
                lw['Z']['on'](lg['x']['zvP'], this['zsI']),
                lw['Z']['on'](lg['x']['zvU'], this['zsE']),
                lw['Z']['on'](lg['x']['zvt'], this['zse']),
                lw['Z']['on'](lg['x']['zvn'], this['zsZ']),
                lw['Z']['on'](lg['x']['zvc'], this['zsa']),
                lw['Z']['on'](lg['x']['zvG'], this['zsq']),
                lw['Z']['on'](lg['x']['zvQ'], this['zsw']),
                lw['Z']['on'](lg['x']['zvl'], this['zsd']),
                this['zvm']()['zuG']()['addEventListener']('click', this['zsQ'], !0x1),
                this['ziX']['addEventListener']('lock', this['zsl']),
                this['ziX']['addEventListener']('unlock', this['zBW']);
            }
            ,
            gE['zCX'] = function() {
                lw['Z']['off'](lg['x']['zvf'], this['zkZ']),
                lw['Z']['off'](lg['x']['zCI'], this['zCF']),
                lw['Z']['off'](lg['x']['zvO'], this['zsy']),
                lw['Z']['off'](lg['x']['zvy'], this['zsP']),
                lw['Z']['off'](lg['x']['zvP'], this['zsI']),
                lw['Z']['off'](lg['x']['zvU'], this['zsE']),
                lw['Z']['off'](lg['x']['zvt'], this['zse']),
                lw['Z']['off'](lg['x']['zvn'], this['zsZ']),
                lw['Z']['off'](lg['x']['zvc'], this['zsa']),
                lw['Z']['off'](lg['x']['zvG'], this['zsq']),
                lw['Z']['off'](lg['x']['zvQ'], this['zsw']),
                lw['Z']['off'](lg['x']['zvl'], this['zsd']),
                this['zvm']()['zuG']()['removeEventListener']('click', this['zsQ'], !0x1),
                this['ziX']['removeEventListener']('lock', this['zsl']),
                this['ziX']['removeEventListener']('unlock', this['zBW']);
            }
            ,
            gE['zsG'] = function(gN, gr) {
                this['zkR'] = [],
                this['zvI'] = {
                    'zvX': !0x1,
                    'zvY': !0x1,
                    'zvx': !0x1,
                    'zvp': !0x1,
                    'zvJ': !0x1,
                    'zBr': !0x1,
                    'zBL': !0x1,
                    'zvE': !0x1,
                    'zvS': !0x1,
                    'zvh': !0x1,
                    'zve': !0x1,
                    'zvM': !0x1,
                    'zvN': !0x1,
                    'zvd': !0x1,
                    'zvq': !0x1,
                    'zvw': !0x1,
                    'zva': 0x0,
                    'zvZ': 0x0,
                    'zvR': lK['G']['WHEEL'],
                    'zfW': Co['n']['zvb'],
                    'zrE': C9['P']['zzL'],
                    'zfz': (0x0,
                    C3['Ak'])(0x0, 0x0),
                    'zsW': -0x1,
                    'zfH': 0x0
                },
                this['zkR']['push'](this['zvI']);
                var gD = this['zsz'];
                this['zsz'] = new CC['Z'](this),
                this['zsz']['zsH']['zFR'] = gN,
                this['zvD'] = gN,
                this['zsA'] = new CC['Z'](this),
                this['zsA']['zsH']['zFR'] = gN,
                this['zsk'] = new CC['Z'](this),
                this['zsk']['zsH']['zFR'] = gN,
                void 0x0 !== gD && (this['zsz']['zry'] = gD['zry'],
                this['zsz']['zrP'] = gD['zrP'],
                this['zsz']['zrU'] = gD['zrU'],
                this['zsz']['zrt'] = gD['zrt'],
                this['zsz']['zsK'] = gD['zsK'],
                this['zsA']['zry'] = gD['zry'],
                this['zsA']['zrP'] = gD['zrP'],
                this['zsA']['zrU'] = gD['zrU'],
                this['zsA']['zrt'] = gD['zrt'],
                this['zsA']['zrg'] = gD['zrg'],
                this['zsA']['zsK'] = gD['zsK'],
                this['zsk']['zry'] = gD['zry'],
                this['zsk']['zrP'] = gD['zrP'],
                this['zsk']['zrU'] = gD['zrU'],
                this['zsk']['zrt'] = gD['zrt'],
                this['zsk']['zsK'] = gD['zsK'],
                this['zss'](this['zsA'], this['zsk'], !0x1)),
                this['zBt'] = new Cv(),
                this['zsu'] = !0x0,
                this['ziX']['zBF']()['set'](gr['zWW'], gr['zWz'], 0x0),
                this['zvu']['zut']()['rotation']['set'](gr['zWW'], gr['zWz'], 0x0);
                try {
                    var gQ = lS['h']['getState']()
                      , gd = (0x0,
                    CM['DH'])(gQ['settings']['primaryLoadout'])
                      , gk = (0x0,
                    CM['OA'])(gQ['settings']['secondaryLoadout'])
                      , gn = gQ['game']['zDb'];
                    lH['GameAnalytics']['addDesignEvent'](gn + ':PRIMARY_LOADOUT_USAGE:' + gd, 0x1, {
                        'authenticated': gQ['account']['authenticated'] ? 'true' : 'false'
                    }),
                    lH['GameAnalytics']['addDesignEvent'](gn + ':SECONDARY_LOADOUT_USAGE:' + gk, 0x1, {
                        'authenticated': gQ['account']['authenticated'] ? 'true' : 'false'
                    });
                } catch (gj) {}
            }
            ,
            gE['zfT'] = function(gN) {
                if (this['zsU'] === CE) {
                    var gr = this['zsp']['ziz'](this['zoa']['zsJ'][CX['ap']['MOVE_LEFT']])
                      , gD = this['zsp']['ziz'](this['zoa']['zsJ'][CX['ap']['MOVE_RIGHT']])
                      , gQ = this['zsp']['ziz'](this['zoa']['zsJ'][CX['ap']['MOVE_FORWARD']])
                      , gd = this['zsp']['ziz'](this['zoa']['zsJ'][CX['ap']['MOVE_BACKWARD']])
                      , gk = this['zsp']['ziz'](this['zoa']['zsJ'][CX['ap']['JUMP']])
                      , gn = this['zsp']['ziW'](this['zoa']['zsJ'][CX['ap']['PRIMARY_ACTION']])
                      , gj = this['zsp']['ziW'](this['zoa']['zsJ'][CX['ap']['SECONDARY_ACTION']]) || this['zsp']['ziz'](this['zoa']['zsJ'][CX['ap']['SECONDARY_ACTION_2']])
                      , gp = this['zsp']['ziz'](this['zoa']['zsJ'][CX['ap']['CROUCH']])
                      , gT = this['zsp']['ziz'](this['zoa']['zsJ'][CX['ap']['SPRINT']])
                      , gZ = this['zsp']['ziz'](this['zoa']['zsJ'][CX['ap']['RELOAD']])
                      , gy = this['zsp']['ziH'](this['zoa']['zsJ'][CX['ap']['DROP_CURRENT_ITEM']]);
                    l8['Z']['zrT'] && (gy = gn);
                    var gG = this['zsp']['ziz'](this['zoa']['zsJ'][CX['ap']['SELECT_SLOT_1']])
                      , gO = this['zsp']['ziz'](this['zoa']['zsJ'][CX['ap']['SELECT_SLOT_2']])
                      , gq = this['zsp']['ziz'](this['zoa']['zsJ'][CX['ap']['SELECT_SLOT_3']])
                      , gA = this['zsp']['ziz'](this['zoa']['zsJ'][CX['ap']['SELECT_SLOT_4']])
                      , gK = this['zsp']['ziz'](this['zoa']['zsJ'][CX['ap']['SELECT_SLOT_5']])
                      , gW = this['zsp']['ziz'](this['zoa']['zsJ'][CX['ap']['SPRAY']]);
                    this['zsp']['ziH'](this['zoa']['zsJ'][CX['ap']['INTERACT']]) && (this['zvC'] >= 0x0 ? lw['Z']['emit'](lg['x']['zfL'], this['zvC']) : -0x2 === this['zvC'] ? this['zsE'](C9['P']['zzr']) : -0x3 === this['zvC'] ? this['zsE'](C9['P']['zzD']) : -0x4 === this['zvC'] ? this['zsE'](C9['P']['zzV']) : -0x5 === this['zvC'] ? this['zsE'](C9['P']['zzj']) : -0x6 === this['zvC'] && this['zsE'](C9['P']['zzK']));
                    var v0 = this['zvr']()
                      , v1 = v0['zWW']
                      , v2 = v0['zWz'];
                    this['zsA'] = this['zsk']['zsi'](),
                    this['zvD'] = this['zsA']['zsH']['zFR'];
                    var v3 = this['zfg']()['zfr']()
                      , v4 = this['zsp']['ziL']()
                      , v5 = this['zsp']['zir']()
                      , v6 = this['zoa']['zfD'] ? v4 : v5;
                    (this['zoa']['zfD'] ? v5 : v4) ? this['zfg']()['zfV'](!0x0) : v6 ? this['zfg']()['zfj'](!0x0) : gG ? this['zfg']()['zsj'](0x0, !0x0) : gO ? this['zfg']()['zsj'](0x1, !0x0) : gq ? this['zfg']()['zsj'](0x2, !0x0) : gA ? this['zfg']()['zsj'](0x3, !0x0) : gK && this['zfg']()['zsj'](0x4, !0x0);
                    var v7 = v3 !== this['zfg']()['zfr']()
                      , v8 = this['zsk']['zsH']['zsW']
                      , v9 = {
                        'zvX': v7,
                        'zvY': this['zsX'],
                        'zvx': this['zsS'],
                        'zvp': this['zsM'],
                        'zvJ': gr,
                        'zBr': gD,
                        'zBL': gQ,
                        'zvE': gd,
                        'zvS': gk,
                        'zvh': gn,
                        'zve': gj,
                        'zvM': gp,
                        'zvN': gT,
                        'zvd': gZ,
                        'zvq': gy,
                        'zvw': gW,
                        'zfz': (0x0,
                        C3['Ak'])(v1, v2),
                        'zsW': v8,
                        'zva': this['zfg']()['zfr'](),
                        'zvZ': this['zsY'],
                        'zvR': this['zsx'],
                        'zfW': this['zsN'],
                        'zrE': this['zsh'],
                        'zfH': this['zCt']['zBn']()['zfK']()
                    };
                    this['zsX'] = !0x1,
                    this['zsS'] = !0x1,
                    this['zsM'] = !0x1;
                    var vl = this['zvI'];
                    this['zvI'] = v9,
                    this['zkR']['push'](v9),
                    lw['Z']['emit'](lg['x']['zfo'], v9),
                    this['zsB'](this['zsk'], vl, v9, !0x0),
                    this['zss'](this['zsA'], this['zsk'], !0x0),
                    this['zfu']();
                }
            }
            ,
            gE['zsB'] = function(gN, gr, gD, gQ) {
                var gd = l8['Z']['zgK']
                  , gk = gN['zsH']['zsg'];
                gD['zvX'] && gN['zrg']['zsj'](gD['zva'], gQ),
                gN['zsH'] = (0x0,
                C2['w5'])(gD, this['zvT'], this['zvL'], this['zvW'], gd, gN),
                gD['zvx'] && (gN['zrE'] = gD['zrE'],
                gD['zrE'] === C9['P']['zzV'] ? gN['zrg']['zso'](0x4) : gD['zrE'] === C9['P']['zzj'] ? gN['zrg']['zso'](0x8) : gD['zrE'] === C9['P']['zzK'] ? gN['zrg']['zso'](0xc) : gN['zrg']['zso'](0x0)),
                gD['zvY'] ? gN['zrg']['zfb'](gD['zvZ'], gD['zvR'], gQ) : gD['zvp'] && gN['zrg']['zfF'](gD['zfW'], gD['zvR']),
                gk === lW['b']['zkx'] && gN['zsH']['zsg'] !== lW['b']['zkx'] && gN['zsF']['zfC'](Cl['Z']['zfi']),
                gN['zrg']['zip']()['ziJ']()['zfB'](gN) && (gN['zrg']['zip']()['ziJ']()['zfA'](gN, this, gr, gD, gQ),
                gN['zrg']['zfk'](gQ)),
                gN['zsH']['zsV'] = (0x0,
                C2['Ao'])(this, gD, gN),
                gN['zrg']['zip']()['ziJ']()['zfs'](gd, gN, this, gQ),
                gN['zrg']['zfk'](gQ),
                gN['zrg']['zip']()['ziJ']()['zfv'](gN),
                gD['zvq'] && gN['zsF']['zff'](Cl['Z']['zfO']) && gN['zrg']['zfy'](gQ),
                gQ && CF(gN['zsH']['zFR'], gN['zsH']['zsg'], gN['zsH']['zsT'], this['zBt'], this['zCt']['zBc']()['zbc'](), this['zst'], !0x0);
            }
            ,
            gE['zss'] = function(gN, gr, gD) {
                var gQ = new Map()
                  , gd = l8['Z']['zgL'] + l8['Z']['zgg'] + l8['Z']['zgr'];
                if (gN['zrg']['zfP']()['length'] !== gr['zrg']['zfP']()['length']) {
                    if (gN['zrg']['zfP']()['length'] < gr['zrg']['zfP']()['length'])
                        for (var gk = gN['zrg']['zfP']()['length']; gk < gr['zrg']['zfP']()['length']; gk++) {
                            var gn = gr['zrg']['zfP']()[gk];
                            gQ['set'](gk, gn);
                        }
                    else {
                        for (var gj = gr['zrg']['zfP']()['length']; gj < gN['zrg']['zfP']()['length']; gj++)
                            gQ['set'](gj, new C5['Z']((0x0,
                            C7['YJ'])(Cw['q']['zzc']),0x1));
                    }
                } else
                    gd = gr['zrg']['zfP']()['length'];
                for (var gp = 0x0; gp < gd; gp++) {
                    var gT = gN['zrg']['zfP']()[gp]
                      , gZ = gr['zrg']['zfP']()[gp];
                    gT['ziJ']()['ziE']() === gZ['ziJ']()['ziE']() && gT['zfU']() === gZ['zfU']() && (0x0,
                    C7['qH'])(gT['ziJ']()) === (0x0,
                    C7['qH'])(gZ['ziJ']()) || (gQ['set'](gp, gZ),
                    gD && gZ['ziJ']()['ziE']() !== Cw['q']['zzc'] && (gT['ziJ']()['ziE']() !== gZ['ziJ']()['ziE']() || gT['zfU']() < gZ['zfU']()) && this['zCV']()['zBB'](Cg['k']['zft']));
                }
                if (gN['zrg']['zfn']()['ziJ']()['ziE']() === gr['zrg']['zfn']()['ziJ']()['ziE']() && gN['zrg']['zfn']()['zfU']() === gr['zrg']['zfn']()['zfU']() && (0x0,
                C7['qH'])(gN['zrg']['zfn']()['ziJ']()) === (0x0,
                C7['qH'])(gr['zrg']['zfn']()['ziJ']()) || (lw['Z']['emit'](lg['x']['zfc'], gr['zrg']['zfn']()),
                gD && this['zCV']()['zBB'](Cg['k']['zft'])),
                gN['zrg']['zfr']() !== gr['zrg']['zfr']() && lw['Z']['emit'](lg['x']['zfG'], gr['zrg']['zfr']()),
                gN['zrg']['zfr']() === gr['zrg']['zfr']() && gN['zrg']['zip']()['ziJ']()['ziE']() === gr['zrg']['zip']()['ziJ']()['ziE']() && gN['zrg']['zip']()['ziJ']()['zfQ']() === gr['zrg']['zip']()['ziJ']()['zfQ']() && gN['zrg']['zip']()['ziJ']()['zfl']() === gr['zrg']['zip']()['ziJ']()['zfl']() || lw['Z']['emit'](lg['x']['zfm'], gr['zrg'], gr['zrg']['zip']()),
                gQ['size'] > 0x0 && (lw['Z']['emit'](lg['x']['zfI'], gQ),
                (0x0,
                C7['pV'])(gr['zrg']['zip']()['ziJ']()['ziE']()))) {
                    var gy = gr['zrg']['zip']()['ziJ']();
                    lw['Z']['emit'](lg['x']['zfX'], gy['zfY'](), gr['zrg']['zfx'](gy['zfp']()));
                }
                gN['zrE'] !== gr['zrE'] && lw['Z']['emit'](lg['x']['zvs'], gr['zrE']),
                gN['zry'] === gr['zry'] && gN['zrP'] === gr['zrP'] && gN['zrU'] === gr['zrU'] && gN['zrt'] === gr['zrt'] || lw['Z']['emit'](lg['x']['zfJ'], gr['zry'], gr['zrP'], gr['zrU'], gr['zrt']),
                gN['zsH']['zsg'] !== lW['b']['zkX'] && gN['zsH']['zsg'] !== lW['b']['zkY'] || gr['zsH']['zsg'] === lW['b']['zkX'] || gr['zsH']['zsg'] === lW['b']['zkY'] ? gN['zsH']['zsg'] === lW['b']['zkX'] || gN['zsH']['zsg'] === lW['b']['zkY'] || gr['zsH']['zsg'] !== lW['b']['zkX'] && gr['zsH']['zsg'] !== lW['b']['zkY'] || (this['zst']['zvB'](),
                this['zst']['zvA'](),
                this['zvV'] = new Cf(this['zCt']['zBn'](),(0x0,
                lL['Yb'])()),
                this['zvV']['zks'](this['zst']['zkM']()),
                this['zCt']['zuO']()['add'](this['zvV']['zFJ']()),
                this['ziX']['zBo'](this['zvV']['zFJ'](), 0xa)) : (this['zst']['zsn'](),
                this['zst']['zsc'](),
                this['ziX']['zBu'](this['zvr']()),
                this['zCt']['zuO']()['remove'](this['zvV']['zFJ']())),
                void 0x0 !== this['zvV'] && this['zvV']['zkU'](gr['zsH']['zsg']);
            }
            ,
            gE['zfE'] = function() {
                var gN = this['zfS'](this['zvL']);
                if (gN['zvz'])
                    return this['zCt']['zBc']()['zbc']()['zFO'](gN['zWZ']['zWW'] + 0.01 * gN['zvH']['zWW'], gN['zWZ']['zWz'] + 0.01 * gN['zvH']['zWz'], gN['zWZ']['zWH'] + 0.01 * gN['zvH']['zWH']);
            }
            ,
            gE['zfh'] = function() {
                var gN = this['zfS'](this['zvL']);
                if (gN['zvz'])
                    return this['zCt']['zBc']()['zbc']()['zFO'](gN['zWZ']['zWW'] - 0.01 * gN['zvH']['zWW'], gN['zWZ']['zWz'] - 0.01 * gN['zvH']['zWz'], gN['zWZ']['zWH'] - 0.01 * gN['zvH']['zWH']);
            }
            ,
            gE['zfe'] = function() {
                var gN = this
                  , gr = this['zfS'](function(gD, gQ, gd) {
                    return gN['zvT'](gD, gQ, gd) === la['k']['zfM'];
                });
                if (gr['zvz'])
                    return this['zCt']['zBc']()['zbc']()['zFO'](gr['zWZ']['zWW'] - 0.01 * gr['zvH']['zWW'], gr['zWZ']['zWz'] - 0.01 * gr['zvH']['zWz'], gr['zWZ']['zWH'] - 0.01 * gr['zvH']['zWH']);
            }
            ,
            gE['zfN'] = function() {
                var gN = this['zfS'](this['zvL']);
                if (gN['zvz'])
                    return this['zCt']['zBc']()['zbc']()['zFO'](gN['zWZ']['zWW'] + 0.01 * gN['zvH']['zWW'], gN['zWZ']['zWz'] + 0.01 * gN['zvH']['zWz'], gN['zWZ']['zWH'] + 0.01 * gN['zvH']['zWH']);
            }
            ,
            gE['zfS'] = function(gN) {
                if (!this['zvI'])
                    return {
                        'zvz': !0x1,
                        'zWZ': (0x0,
                        lF['XX'])(0x0, 0x0, 0x0),
                        'zvH': (0x0,
                        lF['XX'])(0x0, 0x0, 0x0)
                    };
                var gr = (0x0,
                lF['dg'])(this['zsk']['zsH']['zFR']);
                (0x0,
                lF['$j'])(gr, (0x0,
                lF['XX'])(0x0, this['zsk']['zsH']['zsD'], 0x0)),
                (0x0,
                lF['BZ'])(gr, l8['Z']['zLn']);
                var gD = this['zvI']['zfz']['zWW']
                  , gQ = this['zvI']['zfz']['zWz']
                  , gd = (0x0,
                lb['ny'])((0x0,
                C3['Ak'])(gD, gQ));
                return this['zvW'](gr, gd, l8['Z']['zgV'], gN);
            }
            ,
            gE['zCK'] = function(gN, gr, gD, gQ) {
                var gd = this
                  , gk = this['zCt']['zBc']()['zbc']()['zFG'](gN, gr, gD);
                this['zCt']['zBc']()['zFQ'](gN, gr, gD, gQ, !0x0);
                for (var gn = setTimeout(function() {
                    for (var gZ = 0x0; gZ < gd['zsf']['length']; gZ++) {
                        var gy = gd['zsf'][gZ];
                        if (gy['zWW'] === gN && gy['zWz'] === gr && gy['zWH'] === gD) {
                            gd['zCt']['zBc']()['zFQ'](gN, gr, gD, gy['zfd'][gy['zfd']['length'] - 0x1], !0x1),
                            0x0 === gy['zfd']['length'] ? gd['zsf']['splice'](gZ, 0x1) : (gy['zfd']['pop'](),
                            gy['zsO']['pop']());
                            break;
                        }
                    }
                }, 0x3e8 * l8['Z']['zgj']), gj = !0x1, gp = 0x0; gp < this['zsf']['length']; gp++) {
                    var gT = this['zsf'][gp];
                    if (gT['zWW'] === gN && gT['zWz'] === gr && gT['zWH'] === gD) {
                        this['zsf'][gp]['zfd']['push'](gk),
                        this['zsf'][gp]['zsO']['push'](gn),
                        gj = !0x0;
                        break;
                    }
                }
                gj || this['zsf']['push']({
                    'zWW': gN,
                    'zWz': gr,
                    'zWH': gD,
                    'zfd': [gk],
                    'zsO': [gn]
                });
            }
            ,
            gE['zfu'] = function() {
                if (this['zCy']['zbV']()) {
                    this['zCy']['zuY'] = (0x0,
                    lF['XX'])(this['zsk']['zsH']['zFR']['zWW'], this['zsk']['zsH']['zFR']['zWz'], this['zsk']['zsH']['zFR']['zWH']),
                    this['zCy']['zux'] = (0x0,
                    lF['XX'])(Math['floor'](this['zsk']['zsH']['zFR']['zWW'] / l8['Z']['zLn']), Math['floor'](this['zsk']['zsH']['zFR']['zWz'] / l8['Z']['zLn']), Math['floor'](this['zsk']['zsH']['zFR']['zWH'] / l8['Z']['zLn'])),
                    this['zCy']['zup'] = this['zCt']['zBc']()['zbc']()['zFL'](this['zsk']['zsH']['zFR']['zWW'] / l8['Z']['zLn'], this['zsk']['zsH']['zFR']['zWz'] / l8['Z']['zLn'], this['zsk']['zsH']['zFR']['zWH'] / l8['Z']['zLn']),
                    this['zCy']['zuJ'] = (0x0,
                    lF['XX'])(this['zsk']['zsH']['zsr']['zWW'], this['zsk']['zsH']['zsr']['zWz'], this['zsk']['zsH']['zsr']['zWH']);
                    var gN = this['zvr']();
                    this['zCy']['zuS'] = gN['zWW'],
                    this['zCy']['zuE'] = gN['zWz'];
                }
            }
            ,
            gE['zbK'] = function(gN) {
                this['zfT'](gN),
                0x2 == ++this['zvF'] && (this['zvF'] = 0x0,
                this['zfq']());
            }
            ,
            gE['zfq'] = function() {
                for (var gN, gr = (0x0,
                lF['w1'])(this['zvu']['zut']()['position']), gD = this['zfw'](), gQ = 0xf423f, gd = void 0x0, gk = Ca(this['zFd']()['zBn']()['zfa']()); !(gN = gk())['done']; ) {
                    var gn = gN['value'];
                    if (gn['zfZ']() === CS['p']['zfR'] && -0x1 === gn['zOW']()) {
                        var gj = (0x0,
                        lF['w1'])(gn['zFJ']()['position']);
                        if (!((0x0,
                        lF['RJ'])(gr, gj) >= 0x10)) {
                            var gp = (0x0,
                            lF['XX'])(gj['zWW'] - gr['zWW'], gj['zWz'] - gr['zWz'], gj['zWH'] - gr['zWH'])
                              , gT = (0x0,
                            lF['r1'])(gp, gD)
                              , gZ = (0x0,
                            lF['XX'])(gr['zWW'] + gD['zWW'] * gT, gr['zWz'] + gD['zWz'] * gT, gr['zWH'] + gD['zWH'] * gT)
                              , gy = (0x0,
                            lF['RJ'])(gj, gZ);
                            if (!(gy > 0.09)) {
                                var gG = gT - Math['sqrt'](0.09 - gy);
                                gG <= gQ && (gQ = gG,
                                gd = gn);
                            }
                        }
                    }
                }
                var gO = void 0x0 !== gd && void 0x0 !== gd['ziJ']()
                  , gq = (0x0,
                lF['dg'])(gr);
                (0x0,
                lF['BZ'])(gq, l8['Z']['zLn']);
                var gA = this['zfS'](this['zvL'])
                  , gK = la['k']['zbh'];
                if (!(0x0,
                lL['s9'])() && gA['zvz']) {
                    var gW = this['zCt']['zBc']()['zbc']()['zFO'](gA['zWZ']['zWW'] - 0.01 * gA['zvH']['zWW'], gA['zWZ']['zWz'] - 0.01 * gA['zvH']['zWz'], gA['zWZ']['zWH'] - 0.01 * gA['zvH']['zWH']);
                    gK = this['zCt']['zBc']()['zbc']()['zFG'](gW['zWW'], gW['zWz'], gW['zWH']);
                }
                if (gO && gA['zvz']) {
                    var v0 = (0x0,
                    lF['dg'])(gA['zWZ']);
                    (0x0,
                    lF['Mt'])(v0, l8['Z']['zLn']),
                    (0x0,
                    lF['RJ'])(v0, gr) < gQ * gQ && (gO = !0x1);
                }
                if (this['zsU'] === CN)
                    -0x1 !== this['zvC'] && (this['zvC'] = -0x1,
                    this['zvi'] = 0x0,
                    lw['Z']['emit'](lg['x']['zOz'], Cw['q']['zzc'], CB['Sc']['zzB'], '', '', 0x1));
                else {
                    if (gO) {
                        if (gd['ziE']() !== this['zvC'] || gd['zfU']() !== this['zvi']) {
                            var v1 = this['zsk']['zrg']['zOH'](gd['ziJ']()['ziE'](), gd['zfU']());
                            this['zvC'] = gd['ziE'](),
                            this['zvi'] = gd['zfU'](),
                            lw['Z']['emit'](lg['x']['zOz'], gd['ziJ']()['zOT'](), gd['ziJ']()['zOL'](), (0x0,
                            Cz['r'])(gd['ziJ']()['zfQ']())['tier'], gd['ziJ']()['zOg'](), 'Press\x20' + (0x0,
                            lL['Ck'])(CX['ap']['INTERACT']) + '\x20to\x20' + (v1 ? 'pick\x20up' : 'swap'), gd['zfU']());
                        }
                    } else
                        gK === la['k']['zzr'] ? -0x2 !== this['zvC'] && (this['zvC'] = -0x2,
                        this['zvi'] = 0x0,
                        lw['Z']['emit'](lg['x']['zOz'], Cw['q']['zTA'] + la['k']['zzr'], CB['Sc']['zzB'], Cx['W3']['zzB'], 'Work\x20Station', 'Press\x20' + (0x0,
                        lL['Ck'])(CX['ap']['INTERACT']) + '\x20to\x20use', 0x1)) : gK === la['k']['zzD'] ? -0x3 !== this['zvC'] && (this['zvC'] = -0x3,
                        this['zvi'] = 0x0,
                        lw['Z']['emit'](lg['x']['zOz'], Cw['q']['zTA'] + la['k']['zzD'], CB['Sc']['zzB'], Cx['W3']['zzB'], 'Loadout\x20Station', 'Press\x20' + (0x0,
                        lL['Ck'])(CX['ap']['INTERACT']) + '\x20to\x20change\x20loadouts', 0x1)) : gK === la['k']['zzV'] ? -0x4 !== this['zvC'] && (this['zvC'] = -0x4,
                        this['zvi'] = 0x0,
                        lw['Z']['emit'](lg['x']['zOz'], Cw['q']['zTA'] + la['k']['zzV'], CB['Sc']['zzB'], Cx['W3']['zzB'], 'Wooden\x20Chest', 'Press\x20' + (0x0,
                        lL['Ck'])(CX['ap']['INTERACT']) + '\x20to\x20open', 0x1)) : gK === la['k']['zzj'] ? -0x5 !== this['zvC'] && (this['zvC'] = -0x5,
                        this['zvi'] = 0x0,
                        lw['Z']['emit'](lg['x']['zOz'], Cw['q']['zTA'] + la['k']['zzj'], CB['Sc']['zzB'], Cx['W3']['zzB'], 'Iron\x20Chest', 'Press\x20' + (0x0,
                        lL['Ck'])(CX['ap']['INTERACT']) + '\x20to\x20open', 0x1)) : gK === la['k']['zOr'] ? -0x6 !== this['zvC'] && (this['zvC'] = -0x6,
                        this['zvi'] = 0x0,
                        lw['Z']['emit'](lg['x']['zOz'], Cw['q']['zTA'] + la['k']['zOr'], CB['Sc']['zzB'], Cx['W3']['zzB'], 'Golden\x20Chest', 'Press\x20' + (0x0,
                        lL['Ck'])(CX['ap']['INTERACT']) + '\x20to\x20open', 0x1)) : -0x1 !== this['zvC'] && (this['zvC'] = -0x1,
                        this['zvi'] = 0x0,
                        lw['Z']['emit'](lg['x']['zOz'], Cw['q']['zzc'], CB['Sc']['zzB'], '', '', 0x1));
                }
            }
            ,
            gE['zOD'] = function(gN, gr) {
                for (var gD = -gr; gD <= gr; gD++)
                    for (var gQ = -gr; gQ <= gr; gQ++)
                        for (var gd = -gr; gd <= gr; gd++) {
                            var gk = (0x0,
                            lF['dg'])(this['zsk']['zsH']['zFR']);
                            if ((0x0,
                            lF['BZ'])(gk, l8['Z']['zLn']),
                            (0x0,
                            lF['$j'])(gk, (0x0,
                            lF['XX'])(gD, gQ, gd)),
                            this['zCt']['zBc']()['zbc']()['zFG'](gk['zWW'], gk['zWz'], gk['zWH']) === gN)
                                return !0x0;
                        }
                return !0x1;
            }
            ,
            gE['ziY'] = function() {
                return this['zvI'];
            }
            ,
            gE['zOV'] = function() {
                return this['zvI']['zvE'] || this['zvI']['zBL'] || this['zvI']['zvJ'] || this['zvI']['zBr'];
            }
            ,
            gE['zOj'] = function() {
                return this['zsk']['zsH']['zsT'];
            }
            ,
            gE['zkJ'] = function() {
                return this['zsk']['zsH']['zsg'];
            }
            ,
            gE['zOK'] = function() {
                return !this['zsk']['zsH']['zsL'];
            }
            ,
            gE['zOo'] = function() {
                return 0x6 * this['zsA']['zsH']['zsV'];
            }
            ,
            gE['zOu'] = function() {
                return 0x6 * this['zsk']['zsH']['zsV'];
            }
            ,
            gE['zvr'] = function() {
                var gN = new l7['USm']()['setFromQuaternion'](this['zvu']['zut']()['quaternion'], 'YXZ');
                return (0x0,
                C3['Ak'])(gN['zWW'], gN['zWz']);
            }
            ,
            gE['zOb'] = function() {
                var gN = this['ziX']['zBF']();
                return (0x0,
                C3['Ak'])(gN['zWW'], gN['zWz']);
            }
            ,
            gE['zfw'] = function() {
                var gN = this['zvr']();
                return (0x0,
                lb['ny'])(gN);
            }
            ,
            gE['zfg'] = function() {
                return this['zsk']['zrg'];
            }
            ,
            gE['zix'] = function() {
                return this['zsk'];
            }
            ,
            gE['zOF'] = function() {
                return this['zsk']['zsH'];
            }
            ,
            gE['zvm'] = function() {
                return this['zvu'];
            }
            ,
            gE['zFd'] = function() {
                return this['zCt'];
            }
            ,
            gE['zCV'] = function() {
                return this['zst'];
            }
            ,
            gE['zOC'] = function() {
                return this['ziX'];
            }
            ,
            gE['zOi'] = function() {
                return this['zsU'];
            }
            ,
            gm;
        }())
          , CD = l2(0x718f)
          , CQ = l2(0x109ea)
          , Cd = function(gm, gE, gN, gr) {
            var gD = gm['zWp'][lE(gE, gN, gr)];
            return void 0x0 === gD ? la['k']['zbh'] : gD;
        }
          , Ck = function(gm, gE, gN, gr) {
            return Cd(gm, gE, gN, gr) !== la['k']['zbh'];
        }
          , Cn = function(gm, gE, gN, gr) {
            return void 0x0 !== gm['zWp'][lE(gE, gN, gr)];
        }
          , Cj = function(gm) {
            var gE = []
              , gN = []
              , gr = []
              , gD = []
              , gQ = [gm['zWa']]
              , gd = new Set();
            for (gd['add'](lE(gm['zWa']['zWW'], gm['zWa']['zWz'], gm['zWa']['zWH'])); gQ['length'] > 0x0; ) {
                var gk = gQ['pop']()
                  , gn = gk['zWW']
                  , gj = gk['zWz']
                  , gp = gk['zWH']
                  , gT = gn - gm['zWa']['zWW']
                  , gZ = gj - gm['zWa']['zWz']
                  , gy = gp - gm['zWa']['zWH']
                  , gG = Ck(gm, gn, gj, gp)
                  , gO = lE(gn, gj + 0x1, gp);
                if (gG && !Ck(gm, gn, gj + 0x1, gp)) {
                    gE['push']((gT + 0.5) * l8['Z']['zLn'], (gZ + 0.5) * l8['Z']['zLn'], (gy + 0.5) * l8['Z']['zLn']),
                    gE['push']((gT - 0.5) * l8['Z']['zLn'], (gZ + 0.5) * l8['Z']['zLn'], (gy + 0.5) * l8['Z']['zLn']),
                    gE['push']((gT - 0.5) * l8['Z']['zLn'], (gZ + 0.5) * l8['Z']['zLn'], (gy - 0.5) * l8['Z']['zLn']),
                    gE['push']((gT + 0.5) * l8['Z']['zLn'], (gZ + 0.5) * l8['Z']['zLn'], (gy - 0.5) * l8['Z']['zLn']);
                    var gq = (0x0,
                    lX['ao'])(Ck(gm, gn + 0x1, gj + 0x1, gp), Ck(gm, gn, gj + 0x1, gp + 0x1), Ck(gm, gn + 0x1, gj + 0x1, gp + 0x1))
                      , gA = (0x0,
                    lX['ao'])(Ck(gm, gn, gj + 0x1, gp + 0x1), Ck(gm, gn - 0x1, gj + 0x1, gp), Ck(gm, gn - 0x1, gj + 0x1, gp + 0x1))
                      , gK = (0x0,
                    lX['ao'])(Ck(gm, gn - 0x1, gj + 0x1, gp), Ck(gm, gn, gj + 0x1, gp - 0x1), Ck(gm, gn - 0x1, gj + 0x1, gp - 0x1))
                      , gW = (0x0,
                    lX['ao'])(Ck(gm, gn, gj + 0x1, gp - 0x1), Ck(gm, gn + 0x1, gj + 0x1, gp), Ck(gm, gn + 0x1, gj + 0x1, gp - 0x1));
                    gr['push'](gq),
                    gr['push'](gA),
                    gr['push'](gK),
                    gr['push'](gW),
                    gq + gK < gA + gW ? (gN['push'](gE['length'] / 0x3 - 0x3, gE['length'] / 0x3 - 0x4, gE['length'] / 0x3 - 0x1),
                    gN['push'](gE['length'] / 0x3 - 0x1, gE['length'] / 0x3 - 0x2, gE['length'] / 0x3 - 0x3)) : (gN['push'](gE['length'] / 0x3 - 0x4, gE['length'] / 0x3 - 0x1, gE['length'] / 0x3 - 0x2),
                    gN['push'](gE['length'] / 0x3 - 0x2, gE['length'] / 0x3 - 0x3, gE['length'] / 0x3 - 0x4));
                    var v0 = lT['Z'][Cd(gm, gn, gj, gp)]['zWr']['zWD'];
                    gD['push'](v0['zWW'], v0['zWz'], 0x0, 0x1),
                    gD['push'](v0['zWW'], v0['zWz'], 0x1, 0x1),
                    gD['push'](v0['zWW'], v0['zWz'], 0x1, 0x0),
                    gD['push'](v0['zWW'], v0['zWz'], 0x0, 0x0);
                } else
                    Cn(gm, gn, gj + 0x1, gp) && !gd['has'](gO) && (gQ['push']((0x0,
                    lF['XX'])(gn, gj + 0x1, gp)),
                    gd['add'](gO));
                var v1 = lE(gn, gj - 0x1, gp);
                if (gG && !Ck(gm, gn, gj - 0x1, gp)) {
                    gE['push']((gT + 0.5) * l8['Z']['zLn'], (gZ - 0.5) * l8['Z']['zLn'], (gy - 0.5) * l8['Z']['zLn']),
                    gE['push']((gT - 0.5) * l8['Z']['zLn'], (gZ - 0.5) * l8['Z']['zLn'], (gy - 0.5) * l8['Z']['zLn']),
                    gE['push']((gT - 0.5) * l8['Z']['zLn'], (gZ - 0.5) * l8['Z']['zLn'], (gy + 0.5) * l8['Z']['zLn']),
                    gE['push']((gT + 0.5) * l8['Z']['zLn'], (gZ - 0.5) * l8['Z']['zLn'], (gy + 0.5) * l8['Z']['zLn']);
                    var v2 = (0x0,
                    lX['ao'])(Ck(gm, gn + 0x1, gj - 0x1, gp), Ck(gm, gn, gj - 0x1, gp - 0x1), Ck(gm, gn + 0x1, gj - 0x1, gp - 0x1))
                      , v3 = (0x0,
                    lX['ao'])(Ck(gm, gn, gj - 0x1, gp - 0x1), Ck(gm, gn - 0x1, gj - 0x1, gp), Ck(gm, gn - 0x1, gj - 0x1, gp - 0x1))
                      , v4 = (0x0,
                    lX['ao'])(Ck(gm, gn - 0x1, gj - 0x1, gp), Ck(gm, gn, gj - 0x1, gp + 0x1), Ck(gm, gn - 0x1, gj - 0x1, gp + 0x1))
                      , v5 = (0x0,
                    lX['ao'])(Ck(gm, gn, gj - 0x1, gp + 0x1), Ck(gm, gn + 0x1, gj - 0x1, gp), Ck(gm, gn + 0x1, gj - 0x1, gp + 0x1));
                    gr['push'](v2),
                    gr['push'](v3),
                    gr['push'](v4),
                    gr['push'](v5),
                    v2 + v4 < v3 + v5 ? (gN['push'](gE['length'] / 0x3 - 0x3, gE['length'] / 0x3 - 0x4, gE['length'] / 0x3 - 0x1),
                    gN['push'](gE['length'] / 0x3 - 0x1, gE['length'] / 0x3 - 0x2, gE['length'] / 0x3 - 0x3)) : (gN['push'](gE['length'] / 0x3 - 0x4, gE['length'] / 0x3 - 0x1, gE['length'] / 0x3 - 0x2),
                    gN['push'](gE['length'] / 0x3 - 0x2, gE['length'] / 0x3 - 0x3, gE['length'] / 0x3 - 0x4));
                    var v6 = lT['Z'][Cd(gm, gn, gj, gp)]['zWr']['zWV'];
                    gD['push'](v6['zWW'], v6['zWz'], 0x0, 0x1),
                    gD['push'](v6['zWW'], v6['zWz'], 0x1, 0x1),
                    gD['push'](v6['zWW'], v6['zWz'], 0x1, 0x0),
                    gD['push'](v6['zWW'], v6['zWz'], 0x0, 0x0);
                } else
                    Cn(gm, gn, gj - 0x1, gp) && !gd['has'](v1) && (gQ['push']((0x0,
                    lF['XX'])(gn, gj - 0x1, gp)),
                    gd['add'](v1));
                var v7 = lE(gn + 0x1, gj, gp);
                if (gG && !Ck(gm, gn + 0x1, gj, gp)) {
                    gE['push']((gT + 0.5) * l8['Z']['zLn'], (gZ + 0.5) * l8['Z']['zLn'], (gy + 0.5) * l8['Z']['zLn']),
                    gE['push']((gT + 0.5) * l8['Z']['zLn'], (gZ + 0.5) * l8['Z']['zLn'], (gy - 0.5) * l8['Z']['zLn']),
                    gE['push']((gT + 0.5) * l8['Z']['zLn'], (gZ - 0.5) * l8['Z']['zLn'], (gy - 0.5) * l8['Z']['zLn']),
                    gE['push']((gT + 0.5) * l8['Z']['zLn'], (gZ - 0.5) * l8['Z']['zLn'], (gy + 0.5) * l8['Z']['zLn']);
                    var v8 = (0x0,
                    lX['ao'])(Ck(gm, gn + 0x1, gj, gp + 0x1), Ck(gm, gn + 0x1, gj + 0x1, gp), Ck(gm, gn + 0x1, gj + 0x1, gp + 0x1))
                      , v9 = (0x0,
                    lX['ao'])(Ck(gm, gn + 0x1, gj + 0x1, gp), Ck(gm, gn + 0x1, gj, gp - 0x1), Ck(gm, gn + 0x1, gj + 0x1, gp - 0x1))
                      , vl = (0x0,
                    lX['ao'])(Ck(gm, gn + 0x1, gj, gp - 0x1), Ck(gm, gn + 0x1, gj - 0x1, gp), Ck(gm, gn + 0x1, gj - 0x1, gp - 0x1))
                      , vC = (0x0,
                    lX['ao'])(Ck(gm, gn + 0x1, gj - 0x1, gp), Ck(gm, gn + 0x1, gj, gp + 0x1), Ck(gm, gn + 0x1, gj - 0x1, gp + 0x1));
                    gr['push'](v8),
                    gr['push'](v9),
                    gr['push'](vl),
                    gr['push'](vC),
                    v8 + vl < v9 + vC ? (gN['push'](gE['length'] / 0x3 - 0x3, gE['length'] / 0x3 - 0x4, gE['length'] / 0x3 - 0x1),
                    gN['push'](gE['length'] / 0x3 - 0x1, gE['length'] / 0x3 - 0x2, gE['length'] / 0x3 - 0x3)) : (gN['push'](gE['length'] / 0x3 - 0x4, gE['length'] / 0x3 - 0x1, gE['length'] / 0x3 - 0x2),
                    gN['push'](gE['length'] / 0x3 - 0x2, gE['length'] / 0x3 - 0x3, gE['length'] / 0x3 - 0x4));
                    var vw = lT['Z'][Cd(gm, gn, gj, gp)]['zWr']['zWj'];
                    gD['push'](vw['zWW'], vw['zWz'], 0x0, 0x1),
                    gD['push'](vw['zWW'], vw['zWz'], 0x1, 0x1),
                    gD['push'](vw['zWW'], vw['zWz'], 0x1, 0x0),
                    gD['push'](vw['zWW'], vw['zWz'], 0x0, 0x0);
                } else
                    Cn(gm, gn + 0x1, gj, gp) && !gd['has'](v7) && (gQ['push']((0x0,
                    lF['XX'])(gn + 0x1, gj, gp)),
                    gd['add'](v7));
                var vg = lE(gn - 0x1, gj, gp);
                if (gG && !Ck(gm, gn - 0x1, gj, gp)) {
                    gE['push']((gT - 0.5) * l8['Z']['zLn'], (gZ + 0.5) * l8['Z']['zLn'], (gy - 0.5) * l8['Z']['zLn']),
                    gE['push']((gT - 0.5) * l8['Z']['zLn'], (gZ + 0.5) * l8['Z']['zLn'], (gy + 0.5) * l8['Z']['zLn']),
                    gE['push']((gT - 0.5) * l8['Z']['zLn'], (gZ - 0.5) * l8['Z']['zLn'], (gy + 0.5) * l8['Z']['zLn']),
                    gE['push']((gT - 0.5) * l8['Z']['zLn'], (gZ - 0.5) * l8['Z']['zLn'], (gy - 0.5) * l8['Z']['zLn']);
                    var vv = (0x0,
                    lX['ao'])(Ck(gm, gn - 0x1, gj, gp - 0x1), Ck(gm, gn - 0x1, gj + 0x1, gp), Ck(gm, gn - 0x1, gj + 0x1, gp - 0x1))
                      , vF = (0x0,
                    lX['ao'])(Ck(gm, gn - 0x1, gj + 0x1, gp), Ck(gm, gn - 0x1, gj, gp + 0x1), Ck(gm, gn - 0x1, gj + 0x1, gp + 0x1))
                      , vL = (0x0,
                    lX['ao'])(Ck(gm, gn - 0x1, gj, gp + 0x1), Ck(gm, gn - 0x1, gj - 0x1, gp), Ck(gm, gn - 0x1, gj - 0x1, gp + 0x1))
                      , vH = (0x0,
                    lX['ao'])(Ck(gm, gn - 0x1, gj - 0x1, gp), Ck(gm, gn - 0x1, gj, gp - 0x1), Ck(gm, gn - 0x1, gj - 0x1, gp - 0x1));
                    gr['push'](vv),
                    gr['push'](vF),
                    gr['push'](vL),
                    gr['push'](vH),
                    vv + vL < vF + vH ? (gN['push'](gE['length'] / 0x3 - 0x3, gE['length'] / 0x3 - 0x4, gE['length'] / 0x3 - 0x1),
                    gN['push'](gE['length'] / 0x3 - 0x1, gE['length'] / 0x3 - 0x2, gE['length'] / 0x3 - 0x3)) : (gN['push'](gE['length'] / 0x3 - 0x4, gE['length'] / 0x3 - 0x1, gE['length'] / 0x3 - 0x2),
                    gN['push'](gE['length'] / 0x3 - 0x2, gE['length'] / 0x3 - 0x3, gE['length'] / 0x3 - 0x4));
                    var vS = lT['Z'][Cd(gm, gn, gj, gp)]['zWr']['zWK'];
                    gD['push'](vS['zWW'], vS['zWz'], 0x0, 0x1),
                    gD['push'](vS['zWW'], vS['zWz'], 0x1, 0x1),
                    gD['push'](vS['zWW'], vS['zWz'], 0x1, 0x0),
                    gD['push'](vS['zWW'], vS['zWz'], 0x0, 0x0);
                } else
                    Cn(gm, gn - 0x1, gj, gp) && !gd['has'](vg) && (gQ['push']((0x0,
                    lF['XX'])(gn - 0x1, gj, gp)),
                    gd['add'](vg));
                var vb = lE(gn, gj, gp + 0x1);
                if (gG && !Ck(gm, gn, gj, gp + 0x1)) {
                    gE['push']((gT - 0.5) * l8['Z']['zLn'], (gZ + 0.5) * l8['Z']['zLn'], (gy + 0.5) * l8['Z']['zLn']),
                    gE['push']((gT + 0.5) * l8['Z']['zLn'], (gZ + 0.5) * l8['Z']['zLn'], (gy + 0.5) * l8['Z']['zLn']),
                    gE['push']((gT + 0.5) * l8['Z']['zLn'], (gZ - 0.5) * l8['Z']['zLn'], (gy + 0.5) * l8['Z']['zLn']),
                    gE['push']((gT - 0.5) * l8['Z']['zLn'], (gZ - 0.5) * l8['Z']['zLn'], (gy + 0.5) * l8['Z']['zLn']);
                    var vc = (0x0,
                    lX['ao'])(Ck(gm, gn - 0x1, gj, gp + 0x1), Ck(gm, gn, gj + 0x1, gp + 0x1), Ck(gm, gn - 0x1, gj + 0x1, gp + 0x1))
                      , vh = (0x0,
                    lX['ao'])(Ck(gm, gn, gj + 0x1, gp + 0x1), Ck(gm, gn + 0x1, gj, gp + 0x1), Ck(gm, gn + 0x1, gj + 0x1, gp + 0x1))
                      , vJ = (0x0,
                    lX['ao'])(Ck(gm, gn + 0x1, gj, gp + 0x1), Ck(gm, gn, gj - 0x1, gp + 0x1), Ck(gm, gn + 0x1, gj - 0x1, gp + 0x1))
                      , vY = (0x0,
                    lX['ao'])(Ck(gm, gn, gj - 0x1, gp + 0x1), Ck(gm, gn - 0x1, gj, gp + 0x1), Ck(gm, gn - 0x1, gj - 0x1, gp + 0x1));
                    gr['push'](vc),
                    gr['push'](vh),
                    gr['push'](vJ),
                    gr['push'](vY),
                    vc + vJ < vh + vY ? (gN['push'](gE['length'] / 0x3 - 0x3, gE['length'] / 0x3 - 0x4, gE['length'] / 0x3 - 0x1),
                    gN['push'](gE['length'] / 0x3 - 0x1, gE['length'] / 0x3 - 0x2, gE['length'] / 0x3 - 0x3)) : (gN['push'](gE['length'] / 0x3 - 0x4, gE['length'] / 0x3 - 0x1, gE['length'] / 0x3 - 0x2),
                    gN['push'](gE['length'] / 0x3 - 0x2, gE['length'] / 0x3 - 0x3, gE['length'] / 0x3 - 0x4));
                    var vV = lT['Z'][Cd(gm, gn, gj, gp)]['zWr']['zWo'];
                    gD['push'](vV['zWW'], vV['zWz'], 0x0, 0x1),
                    gD['push'](vV['zWW'], vV['zWz'], 0x1, 0x1),
                    gD['push'](vV['zWW'], vV['zWz'], 0x1, 0x0),
                    gD['push'](vV['zWW'], vV['zWz'], 0x0, 0x0);
                } else
                    Cn(gm, gn, gj, gp + 0x1) && !gd['has'](vb) && (gQ['push']((0x0,
                    lF['XX'])(gn, gj, gp + 0x1)),
                    gd['add'](vb));
                var vU = lE(gn, gj, gp - 0x1);
                if (gG && !Ck(gm, gn, gj, gp - 0x1)) {
                    gE['push']((gT + 0.5) * l8['Z']['zLn'], (gZ + 0.5) * l8['Z']['zLn'], (gy - 0.5) * l8['Z']['zLn']),
                    gE['push']((gT - 0.5) * l8['Z']['zLn'], (gZ + 0.5) * l8['Z']['zLn'], (gy - 0.5) * l8['Z']['zLn']),
                    gE['push']((gT - 0.5) * l8['Z']['zLn'], (gZ - 0.5) * l8['Z']['zLn'], (gy - 0.5) * l8['Z']['zLn']),
                    gE['push']((gT + 0.5) * l8['Z']['zLn'], (gZ - 0.5) * l8['Z']['zLn'], (gy - 0.5) * l8['Z']['zLn']);
                    var vs = (0x0,
                    lX['ao'])(Ck(gm, gn + 0x1, gj, gp - 0x1), Ck(gm, gn, gj + 0x1, gp - 0x1), Ck(gm, gn + 0x1, gj + 0x1, gp - 0x1))
                      , vI = (0x0,
                    lX['ao'])(Ck(gm, gn, gj + 0x1, gp - 0x1), Ck(gm, gn - 0x1, gj, gp - 0x1), Ck(gm, gn - 0x1, gj + 0x1, gp - 0x1))
                      , vP = (0x0,
                    lX['ao'])(Ck(gm, gn - 0x1, gj, gp - 0x1), Ck(gm, gn, gj - 0x1, gp - 0x1), Ck(gm, gn - 0x1, gj - 0x1, gp - 0x1))
                      , vR = (0x0,
                    lX['ao'])(Ck(gm, gn, gj - 0x1, gp - 0x1), Ck(gm, gn + 0x1, gj, gp - 0x1), Ck(gm, gn + 0x1, gj - 0x1, gp - 0x1));
                    gr['push'](vs),
                    gr['push'](vI),
                    gr['push'](vP),
                    gr['push'](vR),
                    vs + vP < vI + vR ? (gN['push'](gE['length'] / 0x3 - 0x3, gE['length'] / 0x3 - 0x4, gE['length'] / 0x3 - 0x1),
                    gN['push'](gE['length'] / 0x3 - 0x1, gE['length'] / 0x3 - 0x2, gE['length'] / 0x3 - 0x3)) : (gN['push'](gE['length'] / 0x3 - 0x4, gE['length'] / 0x3 - 0x1, gE['length'] / 0x3 - 0x2),
                    gN['push'](gE['length'] / 0x3 - 0x2, gE['length'] / 0x3 - 0x3, gE['length'] / 0x3 - 0x4));
                    var vf = lT['Z'][Cd(gm, gn, gj, gp)]['zWr']['zWu'];
                    gD['push'](vf['zWW'], vf['zWz'], 0x0, 0x1),
                    gD['push'](vf['zWW'], vf['zWz'], 0x1, 0x1),
                    gD['push'](vf['zWW'], vf['zWz'], 0x1, 0x0),
                    gD['push'](vf['zWW'], vf['zWz'], 0x0, 0x0);
                } else
                    Cn(gm, gn, gj, gp - 0x1) && !gd['has'](vU) && (gQ['push']((0x0,
                    lF['XX'])(gn, gj, gp - 0x1)),
                    gd['add'](vU));
            }
            return {
                'zWZ': (0x0,
                lF['XX'])((gm['zWa']['zWW'] + 0.5) * l8['Z']['zLn'], (gm['zWa']['zWz'] + 0.5) * l8['Z']['zLn'], (gm['zWa']['zWH'] + 0.5) * l8['Z']['zLn']),
                'zWR': gE,
                'zzW': gN,
                'zzz': gr,
                'zzH': gD
            };
        };
        function Cp(gm, gE) {
            var gN = 'undefined' != typeof Symbol && gm[Symbol['iterator']] || gm['@@iterator'];
            if (gN)
                return (gN = gN['call'](gm))['next']['bind'](gN);
            if (Array['isArray'](gm) || (gN = function(gD, gQ) {
                if (!gD)
                    return;
                if ('string' == typeof gD)
                    return CT(gD, gQ);
                var gd = Object['prototype']['toString']['call'](gD)['slice'](0x8, -0x1);
                'Object' === gd && gD['constructor'] && (gd = gD['constructor']['name']);
                if ('Map' === gd || 'Set' === gd)
                    return Array['from'](gD);
                if ('Arguments' === gd || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/['test'](gd))
                    return CT(gD, gQ);
            }(gm)) || gE && gm && 'number' == typeof gm['length']) {
                gN && (gm = gN);
                var gr = 0x0;
                return function() {
                    return gr >= gm['length'] ? {
                        'done': !0x0
                    } : {
                        'done': !0x1,
                        'value': gm[gr++]
                    };
                }
                ;
            }
            throw new TypeError('Invalid\x20attempt\x20to\x20iterate\x20non-iterable\x20instance.\x0aIn\x20order\x20to\x20be\x20iterable,\x20non-array\x20objects\x20must\x20have\x20a\x20[Symbol.iterator]()\x20method.');
        }
        function CT(gm, gE) {
            (null == gE || gE > gm['length']) && (gE = gm['length']);
            for (var gN = 0x0, gr = new Array(gE); gN < gE; gN++)
                gr[gN] = gm[gN];
            return gr;
        }
        var CZ = (function() {
            function gm(gN) {
                var gr = this;
                this['zOB'] = function(gQ, gd) {
                    if (void 0x0 !== gr['zAN']) {
                        if (gr['zAN']['ziE']() === gd['ziJ']()['ziE']())
                            return;
                        (0x0,
                        C7['Lq'])(gr['zAN']['ziE']()) ? gr['zOA']() : gr['zAN']instanceof CQ['Z'] ? gr['zOk'](void 0x0) : gr['zAN']['ziE']() !== Cw['q']['zTC'] && gr['zAN']['ziE']() !== Cw['q']['zTi'] || gr['zOs'](void 0x0);
                    }
                    gr['zAN'] = gd['ziJ'](),
                    (0x0,
                    C7['Lq'])(gd['ziJ']()['ziE']()) ? (gr['zOv'](gd['ziJ']()['ziE']() - Cw['q']['zTA']),
                    gr['zOf']()) : gd['ziJ']()instanceof CQ['Z'] ? (gr['zOO']['opacity'] = 0.1,
                    gr['zOy']()) : gr['zAN']['ziE']() === Cw['q']['zTC'] ? (gr['zOO']['opacity'] = 0.4,
                    gr['zOP']()) : gr['zAN']['ziE']() === Cw['q']['zTi'] && (gr['zOO']['opacity'] = 0.2,
                    gr['zOU']());
                }
                ,
                this['zst'] = gN;
                var gD = new l7['nvb'](l8['Z']['zLn'],l8['Z']['zLn'],l8['Z']['zLn']);
                this['zOO'] = new l7['vBJ']({
                    'color': 0xffffff,
                    'transparent': !0x0,
                    'opacity': 0.1,
                    'zTQ': !0x1
                }),
                this['zOt'] = new l7['Kj0'](gD,this['zOO']),
                this['zOt']['type'] = (0x0,
                ll['D_'])(),
                this['zOt']['zTt'] = -0x1,
                this['zOt']['scale']['set'](1.001, 1.001, 1.001),
                this['zst']['zCj']()['zFd']()['zuO']()['add'](this['zOt']),
                this['zOn'] = CC['f']['zTA'],
                this['zOc'] = new l7['jyz']({
                    'transparent': !0x0,
                    'uniforms': {
                        'map': {
                            'value': l9['Z']['zbO']()
                        }
                    },
                    'zTl': '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20attribute\x20vec4\x20realUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec4\x20vRealUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20mvPosition\x20=\x20modelViewMatrix\x20*\x20vec4(position,\x201.0);;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20projectionMatrix\x20*\x20mvPosition;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vRealUv\x20=\x20realUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
                    'zTm': '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20sampler2D\x20map;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec4\x20vRealUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20atlasDim\x20=\x20' + l8['Z']['zLs']['toFixed'](0x1) + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20diffuseColor\x20=\x20vec4(1.0,\x201.0,\x201.0,\x200.4);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20tilePosX\x20=\x20max(0.05,\x20min(0.95,\x20fract(vRealUv.z)));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20tilePosY\x20=\x20max(0.05,\x20min(0.95,\x20fract(vRealUv.w)));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20uv\x20=\x20vec2(vRealUv.x\x20*\x20(1.0\x20/\x20atlasDim)\x20+\x20tilePosX\x20*\x20(1.0\x20/\x20atlasDim),\x20vRealUv.y\x20*\x20(1.0\x20/\x20atlasDim)\x20+\x20tilePosY\x20*\x20(1.0\x20/\x20atlasDim));\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20texelColor\x20=\x20texture2D(map,\x20uv);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20texelColor\x20=\x20mapTexelToLinear(texelColor);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20diffuseColor\x20*=\x20texelColor.rgba;\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20diffuseColor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
                    'fog': !0x1,
                    'zTQ': !0x1
                }),
                this['zOG'] = new l7['vBJ']({
                    'color': 0xff0000,
                    'transparent': !0x0,
                    'opacity': 0.3,
                    'zTQ': !0x1
                }),
                this['zCc']();
            }
            var gE = gm['prototype'];
            return gE['zCc'] = function() {
                lw['Z']['on'](lg['x']['zfm'], this['zOB']);
            }
            ,
            gE['zus'] = function(gN, gr) {
                void 0x0 !== this['zAN'] && ((0x0,
                C7['Lq'])(this['zAN']['ziE']()) ? (this['zOn'] !== this['zst']['zCj']()['zix']()['zsK'] && (this['zOn'] = this['zst']['zCj']()['zix']()['zsK'],
                this['zOv'](this['zAN']['ziE']() - Cw['q']['zTA'])),
                this['zOf']()) : this['zAN']instanceof CQ['Z'] ? this['zOy']() : this['zAN']['ziE']() === Cw['q']['zTC'] ? this['zOP']() : this['zAN']['ziE']() === Cw['q']['zTi'] && this['zOU']());
            }
            ,
            gE['zOP'] = function() {
                var gN = this['zst']['zCj']()['zfe']();
                this['zOs'](gN);
            }
            ,
            gE['zOU'] = function() {
                var gN = this['zst']['zCj']()['zfN']();
                this['zOs'](gN);
            }
            ,
            gE['zOy'] = function() {
                var gN = this['zst']['zCj']()['zfh']();
                this['zOk'](gN);
            }
            ,
            gE['zOs'] = function(gN) {
                if (gN) {
                    var gr = this['zst']['zCj']()['zFd']()['zBc']()['zbc']()['zFy'](gN['zWW'], gN['zWz'], gN['zWH']);
                    this['zOt']['position']['set'](gr['zWW'], gr['zWz'], gr['zWH']);
                } else
                    this['zOt']['position']['set'](0x0, -0x3e7, 0x0);
            }
            ,
            gE['zOk'] = function(gN) {
                var gr = this['zAN'];
                gN && this['zAN']instanceof CQ['Z'] && gr['zOQ'](this['zst']['zCj']()['zFd']()['zBc']()['zbc']()['zFG'](gN['zWW'], gN['zWz'], gN['zWH'])) ? this['zOs'](gN) : this['zOt']['position']['set'](0x0, -0x3e7, 0x0);
            }
            ,
            gE['zOv'] = function(gN) {
                this['zOA']();
                var gr = {
                    'zzT': lx['BLOCKS_MESH'],
                    'zWa': (0x0,
                    lF['XX'])(0x0, 0x0, 0x0),
                    'zWp': {}
                };
                if (this['zOn'] === CC['f']['zTA'])
                    gr['zWp'][lE(0x0, 0x0, 0x0)] = gN;
                else {
                    if (this['zOn'] === CC['f']['zOl']) {
                        for (var gD = -0x1; gD <= 0x1; gD++)
                            for (var gQ = 0x0; gQ <= 0x2; gQ++)
                                gr['zWp'][lE(gD, gQ, 0x0)] = gN;
                    } else {
                        if (this['zOn'] === CC['f']['zOm']) {
                            for (var gd = -0x1; gd <= 0x1; gd++)
                                gr['zWp'][lE(gd, 0x0, 0x0)] = gN,
                                gr['zWp'][lE(gd, 0x0, 0x1)] = gN,
                                gr['zWp'][lE(gd, 0x1, 0x1)] = gN,
                                gr['zWp'][lE(gd, 0x1, 0x2)] = gN;
                        } else {
                            if (this['zOn'] === CC['f']['zOI']) {
                                for (var gk = -0x1; gk <= 0x1; gk++)
                                    for (var gn = -0x1; gn <= 0x1; gn++)
                                        gr['zWp'][lE(gk, 0x0, gn)] = gN;
                            }
                        }
                    }
                }
                var gj = Cj(gr)
                  , gp = gj['zzW']
                  , gT = gj['zWR']
                  , gZ = gj['zzH']
                  , gy = gj['zzz']
                  , gG = new l7['u9r']();
                gG['setAttribute']('position', new l7['a$l'](gT,0x3)),
                gG['setIndex'](new l7['qlB'](gp,0x1)),
                gG['setAttribute']('ao', new l7['WTc'](gy,0x1,!0x0)),
                gG['setAttribute']('realUv', new l7['WTc'](gZ,0x4)),
                this['zOX'] = new l7['Kj0'](gG,this['zOc']),
                this['zOX']['type'] = (0x0,
                ll['D_'])(),
                this['zOX']['scale']['set'](0.999, 0.999, 0.999),
                this['zOX']['zTt'] = -0x1,
                this['zst']['zCj']()['zFd']()['zuO']()['add'](this['zOX']);
            }
            ,
            gE['zOA'] = function() {
                void 0x0 !== this['zOX'] && (this['zOX']['geometry']['dispose'](),
                this['zst']['zCj']()['zFd']()['zuO']()['remove'](this['zOX']),
                this['zOX'] = void 0x0);
            }
            ,
            gE['zOf'] = function() {
                if (void 0x0 !== this['zOX']) {
                    var gN = this['zst']['zCj']()['zfS'](this['zst']['zCj']()['zvL']);
                    if (gN['zvz']) {
                        var gr = this['zst']['zCj']()['zFd']()['zBc']()['zbc']()['zFO'](gN['zWZ']['zWW'] + 0.01 * gN['zvH']['zWW'], gN['zWZ']['zWz'] + 0.01 * gN['zvH']['zWz'], gN['zWZ']['zWH'] + 0.01 * gN['zvH']['zWH'])
                          , gD = [];
                        if (this['zOn'] === CC['f']['zOl']) {
                            var gQ = (0x0,
                            lF['r1'])(this['zst']['zCj']()['zfw'](), (0x0,
                            lF['XX'])(0x0, 0x0, 0x1));
                            if (Math['abs'](gQ) < 0.5) {
                                for (var gd = -0x1; gd <= 0x1; gd++)
                                    for (var gk = 0x0; gk <= 0x2; gk++)
                                        gD['push']((0x0,
                                        lF['XX'])(gr['zWW'], gk + gr['zWz'], gd + gr['zWH']));
                                this['zOX']['rotation']['set'](0x0, Math['PI'] / 0x2, 0x0);
                            } else {
                                for (var gn = -0x1; gn <= 0x1; gn++)
                                    for (var gj = 0x0; gj <= 0x2; gj++)
                                        gD['push']((0x0,
                                        lF['XX'])(gn + gr['zWW'], gj + gr['zWz'], gr['zWH']));
                                this['zOX']['rotation']['set'](0x0, 0x0, 0x0);
                            }
                        } else {
                            if (this['zOn'] === CC['f']['zTA'])
                                gD['push'](gr);
                            else {
                                if (this['zOn'] === CC['f']['zOm']) {
                                    var gp = this['zst']['zCj']()['zvr']()['zWz'];
                                    if (gp >= -Math['PI'] / 0x4 && gp <= Math['PI'] / 0x4) {
                                        for (var gT = -0x1; gT <= 0x1; gT++)
                                            gD['push']((0x0,
                                            lF['XX'])(gT + gr['zWW'], 0x0 + gr['zWz'], 0x0 + gr['zWH'])),
                                            gD['push']((0x0,
                                            lF['XX'])(gT + gr['zWW'], 0x0 + gr['zWz'], -0x1 + gr['zWH'])),
                                            gD['push']((0x0,
                                            lF['XX'])(gT + gr['zWW'], 0x1 + gr['zWz'], -0x1 + gr['zWH'])),
                                            gD['push']((0x0,
                                            lF['XX'])(gT + gr['zWW'], 0x1 + gr['zWz'], -0x2 + gr['zWH']));
                                        this['zOX']['rotation']['set'](0x0, -Math['PI'], 0x0);
                                    } else {
                                        if (gp >= -Math['PI'] / 0x4 * 0x3 && gp < -Math['PI'] / 0x4) {
                                            for (var gZ = -0x1; gZ <= 0x1; gZ++)
                                                gD['push']((0x0,
                                                lF['XX'])(0x0 + gr['zWW'], 0x0 + gr['zWz'], gZ + gr['zWH'])),
                                                gD['push']((0x0,
                                                lF['XX'])(0x1 + gr['zWW'], 0x0 + gr['zWz'], gZ + gr['zWH'])),
                                                gD['push']((0x0,
                                                lF['XX'])(0x1 + gr['zWW'], 0x1 + gr['zWz'], gZ + gr['zWH'])),
                                                gD['push']((0x0,
                                                lF['XX'])(0x2 + gr['zWW'], 0x1 + gr['zWz'], gZ + gr['zWH']));
                                            this['zOX']['rotation']['set'](0x0, Math['PI'] / 0x2, 0x0);
                                        } else {
                                            if (gp < -Math['PI'] / 0x4 * 0x3 || gp >= Math['PI'] / 0x4 * 0x3) {
                                                for (var gy = -0x1; gy <= 0x1; gy++)
                                                    gD['push']((0x0,
                                                    lF['XX'])(gy + gr['zWW'], 0x0 + gr['zWz'], 0x0 + gr['zWH'])),
                                                    gD['push']((0x0,
                                                    lF['XX'])(gy + gr['zWW'], 0x0 + gr['zWz'], 0x1 + gr['zWH'])),
                                                    gD['push']((0x0,
                                                    lF['XX'])(gy + gr['zWW'], 0x1 + gr['zWz'], 0x1 + gr['zWH'])),
                                                    gD['push']((0x0,
                                                    lF['XX'])(gy + gr['zWW'], 0x1 + gr['zWz'], 0x2 + gr['zWH']));
                                                this['zOX']['rotation']['set'](0x0, 0x0, 0x0);
                                            } else {
                                                for (var gG = -0x1; gG <= 0x1; gG++)
                                                    gD['push']((0x0,
                                                    lF['XX'])(0x0 + gr['zWW'], 0x0 + gr['zWz'], gG + gr['zWH'])),
                                                    gD['push']((0x0,
                                                    lF['XX'])(-0x1 + gr['zWW'], 0x0 + gr['zWz'], gG + gr['zWH'])),
                                                    gD['push']((0x0,
                                                    lF['XX'])(-0x1 + gr['zWW'], 0x1 + gr['zWz'], gG + gr['zWH'])),
                                                    gD['push']((0x0,
                                                    lF['XX'])(-0x2 + gr['zWW'], 0x1 + gr['zWz'], gG + gr['zWH']));
                                                this['zOX']['rotation']['set'](0x0, -Math['PI'] / 0x2, 0x0);
                                            }
                                        }
                                    }
                                } else {
                                    if (this['zOn'] === CC['f']['zOI']) {
                                        var gO = this['zst']['zCj']()['zfw']()
                                          , gq = Math['abs'](gO['zWW']) > Math['abs'](gO['zWH']) ? gO['zWW'] > 0x0 ? (0x0,
                                        lF['XX'])(0x1, 0x0, 0x0) : (0x0,
                                        lF['XX'])(-0x1, 0x0, 0x0) : gO['zWH'] > 0x0 ? (0x0,
                                        lF['XX'])(0x0, 0x0, 0x1) : (0x0,
                                        lF['XX'])(0x0, 0x0, -0x1);
                                        if (0x0 === gN['zvH']['zWz'])
                                            (0x0,
                                            lF['$j'])(gr, gN['zvH']);
                                        else {
                                            var gA = this['zst']['zCj']()['zFd']()['zBc']()['zbc']()['zFO'](gN['zWZ']['zWW'] - 0.01 * gN['zvH']['zWW'], gN['zWZ']['zWz'] - 0.01 * gN['zvH']['zWz'], gN['zWZ']['zWH'] - 0.01 * gN['zvH']['zWH'])
                                              , gK = (0x0,
                                            lF['dg'])(gA)
                                              , gW = (0x0,
                                            lF['dg'])(gA);
                                            (0x0,
                                            lF['$j'])(gK, gq),
                                            (0x0,
                                            lF['$j'])(gW, gq),
                                            (0x0,
                                            lF['$j'])(gW, (0x0,
                                            lF['XX'])(0x0, gN['zvH']['zWz'], 0x0));
                                            var v0 = this['zst']['zCj']()['zFd']()['zBc']()['zbc']()['zFG'](gK['zWW'], gK['zWz'], gK['zWH'])
                                              , v1 = this['zst']['zCj']()['zFd']()['zBc']()['zbc']()['zFG'](gW['zWW'], gW['zWz'], gW['zWH']);
                                            lT['Z'][v0]['zWg'] || lT['Z'][v1]['zWg'] || ((0x0,
                                            lF['$j'])(gr, gq),
                                            (0x0,
                                            lF['$j'])(gr, gq),
                                            (0x0,
                                            lF['$j'])(gr, (0x0,
                                            lF['XX'])(0x0, -gN['zvH']['zWz'], 0x0)));
                                        }
                                        for (var v2 = -0x1; v2 <= 0x1; v2++)
                                            for (var v3 = -0x1; v3 <= 0x1; v3++)
                                                gD['push']((0x0,
                                                lF['XX'])(v2 + gr['zWW'], gr['zWz'], v3 + gr['zWH']));
                                    }
                                }
                            }
                        }
                        this['zOX']['visible'] = !0x0;
                        var v4 = this['zst']['zCj']()['zFd']()['zBc']()['zbc']()['zFy'](gr['zWW'], gr['zWz'], gr['zWH']);
                        if (this['zOX']['position']['set'](v4['zWW'], v4['zWz'], v4['zWH']),
                        this['zOY'](gD)) {
                            for (var v5 = 0x0, v6 = 0x0; v6 < gD['length']; v6++) {
                                var v7 = gD[v6]
                                  , v8 = this['zst']['zCj']()['zFd']()['zBc']()['zbc']()['zFG'](v7['zWW'], v7['zWz'], v7['zWH']);
                                lT['Z'][v8]['zWg'] || ++v5;
                            }
                            this['zst']['zCj']()['zix']()['zrg']['zOx']([{
                                'type': this['zAN']['ziE'](),
                                'count': v5
                            }]) ? this['zOX']['material'] = this['zOc'] : this['zOX']['material'] = this['zOG'];
                        } else
                            this['zOX']['material'] = this['zOG'];
                    } else
                        this['zOX']['visible'] = !0x1;
                }
            }
            ,
            gE['zOY'] = function(gN) {
                for (var gr = this['zst']['zCj']()['zFd']()['zBn']()['zfa'](), gD = (0x0,
                C2['FY'])(this['zst']['zCj']()['zOF']()['zFR'], this['zst']['zCj']()['zOF']()['zsD']), gQ = 0x0; gQ < gN['length']; gQ++) {
                    var gd = gN[gQ]
                      , gk = this['zst']['zCj']()['zFd']()['zBc']()['zbc']()['zFy'](gd['zWW'], gd['zWz'], gd['zWH'])
                      , gn = (0x0,
                    C2['Z5'])(gk);
                    if ((0x0,
                    CD['v'])(gD, gn))
                        return !0x1;
                    for (var gj, gp = Cp(gr); !(gj = gp())['done']; ) {
                        var gT = gj['value'];
                        if (gT['zfZ']() === CS['p']['zBO']) {
                            var gZ = gT;
                            if (gZ['zka']()) {
                                var gy = (0x0,
                                C2['FY'])((0x0,
                                lF['w1'])(gZ['zFJ']()['position']), gZ['zkJ']() === lW['b']['zBs'] ? l8['Z']['zLI'] : l8['Z']['zLQ']);
                                if ((0x0,
                                CD['v'])(gy, gn))
                                    return !0x1;
                            }
                        }
                    }
                }
                return !0x0;
            }
            ,
            gm;
        }())
          , Cy = (function() {
            function gm(gN) {
                this['zst'] = gN,
                this['zCn'] = new l7['Tme'](),
                this['zCn']['type'] = (0x0,
                ll['D_'])(),
                this['zOp'] = [];
            }
            var gE = gm['prototype'];
            return gE['zOJ'] = function(gN, gr, gD) {
                if (this['zst']['zFd']()['zOE']()['zOS']) {
                    var gQ = l9['Z']['zBQ'](gD);
                    (0x0,
                    lF['cz'])(gr);
                    var gd = new l7['_fP']();
                    gd['setFromUnitVectors'](new l7['Pa4'](0x0,0x0,0x1), new l7['Pa4'](gr['zWW'],gr['zWz'],gr['zWH'])),
                    gQ['position']['set'](gN['zWW'], gN['zWz'], gN['zWH']),
                    gQ['rotation']['setFromQuaternion'](gd);
                    var gk = new l7['Pa4'](0x0,0x0,0x1);
                    gk['applyQuaternion'](gd),
                    this['zCn']['add'](gQ);
                    var gn = new l7['Pa4']();
                    gn['setFromMatrixColumn'](this['zst']['zCj']()['zvm']()['zun']()['matrix'], 0x0),
                    gn['normalize'](),
                    gn['multiplyScalar'](0x2),
                    gn['zWz'] = 1.5,
                    this['zOp']['push']({
                        'mesh': gQ,
                        'origin': gN,
                        'velocity': (0x0,
                        lF['w1'])(gn),
                        'rotationalAxis': gk
                    });
                }
            }
            ,
            gE['zus'] = function(gN, gr) {
                for (var gD = 0x0; gD < this['zOp']['length']; gD++) {
                    var gQ = this['zOp'][gD]
                      , gd = gQ['mesh']['position'];
                    gQ['mesh']['position']['set'](gd['zWW'] + gQ['velocity']['zWW'] * gN, gd['zWz'] + gQ['velocity']['zWz'] * gN, gd['zWH'] + gQ['velocity']['zWH'] * gN),
                    gQ['velocity']['zWz'] -= 0xf * gN,
                    gQ['mesh']['rotateOnWorldAxis'](gQ['rotationalAxis'], 0x14 * gN),
                    gQ['origin']['zWz'] - gd['zWz'] > 0x5 && (this['zCn']['remove'](gQ['mesh']),
                    l9['Z']['zAR'](gQ['mesh']),
                    this['zOp'][gD] = this['zOp'][this['zOp']['length'] - 0x1],
                    this['zOp']['pop'](),
                    --gD);
                }
            }
            ,
            gE['zFJ'] = function() {
                return this['zCn'];
            }
            ,
            gm;
        }())
          , CG = (function() {
            function gm(gN, gr, gD, gQ) {
                var gd = this;
                this['zOh'] = function(gk, gn, gj) {
                    gd['zBB'](gk, gn, gj);
                }
                ,
                this['zOe'] = function(gk, gn, gj, gp) {
                    gd['zCo'](gk, gn, gj, gp);
                }
                ,
                this['zkw'] = function(gk, gn, gj, gp, gT, gZ) {
                    gp && (gd['zOM'](),
                    gT && gd['zBB'](Cg['k']['zON'], 0x0, 0x1),
                    gd['zBB'](Cg['k']['zOd'], 0x0, 0.8),
                    gZ && gd['zBB'](Cg['k']['zOq'], 0x0, 0x1));
                }
                ,
                this['zsZ'] = function(gk, gn) {
                    gd['zBB'](Cg['k']['zOw'], 0x0, 0x1);
                    var gj = new l7['xeV']({
                        'map': l9['Z']['zuA'](),
                        'transparent': !0x0
                    })
                      , gp = new l7['jyi'](gj);
                    gp['type'] = (0x0,
                    ll['D_'])(),
                    (gp['scale']['set'](0x4, l9['Z']['zuA']()['image']['height'] / l9['Z']['zuA']()['image']['width'] * 0x4, 0x1),
                    gp['position']['zWH'] = -l8['Z']['zLa'] / 0x2,
                    gd['zvu']['zuU']()['add'](gp));
                    var gT = {
                        'zOa': gp,
                        'zOZ': gk,
                        'zOR': Date['now']()
                    };
                    gd['zyW'](gT),
                    gd['zyz']['push'](gT);
                }
                ,
                this['zCk'] = function(gk, gn, gj, gp, gT, gZ, gy, gG, gO, gq) {
                    l8['Z']['zgD'] = gO,
                    l8['Z']['zgu'] = gq,
                    gd['zow'](),
                    (0x0,
                    lL['bl'])(Cu['Q']['zTh']),
                    (0x0,
                    lL['gN'])(gk),
                    (0x0,
                    lL['as'])(gn),
                    gd['zks'](gT),
                    gd['ziX']['zow'](gk, gj, gp);
                }
                ,
                this['zOB'] = function(gk, gn) {
                    gd['zyH'](new l7['Pa4'](0x0,-0.4,0.4), 0.3, gd['zyT']['bind'](gd, gn['ziJ']()));
                }
                ,
                this['zyL'] = function(gk) {
                    gd['zyH'](new l7['Pa4'](0x0,-0.4,0.4), (0x0,
                    lZ['Gc'])(gk - (0x0,
                    lZ['gq'])(0.5)), void 0x0);
                }
                ,
                this['zoa'] = gN,
                this['zvu'] = gr,
                this['zCt'] = gD,
                this['zCy'] = gQ,
                this['zyg'] = !0x1,
                this['zyr'] = 0x0,
                this['zBY'] = Cc['C']['zzu'],
                this['zyD'] = new l7['Tme'](),
                this['zyD']['type'] = (0x0,
                ll['D_'])(),
                this['zyV'] = new l7['Tme'](),
                this['zyV']['type'] = (0x0,
                ll['D_'])(),
                this['zyj'] = new l7['Tme'](),
                this['zyj']['type'] = (0x0,
                ll['D_'])(),
                this['zyK'] = new l7['Tme'](),
                this['zyK']['type'] = (0x0,
                ll['D_'])(),
                this['zyo'] = new l7['Tme'](),
                this['zyo']['type'] = (0x0,
                ll['D_'])(),
                this['zyu'] = new l7['Tme'](),
                this['zyu']['type'] = (0x0,
                ll['D_'])(),
                this['zyz'] = [],
                this['zyb'] = 0x0,
                this['zyF'] = 0x0,
                this['zyC'] = new l7['Pa4'](0x0,0x0,0x0),
                this['ziX'] = new Cr(this['zoa'],this['zvu'],this['zCt'],this['zCy'],this),
                this['zyi'] = new CZ(this),
                this['zyB'] = new Cy(this),
                this['zyA'] = new l7['Tme'](),
                this['zyA']['type'] = (0x0,
                ll['D_'])(),
                this['zyk'] = 0x0,
                this['zys'] = 0x0,
                this['zyv'] = 0x64,
                this['zyf'] = 0x0,
                this['zyO'] = 0x0,
                this['zyy'] = 0x3e8 * (0x0,
                lZ['Gc'])(Cl['Z']['zyP']['duration']) / 0x2,
                this['zyU'] = l9['Z']['zyt'](),
                this['zyn'] = new l7['Xcj'](this['zyU']),
                this['zyc'] = this['zyn']['clipAction'](l9['Z']['zyG']()),
                this['zyQ'] = this['zyn']['clipAction'](l9['Z']['zyl']()),
                this['zym'] = this['zyn']['clipAction'](l9['Z']['zyI']()),
                this['zyQ']['play'](),
                this['zyQ']['paused'] = !0x0,
                this['zyc']['play'](),
                this['zyc']['paused'] = !0x0,
                this['zym']['play'](),
                this['zym']['paused'] = !0x0,
                this['zyX'] = {},
                this['zym']['setLoop'](l7['jAl'], 0x1),
                this['zym']['clampWhenFinished'] = !0x0,
                this['zyY'] = 0x0,
                this['zyx'] = 0x0,
                this['zyT']((0x0,
                C7['YJ'])(Cw['q']['zzc'])),
                this['zCc']();
            }
            var gE = gm['prototype'];
            return gE['zyp'] = function() {
                this['zym']['paused'] && (0x1 === this['zyY'] ? this['zyY'] = 0x2 : 0x2 === this['zyY'] && (this['zym']['reset'](),
                this['zyY'] = 0x0),
                this['zym']['paused'] = !0x1);
            }
            ,
            gE['zyJ'] = function() {
                this['zyO'] = Date['now']();
            }
            ,
            gE['zyE'] = function() {
                this['zyk'] = Date['now']();
            }
            ,
            gE['zyS'] = function() {
                this['zyf'] = Date['now']();
            }
            ,
            gE['zCc'] = function() {
                lw['Z']['on'](lg['x']['zCG'], this['zCk']),
                lw['Z']['on'](lg['x']['zfm'], this['zOB']),
                lw['Z']['on'](lg['x']['zvn'], this['zsZ']),
                lw['Z']['on'](lg['x']['zyh'], this['zkw']),
                lw['Z']['on'](lg['x']['zye'], this['zyL']),
                lw['Z']['on'](lg['x']['zyM'], this['zOh']),
                lw['Z']['on'](lg['x']['zyN'], this['zOe']);
            }
            ,
            gE['zCX'] = function() {
                lw['Z']['off'](lg['x']['zCG'], this['zCk']),
                lw['Z']['off'](lg['x']['zfm'], this['zOB']),
                lw['Z']['off'](lg['x']['zvn'], this['zsZ']),
                lw['Z']['off'](lg['x']['zyh'], this['zkw']),
                lw['Z']['off'](lg['x']['zye'], this['zyL']),
                lw['Z']['off'](lg['x']['zyM'], this['zOh']),
                lw['Z']['off'](lg['x']['zyN'], this['zOe']);
            }
            ,
            gE['zyd'] = function(gN) {
                for (var gr = 0x0; gr < this['zyz']['length']; gr++) {
                    this['zyW'](this['zyz'][gr]) && (this['zyz'][gr] = this['zyz'][this['zyz']['length'] - 0x1],
                    this['zyz']['pop'](),
                    --gr);
                }
            }
            ,
            gE['zyW'] = function(gN) {
                var gr = Date['now']() - gN['zOR']
                  , gD = l8['Z']['zLZ']
                  , gQ = l8['Z']['zLR'];
                if (gr > gD + gQ)
                    return this['zvu']['zuU']()['remove'](gN['zOa']),
                    gN['zOa']['geometry']['dispose'](),
                    !0x0;
                gr > gD && (gN['zOa']['material']['opacity'] = (gD + gQ - gr) / gQ);
                var gd = this['ziX']['zvr']()['zWz']
                  , gk = (0x0,
                C3['Ak'])(-Math['sin'](gd), -Math['cos'](gd))
                  , gn = (0x0,
                C3['Ak'])(gN['zOZ']['zWW'] - this['zvu']['zut']()['position']['zWW'], gN['zOZ']['zWH'] - this['zvu']['zut']()['position']['zWH']);
                (0x0,
                C3['jG'])(gn);
                var gj = Math['PI'] - (Math['atan2'](gk['zWW'] * gn['zWz'] - gk['zWz'] * gn['zWW'], gk['zWW'] * gn['zWW'] + gk['zWz'] * gn['zWz']) + Math['PI'] / 0x2);
                return gN['zOa']['position']['zWW'] = 0x5 * Math['cos'](gj),
                gN['zOa']['position']['zWz'] = 0x5 * Math['sin'](gj),
                gN['zOa']['material']['rotation'] = gj - Math['PI'] / 0x2,
                !0x1;
            }
            ,
            gE['zyH'] = function(gN, gr, gD) {
                this['zyq'] = gr,
                this['zyw'] = gN,
                gD && (this['zya'] = gD);
            }
            ,
            gE['zbt'] = function() {
                this['zCX'](),
                this['zvu']['zuy']()['remove'](this['zvu']['zun']()),
                this['zvu']['zun']()['remove'](this['zyu']),
                this['zyZ'](),
                this['ziX']['zbt'](),
                l9['Z']['zkW'](this['zyU']);
            }
            ,
            gE['zyZ'] = function() {
                this['zyR']['dispose'](),
                this['zPW']['geometry']['dispose'](),
                this['zPz']['geometry']['dispose'](),
                this['zPH']['geometry']['dispose'](),
                this['zPT']['geometry']['dispose'](),
                this['zPL']['geometry']['dispose'](),
                this['zvA']();
            }
            ,
            gE['zvA'] = function() {
                this['zPg']['visible'] = !0x1;
            }
            ,
            gE['zsc'] = function() {
                this['zPg']['visible'] = !0x0;
            }
            ,
            gE['zPr'] = function(gN) {
                this['zPW']['position']['set'](0x0, gN + this['zoa']['zPD'] / 0x2, 0x0),
                this['zPz']['position']['set'](0x0, -gN - this['zoa']['zPD'] / 0x2, 0x0),
                this['zPH']['position']['set'](-gN - this['zoa']['zPD'] / 0x2, 0x0, 0x0),
                this['zPT']['position']['set'](gN + this['zoa']['zPD'] / 0x2, 0x0, 0x0);
            }
            ,
            gE['zPV'] = function() {
                this['zyR'] = new l7['xeV']({
                    'color': this['zoa']['zPj']
                }),
                this['zPW'] = new l7['jyi'](this['zyR']),
                this['zPW']['type'] = (0x0,
                ll['D_'])(),
                this['zPW']['scale']['set'](this['zoa']['zPK'], this['zoa']['zPD'], 0x1),
                this['zPW']['visible'] = this['zoa']['zPo'] === CX['hu']['CROSS_WITH_DOT'] || this['zoa']['zPo'] === CX['hu']['CROSS'],
                this['zPz'] = new l7['jyi'](this['zyR']),
                this['zPz']['type'] = (0x0,
                ll['D_'])(),
                this['zPz']['scale']['set'](this['zoa']['zPK'], this['zoa']['zPD'], 0x1),
                this['zPz']['visible'] = this['zoa']['zPo'] === CX['hu']['CROSS_WITH_DOT'] || this['zoa']['zPo'] === CX['hu']['CROSS'],
                this['zPH'] = new l7['jyi'](this['zyR']),
                this['zPH']['type'] = (0x0,
                ll['D_'])(),
                this['zPH']['scale']['set'](this['zoa']['zPD'], this['zoa']['zPK'], 0x1),
                this['zPH']['visible'] = this['zoa']['zPo'] === CX['hu']['CROSS_WITH_DOT'] || this['zoa']['zPo'] === CX['hu']['CROSS'],
                this['zPT'] = new l7['jyi'](this['zyR']),
                this['zPT']['type'] = (0x0,
                ll['D_'])(),
                this['zPT']['scale']['set'](this['zoa']['zPD'], this['zoa']['zPK'], 0x1),
                this['zPT']['visible'] = this['zoa']['zPo'] === CX['hu']['CROSS_WITH_DOT'] || this['zoa']['zPo'] === CX['hu']['CROSS'],
                this['zPL'] = new l7['jyi'](this['zyR']),
                this['zPL']['type'] = (0x0,
                ll['D_'])(),
                this['zPL']['scale']['set'](this['zoa']['zPK'], this['zoa']['zPK'], 0x1),
                this['zPL']['visible'] = this['zoa']['zPo'] === CX['hu']['CROSS_WITH_DOT'] || this['zoa']['zPo'] === CX['hu']['DOT'],
                this['zPg'] = new l7['Tme'](),
                this['zPg']['type'] = (0x0,
                ll['D_'])(),
                this['zPg']['position']['zWH'] = -l8['Z']['zLa'],
                this['zPg']['add'](this['zPW']),
                this['zPg']['add'](this['zPz']),
                this['zPg']['add'](this['zPH']),
                this['zPg']['add'](this['zPT']),
                this['zPg']['add'](this['zPL']),
                this['zvu']['zuU']()['add'](this['zPg']);
            }
            ,
            gE['zPu'] = function(gN) {
                this['zPr'](this['zyr']);
            }
            ,
            gE['zPb'] = function(gN) {
                var gr = this['zoa']['zPD'];
                this['zPF']['position']['set'](-gN - gr / 0x2, gN + gr / 0x2, 0x0),
                this['zPC']['position']['set'](gN + gr / 0x2, gN + gr / 0x2, 0x0),
                this['zPi']['position']['set'](-gN - gr / 0x2, -gN - gr / 0x2, 0x0),
                this['zPB']['position']['set'](gN + gr / 0x2, -gN - gr / 0x2, 0x0);
            }
            ,
            gE['zPA'] = function() {
                void 0x0 !== this['zyR'] && (this['zyR']['color']['set'](this['zoa']['zPj']),
                this['zyR']['needsUpdate'] = !0x0,
                this['zPW']['scale']['set'](this['zoa']['zPK'], this['zoa']['zPD'], 0x1),
                this['zPW']['visible'] = this['zoa']['zPo'] === CX['hu']['CROSS_WITH_DOT'] || this['zoa']['zPo'] === CX['hu']['CROSS'],
                this['zPz']['scale']['set'](this['zoa']['zPK'], this['zoa']['zPD'], 0x1),
                this['zPz']['visible'] = this['zoa']['zPo'] === CX['hu']['CROSS_WITH_DOT'] || this['zoa']['zPo'] === CX['hu']['CROSS'],
                this['zPH']['scale']['set'](this['zoa']['zPD'], this['zoa']['zPK'], 0x1),
                this['zPH']['visible'] = this['zoa']['zPo'] === CX['hu']['CROSS_WITH_DOT'] || this['zoa']['zPo'] === CX['hu']['CROSS'],
                this['zPT']['scale']['set'](this['zoa']['zPD'], this['zoa']['zPK'], 0x1),
                this['zPT']['visible'] = this['zoa']['zPo'] === CX['hu']['CROSS_WITH_DOT'] || this['zoa']['zPo'] === CX['hu']['CROSS'],
                this['zPL']['scale']['set'](this['zoa']['zPK'], this['zoa']['zPK'], 0x1),
                this['zPL']['visible'] = this['zoa']['zPo'] === CX['hu']['CROSS_WITH_DOT'] || this['zoa']['zPo'] === CX['hu']['DOT'],
                this['zPF']['scale']['set'](this['zoa']['zPK'], this['zoa']['zPD'], 0x1),
                this['zPF']['material']['color']['set'](this['zoa']['zPk']),
                this['zPF']['material']['needsUpdate'] = !0x0,
                this['zPC']['scale']['set'](this['zoa']['zPK'], this['zoa']['zPD'], 0x1),
                this['zPC']['material']['color']['set'](this['zoa']['zPk']),
                this['zPC']['material']['needsUpdate'] = !0x0,
                this['zPi']['scale']['set'](this['zoa']['zPK'], this['zoa']['zPD'], 0x1),
                this['zPi']['material']['color']['set'](this['zoa']['zPk']),
                this['zPi']['material']['needsUpdate'] = !0x0,
                this['zPB']['scale']['set'](this['zoa']['zPK'], this['zoa']['zPD'], 0x1),
                this['zPB']['material']['color']['set'](this['zoa']['zPk']),
                this['zPB']['material']['needsUpdate'] = !0x0);
            }
            ,
            gE['zPs'] = function() {
                this['zPF'] = new l7['jyi'](new l7['xeV']({
                    'color': this['zoa']['zPk'],
                    'rotation': Math['PI'] / 0x4
                })),
                this['zPF']['type'] = (0x0,
                ll['D_'])(),
                this['zPF']['scale']['set'](this['zoa']['zPK'], this['zoa']['zPD'], 0x1),
                this['zPC'] = new l7['jyi'](new l7['xeV']({
                    'color': this['zoa']['zPk'],
                    'rotation': -Math['PI'] / 0x4
                })),
                this['zPC']['type'] = (0x0,
                ll['D_'])(),
                this['zPC']['scale']['set'](this['zoa']['zPK'], this['zoa']['zPD'], 0x1),
                this['zPi'] = new l7['jyi'](new l7['xeV']({
                    'color': this['zoa']['zPk'],
                    'rotation': -Math['PI'] / 0x4
                })),
                this['zPi']['type'] = (0x0,
                ll['D_'])(),
                this['zPi']['scale']['set'](this['zoa']['zPK'], this['zoa']['zPD'], 0x1),
                this['zPB'] = new l7['jyi'](new l7['xeV']({
                    'color': this['zoa']['zPk'],
                    'rotation': Math['PI'] / 0x4
                })),
                this['zPB']['type'] = (0x0,
                ll['D_'])(),
                this['zPB']['scale']['set'](this['zoa']['zPK'], this['zoa']['zPD'], 0x1),
                this['zPv'] = new l7['Tme'](),
                this['zPv']['type'] = (0x0,
                ll['D_'])(),
                this['zPv']['position']['zWH'] = -l8['Z']['zLa'],
                this['zPv']['add'](this['zPF']),
                this['zPv']['add'](this['zPC']),
                this['zPv']['add'](this['zPi']),
                this['zPv']['add'](this['zPB']),
                this['zvu']['zuU']()['add'](this['zPv']);
            }
            ,
            gE['zPf'] = function() {
                var gN = new l7['xeV']({
                    'map': l9['Z']['zuk'](),
                    'transparent': !0x0,
                    'opacity': 0x0
                });
                this['zPO'] = new l7['jyi'](gN),
                this['zPO']['type'] = (0x0,
                ll['D_'])(),
                this['zPO']['scale']['set'](0x1, l9['Z']['zuk']()['image']['height'] / l9['Z']['zuk']()['image']['width'], 0x1),
                this['zAZ']()['add'](this['zPO']);
            }
            ,
            gE['zPy'] = function(gN) {
                this['zPF']['material']['opacity'] = gN,
                this['zPC']['material']['opacity'] = gN,
                this['zPi']['material']['opacity'] = gN,
                this['zPB']['material']['opacity'] = gN;
            }
            ,
            gE['zPP'] = function(gN) {
                this['zPb'](this['zyr']);
                var gr = Date['now']() - this['zyb'];
                if (gr > l8['Z']['zgW']) {
                    var gD = Math['max'](0x0, (l8['Z']['zgW'] + l8['Z']['zgz'] - gr) / l8['Z']['zgz']);
                    this['zPy'](gD);
                }
            }
            ,
            gE['zOM'] = function() {
                this['zPy'](0x1),
                this['zyb'] = Date['now']();
            }
            ,
            gE['zow'] = function() {
                this['zyg'] = !0x0,
                this['zPU'] = new l7['SJI'](),
                this['zPV'](),
                this['zPs'](),
                this['zyj']['add'](this['zyU']),
                this['zyV']['add'](this['zyj']),
                this['zyD']['add'](this['zyV']),
                this['zyK']['add'](this['zyD']),
                this['zyo']['add'](this['zyK']),
                this['zyu']['add'](this['zyo']),
                this['zvu']['zun']()['add'](this['zyu']),
                this['zPf'](),
                this['zyq'] = 0x0,
                this['zya'] = function() {}
                ,
                this['zyw'] = new l7['Pa4'](0x0,0x0,0x0),
                this['zPt'] = new l7['USm'](0x0,0x0,0x0),
                this['zPn'] = 0x1,
                this['zPc'] = new l7['Pa4'](0x0,0x0,0x0),
                this['zPG'] = new l7['Pa4'](0x0,0x0,0x0),
                this['zPQ'] = (0x0,
                C3['Ak'])(0x0, 0x0),
                this['zPl'] = !0x1,
                this['zPm'] = !0x1,
                this['zPI'] = !0x1,
                this['zPX'] = 0x0,
                this['zvu']['zuy']()['add'](this['zvu']['zun']()),
                this['zvu']['zuy']()['add'](this['zyB']['zFJ']()),
                this['zvu']['zut']()['add'](this['zPU']);
                var gN = new l7['xeV']({
                    'color': 0xff,
                    'transparent': !0x0,
                    'opacity': 0.3,
                    'zTG': !0x1
                });
                this['zPY'] = new l7['jyi'](gN),
                this['zPY']['type'] = (0x0,
                ll['D_'])(),
                this['zPY']['scale']['set'](0xa, 0xa, 0x0),
                this['zPY']['position']['set'](0x0, 0x0, -0x1),
                this['zPY']['visible'] = !0x1,
                this['zvu']['zuU']()['add'](this['zPY']);
                var gr = new l7['xeV']({
                    'color': 0xff0000,
                    'transparent': !0x0,
                    'opacity': 0.3,
                    'zTG': !0x1
                });
                this['zPx'] = new l7['jyi'](gr),
                this['zPx']['type'] = (0x0,
                ll['D_'])(),
                this['zPx']['scale']['set'](0xa, 0xa, 0x0),
                this['zPx']['position']['set'](0x0, 0x0, -0x1),
                this['zPx']['visible'] = !0x1,
                this['zvu']['zuU']()['add'](this['zPx']);
                var gD = new l7['xeV']({
                    'color': 0x0,
                    'transparent': !0x1,
                    'zTG': !0x1
                });
                this['zPp'] = new l7['jyi'](gD),
                this['zPp']['type'] = (0x0,
                ll['D_'])(),
                this['zPp']['scale']['set'](0xa, 0xa, 0x0),
                this['zPp']['position']['set'](0x0, 0x0, -0x1),
                this['zPp']['visible'] = !0x1,
                this['zvu']['zuU']()['add'](this['zPp']);
            }
            ,
            gE['zBC'] = function(gN, gr) {
                this['zBB'](gN, Math['random']() * gr - gr / 0x2, 0.5);
            }
            ,
            gE['zBi'] = function(gN, gr, gD) {
                this['zCo'](gN, gr, Math['random']() * gD - gD / 0x2, 0.5);
            }
            ,
            gE['zBB'] = function(gN, gr, gD) {
                void 0x0 === gr && (gr = 0x0),
                void 0x0 === gD && (gD = 0x1);
                var gQ = this['zyX'][gN];
                if (!(void 0x0 !== gQ && Date['now']() - gQ < 0x28)) {
                    var gd = new l7['BbS'](this['zPU']);
                    gd['setBuffer'](l9['Z']['zPJ'](gN)),
                    gd['detune'] = gr,
                    gd['gain']['gain']['value'] = gD * (this['zoa']['zPE'] * this['zoa']['zPE']),
                    gd['play'](),
                    this['zyX'][gN] = Date['now']();
                }
            }
            ,
            gE['zCo'] = function(gN, gr, gD, gQ, gd, gk, gn) {
                var gj = this;
                if (void 0x0 === gD && (gD = 0x0),
                void 0x0 === gQ && (gQ = 0x1),
                void 0x0 === gd && (gd = 0x50 * l8['Z']['zLn']),
                void 0x0 === gk && (gk = 0xa * l8['Z']['zLn']),
                void 0x0 === gn && (gn = 0x2),
                !((0x0,
                lF['RJ'])(gN, (0x0,
                lF['w1'])(this['zvu']['zut']()['position'])) >= gd * gd)) {
                    var gp = this['zyX'][gr];
                    if (!(void 0x0 !== gp && Date['now']() - gp < 0x28)) {
                        var gT = new l7['VYz'](this['zPU']);
                        gT['setBuffer'](l9['Z']['zPJ'](gr)),
                        gT['detune'] = gD,
                        gT['gain']['gain']['value'] = gQ * (this['zoa']['zPE'] * this['zoa']['zPE']),
                        gT['setRefDistance'](gk),
                        gT['setRolloffFactor'](gn);
                        var gZ = new l7['Tme']();
                        gZ['type'] = (0x0,
                        ll['D_'])(),
                        gZ['add'](gT),
                        this['zvu']['zuy']()['add'](gZ),
                        gZ['position']['set'](gN['zWW'], gN['zWz'], gN['zWH']),
                        gT['play'](),
                        gT['source']['onended'] = function() {
                            gT['isPlaying'] = !0x1,
                            gj['zvu']['zuy']()['remove'](gZ);
                        }
                        ,
                        this['zyX'][gr] = Date['now']();
                    }
                }
            }
            ,
            gE['zbK'] = function(gN) {
                (0x0,
                lL['Zp'])() === Cu['Q']['zTh'] && (this['zPS'](),
                this['ziX']['zbK'](gN));
            }
            ,
            gE['zPS'] = function() {
                var gN = (0x0,
                lF['XX'])(this['ziX']['zOF']()['zFR']['zWW'], this['ziX']['zOF']()['zFR']['zWz'] + this['ziX']['zOF']()['zsD'], this['ziX']['zOF']()['zFR']['zWH']);
                (0x0,
                lF['BZ'])(gN, l8['Z']['zLn']);
                var gr = this['ziX']['zvT'](gN['zWW'], gN['zWz'], gN['zWH'])
                  , gD = !0x1;
                if ((0x0,
                lX['PP'])(gr)) {
                    var gQ = (0x0,
                    lX['TH'])(gr);
                    gD = (0x0,
                    lb['wQ'])(gN['zWz'], 0x1) <= gQ;
                }
                var gd = lT['Z'][gr]['zWg'];
                this['zPY']['visible'] = gD,
                this['zPp']['visible'] = gd && this['ziX']['zix']()['zsH']['zsg'] !== lW['b']['zkp'],
                this['zCt']['zPh']()['zPe']((0x0,
                C3['Ak'])(this['ziX']['zOF']()['zFR']['zWW'], this['ziX']['zOF']()['zFR']['zWH'])) ? (this['zPx']['visible'] = !0x1,
                this['zvu']['zuv'](l8['Z']['zgu']),
                this['zCt']['zuO']()['fog']['color']['set'](l8['Z']['zgu'])) : (this['zPx']['visible'] = !0x0,
                this['zvu']['zuv'](l8['Z']['zgb']),
                this['zCt']['zuO']()['fog']['color']['set'](l8['Z']['zgb']));
            }
            ,
            gE['zus'] = function(gN, gr) {
                if (this['zyg']) {
                    0x0 === this['zyY'] && this['zym']['time'] >= 0x1 / 0x3 && (this['zym']['paused'] = !0x0,
                    this['zyY'] = 0x1),
                    this['zyn']['update'](gN);
                    var gD = gr / l8['Z']['zgK'];
                    this['zyr'] = (0x0,
                    lb['t7'])(this['ziX']['zOo'](), this['ziX']['zOu'](), gD),
                    this['zPu'](gN),
                    this['zPP'](gN),
                    this['zyd'](gN),
                    this['ziX']['zus'](gN, gr),
                    this['zPM'](gN),
                    this['zPN'](gN),
                    this['zPd'](gN),
                    this['zPq'](gN),
                    this['zPw'](gN);
                    var gQ = Date['now']() - this['zyk'] <= this['zyv']
                      , gd = Date['now']() - this['zyO'] <= this['zyy'];
                    gQ || gd || this['zPa'](gN),
                    this['zPZ'](gN),
                    this['zyi']['zus'](gN, gr),
                    this['zyB']['zus'](gN, gr);
                }
            }
            ,
            gE['zPw'] = function(gN) {
                var gr = this['zoa']['zuL']
                  , gD = 0xa;
                this['zPR']() ? gr = this['ziX']['zfg']()['zip']()['ziJ']()['zUW'](this['zoa']['zuL'], this['zoa']['zUz']) : this['ziX']['zkJ']() === lW['b']['zkx'] && (gr = this['zoa']['zuL'] * (0x1 + 0.15 * this['zoa']['zUH']),
                gD = 0x5);
                var gQ = Math['abs'](gr - this['zvu']['zut']()['fov'])
                  , gd = gr - this['zvu']['zut']()['fov'] < 0x0 ? -0x1 : 0x1;
                this['zvu']['zut']()['fov'] += Math['min'](gQ * gD * gN, gQ) * gd,
                this['zvu']['zut']()['updateProjectionMatrix']();
            }
            ,
            gE['zPR'] = function() {
                return (0x0,
                C2['MH'])(this['ziX']['ziY'](), this['ziX']['zix']());
            }
            ,
            gE['zPM'] = function(gN) {
                var gr = this['zyD']['position'];
                if (this['zyq'] > 0x0)
                    this['zyq'] = this['zyq'] - gN,
                    this['zyq'] <= 0x0 && (this['zyq'] = 0x0,
                    this['zya'](),
                    this['zya'] = function() {}
                    );
                else {
                    if (this['ziX']['zkJ']() === lW['b']['zkx'])
                        this['zyw']['set'](0x0, -0.4, 0.4);
                    else {
                        if (this['zPR']()) {
                            var gD = this['ziX']['zfg']()['zip']()['ziJ']()['zUT']();
                            this['zyw']['set'](gD['zWW'], gD['zWz'], gD['zWH']);
                        } else
                            this['zyw']['set'](0x0, 0x0, 0x0);
                    }
                }
                if (this['zPR']()) {
                    var gQ = this['ziX']['zfg']()['zip']()['ziJ']()['zUL']();
                    this['zPt']['set'](gQ['zWW'], gQ['zWz'], gQ['zWH']),
                    this['zoa']['zUg'] || this['zoa']['zUr'] || this['zvA'](),
                    this['zoa']['zUr'] && (this['zyD']['visible'] = !0x1);
                } else
                    this['zPt']['set'](0x0, 0x0, 0x0),
                    this['ziX']['zOi']() === CE && (this['zsc'](),
                    this['zyD']['visible'] = !0x0);
                var gd = (0x0,
                lL['jb'])();
                this['zPR']() && this['ziX']['zfg']()['zip']()['ziJ']()['zUD']() ? gd || (lw['Z']['emit'](lg['x']['zUV'], !0x0),
                this['zyD']['visible'] = !0x1,
                this['zvA']()) : gd && (lw['Z']['emit'](lg['x']['zUV'], !0x1),
                this['ziX']['zOi']() === CE && (this['zsc'](),
                this['zyD']['visible'] = !0x0));
                var gk = this['zyw']['clone']()['sub'](gr)
                  , gn = gk['length']()
                  , gj = gk['normalize']()['multiplyScalar'](Math['min'](gn, Math['pow'](gn + 0x1, 0x3) * gN));
                this['zyD']['position']['set'](gr['zWW'] + gj['zWW'], gr['zWz'] + gj['zWz'], gr['zWH'] + gj['zWH']);
                var gp = new l7['_fP']()['setFromEuler'](this['zyD']['rotation'])
                  , gT = new l7['_fP']()['setFromEuler'](this['zPt']);
                gp['rotateTowards'](gT, this['zPn'] * gN),
                this['zyD']['rotation']['setFromQuaternion'](gp);
            }
            ,
            gE['zPd'] = function(gN) {
                var gr = this['zyo']['position'];
                Date['now']() - this['zyk'] <= this['zyv'] || Date['now']() - this['zyf'] <= 0x12c ? (gr['zWH'] = 0.1 * (Math['cos'](0x14 * this['zys']) - 0x1) + 0.1,
                void 0x0 !== this['zUj'] && this['zUj']['rotation']['zWW'] < Math['PI'] / 0x3 && (this['zUj']['rotation']['zWW'] = Math['min'](Math['PI'] / 0x3, this['zUj']['rotation']['zWW'] + 0xa * gN)),
                this['zys'] += gN) : (this['zys'] = 0x0,
                gr['zWH'] > 0x0 ? gr['zWH'] = Math['max'](0x0, gr['zWH'] - 0xa * gN) : gr['zWH'] < 0x0 && (gr['zWH'] = Math['min'](0x0, gr['zWH'] + 0xa * gN)),
                void 0x0 !== this['zUj'] && this['zUj']['rotation']['zWW'] > 0x0 && (this['zUj']['rotation']['zWW'] = Math['max'](0x0, this['zUj']['rotation']['zWW'] - 0xa * gN)));
            }
            ,
            gE['zPq'] = function(gN) {
                var gr = this['zyu']['position'];
                if (Date['now']() - this['zyO'] <= this['zyy'] / 0x2)
                    gr['zWH'] = (Date['now']() - this['zyO']) / (this['zyy'] / 0x2) * -0.2;
                else {
                    var gD = 0x1 - Math['min'](0x1, (Date['now']() - this['zyO'] - this['zyy'] / 0x2) / (this['zyy'] / 0x2));
                    gr['zWH'] = -0.2 * gD;
                }
            }
            ,
            gE['zPa'] = function(gN) {
                var gr = this['zyj']['position'];
                gr['add'](this['zPG']['clone']()['multiplyScalar'](gN)),
                gr['lengthSq']() > 0.2 * 0.2 && (gr['normalize'](),
                gr['multiplyScalar'](0.2));
                var gD = 0.008
                  , gQ = 0.009;
                this['ziX']['zOV']() && this['ziX']['zkJ']() !== lW['b']['zBs'] && (gD = 0.01,
                gQ = 0.04);
                var gd = this['ziX']['zOV']();
                this['ziX']['ziY']()['zve'] ? (this['zPG']['zWz'] = 0x3 * -gr['zWz'],
                this['zyx'] = 0x0) : !this['zPl'] && gd || this['zPl'] && !gd ? this['zyx'] <= 0x0 ? (this['zPG']['zWz'] = -gQ,
                this['zyx'] = -0x1) : (this['zPG']['zWz'] = gQ,
                this['zyx'] = 0x1) : 0x0 === this['zyx'] || gr['zWz'] < -gD && -0x1 === this['zyx'] ? (this['zPG']['zWz'] = gQ,
                this['zyx'] = 0x1) : gr['zWz'] > gD && 0x1 === this['zyx'] && (this['zPG']['zWz'] = -gQ,
                this['zyx'] = -0x1),
                this['zPl'] = gd;
            }
            ,
            gE['zPN'] = function(gN) {
                var gr = this['zyV']['position'];
                gr['add'](this['zPc']['clone']()['multiplyScalar'](gN));
                var gD = 0.03;
                gr['lengthSq']() > 0.0009 && (gr['normalize'](),
                gr['multiplyScalar'](gD));
                var gQ = this['ziX']['zOb']()
                  , gd = !0x0
                  , gk = (0x0,
                lb['BS'])(this['zPQ']['zWW'], gQ['zWW'])
                  , gn = (0x0,
                lb['BS'])(this['zPQ']['zWz'], gQ['zWz'])
                  , gj = this['ziX']['zOK']()
                  , gp = this['ziX']['zOj']()
                  , gT = this['zPR']() ? 0.2 : 0.7;
                Math['abs'](gk) > 0x0 && (gd = !0x1,
                this['zPc']['zWz'] = gk * gT),
                Math['abs'](gn) > 0x0 && (gd = !0x1,
                this['zPc']['zWW'] = -gn * gT),
                !this['zPm'] && gp && (this['zPX'] = 0.1),
                this['zPX'] > 0x0 && (gd = !0x1,
                this['zPR']() ? this['zPc']['zWz'] = -0.05 : this['zPc']['zWz'] = -0.5,
                this['zPX'] = Math['max'](0x0, this['zPX'] - gN)),
                gd && (this['zPc']['zWW'] = 0x5 * -gr['zWW'],
                this['zPc']['zWz'] = 0x5 * -gr['zWz']),
                this['zPI'] = gj,
                this['zPm'] = gp,
                this['zPQ'] = gQ;
            }
            ,
            gE['zUK'] = function(gN) {
                this['zyK']['position']['set'](0x0, 0x0, 0x0),
                this['zyC']['set'](0x0, 0x0, gN),
                this['zyF'] = 0.5,
                this['zPO']['material']['opacity'] = 0.9,
                this['zPO']['material']['rotation'] = Math['random']() * Math['PI'] * 0x2;
            }
            ,
            gE['zPZ'] = function(gN) {
                var gr = this['zyK']['position']
                  , gD = this['zyC']['clone']()['sub'](gr)
                  , gQ = gD['length']();
                gQ < 0.0001 && (this['zyC']['set'](0x0, 0x0, 0x0),
                this['zyF'] = 0.5),
                this['zPO']['material']['opacity'] = Math['max'](0x0, this['zPO']['material']['opacity'] - 0x14 * gN);
                var gd = gD['normalize']()['multiplyScalar'](Math['min'](gQ, this['zyF'] * gN));
                this['zyK']['position']['set'](gr['zWW'] + gd['zWW'], gr['zWz'] + gd['zWz'], gr['zWH'] + gd['zWH']);
            }
            ,
            gE['zAZ'] = function() {
                return this['zyU']['getObjectByName'](l9['Z']['zUo']('Bone_Right_Hand'));
            }
            ,
            gE['zyT'] = (function() {
                var gN = (0x0,
                l4['Z'])(l6()['mark'](function gr(gD) {
                    var gQ, gd;
                    return l6()['wrap'](function(gk) {
                        for (; ; )
                            switch (gk['prev'] = gk['next']) {
                            case 0x0:
                                return this['zUj'] && (this['zAZ']()['remove'](this['zUj']),
                                this['zUj']['remove'](this['zyA']),
                                l9['Z']['zAR'](this['zUj'])),
                                gk['next'] = 0x3,
                                gD['zUu'](!0x1);
                            case 0x3:
                                this['zUj'] = gk['sent'],
                                l9['Z']['zBm'](this['zUj']),
                                (0x0,
                                C7['pV'])(gD['ziE']()) && (gQ = gD,
                                this['zUj']['add'](this['zyA']),
                                gd = gQ['zUb'](),
                                this['zyA']['position']['set'](gd['zWW'], gd['zWz'], gd['zWH'])),
                                gD['zkm']() === CI['E']['zkI'] ? (this['zyQ']['setEffectiveWeight'](0x1),
                                this['zyc']['setEffectiveWeight'](0x0),
                                this['zym']['setEffectiveWeight'](0x0)) : gD['zkm']() === CI['E']['zzc'] ? (this['zyQ']['setEffectiveWeight'](0x0),
                                this['zyc']['setEffectiveWeight'](0x0),
                                this['zym']['setEffectiveWeight'](0x1)) : (this['zyQ']['setEffectiveWeight'](0x0),
                                this['zyc']['setEffectiveWeight'](0x1),
                                this['zym']['setEffectiveWeight'](0x0)),
                                this['zAZ']()['add'](this['zUj']);
                            case 0x8:
                            case 'end':
                                return gk['stop']();
                            }
                    }, gr, this);
                }));
                return function(gD) {
                    return gN['apply'](this, arguments);
                }
                ;
            }()),
            gE['zkr'] = function() {
                var gN = (0x0,
                lF['w1'])(this['ziX']['zvm']()['zut']()['position']);
                this['ziX']['zFd']()['zkg']()['zkr'](gN, this['ziX']['zfw'](), this['zyr']);
            }
            ,
            gE['zOJ'] = function(gN) {
                var gr = new l7['Pa4']();
                this['zyA']['getWorldPosition'](gr),
                this['zyB']['zOJ']((0x0,
                lF['w1'])(gr), this['ziX']['zfw'](), gN);
            }
            ,
            gE['zvB'] = function() {
                this['zyu']['visible'] = !0x1;
            }
            ,
            gE['zsn'] = function() {
                this['zyu']['visible'] = !0x0;
            }
            ,
            gE['zCj'] = function() {
                return this['ziX'];
            }
            ,
            gE['zUF'] = function() {
                return this['zPO'];
            }
            ,
            gE['zUC'] = function() {
                return this['zyi'];
            }
            ,
            gE['zUi'] = function() {
                return this['zyB'];
            }
            ,
            gE['zkM'] = function() {
                return this['zBY'];
            }
            ,
            gE['zks'] = function(gN) {
                this['zBY'] = gN,
                this['zyU']['traverse'](function(gr) {
                    gr['material'] && gr['name'] === l9['Z']['zUo']('Arms') && (gN === Cc['C']['zzu'] ? gr['material']['map'] = l9['Z']['zkN']() : gN === Cc['C']['zzF'] ? gr['material']['map'] = l9['Z']['zkd']() : gN === Cc['C']['zzb'] && (gr['material']['map'] = l9['Z']['zkq']()));
                });
            }
            ,
            gE['zFd'] = function() {
                return this['zCt'];
            }
            ,
            gm;
        }());
        function CO(gm, gE) {
            var gN = 'undefined' != typeof Symbol && gm[Symbol['iterator']] || gm['@@iterator'];
            if (gN)
                return (gN = gN['call'](gm))['next']['bind'](gN);
            if (Array['isArray'](gm) || (gN = function(gD, gQ) {
                if (!gD)
                    return;
                if ('string' == typeof gD)
                    return Cq(gD, gQ);
                var gd = Object['prototype']['toString']['call'](gD)['slice'](0x8, -0x1);
                'Object' === gd && gD['constructor'] && (gd = gD['constructor']['name']);
                if ('Map' === gd || 'Set' === gd)
                    return Array['from'](gD);
                if ('Arguments' === gd || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/['test'](gd))
                    return Cq(gD, gQ);
            }(gm)) || gE && gm && 'number' == typeof gm['length']) {
                gN && (gm = gN);
                var gr = 0x0;
                return function() {
                    return gr >= gm['length'] ? {
                        'done': !0x0
                    } : {
                        'done': !0x1,
                        'value': gm[gr++]
                    };
                }
                ;
            }
            throw new TypeError('Invalid\x20attempt\x20to\x20iterate\x20non-iterable\x20instance.\x0aIn\x20order\x20to\x20be\x20iterable,\x20non-array\x20objects\x20must\x20have\x20a\x20[Symbol.iterator]()\x20method.');
        }
        function Cq(gm, gE) {
            (null == gE || gE > gm['length']) && (gE = gm['length']);
            for (var gN = 0x0, gr = new Array(gE); gN < gE; gN++)
                gr[gN] = gm[gN];
            return gr;
        }
        var CA = function(gm) {
            function gE(gr, gD) {
                var gQ;
                return (gQ = gm['call'](this, gD, CS['p']['zfR'], gr) || this)['zUB'] = 0x0,
                gQ['zUA'] = Math['random']() * Math['PI'] * 0x2,
                gQ['zUk'] = 0x1,
                gQ['zUs'] = -0x1,
                gQ['zBx'] = Cs['Z']['NONE'],
                gQ['zBp'] = 0x0,
                gQ;
            }
            (0x0,
            C6['Z'])(gE, gm);
            var gN = gE['prototype'];
            return gN['zkb'] = function(gr) {
                for (var gD, gQ = CO(gr); !(gD = gQ())['done']; ) {
                    var gd = gD['value'];
                    switch (gd['zkF']) {
                    case Cb['m']['zkO']:
                        this['zUv'](gd['zkB']);
                        break;
                    case Cb['m']['zUf']:
                        this['zUs'] = gd['zkB'];
                        break;
                    case Cb['m']['zUO']:
                        this['zUk'] = gd['zkB'];
                        break;
                    case Cb['m']['zUy']:
                        void 0x0 !== this['zUP'] && this['zUP']['zUU'](gd['zkB']);
                        break;
                    case Cb['m']['zkv']:
                        this['zBx'] = gd['zkB'];
                        break;
                    case Cb['m']['zkf']:
                        this['zBp'] = gd['zkB'];
                    }
                }
            }
            ,
            gN['zus'] = function(gr, gD) {
                if (this['zUs'] >= 0x0) {
                    var gQ = !0x0
                      , gd = (0x0,
                    lF['XX'])(0x0, 0x0, 0x0);
                    if (this['zUs'] === (0x0,
                    lL['Yb'])())
                        gd = (0x0,
                        lF['dg'])(this['zBn']()['zFd']()['zCV']()['zCj']()['zOF']()['zFR']);
                    else {
                        var gk = this['zBn']()['zUt'](this['zUs']);
                        void 0x0 === gk ? (this['zBn']()['zUn'](this['ziE']()),
                        gQ = !0x1) : gd = (0x0,
                        lF['XX'])(gk['zFJ']()['position']['zWW'], gk['zFJ']()['position']['zWz'], gk['zFJ']()['position']['zWH']);
                    }
                    if (gQ) {
                        gd['zWz'] += l8['Z']['zLn'];
                        var gn = (0x0,
                        lF['XX'])(this['zFJ']()['position']['zWW'], this['zFJ']()['position']['zWz'], this['zFJ']()['position']['zWH']);
                        if ((0x0,
                        lF['RJ'])(gn, gd) < 0.2 * 0.2 || (0x0,
                        lF['RJ'])(gn, gd) > 0x19)
                            this['zBn']()['zUn'](this['ziE']());
                        else {
                            var gj = (0x0,
                            lF['XX'])(gd['zWW'] - this['zFJ']()['position']['zWW'], gd['zWz'] - this['zFJ']()['position']['zWz'], gd['zWH'] - this['zFJ']()['position']['zWH']);
                            (0x0,
                            lF['cz'])(gj),
                            (0x0,
                            lF['Mt'])(gj, 0xa * gr),
                            this['zFJ']()['position']['set'](gn['zWW'] + gj['zWW'], gn['zWz'] + gj['zWz'], gn['zWH'] + gj['zWH']),
                            this['zFJ']()['updateMatrix']();
                        }
                    }
                } else
                    void 0x0 !== this['zUj'] && (this['zUA'] += gr,
                    this['zUj']['position']['set'](0x0, Math['cos'](this['zUA']) * (l8['Z']['zLn'] / 0x20), 0x0),
                    this['zUj']['updateMatrix'](),
                    this['zFJ']()['updateMatrix']());
            }
            ,
            gN['zbt'] = function() {
                void 0x0 !== this['zUj'] && (this['zFJ']()['remove'](this['zUj']),
                l9['Z']['zAR'](this['zUj']),
                this['zUj'] = void 0x0),
                void 0x0 !== this['zUc'] && (this['zFJ']()['remove'](this['zUc']),
                l9['Z']['zAR'](this['zUc']),
                this['zUc'] = void 0x0);
            }
            ,
            gN['ziJ'] = function() {
                return this['zUP'];
            }
            ,
            gN['zfU'] = function() {
                return this['zUk'];
            }
            ,
            gN['zOW'] = function() {
                return this['zUs'];
            }
            ,
            gN['zAd'] = function(gr) {
                this['zUB'] = gr['zWz'],
                this['zFJ']()['position']['set'](gr['zWW'], gr['zWz'], gr['zWH']),
                this['zFJ']()['updateMatrix']();
            }
            ,
            gN['zkc'] = function(gr) {}
            ,
            gN['zUv'] = (function() {
                var gr = (0x0,
                l4['Z'])(l6()['mark'](function gD(gQ) {
                    var gd, gk, gn, gj;
                    return l6()['wrap'](function(gp) {
                        for (; ; )
                            switch (gp['prev'] = gp['next']) {
                            case 0x0:
                                return (gd = (0x0,
                                C7['YJ'])(gQ))['zkS'](this['zBx'], this['zBp']),
                                gp['next'] = 0x4,
                                gd['zUG'](!0x1);
                            case 0x4:
                                gk = gp['sent'],
                                l9['Z']['zBm'](gk),
                                this['zbt'](),
                                this['zUP'] = gd,
                                this['zUj'] = gk,
                                this['zFJ']()['add'](this['zUj']),
                                gn = new l7['vBJ']({
                                    'map': l9['Z']['zUQ'](),
                                    'color': (0x0,
                                    CB['Dx'])(this['zUP']['zOL']()),
                                    'transparent': !0x0,
                                    'opacity': 0.9,
                                    'side': l7['ehD'],
                                    'zTQ': !0x1,
                                    'fog': !0x1
                                }),
                                gj = new l7['BKK'](0x1,0x1,0x1,0x1),
                                this['zUc'] = new l7['Kj0'](gj,gn),
                                this['zUc']['type'] = (0x0,
                                ll['D_'])(),
                                this['zUc']['position']['set'](this['zUj']['position']['zWW'], this['zUj']['position']['zWz'] - 0.08, this['zUj']['position']['zWH']),
                                this['zUc']['scale']['set'](0.5, 0.5, 0.5),
                                this['zUc']['rotation']['set'](-Math['PI'] / 0x2, 0x0, 0x0),
                                this['zFJ']()['add'](this['zUc']);
                            case 0x12:
                            case 'end':
                                return gp['stop']();
                            }
                    }, gD, this);
                }));
                return function(gQ) {
                    return gr['apply'](this, arguments);
                }
                ;
            }()),
            gE;
        }(CH['Z']);
        function CK(gm, gE) {
            var gN = 'undefined' != typeof Symbol && gm[Symbol['iterator']] || gm['@@iterator'];
            if (gN)
                return (gN = gN['call'](gm))['next']['bind'](gN);
            if (Array['isArray'](gm) || (gN = function(gD, gQ) {
                if (!gD)
                    return;
                if ('string' == typeof gD)
                    return CW(gD, gQ);
                var gd = Object['prototype']['toString']['call'](gD)['slice'](0x8, -0x1);
                'Object' === gd && gD['constructor'] && (gd = gD['constructor']['name']);
                if ('Map' === gd || 'Set' === gd)
                    return Array['from'](gD);
                if ('Arguments' === gd || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/['test'](gd))
                    return CW(gD, gQ);
            }(gm)) || gE && gm && 'number' == typeof gm['length']) {
                gN && (gm = gN);
                var gr = 0x0;
                return function() {
                    return gr >= gm['length'] ? {
                        'done': !0x0
                    } : {
                        'done': !0x1,
                        'value': gm[gr++]
                    };
                }
                ;
            }
            throw new TypeError('Invalid\x20attempt\x20to\x20iterate\x20non-iterable\x20instance.\x0aIn\x20order\x20to\x20be\x20iterable,\x20non-array\x20objects\x20must\x20have\x20a\x20[Symbol.iterator]()\x20method.');
        }
        function CW(gm, gE) {
            (null == gE || gE > gm['length']) && (gE = gm['length']);
            for (var gN = 0x0, gr = new Array(gE); gN < gE; gN++)
                gr[gN] = gm[gN];
            return gr;
        }
        var t0 = function(gm) {
            function gE(gr, gD) {
                var gQ, gd;
                gd = gm['call'](this, gD, CS['p']['zUl'], gr) || this;
                var gk = {
                    'zzT': lx['BLOCKS_MESH'],
                    'zWa': (0x0,
                    lF['XX'])(0x0, 0x0, 0x0),
                    'zWp': (gQ = {},
                    gQ[lE(0x0, 0x0, 0x0)] = la['k']['zUl'],
                    gQ)
                }
                  , gn = Cj(gk)
                  , gj = gn['zzW']
                  , gp = gn['zWR']
                  , gT = gn['zzH']
                  , gZ = gn['zzz']
                  , gy = new l7['u9r']();
                gy['setAttribute']('position', new l7['a$l'](gp,0x3)),
                gy['setIndex'](new l7['qlB'](gj,0x1)),
                gy['setAttribute']('ao', new l7['WTc'](gZ,0x1,!0x0)),
                gy['setAttribute']('realUv', new l7['WTc'](gT,0x4)),
                gd['zUm'] = new l7['jyz']({
                    'transparent': !0x1,
                    'uniforms': {
                        'map': {
                            'value': l9['Z']['zbO']()
                        },
                        'blendValue': {
                            'value': 0x0
                        }
                    },
                    'zTl': '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20attribute\x20vec4\x20realUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec4\x20vRealUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20mvPosition\x20=\x20modelViewMatrix\x20*\x20vec4(position,\x201.0);;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20projectionMatrix\x20*\x20mvPosition;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vRealUv\x20=\x20realUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
                    'zTm': '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20sampler2D\x20map;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20blendValue;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec4\x20vRealUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20atlasDim\x20=\x20' + l8['Z']['zLs']['toFixed'](0x1) + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20diffuseColor\x20=\x20vec4(1.0,\x201.0,\x201.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20tilePosX\x20=\x20max(0.05,\x20min(0.95,\x20fract(vRealUv.z)));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20tilePosY\x20=\x20max(0.05,\x20min(0.95,\x20fract(vRealUv.w)));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20uv\x20=\x20vec2(vRealUv.x\x20*\x20(1.0\x20/\x20atlasDim)\x20+\x20tilePosX\x20*\x20(1.0\x20/\x20atlasDim),\x20vRealUv.y\x20*\x20(1.0\x20/\x20atlasDim)\x20+\x20tilePosY\x20*\x20(1.0\x20/\x20atlasDim));\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20texelColor\x20=\x20texture2D(map,\x20uv);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20texelColor\x20=\x20mapTexelToLinear(texelColor);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20diffuseColor\x20*=\x20texelColor.rgba;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20diffuseColor\x20=\x20mix(diffuseColor,\x20vec4(1.0,\x201.0,\x201.0,\x201.0),\x20blendValue);\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20diffuseColor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
                    'fog': !0x1
                });
                var gG = new l7['Kj0'](gy,gd['zUm']);
                return gG['type'] = (0x0,
                ll['D_'])(),
                gd['zFJ']()['add'](gG),
                gd['zUI'] = 0x0,
                gd['zUX'] = !0x1,
                gd['zUY'] = !0x1,
                gd['zUx'] = Date['now'](),
                gd;
            }
            (0x0,
            C6['Z'])(gE, gm);
            var gN = gE['prototype'];
            return gN['zkb'] = function(gr) {
                for (var gD, gQ = CK(gr); !(gD = gQ())['done']; ) {
                    var gd = gD['value'];
                    if (gd['zkF'] === Cb['m']['zUp'])
                        this['zUX'] = !0x0,
                        this['zUY'] = !0x0,
                        this['zUx'] = Date['now'](),
                        this['zUI'] = 0x3e8 * (0x0,
                        lZ['Gc'])(gd['zkB']);
                }
            }
            ,
            gN['zus'] = function(gr, gD) {
                if (this['zUX']) {
                    !this['zUY'] || 0x0 === this['zFJ']()['position']['zWW'] && 0x0 === this['zFJ']()['position']['zWz'] && 0x0 === this['zFJ']()['position']['zWH'] || (this['zUY'] = !0x1,
                    this['zBn']()['zFd']()['zCV']()['zCo']((0x0,
                    lF['w1'])(this['zFJ']()['position']), Cg['k']['zUJ']));
                    var gQ = Date['now']() - this['zUx'];
                    this['zUm']['uniforms']['blendValue']['value'] = Math['sin'](gQ / 0x3e8 * 0xa) / 0x2 + 0.5;
                    var gd = this['zUI'] - 0x64;
                    if (gQ > gd) {
                        0x1 === this['zFJ']()['scale']['zWW'] ? this['zBn']()['zFd']()['zCV']()['zCo']((0x0,
                        lF['w1'])(this['zFJ']()['position']), Cg['k']['zUE']) : this['zFJ']()['scale']['zWW'] > 0x3 && (this['zFJ']()['visible'] = !0x1);
                        var gk = (gQ - gd) / 0x64 * 0.5 + 0x1;
                        this['zFJ']()['scale']['set'](gk, gk, gk),
                        this['zFJ']()['updateMatrix']();
                    }
                }
            }
            ,
            gN['zbt'] = function() {
                void 0x0 !== this['zUS'] && (this['zFJ']()['remove'](this['zUS']),
                l9['Z']['zAR'](this['zUS']),
                this['zUS'] = void 0x0);
            }
            ,
            gN['zAd'] = function(gr) {
                this['zFJ']()['position']['set'](gr['zWW'], gr['zWz'], gr['zWH']),
                this['zFJ']()['updateMatrix']();
            }
            ,
            gN['zkc'] = function(gr) {}
            ,
            gE;
        }(CH['Z'])
          , t1 = l2(0xaf72)
          , t2 = (function() {
            function gm(gN) {
                var gr = this;
                this['zUh'] = function(gD) {
                    gr['zUe']['push'](gD);
                }
                ,
                this['zUM'] = function(gD, gQ) {
                    gr['zUN'](gD, gQ);
                }
                ,
                this['zUd'] = function(gD) {
                    gr['zUn'](gD);
                }
                ,
                this['zkn'] = function(gD, gQ) {
                    gr['zUq'](gD) ? gr['zUt'](gD)['zkn'](gQ) : console['error']('Invalid\x20entity\x20action\x20command!');
                }
                ,
                this['zUw'] = function(gD, gQ) {
                    var gd = gr['zUt'](gD);
                    void 0x0 !== gd && gd['zkb'](gQ);
                }
                ,
                this['zkw'] = function(gD, gQ, gd, gk, gn, gj) {
                    var gp = gr['zUa'][gD];
                    void 0x0 !== gp && gp['zkw'](gQ, gd, gn);
                }
                ,
                this['zsP'] = function(gD, gQ, gd) {
                    if (gD !== (0x0,
                    lL['Yb'])()) {
                        var gk = gr['zUt'](gD);
                        if (void 0x0 !== gk) {
                            var gn = gk;
                            gn['zUZ'](gQ),
                            gn['zUR'](gd),
                            gn['zAd'](gQ),
                            gn['zkc'](gd),
                            gn['zAM'] = !0x0,
                            gn['zbj']();
                        }
                    } else
                        gr['zUe'] = [];
                }
                ,
                this['zbK'] = function(gD) {
                    for (var gQ = 0x0, gd = Object['values'](gr['zUa']); gQ < gd['length']; gQ++) {
                        gd[gQ]['zbK'](gD);
                    }
                }
                ,
                this['zCt'] = gN,
                this['zCn'] = new l7['Tme'](),
                this['zCn']['type'] = (0x0,
                ll['D_'])(),
                this['zUe'] = [],
                this['zUa'] = {},
                this['zCc']();
            }
            var gE = gm['prototype'];
            return gE['zCc'] = function() {
                lw['Z']['on'](lg['x']['ztW'], this['zUh']),
                lw['Z']['on'](lg['x']['ztz'], this['zUM']),
                lw['Z']['on'](lg['x']['ztH'], this['zkn']),
                lw['Z']['on'](lg['x']['ztT'], this['zUd']),
                lw['Z']['on'](lg['x']['ztL'], this['zUw']),
                lw['Z']['on'](lg['x']['zyh'], this['zkw']),
                lw['Z']['on'](lg['x']['zvy'], this['zsP']);
            }
            ,
            gE['zCX'] = function() {
                lw['Z']['off'](lg['x']['ztW'], this['zUh']),
                lw['Z']['off'](lg['x']['ztz'], this['zUM']),
                lw['Z']['off'](lg['x']['ztH'], this['zkn']),
                lw['Z']['off'](lg['x']['ztT'], this['zUd']),
                lw['Z']['off'](lg['x']['ztL'], this['zUw']),
                lw['Z']['off'](lg['x']['zyh'], this['zkw']),
                lw['Z']['off'](lg['x']['zvy'], this['zsP']);
            }
            ,
            gE['zbt'] = function() {
                this['zCX']();
                for (var gN = 0x0, gr = Object['values'](this['zUa']); gN < gr['length']; gN++) {
                    gr[gN]['zbt']();
                }
            }
            ,
            gE['zus'] = function(gN, gr) {
                for (var gD, gQ, gd = Date['now']() - 0x64; this['zUe']['length'] >= 0x2 && gd >= this['zUe'][0x0]['ztg'](); ) {
                    gD = this['zUe'][0x0];
                    for (var gk = (gQ = this['zUe'][0x1])['ztg']() - gd, gn = gQ['ztg']() - gD['ztg'](), gj = gQ['ztg']() <= gd ? 0x0 : gk / gn, gp = 0x0, gT = Object['values'](this['zUa']); gp < gT['length']; gp++) {
                        var gZ = gT[gp]
                          , gy = gD['ztr']()['get'](gZ['ziE']())
                          , gG = gQ['ztr']()['get'](gZ['ziE']());
                        gZ['ztD'](gy, gG, gj);
                    }
                    if (!(this['zUe']['length'] > 0x2 && gQ['ztg']() <= gd))
                        break;
                    this['zUe']['shift']();
                }
                for (var gO = 0x0, gq = Object['values'](this['zUa']); gO < gq['length']; gO++) {
                    gq[gO]['zus'](gN, gr);
                }
            }
            ,
            gE['zfK'] = function() {
                if (0x0 === this['zUe']['length'])
                    return -0x1;
                for (var gN = Date['now']() - 0x64, gr = 0x0, gD = this['zUe']['length'] - 0x1, gQ = -0x1; gr <= gD; ) {
                    var gd = Math['floor']((gr + gD) / 0x2);
                    this['zUe'][gd]['ztg']() > gN ? gD = gd - 0x1 : (gQ = gd,
                    gr = gd + 0x1);
                }
                if (-0x1 === gQ)
                    return this['zUe'][0x0]['ztV']();
                var gk = gQ
                  , gn = gk < this['zUe']['length'] - 0x1 ? gk + 0x1 : gk
                  , gj = gk === gn ? 0x0 : (gN - this['zUe'][gk]['ztg']()) / (this['zUe'][gn]['ztg']() - this['zUe'][gk]['ztg']());
                return (0x0,
                lb['t7'])(this['zUe'][gk]['ztV'](), this['zUe'][gn]['ztV'](), gj);
            }
            ,
            gE['zUN'] = function(gN, gr) {
                if (this['zUq'](gN))
                    console['error']('Duplicate\x20entity\x20spawn\x20command!', gN, CS['p'][gr]);
                else
                    switch (gr) {
                    case CS['p']['zBO']:
                        var gD = new Cf(this,gN);
                        this['zCn']['add'](gD['zFJ']()),
                        this['zUa'][gN] = gD;
                        break;
                    case CS['p']['zfR']:
                        var gQ = new CA(this,gN);
                        this['zCn']['add'](gQ['zFJ']()),
                        this['zUa'][gN] = gQ;
                        break;
                    case CS['p']['ztj']:
                        var gd = new t1['Z'](this,gN);
                        this['zCn']['add'](gd['zFJ']()),
                        this['zUa'][gN] = gd;
                        break;
                    case CS['p']['zUl']:
                        var gk = new t0(this,gN);
                        this['zCn']['add'](gk['zFJ']()),
                        this['zUa'][gN] = gk;
                    }
            }
            ,
            gE['zUn'] = function(gN) {
                if (this['zUq'](gN)) {
                    var gr = this['zUt'](gN);
                    this['zCn']['remove'](gr['zFJ']()),
                    gr['zbt'](),
                    this['ztK'](gN);
                } else
                    console['error']('Invalid\x20entity\x20remove\x20command!', gN);
            }
            ,
            gE['zUt'] = function(gN) {
                return this['zUa'][gN];
            }
            ,
            gE['ztK'] = function(gN) {
                delete this['zUa'][gN];
            }
            ,
            gE['zUq'] = function(gN) {
                return void 0x0 !== this['zUa'][gN];
            }
            ,
            gE['zfa'] = function() {
                return Object['values'](this['zUa']);
            }
            ,
            gE['zFJ'] = function() {
                return this['zCn'];
            }
            ,
            gE['zFd'] = function() {
                return this['zCt'];
            }
            ,
            gm;
        }())
          , t3 = (function() {
            function gm(gN) {
                this['zbK'] = function(gr) {}
                ,
                this['zCt'] = gN,
                this['zCn'] = new l7['Tme'](),
                this['zCn']['type'] = (0x0,
                ll['D_'])(),
                this['zto'] = [],
                this['zCc']();
            }
            var gE = gm['prototype'];
            return gE['zCc'] = function() {}
            ,
            gE['zCX'] = function() {}
            ,
            gE['zkr'] = function(gN, gr, gD) {
                if (void 0x0 === gD && (gD = 0x0),
                this['zCt']['zOE']()['ztu']) {
                    var gQ = new l7['nvb'](0.05,0.05,0.3)
                      , gd = new l7['vBJ']({
                        'color': 0xfff79c
                    })
                      , gk = new l7['Kj0'](gQ,gd);
                    gk['type'] = (0x0,
                    ll['D_'])(),
                    (0x0,
                    lF['cz'])(gr),
                    gk['position']['set'](gN['zWW'] + 0x1 * gr['zWW'], gN['zWz'] + 0x1 * gr['zWz'], gN['zWH'] + 0x1 * gr['zWH']);
                    var gn = Math['random']() * gD
                      , gj = Math['random']() * Math['PI'] * 0x2
                      , gp = (0x0,
                    lF['XX'])(Math['cos'](gj) * gn, Math['sin'](gj) * gn, l8['Z']['zLa'])
                      , gT = new l7['_fP']();
                    gT['setFromUnitVectors'](new l7['Pa4'](0x0,0x0,0x1), new l7['Pa4'](gr['zWW'],gr['zWz'],gr['zWH']));
                    var gZ = new l7['Pa4'](gp['zWW'],gp['zWz'],gp['zWH'])['applyQuaternion'](gT);
                    gk['rotation']['setFromQuaternion'](gT);
                    var gy = (0x0,
                    lF['XX'])(gZ['zWW'], gZ['zWz'], gZ['zWH']);
                    (0x0,
                    lF['cz'])(gy);
                    var gG = (0x0,
                    lF['dg'])(gy);
                    (0x0,
                    lF['Mt'])(gG, 0x64);
                    var gO = (0x0,
                    lF['dg'])(gN);
                    (0x0,
                    lF['BZ'])(gO, l8['Z']['zLn']);
                    var gq = this['zCt']['zCV']()['zCj']()['zvW'](gO, gy, 0x3e8, this['zCt']['zCV']()['zCj']()['zvL'])
                      , gA = 0xf4240;
                    gq['zvz'] && ((0x0,
                    lF['Mt'])(gq['zWZ'], l8['Z']['zLn']),
                    gA = (0x0,
                    lF['RJ'])(gq['zWZ'], gN)),
                    this['zCn']['add'](gk),
                    this['zto']['push']({
                        'zFM': gk,
                        'zWa': gN,
                        'ztb': gG,
                        'ztF': gA
                    });
                }
            }
            ,
            gE['zbt'] = function() {
                this['zCX']();
                for (var gN = 0x0; gN < this['zto']['length']; gN++)
                    this['zCn']['remove'](this['zto'][gN]['zFM']),
                    this['zto'][gN]['zFM']['geometry']['dispose']();
                this['zto'] = [];
            }
            ,
            gE['zus'] = function(gN, gr) {
                for (var gD = 0x0; gD < this['zto']['length']; gD++) {
                    var gQ = this['zto'][gD]
                      , gd = gQ['zFM']['position'];
                    gQ['zFM']['position']['set'](gd['zWW'] + gQ['ztb']['zWW'] * gN, gd['zWz'] + gQ['ztb']['zWz'] * gN, gd['zWH'] + gQ['ztb']['zWH'] * gN),
                    gd['distanceToSquared'](new l7['Pa4'](gQ['zWa']['zWW'],gQ['zWa']['zWz'],gQ['zWa']['zWH'])) > gQ['ztF'] && (this['zCn']['remove'](gQ['zFM']),
                    gQ['zFM']['geometry']['dispose'](),
                    this['zto'][gD] = this['zto'][this['zto']['length'] - 0x1],
                    this['zto']['pop'](),
                    --gD);
                }
            }
            ,
            gE['zFJ'] = function() {
                return this['zCn'];
            }
            ,
            gm;
        }())
          , t4 = (function() {
            function gm(gN) {
                var gr = this;
                this['zCk'] = function(gD, gQ, gd, gk, gn, gj, gp) {
                    for (var gT = 0x40, gZ = 0x96, gy = new Float32Array(0x300), gG = new Uint16Array(0x180), gO = new Float32Array(0x200), gq = 0x0; gq < gT; gq++) {
                        var gA = 0x1 * Math['cos'](gq / gT * Math['PI'] * 0x2)
                          , gK = 0x1 * Math['sin'](gq / gT * Math['PI'] * 0x2)
                          , gW = 0x1 * Math['cos']((gq + 0x1) / gT * Math['PI'] * 0x2)
                          , v0 = 0x1 * Math['sin']((gq + 0x1) / gT * Math['PI'] * 0x2);
                        gy[0xc * gq + 0x0] = gA,
                        gy[0xc * gq + 0x1] = 0x0,
                        gy[0xc * gq + 0x2] = gK,
                        gy[0xc * gq + 0x3] = gA,
                        gy[0xc * gq + 0x4] = gZ,
                        gy[0xc * gq + 0x5] = gK,
                        gy[0xc * gq + 0x6] = gW,
                        gy[0xc * gq + 0x7] = 0x0,
                        gy[0xc * gq + 0x8] = v0,
                        gy[0xc * gq + 0x9] = gW,
                        gy[0xc * gq + 0xa] = gZ,
                        gy[0xc * gq + 0xb] = v0,
                        gO[0x8 * gq + 0x0] = 0x0,
                        gO[0x8 * gq + 0x1] = 0x0,
                        gO[0x8 * gq + 0x2] = 0x0,
                        gO[0x8 * gq + 0x3] = 0x12c,
                        gO[0x8 * gq + 0x4] = 0x2,
                        gO[0x8 * gq + 0x5] = 0x0,
                        gO[0x8 * gq + 0x6] = 0x2,
                        gO[0x8 * gq + 0x7] = 0x12c,
                        gG[0x6 * gq + 0x0] = 0x4 * gq,
                        gG[0x6 * gq + 0x1] = 0x4 * gq + 0x1,
                        gG[0x6 * gq + 0x2] = 0x4 * gq + 0x2,
                        gG[0x6 * gq + 0x3] = 0x4 * gq + 0x2,
                        gG[0x6 * gq + 0x4] = 0x4 * gq + 0x1,
                        gG[0x6 * gq + 0x5] = 0x4 * gq + 0x3;
                    }
                    var v1 = new l7['u9r']();
                    v1['setAttribute']('position', new l7['a$l'](gy,0x3)),
                    v1['setIndex'](new l7['qlB'](gG,0x1)),
                    v1['setAttribute']('uv', new l7['a$l'](gO,0x2));
                    var v2 = new l7['vBJ']({
                        'map': l9['Z']['ztC'](),
                        'transparent': !0x0,
                        'opacity': 0.6,
                        'side': l7['ehD']
                    });
                    gr['zti'] = new l7['Kj0'](v1,v2),
                    gr['zti']['type'] = (0x0,
                    ll['D_'])(),
                    gr['zCn']['add'](gr['zti']);
                }
                ,
                this['ztB'] = function(gD, gQ, gd, gk, gn, gj) {
                    gr['ztA'] = gD,
                    gr['ztk'] = gQ,
                    gr['zts'] = (0x0,
                    C3['I$'])(gD),
                    gr['ztv'] = gQ,
                    gr['ztf'] = gd,
                    gr['ztO'] = gk,
                    gr['zty'] = gn,
                    gr['ztP'] = gj,
                    gr['ztU'] = Date['now']();
                }
                ,
                this['zbK'] = function(gD) {
                    if (++gr['ztt'] % Math['floor']((0x0,
                    lZ['gq'])(0.05)) == 0x0) {
                        var gQ = Date['now']();
                        Math['max'](0x0, gr['zty'] - (gQ - gr['ztU']) / 0x3e8),
                        Math['max'](0x0, gr['ztP'] + gr['zty'] - (gQ - gr['ztU']) / 0x3e8);
                        if (gQ - gr['ztU'] >= 0x3e8 * gr['zty']) {
                            var gd = Math['max'](0x0, Math['min'](0x1, (gQ - gr['ztU'] - 0x3e8 * gr['zty']) / (0x3e8 * gr['ztP'])));
                            gr['zts']['zWW'] = (0x0,
                            lb['t7'])(gr['ztA']['zWW'], gr['ztf']['zWW'], gd),
                            gr['zts']['zWz'] = (0x0,
                            lb['t7'])(gr['ztA']['zWz'], gr['ztf']['zWz'], gd),
                            gr['ztv'] = (0x0,
                            lb['t7'])(gr['ztk'], gr['ztO'], gd),
                            void 0x0 !== gr['zti'] && (gr['zti']['scale']['set'](gr['ztv'], 0x1, gr['ztv']),
                            gr['zti']['position']['set'](gr['zts']['zWW'], 0x0, gr['zts']['zWz']));
                        }
                    }
                }
                ,
                this['zCt'] = gN,
                this['zCn'] = new l7['Tme'](),
                this['zCn']['type'] = (0x0,
                ll['D_'])(),
                this['zts'] = (0x0,
                C3['Ak'])(0x0, 0x0),
                this['ztv'] = 0x4b0,
                this['ztA'] = (0x0,
                C3['Ak'])(0x0, 0x0),
                this['ztk'] = 0x4b0,
                this['ztf'] = (0x0,
                C3['Ak'])(0x0, 0x0),
                this['ztO'] = 0x4b0,
                this['zty'] = 0x0,
                this['ztP'] = 0x0,
                this['ztU'] = 0x0,
                this['ztt'] = 0x0,
                this['zCc']();
            }
            var gE = gm['prototype'];
            return gE['zCc'] = function() {
                lw['Z']['on'](lg['x']['zCG'], this['zCk']),
                lw['Z']['on'](lg['x']['ztn'], this['ztB']);
            }
            ,
            gE['zCX'] = function() {
                lw['Z']['off'](lg['x']['zCG'], this['zCk']),
                lw['Z']['off'](lg['x']['ztn'], this['ztB']);
            }
            ,
            gE['zPe'] = function(gN) {
                return (0x0,
                C3['if'])(gN, this['zts']) <= this['ztv'] * this['ztv'];
            }
            ,
            gE['zus'] = function(gN, gr) {}
            ,
            gE['ztc'] = function() {
                return this['zts'];
            }
            ,
            gE['ztG'] = function() {
                return this['ztv'];
            }
            ,
            gE['ztQ'] = function() {
                return this['ztf'];
            }
            ,
            gE['ztl'] = function() {
                return this['ztO'];
            }
            ,
            gE['zFJ'] = function() {
                return this['zCn'];
            }
            ,
            gm;
        }())
          , t5 = (function() {
            function gm(gN) {
                var gr = this;
                this['ztm'] = function(gn) {
                    var gj = new Image();
                    gj['src'] = 'data:image/png;base64,' + gn,
                    gj['onload'] = function() {
                        gr['ztI']['image'] = gj,
                        gr['ztI']['minFilter'] = l7['TyD'],
                        gr['ztI']['magFilter'] = l7['TyD'],
                        gr['ztI']['encoding'] = l7['knz'],
                        gr['ztI']['needsUpdate'] = !0x0;
                    }
                    ;
                }
                ,
                this['ztX'] = function(gn) {
                    return gn / ((gr['zCt']['zBc']()['zbc']()['zFk']()['zWW'] - gr['zCt']['zBc']()['zbc']()['zFA']()['zWW'] + 0x1) * l8['Z']['zLU'] * l8['Z']['zLn']) * 0x64;
                }
                ,
                this['ztY'] = function(gn) {
                    return gr['ztX'](gn - gr['zCt']['zBc']()['zbc']()['zFA']()['zWW'] * l8['Z']['zLU'] * l8['Z']['zLn']);
                }
                ,
                this['zbK'] = function(gn) {
                    var gj = gr['zCt']['zCV']()['zCj']()['zix']();
                    if (void 0x0 !== gj) {
                        var gp = (0x0,
                        lL['II'])();
                        gp !== gr['ztx'] && (gr['ztx'] = gp,
                        gr['ztp']['visible'] = gr['ztx'],
                        gr['ztJ']['visible'] = gr['ztx'],
                        gr['ztE']['visible'] = !gr['ztx']);
                        var gT = gr['zCt']['zCV']()['zCj']()['zvr']()['zWz']
                          , gZ = gr['ztY'](gj['zsH']['zFR']['zWW']) / 0x64
                          , gy = 0x1 - gr['ztY'](gj['zsH']['zFR']['zWH']) / 0x64
                          , gG = gr['ztY'](gr['zCt']['zPh']()['ztc']()['zWW']) / 0x64
                          , gO = 0x1 - gr['ztY'](gr['zCt']['zPh']()['ztc']()['zWz']) / 0x64
                          , gq = gr['ztX'](gr['zCt']['zPh']()['ztG']()) / 0x64
                          , gA = gr['ztY'](gr['zCt']['zPh']()['ztQ']()['zWW']) / 0x64
                          , gK = 0x1 - gr['ztY'](gr['zCt']['zPh']()['ztQ']()['zWz']) / 0x64
                          , gW = gr['ztX'](gr['zCt']['zPh']()['ztl']()) / 0x64;
                        gr['ztx'] ? (gr['ztS']['uniforms']['currCirclePos']['value']['set'](gG, gO),
                        gr['ztS']['uniforms']['currCircleRadius']['value'] = gq,
                        gr['ztS']['uniforms']['nextCirclePos']['value']['set'](gA, gK),
                        gr['ztS']['uniforms']['nextCircleRadius']['value'] = gW) : (gr['zth']['uniforms']['currCirclePos']['value']['set'](gG, gO),
                        gr['zth']['uniforms']['currCircleRadius']['value'] = gq,
                        gr['zth']['uniforms']['nextCirclePos']['value']['set'](gA, gK),
                        gr['zth']['uniforms']['nextCircleRadius']['value'] = gW,
                        gr['zth']['uniforms']['playerPos']['value']['set'](gZ, gy),
                        gr['zth']['uniforms']['playerDir']['value'] = gT);
                    }
                }
                ,
                this['zCt'] = gN,
                this['zCn'] = new l7['Tme'](),
                this['zCn']['type'] = (0x0,
                ll['D_'])(),
                this['ztx'] = !0x1,
                this['ztI'] = new l7['xEZ']();
                var gD = new l7['BKK'](0x1,0x1);
                this['zth'] = new l7['jyz']({
                    'uniforms': {
                        'map': {
                            'value': this['ztI']
                        },
                        'playerPos': {
                            'value': new l7['FM8']()
                        },
                        'playerDir': {
                            'value': 0x0
                        },
                        'currCirclePos': {
                            'value': new l7['FM8']()
                        },
                        'currCircleRadius': {
                            'value': 0x0
                        },
                        'nextCirclePos': {
                            'value': new l7['FM8']()
                        },
                        'nextCircleRadius': {
                            'value': 0x0
                        }
                    },
                    'zTl': '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec2\x20vUv;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20mvPosition\x20=\x20modelViewMatrix\x20*\x20vec4(position,\x201.0);;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20projectionMatrix\x20*\x20mvPosition;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vUv\x20=\x20uv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
                    'zTm': '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20sampler2D\x20map;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20vec2\x20playerPos;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20playerDir;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20vec2\x20currCirclePos;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20currCircleRadius;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20vec2\x20nextCirclePos;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20nextCircleRadius;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec2\x20vUv;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20inverselerpstep(float\x20a,\x20float\x20b,\x20float\x20x)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20step(0.9999,\x20(x\x20-\x20a)\x20/\x20(b\x20-\x20a));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20diffuseColor\x20=\x20vec4(0.204,\x200.549,\x200.925,\x201.0);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20circleOutlineWidth\x20=\x200.001;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20scale\x20=\x2010.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20mat2\x20rotMat\x20=\x20mat2(cos(playerDir),\x20sin(playerDir),\x20-sin(playerDir),\x20cos(playerDir));\x20\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20scale\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20mapUv\x20=\x20vec2(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(vUv.x\x20-\x200.5)\x20/\x20scale,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(vUv.y\x20-\x200.5)\x20/\x20scale\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20rotate\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20mapUv\x20=\x20rotMat\x20*\x20mapUv;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20translate\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20mapUv.x\x20+=\x20playerPos.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20mapUv.y\x20+=\x20playerPos.y;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20currCircleDx\x20=\x20mapUv.x\x20-\x20currCirclePos.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20currCircleDy\x20=\x20mapUv.y\x20-\x20currCirclePos.y;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20currCircleDist\x20=\x20sqrt(currCircleDx\x20*\x20currCircleDx\x20+\x20currCircleDy\x20*\x20currCircleDy);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20nextCircleDx\x20=\x20mapUv.x\x20-\x20nextCirclePos.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20nextCircleDy\x20=\x20mapUv.y\x20-\x20nextCirclePos.y;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20nextCircleDist\x20=\x20sqrt(nextCircleDx\x20*\x20nextCircleDx\x20+\x20nextCircleDy\x20*\x20nextCircleDy);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20mapColor\x20=\x20texture2D(map,\x20mapUv);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20currCircle\x20=\x20smoothstep(0.0,\x20circleOutlineWidth,\x20abs(currCircleDist\x20-\x20currCircleRadius));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20nextCircle\x20=\x20smoothstep(0.0,\x20circleOutlineWidth,\x20abs(nextCircleDist\x20-\x20nextCircleRadius));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20outsideCurrCircle\x20=\x201.0\x20-\x20inverselerpstep(0.0,\x20currCircleRadius,\x20currCircleDist\x20-\x20circleOutlineWidth);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20diffuseColor\x20=\x20mix(vec4(1.0,\x201.0,\x201.0,\x201.0),\x20mapColor,\x20currCircle);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20diffuseColor\x20=\x20mix(vec4(1.0,\x201.0,\x201.0,\x201.0),\x20diffuseColor,\x20nextCircle);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20diffuseColor\x20=\x20mix(mix(diffuseColor,\x20vec4(1.0,\x200.0,\x200.0,\x200.0),\x200.4),\x20diffuseColor,\x20outsideCurrCircle);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20diffuseColor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'
                }),
                this['ztE'] = new l7['Kj0'](gD,this['zth']),
                this['ztE']['type'] = (0x0,
                ll['D_'])(),
                this['zCn']['add'](this['ztE']);
                var gQ = new l7['BKK'](0x1,0x1);
                this['ztS'] = new l7['jyz']({
                    'uniforms': {
                        'map': {
                            'value': this['ztI']
                        },
                        'currCirclePos': {
                            'value': new l7['FM8']()
                        },
                        'currCircleRadius': {
                            'value': 0x0
                        },
                        'nextCirclePos': {
                            'value': new l7['FM8']()
                        },
                        'nextCircleRadius': {
                            'value': 0x0
                        }
                    },
                    'zTl': '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec2\x20vUv;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20mvPosition\x20=\x20modelViewMatrix\x20*\x20vec4(position,\x201.0);;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20projectionMatrix\x20*\x20mvPosition;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vUv\x20=\x20uv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
                    'zTm': '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20sampler2D\x20map;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20vec2\x20currCirclePos;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20currCircleRadius;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20vec2\x20nextCirclePos;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20nextCircleRadius;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec2\x20vUv;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20inverselerpstep(float\x20a,\x20float\x20b,\x20float\x20x)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20step(0.9999,\x20(x\x20-\x20a)\x20/\x20(b\x20-\x20a));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20diffuseColor\x20=\x20vec4(0.204,\x200.549,\x200.925,\x201.0);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20circleOutlineWidth\x20=\x200.002;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20scale\x20=\x201.0;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20currCircleDx\x20=\x20vUv.x\x20-\x20currCirclePos.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20currCircleDy\x20=\x20vUv.y\x20-\x20currCirclePos.y;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20currCircleDist\x20=\x20sqrt(currCircleDx\x20*\x20currCircleDx\x20+\x20currCircleDy\x20*\x20currCircleDy);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20nextCircleDx\x20=\x20vUv.x\x20-\x20nextCirclePos.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20nextCircleDy\x20=\x20vUv.y\x20-\x20nextCirclePos.y;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20nextCircleDist\x20=\x20sqrt(nextCircleDx\x20*\x20nextCircleDx\x20+\x20nextCircleDy\x20*\x20nextCircleDy);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20mapColor\x20=\x20texture2D(map,\x20vUv);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20currCircle\x20=\x20smoothstep(0.0,\x20circleOutlineWidth,\x20abs(currCircleDist\x20-\x20currCircleRadius));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20nextCircle\x20=\x20smoothstep(0.0,\x20circleOutlineWidth,\x20abs(nextCircleDist\x20-\x20nextCircleRadius));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20outsideCurrCircle\x20=\x201.0\x20-\x20inverselerpstep(0.0,\x20currCircleRadius,\x20currCircleDist\x20-\x20circleOutlineWidth);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20diffuseColor\x20=\x20mix(vec4(1.0,\x201.0,\x201.0,\x201.0),\x20mapColor,\x20currCircle);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20diffuseColor\x20=\x20mix(vec4(1.0,\x201.0,\x201.0,\x201.0),\x20diffuseColor,\x20nextCircle);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20diffuseColor\x20=\x20mix(mix(diffuseColor,\x20vec4(1.0,\x200.0,\x200.0,\x200.0),\x200.4),\x20diffuseColor,\x20outsideCurrCircle);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20diffuseColor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'
                }),
                this['ztp'] = new l7['Kj0'](gQ,this['ztS']),
                this['ztp']['type'] = (0x0,
                ll['D_'])(),
                this['ztp']['visible'] = !0x1,
                this['ztp']['position']['set'](0x0, 0x0, -0x1),
                this['zCn']['add'](this['ztp']);
                var gd = new l7['BKK'](0x1,0x1)
                  , gk = new l7['vBJ']({
                    'map': l9['Z']['zte'](),
                    'transparent': !0x0
                });
                this['ztJ'] = new l7['Kj0'](gd,gk),
                this['ztJ']['type'] = (0x0,
                ll['D_'])(),
                this['ztJ']['visible'] = !0x1,
                this['zCn']['add'](this['ztJ']),
                this['zCc']();
            }
            var gE = gm['prototype'];
            return gE['zCc'] = function() {
                lw['Z']['on'](lg['x']['ztM'], this['ztm']);
            }
            ,
            gE['zCX'] = function() {
                lw['Z']['off'](lg['x']['ztM'], this['ztm']);
            }
            ,
            gE['zbt'] = function() {
                this['zCX']();
            }
            ,
            gE['zus'] = function(gN, gr) {
                if (this['ztx']) {
                    var gD = this['zCt']['zCV']()['zCj']()['zix']();
                    if (void 0x0 === gD)
                        return;
                    var gQ = 0x2bc * this['zCt']['zvm']()['zuf']()
                      , gd = 0x2bc * this['zCt']['zvm']()['zuf']();
                    this['ztp']['scale']['set'](gQ, gd, 0x1);
                    var gk = 0x1e * this['zCt']['zvm']()['zuf']()
                      , gn = 0x1e * this['zCt']['zvm']()['zuf']()
                      , gj = this['zCt']['zCV']()['zCj']()['zvr']()['zWz']
                      , gp = this['ztY'](gD['zsH']['zFR']['zWW']) / 0x64
                      , gT = 0x1 - this['ztY'](gD['zsH']['zFR']['zWH']) / 0x64;
                    this['ztJ']['position']['set'](-gQ / 0x2 + gp * gQ, -gd / 0x2 + gT * gQ, -0x1),
                    this['ztJ']['scale']['set'](gk, gn, 0x1),
                    this['ztJ']['rotation']['set'](0x0, 0x0, gj);
                } else {
                    var gZ = 0xc8 * this['zCt']['zvm']()['zuf']()
                      , gy = 0xc8 * this['zCt']['zvm']()['zuf']();
                    this['ztE']['position']['set'](-window['innerWidth'] / 0x2 + 0x79 * this['zCt']['zvm']()['zuf'](), window['innerHeight'] / 0x2 - 0x79 * this['zCt']['zvm']()['zuf'](), -0x1),
                    this['ztE']['scale']['set'](gZ, gy, 0x1);
                }
            }
            ,
            gE['zFJ'] = function() {
                return this['zCn'];
            }
            ,
            gm;
        }())
          , t6 = (function() {
            function gm(gN, gr, gD) {
                var gQ = this;
                this['zbK'] = function(gd) {
                    gQ['zbB']['zbK'](gd),
                    gQ['zst']['zbK'](gd),
                    gQ['ztN']['zbK'](gd),
                    gQ['ztd']['zbK'](gd),
                    gQ['ztq']['zbK'](gd),
                    gQ['ztw']['zbK'](gd);
                }
                ,
                this['zus'] = function(gd, gk) {
                    gQ['zbB']['zus'](gd, gk),
                    gQ['ztd']['zus'](gd, gk),
                    gQ['zst']['zus'](gd, gk),
                    gQ['ztN']['zus'](gd, gk),
                    gQ['ztq']['zus'](gd, gk),
                    gQ['ztw']['zus'](gd, gk);
                }
                ,
                this['zoa'] = gN,
                this['zvu'] = gr,
                this['zCy'] = gD,
                this['zta'] = [],
                this['ztZ'] = new l7['Mig'](0xffffff,0.1),
                this['ztR'](this['ztZ']),
                this['zuO']()['fog'] = new l7['ybr'](l8['Z']['zgu'],0x3c,0x46),
                this['zvu']['zuy']()['fog'] = new l7['ybr'](l8['Z']['zgu'],0x3c,0x46),
                this['znW'] = new l7['vmT'](0xffffff,0xffffff,0.3),
                this['ztR'](this['znW']),
                this['znz'] = new l7['Ox3'](0xffffff,0.5),
                this['znz']['position']['set'](0x1, 0x1, 0x1),
                this['ztR'](this['znz']),
                this['znH'] = new l7['cek'](0xffffff,0.1),
                this['znH']['position']['set'](-0x1, 0x1, -0x1),
                this['zvu']['zuy']()['add'](this['znH']),
                this['zbB'] = new lA(this['zoa'],this['zvu']['zut'](),this,this['zCy']),
                this['zuO']()['add'](this['zbB']['zFJ']()),
                this['ztd'] = new t2(this),
                this['zuO']()['add'](this['ztd']['zFJ']()),
                this['ztN'] = new t3(this),
                this['zuO']()['add'](this['ztN']['zFJ']()),
                this['zst'] = new CG(this['zoa'],this['zvu'],this,this['zCy']),
                this['ztq'] = new t4(this),
                this['zuO']()['add'](this['ztq']['zFJ']()),
                this['ztw'] = new t5(this),
                this['zvu']['zuP']()['add'](this['ztw']['zFJ']());
            }
            var gE = gm['prototype'];
            return gE['ztR'] = function(gN) {
                var gr = gN['clone']();
                this['zvu']['zuO']()['add'](gN),
                this['zvu']['zuy']()['add'](gr),
                this['zta']['push'](gN),
                this['zta']['push'](gr);
            }
            ,
            gE['znT'] = function() {
                for (var gN = 0x0; gN < this['zta']['length']; gN++)
                    this['zvu']['zuO']()['remove'](this['zta'][gN]),
                    this['zvu']['zuy']()['remove'](this['zta'][gN]);
                this['zta'] = [];
            }
            ,
            gE['zbt'] = function() {
                this['znT'](),
                this['zuO']()['fog'] = null,
                this['zuO']()['remove'](this['zbB']['zFJ']()),
                this['zuO']()['remove'](this['ztd']['zFJ']()),
                this['zuO']()['remove'](this['ztN']['zFJ']()),
                this['zbB']['zbt'](),
                this['ztd']['zbt'](),
                this['zst']['zbt'](),
                this['ztN']['zbt']();
            }
            ,
            gE['zuO'] = function() {
                return this['zvu']['zuO']();
            }
            ,
            gE['zBc'] = function() {
                return this['zbB'];
            }
            ,
            gE['zBn'] = function() {
                return this['ztd'];
            }
            ,
            gE['zCV'] = function() {
                return this['zst'];
            }
            ,
            gE['zkg'] = function() {
                return this['ztN'];
            }
            ,
            gE['zPh'] = function() {
                return this['ztq'];
            }
            ,
            gE['zvm'] = function() {
                return this['zvu'];
            }
            ,
            gE['zOE'] = function() {
                return this['zoa'];
            }
            ,
            gm;
        }());
        function t7() {
            return lo()('!(function(){\x27use\x20strict\x27;var\x20l=function(H,S,b){return{\x27zWW\x27:H,\x27zWz\x27:S,\x27zWH\x27:b};},C=(\x27undefined\x27==typeof\x20navigator||void\x200x0===navigator[\x27hardwareConcurrency\x27]||navigator[\x27hardwareConcurrency\x27],l(0.35,1.3,0.35),l(0.3,1.3,0.3),0.04),w=0x0,g=0x1,v=0x2;let\x20F;const\x20L=()=>{F=setTimeout(L,0x3e8*C),postMessage([v]);};Date[\x27now\x27],onmessage=H=>{switch(H[\x27data\x27]){case\x20w:L();break;case\x20g:clearTimeout(F);}};}());', 'Worker', void 0x0, l2['p'] + './package/a7877efe81fc78af7eac.worker.js');
        }
        var t8 = 0x0
          , t9 = 0x1
          , tl = 0x2
          , tC = (function() {
            function gm(gN) {
                var gr = this;
                this['zkZ'] = function(gD) {
                    gr['znL'] = gD;
                }
                ,
                this['zng'] = function(gD) {
                    gr['znr'] = gr['znD'](gr['zng']);
                    var gQ = gr['znV']()
                      , gd = gQ - gr['znj']
                      , gk = Math['max'](0x0, Math['min'](gd, 0x32)) / 0x3e8;
                    gr['znj'] = gQ,
                    gr['zus'](gk, gd / 0x3e8);
                }
                ,
                this['znK'] = function() {
                    var gD = gr['znV']()
                      , gQ = gD - gr['znj']
                      , gd = Math['max'](0x0, Math['min'](gQ, 0x3e8)) / 0x3e8;
                    gr['znj'] = gD,
                    gr['zus'](gd, gQ / 0x3e8);
                }
                ,
                this['zus'] = function(gD, gQ) {
                    gr['zno'] += gD;
                    var gd = gr['znL'] + Math['round']((gr['zCy']['zbF']() / 0x3e8 + 0x1) / l8['Z']['zgK'] * (gr['znu'] - l8['Z']['zgK']) / l8['Z']['zgK'])
                      , gk = Math['max'](0x1, Math['round'](gr['zCy']['zbC']() / 0x2 / (0x3e8 * l8['Z']['zgK'])))
                      , gn = l8['Z']['zgK'];
                    for (gd > gk + 0x1 && (gn += 0.06 * l8['Z']['zgK']),
                    gr['znu'] = (0x0,
                    lb['r_'])(gr['znu'], gn, 0.06 * l8['Z']['zgK'] * gD / 0x3); gr['zno'] >= gr['znu']; )
                        gr['zno'] -= gr['znu'],
                        gr['zbK'](l8['Z']['zgK']);
                    gr['zvu']['zus'](gD, gr['zno']),
                    gr['zCt']['zus'](gD, gr['zno']),
                    gr['zCy']['zbK']();
                }
                ,
                this['zbK'] = function(gD) {
                    gr['zCt']['zbK'](gD);
                }
                ,
                this['zoa'] = gN,
                this['zvu'] = new lC(this['zoa'],'canvas'),
                this['zCy'] = new lR(),
                this['zuK'](),
                this['zno'] = 0x0,
                this['znj'] = 0x0,
                this['znr'] = 0x0,
                this['znV'] = Date['now']['bind'](Date),
                this['znj'] = this['znV'](),
                this['znD'] = requestAnimationFrame['bind'](window),
                this['znb'] = new t7(),
                this['znb']['onmessage'] = function(gD) {
                    gD['data']['length'] && 0x0 !== gD['data']['length'] && gD['data'][0x0] === tl && gr['znK']();
                }
                ,
                this['znF'](),
                document['hidden'] ? this['znC']() : document['hidden'] || this['zni'](),
                document['addEventListener']('visibilitychange', function() {
                    document['hidden'] && 0x1 !== gr['znB'] ? (gr['znA'](),
                    gr['znC']()) : document['hidden'] || 0x0 === gr['znB'] || (gr['znk'](),
                    gr['zni']());
                }),
                this['znu'] = l8['Z']['zgK'],
                this['znL'] = 0x0,
                this['zCc']();
            }
            var gE = gm['prototype'];
            return gE['zCc'] = function() {
                lw['Z']['on'](lg['x']['zvf'], this['zkZ']);
            }
            ,
            gE['znF'] = function() {
                window['THREE'] && (l8['Z']['zrT'] = !0x0),
                setInterval(this['znF'], 0x1388);
            }
            ,
            gE['zuK'] = function() {
                this['zCt'] && this['zCt']['zbt'](),
                this['zvu']['zuK'](),
                this['zCt'] = new t6(this['zoa'],this['zvu'],this['zCy']);
            }
            ,
            gE['zni'] = function() {
                this['znB'] = 0x0,
                this['zng'](this['znj']);
            }
            ,
            gE['znA'] = function() {
                this['znB'] = 0x2,
                cancelAnimationFrame(this['znr']);
            }
            ,
            gE['znC'] = function() {
                this['znB'] = 0x1,
                this['znb']['postMessage'](t8);
            }
            ,
            gE['znk'] = function() {
                this['znB'] = 0x2,
                this['znb']['postMessage'](t9);
            }
            ,
            gE['zvm'] = function() {
                return this['zvu'];
            }
            ,
            gE['zns'] = function() {
                return this['zCy'];
            }
            ,
            gE['zFd'] = function() {
                return this['zCt'];
            }
            ,
            gm;
        }())
          , tw = l2(0xbb88)
          , tg = 0x0
          , tv = 0x1
          , tF = 0x2
          , tL = 0x3
          , tH = 0x4
          , tS = 0x5
          , tb = 0x6
          , tc = l2(0x15f41)
          , th = 0x0
          , tJ = 0x1
          , tY = 0x2
          , tV = 0x3
          , tU = 0x4
          , ts = 0x5
          , tI = 0x6
          , tP = 0x7
          , tR = 0x8
          , tf = 0x9
          , to = 0xa
          , tu = 0xb
          , tB = 0xc
          , tx = 0xd
          , tz = 0xe
          , tX = 0xf
          , tM = 0x10
          , ta = 0x11
          , tm = 0x12
          , tE = 0x13
          , tN = 0x14
          , tr = 0x15
          , tD = 0x16
          , tQ = 0x17
          , td = 0x18
          , tk = 0x19
          , tj = 0x1a
          , tp = 0x1b
          , tT = 0x1c
          , tZ = [tc['g']['znv'], tc['g']['znv'], tc['g']['znv'], tc['g']['znf'], tc['g']['znf'], tc['g']['znf'], tc['g']['zrL'], tc['g']['znO'], tc['g']['zrL'], tc['g']['zny'], tc['g']['zny'], tc['g']['zny'], tc['g']['zny'], tc['g']['znf'], tc['g']['znf'], tc['g']['znO'], tc['g']['zrL'], tc['g']['zny'], tc['g']['zny'], tc['g']['znf'], tc['g']['zrL'], tc['g']['zny'], tc['g']['znf'], tc['g']['zrL'], tc['g']['znf'], tc['g']['znv'], tc['g']['znf'], tc['g']['znP'], tc['g']['znf']]
          , ty = 0x2
          , tG = 0x0
          , tO = 0x1
          , tq = 0x2
          , tA = 0x3
          , tK = 0x4
          , tW = 0x5
          , w0 = [tc['g']['zrL'], tc['g']['znv'], tc['g']['znf'], tc['g']['znf'], tc['g']['znf'], tc['g']['znf']]
          , w1 = l2(0x17f5)
          , w2 = l2(0x1498a);
        function w3(gm, gE) {
            var gN = 'undefined' != typeof Symbol && gm[Symbol['iterator']] || gm['@@iterator'];
            if (gN)
                return (gN = gN['call'](gm))['next']['bind'](gN);
            if (Array['isArray'](gm) || (gN = function(gD, gQ) {
                if (!gD)
                    return;
                if ('string' == typeof gD)
                    return w4(gD, gQ);
                var gd = Object['prototype']['toString']['call'](gD)['slice'](0x8, -0x1);
                'Object' === gd && gD['constructor'] && (gd = gD['constructor']['name']);
                if ('Map' === gd || 'Set' === gd)
                    return Array['from'](gD);
                if ('Arguments' === gd || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/['test'](gd))
                    return w4(gD, gQ);
            }(gm)) || gE && gm && 'number' == typeof gm['length']) {
                gN && (gm = gN);
                var gr = 0x0;
                return function() {
                    return gr >= gm['length'] ? {
                        'done': !0x0
                    } : {
                        'done': !0x1,
                        'value': gm[gr++]
                    };
                }
                ;
            }
            throw new TypeError('Invalid\x20attempt\x20to\x20iterate\x20non-iterable\x20instance.\x0aIn\x20order\x20to\x20be\x20iterable,\x20non-array\x20objects\x20must\x20have\x20a\x20[Symbol.iterator]()\x20method.');
        }
        function w4(gm, gE) {
            (null == gE || gE > gm['length']) && (gE = gm['length']);
            for (var gN = 0x0, gr = new Array(gE); gN < gE; gN++)
                gr[gN] = gm[gN];
            return gr;
        }
        var w5 = (function() {
            function gm(gN, gr) {
                var gD = this;
                this['znU'] = gN,
                this['zoa'] = gr,
                this['zvj'] = 0x0,
                this['znt'] = -0x1,
                this['znn'] = !0x1,
                lw['Z']['on'](lg['x']['zfJ'], function(gd, gk, gn, gj) {
                    gD['znU']['dispatch']((0x0,
                    lG['VN'])({
                        'zrP': gk,
                        'zry': gd,
                        'zrt': gj,
                        'zrU': gn
                    }));
                }),
                lw['Z']['on'](lg['x']['zsm'], function() {
                    (0x0,
                    lL['Zp'])() === Cu['Q']['zTh'] && ((0x0,
                    lL['s9'])() || (w1['Mt'](),
                    gD['znU']['dispatch']((0x0,
                    w2['Mi'])(w2['b_']['zTq']))));
                }),
                lw['Z']['on'](lg['x']['ziR'], function() {
                    (0x0,
                    lL['Zp'])() === Cu['Q']['zTh'] && ((0x0,
                    lL['s9'])() || (w1['Li'](),
                    gD['znU']['dispatch']((0x0,
                    w2['Mi'])(w2['b_']['zLV']))));
                }),
                lw['Z']['on'](lg['x']['znc'], function(gd) {
                    gD['znU']['dispatch']((0x0,
                    w2['Io'])(gd));
                }),
                lw['Z']['on'](lg['x']['zvc'], function() {
                    gD['znU']['dispatch']((0x0,
                    w2['NX'])(!0x1)),
                    gD['znU']['dispatch']((0x0,
                    w2['Mi'])(w2['b_']['zTq'])),
                    gD['znU']['dispatch']((0x0,
                    lG['jK'])(C9['P']['zzL'])),
                    w1['Li']();
                }),
                lw['Z']['on'](lg['x']['zfX'], function(gd, gk) {
                    gD['znU']['dispatch']((0x0,
                    lG['Vx'])(gd)),
                    gD['znU']['dispatch']((0x0,
                    lG['zU'])(gk));
                }),
                lw['Z']['on'](lg['x']['zfm'], function(gd, gk) {
                    if (gk['ziJ']()instanceof tw['Z']) {
                        var gn = gk['ziJ']()
                          , gj = gd['zfx'](gn['zfp']());
                        gD['znU']['dispatch']((0x0,
                        lG['_y'])(!0x0)),
                        gD['znU']['dispatch']((0x0,
                        lG['Vx'])(gn['zfY']())),
                        gD['znU']['dispatch']((0x0,
                        lG['zU'])(gj));
                    } else
                        gD['znU']['dispatch']((0x0,
                        lG['_y'])(!0x1));
                }),
                lw['Z']['on'](lg['x']['zfG'], function(gd) {
                    gD['znU']['dispatch']((0x0,
                    lG['wV'])(gd));
                }),
                lw['Z']['on'](lg['x']['zfc'], function(gd) {
                    gD['znU']['dispatch']((0x0,
                    lG['he'])({
                        'zrs': gd['ziJ']()['zOT'](),
                        'zrA': gd['ziJ']()['zOL'](),
                        'zrv': gd['zfU'](),
                        'zrf': (0x0,
                        C7['qH'])(gd['ziJ']())
                    }));
                }),
                lw['Z']['on'](lg['x']['znG'], function(gd, gk, gn, gj) {
                    gD['znU']['dispatch']((0x0,
                    lG['Ng'])({
                        'zrs': gd,
                        'zrA': gk,
                        'zrY': gn,
                        'zrx': gj
                    }));
                }),
                lw['Z']['on'](lg['x']['znQ'], function(gd, gk) {
                    gD['znU']['dispatch']((0x0,
                    lG['qW'])(!0x0)),
                    gD['znU']['dispatch']((0x0,
                    lG['EP'])(gk)),
                    void 0x0 !== gD['znl'] && (clearTimeout(gD['znl']),
                    gD['znl'] = void 0x0),
                    gd > 0x0 && (gD['znl'] = setTimeout(function() {
                        gD['znU']['dispatch']((0x0,
                        lG['qW'])(!0x1));
                    }, 0x3e8 * gd));
                }),
                this['znm'] = 0x0,
                lw['Z']['on'](lg['x']['znI'], function(gd) {
                    for (var gk = 0x0; gk < gd['length']; gk++) {
                        var gn = gd[gk];
                        gn['zkF'] === tJ ? gD['znU']['dispatch']((0x0,
                        lG['cL'])(gn['zkB'])) : gn['zkF'] === th ? gD['znU']['dispatch']((0x0,
                        lG['eR'])(gn['zkB'])) : gn['zkF'] === tI ? gD['znU']['dispatch']((0x0,
                        lG['kW'])(gn['zkB'])) : gn['zkF'] === tP ? gD['znU']['dispatch']((0x0,
                        lG['Ny'])(gn['zkB'])) : gn['zkF'] === tR ? gD['znU']['dispatch']((0x0,
                        lG['Ow'])(gn['zkB'])) : gn['zkF'] === tY ? gD['znU']['dispatch']((0x0,
                        lG['r6'])(gn['zkB'])) : gn['zkF'] === tV ? gD['znU']['dispatch']((0x0,
                        lG['Qj'])(gn['zkB'])) : gn['zkF'] === ts ? gD['znU']['dispatch']((0x0,
                        lG['ad'])(gn['zkB'])) : gn['zkF'] === tU ? (function() {
                            gD['znm'] = gn['zkB'],
                            gD['znU']['dispatch']((0x0,
                            lG['Im'])(gD['znm'])),
                            void 0x0 !== gD['znX'] && (clearTimeout(gD['znX']),
                            gD['znX'] = void 0x0),
                            gD['znX'] = setTimeout(function gj() {
                                --gD['znm'],
                                gD['znU']['dispatch']((0x0,
                                lG['Im'])(gD['znm'])),
                                gD['znm'] > 0x0 && (gD['znX'] = setTimeout(gj, 0x3e8));
                            }, 0x3e8);
                        }()) : gn['zkF'] === tf ? gD['znU']['dispatch']((0x0,
                        w2['ly'])(gn['zkB'])) : gn['zkF'] === to ? gD['znU']['dispatch']((0x0,
                        w2['uT'])(gn['zkB'])) : gn['zkF'] === tu ? gD['znU']['dispatch']((0x0,
                        w2['zh'])(gn['zkB'])) : gn['zkF'] === tx ? gD['znU']['dispatch']((0x0,
                        lG['c1'])(gn['zkB'])) : gn['zkF'] === tz ? gD['znU']['dispatch']((0x0,
                        lG['sy'])(gn['zkB'])) : gn['zkF'] === tB ? (gD['znn'] = gn['zkB'],
                        gD['znU']['dispatch']((0x0,
                        w2['Lk'])(gD['znn']))) : gn['zkF'] === tX ? (gD['znt'] = gn['zkB'],
                        gD['znU']['dispatch']((0x0,
                        lG['sq'])(gn['zkB']))) : gn['zkF'] === tM ? gD['znU']['dispatch']((0x0,
                        lG['Q'])(gn['zkB'])) : gn['zkF'] === ta ? gD['znU']['dispatch']((0x0,
                        w2['b3'])(gn['zkB'])) : gn['zkF'] === tm ? (0x0,
                        lL['so'])(gn['zkB']) : gn['zkF'] === tE ? gD['znU']['dispatch']((0x0,
                        lG['Wk'])(gn['zkB'])) : gn['zkF'] === tN ? gD['znU']['dispatch']((0x0,
                        lG['lH'])(gn['zkB'])) : gn['zkF'] === tr ? gD['znU']['dispatch']((0x0,
                        lG['bT'])(gn['zkB'])) : gn['zkF'] === tD ? gD['znU']['dispatch']((0x0,
                        lG['iw'])(gn['zkB'])) : gn['zkF'] === tQ ? gD['znU']['dispatch']((0x0,
                        lG['t6'])(gn['zkB'])) : gn['zkF'] === tk ? gD['znU']['dispatch']((0x0,
                        lG['IB'])(gn['zkB'])) : gn['zkF'] === td ? gD['znU']['dispatch']((0x0,
                        lG['Nk'])(gn['zkB'])) : gn['zkF'] === tj ? gD['znU']['dispatch']((0x0,
                        lG['AG'])(gn['zkB'])) : gn['zkF'] === tp ? l8['Z']['zgD'] = gn['zkB'] : gn['zkF'] === tT && (l8['Z']['zgu'] = gn['zkB']);
                    }
                }),
                lw['Z']['on'](lg['x']['zvk'], function() {
                    gD['znt'] > 0x0 && (gD['zvj'] = Date['now'](),
                    gD['znU']['dispatch']((0x0,
                    w2['Ad'])(!0x0)));
                }),
                lw['Z']['on'](lg['x']['znY'], function(gd) {
                    gD['znU']['dispatch']((0x0,
                    lG['QK'])(gd));
                }),
                lw['Z']['on'](lg['x']['znx'], function(gd) {
                    gD['znU']['dispatch']((0x0,
                    lG['Em'])({
                        'zDz': !0x0,
                        'zDH': gd
                    }));
                }),
                lw['Z']['on'](lg['x']['znp'], function(gd, gk, gn, gj, gp, gT) {
                    var gZ = '{{victim}}\x20somehow\x20died...';
                    if (gp === tg) {
                        var gy = Math['random']();
                        gZ = gy < 0.3 ? '{{killer}}\x20killed\x20{{victim}}\x20with\x20{{item}}' : gy < 0.6 ? '{{killer}}\x20eliminated\x20{{victim}}\x20with\x20{{item}}' : '{{killer}}\x20destroyed\x20{{victim}}\x20using\x20{{item}}';
                    } else
                        gp === tv ? gZ = '{{victim}}\x20fell\x20to\x20their\x20death' : gp === tF ? gZ = '{{victim}}\x20was\x20lost\x20in\x20the\x20fog' : gp === tL ? gZ = '{{victim}}\x20fell\x20out\x20of\x20the\x20world' : gp === tH ? gZ = '{{victim}}\x20was\x20poked\x20to\x20death\x20by\x20a\x20cactus' : gp === tS ? gZ = '{{victim}}\x20got\x20too\x20close\x20to\x20enemy\x20spawn' : gp === tb && (gZ = gd['length'] > 0x0 && gd !== gn ? '{{killer}}\x20made\x20{{victim}}\x20explode' : '{{victim}}\x20exploded');
                    var gG = (0x0,
                    C7['YJ'])(gT);
                    gD['znU']['dispatch']((0x0,
                    w2['G5'])({
                        'zVF': 0x0,
                        'znJ': gd,
                        'znE': (0x0,
                        Cc['W'])(gk),
                        'znS': gn,
                        'znh': (0x0,
                        Cc['W'])(gj),
                        'zne': gG['znM'](),
                        'znN': (0x0,
                        CB['Dx'])(gG['zOL']()),
                        'znd': gZ
                    })),
                    setTimeout(function() {
                        gD['znU']['dispatch']((0x0,
                        w2['wH'])());
                    }, 0x1f40);
                }),
                lw['Z']['on'](lg['x']['znq'], function(gd) {
                    gD['znU']['dispatch']((0x0,
                    w2['nW'])(gd)),
                    setTimeout(function() {
                        gD['znU']['dispatch']((0x0,
                        w2['SJ'])());
                    }, 0x1f40);
                }),
                lw['Z']['on'](lg['x']['znw'], function(gd, gk) {
                    gD['znU']['dispatch']((0x0,
                    w2['oc'])({
                        'zrs': gd,
                        'zVA': gk
                    })),
                    gD['zna']();
                }),
                lw['Z']['on'](lg['x']['zCf'], function(gd, gk) {
                    gD['znU']['dispatch']((0x0,
                    lG['eo'])({
                        'zDq': gd,
                        'zrx': gk
                    }));
                }),
                lw['Z']['on'](lg['x']['zCG'], function(gd, gk, gn, gj, gp, gT, gZ, gy) {
                    gD['znU']['dispatch']((0x0,
                    lG['Zy'])(gd)),
                    gD['znU']['dispatch']((0x0,
                    lG['Sg'])(gk)),
                    gD['znU']['dispatch']((0x0,
                    lG['ye'])(gp)),
                    gD['znU']['dispatch']((0x0,
                    lG['Ah'])(gy)),
                    w1['Mt']();
                }),
                lw['Z']['on'](lg['x']['znZ'], function(gd) {
                    gD['znU']['dispatch']((0x0,
                    w2['k6'])(gd));
                }),
                lw['Z']['on'](lg['x']['znR'], function(gd) {
                    gD['znU']['dispatch']((0x0,
                    w2['k6'])(gd));
                }),
                lw['Z']['on'](lg['x']['zcW'], function(gd, gk) {
                    gd || gD['znU']['dispatch']((0x0,
                    w2['Qb'])(Cu['Q']['zTE'])),
                    gD['znU']['dispatch']((0x0,
                    w2['CK'])(gk));
                }),
                lw['Z']['on'](lg['x']['zcz'], function(gd, gk) {
                    gd ? gD['znU']['dispatch']((0x0,
                    w2['YL'])(gk)) : gD['znU']['dispatch']((0x0,
                    w2['x9'])(gk));
                }),
                lw['Z']['on'](lg['x']['zOz'], function(gd, gk, gn, gj, gp, gT) {
                    gD['znU']['dispatch']((0x0,
                    lG['Fh'])({
                        'zrs': gd,
                        'zrA': gk,
                        'zrk': gn,
                        'zWb': gj,
                        'zrY': gp,
                        'zrv': gT
                    }));
                }),
                lw['Z']['on'](lg['x']['zUV'], function(gd) {
                    gD['znU']['dispatch']((0x0,
                    lG['fK'])(gd));
                }),
                document['addEventListener']('keyup', function(gd) {
                    (0x0,
                    lL['Zp'])() === Cu['Q']['zTh'] && ((0x0,
                    lL['D2'])() ? gd['keyCode'] === lv['Z']['ESC'] && lw['Z']['emit'](lg['x']['zvG']) : (0x0,
                    lL['bt'])() || (gd['keyCode'] === gD['zoa']['zsJ'][CX['ap']['MAP']] ? (gd['preventDefault'](),
                    (0x0,
                    lL['K8'])() ? gD['znU']['dispatch']((0x0,
                    w2['Y_'])(!0x1)) : gD['znU']['dispatch']((0x0,
                    w2['v0'])(!0x1))) : gd['keyCode'] === lv['Z']['ESC'] && (0x0,
                    lL['s9'])() && lw['Z']['emit'](lg['x']['zvU'], C9['P']['zzL'])));
                }, !0x1),
                document['addEventListener']('keydown', function(gd) {
                    (0x0,
                    lL['Zp'])() === Cu['Q']['zTh'] && ((0x0,
                    lL['D2'])() || (0x0,
                    lL['bt'])() || gd['keyCode'] === gD['zoa']['zsJ'][CX['ap']['MAP']] && (gd['preventDefault'](),
                    (0x0,
                    lL['K8'])() ? gD['znU']['dispatch']((0x0,
                    w2['Y_'])(!0x0)) : gD['znU']['dispatch']((0x0,
                    w2['v0'])(!0x0))));
                }, !0x1);
                var gQ = this['znU']['getState']();
                void 0x0 !== gQ['settings']['playerName'] && 0x0 !== gQ['settings']['playerName']['length'] || this['znU']['dispatch']((0x0,
                CX['zb'])('Soldier'));
            }
            var gE = gm['prototype'];
            return gE['zna'] = function() {
                var gN = this;
                void 0x0 === this['zcH'] && !function gr() {
                    gN['znU']['getState']()['ui']['zjq']['length'] > 0x0 ? gN['zcH'] = setTimeout(function() {
                        gN['znU']['dispatch']((0x0,
                        w2['gB'])()),
                        gr();
                    }, 0xbb8) : gN['zcH'] = void 0x0;
                }();
            }
            ,
            gE['zcT'] = function(gN, gr, gD) {
                var gQ = this['znU']['getState']();
                gN['zie'] = (0x0,
                lb['uZ'])(gQ['settings']['sensitivity'], l8['Z']['zgJ']['zgn'], l8['Z']['zgJ']['zgc']),
                gN['zih'] = (0x0,
                lb['uZ'])(gQ['settings']['adsSensitivityMultiplier'], l8['Z']['zgS']['zgn'], l8['Z']['zgS']['zgc']),
                gN['ziS'] = (0x0,
                lb['uZ'])(gQ['settings']['scopedSensitivityMultiplier'], l8['Z']['zgh']['zgn'], l8['Z']['zgh']['zgc']);
                var gd = (0x0,
                lb['uZ'])(gQ['settings']['renderScale'], l8['Z']['zgq']['zgn'], l8['Z']['zgq']['zgc']);
                gN['zuB'] !== gd && (gN['zuB'] = gd,
                void 0x0 !== gr && gr['zuc']()['setPixelRatio'](window['devicePixelRatio'] * gN['zuB'])),
                gN['zcL'] = gQ['settings']['primaryLoadout'],
                gN['zcg'] = gQ['settings']['secondaryLoadout'],
                gN['zcr'] = gQ['settings']['terrainTextureURL'],
                gN['zPE'] = (0x0,
                lb['uZ'])(gQ['settings']['soundVolume'], l8['Z']['zgw']['zgn'], l8['Z']['zgw']['zgc']),
                gN['ziI'] = gQ['settings']['invertYAxis'],
                gN['zfD'] = gQ['settings']['invertMouseWheel'];
                for (var gk = 0x0, gn = Object['entries'](gQ['settings']['keys']); gk < gn['length']; gk++) {
                    var gj = gn[gk]
                      , gp = gj[0x0]
                      , gT = gj[0x1];
                    gN['zsJ'][gp] = gT['keyCode'];
                }
                var gZ = !0x1
                  , gy = (0x0,
                lb['uZ'])(gQ['settings']['crosshairWidth'], l8['Z']['zga']['zgn'], l8['Z']['zga']['zgc']);
                gN['zPK'] !== gy && (gN['zPK'] = gy,
                gZ = !0x0);
                var gG = (0x0,
                lb['uZ'])(gQ['settings']['crosshairLength'], l8['Z']['zgZ']['zgn'], l8['Z']['zgZ']['zgc']);
                gN['zPD'] !== gG && (gN['zPD'] = gG,
                gZ = !0x0),
                gN['zPj'] !== gQ['settings']['crosshairColor'] && (gN['zPj'] = gQ['settings']['crosshairColor'],
                gZ = !0x0),
                gN['zPk'] !== gQ['settings']['crosshairHitColor'] && (gN['zPk'] = gQ['settings']['crosshairHitColor'],
                gZ = !0x0),
                gN['zPo'] !== gQ['settings']['crosshairStyle'] && (gN['zPo'] = gQ['settings']['crosshairStyle'],
                gZ = !0x0),
                gN['zUg'] = gQ['settings']['showCrosshairWhenADS'],
                gN['zUr'] = gQ['settings']['hideModelWhenADS'],
                gN['ztu'] = gQ['settings']['showBulletTracers'],
                gN['zOS'] = gQ['settings']['showAmmoShellsWhenFiring'],
                gN['zuL'] = (0x0,
                lb['uZ'])(gQ['settings']['generalFOV'], l8['Z']['zge']['zgn'], l8['Z']['zge']['zgc']),
                gN['zUz'] = (0x0,
                lb['uZ'])(gQ['settings']['adsFOVMultiplier'], l8['Z']['zgN']['zgn'], l8['Z']['zgN']['zgc']),
                gN['zUH'] = (0x0,
                lb['uZ'])(gQ['settings']['runningFOVMultiplier'], l8['Z']['zgd']['zgn'], l8['Z']['zgd']['zgc']);
                var gO = (0x0,
                lb['uZ'])(gQ['settings']['firstPersonModelFOV'], l8['Z']['zgM']['zgn'], l8['Z']['zgM']['zgc']);
                gN['zur'] !== gO && (gN['zur'] = gO,
                void 0x0 !== gr && (gr['zun']()['fov'] = gN['zur'],
                gr['zun']()['updateProjectionMatrix']())),
                gZ && void 0x0 !== gD && gD['zCV']()['zPA']();
            }
            ,
            gE['zcD'] = function(gN) {
                gN['zcV']();
                for (var gr = [], gD = 0x0; gD < Co['n']['zzi']; gD++) {
                    var gQ = gD
                      , gd = gN['zcj']((0x0,
                    Co['m'])(gQ)['ingredients']);
                    gr['push'](gd);
                }
                this['znU']['dispatch']((0x0,
                lG['iU'])(gr));
            }
            ,
            gE['zcK'] = function(gN, gr, gD) {
                var gQ = this;
                this['znU']['subscribe'](function() {
                    gQ['zcT'](gQ['zoa'], gr, gD);
                }),
                lw['Z']['on'](lg['x']['zvs'], function(gd) {
                    gQ['znU']['dispatch']((0x0,
                    lG['jK'])(gd)),
                    gd === C9['P']['zzL'] ? gQ['znU']['getState']()['ui']['zKK'] ? gD['zCV']()['zCj']()['zOC']()['zBK']() : gD['zCV']()['zCj']()['zOC']()['zBD']() : gd === C9['P']['zzg'] || gd === C9['P']['zzr'] ? (gD['zCV']()['zCj']()['zOC']()['zBK'](),
                    gQ['zcD'](gD['zCV']()['zCj']()['zfg']())) : (gd === C9['P']['zzD'] || gd === C9['P']['zzV'] || gd === C9['P']['zzj'] || gd === C9['P']['zzK'] || gd === C9['P']['zzo']) && gD['zCV']()['zCj']()['zOC']()['zBK']();
                }),
                lw['Z']['on'](lg['x']['zbr'], function(gd) {
                    if ((0x0,
                    lL['Zp'])() === Cu['Q']['zTh'] && !(0x0,
                    lL['Vg'])() && !((0x0,
                    lL['D2'])() && gd !== lv['Z']['ENTER'] || (0x0,
                    lL['bt'])() && gd !== lv['Z']['ENTER'])) {
                        if (gd === lv['Z']['ENTER'] && (0x0,
                        lL['VJ'])()) {
                            if ((0x0,
                            lL['bt'])()) {
                                var gk = gQ['znU']['getState']()['ui']['zjN'];
                                gk['length'] > 0x0 && (lw['Z']['emit'](lg['x']['zco'], gk),
                                gQ['znU']['dispatch']((0x0,
                                w2['G9'])(''))),
                                gQ['znU']['dispatch']((0x0,
                                w2['NX'])(!0x1));
                            } else
                                gQ['znU']['dispatch']((0x0,
                                w2['NX'])(!0x0));
                        } else {
                            if (gd === gQ['zoa']['zsJ'][CX['ap']['TOGGLE_INVENTORY']]) {
                                var gn = gQ['znU']['getState']()['game']['zrE']
                                  , gj = C9['P']['zzL'];
                                gn === C9['P']['zzL'] ? gj = (0x0,
                                lL['uF'])() ? C9['P']['zzD'] : C9['P']['zzg'] : gn === C9['P']['zzo'] && (gj = C9['P']['zzg']),
                                lw['Z']['emit'](lg['x']['zvU'], gj);
                            } else {
                                if (gd === gQ['zoa']['zsJ'][CX['ap']['TOGGLE_MAP']]) {
                                    var gp = gQ['znU']['getState']()['ui']['zjw'];
                                    gQ['znU']['dispatch']((0x0,
                                    w2['v0'])(!gp));
                                } else {
                                    if (gd === gQ['zoa']['zsJ'][CX['ap']['TOGGLE_PLAYER_MENU']]) {
                                        var gT = gQ['znU']['getState']()['game']['zrE']
                                          , gZ = C9['P']['zzo'];
                                        gT === C9['P']['zzo'] && (gZ = C9['P']['zzL']),
                                        lw['Z']['emit'](lg['x']['zvU'], gZ);
                                    }
                                }
                            }
                        }
                    }
                }),
                lw['Z']['on'](lg['x']['zfI'], function(gd) {
                    for (var gk, gn = w3(gd); !(gk = gn())['done']; ) {
                        var gj = gk['value']
                          , gp = gj[0x0]
                          , gT = gj[0x1];
                        gQ['znU']['dispatch']((0x0,
                        lG['dr'])({
                            'zVf': gp,
                            'zVO': {
                                'zWb': gT['ziJ']()['zOg'](),
                                'zWF': gT['ziJ']()['zcu'](),
                                'zrA': gT['ziJ']()['zOL'](),
                                'zrk': (0x0,
                                Cz['r'])(gT['ziJ']()['zfQ']())['tier'],
                                'zrs': gT['ziJ']()['zOT'](),
                                'zrv': gT['zfU'](),
                                'zrf': (0x0,
                                C7['qH'])(gT['ziJ']())
                            }
                        }));
                    }
                    gQ['zcD'](gD['zCV']()['zCj']()['zfg']());
                }),
                lw['Z']['on'](lg['x']['zcb'], function(gd, gk, gn) {
                    for (var gj, gp = void 0x0, gT = void 0x0, gZ = void 0x0, gy = void 0x0, gG = void 0x0, gO = void 0x0, gq = w3(gn); !(gj = gq())['done']; ) {
                        var gA = gj['value'];
                        gA['zkF'] === tq ? gZ = gA['zkB'] : gA['zkF'] === tA ? gy = gA['zkB'] : gA['zkF'] === tK ? gG = gA['zkB'] : gA['zkF'] === tW ? gO = gA['zkB'] : gA['zkF'] === tG ? gp = gA['zkB'] : gA['zkF'] === tO && (gT = gA['zkB']);
                    }
                    gk === ty ? gQ['znU']['dispatch']((0x0,
                    lG['Rz'])(gd)) : gQ['znU']['dispatch']((0x0,
                    lG['Wj'])({
                        'zVF': gd,
                        'zVk': gT,
                        'zWb': gp,
                        'zVC': gZ,
                        'zVi': gy,
                        'zVB': gG,
                        'zVA': gO
                    }));
                });
            }
            ,
            gm;
        }())
          , w6 = function() {
            this['zie'] = CX['E3']['sensitivity'],
            this['zih'] = CX['E3']['adsSensitivityMultiplier'],
            this['ziS'] = CX['E3']['scopedSensitivityMultiplier'],
            this['zuB'] = CX['E3']['renderScale'],
            this['zPE'] = CX['E3']['soundVolume'],
            this['ziI'] = CX['E3']['invertYAxis'],
            this['zfD'] = CX['E3']['invertMouseWheel'],
            this['zPK'] = CX['E3']['crosshairWidth'],
            this['zPD'] = CX['E3']['crosshairLength'],
            this['zPj'] = CX['E3']['crosshairColor'],
            this['zPk'] = CX['E3']['crosshairHitColor'],
            this['zPo'] = CX['E3']['crosshairStyle'],
            this['zcF'] = CX['E3']['chatVisible'],
            this['zcL'] = CX['E3']['primaryLoadout'],
            this['zcg'] = CX['E3']['secondaryLoadout'],
            this['zcr'] = CX['E3']['terrainTextureURL'],
            this['zUg'] = CX['E3']['showCrosshairWhenADS'],
            this['zUr'] = CX['E3']['hideModelWhenADS'],
            this['zuL'] = CX['E3']['generalFOV'],
            this['zur'] = CX['E3']['firstPersonModelFOV'],
            this['zUz'] = CX['E3']['adsFOVMultiplier'],
            this['zUH'] = CX['E3']['runningFOVMultiplier'],
            this['ztu'] = CX['E3']['showBulletTracers'],
            this['zOS'] = CX['E3']['showAmmoShellsWhenFiring'],
            this['zsJ'] = {};
            for (var gm = 0x0, gE = Object['entries'](CX['kS']); gm < gE['length']; gm++) {
                var gN = gE[gm]
                  , gr = gN[0x0]
                  , gD = gN[0x1];
                this['zsJ'][gr] = gD['keyCode'];
            }
        }
          , w7 = function() {
            return new Promise(function(gm, gE) {
                (0x0,
                lS['tJ'])((function() {
                    var gN = (0x0,
                    l4['Z'])(l6()['mark'](function gr(gD) {
                        var gQ, gd, gk;
                        return l6()['wrap'](function(gn) {
                            for (; ; )
                                switch (gn['prev'] = gn['next']) {
                                case 0x0:
                                    return gD['pause'](),
                                    lS['h']['dispatch']((0x0,
                                    w2['fx'])(!0x0)),
                                    gQ = new w6(),
                                    (gd = new w5(lS['h'],gQ))['zcT'](gQ, void 0x0, void 0x0),
                                    gn['next'] = 0x7,
                                    l9['Z']['zcC'](gQ);
                                case 0x7:
                                    gk = new tC(gQ),
                                    gd['zcK'](gk['zns'](), gk['zvm'](), gk['zFd']()),
                                    gm(gk);
                                case 0xa:
                                case 'end':
                                    return gn['stop']();
                                }
                        }, gr);
                    }));
                    return function(gD) {
                        return gN['apply'](this, arguments);
                    }
                    ;
                }()));
            }
            );
        }
          , w8 = l2(0x15294)
          , w9 = 0x0
          , wl = 0x1
          , wC = 0x2
          , ww = 0x3
          , wg = 0x4
          , wv = 0x5
          , wF = 0x6
          , wL = 0x7
          , wH = 0x8
          , wS = 0x9
          , wb = 0xa
          , wc = 0xb
          , wh = 0xc
          , wJ = 0xd
          , wY = 0xe
          , wV = 0xf
          , wU = 0x10
          , ws = 0x11
          , wI = 0x12
          , wP = 0x13
          , wR = 0x14
          , wf = 0x15
          , wo = 0x16
          , wu = 0x17
          , wB = 0x18
          , wx = 0x19
          , wz = 0x1a
          , wX = 0x1b
          , wM = 0x1c
          , wa = 0x1d
          , wm = 0x1e
          , wE = 0x1f
          , wN = 0x20
          , wr = 0x21
          , wD = 0x22
          , wQ = 0x23
          , wd = 0x24
          , wk = 0x25
          , wn = (function() {
            function gm(gE) {
                this['zci'] = gE;
            }
            return gm['prototype']['getId'] = function() {
                return this['zci'];
            }
            ,
            gm;
        }())
          , wj = function(gm) {
            function gE(gN) {
                return gm['call'](this, gN) || this;
            }
            return (0x0,
            C6['Z'])(gE, gm),
            gE;
        }(wn)
          , wp = function(gm) {
            function gE() {
                var gr;
                return (gr = gm['call'](this, wz) || this)['zcB'] = 0x0,
                gr;
            }
            (0x0,
            C6['Z'])(gE, gm);
            var gN = gE['prototype'];
            return gN['zcA'] = function(gr) {
                var gD = new DataView(gr);
                if (this['zck'] = gD['getInt16'](0x1),
                this['zcs'] = gD['getInt16'](0x3),
                this['zcv'] = gD['getInt16'](0x5),
                this['zbJ'] = gD['getUint16'](0x7),
                this['zcB'] = 0x9,
                this['zbJ'] > 0x0) {
                    var gQ = gD['getUint8'](this['zcB']) > 0x0;
                    this['zcB'] += 0x1,
                    this['zbS'] = new Uint8Array(l8['Z']['zLt']);
                    var gd = 0x0;
                    if (gQ) {
                        var gk = gD['getUint16'](this['zcB']);
                        this['zcB'] += 0x2;
                        for (var gn = 0x0; gn < gk; gn++) {
                            var gj = gD['getUint8'](this['zcB']);
                            this['zcB'] += 0x1;
                            var gp = gD['getUint8'](this['zcB']);
                            this['zcB'] += 0x1;
                            for (var gT = 0x0; gT < gj; gT++)
                                this['zbS'][gd++] = gp;
                        }
                    } else
                        this['zbS'][gd++] = gD['getUint8'](this['zcB']),
                        ++this['zcB'];
                }
            }
            ,
            gN['zcf'] = function() {
                return this['zcB'];
            }
            ,
            gN['zcO'] = function() {
                return this['zck'];
            }
            ,
            gN['zcy'] = function() {
                return this['zcs'];
            }
            ,
            gN['zcP'] = function() {
                return this['zcv'];
            }
            ,
            gN['zFT'] = function() {
                return this['zbS'];
            }
            ,
            gN['zcU'] = function() {
                return this['zbJ'];
            }
            ,
            gE;
        }(wj)
          , wT = function(gm) {
            function gE() {
                return gm['call'](this, wX) || this;
            }
            (0x0,
            C6['Z'])(gE, gm);
            var gN = gE['prototype'];
            return gN['zcA'] = function(gr) {
                var gD = new DataView(gr);
                this['zck'] = gD['getInt16'](0x1),
                this['zcs'] = gD['getInt16'](0x3),
                this['zcv'] = gD['getInt16'](0x5);
            }
            ,
            gN['zcf'] = function() {
                return 0x7;
            }
            ,
            gN['zcO'] = function() {
                return this['zck'];
            }
            ,
            gN['zcy'] = function() {
                return this['zcs'];
            }
            ,
            gN['zcP'] = function() {
                return this['zcv'];
            }
            ,
            gE;
        }(wj)
          , wZ = function(gm) {
            function gE(gN) {
                return gm['call'](this, gN) || this;
            }
            return (0x0,
            C6['Z'])(gE, gm),
            gE;
        }(wn)
          , wy = function(gm) {
            function gE(gr) {
                var gD;
                return (gD = gm['call'](this, w9) || this)['zct'] = gr,
                gD['zcn'] = 0x0,
                gD;
            }
            (0x0,
            C6['Z'])(gE, gm);
            var gN = gE['prototype'];
            return gN['zcc'] = function() {
                var gr = new ArrayBuffer(this['zcf']())
                  , gD = new DataView(gr);
                gD['setUint8'](0x0, this['getId']()),
                gD['setUint32'](0x1, this['zct']['zsW']),
                gD['setFloat32'](0x5, this['zct']['zfz']['zWz']),
                gD['setFloat32'](0x9, this['zct']['zfz']['zWW']),
                gD['setFloat32'](0xd, this['zct']['zfH']);
                var gQ = 0x0;
                return gQ |= this['zct']['zBL'] ? 0x1 : 0x0,
                gQ |= (this['zct']['zvE'] ? 0x1 : 0x0) << 0x1,
                gQ |= (this['zct']['zvJ'] ? 0x1 : 0x0) << 0x2,
                gQ |= (this['zct']['zBr'] ? 0x1 : 0x0) << 0x3,
                gQ |= (this['zct']['zvS'] ? 0x1 : 0x0) << 0x4,
                gQ |= (this['zct']['zvh'] ? 0x1 : 0x0) << 0x5,
                gQ |= (this['zct']['zve'] ? 0x1 : 0x0) << 0x6,
                gQ |= (this['zct']['zvM'] ? 0x1 : 0x0) << 0x7,
                gQ |= (this['zct']['zvN'] ? 0x1 : 0x0) << 0x8,
                gQ |= (this['zct']['zvd'] ? 0x1 : 0x0) << 0x9,
                gQ |= (this['zct']['zvq'] ? 0x1 : 0x0) << 0xa,
                gQ |= (this['zct']['zvw'] ? 0x1 : 0x0) << 0xb,
                gQ |= (this['zct']['zvX'] ? 0x1 : 0x0) << 0xc,
                gQ |= (this['zct']['zvY'] ? 0x1 : 0x0) << 0xd,
                gQ |= (this['zct']['zvx'] ? 0x1 : 0x0) << 0xe,
                gQ |= (this['zct']['zvp'] ? 0x1 : 0x0) << 0xf,
                gD['setUint16'](0x11, gQ),
                this['zcn'] = 0x13,
                this['zct']['zvX'] && (gD['setUint8'](this['zcn'], this['zct']['zva']),
                this['zcn'] += 0x1),
                this['zct']['zvY'] && (gD['setInt8'](this['zcn'], this['zct']['zvZ']),
                this['zcn'] += 0x1,
                gD['setInt8'](this['zcn'], this['zct']['zvR']),
                this['zcn'] += 0x1),
                this['zct']['zvx'] && (gD['setUint8'](this['zcn'], this['zct']['zrE']),
                this['zcn'] += 0x1),
                this['zct']['zvp'] && (gD['setUint8'](this['zcn'], this['zct']['zfW']),
                this['zcn'] += 0x1,
                gD['setInt8'](this['zcn'], this['zct']['zvR']),
                this['zcn'] += 0x1),
                gr;
            }
            ,
            gN['zcf'] = function() {
                var gr = 0x0;
                return this['zct']['zvX'] && (gr += 0x1),
                this['zct']['zvY'] && (gr += 0x2),
                this['zct']['zvx'] && (gr += 0x1),
                this['zct']['zvp'] && (gr += 0x2),
                0x13 + gr;
            }
            ,
            gE;
        }(wZ)
          , wG = l2(0x11c17)
          , wO = function(gm) {
            function gE() {
                var gr;
                return (gr = gm['call'](this, wl) || this)['zcG'] = -0x1,
                gr['zcB'] = 0x0,
                gr['zcQ'] = new Map(),
                gr['zcl'] = new Map(),
                gr;
            }
            (0x0,
            C6['Z'])(gE, gm);
            var gN = gE['prototype'];
            return gN['zcA'] = function(gr) {
                var gD = new DataView(gr)
                  , gQ = gD['getUint16'](0x1);
                this['zcB'] += 0x3;
                var gd = 0x0 != (0x1 & gQ)
                  , gk = 0x0 != (0x2 & gQ)
                  , gn = (0x1c & gQ) >> 0x2
                  , gj = 0x0 != (0x20 & gQ);
                this['zcm'] = 0x0 != (0x40 & gQ),
                this['zcI'] = 0x0 != (0x80 & gQ),
                this['zcX'] = 0x0 != (0x100 & gQ),
                this['zcY'] = 0x0 != (0x200 & gQ),
                this['zcx'] = 0x0 != (0x400 & gQ);
                var gp = 0x0 != (0x800 & gQ);
                this['zcp'] = 0x0 != (0x1000 & gQ),
                this['zcJ'] = 0x0 != (0x2000 & gQ),
                this['zsS'] = 0x0 != (0x4000 & gQ);
                var gT = gD['getUint32'](this['zcB']);
                this['zcB'] += 0x4,
                this['znL'] = gD['getUint8'](this['zcB']),
                this['zcB'] += 0x1;
                var gZ = 0x0;
                this['zcm'] && (gZ = gD['getFloat32'](this['zcB']),
                this['zcB'] += 0x4);
                var gy = (0x0,
                lF['XX'])(0x0, 0x0, 0x0);
                if (this['zcI']) {
                    var gG = gD['getFloat32'](this['zcB']);
                    this['zcB'] += 0x4;
                    var gO = gD['getFloat32'](this['zcB']);
                    this['zcB'] += 0x4;
                    var gq = gD['getFloat32'](this['zcB']);
                    this['zcB'] += 0x4,
                    gy['zWW'] = gG,
                    gy['zWz'] = gO,
                    gy['zWH'] = gq;
                }
                var gA = (0x0,
                lF['XX'])(0x0, 0x0, 0x0);
                if (this['zcX']) {
                    var gK = gD['getFloat32'](this['zcB']);
                    this['zcB'] += 0x4;
                    var gW = gD['getFloat32'](this['zcB']);
                    this['zcB'] += 0x4;
                    var v0 = gD['getFloat32'](this['zcB']);
                    this['zcB'] += 0x4,
                    gA['zWW'] = gK,
                    gA['zWz'] = gW,
                    gA['zWH'] = v0;
                }
                var v1 = -0x1;
                if (this['zcY'] && (v1 = gD['getFloat32'](this['zcB']),
                this['zcB'] += 0x4),
                this['zcE'] = {
                    'zsV': gZ,
                    'zFR': gy,
                    'zsr': gA,
                    'zsT': gd,
                    'zsL': gk,
                    'zsg': gn,
                    'zsD': v1,
                    'zsW': gT
                },
                this['zcx'] && (this['zcG'] = gD['getUint8'](this['zcB']),
                this['zcB'] += 0x1),
                this['zcJ'] && (this['zOn'] = gD['getUint8'](this['zcB']),
                this['zcB'] += 0x1),
                this['zsS'] && (this['zsh'] = gD['getUint8'](this['zcB']),
                this['zcB'] += 0x1),
                gj) {
                    var v2 = gD['getUint8'](this['zcB']);
                    this['zcB'] += 0x1;
                    for (var v3 = 0x0; v3 < v2; v3++) {
                        var v4 = gD['getInt8'](this['zcB']);
                        this['zcB'] += 0x1;
                        var v5 = gD['getUint16'](this['zcB']);
                        this['zcB'] += 0x2;
                        var v6 = gD['getUint8'](this['zcB']);
                        this['zcB'] += 0x1;
                        var v7 = []
                          , v8 = gD['getUint8'](this['zcB']);
                        this['zcB'] += 0x1;
                        for (var v9 = 0x0; v9 < v8; v9++) {
                            var vl = gD['getUint8'](this['zcB']);
                            this['zcB'] += 0x1;
                            var vC = (0x0,
                            wG['k'])(vl)
                              , vw = 0x0;
                            switch (vC) {
                            case tc['g']['znv']:
                                vw = gD['getUint8'](this['zcB']),
                                this['zcB'] += 0x1;
                                break;
                            case tc['g']['zcS']:
                                vw = gD['getInt8'](this['zcB']),
                                this['zcB'] += 0x1;
                                break;
                            case tc['g']['zch']:
                                vw = gD['getUint16'](this['zcB']),
                                this['zcB'] += 0x2;
                                break;
                            case tc['g']['zce']:
                                vw = gD['getInt16'](this['zcB']),
                                this['zcB'] += 0x2;
                                break;
                            case tc['g']['znf']:
                                vw = gD['getUint32'](this['zcB']),
                                this['zcB'] += 0x4;
                                break;
                            case tc['g']['znO']:
                                vw = gD['getInt32'](this['zcB']),
                                this['zcB'] += 0x4;
                                break;
                            case tc['g']['znP']:
                                vw = gD['getFloat32'](this['zcB']),
                                this['zcB'] += 0x4;
                                break;
                            case tc['g']['zcM']:
                                vw = gD['getFloat64'](this['zcB']),
                                this['zcB'] += 0x8;
                                break;
                            case tc['g']['zrL']:
                                var vg = gD['getUint8'](this['zcB']);
                                this['zcB'] += 0x1,
                                vw = '';
                                for (var vv = 0x0; vv < vg; vv++)
                                    vw += String['fromCharCode'](gD['getUint8'](this['zcB'])),
                                    this['zcB'] += 0x1;
                                break;
                            case tc['g']['zny']:
                                vw = gD['getUint8'](this['zcB']) > 0x0,
                                this['zcB'] += 0x1;
                                break;
                            default:
                                console['error']('Encountered\x20unknown\x20data\x20type\x20when\x20reading\x20Item\x20Metadata\x20in\x20Input\x20Response\x20Packet');
                            }
                            v7['push']({
                                'zkF': vl,
                                'zcN': vC,
                                'zkB': vw
                            });
                        }
                        var vF = (0x0,
                        C7['YJ'])(v5);
                        vF['zkb'](v7),
                        this['zcQ']['set'](v4, new C5['Z'](vF,v6));
                    }
                }
                if (gp) {
                    var vL = gD['getUint8'](this['zcB']);
                    this['zcB'] += 0x1;
                    for (var vH = 0x0; vH < vL; vH++) {
                        var vS = gD['getUint8'](this['zcB']);
                        this['zcB'] += 0x1;
                        var vb = gD['getUint32'](this['zcB']);
                        this['zcB'] += 0x4,
                        this['zcl']['set'](vS, vb);
                    }
                }
                this['zcp'] && (this['zcd'] = gD['getUint32'](this['zcB']),
                this['zcB'] += 0x4,
                this['zcq'] = gD['getUint32'](this['zcB']),
                this['zcB'] += 0x4,
                this['zcw'] = gD['getUint32'](this['zcB']),
                this['zcB'] += 0x4,
                this['zca'] = gD['getUint32'](this['zcB']),
                this['zcB'] += 0x4);
            }
            ,
            gN['zcf'] = function() {
                return this['zcB'];
            }
            ,
            gN['zOF'] = function() {
                return this['zcE'];
            }
            ,
            gN['zfr'] = function() {
                return this['zcG'];
            }
            ,
            gN['zfP'] = function() {
                return this['zcQ'];
            }
            ,
            gN['zsC'] = function() {
                return this['zcl'];
            }
            ,
            gN['zcZ'] = function() {
                return this['zcI'];
            }
            ,
            gN['zcR'] = function() {
                return this['zcX'];
            }
            ,
            gN['zGW'] = function() {
                return this['zcY'];
            }
            ,
            gN['zGz'] = function() {
                return this['zcm'];
            }
            ,
            gN['zvX'] = function() {
                return this['zcx'];
            }
            ,
            gN['zGH'] = function() {
                return this['zcp'];
            }
            ,
            gN['buildModeChanged'] = function() {
                return this['zcJ'];
            }
            ,
            gN['inventoryStatusChanged'] = function() {
                return this['zsS'];
            }
            ,
            gN['getInventoryStatus'] = function() {
                return this['zsh'];
            }
            ,
            gN['getMaxHealth'] = function() {
                return this['zcd'];
            }
            ,
            gN['getHealth'] = function() {
                return this['zcq'];
            }
            ,
            gN['zGT'] = function() {
                return this['zcw'];
            }
            ,
            gN['getShield'] = function() {
                return this['zca'];
            }
            ,
            gN['zGL'] = function() {
                return this['zOn'];
            }
            ,
            gN['zGg'] = function() {
                return this['znL'];
            }
            ,
            gE;
        }(wj)
          , wq = function(gm) {
            function gE(gr, gD) {
                var gQ;
                return (gQ = gm['call'](this, ww) || this)['zGr'] = gr,
                gQ['zGD'] = gD,
                gQ;
            }
            (0x0,
            C6['Z'])(gE, gm);
            var gN = gE['prototype'];
            return gN['zcc'] = function() {
                var gr = new ArrayBuffer(this['zcf']())
                  , gD = new DataView(gr);
                return gD['setUint8'](0x0, this['getId']()),
                gD['setUint8'](0x1, l8['Z']['zLA']),
                gD['setUint8'](0x2, this['zGr']),
                gD['setUint8'](0x3, this['zGD']),
                gr;
            }
            ,
            gN['zcf'] = function() {
                return 0x4;
            }
            ,
            gE;
        }(wZ)
          , wA = function(gm) {
            function gE() {
                return gm['call'](this, wg) || this;
            }
            (0x0,
            C6['Z'])(gE, gm);
            var gN = gE['prototype'];
            return gN['zcA'] = function(gr) {
                var gD = new DataView(gr);
                this['zGV'] = gD['getUint32'](0x1);
                var gQ = gD['getUint8'](0x5);
                this['zGj'] = '';
                for (var gd = 0x0; gd < gQ; gd++)
                    this['zGj'] += String['fromCharCode'](gD['getUint8'](0x6 + gd));
                var gk = gD['getFloat32'](0x6 + gQ)
                  , gn = gD['getFloat32'](0x6 + gQ + 0x4)
                  , gj = gD['getFloat32'](0x6 + gQ + 0x8);
                this['zGK'] = (0x0,
                lF['XX'])(gk, gn, gj);
                var gp = gD['getFloat32'](0x6 + gQ + 0xc)
                  , gT = gD['getFloat32'](0x6 + gQ + 0x10);
                this['zGo'] = (0x0,
                C3['Ak'])(gT, gp),
                this['zBY'] = gD['getUint8'](0x6 + gQ + 0x14);
                var gZ = gD['getFloat32'](0x6 + gQ + 0x15)
                  , gy = gD['getFloat32'](0x6 + gQ + 0x19)
                  , gG = gD['getFloat32'](0x6 + gQ + 0x1d);
                this['zGu'] = (0x0,
                lF['XX'])(gZ, gy, gG);
                var gO = gD['getFloat32'](0x6 + gQ + 0x21)
                  , gq = gD['getFloat32'](0x6 + gQ + 0x25)
                  , gA = gD['getFloat32'](0x6 + gQ + 0x29);
                this['zGb'] = (0x0,
                lF['XX'])(gO, gq, gA),
                this['zGF'] = [];
                for (var gK = gD['getUint8'](0x6 + gQ + 0x2d), gW = 0x0; gW < gK; gW++)
                    this['zGF']['push'](gD['getUint8'](0x6 + gQ + 0x2e + gW));
                this['zGC'] = gD['getFloat32'](0x6 + gQ + 0x2e + gK),
                this['zGi'] = Math['min'](Math['max'](gD['getUint32'](0x6 + gQ + 0x2e + gK + 0x4), 0x0), 0xffffff);
            }
            ,
            gN['zcf'] = function() {
                return 0x6 + this['zGj']['length'] + 0x14 + 0x1 + 0xc + 0xc;
            }
            ,
            gN['zGB'] = function() {
                return this['zGV'];
            }
            ,
            gN['zGA'] = function() {
                return this['zGK'];
            }
            ,
            gN['zGk'] = function() {
                return this['zGo'];
            }
            ,
            gN['zGs'] = function() {
                return this['zGj'];
            }
            ,
            gN['zGv'] = function() {
                return this['zBY'];
            }
            ,
            gN['zFA'] = function() {
                return this['zGu'];
            }
            ,
            gN['zFk'] = function() {
                return this['zGb'];
            }
            ,
            gN['zGf'] = function() {
                return this['zGF'];
            }
            ,
            gN['zGO'] = function() {
                return this['zGC'];
            }
            ,
            gN['zGy'] = function() {
                return this['zGi'];
            }
            ,
            gE;
        }(wj)
          , wK = (function() {
            function gm(gN, gr) {
                this['zci'] = gN,
                this['zGP'] = gr,
                this['zFR'] = (0x0,
                lF['XX'])(0x0, 0x0, 0x0),
                this['zfz'] = (0x0,
                C3['Ak'])(0x0, 0x0);
            }
            var gE = gm['prototype'];
            return gE['ziE'] = function() {
                return this['zci'];
            }
            ,
            gE['zGU'] = function() {
                return this['zGP'];
            }
            ,
            gE['zcZ'] = function() {
                return (0x1 & this['zGP']) > 0x0;
            }
            ,
            gE['zGt'] = function() {
                return (0x2 & this['zGP']) > 0x0;
            }
            ,
            gm;
        }())
          , wW = function(gm) {
            function gE(gr) {
                var gD;
                return (gD = gm['call'](this, wC) || this)['zGn'] = gr,
                gD['zGc'] = Date['now'](),
                gD;
            }
            (0x0,
            C6['Z'])(gE, gm);
            var gN = gE['prototype'];
            return gN['zcA'] = function(gr) {
                this['zcB'] = 0x0;
                var gD = new DataView(gr);
                for (this['zGG'] = gD['getFloat64'](0x1),
                this['zGQ'] = new Map(),
                this['zGl'] = gD['getUint32'](0x9),
                this['zcB'] = 0xd; ; ) {
                    var gQ = gD['getUint32'](this['zcB']);
                    if (this['zcB'] += 0x4,
                    0x0 === gQ)
                        break;
                    var gd = gD['getUint8'](this['zcB']);
                    this['zcB'] += 0x1;
                    var gk = new wK(gQ,gd);
                    gk['zcZ']() && (gk['zFR']['zWW'] = gD['getFloat32'](this['zcB']),
                    gk['zFR']['zWz'] = gD['getFloat32'](this['zcB'] + 0x4),
                    gk['zFR']['zWH'] = gD['getFloat32'](this['zcB'] + 0x8),
                    this['zcB'] += 0xc),
                    gk['zGt']() && (gk['zfz']['zWz'] = gD['getFloat32'](this['zcB']),
                    gk['zfz']['zWW'] = gD['getFloat32'](this['zcB'] + 0x4),
                    this['zcB'] += 0x8),
                    this['zGQ']['set'](gQ, gk);
                }
                if (void 0x0 !== this['zGn']) {
                    this['zGc'] = this['zGn']['ztg']() + (this['zGG'] - this['zGn']['zGm']());
                    var gn = Date['now']() - this['zGc'];
                    this['zGc'] += 0.05 * gn,
                    this['zGn'] = void 0x0;
                }
            }
            ,
            gN['zcf'] = function() {
                return this['zcB'];
            }
            ,
            gN['zGm'] = function() {
                return this['zGG'];
            }
            ,
            gN['ztg'] = function() {
                return this['zGc'];
            }
            ,
            gN['ztr'] = function() {
                return this['zGQ'];
            }
            ,
            gN['ztV'] = function() {
                return this['zGl'];
            }
            ,
            gE;
        }(wj)
          , g0 = function(gm) {
            function gE() {
                return gm['call'](this, wv) || this;
            }
            (0x0,
            C6['Z'])(gE, gm);
            var gN = gE['prototype'];
            return gN['zcA'] = function(gr) {
                var gD = new DataView(gr);
                this['zck'] = gD['getInt32'](0x1),
                this['zcs'] = gD['getInt32'](0x5),
                this['zcv'] = gD['getInt32'](0x9),
                this['zGI'] = gD['getUint8'](0xd);
            }
            ,
            gN['zcf'] = function() {
                return 0xe;
            }
            ,
            gN['zcO'] = function() {
                return this['zck'];
            }
            ,
            gN['zcy'] = function() {
                return this['zcs'];
            }
            ,
            gN['zcP'] = function() {
                return this['zcv'];
            }
            ,
            gN['zGX'] = function() {
                return this['zGI'];
            }
            ,
            gE;
        }(wj)
          , g1 = function(gm) {
            function gE() {
                return gm['call'](this, wa) || this;
            }
            (0x0,
            C6['Z'])(gE, gm);
            var gN = gE['prototype'];
            return gN['zcA'] = function(gr) {
                var gD = new DataView(gr);
                this['zGV'] = gD['getUint32'](0x1);
                var gQ = gD['getFloat32'](0x5)
                  , gd = gD['getFloat32'](0x9)
                  , gk = gD['getFloat32'](0xd);
                this['zGY'] = (0x0,
                lF['XX'])(gQ, gd, gk);
                var gn = gD['getFloat32'](0x11)
                  , gj = gD['getFloat32'](0x15);
                this['zGx'] = (0x0,
                C3['Ak'])(gn, gj);
            }
            ,
            gN['zcf'] = function() {
                return 0x19;
            }
            ,
            gN['zGB'] = function() {
                return this['zGV'];
            }
            ,
            gN['zGp'] = function() {
                return this['zGY'];
            }
            ,
            gN['zBT'] = function() {
                return this['zGx'];
            }
            ,
            gE;
        }(wj)
          , g2 = function(gm) {
            function gE() {
                var gr;
                return (gr = gm['call'](this, wQ) || this)['zcB'] = 0x0,
                gr['zGJ'] = [],
                gr;
            }
            (0x0,
            C6['Z'])(gE, gm);
            var gN = gE['prototype'];
            return gN['zcA'] = function(gr) {
                var gD = new DataView(gr);
                this['zcB'] += 0x1,
                this['zGE'] = gD['getUint32'](this['zcB']),
                this['zcB'] += 0x4;
                var gQ = gD['getUint8'](this['zcB']);
                this['zcB'] += 0x1;
                for (var gd = 0x0; gd < gQ; gd++) {
                    var gk = gD['getUint8'](this['zcB']);
                    this['zcB'] += 0x1;
                    var gn = 0x0;
                    switch ((0x0,
                    Cb['g'])(gk)) {
                    case tc['g']['znv']:
                        gn = gD['getUint8'](this['zcB']),
                        this['zcB'] += 0x1;
                        break;
                    case tc['g']['zcS']:
                        gn = gD['getInt8'](this['zcB']),
                        this['zcB'] += 0x1;
                        break;
                    case tc['g']['zch']:
                        gn = gD['getUint16'](this['zcB']),
                        this['zcB'] += 0x2;
                        break;
                    case tc['g']['zce']:
                        gn = gD['getInt16'](this['zcB']),
                        this['zcB'] += 0x2;
                        break;
                    case tc['g']['znf']:
                        gn = gD['getUint32'](this['zcB']),
                        this['zcB'] += 0x4;
                        break;
                    case tc['g']['znO']:
                        gn = gD['getInt32'](this['zcB']),
                        this['zcB'] += 0x4;
                        break;
                    case tc['g']['znP']:
                        gn = gD['getFloat32'](this['zcB']),
                        this['zcB'] += 0x4;
                        break;
                    case tc['g']['zcM']:
                        gn = gD['getFloat64'](this['zcB']),
                        this['zcB'] += 0x8;
                        break;
                    case tc['g']['zrL']:
                        var gj = gD['getUint8'](this['zcB']);
                        this['zcB'] += 0x1,
                        gn = '';
                        for (var gp = 0x0; gp < gj; gp++)
                            gn += String['fromCharCode'](gD['getUint8'](this['zcB'])),
                            this['zcB'] += 0x1;
                        break;
                    case tc['g']['zny']:
                        gn = gD['getUint8'](this['zcB']) > 0x0,
                        this['zcB'] += 0x1;
                        break;
                    default:
                        console['error']('Encountered\x20unknown\x20data\x20type\x20when\x20reading\x20Entity\x20Metadata\x20Packet');
                    }
                    this['zGJ']['push']({
                        'zkF': gk,
                        'zkB': gn
                    });
                }
            }
            ,
            gN['zcf'] = function() {
                return this['zcB'];
            }
            ,
            gN['zGS'] = function() {
                return this['zGE'];
            }
            ,
            gN['zGh'] = function() {
                return this['zGJ'];
            }
            ,
            gE;
        }(wj)
          , g3 = function(gm) {
            function gE() {
                var gr;
                return (gr = gm['call'](this, wJ) || this)['zcB'] = 0x0,
                gr['zGJ'] = [],
                gr;
            }
            (0x0,
            C6['Z'])(gE, gm);
            var gN = gE['prototype'];
            return gN['zcA'] = function(gr) {
                var gD = new DataView(gr);
                this['zcB'] += 0x1;
                var gQ = gD['getUint8'](this['zcB']);
                this['zcB'] += 0x1;
                for (var gd = 0x0; gd < gQ; gd++) {
                    var gk = gD['getUint8'](this['zcB']);
                    this['zcB'] += 0x1;
                    var gn = 0x0;
                    switch (tZ[gk]) {
                    case tc['g']['znv']:
                        gn = gD['getUint8'](this['zcB']),
                        this['zcB'] += 0x1;
                        break;
                    case tc['g']['zcS']:
                        gn = gD['getInt8'](this['zcB']),
                        this['zcB'] += 0x1;
                        break;
                    case tc['g']['zch']:
                        gn = gD['getUint16'](this['zcB']),
                        this['zcB'] += 0x2;
                        break;
                    case tc['g']['zce']:
                        gn = gD['getInt16'](this['zcB']),
                        this['zcB'] += 0x2;
                        break;
                    case tc['g']['znf']:
                        gn = gD['getUint32'](this['zcB']),
                        this['zcB'] += 0x4;
                        break;
                    case tc['g']['znO']:
                        gn = gD['getInt32'](this['zcB']),
                        this['zcB'] += 0x4;
                        break;
                    case tc['g']['znP']:
                        gn = gD['getFloat32'](this['zcB']),
                        this['zcB'] += 0x4;
                        break;
                    case tc['g']['zcM']:
                        gn = gD['getFloat64'](this['zcB']),
                        this['zcB'] += 0x8;
                        break;
                    case tc['g']['zrL']:
                        var gj = gD['getUint8'](this['zcB']);
                        this['zcB'] += 0x1,
                        gn = '';
                        for (var gp = 0x0; gp < gj; gp++)
                            gn += String['fromCharCode'](gD['getUint8'](this['zcB'])),
                            this['zcB'] += 0x1;
                        break;
                    case tc['g']['zny']:
                        gn = gD['getUint8'](this['zcB']) > 0x0,
                        this['zcB'] += 0x1;
                        break;
                    default:
                        console['error']('Encountered\x20unknown\x20data\x20type\x20when\x20reading\x20Game\x20Metadata\x20Packet');
                    }
                    this['zGJ']['push']({
                        'zkF': gk,
                        'zkB': gn
                    });
                }
            }
            ,
            gN['zcf'] = function() {
                return this['zcB'];
            }
            ,
            gN['zGh'] = function() {
                return this['zGJ'];
            }
            ,
            gE;
        }(wj)
          , g4 = function(gm) {
            function gE() {
                return gm['call'](this, wk) || this;
            }
            (0x0,
            C6['Z'])(gE, gm);
            var gN = gE['prototype'];
            return gN['zcA'] = function(gr) {
                var gD = new DataView(gr);
                this['zGE'] = gD['getUint32'](0x1),
                this['zGe'] = gD['getUint8'](0x5);
            }
            ,
            gN['zcf'] = function() {
                return 0x6;
            }
            ,
            gN['zGS'] = function() {
                return this['zGE'];
            }
            ,
            gN['zGM'] = function() {
                return this['zGe'];
            }
            ,
            gE;
        }(wj)
          , g5 = function(gm) {
            function gE() {
                return gm['call'](this, wM) || this;
            }
            (0x0,
            C6['Z'])(gE, gm);
            var gN = gE['prototype'];
            return gN['zcA'] = function(gr) {
                var gD = new DataView(gr);
                this['zGN'] = 0x1 === gD['getUint8'](0x1);
                var gQ = gD['getInt32'](0x2)
                  , gd = gD['getInt32'](0x6)
                  , gk = gD['getInt32'](0xa);
                this['zGd'] = (0x0,
                lF['XX'])(gQ, gd, gk);
                var gn = gD['getUint16'](0xe);
                this['zGq'] = [];
                for (var gj = 0x0; gj < gn; gj++) {
                    var gp = gD['getInt32'](0x10 + 0xc * gj)
                      , gT = gD['getInt32'](0x10 + 0xc * gj + 0x4)
                      , gZ = gD['getInt32'](0x10 + 0xc * gj + 0x8);
                    this['zGq']['push']((0x0,
                    lF['XX'])(gp, gT, gZ));
                }
                var gy = gD['getUint16'](0x10 + 0xc * gn);
                this['zGw'] = [];
                for (var gG = 0x0; gG < gy; gG++) {
                    var gO = gD['getInt32'](0x12 + 0xc * gn + 0x10 * gG)
                      , gq = gD['getInt32'](0x12 + 0xc * gn + 0x10 * gG + 0x4)
                      , gA = gD['getInt32'](0x12 + 0xc * gn + 0x10 * gG + 0x8)
                      , gK = gD['getFloat32'](0x12 + 0xc * gn + 0x10 * gG + 0xc);
                    this['zGw']['push']({
                        'pos': (0x0,
                        lF['XX'])(gO, gq, gA),
                        'progress': gK
                    });
                }
            }
            ,
            gN['zcf'] = function() {
                return 0x10 + 0xc * this['zGq']['length'] + 0x2 + 0x10 * this['zGw']['length'];
            }
            ,
            gN['zGa'] = function() {
                return this['zGN'];
            }
            ,
            gN['zGZ'] = function() {
                return this['zGd'];
            }
            ,
            gN['zGR'] = function() {
                return this['zGq'];
            }
            ,
            gN['zQW'] = function() {
                return this['zGw'];
            }
            ,
            gE;
        }(wj)
          , g6 = function(gm) {
            function gE() {
                return gm['call'](this, wH) || this;
            }
            (0x0,
            C6['Z'])(gE, gm);
            var gN = gE['prototype'];
            return gN['zcA'] = function(gr) {
                var gD = new DataView(gr)
                  , gQ = gD['getFloat32'](0x1)
                  , gd = gD['getFloat32'](0x5)
                  , gk = gD['getFloat32'](0x9);
                this['zQz'] = (0x0,
                lF['XX'])(gQ, gd, gk);
                var gn = gD['getUint8'](0xd);
                this['zQH'] = 0x0 != (0x1 & gn);
            }
            ,
            gN['zcf'] = function() {
                return 0xe;
            }
            ,
            gN['zQT'] = function() {
                return this['zQz'];
            }
            ,
            gN['zQL'] = function() {
                return this['zQH'];
            }
            ,
            gE;
        }(wj)
          , g7 = l2(0x25a9)
          , g8 = l2['n'](g7)
          , g9 = function(gm) {
            function gE() {
                return gm['call'](this, wm) || this;
            }
            (0x0,
            C6['Z'])(gE, gm);
            var gN = gE['prototype'];
            return gN['zcA'] = function(gr) {
                var gD = new DataView(gr)
                  , gQ = gD['getUint8'](0x1);
                this['zQg'] = '';
                for (var gd = 0x0; gd < gQ; gd++)
                    this['zQg'] += g8()(gD['getUint32'](0x2 + 0x4 * gd));
            }
            ,
            gN['zQr'] = function() {
                return this['zQg'];
            }
            ,
            gN['zcf'] = function() {
                return 0x2 + 0x4 * this['zQg']['length'];
            }
            ,
            gE;
        }(wj);
        l2(0x3c9d);
        function gl(gm, gE) {
            var gN = 'undefined' != typeof Symbol && gm[Symbol['iterator']] || gm['@@iterator'];
            if (gN)
                return (gN = gN['call'](gm))['next']['bind'](gN);
            if (Array['isArray'](gm) || (gN = function(gD, gQ) {
                if (!gD)
                    return;
                if ('string' == typeof gD)
                    return gC(gD, gQ);
                var gd = Object['prototype']['toString']['call'](gD)['slice'](0x8, -0x1);
                'Object' === gd && gD['constructor'] && (gd = gD['constructor']['name']);
                if ('Map' === gd || 'Set' === gd)
                    return Array['from'](gD);
                if ('Arguments' === gd || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/['test'](gd))
                    return gC(gD, gQ);
            }(gm)) || gE && gm && 'number' == typeof gm['length']) {
                gN && (gm = gN);
                var gr = 0x0;
                return function() {
                    return gr >= gm['length'] ? {
                        'done': !0x0
                    } : {
                        'done': !0x1,
                        'value': gm[gr++]
                    };
                }
                ;
            }
            throw new TypeError('Invalid\x20attempt\x20to\x20iterate\x20non-iterable\x20instance.\x0aIn\x20order\x20to\x20be\x20iterable,\x20non-array\x20objects\x20must\x20have\x20a\x20[Symbol.iterator]()\x20method.');
        }
        function gC(gm, gE) {
            (null == gE || gE > gm['length']) && (gE = gm['length']);
            for (var gN = 0x0, gr = new Array(gE); gN < gE; gN++)
                gr[gN] = gm[gN];
            return gr;
        }
        var gw = function(gm) {
            function gE(gr) {
                var gD;
                return (gD = gm['call'](this, wE) || this)['zQg'] = gr,
                gD['zQg'] = gD['zQg']['substr'](0x0, 0x64),
                gD;
            }
            (0x0,
            C6['Z'])(gE, gm);
            var gN = gE['prototype'];
            return gN['zcc'] = function() {
                var gr = new ArrayBuffer(this['zcf']())
                  , gD = new DataView(gr);
                gD['setUint8'](0x0, this['getId']());
                for (var gQ, gd = [], gk = gl(this['zQg']); !(gQ = gk())['done']; ) {
                    var gn = gQ['value'];
                    gd['push'](gn);
                }
                gD['setUint8'](0x1, gd['length']);
                for (var gj = 0x0; gj < gd['length']; gj++) {
                    var gp = gd[gj]['codePointAt'](0x0)
                      , gT = void 0x0 === gp ? 0x0 : gp;
                    gD['setUint32'](0x2 + 0x4 * gj, gT);
                }
                return gr;
            }
            ,
            gN['zcf'] = function() {
                return 0x2 + 0x4 * this['zQg']['length'];
            }
            ,
            gE;
        }(wZ)
          , gg = function(gm) {
            function gE() {
                return gm['call'](this, wN) || this;
            }
            (0x0,
            C6['Z'])(gE, gm);
            var gN = gE['prototype'];
            return gN['zcA'] = function(gr) {
                var gD = new DataView(gr);
                this['zGE'] = gD['getUint32'](0x1),
                this['zQD'] = gD['getUint8'](0x5);
            }
            ,
            gN['zcf'] = function() {
                return 0x6;
            }
            ,
            gN['zGS'] = function() {
                return this['zGE'];
            }
            ,
            gN['zQV'] = function() {
                return this['zQD'];
            }
            ,
            gE;
        }(wj)
          , gv = function(gm) {
            function gE() {
                return gm['call'](this, wr) || this;
            }
            (0x0,
            C6['Z'])(gE, gm);
            var gN = gE['prototype'];
            return gN['zcA'] = function(gr) {
                var gD = new DataView(gr);
                this['zGE'] = gD['getUint32'](0x1);
            }
            ,
            gN['zcf'] = function() {
                return 0x6;
            }
            ,
            gN['zGS'] = function() {
                return this['zGE'];
            }
            ,
            gE;
        }(wj)
          , gF = function(gm) {
            function gE() {
                var gr;
                return (gr = gm['call'](this, wD) || this)['zcB'] = 0x0,
                gr['zQj'] = '',
                gr['zQK'] = Cc['C']['zzF'],
                gr['zQo'] = '',
                gr['zQu'] = Cc['C']['zzF'],
                gr['zQb'] = Cw['q']['zzc'],
                gr;
            }
            (0x0,
            C6['Z'])(gE, gm);
            var gN = gE['prototype'];
            return gN['zcA'] = function(gr) {
                this['zcB'] += 0x1;
                var gD = new DataView(gr)
                  , gQ = gD['getUint8'](this['zcB']);
                this['zcB'] += 0x1;
                for (var gd = 0x0; gd < gQ; gd++)
                    this['zQj'] += String['fromCharCode'](gD['getUint8'](this['zcB'])),
                    this['zcB'] += 0x1;
                this['zQK'] = gD['getUint8'](this['zcB']),
                this['zcB'] += 0x1;
                var gk = gD['getUint8'](this['zcB']);
                this['zcB'] += 0x1;
                for (var gn = 0x0; gn < gk; gn++)
                    this['zQo'] += String['fromCharCode'](gD['getUint8'](this['zcB'])),
                    this['zcB'] += 0x1;
                this['zQu'] = gD['getUint8'](this['zcB']),
                this['zcB'] += 0x1,
                this['zQF'] = gD['getUint8'](this['zcB']),
                this['zcB'] += 0x1,
                this['zQF'] === tg && (this['zQb'] = gD['getUint8'](this['zcB']),
                this['zcB'] += 0x1);
            }
            ,
            gN['zcf'] = function() {
                return this['zcB'];
            }
            ,
            gN['zQC'] = function() {
                return this['zQj'];
            }
            ,
            gN['zQi'] = function() {
                return this['zQK'];
            }
            ,
            gN['zQB'] = function() {
                return this['zQo'];
            }
            ,
            gN['zQA'] = function() {
                return this['zQu'];
            }
            ,
            gN['zQk'] = function() {
                return this['zQF'];
            }
            ,
            gN['zQs'] = function() {
                return this['zQb'];
            }
            ,
            gE;
        }(wj)
          , gL = function(gm) {
            function gE() {
                return gm['call'](this, wd) || this;
            }
            (0x0,
            C6['Z'])(gE, gm);
            var gN = gE['prototype'];
            return gN['zcA'] = function(gr) {
                var gD = new DataView(gr);
                this['zck'] = gD['getInt32'](0x1),
                this['zcs'] = gD['getInt32'](0x5),
                this['zcv'] = gD['getInt32'](0x9),
                this['zQv'] = gD['getFloat32'](0xd);
            }
            ,
            gN['zcf'] = function() {
                return 0x11;
            }
            ,
            gN['zcO'] = function() {
                return this['zck'];
            }
            ,
            gN['zcy'] = function() {
                return this['zcs'];
            }
            ,
            gN['zcP'] = function() {
                return this['zcv'];
            }
            ,
            gN['zQf'] = function() {
                return this['zQv'];
            }
            ,
            gE;
        }(wj)
          , gH = function(gm) {
            function gE() {
                return gm['call'](this, wF) || this;
            }
            (0x0,
            C6['Z'])(gE, gm);
            var gN = gE['prototype'];
            return gN['zcc'] = function() {
                var gr = new ArrayBuffer(this['zcf']());
                return new DataView(gr)['setUint8'](0x0, this['getId']()),
                gr;
            }
            ,
            gN['zcf'] = function() {
                return 0x1;
            }
            ,
            gE;
        }(wZ)
          , gS = function(gm) {
            function gE() {
                var gr;
                return (gr = gm['call'](this, wb) || this)['zQO'] = '',
                gr['zcB'] = 0x0,
                gr;
            }
            (0x0,
            C6['Z'])(gE, gm);
            var gN = gE['prototype'];
            return gN['zcA'] = function(gr) {
                var gD = new DataView(gr)
                  , gQ = gD['getUint32'](0x1);
                this['zQO'] = '';
                for (var gd = 0x0; gd < gQ; gd++)
                    this['zQO'] += String['fromCharCode'](gD['getUint8'](0x5 + gd));
                this['zQO'] = window['btoa'](this['zQO']),
                this['zcB'] = 0x5 + gQ;
            }
            ,
            gN['zcf'] = function() {
                return this['zcB'];
            }
            ,
            gN['zQy'] = function() {
                return this['zQO'];
            }
            ,
            gE;
        }(wj)
          , gb = function(gm) {
            function gE() {
                return gm['call'](this, wY) || this;
            }
            (0x0,
            C6['Z'])(gE, gm);
            var gN = gE['prototype'];
            return gN['zcA'] = function(gr) {
                var gD = new DataView(gr)
                  , gQ = gD['getUint8'](0x1);
                this['zQg'] = '';
                for (var gd = 0x0; gd < gQ; gd++)
                    this['zQg'] += g8()(gD['getUint32'](0x2 + 0x4 * gd));
            }
            ,
            gN['zQr'] = function() {
                return this['zQg'];
            }
            ,
            gN['zcf'] = function() {
                return 0x2 + this['zQg']['length'];
            }
            ,
            gE;
        }(wj)
          , gc = function(gm) {
            function gE() {
                var gr;
                return (gr = gm['call'](this, wV) || this)['zQP'] = !0x1,
                gr;
            }
            (0x0,
            C6['Z'])(gE, gm);
            var gN = gE['prototype'];
            return gN['zcA'] = function(gr) {
                var gD = new DataView(gr);
                this['zQP'] = 0x0 !== gD['getUint8'](0x1);
            }
            ,
            gN['zcf'] = function() {
                return 0x2;
            }
            ,
            gN['zQU'] = function() {
                return this['zQP'];
            }
            ,
            gE;
        }(wj)
          , gh = function(gm) {
            function gE() {
                return gm['call'](this, wL) || this;
            }
            (0x0,
            C6['Z'])(gE, gm);
            var gN = gE['prototype'];
            return gN['zcA'] = function(gr) {
                new DataView(gr);
            }
            ,
            gN['zcf'] = function() {
                return 0x1;
            }
            ,
            gE;
        }(wj)
          , gJ = function(gm) {
            function gE() {
                return gm['call'](this, wc) || this;
            }
            (0x0,
            C6['Z'])(gE, gm);
            var gN = gE['prototype'];
            return gN['zcA'] = function(gr) {
                var gD = new DataView(gr);
                this['zQt'] = gD['getUint8'](0x1);
                var gQ = gD['getUint8'](0x2);
                this['zQg'] = '';
                for (var gd = 0x0; gd < gQ; gd++)
                    this['zQg'] += g8()(gD['getUint32'](0x3 + 0x4 * gd));
            }
            ,
            gN['zQn'] = function() {
                return this['zQt'];
            }
            ,
            gN['zQr'] = function() {
                return this['zQg'];
            }
            ,
            gN['zcf'] = function() {
                return 0x3 + 0x4 * this['zQg']['length'];
            }
            ,
            gE;
        }(wj)
          , gY = function(gm) {
            function gE() {
                return gm['call'](this, wh) || this;
            }
            (0x0,
            C6['Z'])(gE, gm);
            var gN = gE['prototype'];
            return gN['zcA'] = function(gr) {
                var gD = new DataView(gr)
                  , gQ = gD['getFloat32'](0x1)
                  , gd = gD['getFloat32'](0x5);
                this['ztA'] = (0x0,
                C3['Ak'])(gQ, gd),
                this['ztk'] = gD['getFloat32'](0x9);
                var gk = gD['getFloat32'](0xd)
                  , gn = gD['getFloat32'](0x11);
                this['ztf'] = (0x0,
                C3['Ak'])(gk, gn),
                this['ztO'] = gD['getFloat32'](0x15),
                this['zty'] = gD['getUint32'](0x19),
                this['ztP'] = gD['getUint32'](0x1d);
            }
            ,
            gN['zcf'] = function() {
                return 0x21;
            }
            ,
            gN['ztc'] = function() {
                return this['ztA'];
            }
            ,
            gN['ztG'] = function() {
                return this['ztk'];
            }
            ,
            gN['ztQ'] = function() {
                return this['ztf'];
            }
            ,
            gN['ztl'] = function() {
                return this['ztO'];
            }
            ,
            gN['zQc'] = function() {
                return this['zty'];
            }
            ,
            gN['zQG'] = function() {
                return this['ztP'];
            }
            ,
            gE;
        }(wj)
          , gV = function(gm) {
            function gE() {
                return gm['call'](this, wS) || this;
            }
            (0x0,
            C6['Z'])(gE, gm);
            var gN = gE['prototype'];
            return gN['zcA'] = function(gr) {
                var gD = new DataView(gr);
                this['zGE'] = gD['getUint32'](0x1),
                this['zQQ'] = gD['getUint32'](0x5),
                this['zQl'] = gD['getUint32'](0x9);
                var gQ = gD['getUint8'](0xd);
                this['zQm'] = 0x0 != (0x1 & gQ),
                this['zQI'] = 0x0 != (0x2 & gQ),
                this['zQH'] = 0x0 != (0x4 & gQ);
            }
            ,
            gN['zcf'] = function() {
                return 0x8;
            }
            ,
            gN['zGS'] = function() {
                return this['zGE'];
            }
            ,
            gN['zQX'] = function() {
                return this['zQl'];
            }
            ,
            gN['zQY'] = function() {
                return this['zQQ'];
            }
            ,
            gN['zQx'] = function() {
                return this['zQm'];
            }
            ,
            gN['zQp'] = function() {
                return this['zQI'];
            }
            ,
            gN['zQL'] = function() {
                return this['zQH'];
            }
            ,
            gE;
        }(wj)
          , gU = function(gm) {
            function gE() {
                return gm['call'](this, wU) || this;
            }
            (0x0,
            C6['Z'])(gE, gm);
            var gN = gE['prototype'];
            return gN['zcA'] = function(gr) {
                var gD = new DataView(gr)
                  , gQ = gD['getUint8'](0x1);
                this['zQg'] = '';
                for (var gd = 0x0; gd < gQ; gd++)
                    this['zQg'] += g8()(gD['getUint32'](0x2 + 0x4 * gd));
            }
            ,
            gN['zQr'] = function() {
                return this['zQg'];
            }
            ,
            gN['zcf'] = function() {
                return 0x2 + this['zQg']['length'];
            }
            ,
            gE;
        }(wj)
          , gs = function(gm) {
            function gE(gr) {
                var gD;
                return (gD = gm['call'](this, ws) || this)['zQJ'] = gr,
                gD;
            }
            (0x0,
            C6['Z'])(gE, gm);
            var gN = gE['prototype'];
            return gN['zcc'] = function() {
                var gr = new ArrayBuffer(this['zcf']())
                  , gD = new DataView(gr);
                return gD['setUint8'](0x0, this['getId']()),
                gD['setUint32'](0x1, this['zQJ']),
                gr;
            }
            ,
            gN['zcf'] = function() {
                return 0x5;
            }
            ,
            gE;
        }(wZ)
          , gI = function(gm) {
            function gE() {
                return gm['call'](this, wB) || this;
            }
            (0x0,
            C6['Z'])(gE, gm);
            var gN = gE['prototype'];
            return gN['zcc'] = function() {
                var gr = new ArrayBuffer(this['zcf']());
                return new DataView(gr)['setUint8'](0x0, this['getId']()),
                gr;
            }
            ,
            gN['zcf'] = function() {
                return 0x1;
            }
            ,
            gE;
        }(wZ)
          , gP = function(gm) {
            function gE() {
                var gr;
                return (gr = gm['call'](this, wI) || this)['zcB'] = 0x0,
                gr['zGJ'] = [],
                gr;
            }
            (0x0,
            C6['Z'])(gE, gm);
            var gN = gE['prototype'];
            return gN['zcA'] = function(gr) {
                var gD = new DataView(gr);
                this['zcB'] += 0x1,
                this['zGE'] = gD['getUint32'](this['zcB']),
                this['zcB'] += 0x4,
                this['zQE'] = gD['getUint8'](this['zcB']),
                this['zcB'] += 0x1;
                var gQ = gD['getUint8'](this['zcB']);
                this['zcB'] += 0x1;
                for (var gd = 0x0; gd < gQ; gd++) {
                    var gk = gD['getUint8'](this['zcB']);
                    this['zcB'] += 0x1;
                    var gn = 0x0;
                    switch (w0[gk]) {
                    case tc['g']['znv']:
                        gn = gD['getUint8'](this['zcB']),
                        this['zcB'] += 0x1;
                        break;
                    case tc['g']['zcS']:
                        gn = gD['getInt8'](this['zcB']),
                        this['zcB'] += 0x1;
                        break;
                    case tc['g']['zch']:
                        gn = gD['getUint16'](this['zcB']),
                        this['zcB'] += 0x2;
                        break;
                    case tc['g']['zce']:
                        gn = gD['getInt16'](this['zcB']),
                        this['zcB'] += 0x2;
                        break;
                    case tc['g']['znf']:
                        gn = gD['getUint32'](this['zcB']),
                        this['zcB'] += 0x4;
                        break;
                    case tc['g']['znO']:
                        gn = gD['getInt32'](this['zcB']),
                        this['zcB'] += 0x4;
                        break;
                    case tc['g']['znP']:
                        gn = gD['getFloat32'](this['zcB']),
                        this['zcB'] += 0x4;
                        break;
                    case tc['g']['zcM']:
                        gn = gD['getFloat64'](this['zcB']),
                        this['zcB'] += 0x8;
                        break;
                    case tc['g']['zrL']:
                        var gj = gD['getUint8'](this['zcB']);
                        this['zcB'] += 0x1,
                        gn = '';
                        for (var gp = 0x0; gp < gj; gp++)
                            gn += String['fromCharCode'](gD['getUint8'](this['zcB'])),
                            this['zcB'] += 0x1;
                        break;
                    case tc['g']['zny']:
                        gn = gD['getUint8'](this['zcB']) > 0x0,
                        this['zcB'] += 0x1;
                        break;
                    default:
                        console['error']('Encountered\x20unknown\x20data\x20type\x20when\x20reading\x20Entity\x20Metadata\x20Packet');
                    }
                    this['zGJ']['push']({
                        'zkF': gk,
                        'zkB': gn
                    });
                }
            }
            ,
            gN['zcf'] = function() {
                return this['zcB'];
            }
            ,
            gN['zGS'] = function() {
                return this['zGE'];
            }
            ,
            gN['zQS'] = function() {
                return this['zQE'];
            }
            ,
            gN['zGh'] = function() {
                return this['zGJ'];
            }
            ,
            gE;
        }(wj)
          , gR = function(gm) {
            function gE(gr, gD) {
                var gQ;
                return (gQ = gm['call'](this, wP) || this)['zQh'] = gr,
                gQ['zQe'] = gD,
                gQ;
            }
            (0x0,
            C6['Z'])(gE, gm);
            var gN = gE['prototype'];
            return gN['zcc'] = function() {
                var gr = new ArrayBuffer(this['zcf']())
                  , gD = new DataView(gr);
                return gD['setUint8'](0x0, this['getId']()),
                gD['setUint8'](0x1, this['zQh']),
                gD['setUint8'](0x2, this['zQe']),
                gr;
            }
            ,
            gN['zcf'] = function() {
                return 0x3;
            }
            ,
            gE;
        }(wZ)
          , gf = function(gm) {
            function gE() {
                return gm['call'](this, wR) || this;
            }
            (0x0,
            C6['Z'])(gE, gm);
            var gN = gE['prototype'];
            return gN['zcA'] = function(gr) {
                var gD = new DataView(gr)
                  , gQ = gD['getUint8'](0x1);
                this['zQg'] = '';
                for (var gd = 0x0; gd < gQ; gd++)
                    this['zQg'] += g8()(gD['getUint32'](0x2 + 0x4 * gd));
            }
            ,
            gN['zQr'] = function() {
                return this['zQg'];
            }
            ,
            gN['zcf'] = function() {
                return 0x2 + 0x4 * this['zQg']['length'];
            }
            ,
            gE;
        }(wj)
          , go = function(gm) {
            function gE() {
                return gm['call'](this, wf) || this;
            }
            (0x0,
            C6['Z'])(gE, gm);
            var gN = gE['prototype'];
            return gN['zcA'] = function(gr) {
                var gD = new DataView(gr);
                this['zQM'] = gD['getUint8'](0x1),
                this['zQN'] = gD['getFloat32'](0x2),
                this['zQd'] = gD['getFloat32'](0x6);
            }
            ,
            gN['zQq'] = function() {
                return this['zQM'];
            }
            ,
            gN['zQw'] = function() {
                return this['zQN'];
            }
            ,
            gN['zQa'] = function() {
                return this['zQd'];
            }
            ,
            gN['zcf'] = function() {
                return 0xa;
            }
            ,
            gE;
        }(wj)
          , gu = function(gm) {
            function gE() {
                return gm['call'](this, wo) || this;
            }
            (0x0,
            C6['Z'])(gE, gm);
            var gN = gE['prototype'];
            return gN['zcA'] = function(gr) {
                var gD = new DataView(gr)
                  , gQ = gD['getFloat32'](0x1)
                  , gd = gD['getFloat32'](0x5)
                  , gk = gD['getFloat32'](0x9);
                this['zQZ'] = (0x0,
                lF['XX'])(gQ, gd, gk),
                this['zQM'] = gD['getUint8'](0xd),
                this['zQN'] = gD['getFloat32'](0xe),
                this['zQd'] = gD['getFloat32'](0x12);
            }
            ,
            gN['zGp'] = function() {
                return this['zQZ'];
            }
            ,
            gN['zQq'] = function() {
                return this['zQM'];
            }
            ,
            gN['zQw'] = function() {
                return this['zQN'];
            }
            ,
            gN['zQa'] = function() {
                return this['zQd'];
            }
            ,
            gN['zcf'] = function() {
                return 0x16;
            }
            ,
            gE;
        }(wj)
          , gB = function(gm) {
            function gE() {
                return gm['call'](this, wu) || this;
            }
            (0x0,
            C6['Z'])(gE, gm);
            var gN = gE['prototype'];
            return gN['zcA'] = function(gr) {
                var gD = new DataView(gr);
                this['zQR'] = gD['getUint8'](0x1),
                this['zlW'] = gD['getUint16'](0x2);
            }
            ,
            gN['zcf'] = function() {
                return 0x4;
            }
            ,
            gN['zlz'] = function() {
                return this['zQR'];
            }
            ,
            gN['zlH'] = function() {
                return this['zlW'];
            }
            ,
            gE;
        }(wj)
          , gx = function(gm) {
            function gE() {
                var gr;
                return (gr = gm['call'](this, wa) || this)['zlT'] = [],
                gr['zcB'] = 0x0,
                gr;
            }
            (0x0,
            C6['Z'])(gE, gm);
            var gN = gE['prototype'];
            return gN['zcA'] = function(gr) {
                var gD = new DataView(gr)
                  , gQ = gD['getUint8'](0x1);
                this['zcB'] += 0x2;
                for (var gd = 0x0; gd < gQ; gd++) {
                    var gk = gD['getUint8'](this['zcB']);
                    this['zcB'] += 0x1;
                    var gn = ''
                      , gj = String['fromCharCode'](gD['getUint8'](this['zcB']));
                    for (this['zcB'] += 0x1; gj !== String['fromCharCode'](0x0); )
                        gn += gj,
                        gj = String['fromCharCode'](gD['getUint8'](this['zcB'])),
                        this['zcB'] += 0x1;
                    var gp = gD['getUint32'](this['zcB']);
                    this['zcB'] += 0x4,
                    this['zlT']['push']({
                        'zrs': gk,
                        'zWb': gn,
                        'zlL': gp
                    });
                }
            }
            ,
            gN['zcf'] = function() {
                return 0x1 + this['zcB'];
            }
            ,
            gN['zlg'] = function() {
                return this['zlT'];
            }
            ,
            gE;
        }(wj)
          , gz = (function() {
            function gm(gN) {
                var gr = this;
                this['zlr'] = function(gD) {
                    var gQ = new wy(gD);
                    gr['zlD'](gQ);
                }
                ,
                this['zlV'] = function(gD) {
                    var gQ = new gw(gD);
                    gr['zlD'](gQ);
                }
                ,
                this['zlj'] = function(gD) {
                    var gQ = new gs(gD);
                    gr['zlD'](gQ);
                }
                ,
                this['zlK'] = function(gD, gQ) {
                    var gd = new gR(gD,gQ);
                    gr['zlD'](gd);
                }
                ,
                this['zsd'] = function() {
                    var gD = new gI();
                    gr['zlD'](gD);
                }
                ,
                this['zlo'] = function() {
                    w8['Z']['zlu']('Connected\x20to\x20' + gr['zlb']() + ':' + gr['zlF']());
                    var gD = new wq(gr['zGr'],gr['zGD']);
                    gr['zlD'](gD);
                }
                ,
                this['zlC'] = function() {
                    if (gr['zli']()) {
                        gr['zlB'] = Date['now']();
                        var gD = new gH();
                        gr['zlD'](gD);
                    }
                }
                ,
                this['zlA'] = function() {
                    var gD = Date['now']() - gr['zlB'];
                    gr['zCy']['zbi'](gD),
                    setTimeout(gr['zlC'], l8['Z']['zgo']);
                }
                ,
                this['zlk'] = function(gD) {
                    var gQ = gD['data'];
                    switch (new DataView(gQ)['getUint8'](0x0)) {
                    case wz:
                        var gd = new wp();
                        gd['zcA'](gQ),
                        lw['Z']['emit'](lg['x']['zCQ'], gd['zcO'](), gd['zcy'](), gd['zcP'](), gd['zcU'](), gd['zFT']()),
                        gr['zCy']['zbb'](gd['zcf']());
                        break;
                    case wX:
                        var gk = new wT();
                        gk['zcA'](gQ),
                        lw['Z']['emit'](lg['x']['zCl'], gk['zcO'](), gk['zcy'](), gk['zcP']()),
                        gr['zCy']['zbb'](gk['zcf']());
                        break;
                    case wl:
                        var gn = new wO();
                        gn['zcA'](gQ),
                        lw['Z']['emit'](lg['x']['zvf'], gn['zGg'](), gn['zcZ'](), gn['zcR'](), gn['zGW'](), gn['zGz'](), gn['zvX'](), gn['zGH'](), gn['buildModeChanged'](), gn['inventoryStatusChanged'](), gn['zOF'](), gn['zfr'](), gn['zfP'](), gn['zsC'](), gn['getMaxHealth'](), gn['getHealth'](), gn['zGT'](), gn['getShield'](), gn['zGL'](), gn['getInventoryStatus']()),
                        gr['zCy']['zbb'](gn['zcf']());
                        break;
                    case wC:
                        var gj = new wW(gr['zGn']);
                        gr['zGn'] = gj,
                        gj['zcA'](gQ),
                        lw['Z']['emit'](lg['x']['ztW'], gj),
                        gr['zCy']['zbb'](gj['zcf']());
                        break;
                    case wg:
                        var gp = new wA();
                        gp['zcA'](gQ),
                        lw['Z']['emit'](lg['x']['zCG'], gp['zGB'](), gp['zGs'](), gp['zGA'](), gp['zGk'](), gp['zGv'](), gp['zFA'](), gp['zFk'](), gp['zGf'](), gp['zGO'](), gp['zGy']()),
                        gr['zCy']['zbb'](gp['zcf']()),
                        gr['zlC']();
                        break;
                    case wv:
                        var gT = new g0();
                        gT['zcA'](gQ),
                        lw['Z']['emit'](lg['x']['zCI'], gT['zcO'](), gT['zcy'](), gT['zcP'](), gT['zGX']()),
                        gr['zCy']['zbb'](gT['zcf']());
                        break;
                    case wM:
                        var gZ = new g5();
                        gZ['zcA'](gQ),
                        lw['Z']['emit'](lg['x']['zvO'], gZ['zGa'](), gZ['zGZ'](), gZ['zGR'](), gZ['zQW']()),
                        gr['zCy']['zbb'](gZ['zcf']());
                        break;
                    case wa:
                        var gy = new g1();
                        gy['zcA'](gQ),
                        lw['Z']['emit'](lg['x']['zvy'], gy['zGB'](), gy['zGp'](), gy['zBT']()),
                        gr['zCy']['zbb'](gy['zcf']());
                        break;
                    case wm:
                        var gG = new g9();
                        gG['zcA'](gQ),
                        lw['Z']['emit'](lg['x']['znc'], gG['zQr']()),
                        gr['zCy']['zbb'](gG['zcf']());
                        break;
                    case wN:
                        var gO = new gg();
                        gO['zcA'](gQ),
                        lw['Z']['emit'](lg['x']['ztz'], gO['zGS'](), gO['zQV']()),
                        gr['zCy']['zbb'](gO['zcf']());
                        break;
                    case wr:
                        var gq = new gv();
                        gq['zcA'](gQ),
                        lw['Z']['emit'](lg['x']['ztT'], gq['zGS']()),
                        gr['zCy']['zbb'](gq['zcf']());
                        break;
                    case wD:
                        var gA = new gF();
                        gA['zcA'](gQ),
                        lw['Z']['emit'](lg['x']['znp'], gA['zQC'](), gA['zQi'](), gA['zQB'](), gA['zQA'](), gA['zQk'](), gA['zQs']()),
                        gr['zCy']['zbb'](gA['zcf']());
                        break;
                    case wQ:
                        var gK = new g2();
                        gK['zcA'](gQ),
                        lw['Z']['emit'](lg['x']['ztL'], gK['zGS'](), gK['zGh']()),
                        gr['zCy']['zbb'](gK['zcf']());
                        break;
                    case wI:
                        var gW = new gP();
                        gW['zcA'](gQ),
                        lw['Z']['emit'](lg['x']['zcb'], gW['zGS'](), gW['zQS'](), gW['zGh']()),
                        gr['zCy']['zbb'](gW['zcf']());
                        break;
                    case wd:
                        var v0 = new gL();
                        v0['zcA'](gQ),
                        lw['Z']['emit'](lg['x']['zCm'], v0['zcO'](), v0['zcy'](), v0['zcP'](), v0['zQf']()),
                        gr['zCy']['zbb'](v0['zcf']());
                        break;
                    case wk:
                        var v1 = new g4();
                        v1['zcA'](gQ),
                        lw['Z']['emit'](lg['x']['ztH'], v1['zGS'](), v1['zGM']()),
                        gr['zCy']['zbb'](v1['zcf']());
                        break;
                    case wL:
                        var v2 = new gh();
                        v2['zcA'](gQ),
                        gr['zCy']['zbb'](v2['zcf']()),
                        gr['zlA']();
                        break;
                    case wH:
                        var v3 = new g6();
                        v3['zcA'](gQ),
                        lw['Z']['emit'](lg['x']['zvn'], v3['zQT'](), v3['zQL']()),
                        gr['zCy']['zbb'](v3['zcf']());
                        break;
                    case wS:
                        var v4 = new gV();
                        v4['zcA'](gQ),
                        lw['Z']['emit'](lg['x']['zyh'], v4['zGS'](), v4['zQY'](), v4['zQX'](), v4['zQx'](), v4['zQp'](), v4['zQL']()),
                        gr['zCy']['zbb'](v4['zcf']());
                        break;
                    case wb:
                        var v5 = new gS();
                        v5['zcA'](gQ),
                        lw['Z']['emit'](lg['x']['ztM'], v5['zQy']()),
                        gr['zCy']['zbb'](v5['zcf']());
                        break;
                    case wc:
                        var v6 = new gJ();
                        v6['zcA'](gQ),
                        lw['Z']['emit'](lg['x']['znQ'], v6['zQn'](), v6['zQr']()),
                        gr['zCy']['zbb'](v6['zcf']());
                        break;
                    case wh:
                        var v7 = new gY();
                        v7['zcA'](gQ),
                        lw['Z']['emit'](lg['x']['ztn'], v7['ztc'](), v7['ztG'](), v7['ztQ'](), v7['ztl'](), v7['zQc'](), v7['zQG']()),
                        gr['zCy']['zbb'](v7['zcf']());
                        break;
                    case wJ:
                        var v8 = new g3();
                        v8['zcA'](gQ),
                        lw['Z']['emit'](lg['x']['znI'], v8['zGh']()),
                        gr['zCy']['zbb'](v8['zcf']());
                        break;
                    case wV:
                        var v9 = new gc();
                        v9['zcA'](gQ),
                        lw['Z']['emit'](lg['x']['znx'], v9['zQU']()),
                        gr['zCy']['zbb'](v9['zcf']());
                        break;
                    case wY:
                        var vl = new gb();
                        vl['zcA'](gQ),
                        lw['Z']['emit'](lg['x']['znR'], vl['zQr']()),
                        gr['zCy']['zbb'](vl['zcf']());
                        break;
                    case wU:
                        var vC = new gU();
                        vC['zcA'](gQ),
                        lw['Z']['emit'](lg['x']['znZ'], vC['zQr']()),
                        gr['zCy']['zbb'](vC['zcf']());
                        break;
                    case wR:
                        var vw = new gf();
                        vw['zcA'](gQ),
                        lw['Z']['emit'](lg['x']['znq'], vw['zQr']()),
                        gr['zCy']['zbb'](vw['zcf']());
                        break;
                    case wf:
                        var vg = new go();
                        vg['zcA'](gQ),
                        lw['Z']['emit'](lg['x']['zyM'], vg['zQq'](), vg['zQw'](), vg['zQa']()),
                        gr['zCy']['zbb'](vg['zcf']());
                        break;
                    case wo:
                        var vv = new gu();
                        vv['zcA'](gQ),
                        lw['Z']['emit'](lg['x']['zyN'], vv['zGp'](), vv['zQq'](), vv['zQw'](), vv['zQa']()),
                        gr['zCy']['zbb'](vv['zcf']());
                        break;
                    case wu:
                        var vF = new gB();
                        vF['zcA'](gQ),
                        lw['Z']['emit'](lg['x']['znw'], vF['zlz'](), vF['zlH']()),
                        gr['zCy']['zbb'](vF['zcf']());
                        break;
                    case wx:
                        var vL = new gx();
                        vL['zcA'](gQ),
                        lw['Z']['emit'](lg['x']['znY'], vL['zlg']()),
                        gr['zCy']['zbb'](vL['zcf']());
                    }
                }
                ,
                this['zls'] = function(gD) {
                    gr['zBz'](),
                    lw['Z']['emit'](lg['x']['znR'], 'Connection\x20Failed!\x20Please\x20try\x20again!'),
                    w8['Z']['zlu']('An\x20unknown\x20error\x20has\x20occurred\x20during\x20the\x20connection');
                }
                ,
                this['zlv'] = function(gD) {
                    gr['zBz'](),
                    w8['Z']['zlu']('Disconnected\x20from\x20' + gr['zlb']() + ':' + gr['zlF']());
                }
                ,
                this['zlf'] = function() {
                    gr['zBz']();
                }
                ,
                this['zCy'] = gN,
                this['zGr'] = CM['Cp']['zTw'],
                this['zGD'] = CM['Zx']['zLL'],
                this['zlB'] = 0x0;
            }
            var gE = gm['prototype'];
            return gE['ziZ'] = function(gN, gr, gD, gQ, gd) {
                this['zGr'] = gN,
                this['zGD'] = gr,
                this['zlO'] = gD,
                this['zly'] = gQ,
                this['zlP'] = gd,
                this['zlU'] = new WebSocket((this['zlP'] ? 'wss' : 'ws') + '://' + this['zlO'] + ':' + this['zly']),
                this['zlU']['binaryType'] = 'arraybuffer',
                this['zlt'](),
                this['zln']();
            }
            ,
            gE['zln'] = function() {
                lw['Z']['on'](lg['x']['zfo'], this['zlr']),
                lw['Z']['on'](lg['x']['zco'], this['zlV']),
                lw['Z']['on'](lg['x']['zfL'], this['zlj']),
                lw['Z']['on'](lg['x']['zlc'], this['zlK']),
                lw['Z']['on'](lg['x']['zvl'], this['zsd']),
                lw['Z']['on'](lg['x']['zlG'], this['zlf']);
            }
            ,
            gE['zlQ'] = function() {
                lw['Z']['off'](lg['x']['zfo'], this['zlr']),
                lw['Z']['off'](lg['x']['zco'], this['zlV']),
                lw['Z']['off'](lg['x']['zfL'], this['zlj']),
                lw['Z']['off'](lg['x']['zlc'], this['zlK']),
                lw['Z']['off'](lg['x']['zvl'], this['zsd']),
                lw['Z']['off'](lg['x']['zlG'], this['zlf']);
            }
            ,
            gE['zlt'] = function() {
                void 0x0 !== this['zlU'] && (this['zlU']['addEventListener']('open', this['zlo']),
                this['zlU']['addEventListener']('message', this['zlk']),
                this['zlU']['addEventListener']('error', this['zls']),
                this['zlU']['addEventListener']('close', this['zlv']));
            }
            ,
            gE['zll'] = function() {
                void 0x0 !== this['zlU'] && (this['zlU']['removeEventListener']('open', this['zlo']),
                this['zlU']['removeEventListener']('message', this['zlk']),
                this['zlU']['removeEventListener']('error', this['zls']),
                this['zlU']['removeEventListener']('close', this['zlv']));
            }
            ,
            gE['zlD'] = function(gN) {
                this['zli']() && (this['zlU']['send'](gN['zcc']()),
                this['zCy']['zbu'](gN['zcf']()));
            }
            ,
            gE['zlm'] = function(gN) {
                this['zli']() && this['zlU']['send'](gN);
            }
            ,
            gE['zBz'] = function() {
                this['zli']() && this['zlU']['close'](),
                this['zlQ'](),
                this['zll'](),
                this['zlU'] = void 0x0,
                this['zlO'] = void 0x0,
                this['zly'] = void 0x0,
                (0x0,
                lL['Zp'])() !== Cu['Q']['zTM'] && ((0x0,
                lL['bl'])(Cu['Q']['zTM']),
                lw['Z']['emit'](lg['x']['zvc']));
            }
            ,
            gE['zlb'] = function() {
                return void 0x0 === this['zlO'] ? 'unavailable' : this['zlO'];
            }
            ,
            gE['zlF'] = function() {
                return void 0x0 === this['zly'] ? -0x1 : this['zly'];
            }
            ,
            gE['zli'] = function() {
                return void 0x0 !== this['zlU'] && 0x1 == this['zlU']['readyState'];
            }
            ,
            gm;
        }())
          , gX = l2(0x4022)
          , gM = (function() {
            var gm = (0x0,
            l4['Z'])(l6()['mark'](function gE() {
                var gN, gr;
                return l6()['wrap'](function(gD) {
                    for (; ; )
                        switch (gD['prev'] = gD['next']) {
                        case 0x0:
                            return l7['CtF']['enabled'] = !0x0,
                            (function() {
                                var gQ = l7['Tme']['prototype']['updateMatrixWorld'];
                                l7['Tme']['prototype']['updateMatrixWorld'] = function() {
                                    this['visible'] && gQ['apply'](this);
                                }
                                ;
                            }()),
                            gD['next'] = 0x4,
                            w7();
                        case 0x4:
                            gN = gD['sent'],
                            gr = new gz(gN['zns']()),
                            lw['Z']['on'](lg['x']['zlI'], function(gQ, gd, gk, gn, gj) {
                                gX['t']['disconnect'](),
                                gr['ziZ'](gQ, gd, gk, gn, gj),
                                window['onbeforeunload'] = function() {
                                    return '';
                                }
                                ;
                            }),
                            lw['Z']['on'](lg['x']['zlX'], function(gQ, gd, gk) {
                                gr['zBz'](),
                                gN['zuK']();
                            }),
                            lS['h']['dispatch']((0x0,
                            lG['Mv'])(!0x0)),
                            lH['GameAnalytics']['initialize']('ce59fd34c83d32fb060ce384b958dda7', 'a8c29fcf417eba74851b4660a361731aba521da8');
                        case 0xa:
                        case 'end':
                            return gD['stop']();
                        }
                }, gE);
            }));
            return function() {
                return gm['apply'](this, arguments);
            }
            ;
        }())
          , ga = gM;
    }
}]);
