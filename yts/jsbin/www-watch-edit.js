(function() {
    var h = void 0,
        l = !0,
        m = null,
        n = !1,
        p, q = this;

    function r(a) {
        a = a.split(".");
        for (var b = q, c; c = a.shift();)
            if (b[c] != m) b = b[c];
            else return m;
        return b
    }

    function t(a) {
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

    function u(a) {
        return "string" == typeof a
    }

    function aa(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ba(a, b, c) {
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

    function x(a, b, c) {
        x = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? aa : ba;
        return x.apply(m, arguments)
    }
    var ca = Date.now || function() {
        return +new Date
    };

    function y(a, b) {
        var c = a.split("."),
            d = q;
        !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
        for (var e; c.length && (e = c.shift());) !c.length && b !== h ? d[e] = b : d = d[e] ? d[e] : d[e] = {}
    }
    Function.prototype.bind = Function.prototype.bind || function(a, b) {
        if (1 < arguments.length) {
            var c = Array.prototype.slice.call(arguments, 1);
            c.unshift(this, a);
            return x.apply(m, c)
        }
        return x(this, a)
    };

    function da(a) {
        var b = 0,
            c = String(ea).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split(".");
        a = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split(".");
        for (var d = Math.max(c.length, a.length), e = 0; 0 == b && e < d; e++) {
            var f = c[e] || "",
                k = a[e] || "",
                g = RegExp("(\\d*)(\\D*)", "g"),
                s = RegExp("(\\d*)(\\D*)", "g");
            do {
                var v = g.exec(f) || ["", "", ""],
                    w = s.exec(k) || ["", "", ""];
                if (0 == v[0].length && 0 == w[0].length) break;
                b = ((0 == v[1].length ? 0 : parseInt(v[1], 10)) < (0 == w[1].length ? 0 : parseInt(w[1], 10)) ? -1 : (0 == v[1].length ? 0 : parseInt(v[1], 10)) > (0 ==
                    w[1].length ? 0 : parseInt(w[1], 10)) ? 1 : 0) || ((0 == v[2].length) < (0 == w[2].length) ? -1 : (0 == v[2].length) > (0 == w[2].length) ? 1 : 0) || (v[2] < w[2] ? -1 : v[2] > w[2] ? 1 : 0)
            } while (0 == b)
        }
        return b
    };
    var z = Array.prototype,
        A = z.indexOf ? function(a, b, c) {
            return z.indexOf.call(a, b, c)
        } : function(a, b, c) {
            c = c == m ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (u(a)) return !u(b) || 1 != b.length ? -1 : a.indexOf(b, c);
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        B = z.forEach ? function(a, b, c) {
            z.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = u(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        fa = z.filter ? function(a, b, c) {
            return z.filter.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = [], f = 0, k = u(a) ? a.split("") :
                    a, g = 0; g < d; g++)
                if (g in k) {
                    var s = k[g];
                    b.call(c, s, g, a) && (e[f++] = s)
                } return e
        };

    function ga(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c],
                e, f;
            if (!(f = "array" == t(d))) e = d, f = t(e), f = (e = "array" == f || "object" == f && "number" == typeof e.length) && Object.prototype.hasOwnProperty.call(d, "callee");
            if (f) a.push.apply(a, d);
            else if (e) {
                f = a.length;
                for (var k = d.length, g = 0; g < k; g++) a[f + g] = d[g]
            } else a.push(d)
        }
    }

    function ha(a, b, c) {
        return 2 >= arguments.length ? z.slice.call(a, b) : z.slice.call(a, b, c)
    };

    function ia(a) {
        var b = C,
            c;
        for (c in b)
            if (a.call(h, b[c], c, b)) return c
    }
    var ja = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function ka(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < ja.length; f++) c = ja[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var D, E, F, G;

    function la() {
        return q.navigator ? q.navigator.userAgent : m
    }
    G = F = E = D = n;
    var H;
    if (H = la()) {
        var ma = q.navigator;
        D = 0 == H.indexOf("Opera");
        E = !D && -1 != H.indexOf("MSIE");
        F = !D && -1 != H.indexOf("WebKit");
        G = !D && !F && "Gecko" == ma.product
    }
    var I = E,
        J = G,
        na = F;

    function oa() {
        var a = q.document;
        return a ? a.documentMode : h
    }
    var K;
    e: {
        var L = "",
            M;
        if (D && q.opera) var N = q.opera.version,
            L = "function" == typeof N ? N() : N;
        else if (J ? M = /rv\:([^\);]+)(\)|;)/ : I ? M = /MSIE\s+([^\);]+)(\)|;)/ : na && (M = /WebKit\/(\S+)/), M) var pa = M.exec(la()),
            L = pa ? pa[1] : "";
        if (I) {
            var qa = oa();
            if (qa > parseFloat(L)) {
                K = String(qa);
                break e
            }
        }
        K = L
    }
    var ea = K,
        O = {},
        ra = q.document,
        sa = !ra || !I ? h : oa() || ("CSS1Compat" == ra.compatMode ? parseInt(ea, 10) : 5);
    if (J || I) {
        var P;
        if (P = I) P = I && 9 <= sa;
        P || J && (O["1.9.1"] || (O["1.9.1"] = 0 <= da("1.9.1")))
    }
    var ta = I && !(O["9"] || (O["9"] = 0 <= da("9")));

    function ua(a) {
        a = a.className;
        return u(a) && a.match(/\S+/g) || []
    }

    function Q(a, b) {
        for (var c = ua(a), d = ha(arguments, 1), e = c, f = 0; f < d.length; f++) 0 <= A(e, d[f]) || e.push(d[f]);
        a.className = c.join(" ")
    }

    function R(a, b) {
        var c = ua(a),
            d = ha(arguments, 1),
            c = va(c, d);
        a.className = c.join(" ")
    }

    function va(a, b) {
        return fa(a, function(a) {
            return !(0 <= A(b, a))
        })
    };

    function S(a) {
        return u(a) ? document.getElementById(a) : a
    }

    function T(a, b) {
        var c = b || document;
        c.querySelectorAll && c.querySelector ? c = c.querySelector("." + a) : (c = b || document, c = (c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : c.getElementsByClassName ? c.getElementsByClassName(a) : wa(a, b))[0]);
        return c || m
    }

    function wa(a, b) {
        var c, d, e, f;
        c = document;
        c = b || c;
        if (c.querySelectorAll && c.querySelector && a) return c.querySelectorAll("" + (a ? "." + a : ""));
        if (a && c.getElementsByClassName) {
            var k = c.getElementsByClassName(a);
            return k
        }
        k = c.getElementsByTagName("*");
        if (a) {
            f = {};
            for (d = e = 0; c = k[d]; d++) {
                var g = c.className;
                "function" == typeof g.split && 0 <= A(g.split(/\s+/), a) && (f[e++] = c)
            }
            f.length = e;
            return f
        }
        return k
    }

    function xa(a) {
        var b = document,
            c = b.createElement("div");
        I ? (c.innerHTML = "<br>" + a, c.removeChild(c.firstChild)) : c.innerHTML = a;
        if (1 == c.childNodes.length) return c.removeChild(c.firstChild);
        for (a = b.createDocumentFragment(); c.firstChild;) a.appendChild(c.firstChild);
        return a
    }
    var ya = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        za = {
            IMG: " ",
            BR: "\n"
        };

    function Aa(a, b, c) {
        if (!(a.nodeName in ya))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in za) b.push(za[a.nodeName]);
        else
            for (a = a.firstChild; a;) Aa(a, b, c), a = a.nextSibling
    }

    function Ba(a, b) {
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return m
    };
    var U = r("yt.dom.getNextId_");
    if (!U) {
        U = function() {
            return ++Ca
        };
        y("yt.dom.getNextId_", U);
        var Ca = 0
    };

    function V(a) {
        if (a = a || window.event) {
            for (var b in a) b in Da || (this[b] = a[b]);
            this.scale = a.scale;
            this.rotation = a.rotation;
            this.e = a;
            if ((b = a.target || a.srcElement) && 3 == b.nodeType) b = b.parentNode;
            this.target = b;
            if (b = a.relatedTarget) try {
                b = b.nodeName && b
            } catch (c) {
                b = m
            } else "mouseover" == this.type ? b = a.fromElement : "mouseout" == this.type && (b = a.toElement);
            this.relatedTarget = b;
            this.clientX = a.clientX != h ? a.clientX : a.pageX;
            this.clientY = a.clientY != h ? a.clientY : a.pageY;
            if (document.body && document.documentElement) {
                b = document.body.scrollLeft +
                    document.documentElement.scrollLeft;
                var d = document.body.scrollTop + document.documentElement.scrollTop;
                this.pageX = a.pageX != h ? a.pageX : a.clientX + b;
                this.pageY = a.pageY != h ? a.pageY : a.clientY + d
            }
            this.keyCode = a.keyCode ? a.keyCode : a.which;
            this.charCode = a.charCode || ("keypress" == this.type ? this.keyCode : 0);
            this.altKey = a.altKey;
            this.ctrlKey = a.ctrlKey;
            this.shiftKey = a.shiftKey;
            "MozMousePixelScroll" == this.type ? (this.wheelDeltaX = a.axis == a.HORIZONTAL_AXIS ? a.detail : 0, this.wheelDeltaY = a.axis == a.HORIZONTAL_AXIS ? 0 : a.detail) :
                window.opera ? (this.wheelDeltaX = 0, this.wheelDeltaY = a.detail) : 0 == a.wheelDelta % 120 ? "WebkitTransform" in document.documentElement.style ? window.b && 0 == navigator.platform.indexOf("Mac") ? (this.wheelDeltaX = a.wheelDeltaX / -30, this.wheelDeltaY = a.wheelDeltaY / -30) : (this.wheelDeltaX = a.wheelDeltaX / -1.2, this.wheelDeltaY = a.wheelDeltaY / -1.2) : (this.wheelDeltaX = 0, this.wheelDeltaY = a.wheelDelta / -1.6) : (this.wheelDeltaX = a.wheelDeltaX / -3, this.wheelDeltaY = a.wheelDeltaY / -3)
        }
    }
    p = V.prototype;
    p.e = m;
    p.type = "";
    p.target = m;
    p.relatedTarget = m;
    p.currentTarget = m;
    p.keyCode = 0;
    p.charCode = 0;
    p.altKey = n;
    p.ctrlKey = n;
    p.shiftKey = n;
    p.clientX = 0;
    p.clientY = 0;
    p.pageX = 0;
    p.pageY = 0;
    p.wheelDeltaX = 0;
    p.wheelDeltaY = 0;
    p.rotation = 0;
    p.scale = 1;
    p.preventDefault = function() {
        this.e.returnValue = n;
        this.e.preventDefault && this.e.preventDefault()
    };
    p.stopPropagation = function() {
        this.e.cancelBubble = l;
        this.e.stopPropagation && this.e.stopPropagation()
    };
    var Da = {
        stopPropagation: 1,
        preventMouseEvent: 1,
        preventManipulation: 1,
        preventDefault: 1,
        layerX: 1,
        layerY: 1,
        scale: 1,
        rotation: 1
    };
    var C = r("yt.events.listeners_") || {};
    y("yt.events.listeners_", C);
    var Ea = r("yt.events.counter_") || {
        count: 0
    };
    y("yt.events.counter_", Ea);

    function Fa(a, b, c) {
        return ia(function(d) {
            return d[0] == a && d[1] == b && d[2] == c && d[4] == n
        })
    }

    function W(a, b, c) {
        if (!a || !a.addEventListener && !a.attachEvent) return "";
        var d = Fa(a, b, c);
        if (d) return d;
        var d = ++Ea.count + "",
            e = !(!("mouseenter" == b || "mouseleave" == b) || !a.addEventListener || "onmouseenter" in document),
            f;
        f = e ? function(d) {
            d = new V(d);
            if (!Ba(d.relatedTarget, function(b) {
                    return b == a
                })) return d.currentTarget = a, d.type = b, c.call(a, d)
        } : function(b) {
            b = new V(b);
            b.currentTarget = a;
            return c.call(a, b)
        };
        C[d] = [a, b, c, f, n];
        a.addEventListener ? "mouseenter" == b && e ? a.addEventListener("mouseover", f, n) : "mouseleave" == b &&
            e ? a.addEventListener("mouseout", f, n) : "mousewheel" == b && "MozBoxSizing" in document.documentElement.style ? a.addEventListener("MozMousePixelScroll", f, n) : a.addEventListener(b, f, n) : a.attachEvent("on" + b, f);
        return d
    };
    var Ga = "StopIteration" in q ? q.StopIteration : Error("StopIteration");

    function Ha() {}
    Ha.prototype.b = function() {
        throw Ga;
    };
    Ha.prototype.O = function() {
        return this
    };

    function Ia(a, b) {
        this.d = {};
        this.a = [];
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a) {
            var e;
            if (a instanceof Ia) {
                X(a);
                d = a.a.concat();
                X(a);
                e = [];
                for (c = 0; c < a.a.length; c++) e.push(a.d[a.a[c]])
            } else {
                var c = [],
                    f = 0;
                for (d in a) c[f++] = d;
                d = c;
                c = [];
                f = 0;
                for (e in a) c[f++] = a[e];
                e = c
            }
            for (c = 0; c < d.length; c++) this.set(d[c], e[c])
        }
    }
    p = Ia.prototype;
    p.s = 0;
    p.o = 0;

    function X(a) {
        if (a.s != a.a.length) {
            for (var b = 0, c = 0; b < a.a.length;) {
                var d = a.a[b];
                Object.prototype.hasOwnProperty.call(a.d, d) && (a.a[c++] = d);
                b++
            }
            a.a.length = c
        }
        if (a.s != a.a.length) {
            for (var e = {}, c = b = 0; b < a.a.length;) d = a.a[b], Object.prototype.hasOwnProperty.call(e, d) || (a.a[c++] = d, e[d] = 1), b++;
            a.a.length = c
        }
    }
    p.get = function(a, b) {
        return Object.prototype.hasOwnProperty.call(this.d, a) ? this.d[a] : b
    };
    p.set = function(a, b) {
        Object.prototype.hasOwnProperty.call(this.d, a) || (this.s++, this.a.push(a), this.o++);
        this.d[a] = b
    };
    p.O = function(a) {
        X(this);
        var b = 0,
            c = this.a,
            d = this.d,
            e = this.o,
            f = this,
            k = new Ha;
        k.b = function() {
            for (;;) {
                if (e != f.o) throw Error("The map has changed since the iterator was created");
                if (b >= c.length) throw Ga;
                var g = c[b++];
                return a ? g : d[g]
            }
        };
        return k
    };

    function Ja(a, b, c) {
        for (var d = a.elements, e, f = 0; e = d[f]; f++)
            if (!(e.form != a || e.disabled || "fieldset" == e.tagName.toLowerCase())) {
                var k = e.name;
                switch (e.type.toLowerCase()) {
                    case "file":
                    case "submit":
                    case "reset":
                    case "button":
                        break;
                    case "select-multiple":
                        e = Ka(e);
                        if (e != m)
                            for (var g, s = 0; g = e[s]; s++) c(b, k, g);
                        break;
                    default:
                        g = Ka(e), g != m && c(b, k, g)
                }
            } d = a.getElementsByTagName("input");
        for (f = 0; e = d[f]; f++) e.form == a && "image" == e.type.toLowerCase() && (k = e.name, c(b, k, e.value), c(b, k + ".x", "0"), c(b, k + ".y", "0"))
    }

    function La(a, b, c) {
        var d = a.get(b);
        d || (d = [], a.set(b, d));
        d.push(c)
    }

    function Ma(a, b, c) {
        a.push(encodeURIComponent(b) + "=" + encodeURIComponent(c))
    }

    function Ka(a) {
        var b = a.type;
        if (b === h) return m;
        switch (b.toLowerCase()) {
            case "checkbox":
            case "radio":
                return a.checked ? a.value : m;
            case "select-one":
                return b = a.selectedIndex, 0 <= b ? a.options[b].value : m;
            case "select-multiple":
                for (var b = [], c, d = 0; c = a.options[d]; d++) c.selected && b.push(c.value);
                return b.length ? b : m;
            default:
                return a.value !== h ? a.value : m
        }
    };

    function Na(a) {
        return eval("(" + a + ")")
    };

    function Oa() {
        this.b = ca()
    }
    new Oa;
    Oa.prototype.set = function(a) {
        this.b = a
    };
    Oa.prototype.get = function() {
        return this.b
    };

    function Pa(a, b, c) {
        if ("array" == t(b))
            for (var d = 0; d < b.length; d++) Pa(a, String(b[d]), c);
        else b != m && c.push("&", a, "" === b ? "" : "=", encodeURIComponent(String(b)))
    }

    function Qa(a, b) {
        for (var c in b) Pa(c, b[c], a);
        return a
    };

    function Ra(a) {
        "?" == a.charAt(0) && (a = a.substr(1));
        a = a.split("&");
        for (var b = {}, c = 0, d = a.length; c < d; c++) {
            var e = a[c].split("=");
            if (1 == e.length && e[0] || 2 == e.length) {
                var f = decodeURIComponent((e[0] || "").replace(/\+/g, " ")),
                    e = decodeURIComponent((e[1] || "").replace(/\+/g, " "));
                f in b ? "array" == t(b[f]) ? ga(b[f], e) : b[f] = [b[f], e] : b[f] = e
            }
        }
        return b
    }

    function Sa(a) {
        a = Qa([], a);
        a[0] = "";
        return a.join("")
    }

    function Ta(a, b) {
        var c = a.split("?", 2);
        a = c[0];
        var c = Ra(c[1] || ""),
            d;
        for (d in b) c[d] = b[d];
        d = Qa([a], c);
        if (d[1]) {
            var c = d[0],
                e = c.indexOf("#");
            0 <= e && (d.push(c.substr(e)), d[0] = c = c.substr(0, e));
            e = c.indexOf("?");
            0 > e ? d[1] = "?" : e == c.length - 1 && (d[1] = h)
        }
        return d.join("")
    };
    var Ua = window.yt && window.yt.config_ || {};
    y("yt.config_", Ua);
    y("yt.tokens_", window.yt && window.yt.tokens_ || {});
    y("yt.globals_", window.yt && window.yt.globals_ || {});
    y("yt.msgs_", window.yt && window.yt.msgs_ || {});
    var Va = window.yt && window.yt.timeouts_ || [];
    y("yt.timeouts_", Va);
    y("yt.intervals_", window.yt && window.yt.intervals_ || []);

    function Wa(a, b) {
        var c = window.setTimeout(a, b);
        Va.push(c);
        return c
    };
    var Y = m;
    "undefined" != typeof XMLHttpRequest ? Y = function() {
        return new XMLHttpRequest
    } : "undefined" != typeof ActiveXObject && (Y = function() {
        return new ActiveXObject("Microsoft.XMLHTTP")
    });

    function Xa(a, b, c, d, e, f, k) {
        var g = Y && Y();
        if ("open" in g) {
            g.onreadystatechange = function() {
                4 == (g && "readyState" in g ? g.readyState : 0) && b && b(g)
            };
            c = (c || "GET").toUpperCase();
            d = d || "";
            g.open(c, a, l);
            f && (g.responseType = f);
            k && (g.withCredentials = l);
            a = "POST" == c;
            if (e)
                for (var s in e) g.setRequestHeader(s, e[s]), "content-type" == s.toLowerCase() && (a = n);
            a && g.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            g.send(d);
            return g
        }
    }

    function Ya(a, b) {
        var c = b.format || "JSON";
        b.P && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
        var d = b.A;
        d && (a = Ta(a, d));
        var e = b.J || "";
        if (d = b.Q) e = Ra(e), ka(e, d), e = Sa(e);
        var f = n,
            k, g = Xa(a, function(a) {
                if (!f) {
                    f = l;
                    k && window.clearTimeout(k);
                    var d;
                    e: switch (a && "status" in a ? a.status : -1) {
                        case 0:
                        case 200:
                        case 204:
                        case 304:
                            d = l;
                            break e;
                        default:
                            d = n
                    }
                    var e = m;
                    if (d || 400 <= a.status && 500 > a.status) e = Za(c, a);
                    if (d) e: {
                        switch (c) {
                            case "XML":
                                d = 0 == parseInt(e &&
                                    e.return_code, 10);
                                break e;
                            case "RAW":
                                d = l;
                                break e
                        }
                        d = !!e
                    }
                    var e = e || {},
                        g = b.p || q;
                    d ? b.q && b.q.call(g, a, e) : b.onError && b.onError.call(g, a, e);
                    b.K && b.K.call(g, a, e)
                }
            }, b.method, e, b.headers, b.responseType, b.withCredentials);
        b.L && 0 < b.timeout && (k = Wa(function() {
            f || (f = l, g.abort(), window.clearTimeout(k), b.L.call(b.p || q, g))
        }, b.timeout))
    }

    function $a(a, b) {
        var c = b || {};
        c.method = a.method.toUpperCase();
        if ("POST" == c.method) {
            var d = [];
            Ja(a, d, Ma);
            c.J = d.join("&")
        } else {
            var e = new Ia;
            Ja(a, e, La);
            X(e);
            for (var d = {}, f = 0; f < e.a.length; f++) {
                var k = e.a[f];
                d[k] = e.d[k]
            }
            e = c.A || {};
            ka(e, d);
            c.A = e
        }
        Ya(a.action, c)
    }

    function Za(a, b) {
        var c = m;
        switch (a) {
            case "JSON":
                var d = b.responseText,
                    e = b.getResponseHeader("Content-Type") || "";
                d && 0 <= e.indexOf("json") && (c = Na(d));
                break;
            case "XML":
                if (d = (d = b.responseXML) ? ab(d) : m) c = {}, B(d.getElementsByTagName("*"), function(a) {
                    c[a.tagName] = bb(a)
                })
        }
        return c
    }

    function ab(a) {
        return !a ? m : (a = ("responseXML" in a ? a.responseXML : a).getElementsByTagName("root")) && 0 < a.length ? a[0] : m
    }

    function bb(a) {
        var b = "";
        B(a.childNodes, function(a) {
            b += a.nodeValue
        });
        return b
    };

    function cb(a, b) {
        if ((a = S(a)) && a.style) {
            a.style.display = b ? "" : "none";
            var c = a;
            !b ? Q(c, "hid") : R(c, "hid")
        }
    }

    function Z(a) {
        B(arguments, function(a) {
            cb(a, l)
        })
    }

    function $(a) {
        B(arguments, function(a) {
            cb(a, n)
        })
    };
    var db;

    function eb() {
        this.i = S("watch-headline-title");
        this.u = T("watch-title", this.i);
        this.h = S("watch-headline-title-form");
        this.C = S("watch-headline-title-reset");
        this.j = S("action-panel-details");
        this.t = S("watch-description");
        this.g = S("watch-video-info-form");
        this.F = S("watch-video-info-submit");
        this.D = S("watch-video-info-reset");
        this.w = S("watch-privacy-icon");
        this.B = S("watch-description-toggle");
        this.k = n;
        this.b = [];
        this.b.push(W(this.i, "click", x(this.G, this)));
        this.b.push(W(this.h, "submit", x(this.H, this)));
        this.b.push(W(this.C, "click", x(this.v, this)));
        this.b.push(W(this.j, "click", x(function(a) {
            var b;
            if (b = !this.k) {
                b = this.B;
                a = a.target;
                if (b.contains && 1 == a.nodeType) a = b == a || b.contains(a);
                else if ("undefined" != typeof b.compareDocumentPosition) a = b == a || Boolean(b.compareDocumentPosition(a) & 16);
                else {
                    for (; a && b != a;) a = a.parentNode;
                    a = a == b
                }
                b = !a
            }
            b && fb(this)
        }, this)));
        this.b.push(W(this.F, "click", function(a) {
            a.stopPropagation()
        }));
        this.b.push(W(this.g, "submit", x(this.I, this)));
        this.b.push(W(this.D, "click", x(function(a) {
            a.stopPropagation();
            gb(this)
        }, this)));
        this.w && this.b.push(W(this.w, "click", x(function(a) {
            a.stopPropagation();
            fb(this)
        }, this)))
    }
    p = eb.prototype;
    p.v = function() {
        $(this.h);
        Z(this.i);
        Q(this.u, "watch-editable")
    };

    function gb(a) {
        Z(a.t);
        $(a.g);
        Q(a.j, "watch-editable");
        a.k = n
    }

    function fb(a) {
        $(a.t);
        Z(a.g);
        R(a.j, "watch-editable");
        a.g.scrollIntoView();
        T("yt-uix-form-input-textarea", a.g).select();
        a.k = l
    }
    p.G = function() {
        $(this.i);
        Z(this.h);
        R(this.u, "watch-editable");
        var a = T("yt-uix-form-input-text", this.h),
            b = this.i;
        if (ta && "innerText" in b) b = b.innerText.replace(/(\r\n|\r|\n)/g, "\n");
        else {
            var c = [];
            Aa(b, c, l);
            b = c.join("")
        }
        b = b.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        b = b.replace(/\u200B/g, "");
        ta || (b = b.replace(/ +/g, " "));
        " " != b && (b = b.replace(/^\s*/, ""));
        a.value = b;
        a.select()
    };
    p.H = function(a) {
        a.preventDefault();
        $a(this.h, {
            p: this,
            q: this.N
        })
    };
    p.N = function(a, b) {
        this.v();
        hb(b.html)
    };
    p.I = function(a) {
        a.preventDefault();
        $a(this.g, {
            p: this,
            q: this.M
        })
    };
    p.M = function(a, b) {
        gb(this);
        hb(b.html)
    };

    function hb(a) {
        for (var b in a) {
            var c = xa(a[b]);
            B(c.childNodes, function(a) {
                if (a.id) {
                    var b = S(a.id);
                    b && (b.innerHTML = a.innerHTML, b.className = a.className, b.title = a.title)
                }
            })
        }
    };
    y("yt.www.watch.edit.init", function() {
        var a;
        if (a = !db) a = "WATCH_EDIT_ENABLED" in Ua ? Ua.WATCH_EDIT_ENABLED : h;
        a && (db = new eb)
    });
})();