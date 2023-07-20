//554eaebd9cc1bbc2b553.js
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
(self['webpackChunkclient'] = self['webpackChunkclient'] || [])['push']([[0x3e0], {
    0x1b50: function(z0, z1, z2) {
        z2['r'](z1),
        z2['d'](z1, {
            'default': function() {
                return gk;
            }
        });
        var z3, z4 = z2(0x3df5), z5 = z2(0x156cd), z6 = z2['n'](z5), z7 = z2(0x8a4), z8 = z2(0x514d), z9 = z2(0x1730e), zz = (function() {
            function gD(gn, gN) {
                var gX = this;
                this['xt'] = gn,
                this['vt'] = gN,
                this['zt'] = document['getElementById'](this['vt']),
                this['Pt'] = 0x1,
                this['Qt'] = z8['Z']['lr'],
                this['ss'] = z8['Z']['_r'],
                this['hs'] = new z7['cPb'](this['xt']['xs'],window['innerWidth'] / window['innerHeight'],0.01,0x3e8),
                this['os'] = new z7['cPb'](this['xt']['us'],window['innerWidth'] / window['innerHeight'],0.01,0x3e8),
                this['As'] = new z7['cPb'](0x3c,window['innerWidth'] / window['innerHeight'],0.01,0x3e8),
                this['fs'] = new z7['iKG'](-window['innerWidth'] / 0x2,window['innerWidth'] / 0x2,window['innerHeight'] / 0x2,-window['innerHeight'] / 0x2,0.01,0x3e8),
                this['cs'] = z8['Z']['oo'],
                this['vs'](),
                this['ls'](),
                window['addEventListener']('resize', function(gB) {
                    gX['ls']();
                });
            }
            var gY = gD['prototype'];
            return gY['vs'] = function() {
                this['ys'] && this['ys']['dispose'](),
                this['Gs'] && this['Gs']['dispose'](),
                this['ds'] && this['ds']['dispose'](),
                this['ws'] && this['ws']['dispose'](),
                this['ys'] = new z7['xsS'](),
                this['Gs'] = new z7['xsS'](),
                this['ds'] = new z7['xsS'](),
                this['ws'] = new z7['xsS'](),
                this['ds']['add'](this['fs']),
                this['ps'] && this['ps']['dispose'](),
                this['ps'] = new z7['CP7']({
                    'canvas': this['zt'],
                    'antialias': !0x1,
                    'powerPreference': 'high-performance'
                }),
                this['ps']['setClearColor'](this['cs']),
                this['ps']['debug']['checkShaderErrors'] = !0x1,
                this['ps']['setPixelRatio'](window['devicePixelRatio'] * this['xt']['zs']),
                this['ps']['setSize'](window['innerWidth'], window['innerHeight']),
                this['ps']['autoClear'] = !0x1,
                this['ps']['gammaFactor'] = 2.2,
                this['ps']['outputEncoding'] = z7['knz'],
                this['ps']['info']['autoReset'] = !0x1,
                this['ps']['initTexture'](z9['Z']['gs']()),
                this['ps']['initTexture'](z9['Z']['$s']());
            }
            ,
            gY['bs'] = function(gn, gN) {
                this['ps']['info']['reset'](),
                this['ps']['clear'](),
                this['ps']['render'](this['ys'], this['hs']),
                this['ps']['clearDepth'](),
                this['ps']['render'](this['Gs'], this['os']),
                this['ps']['clearDepth'](),
                this['ps']['render'](this['ws'], this['As']),
                (window.removeMinimap ? 0 : this['ps']['render'](this['ds'], this['fs']))
            }
            ,
            gY['ls'] = function() {
                var gn = window['innerWidth']
                  , gN = window['innerHeight'];
                this['Pt'] = Math['max'](gn / this['Qt'], gN / this['ss']),
                this['ps']['setSize'](gn, gN),
                this['hs']['aspect'] = gn / gN,
                this['hs']['updateProjectionMatrix'](),
                this['os']['aspect'] = gn / gN,
                this['os']['updateProjectionMatrix'](),
                this['As']['aspect'] = gn / gN,
                this['As']['updateProjectionMatrix'](),
                this['fs']['top'] = gN / 0x2,
                this['fs']['bottom'] = -gN / 0x2,
                this['fs']['left'] = -gn / 0x2,
                this['fs']['right'] = gn / 0x2,
                this['fs']['updateProjectionMatrix']();
            }
            ,
            gY['ks'] = function(gn) {
                this['cs'] !== gn && (this['cs'] = gn,
                this['ps']['setClearColor'](this['cs']));
            }
            ,
            gY['Rs'] = function() {
                return this['Pt'];
            }
            ,
            gY['Ss'] = function() {
                return this['ys'];
            }
            ,
            gY['Ms'] = function() {
                return this['Gs'];
            }
            ,
            gY['Ds'] = function() {
                return this['ds'];
            }
            ,
            gY['Cs'] = function() {
                return this['ws'];
            }
            ,
            gY['Js'] = function() {
                return this['hs'];
            }
            ,
            gY['js'] = function() {
                return this['os'];
            }
            ,
            gY['Ps'] = function() {
                return this['ps'];
            }
            ,
            gY['Us'] = function() {
                return this['zt'];
            }
            ,
            gD;
        }()), zA = z2(0x1161f), zG = z2(0x1330d), ze = z2(0xf70a), zg = z2(0x3978), zP = z2(0x5f18), zj = z2(0x15316), zo = z2(0x2fda), zI = z2(0xe33e), zJ = (function() {
            function gD() {
                var gn = this;
                this['Ns'] = 0x0,
                this['Xs'] = 0x0,
                this['Vs'] = 0x0,
                this['Ts'] = 0x0,
                this['Is'] = 0x0,
                this['Fs'] = (0x0,
                zg['XX'])(0x0, 0x0, 0x0),
                this['Bs'] = (0x0,
                zg['XX'])(0x0, 0x0, 0x0),
                this['Os'] = (0x0,
                zg['XX'])(0x0, 0x0, 0x0),
                this['qs'] = (0x0,
                zg['XX'])(0x0, 0x0, 0x0),
                this['Ls'] = 0x0,
                this['Ys'] = 0x0,
                this['Es'] = 0x0,
                this['Hs'] = 0x0,
                this['Qs'] = 0x0,
                this['_s'] = 0x0,
                this['Ws'] = 0x28,
                this['Zs'] = 0xf423f,
                this['Ks'] = -0xf423f,
                this['th'] = 0x0,
                this['ih'] = 0x0,
                this['sh'] = 0x0,
                this['hh'] = 0xf423f,
                this['nh'] = Date['now'](),
                this['eh'] = 0x0,
                this['rh'] = document['body']['appendChild'](document['createElement']('div')),
                this['rh']['style']['cssText'] = 'width:\x20550px;\x20position:\x20absolute;\x20top:\x200;\x20left:\x200;\x20padding:\x2010px;\x20pointer-events:\x20none;\x20background-color:\x20rgba(0,\x200,\x200,\x200.8);',
                this['xh'] = !0x1,
                this['oh'](),
                zA['Z']['on'](zG['x']['ah'], function(gN) {
                    (0x0,
                    zP['bt'])() || gN === ze['Z'][0x0] && gn['uh']();
                });
            }
            var gY = gD['prototype'];
            return gY['fh'] = function() {
                return this['xh'];
            }
            ,
            gY['uh'] = function() {
                this['xh'] = !this['xh'],
                this['xh'] ? this['lh']() : this['oh']();
            }
            ,
            gY['lh'] = function() {
                this['rh']['style']['display'] = 'block',
                this['xh'] = !0x0;
            }
            ,
            gY['oh'] = function() {
                this['rh']['style']['display'] = 'none',
                this['xh'] = !0x1;
            }
            ,
            gY['yh'] = function() {
                ++this['eh'];
                var gn = Date['now']();
                if (gn - this['nh'] >= 0x3e8) {
                    if (this['Is'] = 0x3e8 * this['eh'] / (gn - this['nh']),
                    this['Vs'] = 0x3e8 * this['Ns'] / (gn - this['nh']),
                    this['Ts'] = 0x3e8 * this['Xs'] / (gn - this['nh']),
                    this['eh'] = 0x0,
                    this['Ns'] = 0x0,
                    this['Xs'] = 0x0,
                    this['nh'] = gn,
                    document['hasFocus']() && zo['h']['getState']()['game']['c$'] >= 0x1) {
                        if (++this['ih'],
                        this['sh'] += this['Is'],
                        this['hh'] = Math['min'](this['hh'], this['Is']),
                        this['ih'] >= 0x14) {
                            var gN = this['sh'] / this['ih'];
                            zj['GameAnalytics']['addDesignEvent']('GA:AverageFPS:All', gN),
                            zj['GameAnalytics']['addDesignEvent']('GA:AverageFPS:Max60', Math['min'](gN, 0x3c)),
                            gN <= 59.5 && zj['GameAnalytics']['addDesignEvent']('GA:AverageFPS:Exclude60', gN),
                            this['hh'] <= 0x1e && zj['GameAnalytics']['addDesignEvent']('GA:CriticalFPS', this['hh']),
                            this['ih'] = 0x0,
                            this['sh'] = 0x0,
                            this['hh'] = 0xf423f;
                        }
                    } else
                        this['ih'] = 0x0,
                        this['sh'] = 0x0,
                        this['hh'] = 0xf423f;
                }
                this['xh'] && (this['rh']['innerText'] = this['Gh']());
            }
            ,
            gY['dh'] = function(gn) {
                this['Ns'] += gn;
            }
            ,
            gY['wh'] = function(gn) {
                this['Xs'] += gn;
            }
            ,
            gY['Gh'] = function() {
                return 'FPS:\x20' + this['Is'] + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Player\x20Position:\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20x:\x20' + this['Fs']['x'] + '\x20y:\x20' + this['Fs']['y'] + '\x20z:\x20' + this['Fs']['z'] + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Player\x20Block\x20Position:\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20x:\x20' + this['Bs']['x'] + '\x20y:\x20' + this['Bs']['y'] + '\x20z:\x20' + this['Bs']['z'] + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Player\x20Chunk\x20Position:\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20x:\x20' + this['Os']['x'] + '\x20y:\x20' + this['Os']['y'] + '\x20z:\x20' + this['Os']['z'] + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Player\x20Velocity:\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20x:\x20' + this['qs']['x'] + '\x20y:\x20' + this['qs']['y'] + '\x20z:\x20' + this['qs']['z'] + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Player\x20Yaw:\x20' + this['Ls'] + '\x20Player\x20Pitch:\x20' + this['Ys'] + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Total\x20Chunks\x20Loaded:\x20' + this['Es'] + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Latency:\x20' + this['Hs'] + 'ms\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Download:\x20' + this['Ts']['toFixed'](0x2) + 'bps\x20Upload:\x20' + this['Vs']['toFixed'](0x2) + 'bps';
            }
            ,
            gY['ph'] = function() {
                return this['Hs'];
            }
            ,
            gY['mh'] = function() {
                return this['Ws'];
            }
            ,
            gY['gh'] = function(gn) {
                if (this['Hs'] = gn,
                this['Zs'] = Math['min'](this['Zs'], gn),
                this['Ks'] = Math['max'](this['Ks'], gn),
                ++this['th'],
                this['th'] >= 0x4) {
                    var gN = this['Ks'] - this['Zs'];
                    this['Ws'] = (0x0,
                    zI['t7'])(this['Ws'], gN, 0.5),
                    this['Zs'] = 0xf423f,
                    this['Ks'] = -0xf423f,
                    this['th'] = 0x0;
                }
                if (document['hasFocus']() && zo['h']['getState']()['game']['c$'] >= 0x1 && (++this['Qs'],
                this['_s'] += gn,
                this['Qs'] >= 0x50)) {
                    var gX = this['_s'] / this['Qs'];
                    zj['GameAnalytics']['addDesignEvent']('GA:AveragePing:All', gX),
                    this['Qs'] = 0x0,
                    this['_s'] = 0x0;
                }
            }
            ,
            gD;
        }()), zy = z2(0x4ffd), zR = z2['n'](zy);
        function zS() {
            return zR()('!(function(){\x27use\x20strict\x27;var\x20z0,z1,z2=function(AJ,Ay,AR){return{\x27x\x27:AJ,\x27y\x27:Ay,\x27z\x27:AR};},z3=(\x27undefined\x27==typeof\x20navigator||void\x200x0===navigator[\x27hardwareConcurrency\x27]||navigator[\x27hardwareConcurrency\x27],0x20),z4=0.5,z5=(z2(0.35,1.3,0.35),z2(0.3,1.3,0.3),0x0),z6=0x1,z7=0x2,z8=0x3,z9=0x4,zz=0x5,zA=0x6,zG=0x7,ze=0x8,zg=0x9,zP=0xa,zj=0xb,zo=0xc,zI=0xd,zJ=0xe,zy=0xf,zR=0x10,zS=0x11,zQ=0x12,zi=0x13,zL=0x14,zU=0x15,zb=0x16,zf=0x17,zh=0x18,zx=0x19,zF=0x1a,zV=0x1b,zk=0x1c,zD=0x1d,zY=0x1e,zn=0x1f,zN=0x20,zX=0x21,zB=0x22,zr=0x23,zl=0x24,zd=0x25,zC=0x26,zO=0x27,zp=0x28,zW=0x29,zq=0x2a,zt=0x2b,zc=0x2c,zu=0x2d,zs=0x2e,zT=0x2f,zw=0x30,zE=0x31,zm=0x32,za=0x33,zZ=0x0,zK=0x1,zH=0x2,zM=0x3,zv=0x4,A0=0x5,A1=0x9,A2={\x27$\x27:!0x1,\x27t\x27:!0x1,\x27o\x27:{\x27i\x27:{\x27x\x27:0x0,\x27y\x27:0xf},\x27u\x27:{\x27x\x27:0x0,\x27y\x27:0xf},\x27m\x27:{\x27x\x27:0x0,\x27y\x27:0xf},\x27p\x27:{\x27x\x27:0x0,\x27y\x27:0xf},\x27l\x27:{\x27x\x27:0x0,\x27y\x27:0xf},\x27h\x27:{\x27x\x27:0x0,\x27y\x27:0xf}},\x27k\x27:\x27Water\x27,\x27S\x27:\x27Blue\x5cx20fluid\x5cx20that\x5cx20flows\x27,\x27v\x27:0x1,\x27g\x27:0xff},A3=((z0={})[z5]={\x27$\x27:!0x1,\x27t\x27:!0x1,\x27o\x27:{\x27i\x27:{\x27x\x27:0x0,\x27y\x27:0x0},\x27u\x27:{\x27x\x27:0x0,\x27y\x27:0x0},\x27m\x27:{\x27x\x27:0x0,\x27y\x27:0x0},\x27p\x27:{\x27x\x27:0x0,\x27y\x27:0x0},\x27l\x27:{\x27x\x27:0x0,\x27y\x27:0x0},\x27h\x27:{\x27x\x27:0x0,\x27y\x27:0x0}},\x27k\x27:\x27Air\x27,\x27S\x27:\x27How\x5cx20did\x5cx20you\x5cx20get\x5cx20this?\x27,\x27v\x27:0x1,\x27g\x27:0xff},z0[z6]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x2,\x27y\x27:0x0},\x27u\x27:{\x27x\x27:0x0,\x27y\x27:0x0},\x27m\x27:{\x27x\x27:0x1,\x27y\x27:0x0},\x27p\x27:{\x27x\x27:0x1,\x27y\x27:0x0},\x27l\x27:{\x27x\x27:0x1,\x27y\x27:0x0},\x27h\x27:{\x27x\x27:0x1,\x27y\x27:0x0}},\x27k\x27:\x27Grass\x27,\x27S\x27:\x27A\x5cx20dirt\x5cx20block\x5cx20with\x5cx20grass\x5cx20on\x5cx20top\x27,\x27v\x27:0x1,\x27g\x27:0xff,\x27q\x27:zZ},z0[z7]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x0,\x27y\x27:0x0},\x27u\x27:{\x27x\x27:0x0,\x27y\x27:0x0},\x27m\x27:{\x27x\x27:0x0,\x27y\x27:0x0},\x27p\x27:{\x27x\x27:0x0,\x27y\x27:0x0},\x27l\x27:{\x27x\x27:0x0,\x27y\x27:0x0},\x27h\x27:{\x27x\x27:0x0,\x27y\x27:0x0}},\x27k\x27:\x27Dirt\x27,\x27S\x27:\x27Muddy\x5cx20and\x5cx20squishy\x27,\x27v\x27:0x1,\x27g\x27:0xff,\x27q\x27:zv},z0[z8]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x3,\x27y\x27:0x0},\x27u\x27:{\x27x\x27:0x3,\x27y\x27:0x0},\x27m\x27:{\x27x\x27:0x3,\x27y\x27:0x0},\x27p\x27:{\x27x\x27:0x3,\x27y\x27:0x0},\x27l\x27:{\x27x\x27:0x3,\x27y\x27:0x0},\x27h\x27:{\x27x\x27:0x3,\x27y\x27:0x0}},\x27k\x27:\x27Sand\x27,\x27S\x27:\x27Grainy,\x5cx20found\x5cx20near\x5cx20water\x27,\x27v\x27:0x1,\x27g\x27:0xff,\x27q\x27:zK},z0[z9]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x1,\x27y\x27:0x1},\x27u\x27:{\x27x\x27:0x1,\x27y\x27:0x1},\x27m\x27:{\x27x\x27:0x1,\x27y\x27:0x1},\x27p\x27:{\x27x\x27:0x1,\x27y\x27:0x1},\x27l\x27:{\x27x\x27:0x1,\x27y\x27:0x1},\x27h\x27:{\x27x\x27:0x1,\x27y\x27:0x1}},\x27k\x27:\x27Rock\x27,\x27S\x27:\x27A\x5cx20natural\x5cx20resource\x5cx20found\x5cx20underground\x27,\x27v\x27:0x2,\x27g\x27:0xff,\x27q\x27:zH},z0[zz]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x5,\x27y\x27:0x0},\x27u\x27:{\x27x\x27:0x5,\x27y\x27:0x0},\x27m\x27:{\x27x\x27:0x4,\x27y\x27:0x0},\x27p\x27:{\x27x\x27:0x4,\x27y\x27:0x0},\x27l\x27:{\x27x\x27:0x4,\x27y\x27:0x0},\x27h\x27:{\x27x\x27:0x4,\x27y\x27:0x0}},\x27k\x27:\x27Log\x27,\x27S\x27:\x27Unprocessed\x5cx20raw\x5cx20wood\x27,\x27v\x27:1.5,\x27g\x27:0xff,\x27q\x27:A1},z0[zA]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x0,\x27y\x27:0x1},\x27u\x27:{\x27x\x27:0x0,\x27y\x27:0x1},\x27m\x27:{\x27x\x27:0x0,\x27y\x27:0x1},\x27p\x27:{\x27x\x27:0x0,\x27y\x27:0x1},\x27l\x27:{\x27x\x27:0x0,\x27y\x27:0x1},\x27h\x27:{\x27x\x27:0x0,\x27y\x27:0x1}},\x27k\x27:\x27Leaves\x27,\x27S\x27:\x27Grow\x5cx20on\x5cx20logs\x27,\x27v\x27:0.5,\x27g\x27:0xff,\x27q\x27:A0},z0[zG]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x3,\x27y\x27:0x6},\x27u\x27:{\x27x\x27:0x3,\x27y\x27:0x6},\x27m\x27:{\x27x\x27:0x3,\x27y\x27:0x6},\x27p\x27:{\x27x\x27:0x3,\x27y\x27:0x6},\x27l\x27:{\x27x\x27:0x3,\x27y\x27:0x6},\x27h\x27:{\x27x\x27:0x3,\x27y\x27:0x6}},\x27k\x27:\x27Leaves\x27,\x27S\x27:\x27Nurtures\x5cx20healthy\x5cx20red\x5cx20berries\x27,\x27v\x27:0.5,\x27g\x27:0xff,\x27q\x27:A0},z0[ze]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x4,\x27y\x27:0x6},\x27u\x27:{\x27x\x27:0x4,\x27y\x27:0x6},\x27m\x27:{\x27x\x27:0x4,\x27y\x27:0x6},\x27p\x27:{\x27x\x27:0x4,\x27y\x27:0x6},\x27l\x27:{\x27x\x27:0x4,\x27y\x27:0x6},\x27h\x27:{\x27x\x27:0x4,\x27y\x27:0x6}},\x27k\x27:\x27Leaves\x27,\x27S\x27:\x27Nurtures\x5cx20healthy\x5cx20orange\x5cx20berries\x27,\x27v\x27:0.5,\x27g\x27:0xff,\x27q\x27:A0},z0[zg]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x2,\x27y\x27:0x1},\x27u\x27:{\x27x\x27:0x2,\x27y\x27:0x1},\x27m\x27:{\x27x\x27:0x2,\x27y\x27:0x1},\x27p\x27:{\x27x\x27:0x2,\x27y\x27:0x1},\x27l\x27:{\x27x\x27:0x2,\x27y\x27:0x1},\x27h\x27:{\x27x\x27:0x2,\x27y\x27:0x1}},\x27k\x27:\x27Bedrock\x27,\x27S\x27:\x27Indestructable\x27,\x27v\x27:0xf423f,\x27g\x27:0xff,\x27q\x27:zH},z0[zP]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x3,\x27y\x27:0x1},\x27u\x27:{\x27x\x27:0x3,\x27y\x27:0x1},\x27m\x27:{\x27x\x27:0x3,\x27y\x27:0x1},\x27p\x27:{\x27x\x27:0x3,\x27y\x27:0x1},\x27l\x27:{\x27x\x27:0x3,\x27y\x27:0x1},\x27h\x27:{\x27x\x27:0x3,\x27y\x27:0x1}},\x27k\x27:\x27Temple\x5cx20Brick\x27,\x27S\x27:\x27Myterious\x5cx20brick\x5cx20found\x5cx20on\x5cx20the\x5cx20temple\x5cx20walls\x27,\x27v\x27:0x4,\x27g\x27:0xff,\x27q\x27:zM},z0[zj]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x5,\x27y\x27:0x1},\x27u\x27:{\x27x\x27:0x5,\x27y\x27:0x1},\x27m\x27:{\x27x\x27:0x5,\x27y\x27:0x1},\x27p\x27:{\x27x\x27:0x5,\x27y\x27:0x1},\x27l\x27:{\x27x\x27:0x5,\x27y\x27:0x1},\x27h\x27:{\x27x\x27:0x5,\x27y\x27:0x1}},\x27k\x27:\x27Mossy\x5cx20Temple\x5cx20Brick\x27,\x27S\x27:\x27Temple\x5cx20brick\x5cx20with\x5cx20some\x5cx20moss\x5cx20grown\x5cx20on\x5cx20it\x27,\x27v\x27:0x4,\x27g\x27:0xff,\x27q\x27:zM},z0[zo]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x0,\x27y\x27:0x2},\x27u\x27:{\x27x\x27:0x0,\x27y\x27:0x2},\x27m\x27:{\x27x\x27:0x0,\x27y\x27:0x2},\x27p\x27:{\x27x\x27:0x0,\x27y\x27:0x2},\x27l\x27:{\x27x\x27:0x0,\x27y\x27:0x2},\x27h\x27:{\x27x\x27:0x0,\x27y\x27:0x2}},\x27k\x27:\x27Cracked\x5cx20Temple\x5cx20Brick\x27,\x27S\x27:\x27Temple\x5cx20brick\x5cx20with\x5cx20some\x5cx20cracks\x27,\x27v\x27:0x4,\x27g\x27:0xff,\x27q\x27:zM},z0[zI]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x1,\x27y\x27:0x2},\x27u\x27:{\x27x\x27:0x1,\x27y\x27:0x2},\x27m\x27:{\x27x\x27:0x1,\x27y\x27:0x2},\x27p\x27:{\x27x\x27:0x1,\x27y\x27:0x2},\x27l\x27:{\x27x\x27:0x1,\x27y\x27:0x2},\x27h\x27:{\x27x\x27:0x1,\x27y\x27:0x2}},\x27k\x27:\x27Mystical\x5cx20Temple\x5cx20Brick\x27,\x27S\x27:\x27Temple\x5cx20brick\x5cx20with\x5cx20a\x5cx20mysterious\x5cx20pattern.\x5cx20No\x5cx20one\x5cx20knows\x5cx20what\x5cx20it\x5cx20means\x27,\x27v\x27:0x4,\x27g\x27:0xff,\x27q\x27:zM},z0[zJ]=A2,z0[zc]=A2,z0[zu]=A2,z0[zs]=A2,z0[zT]=A2,z0[zw]=A2,z0[zE]=A2,z0[zm]=A2,z0[za]=A2,z0[zy]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x2,\x27y\x27:0x2},\x27u\x27:{\x27x\x27:0x2,\x27y\x27:0x2},\x27m\x27:{\x27x\x27:0x2,\x27y\x27:0x2},\x27p\x27:{\x27x\x27:0x2,\x27y\x27:0x2},\x27l\x27:{\x27x\x27:0x2,\x27y\x27:0x2},\x27h\x27:{\x27x\x27:0x2,\x27y\x27:0x2}},\x27k\x27:\x27Wooden\x5cx20Crate\x27,\x27S\x27:\x27You\x5cx20might\x5cx20find\x5cx20some\x5cx20items\x5cx20inside\x27,\x27v\x27:0.5,\x27g\x27:0xff,\x27q\x27:A1},z0[zR]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x3,\x27y\x27:0x2},\x27u\x27:{\x27x\x27:0x3,\x27y\x27:0x2},\x27m\x27:{\x27x\x27:0x3,\x27y\x27:0x2},\x27p\x27:{\x27x\x27:0x3,\x27y\x27:0x2},\x27l\x27:{\x27x\x27:0x3,\x27y\x27:0x2},\x27h\x27:{\x27x\x27:0x3,\x27y\x27:0x2}},\x27k\x27:\x27Reinforced\x5cx20Iron\x27,\x27S\x27:\x27Very\x5cx20durable\x5cx20material.\x5cx20Perfect\x5cx20for\x5cx20defense\x27,\x27v\x27:0x6,\x27g\x27:0xff,\x27q\x27:zM},z0[zS]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x4,\x27y\x27:0x2},\x27u\x27:{\x27x\x27:0x4,\x27y\x27:0x2},\x27m\x27:{\x27x\x27:0x4,\x27y\x27:0x2},\x27p\x27:{\x27x\x27:0x4,\x27y\x27:0x2},\x27l\x27:{\x27x\x27:0x4,\x27y\x27:0x2},\x27h\x27:{\x27x\x27:0x4,\x27y\x27:0x2}},\x27k\x27:\x27Emerald\x5cx20Ore\x27,\x27S\x27:\x27Stone\x5cx20filled\x5cx20with\x5cx20some\x5cx20emerald\x5cx20ore\x27,\x27v\x27:2.1,\x27g\x27:0xff,\x27q\x27:zH},z0[zi]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x5,\x27y\x27:0x2},\x27u\x27:{\x27x\x27:0x5,\x27y\x27:0x2},\x27m\x27:{\x27x\x27:0x5,\x27y\x27:0x2},\x27p\x27:{\x27x\x27:0x5,\x27y\x27:0x2},\x27l\x27:{\x27x\x27:0x5,\x27y\x27:0x2},\x27h\x27:{\x27x\x27:0x5,\x27y\x27:0x2}},\x27k\x27:\x27Sapphire\x5cx20Ore\x27,\x27S\x27:\x27Stone\x5cx20filled\x5cx20with\x5cx20some\x5cx20sapphire\x5cx20ore\x27,\x27v\x27:2.1,\x27g\x27:0xff,\x27q\x27:zH},z0[zQ]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x0,\x27y\x27:0x3},\x27u\x27:{\x27x\x27:0x0,\x27y\x27:0x3},\x27m\x27:{\x27x\x27:0x0,\x27y\x27:0x3},\x27p\x27:{\x27x\x27:0x0,\x27y\x27:0x3},\x27l\x27:{\x27x\x27:0x0,\x27y\x27:0x3},\x27h\x27:{\x27x\x27:0x0,\x27y\x27:0x3}},\x27k\x27:\x27Ruby\x5cx20Ore\x27,\x27S\x27:\x27Stone\x5cx20filled\x5cx20with\x5cx20some\x5cx20ruby\x5cx20ore\x27,\x27v\x27:2.1,\x27g\x27:0xff,\x27q\x27:zH},z0[zL]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x1,\x27y\x27:0x3},\x27u\x27:{\x27x\x27:0x1,\x27y\x27:0x3},\x27m\x27:{\x27x\x27:0x1,\x27y\x27:0x3},\x27p\x27:{\x27x\x27:0x1,\x27y\x27:0x3},\x27l\x27:{\x27x\x27:0x1,\x27y\x27:0x3},\x27h\x27:{\x27x\x27:0x1,\x27y\x27:0x3}},\x27k\x27:\x27Iron\x5cx20Ore\x27,\x27S\x27:\x27Stone\x5cx20filled\x5cx20with\x5cx20some\x5cx20iron\x5cx20ore\x27,\x27v\x27:2.1,\x27g\x27:0xff,\x27q\x27:zH},z0[zU]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x7,\x27y\x27:0x0},\x27u\x27:{\x27x\x27:0x7,\x27y\x27:0x0},\x27m\x27:{\x27x\x27:0x7,\x27y\x27:0x0},\x27p\x27:{\x27x\x27:0x7,\x27y\x27:0x0},\x27l\x27:{\x27x\x27:0x7,\x27y\x27:0x0},\x27h\x27:{\x27x\x27:0x7,\x27y\x27:0x0}},\x27k\x27:\x27Wood\x27,\x27S\x27:\x27Useful\x5cx20building\x5cx20material\x5cx20crafted\x5cx20from\x5cx20logs\x27,\x27v\x27:1.5,\x27g\x27:0xff,\x27q\x27:A1},z0[zb]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x6,\x27y\x27:0x0},\x27u\x27:{\x27x\x27:0x6,\x27y\x27:0x0},\x27m\x27:{\x27x\x27:0x6,\x27y\x27:0x0},\x27p\x27:{\x27x\x27:0x6,\x27y\x27:0x0},\x27l\x27:{\x27x\x27:0x6,\x27y\x27:0x0},\x27h\x27:{\x27x\x27:0x6,\x27y\x27:0x0}},\x27k\x27:\x27Stone\x5cx20Brick\x27,\x27S\x27:\x27Useful\x5cx20building\x5cx20material\x5cx20crafted\x5cx20from\x5cx20rocks\x27,\x27v\x27:0x4,\x27g\x27:0xff,\x27q\x27:zM},z0[zf]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x0,\x27y\x27:0x4},\x27u\x27:{\x27x\x27:0x0,\x27y\x27:0x4},\x27m\x27:{\x27x\x27:0x1,\x27y\x27:0x4},\x27p\x27:{\x27x\x27:0x1,\x27y\x27:0x4},\x27l\x27:{\x27x\x27:0x2,\x27y\x27:0x4},\x27h\x27:{\x27x\x27:0x1,\x27y\x27:0x4}},\x27k\x27:\x27Wooden\x5cx20Chest\x27,\x27S\x27:\x27Low\x5cx20tier\x5cx20chest\x5cx20that\x5cx20can\x5cx20store\x5cx20some\x5cx20items\x27,\x27v\x27:0.5,\x27g\x27:0xff,\x27q\x27:A1},z0[zh]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x0,\x27y\x27:0x5},\x27u\x27:{\x27x\x27:0x0,\x27y\x27:0x5},\x27m\x27:{\x27x\x27:0x1,\x27y\x27:0x5},\x27p\x27:{\x27x\x27:0x1,\x27y\x27:0x5},\x27l\x27:{\x27x\x27:0x2,\x27y\x27:0x5},\x27h\x27:{\x27x\x27:0x1,\x27y\x27:0x5}},\x27k\x27:\x27Iron\x5cx20Chest\x27,\x27S\x27:\x27Mid-tier\x5cx20chest\x5cx20that\x5cx20can\x5cx20store\x5cx20more\x5cx20items\x27,\x27v\x27:0.5,\x27g\x27:0xff,\x27q\x27:A1},z0[zx]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x0,\x27y\x27:0x6},\x27u\x27:{\x27x\x27:0x0,\x27y\x27:0x6},\x27m\x27:{\x27x\x27:0x1,\x27y\x27:0x6},\x27p\x27:{\x27x\x27:0x1,\x27y\x27:0x6},\x27l\x27:{\x27x\x27:0x2,\x27y\x27:0x6},\x27h\x27:{\x27x\x27:0x1,\x27y\x27:0x6}},\x27k\x27:\x27Golden\x5cx20Chest\x27,\x27S\x27:\x27High\x5cx20tier\x5cx20chest\x5cx20that\x5cx20can\x5cx20store\x5cx20many\x5cx20items\x27,\x27v\x27:0.5,\x27g\x27:0xff,\x27q\x27:A1},z0[zF]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x4,\x27y\x27:0x3},\x27u\x27:{\x27x\x27:0x4,\x27y\x27:0x3},\x27m\x27:{\x27x\x27:0x3,\x27y\x27:0x3},\x27p\x27:{\x27x\x27:0x3,\x27y\x27:0x3},\x27l\x27:{\x27x\x27:0x4,\x27y\x27:0x3},\x27h\x27:{\x27x\x27:0x4,\x27y\x27:0x3}},\x27k\x27:\x27Cactus\x27,\x27S\x27:\x27A\x5cx20plant\x5cx20that\x5cx20grows\x5cx20in\x5cx20the\x5cx20desert\x27,\x27v\x27:0x1,\x27g\x27:0xff,\x27q\x27:zZ},z0[zV]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x3,\x27y\x27:0x3},\x27u\x27:{\x27x\x27:0x3,\x27y\x27:0x3},\x27m\x27:{\x27x\x27:0x2,\x27y\x27:0x3},\x27p\x27:{\x27x\x27:0x2,\x27y\x27:0x3},\x27l\x27:{\x27x\x27:0x2,\x27y\x27:0x3},\x27h\x27:{\x27x\x27:0x2,\x27y\x27:0x3}},\x27k\x27:\x27Cactus\x27,\x27S\x27:\x27A\x5cx20plant\x5cx20that\x5cx20grows\x5cx20in\x5cx20the\x5cx20desert\x27,\x27v\x27:0x1,\x27g\x27:0xff,\x27q\x27:zZ},z0[zk]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x2,\x27y\x27:0x3},\x27u\x27:{\x27x\x27:0x2,\x27y\x27:0x3},\x27m\x27:{\x27x\x27:0x4,\x27y\x27:0x3},\x27p\x27:{\x27x\x27:0x4,\x27y\x27:0x3},\x27l\x27:{\x27x\x27:0x3,\x27y\x27:0x3},\x27h\x27:{\x27x\x27:0x3,\x27y\x27:0x3}},\x27k\x27:\x27Cactus\x27,\x27S\x27:\x27A\x5cx20plant\x5cx20that\x5cx20grows\x5cx20in\x5cx20the\x5cx20desert\x27,\x27v\x27:0x1,\x27g\x27:0xff,\x27q\x27:zZ},z0[zD]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x6,\x27y\x27:0x1},\x27u\x27:{\x27x\x27:0x3,\x27y\x27:0x0},\x27m\x27:{\x27x\x27:0x3,\x27y\x27:0x0},\x27p\x27:{\x27x\x27:0x3,\x27y\x27:0x0},\x27l\x27:{\x27x\x27:0x3,\x27y\x27:0x0},\x27h\x27:{\x27x\x27:0x3,\x27y\x27:0x0}},\x27k\x27:\x27Sand\x5cx20with\x5cx20Treasure\x5cx20Marker\x27,\x27S\x27:\x27Sand\x5cx20marked\x5cx20with\x5cx20a\x5cx20red\x5cx20cross\x5cx20on\x5cx20top.\x5cx20Treasures\x5cx20might\x5cx20be\x5cx20hidden\x5cx20below\x5cx20it\x27,\x27v\x27:0x1,\x27g\x27:0xff,\x27q\x27:zK},z0[zY]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x7,\x27y\x27:0x1},\x27u\x27:{\x27x\x27:0x0,\x27y\x27:0x0},\x27m\x27:{\x27x\x27:0x1,\x27y\x27:0x0},\x27p\x27:{\x27x\x27:0x1,\x27y\x27:0x0},\x27l\x27:{\x27x\x27:0x1,\x27y\x27:0x0},\x27h\x27:{\x27x\x27:0x1,\x27y\x27:0x0}},\x27k\x27:\x27Grass\x5cx20with\x5cx20Treasure\x5cx20Marker\x27,\x27S\x27:\x27Grass\x5cx20marked\x5cx20with\x5cx20a\x5cx20red\x5cx20cross\x5cx20on\x5cx20top.\x5cx20Treasures\x5cx20might\x5cx20be\x5cx20hidden\x5cx20below\x5cx20it\x27,\x27v\x27:0x1,\x27g\x27:0xff,\x27q\x27:zZ},z0[zn]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x6,\x27y\x27:0x2},\x27u\x27:{\x27x\x27:0x6,\x27y\x27:0x2},\x27m\x27:{\x27x\x27:0x6,\x27y\x27:0x2},\x27p\x27:{\x27x\x27:0x6,\x27y\x27:0x2},\x27l\x27:{\x27x\x27:0x6,\x27y\x27:0x2},\x27h\x27:{\x27x\x27:0x6,\x27y\x27:0x2}},\x27k\x27:\x27Sandstone\x5cx20Brick\x27,\x27S\x27:\x27Useful\x5cx20building\x5cx20material\x5cx20crafted\x5cx20from\x5cx20sand\x27,\x27v\x27:0x4,\x27g\x27:0xff,\x27q\x27:zM},z0[zN]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x7,\x27y\x27:0x2},\x27u\x27:{\x27x\x27:0x7,\x27y\x27:0x2},\x27m\x27:{\x27x\x27:0x6,\x27y\x27:0x3},\x27p\x27:{\x27x\x27:0x6,\x27y\x27:0x3},\x27l\x27:{\x27x\x27:0x6,\x27y\x27:0x3},\x27h\x27:{\x27x\x27:0x6,\x27y\x27:0x3}},\x27k\x27:\x27Sandstone\x5cx20Pillar\x27,\x27S\x27:\x27Useful\x5cx20building\x5cx20material\x5cx20crafted\x5cx20from\x5cx20sand\x27,\x27v\x27:2.5,\x27g\x27:0xff,\x27q\x27:zM},z0[zX]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x7,\x27y\x27:0x2},\x27u\x27:{\x27x\x27:0x7,\x27y\x27:0x2},\x27m\x27:{\x27x\x27:0x7,\x27y\x27:0x2},\x27p\x27:{\x27x\x27:0x7,\x27y\x27:0x2},\x27l\x27:{\x27x\x27:0x7,\x27y\x27:0x2},\x27h\x27:{\x27x\x27:0x7,\x27y\x27:0x2}},\x27k\x27:\x27Smooth\x5cx20Sandstone\x5cx20Brick\x27,\x27S\x27:\x27Useful\x5cx20building\x5cx20material\x5cx20crafted\x5cx20from\x5cx20sand\x27,\x27v\x27:0x4,\x27g\x27:0xff,\x27q\x27:zM},z0[zB]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x4,\x27y\x27:0x4},\x27u\x27:{\x27x\x27:0x2,\x27y\x27:0x2},\x27m\x27:{\x27x\x27:0x3,\x27y\x27:0x4},\x27p\x27:{\x27x\x27:0x3,\x27y\x27:0x4},\x27l\x27:{\x27x\x27:0x5,\x27y\x27:0x4},\x27h\x27:{\x27x\x27:0x5,\x27y\x27:0x4}},\x27k\x27:\x27Work\x5cx20Station\x27,\x27S\x27:\x27Allows\x5cx20you\x5cx20to\x5cx20craft\x5cx20more\x5cx20advanced\x5cx20items\x5cx20when\x5cx20placed\x5cx20on\x5cx20the\x5cx20ground\x5cx20nearby\x27,\x27v\x27:0.5,\x27g\x27:0xff,\x27q\x27:A1},z0[zr]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x4,\x27y\x27:0x5},\x27u\x27:{\x27x\x27:0x0,\x27y\x27:0x0},\x27m\x27:{\x27x\x27:0x3,\x27y\x27:0x5},\x27p\x27:{\x27x\x27:0x3,\x27y\x27:0x5},\x27l\x27:{\x27x\x27:0x3,\x27y\x27:0x5},\x27h\x27:{\x27x\x27:0x3,\x27y\x27:0x5}},\x27k\x27:\x27Snowy\x5cx20Grass\x27,\x27S\x27:\x27A\x5cx20dirt\x5cx20block\x5cx20with\x5cx20snowy\x5cx20grass\x5cx20on\x5cx20top\x27,\x27v\x27:0x1,\x27g\x27:0xff,\x27q\x27:zZ},z0[zl]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x6,\x27y\x27:0x4},\x27u\x27:{\x27x\x27:0x6,\x27y\x27:0x4},\x27m\x27:{\x27x\x27:0x6,\x27y\x27:0x4},\x27p\x27:{\x27x\x27:0x6,\x27y\x27:0x4},\x27l\x27:{\x27x\x27:0x6,\x27y\x27:0x4},\x27h\x27:{\x27x\x27:0x6,\x27y\x27:0x4}},\x27k\x27:\x27Sapphire\x5cx20Stone\x5cx20Brick\x27,\x27S\x27:\x27Stone\x5cx20brick\x5cx20made\x5cx20out\x5cx20of\x5cx20sapphire\x27,\x27v\x27:0x4,\x27g\x27:0xff,\x27q\x27:zM},z0[zd]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x7,\x27y\x27:0x4},\x27u\x27:{\x27x\x27:0x7,\x27y\x27:0x4},\x27m\x27:{\x27x\x27:0x7,\x27y\x27:0x4},\x27p\x27:{\x27x\x27:0x7,\x27y\x27:0x4},\x27l\x27:{\x27x\x27:0x7,\x27y\x27:0x4},\x27h\x27:{\x27x\x27:0x7,\x27y\x27:0x4}},\x27k\x27:\x27Ruby\x5cx20Stone\x5cx20Brick\x27,\x27S\x27:\x27Stone\x5cx20brick\x5cx20made\x5cx20out\x5cx20of\x5cx20ruby\x27,\x27v\x27:0x4,\x27g\x27:0xff,\x27q\x27:zM},z0[zC]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x5,\x27y\x27:0x5},\x27u\x27:{\x27x\x27:0x6,\x27y\x27:0x5},\x27m\x27:{\x27x\x27:0x6,\x27y\x27:0x5},\x27p\x27:{\x27x\x27:0x6,\x27y\x27:0x5},\x27l\x27:{\x27x\x27:0x6,\x27y\x27:0x5},\x27h\x27:{\x27x\x27:0x6,\x27y\x27:0x5}},\x27k\x27:\x27Loadout\x5cx20Station\x27,\x27S\x27:\x27Supply\x5cx20station\x5cx20that\x5cx20allows\x5cx20you\x5cx20to\x5cx20choose\x5cx20your\x5cx20loadouts\x27,\x27v\x27:2.5,\x27g\x27:0xff,\x27q\x27:zM},z0[zO]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x7,\x27y\x27:0x5},\x27u\x27:{\x27x\x27:0x7,\x27y\x27:0x5},\x27m\x27:{\x27x\x27:0x7,\x27y\x27:0x5},\x27p\x27:{\x27x\x27:0x7,\x27y\x27:0x5},\x27l\x27:{\x27x\x27:0x7,\x27y\x27:0x5},\x27h\x27:{\x27x\x27:0x7,\x27y\x27:0x5}},\x27k\x27:\x27Bedrock\x5cx20Brick\x27,\x27S\x27:\x27Indestructible\x5cx20bricks\x5cx20made\x5cx20out\x5cx20of\x5cx20bedrock\x27,\x27v\x27:0xf423f,\x27g\x27:0xff,\x27q\x27:zM},z0[zp]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x5,\x27y\x27:0x6},\x27u\x27:{\x27x\x27:0x5,\x27y\x27:0x6},\x27m\x27:{\x27x\x27:0x5,\x27y\x27:0x6},\x27p\x27:{\x27x\x27:0x5,\x27y\x27:0x6},\x27l\x27:{\x27x\x27:0x5,\x27y\x27:0x6},\x27h\x27:{\x27x\x27:0x5,\x27y\x27:0x6}},\x27k\x27:\x27Reinforced\x5cx20Ruby\x27,\x27S\x27:\x27Indestructable\x5cx20blocks\x5cx20made\x5cx20out\x5cx20of\x5cx20ruby\x27,\x27v\x27:0xf423f,\x27g\x27:0xff,\x27q\x27:zM},z0[zW]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x6,\x27y\x27:0x6},\x27u\x27:{\x27x\x27:0x6,\x27y\x27:0x6},\x27m\x27:{\x27x\x27:0x6,\x27y\x27:0x6},\x27p\x27:{\x27x\x27:0x6,\x27y\x27:0x6},\x27l\x27:{\x27x\x27:0x6,\x27y\x27:0x6},\x27h\x27:{\x27x\x27:0x6,\x27y\x27:0x6}},\x27k\x27:\x27Reinforced\x5cx20Sapphire\x27,\x27S\x27:\x27Indestructable\x5cx20blocks\x5cx20made\x5cx20out\x5cx20of\x5cx20sapphire\x27,\x27v\x27:0xf423f,\x27g\x27:0xff,\x27q\x27:zM},z0[zq]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x7,\x27y\x27:0x3},\x27u\x27:{\x27x\x27:0x7,\x27y\x27:0x3},\x27m\x27:{\x27x\x27:0x7,\x27y\x27:0x3},\x27p\x27:{\x27x\x27:0x7,\x27y\x27:0x3},\x27l\x27:{\x27x\x27:0x7,\x27y\x27:0x3},\x27h\x27:{\x27x\x27:0x7,\x27y\x27:0x3}},\x27k\x27:\x27Sulfur\x5cx20Ore\x27,\x27S\x27:\x27Stone\x5cx20filled\x5cx20with\x5cx20some\x5cx20sulfur\x5cx20ore\x27,\x27v\x27:2.1,\x27g\x27:0xff,\x27q\x27:zH},z0[zt]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x7,\x27y\x27:0x7},\x27u\x27:{\x27x\x27:0x7,\x27y\x27:0x6},\x27m\x27:{\x27x\x27:0x6,\x27y\x27:0x7},\x27p\x27:{\x27x\x27:0x6,\x27y\x27:0x7},\x27l\x27:{\x27x\x27:0x6,\x27y\x27:0x7},\x27h\x27:{\x27x\x27:0x6,\x27y\x27:0x7}},\x27k\x27:\x27Bomb\x27,\x27S\x27:\x27Dangerous\x5cx20explosives\x5cx20that\x5cx20can\x5cx20be\x5cx20detonated\x5cx20when\x5cx20shot\x27,\x27v\x27:0.2,\x27g\x27:0x4,\x27q\x27:zZ},z0),A4=function(AJ,Ay,AR,AS){return\x20Ay===z3&&AR===z3&&AS===z3?AJ[\x27A\x27]:-0x1===Ay&&AR===z3&&AS===z3?AJ[\x27U\x27]:Ay===z3&&AR===z3&&-0x1===AS?AJ[\x27B\x27]:-0x1===Ay&&AR===z3&&-0x1===AS?AJ[\x27M\x27]:Ay===z3&&-0x1===AR&&AS===z3?AJ[\x27T\x27]:-0x1===Ay&&-0x1===AR&&AS===z3?AJ[\x27C\x27]:Ay===z3&&-0x1===AR&&-0x1===AS?AJ[\x27I\x27]:-0x1===Ay&&-0x1===AR&&-0x1===AS?AJ[\x27H\x27]:Ay===z3&&AS===z3?AJ[\x27L\x27][AR]:-0x1===Ay&&AS===z3?AJ[\x27G\x27][AR]:Ay===z3&&-0x1===AS?AJ[\x27O\x27][AR]:-0x1===Ay&&-0x1===AS?AJ[\x27R\x27][AR]:AR===z3&&AS===z3?AJ[\x27_\x27][Ay]:AR===z3&&-0x1===AS?AJ[\x27N\x27][Ay]:AR===z3&&Ay===z3?AJ[\x27W\x27][AS]:AR===z3&&-0x1===Ay?AJ[\x27D\x27][AS]:-0x1===AR&&AS===z3?AJ[\x27K\x27][Ay]:-0x1===AR&&-0x1===AS?AJ[\x27P\x27][Ay]:-0x1===AR&&Ay===z3?AJ[\x27V\x27][AS]:-0x1===AR&&-0x1===Ay?AJ[\x27F\x27][AS]:-0x1===Ay?AJ[\x27p\x27][AR][AS]:Ay===z3?AJ[\x27m\x27][AR][AS]:-0x1===AR?AJ[\x27u\x27][Ay][AS]:AR===z3?AJ[\x27i\x27][Ay][AS]:-0x1===AS?AJ[\x27h\x27][Ay][AR]:AS===z3?AJ[\x27l\x27][Ay][AR]:AJ[\x27Y\x27][Ay*z3*z3+AR*z3+AS];},A5=function(AJ,Ay,AR){return\x200xff*[0.3,0.5,0.7,0x1][AJ&&Ay?0x0:0x3-(AJ+Ay+AR)];},A6=function(AJ,Ay,AR,AS){var\x20AQ=A4(AJ,Ay,AR,AS);return\x20A3[AQ][\x27t\x27];},A7=function(AJ,Ay,AR,AS){return\x20A4(AJ,Ay,AR,AS)===z5;},A8=function(AJ,Ay,AR,AS){var\x20AQ=A4(AJ,Ay,AR,AS);return\x20A9(AQ);},A9=function(AJ){return\x20AJ===zJ||AJ===zc||AJ===zu||AJ===zs||AJ===zT||AJ===zw||AJ===zE||AJ===zm||AJ===za;},Az=function(AJ,Ay,AR,AS){var\x20AQ=A4(AJ,Ay,AR,AS);return\x20A3[AQ][\x27$\x27];};!function(AJ){AJ[\x27CHUNK_MESH_DATA\x27]=\x27CHUNK_MESH_DATA\x27,AJ[\x27BLOCKS_MESH_DATA\x27]=\x27BLOCKS_MESH_DATA\x27;}(z1||(z1={}));var\x20AA,AG=z1;!function(AJ){AJ[\x27CHUNK_MESH\x27]=\x27CHUNK_MESH\x27,AJ[\x27BLOCKS_MESH\x27]=\x27BLOCKS_MESH\x27;}(AA||(AA={}));var\x20Ae=AA,Ag=function(AJ,Ay,AR){return\x20AJ+\x27:\x27+Ay+\x27:\x27+AR;},AP=function(AJ,Ay,AR,AS){var\x20AQ=AJ[\x27Y\x27][Ag(Ay,AR,AS)];return\x20void\x200x0===AQ?z5:AQ;},Aj=function(AJ,Ay,AR,AS){return\x20AP(AJ,Ay,AR,AS)!==z5;},Ao=function(AJ,Ay,AR,AS){return\x20void\x200x0!==AJ[\x27Y\x27][Ag(Ay,AR,AS)];},AI=function(AJ){var\x20Ay=[],AR=[],AS=[],AQ=[],Ai=[AJ[\x27j\x27]],AL=new\x20Set();for(AL[\x27add\x27](Ag(AJ[\x27j\x27][\x27x\x27],AJ[\x27j\x27][\x27y\x27],AJ[\x27j\x27][\x27z\x27]));Ai[\x27length\x27]>0x0;){var\x20AU=Ai[\x27pop\x27](),Ab=AU[\x27x\x27],Af=AU[\x27y\x27],Ah=AU[\x27z\x27],Ax=Ab-AJ[\x27j\x27][\x27x\x27],AF=Af-AJ[\x27j\x27][\x27y\x27],AV=Ah-AJ[\x27j\x27][\x27z\x27],Ak=Aj(AJ,Ab,Af,Ah),AD=Ag(Ab,Af+0x1,Ah);if(Ak&&!Aj(AJ,Ab,Af+0x1,Ah)){Ay[\x27push\x27]((Ax+0.5)*z4,(AF+0.5)*z4,(AV+0.5)*z4),Ay[\x27push\x27]((Ax-0.5)*z4,(AF+0.5)*z4,(AV+0.5)*z4),Ay[\x27push\x27]((Ax-0.5)*z4,(AF+0.5)*z4,(AV-0.5)*z4),Ay[\x27push\x27]((Ax+0.5)*z4,(AF+0.5)*z4,(AV-0.5)*z4);var\x20AY=A5(Aj(AJ,Ab+0x1,Af+0x1,Ah),Aj(AJ,Ab,Af+0x1,Ah+0x1),Aj(AJ,Ab+0x1,Af+0x1,Ah+0x1)),An=A5(Aj(AJ,Ab,Af+0x1,Ah+0x1),Aj(AJ,Ab-0x1,Af+0x1,Ah),Aj(AJ,Ab-0x1,Af+0x1,Ah+0x1)),AN=A5(Aj(AJ,Ab-0x1,Af+0x1,Ah),Aj(AJ,Ab,Af+0x1,Ah-0x1),Aj(AJ,Ab-0x1,Af+0x1,Ah-0x1)),AX=A5(Aj(AJ,Ab,Af+0x1,Ah-0x1),Aj(AJ,Ab+0x1,Af+0x1,Ah),Aj(AJ,Ab+0x1,Af+0x1,Ah-0x1));AS[\x27push\x27](AY),AS[\x27push\x27](An),AS[\x27push\x27](AN),AS[\x27push\x27](AX),AY+AN<An+AX?(AR[\x27push\x27](Ay[\x27length\x27]/0x3-0x3,Ay[\x27length\x27]/0x3-0x4,Ay[\x27length\x27]/0x3-0x1),AR[\x27push\x27](Ay[\x27length\x27]/0x3-0x1,Ay[\x27length\x27]/0x3-0x2,Ay[\x27length\x27]/0x3-0x3)):(AR[\x27push\x27](Ay[\x27length\x27]/0x3-0x4,Ay[\x27length\x27]/0x3-0x1,Ay[\x27length\x27]/0x3-0x2),AR[\x27push\x27](Ay[\x27length\x27]/0x3-0x2,Ay[\x27length\x27]/0x3-0x3,Ay[\x27length\x27]/0x3-0x4));var\x20AB=A3[AP(AJ,Ab,Af,Ah)][\x27o\x27][\x27i\x27];AQ[\x27push\x27](AB[\x27x\x27],AB[\x27y\x27],0x0,0x1),AQ[\x27push\x27](AB[\x27x\x27],AB[\x27y\x27],0x1,0x1),AQ[\x27push\x27](AB[\x27x\x27],AB[\x27y\x27],0x1,0x0),AQ[\x27push\x27](AB[\x27x\x27],AB[\x27y\x27],0x0,0x0);}else\x20Ao(AJ,Ab,Af+0x1,Ah)&&!AL[\x27has\x27](AD)&&(Ai[\x27push\x27](z2(Ab,Af+0x1,Ah)),AL[\x27add\x27](AD));var\x20Ar=Ag(Ab,Af-0x1,Ah);if(Ak&&!Aj(AJ,Ab,Af-0x1,Ah)){Ay[\x27push\x27]((Ax+0.5)*z4,(AF-0.5)*z4,(AV-0.5)*z4),Ay[\x27push\x27]((Ax-0.5)*z4,(AF-0.5)*z4,(AV-0.5)*z4),Ay[\x27push\x27]((Ax-0.5)*z4,(AF-0.5)*z4,(AV+0.5)*z4),Ay[\x27push\x27]((Ax+0.5)*z4,(AF-0.5)*z4,(AV+0.5)*z4);var\x20Al=A5(Aj(AJ,Ab+0x1,Af-0x1,Ah),Aj(AJ,Ab,Af-0x1,Ah-0x1),Aj(AJ,Ab+0x1,Af-0x1,Ah-0x1)),Ad=A5(Aj(AJ,Ab,Af-0x1,Ah-0x1),Aj(AJ,Ab-0x1,Af-0x1,Ah),Aj(AJ,Ab-0x1,Af-0x1,Ah-0x1)),AC=A5(Aj(AJ,Ab-0x1,Af-0x1,Ah),Aj(AJ,Ab,Af-0x1,Ah+0x1),Aj(AJ,Ab-0x1,Af-0x1,Ah+0x1)),AO=A5(Aj(AJ,Ab,Af-0x1,Ah+0x1),Aj(AJ,Ab+0x1,Af-0x1,Ah),Aj(AJ,Ab+0x1,Af-0x1,Ah+0x1));AS[\x27push\x27](Al),AS[\x27push\x27](Ad),AS[\x27push\x27](AC),AS[\x27push\x27](AO),Al+AC<Ad+AO?(AR[\x27push\x27](Ay[\x27length\x27]/0x3-0x3,Ay[\x27length\x27]/0x3-0x4,Ay[\x27length\x27]/0x3-0x1),AR[\x27push\x27](Ay[\x27length\x27]/0x3-0x1,Ay[\x27length\x27]/0x3-0x2,Ay[\x27length\x27]/0x3-0x3)):(AR[\x27push\x27](Ay[\x27length\x27]/0x3-0x4,Ay[\x27length\x27]/0x3-0x1,Ay[\x27length\x27]/0x3-0x2),AR[\x27push\x27](Ay[\x27length\x27]/0x3-0x2,Ay[\x27length\x27]/0x3-0x3,Ay[\x27length\x27]/0x3-0x4));var\x20Ap=A3[AP(AJ,Ab,Af,Ah)][\x27o\x27][\x27u\x27];AQ[\x27push\x27](Ap[\x27x\x27],Ap[\x27y\x27],0x0,0x1),AQ[\x27push\x27](Ap[\x27x\x27],Ap[\x27y\x27],0x1,0x1),AQ[\x27push\x27](Ap[\x27x\x27],Ap[\x27y\x27],0x1,0x0),AQ[\x27push\x27](Ap[\x27x\x27],Ap[\x27y\x27],0x0,0x0);}else\x20Ao(AJ,Ab,Af-0x1,Ah)&&!AL[\x27has\x27](Ar)&&(Ai[\x27push\x27](z2(Ab,Af-0x1,Ah)),AL[\x27add\x27](Ar));var\x20AW=Ag(Ab+0x1,Af,Ah);if(Ak&&!Aj(AJ,Ab+0x1,Af,Ah)){Ay[\x27push\x27]((Ax+0.5)*z4,(AF+0.5)*z4,(AV+0.5)*z4),Ay[\x27push\x27]((Ax+0.5)*z4,(AF+0.5)*z4,(AV-0.5)*z4),Ay[\x27push\x27]((Ax+0.5)*z4,(AF-0.5)*z4,(AV-0.5)*z4),Ay[\x27push\x27]((Ax+0.5)*z4,(AF-0.5)*z4,(AV+0.5)*z4);var\x20Aq=A5(Aj(AJ,Ab+0x1,Af,Ah+0x1),Aj(AJ,Ab+0x1,Af+0x1,Ah),Aj(AJ,Ab+0x1,Af+0x1,Ah+0x1)),At=A5(Aj(AJ,Ab+0x1,Af+0x1,Ah),Aj(AJ,Ab+0x1,Af,Ah-0x1),Aj(AJ,Ab+0x1,Af+0x1,Ah-0x1)),Ac=A5(Aj(AJ,Ab+0x1,Af,Ah-0x1),Aj(AJ,Ab+0x1,Af-0x1,Ah),Aj(AJ,Ab+0x1,Af-0x1,Ah-0x1)),Au=A5(Aj(AJ,Ab+0x1,Af-0x1,Ah),Aj(AJ,Ab+0x1,Af,Ah+0x1),Aj(AJ,Ab+0x1,Af-0x1,Ah+0x1));AS[\x27push\x27](Aq),AS[\x27push\x27](At),AS[\x27push\x27](Ac),AS[\x27push\x27](Au),Aq+Ac<At+Au?(AR[\x27push\x27](Ay[\x27length\x27]/0x3-0x3,Ay[\x27length\x27]/0x3-0x4,Ay[\x27length\x27]/0x3-0x1),AR[\x27push\x27](Ay[\x27length\x27]/0x3-0x1,Ay[\x27length\x27]/0x3-0x2,Ay[\x27length\x27]/0x3-0x3)):(AR[\x27push\x27](Ay[\x27length\x27]/0x3-0x4,Ay[\x27length\x27]/0x3-0x1,Ay[\x27length\x27]/0x3-0x2),AR[\x27push\x27](Ay[\x27length\x27]/0x3-0x2,Ay[\x27length\x27]/0x3-0x3,Ay[\x27length\x27]/0x3-0x4));var\x20As=A3[AP(AJ,Ab,Af,Ah)][\x27o\x27][\x27m\x27];AQ[\x27push\x27](As[\x27x\x27],As[\x27y\x27],0x0,0x1),AQ[\x27push\x27](As[\x27x\x27],As[\x27y\x27],0x1,0x1),AQ[\x27push\x27](As[\x27x\x27],As[\x27y\x27],0x1,0x0),AQ[\x27push\x27](As[\x27x\x27],As[\x27y\x27],0x0,0x0);}else\x20Ao(AJ,Ab+0x1,Af,Ah)&&!AL[\x27has\x27](AW)&&(Ai[\x27push\x27](z2(Ab+0x1,Af,Ah)),AL[\x27add\x27](AW));var\x20AT=Ag(Ab-0x1,Af,Ah);if(Ak&&!Aj(AJ,Ab-0x1,Af,Ah)){Ay[\x27push\x27]((Ax-0.5)*z4,(AF+0.5)*z4,(AV-0.5)*z4),Ay[\x27push\x27]((Ax-0.5)*z4,(AF+0.5)*z4,(AV+0.5)*z4),Ay[\x27push\x27]((Ax-0.5)*z4,(AF-0.5)*z4,(AV+0.5)*z4),Ay[\x27push\x27]((Ax-0.5)*z4,(AF-0.5)*z4,(AV-0.5)*z4);var\x20Aw=A5(Aj(AJ,Ab-0x1,Af,Ah-0x1),Aj(AJ,Ab-0x1,Af+0x1,Ah),Aj(AJ,Ab-0x1,Af+0x1,Ah-0x1)),AE=A5(Aj(AJ,Ab-0x1,Af+0x1,Ah),Aj(AJ,Ab-0x1,Af,Ah+0x1),Aj(AJ,Ab-0x1,Af+0x1,Ah+0x1)),Am=A5(Aj(AJ,Ab-0x1,Af,Ah+0x1),Aj(AJ,Ab-0x1,Af-0x1,Ah),Aj(AJ,Ab-0x1,Af-0x1,Ah+0x1)),Aa=A5(Aj(AJ,Ab-0x1,Af-0x1,Ah),Aj(AJ,Ab-0x1,Af,Ah-0x1),Aj(AJ,Ab-0x1,Af-0x1,Ah-0x1));AS[\x27push\x27](Aw),AS[\x27push\x27](AE),AS[\x27push\x27](Am),AS[\x27push\x27](Aa),Aw+Am<AE+Aa?(AR[\x27push\x27](Ay[\x27length\x27]/0x3-0x3,Ay[\x27length\x27]/0x3-0x4,Ay[\x27length\x27]/0x3-0x1),AR[\x27push\x27](Ay[\x27length\x27]/0x3-0x1,Ay[\x27length\x27]/0x3-0x2,Ay[\x27length\x27]/0x3-0x3)):(AR[\x27push\x27](Ay[\x27length\x27]/0x3-0x4,Ay[\x27length\x27]/0x3-0x1,Ay[\x27length\x27]/0x3-0x2),AR[\x27push\x27](Ay[\x27length\x27]/0x3-0x2,Ay[\x27length\x27]/0x3-0x3,Ay[\x27length\x27]/0x3-0x4));var\x20AZ=A3[AP(AJ,Ab,Af,Ah)][\x27o\x27][\x27p\x27];AQ[\x27push\x27](AZ[\x27x\x27],AZ[\x27y\x27],0x0,0x1),AQ[\x27push\x27](AZ[\x27x\x27],AZ[\x27y\x27],0x1,0x1),AQ[\x27push\x27](AZ[\x27x\x27],AZ[\x27y\x27],0x1,0x0),AQ[\x27push\x27](AZ[\x27x\x27],AZ[\x27y\x27],0x0,0x0);}else\x20Ao(AJ,Ab-0x1,Af,Ah)&&!AL[\x27has\x27](AT)&&(Ai[\x27push\x27](z2(Ab-0x1,Af,Ah)),AL[\x27add\x27](AT));var\x20AK=Ag(Ab,Af,Ah+0x1);if(Ak&&!Aj(AJ,Ab,Af,Ah+0x1)){Ay[\x27push\x27]((Ax-0.5)*z4,(AF+0.5)*z4,(AV+0.5)*z4),Ay[\x27push\x27]((Ax+0.5)*z4,(AF+0.5)*z4,(AV+0.5)*z4),Ay[\x27push\x27]((Ax+0.5)*z4,(AF-0.5)*z4,(AV+0.5)*z4),Ay[\x27push\x27]((Ax-0.5)*z4,(AF-0.5)*z4,(AV+0.5)*z4);var\x20AH=A5(Aj(AJ,Ab-0x1,Af,Ah+0x1),Aj(AJ,Ab,Af+0x1,Ah+0x1),Aj(AJ,Ab-0x1,Af+0x1,Ah+0x1)),AM=A5(Aj(AJ,Ab,Af+0x1,Ah+0x1),Aj(AJ,Ab+0x1,Af,Ah+0x1),Aj(AJ,Ab+0x1,Af+0x1,Ah+0x1)),Av=A5(Aj(AJ,Ab+0x1,Af,Ah+0x1),Aj(AJ,Ab,Af-0x1,Ah+0x1),Aj(AJ,Ab+0x1,Af-0x1,Ah+0x1)),G0=A5(Aj(AJ,Ab,Af-0x1,Ah+0x1),Aj(AJ,Ab-0x1,Af,Ah+0x1),Aj(AJ,Ab-0x1,Af-0x1,Ah+0x1));AS[\x27push\x27](AH),AS[\x27push\x27](AM),AS[\x27push\x27](Av),AS[\x27push\x27](G0),AH+Av<AM+G0?(AR[\x27push\x27](Ay[\x27length\x27]/0x3-0x3,Ay[\x27length\x27]/0x3-0x4,Ay[\x27length\x27]/0x3-0x1),AR[\x27push\x27](Ay[\x27length\x27]/0x3-0x1,Ay[\x27length\x27]/0x3-0x2,Ay[\x27length\x27]/0x3-0x3)):(AR[\x27push\x27](Ay[\x27length\x27]/0x3-0x4,Ay[\x27length\x27]/0x3-0x1,Ay[\x27length\x27]/0x3-0x2),AR[\x27push\x27](Ay[\x27length\x27]/0x3-0x2,Ay[\x27length\x27]/0x3-0x3,Ay[\x27length\x27]/0x3-0x4));var\x20G1=A3[AP(AJ,Ab,Af,Ah)][\x27o\x27][\x27l\x27];AQ[\x27push\x27](G1[\x27x\x27],G1[\x27y\x27],0x0,0x1),AQ[\x27push\x27](G1[\x27x\x27],G1[\x27y\x27],0x1,0x1),AQ[\x27push\x27](G1[\x27x\x27],G1[\x27y\x27],0x1,0x0),AQ[\x27push\x27](G1[\x27x\x27],G1[\x27y\x27],0x0,0x0);}else\x20Ao(AJ,Ab,Af,Ah+0x1)&&!AL[\x27has\x27](AK)&&(Ai[\x27push\x27](z2(Ab,Af,Ah+0x1)),AL[\x27add\x27](AK));var\x20G2=Ag(Ab,Af,Ah-0x1);if(Ak&&!Aj(AJ,Ab,Af,Ah-0x1)){Ay[\x27push\x27]((Ax+0.5)*z4,(AF+0.5)*z4,(AV-0.5)*z4),Ay[\x27push\x27]((Ax-0.5)*z4,(AF+0.5)*z4,(AV-0.5)*z4),Ay[\x27push\x27]((Ax-0.5)*z4,(AF-0.5)*z4,(AV-0.5)*z4),Ay[\x27push\x27]((Ax+0.5)*z4,(AF-0.5)*z4,(AV-0.5)*z4);var\x20G3=A5(Aj(AJ,Ab+0x1,Af,Ah-0x1),Aj(AJ,Ab,Af+0x1,Ah-0x1),Aj(AJ,Ab+0x1,Af+0x1,Ah-0x1)),G4=A5(Aj(AJ,Ab,Af+0x1,Ah-0x1),Aj(AJ,Ab-0x1,Af,Ah-0x1),Aj(AJ,Ab-0x1,Af+0x1,Ah-0x1)),G5=A5(Aj(AJ,Ab-0x1,Af,Ah-0x1),Aj(AJ,Ab,Af-0x1,Ah-0x1),Aj(AJ,Ab-0x1,Af-0x1,Ah-0x1)),G6=A5(Aj(AJ,Ab,Af-0x1,Ah-0x1),Aj(AJ,Ab+0x1,Af,Ah-0x1),Aj(AJ,Ab+0x1,Af-0x1,Ah-0x1));AS[\x27push\x27](G3),AS[\x27push\x27](G4),AS[\x27push\x27](G5),AS[\x27push\x27](G6),G3+G5<G4+G6?(AR[\x27push\x27](Ay[\x27length\x27]/0x3-0x3,Ay[\x27length\x27]/0x3-0x4,Ay[\x27length\x27]/0x3-0x1),AR[\x27push\x27](Ay[\x27length\x27]/0x3-0x1,Ay[\x27length\x27]/0x3-0x2,Ay[\x27length\x27]/0x3-0x3)):(AR[\x27push\x27](Ay[\x27length\x27]/0x3-0x4,Ay[\x27length\x27]/0x3-0x1,Ay[\x27length\x27]/0x3-0x2),AR[\x27push\x27](Ay[\x27length\x27]/0x3-0x2,Ay[\x27length\x27]/0x3-0x3,Ay[\x27length\x27]/0x3-0x4));var\x20G7=A3[AP(AJ,Ab,Af,Ah)][\x27o\x27][\x27h\x27];AQ[\x27push\x27](G7[\x27x\x27],G7[\x27y\x27],0x0,0x1),AQ[\x27push\x27](G7[\x27x\x27],G7[\x27y\x27],0x1,0x1),AQ[\x27push\x27](G7[\x27x\x27],G7[\x27y\x27],0x1,0x0),AQ[\x27push\x27](G7[\x27x\x27],G7[\x27y\x27],0x0,0x0);}else\x20Ao(AJ,Ab,Af,Ah-0x1)&&!AL[\x27has\x27](G2)&&(Ai[\x27push\x27](z2(Ab,Af,Ah-0x1)),AL[\x27add\x27](G2));}return{\x27J\x27:z2((AJ[\x27j\x27][\x27x\x27]+0.5)*z4,(AJ[\x27j\x27][\x27y\x27]+0.5)*z4,(AJ[\x27j\x27][\x27z\x27]+0.5)*z4),\x27X\x27:Ay,\x27Z\x27:AR,\x27$$\x27:AS,\x27t$\x27:AQ};};onmessage=function(AJ){switch(AJ[\x27data\x27][\x27e$\x27]){case\x20Ae[\x27CHUNK_MESH\x27]:const\x20Ay=function(AR){for(var\x20AS=[],AQ=[],Ai=[],AL=[],AU=[],Ab=[],Af=[],Ah=[],Ax=new\x20Uint8Array(z3*z3*z3*0x4),AF=new\x20Uint8Array(z3*z3*z3*0x4),AV=new\x20Uint8Array(z3*z3*z3*0x4),Ak=new\x20Uint8Array(z3*z3*z3*0x4),AD=new\x20Uint8Array(z3*z3*z3*0x4),AY=new\x20Uint8Array(z3*z3*z3*0x4),An=0x0;An<z3;An++)for(var\x20AN=0x0;AN<z3;AN++)for(var\x20AX=0x0;AX<z3;AX++)if(!A7(AR,An,AN,AX)){var\x20AB=Az(AR,An,AN,AX),Ar=A8(AR,An,AN,AX),Al=Az(AR,An,AN+0x1,AX);if(AB&&!Al||!AB&&A7(AR,An,AN+0x1,AX)||Ar&&!A8(AR,An,AN+0x1,AX)){var\x20Ad=0x4*(An*z3*z3+AN*z3+AX);if(Ar&&Al)Ax[Ad]=0x4c,Ax[Ad+0x1]=0x4c,Ax[Ad+0x2]=0x4c,Ax[Ad+0x3]=0x4c;else{var\x20AC=A5(A6(AR,An+0x1,AN+0x1,AX),A6(AR,An,AN+0x1,AX+0x1),A6(AR,An+0x1,AN+0x1,AX+0x1)),AO=A5(A6(AR,An,AN+0x1,AX+0x1),A6(AR,An-0x1,AN+0x1,AX),A6(AR,An-0x1,AN+0x1,AX+0x1)),Ap=A5(A6(AR,An-0x1,AN+0x1,AX),A6(AR,An,AN+0x1,AX-0x1),A6(AR,An-0x1,AN+0x1,AX-0x1)),AW=A5(A6(AR,An,AN+0x1,AX-0x1),A6(AR,An+0x1,AN+0x1,AX),A6(AR,An+0x1,AN+0x1,AX-0x1));Ax[Ad]=AC,Ax[Ad+0x1]=AO,Ax[Ad+0x2]=Ap,Ax[Ad+0x3]=AW;}}if(AB&&!Az(AR,An,AN-0x1,AX)||!AB&&A7(AR,An,AN-0x1,AX)){var\x20Aq=A5(A6(AR,An+0x1,AN-0x1,AX),A6(AR,An,AN-0x1,AX-0x1),A6(AR,An+0x1,AN-0x1,AX-0x1)),Ac=A5(A6(AR,An,AN-0x1,AX-0x1),A6(AR,An-0x1,AN-0x1,AX),A6(AR,An-0x1,AN-0x1,AX-0x1)),Au=A5(A6(AR,An-0x1,AN-0x1,AX),A6(AR,An,AN-0x1,AX+0x1),A6(AR,An-0x1,AN-0x1,AX+0x1)),As=A5(A6(AR,An,AN-0x1,AX+0x1),A6(AR,An+0x1,AN-0x1,AX),A6(AR,An+0x1,AN-0x1,AX+0x1)),AT=0x4*(An*z3*z3+AN*z3+AX);AF[AT]=Aq,AF[AT+0x1]=Ac,AF[AT+0x2]=Au,AF[AT+0x3]=As;}if(AB&&!Az(AR,An+0x1,AN,AX)||!AB&&A7(AR,An+0x1,AN,AX)){var\x20Aw=A5(A6(AR,An+0x1,AN,AX+0x1),A6(AR,An+0x1,AN+0x1,AX),A6(AR,An+0x1,AN+0x1,AX+0x1)),AE=A5(A6(AR,An+0x1,AN+0x1,AX),A6(AR,An+0x1,AN,AX-0x1),A6(AR,An+0x1,AN+0x1,AX-0x1)),Am=A5(A6(AR,An+0x1,AN,AX-0x1),A6(AR,An+0x1,AN-0x1,AX),A6(AR,An+0x1,AN-0x1,AX-0x1)),Aa=A5(A6(AR,An+0x1,AN-0x1,AX),A6(AR,An+0x1,AN,AX+0x1),A6(AR,An+0x1,AN-0x1,AX+0x1)),AZ=0x4*(An*z3*z3+AN*z3+AX);AV[AZ]=Aw,AV[AZ+0x1]=AE,AV[AZ+0x2]=Am,AV[AZ+0x3]=Aa;}if(AB&&!Az(AR,An-0x1,AN,AX)||!AB&&A7(AR,An-0x1,AN,AX)){var\x20AK=A5(A6(AR,An-0x1,AN,AX-0x1),A6(AR,An-0x1,AN+0x1,AX),A6(AR,An-0x1,AN+0x1,AX-0x1)),AH=A5(A6(AR,An-0x1,AN+0x1,AX),A6(AR,An-0x1,AN,AX+0x1),A6(AR,An-0x1,AN+0x1,AX+0x1)),AM=A5(A6(AR,An-0x1,AN,AX+0x1),A6(AR,An-0x1,AN-0x1,AX),A6(AR,An-0x1,AN-0x1,AX+0x1)),Av=A5(A6(AR,An-0x1,AN-0x1,AX),A6(AR,An-0x1,AN,AX-0x1),A6(AR,An-0x1,AN-0x1,AX-0x1)),G0=0x4*(An*z3*z3+AN*z3+AX);Ak[G0]=AK,Ak[G0+0x1]=AH,Ak[G0+0x2]=AM,Ak[G0+0x3]=Av;}if(AB&&!Az(AR,An,AN,AX+0x1)||!AB&&A7(AR,An,AN,AX+0x1)){var\x20G1=A5(A6(AR,An-0x1,AN,AX+0x1),A6(AR,An,AN+0x1,AX+0x1),A6(AR,An-0x1,AN+0x1,AX+0x1)),G2=A5(A6(AR,An,AN+0x1,AX+0x1),A6(AR,An+0x1,AN,AX+0x1),A6(AR,An+0x1,AN+0x1,AX+0x1)),G3=A5(A6(AR,An+0x1,AN,AX+0x1),A6(AR,An,AN-0x1,AX+0x1),A6(AR,An+0x1,AN-0x1,AX+0x1)),G4=A5(A6(AR,An,AN-0x1,AX+0x1),A6(AR,An-0x1,AN,AX+0x1),A6(AR,An-0x1,AN-0x1,AX+0x1)),G5=0x4*(An*z3*z3+AN*z3+AX);AD[G5]=G1,AD[G5+0x1]=G2,AD[G5+0x2]=G3,AD[G5+0x3]=G4;}if(AB&&!Az(AR,An,AN,AX-0x1)||!AB&&A7(AR,An,AN,AX-0x1)){var\x20G6=A5(A6(AR,An+0x1,AN,AX-0x1),A6(AR,An,AN+0x1,AX-0x1),A6(AR,An+0x1,AN+0x1,AX-0x1)),G7=A5(A6(AR,An,AN+0x1,AX-0x1),A6(AR,An-0x1,AN,AX-0x1),A6(AR,An-0x1,AN+0x1,AX-0x1)),G8=A5(A6(AR,An-0x1,AN,AX-0x1),A6(AR,An,AN-0x1,AX-0x1),A6(AR,An-0x1,AN-0x1,AX-0x1)),G9=A5(A6(AR,An,AN-0x1,AX-0x1),A6(AR,An+0x1,AN,AX-0x1),A6(AR,An+0x1,AN-0x1,AX-0x1)),Gz=0x4*(An*z3*z3+AN*z3+AX);AY[Gz]=G6,AY[Gz+0x1]=G7,AY[Gz+0x2]=G8,AY[Gz+0x3]=G9;}}for(var\x20GA=0x0;GA<z3;GA++)for(var\x20GG=0x0;GG<z3;GG++)for(var\x20Ge=0x0;Ge<z3;Ge++){var\x20Gg=GG,GP=GA,Gj=Ge,Go=AS,GI=AQ,GJ=Ai,Gy=AL;Az(AR,GG,GA,Ge)||(Go=AU,GI=Ab,GJ=Af,Gy=Ah);var\x20GR=0x4*(GG*z3*z3+GA*z3+Ge),GS=AR[\x27Y\x27][GG*z3*z3+GA*z3+Ge],GQ=0x1,Gi=0x1,GL=0x1,GU=0x1;GS!==zJ||A8(AR,GG,GA+0x1,Ge)||(GQ=0.9,Gi=0.9,GL=0.9,GU=0.9);var\x20Gb=Ax[GR];if(0x0!==Gb){for(var\x20Gf=Ax[GR+0x1],Gh=Ax[GR+0x2],Gx=Ax[GR+0x3],GF=0x1,GV=0x1,Gk=Ge+0x1;Gk<z3;Gk++){var\x20GD=0x4*(GG*z3*z3+GA*z3+Gk),GY=AR[\x27Y\x27][GG*z3*z3+GA*z3+Gk];if(0x0===Ax[GD]||GS!==GY||Gb!==Ax[GD]||Gf!==Ax[GD+0x1]||Gh!==Ax[GD+0x2]||Gx!==Ax[GD+0x3])break;++GF;}for(var\x20Gn=!0x0,GN=GG+0x1;GN<z3&&Gn;GN++){Gn=!0x0;for(var\x20GX=Ge;GX<Ge+GF;GX++){var\x20GB=0x4*(GN*z3*z3+GA*z3+GX),Gr=AR[\x27Y\x27][GN*z3*z3+GA*z3+GX];if(0x0===Ax[GB]||GS!==Gr||Gb!==Ax[GB]||Gf!==Ax[GB+0x1]||Gh!==Ax[GB+0x2]||Gx!==Ax[GB+0x3]){Gn=!0x1;break;}}Gn&&++GV;}for(var\x20Gl=GG;Gl<GG+GV;Gl++)for(var\x20Gd=Ge;Gd<Ge+GF;Gd++)Ax[0x4*(Gl*z3*z3+GA*z3+Gd)]=0x0;Go[\x27push\x27](0x1*(Gg+0x1+(GV-0x1)),0x1*GP+GQ,0x1*(Gj+0x1+(GF-0x1))),Go[\x27push\x27](0x1*Gg,0x1*GP+Gi,0x1*(Gj+0x1+(GF-0x1))),Go[\x27push\x27](0x1*Gg,0x1*GP+GU,0x1*Gj),Go[\x27push\x27](0x1*(Gg+0x1+(GV-0x1)),0x1*GP+GL,0x1*Gj),GJ[\x27push\x27](Gb,Gf,Gh,Gx),Gb+Gh<Gf+Gx?(GI[\x27push\x27](Go[\x27length\x27]/0x3-0x3,Go[\x27length\x27]/0x3-0x4,Go[\x27length\x27]/0x3-0x1),GI[\x27push\x27](Go[\x27length\x27]/0x3-0x1,Go[\x27length\x27]/0x3-0x2,Go[\x27length\x27]/0x3-0x3)):(GI[\x27push\x27](Go[\x27length\x27]/0x3-0x4,Go[\x27length\x27]/0x3-0x1,Go[\x27length\x27]/0x3-0x2),GI[\x27push\x27](Go[\x27length\x27]/0x3-0x2,Go[\x27length\x27]/0x3-0x3,Go[\x27length\x27]/0x3-0x4));var\x20GC=A3[GS][\x27o\x27][\x27i\x27];Gy[\x27push\x27](GC[\x27x\x27],GC[\x27y\x27],0x0,GF),Gy[\x27push\x27](GC[\x27x\x27],GC[\x27y\x27],GV,GF),Gy[\x27push\x27](GC[\x27x\x27],GC[\x27y\x27],GV,0x0),Gy[\x27push\x27](GC[\x27x\x27],GC[\x27y\x27],0x0,0x0);}var\x20GO=AF[GR];if(0x0!==GO){for(var\x20Gp=AF[GR+0x1],GW=AF[GR+0x2],Gq=AF[GR+0x3],Gc=0x1,Gu=0x1,Gs=Ge+0x1;Gs<z3;Gs++){var\x20GT=0x4*(GG*z3*z3+GA*z3+Gs),Gw=AR[\x27Y\x27][GG*z3*z3+GA*z3+Gs];if(0x0===AF[GT]||GS!==Gw||GO!==AF[GT]||Gp!==AF[GT+0x1]||GW!==AF[GT+0x2]||Gq!==AF[GT+0x3])break;++Gc;}for(var\x20GE=!0x0,Gm=GG+0x1;Gm<z3&&GE;Gm++){GE=!0x0;for(var\x20Ga=Ge;Ga<Ge+Gc;Ga++){var\x20GZ=0x4*(Gm*z3*z3+GA*z3+Ga),GK=AR[\x27Y\x27][Gm*z3*z3+GA*z3+Ga];if(0x0===AF[GZ]||GS!==GK||GO!==AF[GZ]||Gp!==AF[GZ+0x1]||GW!==AF[GZ+0x2]||Gq!==AF[GZ+0x3]){GE=!0x1;break;}}GE&&++Gu;}for(var\x20GH=GG;GH<GG+Gu;GH++)for(var\x20GM=Ge;GM<Ge+Gc;GM++)AF[0x4*(GH*z3*z3+GA*z3+GM)]=0x0;Go[\x27push\x27](0x1*(Gg+0x1+(Gu-0x1)),0x1*GP,0x1*Gj),Go[\x27push\x27](0x1*Gg,0x1*GP,0x1*Gj),Go[\x27push\x27](0x1*Gg,0x1*GP,0x1*(Gj+0x1+(Gc-0x1))),Go[\x27push\x27](0x1*(Gg+0x1+(Gu-0x1)),0x1*GP,0x1*(Gj+0x1+(Gc-0x1))),GJ[\x27push\x27](GO,Gp,GW,Gq),GO+GW<Gp+Gq?(GI[\x27push\x27](Go[\x27length\x27]/0x3-0x3,Go[\x27length\x27]/0x3-0x4,Go[\x27length\x27]/0x3-0x1),GI[\x27push\x27](Go[\x27length\x27]/0x3-0x1,Go[\x27length\x27]/0x3-0x2,Go[\x27length\x27]/0x3-0x3)):(GI[\x27push\x27](Go[\x27length\x27]/0x3-0x4,Go[\x27length\x27]/0x3-0x1,Go[\x27length\x27]/0x3-0x2),GI[\x27push\x27](Go[\x27length\x27]/0x3-0x2,Go[\x27length\x27]/0x3-0x3,Go[\x27length\x27]/0x3-0x4));var\x20Gv=A3[GS][\x27o\x27][\x27u\x27];Gy[\x27push\x27](Gv[\x27x\x27],Gv[\x27y\x27],0x0,Gc),Gy[\x27push\x27](Gv[\x27x\x27],Gv[\x27y\x27],Gu,Gc),Gy[\x27push\x27](Gv[\x27x\x27],Gv[\x27y\x27],Gu,0x0),Gy[\x27push\x27](Gv[\x27x\x27],Gv[\x27y\x27],0x0,0x0);}var\x20e0=AV[GR];if(0x0!==e0){for(var\x20e1=AV[GR+0x1],e2=AV[GR+0x2],e3=AV[GR+0x3],e4=0x1,e5=0x1,e6=Ge+0x1;e6<z3;e6++){var\x20e7=0x4*(GG*z3*z3+GA*z3+e6),e8=AR[\x27Y\x27][GG*z3*z3+GA*z3+e6];if(0x0===AV[e7]||GS!==e8||e0!==AV[e7]||e1!==AV[e7+0x1]||e2!==AV[e7+0x2]||e3!==AV[e7+0x3])break;++e4;}for(var\x20e9=!0x0,ez=GA+0x1;ez<z3&&e9;ez++){e9=!0x0;for(var\x20eA=Ge;eA<Ge+e4;eA++){var\x20eG=0x4*(GG*z3*z3+ez*z3+eA),eg=AR[\x27Y\x27][GG*z3*z3+ez*z3+eA];if(0x0===AV[eG]||GS!==eg||e0!==AV[eG]||e1!==AV[eG+0x1]||e2!==AV[eG+0x2]||e3!==AV[eG+0x3]){e9=!0x1;break;}}e9&&++e5;}for(var\x20eP=GA;eP<GA+e5;eP++)for(var\x20ej=Ge;ej<Ge+e4;ej++)AV[0x4*(GG*z3*z3+eP*z3+ej)]=0x0;Go[\x27push\x27](0x1*(Gg+0x1),0x1*(GP+(e5-0x1))+GQ,0x1*(Gj+0x1+(e4-0x1))),Go[\x27push\x27](0x1*(Gg+0x1),0x1*(GP+(e5-0x1))+GL,0x1*Gj),Go[\x27push\x27](0x1*(Gg+0x1),0x1*GP,0x1*Gj),Go[\x27push\x27](0x1*(Gg+0x1),0x1*GP,0x1*(Gj+0x1+(e4-0x1))),GJ[\x27push\x27](e0,e1,e2,e3),e0+e2<e1+e3?(GI[\x27push\x27](Go[\x27length\x27]/0x3-0x3,Go[\x27length\x27]/0x3-0x4,Go[\x27length\x27]/0x3-0x1),GI[\x27push\x27](Go[\x27length\x27]/0x3-0x1,Go[\x27length\x27]/0x3-0x2,Go[\x27length\x27]/0x3-0x3)):(GI[\x27push\x27](Go[\x27length\x27]/0x3-0x4,Go[\x27length\x27]/0x3-0x1,Go[\x27length\x27]/0x3-0x2),GI[\x27push\x27](Go[\x27length\x27]/0x3-0x2,Go[\x27length\x27]/0x3-0x3,Go[\x27length\x27]/0x3-0x4));var\x20eo=A3[GS][\x27o\x27][\x27m\x27];Gy[\x27push\x27](eo[\x27x\x27],eo[\x27y\x27],0x0,e5),Gy[\x27push\x27](eo[\x27x\x27],eo[\x27y\x27],e4,e5),Gy[\x27push\x27](eo[\x27x\x27],eo[\x27y\x27],e4,0x0),Gy[\x27push\x27](eo[\x27x\x27],eo[\x27y\x27],0x0,0x0);}var\x20eI=Ak[GR];if(0x0!==eI){for(var\x20eJ=Ak[GR+0x1],ey=Ak[GR+0x2],eR=Ak[GR+0x3],eS=0x1,eQ=0x1,ei=Ge+0x1;ei<z3;ei++){var\x20eL=0x4*(GG*z3*z3+GA*z3+ei),eU=AR[\x27Y\x27][GG*z3*z3+GA*z3+ei];if(0x0===Ak[eL]||GS!==eU||eI!==Ak[eL]||eJ!==Ak[eL+0x1]||ey!==Ak[eL+0x2]||eR!==Ak[eL+0x3])break;++eS;}for(var\x20eb=!0x0,ef=GA+0x1;ef<z3&&eb;ef++){eb=!0x0;for(var\x20eh=Ge;eh<Ge+eS;eh++){var\x20ex=0x4*(GG*z3*z3+ef*z3+eh),eF=AR[\x27Y\x27][GG*z3*z3+ef*z3+eh];if(0x0===Ak[ex]||GS!==eF||eI!==Ak[ex]||eJ!==Ak[ex+0x1]||ey!==Ak[ex+0x2]||eR!==Ak[ex+0x3]){eb=!0x1;break;}}eb&&++eQ;}for(var\x20eV=GA;eV<GA+eQ;eV++)for(var\x20ek=Ge;ek<Ge+eS;ek++)Ak[0x4*(GG*z3*z3+eV*z3+ek)]=0x0;Go[\x27push\x27](0x1*Gg,0x1*(GP+(eQ-0x1))+GU,0x1*Gj),Go[\x27push\x27](0x1*Gg,0x1*(GP+(eQ-0x1))+Gi,0x1*(Gj+0x1+(eS-0x1))),Go[\x27push\x27](0x1*Gg,0x1*GP,0x1*(Gj+0x1+(eS-0x1))),Go[\x27push\x27](0x1*Gg,0x1*GP,0x1*Gj),GJ[\x27push\x27](eI,eJ,ey,eR),eI+ey<eJ+eR?(GI[\x27push\x27](Go[\x27length\x27]/0x3-0x3,Go[\x27length\x27]/0x3-0x4,Go[\x27length\x27]/0x3-0x1),GI[\x27push\x27](Go[\x27length\x27]/0x3-0x1,Go[\x27length\x27]/0x3-0x2,Go[\x27length\x27]/0x3-0x3)):(GI[\x27push\x27](Go[\x27length\x27]/0x3-0x4,Go[\x27length\x27]/0x3-0x1,Go[\x27length\x27]/0x3-0x2),GI[\x27push\x27](Go[\x27length\x27]/0x3-0x2,Go[\x27length\x27]/0x3-0x3,Go[\x27length\x27]/0x3-0x4));var\x20eD=A3[GS][\x27o\x27][\x27p\x27];Gy[\x27push\x27](eD[\x27x\x27],eD[\x27y\x27],0x0,eQ),Gy[\x27push\x27](eD[\x27x\x27],eD[\x27y\x27],eS,eQ),Gy[\x27push\x27](eD[\x27x\x27],eD[\x27y\x27],eS,0x0),Gy[\x27push\x27](eD[\x27x\x27],eD[\x27y\x27],0x0,0x0);}var\x20eY=AD[GR];if(0x0!==eY){for(var\x20en=AD[GR+0x1],eN=AD[GR+0x2],eX=AD[GR+0x3],eB=0x1,er=0x1,el=GG+0x1;el<z3;el++){var\x20ed=0x4*(el*z3*z3+GA*z3+Ge),eC=AR[\x27Y\x27][el*z3*z3+GA*z3+Ge];if(0x0===AD[ed]||GS!==eC||eY!==AD[ed]||en!==AD[ed+0x1]||eN!==AD[ed+0x2]||eX!==AD[ed+0x3])break;++eB;}for(var\x20eO=!0x0,ep=GA+0x1;ep<z3&&eO;ep++){eO=!0x0;for(var\x20eW=GG;eW<GG+eB;eW++){var\x20eq=0x4*(eW*z3*z3+ep*z3+Ge),ec=AR[\x27Y\x27][eW*z3*z3+ep*z3+Ge];if(0x0===AD[eq]||GS!==ec||eY!==AD[eq]||en!==AD[eq+0x1]||eN!==AD[eq+0x2]||eX!==AD[eq+0x3]){eO=!0x1;break;}}eO&&++er;}for(var\x20eu=GA;eu<GA+er;eu++)for(var\x20es=GG;es<GG+eB;es++)AD[0x4*(es*z3*z3+eu*z3+Ge)]=0x0;Go[\x27push\x27](0x1*Gg,0x1*(GP+(er-0x1))+Gi,0x1*(Gj+0x1)),Go[\x27push\x27](0x1*(Gg+0x1+(eB-0x1)),0x1*(GP+(er-0x1))+GQ,0x1*(Gj+0x1)),Go[\x27push\x27](0x1*(Gg+0x1+(eB-0x1)),0x1*GP,0x1*(Gj+0x1)),Go[\x27push\x27](0x1*Gg,0x1*GP,0x1*(Gj+0x1)),GJ[\x27push\x27](eY,en,eN,eX),eY+eN<en+eX?(GI[\x27push\x27](Go[\x27length\x27]/0x3-0x3,Go[\x27length\x27]/0x3-0x4,Go[\x27length\x27]/0x3-0x1),GI[\x27push\x27](Go[\x27length\x27]/0x3-0x1,Go[\x27length\x27]/0x3-0x2,Go[\x27length\x27]/0x3-0x3)):(GI[\x27push\x27](Go[\x27length\x27]/0x3-0x4,Go[\x27length\x27]/0x3-0x1,Go[\x27length\x27]/0x3-0x2),GI[\x27push\x27](Go[\x27length\x27]/0x3-0x2,Go[\x27length\x27]/0x3-0x3,Go[\x27length\x27]/0x3-0x4));var\x20eT=A3[GS][\x27o\x27][\x27l\x27];Gy[\x27push\x27](eT[\x27x\x27],eT[\x27y\x27],0x0,er),Gy[\x27push\x27](eT[\x27x\x27],eT[\x27y\x27],eB,er),Gy[\x27push\x27](eT[\x27x\x27],eT[\x27y\x27],eB,0x0),Gy[\x27push\x27](eT[\x27x\x27],eT[\x27y\x27],0x0,0x0);}var\x20ew=AY[GR];if(0x0!==ew){for(var\x20eE=AY[GR+0x1],em=AY[GR+0x2],ea=AY[GR+0x3],eZ=0x1,eK=0x1,eH=GG+0x1;eH<z3;eH++){var\x20eM=0x4*(eH*z3*z3+GA*z3+Ge),ev=AR[\x27Y\x27][eH*z3*z3+GA*z3+Ge];if(0x0===AY[eM]||GS!==ev||ew!==AY[eM]||eE!==AY[eM+0x1]||em!==AY[eM+0x2]||ea!==AY[eM+0x3])break;++eZ;}for(var\x20g0=!0x0,g1=GA+0x1;g1<z3&&g0;g1++){g0=!0x0;for(var\x20g2=GG;g2<GG+eZ;g2++){var\x20g3=0x4*(g2*z3*z3+g1*z3+Ge),g4=AR[\x27Y\x27][g2*z3*z3+g1*z3+Ge];if(0x0===AY[g3]||GS!==g4||ew!==AY[g3]||eE!==AY[g3+0x1]||em!==AY[g3+0x2]||ea!==AY[g3+0x3]){g0=!0x1;break;}}g0&&++eK;}for(var\x20g5=GA;g5<GA+eK;g5++)for(var\x20g6=GG;g6<GG+eZ;g6++)AY[0x4*(g6*z3*z3+g5*z3+Ge)]=0x0;Go[\x27push\x27](0x1*(Gg+0x1+(eZ-0x1)),0x1*(GP+(eK-0x1))+GL,0x1*Gj),Go[\x27push\x27](0x1*Gg,0x1*(GP+(eK-0x1))+GU,0x1*Gj),Go[\x27push\x27](0x1*Gg,0x1*GP,0x1*Gj),Go[\x27push\x27](0x1*(Gg+0x1+(eZ-0x1)),0x1*GP,0x1*Gj),GJ[\x27push\x27](ew,eE,em,ea),ew+em<eE+ea?(GI[\x27push\x27](Go[\x27length\x27]/0x3-0x3,Go[\x27length\x27]/0x3-0x4,Go[\x27length\x27]/0x3-0x1),GI[\x27push\x27](Go[\x27length\x27]/0x3-0x1,Go[\x27length\x27]/0x3-0x2,Go[\x27length\x27]/0x3-0x3)):(GI[\x27push\x27](Go[\x27length\x27]/0x3-0x4,Go[\x27length\x27]/0x3-0x1,Go[\x27length\x27]/0x3-0x2),GI[\x27push\x27](Go[\x27length\x27]/0x3-0x2,Go[\x27length\x27]/0x3-0x3,Go[\x27length\x27]/0x3-0x4));var\x20g7=A3[GS][\x27o\x27][\x27h\x27];Gy[\x27push\x27](g7[\x27x\x27],g7[\x27y\x27],0x0,eK),Gy[\x27push\x27](g7[\x27x\x27],g7[\x27y\x27],eZ,eK),Gy[\x27push\x27](g7[\x27x\x27],g7[\x27y\x27],eZ,0x0),Gy[\x27push\x27](g7[\x27x\x27],g7[\x27y\x27],0x0,0x0);}}return{\x27r$\x27:AR[\x27r$\x27],\x27o$\x27:new\x20Float32Array(AS),\x27a$\x27:new\x20Uint16Array(AQ),\x27s$\x27:new\x20Uint8Array(Ai),\x27i$\x27:new\x20Uint8Array(AL),\x27n$\x27:new\x20Float32Array(AU),\x27x$\x27:new\x20Uint16Array(Ab),\x27y$\x27:new\x20Uint8Array(Af),\x27d$\x27:new\x20Uint8Array(Ah),\x27u$\x27:AR[\x27u$\x27]};}(AJ[\x27data\x27]);postMessage({\x27event\x27:AG[\x27CHUNK_MESH_DATA\x27],\x27data\x27:Ay},[Ay[\x27o$\x27][\x27buffer\x27],Ay[\x27a$\x27][\x27buffer\x27],Ay[\x27s$\x27][\x27buffer\x27],Ay[\x27i$\x27][\x27buffer\x27],Ay[\x27n$\x27][\x27buffer\x27],Ay[\x27x$\x27][\x27buffer\x27],Ay[\x27y$\x27][\x27buffer\x27],Ay[\x27d$\x27][\x27buffer\x27]]);break;case\x20Ae[\x27BLOCKS_MESH\x27]:postMessage({\x27event\x27:AG[\x27BLOCKS_MESH_DATA\x27],\x27data\x27:AI(AJ[\x27data\x27])});}};}());', 'Worker', void 0x0, z2['p'] + './package/40ba7e14ef6fa40c4a14.worker.js');
        }
        !function(gD) {
            gD['CHUNK_MESH'] = 'CHUNK_MESH',
            gD['BLOCKS_MESH'] = 'BLOCKS_MESH';
        }(z3 || (z3 = {}));
        var zQ, zL = z3;
        !function(gD) {
            gD['CHUNK_MESH_DATA'] = 'CHUNK_MESH_DATA',
            gD['BLOCKS_MESH_DATA'] = 'BLOCKS_MESH_DATA';
        }(zQ || (zQ = {}));
        var zU = zQ
          , zb = z2(0xe8cc)
          , zf = (function() {
            function gD(gn, gN) {
                var gX = this;
                this['$h'] = gn,
                this['bh'] = gN,
                this['kh'] = [],
                this['Rh'] = [],
                this['Sh'] = 0x0;
                var gB = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20sampler2D\x20map;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20float\x20vAo;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec4\x20vRealUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20atlasDim\x20=\x20' + z8['Z']['ur']['toFixed'](0x1) + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20diffuseColor\x20=\x20vec4(1.0,\x201.0,\x201.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20diffuseColor\x20*=\x20vec4(vec3(1.0,\x201.0,\x201.0)\x20*\x20vAo,\x201.0);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20tilePosX\x20=\x20max(0.01,\x20min(0.99,\x20fract(vRealUv.z)));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20tilePosY\x20=\x20max(0.01,\x20min(0.99,\x20fract(vRealUv.w)));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20uv\x20=\x20vec2(vRealUv.x\x20*\x20(1.0\x20/\x20atlasDim)\x20+\x20tilePosX\x20*\x20(1.0\x20/\x20atlasDim),\x20vRealUv.y\x20*\x20(1.0\x20/\x20atlasDim)\x20+\x20tilePosY\x20*\x20(1.0\x20/\x20atlasDim));\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20diffuseColor\x20*=\x20texture2D(map,\x20uv);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20diffuseColor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20'
                  , gr = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20sampler2D\x20map;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20time;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20float\x20vAo;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec4\x20vRealUv;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20atlasDim\x20=\x20' + z8['Z']['ur']['toFixed'](0x1) + ';\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20diffuseColor\x20=\x20vec4(1.0,\x201.0,\x201.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20diffuseColor\x20*=\x20vec4(vec3(1.0,\x201.0,\x201.0)\x20*\x20vAo,\x201.0);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20xOffset\x20=\x20mod(floor(time\x20/\x20300.0),\x20atlasDim);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20tilePosX\x20=\x20max(0.01,\x20min(0.99,\x20fract(vRealUv.z)));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20tilePosY\x20=\x20max(0.01,\x20min(0.99,\x20fract(vRealUv.w)));\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20uv\x20=\x20vec2((vRealUv.x\x20+\x20xOffset)\x20*\x20(1.0\x20/\x20atlasDim)\x20+\x20tilePosX\x20*\x20(1.0\x20/\x20atlasDim),\x20vRealUv.y\x20*\x20(1.0\x20/\x20atlasDim)\x20+\x20tilePosY\x20*\x20(1.0\x20/\x20atlasDim));\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20diffuseColor\x20*=\x20texture2D(map,\x20uv);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20diffuseColor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20';
                this['Mh'] = new z7['jyz']({
                    'uniforms': {
                        'map': {
                            'value': z9['Z']['Dh']()
                        }
                    },
                    'vertexShader': '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20attribute\x20float\x20ao;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20attribute\x20vec4\x20realUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20float\x20vAo;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec4\x20vRealUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20mvPosition\x20=\x20modelViewMatrix\x20*\x20vec4(position,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20projectionMatrix\x20*\x20mvPosition;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vAo\x20=\x20ao;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vRealUv\x20=\x20realUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
                    'fragmentShader': gB,
                    'fog': !0x1
                }),
                this['Ch'] = new z7['jyz']({
                    'transparent': !0x0,
                    'uniforms': {
                        'map': {
                            'value': z9['Z']['Dh']()
                        },
                        'time': {
                            'value': 0x0
                        }
                    },
                    'side': z7['ehD'],
                    'vertexShader': '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20attribute\x20float\x20ao;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20attribute\x20vec4\x20realUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20float\x20vAo;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec4\x20vRealUv;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20mvPosition\x20=\x20modelViewMatrix\x20*\x20vec4(position,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20projectionMatrix\x20*\x20mvPosition;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vAo\x20=\x20ao;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vRealUv\x20=\x20realUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
                    'fragmentShader': gr,
                    'fog': !0x1,
                    'depthWrite': !0x1
                });
                for (var gl = 0x0; gl < this['bh']; gl++) {
                    var gd = new zS();
                    gd['onmessage'] = function(gC) {
                        switch (gC['data']['event']) {
                        case zU['CHUNK_MESH_DATA']:
                            gX['Jh'](gC['data']['data']);
                            break;
                        case zU['BLOCKS_MESH_DATA']:
                            var gO = gC['data']['data']
                              , gp = gO['J']
                              , gW = gO['Z']
                              , gq = gO['X']
                              , gc = gO['t$']
                              , gu = gO['$$']
                              , gT = new z7['u9r']();
                            gT['setAttribute']('position', new z7['a$l'](gq,0x3)),
                            gT['setIndex'](new z7['qlB'](gW,0x1)),
                            gT['setAttribute']('ao', new z7['WTc'](gu,0x1,!0x0)),
                            gT['setAttribute']('realUv', new z7['WTc'](gc,0x4));
                            var gw = new z7['Kj0'](gT,gX['Mh']);
                            gw['position']['set'](gp['x'], gp['y'], gp['z']),
                            gX['$h']['jh'](gp, gw);
                        }
                    }
                    ,
                    this['Rh']['push'](gd);
                }
            }
            var gY = gD['prototype'];
            return gY['Ph'] = function() {
                this['kh'] = [],
                this['Mh']['dispose']();
                for (var gn = 0x0; gn < this['Rh']['length']; gn++)
                    this['Rh'][gn]['terminate']();
                this['Rh'] = [];
            }
            ,
            gY['bs'] = function(gn, gN) {
                this['Ch']['uniforms']['time']['value'] += 0x3e8 * gn,
                this['Ch']['uniformsNeedUpdate'] = !0x0;
            }
            ,
            gY['Uh'] = function() {
                for (; this['kh']['length'] > 0x0; ) {
                    0x0;
                    var gn = this['kh']['shift']();
                    switch (gn['e$']) {
                    case zL['CHUNK_MESH']:
                        if (this['$h']['Xh']()['Nh'](gn['u$']['x'], gn['u$']['y'], gn['u$']['z']))
                            this['Vh']()['postMessage'](gn);
                        break;
                    case zL['BLOCKS_MESH']:
                    default:
                        this['Vh']()['postMessage'](gn);
                    }
                }
            }
            ,
            gY['Vh'] = function() {
                var gn = this['Rh'][this['Sh']];
                return ++this['Sh'] >= this['Rh']['length'] && (this['Sh'] = 0x0),
                gn;
            }
            ,
            gY['Jh'] = function(gn) {
                var gN = gn['r$']
                  , gX = gn['u$']
                  , gB = gn['o$']
                  , gr = gn['a$']
                  , gl = gn['i$']
                  , gd = gn['s$']
                  , gC = gn['n$']
                  , gO = gn['x$']
                  , gp = gn['d$']
                  , gW = gn['y$']
                  , gq = void 0x0;
                if (gB['length'] > 0x0) {
                    var gc = new z7['u9r']();
                    gc['setAttribute']('position', new z7['a$l'](gB,0x3)),
                    gc['setIndex'](new z7['qlB'](gr,0x1)),
                    gc['setAttribute']('ao', new z7['WTc'](gd,0x1,!0x0)),
                    gc['setAttribute']('realUv', new z7['WTc'](gl,0x4)),
                    gq = new z7['Kj0'](gc,this['Mh']);
                }
                var gu = void 0x0;
                if (gC['length'] > 0x0) {
                    var gT = new z7['u9r']();
                    gT['setAttribute']('position', new z7['a$l'](gC,0x3)),
                    gT['setIndex'](new z7['qlB'](gO,0x1)),
                    gT['setAttribute']('ao', new z7['WTc'](gW,0x1,!0x0)),
                    gT['setAttribute']('realUv', new z7['WTc'](gp,0x4)),
                    gu = new z7['Kj0'](gT,this['Ch']);
                }
                this['$h']['Th'](gN, gX['x'], gX['y'], gX['z'], gq, gu);
            }
            ,
            gY['Ih'] = function(gn, gN, gX, gB, gr, gl, gd, gC, gO, gp, gW, gq, gc, gu, gT, gw, gE, gm, ga, gZ, gK, gH, gM, gv, P0, P1, P2, P3, P4, P5) {
                var P6 = {
                    'e$': zL['CHUNK_MESH'],
                    'r$': gn,
                    'u$': {
                        'x': gN['x'],
                        'y': gN['y'],
                        'z': gN['z']
                    },
                    'Y': gX,
                    'i': gB,
                    'u': gr,
                    'm': gl,
                    'p': gd,
                    'l': gC,
                    'h': gO,
                    'A': gp,
                    'U': gW,
                    'B': gq,
                    'M': gc,
                    'T': gu,
                    'C': gT,
                    'I': gw,
                    'H': gE,
                    'L': gm,
                    'G': ga,
                    'O': gZ,
                    'R': gK,
                    '_': gH,
                    'N': gM,
                    'W': gv,
                    'D': P0,
                    'K': P1,
                    'P': P2,
                    'V': P3,
                    'F': P4
                };
                P5 ? this['kh']['push'](P6) : this['Jh']((0x0,
                zb['FX'])(P6));
            }
            ,
            gY['Bh'] = function(gn, gN) {
                this['kh']['push']({
                    'e$': zL['BLOCKS_MESH'],
                    'j': gn,
                    'Y': gN
                });
            }
            ,
            gY['Oh'] = function() {
                return this['kh']['length'];
            }
            ,
            gY['qh'] = function() {
                return this['Mh'];
            }
            ,
            gD;
        }())
          , zx = z2(0x97ed)
          , zF = function(gD, gY, gn) {
            return (gD + 0x80 & 0xff) << 0x10 | (gY + 0x80 & 0xff) << 0x8 | gn + 0x80 & 0xff;
        }
          , zV = function(gD, gY, gn) {
            return gD + ':' + gY + ':' + gn;
        }
          , zk = (function() {
            function gD(gn, gN, gX, gB) {
                if (this['Lh'] = gn,
                this['Yh'] = gN,
                this['Eh'] = gX,
                this['Hh'] = zF(this['Yh']['x'], this['Yh']['y'], this['Yh']['z']),
                gB)
                    this['Qh'] = gB;
                else {
                    this['Qh'] = new Uint8Array(z8['Z']['Sr']);
                    for (var gr = 0x0; gr < z8['Z']['Sr']; gr++)
                        this['Qh'][gr] = zx['k']['_h'];
                }
                this['Wh'] = !0x1,
                this['Eh'] > 0x0 && this['Zh'](!0x1);
            }
            var gY = gD['prototype'];
            return gY['Kh'] = function() {
                return this['Hh'];
            }
            ,
            gY['bn'] = function(gn, gN, gX) {
                return this['Qh'][gn * z8['Z']['Er'] * z8['Z']['Er'] + gN * z8['Z']['Er'] + gX];
            }
            ,
            gY['On'] = function(gn, gN, gX, gB) {
                var gr = this['bn'](gn, gN, gX);
                this['Qh'][gn * z8['Z']['Er'] * z8['Z']['Er'] + gN * z8['Z']['Er'] + gX] = gB,
                gr !== gB && this['Zh'](!0x0),
                gr === zx['k']['_h'] && gB !== zx['k']['_h'] ? ++this['Eh'] : gr !== zx['k']['_h'] && gB === zx['k']['_h'] && --this['Eh'];
            }
            ,
            gY['pe'] = function(gn, gN, gX) {
                return (0x0,
                zg['XX'])(this['Yh']['x'] * z8['Z']['Er'] + gn, this['Yh']['y'] * z8['Z']['Er'] + gN, this['Yh']['z'] * z8['Z']['Er'] + gX);
            }
            ,
            gY['Ze'] = function() {
                return 0x0 === this['Eh'];
            }
            ,
            gY['Zh'] = function(gn) {
                this['Wh'] || (this['Lh']['br'](this['Lh']['tx']() + 0x1),
                this['Wh'] = !0x0,
                gn ? this['Lh']['ix'](this) : this['Lh']['sx'](this));
            }
            ,
            gY['hx'] = function() {
                this['Wh'] && (this['Lh']['br'](this['Lh']['tx']() - 0x1),
                this['Wh'] = !0x1);
            }
            ,
            gY['nx'] = function() {
                return this['Qh'];
            }
            ,
            gY['xx'] = function() {
                return this['Yh'];
            }
            ,
            gD;
        }())
          , zD = z2(0xa888)
          , zY = (function() {
            function gD(gY) {
                this['_dirVector'] = gY;
            }
            return (0x0,
            zD['Z'])(gD, [{
                'key': 'dir',
                'get': function() {
                    return (0x0,
                    zg['dg'])(this['_dirVector']);
                }
            }], [{
                'key': 'immediateNeighbors',
                'get': function() {
                    return [gD['UP'], gD['DOWN'], gD['FRONT'], gD['BACK'], gD['RIGHT'], gD['LEFT']];
                }
            }, {
                'key': 'secondaryNeighbors',
                'get': function() {
                    return [gD['UP_LEFT'], gD['UP_RIGHT'], gD['UP_FRONT'], gD['UP_BACK'], gD['DOWN_LEFT'], gD['DOWN_RIGHT'], gD['DOWN_FRONT'], gD['DOWN_BACK'], gD['LEFT_FRONT'], gD['FRONT_RIGHT'], gD['RIGHT_BACK'], gD['BACK_LEFT']];
                }
            }, {
                'key': 'tertiaryNeighbors',
                'get': function() {
                    return [gD['RIGHT_UP_BACK'], gD['RIGHT_UP_FRONT'], gD['RIGHT_DOWN_BACK'], gD['RIGHT_DOWN_FRONT'], gD['LEFT_UP_BACK'], gD['LEFT_UP_FRONT'], gD['LEFT_DOWN_BACK'], gD['LEFT_DOWN_FRONT']];
                }
            }, {
                'key': 'values',
                'get': function() {
                    return [gD['UP'], gD['DOWN'], gD['FRONT'], gD['BACK'], gD['RIGHT'], gD['LEFT'], gD['UP_LEFT'], gD['UP_RIGHT'], gD['UP_FRONT'], gD['UP_BACK'], gD['DOWN_LEFT'], gD['DOWN_RIGHT'], gD['DOWN_FRONT'], gD['DOWN_BACK'], gD['LEFT_FRONT'], gD['FRONT_RIGHT'], gD['RIGHT_BACK'], gD['BACK_LEFT'], gD['RIGHT_UP_BACK'], gD['RIGHT_UP_FRONT'], gD['RIGHT_DOWN_BACK'], gD['RIGHT_DOWN_FRONT'], gD['LEFT_UP_BACK'], gD['LEFT_UP_FRONT'], gD['LEFT_DOWN_BACK'], gD['LEFT_DOWN_FRONT']];
                }
            }]),
            gD;
        }());
        zY['UP'] = new zY((0x0,
        zg['XX'])(0x0, 0x1, 0x0)),
        zY['DOWN'] = new zY((0x0,
        zg['XX'])(0x0, -0x1, 0x0)),
        zY['FRONT'] = new zY((0x0,
        zg['XX'])(0x0, 0x0, 0x1)),
        zY['BACK'] = new zY((0x0,
        zg['XX'])(0x0, 0x0, -0x1)),
        zY['LEFT'] = new zY((0x0,
        zg['XX'])(0x1, 0x0, 0x0)),
        zY['RIGHT'] = new zY((0x0,
        zg['XX'])(-0x1, 0x0, 0x0)),
        zY['UP_LEFT'] = new zY((0x0,
        zg['XX'])(0x1, 0x1, 0x0)),
        zY['UP_RIGHT'] = new zY((0x0,
        zg['XX'])(-0x1, 0x1, 0x0)),
        zY['UP_FRONT'] = new zY((0x0,
        zg['XX'])(0x0, 0x1, 0x1)),
        zY['UP_BACK'] = new zY((0x0,
        zg['XX'])(0x0, 0x1, -0x1)),
        zY['DOWN_LEFT'] = new zY((0x0,
        zg['XX'])(0x1, -0x1, 0x0)),
        zY['DOWN_RIGHT'] = new zY((0x0,
        zg['XX'])(-0x1, -0x1, 0x0)),
        zY['DOWN_FRONT'] = new zY((0x0,
        zg['XX'])(0x0, -0x1, 0x1)),
        zY['DOWN_BACK'] = new zY((0x0,
        zg['XX'])(0x0, -0x1, -0x1)),
        zY['LEFT_FRONT'] = new zY((0x0,
        zg['XX'])(0x1, 0x0, 0x1)),
        zY['FRONT_RIGHT'] = new zY((0x0,
        zg['XX'])(-0x1, 0x0, 0x1)),
        zY['RIGHT_BACK'] = new zY((0x0,
        zg['XX'])(-0x1, 0x0, -0x1)),
        zY['BACK_LEFT'] = new zY((0x0,
        zg['XX'])(0x1, 0x0, -0x1)),
        zY['RIGHT_UP_BACK'] = new zY((0x0,
        zg['XX'])(-0x1, 0x1, -0x1)),
        zY['RIGHT_UP_FRONT'] = new zY((0x0,
        zg['XX'])(-0x1, 0x1, 0x1)),
        zY['RIGHT_DOWN_BACK'] = new zY((0x0,
        zg['XX'])(-0x1, -0x1, -0x1)),
        zY['RIGHT_DOWN_FRONT'] = new zY((0x0,
        zg['XX'])(-0x1, -0x1, 0x1)),
        zY['LEFT_UP_BACK'] = new zY((0x0,
        zg['XX'])(0x1, 0x1, -0x1)),
        zY['LEFT_UP_FRONT'] = new zY((0x0,
        zg['XX'])(0x1, 0x1, 0x1)),
        zY['LEFT_DOWN_BACK'] = new zY((0x0,
        zg['XX'])(0x1, -0x1, -0x1)),
        zY['LEFT_DOWN_FRONT'] = new zY((0x0,
        zg['XX'])(0x1, -0x1, 0x1));
        var zn = (function() {
            function gD() {
                this['ox'] = new Set(),
                this['ux'] = void 0x0,
                this['Ax'] = void 0x0;
            }
            var gY = gD['prototype'];
            return gY['vx'] = function(gn) {
                if (!this['ox']['has'](gn)) {
                    this['ox']['add'](gn);
                    var gN = {
                        'lx': gn,
                        'yx': void 0x0
                    };
                    void 0x0 === this['ux'] ? this['ux'] = this['Ax'] = gN : (this['Ax']['yx'] = gN,
                    this['Ax'] = gN);
                }
            }
            ,
            gY['Gx'] = function() {
                if (void 0x0 !== this['ux']) {
                    if (this['ux'] === this['Ax']) {
                        var gn = this['ux']['lx'];
                        return this['ox']['delete'](gn),
                        this['ux'] = this['Ax'] = void 0x0,
                        gn;
                    }
                    var gN = this['ux']['lx'];
                    return this['ox']['delete'](gN),
                    this['ux'] = this['ux']['yx'],
                    gN;
                }
            }
            ,
            gY['wx'] = function(gn) {
                if (!this['ox']['has'](gn)) {
                    this['ox']['add'](gn);
                    var gN = {
                        'lx': gn,
                        'yx': void 0x0
                    };
                    void 0x0 === this['ux'] ? this['ux'] = this['Ax'] = gN : (gN['yx'] = this['ux'],
                    this['ux'] = gN);
                }
            }
            ,
            gD;
        }());
        function zN(gD, gY) {
            var gn = 'undefined' != typeof Symbol && gD[Symbol['iterator']] || gD['@@iterator'];
            if (gn)
                return (gn = gn['call'](gD))['next']['bind'](gn);
            if (Array['isArray'](gD) || (gn = function(gX, gB) {
                if (!gX)
                    return;
                if ('string' == typeof gX)
                    return zX(gX, gB);
                var gr = Object['prototype']['toString']['call'](gX)['slice'](0x8, -0x1);
                'Object' === gr && gX['constructor'] && (gr = gX['constructor']['name']);
                if ('Map' === gr || 'Set' === gr)
                    return Array['from'](gX);
                if ('Arguments' === gr || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/['test'](gr))
                    return zX(gX, gB);
            }(gD)) || gY && gD && 'number' == typeof gD['length']) {
                gn && (gD = gn);
                var gN = 0x0;
                return function() {
                    return gN >= gD['length'] ? {
                        'done': !0x0
                    } : {
                        'done': !0x1,
                        'value': gD[gN++]
                    };
                }
                ;
            }
            throw new TypeError('Invalid\x20attempt\x20to\x20iterate\x20non-iterable\x20instance.\x0aIn\x20order\x20to\x20be\x20iterable,\x20non-array\x20objects\x20must\x20have\x20a\x20[Symbol.iterator]()\x20method.');
        }
        function zX(gD, gY) {
            (null == gY || gY > gD['length']) && (gY = gD['length']);
            for (var gn = 0x0, gN = new Array(gY); gn < gY; gn++)
                gN[gn] = gD[gn];
            return gN;
        }
        var zB = (function() {
            function gD(gn, gN) {
                this['mx'] = gn,
                this['zx'] = gN,
                this['gx'] = new Map(),
                this['$x'] = 0x0,
                this['bx'] = new zn();
            }
            var gY = gD['prototype'];
            return gY['kx'] = function() {
                return this['mx'];
            }
            ,
            gY['Rx'] = function() {
                return this['zx'];
            }
            ,
            gY['Sx'] = function() {
                return this['gx'];
            }
            ,
            gY['sx'] = function(gn) {
                this['bx']['vx'](gn['Kh']());
            }
            ,
            gY['ix'] = function(gn) {
                this['bx']['wx'](gn['Kh']());
            }
            ,
            gY['Mx'] = function() {
                for (var gn = this['bx']['Gx'](); void 0x0 !== gn; ) {
                    var gN = this['gx']['get'](gn);
                    if (void 0x0 !== gN)
                        return gN;
                    gn = this['bx']['Gx']();
                }
            }
            ,
            gY['br'] = function(gn) {
                this['$x'] = gn;
            }
            ,
            gY['tx'] = function() {
                return this['$x'];
            }
            ,
            gY['xx'] = function(gn, gN, gX) {
                return (0x0,
                zg['XX'])(Math['floor'](gn / z8['Z']['Er']), Math['floor'](gN / z8['Z']['Er']), Math['floor'](gX / z8['Z']['Er']));
            }
            ,
            gY['Cx'] = function(gn, gN, gX) {
                return (0x0,
                zg['XX'])(0x0 | (0x0,
                zI['wQ'])(gn, z8['Z']['Er']), 0x0 | (0x0,
                zI['wQ'])(gN, z8['Z']['Er']), 0x0 | (0x0,
                zI['wQ'])(gX, z8['Z']['Er']));
            }
            ,
            gY['Jx'] = function(gn, gN, gX) {
                return (0x0,
                zg['XX'])(Math['floor'](gn), Math['floor'](gN), Math['floor'](gX));
            }
            ,
            gY['jx'] = function(gn, gN, gX) {
                return (0x0,
                zg['XX'])((Math['floor'](gn) + 0.5) * z8['Z']['Ir'], (Math['floor'](gN) + 0.5) * z8['Z']['Ir'], (Math['floor'](gX) + 0.5) * z8['Z']['Ir']);
            }
            ,
            gY['Px'] = function(gn, gN, gX) {
                return gn >= this['mx']['x'] && gN >= this['mx']['y'] && gX >= this['mx']['z'] && gn <= this['zx']['x'] && gN <= this['zx']['y'] && gX <= this['zx']['z'];
            }
            ,
            gY['Nh'] = function(gn, gN, gX) {
                return this['gx']['has'](zF(gn, gN, gX));
            }
            ,
            gY['Ux'] = function(gn, gN, gX) {
                return this['gx']['get'](zF(gn, gN, gX));
            }
            ,
            gY['Nx'] = function(gn, gN, gX, gB, gr) {
                var gl = new zk(this,(0x0,
                zg['XX'])(gn, gN, gX),gB,gr);
                return this['gx']['set'](gl['Kh'](), gl),
                this['Xx'](gn, gN, gX, !0x1),
                gl;
            }
            ,
            gY['Tx'] = function(gn, gN, gX) {
                this['Nh'](gn, gN, gX) && (this['Ux'](gn, gN, gX)['hx'](),
                this['gx']['delete'](zF(gn, gN, gX)));
            }
            ,
            gY['Ix'] = function(gn, gN, gX) {
                var gB = this['xx'](gn, gN, gX);
                if (!this['Nh'](gB['x'], gB['y'], gB['z']))
                    return zx['k']['_h'];
                var gr = this['Ux'](gB['x'], gB['y'], gB['z'])
                  , gl = this['Cx'](gn, gN, gX);
                return gr['bn'](gl['x'], gl['y'], gl['z']);
            }
            ,
            gY['Fx'] = function(gn, gN, gX, gB) {
                var gr = this['xx'](gn, gN, gX);
                if (this['Nh'](gr['x'], gr['y'], gr['z'])) {
                    var gl = this['Ux'](gr['x'], gr['y'], gr['z'])
                      , gd = this['Cx'](gn, gN, gX);
                    gl['On'](gd['x'], gd['y'], gd['z'], gB);
                    for (var gC, gO = zN(zY['values']); !(gC = gO())['done']; ) {
                        var gp = gC['value'];
                        (0x1 === gp['dir']['x'] && gd['x'] === z8['Z']['Er'] - 0x1 || -0x1 === gp['dir']['x'] && 0x0 === gd['x'] || 0x0 === gp['dir']['x']) && (0x1 === gp['dir']['y'] && gd['y'] === z8['Z']['Er'] - 0x1 || -0x1 === gp['dir']['y'] && 0x0 === gd['y'] || 0x0 === gp['dir']['y']) && (0x1 === gp['dir']['z'] && gd['z'] === z8['Z']['Er'] - 0x1 || -0x1 === gp['dir']['z'] && 0x0 === gd['z'] || 0x0 === gp['dir']['z']) && this['Bx'](gr['x'], gr['y'], gr['z'], gp['dir']['x'], gp['dir']['y'], gp['dir']['z'], !0x0);
                    }
                }
            }
            ,
            gY['Ox'] = function(gn, gN, gX, gB) {
                this['Nh'](gn, gN, gX) && this['Ux'](gn, gN, gX)['Zh'](gB);
            }
            ,
            gY['Bx'] = function(gn, gN, gX, gB, gr, gl, gd) {
                this['Ox'](gn + gB, gN + gr, gX + gl, gd);
            }
            ,
            gY['Xx'] = function(gn, gN, gX, gB) {
                for (var gr, gl = zN(zY['values']); !(gr = gl())['done']; ) {
                    var gd = gr['value'];
                    this['Bx'](gn, gN, gX, gd['dir']['x'], gd['dir']['y'], gd['dir']['z'], gB);
                }
            }
            ,
            gD;
        }())
          , zr = (function() {
            function gD(gn, gN, gX, gB) {
                this['qx'] = gn,
                this['Lh'] = gN,
                this['Lx'] = gX,
                this['$h'] = gB,
                this['Yx'] = 0x0,
                this['Ex'] = -0x1;
            }
            var gY = gD['prototype'];
            return gY['Ph'] = function() {
                this['Hx'] && (this['$h']['Qx']()['remove'](this['Hx']),
                this['Hx']['geometry']['dispose'](),
                this['Hx'] = void 0x0),
                this['_x'] && (this['$h']['Qx']()['remove'](this['_x']),
                this['_x']['geometry']['dispose'](),
                this['_x'] = void 0x0);
            }
            ,
            gY['Wx'] = function(gn, gN, gX) {
                gn < this['Ex'] || (this['Ex'] = gn,
                this['Ph'](),
                gN && (this['Hx'] = gN,
                this['Hx']['scale']['set'](z8['Z']['Ir'], z8['Z']['Ir'], z8['Z']['Ir']),
                this['Hx']['position']['set'](this['Lx']['xx']()['x'] * (z8['Z']['Er'] * z8['Z']['Ir']), this['Lx']['xx']()['y'] * (z8['Z']['Er'] * z8['Z']['Ir']), this['Lx']['xx']()['z'] * (z8['Z']['Er'] * z8['Z']['Ir'])),
                this['Hx']['matrixAutoUpdate'] = !0x1,
                this['Hx']['updateMatrix'](),
                this['$h']['Qx']()['add'](this['Hx'])),
                gX && (this['_x'] = gX,
                this['_x']['scale']['set'](z8['Z']['Ir'], z8['Z']['Ir'], z8['Z']['Ir']),
                this['_x']['position']['set'](this['Lx']['xx']()['x'] * (z8['Z']['Er'] * z8['Z']['Ir']), this['Lx']['xx']()['y'] * (z8['Z']['Er'] * z8['Z']['Ir']), this['Lx']['xx']()['z'] * (z8['Z']['Er'] * z8['Z']['Ir'])),
                this['_x']['matrixAutoUpdate'] = !0x1,
                this['_x']['updateMatrix'](),
                this['$h']['Qx']()['add'](this['_x'])));
            }
            ,
            gY['Kx'] = function(gn) {
                if (this['Lx']['Ze']())
                    this['Ph']();
                else {
                    for (var gN = [], gX = [], gB = [], gr = [], gl = [], gd = [], gC = this['Lh']['Nh'](this['Lx']['xx']()['x'] + 0x1, this['Lx']['xx']()['y'], this['Lx']['xx']()['z']), gO = this['Lh']['Ux'](this['Lx']['xx']()['x'] + 0x1, this['Lx']['xx']()['y'], this['Lx']['xx']()['z']), gp = this['Lh']['Nh'](this['Lx']['xx']()['x'] - 0x1, this['Lx']['xx']()['y'], this['Lx']['xx']()['z']), gW = this['Lh']['Ux'](this['Lx']['xx']()['x'] - 0x1, this['Lx']['xx']()['y'], this['Lx']['xx']()['z']), gq = this['Lh']['Nh'](this['Lx']['xx']()['x'], this['Lx']['xx']()['y'] + 0x1, this['Lx']['xx']()['z']), gc = this['Lh']['Ux'](this['Lx']['xx']()['x'], this['Lx']['xx']()['y'] + 0x1, this['Lx']['xx']()['z']), gu = this['Lh']['Nh'](this['Lx']['xx']()['x'], this['Lx']['xx']()['y'] - 0x1, this['Lx']['xx']()['z']), gT = this['Lh']['Ux'](this['Lx']['xx']()['x'], this['Lx']['xx']()['y'] - 0x1, this['Lx']['xx']()['z']), gw = this['Lh']['Nh'](this['Lx']['xx']()['x'], this['Lx']['xx']()['y'], this['Lx']['xx']()['z'] + 0x1), gE = this['Lh']['Ux'](this['Lx']['xx']()['x'], this['Lx']['xx']()['y'], this['Lx']['xx']()['z'] + 0x1), gm = this['Lh']['Nh'](this['Lx']['xx']()['x'], this['Lx']['xx']()['y'], this['Lx']['xx']()['z'] - 0x1), ga = this['Lh']['Ux'](this['Lx']['xx']()['x'], this['Lx']['xx']()['y'], this['Lx']['xx']()['z'] - 0x1), gZ = this['Lx']['pe'](z8['Z']['Er'], z8['Z']['Er'], z8['Z']['Er']), gK = this['Lh']['Ix'](gZ['x'], gZ['y'], gZ['z']), gH = this['Lx']['pe'](-0x1, z8['Z']['Er'], z8['Z']['Er']), gM = this['Lh']['Ix'](gH['x'], gH['y'], gH['z']), gv = this['Lx']['pe'](z8['Z']['Er'], z8['Z']['Er'], -0x1), P0 = this['Lh']['Ix'](gv['x'], gv['y'], gv['z']), P1 = this['Lx']['pe'](-0x1, z8['Z']['Er'], -0x1), P2 = this['Lh']['Ix'](P1['x'], P1['y'], P1['z']), P3 = this['Lx']['pe'](z8['Z']['Er'], -0x1, z8['Z']['Er']), P4 = this['Lh']['Ix'](P3['x'], P3['y'], P3['z']), P5 = this['Lx']['pe'](-0x1, -0x1, z8['Z']['Er']), P6 = this['Lh']['Ix'](P5['x'], P5['y'], P5['z']), P7 = this['Lx']['pe'](z8['Z']['Er'], -0x1, -0x1), P8 = this['Lh']['Ix'](P7['x'], P7['y'], P7['z']), P9 = this['Lx']['pe'](-0x1, -0x1, -0x1), Pz = this['Lh']['Ix'](P9['x'], P9['y'], P9['z']), PA = [], PG = [], Pe = [], Pg = [], PP = [], Pj = [], Po = [], PI = [], PJ = [], Py = [], PR = [], PS = [], PQ = this['Lh']['Nh'](this['Lx']['xx']()['x'] + 0x1, this['Lx']['xx']()['y'], this['Lx']['xx']()['z'] + 0x1), PL = this['Lh']['Ux'](this['Lx']['xx']()['x'] + 0x1, this['Lx']['xx']()['y'], this['Lx']['xx']()['z'] + 0x1), PU = this['Lh']['Nh'](this['Lx']['xx']()['x'] - 0x1, this['Lx']['xx']()['y'], this['Lx']['xx']()['z'] + 0x1), Pb = this['Lh']['Ux'](this['Lx']['xx']()['x'] - 0x1, this['Lx']['xx']()['y'], this['Lx']['xx']()['z'] + 0x1), Pf = this['Lh']['Nh'](this['Lx']['xx']()['x'] + 0x1, this['Lx']['xx']()['y'], this['Lx']['xx']()['z'] - 0x1), Px = this['Lh']['Ux'](this['Lx']['xx']()['x'] + 0x1, this['Lx']['xx']()['y'], this['Lx']['xx']()['z'] - 0x1), PF = this['Lh']['Nh'](this['Lx']['xx']()['x'] - 0x1, this['Lx']['xx']()['y'], this['Lx']['xx']()['z'] - 0x1), PV = this['Lh']['Ux'](this['Lx']['xx']()['x'] - 0x1, this['Lx']['xx']()['y'], this['Lx']['xx']()['z'] - 0x1), Pk = this['Lh']['Nh'](this['Lx']['xx']()['x'], this['Lx']['xx']()['y'] + 0x1, this['Lx']['xx']()['z'] + 0x1), PD = this['Lh']['Ux'](this['Lx']['xx']()['x'], this['Lx']['xx']()['y'] + 0x1, this['Lx']['xx']()['z'] + 0x1), PY = this['Lh']['Nh'](this['Lx']['xx']()['x'], this['Lx']['xx']()['y'] + 0x1, this['Lx']['xx']()['z'] - 0x1), Pn = this['Lh']['Ux'](this['Lx']['xx']()['x'], this['Lx']['xx']()['y'] + 0x1, this['Lx']['xx']()['z'] - 0x1), PN = this['Lh']['Nh'](this['Lx']['xx']()['x'] + 0x1, this['Lx']['xx']()['y'] + 0x1, this['Lx']['xx']()['z']), PX = this['Lh']['Ux'](this['Lx']['xx']()['x'] + 0x1, this['Lx']['xx']()['y'] + 0x1, this['Lx']['xx']()['z']), PB = this['Lh']['Nh'](this['Lx']['xx']()['x'] - 0x1, this['Lx']['xx']()['y'] + 0x1, this['Lx']['xx']()['z']), Pr = this['Lh']['Ux'](this['Lx']['xx']()['x'] - 0x1, this['Lx']['xx']()['y'] + 0x1, this['Lx']['xx']()['z']), Pl = this['Lh']['Nh'](this['Lx']['xx']()['x'], this['Lx']['xx']()['y'] - 0x1, this['Lx']['xx']()['z'] + 0x1), Pd = this['Lh']['Ux'](this['Lx']['xx']()['x'], this['Lx']['xx']()['y'] - 0x1, this['Lx']['xx']()['z'] + 0x1), PC = this['Lh']['Nh'](this['Lx']['xx']()['x'], this['Lx']['xx']()['y'] - 0x1, this['Lx']['xx']()['z'] - 0x1), PO = this['Lh']['Ux'](this['Lx']['xx']()['x'], this['Lx']['xx']()['y'] - 0x1, this['Lx']['xx']()['z'] - 0x1), Pp = this['Lh']['Nh'](this['Lx']['xx']()['x'] + 0x1, this['Lx']['xx']()['y'] - 0x1, this['Lx']['xx']()['z']), PW = this['Lh']['Ux'](this['Lx']['xx']()['x'] + 0x1, this['Lx']['xx']()['y'] - 0x1, this['Lx']['xx']()['z']), Pq = this['Lh']['Nh'](this['Lx']['xx']()['x'] - 0x1, this['Lx']['xx']()['y'] - 0x1, this['Lx']['xx']()['z']), Pc = this['Lh']['Ux'](this['Lx']['xx']()['x'] - 0x1, this['Lx']['xx']()['y'] - 0x1, this['Lx']['xx']()['z']), Pu = 0x0; Pu < z8['Z']['Er']; Pu++) {
                        gN[Pu] = [],
                        gX[Pu] = [],
                        gB[Pu] = [],
                        gr[Pu] = [],
                        gl[Pu] = [],
                        gd[Pu] = [];
                        for (var PT = 0x0; PT < z8['Z']['Er']; PT++)
                            gN[Pu][PT] = gC ? gO['bn'](0x0, Pu, PT) : zx['k']['_h'],
                            gX[Pu][PT] = gp ? gW['bn'](z8['Z']['Er'] - 0x1, Pu, PT) : zx['k']['_h'],
                            gB[Pu][PT] = gq ? gc['bn'](Pu, 0x0, PT) : zx['k']['_h'],
                            gr[Pu][PT] = gu ? gT['bn'](Pu, z8['Z']['Er'] - 0x1, PT) : zx['k']['_h'],
                            gl[Pu][PT] = gw ? gE['bn'](Pu, PT, 0x0) : zx['k']['_h'],
                            gd[Pu][PT] = gm ? ga['bn'](Pu, PT, z8['Z']['Er'] - 0x1) : zx['k']['_h'];
                        PA[Pu] = PQ ? PL['bn'](0x0, Pu, 0x0) : zx['k']['_h'],
                        PG[Pu] = PU ? Pb['bn'](z8['Z']['Er'] - 0x1, Pu, 0x0) : zx['k']['_h'],
                        Pe[Pu] = Pf ? Px['bn'](0x0, Pu, z8['Z']['Er'] - 0x1) : zx['k']['_h'],
                        Pg[Pu] = PF ? PV['bn'](z8['Z']['Er'] - 0x1, Pu, z8['Z']['Er'] - 0x1) : zx['k']['_h'],
                        PP[Pu] = Pk ? PD['bn'](Pu, 0x0, 0x0) : zx['k']['_h'],
                        Pj[Pu] = PY ? Pn['bn'](Pu, 0x0, z8['Z']['Er'] - 0x1) : zx['k']['_h'],
                        Po[Pu] = PN ? PX['bn'](0x0, 0x0, Pu) : zx['k']['_h'],
                        PI[Pu] = PB ? Pr['bn'](z8['Z']['Er'] - 0x1, 0x0, Pu) : zx['k']['_h'],
                        PJ[Pu] = Pl ? Pd['bn'](Pu, z8['Z']['Er'] - 0x1, 0x0) : zx['k']['_h'],
                        Py[Pu] = PC ? PO['bn'](Pu, z8['Z']['Er'] - 0x1, z8['Z']['Er'] - 0x1) : zx['k']['_h'],
                        PR[Pu] = Pp ? PW['bn'](0x0, z8['Z']['Er'] - 0x1, Pu) : zx['k']['_h'],
                        PS[Pu] = Pq ? Pc['bn'](z8['Z']['Er'] - 0x1, z8['Z']['Er'] - 0x1, Pu) : zx['k']['_h'];
                    }
                    this['qx']['Ih'](++this['Yx'], this['Lx']['xx'](), this['Lx']['nx'](), gB, gr, gN, gX, gl, gd, gK, gM, P0, P2, P4, P6, P8, Pz, PA, PG, Pe, Pg, PP, Pj, Po, PI, PJ, Py, PR, PS, gn);
                }
            }
            ,
            gD;
        }())
          , zl = (function() {
            function gD(gn) {
                var gN = this;
                this['bs'] = function(gX, gB) {
                    for (var gr = 0x0; gr < gN['io']['length']; gr++) {
                        var gl = gN['io'][gr]
                          , gd = gl['no']['position'];
                        gl['no']['position']['set'](gd['x'], gd['y'] - 0x2 * gX, gd['z']);
                        var gC = new z7['Pa4'](0x1,0x0,0x1);
                        gC['normalize'](),
                        gl['no']['rotateOnAxis'](gC, 1.5 * gX),
                        gl['no']['position']['y'] < gl['do'] - 0x5 * z8['Z']['Ir'] && (gN['$h']['Lo']()['Ss']()['remove'](gl['no']),
                        gl['no']['geometry']['dispose'](),
                        gN['io'][gr] = gN['io'][gN['io']['length'] - 0x1],
                        gN['io']['pop'](),
                        --gr);
                    }
                }
                ,
                this['$h'] = gn,
                this['io'] = [];
            }
            var gY = gD['prototype'];
            return gY['eu'] = function(gn) {
                this['io']['push']({
                    'no': gn,
                    'do': gn['position']['y']
                }),
                this['$h']['Lo']()['Ss']()['add'](gn);
            }
            ,
            gY['Ph'] = function() {
                for (var gn = 0x0; gn < this['io']['length']; gn++) {
                    var gN = this['io'][gn];
                    gN['no']['geometry']['dispose'](),
                    this['$h']['Lo']()['Ss']()['remove'](gN['no']);
                }
            }
            ,
            gD;
        }())
          , zd = z2(0x13dd)
          , zC = z2(0x1661b)
          , zO = (function() {
            function gD(gn) {
                var gN = this;
                this['bs'] = function(gd, gC) {}
                ,
                this['yh'] = function(gd) {
                    for (var gC = Date['now'](), gO = 0x0, gp = Object['entries'](gN['tA']); gO < gp['length']; gO++) {
                        var gW = gp[gO]
                          , gq = gW[0x0]
                          , gc = gW[0x1];
                        if (gC - gc['iA'] >= 0xbb8) {
                            if (gc['bi'] = Math['max'](0x0, gc['bi'] - (0x0,
                            zC['Gc'])(0x1) / 0x4),
                            gc['bi'] <= 0x0)
                                gN['sA'](gq);
                            else {
                                var gu = zd['Z'][gN['$h']['Xh']()['Ix'](gc['hA']['x'], gc['hA']['y'], gc['hA']['z'])]['v'];
                                gc['nA'] >= 0x0 && gc['nA'] < z8['Z']['Ar'] && (gc['eA'] = Math['max'](0x0, Math['min'](0x1, gc['bi'] / gu)),
                                gN['rA']['set']([gc['eA']], gc['nA']),
                                gN['rA']['needsUpdate'] = !0x0);
                            }
                        }
                    }
                }
                ,
                this['$h'] = gn,
                this['tA'] = {},
                this['xA'] = [];
                for (var gX = new z7['nvb'](z8['Z']['Ir'],z8['Z']['Ir'],z8['Z']['Ir']), gB = new z7['vBJ']({
                    'transparent': !0x0,
                    'map': z9['Z']['Dh'](),
                    'blending': z7['M5h'],
                    'fog': !0x1
                }), gr = [], gl = 0x0; gl < z8['Z']['Ar']; gl++)
                    gr['push'](0x0);
                this['rA'] = new z7['lb7'](new Float32Array(gr),0x1),
                gX['setAttribute']('instanceCrack', this['rA']),
                gB['onBeforeCompile'] = function(gd) {
                    gd['vertexShader'] = gd['vertexShader']['replace']('#include\x20<common>', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20attribute\x20float\x20instanceCrack;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20float\x20vInstanceCrack;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#include\x20<common>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20')['replace']('#include\x20<begin_vertex>', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#include\x20<begin_vertex>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vInstanceCrack\x20=\x20instanceCrack;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'),
                    gd['fragmentShader'] = gd['fragmentShader']['replace']('#include\x20<common>', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20float\x20vInstanceCrack;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#include\x20<common>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20')['replace']('#include\x20<map_fragment>', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20atlasDim\x20=\x20' + z8['Z']['ur']['toFixed'](0x1) + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20rawUv\x20=\x20vec2(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20fract(vUv.x)\x20/\x20atlasDim,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20fract(vUv.y)\x20/\x20atlasDim\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20crackU\x20=\x20floor(vInstanceCrack\x20*\x205.0)\x20/\x20atlasDim;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20crackV\x20=\x207.0\x20/\x20atlasDim;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20crackTexture\x20=\x20sRGBToLinear(texture2D(map,\x20vec2(rawUv.x\x20+\x20crackU,\x20rawUv.y\x20+\x20crackV)));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20identity\x20=\x20vec4(1.0,\x201.0,\x201.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20hasPixel\x20=\x20step(0.5,\x20crackTexture.a);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20crackTexture\x20=\x20(1.0\x20-\x20hasPixel)\x20*\x20identity\x20+\x20hasPixel\x20*\x20crackTexture;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20diffuseColor\x20=\x20crackTexture;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20');
                }
                ,
                this['oA'] = new z7['SPe'](gX,gB,z8['Z']['Ar']),
                this['$h']['Lo']()['Ss']()['add'](this['oA']),
                this['oA']['count'] = this['xA']['length'],
                this['aA'] = new z7['Tme'](),
                this['aA']['scale']['set'](1.002, 1.002, 1.002);
            }
            var gY = gD['prototype'];
            return gY['uA'] = function(gn, gN, gX, gB, gr) {
                var gl = (0x0,
                zg['XX'])(gn, gN, gX)
                  , gd = zV(gn, gN, gX)
                  , gC = zd['Z'][this['$h']['Xh']()['Ix'](gl['x'], gl['y'], gl['z'])]['v'];
                gB = Math['min'](gC, gB);
                var gO = Math['max'](0x0, Math['min'](gB / gC))
                  , gp = this['AA'](gn, gN, gX) / gC;
                if (gd in this['tA'])
                    this['tA'][gd]['bi'] = gB,
                    this['tA'][gd]['eA'] = gO,
                    this['tA'][gd]['iA'] = Date['now']();
                else {
                    var gW = this['xA']['length']
                      , gq = {
                        'bi': gB,
                        'eA': gO,
                        'iA': Date['now'](),
                        'hA': gl,
                        'nA': gW
                    };
                    if (this['tA'][gd] = gq,
                    this['xA']['push'](gq),
                    gW >= 0x0 && gW < z8['Z']['Ar']) {
                        var gc = this['$h']['Xh']()['jx'](gn, gN, gX);
                        this['aA']['position']['set'](gc['x'], gc['y'], gc['z']),
                        this['aA']['updateMatrix'](),
                        this['oA']['setMatrixAt'](gW, this['aA']['matrix']),
                        this['oA']['count'] = Math['min'](z8['Z']['Ar'], this['xA']['length']),
                        this['oA']['instanceMatrix']['needsUpdate'] = !0x0;
                    }
                }
                var gu = gO;
                if (this['tA'][gd]['nA'] >= 0x0 && this['tA'][gd]['nA'] < z8['Z']['Ar'] && (this['rA']['set']([gO], this['tA'][gd]['nA']),
                this['rA']['needsUpdate'] = !0x0),
                this['tA'][gd]['bi'] >= gC)
                    gr && this['$h']['Lo']()['vA']()['cA']()['fA'](gl['x'], gl['y'], gl['z'], zx['k']['_h']),
                    this['sA'](gd);
                else {
                    if (gr) {
                        if (gp < gu && Math['floor'](gp / 0.2) !== Math['floor'](gu / 0.2)) {
                            var gT = this['$h']['Xh']()['Ix'](gn, gN, gX)
                              , gw = this['$h']['Xh']()['jx'](gn, gN, gX)
                              , gE = zd['Z'][gT]['q'];
                            void 0x0 !== gE && this['$h']['Lo']()['vA']()['lA'](gw, gE, -0x4b0, 0x1, 0x28 * z8['Z']['Ir'], 0x5 * z8['Z']['Ir'], 0x4);
                        }
                    }
                }
            }
            ,
            gY['yA'] = function(gn, gN, gX) {
                var gB = zV(gn, gN, gX);
                this['sA'](gB);
            }
            ,
            gY['sA'] = function(gn) {
                if (gn in this['tA']) {
                    if (this['xA']['length'] > 0x1) {
                        var gN = this['tA'][gn]
                          , gX = this['xA'][this['xA']['length'] - 0x1];
                        if (this['xA'][gN['nA']] = gX,
                        gX['nA'] = gN['nA'],
                        gX['nA'] >= 0x0 && gX['nA'] < z8['Z']['Ar']) {
                            var gB = this['$h']['Xh']()['jx'](gX['hA']['x'], gX['hA']['y'], gX['hA']['z']);
                            this['aA']['position']['set'](gB['x'], gB['y'], gB['z']),
                            this['aA']['updateMatrix'](),
                            this['oA']['setMatrixAt'](gX['nA'], this['aA']['matrix']),
                            this['rA']['set']([gX['eA']], gX['nA']),
                            this['rA']['needsUpdate'] = !0x0;
                        }
                    }
                    delete this['tA'][gn],
                    this['xA']['pop'](),
                    this['oA']['count'] = Math['min'](z8['Z']['Ar'], this['xA']['length']),
                    this['oA']['instanceMatrix']['needsUpdate'] = !0x0;
                }
            }
            ,
            gY['AA'] = function(gn, gN, gX) {
                var gB = zV(gn, gN, gX);
                return gB in this['tA'] ? this['tA'][gB]['bi'] : 0x0;
            }
            ,
            gY['GA'] = function(gn, gN, gX, gB, gr) {
                this['uA'](gn, gN, gX, this['AA'](gn, gN, gX) + gB, gr);
            }
            ,
            gY['Ph'] = function() {}
            ,
            gD;
        }())
          , zp = z2(0x919b);
        function zW(gD, gY) {
            var gn = 'undefined' != typeof Symbol && gD[Symbol['iterator']] || gD['@@iterator'];
            if (gn)
                return (gn = gn['call'](gD))['next']['bind'](gn);
            if (Array['isArray'](gD) || (gn = function(gX, gB) {
                if (!gX)
                    return;
                if ('string' == typeof gX)
                    return zq(gX, gB);
                var gr = Object['prototype']['toString']['call'](gX)['slice'](0x8, -0x1);
                'Object' === gr && gX['constructor'] && (gr = gX['constructor']['name']);
                if ('Map' === gr || 'Set' === gr)
                    return Array['from'](gX);
                if ('Arguments' === gr || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/['test'](gr))
                    return zq(gX, gB);
            }(gD)) || gY && gD && 'number' == typeof gD['length']) {
                gn && (gD = gn);
                var gN = 0x0;
                return function() {
                    return gN >= gD['length'] ? {
                        'done': !0x0
                    } : {
                        'done': !0x1,
                        'value': gD[gN++]
                    };
                }
                ;
            }
            throw new TypeError('Invalid\x20attempt\x20to\x20iterate\x20non-iterable\x20instance.\x0aIn\x20order\x20to\x20be\x20iterable,\x20non-array\x20objects\x20must\x20have\x20a\x20[Symbol.iterator]()\x20method.');
        }
        function zq(gD, gY) {
            (null == gY || gY > gD['length']) && (gY = gD['length']);
            for (var gn = 0x0, gN = new Array(gY); gn < gY; gn++)
                gN[gn] = gD[gn];
            return gN;
        }
        var zc = (function() {
            function gD(gn, gN, gX, gB) {
                var gr = this;
                this['dA'] = function(gl, gd, gC, gO) {
                    gr['wA']['yA'](gl, gd, gC);
                }
                ,
                this['pA'] = function(gl, gd, gC, gO) {
                    gr['wA']['uA'](gl, gd, gC, gO, !0x0);
                }
                ,
                this['Nx'] = function(gl, gd, gC, gO, gp) {
                    if (!gr['Lh']['Nh'](gl, gd, gC)) {
                        var gW = gr['Lh']['Nx'](gl, gd, gC, gO, gp)
                          , gq = new zr(gr['qx'],gr['Lh'],gW,gr);
                        gr['mA']['set'](zF(gl, gd, gC), gq);
                    }
                }
                ,
                this['zA'] = function(gl, gd, gC) {
                    if (gr['Lh']['Nh'](gl, gd, gC)) {
                        var gO = zF(gl, gd, gC);
                        gr['Lh']['Tx'](gl, gd, gC),
                        gr['mA']['get'](gO)['Ph'](),
                        gr['mA']['delete'](gO);
                    }
                }
                ,
                this['gA'] = function(gl, gd, gC, gO, gp, gW, gq) {
                    gr['Lh'] = new zB(gW,gq),
                    gr['$A']();
                }
                ,
                this['$A'] = function() {
                    var gl = 0x46 * (gr['Lh']['Rx']()['y'] - gr['Lh']['kx']()['y']);
                    if ((0x0,
                    zP['Fn'])() === zp['V4']['li']) {
                        var gd = Math['min'](0x1, Math['max'](0x0, gr['Lh']['Sx']()['size'] / gl)) / 0x2;
                        gd >= 0.5 && (gr['bA'] = gr['Lh']['tx']()),
                        zA['Z']['emit'](zG['x']['kA'], gd >= 0.5 ? zp['V4']['Me'] : zp['V4']['li'], gd),
                        setTimeout(gr['$A'], 0x64);
                    } else {
                        for (var gC = 0x0, gO = void 0x0; void 0x0 !== (gO = gr['Lh']['Mx']()); )
                            if (gr['mA']['get'](gO['Kh']())['Kx'](!0x1),
                            gO['hx'](),
                            ++gC >= 0x14 || 0x0 === gr['Lh']['tx']()) {
                                var gp = Math['max'](0x0, Math['min'](0x1, 0x1 - gr['Lh']['tx']() / gr['bA'])) / 0x2 + 0.5;
                                zA['Z']['emit'](zG['x']['kA'], zp['V4']['Me'], gp);
                                break;
                            }
                        gr['Lh']['tx']() > 0x0 && setTimeout(gr['$A'], 0x0);
                    }
                }
                ,
                this['yh'] = function(gl) {
                    gr['Lh'] && ((0x0,
                    zP['aw'])() >= 0x1 && (gr['RA'](),
                    gr['qx']['Uh']()),
                    gr['SA']['Es'] = gr['Lh']['Sx']()['size'],
                    gr['wA']['yh'](gl));
                }
                ,
                this['bs'] = function(gl, gd) {
                    gr['MA']['bs'](gl, gd),
                    gr['qx']['bs'](gl, gd);
                }
                ,
                this['DA'] = gn,
                this['hs'] = gN,
                this['CA'] = gX,
                this['SA'] = gB,
                this['JA'] = new z7['Tme'](),
                this['mA'] = new Map(),
                this['qx'] = new zf(this,Math['min'](0x3, z8['Z']['$r'])),
                this['MA'] = new zl(this),
                this['wA'] = new zO(this),
                this['bA'] = 0x0,
                this['jA']();
            }
            var gY = gD['prototype'];
            return gY['Xh'] = function() {
                return this['Lh'];
            }
            ,
            gY['jA'] = function() {
                zA['Z']['on'](zG['x']['PA'], this['gA']),
                zA['Z']['on'](zG['x']['UA'], this['Nx']),
                zA['Z']['on'](zG['x']['NA'], this['zA']),
                zA['Z']['on'](zG['x']['XA'], this['pA']),
                zA['Z']['on'](zG['x']['VA'], this['dA']);
            }
            ,
            gY['TA'] = function() {
                zA['Z']['off'](zG['x']['PA'], this['gA']),
                zA['Z']['off'](zG['x']['UA'], this['Nx']),
                zA['Z']['off'](zG['x']['NA'], this['zA']),
                zA['Z']['off'](zG['x']['XA'], this['pA']),
                zA['Z']['off'](zG['x']['VA'], this['dA']);
            }
            ,
            gY['Ph'] = function() {
                this['TA']();
                for (var gn, gN = zW(this['mA']); !(gn = gN())['done']; ) {
                    var gX = gn['value'];
                    gX[0x0],
                    gX[0x1]['Ph']();
                }
                this['qx']['Ph'](),
                this['MA']['Ph']();
            }
            ,
            gY['Th'] = function(gn, gN, gX, gB, gr, gl) {
                var gd = zF(gN, gX, gB);
                this['mA']['has'](gd) && this['mA']['get'](gd)['Wx'](gn, gr, gl);
            }
            ,
            gY['jh'] = function(gn, gN) {
                this['MA']['eu'](gN);
            }
            ,
            gY['RA'] = function() {
                var gn = 0x0;
                if (this['Lh']['tx']() > 0x0) {
                    for (var gN = void 0x0; void 0x0 !== (gN = this['Lh']['Mx']()) && (this['mA']['get'](gN['Kh']())['Kx'](!0x0),
                    gN['hx'](),
                    !(++gn >= 0x2)); )
                        ;
                }
            }
            ,
            gY['Fx'] = function(gn, gN, gX, gB, gr) {
                var gl = this['Lh']['Ix'](gn, gN, gX);
                if (this['Lh']['Fx'](gn, gN, gX, gB),
                gr && gl !== gB) {
                    var gd = this['Lh']['jx'](gn, gN, gX)
                      , gC = zd['Z'][gB]['q'];
                    gB === zx['k']['_h'] && (gC = zd['Z'][gl]['q']),
                    void 0x0 !== gC && this['CA']['vA']()['lA'](gd, gC, 0x0, 0x1, 0x28 * z8['Z']['Ir'], 0x5 * z8['Z']['Ir'], 0x4);
                }
            }
            ,
            gY['Qx'] = function() {
                return this['JA'];
            }
            ,
            gY['Lo'] = function() {
                return this['CA'];
            }
            ,
            gY['IA'] = function() {
                return this['qx'];
            }
            ,
            gY['FA'] = function() {
                return this['wA'];
            }
            ,
            gD;
        }())
          , zu = z2(0x12a90)
          , zT = z2(0x1182)
          , zw = z2(0x52c2)
          , zE = z2['n'](zw)
          , zm = z2(0x367b)
          , za = z2(0x15854)
          , zZ = (function() {
            function gD() {
                var gn = this;
                this['BA'] = function() {
                    gn['qA'] = {},
                    gn['LA'] = {};
                }
                ,
                this['YA'] = function(gN) {
                    (0x0,
                    zP['D2'])() || (gN['deltaX'] > 0x0 || gN['deltaY'] > 0x0 ? gn['EA'] = !0x0 : (gN['deltaX'] < 0x0 || gN['deltaY'] < 0x0) && (gn['HA'] = !0x0));
                }
                ,
                this['QA'] = function(gN) {
                    gn['_A'](-gN['button']);
                }
                ,
                this['WA'] = function(gN) {
                    gn['ZA'](-gN['button']);
                }
                ,
                this['KA'] = function(gN) {
                    gn['_A'](gN['keyCode']);
                }
                ,
                this['tf'] = function(gN) {
                    gn['ZA'](gN['keyCode']);
                }
                ,
                this['qA'] = {},
                this['LA'] = {},
                this['EA'] = !0x1,
                this['HA'] = !0x1,
                this['jA']();
            }
            var gY = gD['prototype'];
            return gY['jA'] = function() {
                document['addEventListener']('keydown', this['KA'], !0x1),
                document['addEventListener']('keyup', this['tf'], !0x1),
                document['addEventListener']('mousedown', this['QA'], !0x1),
                document['addEventListener']('mouseup', this['WA'], !0x1),
                document['addEventListener']('wheel', this['YA'], !0x1),
                window['addEventListener']('blur', this['BA'], !0x1);
            }
            ,
            gY['TA'] = function() {
                document['removeEventListener']('keydown', this['KA'], !0x1),
                document['removeEventListener']('keyup', this['tf'], !0x1),
                document['removeEventListener']('mousedown', this['QA'], !0x1),
                document['removeEventListener']('mouseup', this['WA'], !0x1),
                document['removeEventListener']('wheel', this['YA'], !0x1),
                window['removeEventListener']('blur', this['BA'], !0x1);
            }
            ,
            gY['Ph'] = function() {
                this['TA']();
            }
            ,
            gY['_A'] = function(gn) {
                this['nc'](gn) || (zA['Z']['emit'](zG['x']['ah'], gn),
                this['LA'][gn] = !0x0),
                this['qA'][gn] = !0x0;
            }
            ,
            gY['ZA'] = function(gn) {
                delete this['qA'][gn],
                delete this['LA'][gn];
            }
            ,
            gY['tv'] = function(gn) {
                return this['nc'](gn);
            }
            ,
            gY['iv'] = function(gn) {
                return !((0x0,
                zP['D2'])() || (0x0,
                zP['bt'])() || (0x0,
                zP['s9'])()) && this['nc'](gn);
            }
            ,
            gY['sv'] = function(gn) {
                return !(0x0,
                zP['D2'])() && !(0x0,
                zP['bt'])() && this['nc'](gn);
            }
            ,
            gY['hv'] = function(gn) {
                return !(0x0,
                zP['D2'])() && !(0x0,
                zP['bt'])() && this['nv'](gn);
            }
            ,
            gY['nc'] = function(gn) {
                return !0x0 === this['qA'][gn];
            }
            ,
            gY['nv'] = function(gn) {
                var gN = this['LA'][gn];
                return delete this['LA'][gn],
                gN;
            }
            ,
            gY['ev'] = function() {
                return !((0x0,
                zP['D2'])() || (0x0,
                zP['bt'])() || (0x0,
                zP['s9'])()) && this['rv']();
            }
            ,
            gY['xv'] = function() {
                return !((0x0,
                zP['D2'])() || (0x0,
                zP['bt'])() || (0x0,
                zP['s9'])()) && this['ov']();
            }
            ,
            gY['rv'] = function() {
                var gn = this['EA'];
                return this['EA'] = !0x1,
                gn;
            }
            ,
            gY['ov'] = function() {
                var gn = this['HA'];
                return this['HA'] = !0x1,
                gn;
            }
            ,
            gD;
        }())
          , zK = z2(0xa1ae)
          , zH = z2(0xca09)
          , zM = z2(0x28b8)
          , zv = function(gD) {
            function gY(gN, gX, gB, gr, gl) {
                var gd;
                return (gd = gD['call'](this) || this)['av'] = function(gC) {
                    gd['uv'] = gC;
                }
                ,
                gd['Av'] = function(gC, gO, gp) {
                    gd['fv'] = gC,
                    gd['cv'] = gO,
                    gd['vv'] = gp,
                    gd['lv'] = Date['now']();
                }
                ,
                gd['yv'] = function() {
                    gd['Gv'] = 0x0,
                    gd['dv'] = 0x0,
                    gd['wv'] = !0x0,
                    gd['pv'] = 0x0,
                    gd['uv'] = 0x1,
                    gd['fv'] = 0x0,
                    gd['cv'] = 0x0,
                    gd['vv'] = 0x0,
                    gd['lv'] = Date['now']();
                }
                ,
                gd['bs'] = function(gC, gO) {
                    if (0x0 === gd['Gv']) {
                        gd['mv']['x'] -= gd['zv']['y'],
                        gd['mv']['y'] -= gd['zv']['x'],
                        gd['mv']['x'] = Math['max'](Math['PI'] / 0x2 - gd['gv'], Math['min'](Math['PI'] / 0x2 - gd['$v'], gd['mv']['x'])),
                        Date['now']() - gd['lv'] <= gd['vv'] ? gd['pv'] = Math['max'](0x0, Math['min'](gd['uv'], gd['pv'] + gd['fv'] * gC)) : gd['pv'] = Math['max'](0x0, Math['min'](gd['uv'], gd['pv'] - gd['cv'] * gC));
                        var gp = 0.2
                          , gW = 0.005;
                        gd['pv'] === gd['uv'] ? (gd['wv'] ? gd['dv'] = Math['min'](gW, gd['dv'] + gp * gC) : gd['dv'] = Math['max'](-0.005, gd['dv'] - gp * gC),
                        Math['abs'](gd['dv']) === gW && (gd['wv'] = !gd['wv'])) : (gd['dv'] <= 0x0 ? gd['dv'] = Math['min'](0x0, gd['dv'] + gp * gC) : gd['dv'] = Math['max'](0x0, gd['dv'] - gp * gC),
                        gd['wv'] = !0x0),
                        gd['bv']();
                    } else
                        0x1 === gd['Gv'] && (gd['kv']['setFromVector3'](gd['Rv']),
                        gd['kv']['theta'] -= gd['zv']['x'],
                        gd['kv']['phi'] -= gd['zv']['y'],
                        gd['kv']['makeSafe'](),
                        gd['kv']['radius'] = gd['Sv'],
                        gd['Rv']['setFromSpherical'](gd['kv']),
                        gd['hs']['position']['copy'](gd['Dv']['position'])['add'](gd['Rv']),
                        gd['hs']['lookAt'](gd['Dv']['position']));
                    gd['zv']['set'](0x0, 0x0);
                }
                ,
                gd['bv'] = function() {
                    gd['Cv']['x'] = gd['mv']['x'] + gd['pv'] + gd['dv'],
                    gd['Cv']['y'] = gd['mv']['y'],
                    gd['hs']['quaternion']['setFromEuler'](gd['Cv']),
                    gd['Jv']['quaternion']['setFromEuler'](gd['Cv']);
                }
                ,
                gd['jv'] = function(gC) {
                    if (gd['Pv']) {
                        if (gd['Uv'])
                            gd['Uv'] = !0x1;
                        else {
                            var gO = gC['movementX'] || gC['mozMovementX'] || gC['webkitMovementX'] || 0x0
                              , gp = gC['movementY'] || gC['mozMovementY'] || gC['webkitMovementY'] || 0x0;
                            gd['xt']['Nv'] && (gp *= -0x1);
                            var gW = 0.0002
                              , gq = (0x0,
                            zm['MH'])(gd['Vv']['Xv'](), gd['Vv']['Tv']());
                            gq && (0x0,
                            zM['jf'])(gd['Vv']['Tv']()['qo']['Bv']()['Fv']()['Iv']()) ? gW *= gd['xt']['Ov'] : gq && (gW *= gd['xt']['qv']),
                            gd['zv']['x'] += gO * gd['xt']['Lv'] * gW,
                            gd['zv']['y'] += gp * gd['xt']['Lv'] * gW,
                            gd['dispatchEvent'](gd['Yv']);
                        }
                    }
                }
                ,
                gd['Ev'] = function() {
                    gd['Hv']['ownerDocument']['pointerLockElement'] === gd['Hv'] ? (gd['dispatchEvent'](gd['Qv']),
                    gd['Pv'] = !0x0) : (gd['dispatchEvent'](gd['_v']),
                    gd['Pv'] = !0x1);
                }
                ,
                gd['Wv'] = function(gC) {
                    console['error']('THREE.PointerLockControls:\x20Unable\x20to\x20use\x20Pointer\x20Lock\x20API');
                }
                ,
                gd['Zv'] = function() {
                    gd['Hv']['ownerDocument']['addEventListener']('mousemove', gd['jv'], !0x1),
                    gd['Hv']['ownerDocument']['addEventListener']('pointerlockchange', gd['Ev'], !0x1),
                    gd['Hv']['ownerDocument']['addEventListener']('pointerlockerror', gd['Wv'], !0x1),
                    zA['Z']['on'](zG['x']['Kv'], gd['tl']);
                }
                ,
                gd['il'] = function() {
                    gd['Hv']['ownerDocument']['removeEventListener']('mousemove', gd['jv'], !0x1),
                    gd['Hv']['ownerDocument']['removeEventListener']('pointerlockchange', gd['Ev'], !0x1),
                    gd['Hv']['ownerDocument']['removeEventListener']('pointerlockerror', gd['Wv'], !0x1),
                    zA['Z']['off'](zG['x']['Kv'], gd['tl']);
                }
                ,
                gd['tl'] = function() {
                    gd['Uv'] = !0x0;
                }
                ,
                gd['sl'] = function() {
                    gd['il']();
                }
                ,
                gd['Qx'] = function() {
                    return gd['hs'];
                }
                ,
                gd['hl'] = function(gC) {
                    return gC['set'](0x0, 0x0, -0x1)['applyQuaternion'](gd['hs']['quaternion']);
                }
                ,
                gd['nl'] = function(gC) {
                    gd['el']['setFromMatrixColumn'](gd['hs']['matrix'], 0x0),
                    gd['el']['crossVectors'](gd['hs']['up'], gd['el']),
                    gd['hs']['position']['addScaledVector'](gd['el'], gC);
                }
                ,
                gd['rl'] = function(gC) {
                    gd['el']['setFromMatrixColumn'](gd['hs']['matrix'], 0x0),
                    gd['hs']['position']['addScaledVector'](gd['el'], gC);
                }
                ,
                gd['xl'] = function() {
                    gd['ol']() && gd['Hv']['requestPointerLock']();
                }
                ,
                gd['al'] = function() {
                    gd['ol']() && gd['Hv']['ownerDocument']['exitPointerLock']();
                }
                ,
                gd['ol'] = function() {
                    return 'pointerLockElement'in document || 'mozPointerLockElement'in document || 'webkitPointerLockElement'in document;
                }
                ,
                gd['xt'] = gN,
                gd['hs'] = gX,
                gd['Jv'] = gB,
                gd['Hv'] = gr,
                gd['Vv'] = gl,
                gd['Pv'] = !0x1,
                gd['$v'] = 0x0,
                gd['gv'] = Math['PI'],
                gd['Yv'] = {
                    'type': 'change'
                },
                gd['Qv'] = {
                    'type': 'lock'
                },
                gd['_v'] = {
                    'type': 'unlock'
                },
                gd['Cv'] = new z7['USm'](0x0,0x0,0x0,'YXZ'),
                gd['mv'] = new z7['USm'](0x0,0x0,0x0,'YXZ'),
                gd['dv'] = 0x0,
                gd['wv'] = !0x0,
                gd['pv'] = 0x0,
                gd['uv'] = 0x1,
                gd['fv'] = 0x0,
                gd['cv'] = 0x0,
                gd['vv'] = 0x0,
                gd['lv'] = Date['now'](),
                gd['el'] = new z7['Pa4'](),
                gd['Gv'] = 0x0,
                gd['zv'] = new z7['FM8'](0x0,0x0),
                gd['kv'] = new z7['$V'](),
                gd['Dv'] = void 0x0,
                gd['Sv'] = 0x0,
                gd['Rv'] = new z7['Pa4'](0x0,0x0,0x0),
                gd['Uv'] = !0x1,
                gd['Zv'](),
                gd;
            }
            (0x0,
            zH['Z'])(gY, gD);
            var gn = gY['prototype'];
            return gn['ul'] = function(gN, gX, gB) {
                this['yv'](),
                this['Gv'] = 0x1,
                this['Dv'] = gN,
                this['Sv'] = gX,
                void 0x0 !== gB && this['Rv']['set'](gB['x'], gB['y'], gB['z']);
            }
            ,
            gn['Al'] = function(gN) {
                this['yv'](),
                this['Dv'] = void 0x0,
                this['Sv'] = 0x0,
                this['mv']['x'] = gN['x'],
                this['mv']['y'] = gN['y'];
            }
            ,
            gn['fl'] = function() {
                return this['Pv'];
            }
            ,
            gn['cl'] = function() {
                return this['mv'];
            }
            ,
            gY;
        }(z7['pBf'])
          , A0 = z2(0x1532c)
          , A1 = z2(0x184e3)
          , A2 = z2(0x17a74)
          , A3 = z2(0x93f9)
          , A4 = z2(0x4119)
          , A5 = function() {
            this['walkedDistFromLastSoundPlayed'] = 0x0,
            this['prevWaterSoundPlayedTime'] = 0x0,
            this['swamDistFromLastSoundPlayed'] = 0x0;
        }
          , A6 = function(gD, gY, gn, gN, gX, gB, gr) {
            var gl = gr ? gB['vl']['bind'](gB) : function(gT, gw) {
                gB['ll'](gD, gT, gw);
            }
              , gd = gr ? gB['yl']['bind'](gB) : function(gT, gw, gE) {
                gB['lA'](gD, gT, gw, gE);
            }
            ;
            void 0x0 === gN['prevOnGround'] && (gN['prevOnGround'] = gn),
            void 0x0 === gN['prevPos'] && (gN['prevPos'] = (0x0,
            zg['dg'])(gD));
            var gC = gX['Ix'](gN['prevPos']['x'] / z8['Z']['Ir'], gN['prevPos']['y'] / z8['Z']['Ir'], gN['prevPos']['z'] / z8['Z']['Ir'])
              , gO = gX['Ix'](gD['x'] / z8['Z']['Ir'], gD['y'] / z8['Z']['Ir'], gD['z'] / z8['Z']['Ir'])
              , gp = gX['Ix'](gD['x'] / z8['Z']['Ir'], (gD['y'] + z8['Z']['Ir']) / z8['Z']['Ir'], gD['z'] / z8['Z']['Ir'])
              , gW = gX['Ix'](gD['x'] / z8['Z']['Ir'], (gD['y'] + 0x2 * z8['Z']['Ir']) / z8['Z']['Ir'], gD['z'] / z8['Z']['Ir']);
            if ((0x0,
            zb['PP'])(gO))
                gN['walkedDistFromLastSoundPlayed'] = 0x0,
                (0x0,
                zb['PP'])(gC) ? !(0x0,
                zb['PP'])(gO) || (0x0,
                zb['PP'])(gp) && (0x0,
                zb['PP'])(gW) || (gN['swamDistFromLastSoundPlayed'] += (0x0,
                zg['qR'])(gD, gN['prevPos']),
                gN['swamDistFromLastSoundPlayed'] >= 0x4 && (gd(A4['k']['Gl'], 0x960 * Math['random']() - 0x4b0, 0.2),
                gN['swamDistFromLastSoundPlayed'] = 0x0)) : (Date['now']() - gN['prevWaterSoundPlayedTime'] < 0x3e8 ? gd(A4['k']['dl'], 0x320, 0.1) : gd(A4['k']['dl']),
                gN['prevWaterSoundPlayedTime'] = Date['now']());
            else {
                if (gY !== zT['b']['wl']) {
                    gN['swamDistFromLastSoundPlayed'] = 0x0;
                    var gq = (0x0,
                    zm['hO'])(gD, gX)
                      , gc = zd['Z'][gq]['q']
                      , gu = 0x3e8;
                    gq !== zx['k']['pl'] && gq !== zx['k']['ml'] || (gu = 0x0),
                    void 0x0 !== gc && (!gN['prevOnGround'] && gn ? (gl(gc, gu),
                    gN['walkedDistFromLastSoundPlayed'] = 0x0) : gn && gN['prevOnGround'] && (gN['walkedDistFromLastSoundPlayed'] += (0x0,
                    zg['qR'])(gD, gN['prevPos']),
                    gN['walkedDistFromLastSoundPlayed'] >= 1.5 && (gl(gc, gu),
                    gN['walkedDistFromLastSoundPlayed'] = 0x0)));
                }
            }
            gN['prevPos'] = (0x0,
            zg['dg'])(gD),
            gN['prevOnGround'] = gn;
        }
          , A7 = function(gD, gY, gn, gN) {
            var gX = document['createElement']('canvas')['getContext']('2d')
              , gB = gY + 'px\x20Arial';
            gX['font'] = gB;
            var gr = gX['measureText'](gD)['width'] + 0x4
              , gl = gY + 0x4;
            gX['canvas']['width'] = gr,
            gX['canvas']['height'] = gl,
            gX['font'] = gB,
            gX['textBaseline'] = 'top',
            gX['fillStyle'] = 'rgba(0,\x200,\x200,\x200)',
            gX['fillRect'](0x0, 0x0, gr, gl),
            gX['fillStyle'] = gn,
            gX['fillText'](gD, 0x2, 0x2);
            var gd = new z7['ROQ'](gX['canvas']);
            gd['encoding'] = z7['knz'],
            gd['minFilter'] = z7['wem'],
            gd['wrapS'] = z7['uWy'],
            gd['wrapT'] = z7['uWy'];
            var gC = new z7['xeV']({
                'map': gd,
                'transparent': !0x0,
                'depthWrite': !0x1,
                'fog': !0x1
            })
              , gO = new z7['jyi'](gC)
              , gp = 0.2 * gN;
            return gO['scale']['set'](gr / gl * 0x1 * gp, 0x1 * gp, 0x1),
            gO['renderOrder'] = -0x1,
            gO;
        }
          , A8 = z2(0x2259)
          , A9 = z2(0x62db)
          , Az = z2(0xe8f)
          , AA = z2(0x1597a)
          , AG = 0x0
          , Ae = 0x1
          , Ag = 0x2
          , AP = 0x3
          , Aj = z2(0x1483d)
          , Ao = z2(0x125dd)
          , AI = z2(0x1f63);
        function AJ(gD, gY) {
            var gn = 'undefined' != typeof Symbol && gD[Symbol['iterator']] || gD['@@iterator'];
            if (gn)
                return (gn = gn['call'](gD))['next']['bind'](gn);
            if (Array['isArray'](gD) || (gn = function(gX, gB) {
                if (!gX)
                    return;
                if ('string' == typeof gX)
                    return Ay(gX, gB);
                var gr = Object['prototype']['toString']['call'](gX)['slice'](0x8, -0x1);
                'Object' === gr && gX['constructor'] && (gr = gX['constructor']['name']);
                if ('Map' === gr || 'Set' === gr)
                    return Array['from'](gX);
                if ('Arguments' === gr || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/['test'](gr))
                    return Ay(gX, gB);
            }(gD)) || gY && gD && 'number' == typeof gD['length']) {
                gn && (gD = gn);
                var gN = 0x0;
                return function() {
                    return gN >= gD['length'] ? {
                        'done': !0x0
                    } : {
                        'done': !0x1,
                        'value': gD[gN++]
                    };
                }
                ;
            }
            throw new TypeError('Invalid\x20attempt\x20to\x20iterate\x20non-iterable\x20instance.\x0aIn\x20order\x20to\x20be\x20iterable,\x20non-array\x20objects\x20must\x20have\x20a\x20[Symbol.iterator]()\x20method.');
        }
        function Ay(gD, gY) {
            (null == gY || gY > gD['length']) && (gY = gD['length']);
            for (var gn = 0x0, gN = new Array(gY); gn < gY; gn++)
                gN[gn] = gD[gn];
            return gN;
        }
        var AR = function(gD) {
            function gY(gN, gX) {
                var gB;
                return (gB = gD['call'](this, gX, A9['p']['zl'], gN) || this)['yh'] = function(gr) {
                    gB['gl'] && A6(gB['Qx']()['position'], gB['$l'], gB['kl'], gB['Rl'], gB['Ml']()['Lo']()['Sl']()['Xh'](), gB['Ml']()['Lo']()['vA'](), !0x1);
                }
                ,
                gB['Dl'] = z9['Z']['Cl'](Aj['E']['Jl']),
                z9['Z']['jl'](gB['Dl']),
                gB['Qx']()['add'](gB['Dl']),
                gB['Dl']['visible'] = !0x1,
                gB['Dl']['matrixAutoUpdate'] = !0x1,
                gB['Pl'] = '',
                gB['Ul'] = 'white',
                gB['Nl'] = AA['C']['fn'],
                gB['Xl'] = Ao['Z']['NONE'],
                gB['Vl'] = 0x0,
                gB['Tl'] = 0x0,
                gB['Il'] = [],
                gB['Fl'] = [],
                gB['$l'] = zT['b']['Bl'],
                gB['Ol'] = (0x0,
                za['Ak'])(0x0, 0x0),
                gB['ql'] = !0x1,
                gB['Ll'] = !0x1,
                gB['Yl'] = 0x0,
                gB['El'] = z9['Z']['Hl'](),
                gB['El']['matrixAutoUpdate'] = !0x1,
                gB['Qx']()['add'](gB['El']),
                gB['Ql'] = new z7['Xcj'](gB['El']),
                gB['El']['traverse'](function(gr) {
                    gr['material'] && (gB['Il']['push'](gr['material']),
                    gr['material']['fog'] = !0x1);
                }),
                gB['_l'] = gB['Ql']['clipAction'](z9['Z']['Wl']()),
                gB['Zl'] = gB['Ql']['clipAction'](z9['Z']['Kl']()),
                gB['ty'] = gB['Ql']['clipAction'](z9['Z']['iy']()),
                gB['hy'] = gB['Ql']['clipAction'](z9['Z']['ey']()),
                gB['xy'] = gB['Ql']['clipAction'](z9['Z']['oy']()),
                gB['uy'] = gB['Ql']['clipAction'](z9['Z']['Ay']()),
                gB['vy'] = gB['Ql']['clipAction'](z9['Z']['yy']()),
                gB['Gy'] = gB['Ql']['clipAction'](z9['Z']['wy']()),
                gB['py'] = gB['Ql']['clipAction'](z9['Z']['my']()),
                gB['zy'] = gB['Ql']['clipAction'](z9['Z']['gy']()),
                gB['$y'] = gB['Ql']['clipAction'](z9['Z']['by']()),
                gB['ky'] = gB['Ql']['clipAction'](z9['Z']['Ry']()),
                gB['Sy'] = gB['Ql']['clipAction'](z9['Z']['My']()),
                gB['Dy'] = gB['Ql']['clipAction'](z9['Z']['Cy']()),
                gB['Jy'] = gB['Ql']['clipAction'](z9['Z']['jy']()),
                gB['Py'] = gB['Ql']['clipAction'](z9['Z']['Uy']()),
                gB['Xy'] = gB['Ql']['clipAction'](z9['Z']['Vy']()),
                gB['Ty'] = gB['Ql']['clipAction'](z9['Z']['Iy']()),
                gB['Fy'] = gB['Ql']['clipAction'](z9['Z']['By']()),
                gB['Oy'] = gB['Ql']['clipAction'](z9['Z']['qy']()),
                gB['Ly'] = gB['Ql']['clipAction'](z9['Z']['Yy']()),
                gB['Ey'] = gB['Ql']['clipAction'](z9['Z']['Hy']()),
                gB['Qy'] = gB['Ql']['clipAction'](z9['Z']['Wy']()),
                gB['uy']['setEffectiveWeight'](0x0),
                gB['vy']['setEffectiveWeight'](0x0),
                gB['Gy']['setEffectiveWeight'](0x0),
                gB['py']['setEffectiveWeight'](0x0),
                gB['zy']['setEffectiveWeight'](0x0),
                gB['$y']['setEffectiveWeight'](0x0),
                gB['hy']['setEffectiveTimeScale'](0x2),
                gB['xy']['setEffectiveTimeScale'](0x1),
                gB['ky']['setEffectiveWeight'](0x0),
                gB['Sy']['setEffectiveWeight'](0x0),
                gB['Dy']['setEffectiveWeight'](0x0),
                gB['Jy']['setEffectiveWeight'](0x0),
                gB['Py']['setEffectiveWeight'](0x0),
                gB['Xy']['setEffectiveWeight'](0x0),
                gB['Ty']['setEffectiveWeight'](0x0),
                gB['Fy']['setEffectiveWeight'](0x0),
                gB['Oy']['setEffectiveWeight'](0x0),
                gB['Ly']['setEffectiveWeight'](0x0),
                gB['Ey']['setEffectiveWeight'](0x0),
                gB['Qy']['setEffectiveWeight'](0x0),
                gB['uy']['play'](),
                gB['vy']['play'](),
                gB['Gy']['play'](),
                gB['py']['play'](),
                gB['zy']['play'](),
                gB['$y']['play'](),
                gB['ky']['play'](),
                gB['Sy']['play'](),
                gB['Dy']['play'](),
                gB['Jy']['play'](),
                gB['Py']['play'](),
                gB['Xy']['play'](),
                gB['Ty']['play'](),
                gB['Fy']['play'](),
                gB['Oy']['play'](),
                gB['Ly']['play'](),
                gB['Ey']['play'](),
                gB['Qy']['play'](),
                gB['Ty']['paused'] = !0x0,
                gB['Fy']['paused'] = !0x0,
                gB['Oy']['paused'] = !0x0,
                gB['Ly']['paused'] = !0x0,
                gB['Ey']['paused'] = !0x0,
                gB['Qy']['paused'] = !0x0,
                gB['Ty']['setLoop'](z7['jAl'], 0x1),
                gB['Fy']['setLoop'](z7['jAl'], 0x1),
                gB['Oy']['setLoop'](z7['jAl'], 0x1),
                gB['Ly']['setLoop'](z7['jAl'], 0x1),
                gB['Ey']['setLoop'](z7['jAl'], 0x1),
                gB['Qy']['setLoop'](z7['jAl'], 0x1),
                gB['Ty']['clampWhenFinished'] = !0x0,
                gB['Fy']['clampWhenFinished'] = !0x0,
                gB['Oy']['clampWhenFinished'] = !0x0,
                gB['Ly']['clampWhenFinished'] = !0x0,
                gB['Ey']['clampWhenFinished'] = !0x0,
                gB['Qy']['clampWhenFinished'] = !0x0,
                gB['hy']['play'](),
                gB['xy']['stop'](),
                gB['hy']['paused'] = !0x0,
                gB['xy']['paused'] = !0x0,
                gB['Rl'] = new A5(),
                gB['Ky'] = !0x0,
                gB['tG'] = (0x0,
                zM['YJ'])(A3['q']['hn']),
                gB['kl'] = !0x1,
                gB['gl'] = !0x0,
                gB['iG']((0x0,
                zg['XX'])(0x0, -0x270f, 0x0)),
                gB['sG'] = !0x0,
                gB;
            }
            (0x0,
            zH['Z'])(gY, gD);
            var gn = gY['prototype'];
            return gn['hG'] = function() {
                this['nG'] && (this['eG']()['remove'](this['nG']),
                z9['Z']['rG'](this['nG']),
                this['nG'] = void 0x0);
            }
            ,
            gn['Ph'] = function() {
                this['hG'](),
                z9['Z']['xG'](this['El']),
                z9['Z']['xG'](this['Dl']);
                for (var gN = 0x0; gN < this['Fl']['length']; gN++) {
                    var gX = this['Fl'][gN];
                    gX['sprite']['geometry']['dispose'](),
                    gX['sprite']['material']['map']['dispose'](),
                    gX['sprite']['material']['dispose']();
                }
                this['oG'] && (this['oG']['geometry']['dispose'](),
                this['oG']['material']['map']['dispose'](),
                this['oG']['material']['dispose']());
            }
            ,
            gn['bs'] = function(gN, gX) {
                this['ql'] && this['hy']['time'] >= 0.8 && (this['hy']['paused'] = !0x0,
                this['ql'] = !0x1),
                this['Ll'] && this['xy']['time'] >= 0.8 && (this['xy']['paused'] = !0x0,
                this['Ll'] = !0x1),
                0x0 === this['Yl'] && this['Ty']['time'] >= 0x1 / 0x3 && (this['Ty']['paused'] = !0x0,
                this['Fy']['paused'] = !0x0,
                this['Oy']['paused'] = !0x0,
                this['Ly']['paused'] = !0x0,
                this['Ey']['paused'] = !0x0,
                this['Qy']['paused'] = !0x0,
                this['Yl'] = 0x1),
                this['Ql']['update'](gN);
                var gB = Date['now']() - this['Tl']
                  , gr = z8['Z']['Kr']
                  , gl = z8['Z']['Wr'];
                if (gB > gr) {
                    var gd = 0x1 - Math['max'](0x0, (gr + gl - gB) / gl);
                    this['aG'](0x1, gd, gd);
                }
                for (var gC = 0x0; gC < this['Fl']['length']; gC++) {
                    var gO = this['Fl'][gC];
                    gO['sprite']['position']['set'](gO['sprite']['position']['x'] + 0x2 * gO['dir']['x'] * gN, gO['sprite']['position']['y'] + 0x3 * gO['dir']['y'] * gN, gO['sprite']['position']['z'] + 0x2 * gO['dir']['z'] * gN),
                    Date['now']() - gO['spawnTime'] > 0x320 && (this['Qx']()['remove'](gO['sprite']),
                    gO['sprite']['geometry']['dispose'](),
                    gO['sprite']['material']['map']['dispose'](),
                    gO['sprite']['material']['dispose'](),
                    this['Fl'][gC] = this['Fl'][this['Fl']['length'] - 0x1],
                    this['Fl']['pop'](),
                    --gC);
                }
            }
            ,
            gn['uG'] = function() {
                var gN = this['tG']
                  , gX = this['$l'] === zT['b']['wl'] ? z8['Z']['pr'] : z8['Z']['Cr']
                  , gB = (0x0,
                zg['XX'])(this['Qx']()['position']['x'], this['Qx']()['position']['y'] + gX, this['Qx']()['position']['z'])
                  , gr = (0x0,
                za['I$'])(this['Ol']);
                gr['y'] = -gr['y'];
                var gl = (0x0,
                zI['ny'])(gr);
                (0x0,
                zg['$j'])(gB, (0x0,
                zg['XX'])(0x1 * gl['x'], 0x1 * gl['y'], 0x1 * gl['z']));
                for (var gd = 0x0; gd < gN['fG'](); gd++)
                    this['Ml']()['Lo']()['vG']()['cG'](gB, gl, 0x0);
                this['Ml']()['Lo']()['vA']()['lA'](this['Qx']()['position'], gN['lG'](), 0x0, 0x1, 0xc8 * z8['Z']['Ir'], 0x1e * z8['Z']['Ir'], 0xa);
            }
            ,
            gn['yG'] = function() {
                this['Ml']()['Lo']()['vA']()['lA'](this['Qx']()['position'], A4['k']['GG'], 0x0, 0x1, 0x50 * z8['Z']['Ir'], 0x5 * z8['Z']['Ir'], 0x5);
            }
            ,
            gn['dG'] = function() {
                this['Ml']()['Lo']()['vA']()['lA'](this['Qx']()['position'], A4['k']['wG'], 0x0, 0x1, 0x50 * z8['Z']['Ir'], 0x5 * z8['Z']['Ir'], 0x5);
            }
            ,
            gn['pG'] = function(gN, gX, gB) {
                var gr = A7(gN['toString'](), 0x40, gX, gB);
                gr['material']['depthTest'] = !0x1,
                gr['position']['set'](0x0, 0x1, 0x0),
                this['Qx']()['add'](gr);
                var gl = (0x0,
                zg['XX'])(0x2 * Math['random']() - 0x1, 0x2 * Math['random']() + 0x1, 0x2 * Math['random']() - 0x1);
                (0x0,
                zg['cz'])(gl),
                this['Fl']['push']({
                    'sprite': gr,
                    'dir': gl,
                    'spawnTime': Date['now']()
                });
            }
            ,
            gn['mG'] = function(gN) {
                for (var gX, gB = AJ(gN); !(gX = gB())['done']; ) {
                    var gr = gX['value'];
                    switch (gr['zG']) {
                    case Az['m']['gG']:
                        this['$G'](gr['bG']);
                        break;
                    case Az['m']['kG']:
                        this['Ul'] = gr['bG'];
                        break;
                    case Az['m']['SG']:
                        this['MG'](gr['bG']);
                        break;
                    case Az['m']['DG']:
                        this['Xl'] = gr['bG'];
                        break;
                    case Az['m']['CG']:
                        this['Vl'] = gr['bG'];
                        break;
                    case Az['m']['JG']:
                        this['PG'](gr['bG']);
                        break;
                    case Az['m']['UG']:
                        var gl = gr['bG'];
                        this['NG'](0x7 & gl),
                        this['kl'] = (0x8 & gl) > 0x0;
                        break;
                    case Az['m']['XG']:
                        var gd = gr['bG'];
                        this['Qx']()['visible'] = gd,
                        this['sG'] = gd;
                    }
                }
            }
            ,
            gn['VG'] = function(gN) {
                switch (gN) {
                case AG:
                    this['uG']();
                    break;
                case Ae:
                    this['yG']();
                    break;
                case Ag:
                    this['dG']();
                    break;
                case AP:
                    this['tG']['Iv']() === A3['q']['hn'] && this['Ty']['paused'] && (0x1 === this['Yl'] ? this['Yl'] = 0x2 : 0x2 === this['Yl'] && (this['Ty']['reset'](),
                    this['Fy']['reset'](),
                    this['Oy']['reset'](),
                    this['Ly']['reset'](),
                    this['Ey']['reset'](),
                    this['Qy']['reset'](),
                    this['Yl'] = 0x0),
                    this['Ty']['paused'] = !0x1,
                    this['Fy']['paused'] = !0x1,
                    this['Oy']['paused'] = !0x1,
                    this['Ly']['paused'] = !0x1,
                    this['Ey']['paused'] = !0x1,
                    this['Qy']['paused'] = !0x1);
                }
            }
            ,
            gn['iG'] = function(gN) {
                this['setModelPos'](gN),
                this['Qx']()['updateMatrix'](),
                this['El']['updateMatrix'](),
                this['Dl']['updateMatrix']();
            }
            ,
            gn['TG'] = function(gN) {
                this['IG'](gN['x']),
                this['FG'](-gN['y']),
                this['Qx']()['updateMatrix'](),
                this['El']['updateMatrix'](),
                this['Dl']['updateMatrix']();
            }
            ,
            gn['setModelPos'] = function(gN) {
                var gX = (0x0,
                zg['XX'])(this['Qx']()['position']['x'], this['Qx']()['position']['y'], this['Qx']()['position']['z']);
                this['Ky'] && (gX = gN,
                this['Ky'] = !0x1),
                this['Qx']()['position']['set'](gN['x'], gN['y'], gN['z']),
                (gN['x'] - gX['x']) * (gN['x'] - gX['x']) + (gN['z'] - gX['z']) * (gN['z'] - gX['z']) >= 0.0001 ? (this['xy']['paused'] && (this['xy']['paused'] = !0x1),
                this['xy']['setLoop'](z7['YKA'], 0x1 / 0x0),
                this['hy']['paused'] && (this['hy']['paused'] = !0x1),
                this['hy']['setLoop'](z7['YKA'], 0x1 / 0x0)) : (this['xy']['time'] < 0.8 ? this['Ll'] = !0x0 : (this['xy']['setLoop'](z7['jAl'], 0x1),
                this['xy']['clampWhenFinished'] = !0x0),
                this['hy']['time'] < 0.8 ? this['ql'] = !0x0 : (this['hy']['setLoop'](z7['jAl'], 0x1),
                this['hy']['clampWhenFinished'] = !0x0));
            }
            ,
            gn['BG'] = function() {
                this['uy']['setEffectiveWeight'](0x0),
                this['Gy']['setEffectiveWeight'](0x0),
                this['vy']['setEffectiveWeight'](0x0),
                this['py']['setEffectiveWeight'](0x0),
                this['$y']['setEffectiveWeight'](0x0),
                this['zy']['setEffectiveWeight'](0x0),
                this['ky']['setEffectiveWeight'](0x0),
                this['Dy']['setEffectiveWeight'](0x0),
                this['Sy']['setEffectiveWeight'](0x0),
                this['Jy']['setEffectiveWeight'](0x0),
                this['Xy']['setEffectiveWeight'](0x0),
                this['Py']['setEffectiveWeight'](0x0),
                this['Ty']['setEffectiveWeight'](0x0),
                this['Fy']['setEffectiveWeight'](0x0),
                this['Oy']['setEffectiveWeight'](0x0),
                this['Ly']['setEffectiveWeight'](0x0),
                this['Ey']['setEffectiveWeight'](0x0),
                this['Qy']['setEffectiveWeight'](0x0);
                var gN = this['uy']
                  , gX = this['vy']
                  , gB = this['Gy']
                  , gr = this['py']
                  , gl = this['zy']
                  , gd = this['$y'];
                if (this['tG']['OG']() === AI['E']['qG'] ? (gN = this['ky'],
                gX = this['Sy'],
                gB = this['Dy'],
                gr = this['Jy'],
                gl = this['Py'],
                gd = this['Xy']) : this['tG']['OG']() === AI['E']['hn'] && (gN = this['Ty'],
                gX = this['Fy'],
                gB = this['Oy'],
                gr = this['Ly'],
                gl = this['Ey'],
                gd = this['Qy']),
                void 0x0 !== this['nG'] && (this['$l'] === zT['b']['LG'] || this['$l'] === zT['b']['YG'] ? this['nG']['visible'] = !0x1 : this['nG']['visible'] = !0x0),
                this['$l'] === zT['b']['LG']) {
                    var gC = Math['abs'](Math['min'](this['Ol']['x'] / (Math['PI'] / 0x2), 0x0));
                    this['_l']['setEffectiveWeight'](0x1 - gC),
                    this['Zl']['setEffectiveWeight'](gC);
                } else {
                    if (this['$l'] === zT['b']['Bl'] || this['$l'] === zT['b']['EG'] || this['$l'] === zT['b']['wl'] || this['$l'] === zT['b']['HG']) {
                        var gO = Math['abs'](this['Ol']['x'] / (Math['PI'] / 0x2));
                        this['Ol']['x'] <= 0x0 ? this['$l'] === zT['b']['wl'] ? (gr['setEffectiveWeight'](0x1 - gO),
                        gd['setEffectiveWeight'](gO),
                        gl['setEffectiveWeight'](0x0)) : (gN['setEffectiveWeight'](0x1 - gO),
                        gB['setEffectiveWeight'](gO),
                        gX['setEffectiveWeight'](0x0)) : this['$l'] === zT['b']['wl'] ? (gr['setEffectiveWeight'](0x1 - gO),
                        gd['setEffectiveWeight'](0x0),
                        gl['setEffectiveWeight'](gO)) : (gN['setEffectiveWeight'](0x1 - gO),
                        gB['setEffectiveWeight'](0x0),
                        gX['setEffectiveWeight'](gO));
                    }
                }
            }
            ,
            gn['NG'] = function(gN) {
                gN === zT['b']['wl'] && this['$l'] !== zT['b']['wl'] ? (this['Zl']['stop'](),
                this['_l']['stop'](),
                this['ty']['stop'](),
                this['hy']['stop'](),
                this['xy']['reset'](),
                this['xy']['play'](),
                this['xy']['paused'] = !0x0,
                this['Dl']['visible'] = !0x1) : gN !== zT['b']['Bl'] && gN !== zT['b']['EG'] && gN !== zT['b']['HG'] || this['$l'] === zT['b']['Bl'] || this['$l'] === zT['b']['EG'] || this['$l'] === zT['b']['HG'] ? gN === zT['b']['LG'] && this['$l'] !== zT['b']['LG'] ? (this['hy']['stop'](),
                this['xy']['stop'](),
                this['ty']['stop'](),
                this['_l']['play'](),
                this['Zl']['play'](),
                this['Dl']['visible'] = !0x1) : gN === zT['b']['YG'] && this['$l'] !== zT['b']['YG'] && (this['hy']['stop'](),
                this['xy']['stop'](),
                this['_l']['stop'](),
                this['Zl']['stop'](),
                this['ty']['play'](),
                this['Dl']['visible'] = !0x0) : (this['Zl']['stop'](),
                this['_l']['stop'](),
                this['ty']['stop'](),
                this['xy']['stop'](),
                this['hy']['reset'](),
                this['hy']['play'](),
                this['hy']['paused'] = !0x0,
                this['Dl']['visible'] = !0x1),
                this['$l'] = gN,
                this['BG']();
            }
            ,
            gn['QG'] = function() {
                return this['$l'];
            }
            ,
            gn['FG'] = function(gN) {
                this['Ol']['y'] = gN,
                this['El']['rotation']['y'] = gN,
                this['Dl']['rotation']['y'] = -gN;
            }
            ,
            gn['IG'] = function(gN) {
                this['Ol']['x'] = gN,
                this['BG']();
            }
            ,
            gn['eG'] = function() {
                return this['El']['getObjectByName']('Bone_Right_Hand');
            }
            ,
            gn['PG'] = (function() {
                var gN = (0x0,
                z4['Z'])(z6()['mark'](function gX(gB) {
                    var gr, gl;
                    return z6()['wrap'](function(gd) {
                        for (; ; )
                            switch (gd['prev'] = gd['next']) {
                            case 0x0:
                                return (gr = (0x0,
                                zM['YJ'])(gB))['_G'](this['Xl'], this['Vl']),
                                gd['next'] = 0x4,
                                gr['WG'](!0x1);
                            case 0x4:
                                gl = gd['sent'],
                                z9['Z']['jl'](gl),
                                this['hG'](),
                                this['tG'] = gr,
                                this['nG'] = gl,
                                this['eG']()['add'](gl),
                                this['BG']();
                            case 0xb:
                            case 'end':
                                return gd['stop']();
                            }
                    }, gX, this);
                }));
                return function(gB) {
                    return gN['apply'](this, arguments);
                }
                ;
            }()),
            gn['ZG'] = function() {
                return this['Pl'];
            }
            ,
            gn['$G'] = function(gN) {
                this['Pl'] = gN,
                this['oG'] && (this['Qx']()['remove'](this['oG']),
                this['oG']['geometry']['dispose'](),
                this['oG']['material']['map']['dispose'](),
                this['oG']['material']['dispose'](),
                this['oG'] = void 0x0),
                this['oG'] = A7(this['Pl'], 0x40, this['Ul'], 0.8),
                this['oG']['position']['set'](0x0, 1.5, 0x0),
                this['Qx']()['add'](this['oG']);
            }
            ,
            gn['KG'] = function() {
                return this['Nl'];
            }
            ,
            gn['MG'] = function(gN) {
                this['Nl'] = gN,
                this['El']['traverse'](function(gX) {
                    gX['material'] && (gX['material']['map']['dispose'](),
                    gN === AA['C']['fn'] ? gX['material']['map'] = z9['Z']['td']() : gN === AA['C']['ln'] ? gX['material']['map'] = z9['Z']['sd']() : gN === AA['C']['sn'] && (gX['material']['map'] = z9['Z']['hd']()));
                });
            }
            ,
            gn['nd'] = function(gN, gX, gB) {
                this['Tl'] = Date['now'](),
                this['aG'](0x1, 0x0, 0x0),
                gN > 0x0 && this['pG'](gN, '#ffb900', gB ? 0x2 : 0x1),
                gX > 0x0 && this['pG'](gX, 'white', gB ? 0x2 : 0x1);
            }
            ,
            gn['aG'] = function(gN, gX, gB) {
                for (var gr = 0x0; gr < this['Il']['length']; gr++)
                    this['Il'][gr]['color']['r'] = gN,
                    this['Il'][gr]['color']['g'] = gX,
                    this['Il'][gr]['color']['b'] = gB;
            }
            ,
            gn['ed'] = function() {
                return this['sG'];
            }
            ,
            gY;
        }(A8['Z'])
          , AS = z2(0x17b07)
          , AQ = z2(0x11e39)
          , AL = z2(0x13bce)
          , AU = z2(0xe462)
          , Ab = z2(0x9df8)
          , Af = z2(0x99dd)
          , Ax = z2(0x13a4);
        function AF(gD, gY) {
            var gn = 'undefined' != typeof Symbol && gD[Symbol['iterator']] || gD['@@iterator'];
            if (gn)
                return (gn = gn['call'](gD))['next']['bind'](gn);
            if (Array['isArray'](gD) || (gn = function(gX, gB) {
                if (!gX)
                    return;
                if ('string' == typeof gX)
                    return AV(gX, gB);
                var gr = Object['prototype']['toString']['call'](gX)['slice'](0x8, -0x1);
                'Object' === gr && gX['constructor'] && (gr = gX['constructor']['name']);
                if ('Map' === gr || 'Set' === gr)
                    return Array['from'](gX);
                if ('Arguments' === gr || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/['test'](gr))
                    return AV(gX, gB);
            }(gD)) || gY && gD && 'number' == typeof gD['length']) {
                gn && (gD = gn);
                var gN = 0x0;
                return function() {
                    return gN >= gD['length'] ? {
                        'done': !0x0
                    } : {
                        'done': !0x1,
                        'value': gD[gN++]
                    };
                }
                ;
            }
            throw new TypeError('Invalid\x20attempt\x20to\x20iterate\x20non-iterable\x20instance.\x0aIn\x20order\x20to\x20be\x20iterable,\x20non-array\x20objects\x20must\x20have\x20a\x20[Symbol.iterator]()\x20method.');
        }
        function AV(gD, gY) {
            (null == gY || gY > gD['length']) && (gY = gD['length']);
            for (var gn = 0x0, gN = new Array(gY); gn < gY; gn++)
                gN[gn] = gD[gn];
            return gN;
        }
        var Ak = 0x0
          , AD = 0x1
          , AY = (function() {
            function gD(gn, gN, gX, gB, gr) {
                var gl = this;
                this['rd'] = function(gd, gC, gO, gp, gW, gq, gc, gu, gT, gw, gE, gm, ga, gZ, gK, gH, gM, gv, P0) {
                    for (var P1 = -0x1, P2 = 0x0; P2 < gl['xd']['length']; P2++)
                        if (gl['xd'][P2]['od'] >= gw['od']) {
                            P1 = P2;
                            break;
                        }
                    -0x1 === P1 ? gl['xd'] = [] : gl['xd']['splice'](0x0, P1 - 0x1),
                    gl['vd']['fd']['ud'] = gw['ud'],
                    gl['vd']['fd']['ld'] = gw['ld'],
                    gl['vd']['fd']['yd'] = gw['yd'],
                    gl['vd']['fd']['od'] = gw['od'],
                    gC && (gl['vd']['fd']['hA'] = gw['hA']),
                    gO && (gl['vd']['fd']['Gd'] = gw['Gd']),
                    gp && (gl['vd']['fd']['dd'] = gw['dd']),
                    gW && (gl['vd']['fd']['wd'] = gw['wd']),
                    gq && gl['vd']['qo']['pd'](gE, !0x1),
                    gu && (gl['vd']['md'] = gv),
                    gT && (gl['vd']['ki'] = P0,
                    P0 === A0['P']['$n'] ? gl['vd']['qo']['zd'](0x4) : P0 === A0['P']['un'] ? gl['vd']['qo']['zd'](0x8) : P0 === A0['P']['cn'] ? gl['vd']['qo']['zd'](0xc) : gl['vd']['qo']['zd'](0x0));
                    for (var P3, P4 = !0x0, P5 = AF(gm['entries']()); !(P3 = P5())['done']; ) {
                        var P6 = P3['value']
                          , P7 = P6[0x0]
                          , P8 = P6[0x1];
                        gl['gd'] && (gl['gd'] = !0x1,
                        P4 = !0x1),
                        -0x2 === P7 ? gl['vd']['qo']['vu'](P8) : gl['vd']['qo']['$d'](P7, P8, !0x1);
                    }
                    for (var P9, Pz = AF(ga['entries']()); !(P9 = Pz())['done']; ) {
                        var PA = P9['value']
                          , PG = PA[0x0]
                          , Pe = PA[0x1];
                        gl['vd']['kd']['bd']()['set'](PG, Pe);
                    }
                    gc && (gl['vd']['Ni'] = gZ,
                    gl['vd']['Ci'] = gK,
                    gl['vd']['Ri'] = gH,
                    gl['vd']['Ti'] = gM);
                    for (var Pg = gl['vd']['Rd'](), PP = 0x1; PP < gl['xd']['length']; PP++) {
                        var Pj = gl['xd'][PP - 0x1]
                          , Po = gl['xd'][PP];
                        gl['Sd'](Pg, Pj, Po, !0x1);
                    }
                    gl['Md'] = gl['Dd']['Rd'](),
                    gl['Dd'] = Pg,
                    gl['Cd'](gl['Md'], gl['Dd'], P4);
                }
                ,
                this['Jd'] = function(gd, gC, gO) {
                    for (var gp = 0x0; gp < gl['jd']['length']; gp++) {
                        var gW = gl['jd'][gp];
                        if (gW['Pd'] === gd && gW['Ud'] === gC && gW['Nd'] === gO) {
                            for (var gq = 0x0; gq < gW['Xd']['length']; gq++)
                                clearTimeout(gW['Xd'][gq]);
                            gl['jd']['splice'](gp, 0x1);
                            break;
                        }
                    }
                }
                ,
                this['dA'] = function(gd, gC, gO, gp) {
                    gl['Jd'](gd, gC, gO),
                    gl['CA']['Sl']()['Fx'](gd, gC, gO, gp, !0x0);
                }
                ,
                this['Vd'] = function(gd, gC, gO, gp) {
                    for (var gW = {}, gq = 0x0; gq < gO['length']; gq++) {
                        var gc = zV(gO[gq]['x'], gO[gq]['y'], gO[gq]['z']);
                        gW[gc] = gl['CA']['Sl']()['Xh']()['Ix'](gO[gq]['x'], gO[gq]['y'], gO[gq]['z']),
                        gl['Jd'](gO[gq]['x'], gO[gq]['y'], gO[gq]['z']),
                        gl['CA']['Sl']()['Fx'](gO[gq]['x'], gO[gq]['y'], gO[gq]['z'], zx['k']['_h'], !0x1),
                        gl['CA']['Sl']()['FA']()['sA'](gc);
                    }
                    gd && gl['CA']['Sl']()['IA']()['Bh'](gC, gW);
                    for (var gu = 0x0; gu < gp['length']; gu++)
                        gl['CA']['Sl']()['FA']()['uA'](gp[gu]['pos']['x'], gp[gu]['pos']['y'], gp[gu]['pos']['z'], gp[gu]['progress'], !0x1);
                }
                ,
                this['Td'] = function(gd, gC, gO) {
                    gd === (0x0,
                    zP['Yb'])() && gl['Id'] === AD && (gl['Id'] = Ak,
                    gl['Bd']['Fd'](),
                    gl['Bd']['Od'](),
                    gl['qd'](gC, gO));
                }
                ,
                this['Ld'] = function(gd) {
                    (0x0,
                    zP['Zp'])() === AQ['Q']['me'] && gl['Vv']['xl']();
                }
                ,
                this['Yd'] = function(gd) {
                    zA['Z']['emit'](zG['x']['Ed']);
                }
                ,
                this['tl'] = function(gd) {
                    zA['Z']['emit'](zG['x']['Kv']);
                }
                ,
                this['Hd'] = function(gd, gC) {
                    gl['Qd'] = !0x0,
                    gl['_d'] = gd,
                    gl['Wd'] = gC,
                    gl['Zd']['tv'](gl['xt']['Kd'][Af['ap']['INVENTORY_HELPER_KEY']]) && (gl['Wd'] = zu['G']['SHIFT_CLICK']);
                }
                ,
                this['tw'] = function(gd) {
                    gl['sw'] = !0x0,
                    gl['hw'] = gd;
                }
                ,
                this['nw'] = function(gd) {
                    gl['ew'] = !0x0,
                    gl['rw'] = gd,
                    gl['Wd'] = zu['G']['LEFT'],
                    gl['Zd']['tv'](gl['xt']['Kd'][Af['ap']['INVENTORY_HELPER_KEY']]) && (gl['Wd'] = zu['G']['SHIFT_CLICK']);
                }
                ,
                this['xw'] = function() {
                    gl['Vv']['xl']();
                }
                ,
                this['ow'] = function() {
                    (0x0,
                    zP['Zp'])() !== AQ['Q']['me'] || gl['Vv']['fl']() || gl['Vv']['xl']();
                }
                ,
                this['uw'] = function() {
                    gl['Vv']['al']();
                }
                ,
                this['Aw'] = function() {
                    gl['Vv']['al']();
                }
                ,
                this['fw'] = function(gd, gC) {
                    gC && gl['cw'](gd);
                }
                ,
                this['lw'] = function(gd, gC, gO, gp) {
                    var gW = []
                      , gq = [];
                    return zE()(gp, [gd['x'], gd['y'], gd['z']], [gC['x'], gC['y'], gC['z']], gO, gW, gq) === zx['k']['_h'] ? {
                        'yw': !0x1,
                        'J': (0x0,
                        zg['XX'])(0x0, 0x0, 0x0),
                        'Gw': (0x0,
                        zg['XX'])(0x0, 0x0, 0x0)
                    } : {
                        'yw': !0x0,
                        'J': (0x0,
                        zg['XX'])(gW[0x0], gW[0x1], gW[0x2]),
                        'Gw': (0x0,
                        zg['XX'])(gq[0x0], gq[0x1], gq[0x2])
                    };
                }
                ,
                this['dw'] = function(gd, gC, gO) {
                    return gl['CA']['Sl']()['Xh']()['Ix'](gd, gC, gO);
                }
                ,
                this['ww'] = function(gd, gC, gO) {
                    return zd['Z'][gl['dw'](gd, gC, gO)]['t'];
                }
                ,
                this['bs'] = function(gd, gC) {
                    if (gl['Id'] === Ak) {
                        if ((0x0,
                        zP['Zp'])() === AQ['Q']['Pe'])
                            return;
                        gl['Dd']['qo']['Bv']()['Fv']()['pw'](gd, gl),
                        gl['Vv']['bs'](gd, gC);
                        var gO = gC / z8['Z']['qr'];
                        if (gl['Dd']['fd']['yd'] === zT['b']['LG'] || gl['Dd']['fd']['yd'] === zT['b']['YG']) {
                            var gp, gW = gl['mw'](), gq = (0x0,
                            zI['t7'])(gl['zw']['x'], gl['Dd']['fd']['hA']['x'], gO), gc = (0x0,
                            zI['t7'])(gl['zw']['y'], gl['Dd']['fd']['hA']['y'], gO), gu = (0x0,
                            zI['t7'])(gl['zw']['z'], gl['Dd']['fd']['hA']['z'], gO);
                            gl['gw']['iG']((0x0,
                            zg['XX'])(gq, gc, gu)),
                            gl['gw']['TG'](gW),
                            null == (gp = gl['gw']) || gp['bs'](gd, gC);
                        } else {
                            var gT = (0x0,
                            zI['t7'])(gl['zw']['x'], gl['Dd']['fd']['hA']['x'], gO)
                              , gw = (0x0,
                            zI['t7'])(gl['zw']['y'] + gl['Md']['fd']['dd'], gl['Dd']['fd']['hA']['y'] + gl['Dd']['fd']['dd'], gO)
                              , gE = (0x0,
                            zI['t7'])(gl['zw']['z'], gl['Dd']['fd']['hA']['z'], gO);
                            gl['Vv']['Qx']()['position']['set'](gT, gw, gE);
                        }
                    } else {
                        if (gl['Id'] === AD && Date['now']() - gl['$w'] <= 0x3e8) {
                            var gm = Math['max'](0x0, Math['min'](0x1, (Date['now']() - gl['$w']) / 0x3e8));
                            z7['_fP']['slerp'](gl['bw'], gl['kw'], gl['Rw']['Js']()['quaternion'], gm);
                        }
                    }
                }
                ,
                this['xt'] = gn,
                this['Rw'] = gN,
                this['CA'] = gX,
                this['SA'] = gB,
                this['Bd'] = gr,
                this['Vv'] = new zv(this['xt'],this['Rw']['Js'](),this['Rw']['js'](),this['Rw']['Us'](),this),
                this['zw'] = (0x0,
                zg['XX'])(0x0, 0x0, 0x0),
                this['jd'] = [],
                this['Id'] = Ak,
                this['Qd'] = !0x1,
                this['sw'] = !0x1,
                this['_d'] = 0x0,
                this['Wd'] = zu['G']['WHEEL'],
                this['hw'] = A0['P']['nn'],
                this['ew'] = !0x1,
                this['rw'] = AS['n']['Sw'],
                this['$w'] = 0x0,
                this['bw'] = new z7['_fP'](),
                this['kw'] = new z7['_fP'](),
                this['Mw'] = 0x0,
                this['Dw'] = -0x1,
                this['Cw'] = 0x0;
            }
            var gY = gD['prototype'];
            return gY['Ph'] = function() {
                this['TA'](),
                this['Vv']['sl'](),
                this['Zd']['Ph']();
            }
            ,
            gY['rs'] = function(gn, gN, gX) {
                this['Zd'] = new zZ(),
                this['qd'](gN, gX),
                this['Vv']['xl'](),
                this['jA']();
            }
            ,
            gY['cw'] = function(gn) {
                window['gtag'] && gtag('event', 'kill', {
                    'event_category': 'game_view'
                }),
                this['Id'] = AD,
                this['Vv']['yv'](),
                this['Bd']['Jw'](),
                this['Bd']['jw'](),
                zA['Z']['emit'](zG['x']['Pw']),
                zA['Z']['emit'](zG['x']['Uw'], A0['P']['nn']),
                this['Dd']['qo']['Bv']()['Fv']()['Nw'](this['Dd'], this, !0x0);
                var gN = (0x0,
                zg['dg'])(gn);
                (0x0,
                zg['M4'])(gN, this['Rw']['Js']()['position']),
                (0x0,
                zg['cz'])(gN),
                this['$w'] = Date['now'](),
                this['bw']['copy'](this['Rw']['Js']()['quaternion']),
                this['kw']['setFromUnitVectors'](new z7['Pa4'](0x0,0x0,-0x1), new z7['Pa4'](gN['x'],gN['y'],gN['z'])),
                this['Vv']['al']();
            }
            ,
            gY['jA'] = function() {
                zA['Z']['on'](zG['x']['Xw'], this['rd']),
                zA['Z']['on'](zG['x']['VA'], this['dA']),
                zA['Z']['on'](zG['x']['Vw'], this['Vd']),
                zA['Z']['on'](zG['x']['Tw'], this['Td']),
                zA['Z']['on'](zG['x']['Iw'], this['Hd']),
                zA['Z']['on'](zG['x']['Fw'], this['tw']),
                zA['Z']['on'](zG['x']['Bw'], this['nw']),
                zA['Z']['on'](zG['x']['qw'], this['fw']),
                zA['Z']['on'](zG['x']['Lw'], this['Aw']),
                zA['Z']['on'](zG['x']['Yw'], this['ow']),
                zA['Z']['on'](zG['x']['Ew'], this['uw']),
                zA['Z']['on'](zG['x']['Hw'], this['xw']),
                this['Qw']()['Us']()['addEventListener']('click', this['Ld'], !0x1),
                this['Vv']['addEventListener']('lock', this['Yd']),
                this['Vv']['addEventListener']('unlock', this['tl']);
            }
            ,
            gY['TA'] = function() {
                zA['Z']['off'](zG['x']['Xw'], this['rd']),
                zA['Z']['off'](zG['x']['VA'], this['dA']),
                zA['Z']['off'](zG['x']['Vw'], this['Vd']),
                zA['Z']['off'](zG['x']['Tw'], this['Td']),
                zA['Z']['off'](zG['x']['Iw'], this['Hd']),
                zA['Z']['off'](zG['x']['Fw'], this['tw']),
                zA['Z']['off'](zG['x']['Bw'], this['nw']),
                zA['Z']['off'](zG['x']['qw'], this['fw']),
                zA['Z']['off'](zG['x']['Lw'], this['Aw']),
                zA['Z']['off'](zG['x']['Yw'], this['ow']),
                zA['Z']['off'](zG['x']['Ew'], this['uw']),
                zA['Z']['off'](zG['x']['Hw'], this['xw']),
                this['Qw']()['Us']()['removeEventListener']('click', this['Ld'], !0x1),
                this['Vv']['removeEventListener']('lock', this['Yd']),
                this['Vv']['removeEventListener']('unlock', this['tl']);
            }
            ,
            gY['qd'] = function(gn, gN) {
                this['xd'] = [],
                this['_w'] = {
                    'Ww': !0x1,
                    'Zw': !0x1,
                    'Kw': !0x1,
                    'tp': !0x1,
                    'ip': !0x1,
                    'rl': !0x1,
                    'nl': !0x1,
                    'sp': !0x1,
                    'hp': !0x1,
                    'np': !0x1,
                    'ep': !0x1,
                    'rp': !0x1,
                    'xp': !0x1,
                    'op': !0x1,
                    'Ap': !0x1,
                    'fp': !0x1,
                    'cp': 0x0,
                    'vp': 0x0,
                    'lp': zu['G']['WHEEL'],
                    'yp': AS['n']['Sw'],
                    'ki': A0['P']['nn'],
                    'Gp': (0x0,
                    za['Ak'])(0x0, 0x0),
                    'od': -0x1,
                    'dp': 0x0
                },
                this['xd']['push'](this['_w']);
                var gX = this['vd'];
                this['vd'] = new A2['Z'](this),
                this['vd']['fd']['hA'] = gn,
                this['zw'] = gn,
                this['Md'] = new A2['Z'](this),
                this['Md']['fd']['hA'] = gn,
                this['Dd'] = new A2['Z'](this),
                this['Dd']['fd']['hA'] = gn,
                void 0x0 !== gX && (this['vd']['Ni'] = gX['Ni'],
                this['vd']['Ci'] = gX['Ci'],
                this['vd']['Ri'] = gX['Ri'],
                this['vd']['Ti'] = gX['Ti'],
                this['vd']['md'] = gX['md'],
                this['Md']['Ni'] = gX['Ni'],
                this['Md']['Ci'] = gX['Ci'],
                this['Md']['Ri'] = gX['Ri'],
                this['Md']['Ti'] = gX['Ti'],
                this['Md']['qo'] = gX['qo'],
                this['Md']['md'] = gX['md'],
                this['Dd']['Ni'] = gX['Ni'],
                this['Dd']['Ci'] = gX['Ci'],
                this['Dd']['Ri'] = gX['Ri'],
                this['Dd']['Ti'] = gX['Ti'],
                this['Dd']['md'] = gX['md'],
                this['Cd'](this['Md'], this['Dd'], !0x1)),
                this['Rl'] = new A5(),
                this['gd'] = !0x0,
                this['Vv']['cl']()['set'](gN['x'], gN['y'], 0x0),
                this['Rw']['Js']()['rotation']['set'](gN['x'], gN['y'], 0x0);
                try {
                    var gB = zo['h']['getState']()
                      , gr = (0x0,
                    Ax['DH'])(gB['settings']['primaryLoadout'])
                      , gl = (0x0,
                    Ax['OA'])(gB['settings']['secondaryLoadout'])
                      , gd = gB['game']['A$'];
                    zj['GameAnalytics']['addDesignEvent'](gd + ':PRIMARY_LOADOUT_USAGE:' + gr, 0x1, {
                        'authenticated': gB['account']['authenticated'] ? 'true' : 'false'
                    }),
                    zj['GameAnalytics']['addDesignEvent'](gd + ':SECONDARY_LOADOUT_USAGE:' + gl, 0x1, {
                        'authenticated': gB['account']['authenticated'] ? 'true' : 'false'
                    });
                } catch (gC) {}
            }
            ,
            gY['wp'] = function(gn) {
                if (this['Id'] === Ak) {
                    var gN = this['Zd']['sv'](this['xt']['Kd'][Af['ap']['MOVE_LEFT']])
                      , gX = this['Zd']['sv'](this['xt']['Kd'][Af['ap']['MOVE_RIGHT']])
                      , gB = this['Zd']['sv'](this['xt']['Kd'][Af['ap']['MOVE_FORWARD']])
                      , gr = this['Zd']['sv'](this['xt']['Kd'][Af['ap']['MOVE_BACKWARD']])
                      , gl = this['Zd']['sv'](this['xt']['Kd'][Af['ap']['JUMP']])
                      , gd = this['Zd']['iv'](this['xt']['Kd'][Af['ap']['PRIMARY_ACTION']])
                      , gC = this['Zd']['iv'](this['xt']['Kd'][Af['ap']['SECONDARY_ACTION']]) || this['Zd']['sv'](this['xt']['Kd'][Af['ap']['SECONDARY_ACTION_2']])
                      , gO = this['Zd']['sv'](this['xt']['Kd'][Af['ap']['CROUCH']])
                      , gp = this['Zd']['sv'](this['xt']['Kd'][Af['ap']['SPRINT']])
                      , gW = this['Zd']['sv'](this['xt']['Kd'][Af['ap']['RELOAD']])
                      , gq = this['Zd']['hv'](this['xt']['Kd'][Af['ap']['DROP_CURRENT_ITEM']]);
                    z8['Z']['Jo'] && (gq = gd);
                    var gc = this['Zd']['sv'](this['xt']['Kd'][Af['ap']['SELECT_SLOT_1']])
                      , gu = this['Zd']['sv'](this['xt']['Kd'][Af['ap']['SELECT_SLOT_2']])
                      , gT = this['Zd']['sv'](this['xt']['Kd'][Af['ap']['SELECT_SLOT_3']])
                      , gw = this['Zd']['sv'](this['xt']['Kd'][Af['ap']['SELECT_SLOT_4']])
                      , gE = this['Zd']['sv'](this['xt']['Kd'][Af['ap']['SELECT_SLOT_5']])
                      , gm = this['Zd']['sv'](this['xt']['Kd'][Af['ap']['SPRAY']]);
                    this['Zd']['hv'](this['xt']['Kd'][Af['ap']['INTERACT']]) && (this['Dw'] >= 0x0 ? zA['Z']['emit'](zG['x']['pp'], this['Dw']) : -0x2 === this['Dw'] ? this['tw'](A0['P']['en']) : -0x3 === this['Dw'] ? this['tw'](A0['P']['rn']) : -0x4 === this['Dw'] ? this['tw'](A0['P']['$n']) : -0x5 === this['Dw'] ? this['tw'](A0['P']['un']) : -0x6 === this['Dw'] && this['tw'](A0['P']['cn']));
                    var ga = this['mw']()
                      , gZ = ga['x']
                      , gK = ga['y'];
                    this['Md'] = this['Dd']['Rd'](),
                    this['zw'] = this['Md']['fd']['hA'];
                    var gH = this['zp']()['mp']()
                      , gM = this['Zd']['ev']()
                      , gv = this['Zd']['xv']()
                      , P0 = this['xt']['gp'] ? gM : gv;
                    (this['xt']['gp'] ? gv : gM) ? this['zp']()['$p'](!0x0) : P0 ? this['zp']()['bp'](!0x0) : gc ? this['zp']()['pd'](0x0, !0x0) : gu ? this['zp']()['pd'](0x1, !0x0) : gT ? this['zp']()['pd'](0x2, !0x0) : gw ? this['zp']()['pd'](0x3, !0x0) : gE && this['zp']()['pd'](0x4, !0x0);
                    var P1 = gH !== this['zp']()['mp']()
                      , P2 = this['Dd']['fd']['od']
                      , P3 = {
                        'Ww': P1,
                        'Zw': this['Qd'],
                        'Kw': this['sw'],
                        'tp': this['ew'],
                        'ip': gN,
                        'rl': gX,
                        'nl': gB,
                        'sp': gr,
                        'hp': gl,
                        'np': gd,
                        'ep': gC,
                        'rp': gO,
                        'xp': gp,
                        'op': gW,
                        'Ap': gq,
                        'fp': gm,
                        'Gp': (0x0,
                        za['Ak'])(gZ, gK),
                        'od': P2,
                        'cp': this['zp']()['mp'](),
                        'vp': this['_d'],
                        'lp': this['Wd'],
                        'yp': this['rw'],
                        'ki': this['hw'],
                        'dp': this['CA']['Ml']()['kp']()
                    };
                    this['Qd'] = !0x1,
                    this['sw'] = !0x1,
                    this['ew'] = !0x1;
                    var P4 = this['_w'];
                    this['_w'] = P3,
                    this['xd']['push'](P3),
                    zA['Z']['emit'](zG['x']['Rp'], P3),
                    this['Sd'](this['Dd'], P4, P3, !0x0),
                    this['Cd'](this['Md'], this['Dd'], !0x0),
                    this['Sp']();
                }
            }
            ,
            gY['Sd'] = function(gn, gN, gX, gB) {
                var gr = z8['Z']['qr']
                  , gl = gn['fd']['yd'];
                gX['Ww'] && gn['qo']['pd'](gX['cp'], gB),
                gn['fd'] = (0x0,
                zm['w5'])(gX, this['dw'], this['ww'], this['lw'], gr, gn),
                gX['Kw'] && (gn['ki'] = gX['ki'],
                gX['ki'] === A0['P']['$n'] ? gn['qo']['zd'](0x4) : gX['ki'] === A0['P']['un'] ? gn['qo']['zd'](0x8) : gX['ki'] === A0['P']['cn'] ? gn['qo']['zd'](0xc) : gn['qo']['zd'](0x0)),
                gX['Zw'] ? gn['qo']['Mp'](gX['vp'], gX['lp'], gB) : gX['tp'] && gn['qo']['Dp'](gX['yp'], gX['lp']),
                gl === zT['b']['EG'] && gn['fd']['yd'] !== zT['b']['EG'] && gn['kd']['Jp'](A1['Z']['jp']),
                gn['qo']['Bv']()['Fv']()['Pp'](gn) && (gn['qo']['Bv']()['Fv']()['Up'](gn, this, gN, gX, gB),
                gn['qo']['Np'](gB)),
                gn['fd']['wd'] = (0x0,
                zm['Ao'])(this, gX, gn),
                gn['qo']['Bv']()['Fv']()['Xp'](gr, gn, this, gB),
                gn['qo']['Np'](gB),
                gn['qo']['Bv']()['Fv']()['Vp'](gn),
                gX['Ap'] && gn['kd']['Tp'](A1['Z']['Ip']) && gn['qo']['Fp'](gB),
                gB && A6(gn['fd']['hA'], gn['fd']['yd'], gn['fd']['ud'], this['Rl'], this['CA']['Sl']()['Xh'](), this['Bd'], !0x0);
            }
            ,
            gY['Cd'] = function(gn, gN, gX) {
                var gB = new Map()
                  , gr = z8['Z']['Xr'] + z8['Z']['zr'] + z8['Z']['jr'];
                if (gn['qo']['Bp']()['length'] !== gN['qo']['Bp']()['length']) {
                    if (gn['qo']['Bp']()['length'] < gN['qo']['Bp']()['length'])
                        for (var gl = gn['qo']['Bp']()['length']; gl < gN['qo']['Bp']()['length']; gl++) {
                            var gd = gN['qo']['Bp']()[gl];
                            gB['set'](gl, gd);
                        }
                    else {
                        for (var gC = gN['qo']['Bp']()['length']; gC < gn['qo']['Bp']()['length']; gC++)
                            gB['set'](gC, new zK['Z']((0x0,
                            zM['YJ'])(A3['q']['hn']),0x1));
                    }
                } else
                    gr = gN['qo']['Bp']()['length'];
                for (var gO = 0x0; gO < gr; gO++) {
                    var gp = gn['qo']['Bp']()[gO]
                      , gW = gN['qo']['Bp']()[gO];
                    gp['Fv']()['Iv']() === gW['Fv']()['Iv']() && gp['Op']() === gW['Op']() && (0x0,
                    zM['qH'])(gp['Fv']()) === (0x0,
                    zM['qH'])(gW['Fv']()) || (gB['set'](gO, gW),
                    gX && gW['Fv']()['Iv']() !== A3['q']['hn'] && (gp['Fv']()['Iv']() !== gW['Fv']()['Iv']() || gp['Op']() < gW['Op']()) && this['vA']()['yl'](A4['k']['qp']));
                }
                if (gn['qo']['Lp']()['Fv']()['Iv']() === gN['qo']['Lp']()['Fv']()['Iv']() && gn['qo']['Lp']()['Op']() === gN['qo']['Lp']()['Op']() && (0x0,
                zM['qH'])(gn['qo']['Lp']()['Fv']()) === (0x0,
                zM['qH'])(gN['qo']['Lp']()['Fv']()) || (zA['Z']['emit'](zG['x']['Yp'], gN['qo']['Lp']()),
                gX && this['vA']()['yl'](A4['k']['qp'])),
                gn['qo']['mp']() !== gN['qo']['mp']() && zA['Z']['emit'](zG['x']['Ep'], gN['qo']['mp']()),
                gn['qo']['mp']() === gN['qo']['mp']() && gn['qo']['Bv']()['Fv']()['Iv']() === gN['qo']['Bv']()['Fv']()['Iv']() && gn['qo']['Bv']()['Fv']()['Hp']() === gN['qo']['Bv']()['Fv']()['Hp']() && gn['qo']['Bv']()['Fv']()['Qp']() === gN['qo']['Bv']()['Fv']()['Qp']() || zA['Z']['emit'](zG['x']['_p'], gN['qo'], gN['qo']['Bv']()),
                gB['size'] > 0x0 && (zA['Z']['emit'](zG['x']['Wp'], gB),
                (0x0,
                zM['pV'])(gN['qo']['Bv']()['Fv']()['Iv']()))) {
                    var gq = gN['qo']['Bv']()['Fv']();
                    zA['Z']['emit'](zG['x']['Kp'], gq['tm'](), gN['qo']['im'](gq['sm']()));
                }
                gn['ki'] !== gN['ki'] && zA['Z']['emit'](zG['x']['Uw'], gN['ki']),
                gn['Ni'] === gN['Ni'] && gn['Ci'] === gN['Ci'] && gn['Ri'] === gN['Ri'] && gn['Ti'] === gN['Ti'] || zA['Z']['emit'](zG['x']['hm'], gN['Ni'], gN['Ci'], gN['Ri'], gN['Ti']),
                gn['fd']['yd'] !== zT['b']['LG'] && gn['fd']['yd'] !== zT['b']['YG'] || gN['fd']['yd'] === zT['b']['LG'] || gN['fd']['yd'] === zT['b']['YG'] ? gn['fd']['yd'] === zT['b']['LG'] || gn['fd']['yd'] === zT['b']['YG'] || gN['fd']['yd'] !== zT['b']['LG'] && gN['fd']['yd'] !== zT['b']['YG'] || (this['Bd']['Jw'](),
                this['Bd']['jw'](),
                this['gw'] = new AR(this['CA']['Ml'](),(0x0,
                zP['Yb'])()),
                this['gw']['MG'](this['Bd']['KG']()),
                this['CA']['Ss']()['add'](this['gw']['Qx']()),
                this['Vv']['ul'](this['gw']['Qx'](), 0xa)) : (this['Bd']['Fd'](),
                this['Bd']['Od'](),
                this['Vv']['Al'](this['mw']()),
                this['CA']['Ss']()['remove'](this['gw']['Qx']())),
                void 0x0 !== this['gw'] && this['gw']['NG'](gN['fd']['yd']);
            }
            ,
            gY['nm'] = function() {
                var gn = this['rm'](this['ww']);
                if (gn['yw'])
                    return this['CA']['Sl']()['Xh']()['Jx'](gn['J']['x'] + 0.01 * gn['Gw']['x'], gn['J']['y'] + 0.01 * gn['Gw']['y'], gn['J']['z'] + 0.01 * gn['Gw']['z']);
            }
            ,
            gY['xm'] = function() {
                var gn = this['rm'](this['ww']);
                if (gn['yw'])
                    return this['CA']['Sl']()['Xh']()['Jx'](gn['J']['x'] - 0.01 * gn['Gw']['x'], gn['J']['y'] - 0.01 * gn['Gw']['y'], gn['J']['z'] - 0.01 * gn['Gw']['z']);
            }
            ,
            gY['om'] = function() {
                var gn = this
                  , gN = this['rm'](function(gX, gB, gr) {
                    return gn['dw'](gX, gB, gr) === zx['k']['am'];
                });
                if (gN['yw'])
                    return this['CA']['Sl']()['Xh']()['Jx'](gN['J']['x'] - 0.01 * gN['Gw']['x'], gN['J']['y'] - 0.01 * gN['Gw']['y'], gN['J']['z'] - 0.01 * gN['Gw']['z']);
            }
            ,
            gY['um'] = function() {
                var gn = this['rm'](this['ww']);
                if (gn['yw'])
                    return this['CA']['Sl']()['Xh']()['Jx'](gn['J']['x'] + 0.01 * gn['Gw']['x'], gn['J']['y'] + 0.01 * gn['Gw']['y'], gn['J']['z'] + 0.01 * gn['Gw']['z']);
            }
            ,
            gY['rm'] = function(gn) {
                if (!this['_w'])
                    return {
                        'yw': !0x1,
                        'J': (0x0,
                        zg['XX'])(0x0, 0x0, 0x0),
                        'Gw': (0x0,
                        zg['XX'])(0x0, 0x0, 0x0)
                    };
                var gN = (0x0,
                zg['dg'])(this['Dd']['fd']['hA']);
                (0x0,
                zg['$j'])(gN, (0x0,
                zg['XX'])(0x0, this['Dd']['fd']['dd'], 0x0)),
                (0x0,
                zg['BZ'])(gN, z8['Z']['Ir']);
                var gX = this['_w']['Gp']['x']
                  , gB = this['_w']['Gp']['y']
                  , gr = (0x0,
                zI['ny'])((0x0,
                za['Ak'])(gX, gB));
                return this['lw'](gN, gr, z8['Z']['Qr'], gn);
            }
            ,
            gY['fA'] = function(gn, gN, gX, gB) {
                var gr = this
                  , gl = this['CA']['Sl']()['Xh']()['Ix'](gn, gN, gX);
                this['CA']['Sl']()['Fx'](gn, gN, gX, gB, !0x0);
                for (var gd = setTimeout(function() {
                    for (var gW = 0x0; gW < gr['jd']['length']; gW++) {
                        var gq = gr['jd'][gW];
                        if (gq['Pd'] === gn && gq['Ud'] === gN && gq['Nd'] === gX) {
                            gr['CA']['Sl']()['Fx'](gn, gN, gX, gq['Am'][gq['Am']['length'] - 0x1], !0x1),
                            0x0 === gq['Am']['length'] ? gr['jd']['splice'](gW, 0x1) : (gq['Am']['pop'](),
                            gq['Xd']['pop']());
                            break;
                        }
                    }
                }, 0x3e8 * z8['Z']['Jr']), gC = !0x1, gO = 0x0; gO < this['jd']['length']; gO++) {
                    var gp = this['jd'][gO];
                    if (gp['Pd'] === gn && gp['Ud'] === gN && gp['Nd'] === gX) {
                        this['jd'][gO]['Am']['push'](gl),
                        this['jd'][gO]['Xd']['push'](gd),
                        gC = !0x0;
                        break;
                    }
                }
                gC || this['jd']['push']({
                    'Pd': gn,
                    'Ud': gN,
                    'Nd': gX,
                    'Am': [gl],
                    'Xd': [gd]
                });
            }
            ,
            gY['Sp'] = function() {
                if (this['SA']['fh']()) {
                    this['SA']['Fs'] = (0x0,
                    zg['XX'])(this['Dd']['fd']['hA']['x'], this['Dd']['fd']['hA']['y'], this['Dd']['fd']['hA']['z']),
                    this['SA']['Bs'] = (0x0,
                    zg['XX'])(Math['floor'](this['Dd']['fd']['hA']['x'] / z8['Z']['Ir']), Math['floor'](this['Dd']['fd']['hA']['y'] / z8['Z']['Ir']), Math['floor'](this['Dd']['fd']['hA']['z'] / z8['Z']['Ir'])),
                    this['SA']['Os'] = this['CA']['Sl']()['Xh']()['xx'](this['Dd']['fd']['hA']['x'] / z8['Z']['Ir'], this['Dd']['fd']['hA']['y'] / z8['Z']['Ir'], this['Dd']['fd']['hA']['z'] / z8['Z']['Ir']),
                    this['SA']['qs'] = (0x0,
                    zg['XX'])(this['Dd']['fd']['Gd']['x'], this['Dd']['fd']['Gd']['y'], this['Dd']['fd']['Gd']['z']);
                    var gn = this['mw']();
                    this['SA']['Ys'] = gn['x'],
                    this['SA']['Ls'] = gn['y'];
                }
            }
            ,
            gY['yh'] = function(gn) {
                this['wp'](gn),
                0x2 == ++this['Mw'] && (this['Mw'] = 0x0,
                this['fm']());
            }
            ,
            gY['fm'] = function() {
                for (var gn, gN = (0x0,
                zg['XX'])(this['Rw']['Js']()['position']['x'], this['Rw']['Js']()['position']['y'], this['Rw']['Js']()['position']['z']), gX = this['vm'](), gB = 0xf423f, gr = void 0x0, gl = AF(this['Lo']()['Ml']()['lm']()); !(gn = gl())['done']; ) {
                    var gd = gn['value'];
                    if (gd['ym']() === A9['p']['Gm'] && -0x1 === gd['dm']()) {
                        var gC = (0x0,
                        zg['XX'])(gd['Qx']()['position']['x'], gd['Qx']()['position']['y'], gd['Qx']()['position']['z']);
                        if (!((0x0,
                        zg['RJ'])(gN, gC) >= 0x10)) {
                            var gO = (0x0,
                            zg['XX'])(gC['x'] - gN['x'], gC['y'] - gN['y'], gC['z'] - gN['z'])
                              , gp = (0x0,
                            zg['r1'])(gO, gX)
                              , gW = (0x0,
                            zg['XX'])(gN['x'] + gX['x'] * gp, gN['y'] + gX['y'] * gp, gN['z'] + gX['z'] * gp)
                              , gq = (0x0,
                            zg['RJ'])(gC, gW);
                            if (!(gq > 0.09)) {
                                var gc = gp - Math['sqrt'](0.09 - gq);
                                gc <= gB && (gB = gc,
                                gr = gd);
                            }
                        }
                    }
                }
                var gu = void 0x0 !== gr && void 0x0 !== gr['Fv']()
                  , gT = (0x0,
                zg['dg'])(gN);
                (0x0,
                zg['BZ'])(gT, z8['Z']['Ir']);
                var gw = this['rm'](this['ww'])
                  , gE = zx['k']['_h'];
                if (!(0x0,
                zP['s9'])() && gw['yw']) {
                    var gm = this['CA']['Sl']()['Xh']()['Jx'](gw['J']['x'] - 0.01 * gw['Gw']['x'], gw['J']['y'] - 0.01 * gw['Gw']['y'], gw['J']['z'] - 0.01 * gw['Gw']['z']);
                    gE = this['CA']['Sl']()['Xh']()['Ix'](gm['x'], gm['y'], gm['z']);
                }
                if (gu && gw['yw']) {
                    var ga = (0x0,
                    zg['dg'])(gw['J']);
                    (0x0,
                    zg['Mt'])(ga, z8['Z']['Ir']),
                    (0x0,
                    zg['RJ'])(ga, gN) < gB * gB && (gu = !0x1);
                }
                if (this['Id'] === AD)
                    -0x1 !== this['Dw'] && (this['Dw'] = -0x1,
                    this['Cw'] = 0x0,
                    zA['Z']['emit'](zG['x']['wm'], A3['q']['hn'], AL['Sc']['Sn'], '', '', 0x1));
                else {
                    if (gu) {
                        if (gr['Iv']() !== this['Dw'] || gr['Op']() !== this['Cw']) {
                            var gZ = this['Dd']['qo']['pm'](gr['Fv']()['Iv'](), gr['Op']());
                            this['Dw'] = gr['Iv'](),
                            this['Cw'] = gr['Op'](),
                            zA['Z']['emit'](zG['x']['wm'], gr['Fv']()['zm'](), gr['Fv']()['gm'](), (0x0,
                            Ab['r'])(gr['Fv']()['Hp']())['tier'], gr['Fv']()['$m'](), 'Press\x20' + (0x0,
                            zP['Ck'])(Af['ap']['INTERACT']) + '\x20to\x20' + (gZ ? 'pick\x20up' : 'swap'), gr['Op']());
                        }
                    } else
                        gE === zx['k']['en'] ? -0x2 !== this['Dw'] && (this['Dw'] = -0x2,
                        this['Cw'] = 0x0,
                        zA['Z']['emit'](zG['x']['wm'], A3['q']['de'] + zx['k']['en'], AL['Sc']['Sn'], AU['W3']['Sn'], 'Work\x20Station', 'Press\x20' + (0x0,
                        zP['Ck'])(Af['ap']['INTERACT']) + '\x20to\x20use', 0x1)) : gE === zx['k']['rn'] ? -0x3 !== this['Dw'] && (this['Dw'] = -0x3,
                        this['Cw'] = 0x0,
                        zA['Z']['emit'](zG['x']['wm'], A3['q']['de'] + zx['k']['rn'], AL['Sc']['Sn'], AU['W3']['Sn'], 'Loadout\x20Station', 'Press\x20' + (0x0,
                        zP['Ck'])(Af['ap']['INTERACT']) + '\x20to\x20change\x20loadouts', 0x1)) : gE === zx['k']['$n'] ? -0x4 !== this['Dw'] && (this['Dw'] = -0x4,
                        this['Cw'] = 0x0,
                        zA['Z']['emit'](zG['x']['wm'], A3['q']['de'] + zx['k']['$n'], AL['Sc']['Sn'], AU['W3']['Sn'], 'Wooden\x20Chest', 'Press\x20' + (0x0,
                        zP['Ck'])(Af['ap']['INTERACT']) + '\x20to\x20open', 0x1)) : gE === zx['k']['un'] ? -0x5 !== this['Dw'] && (this['Dw'] = -0x5,
                        this['Cw'] = 0x0,
                        zA['Z']['emit'](zG['x']['wm'], A3['q']['de'] + zx['k']['un'], AL['Sc']['Sn'], AU['W3']['Sn'], 'Iron\x20Chest', 'Press\x20' + (0x0,
                        zP['Ck'])(Af['ap']['INTERACT']) + '\x20to\x20open', 0x1)) : gE === zx['k']['bm'] ? -0x6 !== this['Dw'] && (this['Dw'] = -0x6,
                        this['Cw'] = 0x0,
                        zA['Z']['emit'](zG['x']['wm'], A3['q']['de'] + zx['k']['bm'], AL['Sc']['Sn'], AU['W3']['Sn'], 'Golden\x20Chest', 'Press\x20' + (0x0,
                        zP['Ck'])(Af['ap']['INTERACT']) + '\x20to\x20open', 0x1)) : -0x1 !== this['Dw'] && (this['Dw'] = -0x1,
                        this['Cw'] = 0x0,
                        zA['Z']['emit'](zG['x']['wm'], A3['q']['hn'], AL['Sc']['Sn'], '', '', 0x1));
                }
            }
            ,
            gY['km'] = function(gn, gN) {
                for (var gX = -gN; gX <= gN; gX++)
                    for (var gB = -gN; gB <= gN; gB++)
                        for (var gr = -gN; gr <= gN; gr++) {
                            var gl = (0x0,
                            zg['dg'])(this['Dd']['fd']['hA']);
                            if ((0x0,
                            zg['BZ'])(gl, z8['Z']['Ir']),
                            (0x0,
                            zg['$j'])(gl, (0x0,
                            zg['XX'])(gX, gB, gr)),
                            this['CA']['Sl']()['Xh']()['Ix'](gl['x'], gl['y'], gl['z']) === gn)
                                return !0x0;
                        }
                return !0x1;
            }
            ,
            gY['Xv'] = function() {
                return this['_w'];
            }
            ,
            gY['Rm'] = function() {
                return this['_w']['sp'] || this['_w']['nl'] || this['_w']['ip'] || this['_w']['rl'];
            }
            ,
            gY['Sm'] = function() {
                return this['Dd']['fd']['ud'];
            }
            ,
            gY['QG'] = function() {
                return this['Dd']['fd']['yd'];
            }
            ,
            gY['Mm'] = function() {
                return !this['Dd']['fd']['ld'];
            }
            ,
            gY['Dm'] = function() {
                return 0x6 * this['Md']['fd']['wd'];
            }
            ,
            gY['Cm'] = function() {
                return 0x6 * this['Dd']['fd']['wd'];
            }
            ,
            gY['mw'] = function() {
                var gn = new z7['USm']()['setFromQuaternion'](this['Rw']['Js']()['quaternion'], 'YXZ');
                return (0x0,
                za['Ak'])(gn['x'], gn['y']);
            }
            ,
            gY['Jm'] = function() {
                var gn = this['Vv']['cl']();
                return (0x0,
                za['Ak'])(gn['x'], gn['y']);
            }
            ,
            gY['vm'] = function() {
                var gn = this['mw']();
                return (0x0,
                zI['ny'])(gn);
            }
            ,
            gY['zp'] = function() {
                return this['Dd']['qo'];
            }
            ,
            gY['Tv'] = function() {
                return this['Dd'];
            }
            ,
            gY['jm'] = function() {
                return this['Dd']['fd'];
            }
            ,
            gY['Qw'] = function() {
                return this['Rw'];
            }
            ,
            gY['Lo'] = function() {
                return this['CA'];
            }
            ,
            gY['vA'] = function() {
                return this['Bd'];
            }
            ,
            gY['Pm'] = function() {
                return this['Vv'];
            }
            ,
            gY['Um'] = function() {
                return this['Id'];
            }
            ,
            gD;
        }())
          , An = z2(0x718f)
          , AN = z2(0x109ea)
          , AX = function(gD, gY, gn, gN) {
            var gX = gD['Y'][zV(gY, gn, gN)];
            return void 0x0 === gX ? zx['k']['_h'] : gX;
        }
          , AB = function(gD, gY, gn, gN) {
            return AX(gD, gY, gn, gN) !== zx['k']['_h'];
        }
          , Ar = function(gD, gY, gn, gN) {
            return void 0x0 !== gD['Y'][zV(gY, gn, gN)];
        }
          , Al = function(gD) {
            var gY = []
              , gn = []
              , gN = []
              , gX = []
              , gB = [gD['j']]
              , gr = new Set();
            for (gr['add'](zV(gD['j']['x'], gD['j']['y'], gD['j']['z'])); gB['length'] > 0x0; ) {
                var gl = gB['pop']()
                  , gd = gl['x']
                  , gC = gl['y']
                  , gO = gl['z']
                  , gp = gd - gD['j']['x']
                  , gW = gC - gD['j']['y']
                  , gq = gO - gD['j']['z']
                  , gc = AB(gD, gd, gC, gO)
                  , gu = zV(gd, gC + 0x1, gO);
                if (gc && !AB(gD, gd, gC + 0x1, gO)) {
                    gY['push']((gp + 0.5) * z8['Z']['Ir'], (gW + 0.5) * z8['Z']['Ir'], (gq + 0.5) * z8['Z']['Ir']),
                    gY['push']((gp - 0.5) * z8['Z']['Ir'], (gW + 0.5) * z8['Z']['Ir'], (gq + 0.5) * z8['Z']['Ir']),
                    gY['push']((gp - 0.5) * z8['Z']['Ir'], (gW + 0.5) * z8['Z']['Ir'], (gq - 0.5) * z8['Z']['Ir']),
                    gY['push']((gp + 0.5) * z8['Z']['Ir'], (gW + 0.5) * z8['Z']['Ir'], (gq - 0.5) * z8['Z']['Ir']);
                    var gT = (0x0,
                    zb['ao'])(AB(gD, gd + 0x1, gC + 0x1, gO), AB(gD, gd, gC + 0x1, gO + 0x1), AB(gD, gd + 0x1, gC + 0x1, gO + 0x1))
                      , gw = (0x0,
                    zb['ao'])(AB(gD, gd, gC + 0x1, gO + 0x1), AB(gD, gd - 0x1, gC + 0x1, gO), AB(gD, gd - 0x1, gC + 0x1, gO + 0x1))
                      , gE = (0x0,
                    zb['ao'])(AB(gD, gd - 0x1, gC + 0x1, gO), AB(gD, gd, gC + 0x1, gO - 0x1), AB(gD, gd - 0x1, gC + 0x1, gO - 0x1))
                      , gm = (0x0,
                    zb['ao'])(AB(gD, gd, gC + 0x1, gO - 0x1), AB(gD, gd + 0x1, gC + 0x1, gO), AB(gD, gd + 0x1, gC + 0x1, gO - 0x1));
                    gN['push'](gT),
                    gN['push'](gw),
                    gN['push'](gE),
                    gN['push'](gm),
                    gT + gE < gw + gm ? (gn['push'](gY['length'] / 0x3 - 0x3, gY['length'] / 0x3 - 0x4, gY['length'] / 0x3 - 0x1),
                    gn['push'](gY['length'] / 0x3 - 0x1, gY['length'] / 0x3 - 0x2, gY['length'] / 0x3 - 0x3)) : (gn['push'](gY['length'] / 0x3 - 0x4, gY['length'] / 0x3 - 0x1, gY['length'] / 0x3 - 0x2),
                    gn['push'](gY['length'] / 0x3 - 0x2, gY['length'] / 0x3 - 0x3, gY['length'] / 0x3 - 0x4));
                    var ga = zd['Z'][AX(gD, gd, gC, gO)]['o']['i'];
                    gX['push'](ga['x'], ga['y'], 0x0, 0x1),
                    gX['push'](ga['x'], ga['y'], 0x1, 0x1),
                    gX['push'](ga['x'], ga['y'], 0x1, 0x0),
                    gX['push'](ga['x'], ga['y'], 0x0, 0x0);
                } else
                    Ar(gD, gd, gC + 0x1, gO) && !gr['has'](gu) && (gB['push']((0x0,
                    zg['XX'])(gd, gC + 0x1, gO)),
                    gr['add'](gu));
                var gZ = zV(gd, gC - 0x1, gO);
                if (gc && !AB(gD, gd, gC - 0x1, gO)) {
                    gY['push']((gp + 0.5) * z8['Z']['Ir'], (gW - 0.5) * z8['Z']['Ir'], (gq - 0.5) * z8['Z']['Ir']),
                    gY['push']((gp - 0.5) * z8['Z']['Ir'], (gW - 0.5) * z8['Z']['Ir'], (gq - 0.5) * z8['Z']['Ir']),
                    gY['push']((gp - 0.5) * z8['Z']['Ir'], (gW - 0.5) * z8['Z']['Ir'], (gq + 0.5) * z8['Z']['Ir']),
                    gY['push']((gp + 0.5) * z8['Z']['Ir'], (gW - 0.5) * z8['Z']['Ir'], (gq + 0.5) * z8['Z']['Ir']);
                    var gK = (0x0,
                    zb['ao'])(AB(gD, gd + 0x1, gC - 0x1, gO), AB(gD, gd, gC - 0x1, gO - 0x1), AB(gD, gd + 0x1, gC - 0x1, gO - 0x1))
                      , gH = (0x0,
                    zb['ao'])(AB(gD, gd, gC - 0x1, gO - 0x1), AB(gD, gd - 0x1, gC - 0x1, gO), AB(gD, gd - 0x1, gC - 0x1, gO - 0x1))
                      , gM = (0x0,
                    zb['ao'])(AB(gD, gd - 0x1, gC - 0x1, gO), AB(gD, gd, gC - 0x1, gO + 0x1), AB(gD, gd - 0x1, gC - 0x1, gO + 0x1))
                      , gv = (0x0,
                    zb['ao'])(AB(gD, gd, gC - 0x1, gO + 0x1), AB(gD, gd + 0x1, gC - 0x1, gO), AB(gD, gd + 0x1, gC - 0x1, gO + 0x1));
                    gN['push'](gK),
                    gN['push'](gH),
                    gN['push'](gM),
                    gN['push'](gv),
                    gK + gM < gH + gv ? (gn['push'](gY['length'] / 0x3 - 0x3, gY['length'] / 0x3 - 0x4, gY['length'] / 0x3 - 0x1),
                    gn['push'](gY['length'] / 0x3 - 0x1, gY['length'] / 0x3 - 0x2, gY['length'] / 0x3 - 0x3)) : (gn['push'](gY['length'] / 0x3 - 0x4, gY['length'] / 0x3 - 0x1, gY['length'] / 0x3 - 0x2),
                    gn['push'](gY['length'] / 0x3 - 0x2, gY['length'] / 0x3 - 0x3, gY['length'] / 0x3 - 0x4));
                    var P0 = zd['Z'][AX(gD, gd, gC, gO)]['o']['u'];
                    gX['push'](P0['x'], P0['y'], 0x0, 0x1),
                    gX['push'](P0['x'], P0['y'], 0x1, 0x1),
                    gX['push'](P0['x'], P0['y'], 0x1, 0x0),
                    gX['push'](P0['x'], P0['y'], 0x0, 0x0);
                } else
                    Ar(gD, gd, gC - 0x1, gO) && !gr['has'](gZ) && (gB['push']((0x0,
                    zg['XX'])(gd, gC - 0x1, gO)),
                    gr['add'](gZ));
                var P1 = zV(gd + 0x1, gC, gO);
                if (gc && !AB(gD, gd + 0x1, gC, gO)) {
                    gY['push']((gp + 0.5) * z8['Z']['Ir'], (gW + 0.5) * z8['Z']['Ir'], (gq + 0.5) * z8['Z']['Ir']),
                    gY['push']((gp + 0.5) * z8['Z']['Ir'], (gW + 0.5) * z8['Z']['Ir'], (gq - 0.5) * z8['Z']['Ir']),
                    gY['push']((gp + 0.5) * z8['Z']['Ir'], (gW - 0.5) * z8['Z']['Ir'], (gq - 0.5) * z8['Z']['Ir']),
                    gY['push']((gp + 0.5) * z8['Z']['Ir'], (gW - 0.5) * z8['Z']['Ir'], (gq + 0.5) * z8['Z']['Ir']);
                    var P2 = (0x0,
                    zb['ao'])(AB(gD, gd + 0x1, gC, gO + 0x1), AB(gD, gd + 0x1, gC + 0x1, gO), AB(gD, gd + 0x1, gC + 0x1, gO + 0x1))
                      , P3 = (0x0,
                    zb['ao'])(AB(gD, gd + 0x1, gC + 0x1, gO), AB(gD, gd + 0x1, gC, gO - 0x1), AB(gD, gd + 0x1, gC + 0x1, gO - 0x1))
                      , P4 = (0x0,
                    zb['ao'])(AB(gD, gd + 0x1, gC, gO - 0x1), AB(gD, gd + 0x1, gC - 0x1, gO), AB(gD, gd + 0x1, gC - 0x1, gO - 0x1))
                      , P5 = (0x0,
                    zb['ao'])(AB(gD, gd + 0x1, gC - 0x1, gO), AB(gD, gd + 0x1, gC, gO + 0x1), AB(gD, gd + 0x1, gC - 0x1, gO + 0x1));
                    gN['push'](P2),
                    gN['push'](P3),
                    gN['push'](P4),
                    gN['push'](P5),
                    P2 + P4 < P3 + P5 ? (gn['push'](gY['length'] / 0x3 - 0x3, gY['length'] / 0x3 - 0x4, gY['length'] / 0x3 - 0x1),
                    gn['push'](gY['length'] / 0x3 - 0x1, gY['length'] / 0x3 - 0x2, gY['length'] / 0x3 - 0x3)) : (gn['push'](gY['length'] / 0x3 - 0x4, gY['length'] / 0x3 - 0x1, gY['length'] / 0x3 - 0x2),
                    gn['push'](gY['length'] / 0x3 - 0x2, gY['length'] / 0x3 - 0x3, gY['length'] / 0x3 - 0x4));
                    var P6 = zd['Z'][AX(gD, gd, gC, gO)]['o']['m'];
                    gX['push'](P6['x'], P6['y'], 0x0, 0x1),
                    gX['push'](P6['x'], P6['y'], 0x1, 0x1),
                    gX['push'](P6['x'], P6['y'], 0x1, 0x0),
                    gX['push'](P6['x'], P6['y'], 0x0, 0x0);
                } else
                    Ar(gD, gd + 0x1, gC, gO) && !gr['has'](P1) && (gB['push']((0x0,
                    zg['XX'])(gd + 0x1, gC, gO)),
                    gr['add'](P1));
                var P7 = zV(gd - 0x1, gC, gO);
                if (gc && !AB(gD, gd - 0x1, gC, gO)) {
                    gY['push']((gp - 0.5) * z8['Z']['Ir'], (gW + 0.5) * z8['Z']['Ir'], (gq - 0.5) * z8['Z']['Ir']),
                    gY['push']((gp - 0.5) * z8['Z']['Ir'], (gW + 0.5) * z8['Z']['Ir'], (gq + 0.5) * z8['Z']['Ir']),
                    gY['push']((gp - 0.5) * z8['Z']['Ir'], (gW - 0.5) * z8['Z']['Ir'], (gq + 0.5) * z8['Z']['Ir']),
                    gY['push']((gp - 0.5) * z8['Z']['Ir'], (gW - 0.5) * z8['Z']['Ir'], (gq - 0.5) * z8['Z']['Ir']);
                    var P8 = (0x0,
                    zb['ao'])(AB(gD, gd - 0x1, gC, gO - 0x1), AB(gD, gd - 0x1, gC + 0x1, gO), AB(gD, gd - 0x1, gC + 0x1, gO - 0x1))
                      , P9 = (0x0,
                    zb['ao'])(AB(gD, gd - 0x1, gC + 0x1, gO), AB(gD, gd - 0x1, gC, gO + 0x1), AB(gD, gd - 0x1, gC + 0x1, gO + 0x1))
                      , Pz = (0x0,
                    zb['ao'])(AB(gD, gd - 0x1, gC, gO + 0x1), AB(gD, gd - 0x1, gC - 0x1, gO), AB(gD, gd - 0x1, gC - 0x1, gO + 0x1))
                      , PA = (0x0,
                    zb['ao'])(AB(gD, gd - 0x1, gC - 0x1, gO), AB(gD, gd - 0x1, gC, gO - 0x1), AB(gD, gd - 0x1, gC - 0x1, gO - 0x1));
                    gN['push'](P8),
                    gN['push'](P9),
                    gN['push'](Pz),
                    gN['push'](PA),
                    P8 + Pz < P9 + PA ? (gn['push'](gY['length'] / 0x3 - 0x3, gY['length'] / 0x3 - 0x4, gY['length'] / 0x3 - 0x1),
                    gn['push'](gY['length'] / 0x3 - 0x1, gY['length'] / 0x3 - 0x2, gY['length'] / 0x3 - 0x3)) : (gn['push'](gY['length'] / 0x3 - 0x4, gY['length'] / 0x3 - 0x1, gY['length'] / 0x3 - 0x2),
                    gn['push'](gY['length'] / 0x3 - 0x2, gY['length'] / 0x3 - 0x3, gY['length'] / 0x3 - 0x4));
                    var PG = zd['Z'][AX(gD, gd, gC, gO)]['o']['p'];
                    gX['push'](PG['x'], PG['y'], 0x0, 0x1),
                    gX['push'](PG['x'], PG['y'], 0x1, 0x1),
                    gX['push'](PG['x'], PG['y'], 0x1, 0x0),
                    gX['push'](PG['x'], PG['y'], 0x0, 0x0);
                } else
                    Ar(gD, gd - 0x1, gC, gO) && !gr['has'](P7) && (gB['push']((0x0,
                    zg['XX'])(gd - 0x1, gC, gO)),
                    gr['add'](P7));
                var Pe = zV(gd, gC, gO + 0x1);
                if (gc && !AB(gD, gd, gC, gO + 0x1)) {
                    gY['push']((gp - 0.5) * z8['Z']['Ir'], (gW + 0.5) * z8['Z']['Ir'], (gq + 0.5) * z8['Z']['Ir']),
                    gY['push']((gp + 0.5) * z8['Z']['Ir'], (gW + 0.5) * z8['Z']['Ir'], (gq + 0.5) * z8['Z']['Ir']),
                    gY['push']((gp + 0.5) * z8['Z']['Ir'], (gW - 0.5) * z8['Z']['Ir'], (gq + 0.5) * z8['Z']['Ir']),
                    gY['push']((gp - 0.5) * z8['Z']['Ir'], (gW - 0.5) * z8['Z']['Ir'], (gq + 0.5) * z8['Z']['Ir']);
                    var Pg = (0x0,
                    zb['ao'])(AB(gD, gd - 0x1, gC, gO + 0x1), AB(gD, gd, gC + 0x1, gO + 0x1), AB(gD, gd - 0x1, gC + 0x1, gO + 0x1))
                      , PP = (0x0,
                    zb['ao'])(AB(gD, gd, gC + 0x1, gO + 0x1), AB(gD, gd + 0x1, gC, gO + 0x1), AB(gD, gd + 0x1, gC + 0x1, gO + 0x1))
                      , Pj = (0x0,
                    zb['ao'])(AB(gD, gd + 0x1, gC, gO + 0x1), AB(gD, gd, gC - 0x1, gO + 0x1), AB(gD, gd + 0x1, gC - 0x1, gO + 0x1))
                      , Po = (0x0,
                    zb['ao'])(AB(gD, gd, gC - 0x1, gO + 0x1), AB(gD, gd - 0x1, gC, gO + 0x1), AB(gD, gd - 0x1, gC - 0x1, gO + 0x1));
                    gN['push'](Pg),
                    gN['push'](PP),
                    gN['push'](Pj),
                    gN['push'](Po),
                    Pg + Pj < PP + Po ? (gn['push'](gY['length'] / 0x3 - 0x3, gY['length'] / 0x3 - 0x4, gY['length'] / 0x3 - 0x1),
                    gn['push'](gY['length'] / 0x3 - 0x1, gY['length'] / 0x3 - 0x2, gY['length'] / 0x3 - 0x3)) : (gn['push'](gY['length'] / 0x3 - 0x4, gY['length'] / 0x3 - 0x1, gY['length'] / 0x3 - 0x2),
                    gn['push'](gY['length'] / 0x3 - 0x2, gY['length'] / 0x3 - 0x3, gY['length'] / 0x3 - 0x4));
                    var PI = zd['Z'][AX(gD, gd, gC, gO)]['o']['l'];
                    gX['push'](PI['x'], PI['y'], 0x0, 0x1),
                    gX['push'](PI['x'], PI['y'], 0x1, 0x1),
                    gX['push'](PI['x'], PI['y'], 0x1, 0x0),
                    gX['push'](PI['x'], PI['y'], 0x0, 0x0);
                } else
                    Ar(gD, gd, gC, gO + 0x1) && !gr['has'](Pe) && (gB['push']((0x0,
                    zg['XX'])(gd, gC, gO + 0x1)),
                    gr['add'](Pe));
                var PJ = zV(gd, gC, gO - 0x1);
                if (gc && !AB(gD, gd, gC, gO - 0x1)) {
                    gY['push']((gp + 0.5) * z8['Z']['Ir'], (gW + 0.5) * z8['Z']['Ir'], (gq - 0.5) * z8['Z']['Ir']),
                    gY['push']((gp - 0.5) * z8['Z']['Ir'], (gW + 0.5) * z8['Z']['Ir'], (gq - 0.5) * z8['Z']['Ir']),
                    gY['push']((gp - 0.5) * z8['Z']['Ir'], (gW - 0.5) * z8['Z']['Ir'], (gq - 0.5) * z8['Z']['Ir']),
                    gY['push']((gp + 0.5) * z8['Z']['Ir'], (gW - 0.5) * z8['Z']['Ir'], (gq - 0.5) * z8['Z']['Ir']);
                    var Py = (0x0,
                    zb['ao'])(AB(gD, gd + 0x1, gC, gO - 0x1), AB(gD, gd, gC + 0x1, gO - 0x1), AB(gD, gd + 0x1, gC + 0x1, gO - 0x1))
                      , PR = (0x0,
                    zb['ao'])(AB(gD, gd, gC + 0x1, gO - 0x1), AB(gD, gd - 0x1, gC, gO - 0x1), AB(gD, gd - 0x1, gC + 0x1, gO - 0x1))
                      , PS = (0x0,
                    zb['ao'])(AB(gD, gd - 0x1, gC, gO - 0x1), AB(gD, gd, gC - 0x1, gO - 0x1), AB(gD, gd - 0x1, gC - 0x1, gO - 0x1))
                      , PQ = (0x0,
                    zb['ao'])(AB(gD, gd, gC - 0x1, gO - 0x1), AB(gD, gd + 0x1, gC, gO - 0x1), AB(gD, gd + 0x1, gC - 0x1, gO - 0x1));
                    gN['push'](Py),
                    gN['push'](PR),
                    gN['push'](PS),
                    gN['push'](PQ),
                    Py + PS < PR + PQ ? (gn['push'](gY['length'] / 0x3 - 0x3, gY['length'] / 0x3 - 0x4, gY['length'] / 0x3 - 0x1),
                    gn['push'](gY['length'] / 0x3 - 0x1, gY['length'] / 0x3 - 0x2, gY['length'] / 0x3 - 0x3)) : (gn['push'](gY['length'] / 0x3 - 0x4, gY['length'] / 0x3 - 0x1, gY['length'] / 0x3 - 0x2),
                    gn['push'](gY['length'] / 0x3 - 0x2, gY['length'] / 0x3 - 0x3, gY['length'] / 0x3 - 0x4));
                    var PL = zd['Z'][AX(gD, gd, gC, gO)]['o']['h'];
                    gX['push'](PL['x'], PL['y'], 0x0, 0x1),
                    gX['push'](PL['x'], PL['y'], 0x1, 0x1),
                    gX['push'](PL['x'], PL['y'], 0x1, 0x0),
                    gX['push'](PL['x'], PL['y'], 0x0, 0x0);
                } else
                    Ar(gD, gd, gC, gO - 0x1) && !gr['has'](PJ) && (gB['push']((0x0,
                    zg['XX'])(gd, gC, gO - 0x1)),
                    gr['add'](PJ));
            }
            return {
                'J': (0x0,
                zg['XX'])((gD['j']['x'] + 0.5) * z8['Z']['Ir'], (gD['j']['y'] + 0.5) * z8['Z']['Ir'], (gD['j']['z'] + 0.5) * z8['Z']['Ir']),
                'X': gY,
                'Z': gn,
                '$$': gN,
                't$': gX
            };
        };
        function Ad(gD, gY) {
            var gn = 'undefined' != typeof Symbol && gD[Symbol['iterator']] || gD['@@iterator'];
            if (gn)
                return (gn = gn['call'](gD))['next']['bind'](gn);
            if (Array['isArray'](gD) || (gn = function(gX, gB) {
                if (!gX)
                    return;
                if ('string' == typeof gX)
                    return AC(gX, gB);
                var gr = Object['prototype']['toString']['call'](gX)['slice'](0x8, -0x1);
                'Object' === gr && gX['constructor'] && (gr = gX['constructor']['name']);
                if ('Map' === gr || 'Set' === gr)
                    return Array['from'](gX);
                if ('Arguments' === gr || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/['test'](gr))
                    return AC(gX, gB);
            }(gD)) || gY && gD && 'number' == typeof gD['length']) {
                gn && (gD = gn);
                var gN = 0x0;
                return function() {
                    return gN >= gD['length'] ? {
                        'done': !0x0
                    } : {
                        'done': !0x1,
                        'value': gD[gN++]
                    };
                }
                ;
            }
            throw new TypeError('Invalid\x20attempt\x20to\x20iterate\x20non-iterable\x20instance.\x0aIn\x20order\x20to\x20be\x20iterable,\x20non-array\x20objects\x20must\x20have\x20a\x20[Symbol.iterator]()\x20method.');
        }
        function AC(gD, gY) {
            (null == gY || gY > gD['length']) && (gY = gD['length']);
            for (var gn = 0x0, gN = new Array(gY); gn < gY; gn++)
                gN[gn] = gD[gn];
            return gN;
        }
        var AO = (function() {
            function gD(gn) {
                var gN = this;
                this['Nm'] = function(gB, gr) {
                    if (void 0x0 !== gN['tG']) {
                        if (gN['tG']['Iv']() === gr['Fv']()['Iv']())
                            return;
                        (0x0,
                        zM['Lq'])(gN['tG']['Iv']()) ? gN['Xm']() : gN['tG']instanceof AN['Z'] ? gN['Vm'](void 0x0) : gN['tG']['Iv']() !== A3['q']['Ee'] && gN['tG']['Iv']() !== A3['q']['Se'] || gN['Tm'](void 0x0);
                    }
                    gN['tG'] = gr['Fv'](),
                    (0x0,
                    zM['Lq'])(gr['Fv']()['Iv']()) ? (gN['Fm'](gr['Fv']()['Iv']() - A3['q']['de']),
                    gN['Bm']()) : gr['Fv']()instanceof AN['Z'] ? (gN['Om']['opacity'] = 0.1,
                    gN['qm']()) : gN['tG']['Iv']() === A3['q']['Ee'] ? (gN['Om']['opacity'] = 0.4,
                    gN['Lm']()) : gN['tG']['Iv']() === A3['q']['Se'] && (gN['Om']['opacity'] = 0.2,
                    gN['Ym']());
                }
                ,
                this['Bd'] = gn;
                var gX = new z7['nvb'](z8['Z']['Ir'],z8['Z']['Ir'],z8['Z']['Ir']);
                this['Om'] = new z7['vBJ']({
                    'color': 0xffffff,
                    'transparent': !0x0,
                    'opacity': 0.1,
                    'depthWrite': !0x1
                }),
                this['Hm'] = new z7['Kj0'](gX,this['Om']),
                this['Hm']['renderOrder'] = -0x1,
                this['Hm']['scale']['set'](1.001, 1.001, 1.001),
                this['Bd']['cA']()['Lo']()['Ss']()['add'](this['Hm']),
                this['Qm'] = A2['f']['de'],
                this['_m'] = new z7['jyz']({
                    'transparent': !0x0,
                    'uniforms': {
                        'map': {
                            'value': z9['Z']['Dh']()
                        }
                    },
                    'vertexShader': '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20attribute\x20vec4\x20realUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec4\x20vRealUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20mvPosition\x20=\x20modelViewMatrix\x20*\x20vec4(position,\x201.0);;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20projectionMatrix\x20*\x20mvPosition;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vRealUv\x20=\x20realUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
                    'fragmentShader': '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20sampler2D\x20map;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec4\x20vRealUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20atlasDim\x20=\x20' + z8['Z']['ur']['toFixed'](0x1) + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20diffuseColor\x20=\x20vec4(1.0,\x201.0,\x201.0,\x200.4);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20tilePosX\x20=\x20max(0.05,\x20min(0.95,\x20fract(vRealUv.z)));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20tilePosY\x20=\x20max(0.05,\x20min(0.95,\x20fract(vRealUv.w)));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20uv\x20=\x20vec2(vRealUv.x\x20*\x20(1.0\x20/\x20atlasDim)\x20+\x20tilePosX\x20*\x20(1.0\x20/\x20atlasDim),\x20vRealUv.y\x20*\x20(1.0\x20/\x20atlasDim)\x20+\x20tilePosY\x20*\x20(1.0\x20/\x20atlasDim));\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20texelColor\x20=\x20texture2D(map,\x20uv);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20texelColor\x20=\x20mapTexelToLinear(texelColor);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20diffuseColor\x20*=\x20texelColor.rgba;\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20diffuseColor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
                    'fog': !0x1,
                    'depthWrite': !0x1
                }),
                this['Wm'] = new z7['vBJ']({
                    'color': 0xff0000,
                    'transparent': !0x0,
                    'opacity': 0.3,
                    'depthWrite': !0x1
                }),
                this['jA']();
            }
            var gY = gD['prototype'];
            return gY['jA'] = function() {
                zA['Z']['on'](zG['x']['_p'], this['Nm']);
            }
            ,
            gY['bs'] = function(gn, gN) {
                void 0x0 !== this['tG'] && ((0x0,
                zM['Lq'])(this['tG']['Iv']()) ? (this['Qm'] !== this['Bd']['cA']()['Tv']()['md'] && (this['Qm'] = this['Bd']['cA']()['Tv']()['md'],
                this['Fm'](this['tG']['Iv']() - A3['q']['de'])),
                this['Bm']()) : this['tG']instanceof AN['Z'] ? this['qm']() : this['tG']['Iv']() === A3['q']['Ee'] ? this['Lm']() : this['tG']['Iv']() === A3['q']['Se'] && this['Ym']());
            }
            ,
            gY['Lm'] = function() {
                var gn = this['Bd']['cA']()['om']();
                this['Tm'](gn);
            }
            ,
            gY['Ym'] = function() {
                var gn = this['Bd']['cA']()['um']();
                this['Tm'](gn);
            }
            ,
            gY['qm'] = function() {
                var gn = this['Bd']['cA']()['xm']();
                this['Vm'](gn);
            }
            ,
            gY['Tm'] = function(gn) {
                if (gn) {
                    var gN = this['Bd']['cA']()['Lo']()['Sl']()['Xh']()['jx'](gn['x'], gn['y'], gn['z']);
                    this['Hm']['position']['set'](gN['x'], gN['y'], gN['z']);
                } else
                    this['Hm']['position']['set'](0x0, -0x3e7, 0x0);
            }
            ,
            gY['Vm'] = function(gn) {
                var gN = this['tG'];
                gn && this['tG']instanceof AN['Z'] && gN['Zm'](this['Bd']['cA']()['Lo']()['Sl']()['Xh']()['Ix'](gn['x'], gn['y'], gn['z'])) ? this['Tm'](gn) : this['Hm']['position']['set'](0x0, -0x3e7, 0x0);
            }
            ,
            gY['Fm'] = function(gn) {
                this['Xm']();
                var gN = {
                    'j': (0x0,
                    zg['XX'])(0x0, 0x0, 0x0),
                    'Y': {}
                };
                if (this['Qm'] === A2['f']['de'])
                    gN['Y'][zV(0x0, 0x0, 0x0)] = gn;
                else {
                    if (this['Qm'] === A2['f']['Km']) {
                        for (var gX = -0x1; gX <= 0x1; gX++)
                            for (var gB = 0x0; gB <= 0x2; gB++)
                                gN['Y'][zV(gX, gB, 0x0)] = gn;
                    } else {
                        if (this['Qm'] === A2['f']['tz']) {
                            for (var gr = -0x1; gr <= 0x1; gr++)
                                gN['Y'][zV(gr, 0x0, 0x0)] = gn,
                                gN['Y'][zV(gr, 0x0, 0x1)] = gn,
                                gN['Y'][zV(gr, 0x1, 0x1)] = gn,
                                gN['Y'][zV(gr, 0x1, 0x2)] = gn;
                        } else {
                            if (this['Qm'] === A2['f']['iz']) {
                                for (var gl = -0x1; gl <= 0x1; gl++)
                                    for (var gd = -0x1; gd <= 0x1; gd++)
                                        gN['Y'][zV(gl, 0x0, gd)] = gn;
                            }
                        }
                    }
                }
                var gC = Al(gN)
                  , gO = gC['Z']
                  , gp = gC['X']
                  , gW = gC['t$']
                  , gq = gC['$$']
                  , gc = new z7['u9r']();
                gc['setAttribute']('position', new z7['a$l'](gp,0x3)),
                gc['setIndex'](new z7['qlB'](gO,0x1)),
                gc['setAttribute']('ao', new z7['WTc'](gq,0x1,!0x0)),
                gc['setAttribute']('realUv', new z7['WTc'](gW,0x4)),
                this['sz'] = new z7['Kj0'](gc,this['_m']),
                this['sz']['scale']['set'](0.999, 0.999, 0.999),
                this['sz']['renderOrder'] = -0x1,
                this['Bd']['cA']()['Lo']()['Ss']()['add'](this['sz']);
            }
            ,
            gY['Xm'] = function() {
                void 0x0 !== this['sz'] && (this['sz']['geometry']['dispose'](),
                this['Bd']['cA']()['Lo']()['Ss']()['remove'](this['sz']),
                this['sz'] = void 0x0);
            }
            ,
            gY['Bm'] = function() {
                if (void 0x0 !== this['sz']) {
                    var gn = this['Bd']['cA']()['rm'](this['Bd']['cA']()['ww']);
                    if (gn['yw']) {
                        var gN = this['Bd']['cA']()['Lo']()['Sl']()['Xh']()['Jx'](gn['J']['x'] + 0.01 * gn['Gw']['x'], gn['J']['y'] + 0.01 * gn['Gw']['y'], gn['J']['z'] + 0.01 * gn['Gw']['z'])
                          , gX = [];
                        if (this['Qm'] === A2['f']['Km']) {
                            var gB = (0x0,
                            zg['r1'])(this['Bd']['cA']()['vm'](), (0x0,
                            zg['XX'])(0x0, 0x0, 0x1));
                            if (Math['abs'](gB) < 0.5) {
                                for (var gr = -0x1; gr <= 0x1; gr++)
                                    for (var gl = 0x0; gl <= 0x2; gl++)
                                        gX['push']((0x0,
                                        zg['XX'])(gN['x'], gl + gN['y'], gr + gN['z']));
                                this['sz']['rotation']['set'](0x0, Math['PI'] / 0x2, 0x0);
                            } else {
                                for (var gd = -0x1; gd <= 0x1; gd++)
                                    for (var gC = 0x0; gC <= 0x2; gC++)
                                        gX['push']((0x0,
                                        zg['XX'])(gd + gN['x'], gC + gN['y'], gN['z']));
                                this['sz']['rotation']['set'](0x0, 0x0, 0x0);
                            }
                        } else {
                            if (this['Qm'] === A2['f']['de'])
                                gX['push'](gN);
                            else {
                                if (this['Qm'] === A2['f']['tz']) {
                                    var gO = this['Bd']['cA']()['mw']()['y'];
                                    if (gO >= -Math['PI'] / 0x4 && gO <= Math['PI'] / 0x4) {
                                        for (var gp = -0x1; gp <= 0x1; gp++)
                                            gX['push']((0x0,
                                            zg['XX'])(gp + gN['x'], 0x0 + gN['y'], 0x0 + gN['z'])),
                                            gX['push']((0x0,
                                            zg['XX'])(gp + gN['x'], 0x0 + gN['y'], -0x1 + gN['z'])),
                                            gX['push']((0x0,
                                            zg['XX'])(gp + gN['x'], 0x1 + gN['y'], -0x1 + gN['z'])),
                                            gX['push']((0x0,
                                            zg['XX'])(gp + gN['x'], 0x1 + gN['y'], -0x2 + gN['z']));
                                        this['sz']['rotation']['set'](0x0, -Math['PI'], 0x0);
                                    } else {
                                        if (gO >= -Math['PI'] / 0x4 * 0x3 && gO < -Math['PI'] / 0x4) {
                                            for (var gW = -0x1; gW <= 0x1; gW++)
                                                gX['push']((0x0,
                                                zg['XX'])(0x0 + gN['x'], 0x0 + gN['y'], gW + gN['z'])),
                                                gX['push']((0x0,
                                                zg['XX'])(0x1 + gN['x'], 0x0 + gN['y'], gW + gN['z'])),
                                                gX['push']((0x0,
                                                zg['XX'])(0x1 + gN['x'], 0x1 + gN['y'], gW + gN['z'])),
                                                gX['push']((0x0,
                                                zg['XX'])(0x2 + gN['x'], 0x1 + gN['y'], gW + gN['z']));
                                            this['sz']['rotation']['set'](0x0, Math['PI'] / 0x2, 0x0);
                                        } else {
                                            if (gO < -Math['PI'] / 0x4 * 0x3 || gO >= Math['PI'] / 0x4 * 0x3) {
                                                for (var gq = -0x1; gq <= 0x1; gq++)
                                                    gX['push']((0x0,
                                                    zg['XX'])(gq + gN['x'], 0x0 + gN['y'], 0x0 + gN['z'])),
                                                    gX['push']((0x0,
                                                    zg['XX'])(gq + gN['x'], 0x0 + gN['y'], 0x1 + gN['z'])),
                                                    gX['push']((0x0,
                                                    zg['XX'])(gq + gN['x'], 0x1 + gN['y'], 0x1 + gN['z'])),
                                                    gX['push']((0x0,
                                                    zg['XX'])(gq + gN['x'], 0x1 + gN['y'], 0x2 + gN['z']));
                                                this['sz']['rotation']['set'](0x0, 0x0, 0x0);
                                            } else {
                                                for (var gc = -0x1; gc <= 0x1; gc++)
                                                    gX['push']((0x0,
                                                    zg['XX'])(0x0 + gN['x'], 0x0 + gN['y'], gc + gN['z'])),
                                                    gX['push']((0x0,
                                                    zg['XX'])(-0x1 + gN['x'], 0x0 + gN['y'], gc + gN['z'])),
                                                    gX['push']((0x0,
                                                    zg['XX'])(-0x1 + gN['x'], 0x1 + gN['y'], gc + gN['z'])),
                                                    gX['push']((0x0,
                                                    zg['XX'])(-0x2 + gN['x'], 0x1 + gN['y'], gc + gN['z']));
                                                this['sz']['rotation']['set'](0x0, -Math['PI'] / 0x2, 0x0);
                                            }
                                        }
                                    }
                                } else {
                                    if (this['Qm'] === A2['f']['iz']) {
                                        var gu = this['Bd']['cA']()['vm']()
                                          , gT = Math['abs'](gu['x']) > Math['abs'](gu['z']) ? gu['x'] > 0x0 ? (0x0,
                                        zg['XX'])(0x1, 0x0, 0x0) : (0x0,
                                        zg['XX'])(-0x1, 0x0, 0x0) : gu['z'] > 0x0 ? (0x0,
                                        zg['XX'])(0x0, 0x0, 0x1) : (0x0,
                                        zg['XX'])(0x0, 0x0, -0x1);
                                        if (0x0 === gn['Gw']['y'])
                                            (0x0,
                                            zg['$j'])(gN, gn['Gw']);
                                        else {
                                            var gw = this['Bd']['cA']()['Lo']()['Sl']()['Xh']()['Jx'](gn['J']['x'] - 0.01 * gn['Gw']['x'], gn['J']['y'] - 0.01 * gn['Gw']['y'], gn['J']['z'] - 0.01 * gn['Gw']['z'])
                                              , gE = (0x0,
                                            zg['dg'])(gw)
                                              , gm = (0x0,
                                            zg['dg'])(gw);
                                            (0x0,
                                            zg['$j'])(gE, gT),
                                            (0x0,
                                            zg['$j'])(gm, gT),
                                            (0x0,
                                            zg['$j'])(gm, (0x0,
                                            zg['XX'])(0x0, gn['Gw']['y'], 0x0));
                                            var ga = this['Bd']['cA']()['Lo']()['Sl']()['Xh']()['Ix'](gE['x'], gE['y'], gE['z'])
                                              , gZ = this['Bd']['cA']()['Lo']()['Sl']()['Xh']()['Ix'](gm['x'], gm['y'], gm['z']);
                                            zd['Z'][ga]['t'] || zd['Z'][gZ]['t'] || ((0x0,
                                            zg['$j'])(gN, gT),
                                            (0x0,
                                            zg['$j'])(gN, gT),
                                            (0x0,
                                            zg['$j'])(gN, (0x0,
                                            zg['XX'])(0x0, -gn['Gw']['y'], 0x0)));
                                        }
                                        for (var gK = -0x1; gK <= 0x1; gK++)
                                            for (var gH = -0x1; gH <= 0x1; gH++)
                                                gX['push']((0x0,
                                                zg['XX'])(gK + gN['x'], gN['y'], gH + gN['z']));
                                    }
                                }
                            }
                        }
                        this['sz']['visible'] = !0x0;
                        var gM = this['Bd']['cA']()['Lo']()['Sl']()['Xh']()['jx'](gN['x'], gN['y'], gN['z']);
                        if (this['sz']['position']['set'](gM['x'], gM['y'], gM['z']),
                        this['hz'](gX)) {
                            for (var gv = 0x0, P0 = 0x0; P0 < gX['length']; P0++) {
                                var P1 = gX[P0]
                                  , P2 = this['Bd']['cA']()['Lo']()['Sl']()['Xh']()['Ix'](P1['x'], P1['y'], P1['z']);
                                zd['Z'][P2]['t'] || ++gv;
                            }
                            this['Bd']['cA']()['Tv']()['qo']['nz']([{
                                'type': this['tG']['Iv'](),
                                'count': gv
                            }]) ? this['sz']['material'] = this['_m'] : this['sz']['material'] = this['Wm'];
                        } else
                            this['sz']['material'] = this['Wm'];
                    } else
                        this['sz']['visible'] = !0x1;
                }
            }
            ,
            gY['hz'] = function(gn) {
                for (var gN = this['Bd']['cA']()['Lo']()['Ml']()['lm'](), gX = (0x0,
                zm['FY'])(this['Bd']['cA']()['jm']()['hA'], this['Bd']['cA']()['jm']()['dd']), gB = 0x0; gB < gn['length']; gB++) {
                    var gr = gn[gB]
                      , gl = this['Bd']['cA']()['Lo']()['Sl']()['Xh']()['jx'](gr['x'], gr['y'], gr['z'])
                      , gd = (0x0,
                    zm['Z5'])(gl);
                    if ((0x0,
                    An['v'])(gX, gd))
                        return !0x1;
                    for (var gC, gO = Ad(gN); !(gC = gO())['done']; ) {
                        var gp = gC['value'];
                        if (gp['ym']() === A9['p']['zl']) {
                            var gW = gp;
                            if (gW['ed']()) {
                                var gq = (0x0,
                                zm['FY'])(gW['Qx']()['position'], gW['QG']() === zT['b']['wl'] ? z8['Z']['pr'] : z8['Z']['Cr']);
                                if ((0x0,
                                An['v'])(gq, gd))
                                    return !0x1;
                            }
                        }
                    }
                }
                return !0x0;
            }
            ,
            gD;
        }())
          , Ap = (function() {
            function gD(gn) {
                this['Bd'] = gn,
                this['JA'] = new z7['Tme'](),
                this['ez'] = [];
            }
            var gY = gD['prototype'];
            return gY['rz'] = function(gn, gN, gX) {
                if (this['Bd']['Lo']()['oz']()['xz']) {
                    var gB = z9['Z']['Cl'](gX);
                    (0x0,
                    zg['cz'])(gN);
                    var gr = new z7['_fP']();
                    gr['setFromUnitVectors'](new z7['Pa4'](0x0,0x0,0x1), new z7['Pa4'](gN['x'],gN['y'],gN['z'])),
                    gB['position']['set'](gn['x'], gn['y'], gn['z']),
                    gB['rotation']['setFromQuaternion'](gr);
                    var gl = new z7['Pa4'](0x0,0x0,0x1);
                    gl['applyQuaternion'](gr),
                    this['JA']['add'](gB);
                    var gd = new z7['Pa4']();
                    gd['setFromMatrixColumn'](this['Bd']['cA']()['Qw']()['js']()['matrix'], 0x0),
                    gd['normalize'](),
                    gd['multiplyScalar'](0x2),
                    gd['y'] = 1.5,
                    this['ez']['push']({
                        'mesh': gB,
                        'origin': gn,
                        'velocity': gd,
                        'rotationalAxis': gl
                    });
                }
            }
            ,
            gY['bs'] = function(gn, gN) {
                for (var gX = 0x0; gX < this['ez']['length']; gX++) {
                    var gB = this['ez'][gX]
                      , gr = gB['mesh']['position'];
                    gB['mesh']['position']['set'](gr['x'] + gB['velocity']['x'] * gn, gr['y'] + gB['velocity']['y'] * gn, gr['z'] + gB['velocity']['z'] * gn),
                    gB['velocity']['y'] -= 0xf * gn,
                    gB['mesh']['rotateOnWorldAxis'](gB['rotationalAxis'], 0x14 * gn),
                    gB['origin']['y'] - gr['y'] > 0x5 && (this['JA']['remove'](gB['mesh']),
                    z9['Z']['rG'](gB['mesh']),
                    this['ez'][gX] = this['ez'][this['ez']['length'] - 0x1],
                    this['ez']['pop'](),
                    --gX);
                }
            }
            ,
            gY['Qx'] = function() {
                return this['JA'];
            }
            ,
            gD;
        }())
          , AW = (function() {
            function gD(gn, gN, gX, gB) {
                var gr = this;
                this['az'] = function(gl, gd, gC) {
                    gr['yl'](gl, gd, gC);
                }
                ,
                this['uz'] = function(gl, gd, gC, gO) {
                    gr['lA'](gl, gd, gC, gO);
                }
                ,
                this['nd'] = function(gl, gd, gC, gO, gp, gW) {
                    gO && (gr['Az'](),
                    gp && gr['yl'](A4['k']['fz'], 0x0, 0x1),
                    gr['yl'](A4['k']['vz'], 0x0, 0.8),
                    gW && gr['yl'](A4['k']['lz'], 0x0, 0x1));
                }
                ,
                this['fw'] = function(gl, gd) {
                    gr['yl'](A4['k']['yz'], 0x0, 0x1);
                    var gC = new z7['xeV']({
                        'map': z9['Z']['gs'](),
                        'transparent': !0x0
                    })
                      , gO = new z7['jyi'](gC);
                    gO['scale']['set'](0x4, z9['Z']['gs']()['image']['height'] / z9['Z']['gs']()['image']['width'] * 0x4, 0x1),
                    gO['position']['z'] = -z8['Z']['Hr'] / 0x2,
                    gr['Rw']['Cs']()['add'](gO);
                    var gp = {
                        'Gz': gO,
                        'dz': gl,
                        'wz': Date['now']()
                    };
                    gr['pz'](gp),
                    gr['mz']['push'](gp);
                }
                ,
                this['gA'] = function(gl, gd, gC, gO, gp, gW, gq, gc, gu, gT) {
                    z8['Z']['Zr'] = gu,
                    z8['Z']['oo'] = gT,
                    gr['rs'](),
                    (0x0,
                    zP['bl'])(AQ['Q']['me']),
                    (0x0,
                    zP['gN'])(gl),
                    (0x0,
                    zP['as'])(gd),
                    gr['MG'](gp),
                    gr['Vv']['rs'](gl, gC, gO);
                }
                ,
                this['Nm'] = function(gl, gd) {
                    gr['zz'](new z7['Pa4'](0x0,-0.4,0.4), 0.3, gr['gz']['bind'](gr, gd['Fv']()));
                }
                ,
                this['$z'] = function(gl) {
                    gr['zz'](new z7['Pa4'](0x0,-0.4,0.4), (0x0,
                    zC['Gc'])(gl - (0x0,
                    zC['gq'])(0.5)), void 0x0);
                }
                ,
                this['xt'] = gn,
                this['Rw'] = gN,
                this['CA'] = gX,
                this['SA'] = gB,
                this['bz'] = !0x1,
                this['kz'] = 0x0,
                this['Nl'] = AA['C']['fn'],
                this['Sz'] = new z7['Tme'](),
                this['Mz'] = new z7['Tme'](),
                this['Dz'] = new z7['Tme'](),
                this['Cz'] = new z7['Tme'](),
                this['Jz'] = new z7['Tme'](),
                this['jz'] = new z7['Tme'](),
                this['mz'] = [],
                this['Pz'] = 0x0,
                this['Uz'] = 0x0,
                this['Nz'] = new z7['Pa4'](0x0,0x0,0x0),
                this['Vv'] = new AY(this['xt'],this['Rw'],this['CA'],this['SA'],this),
                this['Xz'] = new AO(this),
                this['Vz'] = new Ap(this),
                this['Tz'] = new z7['Tme'](),
                this['Iz'] = 0x0,
                this['Fz'] = 0x0,
                this['Bz'] = 0x64,
                this['Oz'] = 0x0,
                this['qz'] = 0x0,
                this['Lz'] = 0x3e8 * (0x0,
                zC['Gc'])(A1['Z']['Yz']['duration']) / 0x2,
                this['Ez'] = z9['Z']['Qz'](),
                this['_z'] = new z7['Xcj'](this['Ez']),
                this['Wz'] = this['_z']['clipAction'](z9['Z']['Zz']()),
                this['Kz'] = this['_z']['clipAction'](z9['Z']['tg']()),
                this['ig'] = this['_z']['clipAction'](z9['Z']['sg']()),
                this['Kz']['play'](),
                this['Kz']['paused'] = !0x0,
                this['Wz']['play'](),
                this['Wz']['paused'] = !0x0,
                this['ig']['play'](),
                this['ig']['paused'] = !0x0,
                this['hg'] = {},
                this['ig']['setLoop'](z7['jAl'], 0x1),
                this['ig']['clampWhenFinished'] = !0x0,
                this['ng'] = 0x0,
                this['eg'] = 0x0,
                this['gz']((0x0,
                zM['YJ'])(A3['q']['hn'])),
                this['jA']();
            }
            var gY = gD['prototype'];
            return gY['rg'] = function() {
                this['ig']['paused'] && (0x1 === this['ng'] ? this['ng'] = 0x2 : 0x2 === this['ng'] && (this['ig']['reset'](),
                this['ng'] = 0x0),
                this['ig']['paused'] = !0x1);
            }
            ,
            gY['xg'] = function() {
                this['qz'] = Date['now']();
            }
            ,
            gY['og'] = function() {
                this['Iz'] = Date['now']();
            }
            ,
            gY['ag'] = function() {
                this['Oz'] = Date['now']();
            }
            ,
            gY['jA'] = function() {
                zA['Z']['on'](zG['x']['PA'], this['gA']),
                zA['Z']['on'](zG['x']['_p'], this['Nm']),
                zA['Z']['on'](zG['x']['qw'], this['fw']),
                zA['Z']['on'](zG['x']['ug'], this['nd']),
                zA['Z']['on'](zG['x']['Ag'], this['$z']),
                zA['Z']['on'](zG['x']['fg'], this['az']),
                zA['Z']['on'](zG['x']['cg'], this['uz']);
            }
            ,
            gY['TA'] = function() {
                zA['Z']['off'](zG['x']['PA'], this['gA']),
                zA['Z']['off'](zG['x']['_p'], this['Nm']),
                zA['Z']['off'](zG['x']['qw'], this['fw']),
                zA['Z']['off'](zG['x']['ug'], this['nd']),
                zA['Z']['off'](zG['x']['Ag'], this['$z']),
                zA['Z']['off'](zG['x']['fg'], this['az']),
                zA['Z']['off'](zG['x']['cg'], this['uz']);
            }
            ,
            gY['vg'] = function(gn) {
                for (var gN = 0x0; gN < this['mz']['length']; gN++) {
                    this['pz'](this['mz'][gN]) && (this['mz'][gN] = this['mz'][this['mz']['length'] - 0x1],
                    this['mz']['pop'](),
                    --gN);
                }
            }
            ,
            gY['pz'] = function(gn) {
                var gN = Date['now']() - gn['wz']
                  , gX = z8['Z']['Dr']
                  , gB = z8['Z']['Yr'];
                if (gN > gX + gB)
                    return this['Rw']['Cs']()['remove'](gn['Gz']),
                    gn['Gz']['geometry']['dispose'](),
                    !0x0;
                gN > gX && (gn['Gz']['material']['opacity'] = (gX + gB - gN) / gB);
                var gr = this['Vv']['mw']()['y']
                  , gl = (0x0,
                za['Ak'])(-Math['sin'](gr), -Math['cos'](gr))
                  , gd = (0x0,
                za['Ak'])(gn['dz']['x'] - this['Rw']['Js']()['position']['x'], gn['dz']['z'] - this['Rw']['Js']()['position']['z']);
                (0x0,
                za['jG'])(gd);
                var gC = Math['PI'] - (Math['atan2'](gl['x'] * gd['y'] - gl['y'] * gd['x'], gl['x'] * gd['x'] + gl['y'] * gd['y']) + Math['PI'] / 0x2);
                return gn['Gz']['position']['x'] = 0x5 * Math['cos'](gC),
                gn['Gz']['position']['y'] = 0x5 * Math['sin'](gC),
                gn['Gz']['material']['rotation'] = gC - Math['PI'] / 0x2,
                !0x1;
            }
            ,
            gY['zz'] = function(gn, gN, gX) {
                this['lg'] = gN,
                this['yg'] = gn,
                gX && (this['Gg'] = gX);
            }
            ,
            gY['Ph'] = function() {
                this['TA'](),
                this['Rw']['Ms']()['remove'](this['Rw']['js']()),
                this['Rw']['js']()['remove'](this['jz']),
                this['wg'](),
                this['Vv']['Ph'](),
                z9['Z']['xG'](this['Ez']);
            }
            ,
            gY['wg'] = function() {
                this['pg']['dispose'](),
                this['mg']['geometry']['dispose'](),
                this['zg']['geometry']['dispose'](),
                this['gg']['geometry']['dispose'](),
                this['$g']['geometry']['dispose'](),
                this['bg']['geometry']['dispose'](),
                this['jw']();
            }
            ,
            gY['jw'] = function() {
                this['kg']['visible'] = !0x1;
            }
            ,
            gY['Od'] = function() {
                this['kg']['visible'] = !0x0;
            }
            ,
            gY['Rg'] = function(gn) {
                this['mg']['position']['set'](0x0, gn + this['xt']['Mg'] / 0x2, 0x0),
                this['zg']['position']['set'](0x0, -gn - this['xt']['Mg'] / 0x2, 0x0),
                this['gg']['position']['set'](-gn - this['xt']['Mg'] / 0x2, 0x0, 0x0),
                this['$g']['position']['set'](gn + this['xt']['Mg'] / 0x2, 0x0, 0x0);
            }
            ,
            gY['Dg'] = function() {
                this['pg'] = new z7['xeV']({
                    'color': this['xt']['Cg']
                }),
                this['mg'] = new z7['jyi'](this['pg']),
                this['mg']['scale']['set'](this['xt']['Jg'], this['xt']['Mg'], 0x1),
                this['mg']['visible'] = this['xt']['jg'] === Af['hu']['CROSS_WITH_DOT'] || this['xt']['jg'] === Af['hu']['CROSS'],
                this['zg'] = new z7['jyi'](this['pg']),
                this['zg']['scale']['set'](this['xt']['Jg'], this['xt']['Mg'], 0x1),
                this['zg']['visible'] = this['xt']['jg'] === Af['hu']['CROSS_WITH_DOT'] || this['xt']['jg'] === Af['hu']['CROSS'],
                this['gg'] = new z7['jyi'](this['pg']),
                this['gg']['scale']['set'](this['xt']['Mg'], this['xt']['Jg'], 0x1),
                this['gg']['visible'] = this['xt']['jg'] === Af['hu']['CROSS_WITH_DOT'] || this['xt']['jg'] === Af['hu']['CROSS'],
                this['$g'] = new z7['jyi'](this['pg']),
                this['$g']['scale']['set'](this['xt']['Mg'], this['xt']['Jg'], 0x1),
                this['$g']['visible'] = this['xt']['jg'] === Af['hu']['CROSS_WITH_DOT'] || this['xt']['jg'] === Af['hu']['CROSS'],
                this['bg'] = new z7['jyi'](this['pg']),
                this['bg']['scale']['set'](this['xt']['Jg'], this['xt']['Jg'], 0x1),
                this['bg']['visible'] = this['xt']['jg'] === Af['hu']['CROSS_WITH_DOT'] || this['xt']['jg'] === Af['hu']['DOT'],
                this['kg'] = new z7['Tme'](),
                this['kg']['position']['z'] = -z8['Z']['Hr'],
                this['kg']['add'](this['mg']),
                this['kg']['add'](this['zg']),
                this['kg']['add'](this['gg']),
                this['kg']['add'](this['$g']),
                this['kg']['add'](this['bg']),
                this['Rw']['Cs']()['add'](this['kg']);
            }
            ,
            gY['Pg'] = function(gn) {
                this['Rg'](this['kz']);
            }
            ,
            gY['Ug'] = function(gn) {
                var gN = this['xt']['Mg'];
                this['Xg']['position']['set'](-gn - gN / 0x2, gn + gN / 0x2, 0x0),
                this['Tg']['position']['set'](gn + gN / 0x2, gn + gN / 0x2, 0x0),
                this['Ig']['position']['set'](-gn - gN / 0x2, -gn - gN / 0x2, 0x0),
                this['Fg']['position']['set'](gn + gN / 0x2, -gn - gN / 0x2, 0x0);
            }
            ,
            gY['Bg'] = function() {
                void 0x0 !== this['pg'] && (this['pg']['color']['set'](this['xt']['Cg']),
                this['pg']['needsUpdate'] = !0x0,
                this['mg']['scale']['set'](this['xt']['Jg'], this['xt']['Mg'], 0x1),
                this['mg']['visible'] = this['xt']['jg'] === Af['hu']['CROSS_WITH_DOT'] || this['xt']['jg'] === Af['hu']['CROSS'],
                this['zg']['scale']['set'](this['xt']['Jg'], this['xt']['Mg'], 0x1),
                this['zg']['visible'] = this['xt']['jg'] === Af['hu']['CROSS_WITH_DOT'] || this['xt']['jg'] === Af['hu']['CROSS'],
                this['gg']['scale']['set'](this['xt']['Mg'], this['xt']['Jg'], 0x1),
                this['gg']['visible'] = this['xt']['jg'] === Af['hu']['CROSS_WITH_DOT'] || this['xt']['jg'] === Af['hu']['CROSS'],
                this['$g']['scale']['set'](this['xt']['Mg'], this['xt']['Jg'], 0x1),
                this['$g']['visible'] = this['xt']['jg'] === Af['hu']['CROSS_WITH_DOT'] || this['xt']['jg'] === Af['hu']['CROSS'],
                this['bg']['scale']['set'](this['xt']['Jg'], this['xt']['Jg'], 0x1),
                this['bg']['visible'] = this['xt']['jg'] === Af['hu']['CROSS_WITH_DOT'] || this['xt']['jg'] === Af['hu']['DOT'],
                this['Xg']['scale']['set'](this['xt']['Jg'], this['xt']['Mg'], 0x1),
                this['Xg']['material']['color']['set'](this['xt']['Og']),
                this['Xg']['material']['needsUpdate'] = !0x0,
                this['Tg']['scale']['set'](this['xt']['Jg'], this['xt']['Mg'], 0x1),
                this['Tg']['material']['color']['set'](this['xt']['Og']),
                this['Tg']['material']['needsUpdate'] = !0x0,
                this['Ig']['scale']['set'](this['xt']['Jg'], this['xt']['Mg'], 0x1),
                this['Ig']['material']['color']['set'](this['xt']['Og']),
                this['Ig']['material']['needsUpdate'] = !0x0,
                this['Fg']['scale']['set'](this['xt']['Jg'], this['xt']['Mg'], 0x1),
                this['Fg']['material']['color']['set'](this['xt']['Og']),
                this['Fg']['material']['needsUpdate'] = !0x0);
            }
            ,
            gY['qg'] = function() {
                this['Xg'] = new z7['jyi'](new z7['xeV']({
                    'color': this['xt']['Og'],
                    'rotation': Math['PI'] / 0x4
                })),
                this['Xg']['scale']['set'](this['xt']['Jg'], this['xt']['Mg'], 0x1),
                this['Tg'] = new z7['jyi'](new z7['xeV']({
                    'color': this['xt']['Og'],
                    'rotation': -Math['PI'] / 0x4
                })),
                this['Tg']['scale']['set'](this['xt']['Jg'], this['xt']['Mg'], 0x1),
                this['Ig'] = new z7['jyi'](new z7['xeV']({
                    'color': this['xt']['Og'],
                    'rotation': -Math['PI'] / 0x4
                })),
                this['Ig']['scale']['set'](this['xt']['Jg'], this['xt']['Mg'], 0x1),
                this['Fg'] = new z7['jyi'](new z7['xeV']({
                    'color': this['xt']['Og'],
                    'rotation': Math['PI'] / 0x4
                })),
                this['Fg']['scale']['set'](this['xt']['Jg'], this['xt']['Mg'], 0x1),
                this['Lg'] = new z7['Tme'](),
                this['Lg']['position']['z'] = -z8['Z']['Hr'],
                this['Lg']['add'](this['Xg']),
                this['Lg']['add'](this['Tg']),
                this['Lg']['add'](this['Ig']),
                this['Lg']['add'](this['Fg']),
                this['Rw']['Cs']()['add'](this['Lg']);
            }
            ,
            gY['Yg'] = function() {
                var gn = new z7['xeV']({
                    'map': z9['Z']['$s'](),
                    'transparent': !0x0,
                    'opacity': 0x0
                });
                this['Eg'] = new z7['jyi'](gn),
                this['Eg']['scale']['set'](0x1, z9['Z']['$s']()['image']['height'] / z9['Z']['$s']()['image']['width'], 0x1),
                this['eG']()['add'](this['Eg']);
            }
            ,
            gY['Hg'] = function(gn) {
                this['Xg']['material']['opacity'] = gn,
                this['Tg']['material']['opacity'] = gn,
                this['Ig']['material']['opacity'] = gn,
                this['Fg']['material']['opacity'] = gn;
            }
            ,
            gY['Qg'] = function(gn) {
                this['Ug'](this['kz']);
                var gN = Date['now']() - this['Pz'];
                if (gN > z8['Z']['Vr']) {
                    var gX = Math['max'](0x0, (z8['Z']['Vr'] + z8['Z']['Br'] - gN) / z8['Z']['Br']);
                    this['Hg'](gX);
                }
            }
            ,
            gY['Az'] = function() {
                this['Hg'](0x1),
                this['Pz'] = Date['now']();
            }
            ,
            gY['rs'] = function() {
                this['bz'] = !0x0,
                this['_g'] = new z7['SJI'](),
                this['Dg'](),
                this['qg'](),
                this['Dz']['add'](this['Ez']),
                this['Mz']['add'](this['Dz']),
                this['Sz']['add'](this['Mz']),
                this['Cz']['add'](this['Sz']),
                this['Jz']['add'](this['Cz']),
                this['jz']['add'](this['Jz']),
                this['Rw']['js']()['add'](this['jz']),
                this['Yg'](),
                this['lg'] = 0x0,
                this['Gg'] = function() {}
                ,
                this['yg'] = new z7['Pa4'](0x0,0x0,0x0),
                this['Wg'] = new z7['USm'](0x0,0x0,0x0),
                this['Zg'] = 0x1,
                this['Kg'] = new z7['Pa4'](0x0,0x0,0x0),
                this['D$'] = new z7['Pa4'](0x0,0x0,0x0),
                this['W$'] = (0x0,
                za['Ak'])(0x0, 0x0),
                this['tb'] = !0x1,
                this['ib'] = !0x1,
                this['sb'] = !0x1,
                this['hb'] = 0x0,
                this['Rw']['Ms']()['add'](this['Rw']['js']()),
                this['Rw']['Ms']()['add'](this['Vz']['Qx']()),
                this['Rw']['Js']()['add'](this['_g']);
                var gn = new z7['xeV']({
                    'color': 0xff,
                    'transparent': !0x0,
                    'opacity': 0.3,
                    'depthTest': !0x1
                });
                this['nb'] = new z7['jyi'](gn),
                this['nb']['scale']['set'](0xa, 0xa, 0x0),
                this['nb']['position']['set'](0x0, 0x0, -0x1),
                this['nb']['visible'] = !0x1,
                this['Rw']['Cs']()['add'](this['nb']);
                var gN = new z7['xeV']({
                    'color': 0xff0000,
                    'transparent': !0x0,
                    'opacity': 0.3,
                    'depthTest': !0x1
                });
                this['eb'] = new z7['jyi'](gN),
                this['eb']['scale']['set'](0xa, 0xa, 0x0),
                this['eb']['position']['set'](0x0, 0x0, -0x1),
                this['eb']['visible'] = !0x1,
                this['Rw']['Cs']()['add'](this['eb']);
                var gX = new z7['xeV']({
                    'color': 0x0,
                    'transparent': !0x1,
                    'depthTest': !0x1
                });
                this['rb'] = new z7['jyi'](gX),
                this['rb']['scale']['set'](0xa, 0xa, 0x0),
                this['rb']['position']['set'](0x0, 0x0, -0x1),
                this['rb']['visible'] = !0x1,
                this['Rw']['Cs']()['add'](this['rb']);
            }
            ,
            gY['vl'] = function(gn, gN) {
                this['yl'](gn, Math['random']() * gN - gN / 0x2, 0.5);
            }
            ,
            gY['ll'] = function(gn, gN, gX) {
                this['lA'](gn, gN, Math['random']() * gX - gX / 0x2, 0.5);
            }
            ,
            gY['yl'] = function(gn, gN, gX) {
                void 0x0 === gN && (gN = 0x0),
                void 0x0 === gX && (gX = 0x1);
                var gB = this['hg'][gn];
                if (!(void 0x0 !== gB && Date['now']() - gB < 0x28)) {
                    var gr = new z7['BbS'](this['_g']);
                    gr['setBuffer'](z9['Z']['xb'](gn)),
                    gr['detune'] = gN,
                    gr['gain']['gain']['value'] = gX * (this['xt']['ob'] * this['xt']['ob']),
                    gr['play'](),
                    this['hg'][gn] = Date['now']();
                }
            }
            ,
            gY['lA'] = function(gn, gN, gX, gB, gr, gl, gd) {
                var gC = this;
                if (void 0x0 === gX && (gX = 0x0),
                void 0x0 === gB && (gB = 0x1),
                void 0x0 === gr && (gr = 0x50 * z8['Z']['Ir']),
                void 0x0 === gl && (gl = 0xa * z8['Z']['Ir']),
                void 0x0 === gd && (gd = 0x2),
                !((0x0,
                zg['RJ'])(gn, this['Rw']['Js']()['position']) >= gr * gr)) {
                    var gO = this['hg'][gN];
                    if (!(void 0x0 !== gO && Date['now']() - gO < 0x28)) {
                        var gp = new z7['VYz'](this['_g']);
                        gp['setBuffer'](z9['Z']['xb'](gN)),
                        gp['detune'] = gX,
                        gp['gain']['gain']['value'] = gB * (this['xt']['ob'] * this['xt']['ob']),
                        gp['setRefDistance'](gl),
                        gp['setRolloffFactor'](gd);
                        var gW = new z7['Tme']();
                        gW['add'](gp),
                        this['Rw']['Ms']()['add'](gW),
                        gW['position']['set'](gn['x'], gn['y'], gn['z']),
                        gp['play'](),
                        gp['source']['onended'] = function() {
                            gp['isPlaying'] = !0x1,
                            gC['Rw']['Ms']()['remove'](gW);
                        }
                        ,
                        this['hg'][gN] = Date['now']();
                    }
                }
            }
            ,
            gY['yh'] = function(gn) {
                (0x0,
                zP['Zp'])() === AQ['Q']['me'] && (this['ab'](),
                this['Vv']['yh'](gn));
            }
            ,
            gY['ab'] = function() {
                var gn = (0x0,
                zg['XX'])(this['Vv']['jm']()['hA']['x'], this['Vv']['jm']()['hA']['y'] + this['Vv']['jm']()['dd'], this['Vv']['jm']()['hA']['z']);
                (0x0,
                zg['BZ'])(gn, z8['Z']['Ir']);
                var gN = this['Vv']['dw'](gn['x'], gn['y'], gn['z'])
                  , gX = !0x1;
                if ((0x0,
                zb['PP'])(gN)) {
                    var gB = (0x0,
                    zb['TH'])(gN);
                    gX = (0x0,
                    zI['wQ'])(gn['y'], 0x1) <= gB;
                }
                var gr = zd['Z'][gN]['t'];
                this['nb']['visible'] = gX,
                this['rb']['visible'] = gr && this['Vv']['Tv']()['fd']['yd'] !== zT['b']['HG'],
                this['CA']['Ab']()['ub']((0x0,
                za['Ak'])(this['Vv']['jm']()['hA']['x'], this['Vv']['jm']()['hA']['z'])) ? (this['eb']['visible'] = !0x1,
                this['Rw']['ks'](z8['Z']['oo']),
                this['CA']['Ss']()['fog']['color']['set'](z8['Z']['oo'])) : (this['eb']['visible'] = !0x0,
                this['Rw']['ks'](z8['Z']['$o']),
                this['CA']['Ss']()['fog']['color']['set'](z8['Z']['$o']));
            }
            ,
            gY['bs'] = function(gn, gN) {
                if (this['bz']) {
                    0x0 === this['ng'] && this['ig']['time'] >= 0x1 / 0x3 && (this['ig']['paused'] = !0x0,
                    this['ng'] = 0x1),
                    this['_z']['update'](gn);
                    var gX = gN / z8['Z']['qr'];
                    this['kz'] = (0x0,
                    zI['t7'])(this['Vv']['Dm'](), this['Vv']['Cm'](), gX),
                    this['Pg'](gn),
                    this['Qg'](gn),
                    this['vg'](gn),
                    this['Vv']['bs'](gn, gN),
                    this['fb'](gn),
                    this['cb'](gn),
                    this['vb'](gn),
                    this['lb'](gn),
                    this['yb'](gn);
                    var gB = Date['now']() - this['Iz'] <= this['Bz']
                      , gr = Date['now']() - this['qz'] <= this['Lz'];
                    gB || gr || this['Gb'](gn),
                    this['wb'](gn),
                    this['Xz']['bs'](gn, gN),
                    this['Vz']['bs'](gn, gN);
                }
            }
            ,
            gY['yb'] = function(gn) {
                var gN = this['xt']['xs']
                  , gX = 0xa;
                this['pb']() ? gN = this['Vv']['zp']()['Bv']()['Fv']()['mb'](this['xt']['xs'], this['xt']['gb']) : this['Vv']['QG']() === zT['b']['EG'] && (gN = this['xt']['xs'] * (0x1 + 0.15 * this['xt']['$b']),
                gX = 0x5);
                var gB = Math['abs'](gN - this['Rw']['Js']()['fov'])
                  , gr = gN - this['Rw']['Js']()['fov'] < 0x0 ? -0x1 : 0x1;
                this['Rw']['Js']()['fov'] += Math['min'](gB * gX * gn, gB) * gr,
                this['Rw']['Js']()['updateProjectionMatrix']();
            }
            ,
            gY['pb'] = function() {
                return (0x0,
                zm['MH'])(this['Vv']['Xv'](), this['Vv']['Tv']());
            }
            ,
            gY['fb'] = function(gn) {
                var gN = this['Sz']['position'];
                if (this['lg'] > 0x0)
                    this['lg'] = this['lg'] - gn,
                    this['lg'] <= 0x0 && (this['lg'] = 0x0,
                    this['Gg'](),
                    this['Gg'] = function() {}
                    );
                else {
                    if (this['Vv']['QG']() === zT['b']['EG'])
                        this['yg']['set'](0x0, -0.4, 0.4);
                    else {
                        if (this['pb']()) {
                            var gX = this['Vv']['zp']()['Bv']()['Fv']()['bb']();
                            this['yg']['set'](gX['x'], gX['y'], gX['z']);
                        } else
                            this['yg']['set'](0x0, 0x0, 0x0);
                    }
                }
                if (this['pb']()) {
                    var gB = this['Vv']['zp']()['Bv']()['Fv']()['kb']();
                    this['Wg']['set'](gB['x'], gB['y'], gB['z']),
                    this['xt']['Rb'] || this['xt']['Sb'] || this['jw'](),
                    this['xt']['Sb'] && (this['Sz']['visible'] = !0x1);
                } else
                    this['Wg']['set'](0x0, 0x0, 0x0),
                    this['Vv']['Um']() === Ak && (this['Od'](),
                    this['Sz']['visible'] = !0x0);
                var gr = (0x0,
                zP['jb'])();
                this['pb']() && this['Vv']['zp']()['Bv']()['Fv']()['Mb']() ? gr || (zA['Z']['emit'](zG['x']['Db'], !0x0),
                this['Sz']['visible'] = !0x1,
                this['jw']()) : gr && (zA['Z']['emit'](zG['x']['Db'], !0x1),
                this['Vv']['Um']() === Ak && (this['Od'](),
                this['Sz']['visible'] = !0x0));
                var gl = this['yg']['clone']()['sub'](gN)
                  , gd = gl['length']()
                  , gC = gl['normalize']()['multiplyScalar'](Math['min'](gd, Math['pow'](gd + 0x1, 0x3) * gn));
                this['Sz']['position']['set'](gN['x'] + gC['x'], gN['y'] + gC['y'], gN['z'] + gC['z']);
                var gO = new z7['_fP']()['setFromEuler'](this['Sz']['rotation'])
                  , gp = new z7['_fP']()['setFromEuler'](this['Wg']);
                gO['rotateTowards'](gp, this['Zg'] * gn),
                this['Sz']['rotation']['setFromQuaternion'](gO);
            }
            ,
            gY['vb'] = function(gn) {
                var gN = this['Jz']['position'];
                Date['now']() - this['Iz'] <= this['Bz'] || Date['now']() - this['Oz'] <= 0x12c ? (gN['z'] = 0.1 * (Math['cos'](0x14 * this['Fz']) - 0x1) + 0.1,
                void 0x0 !== this['Cb'] && this['Cb']['rotation']['x'] < Math['PI'] / 0x3 && (this['Cb']['rotation']['x'] = Math['min'](Math['PI'] / 0x3, this['Cb']['rotation']['x'] + 0xa * gn)),
                this['Fz'] += gn) : (this['Fz'] = 0x0,
                gN['z'] > 0x0 ? gN['z'] = Math['max'](0x0, gN['z'] - 0xa * gn) : gN['z'] < 0x0 && (gN['z'] = Math['min'](0x0, gN['z'] + 0xa * gn)),
                void 0x0 !== this['Cb'] && this['Cb']['rotation']['x'] > 0x0 && (this['Cb']['rotation']['x'] = Math['max'](0x0, this['Cb']['rotation']['x'] - 0xa * gn)));
            }
            ,
            gY['lb'] = function(gn) {
                var gN = this['jz']['position'];
                if (Date['now']() - this['qz'] <= this['Lz'] / 0x2)
                    gN['z'] = (Date['now']() - this['qz']) / (this['Lz'] / 0x2) * -0.2;
                else {
                    var gX = 0x1 - Math['min'](0x1, (Date['now']() - this['qz'] - this['Lz'] / 0x2) / (this['Lz'] / 0x2));
                    gN['z'] = -0.2 * gX;
                }
            }
            ,
            gY['Gb'] = function(gn) {
                var gN = this['Dz']['position'];
                gN['add'](this['D$']['clone']()['multiplyScalar'](gn)),
                gN['lengthSq']() > 0.2 * 0.2 && (gN['normalize'](),
                gN['multiplyScalar'](0.2));
                var gX = 0.008
                  , gB = 0.009;
                this['Vv']['Rm']() && this['Vv']['QG']() !== zT['b']['wl'] && (gX = 0.01,
                gB = 0.04);
                var gr = this['Vv']['Rm']();
                this['Vv']['Xv']()['ep'] ? (this['D$']['y'] = 0x3 * -gN['y'],
                this['eg'] = 0x0) : !this['tb'] && gr || this['tb'] && !gr ? this['eg'] <= 0x0 ? (this['D$']['y'] = -gB,
                this['eg'] = -0x1) : (this['D$']['y'] = gB,
                this['eg'] = 0x1) : 0x0 === this['eg'] || gN['y'] < -gX && -0x1 === this['eg'] ? (this['D$']['y'] = gB,
                this['eg'] = 0x1) : gN['y'] > gX && 0x1 === this['eg'] && (this['D$']['y'] = -gB,
                this['eg'] = -0x1),
                this['tb'] = gr;
            }
            ,
            gY['cb'] = function(gn) {
                var gN = this['Mz']['position'];
                gN['add'](this['Kg']['clone']()['multiplyScalar'](gn));
                var gX = 0.03;
                gN['lengthSq']() > 0.0009 && (gN['normalize'](),
                gN['multiplyScalar'](gX));
                var gB = this['Vv']['Jm']()
                  , gr = !0x0
                  , gl = (0x0,
                zI['BS'])(this['W$']['x'], gB['x'])
                  , gd = (0x0,
                zI['BS'])(this['W$']['y'], gB['y'])
                  , gC = this['Vv']['Mm']()
                  , gO = this['Vv']['Sm']()
                  , gp = this['pb']() ? 0.2 : 0.7;
                Math['abs'](gl) > 0x0 && (gr = !0x1,
                this['Kg']['y'] = gl * gp),
                Math['abs'](gd) > 0x0 && (gr = !0x1,
                this['Kg']['x'] = -gd * gp),
                !this['ib'] && gO && (this['hb'] = 0.1),
                this['hb'] > 0x0 && (gr = !0x1,
                this['pb']() ? this['Kg']['y'] = -0.05 : this['Kg']['y'] = -0.5,
                this['hb'] = Math['max'](0x0, this['hb'] - gn)),
                gr && (this['Kg']['x'] = 0x5 * -gN['x'],
                this['Kg']['y'] = 0x5 * -gN['y']),
                this['sb'] = gC,
                this['ib'] = gO,
                this['W$'] = gB;
            }
            ,
            gY['Jb'] = function(gn) {
                this['Cz']['position']['set'](0x0, 0x0, 0x0),
                this['Nz']['set'](0x0, 0x0, gn),
                this['Uz'] = 0.5,
                this['Eg']['material']['opacity'] = 0.9,
                this['Eg']['material']['rotation'] = Math['random']() * Math['PI'] * 0x2;
            }
            ,
            gY['wb'] = function(gn) {
                var gN = this['Cz']['position']
                  , gX = this['Nz']['clone']()['sub'](gN)
                  , gB = gX['length']();
                gB < 0.0001 && (this['Nz']['set'](0x0, 0x0, 0x0),
                this['Uz'] = 0.5),
                this['Eg']['material']['opacity'] = Math['max'](0x0, this['Eg']['material']['opacity'] - 0x14 * gn);
                var gr = gX['normalize']()['multiplyScalar'](Math['min'](gB, this['Uz'] * gn));
                this['Cz']['position']['set'](gN['x'] + gr['x'], gN['y'] + gr['y'], gN['z'] + gr['z']);
            }
            ,
            gY['eG'] = function() {
                return this['Ez']['getObjectByName']('Bone_Right_Hand');
            }
            ,
            gY['gz'] = (function() {
                var gn = (0x0,
                z4['Z'])(z6()['mark'](function gN(gX) {
                    var gB, gr;
                    return z6()['wrap'](function(gl) {
                        for (; ; )
                            switch (gl['prev'] = gl['next']) {
                            case 0x0:
                                return this['Cb'] && (this['eG']()['remove'](this['Cb']),
                                this['Cb']['remove'](this['Tz']),
                                z9['Z']['rG'](this['Cb'])),
                                gl['next'] = 0x3,
                                gX['Pb'](!0x1);
                            case 0x3:
                                this['Cb'] = gl['sent'],
                                z9['Z']['jl'](this['Cb']),
                                (0x0,
                                zM['pV'])(gX['Iv']()) && (gB = gX,
                                this['Cb']['add'](this['Tz']),
                                gr = gB['Ub'](),
                                this['Tz']['position']['set'](gr['x'], gr['y'], gr['z'])),
                                gX['OG']() === AI['E']['qG'] ? (this['Kz']['setEffectiveWeight'](0x1),
                                this['Wz']['setEffectiveWeight'](0x0),
                                this['ig']['setEffectiveWeight'](0x0)) : gX['OG']() === AI['E']['hn'] ? (this['Kz']['setEffectiveWeight'](0x0),
                                this['Wz']['setEffectiveWeight'](0x0),
                                this['ig']['setEffectiveWeight'](0x1)) : (this['Kz']['setEffectiveWeight'](0x0),
                                this['Wz']['setEffectiveWeight'](0x1),
                                this['ig']['setEffectiveWeight'](0x0)),
                                this['eG']()['add'](this['Cb']);
                            case 0x8:
                            case 'end':
                                return gl['stop']();
                            }
                    }, gN, this);
                }));
                return function(gX) {
                    return gn['apply'](this, arguments);
                }
                ;
            }()),
            gY['cG'] = function() {
                var gn = (0x0,
                zg['XX'])(this['Vv']['Qw']()['Js']()['position']['x'], this['Vv']['Qw']()['Js']()['position']['y'], this['Vv']['Qw']()['Js']()['position']['z']);
                this['Vv']['Lo']()['vG']()['cG'](gn, this['Vv']['vm'](), this['kz']);
            }
            ,
            gY['rz'] = function(gn) {
                var gN = new z7['Pa4']();
                this['Tz']['getWorldPosition'](gN),
                this['Vz']['rz'](gN, this['Vv']['vm'](), gn);
            }
            ,
            gY['Jw'] = function() {
                this['jz']['visible'] = !0x1;
            }
            ,
            gY['Fd'] = function() {
                this['jz']['visible'] = !0x0;
            }
            ,
            gY['cA'] = function() {
                return this['Vv'];
            }
            ,
            gY['Nb'] = function() {
                return this['Eg'];
            }
            ,
            gY['Xb'] = function() {
                return this['Xz'];
            }
            ,
            gY['Vb'] = function() {
                return this['Vz'];
            }
            ,
            gY['KG'] = function() {
                return this['Nl'];
            }
            ,
            gY['MG'] = function(gn) {
                this['Nl'] = gn,
                this['Ez']['traverse'](function(gN) {
                    gN['material'] && 'Arms' === gN['name'] && (gn === AA['C']['fn'] ? gN['material']['map'] = z9['Z']['td']() : gn === AA['C']['ln'] ? gN['material']['map'] = z9['Z']['sd']() : gn === AA['C']['sn'] && (gN['material']['map'] = z9['Z']['hd']()));
                });
            }
            ,
            gY['Lo'] = function() {
                return this['CA'];
            }
            ,
            gD;
        }());
        function Aq(gD, gY) {
            var gn = 'undefined' != typeof Symbol && gD[Symbol['iterator']] || gD['@@iterator'];
            if (gn)
                return (gn = gn['call'](gD))['next']['bind'](gn);
            if (Array['isArray'](gD) || (gn = function(gX, gB) {
                if (!gX)
                    return;
                if ('string' == typeof gX)
                    return Ac(gX, gB);
                var gr = Object['prototype']['toString']['call'](gX)['slice'](0x8, -0x1);
                'Object' === gr && gX['constructor'] && (gr = gX['constructor']['name']);
                if ('Map' === gr || 'Set' === gr)
                    return Array['from'](gX);
                if ('Arguments' === gr || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/['test'](gr))
                    return Ac(gX, gB);
            }(gD)) || gY && gD && 'number' == typeof gD['length']) {
                gn && (gD = gn);
                var gN = 0x0;
                return function() {
                    return gN >= gD['length'] ? {
                        'done': !0x0
                    } : {
                        'done': !0x1,
                        'value': gD[gN++]
                    };
                }
                ;
            }
            throw new TypeError('Invalid\x20attempt\x20to\x20iterate\x20non-iterable\x20instance.\x0aIn\x20order\x20to\x20be\x20iterable,\x20non-array\x20objects\x20must\x20have\x20a\x20[Symbol.iterator]()\x20method.');
        }
        function Ac(gD, gY) {
            (null == gY || gY > gD['length']) && (gY = gD['length']);
            for (var gn = 0x0, gN = new Array(gY); gn < gY; gn++)
                gN[gn] = gD[gn];
            return gN;
        }
        var Au = function(gD) {
            function gY(gN, gX) {
                var gB;
                return (gB = gD['call'](this, gX, A9['p']['Gm'], gN) || this)['Tb'] = 0x0,
                gB['Ib'] = Math['random']() * Math['PI'] * 0x2,
                gB['Fb'] = 0x1,
                gB['Bb'] = -0x1,
                gB['Xl'] = Ao['Z']['NONE'],
                gB['Vl'] = 0x0,
                gB;
            }
            (0x0,
            zH['Z'])(gY, gD);
            var gn = gY['prototype'];
            return gn['mG'] = function(gN) {
                for (var gX, gB = Aq(gN); !(gX = gB())['done']; ) {
                    var gr = gX['value'];
                    switch (gr['zG']) {
                    case Az['m']['JG']:
                        this['Ob'](gr['bG']);
                        break;
                    case Az['m']['qb']:
                        this['Bb'] = gr['bG'];
                        break;
                    case Az['m']['Lb']:
                        this['Fb'] = gr['bG'];
                        break;
                    case Az['m']['Eb']:
                        void 0x0 !== this['Hb'] && this['Hb']['_b'](gr['bG']);
                        break;
                    case Az['m']['DG']:
                        this['Xl'] = gr['bG'];
                        break;
                    case Az['m']['CG']:
                        this['Vl'] = gr['bG'];
                    }
                }
            }
            ,
            gn['bs'] = function(gN, gX) {
                if (this['Bb'] >= 0x0) {
                    var gB = !0x0
                      , gr = (0x0,
                    zg['XX'])(0x0, 0x0, 0x0);
                    if (this['Bb'] === (0x0,
                    zP['Yb'])())
                        gr = (0x0,
                        zg['dg'])(this['Ml']()['Lo']()['vA']()['cA']()['jm']()['hA']);
                    else {
                        var gl = this['Ml']()['Wb'](this['Bb']);
                        void 0x0 === gl ? (this['Ml']()['Zb'](this['Iv']()),
                        gB = !0x1) : gr = (0x0,
                        zg['XX'])(gl['Qx']()['position']['x'], gl['Qx']()['position']['y'], gl['Qx']()['position']['z']);
                    }
                    if (gB) {
                        gr['y'] += z8['Z']['Ir'];
                        var gd = (0x0,
                        zg['XX'])(this['Qx']()['position']['x'], this['Qx']()['position']['y'], this['Qx']()['position']['z']);
                        if ((0x0,
                        zg['RJ'])(gd, gr) < 0.2 * 0.2 || (0x0,
                        zg['RJ'])(gd, gr) > 0x19)
                            this['Ml']()['Zb'](this['Iv']());
                        else {
                            var gC = (0x0,
                            zg['XX'])(gr['x'] - this['Qx']()['position']['x'], gr['y'] - this['Qx']()['position']['y'], gr['z'] - this['Qx']()['position']['z']);
                            (0x0,
                            zg['cz'])(gC),
                            (0x0,
                            zg['Mt'])(gC, 0xa * gN),
                            this['Qx']()['position']['set'](gd['x'] + gC['x'], gd['y'] + gC['y'], gd['z'] + gC['z']),
                            this['Qx']()['updateMatrix']();
                        }
                    }
                } else
                    void 0x0 !== this['Cb'] && (this['Ib'] += gN,
                    this['Cb']['position']['set'](0x0, Math['cos'](this['Ib']) * (z8['Z']['Ir'] / 0x20), 0x0),
                    this['Cb']['updateMatrix'](),
                    this['Qx']()['updateMatrix']());
            }
            ,
            gn['Ph'] = function() {
                void 0x0 !== this['Cb'] && (this['Qx']()['remove'](this['Cb']),
                z9['Z']['rG'](this['Cb']),
                this['Cb'] = void 0x0),
                void 0x0 !== this['Kb'] && (this['Qx']()['remove'](this['Kb']),
                z9['Z']['rG'](this['Kb']),
                this['Kb'] = void 0x0);
            }
            ,
            gn['Fv'] = function() {
                return this['Hb'];
            }
            ,
            gn['Op'] = function() {
                return this['Fb'];
            }
            ,
            gn['dm'] = function() {
                return this['Bb'];
            }
            ,
            gn['iG'] = function(gN) {
                this['Tb'] = gN['y'],
                this['Qx']()['position']['set'](gN['x'], gN['y'], gN['z']),
                this['Qx']()['updateMatrix']();
            }
            ,
            gn['TG'] = function(gN) {}
            ,
            gn['Ob'] = (function() {
                var gN = (0x0,
                z4['Z'])(z6()['mark'](function gX(gB) {
                    var gr, gl, gd, gC;
                    return z6()['wrap'](function(gO) {
                        for (; ; )
                            switch (gO['prev'] = gO['next']) {
                            case 0x0:
                                return (gr = (0x0,
                                zM['YJ'])(gB))['_G'](this['Xl'], this['Vl']),
                                gO['next'] = 0x4,
                                gr['tk'](!0x1);
                            case 0x4:
                                gl = gO['sent'],
                                z9['Z']['jl'](gl),
                                this['Ph'](),
                                this['Hb'] = gr,
                                this['Cb'] = gl,
                                this['Qx']()['add'](this['Cb']),
                                gd = new z7['vBJ']({
                                    'map': z9['Z']['ik'](),
                                    'color': (0x0,
                                    AL['Dx'])(this['Hb']['gm']()),
                                    'transparent': !0x0,
                                    'opacity': 0.9,
                                    'side': z7['ehD'],
                                    'depthWrite': !0x1,
                                    'fog': !0x1
                                }),
                                gC = new z7['BKK'](0x1,0x1,0x1,0x1),
                                this['Kb'] = new z7['Kj0'](gC,gd),
                                this['Kb']['position']['set'](this['Cb']['position']['x'], this['Cb']['position']['y'] - 0.08, this['Cb']['position']['z']),
                                this['Kb']['scale']['set'](0.5, 0.5, 0.5),
                                this['Kb']['rotation']['set'](-Math['PI'] / 0x2, 0x0, 0x0),
                                this['Qx']()['add'](this['Kb']);
                            case 0x11:
                            case 'end':
                                return gO['stop']();
                            }
                    }, gX, this);
                }));
                return function(gB) {
                    return gN['apply'](this, arguments);
                }
                ;
            }()),
            gY;
        }(A8['Z']);
        function AT(gD, gY) {
            var gn = 'undefined' != typeof Symbol && gD[Symbol['iterator']] || gD['@@iterator'];
            if (gn)
                return (gn = gn['call'](gD))['next']['bind'](gn);
            if (Array['isArray'](gD) || (gn = function(gX, gB) {
                if (!gX)
                    return;
                if ('string' == typeof gX)
                    return Aw(gX, gB);
                var gr = Object['prototype']['toString']['call'](gX)['slice'](0x8, -0x1);
                'Object' === gr && gX['constructor'] && (gr = gX['constructor']['name']);
                if ('Map' === gr || 'Set' === gr)
                    return Array['from'](gX);
                if ('Arguments' === gr || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/['test'](gr))
                    return Aw(gX, gB);
            }(gD)) || gY && gD && 'number' == typeof gD['length']) {
                gn && (gD = gn);
                var gN = 0x0;
                return function() {
                    return gN >= gD['length'] ? {
                        'done': !0x0
                    } : {
                        'done': !0x1,
                        'value': gD[gN++]
                    };
                }
                ;
            }
            throw new TypeError('Invalid\x20attempt\x20to\x20iterate\x20non-iterable\x20instance.\x0aIn\x20order\x20to\x20be\x20iterable,\x20non-array\x20objects\x20must\x20have\x20a\x20[Symbol.iterator]()\x20method.');
        }
        function Aw(gD, gY) {
            (null == gY || gY > gD['length']) && (gY = gD['length']);
            for (var gn = 0x0, gN = new Array(gY); gn < gY; gn++)
                gN[gn] = gD[gn];
            return gN;
        }
        var AE = function(gD) {
            function gY(gN, gX) {
                var gB, gr;
                gr = gD['call'](this, gX, A9['p']['sk'], gN) || this;
                var gl = {
                    'e$': zL['BLOCKS_MESH'],
                    'j': (0x0,
                    zg['XX'])(0x0, 0x0, 0x0),
                    'Y': (gB = {},
                    gB[zV(0x0, 0x0, 0x0)] = zx['k']['sk'],
                    gB)
                }
                  , gd = Al(gl)
                  , gC = gd['Z']
                  , gO = gd['X']
                  , gp = gd['t$']
                  , gW = gd['$$']
                  , gq = new z7['u9r']();
                gq['setAttribute']('position', new z7['a$l'](gO,0x3)),
                gq['setIndex'](new z7['qlB'](gC,0x1)),
                gq['setAttribute']('ao', new z7['WTc'](gW,0x1,!0x0)),
                gq['setAttribute']('realUv', new z7['WTc'](gp,0x4)),
                gr['hk'] = new z7['jyz']({
                    'transparent': !0x1,
                    'uniforms': {
                        'map': {
                            'value': z9['Z']['Dh']()
                        },
                        'blendValue': {
                            'value': 0x0
                        }
                    },
                    'vertexShader': '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20attribute\x20vec4\x20realUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec4\x20vRealUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20mvPosition\x20=\x20modelViewMatrix\x20*\x20vec4(position,\x201.0);;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20projectionMatrix\x20*\x20mvPosition;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vRealUv\x20=\x20realUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
                    'fragmentShader': '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20sampler2D\x20map;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20blendValue;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec4\x20vRealUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20atlasDim\x20=\x20' + z8['Z']['ur']['toFixed'](0x1) + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20diffuseColor\x20=\x20vec4(1.0,\x201.0,\x201.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20tilePosX\x20=\x20max(0.05,\x20min(0.95,\x20fract(vRealUv.z)));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20tilePosY\x20=\x20max(0.05,\x20min(0.95,\x20fract(vRealUv.w)));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20uv\x20=\x20vec2(vRealUv.x\x20*\x20(1.0\x20/\x20atlasDim)\x20+\x20tilePosX\x20*\x20(1.0\x20/\x20atlasDim),\x20vRealUv.y\x20*\x20(1.0\x20/\x20atlasDim)\x20+\x20tilePosY\x20*\x20(1.0\x20/\x20atlasDim));\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20texelColor\x20=\x20texture2D(map,\x20uv);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20texelColor\x20=\x20mapTexelToLinear(texelColor);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20diffuseColor\x20*=\x20texelColor.rgba;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20diffuseColor\x20=\x20mix(diffuseColor,\x20vec4(1.0,\x201.0,\x201.0,\x201.0),\x20blendValue);\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20diffuseColor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
                    'fog': !0x1
                });
                var gc = new z7['Kj0'](gq,gr['hk']);
                return gr['Qx']()['add'](gc),
                gr['nk'] = 0x0,
                gr['ek'] = !0x1,
                gr['rk'] = !0x1,
                gr['xk'] = Date['now'](),
                gr;
            }
            (0x0,
            zH['Z'])(gY, gD);
            var gn = gY['prototype'];
            return gn['mG'] = function(gN) {
                for (var gX, gB = AT(gN); !(gX = gB())['done']; ) {
                    var gr = gX['value'];
                    if (gr['zG'] === Az['m']['ak'])
                        this['ek'] = !0x0,
                        this['rk'] = !0x0,
                        this['xk'] = Date['now'](),
                        this['nk'] = 0x3e8 * (0x0,
                        zC['Gc'])(gr['bG']);
                }
            }
            ,
            gn['bs'] = function(gN, gX) {
                if (this['ek']) {
                    !this['rk'] || 0x0 === this['Qx']()['position']['x'] && 0x0 === this['Qx']()['position']['y'] && 0x0 === this['Qx']()['position']['z'] || (this['rk'] = !0x1,
                    this['Ml']()['Lo']()['vA']()['lA'](this['Qx']()['position'], A4['k']['uk']));
                    var gB = Date['now']() - this['xk'];
                    this['hk']['uniforms']['blendValue']['value'] = Math['sin'](gB / 0x3e8 * 0xa) / 0x2 + 0.5;
                    var gr = this['nk'] - 0x64;
                    if (gB > gr) {
                        0x1 === this['Qx']()['scale']['x'] ? this['Ml']()['Lo']()['vA']()['lA'](this['Qx']()['position'], A4['k']['fk']) : this['Qx']()['scale']['x'] > 0x3 && (this['Qx']()['visible'] = !0x1);
                        var gl = (gB - gr) / 0x64 * 0.5 + 0x1;
                        this['Qx']()['scale']['set'](gl, gl, gl),
                        this['Qx']()['updateMatrix']();
                    }
                }
            }
            ,
            gn['Ph'] = function() {
                void 0x0 !== this['ck'] && (this['Qx']()['remove'](this['ck']),
                z9['Z']['rG'](this['ck']),
                this['ck'] = void 0x0);
            }
            ,
            gn['iG'] = function(gN) {
                this['Qx']()['position']['set'](gN['x'], gN['y'], gN['z']),
                this['Qx']()['updateMatrix']();
            }
            ,
            gn['TG'] = function(gN) {}
            ,
            gY;
        }(A8['Z'])
          , Am = z2(0xaf72)
          , Aa = (function() {
            function gD(gn) {
                var gN = this;
                this['vk'] = function(gX) {
                    gN['lk']['push'](gX);
                }
                ,
                this['yk'] = function(gX, gB) {
                    gN['Gk'](gX, gB);
                }
                ,
                this['dk'] = function(gX) {
                    gN['Zb'](gX);
                }
                ,
                this['VG'] = function(gX, gB) {
                    gN['wk'](gX) ? gN['Wb'](gX)['VG'](gB) : console['error']('Invalid\x20entity\x20action\x20command!');
                }
                ,
                this['pk'] = function(gX, gB) {
                    var gr = gN['Wb'](gX);
                    void 0x0 !== gr && gr['mG'](gB);
                }
                ,
                this['nd'] = function(gX, gB, gr, gl, gd, gC) {
                    var gO = gN['mk'][gX];
                    void 0x0 !== gO && gO['nd'](gB, gr, gd);
                }
                ,
                this['Td'] = function(gX, gB, gr) {
                    if (gX !== (0x0,
                    zP['Yb'])()) {
                        var gl = gN['Wb'](gX);
                        if (void 0x0 !== gl) {
                            var gd = gl;
                            gd['zk'](gB),
                            gd['gk'](gr),
                            gd['iG'](gB),
                            gd['TG'](gr),
                            gd['Ky'] = !0x0,
                            gd['lh']();
                        }
                    } else
                        gN['lk'] = [];
                }
                ,
                this['yh'] = function(gX) {
                    for (var gB = 0x0, gr = Object['values'](gN['mk']); gB < gr['length']; gB++) {
                        gr[gB]['yh'](gX);
                    }
                }
                ,
                this['CA'] = gn,
                this['JA'] = new z7['Tme'](),
                this['lk'] = [],
                this['mk'] = {},
                this['jA']();
            }
            var gY = gD['prototype'];
            return gY['jA'] = function() {
                zA['Z']['on'](zG['x']['$k'], this['vk']),
                zA['Z']['on'](zG['x']['bk'], this['yk']),
                zA['Z']['on'](zG['x']['kk'], this['VG']),
                zA['Z']['on'](zG['x']['Rk'], this['dk']),
                zA['Z']['on'](zG['x']['Sk'], this['pk']),
                zA['Z']['on'](zG['x']['ug'], this['nd']),
                zA['Z']['on'](zG['x']['Tw'], this['Td']);
            }
            ,
            gY['TA'] = function() {
                zA['Z']['off'](zG['x']['$k'], this['vk']),
                zA['Z']['off'](zG['x']['bk'], this['yk']),
                zA['Z']['off'](zG['x']['kk'], this['VG']),
                zA['Z']['off'](zG['x']['Rk'], this['dk']),
                zA['Z']['off'](zG['x']['Sk'], this['pk']),
                zA['Z']['off'](zG['x']['ug'], this['nd']),
                zA['Z']['off'](zG['x']['Tw'], this['Td']);
            }
            ,
            gY['Ph'] = function() {
                this['TA']();
                for (var gn = 0x0, gN = Object['values'](this['mk']); gn < gN['length']; gn++) {
                    gN[gn]['Ph']();
                }
            }
            ,
            gY['bs'] = function(gn, gN) {
                for (var gX, gB, gr = Date['now']() - 0x64; this['lk']['length'] >= 0x2 && gr >= this['lk'][0x0]['Mk'](); ) {
                    gX = this['lk'][0x0];
                    for (var gl = (gB = this['lk'][0x1])['Mk']() - gr, gd = gB['Mk']() - gX['Mk'](), gC = gB['Mk']() <= gr ? 0x0 : gl / gd, gO = 0x0, gp = Object['values'](this['mk']); gO < gp['length']; gO++) {
                        var gW = gp[gO]
                          , gq = gX['Dk']()['get'](gW['Iv']())
                          , gc = gB['Dk']()['get'](gW['Iv']());
                        gW['Jk'](gq, gc, gC);
                    }
                    if (!(this['lk']['length'] > 0x2 && gB['Mk']() <= gr))
                        break;
                    this['lk']['shift']();
                }
                for (var gu = 0x0, gT = Object['values'](this['mk']); gu < gT['length']; gu++) {
                    gT[gu]['bs'](gn, gN);
                }
            }
            ,
            gY['kp'] = function() {
                if (0x0 === this['lk']['length'])
                    return -0x1;
                for (var gn = Date['now']() - 0x64, gN = 0x0, gX = this['lk']['length'] - 0x1, gB = -0x1; gN <= gX; ) {
                    var gr = Math['floor']((gN + gX) / 0x2);
                    this['lk'][gr]['Mk']() > gn ? gX = gr - 0x1 : (gB = gr,
                    gN = gr + 0x1);
                }
                if (-0x1 === gB)
                    return this['lk'][0x0]['jk']();
                var gl = gB
                  , gd = gl < this['lk']['length'] - 0x1 ? gl + 0x1 : gl
                  , gC = gl === gd ? 0x0 : (gn - this['lk'][gl]['Mk']()) / (this['lk'][gd]['Mk']() - this['lk'][gl]['Mk']());
                return (0x0,
                zI['t7'])(this['lk'][gl]['jk'](), this['lk'][gd]['jk'](), gC);
            }
            ,
            gY['Gk'] = function(gn, gN) {
                if (this['wk'](gn))
                    console['error']('Duplicate\x20entity\x20spawn\x20command!', gn, A9['p'][gN]);
                else
                    switch (gN) {
                    case A9['p']['zl']:
                        var gX = new AR(this,gn);
                        this['JA']['add'](gX['Qx']()),
                        this['mk'][gn] = gX;
                        break;
                    case A9['p']['Gm']:
                        var gB = new Au(this,gn);
                        this['JA']['add'](gB['Qx']()),
                        this['mk'][gn] = gB;
                        break;
                    case A9['p']['Pk']:
                        var gr = new Am['Z'](this,gn);
                        this['JA']['add'](gr['Qx']()),
                        this['mk'][gn] = gr;
                        break;
                    case A9['p']['sk']:
                        var gl = new AE(this,gn);
                        this['JA']['add'](gl['Qx']()),
                        this['mk'][gn] = gl;
                    }
            }
            ,
            gY['Zb'] = function(gn) {
                if (this['wk'](gn)) {
                    var gN = this['Wb'](gn);
                    this['JA']['remove'](gN['Qx']()),
                    gN['Ph'](),
                    this['Uk'](gn);
                } else
                    console['error']('Invalid\x20entity\x20remove\x20command!', gn);
            }
            ,
            gY['Wb'] = function(gn) {
                return this['mk'][gn];
            }
            ,
            gY['Uk'] = function(gn) {
                delete this['mk'][gn];
            }
            ,
            gY['wk'] = function(gn) {
                return void 0x0 !== this['mk'][gn];
            }
            ,
            gY['lm'] = function() {
                return Object['values'](this['mk']);
            }
            ,
            gY['Qx'] = function() {
                return this['JA'];
            }
            ,
            gY['Lo'] = function() {
                return this['CA'];
            }
            ,
            gD;
        }())
          , AZ = (function() {
            function gD(gn) {
                this['yh'] = function(gN) {}
                ,
                this['CA'] = gn,
                this['JA'] = new z7['Tme'](),
                this['Xk'] = [],
                this['jA']();
            }
            var gY = gD['prototype'];
            return gY['jA'] = function() {}
            ,
            gY['TA'] = function() {}
            ,
            gY['cG'] = function(gn, gN, gX) {
                if (void 0x0 === gX && (gX = 0x0),
                this['CA']['oz']()['Vk']) {
                    var gB = new z7['nvb'](0.05,0.05,0.3)
                      , gr = new z7['vBJ']({
                        'color': 0xfff79c
                    })
                      , gl = new z7['Kj0'](gB,gr);
                    (0x0,
                    zg['cz'])(gN),
                    gl['position']['set'](gn['x'] + 0x1 * gN['x'], gn['y'] + 0x1 * gN['y'], gn['z'] + 0x1 * gN['z']);
                    var gd = Math['random']() * gX
                      , gC = Math['random']() * Math['PI'] * 0x2
                      , gO = (0x0,
                    zg['XX'])(Math['cos'](gC) * gd, Math['sin'](gC) * gd, z8['Z']['Hr'])
                      , gp = new z7['_fP']();
                    gp['setFromUnitVectors'](new z7['Pa4'](0x0,0x0,0x1), new z7['Pa4'](gN['x'],gN['y'],gN['z']));
                    var gW = new z7['Pa4'](gO['x'],gO['y'],gO['z'])['applyQuaternion'](gp);
                    gl['rotation']['setFromQuaternion'](gp);
                    var gq = (0x0,
                    zg['XX'])(gW['x'], gW['y'], gW['z']);
                    (0x0,
                    zg['cz'])(gq);
                    var gc = (0x0,
                    zg['dg'])(gq);
                    (0x0,
                    zg['Mt'])(gc, 0x64);
                    var gu = (0x0,
                    zg['dg'])(gn);
                    (0x0,
                    zg['BZ'])(gu, z8['Z']['Ir']);
                    var gT = this['CA']['vA']()['cA']()['lw'](gu, gq, 0x3e8, this['CA']['vA']()['cA']()['ww'])
                      , gw = 0xf4240;
                    gT['yw'] && ((0x0,
                    zg['Mt'])(gT['J'], z8['Z']['Ir']),
                    gw = (0x0,
                    zg['RJ'])(gT['J'], gn)),
                    this['JA']['add'](gl),
                    this['Xk']['push']({
                        'no': gl,
                        'j': gn,
                        'Tk': gc,
                        'Ik': gw
                    });
                }
            }
            ,
            gY['Ph'] = function() {
                this['TA']();
                for (var gn = 0x0; gn < this['Xk']['length']; gn++)
                    this['JA']['remove'](this['Xk'][gn]['no']),
                    this['Xk'][gn]['no']['geometry']['dispose']();
                this['Xk'] = [];
            }
            ,
            gY['bs'] = function(gn, gN) {
                for (var gX = 0x0; gX < this['Xk']['length']; gX++) {
                    var gB = this['Xk'][gX]
                      , gr = gB['no']['position'];
                    gB['no']['position']['set'](gr['x'] + gB['Tk']['x'] * gn, gr['y'] + gB['Tk']['y'] * gn, gr['z'] + gB['Tk']['z'] * gn),
                    gr['distanceToSquared'](new z7['Pa4'](gB['j']['x'],gB['j']['y'],gB['j']['z'])) > gB['Ik'] && (this['JA']['remove'](gB['no']),
                    gB['no']['geometry']['dispose'](),
                    this['Xk'][gX] = this['Xk'][this['Xk']['length'] - 0x1],
                    this['Xk']['pop'](),
                    --gX);
                }
            }
            ,
            gY['Qx'] = function() {
                return this['JA'];
            }
            ,
            gD;
        }())
          , AK = (function() {
            function gD(gn) {
                var gN = this;
                this['gA'] = function(gX, gB, gr, gl, gd, gC, gO) {
                    for (var gp = 0x40, gW = 0x96, gq = new Float32Array(0x300), gc = new Uint16Array(0x180), gu = new Float32Array(0x200), gT = 0x0; gT < gp; gT++) {
                        var gw = 0x1 * Math['cos'](gT / gp * Math['PI'] * 0x2)
                          , gE = 0x1 * Math['sin'](gT / gp * Math['PI'] * 0x2)
                          , gm = 0x1 * Math['cos']((gT + 0x1) / gp * Math['PI'] * 0x2)
                          , ga = 0x1 * Math['sin']((gT + 0x1) / gp * Math['PI'] * 0x2);
                        gq[0xc * gT + 0x0] = gw,
                        gq[0xc * gT + 0x1] = 0x0,
                        gq[0xc * gT + 0x2] = gE,
                        gq[0xc * gT + 0x3] = gw,
                        gq[0xc * gT + 0x4] = gW,
                        gq[0xc * gT + 0x5] = gE,
                        gq[0xc * gT + 0x6] = gm,
                        gq[0xc * gT + 0x7] = 0x0,
                        gq[0xc * gT + 0x8] = ga,
                        gq[0xc * gT + 0x9] = gm,
                        gq[0xc * gT + 0xa] = gW,
                        gq[0xc * gT + 0xb] = ga,
                        gu[0x8 * gT + 0x0] = 0x0,
                        gu[0x8 * gT + 0x1] = 0x0,
                        gu[0x8 * gT + 0x2] = 0x0,
                        gu[0x8 * gT + 0x3] = 0x12c,
                        gu[0x8 * gT + 0x4] = 0x2,
                        gu[0x8 * gT + 0x5] = 0x0,
                        gu[0x8 * gT + 0x6] = 0x2,
                        gu[0x8 * gT + 0x7] = 0x12c,
                        gc[0x6 * gT + 0x0] = 0x4 * gT,
                        gc[0x6 * gT + 0x1] = 0x4 * gT + 0x1,
                        gc[0x6 * gT + 0x2] = 0x4 * gT + 0x2,
                        gc[0x6 * gT + 0x3] = 0x4 * gT + 0x2,
                        gc[0x6 * gT + 0x4] = 0x4 * gT + 0x1,
                        gc[0x6 * gT + 0x5] = 0x4 * gT + 0x3;
                    }
                    var gZ = new z7['u9r']();
                    gZ['setAttribute']('position', new z7['a$l'](gq,0x3)),
                    gZ['setIndex'](new z7['qlB'](gc,0x1)),
                    gZ['setAttribute']('uv', new z7['a$l'](gu,0x2));
                    var gK = new z7['vBJ']({
                        'map': z9['Z']['Fk'](),
                        'transparent': !0x0,
                        'opacity': 0.6,
                        'side': z7['ehD']
                    });
                    gN['Bk'] = new z7['Kj0'](gZ,gK),
                    gN['JA']['add'](gN['Bk']);
                }
                ,
                this['Ok'] = function(gX, gB, gr, gl, gd, gC) {
                    gN['qk'] = gX,
                    gN['Yk'] = gB,
                    gN['Ek'] = (0x0,
                    za['I$'])(gX),
                    gN['Hk'] = gB,
                    gN['Qk'] = gr,
                    gN['_k'] = gl,
                    gN['Zk'] = gd,
                    gN['Kk'] = gC,
                    gN['tR'] = Date['now']();
                }
                ,
                this['yh'] = function(gX) {
                    if (++gN['iR'] % Math['floor']((0x0,
                    zC['gq'])(0.05)) == 0x0) {
                        var gB = Date['now']();
                        Math['max'](0x0, gN['Zk'] - (gB - gN['tR']) / 0x3e8),
                        Math['max'](0x0, gN['Kk'] + gN['Zk'] - (gB - gN['tR']) / 0x3e8);
                        if (gB - gN['tR'] >= 0x3e8 * gN['Zk']) {
                            var gr = Math['max'](0x0, Math['min'](0x1, (gB - gN['tR'] - 0x3e8 * gN['Zk']) / (0x3e8 * gN['Kk'])));
                            gN['Ek']['x'] = (0x0,
                            zI['t7'])(gN['qk']['x'], gN['Qk']['x'], gr),
                            gN['Ek']['y'] = (0x0,
                            zI['t7'])(gN['qk']['y'], gN['Qk']['y'], gr),
                            gN['Hk'] = (0x0,
                            zI['t7'])(gN['Yk'], gN['_k'], gr),
                            void 0x0 !== gN['Bk'] && (gN['Bk']['scale']['set'](gN['Hk'], 0x1, gN['Hk']),
                            gN['Bk']['position']['set'](gN['Ek']['x'], 0x0, gN['Ek']['y']));
                        }
                    }
                }
                ,
                this['CA'] = gn,
                this['JA'] = new z7['Tme'](),
                this['Ek'] = (0x0,
                za['Ak'])(0x0, 0x0),
                this['Hk'] = 0x4b0,
                this['qk'] = (0x0,
                za['Ak'])(0x0, 0x0),
                this['Yk'] = 0x4b0,
                this['Qk'] = (0x0,
                za['Ak'])(0x0, 0x0),
                this['_k'] = 0x4b0,
                this['Zk'] = 0x0,
                this['Kk'] = 0x0,
                this['tR'] = 0x0,
                this['iR'] = 0x0,
                this['jA']();
            }
            var gY = gD['prototype'];
            return gY['jA'] = function() {
                zA['Z']['on'](zG['x']['PA'], this['gA']),
                zA['Z']['on'](zG['x']['sR'], this['Ok']);
            }
            ,
            gY['TA'] = function() {
                zA['Z']['off'](zG['x']['PA'], this['gA']),
                zA['Z']['off'](zG['x']['sR'], this['Ok']);
            }
            ,
            gY['ub'] = function(gn) {
                return (0x0,
                za['if'])(gn, this['Ek']) <= this['Hk'] * this['Hk'];
            }
            ,
            gY['bs'] = function(gn, gN) {}
            ,
            gY['hR'] = function() {
                return this['Ek'];
            }
            ,
            gY['nR'] = function() {
                return this['Hk'];
            }
            ,
            gY['rR'] = function() {
                return this['Qk'];
            }
            ,
            gY['xR'] = function() {
                return this['_k'];
            }
            ,
            gY['Qx'] = function() {
                return this['JA'];
            }
            ,
            gD;
        }())
          , AH = (function() {
            function gD(gn) {
                var gN = this;
                this['oR'] = function(gd) {
                    var gC = new Image();
                    gC['src'] = 'data:image/png;base64,' + gd,
                    gC['onload'] = function() {
                        gN['aR']['image'] = gC,
                        gN['aR']['minFilter'] = z7['TyD'],
                        gN['aR']['magFilter'] = z7['TyD'],
                        gN['aR']['encoding'] = z7['knz'],
                        gN['aR']['needsUpdate'] = !0x0;
                    }
                    ;
                }
                ,
                this['uR'] = function(gd) {
                    return gd / ((gN['CA']['Sl']()['Xh']()['Rx']()['x'] - gN['CA']['Sl']()['Xh']()['kx']()['x'] + 0x1) * z8['Z']['Er'] * z8['Z']['Ir']) * 0x64;
                }
                ,
                this['AR'] = function(gd) {
                    return gN['uR'](gd - gN['CA']['Sl']()['Xh']()['kx']()['x'] * z8['Z']['Er'] * z8['Z']['Ir']);
                }
                ,
                this['yh'] = function(gd) {
                    var gC = gN['CA']['vA']()['cA']()['Tv']();
                    if (void 0x0 !== gC) {
                        var gO = (0x0,
                        zP['II'])();
                        gO !== gN['fR'] && (gN['fR'] = gO,
                        gN['cR']['visible'] = gN['fR'],
                        gN['vR']['visible'] = gN['fR'],
                        gN['lR']['visible'] = !gN['fR']);
                        var gp = gN['CA']['vA']()['cA']()['mw']()['y']
                          , gW = gN['AR'](gC['fd']['hA']['x']) / 0x64
                          , gq = 0x1 - gN['AR'](gC['fd']['hA']['z']) / 0x64
                          , gc = gN['AR'](gN['CA']['Ab']()['hR']()['x']) / 0x64
                          , gu = 0x1 - gN['AR'](gN['CA']['Ab']()['hR']()['y']) / 0x64
                          , gT = gN['uR'](gN['CA']['Ab']()['nR']()) / 0x64
                          , gw = gN['AR'](gN['CA']['Ab']()['rR']()['x']) / 0x64
                          , gE = 0x1 - gN['AR'](gN['CA']['Ab']()['rR']()['y']) / 0x64
                          , gm = gN['uR'](gN['CA']['Ab']()['xR']()) / 0x64;
                        gN['fR'] ? (gN['yR']['uniforms']['currCirclePos']['value']['set'](gc, gu),
                        gN['yR']['uniforms']['currCircleRadius']['value'] = gT,
                        gN['yR']['uniforms']['nextCirclePos']['value']['set'](gw, gE),
                        gN['yR']['uniforms']['nextCircleRadius']['value'] = gm) : (gN['GR']['uniforms']['currCirclePos']['value']['set'](gc, gu),
                        gN['GR']['uniforms']['currCircleRadius']['value'] = gT,
                        gN['GR']['uniforms']['nextCirclePos']['value']['set'](gw, gE),
                        gN['GR']['uniforms']['nextCircleRadius']['value'] = gm,
                        gN['GR']['uniforms']['playerPos']['value']['set'](gW, gq),
                        gN['GR']['uniforms']['playerDir']['value'] = gp);
                    }
                }
                ,
                this['CA'] = gn,
                this['JA'] = new z7['Tme'](),
                this['fR'] = !0x1,
                this['aR'] = new z7['xEZ']();
                var gX = new z7['BKK'](0x1,0x1);
                this['GR'] = new z7['jyz']({
                    'uniforms': {
                        'map': {
                            'value': this['aR']
                        },
                        'playerPos': {
                            'value': new z7['FM8']()
                        },
                        'playerDir': {
                            'value': 0x0
                        },
                        'currCirclePos': {
                            'value': new z7['FM8']()
                        },
                        'currCircleRadius': {
                            'value': 0x0
                        },
                        'nextCirclePos': {
                            'value': new z7['FM8']()
                        },
                        'nextCircleRadius': {
                            'value': 0x0
                        }
                    },
                    'vertexShader': '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec2\x20vUv;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20mvPosition\x20=\x20modelViewMatrix\x20*\x20vec4(position,\x201.0);;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20projectionMatrix\x20*\x20mvPosition;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vUv\x20=\x20uv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
                    'fragmentShader': '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20sampler2D\x20map;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20vec2\x20playerPos;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20playerDir;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20vec2\x20currCirclePos;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20currCircleRadius;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20vec2\x20nextCirclePos;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20nextCircleRadius;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec2\x20vUv;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20inverselerpstep(float\x20a,\x20float\x20b,\x20float\x20x)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20step(0.9999,\x20(x\x20-\x20a)\x20/\x20(b\x20-\x20a));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20diffuseColor\x20=\x20vec4(0.204,\x200.549,\x200.925,\x201.0);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20circleOutlineWidth\x20=\x200.001;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20scale\x20=\x2010.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20mat2\x20rotMat\x20=\x20mat2(cos(playerDir),\x20sin(playerDir),\x20-sin(playerDir),\x20cos(playerDir));\x20\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20scale\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20mapUv\x20=\x20vec2(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(vUv.x\x20-\x200.5)\x20/\x20scale,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(vUv.y\x20-\x200.5)\x20/\x20scale\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20rotate\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20mapUv\x20=\x20rotMat\x20*\x20mapUv;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20translate\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20mapUv.x\x20+=\x20playerPos.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20mapUv.y\x20+=\x20playerPos.y;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20currCircleDx\x20=\x20mapUv.x\x20-\x20currCirclePos.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20currCircleDy\x20=\x20mapUv.y\x20-\x20currCirclePos.y;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20currCircleDist\x20=\x20sqrt(currCircleDx\x20*\x20currCircleDx\x20+\x20currCircleDy\x20*\x20currCircleDy);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20nextCircleDx\x20=\x20mapUv.x\x20-\x20nextCirclePos.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20nextCircleDy\x20=\x20mapUv.y\x20-\x20nextCirclePos.y;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20nextCircleDist\x20=\x20sqrt(nextCircleDx\x20*\x20nextCircleDx\x20+\x20nextCircleDy\x20*\x20nextCircleDy);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20mapColor\x20=\x20texture2D(map,\x20mapUv);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20currCircle\x20=\x20smoothstep(0.0,\x20circleOutlineWidth,\x20abs(currCircleDist\x20-\x20currCircleRadius));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20nextCircle\x20=\x20smoothstep(0.0,\x20circleOutlineWidth,\x20abs(nextCircleDist\x20-\x20nextCircleRadius));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20outsideCurrCircle\x20=\x201.0\x20-\x20inverselerpstep(0.0,\x20currCircleRadius,\x20currCircleDist\x20-\x20circleOutlineWidth);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20diffuseColor\x20=\x20mix(vec4(1.0,\x201.0,\x201.0,\x201.0),\x20mapColor,\x20currCircle);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20diffuseColor\x20=\x20mix(vec4(1.0,\x201.0,\x201.0,\x201.0),\x20diffuseColor,\x20nextCircle);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20diffuseColor\x20=\x20mix(mix(diffuseColor,\x20vec4(1.0,\x200.0,\x200.0,\x200.0),\x200.4),\x20diffuseColor,\x20outsideCurrCircle);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20diffuseColor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'
                }),
                this['lR'] = new z7['Kj0'](gX,this['GR']),
                this['JA']['add'](this['lR']);
                var gB = new z7['BKK'](0x1,0x1);
                this['yR'] = new z7['jyz']({
                    'uniforms': {
                        'map': {
                            'value': this['aR']
                        },
                        'currCirclePos': {
                            'value': new z7['FM8']()
                        },
                        'currCircleRadius': {
                            'value': 0x0
                        },
                        'nextCirclePos': {
                            'value': new z7['FM8']()
                        },
                        'nextCircleRadius': {
                            'value': 0x0
                        }
                    },
                    'vertexShader': '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec2\x20vUv;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20mvPosition\x20=\x20modelViewMatrix\x20*\x20vec4(position,\x201.0);;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20projectionMatrix\x20*\x20mvPosition;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vUv\x20=\x20uv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
                    'fragmentShader': '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20sampler2D\x20map;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20vec2\x20currCirclePos;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20currCircleRadius;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20vec2\x20nextCirclePos;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20nextCircleRadius;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec2\x20vUv;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20inverselerpstep(float\x20a,\x20float\x20b,\x20float\x20x)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20step(0.9999,\x20(x\x20-\x20a)\x20/\x20(b\x20-\x20a));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20diffuseColor\x20=\x20vec4(0.204,\x200.549,\x200.925,\x201.0);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20circleOutlineWidth\x20=\x200.002;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20scale\x20=\x201.0;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20currCircleDx\x20=\x20vUv.x\x20-\x20currCirclePos.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20currCircleDy\x20=\x20vUv.y\x20-\x20currCirclePos.y;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20currCircleDist\x20=\x20sqrt(currCircleDx\x20*\x20currCircleDx\x20+\x20currCircleDy\x20*\x20currCircleDy);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20nextCircleDx\x20=\x20vUv.x\x20-\x20nextCirclePos.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20nextCircleDy\x20=\x20vUv.y\x20-\x20nextCirclePos.y;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20nextCircleDist\x20=\x20sqrt(nextCircleDx\x20*\x20nextCircleDx\x20+\x20nextCircleDy\x20*\x20nextCircleDy);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20mapColor\x20=\x20texture2D(map,\x20vUv);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20currCircle\x20=\x20smoothstep(0.0,\x20circleOutlineWidth,\x20abs(currCircleDist\x20-\x20currCircleRadius));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20nextCircle\x20=\x20smoothstep(0.0,\x20circleOutlineWidth,\x20abs(nextCircleDist\x20-\x20nextCircleRadius));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20outsideCurrCircle\x20=\x201.0\x20-\x20inverselerpstep(0.0,\x20currCircleRadius,\x20currCircleDist\x20-\x20circleOutlineWidth);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20diffuseColor\x20=\x20mix(vec4(1.0,\x201.0,\x201.0,\x201.0),\x20mapColor,\x20currCircle);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20diffuseColor\x20=\x20mix(vec4(1.0,\x201.0,\x201.0,\x201.0),\x20diffuseColor,\x20nextCircle);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20diffuseColor\x20=\x20mix(mix(diffuseColor,\x20vec4(1.0,\x200.0,\x200.0,\x200.0),\x200.4),\x20diffuseColor,\x20outsideCurrCircle);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20diffuseColor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'
                }),
                this['cR'] = new z7['Kj0'](gB,this['yR']),
                this['cR']['visible'] = !0x1,
                this['cR']['position']['set'](0x0, 0x0, -0x1),
                this['JA']['add'](this['cR']);
                var gr = new z7['BKK'](0x1,0x1)
                  , gl = new z7['vBJ']({
                    'map': z9['Z']['dR'](),
                    'transparent': !0x0
                });
                this['vR'] = new z7['Kj0'](gr,gl),
                this['vR']['visible'] = !0x1,
                this['JA']['add'](this['vR']),
                this['jA']();
            }
            var gY = gD['prototype'];
            return gY['jA'] = function() {
                zA['Z']['on'](zG['x']['wR'], this['oR']);
            }
            ,
            gY['TA'] = function() {
                zA['Z']['off'](zG['x']['wR'], this['oR']);
            }
            ,
            gY['Ph'] = function() {
                this['TA']();
            }
            ,
            gY['bs'] = function(gn, gN) {
                if (this['fR']) {
                    var gX = this['CA']['vA']()['cA']()['Tv']();
                    if (void 0x0 === gX)
                        return;
                    var gB = 0x2bc * this['CA']['Qw']()['Rs']()
                      , gr = 0x2bc * this['CA']['Qw']()['Rs']();
                    this['cR']['scale']['set'](gB, gr, 0x1);
                    var gl = 0x1e * this['CA']['Qw']()['Rs']()
                      , gd = 0x1e * this['CA']['Qw']()['Rs']()
                      , gC = this['CA']['vA']()['cA']()['mw']()['y']
                      , gO = this['AR'](gX['fd']['hA']['x']) / 0x64
                      , gp = 0x1 - this['AR'](gX['fd']['hA']['z']) / 0x64;
                    this['vR']['position']['set'](-gB / 0x2 + gO * gB, -gr / 0x2 + gp * gB, -0x1),
                    this['vR']['scale']['set'](gl, gd, 0x1),
                    this['vR']['rotation']['set'](0x0, 0x0, gC);
                } else {
                    var gW = 0xc8 * this['CA']['Qw']()['Rs']()
                      , gq = 0xc8 * this['CA']['Qw']()['Rs']();
                    this['lR']['position']['set'](-window['innerWidth'] / 0x2 + 0x79 * this['CA']['Qw']()['Rs'](), window['innerHeight'] / 0x2 - 0x79 * this['CA']['Qw']()['Rs'](), -0x1),
                    this['lR']['scale']['set'](gW, gq, 0x1);
                }
            }
            ,
            gY['Qx'] = function() {
                return this['JA'];
            }
            ,
            gD;
        }())
          , AM = (function() {
            function gD(gn, gN, gX) {
                var gB = this;
                this['yh'] = function(gr) {
                    gB['$h']['yh'](gr),
                    gB['Bd']['yh'](gr),
                    gB['pR']['yh'](gr),
                    gB['mR']['yh'](gr),
                    gB['zR']['yh'](gr),
                    gB['gR']['yh'](gr);
                }
                ,
                this['bs'] = function(gr, gl) {
                    gB['$h']['bs'](gr, gl),
                    gB['mR']['bs'](gr, gl),
                    gB['Bd']['bs'](gr, gl),
                    gB['pR']['bs'](gr, gl),
                    gB['zR']['bs'](gr, gl),
                    gB['gR']['bs'](gr, gl);
                }
                ,
                this['xt'] = gn,
                this['Rw'] = gN,
                this['SA'] = gX,
                this['$R'] = [],
                this['bR'] = new z7['Mig'](0xffffff,0.1),
                this['kR'](this['bR']),
                this['Ss']()['fog'] = new z7['ybr'](z8['Z']['oo'],0x3c,0x46),
                this['Rw']['Ms']()['fog'] = new z7['ybr'](z8['Z']['oo'],0x3c,0x46),
                this['RR'] = new z7['vmT'](0xffffff,0xffffff,0.3),
                this['kR'](this['RR']),
                this['SR'] = new z7['Ox3'](0xffffff,0.5),
                this['SR']['position']['set'](0x1, 0x1, 0x1),
                this['kR'](this['SR']),
                this['MR'] = new z7['cek'](0xffffff,0.1),
                this['MR']['position']['set'](-0x1, 0x1, -0x1),
                this['Rw']['Ms']()['add'](this['MR']),
                this['$h'] = new zc(this['xt'],this['Rw']['Js'](),this,this['SA']),
                this['Ss']()['add'](this['$h']['Qx']()),
                this['mR'] = new Aa(this),
                this['Ss']()['add'](this['mR']['Qx']()),
                this['pR'] = new AZ(this),
                this['Ss']()['add'](this['pR']['Qx']()),
                this['Bd'] = new AW(this['xt'],this['Rw'],this,this['SA']),
                this['zR'] = new AK(this),
                this['Ss']()['add'](this['zR']['Qx']()),
                this['gR'] = new AH(this),
                this['Rw']['Ds']()['add'](this['gR']['Qx']());
            }
            var gY = gD['prototype'];
            return gY['kR'] = function(gn) {
                var gN = gn['clone']();
                this['Rw']['Ss']()['add'](gn),
                this['Rw']['Ms']()['add'](gN),
                this['$R']['push'](gn),
                this['$R']['push'](gN);
            }
            ,
            gY['DR'] = function() {
                for (var gn = 0x0; gn < this['$R']['length']; gn++)
                    this['Rw']['Ss']()['remove'](this['$R'][gn]),
                    this['Rw']['Ms']()['remove'](this['$R'][gn]);
                this['$R'] = [];
            }
            ,
            gY['Ph'] = function() {
                this['DR'](),
                this['Ss']()['fog'] = null,
                this['Ss']()['remove'](this['$h']['Qx']()),
                this['Ss']()['remove'](this['mR']['Qx']()),
                this['Ss']()['remove'](this['pR']['Qx']()),
                this['$h']['Ph'](),
                this['mR']['Ph'](),
                this['Bd']['Ph'](),
                this['pR']['Ph']();
            }
            ,
            gY['Ss'] = function() {
                return this['Rw']['Ss']();
            }
            ,
            gY['Sl'] = function() {
                return this['$h'];
            }
            ,
            gY['Ml'] = function() {
                return this['mR'];
            }
            ,
            gY['vA'] = function() {
                return this['Bd'];
            }
            ,
            gY['vG'] = function() {
                return this['pR'];
            }
            ,
            gY['Ab'] = function() {
                return this['zR'];
            }
            ,
            gY['Qw'] = function() {
                return this['Rw'];
            }
            ,
            gY['oz'] = function() {
                return this['xt'];
            }
            ,
            gD;
        }());
        function Av() {
            return zR()('!(function(){\x27use\x20strict\x27;var\x20z=function(J,y,R){return{\x27x\x27:J,\x27y\x27:y,\x27z\x27:R};},A=(\x27undefined\x27==typeof\x20navigator||void\x200x0===navigator[\x27hardwareConcurrency\x27]||navigator[\x27hardwareConcurrency\x27],z(0.35,1.3,0.35),z(0.3,1.3,0.3),0.04),G=0x0,g=0x1,P=0x2;let\x20j;const\x20I=()=>{j=setTimeout(I,0x3e8*A),postMessage([P]);};Date[\x27now\x27],onmessage=J=>{switch(J[\x27data\x27]){case\x20G:I();break;case\x20g:clearTimeout(j);}};}());', 'Worker', void 0x0, z2['p'] + './package/e52cd3283f866b7297bb.worker.js');
        }
        var G0 = 0x0
          , G1 = 0x1
          , G2 = 0x2
          , G3 = (function() {
            function gD(gn) {
                var gN = this;
                this['rd'] = function(gX) {
                    gN['CR'] = gX;
                }
                ,
                this['JR'] = function(gX) {
                    gN['jR'] = gN['PR'](gN['JR']);
                    var gB = gN['UR']()
                      , gr = gB - gN['NR']
                      , gl = Math['max'](0x0, Math['min'](gr, 0x32)) / 0x3e8;
                    gN['NR'] = gB,
                    gN['bs'](gl, gr / 0x3e8);
                }
                ,
                this['XR'] = function() {
                    var gX = gN['UR']()
                      , gB = gX - gN['NR']
                      , gr = Math['max'](0x0, Math['min'](gB, 0x3e8)) / 0x3e8;
                    gN['NR'] = gX,
                    gN['bs'](gr, gB / 0x3e8);
                }
                ,
                this['bs'] = function(gX, gB) {
                    gN['VR'] += gX;
                    var gr = gN['CR'] + Math['round']((gN['SA']['ph']() / 0x3e8 + 0x1) / z8['Z']['qr'] * (gN['TR'] - z8['Z']['qr']) / z8['Z']['qr'])
                      , gl = Math['max'](0x1, Math['round'](gN['SA']['mh']() / 0x2 / (0x3e8 * z8['Z']['qr'])))
                      , gd = z8['Z']['qr'];
                    for (gr > gl + 0x1 && (gd += 0.06 * z8['Z']['qr']),
                    gN['TR'] = (0x0,
                    zI['r_'])(gN['TR'], gd, 0.06 * z8['Z']['qr'] * gX / 0x3); gN['VR'] >= gN['TR']; )
                        gN['VR'] -= gN['TR'],
                        gN['yh'](z8['Z']['qr']);
                    gN['Rw']['bs'](gX, gN['VR']),
                    gN['CA']['bs'](gX, gN['VR']),
                    gN['SA']['yh']();
                }
                ,
                this['yh'] = function(gX) {
                    gN['CA']['yh'](gX);
                }
                ,
                this['xt'] = gn,
                this['Rw'] = new zz(this['xt'],'canvas'),
                this['SA'] = new zJ(),
                this['vs'](),
                this['VR'] = 0x0,
                this['NR'] = 0x0,
                this['jR'] = 0x0,
                this['UR'] = Date['now']['bind'](Date),
                this['NR'] = this['UR'](),
                this['PR'] = requestAnimationFrame['bind'](window),
                this['IR'] = new Av(),
                this['IR']['onmessage'] = function(gX) {
                    gX['data']['length'] && 0x0 !== gX['data']['length'] && gX['data'][0x0] === G2 && gN['XR']();
                }
                ,
                this['FR'](),
                document['hidden'] ? this['BR']() : document['hidden'] || this['OR'](),
                document['addEventListener']('visibilitychange', function() {
                    document['hidden'] && 0x1 !== gN['LR'] ? (gN['YR'](),
                    gN['BR']()) : document['hidden'] || 0x0 === gN['LR'] || (gN['ER'](),
                    gN['OR']());
                }),
                this['TR'] = z8['Z']['qr'],
                this['CR'] = 0x0,
                this['jA']();
            }
            var gY = gD['prototype'];
            return gY['jA'] = function() {
                zA['Z']['on'](zG['x']['Xw'], this['rd']);
            }
            ,
            gY['FR'] = function() {
                window['THREE'] && (z8['Z']['Jo'] = !0x0),
                setInterval(this['FR'], 0x1388);
            }
            ,
            gY['vs'] = function() {
                this['CA'] && this['CA']['Ph'](),
                this['Rw']['vs'](),
                this['CA'] = new AM(this['xt'],this['Rw'],this['SA']);
            }
            ,
            gY['OR'] = function() {
                this['LR'] = 0x0,
                this['JR'](this['NR']);
            }
            ,
            gY['YR'] = function() {
                this['LR'] = 0x2,
                cancelAnimationFrame(this['jR']);
            }
            ,
            gY['BR'] = function() {
                this['LR'] = 0x1,
                this['IR']['postMessage'](G0);
            }
            ,
            gY['ER'] = function() {
                this['LR'] = 0x2,
                this['IR']['postMessage'](G1);
            }
            ,
            gY['Qw'] = function() {
                return this['Rw'];
            }
            ,
            gY['HR'] = function() {
                return this['SA'];
            }
            ,
            gY['Lo'] = function() {
                return this['CA'];
            }
            ,
            gD;
        }())
          , G4 = z2(0xbb88)
          , G5 = 0x0
          , G6 = 0x1
          , G7 = 0x2
          , G8 = 0x3
          , G9 = 0x4
          , Gz = 0x5
          , GA = 0x6
          , GG = z2(0x15f41)
          , Ge = 0x0
          , Gg = 0x1
          , GP = 0x2
          , Gj = 0x3
          , Go = 0x4
          , GI = 0x5
          , GJ = 0x6
          , Gy = 0x7
          , GR = 0x8
          , GS = 0x9
          , GQ = 0xa
          , GL = 0xb
          , GU = 0xc
          , Gb = 0xd
          , Gf = 0xe
          , Gx = 0xf
          , GF = 0x10
          , GV = 0x11
          , Gk = 0x12
          , GD = 0x13
          , GY = 0x14
          , Gn = 0x15
          , GN = 0x16
          , GX = 0x17
          , GB = 0x18
          , Gr = 0x19
          , Gl = 0x1a
          , Gd = 0x1b
          , GC = 0x1c
          , GO = [GG['g']['QR'], GG['g']['QR'], GG['g']['QR'], GG['g']['_R'], GG['g']['_R'], GG['g']['_R'], GG['g']['WR'], GG['g']['ZR'], GG['g']['WR'], GG['g']['KR'], GG['g']['KR'], GG['g']['KR'], GG['g']['KR'], GG['g']['_R'], GG['g']['_R'], GG['g']['ZR'], GG['g']['WR'], GG['g']['KR'], GG['g']['KR'], GG['g']['_R'], GG['g']['WR'], GG['g']['KR'], GG['g']['_R'], GG['g']['WR'], GG['g']['_R'], GG['g']['QR'], GG['g']['_R'], GG['g']['tS'], GG['g']['_R']]
          , Gp = 0x2
          , GW = 0x0
          , Gq = 0x1
          , Gc = 0x2
          , Gu = 0x3
          , GT = 0x4
          , Gw = 0x5
          , GE = [GG['g']['WR'], GG['g']['QR'], GG['g']['_R'], GG['g']['_R'], GG['g']['_R'], GG['g']['_R']]
          , Gm = z2(0x17f5)
          , Ga = z2(0x1498a);
        function GZ(gD, gY) {
            var gn = 'undefined' != typeof Symbol && gD[Symbol['iterator']] || gD['@@iterator'];
            if (gn)
                return (gn = gn['call'](gD))['next']['bind'](gn);
            if (Array['isArray'](gD) || (gn = function(gX, gB) {
                if (!gX)
                    return;
                if ('string' == typeof gX)
                    return GK(gX, gB);
                var gr = Object['prototype']['toString']['call'](gX)['slice'](0x8, -0x1);
                'Object' === gr && gX['constructor'] && (gr = gX['constructor']['name']);
                if ('Map' === gr || 'Set' === gr)
                    return Array['from'](gX);
                if ('Arguments' === gr || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/['test'](gr))
                    return GK(gX, gB);
            }(gD)) || gY && gD && 'number' == typeof gD['length']) {
                gn && (gD = gn);
                var gN = 0x0;
                return function() {
                    return gN >= gD['length'] ? {
                        'done': !0x0
                    } : {
                        'done': !0x1,
                        'value': gD[gN++]
                    };
                }
                ;
            }
            throw new TypeError('Invalid\x20attempt\x20to\x20iterate\x20non-iterable\x20instance.\x0aIn\x20order\x20to\x20be\x20iterable,\x20non-array\x20objects\x20must\x20have\x20a\x20[Symbol.iterator]()\x20method.');
        }
        function GK(gD, gY) {
            (null == gY || gY > gD['length']) && (gY = gD['length']);
            for (var gn = 0x0, gN = new Array(gY); gn < gY; gn++)
                gN[gn] = gD[gn];
            return gN;
        }
        var GH = (function() {
            function gD(gn, gN) {
                var gX = this;
                this['iS'] = gn,
                this['xt'] = gN,
                this['$w'] = 0x0,
                this['sS'] = -0x1,
                this['hS'] = !0x1,
                zA['Z']['on'](zG['x']['hm'], function(gr, gl, gd, gC) {
                    gX['iS']['dispatch']((0x0,
                    zp['VN'])({
                        'Ci': gl,
                        'Ni': gr,
                        'Ti': gC,
                        'Ri': gd
                    }));
                }),
                zA['Z']['on'](zG['x']['Ed'], function() {
                    (0x0,
                    zP['Zp'])() === AQ['Q']['me'] && ((0x0,
                    zP['s9'])() || (Gm['Mt'](),
                    gX['iS']['dispatch']((0x0,
                    Ga['Mi'])(Ga['b_']['ve']))));
                }),
                zA['Z']['on'](zG['x']['Kv'], function() {
                    (0x0,
                    zP['Zp'])() === AQ['Q']['me'] && ((0x0,
                    zP['s9'])() || (Gm['Li'](),
                    gX['iS']['dispatch']((0x0,
                    Ga['Mi'])(Ga['b_']['Xe']))));
                }),
                zA['Z']['on'](zG['x']['nS'], function(gr) {
                    gX['iS']['dispatch']((0x0,
                    Ga['Io'])(gr));
                }),
                zA['Z']['on'](zG['x']['Lw'], function() {
                    gX['iS']['dispatch']((0x0,
                    Ga['NX'])(!0x1)),
                    gX['iS']['dispatch']((0x0,
                    Ga['Mi'])(Ga['b_']['ve'])),
                    gX['iS']['dispatch']((0x0,
                    zp['jK'])(A0['P']['nn'])),
                    Gm['Li']();
                }),
                zA['Z']['on'](zG['x']['Kp'], function(gr, gl) {
                    gX['iS']['dispatch']((0x0,
                    zp['Vx'])(gr)),
                    gX['iS']['dispatch']((0x0,
                    zp['zU'])(gl));
                }),
                zA['Z']['on'](zG['x']['_p'], function(gr, gl) {
                    if (gl['Fv']()instanceof G4['Z']) {
                        var gd = gl['Fv']()
                          , gC = gr['im'](gd['sm']());
                        gX['iS']['dispatch']((0x0,
                        zp['_y'])(!0x0)),
                        gX['iS']['dispatch']((0x0,
                        zp['Vx'])(gd['tm']())),
                        gX['iS']['dispatch']((0x0,
                        zp['zU'])(gC));
                    } else
                        gX['iS']['dispatch']((0x0,
                        zp['_y'])(!0x1));
                }),
                zA['Z']['on'](zG['x']['Ep'], function(gr) {
                    gX['iS']['dispatch']((0x0,
                    zp['wV'])(gr));
                }),
                zA['Z']['on'](zG['x']['Yp'], function(gr) {
                    gX['iS']['dispatch']((0x0,
                    zp['he'])({
                        'Si': gr['Fv']()['zm'](),
                        '_i': gr['Fv']()['gm'](),
                        'Ii': gr['Op'](),
                        'di': (0x0,
                        zM['qH'])(gr['Fv']())
                    }));
                }),
                zA['Z']['on'](zG['x']['eS'], function(gr, gl, gd, gC) {
                    gX['iS']['dispatch']((0x0,
                    zp['Ng'])({
                        'Si': gr,
                        '_i': gl,
                        'Ui': gd,
                        'bi': gC
                    }));
                }),
                zA['Z']['on'](zG['x']['rS'], function(gr, gl) {
                    gX['iS']['dispatch']((0x0,
                    zp['qW'])(!0x0)),
                    gX['iS']['dispatch']((0x0,
                    zp['EP'])(gl)),
                    void 0x0 !== gX['xS'] && (clearTimeout(gX['xS']),
                    gX['xS'] = void 0x0),
                    gr > 0x0 && (gX['xS'] = setTimeout(function() {
                        gX['iS']['dispatch']((0x0,
                        zp['qW'])(!0x1));
                    }, 0x3e8 * gr));
                }),
                this['oS'] = 0x0,
                zA['Z']['on'](zG['x']['aS'], function(gr) {
                    for (var gl = 0x0; gl < gr['length']; gl++) {
                        var gd = gr[gl];
                        gd['zG'] === Gg ? gX['iS']['dispatch']((0x0,
                        zp['cL'])(gd['bG'])) : gd['zG'] === Ge ? gX['iS']['dispatch']((0x0,
                        zp['eR'])(gd['bG'])) : gd['zG'] === GJ ? gX['iS']['dispatch']((0x0,
                        zp['kW'])(gd['bG'])) : gd['zG'] === Gy ? gX['iS']['dispatch']((0x0,
                        zp['Ny'])(gd['bG'])) : gd['zG'] === GR ? gX['iS']['dispatch']((0x0,
                        zp['Ow'])(gd['bG'])) : gd['zG'] === GP ? gX['iS']['dispatch']((0x0,
                        zp['r6'])(gd['bG'])) : gd['zG'] === Gj ? gX['iS']['dispatch']((0x0,
                        zp['Qj'])(gd['bG'])) : gd['zG'] === GI ? gX['iS']['dispatch']((0x0,
                        zp['ad'])(gd['bG'])) : gd['zG'] === Go ? (function() {
                            gX['oS'] = gd['bG'],
                            gX['iS']['dispatch']((0x0,
                            zp['Im'])(gX['oS'])),
                            void 0x0 !== gX['uS'] && (clearTimeout(gX['uS']),
                            gX['uS'] = void 0x0),
                            gX['uS'] = setTimeout(function gC() {
                                --gX['oS'],
                                gX['iS']['dispatch']((0x0,
                                zp['Im'])(gX['oS'])),
                                gX['oS'] > 0x0 && (gX['uS'] = setTimeout(gC, 0x3e8));
                            }, 0x3e8);
                        }()) : gd['zG'] === GS ? gX['iS']['dispatch']((0x0,
                        Ga['ly'])(gd['bG'])) : gd['zG'] === GQ ? gX['iS']['dispatch']((0x0,
                        Ga['uT'])(gd['bG'])) : gd['zG'] === GL ? gX['iS']['dispatch']((0x0,
                        Ga['zh'])(gd['bG'])) : gd['zG'] === Gb ? gX['iS']['dispatch']((0x0,
                        zp['c1'])(gd['bG'])) : gd['zG'] === Gf ? gX['iS']['dispatch']((0x0,
                        zp['sy'])(gd['bG'])) : gd['zG'] === GU ? (gX['hS'] = gd['bG'],
                        gX['iS']['dispatch']((0x0,
                        Ga['Lk'])(gX['hS']))) : gd['zG'] === Gx ? (gX['sS'] = gd['bG'],
                        gX['iS']['dispatch']((0x0,
                        zp['sq'])(gd['bG']))) : gd['zG'] === GF ? gX['iS']['dispatch']((0x0,
                        zp['Q'])(gd['bG'])) : gd['zG'] === GV ? gX['iS']['dispatch']((0x0,
                        Ga['b3'])(gd['bG'])) : gd['zG'] === Gk ? (0x0,
                        zP['so'])(gd['bG']) : gd['zG'] === GD ? gX['iS']['dispatch']((0x0,
                        zp['Wk'])(gd['bG'])) : gd['zG'] === GY ? gX['iS']['dispatch']((0x0,
                        zp['lH'])(gd['bG'])) : gd['zG'] === Gn ? gX['iS']['dispatch']((0x0,
                        zp['bT'])(gd['bG'])) : gd['zG'] === GN ? gX['iS']['dispatch']((0x0,
                        zp['iw'])(gd['bG'])) : gd['zG'] === GX ? gX['iS']['dispatch']((0x0,
                        zp['t6'])(gd['bG'])) : gd['zG'] === Gr ? gX['iS']['dispatch']((0x0,
                        zp['IB'])(gd['bG'])) : gd['zG'] === GB ? gX['iS']['dispatch']((0x0,
                        zp['Nk'])(gd['bG'])) : gd['zG'] === Gl ? gX['iS']['dispatch']((0x0,
                        zp['AG'])(gd['bG'])) : gd['zG'] === Gd ? z8['Z']['Zr'] = gd['bG'] : gd['zG'] === GC && (z8['Z']['oo'] = gd['bG']);
                    }
                }),
                zA['Z']['on'](zG['x']['Pw'], function() {
                    gX['sS'] > 0x0 && (gX['$w'] = Date['now'](),
                    gX['iS']['dispatch']((0x0,
                    Ga['Ad'])(!0x0)));
                }),
                zA['Z']['on'](zG['x']['AS'], function(gr) {
                    gX['iS']['dispatch']((0x0,
                    zp['QK'])(gr));
                }),
                zA['Z']['on'](zG['x']['fS'], function(gr) {
                    gX['iS']['dispatch']((0x0,
                    zp['Em'])({
                        'ji': !0x0,
                        'Zi': gr
                    }));
                }),
                zA['Z']['on'](zG['x']['cS'], function(gr, gl, gd, gC, gO, gp) {
                    var gW = '{{victim}}\x20somehow\x20died...';
                    if (gO === G5) {
                        var gq = Math['random']();
                        gW = gq < 0.3 ? '{{killer}}\x20killed\x20{{victim}}\x20with\x20{{item}}' : gq < 0.6 ? '{{killer}}\x20eliminated\x20{{victim}}\x20with\x20{{item}}' : '{{killer}}\x20destroyed\x20{{victim}}\x20using\x20{{item}}';
                    } else
                        gO === G6 ? gW = '{{victim}}\x20fell\x20to\x20their\x20death' : gO === G7 ? gW = '{{victim}}\x20was\x20lost\x20in\x20the\x20fog' : gO === G8 ? gW = '{{victim}}\x20fell\x20out\x20of\x20the\x20world' : gO === G9 ? gW = '{{victim}}\x20was\x20poked\x20to\x20death\x20by\x20a\x20cactus' : gO === Gz ? gW = '{{victim}}\x20got\x20too\x20close\x20to\x20enemy\x20spawn' : gO === GA && (gW = gr['length'] > 0x0 && gr !== gd ? '{{killer}}\x20made\x20{{victim}}\x20explode' : '{{victim}}\x20exploded');
                    var gc = (0x0,
                    zM['YJ'])(gp);
                    gX['iS']['dispatch']((0x0,
                    Ga['G5'])({
                        'Tu': 0x0,
                        'vS': gr,
                        'lS': (0x0,
                        AA['W'])(gl),
                        'yS': gd,
                        'GS': (0x0,
                        AA['W'])(gC),
                        'dS': gc['wS'](),
                        'pS': (0x0,
                        AL['Dx'])(gc['gm']()),
                        'mS': gW
                    })),
                    setTimeout(function() {
                        gX['iS']['dispatch']((0x0,
                        Ga['wH'])());
                    }, 0x1f40);
                }),
                zA['Z']['on'](zG['x']['zS'], function(gr) {
                    gX['iS']['dispatch']((0x0,
                    Ga['nW'])(gr)),
                    setTimeout(function() {
                        gX['iS']['dispatch']((0x0,
                        Ga['SJ'])());
                    }, 0x1f40);
                }),
                zA['Z']['on'](zG['x']['gS'], function(gr, gl) {
                    gX['iS']['dispatch']((0x0,
                    Ga['oc'])({
                        'Si': gr,
                        'Ou': gl
                    })),
                    gX['$S']();
                }),
                zA['Z']['on'](zG['x']['kA'], function(gr, gl) {
                    gX['iS']['dispatch']((0x0,
                    zp['eo'])({
                        'ru': gr,
                        'bi': gl
                    }));
                }),
                zA['Z']['on'](zG['x']['PA'], function(gr, gl, gd, gC, gO, gp, gW, gq) {
                    gX['iS']['dispatch']((0x0,
                    zp['Zy'])(gr)),
                    gX['iS']['dispatch']((0x0,
                    zp['Sg'])(gl)),
                    gX['iS']['dispatch']((0x0,
                    zp['ye'])(gO)),
                    gX['iS']['dispatch']((0x0,
                    zp['Ah'])(gq)),
                    Gm['Mt']();
                }),
                zA['Z']['on'](zG['x']['bS'], function(gr) {
                    gX['iS']['dispatch']((0x0,
                    Ga['k6'])(gr));
                }),
                zA['Z']['on'](zG['x']['RS'], function(gr) {
                    gX['iS']['dispatch']((0x0,
                    Ga['k6'])(gr));
                }),
                zA['Z']['on'](zG['x']['SS'], function(gr, gl) {
                    gr || gX['iS']['dispatch']((0x0,
                    Ga['Qb'])(AQ['Q']['Le'])),
                    gX['iS']['dispatch']((0x0,
                    Ga['CK'])(gl));
                }),
                zA['Z']['on'](zG['x']['MS'], function(gr, gl) {
                    gr ? gX['iS']['dispatch']((0x0,
                    Ga['YL'])(gl)) : gX['iS']['dispatch']((0x0,
                    Ga['x9'])(gl));
                }),
                zA['Z']['on'](zG['x']['wm'], function(gr, gl, gd, gC, gO, gp) {
                    gX['iS']['dispatch']((0x0,
                    zp['Fh'])({
                        'Si': gr,
                        '_i': gl,
                        'Ei': gd,
                        'k': gC,
                        'Ui': gO,
                        'Ii': gp
                    }));
                }),
                zA['Z']['on'](zG['x']['Db'], function(gr) {
                    gX['iS']['dispatch']((0x0,
                    zp['fK'])(gr));
                }),
                document['addEventListener']('keyup', function(gr) {
                    (0x0,
                    zP['Zp'])() === AQ['Q']['me'] && ((0x0,
                    zP['D2'])() ? gr['keyCode'] === ze['Z']['ESC'] && zA['Z']['emit'](zG['x']['Yw']) : (0x0,
                    zP['bt'])() || (gr['keyCode'] === gX['xt']['Kd'][Af['ap']['MAP']] ? (gr['preventDefault'](),
                    (0x0,
                    zP['K8'])() ? gX['iS']['dispatch']((0x0,
                    Ga['Y_'])(!0x1)) : gX['iS']['dispatch']((0x0,
                    Ga['v0'])(!0x1))) : gr['keyCode'] === ze['Z']['ESC'] && (0x0,
                    zP['s9'])() && zA['Z']['emit'](zG['x']['Fw'], A0['P']['nn'])));
                }, !0x1),
                document['addEventListener']('keydown', function(gr) {
                    (0x0,
                    zP['Zp'])() === AQ['Q']['me'] && ((0x0,
                    zP['D2'])() || (0x0,
                    zP['bt'])() || gr['keyCode'] === gX['xt']['Kd'][Af['ap']['MAP']] && (gr['preventDefault'](),
                    (0x0,
                    zP['K8'])() ? gX['iS']['dispatch']((0x0,
                    Ga['Y_'])(!0x0)) : gX['iS']['dispatch']((0x0,
                    Ga['v0'])(!0x0))));
                }, !0x1);
                var gB = this['iS']['getState']();
                void 0x0 !== gB['settings']['playerName'] && 0x0 !== gB['settings']['playerName']['length'] || this['iS']['dispatch']((0x0,
                Af['zb'])('Soldier'));
            }
            var gY = gD['prototype'];
            return gY['$S'] = function() {
                var gn = this;
                void 0x0 === this['DS'] && !function gN() {
                    gn['iS']['getState']()['ui']['oa']['length'] > 0x0 ? gn['DS'] = setTimeout(function() {
                        gn['iS']['dispatch']((0x0,
                        Ga['gB'])()),
                        gN();
                    }, 0xbb8) : gn['DS'] = void 0x0;
                }();
            }
            ,
            gY['CS'] = function(gn, gN, gX) {
                var gB = this['iS']['getState']();
                gn['Lv'] = (0x0,
                zI['uZ'])(gB['settings']['sensitivity'], z8['Z']['ko']['po'], z8['Z']['ko']['Mo']),
                gn['qv'] = (0x0,
                zI['uZ'])(gB['settings']['adsSensitivityMultiplier'], z8['Z']['Fo']['po'], z8['Z']['Fo']['Mo']),
                gn['Ov'] = (0x0,
                zI['uZ'])(gB['settings']['scopedSensitivityMultiplier'], z8['Z']['Ho']['po'], z8['Z']['Ho']['Mo']);
                var gr = (0x0,
                zI['uZ'])(gB['settings']['renderScale'], z8['Z']['Bo']['po'], z8['Z']['Bo']['Mo']);
                gn['zs'] !== gr && (gn['zs'] = gr,
                void 0x0 !== gN && gN['Ps']()['setPixelRatio'](window['devicePixelRatio'] * gn['zs'])),
                gn['JS'] = gB['settings']['primaryLoadout'],
                gn['jS'] = gB['settings']['secondaryLoadout'],
                gn['PS'] = gB['settings']['terrainTextureURL'],
                gn['ob'] = (0x0,
                zI['uZ'])(gB['settings']['soundVolume'], z8['Z']['Ko']['po'], z8['Z']['Ko']['Mo']),
                gn['Nv'] = gB['settings']['invertYAxis'],
                gn['gp'] = gB['settings']['invertMouseWheel'];
                for (var gl = 0x0, gd = Object['entries'](gB['settings']['keys']); gl < gd['length']; gl++) {
                    var gC = gd[gl]
                      , gO = gC[0x0]
                      , gp = gC[0x1];
                    gn['Kd'][gO] = gp['keyCode'];
                }
                var gW = !0x1
                  , gq = (0x0,
                zI['uZ'])(gB['settings']['crosshairWidth'], z8['Z']['Wo']['po'], z8['Z']['Wo']['Mo']);
                gn['Jg'] !== gq && (gn['Jg'] = gq,
                gW = !0x0);
                var gc = (0x0,
                zI['uZ'])(gB['settings']['crosshairLength'], z8['Z']['Xo']['po'], z8['Z']['Xo']['Mo']);
                gn['Mg'] !== gc && (gn['Mg'] = gc,
                gW = !0x0),
                gn['Cg'] !== gB['settings']['crosshairColor'] && (gn['Cg'] = gB['settings']['crosshairColor'],
                gW = !0x0),
                gn['Og'] !== gB['settings']['crosshairHitColor'] && (gn['Og'] = gB['settings']['crosshairHitColor'],
                gW = !0x0),
                gn['jg'] !== gB['settings']['crosshairStyle'] && (gn['jg'] = gB['settings']['crosshairStyle'],
                gW = !0x0),
                gn['Rb'] = gB['settings']['showCrosshairWhenADS'],
                gn['Sb'] = gB['settings']['hideModelWhenADS'],
                gn['Vk'] = gB['settings']['showBulletTracers'],
                gn['xz'] = gB['settings']['showAmmoShellsWhenFiring'],
                gn['xs'] = (0x0,
                zI['uZ'])(gB['settings']['generalFOV'], z8['Z']['Do']['po'], z8['Z']['Do']['Mo']),
                gn['gb'] = (0x0,
                zI['uZ'])(gB['settings']['adsFOVMultiplier'], z8['Z']['xo']['po'], z8['Z']['xo']['Mo']),
                gn['$b'] = (0x0,
                zI['uZ'])(gB['settings']['runningFOVMultiplier'], z8['Z']['Vo']['po'], z8['Z']['Vo']['Mo']);
                var gu = (0x0,
                zI['uZ'])(gB['settings']['firstPersonModelFOV'], z8['Z']['Yo']['po'], z8['Z']['Yo']['Mo']);
                gn['us'] !== gu && (gn['us'] = gu,
                void 0x0 !== gN && (gN['js']()['fov'] = gn['us'],
                gN['js']()['updateProjectionMatrix']())),
                gW && void 0x0 !== gX && gX['vA']()['Bg']();
            }
            ,
            gY['US'] = function(gn) {
                gn['NS']();
                for (var gN = [], gX = 0x0; gX < AS['n']['En']; gX++) {
                    var gB = gX
                      , gr = gn['XS']((0x0,
                    AS['m'])(gB)['ingredients']);
                    gN['push'](gr);
                }
                this['iS']['dispatch']((0x0,
                zp['iU'])(gN));
            }
            ,
            gY['VS'] = function(gn, gN, gX) {
                var gB = this;
                this['iS']['subscribe'](function() {
                    gB['CS'](gB['xt'], gN, gX);
                }),
                zA['Z']['on'](zG['x']['Uw'], function(gr) {
                    gB['iS']['dispatch']((0x0,
                    zp['jK'])(gr)),
                    gr === A0['P']['nn'] ? gB['iS']['getState']()['ui']['Na'] ? gX['vA']()['cA']()['Pm']()['al']() : gX['vA']()['cA']()['Pm']()['xl']() : gr === A0['P']['tn'] || gr === A0['P']['en'] ? (gX['vA']()['cA']()['Pm']()['al'](),
                    gB['US'](gX['vA']()['cA']()['zp']())) : (gr === A0['P']['rn'] || gr === A0['P']['$n'] || gr === A0['P']['un'] || gr === A0['P']['cn'] || gr === A0['P']['an']) && gX['vA']()['cA']()['Pm']()['al']();
                }),
                zA['Z']['on'](zG['x']['ah'], function(gr) {
                    if ((0x0,
                    zP['Zp'])() === AQ['Q']['me'] && !(0x0,
                    zP['Vg'])() && !((0x0,
                    zP['D2'])() && gr !== ze['Z']['ENTER'] || (0x0,
                    zP['bt'])() && gr !== ze['Z']['ENTER'])) {
                        if (gr === ze['Z']['ENTER'] && (0x0,
                        zP['VJ'])()) {
                            if ((0x0,
                            zP['bt'])()) {
                                var gl = gB['iS']['getState']()['ui']['ea'];
                                gl['length'] > 0x0 && (zA['Z']['emit'](zG['x']['TS'], gl),
                                gB['iS']['dispatch']((0x0,
                                Ga['G9'])(''))),
                                gB['iS']['dispatch']((0x0,
                                Ga['NX'])(!0x1));
                            } else
                                gB['iS']['dispatch']((0x0,
                                Ga['NX'])(!0x0));
                        } else {
                            if (gr === gB['xt']['Kd'][Af['ap']['TOGGLE_INVENTORY']]) {
                                var gd = gB['iS']['getState']()['game']['ki']
                                  , gC = A0['P']['nn'];
                                gd === A0['P']['nn'] ? gC = (0x0,
                                zP['uF'])() ? A0['P']['rn'] : A0['P']['tn'] : gd === A0['P']['an'] && (gC = A0['P']['tn']),
                                zA['Z']['emit'](zG['x']['Fw'], gC);
                            } else {
                                if (gr === gB['xt']['Kd'][Af['ap']['TOGGLE_MAP']]) {
                                    var gO = gB['iS']['getState']()['ui']['ia'];
                                    gB['iS']['dispatch']((0x0,
                                    Ga['v0'])(!gO));
                                } else {
                                    if (gr === gB['xt']['Kd'][Af['ap']['TOGGLE_PLAYER_MENU']]) {
                                        var gp = gB['iS']['getState']()['game']['ki']
                                          , gW = A0['P']['an'];
                                        gp === A0['P']['an'] && (gW = A0['P']['nn']),
                                        zA['Z']['emit'](zG['x']['Fw'], gW);
                                    }
                                }
                            }
                        }
                    }
                }),
                zA['Z']['on'](zG['x']['Wp'], function(gr) {
                    for (var gl, gd = GZ(gr); !(gl = gd())['done']; ) {
                        var gC = gl['value']
                          , gO = gC[0x0]
                          , gp = gC[0x1];
                        gB['iS']['dispatch']((0x0,
                        zp['dr'])({
                            'Pu': gO,
                            'Uu': {
                                'k': gp['Fv']()['$m'](),
                                'S': gp['Fv']()['IS'](),
                                '_i': gp['Fv']()['gm'](),
                                'Ei': (0x0,
                                Ab['r'])(gp['Fv']()['Hp']())['tier'],
                                'Si': gp['Fv']()['zm'](),
                                'Ii': gp['Op'](),
                                'di': (0x0,
                                zM['qH'])(gp['Fv']())
                            }
                        }));
                    }
                    gB['US'](gX['vA']()['cA']()['zp']());
                }),
                zA['Z']['on'](zG['x']['FS'], function(gr, gl, gd) {
                    for (var gC, gO = void 0x0, gp = void 0x0, gW = void 0x0, gq = void 0x0, gc = void 0x0, gu = void 0x0, gT = GZ(gd); !(gC = gT())['done']; ) {
                        var gw = gC['value'];
                        gw['zG'] === Gc ? gW = gw['bG'] : gw['zG'] === Gu ? gq = gw['bG'] : gw['zG'] === GT ? gc = gw['bG'] : gw['zG'] === Gw ? gu = gw['bG'] : gw['zG'] === GW ? gO = gw['bG'] : gw['zG'] === Gq && (gp = gw['bG']);
                    }
                    gl === Gp ? gB['iS']['dispatch']((0x0,
                    zp['Rz'])(gr)) : gB['iS']['dispatch']((0x0,
                    zp['Wj'])({
                        'Tu': gr,
                        'mu': gp,
                        'k': gO,
                        'pu': gW,
                        'Mu': gq,
                        'Lu': gc,
                        'Ou': gu
                    }));
                });
            }
            ,
            gD;
        }())
          , GM = function() {
            this['Lv'] = Af['E3']['sensitivity'],
            this['qv'] = Af['E3']['adsSensitivityMultiplier'],
            this['Ov'] = Af['E3']['scopedSensitivityMultiplier'],
            this['zs'] = Af['E3']['renderScale'],
            this['ob'] = Af['E3']['soundVolume'],
            this['Nv'] = Af['E3']['invertYAxis'],
            this['gp'] = Af['E3']['invertMouseWheel'],
            this['Jg'] = Af['E3']['crosshairWidth'],
            this['Mg'] = Af['E3']['crosshairLength'],
            this['Cg'] = Af['E3']['crosshairColor'],
            this['Og'] = Af['E3']['crosshairHitColor'],
            this['jg'] = Af['E3']['crosshairStyle'],
            this['OS'] = Af['E3']['chatVisible'],
            this['JS'] = Af['E3']['primaryLoadout'],
            this['jS'] = Af['E3']['secondaryLoadout'],
            this['PS'] = Af['E3']['terrainTextureURL'],
            this['Rb'] = Af['E3']['showCrosshairWhenADS'],
            this['Sb'] = Af['E3']['hideModelWhenADS'],
            this['xs'] = Af['E3']['generalFOV'],
            this['us'] = Af['E3']['firstPersonModelFOV'],
            this['gb'] = Af['E3']['adsFOVMultiplier'],
            this['$b'] = Af['E3']['runningFOVMultiplier'],
            this['Vk'] = Af['E3']['showBulletTracers'],
            this['xz'] = Af['E3']['showAmmoShellsWhenFiring'],
            this['Kd'] = {};
            for (var gD = 0x0, gY = Object['entries'](Af['kS']); gD < gY['length']; gD++) {
                var gn = gY[gD]
                  , gN = gn[0x0]
                  , gX = gn[0x1];
                this['Kd'][gN] = gX['keyCode'];
            }
        }
          , Gv = function() {
            return new Promise(function(gD, gY) {
                (0x0,
                zo['tJ'])((function() {
                    var gn = (0x0,
                    z4['Z'])(z6()['mark'](function gN(gX) {
                        var gB, gr, gl;
                        return z6()['wrap'](function(gd) {
                            for (; ; )
                                switch (gd['prev'] = gd['next']) {
                                case 0x0:
                                    return gX['pause'](),
                                    zo['h']['dispatch']((0x0,
                                    Ga['fx'])(!0x0)),
                                    gB = new GM(),
                                    (gr = new GH(zo['h'],gB))['CS'](gB, void 0x0, void 0x0),
                                    gd['next'] = 0x7,
                                    z9['Z']['qS'](gB);
                                case 0x7:
                                    gl = new G3(gB),
                                    gr['VS'](gl['HR'](), gl['Qw'](), gl['Lo']()),
                                    gD(gl);
                                case 0xa:
                                case 'end':
                                    return gd['stop']();
                                }
                        }, gN);
                    }));
                    return function(gX) {
                        return gn['apply'](this, arguments);
                    }
                    ;
                }()));
            }
            );
        }
          , e0 = z2(0x15294)
          , e1 = 0x0
          , e2 = 0x1
          , e3 = 0x2
          , e4 = 0x3
          , e5 = 0x4
          , e6 = 0x5
          , e7 = 0x6
          , e8 = 0x7
          , e9 = 0x8
          , ez = 0x9
          , eA = 0xa
          , eG = 0xb
          , ee = 0xc
          , eg = 0xd
          , eP = 0xe
          , ej = 0xf
          , eo = 0x10
          , eI = 0x11
          , eJ = 0x12
          , ey = 0x13
          , eR = 0x14
          , eS = 0x15
          , eQ = 0x16
          , eL = 0x17
          , eU = 0x18
          , eb = 0x19
          , ef = 0x1a
          , ex = 0x1b
          , eF = 0x1c
          , eV = 0x1d
          , ek = 0x1e
          , eD = 0x1f
          , eY = 0x20
          , en = 0x21
          , eN = 0x22
          , eX = 0x23
          , eB = 0x24
          , er = 0x25
          , el = (function() {
            function gD(gY) {
                this['LS'] = gY;
            }
            return gD['prototype']['getId'] = function() {
                return this['LS'];
            }
            ,
            gD;
        }())
          , ed = function(gD) {
            function gY(gn) {
                return gD['call'](this, gn) || this;
            }
            return (0x0,
            zH['Z'])(gY, gD),
            gY;
        }(el)
          , eC = function(gD) {
            function gY() {
                var gN;
                return (gN = gD['call'](this, eB) || this)['YS'] = 0x0,
                gN;
            }
            (0x0,
            zH['Z'])(gY, gD);
            var gn = gY['prototype'];
            return gn['ES'] = function(gN) {
                var gX = new DataView(gN);
                if (this['HS'] = gX['getInt16'](0x1),
                this['QS'] = gX['getInt16'](0x3),
                this['_S'] = gX['getInt16'](0x5),
                this['Eh'] = gX['getUint16'](0x7),
                this['YS'] = 0x9,
                this['Eh'] > 0x0) {
                    var gB = gX['getUint8'](this['YS']) > 0x0;
                    this['YS'] += 0x1,
                    this['Qh'] = new Uint8Array(z8['Z']['Sr']);
                    var gr = 0x0;
                    if (gB) {
                        var gl = gX['getUint16'](this['YS']);
                        this['YS'] += 0x2;
                        for (var gd = 0x0; gd < gl; gd++) {
                            var gC = gX['getUint8'](this['YS']);
                            this['YS'] += 0x1;
                            var gO = gX['getUint8'](this['YS']);
                            this['YS'] += 0x1;
                            for (var gp = 0x0; gp < gC; gp++)
                                this['Qh'][gr++] = gO;
                        }
                    } else
                        this['Qh'][gr++] = gX['getUint8'](this['YS']),
                        ++this['YS'];
                }
            }
            ,
            gn['WS'] = function() {
                return this['YS'];
            }
            ,
            gn['ZS'] = function() {
                return this['HS'];
            }
            ,
            gn['KS'] = function() {
                return this['QS'];
            }
            ,
            gn['tM'] = function() {
                return this['_S'];
            }
            ,
            gn['nx'] = function() {
                return this['Qh'];
            }
            ,
            gn['iM'] = function() {
                return this['Eh'];
            }
            ,
            gY;
        }(ed)
          , eO = function(gD) {
            function gY() {
                return gD['call'](this, er) || this;
            }
            (0x0,
            zH['Z'])(gY, gD);
            var gn = gY['prototype'];
            return gn['ES'] = function(gN) {
                var gX = new DataView(gN);
                this['HS'] = gX['getInt16'](0x1),
                this['QS'] = gX['getInt16'](0x3),
                this['_S'] = gX['getInt16'](0x5);
            }
            ,
            gn['WS'] = function() {
                return 0x7;
            }
            ,
            gn['ZS'] = function() {
                return this['HS'];
            }
            ,
            gn['KS'] = function() {
                return this['QS'];
            }
            ,
            gn['tM'] = function() {
                return this['_S'];
            }
            ,
            gY;
        }(ed)
          , ep = function(gD) {
            function gY(gn) {
                return gD['call'](this, gn) || this;
            }
            return (0x0,
            zH['Z'])(gY, gD),
            gY;
        }(el)
          , eW = function(gD) {
            function gY(gN) {
                var gX;
                return (gX = gD['call'](this, e1) || this)['sM'] = gN,
                gX['hM'] = 0x0,
                gX;
            }
            (0x0,
            zH['Z'])(gY, gD);
            var gn = gY['prototype'];
            return gn['nM'] = function() {
                var gN = new ArrayBuffer(this['WS']())
                  , gX = new DataView(gN);
                gX['setUint8'](0x0, this['getId']()),
                gX['setUint32'](0x1, this['sM']['od']),
                gX['setFloat32'](0x5, this['sM']['Gp']['y']),
                gX['setFloat32'](0x9, this['sM']['Gp']['x']),
                gX['setFloat32'](0xd, this['sM']['dp']);
                var gB = 0x0;
                return gB |= this['sM']['nl'] ? 0x1 : 0x0,
                gB |= (this['sM']['sp'] ? 0x1 : 0x0) << 0x1,
                gB |= (this['sM']['ip'] ? 0x1 : 0x0) << 0x2,
                gB |= (this['sM']['rl'] ? 0x1 : 0x0) << 0x3,
                gB |= (this['sM']['hp'] ? 0x1 : 0x0) << 0x4,
                gB |= (this['sM']['np'] ? 0x1 : 0x0) << 0x5,
                gB |= (this['sM']['ep'] ? 0x1 : 0x0) << 0x6,
                gB |= (this['sM']['rp'] ? 0x1 : 0x0) << 0x7,
                gB |= (this['sM']['xp'] ? 0x1 : 0x0) << 0x8,
                gB |= (this['sM']['op'] ? 0x1 : 0x0) << 0x9,
                gB |= (this['sM']['Ap'] ? 0x1 : 0x0) << 0xa,
                gB |= (this['sM']['fp'] ? 0x1 : 0x0) << 0xb,
                gB |= (this['sM']['Ww'] ? 0x1 : 0x0) << 0xc,
                gB |= (this['sM']['Zw'] ? 0x1 : 0x0) << 0xd,
                gB |= (this['sM']['Kw'] ? 0x1 : 0x0) << 0xe,
                gB |= (this['sM']['tp'] ? 0x1 : 0x0) << 0xf,
                gX['setUint16'](0x11, gB),
                this['hM'] = 0x13,
                this['sM']['Ww'] && (gX['setUint8'](this['hM'], this['sM']['cp']),
                this['hM'] += 0x1),
                this['sM']['Zw'] && (gX['setInt8'](this['hM'], this['sM']['vp']),
                this['hM'] += 0x1,
                gX['setInt8'](this['hM'], this['sM']['lp']),
                this['hM'] += 0x1),
                this['sM']['Kw'] && (gX['setUint8'](this['hM'], this['sM']['ki']),
                this['hM'] += 0x1),
                this['sM']['tp'] && (gX['setUint8'](this['hM'], this['sM']['yp']),
                this['hM'] += 0x1,
                gX['setInt8'](this['hM'], this['sM']['lp']),
                this['hM'] += 0x1),
                gN;
            }
            ,
            gn['WS'] = function() {
                var gN = 0x0;
                return this['sM']['Ww'] && (gN += 0x1),
                this['sM']['Zw'] && (gN += 0x2),
                this['sM']['Kw'] && (gN += 0x1),
                this['sM']['tp'] && (gN += 0x2),
                0x13 + gN;
            }
            ,
            gY;
        }(ep)
          , eq = z2(0x11c17)
          , ec = function(gD) {
            function gY() {
                var gN;
                return (gN = gD['call'](this, e2) || this)['eM'] = -0x1,
                gN['YS'] = 0x0,
                gN['rM'] = new Map(),
                gN['xM'] = new Map(),
                gN;
            }
            (0x0,
            zH['Z'])(gY, gD);
            var gn = gY['prototype'];
            return gn['ES'] = function(gN) {
                var gX = new DataView(gN)
                  , gB = gX['getUint16'](0x1);
                this['YS'] += 0x3;
                var gr = 0x0 != (0x1 & gB)
                  , gl = 0x0 != (0x2 & gB)
                  , gd = (0x1c & gB) >> 0x2
                  , gC = 0x0 != (0x20 & gB);
                this['oM'] = 0x0 != (0x40 & gB),
                this['aM'] = 0x0 != (0x80 & gB),
                this['uM'] = 0x0 != (0x100 & gB),
                this['AM'] = 0x0 != (0x200 & gB),
                this['fM'] = 0x0 != (0x400 & gB);
                var gO = 0x0 != (0x800 & gB);
                this['cM'] = 0x0 != (0x1000 & gB),
                this['vM'] = 0x0 != (0x2000 & gB),
                this['sw'] = 0x0 != (0x4000 & gB);
                var gp = gX['getUint32'](this['YS']);
                this['YS'] += 0x4,
                this['CR'] = gX['getUint8'](this['YS']),
                this['YS'] += 0x1;
                var gW = 0x0;
                this['oM'] && (gW = gX['getFloat32'](this['YS']),
                this['YS'] += 0x4);
                var gq = (0x0,
                zg['XX'])(0x0, 0x0, 0x0);
                if (this['aM']) {
                    var gc = gX['getFloat32'](this['YS']);
                    this['YS'] += 0x4;
                    var gu = gX['getFloat32'](this['YS']);
                    this['YS'] += 0x4;
                    var gT = gX['getFloat32'](this['YS']);
                    this['YS'] += 0x4,
                    gq['x'] = gc,
                    gq['y'] = gu,
                    gq['z'] = gT;
                }
                var gw = (0x0,
                zg['XX'])(0x0, 0x0, 0x0);
                if (this['uM']) {
                    var gE = gX['getFloat32'](this['YS']);
                    this['YS'] += 0x4;
                    var gm = gX['getFloat32'](this['YS']);
                    this['YS'] += 0x4;
                    var ga = gX['getFloat32'](this['YS']);
                    this['YS'] += 0x4,
                    gw['x'] = gE,
                    gw['y'] = gm,
                    gw['z'] = ga;
                }
                var gZ = -0x1;
                if (this['AM'] && (gZ = gX['getFloat32'](this['YS']),
                this['YS'] += 0x4),
                this['lM'] = {
                    'wd': gW,
                    'hA': gq,
                    'Gd': gw,
                    'ud': gr,
                    'ld': gl,
                    'yd': gd,
                    'dd': gZ,
                    'od': gp
                },
                this['fM'] && (this['eM'] = gX['getUint8'](this['YS']),
                this['YS'] += 0x1),
                this['vM'] && (this['Qm'] = gX['getUint8'](this['YS']),
                this['YS'] += 0x1),
                this['sw'] && (this['hw'] = gX['getUint8'](this['YS']),
                this['YS'] += 0x1),
                gC) {
                    var gK = gX['getUint8'](this['YS']);
                    this['YS'] += 0x1;
                    for (var gH = 0x0; gH < gK; gH++) {
                        var gM = gX['getInt8'](this['YS']);
                        this['YS'] += 0x1;
                        var gv = gX['getUint16'](this['YS']);
                        this['YS'] += 0x2;
                        var P0 = gX['getUint8'](this['YS']);
                        this['YS'] += 0x1;
                        var P1 = []
                          , P2 = gX['getUint8'](this['YS']);
                        this['YS'] += 0x1;
                        for (var P3 = 0x0; P3 < P2; P3++) {
                            var P4 = gX['getUint8'](this['YS']);
                            this['YS'] += 0x1;
                            var P5 = (0x0,
                            eq['k'])(P4)
                              , P6 = 0x0;
                            switch (P5) {
                            case GG['g']['QR']:
                                P6 = gX['getUint8'](this['YS']),
                                this['YS'] += 0x1;
                                break;
                            case GG['g']['yM']:
                                P6 = gX['getInt8'](this['YS']),
                                this['YS'] += 0x1;
                                break;
                            case GG['g']['GM']:
                                P6 = gX['getUint16'](this['YS']),
                                this['YS'] += 0x2;
                                break;
                            case GG['g']['dM']:
                                P6 = gX['getInt16'](this['YS']),
                                this['YS'] += 0x2;
                                break;
                            case GG['g']['_R']:
                                P6 = gX['getUint32'](this['YS']),
                                this['YS'] += 0x4;
                                break;
                            case GG['g']['ZR']:
                                P6 = gX['getInt32'](this['YS']),
                                this['YS'] += 0x4;
                                break;
                            case GG['g']['tS']:
                                P6 = gX['getFloat32'](this['YS']),
                                this['YS'] += 0x4;
                                break;
                            case GG['g']['wM']:
                                P6 = gX['getFloat64'](this['YS']),
                                this['YS'] += 0x8;
                                break;
                            case GG['g']['WR']:
                                var P7 = gX['getUint8'](this['YS']);
                                this['YS'] += 0x1,
                                P6 = '';
                                for (var P8 = 0x0; P8 < P7; P8++)
                                    P6 += String['fromCharCode'](gX['getUint8'](this['YS'])),
                                    this['YS'] += 0x1;
                                break;
                            case GG['g']['KR']:
                                P6 = gX['getUint8'](this['YS']) > 0x0,
                                this['YS'] += 0x1;
                                break;
                            default:
                                console['error']('Encountered\x20unknown\x20data\x20type\x20when\x20reading\x20Item\x20Metadata\x20in\x20Input\x20Response\x20Packet');
                            }
                            P1['push']({
                                'zG': P4,
                                'pM': P5,
                                'bG': P6
                            });
                        }
                        var P9 = (0x0,
                        zM['YJ'])(gv);
                        P9['mG'](P1),
                        this['rM']['set'](gM, new zK['Z'](P9,P0));
                    }
                }
                if (gO) {
                    var Pz = gX['getUint8'](this['YS']);
                    this['YS'] += 0x1;
                    for (var PA = 0x0; PA < Pz; PA++) {
                        var PG = gX['getUint8'](this['YS']);
                        this['YS'] += 0x1;
                        var Pe = gX['getUint32'](this['YS']);
                        this['YS'] += 0x4,
                        this['xM']['set'](PG, Pe);
                    }
                }
                this['cM'] && (this['mM'] = gX['getUint32'](this['YS']),
                this['YS'] += 0x4,
                this['zM'] = gX['getUint32'](this['YS']),
                this['YS'] += 0x4,
                this['gM'] = gX['getUint32'](this['YS']),
                this['YS'] += 0x4,
                this['$M'] = gX['getUint32'](this['YS']),
                this['YS'] += 0x4);
            }
            ,
            gn['WS'] = function() {
                return this['YS'];
            }
            ,
            gn['jm'] = function() {
                return this['lM'];
            }
            ,
            gn['mp'] = function() {
                return this['eM'];
            }
            ,
            gn['Bp'] = function() {
                return this['rM'];
            }
            ,
            gn['bd'] = function() {
                return this['xM'];
            }
            ,
            gn['bM'] = function() {
                return this['aM'];
            }
            ,
            gn['kM'] = function() {
                return this['uM'];
            }
            ,
            gn['RM'] = function() {
                return this['AM'];
            }
            ,
            gn['SM'] = function() {
                return this['oM'];
            }
            ,
            gn['Ww'] = function() {
                return this['fM'];
            }
            ,
            gn['MM'] = function() {
                return this['cM'];
            }
            ,
            gn['buildModeChanged'] = function() {
                return this['vM'];
            }
            ,
            gn['inventoryStatusChanged'] = function() {
                return this['sw'];
            }
            ,
            gn['getInventoryStatus'] = function() {
                return this['hw'];
            }
            ,
            gn['getMaxHealth'] = function() {
                return this['mM'];
            }
            ,
            gn['getHealth'] = function() {
                return this['zM'];
            }
            ,
            gn['DM'] = function() {
                return this['gM'];
            }
            ,
            gn['getShield'] = function() {
                return this['$M'];
            }
            ,
            gn['CM'] = function() {
                return this['Qm'];
            }
            ,
            gn['JM'] = function() {
                return this['CR'];
            }
            ,
            gY;
        }(ed)
          , eu = function(gD) {
            function gY(gN, gX) {
                var gB;
                return (gB = gD['call'](this, e4) || this)['jM'] = gN,
                gB['PM'] = gX,
                gB;
            }
            (0x0,
            zH['Z'])(gY, gD);
            var gn = gY['prototype'];
            return gn['nM'] = function() {
                var gN = new ArrayBuffer(this['WS']())
                  , gX = new DataView(gN);
                return gX['setUint8'](0x0, this['getId']()),
                gX['setUint8'](0x1, z8['Z']['ir']),
                gX['setUint8'](0x2, this['jM']),
                gX['setUint8'](0x3, this['PM']),
                gN;
            }
            ,
            gn['WS'] = function() {
                return 0x4;
            }
            ,
            gY;
        }(ep)
          , eT = function(gD) {
            function gY() {
                return gD['call'](this, e5) || this;
            }
            (0x0,
            zH['Z'])(gY, gD);
            var gn = gY['prototype'];
            return gn['ES'] = function(gN) {
                var gX = new DataView(gN);
                this['UM'] = gX['getUint32'](0x1);
                var gB = gX['getUint8'](0x5);
                this['NM'] = '';
                for (var gr = 0x0; gr < gB; gr++)
                    this['NM'] += String['fromCharCode'](gX['getUint8'](0x6 + gr));
                var gl = gX['getFloat32'](0x6 + gB)
                  , gd = gX['getFloat32'](0x6 + gB + 0x4)
                  , gC = gX['getFloat32'](0x6 + gB + 0x8);
                this['XM'] = (0x0,
                zg['XX'])(gl, gd, gC);
                var gO = gX['getFloat32'](0x6 + gB + 0xc)
                  , gp = gX['getFloat32'](0x6 + gB + 0x10);
                this['VM'] = (0x0,
                za['Ak'])(gp, gO),
                this['Nl'] = gX['getUint8'](0x6 + gB + 0x14);
                var gW = gX['getFloat32'](0x6 + gB + 0x15)
                  , gq = gX['getFloat32'](0x6 + gB + 0x19)
                  , gc = gX['getFloat32'](0x6 + gB + 0x1d);
                this['TM'] = (0x0,
                zg['XX'])(gW, gq, gc);
                var gu = gX['getFloat32'](0x6 + gB + 0x21)
                  , gT = gX['getFloat32'](0x6 + gB + 0x25)
                  , gw = gX['getFloat32'](0x6 + gB + 0x29);
                this['IM'] = (0x0,
                zg['XX'])(gu, gT, gw),
                this['FM'] = [];
                for (var gE = gX['getUint8'](0x6 + gB + 0x2d), gm = 0x0; gm < gE; gm++)
                    this['FM']['push'](gX['getUint8'](0x6 + gB + 0x2e + gm));
                this['BM'] = gX['getFloat32'](0x6 + gB + 0x2e + gE),
                this['OM'] = Math['min'](Math['max'](gX['getUint32'](0x6 + gB + 0x2e + gE + 0x4), 0x0), 0xffffff);
            }
            ,
            gn['WS'] = function() {
                return 0x6 + this['NM']['length'] + 0x14 + 0x1 + 0xc + 0xc;
            }
            ,
            gn['qM'] = function() {
                return this['UM'];
            }
            ,
            gn['LM'] = function() {
                return this['XM'];
            }
            ,
            gn['YM'] = function() {
                return this['VM'];
            }
            ,
            gn['EM'] = function() {
                return this['NM'];
            }
            ,
            gn['HM'] = function() {
                return this['Nl'];
            }
            ,
            gn['kx'] = function() {
                return this['TM'];
            }
            ,
            gn['Rx'] = function() {
                return this['IM'];
            }
            ,
            gn['QM'] = function() {
                return this['FM'];
            }
            ,
            gn['_M'] = function() {
                return this['BM'];
            }
            ,
            gn['WM'] = function() {
                return this['OM'];
            }
            ,
            gY;
        }(ed)
          , ew = (function() {
            function gD(gn, gN) {
                this['LS'] = gn,
                this['ZM'] = gN,
                this['hA'] = (0x0,
                zg['XX'])(0x0, 0x0, 0x0),
                this['Gp'] = (0x0,
                za['Ak'])(0x0, 0x0);
            }
            var gY = gD['prototype'];
            return gY['Iv'] = function() {
                return this['LS'];
            }
            ,
            gY['KM'] = function() {
                return this['ZM'];
            }
            ,
            gY['bM'] = function() {
                return (0x1 & this['ZM']) > 0x0;
            }
            ,
            gY['tD'] = function() {
                return (0x2 & this['ZM']) > 0x0;
            }
            ,
            gD;
        }())
          , eE = function(gD) {
            function gY(gN) {
                var gX;
                return (gX = gD['call'](this, e3) || this)['iD'] = gN,
                gX['sD'] = Date['now'](),
                gX;
            }
            (0x0,
            zH['Z'])(gY, gD);
            var gn = gY['prototype'];
            return gn['ES'] = function(gN) {
                this['YS'] = 0x0;
                var gX = new DataView(gN);
                for (this['hD'] = gX['getFloat64'](0x1),
                this['nD'] = new Map(),
                this['eD'] = gX['getUint32'](0x9),
                this['YS'] = 0xd; ; ) {
                    var gB = gX['getUint32'](this['YS']);
                    if (this['YS'] += 0x4,
                    0x0 === gB)
                        break;
                    var gr = gX['getUint8'](this['YS']);
                    this['YS'] += 0x1;
                    var gl = new ew(gB,gr);
                    gl['bM']() && (gl['hA']['x'] = gX['getFloat32'](this['YS']),
                    gl['hA']['y'] = gX['getFloat32'](this['YS'] + 0x4),
                    gl['hA']['z'] = gX['getFloat32'](this['YS'] + 0x8),
                    this['YS'] += 0xc),
                    gl['tD']() && (gl['Gp']['y'] = gX['getFloat32'](this['YS']),
                    gl['Gp']['x'] = gX['getFloat32'](this['YS'] + 0x4),
                    this['YS'] += 0x8),
                    this['nD']['set'](gB, gl);
                }
                if (void 0x0 !== this['iD']) {
                    this['sD'] = this['iD']['Mk']() + (this['hD'] - this['iD']['rD']());
                    var gd = Date['now']() - this['sD'];
                    this['sD'] += 0.05 * gd,
                    this['iD'] = void 0x0;
                }
            }
            ,
            gn['WS'] = function() {
                return this['YS'];
            }
            ,
            gn['rD'] = function() {
                return this['hD'];
            }
            ,
            gn['Mk'] = function() {
                return this['sD'];
            }
            ,
            gn['Dk'] = function() {
                return this['nD'];
            }
            ,
            gn['jk'] = function() {
                return this['eD'];
            }
            ,
            gY;
        }(ed)
          , em = function(gD) {
            function gY() {
                return gD['call'](this, e6) || this;
            }
            (0x0,
            zH['Z'])(gY, gD);
            var gn = gY['prototype'];
            return gn['ES'] = function(gN) {
                var gX = new DataView(gN);
                this['HS'] = gX['getInt32'](0x1),
                this['QS'] = gX['getInt32'](0x5),
                this['_S'] = gX['getInt32'](0x9),
                this['xD'] = gX['getUint8'](0xd);
            }
            ,
            gn['WS'] = function() {
                return 0xe;
            }
            ,
            gn['ZS'] = function() {
                return this['HS'];
            }
            ,
            gn['KS'] = function() {
                return this['QS'];
            }
            ,
            gn['tM'] = function() {
                return this['_S'];
            }
            ,
            gn['oD'] = function() {
                return this['xD'];
            }
            ,
            gY;
        }(ed)
          , ea = function(gD) {
            function gY() {
                return gD['call'](this, e8) || this;
            }
            (0x0,
            zH['Z'])(gY, gD);
            var gn = gY['prototype'];
            return gn['ES'] = function(gN) {
                var gX = new DataView(gN);
                this['UM'] = gX['getUint32'](0x1);
                var gB = gX['getFloat32'](0x5)
                  , gr = gX['getFloat32'](0x9)
                  , gl = gX['getFloat32'](0xd);
                this['aD'] = (0x0,
                zg['XX'])(gB, gr, gl);
                var gd = gX['getFloat32'](0x11)
                  , gC = gX['getFloat32'](0x15);
                this['uD'] = (0x0,
                za['Ak'])(gd, gC);
            }
            ,
            gn['WS'] = function() {
                return 0x19;
            }
            ,
            gn['qM'] = function() {
                return this['UM'];
            }
            ,
            gn['AD'] = function() {
                return this['aD'];
            }
            ,
            gn['hl'] = function() {
                return this['uD'];
            }
            ,
            gY;
        }(ed)
          , eZ = function(gD) {
            function gY() {
                var gN;
                return (gN = gD['call'](this, eg) || this)['YS'] = 0x0,
                gN['fD'] = [],
                gN;
            }
            (0x0,
            zH['Z'])(gY, gD);
            var gn = gY['prototype'];
            return gn['ES'] = function(gN) {
                var gX = new DataView(gN);
                this['YS'] += 0x1,
                this['cD'] = gX['getUint32'](this['YS']),
                this['YS'] += 0x4;
                var gB = gX['getUint8'](this['YS']);
                this['YS'] += 0x1;
                for (var gr = 0x0; gr < gB; gr++) {
                    var gl = gX['getUint8'](this['YS']);
                    this['YS'] += 0x1;
                    var gd = 0x0;
                    switch ((0x0,
                    Az['g'])(gl)) {
                    case GG['g']['QR']:
                        gd = gX['getUint8'](this['YS']),
                        this['YS'] += 0x1;
                        break;
                    case GG['g']['yM']:
                        gd = gX['getInt8'](this['YS']),
                        this['YS'] += 0x1;
                        break;
                    case GG['g']['GM']:
                        gd = gX['getUint16'](this['YS']),
                        this['YS'] += 0x2;
                        break;
                    case GG['g']['dM']:
                        gd = gX['getInt16'](this['YS']),
                        this['YS'] += 0x2;
                        break;
                    case GG['g']['_R']:
                        gd = gX['getUint32'](this['YS']),
                        this['YS'] += 0x4;
                        break;
                    case GG['g']['ZR']:
                        gd = gX['getInt32'](this['YS']),
                        this['YS'] += 0x4;
                        break;
                    case GG['g']['tS']:
                        gd = gX['getFloat32'](this['YS']),
                        this['YS'] += 0x4;
                        break;
                    case GG['g']['wM']:
                        gd = gX['getFloat64'](this['YS']),
                        this['YS'] += 0x8;
                        break;
                    case GG['g']['WR']:
                        var gC = gX['getUint8'](this['YS']);
                        this['YS'] += 0x1,
                        gd = '';
                        for (var gO = 0x0; gO < gC; gO++)
                            gd += String['fromCharCode'](gX['getUint8'](this['YS'])),
                            this['YS'] += 0x1;
                        break;
                    case GG['g']['KR']:
                        gd = gX['getUint8'](this['YS']) > 0x0,
                        this['YS'] += 0x1;
                        break;
                    default:
                        console['error']('Encountered\x20unknown\x20data\x20type\x20when\x20reading\x20Entity\x20Metadata\x20Packet');
                    }
                    this['fD']['push']({
                        'zG': gl,
                        'bG': gd
                    });
                }
            }
            ,
            gn['WS'] = function() {
                return this['YS'];
            }
            ,
            gn['vD'] = function() {
                return this['cD'];
            }
            ,
            gn['lD'] = function() {
                return this['fD'];
            }
            ,
            gY;
        }(ed)
          , eK = function(gD) {
            function gY() {
                var gN;
                return (gN = gD['call'](this, eL) || this)['YS'] = 0x0,
                gN['fD'] = [],
                gN;
            }
            (0x0,
            zH['Z'])(gY, gD);
            var gn = gY['prototype'];
            return gn['ES'] = function(gN) {
                var gX = new DataView(gN);
                this['YS'] += 0x1;
                var gB = gX['getUint8'](this['YS']);
                this['YS'] += 0x1;
                for (var gr = 0x0; gr < gB; gr++) {
                    var gl = gX['getUint8'](this['YS']);
                    this['YS'] += 0x1;
                    var gd = 0x0;
                    switch (GO[gl]) {
                    case GG['g']['QR']:
                        gd = gX['getUint8'](this['YS']),
                        this['YS'] += 0x1;
                        break;
                    case GG['g']['yM']:
                        gd = gX['getInt8'](this['YS']),
                        this['YS'] += 0x1;
                        break;
                    case GG['g']['GM']:
                        gd = gX['getUint16'](this['YS']),
                        this['YS'] += 0x2;
                        break;
                    case GG['g']['dM']:
                        gd = gX['getInt16'](this['YS']),
                        this['YS'] += 0x2;
                        break;
                    case GG['g']['_R']:
                        gd = gX['getUint32'](this['YS']),
                        this['YS'] += 0x4;
                        break;
                    case GG['g']['ZR']:
                        gd = gX['getInt32'](this['YS']),
                        this['YS'] += 0x4;
                        break;
                    case GG['g']['tS']:
                        gd = gX['getFloat32'](this['YS']),
                        this['YS'] += 0x4;
                        break;
                    case GG['g']['wM']:
                        gd = gX['getFloat64'](this['YS']),
                        this['YS'] += 0x8;
                        break;
                    case GG['g']['WR']:
                        var gC = gX['getUint8'](this['YS']);
                        this['YS'] += 0x1,
                        gd = '';
                        for (var gO = 0x0; gO < gC; gO++)
                            gd += String['fromCharCode'](gX['getUint8'](this['YS'])),
                            this['YS'] += 0x1;
                        break;
                    case GG['g']['KR']:
                        gd = gX['getUint8'](this['YS']) > 0x0,
                        this['YS'] += 0x1;
                        break;
                    default:
                        console['error']('Encountered\x20unknown\x20data\x20type\x20when\x20reading\x20Game\x20Metadata\x20Packet');
                    }
                    this['fD']['push']({
                        'zG': gl,
                        'bG': gd
                    });
                }
            }
            ,
            gn['WS'] = function() {
                return this['YS'];
            }
            ,
            gn['lD'] = function() {
                return this['fD'];
            }
            ,
            gY;
        }(ed)
          , eH = function(gD) {
            function gY() {
                return gD['call'](this, ej) || this;
            }
            (0x0,
            zH['Z'])(gY, gD);
            var gn = gY['prototype'];
            return gn['ES'] = function(gN) {
                var gX = new DataView(gN);
                this['cD'] = gX['getUint32'](0x1),
                this['yD'] = gX['getUint8'](0x5);
            }
            ,
            gn['WS'] = function() {
                return 0x6;
            }
            ,
            gn['vD'] = function() {
                return this['cD'];
            }
            ,
            gn['GD'] = function() {
                return this['yD'];
            }
            ,
            gY;
        }(ed)
          , eM = function(gD) {
            function gY() {
                return gD['call'](this, e7) || this;
            }
            (0x0,
            zH['Z'])(gY, gD);
            var gn = gY['prototype'];
            return gn['ES'] = function(gN) {
                var gX = new DataView(gN);
                this['dD'] = 0x1 === gX['getUint8'](0x1);
                var gB = gX['getInt32'](0x2)
                  , gr = gX['getInt32'](0x6)
                  , gl = gX['getInt32'](0xa);
                this['wD'] = (0x0,
                zg['XX'])(gB, gr, gl);
                var gd = gX['getUint16'](0xe);
                this['pD'] = [];
                for (var gC = 0x0; gC < gd; gC++) {
                    var gO = gX['getInt32'](0x10 + 0xc * gC)
                      , gp = gX['getInt32'](0x10 + 0xc * gC + 0x4)
                      , gW = gX['getInt32'](0x10 + 0xc * gC + 0x8);
                    this['pD']['push']((0x0,
                    zg['XX'])(gO, gp, gW));
                }
                var gq = gX['getUint16'](0x10 + 0xc * gd);
                this['mD'] = [];
                for (var gc = 0x0; gc < gq; gc++) {
                    var gu = gX['getInt32'](0x12 + 0xc * gd + 0x10 * gc)
                      , gT = gX['getInt32'](0x12 + 0xc * gd + 0x10 * gc + 0x4)
                      , gw = gX['getInt32'](0x12 + 0xc * gd + 0x10 * gc + 0x8)
                      , gE = gX['getFloat32'](0x12 + 0xc * gd + 0x10 * gc + 0xc);
                    this['mD']['push']({
                        'pos': (0x0,
                        zg['XX'])(gu, gT, gw),
                        'progress': gE
                    });
                }
            }
            ,
            gn['WS'] = function() {
                return 0x10 + 0xc * this['pD']['length'] + 0x2 + 0x10 * this['mD']['length'];
            }
            ,
            gn['zD'] = function() {
                return this['dD'];
            }
            ,
            gn['gD'] = function() {
                return this['wD'];
            }
            ,
            gn['$D'] = function() {
                return this['pD'];
            }
            ,
            gn['bD'] = function() {
                return this['mD'];
            }
            ,
            gY;
        }(ed)
          , ev = function(gD) {
            function gY() {
                return gD['call'](this, eJ) || this;
            }
            (0x0,
            zH['Z'])(gY, gD);
            var gn = gY['prototype'];
            return gn['ES'] = function(gN) {
                var gX = new DataView(gN)
                  , gB = gX['getFloat32'](0x1)
                  , gr = gX['getFloat32'](0x5)
                  , gl = gX['getFloat32'](0x9);
                this['kD'] = (0x0,
                zg['XX'])(gB, gr, gl);
                var gd = gX['getUint8'](0xd);
                this['RD'] = 0x0 != (0x1 & gd);
            }
            ,
            gn['WS'] = function() {
                return 0xe;
            }
            ,
            gn['SD'] = function() {
                return this['kD'];
            }
            ,
            gn['MD'] = function() {
                return this['RD'];
            }
            ,
            gY;
        }(ed)
          , g0 = z2(0x25a9)
          , g1 = z2['n'](g0)
          , g2 = function(gD) {
            function gY() {
                return gD['call'](this, e9) || this;
            }
            (0x0,
            zH['Z'])(gY, gD);
            var gn = gY['prototype'];
            return gn['ES'] = function(gN) {
                var gX = new DataView(gN)
                  , gB = gX['getUint8'](0x1);
                this['DD'] = '';
                for (var gr = 0x0; gr < gB; gr++)
                    this['DD'] += g1()(gX['getUint32'](0x2 + 0x4 * gr));
            }
            ,
            gn['CD'] = function() {
                return this['DD'];
            }
            ,
            gn['WS'] = function() {
                return 0x2 + 0x4 * this['DD']['length'];
            }
            ,
            gY;
        }(ed);
        z2(0x3c9d);
        function g3(gD, gY) {
            var gn = 'undefined' != typeof Symbol && gD[Symbol['iterator']] || gD['@@iterator'];
            if (gn)
                return (gn = gn['call'](gD))['next']['bind'](gn);
            if (Array['isArray'](gD) || (gn = function(gX, gB) {
                if (!gX)
                    return;
                if ('string' == typeof gX)
                    return g4(gX, gB);
                var gr = Object['prototype']['toString']['call'](gX)['slice'](0x8, -0x1);
                'Object' === gr && gX['constructor'] && (gr = gX['constructor']['name']);
                if ('Map' === gr || 'Set' === gr)
                    return Array['from'](gX);
                if ('Arguments' === gr || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/['test'](gr))
                    return g4(gX, gB);
            }(gD)) || gY && gD && 'number' == typeof gD['length']) {
                gn && (gD = gn);
                var gN = 0x0;
                return function() {
                    return gN >= gD['length'] ? {
                        'done': !0x0
                    } : {
                        'done': !0x1,
                        'value': gD[gN++]
                    };
                }
                ;
            }
            throw new TypeError('Invalid\x20attempt\x20to\x20iterate\x20non-iterable\x20instance.\x0aIn\x20order\x20to\x20be\x20iterable,\x20non-array\x20objects\x20must\x20have\x20a\x20[Symbol.iterator]()\x20method.');
        }
        function g4(gD, gY) {
            (null == gY || gY > gD['length']) && (gY = gD['length']);
            for (var gn = 0x0, gN = new Array(gY); gn < gY; gn++)
                gN[gn] = gD[gn];
            return gN;
        }
        var g5 = function(gD) {
            function gY(gN) {
                var gX;
                return (gX = gD['call'](this, ez) || this)['DD'] = gN,
                gX['DD'] = gX['DD']['substr'](0x0, 0x64),
                gX;
            }
            (0x0,
            zH['Z'])(gY, gD);
            var gn = gY['prototype'];
            return gn['nM'] = function() {
                var gN = new ArrayBuffer(this['WS']())
                  , gX = new DataView(gN);
                gX['setUint8'](0x0, this['getId']());
                for (var gB, gr = [], gl = g3(this['DD']); !(gB = gl())['done']; ) {
                    var gd = gB['value'];
                    gr['push'](gd);
                }
                gX['setUint8'](0x1, gr['length']);
                for (var gC = 0x0; gC < gr['length']; gC++) {
                    var gO = gr[gC]['codePointAt'](0x0)
                      , gp = void 0x0 === gO ? 0x0 : gO;
                    gX['setUint32'](0x2 + 0x4 * gC, gp);
                }
                return gN;
            }
            ,
            gn['WS'] = function() {
                return 0x2 + 0x4 * this['DD']['length'];
            }
            ,
            gY;
        }(ep)
          , g6 = function(gD) {
            function gY() {
                return gD['call'](this, eA) || this;
            }
            (0x0,
            zH['Z'])(gY, gD);
            var gn = gY['prototype'];
            return gn['ES'] = function(gN) {
                var gX = new DataView(gN);
                this['cD'] = gX['getUint32'](0x1),
                this['JD'] = gX['getUint8'](0x5);
            }
            ,
            gn['WS'] = function() {
                return 0x6;
            }
            ,
            gn['vD'] = function() {
                return this['cD'];
            }
            ,
            gn['jD'] = function() {
                return this['JD'];
            }
            ,
            gY;
        }(ed)
          , g7 = function(gD) {
            function gY() {
                return gD['call'](this, eG) || this;
            }
            (0x0,
            zH['Z'])(gY, gD);
            var gn = gY['prototype'];
            return gn['ES'] = function(gN) {
                var gX = new DataView(gN);
                this['cD'] = gX['getUint32'](0x1);
            }
            ,
            gn['WS'] = function() {
                return 0x6;
            }
            ,
            gn['vD'] = function() {
                return this['cD'];
            }
            ,
            gY;
        }(ed)
          , g8 = function(gD) {
            function gY() {
                var gN;
                return (gN = gD['call'](this, ee) || this)['YS'] = 0x0,
                gN['PD'] = '',
                gN['UD'] = AA['C']['ln'],
                gN['ND'] = '',
                gN['XD'] = AA['C']['ln'],
                gN['VD'] = A3['q']['hn'],
                gN;
            }
            (0x0,
            zH['Z'])(gY, gD);
            var gn = gY['prototype'];
            return gn['ES'] = function(gN) {
                this['YS'] += 0x1;
                var gX = new DataView(gN)
                  , gB = gX['getUint8'](this['YS']);
                this['YS'] += 0x1;
                for (var gr = 0x0; gr < gB; gr++)
                    this['PD'] += String['fromCharCode'](gX['getUint8'](this['YS'])),
                    this['YS'] += 0x1;
                this['UD'] = gX['getUint8'](this['YS']),
                this['YS'] += 0x1;
                var gl = gX['getUint8'](this['YS']);
                this['YS'] += 0x1;
                for (var gd = 0x0; gd < gl; gd++)
                    this['ND'] += String['fromCharCode'](gX['getUint8'](this['YS'])),
                    this['YS'] += 0x1;
                this['XD'] = gX['getUint8'](this['YS']),
                this['YS'] += 0x1,
                this['TD'] = gX['getUint8'](this['YS']),
                this['YS'] += 0x1,
                this['TD'] === G5 && (this['VD'] = gX['getUint8'](this['YS']),
                this['YS'] += 0x1);
            }
            ,
            gn['WS'] = function() {
                return this['YS'];
            }
            ,
            gn['ID'] = function() {
                return this['PD'];
            }
            ,
            gn['FD'] = function() {
                return this['UD'];
            }
            ,
            gn['BD'] = function() {
                return this['ND'];
            }
            ,
            gn['OD'] = function() {
                return this['XD'];
            }
            ,
            gn['qD'] = function() {
                return this['TD'];
            }
            ,
            gn['LD'] = function() {
                return this['VD'];
            }
            ,
            gY;
        }(ed)
          , g9 = function(gD) {
            function gY() {
                return gD['call'](this, eP) || this;
            }
            (0x0,
            zH['Z'])(gY, gD);
            var gn = gY['prototype'];
            return gn['ES'] = function(gN) {
                var gX = new DataView(gN);
                this['HS'] = gX['getInt32'](0x1),
                this['QS'] = gX['getInt32'](0x5),
                this['_S'] = gX['getInt32'](0x9),
                this['YD'] = gX['getFloat32'](0xd);
            }
            ,
            gn['WS'] = function() {
                return 0x11;
            }
            ,
            gn['ZS'] = function() {
                return this['HS'];
            }
            ,
            gn['KS'] = function() {
                return this['QS'];
            }
            ,
            gn['tM'] = function() {
                return this['_S'];
            }
            ,
            gn['ED'] = function() {
                return this['YD'];
            }
            ,
            gY;
        }(ed)
          , gz = function(gD) {
            function gY() {
                return gD['call'](this, eo) || this;
            }
            (0x0,
            zH['Z'])(gY, gD);
            var gn = gY['prototype'];
            return gn['nM'] = function() {
                var gN = new ArrayBuffer(this['WS']());
                return new DataView(gN)['setUint8'](0x0, this['getId']()),
                gN;
            }
            ,
            gn['WS'] = function() {
                return 0x1;
            }
            ,
            gY;
        }(ep)
          , gA = function(gD) {
            function gY() {
                var gN;
                return (gN = gD['call'](this, eR) || this)['HD'] = '',
                gN['YS'] = 0x0,
                gN;
            }
            (0x0,
            zH['Z'])(gY, gD);
            var gn = gY['prototype'];
            return gn['ES'] = function(gN) {
                var gX = new DataView(gN)
                  , gB = gX['getUint32'](0x1);
                this['HD'] = '';
                for (var gr = 0x0; gr < gB; gr++)
                    this['HD'] += String['fromCharCode'](gX['getUint8'](0x5 + gr));
                this['HD'] = window['btoa'](this['HD']),
                this['YS'] = 0x5 + gB;
            }
            ,
            gn['WS'] = function() {
                return this['YS'];
            }
            ,
            gn['QD'] = function() {
                return this['HD'];
            }
            ,
            gY;
        }(ed)
          , gG = function(gD) {
            function gY() {
                return gD['call'](this, eU) || this;
            }
            (0x0,
            zH['Z'])(gY, gD);
            var gn = gY['prototype'];
            return gn['ES'] = function(gN) {
                var gX = new DataView(gN)
                  , gB = gX['getUint8'](0x1);
                this['DD'] = '';
                for (var gr = 0x0; gr < gB; gr++)
                    this['DD'] += g1()(gX['getUint32'](0x2 + 0x4 * gr));
            }
            ,
            gn['CD'] = function() {
                return this['DD'];
            }
            ,
            gn['WS'] = function() {
                return 0x2 + this['DD']['length'];
            }
            ,
            gY;
        }(ed)
          , ge = function(gD) {
            function gY() {
                var gN;
                return (gN = gD['call'](this, eb) || this)['_D'] = !0x1,
                gN;
            }
            (0x0,
            zH['Z'])(gY, gD);
            var gn = gY['prototype'];
            return gn['ES'] = function(gN) {
                var gX = new DataView(gN);
                this['_D'] = 0x0 !== gX['getUint8'](0x1);
            }
            ,
            gn['WS'] = function() {
                return 0x2;
            }
            ,
            gn['WD'] = function() {
                return this['_D'];
            }
            ,
            gY;
        }(ed)
          , gg = function(gD) {
            function gY() {
                return gD['call'](this, eI) || this;
            }
            (0x0,
            zH['Z'])(gY, gD);
            var gn = gY['prototype'];
            return gn['ES'] = function(gN) {
                new DataView(gN);
            }
            ,
            gn['WS'] = function() {
                return 0x1;
            }
            ,
            gY;
        }(ed)
          , gP = function(gD) {
            function gY() {
                return gD['call'](this, eS) || this;
            }
            (0x0,
            zH['Z'])(gY, gD);
            var gn = gY['prototype'];
            return gn['ES'] = function(gN) {
                var gX = new DataView(gN);
                this['ZD'] = gX['getUint8'](0x1);
                var gB = gX['getUint8'](0x2);
                this['DD'] = '';
                for (var gr = 0x0; gr < gB; gr++)
                    this['DD'] += g1()(gX['getUint32'](0x3 + 0x4 * gr));
            }
            ,
            gn['KD'] = function() {
                return this['ZD'];
            }
            ,
            gn['CD'] = function() {
                return this['DD'];
            }
            ,
            gn['WS'] = function() {
                return 0x3 + 0x4 * this['DD']['length'];
            }
            ,
            gY;
        }(ed)
          , gj = function(gD) {
            function gY() {
                return gD['call'](this, eQ) || this;
            }
            (0x0,
            zH['Z'])(gY, gD);
            var gn = gY['prototype'];
            return gn['ES'] = function(gN) {
                var gX = new DataView(gN)
                  , gB = gX['getFloat32'](0x1)
                  , gr = gX['getFloat32'](0x5);
                this['qk'] = (0x0,
                za['Ak'])(gB, gr),
                this['Yk'] = gX['getFloat32'](0x9);
                var gl = gX['getFloat32'](0xd)
                  , gd = gX['getFloat32'](0x11);
                this['Qk'] = (0x0,
                za['Ak'])(gl, gd),
                this['_k'] = gX['getFloat32'](0x15),
                this['Zk'] = gX['getUint32'](0x19),
                this['Kk'] = gX['getUint32'](0x1d);
            }
            ,
            gn['WS'] = function() {
                return 0x21;
            }
            ,
            gn['hR'] = function() {
                return this['qk'];
            }
            ,
            gn['nR'] = function() {
                return this['Yk'];
            }
            ,
            gn['rR'] = function() {
                return this['Qk'];
            }
            ,
            gn['xR'] = function() {
                return this['_k'];
            }
            ,
            gn['tC'] = function() {
                return this['Zk'];
            }
            ,
            gn['iC'] = function() {
                return this['Kk'];
            }
            ,
            gY;
        }(ed)
          , go = function(gD) {
            function gY() {
                return gD['call'](this, ey) || this;
            }
            (0x0,
            zH['Z'])(gY, gD);
            var gn = gY['prototype'];
            return gn['ES'] = function(gN) {
                var gX = new DataView(gN);
                this['cD'] = gX['getUint32'](0x1),
                this['sC'] = gX['getUint32'](0x5),
                this['hC'] = gX['getUint32'](0x9);
                var gB = gX['getUint8'](0xd);
                this['nC'] = 0x0 != (0x1 & gB),
                this['eC'] = 0x0 != (0x2 & gB),
                this['RD'] = 0x0 != (0x4 & gB);
            }
            ,
            gn['WS'] = function() {
                return 0x8;
            }
            ,
            gn['vD'] = function() {
                return this['cD'];
            }
            ,
            gn['rC'] = function() {
                return this['hC'];
            }
            ,
            gn['xC'] = function() {
                return this['sC'];
            }
            ,
            gn['oC'] = function() {
                return this['nC'];
            }
            ,
            gn['aC'] = function() {
                return this['eC'];
            }
            ,
            gn['MD'] = function() {
                return this['RD'];
            }
            ,
            gY;
        }(ed)
          , gI = function(gD) {
            function gY() {
                return gD['call'](this, ef) || this;
            }
            (0x0,
            zH['Z'])(gY, gD);
            var gn = gY['prototype'];
            return gn['ES'] = function(gN) {
                var gX = new DataView(gN)
                  , gB = gX['getUint8'](0x1);
                this['DD'] = '';
                for (var gr = 0x0; gr < gB; gr++)
                    this['DD'] += g1()(gX['getUint32'](0x2 + 0x4 * gr));
            }
            ,
            gn['CD'] = function() {
                return this['DD'];
            }
            ,
            gn['WS'] = function() {
                return 0x2 + this['DD']['length'];
            }
            ,
            gY;
        }(ed)
          , gJ = function(gD) {
            function gY(gN) {
                var gX;
                return (gX = gD['call'](this, ex) || this)['uC'] = gN,
                gX;
            }
            (0x0,
            zH['Z'])(gY, gD);
            var gn = gY['prototype'];
            return gn['nM'] = function() {
                var gN = new ArrayBuffer(this['WS']())
                  , gX = new DataView(gN);
                return gX['setUint8'](0x0, this['getId']()),
                gX['setUint32'](0x1, this['uC']),
                gN;
            }
            ,
            gn['WS'] = function() {
                return 0x5;
            }
            ,
            gY;
        }(ep)
          , gy = function(gD) {
            function gY() {
                return gD['call'](this, eN) || this;
            }
            (0x0,
            zH['Z'])(gY, gD);
            var gn = gY['prototype'];
            return gn['nM'] = function() {
                var gN = new ArrayBuffer(this['WS']());
                return new DataView(gN)['setUint8'](0x0, this['getId']()),
                gN;
            }
            ,
            gn['WS'] = function() {
                return 0x1;
            }
            ,
            gY;
        }(ep)
          , gR = function(gD) {
            function gY() {
                var gN;
                return (gN = gD['call'](this, eF) || this)['YS'] = 0x0,
                gN['fD'] = [],
                gN;
            }
            (0x0,
            zH['Z'])(gY, gD);
            var gn = gY['prototype'];
            return gn['ES'] = function(gN) {
                var gX = new DataView(gN);
                this['YS'] += 0x1,
                this['cD'] = gX['getUint32'](this['YS']),
                this['YS'] += 0x4,
                this['AC'] = gX['getUint8'](this['YS']),
                this['YS'] += 0x1;
                var gB = gX['getUint8'](this['YS']);
                this['YS'] += 0x1;
                for (var gr = 0x0; gr < gB; gr++) {
                    var gl = gX['getUint8'](this['YS']);
                    this['YS'] += 0x1;
                    var gd = 0x0;
                    switch (GE[gl]) {
                    case GG['g']['QR']:
                        gd = gX['getUint8'](this['YS']),
                        this['YS'] += 0x1;
                        break;
                    case GG['g']['yM']:
                        gd = gX['getInt8'](this['YS']),
                        this['YS'] += 0x1;
                        break;
                    case GG['g']['GM']:
                        gd = gX['getUint16'](this['YS']),
                        this['YS'] += 0x2;
                        break;
                    case GG['g']['dM']:
                        gd = gX['getInt16'](this['YS']),
                        this['YS'] += 0x2;
                        break;
                    case GG['g']['_R']:
                        gd = gX['getUint32'](this['YS']),
                        this['YS'] += 0x4;
                        break;
                    case GG['g']['ZR']:
                        gd = gX['getInt32'](this['YS']),
                        this['YS'] += 0x4;
                        break;
                    case GG['g']['tS']:
                        gd = gX['getFloat32'](this['YS']),
                        this['YS'] += 0x4;
                        break;
                    case GG['g']['wM']:
                        gd = gX['getFloat64'](this['YS']),
                        this['YS'] += 0x8;
                        break;
                    case GG['g']['WR']:
                        var gC = gX['getUint8'](this['YS']);
                        this['YS'] += 0x1,
                        gd = '';
                        for (var gO = 0x0; gO < gC; gO++)
                            gd += String['fromCharCode'](gX['getUint8'](this['YS'])),
                            this['YS'] += 0x1;
                        break;
                    case GG['g']['KR']:
                        gd = gX['getUint8'](this['YS']) > 0x0,
                        this['YS'] += 0x1;
                        break;
                    default:
                        console['error']('Encountered\x20unknown\x20data\x20type\x20when\x20reading\x20Entity\x20Metadata\x20Packet');
                    }
                    this['fD']['push']({
                        'zG': gl,
                        'bG': gd
                    });
                }
            }
            ,
            gn['WS'] = function() {
                return this['YS'];
            }
            ,
            gn['vD'] = function() {
                return this['cD'];
            }
            ,
            gn['fC'] = function() {
                return this['AC'];
            }
            ,
            gn['lD'] = function() {
                return this['fD'];
            }
            ,
            gY;
        }(ed)
          , gS = function(gD) {
            function gY(gN, gX) {
                var gB;
                return (gB = gD['call'](this, eV) || this)['cC'] = gN,
                gB['vC'] = gX,
                gB;
            }
            (0x0,
            zH['Z'])(gY, gD);
            var gn = gY['prototype'];
            return gn['nM'] = function() {
                var gN = new ArrayBuffer(this['WS']())
                  , gX = new DataView(gN);
                return gX['setUint8'](0x0, this['getId']()),
                gX['setUint8'](0x1, this['cC']),
                gX['setUint8'](0x2, this['vC']),
                gN;
            }
            ,
            gn['WS'] = function() {
                return 0x3;
            }
            ,
            gY;
        }(ep)
          , gQ = function(gD) {
            function gY() {
                return gD['call'](this, ek) || this;
            }
            (0x0,
            zH['Z'])(gY, gD);
            var gn = gY['prototype'];
            return gn['ES'] = function(gN) {
                var gX = new DataView(gN)
                  , gB = gX['getUint8'](0x1);
                this['DD'] = '';
                for (var gr = 0x0; gr < gB; gr++)
                    this['DD'] += g1()(gX['getUint32'](0x2 + 0x4 * gr));
            }
            ,
            gn['CD'] = function() {
                return this['DD'];
            }
            ,
            gn['WS'] = function() {
                return 0x2 + 0x4 * this['DD']['length'];
            }
            ,
            gY;
        }(ed)
          , gL = function(gD) {
            function gY() {
                return gD['call'](this, eD) || this;
            }
            (0x0,
            zH['Z'])(gY, gD);
            var gn = gY['prototype'];
            return gn['ES'] = function(gN) {
                var gX = new DataView(gN);
                this['lC'] = gX['getUint8'](0x1),
                this['yC'] = gX['getFloat32'](0x2),
                this['GC'] = gX['getFloat32'](0x6);
            }
            ,
            gn['dC'] = function() {
                return this['lC'];
            }
            ,
            gn['wC'] = function() {
                return this['yC'];
            }
            ,
            gn['pC'] = function() {
                return this['GC'];
            }
            ,
            gn['WS'] = function() {
                return 0xa;
            }
            ,
            gY;
        }(ed)
          , gU = function(gD) {
            function gY() {
                return gD['call'](this, eY) || this;
            }
            (0x0,
            zH['Z'])(gY, gD);
            var gn = gY['prototype'];
            return gn['ES'] = function(gN) {
                var gX = new DataView(gN)
                  , gB = gX['getFloat32'](0x1)
                  , gr = gX['getFloat32'](0x5)
                  , gl = gX['getFloat32'](0x9);
                this['mC'] = (0x0,
                zg['XX'])(gB, gr, gl),
                this['lC'] = gX['getUint8'](0xd),
                this['yC'] = gX['getFloat32'](0xe),
                this['GC'] = gX['getFloat32'](0x12);
            }
            ,
            gn['AD'] = function() {
                return this['mC'];
            }
            ,
            gn['dC'] = function() {
                return this['lC'];
            }
            ,
            gn['wC'] = function() {
                return this['yC'];
            }
            ,
            gn['pC'] = function() {
                return this['GC'];
            }
            ,
            gn['WS'] = function() {
                return 0x16;
            }
            ,
            gY;
        }(ed)
          , gb = function(gD) {
            function gY() {
                return gD['call'](this, en) || this;
            }
            (0x0,
            zH['Z'])(gY, gD);
            var gn = gY['prototype'];
            return gn['ES'] = function(gN) {
                var gX = new DataView(gN);
                this['zC'] = gX['getUint8'](0x1),
                this['gC'] = gX['getUint16'](0x2);
            }
            ,
            gn['WS'] = function() {
                return 0x4;
            }
            ,
            gn['$C'] = function() {
                return this['zC'];
            }
            ,
            gn['bC'] = function() {
                return this['gC'];
            }
            ,
            gY;
        }(ed)
          , gf = function(gD) {
            function gY() {
                var gN;
                return (gN = gD['call'](this, e8) || this)['kC'] = [],
                gN['YS'] = 0x0,
                gN;
            }
            (0x0,
            zH['Z'])(gY, gD);
            var gn = gY['prototype'];
            return gn['ES'] = function(gN) {
                var gX = new DataView(gN)
                  , gB = gX['getUint8'](0x1);
                this['YS'] += 0x2;
                for (var gr = 0x0; gr < gB; gr++) {
                    var gl = gX['getUint8'](this['YS']);
                    this['YS'] += 0x1;
                    var gd = ''
                      , gC = String['fromCharCode'](gX['getUint8'](this['YS']));
                    for (this['YS'] += 0x1; gC !== String['fromCharCode'](0x0); )
                        gd += gC,
                        gC = String['fromCharCode'](gX['getUint8'](this['YS'])),
                        this['YS'] += 0x1;
                    var gO = gX['getUint32'](this['YS']);
                    this['YS'] += 0x4,
                    this['kC']['push']({
                        'Si': gl,
                        'k': gd,
                        'RC': gO
                    });
                }
            }
            ,
            gn['WS'] = function() {
                return 0x1 + this['YS'];
            }
            ,
            gn['SC'] = function() {
                return this['kC'];
            }
            ,
            gY;
        }(ed)
          , gx = (function() {
            function gD(gn) {
                var gN = this;
                this['MC'] = function(gX) {
                    var gB = new eW(gX);
                    gN['DC'](gB);
                }
                ,
                this['CC'] = function(gX) {
                    var gB = new g5(gX);
                    gN['DC'](gB);
                }
                ,
                this['JC'] = function(gX) {
                    var gB = new gJ(gX);
                    gN['DC'](gB);
                }
                ,
                this['jC'] = function(gX, gB) {
                    var gr = new gS(gX,gB);
                    gN['DC'](gr);
                }
                ,
                this['xw'] = function() {
                    var gX = new gy();
                    gN['DC'](gX);
                }
                ,
                this['PC'] = function() {
                    e0['Z']['UC']('Connected\x20to\x20' + gN['NC']() + ':' + gN['XC']());
                    var gX = new eu(gN['jM'],gN['PM']);
                    gN['DC'](gX);
                }
                ,
                this['VC'] = function() {
                    if (gN['TC']()) {
                        gN['IC'] = Date['now']();
                        var gX = new gz();
                        gN['DC'](gX);
                    }
                }
                ,
                this['FC'] = function() {
                    var gX = Date['now']() - gN['IC'];
                    gN['SA']['gh'](gX),
                    setTimeout(gN['VC'], z8['Z']['ro']);
                }
                ,
                this['BC'] = function(gX) {
                    var gB = gX['data'];
                    switch (new DataView(gB)['getUint8'](0x0)) {
                    case eB:
                        var gr = new eC();
                        gr['ES'](gB),
                        zA['Z']['emit'](zG['x']['UA'], gr['ZS'](), gr['KS'](), gr['tM'](), gr['iM'](), gr['nx']()),
                        gN['SA']['wh'](gr['WS']());
                        break;
                    case er:
                        var gl = new eO();
                        gl['ES'](gB),
                        zA['Z']['emit'](zG['x']['NA'], gl['ZS'](), gl['KS'](), gl['tM']()),
                        gN['SA']['wh'](gl['WS']());
                        break;
                    case e2:
                        var gd = new ec();
                        gd['ES'](gB),
                        zA['Z']['emit'](zG['x']['Xw'], gd['JM'](), gd['bM'](), gd['kM'](), gd['RM'](), gd['SM'](), gd['Ww'](), gd['MM'](), gd['buildModeChanged'](), gd['inventoryStatusChanged'](), gd['jm'](), gd['mp'](), gd['Bp'](), gd['bd'](), gd['getMaxHealth'](), gd['getHealth'](), gd['DM'](), gd['getShield'](), gd['CM'](), gd['getInventoryStatus']()),
                        gN['SA']['wh'](gd['WS']());
                        break;
                    case e3:
                        var gC = new eE(gN['iD']);
                        gN['iD'] = gC,
                        gC['ES'](gB),
                        zA['Z']['emit'](zG['x']['$k'], gC),
                        gN['SA']['wh'](gC['WS']());
                        break;
                    case e5:
                        var gO = new eT();
                        gO['ES'](gB),
                        zA['Z']['emit'](zG['x']['PA'], gO['qM'](), gO['EM'](), gO['LM'](), gO['YM'](), gO['HM'](), gO['kx'](), gO['Rx'](), gO['QM'](), gO['_M'](), gO['WM']()),
                        gN['SA']['wh'](gO['WS']()),
                        gN['VC']();
                        break;
                    case e6:
                        var gp = new em();
                        gp['ES'](gB),
                        zA['Z']['emit'](zG['x']['VA'], gp['ZS'](), gp['KS'](), gp['tM'](), gp['oD']()),
                        gN['SA']['wh'](gp['WS']());
                        break;
                    case e7:
                        var gW = new eM();
                        gW['ES'](gB),
                        zA['Z']['emit'](zG['x']['Vw'], gW['zD'](), gW['gD'](), gW['$D'](), gW['bD']()),
                        gN['SA']['wh'](gW['WS']());
                        break;
                    case e8:
                        var gq = new ea();
                        gq['ES'](gB),
                        zA['Z']['emit'](zG['x']['Tw'], gq['qM'](), gq['AD'](), gq['hl']()),
                        gN['SA']['wh'](gq['WS']());
                        break;
                    case e9:
                        var gc = new g2();
                        gc['ES'](gB),
                        zA['Z']['emit'](zG['x']['nS'], gc['CD']()),
                        gN['SA']['wh'](gc['WS']());
                        break;
                    case eA:
                        var gu = new g6();
                        gu['ES'](gB),
                        zA['Z']['emit'](zG['x']['bk'], gu['vD'](), gu['jD']()),
                        gN['SA']['wh'](gu['WS']());
                        break;
                    case eG:
                        var gT = new g7();
                        gT['ES'](gB),
                        zA['Z']['emit'](zG['x']['Rk'], gT['vD']()),
                        gN['SA']['wh'](gT['WS']());
                        break;
                    case ee:
                        var gw = new g8();
                        gw['ES'](gB),
                        zA['Z']['emit'](zG['x']['cS'], gw['ID'](), gw['FD'](), gw['BD'](), gw['OD'](), gw['qD'](), gw['LD']()),
                        gN['SA']['wh'](gw['WS']());
                        break;
                    case eg:
                        var gE = new eZ();
                        gE['ES'](gB),
                        zA['Z']['emit'](zG['x']['Sk'], gE['vD'](), gE['lD']()),
                        gN['SA']['wh'](gE['WS']());
                        break;
                    case eF:
                        var gm = new gR();
                        gm['ES'](gB),
                        zA['Z']['emit'](zG['x']['FS'], gm['vD'](), gm['fC'](), gm['lD']()),
                        gN['SA']['wh'](gm['WS']());
                        break;
                    case eP:
                        var ga = new g9();
                        ga['ES'](gB),
                        zA['Z']['emit'](zG['x']['XA'], ga['ZS'](), ga['KS'](), ga['tM'](), ga['ED']()),
                        gN['SA']['wh'](ga['WS']());
                        break;
                    case ej:
                        var gZ = new eH();
                        gZ['ES'](gB),
                        zA['Z']['emit'](zG['x']['kk'], gZ['vD'](), gZ['GD']()),
                        gN['SA']['wh'](gZ['WS']());
                        break;
                    case eI:
                        var gK = new gg();
                        gK['ES'](gB),
                        gN['SA']['wh'](gK['WS']()),
                        gN['FC']();
                        break;
                    case eJ:
                        var gH = new ev();
                        gH['ES'](gB),
                        zA['Z']['emit'](zG['x']['qw'], gH['SD'](), gH['MD']()),
                        gN['SA']['wh'](gH['WS']());
                        break;
                    case ey:
                        var gM = new go();
                        gM['ES'](gB),
                        zA['Z']['emit'](zG['x']['ug'], gM['vD'](), gM['xC'](), gM['rC'](), gM['oC'](), gM['aC'](), gM['MD']()),
                        gN['SA']['wh'](gM['WS']());
                        break;
                    case eR:
                        var gv = new gA();
                        gv['ES'](gB),
                        zA['Z']['emit'](zG['x']['wR'], gv['QD']()),
                        gN['SA']['wh'](gv['WS']());
                        break;
                    case eS:
                        var P0 = new gP();
                        P0['ES'](gB),
                        zA['Z']['emit'](zG['x']['rS'], P0['KD'](), P0['CD']()),
                        gN['SA']['wh'](P0['WS']());
                        break;
                    case eQ:
                        var P1 = new gj();
                        P1['ES'](gB),
                        zA['Z']['emit'](zG['x']['sR'], P1['hR'](), P1['nR'](), P1['rR'](), P1['xR'](), P1['tC'](), P1['iC']()),
                        gN['SA']['wh'](P1['WS']());
                        break;
                    case eL:
                        var P2 = new eK();
                        P2['ES'](gB),
                        zA['Z']['emit'](zG['x']['aS'], P2['lD']()),
                        gN['SA']['wh'](P2['WS']());
                        break;
                    case eb:
                        var P3 = new ge();
                        P3['ES'](gB),
                        zA['Z']['emit'](zG['x']['fS'], P3['WD']()),
                        gN['SA']['wh'](P3['WS']());
                        break;
                    case eU:
                        var P4 = new gG();
                        P4['ES'](gB),
                        zA['Z']['emit'](zG['x']['RS'], P4['CD']()),
                        gN['SA']['wh'](P4['WS']());
                        break;
                    case ef:
                        var P5 = new gI();
                        P5['ES'](gB),
                        zA['Z']['emit'](zG['x']['bS'], P5['CD']()),
                        gN['SA']['wh'](P5['WS']());
                        break;
                    case ek:
                        var P6 = new gQ();
                        P6['ES'](gB),
                        zA['Z']['emit'](zG['x']['zS'], P6['CD']()),
                        gN['SA']['wh'](P6['WS']());
                        break;
                    case eD:
                        var P7 = new gL();
                        P7['ES'](gB),
                        zA['Z']['emit'](zG['x']['fg'], P7['dC'](), P7['wC'](), P7['pC']()),
                        gN['SA']['wh'](P7['WS']());
                        break;
                    case eY:
                        var P8 = new gU();
                        P8['ES'](gB),
                        zA['Z']['emit'](zG['x']['cg'], P8['AD'](), P8['dC'](), P8['wC'](), P8['pC']()),
                        gN['SA']['wh'](P8['WS']());
                        break;
                    case en:
                        var P9 = new gb();
                        P9['ES'](gB),
                        zA['Z']['emit'](zG['x']['gS'], P9['$C'](), P9['bC']()),
                        gN['SA']['wh'](P9['WS']());
                        break;
                    case eX:
                        var Pz = new gf();
                        Pz['ES'](gB),
                        zA['Z']['emit'](zG['x']['AS'], Pz['SC']()),
                        gN['SA']['wh'](Pz['WS']());
                    }
                }
                ,
                this['OC'] = function(gX) {
                    gN['il'](),
                    zA['Z']['emit'](zG['x']['RS'], 'Connection\x20Failed!\x20Please\x20try\x20again!'),
                    e0['Z']['UC']('An\x20unknown\x20error\x20has\x20occurred\x20during\x20the\x20connection');
                }
                ,
                this['qC'] = function(gX) {
                    gN['il'](),
                    e0['Z']['UC']('Disconnected\x20from\x20' + gN['NC']() + ':' + gN['XC']());
                }
                ,
                this['LC'] = function() {
                    gN['il']();
                }
                ,
                this['SA'] = gn,
                this['jM'] = Ax['Cp']['we'],
                this['PM'] = Ax['Zx']['Ve'],
                this['IC'] = 0x0;
            }
            var gY = gD['prototype'];
            return gY['Zv'] = function(gn, gN, gX, gB, gr) {
                this['jM'] = gn,
                this['PM'] = gN,
                this['YC'] = gX,
                this['EC'] = gB,
                this['HC'] = gr,
                this['QC'] = new WebSocket((this['HC'] ? 'wss' : 'ws') + '://' + this['YC'] + ':' + this['EC']),
                this['QC']['binaryType'] = 'arraybuffer',
                this['_C'](),
                this['WC']();
            }
            ,
            gY['WC'] = function() {
                zA['Z']['on'](zG['x']['Rp'], this['MC']),
                zA['Z']['on'](zG['x']['TS'], this['CC']),
                zA['Z']['on'](zG['x']['pp'], this['JC']),
                zA['Z']['on'](zG['x']['ZC'], this['jC']),
                zA['Z']['on'](zG['x']['Hw'], this['xw']),
                zA['Z']['on'](zG['x']['KC'], this['LC']);
            }
            ,
            gY['iJ'] = function() {
                zA['Z']['off'](zG['x']['Rp'], this['MC']),
                zA['Z']['off'](zG['x']['TS'], this['CC']),
                zA['Z']['off'](zG['x']['pp'], this['JC']),
                zA['Z']['off'](zG['x']['ZC'], this['jC']),
                zA['Z']['off'](zG['x']['Hw'], this['xw']),
                zA['Z']['off'](zG['x']['KC'], this['LC']);
            }
            ,
            gY['_C'] = function() {
                void 0x0 !== this['QC'] && (this['QC']['addEventListener']('open', this['PC']),
                this['QC']['addEventListener']('message', this['BC']),
                this['QC']['addEventListener']('error', this['OC']),
                this['QC']['addEventListener']('close', this['qC']));
            }
            ,
            gY['sJ'] = function() {
                void 0x0 !== this['QC'] && (this['QC']['removeEventListener']('open', this['PC']),
                this['QC']['removeEventListener']('message', this['BC']),
                this['QC']['removeEventListener']('error', this['OC']),
                this['QC']['removeEventListener']('close', this['qC']));
            }
            ,
            gY['DC'] = function(gn) {
                this['TC']() && (this['QC']['send'](gn['nM']()),
                this['SA']['dh'](gn['WS']()));
            }
            ,
            gY['hJ'] = function(gn) {
                this['TC']() && this['QC']['send'](gn);
            }
            ,
            gY['il'] = function() {
                this['TC']() && this['QC']['close'](),
                this['iJ'](),
                this['sJ'](),
                this['QC'] = void 0x0,
                this['YC'] = void 0x0,
                this['EC'] = void 0x0,
                (0x0,
                zP['Zp'])() !== AQ['Q']['Pe'] && ((0x0,
                zP['bl'])(AQ['Q']['Pe']),
                zA['Z']['emit'](zG['x']['Lw']));
            }
            ,
            gY['NC'] = function() {
                return void 0x0 === this['YC'] ? 'unavailable' : this['YC'];
            }
            ,
            gY['XC'] = function() {
                return void 0x0 === this['EC'] ? -0x1 : this['EC'];
            }
            ,
            gY['TC'] = function() {
                return void 0x0 !== this['QC'] && 0x1 == this['QC']['readyState'];
            }
            ,
            gD;
        }())
          , gF = z2(0x4022)
          , gV = (function() {
            var gD = (0x0,
            z4['Z'])(z6()['mark'](function gY() {
                var gn, gN;
                return z6()['wrap'](function(gX) {
                    for (; ; )
                        switch (gX['prev'] = gX['next']) {
                        case 0x0:
                            return z7['CtF']['enabled'] = !0x0,
                            (function() {
                                var gB = z7['Tme']['prototype']['updateMatrixWorld'];
                                z7['Tme']['prototype']['updateMatrixWorld'] = function() {
                                    this['visible'] && gB['apply'](this);
                                }
                                ;
                            }()),
                            gX['next'] = 0x4,
                            Gv();
                        case 0x4:
                            gn = gX['sent'],
                            gN = new gx(gn['HR']()),
                            zA['Z']['on'](zG['x']['nJ'], function(gB, gr, gl, gd, gC) {
                                gF['t']['disconnect'](),
                                gN['Zv'](gB, gr, gl, gd, gC),
                                window['onbeforeunload'] = null
                                ;
                            }),
                            zA['Z']['on'](zG['x']['eJ'], function(gB, gr, gl) {
                                gN['il'](),
                                gn['vs']();
                            }),
                            zo['h']['dispatch']((0x0,
                            zp['Mv'])(!0x0)),
                            zj['GameAnalytics']['initialize']('ce59fd34c83d32fb060ce384b958dda7', 'a8c29fcf417eba74851b4660a361731aba521da8');
                        case 0xa:
                        case 'end':
                            return gX['stop']();
                        }
                }, gY);
            }));
            return function() {
                return gD['apply'](this, arguments);
            }
            ;
        }())
          , gk = gV;
    }
}]);
