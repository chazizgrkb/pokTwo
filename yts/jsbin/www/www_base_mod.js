var _yt_www = {};
(function(m) {
    var window = this;
    m.aa = function(a) {
        return function() {
            return m.ba[a].apply(this, arguments)
        }
    };
    m.l = function(a, b, c) {
        a = a.split(".");
        c = c || m.ca;
        a[0] in c || !c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c = c[d] ? c[d] : c[d] = {} : c[d] = b
    };
    m.n = function(a, b) {
        for (var c = a.split("."), d = b || m.ca, e; e = c.shift();)
            if (null != d[e]) d = d[e];
            else return null;
        return d
    };
    m.da = function() {};
    m.ea = function(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    };
    m.fa = function(a) {
        return "array" == (0, m.ea)(a)
    };
    m.q = function(a) {
        return "string" == typeof a
    };
    m.ga = function(a) {
        return "function" == (0, m.ea)(a)
    };
    var ha = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    };
    var ia = function(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    };
    m.r = function(a, b, c) {
        m.r = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ha : ia;
        return m.r.apply(null, arguments)
    };
    m.ja = function(a, b) {
        for (var c in b) a[c] = b[c]
    };
    m.s = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.D = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.kK = function(a, c, g) {
            var h = Array.prototype.slice.call(arguments, 2);
            return b.prototype[c].apply(a, h)
        }
    };
    m.ka = function(a, b) {
        var c = (0, m.la)(a, b),
            d;
        (d = 0 <= c) && (0, m.ma)(a, c);
        return d
    };
    m.ma = function(a, b) {
        m.na.splice.call(a, b, 1)
    };
    m.pa = function(a, b, c) {
        return 2 >= arguments.length ? m.na.slice.call(a, b) : m.na.slice.call(a, b, c)
    };
    m.t = function() {};
    m.qa = function() {
        this.b = [];
        this.Mc = {}
    };
    m.ra = function(a) {
        sa(m.ta, arguments)
    };
    m.v = function(a, b) {
        return a in m.ta ? m.ta[a] : b
    };
    m.ua = function(a) {
        sa(m.va, arguments)
    };
    m.w = function(a, b) {
        if ((0, m.ga)(a) && (0, m.n)("ytsched.enableSetTimeout")) {
            var c = (0, m.n)("yt.scheduler.instance.addJob");
            if (c) return c(a, 0, b);
            (0, m.l)("ytsched.enableSetTimeout", !1, void 0)
        }(0, m.ga)(a) && (a = (0, m.wa)(a));
        return window.setTimeout(a, b)
    };
    m.x = function(a) {
        (0, m.n)("ytsched.enableSetTimeout") ? (0, m.n)("yt.scheduler.instance.cancelJob")(a) : window.clearTimeout(a)
    };
    m.wa = function(a) {
        return a && window.yterr ? function() {
            try {
                return a.apply(this, arguments)
            } catch (b) {
                throw (0, m.xa)(b), b;
            }
        } : a
    };
    m.xa = function(a, b) {
        if (window && window.yterr) {
            var c = (0, m.n)("yt.www.errors.log");
            c ? c(a, b) : (c = (0, m.v)("ERRORS") || [], c.push(a), (0, m.ra)("ERRORS", c))
        }
    };
    m.ya = function(a) {
        sa(m.za, arguments)
    };
    m.Aa = function(a) {
        return a in m.za
    };
    var sa = function(a, b) {
        if (1 < b.length) {
            var c = b[0];
            a[c] = b[1]
        } else {
            var d = b[0];
            for (c in d) a[c] = d[c]
        }
    };
    m.Ba = function() {
        return (0, m.n)("yt.scheduler.instance") && !(0, m.n)("ytsched.enableSetTimeout")
    };
    m.Ca = function(a, b, c) {
        void 0 === c && (c = window.NaN);
        var d = (0, m.n)("yt.scheduler.instance.addJob");
        if (d) return (0, window.isNaN)(c) && (c = 0), d(a, b, c);
        if ((0, window.isNaN)(c)) a();
        else return (0, m.w)(a, c || 0)
    };
    m.Da = function(a, b) {
        return (0, m.Ca)(a, 0, b)
    };
    m.Ea = function(a, b) {
        return (0, m.Ca)(a, 1, b)
    };
    m.y = function(a, b, c) {
        var d = Fa();
        if (d) {
            var e = d.subscribe(a, function() {
                if (!Ga || Ga != e) {
                    var d = arguments,
                        h = function() {
                            Ha[e] && b.apply(c || window, d)
                        };
                    try {
                        Ia[a] ? h() : (0, m.Ba)() ? (0, m.Da)(h) : (0, m.w)(h, 0)
                    } catch (k) {
                        (0, m.xa)(k)
                    }
                }
            }, c);
            Ha[e] = !0;
            Ja[a] || (Ja[a] = []);
            Ja[a].push(e);
            return e
        }
        return 0
    };
    m.Ka = function(a) {
        var b = Fa();
        b && ("number" == typeof a ? a = [a] : "string" == typeof a && (a = [(0, window.parseInt)(a, 10)]), (0, m.A)(a, function(a) {
            b.unsubscribeByKey(a);
            delete Ha[a]
        }))
    };
    m.B = function(a, b) {
        var c = Fa();
        return c ? c.publish.apply(c, arguments) : !1
    };
    var La = function(a, b) {
        Ia[a] = !0;
        var c = Fa();
        c && c.publish.apply(c, arguments);
        Ia[a] = !1
    };
    var Fa = function() {
        return (0, m.n)("yt.pubsub.instance_")
    };
    m.Ma = function(a, b, c, d, e) {
        this.name = a;
        this.deps = b || [];
        this.page = c || "";
        this.j = (0, m.wa)(d || null);
        this.i = (0, m.wa)(e || null);
        this.g = []
    };
    m.Na = function(a) {
        a.name in Oa && Pa(a.name);
        Oa[a.name] = {
            reqs: [],
            disable: (0, m.r)(a.disable, a)
        };
        (0, m.A)(a.deps, function(b) {
            if (!(b in Oa)) throw Error("Module " + b + " required by " + a.name);
            Oa[b].reqs.push(a.name)
        });
        (0, m.Ba)() ? (0, m.Ea)((0, m.r)(a.enable, a)) : a.enable()
    };
    var Pa = function(a) {
        if (a in Oa) {
            var b = Oa[a];
            (0, m.A)(b.reqs, function(a) {
                Pa(a)
            });
            try {
                b.disable()
            } catch (c) {}
            delete Oa[a]
        }
    };
    m.Qa = function(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    };
    m.Ra = function(a, b) {
        var c = a.match(Sa);
        window.spf.scripts.load(a, b, c ? c[1] : "")
    };
    m.Ta = function(a) {
        a && ((0, m.q)(a) ? (0, m.Ra)(a) : (0, m.fa)(a) ? (0, m.A)(a, function(a) {
            (0, m.Ta)(a)
        }) : (0, m.Qa)(a, function(a, c) {
            (0, m.Ra)(c, function() {
                (0, m.Ta)(a)
            })
        }))
    };
    m.Ua = function(a, b) {
        if (a) {
            var c = new window.Image,
                d = "" + Va++;
            Wa[d] = c;
            c.onload = c.onerror = function() {
                b && Wa[d] && b();
                delete Wa[d]
            };
            c.src = a;
            c = eval("null")
        }
    };
    m.Xa = function(a, b, c) {
        (0, m.Ya)(c)[a] = b || (0, m.C)()
    };
    var Za = function(a, b, c) {
        var d = $a(c).span;
        c = (0, m.Ya)(c);
        "number" == typeof b ? d[a] = b : b in c && (d[a] = (0, m.C)() - c[b])
    };
    var ab = function(a) {
        return Math.max(0, a.responseStart - a.navigationStart)
    };
    m.bb = function(a, b) {
        var c = (0, m.Ya)(a),
            d = $a(a).span,
            e = (0, m.cb)(a),
            g = b || (0, m.n)("yt.timing.reportbuilder_");
        if (g) {
            if (g = g.apply(null, [c, d, e, a])) db(g), (0, m.eb)(a)
        } else {
            var g = {
                    v: 2,
                    s: "youtube",
                    action: (0, m.v)("TIMING_ACTION")
                },
                h = (0, m.v)("TIMING_INFO") || {},
                k;
            for (k in h) e[k] = h[k];
            k = e.srt;
            delete e.srt;
            if (!k && 0 !== k) try {
                k = ab((window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance).timing)
            } catch (p) {
                e.pt && (k = e.pt)
            }
            if (k || 0 === k) e.srt = k;
            c.aft || (c.aft = c.vr && c.cl && c.cl > c.vr ? c.cl : c.vr ?
                c.vr : c.ol);
            c.vr && c.gv && (d.vl = Math.round(c.vr - c.gv));
            for (var u in e) "_" != u.charAt(0) && (g[u] = e[u]);
            e = {};
            u = [];
            k = c._start;
            for (var z in c) "_" != z.charAt(0) && (h = Math.max(Math.round(c[z] - k), 0), e[z] = h, u.push(z + "." + h));
            g.rt = u.join(",");
            c = {};
            z = [];
            for (var F in d) "_" != F.charAt(0) && (c[F] = d[F], z.push(F + "." + d[F]));
            g.it = z.join(",");
            db(g);
            (d = (0, m.n)("ytdebug.logTiming")) && d(g, e, c);
            (0, m.eb)(a)
        }
    };
    var fb = function(a) {
        var b = (0, m.v)("TIMING_ACTION"),
            c = !!(0, m.v)("TIMING_WFF"),
            d = (0, m.Ya)(a);
        b && d._start && (c && d.vr ? (0, m.bb)(a) : c || !d.ol && !d.aft || (0, m.bb)(a))
    };
    var db = function(a) {
        var b = "https:" == window.location.protocol ? "https://gg.google.com/csi" : "http://csi.gstatic.com/csi",
            c = "",
            d;
        for (d in a) c += "&" + d + "=" + a[d];
        (0, m.Ua)(b + "?" + c.substring(1))
    };
    m.Ya = function(a) {
        return $a(a).tick
    };
    m.cb = function(a) {
        return $a(a).info
    };
    var $a = function(a) {
        return (0, m.n)("ytcsi." + (a || "") + "data_") || (0, m.eb)(a)
    };
    m.eb = function(a) {
        var b = {
            tick: {},
            span: {},
            info: {}
        };
        (0, m.l)("ytcsi." + (a || "") + "data_", b, void 0);
        return b
    };
    var gb = function() {
        (0, m.Xa)("ol");
        (0, m.B)("init");
        var a = (0, m.v)("PAGE_NAME");
        a && (0, m.B)("init-" + a);
        fb()
    };
    var hb = function() {
        var a = (0, m.v)("PAGE_NAME");
        a && La("dispose-" + a);
        La("dispose")
    };
    var ib = function() {
        gb()
    };
    var jb = function() {
        hb()
    };
    var kb = function(a, b, c) {
        for (var d = window.document.getElementsByTagName("script"), e = !1, g = 0, h = d.length; g < h; g++)
            if (0 < d[g].src.indexOf("/debug-")) {
                e = !0;
                break
            } e && (d = Error(), d.message = a, d.fileName = b, d.lineNumber = c, (0, m.xa)(d))
    };
    var lb = function() {
        mb = 1;
        (0, m.eb)(void 0);
        nb(pb);
        La("navigate")
    };
    var qb = function(a, b) {
        var c = 1 == mb;
        mb = 2;
        c ? (nb(rb), sb()) : nb(tb);
        b.swfcfg && ub(b.swfcfg)
    };
    var vb = function() {};
    var wb = function(a, b) {
        var c = 1 == mb;
        mb = 3;
        (0, m.Xa)("_start", b.timing.responseStart);
        var d = ab(b.timing);
        (0, m.cb)(void 0).srt = d;
        Za("req", b.timing.responseStart - b.timing.fetchStart);
        c && (nb(xb), sb());
        b.swfcfg && ub(b.swfcfg)
    };
    var yb = function(a) {
        nb(zb);
        if (a.timing) {
            var b = {
                    spfProcessCss: "cl",
                    spfProcessHtml: "hr",
                    spfProcessJs: "jl"
                },
                c;
            for (c in b) a.timing[c] && (0, m.Xa)(b[c], a.timing[c])
        }
        gb();
        mb = 0
    };
    var Ab = function(a, b) {
        (0, m.xa)(b)
    };
    var Bb = function() {
        Cb()
    };
    var Db = function() {};
    var sb = function() {
        var a = (0, m.n)("ytbin.qoe.getInstance");
        a && (a = a(), a.reset(), a.start());
        window.scroll(0, 0);
        hb();
        for (var b in m.ta) delete m.ta[b];
        (b = (0, m.n)("yt.www.watch.player.dispose")) ? b(): (b = (0, m.D)("movie_player")) && b.stopVideo && b.stopVideo()
    };
    var ub = function(a) {
        (0, m.l)("ytplayer.config", null, void 0);
        var b = (0, m.n)("yt.player.cancelAll");
        b && b();
        a = a || null;
        b = (0, m.n)("yt.player.embed");
        a && b && (b("player-api", a), a = (0, m.Eb)(a), a.loaded = !0);
        (0, m.l)("ytplayer.config", a, void 0)
    };
    var nb = function(a) {
        var b = window.document.getElementById("progress");
        b || (b = window.document.createElement("div"), b.id = "progress", b.innerHTML = "<dt><dd>", window.document.body.appendChild(b));
        (0, m.w)(function() {
            var c = a[0],
                d = a[1],
                e = a[2];
            b.className = "";
            var g = b.style;
            g.transitionDuration = g.webkitTransitionDuration = c + "ms";
            g.width = d + "%";
            (0, m.x)(Fb);
            Fb = (0, m.w)(function() {
                b.className = e
            }, c)
        }, 0)
    };
    var Cb = function() {
        var a = zb[0] + 50;
        (0, m.x)(Fb);
        Fb = (0, m.w)(function() {
            var a = window.document.getElementById("progress");
            a && a.parentNode.removeChild(a)
        }, a)
    };
    var Gb = function() {
        m.Ma.call(this, "www/base");
        this.b = 0
    };
    var Hb = function(a, b) {
        var c;
        (c = (c = b.match(Ib)) ? c[1] + "/" + c[2] : "") && Pa(c)
    };
    m.ba = [];
    m.Jb = m.Jb || {};
    m.ca = this;
    m.Kb = "closure_uid_" + (1E9 * Math.random() >>> 0);
    m.C = Date.now || function() {
        return +new Date
    };
    Function.prototype.bind = Function.prototype.bind || function(a, b) {
        if (1 < arguments.length) {
            var c = Array.prototype.slice.call(arguments, 1);
            c.unshift(this, a);
            return m.r.apply(null, c)
        }
        return (0, m.r)(this, a)
    };
    m.na = Array.prototype;
    m.la = m.na.indexOf ? function(a, b, c) {
        return m.na.indexOf.call(a, b, c)
    } : function(a, b, c) {
        c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if ((0, m.q)(a)) return (0, m.q)(b) && 1 == b.length ? a.indexOf(b, c) : -1;
        for (; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    m.A = m.na.forEach ? function(a, b, c) {
        m.na.forEach.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = (0, m.q)(a) ? a.split("") : a, g = 0; g < d; g++) g in e && b.call(c, e[g], g, a)
    };
    m.Lb = m.na.filter ? function(a, b, c) {
        return m.na.filter.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = [], g = 0, h = (0, m.q)(a) ? a.split("") : a, k = 0; k < d; k++)
            if (k in h) {
                var p = h[k];
                b.call(c, p, k, a) && (e[g++] = p)
            } return e
    };
    m.Mb = m.na.map ? function(a, b, c) {
        return m.na.map.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = Array(d), g = (0, m.q)(a) ? a.split("") : a, h = 0; h < d; h++) h in g && (e[h] = b.call(c, g[h], h, a));
        return e
    };
    m.Nb = m.na.reduce ? function(a, b, c, d) {
        d && (b = (0, m.r)(b, d));
        return m.na.reduce.call(a, b, c)
    } : function(a, b, c, d) {
        var e = c;
        (0, m.A)(a, function(c, h) {
            e = b.call(d, e, c, h, a)
        });
        return e
    };
    m.Ob = m.na.some ? function(a, b, c) {
        return m.na.some.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = (0, m.q)(a) ? a.split("") : a, g = 0; g < d; g++)
            if (g in e && b.call(c, e[g], g, a)) return !0;
        return !1
    };
    m.Pb = m.na.every ? function(a, b, c) {
        return m.na.every.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = (0, m.q)(a) ? a.split("") : a, g = 0; g < d; g++)
            if (g in e && !b.call(c, e[g], g, a)) return !1;
        return !0
    };
    m.t.prototype.Wd = !1;
    m.t.prototype.ma = (0, m.aa)(13);
    m.t.prototype.dispose = function() {
        this.Wd || (this.Wd = !0, this.G())
    };
    m.t.prototype.G = function() {
        if (this.Bc)
            for (; this.Bc.length;) this.Bc.shift()()
    };
    (0, m.s)(m.qa, m.t);
    m.f = m.qa.prototype;
    m.f.Yu = 1;
    m.f.Hl = 0;
    m.f.M = function(a, b, c) {
        var d = this.Mc[a];
        d || (d = this.Mc[a] = []);
        var e = this.Yu;
        this.b[e] = a;
        this.b[e + 1] = b;
        this.b[e + 2] = c;
        this.Yu = e + 3;
        d.push(e);
        return e
    };
    m.f.oa = (0, m.aa)(3);
    m.f.ge = function(a) {
        if (0 != this.Hl) return this.g || (this.g = []), this.g.push(a), !1;
        var b = this.b[a];
        if (b) {
            var c = this.Mc[b];
            c && (0, m.ka)(c, a);
            delete this.b[a];
            delete this.b[a + 1];
            delete this.b[a + 2]
        }
        return !!b
    };
    m.f.K = function(a, b) {
        var c = this.Mc[a];
        if (c) {
            this.Hl++;
            for (var d = (0, m.pa)(arguments, 1), e = 0, g = c.length; e < g; e++) {
                var h = c[e];
                this.b[h + 1].apply(this.b[h + 2], d)
            }
            this.Hl--;
            if (this.g && 0 == this.Hl)
                for (; c = this.g.pop();) this.ge(c);
            return 0 != e
        }
        return !1
    };
    m.f.clear = function(a) {
        if (a) {
            var b = this.Mc[a];
            b && ((0, m.A)(b, this.ge, this), delete this.Mc[a])
        } else this.b.length = 0, this.Mc = {}
    };
    m.f.Za = (0, m.aa)(2);
    m.f.G = function() {
        m.qa.D.G.call(this);
        delete this.b;
        delete this.Mc;
        delete this.g
    };
    m.ta = window.yt && window.yt.config_ || {};
    (0, m.l)("yt.config_", m.ta, void 0);
    m.va = window.yt && window.yt.tokens_ || {};
    (0, m.l)("yt.tokens_", m.va, void 0);
    m.za = window.yt && window.yt.msgs_ || {};
    (0, m.l)("yt.msgs_", m.za, void 0);
    m.Qb = "Microsoft Internet Explorer" == window.navigator.appName;
    m.Rb = (0, m.n)("yt.scheduler.instance.cancelJob") || m.da;
    var Sb = (0, m.n)("yt.pubsub.instance_") || new m.qa;
    m.qa.prototype.subscribe = m.qa.prototype.M;
    m.qa.prototype.unsubscribeByKey = m.qa.prototype.ge;
    m.qa.prototype.publish = m.qa.prototype.K;
    m.qa.prototype.clear = m.qa.prototype.clear;
    (0, m.l)("yt.pubsub.instance_", Sb, void 0);
    var Ha = (0, m.n)("yt.pubsub.subscribedKeys_") || {};
    (0, m.l)("yt.pubsub.subscribedKeys_", Ha, void 0);
    var Ja = (0, m.n)("yt.pubsub.topicToKeys_") || {};
    (0, m.l)("yt.pubsub.topicToKeys_", Ja, void 0);
    var Ia = (0, m.n)("yt.pubsub.isSynchronous_") || {};
    (0, m.l)("yt.pubsub.isSynchronous_", Ia, void 0);
    var Ga = (0, m.n)("yt.pubsub.skipSubId_") || null;
    (0, m.l)("yt.pubsub.skipSubId_", Ga, void 0);
    m.f = m.Ma.prototype;
    m.f.enable = function() {
        (0, m.A)("string" == typeof this.page ? [this.page] : this.page, function(a) {
            a && (this.M("init-" + a, this.init, this), this.M("dispose-" + a, this.dispose, this), (0, m.v)("PAGE_NAME") == a && this.init())
        }, this)
    };
    m.f.init = function() {
        this.j && this.j()
    };
    m.f.dispose = function() {
        this.i && this.i()
    };
    m.f.disable = function() {
        this.dispose();
        this.clear()
    };
    m.f.M = function(a, b, c) {
        a = (0, m.y)(a, b, c);
        this.g.push(a);
        return a
    };
    m.f.clear = function() {
        (0, m.Ka)(this.g);
        this.g = []
    };
    var Oa = (0, m.n)("yt.modules.registry_") || {};
    (0, m.l)("yt.modules.registry_", Oa, void 0);
    var Sa = /jsbin\/(?:[a-zA-Z0-9_-]+\/)*(?:debug-)?([a-zA-Z0-9_-]+?)(?:-vfl|.js)/,
        Ib = /^([a-z]+)_(\w+)_mod$/;
    var Wa = {},
        Va = 0;
    var mb, Fb, pb = [900, 60, "waiting"],
        xb = [500, 99, "waiting"],
        rb = [300, 60, "waiting"],
        tb = [400, 99, "waiting"],
        zb = [300, 101, "done"];
    window.yt = window.yt || {};
    (0, m.l)("yt.setConfig", m.ra, void 0);
    (0, m.l)("yt.getConfig", m.v, void 0);
    (0, m.l)("yt.hasMsg", m.Aa, void 0);
    (0, m.l)("yt.pubsub.publish", m.B, void 0);
    (0, m.l)("yt.pubsub.subscribe", m.y, void 0);
    (0, m.l)("yt.setMsg", m.ya, void 0);
    (0, m.l)("yt.setGoogMsg", function(a) {
        sa(m.za, arguments)
    }, void 0);
    (0, m.l)("yt.setAjaxToken", m.ua, void 0);
    (0, m.l)("reportTimingMaps", function(a, b, c, d) {
        if (a)
            for (var e in a)(0, m.Xa)(e, a[e], d);
        if (c)
            for (var g in c) Za(g, c[g], d);
        if (b)
            for (var h in b) a = h, c = b[h], (0, m.cb)(d)[a] = c;
        fb(d)
    }, void 0);
    (0, m.s)(Gb, m.Ma);
    Gb.prototype.enable = function() {
        window.onload = ib;
        window.onunload = jb;
        window.onerror = kb;
        var a = window.ytspf || {};
        a.enabled ? (a.config = a.config || {}, (0, m.ja)(a.config, {
            "navigate-requested-callback": lb,
            "navigate-part-received-callback": qb,
            "navigate-part-processed-callback": vb,
            "navigate-received-callback": wb,
            "navigate-processed-callback": yb,
            "navigate-error-callback": Ab,
            "script-loading-callback": Hb
        }), a.enabled = window.spf.init(a.config), this.M("init", Bb), this.M("dispose", Db)) : window.spf.dispose();
        this.M("init",
            this.init, this);
        this.M("dispose", this.dispose, this)
    };
    Gb.prototype.init = function() {
        (window.ytspf || {}).enabled || window.spf.dispose();
        var a, b;
        !window.ytPageFrameLoaded && (0, m.v)("PAGEFRAME_JS") && (a = (0, m.v)("PAGEFRAME_JS"), b = function() {
            (0, m.n)("ytbin.www.pageframe.setup")();
            window.ytPageFrameLoaded = !0
        });
        var c = {};
        c[(0, m.v)("JS_COMMON_MODULE")] = (0, m.v)("JS_PAGE_MODULES");
        var d = (0, m.v)("JS_DELAY_LOAD");
        0 < d ? ((0, m.x)(this.b), this.b = (0, m.w)(function() {
            a && (0, m.Ra)(a, b);
            (0, m.Ta)(c)
        }, d)) : (a && (0, m.Ra)(a, b), (0, m.Ta)(c))
    };
    Gb.prototype.dispose = function() {
        (0, m.x)(this.b);
        var a = (0, m.n)("ytbin.www.pageframe.cancelSetup");
        a && a()
    };
    Gb.prototype.disable = function() {
        Gb.D.disable.call(this);
        window.spf.dispose();
        window.onload = null;
        window.onunload = null;
        window.onerror = null
    };
    (0, m.Na)(new Gb);
})(_yt_www);