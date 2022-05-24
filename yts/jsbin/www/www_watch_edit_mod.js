(function(m) {
    var window = this;
    var c8 = function() {
        this.j = (0, m.D)("watch-headline-title");
        this.L = (0, m.O)("watch-title", this.j);
        this.i = (0, m.D)("watch-headline-title-form");
        this.Q = (0, m.O)("yt-alert-content", this.i);
        this.R = (0, m.D)("watch-headline-title-reset");
        this.k = (0, m.D)("action-panel-details");
        this.O = (0, m.D)("watch-description");
        this.b = (0, m.D)("watch-video-info-form");
        this.W = (0, m.O)("yt-alert-content", this.b);
        this.aa = (0, m.D)("watch-video-info-submit");
        this.Y = (0, m.D)("watch-video-info-reset");
        this.J = (0, m.D)("watch-privacy-icon");
        this.P = (0, m.D)("watch-description-toggle");
        this.F = !1;
        this.C = (0, m.O)("eow-description-textarea", this.b);
        this.B = (0, m.O)("eow-privacy-select", this.b);
        this.A = this.o = null;
        this.g = [];
        this.g.push((0, m.R)(this.j, "click", (0, m.r)(this.Gx, this)));
        this.g.push((0, m.R)(this.i, "submit", (0, m.r)(this.Hx, this)));
        this.g.push((0, m.R)(this.R, "click", (0, m.r)(this.Qq, this)));
        this.g.push((0, m.R)(this.k, "click", (0, m.r)(function(a) {
            this.F || (0, m.Re)(this.P, a.target) || d8(this)
        }, this)));
        this.g.push((0, m.R)(this.aa, "click", function(a) {
            a.stopPropagation()
        }));
        this.g.push((0, m.R)(this.b, "submit", (0, m.r)(this.Ix, this)));
        this.g.push((0, m.R)(this.Y, "click", (0, m.r)(function(a) {
            a.stopPropagation();
            e8(this, !0)
        }, this)));
        this.J && this.g.push((0, m.R)(this.J, "click", (0, m.r)(function(a) {
            a.stopPropagation();
            d8(this)
        }, this)))
    };
    var e8 = function(a, b) {
        m.T.show(a.O);
        m.T.hide(a.b);
        (0, m.L)(a.k, "watch-editable");
        b && (a.o && (a.C.value = a.o), a.A && ((0, m.PC)(a.B, a.A), m.Ll.getInstance().kd(a.B)));
        a.F = !1
    };
    var d8 = function(a) {
        m.T.hide(a.O);
        m.T.show(a.b);
        (0, m.M)(a.k, "watch-editable");
        (0, m.M)(a.b, "yt-uix-form-error");
        a.o = a.C.value;
        a.A = a.B.value;
        a.b.scrollIntoView();
        a.C.select();
        a.F = !0
    };
    var f8 = function(a) {
        for (var b in a) {
            var c = (0, m.we)(a[b]);
            (0, m.A)(c.childNodes, function(a) {
                if (a.id) {
                    var b = (0, m.D)(a.id);
                    b && (b.innerHTML = a.innerHTML, b.className = a.className, b.title = a.title)
                }
            })
        }
    };
    var g8;
    m.f = c8.prototype;
    m.f.dispose = function() {
        (0, m.S)(this.g);
        this.g = []
    };
    m.f.Qq = function() {
        m.T.hide(this.i);
        m.T.show(this.j);
        (0, m.L)(this.L, "watch-editable")
    };
    m.f.Gx = function() {
        m.T.hide(this.j);
        m.T.show(this.i);
        (0, m.M)(this.L, "watch-editable");
        (0, m.M)(this.i, "yt-uix-form-error");
        var a = (0, m.O)("yt-uix-form-input-text", this.i);
        a.value = (0, m.Ve)(this.j);
        a.select()
    };
    m.f.Hx = function(a) {
        a.preventDefault();
        (0, m.Pj)(this.i, {
            N: this,
            onSuccess: this.qH
        })
    };
    m.f.qH = function(a, b) {
        0 < b.errors.length ? ((0, m.Se)(this.Q, b.errors[0]), (0, m.L)(this.i, "yt-uix-form-error")) : (this.Qq(), f8(b.html))
    };
    m.f.Ix = function(a) {
        a.preventDefault();
        (0, m.Pj)(this.b, {
            N: this,
            onSuccess: this.SF
        })
    };
    m.f.SF = function(a, b) {
        0 < b.errors.length ? ((0, m.Se)(this.W, b.errors[0]), (0, m.L)(this.b, "yt-uix-form-error")) : (e8(this), f8(b.html))
    };
    (0, m.Na)((0, m.Uc)({
        name: "www/watch_edit",
        deps: ["www/watch"],
        page: "watch",
        init: function() {
            !g8 && (0, m.v)("WATCH_EDIT_ENABLED") && (g8 = new c8)
        },
        dispose: function() {
            g8 && (g8.dispose(), g8 = null)
        }
    }));
})(_yt_www);