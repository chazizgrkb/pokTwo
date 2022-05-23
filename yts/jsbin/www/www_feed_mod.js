(function(m) {
    var window = this;
    var D4 = function() {
        return (0, m.N)("feed-item-checkbox", E4)
    };
    var F4 = function(a, b) {
        if ("FORM" == a.tagName)
            for (var c = a.elements, d = 0; a = c[d]; d++) F4(a, b);
        else !0 == b && a.blur(), a.disabled = b
    };
    var G4 = function(a) {
        (0, m.O)("yt-alert-content", H4).innerHTML = a;
        m.T.show(H4);
        m.T.hide(I4)
    };
    var J4 = function() {
        var a = [],
            b = !0,
            c = D4();
        (0, m.A)(c, function(c) {
            c.checked && (a.push(c.value), b = !1)
        });
        (0, m.Hc)(K4, "video-ids", a.join(","));
        F4(K4, b);
        F4(L4, b);
        M4 && F4(M4, b);
        N4 && F4(N4, 0 == c.length)
    };
    var faa = function(a, b, c, d) {
        var e = "",
            g = {};
        "personal" == b ? (e = "/feed_ajax?action_load_personal_feed=1", g = {
            feed_name: a
        }) : "social" == b ? (e = "/feed_ajax?action_load_social_feed=1", g = {
            feed_name: a
        }) : "system" == b ? (e = "/feed_ajax?action_load_system_feed=1", g = {
            feed_name: a
        }) : "main" == b ? e = "/feed_ajax?action_load_main_feed=1" : "user" == b ? (e = "/feed_ajax?action_load_user_feed=1", g = {
            user_id: a
        }) : "collection" == b && (e = "/feed_ajax?action_load_collection_feed=1", g = {
            collection_id: a
        });
        c && (g.filter_type = c);
        d && (g.paging = d);
        (0, m.v)("FEED_DEBUG") &&
        (g.debug = (0, m.v)("FEED_DEBUG"));
        return {
            url: e,
            ca: g
        }
    };
    var O4 = function(a) {
        G4(a);
        m.T.toggle((0, m.D)("watch-history-pause-container"), (0, m.D)("watch-history-resume-container"))
    };
    var P4 = function() {
        var a = (0, m.N)("watched", E4).length;
        Q4 && F4(Q4, 0 == a)
    };
    var R4 = function(a) {
        if (S4) {
            var b = (0, window.parseInt)((0, m.Ve)(S4).replace(gaa, ""), 10);
            S4.innerHTML = b - a
        }
        J4();
        (0, m.Pl)(T4, !1);
        (0, m.zq)(E4)
    };
    var haa = function(a, b, c, d, e) {
        c = faa(b, c, d, e);
        b = c.url;
        c = c.ca;
        var g = (0, m.O)("feed-load-more-container", a);
        (0, m.L)(g, "loading");
        (0, m.U)(b, {
            ca: c,
            format: "JSON",
            onSuccess: function(b, c) {
                var d = (0, m.Sf)(c.feed_html);
                if (d) {
                    var e = (0, m.O)("last", a);
                    e && (0, m.M)(e, "last");
                    (0, m.Ae)(d, g);
                    (0, m.zq)(d);
                    m.fy.getInstance().nd();
                    (0, m.M)(g, "loading");
                    c.paging ? (0, m.Hc)(a, "paging", c.paging) : m.T.hide(g);
                    m.T.hide(U4)
                } else(0, m.M)(g, "loading")
            },
            onError: function() {
                (0, m.M)(g, "loading");
                m.T.show(U4)
            }
        })
    };
    var iaa = function() {
        G4((0, m.Yc)("HISTORY_FEED_CLEARED"));
        var a = D4();
        0 != a.length && ((0, m.$e)(a[0], "UL").innerHTML = "", J4())
    };
    var jaa = function() {
        O4((0, m.Yc)("HISTORY_FEED_RESUMED"))
    };
    var kaa = function() {
        O4((0, m.Yc)("HISTORY_FEED_PAUSED"))
    };
    var V4 = function() {
        m.T.hide(H4);
        m.T.show(I4)
    };
    var laa = function() {
        var a = 0;
        (0, m.A)(D4(), function(b) {
            b.checked && ((0, m.De)((0, m.$e)(b, "LI")), a++)
        });
        R4(a)
    };
    var maa = function() {
        G4((0, m.Yc)("WATCHED_VIDEOS_REMOVED"));
        var a = 0;
        (0, m.A)((0, m.N)("watched", E4), function(b) {
            (0, m.De)((0, m.$e)(b, "LI"));
            a++
        });
        R4(a);
        P4()
    };
    var W4 = function(a) {
        (0, m.A)(D4(), function(b) {
            (0, m.Pl)(b, a)
        });
        J4()
    };
    var naa = function(a) {
        a = a.getServiceInfo();
        for (var b in a) {
            var c = (0, m.D)(b + "-connected");
            if (c) {
                var d = a[b],
                    e = (0, m.D)(b + "-not-connected"),
                    g = (0, m.D)(b + "-display-name"),
                    h = d.is_connected;
                m.T.xb(c, h);
                m.T.xb(e, !h);
                (0, m.Se)(g, d.connected_as || "")
            }
        }
    };
    var X4 = function(a) {
        a = (0, m.Q)(a, "feed-container");
        var b = (0, m.Q)(a, "individual-feed"),
            c = (0, m.H)(b, "feed-name") || null,
            b = (0, m.H)(b, "feed-type") || null,
            d = (0, m.H)(a, "filter-type") || null,
            e = (0, m.H)(a, "paging") || null;
        haa(a, c, b, d, e)
    };
    var oaa = function() {
        (0, m.U)("/feed_change_ajax", {
            method: "POST",
            ca: {
                action_clear_history: 1
            },
            ba: {
                session_token: (0, m.ad)("feed_change_ajax")
            },
            onSuccess: iaa,
            onError: V4
        })
    };
    var paa = function() {
        (0, m.U)("/feed_change_ajax", {
            method: "POST",
            ca: {
                action_resume_history: 1
            },
            ba: {
                session_token: (0, m.ad)("feed_change_ajax")
            },
            onSuccess: jaa,
            onError: V4
        })
    };
    var qaa = function() {
        (0, m.U)("/feed_change_ajax", {
            method: "POST",
            ca: {
                action_pause_history: 1
            },
            ba: {
                session_token: (0, m.ad)("feed_change_ajax")
            },
            onSuccess: kaa,
            onError: V4
        })
    };
    var raa = function() {
        (0, m.U)("/feed_change_ajax", {
            method: "POST",
            ca: {
                action_clear_watched_from_watch_later: 1
            },
            ba: {
                session_token: (0, m.ad)("feed_change_ajax")
            },
            onSuccess: maa,
            onError: V4
        })
    };
    var saa = function() {
        var a = (0, m.H)(K4, "video-ids"),
            b = {};
        switch (Y4) {
            case "history":
                b.action_remove_history_entries = 1;
                break;
            case "watch_later":
                b.action_remove_watch_later_entries = 1;
                break;
            case "favorites":
                b.action_remove_favorites_entries = 1;
                break;
            default:
                throw Error("Unsupported feed name: " + Y4);
        }(0, m.U)("/feed_change_ajax", {
            method: "POST",
            ca: b,
            ba: {
                session_token: (0, m.ad)("feed_change_ajax"),
                video_ids: a
            },
            onSuccess: laa,
            onError: V4
        })
    };
    var taa = function() {
        J4()
    };
    var uaa = function(a) {
        a = "false" != (0, m.H)(a.currentTarget, "enabled");
        (0, m.Pl)(T4, a);
        W4(a)
    };
    var vaa = function(a) {
        W4(a.currentTarget.checked)
    };
    var Z4 = function(a) {
        a = a || window.event;
        a.returnValue = !1;
        a.preventDefault && a.preventDefault()
    };
    var waa = function(a) {
        Z4(a);
        a = (0, m.Q)(a.currentTarget, "feed-item-collapsed-container");
        (0, m.Gd)(a, "expanded", "collapsed");
        (0, m.un)()
    };
    var xaa = function(a) {
        Z4(a);
        a = (0, m.Q)(a.currentTarget, "feed-item-collapsed-container");
        (0, m.Gd)(a, "collapsed", "expanded");
        (0, m.un)()
    };
    var yaa = function(a) {
        X4(a.currentTarget)
    };
    var zaa = function(a) {
        (0, m.U)("/addto_ajax?action_delete_from_playlist=1", {
            format: "XML",
            method: "POST",
            ba: {
                video_ids: a.ob,
                full_list_id: a.al || "",
                session_token: (0, m.ad)("addto_ajax")
            },
            N: a.N,
            onError: a.onError,
            onSuccess: a.onSuccess
        })
    };
    var $4 = function(a, b) {
        this.b = a;
        this.k = b;
        this.g = null;
        this.i = (0, m.D)("page");
        this.g = (0, m.R)((0, m.D)("premium-yva-close"), "click", (0, m.r)(this.Ps, this));
        var c = this.b;
        m.qh.getInstance().get("HIDDEN_MASTHEAD_ID") == c || (0, m.L)(this.i, "masthead-ad-expanded");
        this.j = (0, m.R)(window, "message", (0, m.r)(this.FB, this))
    };
    var a5 = function(a) {
        var b = m.qh.getInstance();
        b.set("HIDDEN_MASTHEAD_ID", a);
        b.save()
    };
    var Aaa = function() {
        var a = (0, m.v)("PYV_IFRAME_CONTENT"),
            b = (0, m.D)((0, m.v)("PYV_IFRAME_ID"));
        b && (b = b.contentDocument || b.contentWindow.document, b.open(), b.write("<!DOCTYPE html><html><head></head><body>" + a + "</body></html>"), m.Zd || b.close())
    };
    var Baa = function() {
        var a = (0, m.D)("destination-moments-promo");
        if (a) {
            var b = (0, m.H)(a, "column-name") || "";
            b5 = (0, m.hg)(a, "click", (0, m.E)(Caa, b), "destination-moments-promo-close")
        }
    };
    var Caa = function(a) {
        m.T.hide((0, m.D)("destination-moments-promo"));
        (new m.gy(a)).write("write_reject")
    };
    var Daa = function() {
        var a = (0, m.D)("i18n-local-languages-feed-promo");
        if (a) {
            var b = (0, m.H)(a, "column-name");
            if (b) {
                var c = {
                        gl: (0, m.H)(a, "promo-gl")
                    },
                    c = (0, m.Af)(c);
                (0, m.Gf)("i18n-promo-show", c, void 0);
                c = (0, m.E)(Eaa, b);
                b = (0, m.E)(Faa, b);
                c5.push((0, m.hg)(null, "click", c, "i18n-local-languages-feed-promo-language-option"), (0, m.hg)(a, "click", b, "i18n-local-languages-feed-promo-close"))
            }
        }
    };
    var Eaa = function(a, b) {
        function c() {
            var a = window.document.forms["i18n-local-languages-feed-promo-form"];
            a.hl.value = d;
            a.submit()
        }
        var d = (0, m.H)(b.target, "lang-code"),
            e = (0, m.D)("i18n-local-languages-feed-promo"),
            g = (0, m.H)(e, "promo-gl"),
            e = (0, m.H)(e, "current-lang");
        (0, m.Ff)("i18n-promo-select", (0, m.Af)({
            gl: g,
            lang: d,
            current: e
        }));
        (new m.gy(a)).write("write_accept", {
            onSuccess: c,
            onError: c
        })
    };
    var Faa = function(a) {
        (0, m.S)(c5);
        c5 = [];
        (new m.gy(a)).write("write_dismiss")
    };
    var Gaa = function() {
        var a = (0, m.D)("music-onboarding-promo");
        if (a) {
            var b = (0, m.H)(a, "column-name") || "";
            d5 = (0, m.hg)(a, "click", (0, m.E)(Haa, b), "music-onboarding-promo-close")
        }
    };
    var Haa = function(a) {
        m.T.hide((0, m.Q)((0, m.D)("music-onboarding-promo"), "feed-item-container"));
        (new m.gy(a)).write("write_reject")
    };
    var Iaa = function() {
        (0, m.S)(e5);
        (0, m.Ka)(f5);
        (0, m.A)(g5, function(a) {
            (0, m.x)(a)
        })
    };
    var Jaa = function(a) {
        a.preventDefault();
        a = (0, m.Q)(a.currentTarget, "branded-page-related-channels-item");
        h5(a, !0)
    };
    var i5 = function(a) {
        (0, m.Du)(a, {
            duration: 0.3,
            za: function() {
                (0, m.De)(a)
            }
        })
    };
    var Kaa = function(a) {
        var b = (0, m.N)("branded-page-related-channels-item"),
            c = (0, m.Wb)(b, function(b) {
                return (0, m.H)(b, "external-id") == a
            });
        c && g5.push((0, m.w)(function() {
            h5(c, !1)
        }, 2E3))
    };
    var h5 = function(a, b) {
        var c = window.document.getElementById("channels_you_may_know"),
            c = c && (0, m.Re)(c, a),
            d = !!(0, m.O)("branded-page-related-channels-featured-badge", a),
            e = (0, m.H)(a, "external-id"),
            g = (0, m.$e)(a, "ul"),
            g = (0, m.N)("branded-page-related-channels-item", g),
            g = (0, m.Mb)(g, function(a) {
                return (0, m.H)(a, "external-id")
            }),
            h = {};
        d && (h.featured = 1);
        c && (h.channels_you_may_know = 1);
        (0, m.U)("/guide_ajax?action_reload_channel=1", {
            method: "POST",
            ca: h,
            ba: {
                session_token: (0, m.ad)("guide_ajax"),
                dismissed_id: e,
                shown_ids: g.join(),
                dismiss_old_channel: b
            },
            onSuccess: function(b, c) {
                var d = c.new_suggested_html;
                d ? (d = (0, m.Sf)(d), (0, m.Ee)(d, a), (0, m.zq)(d), (0, m.Cu)(d, 0, 1, {
                    duration: 0.3
                })) : i5(a)
            },
            onError: function() {
                i5(a)
            }
        })
    };
    var Laa = function() {
        var a;
        if (a = (0, m.v)("INNERTUBE_HOLDBACK") ? (0, m.D)("user-interests-promo-holdback") : (0, m.D)("user-interests-promo")) {
            var b = (0, m.H)(a, "external-id") || "";
            j5.push((0, m.hg)(a, "click", (0, m.E)(Maa, b), "user-interests-promo-close"));
            j5.push((0, m.hg)(a, "click", (0, m.E)(Naa, b), "user-interests-promo-yes"));
            j5.push((0, m.hg)(a, "click", (0, m.E)(Oaa, b), "user-interests-promo-no"))
        }
    };
    var Maa = function(a, b) {
        (0, m.v)("INNERTUBE_HOLDBACK") ? m.T.hide("user-interests-promo-holdback"): k5(b.target);
        l5 && m5(a, "dismiss")
    };
    var k5 = function(a) {
        var b = (0, m.Q)(a, "browse-list-item-container");
        a = (0, m.O)("feed-item-dismissal-hide", b);
        b = (0, m.O)("feed-item-dismissable", b);
        m.T.show(a);
        m.T.hide(b)
    };
    var Naa = function(a) {
        var b;
        (0, m.v)("INNERTUBE_HOLDBACK") ? (m.T.hide("user-interests-promo-question-holdback"), m.T.show("user-interests-promo-details-holdback"), b = (0, m.D)("user-interests-promo-shelf-holdback")) : (m.T.hide("user-interests-promo-question"), m.T.show("user-interests-promo-details"), b = (0, m.D)("user-interests-promo-shelf"));
        l5 = !1;
        m5(a, "yes");
        m.fy.getInstance().nd();
        b && (0, m.zq)(b)
    };
    var Oaa = function(a, b) {
        (0, m.v)("INNERTUBE_HOLDBACK") ? m.T.hide("user-interests-promo-holdback"): k5(b.target);
        m5(a, "no")
    };
    var m5 = function(a, b) {
        var c = (0, m.ad)("user_interests_promo_ajax_token"),
            d = {
                external_channel_id: a
            };
        d["action_" + b] = 1;
        (0, m.U)("/user_interests_promo_ajax", {
            method: "POST",
            ca: d,
            ba: {
                session_token: c
            }
        })
    };
    var Paa = function() {
        "DELAYED_EMBEDED" in m.ta && (0, m.A)((0, m.v)("DELAYED_EMBEDED"), function(a) {
            (0, m.Fh)(a.container, a.swf_config)
        });
        "MASTHEAD_ENCRYPTED_ID" in m.ta && (window.masthead = new $4((0, m.v)("MASTHEAD_ENCRYPTED_ID"), (0, m.v)("MASTHEAD_IS_BRANDED")));
        "PYV_IFRAME_ID" in m.ta && Aaa();
        Baa();
        Daa();
        Gaa();
        Laa();
        e5 = (0, m.hg)(window.document.body, "click", Jaa, "branded-page-related-channels-item-close");
        f5.push((0, m.y)("subscription-subscribe-loaded", Kaa));
        (0, m.vy)();
        var a = (0, m.D)("destination-moments-promo");
        a && (a = {
            "impression-count": (0, m.H)(a, "impression-count") || ""
        }, (0, m.Ff)("destination-moments-promo-show", (0, m.Af)(a)))
    };
    var n5 = function(a) {
        this.k = a;
        this.da = (0, m.D)("shared-addto-menu");
        this.A = (0, m.H)(this.k, "feature") || "";
        if (a = (0, m.H)(a, "deferred-save")) this.i = "true" == a.toLowerCase();
        this.j = (0, m.H)(this.k, "video-ids") || "";
        (0, m.Ec)(o5) || (o5 = (0, m.wd)(this.da, "lightweight-panel"));
        (a = (0, m.O)("sign-in", this.da)) ? (0, m.R)(a, "click", (0, m.r)(this.VF, this)) : this.rf()
    };
    var p5 = function(a) {
        var b = Qaa(a);
        (0, m.B)("addto-menu-changed", {
            videoIds: a.j,
            selectedPlaylists: b
        })
    };
    var Raa = function(a) {
        var b = [];
        (0, m.dd)(b, (0, m.N)("playlist-name", a.b.list));
        (0, m.A)(b, function(a) {
            (0, m.Pf)(a) && (a = (0, m.Q)(a, "addto-playlist-item"), a.title = (0, m.H)(a, "possible-tooltip"))
        })
    };
    var Saa = function(a) {
        var b = [],
            c = [];
        a = (0, m.N)("addto-playlist-item", a.da);
        (0, m.A)(a, function(a) {
            (0, m.wd)(a, "to-be-removed") && b.push((0, m.H)(a, "full-list-id"));
            (0, m.wd)(a, "to-be-added") && c.push((0, m.H)(a, "full-list-id"))
        });
        return {
            KI: b,
            JI: c
        }
    };
    var Taa = function(a, b) {
        var c = (0, m.N)("addto-playlist-item", a.da);
        (0, m.A)(c, function(a) {
            var c = (0, m.H)(a, "full-list-id"); - 1 < (0, m.la)(b.KI, c) ? (0, m.I)(a, "to-be-removed") : -1 < (0, m.la)(b.JI, c) && (0, m.I)(a, "to-be-added")
        })
    };
    var Qaa = function(a) {
        var b = (0, m.N)("contains-selected-videos", a.da),
            c = (0, m.N)("to-be-added", a.da),
            d = (0, m.N)("to-be-removed", a.da),
            e = [];
        b && (0, m.A)(b, function(a) {
            -1 < (0, m.la)(d, a) || e.push({
                id: (0, m.H)(a, "full-list-id"),
                name: (0, m.H)(a, "item-name")
            })
        });
        c && (0, m.A)(c, function(a) {
            e.push({
                id: (0, m.H)(a, "full-list-id"),
                name: (0, m.H)(a, "item-name")
            })
        });
        return e
    };
    var Uaa = function(a, b) {
        zaa({
            ob: a.j,
            al: b,
            onSuccess: function() {
                this.rf()
            },
            N: a
        });
        (0, m.Gc)(a.da, "video-ids")
    };
    var Vaa = function(a, b) {
        if (b) {
            var c = m.ne ? "webkitTransitionEnd" : m.sg ? "oTransitionEnd" : m.rg ? "transitionend" : m.Zd && (0, m.Vd)(10) ? "MSTransitionEnd" : null;
            c ? (0, m.eg)(a, c, function() {
                b()
            }) : (0, m.w)(b, 0)
        }
    };
    var q5 = function(a, b, c) {
        c = c ? "slide" : "fade";
        var d = ["fade", "slide"];
        (0, m.yd)(a.g, d);
        (0, m.I)(a.g, c);
        (0, m.yd)(b, d);
        (0, m.I)(b, c);
        o5 && b == a.b.list && (0, m.I)(a.da, "lightweight-panel");
        (0, m.wd)(b, "dismissed-panel") ? ((0, m.J)(b, "dismissed-panel"), (0, m.J)(a.g, "active-panel")) : (c = a.g, (0, m.wd)(c, "active-panel") && ((0, m.J)(c, "active-panel"), (0, m.I)(c, "dismissed-panel")));
        (0, m.I)(b, "active-panel");
        a.g = b
    };
    var Waa = function(a) {
        var b = a.B = (0, m.O)("addto-create-playlist", a.b.Ke);
        (0, m.R)(b, "keydown", (0, m.r)(a.kp, a));
        (0, m.R)(b, "paste", (0, m.r)(a.kp, a));
        Vaa(a.b.Ke, function() {
            b.focus()
        });
        var c = (0, m.O)("addto-create-cancel-button", a.b.Ke);
        (0, m.R)(c, "click", (0, m.r)(function() {
            q5(this, this.b.list, !0)
        }, a));
        c = (0, m.O)("create-playlist-button", a.b.Ke);
        (0, m.R)(c, "click", (0, m.r)(a.dF, a));
        a.C = (0, m.O)("privacy-form", a.b.Ke);
        (0, m.hg)(a.C, "click", (0, m.r)(a.kp, a), "playlist-privacy-option");
        a.F = (0, m.O)("addto-create-playlist-label",
            a.b.Ke);
        a.L = (0, m.O)("create-playlist-button", a.b.Ke)
    };
    var r5 = function(a, b, c, d) {
        (0, m.js)({
            ob: a.i ? "" : a.j,
            al: c,
            vp: a.o ? b : null,
            privacy: d,
            GF: a.A,
            onSuccess: a.UF,
            onError: a.TF,
            N: a
        });
        a.i || (0, m.Gc)(a.da, "video-ids")
    };
    var Xaa = function(a, b) {
        var c = (0, m.N)("addto-playlist-item", a.da);
        return (0, m.Wb)(c, function(a) {
            return (0, m.H)(a, "full-list-id") == b
        })
    };
    var s5 = function() {
        this.da = (0, m.D)("tag-editing-menu");
        this.ri = (0, m.O)("yt-combobox-menu-content", this.da);
        this.b = (0, m.O)("yt-combobox-search-input", this.da);
        this.g = (0, m.O)("tag-resource-container");
        this.Dc()
    };
    var t5 = function(a) {
        a.jf ? a.wp = !0 : a.rf()
    };
    var Yaa = function(a, b) {
        a.i = (0, m.O)("add-new-tag");
        a.Jv = (0, m.O)("apply-tag-changes");
        if (b) {
            var c = (0, m.fe)("input", "tag-checkbox", void 0);
            (0, m.A)(c, function(a) {
                var c = b[a.value];
                (0, m.Hc)(a, "initial-tag-membership", c);
                (0, m.Hc)(a, "current-tag-membership", c);
                "ALL" == c ? a.checked = !0 : "SOME" == c && (0, m.Tl)(a, !0)
            }, a)
        }
        u5(a)
    };
    var u5 = function(a) {
        for (var b = (0, m.fe)("input", "tag-checkbox", void 0), c = !1, d = 0; d < b.length; d++)
            if (!Zaa(b[d])) {
                c = !0;
                break
            } c ? (0, m.Bd)(a.da, "show-new", "show-apply") : (0, m.Bd)(a.da, "show-apply", "show-new")
    };
    var Zaa = function(a) {
        switch ((0, m.H)(a, "initial-tag-membership")) {
            case "SOME":
                if (a.zm) return !0;
                break;
            case "NONE":
                if (!a.checked) return !0;
                break;
            case "ALL":
                if (a.checked) return !0
        }
        return !1
    };
    var v5 = function(a, b) {
        if (b) {
            var c = b.error;
            if (c) {
                var d = (0, m.O)("error-small-template", a.da),
                    d = (0, m.Mf)(d);
                w5(a, "yt-alert-error", c, d, 8E3)
            }
        }
    };
    var x5 = function(a, b) {
        if (b) {
            var c = b.success_msg;
            if (c) {
                var d = (0, m.O)("success-small-template", a.da),
                    d = (0, m.Mf)(d);
                w5(a, "yt-alert-success", c, d, 3E3)
            }
        }
    };
    var w5 = function(a, b, c, d, e) {
        var g = (0, m.O)("tag-menu-notifications", a.da);
        (0, m.Rp)(b, c, d, g);
        (0, m.w)((0, m.r)(function() {
            (new m.Wt(d, 750)).play()
        }, a), e)
    };
    var y5 = function(a) {
        a = (0, m.fe)("input", a, void 0);
        for (var b = [], c = [], d = 0; d < a.length; d++) {
            var e = a[d];
            e.zm || (e.checked ? b.push(e.value) : c.push(e.value))
        }
        return {
            checked_values: b,
            unchecked_values: c
        }
    };
    var z5 = function() {
        m.Ma.call(this, "www/feed", ["www/common"], ["feed", "index"], $aa, aba)
    };
    var $aa = function() {
        m.zn.getInstance().nd();
        m.fy.getInstance().nd();
        Paa();
        var a = m.bz = (0, m.D)("feed");
        A5.push((0, m.hg)(a, "click", yaa, "feed-load-more"));
        A5.push((0, m.hg)(a, "click", xaa, "feed-item-expander-button"));
        A5.push((0, m.hg)(a, "click", waa, "feed-item-collapser-button"));
        B5.push((0, m.y)("page-resize", m.az));
        (0, m.az)();
        var b = (0, m.O)("individual-feed"),
            c = !1;
        b && (C5 = (0, m.H)(b, "feed-name"), c = "user" == (0, m.H)(b, "feed-type"));
        if ("history" == C5 || "watch_later" == C5 || "favorites" == C5) Y4 = b = C5, E4 = a, T4 = (0, m.D)("feed-item-select-all-checkbox"),
            H4 = (0, m.D)("managed-feed-success"), I4 = (0, m.D)("managed-feed-error"), L4 = (0, m.D)("feed-item-remove-videos"), M4 = (0, m.D)("tag-menu-button"), N4 = (0, m.D)("managed-toolbar-play-all-button"), S4 = (0, m.D)("feed-title-count"), D5 = (0, m.O)("branded-page-v2-primary-col-header-container"), K4 = (0, m.O)("addto-button", D5), E5.push((0, m.R)(T4, "click", vaa)), E5.push((0, m.hg)(window.document.body, "click", uaa, "feed-item-selection-action")), E5.push((0, m.hg)(window.document.body, "click", taa, "feed-item-checkbox")), E5.push((0, m.R)(L4,
                "click", saa)), "watch_later" == b && (Q4 = (0, m.D)("watch-later-clear-watched-button"), E5.push((0, m.R)(Q4, "click", raa)), P4()), "history" == b && (E5.push((0, m.R)((0, m.D)("watch-history-pause-button"), "click", qaa)), E5.push((0, m.R)((0, m.D)("watch-history-resume-button"), "click", paa)), E5.push((0, m.hg)(window.document.body, "click", oaa, "watch-history-clear-button")));
        (0, m.At)({
            "feed-load-more": X4
        });
        if ((0, m.v)("INIT_AUTOSHARE")) {
            b = new m.$y((0, m.ad)("autoshare"));
            b.addServiceChangedCallback(naa);
            var d = (0, m.D)("facebook-connect-button");
            d && b.registerConnectDialogLauncher(d, "facebook", !0);
            (d = (0, m.D)("twitter-connect-button")) && b.registerConnectDialogLauncher(d, "twitter", !0);
            (d = (0, m.D)("orkut-connect-button")) && b.registerConnectDialogLauncher(d, "orkut", !0);
            window.autoshare = b
        }(0, m.wy)(a, c);
        (0, m.Qu)(0);
        (0, m.Ru)();
        (0, m.hy)()
    };
    var aba = function() {
        (0, m.ra)("DELAYED_EMBEDED", []);
        window.masthead && window.masthead.dispose();
        b5 && ((0, m.S)(b5), b5 = null);
        (0, m.S)(c5);
        c5 = [];
        d5 && ((0, m.S)(d5), d5 = null);
        (0, m.S)(j5);
        j5.length = 0;
        Iaa();
        (0, m.Op)(m.uy);
        U4 = m.bz = null;
        (0, m.S)(A5);
        A5.length = 0;
        (0, m.Ka)(B5);
        B5.length = 0;
        if ("history" == C5 || "watch_later" == C5 || "favorites" == C5)(0, m.S)(E5), E5 = [], M4 = H4 = I4 = T4 = S4 = N4 = Q4 = L4 = K4 = D5 = E4 = null;
        (0, m.Xx)()
    };
    var E4, M4, H4, I4, N4, L4, K4, gaa = /[^\d\.\ ]/g,
        T4, S4, Q4, U4, Y4, E5 = [],
        D5, B5 = [],
        A5 = [],
        C5;
    (0, m.s)($4, m.t);
    var bba = /^https?:\/\/(ad.doubleclick|s0.2mdn).net$/;
    m.f = $4.prototype;
    m.f.FB = function(a) {
        a && a.origin && bba.test(a.origin) && "creative2yt_requestClose" == a.data && this.tx()
    };
    m.f.G = function() {
        $4.D.G.call(this);
        (0, m.S)(this.g);
        (0, m.S)(this.j);
        this.j = this.g = null
    };
    m.f.tx = function() {
        m.T.hide("ad_creative_1");
        (0, m.B)("ads-masthead-hide");
        (0, m.uq)((0, m.D)("page"), !0);
        this.k && m.T.hide("ad_creative_collapse_btn_1");
        m.T.show("ad_creative_expand_btn_1");
        (0, m.M)(this.i, "masthead-ad-expanded");
        a5(this.b);
        (0, m.Gf)("homepage_collapse_masthead_ad", void 0, void 0)
    };
    m.f.Ps = function() {
        m.T.show("ad_creative_expand_btn_1");
        (0, m.De)((0, m.D)("premium-yva"));
        (0, m.De)((0, m.D)("video-masthead"));
        a5(this.b)
    };
    m.f.ZJ = function() {
        (0, m.Gd)(window.document.getElementById("premium-yva"), "premium-yva-unexpanded", "premium-yva-expanded")
    };
    m.f.$J = function() {
        (0, m.Gd)(window.document.getElementById("premium-yva"), "premium-yva-expanded", "premium-yva-unexpanded")
    };
    m.f.LJ = function() {
        m.T.hide("premium-yva");
        (0, m.M)((0, m.D)("premium-yva"), "premium-yva-unexpanded")
    };
    m.f.dK = function() {
        var a = m.qh.getInstance();
        a.set("HIDDEN_MASTHEAD_ID", !1);
        a.save();
        (0, m.Gf)("homepage_expand_masthead_ad", void 0, void 0);
        (0, m.Bi)(window.document.location.href)
    };
    var b5;
    var c5 = [];
    var d5;
    var e5, f5 = [],
        g5 = [];
    var j5 = [],
        l5 = !0;
    var F5, G5, o5;
    m.f = n5.prototype;
    m.f.Eo = !1;
    m.f.rf = function(a) {
        var b = (0, m.H)(this.k, "hide-watch-later"),
            c = {
                action_get_dropdown: "1",
                hide_favorites: (0, m.H)(this.k, "hide-favorites"),
                hide_watch_later: b
            },
            d = {
                video_ids: this.j
            };
        this.A && (c.feature = this.A);
        var e;
        this.i && (e = Saa(this));
        (0, m.U)("/addto_ajax", {
            DF: !0,
            format: "XML",
            method: "POST",
            N: this,
            ca: c,
            ba: d,
            onSuccess: function(c, d) {
                this.da.innerHTML = d.html_content || "";
                (0, m.zd)(this.da, "no-watch-later", !!b);
                (0, m.zd)(this.da, "ie", m.Zd);
                e && Taa(this, e);
                this.Dc();
                Raa(this);
                this.Eo = !1;
                a && a()
            }
        })
    };
    m.f.Dc = function() {
        this.b = {};
        this.b.list = (0, m.D)("addto-list-panel");
        this.b.iK = (0, m.D)("addto-list-saving-panel");
        this.b.wl = (0, m.D)("addto-list-error-panel");
        this.b.Ke = (0, m.D)("addto-create-panel");
        this.g = this.b.list;
        (0, m.hg)(this.b.list, "click", (0, m.r)(this.EE, this), "addto-playlist-item")
    };
    m.f.EE = function(a) {
        a.stopPropagation();
        var b = a.currentTarget;
        (0, m.Tn)(m.Mn.getInstance(), b);
        (0, m.wd)(b, "loading") || ("create-playlist" == (0, m.H)(b, "list-action") ? (this.Eo || (Waa(this), this.Eo = !0), q5(this, this.b.Ke, !0)) : this.i ? ((0, m.wd)(b, "contains-selected-videos") ? (0, m.Ad)(b, "to-be-removed") : (0, m.Ad)(b, "to-be-added"), p5(this)) : ((0, m.I)(b, "loading"), a = (0, m.H)(b, "full-list-id") || "", (0, m.wd)(b, "contains-selected-videos") ? Uaa(this, a) : (b = (0, m.H)(b, "item-name") || "", r5(this, b, a))))
    };
    m.f.dF = function() {
        var a = this.B.value;
        this.o = !0;
        var b = (0, m.Ij)(this.C, "privacy");
        r5(this, a, null, b)
    };
    m.f.kp = function() {
        (0, m.w)((0, m.r)(function() {
            var a = (0, m.zc)(this.B.value);
            a ? m.T.show(this.F) : m.T.hide(this.F);
            var b = (0, m.Ij)(this.C, "privacy");
            a || !b ? (0, m.Of)(this.L, !1) : (0, m.Of)(this.L, !0)
        }, this), 0)
    };
    m.f.UF = function(a, b) {
        var c = this.o;
        this.o = !1;
        if (this.J = b.full_list_id || "") {
            if ("true" == b.show_private_video_warning.toLowerCase()) {
                var d = (0, m.N)("private-video-warning", this.da);
                d && m.T.show.apply(m.T, d)
            }
            this.i && c ? this.rf((0, m.r)(function() {
                var a = Xaa(this, this.J);
                a && (0, m.I)(a, "to-be-added");
                p5(this)
            }, this)) : this.rf()
        }
    };
    m.f.TF = function(a, b) {
        var c = b && b.error_message;
        if (c) {
            (0, m.O)("error-details", this.b.wl).innerHTML = c;
            var c = (0, m.O)("show-menu-link", this.b.wl),
                d = (0, m.R)(c, "click", (0, m.r)(function(a) {
                    a.preventDefault();
                    (0, m.S)(d);
                    this.o ? q5(this, this.b.Ke, !0) : q5(this, this.b.list, !0)
                }, this));
            (0, m.yd)(this.b.wl, ["dismissed-panel", "fade", "slide"]);
            q5(this, this.b.wl)
        }
    };
    m.f.VF = function() {
        var a = (0, m.Bf)("/addto_ajax", {
                action_redirect_to_signin_with_add: 1,
                video_ids: this.j,
                next_url: window.document.location
            }),
            b = (0, m.ue)("form");
        b.action = a;
        b.method = "POST";
        a = (0, m.ue)("input");
        a.type = "hidden";
        a.name = "session_token";
        a.value = (0, m.ad)("addto_ajax_logged_out");
        b.appendChild(a);
        window.document.body.appendChild(b);
        b.submit()
    };
    (0, m.ud)(s5);
    m.f = s5.prototype;
    m.f.jf = !1;
    m.f.wp = !1;
    m.f.rf = function() {
        var a = {},
            b = this.b.value;
        (0, m.zc)(b) || (a.search = b);
        var b = [],
            c = [],
            b = y5("tag-video-checkbox").checked_values,
            c = y5("tag-playlist-checkbox").checked_values;
        this.jf = !0;
        this.wp = !1;
        (0, m.U)("/labels_ajax?action_tag_menu_dropdown=1", {
            method: "POST",
            N: this,
            ca: a,
            ba: {
                video_ids: b,
                playlist_ids: c
            },
            onSuccess: function(a, b) {
                var c = b.tag_membership;
                this.ri.innerHTML = b.html_content || "";
                Yaa(this, c);
                this.jf = !1;
                (0, m.J)(this.da, "loading");
                (0, m.Ql)();
                this.wp && this.rf()
            },
            onError: function(a) {
                this.jf = !1;
                (0, m.J)(this.da,
                    "loading");
                v5(this, (0, m.Mi)(a.response))
            }
        })
    };
    m.f.Dc = function() {
        (0, m.R)(this.b, "keydown", (0, m.r)(this.wu, this));
        (0, m.R)(this.b, "paste", (0, m.r)(this.wu, this));
        (0, m.hg)(this.da, "click", (0, m.r)(this.xE, this), "tag-checkbox");
        (0, m.hg)(this.da, "click", (0, m.r)(this.wE, this), "add-new-tag");
        (0, m.hg)(this.da, "click", (0, m.r)(this.vE, this), "apply-tag-changes");
        this.g && ((0, m.hg)(this.g, "click", (0, m.r)(this.Zo, this), "tag-video-checkbox"), (0, m.hg)(this.g, "click", (0, m.r)(this.Zo, this), "tag-playlist-checkbox"));
        (0, m.hg)(window.document.body, "click", (0, m.r)(this.Zo,
            this), "tag-refresh")
    };
    m.f.wu = function() {
        (0, m.w)((0, m.r)(function() {
            t5(this)
        }, this), 0)
    };
    m.f.xE = function(a) {
        a = a.target;
        switch ((0, m.H)(a, "current-tag-membership")) {
            case "SOME":
                a.zm = !1;
                (0, m.Hc)(a, "current-tag-membership", "ALL");
                break;
            case "ALL":
                (0, m.Hc)(a, "current-tag-membership", "NONE");
                break;
            case "NONE":
                "SOME" == (0, m.H)(a, "initial-tag-membership") ? ((0, m.Tl)(a, !0), (0, m.Hc)(a, "current-tag-membership", "SOME")) : (0, m.Hc)(a, "current-tag-membership", "ALL")
        }
        u5(this)
    };
    m.f.Zo = function() {
        (0, m.I)(this.da, "loading")
    };
    m.f.wE = function() {
        this.i.disabled = !0;
        var a = this.b.value,
            b = y5("tag-video-checkbox").checked_values,
            c = y5("tag-playlist-checkbox").checked_values,
            a = {
                title: a,
                video_ids: b,
                playlist_ids: c
            },
            a = {
                method: "POST",
                ca: {
                    session_token: (0, m.H)(this.da, "ajax-token")
                },
                ba: a,
                onSuccess: function(a, b) {
                    x5(this, b);
                    t5(this)
                },
                onError: function(a) {
                    v5(this, (0, m.Mi)(a.response));
                    t5(this)
                },
                N: this
            };
        (0, m.U)("/labels_ajax?action_create_and_apply_tag=1", a)
    };
    m.f.vE = function() {
        this.Jv.disabled = !0;
        var a = y5("tag-video-checkbox").checked_values,
            b = y5("tag-playlist-checkbox").checked_values,
            c = y5("tag-checkbox"),
            d = (0, m.fe)("input", "tag-checkbox", void 0).length;
        (0, m.U)("/labels_ajax?action_update_membership=1", {
            N: this,
            method: "POST",
            ca: {
                session_token: (0, m.H)(this.da, "ajax-token")
            },
            ba: {
                video_ids: a,
                playlist_ids: b,
                tags_to_add: c.checked_values,
                tags_to_remove: c.unchecked_values,
                num_tags: d
            },
            onSuccess: function(a, b) {
                x5(this, b);
                t5(this)
            },
            onError: function(a) {
                this.Jv.disabled = !1;
                v5(this, (0, m.Mi)(a.response))
            }
        })
    };
    (0, m.l)("yt.flash.embed", m.Fh, void 0);
    (0, m.l)("yt.www.ads.pyv.pyvHomeAfcCallback", m.cy, void 0);
    (0, m.l)("yt.www.ads.MastheadAd", $4, void 0);
    (0, m.l)("yt.www.lists.addto.toggleMenu", function(a, b) {
        var c = m.Mn.getInstance(),
            d = (0, m.V)(c),
            e = (0, m.D)("shared-addto-menu");
        if (b) {
            var g = (0, m.O)("addto-menu", e);
            (0, m.Tn)(c, a);
            G5 = (0, m.J)(a, d);
            F5 || (F5 = g.innerHTML);
            c = (0, m.H)(e, "video-ids");
            d = (0, m.H)(a, "video-ids");
            o5 && (0, m.I)(e, "lightweight-panel");
            (0, m.wd)(a, "flip") && (0, m.I)(e, "flip");
            d && c != d && ((0, m.Hc)(e, "video-ids", d), g.innerHTML = F5, (0, m.Jf)(a), new n5(a))
        } else G5 && (0, m.I)(a, d), (0, m.J)(e, "flip")
    }, void 0);
    (0, m.l)("yt.www.TagEditingMenu.toggleTagMenu", function(a, b) {
        if (b) {
            var c = (0, m.D)("tag-editing-menu");
            (0, m.wd)(c, "loading") ? s5.getInstance().rf(): (s5.getInstance(), (0, m.Ql)());
            c = (0, m.O)("yt-combobox-search-input", c);
            (0, m.w)((0, m.r)(c.focus, c), 0)
        }
    }, void 0);
    $4.prototype.autoCollapsePremiumYva = $4.prototype.LJ;
    $4.prototype.collapse_ad = $4.prototype.tx;
    $4.prototype.expand_ad = $4.prototype.dK;
    $4.prototype.userCollapsePremiumYva = $4.prototype.Ps;
    $4.prototype.userExpandPremiumYva = $4.prototype.ZJ;
    $4.prototype.userUnexpandPremiumYva = $4.prototype.$J;
    (0, m.s)(z5, m.Ma);
    z5.prototype.enable = function() {
        z5.D.enable.call(this);
        (0, m.el)(m.fn);
        (0, m.el)(m.fy)
    };
    z5.prototype.disable = function() {
        z5.D.disable.call(this);
        (0, m.gl)(m.fn);
        (0, m.gl)(m.fy)
    };
    (0, m.Na)(new z5);
})(_yt_www);