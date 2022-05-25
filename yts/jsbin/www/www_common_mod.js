(function(m) {
    var window = this;
    m.Tb = function(a, b, c) {
        for (var d = a.length, e = (0, m.q)(a) ? a.split("") : a, g = 0; g < d; g++)
            if (g in e && b.call(c, e[g], g, a)) return g;
        return -1
    };
    m.Ub = function(a) {
        a && "function" == typeof a.dispose && a.dispose()
    };
    m.Vb = function(a, b) {
        a.Bc || (a.Bc = []);
        a.Bc.push((0, m.r)(b, void 0))
    };
    m.Wb = function(a, b, c) {
        b = (0, m.Tb)(a, b, c);
        return 0 > b ? null : (0, m.q)(a) ? a.charAt(b) : a[b]
    };
    m.E = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    };
    m.Xb = function(a, b) {
        return m.ba[a] = b
    };
    m.G = function(a, b) {
        (0, m.Vb)(a, (0, m.E)(m.Ub, b))
    };
    m.Yb = function(a, b) {
        (0, m.l)(a, b, void 0)
    };
    m.Zb = function(a) {
        return null != a
    };
    m.$b = function(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    };
    m.ac = function(a, b, c, d) {
        return m.na.splice.apply(a, (0, m.pa)(arguments, 1))
    };
    var bc = function(a) {
        return a.replace(/&([^;]+);/g, function(a, c) {
            switch (c) {
                case "amp":
                    return "&";
                case "lt":
                    return "<";
                case "gt":
                    return ">";
                case "quot":
                    return '"';
                default:
                    if ("#" == c.charAt(0)) {
                        var d = Number("0" + c.substr(1));
                        if (!(0, window.isNaN)(d)) return String.fromCharCode(d)
                    }
                    return a
            }
        })
    };
    var cc = function(a) {
        var b = {
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"'
            },
            c;
        c = window.document.createElement("div");
        return a.replace(dc, function(a, e) {
            var g = b[a];
            if (g) return g;
            if ("#" == e.charAt(0)) {
                var h = Number("0" + e.substr(1));
                (0, window.isNaN)(h) || (g = String.fromCharCode(h))
            }
            g || (c.innerHTML = a + " ", g = c.firstChild.nodeValue.slice(0, -1));
            return b[a] = g
        })
    };
    var ec = function(a) {
        return fc[a] || (fc[a] = String(a).replace(/\-([a-z])/g, function(a, c) {
            return c.toUpperCase()
        }))
    };
    m.gc = function(a, b, c) {
        for (var d in a)
            if (b.call(c, a[d], d, a)) return d
    };
    m.hc = function(a, b) {
        for (var c in a)
            if (a[c] == b) return !0;
        return !1
    };
    var ic = function(a, b) {
        var c = (0, m.v)("I18N_PLURAL_RULES") || function(a) {
            return 1 == a ? "one" : "other"
        };
        return (c = a["case" + b] || a[c(b)]) ? c.replace("#", b.toString()) : b + ""
    };
    var jc = function(a, b) {
        return a === b
    };
    m.kc = function(a, b) {
        m.na.sort.call(a, b || m.$b)
    };
    m.lc = function(a, b) {
        return 0 <= (0, m.la)(a, b)
    };
    m.mc = function(a, b, c) {
        for (var d = (0, m.q)(a) ? a.split("") : a, e = a.length - 1; 0 <= e; e--)
            if (e in d && b.call(c, d[e], e, a)) return e;
        return -1
    };
    var nc = function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    m.oc = function(a) {
        return null == a ? "" : String(a)
    };
    m.pc = function(a) {
        return -1 != a.indexOf("&") ? "document" in m.ca ? cc(a) : bc(a) : a
    };
    m.qc = function(a) {
        if (!rc.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(sc, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(tc, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(uc, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(vc, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(wc, "&#39;"));
        return a
    };
    m.xc = function(a, b) {
        var c = String(a).toLowerCase(),
            d = String(b).toLowerCase();
        return c < d ? -1 : c == d ? 0 : 1
    };
    m.yc = function(a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    };
    m.zc = function(a) {
        return /^[\s\xa0]*$/.test(a)
    };
    m.Ac = function(a) {
        return a[m.Kb] || (a[m.Kb] = ++Bc)
    };
    m.Cc = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    };
    m.Dc = function(a) {
        var b = (0, m.ea)(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    };
    m.Ec = function(a) {
        return void 0 !== a
    };
    m.Fc = function(a, b) {
        return a.dataset ? ec(b) in a.dataset : a.hasAttribute ? !!a.hasAttribute("data-" + b) : !!a.getAttribute("data-" + b)
    };
    m.Gc = function(a, b) {
        a.dataset ? delete a.dataset[ec(b)] : a.removeAttribute("data-" + b)
    };
    m.H = function(a, b) {
        return a.dataset ? a.dataset[ec(b)] : a.getAttribute("data-" + b)
    };
    m.Hc = function(a, b, c) {
        a.dataset ? a.dataset[ec(b)] = c : a.setAttribute("data-" + b, c)
    };
    m.Ic = function(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var g = 0; g < Jc.length; g++) c = Jc[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var Kc = function(a) {
        var b = (0, m.ea)(a);
        if ("object" == b || "array" == b) {
            if (a.clone) return a.clone();
            var b = "array" == b ? [] : {},
                c;
            for (c in a) b[c] = Kc(a[c]);
            return b
        }
        return a
    };
    m.Lc = function(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    };
    m.Mc = function(a, b) {
        return b in a ? a[b] : void 0
    };
    m.Nc = function(a) {
        for (var b in a) return !1;
        return !0
    };
    m.Oc = function(a, b) {
        var c = (0, m.gc)(a, b, void 0);
        return c && a[c]
    };
    m.Pc = function(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = d;
        return b
    };
    m.Qc = function(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    };
    var Rc = function(a) {
        for (var b in a) return a[b]
    };
    m.Sc = function(a) {
        var b = 0,
            c;
        for (c in a) b++;
        return b
    };
    m.Tc = function(a, b) {
        var c = {},
            d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    };
    m.Uc = function(a) {
        return new m.Ma(a.name, a.deps, a.page, a.init, a.dispose)
    };
    m.Vc = function(a) {
        for (var b = 0, c = a.length; b < c; b++)(0, m.Rb)(a[b])
    };
    m.Wc = function(a) {
        m.Qb ? window[a] = void 0 : delete window[a]
    };
    m.Xc = function(a, b) {
        return ic(a in m.za ? m.za[a] : {}, b)
    };
    m.Yc = function(a, b, c) {
        var d = b || {};
        if (a = a in m.za ? m.za[a] : c)
            for (var e in d) a = a.replace(RegExp("\\$" + e, "gi"), function() {
                return d[e]
            });
        return a
    };
    m.Zc = function(a) {
        window.clearInterval(a)
    };
    m.$c = function(a, b) {
        (0, m.ga)(a) && (a = (0, m.wa)(a));
        return window.setInterval(a, b)
    };
    m.ad = function(a) {
        return a in m.va ? m.va[a] : void 0
    };
    m.bd = function(a, b, c) {
        if (!(0, m.Dc)(a) || !(0, m.Dc)(b) || a.length != b.length) return !1;
        var d = a.length;
        c = c || jc;
        for (var e = 0; e < d; e++)
            if (!c(a[e], b[e])) return !1;
        return !0
    };
    m.cd = function(a) {
        for (var b = {}, c = 0, d = 0; d < a.length;) {
            var e = a[d++],
                g = (0, m.Cc)(e) ? "o" + (0, m.Ac)(e) : (typeof e).charAt(0) + e;
            Object.prototype.hasOwnProperty.call(b, g) || (b[g] = !0, a[c++] = e)
        }
        a.length = c
    };
    m.dd = function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c],
                e;
            if ((0, m.fa)(d) || (e = (0, m.Dc)(d)) && Object.prototype.hasOwnProperty.call(d, "callee")) a.push.apply(a, d);
            else if (e)
                for (var g = a.length, h = d.length, k = 0; k < h; k++) a[g + k] = d[k];
            else a.push(d)
        }
    };
    m.ed = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };
    m.fd = function(a) {
        return m.na.concat.apply(m.na, arguments)
    };
    m.gd = function(a) {
        if (!(0, m.fa)(a))
            for (var b = a.length - 1; 0 <= b; b--) delete a[b];
        a.length = 0
    };
    m.hd = function(a) {
        return 0 == a.length
    };
    m.id = function(a, b) {
        var c = (0, m.mc)(a, b, void 0);
        return 0 > c ? null : (0, m.q)(a) ? a.charAt(c) : a[c]
    };
    var jd = function(a) {
        var b = (0, m.q)(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
        return a.replace(RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
            return b + e.toUpperCase()
        })
    };
    var kd = function(a) {
        return String(a).replace(/\-([a-z])/g, function(a, c) {
            return c.toUpperCase()
        })
    };
    var ld = function(a, b) {
        for (var c = 0, d = (0, m.yc)(String(a)).split("."), e = (0, m.yc)(String(b)).split("."), g = Math.max(d.length, e.length), h = 0; 0 == c && h < g; h++) {
            var k = d[h] || "",
                p = e[h] || "",
                u = RegExp("(\\d*)(\\D*)", "g"),
                z = RegExp("(\\d*)(\\D*)", "g");
            do {
                var F = u.exec(k) || ["", "", ""],
                    K = z.exec(p) || ["", "", ""];
                if (0 == F[0].length && 0 == K[0].length) break;
                c = nc(0 == F[1].length ? 0 : (0, window.parseInt)(F[1], 10), 0 == K[1].length ? 0 : (0, window.parseInt)(K[1], 10)) || nc(0 == F[2].length, 0 == K[2].length) || nc(F[2], K[2])
            } while (0 == c)
        }
        return c
    };
    m.md = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ (0, m.C)()).toString(36)
    };
    m.nd = function(a, b) {
        var c = (0, m.Ec)(void 0) ? a.toFixed(void 0) : String(a),
            d = c.indexOf("."); - 1 == d && (d = c.length);
        d = Math.max(0, b - d);
        return Array(d + 1).join("0") + c
    };
    m.od = function(a) {
        return (0, window.decodeURIComponent)(a.replace(/\+/g, " "))
    };
    m.pd = function(a) {
        return (0, window.encodeURIComponent)(String(a))
    };
    m.qd = function(a, b) {
        for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift();
        return d + c.join("%s")
    };
    m.rd = function(a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    };
    var sd = function(a) {
        Error.captureStackTrace ? Error.captureStackTrace(this, sd) : this.stack = Error().stack || "";
        a && (this.message = String(a))
    };
    m.td = function(a) {
        return "number" == typeof a
    };
    m.ud = function(a) {
        a.getInstance = function() {
            return a.nx ? a.nx : a.nx = new a
        }
    };
    var vd = function(a) {
        if (a.classList) return a.classList;
        a = a.className;
        return (0, m.q)(a) && a.match(/\S+/g) || []
    };
    m.wd = function(a, b) {
        return a.classList ? a.classList.contains(b) : (0, m.lc)(vd(a), b)
    };
    m.I = function(a, b) {
        a.classList ? a.classList.add(b) : (0, m.wd)(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
    };
    m.xd = function(a, b) {
        if (a.classList)(0, m.A)(b, function(b) {
            (0, m.I)(a, b)
        });
        else {
            var c = {};
            (0, m.A)(vd(a), function(a) {
                c[a] = !0
            });
            (0, m.A)(b, function(a) {
                c[a] = !0
            });
            a.className = "";
            for (var d in c) a.className += 0 < a.className.length ? " " + d : d
        }
    };
    m.J = function(a, b) {
        a.classList ? a.classList.remove(b) : (0, m.wd)(a, b) && (a.className = (0, m.Lb)(vd(a), function(a) {
            return a != b
        }).join(" "))
    };
    m.yd = function(a, b) {
        a.classList ? (0, m.A)(b, function(b) {
            (0, m.J)(a, b)
        }) : a.className = (0, m.Lb)(vd(a), function(a) {
            return !(0, m.lc)(b, a)
        }).join(" ")
    };
    m.zd = function(a, b, c) {
        c ? (0, m.I)(a, b) : (0, m.J)(a, b)
    };
    m.Ad = function(a, b) {
        var c = !(0, m.wd)(a, b);
        (0, m.zd)(a, b, c);
        return c
    };
    m.Bd = function(a, b, c) {
        (0, m.J)(a, b);
        (0, m.I)(a, c)
    };
    var Cd = function(a) {
        a = a.className;
        return (0, m.q)(a) && a.match(/\S+/g) || []
    };
    m.L = function(a, b) {
        var c = Cd(a),
            d = (0, m.pa)(arguments, 1),
            e = c.length + d.length;
        Dd(c, d);
        d = c.join(" ");
        a.className = d;
        return c.length == e
    };
    m.M = function(a, b) {
        var c = Cd(a),
            d = (0, m.pa)(arguments, 1),
            c = Ed(c, d).join(" ");
        a.className = c
    };
    var Dd = function(a, b) {
        for (var c = 0; c < b.length; c++)(0, m.lc)(a, b[c]) || a.push(b[c])
    };
    var Ed = function(a, b) {
        return (0, m.Lb)(a, function(a) {
            return !(0, m.lc)(b, a)
        })
    };
    var Fd = function(a, b, c) {
        for (var d = Cd(a), e = !1, g = 0; g < d.length; g++) d[g] == b && ((0, m.ac)(d, g--, 1), e = !0);
        e && (d.push(c), b = d.join(" "), a.className = b)
    };
    m.Gd = function(a, b, c) {
        var d = Cd(a);
        (0, m.q)(b) ? (0, m.ka)(d, b) : (0, m.fa)(b) && (d = Ed(d, b));
        (0, m.q)(c) && !(0, m.lc)(d, c) ? d.push(c): (0, m.fa)(c) && Dd(d, c);
        b = d.join(" ");
        a.className = b
    };
    m.Hd = function(a, b) {
        return (0, m.lc)(Cd(a), b)
    };
    m.Id = function(a, b, c) {
        c ? (0, m.L)(a, b) : (0, m.M)(a, b)
    };
    m.Jd = function(a, b) {
        var c = !(0, m.Hd)(a, b);
        (0, m.Id)(a, b, c);
        return c
    };
    m.Kd = function(a) {
        return a
    };
    m.Ld = function(a, b, c) {
        return Math.min(Math.max(a, b), c)
    };
    var Md = function(a, b, c) {
        return a + c * (b - a)
    };
    m.Nd = function(a, b) {
        this.x = (0, m.Ec)(a) ? a : 0;
        this.y = (0, m.Ec)(b) ? b : 0
    };
    m.Od = function(a, b) {
        var c = a.x - b.x,
            d = a.y - b.y;
        return Math.sqrt(c * c + d * d)
    };
    m.Pd = function(a, b) {
        return new m.Nd(a.x - b.x, a.y - b.y)
    };
    m.Qd = function(a, b) {
        this.width = a;
        this.height = b
    };
    m.Rd = function(a, b) {
        return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
    };
    m.Sd = function() {
        return m.ca.navigator ? m.ca.navigator.userAgent : null
    };
    var Td = function() {
        return m.ca.navigator
    };
    var Ud = function() {
        var a = m.ca.document;
        return a ? a.documentMode : void 0
    };
    m.Vd = function(a) {
        return Wd[a] || (Wd[a] = 0 <= ld(Xd, a))
    };
    m.Yd = function(a) {
        return m.Zd && $d >= a
    };
    m.ae = function(a) {
        return a ? new m.be((0, m.ce)(a)) : de || (de = new m.be)
    };
    m.D = function(a) {
        return (0, m.q)(a) ? window.document.getElementById(a) : a
    };
    var ee = function(a) {
        return (0, m.fe)("IMG", null, a)
    };
    m.N = function(a, b) {
        var c = b || window.document;
        return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : (0, m.fe)("*", a, b)
    };
    m.O = function(a, b) {
        var c = b || window.document,
            d = null;
        return (d = c.querySelectorAll && c.querySelector ? c.querySelector("." + a) : (0, m.fe)("*", a, b)[0]) || null
    };
    m.fe = function(a, b, c) {
        var d = window.document;
        c = c || d;
        a = a && "*" != a ? a.toUpperCase() : "";
        if (c.querySelectorAll && c.querySelector && (a || b)) return c.querySelectorAll(a + (b ? "." + b : ""));
        if (b && c.getElementsByClassName) {
            c = c.getElementsByClassName(b);
            if (a) {
                for (var d = {}, e = 0, g = 0, h; h = c[g]; g++) a == h.nodeName && (d[e++] = h);
                d.length = e;
                return d
            }
            return c
        }
        c = c.getElementsByTagName(a || "*");
        if (b) {
            d = {};
            for (g = e = 0; h = c[g]; g++) a = h.className, "function" == typeof a.split && (0, m.lc)(a.split(/\s+/), b) && (d[e++] = h);
            d.length = e;
            return d
        }
        return c
    };
    m.ge = function(a, b) {
        (0, m.Qa)(b, function(b, d) {
            "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in he ? a.setAttribute(he[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
        })
    };
    m.ie = function(a) {
        return je(a || window)
    };
    var je = function(a) {
        a = a.document;
        a = ke(a) ? a.documentElement : a.body;
        return new m.Qd(a.clientWidth, a.clientHeight)
    };
    m.le = function(a) {
        var b = (0, m.me)(a);
        a = a.parentWindow || a.defaultView;
        return m.Zd && (0, m.Vd)("10") && a.pageYOffset != b.scrollTop ? new m.Nd(b.scrollLeft, b.scrollTop) : new m.Nd(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    };
    m.me = function(a) {
        return !m.ne && ke(a) ? a.documentElement : a.body || a.documentElement
    };
    m.oe = function(a) {
        return a ? a.parentWindow || a.defaultView : window
    };
    m.pe = function(a, b, c) {
        return qe(window.document, arguments)
    };
    var qe = function(a, b) {
        var c = b[0],
            d = b[1];
        if (!re && d && (d.name || d.type)) {
            c = ["<", c];
            d.name && c.push(' name="', (0, m.qc)(d.name), '"');
            if (d.type) {
                c.push(' type="', (0, m.qc)(d.type), '"');
                var e = {};
                (0, m.Ic)(e, d);
                delete e.type;
                d = e
            }
            c.push(">");
            c = c.join("")
        }
        c = a.createElement(c);
        d && ((0, m.q)(d) ? c.className = d : (0, m.fa)(d) ? m.L.apply(null, [c].concat(d)) : (0, m.ge)(c, d));
        2 < b.length && se(a, c, b, 2);
        return c
    };
    var se = function(a, b, c, d) {
        function e(c) {
            c && b.appendChild((0, m.q)(c) ? a.createTextNode(c) : c)
        }
        for (; d < c.length; d++) {
            var g = c[d];
            !(0, m.Dc)(g) || (0, m.Cc)(g) && 0 < g.nodeType ? e(g) : (0, m.A)(te(g) ? (0, m.ed)(g) : g, e)
        }
    };
    m.ue = function(a) {
        return window.document.createElement(a)
    };
    m.ve = function(a) {
        return window.document.createTextNode(String(a))
    };
    m.we = function(a) {
        var b = window.document,
            c = b.createElement("div");
        m.Zd ? (c.innerHTML = "<br>" + a, c.removeChild(c.firstChild)) : c.innerHTML = a;
        if (1 == c.childNodes.length) return c.removeChild(c.firstChild);
        for (a = b.createDocumentFragment(); c.firstChild;) a.appendChild(c.firstChild);
        return a
    };
    var ke = function(a) {
        return "CSS1Compat" == a.compatMode
    };
    m.xe = function(a, b) {
        a.appendChild(b)
    };
    m.ye = function(a, b) {
        se((0, m.ce)(a), a, arguments, 1)
    };
    m.ze = function(a) {
        for (var b; b = a.firstChild;) a.removeChild(b)
    };
    m.Ae = function(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b)
    };
    m.Be = function(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
    };
    m.Ce = function(a, b, c) {
        a.insertBefore(b, a.childNodes[c] || null)
    };
    m.De = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    m.Ee = function(a, b) {
        var c = b.parentNode;
        c && c.replaceChild(a, b)
    };
    m.Fe = function(a) {
        return Ge && void 0 != a.children ? a.children : (0, m.Lb)(a.childNodes, function(a) {
            return 1 == a.nodeType
        })
    };
    m.He = function(a) {
        return void 0 != a.firstElementChild ? a.firstElementChild : Ie(a.firstChild, !0)
    };
    m.Je = function(a) {
        return void 0 != a.lastElementChild ? a.lastElementChild : Ie(a.lastChild, !1)
    };
    m.Ke = function(a) {
        return void 0 != a.nextElementSibling ? a.nextElementSibling : Ie(a.nextSibling, !0)
    };
    m.Le = function(a) {
        return void 0 != a.previousElementSibling ? a.previousElementSibling : Ie(a.previousSibling, !1)
    };
    var Ie = function(a, b) {
        for (; a && 1 != a.nodeType;) a = b ? a.nextSibling : a.previousSibling;
        return a
    };
    var Me = function(a) {
        if (!a) return null;
        if (a.firstChild) return a.firstChild;
        for (; a && !a.nextSibling;) a = a.parentNode;
        return a ? a.nextSibling : null
    };
    var Ne = function(a) {
        if (!a) return null;
        if (!a.previousSibling) return a.parentNode;
        for (a = a.previousSibling; a && a.lastChild;) a = a.lastChild;
        return a
    };
    m.Oe = function(a) {
        return (0, m.Cc)(a) && 1 == a.nodeType
    };
    m.Pe = function(a) {
        if (Qe && !(m.Zd && (0, m.Vd)("9") && !(0, m.Vd)("10") && m.ca.SVGElement && a instanceof m.ca.SVGElement)) return a.parentElement;
        a = a.parentNode;
        return (0, m.Oe)(a) ? a : null
    };
    m.Re = function(a, b) {
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    m.ce = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    };
    m.Se = function(a, b) {
        if ("textContent" in a) a.textContent = b;
        else if (3 == a.nodeType) a.data = b;
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
            a.firstChild.data = b
        } else(0, m.ze)(a), a.appendChild((0, m.ce)(a).createTextNode(String(b)))
    };
    var Te = function(a, b) {
        var c = [];
        return Ue(a, b, c, !0) ? c[0] : void 0
    };
    var Ue = function(a, b, c, d) {
        if (null != a)
            for (a = a.firstChild; a;) {
                if (b(a) && (c.push(a), d) || Ue(a, b, c, d)) return !0;
                a = a.nextSibling
            }
        return !1
    };
    m.Ve = function(a) {
        if (We && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
        else {
            var b = [];
            Xe(a, b, !0);
            a = b.join("")
        }
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        We || (a = a.replace(/ +/g, " "));
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    };
    var Xe = function(a, b, c) {
        if (!(a.nodeName in Ye))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in Ze) b.push(Ze[a.nodeName]);
        else
            for (a = a.firstChild; a;) Xe(a, b, c), a = a.nextSibling
    };
    var te = function(a) {
        if (a && "number" == typeof a.length) {
            if ((0, m.Cc)(a)) return "function" == typeof a.item || "string" == typeof a.item;
            if ((0, m.ga)(a)) return "function" == typeof a.item
        }
        return !1
    };
    m.$e = function(a, b, c) {
        if (!b && !c) return null;
        var d = b ? b.toUpperCase() : null;
        return (0, m.af)(a, function(a) {
            return (!d || a.nodeName == d) && (!c || (0, m.Hd)(a, c))
        }, !0)
    };
    m.Q = function(a, b) {
        return (0, m.$e)(a, null, b)
    };
    m.af = function(a, b, c, d) {
        c || (a = a.parentNode);
        c = null == d;
        for (var e = 0; a && (c || e <= d);) {
            if (b(a)) return a;
            a = a.parentNode;
            e++
        }
        return null
    };
    m.be = function(a) {
        this.b = a || m.ca.document || window.document
    };
    var bf = function(a) {
        return ke(a.b)
    };
    m.cf = function(a) {
        a = a.b;
        return a.parentWindow || a.defaultView
    };
    m.df = function(a) {
        return (0, m.le)(a.b)
    };
    var ef = function(a, b) {
        if ((0, m.v)("EVENTS_TRACKER_INSTALLED")) {
            var c = ff[a];
            if (!c) {
                var d = window._gaq._getAsyncTracker("eventsPageTracker");
                if (!d) return;
                window._gaq.push(function() {
                    c = d._createEventTracker(a);
                    ff[a] = c
                })
            }
            window._gaq.push(function() {
                c._trackEvent(b, void 0, void 0)
            })
        }
    };
    m.gf = function(a, b, c, d, e, g, h) {
        var k = "";
        a && (k += a + ":");
        c && (k += "//", b && (k += b + "@"), k += c, d && (k += ":" + d));
        e && (k += e);
        g && (k += "?" + g);
        h && (k += "#" + h);
        return k
    };
    m.hf = function(a) {
        if (jf) {
            jf = !1;
            var b = m.ca.location;
            if (b) {
                var c = b.href;
                if (c && (c = (0, m.kf)(c)) && c != b.hostname) throw jf = !0, Error();
            }
        }
        return a.match(lf)
    };
    m.kf = function(a) {
        return (a = (0, m.hf)(a)[3] || null) && (0, window.decodeURIComponent)(a)
    };
    m.mf = function(a) {
        return (a = (0, m.hf)(a)[5] || null) && (0, window.decodeURIComponent)(a)
    };
    var nf = function() {
        var a = (0, m.hf)(window.document.location.href);
        return (0, m.gf)(a[1], a[2], a[3], a[4])
    };
    var of = function(a) {
        a = (0, m.hf)(a);
        return (0, m.gf)(null, null, null, null, a[5], a[6], a[7])
    };
    m.pf = function(a) {
        if (a[1]) {
            var b = a[0],
                c = b.indexOf("#");
            0 <= c && (a.push(b.substr(c)), a[0] = b = b.substr(0, c));
            c = b.indexOf("?");
            0 > c ? a[1] = "?" : c == b.length - 1 && (a[1] = void 0)
        }
        return a.join("")
    };
    var qf = function(a, b, c) {
        if ((0, m.fa)(b))
            for (var d = 0; d < b.length; d++) qf(a, String(b[d]), c);
        else null != b && c.push("&", a, "" === b ? "" : "=", (0, m.pd)(b))
    };
    var rf = function(a, b, c) {
        Math.max(b.length - (c || 0), 0);
        for (c = c || 0; c < b.length; c += 2) qf(b[c], b[c + 1], a);
        return a
    };
    var sf = function(a, b) {
        for (var c in b) qf(c, b[c], a);
        return a
    };
    var tf = function(a, b) {
        return (0, m.pf)(2 == arguments.length ? rf([a], arguments[1], 0) : rf([a], arguments, 1))
    };
    m.uf = function(a, b) {
        return (0, m.pf)(sf([a], b))
    };
    var vf = function(a, b) {
        for (var c = a.split(b), d = {}, e = 0, g = c.length; e < g; e++) {
            var h = c[e].split("=");
            if (1 == h.length && h[0] || 2 == h.length) {
                var k = (0, m.od)(h[0] || ""),
                    h = (0, m.od)(h[1] || "");
                k in d ? (0, m.fa)(d[k]) ? (0, m.dd)(d[k], h) : d[k] = [d[k], h] : d[k] = h
            }
        }
        return d
    };
    m.wf = function(a, b) {
        var c = [];
        (0, m.Qa)(a, function(a, b) {
            var g = (0, m.pd)(b),
                h;
            h = (0, m.fa)(a) ? a : [a];
            (0, m.A)(h, function(a) {
                "" == a ? c.push(g) : c.push(g + "=" + (0, m.pd)(a))
            })
        });
        return c.join(b)
    };
    m.xf = function(a) {
        "?" == a.charAt(0) && (a = a.substr(1));
        return vf(a, "&")
    };
    m.yf = function(a) {
        return -1 != a.indexOf("?") ? (a = (a || "").split("#")[0], a = a.split("?", 2), (0, m.xf)(1 < a.length ? a[1] : a[0])) : {}
    };
    m.zf = function(a) {
        "#" == a.charAt(0) && (a = "!" == a.charAt(1) ? a.substr(2) : a.substr(1));
        return (0, m.xf)(a)
    };
    m.Af = function(a) {
        a = sf([], a);
        a[0] = "";
        return a.join("")
    };
    m.Bf = function(a, b) {
        var c = a.split("#", 2);
        a = c[0];
        var c = 1 < c.length ? "#" + c[1] : "",
            d = a.split("?", 2);
        a = d[0];
        var d = (0, m.xf)(d[1] || ""),
            e;
        for (e in b) d[e] = b[e];
        return (0, m.uf)(a, d) + c
    };
    m.Cf = function(a, b) {
        var c = "";
        "#" == a.charAt(0) && (c = "!" == a.charAt(1) ? a.substr(0, 2) : a.substr(0, 1));
        var d = (0, m.zf)(a),
            e;
        for (e in b) d[e] = b[e];
        return c + (0, m.Af)(d)
    };
    var Df = function(a) {
        a = (0, m.Ef)(a);
        a = null === a ? null : a.split(".").reverse();
        return (null === a ? !1 : "com" == a[0] && a[1].match(/^youtube(?:-nocookie)?$/) ? !0 : !1) || (null === a ? !1 : "google" == a[1] ? !0 : "google" == a[2] ? "au" == a[0] && "com" == a[1] ? !0 : "uk" == a[0] && "co" == a[1] ? !0 : !1 : !1)
    };
    m.Ff = function(a, b, c) {
        (0, m.Gf)(a, b, c)
    };
    m.Gf = function(a, b, c) {
        ef(a, b || "null");
        (0, m.Hf)("a=" + a + (b ? "&" + b : "").replace(/\//g, "&"), c)
    };
    m.Hf = function(a, b) {
        (0, m.Ua)("/gen_204?" + a, b)
    };
    m.If = function(a, b, c, d, e, g) {
        var h = {};
        b && (h.v = b);
        c && (h.list = c);
        d && (h.url = d);
        a = {
            name: a,
            locale: e,
            feature: g
        };
        for (var k in h) a[k] = h[k];
        h = (0, m.uf)("/sharing_services", a);
        (0, m.Ua)(h)
    };
    m.Jf = function(a) {
        var b = a.__yt_uid_key;
        b || (b = Kf(), a.__yt_uid_key = b);
        return b
    };
    var Lf = function(a) {
        var b = a.cloneNode(!1);
        "TR" == b.tagName || "SELECT" == b.tagName ? (0, m.A)(a.childNodes, function(a) {
            b.appendChild(Lf(a))
        }) : b.innerHTML = a.innerHTML;
        return b
    };
    m.Mf = function(a) {
        a = Lf((0, m.D)(a));
        a.removeAttribute("id");
        return a
    };
    m.Nf = function(a, b, c) {
        a = (0, m.fe)(a, b, c);
        return a.length ? a[0] : null
    };
    m.Of = function(a, b) {
        "disabled" in a && (a.disabled = !b);
        1 == a.nodeType && (0, m.zd)(a, "disabled", !b);
        if (a.hasChildNodes())
            for (var c = 0, d; d = a.childNodes[c]; ++c)(0, m.Of)(d, b)
    };
    m.Pf = function(a, b) {
        var c = (0, m.D)(a),
            d = Qf(c, b),
            e = (0, m.yc)(c.innerHTML),
            g = (0, m.yc)(d);
        c.innerHTML = d;
        return e != g
    };
    var Qf = function(a, b) {
        function c(a) {
            for (var b = [], c = 0, d = z.length; c < d && 0 < a; c++) {
                var e = z[c];
                b.push(e.substring(0, a));
                a -= e.length
            }
            return b
        }

        function d(a) {
            var b = [],
                c, d = a.length;
            for (c = 0; c < d; c++) {
                b.push(a[c]);
                var e = u[c];
                !e || c == d - 1 && "br" == e.replace(/\W/g, "").toLowerCase() || b.push(e)
            }
            u[c] && u[c].match(/^<\s*\//) && b.push(u[c]);
            b = b.join("");
            return b.length < p.length ? b + "&hellip;" : b
        }

        function e(a) {
            h.innerHTML = a;
            a = (h.clientHeight || h.offsetHeight) <= k;
            h.innerHTML = "";
            return a
        }
        var g = (0, m.D)(a),
            h = Lf(g);
        a.parentNode.appendChild(h);
        h.style.whiteSpace = "normal";
        h.style.lineHeight = "1.5em";
        var k = Rf(h, b || 1),
            p = (0, m.H)(g, "original-html");
        p || (p = g.innerHTML.replace(/^\s+|\s+$/, ""), (0, m.Hc)(g, "original-html", p));
        if (e(p)) return (0, m.De)(h), p;
        for (var g = /<[^>]+>/g, u = p.match(g) || [], z = p.replace(g, "<wbr>").split("<wbr>"), g = 0, F = z.join("").length + 1, K = []; g < F;) {
            var P = g + Math.round((F - g) / 2),
                W = c(P);
            e(d(W)) ? (K = W, g = P + 1) : F = P - 1
        }(0, m.De)(h);
        return d(K)
    };
    var Rf = function(a, b) {
        for (var c = a.innerHTML, d = "", e = 0; e < b; e++) d += "&nbsp;<br>";
        a.innerHTML = d;
        d = a.clientHeight || a.offsetHeight;
        a.innerHTML = c;
        return d
    };
    m.Sf = function(a) {
        a = a.replace(/^[\s\xa0]+/, "");
        if (0 == (0, m.xc)("<tr", a.substr(0, 3))) return a = (0, m.we)("<table><tbody>" + a + "</tbody></table>"), (0, m.Nf)("tr", null, a);
        var b = window.document.createElement("div");
        b.innerHTML = a;
        return (0, m.He)(b)
    };
    m.Tf = function(a, b) {
        if (a in b) return b[a];
        var c = a.charAt(0).toUpperCase() + a.substr(1);
        if ("moz" + c in b) return b["moz" + c];
        if ("ms" + c in b) return b["ms" + c];
        if ("o" + c in b) return b["o" + c];
        if ("webkit" + c in b) return b["webkit" + c]
    };
    m.Uf = function(a, b) {
        var c;
        (0, m.Ob)(a, function(a) {
            c = (0, m.Tf)(a, b);
            return !!c
        });
        return c
    };
    var Vf = function(a) {
        (0, m.zd)(window.document.body, "hide-players", !0);
        a && (0, m.zd)(a, "preserve-players", !0)
    };
    var Wf = function() {
        (0, m.zd)(window.document.body, "hide-players", !1);
        var a = (0, m.N)("preserve-players");
        (0, m.A)(a, function(a) {
            (0, m.J)(a, "preserve-players")
        })
    };
    m.Xf = function(a) {
        if (a = a || window.event) {
            for (var b in a) b in Yf || (this[b] = a[b]);
            this.scale = a.scale;
            this.rotation = a.rotation;
            this.Wa = a;
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
            this.charCode = a.charCode || ("keypress" == this.type ? this.keyCode : 0);
            this.altKey = a.altKey;
            this.ctrlKey = a.ctrlKey;
            this.shiftKey = a.shiftKey;
            "MozMousePixelScroll" == this.type ? (this.wheelDeltaX = a.axis == a.HORIZONTAL_AXIS ? a.detail : 0, this.wheelDeltaY = a.axis == a.HORIZONTAL_AXIS ? 0 : a.detail) : window.opera ? (this.wheelDeltaX = 0, this.wheelDeltaY = a.detail) : 0 == a.wheelDelta % 120 ? "WebkitTransform" in window.document.documentElement.style ? window.chrome && 0 == window.navigator.platform.indexOf("Mac") ? (this.wheelDeltaX = a.wheelDeltaX /
                -30, this.wheelDeltaY = a.wheelDeltaY / -30) : (this.wheelDeltaX = a.wheelDeltaX / -1.2, this.wheelDeltaY = a.wheelDeltaY / -1.2) : (this.wheelDeltaX = 0, this.wheelDeltaY = a.wheelDelta / -1.6) : (this.wheelDeltaX = a.wheelDeltaX / -3, this.wheelDeltaY = a.wheelDeltaY / -3);
            this.kq = a.pageX;
            this.lq = a.pageY
        }
    };
    var Zf = function(a) {
        if (window.document.body && window.document.documentElement) {
            var b = window.document.body.scrollTop + window.document.documentElement.scrollTop;
            a.kq = a.clientX + (window.document.body.scrollLeft + window.document.documentElement.scrollLeft);
            a.lq = a.clientY + b
        }
    };
    m.$f = function(a) {
        (0, m.Ec)(a.kq) || Zf(a);
        return a.kq
    };
    m.ag = function(a) {
        (0, m.Ec)(a.lq) || Zf(a);
        return a.lq
    };
    var bg = function(a, b, c, d) {
        return (0, m.gc)(cg, function(e) {
            return e[0] == a && e[1] == b && e[2] == c && e[4] == !!d
        })
    };
    m.R = function(a, b, c, d) {
        if (!a || !a.addEventListener && !a.attachEvent) return "";
        d = !!d;
        var e = bg(a, b, c, d);
        if (e) return e;
        var e = ++dg.count + "",
            g = !("mouseenter" != b && "mouseleave" != b || !a.addEventListener || "onmouseenter" in window.document),
            h;
        h = g ? function(d) {
            d = new m.Xf(d);
            if (!(0, m.af)(d.relatedTarget, function(b) {
                    return b == a
                }, !0)) return d.currentTarget = a, d.type = b, c.call(a, d)
        } : function(b) {
            b = new m.Xf(b);
            b.currentTarget = a;
            return c.call(a, b)
        };
        h = (0, m.wa)(h);
        cg[e] = [a, b, c, h, d];
        a.addEventListener ? "mouseenter" == b && g ? a.addEventListener("mouseover",
            h, d) : "mouseleave" == b && g ? a.addEventListener("mouseout", h, d) : "mousewheel" == b && "MozBoxSizing" in window.document.documentElement.style ? a.addEventListener("MozMousePixelScroll", h, d) : a.addEventListener(b, h, d) : a.attachEvent("on" + b, h);
        return e
    };
    m.eg = function(a, b, c) {
        var d;
        return d = (0, m.R)(a, b, function() {
            (0, m.S)(d);
            c.apply(a, arguments)
        }, void 0)
    };
    m.fg = function(a, b, c, d, e) {
        return gg(a, b, c, function(a) {
            return a.nodeName.toLowerCase() === d.toLowerCase() && (!e || (0, m.wd)(a, e))
        })
    };
    m.hg = function(a, b, c, d) {
        return gg(a, b, c, function(a) {
            return (0, m.wd)(a, d)
        })
    };
    var gg = function(a, b, c, d) {
        var e = a || window.document;
        return (0, m.R)(e, b, function(a) {
            var b = (0, m.af)(a.target, function(a) {
                return a === e || d(a)
            }, !0);
            b && b !== e && !b.disabled && (a.currentTarget = b, c.call(b, a))
        })
    };
    m.ig = function(a, b, c, d) {
        (a = bg(a, b, c, !!d)) && (0, m.S)(a)
    };
    m.S = function(a) {
        a && ("string" == typeof a && (a = [a]), (0, m.A)(a, function(a) {
            if (a in cg) {
                var c = cg[a],
                    d = c[0],
                    e = c[1],
                    g = c[3],
                    c = c[4];
                d.removeEventListener ? d.removeEventListener(e, g, c) : d.detachEvent && d.detachEvent("on" + e, g);
                delete cg[a]
            }
        }))
    };
    m.jg = function(a) {
        for (var b in cg) cg[b][0] == a && (0, m.S)(b)
    };
    m.kg = function(a, b) {
        if (window.document.createEvent) {
            var c = window.document.createEvent("HTMLEvents");
            c.initEvent(b, !0, !0);
            a.dispatchEvent(c)
        } else c = window.document.createEventObject(), a.fireEvent("on" + b, c)
    };
    var lg = function() {
        var a = window.ytbuffer;
        if (a) {
            if (a = a.bufferedClick) {
                window.document.removeEventListener ? window.document.removeEventListener("click", window.ytbuffer.handleClick, !1) : window.document.detachEvent("onclick", window.ytbuffer.handleClick);
                var b = (0, m.N)("yt-is-buffered");
                (0, m.A)(b, function(a) {
                    (0, m.M)(a, "yt-is-buffered")
                });
                (0, m.kg)(a.target || a.srcElement, "click");
                (0, m.Ff)("buffer_click", (0, m.Af)({
                    page_name: (0, m.v)("PAGE_NAME")
                }))
            }(0, m.Wc)("ytbuffer")
        }
    };
    m.mg = function(a) {
        a = a || {};
        this.url = a.url || "";
        this.urlV8 = a.url_v8 || "";
        this.urlV9As2 = a.url_v9as2 || "";
        this.args = a.args || (0, m.Lc)(ng);
        this.assets = a.assets || {};
        this.attrs = a.attrs || (0, m.Lc)(og);
        this.params = a.params || (0, m.Lc)(pg);
        this.minVersion = a.min_version || "8.0.0";
        this.fallback = a.fallback || null;
        this.fallbackMessage = a.fallbackMessage || null;
        this.html5 = !!a.html5;
        this.disable = a.disable || {};
        this.loaded = !!a.loaded
    };
    m.Eb = function(a) {
        a instanceof m.mg || (a = new m.mg(a));
        return a
    };
    var qg = function() {
        return m.ne ? "Webkit" : m.rg ? "Moz" : m.Zd ? "ms" : m.sg ? "O" : null
    };
    m.tg = function() {
        return m.ne ? "-webkit" : m.rg ? "-moz" : m.Zd ? "-ms" : m.sg ? "-o" : null
    };
    m.ug = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    m.vg = function(a, b) {
        (0, m.Cc)(b) ? (a.top -= b.top, a.right += b.right, a.bottom += b.bottom, a.left -= b.left) : (a.top -= b, a.right += void 0, a.bottom += void 0, a.left -= window.NaN)
    };
    var wg = function(a, b) {
        return a && b ? b instanceof m.ug ? b.left >= a.left && b.right <= a.right && b.top >= a.top && b.bottom <= a.bottom : b.x >= a.left && b.x <= a.right && b.y >= a.top && b.y <= a.bottom : !1
    };
    var xg = function(a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom
    };
    m.yg = function(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    };
    m.zg = function(a) {
        return new m.yg(a.left, a.top, a.right - a.left, a.bottom - a.top)
    };
    m.Ag = function(a, b, c) {
        (0, m.q)(b) ? Bg(a, c, b): (0, m.Qa)(b, (0, m.E)(Bg, a))
    };
    var Bg = function(a, b, c) {
        (c = Cg(a, c)) && (a.style[c] = b)
    };
    var Cg = function(a, b) {
        var c = kd(b);
        if (void 0 === a.style[c]) {
            var d = qg() + jd(b);
            if (void 0 !== a.style[d]) return d
        }
        return c
    };
    m.Dg = function(a, b) {
        var c = (0, m.ce)(a);
        return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
    };
    m.Eg = function(a, b) {
        return (0, m.Dg)(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    };
    m.Fg = function(a) {
        return (0, m.Eg)(a, "position")
    };
    m.Gg = function(a, b, c) {
        var d, e = m.rg && (m.Hg || Ig) && (0, m.Vd)("1.9");
        b instanceof m.Nd ? (d = b.x, b = b.y) : (d = b, b = c);
        a.style.left = Jg(d, e);
        a.style.top = Jg(b, e)
    };
    var Kg = function(a) {
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
        m.Zd && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    };
    m.Lg = function(a) {
        if (m.Zd && !(0, m.Yd)(8)) return a.offsetParent;
        var b = (0, m.ce)(a),
            c = (0, m.Eg)(a, "position"),
            d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (c = (0, m.Eg)(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
        return null
    };
    m.Mg = function(a) {
        for (var b = new m.ug(0, window.Infinity, window.Infinity, 0), c = (0, m.ae)(a), d = c.b.body, e = c.b.documentElement, g = (0, m.me)(c.b); a = (0, m.Lg)(a);)
            if (!(m.Zd && 0 == a.clientWidth || m.ne && 0 == a.clientHeight && a == d || a == d || a == e || "visible" == (0, m.Eg)(a, "overflow"))) {
                var h = (0, m.Ng)(a),
                    k;
                k = a;
                if (m.rg && !(0, m.Vd)("1.9")) {
                    var p = (0, window.parseFloat)((0, m.Dg)(k, "borderLeftWidth"));
                    if ((0, m.Og)(k)) var u = k.offsetWidth - k.clientWidth - p - (0, window.parseFloat)((0, m.Dg)(k, "borderRightWidth")),
                        p = p + u;
                    k = new m.Nd(p, (0, window.parseFloat)((0, m.Dg)(k,
                        "borderTopWidth")))
                } else k = new m.Nd(k.clientLeft, k.clientTop);
                h.x += k.x;
                h.y += k.y;
                b.top = Math.max(b.top, h.y);
                b.right = Math.min(b.right, h.x + a.clientWidth);
                b.bottom = Math.min(b.bottom, h.y + a.clientHeight);
                b.left = Math.max(b.left, h.x)
            } d = g.scrollLeft;
        g = g.scrollTop;
        b.left = Math.max(b.left, d);
        b.top = Math.max(b.top, g);
        c = (0, m.ie)((0, m.cf)(c));
        b.right = Math.min(b.right, d + c.width);
        b.bottom = Math.min(b.bottom, g + c.height);
        return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
    };
    m.Ng = function(a) {
        var b, c = (0, m.ce)(a),
            d = (0, m.Eg)(a, "position"),
            e = m.rg && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY),
            g = new m.Nd(0, 0),
            h;
        b = c ? (0, m.ce)(c) : window.document;
        h = !m.Zd || (0, m.Yd)(9) || bf((0, m.ae)(b)) ? b.documentElement : b.body;
        if (a == h) return g;
        if (a.getBoundingClientRect) b = Kg(a), a = (0, m.df)((0, m.ae)(c)), g.x = b.left + a.x, g.y = b.top + a.y;
        else if (c.getBoxObjectFor && !e) b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(h), g.x = b.screenX - a.screenX,
            g.y = b.screenY - a.screenY;
        else {
            b = a;
            do {
                g.x += b.offsetLeft;
                g.y += b.offsetTop;
                b != a && (g.x += b.clientLeft || 0, g.y += b.clientTop || 0);
                if (m.ne && "fixed" == (0, m.Fg)(b)) {
                    g.x += c.body.scrollLeft;
                    g.y += c.body.scrollTop;
                    break
                }
                b = b.offsetParent
            } while (b && b != a);
            if (m.sg || m.ne && "absolute" == d) g.y -= c.body.offsetTop;
            for (b = a;
                (b = (0, m.Lg)(b)) && b != c.body && b != h;) g.x -= b.scrollLeft, m.sg && "TR" == b.tagName || (g.y -= b.scrollTop)
        }
        return g
    };
    m.Pg = function(a) {
        return (0, m.Ng)(a).x
    };
    var Qg = function(a) {
        var b;
        if (a.getBoundingClientRect) b = Kg(a), b = new m.Nd(b.left, b.top);
        else {
            b = (0, m.df)((0, m.ae)(a));
            var c = (0, m.Ng)(a);
            b = new m.Nd(c.x - b.x, c.y - b.y)
        }
        if (m.rg && !(0, m.Vd)(12)) {
            var d;
            m.Zd ? d = "-ms-transform" : m.ne ? d = "-webkit-transform" : m.sg ? d = "-o-transform" : m.rg && (d = "-moz-transform");
            var e;
            d && (e = (0, m.Eg)(a, d));
            e || (e = (0, m.Eg)(a, "transform"));
            a = e ? (a = e.match(Rg)) ? new m.Nd((0, window.parseFloat)(a[1]), (0, window.parseFloat)(a[2])) : new m.Nd(0, 0) : new m.Nd(0, 0);
            a = new m.Nd(b.x + a.x, b.y + a.y)
        } else a = b;
        return a
    };
    m.Sg = function(a) {
        if (1 == a.nodeType) return Qg(a);
        var b = (0, m.ga)(a.lJ),
            c = a;
        a.targetTouches ? c = a.targetTouches[0] : b && a.Wa.targetTouches && (c = a.Wa.targetTouches[0]);
        return new m.Nd(c.clientX, c.clientY)
    };
    m.Tg = function(a, b, c) {
        if (b instanceof m.Qd) c = b.height, b = b.width;
        else if (void 0 == c) throw Error("missing height argument");
        (0, m.Ug)(a, b);
        (0, m.Vg)(a, c)
    };
    var Jg = function(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    };
    m.Vg = function(a, b) {
        a.style.height = Jg(b, !0)
    };
    m.Ug = function(a, b) {
        a.style.width = Jg(b, !0)
    };
    m.Wg = function(a) {
        return Xg(Yg, a)
    };
    var Xg = function(a, b) {
        if ("none" != (0, m.Eg)(b, "display")) return a(b);
        var c = b.style,
            d = c.display,
            e = c.visibility,
            g = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        var h = a(b);
        c.display = d;
        c.position = g;
        c.visibility = e;
        return h
    };
    var Yg = function(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = m.ne && !b && !c;
        return (0, m.Ec)(b) && !d || !a.getBoundingClientRect ? new m.Qd(b, c) : (a = Kg(a), new m.Qd(a.right - a.left, a.bottom - a.top))
    };
    m.Zg = function(a) {
        var b = (0, m.Ng)(a);
        a = (0, m.Wg)(a);
        return new m.yg(b.x, b.y, a.width, a.height)
    };
    m.$g = function(a, b) {
        var c = a.style;
        "opacity" in c ? c.opacity = b : "MozOpacity" in c ? c.MozOpacity = b : "filter" in c && (c.filter = "" === b ? "" : "alpha(opacity=" + 100 * b + ")")
    };
    m.ah = function(a, b) {
        a.style.display = b ? "" : "none"
    };
    m.Og = function(a) {
        return "rtl" == (0, m.Eg)(a, "direction")
    };
    var bh = function(a) {
        return new m.Qd(a.offsetWidth, a.offsetHeight)
    };
    m.ch = function(a) {
        var b = (0, m.ce)(a),
            c = m.Zd && a.currentStyle;
        if (c && bf((0, m.ae)(b)) && "auto" != c.width && "auto" != c.height && !c.boxSizing) return b = (0, m.dh)(a, c.width, "width", "pixelWidth"), a = (0, m.dh)(a, c.height, "height", "pixelHeight"), new m.Qd(b, a);
        c = bh(a);
        b = (0, m.eh)(a);
        a = (0, m.fh)(a);
        return new m.Qd(c.width - a.left - b.left - b.right - a.right, c.height - a.top - b.top - b.bottom - a.bottom)
    };
    m.dh = function(a, b, c, d) {
        if (/^\d+px?$/.test(b)) return (0, window.parseInt)(b, 10);
        var e = a.style[c],
            g = a.runtimeStyle[c];
        a.runtimeStyle[c] = a.currentStyle[c];
        a.style[c] = b;
        b = a.style[d];
        a.style[c] = e;
        a.runtimeStyle[c] = g;
        return b
    };
    var gh = function(a, b) {
        var c = a.currentStyle ? a.currentStyle[b] : null;
        return c ? (0, m.dh)(a, c, "left", "pixelLeft") : 0
    };
    m.eh = function(a) {
        if (m.Zd) {
            var b = gh(a, "paddingLeft"),
                c = gh(a, "paddingRight"),
                d = gh(a, "paddingTop");
            a = gh(a, "paddingBottom");
            return new m.ug(d, c, a, b)
        }
        b = (0, m.Dg)(a, "paddingLeft");
        c = (0, m.Dg)(a, "paddingRight");
        d = (0, m.Dg)(a, "paddingTop");
        a = (0, m.Dg)(a, "paddingBottom");
        return new m.ug((0, window.parseFloat)(d), (0, window.parseFloat)(c), (0, window.parseFloat)(a), (0, window.parseFloat)(b))
    };
    var hh = function(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
        var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return c in ih ? ih[c] : (0, m.dh)(a, c, "left", "pixelLeft")
    };
    m.fh = function(a) {
        if (m.Zd && !(0, m.Yd)(9)) {
            var b = hh(a, "borderLeft"),
                c = hh(a, "borderRight"),
                d = hh(a, "borderTop");
            a = hh(a, "borderBottom");
            return new m.ug(d, c, a, b)
        }
        b = (0, m.Dg)(a, "borderLeftWidth");
        c = (0, m.Dg)(a, "borderRightWidth");
        d = (0, m.Dg)(a, "borderTopWidth");
        a = (0, m.Dg)(a, "borderBottomWidth");
        return new m.ug((0, window.parseFloat)(d), (0, window.parseFloat)(c), (0, window.parseFloat)(a), (0, window.parseFloat)(b))
    };
    m.jh = function(a) {
        this.b = a
    };
    var kh = function(a) {
        a = (a.b.cookie || "").split(lh);
        for (var b = [], c = [], d, e, g = 0; e = a[g]; g++) d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        return {
            keys: b,
            ev: c
        }
    };
    m.mh = function(a, b, c) {
        m.nh.set("" + a, b, c, "/", "youtube.com")
    };
    m.oh = function(a, b) {
        return m.nh.get("" + a, b)
    };
    m.ph = function(a) {
        m.nh.remove("" + a, "/", "youtube.com")
    };
    m.qh = function() {
        var a = (0, m.oh)("PREF");
        if (a)
            for (var a = (0, window.unescape)(a).split("&"), b = 0; b < a.length; b++) {
                var c = a[b].split("="),
                    d = c[0];
                (c = c[1]) && (rh[d] = c.toString())
            }
    };
    var sh = function(a) {
        if (/^f([1-9][0-9]*)$/.test(a)) throw "ExpectedRegexMatch: " + a;
    };
    var th = function(a) {
        if (!/^\w+$/.test(a)) throw "ExpectedRegexMismatch: " + a;
    };
    var uh = function(a) {
        a = void 0 !== rh[a] ? rh[a].toString() : null;
        return null != a && /^[A-Fa-f0-9]+$/.test(a) ? (0, window.parseInt)(a, 16) : null
    };
    m.vh = function(a, b) {
        return !!((uh("f" + (Math.floor(b / 31) + 1)) || 0) & 1 << b % 31)
    };
    m.wh = function(a, b) {
        var c = "f" + (Math.floor(a / 31) + 1),
            d = 1 << a % 31,
            e = uh(c) || 0,
            e = b ? e | d : e & ~d;
        0 == e ? delete rh[c] : (d = e.toString(16), rh[c] = d.toString())
    };
    m.xh = function() {
        if (!(0, m.Ec)(yh))
            if (m.Zd) yh = (0, m.Vd)("10.0");
            else {
                var a = window.document.createElement("div"),
                    b = (0, m.tg)();
                a.innerHTML = '<div style="' + (b ? b + "-transition:opacity 1s linear;" : "") + 'transition:opacity 1s linear;">';
                a = a.firstChild;
                b = a.style[kd("transition")];
                yh = "" != ("undefined" !== typeof b ? b : a.style[Cg(a, "transition")] || "")
            } return yh
    };
    var zh = function() {
        this.i = this.g = this.b = 0;
        this.j = "";
        var a = (0, m.n)("window.navigator.plugins"),
            b = (0, m.n)("window.navigator.mimeTypes"),
            a = a && a["Shockwave Flash"],
            b = b && b["application/x-shockwave-flash"],
            b = a && b && b.enabledPlugin && a.description || "";
        if (a = b) {
            var c = a.indexOf("Shockwave Flash");
            0 <= c && (a = a.substr(c + 15));
            for (var c = a.split(" "), d = "", a = "", e = 0, g = c.length; e < g; e++)
                if (d)
                    if (a) break;
                    else a = c[e];
            else d = c[e];
            d = d.split(".");
            c = (0, window.parseInt)(d[0], 10) || 0;
            d = (0, window.parseInt)(d[1], 10) || 0;
            e = 0;
            if ("r" ==
                a.charAt(0) || "d" == a.charAt(0)) e = (0, window.parseInt)(a.substr(1), 10) || 0;
            a = [c, d, e]
        } else a = [0, 0, 0];
        this.j = b;
        b = a;
        this.b = b[0];
        this.g = b[1];
        this.i = b[2];
        if (0 >= this.b) {
            var h, k, p, u;
            if (m.Qb) try {
                h = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch (z) {
                h = null
            } else p = window.document.body, u = window.document.createElement("object"), u.setAttribute("type", "application/x-shockwave-flash"), h = p.appendChild(u);
            if (h && "GetVariable" in h) try {
                k = h.GetVariable("$version")
            } catch (F) {
                k = ""
            }
            p && u && p.removeChild(u);
            (h = k ||
                "") ? (h = h.split(" ")[1].split(","), h = [(0, window.parseInt)(h[0], 10) || 0, (0, window.parseInt)(h[1], 10) || 0, (0, window.parseInt)(h[2], 10) || 0]) : h = [0, 0, 0];
            this.b = h[0];
            this.g = h[1];
            this.i = h[2]
        }
    };
    var Ah = function(a, b, c, d) {
        b = "string" == typeof b ? b.split(".") : [b, c, d];
        b[0] = (0, window.parseInt)(b[0], 10) || 0;
        b[1] = (0, window.parseInt)(b[1], 10) || 0;
        b[2] = (0, window.parseInt)(b[2], 10) || 0;
        return a.b > b[0] || a.b == b[0] && a.g > b[1] || a.b == b[0] && a.g == b[1] && a.i >= b[2]
    };
    var Bh = function(a) {
        return -1 < a.j.indexOf("Gnash") && -1 == a.j.indexOf("AVM2") || 9 == a.b && 1 == a.g || 9 == a.b && 0 == a.g && 1 == a.i ? !1 : 9 <= a.b
    };
    var Ch = function(a) {
        return m.Dh ? !Ah(a, 11, 2) : m.Hg ? !Ah(a, 11, 3) : !Bh(a)
    };
    var Eh = function(a, b, c) {
        if ((a = (0, m.D)(a)) && b && c) {
            c = (0, m.Eb)(c);
            var d = (0, m.Lc)(c.attrs);
            d.tabindex = 0;
            var e = (0, m.Lc)(c.params);
            e.flashvars = (0, m.Af)(c.args);
            if (m.Qb) {
                d.classid = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";
                e.movie = b;
                b = window.document.createElement("object");
                for (var g in d) b.setAttribute(g, d[g]);
                for (g in e) d = window.document.createElement("param"), d.setAttribute("name", g), d.setAttribute("value", e[g]), b.appendChild(d)
            } else {
                d.type = "application/x-shockwave-flash";
                d.src = b;
                b = window.document.createElement("embed");
                b.setAttribute("name", d.id);
                for (g in d) b.setAttribute(g, d[g]);
                for (g in e) b.setAttribute(g, e[g])
            }
            e = window.document.createElement("div");
            e.appendChild(b);
            a.innerHTML = e.innerHTML
        }
    };
    m.Fh = function(a, b) {
        a = (0, m.D)(a);
        b = (0, m.Eb)(b);
        if (window != window.top) {
            var c = null;
            window.document.referrer && (c = window.document.referrer.substring(0, 128));
            b.args.framer = c
        }
        c = Gh();
        Ah(c, b.minVersion) ? (c = Hh(b, c), Eh(a, c, b)) : Ih(a, b, c)
    };
    var Jh = function(a, b, c) {
        if (a && a.attrs && a.attrs.id) {
            a = (0, m.Eb)(a);
            var d = !!b,
                e = (0, m.D)(a.attrs.id),
                g = e ? e.parentNode : null;
            if (e && g) {
                if (window != window.top) {
                    var h = null;
                    if (window.document.referrer) {
                        var k = window.document.referrer.substring(0, 128);
                        Df(k) || (h = k)
                    } else h = "unknown";
                    h && (d = !0, a.args.framer = h)
                }
                h = Gh();
                if (Ah(h, a.minVersion)) {
                    var k = Hh(a, h),
                        p = ""; - 1 < window.navigator.userAgent.indexOf("Sony/COM2") || (p = e.getAttribute("src") || e.movie);
                    (p != k || d) && Eh(g, k, a);
                    Ch(h) && Kh()
                } else Ih(g, a, h);
                c && c()
            } else(0, m.w)(function() {
                Jh(a,
                    b, c)
            }, 50)
        }
    };
    var Ih = function(a, b, c) {
        0 == c.b && b.fallback ? b.fallback() : 0 == c.b && b.fallbackMessage ? b.fallbackMessage() : a.innerHTML = '<div id="flash-upgrade">' + (0, m.Yc)("FLASH_UPGRADE", void 0, 'You need to upgrade your Adobe Flash Player to watchthis video. <br> <a href="http://get.adobe.com/flashplayer/">Download it from Adobe.</a>') + "</div>"
    };
    var Hh = function(a, b) {
        return Bh(b) && a.url || (-1 < window.navigator.userAgent.indexOf("Sony/COM2") && !Ah(b, 9, 1, 58) ? !1 : !0) && a.urlV9As2 || a.urlV8 || a.url
    };
    var Gh = function() {
        var a = zh.getInstance(),
            b = m.qh.getInstance();
        b.set("fv", a.getVersion().join("."));
        b.save();
        return a
    };
    var Kh = function() {
        var a = (0, m.D)("flash10-promo-div"),
            b = (0, m.vh)(m.qh.getInstance(), 107);
        a && !b && m.T.show(a)
    };
    m.Lh = function(a) {
        var b = a.match(Mh);
        window.spf.styles.load(a, void 0, b ? b[1] : "")
    };
    m.Nh = function() {
        var a = (0, m.n)("yt.player.utils.videoElement_");
        a || (a = window.document.createElement("video"), (0, m.l)("yt.player.utils.videoElement_", a, void 0));
        return a
    };
    m.Oh = function() {
        if (2.2 == m.Ph) return !0;
        var a = (0, m.Nh)();
        try {
            return !(!a || !a.canPlayType || !a.canPlayType('video/mp4; codecs="avc1.42001E, mp4a.40.2"') && !a.canPlayType('video/webm; codecs="vp8.0, vorbis"'))
        } catch (b) {
            return !1
        }
    };
    var Qh = function() {};
    var Rh = function(a) {
        if (a instanceof Qh) return a;
        if ("function" == typeof a.uc) return a.uc(!1);
        if ((0, m.Dc)(a)) {
            var b = 0,
                c = new Qh;
            c.next = function() {
                for (;;) {
                    if (b >= a.length) throw Sh;
                    if (b in a) return a[b++];
                    b++
                }
            };
            return c
        }
        throw Error("Not implemented");
    };
    var Th = function(a, b, c) {
        if ((0, m.Dc)(a)) try {
            (0, m.A)(a, b, c)
        } catch (d) {
            if (d !== Sh) throw d;
        } else {
            a = Rh(a);
            try {
                for (;;) b.call(c, a.next(), void 0, a)
            } catch (e) {
                if (e !== Sh) throw e;
            }
        }
    };
    var Uh = function(a) {
        if ((0, m.Dc)(a)) return (0, m.ed)(a);
        a = Rh(a);
        var b = [];
        Th(a, function(a) {
            b.push(a)
        });
        return b
    };
    m.Vh = function(a, b) {
        this.g = {};
        this.b = [];
        this.i = this.ka = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else a && (0, m.Wh)(this, a)
    };
    var Xh = function(a, b) {
        return a === b
    };
    var Yh = function(a) {
        if (a.ka != a.b.length) {
            for (var b = 0, c = 0; b < a.b.length;) {
                var d = a.b[b];
                Zh(a.g, d) && (a.b[c++] = d);
                b++
            }
            a.b.length = c
        }
        if (a.ka != a.b.length) {
            for (var e = {}, c = b = 0; b < a.b.length;) d = a.b[b], Zh(e, d) || (a.b[c++] = d, e[d] = 1), b++;
            a.b.length = c
        }
    };
    m.Wh = function(a, b) {
        var c, d;
        b instanceof m.Vh ? (c = b.Yc(), d = b.Ib()) : (c = (0, m.Pc)(b), d = (0, m.Qc)(b));
        for (var e = 0; e < c.length; e++) a.set(c[e], d[e])
    };
    m.$h = function(a) {
        Yh(a);
        for (var b = {}, c = 0; c < a.b.length; c++) {
            var d = a.b[c];
            b[d] = a.g[d]
        }
        return b
    };
    var Zh = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var ai = function(a) {
        return "function" == typeof a.Za ? a.Za() : (0, m.Dc)(a) || (0, m.q)(a) ? a.length : (0, m.Sc)(a)
    };
    var bi = function(a) {
        if ("function" == typeof a.Ib) return a.Ib();
        if ((0, m.q)(a)) return a.split("");
        if ((0, m.Dc)(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b
        }
        return (0, m.Qc)(a)
    };
    var ci = function(a) {
        if ("function" == typeof a.Yc) return a.Yc();
        if ("function" != typeof a.Ib) {
            if ((0, m.Dc)(a) || (0, m.q)(a)) {
                var b = [];
                a = a.length;
                for (var c = 0; c < a; c++) b.push(c);
                return b
            }
            return (0, m.Pc)(a)
        }
    };
    m.di = function(a, b, c) {
        if ("function" == typeof a.forEach) a.forEach(b, c);
        else if ((0, m.Dc)(a) || (0, m.q)(a))(0, m.A)(a, b, c);
        else
            for (var d = ci(a), e = bi(a), g = e.length, h = 0; h < g; h++) b.call(c, e[h], d && d[h], a)
    };
    var ei = function(a, b) {
        if ("function" == typeof a.every) return a.every(b, void 0);
        if ((0, m.Dc)(a) || (0, m.q)(a)) return (0, m.Pb)(a, b, void 0);
        for (var c = ci(a), d = bi(a), e = d.length, g = 0; g < e; g++)
            if (!b.call(void 0, d[g], c && c[g], a)) return !1;
        return !0
    };
    m.fi = function(a, b) {
        var c;
        if (a instanceof m.fi) this.Fg = (0, m.Ec)(b) ? b : a.Fg, (0, m.gi)(this, a.Ch), this.Tl = a.Tl, (0, m.hi)(this, a.Me), (0, m.ii)(this, a.oj), (0, m.ji)(this, a.Fp), (0, m.ki)(this, a.b.clone()), (0, m.li)(this, a.Ep);
        else if (a && (c = (0, m.hf)(String(a)))) {
            this.Fg = !!b;
            (0, m.gi)(this, c[1] || "", !0);
            var d = c[2] || "";
            this.Tl = d ? (0, window.decodeURIComponent)(d) : "";
            (0, m.hi)(this, c[3] || "", !0);
            (0, m.ii)(this, c[4]);
            (0, m.ji)(this, c[5] || "", !0);
            (0, m.ki)(this, c[6] || "", !0);
            (0, m.li)(this, c[7] || "", !0)
        } else this.Fg = !!b, this.b =
            new m.mi(null, 0, this.Fg)
    };
    m.gi = function(a, b, c) {
        a.Ch = c ? b ? (0, window.decodeURIComponent)(b) : "" : b;
        a.Ch && (a.Ch = a.Ch.replace(/:$/, ""))
    };
    m.hi = function(a, b, c) {
        a.Me = c ? b ? (0, window.decodeURIComponent)(b) : "" : b
    };
    m.ii = function(a, b) {
        if (b) {
            b = Number(b);
            if ((0, window.isNaN)(b) || 0 > b) throw Error("Bad port number " + b);
            a.oj = b
        } else a.oj = null
    };
    m.ji = function(a, b, c) {
        a.Fp = c ? b ? (0, window.decodeURIComponent)(b) : "" : b;
        return a
    };
    m.ki = function(a, b, c) {
        b instanceof m.mi ? (a.b = b, ni(a.b, a.Fg)) : (c || (b = oi(b, pi)), a.b = new m.mi(b, 0, a.Fg));
        return a
    };
    m.qi = function(a, b, c) {
        a.b.set(b, c);
        return a
    };
    m.ri = function(a, b, c) {
        (0, m.fa)(c) || (c = [String(c)]);
        si(a.b, b, c)
    };
    m.ti = function(a, b) {
        return a.b.get(b)
    };
    m.li = function(a, b, c) {
        a.Ep = c ? b ? (0, window.decodeURIComponent)(b) : "" : b;
        return a
    };
    m.ui = function(a) {
        return a instanceof m.fi ? a.clone() : new m.fi(a, void 0)
    };
    var oi = function(a, b) {
        return (0, m.q)(a) ? (0, window.encodeURI)(a).replace(b, vi) : null
    };
    var vi = function(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    };
    m.mi = function(a, b, c) {
        this.b = a || null;
        this.g = !!c
    };
    var wi = function(a) {
        if (!a.kb && (a.kb = new m.Vh, a.ka = 0, a.b))
            for (var b = a.b.split("&"), c = 0; c < b.length; c++) {
                var d = b[c].indexOf("="),
                    e = null,
                    g = null;
                0 <= d ? (e = b[c].substring(0, d), g = b[c].substring(d + 1)) : e = b[c];
                e = (0, m.od)(e);
                e = xi(a, e);
                a.add(e, g ? (0, m.od)(g) : "")
            }
    };
    var yi = function(a, b) {
        wi(a);
        b = xi(a, b);
        return Zh(a.kb.g, b)
    };
    var si = function(a, b, c) {
        a.remove(b);
        0 < c.length && (a.b = null, a.kb.set(xi(a, b), (0, m.ed)(c)), a.ka += c.length)
    };
    var xi = function(a, b) {
        var c = String(b);
        a.g && (c = c.toLowerCase());
        return c
    };
    var ni = function(a, b) {
        b && !a.g && (wi(a), a.b = null, (0, m.di)(a.kb, function(a, b) {
            var e = b.toLowerCase();
            b != e && (this.remove(b), si(this, e, a))
        }, a));
        a.g = b
    };
    m.zi = function(a) {
        return -1 != a.indexOf("/embed/")
    };
    var Ai = function(a, b) {
        var c = (0, m.kf)(a);
        if (c == (0, m.kf)(window.location.href) || !c && 0 == a.lastIndexOf("/", 0)) {
            var c = of (a),
                d = c.indexOf("#");
            if (c = 0 > d ? c : c.substr(0, d)) {
                for (var e = d = 0; e < c.length; ++e) d = 31 * d + c.charCodeAt(e), d %= 4294967296;
                c = "s_tempdata-" + d;
                d = b ? (0, m.Af)(b) : "";
                (0, m.mh)(c, d, 5)
            }
        }
    };
    m.Bi = function(a, b, c) {
        c = c || "";
        window.location = (0, m.uf)(a, b || {}) + c
    };
    m.Ci = function(a) {
        (window.ytspf || {}).enabled ? window.spf.navigate(a) : (0, m.Bi)(a)
    };
    var Di = function(a, b, c) {
        var d = (0, m.v)("EVENT_ID");
        d && (b || (b = {}), b.ei || (b.ei = d));
        b && Ai(a, b);
        if (c) return !1;
        (0, m.Ci)(a);
        return !0
    };
    m.Ei = function(a, b, c) {
        b || (b = {});
        var d = c || window;
        c = "undefined" != typeof a.href ? a.href : String(a);
        a = b.target || a.target;
        var e = [],
            g;
        for (g in b) switch (g) {
            case "width":
            case "height":
            case "top":
            case "left":
                e.push(g + "=" + b[g]);
                break;
            case "target":
            case "noreferrer":
                break;
            default:
                e.push(g + "=" + (b[g] ? 1 : 0))
        }
        g = e.join(",");
        if (b.noreferrer) {
            if (b = d.open("", a, g)) m.Zd && -1 != c.indexOf(";") && (c = "'" + c.replace(/'/g, "%27") + "'"), b.opener = null, c = (0, m.qc)(c), b.document.write('<META HTTP-EQUIV="refresh" content="0; url=' + c + '">'),
                b.document.close()
        } else b = d.open(c, a, g);
        return b
    };
    var Fi = function(a, b) {
        var c = b || {};
        c.target = c.target || a.target || "YouTube";
        c.width = c.width || 600;
        c.height = c.height || 600;
        c = (0, m.Ei)(a, c);
        if (!c) return null;
        c.opener || (c.opener = window);
        c.focus();
        return c
    };
    m.Gi = function(a, b) {
        return !Fi(a, b)
    };
    var Hi = function() {};
    var Ii = function() {};
    var Ji = function(a) {
        this.b = a
    };
    var Ki = function() {
        var a = null;
        try {
            a = window.localStorage || null
        } catch (b) {}
        this.b = a
    };
    var Li = function() {
        var a = null;
        try {
            a = window.sessionStorage || null
        } catch (b) {}
        this.b = a
    };
    m.Mi = function(a) {
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
            return eval("(" + a + ")")
        } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    };
    m.Ni = function(a) {
        return eval("(" + a + ")")
    };
    m.Oi = function(a) {
        return (0, m.Pi)(new m.Qi(void 0), a)
    };
    m.Qi = function(a) {
        this.b = a
    };
    m.Pi = function(a, b) {
        var c = [];
        Ri(a, b, c);
        return c.join("")
    };
    var Ri = function(a, b, c) {
        switch (typeof b) {
            case "string":
                Si(b, c);
                break;
            case "number":
                c.push((0, window.isFinite)(b) && !(0, window.isNaN)(b) ? b : "null");
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
                if ((0, m.fa)(b)) {
                    var d = b.length;
                    c.push("[");
                    for (var e = "", g = 0; g < d; g++) c.push(e), e = b[g], Ri(a, a.b ? a.b.call(b, String(g), e) : e, c), e = ",";
                    c.push("]");
                    break
                }
                c.push("{");
                d = "";
                for (g in b) Object.prototype.hasOwnProperty.call(b, g) && (e = b[g], "function" !=
                    typeof e && (c.push(d), Si(g, c), c.push(":"), Ri(a, a.b ? a.b.call(b, g, e) : e, c), d = ","));
                c.push("}");
                break;
            case "function":
                break;
            default:
                throw Error("Unknown type: " + typeof b);
        }
    };
    var Si = function(a, b) {
        b.push('"', a.replace(Ti, function(a) {
            if (a in Ui) return Ui[a];
            var b = a.charCodeAt(0),
                e = "\\u";
            16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
            return Ui[a] = e + b.toString(16)
        }), '"')
    };
    m.Vi = function(a) {
        this.b = a;
        this.j = new m.Qi
    };
    var Wi = function(a) {
        m.Vi.call(this, a)
    };
    var Xi = function(a) {
        this.data = a
    };
    var Yi = function(a) {
        return !(0, m.Ec)(a) || a instanceof Xi ? a : new Xi(a)
    };
    var Zi = function(a) {
        a = a.data;
        if (!(0, m.Ec)(a)) throw "Storage: Invalid value was encountered";
        return a
    };
    var $i = function(a) {
        m.Vi.call(this, a)
    };
    var aj = function(a) {
        var b = a.creation;
        a = a.expiration;
        return !!a && a < (0, m.C)() || !!b && b > (0, m.C)()
    };
    var bj = function(a) {
        m.Vi.call(this, a)
    };
    var cj = function(a, b, c) {
        var d = [];
        Th(b, function(a) {
            var b;
            try {
                b = bj.prototype.Bh.call(this, a, !0)
            } catch (h) {
                if ("Storage: Invalid value was encountered" == h) {
                    c && d.push(a);
                    return
                }
                throw h;
            }
            if (!(0, m.Ec)(b)) d.push(a);
            else if (aj(b)) d.push(a);
            else if (c) try {
                Zi(b)
            } catch (k) {
                if ("Storage: Invalid value was encountered" == k) d.push(a);
                else throw k;
            }
        }, a);
        return d
    };
    var dj = function(a, b, c) {
        b = cj(a, b, c);
        (0, m.A)(b, function(a) {
            bj.prototype.remove.call(this, a)
        }, a);
        return b
    };
    m.ej = function(a, b, c) {
        var d = c && 0 < c ? c : 0;
        c = d ? (0, m.C)() + 1E3 * d : 0;
        if ((d = d ? m.fj : m.gj) && window.JSON) {
            (0, m.q)(b) || (b = JSON.stringify(b, void 0));
            try {
                d.set(a, b, c)
            } catch (e) {
                d.remove(a)
            }
        }
    };
    m.hj = function(a) {
        if (!m.gj && !m.fj || !window.JSON) return null;
        var b;
        try {
            b = m.gj.get(a), b = (0, m.q)(b) ? b : m.fj.get(a)
        } catch (c) {
            return null
        }
        if (!(0, m.q)(b)) return null;
        try {
            b = JSON.parse(b, void 0)
        } catch (d) {}
        return b
    };
    m.ij = function(a) {
        var b = {};
        b.volume = (0, window.isNaN)(a.volume) ? (0, m.jj)().volume : (0, m.Ld)(a.volume, 0, 100);
        b.nonNormalized = a.nonNormalized;
        b.muted = void 0 == a.muted ? (0, m.jj)().muted : a.muted;
        (0, m.ej)("yt-player-volume", b, 2592E3)
    };
    m.jj = function() {
        var a = {
                volume: 100,
                muted: !1,
                nonNormalized: 100
            },
            b = (0, m.hj)("yt-player-volume") || {};
        a.volume = (0, window.isNaN)(b.volume) ? 100 : (0, m.Ld)(b.volume, 0, 100);
        a.nonNormalized = (0, window.isNaN)(b.nonNormalized) ? a.volume : b.nonNormalized;
        a.muted = void 0 == b.muted ? !1 : b.muted;
        return a
    };
    var kj = function(a, b) {
        this.$e = a;
        this.C = b;
        this.o = !1;
        this.g = {};
        this.J = this.A = null;
        this.B = new m.qa;
        (0, m.G)(this, this.B);
        this.j = {};
        this.k = this.O = this.i = this.R = this.b = null;
        this.Q = !1;
        this.P = this.F = null;
        this.aa = !!(0, m.v)("PLAYER_BOOTSTRAP_HTML5");
        this.L = {};
        this.Y = ["onReady"];
        this.W = 0;
        lj(this);
        this.di("onVolumeChange", (0, m.r)(this.Ex, this));
        this.di("onError", (0, m.r)(this.Fx, this));
        this.di("onTabOrderChange", (0, m.r)(this.Bx, this));
        this.di("onNavigate", (0, m.r)(this.Cx, this))
    };
    var mj = function(a, b) {
        a.R = b;
        a.b = b.clone();
        a.i = a.b.attrs.id || a.i;
        "video-player" == a.i && (a.i = a.C, a.b.attrs.id = a.C);
        a.$e.id == a.i && (a.i = a.i + "-player", a.b.attrs.id = a.i);
        var c;
        (c = a.b.args.eurl) || (c = window.document.location.toString(), c = (0, m.zi)(c) ? window.document.referrer && window.document.referrer.substring(0, 128) || "unknown" : c);
        a.b.args.eurl = c;
        a.b.args.enablejsapi = "1";
        a.b.args.playerapiid = a.C;
        (0, m.Oh)() && (nj() || a.b.assets.js) || (a.b.args.html5_unavailable = "1", a.b.disable.html5 = !0);
        Ah(Gh(), a.b.minVersion) ||
            (a.b.disable.flash = !0);
        a.O || (a.O = oj(a, a.b.args.jsapicallback || "onYouTubePlayerReady"));
        a.b.args.jsapicallback = null;
        (c = a.b.attrs.width) && (0, m.Ug)(a.$e, Number(c) || c);
        (c = a.b.attrs.height) && (0, m.Vg)(a.$e, Number(c) || c);
        a.$e.style.overflow = "hidden"
    };
    var pj = function(a) {
        a.b.loaded || (a.b.loaded = !0, "0" != a.b.args.autoplay ? a.g.loadVideoByPlayerVars(a.b.args) : a.g.cueVideoByPlayerVars(a.b.args))
    };
    var qj = function(a) {
        var b = (0, m.D)(a.i);
        b && b.stopVideo && b.stopVideo();
        b && b.logFallback && b.logFallback();
        if (!a.b.disable.flash) {
            var c = a.b;
            b && b.getUpdatedConfigurationData && (b = (0, m.Eb)(b.getUpdatedConfigurationData()), b.args.video_id == c.args.video_id && (c = b));
            c.args.autoplay = 1;
            c.args.html5_unavailable = "1";
            mj(a, c);
            rj(a, "flash")
        }
    };
    var rj = function(a, b) {
        if (!a.ma()) {
            if (!b) {
                var c = !!a.b.disable.html5,
                    d = !!a.b.disable.flash;
                b = !a.b.html5 && !d || c ? d ? "unsupported" : "flash" : "html5"
            }("flash" == b ? a.aG : "html5" == b ? a.bG : a.cG).call(a)
        }
    };
    var nj = function() {
        return (0, m.n)("yt.player.Application")
    };
    var sj = function(a, b) {
        var c = a[b];
        return function() {
            try {
                return c.apply(a, arguments)
            } catch (d) {
                d.message += " (" + b + ")", (0, m.xa)(d, "WARNING")
            }
        }
    };
    var lj = function(a) {
        a.o = !1;
        if (a.J)
            for (var b in a.j) a.J(b, a.j[b]);
        a.A = null;
        a.J = null;
        for (var c in a.g) a.g[c] = null;
        a.g.addEventListener = (0, m.r)(a.di, a);
        a.g.removeEventListener = (0, m.r)(a.jF, a);
        a.g.destroy = (0, m.r)(a.dispose, a);
        a.g.getPlayerType = (0, m.r)(a.hF, a);
        a.g.getCurrentVideoConfig = (0, m.r)(a.gF, a);
        a.g.loadNewVideoConfig = (0, m.r)(a.mp, a);
        a.g.isReady = (0, m.r)(a.iF, a)
    };
    var oj = function(a, b) {
        var c = b;
        if ("string" == typeof b) {
            if (a.L[b]) return a.L[b];
            c = function() {
                var a = (0, m.n)(b);
                a && a.apply(m.ca, arguments)
            };
            a.L[b] = c
        }
        return c ? c : null
    };
    var tj = function(a, b) {
        var c = "ytPlayer" + b + a.C;
        a.j[b] = c;
        m.ca[c] = function(c) {
            (0, m.w)(function() {
                a.ma() || a.B.K(b, c)
            }, 0)
        };
        return c
    };
    var uj = function(a) {
        return (a = (0, m.D)(a.i)) ? "div" == a.tagName.toLowerCase() ? "html5" : "flash" : null
    };
    var vj = function(a) {
        a.cancel();
        lj(a);
        a.k = null;
        var b = (0, m.D)(a.i);
        a.aa && "html5" == uj(a) ? a.P = b : b && b.destroy && b.destroy();
        (0, m.ze)(a.$e)
    };
    var wj = function(a, b) {
        a = (0, m.D)(a);
        if (!a) return null;
        b = (0, m.Eb)(b);
        var c = "player" + (0, m.Ac)(a),
            d = xj[c];
        if (d) return d.mp(b), d.g;
        d || (d = new kj(a, c), xj[c] = d, (0, m.B)("player-added", d.g), (0, m.Vb)(d, (0, m.E)(yj, d)));
        (0, m.w)(function() {
            d.mp(b)
        }, 0);
        return d.g
    };
    var zj = function() {
        for (var a in xj) {
            var b = xj[a];
            b && b.cancel()
        }
    };
    var Aj = function(a) {
        if (a = (0, m.D)(a)) a = "player" + (0, m.Ac)(a), (a = xj[a]) && a.dispose()
    };
    var yj = function(a) {
        xj[a.getId()] = null
    };
    var Bj = function(a) {
        a = (0, m.D)(a);
        if (!a) return null;
        a = "player" + (0, m.Ac)(a);
        return (a = xj[a]) ? a.g : null
    };
    m.Cj = function(a) {
        var b = new m.Vh;
        Dj(a, b, Ej);
        return b
    };
    m.Fj = function(a) {
        var b = [];
        Dj(a, b, Gj);
        return b.join("&")
    };
    var Dj = function(a, b, c) {
        for (var d = a.elements, e, g = 0; e = d[g]; g++)
            if (e.form == a && !e.disabled && "fieldset" != e.tagName.toLowerCase()) {
                var h = e.name;
                switch (e.type.toLowerCase()) {
                    case "file":
                    case "submit":
                    case "reset":
                    case "button":
                        break;
                    case "select-multiple":
                        e = (0, m.Hj)(e);
                        if (null != e)
                            for (var k, p = 0; k = e[p]; p++) c(b, h, k);
                        break;
                    default:
                        k = (0, m.Hj)(e), null != k && c(b, h, k)
                }
            } d = a.getElementsByTagName("input");
        for (g = 0; e = d[g]; g++) e.form == a && "image" == e.type.toLowerCase() && (h = e.name, c(b, h, e.value), c(b, h + ".x", "0"), c(b, h + ".y",
            "0"))
    };
    var Ej = function(a, b, c) {
        var d = a.get(b);
        d || (d = [], a.set(b, d));
        d.push(c)
    };
    var Gj = function(a, b, c) {
        a.push((0, window.encodeURIComponent)(b) + "=" + (0, window.encodeURIComponent)(c))
    };
    m.Hj = function(a) {
        var b = a.type;
        if (!(0, m.Ec)(b)) return null;
        switch (b.toLowerCase()) {
            case "checkbox":
            case "radio":
                return a.checked ? a.value : null;
            case "select-one":
                return b = a.selectedIndex, 0 <= b ? a.options[b].value : null;
            case "select-multiple":
                for (var b = [], c, d = 0; c = a.options[d]; d++) c.selected && b.push(c.value);
                return b.length ? b : null;
            default:
                return (0, m.Ec)(a.value) ? a.value : null
        }
    };
    m.Ij = function(a, b) {
        var c = a.elements[b];
        if (c) {
            if (c.type) return (0, m.Hj)(c);
            for (var d = 0; d < c.length; d++) {
                var e = (0, m.Hj)(c[d]);
                if (e) return e
            }
        }
        return null
    };
    m.Jj = function(a) {
        switch (a && "status" in a ? a.status : -1) {
            case 0:
            case 200:
            case 201:
            case 202:
            case 203:
            case 204:
            case 205:
            case 206:
            case 304:
                return !0;
            default:
                return !1
        }
    };
    var Kj = function(a, b, c, d, e, g, h) {
        var k = Lj && Lj();
        if (!("open" in k)) return null;
        k.onreadystatechange = function() {
            4 == (k && "readyState" in k ? k.readyState : 0) && b && (0, m.wa)(b)(k)
        };
        c = (c || "GET").toUpperCase();
        d = d || "";
        k.open(c, a, !0);
        g && (k.responseType = g);
        h && (k.withCredentials = !0);
        g = "POST" == c;
        if (e = Mj(a, e))
            for (var p in e) k.setRequestHeader(p, e[p]), "content-type" == p.toLowerCase() && (g = !1);
        g && k.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        k.send(d);
        return k
    };
    var Mj = function(a, b) {
        b = b || {};
        var c;
        if (c = (0, m.v)("PAGE_CL"))
            if (c = (0, m.v)("PAGE_BUILD_TIMESTAMP")) {
                var d;
                d || (d = window.location.href);
                c = (0, m.hf)(a)[1] || null;
                var e = (0, m.Ef)(a);
                c && e ? (c = d, d = (0, m.hf)(a), c = (0, m.hf)(c), d = d[3] == c[3] && d[1] == c[1] && d[4] == c[4]) : d = e ? (0, m.Ef)(d) == e && (Number((0, m.hf)(d)[4] || null) || null) == (Number((0, m.hf)(a)[4] || null) || null) : !0;
                c = d || Nj(a)
            } c && (b["X-YouTube-Page-CL"] = (0, m.v)("PAGE_CL"), b["X-YouTube-Page-Timestamp"] = (0, m.v)("PAGE_BUILD_TIMESTAMP"));
        return b
    };
    var Nj = function(a) {
        var b = ["X-YouTube-Page-CL", "X-YouTube-Page-Timestamp"],
            c = (0, m.v)("CORS_HEADER_WHITELIST") || {};
        a = (0, m.Ef)(a);
        if (!a) return !0;
        var d = c[a];
        return d ? (0, m.Pb)(b, function(a) {
            return (0, m.lc)(d, a)
        }) : !1
    };
    m.U = function(a, b) {
        var c = b.format || "JSON";
        b.DF && (a = window.document.location.protocol + "//" + window.document.location.hostname + (window.document.location.port ? ":" + window.document.location.port : "") + a);
        var d = b.ca;
        d && (a = (0, m.Bf)(a, d));
        var e = b.Xc || "";
        (d = b.ba) && (0, m.q)(e) && (e = (0, m.xf)(e), (0, m.Ic)(e, d), e = (0, m.Af)(e));
        var g = !1,
            h, k = Kj(a, function(a) {
                if (!g) {
                    g = !0;
                    h && (0, m.x)(h);
                    var d = (0, m.Jj)(a),
                        e = null;
                    if (d || 400 <= a.status && 500 > a.status) e = Oj(c, a);
                    if (d) t: {
                        switch (c) {
                            case "XML":
                                d = 0 == (0, window.parseInt)(e && e.return_code,
                                    10);
                                break t;
                            case "RAW":
                                d = !0;
                                break t
                        }
                        d = !!e
                    }
                    var e = e || {},
                        k = b.N || m.ca;
                    d ? b.onSuccess && b.onSuccess.call(k, a, e) : b.onError && b.onError.call(k, a, e);
                    b.za && b.za.call(k, a, e)
                }
            }, b.method, e, b.headers, b.responseType, b.withCredentials);
        b.Eh && 0 < b.timeout && (h = (0, m.w)(function() {
            g || (g = !0, k.abort(), (0, m.x)(h), b.Eh.call(b.N || m.ca, k))
        }, b.timeout));
        return k
    };
    m.Pj = function(a, b) {
        var c = b || {};
        c.method = a.method.toUpperCase();
        if ("POST" == c.method) c.Xc = (0, m.Fj)(a);
        else {
            var d = (0, m.$h)((0, m.Cj)(a)),
                e = c.ca || {};
            (0, m.Ic)(e, d);
            c.ca = e
        }
        return (0, m.U)(a.action, c)
    };
    var Oj = function(a, b) {
        var c = null;
        switch (a) {
            case "JSON":
                var d = b.responseText,
                    e = b.getResponseHeader("Content-Type") || "";
                d && 0 <= e.indexOf("json") && (c = (0, m.Ni)(d));
                break;
            case "XML":
                if (d = (d = b.responseXML) ? Qj(d) : null) c = {}, (0, m.A)(d.getElementsByTagName("*"), function(a) {
                    c[a.tagName] = Rj(a)
                })
        }
        return c
    };
    var Qj = function(a) {
        return a ? (a = ("responseXML" in a ? a.responseXML : a).getElementsByTagName("root")) && 0 < a.length ? a[0] : null : null
    };
    var Sj = function(a, b) {
        if (!a) return null;
        var c = a.getElementsByTagName(b);
        return c && 0 < c.length ? Rj(c[0]) : null
    };
    var Rj = function(a) {
        var b = "";
        (0, m.A)(a.childNodes, function(a) {
            b += a.nodeValue
        });
        return b
    };
    m.Tj = function(a, b, c, d, e) {
        if ((0, m.ad)(a)) d && window.setTimeout(d, 0);
        else {
            var g = nf() + "/token_ajax",
                h = {};
            b && (h.lK = b);
            c && (h.mK = c);
            h[Uj[a]] = 1;
            (0, m.U)(g, {
                format: "RAW",
                method: "GET",
                ca: h,
                za: function(b) {
                    var c = (0, m.xf)(b.responseText),
                        g = c[Vj[a]];
                    g ? ((0, m.ua)(a, g), d && d()) : e && e(b, c)
                }
            })
        }
    };
    m.Wj = function(a, b) {
        var c;
        var d = "followon_" + a;
        if (b.baseUrl && b.uid) {
            var e = b.rmktEnabled;
            c = b.focEnabled && !b.isAd;
            if (e || c) {
                d = {
                    label: c ? d : "default"
                };
                if (e) {
                    e = {
                        utuid: b.uid,
                        type: a
                    };
                    b.vid && (e.utvid = b.vid);
                    b.eventLabel && (e.el = b.eventLabel);
                    b.playerStyle && (e.ps = b.playerStyle);
                    b.feature && (e.feature = b.feature);
                    b.ppe && (e.ppe = b.ppe);
                    var g, h = [];
                    for (g in e) h.push((0, window.encodeURIComponent)(g) + "=" + (0, window.encodeURIComponent)(e[g]));
                    g = h.join(";");
                    d.data = g
                }
                c && "view" == a && b.vid && b.uid && (b.oeid || b.ieid) && (b.oeid && (d.oeid =
                    b.oeid), b.ieid && (d.ieid = b.ieid), d.evid = b.vid);
                c && (d.foc_id = b.uid);
                c = (0, m.uf)(b.baseUrl, d)
            } else c = null
        } else c = null;
        c && (0, m.Ua)(c)
    };
    var Xj = function(a) {
        return a ? 24 == a.length && "UC" == a.slice(0, 2) ? a.substr(2) : 22 == a.length ? a : null : null
    };
    m.Yj = function(a, b) {
        var c = (0, m.v)("CONVERSION_CONFIG_DICT");
        if (c) {
            if ((0, m.q)(b)) {
                var d = Xj(b);
                if (c.uid != d) return
            }(0, m.Wj)(a, c)
        }
    };
    m.Zj = function(a, b, c) {
        c = c || {};
        (0, m.Tj)("watch_actions_ajax", c.mb, c.yb, (0, m.r)(ak, m.ca, a, b, c), c.onError)
    };
    var ak = function(a, b, c) {
        var d = {};
        0 === b ? d.action_like_video = 1 : 1 === b ? d.action_dislike_video = 1 : d.action_indifferent_video = 1;
        d.video_id = a;
        d.plid = c.vb;
        c.hb && (d.list = c.hb);
        c.mb && (d.authuser = c.mb);
        c.yb && (d.pageid = c.yb);
        a = {
            screen: (0, m.Af)({
                h: window.screen.height,
                w: window.screen.width,
                d: window.screen.colorDepth
            }),
            session_token: (0, m.ad)("watch_actions_ajax")
        };
        c.hv && (a.station_id = c.hv);
        (0, m.U)("/watch_actions_ajax", {
            format: "XML",
            method: "POST",
            ca: d,
            ba: a,
            onSuccess: c.onSuccess,
            onError: c.onError,
            za: c.za
        });
        0 === b ?
            (0, m.Yj)("like") : 1 === b && (0, m.Yj)("dislike")
    };
    var bk = function(a, b, c, d, e, g) {
        (0, m.q)(a) ? (this.o = "y" == a ? b : 0, this.j = "m" == a ? b : 0, this.b = "d" == a ? b : 0, this.g = "h" == a ? b : 0, this.i = "n" == a ? b : 0, this.k = "s" == a ? b : 0) : (this.o = a || 0, this.j = b || 0, this.b = c || 0, this.g = d || 0, this.i = e || 0, this.k = g || 0)
    };
    var ck = function(a, b, c) {
        (0, m.td)(a) ? (this.b = dk(a, b || 0, c || 1), ek(this, c || 1)) : (0, m.Cc)(a) ? (this.b = dk(a.getFullYear(), a.getMonth(), a.getDate()), ek(this, a.getDate())) : (this.b = new Date((0, m.C)()), this.b.setHours(0), this.b.setMinutes(0), this.b.setSeconds(0), this.b.setMilliseconds(0))
    };
    var dk = function(a, b, c) {
        b = new Date(a, b, c);
        0 <= a && 100 > a && b.setFullYear(b.getFullYear() - 1900);
        return b
    };
    var fk = function(a) {
        a = a.getTimezoneOffset();
        if (0 == a) a = "Z";
        else {
            var b = Math.abs(a) / 60,
                c = Math.floor(b),
                b = 60 * (b - c);
            a = (0 < a ? "-" : "+") + (0, m.nd)(c, 2) + ":" + (0, m.nd)(b, 2)
        }
        return a
    };
    var ek = function(a, b) {
        a.getDate() != b && a.b.setUTCHours(a.b.getUTCHours() + (a.getDate() < b ? 1 : -1))
    };
    var gk = function(a, b, c, d, e, g, h) {
        this.b = (0, m.td)(a) ? new Date(a, b || 0, c || 1, d || 0, e || 0, g || 0, h || 0) : new Date(a ? a.getTime() : (0, m.C)())
    };
    var hk = function(a, b) {
        m.Vi.call(this, a);
        this.i = b
    };
    var ik = function(a) {
        var b = [];
        Th(a.b.uc(!0), function(a) {
            if ("bounded-collectable-storage" != a) {
                var d;
                try {
                    d = this.Bh(a, !0)
                } catch (e) {
                    if ("Storage: Invalid value was encountered" == e) return;
                    throw e;
                }
                b.push({
                    key: a,
                    jc: d.creation
                })
            }
        }, a);
        (0, m.kc)(b, function(a, b) {
            return a.jc - b.jc
        });
        return (0, m.Mb)(b, function(a) {
            return a.key
        })
    };
    var jk = function(a, b) {
        var c = hk.D.get.call(a, "bounded-collectable-storage") || null;
        c && (0, m.fa)(c) || (c = b ? ik(a) : []);
        return c
    };
    var kk = function(a, b) {
        hk.D.set.call(a, "bounded-collectable-storage", b)
    };
    var lk = function(a, b) {
        if (0 == b.length) return (0, m.ed)(a);
        for (var c = [], d = 0, e = 0; e < b.length && d < a.length;) {
            for (var g = b[e]; d < a.length && a[d] != g;) c.push(a[d]), ++d;
            ++e
        }
        return (0, m.fd)(c, (0, m.pa)(a, d + 1))
    };
    var mk = function(a, b, c) {
        if (b.length <= c) return (0, m.ed)(b);
        c = (0, m.pa)(b, 0, b.length - c);
        (0, m.A)(c, function(a) {
            hk.D.remove.call(this, a)
        }, a);
        return lk(b, c)
    };
    var nk = function(a, b) {
        if (m.Zd && !(0, m.Yd)(9)) {
            ok || (ok = new m.Vh);
            this.fc = ok.get(a);
            this.fc || (b ? this.fc = window.document.getElementById(b) : (this.fc = window.document.createElement("userdata"), this.fc.addBehavior("#default#userData"), window.document.body.appendChild(this.fc)), ok.set(a, this.fc));
            this.pq = a;
            try {
                this.fc.load(this.pq)
            } catch (c) {
                this.fc = null
            }
        }
    };
    var pk = function(a) {
        return "_" + (0, window.encodeURIComponent)(a).replace(/[.!~*'()%]/g, function(a) {
            return qk[a]
        })
    };
    var rk = function(a) {
        try {
            a.fc.save(a.pq)
        } catch (b) {
            throw "Storage mechanism: Quota exceeded";
        }
    };
    var sk = function(a) {
        return a.fc.XMLDocument.documentElement
    };
    var tk = function(a, b) {
        this.Jh = a;
        this.Jg = b + "::"
    };
    var uk = function(a) {
        var b;
        (b = (0, m.vk)(a)) || (a = new nk(a || "UserDataSharedStore"), b = a.isAvailable() ? a : null);
        return b
    };
    m.vk = function(a) {
        var b = new Ki;
        return b.isAvailable() ? a ? new tk(b, a) : b : null
    };
    var wk = function(a) {
        var b = xk();
        if (!b) return null;
        a = b.get(a);
        if (null == a) return null;
        a = a.substr(9);
        for (var c = b = 0, d = 0, e = 0, g = 0, h = "x", k = 0; k < a.length - 1; k++) switch (a.charAt(k)) {
            case "y":
            case "o":
            case "g":
                0 < d ? e += 1 : b += 1;
                break;
            case "t":
            case "f":
            case "p":
                c += 1;
                break;
            case "a":
                d += 1;
                break;
            case "l":
            case "b":
            case "u":
            case "d":
            case "d":
            case "c":
            case "h":
                0 == d && (g = 1)
        }
        if (0 < a.length) switch (a.charAt(a.length - 1)) {
            case "y":
            case "o":
            case "g":
                h = 0 < d ? "f" : "y";
                break;
            case "t":
            case "f":
            case "p":
                h = "s";
                break;
            case "a":
                h = "a";
                break;
            case "l":
            case "b":
            case "u":
            case "d":
            case "d":
            case "c":
            case "h":
                h =
                    a.charAt(a.length - 1)
        }
        return [h, "y" + b, "s" + c, "a" + d, "f" + e, "e" + g].join("")
    };
    var yk = function(a, b, c) {
        var d = xk();
        if (d) {
            var e = d.get(a);
            if (null == e) e = c.toString() + ":" + b;
            else {
                if (e = xk()) {
                    var g = e.get(a);
                    if (g) {
                        c = zk(c);
                        var h = g.substr(0, 8),
                            k = new gk(2E3),
                            h = (0, m.yc)(h),
                            h = h.split(-1 == h.indexOf("T") ? " " : "T"),
                            p;
                        var u = h[0].match(Ak);
                        if (u) {
                            var z = Number(u[2]),
                                F = Number(u[3]),
                                K = Number(u[4]);
                            p = Number(u[5]);
                            var P = Number(u[6]) || 1;
                            k.b.setFullYear(Number(u[1]));
                            K ? (k.b.setDate(1), k.b.setMonth(0), k.add(new bk("d", K - 1))) : p ? (k.b.setMonth(0), k.b.setDate(1), u = k.getDay() || 7, k.add(new bk("d", (4 >= u ? 1 - u : 8 - u) +
                                (Number(P) + 7 * (Number(p) - 1)) - 1))) : (z && (k.b.setDate(1), k.b.setMonth(z - 1)), F && k.b.setDate(F));
                            p = !0
                        } else p = !1;
                        p && !(p = 2 > h.length) && (h = h[1], p = h.match(Bk), P = 0, p && ("Z" != p[0] && (P = 60 * p[2] + Number(p[3]), P *= "-" == p[1] ? 1 : -1), P -= k.getTimezoneOffset(), h = h.substr(0, h.length - p[0].length)), (p = h.match(Ck)) ? (k.b.setHours(Number(p[1])), k.b.setMinutes(Number(p[2]) || 0), k.b.setSeconds(Number(p[3]) || 0), k.b.setMilliseconds(p[4] ? 1E3 * p[4] : 0), 0 != P && k.b.setTime(k.getTime() + 6E4 * P), p = !0) : p = !1);
                        k = zk(p ? k : null);
                        g = g.substr(9);
                        for (h = new bk("d",
                                1); 0 > k.getTime() - c.getTime();) g += "-", k.add(h);
                        k = g ? g.split("-").length - 1 : 0;
                        for (h = -1; 7 <= k;) h = g.indexOf("-", h + 1), --k;
                        g = g.substr(h + 1, g.length);
                        g = c.toString() + ":" + g;
                        e.set(a, g, (0, m.C)() + 6048E5)
                    }
                }
                e = d.get(a) + b
            }
            d.set(a, e, (0, m.C)() + 6048E5)
        }
    };
    var Dk = function(a, b, c, d) {
        t: if (c) b = "a";
            else {
                b = new m.fi(b);
                if (b.Me && (b = b.Me, 0 != b.indexOf("www.") && (b = "www." + b), b in Ek)) {
                    b = Ek[b];
                    break t
                }
                b = "o"
            }yk(a, b, d)
    };
    var xk = function() {
        if (!Fk) {
            var a = uk("history_channel_");
            if (!a) return null;
            Fk = new hk(a, 50)
        }
        return Fk
    };
    var zk = function(a) {
        return a ? new ck(a.getFullYear(), a.getMonth(), a.getDate()) : new ck
    };
    var Gk = function() {
        if (null == Hk) {
            var a = uk("aid");
            if (!a) return null;
            Hk = new hk(a, 50)
        }
        return Hk
    };
    var Ik = function(a, b, c) {
        var d = (0, m.C)() - 6048E5,
            e = [];
        Th(a.uc(!0), function(a) {
            if (0 == a.lastIndexOf("aid-", 0) && 26 == a.length) {
                var h;
                try {
                    h = b.Bh(a)
                } catch (k) {
                    if ("Storage: Invalid value was encountered" == k) return;
                    throw k;
                }
                var p = h.creation;
                p > d && (h = h ? Zi(h) : void 0) && c.set(a.substr(4), h, p + 6048E5);
                e.push(a)
            }
        });
        (0, m.A)(e, function(b) {
            a.remove(b)
        })
    };
    var Jk = function(a) {
        var b = Gk();
        if (!b) return null;
        a = b.get(a);
        return (0, m.Cc)(a) ? a : null
    };
    var Kk = function() {
        var a = window.location.hash;
        if (!a || 5 > a.length) return null;
        a = (0, m.zf)(a).aid;
        return (0, m.q)(a) ? a : null
    };
    var Lk = function(a) {
        var b = {};
        b.aid = a;
        window.location.hash = (0, m.Cf)(window.location.hash, b)
    };
    var Mk = function(a, b, c, d, e, g) {
        if (!a) return null;
        b = {
            aid: a.aid || "!aid",
            foc_id: a.channel || "!foc_id",
            label: "followon_" + (b || "view"),
            origin: a.origin || "SHARE"
        };
        a.saw_ad && (b.saw_ad = "1");
        c && (b.agcid = c);
        e && (b.ai = e);
        d && (b.format = d);
        g && 0 < g.length && (b.h = g);
        return (0, m.uf)("//www.gstatic.com/youtube/followonevent/l", b)
    };
    m.Nk = function(a, b, c) {
        if (a) {
            var d = (0, m.v)("CONVERSION_CONFIG_DICT");
            if (d && (d.socialEnabled || d.ytfocEnabled)) {
                var e = d.socialEnabled,
                    d = e ? Kk() : null,
                    g = Jk(a);
                c && Dk(a, window.document.referrer, !1, new ck);
                if (d || g) {
                    var h;
                    h = !d || g && d == g.aid ? (0, m.Lc)(g) : {
                        channel: a,
                        aid: d,
                        origin: "SHARE",
                        ytfocHistoryEnabled: c
                    };
                    g && "AD_VIEW" == g.origin && (h.saw_ad = !0);
                    g = h
                } else g = null;
                g && (c && (g.history = wk(a, new ck)), e && !d && g.aid && Lk(g.aid), (b = Mk(g, b)) && (0, m.Ua)(b), a && d && !g.saw_ad && (b = g, (c = Gk()) && c.set(a, b, (0, m.C)() + 6048E5)))
            }
        }
    };
    m.Ok = function(a) {
        if (a) {
            if (!(0, m.hj)("cu-done")) {
                var b = new Ki;
                if (b && b.isAvailable()) {
                    var c = new bj(b),
                        d = Gk();
                    c && d && (Ik(b, c, d), (0, m.ej)("cu-done", !0, 2678400))
                }
            }
            if (a.ad) {
                var b = a.uid,
                    c = a.aid,
                    d = a.agcid,
                    e = a.format,
                    g = a.ai,
                    h = a.ytfocHistoryEnabled;
                (a = (0, m.v)("CONVERSION_CONFIG_DICT")) && a.socialEnabled && b && c && a.uid == b && Lk(c);
                a = {
                    channel: b,
                    aid: c,
                    origin: "AD_VIEW",
                    ytfocHistoryEnabled: h
                };
                var k = "";
                h && d && (h = new ck, Dk(b, window.document.referrer, !0, h), k = wk(b) || "");
                (e = Mk(a, "adview", d || "!agcid", e, g, k)) && (0, m.Ua)(e);
                c &&
                    b && d && (c = Gk()) && c.set(b, a, (0, m.C)() + 6048E5)
            } else(0, m.Nk)(a.uid, "view", a.ytfocHistoryEnabled)
        }
    };
    m.Pk = function(a, b) {
        var c = Xj(b);
        if (c) {
            var d = Jk(c);
            if (d) {
                var e = {
                    foc_id: c,
                    aid: d.aid || "!aid",
                    label: "followon_" + a
                };
                d.ytfocHistoryEnabled && (d = new ck, yk(c, Qk[a] || "x", d), e.h = wk(c) || "");
                (c = (0, m.uf)("//www.gstatic.com/youtube/followonevent/l", e)) && (0, m.Ua)(c)
            }
        }
    };
    m.Rk = function(a, b) {
        var c = (0, m.v)("CONVERSION_CONFIG_DICT");
        c && c.vid == b && (0, m.Pk)(a, c.uid)
    };
    var Sk = function() {
        (0, m.Tk)();
        Uk = (0, m.y)("page-resize", Vk)
    };
    var Vk = function() {
        (0, m.Tk)()
    };
    m.Tk = function(a) {
        a = (0, m.N)("yt-ui-ellipsis", a);
        Wk((0, m.ed)(a))
    };
    var Wk = function(a) {
        a.length && (0, m.w)(function() {
            var b = a.shift(),
                c = !1;
            if (c = (0, m.wd)(b, "yt-ui-ellipsis-2") ? 2 : (0, window.parseInt)((0, m.H)(b, "max-lines"), 10)) {
                var d;
                d = (0, m.O)("yt-ui-ellipsis-wrapper", b);
                d || (d = (0, m.pe)("span", {
                    "class": "yt-ui-ellipsis-wrapper"
                }), d.innerHTML = b.innerHTML, (0, m.ze)(b), b.appendChild(d));
                c = (0, m.Pf)(d, c);
                (0, m.zd)(b, "yt-ui-ellipsis-ellipsized", c)
            }
            Wk(a)
        }, 0)
    };
    var Xk = function(a, b, c, d, e, g, h) {
        var k, p;
        if (k = c.offsetParent) {
            var u = "HTML" == k.tagName || "BODY" == k.tagName;
            u && "static" == (0, m.Fg)(k) || (p = (0, m.Ng)(k), u || (u = (u = (0, m.Og)(k)) && m.rg ? -k.scrollLeft : !u || m.Zd && (0, m.Vd)("8") || "visible" == (0, m.Eg)(k, "overflowX") ? k.scrollLeft : k.scrollWidth - k.clientWidth - k.scrollLeft, p = (0, m.Pd)(p, new m.Nd(u, k.scrollTop))))
        }
        k = p || new m.Nd;
        p = (0, m.Zg)(a);
        if (u = (0, m.Mg)(a)) {
            var z = (0, m.zg)(u),
                u = Math.max(p.left, z.left),
                F = Math.min(p.left + p.width, z.left + z.width);
            if (u <= F) {
                var K = Math.max(p.top,
                        z.top),
                    z = Math.min(p.top + p.height, z.top + z.height);
                K <= z && (p.left = u, p.top = K, p.width = F - u, p.height = z - K)
            }
        }
        u = (0, m.ae)(a);
        K = (0, m.ae)(c);
        if (u.b != K.b) {
            var F = u.b.body,
                K = (0, m.cf)(K),
                z = new m.Nd(0, 0),
                P = (0, m.oe)((0, m.ce)(F)),
                W = F;
            do {
                var oa = P == K ? (0, m.Ng)(W) : Qg(W);
                z.x += oa.x;
                z.y += oa.y
            } while (P && P != K && (W = P.frameElement) && (P = P.parent));
            F = (0, m.Pd)(z, (0, m.Ng)(F));
            m.Zd && !bf(u) && (F = (0, m.Pd)(F, (0, m.df)(u)));
            p.left += F.x;
            p.top += F.y
        }
        a = Yk(a, b);
        b = new m.Nd(a & 2 ? p.left + p.width : p.left, a & 1 ? p.top + p.height : p.top);
        b = (0, m.Pd)(b, k);
        e && (b.x +=
            (a & 2 ? -1 : 1) * e.x, b.y += (a & 1 ? -1 : 1) * e.y);
        var ob;
        h && (ob = (0, m.Mg)(c)) && (ob.top -= k.y, ob.right -= k.x, ob.bottom -= k.y, ob.left -= k.x);
        return (0, m.Zk)(b, c, d, g, ob, h, void 0)
    };
    m.Zk = function(a, b, c, d, e, g, h) {
        a = a.clone();
        var k = 0,
            p = Yk(b, c);
        c = (0, m.Wg)(b);
        h = h ? h.clone() : c.clone();
        if (d || 0 != p) p & 2 ? a.x -= h.width + (d ? d.right : 0) : d && (a.x += d.left), p & 1 ? a.y -= h.height + (d ? d.bottom : 0) : d && (a.y += d.top);
        if (g && (e ? (k = a, d = 0, 65 == (g & 65) && (k.x < e.left || k.x >= e.right) && (g &= -2), 132 == (g & 132) && (k.y < e.top || k.y >= e.bottom) && (g &= -5), k.x < e.left && g & 1 && (k.x = e.left, d |= 1), k.x < e.left && k.x + h.width > e.right && g & 16 && (h.width = Math.max(h.width - (k.x + h.width - e.right), 0), d |= 4), k.x + h.width > e.right && g & 1 && (k.x = Math.max(e.right - h.width,
                e.left), d |= 1), g & 2 && (d = d | (k.x < e.left ? 16 : 0) | (k.x + h.width > e.right ? 32 : 0)), k.y < e.top && g & 4 && (k.y = e.top, d |= 2), k.y <= e.top && k.y + h.height < e.bottom && g & 32 && (h.height = Math.max(h.height - (e.top - k.y), 0), k.y = e.top, d |= 8), k.y >= e.top && k.y + h.height > e.bottom && g & 32 && (h.height = Math.max(h.height - (k.y + h.height - e.bottom), 0), d |= 8), k.y + h.height > e.bottom && g & 4 && (k.y = Math.max(e.bottom - h.height, e.top), d |= 2), g & 8 && (d = d | (k.y < e.top ? 64 : 0) | (k.y + h.height > e.bottom ? 128 : 0)), k = d) : k = 256, k & 496)) return k;
        (0, m.Gg)(b, a);
        (0, m.Rd)(c, h) || (e = bf((0, m.ae)((0, m.ce)(b))),
            !m.Zd || e && (0, m.Vd)("8") ? (b = b.style, m.rg ? b.MozBoxSizing = "border-box" : m.ne ? b.WebkitBoxSizing = "border-box" : b.boxSizing = "border-box", b.width = Math.max(h.width, 0) + "px", b.height = Math.max(h.height, 0) + "px") : (a = b.style, e ? (e = (0, m.eh)(b), b = (0, m.fh)(b), a.pixelWidth = h.width - b.left - e.left - e.right - b.right, a.pixelHeight = h.height - b.top - e.top - e.bottom - b.bottom) : (a.pixelWidth = h.width, a.pixelHeight = h.height)));
        return k
    };
    var Yk = function(a, b) {
        return (b & 4 && (0, m.Og)(a) ? b ^ 2 : b) & -5
    };
    var $k = function(a, b, c) {
        b in al || (al[b] = new m.qa);
        al[b].M(a, c)
    };
    var bl = function(a, b, c) {
        if (b in al) {
            var d = al[b];
            d.oa(a, c);
            0 >= d.Za() && (d.dispose(), delete al[b])
        }
    };
    var cl = function(a, b, c) {
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
        return (0, m.af)(c, function(a) {
            return (0, m.Hd)(a, b)
        }, !0, d)
    };
    var dl = function(a) {
        var b = "mouseover" == a.type && "mouseenter" in al || "mouseout" == a.type && "mouseleave" in al,
            c = a.type in al || b;
        if ("HTML" != a.target.tagName && c) {
            if (b) {
                var b = "mouseover" == a.type ? "mouseenter" : "mouseleave",
                    c = al[b],
                    d;
                for (d in c.Mc) {
                    var e = cl(b, d, a.target);
                    e && !(0, m.af)(a.relatedTarget, function(a) {
                        return a == e
                    }, !0) && c.K(d, e, b, a)
                }
            }
            if (b = al[a.type])
                for (d in b.Mc)(e = cl(a.type, d, a.target)) && b.K(d, e, a.type, a)
        }
    };
    m.el = function(a) {
        a = a.getInstance();
        var b = (0, m.V)(a);
        b in fl || (a.register(), fl[b] = a)
    };
    m.gl = function(a) {
        a = a.getInstance();
        var b = (0, m.V)(a);
        b in fl && (a.unregister(), delete fl[b])
    };
    m.hl = function() {
        this.b = {}
    };
    m.X = function(a, b, c, d) {
        d = (0, m.V)(a, d);
        var e = (0, m.r)(c, a);
        $k(d, b, e);
        a.b[c] = e
    };
    m.Y = function(a, b, c, d) {
        bl((0, m.V)(a, d), b, a.b[c]);
        delete a.b[c]
    };
    var il = function(a, b) {
        (0, m.Hc)(a, "tooltip-text", b)
    };
    m.jl = function(a, b, c) {
        return (0, m.O)((0, m.V)(a, b), c)
    };
    m.V = function(a, b) {
        return "yt-uix" + (a.Ia ? "-" + a.Ia : "") + (b ? "-" + b : "")
    };
    m.kl = function() {
        this.b = {};
        this.g = {}
    };
    var ll = function(a, b, c, d, e) {
        var g = m.T.Ra(c),
            h = 9 == d.keyCode;
        h || 32 == d.keyCode || 13 == d.keyCode ? (d = ml(a, c)) ? (b = (0, m.He)(d), "a" == b.tagName.toLowerCase() ? window.location = b.href : (0, m.kg)(b, "click")) : h && (0, m.nl)(a, b) : g ? 27 == d.keyCode ? (ml(a, c), (0, m.nl)(a, b)) : e(b, c, d) : (a = (0, m.wd)(b, (0, m.V)(a, "reverse")) ? 38 : 40, d.keyCode == a && ((0, m.kg)(b, "click"), d.preventDefault()))
    };
    var ml = function(a, b) {
        var c = (0, m.V)(a, "menu-item-highlight"),
            d = (0, m.O)(c, b);
        d && (0, m.J)(d, c);
        return d
    };
    var ol = function(a, b, c) {
        (0, m.I)(c, (0, m.V)(a, "menu-item-highlight"));
        b.setAttribute("aria-activedescendant", c.getAttribute("id"))
    };
    var pl = function(a, b) {
        var c = (0, m.Nf)("span", "yt-uix-button-icon-checkbox", b),
            c = !(c && m.T.Ra(c));
        ql(0, b, c);
        return c
    };
    var ql = function(a, b, c) {
        a = (0, m.Nf)("span", "yt-uix-button-icon-wrapper", b);
        if (!a && c) {
            var d = (0, m.pe)("span", {
                    "class": "yt-uix-button-icon-wrapper yt-uix-button-icon-checkbox"
                }),
                e = (0, m.pe)("div", {
                    "class": "yt-uix-button-icon-dropdown-checked"
                });
            d.appendChild(e);
            (0, m.Ce)(b, d, 0)
        }
        m.T.xb(a, c)
    };
    var rl = function(a, b, c, d) {
        var e = b.length;
        a = (0, m.la)(b, a);
        if (-1 == a)
            if (38 == d.keyCode) a = e - c;
            else {
                if (37 == d.keyCode || 38 == d.keyCode || 40 == d.keyCode) a = 0
            }
        else 39 == d.keyCode ? (a % c == c - 1 && (a -= c), a += 1) : 37 == d.keyCode ? (0 == a % c && (a += c), a -= 1) : 38 == d.keyCode ? (a < c && (a += e), a -= c) : 40 == d.keyCode && (a >= e - c && (a -= e), a += c);
        return a
    };
    var sl = function(a, b) {
        var c = b.iframeMask;
        c || (c = window.document.createElement("iframe"), c.src = 'javascript:""', c.className = (0, m.V)(a, "menu-mask"), b.iframeMask = c);
        return c
    };
    m.tl = function(a, b, c, d) {
        var e = (0, m.Q)(b, (0, m.V)(a, "group")),
            g = !!a.U(b, "button-menu-ignore-group"),
            e = e && !g ? e : b,
            g = 5,
            h = 4,
            k = (0, m.Zg)(b);
        if ((0, m.wd)(b, (0, m.V)(a, "reverse"))) {
            g = 4;
            h = 5;
            k = k.top + "px";
            try {
                c.style.maxHeight = k
            } catch (p) {}
        }(0, m.wd)(b, "flip") && ((0, m.wd)(b, (0, m.V)(a, "reverse")) ? (g = 6, h = 7) : (g = 7, h = 6));
        var u;
        a.U(b, "button-has-sibling-menu") ? u = (0, m.Lg)(e) : a.U(b, "button-menu-root-container") && (u = ul(a, b));
        m.Zd && !(0, m.Vd)("8") && (u = null);
        var z;
        u && (z = (0, m.Zg)(u), z = new m.ug(-z.top, z.left, z.top, -z.left));
        u = new m.Nd(0,
            1);
        (0, m.wd)(b, (0, m.V)(a, "center-menu")) && (u.x -= Math.round(((0, m.Wg)(c).width - (0, m.Wg)(b).width) / 2));
        d && (u.y += (0, m.le)(window.document).y);
        if (a = sl(a, b)) b = (0, m.Wg)(c), a.style.width = b.width + "px", a.style.height = b.height + "px", Xk(e, g, a, h, u, z, 65), d && m.T.setProperty(a, "position", "fixed");
        Xk(e, g, c, h, u, z, 65)
    };
    var ul = function(a, b) {
        if (a.U(b, "button-menu-root-container")) {
            var c = a.U(b, "button-menu-root-container");
            return (0, m.Q)(b, c)
        }
        return window.document.body
    };
    m.nl = function(a, b) {
        if (b) {
            var c = (0, m.vl)(a, b);
            if (c) {
                a.Le = null;
                b.setAttribute("aria-pressed", "false");
                b.setAttribute("aria-expanded", "false");
                b.removeAttribute("aria-activedescendant");
                m.T.hide(c);
                a.i(b, "button-menu-action", !1);
                var d = sl(a, b);
                (0, m.w)(function() {
                    d && d.parentNode && d.parentNode.removeChild(d);
                    c.originalParentNode && (c.parentNode.removeChild(c), c.originalParentNode.appendChild(c), c.originalParentNode = null, c.activeButtonNode = null)
                }, 1)
            }
            var e = (0, m.Q)(b, (0, m.V)(a, "group")),
                g = [(0, m.V)(a, "active")];
            e && g.push((0, m.V)(a, "group-active"));
            (0, m.yd)(b, g);
            e = (0, m.Jf)(b).toString();
            (0, m.S)(a.g[e]);
            delete a.g[e]
        }
    };
    m.wl = function(a, b) {
        return (0, m.O)((0, m.V)(a, "content"), b)
    };
    m.xl = function(a, b) {
        return (0, m.vl)(a, b)
    };
    m.vl = function(a, b) {
        if (!b.widgetMenu) {
            var c = a.U(b, "button-menu-id"),
                c = c && (0, m.D)(c),
                d = (0, m.V)(a, "menu");
            c ? (0, m.xd)(c, [d, (0, m.V)(a, "menu-external")]) : c = (0, m.O)(d, b);
            b.widgetMenu = c
        }
        return b.widgetMenu
    };
    m.yl = function(a, b) {
        return (0, m.wd)(b, (0, m.V)(a, "toggled"))
    };
    m.zl = function(a) {
        a.Le && (0, m.nl)(a, a.Le)
    };
    var Al = function() {
        this.b = {}
    };
    var Bl = function(a, b, c) {
        a = a.value;
        c && (c = a, a = window.document.createElement("div"), a.innerHTML = c, a = (0, m.Ve)(a));
        return b ? (0, window.unescape)((0, window.encodeURIComponent)(a)).length : a.length
    };
    var Cl = function() {
        this.b = {}
    };
    var Dl = function(a, b, c) {
        var d = c || b,
            e = (0, m.V)(a, "card"),
            g = e + (0, m.Jf)(d);
        c = (0, m.D)(g);
        var h = a.Uf(d);
        if (c) return c;
        c = window.document.createElement("div");
        c.id = g;
        c.className = e;
        (d = a.U(d, "card-class")) && (0, m.L)(c, d);
        d = window.document.createElement("div");
        d.className = (0, m.V)(a, "card-border");
        b = a.U(b, "orientation") || "horizontal";
        e = window.document.createElement("div");
        e.className = "yt-uix-card-border-arrow yt-uix-card-border-arrow-" + b;
        g = window.document.createElement("div");
        g.className = (0, m.V)(a, "card-body");
        a = window.document.createElement("div");
        a.className = "yt-uix-card-body-arrow yt-uix-card-body-arrow-" + b;
        (0, m.De)(h);
        g.appendChild(h);
        d.appendChild(a);
        d.appendChild(g);
        c.appendChild(e);
        c.appendChild(d);
        window.document.body.appendChild(c);
        return c
    };
    var El = function(a, b, c) {
        var d = a.U(b, "orientation") || "horizontal",
            e = a.U(b, "position"),
            g = !!a.U(b, "force-position"),
            d = "horizontal" == d,
            h = "bottomright" == e || "bottomleft" == e,
            k = "topright" == e || "bottomright" == e,
            p, u;
        k && h ? (u = 7, p = 4) : k && !h ? (u = 6, p = 5) : !k && h ? (u = 5, p = 6) : (u = 4, p = 7);
        var z = (0, m.Og)(window.document.body),
            e = (0, m.Og)(b);
        z != e && (u ^= 2);
        var F;
        d ? (e = b.offsetHeight / 2 - 12, F = new m.Nd(-12, b.offsetHeight + 6)) : (e = b.offsetWidth / 2 - 6, F = new m.Nd(b.offsetWidth + 6, -12));
        var K = (0, m.Wg)(c),
            e = Math.min(e, (d ? K.height : K.width) - 24 - 6);
        6 > e && (e = 6, d ? F.y += 12 - b.offsetHeight / 2 : F.x += 12 - b.offsetWidth / 2);
        var P = null;
        g || (P = 10);
        K = (0, m.V)(a, "card-flip");
        a = (0, m.V)(a, "card-reverse");
        (0, m.Id)(c, K, k);
        (0, m.Id)(c, a, h);
        P = Xk(b, u, c, p, F, null, P);
        !g && P && (P & 48 && (k = !k, u ^= 2, p ^= 2), P & 192 && (h = !h, u ^= 1, p ^= 1), (0, m.Id)(c, K, k), (0, m.Id)(c, a, h), Xk(b, u, c, p, F));
        b = (0, m.O)("yt-uix-card-body-arrow", c);
        g = (0, m.O)("yt-uix-card-border-arrow", c);
        d = d ? h ? "top" : "bottom" : !z && k || z && !k ? "left" : "right";
        b.setAttribute("style", "");
        g.setAttribute("style", "");
        b.style[d] = e + "px";
        g.style[d] =
            e + "px";
        h = (0, m.O)("yt-uix-card-arrow", c);
        b = (0, m.O)("yt-uix-card-arrow-background", c);
        h && b && (c = "right" == d ? (0, m.Wg)(c).width - e - 13 : e + 11, e = c / Math.sqrt(2), h.style.left = c + "px", h.style.marginLeft = "1px", b.style.marginLeft = -e + "px", b.style.marginTop = e + "px")
    };
    m.Fl = function(a) {
        a.j && a.hide(a.j)
    };
    m.Gl = function() {
        this.b = {};
        this.g = {}
    };
    var Hl = function() {
        this.b = {}
    };
    m.Il = function() {
        this.b = {}
    };
    var Jl = function(a, b) {
        var c = a.wa(b);
        c && ((0, m.Jd)(c, (0, m.V)(a, "collapsed")), a.i(c, "expander-action"))
    };
    var Kl = function(a, b) {
        var c = a.wa(b);
        c && ((0, m.L)(c, (0, m.V)(a, "collapsed")), a.i(c, "expander-action"))
    };
    m.Ll = function() {
        this.b = {}
    };
    var Ml = function(a) {
        return a.options[Math.max(a.selectedIndex, 0)]
    };
    var Nl = function() {
        (0, m.Ol)()
    };
    m.Pl = function(a, b) {
        a.checked = b;
        m.Ll.getInstance().Xe(a)
    };
    m.Ql = function() {
        var a = m.Ll.getInstance(),
            b = (0, m.N)((0, m.V)(a, "checkbox"));
        (0, m.A)(b, a.Xe, a)
    };
    var Rl = function() {
        var a = m.Ll.getInstance(),
            b = (0, m.N)((0, m.V)(a, "radio"));
        (0, m.A)(b, a.WJ, a)
    };
    m.Ol = function() {
        var a = m.Ll.getInstance(),
            b = (0, m.N)((0, m.V)(a, "select-element"));
        (0, m.A)(b, a.kd, a)
    };
    m.Sl = function() {
        (0, m.Ql)();
        Rl();
        (0, m.Ol)()
    };
    m.Tl = function(a, b) {
        var c = m.Ll.getInstance();
        a.checked && b && (a.checked = !1, c.Xe(a));
        c = (0, m.Q)(a, (0, m.V)(c, "checkbox-container"));
        a.zm = b;
        (0, m.Id)(c, "partial", b)
    };
    m.Ul = function() {
        this.b = {}
    };
    var Vl = function() {
        this.b = {}
    };
    var Wl = function(a, b, c) {
        var d = a.U(b, "slider-ajax-url");
        d && !a.U(b, "slider-loaded") && ((0, m.Hc)(b, "slider-loaded", "true"), (0, m.U)(d, {
            N: a,
            onSuccess: function(a, d) {
                var h = (0, m.we)(d.slides_html),
                    k = (0, m.O)((0, m.V)(this, "slides"), b);
                k && h && (0, m.ye)(k, h);
                c && c()
            }
        }))
    };
    var Xl = function(a, b, c) {
        var d = (0, m.fe)(null, (0, m.V)(a, "num"), b),
            e = (0, m.V)(a, "num-current"),
            g;
        (0, m.A)(d, function(a) {
            g = this.U(a, "slider-num") == c;
            (0, m.Id)(a, e, g);
            (0, m.Hd)(a, "yt-uix-button") && (0, m.Id)(a, "yt-uix-button-toggled", g)
        }, a);
        var d = (0, m.O)((0, m.V)(a, "slides"), b),
            h = (0, m.Hd)(b, (0, m.V)(a, "vertical"));
        if (d) {
            var k = (0, m.O)((0, m.V)(a, "slide"), d);
            if (k) {
                var p = c * (h ? k.offsetHeight : k.offsetWidth) * -1 + "px";
                h ? d.style.top = p : (0, m.Og)(k) ? d.style.right = p : d.style.left = p
            }
        }
        if (d = (0, m.O)("yt-uix-pager-current-page", b)) d.innerHTML =
            c + 1;
        (0, m.Hc)(b, "slider-current", c + "");
        Yl(a, b)
    };
    var Yl = function(a, b) {
        if (b) {
            var c = (0, window.parseInt)(a.U(b, "slider-current"), 10),
                d = (0, window.parseInt)(a.U(b, "slider-slides"), 10),
                e = (0, m.N)((0, m.V)(a, "next"), b),
                g = (0, m.N)((0, m.V)(a, "prev"), b);
            (0, m.A)(e, function(a) {
                a.disabled = !1
            });
            (0, m.A)(g, function(a) {
                a.disabled = !1
            });
            0 == c && (0, m.A)(g, function(a) {
                a.disabled = !0
            });
            c == d - 1 && (0, m.A)(e, function(a) {
                a.disabled = !0
            })
        }
    };
    m.Zl = function(a, b) {
        this.b = a;
        this.k = !1;
        this.i = new m.qa;
        this.o = (0, m.hg)(this.b, "click", (0, m.r)(this.jD, this), "yt-dialog-dismiss");
        $l(this, "content");
        this.j = b
    };
    m.am = function(a, b, c) {
        a.ma() || a.i.M("post-" + b, c)
    };
    var $l = function(a, b) {
        var c = (0, m.O)("yt-dialog-fg-content", a.b),
            d = [];
        (0, m.Qa)(bm, function(a) {
            d.push("yt-dialog-show-" + a)
        });
        (0, m.Gd)(c, d, "yt-dialog-show-" + b)
    };
    var cm = function() {
        var a = (0, m.N)("yt-dialog");
        return (0, m.Ob)(a, function(a) {
            return m.T.Ra(a)
        })
    };
    var dm = function(a) {
        var b = (0, m.fe)("iframe", null, a.b);
        (0, m.A)(b, function(a) {
            var b = (0, m.H)(a, "onload");
            b && (b = (0, m.n)(b)) && (0, m.R)(a, "load", b);
            if (b = (0, m.H)(a, "src")) a.src = b
        }, a);
        return (0, m.ed)(b)
    };
    var em = function(a) {
        (0, m.A)(window.document.getElementsByTagName("iframe"), function(b) {
            -1 == (0, m.la)(a, b) && (0, m.L)(b, "iframe-hid")
        })
    };
    var fm = function() {
        var a = (0, m.N)("iframe-hid");
        (0, m.A)(a, function(a) {
            (0, m.M)(a, "iframe-hid")
        })
    };
    m.gm = function(a, b) {
        if (!a.ma()) {
            a.i.K("pre-all");
            a.i.K("pre-" + b);
            m.T.hide(a.b);
            (0, m.Fl)(m.Gl.getInstance());
            (0, m.Fl)(m.Ul.getInstance());
            cm() || (m.T.hide(a.g), (0, m.M)(window.document.body, "yt-dialog-active"), Wf(), fm());
            a.j || (0, m.ig)(window.document, "keydown", (0, m.r)(a.Ts, a));
            var c = a.b;
            if (c) {
                var d = (0, m.H)(c, "player-ready-pubsub-key");
                d && ((0, m.Ka)(d), (0, m.Gc)(c, "player-ready-pubsub-key"))
            }
            a.i.K("post-all");
            (0, m.B)("yt-ui-dialog-hide-complete", a);
            "cancel" == b && (0, m.B)("yt-ui-dialog-cancelled", a);
            a.i && a.i.K("post-" +
                b)
        }
    };
    m.hm = function() {
        this.b = {}
    };
    var im = function(a) {
        a.j || (a.j = (0, m.y)("yt-uix-overlay-hide", jm));
        a.Pd && (0, m.am)(a.Pd, "all", function() {
            var a = m.hm.getInstance();
            a.zh = null;
            a.Pd.dispose();
            a.Pd = null
        })
    };
    var km = function(a) {
        if (a.Pd) {
            var b = a.zh;
            (0, m.gm)(a.Pd, "overlayhide");
            a.i(b, "overlay-hidden");
            a.zh = null;
            a.g && ((0, m.S)(a.g), a.g = null);
            a.Pd = null
        }
    };
    var lm = function(a, b) {
        var c;
        if (a)
            if (c = (0, m.O)("yt-dialog", a)) {
                var d = (0, m.D)("body-container");
                d && (d.appendChild(c), a.overlayContentNode = c, c.overlayParentNode = a)
            } else c = a.overlayContentNode;
        else b && (c = (0, m.Q)(b, "yt-dialog"));
        return c
    };
    m.mm = function() {
        var a = m.hm.getInstance();
        if (a.zh) a = (0, m.O)("yt-dialog-fg-content", a.zh.overlayContentNode);
        else t: {
            if (a = (0, m.N)("yt-dialog-fg-content"))
                for (var b = 0; b < a.length; b++) {
                    var c = (0, m.Q)(a[b], "yt-dialog");
                    if (m.T.Ra(c)) {
                        a = a[b];
                        break t
                    }
                }
            a = null
        }
        return a
    };
    var jm = function() {
        km(m.hm.getInstance())
    };
    var nm = function() {
        this.b = {}
    };
    var om = function(a, b, c, d, e, g) {
        (0, m.U)("/playlist_ajax?action_playlist_vote=1", {
            method: "POST",
            ba: {
                session_token: g,
                list: b,
                vote: c
            },
            onSuccess: function(a, g) {
                if (200 == g.code) {
                    var p = {
                        id: g.browse_list_id,
                        url: g.url,
                        title: g.title
                    };
                    if ("like" == c) {
                        (0, m.I)(d, e);
                        var u = "yt-uix-playlistlike-liked"
                    } else(0, m.J)(d, e), u = "yt-uix-playlistlike-unliked";
                    p.id && (0, m.B)(u, p);
                    g.show_feed_privacy_dialog && (0, m.B)("SHOW-FEED-PRIVACY-LIKE-PLAYLIST-DIALOG", b)
                }
            },
            N: a
        })
    };
    var pm = function() {
        this.b = {}
    };
    m.qm = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.Ig = !1;
        this.Uu = !0
    };
    var rm = function(a) {
        rm[" "](a);
        return a
    };
    m.sm = function(a, b) {
        m.qm.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.Wa = this.state = null;
        a && this.init(a, b)
    };
    m.tm = function(a) {
        try {
            return !(!a || !a[m.um])
        } catch (b) {
            return !1
        }
    };
    var vm = function(a, b, c, d, e) {
        this.Eg = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.Nb = e;
        this.key = ++wm;
        this.removed = this.Fl = !1
    };
    var xm = function(a) {
        a.removed = !0;
        a.Eg = null;
        a.proxy = null;
        a.src = null;
        a.Nb = null
    };
    var ym = function(a) {
        this.src = a;
        this.b = {};
        this.g = 0
    };
    var zm = function(a, b) {
        var c = b.type;
        if (!(c in a.b)) return !1;
        var d = (0, m.ka)(a.b[c], b);
        d && (xm(b), 0 == a.b[c].length && (delete a.b[c], a.g--));
        return d
    };
    var Am = function(a, b, c, d, e) {
        a = a.b[b];
        b = -1;
        a && (b = Bm(a, c, d, e));
        return -1 < b ? a[b] : null
    };
    var Bm = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var g = a[e];
            if (!g.removed && g.Eg == b && g.capture == !!c && g.Nb == d) return e
        }
        return -1
    };
    m.Cm = function(a, b, c, d, e) {
        if ((0, m.fa)(b)) {
            for (var g = 0; g < b.length; g++)(0, m.Cm)(a, b[g], c, d, e);
            return null
        }
        c = Dm(c);
        return (0, m.tm)(a) ? a.listen(b, c, d, e) : Em(a, b, c, !1, d, e)
    };
    var Em = function(a, b, c, d, e, g) {
        if (!b) throw Error("Invalid event type");
        var h = !!e,
            k = (0, m.Fm)(a);
        k || (a[Gm] = k = new ym(a));
        c = k.add(b, c, d, e, g);
        if (c.proxy) return c;
        d = Hm();
        c.proxy = d;
        d.src = a;
        d.Eg = c;
        a.addEventListener ? a.addEventListener(b, d, h) : a.attachEvent(b in Im ? Im[b] : Im[b] = "on" + b, d);
        Jm++;
        return c
    };
    var Hm = function() {
        var a = Km,
            b = Lm ? function(c) {
                return a.call(b.src, b.Eg, c)
            } : function(c) {
                c = a.call(b.src, b.Eg, c);
                if (!c) return c
            };
        return b
    };
    m.Mm = function(a, b, c, d, e) {
        if ((0, m.fa)(b))
            for (var g = 0; g < b.length; g++)(0, m.Mm)(a, b[g], c, d, e);
        else c = Dm(c), (0, m.tm)(a) ? a.Te.add(String(b), c, !0, d, e) : Em(a, b, c, !0, d, e)
    };
    m.Nm = function(a, b, c, d, e) {
        if ((0, m.fa)(b))
            for (var g = 0; g < b.length; g++)(0, m.Nm)(a, b[g], c, d, e);
        else c = Dm(c), (0, m.tm)(a) ? a.rb(b, c, d, e) : a && (a = (0, m.Fm)(a)) && (b = Am(a, b, c, !!d, e)) && (0, m.Om)(b)
    };
    m.Om = function(a) {
        if ((0, m.td)(a) || !a || a.removed) return !1;
        var b = a.src;
        if ((0, m.tm)(b)) return zm(b.Te, a);
        var c = a.type,
            d = a.proxy;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(c in Im ? Im[c] : Im[c] = "on" + c, d);
        Jm--;
        (c = (0, m.Fm)(b)) ? (zm(c, a), 0 == c.g && (c.src = null, b[Gm] = null)) : xm(a);
        return !0
    };
    var Pm = function(a, b, c, d) {
        var e = 1;
        if (a = (0, m.Fm)(a))
            if (b = a.b[b])
                for (b = (0, m.ed)(b), a = 0; a < b.length; a++) {
                    var g = b[a];
                    g && g.capture == c && !g.removed && (e &= !1 !== Qm(g, d))
                }
        return Boolean(e)
    };
    var Qm = function(a, b) {
        var c = a.Eg,
            d = a.Nb || a.src;
        a.Fl && (0, m.Om)(a);
        return c.call(d, b)
    };
    var Km = function(a, b) {
        if (a.removed) return !0;
        if (!Lm) {
            var c = b || (0, m.n)("window.event"),
                d = new m.sm(c, this),
                e = !0;
            if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                t: {
                    var g = !1;
                    if (0 == c.keyCode) try {
                        c.keyCode = -1;
                        break t
                    } catch (h) {
                        g = !0
                    }
                    if (g || void 0 == c.returnValue) c.returnValue = !0
                }
                c = [];
                for (g = d.currentTarget; g; g = g.parentNode) c.push(g);
                for (var g = a.type, k = c.length - 1; !d.Ig && 0 <= k; k--) d.currentTarget = c[k],
                e &= Pm(c[k], g, !0, d);
                for (k = 0; !d.Ig && k < c.length; k++) d.currentTarget = c[k],
                e &= Pm(c[k], g, !1, d)
            }
            return e
        }
        return Qm(a, new m.sm(b,
            this))
    };
    m.Fm = function(a) {
        a = a[Gm];
        return a instanceof ym ? a : null
    };
    var Dm = function(a) {
        return (0, m.ga)(a) ? a : a[Rm] || (a[Rm] = function(b) {
            return a.handleEvent(b)
        })
    };
    m.Sm = function() {
        this.Te = new ym(this);
        this.Y = this
    };
    m.Tm = function(a, b) {
        var c, d = a.bm;
        if (d) {
            c = [];
            for (var e = 1; d; d = d.bm) c.push(d), ++e
        }
        var d = a.Y,
            e = b,
            g = e.type || e;
        if ((0, m.q)(e)) e = new m.qm(e, d);
        else if (e instanceof m.qm) e.target = e.target || d;
        else {
            var h = e,
                e = new m.qm(g, d);
            (0, m.Ic)(e, h)
        }
        var h = !0,
            k;
        if (c)
            for (var p = c.length - 1; !e.Ig && 0 <= p; p--) k = e.currentTarget = c[p], h = Um(k, g, !0, e) && h;
        e.Ig || (k = e.currentTarget = d, h = Um(k, g, !0, e) && h, e.Ig || (h = Um(k, g, !1, e) && h));
        if (c)
            for (p = 0; !e.Ig && p < c.length; p++) k = e.currentTarget = c[p], h = Um(k, g, !1, e) && h;
        return h
    };
    var Um = function(a, b, c, d) {
        b = a.Te.b[String(b)];
        if (!b) return !0;
        b = (0, m.ed)(b);
        for (var e = !0, g = 0; g < b.length; ++g) {
            var h = b[g];
            if (h && !h.removed && h.capture == c) {
                var k = h.Eg,
                    p = h.Nb || h.src;
                h.Fl && zm(a.Te, h);
                e = !1 !== k.call(p, d) && e
            }
        }
        return e && !1 != d.Uu
    };
    m.Vm = function(a, b) {
        m.Sm.call(this);
        this.b = a || 1;
        this.g = b || m.ca;
        this.i = (0, m.r)(this.wC, this);
        this.j = (0, m.C)()
    };
    m.Wm = function(a, b, c) {
        if ((0, m.ga)(a)) c && (a = (0, m.r)(a, c));
        else if (a && "function" == typeof a.handleEvent) a = (0, m.r)(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < b ? -1 : m.ca.setTimeout(a, b || 0)
    };
    m.Xm = function(a, b, c) {
        this.g = a;
        this.b = b;
        this.T = c;
        this.Xb = (0, m.r)(this.rE, this)
    };
    m.Ym = function(a) {
        a.yg = (0, m.Wm)(a.Xb, a.b);
        a.g.call(a.T)
    };
    m.Zm = function(a) {
        if (!$m || a) $m = (0, m.ie)();
        return $m
    };
    var an = function(a) {
        if (!bn || a) bn = (0, m.le)(window.document);
        return bn
    };
    var cn = function() {
        (0, m.x)(dn);
        dn = (0, m.w)(function() {
            var a = (0, m.Zm)(!0);
            (0, m.B)("page-resize", a)
        }, 200)
    };
    var en = function() {
        var a = an(!0);
        (0, m.B)("page-scroll", a)
    };
    m.fn = function() {
        this.b = {};
        this.Ia = "tdl";
        this.g = []
    };
    var gn = function(a) {
        hn(a, function(a) {
            jn(this, a)
        }, a)
    };
    var jn = function(a, b) {
        var c = kn(a, b, ln(b)),
            d = [c.x, c.y].join();
        (0, m.Hc)(b, "fold", d);
        return c
    };
    var kn = function(a, b, c) {
        var d = (0, m.Ng)(b),
            e;
        c != mn.sq && (e = bh(b));
        var g = d.x + (nn(c) ? 0 : e.width),
            d = d.y + (on(c) ? 0 : e.height);
        if (b = (0, m.Pe)(b))
            if (b = (0, m.Q)(b, (0, m.V)(a))) a = kn(a, b, c), g = nn(c) ? Math.max(g, a.x) : Math.min(g, a.x), d = on(c) ? Math.max(d, a.y) : Math.min(d, a.y);
        return new m.Nd(g, d)
    };
    var ln = function(a) {
        return (a = (0, m.H)(a, "folddir")) ? a : "default"
    };
    var nn = function(a) {
        return a == mn.xJ || a == mn.sq ? !0 : !1
    };
    var on = function(a) {
        return a == mn.wJ || a == mn.sq ? !0 : !1
    };
    var pn = function() {
        var a = (0, m.Zm)(),
            b = an();
        return new m.Nd(a.width + b.x, a.height + b.y)
    };
    var qn = function(a) {
        a = (0, m.H)(a, "fold");
        if (!a) return null;
        a = a.split(",");
        if (2 == a.length) return new m.Nd((0, window.parseInt)(a[0], 10) || 0, (0, window.parseInt)(a[1], 10) || 0)
    };
    var rn = function(a, b) {
        var c = qn(b);
        c || (c = jn(a, b));
        var d = pn(),
            e = Math.min(c.x, d.x),
            c = Math.min(c.y, d.y),
            g = new m.Nd(e, c),
            h = ln(b);
        sn(a, function(a, b) {
            var c;
            c = (0, m.Ng)(a);
            var d = null,
                e;
            nn(h) ? (d = bh(a), e = c.x + d.width > g.x) : e = c.x < g.x;
            on(h) ? (d || (d = bh(a)), c = e && c.y + d.height > g.y) : c = e && c.y < g.y;
            c && (a.src = b, (0, m.Gc)(a, "thumb"))
        }, b, a)
    };
    var sn = function(a, b, c, d) {
        var e = (0, m.fe)("img", null, c);
        (0, m.A)(e, function(a) {
            var e = (0, m.H)(a, "thumb");
            if (e) {
                var k = a.getAttribute("src");
                e != k && (0, m.Q)(a, (0, m.V)(this)) == c && b.call(d, a, e)
            }
        }, a)
    };
    var hn = function(a, b, c) {
        a = (0, m.N)((0, m.V)(a));
        (0, m.A)(a, function(a) {
            b.call(c, a)
        })
    };
    var tn = function(a, b) {
        if (b) {
            var c = a.wa(b);
            c && (jn(a, c), rn(a, c), c = (0, m.N)((0, m.V)(a), c), (0, m.A)(c, function(a) {
                jn(this, a);
                rn(this, a)
            }, a))
        }
    };
    m.un = function() {
        m.fn.getInstance().j()
    };
    m.vn = function(a) {
        var b = m.fn.getInstance();
        (0, m.wd)(a, (0, m.V)(b)) && (rn(b, a), a = (0, m.N)((0, m.V)(b), a), (0, m.A)(a, function(a) {
            rn(this, a)
        }, b))
    };
    m.wn = function() {
        this.b = {};
        this.g = {}
    };
    var xn = function() {
        this.b = {}
    };
    var yn = function(a) {
        var b = (0, m.H)(a, "sessionlink-target") || a.href;
        b && (a = (0, m.H)(a, "sessionlink") || "", a = (0, m.xf)(a), Ai(b, a))
    };
    m.zn = function() {
        this.b = {}
    };
    var An = function(a, b, c) {
        var d = a.wa(b);
        if (!(0, m.wd)(d, (0, m.V)(a, "is-moving"))) {
            b = (0, m.jl)(a, "list", d);
            var e = (0, m.jl)(a, "body", d),
                g = (0, m.ed)((0, m.N)((0, m.V)(a, "item"), d));
            if (g) {
                if ("forward" == c) {
                    c = Bn(d, e, g);
                    c = (0, m.Ke)(c);
                    if (!c) return;
                    var h = Cn(a, c, e, g)
                } else if ("back" == c) {
                    c = Dn(d, e, g);
                    c = (0, m.Le)(c);
                    if (!c) return;
                    h = En(a, c, e, g)
                }(0, m.I)(d, (0, m.V)(a, "is-moving"));
                (0, m.Og)(d) ? b.style.right = ((0, window.parseInt)(b.style.right, 10) || 0) - h + "px": b.style.left = ((0, window.parseInt)(b.style.left, 10) || 0) + h + "px";
                var k = (0, m.w)((0, m.r)(a.xw,
                    a, d), 510);
                (0, m.eg)(b, m.Fn, (0, m.r)(function() {
                    (0, m.x)(k);
                    this.xw(d)
                }, a))
            }
        }
    };
    var Dn = function(a, b, c) {
        return (0, m.Og)(a) ? Gn(a, b, c) : Hn(a, b, c)
    };
    var Bn = function(a, b, c) {
        return (0, m.Og)(a) ? Hn(a, b, c) : Gn(a, b, c)
    };
    var Hn = function(a, b, c) {
        function d(a) {
            return (0, m.Pg)(a) > e - 1
        }
        var e = (0, m.Pg)(b);
        return (0, m.Og)(a) ? (0, m.id)(c, d) : (0, m.Wb)(c, d)
    };
    var Gn = function(a, b, c) {
        function d(a) {
            a = (0, m.Pg)(a) + a.offsetWidth;
            return e > a - 1
        }
        var e = (0, m.Pg)(b) + b.offsetWidth;
        return (0, m.Og)(a) ? (0, m.Wb)(c, d) : (0, m.id)(c, d)
    };
    var En = function(a, b, c, d) {
        var e, g = a.wa(b);
        e = (0, m.Pg)(c);
        var h = e + c.offsetWidth,
            k = (0, m.Pg)(b);
        b = k + b.offsetWidth;
        var p = d[0];
        d = (0, m.Pg)(p);
        p = d + p.offsetWidth;
        (0, m.Og)(g) ? (c = a.gq(g, c) - k, e = h - p) : (c = a.hq(g, c) - b, e -= d);
        (0, m.zd)(g, (0, m.V)(a, "at-tail"), !1);
        if (Math.abs(c) + 1 < Math.abs(e)) return c;
        (0, m.zd)(g, (0, m.V)(a, "at-head"), !0);
        return e
    };
    var Cn = function(a, b, c, d) {
        var e, g = a.wa(b);
        e = (0, m.Pg)(c);
        var h = e + c.offsetWidth,
            k = (0, m.Pg)(b);
        b = k + b.offsetWidth;
        var p = d[d.length - 1];
        d = (0, m.Pg)(p);
        p = d + p.offsetWidth;
        (0, m.Og)(g) ? (c = a.hq(g, c) - b, e -= d) : (c = a.gq(g, c) - k, e = h - p);
        (0, m.zd)(g, (0, m.V)(a, "at-head"), !1);
        if (Math.abs(c) + 1 < Math.abs(e)) return c;
        (0, m.zd)(g, (0, m.V)(a, "at-tail"), !0);
        return e
    };
    var In = function(a, b) {
        var c = (0, m.jl)(a, "body", b),
            d = (0, m.ed)((0, m.N)((0, m.V)(a, "item"), b)),
            e;
        d && d.length ? (e = Dn(b, c, d), c = Bn(b, c, d), e = e == d[0], d = c == d[d.length - 1]) : e = d = !0;
        (0, m.zd)(b, (0, m.V)(a, "at-head"), e);
        (0, m.zd)(b, (0, m.V)(a, "at-tail"), d);
        if (a.U(b, "disable-slider-buttons")) {
            if (c = (0, m.jl)(a, "prev", b)) c.disabled = e;
            if (e = (0, m.jl)(a, "next", b)) e.disabled = d
        }
    };
    var Jn = function(a) {
        var b = tf("/signin?context=popup", "next", window.document.location.protocol + "//" + window.document.domain + "/post_login"),
            b = tf(b, "feature", "sub_button");
        if (b = window.open(b, "loginPopup", "width=375,height=440,resizable=yes,scrollbars=yes", !0)) {
            var c = (0, m.y)("LOGGED_IN", function(b) {
                (0, m.Ka)((0, m.v)("LOGGED_IN_PUBSUB_KEY"));
                (0, m.ra)("LOGGED_IN", !0);
                a(b)
            });
            (0, m.ra)("LOGGED_IN_PUBSUB_KEY", c);
            b.moveTo((window.screen.width - 375) / 2, (window.screen.height - 440) / 2)
        }
    };
    var Kn = function() {
        var a = (0, m.v)("PLAYER_CONFIG");
        return a && a.args && void 0 !== a.args.authuser || null != (0, m.v)("SESSION_INDEX") || (0, m.v)("LOGGED_IN") ? !0 : !1
    };
    m.Ln = function() {
        return (0, m.Uf)(["fullscreenElement", "fullScreenElement"], window.document)
    };
    m.Mn = function() {
        this.b = {}
    };
    m.Nn = function(a, b, c) {
        (0, m.Hc)(b, "tooltip-text", c);
        a = a.U(b, "content-id");
        if (a = (0, m.D)(a)) a.innerHTML = c
    };
    m.On = function(a, b) {
        return a.U(b, "tooltip-text") || b.title
    };
    m.Pn = function(a, b) {
        if (b) {
            var c = (0, m.On)(a, b);
            if (c) {
                var d = (0, m.D)(Qn(a, b));
                if (!d) {
                    d = window.document.createElement("div");
                    d.id = Qn(a, b);
                    d.className = (0, m.V)(a, "tip");
                    var e = window.document.createElement("div");
                    e.className = (0, m.V)(a, "tip-body");
                    var g = window.document.createElement("div");
                    g.className = (0, m.V)(a, "tip-arrow");
                    var h = window.document.createElement("div");
                    h.className = (0, m.V)(a, "tip-content");
                    var k = Rn(a, b),
                        p = Qn(a, b, "content");
                    h.id = p;
                    (0, m.Hc)(b, "content-id", p);
                    e.appendChild(h);
                    k && d.appendChild(k);
                    d.appendChild(e);
                    d.appendChild(g);
                    ((0, m.Ln)() || window.document.body).appendChild(d);
                    (0, m.Nn)(a, b, c);
                    (c = (0, window.parseInt)(a.U(b, "tooltip-max-width"), 10)) && e.offsetWidth > c && (e.style.width = c + "px", (0, m.L)(h, (0, m.V)(a, "normal-wrap")));
                    h = (0, m.Hd)(b, (0, m.V)(a, "reverse"));
                    Sn(a, b, d, e, k, h) || Sn(a, b, d, e, k, !h);
                    var u = (0, m.V)(a, "tip-visible");
                    (0, m.w)(function() {
                        (0, m.L)(d, u)
                    }, 0)
                }
            }
        }
    };
    var Sn = function(a, b, c, d, e, g) {
        (0, m.Id)(c, (0, m.V)(a, "tip-reverse"), g);
        var h = 0;
        g && (h = 1);
        var k = (0, m.Wg)(b);
        g = new m.Nd((k.width - 10) / 2, g ? k.height : 0);
        var p = (0, m.Ng)(b);
        (0, m.Zk)(new m.Nd(p.x + g.x, p.y + g.y), c, h);
        h = (0, m.ie)();
        p = (0, m.Sg)(c);
        c = (0, m.Wg)(d);
        var u = Math.floor(c.width / 2);
        e && (e.style.left = "3px", e.style.height = c.height + "px", e.style.width = c.width + "px");
        e = !!(h.height < p.y + k.height);
        k = !!(p.y < k.height);
        g = !!(p.x < u);
        h = !!(h.width < p.x + u);
        p = (c.width + 3) / -2 - -5;
        a = a.U(b, "force-tooltip-direction");
        if ("left" == a || g) p = -5;
        else if ("right" == a || h) p = 20 - c.width - 3;
        d.style.left = Math.floor(p) + "px";
        return !(e || k)
    };
    m.Tn = function(a, b) {
        if (b) {
            var c = (0, m.D)(Qn(a, b));
            c && (Un(c), (0, m.De)(c), a.removeData(b, "content-id"))
        }
    };
    var Qn = function(a, b, c) {
        a = (0, m.V)(a) + (0, m.Jf)(b);
        c && (a += "-" + c);
        return a
    };
    var Rn = function(a, b) {
        var c = null;
        m.Dh && (0, m.Hd)(b, (0, m.V)(a, "masked")) && ((c = (0, m.D)("yt-uix-tooltip-shared-mask")) ? (c.parentNode.removeChild(c), m.T.show(c)) : (c = window.document.createElement("iframe"), c.src = 'javascript:""', c.id = "yt-uix-tooltip-shared-mask", c.className = (0, m.V)(a, "tip-mask")));
        return c
    };
    var Un = function(a) {
        var b = (0, m.D)("yt-uix-tooltip-shared-mask"),
            c = b && (0, m.af)(b, function(b) {
                return b == a
            }, !1, 2);
        b && c && (b.parentNode.removeChild(b), m.T.hide(b), window.document.body.appendChild(b))
    };
    m.Vn = function() {
        this.b = {};
        this.g = []
    };
    m.Wn = function(a, b, c) {
        b = (0, m.O)((0, m.V)(a), b);
        return c ? b && Xn(a, b) ? null : b : b
    };
    m.Yn = function(a, b) {
        return !!a.U(b, "is-subscribed")
    };
    var Xn = function(a, b) {
        return !!a.U(b, "ypc-enabled")
    };
    var Zn = function(a, b) {
        var c = a.U(b, $n.FI),
            d = (0, m.Yn)(a, b),
            c = "-" + c,
            e = ao.BI + c;
        (0, m.Id)(b, ao.AI + c, !d);
        (0, m.Id)(b, e, d);
        a.U(b, $n.DI) && !a.U(b, $n.CI) && (c = (0, m.V)(m.Mn.getInstance()), (0, m.Id)(b, c, !d), b.title = d ? "" : a.U(b, $n.EI));
        d ? (0, m.w)(function() {
            (0, m.L)(b, ao.cw)
        }, 1E3) : (0, m.M)(b, ao.cw)
    };
    var bo = function(a, b) {
        var c = (0, m.N)((0, m.V)(a));
        return (0, m.Lb)(c, function(a) {
            return b == this.Aj(a)
        }, a)
    };
    var co = function(a, b) {
        var c = (0, m.r)(function(a) {
            a.subscription_ajax && (0, m.ua)("subscription_ajax", a.subscription_ajax);
            this.Pp(b)
        }, a);
        Jn(c)
    };
    var eo = function() {
        this.b = {};
        this.g = []
    };
    var fo = function(a, b) {
        var c = (0, m.N)((0, m.V)(a));
        return (0, m.Lb)(c, function(a) {
            return b == this.Aj(a)
        }, a)
    };
    m.go = function() {
        this.b = {}
    };
    var ho = function(a, b) {
        var c = a.U(b, "uix-tabs-target-id");
        return (0, m.D)(c)
    };
    var io = function() {
        this.b = {}
    };
    var jo = function() {
        ko.fq = lo();
        mo()
    };
    var no = function() {
        ko.fq = lo();
        oo()
    };
    var lo = function() {
        var a = an(!0),
            b = (0, m.Zm)();
        return new m.ug(a.y, a.x + b.width - 1, a.y + b.height - 1, a.x)
    };
    var po = function(a) {
        var b = (0, m.Jf)(a),
            c = ko.Bp[b];
        if (c) return c;
        c = (0, m.R)(a, "scroll", qo);
        return c = ko.Bp[b] = {
            gb: a,
            b: c,
            Dh: null
        }
    };
    var qo = function(a) {
        mo(a.target)
    };
    var ro = function(a, b) {
        var c;
        c = b ? a : (0, m.Pe)(a);
        return c ? (c = (0, m.Q)(c, "yt-viewport")) ? po(c) : null : null
    };
    var so = function(a, b) {
        if (a.Dh && !b) return a.Dh;
        var c = to(a.gb),
            d = ro(a.gb);
        d && (d = so(d, b), c = uo(c, d));
        return a.Dh = c
    };
    var to = function(a) {
        var b = (0, m.Ng)(a);
        a = bh(a);
        return new m.ug(b.y, b.x + a.width - 1, b.y + a.height - 1, b.x)
    };
    var uo = function(a) {
        var b = [],
            c = [],
            d = [],
            e = [];
        (0, m.A)(arguments, function(a) {
            b.push(a.top);
            c.push(a.right);
            d.push(a.bottom);
            e.push(a.left)
        });
        var g = Math.max.apply(Math, b),
            h = Math.min.apply(Math, c),
            k = Math.min.apply(Math, d),
            p = Math.max.apply(Math, e);
        return g > k || p > h ? new m.ug(0, 0, 0, 0) : new m.ug(g, h, k, p)
    };
    var vo = function(a, b, c) {
        var d = (0, m.Jf)(a) + "";
        if (b.hasOwnProperty(d)) b = b[d];
        else {
            var e;
            var g = ko.fq;
            e = to(a);
            c.transform && (0, m.vg)(e, c.transform);
            c = c.complete ? wg : xg;
            c.call(m.ug, g, e) ? (a = ro(a)) ? (so(a), g = uo(g, a.Dh), e = c.call(m.ug, g, e)) : e = !0 : e = !1;
            b[d] = b = e
        }
        if (Boolean(ko.gw[d]) != b) return b ? "visible" : "hidden"
    };
    var wo = function(a, b) {
        (0, m.Qa)(ko.eb, function(c) {
            if (!b || (0, m.Re)(b, c.gb)) {
                var d = vo(c.gb, a, c.options);
                d && d == c.type && (0, m.w)((0, m.E)(c.Bj, c.gb, c.type), 0)
            }
        })
    };
    var xo = function(a, b) {
        (0, m.Qa)(ko.dq, function(c) {
            if (!b || (0, m.Re)(c.gb, b) || (0, m.Re)(b, c.gb)) {
                var d = c.filter(c.gb);
                if (d && d.length) {
                    var e = [];
                    (0, m.A)(d, function(b) {
                        var d = vo(b, a, c.options);
                        d && d == c.type && e.push(b)
                    });
                    e.length && (0, m.w)((0, m.E)(c.Bj, e, c.type), 0)
                }
            }
        })
    };
    var oo = function(a) {
        var b = {};
        wo(b, a);
        xo(b, a);
        (0, m.Ic)(ko.gw, b)
    };
    var yo = function(a, b) {
        return (0, m.gc)(ko.dq, function(c) {
            return c.gb == a && "visible" == c.type && c.Bj == b && "vve-check" == c.className
        })
    };
    var zo = function(a, b) {
        var c = (0, m.N)("yt-viewport", b);
        (0, m.A)(c, a)
    };
    var Ao = function(a) {
        zo(function(a) {
            po(a)
        }, a);
        (0, m.Oe)(a) && ro(a, !0)
    };
    var Bo = function(a, b) {
        (0, m.Qa)(ko.Bp, function(c) {
            b && !(0, m.Re)(b, c.gb) || b == c.gb || a(c)
        })
    };
    var Co = function(a) {
        var b = so(a, !0);
        a = a.Dh;
        return !(a == b || a && b && a.top == b.top && a.right == b.right && a.bottom == b.bottom && a.left == b.left)
    };
    var Do = function() {
        if (!Eo) throw Error("yt.dom.VisibilityMonitor is not initialized.");
    };
    var mo = function(a) {
        Do();
        var b;
        if (a)
            for (b = ro(a, !0); b && Co(b);) b = ro(a);
        Bo(function(a) {
            delete a.Dh
        }, b ? b.gb : a);
        oo(a)
    };
    var Fo = function() {
        var a = null,
            b = Go;
        Do();
        var a = a || window.document,
            c = yo(a, b);
        c || (Ao(a), c = ++Ho + "", ko.dq[c] = {
            gb: a,
            type: "visible",
            Bj: b,
            filter: function(a) {
                return (0, m.N)("vve-check", a)
            },
            className: "vve-check",
            options: {
                transform: void 0,
                complete: void 0
            }
        })
    };
    var Io = function() {};
    var Jo = function(a, b, c) {
        return a[b] = a[b] || c
    };
    var Ko = function(a) {
        for (var b = 0; b < this.length; b++)
            if (this[b] === a) return b;
        return -1
    };
    var Lo = function(a) {
        a = a.sort();
        for (var b = [], c = void 0, d = 0; d < a.length; d++) {
            var e = a[d];
            e != c && b.push(e);
            c = e
        }
        return b
    };
    var Mo = function() {
        var a;
        if ((a = Object.create) && No.test(a)) a = a(null);
        else {
            a = {};
            for (var b in a) a[b] = void 0
        }
        return a
    };
    var Oo = function() {
        var a = Po.href,
            b;
        if (Qo.dpo) b = Qo.h;
        else {
            b = Qo.h;
            var c = RegExp("([#].*&|[#])jsh=([^&#]*)", "g"),
                d = RegExp("([?#].*&|[?#])jsh=([^&#]*)", "g");
            if (a = a && (c.exec(a) || d.exec(a))) try {
                b = (0, window.decodeURIComponent)(a[2])
            } catch (e) {}
        }
        return b
    };
    var Ro = function(a) {
        var b = Jo(Qo, "PQ", []);
        Qo.PQ = [];
        var c = b.length;
        if (0 === c) a();
        else
            for (var d = 0, e = function() {
                    ++d === c && a()
                }, g = 0; g < c; g++) b[g](e)
    };
    var So = function(a) {
        return Jo(Jo(Qo, "H", Mo()), a, Mo())
    };
    var To = function(a, b, c) {
        b && 0 < b.length && (b = Uo(b), c && 0 < c.length && (b += "___" + Uo(c)), 28 < b.length && (b = b.substr(0, 28) + (b.length - 28)), c = b, b = Jo(Vo, "_p", Mo()), Jo(b, c, Mo())[a] = (new Date).getTime(), b = Wo.r, "function" === typeof b ? b(a, "_p", c) : b.push([a, "_p", c]))
    };
    var Uo = function(a) {
        return a.join("__").replace(/\./g, "_").replace(/\-/g, "_").replace(/\,/g, "_")
    };
    var Xo = function(a) {
        throw Error("Bad hint" + (a ? ": " + a : ""));
    };
    var Yo = function(a, b, c, d) {
        var e = a.split(";"),
            g = Zo[e.shift()],
            h = null;
        g && (h = g(e, b, c, d));
        if (b = h) b = h, c = b.match($o), d = b.match(ap), b = !!d && 1 === d.length && bp.test(b) && !!c && 1 === c.length;
        b || Xo(a);
        return h
    };
    var cp = function(a, b, c, d) {
        function e(a) {
            return (0, window.encodeURIComponent)(a).replace(/%2C/g, ",")
        }
        a = dp(a);
        ep.test(c) || Xo("invalid_callback");
        b = fp(b);
        d = d && d.length ? fp(d) : null;
        return [(0, window.encodeURIComponent)(a.rJ).replace(/%2C/g, ",").replace(/%2F/g, "/"), "/k=", e(a.version), "/m=", e(b), d ? "/exm=" + e(d) : "", "/rt=j/sv=1/d=1/ed=1", a.Vw ? "/am=" + e(a.Vw) : "", a.Xw ? "/rs=" + e(a.Xw) : "", "/cb=", e(c)].join("")
    };
    var dp = function(a) {
        "/" !== a.charAt(0) && Xo("relative path");
        for (var b = a.substring(1).split("/"), c = []; b.length;) {
            a = b.shift();
            if (!a.length || 0 == a.indexOf(".")) Xo("empty/relative directory");
            else if (0 < a.indexOf("=")) {
                b.unshift(a);
                break
            }
            c.push(a)
        }
        a = {};
        for (var d = 0, e = b.length; d < e; ++d) {
            var g = b[d].split("="),
                h = (0, window.decodeURIComponent)(g[0]),
                k = (0, window.decodeURIComponent)(g[1]);
            2 == g.length && h && k && (a[h] = a[h] || k)
        }
        b = "/" + c.join("/");
        gp.test(b) || Xo("invalid_prefix");
        c = hp(a, "k", !0);
        d = hp(a, "am");
        a = hp(a, "rs");
        return {
            rJ: b,
            version: c,
            Vw: d,
            Xw: a
        }
    };
    var fp = function(a) {
        for (var b = [], c = 0, d = a.length; c < d; ++c) {
            var e = a[c].replace(/\./g, "_").replace(/-/g, "_");
            ip.test(e) && b.push(e)
        }
        return b.join(",")
    };
    var hp = function(a, b, c) {
        a = a[b];
        !a && c && Xo("missing: " + b);
        if (a) {
            if (jp.test(a)) return a;
            Xo("invalid: " + b)
        }
        return null
    };
    var kp = function() {
        var a = Oo();
        if (!a) throw Error("Bad hint");
        return a
    };
    var lp = function(a, b) {
        for (var c = [], d = 0; d < a.length; ++d) {
            var e = a[d];
            e && 0 > Ko.call(b, e) && c.push(e)
        }
        return c
    };
    var mp = function(a) {
        "loading" != np.readyState ? op(a) : np.write("<" + pp + ' src="' + (0, window.encodeURI)(a) + '"></' + pp + ">")
    };
    var op = function(a) {
		console.warn("pokTwo 2013: google api loading function attempted to be called")
    };
    var qp = function(a, b) {
        var c = b && b._c;
        if (c)
            for (var d = 0; d < rp.length; d++) {
                var e = rp[d][0],
                    g = rp[d][1];
                g && Object.prototype.hasOwnProperty.call(c, e) && g(c[e], a, b)
            }
    };
    var sp = function(a, b) {
        tp(function() {
            var c;
            c = b === Oo() ? Jo(up, "_", Mo()) : Mo();
            c = Jo(So(b), "_", c);
            a(c)
        })
    };
    var vp = function(a, b) {
        var c = b || {};
        "function" == typeof b && (c = {}, c.callback = b);
        qp(a, c);
        var d = a ? a.split(":") : [],
            e = c.h || kp(),
            g = Jo(Qo, "ah", Mo());
        if (g["::"] && d.length) {
            for (var h = [], k = null; k = d.shift();) {
                var p = k.split("."),
                    p = g[k] || g[p[1] && "ns:" + p[0] || ""] || e,
                    u = h.length && h[h.length - 1] || null,
                    z = u;
                u && u.hint == p || (z = {
                    hint: p,
                    mx: []
                }, h.push(z));
                z.mx.push(k)
            }
            var F = h.length;
            if (1 < F) {
                var K = c.callback;
                K && (c.callback = function() {
                    0 == --F && K()
                })
            }
            for (; d = h.shift();) wp(d.mx, c, d.hint)
        } else wp(d || [], c, e)
    };
    var wp = function(a, b, c) {
        function d(a, b) {
            if (u) return 0;
            xp.clearTimeout(p);
            F.push.apply(F, P);
            var d = ((up || {}).config || {}).update;
            d ? d(g) : g && Jo(Qo, "cu", []).push(g);
            if (b) {
                To("me0", a, K);
                try {
                    sp(b, c)
                } finally {
                    To("me1", a, K)
                }
            }
            return 1
        }
        a = Lo(a) || [];
        var e = b.callback,
            g = b.config,
            h = b.timeout,
            k = b.ontimeout,
            p = null,
            u = !1;
        if (h && !k || !h && k) throw "Timeout requires both the timeout parameter and ontimeout parameter to be set";
        var z = Jo(So(c), "r", []).sort(),
            F = Jo(So(c), "L", []).sort(),
            K = [].concat(z);
        0 < h && (p = xp.setTimeout(function() {
            u = !0;
            k()
        }, h));
        var P = lp(a, F);
        if (P.length) {
            var P = lp(a, z),
                W = Jo(Qo, "CP", []),
                oa = W.length;
            W[oa] = function(a) {
                function b() {
                    var a = W[oa + 1];
                    a && a()
                }

                function c(b) {
                    W[oa] = null;
                    d(P, a) && Ro(function() {
                        e && e();
                        b()
                    })
                }
                if (!a) return 0;
                To("ml1", P, K);
                0 < oa && W[oa - 1] ? W[oa] = function() {
                    c(b)
                } : c(b)
            };
            if (P.length) {
                var ob = "loaded_" + Qo.I++;
                up[ob] = function(a) {
                    W[oa](a);
                    up[ob] = null
                };
                a = Yo(c, P, "gapi." + ob, z);
                z.push.apply(z, P);
                To("ml0", P, K);
                b.sync || xp.___gapisync ? mp(a) : op(a)
            } else W[oa](Io)
        } else d(P) && e && e()
    };
    var tp = function(a) {
        if (Qo.hee && 0 < Qo.hel) try {
            return a()
        } catch (b) {
            Qo.hel--, vp("debug_error", function() {
                try {
                    window.___jsl.hefn(b)
                } catch (a) {
                    throw b;
                }
            })
        } else return a()
    };
    m.yp = function(a, b) {
        var c = (0, m.ga)(b) ? {
            callback: b
        } : b || {};
        c._c && c._c.jsl && c._c.jsl.h || (0, m.Ic)(c, {
            _c: {
                jsl: {
                    h: (0, m.v)("GAPI_HINT_PARAMS")
                }
            }
        });
        if ((0, m.v)("GAPI_HINT_OVERRIDE")) {
            var d = (0, m.yf)(window.document.location.href).gapi_jsh;
            d && (0, m.Ic)(c, {
                _c: {
                    jsl: {
                        h: d
                    }
                }
            })
        }
        vp(a, c)
    };
    m.zp = function(a, b, c) {
        var d = (0, m.v)("GAPI_HINT_PARAMS"),
            e = (0, m.v)("LOGGED_IN"),
            g = (0, m.v)("SESSION_INDEX"),
            h = (0, m.v)("DELEGATED_SESSION_ID"),
            k = {
                lang: (0, m.v)("GAPI_LOCALE"),
                "googleapis.config": {
                    signedIn: e
                },
                iframes: {
                    ":socialhost:": (0, m.v)("GAPI_HOST")
                }
            };
        b && c && (k.iframes[b] = {
            url: c
        });
        e && (g && (k["googleapis.config"].sessionIndex = g), h && (k["googleapis.config"].sessionDelegate = h));
        return {
            callback: a,
            config: k,
            _c: {
                jsl: {
                    h: d
                }
            }
        }
    };
    var Ap = function() {
        var a = (0, m.n)("gapi.config.update");
        a("googleapis.config/auth/useFirstPartyAuth", !0);
        var b = (0, m.v)("APIARY_HOST");
        (0, m.zc)((0, m.oc)(b)) || a("googleapis.config/root", window.location.protocol + "//" + b);
        (0, m.zc)((0, m.oc)((0, m.v)("APIARY_HOST_FIRSTPARTY"))) || a("googleapis.config/root-1p", window.location.protocol + "//" + b);
        a("googleapis.config/sessionIndex", (0, m.v)("SESSION_INDEX"));
        (0, m.n)("gapi.client.setApiKey")((0, m.v)("INNERTUBE_API_KEY"));
        Bp = !0
    };
    var Cp = function() {
        (0, m.yp)("client", Ap);
        Eo || (ko.eb = {}, ko.dq = {}, ko.Bp = {}, ko.gw = {}, ko.ce = [], ko.fq = lo(), ko.ce.push((0, m.y)("page-resize", jo)), ko.ce.push((0, m.y)("page-scroll", no)), Eo = !0);
        Fo();
        mo();
        (0, m.v)("VISIBILITY_DUMB_TIMEOUT") && (Dp.start(), (0, m.Cm)(Dp, "tick", function() {
            Ep()
        }))
    };
    var Go = function(a) {
        (0, m.A)(a, Fp);
        (0, m.v)("VISIBILITY_SMART_TIMEOUT") && ((0, m.x)(Gp), Gp = (0, m.w)(Ep, (0, m.v)("VISIBILITY_SMART_TIMEOUT")))
    };
    var Fp = function(a) {
        (0, m.M)(a, "vve-check");
        Hp.push(a)
    };
    var Ep = function() {
        if (0 != Hp.length && Bp) {
            var a = [];
            (0, m.A)(Hp, function(b) {
                (b = (0, m.H)(b, "visibility-tracking")) && a.push(b)
            });
            var b = {
                path: "/youtubei/vi/log_interaction",
                method: "POST",
                body: (0, m.Oi)({
                    interactions: [{
                        visibilityUpdate: {
                            visibilityTrackingParams: a
                        }
                    }],
                    context: {
                        client: {
                            hl: (0, m.v)("INNERTUBE_CONTEXT_HL"),
                            gl: (0, m.v)("INNERTUBE_CONTEXT_GL"),
                            clientName: "WEB",
                            clientVersion: (0, m.v)("INNERTUBE_CONTEXT_CLIENT_VERSION")
                        }
                    }
                })
            };
            (0, m.n)("gapi.client.request")(b).execute(function() {});
            Hp.length = 0
        }
    };
    var Ip = function() {
        this.i = []
    };
    var Jp = function(a) {
        if (!a) return !1;
        var b = a.redirect_url;
        if (!b) try {
            b = Sj(Qj(a), "redirect_url")
        } catch (c) {
            b = null
        }
        if (!b) return !1;
        (0, m.Bi)(b);
        return !0
    };
    var Kp = function(a, b, c, d, e, g, h) {
        a = {
            format: b,
            method: "POST",
            onError: h || (0, m.r)(a.dm, a),
            za: m.da,
            onSuccess: g || m.da,
            ba: e || {},
            ca: d || {}
        };
        (0, m.U)(c, a)
    };
    var Lp = function() {
        this.i = [];
        this.A = this.k = null;
        this.o = this.j = !1
    };
    var Mp = function(a) {
        var b = (0, m.Ac)(a),
            c = Np[b];
        c || (c = new a, Np[b] = c);
        return c
    };
    m.Op = function(a) {
        a = (0, m.Ac)(a);
        Np[a] && (Np[a].dispose(), delete Np[a])
    };
    var Pp = function() {
        Lp.call(this);
        this.g = this.b = null;
        this.B = !1
    };
    var Qp = function(a, b) {
        var c = Mp(Pp);
        b && (c.b = b);
        c.init((0, m.v)("CREATE_CHANNEL_CSS_URL"), (0, m.v)("CREATE_CHANNEL_JS_URL"), !a, (0, m.D)("body-container"), "create-channel-lightbox")
    };
    m.Rp = function(a, b, c, d) {
        if (d) {
            c.removeAttribute("id");
            (0, m.Gd)(c, Sp, a);
            a = (0, m.O)("yt-alert-message", c);
            var e = (0, m.O)("yt-alert-content", c);
            (a || e).innerHTML = b;
            d.appendChild(c);
            m.T.show(c);
            return c
        }
    };
    m.Tp = function(a) {
        var b = null;
        "transition" in a.style ? b = "transition-duration" : "webkitTransition" in a.style ? b = "-webkit-transition-duration" : "MozTransition" in a.style ? b = "-moz-transition-duration" : "OTransition" in a.style ? b = "-o-transition-duration" : "msTransition" in a.style && (b = "-ms-transition-duration");
        a = b ? (window.document.defaultView ? window.document.defaultView.getComputedStyle(a, null) : window.document.parentWindow.getComputedStyle(a, null)).getPropertyValue(b) : "0";
        return 1E3 * (0, window.parseFloat)(a)
    };
    m.Up = function() {
        Vp && !Wp && (Wp = !0, Xp = 0, Yp = window.document.querySelectorAll('[rel="spf-prefetch"]'), Zp(0))
    };
    var $p = function() {
        aq && (bq = (0, m.w)(function() {
            cq("css", (0, m.v)("PREFETCH_CSS_RESOURCES"));
            cq("js", (0, m.v)("PREFETCH_JS_RESOURCES"))
        }, 5E3))
    };
    var Zp = function(a) {
        if (Vp && Yp && !(Xp >= dq || a >= Yp.length)) {
            var b = Yp[a];
            b && b.href ? (window.spf.prefetch(b.href, {
                onSuccess: (0, m.E)(eq, a),
                onError: (0, m.E)(fq, a)
            }), Xp++) : fq(a)
        }
    };
    var cq = function(a, b) {
        "string" == typeof b && (b = [b]);
        var c = "js" == a ? window.spf.scripts.prefetch : window.spf.styles.prefetch;
        (0, m.A)(b, function(a) {
            a && c(a)
        })
    };
    var eq = function(a, b, c) {
        (0, m.B)("prefetch", b, c);
        gq = (0, m.w)((0, m.E)(Zp, a + 1), 500)
    };
    var fq = function(a) {
        gq = (0, m.w)((0, m.E)(Zp, a + 1), 500)
    };
    var hq = function(a, b) {
        a = (0, m.D)(a);
        var c = b || (0, m.Ac)(a),
            d = iq[c];
        d && (iq[c] = (0, m.Lb)(d, function(b) {
            return b[0] != a
        }))
    };
    var jq = function(a) {
        a in iq && !kq[a] && ((0, m.A)(iq[a], function(a) {
            var c = a[0];
            a = a[1];
            c && "IMG" == c.tagName && (c.onload = "", c.src = a)
        }), iq[a] = [], kq[a] = !0)
    };
    var lq = function() {
        mq = (0, m.v)("THUMB_DELAY_LOAD_BUFFER") || 0;
        (0, m.C)();
        nq.push((0, m.y)("page-resize", oq));
        nq.push((0, m.y)("page-scroll", oq));
        0 < ((0, m.v)("THUMB_NON_DELAY_LOAD_COUNT") || 0) ? pq.push((0, m.w)(qq, 3E3)) : qq()
    };
    var qq = function() {
        rq = sq();
        tq = !0;
        (0, m.uq)();
        (0, m.Xa)("tdl")
    };
    var sq = function() {
        var a = (0, m.Zm)();
        return an().y + a.height + mq
    };
    var oq = function() {
        if (tq) {
            var a = sq(),
                b = vq,
                c = Math.abs(b - a);
            if (!b || 400 <= c) {
                c = wq(a);
                for (b = wq(b); b < c;) xq(c), c--;
                vq = a
            }
        }
    };
    var yq = function() {
        for (var a = sq(), b = wq(a), a = (0, m.v)("THUMB_DELAY_LOAD_RATE_MS") || 0, c = 0; 0 <= b; b--) a ? pq.push((0, m.w)((0, m.E)(xq, b), a * c++)) : xq(b)
    };
    m.zq = function(a) {
        Aq(function(a, c) {
            var d = (0, m.H)(a, "group-key");
            d && (hq(a, d), (0, m.Gc)(a, "group-key"));
            a.src = c
        }, a)
    };
    m.uq = function(a, b) {
        tq && Aq((0, m.E)(Bq, !!b), a);
        (0, m.Ba)() ? Cq.push((0, m.Da)(yq)): yq()
    };
    var Bq = function(a, b, c) {
        var d = (0, m.H)(b, "group-key"),
            e = (0, m.H)(b, "thumb-manual");
        (0, m.Q)(b, "yt-uix-tdl") || e || d && !a || (d && hq(b, d), d = "thumb-group-" + wq(m.T.xj(b).y), a = (0, m.D)(b), e = d || (0, m.Ac)(a), e in iq || (iq[e] = []), iq[e].push([a, c]), kq[e] = !1, (0, m.Hc)(b, "group-key", d))
    };
    var Dq = function(a, b) {
        var c = (0, m.H)(b, "thumb");
        c && a.call(window, b, c)
    };
    var Aq = function(a, b) {
        var c = (0, m.fe)("img", null, b);
        (0, m.Ba)() ? (0, m.A)(c, function(b) {
            Cq.push((0, m.Da)((0, m.E)(Dq, a, b)))
        }) : (0, m.A)(c, (0, m.E)(Dq, a))
    };
    var xq = function(a) {
        jq("thumb-group-" + a)
    };
    var wq = function(a) {
        return Math.ceil(Math.max(0, a - rq) / 400)
    };
    m.Eq = function() {
        if (-2 == m.Fq) {
            m.Fq = (0, window.parseInt)((0, m.oh)("ACTIVITY", "-1"), 10);
            (0, m.R)(window.document, "keypress", m.Gq);
            (0, m.R)(window.document, "click", m.Hq);
            var a = (0, m.v)("LIST_AUTO_PLAY_VALUE");
            a && 1 < a || (0, m.Iq)()
        }
    };
    m.Gq = function() {
        (0, m.Iq)()
    };
    m.Hq = function() {
        (0, m.Iq)()
    };
    m.Iq = function() {
        (0, m.Eq)();
        var a = (0, m.C)();
        1E3 > a - m.Fq || (m.Fq = a, (0, m.mh)("ACTIVITY", "" + a))
    };
    m.Jq = function() {
        return -1 == m.Fq || -2 == m.Fq ? -1 : Math.max((0, m.C)() - m.Fq, 0)
    };
    m.Kq = function(a, b) {
        var c;
        if (b) {
            if (!(0, m.Lq)() || m.Mq) return;
            var d = m.Nq;
            d && (c = (0, m.H)(d, "autoplay-clicktracking") || "")
        }
        d = m.Oq;
        (0, m.Pq)(d.href, a || "bf_next", c, b);
        (0, m.Ci)(d.href)
    };
    m.Qq = function(a, b) {
        var c = b || "mr_meh";
        m.Rq || (0, m.Sq)();
        m.Tq ? m.Uq = (0, m.w)(function() {
            (0, m.Qq)(a, c)
        }, 1E3) : ((0, m.Vq)(a), 0 == a ? (0, m.Kq)(c, !0) : m.Uq = (0, m.w)(function() {
            (0, m.Qq)(a - 1, c)
        }, 1E3))
    };
    m.Lq = function() {
        return !(!m.Wq || !(0, m.yl)(m.kl.getInstance(), m.Wq))
    };
    m.Xq = function(a) {
        m.Yq && (a.y > m.Zq ? (0, m.I)(m.$q, "scrolled") : a.y < m.Zq - 50 && (0, m.J)(m.$q, "scrolled"))
    };
    m.Pq = function(a, b, c, d) {
        var e = (0, m.v)("EVENT_ID");
        e && (e = {
            ei: e
        }, b && (e.feature = b), c && (e.ved = c), (b = (0, m.v)("SHUFFLE_VALUE")) && (e.shuffle = b), d && (e.playnext = (0, m.v)("LIST_AUTO_PLAY_VALUE"), d = (0, m.Jq)(), 0 < d && (e.lact = d)), Ai(a, e))
    };
    m.Vq = function(a) {
        m.$q && (0, m.Hc)(m.$q, "autoplay-countdown", a)
    };
    m.Sq = function() {
        if (!0 != m.Yq && (0, m.Lq)()) {
            m.Yq = !0;
            (0, m.zd)(m.$q, "playlist-floating", !0);
            var a = window.document,
                b = a.body,
                a = a.documentElement;
            (0, m.Xq)(new m.Nd(b.scrollLeft || a.scrollLeft, b.scrollTop || a.scrollTop))
        }
    };
    m.ar = function() {
        return (0, m.v)("PLAYER_REFERENCE")
    };
    var br = function(a, b) {
        this.b = new m.Zl(a, !0);
        this.i = b;
        this.j = this.o = this.k = this.A = ""
    };
    var cr = function() {
        dr.push((0, m.y)("SHOW-FEED-PRIVACY-COMMENT-DIALOG", er));
        dr.push((0, m.y)("SHOW-FEED-PRIVACY-FAVORITE-DIALOG", fr));
        dr.push((0, m.y)("SHOW-FEED-PRIVACY-LIKE-DIALOG", gr));
        dr.push((0, m.y)("SHOW-FEED-PRIVACY-ADD-TO-PLAYLIST-DIALOG", hr));
        dr.push((0, m.y)("SHOW-FEED-PRIVACY-LIKE-PLAYLIST-DIALOG", ir));
        dr.push((0, m.y)("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG", jr))
    };
    var kr = function(a, b, c, d, e) {
        var g = (0, m.D)("feed-privacy-lb");
        g && (lr = new br(g, a), lr.A = b || "", lr.j = c || "", lr.k = d || "", lr.o = e || "", a = lr, (0, m.Lh)((0, m.v)("FEED_PRIVACY_CSS_URL")), mr(a, null, {
            channel_id: a.k,
            setting_type: a.i,
            time_created: a.j,
            playlist_id: a.o,
            video_id: a.A
        }))
    };
    var jr = function(a) {
        kr("SUBSCRIPTIONS", void 0, void 0, a)
    };
    var er = function(a, b) {
        kr("COMMENTS", a, b)
    };
    var gr = function(a) {
        kr("LIKES", a)
    };
    var fr = function(a) {
        kr("FAVORITES", a)
    };
    var hr = function(a, b) {
        kr("PLAYLISTS", a, void 0, void 0, b)
    };
    var ir = function(a) {
        kr("LIKE_PLAYLISTS", void 0, void 0, void 0, a)
    };
    var mr = function(a, b, c) {
        b = b || {};
        c = c || {};
        c.session_token = (0, m.ad)("feed_privacy_ajax");
        a = {
            method: "POST",
            format: "XML",
            ca: b,
            ba: c,
            onSuccess: (0, m.r)(a.C, a),
            onError: (0, m.r)(a.B, a)
        };
        (0, m.U)("/feed_privacy_ajax", a)
    };
    var nr = function() {
        this.i = [];
        this.J = this.A = "";
        this.B = null;
        this.C = this.k = !1;
        this.F = null;
        this.O = this.P = this.L = ""
    };
    var pr = function(a, b) {
        switch (b) {
            case "content":
                $l(a.j, "content");
                break;
            case "loading":
                $l(a.j, "loading");
                break;
            case "working":
                $l(a.j, "working")
        }
    };
    var qr = function(a, b) {
        if (a.k) {
            var c = b || a.O;
            c && ((0, m.Gd)(a.b, a.J, c), a.J = c)
        }
    };
    var rr = function() {
        nr.call(this);
        (0, m.Lh)((0, m.v)("IDENTITY_PROMPT_CSS_URL"))
    };
    var sr = function() {
        var a = (0, m.D)("body-container");
        tr.push((0, m.hg)(a, "mousedown", ur, "link-gplus-lightbox"));
        tr.push((0, m.hg)(a, "click", vr, "link-gplus-lightbox"));
        wr.push((0, m.y)("LINK-GPLUS-LOADER-DISMISS", xr));
        wr.push((0, m.y)("LINK-GPLUS-LOADER-CANCEL", yr));
        wr.push((0, m.y)("LINK-GPLUS-LOADER-GOTO-CONTENT-STATE", zr));
        wr.push((0, m.y)("LINK-GPLUS-LOADER-GOTO-WORKING-STATE", Ar));
        wr.push((0, m.y)("LINK-GPLUS-LOADER-SET-WAIT-CURSOR", Br));
        wr.push((0, m.y)("LINK-GPLUS-LOADER-SHOW-DIALOG", Cr))
    };
    var xr = function() {
        Dr = !0;
        (0, m.gm)(Er, "cancel")
    };
    var yr = function() {
        (0, m.gm)(Er, "cancel")
    };
    var zr = function() {
        $l(Er, "content")
    };
    var Ar = function() {
        $l(Er, "working")
    };
    var Br = function(a) {
        a ? window.document.body.style.cursor = "wait" : "wait" == window.document.body.style.cursor && (window.document.body.style.cursor = "default")
    };
    var ur = function() {
        if (!(0, m.D)("link-gplus-css")) {
            (0, m.Ra)((0, m.v)("LINK_GPLUS_JS_URL"), Fr);
            var a = (0, m.v)("LINK_GPLUS_CSS_URL"),
                b = (0, m.fe)("head", void 0, void 0)[0],
                a = (0, m.pe)("link", {
                    id: "link-gplus-css",
                    rel: "stylesheet",
                    href: a
                });
            (0, m.Ce)(b, a, 0)
        }
    };
    var Fr = function() {
        Gr = !0;
        Hr && Gr && Ir()
    };
    var vr = function(a) {
        var b = (0, m.Q)(a.target, "link-gplus-lightbox");
        Jr = (0, m.Hd)(b, "ignore-opt-out");
        Kr = (0, m.H)(b, "upsell");
        a.preventDefault();
        Lr()
    };
    var Lr = function() {
        if (!Er) {
            var a = (0, m.D)("link-gplus-lb");
            if (!a) return;
            Er = new m.Zl(a, !0)
        }
        Dr ? "upload" == Kr && (0, m.Bi)("/upload") : (Hr = !0, Br(!0), Gr && Ir())
    };
    var Ir = function() {
        var a = "";
        if ("upload" == Kr) a = "/upload";
        else if ("settings" == Kr) a = "/account";
        else if ("fans" == Kr) a = "/audience";
        else if ("active_signin" == Kr || "channel" == Kr || "comment" == Kr || "plus_page" == Kr) a = (0, m.v)("LINK_GPLUS_NEXT_URL");
        (0, m.n)("yt.www.account.LinkGplusDialog.fetchAndShow")(Kr, a, Jr)
    };
    var Mr = function(a) {
        sr();
        ur();
        if (a) Jr = !0, Kr = a;
        else if (Jr = !1, Kr = "signin", (a = (0, m.v)("ID_MERGE_FEATURE_TYPE")) && (Kr = a), "channel" == a || "settings" == a) Jr = !0;
        Lr()
    };
    var Cr = function() {
        $l(Er, "content");
        Er.show();
        var a = (0, m.O)("yt-dialog-fg", (0, m.D)("link-gplus-lb")),
            b = m.T.xj(a);
        a.style.position = "fixed";
        a.style.top = "95px";
        b.x && (a.style.left = b.x + "px")
    };
    var Nr = function() {
        (0, m.A)(Or, function(a) {
            a && a.abort()
        });
        Or.length = 0;
        Pr.length = 0
    };
    m.Qr = function(a, b, c, d) {
        a = Rr(a);
        if (a.length) {
            c = c || {};
            c.frags = a.join(",");
            if ((0, m.lc)(a, "guide")) {
                b && (0, m.B)((0, m.n)("yt.www.guide.MANUAL_LOADING"));
                var e = (0, m.D)("guide-container");
                e && (0, m.wd)(e, "collapsible-guide") && (c.gc = "1")
            }
            c = (0, m.uf)("/watch_fragments_ajax", c);
            e = (0, m.Af)({
                session_token: (0, m.ad)("watch_fragments_ajax")
            });
            Or.push(window.spf.load(c, {
                method: "POST",
                postData: e,
                onSuccess: function() {
                    if ((0, m.lc)(a, "guide")) {
                        var c = (0, m.n)("yt.www.guide.setup");
                        c && c(b);
                        var c = (0, m.v)("GUIDE_SELECTED_ITEM"),
                            e = (0, m.n)("yt.www.guide.selectGuideItem");
                        e && e(c);
                        (0, m.B)("appbar-guide-delay-load")
                    }(0, m.B)("yt-www-pageFrameCssNotifications-load");
                    d && d()
                }
            }));
            Pr = (0, m.fd)(Pr, a)
        }
    };
    var Rr = function(a) {
        return (0, m.Lb)(a, function(a) {
            return !(0, m.lc)(Pr, a)
        })
    };
    var Sr = function(a, b) {
        this.j = a || null;
        this.i = !!b;
        this.g = new m.Vh;
        this.b = new Tr("", void 0);
        this.b.next = this.b.b = this.b
    };
    var Ur = function(a, b) {
        var c = a.g.get(b);
        c && a.i && (c.remove(), Vr(a, c));
        return c
    };
    var Vr = function(a, b) {
        a.i ? (b.next = a.b.next, b.b = a.b, a.b.next = b, b.next.b = b) : (b.b = a.b.b, b.next = a.b, a.b.b = b, b.b.next = b);
        null != a.j && Wr(a, a.j)
    };
    var Wr = function(a, b) {
        for (var c = a.g.Za(); c > b; c--) {
            var d = a,
                e = a.i ? a.b.b : a.b.next;
            e.remove();
            d.g.remove(e.key)
        }
    };
    var Xr = function(a, b) {
        a.b != b && (b.remove(), a.g.remove(b.key));
        return b.value
    };
    var Tr = function(a, b) {
        this.key = a;
        this.value = b
    };
    var Yr = function() {
        if ((0, m.v)("UNIVERSAL_HOVERCARDS")) {
            var a = (0, m.v)("LOGGED_IN"),
                b = (0, m.v)("SESSION_INDEX"),
                c = (0, m.v)("DELEGATED_SESSION_ID"),
                d = {
                    "googleapis.config": {
                        signedIn: a
                    },
                    iframes: {
                        card: {
                            url: (0, m.v)("GAPI_HOST") + "/:session_prefix:_/hovercard/internalcard?p=36&hl=" + (0, m.v)("GAPI_LOCALE")
                        }
                    }
                };
            a && (b && (d["googleapis.config"].sessionIndex = b), c && (d["googleapis.config"].sessionDelegate = c));
            (0, m.yp)("card:gapi.iframes", {
                callback: function() {
                    var a = (0, m.n)("gapi.config.update");
                    if (a) {
                        var b = ((0, m.mf)(window.location.href) ||
                            "/").split("/");
                        a("card/source", "youtube" + (b[1] ? "." + b[1] : ""));
                        a("card/hoverDelay", 450);
                        a("card/loadDelay", 250);
                        a("card/closeDelay", 200);
                        a("card/usegapi", 1)
                    }(a = (0, m.n)("gapi.card.watch")) && a();
                    (a = (0, m.n)("gapi.card.addCallback")) && a(Zr);
                    $r = (a = (0, m.n)("gapi.iframes.makeWhiteListIframesFilter")) && a(as)
                },
                config: d
            })
        }
        for (a = 0; a < bs.length; a++) b = bs[a], cs.push((0, m.y)(b, (0, m.E)(ds, b)))
    };
    var Zr = function(a) {
        if ("show" == a.type) {
            var b = a.frame;
            if (b) {
                var c = "frameId_" + (0, m.Ac)(b);
                if (!es[c]) {
                    try {
                        b.register("ytsubscribe-msg", fs, $r)
                    } catch (d) {}
                    es[c] = b
                }
            }
        }
        "yt-pubsub" == a.action && a.data && fs(a.data)
    };
    var fs = function(a) {
        var b = a.pubsub;
        a = a.msgId;
        !b || a && gs.get(a) || (a && gs.set(a, !0), b && m.B.apply(null, b))
    };
    var ds = function(a) {
        var b = (0, m.Mb)(arguments, function(a) {
            try {
                return m.ca.JSON.stringify(a), a
            } catch (b) {}
        });
        (0, m.Qa)(es, function(a) {
            try {
                a.send("ytsubscribe-cmd", {
                    pubsub: b
                }, void 0, $r)
            } catch (c) {}
        });
        var c = (0, m.n)("gapi.card.broadcast");
        c && c({
            action: "yt-pubsub",
            data: {
                eventType: "pubsub",
                pubsub: b
            }
        })
    };
    var hs = function(a, b) {
        (0, m.U)(a, {
            format: "XML",
            method: "POST",
            ca: {
                privacy: b.privacy || null,
                feature: b.GF || null,
                authuser: b.mb || null,
                pageid: b.yb || null,
                add_to_top: b.KE || null
            },
            ba: {
                video_ids: b.ob,
                full_list_id: b.al || null,
                new_playlist_name: b.vp || null,
                session_token: (0, m.ad)("addto_ajax"),
                plid: (0, m.v)("PLAYBACK_ID") || null
            },
            N: b.N,
            onError: b.onError,
            onSuccess: b.onSuccess
        })
    };
    m.is = function(a) {
        hs("/addto_ajax?action_add_to_watch_later_list=1", a)
    };
    m.js = function(a) {
        hs(a.vp ? "/addto_ajax?action_add_to_new_playlist=1" : "/addto_ajax?action_add_to_playlist=1", a)
    };
    var ks = function(a) {
        ls = (0, m.H)(a, "video-ids")
    };
    var ms = function(a) {
        var b = (0, m.Bf)("/addto_ajax", {
                action_redirect_to_signin_with_add: 1,
                video_ids: ls,
                next_url: window.document.location
            }),
            c = (0, m.ue)("form");
        c.action = b;
        c.method = "POST";
        b = (0, m.ue)("input");
        b.type = "hidden";
        b.name = "session_token";
        b.value = (0, m.ad)("addto_ajax_logged_out");
        c.appendChild(b);
        window.document.body.appendChild(c);
        c.submit();
        a.preventDefault()
    };
    var ns = function(a) {
        Fd(a, "addto-watch-later-button", "addto-watch-later-button-loading");
        var b = (0, m.H)(a, "video-ids");
        (0, m.U)("/addto_ajax", {
            method: "POST",
            format: "XML",
            ca: {
                action_add_to_watch_later_list: 1
            },
            ba: {
                session_token: (0, m.ad)("addto_ajax"),
                video_ids: b
            },
            onSuccess: function(c, d) {
                var e = d.list_id;
                os(e, b, a);
                (0, m.B)("playlist-addto", b, e)
            },
            onError: function(c, d) {
                6 == d.return_code ? os(d.list_id, b, a) : ps(a, d)
            }
        })
    };
    var qs = function(a) {
        Fd(a, "addto-watch-later-button-success", "addto-watch-later-button-loading");
        var b = (0, m.H)(a, "video-ids");
        (0, m.U)("/addto_ajax", {
            method: "POST",
            format: "XML",
            ca: {
                action_delete_from_watch_later_list: 1
            },
            ba: {
                session_token: (0, m.ad)("addto_ajax"),
                video_ids: b
            },
            onSuccess: function() {
                Fd(a, "addto-watch-later-button-loading", "addto-watch-later-button");
                var b = (0, m.Yc)("ADDTO_WATCH_LATER");
                (0, m.Nn)(m.Mn.getInstance(), a, b)
            },
            onError: function(b, d) {
                ps(a, d)
            }
        })
    };
    var os = function(a, b, c) {
        Fd(c, "addto-watch-later-button-loading", "addto-watch-later-button-success");
        var d = (0, m.Yc)("ADDTO_WATCH_LATER_ADDED");
        (0, m.Nn)(m.Mn.getInstance(), c, d);
        (0, m.B)("WATCH_LATER_UPDATED", a, b.split(","))
    };
    var ps = function(a, b) {
        Fd(a, "addto-watch-later-button-loading", "addto-watch-later-button-error");
        var c = b.error_message || (0, m.Yc)("ADDTO_WATCH_LATER_ERROR");
        (0, m.Nn)(m.Mn.getInstance(), a, c)
    };
    var rs = function() {
        return (0, m.Q)((0, m.O)("subscription-preferences-overlay-content-container"), "yt-dialog")
    };
    var ss = function(a) {
        var b = rs();
        ts(!0);
        m.hm.getInstance().show(b);
        b = {};
        b.session_token = (0, m.ad)("subscription_ajax");
        b.s = a;
        (0, m.U)("/subscription_ajax?action_get_subscription_preferences_overlay=1", {
            method: "POST",
            ba: b,
            onSuccess: function(a, b) {
                var e = b.content_html,
                    g = rs();
                ts(!1);
                (0, m.O)("subscription-preferences-overlay-content", g).innerHTML = e;
                e = (0, m.mm)();
                e = (0, m.O)("overlay-confirmation-save-button", e);
                (0, m.S)(us);
                us = [(0, m.R)(e, "click", vs)]
            },
            onError: function() {
                m.hm.getInstance().hide()
            }
        })
    };
    var ts = function(a) {
        var b = rs(),
            c = (0, m.O)("subscription-preferences-overlay-loading", b),
            b = (0, m.O)("subscription-preferences-overlay-content", b);
        m.T.xb(c, a);
        m.T.xb(b, !a)
    };
    var ws = function(a) {
        var b = !!(0, m.O)("email-on-upload", a).checked;
        a = !!(0, m.O)("is-upload-only", a).checked;
        return {
            "email-on-upload": b,
            "is-upload-only": a
        }
    };
    var vs = function(a) {
        var b = (0, m.Q)(a.currentTarget, "yt-dialog-fg");
        if (b) {
            a = (0, m.H)(a.currentTarget, "subscription-id");
            var c = ws(b);
            (0, m.B)("subscription-prefs", a, c["email-on-upload"], c["is-upload-only"], function() {
                (0, m.Pl)((0, m.O)("email-on-upload", b), null["email-on-upload"]);
                (0, m.Pl)((0, m.O)("is-upload-only", b), null["is-upload-only"])
            });
            m.hm.getInstance().hide()
        }
    };
    var xs = function(a, b, c, d, e, g) {
        b ? ys ? (0, m.B)("subscription-external-subscribe", a, b, null, d, e) : (0, m.B)("ypc-delayedloader-load", function() {
            (0, m.B)("ypc-init-subscription", b)
        }) : zs(a, c, d, e, g)
    };
    var As = function(a, b, c, d, e, g, h) {
        c ? ys ? (0, m.B)("subscription-external-unsubscribe", a, b, c, null, e, g) : (0, m.B)("ypc-delayedloader-load", function() {
            (0, m.B)("ypc-subscription-cancel", c)
        }) : Bs(a, b, d, e, g, h)
    };
    var Cs = function(a) {
        if (a.length) {
            var b = (0, m.ac)(a, 0, 40);
            (0, m.B)("subscription-batch-subscribe-loading", b);
            Ds("subscription-subscribe-loading", b);
            var c = {};
            c.session_token = (0, m.ad)("subscription_ajax");
            c.a = b.join(",");
            var d = function() {
                (0, m.B)("subscription-batch-subscribe-loaded", b);
                Ds("subscription-subscribe-loaded", b)
            };
            (0, m.U)("/subscription_ajax?action_create_subscription_to_all=1", {
                method: "POST",
                ba: c,
                onSuccess: function(c, g) {
                    d();
                    var h = g.response,
                        k = h.id;
                    if ((0, m.fa)(k) && k.length == b.length) {
                        var p = {};
                        (0, m.A)(k, function(a, c) {
                            p[b[c]] = a
                        });
                        (0, m.B)("subscription-batch-subscribe-success", p);
                        (0, m.Qa)(p, function(a, b) {
                            (0, m.B)("subscription-subscribe-success", b, a)
                        });
                        (h = h.guide_notification_html_content) && (0, m.B)("guide-add-subscription", h);
                        a.length && Cs(a)
                    }
                },
                onError: function() {
                    d();
                    (0, m.B)("subscription-batch-subscribe-failure", b);
                    Ds("subscription-subscribe-failure", b)
                }
            })
        }
    };
    var Es = function(a) {
        if (!(0, m.Nc)(a)) {
            var b = (0, m.Pc)(a),
                c = (0, m.ac)(b, 0, 40),
                d = [];
            (0, m.A)(c, function(b) {
                d.push(a[b])
            });
            var e = {};
            (0, m.A)(b, function(b) {
                e[b] = a[b]
            });
            (0, m.B)("subscription-batch-unsubscribe-loading", c);
            Ds("subscription-unsubscirbe-loading", c);
            b = {};
            b.session_token = (0, m.ad)("subscription_ajax");
            b.s = d.join(",");
            var g = function() {
                (0, m.B)("subscription-batch-unsubscribe-loaded", c);
                Ds("subscription-unsubscribe-loaded", c)
            };
            (0, m.U)("/subscription_ajax?action_remove_subscriptions=1", {
                method: "POST",
                ba: b,
                onSuccess: function() {
                    g();
                    (0, m.B)("subscription-batch-unsubscribe-success", c);
                    Ds("subscription-unsubscribe-success", c);
                    (0, m.Nc)(e) || Es(e)
                },
                onError: function() {
                    g();
                    (0, m.B)("subscription-batch-unsubscribe-failure", c);
                    Ds("subscription-unsubscribe-failure", c)
                }
            })
        }
    };
    var Fs = function(a, b, c) {
        Gs(a, b, null, c)
    };
    var Hs = function(a, b, c) {
        Gs(a, null, b, c)
    };
    var Is = function(a, b, c) {
        Js(a, b, null, c)
    };
    var Ks = function(a, b, c) {
        Js(a, null, b, c)
    };
    var Ls = function(a, b, c, d) {
        Gs(a, b, c, d)
    };
    var Ms = function(a, b, c, d) {
        a = a.subscriptionElement || null;
        (b = b.subscriptionId) && (0, m.B)("subscription-subscribe-success", d, b, a)
    };
    var Ns = function(a, b) {
        (0, m.Qa)(a, function(a, b) {
            (0, m.B)("subscription-subscribe-success", b, a)
        });
        (0, m.B)("guide-add-subscription", b)
    };
    var Os = function(a, b) {
        (0, m.B)("subscription-unsubscribe-success", a.itemId, a.subscriptionElement || null);
        b && ((0, m.B)("subscription-batch-unsubscribe-success", b), Ds("subscription-unsubscribe-success", b), Ds("subscription-enable-ypc", b))
    };
    var zs = function(a, b, c, d, e) {
        (0, m.B)("subscription-subscribe-loading", a);
        var g = {};
        g.c = a;
        d && (g.eurl = d);
        e && (g.source = e);
        d = {};
        d.session_token = (0, m.ad)("subscription_ajax");
        (e = (0, m.v)("PLAYBACK_ID")) && (d.plid = e);
        c && Ps("/subscription_ajax?action_create_subscription_to_channel=1", g, c);
        (0, m.U)("/subscription_ajax?action_create_subscription_to_channel=1", {
            method: "POST",
            ca: g,
            ba: d,
            onSuccess: function(c, d) {
                var e = d.response;
                (0, m.B)("subscription-subscribe-success", a, e.id, b);
                e.show_feed_privacy_dialog && (0, m.B)("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",
                    a);
                (e = e.guide_notification_html_content) && (0, m.B)("guide-add-subscription", e)
            },
            onError: function() {
                (0, m.B)("subscription-subscribe-failure", a)
            },
            za: function() {
                (0, m.B)("subscription-subscribe-loaded", a)
            }
        });
        (0, m.Yj)("subscribe", a)
    };
    var Bs = function(a, b, c, d, e, g) {
        (0, m.B)("subscription-unsubscirbe-loading", a);
        var h = {};
        e && (h.eurl = e);
        g && (h.source = g);
        e = {};
        e.session_token = (0, m.ad)("subscription_ajax");
        e.s = b;
        (b = (0, m.v)("PLAYBACK_ID")) && (e.plid = b);
        d && Ps("/subscription_ajax?action_remove_subscriptions=1", {}, d);
        (0, m.U)("/subscription_ajax?action_remove_subscriptions=1", {
            method: "POST",
            ca: h,
            ba: e,
            onSuccess: function() {
                (0, m.B)("subscription-unsubscribe-success", a, c)
            },
            onError: function() {
                (0, m.B)("subscription-unsubscribe-failure", a)
            },
            za: function() {
                (0, m.B)("subscription-unsubscribe-loaded",
                    a)
            }
        });
        (0, m.Yj)("unsubscribe", a)
    };
    var Gs = function(a, b, c, d) {
        if (null !== b || null !== c) {
            (0, m.B)("subscription-prefs-loading", a);
            var e = {};
            e.session_token = (0, m.ad)("subscription_ajax");
            e.subscription_id = a;
            null === b || (e.email_on_upload = b);
            null === c || (e.uploads_only = c);
            (0, m.U)("/subscription_ajax?action_update_subscription_preferences=1", {
                method: "POST",
                ba: e,
                onSuccess: function() {
                    (0, m.B)("subscription-prefs-success", a)
                },
                onError: function() {
                    d && d();
                    (0, m.B)("subscription-prefs-failure", a)
                },
                za: function() {
                    (0, m.B)("subscription-prefs-loaded", a)
                }
            })
        }
    };
    var Js = function(a, b, c, d) {
        if (a.length && (null !== b || null !== c)) {
            var e = (0, m.ac)(a, 0, 40);
            (0, m.B)("subscription-batch-prefs-loading", e);
            var g = {};
            g.session_token = (0, m.ad)("subscription_ajax");
            g.s = e.join(",");
            null === b || (g.email_on_upload = b);
            null === c || (g.uploads_only = c);
            var h = function() {
                (0, m.B)("subscription-batch-prefs-loaded", e)
            };
            (0, m.U)("/subscription_ajax?action_update_subscription_preferences_batch=1", {
                method: "POST",
                ba: g,
                onSuccess: function() {
                    h();
                    (0, m.B)("subscription-batch-prefs-success", e);
                    a.length &&
                        Js(a, b, c, d)
                },
                onError: function() {
                    h();
                    d && d();
                    (0, m.B)("subscription-batch-prefs-failure", e)
                }
            })
        }
    };
    var Ds = function(a, b) {
        (0, m.A)(b, function(b) {
            (0, m.B)(a, b)
        })
    };
    var Ps = function(a, b, c) {
        a = (0, m.Bf)(a, b);
        c = (0, m.xf)(c);
        Ai(a, c)
    };
    var Qs = function(a) {
        if (Rs) {
            (0, m.Lh)((0, m.v)("YPC_LOADER_CSS"));
            var b = (0, m.v)("YPC_LOADER_CONFIGS"),
                c = function() {
                    (Rs -= 1) || Ss(a)
                };
            (0, m.Ra)((0, m.v)("YPC_LOADER_JS"), c);
            (0, m.U)(b, {
                onSuccess: function(a, b) {
                    (0, m.ua)(b.ajax_tokens);
                    (0, m.ra)(b.configs);
                    (0, m.ya)(b.messages);
                    c()
                }
            })
        } else a && a()
    };
    var Ss = function(a) {
        (0, m.A)((0, m.v)("YPC_LOADER_CALLBACKS"), function(a) {
            (a = (0, m.n)(a)) && a()
        });
        a && a()
    };
    m.Ts = function(a) {
        this.b = new m.Vh;
        if (a) {
            a = bi(a);
            for (var b = a.length, c = 0; c < b; c++) this.add(a[c])
        }
    };
    var Us = function(a) {
        var b = typeof a;
        return "object" == b && a || "function" == b ? "o" + (0, m.Ac)(a) : b.substr(0, 1) + a
    };
    var Vs = function(a, b) {
        var c = ai(b);
        if (a.Za() > c) return !1;
        !(b instanceof m.Ts) && 5 < c && (b = new m.Ts(b));
        return ei(a, function(a) {
            var c = b;
            return "function" == typeof c.contains ? c.contains(a) : "function" == typeof c.Ej ? c.Ej(a) : (0, m.Dc)(c) || (0, m.q)(c) ? (0, m.lc)(c, a) : (0, m.hc)(c, a)
        })
    };
    var Ws = function(a) {
        var b = (0, m.n)("window.location.href");
        if ((0, m.q)(a)) return {
            message: a,
            name: "Unknown error",
            lineNumber: "Not available",
            fileName: b,
            stack: "Not available"
        };
        var c, d, e = !1;
        try {
            c = a.lineNumber || a.line || "Not available"
        } catch (g) {
            c = "Not available", e = !0
        }
        try {
            d = a.fileName || a.filename || a.sourceURL || m.ca.$googDebugFname || b
        } catch (h) {
            d = "Not available", e = !0
        }
        return !e && a.lineNumber && a.fileName && a.stack && a.message && a.name ? a : {
            message: a.message || "Not available",
            name: a.name || "UnknownError",
            lineNumber: c,
            fileName: d,
            stack: a.stack || "Not available"
        }
    };
    var Xs = function(a) {
        return Ys(a || arguments.callee.caller, [])
    };
    var Ys = function(a, b) {
        var c = [];
        if ((0, m.lc)(b, a)) c.push("[...circular reference...]");
        else if (a && 50 > b.length) {
            c.push(Zs(a) + "(");
            for (var d = a.arguments, e = 0; e < d.length; e++) {
                0 < e && c.push(", ");
                var g;
                g = d[e];
                switch (typeof g) {
                    case "object":
                        g = g ? "object" : "null";
                        break;
                    case "string":
                        break;
                    case "number":
                        g = String(g);
                        break;
                    case "boolean":
                        g = g ? "true" : "false";
                        break;
                    case "function":
                        g = (g = Zs(g)) ? g : "[fn]";
                        break;
                    default:
                        g = typeof g
                }
                40 < g.length && (g = g.substr(0, 40) + "...");
                c.push(g)
            }
            b.push(a);
            c.push(")\n");
            try {
                c.push(Ys(a.caller,
                    b))
            } catch (h) {
                c.push("[exception trying to get caller]\n")
            }
        } else a ? c.push("[...long stack...]") : c.push("[end]");
        return c.join("")
    };
    var Zs = function(a) {
        if ($s[a]) return $s[a];
        a = String(a);
        if (!$s[a]) {
            var b = /function ([^\(]+)/.exec(a);
            $s[a] = b ? b[1] : "[Anonymous]"
        }
        return $s[a]
    };
    var at = function() {
        (0, m.A)((0, m.v)("ERRORS") || [], function(a) {
            bt(a)
        });
        (0, m.ra)("ERRORS", [])
    };
    var bt = function(a, b) {
        if (!(5 <= ct) && a) {
            var c = a.stacktrace;
            a = Ws(a);
            c = c || a.stack;
            if (!dt[a.message]) {
                var d = {
                    ba: {
                        a: "logerror",
                        t: "jserror"
                    },
                    ca: {
                        type: a.name,
                        msg: a.message,
                        file: a.fileName,
                        line: a.lineNumber,
                        url: window.location.href,
                        level: b || "ERROR"
                    },
                    method: "POST"
                };
                c && (d.ba.stack = c);
                (0, m.U)("/gen_204", d);
                dt[a.message] = !0;
                ct++
            }
        }
    };
    var et = function(a, b, c) {
        a.timeOfStartCall = (new Date).getTime();
        var d = c || m.ca;
        d.GOOGLE_FEEDBACK_START_ARGUMENTS = arguments;
        var e = a.serverUri || "//www.google.com/tools/feedback",
            g = d.GOOGLE_FEEDBACK_START;
        g ? g.apply(d, arguments) : (d = d.document, g = d.createElement("script"), g.src = e + "/load.js", d.body.appendChild(g))
    };
    var ft = function(a, b) {
        var c = a.serverUri || "//www.gstatic.com/feedback";
        m.ca.GOOGLE_HELP_SESSION_ARGUMENTS = arguments;
        var d = window.document,
            e = d.createElement("script");
        e.src = c + "/session_load.js";
        d.body.appendChild(e)
    };
    var gt = function(a, b) {
        ft(a, b);
        var c = a.serverUri || "//www.gstatic.com/feedback";
        m.ca.GOOGLE_HELP_CHAT_ARGUMENTS = arguments;
        var d = window.document,
            e = d.createElement("script");
        e.src = c + "/chat_load.js";
        d.body.appendChild(e)
    };
    var ht = function(a) {
        a = a.match(/[\d]+/g);
        if (!a) return "";
        a.length = 3;
        return a.join(".")
    };
    var it = function(a) {
        return (a = a.exec((0, m.Sd)())) ? a[1] : ""
    };
    var jt = function(a) {
        a = (0, m.H)(a.currentTarget, "ghelp-anchor") || a.currentTarget;
        kt(window.document.getElementById(a), (0, m.v)("GOOGLE_HELP_PRODUCT_ID"), (0, m.v)("GOOGLE_HELP_CONTEXT"), (0, m.v)("GOOGLE_HELP_PRODUCT_DATA"))
    };
    var lt = function(a) {
        var b = mt,
            c = (0, m.v)("FEEDBACK_LOCALE_EXTRAS", {});
        a ? (0, m.Ic)(b, a) : (0, m.Ic)(b, c);
        return b
    };
    var nt = function(a) {
        var b = (0, m.v)("SESSION_INDEX"),
            c = (0, m.v)("FEEDBACK_BUCKET_ID");
        a = {
            abuseLink: "https://support.google.com/youtube/bin/answer.py?answer=140536",
            customZIndex: "2000000005",
            locale: (0, m.v)("FEEDBACK_LOCALE_LANGUAGE"),
            productId: (a || "59") + ""
        };
        b && (a.authuser = b + "");
        c && (a.bucket = c);
        return a
    };
    var kt = function(a, b, c, d, e, g, h) {
        d = lt(d);
        b = nt(b);
        (0, m.Ic)(b, {
            flow: "help",
            helpCenterPath: "/youtube",
            helpCenterContext: c,
            anchor: a,
            showHelpCenterLink: !0,
            enableSendFeedback: g ? !1 : !0,
            trackingParam: h
        });
        try {
            if (e && !ot) try {
                gt(b), ot = !0
            } catch (k) {}
            et(b, d);
            return !1
        } catch (p) {
            return !0
        }
    };
    var pt = function() {
        if (!(m.Zd ? 0 <= ld(qt, "7") && 0 <= ld(rt, "9") : st ? 0 <= ld(qt, "3.6") : m.tt ? 0 <= ld(qt, "5") : m.ut)) {
            var a = (0, m.N)("reportbug");
            (0, m.A)(a, function(a) {
                m.T.xb(a, !1)
            })
        }
    };
    var vt = function() {
        var a = (0, m.D)("movie_player");
        if (a && a.currentAdInformation) {
            var b = {};
            try {
                b = a.currentAdInformation()
            } catch (c) {}
            a = b;
            a.adIds && (mt.ad_ids = a.adIds.join());
            a.adSystems && (mt.ad_systems = a.adSystems.join())
        }
    };
    var wt = function() {
        (0, m.hd)(xt) && (xt.push((0, m.y)("page-resize", zt)), xt.push((0, m.y)("page-scroll", zt)))
    };
    m.At = function(a) {
        (0, m.hd)(xt) && wt();
        (0, m.Ic)(Bt, a);
        Ct()
    };
    var Dt = function() {
        var a = (0, m.Zm)();
        return an().y + a.height
    };
    var zt = function() {
        var a = Dt(),
            b = Et;
        if (!b || a >= b) Ct(), Et = a
    };
    var Ct = function() {
        var a = Dt();
        Ft(function(b, c) {
            if (a >= m.T.xj(b).y) {
                var d = Bt[c];
                d && -1 == (0, m.la)(Gt, b) && (d.call(m.ca, b), Gt.push(b))
            }
        })
    };
    var Ft = function(a) {
        var b = (0, m.N)("scrolldetect");
        (0, m.A)(b, function(b) {
            var d = (0, m.H)(b, "scrolldetect-callback");
            d && a.call(m.ca, b, d)
        })
    };
    var Ht = function() {
        m.Ma.call(this, "www/common", ["www/base"]);
        this.b = []
    };
    m.It = function() {
        m.Sm.call(this);
        this.b = 0;
        this.endTime = this.startTime = null
    };
    m.Jt = function(a, b, c) {
        this.b = a;
        this.g = b || 0;
        this.T = c;
        this.Xb = (0, m.r)(this.qE, this)
    };
    var Kt = function(a) {
        a = (0, m.Ac)(a);
        delete Lt[a];
        (0, m.Nc)(Lt) && Mt && Mt.stop()
    };
    var Nt = function() {
        Mt || (Mt = new m.Jt(function() {
            Ot()
        }, 20));
        var a = Mt;
        0 != a.Fa || a.start()
    };
    var Ot = function() {
        var a = (0, m.C)();
        (0, m.Qa)(Lt, function(b) {
            Pt(b, a)
        });
        (0, m.Nc)(Lt) || Nt()
    };
    var Qt = function(a, b, c, d) {
        m.It.call(this);
        if (!(0, m.fa)(a) || !(0, m.fa)(b)) throw Error("Start and end parameters must be arrays");
        if (a.length != b.length) throw Error("Start and end points must be the same length");
        this.j = a;
        this.o = b;
        this.duration = c;
        this.k = d;
        this.g = []
    };
    var Pt = function(a, b) {
        a.pe = (b - a.startTime) / (a.endTime - a.startTime);
        1 <= a.pe && (a.pe = 1);
        Rt(a, a.pe);
        1 == a.pe ? (a.b = 0, Kt(a), a.za(), a.Md()) : 1 == a.b && a.dp()
    };
    var Rt = function(a, b) {
        (0, m.ga)(a.k) && (b = a.k(b));
        a.g = Array(a.j.length);
        for (var c = 0; c < a.j.length; c++) a.g[c] = (a.o[c] - a.j[c]) * b + a.j[c]
    };
    var St = function(a, b) {
        m.qm.call(this, a);
        this.x = b.g[0];
        this.y = b.g[1];
        this.duration = b.duration;
        this.state = b.b
    };
    m.Tt = function(a, b, c, d, e) {
        Qt.call(this, b, c, d, e);
        this.element = a
    };
    m.Ut = function(a, b, c, d, e) {
        if (2 != b.length || 2 != c.length) throw Error("Start and end points must be 2D");
        m.Tt.apply(this, arguments)
    };
    var Vt = function(a, b, c, d, e) {
        (0, m.td)(b) && (b = [b]);
        (0, m.td)(c) && (c = [c]);
        m.Tt.call(this, a, b, c, d, e);
        if (1 != b.length || 1 != c.length) throw Error("Start and end points must be 1D");
    };
    m.Wt = function(a, b, c) {
        Vt.call(this, a, 1, 0, b, c)
    };
    m.Xt = function(a, b, c) {
        Vt.call(this, a, 0, 1, b, c)
    };
    m.Yt = function(a, b) {
        return a.nc("iframe", {
            frameborder: 0,
            style: "border:0;vertical-align:bottom;" + (b || ""),
            src: 'javascript:""'
        })
    };
    var Zt = function(a) {
        this.i = 1E3 / a;
        this.g = null;
        this.b = []
    };
    var $t = function(a, b) {
        (0, m.ma)(a.b, b);
        a.b.length || ((0, m.Zc)(a.g), delete a.g)
    };
    var au = function(a, b, c, d, e, g, h, k) {
        this.b = a;
        this.A = b;
        this.i = c;
        this.k = d;
        this.j = e;
        this.o = g;
        this.g = h;
        this.C = k
    };
    var bu = function(a, b) {
        if (0 == b) return a.b;
        if (1 == b) return a.g;
        var c = Md(a.b, a.i, b),
            d = Md(a.i, a.j, b),
            e = Md(a.j, a.g, b),
            c = Md(c, d, b),
            d = Md(d, e, b);
        return Md(c, d, b)
    };
    var cu = function(a, b) {
        var c = (b - a.b) / (a.g - a.b);
        if (0 >= c) return 0;
        if (1 <= c) return 1;
        for (var d = 0, e = 1, g = 0; 8 > g; g++) {
            var h = bu(a, c),
                k = (bu(a, c + 1E-6) - h) / 1E-6;
            if (1E-6 > Math.abs(h - b)) return c;
            if (1E-6 > Math.abs(k)) break;
            else h < b ? d = c : e = c, c -= (h - b) / k
        }
        for (g = 0; 1E-6 < Math.abs(h - b) && 8 > g; g++) h < b ? (d = c, c = (c + e) / 2) : (e = c, c = (c + d) / 2), h = bu(a, c);
        return c
    };
    var du = function(a, b) {
        var c;
        c = cu(a, b);
        if (0 == c) c = a.A;
        else if (1 == c) c = a.C;
        else {
            var d = Md(a.A, a.k, c),
                e = Md(a.k, a.o, c),
                g = Md(a.o, a.C, c),
                d = Md(d, e, c),
                e = Md(e, g, c);
            c = Md(d, e, c)
        }
        return c
    };
    var eu = function(a, b) {
        this.b = new au(0, 0, a.x, a.y, b.x, b.y, 1, 1)
    };
    var fu = function(a) {
        return a
    };
    var gu = function(a) {
        return du(hu.b, a)
    };
    var iu = function(a) {
        return du(ju.b, a)
    };
    var ku = function(a) {
        return du(lu.b, a)
    };
    var mu = function(a) {
        return du(nu.b, a)
    };
    var ou = function(a) {
        switch (a) {
            case "linear":
                return fu;
            case "ease-in":
                return iu;
            case "ease-out":
                return ku;
            case "ease-in-out":
                return mu;
            default:
                return gu
        }
    };
    var pu = function(a, b) {
        var c = b || {};
        this.gb = a;
        this.duration = c.duration || 0.25;
        this.Dk = c.za || null;
        this.Ni = c.Ni || "ease";
        this.b(c);
        c.jK || this.play()
    };
    var qu = function(a, b) {
        pu.call(this, a, b)
    };
    var ru = function(a, b) {
        var c = 1E3 * a.duration;
        a.j = Math.min(a.j + (b - a.i), c);
        a.i = b;
        var d = a.C(a.j / c);
        a.k(d);
        if (c = a.j >= c) a.za(), a.Dk && (0, m.w)((0, m.r)(a.Dk, m.ca, a), 0);
        return c
    };
    m.su = function(a, b) {
        pu.call(this, a, b)
    };
    m.tu = function(a) {
        this.T = a;
        this.b = {}
    };
    var uu = function() {
        m.It.call(this);
        this.g = []
    };
    m.vu = function() {
        uu.call(this);
        this.i = 0
    };
    m.wu = function() {
        uu.call(this);
        this.i = 0
    };
    var xu = function() {
        if (!(0, m.Ec)(yu)) {
            var a = window.document.createElement("div");
            (0, m.Ec)(a.style.MozTransition) ? yu = "Moz": (0, m.Ec)(a.style.WebkitTransition) ? yu = "Webkit" : (0, m.Ec)(a.style.b) ? yu = "O" : yu = null
        }
        return yu
    };
    var zu = function(a, b) {
        pu.call(this, a, b)
    };
    var Au = function(a, b) {
        pu.call(this, a, b)
    };
    var Bu = function(a, b) {
        pu.call(this, a, b)
    };
    m.Cu = function(a, b, c, d) {
        d = d || {};
        d.start = b;
        d.end = c;
        xu() ? new Bu(a, d) : new Au(a, d)
    };
    m.Du = function(a, b) {
        (0, m.Cu)(a, 1, 0, b)
    };
    m.Eu = function(a) {
        this.Gh = a || window;
        this.eb = []
    };
    var Fu = function() {};
    var Gu = function(a) {
        if ("number" == typeof a) {
            var b = new Fu;
            b.g = a;
            var c;
            c = a;
            if (0 == c) c = "Etc/GMT";
            else {
                var d = ["Etc/GMT", 0 > c ? "-" : "+"];
                c = Math.abs(c);
                d.push(Math.floor(c / 60) % 100);
                c %= 60;
                0 != c && d.push(":", (0, m.nd)(c, 2));
                c = d.join("")
            }
            b.j = c;
            0 == a ? a = "UTC" : (c = ["UTC", 0 > a ? "+" : "-"], a = Math.abs(a), c.push(Math.floor(a / 60) % 100), a %= 60, 0 != a && c.push(":", a), a = c.join(""));
            b.i = [a, a];
            b.b = [];
            return b
        }
        b = new Fu;
        b.j = a.id;
        b.g = -a.std_offset;
        b.i = a.names;
        b.b = a.transitions;
        return b
    };
    var Hu = function(a, b) {
        for (var c = Date.UTC(b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate(), b.getUTCHours(), b.getUTCMinutes()) / 36E5, d = 0; d < a.b.length && c >= a.b[d];) d += 2;
        return 0 == d ? 0 : a.b[d - 1]
    };
    var Iu = function(a, b) {
        this.g = [];
        this.b = b || Ju;
        "number" == typeof a ? Ku(this, a) : Lu(this, a)
    };
    var Lu = function(a, b) {
        for (; b;)
            for (var c = 0; c < Mu.length; ++c) {
                var d = b.match(Mu[c]);
                if (d) {
                    d = d[0];
                    b = b.substring(d.length);
                    0 == c && ("''" == d ? d = "'" : (d = d.substring(1, d.length - 1), d = d.replace(/\'\'/, "'")));
                    a.g.push({
                        text: d,
                        type: c
                    });
                    break
                }
            }
    };
    var Ku = function(a, b) {
        var c;
        if (4 > b) c = a.b.$u[b];
        else if (8 > b) c = a.b.av[b - 4];
        else if (12 > b) c = a.b.nG[b - 8], c = c.replace("{1}", a.b.$u[b - 8]), c = c.replace("{0}", a.b.av[b - 8]);
        else {
            Ku(a, 10);
            return
        }
        Lu(a, c)
    };
    var Nu = function(a, b) {
        if (void 0 === a.b || void 0 === a.b.tG) return b;
        for (var c = [], d = 0; d < b.length; d++) {
            var e = b.charCodeAt(d);
            c.push(48 <= e && 57 >= e ? String.fromCharCode(a.b.tG + e - 48) : b.charAt(d))
        }
        return c.join("")
    };
    var Ou = function(a, b, c, d, e, g) {
        var h = b.length;
        switch (b.charAt(0)) {
            case "G":
                return c = 0 < d.getFullYear() ? 1 : 0, 4 <= h ? a.b.pC[c] : a.b.qC[c];
            case "y":
                return c = d.getFullYear(), 0 > c && (c = -c), 2 == h && (c %= 100), Nu(a, (0, m.nd)(c, h));
            case "M":
                t: switch (c = d.getMonth(), h) {
                    case 5:
                        a = a.b.rC[c];
                        break t;
                    case 4:
                        a = a.b.gt[c];
                        break t;
                    case 3:
                        a = a.b.ht[c];
                        break t;
                    default:
                        a = Nu(a, (0, m.nd)(c + 1, h))
                }
                return a;
            case "k":
                return Nu(a, (0, m.nd)(e.getHours() || 24, h));
            case "S":
                return Nu(a, (e.getTime() % 1E3 / 1E3).toFixed(Math.min(3, h)).substr(2) + (3 < h ? (0, m.nd)(0,
                    h - 3) : ""));
            case "E":
                return c = d.getDay(), 4 <= h ? a.b.ut[c] : a.b.jt[c];
            case "a":
                return h = e.getHours(), a.b.ft[12 <= h && 24 > h ? 1 : 0];
            case "h":
                return Nu(a, (0, m.nd)(e.getHours() % 12 || 12, h));
            case "K":
                return Nu(a, (0, m.nd)(e.getHours() % 12, h));
            case "H":
                return Nu(a, (0, m.nd)(e.getHours(), h));
            case "c":
                t: switch (c = d.getDay(), h) {
                    case 5:
                        a = a.b.vC[c];
                        break t;
                    case 4:
                        a = a.b.tt[c];
                        break t;
                    case 3:
                        a = a.b.qt[c];
                        break t;
                    default:
                        a = Nu(a, (0, m.nd)(c, 1))
                }
                return a;
            case "L":
                t: switch (c = d.getMonth(), h) {
                    case 5:
                        a = a.b.uC[c];
                        break t;
                    case 4:
                        a = a.b.kt[c];
                        break t;
                    case 3:
                        a = a.b.nt[c];
                        break t;
                    default:
                        a = Nu(a, (0, m.nd)(c + 1, h))
                }
                return a;
            case "Q":
                return c = Math.floor(d.getMonth() / 3), 4 > h ? a.b.tC[c] : a.b.sC[c];
            case "d":
                return Nu(a, (0, m.nd)(d.getDate(), h));
            case "m":
                return Nu(a, (0, m.nd)(e.getMinutes(), h));
            case "s":
                return Nu(a, (0, m.nd)(e.getSeconds(), h));
            case "v":
                return a = g || Gu(c.getTimezoneOffset()), a.j;
            case "w":
                return c = new Date(e.getFullYear(), e.getMonth(), e.getDate()), b = a.b.wt || 0, c = c.valueOf() + 864E5 * (((a.b.xt || 3) - b + 7) % 7 - ((c.getDay() + 6) % 7 - b + 7) % 7), c = Math.floor(Math.round((c -
                    (new Date((new Date(c)).getFullYear(), 0, 1)).valueOf()) / 864E5) / 7) + 1, Nu(a, (0, m.nd)(c, h));
            case "z":
                return a = g || Gu(c.getTimezoneOffset()), 4 > h ? a.i[0 < Hu(a, c) ? 2 : 0] : a.i[0 < Hu(a, c) ? 3 : 1];
            case "Z":
                return b = g || Gu(c.getTimezoneOffset()), 4 > h ? (a = -(b.g - Hu(b, c)), h = [0 > a ? "-" : "+"], a = Math.abs(a), h.push((0, m.nd)(Math.floor(a / 60) % 100, 2), (0, m.nd)(a % 60, 2)), a = h.join("")) : (h = b.g - Hu(b, c), c = ["GMT"], c.push(0 >= h ? "+" : "-"), h = Math.abs(h), c.push((0, m.nd)(Math.floor(h / 60) % 100, 2), ":", (0, m.nd)(h % 60, 2)), h = c.join(""), a = Nu(a, h)), a;
            default:
                return ""
        }
    };
    m.Pu = function() {
        var a = (0, m.v)("LOCAL_DATE_TIME_CONFIG"),
            b = (0, m.N)("localized-date", void 0);
        (0, m.A)(b, function(b) {
            var d = (0, m.H)(b, "timestamp"),
                e = (0, m.H)(b, "format"),
                g = "";
            "longdate" == e ? g = a.formatLongDate : "weekdayshorttime" == e ? g = a.formatWeekdayShortTime : "longdateonly" == e ? g = a.formatLongDateOnly : "shortdate" == e && (g = a.formatShortDate);
            Ju = {
                gt: a.months,
                kt: a.months,
                ht: a.shortMonths,
                nt: a.shortMonths,
                ut: a.weekdays,
                tt: a.shortMonths,
                jt: a.shortWeekdays,
                qt: a.shortWeekdays,
                ft: a.amPms
            };
            e = new Iu(g);
            b.innerHTML = e.format(new Date(1E3 *
                d))
        })
    };
    m.Qu = function(a) {
        (window.ytspf || {}).enabled && (0, m.B)("guide-set-module-state", "guide-main", a)
    };
    m.Ru = function() {
        var a = (0, m.v)("GUIDE_SELECTED_ITEM"),
            b = (0, m.n)("yt.www.guide.selectGuideItem");
        b && b(a)
    };
    m.Su = function(a) {
        a && (this.name = a.name, this.Zb = a.screenId, this.md = a.loungeToken, this.tc = a.dialId || "")
    };
    m.Tu = function(a) {
        return a ? a.toString() : "null"
    };
    var Uu = function(a) {
        a = a || [];
        return "[" + (0, m.Mb)(a, function(a) {
            return (0, m.Tu)(a)
        }).join(",") + "]"
    };
    var Vu = function(a) {
        a && (this.id = a.id || "", this.name = a.name || "", this.activityId = a.activityId || "", this.status = a.status || "UNKNOWN")
    };
    var Wu = function(a) {
        return {
            id: a.id,
            name: a.name,
            activityId: a.activityId,
            status: a.status
        }
    };
    var Xu = function(a) {
        a = a || [];
        return "[" + (0, m.Mb)(a, function(a) {
            return a ? a.toString() : "null"
        }).join(",") + "]"
    };
    m.Yu = function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var b = 16 * Math.random() | 0;
            return ("x" == a ? b : b & 3 | 8).toString(16)
        })
    };
    m.Zu = function(a, b) {
        return (0, m.Wb)(a, function(a) {
            return a.key == b
        })
    };
    var $u = function(a) {
        return (0, m.Mb)(a, function(a) {
            return a.lx()
        })
    };
    var av = function(a) {
        return (0, m.Mb)(a, function(a) {
            return Wu(a)
        })
    };
    var bv = function(a) {
        return (0, m.Mb)(a, function(a) {
            return new Vu(a)
        })
    };
    var cv = function(a, b) {
        return a || b ? a && b ? a.id == b.id && a.name == b.name : !1 : !0
    };
    m.dv = function(a, b) {
        return (0, m.Wb)(a, function(a) {
            return a.id == b
        })
    };
    var ev = function(a) {
        return (0, m.Mb)(a, function(a) {
            return {
                name: a.name,
                screenId: a.Zb,
                loungeToken: a.md,
                dialId: a.tc
            }
        })
    };
    var fv = function(a) {
        return (0, m.Mb)(a, function(a) {
            return new m.Su(a)
        })
    };
    m.gv = function(a, b) {
        return a || b ? a && b ? a.Zb == b.Zb : !1 : !0
    };
    var hv = function(a, b) {
        return a || b ? a && b ? a.Zb == b.Zb && a.md == b.md && a.name == b.name && a.tc == b.tc : !1 : !0
    };
    m.iv = function(a, b) {
        return (0, m.Wb)(a, function(a) {
            return (0, m.gv)(a, b)
        })
    };
    var jv = function(a, b) {
        return (0, m.Wb)(a, function(a) {
            return b == a.Zb || b == a.tc
        })
    };
    m.kv = function() {
        return (0, m.hj)("yt-remote-session-screen-id")
    };
    var lv = function(a) {
        5 < a.length && (a = a.slice(a.length - 5));
        var b = (0, m.Mb)(mv(), function(a) {
                return a.loungeToken
            }),
            c = (0, m.Mb)(a, function(a) {
                return a.loungeToken
            });
        (0, m.Pb)(c, function(a) {
            return !(0, m.lc)(b, a)
        }) && (0, m.ej)("yt-remote-lounge-token-expiration", !0, 86400);
        (0, m.ej)("yt-remote-local-screens", a, 31536E3)
    };
    var mv = function() {
        return (0, m.hj)("yt-remote-local-screens") || []
    };
    m.nv = function() {
        return (0, m.hj)("yt-remote-online-screens") || []
    };
    var ov = function(a) {
        (0, m.ej)("yt-remote-online-dial-devices", a, 30)
    };
    m.pv = function() {
        return (0, m.hj)("yt-remote-online-dial-devices") || []
    };
    m.qv = function() {
        if ((0, m.hj)("yt-remote-delayed-connect-key")) return !0;
        var a = (0, m.kv)(),
            b = fv((0, m.nv)());
        return !!jv(b, a)
    };
    m.rv = function() {
        var a = fv((0, m.nv)()),
            b = bv((0, m.pv)()),
            b = (0, m.Lb)(b, function(b) {
                return !jv(a, b.id)
            });
        return $u((0, m.fd)(a, b))
    };
    m.sv = function() {
        return (0, m.tv)("(ps3; leanback shell)")
    };
    m.tv = function(a) {
        var b = (0, m.Sd)();
        return b ? 0 <= b.toLowerCase().indexOf(a.toLowerCase()) : !1
    };
    m.uv = function() {
        this.C = new m.qa;
        (0, m.G)(this, this.C)
    };
    var vv = function(a) {
        a = wv(a);
        (0, m.ga)(m.ca.setImmediate) ? m.ca.setImmediate(a): (xv || (xv = yv()), xv(a))
    };
    var yv = function() {
        var a = m.ca.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && (a = function() {
            var a = window.document.createElement("iframe");
            a.style.display = "none";
            a.src = "";
            window.document.documentElement.appendChild(a);
            var b = a.contentWindow,
                a = b.document;
            a.open();
            a.write("");
            a.close();
            var c = "callImmediate" + Math.random(),
                d = b.location.protocol + "//" + b.location.host,
                a = (0, m.r)(function(a) {
                    if (a.origin == d || a.data == c) this.port1.onmessage()
                }, this);
            b.addEventListener("message", a, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    b.postMessage(c, d)
                }
            }
        });
        if ("undefined" !== typeof a) {
            var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function() {
                c = c.next;
                var a = c.kx;
                c.kx = null;
                a()
            };
            return function(a) {
                d.next = {
                    kx: a
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof window.document && "onreadystatechange" in window.document.createElement("script") ? function(a) {
            var b = window.document.createElement("script");
            b.onreadystatechange = function() {
                b.onreadystatechange =
                    null;
                b.parentNode.removeChild(b);
                b = null;
                a();
                a = null
            };
            window.document.documentElement.appendChild(b)
        } : function(a) {
            m.ca.setTimeout(a, 0)
        }
    };
    var zv = function(a) {
        vv(function() {
            throw a;
        })
    };
    var Av = function(a, b) {
        Bv || (vv(Cv), Bv = !0);
        Dv.push(new Ev(a, b))
    };
    var Cv = function() {
        for (; Dv.length;) {
            var a = Dv;
            Dv = [];
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                try {
                    c.Bj.call(c.scope)
                } catch (d) {
                    zv(d)
                }
            }
        }
        Bv = !1
    };
    var Ev = function(a, b) {
        this.Bj = a;
        this.scope = b
    };
    var Fv = function(a) {
        a.prototype.then = a.prototype.then;
        a.prototype.$goog_labs_Thenable = !0
    };
    var Gv = function(a) {
        if (!a) return !1;
        try {
            return !!a.$goog_labs_Thenable
        } catch (b) {
            return !1
        }
    };
    var Hv = function(a, b) {
        this.g = 0;
        this.o = void 0;
        this.b = this.i = null;
        this.j = this.k = !1;
        try {
            var c = this;
            a.call(b, function(a) {
                Iv(c, 2, a)
            }, function(a) {
                Iv(c, 3, a)
            })
        } catch (d) {
            Iv(this, 3, d)
        }
    };
    var Jv = function(a, b) {
        if (0 == a.g)
            if (a.i) {
                var c = a.i;
                if (c.b) {
                    for (var d = 0, e = -1, g = 0, h; h = c.b[g]; g++)
                        if (h = h.ll)
                            if (d++, h == a && (e = g), 0 <= e && 1 < d) break;
                    0 <= e && (0 == c.g && 1 == d ? Jv(c, b) : (d = c.b.splice(e, 1)[0], Kv(c, d, 3, b)))
                }
            } else Iv(a, 3, b)
    };
    var Lv = function(a, b) {
        a.b && a.b.length || 2 != a.g && 3 != a.g || Mv(a);
        a.b || (a.b = []);
        a.b.push(b)
    };
    var Nv = function(a, b, c, d) {
        var e = {
            ll: null,
            rv: null,
            sv: null
        };
        e.ll = new Hv(function(a, h) {
            e.rv = b ? function(c) {
                try {
                    var e = b.call(d, c);
                    a(e)
                } catch (u) {
                    h(u)
                }
            } : a;
            e.sv = c ? function(b) {
                try {
                    var e = c.call(d, b);
                    !(0, m.Ec)(e) && b instanceof Ov ? h(b) : a(e)
                } catch (u) {
                    h(u)
                }
            } : h
        });
        e.ll.i = a;
        Lv(a, e);
        return e.ll
    };
    var Iv = function(a, b, c) {
        if (0 == a.g) {
            if (a == c) b = 3, c = new TypeError("Promise cannot resolve to itself");
            else {
                if (Gv(c)) {
                    a.g = 1;
                    c.then(a.A, a.C, a);
                    return
                }
                if ((0, m.Cc)(c)) try {
                    var d = c.then;
                    if ((0, m.ga)(d)) {
                        Pv(a, c, d);
                        return
                    }
                } catch (e) {
                    b = 3, c = e
                }
            }
            a.o = c;
            a.g = b;
            Mv(a);
            3 != b || c instanceof Ov || Qv(a, c)
        }
    };
    var Pv = function(a, b, c) {
        function d(b) {
            g || (g = !0, a.C(b))
        }

        function e(b) {
            g || (g = !0, a.A(b))
        }
        a.g = 1;
        var g = !1;
        try {
            c.call(b, e, d)
        } catch (h) {
            d(h)
        }
    };
    var Mv = function(a) {
        a.k || (a.k = !0, Av(a.B, a))
    };
    var Kv = function(a, b, c, d) {
        if (2 == c) b.rv(d);
        else {
            for (; a && a.j; a = a.i) a.j = !1;
            b.sv(d)
        }
    };
    var Qv = function(a, b) {
        a.j = !0;
        Av(function() {
            a.j && Rv.call(null, b)
        })
    };
    var Ov = function(a) {
        sd.call(this, a)
    };
    m.Sv = function(a, b) {
        this.k = [];
        this.J = a;
        this.F = b || null;
        this.j = this.b = !1;
        this.i = void 0;
        this.B = this.L = this.A = !1;
        this.o = 0;
        this.g = null;
        this.C = 0
    };
    var Tv = function(a, b, c) {
        a.b = !0;
        a.i = c;
        a.j = !b;
        Uv(a)
    };
    var Vv = function(a) {
        if (a.b) {
            if (!a.B) throw new Wv;
            a.B = !1
        }
    };
    m.Xv = function(a, b, c) {
        return (0, m.Yv)(a, b, null, c)
    };
    m.Yv = function(a, b, c, d) {
        a.k.push([b, c, d]);
        a.b && Uv(a);
        return a
    };
    var Zv = function(a) {
        return (0, m.Ob)(a.k, function(a) {
            return (0, m.ga)(a[1])
        })
    };
    var Uv = function(a) {
        if (a.o && a.b && Zv(a)) {
            var b = a.o,
                c = $v[b];
            c && (m.ca.clearTimeout(c.Ky), delete $v[b]);
            a.o = 0
        }
        a.g && (a.g.C--, delete a.g);
        for (var b = a.i, d = c = !1; a.k.length && !a.A;) {
            var e = a.k.shift(),
                g = e[0],
                h = e[1],
                e = e[2];
            if (g = a.j ? h : g) try {
                var k = g.call(e || a.F, b);
                (0, m.Ec)(k) && (a.j = a.j && (k == b || k instanceof Error), a.i = b = k);
                Gv(b) && (d = !0, a.A = !0)
            } catch (p) {
                b = p, a.j = !0, Zv(a) || (c = !0)
            }
        }
        a.i = b;
        d && (k = (0, m.r)(a.Br, a, !0), d = (0, m.r)(a.Br, a, !1), b instanceof m.Sv ? ((0, m.Yv)(b, k, d), b.L = !0) : b.then(k, d));
        c && (c = ++aw, $v[c] = new bw(c, b),
            a.o = c)
    };
    var Wv = function() {
        sd.call(this)
    };
    m.cw = function() {
        sd.call(this)
    };
    var bw = function(a, b) {
        this.Fa = a;
        this.b = b;
        this.Ky = m.ca.setTimeout((0, m.r)(this.g, this), 0)
    };
    m.dw = function(a) {
        return 1 - Math.pow(1 - a, 3)
    };
    m.ew = function(a) {
        var b = 0; - 1 != a.indexOf("h") && (a = a.split("h"), b = 3600 * a[0], a = a[1]); - 1 != a.indexOf("m") && (a = a.split("m"), b = 60 * a[0] + b, a = a[1]); - 1 != a.indexOf("s") ? (a = a.split("s"), b = 1 * a[0] + b) : b = 1 * a + b;
        return b
    };
    m.fw = function() {};
    m.gw = function(a) {
        m.Sm.call(this);
        this.b = a || (0, m.ae)()
    };
    m.hw = function(a) {
        a.Hg || (a.Hg = new m.tu(a));
        return a.Hg
    };
    m.iw = function(a, b) {
        if (a == b) throw Error("Unable to set parent component");
        var c;
        if (c = b)
            if (c = a.zd)
                if (c = a.Fa) {
                    c = a.zd;
                    var d = a.Fa;
                    c = (c.oe && d ? (0, m.Mc)(c.oe, d) || null : null) && a.zd != b
                } if (c) throw Error("Unable to set parent component");
        a.zd = b;
        m.gw.D.Yp.call(a, b)
    };
    m.jw = function(a, b) {
        if (a.nb) throw Error("Component already rendered");
        if (b && a.Su(b)) {
            a.Gu = !0;
            var c = (0, m.ce)(b);
            a.b && a.b.b == c || (a.b = (0, m.ae)(b));
            a.kg(b);
            a.na()
        } else throw Error("Invalid element to decorate");
    };
    var kw = function(a, b) {
        a.jd && (0, m.A)(a.jd, b, void 0)
    };
    m.lw = function(a, b, c) {
        (0, m.Dc)(c) && (c = c.join(" "));
        var d = "aria-" + b;
        "" === c || void 0 == c ? (mw || (mw = {
            atomic: !1,
            autocomplete: "none",
            dropeffect: "none",
            haspopup: !1,
            live: "off",
            multiline: !1,
            multiselectable: !1,
            orientation: "vertical",
            readonly: !1,
            relevant: "additions text",
            required: !1,
            sort: "none",
            busy: !1,
            disabled: !1,
            hidden: !1,
            invalid: "false"
        }), c = mw, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
    };
    var nw = function(a) {
        this.b = a.fe;
        this.j = a.priority;
        this.Id = a.Id || this.Id
    };
    var ow = function(a) {
        nw.call(this, a);
        this.He = a.text || this.He;
        this.uk = a.windowId || this.uk;
        this.jm = a.params.append || this.jm;
        this.Dw = a.params.row || this.Dw;
        this.Cw = a.params.QI || this.Cw
    };
    var pw = function(a) {
        var b = a.firstChild && a.firstChild.nodeValue || "",
            c = 1E3 * (0, window.parseFloat)(a.getAttribute("start") || 0);
        a.getAttribute("t") && (c = (0, window.parseInt)(a.getAttribute("t"), 10));
        var d = 1E3 * (0, window.parseFloat)(a.getAttribute("dur") || 0);
        a.getAttribute("d") && (d = (0, window.parseFloat)(a.getAttribute("d")));
        var e = (0, window.parseInt)(a.getAttribute("w"), 10) || 0,
            b = {
                fe: c,
                Id: d,
                text: b,
                windowId: e,
                priority: 5,
                params: {}
            };
        a.getAttribute("r") && (b.params.row = (0, window.parseInt)(a.getAttribute("r"), 10));
        a.getAttribute("c") && (b.params.QI = (0, window.parseInt)(a.getAttribute("c"), 10));
        a.getAttribute("append") && (b.priority = 6, b.params.append = !0);
        return new ow(b)
    };
    m.qw = function(a) {
        nw.call(this, a);
        this.id = a.windowId || this.id;
        this.params = a.params
    };
    var rw = function() {
        return new m.qw({
            fe: -2147483648,
            Id: 4294967295,
            params: m.sw
        })
    };
    m.tw = function(a) {
        if ("undefined" != typeof window.DOMParser) return (new window.DOMParser).parseFromString(a, "application/xml");
        if ("undefined" != typeof window.ActiveXObject) {
            var b = new window.ActiveXObject("MSXML2.DOMDocument");
            if (b) {
                b.resolveExternals = !1;
                b.validateOnParse = !1;
                try {
                    b.setProperty("ProhibitDTD", !0), b.setProperty("MaxXMLSize", 2048), b.setProperty("MaxElementDepth", 256)
                } catch (c) {}
            }
            b.loadXML(a);
            return b
        }
        throw Error("Your browser does not support loading xml documents");
    };
    var uw = function(a) {
        this.b = [];
        this.i = [];
        this.g = {};
        if (a && (a = (0, m.tw)(a)) && a.firstChild) switch (this.j = a, this.j.firstChild.tagName) {
            case "timedtext":
                a = this.j.firstChild.childNodes;
                for (var b = 0, c = a.length; b < c; b++) switch (a[b].tagName) {
                    case "window":
                        var d = a[b],
                            e = (0, window.parseInt)(d.getAttribute("id"), 10),
                            g = void 0;
                        t: {
                            var h = this.g[e];
                            if (d.getAttribute("t") || d.getAttribute("start")) {
                                g = (0, window.parseInt)(d.getAttribute("t"), 10);
                                d.getAttribute("start") && (g = 1E3 * (0, window.parseFloat)(d.getAttribute("start")));
                                h && (h.b + h.Id >= g ? h.Id = g : h = null);
                                switch (d.getAttribute("op")) {
                                    case "kill":
                                        g = null;
                                        break t;
                                    case "define":
                                        h = null
                                }
                                h ? h.k = !0 : h = rw();
                                var k = {};
                                (0, m.ja)(k, h ? h.params : m.sw);
                                d.getAttribute("id") && (k.id = d.getAttribute("id"));
                                d.getAttribute("op") && (k.fK = d.getAttribute("op"));
                                d.getAttribute("rc") && (k.Fe = (0, window.parseInt)(d.getAttribute("rc"), 10));
                                d.getAttribute("cc") && (k.eo = (0, window.parseInt)(d.getAttribute("cc"), 10));
                                d.getAttribute("ap") && (h = (0, window.parseInt)(d.getAttribute("ap"), 10), k.anchorPoint = 0 > h || 8 < h ?
                                    7 : h);
                                d.getAttribute("ah") && (k.Hk = (0, window.parseInt)(d.getAttribute("ah"), 10));
                                d.getAttribute("av") && (k.qf = (0, window.parseInt)(d.getAttribute("av"), 10));
                                d.getAttribute("id") && (k.id = (0, window.parseInt)(d.getAttribute("id"), 10) || 0);
                                d.getAttribute("vs") && (k.isVisible = Boolean(d.getAttribute("vs")));
                                d.getAttribute("ju") && (k.textAlign = vw[(0, window.parseInt)(d.getAttribute("ju"), 10)]);
                                d.getAttribute("pd") && (k.fg = 1, 0 == (0, window.parseInt)(d.getAttribute("pd"), 10) && (k.fg = 0));
                                d.getAttribute("bc") && (k.backgroundColor =
                                    (0, window.parseInt)(d.getAttribute("bc"), 16));
                                d.getAttribute("bo") && (k.opacity = (0, window.parseInt)(d.getAttribute("bo"), 10) / 100);
                                d.getAttribute("fc") && (k.Gk = (0, window.parseInt)(d.getAttribute("fc"), 16));
                                d.getAttribute("sd") && (k.Pn = (0, window.parseInt)(d.getAttribute("sd"), 10));
                                h = (0, window.parseInt)(d.getAttribute("d"), 10) || 1E3 * (0, window.parseFloat)(d.getAttribute("dur")) || 2147483647;
                                d = {
                                    fe: g,
                                    Id: h,
                                    params: k,
                                    windowId: (0, window.parseInt)(d.getAttribute("id"), 10)
                                };
                                g = new m.qw(d)
                            } else g = null
                        }
                        this.g[e] = g;
                        this.i.push(g);
                        break;
                    case "text":
                        e = pw(a[b]), this.b.push(e), d = e.uk, this.g[d] && (d = this.g[d], e = e.He, "" != d.i && (d.g = !0), d.i += e)
                }
                break;
            default:
                for (this.i.push(rw()), a = this.j.firstChild.childNodes, b = 0, c = a.length; b < c; b++) e = pw(a[b]), this.b.push(e)
        }
    };
    var ww = function(a) {
        this.b = a.languageCode;
        this.g = a.languageName || null;
        this.i = a.languageOriginal || null;
        this.id = a.id || null;
        this.j = a.is_default || !1
    };
    m.xw = function(a) {
        a = a || {};
        this.vo = a.format;
        this.g = a.languageCode || "";
        this.Li = a.languageName;
        this.Hc = a.kind || "";
        this.ed = a.name;
        this.Fa = a.id;
        this.ct = a.is_servable;
        this.Mk = a.is_default;
        this.Nk = a.is_translateable;
        a.translationLanguage && (this.b = new ww(a.translationLanguage))
    };
    m.yw = function(a) {
        var b = [a.Li];
        if ("asr" == a.Hc) {
            var c = (0, m.Yc)("HTML5_SUBS_ASR");
            b.push(" (", c, ")")
        }
        a.ed && b.push(" - ", a.ed);
        a.b && b.push(" >> ", a.b.g);
        return b.join("")
    };
    var zw = function() {
        this.g = [];
        this.b = []
    };
    m.Aw = function(a, b) {
        return b ? a.b.concat(a.g) : a.b
    };
    m.Bw = function(a, b) {
        switch (b.Hc) {
            case "asr":
                return Cw(b, a.g);
            default:
                if (b.Mk || 0 > a.i) a.i = a.b.length;
                return Cw(b, a.b)
        }
    };
    var Cw = function(a, b) {
        return (0, m.Wb)(b, (0, m.r)(a.equals, a)) ? !1 : (b.push(a), !0)
    };
    m.Dw = function(a, b, c, d) {
        this.Ue = a;
        c ? this.Ue = (0, m.Bf)(this.Ue, {
            hl: c
        }) : (a = (0, m.yf)(this.Ue).hl || "", a = a.split("_").join("-"), this.Ue = (0, m.Bf)(this.Ue, {
            hl: a
        }));
        this.Dl = b;
        this.uw = !!d;
        this.cc = new zw;
        this.Uk = [];
        this.El = {}
    };
    m.Ew = function(a, b) {
        return (0, m.Wb)((0, m.Aw)(a.cc, !0), function(a) {
            return a.toString() == b
        })
    };
    var Fw = function(a, b) {
        var c = a.Ue,
            d = {
                v: a.Dl,
                type: "track",
                lang: b.g,
                name: b.ed,
                kind: b.Hc,
                fmt: b.vo
            };
        b.b && (d.tlang = b.b.b);
        return c = (0, m.Bf)(c, d)
    };
    m.Gw = function(a, b, c) {
        var d = Fw(a, b);
        a = (0, m.r)(function(a) {
            a = new uw(a.responseText);
            c(a, b)
        }, a);
        Kj(d, a)
    };
    m.Hw = function(a, b) {
        var c = a.cc.i,
            d = (0, m.Aw)(a.cc, !0);
        b && 0 > c && 0 < d.length && (c = 0);
        return 0 > c ? null : d[c]
    };
    m.Iw = function(a, b, c) {
        var d = a.Ue;
        c = {
            type: "list",
            tlangs: 1,
            v: a.Dl,
            fmts: Number(c || !1)
        };
        a.uw && (c.asrs = 1);
        d = (0, m.Bf)(d, c);
        a = (0, m.r)(function(a) {
            if ((a = a.responseXML) && a.firstChild) {
                for (var c = this.cc, d = a.getElementsByTagName("track"), k = d.length, p = 0; p < k; p++) {
                    var u = (0, window.parseInt)(d[p].getAttribute("formats"), 10) || 1,
                        z = d[p].getAttribute("lang_code"),
                        F = d[p].getAttribute("lang_translated"),
                        K = d[p].getAttribute("name"),
                        P = d[p].getAttribute("kind") || "",
                        W = d[p].getAttribute("id"),
                        oa = "true" == d[p].getAttribute("lang_default"),
                        ob = "true" == d[p].getAttribute("cantran");
                    (0, m.Bw)(c, new m.xw({
                        format: u,
                        languageCode: z,
                        languageName: F,
                        name: K,
                        kind: P,
                        id: W,
                        is_servable: !0,
                        is_default: oa,
                        is_translateable: ob
                    }))
                }
                a = a.getElementsByTagName("target");
                c = a.length;
                for (d = 0; d < c; d++) k = a[d].getAttribute("lang_code"), p = a[d].getAttribute("lang_translated"), u = a[d].getAttribute("lang_original"), z = a[d].getAttribute("id"), F = "true" == a[d].getAttribute("lang_default"), k = {
                        languageCode: k,
                        languageName: p,
                        languageOriginal: u,
                        id: z,
                        is_default: F
                    }, this.El[k.languageCode] =
                    k.languageName, this.Uk.push(new ww(k))
            }
            b()
        }, a);
        Kj(d, a)
    };
    m.Jw = function(a, b) {
        if (a) {
            this.Fw = a;
            this.lw = b;
            var c, d = this.Fw,
                e = d.indexOf(";sz=");
            c = vf(d.substring(e), ";");
            d = d.substring(0, e).split("pfadx");
            if (c = 2 != d.length ? null : {
                    nJ: d[0],
                    oJ: d[1],
                    pJ: c
                }) this.kw = c.nJ, this.mw = c.oJ, this.ow = c.pJ
        }
    };
    m.Kw = function(a, b) {
        var c = [];
        b & 1 && c.push("480x360");
        b & 2 && c.push("480x361");
        b & 12 && c.push("480x70");
        var d = [],
            e, g;
        b & 12 && (d.push("300x250"), e = "watch-channel-brand-div", g = 1);
        0 < (b & 3) && (d.push("300x60"), e = "watch-longform-ad", g = 1);
        c = {
            zw: e,
            Dj: c,
            Aw: g,
            iq: d
        };
        d = Kc(a.ow);
        c.ZI && (d.pos = c.ZI);
        c.Aw && (d.tile = c.Aw.toString());
        c.zw && (d.kmyd = c.zw);
        c.iq && 0 < c.iq.length && a.lw && (d.ciu_szs = c.iq.join(","));
        d.dcmt = "text/xml";
        (0, m.sv)() && (d.kmob = "ps3");
        a.jq || (a.jq = Math.floor(999999999 * Math.random()).toString());
        d.ord = a.jq;
        c.Dj &&
            c.Dj.length && "sz" in d && delete d.sz;
        d = (0, m.wf)(d, ";");
        c.Dj && c.Dj.length && (d = "sz=" + c.Dj.join(",") + ";" + d);
        return [a.kw, "pfadx", a.mw, ";", d, "?"].join("")
    };
    var Lw = function(a, b, c, d, e) {
        this.reset(a, b, c, d, e)
    };
    m.Mw = function(a) {
        this.g = a
    };
    var Nw = function(a, b) {
        this.name = a;
        this.value = b
    };
    var Ow = function() {
        Pw || (Pw = new m.Mw(""), Qw[""] = Pw)
    };
    m.Rw = function(a) {
        Ow();
        var b;
        if (!(b = Qw[a])) {
            b = new m.Mw(a);
            var c = a.lastIndexOf("."),
                d = a.substr(c + 1);
            (0, m.Rw)(a.substr(0, c)).getChildren()[d] = b;
            Qw[a] = b
        }
        return b
    };
    var Sw = function() {};
    var Tw = function() {};
    var Uw = function() {
        this.b = (0, m.C)()
    };
    var Vw = function(a) {
        this.i = a || "";
        this.j = Ww
    };
    var Xw = function(a) {
        return 10 > a ? "0" + a : String(a)
    };
    var Yw = function(a, b) {
        var c = (a.j - b) / 1E3,
            d = c.toFixed(3),
            e = 0;
        if (1 > c) e = 2;
        else
            for (; 100 > c;) e++, c *= 10;
        for (; 0 < e--;) d = " " + d;
        return d
    };
    var Zw = function(a) {
        Vw.call(this, a)
    };
    var $w = function(a, b) {
        var c = [];
        c.push(a.i, " ");
        if (a.g) {
            var d = new Date(b.j);
            c.push("[", Xw(d.getFullYear() - 2E3) + Xw(d.getMonth() + 1) + Xw(d.getDate()) + " " + Xw(d.getHours()) + ":" + Xw(d.getMinutes()) + ":" + Xw(d.getSeconds()) + "." + Xw(Math.floor(d.getMilliseconds() / 10)), "] ")
        }
        c.push("[", Yw(b, a.j.get()), "s] ");
        c.push("[", b.i, "] ");
        c.push(b.getMessage());
        a.b && b.g && c.push("\n", b.b);
        c.push("\n");
        return c.join("")
    };
    var ax = function() {
        (0, m.r)(this.j, this);
        this.b = new Zw;
        this.b.g = !1;
        this.g = this.b.b = !1;
        this.i = "";
        this.k = {}
    };
    var bx = function() {
        var a = cx;
        !0 != a.g && (Ow(), a.g = !0)
    };
    var dx = function(a, b, c) {
        if (a[b]) a[b](c);
        else a.log(c)
    };
    var ex = function(a) {
        var b = (fx + 1) % 50;
        fx = b;
        gx[b] = a;
        hx || (hx = 49 == b)
    };
    var ix = function(a) {
        var b = gx;
        if (b[0]) {
            var c = fx,
                d = hx ? c : -1;
            do {
                var d = (d + 1) % 50,
                    e = b[d];
                (0, m.A)(a, function(a) {
                    a(e)
                })
            } while (d != c);
            gx = Array(50);
            fx = -1;
            hx = !1
        }
    };
    var jx = function() {
        var a = m.kx,
            b = (0, m.n)("yt.mdx.remote.debug.logger_"),
            c = (0, m.n)("yt.mdx.remote.debug.handlers_");
        b && c || (cx || (cx = new ax), -1 != window.location.href.indexOf("Debug=true") && bx(), bx(), cx.b.b = !0, (b = (0, m.n)("yt.mdx.remote.debug.logger_")) || (b = (0, m.Rw)("yt.mdx.remote")), lx = b, m.Mw.prototype.log = m.Mw.prototype.log, m.Mw.prototype.getLogRecord = m.Mw.prototype.qG, m.Mw.prototype.addHandler = m.Mw.prototype.oG, m.Mw.prototype.removeHandler = m.Mw.prototype.rG, (0, m.Yb)("yt.mdx.remote.debug.logger_", lx),
            mx = (0, m.n)("yt.mdx.remote.debug.handlers_") || [], (0, m.Yb)("yt.mdx.remote.debug.handlers_", mx), (0, m.n)("yt.mdx.remote.debug.logger_"), c = (0, m.n)("yt.mdx.remote.debug.handlers_"));
        c && (c.push(a), ix(c))
    };
    m.nx = function(a, b, c) {
        var d = (0, m.n)("yt.mdx.remote.debug.logger_"),
            e = (0, m.n)("yt.mdx.remote.debug.handlers_");
        if (d) {
            if (d.log(a, b + ": " + c, void 0), e && !(0, m.hd)(e)) {
                ix(e);
                var g = d.getLogRecord(a, b + ": " + c, void 0);
                (0, m.A)(e, function(a) {
                    a(g)
                })
            }
        } else e && !(0, m.hd)(e) || ex(new Lw(a, String(c), "yt.mdx.remote"))
    };
    var ox = function() {
        if (!("cast" in window)) return !1;
        var a = window.cast || {};
        return "ActivityStatus" in a && "Api" in a && "LaunchRequest" in a && "Receiver" in a
    };
    m.px = function(a) {
        (0, m.nx)(m.qx, "CAST", a)
    };
    m.kx = function(a) {
        var b = (0, m.rx)();
        b && b.logMessage && (a = $w(sx, a), b.logMessage(a))
    };
    m.tx = function() {
        if (!m.ux && ((0, m.hd)(vx) && (0, m.dd)(vx, (0, m.pv)()), ox())) {
            var a = (0, m.rx)();
            a ? (a.removeReceiverListener("YouTube", m.wx), a.addReceiverListener("YouTube", m.wx), (0, m.px)("API initialized in the other binary")) : (a = new window.cast.Api, (0, m.xx)(a), a.addReceiverListener("YouTube", m.wx), a.setReloadTabRequestHandler && a.setReloadTabRequestHandler(function() {
                (0, m.w)(function() {
                    window.location.reload(!0)
                }, 1E3)
            }), sx = new Zw, sx.g = !1, sx.b = !1, jx(), (0, m.px)("API initialized"));
            m.ux = !0
        }
    };
    var yx = function(a) {
        var b = (0, m.Tb)(vx, function(b) {
            return b.id == a.id
        });
        0 <= b && (vx[b] = Wu(a))
    };
    m.wx = function(a) {
        (0, m.px)("Updating receivers: " + (0, m.Oi)(a));
        zx(a);
        (0, m.B)("yt-remote-cast-device-list-update", Ax());
        (0, m.A)(Ax(), function(a) {
            Bx(a.id)
        });
        (0, m.A)(a, function(a) {
            a.isTabProjected && (a = (0, m.Cx)(a.id), (0, m.px)("Detected device: " + a.id + " is tab projected. Firing DEVICE_TAB_PROJECTED event."), (0, m.B)("yt-remote-cast-device-tab-projected", a.id))
        })
    };
    m.Dx = function(a, b) {
        (0, m.px)("Updating " + a + " activity status: " + (0, m.Oi)(b));
        var c = (0, m.Cx)(a);
        c ? (b.activityId && (c.activityId = b.activityId), c.status = "running" == b.status ? "RUNNING" : "stopped" == b.status ? "STOPPED" : "error" == b.status ? "ERROR" : "UNKNOWN", "RUNNING" != c.status && (c.activityId = ""), yx(c), (0, m.B)("yt-remote-cast-device-status-update", c)) : (0, m.px)("Device not found")
    };
    var Ax = function() {
        (0, m.tx)();
        return bv(vx)
    };
    var zx = function(a) {
        a = (0, m.Mb)(a, function(a) {
            var c = {
                id: a.id,
                name: a.name
            };
            if (a = (0, m.Cx)(a.id)) c.activityId = a.activityId, c.status = a.status;
            return c
        });
        (0, m.gd)(vx);
        (0, m.dd)(vx, a)
    };
    m.Cx = function(a) {
        var b = Ax();
        return (0, m.Wb)(b, function(b) {
            return b.id == a
        }) || null
    };
    var Bx = function(a) {
        var b = (0, m.Cx)(a),
            c = (0, m.rx)();
        c && b && b.activityId && c.getActivityStatus(b.activityId, function(b) {
            "error" == b.status && (b.status = "stopped");
            (0, m.Dx)(a, b)
        })
    };
    m.Ex = function(a, b, c, d) {
        (0, m.tx)();
        var e = (0, m.Cx)(a),
            g = (0, m.rx)();
        if (g && e) {
            var h = new window.cast.Receiver(e.id, e.name),
                h = new window.cast.LaunchRequest("YouTube", h);
            h.parameters = "pairingCode=" + b;
            h.description = new window.cast.LaunchDescription;
            h.description.text = window.document.title;
            c && (h.parameters += "&v=" + c, d && (h.parameters += "&t=" + Math.round(d)), h.description.url = "http://i.ytimg.com/vi/" + c + "/default.jpg");
            "UNKNOWN" != e.status && (e.status = "UNKNOWN", yx(e), (0, m.B)("yt-remote-cast-device-status-update",
                e));
            (0, m.px)("Sending a cast launch request with params: " + h.parameters);
            g.launch(h, (0, m.E)(m.Dx, a))
        } else(0, m.px)("No cast API or no cast device. Dropping cast launch.")
    };
    m.rx = function() {
        return (0, m.n)("yt.mdx.remote.castapi.api_")
    };
    m.xx = function(a) {
        (0, m.l)("yt.mdx.remote.castapi.api_", a, void 0)
    };
    m.Fx = function() {
        m.uv.call(this);
        this.Od = fv(mv());
        this.log_("Initializing local screens: " + Uu(this.Od));
        this.vf = (0, m.Gx)();
        this.log_("Initializing account screens: " + Uu(this.vf));
        this.Yo = null;
        this.b = [];
        this.g = [];
        this.Cl(Ax());
        this.log_("Initializing DIAL devices: " + Xu(this.g));
        var a = fv((0, m.nv)());
        (0, m.Hx)(this, a);
        this.log_("Initializing online screens: " + Uu(this.b));
        (0, m.y)("yt-remote-cast-device-list-update", this.Cl, this);
        (0, m.y)("yt-remote-cast-device-status-update", this.zE, this);
        this.yl();
        (0, m.$c)((0, m.r)(this.yl,
            this), 1E4)
    };
    m.Ix = function(a) {
        var b = window.navigator.userAgent;
        if (0 <= b.search("MSIE") && (b = b.match(/MSIE ([\d.]+)/)[1], 0 > ld(b, "10.0"))) return a;
        b = (0, m.hf)(window.document.location.href);
        return (0, m.gf)("https", null, b[3], null, a)
    };
    m.Gx = function() {
        var a = fv(mv()),
            b = fv((0, m.nv)());
        return (0, m.Lb)(b, function(b) {
            return !(0, m.iv)(a, b)
        })
    };
    var Jx = function(a, b) {
        var c = Kx(a);
        return (0, m.Lb)(b, function(a) {
            return a.tc ? (a = (0, m.dv)(this.g, a.tc), !!a && "RUNNING" == a.status) : !!(0, m.iv)(c, a)
        }, a)
    };
    m.Hx = function(a, b, c) {
        var d = Jx(a, b),
            e = !(0, m.bd)(a.b, d, hv);
        !e && !c || (0, m.hd)(b) || (b = ev(d), (0, m.ej)("yt-remote-online-screens", b, 60));
        e && (a.log_("Updating online screens: " + Uu(a.b) + " -> " + Uu(d)), a.b = d, a.K("onlineReceiverChange"))
    };
    var Lx = function(a, b) {
        var c = [],
            d = {};
        (0, m.A)(b, function(a) {
            a.md && (d[a.md] = a, c.push(a.md))
        });
        var e = {
            method: "POST",
            ba: {
                lounge_token: c.join(",")
            },
            N: a,
            onSuccess: function(a, b) {
                var c = [];
                (0, m.A)(b.screens || [], function(a) {
                    "online" == a.status && c.push(d[a.loungeToken])
                });
                var e = this.Yo ? (0, m.Mx)(this, this.Yo) : null;
                e && !(0, m.iv)(c, e) && c.push(e);
                (0, m.Hx)(this, c, !0)
            }
        };
        (0, m.U)((0, m.Ix)("/api/lounge/pairing/get_screen_availability"), e)
    };
    var Nx = function(a) {
        var b = Kx(a),
            c = (0, m.Mb)(b, function(a) {
                return a.Zb
            });
        (0, m.hd)(c) || (a.log_("Updating lounge tokens for: " + (0, m.Oi)(c)), (0, m.U)((0, m.Ix)("/api/lounge/pairing/get_lounge_token_batch"), {
            ba: {
                screen_ids: c.join(",")
            },
            method: "POST",
            N: a,
            onSuccess: function(a, c) {
                Ox(this, c.screens || []);
                this.Od = (0, m.Lb)(this.Od, function(a) {
                    return !!a.md
                });
                (0, m.Px)(this);
                Lx(this, b)
            }
        }))
    };
    var Ox = function(a, b) {
        (0, m.A)((0, m.fd)(a.Od, a.vf), function(a) {
            var d = (0, m.Wb)(b, function(b) {
                return a.Zb == b.screenId
            });
            d && (a.md = d.loungeToken)
        })
    };
    m.Px = function(a) {
        var b = fv(mv());
        (0, m.bd)(a.Od, b, hv) || (a.log_("Saving local screens: " + Uu(b) + " to " + Uu(a.Od)), lv(ev(a.Od)), a.aj())
    };
    m.Mx = function(a, b) {
        var c = jv(Kx(a), b);
        a.log_("Found screen: " + (0, m.Tu)(c) + " with key: " + b);
        return c
    };
    m.Qx = function(a, b) {
        var c = jv(a.b, b);
        a.log_("Found online screen: " + (0, m.Tu)(c) + " with key: " + b);
        return c
    };
    m.Rx = function(a, b) {
        var c = (0, m.dv)(a.g, b);
        if (!c) {
            var d = jv(a.Od, b);
            d && (c = (0, m.dv)(a.g, d.tc))
        }
        a.log_("Found DIAL: " + (c ? c.toString() : "null") + " with key: " + b);
        return c
    };
    var Kx = function(a) {
        return (0, m.fd)(a.vf, (0, m.Lb)(a.Od, function(a) {
            return !(0, m.iv)(this.vf, a)
        }, a))
    };
    m.Sx = function() {};
    m.Tx = function(a, b, c, d, e) {
        (new m.Sx).debug("TestLoadImageWithRetries: " + e);
        if (0 == d) c(!1);
        else {
            var g = e || 0;
            d--;
            (0, m.Ux)(a, b, function(e) {
                e ? c(!0) : m.ca.setTimeout(function() {
                    (0, m.Tx)(a, b, c, d, g)
                }, g)
            })
        }
    };
    m.Ux = function(a, b, c) {
        var d = new m.Sx;
        d.debug("TestLoadImage: loading " + a);
        var e = new window.Image;
        e.onload = function() {
            try {
                d.debug("TestLoadImage: loaded"), Vx(e), c(!0)
            } catch (a) {}
        };
        e.onerror = function() {
            try {
                d.debug("TestLoadImage: error"), Vx(e), c(!1)
            } catch (a) {}
        };
        e.onabort = function() {
            try {
                d.debug("TestLoadImage: abort"), Vx(e), c(!1)
            } catch (a) {}
        };
        e.ontimeout = function() {
            try {
                d.debug("TestLoadImage: timeout"), Vx(e), c(!1)
            } catch (a) {}
        };
        m.ca.setTimeout(function() {
            if (e.ontimeout) e.ontimeout()
        }, b);
        e.src = a
    };
    var Vx = function(a) {
        a.onload = null;
        a.onerror = null;
        a.onabort = null;
        a.ontimeout = null
    };
    m.Wx = function(a) {
        a = a || 0;
        5 >= a && (a = 0);
        return a
    };
    m.Xx = function() {
        Yx && Yx.abort && Yx.abort();
        m.Zx && (0, m.De)(m.Zx)
    };
    m.$x = function(a, b, c, d) {
        var e = (0, m.Wb)(b.media_template_data, function(a) {
            return !!a.imageUrl
        });
        e && (a = {
            video_id: e.videoId,
            ad_type: a,
            headline: (0, m.pc)(b.line1),
            image_url: e.imageUrl,
            description1: (0, m.pc)(b.line2),
            description2: (0, m.pc)(b.line3),
            channel_title: e.channelName
        }, m.ay = (0, m.pc)(b.url), (0, m.zc)((0, m.oc)(b.creative_view_url)) || (by = (0, m.pc)(b.creative_view_url)), Yx = (0, m.U)("/pyv?" + (0, m.Af)(a), {
            format: "XML",
            onSuccess: function(a, b) {
                c && b.html_content && ((0, m.D)(c).innerHTML = b.html_content);
                d && d(a, b)
            }
        }))
    };
    m.cy = function(a) {
        var b = "feed",
            c = "feed-pyv-container",
            d = (0, m.D)("medium-shelf-pyv-container"),
            e = (0, m.D)("shelf-pyv-container");
        (0, m.D)("feed-pyv-container") ? (b = "feed", c = "feed-pyv-container") : d ? (b = "medium_shelf", c = "medium-shelf-pyv-container") : e && (b = "shelf", c = "shelf-pyv-container");
        var g = (0, m.D)(c);
        if (!g || 0 == a.length)
            if ("feed" == b || "shelf" == b || "medium_shelf" == b) {
                (0, m.De)(g);
                return
            }(0, m.$x)(b, a[0], g, function() {
                (0, m.A)(dy, function(a) {
                    (a = window.document.getElementById(a)) && a.setAttribute("href", m.ay)
                });
                (0, m.zq)(g);
                (0, m.ey)()
            })
    };
    m.ey = function() {
        var a = by;
        if (a) {
            var b = (0, m.Ef)(a),
                c = (0, m.mf)(a),
                d = (0, m.yf)(a),
                a = null != b && ((0, m.rd)(b, ".google.com") && (0, m.Zb)(c.match(/\/pagead\/sul/)) || (0, m.rd)(b, ".youtube.com") && (0, m.Zb)(c.match(/\/gen_204/)) && "sul" == d.a) ? 'data:text/html;charset=utf-8,<body><img src="' + a + '"/></body>' : a,
                a = (0, m.pe)("iframe", {
                    src: a,
                    style: "display:none"
                });
            (0, m.ce)(a).body.appendChild(a)
        }
    };
    m.fy = function() {
        this.b = {}
    };
    m.gy = function(a, b) {
        this.g = a;
        this.b = b
    };
    m.hy = function() {
        var a = (0, m.n)("ytplayer.config");
        a && !a.loaded && ((0, m.iy)("player-api", a), a.loaded = !0)
    };
    m.jy = function(a, b) {
        var c = b || {},
            d = c.document || window.document,
            e = (0, m.ue)("SCRIPT"),
            g = {
                yw: e,
                ud: void 0
            },
            h = new m.Sv(ky, g),
            k = null,
            p = null != c.timeout ? c.timeout : 5E3;
        0 < p && (k = window.setTimeout(function() {
            ly(e, !0);
            h.Ne(new my(1, "Timeout reached for loading script " + a))
        }, p), g.ud = k);
        e.onload = e.onreadystatechange = function() {
            e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (ly(e, c.tE || !1, k), h.Kd(null))
        };
        e.onerror = function() {
            ly(e, !0, k);
            h.Ne(new my(0, "Error while loading script " + a))
        };
        (0, m.ge)(e, {
            type: "text/javascript",
            charset: "UTF-8",
            src: a
        });
        ny(d).appendChild(e);
        return h
    };
    var ny = function(a) {
        var b = a.getElementsByTagName("HEAD");
        return !b || (0, m.hd)(b) ? a.documentElement : b[0]
    };
    var ky = function() {
        if (this && this.yw) {
            var a = this.yw;
            a && "SCRIPT" == a.tagName && ly(a, !0, this.ud)
        }
    };
    var ly = function(a, b, c) {
        null != c && m.ca.clearTimeout(c);
        a.onload = m.da;
        a.onerror = m.da;
        a.onreadystatechange = m.da;
        b && window.setTimeout(function() {
            (0, m.De)(a)
        }, 0)
    };
    var my = function(a, b) {
        var c = "Jsloader error (code #" + a + ")";
        b && (c += ": " + b);
        sd.call(this, c);
        this.code = a
    };
    m.oy = function(a, b) {
        this.g = new m.fi(a);
        this.b = b ? b : "callback";
        this.ud = 5E3
    };
    var py = function(a, b, c) {
        return function() {
            qy(a, !1);
            c && c(b)
        }
    };
    var ry = function(a, b) {
        return function(c) {
            qy(a, !0);
            b.apply(void 0, arguments)
        }
    };
    var qy = function(a, b) {
        m.ca._callbacks_[a] && (b ? delete m.ca._callbacks_[a] : m.ca._callbacks_[a] = m.da)
    };
    m.sy = function(a) {
        m.gw.call(this, a);
        this.B = [];
        this.F = []
    };
    m.ty = function() {
        m.sy.call(this)
    };
    m.uy = function() {
        Lp.call(this);
        this.F = null
    };
    m.vy = function(a, b) {
        if (!(0, m.vh)(m.qh.getInstance(), 118)) {
            var c = (0, m.v)("EW_ON_CLICK"),
                d = Mp(m.uy);
            a && b && (d.F = b);
            d.init((0, m.v)("EW_URL_CSS"), (0, m.v)("EW_URL_JS"), !!a || !!b || c, a, b)
        }
    };
    m.wy = function(a, b, c) {
        a && !xy && (xy = !0, yy = b, c && (zy.hide = function(a) {
            Ay(a, c)
        }), By.push((0, m.hg)(a, "click", Cy, "dismiss-menu-choice")), By.push((0, m.hg)(a, "click", Dy, "feed-promo-dismissal")), Ey.push((0, m.y)("subscription-subscribe-success", Fy), (0, m.y)("subscription-unsubscribe-success", Gy)), (0, m.vy)(a, "start-ew"))
    };
    var Cy = function(a) {
        var b = (0, m.H)(a.currentTarget, "action");
        zy[b](a.currentTarget)
    };
    var Dy = function(a) {
        a = (0, m.Q)(a.currentTarget, "feed-promo");
        var b = (0, window.parseInt)((0, m.H)(a, "cookie-id"), 10),
            c = m.qh.getInstance();
        (0, m.wh)(b, !0);
        c.save();
        "i18n-local-languages-feed-promo" == a.id && (a = {
            gl: (0, m.H)(a, "promo-gl")
        }, a = (0, m.Af)(a), (0, m.Gf)("i18n-promo-close", a, void 0))
    };
    var Fy = function(a, b) {
        Hy(a, function(a) {
            if (a = (0, m.O)("feed-item-action-menu", a))(0, m.L)(a, "subscribed"), (a = (0, m.O)("unsubscribe", a)) && (0, m.Hc)(a, "subscription-id", b)
        })
    };
    var Gy = function(a, b) {
        if (!yy) {
            if (b && (0, m.Hd)(b, "dismiss-menu-choice")) {
                var c = (0, m.Q)(b, "feed-item-container"),
                    d = (0, m.Q)(b, "feed-item-dismissable");
                Iy(d);
                c = (0, m.O)("feed-item-dismissal-unsubscribe", c);
                m.T.show(c)
            }
            Hy(a, function(a) {
                a = (0, m.O)("feed-item-dismissable", a);
                Jy(a)
            })
        }
    };
    var Ay = function(a, b) {
        var c = (0, m.Q)(a, "feed-item-action-menu"),
            d = (0, m.H)(c, "external-id");
        b ? b(d) : (d = {
            session_token: (0, m.ad)("feed_change_ajax"),
            external_id: d
        }, (0, m.v)("DISMISS_THROUGH_IT") && (d.it = 1), (0, m.U)("/feed_change_ajax?action_dismiss_item=1", {
            method: "POST",
            ba: d
        }));
        d = (0, m.Q)(c, "feed-item-container");
        Iy(d);
        c = (0, m.O)("feed-item-dismissal-hide", d);
        d = (0, m.O)("feed-item-dismissable", d);
        m.T.show(c);
        Jy(d);
        (0, m.un)()
    };
    var Ky = function(a) {
        if (!(0, m.H)(a, "ypc-enabled")) return null;
        var b = (0, m.H)(a, "ypc-item-type"),
            c = (0, m.H)(a, "ypc-item-id");
        a = (0, m.H)(a, "ypc-offers-url");
        return {
            itemType: b,
            itemId: c,
            offersUrl: a
        }
    };
    var Ly = function(a, b) {
        var c = (0, m.H)(a, "channel-key");
        Hy(c, b)
    };
    var Hy = function(a, b) {
        var c = (0, m.N)("feed-item-container");
        (0, m.A)(c, function(c) {
            (0, m.H)(c, "channel-key") == a && b(c)
        })
    };
    var Iy = function(a) {
        a = (0, m.N)("feed-item-dismissal", a);
        m.T.hide.apply(null, a)
    };
    var Jy = function(a) {
        (0, m.Du)(a, {
            duration: 0.3,
            za: function() {
                m.T.hide(a)
            }
        })
    };
    m.My = function(a, b, c) {
        this.g = a;
        (a = b || null) || (a = Ny(this.g));
        a = "(" + a.join("|") + ")";
        a = (0, m.qd)("__%s__", a);
        this.i = RegExp(a, "g");
        this.b = c || {}
    };
    m.Oy = function(a, b, c) {
        a = (0, m.Py)((0, m.D)(a));
        return new m.My(a, b, c)
    };
    m.Py = function(a) {
        a = a.innerHTML;
        a = a.replace(/^\s*(\x3c!--\s*)?/, "");
        return a = a.replace(/(\s*--\x3e)?\s*$/, "")
    };
    var Ny = function(a) {
        var b = [],
            c = {};
        a.replace(Qy, function(a, e) {
            e in c || (c[e] = !0, b.push(e))
        });
        return b
    };
    var Ry = function(a) {
        var b = (0, m.n)("yt.www.watch.player.seekTo");
        b && b(a)
    };
    var Sy = function(a, b) {
        var c = (0, m.D)("dftpop");
        c && !(0, m.Hd)(c, "show") && (m.T.setProperty((0, m.D)("dftpop-content"), "left", a - 25 + "px"), m.T.setProperty((0, m.D)("dftpop-content"), "top", b + 10 + "px"), (0, m.U)("/watch_actions_ajax", {
            method: "POST",
            format: "JSON",
            ca: {
                action_display_plus_one_promo: "1"
            },
            ba: {
                session_token: (0, m.ad)("watch_actions_ajax")
            },
            onSuccess: function(a, b) {
                if (b.show_promo) {
                    var c = (0, m.D)("dftpop");
                    c && (0, m.L)(c, "show")
                }
            }
        }))
    };
    var Ty = function() {
        var a = (0, m.D)("distiller-spinner");
        a && m.T.hide(a)
    };
    var Uy = function() {
        var a = (0, m.D)("distiller-alert");
        a && m.T.show(a)
    };
    var Vy = function(a, b, c) {
        (0, m.U)("/comment_voting", {
            format: "XML",
            method: "POST",
            ca: {
                a: 1,
                id: c,
                video_id: a,
                old_vote: 0
            },
            ba: {
                session_token: b
            }
        })
    };
    var Wy = function(a, b) {
        if (a)
            if ("#" == a) {
                var c = (0, m.n)(b);
                c && c("comment")
            } else(0, m.Bi)(a);
        else Uy()
    };
    var Xy = function(a) {
        var b = a.channel_id,
            c = a.create_channel_url,
            d = a.query,
            e = a.id_merge_url,
            g = a.owner_id,
            h = a.page_size,
            k = a.pinned_activity,
            p = a.privacy_setting,
            u = a.reauth,
            z = a.signin_url,
            F = a.video_id;
        a = a.viewer_id;
        var K = !!(0, m.v)("DISTILLER_CONFIG"),
            P = !F,
            W = null;
        (0, m.Ec)(z) ? W = u && K ? Uy : (0, m.E)(m.Bi, z, null, null): (0, m.Ec)(c) ? W = (0, m.E)(Wy, c, "yt.www.account.CreateChannelLoader.show") : (0, m.Ec)(e) && (W = (0, m.E)(Wy, e, "yt.www.account.LinkGplusLoader.show"));
        c = (0, m.E)(Vy, F, (0, m.ad)("comment_voting"));
        e = 590;
        if (!K || P)
            if (K =
                (0, m.D)("comments-test-iframe")) K.getBoundingClientRect ? (K = Xg(Kg, K), K = new m.Qd(K.right - K.left, K.bottom - K.top)) : K = null, e = K.width;
        b = {
            first_party_property: "YOUTUBE",
            href: window.top.location,
            onfirsttimeplusonepromo: Sy,
            onthumbsup: c,
            ontimestampclicked: Ry,
            onready: Ty,
            owner_id: g,
            query: d,
            stream_id: b,
            substream_id: P ? "channel" : F,
            view_type: "FILTERED",
            width: Math.floor(e)
        };
        W && (b.onupgradeaccount = W);
        h && (b.page_size = h);
        k && (b.pinned_comment = k);
        p && (b.youtube_video_acl = p);
        a && (b.viewer_id = a);
        P || (b.onallcommentsclicked =
            (0, m.E)(m.Bi, "/all_comments", {
                v: F
            }));
        (0, m.n)("gapi.comments.render")("comments-test-iframe", b)
    };
    m.Yy = function() {
        var a = (0, m.v)("DISTILLER_CONFIG"),
            b = (0, m.D)("comments-test-iframe");
        if (!a || !b) return !1;
        var c = (b = "signin_url" in a) ? ":socialhost:/:im_prefix::session_prefix:_/widget/render/comments?usegapi=1" : ":socialhost:/:im_prefix::session_prefix:wm/4/_/widget/render/comments?usegapi=1",
            c = (0, m.zp)((0, m.E)(Xy, a), "comments", c);
        b && (c.config["googleapis.config"].signedIn = !1);
        (a = a.host_override) && (c.config.iframes[":socialhost:"] = a);
        500 > window.location.search.length + window.location.hash.length && (c.config.iframes.comments.params = {
            location: ["search", "hash"]
        });
        (0, m.yp)("comments:iframes", c);
        return !0
    };
    m.Zy = function() {
        var a = (0, m.n)("gapi.comments.dispose");
        a && a()
    };
    m.$y = function(a, b) {
        this.B = "session_token=" + a;
        (this.b = window.document.location.protocol + "//" + window.document.location.hostname) && "/" != this.b.charAt(this.b.length - 1) && (this.b += "/");
        this.i = b;
        this.j = null;
        this.A = [];
        this.k = [];
        this.C = {}
    };
    m.az = function() {
        var a = (0, m.N)("multirow-shelf", m.bz);
        (0, m.A)(a, function(a) {
            var c = 0,
                d = null,
                e = (0, m.fe)("li", "yt-shelf-grid-item", a);
            (0, m.A)(e, function(a) {
                m.T.Ra(a) && (a = (0, m.Sg)(a).x, (a <= d || !d) && c++, d = a)
            });
            a = (0, m.O)("yt-uix-expander-head", a);
            (0, m.Id)(a, "hidden-expander", 2 >= c)
        })
    };
    m.cz = function(a, b, c, d, e, g) {
        this.Z = a;
        this.Xn = !1;
        this.b = [];
        this.j = null;
        a = nf() + "/share_ajax";
        c = {
            action_get_email: 1,
            video_id: c,
            list: d,
            channel_id: e
        };
        g && (c.new_share = 1);
        this.j = (0, m.U)(a, {
            format: "JSON",
            ca: c,
            onSuccess: function(a, c) {
                this.Z.innerHTML = c.email_html;
                this.Dc();
                this.focus();
                var d = c.sharing_binary_url;
                d && dz(this, d, c.contacts, b)
            },
            N: this
        })
    };
    var dz = function(a, b, c, d) {
        (0, m.Ra)(b, (0, m.r)(function() {
            if (!this.ma()) {
                var a = (0, m.n)("yt.sharing.ContactTools");
                a && a.createContactTools(this.i, c, d)
            }
        }, a))
    };
    var ez = function(a) {
        a.Xn = !1;
        a.i.value = "";
        a.g.value = "";
        a.k.innerHTML = "";
        m.T.hide(a.no);
        m.T.show(a.Ya)
    };
    m.fz = function(a) {
        gz = a;
        gz.addEventListener("SUBSCRIBE", hz);
        gz.addEventListener("UNSUBSCRIBE", iz);
        jz.push((0, m.y)("subscription-subscribe-success", kz));
        jz.push((0, m.y)("subscription-unsubscribe-success", lz))
    };
    var mz = function(a) {
        return {
            qq: a.externalChannelId,
            Ww: a.offersUrl,
            source: a.source,
            sJ: a.subscriptionId
        }
    };
    var hz = function(a) {
        a = mz(a);
        if (Kn()) {
            var b = null;
            a.Ww && (b = {
                itemType: "U",
                itemId: a.qq,
                offersUrl: a.Ww
            });
            (0, m.B)("subscription-subscribe", a.qq, b);
            (0, m.Hf)((0, m.Af)({
                event: "subscribe",
                source: a.source
            }))
        } else nz(a)
    };
    var nz = function(a) {
        Jn(function(b) {
            b.subscription_ajax && ((0, m.ua)("subscription_ajax", b.subscription_ajax), hz(a))
        })
    };
    var iz = function(a) {
        a = mz(a);
        (0, m.B)("subscription-unsubscribe", a.qq, a.sJ, null);
        (0, m.Hf)((0, m.Af)({
            event: "unsubscribe",
            source: a.source
        }))
    };
    var kz = function(a, b) {
        gz && gz.channelSubscribed(a, b)
    };
    var lz = function(a) {
        gz && gz.channelUnsubscribed(a)
    };
    m.oz = function() {
        gz && (gz.removeEventListener("SUBSCRIBE", hz), gz.removeEventListener("UNSUBSCRIBE", iz));
        gz = null;
        (0, m.Ka)(jz)
    };
    var pz = function(a, b, c, d) {
        this.Z = a;
        this.Si = d || !1;
        this.b = [];
        this.k = null;
        a = nf() + "/share_ajax";
        b = {
            action_get_embed: 1,
            video_id: b,
            list: c
        };
        this.Si && (b.new_share = 1);
        this.k = (0, m.U)(a, {
            format: "JSON",
            ca: b,
            onSuccess: function(a, b) {
                this.Z.innerHTML = b.embed_html;
                this.FD = b.legacy_url;
                this.ED = b.legacy_code;
                this.wg = b.iframe_url;
                this.DD = b.iframe_code;
                this.ip = b.alternate_embed_urls;
                this.Dc();
                var c = m.qh.getInstance();
                this.vg && (this.vg.checked = !(0, m.vh)(0, 2));
                this.nl.checked = (0, m.vh)(0, 44);
                this.ug && (this.ug.checked = (0, m.vh)(0,
                    75));
                t: if (c = c.get("ems"), this.Si) {
                    "custom" == c && m.T.show((0, m.D)("share-embed-customize"));
                    for (var d = 0; d < this.$f.length; d++) {
                        var p = this.$f[d];
                        if (p.value == c) {
                            p.selected = !0;
                            m.Ll.getInstance().kd(this.ih);
                            break t
                        }
                    }
                    this.$f[0].selected = !0;
                    m.Ll.getInstance().kd(this.ih)
                } else(c in this.Re ? this.Re[c] : Rc(this.Re)).select();
                qz(this);
                this.oh()
            },
            N: this
        })
    };
    var rz = function(a) {
        var b = (0, m.O)("share-embed-size-list", a.Z),
            c = (0, m.N)("share-embed-size-radio", b);
        a.Re = {};
        (0, m.A)(c, function(a) {
            (0, m.Hd)(a, "share-embed-size-radio-custom") || (a = new sz(a), (0, m.G)(this, a), this.Re[a.name] = a)
        }, a);
        var c = tz(Rc(a.Re)),
            d = (0, m.O)("share-embed-size-radio-custom", b),
            c = new uz(d, c);
        (0, m.G)(a, c);
        a.Re[c.name] = c;
        a.A = c;
        a.b.push((0, m.hg)(b, "click", (0, m.r)(a.rF, a), "share-embed-size"));
        b = (0, m.O)("share-embed-customize", b);
        a.b.push((0, m.R)(b, "keyup", (0, m.r)(a.sF, a)))
    };
    var vz = function(a) {
        a.ih = (0, m.D)("embed-layout-options");
        a.$f = (0, m.fe)("option", null, a.ih);
        var b = (0, window.parseInt)((0, m.H)(a.$f[0], "width"), 10),
            c = (0, window.parseInt)((0, m.H)(a.$f[0], "height"), 10);
        a.o = b / c;
        a.b.push((0, m.R)(a.ih, "change", (0, m.r)(function() {
            var a = Ml(this.ih),
                a = a ? a.value || a.text : null,
                b = m.qh.getInstance();
            b.set("ems", a);
            b.save();
            qz(this);
            b = (0, m.D)("share-embed-customize");
            "custom" == a ? m.T.show(b) : (m.T.hide(b), this.focus())
        }, a)));
        b = (0, m.D)("share-embed-customize");
        a.j = (0, m.O)("share-embed-size-custom-width",
            b);
        a.i = (0, m.O)("share-embed-size-custom-height", b);
        a.b.push((0, m.R)(a.j, "keyup", (0, m.r)(a.YD, a)));
        a.b.push((0, m.R)(a.i, "keyup", (0, m.r)(a.XD, a)))
    };
    var wz = function(a) {
        var b = {},
            c = (0, m.N)("share-embed-option", a.Z);
        (0, m.A)(c, function(a) {
            b[a.name] = a
        });
        a.vg = b["show-related"];
        a.vg && a.b.push((0, m.R)(a.vg, "click", (0, m.r)(a.XF, a)));
        a.nl = b["delayed-cookies"];
        a.b.push((0, m.R)(a.nl, "click", (0, m.r)(a.WF, a)));
        a.ug = b["use-flash-code"] || null;
        a.ug && a.b.push((0, m.R)(a.ug, "click", (0, m.r)(a.YF, a)))
    };
    var qz = function(a) {
        var b = a.DD,
            c = a.wg;
        a.ug && a.ug.checked && (b = a.ED, c = a.FD);
        a.nl.checked && (c = c.replace("youtube.com", "youtube-nocookie.com"));
        c = c.split("//");
        c[0] = "";
        var c = c.join("//"),
            d = {};
        a.vg && !a.vg.checked && (d.rel = 0);
        c = (0, m.Bf)(c, d);
        if (a.Si) {
            var e = Ml(a.ih);
            e ? "custom" == e.value ? d = {
                width: a.hj,
                height: a.gj
            } : (d = (0, window.parseInt)((0, m.H)(e, "width"), 10), e = (0, window.parseInt)((0, m.H)(e, "height"), 10), d = {
                width: d,
                height: e
            }) : d = {
                width: 0,
                height: 0
            }
        } else d = xz(a);
        if (!d.width || 200 > d.width) a.Si ? (d = (0, window.parseInt)((0, m.H)(a.$f[0],
            "width"), 10), e = (0, window.parseInt)((0, m.H)(a.$f[0], "height"), 10), d = {
            width: d,
            height: e
        }) : d = Rc(a.Re);
        b = b.replace(/__url__/g, (0, m.qc)(c));
        b = b.replace(/__width__/g, d.width + "");
        b = b.replace(/__height__/g, d.height + "");
        b = (0, m.qc)(b);
        b != a.g.innerHTML && (a.g.innerHTML = b)
    };
    var xz = function(a) {
        return (a = (0, m.Oc)(a.Re, function(a) {
            return a.b.checked
        })) ? {
            width: a.width,
            height: a.height
        } : {
            width: 0,
            height: 0
        }
    };
    var sz = function(a) {
        this.name = a.value;
        this.b = a;
        this.width = (0, window.parseInt)((0, m.H)(this.b, "width"), 10);
        this.height = (0, window.parseInt)((0, m.H)(this.b, "height"), 10);
        this.g = []
    };
    var uz = function(a, b) {
        sz.call(this, a);
        this.k = b;
        var c = (0, m.$e)(a, "li");
        this.j = (0, m.O)("share-embed-size-custom-width", c);
        this.i = (0, m.O)("share-embed-size-custom-height", c);
        this.g.push((0, m.R)(this.j, "keyup", (0, m.r)(this.A, this)));
        this.g.push((0, m.R)(this.i, "keyup", (0, m.r)(this.o, this)))
    };
    var tz = function(a) {
        return a.width / a.height
    };
    m.yz = function(a, b, c) {
        m.Sm.call(this);
        this.target = a;
        this.j = b || a;
        this.i = c || new m.yg(window.NaN, window.NaN, window.NaN, window.NaN);
        this.b = (0, m.ce)(a);
        this.g = new m.tu(this);
        (0, m.G)(this, this.g);
        (0, m.Cm)(this.j, ["touchstart", "mousedown"], this.co, !1, this)
    };
    m.zz = function(a, b) {
        a.i = b || new m.yg(window.NaN, window.NaN, window.NaN, window.NaN)
    };
    var Az = function(a) {
        var b = a.type;
        "touchstart" == b || "touchmove" == b ? a.init(a.Wa.targetTouches[0], a.currentTarget) : "touchend" != b && "touchcancel" != b || a.init(a.Wa.changedTouches[0], a.currentTarget)
    };
    var Bz = function(a, b, c) {
        var d = (0, m.df)((0, m.ae)(a.b));
        b += d.x - a.k.x;
        c += d.y - a.k.y;
        a.k = d;
        a.th += b;
        a.Se += c;
        b = Cz(a, a.th);
        a = Dz(a, a.Se);
        return new m.Nd(b, a)
    };
    var Ez = function(a, b, c, d) {
        a.target.style.left = c + "px";
        a.target.style.top = d + "px";
        (0, m.Tm)(a, new Fz("drag", a, b.clientX, b.clientY, 0, c, d))
    };
    var Cz = function(a, b) {
        var c = a.i,
            d = (0, window.isNaN)(c.left) ? null : c.left,
            c = (0, window.isNaN)(c.width) ? 0 : c.width;
        return Math.min(null != d ? d + c : window.Infinity, Math.max(null != d ? d : -window.Infinity, b))
    };
    var Dz = function(a, b) {
        var c = a.i,
            d = (0, window.isNaN)(c.top) ? null : c.top,
            c = (0, window.isNaN)(c.height) ? 0 : c.height;
        return Math.min(null != d ? d + c : window.Infinity, Math.max(null != d ? d : -window.Infinity, b))
    };
    var Fz = function(a, b, c, d, e, g, h) {
        m.qm.call(this, a);
        this.clientX = c;
        this.clientY = d;
        this.left = (0, m.Ec)(g) ? g : b.th;
        this.top = (0, m.Ec)(h) ? h : b.Se;
        this.b = b
    };
    var Gz = function() {};
    var Hz = function(a, b) {
        this.Dg = a instanceof m.Nd ? a : new m.Nd(a, b)
    };
    var Iz = function(a) {
        var b;
        (0, m.lc)([0, 1, 2, 3], b) || (b = 1);
        var c = Math.pow(10, 3 - b);
        a = Math.ceil(a / c) * c;
        var d = Math.floor(a / 36E5);
        a -= 36E5 * d;
        var e = Math.floor(a / 6E4);
        a -= 6E4 * e;
        var c = Math.floor(a / 1E3),
            g = d ? d + ":" : "",
            d = (d && 10 > e ? "0" + e : e) + ":",
            e = 10 > c ? "0" + c : c,
            h = "";
        b && (h = (0, m.nd)(a - 1E3 * c, 3), h = "." + h.substring(0, b));
        return g + d + e + h
    };
    var Jz = function(a, b, c) {
        this.B = (0, m.D)(a);
        this.media = b;
        this.A = c;
        this.j = []
    };
    var Kz = function(a, b, c, d) {
        b = (0, m.R)(b, c, (0, m.r)(d, a));
        a.j.push(b)
    };
    var Lz = function(a, b, c, d, e, g) {
        Jz.call(this, a, b, c);
        this.b = {};
        this.b.ub = this.H("start-dragger");
        this.b.os = this.H("start-readout");
        this.b.xB = this.H("start-grayout");
        this.b.Gb = this.H("end-dragger");
        this.b.ms = this.H("end-readout");
        this.b.wB = this.H("end-grayout");
        this.width = this.H("framestrip").offsetWidth;
        this.g = d || 15;
        this.o = e ? Math.min(e, b.length_ms) : 1E3 / this.g;
        this.k = g ? Math.min(g, b.length_ms) : b.length_ms;
        this.ub = new m.yz(this.b.ub, this.H("gripper", this.b.ub));
        this.Gb = new m.yz(this.b.Gb, this.H("gripper",
            this.b.Gb));
        Kz(this, this.ub, "drag", this.Is);
        Kz(this, this.Gb, "drag", this.Is);
        Kz(this, this.ub, "end", this.Js);
        Kz(this, this.Gb, "end", this.Js);
        Kz(this, this.H("nudge-left", this.b.ub), "click", this.Jk);
        Kz(this, this.H("nudge-right", this.b.ub), "click", this.Jk);
        Kz(this, this.H("nudge-left", this.b.Gb), "click", this.Jk);
        Kz(this, this.H("nudge-right", this.b.Gb), "click", this.Jk);
        this.C = this.H("clip-trimmer");
        this.i = (0, m.Cm)(this.C, ["touchstart", "mousedown"], this.yB, !0, this);
        a = ee(this.H("framestrip"));
        (0, m.A)(a, function(a) {
            a.src =
                b.framestrip_url
        });
        Mz(this);
        Nz(this, !0)
    };
    var Oz = function(a, b, c) {
        var d, e, g = 1E3 / a.g;
        c ? (d = Math.max(0, a.media.end_ms - a.k), e = a.media.end_ms - a.o) : (d = a.media.start_ms + a.o, e = Math.min(a.media.start_ms + a.k, a.media.length_ms));
        b < d ? b = d : b > e && (b = e);
        b = Math.round(a.g * b / 1E3);
        b = Math.round(1E3 * b / a.g);
        !c && b + g / 2 > a.media.length_ms && (b = a.media.length_ms);
        a.media[c ? "start_ms" : "end_ms"] = b
    };
    var Mz = function(a) {
        var b = new Hz(Math.round(a.media.start_ms / a.media.length_ms * a.width), 0),
            c = new Hz(Math.round(a.media.end_ms / a.media.length_ms * a.width), 0);
        b.qe(a.b.ub, 2);
        c.qe(a.b.Gb, 0)
    };
    var Nz = function(a, b) {
        var c = a.media.duration_scale || 1,
            d = Math.round(c * a.media.start_ms),
            c = Math.round(c * a.media.end_ms);
        (0, m.Se)((0, m.He)(a.b.os), Iz(d));
        (0, m.Se)((0, m.He)(a.b.ms), Iz(c));
        for (var e = [a.b.ub, a.b.Gb], d = [a.b.os, a.b.ms], g = Array(2), c = Array(2), h = 0; 2 > h; h++) g[h] = (0, m.He)(d[h]).offsetWidth, c[h] = new Hz(e[h].offsetLeft + e[h].offsetWidth / 2 - g[h] / 2, e[h].offsetTop + e[h].clientHeight + 5);
        e = c[1].Dg.x - (c[0].Dg.x + g[0]);
        4 > e && (c[0].Dg.x -= (4 - e) / 2, c[1].Dg.x += (4 - e) / 2);
        c[0].qe(d[0], 0);
        c[1].qe(d[1], 0);
        d = a.b.ub.offsetWidth;
        (0, m.zz)(a.ub, new m.yg(0 - d, 0, a.b.Gb.offsetLeft, 0));
        (0, m.zz)(a.Gb, new m.yg(a.b.ub.offsetLeft + d, 0, a.width - a.b.ub.offsetLeft - d, 0));
        Pz(a);
        a.A && a.A(a.media, b ? "start_ms" : "end_ms", !0, void 0)
    };
    var Pz = function(a) {
        var b = a.b.Gb.offsetWidth,
            c = a.b.ub.offsetLeft + 3;
        a.b.xB.style.width = 0 < c ? c + "px" : "0";
        b = a.width - a.b.Gb.offsetLeft - b + 3;
        a.b.wB.style.width = 0 < b ? b + "px" : "0"
    };
    m.Qz = function(a, b, c, d, e, g) {
        var h = {};
        e && (h.feature = e);
        (0, m.Qa)(g || {}, function(a, b) {
            h[b] = a
        });
        h["action_" + a] = 1;
        c["action_" + a] = 1;
        c[(0, m.v)("XSRF_FIELD_NAME")] = (0, m.ad)("editor_ajax");
        a = {
            format: "JSON",
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            Xc: (0, m.Oi)(c),
            ca: h,
            onSuccess: function(a, c) {
                b(c)
            },
            onError: function(a) {
                var b = a && "status" in a ? a.status : -1;
                a.responseText || (0, m.Yc)(503 == b ? "AJAX_REQUEST_503" : "AJAX_REQUEST_FAILED");
                a = ["/gen_204?a=editor_ajax&err=", b, "&url=", (0, window.escape)("/editor_ajax")].join("");
                (0, m.Ua)(a);
                d && d()
            }
        };
        (0, m.U)("/editor_ajax", a)
    };
    var Rz = function(a) {
        var b = [],
            c = {
                vc: (0, m.Mb)(a, Sz),
                ac: (0, m.Mb)(b, Sz)
            };
        0 == a.length && 1 == b.length && (c.ac[0].title = b[0].title || "", c.ac[0].artist = b[0].artist || "");
        return c
    };
    var Sz = function(a) {
        var b = {
            type: a.type,
            id: a.id,
            start_ms: a.start_ms,
            end_ms: a.end_ms,
            length_ms: a.length_ms,
            effects: Tz(a.effects)
        };
        a.image_type && (b.image_type = a.image_type);
        return b
    };
    var Tz = function(a) {
        if (!a) return [];
        var b = [];
        (0, m.A)(a, function(a) {
            a.enabled && b.push({
                id: a.id,
                parameters: (0, m.Lc)(a.parameters)
            })
        });
        return b
    };
    m.Uz = function(a, b, c) {
        this.Z = a;
        this.C = [-1, -1];
        this.b = [];
        this.A = null;
        a = nf() + "/share_ajax";
        this.A = (0, m.U)(a, {
            format: "JSON",
            ca: {
                action_get_gif: 1,
                video_id: c
            },
            onSuccess: function(a, b) {
                this.Z.innerHTML = b.inner_html;
                this.Dc();
                this.media = b.media;
                var c = (0, m.O)("share-panel-gif-trimmer", void 0);
                this.Af = new Lz(c, this.media, (0, m.r)(this.cF, this));
                this.Fu = (0, m.fe)("option", null, this.sn);
                for (c = 0; c < this.Fu.length; c++)
                    if ("default" == this.Fu[c].value) {
                        m.Ll.getInstance().kd(this.sn);
                        break
                    } c = Math.round(1E3 * (0, m.ar)().getCurrentTime());
                c = [c, c + 1E3];
                c = (0, m.Vz)(this, c, !0);
                this.Tf.value = Iz(c[0]);
                this.Zj.value = Iz(c[1]);
                if (this.Af) {
                    var h = this.Af,
                        k = c[1];
                    h.media.start_ms = c[0];
                    h.media.end_ms = k;
                    Mz(this.Af);
                    Pz(this.Af)
                }
                this.gp = !0;
                Wz(this)
            },
            N: this
        })
    };
    var Xz = function(a) {
        var b = (0, m.ar)();
        1 == b.getPlayerState() && b.pauseVideo();
        Math.round(1E3 * b.getCurrentTime()) != a && b.seekTo(a / 1E3, !0)
    };
    m.Yz = function(a, b, c) {
        a.Tf.value = Iz(b[0]);
        a.Zj.value = Iz(b[1]);
        if (a.Af) {
            var d = a.Af,
                e = b[1];
            d.media.start_ms = b[0];
            d.media.end_ms = e;
            Mz(a.Af);
            Pz(a.Af)
        }
        c && Wz(a)
    };
    m.Vz = function(a, b, c) {
        1E3 > b[1] - b[0] ? c ? b[1] = b[0] + 1E3 : b[0] = b[1] - 1E3 : 1E4 < b[1] - b[0] && (c ? b[1] = b[0] + 1E4 : b[0] = b[1] - 1E4);
        0 > b[0] && (b[1] -= b[0], b[0] = 0);
        b[1] > a.media.length_ms && (c = b[1] - b[0], b[1] = a.media.length_ms, b[0] = Math.max(0, b[1] - c));
        return b
    };
    var Zz = function(a) {
        var b = 0,
            c = a.split(".");
        if (2 < c.length) return null;
        2 == c.length && (b += 100 * (0, window.parseInt)(c[1].match(/\d+/g), 10));
        if (a = c[0].match(/\d+/g)) {
            if (3 < a.length) return null;
            a.reverse();
            for (c = 1E3; a.length && 36E5 >= c;) b += c * a.shift(), c *= 60
        } else if (2 > c.length) return null;
        return b
    };
    var Wz = function(a) {
        !a.gp || a.C[0] == a.media.start_ms && a.C[1] == a.media.end_ms || (a.B && m.ca.clearTimeout(a.B), a.C = [a.media.start_ms, a.media.end_ms], a.B = (0, m.Wm)((0, m.r)(a.QH, a), 100))
    };
    m.$z = function(a, b, c, d, e, g, h, k, p) {
        this.Z = a;
        this.j = b || null;
        this.P = c || null;
        this.fa = !1;
        this.J = e || !1;
        this.va = g || null;
        this.ua = !!h;
        this.pa = !!k;
        this.aa = p || null;
        this.Y = null;
        this.b = [];
        this.ja = 0;
        aA(this, d)
    };
    var bA = function(a) {
        var b = ["h", "m", "s"],
            c = (0, m.ed)(b);
        c.reverse();
        var d = {};
        a = a.toLowerCase().match(/\d+\s*[hms]?/g) || [];
        a = (0, m.Lb)(a, function(a) {
            var b = (a.match(/[hms]/) || [""])[0];
            return b ? (d[b] = (0, window.parseInt)(a.match(/\d+/)[0], 10), !1) : !0
        });
        for (a.reverse(); a.length && c.length;) {
            var e = c.shift();
            e in d || (d[e] = (0, window.parseInt)(a.shift(), 10))
        }
        if (a.length || 59 < d.s || 59 < d.m || 9 < d.h) return null;
        var g = "";
        (0, m.A)(b, function(a) {
            d[a] && (g += d[a] + a)
        });
        return g || null
    };
    var aA = function(a, b) {
        var c = nf() + "/share_ajax",
            d = {
                action_get_share_box: 1,
                video_id: a.j,
                list: a.P,
                feature: a.va,
                share_at: !a.pa,
                caption_text: a.aa
            };
        a.J && (d.new_share = 1);
        a.Y = (0, m.U)(c, {
            format: "JSON",
            ca: d,
            onSuccess: function(a, c) {
                this.Z.innerHTML = c.share_html;
                this.uu = c.url_short;
                this.lH = c.lang;
                this.Jp = null;
                "session_index" in c && (this.Jp = c.session_index);
                this.Iv = null;
                "delegated_session_id" in c && (this.Iv = c.delegated_session_id);
                this.Dc();
                b && b();
                this.oh()
            },
            N: a
        })
    };
    var cA = function(a, b) {
        a.o && b != a.o && m.T.hide(a.o);
        a.A && b != a.A && m.T.hide(a.A);
        a.k && b != a.k && m.T.hide(a.k);
        a.C && b != a.C && m.T.hide(a.C)
    };
    var dA = function(a) {
        (0, m.D)("share-with-playlist").checked = !0;
        eA(a)
    };
    var eA = function(a) {
        if (a.g) {
            var b = (0, m.D)("share-with-playlist").checked;
            a.B.disabled = b;
            a.g.disabled = b;
            a.J && a.qa && m.T.xb(a.qa, !b)
        }
    };
    var fA = function(a, b, c) {
        var d = {
            action_get_share_urls: 1,
            video_id: a.j,
            caption_text: a.aa
        };
        b && (d.list = a.P);
        c && (d.use_first_video = !0);
        (0, m.U)("share_ajax", {
            format: "JSON",
            ca: d,
            onSuccess: function(a, b) {
                this.uu = b.url_short;
                this.ji();
                (0, m.D)("share-services-container").innerHTML = b.share_services_html
            },
            N: a
        })
    };
    m.t.prototype.ma = (0, m.Xb)(13, function() {
        return this.Wd
    });
    m.qa.prototype.oa = (0, m.Xb)(3, function(a, b, c) {
        if (a = this.Mc[a]) {
            var d = this.b;
            if (a = (0, m.Wb)(a, function(a) {
                    return d[a + 1] == b && d[a + 2] == c
                })) return this.ge(a)
        }
        return !1
    });
    m.qa.prototype.Za = (0, m.Xb)(2, function(a) {
        if (a) {
            var b = this.Mc[a];
            return b ? b.length : 0
        }
        a = 0;
        for (b in this.Mc) a += this.Za(b);
        return a
    });
    var dc = /&([^;\s<&]+);?/g,
        fc = {},
        rc = /[&<>"']/,
        wc = /'/g,
        vc = /"/g,
        uc = />/g,
        tc = /</g,
        sc = /&/g,
        Bc = 0,
        Jc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        de;
    (0, m.s)(sd, Error);
    sd.prototype.name = "CustomError";
    m.f = m.Nd.prototype;
    m.f.clone = function() {
        return new m.Nd(this.x, this.y)
    };
    m.f.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    m.f.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    m.f.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    m.f.scale = function(a, b) {
        var c = (0, m.td)(b) ? b : a;
        this.x *= a;
        this.y *= c;
        return this
    };
    m.f = m.Qd.prototype;
    m.f.clone = function() {
        return new m.Qd(this.width, this.height)
    };
    m.f.isEmpty = function() {
        return !(this.width * this.height)
    };
    m.f.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    m.f.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    m.f.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    m.f.scale = function(a, b) {
        var c = (0, m.td)(b) ? b : a;
        this.width *= a;
        this.height *= c;
        return this
    };
    var qA;
    var pA;
    var kA;
    var jA;
    var iA;
    var hA;
    var gA;
    kA = jA = iA = hA = gA = !1;
    var mA;
    if (mA = (0, m.Sd)()) {
        var nA = Td();
        gA = 0 == mA.lastIndexOf("Opera", 0);
        hA = !gA && (-1 != mA.indexOf("MSIE") || -1 != mA.indexOf("Trident"));
        jA = (iA = !gA && -1 != mA.indexOf("WebKit")) && -1 != mA.indexOf("Mobile");
        kA = !gA && !iA && !hA && "Gecko" == nA.product
    }
    m.sg = gA;
    m.Zd = hA;
    m.rg = kA;
    m.ne = iA;
    m.oA = jA;
    pA = Td();
    qA = pA && pA.platform || "";
    m.Hg = -1 != qA.indexOf("Mac");
    m.Dh = -1 != qA.indexOf("Win");
    m.lA = -1 != qA.indexOf("Linux");
    var Ig = !!Td() && -1 != (Td().appVersion || "").indexOf("X11"),
        rA;
    t: {
        var sA = "",
            tA;
        if (m.sg && m.ca.opera) var uA = m.ca.opera.version,
            sA = "function" == typeof uA ? uA() : uA;
        else if (m.rg ? tA = /rv\:([^\);]+)(\)|;)/ : m.Zd ? tA = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : m.ne && (tA = /WebKit\/(\S+)/), tA) var vA = tA.exec((0, m.Sd)()),
            sA = vA ? vA[1] : "";
        if (m.Zd) {
            var wA = Ud();
            if (wA > (0, window.parseFloat)(sA)) {
                rA = String(wA);
                break t
            }
        }
        rA = sA
    }
    var Xd = rA,
        Wd = {},
        xA = m.ca.document,
        $d = xA && m.Zd ? Ud() || ("CSS1Compat" == xA.compatMode ? (0, window.parseInt)(Xd, 10) : 5) : void 0;
    var re = !m.Zd || (0, m.Yd)(9),
        Ge = !m.rg && !m.Zd || m.Zd && (0, m.Yd)(9) || m.rg && (0, m.Vd)("1.9.1"),
        We = m.Zd && !(0, m.Vd)("9"),
        Qe = m.Zd || m.sg || m.ne;
    var he = {
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
        },
        Ye = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        Ze = {
            IMG: " ",
            BR: "\n"
        };
    m.f = m.be.prototype;
    m.f.H = function(a) {
        return (0, m.q)(a) ? this.b.getElementById(a) : a
    };
    m.f.ee = (0, m.aa)(11);
    m.f.$ = function(a, b) {
        return (0, m.O)(a, b || this.b)
    };
    m.f.nc = function(a, b, c) {
        return qe(this.b, arguments)
    };
    m.f.createElement = function(a) {
        return this.b.createElement(a)
    };
    m.f.appendChild = m.xe;
    m.f.append = m.ye;
    m.f.Ql = m.De;
    m.f.getChildren = m.Fe;
    m.f.contains = m.Re;
    m.f.pG = m.Q;
    var ff = {};
    var lf = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),
        jf = m.ne;
    m.Ef = m.kf;
    var Kf = (0, m.n)("yt.dom.getNextId_");
    if (!Kf) {
        Kf = function() {
            return ++yA
        };
        (0, m.l)("yt.dom.getNextId_", Kf, void 0);
        var yA = 0
    };
    m.f = m.Xf.prototype;
    m.f.Wa = null;
    m.f.type = "";
    m.f.target = null;
    m.f.relatedTarget = null;
    m.f.currentTarget = null;
    m.f.data = null;
    m.f.source = null;
    m.f.state = null;
    m.f.keyCode = 0;
    m.f.charCode = 0;
    m.f.altKey = !1;
    m.f.ctrlKey = !1;
    m.f.shiftKey = !1;
    m.f.clientX = 0;
    m.f.clientY = 0;
    m.f.wheelDeltaX = 0;
    m.f.wheelDeltaY = 0;
    m.f.rotation = 0;
    m.f.scale = 1;
    m.f.touches = null;
    m.f.changedTouches = null;
    m.f.preventDefault = function() {
        this.Wa.returnValue = !1;
        this.Wa.preventDefault && this.Wa.preventDefault()
    };
    m.f.stopPropagation = function() {
        this.Wa.cancelBubble = !0;
        this.Wa.stopPropagation && this.Wa.stopPropagation()
    };
    m.f.stopImmediatePropagation = (0, m.aa)(1);
    var Yf = {
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
    var cg = (0, m.n)("yt.events.listeners_") || {};
    (0, m.l)("yt.events.listeners_", cg, void 0);
    var dg = (0, m.n)("yt.events.counter_") || {
        count: 0
    };
    (0, m.l)("yt.events.counter_", dg, void 0);
    var ng = {
            enablejsapi: 1
        },
        og = {},
        pg = {
            allowscriptaccess: "always",
            allowfullscreen: "true",
            bgcolor: "#000000"
        };
    m.mg.prototype.clone = function() {
        var a = new m.mg,
            b;
        for (b in this) {
            var c = this[b];
            "object" == (0, m.ea)(c) ? a[b] = (0, m.Lc)(c): a[b] = c
        }
        return a
    };
    m.f = m.ug.prototype;
    m.f.clone = function() {
        return new m.ug(this.top, this.right, this.bottom, this.left)
    };
    m.f.contains = function(a) {
        return wg(this, a)
    };
    m.f.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    m.f.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    m.f.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    m.f.scale = function(a, b) {
        var c = (0, m.td)(b) ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= c;
        this.bottom *= c;
        return this
    };
    m.f = m.yg.prototype;
    m.f.clone = function() {
        return new m.yg(this.left, this.top, this.width, this.height)
    };
    m.f.contains = function(a) {
        return a instanceof m.yg ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
    };
    m.f.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    m.f.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    m.f.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    m.f.scale = function(a, b) {
        var c = (0, m.td)(b) ? b : a;
        this.left *= a;
        this.width *= a;
        this.top *= c;
        this.height *= c;
        return this
    };
    var ih = {
            thin: 2,
            medium: 4,
            thick: 6
        },
        Rg = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
    var lh = /\s*;\s*/;
    m.f = m.jh.prototype;
    m.f.isEnabled = (0, m.aa)(7);
    m.f.set = function(a, b, c, d, e, g) {
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        (0, m.Ec)(c) || (c = -1);
        e = e ? ";domain=" + e : "";
        d = d ? ";path=" + d : "";
        g = g ? ";secure" : "";
        c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date((0, m.C)() + 1E3 * c)).toUTCString();
        this.b.cookie = a + "=" + b + e + d + c + g
    };
    m.f.get = function(a, b) {
        for (var c = a + "=", d = (this.b.cookie || "").split(lh), e = 0, g; g = d[e]; e++) {
            if (0 == g.lastIndexOf(c, 0)) return g.substr(c.length);
            if (g == a) return ""
        }
        return b
    };
    m.f.remove = function(a, b, c) {
        var d = (0, m.Ec)(this.get(a));
        this.set(a, "", 0, b, c);
        return d
    };
    m.f.Yc = function() {
        return kh(this).keys
    };
    m.f.Ib = function() {
        return kh(this).ev
    };
    m.f.isEmpty = function() {
        return !this.b.cookie
    };
    m.f.Za = function() {
        return this.b.cookie ? (this.b.cookie || "").split(lh).length : 0
    };
    m.f.Ej = function(a) {
        for (var b = kh(this).ev, c = 0; c < b.length; c++)
            if (b[c] == a) return !0;
        return !1
    };
    m.f.clear = function() {
        for (var a = kh(this).keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b])
    };
    m.nh = new m.jh(window.document);
    m.nh.g = 3950;
    (0, m.ud)(m.qh);
    var rh = (0, m.n)("yt.prefs.UserPrefs.prefs_") || {};
    (0, m.l)("yt.prefs.UserPrefs.prefs_", rh, void 0);
    m.f = m.qh.prototype;
    m.f.get = function(a, b) {
        th(a);
        sh(a);
        var c = void 0 !== rh[a] ? rh[a].toString() : null;
        return null != c ? c : b ? b : ""
    };
    m.f.set = function(a, b) {
        th(a);
        sh(a);
        if (null == b) throw "ExpectedNotNull";
        rh[a] = b.toString()
    };
    m.f.remove = function(a) {
        th(a);
        sh(a);
        delete rh[a]
    };
    m.f.save = function() {
        var a;
        a = [];
        for (var b in rh) a.push(b + "=" + (0, window.escape)(rh[b]));
        a = a.join("&");
        (0, m.mh)("PREF", a, 63072E3)
    };
    m.f.clear = function() {
        rh = {}
    };
    var yh;
    m.T = {
        xb: function(a, b) {
            (a = (0, m.D)(a)) && a.style && ((0, m.ah)(a, b), (0, m.zd)(a, "hid", !b))
        },
        Ra: function(a) {
            return (a = (0, m.D)(a)) ? !("none" == a.style.display || (0, m.wd)(a, "hid")) : !1
        },
        mj: function(a) {
            if (a = (0, m.D)(a)) m.T.Ra(a) ? ((0, m.ah)(a, !1), (0, m.I)(a, "hid")) : ((0, m.ah)(a, !0), (0, m.J)(a, "hid"))
        },
        setVisible: function(a, b) {
            if (a = (0, m.D)(a)) a.style.visibility = b ? "visible" : "hidden"
        },
        xj: function(a) {
            a = (0, m.D)(a);
            if (!a) return null;
            var b = 0,
                c = 0;
            if (a.offsetParent) {
                do b += a.offsetLeft, c += a.offsetTop; while (a = a.offsetParent)
            }
            return new m.Nd(b,
                c)
        },
        show: function(a) {
            (0, m.A)(arguments, function(a) {
                m.T.xb(a, !0)
            })
        },
        hide: function(a) {
            (0, m.A)(arguments, function(a) {
                m.T.xb(a, !1)
            })
        },
        toggle: function(a) {
            (0, m.A)(arguments, m.T.mj)
        },
        OI: function() {
            return "rtl" == window.document.body.getAttribute("dir")
        },
        tq: {},
        Am: function(a) {
            if (a in m.T.tq) return m.T.tq[a];
            var b;
            if ((b = window.document.body.style) && a in b) b = a;
            else {
                var c = qg();
                c ? (c = c.toLowerCase(), c += jd(a), b = !(0, m.Ec)(b) || c in b ? c : null) : b = null
            }
            return m.T.tq[a] = b
        },
        HF: function(a) {
            return null != m.T.Am(a)
        },
        setProperty: function(a,
            b, c) {
            (a = (0, m.D)(a)) && a.style && (b = m.T.Am(b)) && (a.style[b] = c)
        },
        PJ: function(a) {
            if (!(0, m.xh)()) return null;
            var b = m.T.Am("transitionProperty"),
                b = (0, m.Dg)(a, b),
                c = m.T.Am("transitionDuration");
            a = (0, m.Dg)(a, c);
            if (!b || !a) return null;
            var d = {},
                e = b.split(",");
            (0, m.A)(a.split(","), function(a, b) {
                var c = e[b].trim();
                if (c) {
                    var p;
                    p = -1 < a.indexOf("ms") ? (0, window.parseInt)(a, 10) : Math.round(1E3 * (0, window.parseFloat)(a));
                    d[c] = p
                }
            });
            return d
        }
    };
    (0, m.ud)(zh);
    zh.prototype.getVersion = function() {
        return [this.b, this.g, this.i]
    };
    var Mh = /cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;
    var HA;
    var st;
    var zA, AA, BA, CA, DA, EA, FA;
    FA = EA = DA = CA = BA = AA = zA = !1;
    var GA = (0, m.Sd)();
    GA && (-1 != GA.indexOf("Firefox") ? zA = !0 : -1 != GA.indexOf("Camino") ? AA = !0 : -1 != GA.indexOf("iPhone") || -1 != GA.indexOf("iPod") ? BA = !0 : -1 != GA.indexOf("iPad") ? CA = !0 : -1 != GA.indexOf("Chrome") ? EA = !0 : -1 != GA.indexOf("Android") ? DA = !0 : -1 != GA.indexOf("Safari") && (FA = !0));
    st = zA;
    HA = AA;
    m.IA = BA;
    m.JA = CA;
    m.KA = DA;
    m.ut = EA;
    m.tt = FA;
    var LA = (0, m.Sd)(),
        LA = LA.toLowerCase();
    if (-1 != LA.indexOf("android")) {
        var MA = LA.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);
        if (MA) m.Ph = Number(MA[1]);
        else {
            var NA = {
                    cupcake: 1.5,
                    donut: 1.6,
                    eclair: 2,
                    froyo: 2.2,
                    gingerbread: 2.3,
                    honeycomb: 3,
                    "ice cream sandwich": 4,
                    jellybean: 4.1
                },
                OA = LA.match("(" + (0, m.Pc)(NA).join("|") + ")");
            m.Ph = OA ? NA[OA[0]] : 0
        }
    } else m.Ph = void 0;
    var Sh = "StopIteration" in m.ca ? m.ca.StopIteration : Error("StopIteration");
    Qh.prototype.next = function() {
        throw Sh;
    };
    Qh.prototype.uc = function() {
        return this
    };
    m.f = m.Vh.prototype;
    m.f.Za = function() {
        return this.ka
    };
    m.f.Ib = function() {
        Yh(this);
        for (var a = [], b = 0; b < this.b.length; b++) a.push(this.g[this.b[b]]);
        return a
    };
    m.f.Yc = function() {
        Yh(this);
        return this.b.concat()
    };
    m.f.Ej = function(a) {
        for (var b = 0; b < this.b.length; b++) {
            var c = this.b[b];
            if (Zh(this.g, c) && this.g[c] == a) return !0
        }
        return !1
    };
    m.f.equals = function(a, b) {
        if (this === a) return !0;
        if (this.ka != a.Za()) return !1;
        var c = b || Xh;
        Yh(this);
        for (var d, e = 0; d = this.b[e]; e++)
            if (!c(this.get(d), a.get(d))) return !1;
        return !0
    };
    m.f.isEmpty = function() {
        return 0 == this.ka
    };
    m.f.clear = function() {
        this.g = {};
        this.i = this.ka = this.b.length = 0
    };
    m.f.remove = function(a) {
        return Zh(this.g, a) ? (delete this.g[a], this.ka--, this.i++, this.b.length > 2 * this.ka && Yh(this), !0) : !1
    };
    m.f.get = function(a, b) {
        return Zh(this.g, a) ? this.g[a] : b
    };
    m.f.set = function(a, b) {
        Zh(this.g, a) || (this.ka++, this.b.push(a), this.i++);
        this.g[a] = b
    };
    m.f.clone = function() {
        return new m.Vh(this)
    };
    m.f.uc = function(a) {
        Yh(this);
        var b = 0,
            c = this.b,
            d = this.g,
            e = this.i,
            g = this,
            h = new Qh;
        h.next = function() {
            for (;;) {
                if (e != g.i) throw Error("The map has changed since the iterator was created");
                if (b >= c.length) throw Sh;
                var h = c[b++];
                return a ? h : d[h]
            }
        };
        return h
    };
    m.f = m.fi.prototype;
    m.f.Ch = "";
    m.f.Tl = "";
    m.f.Me = "";
    m.f.oj = null;
    m.f.Fp = "";
    m.f.Ep = "";
    m.f.Fg = !1;
    m.f.toString = function() {
        var a = [],
            b = this.Ch;
        b && a.push(oi(b, PA), ":");
        if (b = this.Me) {
            a.push("//");
            var c = this.Tl;
            c && a.push(oi(c, PA), "@");
            a.push((0, m.pd)(b));
            b = this.oj;
            null != b && a.push(":", String(b))
        }
        if (b = this.Fp) this.Me && "/" != b.charAt(0) && a.push("/"), a.push(oi(b, "/" == b.charAt(0) ? QA : RA));
        (b = this.b.toString()) && a.push("?", b);
        (b = this.Ep) && a.push("#", oi(b, SA));
        return a.join("")
    };
    m.f.clone = function() {
        return new m.fi(this)
    };
    var PA = /[#\/\?@]/g,
        RA = /[\#\?:]/g,
        QA = /[\#\?]/g,
        pi = /[\#\?@]/g,
        SA = /#/g;
    m.f = m.mi.prototype;
    m.f.kb = null;
    m.f.ka = null;
    m.f.Za = function() {
        wi(this);
        return this.ka
    };
    m.f.add = function(a, b) {
        wi(this);
        this.b = null;
        a = xi(this, a);
        var c = this.kb.get(a);
        c || this.kb.set(a, c = []);
        c.push(b);
        this.ka++;
        return this
    };
    m.f.remove = function(a) {
        wi(this);
        a = xi(this, a);
        return Zh(this.kb.g, a) ? (this.b = null, this.ka -= this.kb.get(a).length, this.kb.remove(a)) : !1
    };
    m.f.clear = function() {
        this.kb = this.b = null;
        this.ka = 0
    };
    m.f.isEmpty = function() {
        wi(this);
        return 0 == this.ka
    };
    m.f.Ej = function(a) {
        var b = this.Ib();
        return (0, m.lc)(b, a)
    };
    m.f.Yc = function() {
        wi(this);
        for (var a = this.kb.Ib(), b = this.kb.Yc(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], g = 0; g < e.length; g++) c.push(b[d]);
        return c
    };
    m.f.Ib = function(a) {
        wi(this);
        var b = [];
        if ((0, m.q)(a)) yi(this, a) && (b = (0, m.fd)(b, this.kb.get(xi(this, a))));
        else {
            a = this.kb.Ib();
            for (var c = 0; c < a.length; c++) b = (0, m.fd)(b, a[c])
        }
        return b
    };
    m.f.set = function(a, b) {
        wi(this);
        this.b = null;
        a = xi(this, a);
        yi(this, a) && (this.ka -= this.kb.get(a).length);
        this.kb.set(a, [b]);
        this.ka++;
        return this
    };
    m.f.get = function(a, b) {
        var c = a ? this.Ib(a) : [];
        return 0 < c.length ? String(c[0]) : b
    };
    m.f.toString = function() {
        if (this.b) return this.b;
        if (!this.kb) return "";
        for (var a = [], b = this.kb.Yc(), c = 0; c < b.length; c++)
            for (var d = b[c], e = (0, m.pd)(d), d = this.Ib(d), g = 0; g < d.length; g++) {
                var h = e;
                "" !== d[g] && (h += "=" + (0, m.pd)(d[g]));
                a.push(h)
            }
        return this.b = a.join("&")
    };
    m.f.clone = function() {
        var a = new m.mi;
        a.b = this.b;
        this.kb && (a.kb = this.kb.clone(), a.ka = this.ka);
        return a
    };
    (0, m.n)("yt.player.exports.navigate") || (0, m.l)("yt.player.exports.navigate", Di, void 0);
    (0, m.s)(Ii, Hi);
    Ii.prototype.Za = function() {
        var a = 0;
        Th(this.uc(!0), function() {
            a++
        });
        return a
    };
    Ii.prototype.clear = function() {
        var a = Uh(this.uc(!0)),
            b = this;
        (0, m.A)(a, function(a) {
            b.remove(a)
        })
    };
    (0, m.s)(Ji, Ii);
    m.f = Ji.prototype;
    m.f.isAvailable = function() {
        if (!this.b) return !1;
        try {
            return this.b.setItem("__sak", "1"), this.b.removeItem("__sak"), !0
        } catch (a) {
            return !1
        }
    };
    m.f.set = function(a, b) {
        try {
            this.b.setItem(a, b)
        } catch (c) {
            if (0 == this.b.length) throw "Storage mechanism: Storage disabled";
            throw "Storage mechanism: Quota exceeded";
        }
    };
    m.f.get = function(a) {
        a = this.b.getItem(a);
        if (!(0, m.q)(a) && null !== a) throw "Storage mechanism: Invalid value was encountered";
        return a
    };
    m.f.remove = function(a) {
        this.b.removeItem(a)
    };
    m.f.Za = function() {
        return this.b.length
    };
    m.f.uc = function(a) {
        var b = 0,
            c = this.b,
            d = new Qh;
        d.next = function() {
            if (b >= c.length) throw Sh;
            var d;
            d = c.key(b++);
            if (a) return d;
            d = c.getItem(d);
            if (!(0, m.q)(d)) throw "Storage mechanism: Invalid value was encountered";
            return d
        };
        return d
    };
    m.f.clear = function() {
        this.b.clear()
    };
    m.f.key = function(a) {
        return this.b.key(a)
    };
    (0, m.s)(Ki, Ji);
    (0, m.s)(Li, Ji);
    var Ui = {
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
        Ti = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
    m.Vi.prototype.set = function(a, b) {
        (0, m.Ec)(b) ? this.b.set(a, (0, m.Pi)(this.j, b)): this.b.remove(a)
    };
    m.Vi.prototype.get = function(a) {
        var b;
        try {
            b = this.b.get(a)
        } catch (c) {
            return
        }
        if (null !== b) try {
            return (0, m.Mi)(b)
        } catch (d) {
            throw "Storage: Invalid value was encountered";
        }
    };
    m.Vi.prototype.remove = function(a) {
        this.b.remove(a)
    };
    (0, m.s)(Wi, m.Vi);
    Wi.prototype.set = function(a, b) {
        Wi.D.set.call(this, a, Yi(b))
    };
    Wi.prototype.Bh = function(a) {
        a = Wi.D.get.call(this, a);
        if (!(0, m.Ec)(a) || a instanceof Object) return a;
        throw "Storage: Invalid value was encountered";
    };
    Wi.prototype.get = function(a) {
        return (a = this.Bh(a)) ? Zi(a) : void 0
    };
    (0, m.s)($i, Wi);
    $i.prototype.set = function(a, b, c) {
        if (b = Yi(b)) {
            if (c) {
                if (c < (0, m.C)()) {
                    $i.prototype.remove.call(this, a);
                    return
                }
                b.expiration = c
            }
            b.creation = (0, m.C)()
        }
        $i.D.set.call(this, a, b)
    };
    $i.prototype.Bh = function(a, b) {
        var c = $i.D.Bh.call(this, a);
        if (c)
            if (!b && aj(c)) $i.prototype.remove.call(this, a);
            else return c
    };
    (0, m.s)(bj, $i);
    bj.prototype.g = function(a) {
        dj(this, this.b.uc(!0), a)
    };
    var UA;
    var TA;
    TA = new Ki;
    m.fj = TA.isAvailable() ? new bj(TA) : null;
    UA = new Li;
    m.gj = UA.isAvailable() ? new bj(UA) : null;
    (0, m.s)(kj, m.t);
    m.f = kj.prototype;
    m.f.getId = function() {
        return this.C
    };
    m.f.mp = function(a, b) {
        this.ma() || (mj(this, a), rj(this, b), this.o && pj(this))
    };
    m.f.gF = function() {
        return this.R
    };
    m.f.bG = function() {
        if (!this.Q) {
            var a = this.b.clone();
            "html5" == uj(this) ? (this.k = "html5", this.o || this.Xg(!0)) : (vj(this), this.k = "html5", this.P ? (this.$e.appendChild(this.P), this.Xg()) : (this.b.loaded = !0, this.F = (0, m.r)(function() {
                new(nj())(this.$e, a);
                this.Xg()
            }, this), this.Q = !0, nj() ? this.F() : ((0, m.Ra)(this.b.assets.js, this.F), (0, m.Lh)(this.b.assets.css))))
        }
    };
    m.f.aG = function() {
        var a = this.b.clone();
        a.attrs.width = a.attrs.width || "100%";
        a.attrs.height = a.attrs.height || "100%";
        "flash" == uj(this) ? (this.k = "flash", this.o || Jh(a, !1, (0, m.r)(this.Xg, this))) : (vj(this), this.k = "flash", this.b.loaded = !0, (0, m.Fh)(this.$e, a), this.Xg())
    };
    m.f.Xg = function(a) {
        var b = (0, m.D)(this.i),
            c = !1;
        try {
            b && b.getApiInterface && (c = !0)
        } catch (d) {}
        if (c)
            if (this.Q = !1, a && b.isNotServable && b.isNotServable()) qj(this);
            else {
                lj(this);
                this.o = !0;
                a = (0, m.D)(this.i);
                a.addEventListener && (this.A = sj(a, "addEventListener"));
                a.removeEventListener && (this.J = sj(a, "removeEventListener"));
                b = a.getApiInterface();
                b = b.concat(a.getInternalApiInterface());
                for (c = 0; c < b.length; c++) {
                    var e = b[c];
                    this.g[e] || (this.g[e] = sj(a, e))
                }
                for (var g in this.j) this.A(g, this.j[g]);
                pj(this);
                this.O && this.O(this.g);
                this.B.K("onReady", this.g)
            }
        else this.W = (0, m.w)((0, m.r)(this.Xg, this), 50)
    };
    m.f.iF = function() {
        return this.o
    };
    m.f.di = function(a, b) {
        if (!this.ma()) {
            var c = oj(this, b);
            if (c) {
                if (!(0, m.lc)(this.Y, a) && !this.j[a]) {
                    var d = tj(this, a);
                    this.A && this.A(a, d)
                }
                this.B.M(a, c);
                "onReady" == a && this.o && (0, m.w)((0, m.E)(c, this.g), 0)
            }
        }
    };
    m.f.jF = function(a, b) {
        if (!this.ma()) {
            var c = oj(this, b);
            c && this.B.oa(a, c)
        }
    };
    m.f.Bx = function(a) {
        a = a ? Ne : Me;
        for (var b = a(window.document.activeElement); b && (1 != b.nodeType || (b.focus(), b != window.document.activeElement));) b = a(b)
    };
    m.f.Cx = function(a) {
        var b = a.url;
        a = a.sessiondata;
        var c = (0, m.v)("EVENT_ID");
        c && (a || (a = {}), a.ei || (a.ei = c));
        Ai(b, a)
    };
    m.f.Ex = function(a) {
        (0, m.ij)(a)
    };
    m.f.Fx = function(a) {
        5 == a && qj(this)
    };
    m.f.cG = function() {
        vj(this);
        this.k = "unsupported";
        var a = (0, m.Yc)("PLAYER_FALLBACK", void 0, 'The Adobe Flash Player or an HTML5 supported browser is required for video playback. <br> <a href="http://get.adobe.com/flashplayer/">Get the latest Flash Player</a> <br> <a href="/html5">Learn more about upgrading to an HTML5 browser</a>'),
            b = window.navigator.userAgent.match(/Version\/(\d).*Safari/);
        b && 5 <= (0, window.parseInt)(b[1], 10) && (a = (0, m.Yc)("QUICKTIME_FALLBACK", void 0, 'The Adobe Flash Player or QuickTime is required for video playback. <br> <a href="http://get.adobe.com/flashplayer/">Get the latest Flash Player</a> <br> <a href="http://www.apple.com/quicktime/download/">Get the latest version of QuickTime</a>'));
        (0, m.D)("unavailable-submessage") && (0, m.D)("player-unavailable") && ((0, m.D)("unavailable-submessage").innerHTML = a, (0, m.J)((0, m.D)("player-unavailable"), "hid"), (0, m.I)((0, m.D)("player"), "off-screen-trigger"))
    };
    m.f.hF = function() {
        return this.k || uj(this)
    };
    m.f.cancel = function() {
        window.spf.scripts.ignore(this.b.assets.js, this.F);
        (0, m.x)(this.W)
    };
    m.f.G = function() {
        vj(this);
        this.L = null;
        for (var a in this.j) m.ca[this.j[a]] = null;
        this.g = null;
        this.b && (this.R = this.b = this.b.fallback = null);
        kj.D.G.call(this)
    };
    var xj;
    xj = {};
    m.iy = (0, m.n)("yt.player.embed") || wj;
    (0, m.l)("yt.player.embed", m.iy, void 0);
    m.VA = (0, m.n)("yt.player.destroy") || Aj;
    (0, m.l)("yt.player.destroy", m.VA, void 0);
    var WA = (0, m.n)("yt.player.cancelAll") || zj;
    (0, m.l)("yt.player.cancelAll", WA, void 0);
    var XA = (0, m.n)("yt.player.getPlayerByElement") || Bj;
    (0, m.l)("yt.player.getPlayerByElement", XA, void 0);
    var Lj = null;
    "undefined" != typeof window.XMLHttpRequest ? Lj = function() {
        return new window.XMLHttpRequest
    } : "undefined" != typeof window.ActiveXObject && (Lj = function() {
        return new window.ActiveXObject("Microsoft.XMLHTTP")
    });
    var Uj = {
            html5_ajax: "action_get_html5_token",
            watch_actions_ajax: "action_get_watch_actions_token",
            addto_ajax: "action_get_wl_token"
        },
        Vj = {
            html5_ajax: "html5_ajax_token",
            watch_actions_ajax: "watch_actions_ajax_token",
            addto_ajax: "addto_ajax_token"
        };
    var Ju;
    Ju = {
        qC: ["BC", "AD"],
        pC: ["Before Christ", "Anno Domini"],
        rC: "JFMAMJJASOND".split(""),
        uC: "JFMAMJJASOND".split(""),
        gt: "January February March April May June July August September October November December".split(" "),
        kt: "January February March April May June July August September October November December".split(" "),
        ht: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        nt: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        ut: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        tt: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        jt: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        qt: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        b: "SMTWTFS".split(""),
        vC: "SMTWTFS".split(""),
        tC: ["Q1", "Q2", "Q3", "Q4"],
        sC: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
        ft: ["AM", "PM"],
        $u: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
        av: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
        nG: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
        wt: 6,
        g: [5, 6],
        xt: 5
    };
    var Ak = /^(\d{4})(?:(?:-?(\d{2})(?:-?(\d{2}))?)|(?:-?(\d{3}))|(?:-?W(\d{2})(?:-?([1-7]))?))?$/,
        Ck = /^(\d{2})(?::?(\d{2})(?::?(\d{2})(\.\d+)?)?)?$/,
        Bk = /Z|(?:([-+])(\d{2})(?::?(\d{2}))?)$/;
    bk.prototype.equals = function(a) {
        return a.o == this.o && a.j == this.j && a.b == this.b && a.g == this.g && a.i == this.i && a.k == this.k
    };
    bk.prototype.clone = function() {
        return new bk(this.o, this.j, this.b, this.g, this.i, this.k)
    };
    bk.prototype.add = function(a) {
        this.o += a.o;
        this.j += a.j;
        this.b += a.b;
        this.g += a.g;
        this.i += a.i;
        this.k += a.k
    };
    m.f = ck.prototype;
    m.f.Ul = Ju.wt;
    m.f.Vl = Ju.xt;
    m.f.clone = function() {
        var a = new ck(this.b);
        a.Ul = this.Ul;
        a.Vl = this.Vl;
        return a
    };
    m.f.getFullYear = function() {
        return this.b.getFullYear()
    };
    m.f.getMonth = function() {
        return this.b.getMonth()
    };
    m.f.getDate = function() {
        return this.b.getDate()
    };
    m.f.getTime = function() {
        return this.b.getTime()
    };
    m.f.getDay = function() {
        return this.b.getDay()
    };
    m.f.getUTCFullYear = function() {
        return this.b.getUTCFullYear()
    };
    m.f.getUTCMonth = function() {
        return this.b.getUTCMonth()
    };
    m.f.getUTCDate = function() {
        return this.b.getUTCDate()
    };
    m.f.getUTCHours = function() {
        return this.b.getUTCHours()
    };
    m.f.getUTCMinutes = function() {
        return this.b.getUTCMinutes()
    };
    m.f.getTimezoneOffset = function() {
        return this.b.getTimezoneOffset()
    };
    m.f.set = function(a) {
        this.b = new Date(a.getFullYear(), a.getMonth(), a.getDate())
    };
    m.f.add = function(a) {
        if (a.o || a.j) {
            var b = this.getMonth() + a.j + 12 * a.o,
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
            this.b.setMonth(a.getMonth()), this.b.setDate(a.getDate()), ek(this, a.getDate()))
    };
    m.f.Bm = function(a, b) {
        return [this.getFullYear(), (0, m.nd)(this.getMonth() + 1, 2), (0, m.nd)(this.getDate(), 2)].join(a ? "-" : "") + (b ? fk(this) : "")
    };
    m.f.equals = function(a) {
        return !(!a || this.getFullYear() != a.getFullYear() || this.getMonth() != a.getMonth() || this.getDate() != a.getDate())
    };
    m.f.toString = function() {
        return this.Bm()
    };
    m.f.valueOf = function() {
        return this.b.valueOf()
    };
    (0, m.s)(gk, ck);
    m.f = gk.prototype;
    m.f.getHours = function() {
        return this.b.getHours()
    };
    m.f.getMinutes = function() {
        return this.b.getMinutes()
    };
    m.f.getSeconds = function() {
        return this.b.getSeconds()
    };
    m.f.getUTCHours = function() {
        return this.b.getUTCHours()
    };
    m.f.getUTCMinutes = function() {
        return this.b.getUTCMinutes()
    };
    m.f.add = function(a) {
        ck.prototype.add.call(this, a);
        a.g && this.b.setHours(this.b.getHours() + a.g);
        a.i && this.b.setMinutes(this.b.getMinutes() + a.i);
        a.k && this.b.setSeconds(this.b.getSeconds() + a.k)
    };
    m.f.Bm = function(a, b) {
        var c = ck.prototype.Bm.call(this, a);
        return a ? c + " " + (0, m.nd)(this.getHours(), 2) + ":" + (0, m.nd)(this.getMinutes(), 2) + ":" + (0, m.nd)(this.getSeconds(), 2) + (b ? fk(this) : "") : c + "T" + (0, m.nd)(this.getHours(), 2) + (0, m.nd)(this.getMinutes(), 2) + (0, m.nd)(this.getSeconds(), 2) + (b ? fk(this) : "")
    };
    m.f.equals = function(a) {
        return this.getTime() == a.getTime()
    };
    m.f.toString = function() {
        return this.Bm()
    };
    m.f.clone = function() {
        var a = new gk(this.b);
        a.Ul = this.Ul;
        a.Vl = this.Vl;
        return a
    };
    (0, m.s)(hk, bj);
    hk.prototype.g = function(a) {
        var b = jk(this, !0);
        a = dj(this, b, a);
        b = lk(b, a);
        kk(this, b)
    };
    hk.prototype.set = function(a, b, c) {
        hk.D.set.call(this, a, b, c);
        c = jk(this, !0);
        (0, m.ka)(c, a);
        (0, m.Ec)(b) && (c.push(a), c.length >= this.i && (a = dj(this, c), c = lk(c, a), c = mk(this, c, this.i)));
        kk(this, c)
    };
    hk.prototype.remove = function(a) {
        hk.D.remove.call(this, a);
        var b = jk(this, !1);
        (0, m.Ec)(b) && ((0, m.ka)(b, a), kk(this, b))
    };
    (0, m.s)(nk, Ii);
    var qk = {
            ".": ".2E",
            "!": ".21",
            "~": ".7E",
            "*": ".2A",
            "'": ".27",
            "(": ".28",
            ")": ".29",
            "%": "."
        },
        ok = null;
    m.f = nk.prototype;
    m.f.fc = null;
    m.f.pq = null;
    m.f.isAvailable = function() {
        return !!this.fc
    };
    m.f.set = function(a, b) {
        this.fc.setAttribute(pk(a), b);
        rk(this)
    };
    m.f.get = function(a) {
        a = this.fc.getAttribute(pk(a));
        if (!(0, m.q)(a) && null !== a) throw "Storage mechanism: Invalid value was encountered";
        return a
    };
    m.f.remove = function(a) {
        this.fc.removeAttribute(pk(a));
        rk(this)
    };
    m.f.Za = function() {
        return sk(this).attributes.length
    };
    m.f.uc = function(a) {
        var b = 0,
            c = sk(this).attributes,
            d = new Qh;
        d.next = function() {
            if (b >= c.length) throw Sh;
            var d;
            d = c[b++];
            if (a) return (0, window.decodeURIComponent)(d.nodeName.replace(/\./g, "%")).substr(1);
            d = d.nodeValue;
            if (!(0, m.q)(d)) throw "Storage mechanism: Invalid value was encountered";
            return d
        };
        return d
    };
    m.f.clear = function() {
        for (var a = sk(this), b = a.attributes.length; 0 < b; b--) a.removeAttribute(a.attributes[b - 1].nodeName);
        rk(this)
    };
    (0, m.s)(tk, Ii);
    m.f = tk.prototype;
    m.f.Jh = null;
    m.f.Jg = "";
    m.f.set = function(a, b) {
        this.Jh.set(this.Jg + a, b)
    };
    m.f.get = function(a) {
        return this.Jh.get(this.Jg + a)
    };
    m.f.remove = function(a) {
        this.Jh.remove(this.Jg + a)
    };
    m.f.uc = function(a) {
        var b = this.Jh.uc(!0),
            c = this,
            d = new Qh;
        d.next = function() {
            for (var d = b.next(); d.substr(0, c.Jg.length) != c.Jg;) d = b.next();
            return a ? d.substr(c.Jg.length) : c.Jh.get(d)
        };
        return d
    };
    var Qk = {
            like: "l",
            dislike: "d",
            subscribe: "b",
            unsubscribe: "u",
            add_to_playlist: "d",
            comment: "c",
            share: "h"
        },
        Ek = {
            "www.google.com": "g",
            "www.youtube.com": "y",
            "www.facebook.com": "f",
            "www.twitter.com": "t",
            "www.plus.google.com": "p"
        },
        Fk = null;
    var Hk;
    var YA = [],
        ZA = [];
    var Uk;
    var al = {},
        $A = "ontouchstart" in window.document;
    (0, m.R)(window.document, "blur", dl, !0);
    (0, m.R)(window.document, "change", dl, !0);
    (0, m.R)(window.document, "click", dl);
    (0, m.R)(window.document, "focus", dl, !0);
    (0, m.R)(window.document, "mouseover", dl);
    (0, m.R)(window.document, "mouseout", dl);
    (0, m.R)(window.document, "mousedown", dl);
    (0, m.R)(window.document, "keydown", dl);
    (0, m.R)(window.document, "keyup", dl);
    (0, m.R)(window.document, "keypress", dl);
    (0, m.R)(window.document, "cut", dl);
    (0, m.R)(window.document, "paste", dl);
    $A && ((0, m.R)(window.document, "touchstart", dl), (0, m.R)(window.document, "touchend", dl), (0, m.R)(window.document, "touchcancel", dl));
    var fl = window.yt && window.yt.uix && window.yt.uix.widgets_ || {};
    (0, m.l)("yt.uix.widgets_", fl, void 0);
    m.hl.prototype.i = function(a, b, c) {
        var d = this.U(a, b);
        if (d && (d = (0, m.n)(d))) {
            var e = (0, m.pa)(arguments, 2);
            (0, m.ac)(e, 0, 0, a);
            d.apply(null, e)
        }
    };
    m.hl.prototype.U = function(a, b) {
        return (0, m.H)(a, b)
    };
    m.hl.prototype.removeData = function(a, b) {
        (0, m.Gc)(a, b)
    };
    m.hl.prototype.wa = function(a) {
        return (0, m.Q)(a, (0, m.V)(this))
    };
    (0, m.s)(m.kl, m.hl);
    (0, m.ud)(m.kl);
    m.f = m.kl.prototype;
    m.f.Ia = "button";
    m.f.Le = null;
    m.f.register = function() {
        (0, m.X)(this, "click", this.Av);
        (0, m.X)(this, "keydown", this.zv);
        (0, m.X)(this, "keypress", this.Bv)
    };
    m.f.unregister = function() {
        (0, m.Y)(this, "click", this.Av);
        (0, m.Y)(this, "keydown", this.zv);
        (0, m.Y)(this, "keypress", this.Bv);
        (0, m.zl)(this);
        for (var a in this.g)(0, m.S)(this.g[a]);
        this.g = {}
    };
    m.f.Av = function(a) {
        a && !a.disabled && (this.toggle(a), this.click(a))
    };
    m.f.zv = function(a, b, c) {
        if (!(c.altKey || c.ctrlKey || c.shiftKey) && (b = (0, m.vl)(this, a))) {
            var d = function(a) {
                var b = "";
                a.tagName && (b = a.tagName.toLowerCase());
                return "ul" == b || "table" == b
            };
            if (d = d(b) ? b : Te(b, d)) {
                var d = d.tagName.toLowerCase(),
                    e;
                "ul" == d ? e = this.BJ : "table" == d && (e = this.AJ);
                e && ll(this, a, b, c, (0, m.r)(e, this))
            }
        }
    };
    m.f.Bv = function(a, b, c) {
        c.altKey || c.ctrlKey || c.shiftKey || (a = (0, m.vl)(this, a), m.T.Ra(a) && c.preventDefault())
    };
    m.f.AJ = function(a, b, c) {
        var d = ml(this, b);
        b = (0, m.Nf)("table", null, b);
        var e = (0, m.Nf)("tr", null, b),
            e = (0, m.fe)("td", null, e).length;
        b = (0, m.fe)("td", null, b);
        d = rl(d, b, e, c); - 1 != d && (ol(this, a, b[d]), c.preventDefault())
    };
    m.f.BJ = function(a, b, c) {
        if (40 == c.keyCode || 38 == c.keyCode) {
            var d = ml(this, b);
            b = (0, m.fe)("li", null, b);
            d = rl(d, b, 1, c);
            ol(this, a, b[d]);
            c.preventDefault()
        }
    };
    m.f.Mv = function(a) {
        if (a) {
            var b = (0, m.vl)(this, a);
            if (b) {
                a.setAttribute("aria-pressed", "true");
                a.setAttribute("aria-expanded", "true");
                b.originalParentNode = b.parentNode;
                b.activeButtonNode = a;
                b.parentNode.removeChild(b);
                var c;
                c = this.U(a, "button-has-sibling-menu") ? a.parentNode : ul(this, a);
                c.appendChild(b);
                b.style.minWidth = a.offsetWidth - 2 + "px";
                var d = sl(this, a);
                d && c.appendChild(d);
                c = !!this.U(a, "button-menu-fixed");
                (0, m.tl)(this, a, b, c);
                m.T.show(b);
                this.i(a, "button-menu-action", !0);
                (0, m.I)(a, (0, m.V)(this, "active"));
                b = (0, m.r)(this.Ru, this, a, !1);
                c = (0, m.r)(this.Ru, this, a, !0);
                d = this.Le && (0, m.Re)((0, m.vl)(this, this.Le), a);
                this.Le && !d && (0, m.zl)(this);
                d = (0, m.Jf)(a).toString();
                this.g[d] = [(0, m.R)(window.document, "click", c), (0, m.R)(window.document, "contextmenu", b)];
                this.Le = a
            }
        }
    };
    m.f.Ru = function(a, b, c) {
        c = c || window.event;
        c = c.target || c.srcElement;
        3 == c.nodeType && (c = c.parentNode);
        var d = (0, m.Q)(c, (0, m.V)(this));
        if (d) {
            var d = (0, m.vl)(this, d),
                e = (0, m.vl)(this, a);
            if (d == e) return
        }
        var d = (0, m.Q)(c, (0, m.V)(this, "menu")),
            e = d == (0, m.vl)(this, a),
            g = (0, m.wd)(c, (0, m.V)(this, "menu-item")),
            h = (0, m.wd)(c, (0, m.V)(this, "menu-close"));
        if (!d || e && (g || h))(0, m.nl)(this, a), d && b && this.U(a, "button-menu-indicate-selected") && ((a = (0, m.O)((0, m.V)(this, "content"), a)) && (0, m.Se)(a, (0, m.Ve)(c)), a = (0, m.V)(this, "menu-item-selected"),
            (b = (0, m.O)(a, d)) && (0, m.J)(b, a), (0, m.I)(c.parentNode, a))
    };
    m.f.toggle = function(a) {
        if (this.U(a, "button-toggle")) {
            var b = (0, m.Q)(a, (0, m.V)(this, "group"));
            if (b && this.U(b, "button-toggle-group")) {
                var c = this.U(b, "button-toggle-group"),
                    b = (0, m.N)((0, m.V)(this), b),
                    d = (0, m.V)(this, "toggled"),
                    e = (0, m.wd)(a, d);
                (0, m.A)(b, function(b) {
                    b != a || "optional" == c && e ? (0, m.J)(b, d) : (0, m.I)(a, d)
                })
            } else(0, m.Ad)(a, (0, m.V)(this, "toggled"))
        }
    };
    m.f.click = function(a) {
        if ((0, m.vl)(this, a)) {
            var b = (0, m.vl)(this, a),
                c = (0, m.Q)(b.activeButtonNode || b.parentNode, (0, m.V)(this));
            c && c != a ? ((0, m.nl)(this, c), (0, m.w)((0, m.r)(this.Mv, this, a), 1)) : m.T.Ra(b) ? (0, m.nl)(this, a) : this.Mv(a);
            a.focus()
        }
        this.i(a, "button-action")
    };
    (0, m.s)(Al, m.hl);
    (0, m.ud)(Al);
    Al.prototype.Ia = "char-counter";
    Al.prototype.register = function() {
        (0, m.X)(this, "keydown", this.g, "input");
        (0, m.X)(this, "paste", this.g, "input");
        (0, m.X)(this, "cut", this.g, "input")
    };
    Al.prototype.unregister = function() {
        (0, m.Y)(this, "keydown", this.g, "input");
        (0, m.Y)(this, "paste", this.g, "input");
        (0, m.Y)(this, "cut", this.g, "input")
    };
    Al.prototype.g = function(a) {
        var b = this.wa(a);
        if (b) {
            var c = "true" == this.U(b, "count-char-by-size"),
                d = (0, window.parseInt)(this.U(b, "char-limit"), 10);
            (0, window.isNaN)(d) || 0 >= d || (0, m.w)((0, m.r)(function() {
                var e = "true" == this.U(b, "use-plaintext-length"),
                    g = (0, window.parseInt)(a.getAttribute("maxlength"), 10);
                if (!(0, window.isNaN)(g)) {
                    var h = Bl(a, c, e);
                    if (c) {
                        if (h > g) {
                            var k = a.value,
                                p = k.length,
                                u = 0,
                                g = h - g,
                                h = "",
                                z = 0;
                            do h += k[p - u], z = (0, window.unescape)((0, window.encodeURIComponent)(h)).length, u++; while (z < g);
                            a.value = a.value.substring(0,
                                p - u)
                        }
                    } else h > g && (a.value = a.value.substring(0, g))
                }
                k = (0, window.parseInt)(this.U(b, "warn-at-chars-remaining"), 10);
                (0, window.isNaN)(k) && (k = 0);
                e = d - Bl(a, c, e);
                (0, m.Id)(b, (0, m.V)(this, "maxed-out"), e < k);
                (0, m.O)((0, m.V)(this, "remaining"), b).innerHTML = e
            }, this), 0)
        }
    };
    (0, m.s)(Cl, m.hl);
    m.f = Cl.prototype;
    m.f.wa = function(a) {
        var b = m.hl.prototype.wa.call(this, a);
        return b ? b : a
    };
    m.f.U = function(a, b) {
        var c = Cl.D.U.call(this, a, b);
        return c ? c : (c = Cl.D.U.call(this, a, "card-config")) && (c = (0, m.n)(c)) && c[b] ? c[b] : null
    };
    m.f.show = function(a) {
        var b = this.wa(a);
        if (b) {
            (0, m.L)(b, (0, m.V)(this, "active"));
            var c = Dl(this, a, b);
            if (c) {
                c.cardTargetNode = a;
                c.cardRootNode = b;
                El(this, a, c);
                var d = (0, m.V)(this, "card-visible"),
                    e = this.U(a, "card-delegate-show") && this.U(b, "card-action");
                this.i(b, "card-action", a);
                this.j = a;
                m.T.hide(c);
                (0, m.w)(function() {
                    e || m.T.show(c);
                    (0, m.L)(c, d)
                }, 10)
            }
        }
    };
    m.f.hide = function(a) {
        var b = this.wa(a);
        b && (a = Dl(this, a, b)) && ((0, m.M)(b, (0, m.V)(this, "active")), (0, m.M)(a, (0, m.V)(this, "card-visible")), m.T.hide(a), this.j = null, a.cardTargetNode = null, a.cardRootNode = null)
    };
    m.f.Uf = function(a) {
        var b = a.cardContentNode;
        if (!b) {
            var c = (0, m.V)(this, "content"),
                d = (0, m.V)(this, "card-content");
            (b = (0, m.O)(c, a)) || (b = window.document.createElement("div"));
            (0, m.Gd)(b, c, d);
            a.cardContentNode = b
        }
        return b
    };
    (0, m.s)(m.Gl, Cl);
    (0, m.ud)(m.Gl);
    m.f = m.Gl.prototype;
    m.f.Ia = "clickcard";
    m.f.register = function() {
        (0, m.X)(this, "click", this.Hv, "target");
        (0, m.X)(this, "click", this.Gv, "close")
    };
    m.f.unregister = function() {
        (0, m.Y)(this, "click", this.Hv, "target");
        (0, m.Y)(this, "click", this.Gv, "close");
        for (var a in this.g)(0, m.S)(this.g[a]);
        this.g = {}
    };
    m.f.Hv = function(a) {
        var b = this.U(a, "card-target");
        a = b ? (0, m.D)(b) : a;
        b = this.wa(a);
        (0, m.Hd)(b, (0, m.V)(this, "active")) ? (this.hide(a), (0, m.M)(b, (0, m.V)(this, "active"))) : (this.show(a), (0, m.L)(b, (0, m.V)(this, "active")))
    };
    m.f.show = function(a) {
        m.Gl.D.show.call(this, a);
        var b = this.wa(a);
        (0, m.H)(b, "click-outside-persists") || (b = (0, m.Ac)(a), this.g[b] || (a = (0, m.R)(window.document, "click", (0, m.r)(this.NG, this, a)), this.g[b] = a))
    };
    m.f.hide = function(a) {
        m.Gl.D.hide.call(this, a);
        a = (0, m.Ac)(a);
        var b = this.g[a];
        b && ((0, m.S)(b), this.g[a] = null)
    };
    m.f.NG = function(a, b) {
        (0, m.Q)(b.target, "yt-uix" + (this.Ia ? "-" + this.Ia : "") + "-card") || this.hide(a)
    };
    m.f.Gv = function(a) {
        (a = (0, m.Q)(a, (0, m.V)(this, "card"))) && this.hide(a.cardTargetNode)
    };
    (0, m.s)(Hl, m.hl);
    (0, m.ud)(Hl);
    Hl.prototype.Ia = "close";
    Hl.prototype.register = function() {
        (0, m.X)(this, "click", this.g)
    };
    Hl.prototype.unregister = function() {
        (0, m.Y)(this, "click", this.g)
    };
    Hl.prototype.g = function(a) {
        var b, c = this.U(a, "close-parent-class"),
            d = this.U(a, "close-parent-id");
        d ? b = (0, m.D)(d) : c && (b = (0, m.Q)(a, c));
        b && (m.T.hide(b), c = this.U(a, "close-focus-target-id")) && (c = (0, m.D)(c)) && (d = m.kl.getInstance(), (0, m.yl)(d, c) && d.toggle(c), c.focus());
        this.i(a, "close-callback", b)
    };
    m.Fn = m.ne ? "webkitTransitionEnd" : m.sg ? "otransitionend" : "transitionend";
    (0, m.s)(m.Il, m.hl);
    (0, m.ud)(m.Il);
    m.f = m.Il.prototype;
    m.f.Ia = "expander";
    m.f.register = function() {
        (0, m.X)(this, "click", this.$w, "head");
        (0, m.X)(this, "keypress", this.ax, "head")
    };
    m.f.unregister = function() {
        (0, m.Y)(this, "click", this.$w, "head");
        (0, m.Y)(this, "keypress", this.ax, "head")
    };
    m.f.$w = function(a) {
        Jl(this, a)
    };
    m.f.ax = function(a, b, c) {
        c && 13 == c.keyCode && Jl(this, a)
    };
    var bB;
    var aB;
    aB = RegExp("^[^\u0591-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");
    bB = RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]");
    m.cB = RegExp("^(ar|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Arab|Hebr|Thaa|Nkoo|Tfng))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)", "i");
    (0, m.s)(m.Ll, m.hl);
    (0, m.ud)(m.Ll);
    m.f = m.Ll.prototype;
    m.f.Ia = "form-input";
    m.f.register = function() {
        m.Zd && !(0, m.Vd)(9) && ((0, m.X)(this, "click", this.Xe, "checkbox"), (0, m.X)(this, "keypressed", this.Xe, "checkbox"), (0, m.X)(this, "click", this.tm, "radio"), (0, m.X)(this, "keypressed", this.tm, "radio"));
        m.Zd && !(0, m.Vd)(10) && (0, m.X)(this, "click", this.jw, "placeholder");
        (0, m.X)(this, "change", this.Xe, "checkbox");
        (0, m.X)(this, "blur", this.hw, "select-element");
        (0, m.X)(this, "change", this.kd, "select-element");
        (0, m.X)(this, "keyup", this.kd, "select-element");
        (0, m.X)(this, "focus", this.iw, "select-element");
        (0, m.X)(this, "keyup", this.Ih, "text");
        (0, m.X)(this, "keyup", this.Ih, "textarea");
        (0, m.X)(this, "keyup", this.Ih, "bidi");
        (0, m.X)(this, "click", this.XI, "reset")
    };
    m.f.unregister = function() {
        m.Zd && !(0, m.Vd)(9) && ((0, m.Y)(this, "click", this.Xe, "checkbox"), (0, m.Y)(this, "keypressed", this.Xe, "checkbox"), (0, m.Y)(this, "click", this.tm, "radio"), (0, m.Y)(this, "keypressed", this.tm, "radio"));
        m.Zd && !(0, m.Vd)(10) && (0, m.Y)(this, "click", this.jw, "placeholder");
        (0, m.Y)(this, "change", this.Xe, "checkbox");
        (0, m.Y)(this, "blur", this.hw, "select-element");
        (0, m.Y)(this, "change", this.kd, "select-element");
        (0, m.Y)(this, "keyup", this.kd, "select-element");
        (0, m.Y)(this, "focus", this.iw, "select-element");
        (0, m.Y)(this, "keyup", this.Ih, "text");
        (0, m.Y)(this, "keyup", this.Ih, "textarea");
        (0, m.Y)(this, "keyup", this.Ih, "bidi")
    };
    m.f.Xe = function(a) {
        var b = (0, m.Q)(a, (0, m.V)(this, "checkbox-container"));
        a.checked && (0, m.Hd)(b, "partial") && (a.checked = (0, m.Hd)(a, "partial-to-full"), a.zm = !1, (0, m.M)(b, "partial"));
        (0, m.Id)(b, "checked", a.checked)
    };
    m.f.WJ = function(a) {
        var b = (0, m.Q)(a, (0, m.V)(this, "radio-container"));
        b && (0, m.Id)(b, "checked", a.checked)
    };
    m.f.tm = function() {
        Rl()
    };
    m.f.Ih = function(a) {
        var b = a.value,
            c = "";
        bB.test(b) ? c = "rtl" : aB.test(b) && (c = "ltr");
        a.dir = c;
        m.Zd && !(0, m.Vd)(10) && (b = (0, m.Q)(a, (0, m.V)(this, "container"))) && (0, m.Id)(b, (0, m.V)(this, "non-empty"), !!a.value)
    };
    m.f.jw = function(a) {
        a = (0, m.Q)(a, (0, m.V)(this, "container"));
        (a = (0, m.jl)(this, "text", a) || (0, m.jl)(this, "textarea", a)) && a.focus()
    };
    m.f.iw = function(a) {
        var b = (0, m.Q)(a, (0, m.V)(this, "select"));
        (0, m.L)(b, "focused");
        this.kd(a)
    };
    m.f.hw = function(a) {
        var b = (0, m.Q)(a, (0, m.V)(this, "select"));
        (0, m.M)(b, "focused");
        this.kd(a)
    };
    m.f.kd = function(a) {
        var b = (0, m.Q)(a, (0, m.V)(this, "select")),
            c = (0, m.O)((0, m.V)(this, "select-value"), b),
            d = Ml(a);
        d && ("" != c.innerHTML && d.innerHTML != c.innerHTML && this.i(a, "onchange-callback"), c.innerHTML = d.innerHTML);
        (0, m.Id)(b, (0, m.V)(this, "select-disabled"), a.disabled)
    };
    m.f.XI = function() {
        (0, m.Sl)()
    };
    (0, m.s)(m.Ul, Cl);
    (0, m.ud)(m.Ul);
    m.f = m.Ul.prototype;
    m.f.Ia = "hovercard";
    m.f.register = function() {
        (0, m.X)(this, "mouseenter", this.Nw, "target");
        (0, m.X)(this, "mouseleave", this.Pw, "target");
        (0, m.X)(this, "mouseenter", this.Ow, "card");
        (0, m.X)(this, "mouseleave", this.Qw, "card")
    };
    m.f.unregister = function() {
        (0, m.Y)(this, "mouseenter", this.Nw, "target");
        (0, m.Y)(this, "mouseleave", this.Pw, "target");
        (0, m.Y)(this, "mouseenter", this.Ow, "card");
        (0, m.Y)(this, "mouseleave", this.Qw, "card")
    };
    m.f.Nw = function(a) {
        if (dB != a) {
            dB && (this.hide(dB), dB = null);
            var b = (0, m.r)(this.show, this, a),
                c = (0, window.parseInt)(this.U(a, "delay-show"), 10),
                b = (0, m.w)(b, -1 < c ? c : 200);
            (0, m.Hc)(a, "card-timer", b.toString());
            dB = a;
            a.alt && ((0, m.Hc)(a, "card-alt", a.alt), a.alt = "");
            a.title && ((0, m.Hc)(a, "card-title", a.title), a.title = "")
        }
    };
    m.f.Pw = function(a) {
        var b = (0, window.parseInt)(this.U(a, "card-timer"), 10);
        (0, m.x)(b);
        this.wa(a).isCardHidable = !0;
        b = (0, window.parseInt)(this.U(a, "delay-hide"), 10);
        b = -1 < b ? b : 200;
        (0, m.w)((0, m.r)(this.xI, this, a), b);
        if (b = this.U(a, "card-alt")) a.alt = b;
        if (b = this.U(a, "card-title")) a.title = b
    };
    m.f.xI = function(a) {
        this.wa(a).isCardHidable && (this.hide(a), dB = null)
    };
    m.f.Ow = function(a) {
        a && (a.cardRootNode.isCardHidable = !1)
    };
    m.f.Qw = function(a) {
        a && this.hide(a.cardTargetNode)
    };
    var dB = null;
    (0, m.s)(Vl, m.hl);
    (0, m.ud)(Vl);
    m.f = Vl.prototype;
    m.f.Ia = "legacy-slider";
    m.f.register = function() {
        (0, m.X)(this, "click", this.Mw, "num");
        (0, m.X)(this, "click", this.Sw, "prev");
        (0, m.X)(this, "click", this.Rw, "next");
        (0, m.X)(this, "mouseover", this.Tw, "ajax-trigger")
    };
    m.f.unregister = function() {
        (0, m.Y)(this, "click", this.Mw, "num");
        (0, m.Y)(this, "click", this.Sw, "prev");
        (0, m.Y)(this, "click", this.Rw, "next");
        (0, m.Y)(this, "mouseover", this.Tw, "ajax-trigger")
    };
    m.f.Mw = function(a) {
        if (a) {
            var b = this.wa(a);
            a = (0, window.parseInt)(this.U(a, "slider-num"), 10);
            if ((0, window.isNaN)(a) || 0 > a) a = 0;
            this.km(b, a)
        }
    };
    m.f.Rw = function(a, b, c) {
        if (a) {
            if (a = this.wa(a)) {
                b = (0, window.parseInt)(this.U(a, "slider-current"), 10);
                if ((0, window.isNaN)(b) || 0 > b) b = 0;
                var d = (0, window.parseInt)(this.U(a, "slider-slides"), 10);
                if ((0, window.isNaN)(d) || 0 > d) d = 0;
                b = Math.min(b + 1, d - 1);
                this.km(a, b)
            }
            c.preventDefault()
        }
    };
    m.f.Sw = function(a, b, c) {
        if (a) {
            if (a = this.wa(a)) {
                b = (0, window.parseInt)(this.U(a, "slider-current"), 10);
                if ((0, window.isNaN)(b) || 0 > b) b = 0;
                b = Math.max(b - 1, 0);
                this.km(a, b)
            }
            c.preventDefault()
        }
    };
    m.f.Tw = function(a) {
        if (a = this.wa(a)) {
            var b = (0, m.V)(this, "ajax-trigger"),
                c = (0, m.N)(b, a);
            (0, m.A)(c, function(a) {
                (0, m.M)(a, b)
            });
            Wl(this, a)
        }
    };
    m.f.km = function(a, b) {
        a && (this.U(a, "slider-ajax-url") && !this.U(a, "slider-loaded") ? Wl(this, a, (0, m.r)(this.km, this, a, b)) : Xl(this, a, b))
    };
    var bm = {
        LOADING: "loading",
        dM: "content",
        CQ: "working"
    };
    m.f = m.Zl.prototype;
    m.f.show = function() {
        if (!this.ma()) {
            window.document.activeElement && window.document.activeElement != window.document.body && window.document.activeElement.blur();
            this.g || (this.g = (0, m.D)("yt-dialog-bg"), this.g || (this.g = (0, m.ue)("div"), this.g.id = "yt-dialog-bg", this.g.className = "yt-dialog-bg", window.document.body.appendChild(this.g)));
            var a = window,
                b = a.document,
                c = 0;
            if (b) {
                var a = je(a).height,
                    c = b.body,
                    d = b.documentElement;
                if (ke(b) && d.scrollHeight) c = d.scrollHeight != a ? d.scrollHeight : d.offsetHeight;
                else {
                    var b = d.scrollHeight,
                        e = d.offsetHeight;
                    d.clientHeight != e && (b = c.scrollHeight, e = c.offsetHeight);
                    c = b > a ? b > e ? b : e : b < e ? b : e
                }
            }
            this.g.style.height = c + "px";
            m.T.show(this.g);
            Vf(this.b);
            b = dm(this);
            em(b);
            this.j || (0, m.R)(window.document, "keydown", (0, m.r)(this.Ts, this));
            b = this.b;
            a = (0, m.y)("player-added", this.ID, this);
            (0, m.Hc)(b, "player-ready-pubsub-key", a);
            m.T.show(this.b);
            (0, m.L)(window.document.body, "yt-dialog-active");
            (0, m.Fl)(m.Gl.getInstance());
            (0, m.Fl)(m.Ul.getInstance())
        }
    };
    m.f.Ra = function() {
        return m.T.Ra(this.b)
    };
    m.f.ID = function() {
        Vf(this.b)
    };
    m.f.jD = function(a) {
        a = a.currentTarget;
        a.disabled || (a = (0, m.H)(a, "action") || "", (0, m.gm)(this, a))
    };
    m.f.setTitle = function(a) {
        (0, m.Se)((0, m.O)("yt-dialog-title", this.b), a)
    };
    m.f.Ts = function(a) {
        (0, m.w)((0, m.r)(function() {
            27 == a.keyCode && (0, m.gm)(this, "cancel")
        }, this), 0)
    };
    m.f.ma = function() {
        return this.k
    };
    m.f.dispose = function() {
        this.Ra() && (0, m.gm)(this, "dispose");
        (0, m.S)(this.o);
        this.i.dispose();
        this.i = null;
        this.k = !0
    };
    (0, m.l)("yt.ui.Dialog", m.Zl, void 0);
    (0, m.s)(m.hm, m.hl);
    (0, m.ud)(m.hm);
    m.f = m.hm.prototype;
    m.f.Pd = null;
    m.f.zh = null;
    m.f.Ia = "overlay";
    m.f.register = function() {
        (0, m.X)(this, "click", this.Ip, "target");
        (0, m.X)(this, "click", this.hide, "close");
        im(this)
    };
    m.f.unregister = function() {
        (0, m.Y)(this, "click", this.Ip, "target");
        (0, m.Y)(this, "click", this.hide, "close");
        this.j && ((0, m.Ka)(this.j), this.j = null);
        this.g && ((0, m.S)(this.g), this.g = null)
    };
    m.f.Ip = function(a) {
        if (!this.Pd || !this.Pd.Ra()) {
            var b = this.wa(a);
            a = lm(b, a);
            b || (b = a ? a.overlayParentNode : null);
            if (b && a) {
                var c = !!this.U(b, "disable-shortcuts") || !1;
                this.Pd = new m.Zl(a, c);
                this.zh = b;
                var d = (0, m.O)("yt-dialog-fg", a);
                if (d) {
                    var e = this.U(b, "overlay-class") || "",
                        g = this.U(b, "overlay-style") || "default",
                        h = this.U(b, "overlay-shape") || "default";
                    (0, m.L)(d, e, (0, m.V)(this, g), (0, m.V)(this, h))
                }
                this.Pd.show();
                im(this);
                c || (c = (0, m.r)(function(a) {
                    (0, m.Hd)(a.target, "yt-dialog-base") && km(this)
                }, this), a = (0, m.O)("yt-dialog-base",
                    a), this.g = (0, m.R)(a, "click", c));
                this.i(b, "overlay-shown");
                (0, m.Fl)(m.Gl.getInstance());
                (0, m.zl)(m.kl.getInstance())
            }
        }
    };
    m.f.Uf = function(a) {
        return (0, m.O)("yt-dialog-content", a.overlayContentNode || a)
    };
    m.f.hide = function() {
        (0, m.B)("yt-uix-overlay-hide")
    };
    m.f.show = function(a) {
        this.Ip(a)
    };
    (0, m.s)(nm, m.hl);
    (0, m.ud)(nm);
    nm.prototype.Ia = "playlistlike";
    nm.prototype.register = function() {
        (0, m.X)(this, "click", this.g)
    };
    nm.prototype.unregister = function() {
        (0, m.Y)(this, "click", this.g)
    };
    nm.prototype.g = function(a) {
        var b = this.U(a, "toggle-class"),
            c = this.U(a, "playlist-id"),
            d = this.U(a, "token");
        if (a && b && c && d) {
            var e = (0, m.wd)(a, b) ? "remove_like" : "like";
            om(this, c, e, a, b, d)
        }
    };
    (0, m.s)(pm, m.hl);
    (0, m.ud)(pm);
    pm.prototype.Ia = "redirect-link";
    pm.prototype.register = function() {
        (0, m.X)(this, "click", this.g)
    };
    pm.prototype.unregister = function() {
        (0, m.Y)(this, "click", this.g)
    };
    pm.prototype.g = function(a) {
        if (!(0, m.H)(a, "redirect-href-updated")) {
            (0, m.Hc)(a, "redirect-href-updated", "true");
            var b = (0, m.v)("XSRF_REDIRECT_TOKEN"),
                c = (0, m.v)("XSRF_FIELD_NAME");
            if (b && c) {
                var d = {};
                d.q = a.href;
                d[c] = b;
                a.href = (0, m.uf)("/redirect", d)
            }
        }
    };
    m.qm.prototype.G = function() {};
    m.qm.prototype.dispose = function() {};
    m.qm.prototype.stopPropagation = function() {
        this.Ig = !0
    };
    m.qm.prototype.preventDefault = function() {
        this.defaultPrevented = !0;
        this.Uu = !1
    };
    rm[" "] = m.da;
    var eB = !m.Zd || (0, m.Yd)(9),
        Lm = !m.Zd || (0, m.Yd)(9),
        fB = m.Zd && !(0, m.Vd)("9");
    !m.ne || (0, m.Vd)("528");
    m.rg && (0, m.Vd)("1.9b") || m.Zd && (0, m.Vd)("8") || m.sg && (0, m.Vd)("9.5") || m.ne && (0, m.Vd)("528");
    m.rg && !(0, m.Vd)("8") || m.Zd && (0, m.Vd)("9");
    (0, m.s)(m.sm, m.qm);
    var gB = [1, 4, 2];
    m.f = m.sm.prototype;
    m.f.init = function(a, b) {
        var c = this.type = a.type;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var d = a.relatedTarget;
        if (d) {
            if (m.rg) {
                var e;
                t: {
                    try {
                        rm(d.nodeName);
                        e = !0;
                        break t
                    } catch (g) {}
                    e = !1
                }
                e || (d = null)
            }
        } else "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
        this.relatedTarget = d;
        this.offsetX = m.ne || void 0 !== a.offsetX ? a.offsetX : a.layerX;
        this.offsetY = m.ne || void 0 !== a.offsetY ? a.offsetY : a.layerY;
        this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
        this.clientY = void 0 !== a.clientY ? a.clientY :
            a.pageY;
        this.screenX = a.screenX || 0;
        this.screenY = a.screenY || 0;
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.state = a.state;
        this.Wa = a;
        a.defaultPrevented && this.preventDefault()
    };
    m.f.stopPropagation = function() {
        m.sm.D.stopPropagation.call(this);
        this.Wa.stopPropagation ? this.Wa.stopPropagation() : this.Wa.cancelBubble = !0
    };
    m.f.preventDefault = function() {
        m.sm.D.preventDefault.call(this);
        var a = this.Wa;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, fB) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    m.f.lJ = function() {
        return this.Wa
    };
    m.f.G = function() {};
    var wm;
    m.um = "closure_listenable_" + (1E6 * Math.random() | 0);
    wm = 0;
    ym.prototype.add = function(a, b, c, d, e) {
        var g = this.b[a];
        g || (g = this.b[a] = [], this.g++);
        var h = Bm(g, b, d, e); - 1 < h ? (a = g[h], c || (a.Fl = !1)) : (a = new vm(b, this.src, a, !!d, e), a.Fl = c, g.push(a));
        return a
    };
    ym.prototype.remove = function(a, b, c, d) {
        if (!(a in this.b)) return !1;
        var e = this.b[a];
        b = Bm(e, b, c, d);
        return -1 < b ? (xm(e[b]), (0, m.ma)(e, b), 0 == e.length && (delete this.b[a], this.g--), !0) : !1
    };
    ym.prototype.removeAll = function(a) {
        var b = 0,
            c;
        for (c in this.b)
            if (!a || c == a) {
                for (var d = this.b[c], e = 0; e < d.length; e++) ++b, xm(d[e]);
                delete this.b[c];
                this.g--
            } return b
    };
    var Gm = "closure_lm_" + (1E6 * Math.random() | 0),
        Im = {},
        Jm = 0,
        Rm = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    (0, m.s)(m.Sm, m.t);
    m.Sm.prototype[m.um] = !0;
    m.f = m.Sm.prototype;
    m.f.bm = null;
    m.f.Yp = function(a) {
        this.bm = a
    };
    m.f.addEventListener = function(a, b, c, d) {
        (0, m.Cm)(this, a, b, c, d)
    };
    m.f.removeEventListener = function(a, b, c, d) {
        (0, m.Nm)(this, a, b, c, d)
    };
    m.f.G = function() {
        m.Sm.D.G.call(this);
        this.removeAllListeners();
        this.bm = null
    };
    m.f.listen = function(a, b, c, d) {
        return this.Te.add(String(a), b, !1, c, d)
    };
    m.f.rb = function(a, b, c, d) {
        return this.Te.remove(String(a), b, c, d)
    };
    m.f.removeAllListeners = function(a) {
        return this.Te ? this.Te.removeAll(a) : 0
    };
    (0, m.s)(m.Vm, m.Sm);
    m.f = m.Vm.prototype;
    m.f.enabled = !1;
    m.f.hd = null;
    m.f.wC = function() {
        if (this.enabled) {
            var a = (0, m.C)() - this.j;
            0 < a && a < 0.8 * this.b ? this.hd = this.g.setTimeout(this.i, this.b - a) : (this.hd && (this.g.clearTimeout(this.hd), this.hd = null), (0, m.Tm)(this, "tick"), this.enabled && (this.hd = this.g.setTimeout(this.i, this.b), this.j = (0, m.C)()))
        }
    };
    m.f.start = function() {
        this.enabled = !0;
        this.hd || (this.hd = this.g.setTimeout(this.i, this.b), this.j = (0, m.C)())
    };
    m.f.stop = function() {
        this.enabled = !1;
        this.hd && (this.g.clearTimeout(this.hd), this.hd = null)
    };
    m.f.G = function() {
        m.Vm.D.G.call(this);
        this.stop();
        delete this.g
    };
    (0, m.s)(m.Xm, m.t);
    m.f = m.Xm.prototype;
    m.f.Kh = !1;
    m.f.Gj = 0;
    m.f.yg = null;
    m.f.Ki = function() {
        this.yg || this.Gj ? this.Kh = !0 : (0, m.Ym)(this)
    };
    m.f.stop = function() {
        this.yg && (m.ca.clearTimeout(this.yg), this.yg = null, this.Kh = !1)
    };
    m.f.pause = function() {
        this.Gj++
    };
    m.f.resume = (0, m.aa)(12);
    m.f.G = function() {
        m.Xm.D.G.call(this);
        this.stop()
    };
    m.f.rE = function() {
        this.yg = null;
        this.Kh && !this.Gj && (this.Kh = !1, (0, m.Ym)(this))
    };
    var $m, bn;
    var hB = [],
        dn = 0;
    (0, m.s)(m.fn, m.hl);
    (0, m.ud)(m.fn);
    var mn = {
        DEFAULT: "default",
        wJ: "invert-y",
        xJ: "invert-x",
        sq: "invert-x-y"
    };
    m.fn.prototype.register = function() {
        this.g = [];
        var a = new m.Xm((0, m.r)(this.j, this), 300);
        this.g.push((0, m.y)("page-resize", function() {
            a.Ki()
        }));
        this.g.push((0, m.y)("page-scroll", this.k, this));
        this.j()
    };
    m.fn.prototype.unregister = function() {
        (0, m.Ka)(this.g);
        this.g.length = 0
    };
    m.fn.prototype.j = function() {
        gn(this);
        this.k()
    };
    m.fn.prototype.k = function() {
        hn(this, function(a) {
            rn(this, a)
        }, this)
    };
    (0, m.s)(m.wn, m.hl);
    (0, m.ud)(m.wn);
    m.f = m.wn.prototype;
    m.f.Ia = "scroller";
    m.f.register = function() {
        (0, m.X)(this, "mouseenter", this.Fv);
        (0, m.X)(this, "mouseleave", this.Qp)
    };
    m.f.unregister = function() {
        (0, m.Y)(this, "mouseenter", this.Fv);
        (0, m.Y)(this, "mouseleave", this.Qp);
        for (var a in this.g) this.Qp(this.g[a]);
        this.g = {}
    };
    m.f.Fv = function(a) {
        var b = (0, m.R)(a, "mousewheel", (0, m.r)(this.jH, this, a));
        (0, m.Hc)(a, "scroller-mousewheel-listener", b);
        b = (0, m.R)(a, "scroll", (0, m.r)(this.kH, this, a));
        (0, m.Hc)(a, "scroller-scroll-listener", b);
        a && (b = (0, m.Ac)(a).toString(), this.g[b] = a)
    };
    m.f.Qp = function(a) {
        var b = this.U(a, "scroller-mousewheel-listener") || "";
        (0, m.Hc)(a, "scroller-mousewheel-listener", "");
        var c = this.U(a, "scroller-scroll-listener") || "";
        (0, m.Hc)(a, "scroller-scroll-listener", "");
        (0, m.S)(b);
        (0, m.S)(c);
        (0, m.Hc)(a, "scroller-scroll-listener", "");
        a && (a = (0, m.Ac)(a).toString(), delete this.g[a])
    };
    m.f.jH = function(a, b) {
        b.preventDefault();
        b.wheelDeltaY && (a.scrollTop = a.scrollTop + b.wheelDeltaY);
        (0, m.vn)(a)
    };
    m.f.kH = function(a) {
        this.i(a, "scroll-action")
    };
    (0, m.s)(xn, m.hl);
    (0, m.ud)(xn);
    xn.prototype.Ia = "sessionlink";
    xn.prototype.register = function() {
        (0, m.X)(this, "mousedown", this.g);
        (0, m.X)(this, "click", this.g)
    };
    xn.prototype.unregister = function() {
        (0, m.Y)(this, "mousedown", this.g);
        (0, m.Y)(this, "click", this.g)
    };
    xn.prototype.g = function(a) {
        yn(a)
    };
    (0, m.s)(m.zn, m.hl);
    (0, m.ud)(m.zn);
    m.f = m.zn.prototype;
    m.f.Ia = "slider";
    m.f.register = function() {
        (0, m.X)(this, "click", this.Dv, "prev");
        (0, m.X)(this, "click", this.Cv, "next");
        this.g = (0, m.R)(window, "resize", (0, m.r)(this.eH, this))
    };
    m.f.unregister = function() {
        (0, m.Y)(this, "click", this.Dv, "prev");
        (0, m.Y)(this, "click", this.Cv, "next");
        (0, m.S)(this.g)
    };
    m.f.nd = function() {
        var a = (0, m.N)((0, m.V)(this));
        (0, m.A)(a, function(a) {
            In(this, a)
        }, this)
    };
    m.f.eH = function() {
        (0, m.x)(this.j);
        this.j = (0, m.w)((0, m.r)(this.nd, this), 200)
    };
    m.f.Cv = function(a) {
        An(this, a, "forward")
    };
    m.f.Dv = function(a) {
        An(this, a, "back")
    };
    m.f.gq = function(a, b) {
        return (0, m.Pg)(b)
    };
    m.f.hq = function(a, b) {
        return (0, m.Pg)(b) + b.offsetWidth
    };
    m.f.xw = function(a) {
        a && ((0, m.J)(a, (0, m.V)(this, "is-moving")), tn(m.fn.getInstance(), a), In(this, a))
    };
    (0, m.l)("yt.pubsub.publish", m.B, void 0);
    (0, m.s)(m.Mn, m.hl);
    (0, m.ud)(m.Mn);
    m.f = m.Mn.prototype;
    m.f.Ia = "tooltip";
    m.f.om = 0;
    m.f.register = function() {
        (0, m.X)(this, "mouseover", this.mq);
        (0, m.X)(this, "mouseout", this.Fj);
        (0, m.X)(this, "click", this.Fj);
        (0, m.X)(this, "touchstart", this.Jw);
        (0, m.X)(this, "touchend", this.xm);
        (0, m.X)(this, "touchcancel", this.xm)
    };
    m.f.unregister = function() {
        (0, m.Y)(this, "mouseover", this.mq);
        (0, m.Y)(this, "mouseout", this.Fj);
        (0, m.Y)(this, "click", this.Fj);
        (0, m.Y)(this, "touchstart", this.Jw);
        (0, m.Y)(this, "touchend", this.xm);
        (0, m.Y)(this, "touchcancel", this.xm)
    };
    m.f.mq = function(a) {
        if (!(this.om && 1E3 > (0, m.C)() - this.om)) {
            var b = (0, window.parseInt)(this.U(a, "tooltip-hide-timer"), 10);
            b && (this.removeData(a, "tooltip-hide-timer"), (0, m.x)(b));
            var b = (0, m.r)(function() {
                    (0, m.Pn)(this, a);
                    this.removeData(a, "tooltip-show-timer")
                }, this),
                c = (0, window.parseInt)(this.U(a, "tooltip-show-delay"), 10) || 0,
                b = (0, m.w)(b, c);
            (0, m.Hc)(a, "tooltip-show-timer", b.toString());
            a.title && (il(a, (0, m.On)(this, a)), a.title = "")
        }
    };
    m.f.Fj = function(a) {
        var b = (0, window.parseInt)(this.U(a, "tooltip-show-timer"), 10);
        b && ((0, m.x)(b), this.removeData(a, "tooltip-show-timer"));
        b = (0, m.r)(function() {
            (0, m.Tn)(this, a);
            this.removeData(a, "tooltip-hide-timer")
        }, this);
        b = (0, m.w)(b, 50);
        (0, m.Hc)(a, "tooltip-hide-timer", b.toString());
        if (b = this.U(a, "tooltip-text")) a.title = b
    };
    m.f.Jw = function(a, b, c) {
        this.om = 0;
        a = cl(b, (0, m.V)(this), c.changedTouches[0].target);
        this.mq(a)
    };
    m.f.xm = function(a, b, c) {
        this.om = (0, m.C)();
        a = cl(b, (0, m.V)(this), c.changedTouches[0].target);
        this.Fj(a)
    };
    (0, m.s)(m.Vn, m.hl);
    (0, m.ud)(m.Vn);
    m.Vn.prototype.Ia = "subscription-button";
    m.Vn.prototype.register = function() {
        (0, m.X)(this, "click", this.Pp);
        this.g.push((0, m.y)("subscription-subscribe-loading", this.wv, this), (0, m.y)("subscription-subscribe-loaded", this.vv, this), (0, m.y)("subscription-unsubscirbe-loading", this.wv, this), (0, m.y)("subscription-unsubscribe-loaded", this.vv, this), (0, m.y)("subscription-subscribe-success", this.YG, this), (0, m.y)("subscription-unsubscribe-success", this.ZG, this), (0, m.y)("subscription-enable-ypc", this.XG, this), (0, m.y)("subscription-disable-ypc", this.WG,
            this))
    };
    m.Vn.prototype.unregister = function() {
        (0, m.Y)(this, "click", this.Pp);
        (0, m.Ka)(this.g);
        this.g.length = 0
    };
    var ao = {
            cw: "hover-enabled",
            AI: "yt-uix-button-subscribe",
            BI: "yt-uix-button-subscribed",
            KL: "ypc-enabled",
            yJ: "yt-uix-button-subscription-container",
            zJ: "yt-subscription-button-disabled-mask-container"
        },
        $n = {
            YL: "channel-external-id",
            CI: "subscriber-count-show-when-subscribed",
            DI: "subscriber-count-tooltip",
            EI: "subscriber-count-title",
            BN: "href",
            hx: "is-subscribed",
            fP: "parent-url",
            CP: "sessionlink",
            FI: "style-type",
            ix: "subscription-id",
            PP: "target",
            GI: "ypc-enabled",
            aw: "ypc-item-type",
            $v: "ypc-item-id",
            bw: "ypc-offers-url"
        };
    m.f = m.Vn.prototype;
    m.f.Pp = function(a) {
        var b = this.U(a, "href"),
            c = Kn();
        if (b) a = this.U(a, "target") || "_self", window.open(b, a);
        else if (c) {
            var b = this.Aj(a),
                c = this.U(a, "sessionlink"),
                d;
            if (Xn(this, a)) {
                d = this.U(a, $n.aw);
                var e = this.U(a, $n.$v),
                    g = this.U(a, $n.bw);
                d = {
                    itemType: d,
                    itemId: e,
                    offersUrl: g,
                    subscriptionElement: a
                }
            } else d = null;
            e = this.U(a, "parent-url");
            (0, m.Yn)(this, a) ? (g = this.U(a, "subscription-id"), (0, m.B)("subscription-unsubscribe", b, g, d, a, c, e)) : (0, m.B)("subscription-subscribe", b, d, a, c, e)
        } else co(this, a)
    };
    m.f.wv = function(a) {
        this.Lh(a, this.ym, !0)
    };
    m.f.vv = function(a) {
        this.Lh(a, this.ym, !1)
    };
    m.f.YG = function(a, b) {
        this.Lh(a, this.Yw, !0, b)
    };
    m.f.ZG = function(a) {
        this.Lh(a, this.Yw, !1)
    };
    m.f.XG = function(a) {
        this.Lh(a, this.uJ)
    };
    m.f.WG = function(a) {
        this.Lh(a, this.tJ)
    };
    m.f.Yw = function(a, b, c) {
        b ? ((0, m.Hc)(a, $n.hx, "true"), c && (0, m.Hc)(a, $n.ix, c)) : (this.removeData(a, $n.hx), this.removeData(a, $n.ix));
        Zn(this, a)
    };
    m.f.Aj = function(a) {
        return this.U(a, "channel-external-id")
    };
    m.f.ym = function(a, b) {
        var c = (0, m.Q)(a, ao.yJ);
        (0, m.Id)(c, ao.zJ, b);
        a.setAttribute("aria-busy", b ? "true" : "false");
        a.disabled = b
    };
    m.f.uJ = function(a) {
        var b = !!this.U(a, $n.aw),
            c = !!this.U(a, $n.$v),
            d = !!this.U(a, $n.bw);
        !Xn(this, a) && b && c && d && ((0, m.L)(a, "ypc-enabled"), (0, m.Hc)(a, $n.GI, "true"))
    };
    m.f.tJ = function(a) {
        Xn(this, a) && ((0, m.M)(a, "ypc-enabled"), this.removeData(a, "ypc-enabled"))
    };
    m.f.rq = function(a, b, c) {
        var d = (0, m.pa)(arguments, 2);
        (0, m.A)(a, function(a) {
            b.apply(this, (0, m.fd)(a, d))
        }, this)
    };
    m.f.Lh = function(a, b, c) {
        var d = bo(this, a),
            d = (0, m.fd)([d], (0, m.pa)(arguments, 1));
        this.rq.apply(this, d)
    };
    (0, m.s)(eo, m.hl);
    (0, m.ud)(eo);
    m.f = eo.prototype;
    m.f.Ia = "subscription-preferences-button";
    m.f.register = function() {
        (0, m.X)(this, "click", this.Ev);
        this.g.push((0, m.y)("subscription-subscribe-success", this.fH, this), (0, m.y)("subscription-unsubscribe-success", this.gH, this))
    };
    m.f.unregister = function() {
        (0, m.Y)(this, "click", this.Ev);
        (0, m.Ka)(this.g);
        this.g.length = 0
    };
    m.f.fH = function(a, b) {
        this.fx(a, this.gx, !0, b)
    };
    m.f.gH = function(a) {
        this.fx(a, this.gx, !1)
    };
    m.f.Ev = function(a) {
        a = this.U(a, "subscription-id");
        (0, m.B)("subscription-show-pref-overlay", a)
    };
    m.f.gx = function(a, b, c) {
        c ? (0, m.Hc)(a, "subscription-id", c) : this.removeData(a, "subscription-id")
    };
    m.f.Aj = function(a) {
        return this.U(a, "channel-external-id")
    };
    m.f.fx = function(a, b, c) {
        var d = fo(this, a),
            d = (0, m.fd)([d], (0, m.pa)(arguments, 1));
        this.cK.apply(this, d)
    };
    m.f.cK = function(a, b, c) {
        var d = (0, m.pa)(arguments, 2);
        (0, m.A)(a, function(a) {
            b.apply(this, (0, m.fd)(a, d))
        }, this)
    };
    (0, m.s)(m.go, m.hl);
    (0, m.ud)(m.go);
    m.go.prototype.Ia = "tabs";
    m.go.prototype.register = function() {
        (0, m.X)(this, "click", this.g, "tab")
    };
    m.go.prototype.unregister = function() {
        (0, m.Y)(this, "click", this.g, "tab")
    };
    m.go.prototype.g = function(a) {
        var b = this.wa(a),
            c = (0, m.V)(this, "selected"),
            d = this.U(b, "uix-tabs-selected-extra-class");
        if (b = (0, m.O)(c, b)) {
            var e = ho(this, b);
            (0, m.J)(b, c);
            d && (0, m.J)(b, d);
            m.T.hide(e)
        }
        b = ho(this, a);
        (0, m.I)(a, c);
        d && (0, m.I)(a, d);
        m.T.show(b)
    };
    (0, m.s)(io, m.hl);
    (0, m.ud)(io);
    io.prototype.Ia = "tile";
    io.prototype.register = function() {
        (0, m.X)(this, "click", this.g)
    };
    io.prototype.unregister = function() {
        (0, m.Y)(this, "click", this.g)
    };
    io.prototype.g = function(a, b, c) {
        (0, m.$e)(c.target, "a") || (0, m.$e)(c.target, "button") || !(a = (0, m.O)((0, m.V)(this, "link"), a)) || (m.Zd && !(0, m.Vd)(9) ? a.click() : ((0, m.Hd)(a, "yt-uix-sessionlink") && yn(a), (0, m.Hd)(a, "spf-link") ? (0, m.Ci)(a.href) : (0, m.Bi)(a.href)))
    };
    var ko = {},
        Ho = 0,
        Eo = !1;
    var xp = window,
        np = window.document,
        Po = xp.location,
        No = /\[native code\]/,
        up = Jo(xp, "gapi", {});
    var Qo;
    Qo = Jo(xp, "___jsl", Mo());
    Jo(Qo, "I", 0);
    Jo(Qo, "hel", 10);
    var Wo = Jo(Qo, "perf", Mo());
    Jo(Wo, "g", Mo());
    var Vo = Jo(Wo, "i", Mo());
    Jo(Wo, "r", []);
    Mo();
    Mo();
    var Zo = Mo(),
        rp = [];
    rp.push(["jsl", function(a) {
        for (var b in a)
            if (Object.prototype.hasOwnProperty.call(a, b)) {
                var c = a[b];
                "object" == typeof c ? Qo[b] = Jo(Qo, b, []).concat(c) : Jo(Qo, b, c)
            } if (b = a.u) a = Jo(Qo, "us", []), a.push(b), (b = /^https:(.*)$/.exec(b)) && a.push("http:" + b[1])
    }]);
    var gp = /^(\/[a-zA-Z0-9_\-]+)+$/,
        jp = /^[a-zA-Z0-9\-_\.!]+$/,
        ep = /^gapi\.loaded_[0-9]+$/,
        ip = /^[a-zA-Z0-9,._-]+$/,
        bp = /^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,
        ap = /\/cb=/g,
        $o = /\/\//g;
    Zo.m = function(a, b, c, d) {
        (a = a[0]) || Xo("missing_hint");
        return "https://apis.google.com" + cp(a, b, c, d)
    };
    var pp = (0, window.decodeURI)("%73cript");
    up.load = function(a, b) {
        return tp(function() {
            return vp(a, b)
        })
    };
    var Bp = !1;
    var Hp = [],
        Dp = new m.Vm((0, m.v)("VISIBILITY_DUMB_TIMEOUT")),
        Gp = 0;
    m.f = Ip.prototype;
    m.f.Ov = function() {};
    m.f.dispose = function() {
        this.i && ((0, m.S)(this.i), this.i = []);
        this.Ov()
    };
    m.f.Ba = function(a, b, c, d, e) {
        this.i.push((0, m.hg)(a, b, (0, m.r)(c, e || this), d))
    };
    m.f.listen = function(a, b, c, d) {
        this.i.push((0, m.R)(a, b, (0, m.r)(c, d || this)))
    };
    m.f.dm = function() {};
    m.f.ZD = function(a, b, c) {
        (c = (0, m.Mi)(c.responseText)) && (a && Jp(c) || b && b.call(this, c))
    };
    (0, m.s)(Lp, Ip);
    m.f = Lp.prototype;
    m.f.lv = function() {};
    m.f.Kv = function() {};
    m.f.Zl = function() {};
    m.f.init = function(a, b, c, d, e) {
        this.k = a || null;
        this.A = b || null;
        c ? d && e && (this.Ba(d, "mousedown", this.Qv, e), this.Ba(d, "click", this.Pv, e)) : (this.Qv(), this.Pv())
    };
    m.f.ql = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        ((0, m.q)(a) ? (0, m.n)(a + ".init") : a.init).apply(this, c)
    };
    m.f.Qv = function(a) {
        this.lv(a);
        this.j || (this.k && (0, m.Lh)(this.k), this.A && (0, m.Ra)(this.A, (0, m.r)(function() {
            (this.j = !0) && this.o && this.Zl(a)
        }, this)))
    };
    m.f.Pv = function(a) {
        this.Kv(a);
        this.o = !0;
        this.j && this.o && this.Zl(a)
    };
    var Np = {};
    (0, m.s)(Pp, Lp);
    Pp.prototype.Kv = function(a) {
        if (!this.b)
            if (a) {
                if (a = (0, m.H)(a.currentTarget, "upsell"), "settings" == a || "upload" == a || "playlist" == a || "guide" == a || "comment" == a) this.b = a
            } else this.b = "default"
    };
    Pp.prototype.Zl = function() {
        switch (this.b) {
            case "settings":
                this.g = "/profile";
                break;
            case "guide":
                this.g = (0, m.v)("CREATE_CHANNEL_NEXT_URL_GUIDE");
                break;
            case "upload":
                this.g = (0, m.v)("CREATE_CHANNEL_NEXT_URL_UPLOAD");
                break;
            default:
                this.g = window.document.location.href
        }(0, m.v)("CREATE_CHANNEL_NEXT_URL") && (this.g = (0, m.v)("CREATE_CHANNEL_NEXT_URL"));
        if ((0, m.v)("CREATE_CHANNEL_USERNAME_MODE")) this.ql("yt.www.account.CreateChannelDialog", this.C, this.b, this.g);
        else if (!this.B) {
            this.B = !0;
            var a = this.J,
                b = {
                    session_token: (0, m.ad)("create_channel_ajax")
                };
            b.session_token = (0, m.ad)("create_channel_ajax");
            a = (0, m.r)(this.ZD, this, !1, a || null);
            Kp(this, "JSON", "/create_channel_ajax", {
                action_get_type: 1
            }, b, a)
        }
    };
    Pp.prototype.C = function() {
        var a = (0, m.v)("CREATE_CHANNEL_NEXT_URL");
        a && ("/" == a ? (0, m.Bi)(a) : window.history.back())
    };
    Pp.prototype.J = function(a) {
        this.B = !1;
        switch (a.type) {
            case 4:
            case 6:
            case 7:
                Mp(nr).open("create-channel-identity", "/create_channel_ajax", "create_channel_ajax", !0, !0, this.b, this.g);
                break;
            case 2:
                this.ql("yt.www.account.CreateGplusDialog", this.C, this.b, this.g);
                break;
            default:
                this.ql("yt.www.account.CreateChannelDialog", this.C, this.b, this.g)
        }
    };
    var Sp = (0, m.Qc)({
        LP: "yt-alert-success",
        ERROR: "yt-alert-error",
        iQ: "yt-alert-warn",
        rL: "yt-alert-announce",
        GN: "yt-alert-info",
        FP: "yt-alert-status",
        qP: "yt-alert-promo"
    });
    var Vp, dq, aq, Wp, Xp, Yp, gq, bq, iB = [];
    var iq = {},
        kq = {};
    var rq = 0,
        mq = 0,
        vq = 0,
        tq = !1,
        nq = [],
        pq = [],
        Cq = [];
    m.Fq = -2;
    m.Rq = !1;
    m.Yq = !1;
    m.Tq = !1;
    m.Mq = !1;
    m.Zq = null;
    m.$q = null;
    m.Wq = null;
    m.Oq = null;
    m.Nq = null;
    m.Uq = null;
    var dr = [],
        jB = [],
        lr = null;
    br.prototype.C = function(a) {
        a = Qj(a);
        var b = Sj(a, "invalid_request"),
            c = Sj(a, "missing_setting_type"),
            d = Sj(a, "already_seen_dialog");
        if (!(b || c || d))
            if (b = (0, m.D)("feed-privacy-dialog"), c = (0, m.ar)(), d = Sj(a, "success_message")) {
                var e = (0, m.D)("alerts");
                a = Sj(a, "alert_template");
                a = (0, m.Sf)(a);
                (0, m.Rp)("yt-alert-success", d, a, e);
                (0, m.jg)(b);
                window.scroll(0, 0);
                (0, m.gm)(this.b, "cancel");
                c && c.playVideo && c.playVideo()
            } else c && c.pauseVideo && c.pauseVideo(), b.innerHTML = Sj(a, "html_content"), jB.push((0, m.hg)(b, "click", (0, m.r)(this.g,
                this, !1), "make-activity-public-button")), jB.push((0, m.hg)(b, "click", (0, m.r)(this.g, this, !0), "make-activity-private-button")), (0, m.zq)(b), $l(this.b, "content"), this.b.show()
    };
    br.prototype.B = function() {
        (0, m.gm)(this.b, "cancel")
    };
    br.prototype.g = function(a) {
        var b = {};
        b[a ? "action_make_private" : "action_make_public"] = "1";
        a = {
            setting_type: this.i
        };
        $l(this.b, "working");
        mr(this, b, a)
    };
    (0, m.s)(nr, Ip);
    m.f = nr.prototype;
    m.f.iv = function() {
        return !0
    };
    m.f.zu = function() {};
    m.f.close = function(a) {
        this.C = !1;
        (0, m.gm)(this.j, a || "close");
        this.dispose()
    };
    m.f.create = function(a, b, c, d) {
        this.C && (b && (this.B = b), c && (this.F = c), a && !this.k ? this.pH({}, d) : this.Sp())
    };
    m.f.open = function(a, b, c, d, e, g, h, k, p) {
        this.A = a;
        this.L = b;
        this.P = c;
        if (this.iv()) {
            t: {
                if (this.k) this.reset();
                else {
                    this.o = (0, m.D)(this.A + "-lb");
                    if (!this.o) break t;
                    this.j = new m.Zl(this.o, k)
                }
                pr(this, "loading");
                try {
                    this.j.setTitle("")
                } catch (u) {}
                this.j.show();this.C = !0
            }
            d && this.create(e, g, h, p)
        }
    };
    m.f.reset = function() {
        this.k && qr(this)
    };
    m.f.pH = function(a, b, c, d, e) {
        arguments.length && pr(this, e || "loading");
        var g = a || {};
        this.B && (g.feature = this.B);
        this.F && (g.next = this.F);
        var h = b || {};
        h.session_token = (0, m.ad)(this.P);
        Kp(this, "XML", this.L, g, h, (0, m.r)(this.MH, this, c || null), d)
    };
    m.f.Sp = function(a) {
        a && ((0, m.D)(this.A + "-dialog").innerHTML = a);
        this.b = (0, m.O)("yt-dialog-fg", this.o);
        a = (0, m.O)("yt-pd-params", this.o);
        this.O = (0, m.H)(a, "start-page") || "";
        this.Ba(this.b, "click", this.ME, "yt-pd-close");
        this.Ba(this.b, "click", this.LE, "yt-pd-setclass");
        this.Ba(this.b, "click", this.NE, "yt-pd-setpage");
        this.zu();
        pr(this, "content");
        this.k = !0;
        qr(this)
    };
    m.f.ME = function() {
        this.close("cancel")
    };
    m.f.LE = function(a) {
        a = (0, m.Q)(a.target, "yt-pd-setclass");
        var b = (0, m.H)(a, "off");
        b && (0, m.Id)(this.b, b, !1);
        (a = (0, m.H)(a, "on")) && (0, m.Id)(this.b, a, !0)
    };
    m.f.NE = function(a) {
        a = (0, m.Q)(a.target, "yt-pd-setpage");
        (a = (0, m.H)(a, "state-container-id")) && qr(this, a)
    };
    m.f.dm = function(a) {
        nr.D.dm.call(this, a);
        this.close()
    };
    m.f.MH = function(a, b) {
        var c = Qj(b);
        if (c) {
            var d = Sj(c, "not_eligible"),
                e = Sj(c, "error_message");
            d || e ? this.dm(b) : Jp(b) || (c = Sj(c, "html_content") || void 0, a ? a(b, (0, m.r)(this.Sp, this, c)) : this.Sp(c))
        }
    };
    (0, m.s)(rr, nr);
    m.f = rr.prototype;
    m.f.iv = function() {
        var a = (0, m.ar)();
        a && a.pauseVideo && a.pauseVideo();
        return !0
    };
    m.f.zu = function() {
        this.g || (this.g = []);
        this.g.push((0, m.hg)(this.b, "click", (0, m.r)(this.FE, this), "identity-prompt-account-list-item"));
        this.g.push((0, m.hg)(this.b, "click", (0, m.r)(this.GE, this), "specialized-identity-prompt-account-item"))
    };
    m.f.Ov = function() {
        this.g && ((0, m.S)(this.g), this.g = [])
    };
    m.f.FE = function(a) {
        var b = (0, m.D)("identity-prompt-confirm-button");
        b ? b.disabled = !1 : (b = (0, m.D)("identity-prompt-form"), a = (0, m.fe)("input", void 0, a.currentTarget), b && a && 1 == a.length && (a[0].checked = !0, b.submit()))
    };
    m.f.GE = function(a) {
        a = (0, m.H)(a.currentTarget, "switch-url");
        (0, m.Bi)(a)
    };
    var Hr, Er, Jr, Kr, tr = [],
        Gr = !1,
        Dr = !1,
        wr = [];
    var Or = [],
        Pr = [];
    m.f = Sr.prototype;
    m.f.get = function(a, b) {
        var c = Ur(this, a);
        return c ? c.value : b
    };
    m.f.set = function(a, b) {
        var c = Ur(this, a);
        c ? c.value = b : (c = new Tr(a, b), this.g.set(a, c), Vr(this, c))
    };
    m.f.shift = function() {
        return Xr(this, this.b.next)
    };
    m.f.pop = function() {
        return Xr(this, this.b.b)
    };
    m.f.remove = function(a) {
        return (a = this.g.get(a)) ? (a.remove(), this.g.remove(a.key), !0) : !1
    };
    m.f.Za = function() {
        return this.g.Za()
    };
    m.f.isEmpty = function() {
        return this.g.isEmpty()
    };
    m.f.Yc = function() {
        return this.map(function(a, b) {
            return b
        })
    };
    m.f.Ib = function() {
        return this.map(function(a) {
            return a
        })
    };
    m.f.contains = function(a) {
        return this.some(function(b) {
            return b == a
        })
    };
    m.f.clear = function() {
        Wr(this, 0)
    };
    m.f.forEach = function(a, b) {
        for (var c = this.b.next; c != this.b; c = c.next) a.call(b, c.value, c.key, this)
    };
    m.f.map = function(a, b) {
        for (var c = [], d = this.b.next; d != this.b; d = d.next) c.push(a.call(b, d.value, d.key, this));
        return c
    };
    m.f.some = function(a, b) {
        for (var c = this.b.next; c != this.b; c = c.next)
            if (a.call(b, c.value, c.key, this)) return !0;
        return !1
    };
    m.f.every = function(a, b) {
        for (var c = this.b.next; c != this.b; c = c.next)
            if (!a.call(b, c.value, c.key, this)) return !1;
        return !0
    };
    Tr.prototype.remove = function() {
        this.b.next = this.next;
        this.next.b = this.b;
        delete this.b;
        delete this.next
    };
    var as = "http://www.youtube.com https://www.youtube.com https://plus.google.com https://plus.sandbox.google.com https://plusone.google.com https://plusone.sandbox.google.com https://apis.google.com https://apis.sandbox.google.com".split(" "),
        bs = "subscription-subscribe-success subscription-unsubscribe-success subscription-subscribe-loading subscription-unsubscirbe-loading subscription-subscribe-loaded subscription-unsubscribe-loaded subscription-subscribe-failure subscription-unsubscribe-failure subscription-enable-ypc subscription-disable-ypc".split(" ");
    var $r, es = {},
        cs = [],
        gs = new Sr(10);
    var kB = [],
        ls = "";
    var lB = [],
        us = [];
    var ys = !1,
        mB = [];
    var Rs = 2,
        nB = [];
    m.f = m.Ts.prototype;
    m.f.Za = function() {
        return this.b.Za()
    };
    m.f.add = function(a) {
        this.b.set(Us(a), a)
    };
    m.f.removeAll = function(a) {
        a = bi(a);
        for (var b = a.length, c = 0; c < b; c++) this.remove(a[c])
    };
    m.f.remove = function(a) {
        return this.b.remove(Us(a))
    };
    m.f.clear = function() {
        this.b.clear()
    };
    m.f.isEmpty = function() {
        return this.b.isEmpty()
    };
    m.f.contains = function(a) {
        a = Us(a);
        return Zh(this.b.g, a)
    };
    m.f.Ib = function() {
        return this.b.Ib()
    };
    m.f.clone = function() {
        return new m.Ts(this)
    };
    m.f.equals = function(a) {
        return this.Za() == ai(a) && Vs(this, a)
    };
    m.f.uc = function() {
        return this.b.uc(!1)
    };
    var $s = {};
    var dt = {},
        ct = 0;
    var oB = !1,
        pB = "";
    if (window.navigator.plugins && window.navigator.plugins.length) {
        var qB = window.navigator.plugins["Shockwave Flash"];
        qB && (oB = !0, qB.description && (pB = ht(qB.description)));
        window.navigator.plugins["Shockwave Flash 2.0"] && (oB = !0, pB = "2.0.0.11")
    } else if (window.navigator.mimeTypes && window.navigator.mimeTypes.length) {
        var rB = window.navigator.mimeTypes["application/x-shockwave-flash"];
        (oB = rB && rB.enabledPlugin) && (pB = ht(rB.enabledPlugin.description))
    } else try {
        var sB = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),
            oB = !0,
            pB = ht(sB.GetVariable("$version"))
    } catch (aaa) {
        try {
            sB = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), oB = !0, pB = "6.0.21"
        } catch (baa) {
            try {
                sB = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash"), oB = !0, pB = ht(sB.GetVariable("$version"))
            } catch (caa) {}
        }
    }
    var rt = pB;
    var qt = function() {
        if (st) return it(/Firefox\/([0-9.]+)/);
        if (m.Zd || m.sg) return Xd;
        if (m.ut) return it(/Chrome\/([0-9.]+)/);
        if (m.tt) return it(/Version\/([0-9.]+)/);
        if (m.IA || m.JA) {
            var a;
            if (a = /Version\/(\S+).*Mobile\/(\S+)/.exec((0, m.Sd)())) return a[1] + "." + a[2]
        } else {
            if (m.KA) return (a = it(/Android\s+([0-9.]+)/)) ? a : it(/Version\/([0-9.]+)/);
            if (HA) return it(/Camino\/([0-9.]+)/)
        }
        return ""
    }();
    var tB = [],
        mt = {},
        uB = [],
        ot = !1;
    var Et = 0,
        xt = [],
        Bt = {},
        Gt = [];
    var vB = [];
    (0, m.l)("yt.www.errors.log", bt, void 0);
    (0, m.l)("yt.style.show", m.T.show, void 0);
    (0, m.l)("yt.style.hide", m.T.hide, void 0);
    (0, m.l)("yt.style.toggle", m.T.toggle, void 0);
    (0, m.l)("yt.net.ping.send", m.Ua, void 0);
    (0, m.l)("yt.tracking.track", m.Ff, void 0);
    (0, m.l)("yt.tracking.share", m.If, void 0);
    (0, m.l)("yt.uix.FormInput.selectOnChangeActionIE", function(a) {
        m.Ll.getInstance().kd(a)
    }, void 0);
    (0, m.l)("yt.window.popup", m.Gi, void 0);
    (0, m.l)("yt.www.account.CreateChannelLoader.show", function(a) {
        Qp(!0, a)
    }, void 0);
    (0, m.l)("yt.www.account.FeedPrivacyDialog.init", cr, void 0);
    (0, m.l)("yt.www.account.LinkGplusLoader.init", sr, void 0);
    (0, m.l)("yt.www.account.LinkGplusLoader.show", Mr, void 0);
    (0, m.l)("yt.www.feedback.start", function(a, b) {
        try {
            var c = lt(b);
            try {
                var d = (0, m.ar)();
                d && d.pauseVideo && d.pauseVideo();
                var e = zh.getInstance();
                c.flashVersion = e.getVersion().join(".");
                d && (c.playback_id = d.getVideoData().cpn)
            } catch (g) {}
            et(nt(a), c);
            return !1
        } catch (h) {
            return !0
        }
    }, void 0);
    (0, m.l)("yt.www.feedback.startHelp", kt, void 0);
    (0, m.s)(Ht, m.Ma);
    Ht.prototype.enable = function() {
        Ht.D.enable.call(this);
        for (var a = (0, m.Ba)(), b = wB.length, c = 0; c < b; c++)
            if (a) {
                var d = (0, m.E)(m.el, wB[c]);
                this.b.push((0, m.Da)(d))
            } else(0, m.el)(wB[c]);
        this.M("init", Nl);
        this.M("init", this.init, this);
        this.M("dispose", this.dispose, this);
        this.init()
    };
    Ht.prototype.init = function() {
        at();
        hB.push((0, m.R)(window, "resize", cn));
        var a = new m.Xm(en, 200);
        hB.push((0, m.R)(window, "scroll", (0, m.r)(a.Ki, a)));
        (0, m.I)(window.document.body, "page-loaded");
        var a = m.qh.getInstance(),
            b = 1 < window.devicePixelRatio;
        (0, m.vh)(0, 119) != b && ((0, m.wh)(119, b), a.save());
        (0, m.Ba)() ? (this.b.push((0, m.Da)(lq)), this.b.push((0, m.Da)(Nl))) : (lq(), (0, m.Ol)());
        wt();
        m.fj && m.fj.g();
        (0, m.v)("CREATE_CHANNEL_LIGHTBOX") && Qp();
        (0, m.v)("FEED_PRIVACY_LIGHTBOX_ENABLED") && cr();
        (0, m.v)("SHOW_IDENTITY_PROMPT_LIGHTBOX") &&
        (a = Mp(rr), b = (0, m.v)("IDENTITY_PROMPT_PAGEID"), a.open("identity-prompt", "/identity_prompt_ajax", "identity_prompt_ajax", !0, !0, void 0, (0, m.v)("IDENTITY_PROMPT_NEXT_URL", window.document.location.href), !0, b ? {
            pageid: b
        } : void 0));
        (0, m.v)("SHOW_LINK_GPLUS_LIGHTBOX") ? Mr(): (0, m.v)("LINK_GPLUS_LIGHTBOX_ENABLED") && sr();
        uB.push((0, m.y)("player-ad-start", vt));
        tB.push((0, m.hg)(window.document.body, "click", jt, "yt-google-help-link"));
        pt();
        a = !!(0, m.O)("guide-module-loading");
        (window.ytspf || {}).enabled && a && "watch" !=
            (0, m.v)("PAGE_NAME") && (0, m.Qr)(["guide"]);
        $k("addto-watch-later-button", "click", ns);
        $k("addto-watch-later-button-success", "click", qs);
        $k("addto-watch-later-button-sign-in", "click", ks);
        kB.push((0, m.hg)((0, m.D)("shared-addto-watch-later-login"), "click", ms, "sign-in-link"));
        (0, m.v)("WATCH_LATER_VIDEO_ID_TO_LOAD") && (0, m.is)({
            ob: (0, m.v)("WATCH_LATER_VIDEO_ID_TO_LOAD")
        });
        a = window.ytspf || {};
        Vp = !!(0, m.v)("SPF_PREFETCH") && !!a.enabled;
        dq = (0, m.v)("SPF_PREFETCH_MAX") || 0;
        aq = !!window.spf && (!!(0, m.v)("PREFETCH_CSS_RESOURCES") ||
            !!(0, m.v)("PREFETCH_JS_RESOURCES"));
        "watch" != (0, m.v)("PAGE_NAME") && ((0, m.Up)(), $p());
        ys = !1;
        mB.push((0, m.y)("subscription-subscribe", xs));
        mB.push((0, m.y)("subscription-unsubscribe", As));
        ys || (mB.push((0, m.y)("subscription-external-subscribe", xs)), mB.push((0, m.y)("subscription-external-unsubscribe", As)), mB.push((0, m.y)("subscription-batch-subscribe", Cs)), mB.push((0, m.y)("subscription-batch-unsubscribe", Es)), mB.push((0, m.y)("subscription-pref-email", Fs)), mB.push((0, m.y)("subscription-pref-uploads", Hs)),
            mB.push((0, m.y)("subscription-prefs", Ls)), mB.push((0, m.y)("subscription-batch-pref-email", Is)), mB.push((0, m.y)("subscription-batch-pref-uploads", Ks)), mB.push((0, m.y)("ypc-purchase-success", Ms)), mB.push((0, m.y)("ypc-subscription-cancel-success", Os)), mB.push((0, m.y)("ypc-guide-sync-success", Ns)), ZA.push((0, m.y)("subscription-subscribe-success", (0, m.E)(m.Pk, "subscribe")), (0, m.y)("subscription-unsubscribe-success", (0, m.E)(m.Pk, "unsubscribe")), (0, m.y)("player-subscribe", (0, m.E)(m.Pk, "subscribe")), (0, m.y)("player-unsubscribe",
                (0, m.E)(m.Pk, "unsubscribe"))));
        lB.push((0, m.y)("subscription-show-pref-overlay", ss));
        (0, m.v)("RESOLUTION_TRACKING_ENABLED") && (a = "CSS1Compat" == window.document.compatMode ? window.document.documentElement : window.document.body, a = {
            a: "resolution",
            width: window.screen.width,
            height: window.screen.height,
            depth: window.screen.colorDepth,
            win_width: a.clientWidth,
            win_height: a.clientHeight
        }, window.devicePixelRatio && (a.pixel_ratio = window.devicePixelRatio), (0, m.Hf)((0, m.Af)(a)));
        (0, m.v)("MEMORY_TRACKING_ENABLED") && window.performance &&
            window.performance.memory && (a = window.performance.memory, b = window._spf_state, (0, m.Hf)((0, m.Af)({
                a: "memory",
                navCounter: b ? b["nav-counter"] : -1,
                heapLimit: a.jsHeapSizeLimit,
                usedHeapSize: a.usedJSHeapSize,
                totalHeapSize: a.totalJSHeapSize
            })));
        a = (0, m.E)(m.Rk, "add_to_playlist");
        YA.push((0, m.y)("player-watchlater", a), (0, m.y)("playlist-favorite", a), (0, m.y)("playlist-addto", a));
        (0, m.wd)(window.document.body, "exp-vve") && Cp();
        for (a = 0; a < window.document.forms.length; a++) {
            for (var c = !1, b = 0; b < vB.length; b++) window.document.forms[a].name ==
                vB[b] && (c = !0);
            b = window.document.forms[a];
            if ("post" == b.method.toLowerCase() && !1 == c) {
                for (var c = !1, d = 0; d < b.elements.length; d++) b.elements[d].name == (0, m.v)("XSRF_FIELD_NAME") && (c = !0);
                c || (c = void 0, c = (0, m.v)("XSRF_TOKEN"), d = window.document.createElement("input"), d.setAttribute("name", (0, m.v)("XSRF_FIELD_NAME")), d.setAttribute("type", "hidden"), d.setAttribute("value", c), b.appendChild(d))
            }
        }(0, m.v)("YPC_LOADER_ENABLED") && ((0, m.O)("ypc-delayedloader-target") && Qs(), nB.push((0, m.y)("ypc-delayedloader-load", Qs)));
        (0, m.Ba)() ? this.b.push((0, m.Da)(Sk)): Sk();
        (0, m.Ba)() ? this.b.push((0, m.Da)(Yr, 200)): Yr();
        (0, m.Ba)() ? this.b.push((0, m.Da)(m.un)): (0, m.un)();
        try {
            if (window.ytbuffer && window.ytbuffer.queue) {
                for (var e = window.ytbuffer.queue, a = 0; 5 > a && a < e.length; a++) {
                    var g = e[a],
                        h = g.target || g.srcElement;
                    (0, m.Hf)((0, m.Af)({
                        a: "buffer_events",
                        event_index: a,
                        clientX: g.clientX,
                        clientY: g.clientY,
                        localName: h.localName,
                        className: h.className,
                        id: h.id,
                        page_name: (0, m.v)("PAGE_NAME")
                    }))
                }
                window.document.removeEventListener ? window.document.removeEventListener("click",
                    window.ytbuffer.enqueueEvent, !1) : window.document.detachEvent("onclick", window.ytbuffer.enqueueEvent);
                (0, m.Wc)("ytbuffer")
            }
        } catch (k) {}
        lg()
    };
    Ht.prototype.dispose = function() {
        (0, m.Vc)(this.b);
        this.b.length = 0;
        (0, m.J)(window.document.body, "page-loaded");
        (0, m.x)(dn);
        dn = 0;
        (0, m.S)(hB);
        hB.length = 0;
        bn = $m = null;
        tq = !1;
        vq = rq = mq = 0;
        (0, m.Ka)(nq);
        nq.length = 0;
        (0, m.A)(pq, m.x);
        pq.length = 0;
        iq = {};
        kq = {};
        (0, m.Vc)(Cq);
        Et = Cq.length = 0;
        (0, m.Ka)(xt);
        xt.length = 0;
        Gt.length = 0;
        Bt = {};
        m.fj && m.fj.g();
        (0, m.Op)(Pp);
        (0, m.Ka)(dr);
        dr = [];
        (0, m.S)(jB);
        jB = [];
        (0, m.Op)(rr);
        (0, m.Ka)(wr);
        wr.length = 0;
        (0, m.S)(tr);
        tr.length = 0;
        Hr = !1;
        (0, m.Ka)(uB);
        (0, m.S)(tB);
        uB.length = 0;
        tB.length = 0;
        mt = {};
        Nr();
        bl("addto-watch-later-button", "click", ns);
        bl("addto-watch-later-button-success", "click", qs);
        bl("addto-watch-later-button-sign-in", "click", ks);
        (0, m.S)(kB);
        kB = [];
        (0, m.Ka)(YA);
        YA = [];
        Wp = aq = Vp = !1;
        dq = Xp = 0;
        Yp = null;
        (0, m.x)(gq);
        (0, m.x)(bq);
        (0, m.S)(iB);
        iB.length = 0;
        mB && ((0, m.Ka)(mB), mB.length = 0, ys = !1);
        (0, m.Ka)(ZA);
        ZA.length = 0;
        (0, m.Ka)(lB);
        lB = [];
        (0, m.S)(us);
        us = [];
        (0, m.wd)(window.document.body, "exp-vve") && (Dp.stop(), (0, m.x)(Gp), Ep());
        Rs = 2;
        nB && ((0, m.Ka)(nB), nB = []);
        (0, m.Ka)(Uk);
        (0, m.Ka)(cs);
        cs.length = 0;
        for (var a in es) delete es[a];
        (a = (0, m.n)("gapi.card.unwatch")) && a()
    };
    Ht.prototype.disable = function() {
        Ht.D.disable.call(this);
        (0, m.Vc)(this.b);
        this.b.length = 0;
        for (var a = wB.length, b = 0; b < a; b++)(0, m.gl)(wB[b])
    };
    var wB = [m.kl, Al, m.Gl, Hl, m.Il, m.Ll, m.Ul, Vl, m.hm, nm, pm, m.wn, xn, m.zn, m.Vn, eo, m.go, m.fn, io, m.Mn];
    (0, m.Na)(new Ht);
    (0, m.s)(m.It, m.Sm);
    m.f = m.It.prototype;
    m.f.$c = function() {
        this.Fb("begin")
    };
    m.f.Md = function() {
        this.Fb("end")
    };
    m.f.za = function() {
        this.Fb("finish")
    };
    m.f.onStop = function() {
        this.Fb("stop")
    };
    m.f.Fb = function(a) {
        (0, m.Tm)(this, a)
    };
    (0, m.s)(m.Jt, m.t);
    m.f = m.Jt.prototype;
    m.f.Fa = 0;
    m.f.G = function() {
        m.Jt.D.G.call(this);
        this.stop();
        delete this.b;
        delete this.T
    };
    m.f.start = function(a) {
        this.stop();
        this.Fa = (0, m.Wm)(this.Xb, (0, m.Ec)(a) ? a : this.g)
    };
    m.f.stop = function() {
        0 != this.Fa && m.ca.clearTimeout(this.Fa);
        this.Fa = 0
    };
    m.f.qE = function() {
        this.Fa = 0;
        this.b && this.b.call(this.T)
    };
    var Lt = {},
        Mt = null;
    (0, m.s)(Qt, m.It);
    m.f = Qt.prototype;
    m.f.pe = 0;
    m.f.play = function(a) {
        if (a || 0 == this.b) this.pe = 0, this.g = this.j;
        else if (1 == this.b) return !1;
        Kt(this);
        this.startTime = a = (0, m.C)(); - 1 == this.b && (this.startTime -= this.duration * this.pe);
        this.endTime = this.startTime + this.duration;
        this.pe || this.$c();
        this.Fb("play"); - 1 == this.b && this.Fb("resume");
        this.b = 1;
        var b = (0, m.Ac)(this);
        b in Lt || (Lt[b] = this);
        Nt();
        Pt(this, a);
        return !0
    };
    m.f.stop = function(a) {
        Kt(this);
        this.b = 0;
        a && (this.pe = 1);
        Rt(this, this.pe);
        this.onStop();
        this.Md()
    };
    m.f.pause = function() {
        1 == this.b && (Kt(this), this.b = -1, this.Fb("pause"))
    };
    m.f.G = function() {
        0 == this.b || this.stop(!1);
        this.Fb("destroy");
        Qt.D.G.call(this)
    };
    m.f.destroy = function() {
        this.dispose()
    };
    m.f.dp = function() {
        this.Fb("animate")
    };
    m.f.Fb = function(a) {
        (0, m.Tm)(this, new St(a, this))
    };
    (0, m.s)(St, m.qm);
    (0, m.s)(m.Tt, Qt);
    m.Tt.prototype.i = m.da;
    m.Tt.prototype.dp = function() {
        this.i();
        m.Tt.D.dp.call(this)
    };
    m.Tt.prototype.Md = function() {
        this.i();
        m.Tt.D.Md.call(this)
    };
    m.Tt.prototype.$c = function() {
        this.i();
        m.Tt.D.$c.call(this)
    };
    (0, m.s)(m.Ut, m.Tt);
    m.Ut.prototype.i = function() {
        this.element.style.left = Math.round(this.g[0]) + "px";
        this.element.style.top = Math.round(this.g[1]) + "px"
    };
    (0, m.s)(Vt, m.Tt);
    Vt.prototype.i = function() {
        (0, m.$g)(this.element, this.g[0])
    };
    Vt.prototype.show = function() {
        this.element.style.display = ""
    };
    Vt.prototype.hide = function() {
        this.element.style.display = "none"
    };
    (0, m.s)(m.Wt, Vt);
    m.Wt.prototype.$c = function() {
        this.show();
        m.Wt.D.$c.call(this)
    };
    m.Wt.prototype.Md = function() {
        this.hide();
        m.Wt.D.Md.call(this)
    };
    (0, m.s)(m.Xt, Vt);
    m.Xt.prototype.$c = function() {
        this.show();
        m.Xt.D.$c.call(this)
    };
    var xB = new Zt(24);
    Zt.prototype.j = function() {
        for (var a = (0, m.C)(), b = this.b.length - 1; 0 <= b; b--) ru(this.b[b], a) && $t(this, b)
    };
    Zt.prototype.add = function(a) {
        this.b.push(a);
        this.g || (this.g = (0, m.$c)((0, m.r)(this.j, this), this.i))
    };
    Zt.prototype.remove = function(a) {
        a = (0, m.la)(this.b, a);
        0 <= a && $t(this, a)
    };
    au.prototype.clone = function() {
        return new au(this.b, this.A, this.i, this.k, this.j, this.o, this.g, this.C)
    };
    au.prototype.equals = function(a) {
        return this.b == a.b && this.A == a.A && this.i == a.i && this.k == a.k && this.j == a.j && this.o == a.o && this.g == a.g && this.C == a.C
    };
    var hu = new eu({
            x: 0.25,
            y: 0.1
        }, {
            x: 0.25,
            y: 1
        }),
        ju = new eu({
            x: 0.42,
            y: 0
        }, {
            x: 1,
            y: 1
        }),
        lu = new eu({
            x: 0,
            y: 0
        }, {
            x: 0.58,
            y: 1
        }),
        nu = new eu({
            x: 0.42,
            y: 0
        }, {
            x: 0.58,
            y: 1
        });
    pu.prototype.b = function() {};
    (0, m.s)(qu, pu);
    qu.prototype.b = function(a) {
        this.j = 0;
        this.o = a.loop || xB;
        this.C = ou(this.Ni)
    };
    qu.prototype.play = function() {
        this.i = (0, m.C)();
        ru(this, this.i);
        this.o.add(this)
    };
    qu.prototype.pause = function() {
        this.o.remove(this)
    };
    qu.prototype.za = function() {};
    (0, m.s)(m.su, qu);
    m.su.prototype.b = function(a) {
        m.su.D.b.call(this, a);
        this.Va = a.start;
        this.g = a.end
    };
    m.su.prototype.k = function(a) {
        this.gb.scrollTop = (this.g - this.Va) * a + this.Va
    };
    (0, m.s)(m.tu, m.t);
    var yB = [];
    m.f = m.tu.prototype;
    m.f.listen = function(a, b, c, d) {
        (0, m.fa)(b) || (yB[0] = b, b = yB);
        for (var e = 0; e < b.length; e++) {
            var g = (0, m.Cm)(a, b[e], c || this.handleEvent, d || !1, this.T || this);
            if (!g) break;
            this.b[g.key] = g
        }
        return this
    };
    m.f.rb = function(a, b, c, d, e) {
        if ((0, m.fa)(b))
            for (var g = 0; g < b.length; g++) this.rb(a, b[g], c, d, e);
        else c = c || this.handleEvent, e = e || this.T || this, c = Dm(c), d = !!d, b = (0, m.tm)(a) ? Am(a.Te, String(b), c, d, e) : a ? (a = (0, m.Fm)(a)) ? Am(a, b, c, d, e) : null : null, b && ((0, m.Om)(b), delete this.b[b.key]);
        return this
    };
    m.f.removeAll = function() {
        (0, m.Qa)(this.b, m.Om);
        this.b = {}
    };
    m.f.G = function() {
        m.tu.D.G.call(this);
        this.removeAll()
    };
    m.f.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };
    (0, m.s)(uu, m.It);
    uu.prototype.add = function(a) {
        (0, m.lc)(this.g, a) || (this.g.push(a), (0, m.Cm)(a, "finish", this.j, !1, this))
    };
    uu.prototype.remove = function(a) {
        (0, m.ka)(this.g, a) && (0, m.Nm)(a, "finish", this.j, !1, this)
    };
    uu.prototype.G = function() {
        (0, m.A)(this.g, function(a) {
            a.dispose()
        });
        this.g.length = 0;
        uu.D.G.call(this)
    };
    (0, m.s)(m.vu, uu);
    m.vu.prototype.play = function(a) {
        if (0 == this.g.length) return !1;
        if (a || 0 == this.b) this.i = 0, this.$c();
        else if (1 == this.b) return !1;
        this.Fb("play"); - 1 == this.b && this.Fb("resume");
        var b = -1 == this.b && !a;
        this.startTime = (0, m.C)();
        this.endTime = null;
        this.b = 1;
        (0, m.A)(this.g, function(c) {
            b && -1 != c.b || c.play(a)
        });
        return !0
    };
    m.vu.prototype.pause = function() {
        1 == this.b && ((0, m.A)(this.g, function(a) {
            1 == a.b && a.pause()
        }), this.b = -1, this.Fb("pause"))
    };
    m.vu.prototype.stop = function(a) {
        (0, m.A)(this.g, function(b) {
            0 == b.b || b.stop(a)
        });
        this.b = 0;
        this.endTime = (0, m.C)();
        this.onStop();
        this.Md()
    };
    m.vu.prototype.j = function() {
        this.i++;
        this.i == this.g.length && (this.endTime = (0, m.C)(), this.b = 0, this.za(), this.Md())
    };
    (0, m.s)(m.wu, uu);
    m.wu.prototype.play = function(a) {
        if (0 == this.g.length) return !1;
        if (a || 0 == this.b) this.i < this.g.length && 0 != this.g[this.i].b && this.g[this.i].stop(!1), this.i = 0, this.$c();
        else if (1 == this.b) return !1;
        this.Fb("play"); - 1 == this.b && this.Fb("resume");
        this.startTime = (0, m.C)();
        this.endTime = null;
        this.b = 1;
        this.g[this.i].play(a);
        return !0
    };
    m.wu.prototype.pause = function() {
        1 == this.b && (this.g[this.i].pause(), this.b = -1, this.Fb("pause"))
    };
    m.wu.prototype.stop = function(a) {
        this.b = 0;
        this.endTime = (0, m.C)();
        if (a)
            for (a = this.i; a < this.g.length; ++a) {
                var b = this.g[a];
                0 == b.b && b.play();
                0 == b.b || b.stop(!0)
            } else this.i < this.g.length && this.g[this.i].stop(!1);
        this.onStop();
        this.Md()
    };
    m.wu.prototype.j = function() {
        1 == this.b && (this.i++, this.i < this.g.length ? this.g[this.i].play() : (this.endTime = (0, m.C)(), this.b = 0, this.za(), this.Md()))
    };
    var yu;
    (0, m.s)(zu, pu);
    zu.prototype.setProperty = function(a, b) {
        a = xu() + a;
        this.gb.style[a] = b
    };
    zu.prototype.play = function() {
        this.gb.style.opacity = this.Va;
        (0, m.w)((0, m.r)(function() {
            this.setProperty("TransitionTimingFunction", this.Ni);
            this.setProperty("TransitionDuration", this.duration + "s");
            this.setProperty("TransitionProperty", "opacity");
            (0, m.eg)(this.gb, m.ne ? "webkitTransitionEnd" : m.sg ? "oTransitionEnd" : "transitionend", (0, m.r)(function() {
                    this.setProperty("TransitionTimingFunction", "");
                    this.setProperty("TransitionDuration", "");
                    this.setProperty("TransitionProperty", "");
                    this.Dk && this.Dk(this)
                },
                this));
            this.gb.style.opacity = this.g
        }, this), 20)
    };
    (0, m.s)(Au, qu);
    Au.prototype.b = function(a) {
        var b = (0, window.parseFloat)(a.start),
            c = (0, window.parseFloat)(a.end);
        this.Va = (0, window.isNaN)(b) ? 1 : b;
        this.g = (0, window.isNaN)(c) ? 0 : c;
        this.A = !(0, m.Ec)(this.gb.style.opacity);
        Au.D.b.call(this, a)
    };
    Au.prototype.k = function(a) {
        a = this.Va - (this.Va - this.g) * a;
        this.A ? this.gb.style.filter = "alpha(opacity=" + Math.floor(100 * a) + ")" : this.gb.style.opacity = a
    };
    Au.prototype.za = function() {
        this.A && 1 == this.g && (this.gb.style.filter = "")
    };
    (0, m.s)(Bu, zu);
    Bu.prototype.b = function(a) {
        var b = (0, window.parseFloat)(a.start),
            c = (0, window.parseFloat)(a.end);
        this.Va = (0, window.isNaN)(b) ? 1 : b;
        this.g = (0, window.isNaN)(c) ? 0 : c;
        Bu.D.b.call(this, a)
    };
    m.f = m.Eu.prototype;
    m.f.Gh = null;
    m.f.eb = null;
    m.f.listen = function(a, b, c, d) {
        c = (0, m.r)(c, d || this.Gh);
        a = (0, m.R)(a, b, c);
        this.eb.push(a);
        return a
    };
    m.f.Ba = function(a, b, c, d, e) {
        c = (0, m.r)(c, e || this.Gh);
        a = (0, m.hg)(a, b, c, d);
        this.eb.push(a);
        return a
    };
    m.f.rb = function(a) {
        (0, m.S)(a);
        (0, m.ka)(this.eb, a)
    };
    m.f.removeAll = function() {
        (0, m.S)(this.eb);
        this.eb = []
    };
    var Mu = [/^\'(?:[^\']|\'\')*\'/, /^(?:G+|y+|M+|k+|S+|E+|a+|h+|K+|H+|c+|L+|Q+|d+|m+|s+|v+|w+|z+|Z+)/, /^[^\'GyMkSEahKHcLQdmsvwzZ]+/];
    Iu.prototype.format = function(a, b) {
        var c = b ? 6E4 * (a.getTimezoneOffset() - (b.g - Hu(b, a))) : 0,
            d = c ? new Date(a.getTime() + c) : a,
            e = d;
        b && d.getTimezoneOffset() != a.getTimezoneOffset() && (e = new Date(a.getTime() + (c + (0 < c ? -864E5 : 864E5))));
        for (var c = [], g = 0; g < this.g.length; ++g) {
            var h = this.g[g].text;
            1 == this.g[g].type ? c.push(Ou(this, h, a, d, e, b)) : c.push(h)
        }
        return c.join("")
    };
    m.f = m.Su.prototype;
    m.f.name = "";
    m.f.Zb = "";
    m.f.md = "";
    m.f.tc = "";
    m.f.lx = function() {
        return {
            key: this.Zb,
            name: this.name
        }
    };
    m.f.toString = function() {
        var a = this.md ? this.md.slice(-6) : "null";
        return "{name:" + this.name + ",screenId:" + this.Zb + ",loungeToken:..." + a + ",dialId:" + this.tc + "}"
    };
    m.f = Vu.prototype;
    m.f.id = "";
    m.f.name = "";
    m.f.activityId = "";
    m.f.status = "UNKNOWN";
    m.f.lx = function() {
        return {
            key: this.id,
            name: this.name
        }
    };
    m.f.toString = function() {
        return "{id:" + this.id + ",name:" + this.name + ",activityId:" + this.activityId + ",status:" + this.status + "}"
    };
    m.zB = m.IA || m.JA;
    (0, m.s)(m.uv, m.t);
    m.uv.prototype.M = function(a, b, c) {
        return this.ma() ? 0 : this.C.M(a, b, c)
    };
    m.uv.prototype.oa = function(a, b, c) {
        return this.ma() ? !1 : this.C.oa(a, b, c)
    };
    m.uv.prototype.ge = function(a) {
        return this.ma() ? !1 : this.C.ge(a)
    };
    m.uv.prototype.K = function(a, b) {
        return this.ma() ? !1 : this.C.K.apply(this.C, arguments)
    };
    var xv, wv = m.Kd;
    var Bv = !1,
        Dv = [];
    Hv.prototype.then = function(a, b, c) {
        return Nv(this, (0, m.ga)(a) ? a : null, (0, m.ga)(b) ? b : null, c)
    };
    Fv(Hv);
    Hv.prototype.cancel = function(a) {
        0 == this.g && Av(function() {
            var b = new Ov(a);
            Jv(this, b)
        }, this)
    };
    Hv.prototype.A = function(a) {
        this.g = 0;
        Iv(this, 2, a)
    };
    Hv.prototype.C = function(a) {
        this.g = 0;
        Iv(this, 3, a)
    };
    Hv.prototype.B = function() {
        for (; this.b && this.b.length;) {
            var a = this.b;
            this.b = [];
            for (var b = 0; b < a.length; b++) Kv(this, a[b], this.g, this.o)
        }
        this.k = !1
    };
    var Rv = zv;
    (0, m.s)(Ov, sd);
    Ov.prototype.name = "cancel";
    /*
     Portions of this code are from MochiKit, received by
     The Closure Authors under the MIT license. All other code is Copyright
     2005-2009 The Closure Authors. All Rights Reserved.
    */
    m.f = m.Sv.prototype;
    m.f.cancel = function(a) {
        if (this.b) this.i instanceof m.Sv && this.i.cancel();
        else {
            if (this.g) {
                var b = this.g;
                delete this.g;
                a ? b.cancel(a) : (b.C--, 0 >= b.C && b.cancel())
            }
            this.J ? this.J.call(this.F, this) : this.B = !0;
            this.b || this.Ne(new m.cw)
        }
    };
    m.f.Br = function(a, b) {
        this.A = !1;
        Tv(this, a, b)
    };
    m.f.Kd = function(a) {
        Vv(this);
        Tv(this, !0, a)
    };
    m.f.Ne = function(a) {
        Vv(this);
        Tv(this, !1, a)
    };
    m.f.then = function(a, b, c) {
        var d, e, g = new Hv(function(a, b) {
            d = a;
            e = b
        });
        (0, m.Yv)(this, d, function(a) {
            a instanceof m.cw ? g.cancel() : e(a)
        });
        return g.then(a, b, c)
    };
    Fv(m.Sv);
    (0, m.s)(Wv, sd);
    Wv.prototype.message = "Deferred has already fired";
    Wv.prototype.name = "AlreadyCalledError";
    (0, m.s)(m.cw, sd);
    m.cw.prototype.message = "Deferred was canceled";
    m.cw.prototype.name = "CanceledError";
    bw.prototype.g = function() {
        delete $v[this.Fa];
        throw this.b;
    };
    var $v = {},
        aw = 0;
    (0, m.ud)(m.fw);
    m.fw.prototype.b = 0;
    (0, m.s)(m.gw, m.Sm);
    m.f = m.gw.prototype;
    m.f.iG = m.fw.getInstance();
    m.f.Fa = null;
    m.f.nb = !1;
    m.f.S = null;
    m.f.zd = null;
    m.f.jd = null;
    m.f.oe = null;
    m.f.Gu = !1;
    m.f.getId = function() {
        return this.Fa || (this.Fa = ":" + (this.iG.b++).toString(36))
    };
    m.f.H = function() {
        return this.S
    };
    m.f.ee = (0, m.aa)(10);
    m.f.$ = function(a) {
        return this.S ? this.b.$(a, this.S) : null
    };
    m.f.Yp = function(a) {
        if (this.zd && this.zd != a) throw Error("Method not supported");
        m.gw.D.Yp.call(this, a)
    };
    m.f.jg = function() {
        this.S = this.b.createElement("div")
    };
    m.f.render = function(a) {
        if (this.nb) throw Error("Component already rendered");
        this.S || this.jg();
        a ? a.insertBefore(this.S, null) : this.b.b.body.appendChild(this.S);
        this.zd && !this.zd.nb || this.na()
    };
    m.f.Su = function() {
        return !0
    };
    m.f.kg = function(a) {
        this.S = a
    };
    m.f.na = function() {
        this.nb = !0;
        kw(this, function(a) {
            !a.nb && a.H() && a.na()
        })
    };
    m.f.Oc = function() {
        kw(this, function(a) {
            a.nb && a.Oc()
        });
        this.Hg && this.Hg.removeAll();
        this.nb = !1
    };
    m.f.G = function() {
        this.nb && this.Oc();
        this.Hg && (this.Hg.dispose(), delete this.Hg);
        kw(this, function(a) {
            a.dispose()
        });
        !this.Gu && this.S && (0, m.De)(this.S);
        this.zd = this.S = this.oe = this.jd = null;
        m.gw.D.G.call(this)
    };
    m.f.Uf = function() {
        return this.S
    };
    m.f.removeChild = function(a, b) {
        if (a) {
            var c = (0, m.q)(a) ? a : a.getId();
            a = this.oe && c ? (0, m.Mc)(this.oe, c) || null : null;
            if (c && a) {
                var d = this.oe;
                c in d && delete d[c];
                (0, m.ka)(this.jd, a);
                b && (a.Oc(), a.S && (0, m.De)(a.S));
                (0, m.iw)(a, null)
            }
        }
        if (!a) throw Error("Child is not in parent component");
        return a
    };
    var mw;
    var vw;
    vw = ["left", "right", "center"];
    m.sw = {
        id: 0,
        priority: 0,
        anchorPoint: 7,
        Hk: 50,
        aK: 80,
        qf: 95,
        Fe: 15,
        eo: 100,
        isVisible: !0,
        textAlign: vw[2],
        fg: 0,
        backgroundColor: "#080808",
        Gk: "#fff",
        MJ: 1,
        bq: 1
    };
    m.AB = {
        id: 99,
        priority: 1,
        anchorPoint: 0,
        Hk: 5,
        qf: 7,
        Fe: 2,
        eo: 32,
        textAlign: vw[0]
    };
    nw.prototype.b = 0;
    nw.prototype.j = 0;
    nw.prototype.Id = 0;
    nw.prototype.toString = function() {
        return this.b + ", " + this.Id
    };
    (0, m.s)(ow, nw);
    m.f = ow.prototype;
    m.f.He = "";
    m.f.jm = !1;
    m.f.Dw = 0;
    m.f.Cw = 0;
    m.f.uk = 0;
    m.f.toString = function() {
        return this.b + ", " + this.Id + ": " + this.He
    };
    (0, m.s)(m.qw, nw);
    m.qw.prototype.id = 0;
    m.qw.prototype.params = null;
    m.qw.prototype.i = "";
    m.qw.prototype.g = !1;
    uw.prototype.b = null;
    uw.prototype.i = null;
    uw.prototype.g = null;
    m.f = m.xw.prototype;
    m.f.Li = null;
    m.f.Hc = null;
    m.f.ed = null;
    m.f.Fa = null;
    m.f.ct = !1;
    m.f.Mk = !1;
    m.f.Nk = !1;
    m.f.vo = 1;
    m.f.toString = function() {
        var a = [this.g, ": ", this.ed, " (", this.Hc, ")"];
        this.b && a.push(" >> ", this.b.b);
        return a.join("")
    };
    m.f.equals = function(a) {
        if (!a) return !1;
        var b = this.b,
            c = a.b;
        if (b && c) {
            if (b.b != c.b) return !1
        } else if (b || c) return !1;
        return this.g == a.g && this.ed == a.ed && this.Hc == a.Hc
    };
    zw.prototype.g = null;
    zw.prototype.b = null;
    zw.prototype.i = -1;
    m.f = m.Dw.prototype;
    m.f.Ue = "";
    m.f.Dl = null;
    m.f.uw = !1;
    m.f.cc = null;
    m.f.Uk = null;
    m.f.El = null;
    m.f = m.Jw.prototype;
    m.f.Fw = "";
    m.f.kw = "";
    m.f.lw = !1;
    m.f.jq = "";
    m.f.mw = "";
    m.f.ow = null;
    Lw.prototype.g = null;
    Lw.prototype.b = null;
    var BB = 0;
    Lw.prototype.reset = function(a, b, c, d, e) {
        "number" == typeof e || BB++;
        this.j = d || (0, m.C)();
        this.k = a;
        this.o = b;
        this.i = c;
        delete this.g;
        delete this.b
    };
    Lw.prototype.getMessage = function() {
        return this.o
    };
    var DB;
    var CB;
    m.Mw.prototype.b = null;
    Nw.prototype.toString = function() {
        return this.name
    };
    CB = new Nw("SHOUT", 1200);
    DB = new Nw("SEVERE", 1E3);
    m.EB = new Nw("WARNING", 900);
    m.qx = new Nw("INFO", 800);
    m.f = m.Mw.prototype;
    m.f.oG = function() {};
    m.f.rG = function() {
        return !1
    };
    m.f.getChildren = function() {
        this.b || (this.b = {});
        return this.b
    };
    m.f.log = function() {};
    m.f.qG = function(a, b, c) {
        var d = new Lw(a, String(b), this.g);
        if (c) {
            d.g = c;
            var e;
            var g = arguments.callee.caller;
            try {
                var h = Ws(c);
                e = "Message: " + (0, m.qc)(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + (0, m.qc)(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + (0, m.qc)(Xs(g) + "-> ")
            } catch (k) {
                e = "Exception trying to expose exception! You win, we lose. " + k
            }
            d.b = e
        }
        return d
    };
    m.f.Ae = function() {};
    m.f.info = (0, m.aa)(6);
    var Qw = {},
        Pw = null;
    Sw.prototype.b = null;
    (0, m.s)(Tw, Sw);
    m.FB = new Tw;
    var Ww = new Uw;
    Uw.prototype.set = function(a) {
        this.b = a
    };
    Uw.prototype.reset = function() {
        this.set((0, m.C)())
    };
    Uw.prototype.get = function() {
        return this.b
    };
    Vw.prototype.g = !0;
    Vw.prototype.b = !1;
    (0, m.s)(Zw, Vw);
    ax.prototype.j = function(a) {
        if (!this.k[a.i]) {
            var b = $w(this.b, a),
                c = GB;
            if (c) switch (a.k) {
                case CB:
                    dx(c, "info", b);
                    break;
                case DB:
                    dx(c, "error", b);
                    break;
                case m.EB:
                    dx(c, "warn", b);
                    break;
                default:
                    dx(c, "debug", b)
            } else window.opera ? window.opera.postError(b) : this.i += b
        }
    };
    var cx = null,
        GB = window.console;
    var lx = null,
        mx = null,
        gx = Array(50),
        fx = -1,
        hx = !1;
    var vx;
    var sx;
    sx = null;
    m.ux = !1;
    vx = (0, m.n)("yt.mdx.remote.castapi.devices_") || [];
    (0, m.l)("yt.mdx.remote.castapi.devices_", vx, void 0);
    (0, m.s)(m.Fx, m.uv);
    (0, m.ud)(m.Fx);
    m.f = m.Fx.prototype;
    m.f.qj = window.NaN;
    m.f.$l = "";
    m.f.log_ = function(a) {
        (0, m.nx)(m.qx, "RM", a)
    };
    m.f.K = function(a, b) {
        if (this.ma()) return !1;
        this.log_("Firing " + a);
        return this.C.K.apply(this.C, arguments)
    };
    m.f.yl = function() {
        var a = Ax();
        (0, m.hd)(a) || this.Cl(a);
        a = Kx(this);
        (0, m.hd)(a) || ((0, m.Ob)(a, function(a) {
            return !(0, m.iv)(this.vf, a)
        }, this) && !(0, m.hj)("yt-remote-lounge-token-expiration") ? Nx(this) : Lx(this, a))
    };
    m.f.aj = function() {
        (0, m.Hx)(this, this.b, !0);
        this.Cl(Ax());
        this.K("managedScreenChange", Kx(this))
    };
    m.f.Cl = function(a) {
        var b = !1;
        (0, m.A)(a, function(a) {
            var c = jv(this.Od, a.id);
            c && c.name != a.name && (this.log_("Renaming screen id " + c.id + " from " + c.name + " to " + a.name), c.name = a.name, b = !0)
        }, this);
        b && (this.log_("Renaming due to DIAL."), (0, m.Px)(this));
        ov(av(a));
        var c = !(0, m.bd)(this.g, a, cv);
        c && this.log_("Updating DIAL devices: " + Xu(this.g) + " to " + Xu(a));
        this.g = a;
        (0, m.Hx)(this, this.b);
        c && this.K("onlineReceiverChange")
    };
    m.f.zE = function(a) {
        var b = (0, m.dv)(this.g, a.id);
        b && (this.log_("Updating DIAL device: " + b.id + "(" + b.name + ") from status: " + b.status + " to status: " + a.status + " and from activityId: " + b.activityId + " to activityId: " + a.activityId), b.activityId = a.activityId, b.status = a.status, ov(av(this.g)));
        (0, m.Hx)(this, this.b)
    };
    m.f.Lp = (0, m.aa)(4);
    m.Sx.prototype.debug = (0, m.aa)(0);
    m.Sx.prototype.info = (0, m.aa)(5);
    m.Sx.prototype.Ae = function() {};
    m.HB = new m.Sm;
    var dy;
    var Yx;
    var by;
    dy = "pyv-feed-item-headline-dest-url pyv-feed-item-thumb-dest-url pyv-shelf-headline-dest-url pyv-shelf-thumb-dest-url pyv-medium-shelf-headline-dest-url pyv-medium-shelf-thumb-dest-url".split(" ");
    m.ay = "";
    (0, m.s)(m.fy, m.zn);
    (0, m.ud)(m.fy);
    m.fy.prototype.Ia = "shelfslider";
    m.fy.prototype.gq = function(a) {
        a = (0, m.Og)(a) ? (0, m.jl)(this, "next", a) : (0, m.jl)(this, "prev", a);
        return (0, m.Pg)(a) + a.offsetWidth
    };
    m.fy.prototype.hq = function(a) {
        a = (0, m.Og)(a) ? (0, m.jl)(this, "prev", a) : (0, m.jl)(this, "next", a);
        return (0, m.Pg)(a)
    };
    m.gy.prototype.write = function(a, b, c, d) {
        var e = (0, m.ad)("promo_ajax_token");
        a = {
            action_write_promo: 1,
            method: a,
            subtype: this.g
        };
        this.b && (a.encrypted_video_id = this.b);
        e = {
            session_token: e
        };
        c && (e.json_data = c);
        (0, m.U)(d || "/promo_ajax", {
            method: "POST",
            ca: a,
            ba: e,
            onSuccess: function() {
                if (b) {
                    b.mE && m.T.hide((0, m.D)(b.mE));
                    b.nE && m.T.show((0, m.D)(b.nE));
                    if (b.onSuccess) b.onSuccess();
                    if (b.redirectUrl) return (0, m.Bi)(b.redirectUrl)
                }
            },
            onError: function() {
                b && b.oE && m.T.show((0, m.D)(b.oE));
                if (b && b.onError) b.onError()
            }
        })
    };
    (0, m.s)(my, sd);
    var IB = 0;
    m.oy.prototype.send = function(a, b, c, d) {
        a = a || null;
        d = d || "_" + (IB++).toString(36) + (0, m.C)().toString(36);
        m.ca._callbacks_ || (m.ca._callbacks_ = {});
        var e = this.g.clone();
        if (a)
            for (var g in a) a.hasOwnProperty && !a.hasOwnProperty(g) || (0, m.ri)(e, g, a[g]);
        b && (m.ca._callbacks_[d] = ry(d, b), (0, m.ri)(e, this.b, "_callbacks_." + d));
        b = (0, m.jy)(e.toString(), {
            timeout: this.ud,
            tE: !0
        });
        (0, m.Yv)(b, null, py(d, a, c), void 0);
        return {
            Fa: d,
            ld: b
        }
    };
    m.oy.prototype.cancel = function(a) {
        a && (a.ld && a.ld.cancel(), a.Fa && qy(a.Fa, !1))
    };
    (0, m.s)(m.sy, m.gw);
    m.sy.prototype.Ba = function(a, b, c, d, e) {
        d = d || this;
        e = e || this.H();
        a = (0, m.hg)(e, a, (0, m.r)(c, d), b);
        this.B.push(a)
    };
    m.sy.prototype.Oc = function() {
        (0, m.A)(this.B, m.S);
        (0, m.Ka)(this.F);
        m.sy.D.Oc.call(this)
    };
    (0, m.s)(m.ty, m.sy);
    m.ty.prototype.na = function() {
        m.ty.D.na.call(this);
        var a = this.H();
        a && (0, m.hw)(this).listen(a, "click", this.g)
    };
    m.ty.prototype.g = function() {
        function a() {
            window.google.payments.inapp.buy({
                jwt: d,
                parameters: {
                    locale: (0, m.v)("GAPI_LOCALE"),
                    price: e,
                    uiTemplate: "donation",
                    userSessionIndex: (0, m.v)("SESSION_INDEX")
                }
            })
        }
        var b = (0, m.O)("donation-amount-input"),
            c = this.H(),
            d = (0, m.H)(c, "jwt"),
            e = b.value;
        (b = (0, m.H)(c, "gb_url")) && (0, m.Ra)(b, a)
    };
    (0, m.s)(m.uy, Lp);
    m.uy.prototype.lv = function(a) {
        this.g && a && (0, m.M)(a.target, this.g);
        this.j = (0, m.v)("EW_INLINE")
    };
    m.uy.prototype.Zl = function() {
        this.ql("yt.www.onboarding.EngagementWizard")
    };
    var zy;
    var Ey;
    var By;
    var xy;
    var yy;
    xy = !1;
    By = [];
    Ey = [];
    zy = {
        hide: Ay,
        uploads: function(a) {
            var b = (0, m.H)(a, "subscription-id");
            if (b) {
                var c = pl(m.kl.getInstance(), a.parentElement);
                (0, m.B)("subscription-pref-uploads", b, c);
                a = (0, m.Q)(a, "feed-item-container");
                Iy(a);
                b = (0, m.$e)(a, "li");
                b = c ? (0, m.O)("feed-item-dismissal-uploads", b) : (0, m.O)("feed-item-dismissal-all-activity", b);
                m.T.show(b);
                Ly(a, function(a) {
                    a = (0, m.O)("feed-item-action-menu", a);
                    a = (0, m.O)("uploads", a).parentElement;
                    ql(m.kl.getInstance(), a, c)
                })
            }
        },
        subscribe: function(a) {
            var b = (0, m.H)(a, "sessionlink"),
                c = (0, m.Q)(a,
                    "feed-item-container"),
                c = (0, m.H)(c, "channel-key"),
                d = Ky(a);
            (0, m.B)("subscription-subscribe", c, d, a, b)
        },
        unsubscribe: function(a) {
            var b = (0, m.H)(a, "sessionlink"),
                c = Ky(a),
                d = (0, m.H)(a, "subscription-id"),
                e = (0, m.H)(a, "channel-key");
            d && e && (0, m.B)("subscription-unsubscribe", e, d, c, a, b)
        },
        "email-on-upload": function(a) {
            var b = (0, m.H)(a, "subscription-id");
            if (b) {
                var c = pl(m.kl.getInstance(), a.parentElement);
                (0, m.B)("subscription-pref-email", b, c);
                a = (0, m.Q)(a, "feed-item-container");
                Iy(a);
                b = c ? (0, m.O)("feed-item-dismissal-email-on-upload",
                    a) : (0, m.O)("feed-item-dismissal-no-email", a);
                m.T.show(b);
                Ly(a, function(a) {
                    a = (0, m.O)("feed-item-action-menu", a);
                    a = (0, m.O)("email-on-upload", a).parentElement;
                    ql(m.kl.getInstance(), a, c)
                })
            }
        }
    };
    var Qy = /__([a-z]+(?:_[a-z]+)*)__/g;
    m.My.prototype.render = function(a, b, c) {
        var d = (0, m.r)(function(d, g) {
            b && (g = b(g));
            return c ? a[g] || this.b[g] || "" : (0, m.qc)(a[g] || this.b[g] || "")
        }, this);
        return this.g.replace(this.i, d)
    };
    (0, m.l)("yt.www.comments.distiller.dismissPlusOnePromo", function() {
        var a = (0, m.D)("dftpop");
        a && (0, m.M)(a, "show");
        (0, m.U)("/watch_actions_ajax", {
            method: "POST",
            format: "JSON",
            ca: {
                action_dismiss_plus_one_promo: "1"
            },
            ba: {
                session_token: (0, m.ad)("watch_actions_ajax")
            }
        })
    }, void 0);
    (0, m.l)("yt.sharing.AutoShare", m.$y, void 0);
    m.$y.prototype.aa = function(a, b, c, d) {
        (0, m.R)(a, "click", (0, m.r)(this.F, this));
        if (a.id) this.C[a.id] = {
            serviceName: b,
            connectOnly: c
        }, d && (this.C[a.id].connectOnlyCallback = d);
        else throw "Connect dialog launch buttons must have an id.";
    };
    m.$y.prototype.registerConnectDialogLauncher = m.$y.prototype.aa;
    m.$y.prototype.F = function(a) {
        if (a = this.C[a.currentTarget.id]) {
            var b = a.connectOnly;
            a.connectOnlyCallback && (b = (0, a.connectOnlyCallback)());
            this.o(a.serviceName, b)
        }
    };
    m.$y.prototype.handleConnectService = m.$y.prototype.F;
    m.$y.prototype.W = function() {
        this.g()
    };
    m.$y.prototype.doOnLoad = m.$y.prototype.W;
    m.$y.prototype.P = function(a) {
        this.A.push(a)
    };
    m.$y.prototype.addServiceChangedCallback = m.$y.prototype.P;
    m.$y.prototype.O = function(a) {
        this.k.push(a)
    };
    m.$y.prototype.addCanConnectCallback = m.$y.prototype.O;
    m.$y.prototype.Y = function() {
        return this.i
    };
    m.$y.prototype.getServiceInfo = m.$y.prototype.Y;
    m.$y.prototype.o = function(a, b) {
        for (var c in this.k)
            if (!(0, this.k[c])(this, a, b)) return;
        (0, m.U)(this.b + "autoshare", {
            ca: {
                action_ajax_stats_ping: "1",
                stat: "connect_has_google",
                service: a
            }
        });
        c = this.b + "autoshare?action_popup_auth=1&service=" + a + "&connect_only=" + (b ? "True" : "False") + "&root_url=" + (0, window.encodeURIComponent)(this.b);
        "facebook" == a && (c += "&permissions=" + (0, window.encodeURIComponent)("read_stream,offline_access,manage_pages,publish_stream"));
        this.L(c, {
            height: 500,
            width: 860
        })
    };
    m.$y.prototype.connectService = m.$y.prototype.o;
    m.$y.prototype.Q = function(a, b) {
        var c = (0, m.r)(function(a, c) {
                this.i = (0, m.Ni)(c.html_content);
                this.g();
                b && b()
            }, this),
            d = (0, m.r)(function() {
                b && b();
                this.g()
            }, this),
            e = {
                action_ajax_connect_service: 1
            };
        e.return_url = a;
        (0, m.U)(this.b + "autoshare?ajax_connect_service", {
            format: "XML",
            method: "POST",
            Xc: (0, m.Af)(e) + "&" + this.B,
            onSuccess: c,
            onError: d
        })
    };
    m.$y.prototype.connectServiceDone = m.$y.prototype.Q;
    m.$y.prototype.R = function(a) {
        this.J(a)
    };
    m.$y.prototype.disconnectService = m.$y.prototype.R;
    m.$y.prototype.fa = function(a, b) {
        var c = (0, m.r)(function(a, b) {
                this.i = (0, m.Ni)(b.html_content);
                this.g()
            }, this),
            d = (0, m.r)(function() {
                this.g()
            }, this),
            e = {
                action_ajax_set_connect_only: 1
            };
        e.service = a;
        e.connect_only = b ? "True" : "False";
        (0, m.U)(this.b + "autoshare?ajax_set_connect_only", {
            format: "XML",
            method: "POST",
            Xc: (0, m.Af)(e) + "&" + this.B,
            onSuccess: c,
            onError: d
        })
    };
    m.$y.prototype.setConnectOnly = m.$y.prototype.fa;
    m.$y.prototype.J = function(a) {
        var b = (0, m.r)(function(a, b) {
                this.i = (0, m.Ni)(b.html_content);
                this.g()
            }, this),
            c = (0, m.r)(function() {
                this.g()
            }, this),
            d = {
                action_ajax_disconnect_service: 1
            };
        d.service = a;
        (0, m.U)(this.b + "autoshare?ajax_disconnect_service", {
            format: "XML",
            method: "POST",
            Xc: (0, m.Af)(d) + "&" + this.B,
            onSuccess: b,
            onError: c
        })
    };
    m.$y.prototype.g = function() {
        for (var a in this.A)(0, this.A[a])(this)
    };
    m.$y.prototype.L = function(a, b) {
        if (this.j) try {
            this.j.close()
        } catch (c) {
            this.j = null
        }
        this.j = !Fi(a, b)
    };
    m.$y.prototype.ja = function() {
        this.o("facebook", !this.i.facebook.is_autosharing)
    };
    (0, m.s)(m.cz, m.t);
    m.f = m.cz.prototype;
    m.f.G = function() {
        (0, m.S)(this.b);
        this.b.length = 0;
        this.j && this.j.abort();
        m.cz.D.G.call(this)
    };
    m.f.Dc = function() {
        this.Ya = this.Z.getElementsByTagName("form")[0];
        this.b.push((0, m.R)(this.Ya, "submit", (0, m.r)(this.cC, this)));
        this.no = (0, m.O)("share-email-success", this.Z);
        this.o = (0, m.O)("share-email-remail", this.no);
        this.b.push((0, m.R)(this.o, "click", (0, m.r)(function() {
            ez(this);
            this.focus()
        }, this)));
        this.i = (0, m.O)("share-email-recipients", this.Z);
        this.g = (0, m.O)("share-email-note", this.Z);
        this.k = (0, m.O)("share-email-preview-note", this.Z);
        this.b.push((0, m.R)(this.g, "keyup", (0, m.r)(this.bC, this)))
    };
    m.f.oh = function() {
        this.Ya && (this.Xn && ez(this), this.focus())
    };
    m.f.focus = function() {
        this.i.focus()
    };
    m.f.bC = function() {
        var a = this.g.value,
            a = a.substring(0, 300),
            a = (0, m.qc)(a),
            a = a.replace(/\n/g, "<br>");
        this.k.innerHTML = a
    };
    m.f.cC = function(a) {
        a.preventDefault();
        var b = (0, m.fe)("button", null, this.Ya)[0];
        b.disabled = !0;
        var c = (0, m.O)("share-email-captcha", this.Z),
            d = (0, m.O)("share-email-error", this.Z),
            e = (0, m.O)("yt-alert-content", d);
        a = nf() + of (this.Ya.action);
        (0, m.U)(a, {
            format: "JSON",
            method: "POST",
            Xc: (0, m.Fj)(this.Ya),
            onSuccess: function() {
                this.Xn = !0;
                m.T.show(this.no);
                m.T.hide(this.Ya);
                m.T.hide(d);
                m.T.hide(c)
            },
            onError: function(a, b) {
                b.captcha_html && (c.innerHTML = b.captcha_html, m.T.show(c));
                b.errors && (e.innerHTML = b.errors.join("<br>"),
                    m.T.show(d))
            },
            za: function() {
                b.disabled = !1
            },
            N: this
        })
    };
    var gz = null,
        jz = [];
    (0, m.s)(pz, m.t);
    m.f = pz.prototype;
    m.f.hj = 0;
    m.f.gj = 0;
    m.f.G = function() {
        (0, m.S)(this.b);
        this.b.length = 0;
        this.k && this.k.abort();
        pz.D.G.call(this)
    };
    m.f.Dc = function() {
        this.g = (0, m.O)("share-embed-code", this.Z);
        this.Si ? (vz(this), this.b.push((0, m.R)((0, m.D)("embed-with-playlist"), "click", (0, m.r)(this.F, this))), this.b.push((0, m.R)((0, m.D)("embed-with-playlist-current"), "click", (0, m.r)(this.C, this))), this.b.push((0, m.R)((0, m.D)("embed-with-playlist-first"), "click", (0, m.r)(this.B, this)))) : rz(this);
        wz(this)
    };
    m.f.YD = function() {
        this.hj = (0, window.parseInt)(this.j.value, 10);
        this.gj = Math.round(this.hj / this.o) || 0;
        this.i.value = this.gj + "";
        qz(this)
    };
    m.f.XD = function() {
        this.gj = (0, window.parseInt)(this.i.value, 10);
        this.hj = Math.round(this.gj * this.o) || 0;
        this.j.value = this.hj + "";
        qz(this)
    };
    m.f.oh = function() {
        this.focus()
    };
    m.f.focus = function() {
        this.g && (this.g.focus(), this.g.select())
    };
    m.f.XF = function() {
        var a = this.vg.checked,
            b = m.qh.getInstance();
        (0, m.wh)(2, !a);
        b.save();
        qz(this)
    };
    m.f.WF = function() {
        var a = this.nl.checked,
            b = m.qh.getInstance();
        (0, m.wh)(44, a);
        b.save();
        qz(this)
    };
    m.f.YF = function() {
        var a = this.ug.checked,
            b = m.qh.getInstance();
        (0, m.wh)(75, a);
        b.save();
        qz(this)
    };
    m.f.rF = function(a) {
        a = (0, m.O)("share-embed-size-radio", a.currentTarget);
        a = this.Re[a.value];
        a.select();
        var b = m.qh.getInstance();
        b.set("ems", a.name);
        b.save();
        qz(this);
        a != this.A && this.focus()
    };
    m.f.sF = function() {
        qz(this)
    };
    (0, m.s)(sz, m.t);
    sz.prototype.G = function() {
        (0, m.S)(this.g);
        this.g.length = 0;
        sz.D.G.call(this)
    };
    sz.prototype.select = function() {
        this.b.checked = !0;
        var a = (0, m.$e)(this.b, "li"),
            b = (0, m.$e)(a, "ul"),
            b = (0, m.fe)("li", "selected", b);
        (0, m.A)(b, function(a) {
            (0, m.M)(a, "selected")
        });
        (0, m.L)(a, "selected")
    };
    (0, m.s)(uz, sz);
    uz.prototype.A = function() {
        this.width = (0, window.parseInt)(this.j.value, 10);
        this.height = Math.round(this.width / this.k) || 0;
        this.i.value = this.height + ""
    };
    uz.prototype.o = function() {
        this.height = (0, window.parseInt)(this.i.value, 10);
        this.width = Math.round(this.height * this.k) || 0;
        this.j.value = this.width + ""
    };
    pz.prototype.F = function(a) {
        a.target.checked ? (a = (0, m.$e)((0, m.D)("embed-with-playlist-first"), "li"), a = (0, m.Hd)(a, "yt-uix-button-menu-item-selected") ? "first" : "default") : a = "nolist";
        this.wg = this.ip[a] || this.wg;
        qz(this)
    };
    pz.prototype.C = function() {
        this.wg = this.ip["default"] || this.wg;
        qz(this)
    };
    pz.prototype.B = function() {
        this.wg = this.ip.first || this.wg;
        qz(this)
    };
    (0, m.s)(m.yz, m.Sm);
    var JB = m.Zd || m.rg && (0, m.Vd)("1.9.3");
    m.f = m.yz.prototype;
    m.f.clientX = 0;
    m.f.clientY = 0;
    m.f.screenX = 0;
    m.f.screenY = 0;
    m.f.Yt = 0;
    m.f.Zt = 0;
    m.f.th = 0;
    m.f.Se = 0;
    m.f.sg = !1;
    m.f.G = function() {
        m.yz.D.G.call(this);
        (0, m.Nm)(this.j, ["touchstart", "mousedown"], this.co, !1, this);
        this.g.removeAll();
        JB && this.b.releaseCapture();
        this.j = this.target = null
    };
    m.f.co = function(a) {
        var b = "mousedown" == a.type;
        if (this.sg || b && (!(eB ? 0 == a.Wa.button : "click" == a.type || a.Wa.button & gB[0]) || m.ne && m.Hg && a.ctrlKey))(0, m.Tm)(this, "earlycancel");
        else if (Az(a), (0, m.Tm)(this, new Fz("start", this, a.clientX, a.clientY))) {
            this.sg = !0;
            a.preventDefault();
            var b = this.b,
                c = b.documentElement,
                d = !JB;
            this.g.listen(b, ["touchmove", "mousemove"], this.lD, d);
            this.g.listen(b, ["touchend", "mouseup"], this.jl, d);
            JB ? (c.setCapture(!1), this.g.listen(c, "losecapture", this.jl)) : this.g.listen((0, m.oe)(b), "blur",
                this.jl);
            this.o && this.g.listen(this.o, "scroll", this.kD, d);
            this.clientX = this.Yt = a.clientX;
            this.clientY = this.Zt = a.clientY;
            this.screenX = a.screenX;
            this.screenY = a.screenY;
            this.th = this.target.offsetLeft;
            this.Se = this.target.offsetTop;
            this.k = (0, m.df)((0, m.ae)(this.b));
            (0, m.C)()
        }
    };
    m.f.jl = function(a) {
        this.g.removeAll();
        JB && this.b.releaseCapture();
        if (this.sg) {
            Az(a);
            this.sg = !1;
            var b = Cz(this, this.th),
                c = Dz(this, this.Se);
            (0, m.Tm)(this, new Fz("end", this, a.clientX, a.clientY, 0, b, c))
        } else(0, m.Tm)(this, "earlycancel")
    };
    m.f.lD = function(a) {
        Az(a);
        var b = 1 * (a.clientX - this.clientX),
            c = a.clientY - this.clientY;
        this.clientX = a.clientX;
        this.clientY = a.clientY;
        this.screenX = a.screenX;
        this.screenY = a.screenY;
        if (!this.sg) {
            var d = this.Yt - this.clientX,
                e = this.Zt - this.clientY;
            if (0 < d * d + e * e)
                if ((0, m.Tm)(this, new Fz("start", this, a.clientX, a.clientY))) this.sg = !0;
                else {
                    this.ma() || this.jl(a);
                    return
                }
        }
        c = Bz(this, b, c);
        b = c.x;
        c = c.y;
        this.sg && (0, m.Tm)(this, new Fz("beforedrag", this, a.clientX, a.clientY, 0, b, c)) && (Ez(this, a, b, c), a.preventDefault())
    };
    m.f.kD = function(a) {
        var b = Bz(this, 0, 0);
        a.clientX = this.clientX;
        a.clientY = this.clientY;
        Ez(this, a, b.x, b.y)
    };
    (0, m.s)(Fz, m.qm);
    Gz.prototype.qe = function() {};
    (0, m.s)(Hz, Gz);
    Hz.prototype.qe = function(a, b, c, d) {
        (0, m.Zk)(this.Dg, a, b, c, null, null, d)
    };
    Jz.prototype.dispose = function() {
        (0, m.A)(this.j, m.S);
        this.G()
    };
    Jz.prototype.G = function() {};
    Jz.prototype.H = function(a, b) {
        return (0, m.O)(a, b || this.B)
    };
    (0, m.s)(Lz, Jz);
    m.f = Lz.prototype;
    m.f.G = function() {
        this.ub && this.ub.dispose();
        this.Gb && this.Gb.dispose();
        this.Gb = this.ub = null;
        this.i && ((0, m.Om)(this.i), this.i = null)
    };
    m.f.Jk = function(a) {
        var b = (0, m.Q)(a.target, "dragger"),
            b = (0, m.Hd)(b, "start-dragger");
        a = (0, m.$e)(a.target, "BUTTON");
        a = ((0, m.Hd)(a, "nudge-left") ? -1E3 : 1E3) / this.g;
        Oz(this, this.media[b ? "start_ms" : "end_ms"] + a, b);
        Mz(this);
        Nz(this, b)
    };
    m.f.Is = function(a) {
        var b = a.target;
        a = b == this.ub;
        b = b.target;
        Oz(this, this.media.length_ms * (b.offsetLeft + (a ? b.offsetWidth : 0)) / this.width, a);
        Nz(this, a)
    };
    m.f.Js = function(a) {
        Mz(this);
        Nz(this, a.target == this.ub)
    };
    m.f.yB = function(a) {
        if (!(0, m.Q)(a.target, "dragger")) {
            var b = this.media.length_ms * (a.clientX - m.T.xj(this.C).x) / this.width,
                c = Math.abs(this.media.start_ms - b) <= Math.abs(this.media.end_ms - b);
            Oz(this, b, c);
            Mz(this);
            Nz(this, c);
            (c ? this.ub : this.Gb).co(a);
            a.stopPropagation()
        }
    };
    (0, m.s)(m.Uz, m.t);
    m.f = m.Uz.prototype;
    m.f.G = function() {
        (0, m.S)(this.b);
        this.b.length = 0;
        this.A && this.A.abort();
        m.Uz.D.G.call(this)
    };
    m.f.Dc = function() {
        this.o = (0, m.O)("share-panel-gif-iframe");
        this.j = (0, m.O)("share-panel-gif-url");
        this.sn = (0, m.D)("share-gif-size");
        this.Tf = (0, m.D)("gif-start-at");
        this.Zj = (0, m.D)("gif-end-at");
        this.F = (0, m.O)("share-panel-gif-create");
        this.i = (0, m.O)("share-panel-gif-new");
        this.J = (0, m.O)("loading-gif-preview");
        this.g = (0, m.O)("gif-preview-container");
        this.k = (0, m.ue)("IMG");
        this.k.className = "animated-gif-preview-img";
        this.b.push((0, m.R)(this.F, "click", (0, m.r)(this.hA, this)));
        this.b.push((0, m.R)(this.i,
            "click", (0, m.r)(this.iA, this)));
        this.b.push((0, m.R)(this.Tf, "change", (0, m.r)(this.bs, this)));
        this.b.push((0, m.R)(this.Zj, "change", (0, m.r)(this.bs, this)));
        this.b.push((0, m.R)(this.Tf, "focus", (0, m.r)(this.nk, this)));
        this.b.push((0, m.R)(this.Zj, "focus", (0, m.r)(this.nk, this)));
        this.b.push((0, m.R)(this.j, "click", (0, m.r)(this.kA, this)));
        this.b.push((0, m.R)(this.o, "click", (0, m.r)(this.jA, this)))
    };
    m.f.pj = (0, m.aa)(9);
    m.f.nk = function() {
        this.ox = !1
    };
    m.f.cF = function(a, b) {
        if (this.gp) {
            this.nk();
            var c = (0, m.Vz)(this, [a.start_ms, a.end_ms], "start_ms" == b);
            Xz(c["start_ms" == b ? 0 : 1]);
            (0, m.Yz)(this, c, !0)
        }
    };
    m.f.bs = function(a) {
        this.nk();
        var b = [this.media.start_ms, this.media.end_ms],
            c = a.target == this.Tf ? 0 : 1,
            d = Zz(a.target.value);
        null != d ? (b[c] = d, b = (0, m.Vz)(this, b, a.target == this.Tf), Xz(b[a.target == this.Tf ? 0 : 1]), (0, m.Yz)(this, b, !0)) : a.target.value = Iz(b[c])
    };
    m.f.hA = function() {
        var a, b;
        m.T.hide((0, m.O)("share-panel-gif-options"));
        m.T.hide(window.document.getElementById("share-panel-gif-trimmer-container"));
        m.T.show((0, m.O)("share-panel-gif-iframe-container"));
        m.T.show((0, m.O)("share-panel-gif-url-container"));
        this.i.disabled = !0;
        m.T.show(this.i);
        var c = Ml(this.sn);
        if (c) {
            var d = (0, window.parseInt)((0, m.H)(c, "width"), 10),
                c = (0, window.parseInt)((0, m.H)(c, "height"), 10);
            a = d;
            b = c
        } else a = 268, b = 151;
        var d = {
                width: a,
                height: b,
                length_ms: this.media.end_ms - this.media.start_ms
            },
            e = [this.media],
            c = (0, m.r)(this.FH, this),
            e = Rz(e);
        a && (e.width = a);
        b && (e.height = b);
        (0, m.Qz)("create_gif", c, e, void 0, void 0, d)
    };
    m.f.iA = function() {
        m.T.hide((0, m.O)("share-panel-gif-iframe-container"));
        m.T.hide((0, m.O)("share-panel-gif-url-container"));
        m.T.hide(this.i);
        m.T.show((0, m.O)("share-panel-gif-options"));
        m.T.show(window.document.getElementById("share-panel-gif-trimmer-container"));
        this.j.value = "";
        this.o.value = ""
    };
    m.f.FH = function(a) {
        this.j.value = a.url;
        this.o.value = a.iframe;
        m.T.show((0, m.O)("share-panel-gif-iframe-container"));
        m.T.show((0, m.O)("share-panel-gif-url-container"));
        this.i.disabled = !1;
        this.j.select()
    };
    m.f.kA = function() {
        this.j.select()
    };
    m.f.jA = function() {
        this.o.select()
    };
    m.f.QH = function() {
        this.Xl += 1;
        var a = this.Xl + "";
        this.g.firstElementChild && (this.g.removeChild(this.g.firstElementChild), this.k.src = "");
        this.g.appendChild(this.J);
        var b = {
                length_ms: this.media.end_ms - this.media.start_ms
            },
            c = [this.media],
            d = (0, m.r)(this.yG, this),
            e = [],
            c = Rz(c);
        e && (c.times = e);
        c.width = 268;
        c.height = 151;
        c.fmt = "a_gif";
        a && (c.qid = a);
        (0, m.Qz)("thumbnail", d, c, void 0, "gif", b)
    };
    m.f.yG = function(a) {
        a.qid == this.Xl && (this.k.src = a.thumb_url, this.g.firstElementChild && this.g.removeChild(this.g.firstElementChild), this.g.appendChild(this.k))
    };
    m.f.gp = !1;
    m.f.Xl = -1;
    m.f.ox = !0;
    (0, m.s)(m.$z, m.t);
    var KB = {
        FACEBOOK: "share_facebook",
        BLOGGER: "share_blogger",
        TWITTER: "share_twitter",
        GOOGLEPLUS: "share_gplus"
    };
    m.f = m.$z.prototype;
    m.f.G = function() {
        (0, m.S)(this.b);
        this.b.length = 0;
        (0, m.x)(this.ja);
        this.Y && this.Y.abort();
        m.$z.D.G.call(this)
    };
    m.f.Dc = function() {
        var a = (0, m.O)("share-panel-show-url-options");
        this.b.push((0, m.R)(a, "click", (0, m.r)(this.VB, this)));
        a = (0, m.O)("share-panel-show-more");
        this.b.push((0, m.R)(a, "click", (0, m.r)(this.QB, this)));
        a = (0, m.O)("share-panel-services", this.Z);
        this.b.push((0, m.R)(a, "click", (0, m.r)(this.RB, this)));
        a = (0, m.O)("share-panel-embed", this.Z);
        this.b.push((0, m.R)(a, "click", (0, m.r)(this.NB, this)));
        a = (0, m.O)("share-panel-email", this.Z);
        this.b.push((0, m.R)(a, "click", (0, m.r)(this.MB, this)));
        a = (0, m.O)("share-panel-gif",
            this.Z);
        this.b.push((0, m.R)(a, "click", (0, m.r)(this.OB, this)));
        (a = (0, m.O)("share-panel-hangout", this.Z)) && this.b.push((0, m.R)(a, "click", (0, m.r)(this.PB, this)));
        this.i = (0, m.O)("share-panel-url", this.Z);
        this.b.push((0, m.R)(this.i, "click", (0, m.r)(this.WB, this)));
        this.b.push((0, m.R)(this.i, "focus", (0, m.r)(function() {
            (0, m.L)(this.i, "focused")
        }, this)));
        this.b.push((0, m.R)(this.i, "blur", (0, m.r)(function() {
            (0, m.M)(this.i, "focused")
        }, this)));
        this.pa || (this.qa = (0, m.O)("share-panel-start-at-container", this.Z),
            this.B = (0, m.O)("share-panel-start-at", this.Z), this.g = (0, m.O)("share-panel-start-at-time", this.Z), this.b.push((0, m.R)(this.g, "change", (0, m.r)(this.LB, this))), this.b.push((0, m.R)(this.g, "click", (0, m.r)(this.UB, this))), this.b.push((0, m.R)(this.g, "focus", (0, m.r)(function() {
                (0, m.L)(this.g, "focused")
            }, this))), this.b.push((0, m.R)(this.g, "blur", (0, m.r)(function() {
                (0, m.M)(this.g, "focused")
            }, this))));
        this.F = (0, m.O)("share-panel-url-options", this.Z);
        this.b.push((0, m.R)(this.F, "click", (0, m.r)(this.ji, this)));
        this.O = (0, m.O)("share-panel-services", this.Z);
        this.Q = (0, m.O)("share-panel-buttons", this.Z);
        a = (0, m.O)("share-panel-show-more", this.Z);
        this.b.push((0, m.R)(a, "click", (0, m.r)(this.TB, this)));
        this.b.push((0, m.hg)(this.Z, "click", (0, m.r)(this.SB, this), "share-service-button"));
        this.J && (this.b.push((0, m.hg)(this.Z, "click", (0, m.r)(this.XB, this), "share-service-expand-arrow")), this.C = (0, m.O)("share-panel-services-container", this.Z), this.b.push((0, m.R)((0, m.D)("share-with-playlist"), "click", (0, m.r)(this.$B, this))),
            this.b.push((0, m.R)((0, m.D)("share-with-playlist-current"), "click", (0, m.r)(this.YB, this))), this.b.push((0, m.R)((0, m.D)("share-with-playlist-first"), "click", (0, m.r)(this.ZB, this))))
    };
    m.f.XB = function(a) {
        var b = (0, m.Q)(a.target, "secondary");
        a = (0, m.O)("overlay", b);
        var c = (0, m.Hd)(b, "expanded"),
            d = m.T.OI() ? "right" : "left",
            e = c ? "0px" : (0, m.Wg)(b).width + "px";
        a.style[d] = e;
        a = c ? (0, m.Tp)(a) : 0;
        this.ja = (0, m.w)(function() {
            (0, m.Jd)(b, "expanded")
        }, a)
    };
    m.f.oh = function() {
        this.ji();
        this.ua || !this.i || (0, m.Hd)(this.i, "focused") || this.i.select()
    };
    m.f.pj = (0, m.aa)(8);
    m.f.ji = function() {
        if (!(0, m.Hd)(this.i, "focused")) {
            var a = this.uu,
                b = {},
                c = this.g && !this.B.disabled && this.B.checked && bA(this.g.value);
            c && (b.t = c);
            a = (0, m.uf)(a, b);
            b = (b = (0, m.v)("CONVERSION_CONFIG_DICT")) ? Jk(b.uid) : null;
            (b = (c = Kk()) ? c : b && b.aid ? b.aid : null) && (a += (0, m.Cf)("#", {
                aid: b
            }));
            this.i.value != a && (this.i.value = a)
        }
    };
    m.f.LB = function() {
        this.g && (this.fa = !0, this.B.checked = !0, this.ji())
    };
    m.f.UB = function() {
        this.g && (this.B.checked = !0, this.g.value.match(/[1-9]/) || (this.g.value = ""))
    };
    m.f.WB = function() {
        this.i.select();
        (0, m.If)("URL-CLICK", this.j + "")
    };
    m.f.MB = function() {
        var a = m.Il.getInstance();
        Kl(a, this.Q);
        Kl(a, this.F);
        Kl(a, this.O);
        cA(this, this.o);
        this.o || (this.o = (0, m.O)("share-panel-email-container", this.Z));
        m.T.mj(this.o);
        !(0, m.H)(this.o, "disabled") && m.T.Ra(this.o) && (this.R ? this.R.oh() : (this.R = new m.cz(this.o, this.Jp, this.j, this.P, null, this.J), (0, m.G)(this, this.R)));
        (0, m.If)("EMAIL", this.j + "");
        (0, m.Yj)("share_mail")
    };
    m.f.OB = function() {
        var a = m.Il.getInstance();
        Kl(a, this.Q);
        Kl(a, this.F);
        Kl(a, this.O);
        cA(this, this.k);
        this.k || (this.k = (0, m.O)("share-panel-gif-container", this.Z));
        m.T.mj(this.k);
        (0, m.H)(this.k, "disabled") || !m.T.Ra(this.k) || this.L || ((a = (0, m.v)("PLAYER_REFERENCE")) && a.pauseVideo && a.getPlayerState && 1 == a.getPlayerState() && a.pauseVideo(), this.L = new m.Uz(this.k, 0, this.j), (0, m.G)(this, this.L));
        (0, m.If)("GIF", this.j + "")
    };
    m.f.PB = function() {
        var a = (0, m.v)("PLAYER_REFERENCE");
        a && a.pauseVideo && a.pauseVideo();
        var a = (0, m.uf)("https://talkgadget.google.com/hangouts", {
                hl: this.lH,
                authuser: this.Jp,
                eid: this.Iv,
                gid: "youtube",
                gd: this.j,
                hs: 5
            }),
            b = window.screen.height,
            c = Math.min(0.9 * window.screen.width, 1E3),
            b = Math.min(0.9 * b, 800);
        (0, m.If)("HANGOUT", this.j + "");
        (0, m.Gi)(a, {
            width: c,
            height: b
        })
    };
    m.f.NB = function() {
        var a = m.Il.getInstance();
        Kl(a, this.Q);
        Kl(a, this.F);
        Kl(a, this.O);
        cA(this, this.A);
        this.A || (this.A = (0, m.O)("share-panel-embed-container", this.Z));
        m.T.mj(this.A);
        !(0, m.H)(this.A, "disabled") && m.T.Ra(this.A) && (this.W ? this.W.oh() : (this.W = new pz(this.A, this.j, this.P, this.J), (0, m.G)(this, this.W)));
        (0, m.Yj)("share_embed");
        (0, m.If)("EMBED", this.j + "")
    };
    m.f.SB = function(a) {
        a = (0, m.H)(a.currentTarget, "service-name") || "";
        (a = KB[a]) && (0, m.Yj)(a)
    };
    m.f.VB = function() {
        Kl(m.Il.getInstance(), this.O);
        cA(this, this.C)
    };
    m.f.QB = function() {
        Kl(m.Il.getInstance(), this.F);
        cA(this, this.C)
    };
    m.f.TB = function() {
        cA(this, this.C)
    };
    m.f.RB = function() {
        cA(this, this.C);
        this.C && m.T.show(this.C)
    };
    m.f.$B = function(a) {
        eA(this);
        var b = !1;
        a.target.checked && (b = (0, m.$e)((0, m.D)("share-with-playlist-first"), "li"), b = (0, m.Hd)(b, "yt-uix-button-menu-item-selected"));
        fA(this, a.target.checked, b)
    };
    m.f.YB = function() {
        dA(this);
        fA(this, !0)
    };
    m.f.ZB = function() {
        dA(this);
        fA(this, !0, !0)
    };
})(_yt_www);