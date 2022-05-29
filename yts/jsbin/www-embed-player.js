(function() {
    var h, p = this;

    function q(a) {
        a = a.split(".");
        for (var b = p, c; c = a.shift();)
            if (null != b[c]) b = b[c];
            else return null;
        return b
    }

    function aa() {}

    function ba(a) {
        a.getInstance = function() {
            return a.Xa ? a.Xa : a.Xa = new a
        }
    }

    function ca(a) {
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
    }

    function s(a) {
        return void 0 !== a
    }

    function u(a) {
        return "array" == ca(a)
    }

    function da(a) {
        var b = ca(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function v(a) {
        return "string" == typeof a
    }

    function ea(a) {
        return "function" == ca(a)
    }

    function fa(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function ga(a) {
        return a[ha] || (a[ha] = ++ia)
    }
    var ha = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ia = 0;

    function ja(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function la(a, b, c) {
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
    }

    function w(a, b, c) {
        w = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ja : la;
        return w.apply(null, arguments)
    }

    function x(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    }
    var y = Date.now || function() {
        return +new Date
    };

    function z(a, b) {
        var c = a.split("."),
            d = p;
        c[0] in d || !d.execScript || d.execScript("var " + c[0]);
        for (var e; c.length && (e = c.shift());) c.length || void 0 === b ? d = d[e] ? d[e] : d[e] = {} : d[e] = b
    }

    function A(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.t = b.prototype;
        a.prototype = new c;
        a.Vb = function(a, c, f) {
            var g = Array.prototype.slice.call(arguments, 2);
            return b.prototype[c].apply(a, g)
        }
    }
    Function.prototype.bind = Function.prototype.bind || function(a, b) {
        if (1 < arguments.length) {
            var c = Array.prototype.slice.call(arguments, 1);
            c.unshift(this, a);
            return w.apply(null, c)
        }
        return w(this, a)
    };
    var ma;

    function na(a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    }

    function oa(a) {
        if (!pa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(qa, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(ra, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(sa, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(ta, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(ua, "&#39;"));
        return a
    }
    var qa = /&/g,
        ra = /</g,
        sa = />/g,
        ta = /"/g,
        ua = /'/g,
        pa = /[&<>"']/;

    function B(a) {
        a = s(void 0) ? a.toFixed(void 0) : String(a);
        var b = a.indexOf("."); - 1 == b && (b = a.length);
        b = Math.max(0, 2 - b);
        return Array(b + 1).join("0") + a
    }

    function va(a, b) {
        for (var c = 0, d = na(String(a)).split("."), e = na(String(b)).split("."), f = Math.max(d.length, e.length), g = 0; 0 == c && g < f; g++) {
            var k = d[g] || "",
                l = e[g] || "",
                m = RegExp("(\\d*)(\\D*)", "g"),
                n = RegExp("(\\d*)(\\D*)", "g");
            do {
                var t = m.exec(k) || ["", "", ""],
                    r = n.exec(l) || ["", "", ""];
                if (0 == t[0].length && 0 == r[0].length) break;
                c = wa(0 == t[1].length ? 0 : parseInt(t[1], 10), 0 == r[1].length ? 0 : parseInt(r[1], 10)) || wa(0 == t[2].length, 0 == r[2].length) || wa(t[2], r[2])
            } while (0 == c)
        }
        return c
    }

    function wa(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }

    function xa(a) {
        for (var b = 0, c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c), b %= 4294967296;
        return b
    };
    var C = Array.prototype,
        ya = C.indexOf ? function(a, b, c) {
            return C.indexOf.call(a, b, c)
        } : function(a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (v(a)) return v(b) && 1 == b.length ? a.indexOf(b, c) : -1;
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        D = C.forEach ? function(a, b, c) {
            C.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = v(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        za = C.filter ? function(a, b, c) {
            return C.filter.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = [], f = 0, g = v(a) ?
                    a.split("") : a, k = 0; k < d; k++)
                if (k in g) {
                    var l = g[k];
                    b.call(c, l, k, a) && (e[f++] = l)
                } return e
        },
        E = C.map ? function(a, b, c) {
            return C.map.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = Array(d), f = v(a) ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
            return e
        },
        Aa = C.some ? function(a, b, c) {
            return C.some.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = v(a) ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && b.call(c, e[f], f, a)) return !0;
            return !1
        },
        Ba = C.every ? function(a, b, c) {
            return C.every.call(a, b, c)
        } : function(a, b, c) {
            for (var d =
                    a.length, e = v(a) ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && !b.call(c, e[f], f, a)) return !1;
            return !0
        };

    function Ca(a, b) {
        var c = Da(a, b, void 0);
        return 0 > c ? null : v(a) ? a.charAt(c) : a[c]
    }

    function Da(a, b, c) {
        for (var d = a.length, e = v(a) ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a)) return f;
        return -1
    }

    function F(a, b) {
        return 0 <= ya(a, b)
    }

    function G(a) {
        return 0 == a.length
    }

    function Ea() {
        var a = Fa;
        if (!u(a))
            for (var b = a.length - 1; 0 <= b; b--) delete a[b];
        a.length = 0
    }

    function Ga(a, b) {
        var c = ya(a, b),
            d;
        (d = 0 <= c) && C.splice.call(a, c, 1);
        return d
    }

    function Ha(a) {
        return C.concat.apply(C, arguments)
    }

    function Ia(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function Ja(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c],
                e;
            if (u(d) || (e = da(d)) && Object.prototype.hasOwnProperty.call(d, "callee")) a.push.apply(a, d);
            else if (e)
                for (var f = a.length, g = d.length, k = 0; k < g; k++) a[f + k] = d[k];
            else a.push(d)
        }
    }

    function Ka(a, b, c, d) {
        return C.splice.apply(a, La(arguments, 1))
    }

    function La(a, b, c) {
        return 2 >= arguments.length ? C.slice.call(a, b) : C.slice.call(a, b, c)
    }

    function Ma(a, b) {
        C.sort.call(a, b || Na)
    }

    function Oa(a, b, c) {
        if (!da(a) || !da(b) || a.length != b.length) return !1;
        var d = a.length;
        c = c || Pa;
        for (var e = 0; e < d; e++)
            if (!c(a[e], b[e])) return !1;
        return !0
    }

    function Na(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function Pa(a, b) {
        return a === b
    };

    function Qa(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    }

    function Ra(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    }

    function Sa(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = d;
        return b
    }

    function Ta(a) {
        var b = Ua,
            c;
        for (c in b)
            if (a.call(void 0, b[c], c, b)) return c
    }

    function Va(a) {
        for (var b in a) return !1;
        return !0
    }

    function Wa(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    }
    var Xa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Ya(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Xa.length; f++) c = Xa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };

    function Za(a, b, c) {
        a.dataset ? a.dataset[$a(b)] = c : a.setAttribute("data-" + b, c)
    }

    function H(a, b) {
        return a.dataset ? a.dataset[$a(b)] : a.getAttribute("data-" + b)
    }
    var ab = {};

    function $a(a) {
        return ab[a] || (ab[a] = String(a).replace(/\-([a-z])/g, function(a, c) {
            return c.toUpperCase()
        }))
    };

    function bb() {}
    bb.prototype.i = !1;
    bb.prototype.dispose = function() {
        this.i || (this.i = !0, this.K())
    };

    function cb(a, b) {
        a.U || (a.U = []);
        a.U.push(w(b, void 0))
    }
    bb.prototype.K = function() {
        if (this.U)
            for (; this.U.length;) this.U.shift()()
    };

    function db(a) {
        a && "function" == typeof a.dispose && a.dispose()
    };

    function I() {
        this.b = [];
        this.A = {}
    }
    A(I, bb);
    h = I.prototype;
    h.Ea = 1;
    h.ga = 0;
    h.P = function(a, b, c) {
        var d = this.A[a];
        d || (d = this.A[a] = []);
        var e = this.Ea;
        this.b[e] = a;
        this.b[e + 1] = b;
        this.b[e + 2] = c;
        this.Ea = e + 3;
        d.push(e);
        return e
    };
    h.ka = function(a, b, c) {
        if (a = this.A[a]) {
            var d = this.b;
            if (a = Ca(a, function(a) {
                    return d[a + 1] == b && d[a + 2] == c
                })) return this.Q(a)
        }
        return !1
    };
    h.Q = function(a) {
        if (0 != this.ga) return this.d || (this.d = []), this.d.push(a), !1;
        var b = this.b[a];
        if (b) {
            var c = this.A[b];
            c && Ga(c, a);
            delete this.b[a];
            delete this.b[a + 1];
            delete this.b[a + 2]
        }
        return !!b
    };
    h.q = function(a, b) {
        var c = this.A[a];
        if (c) {
            this.ga++;
            for (var d = La(arguments, 1), e = 0, f = c.length; e < f; e++) {
                var g = c[e];
                this.b[g + 1].apply(this.b[g + 2], d)
            }
            this.ga--;
            if (this.d && 0 == this.ga)
                for (; c = this.d.pop();) this.Q(c);
            return 0 != e
        }
        return !1
    };
    h.clear = function(a) {
        if (a) {
            var b = this.A[a];
            b && (D(b, this.Q, this), delete this.A[a])
        } else this.b.length = 0, this.A = {}
    };
    h.K = function() {
        I.t.K.call(this);
        delete this.b;
        delete this.A;
        delete this.d
    };
    var eb = window.yt && window.yt.config_ || {};
    z("yt.config_", eb);
    var fb = window.yt && window.yt.tokens_ || {};
    z("yt.tokens_", fb);
    var gb = window.yt && window.yt.msgs_ || {};
    z("yt.msgs_", gb);

    function hb(a) {
        ib(eb, arguments)
    }

    function J(a, b) {
        return a in eb ? eb[a] : b
    }

    function jb(a) {
        ib(fb, arguments)
    }

    function kb() {
        return "subscription_ajax" in fb ? fb.subscription_ajax : void 0
    }

    function K(a, b) {
        if (ea(a) && q("ytsched.enableSetTimeout")) {
            var c = q("yt.scheduler.instance.addJob");
            if (c) return c(a, 0, b);
            z("ytsched.enableSetTimeout", !1)
        }
        ea(a) && (a = lb(a));
        return window.setTimeout(a, b)
    }

    function mb(a) {
        q("ytsched.enableSetTimeout") ? q("yt.scheduler.instance.cancelJob")(a) : window.clearTimeout(a)
    }

    function lb(a) {
        return a && window.yterr ? function() {
            try {
                return a.apply(this, arguments)
            } catch (b) {
                throw nb(b), b;
            }
        } : a
    }

    function nb(a, b) {
        if (window && window.yterr) {
            var c = q("yt.www.errors.log");
            c ? c(a, b) : (c = J("ERRORS") || [], c.push(a), hb("ERRORS", c))
        }
    }

    function ob(a, b) {
        var c = {},
            d = a in gb ? gb[a] : b;
        if (d)
            for (var e in c) d = d.replace(RegExp("\\$" + e, "gi"), function() {
                return c[e]
            });
        return d
    }

    function ib(a, b) {
        if (1 < b.length) {
            var c = b[0];
            a[c] = b[1]
        } else {
            var d = b[0];
            for (c in d) a[c] = d[c]
        }
    }
    var pb = "Microsoft Internet Explorer" == navigator.appName;

    function qb() {
        return q("yt.scheduler.instance") && !q("ytsched.enableSetTimeout")
    }

    function rb(a) {
        var b = void 0;
        void 0 === b && (b = NaN);
        var c = q("yt.scheduler.instance.addJob");
        c ? (isNaN(b) && (b = 0), c(a, 0, b)) : isNaN(b) ? a() : K(a, b || 0)
    }
    q("yt.scheduler.instance.cancelJob");
    var sb = q("yt.pubsub.instance_") || new I;
    I.prototype.subscribe = I.prototype.P;
    I.prototype.unsubscribeByKey = I.prototype.Q;
    I.prototype.publish = I.prototype.q;
    I.prototype.clear = I.prototype.clear;
    z("yt.pubsub.instance_", sb);
    var tb = q("yt.pubsub.subscribedKeys_") || {};
    z("yt.pubsub.subscribedKeys_", tb);
    var ub = q("yt.pubsub.topicToKeys_") || {};
    z("yt.pubsub.topicToKeys_", ub);
    var vb = q("yt.pubsub.isSynchronous_") || {};
    z("yt.pubsub.isSynchronous_", vb);
    var wb = q("yt.pubsub.skipSubId_") || null;
    z("yt.pubsub.skipSubId_", wb);

    function L(a, b, c) {
        var d = xb();
        if (d) {
            var e = d.subscribe(a, function() {
                if (!wb || wb != e) {
                    var d = arguments,
                        g = function() {
                            tb[e] && b.apply(c || window, d)
                        };
                    try {
                        vb[a] ? g() : qb() ? rb(g) : K(g, 0)
                    } catch (k) {
                        nb(k)
                    }
                }
            }, c);
            tb[e] = !0;
            ub[a] || (ub[a] = []);
            ub[a].push(e);
            return e
        }
        return 0
    }

    function yb(a) {
        var b = xb();
        b && ("number" == typeof a ? a = [a] : "string" == typeof a && (a = [parseInt(a, 10)]), D(a, function(a) {
            b.unsubscribeByKey(a);
            delete tb[a]
        }))
    }

    function M(a, b) {
        var c = xb();
        return c ? c.publish.apply(c, arguments) : !1
    }

    function zb(a) {
        ub[a] && (a = ub[a], D(a, function(a) {
            tb[a] && delete tb[a]
        }), a.length = 0)
    }

    function Ab(a) {
        var b = xb();
        if (b)
            if (b.clear(a), a) zb(a);
            else
                for (var c in ub) zb(c)
    }

    function xb() {
        return q("yt.pubsub.instance_")
    };

    function Bb(a, b) {
        Cb(a, b)
    }

    function Cb(a, b) {
        var c = Db(a),
            d = document.getElementById(c),
            e = d && H(d, "loaded"),
            f = d && !e;
        if (e) b && b();
        else {
            if (b) {
                var e = L(c, b),
                    g = "" + ga(b);
                Eb[g] = e
            }
            f || (d = Fb(a, c, function() {
                if (!H(d, "loaded")) {
                    Za(d, "loaded", "true");
                    M(c);
                    var a = x(Ab, c);
                    qb() ? rb(a) : K(a, 0)
                }
            }))
        }
    }

    function Fb(a, b, c) {
        var d = document.createElement("script");
        d.id = b;
        d.onload = function() {
            c && setTimeout(c, 0)
        };
        d.onreadystatechange = function() {
            switch (d.readyState) {
                case "loaded":
                case "complete":
                    d.onload()
            }
        };
        d.src = a;
        a = document.getElementsByTagName("head")[0] || document.body;
        a.insertBefore(d, a.firstChild);
        return d
    }

    function Db(a) {
        var b = document.createElement("a");
        b.href = a;
        a = b.href.replace(/^[a-zA-Z]+:\/\//, "//");
        return "js-" + xa(a)
    }
    var Eb = {};
    var Gb = null;

    function Hb() {
        var a = J("BG_I", null),
            b = J("BG_IU", null),
            c = J("BG_P");
        b ? Bb(b, function() {
            Gb = new botguard.bg(c)
        }) : a && (eval(a), Gb = new botguard.bg(c))
    };

    function Ib(a) {
        if (a.classList) return a.classList;
        a = a.className;
        return v(a) && a.match(/\S+/g) || []
    }

    function Jb(a, b) {
        return a.classList ? a.classList.contains(b) : F(Ib(a), b)
    }

    function Kb(a, b) {
        a.classList ? a.classList.add(b) : Jb(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
    }

    function Lb(a) {
        a.classList ? a.classList.remove("hid") : Jb(a, "hid") && (a.className = za(Ib(a), function(a) {
            return "hid" != a
        }).join(" "))
    };

    function O(a, b) {
        this.x = s(a) ? a : 0;
        this.y = s(b) ? b : 0
    }
    O.prototype.clone = function() {
        return new O(this.x, this.y)
    };
    O.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    O.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };

    function Mb(a, b) {
        this.width = a;
        this.height = b
    }
    Mb.prototype.clone = function() {
        return new Mb(this.width, this.height)
    };
    Mb.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Mb.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Nb, Ob, Pb, Qb, Rb, Sb;

    function Tb() {
        return p.navigator ? p.navigator.userAgent : null
    }

    function Ub() {
        return p.navigator
    }
    Qb = Pb = Ob = Nb = !1;
    var Vb;
    if (Vb = Tb()) {
        var Wb = Ub();
        Nb = 0 == Vb.lastIndexOf("Opera", 0);
        Ob = !Nb && (-1 != Vb.indexOf("MSIE") || -1 != Vb.indexOf("Trident"));
        Pb = !Nb && -1 != Vb.indexOf("WebKit");
        Qb = !Nb && !Pb && !Ob && "Gecko" == Wb.product
    }
    var Xb = Nb,
        P = Ob,
        Q = Qb,
        R = Pb,
        Yb = Ub(),
        Zb = Yb && Yb.platform || "";
    Rb = -1 != Zb.indexOf("Mac");
    Sb = -1 != Zb.indexOf("Win");
    var $b = !!Ub() && -1 != (Ub().appVersion || "").indexOf("X11");

    function ac() {
        var a = p.document;
        return a ? a.documentMode : void 0
    }
    var bc;
    t: {
        var cc = "",
            dc;
        if (Xb && p.opera) var ec = p.opera.version,
            cc = "function" == typeof ec ? ec() : ec;
        else if (Q ? dc = /rv\:([^\);]+)(\)|;)/ : P ? dc = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : R && (dc = /WebKit\/(\S+)/), dc) var fc = dc.exec(Tb()),
            cc = fc ? fc[1] : "";
        if (P) {
            var gc = ac();
            if (gc > parseFloat(cc)) {
                bc = String(gc);
                break t
            }
        }
        bc = cc
    }
    var hc = bc,
        ic = {};

    function S(a) {
        return ic[a] || (ic[a] = 0 <= va(hc, a))
    }
    var jc = p.document,
        kc = jc && P ? ac() || ("CSS1Compat" == jc.compatMode ? parseInt(hc, 10) : 5) : void 0;
    var lc = !Q && !P || P && P && 9 <= kc || Q && S("1.9.1");
    P && S("9");

    function mc(a) {
        a = a.className;
        return v(a) && a.match(/\S+/g) || []
    }

    function nc(a, b) {
        for (var c = mc(a), d = La(arguments, 1), e = c, f = 0; f < d.length; f++) F(e, d[f]) || e.push(d[f]);
        c = c.join(" ");
        a.className = c
    }

    function oc(a, b) {
        var c = mc(a),
            d = La(arguments, 1),
            c = pc(c, d).join(" ");
        a.className = c
    }

    function pc(a, b) {
        return za(a, function(a) {
            return !F(b, a)
        })
    }

    function qc(a, b) {
        return F(mc(a), b)
    }

    function rc(a, b, c) {
        c ? nc(a, b) : oc(a, b)
    };

    function sc(a) {
        return a ? new tc(uc(a)) : ma || (ma = new tc)
    }

    function vc(a) {
        return T(a)
    }

    function T(a) {
        var b = document;
        return v(a) ? b.getElementById(a) : a
    }

    function wc(a) {
        var b = document;
        return b.querySelectorAll && b.querySelector ? b.querySelectorAll("." + a) : xc(a)
    }

    function xc(a) {
        var b, c, d, e;
        b = document;
        if (b.querySelectorAll && b.querySelector && a) return b.querySelectorAll("" + (a ? "." + a : ""));
        if (a && b.getElementsByClassName) {
            var f = b.getElementsByClassName(a);
            return f
        }
        f = b.getElementsByTagName("*");
        if (a) {
            e = {};
            for (c = d = 0; b = f[c]; c++) {
                var g = b.className;
                "function" == typeof g.split && F(g.split(/\s+/), a) && (e[d++] = b)
            }
            e.length = d;
            return e
        }
        return f
    }

    function yc(a) {
        return "CSS1Compat" == a.compatMode
    }

    function zc(a) {
        if (!a) return null;
        if (a.firstChild) return a.firstChild;
        for (; a && !a.nextSibling;) a = a.parentNode;
        return a ? a.nextSibling : null
    }

    function Ac(a) {
        if (!a) return null;
        if (!a.previousSibling) return a.parentNode;
        for (a = a.previousSibling; a && a.lastChild;) a = a.lastChild;
        return a
    }

    function uc(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }

    function Bc(a) {
        var b = Cc.Ob;
        return b ? Dc(a, function(a) {
            return !b || qc(a, b)
        }, !0) : null
    }

    function Dc(a, b, c, d) {
        c || (a = a.parentNode);
        c = null == d;
        for (var e = 0; a && (c || e <= d);) {
            if (b(a)) return a;
            a = a.parentNode;
            e++
        }
        return null
    }

    function tc(a) {
        this.b = a || p.document || document
    }
    tc.prototype.createElement = function(a) {
        return this.b.createElement(a)
    };

    function Ec(a) {
        var b = a.b;
        a = !R && yc(b) ? b.documentElement : b.body || b.documentElement;
        b = b.parentWindow || b.defaultView;
        return P && S("10") && b.pageYOffset != a.scrollTop ? new O(a.scrollLeft, a.scrollTop) : new O(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    }
    tc.prototype.appendChild = function(a, b) {
        a.appendChild(b)
    };
    tc.prototype.getChildren = function(a) {
        return lc && void 0 != a.children ? a.children : za(a.childNodes, function(a) {
            return 1 == a.nodeType
        })
    };
    tc.prototype.contains = function(a, b) {
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    var Fc = q("yt.dom.getNextId_");
    if (!Fc) {
        Fc = function() {
            return ++Gc
        };
        z("yt.dom.getNextId_", Fc);
        var Gc = 0
    }

    function Hc(a, b) {
        if (a in b) return b[a];
        var c = a.charAt(0).toUpperCase() + a.substr(1);
        if ("moz" + c in b) return b["moz" + c];
        if ("ms" + c in b) return b["ms" + c];
        if ("o" + c in b) return b["o" + c];
        if ("webkit" + c in b) return b["webkit" + c]
    }

    function Ic() {
        var a = document,
            b;
        Aa(["fullscreenElement", "fullScreenElement"], function(c) {
            b = Hc(c, a);
            return !!b
        });
        return b
    };

    function Jc(a) {
        if (a = a || window.event) {
            for (var b in a) b in Kc || (this[b] = a[b]);
            this.oa = a;
            (b = a.target || a.srcElement) && 3 == b.nodeType && (b = b.parentNode);
            this.target = b;
            if (b = a.relatedTarget) try {
                b = b.nodeName && b
            } catch (c) {
                b = null
            } else "mouseover" == this.type ? b = a.fromElement : "mouseout" == this.type && (b = a.toElement);
            this.relatedTarget = b;
            this.clientX = void 0 != a.clientX ? a.clientX : a.pageX;
            this.clientY = void 0 != a.clientY ? a.clientY : a.pageY;
            this.keyCode = a.keyCode ? a.keyCode : a.which;
            this.charCode = a.charCode || ("keypress" == this.type ?
                this.keyCode : 0);
            this.altKey = a.altKey;
            this.ctrlKey = a.ctrlKey;
            this.shiftKey = a.shiftKey;
            "MozMousePixelScroll" == this.type ? (this.wheelDeltaX = a.axis == a.HORIZONTAL_AXIS ? a.detail : 0, this.wheelDeltaY = a.axis == a.HORIZONTAL_AXIS ? 0 : a.detail) : window.opera ? (this.wheelDeltaX = 0, this.wheelDeltaY = a.detail) : 0 == a.wheelDelta % 120 ? "WebkitTransform" in document.documentElement.style ? window.chrome && 0 == navigator.platform.indexOf("Mac") ? (this.wheelDeltaX = a.wheelDeltaX / -30, this.wheelDeltaY = a.wheelDeltaY / -30) : (this.wheelDeltaX =
                a.wheelDeltaX / -1.2, this.wheelDeltaY = a.wheelDeltaY / -1.2) : (this.wheelDeltaX = 0, this.wheelDeltaY = a.wheelDelta / -1.6) : (this.wheelDeltaX = a.wheelDeltaX / -3, this.wheelDeltaY = a.wheelDeltaY / -3)
        }
    }
    h = Jc.prototype;
    h.oa = null;
    h.type = "";
    h.target = null;
    h.relatedTarget = null;
    h.currentTarget = null;
    h.data = null;
    h.source = null;
    h.keyCode = 0;
    h.charCode = 0;
    h.altKey = !1;
    h.ctrlKey = !1;
    h.shiftKey = !1;
    h.clientX = 0;
    h.clientY = 0;
    h.wheelDeltaX = 0;
    h.wheelDeltaY = 0;
    h.preventDefault = function() {
        this.oa.returnValue = !1;
        this.oa.preventDefault && this.oa.preventDefault()
    };
    var Kc = {
        stopImmediatePropagation: 1,
        stopPropagation: 1,
        preventMouseEvent: 1,
        preventManipulation: 1,
        preventDefault: 1,
        layerX: 1,
        layerY: 1,
        scale: 1,
        rotation: 1
    };
    var Ua = q("yt.events.listeners_") || {};
    z("yt.events.listeners_", Ua);
    var Lc = q("yt.events.counter_") || {
        count: 0
    };
    z("yt.events.counter_", Lc);

    function Mc(a, b, c, d) {
        return Ta(function(e) {
            return e[0] == a && e[1] == b && e[2] == c && e[4] == !!d
        })
    }

    function U(a, b, c, d) {
        if (a && (a.addEventListener || a.attachEvent)) {
            d = !!d;
            var e = Mc(a, b, c, d);
            if (!e) {
                var e = ++Lc.count + "",
                    f = !("mouseenter" != b && "mouseleave" != b || !a.addEventListener || "onmouseenter" in document),
                    g;
                g = f ? function(d) {
                    d = new Jc(d);
                    if (!Dc(d.relatedTarget, function(b) {
                            return b == a
                        }, !0)) return d.currentTarget = a, d.type = b, c.call(a, d)
                } : function(b) {
                    b = new Jc(b);
                    b.currentTarget = a;
                    return c.call(a, b)
                };
                g = lb(g);
                Ua[e] = [a, b, c, g, d];
                a.addEventListener ? "mouseenter" == b && f ? a.addEventListener("mouseover", g, d) : "mouseleave" ==
                    b && f ? a.addEventListener("mouseout", g, d) : "mousewheel" == b && "MozBoxSizing" in document.documentElement.style ? a.addEventListener("MozMousePixelScroll", g, d) : a.addEventListener(b, g, d) : a.attachEvent("on" + b, g)
            }
        }
    }

    function Nc(a) {
        a && ("string" == typeof a && (a = [a]), D(a, function(a) {
            if (a in Ua) {
                var c = Ua[a],
                    d = c[0],
                    e = c[1],
                    f = c[3],
                    c = c[4];
                d.removeEventListener ? d.removeEventListener(e, f, c) : d.detachEvent && d.detachEvent("on" + e, f);
                delete Ua[a]
            }
        }))
    };

    function Oc(a, b, c, d, e) {
        var f = "";
        a && (f += a + ":");
        b && (f = f + "//" + b);
        c && (f += c);
        d && (f += "?" + d);
        e && (f += "#" + e);
        return f
    }
    var Pc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");

    function Qc(a) {
        if (Rc) {
            Rc = !1;
            var b = p.location;
            if (b) {
                var c = b.href;
                if (c && (c = Sc(c)) && c != b.hostname) throw Rc = !0, Error();
            }
        }
        return a.match(Pc)
    }
    var Rc = R;

    function Sc(a) {
        return (a = Qc(a)[3] || null) && decodeURIComponent(a)
    }

    function Tc(a) {
        if (a[1]) {
            var b = a[0],
                c = b.indexOf("#");
            0 <= c && (a.push(b.substr(c)), a[0] = b = b.substr(0, c));
            c = b.indexOf("?");
            0 > c ? a[1] = "?" : c == b.length - 1 && (a[1] = void 0)
        }
        return a.join("")
    }

    function Uc(a, b, c) {
        if (u(b))
            for (var d = 0; d < b.length; d++) Uc(a, String(b[d]), c);
        else null != b && c.push("&", a, "" === b ? "" : "=", encodeURIComponent(String(b)))
    }

    function Vc(a, b, c) {
        Math.max(b.length - (c || 0), 0);
        for (c = c || 0; c < b.length; c += 2) Uc(b[c], b[c + 1], a);
        return a
    }

    function Wc(a, b) {
        for (var c in b) Uc(c, b[c], a);
        return a
    }

    function Xc(a, b) {
        return Tc(2 == arguments.length ? Vc([a], arguments[1], 0) : Vc([a], arguments, 1))
    };

    function Yc(a, b) {
        var c = Xc("/signin?context=popup", "next", document.location.protocol + "//" + document.domain + "/post_login");
        b && (c = Xc(c, "feature", b));
        if (c = window.open(c, "loginPopup", "width=375,height=440,resizable=yes,scrollbars=yes", !0)) {
            var d = L("LOGGED_IN", function(b) {
                yb(J("LOGGED_IN_PUBSUB_KEY"));
                hb("LOGGED_IN", !0);
                a(b)
            });
            hb("LOGGED_IN_PUBSUB_KEY", d);
            c.moveTo((screen.width - 375) / 2, (screen.height - 440) / 2)
        }
    }
    z("yt.pubsub.publish", M);
    var Zc = "StopIteration" in p ? p.StopIteration : Error("StopIteration");

    function $c() {}
    $c.prototype.next = function() {
        throw Zc;
    };
    $c.prototype.G = function() {
        return this
    };

    function ad(a) {
        if (a instanceof $c) return a;
        if ("function" == typeof a.G) return a.G(!1);
        if (da(a)) {
            var b = 0,
                c = new $c;
            c.next = function() {
                for (;;) {
                    if (b >= a.length) throw Zc;
                    if (b in a) return a[b++];
                    b++
                }
            };
            return c
        }
        throw Error("Not implemented");
    }

    function bd(a, b, c) {
        if (da(a)) try {
            D(a, b, c)
        } catch (d) {
            if (d !== Zc) throw d;
        } else {
            a = ad(a);
            try {
                for (;;) b.call(c, a.next(), void 0, a)
            } catch (e) {
                if (e !== Zc) throw e;
            }
        }
    }

    function cd(a) {
        if (da(a)) return Ia(a);
        a = ad(a);
        var b = [];
        bd(a, function(a) {
            b.push(a)
        });
        return b
    };

    function dd(a, b) {
        this.d = {};
        this.b = [];
        this.i = this.g = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a) {
            a instanceof dd ? (c = a.Aa(), d = a.Ba()) : (c = Sa(a), d = Ra(a));
            for (var e = 0; e < c.length; e++) this.set(c[e], d[e])
        }
    }
    h = dd.prototype;
    h.Ba = function() {
        ed(this);
        for (var a = [], b = 0; b < this.b.length; b++) a.push(this.d[this.b[b]]);
        return a
    };
    h.Aa = function() {
        ed(this);
        return this.b.concat()
    };
    h.clear = function() {
        this.d = {};
        this.i = this.g = this.b.length = 0
    };
    h.remove = function(a) {
        return Object.prototype.hasOwnProperty.call(this.d, a) ? (delete this.d[a], this.g--, this.i++, this.b.length > 2 * this.g && ed(this), !0) : !1
    };

    function ed(a) {
        if (a.g != a.b.length) {
            for (var b = 0, c = 0; b < a.b.length;) {
                var d = a.b[b];
                Object.prototype.hasOwnProperty.call(a.d, d) && (a.b[c++] = d);
                b++
            }
            a.b.length = c
        }
        if (a.g != a.b.length) {
            for (var e = {}, c = b = 0; b < a.b.length;) d = a.b[b], Object.prototype.hasOwnProperty.call(e, d) || (a.b[c++] = d, e[d] = 1), b++;
            a.b.length = c
        }
    }
    h.get = function(a, b) {
        return Object.prototype.hasOwnProperty.call(this.d, a) ? this.d[a] : b
    };
    h.set = function(a, b) {
        Object.prototype.hasOwnProperty.call(this.d, a) || (this.g++, this.b.push(a), this.i++);
        this.d[a] = b
    };
    h.clone = function() {
        return new dd(this)
    };
    h.G = function(a) {
        ed(this);
        var b = 0,
            c = this.b,
            d = this.d,
            e = this.i,
            f = this,
            g = new $c;
        g.next = function() {
            for (;;) {
                if (e != f.i) throw Error("The map has changed since the iterator was created");
                if (b >= c.length) throw Zc;
                var g = c[b++];
                return a ? g : d[g]
            }
        };
        return g
    };

    function fd(a) {
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
            return eval("(" + a + ")")
        } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    }

    function gd(a) {
        return eval("(" + a + ")")
    }

    function hd(a) {
        return id(new jd(void 0), a)
    }

    function jd(a) {
        this.b = a
    }

    function id(a, b) {
        var c = [];
        kd(a, b, c);
        return c.join("")
    }

    function kd(a, b, c) {
        switch (typeof b) {
            case "string":
                ld(b, c);
                break;
            case "number":
                c.push(isFinite(b) && !isNaN(b) ? b : "null");
                break;
            case "boolean":
                c.push(b);
                break;
            case "undefined":
                c.push("null");
                break;
            case "object":
                if (null == b) {
                    c.push("null");
                    break
                }
                if (u(b)) {
                    var d = b.length;
                    c.push("[");
                    for (var e = "", f = 0; f < d; f++) c.push(e), e = b[f], kd(a, a.b ? a.b.call(b, String(f), e) : e, c), e = ",";
                    c.push("]");
                    break
                }
                c.push("{");
                d = "";
                for (f in b) Object.prototype.hasOwnProperty.call(b, f) && (e = b[f], "function" != typeof e && (c.push(d), ld(f, c), c.push(":"),
                    kd(a, a.b ? a.b.call(b, f, e) : e, c), d = ","));
                c.push("}");
                break;
            case "function":
                break;
            default:
                throw Error("Unknown type: " + typeof b);
        }
    }
    var md = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        nd = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;

    function ld(a, b) {
        b.push('"', a.replace(nd, function(a) {
            if (a in md) return md[a];
            var b = a.charCodeAt(0),
                e = "\\u";
            16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
            return md[a] = e + b.toString(16)
        }), '"')
    };

    function od(a) {
        "?" == a.charAt(0) && (a = a.substr(1));
        a = a.split("&");
        for (var b = {}, c = 0, d = a.length; c < d; c++) {
            var e = a[c].split("=");
            if (1 == e.length && e[0] || 2 == e.length) {
                var f = decodeURIComponent((e[0] || "").replace(/\+/g, " ")),
                    e = decodeURIComponent((e[1] || "").replace(/\+/g, " "));
                f in b ? u(b[f]) ? Ja(b[f], e) : b[f] = [b[f], e] : b[f] = e
            }
        }
        return b
    }

    function pd(a) {
        a = Wc([], a);
        a[0] = "";
        return a.join("")
    }
    var qd = Sc;

    function rd(a, b) {
        var c = a.split("#", 2);
        a = c[0];
        var c = 1 < c.length ? "#" + c[1] : "",
            d = a.split("?", 2);
        a = d[0];
        var d = od(d[1] || ""),
            e;
        for (e in b) d[e] = b[e];
        return Tc(Wc([a], d)) + c
    }

    function sd(a) {
        a = qd(a);
        a = null === a ? null : a.split(".").reverse();
        return (null === a ? !1 : "com" == a[0] && a[1].match(/^youtube(?:-nocookie)?$/) ? !0 : !1) || (null === a ? !1 : "google" == a[1] ? !0 : "google" == a[2] ? "au" == a[0] && "com" == a[1] ? !0 : "uk" == a[0] && "co" == a[1] ? !0 : !1 : !1)
    };
    var td = null;
    "undefined" != typeof XMLHttpRequest ? td = function() {
        return new XMLHttpRequest
    } : "undefined" != typeof ActiveXObject && (td = function() {
        return new ActiveXObject("Microsoft.XMLHTTP")
    });

    function ud(a, b, c, d, e, f, g) {
        var k = td && td();
        if (!("open" in k)) return null;
        k.onreadystatechange = function() {
            4 == (k && "readyState" in k ? k.readyState : 0) && b && lb(b)(k)
        };
        c = (c || "GET").toUpperCase();
        d = d || "";
        k.open(c, a, !0);
        f && (k.responseType = f);
        g && (k.withCredentials = !0);
        f = "POST" == c;
        if (e = vd(a, e))
            for (var l in e) k.setRequestHeader(l, e[l]), "content-type" == l.toLowerCase() && (f = !1);
        f && k.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        k.send(d);
        return k
    }

    function vd(a, b) {
        b = b || {};
        var c;
        if (c = J("PAGE_CL"))
            if (c = J("PAGE_BUILD_TIMESTAMP")) {
                var d;
                d || (d = window.location.href);
                c = Qc(a)[1] || null;
                var e = qd(a);
                c && e ? (c = d, d = Qc(a), c = Qc(c), d = d[3] == c[3] && d[1] == c[1] && d[4] == c[4]) : d = e ? qd(d) == e && (Number(Qc(d)[4] || null) || null) == (Number(Qc(a)[4] || null) || null) : !0;
                c = d || wd(a)
            } c && (b["X-YouTube-Page-CL"] = J("PAGE_CL"), b["X-YouTube-Page-Timestamp"] = J("PAGE_BUILD_TIMESTAMP"));
        return b
    }

    function wd(a) {
        var b = ["X-YouTube-Page-CL", "X-YouTube-Page-Timestamp"],
            c = J("CORS_HEADER_WHITELIST") || {};
        a = qd(a);
        if (!a) return !0;
        var d = c[a];
        return d ? Ba(b, function(a) {
            return F(d, a)
        }) : !1
    }

    function xd(a, b) {
        var c = b.format || "JSON";
        b.Tb && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
        var d = b.Ka;
        d && (a = rd(a, d));
        var e = b.Ub || "";
        (d = b.J) && v(e) && (e = od(e), Ya(e, d), e = pd(e));
        var f = !1,
            g, k = ud(a, function(a) {
                if (!f) {
                    f = !0;
                    g && mb(g);
                    var d;
                    t: switch (a && "status" in a ? a.status : -1) {
                        case 0:
                        case 200:
                        case 201:
                        case 202:
                        case 203:
                        case 204:
                        case 205:
                        case 206:
                        case 304:
                            d = !0;
                            break t;
                        default:
                            d = !1
                    }
                    var e = null;
                    if (d || 400 <= a.status && 500 > a.status) e = yd(c, a);
                    if (d) t: {
                        switch (c) {
                            case "XML":
                                d = 0 == parseInt(e && e.return_code, 10);
                                break t;
                            case "RAW":
                                d = !0;
                                break t
                        }
                        d = !!e
                    }
                    var e = e || {},
                        k = b.la || p;
                    d ? b.onSuccess && b.onSuccess.call(k, a, e) : b.onError && b.onError.call(k, a, e);
                    b.ma && b.ma.call(k, a, e)
                }
            }, b.method, e, b.headers, b.responseType, b.withCredentials);
        b.Cb && 0 < b.timeout && (g = K(function() {
            f || (f = !0, k.abort(), mb(g), b.Cb.call(b.la || p, k))
        }, b.timeout))
    }

    function yd(a, b) {
        var c = null;
        switch (a) {
            case "JSON":
                var d = b.responseText,
                    e = b.getResponseHeader("Content-Type") || "";
                d && 0 <= e.indexOf("json") && (c = gd(d));
                break;
            case "XML":
                if (d = (d = b.responseXML) ? zd(d) : null) c = {}, D(d.getElementsByTagName("*"), function(a) {
                    c[a.tagName] = Ad(a)
                })
        }
        return c
    }

    function zd(a) {
        return a ? (a = ("responseXML" in a ? a.responseXML : a).getElementsByTagName("root")) && 0 < a.length ? a[0] : null : null
    }

    function Ad(a) {
        var b = "";
        D(a.childNodes, function(a) {
            b += a.nodeValue
        });
        return b
    };

    function Bd() {
        var a = J("PLAYER_CONFIG");
        return a && a.args && void 0 !== a.args.authuser || null != J("SESSION_INDEX") || J("LOGGED_IN") ? !0 : !1
    };

    function Cd(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    Cd.prototype.clone = function() {
        return new Cd(this.top, this.right, this.bottom, this.left)
    };
    Cd.prototype.contains = function(a) {
        return this && a ? a instanceof Cd ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    Cd.prototype.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    Cd.prototype.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };

    function Dd(a, b) {
        var c = uc(a);
        return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
    }

    function Ed(a, b) {
        return Dd(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function Fd(a) {
        var b;
        try {
            b = a.getBoundingClientRect()
        } catch (c) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
        P && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    }

    function Gd(a) {
        if (P && !(P && 8 <= kc)) return a.offsetParent;
        var b = uc(a),
            c = Ed(a, "position"),
            d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (c = Ed(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
        return null
    }

    function Hd(a) {
        var b, c = uc(a),
            d = Ed(a, "position"),
            e = Q && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY),
            f = new O(0, 0),
            g;
        b = c ? uc(c) : document;
        (g = !P) || (g = P && 9 <= kc) || (g = sc(b), g = yc(g.b));
        g = g ? b.documentElement : b.body;
        if (a == g) return f;
        if (a.getBoundingClientRect) b = Fd(a), a = Ec(sc(c)), f.x = b.left + a.x, f.y = b.top + a.y;
        else if (c.getBoxObjectFor && !e) b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(g), f.x = b.screenX - a.screenX, f.y = b.screenY - a.screenY;
        else {
            e = a;
            do {
                f.x +=
                    e.offsetLeft;
                f.y += e.offsetTop;
                e != a && (f.x += e.clientLeft || 0, f.y += e.clientTop || 0);
                if (R && "fixed" == Ed(e, "position")) {
                    f.x += c.body.scrollLeft;
                    f.y += c.body.scrollTop;
                    break
                }
                e = e.offsetParent
            } while (e && e != a);
            if (Xb || R && "absolute" == d) f.y -= c.body.offsetTop;
            for (e = a;
                (e = Gd(e)) && e != c.body && e != g;) f.x -= e.scrollLeft, Xb && "TR" == e.tagName || (f.y -= e.scrollTop)
        }
        return f
    }

    function Id(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    }

    function Jd(a) {
        var b = Kd;
        if ("none" != Ed(a, "display")) return b(a);
        var c = a.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }

    function Kd(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = R && !b && !c;
        return s(b) && !d || !a.getBoundingClientRect ? new Mb(b, c) : (a = Fd(a), new Mb(a.right - a.left, a.bottom - a.top))
    }

    function Ld(a, b) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var c = a.style.left,
            d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = b;
        var e = a.style.pixelLeft;
        a.style.left = c;
        a.runtimeStyle.left = d;
        return e
    }

    function Md(a, b) {
        var c = a.currentStyle ? a.currentStyle[b] : null;
        return c ? Ld(a, c) : 0
    }
    var Nd = {
        thin: 2,
        medium: 4,
        thick: 6
    };

    function Od(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
        var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return c in Nd ? Nd[c] : Ld(a, c)
    }
    var Pd = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;

    function Qd(a, b) {
        if ((a = T(a)) && a.style) {
            a.style.display = b ? "" : "none";
            var c = a;
            b ? Lb(c) : Kb(c, "hid")
        }
    }

    function Rd(a) {
        D(arguments, function(a) {
            Qd(a, !0)
        })
    }

    function Sd(a) {
        D(arguments, function(a) {
            Qd(a, !1)
        })
    };
    var Td = {},
        Ud = "ontouchstart" in document;

    function Vd(a, b, c) {
        var d;
        switch (a) {
            case "mouseover":
            case "mouseout":
                d = 3;
                break;
            case "mouseenter":
            case "mouseleave":
                d = 9
        }
        return Dc(c, function(a) {
            return qc(a, b)
        }, !0, d)
    }

    function V(a) {
        var b = "mouseover" == a.type && "mouseenter" in Td || "mouseout" == a.type && "mouseleave" in Td,
            c = a.type in Td || b;
        if ("HTML" != a.target.tagName && c) {
            if (b) {
                var b = "mouseover" == a.type ? "mouseenter" : "mouseleave",
                    c = Td[b],
                    d;
                for (d in c.A) {
                    var e = Vd(b, d, a.target);
                    e && !Dc(a.relatedTarget, function(a) {
                        return a == e
                    }, !0) && c.q(d, e, b, a)
                }
            }
            if (b = Td[a.type])
                for (d in b.A)(e = Vd(a.type, d, a.target)) && b.q(d, e, a.type, a)
        }
    }
    U(document, "blur", V, !0);
    U(document, "change", V, !0);
    U(document, "click", V);
    U(document, "focus", V, !0);
    U(document, "mouseover", V);
    U(document, "mouseout", V);
    U(document, "mousedown", V);
    U(document, "keydown", V);
    U(document, "keyup", V);
    U(document, "keypress", V);
    U(document, "cut", V);
    U(document, "paste", V);
    Ud && (U(document, "touchstart", V), U(document, "touchend", V), U(document, "touchcancel", V));
    var Wd = window.yt && window.yt.uix && window.yt.uix.widgets_ || {};
    z("yt.uix.widgets_", Wd);

    function Xd() {
        this.b = {}
    }

    function Yd(a, b, c) {
        var d = W(a, void 0),
            e = w(c, a);
        b in Td || (Td[b] = new I);
        Td[b].P(d, e);
        a.b[c] = e
    }

    function Zd(a, b) {
        Za(a, "tooltip-text", b)
    }
    Xd.prototype.removeData = function(a, b) {
        a.dataset ? delete a.dataset[$a(b)] : a.removeAttribute("data-" + b)
    };

    function W(a, b) {
        return "yt-uix" + (a.xa ? "-" + a.xa : "") + (b ? "-" + b : "")
    };

    function $d() {
        this.b = {}
    }
    A($d, Xd);
    ba($d);
    h = $d.prototype;
    h.xa = "tooltip";
    h.na = 0;
    h.register = function() {
        Yd(this, "mouseover", this.Ma);
        Yd(this, "mouseout", this.va);
        Yd(this, "click", this.va);
        Yd(this, "touchstart", this.Jb);
        Yd(this, "touchend", this.Qa);
        Yd(this, "touchcancel", this.Qa)
    };
    h.Ma = function(a) {
        if (!(this.na && 1E3 > y() - this.na)) {
            var b = parseInt(H(a, "tooltip-hide-timer"), 10);
            b && (this.removeData(a, "tooltip-hide-timer"), mb(b));
            var b = w(function() {
                    ae(this, a);
                    this.removeData(a, "tooltip-show-timer")
                }, this),
                c = parseInt(H(a, "tooltip-show-delay"), 10) || 0,
                b = K(b, c);
            Za(a, "tooltip-show-timer", b.toString());
            a.title && (Zd(a, be(a)), a.title = "")
        }
    };
    h.va = function(a) {
        var b = parseInt(H(a, "tooltip-show-timer"), 10);
        b && (mb(b), this.removeData(a, "tooltip-show-timer"));
        b = w(function() {
            if (a) {
                var b = vc(ce(this, a));
                b && (de(b), b && b.parentNode && b.parentNode.removeChild(b), this.removeData(a, "content-id"))
            }
            this.removeData(a, "tooltip-hide-timer")
        }, this);
        b = K(b, 50);
        Za(a, "tooltip-hide-timer", b.toString());
        if (b = H(a, "tooltip-text")) a.title = b
    };
    h.Jb = function(a, b) {
        this.na = 0;
        var c = Vd(b, W(this), null[0].target);
        this.Ma(c)
    };
    h.Qa = function(a, b) {
        this.na = y();
        var c = Vd(b, W(this), null[0].target);
        this.va(c)
    };

    function ee(a, b) {
        Zd(a, b);
        var c = H(a, "content-id");
        if (c = T(c)) c.innerHTML = b
    }

    function be(a) {
        return H(a, "tooltip-text") || a.title
    }

    function ae(a, b) {
        if (b) {
            var c = be(b);
            if (c) {
                var d = vc(ce(a, b));
                if (!d) {
                    d = document.createElement("div");
                    d.id = ce(a, b);
                    d.className = W(a, "tip");
                    var e = document.createElement("div");
                    e.className = W(a, "tip-body");
                    var f = document.createElement("div");
                    f.className = W(a, "tip-arrow");
                    var g = document.createElement("div");
                    g.className = W(a, "tip-content");
                    var k = fe(a, b),
                        l = ce(a, b, "content");
                    g.id = l;
                    Za(b, "content-id", l);
                    e.appendChild(g);
                    k && d.appendChild(k);
                    d.appendChild(e);
                    d.appendChild(f);
                    (Ic() || document.body).appendChild(d);
                    ee(b,
                        c);
                    (c = parseInt(H(b, "tooltip-max-width"), 10)) && e.offsetWidth > c && (e.style.width = c + "px", nc(g, W(a, "normal-wrap")));
                    g = qc(b, W(a, "reverse"));
                    ge(a, b, d, e, k, g) || ge(a, b, d, e, k, !g);
                    var m = W(a, "tip-visible");
                    K(function() {
                        nc(d, m)
                    }, 0)
                }
            }
        }
    }

    function ge(a, b, c, d, e, f) {
        rc(c, W(a, "tip-reverse"), f);
        var g = 0;
        f && (g = 1);
        a = Jd(b);
        f = new O((a.width - 10) / 2, f ? a.height : 0);
        var k = Hd(b);
        var k = new O(k.x + f.x, k.y + f.y),
            k = k.clone(),
            l;
        l = (g & 4 && "rtl" == Ed(c, "direction") ? g ^ 2 : g) & -5;
        f = Jd(c);
        g = f.clone();
        0 != l && (l & 2 && (k.x -= g.width + 0), l & 1 && (k.y -= g.height + 0));
        var m = k;
        l = Q && (Rb || $b) && S("1.9");
        m instanceof O ? (k = m.x, m = m.y) : (k = m, m = void 0);
        c.style.left = Id(k, l);
        c.style.top = Id(m, l);
        if (!(f == g || f && g && f.width == g.width && f.height == g.height))
            if (f = sc(uc(c)), k = yc(f.b), !P || k && S("8")) f = c.style,
                Q ? f.MozBoxSizing = "border-box" : R ? f.WebkitBoxSizing = "border-box" : f.boxSizing = "border-box", f.width = Math.max(g.width, 0) + "px", f.height = Math.max(g.height, 0) + "px";
            else if (f = c.style, k) {
            if (P) {
                k = Md(c, "paddingLeft");
                l = Md(c, "paddingRight");
                var m = Md(c, "paddingTop"),
                    n = Md(c, "paddingBottom"),
                    k = new Cd(m, l, n, k)
            } else k = Dd(c, "paddingLeft"), l = Dd(c, "paddingRight"), m = Dd(c, "paddingTop"), n = Dd(c, "paddingBottom"), k = new Cd(parseFloat(m), parseFloat(l), parseFloat(n), parseFloat(k));
            if (!P || P && 9 <= kc) l = Dd(c, "borderLeftWidth"), m = Dd(c,
                "borderRightWidth"), n = Dd(c, "borderTopWidth"), t = Dd(c, "borderBottomWidth"), l = new Cd(parseFloat(n), parseFloat(m), parseFloat(t), parseFloat(l));
            else {
                l = Od(c, "borderLeft");
                var m = Od(c, "borderRight"),
                    n = Od(c, "borderTop"),
                    t = Od(c, "borderBottom");
                l = new Cd(n, m, t, l)
            }
            f.pixelWidth = g.width - l.left - k.left - k.right - l.right;
            f.pixelHeight = g.height - l.top - k.top - k.bottom - l.bottom
        } else f.pixelWidth = g.width, f.pixelHeight = g.height;
        var g = window.document,
            g = yc(g) ? g.documentElement : g.body,
            g = new Mb(g.clientWidth, g.clientHeight),
            r;
        if (1 == c.nodeType) {
            c.getBoundingClientRect ? (f = Fd(c), f = new O(f.left, f.top)) : (f = Ec(sc(c)), k = Hd(c), f = new O(k.x - f.x, k.y - f.y));
            if (Q && !S(12)) {
                var N;
                P ? N = "-ms-transform" : R ? N = "-webkit-transform" : Xb ? N = "-o-transform" : Q && (N = "-moz-transform");
                N && (r = Ed(c, N));
                r || (r = Ed(c, "transform"));
                c = r ? (c = r.match(Pd)) ? new O(parseFloat(c[1]), parseFloat(c[2])) : new O(0, 0) : new O(0, 0);
                c = new O(f.x + c.x, f.y + c.y)
            } else c = f;
            r = c
        } else N = ea(c.d), r = c, c.targetTouches ? r = c.targetTouches[0] : N && c.b.targetTouches && (r = c.b.targetTouches[0]), r = new O(r.clientX,
            r.clientY);
        c = Jd(d);
        f = Math.floor(c.width / 2);
        e && (e.style.left = "3px", e.style.height = c.height + "px", e.style.width = c.width + "px");
        e = !!(g.height < r.y + a.height);
        a = !!(r.y < a.height);
        N = !!(r.x < f);
        r = !!(g.width < r.x + f);
        g = (c.width + 3) / -2 - -5;
        b = H(b, "force-tooltip-direction");
        if ("left" == b || N) g = -5;
        else if ("right" == b || r) g = 20 - c.width - 3;
        d.style.left = Math.floor(g) + "px";
        return !(e || a)
    }

    function ce(a, b, c) {
        a = W(a);
        var d = b.__yt_uid_key;
        d || (d = Fc(), b.__yt_uid_key = d);
        b = a + d;
        c && (b += "-" + c);
        return b
    }

    function fe(a, b) {
        var c = null;
        Sb && qc(b, W(a, "masked")) && ((c = T("yt-uix-tooltip-shared-mask")) ? (c.parentNode.removeChild(c), Rd(c)) : (c = document.createElement("iframe"), c.src = 'javascript:""', c.id = "yt-uix-tooltip-shared-mask", c.className = W(a, "tip-mask")));
        return c
    }

    function de(a) {
        var b = T("yt-uix-tooltip-shared-mask"),
            c = b && Dc(b, function(b) {
                return b == a
            }, !1, 2);
        b && c && (b.parentNode.removeChild(b), Sd(b), document.body.appendChild(b))
    };

    function he() {
        this.b = {};
        this.d = []
    }
    A(he, Xd);
    ba(he);
    he.prototype.xa = "subscription-button";
    he.prototype.register = function() {
        Yd(this, "click", this.Ga);
        this.d.push(L("subscription-subscribe-loading", this.Ia, this), L("subscription-subscribe-loaded", this.Ha, this), L("subscription-unsubscirbe-loading", this.Ia, this), L("subscription-unsubscribe-loaded", this.Ha, this), L("subscription-subscribe-success", this.Ab, this), L("subscription-unsubscribe-success", this.Bb, this), L("subscription-enable-ypc", this.zb, this), L("subscription-disable-ypc", this.yb, this))
    };
    var Cc = {
            La: "hover-enabled",
            Db: "yt-uix-button-subscribe",
            Eb: "yt-uix-button-subscribed",
            Wb: "ypc-enabled",
            Ob: "yt-uix-button-subscription-container",
            Pb: "yt-subscription-button-disabled-mask-container"
        },
        X = {
            Xb: "channel-external-id",
            Fb: "subscriber-count-show-when-subscribed",
            Gb: "subscriber-count-tooltip",
            Hb: "subscriber-count-title",
            Yb: "href",
            Ua: "is-subscribed",
            Zb: "parent-url",
            $b: "sessionlink",
            Ib: "style-type",
            Va: "subscription-id",
            ac: "target",
            Kb: "ypc-enabled",
            Oa: "ypc-item-type",
            Na: "ypc-item-id",
            Pa: "ypc-offers-url"
        };
    h = he.prototype;
    h.Ga = function(a) {
        var b = H(a, "href"),
            c = Bd();
        if (b) a = H(a, "target") || "_self", window.open(b, a);
        else if (c) {
            var b = H(a, "channel-external-id"),
                c = H(a, "sessionlink"),
                d;
            if (H(a, "ypc-enabled")) {
                d = H(a, X.Oa);
                var e = H(a, X.Na),
                    f = H(a, X.Pa);
                d = {
                    itemType: d,
                    itemId: e,
                    offersUrl: f,
                    subscriptionElement: a
                }
            } else d = null;
            e = H(a, "parent-url");
            H(a, "is-subscribed") ? (f = H(a, "subscription-id"), M("subscription-unsubscribe", b, f, d, a, c, e)) : M("subscription-subscribe", b, d, a, c, e)
        } else ie(this, a)
    };
    h.Ia = function(a) {
        this.T(a, this.Sa, !0)
    };
    h.Ha = function(a) {
        this.T(a, this.Sa, !1)
    };
    h.Ab = function(a, b) {
        this.T(a, this.Ta, !0, b)
    };
    h.Bb = function(a) {
        this.T(a, this.Ta, !1)
    };
    h.zb = function(a) {
        this.T(a, this.Nb)
    };
    h.yb = function(a) {
        this.T(a, this.Mb)
    };
    h.Ta = function(a, b, c) {
        b ? (Za(a, X.Ua, "true"), c && Za(a, X.Va, c)) : (this.removeData(a, X.Ua), this.removeData(a, X.Va));
        je(a)
    };
    h.Sa = function(a, b) {
        var c;
        c = Bc(a);
        rc(c, Cc.Pb, b);
        a.setAttribute("aria-busy", b ? "true" : "false");
        a.disabled = b
    };

    function je(a) {
        var b = H(a, X.Ib),
            c = !!H(a, "is-subscribed"),
            b = "-" + b,
            d = Cc.Eb + b;
        rc(a, Cc.Db + b, !c);
        rc(a, d, c);
        H(a, X.Gb) && !H(a, X.Fb) && (b = W($d.getInstance()), rc(a, b, !c), a.title = c ? "" : H(a, X.Hb));
        c ? K(function() {
            nc(a, Cc.La)
        }, 1E3) : oc(a, Cc.La)
    }
    h.Nb = function(a) {
        var b = !!H(a, X.Oa),
            c = !!H(a, X.Na),
            d = !!H(a, X.Pa);
        !H(a, "ypc-enabled") && b && c && d && (nc(a, "ypc-enabled"), Za(a, X.Kb, "true"))
    };
    h.Mb = function(a) {
        H(a, "ypc-enabled") && (oc(a, "ypc-enabled"), this.removeData(a, "ypc-enabled"))
    };

    function ke(a, b) {
        var c = wc(W(a));
        return za(c, function(a) {
            return b == H(a, "channel-external-id")
        }, a)
    }
    h.Sb = function(a, b, c) {
        var d = La(arguments, 2);
        D(a, function(a) {
            b.apply(this, Ha(a, d))
        }, this)
    };
    h.T = function(a, b, c) {
        var d = ke(this, a),
            d = Ha([d], La(arguments, 1));
        this.Sb.apply(this, d)
    };

    function ie(a, b) {
        var c = w(function(a) {
            a.subscription_ajax && jb("subscription_ajax", a.subscription_ajax);
            this.Ga(b)
        }, a);
        Yc(c, "sub_button")
    };

    function le(a) {
        a = a || {};
        this.url = a.url || "";
        this.urlV8 = a.url_v8 || "";
        this.urlV9As2 = a.url_v9as2 || "";
        this.args = a.args || Wa(me);
        this.assets = a.assets || {};
        this.attrs = a.attrs || Wa(ne);
        this.params = a.params || Wa(oe);
        this.minVersion = a.min_version || "8.0.0";
        this.fallback = a.fallback || null;
        this.fallbackMessage = a.fallbackMessage || null;
        this.html5 = !!a.html5;
        this.disable = a.disable || {};
        this.loaded = !!a.loaded
    }
    var me = {
            enablejsapi: 1
        },
        ne = {},
        oe = {
            allowscriptaccess: "always",
            allowfullscreen: "true",
            bgcolor: "#000000"
        };

    function pe(a) {
        a instanceof le || (a = new le(a));
        return a
    }
    le.prototype.clone = function() {
        var a = new le,
            b;
        for (b in this) {
            var c = this[b];
            "object" == ca(c) ? a[b] = Wa(c) : a[b] = c
        }
        return a
    };

    function qe() {
        this.b = y()
    }
    var re = new qe;
    qe.prototype.set = function(a) {
        this.b = a
    };
    qe.prototype.get = function() {
        return this.b
    };

    function se(a) {
        this.g = a || "";
        this.i = re
    }
    se.prototype.d = !0;
    se.prototype.b = !1;

    function te(a) {
        return 10 > a ? "0" + a : String(a)
    }

    function ue(a, b) {
        var c = (a.i - b) / 1E3,
            d = c.toFixed(3),
            e = 0;
        if (1 > c) e = 2;
        else
            for (; 100 > c;) e++, c *= 10;
        for (; 0 < e--;) d = " " + d;
        return d
    }

    function ve(a) {
        se.call(this, a)
    }
    A(ve, se);

    function we(a, b) {
        var c = [];
        c.push(a.g, " ");
        if (a.d) {
            var d = new Date(b.i);
            c.push("[", te(d.getFullYear() - 2E3) + te(d.getMonth() + 1) + te(d.getDate()) + " " + te(d.getHours()) + ":" + te(d.getMinutes()) + ":" + te(d.getSeconds()) + "." + te(Math.floor(d.getMilliseconds() / 10)), "] ")
        }
        c.push("[", ue(b, a.i.get()), "s] ");
        c.push("[", b.g, "] ");
        c.push(b.getMessage());
        a.b && b.d && c.push("\n", b.b);
        c.push("\n");
        return c.join("")
    };

    function xe(a, b, c, d, e) {
        "number" == typeof e || ye++;
        this.i = d || y();
        this.j = a;
        this.k = b;
        this.g = c;
        delete this.d;
        delete this.b
    }
    xe.prototype.d = null;
    xe.prototype.b = null;
    var ye = 0;
    xe.prototype.getMessage = function() {
        return this.k
    };

    function ze(a) {
        a && (this.id = a.id || "", this.name = a.name || "", this.activityId = a.activityId || "", this.status = a.status || "UNKNOWN")
    }
    h = ze.prototype;
    h.id = "";
    h.name = "";
    h.activityId = "";
    h.status = "UNKNOWN";
    h.Wa = function() {
        return {
            key: this.id,
            name: this.name
        }
    };

    function Ae(a) {
        return {
            id: a.id,
            name: a.name,
            activityId: a.activityId,
            status: a.status
        }
    }
    h.toString = function() {
        return "{id:" + this.id + ",name:" + this.name + ",activityId:" + this.activityId + ",status:" + this.status + "}"
    };

    function Be(a) {
        a = a || [];
        return "[" + E(a, function(a) {
            return a ? a.toString() : "null"
        }).join(",") + "]"
    };

    function Ce(a) {
        a && (this.name = a.name, this.C = a.screenId, this.B = a.loungeToken, this.F = a.dialId || "")
    }
    h = Ce.prototype;
    h.name = "";
    h.C = "";
    h.B = "";
    h.F = "";
    h.Wa = function() {
        return {
            key: this.C,
            name: this.name
        }
    };
    h.toString = function() {
        var a = this.B ? this.B.slice(-6) : "null";
        return "{name:" + this.name + ",screenId:" + this.C + ",loungeToken:..." + a + ",dialId:" + this.F + "}"
    };

    function De(a) {
        a = a || [];
        return "[" + E(a, function(a) {
            return a ? a.toString() : "null"
        }).join(",") + "]"
    };

    function Ee() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var b = 16 * Math.random() | 0;
            return ("x" == a ? b : b & 3 | 8).toString(16)
        })
    }

    function Fe(a, b) {
        return Ca(a, function(a) {
            return a.key == b
        })
    }

    function Ge(a) {
        return E(a, function(a) {
            return a.Wa()
        })
    }

    function He(a) {
        return E(a, function(a) {
            return Ae(a)
        })
    }

    function Ie(a) {
        return E(a, function(a) {
            return new ze(a)
        })
    }

    function Je(a, b) {
        return a || b ? a && b ? a.id == b.id && a.name == b.name : !1 : !0
    }

    function Ke(a, b) {
        return Ca(a, function(a) {
            return a.id == b
        })
    }

    function Le(a) {
        return E(a, function(a) {
            return {
                name: a.name,
                screenId: a.C,
                loungeToken: a.B,
                dialId: a.F
            }
        })
    }

    function Me(a) {
        return E(a, function(a) {
            return new Ce(a)
        })
    }

    function Ne(a, b) {
        return a || b ? a && b ? a.C == b.C && a.B == b.B && a.name == b.name && a.F == b.F : !1 : !0
    }

    function Oe(a, b) {
        return Ca(a, function(a) {
            return a || b ? a && b ? a.C == b.C : !1 : !0
        })
    }

    function Pe(a, b) {
        return Ca(a, function(a) {
            return b == a.C || b == a.F
        })
    };

    function Qe(a) {
        return Re(a || arguments.callee.caller, [])
    }

    function Re(a, b) {
        var c = [];
        if (F(b, a)) c.push("[...circular reference...]");
        else if (a && 50 > b.length) {
            c.push(Se(a) + "(");
            for (var d = a.arguments, e = 0; e < d.length; e++) {
                0 < e && c.push(", ");
                var f;
                f = d[e];
                switch (typeof f) {
                    case "object":
                        f = f ? "object" : "null";
                        break;
                    case "string":
                        break;
                    case "number":
                        f = String(f);
                        break;
                    case "boolean":
                        f = f ? "true" : "false";
                        break;
                    case "function":
                        f = (f = Se(f)) ? f : "[fn]";
                        break;
                    default:
                        f = typeof f
                }
                40 < f.length && (f = f.substr(0, 40) + "...");
                c.push(f)
            }
            b.push(a);
            c.push(")\n");
            try {
                c.push(Re(a.caller, b))
            } catch (g) {
                c.push("[exception trying to get caller]\n")
            }
        } else a ?
            c.push("[...long stack...]") : c.push("[end]");
        return c.join("")
    }

    function Se(a) {
        if (Te[a]) return Te[a];
        a = String(a);
        if (!Te[a]) {
            var b = /function ([^\(]+)/.exec(a);
            Te[a] = b ? b[1] : "[Anonymous]"
        }
        return Te[a]
    }
    var Te = {};

    function Y(a) {
        this.d = a
    }
    Y.prototype.b = null;

    function Ue(a, b) {
        this.name = a;
        this.value = b
    }
    Ue.prototype.toString = function() {
        return this.name
    };
    var Ve = new Ue("SHOUT", 1200),
        We = new Ue("SEVERE", 1E3),
        Xe = new Ue("WARNING", 900),
        Ye = new Ue("INFO", 800);
    h = Y.prototype;
    h.ob = function() {};
    h.qb = function() {
        return !1
    };
    h.getChildren = function() {
        this.b || (this.b = {});
        return this.b
    };
    h.log = function() {};
    h.pb = function(a, b, c) {
        var d = new xe(a, String(b), this.d);
        if (c) {
            d.d = c;
            var e;
            var f = arguments.callee.caller;
            try {
                var g;
                var k = q("window.location.href");
                if (v(c)) g = {
                    message: c,
                    name: "Unknown error",
                    lineNumber: "Not available",
                    fileName: k,
                    stack: "Not available"
                };
                else {
                    var l, m, n = !1;
                    try {
                        l = c.lineNumber || c.line || "Not available"
                    } catch (t) {
                        l = "Not available", n = !0
                    }
                    try {
                        m = c.fileName || c.filename || c.sourceURL || p.$googDebugFname || k
                    } catch (r) {
                        m = "Not available", n = !0
                    }
                    g = !n && c.lineNumber && c.fileName && c.stack && c.message && c.name ? c : {
                        message: c.message ||
                            "Not available",
                        name: c.name || "UnknownError",
                        lineNumber: l,
                        fileName: m,
                        stack: c.stack || "Not available"
                    }
                }
                e = "Message: " + oa(g.message) + '\nUrl: <a href="view-source:' + g.fileName + '" target="_new">' + g.fileName + "</a>\nLine: " + g.lineNumber + "\n\nBrowser stack:\n" + oa(g.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + oa(Qe(f) + "-> ")
            } catch (N) {
                e = "Exception trying to expose exception! You win, we lose. " + N
            }
            d.b = e
        }
        return d
    };
    var Ze = {},
        $e = null;

    function af() {
        $e || ($e = new Y(""), Ze[""] = $e)
    }

    function bf(a) {
        af();
        var b;
        if (!(b = Ze[a])) {
            b = new Y(a);
            var c = a.lastIndexOf("."),
                d = a.substr(c + 1);
            bf(a.substr(0, c)).getChildren()[d] = b;
            Ze[a] = b
        }
        return b
    };

    function cf() {
        w(this.i, this);
        this.b = new ve;
        this.b.d = !1;
        this.d = this.b.b = !1;
        this.g = "";
        this.j = {}
    }

    function df() {
        var a = ef;
        !0 != a.d && (af(), a.d = !0)
    }
    cf.prototype.i = function(a) {
        if (!this.j[a.g]) {
            var b = we(this.b, a),
                c = ff;
            if (c) switch (a.j) {
                case Ve:
                    gf(c, "info", b);
                    break;
                case We:
                    gf(c, "error", b);
                    break;
                case Xe:
                    gf(c, "warn", b);
                    break;
                default:
                    gf(c, "debug", b)
            } else window.opera ? window.opera.postError(b) : this.g += b
        }
    };
    var ef = null,
        ff = window.console;

    function gf(a, b, c) {
        if (a[b]) a[b](c);
        else a.log(c)
    };
    var hf = null,
        jf = null,
        kf = Array(50),
        lf = -1,
        mf = !1;

    function nf(a) {
        var b = (lf + 1) % 50;
        lf = b;
        kf[b] = a;
        mf || (mf = 49 == b)
    }

    function of (a) {
        var b = kf;
        if (b[0]) {
            var c = lf,
                d = mf ? c : -1;
            do {
                var d = (d + 1) % 50,
                    e = b[d];
                D(a, function(a) {
                    a(e)
                })
            } while (d != c);
            kf = Array(50);
            lf = -1;
            mf = !1
        }
    }

    function pf() {
        var a = qf,
            b = q("yt.mdx.remote.debug.logger_"),
            c = q("yt.mdx.remote.debug.handlers_");
        b && c || (ef || (ef = new cf), -1 != window.location.href.indexOf("Debug=true") && df(), df(), ef.b.b = !0, hf = q("yt.mdx.remote.debug.logger_") || bf("yt.mdx.remote"), Y.prototype.log = Y.prototype.log, Y.prototype.getLogRecord = Y.prototype.pb, Y.prototype.addHandler = Y.prototype.ob, Y.prototype.removeHandler = Y.prototype.qb, z("yt.mdx.remote.debug.logger_", hf), jf = q("yt.mdx.remote.debug.handlers_") || [], z("yt.mdx.remote.debug.handlers_",
            jf), q("yt.mdx.remote.debug.logger_"), c = q("yt.mdx.remote.debug.handlers_"));
        c && (c.push(a), of (c))
    }

    function rf(a, b, c) {
        var d = q("yt.mdx.remote.debug.logger_"),
            e = q("yt.mdx.remote.debug.handlers_");
        if (d) {
            if (d.log(a, b + ": " + c, void 0), e && !G(e)) {
                of (e);
                var f = d.getLogRecord(a, b + ": " + c, void 0);
                D(e, function(a) {
                    a(f)
                })
            }
        } else e && !G(e) || nf(new xe(a, String(c), "yt.mdx.remote"))
    };

    function sf(a) {
        this.b = a
    }
    var tf = /\s*;\s*/;
    h = sf.prototype;
    h.set = function(a, b, c, d, e, f) {
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        s(c) || (c = -1);
        e = e ? ";domain=" + e : "";
        d = d ? ";path=" + d : "";
        f = f ? ";secure" : "";
        c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(y() + 1E3 * c)).toUTCString();
        this.b.cookie = a + "=" + b + e + d + c + f
    };
    h.get = function(a, b) {
        for (var c = a + "=", d = (this.b.cookie || "").split(tf), e = 0, f; f = d[e]; e++) {
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };
    h.remove = function(a, b, c) {
        var d = s(this.get(a));
        this.set(a, "", 0, b, c);
        return d
    };
    h.Aa = function() {
        return uf(this).keys
    };
    h.Ba = function() {
        return uf(this).rb
    };
    h.clear = function() {
        for (var a = uf(this).keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b])
    };

    function uf(a) {
        a = (a.b.cookie || "").split(tf);
        for (var b = [], c = [], d, e, f = 0; e = a[f]; f++) d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        return {
            keys: b,
            rb: c
        }
    }
    var vf = new sf(document);
    vf.d = 3950;

    function wf(a, b, c) {
        vf.set("" + a, b, c, "/", "youtube.com")
    };

    function xf() {};

    function yf() {}
    A(yf, xf);
    yf.prototype.clear = function() {
        var a = cd(this.G(!0)),
            b = this;
        D(a, function(a) {
            b.remove(a)
        })
    };

    function zf(a) {
        this.b = a
    }
    A(zf, yf);
    h = zf.prototype;
    h.isAvailable = function() {
        if (!this.b) return !1;
        try {
            return this.b.setItem("__sak", "1"), this.b.removeItem("__sak"), !0
        } catch (a) {
            return !1
        }
    };
    h.set = function(a, b) {
        try {
            this.b.setItem(a, b)
        } catch (c) {
            if (0 == this.b.length) throw "Storage mechanism: Storage disabled";
            throw "Storage mechanism: Quota exceeded";
        }
    };
    h.get = function(a) {
        a = this.b.getItem(a);
        if (!v(a) && null !== a) throw "Storage mechanism: Invalid value was encountered";
        return a
    };
    h.remove = function(a) {
        this.b.removeItem(a)
    };
    h.G = function(a) {
        var b = 0,
            c = this.b,
            d = new $c;
        d.next = function() {
            if (b >= c.length) throw Zc;
            var d;
            d = c.key(b++);
            if (a) return d;
            d = c.getItem(d);
            if (!v(d)) throw "Storage mechanism: Invalid value was encountered";
            return d
        };
        return d
    };
    h.clear = function() {
        this.b.clear()
    };
    h.key = function(a) {
        return this.b.key(a)
    };

    function Af() {
        var a = null;
        try {
            a = window.localStorage || null
        } catch (b) {}
        this.b = a
    }
    A(Af, zf);

    function Bf() {
        var a = null;
        try {
            a = window.sessionStorage || null
        } catch (b) {}
        this.b = a
    }
    A(Bf, zf);

    function Cf(a) {
        this.b = a;
        this.g = new jd
    }
    Cf.prototype.set = function(a, b) {
        s(b) ? this.b.set(a, id(this.g, b)) : this.b.remove(a)
    };
    Cf.prototype.get = function(a) {
        var b;
        try {
            b = this.b.get(a)
        } catch (c) {
            return
        }
        if (null !== b) try {
            return fd(b)
        } catch (d) {
            throw "Storage: Invalid value was encountered";
        }
    };
    Cf.prototype.remove = function(a) {
        this.b.remove(a)
    };

    function Df(a) {
        Cf.call(this, a)
    }
    A(Df, Cf);

    function Ef(a) {
        this.data = a
    }

    function Ff(a) {
        return !s(a) || a instanceof Ef ? a : new Ef(a)
    }
    Df.prototype.set = function(a, b) {
        Df.t.set.call(this, a, Ff(b))
    };
    Df.prototype.aa = function(a) {
        a = Df.t.get.call(this, a);
        if (!s(a) || a instanceof Object) return a;
        throw "Storage: Invalid value was encountered";
    };
    Df.prototype.get = function(a) {
        if (a = this.aa(a)) {
            if (a = a.data, !s(a)) throw "Storage: Invalid value was encountered";
        } else a = void 0;
        return a
    };

    function Gf(a) {
        Cf.call(this, a)
    }
    A(Gf, Df);

    function Hf(a) {
        var b = a.creation;
        a = a.expiration;
        return !!a && a < y() || !!b && b > y()
    }
    Gf.prototype.set = function(a, b, c) {
        if (b = Ff(b)) {
            if (c) {
                if (c < y()) {
                    Gf.prototype.remove.call(this, a);
                    return
                }
                b.expiration = c
            }
            b.creation = y()
        }
        Gf.t.set.call(this, a, b)
    };
    Gf.prototype.aa = function(a, b) {
        var c = Gf.t.aa.call(this, a);
        if (c)
            if (!b && Hf(c)) Gf.prototype.remove.call(this, a);
            else return c
    };

    function If(a) {
        Cf.call(this, a)
    }
    A(If, Gf);

    function Jf(a, b) {
        var c = [];
        bd(b, function(a) {
            var b;
            try {
                b = If.prototype.aa.call(this, a, !0)
            } catch (f) {
                if ("Storage: Invalid value was encountered" == f) return;
                throw f;
            }
            s(b) ? Hf(b) && c.push(a) : c.push(a)
        }, a);
        return c
    }

    function Kf(a, b) {
        var c = Jf(a, b);
        D(c, function(a) {
            If.prototype.remove.call(this, a)
        }, a);
        return c
    };

    function Lf(a, b, c) {
        var d = c && 0 < c ? c : 0;
        c = d ? y() + 1E3 * d : 0;
        if ((d = d ? Mf : Nf) && window.JSON) {
            v(b) || (b = JSON.stringify(b, void 0));
            try {
                d.set(a, b, c)
            } catch (e) {
                d.remove(a)
            }
        }
    }

    function Of(a) {
        if (!Nf && !Mf || !window.JSON) return null;
        var b;
        try {
            b = Nf.get(a), b = v(b) ? b : Mf.get(a)
        } catch (c) {
            return null
        }
        if (!v(b)) return null;
        try {
            b = JSON.parse(b, void 0)
        } catch (d) {}
        return b
    }
    var Mf, Pf = new Af;
    Mf = Pf.isAvailable() ? new If(Pf) : null;
    var Nf, Qf = new Bf;
    Nf = Qf.isAvailable() ? new If(Qf) : null;

    function Rf(a) {
        5 < a.length && (a = a.slice(a.length - 5));
        var b = E(Sf(), function(a) {
                return a.loungeToken
            }),
            c = E(a, function(a) {
                return a.loungeToken
            });
        Ba(c, function(a) {
            return !F(b, a)
        }) && Lf("yt-remote-lounge-token-expiration", !0, 86400);
        Lf("yt-remote-local-screens", a, 31536E3)
    }

    function Sf() {
        return Of("yt-remote-local-screens") || []
    }

    function Tf() {
        return Of("yt-remote-online-screens") || []
    }

    function Uf(a) {
        Lf("yt-remote-online-dial-devices", a, 30)
    }

    function Vf() {
        return Of("yt-remote-online-dial-devices") || []
    };

    function Wf() {
        if (!("cast" in window)) return !1;
        var a = window.cast || {};
        return "ActivityStatus" in a && "Api" in a && "LaunchRequest" in a && "Receiver" in a
    }

    function Xf(a) {
        rf(Ye, "CAST", a)
    }

    function qf(a) {
        var b = Yf();
        b && b.logMessage && (a = we(Zf, a), b.logMessage(a))
    }

    function $f(a) {
        if (a.source == window && a.data && "CastApi" == a.data.source && "Hello" == a.data.event)
            for (; ag.length;) ag.shift()()
    }

    function bg(a) {
        Wf() ? a() : (ag || (ag = [], U(window, "message", $f)), ag.push(a))
    }

    function cg() {
        if (!dg && (G(Fa) && Ja(Fa, Vf()), Wf())) {
            var a = Yf();
            a ? (a.removeReceiverListener("YouTube", eg), a.addReceiverListener("YouTube", eg), Xf("API initialized in the other binary")) : (a = new cast.Api, fg(a), a.addReceiverListener("YouTube", eg), a.setReloadTabRequestHandler && a.setReloadTabRequestHandler(function() {
                K(function() {
                    window.location.reload(!0)
                }, 1E3)
            }), Zf = new ve, Zf.d = !1, Zf.b = !1, pf(), Xf("API initialized"));
            dg = !0
        }
    }

    function gg(a) {
        var b = Da(Fa, function(b) {
            return b.id == a.id
        });
        0 <= b && (Fa[b] = Ae(a))
    }

    function eg(a) {
        Xf("Updating receivers: " + hd(a));
        hg(a);
        M("yt-remote-cast-device-list-update", ig());
        D(ig(), function(a) {
            jg(a.id)
        });
        D(a, function(a) {
            a.isTabProjected && (a = kg(a.id), Xf("Detected device: " + a.id + " is tab projected. Firing DEVICE_TAB_PROJECTED event."), M("yt-remote-cast-device-tab-projected", a.id))
        })
    }

    function lg(a, b) {
        Xf("Updating " + a + " activity status: " + hd(b));
        var c = kg(a);
        c ? (b.activityId && (c.activityId = b.activityId), c.status = "running" == b.status ? "RUNNING" : "stopped" == b.status ? "STOPPED" : "error" == b.status ? "ERROR" : "UNKNOWN", "RUNNING" != c.status && (c.activityId = ""), gg(c), M("yt-remote-cast-device-status-update", c)) : Xf("Device not found")
    }

    function ig() {
        cg();
        return Ie(Fa)
    }

    function hg(a) {
        a = E(a, function(a) {
            var c = {
                id: a.id,
                name: a.name
            };
            if (a = kg(a.id)) c.activityId = a.activityId, c.status = a.status;
            return c
        });
        Ea();
        Ja(Fa, a)
    }

    function kg(a) {
        var b = ig();
        return Ca(b, function(b) {
            return b.id == a
        }) || null
    }

    function jg(a) {
        var b = kg(a),
            c = Yf();
        c && b && b.activityId && c.getActivityStatus(b.activityId, function(b) {
            "error" == b.status && (b.status = "stopped");
            lg(a, b)
        })
    }

    function Yf() {
        return q("yt.mdx.remote.castapi.api_")
    }

    function fg(a) {
        z("yt.mdx.remote.castapi.api_", a)
    }
    var Zf = null,
        dg = !1,
        ag = null,
        Fa = q("yt.mdx.remote.castapi.devices_") || [];
    z("yt.mdx.remote.castapi.devices_", Fa);
    var mg = "corp.google.com googleplex.com youtube.com youtube-nocookie.com prod.google.com sandbox.google.com docs.google.com drive.google.com mail.google.com plus.google.com play.google.com googlevideo.com".split(" "),
        ng = "";

    function og(a) {
        return a && a == ng ? !0 : RegExp("^https?://([a-z0-9-]{1,63}\\.)*(" + mg.join("|").replace(/\./g, ".") + ")(:[0-9]+)?([/?#]|$)", "i").test(a) ? (ng = a, !0) : !1
    };

    function pg() {
        var a = {
                volume: 100,
                muted: !1,
                nonNormalized: 100
            },
            b = Of("yt-player-volume") || {};
        a.volume = isNaN(b.volume) ? 100 : Math.min(Math.max(b.volume, 0), 100);
        a.nonNormalized = isNaN(b.nonNormalized) ? a.volume : b.nonNormalized;
        a.muted = void 0 == b.muted ? !1 : b.muted;
        return a
    }

    function qg(a) {
        var b = Of("yt-player-two-stage-token") || {},
            c = Of("yt-player-two-stage-token") || {};
        s(void 0) ? c[a] = void 0 : delete c[a];
        Lf("yt-player-two-stage-token", c, 300);
        return b[a]
    };

    function rg() {
        var a;
        if (a = vf.get("PREF", void 0)) {
            a = unescape(a).split("&");
            for (var b = 0; b < a.length; b++) {
                var c = a[b].split("="),
                    d = c[0];
                (c = c[1]) && (sg[d] = c.toString())
            }
        }
    }
    ba(rg);
    var sg = q("yt.prefs.UserPrefs.prefs_") || {};
    z("yt.prefs.UserPrefs.prefs_", sg);

    function tg(a) {
        if (/^f([1-9][0-9]*)$/.test(a)) throw "ExpectedRegexMatch: " + a;
    }

    function ug(a) {
        if (!/^\w+$/.test(a)) throw "ExpectedRegexMismatch: " + a;
    }

    function vg(a) {
        return void 0 !== sg[a] ? sg[a].toString() : null
    }
    rg.prototype.get = function(a, b) {
        ug(a);
        tg(a);
        var c = vg(a);
        return null != c ? c : b ? b : ""
    };
    rg.prototype.set = function(a, b) {
        ug(a);
        tg(a);
        if (null == b) throw "ExpectedNotNull";
        sg[a] = b.toString()
    };
    rg.prototype.remove = function(a) {
        ug(a);
        tg(a);
        delete sg[a]
    };
    rg.prototype.clear = function() {
        sg = {}
    };

    function wg() {
        this.g = this.d = this.b = 0;
        this.i = "";
        var a = q("window.navigator.plugins"),
            b = q("window.navigator.mimeTypes"),
            a = a && a["Shockwave Flash"],
            b = b && b["application/x-shockwave-flash"],
            b = a && b && b.enabledPlugin && a.description || "";
        if (a = b) {
            var c = a.indexOf("Shockwave Flash");
            0 <= c && (a = a.substr(c + 15));
            for (var c = a.split(" "), d = "", a = "", e = 0, f = c.length; e < f; e++)
                if (d)
                    if (a) break;
                    else a = c[e];
            else d = c[e];
            d = d.split(".");
            c = parseInt(d[0], 10) || 0;
            d = parseInt(d[1], 10) || 0;
            e = 0;
            if ("r" == a.charAt(0) || "d" == a.charAt(0)) e = parseInt(a.substr(1),
                10) || 0;
            a = [c, d, e]
        } else a = [0, 0, 0];
        this.i = b;
        b = a;
        this.b = b[0];
        this.d = b[1];
        this.g = b[2];
        if (0 >= this.b) {
            var g, k, l, m;
            if (pb) try {
                g = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch (n) {
                g = null
            } else l = document.body, m = document.createElement("object"), m.setAttribute("type", "application/x-shockwave-flash"), g = l.appendChild(m);
            if (g && "GetVariable" in g) try {
                k = g.GetVariable("$version")
            } catch (t) {
                k = ""
            }
            l && m && l.removeChild(m);
            (g = k || "") ? (g = g.split(" ")[1].split(","), g = [parseInt(g[0], 10) || 0, parseInt(g[1], 10) || 0, parseInt(g[2],
                10) || 0]) : g = [0, 0, 0];
            this.b = g[0];
            this.d = g[1];
            this.g = g[2]
        }
    }
    ba(wg);
    wg.prototype.getVersion = function() {
        return [this.b, this.d, this.g]
    };

    function xg(a, b, c, d) {
        b = "string" == typeof b ? b.split(".") : [b, c, d];
        b[0] = parseInt(b[0], 10) || 0;
        b[1] = parseInt(b[1], 10) || 0;
        b[2] = parseInt(b[2], 10) || 0;
        return a.b > b[0] || a.b == b[0] && a.d > b[1] || a.b == b[0] && a.d == b[1] && a.g >= b[2]
    }

    function yg(a) {
        return -1 < a.i.indexOf("Gnash") && -1 == a.i.indexOf("AVM2") || 9 == a.b && 1 == a.d || 9 == a.b && 0 == a.d && 1 == a.g ? !1 : 9 <= a.b
    }

    function zg(a) {
        return Sb ? !xg(a, 11, 2) : Rb ? !xg(a, 11, 3) : !yg(a)
    };

    function Ag(a, b, c) {
        if ((a = T(a)) && b && c) {
            c = pe(c);
            var d = Wa(c.attrs);
            d.tabindex = 0;
            var e = Wa(c.params);
            e.flashvars = pd(c.args);
            if (pb) {
                d.classid = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";
                e.movie = b;
                b = document.createElement("object");
                for (var f in d) b.setAttribute(f, d[f]);
                for (f in e) d = document.createElement("param"), d.setAttribute("name", f), d.setAttribute("value", e[f]), b.appendChild(d)
            } else {
                d.type = "application/x-shockwave-flash";
                d.src = b;
                b = document.createElement("embed");
                b.setAttribute("name", d.id);
                for (f in d) b.setAttribute(f,
                    d[f]);
                for (f in e) b.setAttribute(f, e[f])
            }
            e = document.createElement("div");
            e.appendChild(b);
            a.innerHTML = e.innerHTML
        }
    }

    function Bg(a, b, c) {
        if (a && a.attrs && a.attrs.id) {
            a = pe(a);
            var d = !!b,
                e = T(a.attrs.id),
                f = e ? e.parentNode : null;
            if (e && f) {
                if (window != window.top) {
                    var g = null;
                    if (document.referrer) {
                        var k = document.referrer.substring(0, 128);
                        sd(k) || (g = k)
                    } else g = "unknown";
                    g && (d = !0, a.args.framer = g)
                }
                g = Cg();
                if (xg(g, a.minVersion)) {
                    var k = Dg(a, g),
                        l = ""; - 1 < navigator.userAgent.indexOf("Sony/COM2") || (l = e.getAttribute("src") || e.movie);
                    (l != k || d) && Ag(f, k, a);
                    zg(g) && Eg()
                } else Fg(f, a, g);
                c && c()
            } else K(function() {
                Bg(a, b, c)
            }, 50)
        }
    }

    function Fg(a, b, c) {
        0 == c.b && b.fallback ? b.fallback() : 0 == c.b && b.fallbackMessage ? b.fallbackMessage() : a.innerHTML = '<div id="flash-upgrade">' + ob("FLASH_UPGRADE", 'You need to upgrade your Adobe Flash Player to watchthis video. <br> <a href="http://get.adobe.com/flashplayer/">Download it from Adobe.</a>') + "</div>"
    }

    function Dg(a, b) {
        return yg(b) && a.url || (-1 < navigator.userAgent.indexOf("Sony/COM2") && !xg(b, 9, 1, 58) ? !1 : !0) && a.urlV9As2 || a.urlV8 || a.url
    }

    function Cg() {
        var a = wg.getInstance();
        rg.getInstance().set("fv", a.getVersion().join("."));
        var b;
        b = [];
        for (var c in sg) b.push(c + "=" + escape(sg[c]));
        b = b.join("&");
        wf("PREF", b, 63072E3);
        return a
    }

    function Eg() {
        var a = T("flash10-promo-div"),
            b;
        rg.getInstance();
        b = vg("f" + (Math.floor(107 / 31) + 1));
        b = !!(((null != b && /^[A-Fa-f0-9]+$/.test(b) ? parseInt(b, 16) : null) || 0) & 16384);
        a && !b && Rd(a)
    };

    function Gg(a) {
        var b = Hg(a),
            c = document.getElementById(b),
            d = c && H(c, "loaded");
        d || c && !d || (c = Ig(a, b, function() {
            if (!H(c, "loaded")) {
                Za(c, "loaded", "true");
                M(b);
                var a = x(Ab, b);
                qb() ? rb(a) : K(a, 0)
            }
        }))
    }

    function Ig(a, b, c) {
        var d = document.createElement("link");
        d.id = b;
        d.rel = "stylesheet";
        d.onload = function() {
            c && setTimeout(c, 0)
        };
        d.href = a;
        (document.getElementsByTagName("head")[0] || document.body).appendChild(d);
        return d
    }

    function Hg(a) {
        var b = document.createElement("a");
        b.href = a;
        a = b.href.replace(/^[a-zA-Z]+:\/\//, "//");
        return "css-" + xa(a)
    };
    var Jg;
    var Kg = Tb(),
        Kg = Kg.toLowerCase();
    if (-1 != Kg.indexOf("android")) {
        var Lg = Kg.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);
        if (Lg) Jg = Number(Lg[1]);
        else {
            var Mg = {
                    cupcake: 1.5,
                    donut: 1.6,
                    eclair: 2,
                    froyo: 2.2,
                    gingerbread: 2.3,
                    honeycomb: 3,
                    "ice cream sandwich": 4,
                    jellybean: 4.1
                },
                Ng = Kg.match("(" + Sa(Mg).join("|") + ")");
            Jg = Ng ? Mg[Ng[0]] : 0
        }
    } else Jg = void 0;

    function Og() {
        if (2.2 == Jg) return !0;
        var a;
        a = q("yt.player.utils.videoElement_");
        a || (a = document.createElement("video"), z("yt.player.utils.videoElement_", a));
        try {
            return !(!a || !a.canPlayType || !a.canPlayType('video/mp4; codecs="avc1.42001E, mp4a.40.2"') && !a.canPlayType('video/webm; codecs="vp8.0, vorbis"'))
        } catch (b) {
            return !1
        }
    };

    function Pg(a, b) {
        var c = Sc(a);
        if (c == Sc(window.location.href) || !c && 0 == a.lastIndexOf("/", 0)) {
            var c = Qc(a),
                c = Oc(null, null, c[5], c[6], c[7]),
                d = c.indexOf("#");
            if (c = 0 > d ? c : c.substr(0, d)) c = "s_tempdata-" + xa(c), d = b ? pd(b) : "", wf(c, d, 5)
        }
    };

    function Qg(a, b, c) {
        var d = J("EVENT_ID");
        d && (b || (b = {}), b.ei || (b.ei = d));
        b && Pg(a, b);
        if (c) return !1;
        (window.ytspf || {}).enabled ? spf.navigate(a) : (b = window, a = Tc(Wc([a], {})), b.location = a + "");
        return !0
    };
    q("yt.player.exports.navigate") || z("yt.player.exports.navigate", Qg);

    function Rg(a, b) {
        this.H = a;
        this.N = b;
        this.p = !1;
        this.d = {};
        this.V = this.u = null;
        this.M = new I;
        cb(this, x(db, this.M));
        this.j = {};
        this.k = this.W = this.g = this.ca = this.b = null;
        this.ba = !1;
        this.da = this.Z = null;
        this.za = !!J("PLAYER_BOOTSTRAP_HTML5");
        this.X = {};
        this.ya = ["onReady"];
        this.pa = 0;
        Sg(this);
        this.Y("onVolumeChange", w(this.ab, this));
        this.Y("onError", w(this.$a, this));
        this.Y("onTabOrderChange", w(this.Ya, this));
        this.Y("onNavigate", w(this.Za, this))
    }
    A(Rg, bb);
    h = Rg.prototype;
    h.ta = function(a, b) {
        this.i || (Tg(this, a), Ug(this, b), this.p && Vg(this))
    };

    function Tg(a, b) {
        a.ca = b;
        a.b = b.clone();
        a.g = a.b.attrs.id || a.g;
        "video-player" == a.g && (a.g = a.N, a.b.attrs.id = a.N);
        a.H.id == a.g && (a.g = a.g + "-player", a.b.attrs.id = a.g);
        var c;
        (c = a.b.args.eurl) || (c = document.location.toString(), c = -1 != c.indexOf("/embed/") ? document.referrer && document.referrer.substring(0, 128) || "unknown" : c);
        a.b.args.eurl = c;
        a.b.args.enablejsapi = "1";
        a.b.args.playerapiid = a.N;
        Og() && (Wg() || a.b.assets.js) || (a.b.args.html5_unavailable = "1", a.b.disable.html5 = !0);
        xg(Cg(), a.b.minVersion) || (a.b.disable.flash = !0);
        a.W || (a.W = Xg(a, a.b.args.jsapicallback || "onYouTubePlayerReady"));
        a.b.args.jsapicallback = null;
        if (c = a.b.attrs.width) a.H.style.width = Id(Number(c) || c, !0);
        if (c = a.b.attrs.height) a.H.style.height = Id(Number(c) || c, !0);
        a.H.style.overflow = "hidden"
    }
    h.ub = function() {
        return this.ca
    };

    function Vg(a) {
        a.b.loaded || (a.b.loaded = !0, "0" != a.b.args.autoplay ? a.d.loadVideoByPlayerVars(a.b.args) : a.d.cueVideoByPlayerVars(a.b.args))
    }

    function Yg(a) {
        var b = T(a.g);
        b && b.stopVideo && b.stopVideo();
        b && b.logFallback && b.logFallback();
        if (!a.b.disable.flash) {
            var c = a.b;
            b && b.getUpdatedConfigurationData && (b = pe(b.getUpdatedConfigurationData()), b.args.video_id == c.args.video_id && (c = b));
            c.args.autoplay = 1;
            c.args.html5_unavailable = "1";
            Tg(a, c);
            Ug(a, "flash")
        }
    }

    function Ug(a, b) {
        if (!a.i) {
            if (!b) {
                var c = !!a.b.disable.html5,
                    d = !!a.b.disable.flash;
                b = !a.b.html5 && !d || c ? d ? "unsupported" : "flash" : "html5"
            }("flash" == b ? a.lb : "html5" == b ? a.mb : a.nb).call(a)
        }
    }

    function Wg() {
        return q("yt.player.Application")
    }
    h.mb = function() {
        if (!this.ba) {
            var a = this.b.clone();
            "html5" == Zg(this) ? (this.k = "html5", this.p || this.O(!0)) : ($g(this), this.k = "html5", this.da ? (this.H.appendChild(this.da), this.O()) : (this.b.loaded = !0, this.Z = w(function() {
                new(Wg())(this.H, a);
                this.O()
            }, this), this.ba = !0, Wg() ? this.Z() : (Cb(this.b.assets.js, this.Z), Gg(this.b.assets.css))))
        }
    };
    h.lb = function() {
        var a = this.b.clone();
        a.attrs.width = a.attrs.width || "100%";
        a.attrs.height = a.attrs.height || "100%";
        if ("flash" == Zg(this)) this.k = "flash", this.p || Bg(a, !1, w(this.O, this));
        else {
            $g(this);
            this.k = "flash";
            this.b.loaded = !0;
            var b = this.H,
                b = T(b),
                a = pe(a);
            if (window != window.top) {
                var c = null;
                document.referrer && (c = document.referrer.substring(0, 128));
                a.args.framer = c
            }
            c = Cg();
            xg(c, a.minVersion) ? (c = Dg(a, c), Ag(b, c, a)) : Fg(b, a, c);
            this.O()
        }
    };
    h.O = function(a) {
        var b = T(this.g),
            c = !1;
        try {
            b && b.getApiInterface && (c = !0)
        } catch (d) {}
        if (c)
            if (this.ba = !1, a && b.isNotServable && b.isNotServable()) Yg(this);
            else {
                Sg(this);
                this.p = !0;
                a = T(this.g);
                a.addEventListener && (this.u = ah(a, "addEventListener"));
                a.removeEventListener && (this.V = ah(a, "removeEventListener"));
                b = a.getApiInterface();
                b = b.concat(a.getInternalApiInterface());
                for (c = 0; c < b.length; c++) {
                    var e = b[c];
                    this.d[e] || (this.d[e] = ah(a, e))
                }
                for (var f in this.j) this.u(f, this.j[f]);
                Vg(this);
                this.W && this.W(this.d);
                this.M.q("onReady",
                    this.d)
            }
        else this.pa = K(w(this.O, this), 50)
    };

    function ah(a, b) {
        var c = a[b];
        return function() {
            try {
                return c.apply(a, arguments)
            } catch (d) {
                d.message += " (" + b + ")", nb(d, "WARNING")
            }
        }
    }

    function Sg(a) {
        a.p = !1;
        if (a.V)
            for (var b in a.j) a.V(b, a.j[b]);
        a.u = null;
        a.V = null;
        for (var c in a.d) a.d[c] = null;
        a.d.addEventListener = w(a.Y, a);
        a.d.removeEventListener = w(a.wb, a);
        a.d.destroy = w(a.dispose, a);
        a.d.getPlayerType = w(a.vb, a);
        a.d.getCurrentVideoConfig = w(a.ub, a);
        a.d.loadNewVideoConfig = w(a.ta, a);
        a.d.isReady = w(a.xb, a)
    }
    h.xb = function() {
        return this.p
    };
    h.Y = function(a, b) {
        if (!this.i) {
            var c = Xg(this, b);
            if (c) {
                if (!F(this.ya, a) && !this.j[a]) {
                    var d = bh(this, a);
                    this.u && this.u(a, d)
                }
                this.M.P(a, c);
                "onReady" == a && this.p && K(x(c, this.d), 0)
            }
        }
    };
    h.wb = function(a, b) {
        if (!this.i) {
            var c = Xg(this, b);
            c && this.M.ka(a, c)
        }
    };

    function Xg(a, b) {
        var c = b;
        if ("string" == typeof b) {
            if (a.X[b]) return a.X[b];
            c = function() {
                var a = q(b);
                a && a.apply(p, arguments)
            };
            a.X[b] = c
        }
        return c ? c : null
    }

    function bh(a, b) {
        var c = "ytPlayer" + b + a.N;
        a.j[b] = c;
        p[c] = function(c) {
            K(function() {
                a.i || a.M.q(b, c)
            }, 0)
        };
        return c
    }
    h.Ya = function(a) {
        a = a ? Ac : zc;
        for (var b = a(document.activeElement); b && (1 != b.nodeType || (b.focus(), b != document.activeElement));) b = a(b)
    };
    h.Za = function(a) {
        var b = a.url;
        a = a.sessiondata;
        var c = J("EVENT_ID");
        c && (a || (a = {}), a.ei || (a.ei = c));
        Pg(b, a)
    };
    h.ab = function(a) {
        var b = {};
        b.volume = isNaN(a.volume) ? pg().volume : Math.min(Math.max(a.volume, 0), 100);
        b.nonNormalized = a.nonNormalized;
        b.muted = void 0 == a.muted ? pg().muted : a.muted;
        Lf("yt-player-volume", b, 2592E3)
    };
    h.$a = function(a) {
        5 == a && Yg(this)
    };
    h.nb = function() {
        $g(this);
        this.k = "unsupported";
        var a = ob("PLAYER_FALLBACK", 'The Adobe Flash Player or an HTML5 supported browser is required for video playback. <br> <a href="http://get.adobe.com/flashplayer/">Get the latest Flash Player</a> <br> <a href="/html5">Learn more about upgrading to an HTML5 browser</a>'),
            b = navigator.userAgent.match(/Version\/(\d).*Safari/);
        b && 5 <= parseInt(b[1], 10) && (a = ob("QUICKTIME_FALLBACK", 'The Adobe Flash Player or QuickTime is required for video playback. <br> <a href="http://get.adobe.com/flashplayer/">Get the latest Flash Player</a> <br> <a href="http://www.apple.com/quicktime/download/">Get the latest version of QuickTime</a>'));
        T("unavailable-submessage") && T("player-unavailable") && (T("unavailable-submessage").innerHTML = a, Lb(T("player-unavailable")), Kb(T("player"), "off-screen-trigger"))
    };
    h.vb = function() {
        return this.k || Zg(this)
    };

    function Zg(a) {
        return (a = T(a.g)) ? "div" == a.tagName.toLowerCase() ? "html5" : "flash" : null
    }

    function $g(a) {
        a.cancel();
        Sg(a);
        a.k = null;
        var b = T(a.g);
        a.za && "html5" == Zg(a) ? a.da = b : b && b.destroy && b.destroy();
        for (a = a.H; b = a.firstChild;) a.removeChild(b)
    }
    h.cancel = function() {
        var a = this.Z;
        this.b.assets.js && a && (a = "" + ga(a), (a = Eb[a]) && yb(a));
        mb(this.pa)
    };
    h.K = function() {
        $g(this);
        this.X = null;
        for (var a in this.j) p[this.j[a]] = null;
        this.d = null;
        this.b && (this.ca = this.b = this.b.fallback = null);
        Rg.t.K.call(this)
    };
    var ch = {};

    function dh(a, b) {
        a = T(a);
        if (!a) return null;
        b = pe(b);
        var c = "player" + ga(a),
            d = ch[c];
        if (d) return d.ta(b), d.d;
        d || (d = new Rg(a, c), ch[c] = d, M("player-added", d.d), cb(d, x(eh, d)));
        K(function() {
            d.ta(b)
        }, 0);
        return d.d
    }

    function fh() {
        for (var a in ch) {
            var b = ch[a];
            b && b.cancel()
        }
    }

    function gh(a) {
        if (a = T(a)) a = "player" + ga(a), (a = ch[a]) && a.dispose()
    }

    function eh(a) {
        ch[a.N] = null
    }

    function jh(a) {
        a = T(a);
        if (!a) return null;
        a = "player" + ga(a);
        return (a = ch[a]) ? a.d : null
    }
    var kh = q("yt.player.embed") || dh;
    z("yt.player.embed", kh);
    var lh = q("yt.player.destroy") || gh;
    z("yt.player.destroy", lh);
    var mh = q("yt.player.cancelAll") || fh;
    z("yt.player.cancelAll", mh);
    var nh = q("yt.player.getPlayerByElement") || jh;
    z("yt.player.getPlayerByElement", nh);

    function oh() {
        var a = Me(Tf()),
            b = Ie(Vf()),
            b = za(b, function(b) {
                return !Pe(a, b.id)
            });
        return Ge(Ha(a, b))
    };

    function ph() {
        this.g = new I;
        cb(this, x(db, this.g))
    }
    A(ph, bb);
    ph.prototype.P = function(a, b, c) {
        return this.i ? 0 : this.g.P(a, b, c)
    };
    ph.prototype.ka = function(a, b, c) {
        return this.i ? !1 : this.g.ka(a, b, c)
    };
    ph.prototype.Q = function(a) {
        return this.i ? !1 : this.g.Q(a)
    };
    ph.prototype.q = function(a, b) {
        return this.i ? !1 : this.g.q.apply(this.g, arguments)
    };

    function qh() {
        ph.call(this);
        this.D = Me(Sf());
        this.log_("Initializing local screens: " + De(this.D));
        this.I = rh();
        this.log_("Initializing account screens: " + De(this.I));
        this.Ca = null;
        this.d = [];
        this.b = [];
        this.fa(ig());
        this.log_("Initializing DIAL devices: " + Be(this.b));
        var a = Me(Tf());
        sh(this, a);
        this.log_("Initializing online screens: " + De(this.d));
        L("yt-remote-cast-device-list-update", this.fa, this);
        L("yt-remote-cast-device-status-update", this.bb, this);
        this.ea();
        a = w(this.ea, this);
        ea(a) && (a = lb(a));
        window.setInterval(a,
            1E4)
    }
    A(qh, ph);
    ba(qh);
    h = qh.prototype;
    h.log_ = function(a) {
        rf(Ye, "RM", a)
    };

    function th(a) {
        var b = navigator.userAgent;
        if (0 <= b.search("MSIE") && (b = b.match(/MSIE ([\d.]+)/)[1], 0 > va(b, "10.0"))) return a;
        b = Qc(document.location.href);
        return Oc("https", b[3], a)
    }

    function rh() {
        var a = Me(Sf()),
            b = Me(Tf());
        return za(b, function(b) {
            return !Oe(a, b)
        })
    }
    h.q = function(a, b) {
        if (this.i) return !1;
        this.log_("Firing " + a);
        return this.g.q.apply(this.g, arguments)
    };
    h.ea = function() {
        var a = ig();
        G(a) || this.fa(a);
        a = uh(this);
        G(a) || (Aa(a, function(a) {
            return !Oe(this.I, a)
        }, this) && !Of("yt-remote-lounge-token-expiration") ? vh(this) : wh(this, a))
    };

    function xh(a) {
        sh(a, a.d, !0);
        a.fa(ig());
        a.q("managedScreenChange", uh(a))
    }

    function yh(a, b) {
        var c = uh(a);
        return za(b, function(a) {
            return a.F ? (a = Ke(this.b, a.F), !!a && "RUNNING" == a.status) : !!Oe(c, a)
        }, a)
    }
    h.fa = function(a) {
        var b = !1;
        D(a, function(a) {
            var c = Pe(this.D, a.id);
            c && c.name != a.name && (this.log_("Renaming screen id " + c.id + " from " + c.name + " to " + a.name), c.name = a.name, b = !0)
        }, this);
        b && (this.log_("Renaming due to DIAL."), zh(this));
        Uf(He(a));
        var c = !Oa(this.b, a, Je);
        c && this.log_("Updating DIAL devices: " + Be(this.b) + " to " + Be(a));
        this.b = a;
        sh(this, this.d);
        c && this.q("onlineReceiverChange")
    };
    h.bb = function(a) {
        var b = Ke(this.b, a.id);
        b && (this.log_("Updating DIAL device: " + b.id + "(" + b.name + ") from status: " + b.status + " to status: " + a.status + " and from activityId: " + b.activityId + " to activityId: " + a.activityId), b.activityId = a.activityId, b.status = a.status, Uf(He(this.b)));
        sh(this, this.d)
    };

    function sh(a, b, c) {
        var d = yh(a, b),
            e = !Oa(a.d, d, Ne);
        !e && !c || G(b) || (b = Le(d), Lf("yt-remote-online-screens", b, 60));
        e && (a.log_("Updating online screens: " + De(a.d) + " -> " + De(d)), a.d = d, a.q("onlineReceiverChange"))
    }

    function wh(a, b) {
        var c = [],
            d = {};
        D(b, function(a) {
            a.B && (d[a.B] = a, c.push(a.B))
        });
        var e = {
            method: "POST",
            J: {
                lounge_token: c.join(",")
            },
            la: a,
            onSuccess: function(a, b) {
                var c = [];
                D(b.screens || [], function(a) {
                    "online" == a.status && c.push(d[a.loungeToken])
                });
                var e = this.Ca ? Ah(this, this.Ca) : null;
                e && !Oe(c, e) && c.push(e);
                sh(this, c, !0)
            }
        };
        xd(th("/api/lounge/pairing/get_screen_availability"), e)
    }

    function vh(a) {
        var b = uh(a),
            c = E(b, function(a) {
                return a.C
            });
        G(c) || (a.log_("Updating lounge tokens for: " + hd(c)), xd(th("/api/lounge/pairing/get_lounge_token_batch"), {
            J: {
                screen_ids: c.join(",")
            },
            method: "POST",
            la: a,
            onSuccess: function(a, c) {
                Bh(this, c.screens || []);
                this.D = za(this.D, function(a) {
                    return !!a.B
                });
                zh(this);
                wh(this, b)
            }
        }))
    }

    function Bh(a, b) {
        D(Ha(a.D, a.I), function(a) {
            var d = Ca(b, function(b) {
                return a.C == b.screenId
            });
            d && (a.B = d.loungeToken)
        })
    }

    function zh(a) {
        var b = Me(Sf());
        Oa(a.D, b, Ne) || (a.log_("Saving local screens: " + De(b) + " to " + De(a.D)), Rf(Le(a.D)), xh(a))
    }

    function Ah(a, b) {
        var c = Pe(uh(a), b);
        a.log_("Found screen: " + (c ? c.toString() : "null") + " with key: " + b);
        return c
    }

    function uh(a) {
        return Ha(a.I, za(a.D, function(a) {
            return !Oe(this.I, a)
        }, a))
    }

    function Ch(a) {
        var b = th("/api/lounge/screens");
        xd(b, {
            method: "GET",
            la: a,
            withCredentials: !0,
            onSuccess: function(a, b) {
                this.I = E(Ra(b), function(a) {
                    return new Ce(a)
                });
                this.log_("Load account screens successfully.");
                this.ea();
                xh(this);
                this.q("accountScreenLoad")
            },
            onError: function() {
                rf(Xe, "RM", "Load account screens failed.")
            }
        })
    };

    function Dh(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = !1
    }
    Dh.prototype.dispose = function() {};
    Dh.prototype.preventDefault = function() {
        this.defaultPrevented = !0
    };

    function Eh(a) {
        Eh[" "](a);
        return a
    }
    Eh[" "] = aa;
    var Fh = !P || P && 9 <= kc,
        Gh = P && !S("9");
    !R || S("528");
    Q && S("1.9b") || P && S("8") || Xb && S("9.5") || R && S("528");
    Q && !S("8") || P && S("9");

    function Hh(a, b) {
        Dh.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.charCode = this.keyCode = this.clientY = this.clientX = 0;
        this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.b = null;
        a && this.init(a, b)
    }
    A(Hh, Dh);
    Hh.prototype.init = function(a, b) {
        var c = this.type = a.type;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var d = a.relatedTarget;
        if (d) {
            if (Q) {
                var e;
                t: {
                    try {
                        Eh(d.nodeName);
                        e = !0;
                        break t
                    } catch (f) {}
                    e = !1
                }
                e || (d = null)
            }
        } else "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
        this.relatedTarget = d;
        this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
        this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.b = a;
        a.defaultPrevented && this.preventDefault()
    };
    Hh.prototype.preventDefault = function() {
        Hh.t.preventDefault.call(this);
        var a = this.b;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, Gh) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    Hh.prototype.d = function() {
        return this.b
    };
    var Ih = "closure_listenable_" + (1E6 * Math.random() | 0);

    function Jh(a) {
        try {
            return !(!a || !a[Ih])
        } catch (b) {
            return !1
        }
    }
    var Kh = 0;

    function Lh(a, b, c, d, e) {
        this.R = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.b = e;
        this.key = ++Kh;
        this.removed = this.qa = !1
    }

    function Mh(a) {
        a.removed = !0;
        a.R = null;
        a.proxy = null;
        a.src = null;
        a.b = null
    };

    function Nh(a) {
        this.src = a;
        this.b = {};
        this.d = 0
    }
    Nh.prototype.add = function(a, b, c, d, e) {
        var f = this.b[a];
        f || (f = this.b[a] = [], this.d++);
        var g = Oh(f, b, d, e); - 1 < g ? (a = f[g], c || (a.qa = !1)) : (a = new Lh(b, this.src, a, !!d, e), a.qa = c, f.push(a));
        return a
    };
    Nh.prototype.remove = function(a, b, c, d) {
        if (!(a in this.b)) return !1;
        var e = this.b[a];
        b = Oh(e, b, c, d);
        return -1 < b ? (Mh(e[b]), C.splice.call(e, b, 1), 0 == e.length && (delete this.b[a], this.d--), !0) : !1
    };

    function Ph(a, b) {
        var c = b.type;
        c in a.b && Ga(a.b[c], b) && (Mh(b), 0 == a.b[c].length && (delete a.b[c], a.d--))
    }
    Nh.prototype.removeAll = function(a) {
        var b = 0,
            c;
        for (c in this.b)
            if (!a || c == a) {
                for (var d = this.b[c], e = 0; e < d.length; e++) ++b, Mh(d[e]);
                delete this.b[c];
                this.d--
            } return b
    };

    function Oh(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.removed && f.R == b && f.capture == !!c && f.b == d) return e
        }
        return -1
    };
    var Qh = "closure_lm_" + (1E6 * Math.random() | 0),
        Rh = {},
        Sh = 0;

    function Th(a, b, c, d, e) {
        if (u(b))
            for (var f = 0; f < b.length; f++) Th(a, b[f], c, d, e);
        else if (c = Uh(c), Jh(a)) a.listen(b, c, d, e);
        else {
            if (!b) throw Error("Invalid event type");
            var f = !!d,
                g = Vh(a);
            g || (a[Qh] = g = new Nh(a));
            c = g.add(b, c, !1, d, e);
            c.proxy || (d = Wh(), c.proxy = d, d.src = a, d.R = c, a.addEventListener ? a.addEventListener(b, d, f) : a.attachEvent(b in Rh ? Rh[b] : Rh[b] = "on" + b, d), Sh++)
        }
    }

    function Wh() {
        var a = Xh,
            b = Fh ? function(c) {
                return a.call(b.src, b.R, c)
            } : function(c) {
                c = a.call(b.src, b.R, c);
                if (!c) return c
            };
        return b
    }

    function Yh(a, b, c, d, e) {
        if (u(b))
            for (var f = 0; f < b.length; f++) Yh(a, b[f], c, d, e);
        else(c = Uh(c), Jh(a)) ? a.$.remove(String(b), c, d, e) : a && (a = Vh(a)) && (b = a.b[b], a = -1, b && (a = Oh(b, c, !!d, e)), (c = -1 < a ? b[a] : null) && Zh(c))
    }

    function Zh(a) {
        if ("number" != typeof a && a && !a.removed) {
            var b = a.src;
            if (Jh(b)) Ph(b.$, a);
            else {
                var c = a.type,
                    d = a.proxy;
                b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(c in Rh ? Rh[c] : Rh[c] = "on" + c, d);
                Sh--;
                (c = Vh(b)) ? (Ph(c, a), 0 == c.d && (c.src = null, b[Qh] = null)) : Mh(a)
            }
        }
    }

    function $h(a, b, c, d) {
        var e = 1;
        if (a = Vh(a))
            if (b = a.b[b])
                for (b = Ia(b), a = 0; a < b.length; a++) {
                    var f = b[a];
                    f && f.capture == c && !f.removed && (e &= !1 !== ai(f, d))
                }
        return Boolean(e)
    }

    function ai(a, b) {
        var c = a.R,
            d = a.b || a.src;
        a.qa && Zh(a);
        return c.call(d, b)
    }

    function Xh(a, b) {
        if (a.removed) return !0;
        if (!Fh) {
            var c = b || q("window.event"),
                d = new Hh(c, this),
                e = !0;
            if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                t: {
                    var f = !1;
                    if (0 == c.keyCode) try {
                        c.keyCode = -1;
                        break t
                    } catch (g) {
                        f = !0
                    }
                    if (f || void 0 == c.returnValue) c.returnValue = !0
                }
                c = [];
                for (f = d.currentTarget; f; f = f.parentNode) c.push(f);
                for (var f = a.type, k = c.length - 1; 0 <= k; k--) d.currentTarget = c[k],
                e &= $h(c[k], f, !0, d);
                for (k = 0; k < c.length; k++) d.currentTarget = c[k],
                e &= $h(c[k], f, !1, d)
            }
            return e
        }
        return ai(a, new Hh(b, this))
    }

    function Vh(a) {
        a = a[Qh];
        return a instanceof Nh ? a : null
    }
    var bi = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function Uh(a) {
        return ea(a) ? a : a[bi] || (a[bi] = function(b) {
            return a.handleEvent(b)
        })
    };

    function ci() {
        this.$ = new Nh(this)
    }
    A(ci, bb);
    ci.prototype[Ih] = !0;
    h = ci.prototype;
    h.addEventListener = function(a, b, c, d) {
        Th(this, a, b, c, d)
    };
    h.removeEventListener = function(a, b, c, d) {
        Yh(this, a, b, c, d)
    };
    h.K = function() {
        ci.t.K.call(this);
        this.removeAllListeners()
    };
    h.listen = function(a, b, c, d) {
        return this.$.add(String(a), b, !1, c, d)
    };
    h.removeAllListeners = function(a) {
        return this.$ ? this.$.removeAll(a) : 0
    };
    new ci;
    var di = null,
        ei = NaN;

    function fi(a) {
        var b = gi;
        cg();
        di = b;
        di.addEventListener("onReady", hi);
        di.addEventListener("onRemoteReceiverSelected", ii);
        b = qh.getInstance();
        b.P("onlineReceiverChange", ji);
        a.args.has_mdx_screens ? Ch(b) : G(b.I) && G(rh()) || (b.log_("Clear cached account screens."), b.I = [], b.ea(), xh(b))
    }

    function hi() {
        G(Tf()) && G(Vf()) || ji();
        var a;
        if (Of("yt-remote-delayed-connect-key")) a = !0;
        else {
            a = Of("yt-remote-session-screen-id");
            var b = Me(Tf());
            a = !!Pe(b, a)
        }
        a && (a = di, "html5" != a.getPlayerType() && a.loadNewVideoConfig(a.getCurrentVideoConfig(), "html5"))
    }

    function ii(a) {
        var b = oh();
        if (Fe(b, a) && (b = di, "html5" != b.getPlayerType())) {
            var c = b.getVideoData().video_id,
                d = b.getCurrentTime(),
                e = d || 0;
            5 >= e && (e = 0);
            var d = e,
                e = {
                    key: a,
                    videoId: c,
                    currentTime: d
                },
                f = "Setting the delayed connect data: " + hd(e);
            rf(Ye, "RC", f);
            var f = qh.getInstance(),
                g = Pe(f.d, a);
            f.log_("Found online screen: " + (g ? g.toString() : "null") + " with key: " + a);
            if (!g) {
                f = qh.getInstance();
                g = Ke(f.b, a);
                if (!g) {
                    var k = Pe(f.D, a);
                    k && (g = Ke(f.b, k.F))
                }
                f.log_("Found DIAL: " + (g ? g.toString() : "null") + " with key: " + a);
                if (f =
                    g)
                    if (a = Ee(), e.pairingCode = a, f = f.id, cg(), g = kg(f), (k = Yf()) && g) {
                        var l = new cast.Receiver(g.id, g.name),
                            l = new cast.LaunchRequest("YouTube", l);
                        l.parameters = "pairingCode=" + a;
                        l.description = new cast.LaunchDescription;
                        l.description.text = document.title;
                        c && (l.parameters += "&v=" + c, d && (l.parameters += "&t=" + Math.round(d)), l.description.url = "http://i.ytimg.com/vi/" + c + "/default.jpg");
                        "UNKNOWN" != g.status && (g.status = "UNKNOWN", gg(g), M("yt-remote-cast-device-status-update", g));
                        Xf("Sending a cast launch request with params: " +
                            l.parameters);
                        k.launch(l, x(lg, f))
                    } else Xf("No cast API or no cast device. Dropping cast launch.")
            }
            Lf("yt-remote-delayed-connect-key", e);
            b.loadNewVideoConfig(b.getCurrentVideoConfig(), "html5")
        }
    }

    function ji() {
        var a = di;
        a.updateRemoteReceivers && a.updateRemoteReceivers(oh())
    };
    var ki = {},
        li = 0;

    function mi(a, b) {
        if (a) {
            var c = new Image,
                d = "" + li++;
            ki[d] = c;
            c.onload = c.onerror = function() {
                b && ki[d] && b();
                delete ki[d]
            };
            c.src = a;
            c = eval("null")
        }
    };
    var Z = null,
        ni = [];

    function oi(a) {
        return {
            wa: a.externalChannelId,
            Ra: a.offersUrl,
            source: a.source,
            Lb: a.subscriptionId
        }
    }

    function pi(a) {
        a = oi(a);
        if (Bd()) {
            var b = null;
            a.Ra && (b = {
                itemType: "U",
                itemId: a.wa,
                offersUrl: a.Ra
            });
            M("subscription-subscribe", a.wa, b);
            a = pd({
                event: "subscribe",
                source: a.source
            });
            mi("/gen_204?" + a, void 0)
        } else qi(a)
    }

    function qi(a) {
        Yc(function(b) {
            b.subscription_ajax && (jb("subscription_ajax", b.subscription_ajax), pi(a))
        }, "sub_button")
    }

    function ri(a) {
        a = oi(a);
        M("subscription-unsubscribe", a.wa, a.Lb, null);
        a = pd({
            event: "unsubscribe",
            source: a.source
        });
        mi("/gen_204?" + a, void 0)
    }

    function si(a, b) {
        Z && Z.channelSubscribed(a, b)
    }

    function ti(a) {
        Z && Z.channelUnsubscribed(a)
    };

    function ui() {
        var a = vi().tick,
            b = vi().span,
            c = vi().info,
            d = q("yt.timing.reportbuilder_");
        if (d) {
            if (d = d.apply(null, [a, b, c, void 0])) wi(d), xi()
        } else {
            var d = {
                    v: 2,
                    s: "youtube",
                    action: J("TIMING_ACTION")
                },
                e = J("TIMING_INFO") || {},
                f;
            for (f in e) c[f] = e[f];
            f = c.srt;
            delete c.srt;
            if (!f && 0 !== f) try {
                var g = (window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance).timing;
                f = Math.max(0, g.responseStart - g.navigationStart)
            } catch (k) {
                c.pt && (f = c.pt)
            }
            if (f || 0 === f) c.srt = f;
            a.aft || (a.aft = a.vr && a.cl && a.cl >
                a.vr ? a.cl : a.vr ? a.vr : a.ol);
            a.vr && a.gv && (b.vl = Math.round(a.vr - a.gv));
            for (var l in c) "_" != l.charAt(0) && (d[l] = c[l]);
            c = {};
            g = [];
            l = a._start;
            for (var m in a) "_" != m.charAt(0) && (f = Math.max(Math.round(a[m] - l), 0), c[m] = f, g.push(m + "." + f));
            d.rt = g.join(",");
            a = {};
            m = [];
            for (var n in b) "_" != n.charAt(0) && (a[n] = b[n], m.push(n + "." + b[n]));
            d.it = m.join(",");
            wi(d);
            (b = q("ytdebug.logTiming")) && b(d, c, a);
            xi()
        }
    }

    function wi(a) {
        var b = "https:" == window.location.protocol ? "https://gg.google.com/csi" : "http://csi.gstatic.com/csi",
            c = "",
            d;
        for (d in a) c += "&" + d + "=" + a[d];
        mi(b + "?" + c.substring(1))
    }

    function vi() {
        return q("ytcsi.data_") || xi()
    }

    function xi() {
        var a = {
            tick: {},
            span: {},
            info: {}
        };
        z("ytcsi.data_", a);
        return a
    };

    function yi() {}
    new yi;
    new yi;
    var zi;
    var Ai = Tb(),
        Bi = Ai.match(/\((iPad|iPhone|iPod)( Simulator)?;/);
    if (!Bi || 2 > Bi.length) zi = void 0;
    else {
        var Ci = Ai.match(/\((iPad|iPhone|iPod)( Simulator)?; (U; )?CPU (iPhone )?OS (\d_\d)[_ ]/);
        zi = Ci && 6 == Ci.length ? Number(Ci[5].replace("_", ".")) : 0
    }
    0 <= zi && 0 <= Tb().search("Safari") && Tb().search("Version");

    function Di(a) {
        return a ? 24 == a.length && "UC" == a.slice(0, 2) ? a.substr(2) : 22 == a.length ? a : null : null
    }

    function Ei(a, b) {
        var c = J("CONVERSION_CONFIG_DICT");
        if (c) {
            if (v(b)) {
                var d = Di(b);
                if (c.uid != d) return
            }
            var e = "followon_" + a;
            if (c.baseUrl && c.uid) {
                var f = c.rmktEnabled,
                    d = c.focEnabled && !c.isAd;
                if (f || d) {
                    e = {
                        label: d ? e : "default"
                    };
                    if (f) {
                        f = {
                            utuid: c.uid,
                            type: a
                        };
                        c.vid && (f.utvid = c.vid);
                        c.eventLabel && (f.el = c.eventLabel);
                        c.playerStyle && (f.ps = c.playerStyle);
                        c.feature && (f.feature = c.feature);
                        c.ppe && (f.ppe = c.ppe);
                        var g, k = [];
                        for (g in f) k.push(encodeURIComponent(g) + "=" + encodeURIComponent(f[g]));
                        g = k.join(";");
                        e.data = g
                    }
                    d && "view" ==
                        a && c.vid && c.uid && (c.oeid || c.ieid) && (c.oeid && (e.oeid = c.oeid), c.ieid && (e.ieid = c.ieid), e.evid = c.vid);
                    d && (e.foc_id = c.uid);
                    c = Tc(Wc([c.baseUrl], e))
                } else c = null
            } else c = null;
            c && mi(c)
        }
    };

    function Fi(a) {
        return (0 == a.search("cue") || 0 == a.search("load")) && "loadModule" != a
    }

    function Gi(a, b, c) {
        v(a) && (a = {
            mediaContentUrl: a,
            startSeconds: b,
            suggestedQuality: c
        });
        b = a;
        c = /\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);
        b.videoId = c && c[2] ? c[2] : null;
        return Hi(a)
    }

    function Hi(a, b, c) {
        if (fa(a)) {
            b = "endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");
            c = {};
            for (var d = 0; d < b.length; d++) {
                var e = b[d];
                a[e] && (c[e] = a[e])
            }
            return c
        }
        return {
            videoId: a,
            startSeconds: b,
            suggestedQuality: c
        }
    }

    function Ii(a, b, c, d) {
        if (fa(a) && !u(a)) {
            b = "playlist list listType index startSeconds suggestedQuality".split(" ");
            c = {};
            for (d = 0; d < b.length; d++) {
                var e = b[d];
                a[e] && (c[e] = a[e])
            }
            return c
        }
        c = {
            index: b,
            startSeconds: c,
            suggestedQuality: d
        };
        v(a) && 16 == a.length ? c.list = "PL" + a : c.playlist = a;
        return c
    };

    function Ji(a, b) {
        this.source = null;
        this.i = a || null;
        this.origin = "*";
        this.u = window.document.location.protocol + "//" + window.document.location.hostname;
        this.k = b;
        this.g = this.b = this.d = this.j = null;
        U(window, "message", w(this.p, this))
    }
    Ji.prototype.p = function(a) {
        var b = this.k || J("POST_MESSAGE_ORIGIN") || this.u;
        if ("*" == b || a.origin == b)
            if (!this.i || a.source == this.i)
                if (this.source = a.source, this.origin = "null" == a.origin ? this.origin : a.origin, a = a.data, v(a)) {
                    try {
                        a = fd(a)
                    } catch (c) {
                        return
                    }
                    this.j = a.id;
                    switch (a.event) {
                        case "listening":
                            this.b && (this.b(), this.b = null);
                            break;
                        case "command":
                            this.d && (this.g && !F(this.g, a.func) || this.d(a.func, a.args))
                    }
                }
    };
    Ji.prototype.sendMessage = function(a) {
        this.source && (a.id = this.j, a = hd(a), this.source.postMessage(a, this.origin))
    };

    function Ki() {
        var a = this.d = new Ji,
            b = w(this.tb, this);
        a.d = b;
        a.g = null;
        this.g = [];
        this.u = !1;
        this.p = (a = J("POST_MESSAGE_ORIGIN")) && og(a) ? a : null;
        this.i = {}
    }
    h = Ki.prototype;
    h.tb = function(a, b) {
        if (this.p && this.p != this.d.origin) this.dispose();
        else if ("addEventListener" == a && b) {
            var c = b[0];
            this.i[c] || "onReady" == c || (this.addEventListener(c, Li(this, c)), this.i[c] = !0)
        } else this.Fa(a, b)
    };
    h.Fa = function() {};

    function Li(a, b) {
        return w(function(a) {
            this.sendMessage(b, a)
        }, a)
    }
    h.addEventListener = function() {};
    h.cb = function() {
        this.u = !0;
        this.sendMessage("initialDelivery", this.ra());
        this.sendMessage("onReady");
        D(this.g, this.Ja, this);
        this.g = []
    };
    h.ra = function() {
        return null
    };

    function Mi(a, b) {
        a.sendMessage("infoDelivery", b)
    }
    h.Ja = function(a) {
        this.u ? this.d.sendMessage(a) : this.g.push(a)
    };
    h.sendMessage = function(a, b) {
        this.Ja({
            event: a,
            info: void 0 == b ? null : b
        })
    };
    h.dispose = function() {
        this.d = null
    };

    function Ni(a) {
        Ki.call(this);
        this.b = a;
        this.j = {};
        this.k = {};
        this.b.addEventListener("onReady", w(this.eb, this));
        this.b.addEventListener("onVideoProgress", w(this.jb, this));
        this.b.addEventListener("onVolumeChange", w(this.kb, this));
        this.b.addEventListener("onApiChange", w(this.fb, this));
        this.b.addEventListener("onPlaybackQualityChange", w(this.gb, this));
        this.b.addEventListener("onPlaybackRateChange", w(this.hb, this));
        this.b.addEventListener("onStateChange", w(this.ib, this))
    }
    A(Ni, Ki);

    function Oi(a, b, c) {
        a.j = b;
        a.k = c
    }

    function Pi(a, b) {
        var c = qg(b.video_id || b.videoId);
        c && (b.two_stage_token = c);
        Qa(a.j, function(a, c) {
            if (b[c]) {
                var f = this.k[a];
                f && (b[a] = f)
            }
        }, a)
    }
    h = Ni.prototype;
    h.Fa = function(a, b) {
        if (this.b[a]) {
            b = b || [];
            if (0 < b.length && Fi(a)) {
                var c;
                c = b;
                if (fa(c[0]) && !u(c[0])) c = c[0];
                else {
                    var d = {};
                    switch (a) {
                        case "loadVideoById":
                        case "cueVideoById":
                            d = Hi.apply(window, c);
                            break;
                        case "loadVideoByUrl":
                        case "cueVideoByUrl":
                            d = Gi.apply(window, c);
                            break;
                        case "loadPlaylist":
                        case "cuePlaylist":
                            d = Ii.apply(window, c)
                    }
                    c = d
                }
                Pi(this, c);
                b.length = 1;
                b[0] = c
            }
            this.b[a].apply(this.b, b);
            Fi(a) && Mi(this, this.ra())
        }
    };
    h.eb = function() {
        var a = w(this.cb, this);
        this.d.b = a
    };
    h.addEventListener = function(a, b) {
        this.b.addEventListener(a, b)
    };
    h.ra = function() {
        var a = this.b.getApiInterface();
        Ga(a, "getVideoData");
        for (var b = {
                apiInterface: a
            }, c = 0, d = a.length; c < d; c++) {
            var e = a[c],
                f = e;
            if (0 == f.search("get") || 0 == f.search("is")) {
                var f = e,
                    g = 0;
                0 == f.search("get") ? g = 3 : 0 == f.search("is") && (g = 2);
                f = f.charAt(g).toLowerCase() + f.substr(g + 1);
                try {
                    var k = this.b[e]();
                    b[f] = k
                } catch (l) {}
            }
        }
        b.videoData = {
            video_id: this.b.getVideoData().video_id
        };
        return b
    };
    h.ib = function(a) {
        Mi(this, {
            playerState: a,
            currentTime: this.b.getCurrentTime(),
            duration: this.b.getDuration(),
            videoData: {
                video_id: this.b.getVideoData().video_id
            },
            videoStartBytes: 0,
            videoBytesTotal: this.b.getVideoBytesTotal(),
            videoLoadedFraction: this.b.getVideoLoadedFraction(),
            playbackQuality: this.b.getPlaybackQuality(),
            availableQualityLevels: this.b.getAvailableQualityLevels(),
            videoUrl: this.b.getVideoUrl(),
            playlist: this.b.getPlaylist(),
            playlistIndex: this.b.getPlaylistIndex()
        })
    };
    h.gb = function(a) {
        Mi(this, {
            playbackQuality: a
        })
    };
    h.hb = function(a) {
        Mi(this, {
            playbackRate: a
        })
    };
    h.fb = function() {
        for (var a = this.b.getOptions(), b = {
                namespaces: a
            }, c = 0, d = a.length; c < d; c++) {
            var e = a[c],
                f = this.b.getOptions(e);
            b[e] = {
                options: f
            };
            for (var g = 0, k = f.length; g < k; g++) {
                var l = f[g],
                    m = this.b.getOption(e, l);
                b[e][l] = m
            }
        }
        this.sendMessage("apiInfoDelivery", b)
    };
    h.kb = function() {
        Mi(this, {
            muted: this.b.isMuted(),
            volume: this.b.getVolume()
        })
    };
    h.jb = function(a) {
        Mi(this, {
            currentTime: a,
            videoBytesLoaded: this.b.getVideoBytesLoaded(),
            videoLoadedFraction: this.b.getVideoLoadedFraction()
        })
    };
    var Qi;
    Qi = {
        j: ["BC", "AD"],
        i: ["Before Christ", "Anno Domini"],
        p: "JFMAMJJASOND".split(""),
        X: "JFMAMJJASOND".split(""),
        k: "January February March April May June July August September October November December".split(" "),
        V: "January February March April May June July August September October November December".split(" "),
        N: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        da: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        ya: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        ca: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        Z: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        ba: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        u: "SMTWTFS".split(""),
        W: "SMTWTFS".split(""),
        M: ["Q1", "Q2", "Q3", "Q4"],
        U: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
        b: ["AM", "PM"],
        d: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
        pa: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
        g: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
        Qb: 6,
        za: [5, 6],
        Rb: 5
    };
    var Ri = /^(\d{4})(?:(?:-?(\d{2})(?:-?(\d{2}))?)|(?:-?(\d{3}))|(?:-?W(\d{2})(?:-?([1-7]))?))?$/,
        Si = /^(\d{2})(?::?(\d{2})(?::?(\d{2})(\.\d+)?)?)?$/,
        Ti = /Z|(?:([-+])(\d{2})(?::?(\d{2}))?)$/;

    function Ui(a, b, c, d, e, f) {
        v(a) ? (this.k = "y" == a ? b : 0, this.i = "m" == a ? b : 0, this.b = "d" == a ? b : 0, this.d = "h" == a ? b : 0, this.g = "n" == a ? b : 0, this.j = "s" == a ? b : 0) : (this.k = a || 0, this.i = b || 0, this.b = c || 0, this.d = d || 0, this.g = e || 0, this.j = f || 0)
    }
    Ui.prototype.clone = function() {
        return new Ui(this.k, this.i, this.b, this.d, this.g, this.j)
    };
    Ui.prototype.add = function(a) {
        this.k += a.k;
        this.i += a.i;
        this.b += a.b;
        this.d += a.d;
        this.g += a.g;
        this.j += a.j
    };

    function Vi(a, b, c) {
        "number" == typeof a ? (this.b = Wi(a, b || 0, c || 1), Xi(this, c || 1)) : fa(a) ? (this.b = Wi(a.getFullYear(), a.getMonth(), a.getDate()), Xi(this, a.getDate())) : (this.b = new Date(y()), this.b.setHours(0), this.b.setMinutes(0), this.b.setSeconds(0), this.b.setMilliseconds(0))
    }

    function Wi(a, b, c) {
        b = new Date(a, b, c);
        0 <= a && 100 > a && b.setFullYear(b.getFullYear() - 1900);
        return b
    }
    h = Vi.prototype;
    h.ha = Qi.Qb;
    h.ia = Qi.Rb;
    h.clone = function() {
        var a = new Vi(this.b);
        a.ha = this.ha;
        a.ia = this.ia;
        return a
    };
    h.getFullYear = function() {
        return this.b.getFullYear()
    };
    h.getMonth = function() {
        return this.b.getMonth()
    };
    h.getDate = function() {
        return this.b.getDate()
    };
    h.getTime = function() {
        return this.b.getTime()
    };

    function Yi(a) {
        a = a.b.getTimezoneOffset();
        if (0 == a) a = "Z";
        else {
            var b = Math.abs(a) / 60,
                c = Math.floor(b),
                b = 60 * (b - c);
            a = (0 < a ? "-" : "+") + B(c) + ":" + B(b)
        }
        return a
    }
    h.set = function(a) {
        this.b = new Date(a.getFullYear(), a.getMonth(), a.getDate())
    };
    h.add = function(a) {
        if (a.k || a.i) {
            var b = this.getMonth() + a.i + 12 * a.k,
                c = this.getFullYear() + Math.floor(b / 12),
                b = b % 12;
            0 > b && (b += 12);
            var d;
            t: {
                switch (b) {
                    case 1:
                        d = 0 != c % 4 || 0 == c % 100 && 0 != c % 400 ? 28 : 29;
                        break t;
                    case 5:
                    case 8:
                    case 10:
                    case 3:
                        d = 30;
                        break t
                }
                d = 31
            }
            d = Math.min(d, this.getDate());
            this.b.setDate(1);
            this.b.setFullYear(c);
            this.b.setMonth(b);
            this.b.setDate(d)
        }
        a.b && (a = new Date((new Date(this.getFullYear(), this.getMonth(), this.getDate(), 12)).getTime() + 864E5 * a.b), this.b.setDate(1), this.b.setFullYear(a.getFullYear()),
            this.b.setMonth(a.getMonth()), this.b.setDate(a.getDate()), Xi(this, a.getDate()))
    };
    h.ja = function(a, b) {
        return [this.getFullYear(), B(this.getMonth() + 1), B(this.getDate())].join(a ? "-" : "") + (b ? Yi(this) : "")
    };
    h.toString = function() {
        return this.ja()
    };

    function Xi(a, b) {
        a.getDate() != b && a.b.setUTCHours(a.b.getUTCHours() + (a.getDate() < b ? 1 : -1))
    }
    h.valueOf = function() {
        return this.b.valueOf()
    };

    function Zi(a, b, c, d, e, f, g) {
        this.b = "number" == typeof a ? new Date(a, b || 0, c || 1, d || 0, e || 0, f || 0, g || 0) : new Date(a ? a.getTime() : y())
    }
    A(Zi, Vi);
    Zi.prototype.add = function(a) {
        Vi.prototype.add.call(this, a);
        a.d && this.b.setHours(this.b.getHours() + a.d);
        a.g && this.b.setMinutes(this.b.getMinutes() + a.g);
        a.j && this.b.setSeconds(this.b.getSeconds() + a.j)
    };
    Zi.prototype.ja = function(a, b) {
        var c = Vi.prototype.ja.call(this, a);
        return a ? c + " " + B(this.b.getHours()) + ":" + B(this.b.getMinutes()) + ":" + B(this.b.getSeconds()) + (b ? Yi(this) : "") : c + "T" + B(this.b.getHours()) + B(this.b.getMinutes()) + B(this.b.getSeconds()) + (b ? Yi(this) : "")
    };
    Zi.prototype.toString = function() {
        return this.ja()
    };
    Zi.prototype.clone = function() {
        var a = new Zi(this.b);
        a.ha = this.ha;
        a.ia = this.ia;
        return a
    };

    function $i(a, b) {
        Cf.call(this, a);
        this.d = b
    }
    A($i, If);

    function aj(a) {
        var b = [];
        bd(a.b.G(!0), function(a) {
            if ("bounded-collectable-storage" != a) {
                var d;
                try {
                    d = this.aa(a, !0)
                } catch (e) {
                    if ("Storage: Invalid value was encountered" == e) return;
                    throw e;
                }
                b.push({
                    key: a,
                    Da: d.creation
                })
            }
        }, a);
        Ma(b, function(a, b) {
            return a.Da - b.Da
        });
        return E(b, function(a) {
            return a.key
        })
    }

    function bj(a, b) {
        var c = $i.t.get.call(a, "bounded-collectable-storage") || null;
        c && u(c) || (c = b ? aj(a) : []);
        return c
    }

    function cj(a, b) {
        $i.t.set.call(a, "bounded-collectable-storage", b)
    }

    function dj(a, b) {
        if (0 == b.length) return Ia(a);
        for (var c = [], d = 0, e = 0; e < b.length && d < a.length;) {
            for (var f = b[e]; d < a.length && a[d] != f;) c.push(a[d]), ++d;
            ++e
        }
        return Ha(c, La(a, d + 1))
    }

    function ej(a, b, c) {
        if (b.length <= c) return Ia(b);
        c = La(b, 0, b.length - c);
        D(c, function(a) {
            $i.t.remove.call(this, a)
        }, a);
        return dj(b, c)
    }
    $i.prototype.set = function(a, b, c) {
        $i.t.set.call(this, a, b, c);
        c = bj(this, !0);
        Ga(c, a);
        s(b) && (c.push(a), c.length >= this.d && (a = Kf(this, c), c = dj(c, a), c = ej(this, c, this.d)));
        cj(this, c)
    };
    $i.prototype.remove = function(a) {
        $i.t.remove.call(this, a);
        var b = bj(this, !1);
        s(b) && (Ga(b, a), cj(this, b))
    };

    function fj(a, b) {
        if (P && !(P && 9 <= kc)) {
            gj || (gj = new dd);
            this.o = gj.get(a);
            this.o || (b ? this.o = document.getElementById(b) : (this.o = document.createElement("userdata"), this.o.addBehavior("#default#userData"), document.body.appendChild(this.o)), gj.set(a, this.o));
            this.ua = a;
            try {
                this.o.load(this.ua)
            } catch (c) {
                this.o = null
            }
        }
    }
    A(fj, yf);
    var hj = {
            ".": ".2E",
            "!": ".21",
            "~": ".7E",
            "*": ".2A",
            "'": ".27",
            "(": ".28",
            ")": ".29",
            "%": "."
        },
        gj = null;
    h = fj.prototype;
    h.o = null;
    h.ua = null;

    function ij(a) {
        return "_" + encodeURIComponent(a).replace(/[.!~*'()%]/g, function(a) {
            return hj[a]
        })
    }
    h.isAvailable = function() {
        return !!this.o
    };
    h.set = function(a, b) {
        this.o.setAttribute(ij(a), b);
        jj(this)
    };
    h.get = function(a) {
        a = this.o.getAttribute(ij(a));
        if (!v(a) && null !== a) throw "Storage mechanism: Invalid value was encountered";
        return a
    };
    h.remove = function(a) {
        this.o.removeAttribute(ij(a));
        jj(this)
    };
    h.G = function(a) {
        var b = 0,
            c = this.o.XMLDocument.documentElement.attributes,
            d = new $c;
        d.next = function() {
            if (b >= c.length) throw Zc;
            var d;
            d = c[b++];
            if (a) return decodeURIComponent(d.nodeName.replace(/\./g, "%")).substr(1);
            d = d.nodeValue;
            if (!v(d)) throw "Storage mechanism: Invalid value was encountered";
            return d
        };
        return d
    };
    h.clear = function() {
        for (var a = this.o.XMLDocument.documentElement, b = a.attributes.length; 0 < b; b--) a.removeAttribute(a.attributes[b - 1].nodeName);
        jj(this)
    };

    function jj(a) {
        try {
            a.o.save(a.ua)
        } catch (b) {
            throw "Storage mechanism: Quota exceeded";
        }
    };

    function kj(a, b) {
        this.S = a;
        this.L = b + "::"
    }
    A(kj, yf);
    h = kj.prototype;
    h.S = null;
    h.L = "";
    h.set = function(a, b) {
        this.S.set(this.L + a, b)
    };
    h.get = function(a) {
        return this.S.get(this.L + a)
    };
    h.remove = function(a) {
        this.S.remove(this.L + a)
    };
    h.G = function(a) {
        var b = this.S.G(!0),
            c = this,
            d = new $c;
        d.next = function() {
            for (var d = b.next(); d.substr(0, c.L.length) != c.L;) d = b.next();
            return a ? d.substr(c.L.length) : c.S.get(d)
        };
        return d
    };

    function lj(a) {
        var b = new Af;
        (b = b.isAvailable() ? a ? new kj(b, a) : b : null) || (a = new fj(a || "UserDataSharedStore"), b = a.isAvailable() ? a : null);
        return b
    };
    var mj = {
            like: "l",
            dislike: "d",
            subscribe: "b",
            unsubscribe: "u",
            add_to_playlist: "d",
            comment: "c",
            share: "h"
        },
        nj = null;

    function oj() {
        if (!nj) {
            var a = lj("history_channel_");
            if (!a) return null;
            nj = new $i(a, 50)
        }
        return nj
    }

    function pj(a) {
        return a ? new Vi(a.getFullYear(), a.getMonth(), a.getDate()) : new Vi
    };
    var qj;

    function rj(a, b) {
        var c = Di(b);
        if (c) {
            var d;
            var e;
            i: {
                if (null == qj) {
                    e = lj("aid");
                    if (!e) {
                        e = null;
                        break i
                    }
                    qj = new $i(e, 50)
                }
                e = qj
            }
            e ? (e = e.get(c), d = fa(e) ? e : null) : d = null;
            if (d) {
                e = {
                    foc_id: c,
                    aid: d.aid || "!aid",
                    label: "followon_" + a
                };
                if (d.ytfocHistoryEnabled) {
                    var f = new Vi;
                    d = mj[a] || "x";
                    var g = oj();
                    if (g) {
                        var k = g.get(c);
                        if (null == k) k = f.toString() + ":" + d;
                        else {
                            if (k = oj()) {
                                var l = k.get(c);
                                if (l) {
                                    var f = pj(f),
                                        m = l.substr(0, 8),
                                        n = new Zi(2E3),
                                        m = na(m),
                                        m = m.split(-1 == m.indexOf("T") ? " " : "T"),
                                        t;
                                    var r = m[0].match(Ri);
                                    if (r) {
                                        var N = Number(r[2]),
                                            hh =
                                            Number(r[3]),
                                            ih = Number(r[4]);
                                        t = Number(r[5]);
                                        var ka = Number(r[6]) || 1;
                                        n.b.setFullYear(Number(r[1]));
                                        ih ? (n.b.setDate(1), n.b.setMonth(0), n.add(new Ui("d", ih - 1))) : t ? (n.b.setMonth(0), n.b.setDate(1), r = n.b.getDay() || 7, n.add(new Ui("d", (4 >= r ? 1 - r : 8 - r) + (Number(ka) + 7 * (Number(t) - 1)) - 1))) : (N && (n.b.setDate(1), n.b.setMonth(N - 1)), hh && n.b.setDate(hh));
                                        t = !0
                                    } else t = !1;
                                    t && !(t = 2 > m.length) && (m = m[1], t = m.match(Ti), ka = 0, t && ("Z" != t[0] && (ka = 60 * t[2] + Number(t[3]), ka *= "-" == t[1] ? 1 : -1), ka -= n.b.getTimezoneOffset(), m = m.substr(0, m.length -
                                        t[0].length)), (t = m.match(Si)) ? (n.b.setHours(Number(t[1])), n.b.setMinutes(Number(t[2]) || 0), n.b.setSeconds(Number(t[3]) || 0), n.b.setMilliseconds(t[4] ? 1E3 * t[4] : 0), 0 != ka && n.b.setTime(n.getTime() + 6E4 * ka), t = !0) : t = !1);
                                    n = pj(t ? n : null);
                                    l = l.substr(9);
                                    for (m = new Ui("d", 1); 0 > n.getTime() - f.getTime();) l += "-", n.add(m);
                                    n = l ? l.split("-").length - 1 : 0;
                                    for (m = -1; 7 <= n;) m = l.indexOf("-", m + 1), --n;
                                    l = l.substr(m + 1, l.length);
                                    l = f.toString() + ":" + l;
                                    k.set(c, l, y() + 6048E5)
                                }
                            }
                            k = g.get(c) + d
                        }
                        g.set(c, k, y() + 6048E5)
                    }
                    if (d = oj())
                        if (c = d.get(c), null ==
                            c) c = null;
                        else {
                            c = c.substr(9);
                            l = f = k = g = d = 0;
                            n = "x";
                            for (m = 0; m < c.length - 1; m++) switch (c.charAt(m)) {
                                case "y":
                                case "o":
                                case "g":
                                    0 < k ? f += 1 : d += 1;
                                    break;
                                case "t":
                                case "f":
                                case "p":
                                    g += 1;
                                    break;
                                case "a":
                                    k += 1;
                                    break;
                                case "l":
                                case "b":
                                case "u":
                                case "d":
                                case "d":
                                case "c":
                                case "h":
                                    0 == k && (l = 1)
                            }
                            if (0 < c.length) switch (c.charAt(c.length - 1)) {
                                case "y":
                                case "o":
                                case "g":
                                    n = 0 < k ? "f" : "y";
                                    break;
                                case "t":
                                case "f":
                                case "p":
                                    n = "s";
                                    break;
                                case "a":
                                    n = "a";
                                    break;
                                case "l":
                                case "b":
                                case "u":
                                case "d":
                                case "d":
                                case "c":
                                case "h":
                                    n = c.charAt(c.length -
                                        1)
                            }
                            c = [n, "y" + d, "s" + g, "a" + k, "f" + f, "e" + l].join("")
                        }
                    else c = null;
                    e.h = c || ""
                }(e = Tc(Wc(["//www.gstatic.com/youtube/followonevent/l"], e))) && mi(e)
            }
        }
    };
    var sj = [];
    var tj = !1,
        $ = [];

    function uj(a, b, c, d, e, f) {
        b ? tj ? M("subscription-external-subscribe", a, b, null, d, e) : M("ypc-delayedloader-load", function() {
            M("ypc-init-subscription", b)
        }) : vj(a, c, d, e, f)
    }

    function wj(a, b, c, d, e, f, g) {
        c ? tj ? M("subscription-external-unsubscribe", a, b, c, null, e, f) : M("ypc-delayedloader-load", function() {
            M("ypc-subscription-cancel", c)
        }) : xj(a, b, d, e, f, g)
    }

    function yj(a) {
        if (a.length) {
            var b = Ka(a, 0, 40);
            M("subscription-batch-subscribe-loading", b);
            zj("subscription-subscribe-loading", b);
            var c = {};
            c.session_token = kb();
            c.a = b.join(",");
            var d = function() {
                M("subscription-batch-subscribe-loaded", b);
                zj("subscription-subscribe-loaded", b)
            };
            xd("/subscription_ajax?action_create_subscription_to_all=1", {
                method: "POST",
                J: c,
                onSuccess: function(c, f) {
                    d();
                    var g = f.response,
                        k = g.id;
                    if (u(k) && k.length == b.length) {
                        var l = {};
                        D(k, function(a, c) {
                            l[b[c]] = a
                        });
                        M("subscription-batch-subscribe-success",
                            l);
                        Qa(l, function(a, b) {
                            M("subscription-subscribe-success", b, a)
                        });
                        (g = g.guide_notification_html_content) && M("guide-add-subscription", g);
                        a.length && yj(a)
                    }
                },
                onError: function() {
                    d();
                    M("subscription-batch-subscribe-failure", b);
                    zj("subscription-subscribe-failure", b)
                }
            })
        }
    }

    function Aj(a) {
        if (!Va(a)) {
            var b = Sa(a),
                c = Ka(b, 0, 40),
                d = [];
            D(c, function(b) {
                d.push(a[b])
            });
            var e = {};
            D(b, function(b) {
                e[b] = a[b]
            });
            M("subscription-batch-unsubscribe-loading", c);
            zj("subscription-unsubscirbe-loading", c);
            b = {};
            b.session_token = kb();
            b.s = d.join(",");
            var f = function() {
                M("subscription-batch-unsubscribe-loaded", c);
                zj("subscription-unsubscribe-loaded", c)
            };
            xd("/subscription_ajax?action_remove_subscriptions=1", {
                method: "POST",
                J: b,
                onSuccess: function() {
                    f();
                    M("subscription-batch-unsubscribe-success", c);
                    zj("subscription-unsubscribe-success",
                        c);
                    Va(e) || Aj(e)
                },
                onError: function() {
                    f();
                    M("subscription-batch-unsubscribe-failure", c);
                    zj("subscription-unsubscribe-failure", c)
                }
            })
        }
    }

    function Bj(a, b, c) {
        Cj(a, b, null, c)
    }

    function Dj(a, b, c) {
        Cj(a, null, b, c)
    }

    function Ej(a, b, c) {
        Fj(a, b, null, c)
    }

    function Gj(a, b, c) {
        Fj(a, null, b, c)
    }

    function Hj(a, b, c, d) {
        Cj(a, b, c, d)
    }

    function Ij(a, b, c, d) {
        a = a.subscriptionElement || null;
        (b = b.subscriptionId) && M("subscription-subscribe-success", d, b, a)
    }

    function Jj(a, b) {
        Qa(a, function(a, b) {
            M("subscription-subscribe-success", b, a)
        });
        M("guide-add-subscription", b)
    }

    function Kj(a, b) {
        M("subscription-unsubscribe-success", a.itemId, a.subscriptionElement || null);
        b && (M("subscription-batch-unsubscribe-success", b), zj("subscription-unsubscribe-success", b), zj("subscription-enable-ypc", b))
    }

    function vj(a, b, c, d, e) {
        M("subscription-subscribe-loading", a);
        var f = {};
        f.c = a;
        d && (f.eurl = d);
        e && (f.source = e);
        d = {};
        d.session_token = kb();
        (e = J("PLAYBACK_ID")) && (d.plid = e);
        c && Lj("/subscription_ajax?action_create_subscription_to_channel=1", f, c);
        xd("/subscription_ajax?action_create_subscription_to_channel=1", {
            method: "POST",
            Ka: f,
            J: d,
            onSuccess: function(c, d) {
                var e = d.response;
                M("subscription-subscribe-success", a, e.id, b);
                e.show_feed_privacy_dialog && M("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG", a);
                (e = e.guide_notification_html_content) &&
                M("guide-add-subscription", e)
            },
            onError: function() {
                M("subscription-subscribe-failure", a)
            },
            ma: function() {
                M("subscription-subscribe-loaded", a)
            }
        });
        Ei("subscribe", a)
    }

    function xj(a, b, c, d, e, f) {
        M("subscription-unsubscirbe-loading", a);
        var g = {};
        e && (g.eurl = e);
        f && (g.source = f);
        e = {};
        e.session_token = kb();
        e.s = b;
        (b = J("PLAYBACK_ID")) && (e.plid = b);
        d && Lj("/subscription_ajax?action_remove_subscriptions=1", {}, d);
        xd("/subscription_ajax?action_remove_subscriptions=1", {
            method: "POST",
            Ka: g,
            J: e,
            onSuccess: function() {
                M("subscription-unsubscribe-success", a, c)
            },
            onError: function() {
                M("subscription-unsubscribe-failure", a)
            },
            ma: function() {
                M("subscription-unsubscribe-loaded", a)
            }
        });
        Ei("unsubscribe",
            a)
    }

    function Cj(a, b, c, d) {
        if (null !== b || null !== c) {
            M("subscription-prefs-loading", a);
            var e = {};
            e.session_token = kb();
            e.subscription_id = a;
            null === b || (e.email_on_upload = b);
            null === c || (e.uploads_only = c);
            xd("/subscription_ajax?action_update_subscription_preferences=1", {
                method: "POST",
                J: e,
                onSuccess: function() {
                    M("subscription-prefs-success", a)
                },
                onError: function() {
                    d && d();
                    M("subscription-prefs-failure", a)
                },
                ma: function() {
                    M("subscription-prefs-loaded", a)
                }
            })
        }
    }

    function Fj(a, b, c, d) {
        if (a.length && (null !== b || null !== c)) {
            var e = Ka(a, 0, 40);
            M("subscription-batch-prefs-loading", e);
            var f = {};
            f.session_token = kb();
            f.s = e.join(",");
            null === b || (f.email_on_upload = b);
            null === c || (f.uploads_only = c);
            var g = function() {
                M("subscription-batch-prefs-loaded", e)
            };
            xd("/subscription_ajax?action_update_subscription_preferences_batch=1", {
                method: "POST",
                J: f,
                onSuccess: function() {
                    g();
                    M("subscription-batch-prefs-success", e);
                    a.length && Fj(a, b, c, d)
                },
                onError: function() {
                    g();
                    d && d();
                    M("subscription-batch-prefs-failure",
                        e)
                }
            })
        }
    }

    function zj(a, b) {
        D(b, function(b) {
            M(a, b)
        })
    }

    function Lj(a, b, c) {
        a = rd(a, b);
        c = od(c);
        Pg(a, c)
    };
    var gi = null,
        Mj = null,
        Nj = {
            cc_load_policy: "cc3_module",
            threed_load_policy: "threed_module",
            streaminglib_load_policy: "streaminglib_module"
        },
        Oj = !1;

    function Pj(a) {
        var b = {};
        Qa(Nj, function(c) {
            a.args[c] && (b[c] = a.args[c], delete a.args[c])
        });
        return b
    };
    z("yt.abuse.invokeBotguard", function() {
        return Gb ? Gb.invoke() : null
    });
    z("yt.abuse.botguardInitialized", function() {
        return null != Gb
    });
    z("yt.setAjaxToken", jb);
    z("yt.setConfig", hb);
    z("yt.setMsg", function(a) {
        ib(gb, arguments)
    });
    z("yt.embed.openLoginDialog", function() {
        Yc(function(a) {
            if (gi.onLoginDialogSuccess) gi.onLoginDialogSuccess(a)
        })
    });
    z("writeEmbed", function() {
        var a = new le(J("PLAYER_CONFIG"));
        a.args.el = "embedded";
        window != window.top && document.referrer && document.referrer != document.URL && (a.args.loaderUrl = document.referrer);
        J("LIGHTWEIGHT_AUTOPLAY") && (a.args.autoplay = 1);
        if (a.args.autoplay) {
            var b = qg(a.args.video_id || a.args.videoId);
            b && (a.args.two_stage_token = b)
        }
        gi = kh("player", a);
        Mj = new Ni(gi);
        Oi(Mj, Nj, Pj(a));
        var b = a.args.eurl || "",
            c = J("POST_MESSAGE_ORIGIN", "");
        Oj = -1 < b.indexOf(c) && og(c) && og(b) && "0" == a.args.enablecastapi;
        b = !!a.args.fexp &&
            -1 < a.args.fexp.indexOf("926300");
        (Oj = "1" == a.args.enablecastapi || b && "0" != a.args.enablecastapi ? !1 : !0) ? bg(function() {
            Wf() && cast.isNonRelease && "0" != a.args.enablecastapi && (Oj = !1, fi(a))
        }): fi(a);
        J("BG_P") && (J("BG_I") || J("BG_IU")) && Hb();
        Z = gi;
        Z.addEventListener("SUBSCRIBE", pi);
        Z.addEventListener("UNSUBSCRIBE", ri);
        ni.push(L("subscription-subscribe-success", si));
        ni.push(L("subscription-unsubscribe-success", ti))
    });
    U(window, "load", function() {
        vi().tick.ol = y();
        var a = J("TIMING_ACTION"),
            b = !!J("TIMING_WFF"),
            c = vi().tick;
        a && c._start && (b && c.vr ? ui() : b || !c.ol && !c.aft || ui());
        tj = !0;
        $.push(L("subscription-subscribe", uj));
        $.push(L("subscription-unsubscribe", wj));
        tj || ($.push(L("subscription-external-subscribe", uj)), $.push(L("subscription-external-unsubscribe", wj)), $.push(L("subscription-batch-subscribe", yj)), $.push(L("subscription-batch-unsubscribe", Aj)), $.push(L("subscription-pref-email", Bj)), $.push(L("subscription-pref-uploads",
            Dj)), $.push(L("subscription-prefs", Hj)), $.push(L("subscription-batch-pref-email", Ej)), $.push(L("subscription-batch-pref-uploads", Gj)), $.push(L("ypc-purchase-success", Ij)), $.push(L("ypc-subscription-cancel-success", Kj)), $.push(L("ypc-guide-sync-success", Jj)), sj.push(L("subscription-subscribe-success", x(rj, "subscribe")), L("subscription-unsubscribe-success", x(rj, "unsubscribe")), L("player-subscribe", x(rj, "subscribe")), L("player-unsubscribe", x(rj, "unsubscribe"))))
    });
    U(window, "unload", function() {
        J("PL_ATT") && (Gb = null);
        $ && (yb($), $.length = 0, tj = !1);
        yb(sj);
        sj.length = 0;
        Z && (Z.removeEventListener("SUBSCRIBE", pi), Z.removeEventListener("UNSUBSCRIBE", ri));
        Z = null;
        yb(ni);
        if (!Oj) {
            yb(ei);
            ei = NaN;
            qh.getInstance().ka("onlineReceiverChange", ji);
            di && (di.removeEventListener("onRemoteReceiverSelected", ii), di.removeEventListener("onReady", hi), di = null);
            var a = Yf();
            if (a) {
                Xf("API disposed");
                var b = qf,
                    c = q("yt.mdx.remote.debug.handlers_");
                Ga(c, b);
                a.setReloadTabRequestHandler && a.setReloadTabRequestHandler(aa);
                a.removeReceiverListener("YouTube", eg);
                fg(null)
            }
            dg = !1;
            ag = null;
            (a = Mc(window, "message", $f, !1)) && Nc(a)
        }
        Mj.dispose();
        gi.destroy()
    });
    var Qj = he.getInstance(),
        Rj = W(Qj);
    Rj in Wd || (Qj.register(), Wd[Rj] = Qj);
})();