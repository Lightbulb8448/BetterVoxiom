//b0600692c3a2bc8e6e2e.js
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
    0x1b50: function(u0, u1, u2) {
        u2['r'](u1),
        u2['d'](u1, {
            'default': function() {
                return dN;
            }
        });
        var u3, u4 = u2(0x3df5), u5 = u2(0x156cd), u6 = u2['n'](u5), u7 = u2(0x8a4), u8 = u2(0x514d), u9 = u2(0x1730e), uu = u2(0x12ccc), uc = (function() {
            function de(dS, dp) {
                var dj = this;
                this['xt'] = dS,
                this['vt'] = dp,
                this['zt'] = document['getElementById'](this['vt']),
                this['Pt'] = 0x1,
                this['Qt'] = u8['Z']['lr'],
                this['ss'] = u8['Z']['_r'],
                this['hs'] = new u7['cPb'](this['xt']['cs'],window['innerWidth'] / window['innerHeight'],0.01,0x3e8),
                this['xs'] = new u7['cPb'](this['xt']['us'],window['innerWidth'] / window['innerHeight'],0.01,0x3e8),
                this['os'] = new u7['cPb'](0x3c,window['innerWidth'] / window['innerHeight'],0.01,0x3e8),
                this['fs'] = new u7['iKG'](-window['innerWidth'] / 0x2,window['innerWidth'] / 0x2,window['innerHeight'] / 0x2,-window['innerHeight'] / 0x2,0.01,0x3e8),
                this['vs'] = u8['Z']['oo'],
                this['ls'](),
                this['zs'](),
                window['addEventListener']('resize', function(dV) {
                    dj['zs']();
                });
            }
            var dF = de['prototype'];
            return dF['ls'] = function() {
                this['ds'] && this['ds']['dispose'](),
                this['ps'] && this['ps']['dispose'](),
                this['ys'] && this['ys']['dispose'](),
                this['ws'] && this['ws']['dispose'](),
                this['ds'] = new u7['xsS'](),
                this['ds']['type'] = (0x0,
                uu['D_'])(),
                this['ps'] = new u7['xsS'](),
                this['ps']['type'] = (0x0,
                uu['D_'])(),
                this['ys'] = new u7['xsS'](),
                this['ys']['type'] = (0x0,
                uu['D_'])(),
                this['ws'] = new u7['xsS'](),
                this['ws']['type'] = (0x0,
                uu['D_'])(),
                this['ys']['add'](this['fs']),
                this['$s'] && this['$s']['dispose'](),
                this['$s'] = new u7['CP7']({
                    'canvas': this['zt'],
                    'antialias': !0x1,
                    'powerPreference': 'high-performance'
                }),
                this['$s']['setClearColor'](this['vs']),
                this['$s']['debug']['checkShaderErrors'] = !0x1,
                this['$s']['setPixelRatio'](window['devicePixelRatio'] * this['xt']['bs']),
                this['$s']['setSize'](window['innerWidth'], window['innerHeight']),
                this['$s']['autoClear'] = !0x1,
                this['$s']['gammaFactor'] = 2.2,
                this['$s']['outputEncoding'] = u7['knz'],
                this['$s']['info']['autoReset'] = !0x1,
                this['$s']['initTexture'](u9['Z']['qs']()),
                this['$s']['initTexture'](u9['Z']['ks']());
            }
            ,
            dF['gs'] = function(dS, dp) {
                this['$s']['info']['reset'](),
                this['$s']['clear'](),
                this['$s']['render'](this['ds'], this['hs']),
                this['$s']['clearDepth'](),
                this['$s']['render'](this['ps'], this['xs']),
                this['$s']['clearDepth'](),
                this['$s']['render'](this['ws'], this['os']),
                this['$s']['render'](this['ys'], this['fs']);
            }
            ,
            dF['zs'] = function() {
                var dS = window['innerWidth']
                  , dp = window['innerHeight'];
                this['Pt'] = Math['max'](dS / this['Qt'], dp / this['ss']),
                this['$s']['setSize'](dS, dp),
                this['hs']['aspect'] = dS / dp,
                this['hs']['updateProjectionMatrix'](),
                this['xs']['aspect'] = dS / dp,
                this['xs']['updateProjectionMatrix'](),
                this['os']['aspect'] = dS / dp,
                this['os']['updateProjectionMatrix'](),
                this['fs']['top'] = dp / 0x2,
                this['fs']['bottom'] = -dp / 0x2,
                this['fs']['left'] = -dS / 0x2,
                this['fs']['right'] = dS / 0x2,
                this['fs']['updateProjectionMatrix']();
            }
            ,
            dF['Cs'] = function(dS) {
                this['vs'] !== dS && (this['vs'] = dS,
                this['$s']['setClearColor'](this['vs']));
            }
            ,
            dF['Xs'] = function() {
                return this['Pt'];
            }
            ,
            dF['Ms'] = function() {
                return this['ds'];
            }
            ,
            dF['Ss'] = function() {
                return this['ps'];
            }
            ,
            dF['Ds'] = function() {
                return this['ys'];
            }
            ,
            dF['As'] = function() {
                return this['ws'];
            }
            ,
            dF['Rs'] = function() {
                return this['hs'];
            }
            ,
            dF['Ts'] = function() {
                return this['xs'];
            }
            ,
            dF['js'] = function() {
                return this['$s'];
            }
            ,
            dF['Is'] = function() {
                return this['zt'];
            }
            ,
            de;
        }()), uz = u2(0x1161f), uq = u2(0x1330d), ud = u2(0xf70a), uJ = u2(0x3978), uk = u2(0x5f18), ur = u2(0x15316), uT = u2(0x2fda), um = u2(0xe33e), ux = (function() {
            function de() {
                var dS = this;
                this['Us'] = 0x0,
                this['Ws'] = 0x0,
                this['Ps'] = 0x0,
                this['Ls'] = 0x0,
                this['Vs'] = 0x0,
                this['Os'] = (0x0,
                uJ['XX'])(0x0, 0x0, 0x0),
                this['Hs'] = (0x0,
                uJ['XX'])(0x0, 0x0, 0x0),
                this['Es'] = (0x0,
                uJ['XX'])(0x0, 0x0, 0x0),
                this['Ys'] = (0x0,
                uJ['XX'])(0x0, 0x0, 0x0),
                this['Fs'] = 0x0,
                this['Bs'] = 0x0,
                this['Ns'] = 0x0,
                this['_s'] = 0x0,
                this['Js'] = 0x0,
                this['Ks'] = 0x0,
                this['Gs'] = 0x28,
                this['Zs'] = 0xf423f,
                this['Qs'] = -0xf423f,
                this['th'] = 0x0,
                this['ih'] = 0x0,
                this['sh'] = 0x0,
                this['hh'] = 0xf423f,
                this['nh'] = Date['now'](),
                this['rh'] = 0x0,
                this['eh'] = document['body']['appendChild'](document['createElement']('div')),
                this['eh']['style']['cssText'] = 'width:\x20550px;\x20position:\x20absolute;\x20top:\x200;\x20left:\x200;\x20padding:\x2010px;\x20pointer-events:\x20none;\x20background-color:\x20rgba(0,\x200,\x200,\x200.8);',
                this['xh'] = !0x1,
                this['uh'](),
                uz['Z']['on'](uq['x']['ah'], function(dp) {
                    (0x0,
                    uk['bt'])() || dp === ud['Z'][0x0] && dS['oh']();
                });
            }
            var dF = de['prototype'];
            return dF['fh'] = function() {
                return this['xh'];
            }
            ,
            dF['oh'] = function() {
                this['xh'] = !this['xh'],
                this['xh'] ? this['lh']() : this['uh']();
            }
            ,
            dF['lh'] = function() {
                this['eh']['style']['display'] = 'block',
                this['xh'] = !0x0;
            }
            ,
            dF['uh'] = function() {
                this['eh']['style']['display'] = 'none',
                this['xh'] = !0x1;
            }
            ,
            dF['mh'] = function() {
                ++this['rh'];
                var dS = Date['now']();
                if (dS - this['nh'] >= 0x3e8) {
                    if (this['Vs'] = 0x3e8 * this['rh'] / (dS - this['nh']),
                    this['Ps'] = 0x3e8 * this['Us'] / (dS - this['nh']),
                    this['Ls'] = 0x3e8 * this['Ws'] / (dS - this['nh']),
                    this['rh'] = 0x0,
                    this['Us'] = 0x0,
                    this['Ws'] = 0x0,
                    this['nh'] = dS,
                    document['hasFocus']() && uT['h']['getState']()['game']['c$'] >= 0x1) {
                        if (++this['ih'],
                        this['sh'] += this['Vs'],
                        this['hh'] = Math['min'](this['hh'], this['Vs']),
                        this['ih'] >= 0x14) {
                            var dp = this['sh'] / this['ih'];
                            ur['GameAnalytics']['addDesignEvent']('GA:AverageFPS:All', dp),
                            ur['GameAnalytics']['addDesignEvent']('GA:AverageFPS:Max60', Math['min'](dp, 0x3c)),
                            dp <= 59.5 && ur['GameAnalytics']['addDesignEvent']('GA:AverageFPS:Exclude60', dp),
                            this['hh'] <= 0x1e && ur['GameAnalytics']['addDesignEvent']('GA:CriticalFPS', this['hh']),
                            this['ih'] = 0x0,
                            this['sh'] = 0x0,
                            this['hh'] = 0xf423f;
                        }
                    } else
                        this['ih'] = 0x0,
                        this['sh'] = 0x0,
                        this['hh'] = 0xf423f;
                }
                this['xh'] && (this['eh']['innerText'] = this['dh']());
            }
            ,
            dF['ph'] = function(dS) {
                this['Us'] += dS;
            }
            ,
            dF['yh'] = function(dS) {
                this['Ws'] += dS;
            }
            ,
            dF['dh'] = function() {
                return 'FPS:\x20' + this['Vs'] + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Player\x20Position:\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20x:\x20' + this['Os']['x'] + '\x20y:\x20' + this['Os']['y'] + '\x20z:\x20' + this['Os']['z'] + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Player\x20Block\x20Position:\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20x:\x20' + this['Hs']['x'] + '\x20y:\x20' + this['Hs']['y'] + '\x20z:\x20' + this['Hs']['z'] + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Player\x20Chunk\x20Position:\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20x:\x20' + this['Es']['x'] + '\x20y:\x20' + this['Es']['y'] + '\x20z:\x20' + this['Es']['z'] + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Player\x20Velocity:\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20x:\x20' + this['Ys']['x'] + '\x20y:\x20' + this['Ys']['y'] + '\x20z:\x20' + this['Ys']['z'] + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Player\x20Yaw:\x20' + this['Fs'] + '\x20Player\x20Pitch:\x20' + this['Bs'] + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Total\x20Chunks\x20Loaded:\x20' + this['Ns'] + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Latency:\x20' + this['_s'] + 'ms\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Download:\x20' + this['Ls']['toFixed'](0x2) + 'bps\x20Upload:\x20' + this['Ps']['toFixed'](0x2) + 'bps';
            }
            ,
            dF['wh'] = function() {
                return this['_s'];
            }
            ,
            dF['$h'] = function() {
                return this['Gs'];
            }
            ,
            dF['bh'] = function(dS) {
                if (this['_s'] = dS,
                this['Zs'] = Math['min'](this['Zs'], dS),
                this['Qs'] = Math['max'](this['Qs'], dS),
                ++this['th'],
                this['th'] >= 0x4) {
                    var dp = this['Qs'] - this['Zs'];
                    this['Gs'] = (0x0,
                    um['t7'])(this['Gs'], dp, 0.5),
                    this['Zs'] = 0xf423f,
                    this['Qs'] = -0xf423f,
                    this['th'] = 0x0;
                }
                if (document['hasFocus']() && uT['h']['getState']()['game']['c$'] >= 0x1 && (++this['Js'],
                this['Ks'] += dS,
                this['Js'] >= 0x50)) {
                    var dj = this['Ks'] / this['Js'];
                    ur['GameAnalytics']['addDesignEvent']('GA:AveragePing:All', dj),
                    this['Js'] = 0x0,
                    this['Ks'] = 0x0;
                }
            }
            ,
            de;
        }()), uX = u2(0x4ffd), uI = u2['n'](uX);
        function uC() {
            return uI()('!(function(){\x27use\x20strict\x27;var\x20u0,u1,u2=function(cm,cx,cX){return{\x27x\x27:cm,\x27y\x27:cx,\x27z\x27:cX};},u3=(\x27undefined\x27==typeof\x20navigator||void\x200x0===navigator[\x27hardwareConcurrency\x27]||navigator[\x27hardwareConcurrency\x27],0x20),u4=0.5,u5=(u2(0.35,1.3,0.35),u2(0.3,1.3,0.3),0x0),u6=0x1,u7=0x2,u8=0x3,u9=0x4,uu=0x5,uc=0x6,uz=0x7,uq=0x8,ud=0x9,uJ=0xa,uk=0xb,ur=0xc,uT=0xd,um=0xe,ux=0xf,uX=0x10,uI=0x11,uC=0x12,uG=0x13,us=0x14,un=0x15,uW=0x16,uR=0x17,ub=0x18,uA=0x19,ut=0x1a,uL=0x1b,uH=0x1c,uN=0x1d,ue=0x1e,uF=0x1f,uS=0x20,uh=0x21,up=0x22,uj=0x23,uV=0x24,uy=0x25,ui=0x26,uM=0x27,uK=0x28,ua=0x29,uf=0x2a,ul=0x2b,uZ=0x2c,uw=0x2d,uE=0x2e,uv=0x2f,uo=0x30,ug=0x31,uQ=0x32,uO=0x33,uY=0x0,uP=0x1,uB=0x2,uU=0x3,uD=0x4,c0=0x5,c1=0x9,c2={\x27$\x27:!0x1,\x27t\x27:!0x1,\x27o\x27:{\x27i\x27:{\x27x\x27:0x0,\x27y\x27:0xf},\x27u\x27:{\x27x\x27:0x0,\x27y\x27:0xf},\x27m\x27:{\x27x\x27:0x0,\x27y\x27:0xf},\x27p\x27:{\x27x\x27:0x0,\x27y\x27:0xf},\x27l\x27:{\x27x\x27:0x0,\x27y\x27:0xf},\x27h\x27:{\x27x\x27:0x0,\x27y\x27:0xf}},\x27k\x27:\x27Water\x27,\x27S\x27:\x27Blue\x5cx20fluid\x5cx20that\x5cx20flows\x27,\x27v\x27:0x1,\x27g\x27:0xff},c3=((u0={})[u5]={\x27$\x27:!0x1,\x27t\x27:!0x1,\x27o\x27:{\x27i\x27:{\x27x\x27:0x0,\x27y\x27:0x0},\x27u\x27:{\x27x\x27:0x0,\x27y\x27:0x0},\x27m\x27:{\x27x\x27:0x0,\x27y\x27:0x0},\x27p\x27:{\x27x\x27:0x0,\x27y\x27:0x0},\x27l\x27:{\x27x\x27:0x0,\x27y\x27:0x0},\x27h\x27:{\x27x\x27:0x0,\x27y\x27:0x0}},\x27k\x27:\x27Air\x27,\x27S\x27:\x27How\x5cx20did\x5cx20you\x5cx20get\x5cx20this?\x27,\x27v\x27:0x1,\x27g\x27:0xff},u0[u6]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x2,\x27y\x27:0x0},\x27u\x27:{\x27x\x27:0x0,\x27y\x27:0x0},\x27m\x27:{\x27x\x27:0x1,\x27y\x27:0x0},\x27p\x27:{\x27x\x27:0x1,\x27y\x27:0x0},\x27l\x27:{\x27x\x27:0x1,\x27y\x27:0x0},\x27h\x27:{\x27x\x27:0x1,\x27y\x27:0x0}},\x27k\x27:\x27Grass\x27,\x27S\x27:\x27A\x5cx20dirt\x5cx20block\x5cx20with\x5cx20grass\x5cx20on\x5cx20top\x27,\x27v\x27:0x1,\x27g\x27:0xff,\x27q\x27:uY},u0[u7]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x0,\x27y\x27:0x0},\x27u\x27:{\x27x\x27:0x0,\x27y\x27:0x0},\x27m\x27:{\x27x\x27:0x0,\x27y\x27:0x0},\x27p\x27:{\x27x\x27:0x0,\x27y\x27:0x0},\x27l\x27:{\x27x\x27:0x0,\x27y\x27:0x0},\x27h\x27:{\x27x\x27:0x0,\x27y\x27:0x0}},\x27k\x27:\x27Dirt\x27,\x27S\x27:\x27Muddy\x5cx20and\x5cx20squishy\x27,\x27v\x27:0x1,\x27g\x27:0xff,\x27q\x27:uD},u0[u8]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x3,\x27y\x27:0x0},\x27u\x27:{\x27x\x27:0x3,\x27y\x27:0x0},\x27m\x27:{\x27x\x27:0x3,\x27y\x27:0x0},\x27p\x27:{\x27x\x27:0x3,\x27y\x27:0x0},\x27l\x27:{\x27x\x27:0x3,\x27y\x27:0x0},\x27h\x27:{\x27x\x27:0x3,\x27y\x27:0x0}},\x27k\x27:\x27Sand\x27,\x27S\x27:\x27Grainy,\x5cx20found\x5cx20near\x5cx20water\x27,\x27v\x27:0x1,\x27g\x27:0xff,\x27q\x27:uP},u0[u9]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x1,\x27y\x27:0x1},\x27u\x27:{\x27x\x27:0x1,\x27y\x27:0x1},\x27m\x27:{\x27x\x27:0x1,\x27y\x27:0x1},\x27p\x27:{\x27x\x27:0x1,\x27y\x27:0x1},\x27l\x27:{\x27x\x27:0x1,\x27y\x27:0x1},\x27h\x27:{\x27x\x27:0x1,\x27y\x27:0x1}},\x27k\x27:\x27Rock\x27,\x27S\x27:\x27A\x5cx20natural\x5cx20resource\x5cx20found\x5cx20underground\x27,\x27v\x27:0x2,\x27g\x27:0xff,\x27q\x27:uB},u0[uu]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x5,\x27y\x27:0x0},\x27u\x27:{\x27x\x27:0x5,\x27y\x27:0x0},\x27m\x27:{\x27x\x27:0x4,\x27y\x27:0x0},\x27p\x27:{\x27x\x27:0x4,\x27y\x27:0x0},\x27l\x27:{\x27x\x27:0x4,\x27y\x27:0x0},\x27h\x27:{\x27x\x27:0x4,\x27y\x27:0x0}},\x27k\x27:\x27Log\x27,\x27S\x27:\x27Unprocessed\x5cx20raw\x5cx20wood\x27,\x27v\x27:1.5,\x27g\x27:0xff,\x27q\x27:c1},u0[uc]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x0,\x27y\x27:0x1},\x27u\x27:{\x27x\x27:0x0,\x27y\x27:0x1},\x27m\x27:{\x27x\x27:0x0,\x27y\x27:0x1},\x27p\x27:{\x27x\x27:0x0,\x27y\x27:0x1},\x27l\x27:{\x27x\x27:0x0,\x27y\x27:0x1},\x27h\x27:{\x27x\x27:0x0,\x27y\x27:0x1}},\x27k\x27:\x27Leaves\x27,\x27S\x27:\x27Grow\x5cx20on\x5cx20logs\x27,\x27v\x27:0.5,\x27g\x27:0xff,\x27q\x27:c0},u0[uz]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x3,\x27y\x27:0x6},\x27u\x27:{\x27x\x27:0x3,\x27y\x27:0x6},\x27m\x27:{\x27x\x27:0x3,\x27y\x27:0x6},\x27p\x27:{\x27x\x27:0x3,\x27y\x27:0x6},\x27l\x27:{\x27x\x27:0x3,\x27y\x27:0x6},\x27h\x27:{\x27x\x27:0x3,\x27y\x27:0x6}},\x27k\x27:\x27Leaves\x27,\x27S\x27:\x27Nurtures\x5cx20healthy\x5cx20red\x5cx20berries\x27,\x27v\x27:0.5,\x27g\x27:0xff,\x27q\x27:c0},u0[uq]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x4,\x27y\x27:0x6},\x27u\x27:{\x27x\x27:0x4,\x27y\x27:0x6},\x27m\x27:{\x27x\x27:0x4,\x27y\x27:0x6},\x27p\x27:{\x27x\x27:0x4,\x27y\x27:0x6},\x27l\x27:{\x27x\x27:0x4,\x27y\x27:0x6},\x27h\x27:{\x27x\x27:0x4,\x27y\x27:0x6}},\x27k\x27:\x27Leaves\x27,\x27S\x27:\x27Nurtures\x5cx20healthy\x5cx20orange\x5cx20berries\x27,\x27v\x27:0.5,\x27g\x27:0xff,\x27q\x27:c0},u0[ud]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x2,\x27y\x27:0x1},\x27u\x27:{\x27x\x27:0x2,\x27y\x27:0x1},\x27m\x27:{\x27x\x27:0x2,\x27y\x27:0x1},\x27p\x27:{\x27x\x27:0x2,\x27y\x27:0x1},\x27l\x27:{\x27x\x27:0x2,\x27y\x27:0x1},\x27h\x27:{\x27x\x27:0x2,\x27y\x27:0x1}},\x27k\x27:\x27Bedrock\x27,\x27S\x27:\x27Indestructable\x27,\x27v\x27:0xf423f,\x27g\x27:0xff,\x27q\x27:uB},u0[uJ]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x3,\x27y\x27:0x1},\x27u\x27:{\x27x\x27:0x3,\x27y\x27:0x1},\x27m\x27:{\x27x\x27:0x3,\x27y\x27:0x1},\x27p\x27:{\x27x\x27:0x3,\x27y\x27:0x1},\x27l\x27:{\x27x\x27:0x3,\x27y\x27:0x1},\x27h\x27:{\x27x\x27:0x3,\x27y\x27:0x1}},\x27k\x27:\x27Temple\x5cx20Brick\x27,\x27S\x27:\x27Myterious\x5cx20brick\x5cx20found\x5cx20on\x5cx20the\x5cx20temple\x5cx20walls\x27,\x27v\x27:0x4,\x27g\x27:0xff,\x27q\x27:uU},u0[uk]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x5,\x27y\x27:0x1},\x27u\x27:{\x27x\x27:0x5,\x27y\x27:0x1},\x27m\x27:{\x27x\x27:0x5,\x27y\x27:0x1},\x27p\x27:{\x27x\x27:0x5,\x27y\x27:0x1},\x27l\x27:{\x27x\x27:0x5,\x27y\x27:0x1},\x27h\x27:{\x27x\x27:0x5,\x27y\x27:0x1}},\x27k\x27:\x27Mossy\x5cx20Temple\x5cx20Brick\x27,\x27S\x27:\x27Temple\x5cx20brick\x5cx20with\x5cx20some\x5cx20moss\x5cx20grown\x5cx20on\x5cx20it\x27,\x27v\x27:0x4,\x27g\x27:0xff,\x27q\x27:uU},u0[ur]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x0,\x27y\x27:0x2},\x27u\x27:{\x27x\x27:0x0,\x27y\x27:0x2},\x27m\x27:{\x27x\x27:0x0,\x27y\x27:0x2},\x27p\x27:{\x27x\x27:0x0,\x27y\x27:0x2},\x27l\x27:{\x27x\x27:0x0,\x27y\x27:0x2},\x27h\x27:{\x27x\x27:0x0,\x27y\x27:0x2}},\x27k\x27:\x27Cracked\x5cx20Temple\x5cx20Brick\x27,\x27S\x27:\x27Temple\x5cx20brick\x5cx20with\x5cx20some\x5cx20cracks\x27,\x27v\x27:0x4,\x27g\x27:0xff,\x27q\x27:uU},u0[uT]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x1,\x27y\x27:0x2},\x27u\x27:{\x27x\x27:0x1,\x27y\x27:0x2},\x27m\x27:{\x27x\x27:0x1,\x27y\x27:0x2},\x27p\x27:{\x27x\x27:0x1,\x27y\x27:0x2},\x27l\x27:{\x27x\x27:0x1,\x27y\x27:0x2},\x27h\x27:{\x27x\x27:0x1,\x27y\x27:0x2}},\x27k\x27:\x27Mystical\x5cx20Temple\x5cx20Brick\x27,\x27S\x27:\x27Temple\x5cx20brick\x5cx20with\x5cx20a\x5cx20mysterious\x5cx20pattern.\x5cx20No\x5cx20one\x5cx20knows\x5cx20what\x5cx20it\x5cx20means\x27,\x27v\x27:0x4,\x27g\x27:0xff,\x27q\x27:uU},u0[um]=c2,u0[uZ]=c2,u0[uw]=c2,u0[uE]=c2,u0[uv]=c2,u0[uo]=c2,u0[ug]=c2,u0[uQ]=c2,u0[uO]=c2,u0[ux]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x2,\x27y\x27:0x2},\x27u\x27:{\x27x\x27:0x2,\x27y\x27:0x2},\x27m\x27:{\x27x\x27:0x2,\x27y\x27:0x2},\x27p\x27:{\x27x\x27:0x2,\x27y\x27:0x2},\x27l\x27:{\x27x\x27:0x2,\x27y\x27:0x2},\x27h\x27:{\x27x\x27:0x2,\x27y\x27:0x2}},\x27k\x27:\x27Wooden\x5cx20Crate\x27,\x27S\x27:\x27You\x5cx20might\x5cx20find\x5cx20some\x5cx20items\x5cx20inside\x27,\x27v\x27:0.5,\x27g\x27:0xff,\x27q\x27:c1},u0[uX]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x3,\x27y\x27:0x2},\x27u\x27:{\x27x\x27:0x3,\x27y\x27:0x2},\x27m\x27:{\x27x\x27:0x3,\x27y\x27:0x2},\x27p\x27:{\x27x\x27:0x3,\x27y\x27:0x2},\x27l\x27:{\x27x\x27:0x3,\x27y\x27:0x2},\x27h\x27:{\x27x\x27:0x3,\x27y\x27:0x2}},\x27k\x27:\x27Reinforced\x5cx20Iron\x27,\x27S\x27:\x27Very\x5cx20durable\x5cx20material.\x5cx20Perfect\x5cx20for\x5cx20defense\x27,\x27v\x27:0x6,\x27g\x27:0xff,\x27q\x27:uU},u0[uI]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x4,\x27y\x27:0x2},\x27u\x27:{\x27x\x27:0x4,\x27y\x27:0x2},\x27m\x27:{\x27x\x27:0x4,\x27y\x27:0x2},\x27p\x27:{\x27x\x27:0x4,\x27y\x27:0x2},\x27l\x27:{\x27x\x27:0x4,\x27y\x27:0x2},\x27h\x27:{\x27x\x27:0x4,\x27y\x27:0x2}},\x27k\x27:\x27Emerald\x5cx20Ore\x27,\x27S\x27:\x27Stone\x5cx20filled\x5cx20with\x5cx20some\x5cx20emerald\x5cx20ore\x27,\x27v\x27:2.1,\x27g\x27:0xff,\x27q\x27:uB},u0[uG]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x5,\x27y\x27:0x2},\x27u\x27:{\x27x\x27:0x5,\x27y\x27:0x2},\x27m\x27:{\x27x\x27:0x5,\x27y\x27:0x2},\x27p\x27:{\x27x\x27:0x5,\x27y\x27:0x2},\x27l\x27:{\x27x\x27:0x5,\x27y\x27:0x2},\x27h\x27:{\x27x\x27:0x5,\x27y\x27:0x2}},\x27k\x27:\x27Sapphire\x5cx20Ore\x27,\x27S\x27:\x27Stone\x5cx20filled\x5cx20with\x5cx20some\x5cx20sapphire\x5cx20ore\x27,\x27v\x27:2.1,\x27g\x27:0xff,\x27q\x27:uB},u0[uC]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x0,\x27y\x27:0x3},\x27u\x27:{\x27x\x27:0x0,\x27y\x27:0x3},\x27m\x27:{\x27x\x27:0x0,\x27y\x27:0x3},\x27p\x27:{\x27x\x27:0x0,\x27y\x27:0x3},\x27l\x27:{\x27x\x27:0x0,\x27y\x27:0x3},\x27h\x27:{\x27x\x27:0x0,\x27y\x27:0x3}},\x27k\x27:\x27Ruby\x5cx20Ore\x27,\x27S\x27:\x27Stone\x5cx20filled\x5cx20with\x5cx20some\x5cx20ruby\x5cx20ore\x27,\x27v\x27:2.1,\x27g\x27:0xff,\x27q\x27:uB},u0[us]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x1,\x27y\x27:0x3},\x27u\x27:{\x27x\x27:0x1,\x27y\x27:0x3},\x27m\x27:{\x27x\x27:0x1,\x27y\x27:0x3},\x27p\x27:{\x27x\x27:0x1,\x27y\x27:0x3},\x27l\x27:{\x27x\x27:0x1,\x27y\x27:0x3},\x27h\x27:{\x27x\x27:0x1,\x27y\x27:0x3}},\x27k\x27:\x27Iron\x5cx20Ore\x27,\x27S\x27:\x27Stone\x5cx20filled\x5cx20with\x5cx20some\x5cx20iron\x5cx20ore\x27,\x27v\x27:2.1,\x27g\x27:0xff,\x27q\x27:uB},u0[un]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x7,\x27y\x27:0x0},\x27u\x27:{\x27x\x27:0x7,\x27y\x27:0x0},\x27m\x27:{\x27x\x27:0x7,\x27y\x27:0x0},\x27p\x27:{\x27x\x27:0x7,\x27y\x27:0x0},\x27l\x27:{\x27x\x27:0x7,\x27y\x27:0x0},\x27h\x27:{\x27x\x27:0x7,\x27y\x27:0x0}},\x27k\x27:\x27Wood\x27,\x27S\x27:\x27Useful\x5cx20building\x5cx20material\x5cx20crafted\x5cx20from\x5cx20logs\x27,\x27v\x27:1.5,\x27g\x27:0xff,\x27q\x27:c1},u0[uW]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x6,\x27y\x27:0x0},\x27u\x27:{\x27x\x27:0x6,\x27y\x27:0x0},\x27m\x27:{\x27x\x27:0x6,\x27y\x27:0x0},\x27p\x27:{\x27x\x27:0x6,\x27y\x27:0x0},\x27l\x27:{\x27x\x27:0x6,\x27y\x27:0x0},\x27h\x27:{\x27x\x27:0x6,\x27y\x27:0x0}},\x27k\x27:\x27Stone\x5cx20Brick\x27,\x27S\x27:\x27Useful\x5cx20building\x5cx20material\x5cx20crafted\x5cx20from\x5cx20rocks\x27,\x27v\x27:0x4,\x27g\x27:0xff,\x27q\x27:uU},u0[uR]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x0,\x27y\x27:0x4},\x27u\x27:{\x27x\x27:0x0,\x27y\x27:0x4},\x27m\x27:{\x27x\x27:0x1,\x27y\x27:0x4},\x27p\x27:{\x27x\x27:0x1,\x27y\x27:0x4},\x27l\x27:{\x27x\x27:0x2,\x27y\x27:0x4},\x27h\x27:{\x27x\x27:0x1,\x27y\x27:0x4}},\x27k\x27:\x27Wooden\x5cx20Chest\x27,\x27S\x27:\x27Low\x5cx20tier\x5cx20chest\x5cx20that\x5cx20can\x5cx20store\x5cx20some\x5cx20items\x27,\x27v\x27:0.5,\x27g\x27:0xff,\x27q\x27:c1},u0[ub]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x0,\x27y\x27:0x5},\x27u\x27:{\x27x\x27:0x0,\x27y\x27:0x5},\x27m\x27:{\x27x\x27:0x1,\x27y\x27:0x5},\x27p\x27:{\x27x\x27:0x1,\x27y\x27:0x5},\x27l\x27:{\x27x\x27:0x2,\x27y\x27:0x5},\x27h\x27:{\x27x\x27:0x1,\x27y\x27:0x5}},\x27k\x27:\x27Iron\x5cx20Chest\x27,\x27S\x27:\x27Mid-tier\x5cx20chest\x5cx20that\x5cx20can\x5cx20store\x5cx20more\x5cx20items\x27,\x27v\x27:0.5,\x27g\x27:0xff,\x27q\x27:c1},u0[uA]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x0,\x27y\x27:0x6},\x27u\x27:{\x27x\x27:0x0,\x27y\x27:0x6},\x27m\x27:{\x27x\x27:0x1,\x27y\x27:0x6},\x27p\x27:{\x27x\x27:0x1,\x27y\x27:0x6},\x27l\x27:{\x27x\x27:0x2,\x27y\x27:0x6},\x27h\x27:{\x27x\x27:0x1,\x27y\x27:0x6}},\x27k\x27:\x27Golden\x5cx20Chest\x27,\x27S\x27:\x27High\x5cx20tier\x5cx20chest\x5cx20that\x5cx20can\x5cx20store\x5cx20many\x5cx20items\x27,\x27v\x27:0.5,\x27g\x27:0xff,\x27q\x27:c1},u0[ut]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x4,\x27y\x27:0x3},\x27u\x27:{\x27x\x27:0x4,\x27y\x27:0x3},\x27m\x27:{\x27x\x27:0x3,\x27y\x27:0x3},\x27p\x27:{\x27x\x27:0x3,\x27y\x27:0x3},\x27l\x27:{\x27x\x27:0x4,\x27y\x27:0x3},\x27h\x27:{\x27x\x27:0x4,\x27y\x27:0x3}},\x27k\x27:\x27Cactus\x27,\x27S\x27:\x27A\x5cx20plant\x5cx20that\x5cx20grows\x5cx20in\x5cx20the\x5cx20desert\x27,\x27v\x27:0x1,\x27g\x27:0xff,\x27q\x27:uY},u0[uL]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x3,\x27y\x27:0x3},\x27u\x27:{\x27x\x27:0x3,\x27y\x27:0x3},\x27m\x27:{\x27x\x27:0x2,\x27y\x27:0x3},\x27p\x27:{\x27x\x27:0x2,\x27y\x27:0x3},\x27l\x27:{\x27x\x27:0x2,\x27y\x27:0x3},\x27h\x27:{\x27x\x27:0x2,\x27y\x27:0x3}},\x27k\x27:\x27Cactus\x27,\x27S\x27:\x27A\x5cx20plant\x5cx20that\x5cx20grows\x5cx20in\x5cx20the\x5cx20desert\x27,\x27v\x27:0x1,\x27g\x27:0xff,\x27q\x27:uY},u0[uH]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x2,\x27y\x27:0x3},\x27u\x27:{\x27x\x27:0x2,\x27y\x27:0x3},\x27m\x27:{\x27x\x27:0x4,\x27y\x27:0x3},\x27p\x27:{\x27x\x27:0x4,\x27y\x27:0x3},\x27l\x27:{\x27x\x27:0x3,\x27y\x27:0x3},\x27h\x27:{\x27x\x27:0x3,\x27y\x27:0x3}},\x27k\x27:\x27Cactus\x27,\x27S\x27:\x27A\x5cx20plant\x5cx20that\x5cx20grows\x5cx20in\x5cx20the\x5cx20desert\x27,\x27v\x27:0x1,\x27g\x27:0xff,\x27q\x27:uY},u0[uN]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x6,\x27y\x27:0x1},\x27u\x27:{\x27x\x27:0x3,\x27y\x27:0x0},\x27m\x27:{\x27x\x27:0x3,\x27y\x27:0x0},\x27p\x27:{\x27x\x27:0x3,\x27y\x27:0x0},\x27l\x27:{\x27x\x27:0x3,\x27y\x27:0x0},\x27h\x27:{\x27x\x27:0x3,\x27y\x27:0x0}},\x27k\x27:\x27Sand\x5cx20with\x5cx20Treasure\x5cx20Marker\x27,\x27S\x27:\x27Sand\x5cx20marked\x5cx20with\x5cx20a\x5cx20red\x5cx20cross\x5cx20on\x5cx20top.\x5cx20Treasures\x5cx20might\x5cx20be\x5cx20hidden\x5cx20below\x5cx20it\x27,\x27v\x27:0x1,\x27g\x27:0xff,\x27q\x27:uP},u0[ue]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x7,\x27y\x27:0x1},\x27u\x27:{\x27x\x27:0x0,\x27y\x27:0x0},\x27m\x27:{\x27x\x27:0x1,\x27y\x27:0x0},\x27p\x27:{\x27x\x27:0x1,\x27y\x27:0x0},\x27l\x27:{\x27x\x27:0x1,\x27y\x27:0x0},\x27h\x27:{\x27x\x27:0x1,\x27y\x27:0x0}},\x27k\x27:\x27Grass\x5cx20with\x5cx20Treasure\x5cx20Marker\x27,\x27S\x27:\x27Grass\x5cx20marked\x5cx20with\x5cx20a\x5cx20red\x5cx20cross\x5cx20on\x5cx20top.\x5cx20Treasures\x5cx20might\x5cx20be\x5cx20hidden\x5cx20below\x5cx20it\x27,\x27v\x27:0x1,\x27g\x27:0xff,\x27q\x27:uY},u0[uF]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x6,\x27y\x27:0x2},\x27u\x27:{\x27x\x27:0x6,\x27y\x27:0x2},\x27m\x27:{\x27x\x27:0x6,\x27y\x27:0x2},\x27p\x27:{\x27x\x27:0x6,\x27y\x27:0x2},\x27l\x27:{\x27x\x27:0x6,\x27y\x27:0x2},\x27h\x27:{\x27x\x27:0x6,\x27y\x27:0x2}},\x27k\x27:\x27Sandstone\x5cx20Brick\x27,\x27S\x27:\x27Useful\x5cx20building\x5cx20material\x5cx20crafted\x5cx20from\x5cx20sand\x27,\x27v\x27:0x4,\x27g\x27:0xff,\x27q\x27:uU},u0[uS]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x7,\x27y\x27:0x2},\x27u\x27:{\x27x\x27:0x7,\x27y\x27:0x2},\x27m\x27:{\x27x\x27:0x6,\x27y\x27:0x3},\x27p\x27:{\x27x\x27:0x6,\x27y\x27:0x3},\x27l\x27:{\x27x\x27:0x6,\x27y\x27:0x3},\x27h\x27:{\x27x\x27:0x6,\x27y\x27:0x3}},\x27k\x27:\x27Sandstone\x5cx20Pillar\x27,\x27S\x27:\x27Useful\x5cx20building\x5cx20material\x5cx20crafted\x5cx20from\x5cx20sand\x27,\x27v\x27:2.5,\x27g\x27:0xff,\x27q\x27:uU},u0[uh]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x7,\x27y\x27:0x2},\x27u\x27:{\x27x\x27:0x7,\x27y\x27:0x2},\x27m\x27:{\x27x\x27:0x7,\x27y\x27:0x2},\x27p\x27:{\x27x\x27:0x7,\x27y\x27:0x2},\x27l\x27:{\x27x\x27:0x7,\x27y\x27:0x2},\x27h\x27:{\x27x\x27:0x7,\x27y\x27:0x2}},\x27k\x27:\x27Smooth\x5cx20Sandstone\x5cx20Brick\x27,\x27S\x27:\x27Useful\x5cx20building\x5cx20material\x5cx20crafted\x5cx20from\x5cx20sand\x27,\x27v\x27:0x4,\x27g\x27:0xff,\x27q\x27:uU},u0[up]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x4,\x27y\x27:0x4},\x27u\x27:{\x27x\x27:0x2,\x27y\x27:0x2},\x27m\x27:{\x27x\x27:0x3,\x27y\x27:0x4},\x27p\x27:{\x27x\x27:0x3,\x27y\x27:0x4},\x27l\x27:{\x27x\x27:0x5,\x27y\x27:0x4},\x27h\x27:{\x27x\x27:0x5,\x27y\x27:0x4}},\x27k\x27:\x27Work\x5cx20Station\x27,\x27S\x27:\x27Allows\x5cx20you\x5cx20to\x5cx20craft\x5cx20more\x5cx20advanced\x5cx20items\x5cx20when\x5cx20placed\x5cx20on\x5cx20the\x5cx20ground\x5cx20nearby\x27,\x27v\x27:0.5,\x27g\x27:0xff,\x27q\x27:c1},u0[uj]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x4,\x27y\x27:0x5},\x27u\x27:{\x27x\x27:0x0,\x27y\x27:0x0},\x27m\x27:{\x27x\x27:0x3,\x27y\x27:0x5},\x27p\x27:{\x27x\x27:0x3,\x27y\x27:0x5},\x27l\x27:{\x27x\x27:0x3,\x27y\x27:0x5},\x27h\x27:{\x27x\x27:0x3,\x27y\x27:0x5}},\x27k\x27:\x27Snowy\x5cx20Grass\x27,\x27S\x27:\x27A\x5cx20dirt\x5cx20block\x5cx20with\x5cx20snowy\x5cx20grass\x5cx20on\x5cx20top\x27,\x27v\x27:0x1,\x27g\x27:0xff,\x27q\x27:uY},u0[uV]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x6,\x27y\x27:0x4},\x27u\x27:{\x27x\x27:0x6,\x27y\x27:0x4},\x27m\x27:{\x27x\x27:0x6,\x27y\x27:0x4},\x27p\x27:{\x27x\x27:0x6,\x27y\x27:0x4},\x27l\x27:{\x27x\x27:0x6,\x27y\x27:0x4},\x27h\x27:{\x27x\x27:0x6,\x27y\x27:0x4}},\x27k\x27:\x27Sapphire\x5cx20Stone\x5cx20Brick\x27,\x27S\x27:\x27Stone\x5cx20brick\x5cx20made\x5cx20out\x5cx20of\x5cx20sapphire\x27,\x27v\x27:0x4,\x27g\x27:0xff,\x27q\x27:uU},u0[uy]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x7,\x27y\x27:0x4},\x27u\x27:{\x27x\x27:0x7,\x27y\x27:0x4},\x27m\x27:{\x27x\x27:0x7,\x27y\x27:0x4},\x27p\x27:{\x27x\x27:0x7,\x27y\x27:0x4},\x27l\x27:{\x27x\x27:0x7,\x27y\x27:0x4},\x27h\x27:{\x27x\x27:0x7,\x27y\x27:0x4}},\x27k\x27:\x27Ruby\x5cx20Stone\x5cx20Brick\x27,\x27S\x27:\x27Stone\x5cx20brick\x5cx20made\x5cx20out\x5cx20of\x5cx20ruby\x27,\x27v\x27:0x4,\x27g\x27:0xff,\x27q\x27:uU},u0[ui]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x5,\x27y\x27:0x5},\x27u\x27:{\x27x\x27:0x6,\x27y\x27:0x5},\x27m\x27:{\x27x\x27:0x6,\x27y\x27:0x5},\x27p\x27:{\x27x\x27:0x6,\x27y\x27:0x5},\x27l\x27:{\x27x\x27:0x6,\x27y\x27:0x5},\x27h\x27:{\x27x\x27:0x6,\x27y\x27:0x5}},\x27k\x27:\x27Loadout\x5cx20Station\x27,\x27S\x27:\x27Supply\x5cx20station\x5cx20that\x5cx20allows\x5cx20you\x5cx20to\x5cx20choose\x5cx20your\x5cx20loadouts\x27,\x27v\x27:2.5,\x27g\x27:0xff,\x27q\x27:uU},u0[uM]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x7,\x27y\x27:0x5},\x27u\x27:{\x27x\x27:0x7,\x27y\x27:0x5},\x27m\x27:{\x27x\x27:0x7,\x27y\x27:0x5},\x27p\x27:{\x27x\x27:0x7,\x27y\x27:0x5},\x27l\x27:{\x27x\x27:0x7,\x27y\x27:0x5},\x27h\x27:{\x27x\x27:0x7,\x27y\x27:0x5}},\x27k\x27:\x27Bedrock\x5cx20Brick\x27,\x27S\x27:\x27Indestructible\x5cx20bricks\x5cx20made\x5cx20out\x5cx20of\x5cx20bedrock\x27,\x27v\x27:0xf423f,\x27g\x27:0xff,\x27q\x27:uU},u0[uK]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x5,\x27y\x27:0x6},\x27u\x27:{\x27x\x27:0x5,\x27y\x27:0x6},\x27m\x27:{\x27x\x27:0x5,\x27y\x27:0x6},\x27p\x27:{\x27x\x27:0x5,\x27y\x27:0x6},\x27l\x27:{\x27x\x27:0x5,\x27y\x27:0x6},\x27h\x27:{\x27x\x27:0x5,\x27y\x27:0x6}},\x27k\x27:\x27Reinforced\x5cx20Ruby\x27,\x27S\x27:\x27Indestructable\x5cx20blocks\x5cx20made\x5cx20out\x5cx20of\x5cx20ruby\x27,\x27v\x27:0xf423f,\x27g\x27:0xff,\x27q\x27:uU},u0[ua]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x6,\x27y\x27:0x6},\x27u\x27:{\x27x\x27:0x6,\x27y\x27:0x6},\x27m\x27:{\x27x\x27:0x6,\x27y\x27:0x6},\x27p\x27:{\x27x\x27:0x6,\x27y\x27:0x6},\x27l\x27:{\x27x\x27:0x6,\x27y\x27:0x6},\x27h\x27:{\x27x\x27:0x6,\x27y\x27:0x6}},\x27k\x27:\x27Reinforced\x5cx20Sapphire\x27,\x27S\x27:\x27Indestructable\x5cx20blocks\x5cx20made\x5cx20out\x5cx20of\x5cx20sapphire\x27,\x27v\x27:0xf423f,\x27g\x27:0xff,\x27q\x27:uU},u0[uf]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x7,\x27y\x27:0x3},\x27u\x27:{\x27x\x27:0x7,\x27y\x27:0x3},\x27m\x27:{\x27x\x27:0x7,\x27y\x27:0x3},\x27p\x27:{\x27x\x27:0x7,\x27y\x27:0x3},\x27l\x27:{\x27x\x27:0x7,\x27y\x27:0x3},\x27h\x27:{\x27x\x27:0x7,\x27y\x27:0x3}},\x27k\x27:\x27Sulfur\x5cx20Ore\x27,\x27S\x27:\x27Stone\x5cx20filled\x5cx20with\x5cx20some\x5cx20sulfur\x5cx20ore\x27,\x27v\x27:2.1,\x27g\x27:0xff,\x27q\x27:uB},u0[ul]={\x27$\x27:!0x0,\x27t\x27:!0x0,\x27o\x27:{\x27i\x27:{\x27x\x27:0x7,\x27y\x27:0x7},\x27u\x27:{\x27x\x27:0x7,\x27y\x27:0x6},\x27m\x27:{\x27x\x27:0x6,\x27y\x27:0x7},\x27p\x27:{\x27x\x27:0x6,\x27y\x27:0x7},\x27l\x27:{\x27x\x27:0x6,\x27y\x27:0x7},\x27h\x27:{\x27x\x27:0x6,\x27y\x27:0x7}},\x27k\x27:\x27Bomb\x27,\x27S\x27:\x27Dangerous\x5cx20explosives\x5cx20that\x5cx20can\x5cx20be\x5cx20detonated\x5cx20when\x5cx20shot\x27,\x27v\x27:0.2,\x27g\x27:0x4,\x27q\x27:uY},u0),c4=function(cm,cx,cX,cI){return\x20cx===u3&&cX===u3&&cI===u3?cm[\x27A\x27]:-0x1===cx&&cX===u3&&cI===u3?cm[\x27U\x27]:cx===u3&&cX===u3&&-0x1===cI?cm[\x27B\x27]:-0x1===cx&&cX===u3&&-0x1===cI?cm[\x27M\x27]:cx===u3&&-0x1===cX&&cI===u3?cm[\x27T\x27]:-0x1===cx&&-0x1===cX&&cI===u3?cm[\x27C\x27]:cx===u3&&-0x1===cX&&-0x1===cI?cm[\x27I\x27]:-0x1===cx&&-0x1===cX&&-0x1===cI?cm[\x27H\x27]:cx===u3&&cI===u3?cm[\x27L\x27][cX]:-0x1===cx&&cI===u3?cm[\x27G\x27][cX]:cx===u3&&-0x1===cI?cm[\x27O\x27][cX]:-0x1===cx&&-0x1===cI?cm[\x27R\x27][cX]:cX===u3&&cI===u3?cm[\x27_\x27][cx]:cX===u3&&-0x1===cI?cm[\x27N\x27][cx]:cX===u3&&cx===u3?cm[\x27W\x27][cI]:cX===u3&&-0x1===cx?cm[\x27D\x27][cI]:-0x1===cX&&cI===u3?cm[\x27K\x27][cx]:-0x1===cX&&-0x1===cI?cm[\x27P\x27][cx]:-0x1===cX&&cx===u3?cm[\x27V\x27][cI]:-0x1===cX&&-0x1===cx?cm[\x27F\x27][cI]:-0x1===cx?cm[\x27p\x27][cX][cI]:cx===u3?cm[\x27m\x27][cX][cI]:-0x1===cX?cm[\x27u\x27][cx][cI]:cX===u3?cm[\x27i\x27][cx][cI]:-0x1===cI?cm[\x27h\x27][cx][cX]:cI===u3?cm[\x27l\x27][cx][cX]:cm[\x27Y\x27][cx*u3*u3+cX*u3+cI];},c5=function(cm,cx,cX){return\x200xff*[0.3,0.5,0.7,0x1][cm&&cx?0x0:0x3-(cm+cx+cX)];},c6=function(cm,cx,cX,cI){var\x20cC=c4(cm,cx,cX,cI);return\x20c3[cC][\x27t\x27];},c7=function(cm,cx,cX,cI){return\x20c4(cm,cx,cX,cI)===u5;},c8=function(cm,cx,cX,cI){var\x20cC=c4(cm,cx,cX,cI);return\x20c9(cC);},c9=function(cm){return\x20cm===um||cm===uZ||cm===uw||cm===uE||cm===uv||cm===uo||cm===ug||cm===uQ||cm===uO;},cu=function(cm,cx,cX,cI){var\x20cC=c4(cm,cx,cX,cI);return\x20c3[cC][\x27$\x27];};!function(cm){cm[\x27CHUNK_MESH_DATA\x27]=\x27CHUNK_MESH_DATA\x27,cm[\x27BLOCKS_MESH_DATA\x27]=\x27BLOCKS_MESH_DATA\x27;}(u1||(u1={}));var\x20cc,cz=u1;!function(cm){cm[\x27CHUNK_MESH\x27]=\x27CHUNK_MESH\x27,cm[\x27BLOCKS_MESH\x27]=\x27BLOCKS_MESH\x27;}(cc||(cc={}));var\x20cq=cc,cd=function(cm,cx,cX){return\x20cm+\x27:\x27+cx+\x27:\x27+cX;},cJ=function(cm,cx,cX,cI){var\x20cC=cm[\x27Y\x27][cd(cx,cX,cI)];return\x20void\x200x0===cC?u5:cC;},ck=function(cm,cx,cX,cI){return\x20cJ(cm,cx,cX,cI)!==u5;},cr=function(cm,cx,cX,cI){return\x20void\x200x0!==cm[\x27Y\x27][cd(cx,cX,cI)];},cT=function(cm){var\x20cx=[],cX=[],cI=[],cC=[],cG=[cm[\x27j\x27]],cs=new\x20Set();for(cs[\x27add\x27](cd(cm[\x27j\x27][\x27x\x27],cm[\x27j\x27][\x27y\x27],cm[\x27j\x27][\x27z\x27]));cG[\x27length\x27]>0x0;){var\x20cn=cG[\x27pop\x27](),cW=cn[\x27x\x27],cR=cn[\x27y\x27],cb=cn[\x27z\x27],cA=cW-cm[\x27j\x27][\x27x\x27],ct=cR-cm[\x27j\x27][\x27y\x27],cL=cb-cm[\x27j\x27][\x27z\x27],cH=ck(cm,cW,cR,cb),cN=cd(cW,cR+0x1,cb);if(cH&&!ck(cm,cW,cR+0x1,cb)){cx[\x27push\x27]((cA+0.5)*u4,(ct+0.5)*u4,(cL+0.5)*u4),cx[\x27push\x27]((cA-0.5)*u4,(ct+0.5)*u4,(cL+0.5)*u4),cx[\x27push\x27]((cA-0.5)*u4,(ct+0.5)*u4,(cL-0.5)*u4),cx[\x27push\x27]((cA+0.5)*u4,(ct+0.5)*u4,(cL-0.5)*u4);var\x20ce=c5(ck(cm,cW+0x1,cR+0x1,cb),ck(cm,cW,cR+0x1,cb+0x1),ck(cm,cW+0x1,cR+0x1,cb+0x1)),cF=c5(ck(cm,cW,cR+0x1,cb+0x1),ck(cm,cW-0x1,cR+0x1,cb),ck(cm,cW-0x1,cR+0x1,cb+0x1)),cS=c5(ck(cm,cW-0x1,cR+0x1,cb),ck(cm,cW,cR+0x1,cb-0x1),ck(cm,cW-0x1,cR+0x1,cb-0x1)),ch=c5(ck(cm,cW,cR+0x1,cb-0x1),ck(cm,cW+0x1,cR+0x1,cb),ck(cm,cW+0x1,cR+0x1,cb-0x1));cI[\x27push\x27](ce),cI[\x27push\x27](cF),cI[\x27push\x27](cS),cI[\x27push\x27](ch),ce+cS<cF+ch?(cX[\x27push\x27](cx[\x27length\x27]/0x3-0x3,cx[\x27length\x27]/0x3-0x4,cx[\x27length\x27]/0x3-0x1),cX[\x27push\x27](cx[\x27length\x27]/0x3-0x1,cx[\x27length\x27]/0x3-0x2,cx[\x27length\x27]/0x3-0x3)):(cX[\x27push\x27](cx[\x27length\x27]/0x3-0x4,cx[\x27length\x27]/0x3-0x1,cx[\x27length\x27]/0x3-0x2),cX[\x27push\x27](cx[\x27length\x27]/0x3-0x2,cx[\x27length\x27]/0x3-0x3,cx[\x27length\x27]/0x3-0x4));var\x20cp=c3[cJ(cm,cW,cR,cb)][\x27o\x27][\x27i\x27];cC[\x27push\x27](cp[\x27x\x27],cp[\x27y\x27],0x0,0x1),cC[\x27push\x27](cp[\x27x\x27],cp[\x27y\x27],0x1,0x1),cC[\x27push\x27](cp[\x27x\x27],cp[\x27y\x27],0x1,0x0),cC[\x27push\x27](cp[\x27x\x27],cp[\x27y\x27],0x0,0x0);}else\x20cr(cm,cW,cR+0x1,cb)&&!cs[\x27has\x27](cN)&&(cG[\x27push\x27](u2(cW,cR+0x1,cb)),cs[\x27add\x27](cN));var\x20cj=cd(cW,cR-0x1,cb);if(cH&&!ck(cm,cW,cR-0x1,cb)){cx[\x27push\x27]((cA+0.5)*u4,(ct-0.5)*u4,(cL-0.5)*u4),cx[\x27push\x27]((cA-0.5)*u4,(ct-0.5)*u4,(cL-0.5)*u4),cx[\x27push\x27]((cA-0.5)*u4,(ct-0.5)*u4,(cL+0.5)*u4),cx[\x27push\x27]((cA+0.5)*u4,(ct-0.5)*u4,(cL+0.5)*u4);var\x20cV=c5(ck(cm,cW+0x1,cR-0x1,cb),ck(cm,cW,cR-0x1,cb-0x1),ck(cm,cW+0x1,cR-0x1,cb-0x1)),cy=c5(ck(cm,cW,cR-0x1,cb-0x1),ck(cm,cW-0x1,cR-0x1,cb),ck(cm,cW-0x1,cR-0x1,cb-0x1)),ci=c5(ck(cm,cW-0x1,cR-0x1,cb),ck(cm,cW,cR-0x1,cb+0x1),ck(cm,cW-0x1,cR-0x1,cb+0x1)),cM=c5(ck(cm,cW,cR-0x1,cb+0x1),ck(cm,cW+0x1,cR-0x1,cb),ck(cm,cW+0x1,cR-0x1,cb+0x1));cI[\x27push\x27](cV),cI[\x27push\x27](cy),cI[\x27push\x27](ci),cI[\x27push\x27](cM),cV+ci<cy+cM?(cX[\x27push\x27](cx[\x27length\x27]/0x3-0x3,cx[\x27length\x27]/0x3-0x4,cx[\x27length\x27]/0x3-0x1),cX[\x27push\x27](cx[\x27length\x27]/0x3-0x1,cx[\x27length\x27]/0x3-0x2,cx[\x27length\x27]/0x3-0x3)):(cX[\x27push\x27](cx[\x27length\x27]/0x3-0x4,cx[\x27length\x27]/0x3-0x1,cx[\x27length\x27]/0x3-0x2),cX[\x27push\x27](cx[\x27length\x27]/0x3-0x2,cx[\x27length\x27]/0x3-0x3,cx[\x27length\x27]/0x3-0x4));var\x20cK=c3[cJ(cm,cW,cR,cb)][\x27o\x27][\x27u\x27];cC[\x27push\x27](cK[\x27x\x27],cK[\x27y\x27],0x0,0x1),cC[\x27push\x27](cK[\x27x\x27],cK[\x27y\x27],0x1,0x1),cC[\x27push\x27](cK[\x27x\x27],cK[\x27y\x27],0x1,0x0),cC[\x27push\x27](cK[\x27x\x27],cK[\x27y\x27],0x0,0x0);}else\x20cr(cm,cW,cR-0x1,cb)&&!cs[\x27has\x27](cj)&&(cG[\x27push\x27](u2(cW,cR-0x1,cb)),cs[\x27add\x27](cj));var\x20ca=cd(cW+0x1,cR,cb);if(cH&&!ck(cm,cW+0x1,cR,cb)){cx[\x27push\x27]((cA+0.5)*u4,(ct+0.5)*u4,(cL+0.5)*u4),cx[\x27push\x27]((cA+0.5)*u4,(ct+0.5)*u4,(cL-0.5)*u4),cx[\x27push\x27]((cA+0.5)*u4,(ct-0.5)*u4,(cL-0.5)*u4),cx[\x27push\x27]((cA+0.5)*u4,(ct-0.5)*u4,(cL+0.5)*u4);var\x20cf=c5(ck(cm,cW+0x1,cR,cb+0x1),ck(cm,cW+0x1,cR+0x1,cb),ck(cm,cW+0x1,cR+0x1,cb+0x1)),cl=c5(ck(cm,cW+0x1,cR+0x1,cb),ck(cm,cW+0x1,cR,cb-0x1),ck(cm,cW+0x1,cR+0x1,cb-0x1)),cZ=c5(ck(cm,cW+0x1,cR,cb-0x1),ck(cm,cW+0x1,cR-0x1,cb),ck(cm,cW+0x1,cR-0x1,cb-0x1)),cw=c5(ck(cm,cW+0x1,cR-0x1,cb),ck(cm,cW+0x1,cR,cb+0x1),ck(cm,cW+0x1,cR-0x1,cb+0x1));cI[\x27push\x27](cf),cI[\x27push\x27](cl),cI[\x27push\x27](cZ),cI[\x27push\x27](cw),cf+cZ<cl+cw?(cX[\x27push\x27](cx[\x27length\x27]/0x3-0x3,cx[\x27length\x27]/0x3-0x4,cx[\x27length\x27]/0x3-0x1),cX[\x27push\x27](cx[\x27length\x27]/0x3-0x1,cx[\x27length\x27]/0x3-0x2,cx[\x27length\x27]/0x3-0x3)):(cX[\x27push\x27](cx[\x27length\x27]/0x3-0x4,cx[\x27length\x27]/0x3-0x1,cx[\x27length\x27]/0x3-0x2),cX[\x27push\x27](cx[\x27length\x27]/0x3-0x2,cx[\x27length\x27]/0x3-0x3,cx[\x27length\x27]/0x3-0x4));var\x20cE=c3[cJ(cm,cW,cR,cb)][\x27o\x27][\x27m\x27];cC[\x27push\x27](cE[\x27x\x27],cE[\x27y\x27],0x0,0x1),cC[\x27push\x27](cE[\x27x\x27],cE[\x27y\x27],0x1,0x1),cC[\x27push\x27](cE[\x27x\x27],cE[\x27y\x27],0x1,0x0),cC[\x27push\x27](cE[\x27x\x27],cE[\x27y\x27],0x0,0x0);}else\x20cr(cm,cW+0x1,cR,cb)&&!cs[\x27has\x27](ca)&&(cG[\x27push\x27](u2(cW+0x1,cR,cb)),cs[\x27add\x27](ca));var\x20cv=cd(cW-0x1,cR,cb);if(cH&&!ck(cm,cW-0x1,cR,cb)){cx[\x27push\x27]((cA-0.5)*u4,(ct+0.5)*u4,(cL-0.5)*u4),cx[\x27push\x27]((cA-0.5)*u4,(ct+0.5)*u4,(cL+0.5)*u4),cx[\x27push\x27]((cA-0.5)*u4,(ct-0.5)*u4,(cL+0.5)*u4),cx[\x27push\x27]((cA-0.5)*u4,(ct-0.5)*u4,(cL-0.5)*u4);var\x20co=c5(ck(cm,cW-0x1,cR,cb-0x1),ck(cm,cW-0x1,cR+0x1,cb),ck(cm,cW-0x1,cR+0x1,cb-0x1)),cg=c5(ck(cm,cW-0x1,cR+0x1,cb),ck(cm,cW-0x1,cR,cb+0x1),ck(cm,cW-0x1,cR+0x1,cb+0x1)),cQ=c5(ck(cm,cW-0x1,cR,cb+0x1),ck(cm,cW-0x1,cR-0x1,cb),ck(cm,cW-0x1,cR-0x1,cb+0x1)),cO=c5(ck(cm,cW-0x1,cR-0x1,cb),ck(cm,cW-0x1,cR,cb-0x1),ck(cm,cW-0x1,cR-0x1,cb-0x1));cI[\x27push\x27](co),cI[\x27push\x27](cg),cI[\x27push\x27](cQ),cI[\x27push\x27](cO),co+cQ<cg+cO?(cX[\x27push\x27](cx[\x27length\x27]/0x3-0x3,cx[\x27length\x27]/0x3-0x4,cx[\x27length\x27]/0x3-0x1),cX[\x27push\x27](cx[\x27length\x27]/0x3-0x1,cx[\x27length\x27]/0x3-0x2,cx[\x27length\x27]/0x3-0x3)):(cX[\x27push\x27](cx[\x27length\x27]/0x3-0x4,cx[\x27length\x27]/0x3-0x1,cx[\x27length\x27]/0x3-0x2),cX[\x27push\x27](cx[\x27length\x27]/0x3-0x2,cx[\x27length\x27]/0x3-0x3,cx[\x27length\x27]/0x3-0x4));var\x20cY=c3[cJ(cm,cW,cR,cb)][\x27o\x27][\x27p\x27];cC[\x27push\x27](cY[\x27x\x27],cY[\x27y\x27],0x0,0x1),cC[\x27push\x27](cY[\x27x\x27],cY[\x27y\x27],0x1,0x1),cC[\x27push\x27](cY[\x27x\x27],cY[\x27y\x27],0x1,0x0),cC[\x27push\x27](cY[\x27x\x27],cY[\x27y\x27],0x0,0x0);}else\x20cr(cm,cW-0x1,cR,cb)&&!cs[\x27has\x27](cv)&&(cG[\x27push\x27](u2(cW-0x1,cR,cb)),cs[\x27add\x27](cv));var\x20cP=cd(cW,cR,cb+0x1);if(cH&&!ck(cm,cW,cR,cb+0x1)){cx[\x27push\x27]((cA-0.5)*u4,(ct+0.5)*u4,(cL+0.5)*u4),cx[\x27push\x27]((cA+0.5)*u4,(ct+0.5)*u4,(cL+0.5)*u4),cx[\x27push\x27]((cA+0.5)*u4,(ct-0.5)*u4,(cL+0.5)*u4),cx[\x27push\x27]((cA-0.5)*u4,(ct-0.5)*u4,(cL+0.5)*u4);var\x20cB=c5(ck(cm,cW-0x1,cR,cb+0x1),ck(cm,cW,cR+0x1,cb+0x1),ck(cm,cW-0x1,cR+0x1,cb+0x1)),cU=c5(ck(cm,cW,cR+0x1,cb+0x1),ck(cm,cW+0x1,cR,cb+0x1),ck(cm,cW+0x1,cR+0x1,cb+0x1)),cD=c5(ck(cm,cW+0x1,cR,cb+0x1),ck(cm,cW,cR-0x1,cb+0x1),ck(cm,cW+0x1,cR-0x1,cb+0x1)),z0=c5(ck(cm,cW,cR-0x1,cb+0x1),ck(cm,cW-0x1,cR,cb+0x1),ck(cm,cW-0x1,cR-0x1,cb+0x1));cI[\x27push\x27](cB),cI[\x27push\x27](cU),cI[\x27push\x27](cD),cI[\x27push\x27](z0),cB+cD<cU+z0?(cX[\x27push\x27](cx[\x27length\x27]/0x3-0x3,cx[\x27length\x27]/0x3-0x4,cx[\x27length\x27]/0x3-0x1),cX[\x27push\x27](cx[\x27length\x27]/0x3-0x1,cx[\x27length\x27]/0x3-0x2,cx[\x27length\x27]/0x3-0x3)):(cX[\x27push\x27](cx[\x27length\x27]/0x3-0x4,cx[\x27length\x27]/0x3-0x1,cx[\x27length\x27]/0x3-0x2),cX[\x27push\x27](cx[\x27length\x27]/0x3-0x2,cx[\x27length\x27]/0x3-0x3,cx[\x27length\x27]/0x3-0x4));var\x20z1=c3[cJ(cm,cW,cR,cb)][\x27o\x27][\x27l\x27];cC[\x27push\x27](z1[\x27x\x27],z1[\x27y\x27],0x0,0x1),cC[\x27push\x27](z1[\x27x\x27],z1[\x27y\x27],0x1,0x1),cC[\x27push\x27](z1[\x27x\x27],z1[\x27y\x27],0x1,0x0),cC[\x27push\x27](z1[\x27x\x27],z1[\x27y\x27],0x0,0x0);}else\x20cr(cm,cW,cR,cb+0x1)&&!cs[\x27has\x27](cP)&&(cG[\x27push\x27](u2(cW,cR,cb+0x1)),cs[\x27add\x27](cP));var\x20z2=cd(cW,cR,cb-0x1);if(cH&&!ck(cm,cW,cR,cb-0x1)){cx[\x27push\x27]((cA+0.5)*u4,(ct+0.5)*u4,(cL-0.5)*u4),cx[\x27push\x27]((cA-0.5)*u4,(ct+0.5)*u4,(cL-0.5)*u4),cx[\x27push\x27]((cA-0.5)*u4,(ct-0.5)*u4,(cL-0.5)*u4),cx[\x27push\x27]((cA+0.5)*u4,(ct-0.5)*u4,(cL-0.5)*u4);var\x20z3=c5(ck(cm,cW+0x1,cR,cb-0x1),ck(cm,cW,cR+0x1,cb-0x1),ck(cm,cW+0x1,cR+0x1,cb-0x1)),z4=c5(ck(cm,cW,cR+0x1,cb-0x1),ck(cm,cW-0x1,cR,cb-0x1),ck(cm,cW-0x1,cR+0x1,cb-0x1)),z5=c5(ck(cm,cW-0x1,cR,cb-0x1),ck(cm,cW,cR-0x1,cb-0x1),ck(cm,cW-0x1,cR-0x1,cb-0x1)),z6=c5(ck(cm,cW,cR-0x1,cb-0x1),ck(cm,cW+0x1,cR,cb-0x1),ck(cm,cW+0x1,cR-0x1,cb-0x1));cI[\x27push\x27](z3),cI[\x27push\x27](z4),cI[\x27push\x27](z5),cI[\x27push\x27](z6),z3+z5<z4+z6?(cX[\x27push\x27](cx[\x27length\x27]/0x3-0x3,cx[\x27length\x27]/0x3-0x4,cx[\x27length\x27]/0x3-0x1),cX[\x27push\x27](cx[\x27length\x27]/0x3-0x1,cx[\x27length\x27]/0x3-0x2,cx[\x27length\x27]/0x3-0x3)):(cX[\x27push\x27](cx[\x27length\x27]/0x3-0x4,cx[\x27length\x27]/0x3-0x1,cx[\x27length\x27]/0x3-0x2),cX[\x27push\x27](cx[\x27length\x27]/0x3-0x2,cx[\x27length\x27]/0x3-0x3,cx[\x27length\x27]/0x3-0x4));var\x20z7=c3[cJ(cm,cW,cR,cb)][\x27o\x27][\x27h\x27];cC[\x27push\x27](z7[\x27x\x27],z7[\x27y\x27],0x0,0x1),cC[\x27push\x27](z7[\x27x\x27],z7[\x27y\x27],0x1,0x1),cC[\x27push\x27](z7[\x27x\x27],z7[\x27y\x27],0x1,0x0),cC[\x27push\x27](z7[\x27x\x27],z7[\x27y\x27],0x0,0x0);}else\x20cr(cm,cW,cR,cb-0x1)&&!cs[\x27has\x27](z2)&&(cG[\x27push\x27](u2(cW,cR,cb-0x1)),cs[\x27add\x27](z2));}return{\x27J\x27:u2((cm[\x27j\x27][\x27x\x27]+0.5)*u4,(cm[\x27j\x27][\x27y\x27]+0.5)*u4,(cm[\x27j\x27][\x27z\x27]+0.5)*u4),\x27X\x27:cx,\x27Z\x27:cX,\x27$$\x27:cI,\x27t$\x27:cC};};onmessage=function(cm){switch(cm[\x27data\x27][\x27e$\x27]){case\x20cq[\x27CHUNK_MESH\x27]:const\x20cx=function(cX){for(var\x20cI=[],cC=[],cG=[],cs=[],cn=[],cW=[],cR=[],cb=[],cA=new\x20Uint8Array(u3*u3*u3*0x4),cL=new\x20Uint8Array(u3*u3*u3*0x4),cH=new\x20Uint8Array(u3*u3*u3*0x4),cN=new\x20Uint8Array(u3*u3*u3*0x4),cF=new\x20Uint8Array(u3*u3*u3*0x4),cS=new\x20Uint8Array(u3*u3*u3*0x4),ch=0x0;ch<u3;ch++)for(var\x20cp=0x0;cp<u3;cp++)for(var\x20cj=0x0;cj<u3;cj++)if(!c7(cX,ch,cp,cj)){var\x20cV=cu(cX,ch,cp,cj),cy=c8(cX,ch,cp,cj),ci=cu(cX,ch,cp+0x1,cj);if(cV&&!ci||!cV&&c7(cX,ch,cp+0x1,cj)||cy&&!c8(cX,ch,cp+0x1,cj)){var\x20cM=0x4*(ch*u3*u3+cp*u3+cj);if(cy&&ci)cA[cM]=0x4c,cA[cM+0x1]=0x4c,cA[cM+0x2]=0x4c,cA[cM+0x3]=0x4c;else{var\x20cK=c5(c6(cX,ch+0x1,cp+0x1,cj),c6(cX,ch,cp+0x1,cj+0x1),c6(cX,ch+0x1,cp+0x1,cj+0x1)),ca=c5(c6(cX,ch,cp+0x1,cj+0x1),c6(cX,ch-0x1,cp+0x1,cj),c6(cX,ch-0x1,cp+0x1,cj+0x1)),cf=c5(c6(cX,ch-0x1,cp+0x1,cj),c6(cX,ch,cp+0x1,cj-0x1),c6(cX,ch-0x1,cp+0x1,cj-0x1)),cl=c5(c6(cX,ch,cp+0x1,cj-0x1),c6(cX,ch+0x1,cp+0x1,cj),c6(cX,ch+0x1,cp+0x1,cj-0x1));cA[cM]=cK,cA[cM+0x1]=ca,cA[cM+0x2]=cf,cA[cM+0x3]=cl;}}if(cV&&!cu(cX,ch,cp-0x1,cj)||!cV&&c7(cX,ch,cp-0x1,cj)){var\x20cZ=c5(c6(cX,ch+0x1,cp-0x1,cj),c6(cX,ch,cp-0x1,cj-0x1),c6(cX,ch+0x1,cp-0x1,cj-0x1)),cw=c5(c6(cX,ch,cp-0x1,cj-0x1),c6(cX,ch-0x1,cp-0x1,cj),c6(cX,ch-0x1,cp-0x1,cj-0x1)),cE=c5(c6(cX,ch-0x1,cp-0x1,cj),c6(cX,ch,cp-0x1,cj+0x1),c6(cX,ch-0x1,cp-0x1,cj+0x1)),cv=c5(c6(cX,ch,cp-0x1,cj+0x1),c6(cX,ch+0x1,cp-0x1,cj),c6(cX,ch+0x1,cp-0x1,cj+0x1)),co=0x4*(ch*u3*u3+cp*u3+cj);cL[co]=cZ,cL[co+0x1]=cw,cL[co+0x2]=cE,cL[co+0x3]=cv;}if(cV&&!cu(cX,ch+0x1,cp,cj)||!cV&&c7(cX,ch+0x1,cp,cj)){var\x20cg=c5(c6(cX,ch+0x1,cp,cj+0x1),c6(cX,ch+0x1,cp+0x1,cj),c6(cX,ch+0x1,cp+0x1,cj+0x1)),cQ=c5(c6(cX,ch+0x1,cp+0x1,cj),c6(cX,ch+0x1,cp,cj-0x1),c6(cX,ch+0x1,cp+0x1,cj-0x1)),cO=c5(c6(cX,ch+0x1,cp,cj-0x1),c6(cX,ch+0x1,cp-0x1,cj),c6(cX,ch+0x1,cp-0x1,cj-0x1)),cY=c5(c6(cX,ch+0x1,cp-0x1,cj),c6(cX,ch+0x1,cp,cj+0x1),c6(cX,ch+0x1,cp-0x1,cj+0x1)),cP=0x4*(ch*u3*u3+cp*u3+cj);cH[cP]=cg,cH[cP+0x1]=cQ,cH[cP+0x2]=cO,cH[cP+0x3]=cY;}if(cV&&!cu(cX,ch-0x1,cp,cj)||!cV&&c7(cX,ch-0x1,cp,cj)){var\x20cB=c5(c6(cX,ch-0x1,cp,cj-0x1),c6(cX,ch-0x1,cp+0x1,cj),c6(cX,ch-0x1,cp+0x1,cj-0x1)),cU=c5(c6(cX,ch-0x1,cp+0x1,cj),c6(cX,ch-0x1,cp,cj+0x1),c6(cX,ch-0x1,cp+0x1,cj+0x1)),cD=c5(c6(cX,ch-0x1,cp,cj+0x1),c6(cX,ch-0x1,cp-0x1,cj),c6(cX,ch-0x1,cp-0x1,cj+0x1)),z0=c5(c6(cX,ch-0x1,cp-0x1,cj),c6(cX,ch-0x1,cp,cj-0x1),c6(cX,ch-0x1,cp-0x1,cj-0x1)),z1=0x4*(ch*u3*u3+cp*u3+cj);cN[z1]=cB,cN[z1+0x1]=cU,cN[z1+0x2]=cD,cN[z1+0x3]=z0;}if(cV&&!cu(cX,ch,cp,cj+0x1)||!cV&&c7(cX,ch,cp,cj+0x1)){var\x20z2=c5(c6(cX,ch-0x1,cp,cj+0x1),c6(cX,ch,cp+0x1,cj+0x1),c6(cX,ch-0x1,cp+0x1,cj+0x1)),z3=c5(c6(cX,ch,cp+0x1,cj+0x1),c6(cX,ch+0x1,cp,cj+0x1),c6(cX,ch+0x1,cp+0x1,cj+0x1)),z4=c5(c6(cX,ch+0x1,cp,cj+0x1),c6(cX,ch,cp-0x1,cj+0x1),c6(cX,ch+0x1,cp-0x1,cj+0x1)),z5=c5(c6(cX,ch,cp-0x1,cj+0x1),c6(cX,ch-0x1,cp,cj+0x1),c6(cX,ch-0x1,cp-0x1,cj+0x1)),z6=0x4*(ch*u3*u3+cp*u3+cj);cF[z6]=z2,cF[z6+0x1]=z3,cF[z6+0x2]=z4,cF[z6+0x3]=z5;}if(cV&&!cu(cX,ch,cp,cj-0x1)||!cV&&c7(cX,ch,cp,cj-0x1)){var\x20z7=c5(c6(cX,ch+0x1,cp,cj-0x1),c6(cX,ch,cp+0x1,cj-0x1),c6(cX,ch+0x1,cp+0x1,cj-0x1)),z8=c5(c6(cX,ch,cp+0x1,cj-0x1),c6(cX,ch-0x1,cp,cj-0x1),c6(cX,ch-0x1,cp+0x1,cj-0x1)),z9=c5(c6(cX,ch-0x1,cp,cj-0x1),c6(cX,ch,cp-0x1,cj-0x1),c6(cX,ch-0x1,cp-0x1,cj-0x1)),zu=c5(c6(cX,ch,cp-0x1,cj-0x1),c6(cX,ch+0x1,cp,cj-0x1),c6(cX,ch+0x1,cp-0x1,cj-0x1)),zc=0x4*(ch*u3*u3+cp*u3+cj);cS[zc]=z7,cS[zc+0x1]=z8,cS[zc+0x2]=z9,cS[zc+0x3]=zu;}}for(var\x20zz=0x0;zz<u3;zz++)for(var\x20zq=0x0;zq<u3;zq++)for(var\x20zd=0x0;zd<u3;zd++){var\x20zJ=zq,zk=zz,zr=zd,zT=cI,zm=cC,zx=cG,zX=cs;cu(cX,zq,zz,zd)||(zT=cn,zm=cW,zx=cR,zX=cb);var\x20zI=0x4*(zq*u3*u3+zz*u3+zd),zC=cX[\x27Y\x27][zq*u3*u3+zz*u3+zd],zG=0x1,zs=0x1,zn=0x1,zW=0x1;zC!==um||c8(cX,zq,zz+0x1,zd)||(zG=0.9,zs=0.9,zn=0.9,zW=0.9);var\x20zR=cA[zI];if(0x0!==zR){for(var\x20zb=cA[zI+0x1],zA=cA[zI+0x2],zL=cA[zI+0x3],zH=0x1,zN=0x1,ze=zd+0x1;ze<u3;ze++){var\x20zF=0x4*(zq*u3*u3+zz*u3+ze),zS=cX[\x27Y\x27][zq*u3*u3+zz*u3+ze];if(0x0===cA[zF]||zC!==zS||zR!==cA[zF]||zb!==cA[zF+0x1]||zA!==cA[zF+0x2]||zL!==cA[zF+0x3])break;++zH;}for(var\x20zh=!0x0,zp=zq+0x1;zp<u3&&zh;zp++){zh=!0x0;for(var\x20zj=zd;zj<zd+zH;zj++){var\x20zV=0x4*(zp*u3*u3+zz*u3+zj),zy=cX[\x27Y\x27][zp*u3*u3+zz*u3+zj];if(0x0===cA[zV]||zC!==zy||zR!==cA[zV]||zb!==cA[zV+0x1]||zA!==cA[zV+0x2]||zL!==cA[zV+0x3]){zh=!0x1;break;}}zh&&++zN;}for(var\x20zi=zq;zi<zq+zN;zi++)for(var\x20zM=zd;zM<zd+zH;zM++)cA[0x4*(zi*u3*u3+zz*u3+zM)]=0x0;zT[\x27push\x27](0x1*(zJ+0x1+(zN-0x1)),0x1*zk+zG,0x1*(zr+0x1+(zH-0x1))),zT[\x27push\x27](0x1*zJ,0x1*zk+zs,0x1*(zr+0x1+(zH-0x1))),zT[\x27push\x27](0x1*zJ,0x1*zk+zW,0x1*zr),zT[\x27push\x27](0x1*(zJ+0x1+(zN-0x1)),0x1*zk+zn,0x1*zr),zx[\x27push\x27](zR,zb,zA,zL),zR+zA<zb+zL?(zm[\x27push\x27](zT[\x27length\x27]/0x3-0x3,zT[\x27length\x27]/0x3-0x4,zT[\x27length\x27]/0x3-0x1),zm[\x27push\x27](zT[\x27length\x27]/0x3-0x1,zT[\x27length\x27]/0x3-0x2,zT[\x27length\x27]/0x3-0x3)):(zm[\x27push\x27](zT[\x27length\x27]/0x3-0x4,zT[\x27length\x27]/0x3-0x1,zT[\x27length\x27]/0x3-0x2),zm[\x27push\x27](zT[\x27length\x27]/0x3-0x2,zT[\x27length\x27]/0x3-0x3,zT[\x27length\x27]/0x3-0x4));var\x20zK=c3[zC][\x27o\x27][\x27i\x27];zX[\x27push\x27](zK[\x27x\x27],zK[\x27y\x27],0x0,zH),zX[\x27push\x27](zK[\x27x\x27],zK[\x27y\x27],zN,zH),zX[\x27push\x27](zK[\x27x\x27],zK[\x27y\x27],zN,0x0),zX[\x27push\x27](zK[\x27x\x27],zK[\x27y\x27],0x0,0x0);}var\x20za=cL[zI];if(0x0!==za){for(var\x20zf=cL[zI+0x1],zl=cL[zI+0x2],zZ=cL[zI+0x3],zw=0x1,zE=0x1,zv=zd+0x1;zv<u3;zv++){var\x20zo=0x4*(zq*u3*u3+zz*u3+zv),zg=cX[\x27Y\x27][zq*u3*u3+zz*u3+zv];if(0x0===cL[zo]||zC!==zg||za!==cL[zo]||zf!==cL[zo+0x1]||zl!==cL[zo+0x2]||zZ!==cL[zo+0x3])break;++zw;}for(var\x20zQ=!0x0,zO=zq+0x1;zO<u3&&zQ;zO++){zQ=!0x0;for(var\x20zY=zd;zY<zd+zw;zY++){var\x20zP=0x4*(zO*u3*u3+zz*u3+zY),zB=cX[\x27Y\x27][zO*u3*u3+zz*u3+zY];if(0x0===cL[zP]||zC!==zB||za!==cL[zP]||zf!==cL[zP+0x1]||zl!==cL[zP+0x2]||zZ!==cL[zP+0x3]){zQ=!0x1;break;}}zQ&&++zE;}for(var\x20zU=zq;zU<zq+zE;zU++)for(var\x20zD=zd;zD<zd+zw;zD++)cL[0x4*(zU*u3*u3+zz*u3+zD)]=0x0;zT[\x27push\x27](0x1*(zJ+0x1+(zE-0x1)),0x1*zk,0x1*zr),zT[\x27push\x27](0x1*zJ,0x1*zk,0x1*zr),zT[\x27push\x27](0x1*zJ,0x1*zk,0x1*(zr+0x1+(zw-0x1))),zT[\x27push\x27](0x1*(zJ+0x1+(zE-0x1)),0x1*zk,0x1*(zr+0x1+(zw-0x1))),zx[\x27push\x27](za,zf,zl,zZ),za+zl<zf+zZ?(zm[\x27push\x27](zT[\x27length\x27]/0x3-0x3,zT[\x27length\x27]/0x3-0x4,zT[\x27length\x27]/0x3-0x1),zm[\x27push\x27](zT[\x27length\x27]/0x3-0x1,zT[\x27length\x27]/0x3-0x2,zT[\x27length\x27]/0x3-0x3)):(zm[\x27push\x27](zT[\x27length\x27]/0x3-0x4,zT[\x27length\x27]/0x3-0x1,zT[\x27length\x27]/0x3-0x2),zm[\x27push\x27](zT[\x27length\x27]/0x3-0x2,zT[\x27length\x27]/0x3-0x3,zT[\x27length\x27]/0x3-0x4));var\x20q0=c3[zC][\x27o\x27][\x27u\x27];zX[\x27push\x27](q0[\x27x\x27],q0[\x27y\x27],0x0,zw),zX[\x27push\x27](q0[\x27x\x27],q0[\x27y\x27],zE,zw),zX[\x27push\x27](q0[\x27x\x27],q0[\x27y\x27],zE,0x0),zX[\x27push\x27](q0[\x27x\x27],q0[\x27y\x27],0x0,0x0);}var\x20q1=cH[zI];if(0x0!==q1){for(var\x20q2=cH[zI+0x1],q3=cH[zI+0x2],q4=cH[zI+0x3],q5=0x1,q6=0x1,q7=zd+0x1;q7<u3;q7++){var\x20q8=0x4*(zq*u3*u3+zz*u3+q7),q9=cX[\x27Y\x27][zq*u3*u3+zz*u3+q7];if(0x0===cH[q8]||zC!==q9||q1!==cH[q8]||q2!==cH[q8+0x1]||q3!==cH[q8+0x2]||q4!==cH[q8+0x3])break;++q5;}for(var\x20qu=!0x0,qc=zz+0x1;qc<u3&&qu;qc++){qu=!0x0;for(var\x20qz=zd;qz<zd+q5;qz++){var\x20qq=0x4*(zq*u3*u3+qc*u3+qz),qd=cX[\x27Y\x27][zq*u3*u3+qc*u3+qz];if(0x0===cH[qq]||zC!==qd||q1!==cH[qq]||q2!==cH[qq+0x1]||q3!==cH[qq+0x2]||q4!==cH[qq+0x3]){qu=!0x1;break;}}qu&&++q6;}for(var\x20qJ=zz;qJ<zz+q6;qJ++)for(var\x20qk=zd;qk<zd+q5;qk++)cH[0x4*(zq*u3*u3+qJ*u3+qk)]=0x0;zT[\x27push\x27](0x1*(zJ+0x1),0x1*(zk+(q6-0x1))+zG,0x1*(zr+0x1+(q5-0x1))),zT[\x27push\x27](0x1*(zJ+0x1),0x1*(zk+(q6-0x1))+zn,0x1*zr),zT[\x27push\x27](0x1*(zJ+0x1),0x1*zk,0x1*zr),zT[\x27push\x27](0x1*(zJ+0x1),0x1*zk,0x1*(zr+0x1+(q5-0x1))),zx[\x27push\x27](q1,q2,q3,q4),q1+q3<q2+q4?(zm[\x27push\x27](zT[\x27length\x27]/0x3-0x3,zT[\x27length\x27]/0x3-0x4,zT[\x27length\x27]/0x3-0x1),zm[\x27push\x27](zT[\x27length\x27]/0x3-0x1,zT[\x27length\x27]/0x3-0x2,zT[\x27length\x27]/0x3-0x3)):(zm[\x27push\x27](zT[\x27length\x27]/0x3-0x4,zT[\x27length\x27]/0x3-0x1,zT[\x27length\x27]/0x3-0x2),zm[\x27push\x27](zT[\x27length\x27]/0x3-0x2,zT[\x27length\x27]/0x3-0x3,zT[\x27length\x27]/0x3-0x4));var\x20qr=c3[zC][\x27o\x27][\x27m\x27];zX[\x27push\x27](qr[\x27x\x27],qr[\x27y\x27],0x0,q6),zX[\x27push\x27](qr[\x27x\x27],qr[\x27y\x27],q5,q6),zX[\x27push\x27](qr[\x27x\x27],qr[\x27y\x27],q5,0x0),zX[\x27push\x27](qr[\x27x\x27],qr[\x27y\x27],0x0,0x0);}var\x20qT=cN[zI];if(0x0!==qT){for(var\x20qm=cN[zI+0x1],qx=cN[zI+0x2],qX=cN[zI+0x3],qI=0x1,qC=0x1,qG=zd+0x1;qG<u3;qG++){var\x20qs=0x4*(zq*u3*u3+zz*u3+qG),qn=cX[\x27Y\x27][zq*u3*u3+zz*u3+qG];if(0x0===cN[qs]||zC!==qn||qT!==cN[qs]||qm!==cN[qs+0x1]||qx!==cN[qs+0x2]||qX!==cN[qs+0x3])break;++qI;}for(var\x20qW=!0x0,qR=zz+0x1;qR<u3&&qW;qR++){qW=!0x0;for(var\x20qb=zd;qb<zd+qI;qb++){var\x20qA=0x4*(zq*u3*u3+qR*u3+qb),qL=cX[\x27Y\x27][zq*u3*u3+qR*u3+qb];if(0x0===cN[qA]||zC!==qL||qT!==cN[qA]||qm!==cN[qA+0x1]||qx!==cN[qA+0x2]||qX!==cN[qA+0x3]){qW=!0x1;break;}}qW&&++qC;}for(var\x20qH=zz;qH<zz+qC;qH++)for(var\x20qN=zd;qN<zd+qI;qN++)cN[0x4*(zq*u3*u3+qH*u3+qN)]=0x0;zT[\x27push\x27](0x1*zJ,0x1*(zk+(qC-0x1))+zW,0x1*zr),zT[\x27push\x27](0x1*zJ,0x1*(zk+(qC-0x1))+zs,0x1*(zr+0x1+(qI-0x1))),zT[\x27push\x27](0x1*zJ,0x1*zk,0x1*(zr+0x1+(qI-0x1))),zT[\x27push\x27](0x1*zJ,0x1*zk,0x1*zr),zx[\x27push\x27](qT,qm,qx,qX),qT+qx<qm+qX?(zm[\x27push\x27](zT[\x27length\x27]/0x3-0x3,zT[\x27length\x27]/0x3-0x4,zT[\x27length\x27]/0x3-0x1),zm[\x27push\x27](zT[\x27length\x27]/0x3-0x1,zT[\x27length\x27]/0x3-0x2,zT[\x27length\x27]/0x3-0x3)):(zm[\x27push\x27](zT[\x27length\x27]/0x3-0x4,zT[\x27length\x27]/0x3-0x1,zT[\x27length\x27]/0x3-0x2),zm[\x27push\x27](zT[\x27length\x27]/0x3-0x2,zT[\x27length\x27]/0x3-0x3,zT[\x27length\x27]/0x3-0x4));var\x20qe=c3[zC][\x27o\x27][\x27p\x27];zX[\x27push\x27](qe[\x27x\x27],qe[\x27y\x27],0x0,qC),zX[\x27push\x27](qe[\x27x\x27],qe[\x27y\x27],qI,qC),zX[\x27push\x27](qe[\x27x\x27],qe[\x27y\x27],qI,0x0),zX[\x27push\x27](qe[\x27x\x27],qe[\x27y\x27],0x0,0x0);}var\x20qF=cF[zI];if(0x0!==qF){for(var\x20qS=cF[zI+0x1],qh=cF[zI+0x2],qp=cF[zI+0x3],qj=0x1,qV=0x1,qy=zq+0x1;qy<u3;qy++){var\x20qi=0x4*(qy*u3*u3+zz*u3+zd),qM=cX[\x27Y\x27][qy*u3*u3+zz*u3+zd];if(0x0===cF[qi]||zC!==qM||qF!==cF[qi]||qS!==cF[qi+0x1]||qh!==cF[qi+0x2]||qp!==cF[qi+0x3])break;++qj;}for(var\x20qK=!0x0,qa=zz+0x1;qa<u3&&qK;qa++){qK=!0x0;for(var\x20qf=zq;qf<zq+qj;qf++){var\x20ql=0x4*(qf*u3*u3+qa*u3+zd),qZ=cX[\x27Y\x27][qf*u3*u3+qa*u3+zd];if(0x0===cF[ql]||zC!==qZ||qF!==cF[ql]||qS!==cF[ql+0x1]||qh!==cF[ql+0x2]||qp!==cF[ql+0x3]){qK=!0x1;break;}}qK&&++qV;}for(var\x20qw=zz;qw<zz+qV;qw++)for(var\x20qE=zq;qE<zq+qj;qE++)cF[0x4*(qE*u3*u3+qw*u3+zd)]=0x0;zT[\x27push\x27](0x1*zJ,0x1*(zk+(qV-0x1))+zs,0x1*(zr+0x1)),zT[\x27push\x27](0x1*(zJ+0x1+(qj-0x1)),0x1*(zk+(qV-0x1))+zG,0x1*(zr+0x1)),zT[\x27push\x27](0x1*(zJ+0x1+(qj-0x1)),0x1*zk,0x1*(zr+0x1)),zT[\x27push\x27](0x1*zJ,0x1*zk,0x1*(zr+0x1)),zx[\x27push\x27](qF,qS,qh,qp),qF+qh<qS+qp?(zm[\x27push\x27](zT[\x27length\x27]/0x3-0x3,zT[\x27length\x27]/0x3-0x4,zT[\x27length\x27]/0x3-0x1),zm[\x27push\x27](zT[\x27length\x27]/0x3-0x1,zT[\x27length\x27]/0x3-0x2,zT[\x27length\x27]/0x3-0x3)):(zm[\x27push\x27](zT[\x27length\x27]/0x3-0x4,zT[\x27length\x27]/0x3-0x1,zT[\x27length\x27]/0x3-0x2),zm[\x27push\x27](zT[\x27length\x27]/0x3-0x2,zT[\x27length\x27]/0x3-0x3,zT[\x27length\x27]/0x3-0x4));var\x20qv=c3[zC][\x27o\x27][\x27l\x27];zX[\x27push\x27](qv[\x27x\x27],qv[\x27y\x27],0x0,qV),zX[\x27push\x27](qv[\x27x\x27],qv[\x27y\x27],qj,qV),zX[\x27push\x27](qv[\x27x\x27],qv[\x27y\x27],qj,0x0),zX[\x27push\x27](qv[\x27x\x27],qv[\x27y\x27],0x0,0x0);}var\x20qo=cS[zI];if(0x0!==qo){for(var\x20qg=cS[zI+0x1],qQ=cS[zI+0x2],qO=cS[zI+0x3],qY=0x1,qP=0x1,qB=zq+0x1;qB<u3;qB++){var\x20qU=0x4*(qB*u3*u3+zz*u3+zd),qD=cX[\x27Y\x27][qB*u3*u3+zz*u3+zd];if(0x0===cS[qU]||zC!==qD||qo!==cS[qU]||qg!==cS[qU+0x1]||qQ!==cS[qU+0x2]||qO!==cS[qU+0x3])break;++qY;}for(var\x20d0=!0x0,d1=zz+0x1;d1<u3&&d0;d1++){d0=!0x0;for(var\x20d2=zq;d2<zq+qY;d2++){var\x20d3=0x4*(d2*u3*u3+d1*u3+zd),d4=cX[\x27Y\x27][d2*u3*u3+d1*u3+zd];if(0x0===cS[d3]||zC!==d4||qo!==cS[d3]||qg!==cS[d3+0x1]||qQ!==cS[d3+0x2]||qO!==cS[d3+0x3]){d0=!0x1;break;}}d0&&++qP;}for(var\x20d5=zz;d5<zz+qP;d5++)for(var\x20d6=zq;d6<zq+qY;d6++)cS[0x4*(d6*u3*u3+d5*u3+zd)]=0x0;zT[\x27push\x27](0x1*(zJ+0x1+(qY-0x1)),0x1*(zk+(qP-0x1))+zn,0x1*zr),zT[\x27push\x27](0x1*zJ,0x1*(zk+(qP-0x1))+zW,0x1*zr),zT[\x27push\x27](0x1*zJ,0x1*zk,0x1*zr),zT[\x27push\x27](0x1*(zJ+0x1+(qY-0x1)),0x1*zk,0x1*zr),zx[\x27push\x27](qo,qg,qQ,qO),qo+qQ<qg+qO?(zm[\x27push\x27](zT[\x27length\x27]/0x3-0x3,zT[\x27length\x27]/0x3-0x4,zT[\x27length\x27]/0x3-0x1),zm[\x27push\x27](zT[\x27length\x27]/0x3-0x1,zT[\x27length\x27]/0x3-0x2,zT[\x27length\x27]/0x3-0x3)):(zm[\x27push\x27](zT[\x27length\x27]/0x3-0x4,zT[\x27length\x27]/0x3-0x1,zT[\x27length\x27]/0x3-0x2),zm[\x27push\x27](zT[\x27length\x27]/0x3-0x2,zT[\x27length\x27]/0x3-0x3,zT[\x27length\x27]/0x3-0x4));var\x20d7=c3[zC][\x27o\x27][\x27h\x27];zX[\x27push\x27](d7[\x27x\x27],d7[\x27y\x27],0x0,qP),zX[\x27push\x27](d7[\x27x\x27],d7[\x27y\x27],qY,qP),zX[\x27push\x27](d7[\x27x\x27],d7[\x27y\x27],qY,0x0),zX[\x27push\x27](d7[\x27x\x27],d7[\x27y\x27],0x0,0x0);}}return{\x27r$\x27:cX[\x27r$\x27],\x27o$\x27:new\x20Float32Array(cI),\x27a$\x27:new\x20Uint16Array(cC),\x27s$\x27:new\x20Uint8Array(cG),\x27i$\x27:new\x20Uint8Array(cs),\x27n$\x27:new\x20Float32Array(cn),\x27x$\x27:new\x20Uint16Array(cW),\x27y$\x27:new\x20Uint8Array(cR),\x27d$\x27:new\x20Uint8Array(cb),\x27u$\x27:cX[\x27u$\x27]};}(cm[\x27data\x27]);postMessage({\x27event\x27:cz[\x27CHUNK_MESH_DATA\x27],\x27data\x27:cx},[cx[\x27o$\x27][\x27buffer\x27],cx[\x27a$\x27][\x27buffer\x27],cx[\x27s$\x27][\x27buffer\x27],cx[\x27i$\x27][\x27buffer\x27],cx[\x27n$\x27][\x27buffer\x27],cx[\x27x$\x27][\x27buffer\x27],cx[\x27y$\x27][\x27buffer\x27],cx[\x27d$\x27][\x27buffer\x27]]);break;case\x20cq[\x27BLOCKS_MESH\x27]:postMessage({\x27event\x27:cz[\x27BLOCKS_MESH_DATA\x27],\x27data\x27:cT(cm[\x27data\x27])});}};}());', 'Worker', void 0x0, u2['p'] + './package/b9ddac0840863d88bc8e.worker.js');
        }
        !function(de) {
            de['CHUNK_MESH'] = 'CHUNK_MESH',
            de['BLOCKS_MESH'] = 'BLOCKS_MESH';
        }(u3 || (u3 = {}));
        var uG, un = u3;
        !function(de) {
            de['CHUNK_MESH_DATA'] = 'CHUNK_MESH_DATA',
            de['BLOCKS_MESH_DATA'] = 'BLOCKS_MESH_DATA';
        }(uG || (uG = {}));
        var uW = uG
          , uR = u2(0xe8cc)
          , ub = (function() {
            function de(dS, dp) {
                var dj = this;
                this['qh'] = dS,
                this['kh'] = dp,
                this['gh'] = [],
                this['Ch'] = [],
                this['Xh'] = 0x0;
                var dV = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20sampler2D\x20map;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20float\x20vAo;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec4\x20vRealUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20atlasDim\x20=\x20' + u8['Z']['ur']['toFixed'](0x1) + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20diffuseColor\x20=\x20vec4(1.0,\x201.0,\x201.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20diffuseColor\x20*=\x20vec4(vec3(1.0,\x201.0,\x201.0)\x20*\x20vAo,\x201.0);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20tilePosX\x20=\x20max(0.01,\x20min(0.99,\x20fract(vRealUv.z)));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20tilePosY\x20=\x20max(0.01,\x20min(0.99,\x20fract(vRealUv.w)));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20uv\x20=\x20vec2(vRealUv.x\x20*\x20(1.0\x20/\x20atlasDim)\x20+\x20tilePosX\x20*\x20(1.0\x20/\x20atlasDim),\x20vRealUv.y\x20*\x20(1.0\x20/\x20atlasDim)\x20+\x20tilePosY\x20*\x20(1.0\x20/\x20atlasDim));\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20diffuseColor\x20*=\x20texture2D(map,\x20uv);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20diffuseColor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20'
                  , dy = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20sampler2D\x20map;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20time;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20float\x20vAo;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec4\x20vRealUv;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20atlasDim\x20=\x20' + u8['Z']['ur']['toFixed'](0x1) + ';\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20diffuseColor\x20=\x20vec4(1.0,\x201.0,\x201.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20diffuseColor\x20*=\x20vec4(vec3(1.0,\x201.0,\x201.0)\x20*\x20vAo,\x201.0);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20xOffset\x20=\x20mod(floor(time\x20/\x20300.0),\x20atlasDim);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20tilePosX\x20=\x20max(0.01,\x20min(0.99,\x20fract(vRealUv.z)));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20tilePosY\x20=\x20max(0.01,\x20min(0.99,\x20fract(vRealUv.w)));\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20uv\x20=\x20vec2((vRealUv.x\x20+\x20xOffset)\x20*\x20(1.0\x20/\x20atlasDim)\x20+\x20tilePosX\x20*\x20(1.0\x20/\x20atlasDim),\x20vRealUv.y\x20*\x20(1.0\x20/\x20atlasDim)\x20+\x20tilePosY\x20*\x20(1.0\x20/\x20atlasDim));\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20diffuseColor\x20*=\x20texture2D(map,\x20uv);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20diffuseColor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20';
                this['Mh'] = new u7['jyz']({
                    'uniforms': {
                        'map': {
                            'value': u9['Z']['Sh']()
                        }
                    },
                    'vertexShader': '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20attribute\x20float\x20ao;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20attribute\x20vec4\x20realUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20float\x20vAo;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec4\x20vRealUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20mvPosition\x20=\x20modelViewMatrix\x20*\x20vec4(position,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20projectionMatrix\x20*\x20mvPosition;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vAo\x20=\x20ao;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vRealUv\x20=\x20realUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
                    'fragmentShader': dV,
                    'fog': !0x1
                }),
                this['Dh'] = new u7['jyz']({
                    'transparent': !0x0,
                    'uniforms': {
                        'map': {
                            'value': u9['Z']['Sh']()
                        },
                        'time': {
                            'value': 0x0
                        }
                    },
                    'side': u7['ehD'],
                    'vertexShader': '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20attribute\x20float\x20ao;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20attribute\x20vec4\x20realUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20float\x20vAo;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec4\x20vRealUv;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20mvPosition\x20=\x20modelViewMatrix\x20*\x20vec4(position,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20projectionMatrix\x20*\x20mvPosition;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vAo\x20=\x20ao;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vRealUv\x20=\x20realUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
                    'fragmentShader': dy,
                    'fog': !0x1,
                    'depthWrite': !0x1
                });
                for (var dM = 0x0; dM < this['kh']; dM++) {
                    var dK = new uC();
                    dK['onmessage'] = function(da) {
                        switch (da['data']['event']) {
                        case uW['CHUNK_MESH_DATA']:
                            dj['Rh'](da['data']['data']);
                            break;
                        case uW['BLOCKS_MESH_DATA']:
                            var df = da['data']['data']
                              , dl = df['J']
                              , dZ = df['Z']
                              , dw = df['X']
                              , dE = df['t$']
                              , dv = df['$$']
                              , dg = new u7['u9r']();
                            dg['setAttribute']('position', new u7['a$l'](dw,0x3)),
                            dg['setIndex'](new u7['qlB'](dZ,0x1)),
                            dg['setAttribute']('ao', new u7['WTc'](dv,0x1,!0x0)),
                            dg['setAttribute']('realUv', new u7['WTc'](dE,0x4));
                            var dQ = new u7['Kj0'](dg,dj['Mh']);
                            dQ['position']['set'](dl['x'], dl['y'], dl['z']),
                            dj['qh']['Th'](dl, dQ);
                        }
                    }
                    ,
                    this['Ch']['push'](dK);
                }
            }
            var dF = de['prototype'];
            return dF['jh'] = function() {
                this['gh'] = [],
                this['Mh']['dispose']();
                for (var dS = 0x0; dS < this['Ch']['length']; dS++)
                    this['Ch'][dS]['terminate']();
                this['Ch'] = [];
            }
            ,
            dF['gs'] = function(dS, dp) {
                this['Dh']['uniforms']['time']['value'] += 0x3e8 * dS,
                this['Dh']['uniformsNeedUpdate'] = !0x0;
            }
            ,
            dF['Ih'] = function() {
                for (; this['gh']['length'] > 0x0; ) {
                    0x0;
                    var dS = this['gh']['shift']();
                    switch (dS['e$']) {
                    case un['CHUNK_MESH']:
                        if (this['qh']['Wh']()['Uh'](dS['u$']['x'], dS['u$']['y'], dS['u$']['z']))
                            this['Ph']()['postMessage'](dS);
                        break;
                    case un['BLOCKS_MESH']:
                    default:
                        this['Ph']()['postMessage'](dS);
                    }
                }
            }
            ,
            dF['Ph'] = function() {
                var dS = this['Ch'][this['Xh']];
                return ++this['Xh'] >= this['Ch']['length'] && (this['Xh'] = 0x0),
                dS;
            }
            ,
            dF['Rh'] = function(dS) {
                var dp = dS['r$']
                  , dj = dS['u$']
                  , dV = dS['o$']
                  , dy = dS['a$']
                  , dM = dS['i$']
                  , dK = dS['s$']
                  , da = dS['n$']
                  , df = dS['x$']
                  , dl = dS['d$']
                  , dZ = dS['y$']
                  , dw = void 0x0;
                if (dV['length'] > 0x0) {
                    var dE = new u7['u9r']();
                    dE['setAttribute']('position', new u7['a$l'](dV,0x3)),
                    dE['setIndex'](new u7['qlB'](dy,0x1)),
                    dE['setAttribute']('ao', new u7['WTc'](dK,0x1,!0x0)),
                    dE['setAttribute']('realUv', new u7['WTc'](dM,0x4)),
                    dw = new u7['Kj0'](dE,this['Mh']);
                }
                var dv = void 0x0;
                if (da['length'] > 0x0) {
                    var dg = new u7['u9r']();
                    dg['setAttribute']('position', new u7['a$l'](da,0x3)),
                    dg['setIndex'](new u7['qlB'](df,0x1)),
                    dg['setAttribute']('ao', new u7['WTc'](dZ,0x1,!0x0)),
                    dg['setAttribute']('realUv', new u7['WTc'](dl,0x4)),
                    dv = new u7['Kj0'](dg,this['Dh']);
                }
                this['qh']['Lh'](dp, dj['x'], dj['y'], dj['z'], dw, dv);
            }
            ,
            dF['Vh'] = function(dS, dp, dj, dV, dy, dM, dK, da, df, dl, dZ, dw, dE, dv, dg, dQ, dO, dY, dP, dB, dU, dD, J0, J1, J2, J3, J4, J5, J6, J7) {
                var J8 = {
                    'e$': un['CHUNK_MESH'],
                    'r$': dS,
                    'u$': {
                        'x': dp['x'],
                        'y': dp['y'],
                        'z': dp['z']
                    },
                    'Y': dj,
                    'i': dV,
                    'u': dy,
                    'm': dM,
                    'p': dK,
                    'l': da,
                    'h': df,
                    'A': dl,
                    'U': dZ,
                    'B': dw,
                    'M': dE,
                    'T': dv,
                    'C': dg,
                    'I': dQ,
                    'H': dO,
                    'L': dY,
                    'G': dP,
                    'O': dB,
                    'R': dU,
                    '_': dD,
                    'N': J0,
                    'W': J1,
                    'D': J2,
                    'K': J3,
                    'P': J4,
                    'V': J5,
                    'F': J6
                };
                J7 ? this['gh']['push'](J8) : this['Rh']((0x0,
                uR['FX'])(J8));
            }
            ,
            dF['Oh'] = function(dS, dp) {
                this['gh']['push']({
                    'e$': un['BLOCKS_MESH'],
                    'j': dS,
                    'Y': dp
                });
            }
            ,
            dF['Hh'] = function() {
                return this['gh']['length'];
            }
            ,
            dF['Eh'] = function() {
                return this['Mh'];
            }
            ,
            de;
        }())
          , uA = u2(0x97ed)
          , uL = function(de, dF, dS) {
            return (de + 0x80 & 0xff) << 0x10 | (dF + 0x80 & 0xff) << 0x8 | dS + 0x80 & 0xff;
        }
          , uH = function(de, dF, dS) {
            return de + ':' + dF + ':' + dS;
        }
          , uN = (function() {
            function de(dS, dp, dj, dV) {
                if (this['Yh'] = dS,
                this['Bh'] = dp,
                this['Nh'] = dj,
                this['_h'] = uL(this['Bh']['x'], this['Bh']['y'], this['Bh']['z']),
                dV)
                    this['Jh'] = dV;
                else {
                    this['Jh'] = new Uint8Array(u8['Z']['Sr']);
                    for (var dy = 0x0; dy < u8['Z']['Sr']; dy++)
                        this['Jh'][dy] = uA['k']['Kh'];
                }
                this['Gh'] = !0x1,
                this['Nh'] > 0x0 && this['Zh'](!0x1);
            }
            var dF = de['prototype'];
            return dF['Qh'] = function() {
                return this['_h'];
            }
            ,
            dF['bn'] = function(dS, dp, dj) {
                return this['Jh'][dS * u8['Z']['Er'] * u8['Z']['Er'] + dp * u8['Z']['Er'] + dj];
            }
            ,
            dF['On'] = function(dS, dp, dj, dV) {
                var dy = this['bn'](dS, dp, dj);
                this['Jh'][dS * u8['Z']['Er'] * u8['Z']['Er'] + dp * u8['Z']['Er'] + dj] = dV,
                dy !== dV && this['Zh'](!0x0),
                dy === uA['k']['Kh'] && dV !== uA['k']['Kh'] ? ++this['Nh'] : dy !== uA['k']['Kh'] && dV === uA['k']['Kh'] && --this['Nh'];
            }
            ,
            dF['nc'] = function(dS, dp, dj) {
                return (0x0,
                uJ['XX'])(this['Bh']['x'] * u8['Z']['Er'] + dS, this['Bh']['y'] * u8['Z']['Er'] + dp, this['Bh']['z'] * u8['Z']['Er'] + dj);
            }
            ,
            dF['br'] = function() {
                return 0x0 === this['Nh'];
            }
            ,
            dF['Zh'] = function(dS) {
                this['Gh'] || (this['Yh']['pe'](this['Yh']['Ze']() + 0x1),
                this['Gh'] = !0x0,
                dS ? this['Yh']['tx'](this) : this['Yh']['ix'](this));
            }
            ,
            dF['sx'] = function() {
                this['Gh'] && (this['Yh']['pe'](this['Yh']['Ze']() - 0x1),
                this['Gh'] = !0x1);
            }
            ,
            dF['hx'] = function() {
                return this['Jh'];
            }
            ,
            dF['nx'] = function() {
                return this['Bh'];
            }
            ,
            de;
        }())
          , ue = u2(0xa888)
          , uF = (function() {
            function de(dF) {
                this['_dirVector'] = dF;
            }
            return (0x0,
            ue['Z'])(de, [{
                'key': 'dir',
                'get': function() {
                    return (0x0,
                    uJ['dg'])(this['_dirVector']);
                }
            }], [{
                'key': 'immediateNeighbors',
                'get': function() {
                    return [de['UP'], de['DOWN'], de['FRONT'], de['BACK'], de['RIGHT'], de['LEFT']];
                }
            }, {
                'key': 'secondaryNeighbors',
                'get': function() {
                    return [de['UP_LEFT'], de['UP_RIGHT'], de['UP_FRONT'], de['UP_BACK'], de['DOWN_LEFT'], de['DOWN_RIGHT'], de['DOWN_FRONT'], de['DOWN_BACK'], de['LEFT_FRONT'], de['FRONT_RIGHT'], de['RIGHT_BACK'], de['BACK_LEFT']];
                }
            }, {
                'key': 'tertiaryNeighbors',
                'get': function() {
                    return [de['RIGHT_UP_BACK'], de['RIGHT_UP_FRONT'], de['RIGHT_DOWN_BACK'], de['RIGHT_DOWN_FRONT'], de['LEFT_UP_BACK'], de['LEFT_UP_FRONT'], de['LEFT_DOWN_BACK'], de['LEFT_DOWN_FRONT']];
                }
            }, {
                'key': 'values',
                'get': function() {
                    return [de['UP'], de['DOWN'], de['FRONT'], de['BACK'], de['RIGHT'], de['LEFT'], de['UP_LEFT'], de['UP_RIGHT'], de['UP_FRONT'], de['UP_BACK'], de['DOWN_LEFT'], de['DOWN_RIGHT'], de['DOWN_FRONT'], de['DOWN_BACK'], de['LEFT_FRONT'], de['FRONT_RIGHT'], de['RIGHT_BACK'], de['BACK_LEFT'], de['RIGHT_UP_BACK'], de['RIGHT_UP_FRONT'], de['RIGHT_DOWN_BACK'], de['RIGHT_DOWN_FRONT'], de['LEFT_UP_BACK'], de['LEFT_UP_FRONT'], de['LEFT_DOWN_BACK'], de['LEFT_DOWN_FRONT']];
                }
            }]),
            de;
        }());
        uF['UP'] = new uF((0x0,
        uJ['XX'])(0x0, 0x1, 0x0)),
        uF['DOWN'] = new uF((0x0,
        uJ['XX'])(0x0, -0x1, 0x0)),
        uF['FRONT'] = new uF((0x0,
        uJ['XX'])(0x0, 0x0, 0x1)),
        uF['BACK'] = new uF((0x0,
        uJ['XX'])(0x0, 0x0, -0x1)),
        uF['LEFT'] = new uF((0x0,
        uJ['XX'])(0x1, 0x0, 0x0)),
        uF['RIGHT'] = new uF((0x0,
        uJ['XX'])(-0x1, 0x0, 0x0)),
        uF['UP_LEFT'] = new uF((0x0,
        uJ['XX'])(0x1, 0x1, 0x0)),
        uF['UP_RIGHT'] = new uF((0x0,
        uJ['XX'])(-0x1, 0x1, 0x0)),
        uF['UP_FRONT'] = new uF((0x0,
        uJ['XX'])(0x0, 0x1, 0x1)),
        uF['UP_BACK'] = new uF((0x0,
        uJ['XX'])(0x0, 0x1, -0x1)),
        uF['DOWN_LEFT'] = new uF((0x0,
        uJ['XX'])(0x1, -0x1, 0x0)),
        uF['DOWN_RIGHT'] = new uF((0x0,
        uJ['XX'])(-0x1, -0x1, 0x0)),
        uF['DOWN_FRONT'] = new uF((0x0,
        uJ['XX'])(0x0, -0x1, 0x1)),
        uF['DOWN_BACK'] = new uF((0x0,
        uJ['XX'])(0x0, -0x1, -0x1)),
        uF['LEFT_FRONT'] = new uF((0x0,
        uJ['XX'])(0x1, 0x0, 0x1)),
        uF['FRONT_RIGHT'] = new uF((0x0,
        uJ['XX'])(-0x1, 0x0, 0x1)),
        uF['RIGHT_BACK'] = new uF((0x0,
        uJ['XX'])(-0x1, 0x0, -0x1)),
        uF['BACK_LEFT'] = new uF((0x0,
        uJ['XX'])(0x1, 0x0, -0x1)),
        uF['RIGHT_UP_BACK'] = new uF((0x0,
        uJ['XX'])(-0x1, 0x1, -0x1)),
        uF['RIGHT_UP_FRONT'] = new uF((0x0,
        uJ['XX'])(-0x1, 0x1, 0x1)),
        uF['RIGHT_DOWN_BACK'] = new uF((0x0,
        uJ['XX'])(-0x1, -0x1, -0x1)),
        uF['RIGHT_DOWN_FRONT'] = new uF((0x0,
        uJ['XX'])(-0x1, -0x1, 0x1)),
        uF['LEFT_UP_BACK'] = new uF((0x0,
        uJ['XX'])(0x1, 0x1, -0x1)),
        uF['LEFT_UP_FRONT'] = new uF((0x0,
        uJ['XX'])(0x1, 0x1, 0x1)),
        uF['LEFT_DOWN_BACK'] = new uF((0x0,
        uJ['XX'])(0x1, -0x1, -0x1)),
        uF['LEFT_DOWN_FRONT'] = new uF((0x0,
        uJ['XX'])(0x1, -0x1, 0x1));
        var uS = (function() {
            function de() {
                this['xx'] = new Set(),
                this['ux'] = void 0x0,
                this['ox'] = void 0x0;
            }
            var dF = de['prototype'];
            return dF['vx'] = function(dS) {
                if (!this['xx']['has'](dS)) {
                    this['xx']['add'](dS);
                    var dp = {
                        'lx': dS,
                        'mx': void 0x0
                    };
                    void 0x0 === this['ux'] ? this['ux'] = this['ox'] = dp : (this['ox']['mx'] = dp,
                    this['ox'] = dp);
                }
            }
            ,
            dF['zx'] = function() {
                if (void 0x0 !== this['ux']) {
                    if (this['ux'] === this['ox']) {
                        var dS = this['ux']['lx'];
                        return this['xx']['delete'](dS),
                        this['ux'] = this['ox'] = void 0x0,
                        dS;
                    }
                    var dp = this['ux']['lx'];
                    return this['xx']['delete'](dp),
                    this['ux'] = this['ux']['mx'],
                    dp;
                }
            }
            ,
            dF['yx'] = function(dS) {
                if (!this['xx']['has'](dS)) {
                    this['xx']['add'](dS);
                    var dp = {
                        'lx': dS,
                        'mx': void 0x0
                    };
                    void 0x0 === this['ux'] ? this['ux'] = this['ox'] = dp : (dp['mx'] = this['ux'],
                    this['ux'] = dp);
                }
            }
            ,
            de;
        }());
        function up(de, dF) {
            var dS = 'undefined' != typeof Symbol && de[Symbol['iterator']] || de['@@iterator'];
            if (dS)
                return (dS = dS['call'](de))['next']['bind'](dS);
            if (Array['isArray'](de) || (dS = function(dj, dV) {
                if (!dj)
                    return;
                if ('string' == typeof dj)
                    return uj(dj, dV);
                var dy = Object['prototype']['toString']['call'](dj)['slice'](0x8, -0x1);
                'Object' === dy && dj['constructor'] && (dy = dj['constructor']['name']);
                if ('Map' === dy || 'Set' === dy)
                    return Array['from'](dj);
                if ('Arguments' === dy || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/['test'](dy))
                    return uj(dj, dV);
            }(de)) || dF && de && 'number' == typeof de['length']) {
                dS && (de = dS);
                var dp = 0x0;
                return function() {
                    return dp >= de['length'] ? {
                        'done': !0x0
                    } : {
                        'done': !0x1,
                        'value': de[dp++]
                    };
                }
                ;
            }
            throw new TypeError('Invalid\x20attempt\x20to\x20iterate\x20non-iterable\x20instance.\x0aIn\x20order\x20to\x20be\x20iterable,\x20non-array\x20objects\x20must\x20have\x20a\x20[Symbol.iterator]()\x20method.');
        }
        function uj(de, dF) {
            (null == dF || dF > de['length']) && (dF = de['length']);
            for (var dS = 0x0, dp = new Array(dF); dS < dF; dS++)
                dp[dS] = de[dS];
            return dp;
        }
        var uV = (function() {
            function de(dS, dp) {
                this['wx'] = dS,
                this['$x'] = dp,
                this['bx'] = new Map(),
                this['qx'] = 0x0,
                this['kx'] = new uS();
            }
            var dF = de['prototype'];
            return dF['gx'] = function() {
                return this['wx'];
            }
            ,
            dF['Cx'] = function() {
                return this['$x'];
            }
            ,
            dF['Xx'] = function() {
                return this['bx'];
            }
            ,
            dF['ix'] = function(dS) {
                this['kx']['vx'](dS['Qh']());
            }
            ,
            dF['tx'] = function(dS) {
                this['kx']['yx'](dS['Qh']());
            }
            ,
            dF['Mx'] = function() {
                for (var dS = this['kx']['zx'](); void 0x0 !== dS; ) {
                    var dp = this['bx']['get'](dS);
                    if (void 0x0 !== dp)
                        return dp;
                    dS = this['kx']['zx']();
                }
            }
            ,
            dF['pe'] = function(dS) {
                this['qx'] = dS;
            }
            ,
            dF['Ze'] = function() {
                return this['qx'];
            }
            ,
            dF['nx'] = function(dS, dp, dj) {
                return (0x0,
                uJ['XX'])(Math['floor'](dS / u8['Z']['Er']), Math['floor'](dp / u8['Z']['Er']), Math['floor'](dj / u8['Z']['Er']));
            }
            ,
            dF['Sx'] = function(dS, dp, dj) {
                return (0x0,
                uJ['XX'])(0x0 | (0x0,
                um['wQ'])(dS, u8['Z']['Er']), 0x0 | (0x0,
                um['wQ'])(dp, u8['Z']['Er']), 0x0 | (0x0,
                um['wQ'])(dj, u8['Z']['Er']));
            }
            ,
            dF['Ax'] = function(dS, dp, dj) {
                return (0x0,
                uJ['XX'])(Math['floor'](dS), Math['floor'](dp), Math['floor'](dj));
            }
            ,
            dF['Rx'] = function(dS, dp, dj) {
                return (0x0,
                uJ['XX'])((Math['floor'](dS) + 0.5) * u8['Z']['Ir'], (Math['floor'](dp) + 0.5) * u8['Z']['Ir'], (Math['floor'](dj) + 0.5) * u8['Z']['Ir']);
            }
            ,
            dF['Tx'] = function(dS, dp, dj) {
                return dS >= this['wx']['x'] && dp >= this['wx']['y'] && dj >= this['wx']['z'] && dS <= this['$x']['x'] && dp <= this['$x']['y'] && dj <= this['$x']['z'];
            }
            ,
            dF['Uh'] = function(dS, dp, dj) {
                return this['bx']['has'](uL(dS, dp, dj));
            }
            ,
            dF['jx'] = function(dS, dp, dj) {
                return this['bx']['get'](uL(dS, dp, dj));
            }
            ,
            dF['Ix'] = function(dS, dp, dj, dV, dy) {
                var dM = new uN(this,(0x0,
                uJ['XX'])(dS, dp, dj),dV,dy);
                return this['bx']['set'](dM['Qh'](), dM),
                this['Ux'](dS, dp, dj, !0x1),
                dM;
            }
            ,
            dF['Wx'] = function(dS, dp, dj) {
                this['Uh'](dS, dp, dj) && (this['jx'](dS, dp, dj)['sx'](),
                this['bx']['delete'](uL(dS, dp, dj)));
            }
            ,
            dF['Px'] = function(dS, dp, dj) {
                var dV = this['nx'](dS, dp, dj);
                if (!this['Uh'](dV['x'], dV['y'], dV['z']))
                    return uA['k']['Kh'];
                var dy = this['jx'](dV['x'], dV['y'], dV['z'])
                  , dM = this['Sx'](dS, dp, dj);
                return dy['bn'](dM['x'], dM['y'], dM['z']);
            }
            ,
            dF['Lx'] = function(dS, dp, dj, dV) {
                var dy = this['nx'](dS, dp, dj);
                if (this['Uh'](dy['x'], dy['y'], dy['z'])) {
                    var dM = this['jx'](dy['x'], dy['y'], dy['z'])
                      , dK = this['Sx'](dS, dp, dj);
                    dM['On'](dK['x'], dK['y'], dK['z'], dV);
                    for (var da, df = up(uF['values']); !(da = df())['done']; ) {
                        var dl = da['value'];
                        (0x1 === dl['dir']['x'] && dK['x'] === u8['Z']['Er'] - 0x1 || -0x1 === dl['dir']['x'] && 0x0 === dK['x'] || 0x0 === dl['dir']['x']) && (0x1 === dl['dir']['y'] && dK['y'] === u8['Z']['Er'] - 0x1 || -0x1 === dl['dir']['y'] && 0x0 === dK['y'] || 0x0 === dl['dir']['y']) && (0x1 === dl['dir']['z'] && dK['z'] === u8['Z']['Er'] - 0x1 || -0x1 === dl['dir']['z'] && 0x0 === dK['z'] || 0x0 === dl['dir']['z']) && this['Ox'](dy['x'], dy['y'], dy['z'], dl['dir']['x'], dl['dir']['y'], dl['dir']['z'], !0x0);
                    }
                }
            }
            ,
            dF['Hx'] = function(dS, dp, dj, dV) {
                this['Uh'](dS, dp, dj) && this['jx'](dS, dp, dj)['Zh'](dV);
            }
            ,
            dF['Ox'] = function(dS, dp, dj, dV, dy, dM, dK) {
                this['Hx'](dS + dV, dp + dy, dj + dM, dK);
            }
            ,
            dF['Ux'] = function(dS, dp, dj, dV) {
                for (var dy, dM = up(uF['values']); !(dy = dM())['done']; ) {
                    var dK = dy['value'];
                    this['Ox'](dS, dp, dj, dK['dir']['x'], dK['dir']['y'], dK['dir']['z'], dV);
                }
            }
            ,
            de;
        }())
          , uy = (function() {
            function de(dS, dp, dj, dV) {
                this['Ex'] = dS,
                this['Yh'] = dp,
                this['Yx'] = dj,
                this['qh'] = dV,
                this['Fx'] = 0x0,
                this['Bx'] = -0x1;
            }
            var dF = de['prototype'];
            return dF['jh'] = function() {
                this['Nx'] && (this['qh']['_x']()['remove'](this['Nx']),
                this['Nx']['geometry']['dispose'](),
                this['Nx'] = void 0x0),
                this['Jx'] && (this['qh']['_x']()['remove'](this['Jx']),
                this['Jx']['geometry']['dispose'](),
                this['Jx'] = void 0x0);
            }
            ,
            dF['Kx'] = function(dS, dp, dj) {
                dS < this['Bx'] || (this['Bx'] = dS,
                this['jh'](),
                dp && (this['Nx'] = dp,
                this['Nx']['scale']['set'](u8['Z']['Ir'], u8['Z']['Ir'], u8['Z']['Ir']),
                this['Nx']['position']['set'](this['Yx']['nx']()['x'] * (u8['Z']['Er'] * u8['Z']['Ir']), this['Yx']['nx']()['y'] * (u8['Z']['Er'] * u8['Z']['Ir']), this['Yx']['nx']()['z'] * (u8['Z']['Er'] * u8['Z']['Ir'])),
                this['Nx']['matrixAutoUpdate'] = !0x1,
                this['Nx']['updateMatrix'](),
                this['qh']['_x']()['add'](this['Nx'])),
                dj && (this['Jx'] = dj,
                this['Jx']['scale']['set'](u8['Z']['Ir'], u8['Z']['Ir'], u8['Z']['Ir']),
                this['Jx']['position']['set'](this['Yx']['nx']()['x'] * (u8['Z']['Er'] * u8['Z']['Ir']), this['Yx']['nx']()['y'] * (u8['Z']['Er'] * u8['Z']['Ir']), this['Yx']['nx']()['z'] * (u8['Z']['Er'] * u8['Z']['Ir'])),
                this['Jx']['matrixAutoUpdate'] = !0x1,
                this['Jx']['updateMatrix'](),
                this['qh']['_x']()['add'](this['Jx'])));
            }
            ,
            dF['Gx'] = function(dS) {
                if (this['Yx']['br']())
                    this['jh']();
                else {
                    for (var dp = [], dj = [], dV = [], dy = [], dM = [], dK = [], da = this['Yh']['Uh'](this['Yx']['nx']()['x'] + 0x1, this['Yx']['nx']()['y'], this['Yx']['nx']()['z']), df = this['Yh']['jx'](this['Yx']['nx']()['x'] + 0x1, this['Yx']['nx']()['y'], this['Yx']['nx']()['z']), dl = this['Yh']['Uh'](this['Yx']['nx']()['x'] - 0x1, this['Yx']['nx']()['y'], this['Yx']['nx']()['z']), dZ = this['Yh']['jx'](this['Yx']['nx']()['x'] - 0x1, this['Yx']['nx']()['y'], this['Yx']['nx']()['z']), dw = this['Yh']['Uh'](this['Yx']['nx']()['x'], this['Yx']['nx']()['y'] + 0x1, this['Yx']['nx']()['z']), dE = this['Yh']['jx'](this['Yx']['nx']()['x'], this['Yx']['nx']()['y'] + 0x1, this['Yx']['nx']()['z']), dv = this['Yh']['Uh'](this['Yx']['nx']()['x'], this['Yx']['nx']()['y'] - 0x1, this['Yx']['nx']()['z']), dg = this['Yh']['jx'](this['Yx']['nx']()['x'], this['Yx']['nx']()['y'] - 0x1, this['Yx']['nx']()['z']), dQ = this['Yh']['Uh'](this['Yx']['nx']()['x'], this['Yx']['nx']()['y'], this['Yx']['nx']()['z'] + 0x1), dO = this['Yh']['jx'](this['Yx']['nx']()['x'], this['Yx']['nx']()['y'], this['Yx']['nx']()['z'] + 0x1), dY = this['Yh']['Uh'](this['Yx']['nx']()['x'], this['Yx']['nx']()['y'], this['Yx']['nx']()['z'] - 0x1), dP = this['Yh']['jx'](this['Yx']['nx']()['x'], this['Yx']['nx']()['y'], this['Yx']['nx']()['z'] - 0x1), dB = this['Yx']['nc'](u8['Z']['Er'], u8['Z']['Er'], u8['Z']['Er']), dU = this['Yh']['Px'](dB['x'], dB['y'], dB['z']), dD = this['Yx']['nc'](-0x1, u8['Z']['Er'], u8['Z']['Er']), J0 = this['Yh']['Px'](dD['x'], dD['y'], dD['z']), J1 = this['Yx']['nc'](u8['Z']['Er'], u8['Z']['Er'], -0x1), J2 = this['Yh']['Px'](J1['x'], J1['y'], J1['z']), J3 = this['Yx']['nc'](-0x1, u8['Z']['Er'], -0x1), J4 = this['Yh']['Px'](J3['x'], J3['y'], J3['z']), J5 = this['Yx']['nc'](u8['Z']['Er'], -0x1, u8['Z']['Er']), J6 = this['Yh']['Px'](J5['x'], J5['y'], J5['z']), J7 = this['Yx']['nc'](-0x1, -0x1, u8['Z']['Er']), J8 = this['Yh']['Px'](J7['x'], J7['y'], J7['z']), J9 = this['Yx']['nc'](u8['Z']['Er'], -0x1, -0x1), Ju = this['Yh']['Px'](J9['x'], J9['y'], J9['z']), Jc = this['Yx']['nc'](-0x1, -0x1, -0x1), Jz = this['Yh']['Px'](Jc['x'], Jc['y'], Jc['z']), Jq = [], Jd = [], JJ = [], Jk = [], Jr = [], JT = [], Jm = [], Jx = [], JX = [], JI = [], JC = [], JG = [], Jn = this['Yh']['Uh'](this['Yx']['nx']()['x'] + 0x1, this['Yx']['nx']()['y'], this['Yx']['nx']()['z'] + 0x1), JW = this['Yh']['jx'](this['Yx']['nx']()['x'] + 0x1, this['Yx']['nx']()['y'], this['Yx']['nx']()['z'] + 0x1), JR = this['Yh']['Uh'](this['Yx']['nx']()['x'] - 0x1, this['Yx']['nx']()['y'], this['Yx']['nx']()['z'] + 0x1), Jb = this['Yh']['jx'](this['Yx']['nx']()['x'] - 0x1, this['Yx']['nx']()['y'], this['Yx']['nx']()['z'] + 0x1), JA = this['Yh']['Uh'](this['Yx']['nx']()['x'] + 0x1, this['Yx']['nx']()['y'], this['Yx']['nx']()['z'] - 0x1), JL = this['Yh']['jx'](this['Yx']['nx']()['x'] + 0x1, this['Yx']['nx']()['y'], this['Yx']['nx']()['z'] - 0x1), JH = this['Yh']['Uh'](this['Yx']['nx']()['x'] - 0x1, this['Yx']['nx']()['y'], this['Yx']['nx']()['z'] - 0x1), JN = this['Yh']['jx'](this['Yx']['nx']()['x'] - 0x1, this['Yx']['nx']()['y'], this['Yx']['nx']()['z'] - 0x1), Je = this['Yh']['Uh'](this['Yx']['nx']()['x'], this['Yx']['nx']()['y'] + 0x1, this['Yx']['nx']()['z'] + 0x1), JF = this['Yh']['jx'](this['Yx']['nx']()['x'], this['Yx']['nx']()['y'] + 0x1, this['Yx']['nx']()['z'] + 0x1), JS = this['Yh']['Uh'](this['Yx']['nx']()['x'], this['Yx']['nx']()['y'] + 0x1, this['Yx']['nx']()['z'] - 0x1), Jh = this['Yh']['jx'](this['Yx']['nx']()['x'], this['Yx']['nx']()['y'] + 0x1, this['Yx']['nx']()['z'] - 0x1), Jp = this['Yh']['Uh'](this['Yx']['nx']()['x'] + 0x1, this['Yx']['nx']()['y'] + 0x1, this['Yx']['nx']()['z']), Jj = this['Yh']['jx'](this['Yx']['nx']()['x'] + 0x1, this['Yx']['nx']()['y'] + 0x1, this['Yx']['nx']()['z']), JV = this['Yh']['Uh'](this['Yx']['nx']()['x'] - 0x1, this['Yx']['nx']()['y'] + 0x1, this['Yx']['nx']()['z']), Jy = this['Yh']['jx'](this['Yx']['nx']()['x'] - 0x1, this['Yx']['nx']()['y'] + 0x1, this['Yx']['nx']()['z']), JM = this['Yh']['Uh'](this['Yx']['nx']()['x'], this['Yx']['nx']()['y'] - 0x1, this['Yx']['nx']()['z'] + 0x1), JK = this['Yh']['jx'](this['Yx']['nx']()['x'], this['Yx']['nx']()['y'] - 0x1, this['Yx']['nx']()['z'] + 0x1), Ja = this['Yh']['Uh'](this['Yx']['nx']()['x'], this['Yx']['nx']()['y'] - 0x1, this['Yx']['nx']()['z'] - 0x1), Jf = this['Yh']['jx'](this['Yx']['nx']()['x'], this['Yx']['nx']()['y'] - 0x1, this['Yx']['nx']()['z'] - 0x1), Jl = this['Yh']['Uh'](this['Yx']['nx']()['x'] + 0x1, this['Yx']['nx']()['y'] - 0x1, this['Yx']['nx']()['z']), JZ = this['Yh']['jx'](this['Yx']['nx']()['x'] + 0x1, this['Yx']['nx']()['y'] - 0x1, this['Yx']['nx']()['z']), Jw = this['Yh']['Uh'](this['Yx']['nx']()['x'] - 0x1, this['Yx']['nx']()['y'] - 0x1, this['Yx']['nx']()['z']), JE = this['Yh']['jx'](this['Yx']['nx']()['x'] - 0x1, this['Yx']['nx']()['y'] - 0x1, this['Yx']['nx']()['z']), Jv = 0x0; Jv < u8['Z']['Er']; Jv++) {
                        dp[Jv] = [],
                        dj[Jv] = [],
                        dV[Jv] = [],
                        dy[Jv] = [],
                        dM[Jv] = [],
                        dK[Jv] = [];
                        for (var Jo = 0x0; Jo < u8['Z']['Er']; Jo++)
                            dp[Jv][Jo] = da ? df['bn'](0x0, Jv, Jo) : uA['k']['Kh'],
                            dj[Jv][Jo] = dl ? dZ['bn'](u8['Z']['Er'] - 0x1, Jv, Jo) : uA['k']['Kh'],
                            dV[Jv][Jo] = dw ? dE['bn'](Jv, 0x0, Jo) : uA['k']['Kh'],
                            dy[Jv][Jo] = dv ? dg['bn'](Jv, u8['Z']['Er'] - 0x1, Jo) : uA['k']['Kh'],
                            dM[Jv][Jo] = dQ ? dO['bn'](Jv, Jo, 0x0) : uA['k']['Kh'],
                            dK[Jv][Jo] = dY ? dP['bn'](Jv, Jo, u8['Z']['Er'] - 0x1) : uA['k']['Kh'];
                        Jq[Jv] = Jn ? JW['bn'](0x0, Jv, 0x0) : uA['k']['Kh'],
                        Jd[Jv] = JR ? Jb['bn'](u8['Z']['Er'] - 0x1, Jv, 0x0) : uA['k']['Kh'],
                        JJ[Jv] = JA ? JL['bn'](0x0, Jv, u8['Z']['Er'] - 0x1) : uA['k']['Kh'],
                        Jk[Jv] = JH ? JN['bn'](u8['Z']['Er'] - 0x1, Jv, u8['Z']['Er'] - 0x1) : uA['k']['Kh'],
                        Jr[Jv] = Je ? JF['bn'](Jv, 0x0, 0x0) : uA['k']['Kh'],
                        JT[Jv] = JS ? Jh['bn'](Jv, 0x0, u8['Z']['Er'] - 0x1) : uA['k']['Kh'],
                        Jm[Jv] = Jp ? Jj['bn'](0x0, 0x0, Jv) : uA['k']['Kh'],
                        Jx[Jv] = JV ? Jy['bn'](u8['Z']['Er'] - 0x1, 0x0, Jv) : uA['k']['Kh'],
                        JX[Jv] = JM ? JK['bn'](Jv, u8['Z']['Er'] - 0x1, 0x0) : uA['k']['Kh'],
                        JI[Jv] = Ja ? Jf['bn'](Jv, u8['Z']['Er'] - 0x1, u8['Z']['Er'] - 0x1) : uA['k']['Kh'],
                        JC[Jv] = Jl ? JZ['bn'](0x0, u8['Z']['Er'] - 0x1, Jv) : uA['k']['Kh'],
                        JG[Jv] = Jw ? JE['bn'](u8['Z']['Er'] - 0x1, u8['Z']['Er'] - 0x1, Jv) : uA['k']['Kh'];
                    }
                    this['Ex']['Vh'](++this['Fx'], this['Yx']['nx'](), this['Yx']['hx'](), dV, dy, dp, dj, dM, dK, dU, J0, J2, J4, J6, J8, Ju, Jz, Jq, Jd, JJ, Jk, Jr, JT, Jm, Jx, JX, JI, JC, JG, dS);
                }
            }
            ,
            de;
        }())
          , uM = (function() {
            function de(dS) {
                var dp = this;
                this['gs'] = function(dj, dV) {
                    for (var dy = 0x0; dy < dp['Qx']['length']; dy++) {
                        var dM = dp['Qx'][dy]
                          , dK = dM['eu']['position'];
                        dM['eu']['position']['set'](dK['x'], dK['y'] - 0x2 * dj, dK['z']);
                        var da = new u7['Pa4'](0x1,0x0,0x1);
                        da['normalize'](),
                        dM['eu']['rotateOnAxis'](da, 1.5 * dj),
                        dM['eu']['position']['y'] < dM['io'] - 0x5 * u8['Z']['Ir'] && (dp['qh']['no']()['Ms']()['remove'](dM['eu']),
                        dM['eu']['geometry']['dispose'](),
                        dp['Qx'][dy] = dp['Qx'][dp['Qx']['length'] - 0x1],
                        dp['Qx']['pop'](),
                        --dy);
                    }
                }
                ,
                this['qh'] = dS,
                this['Qx'] = [];
            }
            var dF = de['prototype'];
            return dF['do'] = function(dS) {
                this['Qx']['push']({
                    'eu': dS,
                    'io': dS['position']['y']
                }),
                this['qh']['no']()['Ms']()['add'](dS);
            }
            ,
            dF['jh'] = function() {
                for (var dS = 0x0; dS < this['Qx']['length']; dS++) {
                    var dp = this['Qx'][dS];
                    dp['eu']['geometry']['dispose'](),
                    this['qh']['no']()['Ms']()['remove'](dp['eu']);
                }
            }
            ,
            de;
        }())
          , uK = u2(0x13dd)
          , ua = u2(0x1661b)
          , uf = (function() {
            function de(dS) {
                var dp = this;
                this['gs'] = function(dK, da) {}
                ,
                this['mh'] = function(dK) {
                    for (var da = Date['now'](), df = 0x0, dl = Object['entries'](dp['Lo']); df < dl['length']; df++) {
                        var dZ = dl[df]
                          , dw = dZ[0x0]
                          , dE = dZ[0x1];
                        if (da - dE['tf'] >= 0xbb8) {
                            if (dE['bi'] = Math['max'](0x0, dE['bi'] - (0x0,
                            ua['Gc'])(0x1) / 0x4),
                            dE['bi'] <= 0x0)
                                dp['tv'](dw);
                            else {
                                var dv = uK['Z'][dp['qh']['Wh']()['Px'](dE['iv']['x'], dE['iv']['y'], dE['iv']['z'])]['v'];
                                dE['sv'] >= 0x0 && dE['sv'] < u8['Z']['Ar'] && (dE['hv'] = Math['max'](0x0, Math['min'](0x1, dE['bi'] / dv)),
                                dp['nv']['set']([dE['hv']], dE['sv']),
                                dp['nv']['needsUpdate'] = !0x0);
                            }
                        }
                    }
                }
                ,
                this['qh'] = dS,
                this['Lo'] = {},
                this['cv'] = [];
                for (var dj = new u7['nvb'](u8['Z']['Ir'],u8['Z']['Ir'],u8['Z']['Ir']), dV = new u7['vBJ']({
                    'transparent': !0x0,
                    'map': u9['Z']['Sh'](),
                    'blending': u7['M5h'],
                    'fog': !0x1
                }), dy = [], dM = 0x0; dM < u8['Z']['Ar']; dM++)
                    dy['push'](0x0);
                this['nv'] = new u7['lb7'](new Float32Array(dy),0x1),
                dj['setAttribute']('instanceCrack', this['nv']),
                dV['onBeforeCompile'] = function(dK) {
                    dK['vertexShader'] = dK['vertexShader']['replace']('#include\x20<common>', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20attribute\x20float\x20instanceCrack;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20float\x20vInstanceCrack;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#include\x20<common>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20')['replace']('#include\x20<begin_vertex>', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#include\x20<begin_vertex>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vInstanceCrack\x20=\x20instanceCrack;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'),
                    dK['fragmentShader'] = dK['fragmentShader']['replace']('#include\x20<common>', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20float\x20vInstanceCrack;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#include\x20<common>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20')['replace']('#include\x20<map_fragment>', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20atlasDim\x20=\x20' + u8['Z']['ur']['toFixed'](0x1) + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20rawUv\x20=\x20vec2(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20fract(vUv.x)\x20/\x20atlasDim,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20fract(vUv.y)\x20/\x20atlasDim\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20crackU\x20=\x20floor(vInstanceCrack\x20*\x205.0)\x20/\x20atlasDim;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20crackV\x20=\x207.0\x20/\x20atlasDim;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20crackTexture\x20=\x20sRGBToLinear(texture2D(map,\x20vec2(rawUv.x\x20+\x20crackU,\x20rawUv.y\x20+\x20crackV)));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20identity\x20=\x20vec4(1.0,\x201.0,\x201.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20hasPixel\x20=\x20step(0.5,\x20crackTexture.a);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20crackTexture\x20=\x20(1.0\x20-\x20hasPixel)\x20*\x20identity\x20+\x20hasPixel\x20*\x20crackTexture;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20diffuseColor\x20=\x20crackTexture;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20');
                }
                ,
                this['rv'] = new u7['SPe'](dj,dV,u8['Z']['Ar']),
                this['qh']['no']()['Ms']()['add'](this['rv']),
                this['rv']['count'] = this['cv']['length'],
                this['ev'] = new u7['Tme'](),
                this['ev']['scale']['set'](1.002, 1.002, 1.002);
            }
            var dF = de['prototype'];
            return dF['xv'] = function(dS, dp, dj, dV, dy) {
                var dM = (0x0,
                uJ['XX'])(dS, dp, dj)
                  , dK = uH(dS, dp, dj)
                  , da = uK['Z'][this['qh']['Wh']()['Px'](dM['x'], dM['y'], dM['z'])]['v'];
                dV = Math['min'](da, dV);
                var df = Math['max'](0x0, Math['min'](dV / da))
                  , dl = this['uv'](dS, dp, dj) / da;
                if (dK in this['Lo'])
                    this['Lo'][dK]['bi'] = dV,
                    this['Lo'][dK]['hv'] = df,
                    this['Lo'][dK]['tf'] = Date['now']();
                else {
                    var dZ = this['cv']['length']
                      , dw = {
                        'bi': dV,
                        'hv': df,
                        'tf': Date['now'](),
                        'iv': dM,
                        'sv': dZ
                    };
                    if (this['Lo'][dK] = dw,
                    this['cv']['push'](dw),
                    dZ >= 0x0 && dZ < u8['Z']['Ar']) {
                        var dE = this['qh']['Wh']()['Rx'](dS, dp, dj);
                        this['ev']['position']['set'](dE['x'], dE['y'], dE['z']),
                        this['ev']['updateMatrix'](),
                        this['rv']['setMatrixAt'](dZ, this['ev']['matrix']),
                        this['rv']['count'] = Math['min'](u8['Z']['Ar'], this['cv']['length']),
                        this['rv']['instanceMatrix']['needsUpdate'] = !0x0;
                    }
                }
                var dv = df;
                if (this['Lo'][dK]['sv'] >= 0x0 && this['Lo'][dK]['sv'] < u8['Z']['Ar'] && (this['nv']['set']([df], this['Lo'][dK]['sv']),
                this['nv']['needsUpdate'] = !0x0),
                this['Lo'][dK]['bi'] >= da)
                    dy && this['qh']['no']()['fv']()['ov']()['av'](dM['x'], dM['y'], dM['z'], uA['k']['Kh']),
                    this['tv'](dK);
                else {
                    if (dy) {
                        if (dl < dv && Math['floor'](dl / 0.2) !== Math['floor'](dv / 0.2)) {
                            var dg = this['qh']['Wh']()['Px'](dS, dp, dj)
                              , dQ = this['qh']['Wh']()['Rx'](dS, dp, dj)
                              , dO = uK['Z'][dg]['q'];
                            void 0x0 !== dO && this['qh']['no']()['fv']()['vv'](dQ, dO, -0x4b0, 0x1, 0x28 * u8['Z']['Ir'], 0x5 * u8['Z']['Ir'], 0x4);
                        }
                    }
                }
            }
            ,
            dF['lv'] = function(dS, dp, dj) {
                var dV = uH(dS, dp, dj);
                this['tv'](dV);
            }
            ,
            dF['tv'] = function(dS) {
                if (dS in this['Lo']) {
                    if (this['cv']['length'] > 0x1) {
                        var dp = this['Lo'][dS]
                          , dj = this['cv'][this['cv']['length'] - 0x1];
                        if (this['cv'][dp['sv']] = dj,
                        dj['sv'] = dp['sv'],
                        dj['sv'] >= 0x0 && dj['sv'] < u8['Z']['Ar']) {
                            var dV = this['qh']['Wh']()['Rx'](dj['iv']['x'], dj['iv']['y'], dj['iv']['z']);
                            this['ev']['position']['set'](dV['x'], dV['y'], dV['z']),
                            this['ev']['updateMatrix'](),
                            this['rv']['setMatrixAt'](dj['sv'], this['ev']['matrix']),
                            this['nv']['set']([dj['hv']], dj['sv']),
                            this['nv']['needsUpdate'] = !0x0;
                        }
                    }
                    delete this['Lo'][dS],
                    this['cv']['pop'](),
                    this['rv']['count'] = Math['min'](u8['Z']['Ar'], this['cv']['length']),
                    this['rv']['instanceMatrix']['needsUpdate'] = !0x0;
                }
            }
            ,
            dF['uv'] = function(dS, dp, dj) {
                var dV = uH(dS, dp, dj);
                return dV in this['Lo'] ? this['Lo'][dV]['bi'] : 0x0;
            }
            ,
            dF['mv'] = function(dS, dp, dj, dV, dy) {
                this['xv'](dS, dp, dj, this['uv'](dS, dp, dj) + dV, dy);
            }
            ,
            dF['jh'] = function() {}
            ,
            de;
        }())
          , ul = u2(0x919b);
        function uZ(de, dF) {
            var dS = 'undefined' != typeof Symbol && de[Symbol['iterator']] || de['@@iterator'];
            if (dS)
                return (dS = dS['call'](de))['next']['bind'](dS);
            if (Array['isArray'](de) || (dS = function(dj, dV) {
                if (!dj)
                    return;
                if ('string' == typeof dj)
                    return uw(dj, dV);
                var dy = Object['prototype']['toString']['call'](dj)['slice'](0x8, -0x1);
                'Object' === dy && dj['constructor'] && (dy = dj['constructor']['name']);
                if ('Map' === dy || 'Set' === dy)
                    return Array['from'](dj);
                if ('Arguments' === dy || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/['test'](dy))
                    return uw(dj, dV);
            }(de)) || dF && de && 'number' == typeof de['length']) {
                dS && (de = dS);
                var dp = 0x0;
                return function() {
                    return dp >= de['length'] ? {
                        'done': !0x0
                    } : {
                        'done': !0x1,
                        'value': de[dp++]
                    };
                }
                ;
            }
            throw new TypeError('Invalid\x20attempt\x20to\x20iterate\x20non-iterable\x20instance.\x0aIn\x20order\x20to\x20be\x20iterable,\x20non-array\x20objects\x20must\x20have\x20a\x20[Symbol.iterator]()\x20method.');
        }
        function uw(de, dF) {
            (null == dF || dF > de['length']) && (dF = de['length']);
            for (var dS = 0x0, dp = new Array(dF); dS < dF; dS++)
                dp[dS] = de[dS];
            return dp;
        }
        var uE = (function() {
            function de(dS, dp, dj, dV) {
                var dy = this;
                this['zv'] = function(dM, dK, da, df) {
                    dy['dv']['lv'](dM, dK, da);
                }
                ,
                this['pv'] = function(dM, dK, da, df) {
                    dy['dv']['xv'](dM, dK, da, df, !0x0);
                }
                ,
                this['Ix'] = function(dM, dK, da, df, dl) {
                    if (!dy['Yh']['Uh'](dM, dK, da)) {
                        var dZ = dy['Yh']['Ix'](dM, dK, da, df, dl)
                          , dw = new uy(dy['Ex'],dy['Yh'],dZ,dy);
                        dy['yv']['set'](uL(dM, dK, da), dw);
                    }
                }
                ,
                this['wv'] = function(dM, dK, da) {
                    if (dy['Yh']['Uh'](dM, dK, da)) {
                        var df = uL(dM, dK, da);
                        dy['Yh']['Wx'](dM, dK, da),
                        dy['yv']['get'](df)['jh'](),
                        dy['yv']['delete'](df);
                    }
                }
                ,
                this['$v'] = function(dM, dK, da, df, dl, dZ, dw) {
                    dy['Yh'] = new uV(dZ,dw),
                    dy['bv']();
                }
                ,
                this['bv'] = function() {
                    var dM = 0x46 * (dy['Yh']['Cx']()['y'] - dy['Yh']['gx']()['y']);
                    if ((0x0,
                    uk['Fn'])() === ul['V4']['li']) {
                        var dK = Math['min'](0x1, Math['max'](0x0, dy['Yh']['Xx']()['size'] / dM)) / 0x2;
                        dK >= 0.5 && (dy['qv'] = dy['Yh']['Ze']()),
                        uz['Z']['emit'](uq['x']['kv'], dK >= 0.5 ? ul['V4']['Me'] : ul['V4']['li'], dK),
                        setTimeout(dy['bv'], 0x64);
                    } else {
                        for (var da = 0x0, df = void 0x0; void 0x0 !== (df = dy['Yh']['Mx']()); )
                            if (dy['yv']['get'](df['Qh']())['Gx'](!0x1),
                            df['sx'](),
                            ++da >= 0x14 || 0x0 === dy['Yh']['Ze']()) {
                                var dl = Math['max'](0x0, Math['min'](0x1, 0x1 - dy['Yh']['Ze']() / dy['qv'])) / 0x2 + 0.5;
                                uz['Z']['emit'](uq['x']['kv'], ul['V4']['Me'], dl);
                                break;
                            }
                        dy['Yh']['Ze']() > 0x0 && setTimeout(dy['bv'], 0x0);
                    }
                }
                ,
                this['mh'] = function(dM) {
                    dy['Yh'] && ((0x0,
                    uk['aw'])() >= 0x1 && (dy['gv'](),
                    dy['Ex']['Ih']()),
                    dy['Cv']['Ns'] = dy['Yh']['Xx']()['size'],
                    dy['dv']['mh'](dM));
                }
                ,
                this['gs'] = function(dM, dK) {
                    dy['Xv']['gs'](dM, dK),
                    dy['Ex']['gs'](dM, dK);
                }
                ,
                this['Sv'] = dS,
                this['hs'] = dp,
                this['Dv'] = dj,
                this['Cv'] = dV,
                this['Av'] = new u7['Tme'](),
                this['yv'] = new Map(),
                this['Ex'] = new ub(this,Math['min'](0x3, u8['Z']['$r'])),
                this['Xv'] = new uM(this),
                this['dv'] = new uf(this),
                this['qv'] = 0x0,
                this['Rv']();
            }
            var dF = de['prototype'];
            return dF['Wh'] = function() {
                return this['Yh'];
            }
            ,
            dF['Rv'] = function() {
                uz['Z']['on'](uq['x']['Tv'], this['$v']),
                uz['Z']['on'](uq['x']['jv'], this['Ix']),
                uz['Z']['on'](uq['x']['Iv'], this['wv']),
                uz['Z']['on'](uq['x']['Uv'], this['pv']),
                uz['Z']['on'](uq['x']['Wv'], this['zv']);
            }
            ,
            dF['Pv'] = function() {
                uz['Z']['off'](uq['x']['Tv'], this['$v']),
                uz['Z']['off'](uq['x']['jv'], this['Ix']),
                uz['Z']['off'](uq['x']['Iv'], this['wv']),
                uz['Z']['off'](uq['x']['Uv'], this['pv']),
                uz['Z']['off'](uq['x']['Wv'], this['zv']);
            }
            ,
            dF['jh'] = function() {
                this['Pv']();
                for (var dS, dp = uZ(this['yv']); !(dS = dp())['done']; ) {
                    var dj = dS['value'];
                    dj[0x0],
                    dj[0x1]['jh']();
                }
                this['Ex']['jh'](),
                this['Xv']['jh']();
            }
            ,
            dF['Lh'] = function(dS, dp, dj, dV, dy, dM) {
                var dK = uL(dp, dj, dV);
                this['yv']['has'](dK) && this['yv']['get'](dK)['Kx'](dS, dy, dM);
            }
            ,
            dF['Th'] = function(dS, dp) {
                this['Xv']['do'](dp);
            }
            ,
            dF['gv'] = function() {
                var dS = 0x0;
                if (this['Yh']['Ze']() > 0x0) {
                    for (var dp = void 0x0; void 0x0 !== (dp = this['Yh']['Mx']()) && (this['yv']['get'](dp['Qh']())['Gx'](!0x0),
                    dp['sx'](),
                    !(++dS >= 0x2)); )
                        ;
                }
            }
            ,
            dF['Lx'] = function(dS, dp, dj, dV, dy) {
                var dM = this['Yh']['Px'](dS, dp, dj);
                if (this['Yh']['Lx'](dS, dp, dj, dV),
                dy && dM !== dV) {
                    var dK = this['Yh']['Rx'](dS, dp, dj)
                      , da = uK['Z'][dV]['q'];
                    dV === uA['k']['Kh'] && (da = uK['Z'][dM]['q']),
                    void 0x0 !== da && this['Dv']['fv']()['vv'](dK, da, 0x0, 0x1, 0x28 * u8['Z']['Ir'], 0x5 * u8['Z']['Ir'], 0x4);
                }
            }
            ,
            dF['_x'] = function() {
                return this['Av'];
            }
            ,
            dF['no'] = function() {
                return this['Dv'];
            }
            ,
            dF['Lv'] = function() {
                return this['Ex'];
            }
            ,
            dF['Vv'] = function() {
                return this['dv'];
            }
            ,
            de;
        }())
          , uv = u2(0x12a90)
          , uo = u2(0x1182)
          , ug = u2(0x52c2)
          , uQ = u2['n'](ug)
          , uO = u2(0x367b)
          , uY = u2(0x15854)
          , uP = (function() {
            function de() {
                var dS = this;
                this['Ov'] = function() {
                    dS['Hv'] = {},
                    dS['Ev'] = {};
                }
                ,
                this['Yv'] = function(dp) {
                    (0x0,
                    uk['D2'])() || (dp['deltaX'] > 0x0 || dp['deltaY'] > 0x0 ? dS['Fv'] = !0x0 : (dp['deltaX'] < 0x0 || dp['deltaY'] < 0x0) && (dS['Bv'] = !0x0));
                }
                ,
                this['Nv'] = function(dp) {
                    dS['_v'](-dp['button']);
                }
                ,
                this['Jv'] = function(dp) {
                    dS['Kv'](-dp['button']);
                }
                ,
                this['Gv'] = function(dp) {
                    dS['_v'](dp['keyCode']);
                }
                ,
                this['Zv'] = function(dp) {
                    dS['Kv'](dp['keyCode']);
                }
                ,
                this['Hv'] = {},
                this['Ev'] = {},
                this['Fv'] = !0x1,
                this['Bv'] = !0x1,
                this['Rv']();
            }
            var dF = de['prototype'];
            return dF['Rv'] = function() {
                document['addEventListener']('keydown', this['Gv'], !0x1),
                document['addEventListener']('keyup', this['Zv'], !0x1),
                document['addEventListener']('mousedown', this['Nv'], !0x1),
                document['addEventListener']('mouseup', this['Jv'], !0x1),
                document['addEventListener']('wheel', this['Yv'], !0x1),
                window['addEventListener']('blur', this['Ov'], !0x1);
            }
            ,
            dF['Pv'] = function() {
                document['removeEventListener']('keydown', this['Gv'], !0x1),
                document['removeEventListener']('keyup', this['Zv'], !0x1),
                document['removeEventListener']('mousedown', this['Nv'], !0x1),
                document['removeEventListener']('mouseup', this['Jv'], !0x1),
                document['removeEventListener']('wheel', this['Yv'], !0x1),
                window['removeEventListener']('blur', this['Ov'], !0x1);
            }
            ,
            dF['jh'] = function() {
                this['Pv']();
            }
            ,
            dF['_v'] = function(dS) {
                this['Qv'](dS) || (uz['Z']['emit'](uq['x']['ah'], dS),
                this['Ev'][dS] = !0x0),
                this['Hv'][dS] = !0x0;
            }
            ,
            dF['Kv'] = function(dS) {
                delete this['Hv'][dS],
                delete this['Ev'][dS];
            }
            ,
            dF['tl'] = function(dS) {
                return this['Qv'](dS);
            }
            ,
            dF['il'] = function(dS) {
                return !((0x0,
                uk['D2'])() || (0x0,
                uk['bt'])() || (0x0,
                uk['s9'])()) && this['Qv'](dS);
            }
            ,
            dF['sl'] = function(dS) {
                return !(0x0,
                uk['D2'])() && !(0x0,
                uk['bt'])() && this['Qv'](dS);
            }
            ,
            dF['hl'] = function(dS) {
                return !(0x0,
                uk['D2'])() && !(0x0,
                uk['bt'])() && this['nl'](dS);
            }
            ,
            dF['Qv'] = function(dS) {
                return !0x0 === this['Hv'][dS];
            }
            ,
            dF['nl'] = function(dS) {
                var dp = this['Ev'][dS];
                return delete this['Ev'][dS],
                dp;
            }
            ,
            dF['cl'] = function() {
                return !((0x0,
                uk['D2'])() || (0x0,
                uk['bt'])() || (0x0,
                uk['s9'])()) && this['rl']();
            }
            ,
            dF['el'] = function() {
                return !((0x0,
                uk['D2'])() || (0x0,
                uk['bt'])() || (0x0,
                uk['s9'])()) && this['xl']();
            }
            ,
            dF['rl'] = function() {
                var dS = this['Fv'];
                return this['Fv'] = !0x1,
                dS;
            }
            ,
            dF['xl'] = function() {
                var dS = this['Bv'];
                return this['Bv'] = !0x1,
                dS;
            }
            ,
            de;
        }())
          , uB = u2(0xa1ae)
          , uU = u2(0xca09)
          , uD = u2(0x28b8)
          , c0 = function(de) {
            function dF(dp, dj, dV, dy, dM) {
                var dK;
                return (dK = de['call'](this) || this)['ul'] = function(da) {
                    dK['al'] = da;
                }
                ,
                dK['ol'] = function(da, df, dl) {
                    dK['fl'] = da,
                    dK['vl'] = df,
                    dK['ll'] = dl,
                    dK['ml'] = Date['now']();
                }
                ,
                dK['zl'] = function() {
                    dK['dl'] = 0x0,
                    dK['pl'] = 0x0,
                    dK['yl'] = !0x0,
                    dK['wl'] = 0x0,
                    dK['al'] = 0x1,
                    dK['fl'] = 0x0,
                    dK['vl'] = 0x0,
                    dK['ll'] = 0x0,
                    dK['ml'] = Date['now']();
                }
                ,
                dK['gs'] = function(da, df) {
                    if (0x0 === dK['dl']) {
                        dK['$l']['x'] -= dK['ql']['y'],
                        dK['$l']['y'] -= dK['ql']['x'],
                        dK['$l']['x'] = Math['max'](Math['PI'] / 0x2 - dK['kl'], Math['min'](Math['PI'] / 0x2 - dK['gl'], dK['$l']['x'])),
                        Date['now']() - dK['ml'] <= dK['ll'] ? dK['wl'] = Math['max'](0x0, Math['min'](dK['al'], dK['wl'] + dK['fl'] * da)) : dK['wl'] = Math['max'](0x0, Math['min'](dK['al'], dK['wl'] - dK['vl'] * da));
                        var dl = 0.2
                          , dZ = 0.005;
                        dK['wl'] === dK['al'] ? (dK['yl'] ? dK['pl'] = Math['min'](dZ, dK['pl'] + dl * da) : dK['pl'] = Math['max'](-0.005, dK['pl'] - dl * da),
                        Math['abs'](dK['pl']) === dZ && (dK['yl'] = !dK['yl'])) : (dK['pl'] <= 0x0 ? dK['pl'] = Math['min'](0x0, dK['pl'] + dl * da) : dK['pl'] = Math['max'](0x0, dK['pl'] - dl * da),
                        dK['yl'] = !0x0),
                        dK['Cl']();
                    } else
                        0x1 === dK['dl'] && (dK['Xl']['setFromVector3'](dK['Ml']),
                        dK['Xl']['theta'] -= dK['ql']['x'],
                        dK['Xl']['phi'] -= dK['ql']['y'],
                        dK['Xl']['makeSafe'](),
                        dK['Xl']['radius'] = dK['Sl'],
                        dK['Ml']['setFromSpherical'](dK['Xl']),
                        dK['hs']['position']['copy'](dK['Dl']['position'])['add'](dK['Ml']),
                        dK['hs']['lookAt'](dK['Dl']['position']));
                    dK['ql']['set'](0x0, 0x0);
                }
                ,
                dK['Cl'] = function() {
                    dK['Al']['x'] = dK['$l']['x'] + dK['wl'] + dK['pl'],
                    dK['Al']['y'] = dK['$l']['y'],
                    dK['hs']['quaternion']['setFromEuler'](dK['Al']),
                    dK['Rl']['quaternion']['setFromEuler'](dK['Al']);
                }
                ,
                dK['Tl'] = function(da) {
                    if (dK['jl']) {
                        if (dK['Il'])
                            dK['Il'] = !0x1;
                        else {
                            var df = da['movementX'] || da['mozMovementX'] || da['webkitMovementX'] || 0x0
                              , dl = da['movementY'] || da['mozMovementY'] || da['webkitMovementY'] || 0x0;
                            dK['xt']['Ul'] && (dl *= -0x1);
                            var dZ = 0.0002
                              , dw = (0x0,
                            uO['MH'])(dK['Pl']['Wl'](), dK['Pl']['Ll']());
                            dw && (0x0,
                            uD['jf'])(dK['Pl']['Ll']()['qo']['Hl']()['Ol']()['Vl']()) ? dZ *= dK['xt']['El'] : dw && (dZ *= dK['xt']['Yl']),
                            dK['ql']['x'] += df * dK['xt']['Fl'] * dZ,
                            dK['ql']['y'] += dl * dK['xt']['Fl'] * dZ,
                            dK['dispatchEvent'](dK['Bl']);
                        }
                    }
                }
                ,
                dK['Nl'] = function() {
                    dK['_l']['ownerDocument']['pointerLockElement'] === dK['_l'] ? (dK['dispatchEvent'](dK['Jl']),
                    dK['jl'] = !0x0) : (dK['dispatchEvent'](dK['Kl']),
                    dK['jl'] = !0x1);
                }
                ,
                dK['Gl'] = function(da) {
                    console['error']('THREE.PointerLockControls:\x20Unable\x20to\x20use\x20Pointer\x20Lock\x20API');
                }
                ,
                dK['Zl'] = function() {
                    dK['_l']['ownerDocument']['addEventListener']('mousemove', dK['Tl'], !0x1),
                    dK['_l']['ownerDocument']['addEventListener']('pointerlockchange', dK['Nl'], !0x1),
                    dK['_l']['ownerDocument']['addEventListener']('pointerlockerror', dK['Gl'], !0x1),
                    uz['Z']['on'](uq['x']['Ql'], dK['tm']);
                }
                ,
                dK['im'] = function() {
                    dK['_l']['ownerDocument']['removeEventListener']('mousemove', dK['Tl'], !0x1),
                    dK['_l']['ownerDocument']['removeEventListener']('pointerlockchange', dK['Nl'], !0x1),
                    dK['_l']['ownerDocument']['removeEventListener']('pointerlockerror', dK['Gl'], !0x1),
                    uz['Z']['off'](uq['x']['Ql'], dK['tm']);
                }
                ,
                dK['tm'] = function() {
                    dK['Il'] = !0x0;
                }
                ,
                dK['sm'] = function() {
                    dK['im']();
                }
                ,
                dK['_x'] = function() {
                    return dK['hs'];
                }
                ,
                dK['hm'] = function(da) {
                    return da['set'](0x0, 0x0, -0x1)['applyQuaternion'](dK['hs']['quaternion']);
                }
                ,
                dK['nm'] = function(da) {
                    dK['rm']['setFromMatrixColumn'](dK['hs']['matrix'], 0x0),
                    dK['rm']['crossVectors'](dK['hs']['up'], dK['rm']),
                    dK['hs']['position']['addScaledVector'](dK['rm'], da);
                }
                ,
                dK['xm'] = function(da) {
                    dK['rm']['setFromMatrixColumn'](dK['hs']['matrix'], 0x0),
                    dK['hs']['position']['addScaledVector'](dK['rm'], da);
                }
                ,
                dK['um'] = function() {
                    dK['am']() && dK['_l']['requestPointerLock']();
                }
                ,
                dK['om'] = function() {
                    dK['am']() && dK['_l']['ownerDocument']['exitPointerLock']();
                }
                ,
                dK['am'] = function() {
                    return 'pointerLockElement'in document || 'mozPointerLockElement'in document || 'webkitPointerLockElement'in document;
                }
                ,
                dK['xt'] = dp,
                dK['hs'] = dj,
                dK['Rl'] = dV,
                dK['_l'] = dy,
                dK['Pl'] = dM,
                dK['jl'] = !0x1,
                dK['gl'] = 0x0,
                dK['kl'] = Math['PI'],
                dK['Bl'] = {
                    'type': 'change'
                },
                dK['Jl'] = {
                    'type': 'lock'
                },
                dK['Kl'] = {
                    'type': 'unlock'
                },
                dK['Al'] = new u7['USm'](0x0,0x0,0x0,'YXZ'),
                dK['$l'] = new u7['USm'](0x0,0x0,0x0,'YXZ'),
                dK['pl'] = 0x0,
                dK['yl'] = !0x0,
                dK['wl'] = 0x0,
                dK['al'] = 0x1,
                dK['fl'] = 0x0,
                dK['vl'] = 0x0,
                dK['ll'] = 0x0,
                dK['ml'] = Date['now'](),
                dK['rm'] = new u7['Pa4'](),
                dK['dl'] = 0x0,
                dK['ql'] = new u7['FM8'](0x0,0x0),
                dK['Xl'] = new u7['$V'](),
                dK['Dl'] = void 0x0,
                dK['Sl'] = 0x0,
                dK['Ml'] = new u7['Pa4'](0x0,0x0,0x0),
                dK['Il'] = !0x1,
                dK['Zl'](),
                dK;
            }
            (0x0,
            uU['Z'])(dF, de);
            var dS = dF['prototype'];
            return dS['fm'] = function(dp, dj, dV) {
                this['zl'](),
                this['dl'] = 0x1,
                this['Dl'] = dp,
                this['Sl'] = dj,
                void 0x0 !== dV && this['Ml']['set'](dV['x'], dV['y'], dV['z']);
            }
            ,
            dS['vm'] = function(dp) {
                this['zl'](),
                this['Dl'] = void 0x0,
                this['Sl'] = 0x0,
                this['$l']['x'] = dp['x'],
                this['$l']['y'] = dp['y'];
            }
            ,
            dS['lm'] = function() {
                return this['jl'];
            }
            ,
            dS['zm'] = function() {
                return this['$l'];
            }
            ,
            dF;
        }(u7['pBf'])
          , c1 = u2(0x1532c)
          , c2 = u2(0x184e3)
          , c3 = u2(0x17a74)
          , c4 = u2(0x93f9)
          , c5 = u2(0x4119)
          , c6 = function() {
            this['walkedDistFromLastSoundPlayed'] = 0x0,
            this['prevWaterSoundPlayedTime'] = 0x0,
            this['swamDistFromLastSoundPlayed'] = 0x0;
        }
          , c7 = function(de, dF, dS, dp, dj, dV, dy) {
            var dM = dy ? dV['dm']['bind'](dV) : function(dg, dQ) {
                dV['pm'](de, dg, dQ);
            }
              , dK = dy ? dV['ym']['bind'](dV) : function(dg, dQ, dO) {
                dV['vv'](de, dg, dQ, dO);
            }
            ;
            void 0x0 === dp['prevOnGround'] && (dp['prevOnGround'] = dS),
            void 0x0 === dp['prevPos'] && (dp['prevPos'] = (0x0,
            uJ['dg'])(de));
            var da = dj['Px'](dp['prevPos']['x'] / u8['Z']['Ir'], dp['prevPos']['y'] / u8['Z']['Ir'], dp['prevPos']['z'] / u8['Z']['Ir'])
              , df = dj['Px'](de['x'] / u8['Z']['Ir'], de['y'] / u8['Z']['Ir'], de['z'] / u8['Z']['Ir'])
              , dl = dj['Px'](de['x'] / u8['Z']['Ir'], (de['y'] + u8['Z']['Ir']) / u8['Z']['Ir'], de['z'] / u8['Z']['Ir'])
              , dZ = dj['Px'](de['x'] / u8['Z']['Ir'], (de['y'] + 0x2 * u8['Z']['Ir']) / u8['Z']['Ir'], de['z'] / u8['Z']['Ir']);
            if ((0x0,
            uR['PP'])(df))
                dp['walkedDistFromLastSoundPlayed'] = 0x0,
                (0x0,
                uR['PP'])(da) ? !(0x0,
                uR['PP'])(df) || (0x0,
                uR['PP'])(dl) && (0x0,
                uR['PP'])(dZ) || (dp['swamDistFromLastSoundPlayed'] += (0x0,
                uJ['qR'])(de, dp['prevPos']),
                dp['swamDistFromLastSoundPlayed'] >= 0x4 && (dK(c5['k']['wm'], 0x960 * Math['random']() - 0x4b0, 0.2),
                dp['swamDistFromLastSoundPlayed'] = 0x0)) : (Date['now']() - dp['prevWaterSoundPlayedTime'] < 0x3e8 ? dK(c5['k']['$m'], 0x320, 0.1) : dK(c5['k']['$m']),
                dp['prevWaterSoundPlayedTime'] = Date['now']());
            else {
                if (dF !== uo['b']['bm']) {
                    dp['swamDistFromLastSoundPlayed'] = 0x0;
                    var dw = (0x0,
                    uO['hO'])(de, dj)
                      , dE = uK['Z'][dw]['q']
                      , dv = 0x3e8;
                    dw !== uA['k']['qm'] && dw !== uA['k']['km'] || (dv = 0x0),
                    void 0x0 !== dE && (!dp['prevOnGround'] && dS ? (dM(dE, dv),
                    dp['walkedDistFromLastSoundPlayed'] = 0x0) : dS && dp['prevOnGround'] && (dp['walkedDistFromLastSoundPlayed'] += (0x0,
                    uJ['qR'])(de, dp['prevPos']),
                    dp['walkedDistFromLastSoundPlayed'] >= 1.5 && (dM(dE, dv),
                    dp['walkedDistFromLastSoundPlayed'] = 0x0)));
                }
            }
            dp['prevPos'] = (0x0,
            uJ['dg'])(de),
            dp['prevOnGround'] = dS;
        }
          , c8 = function(de, dF, dS, dp) {
            var dj = document['createElement']('canvas')['getContext']('2d')
              , dV = dF + 'px\x20Arial';
            dj['font'] = dV;
            var dy = dj['measureText'](de)['width'] + 0x4
              , dM = dF + 0x4;
            dj['canvas']['width'] = dy,
            dj['canvas']['height'] = dM,
            dj['font'] = dV,
            dj['textBaseline'] = 'top',
            dj['fillStyle'] = 'rgba(0,\x200,\x200,\x200)',
            dj['fillRect'](0x0, 0x0, dy, dM),
            dj['fillStyle'] = dS,
            dj['fillText'](de, 0x2, 0x2);
            var dK = new u7['ROQ'](dj['canvas']);
            dK['encoding'] = u7['knz'],
            dK['minFilter'] = u7['wem'],
            dK['wrapS'] = u7['uWy'],
            dK['wrapT'] = u7['uWy'];
            var da = new u7['xeV']({
                'map': dK,
                'transparent': !0x0,
                'depthWrite': !0x1,
                'fog': !0x1
            })
              , df = new u7['jyi'](da)
              , dl = 0.2 * dp;
            return df['scale']['set'](dy / dM * 0x1 * dl, 0x1 * dl, 0x1),
            df['renderOrder'] = -0x1,
            df;
        }
          , c9 = u2(0x2259)
          , cu = u2(0x62db)
          , cc = u2(0xe8f)
          , cz = u2(0x1597a)
          , cq = 0x0
          , cd = 0x1
          , cJ = 0x2
          , ck = 0x3
          , cr = u2(0x1483d)
          , cT = u2(0x125dd)
          , cm = u2(0x1f63);
        function cx(de, dF) {
            var dS = 'undefined' != typeof Symbol && de[Symbol['iterator']] || de['@@iterator'];
            if (dS)
                return (dS = dS['call'](de))['next']['bind'](dS);
            if (Array['isArray'](de) || (dS = function(dj, dV) {
                if (!dj)
                    return;
                if ('string' == typeof dj)
                    return cX(dj, dV);
                var dy = Object['prototype']['toString']['call'](dj)['slice'](0x8, -0x1);
                'Object' === dy && dj['constructor'] && (dy = dj['constructor']['name']);
                if ('Map' === dy || 'Set' === dy)
                    return Array['from'](dj);
                if ('Arguments' === dy || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/['test'](dy))
                    return cX(dj, dV);
            }(de)) || dF && de && 'number' == typeof de['length']) {
                dS && (de = dS);
                var dp = 0x0;
                return function() {
                    return dp >= de['length'] ? {
                        'done': !0x0
                    } : {
                        'done': !0x1,
                        'value': de[dp++]
                    };
                }
                ;
            }
            throw new TypeError('Invalid\x20attempt\x20to\x20iterate\x20non-iterable\x20instance.\x0aIn\x20order\x20to\x20be\x20iterable,\x20non-array\x20objects\x20must\x20have\x20a\x20[Symbol.iterator]()\x20method.');
        }
        function cX(de, dF) {
            (null == dF || dF > de['length']) && (dF = de['length']);
            for (var dS = 0x0, dp = new Array(dF); dS < dF; dS++)
                dp[dS] = de[dS];
            return dp;
        }
        var cI = function(de) {
            function dF(dp, dj) {
                var dV;
                return (dV = de['call'](this, dj, cu['p']['gm'], dp) || this)['mh'] = function(dy) {
                    dV['Cm'] && c7(dV['_x']()['position'], dV['Xm'], dV['Mm'], dV['Sm'], dV['Am']()['no']()['Dm']()['Wh'](), dV['Am']()['no']()['fv'](), !0x1);
                }
                ,
                dV['Rm'] = u9['Z']['Tm'](cr['E']['jm']),
                u9['Z']['Um'](dV['Rm']),
                dV['_x']()['add'](dV['Rm']),
                dV['Rm']['visible'] = !0x1,
                dV['Rm']['matrixAutoUpdate'] = !0x1,
                dV['Wm'] = '',
                dV['Pm'] = 'white',
                dV['Lm'] = cz['C']['fn'],
                dV['Vm'] = cT['Z']['NONE'],
                dV['Om'] = 0x0,
                dV['Hm'] = 0x0,
                dV['Ym'] = [],
                dV['Fm'] = [],
                dV['Xm'] = uo['b']['Bm'],
                dV['Nm'] = (0x0,
                uY['Ak'])(0x0, 0x0),
                dV['_m'] = !0x1,
                dV['Jm'] = !0x1,
                dV['Km'] = 0x0,
                dV['Gm'] = u9['Z']['Zm'](),
                dV['Gm']['matrixAutoUpdate'] = !0x1,
                dV['_x']()['add'](dV['Gm']),
                dV['Qm'] = new u7['Xcj'](dV['Gm']),
                dV['Gm']['traverse'](function(dy) {
                    dy['material'] && (dV['Ym']['push'](dy['material']),
                    dy['material']['fog'] = !0x1);
                }),
                dV['tz'] = dV['Qm']['clipAction'](u9['Z']['iz']()),
                dV['sz'] = dV['Qm']['clipAction'](u9['Z']['hz']()),
                dV['nz'] = dV['Qm']['clipAction'](u9['Z']['rz']()),
                dV['ez'] = dV['Qm']['clipAction'](u9['Z']['xz']()),
                dV['uz'] = dV['Qm']['clipAction'](u9['Z']['az']()),
                dV['oz'] = dV['Qm']['clipAction'](u9['Z']['fz']()),
                dV['vz'] = dV['Qm']['clipAction'](u9['Z']['lz']()),
                dV['mz'] = dV['Qm']['clipAction'](u9['Z']['zz']()),
                dV['dz'] = dV['Qm']['clipAction'](u9['Z']['pz']()),
                dV['yz'] = dV['Qm']['clipAction'](u9['Z']['wz']()),
                dV['$z'] = dV['Qm']['clipAction'](u9['Z']['bz']()),
                dV['qz'] = dV['Qm']['clipAction'](u9['Z']['kz']()),
                dV['gz'] = dV['Qm']['clipAction'](u9['Z']['Cz']()),
                dV['Xz'] = dV['Qm']['clipAction'](u9['Z']['Mz']()),
                dV['Sz'] = dV['Qm']['clipAction'](u9['Z']['Dz']()),
                dV['Az'] = dV['Qm']['clipAction'](u9['Z']['Tz']()),
                dV['jz'] = dV['Qm']['clipAction'](u9['Z']['Iz']()),
                dV['Uz'] = dV['Qm']['clipAction'](u9['Z']['Wz']()),
                dV['Pz'] = dV['Qm']['clipAction'](u9['Z']['Lz']()),
                dV['Vz'] = dV['Qm']['clipAction'](u9['Z']['Oz']()),
                dV['Ez'] = dV['Qm']['clipAction'](u9['Z']['Yz']()),
                dV['Fz'] = dV['Qm']['clipAction'](u9['Z']['Bz']()),
                dV['Nz'] = dV['Qm']['clipAction'](u9['Z']['_z']()),
                dV['oz']['setEffectiveWeight'](0x0),
                dV['vz']['setEffectiveWeight'](0x0),
                dV['mz']['setEffectiveWeight'](0x0),
                dV['dz']['setEffectiveWeight'](0x0),
                dV['yz']['setEffectiveWeight'](0x0),
                dV['$z']['setEffectiveWeight'](0x0),
                dV['ez']['setEffectiveTimeScale'](0x2),
                dV['uz']['setEffectiveTimeScale'](0x1),
                dV['qz']['setEffectiveWeight'](0x0),
                dV['gz']['setEffectiveWeight'](0x0),
                dV['Xz']['setEffectiveWeight'](0x0),
                dV['Sz']['setEffectiveWeight'](0x0),
                dV['Az']['setEffectiveWeight'](0x0),
                dV['jz']['setEffectiveWeight'](0x0),
                dV['Uz']['setEffectiveWeight'](0x0),
                dV['Pz']['setEffectiveWeight'](0x0),
                dV['Vz']['setEffectiveWeight'](0x0),
                dV['Ez']['setEffectiveWeight'](0x0),
                dV['Fz']['setEffectiveWeight'](0x0),
                dV['Nz']['setEffectiveWeight'](0x0),
                dV['oz']['play'](),
                dV['vz']['play'](),
                dV['mz']['play'](),
                dV['dz']['play'](),
                dV['yz']['play'](),
                dV['$z']['play'](),
                dV['qz']['play'](),
                dV['gz']['play'](),
                dV['Xz']['play'](),
                dV['Sz']['play'](),
                dV['Az']['play'](),
                dV['jz']['play'](),
                dV['Uz']['play'](),
                dV['Pz']['play'](),
                dV['Vz']['play'](),
                dV['Ez']['play'](),
                dV['Fz']['play'](),
                dV['Nz']['play'](),
                dV['Uz']['paused'] = !0x0,
                dV['Pz']['paused'] = !0x0,
                dV['Vz']['paused'] = !0x0,
                dV['Ez']['paused'] = !0x0,
                dV['Fz']['paused'] = !0x0,
                dV['Nz']['paused'] = !0x0,
                dV['Uz']['setLoop'](u7['jAl'], 0x1),
                dV['Pz']['setLoop'](u7['jAl'], 0x1),
                dV['Vz']['setLoop'](u7['jAl'], 0x1),
                dV['Ez']['setLoop'](u7['jAl'], 0x1),
                dV['Fz']['setLoop'](u7['jAl'], 0x1),
                dV['Nz']['setLoop'](u7['jAl'], 0x1),
                dV['Uz']['clampWhenFinished'] = !0x0,
                dV['Pz']['clampWhenFinished'] = !0x0,
                dV['Vz']['clampWhenFinished'] = !0x0,
                dV['Ez']['clampWhenFinished'] = !0x0,
                dV['Fz']['clampWhenFinished'] = !0x0,
                dV['Nz']['clampWhenFinished'] = !0x0,
                dV['ez']['play'](),
                dV['uz']['stop'](),
                dV['ez']['paused'] = !0x0,
                dV['uz']['paused'] = !0x0,
                dV['Sm'] = new c6(),
                dV['Jz'] = !0x0,
                dV['Kz'] = (0x0,
                uD['YJ'])(c4['q']['hn']),
                dV['Mm'] = !0x1,
                dV['Cm'] = !0x0,
                dV['Gz']((0x0,
                uJ['XX'])(0x0, -0x270f, 0x0)),
                dV['Zz'] = !0x0,
                dV;
            }
            (0x0,
            uU['Z'])(dF, de);
            var dS = dF['prototype'];
            return dS['Qz'] = function() {
                this['td'] && (this['sd']()['remove'](this['td']),
                u9['Z']['hd'](this['td']),
                this['td'] = void 0x0);
            }
            ,
            dS['jh'] = function() {
                this['Qz'](),
                u9['Z']['nd'](this['Gm']),
                u9['Z']['nd'](this['Rm']);
                for (var dp = 0x0; dp < this['Fm']['length']; dp++) {
                    var dj = this['Fm'][dp];
                    dj['sprite']['geometry']['dispose'](),
                    dj['sprite']['material']['map']['dispose'](),
                    dj['sprite']['material']['dispose']();
                }
                this['rd'] && (this['rd']['geometry']['dispose'](),
                this['rd']['material']['map']['dispose'](),
                this['rd']['material']['dispose']());
            }
            ,
            dS['gs'] = function(dp, dj) {
                this['_m'] && this['ez']['time'] >= 0.8 && (this['ez']['paused'] = !0x0,
                this['_m'] = !0x1),
                this['Jm'] && this['uz']['time'] >= 0.8 && (this['uz']['paused'] = !0x0,
                this['Jm'] = !0x1),
                0x0 === this['Km'] && this['Uz']['time'] >= 0x1 / 0x3 && (this['Uz']['paused'] = !0x0,
                this['Pz']['paused'] = !0x0,
                this['Vz']['paused'] = !0x0,
                this['Ez']['paused'] = !0x0,
                this['Fz']['paused'] = !0x0,
                this['Nz']['paused'] = !0x0,
                this['Km'] = 0x1),
                this['Qm']['update'](dp);
                var dV = Date['now']() - this['Hm']
                  , dy = u8['Z']['Kr']
                  , dM = u8['Z']['Wr'];
                if (dV > dy) {
                    var dK = 0x1 - Math['max'](0x0, (dy + dM - dV) / dM);
                    this['ed'](0x1, dK, dK);
                }
                for (var da = 0x0; da < this['Fm']['length']; da++) {
                    var df = this['Fm'][da];
                    df['sprite']['position']['set'](df['sprite']['position']['x'] + 0x2 * df['dir']['x'] * dp, df['sprite']['position']['y'] + 0x3 * df['dir']['y'] * dp, df['sprite']['position']['z'] + 0x2 * df['dir']['z'] * dp),
                    Date['now']() - df['spawnTime'] > 0x320 && (this['_x']()['remove'](df['sprite']),
                    df['sprite']['geometry']['dispose'](),
                    df['sprite']['material']['map']['dispose'](),
                    df['sprite']['material']['dispose'](),
                    this['Fm'][da] = this['Fm'][this['Fm']['length'] - 0x1],
                    this['Fm']['pop'](),
                    --da);
                }
            }
            ,
            dS['xd'] = function() {
                var dp = this['Kz']
                  , dj = this['Xm'] === uo['b']['bm'] ? u8['Z']['pr'] : u8['Z']['Cr']
                  , dV = (0x0,
                uJ['XX'])(this['_x']()['position']['x'], this['_x']()['position']['y'] + dj, this['_x']()['position']['z'])
                  , dy = (0x0,
                uY['I$'])(this['Nm']);
                dy['y'] = -dy['y'];
                var dM = (0x0,
                um['ny'])(dy);
                (0x0,
                uJ['$j'])(dV, (0x0,
                uJ['XX'])(0x1 * dM['x'], 0x1 * dM['y'], 0x1 * dM['z']));
                for (var dK = 0x0; dK < dp['ud'](); dK++)
                    this['Am']()['no']()['fd']()['od'](dV, dM, 0x0);
                this['Am']()['no']()['fv']()['vv'](this['_x']()['position'], dp['vd'](), 0x0, 0x1, 0xc8 * u8['Z']['Ir'], 0x1e * u8['Z']['Ir'], 0xa);
            }
            ,
            dS['ld'] = function() {
                this['Am']()['no']()['fv']()['vv'](this['_x']()['position'], c5['k']['md'], 0x0, 0x1, 0x50 * u8['Z']['Ir'], 0x5 * u8['Z']['Ir'], 0x5);
            }
            ,
            dS['zd'] = function() {
                this['Am']()['no']()['fv']()['vv'](this['_x']()['position'], c5['k']['dd'], 0x0, 0x1, 0x50 * u8['Z']['Ir'], 0x5 * u8['Z']['Ir'], 0x5);
            }
            ,
            dS['pd'] = function(dp, dj, dV) {
                var dy = c8(dp['toString'](), 0x40, dj, dV);
                dy['material']['depthTest'] = !0x1,
                dy['position']['set'](0x0, 0x1, 0x0),
                this['_x']()['add'](dy);
                var dM = (0x0,
                uJ['XX'])(0x2 * Math['random']() - 0x1, 0x2 * Math['random']() + 0x1, 0x2 * Math['random']() - 0x1);
                (0x0,
                uJ['cz'])(dM),
                this['Fm']['push']({
                    'sprite': dy,
                    'dir': dM,
                    'spawnTime': Date['now']()
                });
            }
            ,
            dS['yd'] = function(dp) {
                for (var dj, dV = cx(dp); !(dj = dV())['done']; ) {
                    var dy = dj['value'];
                    switch (dy['wd']) {
                    case cc['m']['$d']:
                        this['bd'](dy['qd']);
                        break;
                    case cc['m']['kd']:
                        this['Pm'] = dy['qd'];
                        break;
                    case cc['m']['gd']:
                        this['Cd'](dy['qd']);
                        break;
                    case cc['m']['Xd']:
                        this['Vm'] = dy['qd'];
                        break;
                    case cc['m']['Md']:
                        this['Om'] = dy['qd'];
                        break;
                    case cc['m']['Sd']:
                        this['Dd'](dy['qd']);
                        break;
                    case cc['m']['Rd']:
                        var dM = dy['qd'];
                        this['Td'](0x7 & dM),
                        this['Mm'] = (0x8 & dM) > 0x0;
                        break;
                    case cc['m']['jd']:
                        var dK = dy['qd'];
                        this['_x']()['visible'] = dK,
                        this['Zz'] = dK;
                    }
                }
            }
            ,
            dS['Id'] = function(dp) {
                switch (dp) {
                case cq:
                    this['xd']();
                    break;
                case cd:
                    this['ld']();
                    break;
                case cJ:
                    this['zd']();
                    break;
                case ck:
                    this['Kz']['Vl']() === c4['q']['hn'] && this['Uz']['paused'] && (0x1 === this['Km'] ? this['Km'] = 0x2 : 0x2 === this['Km'] && (this['Uz']['reset'](),
                    this['Pz']['reset'](),
                    this['Vz']['reset'](),
                    this['Ez']['reset'](),
                    this['Fz']['reset'](),
                    this['Nz']['reset'](),
                    this['Km'] = 0x0),
                    this['Uz']['paused'] = !0x1,
                    this['Pz']['paused'] = !0x1,
                    this['Vz']['paused'] = !0x1,
                    this['Ez']['paused'] = !0x1,
                    this['Fz']['paused'] = !0x1,
                    this['Nz']['paused'] = !0x1);
                }
            }
            ,
            dS['Gz'] = function(dp) {
                this['setModelPos'](dp),
                this['_x']()['updateMatrix'](),
                this['Gm']['updateMatrix'](),
                this['Rm']['updateMatrix']();
            }
            ,
            dS['Ud'] = function(dp) {
                this['Wd'](dp['x']),
                this['Pd'](-dp['y']),
                this['_x']()['updateMatrix'](),
                this['Gm']['updateMatrix'](),
                this['Rm']['updateMatrix']();
            }
            ,
            dS['setModelPos'] = function(dp) {
                var dj = (0x0,
                uJ['XX'])(this['_x']()['position']['x'], this['_x']()['position']['y'], this['_x']()['position']['z']);
                this['Jz'] && (dj = dp,
                this['Jz'] = !0x1),
                this['_x']()['position']['set'](dp['x'], dp['y'], dp['z']),
                (dp['x'] - dj['x']) * (dp['x'] - dj['x']) + (dp['z'] - dj['z']) * (dp['z'] - dj['z']) >= 0.0001 ? (this['uz']['paused'] && (this['uz']['paused'] = !0x1),
                this['uz']['setLoop'](u7['YKA'], 0x1 / 0x0),
                this['ez']['paused'] && (this['ez']['paused'] = !0x1),
                this['ez']['setLoop'](u7['YKA'], 0x1 / 0x0)) : (this['uz']['time'] < 0.8 ? this['Jm'] = !0x0 : (this['uz']['setLoop'](u7['jAl'], 0x1),
                this['uz']['clampWhenFinished'] = !0x0),
                this['ez']['time'] < 0.8 ? this['_m'] = !0x0 : (this['ez']['setLoop'](u7['jAl'], 0x1),
                this['ez']['clampWhenFinished'] = !0x0));
            }
            ,
            dS['Ld'] = function() {
                this['oz']['setEffectiveWeight'](0x0),
                this['mz']['setEffectiveWeight'](0x0),
                this['vz']['setEffectiveWeight'](0x0),
                this['dz']['setEffectiveWeight'](0x0),
                this['$z']['setEffectiveWeight'](0x0),
                this['yz']['setEffectiveWeight'](0x0),
                this['qz']['setEffectiveWeight'](0x0),
                this['Xz']['setEffectiveWeight'](0x0),
                this['gz']['setEffectiveWeight'](0x0),
                this['Sz']['setEffectiveWeight'](0x0),
                this['jz']['setEffectiveWeight'](0x0),
                this['Az']['setEffectiveWeight'](0x0),
                this['Uz']['setEffectiveWeight'](0x0),
                this['Pz']['setEffectiveWeight'](0x0),
                this['Vz']['setEffectiveWeight'](0x0),
                this['Ez']['setEffectiveWeight'](0x0),
                this['Fz']['setEffectiveWeight'](0x0),
                this['Nz']['setEffectiveWeight'](0x0);
                var dp = this['oz']
                  , dj = this['vz']
                  , dV = this['mz']
                  , dy = this['dz']
                  , dM = this['yz']
                  , dK = this['$z'];
                if (this['Kz']['Vd']() === cm['E']['Od'] ? (dp = this['qz'],
                dj = this['gz'],
                dV = this['Xz'],
                dy = this['Sz'],
                dM = this['Az'],
                dK = this['jz']) : this['Kz']['Vd']() === cm['E']['hn'] && (dp = this['Uz'],
                dj = this['Pz'],
                dV = this['Vz'],
                dy = this['Ez'],
                dM = this['Fz'],
                dK = this['Nz']),
                void 0x0 !== this['td'] && (this['Xm'] === uo['b']['Hd'] || this['Xm'] === uo['b']['Ed'] ? this['td']['visible'] = !0x1 : this['td']['visible'] = !0x0),
                this['Xm'] === uo['b']['Hd']) {
                    var da = Math['abs'](Math['min'](this['Nm']['x'] / (Math['PI'] / 0x2), 0x0));
                    this['tz']['setEffectiveWeight'](0x1 - da),
                    this['sz']['setEffectiveWeight'](da);
                } else {
                    if (this['Xm'] === uo['b']['Bm'] || this['Xm'] === uo['b']['Yd'] || this['Xm'] === uo['b']['bm'] || this['Xm'] === uo['b']['Fd']) {
                        var df = Math['abs'](this['Nm']['x'] / (Math['PI'] / 0x2));
                        this['Nm']['x'] <= 0x0 ? this['Xm'] === uo['b']['bm'] ? (dy['setEffectiveWeight'](0x1 - df),
                        dK['setEffectiveWeight'](df),
                        dM['setEffectiveWeight'](0x0)) : (dp['setEffectiveWeight'](0x1 - df),
                        dV['setEffectiveWeight'](df),
                        dj['setEffectiveWeight'](0x0)) : this['Xm'] === uo['b']['bm'] ? (dy['setEffectiveWeight'](0x1 - df),
                        dK['setEffectiveWeight'](0x0),
                        dM['setEffectiveWeight'](df)) : (dp['setEffectiveWeight'](0x1 - df),
                        dV['setEffectiveWeight'](0x0),
                        dj['setEffectiveWeight'](df));
                    }
                }
            }
            ,
            dS['Td'] = function(dp) {
                dp === uo['b']['bm'] && this['Xm'] !== uo['b']['bm'] ? (this['sz']['stop'](),
                this['tz']['stop'](),
                this['nz']['stop'](),
                this['ez']['stop'](),
                this['uz']['reset'](),
                this['uz']['play'](),
                this['uz']['paused'] = !0x0,
                this['Rm']['visible'] = !0x1) : dp !== uo['b']['Bm'] && dp !== uo['b']['Yd'] && dp !== uo['b']['Fd'] || this['Xm'] === uo['b']['Bm'] || this['Xm'] === uo['b']['Yd'] || this['Xm'] === uo['b']['Fd'] ? dp === uo['b']['Hd'] && this['Xm'] !== uo['b']['Hd'] ? (this['ez']['stop'](),
                this['uz']['stop'](),
                this['nz']['stop'](),
                this['tz']['play'](),
                this['sz']['play'](),
                this['Rm']['visible'] = !0x1) : dp === uo['b']['Ed'] && this['Xm'] !== uo['b']['Ed'] && (this['ez']['stop'](),
                this['uz']['stop'](),
                this['tz']['stop'](),
                this['sz']['stop'](),
                this['nz']['play'](),
                this['Rm']['visible'] = !0x0) : (this['sz']['stop'](),
                this['tz']['stop'](),
                this['nz']['stop'](),
                this['uz']['stop'](),
                this['ez']['reset'](),
                this['ez']['play'](),
                this['ez']['paused'] = !0x0,
                this['Rm']['visible'] = !0x1),
                this['Xm'] = dp,
                this['Ld']();
            }
            ,
            dS['Bd'] = function() {
                return this['Xm'];
            }
            ,
            dS['Pd'] = function(dp) {
                this['Nm']['y'] = dp,
                this['Gm']['rotation']['y'] = dp,
                this['Rm']['rotation']['y'] = -dp;
            }
            ,
            dS['Wd'] = function(dp) {
                this['Nm']['x'] = dp,
                this['Ld']();
            }
            ,
            dS['sd'] = function() {
                return this['Gm']['getObjectByName'](u9['Z']['Nd']('Bone_Right_Hand'));
            }
            ,
            dS['Dd'] = (function() {
                var dp = (0x0,
                u4['Z'])(u6()['mark'](function dj(dV) {
                    var dy, dM;
                    return u6()['wrap'](function(dK) {
                        for (; ; )
                            switch (dK['prev'] = dK['next']) {
                            case 0x0:
                                return (dy = (0x0,
                                uD['YJ'])(dV))['_d'](this['Vm'], this['Om']),
                                dK['next'] = 0x4,
                                dy['Jd'](!0x1);
                            case 0x4:
                                dM = dK['sent'],
                                u9['Z']['Um'](dM),
                                this['Qz'](),
                                this['Kz'] = dy,
                                this['td'] = dM,
                                this['sd']()['add'](dM),
                                this['Ld']();
                            case 0xb:
                            case 'end':
                                return dK['stop']();
                            }
                    }, dj, this);
                }));
                return function(dV) {
                    return dp['apply'](this, arguments);
                }
                ;
            }()),
            dS['Kd'] = function() {
                return this['Wm'];
            }
            ,
            dS['bd'] = function(dp) {
                this['Wm'] = dp,
                this['rd'] && (this['_x']()['remove'](this['rd']),
                this['rd']['geometry']['dispose'](),
                this['rd']['material']['map']['dispose'](),
                this['rd']['material']['dispose'](),
                this['rd'] = void 0x0),
                this['rd'] = c8(this['Wm'], 0x40, this['Pm'], 0.8),
                this['rd']['position']['set'](0x0, 1.5, 0x0),
                this['_x']()['add'](this['rd']);
            }
            ,
            dS['Gd'] = function() {
                return this['Lm'];
            }
            ,
            dS['Cd'] = function(dp) {
                this['Lm'] = dp,
                this['Gm']['traverse'](function(dj) {
                    dj['material'] && (dj['material']['map']['dispose'](),
                    dp === cz['C']['fn'] ? dj['material']['map'] = u9['Z']['Zd']() : dp === cz['C']['ln'] ? dj['material']['map'] = u9['Z']['Qd']() : dp === cz['C']['sn'] && (dj['material']['map'] = u9['Z']['tp']()));
                });
            }
            ,
            dS['ip'] = function(dp, dj, dV) {
                this['Hm'] = Date['now'](),
                this['ed'](0x1, 0x0, 0x0),
                dp > 0x0 && this['pd'](dp, '#ffb900', dV ? 0x2 : 0x1),
                dj > 0x0 && this['pd'](dj, 'white', dV ? 0x2 : 0x1);
            }
            ,
            dS['ed'] = function(dp, dj, dV) {
                for (var dy = 0x0; dy < this['Ym']['length']; dy++)
                    this['Ym'][dy]['color']['r'] = dp,
                    this['Ym'][dy]['color']['g'] = dj,
                    this['Ym'][dy]['color']['b'] = dV;
            }
            ,
            dS['sp'] = function() {
                return this['Zz'];
            }
            ,
            dF;
        }(c9['Z'])
          , cC = u2(0x17b07)
          , cG = u2(0x11e39)
          , cn = u2(0x13bce)
          , cW = u2(0xe462)
          , cR = u2(0x9df8)
          , cb = u2(0x99dd)
          , cA = u2(0x13a4);
        function cL(de, dF) {
            var dS = 'undefined' != typeof Symbol && de[Symbol['iterator']] || de['@@iterator'];
            if (dS)
                return (dS = dS['call'](de))['next']['bind'](dS);
            if (Array['isArray'](de) || (dS = function(dj, dV) {
                if (!dj)
                    return;
                if ('string' == typeof dj)
                    return cH(dj, dV);
                var dy = Object['prototype']['toString']['call'](dj)['slice'](0x8, -0x1);
                'Object' === dy && dj['constructor'] && (dy = dj['constructor']['name']);
                if ('Map' === dy || 'Set' === dy)
                    return Array['from'](dj);
                if ('Arguments' === dy || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/['test'](dy))
                    return cH(dj, dV);
            }(de)) || dF && de && 'number' == typeof de['length']) {
                dS && (de = dS);
                var dp = 0x0;
                return function() {
                    return dp >= de['length'] ? {
                        'done': !0x0
                    } : {
                        'done': !0x1,
                        'value': de[dp++]
                    };
                }
                ;
            }
            throw new TypeError('Invalid\x20attempt\x20to\x20iterate\x20non-iterable\x20instance.\x0aIn\x20order\x20to\x20be\x20iterable,\x20non-array\x20objects\x20must\x20have\x20a\x20[Symbol.iterator]()\x20method.');
        }
        function cH(de, dF) {
            (null == dF || dF > de['length']) && (dF = de['length']);
            for (var dS = 0x0, dp = new Array(dF); dS < dF; dS++)
                dp[dS] = de[dS];
            return dp;
        }
        var cN = 0x0
          , ce = 0x1
          , cF = (function() {
            function de(dS, dp, dj, dV, dy) {
                var dM = this;
                this['hp'] = function(dK, da, df, dl, dZ, dw, dE, dv, dg, dQ, dO, dY, dP, dB, dU, dD, J0, J1, J2) {
                    for (var J3 = -0x1, J4 = 0x0; J4 < dM['np']['length']; J4++)
                        if (dM['np'][J4]['cp'] >= dQ['cp']) {
                            J3 = J4;
                            break;
                        }
                    -0x1 === J3 ? dM['np'] = [] : dM['np']['splice'](0x0, J3 - 0x1),
                    dM['xp']['ep']['rp'] = dQ['rp'],
                    dM['xp']['ep']['op'] = dQ['op'],
                    dM['xp']['ep']['fp'] = dQ['fp'],
                    dM['xp']['ep']['cp'] = dQ['cp'],
                    da && (dM['xp']['ep']['iv'] = dQ['iv']),
                    df && (dM['xp']['ep']['vp'] = dQ['vp']),
                    dl && (dM['xp']['ep']['lp'] = dQ['lp']),
                    dZ && (dM['xp']['ep']['mp'] = dQ['mp']),
                    dw && dM['xp']['qo']['zp'](dO, !0x1),
                    dv && (dM['xp']['dp'] = J1),
                    dg && (dM['xp']['ki'] = J2,
                    J2 === c1['P']['$n'] ? dM['xp']['qo']['pp'](0x4) : J2 === c1['P']['un'] ? dM['xp']['qo']['pp'](0x8) : J2 === c1['P']['cn'] ? dM['xp']['qo']['pp'](0xc) : dM['xp']['qo']['pp'](0x0));
                    for (var J5, J6 = !0x0, J7 = cL(dY['entries']()); !(J5 = J7())['done']; ) {
                        var J8 = J5['value']
                          , J9 = J8[0x0]
                          , Ju = J8[0x1];
                        dM['yp'] && (dM['yp'] = !0x1,
                        J6 = !0x1),
                        -0x2 === J9 ? dM['xp']['qo']['vu'](Ju) : dM['xp']['qo']['wp'](J9, Ju, !0x1);
                    }
                    for (var Jc, Jz = cL(dP['entries']()); !(Jc = Jz())['done']; ) {
                        var Jq = Jc['value']
                          , Jd = Jq[0x0]
                          , JJ = Jq[0x1];
                        dM['xp']['bp']['$p']()['set'](Jd, JJ);
                    }
                    dE && (dM['xp']['Ni'] = dB,
                    dM['xp']['Ci'] = dU,
                    dM['xp']['Ri'] = dD,
                    dM['xp']['Ti'] = J0);
                    for (var Jk = dM['xp']['qp'](), Jr = 0x1; Jr < dM['np']['length']; Jr++) {
                        var JT = dM['np'][Jr - 0x1]
                          , Jm = dM['np'][Jr];
                        dM['kp'](Jk, JT, Jm, !0x1);
                    }
                    dM['gp'] = dM['Xp']['qp'](),
                    dM['Xp'] = Jk,
                    dM['Mp'](dM['gp'], dM['Xp'], J6);
                }
                ,
                this['Sp'] = function(dK, da, df) {
                    for (var dl = 0x0; dl < dM['Dp']['length']; dl++) {
                        var dZ = dM['Dp'][dl];
                        if (dZ['Ap'] === dK && dZ['Rp'] === da && dZ['Tp'] === df) {
                            for (var dw = 0x0; dw < dZ['jp']['length']; dw++)
                                clearTimeout(dZ['jp'][dw]);
                            dM['Dp']['splice'](dl, 0x1);
                            break;
                        }
                    }
                }
                ,
                this['zv'] = function(dK, da, df, dl) {
                    dM['Sp'](dK, da, df),
                    dM['Dv']['Dm']()['Lx'](dK, da, df, dl, !0x0);
                }
                ,
                this['Ip'] = function(dK, da, df, dl) {
                    for (var dZ = {}, dw = 0x0; dw < df['length']; dw++) {
                        var dE = uH(df[dw]['x'], df[dw]['y'], df[dw]['z']);
                        dZ[dE] = dM['Dv']['Dm']()['Wh']()['Px'](df[dw]['x'], df[dw]['y'], df[dw]['z']),
                        dM['Sp'](df[dw]['x'], df[dw]['y'], df[dw]['z']),
                        dM['Dv']['Dm']()['Lx'](df[dw]['x'], df[dw]['y'], df[dw]['z'], uA['k']['Kh'], !0x1),
                        dM['Dv']['Dm']()['Vv']()['tv'](dE);
                    }
                    dK && dM['Dv']['Dm']()['Lv']()['Oh'](da, dZ);
                    for (var dv = 0x0; dv < dl['length']; dv++)
                        dM['Dv']['Dm']()['Vv']()['xv'](dl[dv]['pos']['x'], dl[dv]['pos']['y'], dl[dv]['pos']['z'], dl[dv]['progress'], !0x1);
                }
                ,
                this['Up'] = function(dK, da, df) {
                    dK === (0x0,
                    uk['Yb'])() && dM['Wp'] === ce && (dM['Wp'] = cN,
                    dM['Lp']['Pp'](),
                    dM['Lp']['Vp'](),
                    dM['Op'](da, df));
                }
                ,
                this['Hp'] = function(dK) {
                    (0x0,
                    uk['Zp'])() === cG['Q']['me'] && dM['Pl']['um']();
                }
                ,
                this['Ep'] = function(dK) {
                    uz['Z']['emit'](uq['x']['Yp']);
                }
                ,
                this['tm'] = function(dK) {
                    uz['Z']['emit'](uq['x']['Ql']);
                }
                ,
                this['Fp'] = function(dK, da) {
                    dM['Bp'] = !0x0,
                    dM['Np'] = dK,
                    dM['_p'] = da,
                    dM['Jp']['tl'](dM['xt']['Kp'][cb['ap']['INVENTORY_HELPER_KEY']]) && (dM['_p'] = uv['G']['SHIFT_CLICK']);
                }
                ,
                this['Gp'] = function(dK) {
                    dM['Qp'] = !0x0,
                    dM['ty'] = dK;
                }
                ,
                this['iy'] = function(dK) {
                    dM['hy'] = !0x0,
                    dM['ey'] = dK,
                    dM['_p'] = uv['G']['LEFT'],
                    dM['Jp']['tl'](dM['xt']['Kp'][cb['ap']['INVENTORY_HELPER_KEY']]) && (dM['_p'] = uv['G']['SHIFT_CLICK']);
                }
                ,
                this['xy'] = function() {
                    dM['Pl']['um']();
                }
                ,
                this['uy'] = function() {
                    (0x0,
                    uk['Zp'])() !== cG['Q']['me'] || dM['Pl']['lm']() || dM['Pl']['um']();
                }
                ,
                this['oy'] = function() {
                    dM['Pl']['om']();
                }
                ,
                this['vy'] = function() {
                    dM['Pl']['om']();
                }
                ,
                this['my'] = function(dK, da) {
                    da && dM['zy'](dK);
                }
                ,
                this['py'] = function(dK, da, df, dl) {
                    var dZ = []
                      , dw = [];
                    return uQ()(dl, [dK['x'], dK['y'], dK['z']], [da['x'], da['y'], da['z']], df, dZ, dw) === uA['k']['Kh'] ? {
                        'yy': !0x1,
                        'J': (0x0,
                        uJ['XX'])(0x0, 0x0, 0x0),
                        'wy': (0x0,
                        uJ['XX'])(0x0, 0x0, 0x0)
                    } : {
                        'yy': !0x0,
                        'J': (0x0,
                        uJ['XX'])(dZ[0x0], dZ[0x1], dZ[0x2]),
                        'wy': (0x0,
                        uJ['XX'])(dw[0x0], dw[0x1], dw[0x2])
                    };
                }
                ,
                this['$y'] = function(dK, da, df) {
                    return dM['Dv']['Dm']()['Wh']()['Px'](dK, da, df);
                }
                ,
                this['by'] = function(dK, da, df) {
                    return uK['Z'][dM['$y'](dK, da, df)]['t'];
                }
                ,
                this['gs'] = function(dK, da) {
                    if (dM['Wp'] === cN) {
                        if ((0x0,
                        uk['Zp'])() === cG['Q']['Pe'])
                            return;
                        dM['Xp']['qo']['Hl']()['Ol']()['qy'](dK, dM),
                        dM['Pl']['gs'](dK, da);
                        var df = da / u8['Z']['qr'];
                        if (dM['Xp']['ep']['fp'] === uo['b']['Hd'] || dM['Xp']['ep']['fp'] === uo['b']['Ed']) {
                            var dl, dZ = dM['ky'](), dw = (0x0,
                            um['t7'])(dM['gy']['x'], dM['Xp']['ep']['iv']['x'], df), dE = (0x0,
                            um['t7'])(dM['gy']['y'], dM['Xp']['ep']['iv']['y'], df), dv = (0x0,
                            um['t7'])(dM['gy']['z'], dM['Xp']['ep']['iv']['z'], df);
                            dM['Cy']['Gz']((0x0,
                            uJ['XX'])(dw, dE, dv)),
                            dM['Cy']['Ud'](dZ),
                            null == (dl = dM['Cy']) || dl['gs'](dK, da);
                        } else {
                            var dg = (0x0,
                            um['t7'])(dM['gy']['x'], dM['Xp']['ep']['iv']['x'], df)
                              , dQ = (0x0,
                            um['t7'])(dM['gy']['y'] + dM['gp']['ep']['lp'], dM['Xp']['ep']['iv']['y'] + dM['Xp']['ep']['lp'], df)
                              , dO = (0x0,
                            um['t7'])(dM['gy']['z'], dM['Xp']['ep']['iv']['z'], df);
                            dM['Pl']['_x']()['position']['set'](dg, dQ, dO);
                        }
                    } else {
                        if (dM['Wp'] === ce && Date['now']() - dM['Xy'] <= 0x3e8) {
                            var dY = Math['max'](0x0, Math['min'](0x1, (Date['now']() - dM['Xy']) / 0x3e8));
                            u7['_fP']['slerp'](dM['My'], dM['Sy'], dM['Dy']['Rs']()['quaternion'], dY);
                        }
                    }
                }
                ,
                this['xt'] = dS,
                this['Dy'] = dp,
                this['Dv'] = dj,
                this['Cv'] = dV,
                this['Lp'] = dy,
                this['Pl'] = new c0(this['xt'],this['Dy']['Rs'](),this['Dy']['Ts'](),this['Dy']['Is'](),this),
                this['gy'] = (0x0,
                uJ['XX'])(0x0, 0x0, 0x0),
                this['Dp'] = [],
                this['Wp'] = cN,
                this['Bp'] = !0x1,
                this['Qp'] = !0x1,
                this['Np'] = 0x0,
                this['_p'] = uv['G']['WHEEL'],
                this['ty'] = c1['P']['nn'],
                this['hy'] = !0x1,
                this['ey'] = cC['n']['Ay'],
                this['Xy'] = 0x0,
                this['My'] = new u7['_fP'](),
                this['Sy'] = new u7['_fP'](),
                this['Ry'] = 0x0,
                this['Ty'] = -0x1,
                this['jy'] = 0x0;
            }
            var dF = de['prototype'];
            return dF['jh'] = function() {
                this['Pv'](),
                this['Pl']['sm'](),
                this['Jp']['jh']();
            }
            ,
            dF['rs'] = function(dS, dp, dj) {
                this['Jp'] = new uP(),
                this['Op'](dp, dj),
                this['Pl']['um'](),
                this['Rv']();
            }
            ,
            dF['zy'] = function(dS) {
                window['gtag'] && gtag('event', 'kill', {
                    'event_category': 'game_view'
                }),
                this['Wp'] = ce,
                this['Pl']['zl'](),
                this['Lp']['Iy'](),
                this['Lp']['Uy'](),
                uz['Z']['emit'](uq['x']['Wy']),
                uz['Z']['emit'](uq['x']['Py'], c1['P']['nn']),
                this['Xp']['qo']['Hl']()['Ol']()['Ly'](this['Xp'], this, !0x0);
                var dp = (0x0,
                uJ['dg'])(dS);
                (0x0,
                uJ['M4'])(dp, this['Dy']['Rs']()['position']),
                (0x0,
                uJ['cz'])(dp),
                this['Xy'] = Date['now'](),
                this['My']['copy'](this['Dy']['Rs']()['quaternion']),
                this['Sy']['setFromUnitVectors'](new u7['Pa4'](0x0,0x0,-0x1), new u7['Pa4'](dp['x'],dp['y'],dp['z'])),
                this['Pl']['om']();
            }
            ,
            dF['Rv'] = function() {
                uz['Z']['on'](uq['x']['Vy'], this['hp']),
                uz['Z']['on'](uq['x']['Wv'], this['zv']),
                uz['Z']['on'](uq['x']['Oy'], this['Ip']),
                uz['Z']['on'](uq['x']['Hy'], this['Up']),
                uz['Z']['on'](uq['x']['Ey'], this['Fp']),
                uz['Z']['on'](uq['x']['Yy'], this['Gp']),
                uz['Z']['on'](uq['x']['Fy'], this['iy']),
                uz['Z']['on'](uq['x']['By'], this['my']),
                uz['Z']['on'](uq['x']['Jy'], this['vy']),
                uz['Z']['on'](uq['x']['Ky'], this['uy']),
                uz['Z']['on'](uq['x']['Gy'], this['oy']),
                uz['Z']['on'](uq['x']['Qy'], this['xy']),
                this['tw']()['Is']()['addEventListener']('click', this['Hp'], !0x1),
                this['Pl']['addEventListener']('lock', this['Ep']),
                this['Pl']['addEventListener']('unlock', this['tm']);
            }
            ,
            dF['Pv'] = function() {
                uz['Z']['off'](uq['x']['Vy'], this['hp']),
                uz['Z']['off'](uq['x']['Wv'], this['zv']),
                uz['Z']['off'](uq['x']['Oy'], this['Ip']),
                uz['Z']['off'](uq['x']['Hy'], this['Up']),
                uz['Z']['off'](uq['x']['Ey'], this['Fp']),
                uz['Z']['off'](uq['x']['Yy'], this['Gp']),
                uz['Z']['off'](uq['x']['Fy'], this['iy']),
                uz['Z']['off'](uq['x']['By'], this['my']),
                uz['Z']['off'](uq['x']['Jy'], this['vy']),
                uz['Z']['off'](uq['x']['Ky'], this['uy']),
                uz['Z']['off'](uq['x']['Gy'], this['oy']),
                uz['Z']['off'](uq['x']['Qy'], this['xy']),
                this['tw']()['Is']()['removeEventListener']('click', this['Hp'], !0x1),
                this['Pl']['removeEventListener']('lock', this['Ep']),
                this['Pl']['removeEventListener']('unlock', this['tm']);
            }
            ,
            dF['Op'] = function(dS, dp) {
                this['np'] = [],
                this['sw'] = {
                    'hw': !0x1,
                    'nw': !0x1,
                    'cw': !0x1,
                    'rw': !0x1,
                    'ew': !0x1,
                    'xm': !0x1,
                    'nm': !0x1,
                    'xw': !0x1,
                    'uw': !0x1,
                    'ow': !0x1,
                    'fw': !0x1,
                    'lw': !0x1,
                    'mw': !0x1,
                    'zw': !0x1,
                    'dw': !0x1,
                    'pw': !0x1,
                    'yw': 0x0,
                    'ww': 0x0,
                    '$w': uv['G']['WHEEL'],
                    'bw': cC['n']['Ay'],
                    'ki': c1['P']['nn'],
                    'qw': (0x0,
                    uY['Ak'])(0x0, 0x0),
                    'cp': -0x1,
                    'kw': 0x0
                },
                this['np']['push'](this['sw']);
                var dj = this['xp'];
                this['xp'] = new c3['Z'](this),
                this['xp']['ep']['iv'] = dS,
                this['gy'] = dS,
                this['gp'] = new c3['Z'](this),
                this['gp']['ep']['iv'] = dS,
                this['Xp'] = new c3['Z'](this),
                this['Xp']['ep']['iv'] = dS,
                void 0x0 !== dj && (this['xp']['Ni'] = dj['Ni'],
                this['xp']['Ci'] = dj['Ci'],
                this['xp']['Ri'] = dj['Ri'],
                this['xp']['Ti'] = dj['Ti'],
                this['xp']['dp'] = dj['dp'],
                this['gp']['Ni'] = dj['Ni'],
                this['gp']['Ci'] = dj['Ci'],
                this['gp']['Ri'] = dj['Ri'],
                this['gp']['Ti'] = dj['Ti'],
                this['gp']['qo'] = dj['qo'],
                this['gp']['dp'] = dj['dp'],
                this['Xp']['Ni'] = dj['Ni'],
                this['Xp']['Ci'] = dj['Ci'],
                this['Xp']['Ri'] = dj['Ri'],
                this['Xp']['Ti'] = dj['Ti'],
                this['Xp']['dp'] = dj['dp'],
                this['Mp'](this['gp'], this['Xp'], !0x1)),
                this['Sm'] = new c6(),
                this['yp'] = !0x0,
                this['Pl']['zm']()['set'](dp['x'], dp['y'], 0x0),
                this['Dy']['Rs']()['rotation']['set'](dp['x'], dp['y'], 0x0);
                try {
                    var dV = uT['h']['getState']()
                      , dy = (0x0,
                    cA['DH'])(dV['settings']['primaryLoadout'])
                      , dM = (0x0,
                    cA['OA'])(dV['settings']['secondaryLoadout'])
                      , dK = dV['game']['A$'];
                    ur['GameAnalytics']['addDesignEvent'](dK + ':PRIMARY_LOADOUT_USAGE:' + dy, 0x1, {
                        'authenticated': dV['account']['authenticated'] ? 'true' : 'false'
                    }),
                    ur['GameAnalytics']['addDesignEvent'](dK + ':SECONDARY_LOADOUT_USAGE:' + dM, 0x1, {
                        'authenticated': dV['account']['authenticated'] ? 'true' : 'false'
                    });
                } catch (da) {}
            }
            ,
            dF['gw'] = function(dS) {
                if (this['Wp'] === cN) {
                    var dp = this['Jp']['sl'](this['xt']['Kp'][cb['ap']['MOVE_LEFT']])
                      , dj = this['Jp']['sl'](this['xt']['Kp'][cb['ap']['MOVE_RIGHT']])
                      , dV = this['Jp']['sl'](this['xt']['Kp'][cb['ap']['MOVE_FORWARD']])
                      , dy = this['Jp']['sl'](this['xt']['Kp'][cb['ap']['MOVE_BACKWARD']])
                      , dM = this['Jp']['sl'](this['xt']['Kp'][cb['ap']['JUMP']])
                      , dK = this['Jp']['il'](this['xt']['Kp'][cb['ap']['PRIMARY_ACTION']])
                      , da = this['Jp']['il'](this['xt']['Kp'][cb['ap']['SECONDARY_ACTION']]) || this['Jp']['sl'](this['xt']['Kp'][cb['ap']['SECONDARY_ACTION_2']])
                      , df = this['Jp']['sl'](this['xt']['Kp'][cb['ap']['CROUCH']])
                      , dl = this['Jp']['sl'](this['xt']['Kp'][cb['ap']['SPRINT']])
                      , dZ = this['Jp']['sl'](this['xt']['Kp'][cb['ap']['RELOAD']])
                      , dw = this['Jp']['hl'](this['xt']['Kp'][cb['ap']['DROP_CURRENT_ITEM']]);
                    u8['Z']['Jo'] && (dw = dK);
                    var dE = this['Jp']['sl'](this['xt']['Kp'][cb['ap']['SELECT_SLOT_1']])
                      , dv = this['Jp']['sl'](this['xt']['Kp'][cb['ap']['SELECT_SLOT_2']])
                      , dg = this['Jp']['sl'](this['xt']['Kp'][cb['ap']['SELECT_SLOT_3']])
                      , dQ = this['Jp']['sl'](this['xt']['Kp'][cb['ap']['SELECT_SLOT_4']])
                      , dO = this['Jp']['sl'](this['xt']['Kp'][cb['ap']['SELECT_SLOT_5']])
                      , dY = this['Jp']['sl'](this['xt']['Kp'][cb['ap']['SPRAY']]);
                    this['Jp']['hl'](this['xt']['Kp'][cb['ap']['INTERACT']]) && (this['Ty'] >= 0x0 ? uz['Z']['emit'](uq['x']['Cw'], this['Ty']) : -0x2 === this['Ty'] ? this['Gp'](c1['P']['en']) : -0x3 === this['Ty'] ? this['Gp'](c1['P']['rn']) : -0x4 === this['Ty'] ? this['Gp'](c1['P']['$n']) : -0x5 === this['Ty'] ? this['Gp'](c1['P']['un']) : -0x6 === this['Ty'] && this['Gp'](c1['P']['cn']));
                    var dP = this['ky']()
                      , dB = dP['x']
                      , dU = dP['y'];
                    this['gp'] = this['Xp']['qp'](),
                    this['gy'] = this['gp']['ep']['iv'];
                    var dD = this['Mw']()['Xw']()
                      , J0 = this['Jp']['cl']()
                      , J1 = this['Jp']['el']()
                      , J2 = this['xt']['Sw'] ? J0 : J1;
                    (this['xt']['Sw'] ? J1 : J0) ? this['Mw']()['Dw'](!0x0) : J2 ? this['Mw']()['Aw'](!0x0) : dE ? this['Mw']()['zp'](0x0, !0x0) : dv ? this['Mw']()['zp'](0x1, !0x0) : dg ? this['Mw']()['zp'](0x2, !0x0) : dQ ? this['Mw']()['zp'](0x3, !0x0) : dO && this['Mw']()['zp'](0x4, !0x0);
                    var J3 = dD !== this['Mw']()['Xw']()
                      , J4 = this['Xp']['ep']['cp']
                      , J5 = {
                        'hw': J3,
                        'nw': this['Bp'],
                        'cw': this['Qp'],
                        'rw': this['hy'],
                        'ew': dp,
                        'xm': dj,
                        'nm': dV,
                        'xw': dy,
                        'uw': dM,
                        'ow': dK,
                        'fw': da,
                        'lw': df,
                        'mw': dl,
                        'zw': dZ,
                        'dw': dw,
                        'pw': dY,
                        'qw': (0x0,
                        uY['Ak'])(dB, dU),
                        'cp': J4,
                        'yw': this['Mw']()['Xw'](),
                        'ww': this['Np'],
                        '$w': this['_p'],
                        'bw': this['ey'],
                        'ki': this['ty'],
                        'kw': this['Dv']['Am']()['Rw']()
                    };
                    this['Bp'] = !0x1,
                    this['Qp'] = !0x1,
                    this['hy'] = !0x1;
                    var J6 = this['sw'];
                    this['sw'] = J5,
                    this['np']['push'](J5),
                    uz['Z']['emit'](uq['x']['Tw'], J5),
                    this['kp'](this['Xp'], J6, J5, !0x0),
                    this['Mp'](this['gp'], this['Xp'], !0x0),
                    this['jw']();
                }
            }
            ,
            dF['kp'] = function(dS, dp, dj, dV) {
                var dy = u8['Z']['qr']
                  , dM = dS['ep']['fp'];
                dj['hw'] && dS['qo']['zp'](dj['yw'], dV),
                dS['ep'] = (0x0,
                uO['w5'])(dj, this['$y'], this['by'], this['py'], dy, dS),
                dj['cw'] && (dS['ki'] = dj['ki'],
                dj['ki'] === c1['P']['$n'] ? dS['qo']['pp'](0x4) : dj['ki'] === c1['P']['un'] ? dS['qo']['pp'](0x8) : dj['ki'] === c1['P']['cn'] ? dS['qo']['pp'](0xc) : dS['qo']['pp'](0x0)),
                dj['nw'] ? dS['qo']['Iw'](dj['ww'], dj['$w'], dV) : dj['rw'] && dS['qo']['Uw'](dj['bw'], dj['$w']),
                dM === uo['b']['Yd'] && dS['ep']['fp'] !== uo['b']['Yd'] && dS['bp']['Ww'](c2['Z']['Pw']),
                dS['qo']['Hl']()['Ol']()['Lw'](dS) && (dS['qo']['Hl']()['Ol']()['Vw'](dS, this, dp, dj, dV),
                dS['qo']['Hw'](dV)),
                dS['ep']['mp'] = (0x0,
                uO['Ao'])(this, dj, dS),
                dS['qo']['Hl']()['Ol']()['Ew'](dy, dS, this, dV),
                dS['qo']['Hw'](dV),
                dS['qo']['Hl']()['Ol']()['Yw'](dS),
                dj['dw'] && dS['bp']['Fw'](c2['Z']['Bw']) && dS['qo']['Nw'](dV),
                dV && c7(dS['ep']['iv'], dS['ep']['fp'], dS['ep']['rp'], this['Sm'], this['Dv']['Dm']()['Wh'](), this['Lp'], !0x0);
            }
            ,
            dF['Mp'] = function(dS, dp, dj) {
                var dV = new Map()
                  , dy = u8['Z']['Xr'] + u8['Z']['zr'] + u8['Z']['jr'];
                if (dS['qo']['_w']()['length'] !== dp['qo']['_w']()['length']) {
                    if (dS['qo']['_w']()['length'] < dp['qo']['_w']()['length'])
                        for (var dM = dS['qo']['_w']()['length']; dM < dp['qo']['_w']()['length']; dM++) {
                            var dK = dp['qo']['_w']()[dM];
                            dV['set'](dM, dK);
                        }
                    else {
                        for (var da = dp['qo']['_w']()['length']; da < dS['qo']['_w']()['length']; da++)
                            dV['set'](da, new uB['Z']((0x0,
                            uD['YJ'])(c4['q']['hn']),0x1));
                    }
                } else
                    dy = dp['qo']['_w']()['length'];
                for (var df = 0x0; df < dy; df++) {
                    var dl = dS['qo']['_w']()[df]
                      , dZ = dp['qo']['_w']()[df];
                    dl['Ol']()['Vl']() === dZ['Ol']()['Vl']() && dl['Jw']() === dZ['Jw']() && (0x0,
                    uD['qH'])(dl['Ol']()) === (0x0,
                    uD['qH'])(dZ['Ol']()) || (dV['set'](df, dZ),
                    dj && dZ['Ol']()['Vl']() !== c4['q']['hn'] && (dl['Ol']()['Vl']() !== dZ['Ol']()['Vl']() || dl['Jw']() < dZ['Jw']()) && this['fv']()['ym'](c5['k']['Kw']));
                }
                if (dS['qo']['Gw']()['Ol']()['Vl']() === dp['qo']['Gw']()['Ol']()['Vl']() && dS['qo']['Gw']()['Jw']() === dp['qo']['Gw']()['Jw']() && (0x0,
                uD['qH'])(dS['qo']['Gw']()['Ol']()) === (0x0,
                uD['qH'])(dp['qo']['Gw']()['Ol']()) || (uz['Z']['emit'](uq['x']['Zw'], dp['qo']['Gw']()),
                dj && this['fv']()['ym'](c5['k']['Kw'])),
                dS['qo']['Xw']() !== dp['qo']['Xw']() && uz['Z']['emit'](uq['x']['Qw'], dp['qo']['Xw']()),
                dS['qo']['Xw']() === dp['qo']['Xw']() && dS['qo']['Hl']()['Ol']()['Vl']() === dp['qo']['Hl']()['Ol']()['Vl']() && dS['qo']['Hl']()['Ol']()['D$']() === dp['qo']['Hl']()['Ol']()['D$']() && dS['qo']['Hl']()['Ol']()['W$']() === dp['qo']['Hl']()['Ol']()['W$']() || uz['Z']['emit'](uq['x']['tb'], dp['qo'], dp['qo']['Hl']()),
                dV['size'] > 0x0 && (uz['Z']['emit'](uq['x']['ib'], dV),
                (0x0,
                uD['pV'])(dp['qo']['Hl']()['Ol']()['Vl']()))) {
                    var dw = dp['qo']['Hl']()['Ol']();
                    uz['Z']['emit'](uq['x']['sb'], dw['hb'](), dp['qo']['nb'](dw['cb']()));
                }
                dS['ki'] !== dp['ki'] && uz['Z']['emit'](uq['x']['Py'], dp['ki']),
                dS['Ni'] === dp['Ni'] && dS['Ci'] === dp['Ci'] && dS['Ri'] === dp['Ri'] && dS['Ti'] === dp['Ti'] || uz['Z']['emit'](uq['x']['rb'], dp['Ni'], dp['Ci'], dp['Ri'], dp['Ti']),
                dS['ep']['fp'] !== uo['b']['Hd'] && dS['ep']['fp'] !== uo['b']['Ed'] || dp['ep']['fp'] === uo['b']['Hd'] || dp['ep']['fp'] === uo['b']['Ed'] ? dS['ep']['fp'] === uo['b']['Hd'] || dS['ep']['fp'] === uo['b']['Ed'] || dp['ep']['fp'] !== uo['b']['Hd'] && dp['ep']['fp'] !== uo['b']['Ed'] || (this['Lp']['Iy'](),
                this['Lp']['Uy'](),
                this['Cy'] = new cI(this['Dv']['Am'](),(0x0,
                uk['Yb'])()),
                this['Cy']['Cd'](this['Lp']['Gd']()),
                this['Dv']['Ms']()['add'](this['Cy']['_x']()),
                this['Pl']['fm'](this['Cy']['_x'](), 0xa)) : (this['Lp']['Pp'](),
                this['Lp']['Vp'](),
                this['Pl']['vm'](this['ky']()),
                this['Dv']['Ms']()['remove'](this['Cy']['_x']())),
                void 0x0 !== this['Cy'] && this['Cy']['Td'](dp['ep']['fp']);
            }
            ,
            dF['eb'] = function() {
                var dS = this['xb'](this['by']);
                if (dS['yy'])
                    return this['Dv']['Dm']()['Wh']()['Ax'](dS['J']['x'] + 0.01 * dS['wy']['x'], dS['J']['y'] + 0.01 * dS['wy']['y'], dS['J']['z'] + 0.01 * dS['wy']['z']);
            }
            ,
            dF['ub'] = function() {
                var dS = this['xb'](this['by']);
                if (dS['yy'])
                    return this['Dv']['Dm']()['Wh']()['Ax'](dS['J']['x'] - 0.01 * dS['wy']['x'], dS['J']['y'] - 0.01 * dS['wy']['y'], dS['J']['z'] - 0.01 * dS['wy']['z']);
            }
            ,
            dF['ab'] = function() {
                var dS = this
                  , dp = this['xb'](function(dj, dV, dy) {
                    return dS['$y'](dj, dV, dy) === uA['k']['ob'];
                });
                if (dp['yy'])
                    return this['Dv']['Dm']()['Wh']()['Ax'](dp['J']['x'] - 0.01 * dp['wy']['x'], dp['J']['y'] - 0.01 * dp['wy']['y'], dp['J']['z'] - 0.01 * dp['wy']['z']);
            }
            ,
            dF['fb'] = function() {
                var dS = this['xb'](this['by']);
                if (dS['yy'])
                    return this['Dv']['Dm']()['Wh']()['Ax'](dS['J']['x'] + 0.01 * dS['wy']['x'], dS['J']['y'] + 0.01 * dS['wy']['y'], dS['J']['z'] + 0.01 * dS['wy']['z']);
            }
            ,
            dF['xb'] = function(dS) {
                if (!this['sw'])
                    return {
                        'yy': !0x1,
                        'J': (0x0,
                        uJ['XX'])(0x0, 0x0, 0x0),
                        'wy': (0x0,
                        uJ['XX'])(0x0, 0x0, 0x0)
                    };
                var dp = (0x0,
                uJ['dg'])(this['Xp']['ep']['iv']);
                (0x0,
                uJ['$j'])(dp, (0x0,
                uJ['XX'])(0x0, this['Xp']['ep']['lp'], 0x0)),
                (0x0,
                uJ['BZ'])(dp, u8['Z']['Ir']);
                var dj = this['sw']['qw']['x']
                  , dV = this['sw']['qw']['y']
                  , dy = (0x0,
                um['ny'])((0x0,
                uY['Ak'])(dj, dV));
                return this['py'](dp, dy, u8['Z']['Qr'], dS);
            }
            ,
            dF['av'] = function(dS, dp, dj, dV) {
                var dy = this
                  , dM = this['Dv']['Dm']()['Wh']()['Px'](dS, dp, dj);
                this['Dv']['Dm']()['Lx'](dS, dp, dj, dV, !0x0);
                for (var dK = setTimeout(function() {
                    for (var dZ = 0x0; dZ < dy['Dp']['length']; dZ++) {
                        var dw = dy['Dp'][dZ];
                        if (dw['Ap'] === dS && dw['Rp'] === dp && dw['Tp'] === dj) {
                            dy['Dv']['Dm']()['Lx'](dS, dp, dj, dw['vb'][dw['vb']['length'] - 0x1], !0x1),
                            0x0 === dw['vb']['length'] ? dy['Dp']['splice'](dZ, 0x1) : (dw['vb']['pop'](),
                            dw['jp']['pop']());
                            break;
                        }
                    }
                }, 0x3e8 * u8['Z']['Jr']), da = !0x1, df = 0x0; df < this['Dp']['length']; df++) {
                    var dl = this['Dp'][df];
                    if (dl['Ap'] === dS && dl['Rp'] === dp && dl['Tp'] === dj) {
                        this['Dp'][df]['vb']['push'](dM),
                        this['Dp'][df]['jp']['push'](dK),
                        da = !0x0;
                        break;
                    }
                }
                da || this['Dp']['push']({
                    'Ap': dS,
                    'Rp': dp,
                    'Tp': dj,
                    'vb': [dM],
                    'jp': [dK]
                });
            }
            ,
            dF['jw'] = function() {
                if (this['Cv']['fh']()) {
                    this['Cv']['Os'] = (0x0,
                    uJ['XX'])(this['Xp']['ep']['iv']['x'], this['Xp']['ep']['iv']['y'], this['Xp']['ep']['iv']['z']),
                    this['Cv']['Hs'] = (0x0,
                    uJ['XX'])(Math['floor'](this['Xp']['ep']['iv']['x'] / u8['Z']['Ir']), Math['floor'](this['Xp']['ep']['iv']['y'] / u8['Z']['Ir']), Math['floor'](this['Xp']['ep']['iv']['z'] / u8['Z']['Ir'])),
                    this['Cv']['Es'] = this['Dv']['Dm']()['Wh']()['nx'](this['Xp']['ep']['iv']['x'] / u8['Z']['Ir'], this['Xp']['ep']['iv']['y'] / u8['Z']['Ir'], this['Xp']['ep']['iv']['z'] / u8['Z']['Ir']),
                    this['Cv']['Ys'] = (0x0,
                    uJ['XX'])(this['Xp']['ep']['vp']['x'], this['Xp']['ep']['vp']['y'], this['Xp']['ep']['vp']['z']);
                    var dS = this['ky']();
                    this['Cv']['Bs'] = dS['x'],
                    this['Cv']['Fs'] = dS['y'];
                }
            }
            ,
            dF['mh'] = function(dS) {
                this['gw'](dS),
                0x2 == ++this['Ry'] && (this['Ry'] = 0x0,
                this['lb']());
            }
            ,
            dF['lb'] = function() {
                for (var dS, dp = (0x0,
                uJ['XX'])(this['Dy']['Rs']()['position']['x'], this['Dy']['Rs']()['position']['y'], this['Dy']['Rs']()['position']['z']), dj = this['mb'](), dV = 0xf423f, dy = void 0x0, dM = cL(this['no']()['Am']()['pb']()); !(dS = dM())['done']; ) {
                    var dK = dS['value'];
                    if (dK['yb']() === cu['p']['wb'] && -0x1 === dK['$b']()) {
                        var da = (0x0,
                        uJ['XX'])(dK['_x']()['position']['x'], dK['_x']()['position']['y'], dK['_x']()['position']['z']);
                        if (!((0x0,
                        uJ['RJ'])(dp, da) >= 0x10)) {
                            var df = (0x0,
                            uJ['XX'])(da['x'] - dp['x'], da['y'] - dp['y'], da['z'] - dp['z'])
                              , dl = (0x0,
                            uJ['r1'])(df, dj)
                              , dZ = (0x0,
                            uJ['XX'])(dp['x'] + dj['x'] * dl, dp['y'] + dj['y'] * dl, dp['z'] + dj['z'] * dl)
                              , dw = (0x0,
                            uJ['RJ'])(da, dZ);
                            if (!(dw > 0.09)) {
                                var dE = dl - Math['sqrt'](0.09 - dw);
                                dE <= dV && (dV = dE,
                                dy = dK);
                            }
                        }
                    }
                }
                var dv = void 0x0 !== dy && void 0x0 !== dy['Ol']()
                  , dg = (0x0,
                uJ['dg'])(dp);
                (0x0,
                uJ['BZ'])(dg, u8['Z']['Ir']);
                var dQ = this['xb'](this['by'])
                  , dO = uA['k']['Kh'];
                if (!(0x0,
                uk['s9'])() && dQ['yy']) {
                    var dY = this['Dv']['Dm']()['Wh']()['Ax'](dQ['J']['x'] - 0.01 * dQ['wy']['x'], dQ['J']['y'] - 0.01 * dQ['wy']['y'], dQ['J']['z'] - 0.01 * dQ['wy']['z']);
                    dO = this['Dv']['Dm']()['Wh']()['Px'](dY['x'], dY['y'], dY['z']);
                }
                if (dv && dQ['yy']) {
                    var dP = (0x0,
                    uJ['dg'])(dQ['J']);
                    (0x0,
                    uJ['Mt'])(dP, u8['Z']['Ir']),
                    (0x0,
                    uJ['RJ'])(dP, dp) < dV * dV && (dv = !0x1);
                }
                if (this['Wp'] === ce)
                    -0x1 !== this['Ty'] && (this['Ty'] = -0x1,
                    this['jy'] = 0x0,
                    uz['Z']['emit'](uq['x']['bb'], c4['q']['hn'], cn['Sc']['Sn'], '', '', 0x1));
                else {
                    if (dv) {
                        if (dy['Vl']() !== this['Ty'] || dy['Jw']() !== this['jy']) {
                            var dB = this['Xp']['qo']['qb'](dy['Ol']()['Vl'](), dy['Jw']());
                            this['Ty'] = dy['Vl'](),
                            this['jy'] = dy['Jw'](),
                            uz['Z']['emit'](uq['x']['bb'], dy['Ol']()['kb'](), dy['Ol']()['gb'](), (0x0,
                            cR['r'])(dy['Ol']()['D$']())['tier'], dy['Ol']()['Cb'](), 'Press\x20' + (0x0,
                            uk['Ck'])(cb['ap']['INTERACT']) + '\x20to\x20' + (dB ? 'pick\x20up' : 'swap'), dy['Jw']());
                        }
                    } else
                        dO === uA['k']['en'] ? -0x2 !== this['Ty'] && (this['Ty'] = -0x2,
                        this['jy'] = 0x0,
                        uz['Z']['emit'](uq['x']['bb'], c4['q']['de'] + uA['k']['en'], cn['Sc']['Sn'], cW['W3']['Sn'], 'Work\x20Station', 'Press\x20' + (0x0,
                        uk['Ck'])(cb['ap']['INTERACT']) + '\x20to\x20use', 0x1)) : dO === uA['k']['rn'] ? -0x3 !== this['Ty'] && (this['Ty'] = -0x3,
                        this['jy'] = 0x0,
                        uz['Z']['emit'](uq['x']['bb'], c4['q']['de'] + uA['k']['rn'], cn['Sc']['Sn'], cW['W3']['Sn'], 'Loadout\x20Station', 'Press\x20' + (0x0,
                        uk['Ck'])(cb['ap']['INTERACT']) + '\x20to\x20change\x20loadouts', 0x1)) : dO === uA['k']['$n'] ? -0x4 !== this['Ty'] && (this['Ty'] = -0x4,
                        this['jy'] = 0x0,
                        uz['Z']['emit'](uq['x']['bb'], c4['q']['de'] + uA['k']['$n'], cn['Sc']['Sn'], cW['W3']['Sn'], 'Wooden\x20Chest', 'Press\x20' + (0x0,
                        uk['Ck'])(cb['ap']['INTERACT']) + '\x20to\x20open', 0x1)) : dO === uA['k']['un'] ? -0x5 !== this['Ty'] && (this['Ty'] = -0x5,
                        this['jy'] = 0x0,
                        uz['Z']['emit'](uq['x']['bb'], c4['q']['de'] + uA['k']['un'], cn['Sc']['Sn'], cW['W3']['Sn'], 'Iron\x20Chest', 'Press\x20' + (0x0,
                        uk['Ck'])(cb['ap']['INTERACT']) + '\x20to\x20open', 0x1)) : dO === uA['k']['Xb'] ? -0x6 !== this['Ty'] && (this['Ty'] = -0x6,
                        this['jy'] = 0x0,
                        uz['Z']['emit'](uq['x']['bb'], c4['q']['de'] + uA['k']['Xb'], cn['Sc']['Sn'], cW['W3']['Sn'], 'Golden\x20Chest', 'Press\x20' + (0x0,
                        uk['Ck'])(cb['ap']['INTERACT']) + '\x20to\x20open', 0x1)) : -0x1 !== this['Ty'] && (this['Ty'] = -0x1,
                        this['jy'] = 0x0,
                        uz['Z']['emit'](uq['x']['bb'], c4['q']['hn'], cn['Sc']['Sn'], '', '', 0x1));
                }
            }
            ,
            dF['Mb'] = function(dS, dp) {
                for (var dj = -dp; dj <= dp; dj++)
                    for (var dV = -dp; dV <= dp; dV++)
                        for (var dy = -dp; dy <= dp; dy++) {
                            var dM = (0x0,
                            uJ['dg'])(this['Xp']['ep']['iv']);
                            if ((0x0,
                            uJ['BZ'])(dM, u8['Z']['Ir']),
                            (0x0,
                            uJ['$j'])(dM, (0x0,
                            uJ['XX'])(dj, dV, dy)),
                            this['Dv']['Dm']()['Wh']()['Px'](dM['x'], dM['y'], dM['z']) === dS)
                                return !0x0;
                        }
                return !0x1;
            }
            ,
            dF['Wl'] = function() {
                return this['sw'];
            }
            ,
            dF['Sb'] = function() {
                return this['sw']['xw'] || this['sw']['nm'] || this['sw']['ew'] || this['sw']['xm'];
            }
            ,
            dF['Db'] = function() {
                return this['Xp']['ep']['rp'];
            }
            ,
            dF['Bd'] = function() {
                return this['Xp']['ep']['fp'];
            }
            ,
            dF['Ab'] = function() {
                return !this['Xp']['ep']['op'];
            }
            ,
            dF['Rb'] = function() {
                return 0x6 * this['gp']['ep']['mp'];
            }
            ,
            dF['Tb'] = function() {
                return 0x6 * this['Xp']['ep']['mp'];
            }
            ,
            dF['ky'] = function() {
                var dS = new u7['USm']()['setFromQuaternion'](this['Dy']['Rs']()['quaternion'], 'YXZ');
                return (0x0,
                uY['Ak'])(dS['x'], dS['y']);
            }
            ,
            dF['Ib'] = function() {
                var dS = this['Pl']['zm']();
                return (0x0,
                uY['Ak'])(dS['x'], dS['y']);
            }
            ,
            dF['mb'] = function() {
                var dS = this['ky']();
                return (0x0,
                um['ny'])(dS);
            }
            ,
            dF['Mw'] = function() {
                return this['Xp']['qo'];
            }
            ,
            dF['Ll'] = function() {
                return this['Xp'];
            }
            ,
            dF['Ub'] = function() {
                return this['Xp']['ep'];
            }
            ,
            dF['tw'] = function() {
                return this['Dy'];
            }
            ,
            dF['no'] = function() {
                return this['Dv'];
            }
            ,
            dF['fv'] = function() {
                return this['Lp'];
            }
            ,
            dF['Wb'] = function() {
                return this['Pl'];
            }
            ,
            dF['Pb'] = function() {
                return this['Wp'];
            }
            ,
            de;
        }())
          , cS = u2(0x718f)
          , cp = u2(0x109ea)
          , cj = function(de, dF, dS, dp) {
            var dj = de['Y'][uH(dF, dS, dp)];
            return void 0x0 === dj ? uA['k']['Kh'] : dj;
        }
          , cV = function(de, dF, dS, dp) {
            return cj(de, dF, dS, dp) !== uA['k']['Kh'];
        }
          , cy = function(de, dF, dS, dp) {
            return void 0x0 !== de['Y'][uH(dF, dS, dp)];
        }
          , cM = function(de) {
            var dF = []
              , dS = []
              , dp = []
              , dj = []
              , dV = [de['j']]
              , dy = new Set();
            for (dy['add'](uH(de['j']['x'], de['j']['y'], de['j']['z'])); dV['length'] > 0x0; ) {
                var dM = dV['pop']()
                  , dK = dM['x']
                  , da = dM['y']
                  , df = dM['z']
                  , dl = dK - de['j']['x']
                  , dZ = da - de['j']['y']
                  , dw = df - de['j']['z']
                  , dE = cV(de, dK, da, df)
                  , dv = uH(dK, da + 0x1, df);
                if (dE && !cV(de, dK, da + 0x1, df)) {
                    dF['push']((dl + 0.5) * u8['Z']['Ir'], (dZ + 0.5) * u8['Z']['Ir'], (dw + 0.5) * u8['Z']['Ir']),
                    dF['push']((dl - 0.5) * u8['Z']['Ir'], (dZ + 0.5) * u8['Z']['Ir'], (dw + 0.5) * u8['Z']['Ir']),
                    dF['push']((dl - 0.5) * u8['Z']['Ir'], (dZ + 0.5) * u8['Z']['Ir'], (dw - 0.5) * u8['Z']['Ir']),
                    dF['push']((dl + 0.5) * u8['Z']['Ir'], (dZ + 0.5) * u8['Z']['Ir'], (dw - 0.5) * u8['Z']['Ir']);
                    var dg = (0x0,
                    uR['ao'])(cV(de, dK + 0x1, da + 0x1, df), cV(de, dK, da + 0x1, df + 0x1), cV(de, dK + 0x1, da + 0x1, df + 0x1))
                      , dQ = (0x0,
                    uR['ao'])(cV(de, dK, da + 0x1, df + 0x1), cV(de, dK - 0x1, da + 0x1, df), cV(de, dK - 0x1, da + 0x1, df + 0x1))
                      , dO = (0x0,
                    uR['ao'])(cV(de, dK - 0x1, da + 0x1, df), cV(de, dK, da + 0x1, df - 0x1), cV(de, dK - 0x1, da + 0x1, df - 0x1))
                      , dY = (0x0,
                    uR['ao'])(cV(de, dK, da + 0x1, df - 0x1), cV(de, dK + 0x1, da + 0x1, df), cV(de, dK + 0x1, da + 0x1, df - 0x1));
                    dp['push'](dg),
                    dp['push'](dQ),
                    dp['push'](dO),
                    dp['push'](dY),
                    dg + dO < dQ + dY ? (dS['push'](dF['length'] / 0x3 - 0x3, dF['length'] / 0x3 - 0x4, dF['length'] / 0x3 - 0x1),
                    dS['push'](dF['length'] / 0x3 - 0x1, dF['length'] / 0x3 - 0x2, dF['length'] / 0x3 - 0x3)) : (dS['push'](dF['length'] / 0x3 - 0x4, dF['length'] / 0x3 - 0x1, dF['length'] / 0x3 - 0x2),
                    dS['push'](dF['length'] / 0x3 - 0x2, dF['length'] / 0x3 - 0x3, dF['length'] / 0x3 - 0x4));
                    var dP = uK['Z'][cj(de, dK, da, df)]['o']['i'];
                    dj['push'](dP['x'], dP['y'], 0x0, 0x1),
                    dj['push'](dP['x'], dP['y'], 0x1, 0x1),
                    dj['push'](dP['x'], dP['y'], 0x1, 0x0),
                    dj['push'](dP['x'], dP['y'], 0x0, 0x0);
                } else
                    cy(de, dK, da + 0x1, df) && !dy['has'](dv) && (dV['push']((0x0,
                    uJ['XX'])(dK, da + 0x1, df)),
                    dy['add'](dv));
                var dB = uH(dK, da - 0x1, df);
                if (dE && !cV(de, dK, da - 0x1, df)) {
                    dF['push']((dl + 0.5) * u8['Z']['Ir'], (dZ - 0.5) * u8['Z']['Ir'], (dw - 0.5) * u8['Z']['Ir']),
                    dF['push']((dl - 0.5) * u8['Z']['Ir'], (dZ - 0.5) * u8['Z']['Ir'], (dw - 0.5) * u8['Z']['Ir']),
                    dF['push']((dl - 0.5) * u8['Z']['Ir'], (dZ - 0.5) * u8['Z']['Ir'], (dw + 0.5) * u8['Z']['Ir']),
                    dF['push']((dl + 0.5) * u8['Z']['Ir'], (dZ - 0.5) * u8['Z']['Ir'], (dw + 0.5) * u8['Z']['Ir']);
                    var dU = (0x0,
                    uR['ao'])(cV(de, dK + 0x1, da - 0x1, df), cV(de, dK, da - 0x1, df - 0x1), cV(de, dK + 0x1, da - 0x1, df - 0x1))
                      , dD = (0x0,
                    uR['ao'])(cV(de, dK, da - 0x1, df - 0x1), cV(de, dK - 0x1, da - 0x1, df), cV(de, dK - 0x1, da - 0x1, df - 0x1))
                      , J0 = (0x0,
                    uR['ao'])(cV(de, dK - 0x1, da - 0x1, df), cV(de, dK, da - 0x1, df + 0x1), cV(de, dK - 0x1, da - 0x1, df + 0x1))
                      , J1 = (0x0,
                    uR['ao'])(cV(de, dK, da - 0x1, df + 0x1), cV(de, dK + 0x1, da - 0x1, df), cV(de, dK + 0x1, da - 0x1, df + 0x1));
                    dp['push'](dU),
                    dp['push'](dD),
                    dp['push'](J0),
                    dp['push'](J1),
                    dU + J0 < dD + J1 ? (dS['push'](dF['length'] / 0x3 - 0x3, dF['length'] / 0x3 - 0x4, dF['length'] / 0x3 - 0x1),
                    dS['push'](dF['length'] / 0x3 - 0x1, dF['length'] / 0x3 - 0x2, dF['length'] / 0x3 - 0x3)) : (dS['push'](dF['length'] / 0x3 - 0x4, dF['length'] / 0x3 - 0x1, dF['length'] / 0x3 - 0x2),
                    dS['push'](dF['length'] / 0x3 - 0x2, dF['length'] / 0x3 - 0x3, dF['length'] / 0x3 - 0x4));
                    var J2 = uK['Z'][cj(de, dK, da, df)]['o']['u'];
                    dj['push'](J2['x'], J2['y'], 0x0, 0x1),
                    dj['push'](J2['x'], J2['y'], 0x1, 0x1),
                    dj['push'](J2['x'], J2['y'], 0x1, 0x0),
                    dj['push'](J2['x'], J2['y'], 0x0, 0x0);
                } else
                    cy(de, dK, da - 0x1, df) && !dy['has'](dB) && (dV['push']((0x0,
                    uJ['XX'])(dK, da - 0x1, df)),
                    dy['add'](dB));
                var J3 = uH(dK + 0x1, da, df);
                if (dE && !cV(de, dK + 0x1, da, df)) {
                    dF['push']((dl + 0.5) * u8['Z']['Ir'], (dZ + 0.5) * u8['Z']['Ir'], (dw + 0.5) * u8['Z']['Ir']),
                    dF['push']((dl + 0.5) * u8['Z']['Ir'], (dZ + 0.5) * u8['Z']['Ir'], (dw - 0.5) * u8['Z']['Ir']),
                    dF['push']((dl + 0.5) * u8['Z']['Ir'], (dZ - 0.5) * u8['Z']['Ir'], (dw - 0.5) * u8['Z']['Ir']),
                    dF['push']((dl + 0.5) * u8['Z']['Ir'], (dZ - 0.5) * u8['Z']['Ir'], (dw + 0.5) * u8['Z']['Ir']);
                    var J4 = (0x0,
                    uR['ao'])(cV(de, dK + 0x1, da, df + 0x1), cV(de, dK + 0x1, da + 0x1, df), cV(de, dK + 0x1, da + 0x1, df + 0x1))
                      , J5 = (0x0,
                    uR['ao'])(cV(de, dK + 0x1, da + 0x1, df), cV(de, dK + 0x1, da, df - 0x1), cV(de, dK + 0x1, da + 0x1, df - 0x1))
                      , J6 = (0x0,
                    uR['ao'])(cV(de, dK + 0x1, da, df - 0x1), cV(de, dK + 0x1, da - 0x1, df), cV(de, dK + 0x1, da - 0x1, df - 0x1))
                      , J7 = (0x0,
                    uR['ao'])(cV(de, dK + 0x1, da - 0x1, df), cV(de, dK + 0x1, da, df + 0x1), cV(de, dK + 0x1, da - 0x1, df + 0x1));
                    dp['push'](J4),
                    dp['push'](J5),
                    dp['push'](J6),
                    dp['push'](J7),
                    J4 + J6 < J5 + J7 ? (dS['push'](dF['length'] / 0x3 - 0x3, dF['length'] / 0x3 - 0x4, dF['length'] / 0x3 - 0x1),
                    dS['push'](dF['length'] / 0x3 - 0x1, dF['length'] / 0x3 - 0x2, dF['length'] / 0x3 - 0x3)) : (dS['push'](dF['length'] / 0x3 - 0x4, dF['length'] / 0x3 - 0x1, dF['length'] / 0x3 - 0x2),
                    dS['push'](dF['length'] / 0x3 - 0x2, dF['length'] / 0x3 - 0x3, dF['length'] / 0x3 - 0x4));
                    var J8 = uK['Z'][cj(de, dK, da, df)]['o']['m'];
                    dj['push'](J8['x'], J8['y'], 0x0, 0x1),
                    dj['push'](J8['x'], J8['y'], 0x1, 0x1),
                    dj['push'](J8['x'], J8['y'], 0x1, 0x0),
                    dj['push'](J8['x'], J8['y'], 0x0, 0x0);
                } else
                    cy(de, dK + 0x1, da, df) && !dy['has'](J3) && (dV['push']((0x0,
                    uJ['XX'])(dK + 0x1, da, df)),
                    dy['add'](J3));
                var J9 = uH(dK - 0x1, da, df);
                if (dE && !cV(de, dK - 0x1, da, df)) {
                    dF['push']((dl - 0.5) * u8['Z']['Ir'], (dZ + 0.5) * u8['Z']['Ir'], (dw - 0.5) * u8['Z']['Ir']),
                    dF['push']((dl - 0.5) * u8['Z']['Ir'], (dZ + 0.5) * u8['Z']['Ir'], (dw + 0.5) * u8['Z']['Ir']),
                    dF['push']((dl - 0.5) * u8['Z']['Ir'], (dZ - 0.5) * u8['Z']['Ir'], (dw + 0.5) * u8['Z']['Ir']),
                    dF['push']((dl - 0.5) * u8['Z']['Ir'], (dZ - 0.5) * u8['Z']['Ir'], (dw - 0.5) * u8['Z']['Ir']);
                    var Ju = (0x0,
                    uR['ao'])(cV(de, dK - 0x1, da, df - 0x1), cV(de, dK - 0x1, da + 0x1, df), cV(de, dK - 0x1, da + 0x1, df - 0x1))
                      , Jc = (0x0,
                    uR['ao'])(cV(de, dK - 0x1, da + 0x1, df), cV(de, dK - 0x1, da, df + 0x1), cV(de, dK - 0x1, da + 0x1, df + 0x1))
                      , Jz = (0x0,
                    uR['ao'])(cV(de, dK - 0x1, da, df + 0x1), cV(de, dK - 0x1, da - 0x1, df), cV(de, dK - 0x1, da - 0x1, df + 0x1))
                      , Jq = (0x0,
                    uR['ao'])(cV(de, dK - 0x1, da - 0x1, df), cV(de, dK - 0x1, da, df - 0x1), cV(de, dK - 0x1, da - 0x1, df - 0x1));
                    dp['push'](Ju),
                    dp['push'](Jc),
                    dp['push'](Jz),
                    dp['push'](Jq),
                    Ju + Jz < Jc + Jq ? (dS['push'](dF['length'] / 0x3 - 0x3, dF['length'] / 0x3 - 0x4, dF['length'] / 0x3 - 0x1),
                    dS['push'](dF['length'] / 0x3 - 0x1, dF['length'] / 0x3 - 0x2, dF['length'] / 0x3 - 0x3)) : (dS['push'](dF['length'] / 0x3 - 0x4, dF['length'] / 0x3 - 0x1, dF['length'] / 0x3 - 0x2),
                    dS['push'](dF['length'] / 0x3 - 0x2, dF['length'] / 0x3 - 0x3, dF['length'] / 0x3 - 0x4));
                    var Jd = uK['Z'][cj(de, dK, da, df)]['o']['p'];
                    dj['push'](Jd['x'], Jd['y'], 0x0, 0x1),
                    dj['push'](Jd['x'], Jd['y'], 0x1, 0x1),
                    dj['push'](Jd['x'], Jd['y'], 0x1, 0x0),
                    dj['push'](Jd['x'], Jd['y'], 0x0, 0x0);
                } else
                    cy(de, dK - 0x1, da, df) && !dy['has'](J9) && (dV['push']((0x0,
                    uJ['XX'])(dK - 0x1, da, df)),
                    dy['add'](J9));
                var JJ = uH(dK, da, df + 0x1);
                if (dE && !cV(de, dK, da, df + 0x1)) {
                    dF['push']((dl - 0.5) * u8['Z']['Ir'], (dZ + 0.5) * u8['Z']['Ir'], (dw + 0.5) * u8['Z']['Ir']),
                    dF['push']((dl + 0.5) * u8['Z']['Ir'], (dZ + 0.5) * u8['Z']['Ir'], (dw + 0.5) * u8['Z']['Ir']),
                    dF['push']((dl + 0.5) * u8['Z']['Ir'], (dZ - 0.5) * u8['Z']['Ir'], (dw + 0.5) * u8['Z']['Ir']),
                    dF['push']((dl - 0.5) * u8['Z']['Ir'], (dZ - 0.5) * u8['Z']['Ir'], (dw + 0.5) * u8['Z']['Ir']);
                    var Jk = (0x0,
                    uR['ao'])(cV(de, dK - 0x1, da, df + 0x1), cV(de, dK, da + 0x1, df + 0x1), cV(de, dK - 0x1, da + 0x1, df + 0x1))
                      , Jr = (0x0,
                    uR['ao'])(cV(de, dK, da + 0x1, df + 0x1), cV(de, dK + 0x1, da, df + 0x1), cV(de, dK + 0x1, da + 0x1, df + 0x1))
                      , JT = (0x0,
                    uR['ao'])(cV(de, dK + 0x1, da, df + 0x1), cV(de, dK, da - 0x1, df + 0x1), cV(de, dK + 0x1, da - 0x1, df + 0x1))
                      , Jm = (0x0,
                    uR['ao'])(cV(de, dK, da - 0x1, df + 0x1), cV(de, dK - 0x1, da, df + 0x1), cV(de, dK - 0x1, da - 0x1, df + 0x1));
                    dp['push'](Jk),
                    dp['push'](Jr),
                    dp['push'](JT),
                    dp['push'](Jm),
                    Jk + JT < Jr + Jm ? (dS['push'](dF['length'] / 0x3 - 0x3, dF['length'] / 0x3 - 0x4, dF['length'] / 0x3 - 0x1),
                    dS['push'](dF['length'] / 0x3 - 0x1, dF['length'] / 0x3 - 0x2, dF['length'] / 0x3 - 0x3)) : (dS['push'](dF['length'] / 0x3 - 0x4, dF['length'] / 0x3 - 0x1, dF['length'] / 0x3 - 0x2),
                    dS['push'](dF['length'] / 0x3 - 0x2, dF['length'] / 0x3 - 0x3, dF['length'] / 0x3 - 0x4));
                    var Jx = uK['Z'][cj(de, dK, da, df)]['o']['l'];
                    dj['push'](Jx['x'], Jx['y'], 0x0, 0x1),
                    dj['push'](Jx['x'], Jx['y'], 0x1, 0x1),
                    dj['push'](Jx['x'], Jx['y'], 0x1, 0x0),
                    dj['push'](Jx['x'], Jx['y'], 0x0, 0x0);
                } else
                    cy(de, dK, da, df + 0x1) && !dy['has'](JJ) && (dV['push']((0x0,
                    uJ['XX'])(dK, da, df + 0x1)),
                    dy['add'](JJ));
                var JX = uH(dK, da, df - 0x1);
                if (dE && !cV(de, dK, da, df - 0x1)) {
                    dF['push']((dl + 0.5) * u8['Z']['Ir'], (dZ + 0.5) * u8['Z']['Ir'], (dw - 0.5) * u8['Z']['Ir']),
                    dF['push']((dl - 0.5) * u8['Z']['Ir'], (dZ + 0.5) * u8['Z']['Ir'], (dw - 0.5) * u8['Z']['Ir']),
                    dF['push']((dl - 0.5) * u8['Z']['Ir'], (dZ - 0.5) * u8['Z']['Ir'], (dw - 0.5) * u8['Z']['Ir']),
                    dF['push']((dl + 0.5) * u8['Z']['Ir'], (dZ - 0.5) * u8['Z']['Ir'], (dw - 0.5) * u8['Z']['Ir']);
                    var JI = (0x0,
                    uR['ao'])(cV(de, dK + 0x1, da, df - 0x1), cV(de, dK, da + 0x1, df - 0x1), cV(de, dK + 0x1, da + 0x1, df - 0x1))
                      , JC = (0x0,
                    uR['ao'])(cV(de, dK, da + 0x1, df - 0x1), cV(de, dK - 0x1, da, df - 0x1), cV(de, dK - 0x1, da + 0x1, df - 0x1))
                      , JG = (0x0,
                    uR['ao'])(cV(de, dK - 0x1, da, df - 0x1), cV(de, dK, da - 0x1, df - 0x1), cV(de, dK - 0x1, da - 0x1, df - 0x1))
                      , Jn = (0x0,
                    uR['ao'])(cV(de, dK, da - 0x1, df - 0x1), cV(de, dK + 0x1, da, df - 0x1), cV(de, dK + 0x1, da - 0x1, df - 0x1));
                    dp['push'](JI),
                    dp['push'](JC),
                    dp['push'](JG),
                    dp['push'](Jn),
                    JI + JG < JC + Jn ? (dS['push'](dF['length'] / 0x3 - 0x3, dF['length'] / 0x3 - 0x4, dF['length'] / 0x3 - 0x1),
                    dS['push'](dF['length'] / 0x3 - 0x1, dF['length'] / 0x3 - 0x2, dF['length'] / 0x3 - 0x3)) : (dS['push'](dF['length'] / 0x3 - 0x4, dF['length'] / 0x3 - 0x1, dF['length'] / 0x3 - 0x2),
                    dS['push'](dF['length'] / 0x3 - 0x2, dF['length'] / 0x3 - 0x3, dF['length'] / 0x3 - 0x4));
                    var JW = uK['Z'][cj(de, dK, da, df)]['o']['h'];
                    dj['push'](JW['x'], JW['y'], 0x0, 0x1),
                    dj['push'](JW['x'], JW['y'], 0x1, 0x1),
                    dj['push'](JW['x'], JW['y'], 0x1, 0x0),
                    dj['push'](JW['x'], JW['y'], 0x0, 0x0);
                } else
                    cy(de, dK, da, df - 0x1) && !dy['has'](JX) && (dV['push']((0x0,
                    uJ['XX'])(dK, da, df - 0x1)),
                    dy['add'](JX));
            }
            return {
                'J': (0x0,
                uJ['XX'])((de['j']['x'] + 0.5) * u8['Z']['Ir'], (de['j']['y'] + 0.5) * u8['Z']['Ir'], (de['j']['z'] + 0.5) * u8['Z']['Ir']),
                'X': dF,
                'Z': dS,
                '$$': dp,
                't$': dj
            };
        };
        function cK(de, dF) {
            var dS = 'undefined' != typeof Symbol && de[Symbol['iterator']] || de['@@iterator'];
            if (dS)
                return (dS = dS['call'](de))['next']['bind'](dS);
            if (Array['isArray'](de) || (dS = function(dj, dV) {
                if (!dj)
                    return;
                if ('string' == typeof dj)
                    return ca(dj, dV);
                var dy = Object['prototype']['toString']['call'](dj)['slice'](0x8, -0x1);
                'Object' === dy && dj['constructor'] && (dy = dj['constructor']['name']);
                if ('Map' === dy || 'Set' === dy)
                    return Array['from'](dj);
                if ('Arguments' === dy || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/['test'](dy))
                    return ca(dj, dV);
            }(de)) || dF && de && 'number' == typeof de['length']) {
                dS && (de = dS);
                var dp = 0x0;
                return function() {
                    return dp >= de['length'] ? {
                        'done': !0x0
                    } : {
                        'done': !0x1,
                        'value': de[dp++]
                    };
                }
                ;
            }
            throw new TypeError('Invalid\x20attempt\x20to\x20iterate\x20non-iterable\x20instance.\x0aIn\x20order\x20to\x20be\x20iterable,\x20non-array\x20objects\x20must\x20have\x20a\x20[Symbol.iterator]()\x20method.');
        }
        function ca(de, dF) {
            (null == dF || dF > de['length']) && (dF = de['length']);
            for (var dS = 0x0, dp = new Array(dF); dS < dF; dS++)
                dp[dS] = de[dS];
            return dp;
        }
        var cf = (function() {
            function de(dS) {
                var dp = this;
                this['Lb'] = function(dV, dy) {
                    if (void 0x0 !== dp['Kz']) {
                        if (dp['Kz']['Vl']() === dy['Ol']()['Vl']())
                            return;
                        (0x0,
                        uD['Lq'])(dp['Kz']['Vl']()) ? dp['Vb']() : dp['Kz']instanceof cp['Z'] ? dp['Ob'](void 0x0) : dp['Kz']['Vl']() !== c4['q']['Ee'] && dp['Kz']['Vl']() !== c4['q']['Se'] || dp['Hb'](void 0x0);
                    }
                    dp['Kz'] = dy['Ol'](),
                    (0x0,
                    uD['Lq'])(dy['Ol']()['Vl']()) ? (dp['Eb'](dy['Ol']()['Vl']() - c4['q']['de']),
                    dp['Fb']()) : dy['Ol']()instanceof cp['Z'] ? (dp['Bb']['opacity'] = 0.1,
                    dp['Nb']()) : dp['Kz']['Vl']() === c4['q']['Ee'] ? (dp['Bb']['opacity'] = 0.4,
                    dp['_b']()) : dp['Kz']['Vl']() === c4['q']['Se'] && (dp['Bb']['opacity'] = 0.2,
                    dp['Jb']());
                }
                ,
                this['Lp'] = dS;
                var dj = new u7['nvb'](u8['Z']['Ir'],u8['Z']['Ir'],u8['Z']['Ir']);
                this['Bb'] = new u7['vBJ']({
                    'color': 0xffffff,
                    'transparent': !0x0,
                    'opacity': 0.1,
                    'depthWrite': !0x1
                }),
                this['Kb'] = new u7['Kj0'](dj,this['Bb']),
                this['Kb']['renderOrder'] = -0x1,
                this['Kb']['scale']['set'](1.001, 1.001, 1.001),
                this['Lp']['ov']()['no']()['Ms']()['add'](this['Kb']),
                this['Gb'] = c3['f']['de'],
                this['Zb'] = new u7['jyz']({
                    'transparent': !0x0,
                    'uniforms': {
                        'map': {
                            'value': u9['Z']['Sh']()
                        }
                    },
                    'vertexShader': '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20attribute\x20vec4\x20realUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec4\x20vRealUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20mvPosition\x20=\x20modelViewMatrix\x20*\x20vec4(position,\x201.0);;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20projectionMatrix\x20*\x20mvPosition;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vRealUv\x20=\x20realUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
                    'fragmentShader': '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20sampler2D\x20map;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec4\x20vRealUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20atlasDim\x20=\x20' + u8['Z']['ur']['toFixed'](0x1) + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20diffuseColor\x20=\x20vec4(1.0,\x201.0,\x201.0,\x200.4);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20tilePosX\x20=\x20max(0.05,\x20min(0.95,\x20fract(vRealUv.z)));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20tilePosY\x20=\x20max(0.05,\x20min(0.95,\x20fract(vRealUv.w)));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20uv\x20=\x20vec2(vRealUv.x\x20*\x20(1.0\x20/\x20atlasDim)\x20+\x20tilePosX\x20*\x20(1.0\x20/\x20atlasDim),\x20vRealUv.y\x20*\x20(1.0\x20/\x20atlasDim)\x20+\x20tilePosY\x20*\x20(1.0\x20/\x20atlasDim));\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20texelColor\x20=\x20texture2D(map,\x20uv);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20texelColor\x20=\x20mapTexelToLinear(texelColor);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20diffuseColor\x20*=\x20texelColor.rgba;\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20diffuseColor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
                    'fog': !0x1,
                    'depthWrite': !0x1
                }),
                this['tq'] = new u7['vBJ']({
                    'color': 0xff0000,
                    'transparent': !0x0,
                    'opacity': 0.3,
                    'depthWrite': !0x1
                }),
                this['Rv']();
            }
            var dF = de['prototype'];
            return dF['Rv'] = function() {
                uz['Z']['on'](uq['x']['tb'], this['Lb']);
            }
            ,
            dF['gs'] = function(dS, dp) {
                void 0x0 !== this['Kz'] && ((0x0,
                uD['Lq'])(this['Kz']['Vl']()) ? (this['Gb'] !== this['Lp']['ov']()['Ll']()['dp'] && (this['Gb'] = this['Lp']['ov']()['Ll']()['dp'],
                this['Eb'](this['Kz']['Vl']() - c4['q']['de'])),
                this['Fb']()) : this['Kz']instanceof cp['Z'] ? this['Nb']() : this['Kz']['Vl']() === c4['q']['Ee'] ? this['_b']() : this['Kz']['Vl']() === c4['q']['Se'] && this['Jb']());
            }
            ,
            dF['_b'] = function() {
                var dS = this['Lp']['ov']()['ab']();
                this['Hb'](dS);
            }
            ,
            dF['Jb'] = function() {
                var dS = this['Lp']['ov']()['fb']();
                this['Hb'](dS);
            }
            ,
            dF['Nb'] = function() {
                var dS = this['Lp']['ov']()['ub']();
                this['Ob'](dS);
            }
            ,
            dF['Hb'] = function(dS) {
                if (dS) {
                    var dp = this['Lp']['ov']()['no']()['Dm']()['Wh']()['Rx'](dS['x'], dS['y'], dS['z']);
                    this['Kb']['position']['set'](dp['x'], dp['y'], dp['z']);
                } else
                    this['Kb']['position']['set'](0x0, -0x3e7, 0x0);
            }
            ,
            dF['Ob'] = function(dS) {
                var dp = this['Kz'];
                dS && this['Kz']instanceof cp['Z'] && dp['iq'](this['Lp']['ov']()['no']()['Dm']()['Wh']()['Px'](dS['x'], dS['y'], dS['z'])) ? this['Hb'](dS) : this['Kb']['position']['set'](0x0, -0x3e7, 0x0);
            }
            ,
            dF['Eb'] = function(dS) {
                this['Vb']();
                var dp = {
                    'j': (0x0,
                    uJ['XX'])(0x0, 0x0, 0x0),
                    'Y': {}
                };
                if (this['Gb'] === c3['f']['de'])
                    dp['Y'][uH(0x0, 0x0, 0x0)] = dS;
                else {
                    if (this['Gb'] === c3['f']['hq']) {
                        for (var dj = -0x1; dj <= 0x1; dj++)
                            for (var dV = 0x0; dV <= 0x2; dV++)
                                dp['Y'][uH(dj, dV, 0x0)] = dS;
                    } else {
                        if (this['Gb'] === c3['f']['nq']) {
                            for (var dy = -0x1; dy <= 0x1; dy++)
                                dp['Y'][uH(dy, 0x0, 0x0)] = dS,
                                dp['Y'][uH(dy, 0x0, 0x1)] = dS,
                                dp['Y'][uH(dy, 0x1, 0x1)] = dS,
                                dp['Y'][uH(dy, 0x1, 0x2)] = dS;
                        } else {
                            if (this['Gb'] === c3['f']['cq']) {
                                for (var dM = -0x1; dM <= 0x1; dM++)
                                    for (var dK = -0x1; dK <= 0x1; dK++)
                                        dp['Y'][uH(dM, 0x0, dK)] = dS;
                            }
                        }
                    }
                }
                var da = cM(dp)
                  , df = da['Z']
                  , dl = da['X']
                  , dZ = da['t$']
                  , dw = da['$$']
                  , dE = new u7['u9r']();
                dE['setAttribute']('position', new u7['a$l'](dl,0x3)),
                dE['setIndex'](new u7['qlB'](df,0x1)),
                dE['setAttribute']('ao', new u7['WTc'](dw,0x1,!0x0)),
                dE['setAttribute']('realUv', new u7['WTc'](dZ,0x4)),
                this['rq'] = new u7['Kj0'](dE,this['Zb']),
                this['rq']['scale']['set'](0.999, 0.999, 0.999),
                this['rq']['renderOrder'] = -0x1,
                this['Lp']['ov']()['no']()['Ms']()['add'](this['rq']);
            }
            ,
            dF['Vb'] = function() {
                void 0x0 !== this['rq'] && (this['rq']['geometry']['dispose'](),
                this['Lp']['ov']()['no']()['Ms']()['remove'](this['rq']),
                this['rq'] = void 0x0);
            }
            ,
            dF['Fb'] = function() {
                if (void 0x0 !== this['rq']) {
                    var dS = this['Lp']['ov']()['xb'](this['Lp']['ov']()['by']);
                    if (dS['yy']) {
                        var dp = this['Lp']['ov']()['no']()['Dm']()['Wh']()['Ax'](dS['J']['x'] + 0.01 * dS['wy']['x'], dS['J']['y'] + 0.01 * dS['wy']['y'], dS['J']['z'] + 0.01 * dS['wy']['z'])
                          , dj = [];
                        if (this['Gb'] === c3['f']['hq']) {
                            var dV = (0x0,
                            uJ['r1'])(this['Lp']['ov']()['mb'](), (0x0,
                            uJ['XX'])(0x0, 0x0, 0x1));
                            if (Math['abs'](dV) < 0.5) {
                                for (var dy = -0x1; dy <= 0x1; dy++)
                                    for (var dM = 0x0; dM <= 0x2; dM++)
                                        dj['push']((0x0,
                                        uJ['XX'])(dp['x'], dM + dp['y'], dy + dp['z']));
                                this['rq']['rotation']['set'](0x0, Math['PI'] / 0x2, 0x0);
                            } else {
                                for (var dK = -0x1; dK <= 0x1; dK++)
                                    for (var da = 0x0; da <= 0x2; da++)
                                        dj['push']((0x0,
                                        uJ['XX'])(dK + dp['x'], da + dp['y'], dp['z']));
                                this['rq']['rotation']['set'](0x0, 0x0, 0x0);
                            }
                        } else {
                            if (this['Gb'] === c3['f']['de'])
                                dj['push'](dp);
                            else {
                                if (this['Gb'] === c3['f']['nq']) {
                                    var df = this['Lp']['ov']()['ky']()['y'];
                                    if (df >= -Math['PI'] / 0x4 && df <= Math['PI'] / 0x4) {
                                        for (var dl = -0x1; dl <= 0x1; dl++)
                                            dj['push']((0x0,
                                            uJ['XX'])(dl + dp['x'], 0x0 + dp['y'], 0x0 + dp['z'])),
                                            dj['push']((0x0,
                                            uJ['XX'])(dl + dp['x'], 0x0 + dp['y'], -0x1 + dp['z'])),
                                            dj['push']((0x0,
                                            uJ['XX'])(dl + dp['x'], 0x1 + dp['y'], -0x1 + dp['z'])),
                                            dj['push']((0x0,
                                            uJ['XX'])(dl + dp['x'], 0x1 + dp['y'], -0x2 + dp['z']));
                                        this['rq']['rotation']['set'](0x0, -Math['PI'], 0x0);
                                    } else {
                                        if (df >= -Math['PI'] / 0x4 * 0x3 && df < -Math['PI'] / 0x4) {
                                            for (var dZ = -0x1; dZ <= 0x1; dZ++)
                                                dj['push']((0x0,
                                                uJ['XX'])(0x0 + dp['x'], 0x0 + dp['y'], dZ + dp['z'])),
                                                dj['push']((0x0,
                                                uJ['XX'])(0x1 + dp['x'], 0x0 + dp['y'], dZ + dp['z'])),
                                                dj['push']((0x0,
                                                uJ['XX'])(0x1 + dp['x'], 0x1 + dp['y'], dZ + dp['z'])),
                                                dj['push']((0x0,
                                                uJ['XX'])(0x2 + dp['x'], 0x1 + dp['y'], dZ + dp['z']));
                                            this['rq']['rotation']['set'](0x0, Math['PI'] / 0x2, 0x0);
                                        } else {
                                            if (df < -Math['PI'] / 0x4 * 0x3 || df >= Math['PI'] / 0x4 * 0x3) {
                                                for (var dw = -0x1; dw <= 0x1; dw++)
                                                    dj['push']((0x0,
                                                    uJ['XX'])(dw + dp['x'], 0x0 + dp['y'], 0x0 + dp['z'])),
                                                    dj['push']((0x0,
                                                    uJ['XX'])(dw + dp['x'], 0x0 + dp['y'], 0x1 + dp['z'])),
                                                    dj['push']((0x0,
                                                    uJ['XX'])(dw + dp['x'], 0x1 + dp['y'], 0x1 + dp['z'])),
                                                    dj['push']((0x0,
                                                    uJ['XX'])(dw + dp['x'], 0x1 + dp['y'], 0x2 + dp['z']));
                                                this['rq']['rotation']['set'](0x0, 0x0, 0x0);
                                            } else {
                                                for (var dE = -0x1; dE <= 0x1; dE++)
                                                    dj['push']((0x0,
                                                    uJ['XX'])(0x0 + dp['x'], 0x0 + dp['y'], dE + dp['z'])),
                                                    dj['push']((0x0,
                                                    uJ['XX'])(-0x1 + dp['x'], 0x0 + dp['y'], dE + dp['z'])),
                                                    dj['push']((0x0,
                                                    uJ['XX'])(-0x1 + dp['x'], 0x1 + dp['y'], dE + dp['z'])),
                                                    dj['push']((0x0,
                                                    uJ['XX'])(-0x2 + dp['x'], 0x1 + dp['y'], dE + dp['z']));
                                                this['rq']['rotation']['set'](0x0, -Math['PI'] / 0x2, 0x0);
                                            }
                                        }
                                    }
                                } else {
                                    if (this['Gb'] === c3['f']['cq']) {
                                        var dv = this['Lp']['ov']()['mb']()
                                          , dg = Math['abs'](dv['x']) > Math['abs'](dv['z']) ? dv['x'] > 0x0 ? (0x0,
                                        uJ['XX'])(0x1, 0x0, 0x0) : (0x0,
                                        uJ['XX'])(-0x1, 0x0, 0x0) : dv['z'] > 0x0 ? (0x0,
                                        uJ['XX'])(0x0, 0x0, 0x1) : (0x0,
                                        uJ['XX'])(0x0, 0x0, -0x1);
                                        if (0x0 === dS['wy']['y'])
                                            (0x0,
                                            uJ['$j'])(dp, dS['wy']);
                                        else {
                                            var dQ = this['Lp']['ov']()['no']()['Dm']()['Wh']()['Ax'](dS['J']['x'] - 0.01 * dS['wy']['x'], dS['J']['y'] - 0.01 * dS['wy']['y'], dS['J']['z'] - 0.01 * dS['wy']['z'])
                                              , dO = (0x0,
                                            uJ['dg'])(dQ)
                                              , dY = (0x0,
                                            uJ['dg'])(dQ);
                                            (0x0,
                                            uJ['$j'])(dO, dg),
                                            (0x0,
                                            uJ['$j'])(dY, dg),
                                            (0x0,
                                            uJ['$j'])(dY, (0x0,
                                            uJ['XX'])(0x0, dS['wy']['y'], 0x0));
                                            var dP = this['Lp']['ov']()['no']()['Dm']()['Wh']()['Px'](dO['x'], dO['y'], dO['z'])
                                              , dB = this['Lp']['ov']()['no']()['Dm']()['Wh']()['Px'](dY['x'], dY['y'], dY['z']);
                                            uK['Z'][dP]['t'] || uK['Z'][dB]['t'] || ((0x0,
                                            uJ['$j'])(dp, dg),
                                            (0x0,
                                            uJ['$j'])(dp, dg),
                                            (0x0,
                                            uJ['$j'])(dp, (0x0,
                                            uJ['XX'])(0x0, -dS['wy']['y'], 0x0)));
                                        }
                                        for (var dU = -0x1; dU <= 0x1; dU++)
                                            for (var dD = -0x1; dD <= 0x1; dD++)
                                                dj['push']((0x0,
                                                uJ['XX'])(dU + dp['x'], dp['y'], dD + dp['z']));
                                    }
                                }
                            }
                        }
                        this['rq']['visible'] = !0x0;
                        var J0 = this['Lp']['ov']()['no']()['Dm']()['Wh']()['Rx'](dp['x'], dp['y'], dp['z']);
                        if (this['rq']['position']['set'](J0['x'], J0['y'], J0['z']),
                        this['eq'](dj)) {
                            for (var J1 = 0x0, J2 = 0x0; J2 < dj['length']; J2++) {
                                var J3 = dj[J2]
                                  , J4 = this['Lp']['ov']()['no']()['Dm']()['Wh']()['Px'](J3['x'], J3['y'], J3['z']);
                                uK['Z'][J4]['t'] || ++J1;
                            }
                            this['Lp']['ov']()['Ll']()['qo']['xq']([{
                                'type': this['Kz']['Vl'](),
                                'count': J1
                            }]) ? this['rq']['material'] = this['Zb'] : this['rq']['material'] = this['tq'];
                        } else
                            this['rq']['material'] = this['tq'];
                    } else
                        this['rq']['visible'] = !0x1;
                }
            }
            ,
            dF['eq'] = function(dS) {
                for (var dp = this['Lp']['ov']()['no']()['Am']()['pb'](), dj = (0x0,
                uO['FY'])(this['Lp']['ov']()['Ub']()['iv'], this['Lp']['ov']()['Ub']()['lp']), dV = 0x0; dV < dS['length']; dV++) {
                    var dy = dS[dV]
                      , dM = this['Lp']['ov']()['no']()['Dm']()['Wh']()['Rx'](dy['x'], dy['y'], dy['z'])
                      , dK = (0x0,
                    uO['Z5'])(dM);
                    if ((0x0,
                    cS['v'])(dj, dK))
                        return !0x1;
                    for (var da, df = cK(dp); !(da = df())['done']; ) {
                        var dl = da['value'];
                        if (dl['yb']() === cu['p']['gm']) {
                            var dZ = dl;
                            if (dZ['sp']()) {
                                var dw = (0x0,
                                uO['FY'])(dZ['_x']()['position'], dZ['Bd']() === uo['b']['bm'] ? u8['Z']['pr'] : u8['Z']['Cr']);
                                if ((0x0,
                                cS['v'])(dw, dK))
                                    return !0x1;
                            }
                        }
                    }
                }
                return !0x0;
            }
            ,
            de;
        }())
          , cl = (function() {
            function de(dS) {
                this['Lp'] = dS,
                this['Av'] = new u7['Tme'](),
                this['uq'] = [];
            }
            var dF = de['prototype'];
            return dF['aq'] = function(dS, dp, dj) {
                if (this['Lp']['no']()['fq']()['oq']) {
                    var dV = u9['Z']['Tm'](dj);
                    (0x0,
                    uJ['cz'])(dp);
                    var dy = new u7['_fP']();
                    dy['setFromUnitVectors'](new u7['Pa4'](0x0,0x0,0x1), new u7['Pa4'](dp['x'],dp['y'],dp['z'])),
                    dV['position']['set'](dS['x'], dS['y'], dS['z']),
                    dV['rotation']['setFromQuaternion'](dy);
                    var dM = new u7['Pa4'](0x0,0x0,0x1);
                    dM['applyQuaternion'](dy),
                    this['Av']['add'](dV);
                    var dK = new u7['Pa4']();
                    dK['setFromMatrixColumn'](this['Lp']['ov']()['tw']()['Ts']()['matrix'], 0x0),
                    dK['normalize'](),
                    dK['multiplyScalar'](0x2),
                    dK['y'] = 1.5,
                    this['uq']['push']({
                        'mesh': dV,
                        'origin': dS,
                        'velocity': dK,
                        'rotationalAxis': dM
                    });
                }
            }
            ,
            dF['gs'] = function(dS, dp) {
                for (var dj = 0x0; dj < this['uq']['length']; dj++) {
                    var dV = this['uq'][dj]
                      , dy = dV['mesh']['position'];
                    dV['mesh']['position']['set'](dy['x'] + dV['velocity']['x'] * dS, dy['y'] + dV['velocity']['y'] * dS, dy['z'] + dV['velocity']['z'] * dS),
                    dV['velocity']['y'] -= 0xf * dS,
                    dV['mesh']['rotateOnWorldAxis'](dV['rotationalAxis'], 0x14 * dS),
                    dV['origin']['y'] - dy['y'] > 0x5 && (this['Av']['remove'](dV['mesh']),
                    u9['Z']['hd'](dV['mesh']),
                    this['uq'][dj] = this['uq'][this['uq']['length'] - 0x1],
                    this['uq']['pop'](),
                    --dj);
                }
            }
            ,
            dF['_x'] = function() {
                return this['Av'];
            }
            ,
            de;
        }())
          , cZ = (function() {
            function de(dS, dp, dj, dV) {
                var dy = this;
                this['vq'] = function(dM, dK, da) {
                    dy['ym'](dM, dK, da);
                }
                ,
                this['lq'] = function(dM, dK, da, df) {
                    dy['vv'](dM, dK, da, df);
                }
                ,
                this['ip'] = function(dM, dK, da, df, dl, dZ) {
                    df && (dy['mq'](),
                    dl && dy['ym'](c5['k']['zq'], 0x0, 0x1),
                    dy['ym'](c5['k']['dq'], 0x0, 0.8),
                    dZ && dy['ym'](c5['k']['pq'], 0x0, 0x1));
                }
                ,
                this['my'] = function(dM, dK) {
                    dy['ym'](c5['k']['yq'], 0x0, 0x1);
                    var da = new u7['xeV']({
                        'map': u9['Z']['qs'](),
                        'transparent': !0x0
                    })
                      , df = new u7['jyi'](da);
                    df['scale']['set'](0x4, u9['Z']['qs']()['image']['height'] / u9['Z']['qs']()['image']['width'] * 0x4, 0x1),
                    df['position']['z'] = -u8['Z']['Hr'] / 0x2,
                    dy['Dy']['As']()['add'](df);
                    var dl = {
                        'wq': df,
                        '$q': dM,
                        'bq': Date['now']()
                    };
                    dy['qq'](dl),
                    dy['kq']['push'](dl);
                }
                ,
                this['$v'] = function(dM, dK, da, df, dl, dZ, dw, dE, dv, dg) {
                    u8['Z']['Zr'] = dv,
                    u8['Z']['oo'] = dg,
                    dy['rs'](),
                    (0x0,
                    uk['bl'])(cG['Q']['me']),
                    (0x0,
                    uk['gN'])(dM),
                    (0x0,
                    uk['as'])(dK),
                    dy['Cd'](dl),
                    dy['Pl']['rs'](dM, da, df);
                }
                ,
                this['Lb'] = function(dM, dK) {
                    dy['Cq'](new u7['Pa4'](0x0,-0.4,0.4), 0.3, dy['Xq']['bind'](dy, dK['Ol']()));
                }
                ,
                this['Mq'] = function(dM) {
                    dy['Cq'](new u7['Pa4'](0x0,-0.4,0.4), (0x0,
                    ua['Gc'])(dM - (0x0,
                    ua['gq'])(0.5)), void 0x0);
                }
                ,
                this['xt'] = dS,
                this['Dy'] = dp,
                this['Dv'] = dj,
                this['Cv'] = dV,
                this['Sq'] = !0x1,
                this['Dq'] = 0x0,
                this['Lm'] = cz['C']['fn'],
                this['Aq'] = new u7['Tme'](),
                this['Rq'] = new u7['Tme'](),
                this['Tq'] = new u7['Tme'](),
                this['jq'] = new u7['Tme'](),
                this['Iq'] = new u7['Tme'](),
                this['Uq'] = new u7['Tme'](),
                this['kq'] = [],
                this['Wq'] = 0x0,
                this['Pq'] = 0x0,
                this['Vq'] = new u7['Pa4'](0x0,0x0,0x0),
                this['Pl'] = new cF(this['xt'],this['Dy'],this['Dv'],this['Cv'],this),
                this['Oq'] = new cf(this),
                this['Hq'] = new cl(this),
                this['Eq'] = new u7['Tme'](),
                this['Yq'] = 0x0,
                this['Fq'] = 0x0,
                this['Bq'] = 0x64,
                this['Nq'] = 0x0,
                this['_q'] = 0x0,
                this['Jq'] = 0x3e8 * (0x0,
                ua['Gc'])(c2['Z']['Kq']['duration']) / 0x2,
                this['Gq'] = u9['Z']['Zq'](),
                this['Qq'] = new u7['Xcj'](this['Gq']),
                this['tk'] = this['Qq']['clipAction'](u9['Z']['ik']()),
                this['sk'] = this['Qq']['clipAction'](u9['Z']['hk']()),
                this['nk'] = this['Qq']['clipAction'](u9['Z']['ck']()),
                this['sk']['play'](),
                this['sk']['paused'] = !0x0,
                this['tk']['play'](),
                this['tk']['paused'] = !0x0,
                this['nk']['play'](),
                this['nk']['paused'] = !0x0,
                this['rk'] = {},
                this['nk']['setLoop'](u7['jAl'], 0x1),
                this['nk']['clampWhenFinished'] = !0x0,
                this['ek'] = 0x0,
                this['xk'] = 0x0,
                this['Xq']((0x0,
                uD['YJ'])(c4['q']['hn'])),
                this['Rv']();
            }
            var dF = de['prototype'];
            return dF['uk'] = function() {
                this['nk']['paused'] && (0x1 === this['ek'] ? this['ek'] = 0x2 : 0x2 === this['ek'] && (this['nk']['reset'](),
                this['ek'] = 0x0),
                this['nk']['paused'] = !0x1);
            }
            ,
            dF['ak'] = function() {
                this['_q'] = Date['now']();
            }
            ,
            dF['fk'] = function() {
                this['Yq'] = Date['now']();
            }
            ,
            dF['vk'] = function() {
                this['Nq'] = Date['now']();
            }
            ,
            dF['Rv'] = function() {
                uz['Z']['on'](uq['x']['Tv'], this['$v']),
                uz['Z']['on'](uq['x']['tb'], this['Lb']),
                uz['Z']['on'](uq['x']['By'], this['my']),
                uz['Z']['on'](uq['x']['lk'], this['ip']),
                uz['Z']['on'](uq['x']['mk'], this['Mq']),
                uz['Z']['on'](uq['x']['zk'], this['vq']),
                uz['Z']['on'](uq['x']['dk'], this['lq']);
            }
            ,
            dF['Pv'] = function() {
                uz['Z']['off'](uq['x']['Tv'], this['$v']),
                uz['Z']['off'](uq['x']['tb'], this['Lb']),
                uz['Z']['off'](uq['x']['By'], this['my']),
                uz['Z']['off'](uq['x']['lk'], this['ip']),
                uz['Z']['off'](uq['x']['mk'], this['Mq']),
                uz['Z']['off'](uq['x']['zk'], this['vq']),
                uz['Z']['off'](uq['x']['dk'], this['lq']);
            }
            ,
            dF['pk'] = function(dS) {
                for (var dp = 0x0; dp < this['kq']['length']; dp++) {
                    this['qq'](this['kq'][dp]) && (this['kq'][dp] = this['kq'][this['kq']['length'] - 0x1],
                    this['kq']['pop'](),
                    --dp);
                }
            }
            ,
            dF['qq'] = function(dS) {
                var dp = Date['now']() - dS['bq']
                  , dj = u8['Z']['Dr']
                  , dV = u8['Z']['Yr'];
                if (dp > dj + dV)
                    return this['Dy']['As']()['remove'](dS['wq']),
                    dS['wq']['geometry']['dispose'](),
                    !0x0;
                dp > dj && (dS['wq']['material']['opacity'] = (dj + dV - dp) / dV);
                var dy = this['Pl']['ky']()['y']
                  , dM = (0x0,
                uY['Ak'])(-Math['sin'](dy), -Math['cos'](dy))
                  , dK = (0x0,
                uY['Ak'])(dS['$q']['x'] - this['Dy']['Rs']()['position']['x'], dS['$q']['z'] - this['Dy']['Rs']()['position']['z']);
                (0x0,
                uY['jG'])(dK);
                var da = Math['PI'] - (Math['atan2'](dM['x'] * dK['y'] - dM['y'] * dK['x'], dM['x'] * dK['x'] + dM['y'] * dK['y']) + Math['PI'] / 0x2);
                return dS['wq']['position']['x'] = 0x5 * Math['cos'](da),
                dS['wq']['position']['y'] = 0x5 * Math['sin'](da),
                dS['wq']['material']['rotation'] = da - Math['PI'] / 0x2,
                !0x1;
            }
            ,
            dF['Cq'] = function(dS, dp, dj) {
                this['yk'] = dp,
                this['wk'] = dS,
                dj && (this['$k'] = dj);
            }
            ,
            dF['jh'] = function() {
                this['Pv'](),
                this['Dy']['Ss']()['remove'](this['Dy']['Ts']()),
                this['Dy']['Ts']()['remove'](this['Uq']),
                this['bk'](),
                this['Pl']['jh'](),
                u9['Z']['nd'](this['Gq']);
            }
            ,
            dF['bk'] = function() {
                this['qk']['dispose'](),
                this['kk']['geometry']['dispose'](),
                this['gk']['geometry']['dispose'](),
                this['Xk']['geometry']['dispose'](),
                this['Mk']['geometry']['dispose'](),
                this['Sk']['geometry']['dispose'](),
                this['Uy']();
            }
            ,
            dF['Uy'] = function() {
                this['Dk']['visible'] = !0x1;
            }
            ,
            dF['Vp'] = function() {
                this['Dk']['visible'] = !0x0;
            }
            ,
            dF['Rk'] = function(dS) {
                this['kk']['position']['set'](0x0, dS + this['xt']['Tk'] / 0x2, 0x0),
                this['gk']['position']['set'](0x0, -dS - this['xt']['Tk'] / 0x2, 0x0),
                this['Xk']['position']['set'](-dS - this['xt']['Tk'] / 0x2, 0x0, 0x0),
                this['Mk']['position']['set'](dS + this['xt']['Tk'] / 0x2, 0x0, 0x0);
            }
            ,
            dF['jk'] = function() {
                this['qk'] = new u7['xeV']({
                    'color': this['xt']['Ik']
                }),
                this['kk'] = new u7['jyi'](this['qk']),
                this['kk']['scale']['set'](this['xt']['Uk'], this['xt']['Tk'], 0x1),
                this['kk']['visible'] = this['xt']['Pk'] === cb['hu']['CROSS_WITH_DOT'] || this['xt']['Pk'] === cb['hu']['CROSS'],
                this['gk'] = new u7['jyi'](this['qk']),
                this['gk']['scale']['set'](this['xt']['Uk'], this['xt']['Tk'], 0x1),
                this['gk']['visible'] = this['xt']['Pk'] === cb['hu']['CROSS_WITH_DOT'] || this['xt']['Pk'] === cb['hu']['CROSS'],
                this['Xk'] = new u7['jyi'](this['qk']),
                this['Xk']['scale']['set'](this['xt']['Tk'], this['xt']['Uk'], 0x1),
                this['Xk']['visible'] = this['xt']['Pk'] === cb['hu']['CROSS_WITH_DOT'] || this['xt']['Pk'] === cb['hu']['CROSS'],
                this['Mk'] = new u7['jyi'](this['qk']),
                this['Mk']['scale']['set'](this['xt']['Tk'], this['xt']['Uk'], 0x1),
                this['Mk']['visible'] = this['xt']['Pk'] === cb['hu']['CROSS_WITH_DOT'] || this['xt']['Pk'] === cb['hu']['CROSS'],
                this['Sk'] = new u7['jyi'](this['qk']),
                this['Sk']['scale']['set'](this['xt']['Uk'], this['xt']['Uk'], 0x1),
                this['Sk']['visible'] = this['xt']['Pk'] === cb['hu']['CROSS_WITH_DOT'] || this['xt']['Pk'] === cb['hu']['DOT'],
                this['Dk'] = new u7['Tme'](),
                this['Dk']['position']['z'] = -u8['Z']['Hr'],
                this['Dk']['add'](this['kk']),
                this['Dk']['add'](this['gk']),
                this['Dk']['add'](this['Xk']),
                this['Dk']['add'](this['Mk']),
                this['Dk']['add'](this['Sk']),
                this['Dy']['As']()['add'](this['Dk']);
            }
            ,
            dF['Vk'] = function(dS) {
                this['Rk'](this['Dq']);
            }
            ,
            dF['Ok'] = function(dS) {
                var dp = this['xt']['Tk'];
                this['Hk']['position']['set'](-dS - dp / 0x2, dS + dp / 0x2, 0x0),
                this['Ek']['position']['set'](dS + dp / 0x2, dS + dp / 0x2, 0x0),
                this['Yk']['position']['set'](-dS - dp / 0x2, -dS - dp / 0x2, 0x0),
                this['Fk']['position']['set'](dS + dp / 0x2, -dS - dp / 0x2, 0x0);
            }
            ,
            dF['Bk'] = function() {
                void 0x0 !== this['qk'] && (this['qk']['color']['set'](this['xt']['Ik']),
                this['qk']['needsUpdate'] = !0x0,
                this['kk']['scale']['set'](this['xt']['Uk'], this['xt']['Tk'], 0x1),
                this['kk']['visible'] = this['xt']['Pk'] === cb['hu']['CROSS_WITH_DOT'] || this['xt']['Pk'] === cb['hu']['CROSS'],
                this['gk']['scale']['set'](this['xt']['Uk'], this['xt']['Tk'], 0x1),
                this['gk']['visible'] = this['xt']['Pk'] === cb['hu']['CROSS_WITH_DOT'] || this['xt']['Pk'] === cb['hu']['CROSS'],
                this['Xk']['scale']['set'](this['xt']['Tk'], this['xt']['Uk'], 0x1),
                this['Xk']['visible'] = this['xt']['Pk'] === cb['hu']['CROSS_WITH_DOT'] || this['xt']['Pk'] === cb['hu']['CROSS'],
                this['Mk']['scale']['set'](this['xt']['Tk'], this['xt']['Uk'], 0x1),
                this['Mk']['visible'] = this['xt']['Pk'] === cb['hu']['CROSS_WITH_DOT'] || this['xt']['Pk'] === cb['hu']['CROSS'],
                this['Sk']['scale']['set'](this['xt']['Uk'], this['xt']['Uk'], 0x1),
                this['Sk']['visible'] = this['xt']['Pk'] === cb['hu']['CROSS_WITH_DOT'] || this['xt']['Pk'] === cb['hu']['DOT'],
                this['Hk']['scale']['set'](this['xt']['Uk'], this['xt']['Tk'], 0x1),
                this['Hk']['material']['color']['set'](this['xt']['_k']),
                this['Hk']['material']['needsUpdate'] = !0x0,
                this['Ek']['scale']['set'](this['xt']['Uk'], this['xt']['Tk'], 0x1),
                this['Ek']['material']['color']['set'](this['xt']['_k']),
                this['Ek']['material']['needsUpdate'] = !0x0,
                this['Yk']['scale']['set'](this['xt']['Uk'], this['xt']['Tk'], 0x1),
                this['Yk']['material']['color']['set'](this['xt']['_k']),
                this['Yk']['material']['needsUpdate'] = !0x0,
                this['Fk']['scale']['set'](this['xt']['Uk'], this['xt']['Tk'], 0x1),
                this['Fk']['material']['color']['set'](this['xt']['_k']),
                this['Fk']['material']['needsUpdate'] = !0x0);
            }
            ,
            dF['Jk'] = function() {
                this['Hk'] = new u7['jyi'](new u7['xeV']({
                    'color': this['xt']['_k'],
                    'rotation': Math['PI'] / 0x4
                })),
                this['Hk']['scale']['set'](this['xt']['Uk'], this['xt']['Tk'], 0x1),
                this['Ek'] = new u7['jyi'](new u7['xeV']({
                    'color': this['xt']['_k'],
                    'rotation': -Math['PI'] / 0x4
                })),
                this['Ek']['scale']['set'](this['xt']['Uk'], this['xt']['Tk'], 0x1),
                this['Yk'] = new u7['jyi'](new u7['xeV']({
                    'color': this['xt']['_k'],
                    'rotation': -Math['PI'] / 0x4
                })),
                this['Yk']['scale']['set'](this['xt']['Uk'], this['xt']['Tk'], 0x1),
                this['Fk'] = new u7['jyi'](new u7['xeV']({
                    'color': this['xt']['_k'],
                    'rotation': Math['PI'] / 0x4
                })),
                this['Fk']['scale']['set'](this['xt']['Uk'], this['xt']['Tk'], 0x1),
                this['Kk'] = new u7['Tme'](),
                this['Kk']['position']['z'] = -u8['Z']['Hr'],
                this['Kk']['add'](this['Hk']),
                this['Kk']['add'](this['Ek']),
                this['Kk']['add'](this['Yk']),
                this['Kk']['add'](this['Fk']),
                this['Dy']['As']()['add'](this['Kk']);
            }
            ,
            dF['Gk'] = function() {
                var dS = new u7['xeV']({
                    'map': u9['Z']['ks'](),
                    'transparent': !0x0,
                    'opacity': 0x0
                });
                this['Zk'] = new u7['jyi'](dS),
                this['Zk']['scale']['set'](0x1, u9['Z']['ks']()['image']['height'] / u9['Z']['ks']()['image']['width'], 0x1),
                this['sd']()['add'](this['Zk']);
            }
            ,
            dF['Qk'] = function(dS) {
                this['Hk']['material']['opacity'] = dS,
                this['Ek']['material']['opacity'] = dS,
                this['Yk']['material']['opacity'] = dS,
                this['Fk']['material']['opacity'] = dS;
            }
            ,
            dF['tg'] = function(dS) {
                this['Ok'](this['Dq']);
                var dp = Date['now']() - this['Wq'];
                if (dp > u8['Z']['Vr']) {
                    var dj = Math['max'](0x0, (u8['Z']['Vr'] + u8['Z']['Br'] - dp) / u8['Z']['Br']);
                    this['Qk'](dj);
                }
            }
            ,
            dF['mq'] = function() {
                this['Qk'](0x1),
                this['Wq'] = Date['now']();
            }
            ,
            dF['rs'] = function() {
                this['Sq'] = !0x0,
                this['ig'] = new u7['SJI'](),
                this['jk'](),
                this['Jk'](),
                this['Tq']['add'](this['Gq']),
                this['Rq']['add'](this['Tq']),
                this['Aq']['add'](this['Rq']),
                this['jq']['add'](this['Aq']),
                this['Iq']['add'](this['jq']),
                this['Uq']['add'](this['Iq']),
                this['Dy']['Ts']()['add'](this['Uq']),
                this['Gk'](),
                this['yk'] = 0x0,
                this['$k'] = function() {}
                ,
                this['wk'] = new u7['Pa4'](0x0,0x0,0x0),
                this['sg'] = new u7['USm'](0x0,0x0,0x0),
                this['hg'] = 0x1,
                this['ng'] = new u7['Pa4'](0x0,0x0,0x0),
                this['cg'] = new u7['Pa4'](0x0,0x0,0x0),
                this['rg'] = (0x0,
                uY['Ak'])(0x0, 0x0),
                this['eg'] = !0x1,
                this['xg'] = !0x1,
                this['ug'] = !0x1,
                this['ag'] = 0x0,
                this['Dy']['Ss']()['add'](this['Dy']['Ts']()),
                this['Dy']['Ss']()['add'](this['Hq']['_x']()),
                this['Dy']['Rs']()['add'](this['ig']);
                var dS = new u7['xeV']({
                    'color': 0xff,
                    'transparent': !0x0,
                    'opacity': 0.3,
                    'depthTest': !0x1
                });
                this['og'] = new u7['jyi'](dS),
                this['og']['scale']['set'](0xa, 0xa, 0x0),
                this['og']['position']['set'](0x0, 0x0, -0x1),
                this['og']['visible'] = !0x1,
                this['Dy']['As']()['add'](this['og']);
                var dp = new u7['xeV']({
                    'color': 0xff0000,
                    'transparent': !0x0,
                    'opacity': 0.3,
                    'depthTest': !0x1
                });
                this['fg'] = new u7['jyi'](dp),
                this['fg']['scale']['set'](0xa, 0xa, 0x0),
                this['fg']['position']['set'](0x0, 0x0, -0x1),
                this['fg']['visible'] = !0x1,
                this['Dy']['As']()['add'](this['fg']);
                var dj = new u7['xeV']({
                    'color': 0x0,
                    'transparent': !0x1,
                    'depthTest': !0x1
                });
                this['vg'] = new u7['jyi'](dj),
                this['vg']['scale']['set'](0xa, 0xa, 0x0),
                this['vg']['position']['set'](0x0, 0x0, -0x1),
                this['vg']['visible'] = !0x1,
                this['Dy']['As']()['add'](this['vg']);
            }
            ,
            dF['dm'] = function(dS, dp) {
                this['ym'](dS, Math['random']() * dp - dp / 0x2, 0.5);
            }
            ,
            dF['pm'] = function(dS, dp, dj) {
                this['vv'](dS, dp, Math['random']() * dj - dj / 0x2, 0.5);
            }
            ,
            dF['ym'] = function(dS, dp, dj) {
                void 0x0 === dp && (dp = 0x0),
                void 0x0 === dj && (dj = 0x1);
                var dV = this['rk'][dS];
                if (!(void 0x0 !== dV && Date['now']() - dV < 0x28)) {
                    var dy = new u7['BbS'](this['ig']);
                    dy['setBuffer'](u9['Z']['lg'](dS)),
                    dy['detune'] = dp,
                    dy['gain']['gain']['value'] = dj * (this['xt']['mg'] * this['xt']['mg']),
                    dy['play'](),
                    this['rk'][dS] = Date['now']();
                }
            }
            ,
            dF['vv'] = function(dS, dp, dj, dV, dy, dM, dK) {
                var da = this;
                if (void 0x0 === dj && (dj = 0x0),
                void 0x0 === dV && (dV = 0x1),
                void 0x0 === dy && (dy = 0x50 * u8['Z']['Ir']),
                void 0x0 === dM && (dM = 0xa * u8['Z']['Ir']),
                void 0x0 === dK && (dK = 0x2),
                !((0x0,
                uJ['RJ'])(dS, this['Dy']['Rs']()['position']) >= dy * dy)) {
                    var df = this['rk'][dp];
                    if (!(void 0x0 !== df && Date['now']() - df < 0x28)) {
                        var dl = new u7['VYz'](this['ig']);
                        dl['setBuffer'](u9['Z']['lg'](dp)),
                        dl['detune'] = dj,
                        dl['gain']['gain']['value'] = dV * (this['xt']['mg'] * this['xt']['mg']),
                        dl['setRefDistance'](dM),
                        dl['setRolloffFactor'](dK);
                        var dZ = new u7['Tme']();
                        dZ['add'](dl),
                        this['Dy']['Ss']()['add'](dZ),
                        dZ['position']['set'](dS['x'], dS['y'], dS['z']),
                        dl['play'](),
                        dl['source']['onended'] = function() {
                            dl['isPlaying'] = !0x1,
                            da['Dy']['Ss']()['remove'](dZ);
                        }
                        ,
                        this['rk'][dp] = Date['now']();
                    }
                }
            }
            ,
            dF['mh'] = function(dS) {
                (0x0,
                uk['Zp'])() === cG['Q']['me'] && (this['zg'](),
                this['Pl']['mh'](dS));
            }
            ,
            dF['zg'] = function() {
                var dS = (0x0,
                uJ['XX'])(this['Pl']['Ub']()['iv']['x'], this['Pl']['Ub']()['iv']['y'] + this['Pl']['Ub']()['lp'], this['Pl']['Ub']()['iv']['z']);
                (0x0,
                uJ['BZ'])(dS, u8['Z']['Ir']);
                var dp = this['Pl']['$y'](dS['x'], dS['y'], dS['z'])
                  , dj = !0x1;
                if ((0x0,
                uR['PP'])(dp)) {
                    var dV = (0x0,
                    uR['TH'])(dp);
                    dj = (0x0,
                    um['wQ'])(dS['y'], 0x1) <= dV;
                }
                var dy = uK['Z'][dp]['t'];
                this['og']['visible'] = dj,
                this['vg']['visible'] = dy && this['Pl']['Ll']()['ep']['fp'] !== uo['b']['Fd'],
                this['Dv']['yg']()['pg']((0x0,
                uY['Ak'])(this['Pl']['Ub']()['iv']['x'], this['Pl']['Ub']()['iv']['z'])) ? (this['fg']['visible'] = !0x1,
                this['Dy']['Cs'](u8['Z']['oo']),
                this['Dv']['Ms']()['fog']['color']['set'](u8['Z']['oo'])) : (this['fg']['visible'] = !0x0,
                this['Dy']['Cs'](u8['Z']['$o']),
                this['Dv']['Ms']()['fog']['color']['set'](u8['Z']['$o']));
            }
            ,
            dF['gs'] = function(dS, dp) {
                if (this['Sq']) {
                    0x0 === this['ek'] && this['nk']['time'] >= 0x1 / 0x3 && (this['nk']['paused'] = !0x0,
                    this['ek'] = 0x1),
                    this['Qq']['update'](dS);
                    var dj = dp / u8['Z']['qr'];
                    this['Dq'] = (0x0,
                    um['t7'])(this['Pl']['Rb'](), this['Pl']['Tb'](), dj),
                    this['Vk'](dS),
                    this['tg'](dS),
                    this['pk'](dS),
                    this['Pl']['gs'](dS, dp),
                    this['wg'](dS),
                    this['$g'](dS),
                    this['bg'](dS),
                    this['qg'](dS),
                    this['kg'](dS);
                    var dV = Date['now']() - this['Yq'] <= this['Bq']
                      , dy = Date['now']() - this['_q'] <= this['Jq'];
                    dV || dy || this['gg'](dS),
                    this['Cg'](dS),
                    this['Oq']['gs'](dS, dp),
                    this['Hq']['gs'](dS, dp);
                }
            }
            ,
            dF['kg'] = function(dS) {
                var dp = this['xt']['cs']
                  , dj = 0xa;
                this['Xg']() ? dp = this['Pl']['Mw']()['Hl']()['Ol']()['Mg'](this['xt']['cs'], this['xt']['Dg']) : this['Pl']['Bd']() === uo['b']['Yd'] && (dp = this['xt']['cs'] * (0x1 + 0.15 * this['xt']['Ag']),
                dj = 0x5);
                var dV = Math['abs'](dp - this['Dy']['Rs']()['fov'])
                  , dy = dp - this['Dy']['Rs']()['fov'] < 0x0 ? -0x1 : 0x1;
                this['Dy']['Rs']()['fov'] += Math['min'](dV * dj * dS, dV) * dy,
                this['Dy']['Rs']()['updateProjectionMatrix']();
            }
            ,
            dF['Xg'] = function() {
                return (0x0,
                uO['MH'])(this['Pl']['Wl'](), this['Pl']['Ll']());
            }
            ,
            dF['wg'] = function(dS) {
                var dp = this['Aq']['position'];
                if (this['yk'] > 0x0)
                    this['yk'] = this['yk'] - dS,
                    this['yk'] <= 0x0 && (this['yk'] = 0x0,
                    this['$k'](),
                    this['$k'] = function() {}
                    );
                else {
                    if (this['Pl']['Bd']() === uo['b']['Yd'])
                        this['wk']['set'](0x0, -0.4, 0.4);
                    else {
                        if (this['Xg']()) {
                            var dj = this['Pl']['Mw']()['Hl']()['Ol']()['Rg']();
                            this['wk']['set'](dj['x'], dj['y'], dj['z']);
                        } else
                            this['wk']['set'](0x0, 0x0, 0x0);
                    }
                }
                if (this['Xg']()) {
                    var dV = this['Pl']['Mw']()['Hl']()['Ol']()['Tg']();
                    this['sg']['set'](dV['x'], dV['y'], dV['z']),
                    this['xt']['jg'] || this['xt']['Ig'] || this['Uy'](),
                    this['xt']['Ig'] && (this['Aq']['visible'] = !0x1);
                } else
                    this['sg']['set'](0x0, 0x0, 0x0),
                    this['Pl']['Pb']() === cN && (this['Vp'](),
                    this['Aq']['visible'] = !0x0);
                var dy = (0x0,
                uk['jb'])();
                this['Xg']() && this['Pl']['Mw']()['Hl']()['Ol']()['Ug']() ? dy || (uz['Z']['emit'](uq['x']['Wg'], !0x0),
                this['Aq']['visible'] = !0x1,
                this['Uy']()) : dy && (uz['Z']['emit'](uq['x']['Wg'], !0x1),
                this['Pl']['Pb']() === cN && (this['Vp'](),
                this['Aq']['visible'] = !0x0));
                var dM = this['wk']['clone']()['sub'](dp)
                  , dK = dM['length']()
                  , da = dM['normalize']()['multiplyScalar'](Math['min'](dK, Math['pow'](dK + 0x1, 0x3) * dS));
                this['Aq']['position']['set'](dp['x'] + da['x'], dp['y'] + da['y'], dp['z'] + da['z']);
                var df = new u7['_fP']()['setFromEuler'](this['Aq']['rotation'])
                  , dl = new u7['_fP']()['setFromEuler'](this['sg']);
                df['rotateTowards'](dl, this['hg'] * dS),
                this['Aq']['rotation']['setFromQuaternion'](df);
            }
            ,
            dF['bg'] = function(dS) {
                var dp = this['Iq']['position'];
                Date['now']() - this['Yq'] <= this['Bq'] || Date['now']() - this['Nq'] <= 0x12c ? (dp['z'] = 0.1 * (Math['cos'](0x14 * this['Fq']) - 0x1) + 0.1,
                void 0x0 !== this['Pg'] && this['Pg']['rotation']['x'] < Math['PI'] / 0x3 && (this['Pg']['rotation']['x'] = Math['min'](Math['PI'] / 0x3, this['Pg']['rotation']['x'] + 0xa * dS)),
                this['Fq'] += dS) : (this['Fq'] = 0x0,
                dp['z'] > 0x0 ? dp['z'] = Math['max'](0x0, dp['z'] - 0xa * dS) : dp['z'] < 0x0 && (dp['z'] = Math['min'](0x0, dp['z'] + 0xa * dS)),
                void 0x0 !== this['Pg'] && this['Pg']['rotation']['x'] > 0x0 && (this['Pg']['rotation']['x'] = Math['max'](0x0, this['Pg']['rotation']['x'] - 0xa * dS)));
            }
            ,
            dF['qg'] = function(dS) {
                var dp = this['Uq']['position'];
                if (Date['now']() - this['_q'] <= this['Jq'] / 0x2)
                    dp['z'] = (Date['now']() - this['_q']) / (this['Jq'] / 0x2) * -0.2;
                else {
                    var dj = 0x1 - Math['min'](0x1, (Date['now']() - this['_q'] - this['Jq'] / 0x2) / (this['Jq'] / 0x2));
                    dp['z'] = -0.2 * dj;
                }
            }
            ,
            dF['gg'] = function(dS) {
                var dp = this['Tq']['position'];
                dp['add'](this['cg']['clone']()['multiplyScalar'](dS)),
                dp['lengthSq']() > 0.2 * 0.2 && (dp['normalize'](),
                dp['multiplyScalar'](0.2));
                var dj = 0.008
                  , dV = 0.009;
                this['Pl']['Sb']() && this['Pl']['Bd']() !== uo['b']['bm'] && (dj = 0.01,
                dV = 0.04);
                var dy = this['Pl']['Sb']();
                this['Pl']['Wl']()['fw'] ? (this['cg']['y'] = 0x3 * -dp['y'],
                this['xk'] = 0x0) : !this['eg'] && dy || this['eg'] && !dy ? this['xk'] <= 0x0 ? (this['cg']['y'] = -dV,
                this['xk'] = -0x1) : (this['cg']['y'] = dV,
                this['xk'] = 0x1) : 0x0 === this['xk'] || dp['y'] < -dj && -0x1 === this['xk'] ? (this['cg']['y'] = dV,
                this['xk'] = 0x1) : dp['y'] > dj && 0x1 === this['xk'] && (this['cg']['y'] = -dV,
                this['xk'] = -0x1),
                this['eg'] = dy;
            }
            ,
            dF['$g'] = function(dS) {
                var dp = this['Rq']['position'];
                dp['add'](this['ng']['clone']()['multiplyScalar'](dS));
                var dj = 0.03;
                dp['lengthSq']() > 0.0009 && (dp['normalize'](),
                dp['multiplyScalar'](dj));
                var dV = this['Pl']['Ib']()
                  , dy = !0x0
                  , dM = (0x0,
                um['BS'])(this['rg']['x'], dV['x'])
                  , dK = (0x0,
                um['BS'])(this['rg']['y'], dV['y'])
                  , da = this['Pl']['Ab']()
                  , df = this['Pl']['Db']()
                  , dl = this['Xg']() ? 0.2 : 0.7;
                Math['abs'](dM) > 0x0 && (dy = !0x1,
                this['ng']['y'] = dM * dl),
                Math['abs'](dK) > 0x0 && (dy = !0x1,
                this['ng']['x'] = -dK * dl),
                !this['xg'] && df && (this['ag'] = 0.1),
                this['ag'] > 0x0 && (dy = !0x1,
                this['Xg']() ? this['ng']['y'] = -0.05 : this['ng']['y'] = -0.5,
                this['ag'] = Math['max'](0x0, this['ag'] - dS)),
                dy && (this['ng']['x'] = 0x5 * -dp['x'],
                this['ng']['y'] = 0x5 * -dp['y']),
                this['ug'] = da,
                this['xg'] = df,
                this['rg'] = dV;
            }
            ,
            dF['Lg'] = function(dS) {
                this['jq']['position']['set'](0x0, 0x0, 0x0),
                this['Vq']['set'](0x0, 0x0, dS),
                this['Pq'] = 0.5,
                this['Zk']['material']['opacity'] = 0.9,
                this['Zk']['material']['rotation'] = Math['random']() * Math['PI'] * 0x2;
            }
            ,
            dF['Cg'] = function(dS) {
                var dp = this['jq']['position']
                  , dj = this['Vq']['clone']()['sub'](dp)
                  , dV = dj['length']();
                dV < 0.0001 && (this['Vq']['set'](0x0, 0x0, 0x0),
                this['Pq'] = 0.5),
                this['Zk']['material']['opacity'] = Math['max'](0x0, this['Zk']['material']['opacity'] - 0x14 * dS);
                var dy = dj['normalize']()['multiplyScalar'](Math['min'](dV, this['Pq'] * dS));
                this['jq']['position']['set'](dp['x'] + dy['x'], dp['y'] + dy['y'], dp['z'] + dy['z']);
            }
            ,
            dF['sd'] = function() {
                return this['Gq']['getObjectByName'](u9['Z']['Og']('Bone_Right_Hand'));
            }
            ,
            dF['Xq'] = (function() {
                var dS = (0x0,
                u4['Z'])(u6()['mark'](function dp(dj) {
                    var dV, dy;
                    return u6()['wrap'](function(dM) {
                        for (; ; )
                            switch (dM['prev'] = dM['next']) {
                            case 0x0:
                                return this['Pg'] && (this['sd']()['remove'](this['Pg']),
                                this['Pg']['remove'](this['Eq']),
                                u9['Z']['hd'](this['Pg'])),
                                dM['next'] = 0x3,
                                dj['Hg'](!0x1);
                            case 0x3:
                                this['Pg'] = dM['sent'],
                                u9['Z']['Um'](this['Pg']),
                                (0x0,
                                uD['pV'])(dj['Vl']()) && (dV = dj,
                                this['Pg']['add'](this['Eq']),
                                dy = dV['Eg'](),
                                this['Eq']['position']['set'](dy['x'], dy['y'], dy['z'])),
                                dj['Vd']() === cm['E']['Od'] ? (this['sk']['setEffectiveWeight'](0x1),
                                this['tk']['setEffectiveWeight'](0x0),
                                this['nk']['setEffectiveWeight'](0x0)) : dj['Vd']() === cm['E']['hn'] ? (this['sk']['setEffectiveWeight'](0x0),
                                this['tk']['setEffectiveWeight'](0x0),
                                this['nk']['setEffectiveWeight'](0x1)) : (this['sk']['setEffectiveWeight'](0x0),
                                this['tk']['setEffectiveWeight'](0x1),
                                this['nk']['setEffectiveWeight'](0x0)),
                                this['sd']()['add'](this['Pg']);
                            case 0x8:
                            case 'end':
                                return dM['stop']();
                            }
                    }, dp, this);
                }));
                return function(dj) {
                    return dS['apply'](this, arguments);
                }
                ;
            }()),
            dF['od'] = function() {
                var dS = (0x0,
                uJ['XX'])(this['Pl']['tw']()['Rs']()['position']['x'], this['Pl']['tw']()['Rs']()['position']['y'], this['Pl']['tw']()['Rs']()['position']['z']);
                this['Pl']['no']()['fd']()['od'](dS, this['Pl']['mb'](), this['Dq']);
            }
            ,
            dF['aq'] = function(dS) {
                var dp = new u7['Pa4']();
                this['Eq']['getWorldPosition'](dp),
                this['Hq']['aq'](dp, this['Pl']['mb'](), dS);
            }
            ,
            dF['Iy'] = function() {
                this['Uq']['visible'] = !0x1;
            }
            ,
            dF['Pp'] = function() {
                this['Uq']['visible'] = !0x0;
            }
            ,
            dF['ov'] = function() {
                return this['Pl'];
            }
            ,
            dF['Yg'] = function() {
                return this['Zk'];
            }
            ,
            dF['Fg'] = function() {
                return this['Oq'];
            }
            ,
            dF['Bg'] = function() {
                return this['Hq'];
            }
            ,
            dF['Gd'] = function() {
                return this['Lm'];
            }
            ,
            dF['Cd'] = function(dS) {
                this['Lm'] = dS,
                this['Gq']['traverse'](function(dp) {
                    dp['material'] && dp['name'] === u9['Z']['Og']('Arms') && (dS === cz['C']['fn'] ? dp['material']['map'] = u9['Z']['Zd']() : dS === cz['C']['ln'] ? dp['material']['map'] = u9['Z']['Qd']() : dS === cz['C']['sn'] && (dp['material']['map'] = u9['Z']['tp']()));
                });
            }
            ,
            dF['no'] = function() {
                return this['Dv'];
            }
            ,
            de;
        }());
        function cw(de, dF) {
            var dS = 'undefined' != typeof Symbol && de[Symbol['iterator']] || de['@@iterator'];
            if (dS)
                return (dS = dS['call'](de))['next']['bind'](dS);
            if (Array['isArray'](de) || (dS = function(dj, dV) {
                if (!dj)
                    return;
                if ('string' == typeof dj)
                    return cE(dj, dV);
                var dy = Object['prototype']['toString']['call'](dj)['slice'](0x8, -0x1);
                'Object' === dy && dj['constructor'] && (dy = dj['constructor']['name']);
                if ('Map' === dy || 'Set' === dy)
                    return Array['from'](dj);
                if ('Arguments' === dy || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/['test'](dy))
                    return cE(dj, dV);
            }(de)) || dF && de && 'number' == typeof de['length']) {
                dS && (de = dS);
                var dp = 0x0;
                return function() {
                    return dp >= de['length'] ? {
                        'done': !0x0
                    } : {
                        'done': !0x1,
                        'value': de[dp++]
                    };
                }
                ;
            }
            throw new TypeError('Invalid\x20attempt\x20to\x20iterate\x20non-iterable\x20instance.\x0aIn\x20order\x20to\x20be\x20iterable,\x20non-array\x20objects\x20must\x20have\x20a\x20[Symbol.iterator]()\x20method.');
        }
        function cE(de, dF) {
            (null == dF || dF > de['length']) && (dF = de['length']);
            for (var dS = 0x0, dp = new Array(dF); dS < dF; dS++)
                dp[dS] = de[dS];
            return dp;
        }
        var cv = function(de) {
            function dF(dp, dj) {
                var dV;
                return (dV = de['call'](this, dj, cu['p']['wb'], dp) || this)['_g'] = 0x0,
                dV['Jg'] = Math['random']() * Math['PI'] * 0x2,
                dV['Kg'] = 0x1,
                dV['Gg'] = -0x1,
                dV['Vm'] = cT['Z']['NONE'],
                dV['Om'] = 0x0,
                dV;
            }
            (0x0,
            uU['Z'])(dF, de);
            var dS = dF['prototype'];
            return dS['yd'] = function(dp) {
                for (var dj, dV = cw(dp); !(dj = dV())['done']; ) {
                    var dy = dj['value'];
                    switch (dy['wd']) {
                    case cc['m']['Sd']:
                        this['Zg'](dy['qd']);
                        break;
                    case cc['m']['Qg']:
                        this['Gg'] = dy['qd'];
                        break;
                    case cc['m']['tC']:
                        this['Kg'] = dy['qd'];
                        break;
                    case cc['m']['iC']:
                        void 0x0 !== this['sC'] && this['sC']['hC'](dy['qd']);
                        break;
                    case cc['m']['Xd']:
                        this['Vm'] = dy['qd'];
                        break;
                    case cc['m']['Md']:
                        this['Om'] = dy['qd'];
                    }
                }
            }
            ,
            dS['gs'] = function(dp, dj) {
                if (this['Gg'] >= 0x0) {
                    var dV = !0x0
                      , dy = (0x0,
                    uJ['XX'])(0x0, 0x0, 0x0);
                    if (this['Gg'] === (0x0,
                    uk['Yb'])())
                        dy = (0x0,
                        uJ['dg'])(this['Am']()['no']()['fv']()['ov']()['Ub']()['iv']);
                    else {
                        var dM = this['Am']()['nC'](this['Gg']);
                        void 0x0 === dM ? (this['Am']()['cC'](this['Vl']()),
                        dV = !0x1) : dy = (0x0,
                        uJ['XX'])(dM['_x']()['position']['x'], dM['_x']()['position']['y'], dM['_x']()['position']['z']);
                    }
                    if (dV) {
                        dy['y'] += u8['Z']['Ir'];
                        var dK = (0x0,
                        uJ['XX'])(this['_x']()['position']['x'], this['_x']()['position']['y'], this['_x']()['position']['z']);
                        if ((0x0,
                        uJ['RJ'])(dK, dy) < 0.2 * 0.2 || (0x0,
                        uJ['RJ'])(dK, dy) > 0x19)
                            this['Am']()['cC'](this['Vl']());
                        else {
                            var da = (0x0,
                            uJ['XX'])(dy['x'] - this['_x']()['position']['x'], dy['y'] - this['_x']()['position']['y'], dy['z'] - this['_x']()['position']['z']);
                            (0x0,
                            uJ['cz'])(da),
                            (0x0,
                            uJ['Mt'])(da, 0xa * dp),
                            this['_x']()['position']['set'](dK['x'] + da['x'], dK['y'] + da['y'], dK['z'] + da['z']),
                            this['_x']()['updateMatrix']();
                        }
                    }
                } else
                    void 0x0 !== this['Pg'] && (this['Jg'] += dp,
                    this['Pg']['position']['set'](0x0, Math['cos'](this['Jg']) * (u8['Z']['Ir'] / 0x20), 0x0),
                    this['Pg']['updateMatrix'](),
                    this['_x']()['updateMatrix']());
            }
            ,
            dS['jh'] = function() {
                void 0x0 !== this['Pg'] && (this['_x']()['remove'](this['Pg']),
                u9['Z']['hd'](this['Pg']),
                this['Pg'] = void 0x0),
                void 0x0 !== this['rC'] && (this['_x']()['remove'](this['rC']),
                u9['Z']['hd'](this['rC']),
                this['rC'] = void 0x0);
            }
            ,
            dS['Ol'] = function() {
                return this['sC'];
            }
            ,
            dS['Jw'] = function() {
                return this['Kg'];
            }
            ,
            dS['$b'] = function() {
                return this['Gg'];
            }
            ,
            dS['Gz'] = function(dp) {
                this['_g'] = dp['y'],
                this['_x']()['position']['set'](dp['x'], dp['y'], dp['z']),
                this['_x']()['updateMatrix']();
            }
            ,
            dS['Ud'] = function(dp) {}
            ,
            dS['Zg'] = (function() {
                var dp = (0x0,
                u4['Z'])(u6()['mark'](function dj(dV) {
                    var dy, dM, dK, da;
                    return u6()['wrap'](function(df) {
                        for (; ; )
                            switch (df['prev'] = df['next']) {
                            case 0x0:
                                return (dy = (0x0,
                                uD['YJ'])(dV))['_d'](this['Vm'], this['Om']),
                                df['next'] = 0x4,
                                dy['eC'](!0x1);
                            case 0x4:
                                dM = df['sent'],
                                u9['Z']['Um'](dM),
                                this['jh'](),
                                this['sC'] = dy,
                                this['Pg'] = dM,
                                this['_x']()['add'](this['Pg']),
                                dK = new u7['vBJ']({
                                    'map': u9['Z']['xC'](),
                                    'color': (0x0,
                                    cn['Dx'])(this['sC']['gb']()),
                                    'transparent': !0x0,
                                    'opacity': 0.9,
                                    'side': u7['ehD'],
                                    'depthWrite': !0x1,
                                    'fog': !0x1
                                }),
                                da = new u7['BKK'](0x1,0x1,0x1,0x1),
                                this['rC'] = new u7['Kj0'](da,dK),
                                this['rC']['position']['set'](this['Pg']['position']['x'], this['Pg']['position']['y'] - 0.08, this['Pg']['position']['z']),
                                this['rC']['scale']['set'](0.5, 0.5, 0.5),
                                this['rC']['rotation']['set'](-Math['PI'] / 0x2, 0x0, 0x0),
                                this['_x']()['add'](this['rC']);
                            case 0x11:
                            case 'end':
                                return df['stop']();
                            }
                    }, dj, this);
                }));
                return function(dV) {
                    return dp['apply'](this, arguments);
                }
                ;
            }()),
            dF;
        }(c9['Z']);
        function co(de, dF) {
            var dS = 'undefined' != typeof Symbol && de[Symbol['iterator']] || de['@@iterator'];
            if (dS)
                return (dS = dS['call'](de))['next']['bind'](dS);
            if (Array['isArray'](de) || (dS = function(dj, dV) {
                if (!dj)
                    return;
                if ('string' == typeof dj)
                    return cg(dj, dV);
                var dy = Object['prototype']['toString']['call'](dj)['slice'](0x8, -0x1);
                'Object' === dy && dj['constructor'] && (dy = dj['constructor']['name']);
                if ('Map' === dy || 'Set' === dy)
                    return Array['from'](dj);
                if ('Arguments' === dy || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/['test'](dy))
                    return cg(dj, dV);
            }(de)) || dF && de && 'number' == typeof de['length']) {
                dS && (de = dS);
                var dp = 0x0;
                return function() {
                    return dp >= de['length'] ? {
                        'done': !0x0
                    } : {
                        'done': !0x1,
                        'value': de[dp++]
                    };
                }
                ;
            }
            throw new TypeError('Invalid\x20attempt\x20to\x20iterate\x20non-iterable\x20instance.\x0aIn\x20order\x20to\x20be\x20iterable,\x20non-array\x20objects\x20must\x20have\x20a\x20[Symbol.iterator]()\x20method.');
        }
        function cg(de, dF) {
            (null == dF || dF > de['length']) && (dF = de['length']);
            for (var dS = 0x0, dp = new Array(dF); dS < dF; dS++)
                dp[dS] = de[dS];
            return dp;
        }
        var cQ = function(de) {
            function dF(dp, dj) {
                var dV, dy;
                dy = de['call'](this, dj, cu['p']['uC'], dp) || this;
                var dM = {
                    'e$': un['BLOCKS_MESH'],
                    'j': (0x0,
                    uJ['XX'])(0x0, 0x0, 0x0),
                    'Y': (dV = {},
                    dV[uH(0x0, 0x0, 0x0)] = uA['k']['uC'],
                    dV)
                }
                  , dK = cM(dM)
                  , da = dK['Z']
                  , df = dK['X']
                  , dl = dK['t$']
                  , dZ = dK['$$']
                  , dw = new u7['u9r']();
                dw['setAttribute']('position', new u7['a$l'](df,0x3)),
                dw['setIndex'](new u7['qlB'](da,0x1)),
                dw['setAttribute']('ao', new u7['WTc'](dZ,0x1,!0x0)),
                dw['setAttribute']('realUv', new u7['WTc'](dl,0x4)),
                dy['aC'] = new u7['jyz']({
                    'transparent': !0x1,
                    'uniforms': {
                        'map': {
                            'value': u9['Z']['Sh']()
                        },
                        'blendValue': {
                            'value': 0x0
                        }
                    },
                    'vertexShader': '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20attribute\x20vec4\x20realUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec4\x20vRealUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20mvPosition\x20=\x20modelViewMatrix\x20*\x20vec4(position,\x201.0);;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20projectionMatrix\x20*\x20mvPosition;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vRealUv\x20=\x20realUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
                    'fragmentShader': '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20sampler2D\x20map;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20blendValue;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec4\x20vRealUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20atlasDim\x20=\x20' + u8['Z']['ur']['toFixed'](0x1) + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20diffuseColor\x20=\x20vec4(1.0,\x201.0,\x201.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20tilePosX\x20=\x20max(0.05,\x20min(0.95,\x20fract(vRealUv.z)));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20tilePosY\x20=\x20max(0.05,\x20min(0.95,\x20fract(vRealUv.w)));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20uv\x20=\x20vec2(vRealUv.x\x20*\x20(1.0\x20/\x20atlasDim)\x20+\x20tilePosX\x20*\x20(1.0\x20/\x20atlasDim),\x20vRealUv.y\x20*\x20(1.0\x20/\x20atlasDim)\x20+\x20tilePosY\x20*\x20(1.0\x20/\x20atlasDim));\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20texelColor\x20=\x20texture2D(map,\x20uv);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20texelColor\x20=\x20mapTexelToLinear(texelColor);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20diffuseColor\x20*=\x20texelColor.rgba;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20diffuseColor\x20=\x20mix(diffuseColor,\x20vec4(1.0,\x201.0,\x201.0,\x201.0),\x20blendValue);\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20diffuseColor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
                    'fog': !0x1
                });
                var dE = new u7['Kj0'](dw,dy['aC']);
                return dy['_x']()['add'](dE),
                dy['oC'] = 0x0,
                dy['fC'] = !0x1,
                dy['vC'] = !0x1,
                dy['lC'] = Date['now'](),
                dy;
            }
            (0x0,
            uU['Z'])(dF, de);
            var dS = dF['prototype'];
            return dS['yd'] = function(dp) {
                for (var dj, dV = co(dp); !(dj = dV())['done']; ) {
                    var dy = dj['value'];
                    if (dy['wd'] === cc['m']['mC'])
                        this['fC'] = !0x0,
                        this['vC'] = !0x0,
                        this['lC'] = Date['now'](),
                        this['oC'] = 0x3e8 * (0x0,
                        ua['Gc'])(dy['qd']);
                }
            }
            ,
            dS['gs'] = function(dp, dj) {
                if (this['fC']) {
                    !this['vC'] || 0x0 === this['_x']()['position']['x'] && 0x0 === this['_x']()['position']['y'] && 0x0 === this['_x']()['position']['z'] || (this['vC'] = !0x1,
                    this['Am']()['no']()['fv']()['vv'](this['_x']()['position'], c5['k']['zC']));
                    var dV = Date['now']() - this['lC'];
                    this['aC']['uniforms']['blendValue']['value'] = Math['sin'](dV / 0x3e8 * 0xa) / 0x2 + 0.5;
                    var dy = this['oC'] - 0x64;
                    if (dV > dy) {
                        0x1 === this['_x']()['scale']['x'] ? this['Am']()['no']()['fv']()['vv'](this['_x']()['position'], c5['k']['dC']) : this['_x']()['scale']['x'] > 0x3 && (this['_x']()['visible'] = !0x1);
                        var dM = (dV - dy) / 0x64 * 0.5 + 0x1;
                        this['_x']()['scale']['set'](dM, dM, dM),
                        this['_x']()['updateMatrix']();
                    }
                }
            }
            ,
            dS['jh'] = function() {
                void 0x0 !== this['pC'] && (this['_x']()['remove'](this['pC']),
                u9['Z']['hd'](this['pC']),
                this['pC'] = void 0x0);
            }
            ,
            dS['Gz'] = function(dp) {
                this['_x']()['position']['set'](dp['x'], dp['y'], dp['z']),
                this['_x']()['updateMatrix']();
            }
            ,
            dS['Ud'] = function(dp) {}
            ,
            dF;
        }(c9['Z'])
          , cO = u2(0xaf72)
          , cY = (function() {
            function de(dS) {
                var dp = this;
                this['yC'] = function(dj) {
                    dp['wC']['push'](dj);
                }
                ,
                this['$C'] = function(dj, dV) {
                    dp['bC'](dj, dV);
                }
                ,
                this['qC'] = function(dj) {
                    dp['cC'](dj);
                }
                ,
                this['Id'] = function(dj, dV) {
                    dp['kC'](dj) ? dp['nC'](dj)['Id'](dV) : console['error']('Invalid\x20entity\x20action\x20command!');
                }
                ,
                this['gC'] = function(dj, dV) {
                    var dy = dp['nC'](dj);
                    void 0x0 !== dy && dy['yd'](dV);
                }
                ,
                this['ip'] = function(dj, dV, dy, dM, dK, da) {
                    var df = dp['CC'][dj];
                    void 0x0 !== df && df['ip'](dV, dy, dK);
                }
                ,
                this['Up'] = function(dj, dV, dy) {
                    if (dj !== (0x0,
                    uk['Yb'])()) {
                        var dM = dp['nC'](dj);
                        if (void 0x0 !== dM) {
                            var dK = dM;
                            dK['XC'](dV),
                            dK['MC'](dy),
                            dK['Gz'](dV),
                            dK['Ud'](dy),
                            dK['Jz'] = !0x0,
                            dK['lh']();
                        }
                    } else
                        dp['wC'] = [];
                }
                ,
                this['mh'] = function(dj) {
                    for (var dV = 0x0, dy = Object['values'](dp['CC']); dV < dy['length']; dV++) {
                        dy[dV]['mh'](dj);
                    }
                }
                ,
                this['Dv'] = dS,
                this['Av'] = new u7['Tme'](),
                this['wC'] = [],
                this['CC'] = {},
                this['Rv']();
            }
            var dF = de['prototype'];
            return dF['Rv'] = function() {
                uz['Z']['on'](uq['x']['SC'], this['yC']),
                uz['Z']['on'](uq['x']['DC'], this['$C']),
                uz['Z']['on'](uq['x']['AC'], this['Id']),
                uz['Z']['on'](uq['x']['RC'], this['qC']),
                uz['Z']['on'](uq['x']['TC'], this['gC']),
                uz['Z']['on'](uq['x']['lk'], this['ip']),
                uz['Z']['on'](uq['x']['Hy'], this['Up']);
            }
            ,
            dF['Pv'] = function() {
                uz['Z']['off'](uq['x']['SC'], this['yC']),
                uz['Z']['off'](uq['x']['DC'], this['$C']),
                uz['Z']['off'](uq['x']['AC'], this['Id']),
                uz['Z']['off'](uq['x']['RC'], this['qC']),
                uz['Z']['off'](uq['x']['TC'], this['gC']),
                uz['Z']['off'](uq['x']['lk'], this['ip']),
                uz['Z']['off'](uq['x']['Hy'], this['Up']);
            }
            ,
            dF['jh'] = function() {
                this['Pv']();
                for (var dS = 0x0, dp = Object['values'](this['CC']); dS < dp['length']; dS++) {
                    dp[dS]['jh']();
                }
            }
            ,
            dF['gs'] = function(dS, dp) {
                for (var dj, dV, dy = Date['now']() - 0x64; this['wC']['length'] >= 0x2 && dy >= this['wC'][0x0]['jC'](); ) {
                    dj = this['wC'][0x0];
                    for (var dM = (dV = this['wC'][0x1])['jC']() - dy, dK = dV['jC']() - dj['jC'](), da = dV['jC']() <= dy ? 0x0 : dM / dK, df = 0x0, dl = Object['values'](this['CC']); df < dl['length']; df++) {
                        var dZ = dl[df]
                          , dw = dj['IC']()['get'](dZ['Vl']())
                          , dE = dV['IC']()['get'](dZ['Vl']());
                        dZ['UC'](dw, dE, da);
                    }
                    if (!(this['wC']['length'] > 0x2 && dV['jC']() <= dy))
                        break;
                    this['wC']['shift']();
                }
                for (var dv = 0x0, dg = Object['values'](this['CC']); dv < dg['length']; dv++) {
                    dg[dv]['gs'](dS, dp);
                }
            }
            ,
            dF['Rw'] = function() {
                if (0x0 === this['wC']['length'])
                    return -0x1;
                for (var dS = Date['now']() - 0x64, dp = 0x0, dj = this['wC']['length'] - 0x1, dV = -0x1; dp <= dj; ) {
                    var dy = Math['floor']((dp + dj) / 0x2);
                    this['wC'][dy]['jC']() > dS ? dj = dy - 0x1 : (dV = dy,
                    dp = dy + 0x1);
                }
                if (-0x1 === dV)
                    return this['wC'][0x0]['WC']();
                var dM = dV
                  , dK = dM < this['wC']['length'] - 0x1 ? dM + 0x1 : dM
                  , da = dM === dK ? 0x0 : (dS - this['wC'][dM]['jC']()) / (this['wC'][dK]['jC']() - this['wC'][dM]['jC']());
                return (0x0,
                um['t7'])(this['wC'][dM]['WC'](), this['wC'][dK]['WC'](), da);
            }
            ,
            dF['bC'] = function(dS, dp) {
                if (this['kC'](dS))
                    console['error']('Duplicate\x20entity\x20spawn\x20command!', dS, cu['p'][dp]);
                else
                    switch (dp) {
                    case cu['p']['gm']:
                        var dj = new cI(this,dS);
                        this['Av']['add'](dj['_x']()),
                        this['CC'][dS] = dj;
                        break;
                    case cu['p']['wb']:
                        var dV = new cv(this,dS);
                        this['Av']['add'](dV['_x']()),
                        this['CC'][dS] = dV;
                        break;
                    case cu['p']['PC']:
                        var dy = new cO['Z'](this,dS);
                        this['Av']['add'](dy['_x']()),
                        this['CC'][dS] = dy;
                        break;
                    case cu['p']['uC']:
                        var dM = new cQ(this,dS);
                        this['Av']['add'](dM['_x']()),
                        this['CC'][dS] = dM;
                    }
            }
            ,
            dF['cC'] = function(dS) {
                if (this['kC'](dS)) {
                    var dp = this['nC'](dS);
                    this['Av']['remove'](dp['_x']()),
                    dp['jh'](),
                    this['LC'](dS);
                } else
                    console['error']('Invalid\x20entity\x20remove\x20command!', dS);
            }
            ,
            dF['nC'] = function(dS) {
                return this['CC'][dS];
            }
            ,
            dF['LC'] = function(dS) {
                delete this['CC'][dS];
            }
            ,
            dF['kC'] = function(dS) {
                return void 0x0 !== this['CC'][dS];
            }
            ,
            dF['pb'] = function() {
                return Object['values'](this['CC']);
            }
            ,
            dF['_x'] = function() {
                return this['Av'];
            }
            ,
            dF['no'] = function() {
                return this['Dv'];
            }
            ,
            de;
        }())
          , cP = (function() {
            function de(dS) {
                this['mh'] = function(dp) {}
                ,
                this['Dv'] = dS,
                this['Av'] = new u7['Tme'](),
                this['VC'] = [],
                this['Rv']();
            }
            var dF = de['prototype'];
            return dF['Rv'] = function() {}
            ,
            dF['Pv'] = function() {}
            ,
            dF['od'] = function(dS, dp, dj) {
                if (void 0x0 === dj && (dj = 0x0),
                this['Dv']['fq']()['OC']) {
                    var dV = new u7['nvb'](0.05,0.05,0.3)
                      , dy = new u7['vBJ']({
                        'color': 0xfff79c
                    })
                      , dM = new u7['Kj0'](dV,dy);
                    (0x0,
                    uJ['cz'])(dp),
                    dM['position']['set'](dS['x'] + 0x1 * dp['x'], dS['y'] + 0x1 * dp['y'], dS['z'] + 0x1 * dp['z']);
                    var dK = Math['random']() * dj
                      , da = Math['random']() * Math['PI'] * 0x2
                      , df = (0x0,
                    uJ['XX'])(Math['cos'](da) * dK, Math['sin'](da) * dK, u8['Z']['Hr'])
                      , dl = new u7['_fP']();
                    dl['setFromUnitVectors'](new u7['Pa4'](0x0,0x0,0x1), new u7['Pa4'](dp['x'],dp['y'],dp['z']));
                    var dZ = new u7['Pa4'](df['x'],df['y'],df['z'])['applyQuaternion'](dl);
                    dM['rotation']['setFromQuaternion'](dl);
                    var dw = (0x0,
                    uJ['XX'])(dZ['x'], dZ['y'], dZ['z']);
                    (0x0,
                    uJ['cz'])(dw);
                    var dE = (0x0,
                    uJ['dg'])(dw);
                    (0x0,
                    uJ['Mt'])(dE, 0x64);
                    var dv = (0x0,
                    uJ['dg'])(dS);
                    (0x0,
                    uJ['BZ'])(dv, u8['Z']['Ir']);
                    var dg = this['Dv']['fv']()['ov']()['py'](dv, dw, 0x3e8, this['Dv']['fv']()['ov']()['by'])
                      , dQ = 0xf4240;
                    dg['yy'] && ((0x0,
                    uJ['Mt'])(dg['J'], u8['Z']['Ir']),
                    dQ = (0x0,
                    uJ['RJ'])(dg['J'], dS)),
                    this['Av']['add'](dM),
                    this['VC']['push']({
                        'eu': dM,
                        'j': dS,
                        'HC': dE,
                        'EC': dQ
                    });
                }
            }
            ,
            dF['jh'] = function() {
                this['Pv']();
                for (var dS = 0x0; dS < this['VC']['length']; dS++)
                    this['Av']['remove'](this['VC'][dS]['eu']),
                    this['VC'][dS]['eu']['geometry']['dispose']();
                this['VC'] = [];
            }
            ,
            dF['gs'] = function(dS, dp) {
                for (var dj = 0x0; dj < this['VC']['length']; dj++) {
                    var dV = this['VC'][dj]
                      , dy = dV['eu']['position'];
                    dV['eu']['position']['set'](dy['x'] + dV['HC']['x'] * dS, dy['y'] + dV['HC']['y'] * dS, dy['z'] + dV['HC']['z'] * dS),
                    dy['distanceToSquared'](new u7['Pa4'](dV['j']['x'],dV['j']['y'],dV['j']['z'])) > dV['EC'] && (this['Av']['remove'](dV['eu']),
                    dV['eu']['geometry']['dispose'](),
                    this['VC'][dj] = this['VC'][this['VC']['length'] - 0x1],
                    this['VC']['pop'](),
                    --dj);
                }
            }
            ,
            dF['_x'] = function() {
                return this['Av'];
            }
            ,
            de;
        }())
          , cB = (function() {
            function de(dS) {
                var dp = this;
                this['$v'] = function(dj, dV, dy, dM, dK, da, df) {
                    for (var dl = 0x40, dZ = 0x96, dw = new Float32Array(0x300), dE = new Uint16Array(0x180), dv = new Float32Array(0x200), dg = 0x0; dg < dl; dg++) {
                        var dQ = 0x1 * Math['cos'](dg / dl * Math['PI'] * 0x2)
                          , dO = 0x1 * Math['sin'](dg / dl * Math['PI'] * 0x2)
                          , dY = 0x1 * Math['cos']((dg + 0x1) / dl * Math['PI'] * 0x2)
                          , dP = 0x1 * Math['sin']((dg + 0x1) / dl * Math['PI'] * 0x2);
                        dw[0xc * dg + 0x0] = dQ,
                        dw[0xc * dg + 0x1] = 0x0,
                        dw[0xc * dg + 0x2] = dO,
                        dw[0xc * dg + 0x3] = dQ,
                        dw[0xc * dg + 0x4] = dZ,
                        dw[0xc * dg + 0x5] = dO,
                        dw[0xc * dg + 0x6] = dY,
                        dw[0xc * dg + 0x7] = 0x0,
                        dw[0xc * dg + 0x8] = dP,
                        dw[0xc * dg + 0x9] = dY,
                        dw[0xc * dg + 0xa] = dZ,
                        dw[0xc * dg + 0xb] = dP,
                        dv[0x8 * dg + 0x0] = 0x0,
                        dv[0x8 * dg + 0x1] = 0x0,
                        dv[0x8 * dg + 0x2] = 0x0,
                        dv[0x8 * dg + 0x3] = 0x12c,
                        dv[0x8 * dg + 0x4] = 0x2,
                        dv[0x8 * dg + 0x5] = 0x0,
                        dv[0x8 * dg + 0x6] = 0x2,
                        dv[0x8 * dg + 0x7] = 0x12c,
                        dE[0x6 * dg + 0x0] = 0x4 * dg,
                        dE[0x6 * dg + 0x1] = 0x4 * dg + 0x1,
                        dE[0x6 * dg + 0x2] = 0x4 * dg + 0x2,
                        dE[0x6 * dg + 0x3] = 0x4 * dg + 0x2,
                        dE[0x6 * dg + 0x4] = 0x4 * dg + 0x1,
                        dE[0x6 * dg + 0x5] = 0x4 * dg + 0x3;
                    }
                    var dB = new u7['u9r']();
                    dB['setAttribute']('position', new u7['a$l'](dw,0x3)),
                    dB['setIndex'](new u7['qlB'](dE,0x1)),
                    dB['setAttribute']('uv', new u7['a$l'](dv,0x2));
                    var dU = new u7['vBJ']({
                        'map': u9['Z']['YC'](),
                        'transparent': !0x0,
                        'opacity': 0.6,
                        'side': u7['ehD']
                    });
                    dp['FC'] = new u7['Kj0'](dB,dU),
                    dp['Av']['add'](dp['FC']);
                }
                ,
                this['BC'] = function(dj, dV, dy, dM, dK, da) {
                    dp['NC'] = dj,
                    dp['_C'] = dV,
                    dp['JC'] = (0x0,
                    uY['I$'])(dj),
                    dp['KC'] = dV,
                    dp['GC'] = dy,
                    dp['ZC'] = dM,
                    dp['QC'] = dK,
                    dp['tX'] = da,
                    dp['iX'] = Date['now']();
                }
                ,
                this['mh'] = function(dj) {
                    if (++dp['sX'] % Math['floor']((0x0,
                    ua['gq'])(0.05)) == 0x0) {
                        var dV = Date['now']();
                        Math['max'](0x0, dp['QC'] - (dV - dp['iX']) / 0x3e8),
                        Math['max'](0x0, dp['tX'] + dp['QC'] - (dV - dp['iX']) / 0x3e8);
                        if (dV - dp['iX'] >= 0x3e8 * dp['QC']) {
                            var dy = Math['max'](0x0, Math['min'](0x1, (dV - dp['iX'] - 0x3e8 * dp['QC']) / (0x3e8 * dp['tX'])));
                            dp['JC']['x'] = (0x0,
                            um['t7'])(dp['NC']['x'], dp['GC']['x'], dy),
                            dp['JC']['y'] = (0x0,
                            um['t7'])(dp['NC']['y'], dp['GC']['y'], dy),
                            dp['KC'] = (0x0,
                            um['t7'])(dp['_C'], dp['ZC'], dy),
                            void 0x0 !== dp['FC'] && (dp['FC']['scale']['set'](dp['KC'], 0x1, dp['KC']),
                            dp['FC']['position']['set'](dp['JC']['x'], 0x0, dp['JC']['y']));
                        }
                    }
                }
                ,
                this['Dv'] = dS,
                this['Av'] = new u7['Tme'](),
                this['JC'] = (0x0,
                uY['Ak'])(0x0, 0x0),
                this['KC'] = 0x4b0,
                this['NC'] = (0x0,
                uY['Ak'])(0x0, 0x0),
                this['_C'] = 0x4b0,
                this['GC'] = (0x0,
                uY['Ak'])(0x0, 0x0),
                this['ZC'] = 0x4b0,
                this['QC'] = 0x0,
                this['tX'] = 0x0,
                this['iX'] = 0x0,
                this['sX'] = 0x0,
                this['Rv']();
            }
            var dF = de['prototype'];
            return dF['Rv'] = function() {
                uz['Z']['on'](uq['x']['Tv'], this['$v']),
                uz['Z']['on'](uq['x']['hX'], this['BC']);
            }
            ,
            dF['Pv'] = function() {
                uz['Z']['off'](uq['x']['Tv'], this['$v']),
                uz['Z']['off'](uq['x']['hX'], this['BC']);
            }
            ,
            dF['pg'] = function(dS) {
                return (0x0,
                uY['if'])(dS, this['JC']) <= this['KC'] * this['KC'];
            }
            ,
            dF['gs'] = function(dS, dp) {}
            ,
            dF['nX'] = function() {
                return this['JC'];
            }
            ,
            dF['cX'] = function() {
                return this['KC'];
            }
            ,
            dF['rX'] = function() {
                return this['GC'];
            }
            ,
            dF['eX'] = function() {
                return this['ZC'];
            }
            ,
            dF['_x'] = function() {
                return this['Av'];
            }
            ,
            de;
        }())
          , cU = (function() {
            function de(dS) {
                var dp = this;
                this['xX'] = function(dK) {
                    var da = new Image();
                    da['src'] = 'data:image/png;base64,' + dK,
                    da['onload'] = function() {
                        dp['uX']['image'] = da,
                        dp['uX']['minFilter'] = u7['TyD'],
                        dp['uX']['magFilter'] = u7['TyD'],
                        dp['uX']['encoding'] = u7['knz'],
                        dp['uX']['needsUpdate'] = !0x0;
                    }
                    ;
                }
                ,
                this['aX'] = function(dK) {
                    return dK / ((dp['Dv']['Dm']()['Wh']()['Cx']()['x'] - dp['Dv']['Dm']()['Wh']()['gx']()['x'] + 0x1) * u8['Z']['Er'] * u8['Z']['Ir']) * 0x64;
                }
                ,
                this['oX'] = function(dK) {
                    return dp['aX'](dK - dp['Dv']['Dm']()['Wh']()['gx']()['x'] * u8['Z']['Er'] * u8['Z']['Ir']);
                }
                ,
                this['mh'] = function(dK) {
                    var da = dp['Dv']['fv']()['ov']()['Ll']();
                    if (void 0x0 !== da) {
                        var df = (0x0,
                        uk['II'])();
                        df !== dp['fX'] && (dp['fX'] = df,
                        dp['vX']['visible'] = dp['fX'],
                        dp['lX']['visible'] = dp['fX'],
                        dp['mX']['visible'] = !dp['fX']);
                        var dl = dp['Dv']['fv']()['ov']()['ky']()['y']
                          , dZ = dp['oX'](da['ep']['iv']['x']) / 0x64
                          , dw = 0x1 - dp['oX'](da['ep']['iv']['z']) / 0x64
                          , dE = dp['oX'](dp['Dv']['yg']()['nX']()['x']) / 0x64
                          , dv = 0x1 - dp['oX'](dp['Dv']['yg']()['nX']()['y']) / 0x64
                          , dg = dp['aX'](dp['Dv']['yg']()['cX']()) / 0x64
                          , dQ = dp['oX'](dp['Dv']['yg']()['rX']()['x']) / 0x64
                          , dO = 0x1 - dp['oX'](dp['Dv']['yg']()['rX']()['y']) / 0x64
                          , dY = dp['aX'](dp['Dv']['yg']()['eX']()) / 0x64;
                        dp['fX'] ? (dp['zX']['uniforms']['currCirclePos']['value']['set'](dE, dv),
                        dp['zX']['uniforms']['currCircleRadius']['value'] = dg,
                        dp['zX']['uniforms']['nextCirclePos']['value']['set'](dQ, dO),
                        dp['zX']['uniforms']['nextCircleRadius']['value'] = dY) : (dp['dX']['uniforms']['currCirclePos']['value']['set'](dE, dv),
                        dp['dX']['uniforms']['currCircleRadius']['value'] = dg,
                        dp['dX']['uniforms']['nextCirclePos']['value']['set'](dQ, dO),
                        dp['dX']['uniforms']['nextCircleRadius']['value'] = dY,
                        dp['dX']['uniforms']['playerPos']['value']['set'](dZ, dw),
                        dp['dX']['uniforms']['playerDir']['value'] = dl);
                    }
                }
                ,
                this['Dv'] = dS,
                this['Av'] = new u7['Tme'](),
                this['fX'] = !0x1,
                this['uX'] = new u7['xEZ']();
                var dj = new u7['BKK'](0x1,0x1);
                this['dX'] = new u7['jyz']({
                    'uniforms': {
                        'map': {
                            'value': this['uX']
                        },
                        'playerPos': {
                            'value': new u7['FM8']()
                        },
                        'playerDir': {
                            'value': 0x0
                        },
                        'currCirclePos': {
                            'value': new u7['FM8']()
                        },
                        'currCircleRadius': {
                            'value': 0x0
                        },
                        'nextCirclePos': {
                            'value': new u7['FM8']()
                        },
                        'nextCircleRadius': {
                            'value': 0x0
                        }
                    },
                    'vertexShader': '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec2\x20vUv;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20mvPosition\x20=\x20modelViewMatrix\x20*\x20vec4(position,\x201.0);;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20projectionMatrix\x20*\x20mvPosition;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vUv\x20=\x20uv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
                    'fragmentShader': '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20sampler2D\x20map;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20vec2\x20playerPos;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20playerDir;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20vec2\x20currCirclePos;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20currCircleRadius;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20vec2\x20nextCirclePos;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20nextCircleRadius;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec2\x20vUv;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20inverselerpstep(float\x20a,\x20float\x20b,\x20float\x20x)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20step(0.9999,\x20(x\x20-\x20a)\x20/\x20(b\x20-\x20a));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20diffuseColor\x20=\x20vec4(0.204,\x200.549,\x200.925,\x201.0);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20circleOutlineWidth\x20=\x200.001;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20scale\x20=\x2010.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20mat2\x20rotMat\x20=\x20mat2(cos(playerDir),\x20sin(playerDir),\x20-sin(playerDir),\x20cos(playerDir));\x20\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20scale\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20mapUv\x20=\x20vec2(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(vUv.x\x20-\x200.5)\x20/\x20scale,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(vUv.y\x20-\x200.5)\x20/\x20scale\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20rotate\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20mapUv\x20=\x20rotMat\x20*\x20mapUv;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20translate\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20mapUv.x\x20+=\x20playerPos.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20mapUv.y\x20+=\x20playerPos.y;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20currCircleDx\x20=\x20mapUv.x\x20-\x20currCirclePos.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20currCircleDy\x20=\x20mapUv.y\x20-\x20currCirclePos.y;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20currCircleDist\x20=\x20sqrt(currCircleDx\x20*\x20currCircleDx\x20+\x20currCircleDy\x20*\x20currCircleDy);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20nextCircleDx\x20=\x20mapUv.x\x20-\x20nextCirclePos.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20nextCircleDy\x20=\x20mapUv.y\x20-\x20nextCirclePos.y;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20nextCircleDist\x20=\x20sqrt(nextCircleDx\x20*\x20nextCircleDx\x20+\x20nextCircleDy\x20*\x20nextCircleDy);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20mapColor\x20=\x20texture2D(map,\x20mapUv);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20currCircle\x20=\x20smoothstep(0.0,\x20circleOutlineWidth,\x20abs(currCircleDist\x20-\x20currCircleRadius));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20nextCircle\x20=\x20smoothstep(0.0,\x20circleOutlineWidth,\x20abs(nextCircleDist\x20-\x20nextCircleRadius));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20outsideCurrCircle\x20=\x201.0\x20-\x20inverselerpstep(0.0,\x20currCircleRadius,\x20currCircleDist\x20-\x20circleOutlineWidth);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20diffuseColor\x20=\x20mix(vec4(1.0,\x201.0,\x201.0,\x201.0),\x20mapColor,\x20currCircle);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20diffuseColor\x20=\x20mix(vec4(1.0,\x201.0,\x201.0,\x201.0),\x20diffuseColor,\x20nextCircle);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20diffuseColor\x20=\x20mix(mix(diffuseColor,\x20vec4(1.0,\x200.0,\x200.0,\x200.0),\x200.4),\x20diffuseColor,\x20outsideCurrCircle);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20diffuseColor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'
                }),
                this['mX'] = new u7['Kj0'](dj,this['dX']),
                this['Av']['add'](this['mX']);
                var dV = new u7['BKK'](0x1,0x1);
                this['zX'] = new u7['jyz']({
                    'uniforms': {
                        'map': {
                            'value': this['uX']
                        },
                        'currCirclePos': {
                            'value': new u7['FM8']()
                        },
                        'currCircleRadius': {
                            'value': 0x0
                        },
                        'nextCirclePos': {
                            'value': new u7['FM8']()
                        },
                        'nextCircleRadius': {
                            'value': 0x0
                        }
                    },
                    'vertexShader': '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec2\x20vUv;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20mvPosition\x20=\x20modelViewMatrix\x20*\x20vec4(position,\x201.0);;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20projectionMatrix\x20*\x20mvPosition;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vUv\x20=\x20uv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
                    'fragmentShader': '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20sampler2D\x20map;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20vec2\x20currCirclePos;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20currCircleRadius;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20vec2\x20nextCirclePos;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20nextCircleRadius;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec2\x20vUv;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20inverselerpstep(float\x20a,\x20float\x20b,\x20float\x20x)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20step(0.9999,\x20(x\x20-\x20a)\x20/\x20(b\x20-\x20a));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20diffuseColor\x20=\x20vec4(0.204,\x200.549,\x200.925,\x201.0);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20circleOutlineWidth\x20=\x200.002;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20scale\x20=\x201.0;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20currCircleDx\x20=\x20vUv.x\x20-\x20currCirclePos.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20currCircleDy\x20=\x20vUv.y\x20-\x20currCirclePos.y;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20currCircleDist\x20=\x20sqrt(currCircleDx\x20*\x20currCircleDx\x20+\x20currCircleDy\x20*\x20currCircleDy);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20nextCircleDx\x20=\x20vUv.x\x20-\x20nextCirclePos.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20nextCircleDy\x20=\x20vUv.y\x20-\x20nextCirclePos.y;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20nextCircleDist\x20=\x20sqrt(nextCircleDx\x20*\x20nextCircleDx\x20+\x20nextCircleDy\x20*\x20nextCircleDy);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20mapColor\x20=\x20texture2D(map,\x20vUv);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20currCircle\x20=\x20smoothstep(0.0,\x20circleOutlineWidth,\x20abs(currCircleDist\x20-\x20currCircleRadius));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20nextCircle\x20=\x20smoothstep(0.0,\x20circleOutlineWidth,\x20abs(nextCircleDist\x20-\x20nextCircleRadius));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20outsideCurrCircle\x20=\x201.0\x20-\x20inverselerpstep(0.0,\x20currCircleRadius,\x20currCircleDist\x20-\x20circleOutlineWidth);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20diffuseColor\x20=\x20mix(vec4(1.0,\x201.0,\x201.0,\x201.0),\x20mapColor,\x20currCircle);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20diffuseColor\x20=\x20mix(vec4(1.0,\x201.0,\x201.0,\x201.0),\x20diffuseColor,\x20nextCircle);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20diffuseColor\x20=\x20mix(mix(diffuseColor,\x20vec4(1.0,\x200.0,\x200.0,\x200.0),\x200.4),\x20diffuseColor,\x20outsideCurrCircle);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20diffuseColor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'
                }),
                this['vX'] = new u7['Kj0'](dV,this['zX']),
                this['vX']['visible'] = !0x1,
                this['vX']['position']['set'](0x0, 0x0, -0x1),
                this['Av']['add'](this['vX']);
                var dy = new u7['BKK'](0x1,0x1)
                  , dM = new u7['vBJ']({
                    'map': u9['Z']['pX'](),
                    'transparent': !0x0
                });
                this['lX'] = new u7['Kj0'](dy,dM),
                this['lX']['visible'] = !0x1,
                this['Av']['add'](this['lX']),
                this['Rv']();
            }
            var dF = de['prototype'];
            return dF['Rv'] = function() {
                uz['Z']['on'](uq['x']['yX'], this['xX']);
            }
            ,
            dF['Pv'] = function() {
                uz['Z']['off'](uq['x']['yX'], this['xX']);
            }
            ,
            dF['jh'] = function() {
                this['Pv']();
            }
            ,
            dF['gs'] = function(dS, dp) {
                if (this['fX']) {
                    var dj = this['Dv']['fv']()['ov']()['Ll']();
                    if (void 0x0 === dj)
                        return;
                    var dV = 0x2bc * this['Dv']['tw']()['Xs']()
                      , dy = 0x2bc * this['Dv']['tw']()['Xs']();
                    this['vX']['scale']['set'](dV, dy, 0x1);
                    var dM = 0x1e * this['Dv']['tw']()['Xs']()
                      , dK = 0x1e * this['Dv']['tw']()['Xs']()
                      , da = this['Dv']['fv']()['ov']()['ky']()['y']
                      , df = this['oX'](dj['ep']['iv']['x']) / 0x64
                      , dl = 0x1 - this['oX'](dj['ep']['iv']['z']) / 0x64;
                    this['lX']['position']['set'](-dV / 0x2 + df * dV, -dy / 0x2 + dl * dV, -0x1),
                    this['lX']['scale']['set'](dM, dK, 0x1),
                    this['lX']['rotation']['set'](0x0, 0x0, da);
                } else {
                    var dZ = 0xc8 * this['Dv']['tw']()['Xs']()
                      , dw = 0xc8 * this['Dv']['tw']()['Xs']();
                    this['mX']['position']['set'](-window['innerWidth'] / 0x2 + 0x79 * this['Dv']['tw']()['Xs'](), window['innerHeight'] / 0x2 - 0x79 * this['Dv']['tw']()['Xs'](), -0x1),
                    this['mX']['scale']['set'](dZ, dw, 0x1);
                }
            }
            ,
            dF['_x'] = function() {
                return this['Av'];
            }
            ,
            de;
        }())
          , cD = (function() {
            function de(dS, dp, dj) {
                var dV = this;
                this['mh'] = function(dy) {
                    dV['qh']['mh'](dy),
                    dV['Lp']['mh'](dy),
                    dV['wX']['mh'](dy),
                    dV['$X']['mh'](dy),
                    dV['bX']['mh'](dy),
                    dV['qX']['mh'](dy);
                }
                ,
                this['gs'] = function(dy, dM) {
                    dV['qh']['gs'](dy, dM),
                    dV['$X']['gs'](dy, dM),
                    dV['Lp']['gs'](dy, dM),
                    dV['wX']['gs'](dy, dM),
                    dV['bX']['gs'](dy, dM),
                    dV['qX']['gs'](dy, dM);
                }
                ,
                this['xt'] = dS,
                this['Dy'] = dp,
                this['Cv'] = dj,
                this['kX'] = [],
                this['gX'] = new u7['Mig'](0xffffff,0.1),
                this['CX'](this['gX']),
                this['Ms']()['fog'] = new u7['ybr'](u8['Z']['oo'],0x3c,0x46),
                this['Dy']['Ss']()['fog'] = new u7['ybr'](u8['Z']['oo'],0x3c,0x46),
                this['MX'] = new u7['vmT'](0xffffff,0xffffff,0.3),
                this['CX'](this['MX']),
                this['SX'] = new u7['Ox3'](0xffffff,0.5),
                this['SX']['position']['set'](0x1, 0x1, 0x1),
                this['CX'](this['SX']),
                this['DX'] = new u7['cek'](0xffffff,0.1),
                this['DX']['position']['set'](-0x1, 0x1, -0x1),
                this['Dy']['Ss']()['add'](this['DX']),
                this['qh'] = new uE(this['xt'],this['Dy']['Rs'](),this,this['Cv']),
                this['Ms']()['add'](this['qh']['_x']()),
                this['$X'] = new cY(this),
                this['Ms']()['add'](this['$X']['_x']()),
                this['wX'] = new cP(this),
                this['Ms']()['add'](this['wX']['_x']()),
                this['Lp'] = new cZ(this['xt'],this['Dy'],this,this['Cv']),
                this['bX'] = new cB(this),
                this['Ms']()['add'](this['bX']['_x']()),
                this['qX'] = new cU(this),
                this['Dy']['Ds']()['add'](this['qX']['_x']());
            }
            var dF = de['prototype'];
            return dF['CX'] = function(dS) {
                var dp = dS['clone']();
                this['Dy']['Ms']()['add'](dS),
                this['Dy']['Ss']()['add'](dp),
                this['kX']['push'](dS),
                this['kX']['push'](dp);
            }
            ,
            dF['AX'] = function() {
                for (var dS = 0x0; dS < this['kX']['length']; dS++)
                    this['Dy']['Ms']()['remove'](this['kX'][dS]),
                    this['Dy']['Ss']()['remove'](this['kX'][dS]);
                this['kX'] = [];
            }
            ,
            dF['jh'] = function() {
                this['AX'](),
                this['Ms']()['fog'] = null,
                this['Ms']()['remove'](this['qh']['_x']()),
                this['Ms']()['remove'](this['$X']['_x']()),
                this['Ms']()['remove'](this['wX']['_x']()),
                this['qh']['jh'](),
                this['$X']['jh'](),
                this['Lp']['jh'](),
                this['wX']['jh']();
            }
            ,
            dF['Ms'] = function() {
                return this['Dy']['Ms']();
            }
            ,
            dF['Dm'] = function() {
                return this['qh'];
            }
            ,
            dF['Am'] = function() {
                return this['$X'];
            }
            ,
            dF['fv'] = function() {
                return this['Lp'];
            }
            ,
            dF['fd'] = function() {
                return this['wX'];
            }
            ,
            dF['yg'] = function() {
                return this['bX'];
            }
            ,
            dF['tw'] = function() {
                return this['Dy'];
            }
            ,
            dF['fq'] = function() {
                return this['xt'];
            }
            ,
            de;
        }());
        function z0() {
            return uI()('!(function(){\x27use\x20strict\x27;var\x20u=function(r,T,m){return{\x27x\x27:r,\x27y\x27:T,\x27z\x27:m};},c=(\x27undefined\x27==typeof\x20navigator||void\x200x0===navigator[\x27hardwareConcurrency\x27]||navigator[\x27hardwareConcurrency\x27],u(0.35,1.3,0.35),u(0.3,1.3,0.3),0.04),z=0x0,q=0x1,d=0x2;let\x20J;const\x20k=()=>{J=setTimeout(k,0x3e8*c),postMessage([d]);};Date[\x27now\x27],onmessage=r=>{switch(r[\x27data\x27]){case\x20z:k();break;case\x20q:clearTimeout(J);}};}());', 'Worker', void 0x0, u2['p'] + './package/c1977b87dfbc13d5c167.worker.js');
        }
        var z1 = 0x0
          , z2 = 0x1
          , z3 = 0x2
          , z4 = (function() {
            function de(dS) {
                var dp = this;
                this['hp'] = function(dj) {
                    dp['RX'] = dj;
                }
                ,
                this['TX'] = function(dj) {
                    dp['jX'] = dp['IX'](dp['TX']);
                    var dV = dp['UX']()
                      , dy = dV - dp['WX']
                      , dM = Math['max'](0x0, Math['min'](dy, 0x32)) / 0x3e8;
                    dp['WX'] = dV,
                    dp['gs'](dM, dy / 0x3e8);
                }
                ,
                this['PX'] = function() {
                    var dj = dp['UX']()
                      , dV = dj - dp['WX']
                      , dy = Math['max'](0x0, Math['min'](dV, 0x3e8)) / 0x3e8;
                    dp['WX'] = dj,
                    dp['gs'](dy, dV / 0x3e8);
                }
                ,
                this['gs'] = function(dj, dV) {
                    dp['LX'] += dj;
                    var dy = dp['RX'] + Math['round']((dp['Cv']['wh']() / 0x3e8 + 0x1) / u8['Z']['qr'] * (dp['VX'] - u8['Z']['qr']) / u8['Z']['qr'])
                      , dM = Math['max'](0x1, Math['round'](dp['Cv']['$h']() / 0x2 / (0x3e8 * u8['Z']['qr'])))
                      , dK = u8['Z']['qr'];
                    for (dy > dM + 0x1 && (dK += 0.06 * u8['Z']['qr']),
                    dp['VX'] = (0x0,
                    um['r_'])(dp['VX'], dK, 0.06 * u8['Z']['qr'] * dj / 0x3); dp['LX'] >= dp['VX']; )
                        dp['LX'] -= dp['VX'],
                        dp['mh'](u8['Z']['qr']);
                    dp['Dy']['gs'](dj, dp['LX']),
                    dp['Dv']['gs'](dj, dp['LX']),
                    dp['Cv']['mh']();
                }
                ,
                this['mh'] = function(dj) {
                    dp['Dv']['mh'](dj);
                }
                ,
                this['xt'] = dS,
                this['Dy'] = new uc(this['xt'],'canvas'),
                this['Cv'] = new ux(),
                this['ls'](),
                this['LX'] = 0x0,
                this['WX'] = 0x0,
                this['jX'] = 0x0,
                this['UX'] = Date['now']['bind'](Date),
                this['WX'] = this['UX'](),
                this['IX'] = requestAnimationFrame['bind'](window),
                this['OX'] = new z0(),
                this['OX']['onmessage'] = function(dj) {
                    dj['data']['length'] && 0x0 !== dj['data']['length'] && dj['data'][0x0] === z3 && dp['PX']();
                }
                ,
                this['HX'](),
                document['hidden'] ? this['EX']() : document['hidden'] || this['YX'](),
                document['addEventListener']('visibilitychange', function() {
                    document['hidden'] && 0x1 !== dp['BX'] ? (dp['_X'](),
                    dp['EX']()) : document['hidden'] || 0x0 === dp['BX'] || (dp['JX'](),
                    dp['YX']());
                }),
                this['VX'] = u8['Z']['qr'],
                this['RX'] = 0x0,
                this['Rv']();
            }
            var dF = de['prototype'];
            return dF['Rv'] = function() {
                uz['Z']['on'](uq['x']['Vy'], this['hp']);
            }
            ,
            dF['HX'] = function() {
                window['THREE'] && (u8['Z']['Jo'] = !0x0),
                setInterval(this['HX'], 0x1388);
            }
            ,
            dF['ls'] = function() {
                this['Dv'] && this['Dv']['jh'](),
                this['Dy']['ls'](),
                this['Dv'] = new cD(this['xt'],this['Dy'],this['Cv']);
            }
            ,
            dF['YX'] = function() {
                this['BX'] = 0x0,
                this['TX'](this['WX']);
            }
            ,
            dF['_X'] = function() {
                this['BX'] = 0x2,
                cancelAnimationFrame(this['jX']);
            }
            ,
            dF['EX'] = function() {
                this['BX'] = 0x1,
                this['OX']['postMessage'](z1);
            }
            ,
            dF['JX'] = function() {
                this['BX'] = 0x2,
                this['OX']['postMessage'](z2);
            }
            ,
            dF['tw'] = function() {
                return this['Dy'];
            }
            ,
            dF['KX'] = function() {
                return this['Cv'];
            }
            ,
            dF['no'] = function() {
                return this['Dv'];
            }
            ,
            de;
        }())
          , z5 = u2(0xbb88)
          , z6 = 0x0
          , z7 = 0x1
          , z8 = 0x2
          , z9 = 0x3
          , zu = 0x4
          , zc = 0x5
          , zz = 0x6
          , zq = u2(0x15f41)
          , zd = 0x0
          , zJ = 0x1
          , zk = 0x2
          , zr = 0x3
          , zT = 0x4
          , zm = 0x5
          , zx = 0x6
          , zX = 0x7
          , zI = 0x8
          , zC = 0x9
          , zG = 0xa
          , zn = 0xb
          , zW = 0xc
          , zR = 0xd
          , zb = 0xe
          , zA = 0xf
          , zL = 0x10
          , zH = 0x11
          , zN = 0x12
          , ze = 0x13
          , zF = 0x14
          , zS = 0x15
          , zp = 0x16
          , zj = 0x17
          , zV = 0x18
          , zy = 0x19
          , zM = 0x1a
          , zK = 0x1b
          , za = 0x1c
          , zf = [zq['g']['GX'], zq['g']['GX'], zq['g']['GX'], zq['g']['ZX'], zq['g']['ZX'], zq['g']['ZX'], zq['g']['QX'], zq['g']['tM'], zq['g']['QX'], zq['g']['iM'], zq['g']['iM'], zq['g']['iM'], zq['g']['iM'], zq['g']['ZX'], zq['g']['ZX'], zq['g']['tM'], zq['g']['QX'], zq['g']['iM'], zq['g']['iM'], zq['g']['ZX'], zq['g']['QX'], zq['g']['iM'], zq['g']['ZX'], zq['g']['QX'], zq['g']['ZX'], zq['g']['GX'], zq['g']['ZX'], zq['g']['sM'], zq['g']['ZX']]
          , zl = 0x2
          , zZ = 0x0
          , zw = 0x1
          , zE = 0x2
          , zv = 0x3
          , zo = 0x4
          , zg = 0x5
          , zQ = [zq['g']['QX'], zq['g']['GX'], zq['g']['ZX'], zq['g']['ZX'], zq['g']['ZX'], zq['g']['ZX']]
          , zO = u2(0x17f5)
          , zY = u2(0x1498a);
        function zP(de, dF) {
            var dS = 'undefined' != typeof Symbol && de[Symbol['iterator']] || de['@@iterator'];
            if (dS)
                return (dS = dS['call'](de))['next']['bind'](dS);
            if (Array['isArray'](de) || (dS = function(dj, dV) {
                if (!dj)
                    return;
                if ('string' == typeof dj)
                    return zB(dj, dV);
                var dy = Object['prototype']['toString']['call'](dj)['slice'](0x8, -0x1);
                'Object' === dy && dj['constructor'] && (dy = dj['constructor']['name']);
                if ('Map' === dy || 'Set' === dy)
                    return Array['from'](dj);
                if ('Arguments' === dy || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/['test'](dy))
                    return zB(dj, dV);
            }(de)) || dF && de && 'number' == typeof de['length']) {
                dS && (de = dS);
                var dp = 0x0;
                return function() {
                    return dp >= de['length'] ? {
                        'done': !0x0
                    } : {
                        'done': !0x1,
                        'value': de[dp++]
                    };
                }
                ;
            }
            throw new TypeError('Invalid\x20attempt\x20to\x20iterate\x20non-iterable\x20instance.\x0aIn\x20order\x20to\x20be\x20iterable,\x20non-array\x20objects\x20must\x20have\x20a\x20[Symbol.iterator]()\x20method.');
        }
        function zB(de, dF) {
            (null == dF || dF > de['length']) && (dF = de['length']);
            for (var dS = 0x0, dp = new Array(dF); dS < dF; dS++)
                dp[dS] = de[dS];
            return dp;
        }
        var zU = (function() {
            function de(dS, dp) {
                var dj = this;
                this['hM'] = dS,
                this['xt'] = dp,
                this['Xy'] = 0x0,
                this['nM'] = -0x1,
                this['cM'] = !0x1,
                uz['Z']['on'](uq['x']['rb'], function(dy, dM, dK, da) {
                    dj['hM']['dispatch']((0x0,
                    ul['VN'])({
                        'Ci': dM,
                        'Ni': dy,
                        'Ti': da,
                        'Ri': dK
                    }));
                }),
                uz['Z']['on'](uq['x']['Yp'], function() {
                    (0x0,
                    uk['Zp'])() === cG['Q']['me'] && ((0x0,
                    uk['s9'])() || (zO['Mt'](),
                    dj['hM']['dispatch']((0x0,
                    zY['Mi'])(zY['b_']['ve']))));
                }),
                uz['Z']['on'](uq['x']['Ql'], function() {
                    (0x0,
                    uk['Zp'])() === cG['Q']['me'] && ((0x0,
                    uk['s9'])() || (zO['Li'](),
                    dj['hM']['dispatch']((0x0,
                    zY['Mi'])(zY['b_']['Xe']))));
                }),
                uz['Z']['on'](uq['x']['rM'], function(dy) {
                    dj['hM']['dispatch']((0x0,
                    zY['Io'])(dy));
                }),
                uz['Z']['on'](uq['x']['Jy'], function() {
                    dj['hM']['dispatch']((0x0,
                    zY['NX'])(!0x1)),
                    dj['hM']['dispatch']((0x0,
                    zY['Mi'])(zY['b_']['ve'])),
                    dj['hM']['dispatch']((0x0,
                    ul['jK'])(c1['P']['nn'])),
                    zO['Li']();
                }),
                uz['Z']['on'](uq['x']['sb'], function(dy, dM) {
                    dj['hM']['dispatch']((0x0,
                    ul['Vx'])(dy)),
                    dj['hM']['dispatch']((0x0,
                    ul['zU'])(dM));
                }),
                uz['Z']['on'](uq['x']['tb'], function(dy, dM) {
                    if (dM['Ol']()instanceof z5['Z']) {
                        var dK = dM['Ol']()
                          , da = dy['nb'](dK['cb']());
                        dj['hM']['dispatch']((0x0,
                        ul['_y'])(!0x0)),
                        dj['hM']['dispatch']((0x0,
                        ul['Vx'])(dK['hb']())),
                        dj['hM']['dispatch']((0x0,
                        ul['zU'])(da));
                    } else
                        dj['hM']['dispatch']((0x0,
                        ul['_y'])(!0x1));
                }),
                uz['Z']['on'](uq['x']['Qw'], function(dy) {
                    dj['hM']['dispatch']((0x0,
                    ul['wV'])(dy));
                }),
                uz['Z']['on'](uq['x']['Zw'], function(dy) {
                    dj['hM']['dispatch']((0x0,
                    ul['he'])({
                        'Si': dy['Ol']()['kb'](),
                        '_i': dy['Ol']()['gb'](),
                        'Ii': dy['Jw'](),
                        'di': (0x0,
                        uD['qH'])(dy['Ol']())
                    }));
                }),
                uz['Z']['on'](uq['x']['eM'], function(dy, dM, dK, da) {
                    dj['hM']['dispatch']((0x0,
                    ul['Ng'])({
                        'Si': dy,
                        '_i': dM,
                        'Ui': dK,
                        'bi': da
                    }));
                }),
                uz['Z']['on'](uq['x']['xM'], function(dy, dM) {
                    dj['hM']['dispatch']((0x0,
                    ul['qW'])(!0x0)),
                    dj['hM']['dispatch']((0x0,
                    ul['EP'])(dM)),
                    void 0x0 !== dj['uM'] && (clearTimeout(dj['uM']),
                    dj['uM'] = void 0x0),
                    dy > 0x0 && (dj['uM'] = setTimeout(function() {
                        dj['hM']['dispatch']((0x0,
                        ul['qW'])(!0x1));
                    }, 0x3e8 * dy));
                }),
                this['aM'] = 0x0,
                uz['Z']['on'](uq['x']['oM'], function(dy) {
                    for (var dM = 0x0; dM < dy['length']; dM++) {
                        var dK = dy[dM];
                        dK['wd'] === zJ ? dj['hM']['dispatch']((0x0,
                        ul['cL'])(dK['qd'])) : dK['wd'] === zd ? dj['hM']['dispatch']((0x0,
                        ul['eR'])(dK['qd'])) : dK['wd'] === zx ? dj['hM']['dispatch']((0x0,
                        ul['kW'])(dK['qd'])) : dK['wd'] === zX ? dj['hM']['dispatch']((0x0,
                        ul['Ny'])(dK['qd'])) : dK['wd'] === zI ? dj['hM']['dispatch']((0x0,
                        ul['Ow'])(dK['qd'])) : dK['wd'] === zk ? dj['hM']['dispatch']((0x0,
                        ul['r6'])(dK['qd'])) : dK['wd'] === zr ? dj['hM']['dispatch']((0x0,
                        ul['Qj'])(dK['qd'])) : dK['wd'] === zm ? dj['hM']['dispatch']((0x0,
                        ul['ad'])(dK['qd'])) : dK['wd'] === zT ? (function() {
                            dj['aM'] = dK['qd'],
                            dj['hM']['dispatch']((0x0,
                            ul['Im'])(dj['aM'])),
                            void 0x0 !== dj['fM'] && (clearTimeout(dj['fM']),
                            dj['fM'] = void 0x0),
                            dj['fM'] = setTimeout(function da() {
                                --dj['aM'],
                                dj['hM']['dispatch']((0x0,
                                ul['Im'])(dj['aM'])),
                                dj['aM'] > 0x0 && (dj['fM'] = setTimeout(da, 0x3e8));
                            }, 0x3e8);
                        }()) : dK['wd'] === zC ? dj['hM']['dispatch']((0x0,
                        zY['ly'])(dK['qd'])) : dK['wd'] === zG ? dj['hM']['dispatch']((0x0,
                        zY['uT'])(dK['qd'])) : dK['wd'] === zn ? dj['hM']['dispatch']((0x0,
                        zY['zh'])(dK['qd'])) : dK['wd'] === zR ? dj['hM']['dispatch']((0x0,
                        ul['c1'])(dK['qd'])) : dK['wd'] === zb ? dj['hM']['dispatch']((0x0,
                        ul['sy'])(dK['qd'])) : dK['wd'] === zW ? (dj['cM'] = dK['qd'],
                        dj['hM']['dispatch']((0x0,
                        zY['Lk'])(dj['cM']))) : dK['wd'] === zA ? (dj['nM'] = dK['qd'],
                        dj['hM']['dispatch']((0x0,
                        ul['sq'])(dK['qd']))) : dK['wd'] === zL ? dj['hM']['dispatch']((0x0,
                        ul['Q'])(dK['qd'])) : dK['wd'] === zH ? dj['hM']['dispatch']((0x0,
                        zY['b3'])(dK['qd'])) : dK['wd'] === zN ? (0x0,
                        uk['so'])(dK['qd']) : dK['wd'] === ze ? dj['hM']['dispatch']((0x0,
                        ul['Wk'])(dK['qd'])) : dK['wd'] === zF ? dj['hM']['dispatch']((0x0,
                        ul['lH'])(dK['qd'])) : dK['wd'] === zS ? dj['hM']['dispatch']((0x0,
                        ul['bT'])(dK['qd'])) : dK['wd'] === zp ? dj['hM']['dispatch']((0x0,
                        ul['iw'])(dK['qd'])) : dK['wd'] === zj ? dj['hM']['dispatch']((0x0,
                        ul['t6'])(dK['qd'])) : dK['wd'] === zy ? dj['hM']['dispatch']((0x0,
                        ul['IB'])(dK['qd'])) : dK['wd'] === zV ? dj['hM']['dispatch']((0x0,
                        ul['Nk'])(dK['qd'])) : dK['wd'] === zM ? dj['hM']['dispatch']((0x0,
                        ul['AG'])(dK['qd'])) : dK['wd'] === zK ? u8['Z']['Zr'] = dK['qd'] : dK['wd'] === za && (u8['Z']['oo'] = dK['qd']);
                    }
                }),
                uz['Z']['on'](uq['x']['Wy'], function() {
                    dj['nM'] > 0x0 && (dj['Xy'] = Date['now'](),
                    dj['hM']['dispatch']((0x0,
                    zY['Ad'])(!0x0)));
                }),
                uz['Z']['on'](uq['x']['vM'], function(dy) {
                    dj['hM']['dispatch']((0x0,
                    ul['QK'])(dy));
                }),
                uz['Z']['on'](uq['x']['lM'], function(dy) {
                    dj['hM']['dispatch']((0x0,
                    ul['Em'])({
                        'ji': !0x0,
                        'Zi': dy
                    }));
                }),
                uz['Z']['on'](uq['x']['mM'], function(dy, dM, dK, da, df, dl) {
                    var dZ = '{{victim}}\x20somehow\x20died...';
                    if (df === z6) {
                        var dw = Math['random']();
                        dZ = dw < 0.3 ? '{{killer}}\x20killed\x20{{victim}}\x20with\x20{{item}}' : dw < 0.6 ? '{{killer}}\x20eliminated\x20{{victim}}\x20with\x20{{item}}' : '{{killer}}\x20destroyed\x20{{victim}}\x20using\x20{{item}}';
                    } else
                        df === z7 ? dZ = '{{victim}}\x20fell\x20to\x20their\x20death' : df === z8 ? dZ = '{{victim}}\x20was\x20lost\x20in\x20the\x20fog' : df === z9 ? dZ = '{{victim}}\x20fell\x20out\x20of\x20the\x20world' : df === zu ? dZ = '{{victim}}\x20was\x20poked\x20to\x20death\x20by\x20a\x20cactus' : df === zc ? dZ = '{{victim}}\x20got\x20too\x20close\x20to\x20enemy\x20spawn' : df === zz && (dZ = dy['length'] > 0x0 && dy !== dK ? '{{killer}}\x20made\x20{{victim}}\x20explode' : '{{victim}}\x20exploded');
                    var dE = (0x0,
                    uD['YJ'])(dl);
                    dj['hM']['dispatch']((0x0,
                    zY['G5'])({
                        'Tu': 0x0,
                        'zM': dy,
                        'dM': (0x0,
                        cz['W'])(dM),
                        'pM': dK,
                        'yM': (0x0,
                        cz['W'])(da),
                        'wM': dE['$M'](),
                        'bM': (0x0,
                        cn['Dx'])(dE['gb']()),
                        'qM': dZ
                    })),
                    setTimeout(function() {
                        dj['hM']['dispatch']((0x0,
                        zY['wH'])());
                    }, 0x1f40);
                }),
                uz['Z']['on'](uq['x']['kM'], function(dy) {
                    dj['hM']['dispatch']((0x0,
                    zY['nW'])(dy)),
                    setTimeout(function() {
                        dj['hM']['dispatch']((0x0,
                        zY['SJ'])());
                    }, 0x1f40);
                }),
                uz['Z']['on'](uq['x']['gM'], function(dy, dM) {
                    dj['hM']['dispatch']((0x0,
                    zY['oc'])({
                        'Si': dy,
                        'Ou': dM
                    })),
                    dj['CM']();
                }),
                uz['Z']['on'](uq['x']['kv'], function(dy, dM) {
                    dj['hM']['dispatch']((0x0,
                    ul['eo'])({
                        'ru': dy,
                        'bi': dM
                    }));
                }),
                uz['Z']['on'](uq['x']['Tv'], function(dy, dM, dK, da, df, dl, dZ, dw) {
                    dj['hM']['dispatch']((0x0,
                    ul['Zy'])(dy)),
                    dj['hM']['dispatch']((0x0,
                    ul['Sg'])(dM)),
                    dj['hM']['dispatch']((0x0,
                    ul['ye'])(df)),
                    dj['hM']['dispatch']((0x0,
                    ul['Ah'])(dw)),
                    zO['Mt']();
                }),
                uz['Z']['on'](uq['x']['XM'], function(dy) {
                    dj['hM']['dispatch']((0x0,
                    zY['k6'])(dy));
                }),
                uz['Z']['on'](uq['x']['MM'], function(dy) {
                    dj['hM']['dispatch']((0x0,
                    zY['k6'])(dy));
                }),
                uz['Z']['on'](uq['x']['SM'], function(dy, dM) {
                    dy || dj['hM']['dispatch']((0x0,
                    zY['Qb'])(cG['Q']['Le'])),
                    dj['hM']['dispatch']((0x0,
                    zY['CK'])(dM));
                }),
                uz['Z']['on'](uq['x']['DM'], function(dy, dM) {
                    dy ? dj['hM']['dispatch']((0x0,
                    zY['YL'])(dM)) : dj['hM']['dispatch']((0x0,
                    zY['x9'])(dM));
                }),
                uz['Z']['on'](uq['x']['bb'], function(dy, dM, dK, da, df, dl) {
                    dj['hM']['dispatch']((0x0,
                    ul['Fh'])({
                        'Si': dy,
                        '_i': dM,
                        'Ei': dK,
                        'k': da,
                        'Ui': df,
                        'Ii': dl
                    }));
                }),
                uz['Z']['on'](uq['x']['Wg'], function(dy) {
                    dj['hM']['dispatch']((0x0,
                    ul['fK'])(dy));
                }),
                document['addEventListener']('keyup', function(dy) {
                    (0x0,
                    uk['Zp'])() === cG['Q']['me'] && ((0x0,
                    uk['D2'])() ? dy['keyCode'] === ud['Z']['ESC'] && uz['Z']['emit'](uq['x']['Ky']) : (0x0,
                    uk['bt'])() || (dy['keyCode'] === dj['xt']['Kp'][cb['ap']['MAP']] ? (dy['preventDefault'](),
                    (0x0,
                    uk['K8'])() ? dj['hM']['dispatch']((0x0,
                    zY['Y_'])(!0x1)) : dj['hM']['dispatch']((0x0,
                    zY['v0'])(!0x1))) : dy['keyCode'] === ud['Z']['ESC'] && (0x0,
                    uk['s9'])() && uz['Z']['emit'](uq['x']['Yy'], c1['P']['nn'])));
                }, !0x1),
                document['addEventListener']('keydown', function(dy) {
                    (0x0,
                    uk['Zp'])() === cG['Q']['me'] && ((0x0,
                    uk['D2'])() || (0x0,
                    uk['bt'])() || dy['keyCode'] === dj['xt']['Kp'][cb['ap']['MAP']] && (dy['preventDefault'](),
                    (0x0,
                    uk['K8'])() ? dj['hM']['dispatch']((0x0,
                    zY['Y_'])(!0x0)) : dj['hM']['dispatch']((0x0,
                    zY['v0'])(!0x0))));
                }, !0x1);
                var dV = this['hM']['getState']();
                void 0x0 !== dV['settings']['playerName'] && 0x0 !== dV['settings']['playerName']['length'] || this['hM']['dispatch']((0x0,
                cb['zb'])('Soldier'));
            }
            var dF = de['prototype'];
            return dF['CM'] = function() {
                var dS = this;
                void 0x0 === this['AM'] && !function dp() {
                    dS['hM']['getState']()['ui']['oa']['length'] > 0x0 ? dS['AM'] = setTimeout(function() {
                        dS['hM']['dispatch']((0x0,
                        zY['gB'])()),
                        dp();
                    }, 0xbb8) : dS['AM'] = void 0x0;
                }();
            }
            ,
            dF['RM'] = function(dS, dp, dj) {
                var dV = this['hM']['getState']();
                dS['Fl'] = (0x0,
                um['uZ'])(dV['settings']['sensitivity'], u8['Z']['ko']['po'], u8['Z']['ko']['Mo']),
                dS['Yl'] = (0x0,
                um['uZ'])(dV['settings']['adsSensitivityMultiplier'], u8['Z']['Fo']['po'], u8['Z']['Fo']['Mo']),
                dS['El'] = (0x0,
                um['uZ'])(dV['settings']['scopedSensitivityMultiplier'], u8['Z']['Ho']['po'], u8['Z']['Ho']['Mo']);
                var dy = (0x0,
                um['uZ'])(dV['settings']['renderScale'], u8['Z']['Bo']['po'], u8['Z']['Bo']['Mo']);
                dS['bs'] !== dy && (dS['bs'] = dy,
                void 0x0 !== dp && dp['js']()['setPixelRatio'](window['devicePixelRatio'] * dS['bs'])),
                dS['TM'] = dV['settings']['primaryLoadout'],
                dS['jM'] = dV['settings']['secondaryLoadout'],
                dS['IM'] = dV['settings']['terrainTextureURL'],
                dS['mg'] = (0x0,
                um['uZ'])(dV['settings']['soundVolume'], u8['Z']['Ko']['po'], u8['Z']['Ko']['Mo']),
                dS['Ul'] = dV['settings']['invertYAxis'],
                dS['Sw'] = dV['settings']['invertMouseWheel'];
                for (var dM = 0x0, dK = Object['entries'](dV['settings']['keys']); dM < dK['length']; dM++) {
                    var da = dK[dM]
                      , df = da[0x0]
                      , dl = da[0x1];
                    dS['Kp'][df] = dl['keyCode'];
                }
                var dZ = !0x1
                  , dw = (0x0,
                um['uZ'])(dV['settings']['crosshairWidth'], u8['Z']['Wo']['po'], u8['Z']['Wo']['Mo']);
                dS['Uk'] !== dw && (dS['Uk'] = dw,
                dZ = !0x0);
                var dE = (0x0,
                um['uZ'])(dV['settings']['crosshairLength'], u8['Z']['Xo']['po'], u8['Z']['Xo']['Mo']);
                dS['Tk'] !== dE && (dS['Tk'] = dE,
                dZ = !0x0),
                dS['Ik'] !== dV['settings']['crosshairColor'] && (dS['Ik'] = dV['settings']['crosshairColor'],
                dZ = !0x0),
                dS['_k'] !== dV['settings']['crosshairHitColor'] && (dS['_k'] = dV['settings']['crosshairHitColor'],
                dZ = !0x0),
                dS['Pk'] !== dV['settings']['crosshairStyle'] && (dS['Pk'] = dV['settings']['crosshairStyle'],
                dZ = !0x0),
                dS['jg'] = dV['settings']['showCrosshairWhenADS'],
                dS['Ig'] = dV['settings']['hideModelWhenADS'],
                dS['OC'] = dV['settings']['showBulletTracers'],
                dS['oq'] = dV['settings']['showAmmoShellsWhenFiring'],
                dS['cs'] = (0x0,
                um['uZ'])(dV['settings']['generalFOV'], u8['Z']['Do']['po'], u8['Z']['Do']['Mo']),
                dS['Dg'] = (0x0,
                um['uZ'])(dV['settings']['adsFOVMultiplier'], u8['Z']['xo']['po'], u8['Z']['xo']['Mo']),
                dS['Ag'] = (0x0,
                um['uZ'])(dV['settings']['runningFOVMultiplier'], u8['Z']['Vo']['po'], u8['Z']['Vo']['Mo']);
                var dv = (0x0,
                um['uZ'])(dV['settings']['firstPersonModelFOV'], u8['Z']['Yo']['po'], u8['Z']['Yo']['Mo']);
                dS['us'] !== dv && (dS['us'] = dv,
                void 0x0 !== dp && (dp['Ts']()['fov'] = dS['us'],
                dp['Ts']()['updateProjectionMatrix']())),
                dZ && void 0x0 !== dj && dj['fv']()['Bk']();
            }
            ,
            dF['UM'] = function(dS) {
                dS['WM']();
                for (var dp = [], dj = 0x0; dj < cC['n']['En']; dj++) {
                    var dV = dj
                      , dy = dS['PM']((0x0,
                    cC['m'])(dV)['ingredients']);
                    dp['push'](dy);
                }
                this['hM']['dispatch']((0x0,
                ul['iU'])(dp));
            }
            ,
            dF['LM'] = function(dS, dp, dj) {
                var dV = this;
                this['hM']['subscribe'](function() {
                    dV['RM'](dV['xt'], dp, dj);
                }),
                uz['Z']['on'](uq['x']['Py'], function(dy) {
                    dV['hM']['dispatch']((0x0,
                    ul['jK'])(dy)),
                    dy === c1['P']['nn'] ? dV['hM']['getState']()['ui']['Na'] ? dj['fv']()['ov']()['Wb']()['om']() : dj['fv']()['ov']()['Wb']()['um']() : dy === c1['P']['tn'] || dy === c1['P']['en'] ? (dj['fv']()['ov']()['Wb']()['om'](),
                    dV['UM'](dj['fv']()['ov']()['Mw']())) : (dy === c1['P']['rn'] || dy === c1['P']['$n'] || dy === c1['P']['un'] || dy === c1['P']['cn'] || dy === c1['P']['an']) && dj['fv']()['ov']()['Wb']()['om']();
                }),
                uz['Z']['on'](uq['x']['ah'], function(dy) {
                    if ((0x0,
                    uk['Zp'])() === cG['Q']['me'] && !(0x0,
                    uk['Vg'])() && !((0x0,
                    uk['D2'])() && dy !== ud['Z']['ENTER'] || (0x0,
                    uk['bt'])() && dy !== ud['Z']['ENTER'])) {
                        if (dy === ud['Z']['ENTER'] && (0x0,
                        uk['VJ'])()) {
                            if ((0x0,
                            uk['bt'])()) {
                                var dM = dV['hM']['getState']()['ui']['ea'];
                                dM['length'] > 0x0 && (uz['Z']['emit'](uq['x']['VM'], dM),
                                dV['hM']['dispatch']((0x0,
                                zY['G9'])(''))),
                                dV['hM']['dispatch']((0x0,
                                zY['NX'])(!0x1));
                            } else
                                dV['hM']['dispatch']((0x0,
                                zY['NX'])(!0x0));
                        } else {
                            if (dy === dV['xt']['Kp'][cb['ap']['TOGGLE_INVENTORY']]) {
                                var dK = dV['hM']['getState']()['game']['ki']
                                  , da = c1['P']['nn'];
                                dK === c1['P']['nn'] ? da = (0x0,
                                uk['uF'])() ? c1['P']['rn'] : c1['P']['tn'] : dK === c1['P']['an'] && (da = c1['P']['tn']),
                                uz['Z']['emit'](uq['x']['Yy'], da);
                            } else {
                                if (dy === dV['xt']['Kp'][cb['ap']['TOGGLE_MAP']]) {
                                    var df = dV['hM']['getState']()['ui']['ia'];
                                    dV['hM']['dispatch']((0x0,
                                    zY['v0'])(!df));
                                } else {
                                    if (dy === dV['xt']['Kp'][cb['ap']['TOGGLE_PLAYER_MENU']]) {
                                        var dl = dV['hM']['getState']()['game']['ki']
                                          , dZ = c1['P']['an'];
                                        dl === c1['P']['an'] && (dZ = c1['P']['nn']),
                                        uz['Z']['emit'](uq['x']['Yy'], dZ);
                                    }
                                }
                            }
                        }
                    }
                }),
                uz['Z']['on'](uq['x']['ib'], function(dy) {
                    for (var dM, dK = zP(dy); !(dM = dK())['done']; ) {
                        var da = dM['value']
                          , df = da[0x0]
                          , dl = da[0x1];
                        dV['hM']['dispatch']((0x0,
                        ul['dr'])({
                            'Pu': df,
                            'Uu': {
                                'k': dl['Ol']()['Cb'](),
                                'S': dl['Ol']()['OM'](),
                                '_i': dl['Ol']()['gb'](),
                                'Ei': (0x0,
                                cR['r'])(dl['Ol']()['D$']())['tier'],
                                'Si': dl['Ol']()['kb'](),
                                'Ii': dl['Jw'](),
                                'di': (0x0,
                                uD['qH'])(dl['Ol']())
                            }
                        }));
                    }
                    dV['UM'](dj['fv']()['ov']()['Mw']());
                }),
                uz['Z']['on'](uq['x']['HM'], function(dy, dM, dK) {
                    for (var da, df = void 0x0, dl = void 0x0, dZ = void 0x0, dw = void 0x0, dE = void 0x0, dv = void 0x0, dg = zP(dK); !(da = dg())['done']; ) {
                        var dQ = da['value'];
                        dQ['wd'] === zE ? dZ = dQ['qd'] : dQ['wd'] === zv ? dw = dQ['qd'] : dQ['wd'] === zo ? dE = dQ['qd'] : dQ['wd'] === zg ? dv = dQ['qd'] : dQ['wd'] === zZ ? df = dQ['qd'] : dQ['wd'] === zw && (dl = dQ['qd']);
                    }
                    dM === zl ? dV['hM']['dispatch']((0x0,
                    ul['Rz'])(dy)) : dV['hM']['dispatch']((0x0,
                    ul['Wj'])({
                        'Tu': dy,
                        'mu': dl,
                        'k': df,
                        'pu': dZ,
                        'Mu': dw,
                        'Lu': dE,
                        'Ou': dv
                    }));
                });
            }
            ,
            de;
        }())
          , zD = function() {
            this['Fl'] = cb['E3']['sensitivity'],
            this['Yl'] = cb['E3']['adsSensitivityMultiplier'],
            this['El'] = cb['E3']['scopedSensitivityMultiplier'],
            this['bs'] = cb['E3']['renderScale'],
            this['mg'] = cb['E3']['soundVolume'],
            this['Ul'] = cb['E3']['invertYAxis'],
            this['Sw'] = cb['E3']['invertMouseWheel'],
            this['Uk'] = cb['E3']['crosshairWidth'],
            this['Tk'] = cb['E3']['crosshairLength'],
            this['Ik'] = cb['E3']['crosshairColor'],
            this['_k'] = cb['E3']['crosshairHitColor'],
            this['Pk'] = cb['E3']['crosshairStyle'],
            this['EM'] = cb['E3']['chatVisible'],
            this['TM'] = cb['E3']['primaryLoadout'],
            this['jM'] = cb['E3']['secondaryLoadout'],
            this['IM'] = cb['E3']['terrainTextureURL'],
            this['jg'] = cb['E3']['showCrosshairWhenADS'],
            this['Ig'] = cb['E3']['hideModelWhenADS'],
            this['cs'] = cb['E3']['generalFOV'],
            this['us'] = cb['E3']['firstPersonModelFOV'],
            this['Dg'] = cb['E3']['adsFOVMultiplier'],
            this['Ag'] = cb['E3']['runningFOVMultiplier'],
            this['OC'] = cb['E3']['showBulletTracers'],
            this['oq'] = cb['E3']['showAmmoShellsWhenFiring'],
            this['Kp'] = {};
            for (var de = 0x0, dF = Object['entries'](cb['kS']); de < dF['length']; de++) {
                var dS = dF[de]
                  , dp = dS[0x0]
                  , dj = dS[0x1];
                this['Kp'][dp] = dj['keyCode'];
            }
        }
          , q0 = function() {
            return new Promise(function(de, dF) {
                (0x0,
                uT['tJ'])((function() {
                    var dS = (0x0,
                    u4['Z'])(u6()['mark'](function dp(dj) {
                        var dV, dy, dM;
                        return u6()['wrap'](function(dK) {
                            for (; ; )
                                switch (dK['prev'] = dK['next']) {
                                case 0x0:
                                    return dj['pause'](),
                                    uT['h']['dispatch']((0x0,
                                    zY['fx'])(!0x0)),
                                    dV = new zD(),
                                    (dy = new zU(uT['h'],dV))['RM'](dV, void 0x0, void 0x0),
                                    dK['next'] = 0x7,
                                    u9['Z']['YM'](dV);
                                case 0x7:
                                    dM = new z4(dV),
                                    dy['LM'](dM['KX'](), dM['tw'](), dM['no']()),
                                    de(dM);
                                case 0xa:
                                case 'end':
                                    return dK['stop']();
                                }
                        }, dp);
                    }));
                    return function(dj) {
                        return dS['apply'](this, arguments);
                    }
                    ;
                }()));
            }
            );
        }
          , q1 = u2(0x15294)
          , q2 = 0x0
          , q3 = 0x1
          , q4 = 0x2
          , q5 = 0x3
          , q6 = 0x4
          , q7 = 0x5
          , q8 = 0x6
          , q9 = 0x7
          , qu = 0x8
          , qc = 0x9
          , qz = 0xa
          , qq = 0xb
          , qd = 0xc
          , qJ = 0xd
          , qk = 0xe
          , qr = 0xf
          , qT = 0x10
          , qm = 0x11
          , qx = 0x12
          , qX = 0x13
          , qI = 0x14
          , qC = 0x15
          , qG = 0x16
          , qn = 0x17
          , qW = 0x18
          , qR = 0x19
          , qb = 0x1a
          , qA = 0x1b
          , qL = 0x1c
          , qH = 0x1d
          , qN = 0x1e
          , qe = 0x1f
          , qF = 0x20
          , qS = 0x21
          , qp = 0x22
          , qj = 0x23
          , qV = 0x24
          , qy = 0x25
          , qM = (function() {
            function de(dF) {
                this['FM'] = dF;
            }
            return de['prototype']['getId'] = function() {
                return this['FM'];
            }
            ,
            de;
        }())
          , qK = function(de) {
            function dF(dS) {
                return de['call'](this, dS) || this;
            }
            return (0x0,
            uU['Z'])(dF, de),
            dF;
        }(qM)
          , qa = function(de) {
            function dF() {
                var dp;
                return (dp = de['call'](this, qV) || this)['BM'] = 0x0,
                dp;
            }
            (0x0,
            uU['Z'])(dF, de);
            var dS = dF['prototype'];
            return dS['NM'] = function(dp) {
                var dj = new DataView(dp);
                if (this['_M'] = dj['getInt16'](0x1),
                this['JM'] = dj['getInt16'](0x3),
                this['KM'] = dj['getInt16'](0x5),
                this['Nh'] = dj['getUint16'](0x7),
                this['BM'] = 0x9,
                this['Nh'] > 0x0) {
                    var dV = dj['getUint8'](this['BM']) > 0x0;
                    this['BM'] += 0x1,
                    this['Jh'] = new Uint8Array(u8['Z']['Sr']);
                    var dy = 0x0;
                    if (dV) {
                        var dM = dj['getUint16'](this['BM']);
                        this['BM'] += 0x2;
                        for (var dK = 0x0; dK < dM; dK++) {
                            var da = dj['getUint8'](this['BM']);
                            this['BM'] += 0x1;
                            var df = dj['getUint8'](this['BM']);
                            this['BM'] += 0x1;
                            for (var dl = 0x0; dl < da; dl++)
                                this['Jh'][dy++] = df;
                        }
                    } else
                        this['Jh'][dy++] = dj['getUint8'](this['BM']),
                        ++this['BM'];
                }
            }
            ,
            dS['GM'] = function() {
                return this['BM'];
            }
            ,
            dS['ZM'] = function() {
                return this['_M'];
            }
            ,
            dS['QM'] = function() {
                return this['JM'];
            }
            ,
            dS['tS'] = function() {
                return this['KM'];
            }
            ,
            dS['hx'] = function() {
                return this['Jh'];
            }
            ,
            dS['iS'] = function() {
                return this['Nh'];
            }
            ,
            dF;
        }(qK)
          , qf = function(de) {
            function dF() {
                return de['call'](this, qy) || this;
            }
            (0x0,
            uU['Z'])(dF, de);
            var dS = dF['prototype'];
            return dS['NM'] = function(dp) {
                var dj = new DataView(dp);
                this['_M'] = dj['getInt16'](0x1),
                this['JM'] = dj['getInt16'](0x3),
                this['KM'] = dj['getInt16'](0x5);
            }
            ,
            dS['GM'] = function() {
                return 0x7;
            }
            ,
            dS['ZM'] = function() {
                return this['_M'];
            }
            ,
            dS['QM'] = function() {
                return this['JM'];
            }
            ,
            dS['tS'] = function() {
                return this['KM'];
            }
            ,
            dF;
        }(qK)
          , ql = function(de) {
            function dF(dS) {
                return de['call'](this, dS) || this;
            }
            return (0x0,
            uU['Z'])(dF, de),
            dF;
        }(qM)
          , qZ = function(de) {
            function dF(dp) {
                var dj;
                return (dj = de['call'](this, q2) || this)['sS'] = dp,
                dj['hS'] = 0x0,
                dj;
            }
            (0x0,
            uU['Z'])(dF, de);
            var dS = dF['prototype'];
            return dS['nS'] = function() {
                var dp = new ArrayBuffer(this['GM']())
                  , dj = new DataView(dp);
                dj['setUint8'](0x0, this['getId']()),
                dj['setUint32'](0x1, this['sS']['cp']),
                dj['setFloat32'](0x5, this['sS']['qw']['y']),
                dj['setFloat32'](0x9, this['sS']['qw']['x']),
                dj['setFloat32'](0xd, this['sS']['kw']);
                var dV = 0x0;
                return dV |= this['sS']['nm'] ? 0x1 : 0x0,
                dV |= (this['sS']['xw'] ? 0x1 : 0x0) << 0x1,
                dV |= (this['sS']['ew'] ? 0x1 : 0x0) << 0x2,
                dV |= (this['sS']['xm'] ? 0x1 : 0x0) << 0x3,
                dV |= (this['sS']['uw'] ? 0x1 : 0x0) << 0x4,
                dV |= (this['sS']['ow'] ? 0x1 : 0x0) << 0x5,
                dV |= (this['sS']['fw'] ? 0x1 : 0x0) << 0x6,
                dV |= (this['sS']['lw'] ? 0x1 : 0x0) << 0x7,
                dV |= (this['sS']['mw'] ? 0x1 : 0x0) << 0x8,
                dV |= (this['sS']['zw'] ? 0x1 : 0x0) << 0x9,
                dV |= (this['sS']['dw'] ? 0x1 : 0x0) << 0xa,
                dV |= (this['sS']['pw'] ? 0x1 : 0x0) << 0xb,
                dV |= (this['sS']['hw'] ? 0x1 : 0x0) << 0xc,
                dV |= (this['sS']['nw'] ? 0x1 : 0x0) << 0xd,
                dV |= (this['sS']['cw'] ? 0x1 : 0x0) << 0xe,
                dV |= (this['sS']['rw'] ? 0x1 : 0x0) << 0xf,
                dj['setUint16'](0x11, dV),
                this['hS'] = 0x13,
                this['sS']['hw'] && (dj['setUint8'](this['hS'], this['sS']['yw']),
                this['hS'] += 0x1),
                this['sS']['nw'] && (dj['setInt8'](this['hS'], this['sS']['ww']),
                this['hS'] += 0x1,
                dj['setInt8'](this['hS'], this['sS']['$w']),
                this['hS'] += 0x1),
                this['sS']['cw'] && (dj['setUint8'](this['hS'], this['sS']['ki']),
                this['hS'] += 0x1),
                this['sS']['rw'] && (dj['setUint8'](this['hS'], this['sS']['bw']),
                this['hS'] += 0x1,
                dj['setInt8'](this['hS'], this['sS']['$w']),
                this['hS'] += 0x1),
                dp;
            }
            ,
            dS['GM'] = function() {
                var dp = 0x0;
                return this['sS']['hw'] && (dp += 0x1),
                this['sS']['nw'] && (dp += 0x2),
                this['sS']['cw'] && (dp += 0x1),
                this['sS']['rw'] && (dp += 0x2),
                0x13 + dp;
            }
            ,
            dF;
        }(ql)
          , qw = u2(0x11c17)
          , qE = function(de) {
            function dF() {
                var dp;
                return (dp = de['call'](this, q3) || this)['cS'] = -0x1,
                dp['BM'] = 0x0,
                dp['rS'] = new Map(),
                dp['eS'] = new Map(),
                dp;
            }
            (0x0,
            uU['Z'])(dF, de);
            var dS = dF['prototype'];
            return dS['NM'] = function(dp) {
                var dj = new DataView(dp)
                  , dV = dj['getUint16'](0x1);
                this['BM'] += 0x3;
                var dy = 0x0 != (0x1 & dV)
                  , dM = 0x0 != (0x2 & dV)
                  , dK = (0x1c & dV) >> 0x2
                  , da = 0x0 != (0x20 & dV);
                this['xS'] = 0x0 != (0x40 & dV),
                this['uS'] = 0x0 != (0x80 & dV),
                this['aS'] = 0x0 != (0x100 & dV),
                this['oS'] = 0x0 != (0x200 & dV),
                this['fS'] = 0x0 != (0x400 & dV);
                var df = 0x0 != (0x800 & dV);
                this['vS'] = 0x0 != (0x1000 & dV),
                this['lS'] = 0x0 != (0x2000 & dV),
                this['Qp'] = 0x0 != (0x4000 & dV);
                var dl = dj['getUint32'](this['BM']);
                this['BM'] += 0x4,
                this['RX'] = dj['getUint8'](this['BM']),
                this['BM'] += 0x1;
                var dZ = 0x0;
                this['xS'] && (dZ = dj['getFloat32'](this['BM']),
                this['BM'] += 0x4);
                var dw = (0x0,
                uJ['XX'])(0x0, 0x0, 0x0);
                if (this['uS']) {
                    var dE = dj['getFloat32'](this['BM']);
                    this['BM'] += 0x4;
                    var dv = dj['getFloat32'](this['BM']);
                    this['BM'] += 0x4;
                    var dg = dj['getFloat32'](this['BM']);
                    this['BM'] += 0x4,
                    dw['x'] = dE,
                    dw['y'] = dv,
                    dw['z'] = dg;
                }
                var dQ = (0x0,
                uJ['XX'])(0x0, 0x0, 0x0);
                if (this['aS']) {
                    var dO = dj['getFloat32'](this['BM']);
                    this['BM'] += 0x4;
                    var dY = dj['getFloat32'](this['BM']);
                    this['BM'] += 0x4;
                    var dP = dj['getFloat32'](this['BM']);
                    this['BM'] += 0x4,
                    dQ['x'] = dO,
                    dQ['y'] = dY,
                    dQ['z'] = dP;
                }
                var dB = -0x1;
                if (this['oS'] && (dB = dj['getFloat32'](this['BM']),
                this['BM'] += 0x4),
                this['mS'] = {
                    'mp': dZ,
                    'iv': dw,
                    'vp': dQ,
                    'rp': dy,
                    'op': dM,
                    'fp': dK,
                    'lp': dB,
                    'cp': dl
                },
                this['fS'] && (this['cS'] = dj['getUint8'](this['BM']),
                this['BM'] += 0x1),
                this['lS'] && (this['Gb'] = dj['getUint8'](this['BM']),
                this['BM'] += 0x1),
                this['Qp'] && (this['ty'] = dj['getUint8'](this['BM']),
                this['BM'] += 0x1),
                da) {
                    var dU = dj['getUint8'](this['BM']);
                    this['BM'] += 0x1;
                    for (var dD = 0x0; dD < dU; dD++) {
                        var J0 = dj['getInt8'](this['BM']);
                        this['BM'] += 0x1;
                        var J1 = dj['getUint16'](this['BM']);
                        this['BM'] += 0x2;
                        var J2 = dj['getUint8'](this['BM']);
                        this['BM'] += 0x1;
                        var J3 = []
                          , J4 = dj['getUint8'](this['BM']);
                        this['BM'] += 0x1;
                        for (var J5 = 0x0; J5 < J4; J5++) {
                            var J6 = dj['getUint8'](this['BM']);
                            this['BM'] += 0x1;
                            var J7 = (0x0,
                            qw['k'])(J6)
                              , J8 = 0x0;
                            switch (J7) {
                            case zq['g']['GX']:
                                J8 = dj['getUint8'](this['BM']),
                                this['BM'] += 0x1;
                                break;
                            case zq['g']['zS']:
                                J8 = dj['getInt8'](this['BM']),
                                this['BM'] += 0x1;
                                break;
                            case zq['g']['dS']:
                                J8 = dj['getUint16'](this['BM']),
                                this['BM'] += 0x2;
                                break;
                            case zq['g']['pS']:
                                J8 = dj['getInt16'](this['BM']),
                                this['BM'] += 0x2;
                                break;
                            case zq['g']['ZX']:
                                J8 = dj['getUint32'](this['BM']),
                                this['BM'] += 0x4;
                                break;
                            case zq['g']['tM']:
                                J8 = dj['getInt32'](this['BM']),
                                this['BM'] += 0x4;
                                break;
                            case zq['g']['sM']:
                                J8 = dj['getFloat32'](this['BM']),
                                this['BM'] += 0x4;
                                break;
                            case zq['g']['yS']:
                                J8 = dj['getFloat64'](this['BM']),
                                this['BM'] += 0x8;
                                break;
                            case zq['g']['QX']:
                                var J9 = dj['getUint8'](this['BM']);
                                this['BM'] += 0x1,
                                J8 = '';
                                for (var Ju = 0x0; Ju < J9; Ju++)
                                    J8 += String['fromCharCode'](dj['getUint8'](this['BM'])),
                                    this['BM'] += 0x1;
                                break;
                            case zq['g']['iM']:
                                J8 = dj['getUint8'](this['BM']) > 0x0,
                                this['BM'] += 0x1;
                                break;
                            default:
                                console['error']('Encountered\x20unknown\x20data\x20type\x20when\x20reading\x20Item\x20Metadata\x20in\x20Input\x20Response\x20Packet');
                            }
                            J3['push']({
                                'wd': J6,
                                'wS': J7,
                                'qd': J8
                            });
                        }
                        var Jc = (0x0,
                        uD['YJ'])(J1);
                        Jc['yd'](J3),
                        this['rS']['set'](J0, new uB['Z'](Jc,J2));
                    }
                }
                if (df) {
                    var Jz = dj['getUint8'](this['BM']);
                    this['BM'] += 0x1;
                    for (var Jq = 0x0; Jq < Jz; Jq++) {
                        var Jd = dj['getUint8'](this['BM']);
                        this['BM'] += 0x1;
                        var JJ = dj['getUint32'](this['BM']);
                        this['BM'] += 0x4,
                        this['eS']['set'](Jd, JJ);
                    }
                }
                this['vS'] && (this['$S'] = dj['getUint32'](this['BM']),
                this['BM'] += 0x4,
                this['bS'] = dj['getUint32'](this['BM']),
                this['BM'] += 0x4,
                this['qS'] = dj['getUint32'](this['BM']),
                this['BM'] += 0x4,
                this['gS'] = dj['getUint32'](this['BM']),
                this['BM'] += 0x4);
            }
            ,
            dS['GM'] = function() {
                return this['BM'];
            }
            ,
            dS['Ub'] = function() {
                return this['mS'];
            }
            ,
            dS['Xw'] = function() {
                return this['cS'];
            }
            ,
            dS['_w'] = function() {
                return this['rS'];
            }
            ,
            dS['$p'] = function() {
                return this['eS'];
            }
            ,
            dS['CS'] = function() {
                return this['uS'];
            }
            ,
            dS['XS'] = function() {
                return this['aS'];
            }
            ,
            dS['MS'] = function() {
                return this['oS'];
            }
            ,
            dS['SS'] = function() {
                return this['xS'];
            }
            ,
            dS['hw'] = function() {
                return this['fS'];
            }
            ,
            dS['DS'] = function() {
                return this['vS'];
            }
            ,
            dS['buildModeChanged'] = function() {
                return this['lS'];
            }
            ,
            dS['inventoryStatusChanged'] = function() {
                return this['Qp'];
            }
            ,
            dS['getInventoryStatus'] = function() {
                return this['ty'];
            }
            ,
            dS['getMaxHealth'] = function() {
                return this['$S'];
            }
            ,
            dS['getHealth'] = function() {
                return this['bS'];
            }
            ,
            dS['AS'] = function() {
                return this['qS'];
            }
            ,
            dS['getShield'] = function() {
                return this['gS'];
            }
            ,
            dS['RS'] = function() {
                return this['Gb'];
            }
            ,
            dS['TS'] = function() {
                return this['RX'];
            }
            ,
            dF;
        }(qK)
          , qv = function(de) {
            function dF(dp, dj) {
                var dV;
                return (dV = de['call'](this, q5) || this)['jS'] = dp,
                dV['IS'] = dj,
                dV;
            }
            (0x0,
            uU['Z'])(dF, de);
            var dS = dF['prototype'];
            return dS['nS'] = function() {
                var dp = new ArrayBuffer(this['GM']())
                  , dj = new DataView(dp);
                return dj['setUint8'](0x0, this['getId']()),
                dj['setUint8'](0x1, u8['Z']['ir']),
                dj['setUint8'](0x2, this['jS']),
                dj['setUint8'](0x3, this['IS']),
                dp;
            }
            ,
            dS['GM'] = function() {
                return 0x4;
            }
            ,
            dF;
        }(ql)
          , qo = function(de) {
            function dF() {
                return de['call'](this, q6) || this;
            }
            (0x0,
            uU['Z'])(dF, de);
            var dS = dF['prototype'];
            return dS['NM'] = function(dp) {
                var dj = new DataView(dp);
                this['US'] = dj['getUint32'](0x1);
                var dV = dj['getUint8'](0x5);
                this['WS'] = '';
                for (var dy = 0x0; dy < dV; dy++)
                    this['WS'] += String['fromCharCode'](dj['getUint8'](0x6 + dy));
                var dM = dj['getFloat32'](0x6 + dV)
                  , dK = dj['getFloat32'](0x6 + dV + 0x4)
                  , da = dj['getFloat32'](0x6 + dV + 0x8);
                this['PS'] = (0x0,
                uJ['XX'])(dM, dK, da);
                var df = dj['getFloat32'](0x6 + dV + 0xc)
                  , dl = dj['getFloat32'](0x6 + dV + 0x10);
                this['LS'] = (0x0,
                uY['Ak'])(dl, df),
                this['Lm'] = dj['getUint8'](0x6 + dV + 0x14);
                var dZ = dj['getFloat32'](0x6 + dV + 0x15)
                  , dw = dj['getFloat32'](0x6 + dV + 0x19)
                  , dE = dj['getFloat32'](0x6 + dV + 0x1d);
                this['VS'] = (0x0,
                uJ['XX'])(dZ, dw, dE);
                var dv = dj['getFloat32'](0x6 + dV + 0x21)
                  , dg = dj['getFloat32'](0x6 + dV + 0x25)
                  , dQ = dj['getFloat32'](0x6 + dV + 0x29);
                this['OS'] = (0x0,
                uJ['XX'])(dv, dg, dQ),
                this['HS'] = [];
                for (var dO = dj['getUint8'](0x6 + dV + 0x2d), dY = 0x0; dY < dO; dY++)
                    this['HS']['push'](dj['getUint8'](0x6 + dV + 0x2e + dY));
                this['ES'] = dj['getFloat32'](0x6 + dV + 0x2e + dO),
                this['YS'] = Math['min'](Math['max'](dj['getUint32'](0x6 + dV + 0x2e + dO + 0x4), 0x0), 0xffffff);
            }
            ,
            dS['GM'] = function() {
                return 0x6 + this['WS']['length'] + 0x14 + 0x1 + 0xc + 0xc;
            }
            ,
            dS['FS'] = function() {
                return this['US'];
            }
            ,
            dS['NS'] = function() {
                return this['PS'];
            }
            ,
            dS['_S'] = function() {
                return this['LS'];
            }
            ,
            dS['JS'] = function() {
                return this['WS'];
            }
            ,
            dS['KS'] = function() {
                return this['Lm'];
            }
            ,
            dS['gx'] = function() {
                return this['VS'];
            }
            ,
            dS['Cx'] = function() {
                return this['OS'];
            }
            ,
            dS['GS'] = function() {
                return this['HS'];
            }
            ,
            dS['ZS'] = function() {
                return this['ES'];
            }
            ,
            dS['QS'] = function() {
                return this['YS'];
            }
            ,
            dF;
        }(qK)
          , qg = (function() {
            function de(dS, dp) {
                this['FM'] = dS,
                this['tD'] = dp,
                this['iv'] = (0x0,
                uJ['XX'])(0x0, 0x0, 0x0),
                this['qw'] = (0x0,
                uY['Ak'])(0x0, 0x0);
            }
            var dF = de['prototype'];
            return dF['Vl'] = function() {
                return this['FM'];
            }
            ,
            dF['iD'] = function() {
                return this['tD'];
            }
            ,
            dF['CS'] = function() {
                return (0x1 & this['tD']) > 0x0;
            }
            ,
            dF['sD'] = function() {
                return (0x2 & this['tD']) > 0x0;
            }
            ,
            de;
        }())
          , qQ = function(de) {
            function dF(dp) {
                var dj;
                return (dj = de['call'](this, q4) || this)['hD'] = dp,
                dj['nD'] = Date['now'](),
                dj;
            }
            (0x0,
            uU['Z'])(dF, de);
            var dS = dF['prototype'];
            return dS['NM'] = function(dp) {
                this['BM'] = 0x0;
                var dj = new DataView(dp);
                for (this['cD'] = dj['getFloat64'](0x1),
                this['rD'] = new Map(),
                this['eD'] = dj['getUint32'](0x9),
                this['BM'] = 0xd; ; ) {
                    var dV = dj['getUint32'](this['BM']);
                    if (this['BM'] += 0x4,
                    0x0 === dV)
                        break;
                    var dy = dj['getUint8'](this['BM']);
                    this['BM'] += 0x1;
                    var dM = new qg(dV,dy);
                    dM['CS']() && (dM['iv']['x'] = dj['getFloat32'](this['BM']),
                    dM['iv']['y'] = dj['getFloat32'](this['BM'] + 0x4),
                    dM['iv']['z'] = dj['getFloat32'](this['BM'] + 0x8),
                    this['BM'] += 0xc),
                    dM['sD']() && (dM['qw']['y'] = dj['getFloat32'](this['BM']),
                    dM['qw']['x'] = dj['getFloat32'](this['BM'] + 0x4),
                    this['BM'] += 0x8),
                    this['rD']['set'](dV, dM);
                }
                if (void 0x0 !== this['hD']) {
                    this['nD'] = this['hD']['jC']() + (this['cD'] - this['hD']['xD']());
                    var dK = Date['now']() - this['nD'];
                    this['nD'] += 0.05 * dK,
                    this['hD'] = void 0x0;
                }
            }
            ,
            dS['GM'] = function() {
                return this['BM'];
            }
            ,
            dS['xD'] = function() {
                return this['cD'];
            }
            ,
            dS['jC'] = function() {
                return this['nD'];
            }
            ,
            dS['IC'] = function() {
                return this['rD'];
            }
            ,
            dS['WC'] = function() {
                return this['eD'];
            }
            ,
            dF;
        }(qK)
          , qO = function(de) {
            function dF() {
                return de['call'](this, q7) || this;
            }
            (0x0,
            uU['Z'])(dF, de);
            var dS = dF['prototype'];
            return dS['NM'] = function(dp) {
                var dj = new DataView(dp);
                this['_M'] = dj['getInt32'](0x1),
                this['JM'] = dj['getInt32'](0x5),
                this['KM'] = dj['getInt32'](0x9),
                this['uD'] = dj['getUint8'](0xd);
            }
            ,
            dS['GM'] = function() {
                return 0xe;
            }
            ,
            dS['ZM'] = function() {
                return this['_M'];
            }
            ,
            dS['QM'] = function() {
                return this['JM'];
            }
            ,
            dS['tS'] = function() {
                return this['KM'];
            }
            ,
            dS['aD'] = function() {
                return this['uD'];
            }
            ,
            dF;
        }(qK)
          , qY = function(de) {
            function dF() {
                return de['call'](this, q9) || this;
            }
            (0x0,
            uU['Z'])(dF, de);
            var dS = dF['prototype'];
            return dS['NM'] = function(dp) {
                var dj = new DataView(dp);
                this['US'] = dj['getUint32'](0x1);
                var dV = dj['getFloat32'](0x5)
                  , dy = dj['getFloat32'](0x9)
                  , dM = dj['getFloat32'](0xd);
                this['oD'] = (0x0,
                uJ['XX'])(dV, dy, dM);
                var dK = dj['getFloat32'](0x11)
                  , da = dj['getFloat32'](0x15);
                this['fD'] = (0x0,
                uY['Ak'])(dK, da);
            }
            ,
            dS['GM'] = function() {
                return 0x19;
            }
            ,
            dS['FS'] = function() {
                return this['US'];
            }
            ,
            dS['vD'] = function() {
                return this['oD'];
            }
            ,
            dS['hm'] = function() {
                return this['fD'];
            }
            ,
            dF;
        }(qK)
          , qP = function(de) {
            function dF() {
                var dp;
                return (dp = de['call'](this, qJ) || this)['BM'] = 0x0,
                dp['lD'] = [],
                dp;
            }
            (0x0,
            uU['Z'])(dF, de);
            var dS = dF['prototype'];
            return dS['NM'] = function(dp) {
                var dj = new DataView(dp);
                this['BM'] += 0x1,
                this['mD'] = dj['getUint32'](this['BM']),
                this['BM'] += 0x4;
                var dV = dj['getUint8'](this['BM']);
                this['BM'] += 0x1;
                for (var dy = 0x0; dy < dV; dy++) {
                    var dM = dj['getUint8'](this['BM']);
                    this['BM'] += 0x1;
                    var dK = 0x0;
                    switch ((0x0,
                    cc['g'])(dM)) {
                    case zq['g']['GX']:
                        dK = dj['getUint8'](this['BM']),
                        this['BM'] += 0x1;
                        break;
                    case zq['g']['zS']:
                        dK = dj['getInt8'](this['BM']),
                        this['BM'] += 0x1;
                        break;
                    case zq['g']['dS']:
                        dK = dj['getUint16'](this['BM']),
                        this['BM'] += 0x2;
                        break;
                    case zq['g']['pS']:
                        dK = dj['getInt16'](this['BM']),
                        this['BM'] += 0x2;
                        break;
                    case zq['g']['ZX']:
                        dK = dj['getUint32'](this['BM']),
                        this['BM'] += 0x4;
                        break;
                    case zq['g']['tM']:
                        dK = dj['getInt32'](this['BM']),
                        this['BM'] += 0x4;
                        break;
                    case zq['g']['sM']:
                        dK = dj['getFloat32'](this['BM']),
                        this['BM'] += 0x4;
                        break;
                    case zq['g']['yS']:
                        dK = dj['getFloat64'](this['BM']),
                        this['BM'] += 0x8;
                        break;
                    case zq['g']['QX']:
                        var da = dj['getUint8'](this['BM']);
                        this['BM'] += 0x1,
                        dK = '';
                        for (var df = 0x0; df < da; df++)
                            dK += String['fromCharCode'](dj['getUint8'](this['BM'])),
                            this['BM'] += 0x1;
                        break;
                    case zq['g']['iM']:
                        dK = dj['getUint8'](this['BM']) > 0x0,
                        this['BM'] += 0x1;
                        break;
                    default:
                        console['error']('Encountered\x20unknown\x20data\x20type\x20when\x20reading\x20Entity\x20Metadata\x20Packet');
                    }
                    this['lD']['push']({
                        'wd': dM,
                        'qd': dK
                    });
                }
            }
            ,
            dS['GM'] = function() {
                return this['BM'];
            }
            ,
            dS['zD'] = function() {
                return this['mD'];
            }
            ,
            dS['dD'] = function() {
                return this['lD'];
            }
            ,
            dF;
        }(qK)
          , qB = function(de) {
            function dF() {
                var dp;
                return (dp = de['call'](this, qn) || this)['BM'] = 0x0,
                dp['lD'] = [],
                dp;
            }
            (0x0,
            uU['Z'])(dF, de);
            var dS = dF['prototype'];
            return dS['NM'] = function(dp) {
                var dj = new DataView(dp);
                this['BM'] += 0x1;
                var dV = dj['getUint8'](this['BM']);
                this['BM'] += 0x1;
                for (var dy = 0x0; dy < dV; dy++) {
                    var dM = dj['getUint8'](this['BM']);
                    this['BM'] += 0x1;
                    var dK = 0x0;
                    switch (zf[dM]) {
                    case zq['g']['GX']:
                        dK = dj['getUint8'](this['BM']),
                        this['BM'] += 0x1;
                        break;
                    case zq['g']['zS']:
                        dK = dj['getInt8'](this['BM']),
                        this['BM'] += 0x1;
                        break;
                    case zq['g']['dS']:
                        dK = dj['getUint16'](this['BM']),
                        this['BM'] += 0x2;
                        break;
                    case zq['g']['pS']:
                        dK = dj['getInt16'](this['BM']),
                        this['BM'] += 0x2;
                        break;
                    case zq['g']['ZX']:
                        dK = dj['getUint32'](this['BM']),
                        this['BM'] += 0x4;
                        break;
                    case zq['g']['tM']:
                        dK = dj['getInt32'](this['BM']),
                        this['BM'] += 0x4;
                        break;
                    case zq['g']['sM']:
                        dK = dj['getFloat32'](this['BM']),
                        this['BM'] += 0x4;
                        break;
                    case zq['g']['yS']:
                        dK = dj['getFloat64'](this['BM']),
                        this['BM'] += 0x8;
                        break;
                    case zq['g']['QX']:
                        var da = dj['getUint8'](this['BM']);
                        this['BM'] += 0x1,
                        dK = '';
                        for (var df = 0x0; df < da; df++)
                            dK += String['fromCharCode'](dj['getUint8'](this['BM'])),
                            this['BM'] += 0x1;
                        break;
                    case zq['g']['iM']:
                        dK = dj['getUint8'](this['BM']) > 0x0,
                        this['BM'] += 0x1;
                        break;
                    default:
                        console['error']('Encountered\x20unknown\x20data\x20type\x20when\x20reading\x20Game\x20Metadata\x20Packet');
                    }
                    this['lD']['push']({
                        'wd': dM,
                        'qd': dK
                    });
                }
            }
            ,
            dS['GM'] = function() {
                return this['BM'];
            }
            ,
            dS['dD'] = function() {
                return this['lD'];
            }
            ,
            dF;
        }(qK)
          , qU = function(de) {
            function dF() {
                return de['call'](this, qr) || this;
            }
            (0x0,
            uU['Z'])(dF, de);
            var dS = dF['prototype'];
            return dS['NM'] = function(dp) {
                var dj = new DataView(dp);
                this['mD'] = dj['getUint32'](0x1),
                this['pD'] = dj['getUint8'](0x5);
            }
            ,
            dS['GM'] = function() {
                return 0x6;
            }
            ,
            dS['zD'] = function() {
                return this['mD'];
            }
            ,
            dS['yD'] = function() {
                return this['pD'];
            }
            ,
            dF;
        }(qK)
          , qD = function(de) {
            function dF() {
                return de['call'](this, q8) || this;
            }
            (0x0,
            uU['Z'])(dF, de);
            var dS = dF['prototype'];
            return dS['NM'] = function(dp) {
                var dj = new DataView(dp);
                this['wD'] = 0x1 === dj['getUint8'](0x1);
                var dV = dj['getInt32'](0x2)
                  , dy = dj['getInt32'](0x6)
                  , dM = dj['getInt32'](0xa);
                this['$D'] = (0x0,
                uJ['XX'])(dV, dy, dM);
                var dK = dj['getUint16'](0xe);
                this['bD'] = [];
                for (var da = 0x0; da < dK; da++) {
                    var df = dj['getInt32'](0x10 + 0xc * da)
                      , dl = dj['getInt32'](0x10 + 0xc * da + 0x4)
                      , dZ = dj['getInt32'](0x10 + 0xc * da + 0x8);
                    this['bD']['push']((0x0,
                    uJ['XX'])(df, dl, dZ));
                }
                var dw = dj['getUint16'](0x10 + 0xc * dK);
                this['qD'] = [];
                for (var dE = 0x0; dE < dw; dE++) {
                    var dv = dj['getInt32'](0x12 + 0xc * dK + 0x10 * dE)
                      , dg = dj['getInt32'](0x12 + 0xc * dK + 0x10 * dE + 0x4)
                      , dQ = dj['getInt32'](0x12 + 0xc * dK + 0x10 * dE + 0x8)
                      , dO = dj['getFloat32'](0x12 + 0xc * dK + 0x10 * dE + 0xc);
                    this['qD']['push']({
                        'pos': (0x0,
                        uJ['XX'])(dv, dg, dQ),
                        'progress': dO
                    });
                }
            }
            ,
            dS['GM'] = function() {
                return 0x10 + 0xc * this['bD']['length'] + 0x2 + 0x10 * this['qD']['length'];
            }
            ,
            dS['kD'] = function() {
                return this['wD'];
            }
            ,
            dS['gD'] = function() {
                return this['$D'];
            }
            ,
            dS['CD'] = function() {
                return this['bD'];
            }
            ,
            dS['XD'] = function() {
                return this['qD'];
            }
            ,
            dF;
        }(qK)
          , d0 = function(de) {
            function dF() {
                return de['call'](this, qx) || this;
            }
            (0x0,
            uU['Z'])(dF, de);
            var dS = dF['prototype'];
            return dS['NM'] = function(dp) {
                var dj = new DataView(dp)
                  , dV = dj['getFloat32'](0x1)
                  , dy = dj['getFloat32'](0x5)
                  , dM = dj['getFloat32'](0x9);
                this['MD'] = (0x0,
                uJ['XX'])(dV, dy, dM);
                var dK = dj['getUint8'](0xd);
                this['SD'] = 0x0 != (0x1 & dK);
            }
            ,
            dS['GM'] = function() {
                return 0xe;
            }
            ,
            dS['DD'] = function() {
                return this['MD'];
            }
            ,
            dS['AD'] = function() {
                return this['SD'];
            }
            ,
            dF;
        }(qK)
          , d1 = u2(0x25a9)
          , d2 = u2['n'](d1)
          , d3 = function(de) {
            function dF() {
                return de['call'](this, qu) || this;
            }
            (0x0,
            uU['Z'])(dF, de);
            var dS = dF['prototype'];
            return dS['NM'] = function(dp) {
                var dj = new DataView(dp)
                  , dV = dj['getUint8'](0x1);
                this['RD'] = '';
                for (var dy = 0x0; dy < dV; dy++)
                    this['RD'] += d2()(dj['getUint32'](0x2 + 0x4 * dy));
            }
            ,
            dS['TD'] = function() {
                return this['RD'];
            }
            ,
            dS['GM'] = function() {
                return 0x2 + 0x4 * this['RD']['length'];
            }
            ,
            dF;
        }(qK);
        u2(0x3c9d);
        function d4(de, dF) {
            var dS = 'undefined' != typeof Symbol && de[Symbol['iterator']] || de['@@iterator'];
            if (dS)
                return (dS = dS['call'](de))['next']['bind'](dS);
            if (Array['isArray'](de) || (dS = function(dj, dV) {
                if (!dj)
                    return;
                if ('string' == typeof dj)
                    return d5(dj, dV);
                var dy = Object['prototype']['toString']['call'](dj)['slice'](0x8, -0x1);
                'Object' === dy && dj['constructor'] && (dy = dj['constructor']['name']);
                if ('Map' === dy || 'Set' === dy)
                    return Array['from'](dj);
                if ('Arguments' === dy || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/['test'](dy))
                    return d5(dj, dV);
            }(de)) || dF && de && 'number' == typeof de['length']) {
                dS && (de = dS);
                var dp = 0x0;
                return function() {
                    return dp >= de['length'] ? {
                        'done': !0x0
                    } : {
                        'done': !0x1,
                        'value': de[dp++]
                    };
                }
                ;
            }
            throw new TypeError('Invalid\x20attempt\x20to\x20iterate\x20non-iterable\x20instance.\x0aIn\x20order\x20to\x20be\x20iterable,\x20non-array\x20objects\x20must\x20have\x20a\x20[Symbol.iterator]()\x20method.');
        }
        function d5(de, dF) {
            (null == dF || dF > de['length']) && (dF = de['length']);
            for (var dS = 0x0, dp = new Array(dF); dS < dF; dS++)
                dp[dS] = de[dS];
            return dp;
        }
        var d6 = function(de) {
            function dF(dp) {
                var dj;
                return (dj = de['call'](this, qc) || this)['RD'] = dp,
                dj['RD'] = dj['RD']['substr'](0x0, 0x64),
                dj;
            }
            (0x0,
            uU['Z'])(dF, de);
            var dS = dF['prototype'];
            return dS['nS'] = function() {
                var dp = new ArrayBuffer(this['GM']())
                  , dj = new DataView(dp);
                dj['setUint8'](0x0, this['getId']());
                for (var dV, dy = [], dM = d4(this['RD']); !(dV = dM())['done']; ) {
                    var dK = dV['value'];
                    dy['push'](dK);
                }
                dj['setUint8'](0x1, dy['length']);
                for (var da = 0x0; da < dy['length']; da++) {
                    var df = dy[da]['codePointAt'](0x0)
                      , dl = void 0x0 === df ? 0x0 : df;
                    dj['setUint32'](0x2 + 0x4 * da, dl);
                }
                return dp;
            }
            ,
            dS['GM'] = function() {
                return 0x2 + 0x4 * this['RD']['length'];
            }
            ,
            dF;
        }(ql)
          , d7 = function(de) {
            function dF() {
                return de['call'](this, qz) || this;
            }
            (0x0,
            uU['Z'])(dF, de);
            var dS = dF['prototype'];
            return dS['NM'] = function(dp) {
                var dj = new DataView(dp);
                this['mD'] = dj['getUint32'](0x1),
                this['jD'] = dj['getUint8'](0x5);
            }
            ,
            dS['GM'] = function() {
                return 0x6;
            }
            ,
            dS['zD'] = function() {
                return this['mD'];
            }
            ,
            dS['ID'] = function() {
                return this['jD'];
            }
            ,
            dF;
        }(qK)
          , d8 = function(de) {
            function dF() {
                return de['call'](this, qq) || this;
            }
            (0x0,
            uU['Z'])(dF, de);
            var dS = dF['prototype'];
            return dS['NM'] = function(dp) {
                var dj = new DataView(dp);
                this['mD'] = dj['getUint32'](0x1);
            }
            ,
            dS['GM'] = function() {
                return 0x6;
            }
            ,
            dS['zD'] = function() {
                return this['mD'];
            }
            ,
            dF;
        }(qK)
          , d9 = function(de) {
            function dF() {
                var dp;
                return (dp = de['call'](this, qd) || this)['BM'] = 0x0,
                dp['UD'] = '',
                dp['WD'] = cz['C']['ln'],
                dp['PD'] = '',
                dp['LD'] = cz['C']['ln'],
                dp['VD'] = c4['q']['hn'],
                dp;
            }
            (0x0,
            uU['Z'])(dF, de);
            var dS = dF['prototype'];
            return dS['NM'] = function(dp) {
                this['BM'] += 0x1;
                var dj = new DataView(dp)
                  , dV = dj['getUint8'](this['BM']);
                this['BM'] += 0x1;
                for (var dy = 0x0; dy < dV; dy++)
                    this['UD'] += String['fromCharCode'](dj['getUint8'](this['BM'])),
                    this['BM'] += 0x1;
                this['WD'] = dj['getUint8'](this['BM']),
                this['BM'] += 0x1;
                var dM = dj['getUint8'](this['BM']);
                this['BM'] += 0x1;
                for (var dK = 0x0; dK < dM; dK++)
                    this['PD'] += String['fromCharCode'](dj['getUint8'](this['BM'])),
                    this['BM'] += 0x1;
                this['LD'] = dj['getUint8'](this['BM']),
                this['BM'] += 0x1,
                this['OD'] = dj['getUint8'](this['BM']),
                this['BM'] += 0x1,
                this['OD'] === z6 && (this['VD'] = dj['getUint8'](this['BM']),
                this['BM'] += 0x1);
            }
            ,
            dS['GM'] = function() {
                return this['BM'];
            }
            ,
            dS['HD'] = function() {
                return this['UD'];
            }
            ,
            dS['ED'] = function() {
                return this['WD'];
            }
            ,
            dS['YD'] = function() {
                return this['PD'];
            }
            ,
            dS['FD'] = function() {
                return this['LD'];
            }
            ,
            dS['BD'] = function() {
                return this['OD'];
            }
            ,
            dS['ND'] = function() {
                return this['VD'];
            }
            ,
            dF;
        }(qK)
          , du = function(de) {
            function dF() {
                return de['call'](this, qk) || this;
            }
            (0x0,
            uU['Z'])(dF, de);
            var dS = dF['prototype'];
            return dS['NM'] = function(dp) {
                var dj = new DataView(dp);
                this['_M'] = dj['getInt32'](0x1),
                this['JM'] = dj['getInt32'](0x5),
                this['KM'] = dj['getInt32'](0x9),
                this['_D'] = dj['getFloat32'](0xd);
            }
            ,
            dS['GM'] = function() {
                return 0x11;
            }
            ,
            dS['ZM'] = function() {
                return this['_M'];
            }
            ,
            dS['QM'] = function() {
                return this['JM'];
            }
            ,
            dS['tS'] = function() {
                return this['KM'];
            }
            ,
            dS['JD'] = function() {
                return this['_D'];
            }
            ,
            dF;
        }(qK)
          , dc = function(de) {
            function dF() {
                return de['call'](this, qT) || this;
            }
            (0x0,
            uU['Z'])(dF, de);
            var dS = dF['prototype'];
            return dS['nS'] = function() {
                var dp = new ArrayBuffer(this['GM']());
                return new DataView(dp)['setUint8'](0x0, this['getId']()),
                dp;
            }
            ,
            dS['GM'] = function() {
                return 0x1;
            }
            ,
            dF;
        }(ql)
          , dz = function(de) {
            function dF() {
                var dp;
                return (dp = de['call'](this, qI) || this)['KD'] = '',
                dp['BM'] = 0x0,
                dp;
            }
            (0x0,
            uU['Z'])(dF, de);
            var dS = dF['prototype'];
            return dS['NM'] = function(dp) {
                var dj = new DataView(dp)
                  , dV = dj['getUint32'](0x1);
                this['KD'] = '';
                for (var dy = 0x0; dy < dV; dy++)
                    this['KD'] += String['fromCharCode'](dj['getUint8'](0x5 + dy));
                this['KD'] = window['btoa'](this['KD']),
                this['BM'] = 0x5 + dV;
            }
            ,
            dS['GM'] = function() {
                return this['BM'];
            }
            ,
            dS['GD'] = function() {
                return this['KD'];
            }
            ,
            dF;
        }(qK)
          , dq = function(de) {
            function dF() {
                return de['call'](this, qW) || this;
            }
            (0x0,
            uU['Z'])(dF, de);
            var dS = dF['prototype'];
            return dS['NM'] = function(dp) {
                var dj = new DataView(dp)
                  , dV = dj['getUint8'](0x1);
                this['RD'] = '';
                for (var dy = 0x0; dy < dV; dy++)
                    this['RD'] += d2()(dj['getUint32'](0x2 + 0x4 * dy));
            }
            ,
            dS['TD'] = function() {
                return this['RD'];
            }
            ,
            dS['GM'] = function() {
                return 0x2 + this['RD']['length'];
            }
            ,
            dF;
        }(qK)
          , dd = function(de) {
            function dF() {
                var dp;
                return (dp = de['call'](this, qR) || this)['ZD'] = !0x1,
                dp;
            }
            (0x0,
            uU['Z'])(dF, de);
            var dS = dF['prototype'];
            return dS['NM'] = function(dp) {
                var dj = new DataView(dp);
                this['ZD'] = 0x0 !== dj['getUint8'](0x1);
            }
            ,
            dS['GM'] = function() {
                return 0x2;
            }
            ,
            dS['QD'] = function() {
                return this['ZD'];
            }
            ,
            dF;
        }(qK)
          , dJ = function(de) {
            function dF() {
                return de['call'](this, qm) || this;
            }
            (0x0,
            uU['Z'])(dF, de);
            var dS = dF['prototype'];
            return dS['NM'] = function(dp) {
                new DataView(dp);
            }
            ,
            dS['GM'] = function() {
                return 0x1;
            }
            ,
            dF;
        }(qK)
          , dk = function(de) {
            function dF() {
                return de['call'](this, qC) || this;
            }
            (0x0,
            uU['Z'])(dF, de);
            var dS = dF['prototype'];
            return dS['NM'] = function(dp) {
                var dj = new DataView(dp);
                this['tA'] = dj['getUint8'](0x1);
                var dV = dj['getUint8'](0x2);
                this['RD'] = '';
                for (var dy = 0x0; dy < dV; dy++)
                    this['RD'] += d2()(dj['getUint32'](0x3 + 0x4 * dy));
            }
            ,
            dS['iA'] = function() {
                return this['tA'];
            }
            ,
            dS['TD'] = function() {
                return this['RD'];
            }
            ,
            dS['GM'] = function() {
                return 0x3 + 0x4 * this['RD']['length'];
            }
            ,
            dF;
        }(qK)
          , dr = function(de) {
            function dF() {
                return de['call'](this, qG) || this;
            }
            (0x0,
            uU['Z'])(dF, de);
            var dS = dF['prototype'];
            return dS['NM'] = function(dp) {
                var dj = new DataView(dp)
                  , dV = dj['getFloat32'](0x1)
                  , dy = dj['getFloat32'](0x5);
                this['NC'] = (0x0,
                uY['Ak'])(dV, dy),
                this['_C'] = dj['getFloat32'](0x9);
                var dM = dj['getFloat32'](0xd)
                  , dK = dj['getFloat32'](0x11);
                this['GC'] = (0x0,
                uY['Ak'])(dM, dK),
                this['ZC'] = dj['getFloat32'](0x15),
                this['QC'] = dj['getUint32'](0x19),
                this['tX'] = dj['getUint32'](0x1d);
            }
            ,
            dS['GM'] = function() {
                return 0x21;
            }
            ,
            dS['nX'] = function() {
                return this['NC'];
            }
            ,
            dS['cX'] = function() {
                return this['_C'];
            }
            ,
            dS['rX'] = function() {
                return this['GC'];
            }
            ,
            dS['eX'] = function() {
                return this['ZC'];
            }
            ,
            dS['sA'] = function() {
                return this['QC'];
            }
            ,
            dS['hA'] = function() {
                return this['tX'];
            }
            ,
            dF;
        }(qK)
          , dT = function(de) {
            function dF() {
                return de['call'](this, qX) || this;
            }
            (0x0,
            uU['Z'])(dF, de);
            var dS = dF['prototype'];
            return dS['NM'] = function(dp) {
                var dj = new DataView(dp);
                this['mD'] = dj['getUint32'](0x1),
                this['nA'] = dj['getUint32'](0x5),
                this['cA'] = dj['getUint32'](0x9);
                var dV = dj['getUint8'](0xd);
                this['rA'] = 0x0 != (0x1 & dV),
                this['eA'] = 0x0 != (0x2 & dV),
                this['SD'] = 0x0 != (0x4 & dV);
            }
            ,
            dS['GM'] = function() {
                return 0x8;
            }
            ,
            dS['zD'] = function() {
                return this['mD'];
            }
            ,
            dS['xA'] = function() {
                return this['cA'];
            }
            ,
            dS['uA'] = function() {
                return this['nA'];
            }
            ,
            dS['aA'] = function() {
                return this['rA'];
            }
            ,
            dS['oA'] = function() {
                return this['eA'];
            }
            ,
            dS['AD'] = function() {
                return this['SD'];
            }
            ,
            dF;
        }(qK)
          , dm = function(de) {
            function dF() {
                return de['call'](this, qb) || this;
            }
            (0x0,
            uU['Z'])(dF, de);
            var dS = dF['prototype'];
            return dS['NM'] = function(dp) {
                var dj = new DataView(dp)
                  , dV = dj['getUint8'](0x1);
                this['RD'] = '';
                for (var dy = 0x0; dy < dV; dy++)
                    this['RD'] += d2()(dj['getUint32'](0x2 + 0x4 * dy));
            }
            ,
            dS['TD'] = function() {
                return this['RD'];
            }
            ,
            dS['GM'] = function() {
                return 0x2 + this['RD']['length'];
            }
            ,
            dF;
        }(qK)
          , dx = function(de) {
            function dF(dp) {
                var dj;
                return (dj = de['call'](this, qA) || this)['fA'] = dp,
                dj;
            }
            (0x0,
            uU['Z'])(dF, de);
            var dS = dF['prototype'];
            return dS['nS'] = function() {
                var dp = new ArrayBuffer(this['GM']())
                  , dj = new DataView(dp);
                return dj['setUint8'](0x0, this['getId']()),
                dj['setUint32'](0x1, this['fA']),
                dp;
            }
            ,
            dS['GM'] = function() {
                return 0x5;
            }
            ,
            dF;
        }(ql)
          , dX = function(de) {
            function dF() {
                return de['call'](this, qp) || this;
            }
            (0x0,
            uU['Z'])(dF, de);
            var dS = dF['prototype'];
            return dS['nS'] = function() {
                var dp = new ArrayBuffer(this['GM']());
                return new DataView(dp)['setUint8'](0x0, this['getId']()),
                dp;
            }
            ,
            dS['GM'] = function() {
                return 0x1;
            }
            ,
            dF;
        }(ql)
          , dI = function(de) {
            function dF() {
                var dp;
                return (dp = de['call'](this, qL) || this)['BM'] = 0x0,
                dp['lD'] = [],
                dp;
            }
            (0x0,
            uU['Z'])(dF, de);
            var dS = dF['prototype'];
            return dS['NM'] = function(dp) {
                var dj = new DataView(dp);
                this['BM'] += 0x1,
                this['mD'] = dj['getUint32'](this['BM']),
                this['BM'] += 0x4,
                this['vA'] = dj['getUint8'](this['BM']),
                this['BM'] += 0x1;
                var dV = dj['getUint8'](this['BM']);
                this['BM'] += 0x1;
                for (var dy = 0x0; dy < dV; dy++) {
                    var dM = dj['getUint8'](this['BM']);
                    this['BM'] += 0x1;
                    var dK = 0x0;
                    switch (zQ[dM]) {
                    case zq['g']['GX']:
                        dK = dj['getUint8'](this['BM']),
                        this['BM'] += 0x1;
                        break;
                    case zq['g']['zS']:
                        dK = dj['getInt8'](this['BM']),
                        this['BM'] += 0x1;
                        break;
                    case zq['g']['dS']:
                        dK = dj['getUint16'](this['BM']),
                        this['BM'] += 0x2;
                        break;
                    case zq['g']['pS']:
                        dK = dj['getInt16'](this['BM']),
                        this['BM'] += 0x2;
                        break;
                    case zq['g']['ZX']:
                        dK = dj['getUint32'](this['BM']),
                        this['BM'] += 0x4;
                        break;
                    case zq['g']['tM']:
                        dK = dj['getInt32'](this['BM']),
                        this['BM'] += 0x4;
                        break;
                    case zq['g']['sM']:
                        dK = dj['getFloat32'](this['BM']),
                        this['BM'] += 0x4;
                        break;
                    case zq['g']['yS']:
                        dK = dj['getFloat64'](this['BM']),
                        this['BM'] += 0x8;
                        break;
                    case zq['g']['QX']:
                        var da = dj['getUint8'](this['BM']);
                        this['BM'] += 0x1,
                        dK = '';
                        for (var df = 0x0; df < da; df++)
                            dK += String['fromCharCode'](dj['getUint8'](this['BM'])),
                            this['BM'] += 0x1;
                        break;
                    case zq['g']['iM']:
                        dK = dj['getUint8'](this['BM']) > 0x0,
                        this['BM'] += 0x1;
                        break;
                    default:
                        console['error']('Encountered\x20unknown\x20data\x20type\x20when\x20reading\x20Entity\x20Metadata\x20Packet');
                    }
                    this['lD']['push']({
                        'wd': dM,
                        'qd': dK
                    });
                }
            }
            ,
            dS['GM'] = function() {
                return this['BM'];
            }
            ,
            dS['zD'] = function() {
                return this['mD'];
            }
            ,
            dS['lA'] = function() {
                return this['vA'];
            }
            ,
            dS['dD'] = function() {
                return this['lD'];
            }
            ,
            dF;
        }(qK)
          , dC = function(de) {
            function dF(dp, dj) {
                var dV;
                return (dV = de['call'](this, qH) || this)['mA'] = dp,
                dV['zA'] = dj,
                dV;
            }
            (0x0,
            uU['Z'])(dF, de);
            var dS = dF['prototype'];
            return dS['nS'] = function() {
                var dp = new ArrayBuffer(this['GM']())
                  , dj = new DataView(dp);
                return dj['setUint8'](0x0, this['getId']()),
                dj['setUint8'](0x1, this['mA']),
                dj['setUint8'](0x2, this['zA']),
                dp;
            }
            ,
            dS['GM'] = function() {
                return 0x3;
            }
            ,
            dF;
        }(ql)
          , dG = function(de) {
            function dF() {
                return de['call'](this, qN) || this;
            }
            (0x0,
            uU['Z'])(dF, de);
            var dS = dF['prototype'];
            return dS['NM'] = function(dp) {
                var dj = new DataView(dp)
                  , dV = dj['getUint8'](0x1);
                this['RD'] = '';
                for (var dy = 0x0; dy < dV; dy++)
                    this['RD'] += d2()(dj['getUint32'](0x2 + 0x4 * dy));
            }
            ,
            dS['TD'] = function() {
                return this['RD'];
            }
            ,
            dS['GM'] = function() {
                return 0x2 + 0x4 * this['RD']['length'];
            }
            ,
            dF;
        }(qK)
          , dn = function(de) {
            function dF() {
                return de['call'](this, qe) || this;
            }
            (0x0,
            uU['Z'])(dF, de);
            var dS = dF['prototype'];
            return dS['NM'] = function(dp) {
                var dj = new DataView(dp);
                this['dA'] = dj['getUint8'](0x1),
                this['pA'] = dj['getFloat32'](0x2),
                this['yA'] = dj['getFloat32'](0x6);
            }
            ,
            dS['wA'] = function() {
                return this['dA'];
            }
            ,
            dS['$A'] = function() {
                return this['pA'];
            }
            ,
            dS['bA'] = function() {
                return this['yA'];
            }
            ,
            dS['GM'] = function() {
                return 0xa;
            }
            ,
            dF;
        }(qK)
          , dW = function(de) {
            function dF() {
                return de['call'](this, qF) || this;
            }
            (0x0,
            uU['Z'])(dF, de);
            var dS = dF['prototype'];
            return dS['NM'] = function(dp) {
                var dj = new DataView(dp)
                  , dV = dj['getFloat32'](0x1)
                  , dy = dj['getFloat32'](0x5)
                  , dM = dj['getFloat32'](0x9);
                this['qA'] = (0x0,
                uJ['XX'])(dV, dy, dM),
                this['dA'] = dj['getUint8'](0xd),
                this['pA'] = dj['getFloat32'](0xe),
                this['yA'] = dj['getFloat32'](0x12);
            }
            ,
            dS['vD'] = function() {
                return this['qA'];
            }
            ,
            dS['wA'] = function() {
                return this['dA'];
            }
            ,
            dS['$A'] = function() {
                return this['pA'];
            }
            ,
            dS['bA'] = function() {
                return this['yA'];
            }
            ,
            dS['GM'] = function() {
                return 0x16;
            }
            ,
            dF;
        }(qK)
          , dR = function(de) {
            function dF() {
                return de['call'](this, qS) || this;
            }
            (0x0,
            uU['Z'])(dF, de);
            var dS = dF['prototype'];
            return dS['NM'] = function(dp) {
                var dj = new DataView(dp);
                this['kA'] = dj['getUint8'](0x1),
                this['gA'] = dj['getUint16'](0x2);
            }
            ,
            dS['GM'] = function() {
                return 0x4;
            }
            ,
            dS['CA'] = function() {
                return this['kA'];
            }
            ,
            dS['XA'] = function() {
                return this['gA'];
            }
            ,
            dF;
        }(qK)
          , db = function(de) {
            function dF() {
                var dp;
                return (dp = de['call'](this, q9) || this)['MA'] = [],
                dp['BM'] = 0x0,
                dp;
            }
            (0x0,
            uU['Z'])(dF, de);
            var dS = dF['prototype'];
            return dS['NM'] = function(dp) {
                var dj = new DataView(dp)
                  , dV = dj['getUint8'](0x1);
                this['BM'] += 0x2;
                for (var dy = 0x0; dy < dV; dy++) {
                    var dM = dj['getUint8'](this['BM']);
                    this['BM'] += 0x1;
                    var dK = ''
                      , da = String['fromCharCode'](dj['getUint8'](this['BM']));
                    for (this['BM'] += 0x1; da !== String['fromCharCode'](0x0); )
                        dK += da,
                        da = String['fromCharCode'](dj['getUint8'](this['BM'])),
                        this['BM'] += 0x1;
                    var df = dj['getUint32'](this['BM']);
                    this['BM'] += 0x4,
                    this['MA']['push']({
                        'Si': dM,
                        'k': dK,
                        'SA': df
                    });
                }
            }
            ,
            dS['GM'] = function() {
                return 0x1 + this['BM'];
            }
            ,
            dS['DA'] = function() {
                return this['MA'];
            }
            ,
            dF;
        }(qK)
          , dA = (function() {
            function de(dS) {
                var dp = this;
                this['AA'] = function(dj) {
                    var dV = new qZ(dj);
                    dp['RA'](dV);
                }
                ,
                this['TA'] = function(dj) {
                    var dV = new d6(dj);
                    dp['RA'](dV);
                }
                ,
                this['jA'] = function(dj) {
                    var dV = new dx(dj);
                    dp['RA'](dV);
                }
                ,
                this['IA'] = function(dj, dV) {
                    var dy = new dC(dj,dV);
                    dp['RA'](dy);
                }
                ,
                this['xy'] = function() {
                    var dj = new dX();
                    dp['RA'](dj);
                }
                ,
                this['UA'] = function() {
                    q1['Z']['WA']('Connected\x20to\x20' + dp['PA']() + ':' + dp['LA']());
                    var dj = new qv(dp['jS'],dp['IS']);
                    dp['RA'](dj);
                }
                ,
                this['VA'] = function() {
                    if (dp['HA']()) {
                        dp['EA'] = Date['now']();
                        var dj = new dc();
                        dp['RA'](dj);
                    }
                }
                ,
                this['YA'] = function() {
                    var dj = Date['now']() - dp['EA'];
                    dp['Cv']['bh'](dj),
                    setTimeout(dp['VA'], u8['Z']['ro']);
                }
                ,
                this['FA'] = function(dj) {
                    var dV = dj['data'];
                    switch (new DataView(dV)['getUint8'](0x0)) {
                    case qV:
                        var dy = new qa();
                        dy['NM'](dV),
                        uz['Z']['emit'](uq['x']['jv'], dy['ZM'](), dy['QM'](), dy['tS'](), dy['iS'](), dy['hx']()),
                        dp['Cv']['yh'](dy['GM']());
                        break;
                    case qy:
                        var dM = new qf();
                        dM['NM'](dV),
                        uz['Z']['emit'](uq['x']['Iv'], dM['ZM'](), dM['QM'](), dM['tS']()),
                        dp['Cv']['yh'](dM['GM']());
                        break;
                    case q3:
                        var dK = new qE();
                        dK['NM'](dV),
                        uz['Z']['emit'](uq['x']['Vy'], dK['TS'](), dK['CS'](), dK['XS'](), dK['MS'](), dK['SS'](), dK['hw'](), dK['DS'](), dK['buildModeChanged'](), dK['inventoryStatusChanged'](), dK['Ub'](), dK['Xw'](), dK['_w'](), dK['$p'](), dK['getMaxHealth'](), dK['getHealth'](), dK['AS'](), dK['getShield'](), dK['RS'](), dK['getInventoryStatus']()),
                        dp['Cv']['yh'](dK['GM']());
                        break;
                    case q4:
                        var da = new qQ(dp['hD']);
                        dp['hD'] = da,
                        da['NM'](dV),
                        uz['Z']['emit'](uq['x']['SC'], da),
                        dp['Cv']['yh'](da['GM']());
                        break;
                    case q6:
                        var df = new qo();
                        df['NM'](dV),
                        uz['Z']['emit'](uq['x']['Tv'], df['FS'](), df['JS'](), df['NS'](), df['_S'](), df['KS'](), df['gx'](), df['Cx'](), df['GS'](), df['ZS'](), df['QS']()),
                        dp['Cv']['yh'](df['GM']()),
                        dp['VA']();
                        break;
                    case q7:
                        var dl = new qO();
                        dl['NM'](dV),
                        uz['Z']['emit'](uq['x']['Wv'], dl['ZM'](), dl['QM'](), dl['tS'](), dl['aD']()),
                        dp['Cv']['yh'](dl['GM']());
                        break;
                    case q8:
                        var dZ = new qD();
                        dZ['NM'](dV),
                        uz['Z']['emit'](uq['x']['Oy'], dZ['kD'](), dZ['gD'](), dZ['CD'](), dZ['XD']()),
                        dp['Cv']['yh'](dZ['GM']());
                        break;
                    case q9:
                        var dw = new qY();
                        dw['NM'](dV),
                        uz['Z']['emit'](uq['x']['Hy'], dw['FS'](), dw['vD'](), dw['hm']()),
                        dp['Cv']['yh'](dw['GM']());
                        break;
                    case qu:
                        var dE = new d3();
                        dE['NM'](dV),
                        uz['Z']['emit'](uq['x']['rM'], dE['TD']()),
                        dp['Cv']['yh'](dE['GM']());
                        break;
                    case qz:
                        var dv = new d7();
                        dv['NM'](dV),
                        uz['Z']['emit'](uq['x']['DC'], dv['zD'](), dv['ID']()),
                        dp['Cv']['yh'](dv['GM']());
                        break;
                    case qq:
                        var dg = new d8();
                        dg['NM'](dV),
                        uz['Z']['emit'](uq['x']['RC'], dg['zD']()),
                        dp['Cv']['yh'](dg['GM']());
                        break;
                    case qd:
                        var dQ = new d9();
                        dQ['NM'](dV),
                        uz['Z']['emit'](uq['x']['mM'], dQ['HD'](), dQ['ED'](), dQ['YD'](), dQ['FD'](), dQ['BD'](), dQ['ND']()),
                        dp['Cv']['yh'](dQ['GM']());
                        break;
                    case qJ:
                        var dO = new qP();
                        dO['NM'](dV),
                        uz['Z']['emit'](uq['x']['TC'], dO['zD'](), dO['dD']()),
                        dp['Cv']['yh'](dO['GM']());
                        break;
                    case qL:
                        var dY = new dI();
                        dY['NM'](dV),
                        uz['Z']['emit'](uq['x']['HM'], dY['zD'](), dY['lA'](), dY['dD']()),
                        dp['Cv']['yh'](dY['GM']());
                        break;
                    case qk:
                        var dP = new du();
                        dP['NM'](dV),
                        uz['Z']['emit'](uq['x']['Uv'], dP['ZM'](), dP['QM'](), dP['tS'](), dP['JD']()),
                        dp['Cv']['yh'](dP['GM']());
                        break;
                    case qr:
                        var dB = new qU();
                        dB['NM'](dV),
                        uz['Z']['emit'](uq['x']['AC'], dB['zD'](), dB['yD']()),
                        dp['Cv']['yh'](dB['GM']());
                        break;
                    case qm:
                        var dU = new dJ();
                        dU['NM'](dV),
                        dp['Cv']['yh'](dU['GM']()),
                        dp['YA']();
                        break;
                    case qx:
                        var dD = new d0();
                        dD['NM'](dV),
                        uz['Z']['emit'](uq['x']['By'], dD['DD'](), dD['AD']()),
                        dp['Cv']['yh'](dD['GM']());
                        break;
                    case qX:
                        var J0 = new dT();
                        J0['NM'](dV),
                        uz['Z']['emit'](uq['x']['lk'], J0['zD'](), J0['uA'](), J0['xA'](), J0['aA'](), J0['oA'](), J0['AD']()),
                        dp['Cv']['yh'](J0['GM']());
                        break;
                    case qI:
                        var J1 = new dz();
                        J1['NM'](dV),
                        uz['Z']['emit'](uq['x']['yX'], J1['GD']()),
                        dp['Cv']['yh'](J1['GM']());
                        break;
                    case qC:
                        var J2 = new dk();
                        J2['NM'](dV),
                        uz['Z']['emit'](uq['x']['xM'], J2['iA'](), J2['TD']()),
                        dp['Cv']['yh'](J2['GM']());
                        break;
                    case qG:
                        var J3 = new dr();
                        J3['NM'](dV),
                        uz['Z']['emit'](uq['x']['hX'], J3['nX'](), J3['cX'](), J3['rX'](), J3['eX'](), J3['sA'](), J3['hA']()),
                        dp['Cv']['yh'](J3['GM']());
                        break;
                    case qn:
                        var J4 = new qB();
                        J4['NM'](dV),
                        uz['Z']['emit'](uq['x']['oM'], J4['dD']()),
                        dp['Cv']['yh'](J4['GM']());
                        break;
                    case qR:
                        var J5 = new dd();
                        J5['NM'](dV),
                        uz['Z']['emit'](uq['x']['lM'], J5['QD']()),
                        dp['Cv']['yh'](J5['GM']());
                        break;
                    case qW:
                        var J6 = new dq();
                        J6['NM'](dV),
                        uz['Z']['emit'](uq['x']['MM'], J6['TD']()),
                        dp['Cv']['yh'](J6['GM']());
                        break;
                    case qb:
                        var J7 = new dm();
                        J7['NM'](dV),
                        uz['Z']['emit'](uq['x']['XM'], J7['TD']()),
                        dp['Cv']['yh'](J7['GM']());
                        break;
                    case qN:
                        var J8 = new dG();
                        J8['NM'](dV),
                        uz['Z']['emit'](uq['x']['kM'], J8['TD']()),
                        dp['Cv']['yh'](J8['GM']());
                        break;
                    case qe:
                        var J9 = new dn();
                        J9['NM'](dV),
                        uz['Z']['emit'](uq['x']['zk'], J9['wA'](), J9['$A'](), J9['bA']()),
                        dp['Cv']['yh'](J9['GM']());
                        break;
                    case qF:
                        var Ju = new dW();
                        Ju['NM'](dV),
                        uz['Z']['emit'](uq['x']['dk'], Ju['vD'](), Ju['wA'](), Ju['$A'](), Ju['bA']()),
                        dp['Cv']['yh'](Ju['GM']());
                        break;
                    case qS:
                        var Jc = new dR();
                        Jc['NM'](dV),
                        uz['Z']['emit'](uq['x']['gM'], Jc['CA'](), Jc['XA']()),
                        dp['Cv']['yh'](Jc['GM']());
                        break;
                    case qj:
                        var Jz = new db();
                        Jz['NM'](dV),
                        uz['Z']['emit'](uq['x']['vM'], Jz['DA']()),
                        dp['Cv']['yh'](Jz['GM']());
                    }
                }
                ,
                this['BA'] = function(dj) {
                    dp['im'](),
                    uz['Z']['emit'](uq['x']['MM'], 'Connection\x20Failed!\x20Please\x20try\x20again!'),
                    q1['Z']['WA']('An\x20unknown\x20error\x20has\x20occurred\x20during\x20the\x20connection');
                }
                ,
                this['NA'] = function(dj) {
                    dp['im'](),
                    q1['Z']['WA']('Disconnected\x20from\x20' + dp['PA']() + ':' + dp['LA']());
                }
                ,
                this['_A'] = function() {
                    dp['im']();
                }
                ,
                this['Cv'] = dS,
                this['jS'] = cA['Cp']['we'],
                this['IS'] = cA['Zx']['Ve'],
                this['EA'] = 0x0;
            }
            var dF = de['prototype'];
            return dF['Zl'] = function(dS, dp, dj, dV, dy) {
                this['jS'] = dS,
                this['IS'] = dp,
                this['JA'] = dj,
                this['KA'] = dV,
                this['GA'] = dy,
                this['ZA'] = new WebSocket((this['GA'] ? 'wss' : 'ws') + '://' + this['JA'] + ':' + this['KA']),
                this['ZA']['binaryType'] = 'arraybuffer',
                this['QA'](),
                this['tR']();
            }
            ,
            dF['tR'] = function() {
                uz['Z']['on'](uq['x']['Tw'], this['AA']),
                uz['Z']['on'](uq['x']['VM'], this['TA']),
                uz['Z']['on'](uq['x']['Cw'], this['jA']),
                uz['Z']['on'](uq['x']['iR'], this['IA']),
                uz['Z']['on'](uq['x']['Qy'], this['xy']),
                uz['Z']['on'](uq['x']['sR'], this['_A']);
            }
            ,
            dF['hR'] = function() {
                uz['Z']['off'](uq['x']['Tw'], this['AA']),
                uz['Z']['off'](uq['x']['VM'], this['TA']),
                uz['Z']['off'](uq['x']['Cw'], this['jA']),
                uz['Z']['off'](uq['x']['iR'], this['IA']),
                uz['Z']['off'](uq['x']['Qy'], this['xy']),
                uz['Z']['off'](uq['x']['sR'], this['_A']);
            }
            ,
            dF['QA'] = function() {
                void 0x0 !== this['ZA'] && (this['ZA']['addEventListener']('open', this['UA']),
                this['ZA']['addEventListener']('message', this['FA']),
                this['ZA']['addEventListener']('error', this['BA']),
                this['ZA']['addEventListener']('close', this['NA']));
            }
            ,
            dF['nR'] = function() {
                void 0x0 !== this['ZA'] && (this['ZA']['removeEventListener']('open', this['UA']),
                this['ZA']['removeEventListener']('message', this['FA']),
                this['ZA']['removeEventListener']('error', this['BA']),
                this['ZA']['removeEventListener']('close', this['NA']));
            }
            ,
            dF['RA'] = function(dS) {
                this['HA']() && (this['ZA']['send'](dS['nS']()),
                this['Cv']['ph'](dS['GM']()));
            }
            ,
            dF['cR'] = function(dS) {
                this['HA']() && this['ZA']['send'](dS);
            }
            ,
            dF['im'] = function() {
                this['HA']() && this['ZA']['close'](),
                this['hR'](),
                this['nR'](),
                this['ZA'] = void 0x0,
                this['JA'] = void 0x0,
                this['KA'] = void 0x0,
                (0x0,
                uk['Zp'])() !== cG['Q']['Pe'] && ((0x0,
                uk['bl'])(cG['Q']['Pe']),
                uz['Z']['emit'](uq['x']['Jy']));
            }
            ,
            dF['PA'] = function() {
                return void 0x0 === this['JA'] ? 'unavailable' : this['JA'];
            }
            ,
            dF['LA'] = function() {
                return void 0x0 === this['KA'] ? -0x1 : this['KA'];
            }
            ,
            dF['HA'] = function() {
                return void 0x0 !== this['ZA'] && 0x1 == this['ZA']['readyState'];
            }
            ,
            de;
        }())
          , dL = u2(0x4022)
          , dH = (function() {
            var de = (0x0,
            u4['Z'])(u6()['mark'](function dF() {
                var dS, dp;
                return u6()['wrap'](function(dj) {
                    for (; ; )
                        switch (dj['prev'] = dj['next']) {
                        case 0x0:
                            return u7['CtF']['enabled'] = !0x0,
                            (function() {
                                var dV = u7['Tme']['prototype']['updateMatrixWorld'];
                                u7['Tme']['prototype']['updateMatrixWorld'] = function() {
                                    this['visible'] && dV['apply'](this);
                                }
                                ;
                            }()),
                            dj['next'] = 0x4,
                            q0();
                        case 0x4:
                            dS = dj['sent'],
                            dp = new dA(dS['KX']()),
                            uz['Z']['on'](uq['x']['rR'], function(dV, dy, dM, dK, da) {
                                dL['t']['disconnect'](),
                                dp['Zl'](dV, dy, dM, dK, da),
                                window['onbeforeunload'] = function() {
                                    return '';
                                }
                                ;
                            }),
                            uz['Z']['on'](uq['x']['xR'], function(dV, dy, dM) {
                                dp['im'](),
                                dS['ls']();
                            }),
                            uT['h']['dispatch']((0x0,
                            ul['Mv'])(!0x0)),
                            ur['GameAnalytics']['initialize']('ce59fd34c83d32fb060ce384b958dda7', 'a8c29fcf417eba74851b4660a361731aba521da8');
                        case 0xa:
                        case 'end':
                            return dj['stop']();
                        }
                }, dF);
            }));
            return function() {
                return de['apply'](this, arguments);
            }
            ;
        }())
          , dN = dH;
    }
}]);
