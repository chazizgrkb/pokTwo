(function() {
    var qa = this;

    function wa(c) {
        c = c.split(".");
        for (var a = qa, b; b = c.shift();)
            if (null != a[b]) a = a[b];
            else return null;
        return a
    }

    function xa(c) {
        var a = typeof c;
        if ("object" == a)
            if (c) {
                if (c instanceof Array) return "array";
                if (c instanceof Object) return a;
                var b = Object.prototype.toString.call(c);
                if ("[object Window]" == b) return "object";
                if ("[object Array]" == b || "number" == typeof c.length && "undefined" != typeof c.splice && "undefined" != typeof c.propertyIsEnumerable && !c.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == b || "undefined" != typeof c.call && "undefined" != typeof c.propertyIsEnumerable && !c.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == a && "undefined" == typeof c.call) return "object";
        return a
    }
    var ya = Date.now || function() {
        return +new Date
    };

    function za(c, a) {
        var b = c.split("."),
            g = qa;
        b[0] in g || !g.execScript || g.execScript("var " + b[0]);
        for (var d; b.length && (d = b.shift());) b.length || void 0 === a ? g = g[d] ? g[d] : g[d] = {} : g[d] = a
    };
    var Aa, Fa, Ga, Ha, Ia, Ja, k, Ka, La, Ma, Na, Oa, Pa, Qa, Ra, Sa, Ta, Ua, Va, Wa, Xa, Ya, ab, bb, cb, db, eb, fb, gb, hb, ib, O, jb, kb, nb, ob, pb, qb, rb, sb, tb, ub, vb, wb, xb, yb, zb, Ab, Bb, Cb, Db, Eb, Fb, Gb, Hb, Ib, Jb, Kb, Lb, Pb, Qb, Rb, Sb, Tb, Ub, Vb, Wb, Xb, Yb, Zb, $b, ac, bc, cc = /^[6-9]$/,
        dc = {
            ri: 0,
            gf: 1,
            qi: 2,
            Yb: 3
        },
        ec = {
            EMPTY: 0,
            Ig: 1,
            De: 2
        },
        fc = {
            xg: 1,
            yg: 2,
            Dj: 3,
            wg: 4,
            zg: 5,
            Kj: 6,
            zj: 7,
            rb: 8
        },
        gc = {
            DONT_CARE: 1,
            ne: 2,
            Ag: 3
        },
        hc = {
            ff: 0,
            ti: 1,
            Yb: 2
        },
        ic = [23, 24],
        T = {
            yh: 0,
            vj: 114,
            ca: 115,
            Ra: 116,
            Q: 117,
            yj: 494,
            J: 118,
            oa: 119,
            $: 374,
            da: 120,
            ja: 121,
            wa: 122,
            V: 123,
            Qa: 124,
            wb: 125,
            Rh: 230,
            Hj: 553,
            X: 126,
            ka: 127,
            P: 128,
            Be: 343,
            La: 129,
            uj: 231,
            na: 130,
            uh: 131,
            wj: 237,
            xj: 570,
            Ej: 132,
            Jb: 134,
            Aa: 189,
            Lh: 246,
            Gj: 264,
            Fj: 256,
            yb: 133,
            Jg: 184,
            Mh: 419,
            Lj: 503,
            Mj: 578,
            Nj: 579,
            Oj: 505,
            Rj: 516,
            Pj: 509,
            Qj: 512,
            pa: 173,
            Aj: 568,
            Bj: 569,
            Vd: 135,
            Ac: 136,
            Bc: 137,
            Zd: 138,
            Ha: 139,
            vh: 140,
            Wd: 141,
            Xd: 142,
            Yd: 240,
            wh: 143,
            xh: 144,
            Gb: 347,
            Pb: 191,
            Ba: 150,
            Ja: 145,
            pd: 146,
            Pa: 147,
            Sj: 148,
            Ij: 245,
            Ke: 155,
            Sa: 149,
            nb: 154,
            re: 311,
            zc: 153,
            RENDERER: 152,
            Z: 156,
            xa: 151,
            ed: 158,
            Ae: 294,
            Kg: 157,
            ra: 160,
            Cj: 328,
            Tj: 580,
            Kb: 159
        },
        jc = {
            Le: 161,
            Me: 162
        };

    function kc(c) {
        return {
            ud: function() {
                return c.ud()
            },
            I: function() {
                return c.I()
            },
            S: function() {
                return c.S()
            }
        }
    };
    (function() {
        function c(a) {
            for (var b = [], c = 0, d; d = a[c++];) b.push(d.api || {
                a: d.Tb,
                b: d.H,
                c: d.za,
                d: d.getType,
                e: d.Nb,
                f: d.yi,
                g: d.xi,
                i: d.oc,
                j: d.D,
                k: d.Xc,
                l: d.wi
            });
            return b
        }
        Aa = function(a) {
            var b = {};
            if (a)
                for (var c = 0; c < a.length; ++c) b[a[c]] = !0;
            return b
        };
        Fa = function(a) {
            var b = c(a.S());
            return a.api || {
                a: a.I,
                b: function() {
                    return b
                },
                c: a.ud
            }
        };
        Ga = function(a) {
            return a ? (a = a.toLowerCase(), "zh-tw" == a || "zh-cn" == a || "ja" == a || "ko" == a) : !1
        };
        Ha = function() {
            return (new Date).getTime()
        };
        Ia = function(a) {
            return "string" == typeof a
        };
        Ja = function(a) {
            return "number" ==
                typeof a
        }
    })();

    function lc() {
        return {
            getInstance: function() {
                return {
                    Oa: "hp",
                    ub: "hp",
                    Vc: "google.com",
                    ze: "",
                    Ya: "en",
                    Sd: "",
                    jg: "",
                    lb: "",
                    Fb: 0,
                    tg: "",
                    wc: "",
                    Fe: !1,
                    Ce: "",
                    $c: "",
                    Zc: 0,
                    cj: null,
                    Ge: !1,
                    Tc: !1,
                    Yi: !1,
                    Td: !1,
                    fh: !1,
                    ib: Aa([19, 5, 0]),
                    Pi: !1,
                    fg: !0,
                    Pc: 10,
                    sg: !0,
                    Ud: !0,
                    Ni: !1,
                    gg: !1,
                    Qh: !1,
                    vd: !0,
                    mf: !1,
                    uf: 500,
                    cc: !1,
                    Ph: !0,
                    Ti: !0,
                    gb: !1,
                    hb: "",
                    se: "//www.google.com/textinputassistant",
                    te: "",
                    Fg: 7,
                    Qi: !1,
                    Ri: !1,
                    tf: !1,
                    Vf: !0,
                    Wf: !1,
                    Bd: !1,
                    yd: !1,
                    Ui: !1,
                    pf: !1,
                    of: !1,
                    eb: 1,
                    zd: !0,
                    Va: !1,
                    lc: !1,
                    Kd: !1,
                    Sf: 10,
                    Cc: !1,
                    Li: 0,
                    Si: !1,
                    Tf: !0,
                    nf: !1,
                    ye: document.body,
                    lg: !0,
                    ge: null,
                    cb: {},
                    Oi: {},
                    Xi: 0,
                    Pf: !1,
                    hg: !0,
                    ua: !1,
                    $i: null,
                    kg: !1,
                    lh: null,
                    mh: null,
                    ke: !1,
                    Xf: !0,
                    Nf: !1,
                    bj: 1,
                    Ji: 1,
                    spellcheck: !1,
                    Ld: !1,
                    Zf: "Search",
                    xc: "I'm  Feeling Lucky",
                    $f: "",
                    Yf: "Learn more",
                    ve: "Remove",
                    ue: "This search was removed from your Web History",
                    Vi: "",
                    Mi: "Did you mean:",
                    Eg: "",
                    Zi: "",
                    Of: !1,
                    Qf: null,
                    jb: 0,
                    Rf: 0,
                    qc: "",
                    vc: "",
                    Wi: !1,
                    Db: "absolute",
                    Uf: !1,
                    pe: !1,
                    kb: null,
                    Hd: !0,
                    aj: 0,
                    Cb: [0, 0, 0],
                    Cg: null,
                    vf: null,
                    oe: [0],
                    ee: 0,
                    Gg: 1,
                    hc: "",
                    dg: "",
                    cg: "",
                    Hb: null,
                    bh: "",
                    $g: "",
                    Ki: 1,
                    vb: {},
                    Jf: !0
                }
            }
        }
    };
    var mc = /<\/?(?:b|em)>/gi,
        nc = {
            th: 8,
            rb: 9,
            Je: 13,
            gd: 27,
            Jj: 32,
            qh: 37,
            sh: 38,
            rh: 39,
            ph: 40,
            DELETE: 46
        };
    var Y = function() {
        function c(a, b, c) {
            f[a] = c;
            e[a] = [b]
        }

        function a(a, n, c) {
            var w = l[a];
            w ? w != b && (l[a] = b) : l[a] = c;
            (w = e[a]) ? w.push(n): e[a] = [n];
            h[n] = c
        }
        var b = k,
            g = 0,
            d = {},
            f = {},
            h = {},
            l = {},
            e = {},
            p = 1E4;
        return {
            ob: function() {
                return g++
            },
            N: function() {
                return p++
            },
            lf: c,
            vg: function(a, b) {
                var e = p++;
                c(a, e, b);
                return e
            },
            register: a,
            tj: function(b, e) {
                var c = p++;
                a(b, c, e);
                return c
            },
            kh: function() {
                return e
            },
            getInstance: function(a, e) {
                var c = d[a];
                return c ? c : (c = f[a]) ? d[a] = c() : e ? (c = h[e]) ? c() : null : (c = l[a]) && c != b ? c() : null
            }
        }
    }();

    function oc(c, a, b, g, d, f) {
        function h() {
            if (x) {
                for (var a = 0, e; e = v[a++];) e.M && e.M();
                x = !1
            }
        }

        function l(a) {
            for (var b in a) {
                var c = b,
                    d = a[c];
                if (d != n.Le)
                    if (w[c]) {
                        for (var p = y[c] || [], r = 0, g = void 0; r < d.length; ++r)(g = e(c, d[r])) && p.push(g);
                        y[c] = p
                    } else(d = e(c, d)) && (u[c] = d)
            }
        }

        function e(a, e) {
            var b;
            if (e && e instanceof Object) b = e;
            else if (b = D.getInstance(a, e), !b) return null;
            if (b.va) {
                var c = b.va();
                if (c)
                    for (var n = 0, d, r, p; d = c[n++];) {
                        p = !1;
                        r = d.getType();
                        if (w[r]) {
                            if (p = B[r]) {
                                p.push(d);
                                continue
                            }
                            p = !0
                        }
                        B[r] = p ? [d] : d
                    }
            }
            s.push([b, a]);
            v.push(b);
            return b
        }

        function p(a) {
            for (var b = T.yh, e = 0, c; c = s[e++];) c[0] == a && (b = c[1]);
            return b
        }

        function q(a, b) {
            var e = Ka(a.getType(), z),
                c = Ka(b.getType(), z);
            return 0 > e ? 1 : 0 > c ? -1 : e - c
        }
        var n = jc,
            m = T,
            w = Aa([m.Kb, m.Ke, m.Sa, m.zc, m.nb, m.re, m.RENDERER, m.Z, m.xa, m.ed, m.Ae, m.ra]),
            r = [m.Ja, m.Q, m.J, m.oa, m.$, m.X, m.ca, m.Ra, m.da, m.Pa, m.ja, m.yb, m.wa, m.V, m.Qa, m.wb, m.ka, m.P, m.Be, m.La],
            z = [m.ka, m.Sa, m.Jb, m.V, m.ja, m.X, m.J, m.ca, m.P, m.ra, m.pa, m.oa, m.Ra, m.RENDERER, m.zc, m.La, m.da, m.$, m.Qa, m.ed, m.Ke, m.uh, m.na, m.Pa, m.Wd, m.Xd, m.Bc, m.Yd, m.wh, m.Zd,
                m.xh, m.Ha, m.vh, m.Vd, m.Ac
            ],
            u = {},
            y = {},
            B = {},
            s = [],
            v = [],
            x = !1,
            D = Y,
            I = {
                activate: function(a) {
                    h();
                    for (var b = 0, e; e = v[b++];) e.activate && e.activate(a);
                    x = !0
                },
                M: h,
                Rd: function() {
                    return x
                },
                get: function(a, e) {
                    var b = u[a];
                    if (b) return b.A ? b.A(p(e)) : {}
                },
                R: function(a, b) {
                    var e = y[a];
                    if (e) {
                        for (var c = [], n = p(b), w = 0, d; d = e[w++];) c.push(d.A ? d.A(n) : {});
                        return c
                    }
                    return []
                },
                ga: function() {
                    return c
                },
                Ea: function() {
                    return d
                },
                N: function(a, b) {
                    var e = y[m.Kb];
                    if (e)
                        for (var c = 0, n; n = e[c++];)
                            if (n.B() == a) return n.A ? n.A(p(b)) : {};
                    return null
                }
            };
        (function() {
            if (f.Jf) {
                var d =
                    D.kh(),
                    p, m, z, h;
                for (h in d) {
                    var s = h;
                    p = d[s];
                    m = w[s];
                    if (z = a[s]) {
                        if (z != n.Le && m && z.length) {
                            m = a;
                            z = z.slice(0);
                            for (var y = [], V = {}, U = 0, N = void 0, Q = void 0; Q = z[U++];) Q instanceof Object && (N = Q.B(), V[N] || (y.push(Q), V[N] = 1), z.splice(--U, 1));
                            U = Aa(z);
                            U[n.Me] && (U = Aa(z.concat(p)), delete U[n.Me]);
                            for (N in U) V[N] || y.push(parseInt(N, 10));
                            m[s] = y
                        }
                    } else a[s] = m ? p : p[0]
                }
            }
            l(a);
            for (d = 0; h = r[d++];) a[h] || (m = e(h, void 0)) && (u[h] = m);
            l(B);
            v.sort(q);
            for (d = 0; h = v[d++];) h.K && h.K(b, g);
            c.Yc(g, b.$a());
            g.zh();
            for (d = 0; h = v[d++];) h.C && h.C(I);
            for (d =
                0; h = v[d++];) h.G && h.G(f);
            for (d = 0; h = v[d++];) h.activate && h.activate(f);
            x = !0
        })();
        return I
    };

    function pc(c, a, b) {
        function g() {
            return c
        }

        function d() {
            return w
        }

        function f() {
            return r
        }

        function h() {
            return a
        }

        function l() {
            return b || ""
        }

        function e(a, e) {
            n(a, e)
        }

        function p(a, e) {
            n(a, e, !0)
        }

        function q() {
            s || (v = x = !0)
        }

        function n(a, e, b) {
            s || (v = !0, z[a] = e, b && (u[a] = e))
        }
        var m = Na(),
            w, r, z = {},
            u = {},
            y, B, s = !1,
            v = !1,
            x = !1,
            D = !1,
            I = {
                getId: function() {
                    return m
                },
                Oe: function() {
                    var a = parseInt(m, 36);
                    return isNaN(a) ? -1 : a
                },
                I: g,
                Ze: d,
                ma: f,
                Ia: h,
                D: function() {
                    return z
                },
                $e: function() {
                    return y
                },
                cf: l,
                getTimestamp: function() {
                    return B
                },
                Fd: function() {
                    return {
                        I: g,
                        Ze: d,
                        ma: f,
                        Ia: h,
                        cf: l,
                        setParameter: e,
                        ld: p,
                        N: q
                    }
                },
                setParameter: e,
                ld: p,
                N: q,
                Eh: function() {
                    return x
                },
                Dh: function() {
                    v = D = !0
                },
                mg: function(e, n, d) {
                    return !v && c == e && a.equals(n) && b == d
                },
                Pe: function() {
                    return D
                },
                Ch: function() {
                    s || (B = Ha(), "cp" in u || p("cp", a.getPosition()), n("gs_id", m), y = La(u) + ":" + c, v = s = !0)
                }
            };
        w = c.toLowerCase();
        r = Ma(w);
        return I
    };

    function qc(c, a, b, g, d, f, h, l) {
        function e() {
            return !!b && !!b[0]
        }
        var p, q = !0,
            n, m = {
                ea: function() {
                    return c
                },
                I: function() {
                    return a
                },
                $b: function() {
                    return e() ? b[0] : null
                },
                S: function() {
                    return b
                },
                ia: e,
                D: function() {
                    return g
                },
                Ib: function() {
                    return d
                },
                Ta: function() {
                    return f
                },
                od: function() {
                    return h
                },
                Xe: function() {
                    return l
                },
                He: function() {
                    h = !0
                },
                getType: function() {
                    return q
                },
                Ie: function() {
                    n || (n = kc(m));
                    return n
                },
                ud: function() {
                    return p
                }
            };
        b ? b.length && 33 == b[0].getType() && (f = q = !1) : b = [];
        g ? p = g.ui("t") : g = rc;
        return m
    };

    function sc(c, a, b, g, d, f) {
        function h(a) {
            if (d)
                for (var e = 0, b; b = a[e++];)
                    if (-1 != Ka(b, d)) return !0;
            return !1
        }
        var l = !1,
            e = {
                Tb: function() {
                    return c
                },
                H: function() {
                    return a
                },
                za: function() {
                    return b
                },
                getType: function() {
                    return g
                },
                Xc: function() {
                    return f.getString("za")
                },
                wi: function() {
                    return f.getString("zb")
                },
                Nb: function() {
                    return d || []
                },
                yi: function(a) {
                    return !!d && h([a])
                },
                xi: h,
                D: function() {
                    return f
                },
                oc: function() {
                    return l
                }
            };
        switch (g) {
            case 0:
            case 32:
            case 38:
            case 39:
            case 400:
            case 407:
            case 35:
            case 33:
            case 41:
            case 34:
            case 44:
            case 45:
            case 40:
            case 46:
            case 56:
            case 30:
                l = !0
        }
        f || (f = rc);
        return e
    };
    (function() {
        var c = /\s/g,
            a = /\u3000/g,
            b = /^\s/,
            g = /\s+/,
            d = /\s+/g,
            f = /^\s+|\s+$/g,
            h = /^\s+$/,
            l = /<[^>]*>/g,
            e = /&nbsp;/g,
            p = /&#x3000;/g,
            q = [/&/g, /&amp;/g, /</g, /&lt;/g, />/g, /&gt;/g, /"/g, /&quot;/g, /'/g, /&#39;/g, /{/g, /&#123;/g],
            n = document.getElementsByTagName("head")[0],
            m = 0;
        Pa = function(a, e) {
            function b() {
                return e
            }
            void 0 === e && (e = a);
            return {
                getPosition: b,
                le: function() {
                    return a
                },
                zi: b,
                N: function() {
                    return a < e
                },
                equals: function(b) {
                    return b && a == b.le() && e == b.zi()
                }
            }
        };
        Oa = function(a, e, b, c) {
            if (null == e || "" === e) {
                if (!c) return;
                e =
                    ""
            }
            b.push(a + "=" + encodeURIComponent(String(e)))
        };
        La = function(a) {
            var e = [],
                b;
            for (b in a) Oa(b, a[b], e);
            return e.join("&")
        };
        Qa = function(a) {
            return !!a && !h.test(a)
        };
        Ra = function(a) {
            for (var e = q.length, b = 0; b < e; b += 2) a = a.replace(q[b], q[b + 1].source);
            return a
        };
        Sa = function(a) {
            for (var b = q.length, c = 0; c < b; c += 2) a = a.replace(q[c + 1], q[c].source);
            a = a.replace(e, " ");
            return a.replace(p, "\u3000")
        };
        Ta = function(a) {
            return a.replace(mc, "")
        };
        Ua = function(a) {
            return a.replace(l, "")
        };
        Va = function(e) {
            return e && (-1 < e.indexOf(" ") || g.test(e)) ?
                (e = e.replace(a, "&#x3000;"), e.replace(c, "&nbsp;")) : e
        };
        Ma = function(a, e) {
            return a && (-1 < a.indexOf(" ") || g.test(a)) ? (a = a.replace(d, " "), a.replace(e ? f : b, "")) : a
        };
        Wa = function(a, e, b) {
            b && (a = a.toLowerCase(), e = e.toLowerCase());
            return e.length <= a.length && a.substring(0, e.length) == e
        };
        Xa = function(a, e) {
            return a || e ? !!a && !!e && a.toLowerCase() == e.toLowerCase() : !0
        };
        Ya = function(a) {
            window.clearTimeout(a)
        };
        k = function() {};
        ab = function() {
            return n
        };
        Na = function() {
            return (m++).toString(36)
        };
        bb = function(a) {
            return cc.test(a)
        };
        cb =
            function(a, e) {
                return sc(a.Tb(), a.H(), e, a.getType(), a.Nb(), a.D())
            };
        Ka = function(a, e) {
            if (e.indexOf) return e.indexOf(a);
            for (var b = 0, c = e.length; b < c; ++b)
                if (e[b] === a) return b;
            return -1
        };
        db = function(a, e) {
            return a.U() - e.U()
        };
        eb = function(a, e) {
            return e.U() - a.U()
        };
        fb = function(a) {
            var e = {},
                b;
            for (b in a) e[b] = a[b];
            return e
        };
        gb = function(a, e, b) {
            e in a || (a[e] = [162]);
            a[e].push(b)
        }
    })();

    function tc(c) {
        return {
            contains: function(a) {
                return a in c
            },
            N: function(a) {
                return !!c[a]
            },
            Ee: function(a) {
                return c[a] || 0
            },
            getString: function(a) {
                return c[a] || ""
            },
            ui: function(a) {
                return c[a] || null
            }
        }
    }
    var rc = tc({});
    (function() {
        function c(a, b) {
            var c = document.createElement(a);
            b && (c.className = b);
            return c
        }

        function a(a) {
            return c("div", a)
        }

        function b(a, b) {
            var c = a.getElementsByTagName("input");
            if (c)
                for (var n = 0, d; d = c[n++];)
                    if (d.name == b && "submit" != d.type.toLowerCase()) return d;
            return null
        }

        function g(a) {
            a && (a.preventDefault && a.preventDefault(), a.returnValue = !1);
            return !1
        }

        function d(a) {
            return a ? a.ownerDocument || a.document : window.document
        }

        function f(a) {
            return a ? (a = d(a), a.defaultView || a.parentWindow) : window
        }
        var h = void 0 !=
            document.documentElement.style.opacity,
            l = {
                rtl: "right",
                ltr: "left"
            };
        nb = function(a, b) {
            if (a.setSelectionRange) a.setSelectionRange(b, b);
            else if (a.createTextRange) try {
                var c = a.createTextRange();
                c.collapse(!0);
                c.moveStart("character", b);
                c.select()
            } catch (n) {}
        };
        ob = function(a) {
            try {
                var b, c;
                if ("selectionStart" in a) b = a.selectionStart, c = a.selectionEnd;
                else {
                    var n = a.createTextRange(),
                        g = d(a).selection.createRange();
                    n.inRange(g) && (n.setEndPoint("EndToStart", g), b = n.text.length, n.setEndPoint("EndToEnd", g), c = n.text.length)
                }
                if (void 0 !==
                    b) return Pa(b, c)
            } catch (f) {}
            return null
        };
        pb = function(a, b) {
            for (var c = 0, n = 0; a && (!b || a != b);) {
                c += a.offsetTop;
                n += a.offsetLeft;
                try {
                    a = a.offsetParent
                } catch (d) {
                    a = null
                }
            }
            return {
                ci: c,
                Vb: n
            }
        };
        qb = function(a) {
            try {
                return d(a).activeElement == a
            } catch (b) {}
            return !1
        };
        rb = function(a) {
            return 38 == a || 40 == a
        };
        O = c;
        sb = function() {
            var a = c("table");
            a.cellPadding = a.cellSpacing = 0;
            a.style.width = "100%";
            return a
        };
        tb = a;
        ub = function(b, c) {
            var d = a(b),
                n = d.style;
            n.background = "transparent";
            n.color = "#000";
            n.padding = 0;
            n.position = "absolute";
            c && (n.zIndex =
                c);
            n.whiteSpace = "pre";
            return d
        };
        vb = function(a, b) {
            a.innerHTML != b && (b && (hb ? b = Va(b) : ib && (b = ['<pre style="font:inherit;margin:0">', b, "</pre>"].join(""))), a.innerHTML = b)
        };
        wb = function(a, b, c) {
            var d = a.style;
            "INPUT" != a.nodeName && (c += 1);
            d.left = d.right = "";
            d[b] = c + "px"
        };
        xb = function(a) {
            return "rtl" == a ? "right" : "left"
        };
        yb = function(a, b) {
            a.dir != b && (a.dir = b, a.style.textAlign = l[b])
        };
        zb = function(a, d, g) {
            if (b(a, d)) return null;
            var n = c("input");
            n.type = "hidden";
            n.name = d;
            g && (n.value = g);
            return a.appendChild(n)
        };
        Ab = b;
        Bb = function(a) {
            var b =
                document.createEvent("KeyboardEvent");
            b.initKeyEvent("keypress", !0, !0, null, !1, !1, !0, !1, 27, 0);
            a.dispatchEvent(b)
        };
        Cb = g;
        Db = function(a) {
            if (a = a || window.event) a.stopPropagation && a.stopPropagation(), a.cancelBubble = a.cancel = !0;
            return g(a)
        };
        Eb = function(a, b) {
            b.parentNode.insertBefore(a, b.nextSibling)
        };
        Fb = function(a) {
            a = a.insertCell(-1);
            var b = O("a");
            b.href = "#ifl";
            b.className = "gssb_j gss_ifl";
            a.appendChild(b);
            return b
        };
        Gb = function(a, b) {
            var c = f(a);
            return (c = c.getComputedStyle ? c.getComputedStyle(a, "") : a.currentStyle) ?
                c[b] : null
        };
        Hb = function(a) {
            var b = a || window;
            a = b.document;
            var c = b.innerWidth,
                b = b.innerHeight;
            if (!c) {
                var d = a.documentElement;
                d && (c = d.clientWidth, b = d.clientHeight);
                c || (c = a.body.clientWidth, b = a.body.clientHeight)
            }
            return {
                Se: c,
                Re: b
            }
        };
        Ib = function(a) {
            return (a || window).document.documentElement.clientWidth
        };
        Jb = function(a) {
            a = a.style;
            a.border = "none";
            a.padding = jb || kb ? "0 1px" : "0";
            a.margin = "0";
            a.height = "auto";
            a.width = "100%"
        };
        Kb = function(a) {
            return (h ? "opacity" : "filter") + ":" + (h ? a + "" : [hb ? "progid:DXImageTransform.Microsoft.Alpha(" :
                "alpha(", "opacity=", Math.floor(100 * a), ")"
            ].join("")) + ";"
        };
        Lb = function(a) {
            var b = {};
            if (a)
                for (var c = 0, d; d = a[c++];) b[d.Ub()] = d;
            return b
        };
        Pb = d;
        Qb = f;
        Rb = function(a) {
            jb && (a.tabIndex = 0)
        }
    })();
    Y.lf(T.Pb, 192, function() {
        function c(a) {
            Ia(a) && (a = g(a));
            var b = "";
            if (a) {
                for (var c = a.length, d = 0, e = 0, f = 0; c--;)
                    for (e <<= 8, e |= a[f++], d += 8; 6 <= d;) var l = e >> d - 6 & 63,
                        b = b + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(l),
                        d = d - 6;
                d && (l = e << 8 >> d + 8 - 6 & 63, b += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(l))
            }
            return b
        }

        function a(a) {
            var b = [];
            if (a)
                for (var c = 0, d = 0, g = 0; g < a.length; ++g) {
                    var f = a.charCodeAt(g);
                    if (32 > f || 127 < f || !e[f - 32]) return [];
                    c <<= 6;
                    c |= e[f - 32] - 1;
                    d += 6;
                    8 <= d &&
                        (b.push(c >> d - 8 & 255), d -= 8)
                }
            return b
        }

        function b(a, b) {
            var c = {};
            c.L = Array(4);
            c.buffer = Array(4);
            c.vi = Array(4);
            c.padding = Array(64);
            c.padding[0] = 128;
            for (var e = 1; 64 > e; ++e) c.padding[e] = 0;
            d(c);
            var e = Array(64),
                p;
            64 < b.length ? (d(c), h(c, b), p = l(c)) : p = b;
            for (var q = 0; q < p.length; ++q) e[q] = p[q] ^ 92;
            for (q = p.length; 64 > q; ++q) e[q] = 92;
            d(c);
            for (q = 0; 64 > q; ++q) c.buffer[q] = e[q] ^ 106;
            f(c, c.buffer);
            c.total = 64;
            h(c, g(a));
            p = l(c);
            d(c);
            f(c, e);
            c.total = 64;
            h(c, p);
            return l(c)
        }

        function g(a) {
            for (var b = [], c = 0, d = 0; d < a.length; ++d) {
                var e = a.charCodeAt(d);
                128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
            }
            return b
        }

        function d(a) {
            a.L[0] = 1732584193;
            a.L[1] = 4023233417;
            a.L[2] = 2562383102;
            a.L[3] = 271733878;
            a.Zb = a.total = 0
        }

        function f(a, b) {
            for (var c = a.vi, d = 0; 64 > d; d += 4) c[d / 4] = b[d] | b[d + 1] << 8 | b[d + 2] << 16 | b[d + 3] << 24;
            for (var e = a.L[0], d = a.L[1], g = a.L[2], f = a.L[3], l, h, v, x = 0; 64 > x; ++x) 16 > x ? (l = f ^ d & (g ^ f), h = x) : 32 > x ? (l = g ^ f & (d ^ g), h = 5 * x + 1 & 15) : 48 > x ? (l = d ^ g ^ f, h = 3 * x + 5 & 15) : (l = g ^ (d | ~f), h = 7 * x & 15), v = f, f = g, g = d, e = e + l + q[x] + c[h] & 4294967295, l = p[x],
                d = d + ((e << l | e >>> 32 - l) & 4294967295) & 4294967295, e = v;
            a.L[0] = a.L[0] + e & 4294967295;
            a.L[1] = a.L[1] + d & 4294967295;
            a.L[2] = a.L[2] + g & 4294967295;
            a.L[3] = a.L[3] + f & 4294967295
        }

        function h(a, b, c) {
            c || (c = b.length);
            a.total += c;
            for (var d = 0; d < c; ++d) a.buffer[a.Zb++] = b[d], 64 == a.Zb && (f(a, a.buffer), a.Zb = 0)
        }

        function l(a) {
            var b = Array(16),
                c = 8 * a.total,
                d = a.Zb;
            h(a, a.padding, 56 > d ? 56 - d : 64 - (d - 56));
            for (var e = 56; 64 > e; ++e) a.buffer[e] = c & 255, c >>>= 8;
            f(a, a.buffer);
            for (e = d = 0; 4 > e; ++e)
                for (c = 0; 32 > c; c += 8) b[d++] = a.L[e] >> c & 255;
            return b
        }
        var e = [0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 0, 0, 0, 0, 64, 0, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 0, 0, 0, 0, 0
            ],
            p = [7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21],
            q = [3614090360, 3905402710, 606105819, 3250441966, 4118548399, 1200080426, 2821735955, 4249261313,
                1770035416, 2336552879, 4294925233, 2304563134, 1804603682, 4254626195, 2792965006, 1236535329, 4129170786, 3225465664, 643717713, 3921069994, 3593408605, 38016083, 3634488961, 3889429448, 568446438, 3275163606, 4107603335, 1163531501, 2850285829, 4243563512, 1735328473, 2368359562, 4294588738, 2272392833, 1839030562, 4259657740, 2763975236, 1272893353, 4139469664, 3200236656, 681279174, 3936430074, 3572445317, 76029189, 3654602809, 3873151461, 530742520, 3299628645, 4096336452, 1126891415, 2878612391, 4237533241, 1700485571, 2399980690, 4293915773,
                2240044497, 1873313359, 4264355552, 2734768916, 1309151649, 4149444226, 3174756917, 718787259, 3951481745
            ];
        return {
            getType: function() {
                return T.Pb
            },
            B: function() {
                return 192
            },
            A: function() {
                return {
                    md: c,
                    Ve: a,
                    We: b
                }
            }
        }
    });
    Y.lf(T.Ba, 95, function() {
        function c(a, b) {
            b = Ra(Ta(b));
            a = Ra(Ma(a, !0));
            if (Wa(b, a)) return [a, "<b>", b.substr(a.length), "</b>"].join("");
            for (var c = [], d = [], f = b.length - 1, h = 0, l = -1, e; e = b.charAt(h); ++h)
                if (" " == e || "\t" == e) c.length && (e = h + 1, d.push({
                    kf: c.join(""),
                    Ua: l,
                    e: e
                }), c = [], l = -1);
                else if (c.push(e), -1 == l) l = h;
            else if (h == f) {
                e = l;
                var p = h + 1;
                d.push({
                    kf: c.join(""),
                    Ua: e,
                    e: p
                })
            }
            c = a.split(/\s+/);
            h = {};
            for (f = 0; l = c[f++];) h[l] = 1;
            e = -1;
            c = [];
            p = d.length - 1;
            for (f = 0; l = d[f]; ++f) h[l.kf] ? (l = -1 == e, f == p ? c.push({
                    Ua: l ? f : e,
                    e: f
                }) : l && (e = f)) :
                -1 < e && (c.push({
                    Ua: e,
                    e: f - 1
                }), e = -1);
            if (!c.length) return ["<b>", b, "</b>"].join("");
            f = [];
            for (h = l = 0; e = c[h]; ++h)(p = d[e.Ua].Ua) && f.push("<b>", b.substring(l, p - 1), "</b> "), l = d[e.e].e, f.push(b.substring(p, l));
            l < b.length && f.push("<b>", b.substring(l), "</b> ");
            return f.join("")
        }
        return {
            getType: function() {
                return T.Ba
            },
            B: function() {
                return 95
            },
            A: function() {
                return {
                    bold: c
                }
            }
        }
    });
    Y.register(T.pd, 12, function() {
        function c(c) {
            c = a(c, n, b);
            c = a(c, m, g);
            return a(c, r, d)
        }

        function a(a, b, c) {
            for (var d, e, f = 0; null != (d = b.exec(a));) e || (e = []), f < d.index && e.push(a.substring(f, d.index)), e.push(c(d[0])), f = b.lastIndex;
            if (!e) return a;
            f < a.length && e.push(a.substring(f));
            return e.join("")
        }

        function b(a) {
            return String.fromCharCode(a.charCodeAt(0) - 65248)
        }

        function g(a) {
            var b = a.charCodeAt(0);
            return 1 == a.length ? h.charAt(b - 65377) : 65438 == a.charCodeAt(1) ? l.charAt(b - 65395) : e.charAt(b - 65418)
        }

        function d(a) {
            var b =
                a.charCodeAt(0);
            return 12443 == a.charCodeAt(1) ? p.charAt(b - 12454) : q.charAt(b - 12495)
        }

        function f(a) {
            return eval('"\\u30' + a.split(",").join("\\u30") + '"')
        }
        var h = f("02,0C,0D,01,FB,F2,A1,A3,A5,A7,A9,E3,E5,E7,C3,FC,A2,A4,A6,A8,AA,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CA,CB,CC,CD,CE,CF,D2,D5,D8,DB,DE,DF,E0,E1,E2,E4,E6,E8,E9,EA,EB,EC,ED,EF,F3,9B,9C"),
            l = f("F4__,AC,AE,B0,B2,B4,B6,B8,BA,BC,BE,C0,C2,C5,C7,C9_____,D0,D3,D6,D9,DC"),
            e = f("D1,D4,D7,DA,DD"),
            p = f("F4____,AC_,AE_,B0_,B2_,B4_,B6_,B8_,BA_,BC_,BE_,C0_,C2__,C5_,C7_,C9______,D0__,D3__,D6__,D9__,DC"),
            q = f("D1__,D4__,D7__,DA__,DD"),
            n = /[\uFF01-\uFF5E]/g,
            m = RegExp("([\uff73\uff76-\uff84\uff8a-\uff8e]\uff9e)|([\uff8a-\uff8e]\uff9f)|([\uff61-\uff9f])", "g"),
            w = "([" + f("A6,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CF,D2,D5,D8,DB") + "]\u309b)|([" + f("CF,D2,D5,D8,DB") + "]\u309c)",
            r = RegExp(w, "g");
        return {
            getType: function() {
                return T.pd
            },
            B: function() {
                return 12
            },
            A: function() {
                return {
                    hi: c
                }
            }
        }
    });

    function uc(c, a, b, g, d) {
        var f = Sb ? "-moz-" : kb ? "-ms-" : jb ? "-o-" : Tb ? "-webkit-" : "",
            h = ".gstl_" + g,
            l = RegExp("(\\.(" + d.join("|") + ")\\b)"),
            e = [];
        return {
            addRule: function(c, d) {
                if (a) {
                    if (b) {
                        for (var f = c.split(","), g = [], w = 0, r; r = f[w++];) r = l.test(r) ? r.replace(l, h + "$1") : h + " " + r, g.push(r);
                        c = g.join(",")
                    }
                    e.push(c, "{", d, "}")
                }
            },
            zh: function() {
                if (a && e.length) {
                    a = !1;
                    var b = O("style");
                    b.setAttribute("type", "text/css");
                    (c || ab()).appendChild(b);
                    var d = e.join("");
                    e = null;
                    b.styleSheet ? b.styleSheet.cssText = d : b.appendChild(document.createTextNode(d))
                }
            },
            prefix: function(a, b) {
                var c = [a, b || ""];
                f && (c = c.concat(b ? [a, f, b] : [f, a]));
                return c.join("")
            }
        }
    };
    Y.register(T.Pa, 10, function() {
        function c(a) {
            var c = 0;
            a && (h || b(), g(), a in l ? c = l[a] : (vb(h, Ra(a)), l[a] = c = h.offsetWidth, vb(h, "")));
            return c
        }

        function a() {
            h || b();
            g();
            e || (vb(h, "|"), e = h.offsetHeight);
            return e
        }

        function b() {
            h = ub(d.qc);
            h.style.visibility = "hidden";
            f.appendChild(h)
        }

        function g() {
            var a = Ha();
            if (!q || q + 3E3 < a) q = a, a = Gb(h, "fontSize"), p && a == p || (l = {}, e = null, p = a)
        }
        var d, f, h, l, e, p, q;
        return {
            K: function(a) {
                f = a.we() || document.body
            },
            G: function(a) {
                d = a
            },
            getType: function() {
                return T.Pa
            },
            B: function() {
                return 10
            },
            A: function() {
                return {
                    getWidth: c,
                    getHeight: a
                }
            }
        }
    });

    function vc(c) {
        var a;
        (function() {
            function b(a) {
                return c[a] || g
            }

            function g() {}
            c || (c = {});
            a = {
                cd: b("a"),
                search: b("b"),
                Sb: b("c"),
                redirect: b("d"),
                Rb: b("e"),
                Ab: b("f"),
                Kc: b("g"),
                Lc: b("h"),
                Gc: b("i"),
                nd: b("j"),
                Eb: b("k"),
                fd: b("l"),
                Jc: b("m"),
                Wb: b("n"),
                Qc: b("o"),
                Rc: b("p"),
                Qb: b("q"),
                Yc: b("r"),
                hf: b("s"),
                jf: b("t"),
                Ic: b("u"),
                Sc: b("w"),
                Dc: b("x"),
                Hc: b("y"),
                Fc: b("z"),
                Ec: b("aa"),
                Mc: b("ab"),
                jd: b("ac")
            }
        })();
        return {
            cd: function() {
                return a.cd()
            },
            search: function(b, c) {
                a.search(b, c)
            },
            Sb: function(b) {
                a.Sb(b)
            },
            redirect: function(b) {
                a.redirect(b)
            },
            Rb: function(b) {
                return a.Rb(b)
            },
            Ab: function(b) {
                a.Ab(b)
            },
            Kc: function(b) {
                a.Kc(b)
            },
            Lc: function(b) {
                a.Lc(b)
            },
            Gc: function(b) {
                a.Gc(b)
            },
            nd: function(b, c) {
                a.nd(b, c)
            },
            Eb: function(b, c) {
                a.Eb(b, c)
            },
            fd: function() {
                a.fd()
            },
            Jc: function(b) {
                a.Jc(b)
            },
            Wb: function(b) {
                a.Wb(b)
            },
            Qc: function() {
                a.Qc()
            },
            Rc: function() {
                a.Rc()
            },
            Qb: function(b) {
                a.Qb(b)
            },
            Yc: function(b, c) {
                a.Yc(b, c)
            },
            hf: function(b) {
                a.hf(b)
            },
            jf: function() {
                a.jf()
            },
            Ic: function() {
                a.Ic()
            },
            Hc: function() {
                a.Hc()
            },
            Sc: function(b) {
                a.Sc(b)
            },
            Dc: function() {
                a.Dc()
            },
            Fc: function() {
                a.Fc()
            },
            Ec: function() {
                a.Ec()
            },
            Mc: function() {
                a.Mc()
            },
            jd: function(b, c) {
                return a.jd(b, c)
            }
        }
    };
    Y.register(T.Sa, 6, function() {
        function c(a, b, c, e) {
            var f = a.getId(),
                g = a.I();
            z.Fe || d();
            b = [q, n, m, "?", w ? w + "&" : "", b ? b + "&" : ""].join("");
            var h = Oa;
            a = [];
            h("q", g, a, !0);
            z.Ge || h("callback", "google.sbox.p" + p, a);
            if (r) {
                for (var g = [], B = 4 + Math.floor(32 * Math.random()), H = 0, M; H < B; ++H) M = 0.3 > Math.random() ? 48 + Math.floor(10 * Math.random()) : (0.5 < Math.random() ? 65 : 97) + Math.floor(26 * Math.random()), g.push(String.fromCharCode(M));
                g = g.join("");
                h("gs_gbg", g, a)
            }
            h = O("script");
            h.src = b + a.join("&");
            h.charset = "utf-8";
            u[f] = h;
            y = z.Fe ? e : c;
            l.appendChild(h);
            return !0
        }

        function a() {
            return 0
        }

        function b() {
            return 0
        }

        function g(a) {
            var b = u[a];
            b && (l.removeChild(b), delete u[a])
        }

        function d() {
            for (var a in u) l.removeChild(u[a]);
            u = {};
            y = null
        }

        function f(a) {
            y && y(a, !1)
        }

        function h(a) {
            a || (a = k);
            var b = window.google;
            z.Ge ? b.ac.h = a : b.sbox["p" + p] = a
        }
        var l = ab(),
            e, p, q, n, m, w, r, z, u = {},
            y, B = {
                C: function(a) {
                    e = a.get(T.ka, B);
                    p = a.Ea().getId()
                },
                activate: function(a) {
                    z = a;
                    0 == a.Zc && (a = e.fi(), q = a.protocol, n = a.host, m = a.$c, w = a.gi, r = "https:" == document.location.protocol, h(f), (new Image).src = q + n + "/generate_204")
                },
                getType: function() {
                    return T.Sa
                },
                B: function() {
                    return 6
                },
                A: function() {
                    return {
                        sendRequest: c,
                        Gh: g,
                        qb: k,
                        df: a,
                        Qe: b
                    }
                },
                M: function() {
                    h(null);
                    d()
                }
            };
        return B
    });
    Y.register(T.Ja, 1, function() {
        function c(a) {
            if (!l) return !0;
            for (var b = !1, c = !1, e = 0, f; e < a.length; ++e)
                if (f = a.charAt(e), !g.test(f) && (d.test(f) ? c = !0 : b = !0, c && b)) return !0;
            return !1
        }

        function a(a, b, c) {
            if (!l) return !0;
            var d = f.test(c),
                e = h.test(b);
            return "ltr" == a ? d || e || g.test(c) || g.test(b) : !d || !e
        }

        function b(a) {
            var b = e;
            l && (d.test(a) ? b = "ltr" : g.test(a) || (b = "rtl"));
            return b
        }
        var g = RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$"),
            d = RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*(?:\\d[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])"),
            f = RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*(?:\\d|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])"),
            h = RegExp("(?:\\d|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$"),
            l = d.test("x"),
            e;
        return {
            K: function(a) {
                e = a.Fa()
            },
            getType: function() {
                return T.Ja
            },
            B: function() {
                return 1
            },
            A: function() {
                return {
                    Hg: c,
                    ug: a,
                    nc: b
                }
            }
        }
    });
    Y.register(T.Q, 2, function() {
        function c(a, b, c, d, e) {
            var f = q(a);
            f || (f = {}, r.push({
                element: a,
                ni: f
            }));
            var g = f[b];
            g || (g = f[b] = [], f = a.li ? window : Qb(a), f = p(b, f, g), Ia(b) ? a.addEventListener ? a.addEventListener(b, f, !1) : a["on" + b] = f : a[b] = f);
            g.push({
                pi: !!e,
                rd: !1,
                priority: d || 0,
                process: c
            });
            g.sort(m);
            c.mi = b
        }

        function a(a, b) {
            var c = q(a);
            if (c && (c = c[b.mi]))
                for (var d = 0, e; e = c[d++];)
                    if (e.process == b) {
                        e.rd = !0;
                        break
                    }
        }

        function b(a, b, d, e) {
            c(z, a, b, d, e)
        }

        function g(b) {
            a(z, b)
        }

        function d(a, b) {
            var c = b || {},
                d = z[a];
            d && d(c, c.Na)
        }

        function f(a,
            b, c) {
            a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent("on" + b, c)
        }

        function h(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent("on" + b, c)
        }

        function l(a) {
            w ? (u || (u = [], f(window, "message", e)), u.push(a), a = window.location.href, window.postMessage("sbox.df", /HTTPS?:\/\//i.test(a) ? a : "*")) : window.setTimeout(a, 0)
        }

        function e(a) {
            u && a && a.source == window && "sbox.df" == a.data && u.length && (u.shift()(), u && u.length && window.postMessage("sbox.df", window.location.href))
        }

        function p(a, b, c) {
            return function(d,
                e) {
                if (c.length) {
                    var f;
                    if (!(f = d)) {
                        f = {};
                        var g = b.event;
                        g && (g.keyCode && (f.keyCode = g.keyCode), f.oi = !0)
                    }
                    f.Na = e || a;
                    for (var g = f, l, h, m = 0, p; p = c[m++];) p.rd ? h = !0 : l || (p.pi ? n(p, g) : l = p.process(g));
                    if (h)
                        for (m = 0; p = c[m];) p.rd ? c.splice(m, 1) : ++m;
                    if (f.Ob) return delete f.Ob, f.oi && (f = b.event || f), Db(f), f.returnValue = !1
                }
            }
        }

        function q(a) {
            for (var b = 0, c; b < r.length; ++b)
                if (c = r[b], c.element == a) return c.ni;
            return null
        }

        function n(a, b) {
            l(function() {
                a.process(b)
            })
        }

        function m(a, b) {
            return b.priority - a.priority
        }
        var w = window.postMessage &&
            !(kb || Ub || jb),
            r = [],
            z = {
                li: 1
            },
            u;
        return {
            getType: function() {
                return T.Q
            },
            B: function() {
                return 2
            },
            A: function() {
                return {
                    T: c,
                    dd: a,
                    ya: b,
                    ob: g,
                    O: d,
                    listen: f,
                    N: h,
                    defer: l
                }
            },
            M: function() {
                u = null
            }
        }
    });
    Y.register(T.$, 375, function() {
        function c(a) {
            d[a] = !0;
            f = a
        }

        function a() {
            var a = [],
                b;
            for (b in d) a.push(parseInt(b, 10));
            return a
        }

        function b() {
            return f
        }

        function g() {
            d = {};
            f = null
        }
        var d, f;
        return {
            activate: function() {
                g()
            },
            getType: function() {
                return T.$
            },
            B: function() {
                return 375
            },
            A: function() {
                return {
                    add: c,
                    Uh: a,
                    eh: b,
                    reset: g
                }
            }
        }
    });
    Y.register(T.da, 9, function() {
        function c(a) {
            var b = q.Y(),
                c;
            c = [];
            c[27] = 11;
            c[0] = g(z.Oa);
            c[28] = g(z.ub);
            c[1] = void 0 == a ? "" : a + "";
            c[26] = n.Uh().join("j");
            a = "";
            m.Wc() ? a = "o" : w.Da() && (a = w.he() + "");
            c[2] = a;
            a = "";
            var h = w.S();
            if (h) {
                for (var s, t = 0, C = 0, H; H = h[C++];) {
                    var M = H;
                    H = M.getType() + "";
                    M = M.Nb();
                    M.length && (H += "i" + M.join("i"));
                    H != s && (1 < t && (a += "l" + t), a += (s ? "j" : "") + H, t = 0, s = H);
                    ++t
                }
                1 < t && (a += "l" + t)
            }
            c[3] = a;
            c[4] = d(q.Kf());
            c[5] = d(q.Lf());
            c[6] = u;
            c[7] = Ha() - y;
            c[18] = d(q.Mf());
            c[8] = p.Sg();
            if (s = p.Mg()) c[25] = s.Vg ? ["1", z.sg ? "a" : "",
                z.Ud ? "c" : ""
            ].join("") : "", c[10] = s.Ug, c[21] = s.Lg;
            c[11] = p.Uc();
            c[12] = p.Pg();
            if (s = p.Og()) c[9] = s.Xg, c[22] = s.Wg, c[17] = s.Yg;
            c[13] = p.Rg();
            c[14] = p.Qg();
            c[15] = p.Tg();
            c[16] = p.Ng();
            c[19] = g(z.wc);
            s = (s = m.ha()) ? s.D().getString("e") ? "1" : "" : "";
            c[20] = s;
            for (s = 0; a = r[s++];) h = a.za(), l[h] && (c[h] = void 0 == c[h] ? g(a.getValue()) : "");
            c = c.join(".").replace(f, "");
            e && B ? (s = b + c, a = e.Ve(B), s = e.We(s, a), s = s.slice(0, 8), s = e.md(s)) : s = "";
            c = [c, s].join(".");
            return {
                oq: b,
                gs_l: c
            }
        }

        function a() {
            y = Ha();
            ++u;
            q.qa();
            n.reset();
            p.qa();
            for (var a = 0, b; b =
                r[a++];) b.reset()
        }

        function b(a) {
            B = a
        }

        function g(a) {
            return a ? a.replace(h, "-") : ""
        }

        function d(a) {
            return Math.max(a - y, 0)
        }
        var f = /\.+$/,
            h = /\./g,
            l = Aa(ic),
            e, p, q, n, m, w, r, z, u = -1,
            y, B, s = {
                C: function(a) {
                    e = a.get(T.Pb, s);
                    p = a.get(T.V, s);
                    q = a.get(T.J, s);
                    n = a.get(T.$, s);
                    m = a.get(T.X, s);
                    w = a.get(T.P, s);
                    r = a.R(T.re, s);
                    Lb(a.R(T.RENDERER, s))
                },
                G: function(a) {
                    B = a.tg
                },
                activate: function(b) {
                    z = b;
                    a()
                },
                getType: function() {
                    return T.da
                },
                B: function() {
                    return 9
                },
                A: function() {
                    return {
                        D: c,
                        reset: a,
                        Zg: b
                    }
                }
            };
        return s
    });
    Y.register(T.ja, 11, function() {
        function c(a, b) {
            if (w) {
                for (var c = !1, d = 0, g; g = w[d++];) 2 == g.Ka(a, b) && (c = !0);
                if (c) return
            }
            if (Qa(a) || v.ua || e && e.ua()) bb(b) ? s && !B && (B = zb(s, "btnI", "1")) : B && (s.removeChild(B), B = null), h(b), y.search(a, b), f(), p.O(14, {
                query: a
            })
        }

        function a(a) {
            h();
            y.Sb(a);
            f()
        }

        function b(a) {
            h();
            y.redirect(a);
            f()
        }

        function g(a) {
            h(1);
            y.Qb(a);
            f()
        }

        function d(a) {
            return y.Rb(a)
        }

        function f() {
            q.dc();
            q.dh();
            m.reset();
            z ? z.clear() : r.clear();
            n.Y() != n.fa() && n.eg();
            u && u.clear()
        }

        function h(a) {
            l && v.ke && l.Oc(a)
        }
        var l,
            e, p, q, n, m, w, r, z, u, y, B, s, v, x = {
                K: function(a) {
                    s = a.we()
                },
                C: function(a) {
                    l = a.get(T.Gb, x);
                    e = a.get(T.na, x);
                    p = a.get(T.Q, x);
                    q = a.get(T.V, x);
                    n = a.get(T.J, x);
                    m = a.get(T.da, x);
                    r = a.get(T.P, x);
                    z = a.get(T.Be, x);
                    u = a.get(T.Ha, x);
                    y = a.ga();
                    w = a.R(T.Ae, x)
                },
                activate: function(a) {
                    v = a
                },
                getType: function() {
                    return T.ja
                },
                B: function() {
                    return 11
                },
                A: function() {
                    return {
                        search: c,
                        Sb: a,
                        redirect: b,
                        Qb: g,
                        Rb: d
                    }
                }
            };
        return x
    });
    Y.register(T.Qa, 14, function() {
        function c(a) {
            return (a[d.Yb] || {}).j
        }

        function a(a) {
            return a[d.ff]
        }

        function b(a, b) {
            var c = a[d.ff],
                q = a[d.ti],
                z = {},
                u = a[d.Yb];
            if (u)
                for (var y in u) {
                    var B = u[y];
                    y in p && (B = p[y].parse(B));
                    z[y] = B
                }
            var u = qc,
                s = !1,
                v = !1;
            y = !1;
            for (var B = 0, x; x = q[B++];)
                if (33 == (x[f.gf] || 0) ? v = !0 : s = !0, v && s) {
                    y = !0;
                    break
                } s = 0;
            v = [];
            for (B = 0; x = q[B++];) {
                var D = x[f.gf] || 0;
                if (h[D] && (!y || 33 != D)) {
                    var I;
                    I = x[f.ri];
                    e && (I = l.bold(c.toLowerCase(), Ua(Sa(I))));
                    v.push(sc(I, Ua(Sa(I)), s++, D, x[f.qi] || [], g(x)))
                }
            }
            return u(b, c, v, tc(z),
                !1, !0, !1, !1)
        }

        function g(a) {
            return (a = a[f.Yb]) ? tc(a) : rc
        }
        var d = hc,
            f = dc,
            h, l, e, p = {},
            q = {
                C: function(a) {
                    l = a.get(T.Ba, q);
                    if (a = a.R(T.ed, q))
                        for (var b = 0, c; c = a[b++];) p[c.sj()] = c
                },
                activate: function(a) {
                    h = a.ib;
                    e = a.Cc
                },
                getType: function() {
                    return T.Qa
                },
                B: function() {
                    return 14
                },
                A: function() {
                    return {
                        Bh: c,
                        N: a,
                        kd: b
                    }
                }
            };
        return q
    });
    Y.register(T.wb, 15, function() {
        function c(c) {
            var e = a(c);
            if (e) {
                d && !c.Xe() && (c = d.Ye(c));
                f.bi(c);
                var g = c,
                    m = g.ea().I(),
                    w = g.S();
                h.isEnabled() && (w.length ? (g = !1 == g.getType(), h.jc(m, w, g)) : h.clear());
                b.O(3, {
                    input: m,
                    ng: w
                })
            }
            l.nd(c, e);
            return e
        }

        function a(a) {
            var b = g.fa(),
                c = f.ha(),
                b = b.toLowerCase(),
                d = a.I().toLowerCase();
            b == d ? c = !0 : (b = Ma(b), a = (d = a.ea()) ? d.ma() : Ma(a.I().toLowerCase()), c = c ? c.ea().ma() : "", c = 0 == b.indexOf(a) ? 0 == b.indexOf(c) ? a.length >= c.length : !0 : !1);
            return c
        }
        var b, g, d, f, h, l, e = {
            C: function(a) {
                b = a.get(T.Q,
                    e);
                g = a.get(T.J, e);
                d = a.get(T.wa, e);
                f = a.get(T.X, e);
                h = a.get(T.P, e);
                l = a.ga()
            },
            getType: function() {
                return T.wb
            },
            B: function() {
                return 15
            },
            A: function() {
                return {
                    process: c,
                    tb: a
                }
            }
        };
        return e
    });
    Y.register(T.V, 13, function() {
        function c(a, b) {
            if (W && !(ca || M && M.Gi())) {
                a.ld("ds", ia.Sd);
                a.ld("pq", oa);
                a.Ch();
                var c = !0,
                    d = a.Oe();
                d > P && (P = d);
                ++A;
                var d = Ha(),
                    e;
                for (e in fa) {
                    var f = fa[e].getTimestamp();
                    2500 < d - f && D(e)
                }
                Z && (e = H.get(a)) && ((c = $ || a.Eh()) && ia.hg && a.Dh(), N.process(e), e.Ib() && ++la, F = null);
                c && (F = a, K && !b || x())
            }
        }

        function a() {
            return 10 <= ra || 3 <= R.Qe() ? !0 : !1
        }

        function b() {
            da = P
        }

        function g() {
            return P <= da
        }

        function d() {
            F = null
        }

        function f() {
            return A
        }

        function h() {
            return {
                Vg: Z,
                Ug: Z ? H.oh() : 0,
                Lg: ja
            }
        }

        function l() {
            return Z ?
                H.Uc() : 0
        }

        function e() {
            return la
        }

        function p() {
            return {
                Xg: ga,
                Wg: pa,
                Yg: ua
            }
        }

        function q() {
            return ma
        }

        function n() {
            return ha
        }

        function m(a) {
            a = U.kd(a, null);
            return N.tb(a)
        }

        function w() {
            return ka
        }

        function r() {
            for (var a = [], b = 0, c, d = 0; d <= t; ++d) c = X[d], 0 == c ? b++ : (b = 1 == b ? "0j" : 1 < b ? d + "-" : "", a.push(b + c), b = 0);
            return a.join("j")
        }

        function z() {
            Z && H.clearAll()
        }

        function u(a) {
            Z && H.nh(a)
        }

        function y(a, b) {
            return U.kd(a, b)
        }

        function B() {
            Z && H.qa();
            ka = ha = ma = ua = pa = ga = la = ja = ra = A = 0;
            X = [];
            for (var a = 0; a <= t; ++a) X[a] = 0
        }

        function s(a) {
            oa = a
        }

        function v(a) {
            return function(b,
                c) {
                I(b, c, a)
            }
        }

        function x() {
            Ya(K);
            K = null;
            if (!(2 < R.Qe()) && F) {
                var a = [],
                    b = F.D();
                if (b)
                    for (var c in b) Oa(c, b[c], a);
                G.fd();
                a = a.join("&");
                a = R.sendRequest(F, a, v(F), I);
                F.Pe() || (++ga, a ? (a = F, fa[a.getId()] = a, ++ra) : ++pa);
                F = null;
                a = 100;
                b = (ra - 2) / 2;
                for (c = 1; c++ <= b;) a *= 2;
                a < E && (a = E);
                K = window.setTimeout(x, a)
            }
        }

        function D(a) {
            R.Gh(a);
            delete fa[a];
            ra && --ra
        }

        function I(a, b, c) {
            if (W) {
                if (!c && (c = U.Bh(a), c = fa[c], !c)) return;
                if (!c.Pe()) {
                    b && ++ja;
                    a = U.kd(a, c);
                    if (Q) {
                        var d = ba.fa();
                        a = Q.Hi(a, d)
                    }
                    b && a.He();
                    Z && H.put(a);
                    c.Oe() <= da || (++ua, N.process(a) ||
                        ++ma, b = c, E = a.D().Ee("d"), b && (D(b.getId()), b = b.getTimestamp(), b = Ha() - b, ka += b, ha = Math.max(b, ha), ++X[b > C ? t : J[Math.floor(b / 100)]]));
                    a && (a = a.D().getString("q")) && V.Zg(a)
                }
            }
        }
        var J = [0, 1, 2, 3, 4, 5, 5, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8],
            t = J[J.length - 1] + 1,
            C = 100 * J.length - 1,
            H, M, R, ba, V, U, N, Q, S, G, W = !1,
            F, P = -1,
            fa, A, ra, ja, la, ga, pa, ua, ma, ha, ka, X, E, K, $, ca, da, Z, ia, oa, aa = {
                C: function(a) {
                    H = a.get(T.yb, aa);
                    M = a.get(T.na, aa);
                    a.get(T.Q, aa);
                    ba = a.get(T.J, aa);
                    V = a.get(T.da, aa);
                    U = a.get(T.Qa, aa);
                    N = a.get(T.wb, aa);
                    Q = a.get(T.Rh, aa);
                    a.get(T.X, aa);
                    S = a.get(T.ka, aa);
                    a.get(T.P, aa);
                    G = a.ga()
                },
                activate: function(a) {
                    R = S.Ah();
                    ia = a;
                    W = !0;
                    fa = {};
                    E = 0;
                    $ = a.gg;
                    ca = a.Td;
                    da = -1;
                    Z = ia.fg && !!H;
                    oa = a.jg
                },
                getType: function() {
                    return T.V
                },
                B: function() {
                    return 13
                },
                A: function() {
                    return {
                        xd: c,
                        Wc: a,
                        dc: b,
                        $d: g,
                        dh: d,
                        Sg: f,
                        Mg: h,
                        Uc: l,
                        Pg: e,
                        Og: p,
                        Rg: q,
                        Qg: n,
                        tb: m,
                        Tg: w,
                        Ng: r,
                        qb: z,
                        Fh: u,
                        ce: y,
                        qa: B,
                        de: s
                    }
                },
                M: function() {
                    W = !1;
                    Ya(K);
                    fa = F = K = null;
                    b()
                }
            };
        return aa
    });
    Y.register(T.X, 5, function() {
        function c() {
            return d.Wc()
        }

        function a(a) {
            h = a;
            ++l;
            a.od() && ++e;
            f.Wb && f.Wb(e / l)
        }

        function b() {
            return h
        }

        function g() {
            h = null
        }
        var d, f, h, l, e, p = {
            C: function(a) {
                d = a.get(T.V, p);
                f = a.ga()
            },
            activate: function() {
                e = l = 0;
                h = null
            },
            getType: function() {
                return T.X
            },
            B: function() {
                return 5
            },
            A: function() {
                return {
                    Wc: c,
                    bi: a,
                    ha: b,
                    N: g
                }
            }
        };
        return p
    });
    Y.register(T.ka, 16, function() {
        function c() {
            return d
        }

        function a() {
            return f
        }

        function b() {
            d && d.qb()
        }
        var g = {},
            d, f, h = {
                C: function(a) {
                    a = a.R(T.Sa, h);
                    for (var b = 0, c; c = a[b++];) g[c.df()] = c
                },
                activate: function(a) {
                    var b = "https:" == document.location.protocol || a.Tc,
                        c = Oa,
                        h = [];
                    c("client", a.Oa, h);
                    c("hl", a.Ya, h);
                    c("gl", a.ze, h);
                    c("sugexp", a.wc, h);
                    c("gs_rn", 11, h);
                    c("gs_ri", a.ub, h);
                    a.Fb && c("authuser", a.Fb, h);
                    f = {
                        protocol: "http" + (b ? "s" : "") + "://",
                        host: a.Ce || "clients1." + a.Vc,
                        $c: a.$c || "/complete/search",
                        gi: h.length ? h.join("&") : ""
                    };
                    d && d.df() == a.Zc || (d = g[a.Zc])
                },
                getType: function() {
                    return T.ka
                },
                B: function() {
                    return 16
                },
                A: function(d) {
                    return {
                        Ah: d == T.V ? c : k,
                        fi: a,
                        di: b
                    }
                }
            };
        return h
    });
    Y.register(T.ca, 7, function() {
        function c(a) {
            e.xb(a)
        }

        function a() {
            return p
        }

        function b(a) {
            if (a in q) {
                if (n) {
                    if (a == n.Nc()) return;
                    f();
                    n.je()
                }
                n = q[a];
                e.setPanel(n)
            }
        }

        function g() {
            return p ? e.getHeight() : 0
        }

        function d() {
            p || (e.show(h()), p = !0)
        }

        function f() {
            p && (e.hide(), p = !1)
        }

        function h() {
            var a = fb(l);
            n.ie(a);
            return a
        }
        var l = {
                $h: !1,
                yc: "left",
                Ne: !0,
                ta: null,
                marginWidth: 0
            },
            e, p, q = {},
            n, m = {
                C: function(a) {
                    e = a.get(T.Ra, m);
                    if (a = a.R(T.nb, m))
                        for (var b = 0, c; c = a[b++];) q[c.Nc()] = c
                },
                activate: function() {
                    p = !1
                },
                getType: function() {
                    return T.ca
                },
                B: function() {
                    return 7
                },
                A: function() {
                    return {
                        isVisible: a,
                        setPanel: b,
                        getHeight: g,
                        show: d,
                        hide: f,
                        xb: c
                    }
                },
                M: function() {
                    f()
                }
            };
        return m
    });
    Y.register(T.J, 3, function() {
        function c() {
            var a = {};
            da.O(13, a);
            !a.cancel && va.vd && da.defer(L.Xa);
            ta.Hc()
        }

        function a() {
            da.O(12);
            ta.Ic()
        }

        function b() {
            ga("rtl")
        }

        function g() {
            ga("ltr")
        }

        function d() {
            L.rf()
        }

        function f(a) {
            L.ia() ? L.qf() : L.Wa(a)
        }

        function h() {
            if (0 == va.eb) return !1;
            if (4 == va.eb) return ta.Mc(), !1;
            var a = pa();
            if (a) switch (va.eb) {
                case 1:
                    if (ua(a, !0)) return ia.add(E.rb), !0;
                    break;
                case 3:
                    return L.Ga(a)
            }
            return !1
        }

        function l() {
            va.pf ? fa(5) : (L.isVisible() ? L.Xa() : z(), D())
        }

        function e(a) {
            ea && a.le() == ea.length && (Ba &&
                Ba.clear(), va.of && fa(2), ta.Gc(ea))
        }

        function p(a) {
            $ && 0 == a.getPosition() && $.Bg()
        }

        function q(a, b, c, d) {
            va.nf && !a && L.wd(!0);
            va.mf && !L.isVisible() && "mousedown" == c && L.Wa(b);
            var e;
            $a && $a.mg(a, b, c) ? e = $a : $a = e = pc(a, b, c);
            var f = b = !1;
            if (a != ea || "onremovechip" == c) Wa(c, "key") ? ia.add(E.xg) : "paste" == c && ia.add(E.yg), b = !0, ka(a), da.O(1, {
                Na: c,
                ta: Da
            }), ta.Ab(a), f = Ha(), lb || (lb = f), Mb = f, Qa(a) && (d = !0), f = !0;
            a = X.DONT_CARE;
            var g = e.Fd(),
                h = na.ha();
            if (aa)
                for (var l = 0, m; m = aa[l++];) m = m.Ka(g, h), m > a && (a = m);
            switch (a) {
                case X.ne:
                    d = !0;
                    break;
                case X.Ag:
                    d = !1
            }
            d ? (b && L.sf(), mb && e.setParameter("gs_is", 1), ta.Jc(mb), Z.xd(e), $a = null) : f && (L.clear(), Z.dc());
            da.O(2, {
                Na: c
            })
        }

        function n(a) {
            (mb = a) && ia.add(E.wg)
        }

        function m(a) {
            Nb != a && ((Nb = a) ? ta.Fc() : ta.Ec())
        }

        function w(a) {
            ma(a)
        }

        function r() {
            K.focus()
        }

        function z() {
            K.blur()
        }

        function u() {
            return K.fc()
        }

        function y(a, b, c) {
            Wa(a, ea, !0) && (a = ea + a.substr(ea.length));
            q(a, c || Pa(a.length), "", b);
            ma(a, !0)
        }

        function B(a) {
            y(a, !0);
            Ob = Ha();
            ia.add(E.zg)
        }

        function s() {
            q(ea, M(), "onremovechip")
        }

        function v(a) {
            ka(a);
            K.refresh();
            da.O(4, {
                ta: Da,
                input: a
            })
        }

        function x() {
            K.select()
        }

        function D() {
            ea != Ea && ka(Ea);
            da.O(5, {
                input: Ea,
                ng: L.S(),
                ta: Da
            });
            K.refresh();
            ta.Lc(Ea)
        }

        function I() {
            Ea = ea
        }

        function J() {
            return K.Md()
        }

        function t() {
            return Ea
        }

        function C() {
            return ea
        }

        function H() {
            return Da
        }

        function M() {
            return K.Ia()
        }

        function R() {
            return K.mc()
        }

        function ba() {
            return K.getHeight()
        }

        function V() {
            return K.getWidth()
        }

        function U() {
            return K.Nd()
        }

        function N() {
            return lb
        }

        function Q() {
            return Mb
        }

        function S() {
            return Ob
        }

        function G() {
            return 0 != wc
        }

        function W() {
            if (Za) {
                if (va.cc) return !0;
                for (var a = 0, b; b = Ca[a++];)
                    if (b.isEnabled()) return !0
            }
            return !1
        }

        function F(a) {
            if (a == ea) return !0;
            var b = ea.length;
            return a.substr(0, b) == ea ? ca.ug(Da, ea, a.substr(b)) : !1
        }

        function P() {
            K.ic()
        }

        function fa(a) {
            oa.search(ea, a)
        }

        function A(a) {
            ea && (ka(""), K.clear(), da.O(1), L.clear(), ta.Ab(ea));
            a && ta.Dc()
        }

        function ra() {
            Ob = Mb = lb = 0
        }

        function ja(a) {
            K.Qd(a)
        }

        function la() {
            var a = pa();
            a && ua(a)
        }

        function ga(a) {
            var b = M().getPosition();
            Da == a ? L.ia() && b == ea.length && (L.Da() ? va.Va && (a = L.Ca(), oa.search(a.H(), 6)) : va.zd && h()) : $ && 0 == b &&
                $.Bg()
        }

        function pa() {
            if (L.ia()) {
                var a = L.Da() ? L.Ca() : L.$b();
                if (a.oc()) return a
            }
            return null
        }

        function ua(a, b) {
            var c = a.H();
            return Xa(Ea, c) ? !1 : (I(), b ? y(c, !0) : v(c), !0)
        }

        function ma(a, b) {
            ea = a || "";
            ha();
            K.refresh();
            b || (da.O(4, {
                ta: Da,
                input: ea
            }), ta.Kc(ea))
        }

        function ha() {
            var a = ca.nc(ea);
            a != Da && (K.kc(a), Da = a)
        }

        function ka(a) {
            ea = Ea = a || "";
            ha()
        }
        var X = gc,
            E = fc,
            K, $, ca, da, Z, ia, oa, aa, na, L, Ba, Za, Ca, ta, Ea, ea, Da, wc, lb, Mb, Ob, mb, Nb, $a, va, sa = {
                C: function(a) {
                    K = a.get(T.oa, sa);
                    $ = a.get(T.na, sa);
                    ca = a.get(T.Ja, sa);
                    da = a.get(T.Q, sa);
                    Z = a.get(T.V, sa);
                    ia = a.get(T.$, sa);
                    oa = a.get(T.ja, sa);
                    aa = a.R(T.Z, sa);
                    na = a.get(T.X, sa);
                    L = a.get(T.P, sa);
                    Ba = a.get(T.Ha, sa);
                    Za = a.get(T.pa, sa);
                    Ca = a.R(T.ra, sa);
                    ta = a.ga();
                    wc = a.Ea().ec()
                },
                G: function(a) {
                    va = a;
                    aa.sort(db);
                    ea = Ea = K.xf() || ""
                },
                activate: function(a) {
                    va = a;
                    Nb = mb = !1;
                    ha()
                },
                getType: function() {
                    return T.J
                },
                B: function() {
                    return 3
                },
                A: function() {
                    return {
                        Od: c,
                        Cf: a,
                        Ef: b,
                        Ff: g,
                        Gf: d,
                        Af: f,
                        Ga: h,
                        Bf: l,
                        zf: e,
                        yf: p,
                        Df: q,
                        If: n,
                        Pd: m,
                        fb: w,
                        Jd: r,
                        tc: z,
                        ig: u,
                        Ed: y,
                        N: B,
                        ob: s,
                        gc: v,
                        Dd: x,
                        Gd: D,
                        eg: I,
                        Md: J,
                        Y: t,
                        fa: C,
                        nc: H,
                        Ia: M,
                        mc: R,
                        getHeight: ba,
                        getWidth: V,
                        Nd: U,
                        Kf: N,
                        Lf: Q,
                        Mf: S,
                        Hf: G,
                        uc: W,
                        vg: F,
                        ic: P,
                        search: fa,
                        clear: A,
                        qa: ra,
                        Qd: ja,
                        Cd: la
                    }
                }
            };
        return sa
    });
    Y.register(T.P, 17, function() {
        function c(a) {
            a.ta = aa;
            a.marginWidth = oa;
            var b = na.vf;
            b || (b = "rtl" == aa ? "right" : "left");
            a.yc = b
        }

        function a(a, c, d) {
            a = ma && ma.Di(c);
            D();
            if ((X = c) && c.length) {
                var e = c[0].H();
                fa.Hg(e) && (e = ja.Y());
                aa = fa.nc(e);
                e = !1;
                d ? ($ = F.Ig, e = P.pg(c, aa), c = c[0].D().getString("a"), c = Sa(c), oa = la.getWidth(c)) : ($ = F.De, e = P.render(N(), aa), oa = 0);
                a && (K = ma.Ci(), b(ma.Bi()));
                e ? v() : D()
            }
        }

        function b(a) {
            W();
            if (E != a) {
                var b = E;
                E = a;
                G(b)
            }
        }

        function g() {
            if (y())
                if (ca) {
                    var a = E;
                    E == X.length - 1 ? K = E = null : null == E ? E = 0 : ++E;
                    K = E;
                    S(a,
                        g)
                } else v()
        }

        function d() {
            if (y())
                if (ca) {
                    var a = E;
                    X && 0 != E ? null == E ? E = X.length - 1 : --E : K = E = null;
                    K = E;
                    S(a, d)
                } else v()
        }

        function f(a) {
            var b = a ? 4 : 3;
            B() ? (a = z(), P.mb(a) || ja.search(b), b = ja.Y(), ka.Eb(b, a)) : ja.search(b)
        }

        function h(a) {
            return P.Ga(a)
        }

        function l(a) {
            K = E = a;
            a = X[a];
            var b = ja.Y();
            ka.Eb(b, a)
        }

        function e() {
            return ca
        }

        function p() {
            return da
        }

        function q(a) {
            da && !a && D();
            da = a
        }

        function n() {
            return $
        }

        function m() {
            return X
        }

        function w() {
            return y() ? X[0] : null
        }

        function r() {
            return E
        }

        function z() {
            return B() ? X[K] : null
        }

        function u() {
            return K
        }

        function y() {
            return !(!X || !X.length)
        }

        function B() {
            return null != K
        }

        function s() {
            ca && !Z && (Z = window.setTimeout(D, na.uf))
        }

        function v() {
            ca || (A.setPanel(17), A.show(), ca = !0, ka.Qc())
        }

        function x() {
            ca && (Z && (Ya(Z), Z = null), A.hide(), ca = !1, ka.Rc())
        }

        function D() {
            x();
            X = null;
            $ = F.EMPTY;
            null != E && P.Bb(E);
            K = E = null;
            P.clear()
        }

        function I() {
            ra.dc();
            x()
        }

        function J() {
            null != E && P.Bb(E);
            K = E = null
        }

        function t() {
            W();
            ia = window.setTimeout(J, 0)
        }

        function C() {
            W()
        }

        function H(a) {
            if (y()) v();
            else {
                var b = ja.Y();
                if (b) {
                    a = a || ja.Ia();
                    b = pc(b, a);
                    if (pa) {
                        a =
                            b.Fd();
                        for (var c = ua.ha(), d = 0, e; e = pa[d++];) e.Ka(a, c)
                    }
                    ra.xd(b)
                }
            }
        }

        function M() {
            return P.F()
        }

        function R() {
            return P.pb()
        }

        function ba() {
            ca = !1
        }

        function V() {
            P.Ma()
        }

        function U() {
            return 17
        }

        function N() {
            if (y() && $ == F.De) {
                for (var a = [], b = [], c = 0, d;
                    (d = ga[c++]) && !d.getMessage(ja.Y(), X, b););
                (c = b ? b.length : 0) && (c -= Q(b, a, 0));
                for (d = 0; d < X.length; ++d) a.push(X[d]);
                c && (c -= Q(b, a, 1));
                na.tf && a.push(1);
                c && Q(b, a, 2);
                na.Bd && a.push(2);
                ha && ha.Ai(a);
                return a
            }
            return null
        }

        function Q(a, b, c) {
            for (var d = 0, e = 0, f; e < a.length; ++e)(f = a[e]) && f.position ==
                c && (b.push(f), ++d);
            return d
        }

        function S(a, b) {
            if (null == E || P.W(E))
                if (G(a), null == E) ja.Gd();
                else {
                    var c = P.zb(X[E]);
                    ja.fb(c);
                    ka.Sc(c)
                }
            else P.Bb(a), b()
        }

        function G(a) {
            W();
            null != a && P.Bb(a);
            null != E && P.highlight(E)
        }

        function W() {
            ia && (Ya(ia), ia = null)
        }
        var F = ec,
            P, fa, A, ra, ja, la, ga, pa, ua, ma, ha, ka, X, E, K, $, ca, da, Z, ia, oa, aa, na, L = {
                C: function(a) {
                    P = a.get(T.La, L);
                    fa = a.get(T.Ja, L);
                    A = a.get(T.ca, L);
                    ra = a.get(T.V, L);
                    ja = a.get(T.J, L);
                    la = a.get(T.Pa, L);
                    ga = a.R(T.zc, L);
                    pa = a.R(T.Z, L);
                    ua = a.get(T.X, L);
                    ma = a.get(T.Jg, L);
                    ha = a.get(T.Kg, L);
                    ka = a.ga()
                },
                G: function() {
                    pa.sort(db);
                    ga.sort(eb)
                },
                activate: function(a) {
                    na = a;
                    K = E = null;
                    $ = F.EMPTY;
                    ca = !1;
                    da = !0;
                    aa = "";
                    oa = 0
                },
                getType: function() {
                    return T.P
                },
                B: function() {
                    return 17
                },
                A: function() {
                    return {
                        jc: a,
                        rg: b,
                        qf: g,
                        rf: d,
                        mb: f,
                        Ga: h,
                        og: l,
                        isVisible: e,
                        isEnabled: p,
                        wd: q,
                        wf: n,
                        S: m,
                        $b: w,
                        Dg: r,
                        Ca: z,
                        he: u,
                        ia: y,
                        Da: B,
                        sf: s,
                        show: v,
                        hide: x,
                        clear: D,
                        Xa: I,
                        fe: J,
                        qg: t,
                        N: C,
                        Wa: H
                    }
                },
                va: function() {
                    var a = {
                        ie: c,
                        F: M,
                        pb: R,
                        je: ba,
                        Ma: V,
                        Nc: U
                    };
                    return [{
                        K: k,
                        C: k,
                        G: k,
                        activate: k,
                        getType: function() {
                            return T.nb
                        },
                        B: function() {
                            return 17
                        },
                        A: function() {
                            return a
                        },
                        va: k,
                        M: k
                    }]
                },
                M: function() {
                    Z && (Ya(Z), Z = null);
                    X = null;
                    x()
                }
            };
        return L
    });
    Y.register(T.Ra, 8, function() {
        function c(a) {
            a != x && (x = a, a = a.F(), D ? a != D && s.replaceChild(a, D) : s.appendChild(a), D = a)
        }

        function a() {
            v || (v = s ? Math.max(s.offsetHeight, 0) : 0);
            return v
        }

        function b(a) {
            s.className = a.$h ? "gssb_e gsdd_a" : "gssb_e";
            var b = a.ta || H;
            z != b && (z = b, yb(r, b));
            b = a.marginWidth;
            if (B != b) {
                var c = y.style;
                b ? (u.hasChildNodes() || u.appendChild(y), c.width = b + "px", Sb && (c.paddingLeft = "1px")) : (u.hasChildNodes() && u.removeChild(y), c.paddingLeft = "");
                B = b
            }
            R = a.Ne;
            ba = a.yc;
            e(I, !0);
            e(C, !0);
            n.O(16);
            d()
        }

        function g() {
            v = 0;
            e(I, !1);
            e(C, !1);
            n.O(11)
        }

        function d() {
            v = 0;
            h();
            if (C) {
                var b = m.oe[0],
                    c = C.style;
                "relative" != m.Db && (c.top = r.style.top, c.left = r.offsetLeft + u.offsetWidth + "px");
                b = a() + b;
                C.style.height = Math.max(b, 0) + "px";
                l(C, s.offsetWidth)
            }
            x && x.Ma()
        }

        function f(a) {
            if (J) t != a && J.replaceChild(a, t);
            else {
                var b = r.insertRow(-1);
                b.style.height = "0";
                b.insertCell(-1);
                J = b.insertCell(-1);
                p.isVisible() || (e(s, !1), e(r, !0), d());
                I = s;
                J.appendChild(a)
            }
            t = a
        }

        function h() {
            var a, b, c;
            a = (b = x && x.pb()) ? b.offsetWidth : q.getWidth();
            (c = M) ? Ia(c) && (c = null): B ||
                !R ? (s.style.width = "", r.style.width = "") : (s.style.width = "100%", c = a + m.Cb[2], l(r, c));
            if ("relative" != m.Db) {
                var d = q.mc();
                b && (d.Vb = pb(b).Vb);
                b = m.Cb;
                var e = b[1];
                b = b[0];
                b = d.ci + q.getHeight() + b;
                "right" == ba ? (c = Qb(r), a = Ib(c) - (d.Vb - e + a), c = void 0) : (d = d.Vb + e, "center" == ba && c && (d += (a - c) / 2), c = d, a = void 0);
                d = r.style;
                d.top = b + "px";
                d.left = d.right = "";
                void 0 != c ? d.left = c + "px" : d.right = a + "px"
            }
            hb && (d.zoom = "normal", d.zoom = 1)
        }

        function l(a, b) {
            Ja(b) ? 0 < b && (a.style.width = b + "px") : a.style.width = b
        }

        function e(a, b) {
            a && (a.style.display = b ?
                "" : "none")
        }
        var p, q, n, m, w, r, z, u, y, B, s, v, x, D, I, J, t, C, H, M, R = !0,
            ba, V = {
                K: function(a, b) {
                    H = a.Fa();
                    b.addRule(".gssb_c", "border:0;position:absolute;z-index:989");
                    b.addRule(".gssb_e", ["border:1px solid #ccc;border-top-color:#d9d9d9;", b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);"), "cursor:default"].join(""));
                    b.addRule(".gssb_f", "visibility:hidden;white-space:nowrap");
                    b.addRule(".gssb_k", "border:0;display:block;position:absolute;top:0;z-index:988");
                    b.addRule(".gsdd_a", "border:none!important")
                },
                C: function(a) {
                    p =
                        a.get(T.ca, V);
                    q = a.get(T.J, V);
                    n = a.get(T.Q, V);
                    w = a.Ea().getId()
                },
                G: function(a) {
                    m = a;
                    r = sb();
                    r.className = "gstl_" + w + " gssb_c";
                    e(r, !1);
                    I = r;
                    var b = r.insertRow(-1);
                    u = b.insertCell(-1);
                    u.className = "gssb_f";
                    y = tb();
                    s = b.insertCell(-1);
                    s.className = "gssb_e";
                    s.style.width = "100%";
                    m.pe && (C = O("iframe", "gstl_" + w + " gssb_k"), e(C, !1), (m.ye || document.body).appendChild(C));
                    if (M = m.Cg) Ja(M) && (M += m.Cb[2]), l(r, M);
                    h();
                    (a.ye || document.body).appendChild(r);
                    n.ya(8, d)
                },
                activate: function(a) {
                    m = a;
                    r.style.position = a.Db
                },
                getType: function() {
                    return T.Ra
                },
                B: function() {
                    return 8
                },
                A: function() {
                    return {
                        setPanel: c,
                        getHeight: a,
                        xb: f,
                        show: b,
                        hide: g,
                        Ma: d
                    }
                }
            };
        return V
    });
    Y.register(T.oa, 4, function() {
        function c(a, b) {
            pa && (pa = !1, F.dd(A, C), F.dd(A, H));
            b || (b = a);
            A.parentNode.replaceChild(a, A);
            b.appendChild(A);
            ga && la.Tf && (kb || Sb ? F.defer(function() {
                A.focus();
                nb(A, ha.getPosition())
            }) : A.focus());
            M()
        }

        function a() {
            return $
        }

        function b(a) {
            var b = "rtl" == a == ("rtl" == aa);
            A.dir = a;
            if (ca) {
                P.kc(a);
                var c = E.parentNode;
                c.removeChild(ca);
                b ? Eb(ca, E) : c.insertBefore(ca, E)
            }
            $ && ($.dir = a, c = $.parentNode, c.removeChild($), b ? c.insertBefore($, E) : Eb($, E));
            0 != ra && (a = xb(a), wb(A, a, 0))
        }

        function g() {
            return ha
        }

        function d() {
            return pb(K)
        }

        function f() {
            var a = K ? K.offsetHeight : 0;
            L > a && (a = L);
            return a
        }

        function h() {
            return Ba ? Ba : K ? K.offsetWidth : 0
        }

        function l() {
            var a = A.offsetWidth;
            la.yd && (a -= A.offsetHeight);
            return a
        }

        function e() {
            return A.value
        }

        function p(a) {
            (la.Of ? A : E || Za || A).style.background = a || "transparent"
        }

        function q() {
            X = !0
        }

        function n() {
            A.select();
            N()
        }

        function m() {
            Vb && (A.value = "");
            A.value = G.fa();
            Vb && (A.value = A.value);
            B()
        }

        function w() {
            if (!ga) try {
                A.focus(), ga = !0, B()
            } catch (a) {}
        }

        function r() {
            ga && (A.blur(), ga = !1)
        }

        function z() {
            return ga
        }

        function u() {
            A.value = ""
        }

        function y() {
            var a = na.get("gs_id");
            if (a) $ = na.get("gs_ttc"), E = na.get("gs_tti"), G.uc() && P && (da = P.F(), ca = da.parentNode);
            else {
                a = sb();
                a.id = na.getId("gs_id");
                a.className = "gstl_" + ja + " " + (la.hc || A.className);
                var b = a.insertRow(-1),
                    d = a.style,
                    e = A.style;
                d.width = Ba ? Ba + "px" : e.width;
                d.height = L ? L + "px" : e.height;
                d.padding = "0";
                Jb(A);
                A.className = la.qc;
                oa && ($ = b.insertCell(-1), $.id = na.getId("gs_ttc"), $.style.whiteSpace = "nowrap");
                E = b.insertCell(-1);
                E.id = na.getId("gs_tti");
                E.className = "gsib_a";
                G.uc() &&
                    P && (da = P.F(), ca = b.insertCell(-1), ca.className = "gsib_b", ca.appendChild(da));
                c(a, E)
            }
            Wb && Tb && (A.style.height = "1.25em", A.style.marginTop = "-0.0625em");
            s(a);
            K = a
        }

        function B() {
            if (ga) {
                var a = A.value.length;
                ha = Pa(a);
                nb(A, a)
            }
        }

        function s(a) {
            F.T(a, "mouseup", function() {
                A.focus()
            })
        }

        function v() {
            function a(c) {
                F.T(A, c, t, 10, b)
            }
            F.T(A, "keydown", D);
            (jb || la.Nf) && F.T(A, "keypress", J);
            F.T(A, "select", N, 10);
            var b = !1;
            a("mousedown");
            a("keyup");
            a("keypress");
            b = !0;
            a("mouseup");
            a("keydown");
            a("focus");
            a("blur");
            a("cut");
            a("paste");
            a("input");
            F.T(A, "compositionstart", x);
            F.T(A, "compositionend", x)
        }

        function x(a) {
            a = a.type;
            "compositionstart" == a ? G.Pd(!0) : "compositionend" == a && G.Pd(!1)
        }

        function D(a) {
            var b = a.keyCode;
            ka = b;
            var c = Tb && rb(b) && W.ia(),
                d = b == S.Je,
                e = b == S.gd;
            Z = !1;
            b == S.rb && (Z = G.Ga());
            d && ((b = W.Ca()) && I(b) ? W.mb(a.shiftKey) : F.defer(function() {
                W.mb(a.shiftKey)
            }));
            if (c || d || e || Z) a.Ob = !0
        }

        function I(a) {
            return (a = fa[a.getType()].Ei) && a()
        }

        function J(a) {
            var b = a.keyCode,
                c = b == S.gd,
                d = b == S.rb && Z;
            if (b == S.Je || c || d) a.Ob = !0
        }

        function t(a) {
            if (!ia) {
                var b =
                    a.Na;
                if (!(b.indexOf("key") || a.ctrlKey || a.altKey || a.shiftKey || a.metaKey)) n: if (a = a.keyCode, "keypress" != b) {
                    var c = rb(a),
                        d;
                    if ("keydown" == b) {
                        if (G.If(229 == a), c) break n
                    } else if (d = a != ka, ka = -1, !c || d) break n;
                    switch (a) {
                        case S.gd:
                            G.Bf();
                            break;
                        case S.qh:
                            G.Ef();
                            break;
                        case S.rh:
                            G.Ff();
                            break;
                        case S.sh:
                            G.Gf();
                            break;
                        case S.ph:
                            G.Af(ha);
                            break;
                        case S.DELETE:
                            G.zf(ha);
                            break;
                        case S.th:
                            G.yf(ha)
                    }
                } N();
                G.Df(A.value, ha, b)
            }
        }

        function C() {
            ga = !0;
            G.Cf()
        }

        function H() {
            ga = !1;
            G.Od()
        }

        function M() {
            pa || (pa = !0, F.T(A, "focus", C, 99), F.T(A, "blur",
                H, 99))
        }

        function R() {
            ma || (ma = window.setInterval(V, la.Sf || 50))
        }

        function ba() {
            ma && (Ya(ma), ma = null)
        }

        function V() {
            t({
                Na: "polling"
            })
        }

        function U() {
            Sb && Bb(A)
        }

        function N() {
            if (ga) {
                var a = ob(A);
                a && (ha = a)
            }
        }

        function Q() {
            var a;
            F.listen(window, "pagehide", function() {
                ia = !0;
                a = A.value
            });
            F.listen(window, "pageshow", function(b) {
                ia = !1;
                b.persisted && G.gc(a)
            })
        }
        var S = nc,
            G, W, F, P, fa, A, ra, ja, la, ga, pa = !1,
            ua, ma, ha = Pa(0),
            ka = -1,
            X = !1,
            E, K, $, ca, da, Z, ia, oa, aa, na, L, Ba, Za, Ca = {
                K: function(a, b) {
                    na = a;
                    A = a.Id();
                    aa = a.Fa();
                    a.$a() || (b.addRule(".gsib_a",
                        "width:100%;padding:4px 6px 0"), b.addRule(".gsib_a,.gsib_b", "vertical-align:top"))
                },
                C: function(a) {
                    G = a.get(T.J, Ca);
                    F = a.get(T.Q, Ca);
                    W = a.get(T.P, Ca);
                    P = a.get(T.pa, Ca);
                    fa = Lb(a.R(T.RENDERER, Ca));
                    a = a.Ea();
                    ra = a.ec();
                    ja = a.getId()
                },
                G: function(a) {
                    la = a;
                    L = a.jb;
                    Ba = a.Rf;
                    ga = qb(A);
                    N();
                    kb && F.T(A, "beforedeactivate", function(a) {
                        X && (X = !1, a.Ob = !0)
                    }, 10);
                    Sb && Q();
                    K = A;
                    oa = !!a.cb[T.na];
                    (G.Hf() || G.uc() || oa || a.Pf) && y();
                    a.Kd && (F.T(A, "blur", ba, 10), F.T(A, "focus", R, 10), ua = !0);
                    F.ya(8, U);
                    v();
                    M()
                },
                activate: function(a) {
                    la = a;
                    var b = a.Qf;
                    b && (Za = na.Za(b));
                    A.setAttribute("autocomplete", "off");
                    A.setAttribute("spellcheck", a.spellcheck);
                    A.style.outline = a.Ld ? "" : "none";
                    ua && R()
                },
                getType: function() {
                    return T.oa
                },
                B: function() {
                    return 4
                },
                A: function() {
                    return {
                        N: c,
                        Md: a,
                        kc: b,
                        Ia: g,
                        mc: d,
                        getHeight: f,
                        getWidth: h,
                        Nd: l,
                        xf: e,
                        Qd: p,
                        ic: q,
                        select: n,
                        refresh: m,
                        focus: w,
                        blur: r,
                        fc: z,
                        clear: u
                    }
                },
                M: function() {
                    ua && ba();
                    la.vd && F.dd(A, G.Od)
                }
            };
        return Ca
    });
    Y.register(T.La, 18, function() {
        function c(a, b) {
            if (!N) return !1;
            V = b;
            y();
            for (var c = !1, d = 0, e; e = a[d++];) m(e) && (c = !0);
            return c
        }

        function a(a) {
            var b = x[a.getType()];
            return b && b.Nh ? b.Nh(a) : !1
        }

        function b(a) {
            return x[a.getType()].Mb(null, a, D)
        }

        function g(a) {
            var b = x[a.getType()];
            if (b && b.zb) {
                var c = v.Y();
                return b.zb(a, c)
            }
            return a.H()
        }

        function d(a, b) {
            if (!N) return !1;
            V = b;
            y();
            for (var c = !1, d = 0, e; e = a[d++];)
                if (1 == e)
                    if (S) Q.appendChild(S);
                    else {
                        e = r();
                        var f = e.style;
                        f.textAlign = "center";
                        f.whiteSpace = "nowrap";
                        e.dir = U;
                        f = tb();
                        f.style.position =
                            "relative";
                        G = tb();
                        G.className = "gssb_g";
                        J.Bd && (G.style.paddingBottom = "1px");
                        w(J.Zf, G, 13);
                        J.Vf ? w(J.xc, G, 8) : J.Wf && w(J.$f, G, 14);
                        f.appendChild(G);
                        e.appendChild(f);
                        S = e.parentNode
                    }
            else 2 == e ? W ? Q.appendChild(W) : (e = r(), f = e.style, f.padding = "1px 4px 2px 0", f.fontSize = "11px", f.textAlign = "right", f = O("a"), f.id = "gssb_b", f.href = "http://www.google.com/support/websearch/bin/answer.py?hl=" + J.Ya + "&answer=106230", f.innerHTML = J.Yf, e.appendChild(f), W = e.parentNode) : 3 == e ? (e = M.pop()) ? Q.appendChild(e) : (e = N.insertRow(-1), e.Oh = !0, e = e.insertCell(-1), f = O("div", "gssb_l"), e.appendChild(f)) : m(e) && (c = !0);
            return c
        }

        function f(a) {
            z(a, F);
            var b = B.S();
            b && s.O(9, {
                index: a,
                Fi: b[a],
                template: R[a]
            })
        }

        function h(a) {
            z(a, "");
            s.O(10)
        }

        function l() {
            for (var a, b, c; c = C.pop();) a = c.getType(), (b = t[a]) || (b = t[a] = []), b.push(c), a = c.F(), a.parentNode.removeChild(a);
            for (; a = Q.firstChild;) a = Q.removeChild(a), a.Oh ? M.push(a) : a != S && a != W && H.push(a);
            R = []
        }

        function e(a) {
            return (a = R[a]) ? a.W() : !1
        }

        function p() {
            y()
        }

        function q() {
            return N
        }

        function n() {
            return J.Hd || U == V ? ba : null
        }

        function m(a) {
            var b = a.getType(),
                c = x[b];
            if (!c) return !1;
            var d = (b = t[b]) && b.pop();
            d || (d = c.Lb(D));
            c.render(a, d);
            C.push(d);
            var e = d.F(),
                b = r();
            b.className = "gssb_a " + J.vc;
            b.appendChild(e);
            if (void 0 !== a.za) {
                R.push(d);
                var d = V,
                    f = a.za();
                J.Xf && (e.onmouseover = function() {
                    B.rg(f)
                }, e.onmouseout = function() {
                    B.qg()
                });
                e.onclick = function(b) {
                    v.tc();
                    a.oc() && v.fb(a.H());
                    B.fe();
                    B.og(f);
                    b = b || Qb(e).event;
                    c.la(b, a, D)
                }
            } else d = U;
            yb(b, d);
            return !0
        }

        function w(a, b, c) {
            var d = O("input");
            d.type = "button";
            d.value = Sa(a);
            d.onclick = function() {
                D.search(v.fa(),
                    c)
            };
            var e;
            if (J.Uf) {
                a = "lsb";
                e = O("span");
                var f = O("span");
                e.className = "ds";
                f.className = "lsbb";
                e.appendChild(f);
                f.appendChild(d)
            } else a = "gssb_h", e = d;
            d.className = a;
            b.appendChild(e)
        }

        function r() {
            var a = H.pop();
            if (a) return Q.appendChild(a), a.firstChild;
            a = N.insertRow(-1);
            a = a.insertCell(-1);
            a.className = J.vc;
            a.onmousedown = u;
            return a
        }

        function z(a, b) {
            var c = R[a];
            c && c.W() && (c.F().parentNode.parentNode.className = b)
        }

        function u(a) {
            a = a || Qb(N).event;
            a.stopPropagation ? a.stopPropagation() : jb || kb && v.ic();
            return !1
        }

        function y() {
            if (G) {
                var a =
                    J.ee ? J.ee : v.getWidth() - 3;
                0 < a && (G.style.width = a + "px")
            }
        }
        var B, s, v, x, D, I, J, t = {},
            C = [],
            H = [],
            M = [],
            R = [],
            ba, V, U, N, Q, S, G, W, F, P = {
                K: function(a, b) {
                    I = a;
                    U = a.Fa();
                    b.addRule(".gssb_a", "padding:0 7px");
                    b.addRule(".gssb_a,.gssb_a td", "white-space:nowrap;overflow:hidden;line-height:22px");
                    b.addRule("#gssb_b", "font-size:11px;color:#36c;text-decoration:none");
                    b.addRule("#gssb_b:hover", "font-size:11px;color:#36c;text-decoration:underline");
                    b.addRule(".gssb_g", "text-align:center;padding:8px 0 7px;position:relative");
                    b.addRule(".gssb_h",
                        ["font-size:15px;height:28px;margin:0.2em", Tb ? ";-webkit-appearance:button" : ""].join(""));
                    b.addRule(".gssb_i", "background:#eee");
                    b.addRule(".gss_ifl", "visibility:hidden;padding-left:5px");
                    b.addRule(".gssb_i .gss_ifl", "visibility:visible");
                    b.addRule("a.gssb_j", "font-size:13px;color:#36c;text-decoration:none;line-height:100%");
                    b.addRule("a.gssb_j:hover", "text-decoration:underline");
                    b.addRule(".gssb_l", "height:1px;background-color:#e5e5e5");
                    b.addRule(".gssb_m", "color:#000;background:#fff")
                },
                C: function(a) {
                    B =
                        a.get(T.P, P);
                    s = a.get(T.Q, P);
                    v = a.get(T.J, P);
                    D = a.get(T.ja, P);
                    x = Lb(a.R(T.RENDERER, P))
                },
                G: function(a) {
                    J = a;
                    N = sb();
                    a = O("tbody");
                    N.appendChild(a);
                    Q = N.getElementsByTagName("tbody")[0]
                },
                activate: function(a) {
                    J = a;
                    var b = a.kb;
                    b && (ba = I.Za(b));
                    N.className = a.dg || "gssb_m";
                    F = a.cg || "gssb_i"
                },
                getType: function() {
                    return T.La
                },
                B: function() {
                    return 18
                },
                A: function() {
                    return {
                        pg: c,
                        zb: g,
                        mb: b,
                        Ga: a,
                        render: d,
                        highlight: f,
                        Bb: h,
                        clear: l,
                        W: e,
                        Ma: p,
                        F: q,
                        pb: n
                    }
                }
            };
        return P
    });
    Y.register(T.Gb, 346, function() {
        function c(c) {
            c = b.D(c);
            for (var d in h) d in c || (c[d] = h[d]);
            a(g + La(c))
        }

        function a(a) {
            var b = new Image,
                c = f;
            b.onerror = b.onload = b.onabort = function() {
                try {
                    delete d[c]
                } catch (a) {}
            };
            d[f] = b;
            b.src = a;
            f++
        }
        var b, g, d = [],
            f = 0,
            h, l = {
                C: function(a) {
                    b = a.get(T.da, l)
                },
                activate: function(a) {
                    g = "//" + (a.lh || "www." + a.Vc) + "/gen_204?";
                    h = a.mh || {}
                },
                getType: function() {
                    return T.Gb
                },
                B: function() {
                    return 346
                },
                A: function() {
                    return {
                        Oc: c
                    }
                }
            };
        return l
    });
    Y.register(T.yb, 21, function() {
        function c(a) {
            l(a);
            if (n)
                for (var b = 0; b < n.length; ++b) n[b].update(a)
        }

        function a(a) {
            var b = q[a.$e()] || null,
                c = !1;
            if (b) ++m, c = !0;
            else if (n)
                for (var d = 0; d < n.length; ++d)
                    if (b = n[d].get(a)) {
                        l(b);
                        ++w;
                        break
                    } b && (d = a.I(), d != b.I() ? b = qc(a, d, b.S(), b.D(), b.Ib(), b.Ta(), c, b.Xe()) : c && b.He());
            return b
        }

        function b() {
            return m
        }

        function g() {
            return w
        }

        function d() {
            w = m = 0
        }

        function f(a) {
            var b, c, d, f;
            for (f in q)
                for (b = q[f], b = b.S(), d = 0; c = b[d++];)
                    if (c.getType() == a) {
                        delete q[f];
                        break
                    } e()
        }

        function h() {
            q = {};
            e()
        }

        function l(a) {
            a && a.Ta() && (q[a.ea().$e()] = a)
        }

        function e() {
            if (n)
                for (var a = 0; a < n.length; ++a) n[a].reset()
        }

        function p(a, b) {
            return b.U() - a.U()
        }
        var q = {},
            n, m, w, r = {
                C: function(a) {
                    n = a.R(T.xa, r);
                    n.sort(p)
                },
                activate: function() {
                    d()
                },
                getType: function() {
                    return T.yb
                },
                B: function() {
                    return 21
                },
                A: function() {
                    return {
                        put: c,
                        get: a,
                        oh: b,
                        Uc: g,
                        qa: d,
                        nh: f,
                        clearAll: h
                    }
                }
            };
        return r
    });
    Y.register(T.Kb, 190, function() {
        function c() {
            q && e.qd(l)
        }

        function a() {
            q && e.Xb(l)
        }

        function b() {
            q && p.qd(l)
        }

        function g() {
            q && p.Xb(l)
        }
        var d, f, h, l, e, p, q = !1,
            n = {
                K: function(a, b) {
                    function c(a) {
                        return ["box-shadow:", a, "-moz-box-shadow:", a, "-webkit-box-shadow:", a].join("")
                    }
                    h = a;
                    b.addRule(".gsfe_a", ["border:1px solid #b9b9b9;border-top-color:#a0a0a0;", c("inset 0px 1px 2px rgba(0,0,0,0.1);")].join(""));
                    b.addRule(".gsfe_b", ["border:1px solid #4d90fe;outline:none;", c("inset 0px 1px 2px rgba(0,0,0,0.3);")].join(""))
                },
                C: function(a) {
                    d = a.get(T.Q, n);
                    f = a.get(T.J, n)
                },
                G: function(f) {
                    var n = f.Hb;
                    if (l = n ? h.Za(n) : null) d.ya(12, b), d.ya(13, g), d.T(l, "mouseover", c), d.T(l, "mouseout", a), e = xc(f.bh || "gsfe_a"), p = xc(f.$g || "gsfe_b")
                },
                activate: function() {
                    q = !0;
                    l && f.ig() && p.qd(l)
                },
                getType: function() {
                    return T.Kb
                },
                B: function() {
                    return 190
                },
                M: function() {
                    q = !1;
                    l && (e.Xb(l), p.Xb(l))
                }
            };
        return n
    });

    function xc(c) {
        var a = RegExp("(?:^|\\s+)" + c + "(?:$|\\s+)");
        return {
            qd: function(b) {
                b && !a.test(b.className) && (b.className += " " + c)
            },
            Xb: function(b) {
                b && (b.className = b.className.replace(a, " "))
            }
        }
    };
    Y.register(T.RENDERER, 33, function() {
        function c(a) {
            q = a.Gg;
            n = a.ve;
            m = a.ue;
            w = a.lc ? a.xc : ""
        }

        function a(a) {
            return yc(f, h, l, e, p, a, q, m)
        }

        function b(a, b) {
            b.render(a.Tb(), a.H(), a.za(), n, w)
        }

        function g(a, b, c) {
            c.search(b.H(), 1)
        }

        function d() {
            return 35
        }
        var f, h, l, e, p, q, n, m, w, r = {
            K: function(a, b) {
                b.addRule("a.gspqs_a", "padding:0 3px 0 8px");
                b.addRule(".gspqs_b", "color:#666;line-height:22px")
            },
            C: function(a) {
                l = a.get(T.V, r);
                e = a.get(T.J, r);
                h = a.get(T.Aa, r);
                f = a.get(T.ka, r);
                p = a.get(T.P, r)
            },
            G: c,
            activate: c,
            getType: function() {
                return T.RENDERER
            },
            B: function() {
                return 33
            },
            A: function() {
                return {
                    Lb: a,
                    render: b,
                    la: g,
                    Mb: k,
                    Ub: d
                }
            }
        };
        return r
    });

    function yc(c, a, b, g, d, f, h, l) {
        function e(b) {
            v = !0;
            a.xe(y, p);
            return Db(b)
        }

        function p() {
            v && (b.Fh(35), c.di(), q.onmouseover = q.onmouseout = q.onclick = null, n.style.display = "none", m.style.display = "", d.he() == B && g.Gd(), d.Dg() == B && (d.fe(), g.Jd()), s = !1)
        }
        var q, n, m, w, r, z, u, y, B, s = !0,
            v = !1;
        (function() {
            q = tb();
            q.className = "gsq_a";
            var a = sb();
            q.appendChild(a);
            n = a.insertRow(-1);
            var b = n.insertCell(-1);
            w = O("span");
            w.style.color = "#52188c";
            b.appendChild(w);
            if (0 != h) {
                z = O("a");
                z.href = "#ps";
                z.className = "gspqs_a gssb_j";
                var c = n.insertCell(-1);
                c.appendChild(z);
                (2 == h ? c : b).style.width = "100%";
                m = a.insertRow(-1);
                u = m.insertCell(-1);
                u.className = "gspqs_b";
                u.innerHTML = l;
                u.colSpan = "2"
            }
        })();
        return {
            F: function() {
                return q
            },
            getType: function() {
                return 35
            },
            W: function() {
                return s
            },
            render: function(a, b, c, d, l) {
                v = !1;
                s = !0;
                y = b;
                B = c;
                n.style.display = "";
                w.innerHTML = a;
                0 != h && (m.style.display = "none", z.innerHTML = d, z.onclick = e);
                l && !r && (r = Fb(n), r.onclick = function(a) {
                    g.tc();
                    g.fb(y);
                    f.search(y, 9);
                    return Db(a)
                });
                l ? (r.innerHTML = l + " &raquo;", r.style.display = "") : r && (r.style.display =
                    "none")
            }
        }
    };
    Y.register(T.Aa, 188, function() {
        function c(a) {
            var b = {};
            if (h)
                if (f) b.tok = d;
                else if (n && p) {
                var c = n.md(a),
                    m = n.Ve(p);
                a = n.We(a, m);
                a = n.md(a);
                b.qe = c;
                b.qesig = a;
                b.pkc = q;
                h && l && e && 828E5 < Ha() - e && g.ef()
            }
            return b
        }

        function a(a, b) {
            g.ii(a, b)
        }

        function b(a) {
            p = a.websafe_signing_key;
            q = a.pkc;
            e = Ha()
        }
        var g, d, f, h, l, e, p, q, n, m = {
            C: function(a) {
                g = a.get(T.Jb, m);
                n = a.get(T.Pb, m)
            },
            activate: function(a) {
                f = "https:" == document.location.protocol || a.Tc;
                d = a.lb;
                a = !!a.ib[35];
                h = !!(g && d && a);
                l = !f;
                h && l && g.ef()
            },
            getType: function() {
                return T.Aa
            },
            B: function() {
                return 188
            },
            A: function() {
                return {
                    ki: c,
                    xe: a,
                    ji: b
                }
            }
        };
        return m
    });
    Y.register(T.Jb, 186, function() {
        function c() {
            var a = [];
            Oa("callback", "google.sbox.hi" + e, a);
            b(p, a)
        }

        function a(a, c) {
            u[a] = c;
            var d = [];
            Oa("delq", a, d);
            Oa("client", r, d);
            Oa("callback", "google.sbox.d" + e, d);
            n && Oa("suggest", "p", d);
            b(q, d)
        }

        function b(a, b) {
            Oa("tok", m, b);
            w && Oa("authuser", w, b);
            z = O("script");
            z.src = a + b.join("&");
            h.appendChild(z)
        }

        function g() {
            z && (h.removeChild(z), z = null)
        }

        function d(a) {
            g();
            l.ji(a)
        }

        function f(a) {
            g();
            a = a[0];
            var b = u[a];
            b && (delete u[a], b())
        }
        var h = ab(),
            l, e, p, q, n, m, w, r, z, u = {},
            y = {
                C: function(a) {
                    l =
                        a.get(T.Aa, y);
                    e = a.Ea().getId()
                },
                G: function() {
                    var a = window.google.sbox;
                    a["hi" + e] = d;
                    a["d" + e] = f
                },
                activate: function(a) {
                    var b = a.Ce || "clients1." + a.Vc;
                    p = "https://" + b + "/complete/init?";
                    q = "https://" + b + "/complete/deleteitems?";
                    n = a.fh;
                    m = a.lb;
                    w = a.Fb;
                    r = a.Oa
                },
                getType: function() {
                    return T.Jb
                },
                B: function() {
                    return 186
                },
                A: function() {
                    return {
                        ef: c,
                        ii: a
                    }
                },
                M: function() {
                    g()
                }
            };
        return y
    });
    Y.register(T.Z, 187, function() {
        function c(a) {
            var c = b.ki(a.I()),
                g;
            for (g in c) a.setParameter(g, c[g]);
            return 1
        }

        function a() {
            return 12
        }
        var b, g = {
            C: function(a) {
                b = a.get(T.Aa, g)
            },
            getType: function() {
                return T.Z
            },
            B: function() {
                return 187
            },
            A: function() {
                return {
                    Ka: c,
                    U: a
                }
            }
        };
        return g
    });

    function zc() {
        function c(a) {
            var b = g.DONT_CARE,
                c = a.cf();
            !f[c] || Qa(a.I()) || "keydown" == c && !h || (b = g.ne);
            h = !1;
            return b
        }

        function a() {
            return 18
        }

        function b() {
            h = !0
        }
        var g = gc,
            d, f = Aa(["mousedown", "keydown"]),
            h = !1,
            l = {
                C: function(a) {
                    d = a.get(T.Q, l)
                },
                G: function() {
                    d.ya(1, b)
                },
                getType: function() {
                    return T.Z
                },
                B: function() {
                    return 414
                },
                A: function() {
                    return {
                        Ka: c,
                        U: a
                    }
                }
            };
        return l
    };

    function Ac() {
        function c() {
            return 7
        }

        function a(a) {
            var b = a.I();
            if (!d || 0 == d.length || Qa(b)) return null;
            for (var c = [], h = Math.min(g, d.length), n = 0; n < h; ++n) {
                var m = d[n];
                c.push(sc(f.bold(b, m), m, n, 0, []))
            }
            return qc(a, "", c, null, !0, !1, !1, !1)
        }
        var b, g, d, f;
        b = {
            activate: function(a) {
                g = a.Pc
            },
            M: k,
            G: k,
            getType: function() {
                return T.xa
            },
            B: function() {
                return 415
            },
            A: function() {
                return {
                    U: c,
                    update: k,
                    get: a,
                    reset: k
                }
            },
            va: k,
            K: k,
            C: function(a) {
                f = a.get(T.Ba, h)
            }
        };
        var h = {
            Sh: function() {
                return b
            },
            Th: function(a) {
                d = a
            }
        };
        return h
    };

    function Bc(c) {
        function a(a) {
            var d = a.I(),
                h = a.S(),
                q = h.length,
                n = f;
            0 < q && (n = Math.ceil(q / 2));
            var m, w = c,
                r = n,
                n = [],
                z = 0;
            m = b(d);
            for (var u = m.length, y = 0, B; B = w[y++];) {
                var s = b(B);
                if (0 == s.indexOf(m) && s.length != u && (n[z++] = B, z >= r)) break
            }
            w = [];
            for (m = 0;
                (r = n[m]) && m < f; ++m) w.push(sc(g.bold(d, r), r, m, 0, null));
            if (m < f)
                for (d = Aa(n), r = 0; m < f && r < q; ++r) n = h[r], d[n.H()] || w.push(cb(n, m++));
            return qc(a.ea(), a.I(), w, a.D(), a.Ib(), a.Ta(), a.od(), !0)
        }

        function b(a) {
            if (!a) return "";
            a = Ma(a, !0);
            a = d.hi(a);
            return a.toLowerCase()
        }
        var g, d, f, h = {
            C: function(a) {
                g =
                    a.get(T.Ba, h);
                d = a.get(T.pd, h)
            },
            activate: function(a) {
                f = a.Pc
            },
            getType: function() {
                return T.wa
            },
            B: function() {
                return 480
            },
            A: function() {
                return {
                    Ye: a
                }
            }
        };
        return h
    };
    Y.register(T.xa, 98, function() {
        function c() {
            return 3
        }

        function a(a) {
            if (d) {
                var b = a.ea(),
                    c = a.S();
                if (c.length) {
                    var e = b.ma();
                    n: for (var b = Number.MAX_VALUE, g, l = 0; g = c[l++];) {
                        if (!f[g.getType()]) {
                            b = -1;
                            break n
                        }
                        g = g.H();
                        b = Math.min(g.length, b)
                    }
                    if (-1 != b) {
                        var p = c[0].H();
                        if (Wa(p, e, !0))
                            for (l = e.length + 1; l <= b;) {
                                e = null;
                                for (g = 0; p = c[g++];) {
                                    p = p.H();
                                    if (l > p.length) return;
                                    p = p.substr(0, l);
                                    if (!e) e = p;
                                    else if (e != p) return
                                }
                                h[e] = a;
                                ++l
                            }
                    }
                }
            }
        }

        function b(a) {
            if (d) {
                var b = h[a.ma()];
                if (b) {
                    var c = a.Ze(),
                        f = a.ma();
                    b.ea().ma();
                    for (var g = b.D(), p =
                            e || !g.Ee("k"), u = [], y, B, s = b.S(), v = 0, x; x = s[v++];) B = x.H(), y = p ? l.bold(c, B) : Ra(B), u.push(sc(y, B, x.za(), x.getType(), x.Nb(), x.D()));
                    delete h[f];
                    return qc(a, a.I(), u, g, !0, b.Ta(), !0, !1)
                }
            }
            return null
        }

        function g() {
            h = {}
        }
        var d = !0,
            f, h = {},
            l, e, p = {
                C: function(a) {
                    l = a.get(T.Ba, p)
                },
                G: function() {
                    f = Aa([0])
                },
                activate: function(a) {
                    e = a.Cc;
                    d = a.Ud
                },
                getType: function() {
                    return T.xa
                },
                B: function() {
                    return 98
                },
                A: function() {
                    return {
                        U: c,
                        update: a,
                        get: b,
                        reset: g
                    }
                },
                M: function() {
                    d = !1
                }
            };
        return p
    });
    Y.register(T.RENDERER, 31, function() {
        function c() {
            return Cc()
        }

        function a(a, b) {
            var c = a.D(),
                g = c.getString("a"),
                c = c.getString("b"),
                e = a.H();
            b.render(g, c, e)
        }

        function b(a, b, c) {
            c.search(b.H(), 1)
        }

        function g() {
            return 33
        }
        return {
            K: function(a, b) {
                b.addRule(".gspr_a", "padding-right:1px")
            },
            getType: function() {
                return T.RENDERER
            },
            B: function() {
                return 31
            },
            A: function() {
                return {
                    Lb: c,
                    render: a,
                    la: b,
                    Mb: k,
                    Ub: g
                }
            }
        }
    });

    function Cc() {
        var c;
        c = tb();
        c.className = "gspr_a";
        return {
            getType: function() {
                return 33
            },
            F: function() {
                return c
            },
            W: function() {
                return !0
            },
            render: function(a, b) {
                c.innerHTML = b
            }
        }
    };
    Y.register(T.RENDERER, 20, function() {
        function c(a) {
            return Dc(d, a)
        }

        function a(a, b) {
            b.render(a.Tb(), a.H(), f)
        }

        function b(a, b, c) {
            c.search(b.H(), 1)
        }

        function g() {
            return 0
        }
        var d, f, h = {
            K: function(a, b) {
                b.addRule(".gsq_a", "padding:0")
            },
            C: function(a) {
                d = a.get(T.J, h)
            },
            activate: function(a) {
                f = a.lc ? a.xc : ""
            },
            getType: function() {
                return T.RENDERER
            },
            B: function() {
                return 20
            },
            A: function() {
                return {
                    Lb: c,
                    render: a,
                    la: b,
                    Mb: k,
                    Ub: g
                }
            }
        };
        return h
    });

    function Dc(c, a) {
        var b, g, d, f, h;
        (function() {
            b = tb();
            b.className = "gsq_a";
            var a = sb();
            b.appendChild(a);
            g = a.insertRow(-1);
            a = g.insertCell(-1);
            a.style.width = "100%";
            d = O("span");
            a.appendChild(d)
        })();
        return {
            F: function() {
                return b
            },
            getType: function() {
                return 0
            },
            W: function() {
                return !0
            },
            render: function(b, e, p) {
                d.innerHTML = b;
                h = e;
                p && !f && (f = Fb(g), f.onclick = function(b) {
                    c.tc();
                    c.fb(h);
                    a.search(h, 9);
                    return Db(b)
                });
                p ? (f.innerHTML = p + " &raquo;", f.style.display = "") : f && (f.style.display = "none")
            }
        }
    };

    function Ec(c, a, b) {
        function g() {
            return n()
        }

        function d(a, b) {
            var c = a.D(),
                d, e;
            c.getString("b") ? (d = Yb(c.getString("b")), e = Zb(c.getString("a")), c = q) : (d = Xb(c.getString("a")), c = m);
            b.render(d, e, c)
        }

        function f(a) {
            a = a.D().getString("b");
            a = Sa(a);
            return Yb(a)
        }

        function h(a, b, c) {
            p(b, c)
        }

        function l(a, b, c) {
            p(b, c);
            return !0
        }

        function e() {
            return 5
        }

        function p(a, b) {
            var c = a.D().getString("a"),
                c = $b(c);
            b.redirect(c)
        }
        var q = c,
            n = b,
            m = a;
        return {
            K: function(a, b) {
                b.addRule(".gsyn_r", "height:25px;margin:3px 0");
                b.addRule(".gsyn_t", "width:100%");
                b.addRule(".gsyn_tc", "width:100%");
                b.addRule(".gssb_m", "table-layout:fixed");
                b.addRule(".gshid", "display:none");
                b.addRule(".gsyn_t", "display:inline-block;line-height:25px;vertical-align:middle;color:#468aca;font-size:16px");
                b.addRule(".gsyn_w", "text-align:right;color:#999;font-size:12px");
                b.addRule(".gsyn_txt .gsyn_w:before", 'content:"\u25b6";position:relative;top:-1px;font-size:10px;margin:0 5px');
                b.addRule(".gsyn_li", "display:inline-block;vertical-align:middle;margin-right:5px;height:15px;width:27px;border-radius:4px;background-color:#b8b8b8;color:#fff");
                b.addRule(".gsyn_li:after", 'display:inline-block;vertical-align:text-top;margin-top:-4px;margin-left:11px;content:"\u25b6";font-size:9px');
                b.addRule(".gsyn_pi", 'display:inline-block;padding:4px 1px 0 3px;width:25px;height:16px;line-height:25px;vertical-align:middle;background-size:25px;background-image:url("//www.gstatic.com/youtube/img/play_button_grayscale.png");background-repeat:no-repeat');
                b.addRule(".gsyn_cw", "position:relative;margin:0 5px;width:40px;height:25px;overflow:hidden;vertical-align:middle;display:inline-block");
                b.addRule(".gsyn_co", "position:absolute;top:-10px;right:-10px;bottom:-10px;left:-10px;text-align:center;whitespace:nowrap;word-break:normal");
                b.addRule(".gsyn_ci", "position:absolute;top:0;left:0;width:100%;height:100%");
                b.addRule(".gsyn_i", "display:inline-block;vertical-align:middle;width:50px");
                b.addRule(".gsyn_cs", "display:inline-block;vertical-align:middle;height:100%");
                b.addRule(".gsyn_cw:after", 'position:absolute;left:13px;top:2px;content:"\u25b6";color:#fff;font-size:10px;margin:0 5px');
                b.addRule(".gsyn_tnl .gsyn_cw",
                    "margin-left:0");
                b.addRule(".gsyn_tnr .gsyn_cw", "margin-right:0");
                b.addRule(".gsyn_ll .gsyn_li", "margin-left:0");
                b.addRule(".gsyn_lr .gsyn_li", "margin-left:5px");
                b.addRule(".gsyn_lr .gsyn_pi", "margin-left:5px");
                b.addRule(".gssb_e .gssb_l", "margin:0")
            },
            getType: function() {
                return T.RENDERER
            },
            B: function() {
                return 483
            },
            A: function() {
                return {
                    Lb: g,
                    render: d,
                    zb: f,
                    la: h,
                    Mb: l,
                    Ub: e
                }
            }
        }
    };

    function Fc() {
        var c, a, b;
        (function() {
            c = tb();
            a = O("span");
            b = O("span");
            var g = sb(),
                d = g.insertRow(-1),
                f = d.insertCell(-1),
                h = d.insertCell(-1);
            c.className = "gsyn_r gsyn_txt";
            g.className = "gsyn_t";
            d.className = "gsyn_tr";
            f.className = "gsyn_tc";
            h.className = "gsyn_lc";
            a.className = "gsyn_t";
            b.className = "gsyn_w";
            f.appendChild(a);
            h.appendChild(b);
            d.appendChild(f);
            d.appendChild(h);
            c.appendChild(g)
        })();
        return {
            F: function() {
                return c
            },
            getType: function() {
                return 5
            },
            W: function() {
                return !0
            },
            render: function(c, d, f) {
                a.innerHTML = c;
                b.innerHTML = f
            }
        }
    }

    function Gc() {
        var c, a, b, g;
        (function() {
            c = tb();
            a = O("span");
            g = O("span");
            b = O("img");
            var d = sb(),
                f = d.insertRow(-1),
                h = f.insertCell(-1),
                l = f.insertCell(-1),
                e = f.insertCell(-1),
                p = O("span"),
                q = O("span"),
                n = O("span"),
                m = O("span");
            c.className = "gsyn_r gsyn_tnl";
            a.className = "gsyn_t";
            g.className = "gsyn_w";
            b.className = "gsyn_i";
            d.className = "gsyn_t";
            f.className = "gsyn_tr";
            h.className = "gsyn_ic";
            l.className = "gsyn_tc";
            e.className = "gsyn_lc";
            p.className = "gsyn_cw";
            q.className = "gsyn_co";
            n.className = "gsyn_ci";
            m.className = "gsyn_cs";
            n.appendChild(b);
            n.appendChild(m);
            q.appendChild(n);
            p.appendChild(q);
            h.appendChild(p);
            l.appendChild(a);
            e.appendChild(g);
            f.appendChild(h);
            f.appendChild(l);
            f.appendChild(e);
            d.appendChild(f);
            c.appendChild(d)
        })();
        return {
            F: function() {
                return c
            },
            getType: function() {
                return 5
            },
            W: function() {
                return !0
            },
            render: function(c, f, h) {
                a.innerHTML = c;
                g.innerHTML = h;
                f && (b.src = f)
            }
        }
    }

    function Hc() {
        var c, a, b, g, d;
        (function() {
            c = tb();
            a = O("span");
            d = O("span");
            b = O("img");
            g = O("span");
            var f = sb(),
                h = f.insertRow(-1),
                l = h.insertCell(-1),
                e = h.insertCell(-1),
                p = h.insertCell(-1),
                q = O("span"),
                n = O("span"),
                m = O("span");
            c.className = "gsyn_r gsyn_tnr";
            a.className = "gsyn_t";
            d.className = "gsyn_w";
            b.className = "gsyn_i";
            f.className = "gsyn_t";
            h.className = "gsyn_tr";
            l.className = "gsyn_ic";
            e.className = "gsyn_tc";
            p.className = "gsyn_lc";
            g.className = "gsyn_cw";
            q.className = "gsyn_co";
            n.className = "gsyn_ci";
            m.className = "gsyn_cs";
            n.appendChild(b);
            n.appendChild(m);
            q.appendChild(n);
            g.appendChild(q);
            l.appendChild(g);
            e.appendChild(a);
            p.appendChild(d);
            h.appendChild(e);
            h.appendChild(p);
            h.appendChild(l);
            f.appendChild(h);
            c.appendChild(f)
        })();
        return {
            F: function() {
                return c
            },
            getType: function() {
                return 5
            },
            W: function() {
                return !0
            },
            render: function(c, h, l) {
                a.innerHTML = c;
                d.innerHTML = l;
                h ? (b.src = h, b.className = "gsyn_i", g.className = "gsyn_cw") : (g.className = "gshid", b.className = "gshid")
            }
        }
    }

    function Ic() {
        var c, a, b;
        (function() {
            c = tb();
            a = O("span");
            b = O("span");
            var g = sb(),
                d = g.insertRow(-1),
                f = d.insertCell(-1),
                h = d.insertCell(-1),
                l = d.insertCell(-1),
                e = O("span");
            c.className = "gsyn_r gsyn_lr";
            a.className = "gsyn_t";
            b.className = "gsyn_w";
            e.className = "gsyn_pi";
            g.className = "gsyn_t";
            d.className = "gsyn_tr";
            f.className = "gsyn_ic";
            h.className = "gsyn_tc";
            l.className = "gsyn_lc";
            f.appendChild(e);
            h.appendChild(a);
            l.appendChild(b);
            d.appendChild(h);
            d.appendChild(l);
            d.appendChild(f);
            g.appendChild(d);
            c.appendChild(g)
        })();
        return {
            F: function() {
                return c
            },
            getType: function() {
                return 5
            },
            W: function() {
                return !0
            },
            render: function(c, d, f) {
                a.innerHTML = c;
                b.innerHTML = f
            }
        }
    }

    function Jc() {
        var c, a, b;
        (function() {
            c = tb();
            a = O("span");
            b = O("span");
            var g = sb(),
                d = g.insertRow(-1),
                f = d.insertCell(-1),
                h = d.insertCell(-1),
                l = d.insertCell(-1),
                e = O("span");
            c.className = "gsyn_r gsyn_ll";
            a.className = "gsyn_t";
            b.className = "gsyn_w";
            e.className = "gsyn_pi";
            g.className = "gsyn_t";
            d.className = "gsyn_tr";
            f.className = "gsyn_ic";
            h.className = "gsyn_tc";
            l.className = "gsyn_lc";
            f.appendChild(e);
            h.appendChild(a);
            l.appendChild(b);
            d.appendChild(f);
            d.appendChild(h);
            d.appendChild(l);
            g.appendChild(d);
            c.appendChild(g)
        })();
        return {
            F: function() {
                return c
            },
            getType: function() {
                return 5
            },
            W: function() {
                return !0
            },
            render: function(c, d, f) {
                a.innerHTML = c;
                b.innerHTML = f
            }
        }
    };

    function Kc() {
        function c(a) {
            a.setParameter("redirect", "reg");
            return b.DONT_CARE
        }

        function a() {
            return 24
        }
        var b = gc;
        return {
            getType: function() {
                return T.Z
            },
            B: function() {
                return 484
            },
            A: function() {
                return {
                    Ka: c,
                    U: a
                }
            }
        }
    };

    function Lc() {
        function c(a) {
            for (var b = a.S(), c = b.length - 1; 0 <= c; --c) {
                var d = b[c];
                if (5 == d.getType()) {
                    var f = d.D(),
                        d = f.getString("a"),
                        f = f.getString("b"); - 1 < d.indexOf("/user/") || d && f || b.splice(c, 1)
                }
            }
            return qc(a.ea(), a.I(), b, a.D(), a.Ib(), a.Ta(), a.od(), !0)
        }
        return {
            getType: function() {
                return T.wa
            },
            B: function() {
                return 485
            },
            A: function() {
                return {
                    Ye: c
                }
            }
        }
    };
    Y.register(T.ra, 78, function() {
        function c() {
            return z
        }

        function a() {
            return 78
        }

        function b() {
            return 2
        }

        function g() {
            return v
        }

        function d() {
            return {
                Kh: r
            }
        }

        function f(a) {
            if (!D) a = document.createElement("script"), a.src = ["//www.google.com/textinputassistant/", s, "/", B, "_tia.js"].join(""), document.body.appendChild(a), D = !0, n.add(3);
            else if (u.onclick) u.onclick(a)
        }

        function h() {
            m.Xa()
        }

        function l() {
            w.Hh()
        }

        function e(a) {
            w.Ih(78, a)
        }

        function p(a) {
            w.Jh(78, a)
        }

        function q(a) {
            v.className = "gsok_a gsst_e " + a
        }
        var n, m, w, r, z, u, y,
            B, s, v, x, D, I = {
                K: function(a, b) {
                    x = a;
                    a.$a() || (b.addRule(".gsok_a", "background:url(data:image/gif;base64,R0lGODlhEwALAKECAAAAABISEv///////yH5BAEKAAIALAAAAAATAAsAAAIdDI6pZ+suQJyy0ocV3bbm33EcCArmiUYk1qxAUAAAOw==) no-repeat center;display:inline-block;height:11px;line-height:0;width:19px"), b.addRule(".gsok_a img", "border:none;visibility:hidden"))
                },
                C: function(a) {
                    n = a.get(T.$, I);
                    m = a.get(T.P, I);
                    w = a.get(T.pa, I)
                },
                G: function(a) {
                    z = !!a.gb;
                    y = a.se;
                    B = a.hb;
                    s = a.Fg;
                    r = a.Eg;
                    (v = x.get("gs_ok")) ? u = v.firstChild: (u = O("img"), u.src =
                        y + "/tia.png", v = O("span", "gsok_a gsst_e"), v.id = x.getId("gs_ok"), v.appendChild(u));
                    u.ds = h;
                    u.hd = l;
                    u.sc = q;
                    u.sd = e;
                    u.td = p;
                    u.setAttribute("tia_field_name", x.Id().name);
                    u.setAttribute("tia_disable_swap", !0)
                },
                activate: function(a) {
                    a.cc && (z = !!a.gb);
                    u.setAttribute("tia_property", a.te)
                },
                getType: function() {
                    return T.ra
                },
                B: function() {
                    return 78
                },
                A: function() {
                    return {
                        isEnabled: c,
                        Ue: a,
                        U: b,
                        F: g,
                        Te: d,
                        la: f
                    }
                }
            };
        return I
    });
    Y.register(T.pa, 174, function() {
        function c() {
            return 174
        }

        function a(a) {
            N != a && (t.dir = N = a, f())
        }

        function b() {
            return t
        }

        function g(a) {
            (a = H[a]) && a.style && (a.style.display = "")
        }

        function d(a) {
            (a = H[a]) && a.style && (a.style.display = "none")
        }

        function f() {
            M && (H[M].className = "gsst_a", s.hide(), M = null)
        }

        function h(a, b) {
            M = a;
            var c = H[a];
            c.className = "gsst_a gsst_g";
            var d = R.lastChild;
            d != b && (d == ba ? R.appendChild(b) : R.replaceChild(b, d));
            s.setPanel(174);
            s.show();
            c = c.clientWidth;
            ba.style.width = c + "px";
            ba.style.left = "rtl" == N ? "0" :
                R.clientWidth - c + "px"
        }

        function l(a, b) {
            M == a ? f() : h(a, b)
        }

        function e(a) {
            a.yc = "rtl" == N ? "left" : "right";
            a.Ne = !1
        }

        function p() {
            return R
        }

        function q() {
            return J.Hd || U == N ? Q : null
        }

        function n() {
            f()
        }

        function m() {
            return 174
        }

        function w(a, b) {
            return b.U() - a.U()
        }

        function r() {
            V != M && f()
        }

        function z() {
            for (var a, b = 0, c; c = D[b++];)
                if (c.isEnabled()) {
                    a = !0;
                    var d = O("a", "gsst_a");
                    B(d, c);
                    d.appendChild(c.F());
                    t.appendChild(d)
                } t.style.display = a ? "" : "none"
        }

        function u() {
            V = null
        }

        function y() {
            H = {};
            for (var a = 0, b; b = D[a++];)
                if (b.isEnabled()) {
                    var c =
                        b.Ue(),
                        e = b.F().parentNode;
                    e.onclick = b.la;
                    e.onmouseover = function() {
                        V = c
                    };
                    e.onmouseout = u;
                    H[c] = e;
                    b.Te && (b = b.Te(), b.Ii && d(c), (b = b.Kh) && !I.jd(e, b) && (e.title = b))
                }
        }

        function B(a, b) {
            a.href = "javascript:void(0)";
            Rb(a);
            a.onkeydown = function(a) {
                a = a || window.event;
                var c = a.keyCode;
                if (13 == c || 32 == c) b.la(a), x.Jd(), Db(a)
            }
        }
        var s, v, x, D, I, J, t, C, H = {},
            M, R, ba, V, U, N, Q, S, G = {
                K: function(a, b) {
                    C = a;
                    U = a.Fa();
                    a.$a() || (b.addRule(".gsst_a", "display:inline-block"), b.addRule(".gsst_a", "cursor:pointer;padding:0 4px"), b.addRule(".gsst_a:hover",
                        "text-decoration:none!important"), b.addRule(".gsst_b", ["font-size:16px;padding:0 2px;position:relative;", b.prefix("user-select:none;"), "white-space:nowrap"].join("")), b.addRule(".gsst_e", Kb(0.55)), b.addRule(".gsst_a:hover .gsst_e,.gsst_a:focus .gsst_e", Kb(0.72)), b.addRule(".gsst_a:active .gsst_e", Kb(1)), b.addRule(".gsst_f", "background:white;text-align:left"), b.addRule(".gsst_g", ["background-color:white;border:1px solid #ccc;border-top-color:#d9d9d9;", b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);"),
                        "margin:-1px -3px;padding:0 6px"
                    ].join("")), b.addRule(".gsst_h", "background-color:white;height:1px;margin-bottom:-1px;position:relative;top:-1px"))
                },
                C: function(a) {
                    s = a.get(T.ca, G);
                    v = a.get(T.Q, G);
                    x = a.get(T.J, G);
                    D = a.R(T.ra, G);
                    I = a.ga()
                },
                G: function(a) {
                    S = a.cc;
                    D.sort(w);
                    t = C.get("gs_st");
                    if (!t) {
                        t = tb("gsst_b");
                        t.id = C.getId("gs_st");
                        if (a = a.jb) t.style.lineHeight = a + "px";
                        z()
                    }
                    y()
                },
                activate: function(a) {
                    J = a;
                    (a = a.kb) && (Q = C.Za(a));
                    if (S) {
                        a = 0;
                        for (var b; b = D[a++];) {
                            var c = !!H[b.Ue()];
                            if (b.isEnabled() != c) {
                                for (; t.hasChildNodes();) t.removeChild(t.lastChild);
                                z();
                                y();
                                break
                            }
                        }
                    }
                    ba = tb("gsst_h");
                    R = tb("gsst_f");
                    R.dir = "ltr";
                    R.appendChild(ba);
                    v.ya(13, r)
                },
                getType: function() {
                    return T.pa
                },
                B: c,
                A: function() {
                    return {
                        kc: a,
                        F: b,
                        ob: g,
                        N: d,
                        Hh: f,
                        Ih: h,
                        Jh: l
                    }
                },
                va: function() {
                    var a = {
                        ie: e,
                        F: p,
                        pb: q,
                        je: n,
                        Ma: k,
                        Nc: m
                    };
                    return [{
                        K: k,
                        C: k,
                        G: k,
                        activate: k,
                        getType: function() {
                            return T.nb
                        },
                        B: c,
                        A: function() {
                            return a
                        },
                        va: k,
                        M: k
                    }]
                }
            };
        return G
    });
    ac = function() {
        function c(b) {
            return 0 <= a.indexOf(b)
        }
        var a = window.navigator.userAgent,
            b = {};
        window.opera ? b[2] = !0 : c("MSIE") ? b[0] = !0 : c("WebKit") ? (b[5] = !0, c("Chrome") ? b[3] = !0 : c("Android") ? b[7] = !0 : c("Safari") && (b[4] = !0), c("iPad") && (b[6] = !0)) : c("Gecko") && (b[1] = !0);
        return b
    };

    function Mc() {
        function c(a) {
            return {
                api: a,
                Zh: a.a,
                activate: a.b,
                M: a.c,
                hj: a.d,
                Vh: a.e,
                Y: a.f,
                fa: a.g,
                ia: a.h,
                Da: a.i,
                Xh: a.j,
                Yh: a.k,
                mj: a.l,
                lj: a.m,
                Wh: a.n,
                qb: a.o,
                fj: a.p,
                Ed: a.q,
                gj: a.r,
                dj: a.s,
                tb: a.t,
                Dd: a.u,
                focus: a.v,
                blur: a.w,
                $d: a.x,
                ha: a.y,
                gc: a.z,
                ce: a.aa,
                qa: a.ab,
                search: a.ad,
                nj: a.ae,
                qj: a.af,
                Wa: a.ag,
                Ca: a.ah,
                rj: a.ai,
                Cd: a.al,
                Rd: a.am,
                jh: a.an,
                ua: a.ao,
                hh: a.ap,
                ij: a.aq,
                ec: a.ar,
                getId: a.as,
                ej: a.at,
                jc: a.au,
                pj: a.av,
                fc: a.aw,
                de: a.ax,
                xb: a.ay,
                ih: a.az,
                Xc: a.ba,
                oj: a.bb,
                kj: a.bc,
                Oc: a.bd,
                jj: a.be,
                gh: a.bf
            }
        }
        return {
            getInstance: function(a,
                b, g, d) {
                try {
                    var f = window.google.sbox(a, b, g, d);
                    return c(f)
                } catch (h) {
                    return null
                }
            },
            translate: function(a) {
                return c(a.api || a)
            }
        }
    };
    Zb = function(c) {
        c = $b(c);
        var a = c.match(/\bv=([^&]+)/)[1];
        if (c && a) return "//i4.ytimg.com/vi/" + a + "/default.jpg"
    };
    Xb = function(c) {
        c = c.substr(c.indexOf("/user/") + 6);
        c = c.substr(0, c.indexOf("&"));
        return c.toUpperCase()
    };
    Yb = function(c) {
        -1 < c.indexOf("- YouTube") && (c = c.substring(0, c.lastIndexOf("- YouTube") - 1));
        return c
    };
    $b = function(c) {
        return decodeURIComponent(c.substring(c.indexOf("=") + 1, c.indexOf("&")))
    };

    function Nc(c) {
        var a = arguments.length;
        if (1 == a && "array" == xa(arguments[0])) return Nc.apply(null, arguments[0]);
        if (a % 2) throw Error("Uneven number of arguments");
        for (var b = {}, g = 0; g < a; g += 2) b[arguments[g]] = arguments[g + 1];
        return b
    };
    window.google || (window.google = {});
    window.google.sbox = function(c, a, b, g) {
        function d() {
            v.M()
        }

        function f(a) {
            C.gc(a || "")
        }

        function h() {
            return F
        }

        function l() {
            return W
        }

        function e() {
            return C.fa()
        }

        function p() {
            return Q.Ca()
        }

        function q() {
            J.O(8)
        }

        function n(a) {
            return R.D(a)
        }

        function m() {
            return fa || !!D && D.ua()
        }

        function w() {
            return M.eh()
        }

        function r(a) {
            a = a.ge || ab();
            a = Qb(a);
            void 0 == a.nextSearchboxId && (a.nextSearchboxId = 50);
            return a.nextSearchboxId++
        }

        function z() {
            if (c)
                for (var a = c; a = a.parentNode;) {
                    var b = a.dir;
                    if (b) return b
                }
            return "ltr"
        }

        function u(a) {
            a =
                fb(a);
            a.ib[35] || (a.lb = "");
            var b = a.hb;
            b ? a.hb = b.toLowerCase() : a.gb = !1;
            a.Va && !a.lc && (a.Va = !1);
            bc || (a.yd = !1);
            return a
        }

        function y() {
            var a = Qb(c),
                b = Hb(a);
            J.listen(a, "resize", function() {
                var c = Hb(a);
                if (c.Se != b.Se || c.Re != b.Re) b = c, q()
            })
        }

        function B(a) {
            var b = a.cb,
                c = b[T.Vd],
                d = b[T.Bc],
                e = b[T.Yd],
                f = b[T.Zd],
                g = b[T.Ha],
                e = d || f || e;
            b[T.Ac] || g || c || e ? (a.cb[T.Ac] = !0, a.cb[T.Wd] = !0, e ? (a = Ga(a.Ya), !d || Sb && (Wb || a) || kb && a ? (F = 3, b[T.Bc] = !1, b[T.Xd] = !1) : F = 2) : F = 1) : F = 0
        }
        var s, v, x, D, I, J, t, C, H, M, R, ba, V, U, N, Q, S, G, W, F, P = !1,
            fa, A = {
                a: function(b) {
                    if (!P) {
                        b =
                            u(b);
                        W = null == g ? r(b) : g;
                        var d = Pb(c),
                            e = z(),
                            f = !!d.getElementById("gs_id" + W),
                            h = ["gssb_c", "gssb_k"];
                        b.hc && h.push(b.hc);
                        h = uc(b.ge, b.lg, b.kg, W, h);
                        B(b);
                        fa = b.ua;
                        v = oc(s, b.vb || {}, {
                            $a: function() {
                                return f
                            },
                            get: function(a) {
                                return d.getElementById(a + W)
                            },
                            Za: function(a) {
                                return d.getElementById(a)
                            },
                            we: function() {
                                return a
                            },
                            Fa: function() {
                                return e
                            },
                            getId: function(a) {
                                return a + W
                            },
                            Id: function() {
                                return c
                            }
                        }, h, A, b);
                        x = v.get(T.Gb, A);
                        D = v.get(T.na, A);
                        I = v.get(T.ca, A);
                        J = v.get(T.Q, A);
                        t = v.get(T.V, A);
                        C = v.get(T.J, A);
                        H = v.get(T.oa, A);
                        M =
                            v.get(T.$, A);
                        R = v.get(T.da, A);
                        ba = v.get(T.Aa, A);
                        V = v.get(T.Lh, A);
                        U = v.get(T.Mh, A);
                        N = v.get(T.X, A);
                        Q = v.get(T.P, A);
                        S = v.get(T.Ha, A);
                        G = v.get(T.ja, A);
                        y();
                        P = !0
                    }
                },
                b: function(a) {
                    d();
                    a = u(a);
                    B(a);
                    fa = a.ua;
                    v.activate(a)
                },
                c: d,
                d: function() {
                    return a
                },
                e: function(a, b) {
                    return zb(a, b)
                },
                f: function() {
                    return C.Y()
                },
                g: e,
                h: function() {
                    return Q.ia()
                },
                i: function() {
                    return Q.Da()
                },
                j: n,
                k: function(a, b) {
                    a || (a = R.D(b));
                    return La(a)
                },
                l: function() {
                    return Q.isVisible()
                },
                m: function() {
                    return Q.wf()
                },
                n: function(a, b) {
                    J.listen(a, "click", function(a) {
                        G.search(e(),
                            b);
                        return Cb(a)
                    })
                },
                o: function() {
                    t.qb()
                },
                p: function() {
                    Q.Xa()
                },
                q: function(a) {
                    C.Ed(a || "")
                },
                r: function() {
                    return I.getHeight()
                },
                s: function() {
                    C.clear()
                },
                t: function(a) {
                    return t.tb(a)
                },
                u: function() {
                    C.Dd()
                },
                v: function() {
                    H.focus()
                },
                w: function() {
                    H.blur()
                },
                x: function() {
                    return t.$d()
                },
                y: function() {
                    var a = N.ha();
                    return a ? Fa(a.Ie()) : null
                },
                z: f,
                aa: function(a) {
                    a = t.ce(a, null);
                    return Fa(a.Ie())
                },
                ab: function() {
                    R.reset()
                },
                ad: function(a, b) {
                    G.search(a, b)
                },
                ae: function() {
                    S && S.refresh()
                },
                af: function(a) {
                    Q.wd(a)
                },
                ag: function() {
                    Q.Wa()
                },
                ah: p,
                ai: q,
                al: function() {
                    C.Cd()
                },
                am: function() {
                    return v && v.Rd()
                },
                an: function(a) {
                    D && D.jh(a)
                },
                ao: m,
                ap: function() {
                    return m() && D ? D.hh() : ""
                },
                aq: function(a, b) {
                    return Ab(a, b)
                },
                ar: h,
                as: l,
                at: function() {
                    S && S.clear()
                },
                au: function(a, b) {
                    f(a);
                    Q.isEnabled() && Q.jc(a, b, !1)
                },
                av: function(a) {
                    J.O(15, {
                        query: a
                    })
                },
                aw: function() {
                    return H.fc()
                },
                ax: function(a) {
                    t.de(a)
                },
                ay: function(a) {
                    I.xb(a)
                },
                az: function(a) {
                    return !!V && V.ih(a)
                },
                ba: function() {
                    var a, b = N.ha();
                    if (b) {
                        var c = b.$b();
                        c && ((a = c.Xc()) || (a = b.D().getString("o")))
                    }
                    return a ||
                        ""
                },
                bb: function(a, b) {
                    return ba ? (ba.xe(a, b), !0) : !1
                },
                bc: function(a, b) {
                    switch (a) {
                        case "oq":
                        case "gs_l":
                            return n(b)[a] || null;
                        case "gs_ssp":
                            var c;
                            n: {
                                if ((c = p()) && 46 == c.getType() && (c = c.D().getString("g"))) break n;c = null
                            }
                            return c;
                        default:
                            return null
                    }
                },
                bd: function(a) {
                    x && x.Oc(a)
                },
                be: w,
                bf: function(a) {
                    return 6 == w() && !!U && U.gh(a)
                },
                getId: l,
                ec: h
            };
        s = vc(b);
        (function() {
            var a = window.navigator.userAgent,
                b = s.cd(),
                c = /Version\/(\d+)/.exec(a),
                c = c && c[1];
            c || (c = (c = /(?:Android|Chrome|Firefox|Opera|MSIE)[\s\/](\d+)/.exec(a)) &&
                c[1]);
            a = parseInt(c, 10) || 0;
            ib = (kb = b[0]) && 8 >= a;
            hb = kb && 7 >= a;
            Sb = b[1];
            jb = b[2];
            Tb = b[5];
            Ub = b[4];
            bc = b[3];
            Vb = b[7]
        })();
        Wb = /Mac/.test(navigator && (navigator.platform || navigator.appVersion) || "");
        return A
    };
    var Oc;
    (function() {
        function c() {
            return !0
        }

        function a(a) {
            var b = 0 <= a.indexOf("?") ? "&" : "?",
                c = e.Xh();
            return a + b + e.Yh(c)
        }
        var b = /MSIE\s+(\S+)/,
            g = /Version\/(\S+)/,
            d = /\/(movie|show)s?($|[?#/])/i,
            f = /\/results\?(.*&)?search_type=(movies|shows)($|[&#])/i,
            h = Nc(17, "cytns,pt=.30,n=2", 9, "eytns,pt=.27,n=2,ui=t", 10, "eytns,pt=.30,n=2,ui=t", 11, "eytns,pt=.35,n=2,ui=t", 12, "eytns,pt=.40,n=2,ui=t", 13, "eytns,pt=.30,n=2,ui=tl", 14, "eytns,pt=.30,n=2,ui=tr", 15, "eytns,pt=.30,n=2,ui=ll", 16, "eytns,pt=.30,n=2,ui=lr"),
            l = Nc(9, Fc, 10, Fc, 11,
                Fc, 12, Fc, 13, Gc, 14, Hc, 15, Jc, 16, Ic),
            e, p, q = {},
            n, m, w, r, z, u, y, B = {
                a: function() {
                    return n
                },
                b: function(a, b) {
                    q.sm && (q.sm.value = b + "");
                    c() && p.submit()
                },
                d: function(b) {
                    z(a(b))
                },
                e: a,
                r: function(a) {
                    a.addRule(".gsfi", "font-size:16px");
                    a.addRule(".gsfs", "font-size:16px");
                    a.addRule("a.gssb_j", "font-size:12px;color:#03c");
                    a.addRule(".gssb_a,.gssb_a td", "line-height:20px");
                    a.addRule(".gssb_a", "padding:0 6px");
                    a.addRule(".gssb_c", "z-index:2000000007");
                    a.addRule(".gssb_i td", "background:#eee");
                    a.addRule(".gssb_k", "z-index:2000000006");
                    a.addRule(".gssb_l", "margin:2px 0");
                    a.addRule(".gsib_a", "padding:0 4px");
                    a.addRule(".gsok_a", "padding:0");
                    a.addRule(".gsok_a img", "display:block");
                    a.addRule(".gsfe_b", ["border:1px solid #1c62b9;", a.prefix("box-shadow:inset 0 1px 2px rgba(0,0,0,0.3);"), "outline:none;"].join(""))
                }
            };
        (function() {
            function a(b) {
                return (b = c.match(b)) ? parseInt(b[1], 10) : NaN
            }
            var c = window.navigator.userAgent;
            n = ac();
            n[2] ? w = a(g) : n[0] && (w = a(b));
            m = 0 <= c.indexOf("Windows")
        })();
        Oc = function(a, b, g, D, I, J, t) {
            p = a;
            z = J;
            r = D.EXPERIMENT_ID;
            u =
                D.SUGGESTIONS_FOR_EMPTY_QUERY;
            y = D.SUPPLEMENTAL_SUGGESTIONS;
            t && (c = t);
            J = Mc();
            t = lc().getInstance();
            var C = "youtube";
            t.Oa = C;
            t.ub = C;
            t.Sd = "yt";
            t.Ya = D.REQUEST_LANGUAGE;
            t.ze = D.REQUEST_DOMAIN;
            t.Ph = !1;
            t.eb = 0;
            t.zd = !1;
            t.Va = !1;
            t.Ld = !1;
            t.Cc = !0;
            t.qc = "gsfi";
            t.vc = "gsfs";
            t.Qh = !0;
            C = window.location.href;
            C = d.test(C) || f.test(C);
            t.Td = C;
            t.gb = D.HAS_ON_SCREEN_KEYBOARD;
            t.hb = D.REQUEST_LANGUAGE;
            t.se = "//www.gstatic.com/inputtools/images";
            t.te = "youtube";
            t.ke = !0;
            t.Tc = D.USE_HTTPS;
            if (C = D.DROPDOWN_POSITION) t.Db = C;
            t.lb = D.PSUGGEST_TOKEN;
            t.Fb = D.SESSION_INDEX;
            t.ue = I.SUGGESTION_DISMISSED_LABEL;
            t.ve = I.SUGGESTION_DISMISS_LABEL;
            t.ib = Aa([0, 33, 35, 5]);
            D.IS_OG ? (t.Hb = null, t.jb = 23) : (t.Hb = "masthead-search-terms", t.jb = 30);
            t.vb = {};
            n[2] || (t.pe = !0);
            var C = n[2],
                H = n[4]; - 1 != window.location.href.indexOf("/watch?") && (C || m && H) && (C = "youtube-reduced", t.Oa = C, t.ub = C, t.Pc = 4);
            D.IS_OG ? t.kb = "gbqfqw" : t.kb = t.Hb;
            C = -3;
            D.IS_OG ? C = 2 : m && n[0] && 8 == w && (C = -5);
            t.Cb = [C, 0, 0];
            C = [0];
            n[0] && 8 == w && (C[0] = -1);
            t.oe = C;
            Ga(D.REQUEST_LANGUAGE) && (t.Kd = !0);
            if (r)
                if (r in h && (t.wc = h[r]), 8 == r) I =
                    t.vb, u && 0 < u.length && (C = zc(), gb(I, T.Z, C), C = Ac(), C.Th(u), gb(I, T.xa, C.Sh())), y && 0 < y.length && (I[T.wa] = Bc(y));
                else if (9 == r || 10 == r || 11 == r || 12 == r || 13 == r || 14 == r || 15 == r || 16 == r) C = t.vb, gb(C, T.Z, Kc()), gb(C, T.RENDERER, Ec(I.WATCH_NOW_LABEL, I.VIEW_CHANNEL_LABEL, l[r])), C[T.wa] = Lc();
            if (e) e.activate(t);
            else {
                e = J.getInstance(b, a, B);
                e.Zh(t);
                g && (e.Wh(g, 12), D.IS_OG || (g.onclick = null));
                a = ["sm"];
                for (b = 0; g = a[b++];) q[g] = e.Vh(p, g);
                if (15 == r || 16 == r)(new Image).src = "//www.gstatic.com/youtube/img/play_button_grayscale.png"
            }
        };
        return B
    })();

    function Pc(c, a, b) {
        c.push(encodeURIComponent(a) + "=" + encodeURIComponent(b))
    }

    function Qc(c) {
        var a = c.type;
        if (void 0 === a) return null;
        switch (a.toLowerCase()) {
            case "checkbox":
            case "radio":
                return c.checked ? c.value : null;
            case "select-one":
                return a = c.selectedIndex, 0 <= a ? c.options[a].value : null;
            case "select-multiple":
                for (var a = [], b, g = 0; b = c.options[g]; g++) b.selected && a.push(b.value);
                return a.length ? a : null;
            default:
                return void 0 !== c.value ? c.value : null
        }
    };
    var Rc, Sc, Tc, Uc;

    function Vc() {
        return qa.navigator ? qa.navigator.userAgent : null
    }
    Uc = Tc = Sc = Rc = !1;
    var Wc;
    if (Wc = Vc()) {
        var Xc = qa.navigator;
        Rc = 0 == Wc.lastIndexOf("Opera", 0);
        Sc = !Rc && (-1 != Wc.indexOf("MSIE") || -1 != Wc.indexOf("Trident"));
        Tc = !Rc && -1 != Wc.indexOf("WebKit");
        Uc = !Rc && !Tc && !Sc && "Gecko" == Xc.product
    }
    var Yc = Sc,
        Zc = Uc,
        $c = Tc;
    var ad;
    if (Rc && qa.opera) {
        var bd = qa.opera.version;
        "function" == typeof bd && bd()
    } else Zc ? ad = /rv\:([^\);]+)(\)|;)/ : Yc ? ad = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : $c && (ad = /WebKit\/(\S+)/), ad && ad.exec(Vc());
    var cd = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");

    function dd(c) {
        if (ed) {
            ed = !1;
            var a = qa.location;
            if (a) {
                var b = a.href;
                if (b && (b = fd(dd(b)[3] || null)) && b != a.hostname) throw ed = !0, Error();
            }
        }
        return c.match(cd)
    }
    var ed = $c;

    function fd(c) {
        return c && decodeURIComponent(c)
    }

    function gd(c, a, b) {
        if ("array" == xa(a))
            for (var g = 0; g < a.length; g++) gd(c, String(a[g]), b);
        else null != a && b.push("&", c, "" === a ? "" : "=", encodeURIComponent(String(a)))
    };

    function hd(c) {
        this.N = c
    }
    var id = /\s*;\s*/;
    hd.prototype.isEnabled = function() {
        return navigator.cookieEnabled
    };
    hd.prototype.set = function(c, a, b, g, d, f) {
        if (/[;=\s]/.test(c)) throw Error('Invalid cookie name "' + c + '"');
        if (/[;\r\n]/.test(a)) throw Error('Invalid cookie value "' + a + '"');
        void 0 !== b || (b = -1);
        d = d ? ";domain=" + d : "";
        g = g ? ";path=" + g : "";
        f = f ? ";secure" : "";
        b = 0 > b ? "" : 0 == b ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(ya() + 1E3 * b)).toUTCString();
        this.N.cookie = c + "=" + a + d + g + b + f
    };
    hd.prototype.get = function(c, a) {
        for (var b = c + "=", g = (this.N.cookie || "").split(id), d = 0, f; f = g[d]; d++) {
            if (0 == f.lastIndexOf(b, 0)) return f.substr(b.length);
            if (f == c) return ""
        }
        return a
    };
    hd.prototype.remove = function(c, a, b) {
        var g;
        g = void 0 !== this.get(c);
        this.set(c, "", 0, a, b);
        return g
    };
    hd.prototype.clear = function() {
        for (var c = (this.N.cookie || "").split(id), a = [], b = [], g, d, f = 0; d = c[f]; f++) g = d.indexOf("="), -1 == g ? (a.push(""), b.push(d)) : (a.push(d.substring(0, g)), b.push(d.substring(g + 1)));
        for (c = a.length - 1; 0 <= c; c--) this.remove(a[c])
    };
    var jd = new hd(document);
    jd.ob = 3950;
    var kd = window.yt && window.yt.config_ || {};
    za("yt.config_", kd);
    za("yt.tokens_", window.yt && window.yt.tokens_ || {});
    za("yt.msgs_", window.yt && window.yt.msgs_ || {});

    function ld(c, a) {
        return c in kd ? kd[c] : a
    };

    function md(c, a) {
        var b = ld("EVENT_ID");
        if (b) {
            b = {
                ei: b
            };
            a && (b.feature = a);
            var g = fd(dd(c)[3] || null);
            if (g == fd(dd(window.location.href)[3] || null) || !g && 0 == c.lastIndexOf("/", 0)) {
                var d = dd(c),
                    g = d[5],
                    f = d[6],
                    d = d[7],
                    h = "";
                g && (h += g);
                f && (h += "?" + f);
                d && (h += "#" + d);
                g = h;
                f = g.indexOf("#");
                if (g = 0 > f ? g : g.substr(0, f)) {
                    for (d = f = 0; d < g.length; ++d) f = 31 * f + g.charCodeAt(d), f %= 4294967296;
                    var g = "s_tempdata-" + f,
                        l;
                    if (b) {
                        f = [];
                        for (l in b) gd(l, b[l], f);
                        f[0] = "";
                        l = f.join("")
                    } else l = "";
                    b = "" + g;
                    jd.set(b, l, 5, "/", "youtube.com")
                }
            }
        }
        window.location =
            c
    }

    function nd() {
        var c = !!ld("SPF_SEARCH_BOX");
        if (!wa("ytspf.enabled") || !c) return !0;
        var c = null,
            c = ld("SBOX_SETTINGS", {}).IS_OG ? gbar.qfgf() : document.getElementById("masthead-search"),
            a;
        a = [];
        for (var b = c, g = b.elements, d, f = 0; d = g[f]; f++)
            if (d.form == b && !d.disabled && "fieldset" != d.tagName.toLowerCase()) {
                var h = d.name;
                switch (d.type.toLowerCase()) {
                    case "file":
                    case "submit":
                    case "reset":
                    case "button":
                        break;
                    case "select-multiple":
                        d = Qc(d);
                        if (null != d)
                            for (var l, e = 0; l = d[e]; e++) Pc(a, h, l);
                        break;
                    default:
                        l = Qc(d), null != l && Pc(a,
                            h, l)
                }
            } g = b.getElementsByTagName("input");
        for (f = 0; d = g[f]; f++) d.form == b && "image" == d.type.toLowerCase() && (h = d.name, Pc(a, h, d.value), Pc(a, h + ".x", "0"), Pc(a, h + ".y", "0"));
        a = a.join("&");
        c = c.action + "?" + a;
        try {
            spf.navigate(c)
        } catch (p) {
            return !0
        }
        return !1
    };
    za("searchbox.yt.install", Oc);
    za("yt.www.masthead.searchbox.init", function() {
        var c = ld("SBOX_SETTINGS");
        if (c) {
            var a = null,
                b = null,
                g = null;
            c.IS_OG ? (a = gbar.qfgf(), b = gbar.qfgq(), g = gbar.qfsb()) : (a = document.getElementById("masthead-search"), b = a.search_query, g = document.getElementById("search-btn"));
            var d = ld("SBOX_LABELS");
            a && c && d && window.setTimeout(function() {
                wa("searchbox.yt.install")(a, b, g, c, d, md, nd)
            }, 100)
        }
    });
})();