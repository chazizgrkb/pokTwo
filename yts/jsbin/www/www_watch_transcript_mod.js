(function(m) {
    var window = this;
    var Eba = function(a, b) {
        var c = -1;
        (0, m.Aw)(a.cc, !0).some(function(a, e) {
            if (a.equals(b)) return c = e, !0
        });
        return c
    };
    var Fba = function(a, b) {
        var c = (0, m.Hw)(a, !0);
        null != c && (0, m.Gw)(a, c, b)
    };
    var T6 = function() {
        if ((0, m.v)("TTS_URL") && !U6) {
            var a = (0, m.v)("PLAYER_REFERENCE");
            a && (U6 = new V6(a))
        }
    };
    var V6 = function(a) {
        this.Sl = !1;
        this.b = a;
        this.eb = [];
        this.nj = [];
        this.wf = new m.Dw((0, m.v)("TTS_URL"), (0, m.v)("VIDEO_ID"), null, !0);
        this.b.addEventListener("captionschanged", (0, m.r)(this.fG, this))
    };
    var W6 = function(a, b) {
        var c = b.languageCode;
        b.languageName = a.wf.El[c] || c;
        b.translationLanguage && (c = b.translationLanguage.languageCode, b.translationLanguage.languageName = a.wf.El[c] || c);
        c = new m.xw(b);
        return !c.g || c.b && !c.b.b ? null : c
    };
    var Gba = function(a) {
        for (var b = a.wf, c = null, d = 0; d < a.nj.length; d++) c = W6(a, a.nj[d]), (0, m.Bw)(b.cc, c);
        var e = (0, m.Aw)(b.cc, !0);
        if (0 >= e.length) m.T.show("watch-transcript-not-found");
        else {
            m.T.show(a.We);
            for (var d = 0, g = e.length; d < g; d++) X6(a, e[d]);
            a.eb.push((0, m.R)(a.We, "change", (0, m.r)(function() {
                var a = (0, m.r)(this.pm, this),
                    c = (0, m.Ew)(b, this.We.value);
                c && (0, m.Gw)(b, c, a)
            }, a)));
            c ? (0, m.Gw)(b, c, (0, m.r)(a.pm, a)) : Fba(b, (0, m.r)(a.pm, a))
        }
    };
    var X6 = function(a, b) {
        var c = (0, m.ue)("option"),
            d = (0, m.ve)((0, m.yw)(b));
        c.value = b.toString();
        c.appendChild(d);
        a.We.appendChild(c)
    };
    var Hba = function(a, b) {
        (0, m.Zc)(a.um);
        var c = Math.min(b.offsetTop - a.dc.offsetTop, a.dc.scrollHeight - a.dc.offsetHeight),
            d = 0;
        a.um = (0, m.$c)((0, m.r)(function() {
            var a = c - this.dc.scrollTop,
                b = Math.round(100 * a / (1E3 - 50 * d));
            Math.abs(a) <= Math.abs(b) || 20 < d ? (this.dc.scrollTop = c, (0, m.Zc)(this.um)) : (this.dc.scrollTop += b, d++)
        }, a), 50)
    };
    var U6 = null;
    m.f = V6.prototype;
    m.f.eb = null;
    m.f.wf = null;
    m.f.Dp = null;
    m.f.Tu = null;
    m.f.Cp = -1;
    m.f.Ap = !1;
    m.f.zp = 0;
    m.f.um = 0;
    m.f.Sl = !1;
    m.f.We = null;
    m.f.dc = null;
    m.f.sm = null;
    m.f.nj = null;
    m.f.dispose = function() {
        (0, m.S)(this.eb);
        this.eb.length = 0;
        this.nj.length = 0;
        (0, m.Zc)(this.zp);
        (0, m.Zc)(this.um)
    };
    m.f.fG = function(a) {
        var b = W6(this, a);
        b && (this.Sl ? ((0, m.Bw)(this.wf.cc, b) && X6(this, b), (0, m.Gw)(this.wf, b, (0, m.r)(this.pm, this))) : this.nj.push(a))
    };
    m.f.open = function(a) {
        this.Sl ? a() : (this.sm = (0, m.D)("watch-transcript-container"), "true" == (0, m.H)(this.sm, "disabled") ? a() : (this.We = window.document.createElement("select"), this.We.id = "watch-transcript-track-selector", m.T.hide(this.We), (0, m.Ce)(this.sm, this.We, 0), this.dc = window.document.createElement("div"), this.dc.id = "transcript-scrollbox", this.eb.push((0, m.R)(this.dc, "mouseover", (0, m.r)(function() {
                this.Ap = !0
            }, this))), this.eb.push((0, m.R)(this.dc, "mouseout", (0, m.r)(function() {
                this.Ap = !1
            }, this))), this.sm.appendChild(this.dc),
            this.eb.push((0, m.hg)(this.dc, "click", (0, m.r)(this.II, this), "caption-line")), (0, m.Iw)(this.wf, (0, m.r)(function() {
                Gba(this);
                a()
            }, this)), this.Sl = !0))
    };
    m.f.II = function(a) {
        var b = (0, m.H)(a.currentTarget, "time");
        if (b) return this.b.seekTo((0, window.parseInt)(b, 10), !0), a.preventDefault()
    };
    m.f.pm = function(a, b) {
        this.Cp = -1;
        this.Dp = a;
        this.Tu = b;
        var c = this.Dp.b;
        (0, m.Zc)(this.zp);
        this.dc.innerHTML = "";
        for (var d = window.document.createDocumentFragment(), e = 0, g = c.length; e < g; e++) {
            var h = c[e],
                k = window.document.createElement("div"),
                p = h.b / 1E3;
            k.id = "cp-" + e;
            k.className = "caption-line";
            (0, m.Hc)(k, "time", p + "");
            d.appendChild(k);
            var u = window.document.createElement("div");
            u.className = "caption-line-time";
            u.innerHTML = Math.floor(p / 60) + ":" + (10 > p % 60 ? "0" : "") + Math.floor(p % 60);
            k.appendChild(u);
            p = window.document.createElement("div");
            p.className = "caption-line-text";
            p.innerHTML = h.He;
            k.appendChild(p)
        }
        this.We.selectedIndex = Eba(this.wf, this.Tu);
        this.dc.appendChild(d);
        this.zp = (0, m.$c)((0, m.r)(this.$F, this), 500)
    };
    m.f.$F = function() {
        for (var a = this.b.getCurrentTime(), b = this.Dp.b, c = this.Cp, d = c;;) {
            var e = 0 <= d ? b[d].b / 1E3 : -1;
            if (a + 0.5 < e) d -= 1;
            else if (e = d + 1 < b.length ? b[d + 1].b / 1E3 : 1E6, a + 0.5 > e) d += 1;
            else break
        }
        d != c && (0 <= c && (a = (0, m.D)("cp-" + c), (0, m.M)(a, "caption-line-highlight")), 0 <= d && (a = (0, m.D)("cp-" + d), (0, m.L)(a, "caption-line-highlight")), this.Cp = d, this.Ap || Hba(this, (0, m.D)("cp-" + (3 <= d ? d - 3 : 0))))
    };
    (0, m.l)("yt.www.watch.transcript.open", function(a) {
        T6();
        U6.open(a)
    }, void 0);
    (0, m.Na)((0, m.Uc)({
        name: "www/watch_transcript",
        deps: ["www/watch"],
        page: "watch",
        init: function() {
            T6()
        },
        dispose: function() {
            U6 && (U6.dispose(), U6 = null)
        }
    }));
})(_yt_www);