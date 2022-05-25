(function() {
    function l(a, b, c) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
            var c = d.slice();
            c.push.apply(c, arguments);
            return a.apply(b, c)
        }
    }

    function m(a, b) {
        if (a) {
            var c = Array.prototype.slice.call(arguments, 1);
            try {
                return a.apply(null, c)
            } catch (d) {
                return d
            }
        }
    }

    function n() {
        return (new Date).getTime()
    }

    function aa(a) {
        var b = (parseInt(p.uid, 10) || 0) + 1;
        return a["spf-key"] || (a["spf-key"] = "" + q("uid", b))
    }
    var r = {
        "animation-class": "spf-animate",
        "animation-duration": 425,
        "cache-lifetime": 6E5,
        "cache-max": 50,
        "cache-unified": !1,
        "link-class": "spf-link",
        "nolink-class": "spf-nolink",
        "navigate-limit": 20,
        "navigate-lifetime": 864E5,
        "navigate-requested-callback": null,
        "navigate-part-received-callback": null,
        "navigate-part-processed-callback": null,
        "navigate-received-callback": null,
        "navigate-processed-callback": null,
        "navigate-error-callback": null,
        "prefetch-on-mousedown": !1,
        "process-async": !1,
        "request-timeout": 0,
        "script-loading-callback": null,
        "style-loading-callback": null,
        "url-identifier": "?spf=__type__"
    };

    function s(a) {
        return t()[a]
    }

    function t(a) {
        return !a && "config" in p ? p.config : q("config", a || {})
    }

    function q(a, b) {
        return p[a] = b
    }
    var p = window._spf_state || {};
    window._spf_state = p;

    function u(a) {
        return a.classList ? a.classList : a.className && a.className.match(/\S+/g) || []
    }

    function v(a, b) {
        if (a.classList) return a.classList.contains(b);
        for (var c = u(a), d = 0, e = c.length; d < e; d++)
            if (c[d] == b) return !0;
        return !1
    }

    function w(a, b) {
        a.classList ? a.classList.add(b) : v(a, b) || (a.className += " " + b)
    }

    function ba(a, b) {
        if (a.classList) a.classList.remove(b);
        else {
            for (var c = u(a), d = [], e = 0, f = c.length; e < f; e++) c[e] != b && d.push(c[e]);
            a.className = d.join(" ")
        }
    };

    function ca(a) {
        var b, c = a.parentNode;
        if (c && 11 != c.nodeType)
            if (a.removeNode) a.removeNode(!1);
            else {
                for (; b = a.firstChild;) c.insertBefore(b, a);
                c.removeChild(a)
            }
    }

    function x(a, b, c) {
        for (; a;) {
            if (b(a)) return a;
            if (c && a == c) break;
            a = a.parentNode
        }
        return null
    }

    function da(a, b) {
        var c = a || "",
            d = document,
            e = d.createElement("iframe");
        e.id = c;
        e.src = 'javascript:""';
        e.style.display = "none";
        b && (e.onload = l(b, null, e));
        d.body.appendChild(e);
        return e
    };

    function ea(a, b, c) {
        fa(!0, a, b, c)
    }

    function fa(a, b, c, d) {
        if (b || c) {
            b = b || window.location.href;
            c = c || {};
            var e = n();
            q("history-timestamp", e);
            c["spf-timestamp"] = e;
            a ? window.history.replaceState(c, "", b) : window.history.pushState(c, "", b);
            q("history-url", b);
            d && (a = p["history-callback"]) && a(b, c)
        }
    }

    function ga(a) {
        var b = window.location.href;
        if (a.state) {
            a = a.state;
            var c = a["spf-timestamp"];
            b == p["history-url"] ? (q("history-timestamp", c), window.history.replaceState(a, "", b)) : (a["spf-back"] = c < parseInt(p["history-timestamp"], 10), q("history-timestamp", c), q("history-url", b), (c = p["history-callback"]) && c(b, a))
        }
    };
    var z = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return a.replace(/^\s+|\s+$/g, "")
    };

    function A(a, b, c) {
        var d = B[a];
        return a && b ? (d || (d = B[a] = {
            items: [],
            j: 0,
            m: 1
        }), d.items.push({
            D: b,
            C: c || 0
        })) : d && d.items.length || 0
    }

    function C(a, b) {
        var c = B[a];
        if (c) {
            var d = 0 < c.j;
            0 < c.m && (b || !d) && ha(a, b)
        }
    }

    function D(a) {
        (a = B[a]) && a.m--
    }

    function E(a, b) {
        var c = B[a];
        c && (c.m++, C(a, b))
    }

    function F(a) {
        var b = B[a];
        b && (clearTimeout(b.j), delete B[a])
    }

    function ha(a, b) {
        var c = B[a];
        if (c && (clearTimeout(c.j), c.j = 0, 0 < c.m)) {
            var d = c.items.shift();
            if (d) {
                var e = l(ha, null, a, b),
                    e = l(function(a, b) {
                        a();
                        b()
                    }, null, d.D, e);
                b ? e() : c.j = setTimeout(e, d.C)
            }
        }
    }
    var B = {};

    function G(a) {
        var b = document.createElement("a");
        b.href = a;
        return b.href
    };

    function ia(a) {
        var b = H();
        a in b && delete b[a]
    }

    function ja() {
        var a = H(),
            b;
        for (b in a) ka(a[b]) || delete a[b]
    }

    function ka(a) {
        if (!(a && "data" in a)) return !1;
        var b = a.life,
            b = isNaN(b) ? Infinity : b,
            c = n() - a.time,
            d = parseInt(s("cache-max"), 10),
            d = isNaN(d) ? Infinity : d;
        a = (parseInt(p["cache-counter"], 10) || 0) - a.count;
        return c < b && a < d
    }

    function H() {
        return "cache-storage" in p ? p["cache-storage"] : q("cache-storage", {})
    };

    function la(a, b, c, d) {
        var e = d || {},
            f = !1,
            g = 0,
            h, k = new XMLHttpRequest;
        k.open(a, b, !0);
        k.timing = {};
        var y = k.abort;
        k.abort = function() {
            clearTimeout(h);
            k.onreadystatechange = null;
            y.call(k)
        };
        k.onreadystatechange = function() {
            var a = k.timing;
            2 == k.readyState ? (a.responseStart = a.responseStart || n(), f = -1 < (k.getResponseHeader("Transfer-Encoding") || "").toLowerCase().indexOf("chunked"), e.u && e.u(k)) : 3 == k.readyState ? f && e.k && (a = k.responseText.substring(g), g = k.responseText.length, e.k(k, a)) : 4 == k.readyState && (a.responseEnd = a.responseEnd ||
                n(), f && e.k && k.responseText.length > g && (a = k.responseText.substring(g), g = k.responseText.length, e.k(k, a)), clearTimeout(h), e.t && e.t(k))
        };
        a = "POST" == a;
        if (e.headers)
            for (var N in e.headers) k.setRequestHeader(N, e.headers[N]), "content-type" == N.toLowerCase() && (a = !1);
        a && k.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        0 < e.w && (h = setTimeout(function() {
            k.abort();
            e.v && e.v(k)
        }, e.w));
        k.timing.fetchStart = n();
        k.send(c);
        return k
    };

    function I(a) {
        return a.dataset ? a.dataset.loaded : a.getAttribute("data-" + "loaded".replace(/([A-Z])/g, "-$1").toLowerCase())
    }

    function J(a) {
        a.dataset ? a.dataset.loaded = "true" : a.setAttribute("data-" + "loaded".replace(/([A-Z])/g, "-$1").toLowerCase(), "true")
    };

    function ma(a, b) {
        if (a && b) {
            var c = K();
            a in c || (c[a] = []);
            c[a].push(b)
        }
    }

    function na(a, b) {
        var c = K();
        if (a in c && b)
            for (var d = 0, e = c[a].length; d < e; d++)
                if (c[a][d] == b) {
                    c[a][d] = null;
                    break
                }
    }

    function oa(a, b) {
        var c = K();
        if (a in c)
            for (var d = Array.prototype.slice.call(arguments, 1), e = 0, f = c[a].length; e < f; e++) c[a][e] && c[a][e].apply(null, d)
    }

    function pa(a) {
        var b = K();
        a ? a in b && delete b[a] : K({})
    }

    function K(a) {
        return !a && "pubsub-subs" in p ? p["pubsub-subs"] : q("pubsub-subs", a || {})
    };

    function qa(a) {
        for (var b = "js" == a, c = document.querySelectorAll ? document.querySelectorAll(b ? "script[src]" : 'link[rel~="stylesheet"]') : [], d = 0, e = c.length; d < e; d++)
            if (!c[d].id) {
                var f = L(a, b ? c[d].src : c[d].href);
                c[d].id = f;
                J(c[d])
            }
    }

    function ra(a, b, c, d) {
        if (!b) return null;
        var e = L(a, b);
        d = d || "";
        var f = document.getElementById(e),
            g = f && I(f),
            h = f && !g;
        if (g) return c && c(), f;
        c && ma(e, c);
        if (h) return f;
        c = "js" == a;
        var k = d ? document.querySelectorAll ? document.querySelectorAll((c ? "script" : "link") + "." + d) : [] : [];
        m(s(c ? "script-loading-callback" : "style-loading-callback"), b, d);
        return f = sa(a, b, e, d, function() {
            I(f) || (J(f), ta(k), oa(e), pa(e))
        })
    }

    function sa(a, b, c, d, e, f) {
        a = "js" == a;
        var g = document.createElement(a ? "script" : "link");
        g.id = c;
        g.className = d;
        a ? g.async = !0 : g.rel = "stylesheet";
        var h = !1;
        g.onload = function() {
            h || (h = !0, g.onload = g.onreadystatechange = null, e && setTimeout(e, 0))
        };
        g.onerror = g.onload;
        g.onreadystatechange = function() {
            if (/complete|loaded/.test(g.readyState)) g.onload(null)
        };
        a ? g.src = b : g.href = b;
        b = f || document;
        b = b.getElementsByTagName("head")[0] || b.body;
        a ? b.insertBefore(g, b.firstChild) : b.appendChild(g);
        return g
    }

    function ua(a, b) {
        if (b) {
            var c = L(a, b);
            (c = document.getElementById(c)) && ta([c])
        }
    }

    function ta(a) {
        for (var b = 0, c = a.length; b < c; b++) pa(a[b].id), a[b].parentNode.removeChild(a[b])
    }

    function va(a, b) {
        if (b) {
            var c = L(a, b),
                d = document.getElementById(c);
            if (!d) {
                var e = a + "-prefetch",
                    f = document.getElementById(e);
                if (f) {
                    if (d = f.contentWindow.document.getElementById(c)) return
                } else f = da(e, function(a) {
                    J(a);
                    C(e, !0)
                });
                I(f) ? wa(f, a, b, c) : A(e, l(wa, null, f, a, b, c))
            }
        }
    }

    function wa(a, b, c, d) {
        a = a.contentWindow.document;
        "js" == b ? (xa ? (b = a.createElement("script"), b.src = c) : (b = a.createElement("object"), b.data = c), b.id = d, a.body.appendChild(b)) : sa(b, c, d, "", null, a)
    }

    function L(a, b) {
        for (var c = G(b).replace(/^[a-zA-Z]+:\/\//, "//"), d = 0, e = 0, f = c.length; e < f; ++e) d = 31 * d + c.charCodeAt(e), d %= 4294967296;
        return a + "-" + d
    }
    var xa = -1 != navigator.userAgent.indexOf(" Trident/");

    function ya(a, b, c) {
        return ra("js", a, b, c)
    }

    function za(a) {
        va("js", a)
    }

    function M(a, b) {
        if (0 >= a.a.length) b && b();
        else {
            var c = -1,
                d = function() {
                    c++;
                    if (c < a.a.length) {
                        var e = a.a[c];
                        if (e.url) ya(e.url, d, e.name);
                        else if (e.text) {
                            var f = e.text,
                                e = d;
                            if (window.execScript) window.execScript(f, "JavaScript");
                            else {
                                var g = document.createElement("script");
                                g.appendChild(document.createTextNode(f));
                                f = document.getElementsByTagName("head")[0] || document.body;
                                f.insertBefore(g, f.firstChild)
                            }
                            e && e()
                        } else d()
                    } else b && b()
                };
            d()
        }
    }

    function Aa(a) {
        if (!(0 >= a.a.length))
            for (var b = 0, c = a.a.length; b < c; b++) {
                var d = a.a[b];
                d.url && za(d.url)
            }
    }

    function O(a) {
        var b = new Ba;
        if (!a) return b;
        a = a.replace(Ca, function(a, d, e) {
            a = (a = d.match(Da)) ? a[1] : "";
            d = (d = d.match(Ea)) ? d[1] : "";
            b.a.push({
                url: a,
                text: e,
                name: d
            });
            return ""
        });
        b.h = a;
        return b
    }

    function Ba() {
        this.h = "";
        this.a = []
    }
    var Ca = /\x3cscript([\s\S]*?)\x3e([\s\S]*?)\x3c\/script\x3e/ig,
        Da = /src="([\S]+)"/,
        Ea = /class="([\S]+)"/;

    function Fa(a, b, c) {
        return ra("css", a, b, c)
    }

    function Ga(a) {
        va("css", a)
    }

    function Ha(a) {
        var b = new Ia;
        if (!a) return b;
        a = a.replace(Ja, function(a, d) {
            if (-1 != d.indexOf('rel="stylesheet"')) {
                var e = d.match(Ka),
                    e = e ? e[1] : "",
                    f = d.match(La),
                    f = f ? f[1] : "";
                b.a.push({
                    url: e,
                    text: "",
                    name: f
                });
                return ""
            }
            return a
        });
        a = a.replace(Ma, function(a, d, e) {
            b.a.push({
                url: "",
                text: e,
                name: ""
            });
            return ""
        });
        b.h = a;
        return b
    }

    function Ia() {
        this.h = "";
        this.a = []
    }
    var Ja = /\x3clink([\s\S]*?)\x3e/ig,
        Ma = /\x3cstyle([\s\S]*?)\x3e([\s\S]*?)\x3c\/style/ig,
        Ka = /href="([\S]+)"/,
        La = /class="([\S]+)"/;

    function Na(a, b, c) {
        if (b) {
            b = [];
            var d, e = 0;
            c && (a += "\r\n");
            var f = a.indexOf("[\r\n", e);
            for (-1 < f && (e = f + 3); - 1 < (f = a.indexOf(",\r\n", e));) d = z(a.substring(e, f)), e = f + 3, d && b.push(JSON.parse(d));
            f = a.indexOf("]\r\n", e); - 1 < f && (d = z(a.substring(e, f)), e = f + 3, d && b.push(JSON.parse(d)));
            d = "";
            if (a.length > e) {
                d = a.substring(e);
                if (a = c) a = d.length - 2, a = 0 <= a && d.indexOf("\r\n", a) == a;
                a && (d = d.substring(0, d.length - 2))
            }
            return {
                i: b,
                b: d
            }
        }
        b = JSON.parse(a);
        b = "number" == typeof b.length ? b : [b];
        return {
            i: b,
            b: ""
        }
    }

    function P(a, b, c, d) {
        var e = "process " + G(a),
            f = !s("process-async"),
            g;
        g = 0;
        b.timing || (b.timing = {});
        b.title && (document.title = b.title);
        b.css && (g = l(function(a, b) {
                var c = Ha(a);
                if (!(0 >= c.a.length))
                    for (var d = 0, e = c.a.length; d < e; d++) {
                        var f = c.a[d];
                        if (f.url) Fa(f.url, null, f.name);
                        else if (f.text) {
                            var f = f.text,
                                g = document.createElement("style");
                            (document.getElementsByTagName("head")[0] || document.body).appendChild(g);
                            "styleSheet" in g ? g.styleSheet.cssText = f : g.appendChild(document.createTextNode(f))
                        }
                    }
                b.spfProcessCss = n()
            },
            null, b.css, b.timing), g = A(e, g));
        b.attr && (g = l(function(a, b) {
            for (var c in a) {
                var d = document.getElementById(c);
                if (d) {
                    var e = a[c],
                        f = void 0;
                    for (f in e) {
                        var g = e[f];
                        "class" == f ? d.className = g : "style" == f ? d.style.cssText = g : d.setAttribute(f, g)
                    }
                }
            }
            b.spfProcessAttr = n()
        }, null, b.attr, b.timing), g = A(e, g));
        var h = b.html || {},
            k = g,
            y;
        for (y in h) g = l(function(a, b) {
            var c = document.getElementById(a);
            if (c) {
                var g = O(b),
                    h = s("animation-class");
                if (Oa && v(c, h)) {
                    D(e);
                    var k = aa(c);
                    C(k, !0);
                    g = {
                        r: g,
                        reverse: !!d,
                        d: null,
                        f: null,
                        e: c,
                        A: h + "-old",
                        B: h +
                            "-new",
                        s: d ? h + "-reverse-start" : h + "-forward-start",
                        q: d ? h + "-reverse-end" : h + "-forward-end"
                    };
                    c = l(function(a) {
                        w(a.e, a.s);
                        a.d = document.createElement("div");
                        a.d.className = a.A;
                        var b = a.e,
                            c = a.d;
                        if (c) {
                            for (var d; d = b.firstChild;) c.appendChild(d);
                            b.appendChild(c)
                        }
                        a.f = document.createElement("div");
                        a.f.className = a.B;
                        a.f.innerHTML = a.r.h;
                        a.reverse ? (b = a.d, b.parentNode.insertBefore(a.f, b)) : (b = a.d, b.parentNode.insertBefore(a.f, b.nextSibling))
                    }, null, g);
                    A(k, c, 0);
                    c = l(function(a) {
                        ba(a.e, a.s);
                        w(a.e, a.q)
                    }, null, g);
                    A(k, c, 0);
                    c =
                        l(function(a) {
                            a.e.removeChild(a.d);
                            ba(a.e, a.q);
                            ca(a.f);
                            D(k);
                            M(a.r, function() {
                                E(k)
                            })
                        }, null, g);
                    A(k, c, parseInt(s("animation-duration"), 10));
                    c = l(function(a, b) {
                        E(b)
                    }, null, g, e);
                    A(k, c);
                    C(k)
                } else c.innerHTML = g.h, D(e), M(g, function() {
                    E(e, f)
                })
            }
        }, null, y, h[y], b.timing), g = A(e, g);
        h = g - k;
        b.js ? (g = l(function(a, b, c) {
            c && (b.spfProcessHtml = n());
            D(e);
            M(O(a), function() {
                b.spfProcessJs = n();
                E(e, f)
            })
        }, null, b.js, b.timing, h), g = A(e, g)) : h && (g = l(function(a) {
            a.spfProcessHtml = n()
        }, null, b.timing), g = A(e, g));
        c && (g = A(e, l(c, null, a, b)));
        C(e, f)
    }

    function Pa(a, b, c) {
        var d = "preprocess " + G(a),
            e;
        b.css && (e = l(function(a) {
            a = Ha(a);
            if (!(0 >= a.a.length))
                for (var b = 0, c = a.a.length; b < c; b++) {
                    var d = a.a[b];
                    d.url && Ga(d.url)
                }
        }, null, b.css), A(d, e));
        var f = b.html || {},
            g;
        for (g in f) f[g] && (e = l(function(a, b) {
            Aa(O(b))
        }, null, g, f[g]), A(d, e));
        b.js && (e = l(function(a) {
            Aa(O(a))
        }, null, b.js), A(d, e));
        c && A(d, l(c, null, a, b));
        C(d)
    }
    var Oa = function() {
        var a = document.createElement("div");
        if ("transition" in a.style) return !0;
        for (var b = ["webkit", "Moz", "Ms", "O", "Khtml"], c = 0, d = b.length; c < d; c++)
            if (b[c] + "Transition" in a.style) return !0;
        return !1
    }();

    function Q(a, b) {
        var c = b || {};
        c.method = ((c.method || "GET") + "").toUpperCase();
        c.type = c.type || "request";
        var d;
        d = a;
        var e = c.type,
            f = s("url-identifier") || "";
        f && (f = f.replace("__type__", e || ""), d = 0 == f.lastIndexOf("?", 0) && -1 != d.indexOf("?") ? d + f.replace("?", "&") : d + f);
        e = {};
        e.startTime = n();
        e.fetchStart = e.startTime;
        n: {
            var f = R(a, c.type, !1),
                g = H();
            if (f in g) {
                g = g[f];
                if (ka(g)) {
                    f = g.data;
                    break n
                }
                ia(f)
            }
            f = void 0
        }
        if (f) return c = l(Qa, null, a, c, e, f), setTimeout(c, 0), null;
        f = {
            "X-SPF-Request": c.type
        };
        c.p && (f["X-SPF-Referer"] = c.p);
        var h = {
                o: !1,
                b: "",
                complete: []
            },
            g = l(Ra, null, a, h),
            k = l(Sa, null, a, c, h),
            e = l(Ta, null, a, c, e, h),
            e = {
                headers: f,
                w: s("request-timeout"),
                u: g,
                k: k,
                t: e,
                v: e
            };
        return "POST" == c.method ? la("POST", d, c.n, e) : la("GET", d, null, e)
    }

    function Qa(a, b, c, d) {
        var e = !1;
        c.responseStart = c.responseEnd = n();
        b.type && 0 == b.type.lastIndexOf("navigate", 0) && (c.navigationStart = c.startTime, s("cache-unified") || (e = R(a, b.type, !1), ia(e), e = !0));
        if (b.c && "multipart" == d.type)
            for (var f = d.parts, g = 0; g < f.length; g++) b.c(a, f[g]);
        Ua(a, b, c, d, e)
    }

    function Ra(a, b, c) {
        a = c.getResponseHeader("X-SPF-Response-Type") || "";
        b.o = -1 != a.toLowerCase().indexOf("multipart")
    }

    function Sa(a, b, c, d, e, f) {
        if (c.o) {
            e = c.b + e;
            var g;
            try {
                g = Na(e, !0, f)
            } catch (h) {
                d.abort();
                b.g && b.g(a, h);
                return
            }
            if (b.c)
                for (d = 0; d < g.i.length; d++) b.c(a, g.i[d]);
            c.complete = c.complete.concat(g.i);
            c.b = g.b
        }
    }

    function Ta(a, b, c, d, e) {
        if (e.timing)
            for (var f in e.timing) c[f] = e.timing[f];
        "navigate" == b.type && (c.navigationStart = c.startTime);
        var g;
        d.complete.length && (d.b = z(d.b), d.b ? (f = d.complete.length, Sa(a, b, d, e, "", !0), d.complete.length > f && (g = d.complete)) : g = d.complete);
        if (!g) {
            try {
                g = Na(e.responseText).i
            } catch (h) {
                b.g && b.g(a, h);
                return
            }
            if (b.c && 1 < g.length)
                for (d = d.complete.length; d < g.length; d++) b.c(a, g[d])
        }
        Ua(a, b, c, 1 < g.length ? {
            parts: g,
            type: "multipart"
        } : 1 == g.length ? g[0] : {}, !0)
    }

    function Ua(a, b, c, d, e) {
        if (e && "POST" != b.method && (e = R(a, b.type, !0))) {
            var f = s("cache-lifetime"),
                f = parseInt(f, 10),
                g = parseInt(s("cache-max"), 10);
            if (!(0 >= f || 0 >= g)) {
                var g = H(),
                    h = (parseInt(p["cache-counter"], 10) || 0) + 1;
                q("cache-counter", h);
                g[e] = {
                    data: d,
                    life: f,
                    time: n(),
                    count: h
                };
                setTimeout(ja, 1E3)
            }
        }
        d.timing = c;
        b.l && b.l(a, d)
    }

    function R(a, b, c) {
        a = G(a);
        var d;
        s("cache-unified") ? d = a : "navigate-back" == b || "navigate-forward" == b ? d = "history " + a : "navigate" == b ? d = (c ? "history " : "prefetch ") + a : "prefetch" == b && (d = c ? "prefetch " + a : "");
        return d || ""
    };

    function Va(a) {
        return x(a, function(a) {
            return v(a, s("link-class"))
        })
    }

    function Wa(a) {
        return x(a, function(a) {
            return v(a, s("nolink-class"))
        })
    }

    function Xa(a, b) {
        return x(a, function(a) {
            return a.href && "img" != a.tagName.toLowerCase()
        }, b)
    }

    function Ya(a) {
        if (a.metaKey || a.altKey || a.ctrlKey || a.shiftKey || 0 < a.button) return null;
        var b = Va(a.target);
        return !b || s("nolink-class") && Wa(a.target) ? null : (a = Xa(a.target, b)) ? a.href : null
    }

    function S() {
        if (!p["nav-init"]) return !1;
        var a = (parseInt(p["nav-counter"], 10) || 0) + 1,
            b = parseInt(s("navigate-limit"), 10),
            b = isNaN(b) ? Infinity : b;
        if (a > b) return !1;
        a = n() - (parseInt(p["nav-time"], 10) - 1);
        b = parseInt(s("navigate-lifetime"), 10);
        b = isNaN(b) ? Infinity : b;
        return a > b ? !1 : !0
    }

    function Za(a) {
        var b = Ya(a);
        null !== b && (b && b != window.location.href ? S() && (T(b), a.preventDefault()) : a.preventDefault())
    }

    function $a(a) {
        var b = Ya(a);
        b && b != window.location.href && setTimeout(function() {
            U(b, void 0)
        }, 0)
    }

    function ab(a, b) {
        var c = !(!b || !b["spf-back"]),
            d = b && b["spf-referer"];
        S() ? T(a, null, d, !0, c) : V(a)
    }

    function T(a, b, c, d, e) {
        b = b || {};
        q("nav-counter", (parseInt(p["nav-counter"], 10) || 0) + 1);
        q("nav-time", n());
        c = c || window.location.href;
        q("nav-referer", c);
        W();
        bb(a);
        var f = G(a),
            g = "preprocess " + G(f),
            h;
        for (h in B) g != h && 0 == h.lastIndexOf("preprocess", 0) && F(h);
        h = X()[f];
        q("nav-request", h);
        q("nav-promote", null);
        q("nav-promote-time", null);
        h && 4 != h.readyState ? (e = !!d, d = "preprocess " + G(a), h = "promote " + G(a), q("nav-promote", a), q("nav-promote-time", n()), F(d), C(h, !0), e || (b = l(cb, null, b), db(a, c, b))) : (d = !!d, h = !!e, e = l(cb, null,
            b), f = l(eb, null, b, h), g = l(fb, null, b, c, h, ""), b = Q(a, {
            method: b.method,
            c: f,
            g: e,
            l: g,
            n: b.postData,
            type: "navigate" + (d ? h ? "-back" : "-forward" : ""),
            p: c
        }), q("nav-request", b), d || db(a, c, e));
        Y("navigate-requested-callback", a) || V(a)
    }

    function db(a, b, c) {
        try {
            fa(!1, a, {
                "spf-referer": b
            }, void 0)
        } catch (d) {
            W(), c(a, d)
        }
    }

    function cb(a, b, c) {
        q("nav-request", null);
        Y(a.onError, b, c) && Y("navigate-error-callback", b, c) && V(b)
    }

    function eb(a, b, c, d) {
        Y("navigate-part-received-callback", c, d) ? P(c, d, function() {
            Y(a.onPart, c, d) ? Y("navigate-part-processed-callback", c, d) || V(c) : V(c)
        }, b) : V(c)
    }

    function fb(a, b, c, d, e, f) {
        q("nav-request", null);
        p["nav-promote"] == d && ((f.timing || {}).navigationStart = p["nav-promote-time"]);
        Y("navigate-received-callback", e, f) ? f.redirect ? ea(f.redirect, {
            "spf-referer": b
        }, !0) : P(e, "multipart" == f.type ? {} : f, function() {
            Y(a.onSuccess, e, f) && Y("navigate-processed-callback", e, f)
        }, c) : V(e)
    }

    function W() {
        var a = p["nav-request"];
        a && (a.abort(), q("nav-request", null))
    }

    function Y(a, b) {
        "string" == typeof a && (a = s(a));
        var c = Array.prototype.slice.call(arguments, 0);
        c[0] = a;
        return !1 !== m.apply(null, c)
    }

    function V(a) {
        W();
        bb();
        window.location.href = a
    }

    function gb(a, b, c) {
        b = b || {};
        var d = c || a;
        c = l(hb, null, !1, b, d);
        var e = l(ib, null, !1, b, d),
            d = l(jb, null, !1, b, d);
        Q(a, {
            method: b.method,
            c: e,
            g: c,
            l: d,
            n: b.postData,
            type: "load"
        })
    }

    function U(a, b, c) {
        b = b || {};
        var d = c || a;
        c = l(hb, null, !0, b, d);
        var e = l(ib, null, !0, b, d),
            d = l(jb, null, !0, b, d);
        b = Q(a, {
            method: b.method,
            c: e,
            g: c,
            l: d,
            n: b.postData,
            type: "prefetch"
        });
        a = G(a);
        X()[a] = b
    }

    function hb(a, b, c, d, e) {
        Y(b.onError, d, e);
        a && Z(d)
    }

    function ib(a, b, c, d, e) {
        if (a) {
            var f = l(eb, null, b, !1, d, e),
                g = "promote " + G(c);
            A(g, f);
            if (p["nav-promote"] == c) {
                C(g, !0);
                return
            }
        }(a ? Pa : P)(d, e, function() {
            Y(b.onPart, d, e)
        })
    }

    function jb(a, b, c, d, e) {
        if (e.redirect)(a ? U : gb)(e.redirect, {
            onSuccess: b.onSuccess,
            onPart: b.onPart,
            onError: b.onError
        }, c);
        else {
            var f = "promote " + G(c);
            if (a) {
                Z(d);
                if (p["nav-promote"] == c) {
                    a = window.location.href;
                    p["nav-promote"] == c && (a = p["nav-referer"]);
                    c = l(fb, null, b, a, !1, c, d, e);
                    A(f, c);
                    C(f, !0);
                    return
                }
                F(f)
            }(a ? Pa : P)(d, "multipart" == e.type ? {} : e, function() {
                Y(b.onSuccess, d, e)
            })
        }
    }

    function Z(a) {
        a = G(a);
        var b = X(),
            c = b[a];
        c && c.abort();
        delete b[a]
    }

    function bb(a) {
        var b = X();
        a = a && G(a);
        for (var c in b) a != c && Z(c)
    }

    function X() {
        return "nav-prefetches" in p ? p["nav-prefetches"] : q("nav-prefetches", {})
    };

    function $() {
        qa("js");
        qa("css");
        "complete" == document.readyState && (document.removeEventListener ? document.removeEventListener("DOMContentLoaded", $, !1) : document.detachEvent && document.detachEvent("onreadystatechange", $))
    }
    document.addEventListener ? document.addEventListener("DOMContentLoaded", $, !1) : document.attachEvent && document.attachEvent("onreadystatechange", $);
    $();
    window.spf = {
        init: function(a) {
            var b = !!window.history.pushState;
            a = a || {};
            for (var c in r) {
                var d = c,
                    e = c in a ? a[c] : r[c];
                t()[d] = e
            }
            b && (!p["history-init"] && window.addEventListener && (c = window.location.href, window.addEventListener("popstate", ga, !1), q("history-init", !0), q("history-callback", ab), q("history-listener", ga), q("history-url", c), q("history-timestamp", n()), ea(c, {
                "spf-referer": document.referrer
            })), !p["nav-init"] && document.addEventListener && (document.addEventListener("click", Za, !1), s("prefetch-on-mousedown") &&
                (document.addEventListener("mousedown", $a, !1), q("prefetch-listener", $a)), q("nav-init", !0), q("nav-counter", 0), q("nav-time", n()), q("nav-listener", Za)));
            return b
        },
        dispose: function() {
            window.history.pushState && (W(), p["nav-init"] && (document.removeEventListener && (document.removeEventListener("click", p["nav-listener"], !1), s("prefetch-on-mousedown") && document.removeEventListener("mousedown", p["prefetch-listener"], !1)), q("nav-init", !1), q("nav-counter", null), q("nav-time", null), q("nav-listener", null)), p["history-init"] &&
                (window.removeEventListener && window.removeEventListener("popstate", p["history-listener"], !1), q("history-init", !1), q("history-callback", null), q("history-listener", null), q("history-url", null), q("history-timestamp", 0)));
            t({})
        },
        navigate: function(a, b) {
            a && a != window.location.href && (S() ? T(a, b) : V(a))
        },
        load: function(a, b) {
            gb(a, b)
        },
        process: P,
        prefetch: function(a, b) {
            U(a, b)
        },
        scripts: {
            load: ya,
            unload: function(a) {
                ua("js", a)
            },
            ignore: function(a, b) {
                if (a && b) {
                    var c = L("js", a);
                    na(c, b)
                }
            },
            prefetch: za
        },
        styles: {
            load: Fa,
            unload: function(a) {
                ua("css",
                    a)
            },
            ignore: function(a, b) {
                if (a && b) {
                    var c = L("css", a);
                    na(c, b)
                }
            },
            prefetch: Ga
        }
    };
})();