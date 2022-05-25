(function() {
    var k, l = this;

    function m(a) {
        a = a.split(".");
        for (var b = l, c; c = a.shift();)
            if (null != b[c]) b = b[c];
            else return null;
        return b
    }

    function aa(a) {
        a.getInstance = function() {
            return a.qa ? a.qa : a.qa = new a
        }
    }

    function ba(a) {
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

    function ca(a) {
        return void 0 !== a
    }

    function da(a) {
        return "array" == ba(a)
    }

    function ea(a) {
        var b = ba(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function r(a) {
        return "string" == typeof a
    }

    function fa(a) {
        return "function" == ba(a)
    }

    function ga(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function ha(a) {
        return a[ia] || (a[ia] = ++ja)
    }
    var ia = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ja = 0;

    function ka(a, b, c) {
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

    function s(a, b, c) {
        s = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ka : la;
        return s.apply(null, arguments)
    }

    function ma(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    }
    var oa = Date.now || function() {
        return +new Date
    };

    function t(a, b) {
        var c = a.split("."),
            d = l;
        c[0] in d || !d.execScript || d.execScript("var " + c[0]);
        for (var e; c.length && (e = c.shift());) c.length || void 0 === b ? d = d[e] ? d[e] : d[e] = {} : d[e] = b
    }

    function u(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.k = b.prototype;
        a.prototype = new c;
        a.Na = function(a, c, f) {
            var g = Array.prototype.slice.call(arguments, 2);
            return b.prototype[c].apply(a, g)
        }
    }
    Function.prototype.bind = Function.prototype.bind || function(a, b) {
        if (1 < arguments.length) {
            var c = Array.prototype.slice.call(arguments, 1);
            c.unshift(this, a);
            return s.apply(null, c)
        }
        return s(this, a)
    };
    var pa;

    function qa(a, b) {
        for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift();
        return d + c.join("%s")
    }

    function ra(a) {
        return decodeURIComponent(a.replace(/\+/g, " "))
    }

    function sa(a) {
        if (!ua.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(va, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(wa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(xa, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(ya, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(za, "&#39;"));
        return a
    }
    var va = /&/g,
        wa = /</g,
        xa = />/g,
        ya = /"/g,
        za = /'/g,
        ua = /[&<>"']/;

    function Aa(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }

    function Ba(a) {
        for (var b = 0, c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c), b %= 4294967296;
        return b
    }

    function Ca(a) {
        var b = r(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
        return a.replace(RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
            return b + e.toUpperCase()
        })
    };
    var w = Array.prototype,
        Da = w.indexOf ? function(a, b, c) {
            return w.indexOf.call(a, b, c)
        } : function(a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (r(a)) return r(b) && 1 == b.length ? a.indexOf(b, c) : -1;
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        x = w.forEach ? function(a, b, c) {
            w.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = r(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        Ea = w.filter ? function(a, b, c) {
            return w.filter.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = [], f = 0, g = r(a) ?
                    a.split("") : a, h = 0; h < d; h++)
                if (h in g) {
                    var n = g[h];
                    b.call(c, n, h, a) && (e[f++] = n)
                } return e
        },
        Fa = w.map ? function(a, b, c) {
            return w.map.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = Array(d), f = r(a) ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
            return e
        },
        Ga = w.some ? function(a, b, c) {
            return w.some.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = r(a) ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && b.call(c, e[f], f, a)) return !0;
            return !1
        },
        Ha = w.every ? function(a, b, c) {
            return w.every.call(a, b, c)
        } : function(a, b, c) {
            for (var d =
                    a.length, e = r(a) ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && !b.call(c, e[f], f, a)) return !1;
            return !0
        };

    function Ia(a, b) {
        var c;
        i: {
            c = a.length;
            for (var d = r(a) ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    c = e;
                    break i
                } c = -1
        }
        return 0 > c ? null : r(a) ? a.charAt(c) : a[c]
    }

    function Ja(a, b) {
        var c;
        i: {
            c = r(a) ? a.split("") : a;
            for (var d = a.length - 1; 0 <= d; d--)
                if (d in c && b.call(void 0, c[d], d, a)) {
                    c = d;
                    break i
                } c = -1
        }
        return 0 > c ? null : r(a) ? a.charAt(c) : a[c]
    }

    function Ka(a, b) {
        return 0 <= Da(a, b)
    }

    function La(a, b) {
        var c = Da(a, b),
            d;
        (d = 0 <= c) && w.splice.call(a, c, 1);
        return d
    }

    function Ma(a) {
        return w.concat.apply(w, arguments)
    }

    function Na(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function Oa(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c],
                e;
            if (da(d) || (e = ea(d)) && Object.prototype.hasOwnProperty.call(d, "callee")) a.push.apply(a, d);
            else if (e)
                for (var f = a.length, g = d.length, h = 0; h < g; h++) a[f + h] = d[h];
            else a.push(d)
        }
    }

    function Pa(a, b, c, d) {
        return w.splice.apply(a, Qa(arguments, 1))
    }

    function Qa(a, b, c) {
        return 2 >= arguments.length ? w.slice.call(a, b) : w.slice.call(a, b, c)
    }

    function Ra(a) {
        var b = [];
        if (0 > 1 * (a - 0)) return [];
        for (var c = 0; c < a; c += 1) b.push(c);
        return b
    }

    function Sa(a) {
        for (var b = [], c = 0; c < a; c++) b[c] = 0;
        return b
    };

    function Ta(a) {
        if (a.classList) return a.classList;
        a = a.className;
        return r(a) && a.match(/\S+/g) || []
    }

    function y(a, b) {
        return a.classList ? a.classList.contains(b) : Ka(Ta(a), b)
    }

    function z(a, b) {
        a.classList ? a.classList.add(b) : y(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
    }

    function Ua(a, b) {
        if (a.classList) x(b, function(b) {
            z(a, b)
        });
        else {
            var c = {};
            x(Ta(a), function(a) {
                c[a] = !0
            });
            x(b, function(a) {
                c[a] = !0
            });
            a.className = "";
            for (var d in c) a.className += 0 < a.className.length ? " " + d : d
        }
    }

    function A(a, b) {
        a.classList ? a.classList.remove(b) : y(a, b) && (a.className = Ea(Ta(a), function(a) {
            return a != b
        }).join(" "))
    }

    function Va(a, b) {
        a.classList ? x(b, function(b) {
            A(a, b)
        }) : a.className = Ea(Ta(a), function(a) {
            return !Ka(b, a)
        }).join(" ")
    }

    function Wa(a, b, c) {
        c ? z(a, b) : A(a, b)
    }

    function Xa(a, b) {
        var c = !y(a, b);
        Wa(a, b, c)
    };

    function Ya(a) {
        this.a = a
    }
    var Za = /\s*;\s*/;
    k = Ya.prototype;
    k.set = function(a, b, c, d, e, f) {
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        ca(c) || (c = -1);
        e = e ? ";domain=" + e : "";
        d = d ? ";path=" + d : "";
        f = f ? ";secure" : "";
        c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(oa() + 1E3 * c)).toUTCString();
        this.a.cookie = a + "=" + b + e + d + c + f
    };
    k.get = function(a, b) {
        for (var c = a + "=", d = (this.a.cookie || "").split(Za), e = 0, f; f = d[e]; e++) {
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };
    k.remove = function(a, b, c) {
        var d = ca(this.get(a));
        this.set(a, "", 0, b, c);
        return d
    };
    k.F = function() {
        return $a(this).keys
    };
    k.A = function() {
        return $a(this).Ca
    };
    k.clear = function() {
        for (var a = $a(this).keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b])
    };

    function $a(a) {
        a = (a.a.cookie || "").split(Za);
        for (var b = [], c = [], d, e, f = 0; e = a[f]; f++) d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        return {
            keys: b,
            Ca: c
        }
    }
    var ab = new Ya(document);
    ab.b = 3950;

    function bb(a, b, c, d, e) {
        ab.set("" + a, b, c, d || "/", e || "youtube.com")
    }

    function cb(a, b) {
        return ab.get("" + a, b)
    }

    function db(a, b, c) {
        return ab.remove("" + a, b || "/", c || "youtube.com")
    };

    function eb(a, b) {
        for (var c in a) b.call(void 0, a[c], c, a)
    }

    function fb(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    }

    function gb(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = d;
        return b
    }

    function hb(a) {
        var b = ib,
            c;
        for (c in b)
            if (a.call(void 0, b[c], c, b)) return c
    }
    var jb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function kb(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < jb.length; f++) c = jb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };

    function B(a, b, c) {
        a.dataset ? a.dataset[lb(b)] = c : a.setAttribute("data-" + b, c)
    }

    function C(a, b) {
        return a.dataset ? a.dataset[lb(b)] : a.getAttribute("data-" + b)
    }

    function mb(a, b) {
        a.dataset ? delete a.dataset[lb(b)] : a.removeAttribute("data-" + b)
    }
    var nb = {};

    function lb(a) {
        return nb[a] || (nb[a] = String(a).replace(/\-([a-z])/g, function(a, c) {
            return c.toUpperCase()
        }))
    };

    function ob() {}
    ob.prototype.i = !1;
    ob.prototype.U = function() {
        return this.i
    };
    ob.prototype.dispose = function() {
        this.i || (this.i = !0, this.t())
    };
    ob.prototype.t = function() {
        if (this.o)
            for (; this.o.length;) this.o.shift()()
    };

    function pb() {
        this.a = [];
        this.B = {}
    }
    u(pb, ob);
    k = pb.prototype;
    k.ka = 1;
    k.W = 0;
    k.la = function(a, b, c) {
        var d = this.B[a];
        d || (d = this.B[a] = []);
        var e = this.ka;
        this.a[e] = a;
        this.a[e + 1] = b;
        this.a[e + 2] = c;
        this.ka = e + 3;
        d.push(e);
        return e
    };
    k.ca = function(a) {
        if (0 != this.W) return this.b || (this.b = []), this.b.push(a), !1;
        var b = this.a[a];
        if (b) {
            var c = this.B[b];
            c && La(c, a);
            delete this.a[a];
            delete this.a[a + 1];
            delete this.a[a + 2]
        }
        return !!b
    };
    k.G = function(a, b) {
        var c = this.B[a];
        if (c) {
            this.W++;
            for (var d = Qa(arguments, 1), e = 0, f = c.length; e < f; e++) {
                var g = c[e];
                this.a[g + 1].apply(this.a[g + 2], d)
            }
            this.W--;
            if (this.b && 0 == this.W)
                for (; c = this.b.pop();) this.ca(c);
            return 0 != e
        }
        return !1
    };
    k.clear = function(a) {
        if (a) {
            var b = this.B[a];
            b && (x(b, this.ca, this), delete this.B[a])
        } else this.a.length = 0, this.B = {}
    };
    k.t = function() {
        pb.k.t.call(this);
        delete this.a;
        delete this.B;
        delete this.b
    };
    var qb = window.yt && window.yt.config_ || {};
    t("yt.config_", qb);
    var rb = window.yt && window.yt.tokens_ || {};
    t("yt.tokens_", rb);
    t("yt.msgs_", window.yt && window.yt.msgs_ || {});

    function sb(a) {
        var b = arguments;
        if (1 < b.length) {
            var c = b[0];
            qb[c] = b[1]
        } else
            for (c in b = b[0], b) qb[c] = b[c]
    }

    function E(a) {
        return a in qb ? qb[a] : void 0
    }

    function tb(a) {
        return a in rb ? rb[a] : void 0
    }

    function F(a, b) {
        if (fa(a) && m("ytsched.enableSetTimeout")) {
            var c = m("yt.scheduler.instance.addJob");
            if (c) return c(a, 0, b);
            t("ytsched.enableSetTimeout", !1)
        }
        fa(a) && (a = ub(a));
        return window.setTimeout(a, b)
    }

    function vb(a) {
        m("ytsched.enableSetTimeout") ? m("yt.scheduler.instance.cancelJob")(a) : window.clearTimeout(a)
    }

    function ub(a) {
        return a && window.yterr ? function() {
            try {
                return a.apply(this, arguments)
            } catch (b) {
                throw wb(b), b;
            }
        } : a
    }

    function wb(a) {
        if (window && window.yterr) {
            var b = m("yt.www.errors.log");
            b ? b(a, void 0) : (b = E("ERRORS") || [], b.push(a), sb("ERRORS", b))
        }
    };

    function xb() {
        return m("yt.scheduler.instance") && !m("ytsched.enableSetTimeout")
    }

    function yb(a) {
        var b = void 0;
        void 0 === b && (b = NaN);
        var c = m("yt.scheduler.instance.addJob");
        c ? (isNaN(b) && (b = 0), a = c(a, 0, b)) : isNaN(b) ? (a(), a = void 0) : a = F(a, b || 0);
        return a
    }
    m("yt.scheduler.instance.cancelJob");
    var zb = m("yt.pubsub.instance_") || new pb;
    pb.prototype.subscribe = pb.prototype.la;
    pb.prototype.unsubscribeByKey = pb.prototype.ca;
    pb.prototype.publish = pb.prototype.G;
    pb.prototype.clear = pb.prototype.clear;
    t("yt.pubsub.instance_", zb);
    var Ab = m("yt.pubsub.subscribedKeys_") || {};
    t("yt.pubsub.subscribedKeys_", Ab);
    var Bb = m("yt.pubsub.topicToKeys_") || {};
    t("yt.pubsub.topicToKeys_", Bb);
    var Cb = m("yt.pubsub.isSynchronous_") || {};
    t("yt.pubsub.isSynchronous_", Cb);
    var Db = m("yt.pubsub.skipSubId_") || null;
    t("yt.pubsub.skipSubId_", Db);

    function G(a, b, c) {
        var d = Eb();
        if (d) {
            var e = d.subscribe(a, function() {
                if (!Db || Db != e) {
                    var d = arguments,
                        g = function() {
                            Ab[e] && b.apply(c || window, d)
                        };
                    try {
                        Cb[a] ? g() : xb() ? yb(g) : F(g, 0)
                    } catch (h) {
                        wb(h)
                    }
                }
            }, c);
            Ab[e] = !0;
            Bb[a] || (Bb[a] = []);
            Bb[a].push(e);
            return e
        }
        return 0
    }

    function Fb(a) {
        var b = Eb();
        b && ("number" == typeof a ? a = [a] : "string" == typeof a && (a = [parseInt(a, 10)]), x(a, function(a) {
            b.unsubscribeByKey(a);
            delete Ab[a]
        }))
    }

    function Gb(a, b) {
        var c = Eb();
        c && c.publish.apply(c, arguments)
    }

    function Hb(a) {
        Bb[a] && (a = Bb[a], x(a, function(a) {
            Ab[a] && delete Ab[a]
        }), a.length = 0)
    }

    function Ib(a) {
        var b = Eb();
        if (b)
            if (b.clear(a), a) Hb(a);
            else
                for (var c in Bb) Hb(c)
    }

    function Eb() {
        return m("yt.pubsub.instance_")
    };

    function Jb(a) {
        Kb(E("YOODLE_JS_URL"), a)
    }

    function Kb(a, b) {
        var c = Lb(a),
            d = document.getElementById(c),
            e = d && C(d, "loaded"),
            f = d && !e;
        if (e) b && b();
        else {
            if (b) {
                var e = G(c, b),
                    g = "" + ha(b);
                Mb[g] = e
            }
            f || (d = Nb(a, c, function() {
                if (!C(d, "loaded")) {
                    B(d, "loaded", "true");
                    Gb(c);
                    var a = ma(Ib, c);
                    xb() ? yb(a) : F(a, 0)
                }
            }))
        }
    }

    function Nb(a, b, c) {
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

    function Lb(a) {
        var b = document.createElement("a");
        b.href = a;
        a = b.href.replace(/^[a-zA-Z]+:\/\//, "//");
        return "js-" + Ba(a)
    }
    var Mb = {};

    function Ob(a, b) {
        return Pb(a, b)
    }

    function Qb(a, b, c) {
        if (a = E(a)) {
            var d = ma(Ob, a, b);
            if (c) var e = G(c, function() {
                Fb(e);
                d()
            });
            else d()
        }
    }

    function Pb(a, b) {
        var c = Rb(a),
            d = document.getElementById(c),
            e = d && C(d, "loaded"),
            f = d && !e;
        if (e) return b && b(), d;
        b && (G(c, b), ha(b));
        return f ? d : d = Sb(a, c, function() {
            if (!C(d, "loaded")) {
                B(d, "loaded", "true");
                Gb(c);
                var a = ma(Ib, c);
                xb() ? yb(a) : F(a, 0)
            }
        })
    }

    function Sb(a, b, c) {
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

    function Rb(a) {
        var b = document.createElement("a");
        b.href = a;
        a = b.href.replace(/^[a-zA-Z]+:\/\//, "//");
        return "css-" + Ba(a)
    };

    function Tb(a) {
        a = a.className;
        return r(a) && a.match(/\S+/g) || []
    }

    function H(a, b) {
        var c = Tb(a),
            d = Qa(arguments, 1),
            e = c.length + d.length;
        Ub(c, d);
        d = c.join(" ");
        a.className = d;
        return c.length == e
    }

    function Vb(a, b) {
        var c = Tb(a),
            d = Qa(arguments, 1),
            c = Wb(c, d).join(" ");
        a.className = c
    }

    function Ub(a, b) {
        for (var c = 0; c < b.length; c++) Ka(a, b[c]) || a.push(b[c])
    }

    function Wb(a, b) {
        return Ea(a, function(a) {
            return !Ka(b, a)
        })
    }

    function Xb(a, b, c) {
        var d = Tb(a);
        r(b) ? La(d, b) : da(b) && (d = Wb(d, b));
        r(c) && !Ka(d, c) ? d.push(c) : da(c) && Ub(d, c);
        b = d.join(" ");
        a.className = b
    }

    function I(a, b) {
        return Ka(Tb(a), b)
    }

    function Yb(a, b, c) {
        c ? H(a, b) : Vb(a, b)
    }

    function Zb(a, b) {
        var c = !I(a, b);
        Yb(a, b, c);
        return c
    };

    function $b(a) {
        var b;
        b = b || 0;
        return function() {
            return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
        }
    };

    function J(a, b) {
        this.x = ca(a) ? a : 0;
        this.y = ca(b) ? b : 0
    }
    J.prototype.clone = function() {
        return new J(this.x, this.y)
    };

    function ac(a, b) {
        return new J(a.x - b.x, a.y - b.y)
    }
    J.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    J.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    J.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };

    function bc(a, b) {
        this.width = a;
        this.height = b
    }
    bc.prototype.clone = function() {
        return new bc(this.width, this.height)
    };
    bc.prototype.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    bc.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    bc.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var cc, dc, ec, fc, gc;

    function hc() {
        return l.navigator ? l.navigator.userAgent : null
    }

    function ic() {
        return l.navigator
    }
    fc = ec = dc = cc = !1;
    var jc;
    if (jc = hc()) {
        var kc = ic();
        cc = 0 == jc.lastIndexOf("Opera", 0);
        dc = !cc && (-1 != jc.indexOf("MSIE") || -1 != jc.indexOf("Trident"));
        ec = !cc && -1 != jc.indexOf("WebKit");
        fc = !cc && !ec && !dc && "Gecko" == kc.product
    }
    var lc = cc,
        K = dc,
        mc = fc,
        nc = ec,
        oc = ic();
    gc = -1 != (oc && oc.platform || "").indexOf("Mac");
    var pc = !!ic() && -1 != (ic().appVersion || "").indexOf("X11");

    function qc() {
        var a = l.document;
        return a ? a.documentMode : void 0
    }
    var rc;
    i: {
        var sc = "",
            tc;
        if (lc && l.opera) var uc = l.opera.version,
            sc = "function" == typeof uc ? uc() : uc;
        else if (mc ? tc = /rv\:([^\);]+)(\)|;)/ : K ? tc = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : nc && (tc = /WebKit\/(\S+)/), tc) var vc = tc.exec(hc()),
            sc = vc ? vc[1] : "";
        if (K) {
            var wc = qc();
            if (wc > parseFloat(sc)) {
                rc = String(wc);
                break i
            }
        }
        rc = sc
    }
    var xc = rc,
        yc = {};

    function M(a) {
        var b;
        if (!(b = yc[a])) {
            b = 0;
            for (var c = String(xc).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var g = c[f] || "",
                    h = d[f] || "",
                    n = RegExp("(\\d*)(\\D*)", "g"),
                    p = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var q = n.exec(g) || ["", "", ""],
                        v = p.exec(h) || ["", "", ""];
                    if (0 == q[0].length && 0 == v[0].length) break;
                    b = Aa(0 == q[1].length ? 0 : parseInt(q[1], 10), 0 == v[1].length ? 0 : parseInt(v[1], 10)) || Aa(0 == q[2].length, 0 == v[2].length) ||
                        Aa(q[2], v[2])
                } while (0 == b)
            }
            b = yc[a] = 0 <= b
        }
        return b
    }
    var zc = l.document,
        Ac = zc && K ? qc() || ("CSS1Compat" == zc.compatMode ? parseInt(xc, 10) : 5) : void 0;
    var Bc = !K || K && 9 <= Ac,
        Cc = !mc && !K || K && K && 9 <= Ac || mc && M("1.9.1"),
        Dc = K && !M("9"),
        Ec = K || lc || nc;

    function Fc(a) {
        return a ? new Gc(Hc(a)) : pa || (pa = new Gc)
    }

    function N(a) {
        return r(a) ? document.getElementById(a) : a
    }

    function O(a, b) {
        var c = b || document;
        return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : Ic("*", a, b)
    }

    function P(a, b) {
        var c = b || document,
            d = null;
        return (d = c.querySelectorAll && c.querySelector ? c.querySelector("." + a) : Ic("*", a, b)[0]) || null
    }

    function Ic(a, b, c) {
        var d = document;
        c = c || d;
        a = a && "*" != a ? a.toUpperCase() : "";
        if (c.querySelectorAll && c.querySelector && (a || b)) return c.querySelectorAll(a + (b ? "." + b : ""));
        if (b && c.getElementsByClassName) {
            c = c.getElementsByClassName(b);
            if (a) {
                for (var d = {}, e = 0, f = 0, g; g = c[f]; f++) a == g.nodeName && (d[e++] = g);
                d.length = e;
                return d
            }
            return c
        }
        c = c.getElementsByTagName(a || "*");
        if (b) {
            d = {};
            for (f = e = 0; g = c[f]; f++) a = g.className, "function" == typeof a.split && Ka(a.split(/\s+/), b) && (d[e++] = g);
            d.length = e;
            return d
        }
        return c
    }

    function Jc(a, b) {
        eb(b, function(b, d) {
            "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Kc ? a.setAttribute(Kc[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
        })
    }
    var Kc = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function Lc(a) {
        a = a.document;
        a = Mc(a) ? a.documentElement : a.body;
        return new bc(a.clientWidth, a.clientHeight)
    }

    function Nc(a) {
        var b = Oc(a);
        a = Pc(a);
        return K && M("10") && a.pageYOffset != b.scrollTop ? new J(b.scrollLeft, b.scrollTop) : new J(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function Oc(a) {
        return !nc && Mc(a) ? a.documentElement : a.body || a.documentElement
    }

    function Pc(a) {
        return a.parentWindow || a.defaultView
    }

    function Qc(a, b, c) {
        var d = arguments,
            e = document,
            f = d[0],
            g = d[1];
        if (!Bc && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', sa(g.name), '"');
            if (g.type) {
                f.push(' type="', sa(g.type), '"');
                var h = {};
                kb(h, g);
                delete h.type;
                g = h
            }
            f.push(">");
            f = f.join("")
        }
        f = e.createElement(f);
        g && (r(g) ? f.className = g : da(g) ? H.apply(null, [f].concat(g)) : Jc(f, g));
        2 < d.length && Rc(e, f, d, 2);
        return f
    }

    function Rc(a, b, c, d) {
        function e(c) {
            c && b.appendChild(r(c) ? a.createTextNode(c) : c)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            !ea(f) || ga(f) && 0 < f.nodeType ? e(f) : x(Sc(f) ? Na(f) : f, e)
        }
    }

    function Tc(a) {
        var b = document,
            c = b.createElement("div");
        K ? (c.innerHTML = "<br>" + a, c.removeChild(c.firstChild)) : c.innerHTML = a;
        if (1 == c.childNodes.length) return c.removeChild(c.firstChild);
        for (a = b.createDocumentFragment(); c.firstChild;) a.appendChild(c.firstChild);
        return a
    }

    function Mc(a) {
        return "CSS1Compat" == a.compatMode
    }

    function Uc(a, b) {
        Rc(Hc(a), a, arguments, 1)
    }

    function Vc(a) {
        for (var b; b = a.firstChild;) a.removeChild(b)
    }

    function Wc(a, b) {
        a.insertBefore(b, a.childNodes[0] || null)
    }

    function Xc(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    }

    function Yc(a, b) {
        var c = b.parentNode;
        c && c.replaceChild(a, b)
    }

    function Zc(a) {
        return Cc && void 0 != a.children ? a.children : Ea(a.childNodes, function(a) {
            return 1 == a.nodeType
        })
    }

    function $c(a) {
        return void 0 != a.firstElementChild ? a.firstElementChild : ad(a.firstChild, !0)
    }

    function ad(a, b) {
        for (; a && 1 != a.nodeType;) a = b ? a.nextSibling : a.previousSibling;
        return a
    }

    function bd(a) {
        if (Ec && !(K && M("9") && !M("10") && l.SVGElement && a instanceof l.SVGElement)) return a.parentElement;
        a = a.parentNode;
        return ga(a) && 1 == a.nodeType ? a : null
    }

    function cd(a, b) {
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    }

    function Hc(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }

    function dd(a, b) {
        if ("textContent" in a) a.textContent = b;
        else if (3 == a.nodeType) a.data = b;
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
            a.firstChild.data = b
        } else Vc(a), a.appendChild(Hc(a).createTextNode(String(b)))
    }
    var ed = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        fd = {
            IMG: " ",
            BR: "\n"
        };

    function gd(a) {
        if (Dc && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
        else {
            var b = [];
            hd(a, b, !0);
            a = b.join("")
        }
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        Dc || (a = a.replace(/ +/g, " "));
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }

    function hd(a, b, c) {
        if (!(a.nodeName in ed))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in fd) b.push(fd[a.nodeName]);
        else
            for (a = a.firstChild; a;) hd(a, b, c), a = a.nextSibling
    }

    function Sc(a) {
        if (a && "number" == typeof a.length) {
            if (ga(a)) return "function" == typeof a.item || "string" == typeof a.item;
            if (fa(a)) return "function" == typeof a.item
        }
        return !1
    }

    function id(a, b, c) {
        if (!b && !c) return null;
        var d = b ? b.toUpperCase() : null;
        return jd(a, function(a) {
            return (!d || a.nodeName == d) && (!c || I(a, c))
        })
    }

    function Q(a, b) {
        return id(a, null, b)
    }

    function jd(a, b, c) {
        for (var d = null == c, e = 0; a && (d || e <= c);) {
            if (b(a)) return a;
            a = a.parentNode;
            e++
        }
        return null
    }

    function Gc(a) {
        this.a = a || l.document || document
    }
    k = Gc.prototype;
    k.ma = function(a) {
        return r(a) ? this.a.getElementById(a) : a
    };
    k.createElement = function(a) {
        return this.a.createElement(a)
    };

    function kd(a) {
        return Mc(a.a)
    }

    function ld(a) {
        return Nc(a.a)
    }
    k.appendChild = function(a, b) {
        a.appendChild(b)
    };
    k.getChildren = Zc;
    k.contains = cd;

    function md(a) {
        md[" "](a);
        return a
    }
    md[" "] = function() {};
    var nd = !K || K && 9 <= Ac,
        od = K && !M("9");
    !nc || M("528");
    mc && M("1.9b") || K && M("8") || lc && M("9.5") || nc && M("528");
    mc && !M("8") || K && M("9");

    function pd(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.b = !1
    }
    pd.prototype.dispose = function() {};
    pd.prototype.stopPropagation = function() {
        this.b = !0
    };
    pd.prototype.preventDefault = function() {
        this.defaultPrevented = !0
    };
    var qd = nc ? "webkitTransitionEnd" : lc ? "otransitionend" : "transitionend";

    function rd(a, b) {
        pd.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.charCode = this.keyCode = this.clientY = this.clientX = 0;
        this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.a = null;
        a && this.init(a, b)
    }
    u(rd, pd);
    rd.prototype.init = function(a, b) {
        var c = this.type = a.type;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var d = a.relatedTarget;
        if (d) {
            if (mc) {
                var e;
                i: {
                    try {
                        md(d.nodeName);
                        e = !0;
                        break i
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
        this.a = a;
        a.defaultPrevented && this.preventDefault()
    };
    rd.prototype.stopPropagation = function() {
        rd.k.stopPropagation.call(this);
        this.a.stopPropagation ? this.a.stopPropagation() : this.a.cancelBubble = !0
    };
    rd.prototype.preventDefault = function() {
        rd.k.preventDefault.call(this);
        var a = this.a;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, od) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    rd.prototype.d = function() {
        return this.a
    };
    var sd = "closure_listenable_" + (1E6 * Math.random() | 0);

    function td(a) {
        try {
            return !(!a || !a[sd])
        } catch (b) {
            return !1
        }
    }
    var ud = 0;

    function vd(a, b, c, d, e) {
        this.Q = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.a = e;
        this.key = ++ud;
        this.removed = this.da = !1
    }

    function wd(a) {
        a.removed = !0;
        a.Q = null;
        a.proxy = null;
        a.src = null;
        a.a = null
    };

    function xd(a) {
        this.src = a;
        this.a = {};
        this.b = 0
    }
    xd.prototype.add = function(a, b, c, d, e) {
        var f = this.a[a];
        f || (f = this.a[a] = [], this.b++);
        var g = yd(f, b, d, e); - 1 < g ? (a = f[g], c || (a.da = !1)) : (a = new vd(b, this.src, a, !!d, e), a.da = c, f.push(a));
        return a
    };
    xd.prototype.remove = function(a, b, c, d) {
        if (!(a in this.a)) return !1;
        var e = this.a[a];
        b = yd(e, b, c, d);
        return -1 < b ? (wd(e[b]), w.splice.call(e, b, 1), 0 == e.length && (delete this.a[a], this.b--), !0) : !1
    };

    function zd(a, b) {
        var c = b.type;
        if (!(c in a.a)) return !1;
        var d = La(a.a[c], b);
        d && (wd(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
        return d
    }
    xd.prototype.removeAll = function(a) {
        var b = 0,
            c;
        for (c in this.a)
            if (!a || c == a) {
                for (var d = this.a[c], e = 0; e < d.length; e++) ++b, wd(d[e]);
                delete this.a[c];
                this.b--
            } return b
    };

    function Ad(a, b, c, d, e) {
        a = a.a[b];
        b = -1;
        a && (b = yd(a, c, d, e));
        return -1 < b ? a[b] : null
    }

    function yd(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.removed && f.Q == b && f.capture == !!c && f.a == d) return e
        }
        return -1
    };
    var Bd = "closure_lm_" + (1E6 * Math.random() | 0),
        Cd = {},
        Dd = 0;

    function Ed(a, b, c, d, e) {
        if (da(b)) {
            for (var f = 0; f < b.length; f++) Ed(a, b[f], c, d, e);
            return null
        }
        c = Fd(c);
        if (td(a)) a = a.listen(b, c, d, e);
        else {
            if (!b) throw Error("Invalid event type");
            var f = !!d,
                g = Gd(a);
            g || (a[Bd] = g = new xd(a));
            c = g.add(b, c, !1, d, e);
            c.proxy || (d = Hd(), c.proxy = d, d.src = a, d.Q = c, a.addEventListener ? a.addEventListener(b, d, f) : a.attachEvent(b in Cd ? Cd[b] : Cd[b] = "on" + b, d), Dd++);
            a = c
        }
        return a
    }

    function Hd() {
        var a = Id,
            b = nd ? function(c) {
                return a.call(b.src, b.Q, c)
            } : function(c) {
                c = a.call(b.src, b.Q, c);
                if (!c) return c
            };
        return b
    }

    function Jd(a, b, c, d, e) {
        if (da(b))
            for (var f = 0; f < b.length; f++) Jd(a, b[f], c, d, e);
        else c = Fd(c), td(a) ? a.ea(b, c, d, e) : a && (a = Gd(a)) && (b = Ad(a, b, c, !!d, e)) && Kd(b)
    }

    function Kd(a) {
        if ("number" == typeof a || !a || a.removed) return !1;
        var b = a.src;
        if (td(b)) return zd(b.O, a);
        var c = a.type,
            d = a.proxy;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(c in Cd ? Cd[c] : Cd[c] = "on" + c, d);
        Dd--;
        (c = Gd(b)) ? (zd(c, a), 0 == c.b && (c.src = null, b[Bd] = null)) : wd(a);
        return !0
    }

    function Ld(a, b, c, d) {
        var e = 1;
        if (a = Gd(a))
            if (b = a.a[b])
                for (b = Na(b), a = 0; a < b.length; a++) {
                    var f = b[a];
                    f && f.capture == c && !f.removed && (e &= !1 !== Md(f, d))
                }
        return Boolean(e)
    }

    function Md(a, b) {
        var c = a.Q,
            d = a.a || a.src;
        a.da && Kd(a);
        return c.call(d, b)
    }

    function Id(a, b) {
        if (a.removed) return !0;
        if (!nd) {
            var c = b || m("window.event"),
                d = new rd(c, this),
                e = !0;
            if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                i: {
                    var f = !1;
                    if (0 == c.keyCode) try {
                        c.keyCode = -1;
                        break i
                    } catch (g) {
                        f = !0
                    }
                    if (f || void 0 == c.returnValue) c.returnValue = !0
                }
                c = [];
                for (f = d.currentTarget; f; f = f.parentNode) c.push(f);
                for (var f = a.type, h = c.length - 1; !d.b && 0 <= h; h--) d.currentTarget = c[h],
                e &= Ld(c[h], f, !0, d);
                for (h = 0; !d.b && h < c.length; h++) d.currentTarget = c[h],
                e &= Ld(c[h], f, !1, d)
            }
            return e
        }
        return Md(a, new rd(b, this))
    }

    function Gd(a) {
        a = a[Bd];
        return a instanceof xd ? a : null
    }
    var Nd = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function Fd(a) {
        return fa(a) ? a : a[Nd] || (a[Nd] = function(b) {
            return a.handleEvent(b)
        })
    };

    function Od(a) {
        this.b = a;
        this.a = {}
    }
    u(Od, ob);
    var Pd = [];
    k = Od.prototype;
    k.listen = function(a, b, c, d) {
        da(b) || (Pd[0] = b, b = Pd);
        for (var e = 0; e < b.length; e++) {
            var f = Ed(a, b[e], c || this.handleEvent, d || !1, this.b || this);
            if (!f) break;
            this.a[f.key] = f
        }
        return this
    };
    k.ea = function(a, b, c, d, e) {
        if (da(b))
            for (var f = 0; f < b.length; f++) this.ea(a, b[f], c, d, e);
        else c = c || this.handleEvent, e = e || this.b || this, c = Fd(c), d = !!d, b = td(a) ? Ad(a.O, String(b), c, d, e) : a ? (a = Gd(a)) ? Ad(a, b, c, d, e) : null : null, b && (Kd(b), delete this.a[b.key]);
        return this
    };
    k.removeAll = function() {
        eb(this.a, Kd);
        this.a = {}
    };
    k.t = function() {
        Od.k.t.call(this);
        this.removeAll()
    };
    k.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };

    function Qd(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    k = Qd.prototype;
    k.clone = function() {
        return new Qd(this.top, this.right, this.bottom, this.left)
    };
    k.contains = function(a) {
        return this && a ? a instanceof Qd ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    k.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    k.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    k.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };

    function Rd(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }
    k = Rd.prototype;
    k.clone = function() {
        return new Rd(this.left, this.top, this.width, this.height)
    };
    k.contains = function(a) {
        return a instanceof Rd ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
    };
    k.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    k.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    k.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function Sd(a, b) {
        var c = Hc(a);
        return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
    }

    function Td(a, b) {
        return Sd(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function Ud(a) {
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
        K && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    }

    function Vd(a) {
        if (K && !(K && 8 <= Ac)) return a.offsetParent;
        var b = Hc(a),
            c = Td(a, "position"),
            d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (c = Td(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
        return null
    }

    function Wd(a) {
        for (var b = new Qd(0, Infinity, Infinity, 0), c = Fc(a), d = c.a.body, e = c.a.documentElement, f = Oc(c.a); a = Vd(a);)
            if (!(K && 0 == a.clientWidth || nc && 0 == a.clientHeight && a == d || a == d || a == e || "visible" == Td(a, "overflow"))) {
                var g = Xd(a),
                    h;
                h = a;
                if (mc && !M("1.9")) {
                    var n = parseFloat(Sd(h, "borderLeftWidth"));
                    if (Yd(h)) var p = h.offsetWidth - h.clientWidth - n - parseFloat(Sd(h, "borderRightWidth")),
                        n = n + p;
                    h = new J(n, parseFloat(Sd(h, "borderTopWidth")))
                } else h = new J(h.clientLeft, h.clientTop);
                g.x += h.x;
                g.y += h.y;
                b.top = Math.max(b.top,
                    g.y);
                b.right = Math.min(b.right, g.x + a.clientWidth);
                b.bottom = Math.min(b.bottom, g.y + a.clientHeight);
                b.left = Math.max(b.left, g.x)
            } d = f.scrollLeft;
        f = f.scrollTop;
        b.left = Math.max(b.left, d);
        b.top = Math.max(b.top, f);
        c = Lc(Pc(c.a) || window);
        b.right = Math.min(b.right, d + c.width);
        b.bottom = Math.min(b.bottom, f + c.height);
        return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
    }

    function Zd(a, b) {
        var c, d = Xd(a),
            e = Xd(b),
            f = $d(b);
        c = d.x - e.x - f.left;
        var d = d.y - e.y - f.top,
            e = b.clientHeight - a.offsetHeight,
            f = b.scrollLeft,
            g = b.scrollTop,
            f = f + Math.min(c, Math.max(c - (b.clientWidth - a.offsetWidth), 0)),
            g = g + Math.min(d, Math.max(d - e, 0));
        c = new J(f, g);
        b.scrollLeft = c.x;
        b.scrollTop = c.y
    }

    function Xd(a) {
        var b, c = Hc(a),
            d = Td(a, "position"),
            e = mc && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY),
            f = new J(0, 0),
            g;
        b = c ? Hc(c) : document;
        g = !K || K && 9 <= Ac || kd(Fc(b)) ? b.documentElement : b.body;
        if (a == g) return f;
        if (a.getBoundingClientRect) b = Ud(a), a = ld(Fc(c)), f.x = b.left + a.x, f.y = b.top + a.y;
        else if (c.getBoxObjectFor && !e) b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(g), f.x = b.screenX - a.screenX, f.y = b.screenY - a.screenY;
        else {
            b = a;
            do {
                f.x += b.offsetLeft;
                f.y +=
                    b.offsetTop;
                b != a && (f.x += b.clientLeft || 0, f.y += b.clientTop || 0);
                if (nc && "fixed" == Td(b, "position")) {
                    f.x += c.body.scrollLeft;
                    f.y += c.body.scrollTop;
                    break
                }
                b = b.offsetParent
            } while (b && b != a);
            if (lc || nc && "absolute" == d) f.y -= c.body.offsetTop;
            for (b = a;
                (b = Vd(b)) && b != c.body && b != g;) f.x -= b.scrollLeft, lc && "TR" == b.tagName || (f.y -= b.scrollTop)
        }
        return f
    }

    function ae(a) {
        var b;
        if (a.getBoundingClientRect) b = Ud(a), b = new J(b.left, b.top);
        else {
            b = ld(Fc(a));
            var c = Xd(a);
            b = new J(c.x - b.x, c.y - b.y)
        }
        if (mc && !M(12)) {
            var d;
            K ? d = "-ms-transform" : nc ? d = "-webkit-transform" : lc ? d = "-o-transform" : mc && (d = "-moz-transform");
            var e;
            d && (e = Td(a, d));
            e || (e = Td(a, "transform"));
            a = e ? (a = e.match(be)) ? new J(parseFloat(a[1]), parseFloat(a[2])) : new J(0, 0) : new J(0, 0);
            a = new J(b.x + a.x, b.y + a.y)
        } else a = b;
        return a
    }

    function ce(a) {
        if (1 == a.nodeType) return ae(a);
        var b = fa(a.d),
            c = a;
        a.targetTouches ? c = a.targetTouches[0] : b && a.a.targetTouches && (c = a.a.targetTouches[0]);
        return new J(c.clientX, c.clientY)
    }

    function de(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    }

    function S(a) {
        var b = ee;
        if ("none" != Td(a, "display")) return b(a);
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

    function ee(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = nc && !b && !c;
        return ca(b) && !d || !a.getBoundingClientRect ? new bc(b, c) : (a = Ud(a), new bc(a.right - a.left, a.bottom - a.top))
    }

    function fe(a) {
        var b = Xd(a);
        a = S(a);
        return new Rd(b.x, b.y, a.width, a.height)
    }

    function Yd(a) {
        return "rtl" == Td(a, "direction")
    }

    function ge(a, b) {
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

    function he(a, b) {
        var c = a.currentStyle ? a.currentStyle[b] : null;
        return c ? ge(a, c) : 0
    }

    function ie(a) {
        if (K) {
            var b = he(a, "paddingLeft"),
                c = he(a, "paddingRight"),
                d = he(a, "paddingTop");
            a = he(a, "paddingBottom");
            return new Qd(d, c, a, b)
        }
        b = Sd(a, "paddingLeft");
        c = Sd(a, "paddingRight");
        d = Sd(a, "paddingTop");
        a = Sd(a, "paddingBottom");
        return new Qd(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
    }
    var je = {
        thin: 2,
        medium: 4,
        thick: 6
    };

    function ke(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
        var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return c in je ? je[c] : ge(a, c)
    }

    function $d(a) {
        if (K && !(K && 9 <= Ac)) {
            var b = ke(a, "borderLeft"),
                c = ke(a, "borderRight"),
                d = ke(a, "borderTop");
            a = ke(a, "borderBottom");
            return new Qd(d, c, a, b)
        }
        b = Sd(a, "borderLeftWidth");
        c = Sd(a, "borderRightWidth");
        d = Sd(a, "borderTopWidth");
        a = Sd(a, "borderBottomWidth");
        return new Qd(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
    }
    var be = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;

    function T(a, b) {
        (a = N(a)) && a.style && (a.style.display = b ? "" : "none", Wa(a, "hid", !b))
    }

    function le(a) {
        return (a = N(a)) ? !("none" == a.style.display || y(a, "hid")) : !1
    }

    function me(a) {
        if (a = N(a)) le(a) ? (a.style.display = "none", z(a, "hid")) : (a.style.display = "", A(a, "hid"))
    }

    function ne(a, b) {
        if (a = N(a)) a.style.visibility = b ? "visible" : "hidden"
    }

    function oe(a) {
        x(arguments, function(a) {
            T(a, !0)
        })
    }

    function U(a) {
        x(arguments, function(a) {
            T(a, !1)
        })
    }

    function pe(a) {
        x(arguments, me)
    }
    var qe = {};

    function re(a, b, c) {
        if ((a = N(a)) && a.style) {
            if (b in qe) b = qe[b];
            else {
                var d;
                if ((d = document.body.style) && b in d) d = b;
                else {
                    var e = nc ? "Webkit" : mc ? "Moz" : K ? "ms" : lc ? "O" : null;
                    e ? (e = e.toLowerCase(), e += Ca(b), d = !ca(d) || e in d ? e : null) : d = null
                }
                b = qe[b] = d
            }
            b && (a.style[b] = c)
        }
    };

    function se(a) {
        var b = null;
        "transition" in a.style ? b = "transition-duration" : "webkitTransition" in a.style ? b = "-webkit-transition-duration" : "MozTransition" in a.style ? b = "-moz-transition-duration" : "OTransition" in a.style ? b = "-o-transition-duration" : "msTransition" in a.style && (b = "-ms-transition-duration");
        a = b ? (document.defaultView ? document.defaultView.getComputedStyle(a, null) : document.parentWindow.getComputedStyle(a, null)).getPropertyValue(b) : "0";
        return 1E3 * parseFloat(a)
    };

    function te(a) {
        var b = a.__yt_uid_key;
        b || (b = ue(), a.__yt_uid_key = b);
        return b
    }
    var ue = m("yt.dom.getNextId_");
    if (!ue) {
        ue = function() {
            return ++ve
        };
        t("yt.dom.getNextId_", ue);
        var ve = 0
    }

    function we(a, b, c) {
        a = Ic(a, b, c);
        return a.length ? a[0] : null
    }

    function xe(a) {
        a = a.replace(/^[\s\xa0]+/, "");
        var b = String(a.substr(0, 3)).toLowerCase();
        if (0 == ("<tr" < b ? -1 : "<tr" == b ? 0 : 1)) return a = Tc("<table><tbody>" + a + "</tbody></table>"), we("tr", null, a);
        b = document.createElement("div");
        b.innerHTML = a;
        return $c(b)
    }

    function ye(a) {
        Wa(document.body, "hide-players", !0);
        a && Wa(a, "preserve-players", !0)
    }

    function ze() {
        Wa(document.body, "hide-players", !1);
        var a = O("preserve-players");
        x(a, function(a) {
            A(a, "preserve-players")
        })
    };

    function Ae(a) {
        if (a = a || window.event) {
            for (var b in a) b in Be || (this[b] = a[b]);
            this.K = a;
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
    k = Ae.prototype;
    k.K = null;
    k.type = "";
    k.target = null;
    k.relatedTarget = null;
    k.currentTarget = null;
    k.data = null;
    k.keyCode = 0;
    k.charCode = 0;
    k.altKey = !1;
    k.ctrlKey = !1;
    k.shiftKey = !1;
    k.clientX = 0;
    k.clientY = 0;
    k.wheelDeltaX = 0;
    k.wheelDeltaY = 0;
    k.preventDefault = function() {
        this.K.returnValue = !1;
        this.K.preventDefault && this.K.preventDefault()
    };
    k.stopPropagation = function() {
        this.K.cancelBubble = !0;
        this.K.stopPropagation && this.K.stopPropagation()
    };
    var Be = {
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
    var ib = m("yt.events.listeners_") || {};
    t("yt.events.listeners_", ib);
    var Ce = m("yt.events.counter_") || {
        count: 0
    };
    t("yt.events.counter_", Ce);

    function De(a, b, c, d) {
        return hb(function(e) {
            return e[0] == a && e[1] == b && e[2] == c && e[4] == !!d
        })
    }

    function V(a, b, c, d) {
        if (!a || !a.addEventListener && !a.attachEvent) return "";
        d = !!d;
        var e = De(a, b, c, d);
        if (e) return e;
        var e = ++Ce.count + "",
            f = !("mouseenter" != b && "mouseleave" != b || !a.addEventListener || "onmouseenter" in document),
            g;
        g = f ? function(d) {
            d = new Ae(d);
            if (!jd(d.relatedTarget, function(b) {
                    return b == a
                })) return d.currentTarget = a, d.type = b, c.call(a, d)
        } : function(b) {
            b = new Ae(b);
            b.currentTarget = a;
            return c.call(a, b)
        };
        g = ub(g);
        ib[e] = [a, b, c, g, d];
        a.addEventListener ? "mouseenter" == b && f ? a.addEventListener("mouseover", g,
            d) : "mouseleave" == b && f ? a.addEventListener("mouseout", g, d) : "mousewheel" == b && "MozBoxSizing" in document.documentElement.style ? a.addEventListener("MozMousePixelScroll", g, d) : a.addEventListener(b, g, d) : a.attachEvent("on" + b, g);
        return e
    }

    function Ee(a, b, c) {
        var d;
        return d = V(a, b, function() {
            Fe(d);
            c.apply(a, arguments)
        }, void 0)
    }

    function Ge(a, b, c, d) {
        return He(a, b, c, function(a) {
            return y(a, d)
        })
    }

    function He(a, b, c, d) {
        var e = a || document;
        return V(e, b, function(a) {
            var b = jd(a.target, function(a) {
                return a === e || d(a)
            });
            b && b !== e && !b.disabled && (a.currentTarget = b, c.call(b, a))
        })
    }

    function Fe(a) {
        a && ("string" == typeof a && (a = [a]), x(a, function(a) {
            if (a in ib) {
                var c = ib[a],
                    d = c[0],
                    e = c[1],
                    f = c[3],
                    c = c[4];
                d.removeEventListener ? d.removeEventListener(e, f, c) : d.detachEvent && d.detachEvent("on" + e, f);
                delete ib[a]
            }
        }))
    };
    var Ie = "StopIteration" in l ? l.StopIteration : Error("StopIteration");

    function Je() {}
    Je.prototype.next = function() {
        throw Ie;
    };
    Je.prototype.Ka = function() {
        return this
    };

    function Ke(a, b) {
        this.b = {};
        this.a = [];
        this.g = this.d = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a) {
            a instanceof Ke ? (c = a.F(), d = a.A()) : (c = gb(a), d = fb(a));
            for (var e = 0; e < c.length; e++) this.set(c[e], d[e])
        }
    }
    k = Ke.prototype;
    k.A = function() {
        Le(this);
        for (var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);
        return a
    };
    k.F = function() {
        Le(this);
        return this.a.concat()
    };
    k.clear = function() {
        this.b = {};
        this.g = this.d = this.a.length = 0
    };
    k.remove = function(a) {
        return Me(this.b, a) ? (delete this.b[a], this.d--, this.g++, this.a.length > 2 * this.d && Le(this), !0) : !1
    };

    function Le(a) {
        if (a.d != a.a.length) {
            for (var b = 0, c = 0; b < a.a.length;) {
                var d = a.a[b];
                Me(a.b, d) && (a.a[c++] = d);
                b++
            }
            a.a.length = c
        }
        if (a.d != a.a.length) {
            for (var e = {}, c = b = 0; b < a.a.length;) d = a.a[b], Me(e, d) || (a.a[c++] = d, e[d] = 1), b++;
            a.a.length = c
        }
    }
    k.get = function(a, b) {
        return Me(this.b, a) ? this.b[a] : b
    };
    k.set = function(a, b) {
        Me(this.b, a) || (this.d++, this.a.push(a), this.g++);
        this.b[a] = b
    };
    k.clone = function() {
        return new Ke(this)
    };
    k.Ka = function(a) {
        Le(this);
        var b = 0,
            c = this.a,
            d = this.b,
            e = this.g,
            f = this,
            g = new Je;
        g.next = function() {
            for (;;) {
                if (e != f.g) throw Error("The map has changed since the iterator was created");
                if (b >= c.length) throw Ie;
                var g = c[b++];
                return a ? g : d[g]
            }
        };
        return g
    };

    function Me(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };

    function Ne(a) {
        return eval("(" + a + ")")
    };
    var Oe = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");

    function Pe(a) {
        if (Qe) {
            Qe = !1;
            var b = l.location;
            if (b) {
                var c = b.href;
                if (c && (c = Re(c)) && c != b.hostname) throw Qe = !0, Error();
            }
        }
        return a.match(Oe)
    }
    var Qe = nc;

    function Re(a) {
        return (a = Pe(a)[3] || null) && decodeURIComponent(a)
    }

    function Se(a) {
        if (a[1]) {
            var b = a[0],
                c = b.indexOf("#");
            0 <= c && (a.push(b.substr(c)), a[0] = b = b.substr(0, c));
            c = b.indexOf("?");
            0 > c ? a[1] = "?" : c == b.length - 1 && (a[1] = void 0)
        }
        return a.join("")
    }

    function Te(a, b, c) {
        if (da(b))
            for (var d = 0; d < b.length; d++) Te(a, String(b[d]), c);
        else null != b && c.push("&", a, "" === b ? "" : "=", encodeURIComponent(String(b)))
    }

    function Ue(a, b) {
        for (var c in b) Te(c, b[c], a);
        return a
    };

    function Ve(a) {
        "?" == a.charAt(0) && (a = a.substr(1));
        a = a.split("&");
        for (var b = {}, c = 0, d = a.length; c < d; c++) {
            var e = a[c].split("=");
            if (1 == e.length && e[0] || 2 == e.length) {
                var f = ra(e[0] || ""),
                    e = ra(e[1] || "");
                f in b ? da(b[f]) ? Oa(b[f], e) : b[f] = [b[f], e] : b[f] = e
            }
        }
        return b
    }

    function We(a) {
        return -1 != a.indexOf("?") ? (a = (a || "").split("#")[0], a = a.split("?", 2), Ve(1 < a.length ? a[1] : a[0])) : {}
    }

    function Xe(a) {
        a = Ue([], a);
        a[0] = "";
        return a.join("")
    }
    var Ye = Re;

    function Ze(a, b) {
        var c = a.split("#", 2);
        a = c[0];
        var c = 1 < c.length ? "#" + c[1] : "",
            d = a.split("?", 2);
        a = d[0];
        var d = Ve(d[1] || ""),
            e;
        for (e in b) d[e] = b[e];
        return Se(Ue([a], d)) + c
    };
    var $e = null;
    "undefined" != typeof XMLHttpRequest ? $e = function() {
        return new XMLHttpRequest
    } : "undefined" != typeof ActiveXObject && ($e = function() {
        return new ActiveXObject("Microsoft.XMLHTTP")
    });

    function af(a, b, c, d, e, f, g) {
        var h = $e && $e();
        if (!("open" in h)) return null;
        h.onreadystatechange = function() {
            4 == (h && "readyState" in h ? h.readyState : 0) && b && ub(b)(h)
        };
        c = (c || "GET").toUpperCase();
        d = d || "";
        h.open(c, a, !0);
        f && (h.responseType = f);
        g && (h.withCredentials = !0);
        f = "POST" == c;
        if (e = bf(a, e))
            for (var n in e) h.setRequestHeader(n, e[n]), "content-type" == n.toLowerCase() && (f = !1);
        f && h.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        h.send(d);
        return h
    }

    function bf(a, b) {
        b = b || {};
        var c;
        if (c = E("PAGE_CL"))
            if (c = E("PAGE_BUILD_TIMESTAMP")) {
                var d;
                d || (d = window.location.href);
                c = Pe(a)[1] || null;
                var e = Ye(a);
                c && e ? (c = d, d = Pe(a), c = Pe(c), d = d[3] == c[3] && d[1] == c[1] && d[4] == c[4]) : d = e ? Ye(d) == e && (Number(Pe(d)[4] || null) || null) == (Number(Pe(a)[4] || null) || null) : !0;
                c = d || cf(a)
            } c && (b["X-YouTube-Page-CL"] = E("PAGE_CL"), b["X-YouTube-Page-Timestamp"] = E("PAGE_BUILD_TIMESTAMP"));
        return b
    }

    function cf(a) {
        var b = ["X-YouTube-Page-CL", "X-YouTube-Page-Timestamp"],
            c = E("CORS_HEADER_WHITELIST") || {};
        a = Ye(a);
        if (!a) return !0;
        var d = c[a];
        return d ? Ha(b, function(a) {
            return Ka(d, a)
        }) : !1
    }

    function df(a, b) {
        var c = b.format || "JSON";
        b.Ea && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
        var d = b.N;
        d && (a = Ze(a, d));
        var e = b.Ma || "";
        (d = b.D) && r(e) && (e = Ve(e), kb(e, d), e = Xe(e));
        var f = !1,
            g, h = af(a, function(a) {
                if (!f) {
                    f = !0;
                    g && vb(g);
                    var d;
                    i: switch (a && "status" in a ? a.status : -1) {
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
                            break i;
                        default:
                            d = !1
                    }
                    var e = null;
                    if (d || 400 <= a.status && 500 > a.status) e = ef(c, a);
                    if (d) i: {
                        switch (c) {
                            case "XML":
                                d = 0 == parseInt(e && e.return_code, 10);
                                break i;
                            case "RAW":
                                d = !0;
                                break i
                        }
                        d = !!e
                    }
                    var e = e || {},
                        h = b.Fa || l;
                    d ? b.onSuccess && b.onSuccess.call(h, a, e) : b.onError && b.onError.call(h, a, e);
                    b.Ga && b.Ga.call(h, a, e)
                }
            }, b.method, e, b.headers, b.responseType, b.withCredentials);
        b.Ha && 0 < b.timeout && (g = F(function() {
            f || (f = !0, h.abort(), vb(g), b.Ha.call(b.Fa || l, h))
        }, b.timeout))
    }

    function ef(a, b) {
        var c = null;
        switch (a) {
            case "JSON":
                var d = b.responseText,
                    e = b.getResponseHeader("Content-Type") || "";
                d && 0 <= e.indexOf("json") && (c = Ne(d));
                break;
            case "XML":
                if (d = (d = b.responseXML) ? ff(d) : null) c = {}, x(d.getElementsByTagName("*"), function(a) {
                    c[a.tagName] = gf(a)
                })
        }
        return c
    }

    function ff(a) {
        return a ? (a = ("responseXML" in a ? a.responseXML : a).getElementsByTagName("root")) && 0 < a.length ? a[0] : null : null
    }

    function gf(a) {
        var b = "";
        x(a.childNodes, function(a) {
            b += a.nodeValue
        });
        return b
    };
    var hf = {};

    function jf(a, b) {
        if (E("EVENTS_TRACKER_INSTALLED")) {
            var c = hf[a];
            if (!c) {
                var d = window._gaq._getAsyncTracker("eventsPageTracker");
                if (!d) return;
                window._gaq.push(function() {
                    c = d._createEventTracker(a);
                    hf[a] = c
                })
            }
            window._gaq.push(function() {
                c._trackEvent(b, void 0, void 0)
            })
        }
    };
    var kf = {},
        lf = 0;

    function mf(a) {
        if (a) {
            var b = new Image,
                c = "" + lf++;
            kf[c] = b;
            b.onload = b.onerror = function() {
                delete kf[c]
            };
            b.src = a;
            b = eval("null")
        }
    };

    function nf(a, b) {
		console.warn("pokTwo 2013: 204 HTTP request function attempted to be called")
    };

    function of () {
        this.O = new xd(this)
    }
    u( of , ob); of .prototype[sd] = !0;
    k = of .prototype;
    k.addEventListener = function(a, b, c, d) {
        Ed(this, a, b, c, d)
    };
    k.removeEventListener = function(a, b, c, d) {
        Jd(this, a, b, c, d)
    };
    k.t = function() {
        of .k.t.call(this);
        this.removeAllListeners()
    };
    k.listen = function(a, b, c, d) {
        return this.O.add(String(a), b, !1, c, d)
    };
    k.ea = function(a, b, c, d) {
        return this.O.remove(String(a), b, c, d)
    };
    k.removeAllListeners = function(a) {
        return this.O ? this.O.removeAll(a) : 0
    };

    function pf(a) {
        of .call(this);
        this.a = a || Fc()
    }
    u(pf, of );
    k = pf.prototype;
    k.M = !1;
    k.H = null;
    k.fa = null;
    k.ja = !1;
    k.ma = function() {
        return this.H
    };

    function qf(a, b) {
        return a.H ? P(b, a.H || a.a.a) : null
    }
    k.V = function() {
        this.M = !0;
        rf(this, function(a) {
            !a.M && a.ma() && a.V()
        })
    };
    k.aa = function() {
        rf(this, function(a) {
            a.M && a.aa()
        });
        this.b && this.b.removeAll();
        this.M = !1
    };
    k.t = function() {
        this.M && this.aa();
        this.b && (this.b.dispose(), delete this.b);
        rf(this, function(a) {
            a.dispose()
        });
        !this.ja && this.H && Xc(this.H);
        this.H = this.fa = null;
        pf.k.t.call(this)
    };

    function rf(a, b) {
        a.fa && x(a.fa, b, void 0)
    };

    function sf(a) {
        pf.call(this, a);
        this.R = [];
        this.Ia = []
    }
    u(sf, pf);
    sf.prototype.aa = function() {
        x(this.R, Fe);
        Fb(this.Ia);
        sf.k.aa.call(this)
    };

    function tf() {
        sf.call(this)
    }
    u(tf, sf);
    tf.prototype.V = function() {
        tf.k.V.call(this);
        this.g = qf(this, "parent-list");
        this.Da = qf(this, "overflow-container");
        this.d = qf(this, "overflow-list");
        qf(this, "overflowable-list-item")
    };

    function uf() {
        var a = O("overflowable-list-root", W),
            b = [];
        x(a, function(a) {
            var d = new tf;
            if (d.M) throw Error("Component already rendered");
            if (a) {
                d.ja = !0;
                var e = Hc(a);
                d.a && d.a.a == e || (d.a = Fc(a));
                d.H = a;
                d.V()
            } else throw Error("Invalid element to decorate");
            b.push(d)
        });
        return b
    }

    function vf(a, b) {
        var c = Zc(a.g).length;
        if (c > b)
            for (c -= 1; c >= b; c--) {
                var d = a.g;
                Wc(a.d, void 0 != d.lastElementChild ? d.lastElementChild : ad(d.lastChild, !1))
            } else {
                d = document.createDocumentFragment();
                if (0 != Zc(a.d).length)
                    for (var e = b - c, c = 0; c < e; c++) d.appendChild($c(a.d));
                a.g.appendChild(d)
            }
        c = a.Da;
        d = Zc(a.d);
        Yb(c, "empty-overflow-list", 0 == d.length)
    };

    function wf(a, b, c, d, e, f, g) {
        var h, n;
        if (h = c.offsetParent) {
            var p = "HTML" == h.tagName || "BODY" == h.tagName;
            p && "static" == Td(h, "position") || (n = Xd(h), p || (p = (p = Yd(h)) && mc ? -h.scrollLeft : !p || K && M("8") || "visible" == Td(h, "overflowX") ? h.scrollLeft : h.scrollWidth - h.clientWidth - h.scrollLeft, n = ac(n, new J(p, h.scrollTop))))
        }
        h = n || new J;
        n = fe(a);
        if (p = Wd(a)) {
            var q = new Rd(p.left, p.top, p.right - p.left, p.bottom - p.top),
                p = Math.max(n.left, q.left),
                v = Math.min(n.left + n.width, q.left + q.width);
            if (p <= v) {
                var L = Math.max(n.top, q.top),
                    q = Math.min(n.top +
                        n.height, q.top + q.height);
                L <= q && (n.left = p, n.top = L, n.width = v - p, n.height = q - L)
            }
        }
        p = Fc(a);
        L = Fc(c);
        if (p.a != L.a) {
            var v = p.a.body,
                L = Pc(L.a),
                q = new J(0, 0),
                D;
            D = (D = Hc(v)) ? Pc(D) : window;
            var na = v;
            do {
                var ta = D == L ? Xd(na) : ae(na);
                q.x += ta.x;
                q.y += ta.y
            } while (D && D != L && (na = D.frameElement) && (D = D.parent));
            v = ac(q, Xd(v));
            K && !kd(p) && (v = ac(v, ld(p)));
            n.left += v.x;
            n.top += v.y
        }
        a = xf(a, b);
        n = new J(a & 2 ? n.left + n.width : n.left, a & 1 ? n.top + n.height : n.top);
        n = ac(n, h);
        e && (n.x += (a & 2 ? -1 : 1) * e.x, n.y += (a & 1 ? -1 : 1) * e.y);
        var R;
        g && (R = Wd(c)) && (R.top -= h.y, R.right -=
            h.x, R.bottom -= h.y, R.left -= h.x);
        i: {
            b = R;a = n.clone();e = 0;h = xf(c, d);R = S(c);d = R.clone();
            if (f || 0 != h) h & 2 ? a.x -= d.width + (f ? f.right : 0) : f && (a.x += f.left),
            h & 1 ? a.y -= d.height + (f ? f.bottom : 0) : f && (a.y += f.top);
            if (g && (b ? (f = a, e = 0, 65 == (g & 65) && (f.x < b.left || f.x >= b.right) && (g &= -2), 132 == (g & 132) && (f.y < b.top || f.y >= b.bottom) && (g &= -5), f.x < b.left && g & 1 && (f.x = b.left, e |= 1), f.x < b.left && f.x + d.width > b.right && g & 16 && (d.width = Math.max(d.width - (f.x + d.width - b.right), 0), e |= 4), f.x + d.width > b.right && g & 1 && (f.x = Math.max(b.right - d.width, b.left),
                    e |= 1), g & 2 && (e = e | (f.x < b.left ? 16 : 0) | (f.x + d.width > b.right ? 32 : 0)), f.y < b.top && g & 4 && (f.y = b.top, e |= 2), f.y <= b.top && f.y + d.height < b.bottom && g & 32 && (d.height = Math.max(d.height - (b.top - f.y), 0), f.y = b.top, e |= 8), f.y >= b.top && f.y + d.height > b.bottom && g & 32 && (d.height = Math.max(d.height - (f.y + d.height - b.bottom), 0), e |= 8), f.y + d.height > b.bottom && g & 4 && (f.y = Math.max(b.bottom - d.height, b.top), e |= 2), g & 8 && (e = e | (f.y < b.top ? 64 : 0) | (f.y + d.height > b.bottom ? 128 : 0)), g = e) : g = 256, e = g, e & 496)) {
                c = e;
                break i
            }
            f = mc && (gc || pc) && M("1.9");a instanceof J ?
            (g = a.x, a = a.y) : (g = a, a = void 0);c.style.left = de(g, f);c.style.top = de(a, f);R == d || R && d && R.width == d.width && R.height == d.height || (f = kd(Fc(Hc(c))), !K || f && M("8") ? (c = c.style, mc ? c.MozBoxSizing = "border-box" : nc ? c.WebkitBoxSizing = "border-box" : c.boxSizing = "border-box", c.width = Math.max(d.width, 0) + "px", c.height = Math.max(d.height, 0) + "px") : (g = c.style, f ? (f = ie(c), c = $d(c), g.pixelWidth = d.width - c.left - f.left - f.right - c.right, g.pixelHeight = d.height - c.top - f.top - f.bottom - c.bottom) : (g.pixelWidth = d.width, g.pixelHeight = d.height)));
            c = e
        }
        return c
    }

    function xf(a, b) {
        return (b & 4 && Yd(a) ? b ^ 2 : b) & -5
    };
    var yf = {},
        zf = "ontouchstart" in document;

    function Af(a, b, c) {
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
        return jd(c, function(a) {
            return I(a, b)
        }, d)
    }

    function X(a) {
        var b = "mouseover" == a.type && "mouseenter" in yf || "mouseout" == a.type && "mouseleave" in yf,
            c = a.type in yf || b;
        if ("HTML" != a.target.tagName && c) {
            if (b) {
                var b = "mouseover" == a.type ? "mouseenter" : "mouseleave",
                    c = yf[b],
                    d;
                for (d in c.B) {
                    var e = Af(b, d, a.target);
                    e && !jd(a.relatedTarget, function(a) {
                        return a == e
                    }) && c.G(d, e, b, a)
                }
            }
            if (b = yf[a.type])
                for (d in b.B)(e = Af(a.type, d, a.target)) && b.G(d, e, a.type, a)
        }
    }
    V(document, "blur", X, !0);
    V(document, "change", X, !0);
    V(document, "click", X);
    V(document, "focus", X, !0);
    V(document, "mouseover", X);
    V(document, "mouseout", X);
    V(document, "mousedown", X);
    V(document, "keydown", X);
    V(document, "keyup", X);
    V(document, "keypress", X);
    V(document, "cut", X);
    V(document, "paste", X);
    zf && (V(document, "touchstart", X), V(document, "touchend", X), V(document, "touchcancel", X));
    t("yt.uix.widgets_", window.yt && window.yt.uix && window.yt.uix.widgets_ || {});

    function Bf() {}
    Bf.prototype.g = function(a, b, c) {
        var d = this.a(a, b);
        if (d && (d = m(d))) {
            var e = Qa(arguments, 2);
            Pa(e, 0, 0, a);
            d.apply(null, e)
        }
    };
    Bf.prototype.a = function(a, b) {
        return C(a, b)
    };
    Bf.prototype.b = function(a) {
        return Q(a, Y(this))
    };

    function Y(a, b) {
        return "yt-uix" + (a.C ? "-" + a.C : "") + (b ? "-" + b : "")
    };

    function Cf() {
        this.i = {}
    }
    u(Cf, Bf);
    aa(Cf);
    Cf.prototype.C = "button";
    Cf.prototype.d = null;

    function Df(a, b) {
        var c = b.iframeMask;
        c || (c = document.createElement("iframe"), c.src = 'javascript:""', c.className = Y(a, "menu-mask"), b.iframeMask = c);
        return c
    }

    function Ef(a, b) {
        if (a.a(b, "button-menu-root-container")) {
            var c = a.a(b, "button-menu-root-container");
            return Q(b, c)
        }
        return document.body
    }

    function Ff(a, b) {
        if (b) {
            var c = Gf(a, b);
            if (c) {
                b.setAttribute("aria-pressed", "true");
                b.setAttribute("aria-expanded", "true");
                c.originalParentNode = c.parentNode;
                c.activeButtonNode = b;
                c.parentNode.removeChild(c);
                var d;
                d = a.a(b, "button-has-sibling-menu") ? b.parentNode : Ef(a, b);
                d.appendChild(c);
                c.style.minWidth = b.offsetWidth - 2 + "px";
                var e = Df(a, b);
                e && d.appendChild(e);
                d = !!a.a(b, "button-menu-fixed");
                var e = Q(b, Y(a, "group")),
                    f = !!a.a(b, "button-menu-ignore-group"),
                    e = e && !f ? e : b,
                    f = 5,
                    g = 4,
                    h = fe(b);
                if (y(b, Y(a, "reverse"))) {
                    f =
                        4;
                    g = 5;
                    h = h.top + "px";
                    try {
                        c.style.maxHeight = h
                    } catch (n) {}
                }
                y(b, "flip") && (y(b, Y(a, "reverse")) ? (f = 6, g = 7) : (f = 7, g = 6));
                var p;
                a.a(b, "button-has-sibling-menu") ? p = Vd(e) : a.a(b, "button-menu-root-container") && (p = Ef(a, b));
                K && !M("8") && (p = null);
                var q;
                p && (q = fe(p), q = new Qd(-q.top, q.left, q.top, -q.left));
                p = new J(0, 1);
                y(b, Y(a, "center-menu")) && (p.x -= Math.round((S(c).width - S(b).width) / 2));
                d && (p.y += Nc(document).y);
                if (h = Df(a, b)) {
                    var v = S(c);
                    h.style.width = v.width + "px";
                    h.style.height = v.height + "px";
                    wf(e, f, h, g, p, q, 65);
                    d && re(h, "position",
                        "fixed")
                }
                wf(e, f, c, g, p, q, 65);
                oe(c);
                a.g(b, "button-menu-action", !0);
                z(b, Y(a, "active"));
                c = s(a.o, a, b, !1);
                q = s(a.o, a, b, !0);
                d = a.d && cd(Gf(a, a.d), b);
                a.d && !d && Hf(a);
                d = te(b).toString();
                a.i[d] = [V(document, "click", q), V(document, "contextmenu", c)];
                a.d = b
            }
        }
    }

    function If(a, b) {
        if (b) {
            var c = Gf(a, b);
            if (c) {
                a.d = null;
                b.setAttribute("aria-pressed", "false");
                b.setAttribute("aria-expanded", "false");
                b.removeAttribute("aria-activedescendant");
                U(c);
                a.g(b, "button-menu-action", !1);
                var d = Df(a, b);
                F(function() {
                    d && d.parentNode && d.parentNode.removeChild(d);
                    c.originalParentNode && (c.parentNode.removeChild(c), c.originalParentNode.appendChild(c), c.originalParentNode = null, c.activeButtonNode = null)
                }, 1)
            }
            var e = Q(b, Y(a, "group")),
                f = [Y(a, "active")];
            e && f.push(Y(a, "group-active"));
            Va(b,
                f);
            e = te(b).toString();
            Fe(a.i[e]);
            delete a.i[e]
        }
    }
    Cf.prototype.o = function(a, b, c) {
        c = c || window.event;
        c = c.target || c.srcElement;
        3 == c.nodeType && (c = c.parentNode);
        var d = Q(c, Y(this));
        if (d) {
            var d = Gf(this, d),
                e = Gf(this, a);
            if (d == e) return
        }
        var d = Q(c, Y(this, "menu")),
            e = d == Gf(this, a),
            f = y(c, Y(this, "menu-item")),
            g = y(c, Y(this, "menu-close"));
        if (!d || e && (f || g)) If(this, a), d && b && this.a(a, "button-menu-indicate-selected") && ((a = P(Y(this, "content"), a)) && dd(a, gd(c)), a = Y(this, "menu-item-selected"), (b = P(a, d)) && A(b, a), z(c.parentNode, a))
    };

    function Gf(a, b) {
        if (!b.widgetMenu) {
            var c = a.a(b, "button-menu-id"),
                c = c && N(c),
                d = Y(a, "menu");
            c ? Ua(c, [d, Y(a, "menu-external")]) : c = P(d, b);
            b.widgetMenu = c
        }
        return b.widgetMenu
    }

    function Jf(a, b) {
        if (a.a(b, "button-toggle")) {
            var c = Q(b, Y(a, "group"));
            if (c && a.a(c, "button-toggle-group")) {
                var d = a.a(c, "button-toggle-group"),
                    c = O(Y(a), c),
                    e = Y(a, "toggled"),
                    f = y(b, e);
                x(c, function(a) {
                    a != b || "optional" == d && f ? A(a, e) : z(b, e)
                })
            } else Xa(b, Y(a, "toggled"))
        }
    }

    function Hf(a) {
        a.d && If(a, a.d)
    };

    function Kf() {}
    u(Kf, Bf);
    Kf.prototype.b = function(a) {
        var b = Bf.prototype.b.call(this, a);
        return b ? b : a
    };
    Kf.prototype.a = function(a, b) {
        var c = Kf.k.a.call(this, a, b);
        return c ? c : (c = Kf.k.a.call(this, a, "card-config")) && (c = m(c)) && c[b] ? c[b] : null
    };
    Kf.prototype.show = function(a) {
        var b = this.b(a);
        if (b) {
            H(b, Y(this, "active"));
            var c = Lf(this, a, b);
            if (c) {
                c.cardTargetNode = a;
                c.cardRootNode = b;
                Mf(this, a, c);
                var d = Y(this, "card-visible"),
                    e = this.a(a, "card-delegate-show") && this.a(b, "card-action");
                this.g(b, "card-action", a);
                this.i = a;
                U(c);
                F(function() {
                    e || oe(c);
                    H(c, d)
                }, 10)
            }
        }
    };

    function Lf(a, b, c) {
        var d = c || b,
            e = Y(a, "card"),
            f = e + te(d);
        c = N(f);
        var g;
        g = d.cardContentNode;
        if (!g) {
            var h = Y(a, "content"),
                n = Y(a, "card-content");
            (g = P(h, d)) || (g = document.createElement("div"));
            Xb(g, h, n);
            d.cardContentNode = g
        }
        if (c) return c;
        c = document.createElement("div");
        c.id = f;
        c.className = e;
        (d = a.a(d, "card-class")) && H(c, d);
        d = document.createElement("div");
        d.className = Y(a, "card-border");
        b = a.a(b, "orientation") || "horizontal";
        e = document.createElement("div");
        e.className = "yt-uix-card-border-arrow yt-uix-card-border-arrow-" +
            b;
        f = document.createElement("div");
        f.className = Y(a, "card-body");
        a = document.createElement("div");
        a.className = "yt-uix-card-body-arrow yt-uix-card-body-arrow-" + b;
        Xc(g);
        f.appendChild(g);
        d.appendChild(a);
        d.appendChild(f);
        c.appendChild(e);
        c.appendChild(d);
        document.body.appendChild(c);
        return c
    }

    function Mf(a, b, c) {
        var d = a.a(b, "orientation") || "horizontal",
            e = a.a(b, "position"),
            f = !!a.a(b, "force-position"),
            d = "horizontal" == d,
            g = "bottomright" == e || "bottomleft" == e,
            h = "topright" == e || "bottomright" == e,
            n, p;
        h && g ? (p = 7, n = 4) : h && !g ? (p = 6, n = 5) : !h && g ? (p = 5, n = 6) : (p = 4, n = 7);
        var q = Yd(document.body),
            e = Yd(b);
        q != e && (p ^= 2);
        var v;
        d ? (e = b.offsetHeight / 2 - 12, v = new J(-12, b.offsetHeight + 6)) : (e = b.offsetWidth / 2 - 6, v = new J(b.offsetWidth + 6, -12));
        var L = S(c),
            e = Math.min(e, (d ? L.height : L.width) - 24 - 6);
        6 > e && (e = 6, d ? v.y += 12 - b.offsetHeight /
            2 : v.x += 12 - b.offsetWidth / 2);
        var D = null;
        f || (D = 10);
        L = Y(a, "card-flip");
        a = Y(a, "card-reverse");
        Yb(c, L, h);
        Yb(c, a, g);
        D = wf(b, p, c, n, v, null, D);
        !f && D && (D & 48 && (h = !h, p ^= 2, n ^= 2), D & 192 && (g = !g, p ^= 1, n ^= 1), Yb(c, L, h), Yb(c, a, g), wf(b, p, c, n, v));
        b = P("yt-uix-card-body-arrow", c);
        f = P("yt-uix-card-border-arrow", c);
        d = d ? g ? "top" : "bottom" : !q && h || q && !h ? "left" : "right";
        b.setAttribute("style", "");
        f.setAttribute("style", "");
        b.style[d] = e + "px";
        f.style[d] = e + "px";
        g = P("yt-uix-card-arrow", c);
        b = P("yt-uix-card-arrow-background", c);
        g && b && (c =
            "right" == d ? S(c).width - e - 13 : e + 11, e = c / Math.sqrt(2), g.style.left = c + "px", g.style.marginLeft = "1px", b.style.marginLeft = -e + "px", b.style.marginTop = e + "px")
    }
    Kf.prototype.hide = function(a) {
        var b = this.b(a);
        b && (a = Lf(this, a, b)) && (Vb(b, Y(this, "active")), Vb(a, Y(this, "card-visible")), U(a), this.i = null, a.cardTargetNode = null, a.cardRootNode = null)
    };

    function Nf(a) {
        a.i && a.hide(a.i)
    };

    function Of() {
        this.d = {}
    }
    u(Of, Kf);
    aa(Of);
    Of.prototype.C = "clickcard";
    Of.prototype.show = function(a) {
        Of.k.show.call(this, a);
        var b = this.b(a);
        C(b, "click-outside-persists") || (b = ha(a), this.d[b] || (a = V(document, "click", s(this.o, this, a)), this.d[b] = a))
    };
    Of.prototype.hide = function(a) {
        Of.k.hide.call(this, a);
        a = ha(a);
        var b = this.d[a];
        b && (Fe(b), this.d[a] = null)
    };
    Of.prototype.o = function(a, b) {
        Q(b.target, "yt-uix" + (this.C ? "-" + this.C : "") + "-card") || this.hide(a)
    };
    var Pf, Qf;

    function Rf() {
        var a = cb("PREF");
        if (a)
            for (var a = unescape(a).split("&"), b = 0; b < a.length; b++) {
                var c = a[b].split("="),
                    d = c[0];
                (c = c[1]) && (Sf[d] = c.toString())
            }
    }
    aa(Rf);
    var Sf = m("yt.prefs.UserPrefs.prefs_") || {};
    t("yt.prefs.UserPrefs.prefs_", Sf);

    function Tf(a) {
        if (/^f([1-9][0-9]*)$/.test(a)) throw "ExpectedRegexMatch: " + a;
    }

    function Uf(a) {
        if (!/^\w+$/.test(a)) throw "ExpectedRegexMismatch: " + a;
    }
    Rf.prototype.get = function(a, b) {
        Uf(a);
        Tf(a);
        var c = void 0 !== Sf[a] ? Sf[a].toString() : null;
        return null != c ? c : b ? b : ""
    };
    Rf.prototype.set = function(a, b) {
        Uf(a);
        Tf(a);
        if (null == b) throw "ExpectedNotNull";
        Sf[a] = b.toString()
    };

    function Vf(a, b) {
        var c = "f" + (Math.floor(a / 31) + 1),
            d = 1 << a % 31,
            e = void 0 !== Sf[c] ? Sf[c].toString() : null,
            e = (null != e && /^[A-Fa-f0-9]+$/.test(e) ? parseInt(e, 16) : null) || 0,
            e = b ? e | d : e & ~d;
        0 == e ? delete Sf[c] : (d = e.toString(16), Sf[c] = d.toString())
    }
    Rf.prototype.remove = function(a) {
        Uf(a);
        Tf(a);
        delete Sf[a]
    };
    Rf.prototype.clear = function() {
        Sf = {}
    };

    function Wf() {
        var a = [],
            b;
        for (b in Sf) a.push(b + "=" + escape(Sf[b]));
        return a.join("&")
    };

    function Xf(a) {
        if (!Pf || a) Pf = Lc(window);
        return Pf
    };

    function Yf() {
        this.C = "tdl"
    }
    u(Yf, Bf);
    aa(Yf);

    function Zf(a) {
        $f(a, function(a) {
            ag(this, a)
        }, a)
    }

    function bg(a) {
        $f(a, function(a) {
            cg(this, a)
        }, a)
    }

    function cg(a, b) {
        var c = dg(a, b, eg(b)),
            d = [c.x, c.y].join();
        B(b, "fold", d);
        return c
    }

    function dg(a, b, c) {
        var d = Xd(b),
            e;
        "invert-x-y" != c && (e = new bc(b.offsetWidth, b.offsetHeight));
        var f = d.x + (fg(c) ? 0 : e.width),
            d = d.y + (gg(c) ? 0 : e.height);
        if (b = bd(b))
            if (b = Q(b, Y(a))) a = dg(a, b, c), f = fg(c) ? Math.max(f, a.x) : Math.min(f, a.x), d = gg(c) ? Math.max(d, a.y) : Math.min(d, a.y);
        return new J(f, d)
    }

    function eg(a) {
        return (a = C(a, "folddir")) ? a : "default"
    }

    function fg(a) {
        return "invert-x" == a || "invert-x-y" == a ? !0 : !1
    }

    function gg(a) {
        return "invert-y" == a || "invert-x-y" == a ? !0 : !1
    }

    function hg() {
        var a = Xf(),
            b;
        Qf || (Qf = Nc(document));
        b = Qf;
        return new J(a.width + b.x, a.height + b.y)
    }

    function ig(a) {
        a = C(a, "fold");
        if (!a) return null;
        a = a.split(",");
        if (2 == a.length) return new J(parseInt(a[0], 10) || 0, parseInt(a[1], 10) || 0)
    }

    function ag(a, b) {
        var c = ig(b);
        c || (c = cg(a, b));
        var d = hg(),
            e = Math.min(c.x, d.x),
            c = Math.min(c.y, d.y),
            f = new J(e, c),
            g = eg(b);
        jg(a, function(a, b) {
            var c;
            c = Xd(a);
            var d = null,
                e;
            fg(g) ? (d = new bc(a.offsetWidth, a.offsetHeight), e = c.x + d.width > f.x) : e = c.x < f.x;
            gg(g) ? (d || (d = new bc(a.offsetWidth, a.offsetHeight)), c = e && c.y + d.height > f.y) : c = e && c.y < f.y;
            c && (a.src = b, mb(a, "thumb"))
        }, b, a)
    }

    function jg(a, b, c, d) {
        var e = Ic("img", null, c);
        x(e, function(a) {
            var e = C(a, "thumb");
            if (e) {
                var h = a.getAttribute("src");
                e != h && Q(a, Y(this)) == c && b.call(d, a, e)
            }
        }, a)
    }

    function $f(a, b, c) {
        a = O(Y(a));
        x(a, function(a) {
            b.call(c, a)
        })
    }

    function kg(a, b) {
        if (b) {
            var c = a.b(b);
            c && (cg(a, c), ag(a, c), c = O(Y(a), c), x(c, function(a) {
                cg(this, a);
                ag(this, a)
            }, a))
        }
    }

    function lg(a) {
        var b = Yf.getInstance();
        y(a, Y(b)) && (ag(b, a), a = O(Y(b), a), x(a, function(a) {
            ag(this, a)
        }, b))
    };
    var mg, ng, og, pg;
    var qg = {};

    function rg(a, b) {
        a = N(a);
        var c = b || ha(a),
            d = qg[c];
        d && (qg[c] = Ea(d, function(b) {
            return b[0] != a
        }))
    };
    var sg = [];

    function tg(a) {
        ug(function(a, c) {
            var d = C(a, "group-key");
            d && (rg(a, d), mb(a, "group-key"));
            a.src = c
        }, a)
    }

    function vg(a, b) {
        var c = C(b, "thumb");
        c && a.call(window, b, c)
    }

    function ug(a, b) {
        var c = Ic("img", null, b);
        xb() ? x(c, function(b) {
            sg.push(yb(ma(vg, a, b)))
        }) : x(c, ma(vg, a))
    };

    function wg(a, b, c) {
        this.a = a;
        (a = b || null) || (a = xg(this.a));
        a = "(" + a.join("|") + ")";
        a = qa("__%s__", a);
        this.d = RegExp(a, "g");
        this.b = c || {}
    }
    var yg = /__([a-z]+(?:_[a-z]+)*)__/g;

    function zg(a) {
        a = a.innerHTML;
        a = a.replace(/^\s*(\x3c!--\s*)?/, "");
        return a = a.replace(/(\s*--\x3e)?\s*$/, "")
    }

    function xg(a) {
        var b = [],
            c = {};
        a.replace(yg, function(a, e) {
            e in c || (c[e] = !0, b.push(e))
        });
        return b
    }

    function Ag(a, b) {
        var c = s(function(a, c) {
            return sa(b[c] || this.b[c] || "")
        }, a);
        return a.a.replace(a.d, c)
    };

    function Bg(a, b, c) {
        this.g = a;
        this.d = c;
        this.a = b || window;
        this.b = s(this.wa, this)
    }
    u(Bg, ob);
    k = Bg.prototype;
    k.v = null;
    k.ba = !1;
    k.start = function() {
        this.stop();
        this.ba = !1;
        var a = Cg(this),
            b = Dg(this);
        a && !b && this.a.mozRequestAnimationFrame ? (this.v = Ed(this.a, "MozBeforePaint", this.b), this.a.mozRequestAnimationFrame(null), this.ba = !0) : this.v = a && b ? a.call(this.a, this.b) : this.a.setTimeout($b(this.b), 20)
    };
    k.stop = function() {
        if (null != this.v) {
            var a = Cg(this),
                b = Dg(this);
            a && !b && this.a.mozRequestAnimationFrame ? Kd(this.v) : a && b ? b.call(this.a, this.v) : this.a.clearTimeout(this.v)
        }
        this.v = null
    };
    k.wa = function() {
        this.ba && this.v && Kd(this.v);
        this.v = null;
        this.g.call(this.d, oa())
    };
    k.t = function() {
        this.stop();
        Bg.k.t.call(this)
    };

    function Cg(a) {
        a = a.a;
        return a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || null
    }

    function Dg(a) {
        a = a.a;
        return a.cancelRequestAnimationFrame || a.webkitCancelRequestAnimationFrame || a.mozCancelRequestAnimationFrame || a.oCancelRequestAnimationFrame || a.msCancelRequestAnimationFrame || null
    };
    t("help.common.helpapiservice.Environment.PROD", "https://clients6.google.com");
    t("help.common.helpapiservice.Environment.STAGING", "https://content-googleapis-staging.sandbox.google.com");
    t("help.common.helpapiservice.Environment.TEST", "https://content-googleapis-test.sandbox.google.com");

    function Eg(a) {
        if ("function" == typeof a.A) return a.A();
        if (r(a)) return a.split("");
        if (ea(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b
        }
        return fb(a)
    }

    function Fg(a, b, c) {
        if ("function" == typeof a.forEach) a.forEach(b, c);
        else if (ea(a) || r(a)) x(a, b, c);
        else {
            var d;
            if ("function" == typeof a.F) d = a.F();
            else if ("function" != typeof a.A)
                if (ea(a) || r(a)) {
                    d = [];
                    for (var e = a.length, f = 0; f < e; f++) d.push(f)
                } else d = gb(a);
            else d = void 0;
            for (var e = Eg(a), f = e.length, g = 0; g < f; g++) b.call(c, e[g], d && d[g], a)
        }
    };

    function Gg(a, b) {
        var c;
        if (a instanceof Gg) this.J = ca(b) ? b : a.J, Hg(this, a.P), this.$ = a.$, this.T = a.T, Ig(this, a.Z), this.Y = a.Y, Jg(this, a.a.clone()), this.X = a.X;
        else if (a && (c = Pe(String(a)))) {
            this.J = !!b;
            Hg(this, c[1] || "", !0);
            var d = c[2] || "";
            this.$ = d ? decodeURIComponent(d) : "";
            this.T = (d = c[3] || "") ? decodeURIComponent(d) : "";
            Ig(this, c[4]);
            this.Y = (d = c[5] || "") ? decodeURIComponent(d) : "";
            Jg(this, c[6] || "", !0);
            this.X = (c = c[7] || "") ? decodeURIComponent(c) : ""
        } else this.J = !!b, this.a = new Kg(null, 0, this.J)
    }
    k = Gg.prototype;
    k.P = "";
    k.$ = "";
    k.T = "";
    k.Z = null;
    k.Y = "";
    k.X = "";
    k.J = !1;
    k.toString = function() {
        var a = [],
            b = this.P;
        b && a.push(Lg(b, Mg), ":");
        if (b = this.T) {
            a.push("//");
            var c = this.$;
            c && a.push(Lg(c, Mg), "@");
            a.push(encodeURIComponent(String(b)));
            b = this.Z;
            null != b && a.push(":", String(b))
        }
        if (b = this.Y) this.T && "/" != b.charAt(0) && a.push("/"), a.push(Lg(b, "/" == b.charAt(0) ? Ng : Og));
        (b = this.a.toString()) && a.push("?", b);
        (b = this.X) && a.push("#", Lg(b, Pg));
        return a.join("")
    };
    k.clone = function() {
        return new Gg(this)
    };

    function Hg(a, b, c) {
        a.P = c ? b ? decodeURIComponent(b) : "" : b;
        a.P && (a.P = a.P.replace(/:$/, ""))
    }

    function Ig(a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
            a.Z = b
        } else a.Z = null
    }

    function Jg(a, b, c) {
        b instanceof Kg ? (a.a = b, Qg(a.a, a.J)) : (c || (b = Lg(b, Rg)), a.a = new Kg(b, 0, a.J))
    }

    function Sg(a) {
        return a instanceof Gg ? a.clone() : new Gg(a, void 0)
    }

    function Lg(a, b) {
        return r(a) ? encodeURI(a).replace(b, Tg) : null
    }

    function Tg(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }
    var Mg = /[#\/\?@]/g,
        Og = /[\#\?:]/g,
        Ng = /[\#\?]/g,
        Rg = /[\#\?@]/g,
        Pg = /#/g;

    function Kg(a, b, c) {
        this.a = a || null;
        this.b = !!c
    }

    function Ug(a) {
        if (!a.j && (a.j = new Ke, a.p = 0, a.a))
            for (var b = a.a.split("&"), c = 0; c < b.length; c++) {
                var d = b[c].indexOf("="),
                    e = null,
                    f = null;
                0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d + 1)) : e = b[c];
                e = ra(e);
                e = Vg(a, e);
                a.add(e, f ? ra(f) : "")
            }
    }
    k = Kg.prototype;
    k.j = null;
    k.p = null;
    k.add = function(a, b) {
        Ug(this);
        this.a = null;
        a = Vg(this, a);
        var c = this.j.get(a);
        c || this.j.set(a, c = []);
        c.push(b);
        this.p++;
        return this
    };
    k.remove = function(a) {
        Ug(this);
        a = Vg(this, a);
        return Me(this.j.b, a) ? (this.a = null, this.p -= this.j.get(a).length, this.j.remove(a)) : !1
    };
    k.clear = function() {
        this.j = this.a = null;
        this.p = 0
    };

    function Wg(a, b) {
        Ug(a);
        b = Vg(a, b);
        return Me(a.j.b, b)
    }
    k.F = function() {
        Ug(this);
        for (var a = this.j.A(), b = this.j.F(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    k.A = function(a) {
        Ug(this);
        var b = [];
        if (r(a)) Wg(this, a) && (b = Ma(b, this.j.get(Vg(this, a))));
        else {
            a = this.j.A();
            for (var c = 0; c < a.length; c++) b = Ma(b, a[c])
        }
        return b
    };
    k.set = function(a, b) {
        Ug(this);
        this.a = null;
        a = Vg(this, a);
        Wg(this, a) && (this.p -= this.j.get(a).length);
        this.j.set(a, [b]);
        this.p++;
        return this
    };
    k.get = function(a, b) {
        var c = a ? this.A(a) : [];
        return 0 < c.length ? String(c[0]) : b
    };
    k.toString = function() {
        if (this.a) return this.a;
        if (!this.j) return "";
        for (var a = [], b = this.j.F(), c = 0; c < b.length; c++)
            for (var d = b[c], e = encodeURIComponent(String(d)), d = this.A(d), f = 0; f < d.length; f++) {
                var g = e;
                "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g)
            }
        return this.a = a.join("&")
    };
    k.clone = function() {
        var a = new Kg;
        a.a = this.a;
        this.j && (a.j = this.j.clone(), a.p = this.p);
        return a
    };

    function Vg(a, b) {
        var c = String(b);
        a.b && (c = c.toLowerCase());
        return c
    }

    function Qg(a, b) {
        b && !a.b && (Ug(a), a.a = null, Fg(a.j, function(a, b) {
            var e = b.toLowerCase();
            b != e && (this.remove(b), this.remove(e), 0 < a.length && (this.a = null, this.j.set(Vg(this, e), Na(a)), this.p += a.length))
        }, a));
        a.b = b
    };
    var Xg = [],
        Yg = "/",
        Zg = "";

    function $g(a, b, c, d, e, f, g) {
        if (window.guidedhelp && window.guidedhelp.loaded) g && g();
        else {
            g && Xg.push(g);
            window.guidedhelp = window.guidedhelp || {};
            window.guidedhelp.onLoad = function() {
                window.help.guide.init(a, b, c, d, e, f);
                for (var g = 0; g < Xg.length; g++) Xg[g]();
                Xg.length = 0
            };
            g = window.document;
            var h = g.getElementsByTagName("head"),
                h = 0 < h.length ? h[0] : g.body;
            g = g.createElement("script");
            g.setAttribute("type", "text/javascript");
            g.setAttribute("src", "https://ssl.gstatic.com/inproduct_help/guidedhelp/guide_inproduct.js");
            h.appendChild(g)
        }
    }

    function ah(a, b, c, d, e, f, g, h, n, p, q, v) {
        $g(c, d, e, p, q, v, function() {
            window.help.guide.loadFlow(a, h, null, n)
        })
    }

    function bh() {
        var a = ab.get("GuidedHelpResume");
        return a ? Number(a.substring(0, a.indexOf(":"))) : null
    }

    function ch() {
        var a = ab.get("GuidedHelpResume");
        return a ? a.substring(a.indexOf(":") + 1) : null
    }

    function dh() {
        ab.remove("GuidedHelpResume", Yg, Zg)
    }
    t("hgb.loadFlow", ah);
    t("hgb.resumeCookiedFlow", function(a, b, c, d, e, f, g, h, n) {
        var p = bh();
        if (p) {
            var q = ch();
            dh();
            $g(b, c, d, g, h, n, function() {
                window.help.guide.loadFlow(p, q, !1)
            });
            return !0
        }
        return !1
    });
    t("hgb.setResumeCookieProperties", function(a, b) {
        Zg = a || "";
        Yg = b || ""
    });
    t("hgb.startFlowFromUrl", function(a, b, c, d, e, f, g, h, n) {
        a = Fc(g || window.top);
        a = Sg(Pc(a.a).location);
        var p = a.a.get("ghstartflowid");
        if (p) try {
            var p = parseInt(p, 10),
                q = a.a.get("ghstartstepid");
            dh();
            $g(b, c, d, g, h, n, function() {
                window.help.guide.loadFlow(p, q)
            });
            return !0
        } catch (v) {}
        return !1
    });

    function eh() {}
    eh.prototype.a = null;
    eh.prototype.getChildren = function() {
        this.a || (this.a = {});
        return this.a
    };
    var fh = {},
        gh = null;

    function hh(a) {
        gh || (gh = new eh, fh[""] = gh);
        var b;
        if (!(b = fh[a])) {
            b = new eh;
            var c = a.lastIndexOf("."),
                d = a.substr(c + 1);
            hh(a.substr(0, c)).getChildren()[d] = b;
            fh[a] = b
        }
        return b
    };
    var ih = window,
        jh = document,
        kh = ih.location;

    function lh() {}
    var mh = /\[native code\]/;

    function Z(a, b, c) {
        return a[b] = a[b] || c
    }

    function nh(a) {
        for (var b = 0; b < this.length; b++)
            if (this[b] === a) return b;
        return -1
    }

    function oh(a) {
        a = a.sort();
        for (var b = [], c = void 0, d = 0; d < a.length; d++) {
            var e = a[d];
            e != c && b.push(e);
            c = e
        }
        return b
    }

    function ph() {
        var a;
        if ((a = Object.create) && mh.test(a)) a = a(null);
        else {
            a = {};
            for (var b in a) a[b] = void 0
        }
        return a
    }
    var qh = Z(ih, "gapi", {});
    var $;
    $ = Z(ih, "___jsl", ph());
    Z($, "I", 0);
    Z($, "hel", 10);

    function rh() {
        var a = kh.href,
            b;
        if ($.dpo) b = $.h;
        else {
            b = $.h;
            var c = RegExp("([#].*&|[#])jsh=([^&#]*)", "g"),
                d = RegExp("([?#].*&|[?#])jsh=([^&#]*)", "g");
            if (a = a && (c.exec(a) || d.exec(a))) try {
                b = decodeURIComponent(a[2])
            } catch (e) {}
        }
        return b
    }

    function sh(a) {
        var b = Z($, "PQ", []);
        $.PQ = [];
        var c = b.length;
        if (0 === c) a();
        else
            for (var d = 0, e = function() {
                    ++d === c && a()
                }, f = 0; f < c; f++) b[f](e)
    }

    function th(a) {
        return Z(Z($, "H", ph()), a, ph())
    };
    var uh = Z($, "perf", ph());
    Z(uh, "g", ph());
    var vh = Z(uh, "i", ph());
    Z(uh, "r", []);
    ph();
    ph();

    function wh(a, b, c) {
        b && 0 < b.length && (b = xh(b), c && 0 < c.length && (b += "___" + xh(c)), 28 < b.length && (b = b.substr(0, 28) + (b.length - 28)), c = b, b = Z(vh, "_p", ph()), Z(b, c, ph())[a] = (new Date).getTime(), b = uh.r, "function" === typeof b ? b(a, "_p", c) : b.push([a, "_p", c]))
    }

    function xh(a) {
        return a.join("__").replace(/\./g, "_").replace(/\-/g, "_").replace(/\,/g, "_")
    };
    var yh = ph(),
        zh = [];

    function Ah(a) {
        throw Error("Bad hint" + (a ? ": " + a : ""));
    };
    zh.push(["jsl", function(a) {
        for (var b in a)
            if (Object.prototype.hasOwnProperty.call(a, b)) {
                var c = a[b];
                "object" == typeof c ? $[b] = Z($, b, []).concat(c) : Z($, b, c)
            } if (b = a.u) a = Z($, "us", []), a.push(b), (b = /^https:(.*)$/.exec(b)) && a.push("http:" + b[1])
    }]);
    var Bh = /^(\/[a-zA-Z0-9_\-]+)+$/,
        Ch = /^[a-zA-Z0-9\-_\.!]+$/,
        Dh = /^gapi\.loaded_[0-9]+$/,
        Eh = /^[a-zA-Z0-9,._-]+$/;

    function Fh(a, b, c, d) {
        var e = a.split(";"),
            f = yh[e.shift()],
            g = null;
        f && (g = f(e, b, c, d));
        if (b = g) b = g, c = b.match(Gh), d = b.match(Hh), b = !!d && 1 === d.length && Ih.test(b) && !!c && 1 === c.length;
        b || Ah(a);
        return g
    }

    function Jh(a, b, c, d) {
        function e(a) {
            return encodeURIComponent(a).replace(/%2C/g, ",")
        }
        a = Kh(a);
        Dh.test(c) || Ah("invalid_callback");
        b = Lh(b);
        d = d && d.length ? Lh(d) : null;
        return [encodeURIComponent(a.Ja).replace(/%2C/g, ",").replace(/%2F/g, "/"), "/k=", e(a.version), "/m=", e(b), d ? "/exm=" + e(d) : "", "/rt=j/sv=1/d=1/ed=1", a.na ? "/am=" + e(a.na) : "", a.oa ? "/rs=" + e(a.oa) : "", "/cb=", e(c)].join("")
    }

    function Kh(a) {
        "/" !== a.charAt(0) && Ah("relative path");
        for (var b = a.substring(1).split("/"), c = []; b.length;) {
            a = b.shift();
            if (!a.length || 0 == a.indexOf(".")) Ah("empty/relative directory");
            else if (0 < a.indexOf("=")) {
                b.unshift(a);
                break
            }
            c.push(a)
        }
        a = {};
        for (var d = 0, e = b.length; d < e; ++d) {
            var f = b[d].split("="),
                g = decodeURIComponent(f[0]),
                h = decodeURIComponent(f[1]);
            2 == f.length && g && h && (a[g] = a[g] || h)
        }
        b = "/" + c.join("/");
        Bh.test(b) || Ah("invalid_prefix");
        c = Mh(a, "k", !0);
        d = Mh(a, "am");
        a = Mh(a, "rs");
        return {
            Ja: b,
            version: c,
            na: d,
            oa: a
        }
    }

    function Lh(a) {
        for (var b = [], c = 0, d = a.length; c < d; ++c) {
            var e = a[c].replace(/\./g, "_").replace(/-/g, "_");
            Eh.test(e) && b.push(e)
        }
        return b.join(",")
    }

    function Mh(a, b, c) {
        a = a[b];
        !a && c && Ah("missing: " + b);
        if (a) {
            if (Ch.test(a)) return a;
            Ah("invalid: " + b)
        }
        return null
    }
    var Ih = /^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,
        Hh = /\/cb=/g,
        Gh = /\/\//g;

    function Nh() {
        var a = rh();
        if (!a) throw Error("Bad hint");
        return a
    }
    yh.m = function(a, b, c, d) {
        (a = a[0]) || Ah("missing_hint");
        return "https://apis.google.com" + Jh(a, b, c, d)
    };
    var Oh = decodeURI("%73cript");

    function Ph(a, b) {
        for (var c = [], d = 0; d < a.length; ++d) {
            var e = a[d];
            e && 0 > nh.call(b, e) && c.push(e)
        }
        return c
    }

    function Qh(a) {
        "loading" != jh.readyState ? Rh(a) : jh.write("<" + Oh + ' src="' + encodeURI(a) + '"></' + Oh + ">")
    }

    function Rh(a) {
        var b = jh.createElement(Oh);
        b.setAttribute("src", a);
        b.async = "true";
        (a = jh.getElementsByTagName(Oh)[0]) ? a.parentNode.insertBefore(b, a): (jh.head || jh.body || jh.documentElement).appendChild(b)
    }

    function Sh(a, b) {
        var c = b && b._c;
        if (c)
            for (var d = 0; d < zh.length; d++) {
                var e = zh[d][0],
                    f = zh[d][1];
                f && Object.prototype.hasOwnProperty.call(c, e) && f(c[e], a, b)
            }
    }

    function Th(a, b) {
        Uh(function() {
            var c;
            c = b === rh() ? Z(qh, "_", ph()) : ph();
            c = Z(th(b), "_", c);
            a(c)
        })
    }

    function Vh(a, b) {
        var c = b || {};
        "function" == typeof b && (c = {}, c.callback = b);
        Sh(a, c);
        var d = a ? a.split(":") : [],
            e = c.h || Nh(),
            f = Z($, "ah", ph());
        if (f["::"] && d.length) {
            for (var g = [], h = null; h = d.shift();) {
                var n = h.split("."),
                    n = f[h] || f[n[1] && "ns:" + n[0] || ""] || e,
                    p = g.length && g[g.length - 1] || null,
                    q = p;
                p && p.hint == n || (q = {
                    hint: n,
                    pa: []
                }, g.push(q));
                q.pa.push(h)
            }
            var v = g.length;
            if (1 < v) {
                var L = c.callback;
                L && (c.callback = function() {
                    0 == --v && L()
                })
            }
            for (; d = g.shift();) Wh(d.pa, c, d.hint)
        } else Wh(d || [], c, e)
    }

    function Wh(a, b, c) {
        function d(a, b) {
            if (p) return 0;
            ih.clearTimeout(n);
            v.push.apply(v, D);
            var d = ((qh || {}).config || {}).update;
            d ? d(f) : f && Z($, "cu", []).push(f);
            if (b) {
                wh("me0", a, L);
                try {
                    Th(b, c)
                } finally {
                    wh("me1", a, L)
                }
            }
            return 1
        }
        a = oh(a) || [];
        var e = b.callback,
            f = b.config,
            g = b.timeout,
            h = b.ontimeout,
            n = null,
            p = !1;
        if (g && !h || !g && h) throw "Timeout requires both the timeout parameter and ontimeout parameter to be set";
        var q = Z(th(c), "r", []).sort(),
            v = Z(th(c), "L", []).sort(),
            L = [].concat(q);
        0 < g && (n = ih.setTimeout(function() {
            p = !0;
            h()
        }, g));
        var D = Ph(a, v);
        if (D.length) {
            var D = Ph(a, q),
                na = Z($, "CP", []),
                ta = na.length;
            na[ta] = function(a) {
                function b() {
                    var a = na[ta + 1];
                    a && a()
                }

                function c(b) {
                    na[ta] = null;
                    d(D, a) && sh(function() {
                        e && e();
                        b()
                    })
                }
                if (!a) return 0;
                wh("ml1", D, L);
                0 < ta && na[ta - 1] ? na[ta] = function() {
                    c(b)
                } : c(b)
            };
            if (D.length) {
                var R = "loaded_" + $.I++;
                qh[R] = function(a) {
                    na[ta](a);
                    qh[R] = null
                };
                a = Fh(c, D, "gapi." + R, q);
                q.push.apply(q, D);
                wh("ml0", D, L);
                b.sync || ih.___gapisync ? Qh(a) : Rh(a)
            } else na[ta](lh)
        } else d(D) && e && e()
    };

    function Uh(a) {
        if ($.hee && 0 < $.hel) try {
            return a()
        } catch (b) {
            $.hel--, Vh("debug_error", function() {
                try {
                    window.___jsl.hefn(b)
                } catch (a) {
                    throw b;
                }
            })
        } else return a()
    };
    qh.load = function(a, b) {
        return Uh(function() {
            return Vh(a, b)
        })
    };

    function Xh(a, b) {
        var c = fa(b) ? {
            callback: b
        } : b || {};
        c._c && c._c.jsl && c._c.jsl.h || kb(c, {
            _c: {
                jsl: {
                    h: E("GAPI_HINT_PARAMS")
                }
            }
        });
        if (E("GAPI_HINT_OVERRIDE")) {
            var d = We(document.location.href).gapi_jsh;
            d && kb(c, {
                _c: {
                    jsl: {
                        h: d
                    }
                }
            })
        }
        Vh(a, c)
    };
    hh("yt.help.guide");

    function Yh() {
        Xh("client", function() {
            eb(E("GUIDED_HELP_FLOWS"), function(a, b) {
                Zh(b, !0)
            })
        })
    }

    function Zh(a, b) {
        if (!b || !$h(a)) {
            var c = E("GUIDED_HELP_LOCALE") || "en_US",
                d = "https://clients6.google.com";
            "test" == E("GUIDED_HELP_ENVIRONMENT") && (d = "https://content-googleapis-test.sandbox.google.com");
            window.guidedhelp = window.guidedhelp || {};
            window.guidedhelp.onError = function() {};
            ah(a, 0, "/youtube", c, "youtube2", 0, 0, null, null, null, d, "AIzaSyBsoPoGbMyCfUNm_M-Hb-th-xAkxSutDvM");
            ai(a)
        }
    }

    function ai(a) {
        var b = bi(a);
        b && bb(b, "true", 7776E3);
        Gb("DISMISSED", a)
    }

    function $h(a) {
        if (a = bi(a)) return !!cb(a)
    }

    function bi(a) {
        var b = E("GUIDED_HELP_FLOWS");
        return b && b[a]
    };

    function ci() {}
    u(ci, Bf);
    aa(ci);
    ci.prototype.C = "slider";

    function di() {
        var a = ci.getInstance(),
            b = O(Y(a));
        x(b, function(a) {
            var b = P(Y(this, "body"), a),
                e = Na(O(Y(this, "item"), a)),
                f;
            e && e.length ? (f = Yd(a) ? ei(a, b, e) : fi(a, b, e), b = Yd(a) ? fi(a, b, e) : ei(a, b, e), f = f == e[0], e = b == e[e.length - 1]) : f = e = !0;
            Wa(a, Y(this, "at-head"), f);
            Wa(a, Y(this, "at-tail"), e);
            if (this.a(a, "disable-slider-buttons")) {
                if (b = P(Y(this, "prev"), a)) b.disabled = f;
                if (a = P(Y(this, "next"), a)) a.disabled = e
            }
        }, a)
    }

    function fi(a, b, c) {
        function d(a) {
            return Xd(a).x > e - 1
        }
        var e = Xd(b).x;
        return Yd(a) ? Ja(c, d) : Ia(c, d)
    }

    function ei(a, b, c) {
        function d(a) {
            a = Xd(a).x + a.offsetWidth;
            return e > a - 1
        }
        var e = Xd(b).x + b.offsetWidth;
        return Yd(a) ? Ia(c, d) : Ja(c, d)
    };
    var gi = !1;
    var hi = -2;

    function ii() {
        if (-2 == hi) {
            hi = parseInt(cb("ACTIVITY", "-1"), 10);
            V(document, "keypress", ji);
            V(document, "click", ki);
            var a = E("LIST_AUTO_PLAY_VALUE");
            a && 1 < a || li()
        }
    }

    function ji() {
        li()
    }

    function ki() {
        li()
    }

    function li() {
        ii();
        var a = oa();
        1E3 > a - hi || (hi = a, bb("ACTIVITY", "" + a))
    };

    function mi(a, b, c, d, e, f) {
        this.a = null;
        this.R = c;
        this.g = a;
        this.S = b;
        this.d = d;
        this.i = E("GOOGLEPLUS_HOST") + (e ? "/u/" + e : "") + (f ? "/b/" + f : "") + "/_/notifications/frame#pid=36";
        this.b = N(a)
    }

    function ni(a, b, c, d) {
        return {
            onOpen: s(function(a) {
                return a.openInto(c)
            }, a),
            onReady: ma(function(a) {
                a && a()
            }, d ? b.showOnepick : void 0),
            onClose: ma(function(a, b) {
                a && a();
                b.remove()
            }, d ? b.hideOnepick : void 0)
        }
    }

    function oi(a, b, c) {
        a && a[b] && a[b].apply(a, Array.prototype.slice.call(arguments, 2))
    }

    function pi(a, b) {
        var c = {
            setNotificationWidgetSize: s(function(a, b) {
                this.b.style.width = a;
                this.b.style.height = b
            }, a),
            setNotificationWidgetHeight: s(function(a) {
                this.b.style.height = a
            }, a),
            setNotificationText: s(function(a) {
                this.R(parseInt(a, 10))
            }, a),
            hideNotificationWidget: ma(function(a) {
                a && a()
            }, b.hideNotificationWidget),
            openSharebox: function() {},
            onError: function() {}
        };
        a.a = iframes.open(a.i, {
            style: "iframe-style"
        }, {
            origin: window.location.protocol + "//" + window.location.hostname,
            source: "yt",
            hl: a.d
        }, c, function() {})
    }
    mi.prototype.load = function(a) {
        iframes.setHandler("iframe-style", ni(this, a, this.g, !1));
        iframes.setHandler("onepick", ni(this, a, this.S, !0));
        pi(this, a)
    };
    mi.prototype.close = function() {
        oi(this.a, "onHide")
    };
    mi.prototype.o = function() {
        return Lc(window).height - 60 - 20
    };

    function qi(a, b) {
        oi(a.a, b ? "onIdle" : "onActive")
    };

    function ri(a, b, c) {
        this.g = !1;
        this.o = 0;
        this.b = N("sb-container");
        this.d = N("sb-button-notify");
        this.S = we("SPAN", "yt-uix-button-content", N("sb-button-notify"));
        this.i = N("sb-onepick-target");
        this.a = new mi("sb-target", "sb-onepick-target", s(this.va, this), a, b, c);
        this.a.load({
            hideNotificationWidget: s(this.ga, this),
            showOnepick: s(this.ua, this),
            hideOnepick: s(this.ta, this)
        });
        this.R = S(this.i);
        this.ha();
        V(window, "resize", s(this.ha, this));
        V(window, "click", s(this.ga, this));
        ii();
        a = s(this.ra, this);
        fa(a) && (a = ub(a));
        window.setInterval(a, 12E4)
    }
    k = ri.prototype;
    k.La = function(a) {
        if (this.g) si(this), qi(this.a, !0);
        else {
            this.a.close();
            ti(this, !0);
            H(this.d, "sb-notif-clicked");
            var b = this.a,
                c = {
                    maxWidgetHeight: b.o()
                };
            oi(b.a, "onShowNotificationsOnly", c);
            this.g = !0;
            qi(this.a, !1)
        }
        a = a || window.event;
        a.cancelBubble = !0;
        a.stopPropagation && a.stopPropagation()
    };

    function ti(a, b) {
        b ? (Xb(a.b, "sb-off", "sb-on"), H(a.b, "sb-card-notif")) : (Xb(a.b, "sb-on", "sb-off"), Vb(a.b, "sb-card-notif"))
    }

    function si(a) {
        ti(a, !1);
        a.g = !1;
        Vb(a.d, "sb-notif-clicked")
    }
    k.ga = function() {
        this.g && (this.a.close(), si(this), ui(this))
    };
    k.va = function(a) {
        this.o = a;
        ui(this)
    };

    function ui(a) {
        dd(a.S, a.o + "");
        0 == a.o ? Xb(a.d, "sb-notif-on", "sb-notif-off") : Xb(a.d, "sb-notif-off", "sb-notif-on")
    }
    k.ua = function() {
        Xb(this.i, "sb-off", "sb-on")
    };
    k.ta = function() {
        Xb(this.i, "sb-on", "sb-off")
    };
    k.ha = function() {
        var a = Math.max((Lc(window).height - this.R.height) / 2, 0);
        this.i.style.top = a + "px"
    };
    k.ra = function() {
        6E5 < (-1 == hi || -2 == hi ? -1 : Math.max(oa() - hi, 0)) ? qi(this.a, !1) : qi(this.a, !0)
    };

    function vi() {
        var a = N("masthead-expanded");
        me(a);
        Gb("masthead-mastfeedr-toggle");
        T("masthead-expanded-menu", !0);
        T("masthead-expanded-acct-sw-container", !1);
        var b = N("yt-masthead-dropdown");
        b && Xa(b, "reversed");
        gi || A(N("masthead-expanded-container"), "accountswitch");
        C(a, "loaded") || ((b = N("masthead-expanded-menu-gaia-photo")) && !b.src && (b.src = C(b, "src")), df("/playlist_bar_ajax", {
            N: {
                action_get_playlists_masthead: 1,
                feature: "mhee"
            },
            format: "JSON",
            Ea: !0,
            onSuccess: function(b, d) {
                N("masthead-expanded-lists-container").innerHTML =
                    d.html;
                B(a, "loaded", "true");
                var e = N("yt-masthead-multilogin");
                if (!C(e, "loaded")) {
                    var f = d.delegate_accounts;
                    if (f) {
                        var g = N("yt-masthead-multilogin-channel-switcher-item");
                        x(f, function(a) {
                            a = Tc(a);
                            e.insertBefore(a, g)
                        });
                        B(e, "loaded", "true");
                        di()
                    }
                }
            }
        }))
    }

    function wi() {
        A(document.body, "sitewide-ticker-visible");
        Gb("masthead-ticker-close")
    }

    function xi() {
        Xh("iframes", function() {
            var a = N("sb-button-notify"),
                b = new ri(E("SANDBAR_LOCALE"), E("SESSION_INDEX"), E("DELEGATED_SESSION_ID"));
            V(a, "click", s(b.La, b));
            Gb("sandbar-init")
        })
    }
    var yi = "";

    function zi() {
        var a = E("SBOX_JS_URL") || yi;
        if (a) {
            yi = a;
            var b = m("yt.www.masthead.searchbox.init");
            b ? b() : Ai(a, function() {
                var a;
                try {
                    a = m("yt.www.masthead.searchbox.init"), a()
                } catch (b) {
                    throw b.message = b.message + ' sbox type: "' + ba(a) + '"', b;
                }
            })
        }
    }

    function Ai(a, b) {
        var c = N("masthead-search-term");
        if (c) {
            var d, e, f = function() {
                Bi();
                mg = b;
                Kb(a, b);
                Fe([d, e])
            };
            d = Ee(c, "mouseover", f);
            e = Ee(c, "keypress", f)
        }
    }

    function Bi() {
        if (!m("yt.www.masthead.searchbox.init")) {
            var a = mg;
            yi && a && (a = "" + ha(a), (a = Mb[a]) && Fb(a));
            mg = null
        }
    };

    function Ci(a, b, c) {
        c = c || "";
        var d = window;
        a = Se(Ue([a], b || {}));
        d.location = a + c
    };

    function Di(a, b) {
        this.b = a;
        this.a = b
    }
    Di.prototype.write = function(a, b, c, d) {
        var e = tb("promo_ajax_token");
        a = {
            action_write_promo: 1,
            method: a,
            subtype: this.b
        };
        this.a && (a.encrypted_video_id = this.a);
        e = {
            session_token: e
        };
        c && (e.json_data = c);
        df(d || "/promo_ajax", {
            method: "POST",
            N: a,
            D: e,
            onSuccess: function() {
                if (b) {
                    b.xa && U(N(b.xa));
                    b.ya && oe(N(b.ya));
                    if (b.onSuccess) b.onSuccess();
                    if (b.redirectUrl) return Ci(b.redirectUrl)
                }
            },
            onError: function() {
                b && b.za && oe(N(b.za));
                if (b && b.onError) b.onError()
            }
        })
    };

    function Ei() {
        var a = Fi;
        df("/promo_ajax", {
            method: "POST",
            N: {
                action_get_promo_status: 1,
                subtype: Gi.b
            },
            D: {
                session_token: tb("promo_ajax_token")
            },
            onSuccess: function(b, c) {
                a(c.show_promo)
            },
            onError: void 0
        })
    };
    var Hi = !1;

    function Ii(a) {
        if (a = a.match(/[\d]+/g)) a.length = 3, a.join(".")
    }
    if (navigator.plugins && navigator.plugins.length) {
        var Ji = navigator.plugins["Shockwave Flash"];
        Ji && (Hi = !0, Ji.description && Ii(Ji.description));
        navigator.plugins["Shockwave Flash 2.0"] && (Hi = !0)
    } else if (navigator.mimeTypes && navigator.mimeTypes.length) {
        var Ki = navigator.mimeTypes["application/x-shockwave-flash"];
        (Hi = Ki && Ki.enabledPlugin) && Ii(Ki.enabledPlugin.description)
    } else try {
        var Li = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),
            Hi = !0;
        Ii(Li.GetVariable("$version"))
    } catch (Mi) {
        try {
            Li = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),
                Hi = !0
        } catch (Ni) {
            try {
                Li = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), Hi = !0, Ii(Li.GetVariable("$version"))
            } catch (Oi) {}
        }
    };
    var Pi, Qi, Ri, Si, Ti, Ui, Vi;
    Vi = Ui = Ti = Si = Ri = Qi = Pi = !1;
    var Wi = hc();
    Wi && (-1 != Wi.indexOf("Firefox") ? Pi = !0 : -1 != Wi.indexOf("Camino") ? Qi = !0 : -1 != Wi.indexOf("iPhone") || -1 != Wi.indexOf("iPod") ? Ri = !0 : -1 != Wi.indexOf("iPad") ? Si = !0 : -1 != Wi.indexOf("Chrome") ? Ui = !0 : -1 != Wi.indexOf("Android") ? Ti = !0 : -1 != Wi.indexOf("Safari") && (Vi = !0));
    var Xi = Pi,
        Yi = Qi,
        Zi = Ri,
        $i = Si,
        aj = Ti,
        bj = Ui,
        cj = Vi;

    function dj(a) {
        return (a = a.exec(hc())) ? a[1] : ""
    }(function() {
        if (Xi) return dj(/Firefox\/([0-9.]+)/);
        if (K || lc) return xc;
        if (bj) return dj(/Chrome\/([0-9.]+)/);
        if (cj) return dj(/Version\/([0-9.]+)/);
        if (Zi || $i) {
            var a;
            if (a = /Version\/(\S+).*Mobile\/(\S+)/.exec(hc())) return a[1] + "." + a[2]
        } else {
            if (aj) return (a = dj(/Android\s+([0-9.]+)/)) ? a : dj(/Version\/([0-9.]+)/);
            if (Yi) return dj(/Camino\/([0-9.]+)/)
        }
        return ""
    })();

    function ej() {}
    u(ej, Bf);
    aa(ej);
    ej.prototype.C = "scroller";

    function fj(a) {
        if (!a.length) return 0;
        var b = a[0],
            c = b.offsetHeight;
        1 < a.length && (c = a[1].offsetTop - b.offsetTop);
        return c
    }

    function gj(a, b, c) {
        if (!(!b || isNaN(c) || 0 > c || (a = O(Y(a, "scroll-unit"), b), 0 >= a.length))) {
            c >= a.length && (c = a.length - 1);
            var d = fj(a),
                e = b.offsetHeight,
                f = Math.max(Math.floor(b.scrollTop / d), 0);
            c > f - 1 && (d = Math.floor(e / d), e = a.length, c + d > e && (c = e - d + 1));
            0 > c && (c = 0);
            c = a[c].offsetTop;
            b && !isNaN(c) && (0 > c && (c = 0), b.scrollTop = c, B(b, "scroller-offset", c + ""), lg(b))
        }
    }

    function hj() {
        var a = ej.getInstance(),
            b = ij;
        if (!b) return [];
        a = O(Y(a, "scroll-unit"), b);
        if (0 >= a.length) return [];
        var c = b.scrollTop,
            d = fj(a),
            e = b.offsetHeight,
            b = Math.max(Math.floor(c / d), 0),
            c = Math.min(Math.ceil((c + e) / d), a.length);
        return Qa(Na(a), b, c)
    };
    var jj = !1;

    function kj() {
        if (ng = N("masthead-appbar")) og = N("masthead-positioner"), pg = N("masthead-positioner-height-offset"), lj = S(pg).height, mj(), nj.push(G("masthead-mastfeedr-toggle", oj)), nj.push(G("masthead-ticker-close", pj)), nj.push(G("appbar-guide-delay-load", mj)), nj.push(G("page-resize", qj)), rj = sj(), tj(), uj = new Bg(vj), wj.push(V(window, "scroll", function() {
            null != uj.v || uj.start()
        })), nj.push(G("init", xj)), nj.push(G("dispose", yj)), jj || xj()
    }

    function xj() {
        jj ? (A(document.body, "show-guide-if-wide"), zj(Aj)) : jj = !0;
        var a = -1 * ce(og).y,
            b = document.body.scrollHeight,
            c = a - (b - document.body.clientHeight);
        0 < c && (document.body.style.minHeight = b + c + "px");
        Oc(document).scrollTop += a;
        Bj = Nc(document).y;
        Cj = P("appbar-content-hidable");
        Dj = P("appbar-content-trigger")
    }

    function yj() {
        Aj = y(document.body, "show-guide");
        Dj = Cj = null
    }

    function Fi(a) {
        a && (Yh(), Zh(3420440), t("guidedhelp.onFlowStepSet", Ej), Gi.write("write_dismiss"))
    }

    function Ej(a) {
        var b = null;
        if ("__1__" == a) Fj ? zj(!0) : "__start__" == Gj && (m("help.guide.reset")(), le(N("masthead-expanded")) && vi(), F(function() {
            zj(!0);
            Fj = !0;
            Zh(3420440);
            m("help.guide.goToStep")("__1__")
        }, 500));
        else if ("__2__" == a) E("GUIDED_HELP_SHOW_APPBAR_NAV_STEP") || (b = "__1__" == Gj ? "__3__" : "__1__");
        else if ("__3__" == a) {
            var c = Cf.getInstance(),
                d = N("appbar-settings-button");
            Ff(c, d)
        }
        "__1__" == Gj ? y(document.body, "guide-pinned") || zj(!1) : "__3__" == Gj && (c = Cf.getInstance(), d = N("appbar-settings-button"), If(c, d));
        Gj =
            a;
        b && m("help.guide.goToStep")(b)
    }

    function sj() {
        return y(document.body, "guide-pinning-enabled") && y(document.body, "guide-pinned")
    }
    var rj = !1;

    function qj(a) {
        rj && (a.width >= Hj() ? (z(document.body, "guide-pinned"), Ij() || zj(!0)) : (Ij() && sj() && zj(!1), A(document.body, "guide-pinned")))
    }

    function tj() {
        var a = N("masthead-appbar-container");
        Jj = S(og).height - S(a).height
    }

    function Kj(a) {
        sj() || Q(a.target, "appbar-guide-clickable-ancestor") || Ij() && zj(!1)
    }

    function vj() {
        var a = Math.max(0, Nc(document).y),
            b = Bj;
        Bj = a;
        var c = b - a;
        0 < c && 0 == Lj ? Lj = b : 0 > c && (Lj = 0);
        var c = Math.min(0, Math.max(c + Mj, -Jj)),
            d = a < Jj,
            b = a > b && Math.abs(Mj) < Jj,
            e = !0,
            e = y(document.body, "exp-appbar-autohide-always") ? !1 : 100 <= Lj - a;
        (d || b || e) && Mj != c && (og.style.top = c + "px", Mj = c, Nj());
        Dj && Cj && (a = S(Cj).height, c = S(Dj).height, d = S(og).height, d = ce(og).y + d, c = ce(Dj).y + c - d, 0 > c ? c = 0 : c > a && (c = a), Cj.style.marginTop = c + "px")
    }

    function Nj() {
        var a = N("appbar-guide-menu");
        a && (a.style.paddingTop = Mj + lj + "px");
        Oj()
    }

    function mj() {
        if (!Pj) {
            var a = N("appbar-guide-menu");
            if (a && !P("guide-module-loading", a)) {
                Nj();
                var b = "visible" == Sd(a, "visibility");
                A(document.body, "show-guide-if-wide");
                Wa(document.body, "show-guide", b);
                wj.push(Ge(a, "click", function() {
                    Qj = !sj()
                }, "guide-item"));
                wj.push(V(a, "mouseleave", Rj));
                wj.push(V(document.body, "click", Kj));
                a = P("appbar-guide-toggle");
                wj.push(V(a, "click", Sj));
                Pj = !0
            }
        }
    }

    function Rj() {
        Qj && (zj(!1), Qj = !1)
    }

    function zj(a) {
        var b = y(document.body, "show-guide");
        Wa(document.body, "show-guide", a);
        (a && !b || !a && b) && Tj("guide-main", !0, !1)
    }

    function Sj() {
        var a = !Ij();
        zj(a);
        Rf.getInstance();
        Vf(128, !0);
        Vf(129, a);
        bb("PREF", Wf(), 63072E3);
        Xf(!0).width >= Hj() && (Wa(document.body, "guide-pinned", a), rj = a)
    }

    function Ij() {
        return y(document.body, "show-guide")
    }

    function pj() {
        lj = S(pg).height;
        Nj();
        tj()
    }

    function oj() {
        var a = ce(og).y,
            b = S(og).height;
        pg.style.height = a + b + "px";
        lj = b;
        Nj();
        tj();
        le(N("masthead-expanded")) && N("appbar-guide-button") && (Gi = new Di("guided_help_appbar"), Ei())
    }
    var wj = [],
        nj = [],
        Bj = 0;

    function Hj() {
        return y(document.body, "exp-appbar-open-guide") ? 1233 : 1326
    }
    var Jj = 0,
        Qj = !1,
        Pj = !1,
        Gi = null,
        Gj = "",
        Fj = !1,
        Lj = 0,
        Mj = 0,
        lj = 0,
        uj = null,
        Cj = null,
        Dj = null,
        Aj = !1;
    var Uj, W, Vj, Wj, Xj, Yj, Zj, ak, bk;
    var ck, dk = [];

    function ek(a, b, c, d) {
        Gb("guide-show-notification");
        a = zg(a);
        var e = xe(a);
        d && (a = P("appbar-guide-notification-text-content", e), dd(a, d));
        b.style.position = "relative";
        Uc(b, e);
        F(function() {
            z(e, "appbar-guide-notification-show")
        }, 0);
        c && F(ma(c, e), 3E3)
    }

    function fk(a) {
        A(a, "appbar-guide-notification-show");
        F(function() {
            bd(a).style.position = "";
            Xc(a)
        }, se(a))
    }

    function gk(a, b, c) {
        z(a, "guide-item-collapsed");
        c();
        F(function() {
            A(a, "guide-item-collapsed");
            z(b, "overflowable-list-item")
        }, 0)
    }

    function hk(a, b) {
        z(a, "guide-item-collapsed");
        F(function() {
            b()
        }, se(a))
    }

    function ik(a) {
        if (N("guide-subscriptions-promo")) Gb("force-reload-subscriptions");
        else {
            var b = document.createElement("ul");
            b.innerHTML = a;
            a = Na(Zc(b));
            x(a, function(a) {
                var b = P("guide-item", a),
                    e = C(b, "external-id");
                e && null == jk(e) && (gk(b, a, ma(kk, a)), a = N("appbar-guide-notification-subscription"), Ij() ? (e = gd(b), ek(a, b, fk, e)) : ek(a, ck, fk, void 0), lk())
            })
        }
        a = b = null
    }

    function mk(a) {
        var b = jk(a);
        if (b) {
            var c = N("appbar-guide-notification-unsubscription");
            Ij() ? null != Q(b, "guide-flyout") ? nk(a) : ek(c, b, function() {
                hk(b, ma(nk, a))
            }) : (nk(a), ek(c, ck, fk, void 0))
        }
    }

    function ok() {
        var a = N("appbar-guide-notification-watch-later"),
            b = Ij() ? $c(N("watch_later-guide-item")) : ck;
        ek(a, b, fk, void 0)
    }

    function pk(a) {
        var b;
        b = zg(N("appbar-guide-item-template-playlist"));
        b = new wg(b, ["ID", "URL", "TITLE"], void 0);
        b = Ag(b, {
            ID: a.id,
            URL: a.url,
            TITLE: a.title
        });
        var c = xe(b);
        b = $c(c);
        gk(b, c, ma(qk, c));
        c = N("appbar-guide-notification-playlist-like");
        Ij() ? ek(c, b, fk, a.title) : ek(c, ck, fk, void 0)
    }

    function rk(a) {
        var b = jk(a.id);
        if (b) {
            var c = N("appbar-guide-notification-playlist-unlike");
            Ij() ? null != Q(b, "guide-flyout") ? sk(a.id) : ek(c, b, function() {
                hk(b, ma(sk, a.id))
            }) : (sk(a.id), ek(c, ck, fk, void 0))
        }
    };

    function tk() {}
    u(tk, Kf);
    aa(tk);
    tk.prototype.C = "hovercard";

    function uk(a, b) {
        this.q = a;
        this.g = !1;
        this.b = new pb;
        this.i = Ge(this.q, "click", s(this.Ba, this), "yt-dialog-dismiss");
        vk(this);
        this.d = b
    }
    var wk = {
        LOADING: "loading",
        Oa: "content",
        Pa: "working"
    };

    function xk(a, b) {
        a.U() || a.b.la("post-all", b)
    }

    function vk(a) {
        a = P("yt-dialog-fg-content", a.q);
        var b = [];
        eb(wk, function(a) {
            b.push("yt-dialog-show-" + a)
        });
        Xb(a, b, "yt-dialog-show-content")
    }
    k = uk.prototype;
    k.show = function() {
        if (!this.U()) {
            document.activeElement && document.activeElement != document.body && document.activeElement.blur();
            this.a || (this.a = N("yt-dialog-bg"), this.a || (this.a = document.createElement("div"), this.a.id = "yt-dialog-bg", this.a.className = "yt-dialog-bg", document.body.appendChild(this.a)));
            var a = window,
                b = a.document,
                c = 0;
            if (b) {
                var a = Lc(a).height,
                    c = b.body,
                    d = b.documentElement;
                if (Mc(b) && d.scrollHeight) c = d.scrollHeight != a ? d.scrollHeight : d.offsetHeight;
                else {
                    var b = d.scrollHeight,
                        e = d.offsetHeight;
                    d.clientHeight !=
                        e && (b = c.scrollHeight, e = c.offsetHeight);
                    c = b > a ? b > e ? b : e : b < e ? b : e
                }
            }
            this.a.style.height = c + "px";
            oe(this.a);
            ye(this.q);
            b = yk(this);
            zk(b);
            this.d || V(document, "keydown", s(this.ia, this));
            b = this.q;
            a = G("player-added", this.Aa, this);
            B(b, "player-ready-pubsub-key", a);
            oe(this.q);
            H(document.body, "yt-dialog-active");
            Nf(Of.getInstance());
            Nf(tk.getInstance())
        }
    };

    function Ak() {
        var a = O("yt-dialog");
        return Ga(a, function(a) {
            return le(a)
        })
    }
    k.Aa = function() {
        ye(this.q)
    };

    function yk(a) {
        var b = Ic("iframe", null, a.q);
        x(b, function(a) {
            var b = C(a, "onload");
            b && (b = m(b)) && V(a, "load", b);
            if (b = C(a, "src")) a.src = b
        }, a);
        return Na(b)
    }

    function zk(a) {
        x(document.getElementsByTagName("iframe"), function(b) {
            -1 == Da(a, b) && H(b, "iframe-hid")
        })
    }

    function Bk() {
        var a = O("iframe-hid");
        x(a, function(a) {
            Vb(a, "iframe-hid")
        })
    }
    k.Ba = function(a) {
        a = a.currentTarget;
        a.disabled || (a = C(a, "action") || "", Ck(this, a))
    };

    function Ck(a, b) {
        if (!a.U()) {
            a.b.G("pre-all");
            a.b.G("pre-" + b);
            U(a.q);
            Nf(Of.getInstance());
            Nf(tk.getInstance());
            Ak() || (U(a.a), Vb(document.body, "yt-dialog-active"), ze(), Bk());
            if (!a.d) {
                var c = s(a.ia, a);
                (c = De(document, "keydown", c, !1)) && Fe(c)
            }
            if (c = a.q) {
                var d = C(c, "player-ready-pubsub-key");
                d && (Fb(d), mb(c, "player-ready-pubsub-key"))
            }
            a.b.G("post-all");
            Gb("yt-ui-dialog-hide-complete", a);
            "cancel" == b && Gb("yt-ui-dialog-cancelled", a);
            a.b && a.b.G("post-" + b)
        }
    }
    k.ia = function(a) {
        F(s(function() {
            27 == a.keyCode && Ck(this, "cancel")
        }, this), 0)
    };
    k.U = function() {
        return this.g
    };
    k.dispose = function() {
        le(this.q) && Ck(this, "dispose");
        Fe(this.i);
        this.b.dispose();
        this.b = null;
        this.g = !0
    };
    t("yt.ui.Dialog", uk);

    function Dk() {}
    u(Dk, Bf);
    aa(Dk);
    k = Dk.prototype;
    k.s = null;
    k.L = null;
    k.C = "overlay";

    function Ek(a, b) {
        if (!a.s || !le(a.s.q)) {
            var c = a.b(b),
                d = Fk(c, b);
            c || (c = d ? d.overlayParentNode : null);
            if (c && d) {
                var e = !!a.a(c, "disable-shortcuts") || !1;
                a.s = new uk(d, e);
                a.L = c;
                var f = P("yt-dialog-fg", d);
                if (f) {
                    var g = a.a(c, "overlay-class") || "",
                        h = a.a(c, "overlay-style") || "default",
                        n = a.a(c, "overlay-shape") || "default";
                    H(f, g, Y(a, h), Y(a, n))
                }
                a.s.show();
                Gk(a);
                e || (e = s(function(a) {
                    I(a.target, "yt-dialog-base") && Hk(this)
                }, a), d = P("yt-dialog-base", d), a.d = V(d, "click", e));
                a.g(c, "overlay-shown");
                Nf(Of.getInstance());
                Hf(Cf.getInstance())
            }
        }
    }

    function Gk(a) {
        a.i || (a.i = G("yt-uix-overlay-hide", Ik));
        a.s && xk(a.s, function() {
            var a = Dk.getInstance();
            a.L = null;
            a.s.dispose();
            a.s = null
        })
    }

    function Hk(a) {
        if (a.s) {
            var b = a.L;
            Ck(a.s, "overlayhide");
            a.g(b, "overlay-hidden");
            a.L = null;
            a.d && (Fe(a.d), a.d = null);
            a.s = null
        }
    }

    function Fk(a, b) {
        var c;
        if (a)
            if (c = P("yt-dialog", a)) {
                var d = N("body-container");
                d && (d.appendChild(c), a.overlayContentNode = c, c.overlayParentNode = a)
            } else c = a.overlayContentNode;
        else b && (c = Q(b, "yt-dialog"));
        return c
    }

    function Jk() {
        var a = Dk.getInstance();
        if (a.L) a = P("yt-dialog-fg-content", a.L.overlayContentNode);
        else i: {
            if (a = O("yt-dialog-fg-content"))
                for (var b = 0; b < a.length; b++) {
                    var c = Q(a[b], "yt-dialog");
                    if (le(c)) {
                        a = a[b];
                        break i
                    }
                }
            a = null
        }
        return a
    }
    k.hide = function() {
        Gb("yt-uix-overlay-hide")
    };

    function Ik() {
        Hk(Dk.getInstance())
    }
    k.show = function(a) {
        Ek(this, a)
    };
    var Kk = [];

    function Lk() {
        var a = Mk(),
            b = C(a, "collection-id"),
            c = P("subscription-picker-list-container", a),
            d = O("subscription-list-item", c),
            c = Fa(Ea(d, function(a) {
                return I(a, "selected") && !I(a, "saved")
            }), function(a) {
                return C(a, "channel-id")
            }),
            d = Fa(Ea(d, function(a) {
                return !I(a, "selected") && I(a, "saved")
            }), function(a) {
                return C(a, "channel-id")
            });
        Nk(a);
        var e = P("collection-name-input", a).value;
        e ? (Ok(a, !0), b ? Pk(b, e, c, d) : Qk(e, c)) : Rk(a, !0)
    }

    function Sk(a, b) {
        Nk(a);
        Dk.getInstance().hide();
        b.response && b.response.collection_url && Ci(b.response.collection_url)
    }

    function Pk(a, b, c, d) {
        var e = Mk();
        if (c.length || d.length) {
            var f = Pa(c, 0, 40),
                g = Pa(d, 0, 40),
                f = {
                    name: b,
                    session_token: tb("subscription_ajax"),
                    collection_id: a,
                    added_ids: f.join(","),
                    removed_ids: g.join(",")
                };
            df("/subscription_ajax?action_update_collection=1", {
                method: "POST",
                D: f,
                onSuccess: function(f, g) {
                    c.length || d.length ? Pk(a, b, c, d) : Sk(e, g)
                },
                onError: Tk(e)
            })
        } else Nk(e), Dk.getInstance().hide()
    }

    function Qk(a, b) {
        var c = Mk();
        if (b.length) {
            var d = Pa(b, 0, 40),
                d = {
                    name: a,
                    session_token: tb("subscription_ajax"),
                    external_channel_ids: d.join(",")
                };
            df("/subscription_ajax?action_add_collection=1", {
                method: "POST",
                D: d,
                onSuccess: function(d, f) {
                    if (b.length) {
                        var g = f.response.collection_id;
                        g && Pk(g, a, b, [])
                    } else Sk(c, f)
                },
                onError: Tk(c)
            })
        } else Nk(c), Dk.getInstance().hide()
    }

    function Uk() {
        var a = Mk(),
            b = C(a, "collection-id");
        Nk(a);
        Ok(a, !0);
        df("/subscription_ajax?action_remove_collection=1", {
            method: "POST",
            D: {
                collection_id: b,
                session_token: tb("subscription_ajax")
            },
            onSuccess: function() {
                Nk(a);
                Dk.getInstance().hide();
                Ci("/")
            },
            onError: Tk(a)
        })
    }

    function Vk() {
        var a = Mk(),
            b = P("subscription-picker-list-container", a),
            b = P("subscription-picker-list", b).cloneNode(!0),
            c = O("subscription-list-item", b);
        x(c, function(a) {
            I(a, "selected") || Xc(a)
        });
        c = P("selected-channel-list-container", a);
        Vc(c);
        c.appendChild(b);
        a = P("selected-channels-button", a);
        T(a, !!b)
    }

    function Wk(a) {
        var b = a.currentTarget;
        if (Q(b, "selected-channel-list-container")) {
            var c = C(b, "channel-id");
            a = Mk();
            a = P("subscription-picker-list-container", a);
            a = O("subscription-list-item", a);
            x(a, function(a) {
                C(a, "channel-id") == c && (b = a)
            })
        }
        Zb(b, "selected");
        Vk()
    }

    function Xk() {
        var a = Mk(),
            b = P("subscription-search-input", a);
        Yk(a, b && b.value)
    }

    function Zk() {
        var a = Mk();
        P("subscription-search-input", a).value = "";
        Yk(a, "")
    }

    function Yk(a, b) {
        var c = O("subscription-list-item", a),
            d = RegExp(b, "i");
        x(c, function(a) {
            var c = C(a, "channel-name");
            T(a, !b || d.test(c))
        });
        c = P("subscription-search-clear", a);
        ne(c, !!b)
    }

    function $k(a) {
        var b = C(a, "panel-class");
        b && (a = Jk(), a = P("subscription-picker", a), a = P(b, a), a = bd(a), x(Zc(a), function(a) {
            T(a, I(a, b))
        }))
    }

    function al(a) {
        $k(a.currentTarget)
    }

    function Mk() {
        var a = Jk();
        return P("subscription-picker", a)
    }

    function Nk(a) {
        bl(a, "");
        cl(a, !1);
        Ok(a, !1);
        Rk(a, !1)
    }

    function cl(a, b) {
        var c = P("subscription-picker-loading", a);
        T(c, b)
    }

    function Ok(a, b) {
        var c = P("subscription-picker-saving", a);
        T(c, b)
    }

    function Rk(a, b) {
        var c = P("collection-name-empty-error", a);
        T(c, b)
    }

    function bl(a, b) {
        var c = P("subscription-picker-errors", a);
        T(c, "" != b);
        b && (c = P("yt-alert-content", c), dd(c, b))
    }

    function Tk(a) {
        return function(b, c) {
            Nk(a);
            var d = c.errors;
            d && 0 < d.length && bl(a, d[0])
        }
    };

    function lk() {
        var a = E("GUIDE_SELECTED_ITEM"),
            b = m("yt.www.guide.selectGuideItem");
        b && b(a)
    };
    var dl, el = [];

    function fl(a) {
        if (N("guide-subscriptions-promo")) Gb("force-reload-subscriptions");
        else {
            var b = document.createElement("ul");
            b.innerHTML = a;
            a = Na(Zc(b));
            x(a, function(a) {
                z(a, "guide-notification-new");
                var b = P("guide-item", a);
                (b = C(b, "external-id")) && null == jk(b) && (kk(a), gl(a, !1, function() {
                    A(a, "guide-notification-new");
                    lk()
                }), hl(N("collapsed-guide-sub-notification"), a))
            })
        }
        a = b = null
    }

    function il(a) {
        nk(a);
        (a = N("collapsed-guide-sub-notification")) && A(a, "guide-notification")
    }

    function jl() {
        var a = N("watch_later-guide-item");
        a && (gl(a), hl(N("collapsed-guide-watch-later-notification"), a))
    }

    function kl() {
        var a = N("playlists-guide-item");
        a && (gl(a), hl(N("collapsed-guide-playlist-notification"), a))
    }

    function gl(a, b, c) {
        Gb("guide-show-notification");
        z(a, "guide-notification");
        var d = P("guide-item", a);
        if (b) {
            var e = C(a, "notification-text") || gd(d),
                f = d.innerHTML;
            Vc(d);
            dd(d, e)
        }
        var g = Qc("span", {
            className: "guide-notification-icon"
        });
        d.appendChild(g);
        F(function() {
            z(a, "guide-notification-enabled")
        }, 0);
        F(function() {
            A(a, "guide-notification-enabled");
            b ? d.innerHTML = f : Xc(g);
            F(function() {
                A(a, "guide-notification")
            }, se(d));
            c && c()
        }, 3E3)
    }

    function hl(a, b) {
        var c = N("guide-main"),
            d = y(c, "collapsed");
        dl || (dl = P("guide-notifications-collapsed", c));
        if (d && dl) {
            ll.push(b);
            z(dl, "guide-notification");
            y(a, "guide-notification") || (d = Xc(a), Wc(dl, d), z(a, "guide-notification-new"));
            var e = P("guide-module-toggle-icon", c);
            z(a, "guide-notification");
            z(e, "guide-notification");
            F(function() {
                z(a, "guide-notification-enabled");
                z(e, "guide-notification-enabled");
                F(function() {
                    A(a, "guide-notification-new")
                }, se(a))
            }, 0);
            F(function() {
                A(a, "guide-notification-enabled");
                A(e, "guide-notification");
                A(e, "guide-notification-enabled")
            }, 3E3)
        }
    }

    function ml() {
        x(ll, function(a) {
            z(a, "guide-notification");
            F(function() {
                z(a, "guide-notification-delayed")
            }, 0);
            F(function() {
                A(a, "guide-notification-delayed");
                var b = P("guide-item", a);
                F(function() {
                    A(a, "guide-notification")
                }, se(b))
            }, 3E3)
        });
        ll = []
    }

    function nl() {
        if (dl) {
            A(dl, "guide-notification");
            var a = O("collapsed-guide-notification", dl);
            x(a, function(a) {
                A(a.parentNode, "guide-notification")
            })
        }
    }
    var ll = [];

    function ol(a) {
        a = 1166 > a.width;
        var b = !Vj;
        b && I(document.body, "site-left-aligned") && (b = a);
        if (b && I(document.body, "sidebar-expanded") || !b && I(document.body, "sidebar-collapsed")) b ? Xb(document.body, "sidebar-expanded", "sidebar-collapsed") : Xb(document.body, "sidebar-collapsed", "sidebar-expanded"), nf("sidebar-toggled", Xe({
            expanded: !b,
            "page-class": Uj.className
        }))
    };
    var pl = [],
        ql = [],
        rl = !1,
        sl = "",
        tl = !1,
        ul = [];

    function vl(a) {
        wl();
        bk = new Od;
        if (W) {
            (E("BRANDED_BACKGROUND_IMAGE") || E("BRANDED_BACKGROUND_COLOR")) && H(Yj, "branded");
            Vj = I(document.body, "guide-collapsed");
            Wj = N("guide-channels");
            Kk.push(Ge(null, "click", Lk, "collection-save-button"));
            Kk.push(Ge(null, "click", Uk, "collection-delete-button"));
            Kk.push(Ge(null, "click", Wk, "subscription-list-item"));
            Kk.push(Ge(null, "keyup", Xk, "subscription-search-input"));
            Kk.push(Ge(null, "click", Zk, "subscription-search-clear"));
            Kk.push(Ge(null, "click", al, "tab-panel-trigger"));
            y(document.body, "site-center-aligned") ? (dk.push(G("guide-add-subscription", ik), G("subscription-unsubscribe-success", mk), G("WATCH_LATER_UPDATED", ok), G("player-watchlater", ok), G("yt-uix-playlistlike-liked", pk), G("yt-uix-playlistlike-unliked", rk)), ck = N("appbar-primary-container")) : el.push(G("guide-add-subscription", fl), G("subscription-unsubscribe-success", il), G("WATCH_LATER_UPDATED", jl), G("player-watchlater", jl), G("PLAYLIST_UPDATED", kl));
            pl.push(Ge(W, "keyup", xl, "guide-quick-filter"));
            pl.push(Ge(W, "click",
                yl, "guide-quick-filter-clear"));
            pl.push(Ge(W, "click", zl, "guide-sort-choice"));
            pl.push(Ge(Yj, "click", Al, "guide-module-toggle"));
            var b = O("guide-channels-list");
            Vj || x(b, function(a) {
                y(a, "yt-uix-tdl") || tg(a)
            });
            b = Lc(window);
            Bl(b);
            ql.push(G("page-resize", Bl));
            y(document.body, "site-center-aligned") && (ul = uf(), Cl(Xf(!0)), ql.push(G("page-resize", Cl)), Dl("mouseenter", El), Dl("mouseleave", Fl));
            ql.push(G("force-reload-subscriptions", Gl));
            ql.push(G("show-subscriptions-promo", Hl));
            ql.push(G("update-guide-subscriptions",
                Il));
            ql.push(G("guide-set-module-state", Jl));
            I(Uj, "watch") && (ol(b), ql.push(G("page-resize", ol)), ql.push(G("guide-show-notification", Kl)));
            (b = P("guide-item-selected", W)) && !Vj && Wj && (Zd(b, Wj), Ll());
            a && Ml(N("guide-main"))
        }
    }

    function Dl(a, b) {
        x(O("guide-flyout-container", W), function(c) {
            bk.listen(c, a, b)
        })
    }

    function Fl(a) {
        var b = a.currentTarget;
        a = P("guide-flyout", b);
        b = P("guide-flyout-trigger", b);
        Vb(a, "flyout-shown");
        Vb(b, "on-hover")
    }

    function El(a) {
        var b = a.currentTarget;
        a = P("guide-flyout", b);
        var c = P("guide-flyout-trigger", b),
            d = P("yt-uix-tdl", b),
            e = P("guide-flyout", b),
            f = ie(e),
            g = P("guide-channels-list", b),
            h = Xf(!0).height,
            b = P("guide-flyout-trigger", b),
            n;
        n = ak ? ie(ak).top : void 0;
        n = h - n;
        g.style.maxHeight = n - f.top - f.bottom + "px";
        f = S(e).height;
        g = S(b);
        b = ce(b);
        e.style.bottom = Math.min(n - f, Math.max(0, h - b.y - g.height / 2 - f / 2)) + "px";
        e.style.left = b.x + g.width + "px";
        H(a, "flyout-shown");
        H(c, "on-hover");
        d && kg(Yf.getInstance(), d)
    }

    function Oj() {
        var a = N("appbar-guide-iframe-mask");
        a && ak && (a.style.height = S(ak).height + "px")
    }

    function Nl(a) {
        if (W) {
            var b = null,
                c = P("guide-item-selected", W);
            c && (b = C(c, "serialized-endpoint") || "");
            b != a && (b && Vb(c, "guide-item-selected"), a && (a = Ol("serialized-endpoint", a))) && (H(a, "guide-item-selected"), !Vj && Wj && (Zd(a, Wj), Ll()))
        }
    }

    function wl() {
        Uj = N("page");
        W = N("guide");
        Wj = N("guide-channels");
        Yj = N("guide-container");
        Zj = P("guide-view-all", W);
        ak = N("appbar-guide-menu")
    }

    function Pl(a) {
        (Vj = a) ? Xb(document.body, "guide-expanded", "guide-collapsed"): Xb(document.body, "guide-collapsed", "guide-expanded");
        if (I(Uj, "watch") && (ol(Lc(window)), !a && (a = N("watch-context-item-list")))) {
            var b = C(a, "context-playing");
            (b = parseInt(b, 10)) && gj(ej.getInstance(), a, b)
        }
    }

    function xl() {
        var a = P("guide-quick-filter", W),
            b = P("guide-quick-filter-clear", W);
        sl != a.value && (sl = a.value, T(b, 0 < a.value.length), Zj && !rl ? Ql() : Rl(a, 100))
    }

    function yl() {
        var a = P("guide-quick-filter", W),
            b = P("guide-quick-filter-clear", W);
        a.value = "";
        U(b);
        Rl(a, 100)
    }

    function Rl(a, b) {
        var c = a.value,
            d = RegExp(c, "i"),
            e = N("guide-channels"),
            f = O("display-name", e),
            g = !1;
        if (c) {
            var h = S(Wj).height;
            Wj.style.height = h + "px"
        } else Wj.style.height = "auto";
        var n = 0;
        x(f, function(a) {
            var e = Q(a, "guide-item"),
                e = e.getAttribute("title") || C(e, "title"),
                f = d.test(e);
            T(id(a, "li", "guide-channel"), f);
            f && (g = !0, n++);
            Vc(a);
            if (f && !/^[\s\xa0]*$/.test(c)) {
                var f = e.search(d),
                    h = d.exec(e)[0];
                if (0 < f) {
                    var D = Qc("span", "", e.substring(0, f));
                    a.appendChild(D)
                }
                D = Qc("span", "filter-match", h);
                a.appendChild(D);
                f + h.length <
                    e.length && (e = Qc("span", "", e.substring(f + h.length)), a.appendChild(e))
            } else dd(a, e);
            b && n > b && T(id(a, "li", "guide-channel"), !1)
        });
        Yb(e, "filter-has-matches", g);
        c && !Xj && (nf("guide-filter"), Xj = !0)
    }

    function zl(a) {
        var b = P("guide-sort-button"),
            c = C(b, "guide-sort") || "",
            d = C(a.currentTarget, "guide-sort") || "";
        c != d && (rl = !1, B(b, "guide-sort", d), df("/guide_channels_ajax?action_set_guide_sort=1", {
            method: "POST",
            N: {
                sort: d
            },
            D: {
                session_token: tb("guide_channels_ajax")
            },
            format: "JSON",
            onSuccess: function(a, b) {
                Il(b);
                var c = O("guide-sort-choice");
                x(c, function(a) {
                    var b = C(a, "guide-sort");
                    Cf.getInstance();
                    a = a.parentNode;
                    var b = d == b,
                        c = we("span", "yt-uix-button-icon-wrapper", a);
                    if (!c && b) {
                        var e = Qc("span", {
                                "class": "yt-uix-button-icon-wrapper yt-uix-button-icon-checkbox"
                            }),
                            f = Qc("div", {
                                "class": "yt-uix-button-icon-dropdown-checked"
                            });
                        e.appendChild(f);
                        Wc(a, e)
                    }
                    T(c, b)
                })
            }
        }))
    }

    function Sl() {
        rl = !1
    }

    function Il(a) {
        var b = a.channels;
        b && (a = N("guide-subscriptions-section"), b = Tc(b), Yc(b, a), Tl(), a = O("yt-uix-tooltip-tip-visible"), x(a, function(a) {
            Vb(a, "yt-uix-tooltip-tip-visible")
        }), Vb(Yj, "filter-loading"), (a = P("guide-quick-filter", W)) && Rl(a, null))
    }

    function Ql() {
        var a = P("guide-sort-button"),
            a = C(a, "guide-sort") || "";
        H(Yj, "filter-loading");
        rl = !0;
        df("/guide_channels_ajax?action_load_all_subscriptions=1", {
            method: "POST",
            N: {
                sort: a
            },
            D: {
                session_token: tb("guide_channels_ajax")
            },
            format: "JSON",
            onSuccess: function(a, c) {
                Il(c);
                F(Sl, 12E4)
            },
            onError: function() {
                rl = !1
            }
        })
    }

    function Tl() {
        Wj = N("guide-channels");
        Cl(Xf(!0));
        Vj || Ll()
    }

    function Ll() {
        var a = N("guide-main");
        a && Ul(a)
    }

    function Ul(a) {
        y(a, "yt-uix-tdl") ? (a = Yf.getInstance(), bg(a), Zf(a)) : tg(a)
    }

    function kk(a) {
        Wc(Wj, a);
        Tl()
    }

    function qk(a) {
        var b = N("behavior-id-guide-playlists-section");
        b && (b = P("guide-channels-list", b), Wc(b, a), Cl(Xf(!0)))
    }

    function sk(a) {
        (a = jk(a)) && Xc(bd(a));
        Cl(Xf(!0))
    }

    function jk(a) {
        return Ol("external-id", a)
    }

    function Ol(a, b) {
        var c = O("guide-item", W);
        return Ia(c, function(c) {
            return C(c, a) == b
        })
    }

    function nk(a) {
        (a = jk(a)) && Xc(bd(a));
        Tl()
    }

    function Al(a) {
        var b = Q(a.currentTarget, "guide-module");
        "true" == C(b, "pending-click") ? a.preventDefault() : (B(b, "pending-click", "true"), F(function() {
            mb(b, "pending-click")
        }, 500), I(b, "collapsed") ? (a.preventDefault(), a = Ml(b), Tj(b.id, !a, !1), ml()) : Q(a.target, "guide-module-toggle-icon") && (a = Ml(b), Tj(b.id, !a, !1)))
    }

    function Vl() {
        var a = Q(N("guide-loading-toggle"), "guide-module");
        Uj = N("page");
        var b = Ml(a);
        Tj(a.id, !b, !1)
    }

    function Tj(a, b, c, d) {
        nf("guide-toggled", Xe({
            "module-id": a,
            expanded: b,
            auto: c,
            "page-class": Uj.className,
            notification: d || !1
        }))
    }

    function Ml(a, b) {
        if (!a) return !0;
        var c = P("guide-module-content", a),
            d;
        if (void 0 !== b) {
            if (b == I(a, "collapsed")) return b;
            Yb(a, "collapsed", b);
            d = b
        } else d = Zb(a, "collapsed");
        var e = se(c);
        a == N("guide-main") && (P("guide-module-toggle-label", a), nl());
        d ? (c.style.height = de(0, !0), F(function() {
            U(c);
            c.style.height = de("auto", !0)
        }, e)) : (e = S(c).height, c.style.height = de(0, !0), re(c, "display", "block"), c.style.height = de(e, !0), a && Ul(a));
        e = O("guide-module", Yj);
        e = Ha(e, function(a) {
            return I(a, "collapsed")
        });
        Pl(e);
        return d
    }

    function Jl(a, b) {
        wl();
        0 == b ? Ml(N(a), !1) : 1 == b && Ml(N(a), !0)
    }

    function Hl(a) {
        var b = N("guide-main"),
            c = 0;
        I(b, "collapsed") && (Ml(b), c = se(P("guide-module-content", b)));
        F(function() {
            var b = N("guide-subscriptions-section"),
                c = Tc(a);
            Uc(b, c);
            H(b, "yt-uix-clickcard");
            B(b, "orientation", "vertical");
            B(b, "position", "topright");
            B(b, "force-position", "true");
            B(b, "click-outside-persists", "true");
            B(b, "card-class", "guide-subscriptions-promo");
            Of.getInstance().show(b)
        }, c)
    }

    function Bl(a) {
        return tl = a = 1166 <= a.width
    }

    function Cl() {
        if (y(document.body, "site-center-aligned") && ul) {
            for (var a = Wl(), b = ul.length, c = Sa(b), d = Fa(ul, function(a) {
                    return O("overflowable-list-item", a.S).length
                }), e = Fa(ul, function(a) {
                    a = (a = P("overflowable-list-item", a.S)) ? S(a).height : void 0;
                    return a
                }), f = 0; 0 < a;) {
                for (var g = 0; g < b; g++) {
                    var h = (g + f) % b;
                    if (c[h] < d[h] && a > e[h]) {
                        c[h]++;
                        a -= e[h];
                        f += g + 1;
                        break
                    }
                }
                if (g == b) break
            }
            for (g in Ra(b)) a = c[g] == d[g] ? c[g] : c[g] - 1, a = Math.max(a, 1), vf(ul[g], a);
            Oj()
        }
    }

    function Wl() {
        var a = N("appbar-guide-menu"),
            b = N("guide-container");
        if (!b || !a) return 0;
        var c = ie(a),
            d = ie(b),
            c = c.top + c.bottom + d.top + d.bottom,
            b = $c(b).clientHeight,
            e = 0;
        x(ul, function(a) {
            e += S(a.g).height
        });
        return a.clientHeight - (c + b - e)
    }

    function Gl() {
        df("/guide_channels_ajax?action_load_subs_and_footer=1", {
            format: "JSON",
            onSuccess: function(a, b) {
                Il(b)
            }
        })
    }

    function Kl() {
        var a = N("guide-main");
        if (I(a, "collapsed") && tl) {
            var b = Ml(a);
            Tj(a.id, !b, !0, !0)
        }
    };
    var Xl;

    function Yl(a) {
        var b = P("feed-load-more-container");
        b && I(b, "scrolldetect") && Vb(b, "scrolldetect");
        var b = "yt-picker-" + a,
            c = N(b + "-button");
        Zl(N(b + "-footer"), a, !1, !1, !0);
        Zd(c, document.body)
    }

    function Zl(a, b, c, d, e) {
        c || (Xl && Xl != a && U(Xl), Xl = a, e ? oe(a) : pe(a));
        d ? P("yt-close", a).focus() : (c = {}, c["action_" + b] = 1, c.base_url = window.location.href, df("/picker_ajax", {
            format: "JSON",
            method: "GET",
            N: c,
            onSuccess: s($l, null, a),
            onError: function() {
                U(a)
            }
        }))
    }

    function $l(a, b, c) {
        c && c.html ? (B(a, "loaded", 1), a.innerHTML = c.html, am(a), Zd(a, document.body), P("yt-close", a).focus()) : U(a)
    }

    function am(a, b) {
        var c = P("yt-picker-content", a),
            d = Ic(null, "yt-picker-section", c);
        x(d, s(bm, null, Math.floor((b || c.offsetWidth) / 180)))
    }

    function bm(a, b) {
        for (var c = Ic(null, "yt-picker-item", b), d = Math.ceil(c.length / a), e, f = document.createElement("div"), g = 0; g < a; g++) {
            e = document.createElement("div");
            e.className = "yt-picker-grid";
            for (var h = d * g; h < d * (g + 1); h++) c[h] && e.appendChild(c[h]);
            e.children.length && f.appendChild(e)
        }
        b.innerHTML = f.innerHTML
    };
    var cm, dm, em, fm, gm, hm, im, jm, ij, km;

    function lm() {
        var a = hj();
        x(a, function(a) {
            tg(a)
        })
    }
    t("yt.www.watchqueue.loadThumbnails", lm);

    function mm(a) {
        if (a.currentTarget == dm) Xa(cm, "watch-queue-expanded");
        else if (a.currentTarget == gm) {
            a = nm();
            var b = Zc(ij).length;
            om((b + a - 1) % b);
            pm()
        } else a.currentTarget == hm ? (a = nm(), b = Zc(ij).length, om((a + 1) % b), pm()) : a.currentTarget == im ? (U(im), oe(jm)) : a.currentTarget == jm ? (U(jm), oe(im)) : y(a.currentTarget, "watch-queue-video") && (a = bd(a.currentTarget), y(a, "currently-playing") || (b = Zc(ij), om(Da(b, a))))
    }

    function qm() {
        y(cm, "watch-queue-expanded") && lm()
    }

    function om(a) {
        var b = P("currently-playing", ij);
        b && A(b, "currently-playing");
        b = Zc(ij);
        b[a] && z(b[a], "currently-playing")
    }

    function nm() {
        var a = P("currently-playing", ij);
        if (a) {
            var b = Zc(ij);
            return Da(b, a)
        }
        return 0
    }

    function pm() {
        var a = P("currently-playing", ij);
        if (a) {
            var b = ej.getInstance(),
                c = ij;
            if (c && a) {
                var d = O(Y(b, "scroll-unit"), c),
                    a = Da(d, a);
                0 <= a && gj(b, c, a)
            }
        }
        lm()
    }
    var rm = [];
    t("yt.www.guide.collections.onCollectionPickerShown", function() {
        var a = Mk();
        Zk();
        var b = P("collection-name-input", a),
            c = C(a, "collection-id");
        c || (b.value = "");
        Nk(a);
        cl(a, !0);
        var d = P("subscription-picker-list-container", a);
        d.innerHTML = "";
        df("/subscription_ajax?action_list_subscriptions=1", {
            method: "POST",
            D: {
                session_token: tb("subscription_ajax"),
                collection_id: c
            },
            onSuccess: function(b, f) {
                Nk(a);
                d.innerHTML = f.response.html_content;
                if (c) {
                    Vk();
                    var g = P("selected-channels-button", a);
                    Jf(Cf.getInstance(), g);
                    $k(g)
                }
            },
            onError: Tk(a)
        })
    });
    t("yt.www.guide.setup", vl);
    t("yt.www.guide.selectGuideItem", Nl);
    t("yt.www.guide.MANUAL_LOADING", "guide-manual-loading");
    t("yt.www.masthead.performSearch", function(a, b) {
        var c = N("masthead-search"),
            d = C(b, a) || "";
        "rentals" == d ? (c.rental.value = 1, c.search_type.value = "") : (c.search_type.value = d, c.rental.value = 0);
        if (c.search_query.value) c.submit();
        else {
            var c = b.innerHTML,
                e = N("search-btn"),
                f = e.innerHTML,
                g = C(e, a) || "";
            e.innerHTML = c;
            B(e, a, d);
            b.innerHTML = f;
            B(b, a, g)
        }
        return !1
    });
    t("yt.www.masthead.dismissGAPlusMessage", function() {
        var a = cb("FML", "").split(","),
            b = new Date,
            b = Math.round(b.getTime() / 1E3),
            c = "",
            c = 2 != a.length ? "1," + b : parseInt(a[0], 10) + 1 + "," + b;
        bb("FML", c, 63072E3)
    });
    t("yt.www.masthead.dismissPostLinkingMessage", function() {
        db("FML")
    });
    t("yt.www.masthead.dismissCookieAlert", function() {
        nf("GC_OK");
        Rf.getInstance();
        Vf(110, !0);
        bb("PREF", Wf(), 63072E3);
        U(N("google-cookie-alert"));
        A(document.body, "footer-cookie-alert")
    });
    t("yt.www.masthead.dismissReturnToMobileMessage", function() {
        nf("NO_MWEB");
        Rf.getInstance();
        Vf(130, !0);
        bb("PREF", Wf(), 63072E3);
        U(N("return-to-mobile"))
    });
    t("yt.www.masthead.toggleExpandedMasthead", vi);
    t("yt.www.masthead.accountswitch.init", function(a) {
        gi = a
    });
    t("yt.www.masthead.accountswitch.toggle", function() {
        me("masthead-expanded-acct-sw-container");
        var a = N("masthead-expanded-container"),
            b = N("masthead-expanded-acct-sw-container");
        if (le(b)) {
            b.style.top = a.offsetTop + "px";
            K && M("7") && !M("8") && (b.style.top = a.offsetTop - (b.offsetTop - a.offsetTop) + "px");
            b = N("masthead-expanded-menu-acct-sw-list");
            b.offsetHeight < a.offsetHeight && (b.style.height = a.offsetHeight - 11 + "px");
            var c = N("masthead-expanded-acct-sw-iframe");
            if (!c) {
                var d = N("masthead-expanded-menu-acct-sw-list"),
                    c = Qc("iframe", {
                        id: "masthead-expanded-acct-sw-iframe",
                        frameborder: 0,
                        src: 'javascript:""'
                    });
                d.parentNode && d.parentNode.insertBefore(c, d)
            }
            c.style.height = b.offsetHeight - 11 + "px";
            gi || H(a, "accountswitch")
        } else gi || Vb(a, "accountswitch")
    });
    t("yt.www.masthead.appbar.toggleMenu", function(a, b) {
        if (b) {
            var c;
            c = Cf.getInstance();
            c = Gf(c, a);
            tg(c)
        }
    });
    t("yt.www.masthead.extended.redirectWithNewParam", function(a, b) {
        var c, d, e;
        c = window.location.href;
        c = c.split("#");
        d = 2 == c.length ? "#" + c[1] : "";
        c = c[0];
        e = We(c);
        e[b] = a;
        e["persist_" + b] = "1";
        c = c.split("?");
        c = c[0];
        Ci(c, e, d)
    });
    t("yt.net.cookies.set", bb);
    t("yt.net.cookies.remove", db);
    t("yt.www.picker.load", function(a) {
        var b = C(a, "picker-key"),
            c = C(a, "picker-position"),
            d = "yt-picker-" + b + "-" + c;
        if (c = N(d)) a = C(a, "button-menu-id") == d, d = C(c, "loaded"), Zl(c, b, !!a, !!d)
    });
    t("yt.www.picker.displayLang", function() {
        Yl("language")
    });
    t("yt.www.picker.applyGrid", am);
    t("ytbin.www.pageframe.setup", function() {
        Qb("WATCH_GUIDE_CSS");
        if (y(document.body, "exp-delay-loaded-core-css")) {
            var a = ma(A, document.body, "delayed-frame-styles-not-in");
            Qb("PAGE_FRAME_DELAYLOADED_CSS", a, E("WAIT_TO_DELAYLOAD_FRAME_CSS") ? "yt-www-pageFrameCssNotifications-load" : null)
        }
        P("guide-module-loading") ? ql.push(G("guide-manual-loading", Vl)) : vl();
        Nl(E("GUIDE_SELECTED_ITEM"));
        Ge(N("ticker"), "click", wi, "yt-uix-close");
        kj();
        if (cm = N("watch-queue-container")) dm = P("watch-queue-header", cm), em = P("watch-queue-title",
            dm), fm = P("watch-queue-count", dm), gm = P("prev-watch-queue-button", cm), hm = P("next-watch-queue-button", cm), im = P("play-watch-queue-button", cm), jm = P("pause-watch-queue-button", cm), ij = P("watch-queue-items-list", cm), rm.push(Ge(cm, "click", mm, "yt-uix-button")), rm.push(V(ij, qd, qm)), km = new wg(N("watch-queue-title-msg").innerHTML, ["count"]), em.innerHTML = Ag(km, {
            count: 123
        }), fm.innerHTML = 123, T(fm, !0), oe(cm);
        E("SANDBAR_ENABLED") && (xi(), E("SANDBAR_ACCOUNTSWITCH") && (gi = !0));
        zi();
        E("YOODLE_IS_ANIMATED") && Jb(function() {
            m("yt.www.masthead.AnimatedYoodle.init")(E("YOODLE_ANIMATION_FRAMES"),
                E("YOODLE_ANIMATION_DURATION"), E("YOODLE_ANIMATION_DELAY"), E("YOODLE_STOP_ON_LAST_FRAME"))
        });
        E("SAFETY_MODE_PENDING") && Yl("safetymode")
    });
    t("ytbin.www.pageframe.cancelSetup", function() {
        Bi()
    });
})();