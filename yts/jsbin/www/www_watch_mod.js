(function(m) {
    var window = this;
    var LB = function(a) {
        if (!a.length) return 0;
        var b = a[0],
            c = b.offsetHeight;
        1 < a.length && (c = a[1].offsetTop - b.offsetTop);
        return c
    };
    var MB = function(a) {
        var b = (0, m.Ix)("/api/lounge/screens");
        (0, m.U)(b, {
            method: "GET",
            N: a,
            withCredentials: !0,
            onSuccess: function(a, b) {
                this.vf = (0, m.Mb)((0, m.Qc)(b), function(a) {
                    return new m.Su(a)
                });
                this.log_("Load account screens successfully.");
                this.yl();
                this.aj();
                this.K("accountScreenLoad")
            },
            onError: function() {
                (0, m.nx)(m.EB, "RM", "Load account screens failed.")
            }
        })
    };
    var NB = function() {
        var a = m.wn.getInstance(),
            b = OB;
        if (!b) return [];
        a = (0, m.N)((0, m.V)(a, "scroll-unit"), b);
        if (0 >= a.length) return [];
        var c = b.scrollTop,
            d = LB(a),
            e = b.offsetHeight,
            b = Math.max(Math.floor(c / d), 0),
            c = Math.min(Math.ceil((c + e) / d), a.length);
        return (0, m.pa)((0, m.ed)(a), b, c)
    };
    var PB = function(a, b) {
        var c = (0, m.D)(b);
        if (c) {
            var d = (0, m.V)(a, "toggled"),
                c = (0, m.N)(d, c);
            (0, m.A)(c, function(a) {
                (0, m.J)(a, d)
            })
        }
    };
    var QB = function(a) {
        var b = (0, m.O)("related-video", a),
            b = {
                video_id: (0, m.H)(b, "video-id"),
                action_dismiss_video_recommendation: 1
            },
            b = (0, m.uf)("/related_ajax", b);
        window.spf.load(b, {
            method: "POST",
            onSuccess: function() {
                m.T.hide(a)
            }
        })
    };
    var RB = function(a) {
        var b = a.currentTarget.href,
            c = (0, m.ar)();
        if (c) {
            var d = (0, m.yf)(b).v;
            if ((0, m.v)("VIDEO_ID") == d) {
                c = Math.floor(c.getCurrentTime());
                a = a.currentTarget;
                var c = {
                        t: c
                    },
                    d = b.split("#", 2),
                    b = d[0],
                    d = 1 < d.length ? "#" + d[1] : "",
                    e = (0, m.zf)(d),
                    g;
                for (g in c) e[g] = c[g];
                (0, m.Nc)(e) || (d = (0, m.Cf)("#", e));
                a.href = b + d
            }
        }
    };
    var SB = function(a) {
        a.stopPropagation();
        a = a.currentTarget;
        var b = (0, m.Q)(a, "video-list-item");
        if (b) switch ((0, m.H)(a, "action")) {
            case "hide":
                QB(b)
        }
    };
    var TB = function() {
        var a = m.Rq ? (0, m.O)("playlist-videos-list") : OB,
            b = (0, m.O)(UB, a);
        if (b) {
            var c = m.wn.getInstance();
            if (a && b) {
                var d = (0, m.N)((0, m.V)(c, "scroll-unit"), a),
                    b = (0, m.la)(d, b);
                if (0 <= b && a && !((0, window.isNaN)(b) || 0 > b) && (c = (0, m.N)((0, m.V)(c, "scroll-unit"), a), !(0 >= c.length))) {
                    b >= c.length && (b = c.length - 1);
                    var d = LB(c),
                        e = a.offsetHeight,
                        g = Math.max(Math.floor(a.scrollTop / d), 0);
                    b > g - 1 && (d = Math.floor(e / d), e = c.length, b + d > e && (b = e - d + 1));
                    0 > b && (b = 0);
                    b = c[b].offsetTop;
                    a && !(0, window.isNaN)(b) && (0 > b && (b = 0), a.scrollTop =
                        b, (0, m.Hc)(a, "scroller-offset", b + ""), (0, m.vn)(a))
                }
            }
        }
    };
    var VB = function(a, b) {
        var c = null;
        (0, m.A)(a, function(a) {
            (0, m.wd)(a, UB) && (c = a)
        });
        if (c) {
            var d = (0, m.Ke)(c);
            d || (d = a[0]);
            var e = (0, m.Le)(c);
            e || (e = a[a.length - 1]);
            var g = m.Oq,
                h = WB;
            g && d && (d = {
                v: (0, m.H)(d, "video-id")
            }, b ? d.shuffle = b : -1 != g.href.indexOf("shuffle=") && (d.shuffle = 0), g.href = (0, m.Bf)(g.href, d));
            h && e && (d = {
                v: (0, m.H)(e, "video-id")
            }, b ? d.shuffle = b : -1 != h.href.indexOf("shuffle=") && (d.shuffle = 0), h.href = (0, m.Bf)(h.href, d))
        }
    };
    var XB = function(a) {
        var b = (0, m.v)("SHUFFLE_VALUE");
        if (!b) {
            var c = 0;
            (0, m.A)(a, function(a) {
                (0, m.wd)(a, UB) && (c = (0, m.H)(a, "index"))
            });
            b = (c << 8) + Math.floor(256 * Math.random());
            (0, m.ra)("SHUFFLE_VALUE", b)
        }
        return b
    };
    var YB = function(a) {
        (0, m.kc)(a, function(a, c) {
            var d = (0, window.parseInt)((0, m.H)(a, "index"), 10),
                e = (0, window.parseInt)((0, m.H)(c, "index"), 10);
            return d - e
        });
        return a
    };
    var ZB = function(a, b) {
        function c(a) {
            var c = 0,
                d = [];
            for (a = a.split(""); a.length;) {
                var c = (b + c) % a.length,
                    e = a[c];
                (0, m.ma)(a, c);
                d.push(e)
            }
            return d.join("")
        }(0, m.kc)(a, function(a, b) {
            var d = (0, m.H)(a, "video-id"),
                e = (0, m.H)(b, "video-id");
            return c(d).localeCompare(c(e))
        });
        var d = b >> 8,
            e = (0, m.Tb)(a, function(a) {
                a = (0, m.H)(a, "index");
                return d == a
            }) || 0;
        0 < e && (a = (0, m.pa)(a, e).concat((0, m.pa)(a, 0, e)));
        return a
    };
    var $B = function(a, b) {
        (0, m.Hf)((0, m.Af)({
            lact: a,
            event: "interstitialtimeout",
            delay: b
        }))
    };
    var aC = function(a, b) {
        var c = {
            lact: a,
            event: "interstitialclick",
            delay: (0, m.C)() - b
        };
        (0, m.Hf)((0, m.Af)(c));
        m.T.hide(bC);
        (0, m.M)((0, m.D)("player"), "off-screen-trigger");
        cC && (0, m.x)(cC);
        (0, m.Kq)("interstitial", !1)
    };
    var dC = function(a, b, c) {
        var d = a.currentTarget.href;
        b = b || "BFa";
        var e = {},
            g = (0, m.v)("SHUFFLE_VALUE");
        g ? e.shuffle = g : -1 != d.indexOf("shuffle=") && (e.shuffle = 0);
        e && (d = (0, m.Bf)(d, e));
        a.currentTarget.href = d;
        (0, m.Pq)(d, b, c)
    };
    var eC = function() {
        (0, m.B)("watch-list-change")
    };
    var fC = function(a) {
        if ("NEAR_END" == a.slice(0, -1) && (a = (0, window.parseInt)(a.slice(-1), 10), m.Rq || ((0, m.Sq)(), (0, m.Vq)(a)), 5 == a && (0, m.v)("PREFETCH_NEXT_PLAYLIST_VIDEO") && (0, m.Lq)() && !m.Mq)) {
            a = m.Nq;
            var b;
            a && (b = (0, m.H)(a, "autoplay-clicktracking") || "");
            a = m.Oq.href;
            (0, m.Pq)(a, "bf_next", b, !0);
            b = window.ytspf || {};
            window.spf && b.enabled && a && window.spf.prefetch(a)
        }
    };
    var gC = function() {
        var a = NB();
        (0, m.A)(a, function(a) {
            (0, m.zq)(a)
        })
    };
    var hC = function() {
        var a = (0, m.N)("related-video-featured");
        (0, m.A)(a, function(a) {
            m.T.show(a)
        })
    };
    var iC = function(a) {
        if (a.source == window && a.data && "CastApi" == a.data.source && "Hello" == a.data.event)
            for (; jC.length;) jC.shift()()
    };
    var kC = function() {
        m.Mq = !0
    };
    var lC = function() {
        var a = WB;
        (0, m.Pq)(a.href, "keys");
        (0, m.Ci)(a.href)
    };
    var mC = function() {
        (0, m.Kq)("keys")
    };
    var nC = function(a) {
        switch (a) {
            case 5:
                (0, m.Qq)(5, "html5_ns")
        }
    };
    var oC = function(a) {
        if (0 == a) {
            var b;
            (0, m.v)("PLAYLIST_INTERSTITIAL") && (0, m.Lq)() ? (b = (0, m.Jq)() / 6E4, b = Math.max(0.005, 8.34522E-4 * Math.exp(0.100073 * b)), b = Math.random() < b) : b = !1;
            b ? (m.T.show(bC), (0, m.L)((0, m.D)("player"), "off-screen-trigger"), (0, m.S)(pC), b = (0, m.Jq)(), pC = (0, m.R)(bC, "click", (0, m.E)(aC, b, (0, m.C)())), cC = (0, m.w)((0, m.E)($B, b, 18E4), 18E4), (0, m.Hf)((0, m.Af)({
                lact: b,
                event: "interstitialshown"
            }))) : (0, m.Kq)("autoplay", !0)
        }
        m.Yq && (2 == a ? (0, m.I)(m.$q, "paused") : 1 == a && (0, m.J)(m.$q, "paused"))
    };
    var qC = function() {
        (0, m.zd)(m.$q, "is-scrolled", 0 != OB.scrollTop)
    };
    var rC = function(a) {
        var b = m.Nq,
            c = (0, m.$e)(a.currentTarget, "li");
        if (b && c) {
            var d = OB;
            (0, m.I)(d, "playlist-editing-locked");
            a = (0, m.H)(b, "full-list-id");
            var b = (0, m.H)(c, "video-id"),
                e = (0, m.H)(c, "index");
            (0, m.U)("/addto_ajax?action_delete_from_playlist=1", {
                format: "XML",
                method: "POST",
                ba: {
                    video_ids: b,
                    session_token: (0, m.ad)("addto_ajax") || "",
                    full_list_id: a,
                    index: e - 1
                },
                onSuccess: function() {
                    (0, m.De)(c);
                    var a = (0, m.fe)("li", null, d),
                        b = 1,
                        e = 0;
                    (0, m.A)(a, function(a) {
                        if (!m.Rq)
                            if ((0, m.wd)(a, UB)) e = b;
                            else {
                                var c = (0, m.fe)("span",
                                    "count", a);
                                c && c[0] && (c[0].innerHTML = b)
                            }(0, m.Hc)(a, "index", b);
                        b += 1
                    });
                    m.Rq || ((0, m.D)("watch7-playlist-current-index").innerHTML = e, (0, m.D)("watch7-playlist-length").innerHTML = b - 1);
                    VB(a, (0, m.v)("SHUFFLE_VALUE"))
                },
                za: function() {
                    (0, m.J)(d, "playlist-editing-locked");
                    eC()
                }
            })
        }
    };
    var sC = function(a, b) {
        var c = (0, m.H)(a.currentTarget, "clicktracking") || "";
        dC(a, b, c)
    };
    var tC = function(a) {
        var b = (0, m.$e)(a.currentTarget, "li"),
            b = (0, m.H)(b, "clicktracking") || "";
        dC(a, void 0, b)
    };
    var uC = function() {
        if (m.Rq) {
            var a = (0, m.yl)(m.kl.getInstance(), vC);
            (0, m.zd)(m.$q, "watch-playlist-collapsed", a)
        } else(0, m.Ad)((0, m.D)("player"), "watch-playlist-collapsed") || (a = (0, m.Tp)((0, m.D)("watch7-playlist-tray-container")), (0, m.w)(gC, a))
    };
    var wC = function() {
        var a = OB,
            b = (0, m.ed)(a.getElementsByTagName("li"));
        if ((0, m.yl)(m.kl.getInstance(), xC)) b = YB(b), (0, m.ra)("SHUFFLE_VALUE", 0);
        else var c = XB(b),
            b = ZB(b, c);
        (0, m.ze)(a);
        (0, m.A)(b, function(b) {
            a.appendChild(b)
        });
        c = (0, m.v)("SHUFFLE_VALUE");
        VB(b, c);
        TB();
        gC();
        eC()
    };
    var yC = function() {
        var a = (0, m.v)("PLAYER_REFERENCE");
        a && a.getPlayerState ? 1 == a.getPlayerState() ? a.pauseVideo() : a.playVideo() : ((0, m.Ad)(m.$q, "paused"), m.Tq = !m.Tq)
    };
    var zC = function() {
        var a = (0, m.Lq)(),
            b = m.qh.getInstance();
        (0, m.wh)(76, a);
        b.save();
        (0, m.ra)("LIST_AUTO_PLAY_ON", !a)
    };
    var AC = function() {
        var a = m.Nq;
        return !(!a || "False" == (0, m.H)(a, "shareable"))
    };
    var BC = function(a) {
        var b = (0, m.v)("LIST_END_TIME");
        b || (b = a.getDuration());
        for (var c = 5; 0 < c; c--) a.addCueRange("NEAR_END" + c, b - c, b - c + 1);
        a.addEventListener("onCueRangeEnter", fC)
    };
    var CC = function(a) {
        if (!a.metaKey && !a.ctrlKey) {
            var b = a.target;
            if ("INPUT" != b.tagName && "TEXTAREA" != b.tagName && "SELECT" != b.tagName && "EMBED" != b.tagName) switch (a.keyCode) {
                case 78:
                    a.shiftKey && (0, m.B)("player-shortcut-next");
                    break;
                case 80:
                    a.shiftKey && (0, m.B)("player-shortcut-prev");
                    break;
                case 106:
                    (0, m.B)("player-shortcut-rewind");
                    break;
                case 108:
                    (0, m.B)("player-shortcut-fast-forward");
                    break;
                case 107:
                    (0, m.B)("player-shortcut-play-pause")
            }
        }
    };
    var DC = function(a) {
        var b = window.location.href;
        b.indexOf("#") == b.length - 1 && m.ne && (window.location.hash = "#!");
        var b = window.document.body,
            c = (0, m.ae)(b),
            d = [];
        d.push("<!DOCTYPE html>");
        d.push("<html><head>", a, "</head><body>", "", "</body></html>");
        a = (0, m.Yt)(c, "display: none");
        b.appendChild(a);
        b = d.join("");
        d = a.contentDocument || a.contentWindow.document;
        d.open();
        d.write(b);
        d.close();
        m.Zx = a
    };
    var EC = function() {
        var a = (0, m.N)("related-video-featured");
        2 == a.length ? (0, m.Hd)(a[0], "related-video-featured-booster") ? m.T.show(a[1]) : m.T.show(a[0]) : (0, m.A)(a, function(a) {
            m.T.show(a)
        })
    };
    var FC = function(a) {
        0 == a.length ? hC() : (0, m.$x)("watch_related", a[0], null, function(a, c) {
            var d = c.html_content || "",
                e = (0, m.D)(window.pyv_related_box_id || "watch-related");
            e && (0 != e.innerHTML.indexOf(d) && e.insertBefore((0, m.we)(d), e.firstChild), (d = (0, m.D)("pyv-watch-related-dest-url")) && d.setAttribute("href", m.ay), (0, m.ey)())
        })
    };
    var GC = function(a) {
        var b = (0, m.uf)("/related_ajax", {
            video_id: (0, m.v)("VIDEO_ID"),
            action_more_related_videos: 1
        });
        window.spf.load(b, {
            onSuccess: a
        })
    };
    var HC = function(a) {
        if ("true" == (0, m.H)(a, "loaded")) return null;
        (0, m.Hc)(a, "loaded", "true");
        return (0, m.U)("/watch_ajax", {
            format: "XML",
            ca: {
                action_get_video_attributions_component: 1,
                v: (0, m.v)("VIDEO_ID")
            },
            onSuccess: function(b, c) {
                a.innerHTML = c.html_content
            }
        })
    };
    var IC = function(a) {
        return (0, m.U)("/insight_ajax", {
            format: "XML",
            method: "POST",
            ca: {
                action_get_statistics_and_data: 1,
                v: (0, m.v)("VIDEO_ID")
            },
            ba: {
                session_token: (0, m.ad)("insight_ajax")
            },
            onSuccess: function(b, c) {
                a(c.html_content, c.graph_data, !0)
            },
            onError: function() {
                a(null, null, !1)
            }
        })
    };
    var JC = function(a) {
        var b = 0,
            c = (0, m.ar)();
        c && c.pauseVideo && (c.pauseVideo(), b = c.getCurrentTime());
        b = Math.floor(b);
        c = Math.floor(b / 60);
        return (0, m.U)("/watch_ajax", {
            method: "GET",
            ca: {
                action_get_report_video_component: 1,
                video_id: (0, m.v)("VIDEO_ID"),
                t_mins: c,
                t_secs: b - 60 * c
            },
            onSuccess: function(b, c) {
                a(c.report_html, !0)
            },
            onError: function() {
                a(null, !1)
            }
        })
    };
    var KC = function() {
        var a = null;
        if (AC()) {
            var b = (0, m.D)("share-with-playlist");
            if (!b || b && b.checked) a = (a = m.Nq) ? (0, m.H)(a, "full-list-id") : ""
        }
        return a
    };
    var LC = function() {
        var a = (0, m.O)("yt-uix-button-toggled", (0, m.D)("action-panel-share"));
        return AC() && a ? (0, m.H)(a, "video-id") : (0, m.v)("VIDEO_ID")
    };
    var MC = function() {
        (0, m.wd)(window.document.body, "site-center-aligned") ? (m.Rq = !0, m.$q = (0, m.D)("watch-appbar-playlist"), OB = (0, m.O)("playlist-videos-list", m.$q), m.Wq = (0, m.O)("toggle-autoplay", m.$q), xC = (0, m.O)("shuffle-playlist", m.$q), vC = (0, m.O)("toggle-menu-visibility", m.$q), m.Oq = (0, m.O)("next-playlist-list-item", m.$q), WB = (0, m.O)("prev-playlist-list-item", m.$q), m.Nq = (0, m.O)("playlist-info", m.$q), UB = "currently-playing") : (m.Rq = !1, m.$q = (0, m.D)("playlist"), OB = (0, m.D)("watch7-playlist-tray"), m.Wq = (0, m.D)("watch7-playlist-bar-autoplay-button"),
            xC = (0, m.D)("watch7-playlist-bar-shuffle-button"), vC = (0, m.D)("watch7-playlist-bar-toggle-button"), m.Oq = (0, m.D)("watch7-playlist-bar-next-button"), WB = (0, m.D)("watch7-playlist-bar-prev-button"), m.Nq = (0, m.D)("watch7-playlist-data"), bC = (0, m.D)("watch7-playlist-interstitial"), UB = "playlist-bar-item-playing");
        if (m.$q && OB) {
            m.Rq ? NC.push((0, m.R)(OB, "scroll", qC)) : (NC.push((0, m.R)((0, m.D)("watch7-playlist-scrollfloater-autoplay-toggle"), "click", yC)), m.Zq = m.T.xj((0, m.D)("watch7-content")).y, OC.push((0, m.y)("page-scroll",
                m.Xq)));
            var a = (0, m.ar)();
            a && a.addEventListener("onReady", BC);
            NC.push((0, m.R)(m.Wq, "click", zC));
            NC.push((0, m.R)(xC, "click", wC));
            NC.push((0, m.R)(vC, "click", uC));
            NC.push((0, m.R)(m.Oq, "click", function(a) {
                sC(a, "bf_next")
            }));
            NC.push((0, m.R)(WB, "click", function(a) {
                sC(a, "bf_prev")
            }));
            NC.push((0, m.fg)(OB, "click", tC, "a"));
            NC.push((0, m.hg)(OB, "click", rC, "yt-uix-button-playlist-remove-item"));
            OC.push((0, m.y)("navigate", kC));
            OC.push((0, m.y)("player-state-change", oC));
            OC.push((0, m.y)("player-error", nC));
            OC.push((0, m.y)("player-shortcut-next",
                mC));
            OC.push((0, m.y)("player-shortcut-prev", lC));
            (0, m.v)("SKIP_TO_NEXT_VIDEO") && (0, m.Qq)(5);
            TB();
            gC();
            eC()
        }
    };
    m.PC = function(a, b) {
        var c = a.type;
        if ((0, m.Ec)(c)) switch (c.toLowerCase()) {
            case "checkbox":
            case "radio":
                a.checked = b ? "checked" : null;
                break;
            case "select-one":
                a.selectedIndex = -1;
                if ((0, m.q)(b))
                    for (var d = 0; c = a.options[d]; d++)
                        if (c.value == b) {
                            c.selected = !0;
                            break
                        } break;
            case "select-multiple":
                c = b;
                (0, m.q)(c) && (c = [c]);
                for (var e = 0; d = a.options[e]; e++)
                    if (d.selected = !1, c)
                        for (var g, h = 0; g = c[h]; h++) d.value == g && (d.selected = !0);
                break;
            default:
                a.value = null != b ? b : ""
        }
    };
    var QC = function(a) {
        if (!arguments.length) return [];
        for (var b = [], c = 0;; c++) {
            for (var d = [], e = 0; e < arguments.length; e++) {
                var g = arguments[e];
                if (c >= g.length) return b;
                d.push(g[c])
            }
            b.push(d)
        }
    };
    var RC = function() {
        this.g = new m.Eu(this);
        this.i = !1
    };
    var SC = function() {
        if ((0, m.v)("WATCH_LEGAL_TEXT_ENABLE_AUTOSCROLL")) {
            var a = window.document.getElementById("watch_companion_legal_text");
            a && (TC = new RC, TC.start(a))
        }
        var b = (0, m.v)("ADS_DATA");
        if (b) {
            UC(b);
            VC = b;
            WC = (0, m.ar)();
            null != WC && (WC.addEventListener("onApiChange", XC), WC.addEventListener("onReady", YC));
            null == window.adModuleLoaded && b.fetch_ads_in_page && (a = (0, m.n)("ytplayer.config"), a = (0, m.Eb)(a), a.args.allow_html5_ads || (ZC = !0, (0, m.Ra)("//s0.2mdn.net/instream/html5/ima3.js", $C)));
            (0, m.v)("WATCH_RELATED_DELAY") ||
            aD();
            b.use_gut && (window.spf.scripts.unload("//www.googletagservices.com/tag/js/gpt.js"), (0, m.Ra)("//www.googletagservices.com/tag/js/gpt.js", function() {
                bD(b.gut_vars.tag)
            }));
            if (b.show_afv || b.show_afc) window.spf.scripts.unload("//pagead2.googlesyndication.com/pagead/show_companion_ad.js"), (0, m.Ra)("//pagead2.googlesyndication.com/pagead/show_companion_ad.js"), (0, m.Ra)("//www.google.com/jsapi?autoload=%7B%22modules%22%3A%5B%7B%22name%22%3A%22ads%22%2C%22version%22%3A%221%22%2C%22callback%22%3A%22(function()%7B%7D)%22%2C%22packages%22%3A%5B%22content%22%5D%7D%5D%7D");
            b.show_afc && cD(b);
            dD();
            b.check_status && eD()
        }
    };
    var aD = function() {
        var a = (0, m.v)("ADS_DATA");
        a && (a.show_pyv ? fD(a) : hC())
    };
    var eD = function() {
        function a() {
            gD = !0;
            "google_ad_status" in window ? (0, m.Hf)("adstat=s") : (0, m.Hf)("adstat=l")
        }(0, m.Ra)("//static.doubleclick.net/instream/ad_status.js", a);
        (0, m.w)(function() {
            gD || "google_ad_status" in window || (window.spf.scripts.ignore("//static.doubleclick.net/instream/ad_status.js", a), (0, m.Hf)("adstat=f"))
        }, 5E3)
    };
    var dD = function() {
        hD() && WC.getOption("ad", "PAGE_JAVASCRIPT_INITIALIZED", {})
    };
    var UC = function(a) {
        iD = [];
        if ("afv_vars" in a)
            for (var b in a.afv_vars) window[b] = a.afv_vars[b], iD.push(b)
    };
    var bD = function(a) {
        "googletag" in window && (jD = window.googletag.defineSlot(a, [
            [300, 250],
            [300, 60]
        ], "yt-gut-content")) && (jD.set("ad_type", "flash"), jD.addService(window.googletag.companionAds()), window.googletag.enableServices(), a = jD.getSizes(), kD = a[0], lD = a[1])
    };
    var mD = function(a, b) {
        a || (a = "");
        b || (b = !1);
        var c = (0, m.D)("watch-channel-brand-div");
        c && (0, m.Id)(c, "collapsible", b);
        if (c = (0, m.D)("google_companion_ad_div")) c.innerHTML = a;
        nD()
    };
    var oD = function(a, b) {
        var c = Math.round(1E4 * Math.random());
        return ['<iframe src="', a, '" name="ifr_300x', b, "ad", c, '" id="ifr_300x', b, "ad", c, '" width="300" height="', b, '" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe>'].join("")
    };
    var pD = function(a) {
        return !!a.match("/subscribe_widget.*render=video_wall_companion")
    };
    var qD = function(a) {
        a = a.replace(";dc_seed=", ";kmyd=watch-channel-brand-div;dc_seed=");
        var b = oD(a, 250);
        a = pD(a);
        mD(b, a)
    };
    var rD = function(a) {
        a = a.replace(";dc_seed=", ";kmyd=watch-longform-ad;dc_seed=");
        var b = oD(a, 60);
        a = pD(a);
        mD(b, a)
    };
    var sD = function(a, b) {
        var c = 250;
        "video" == a && (c = 60);
        var d = (0, window.decodeURIComponent)(b);
        mD(['<iframe name="fw_ad" id="fw_ad" ', 'width="300" height="' + c + '" ', 'marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe>'].join(""));
        var e = (0, m.D)("fw_ad");
        if (e) {
            var e = e.contentWindow ? e.contentWindow : e.contentDocument.document ? e.contentDocument.document : e.contentDocument,
                g = window.navigator.userAgent.toLowerCase(),
                c = -1 != g.indexOf("msie"),
                g = -1 != g.indexOf("opera");
            e.document.open();
            e.document.write(d);
            c || g ? (0, m.w)(function() {
                e.document.close()
            }, 7500) : e.document.close()
        }
    };
    var nD = function() {
        (0, m.B)("watchads-adLoad")
    };
    var tD = function() {
        window.google_ad_output = "html";
        window.google_ad_height = "250";
        window.google_ad_format = "300x250_as";
        window.google_container_id = "google_companion_ad_div"
    };
    var uD = function() {
        var a = window.document.getElementById("google_companion_ad_div");
        if (a && (a = a.firstElementChild)) try {
            a.contentWindow.postMessage((0, window.encodeURIComponent)(vD) + "," + (0, window.encodeURIComponent)(wD), "*")
        } catch (b) {}
    };
    var xD = function() {
        var a = window.document.getElementById("movie_player");
        a && a.pauseVideo()
    };
    var yD = function() {};
    var zD = function() {
        nD()
    };
    var fD = function(a) {
        DC("<script>var pyvOptions = " + a.pyv_vars.iframe_json + '; for (var key in pyvOptions) { window[key] = pyvOptions[key]; } window["google_ad_request_done"] = parent.yt.www.ads.pyv.pyvWatchAfcWithPpvCallback; \x3c/script><script src="//pagead2.googlesyndication.com/pagead/show_ads.js">\x3c/script>');
        a.log_pyv && (0, m.w)(function() {
            "google_render_ad" in window ? (0, m.Hf)("pyvls") : (0, m.Hf)("pyvlf")
        }, 5E3)
    };
    var cD = function(a) {
        if (!AD) {
            if (!a) {
                if (!VC) return;
                a = VC
            }
            var b = (0, m.n)("google.ads.Ad");
            b ? (AD = !0, new b(a.afv_vars.google_ad_client, "google_companion_ad_div", a.afc_vars)) : BD = (0, m.w)(function() {
                cD(a)
            }, 200)
        }
    };
    var CD = function() {
        hD() && DD && (WC.getOption("ad", "AD_VAR", {
            AD_VAST: ED
        }), FD())
    };
    var GD = function() {
        hD() && HD && WC.getOption("ad", "AD_VAR", {
            AD_PREROLL_READY: !0
        })
    };
    var ID = function() {
        hD() && JD && WC.getOption("ad", "AD_VAR", {
            AD_SDK_ERROR: !0
        })
    };
    var hD = function() {
        return KD && null != WC && null != WC.getOptions && (0, m.Zb)(WC.getOptions()) && (0, m.lc)(WC.getOptions(), "ad")
    };
    var $C = function() {
        hD() && WC.getOption("ad", "AD_VAR", {
            JS_SDK_LOADED: !0
        });
        var a = (0, m.n)("ytplayer.config"),
            a = (0, m.Eb)(a);
        if (a.args.ad_tag && a.args.dclk) {
            var b = new m.Jw(a.args.ad_tag, a.args.mpu),
                c = 0;
            a.args.instream && (c |= 1);
            a.args.trueview && (c |= 2);
            a.args.invideo && (c |= 4);
            a.args.mpu && (c |= 8);
            0 < c && (LD.push((0, m.Kw)(b, c)), MD.push(a.args.instream || a.args.trueview))
        }
        ND()
    };
    var ND = function() {
        if (!(0, m.hd)(LD)) {
            FD();
            OD || (OD = (0, m.ue)("div"), null != window.document.body && window.document.body.appendChild(OD));
            var a = new window.google.ima.AdDisplayContainer(OD, null, null);
            PD = new window.google.ima.AdsLoader(a);
            QD = new m.Eu;
            QD.listen(PD, window.google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, RD);
            QD.listen(PD, window.google.ima.AdErrorEvent.Type.AD_ERROR, SD);
            if (!HD) {
                var b = !1;
                (0, m.A)(MD, function(a) {
                    b |= a
                });
                b || (HD = !0, GD())
            }
            a = new window.google.ima.AdsRequest;
            a.adTagUrl = LD.shift();
            MD.shift();
            a.linearAdSlotWidth = 640;
            a.linearAdSlotHeight = 355;
            a.nonLinearAdSlotWidth = 640;
            a.nonLinearAdSlotHeight = 100;
            PD.requestAds(a, null)
        }
    };
    var XC = function() {
        dD();
        ZC && (CD(), GD(), ID())
    };
    var YC = function() {
        KD = !0;
        dD()
    };
    var RD = function(a) {
        if (a && a.getResponse())
            if (ED = (0, m.oc)(a.getResponse()), VC.fetch_ads_fallback_in_page) {
                try {
                    TD = a.getAdsManager({}, null)
                } catch (b) {
                    UD();
                    return
                }
                VD || (VD = new m.Eu, VD.listen(TD, window.google.ima.AdEvent.Type.LOADED, WD), VD.listen(TD, window.google.ima.AdErrorEvent.Type.AD_ERROR, UD));
                try {
                    TD.init(640, 360, window.google.ima.ViewMode.NORMAL)
                } catch (c) {
                    FD()
                }
            } else DD = !0, CD();
        else SD()
    };
    var WD = function(a) {
        (a = a.getAd()) ? !a.isLinear() && "rm" in a.getTraffickingParameters() && "true" == a.getTraffickingParameters().rm ? (TD.sendImpressionUrls(), FD(), ND()) : (tD(), DD = !0, CD()): SD()
    };
    var UD = function() {
        FD();
        ND()
    };
    var FD = function() {
        ED = null;
        DD = !1;
        PD = null;
        QD && (QD.removeAll(), QD = null);
        VD && (VD.removeAll(), VD = null);
        TD && (TD.destroy(), TD = null);
        OD && ((0, m.De)(OD), OD = null)
    };
    var SD = function() {
        (0, m.hd)(LD) ? (JD = !0, ID()) : ND()
    };
    var XD = function() {
        var a = (0, m.v)("BG_I", null),
            b = (0, m.v)("BG_IU", null),
            c = (0, m.v)("BG_P");
        b ? (0, m.Ra)(b, function() {
            YD = new window.botguard.bg(c)
        }) : a && (eval(a), YD = new window.botguard.bg(c))
    };
    var ZD = function() {
        var a = (0, m.mm)();
        m.T.hide((0, m.O)("flag-comment-step1", a));
        m.T.show((0, m.O)("flag-comment-step2", a));
        m.T.hide((0, m.O)("flag-comment-step3", a))
    };
    var $D = function() {
        var a = (0, m.mm)(),
            b = (0, m.O)("flag-comment-form", a),
            c = (0, m.O)("flag-comment-block-user-input", a),
            d = (0, m.O)("submit-flag-comment", a),
            e = (0, m.O)("flag-comment-error-msg", a);
        m.T.hide(e);
        c.disabled = !0;
        d.disabled = !0;
        (0, m.U)("/comment_servlet", {
            format: "XML",
            method: "POST",
            ca: {
                flag_comment: 1
            },
            ba: (0, m.xf)((0, m.Fj)(b)),
            onSuccess: function(b, c) {
                c && c.html_content ? (m.T.hide((0, m.O)("flag-comment-step1", a)), m.T.hide((0, m.O)("flag-comment-step2", a)), m.T.show((0, m.O)("flag-comment-step3", a)), (0, m.O)("flag-comment-captcha-placeholder",
                    a).innerHTML = c.html_content) : m.hm.getInstance().hide()
            },
            onError: function(a, b) {
                var k = b && b.error_message;
                if (k) {
                    var p = (0, m.O)("yt-alert-message", e);
                    (0, m.Se)(p, k)
                }
                m.T.show(e);
                c.disabled = !1;
                d.disabled = !1
            }
        })
    };
    var aE = function(a) {
        var b = (0, m.mm)(),
            c = (0, m.O)("abuse-type-placeholder", b);
        a = (0, m.$e)(a.currentTarget, "LABEL");
        (0, m.Se)(c, (0, m.Ve)(a));
        (0, m.O)("continue-flag-comment", b).disabled = !1
    };
    var bE = function(a) {
        var b;
        switch (a) {
            case "PENDING":
                b = (0, m.Yc)("COMMENT_PENDING");
                break;
            case "BLOCKED":
                b = (0, m.Yc)("COMMENT_BLOCKED");
                break;
            case "EMAIL":
                b = (0, m.Yc)("COMMENT_ERROR_EMAIL");
                break;
            case "INLINE_CAPTCHAFAIL":
                b = (0, m.Yc)("COMMENT_CAPTCHAFAIL");
                break;
            case "SHOW_COUNTDOWN":
                b = (0, m.Yc)("SHOW_COUNTDOWN");
                break;
            case "FAILED_MAINTENANCE":
                b = (0, m.Yc)("COMMENT_FAILED_MAINTENANCE");
                break;
            case "FAILED_OWNER_LINKING":
                b = (0, m.Yc)("COMMENT_OWNER_LINKING");
                break;
            case "FAILED_HASLINK":
                b = (0, m.Yc)("FAILED_HASLINK");
                break;
            case "FAILED_HASTAGS":
                b = (0, m.Yc)("FAILED_HASTAGS");
                break;
            case "FAILED_ASCIIART":
                b = (0, m.Yc)("FAILED_ASCIIART");
                break;
            case "FAILED_TOOSHORT":
                b = (0, m.Yc)("FAILED_TOOSHORT");
                break;
            case "FAILED_TOOLONG":
                b = (0, m.Yc)("FAILED_TOOLONG");
                break;
            case "FAILED_BADPARENT":
                b = (0, m.Yc)("FAILED_BADPARENT")
        }
        return b || null
    };
    var cE = function(a, b, c) {
        this.A = !!c;
        this.Ya = a;
        this.Lr = (0, m.D)("all-comments");
        this.hf = (0, m.Nf)("button", "post-button", a);
        this.Fc = (0, m.Nf)("textarea", null, a);
        this.Zf = null;
        this.b = (0, m.O)("comments-remaining", this.Ya);
        this.o = (0, window.parseInt)((0, m.H)(this.b, "max-count"), 10);
        this.Xf = (0, m.O)("comments-post-message", this.Ya);
        this.Jr = (0, m.O)("yt-alert-content", this.Xf);
        this.g = (0, m.O)("comments-threshold-countdown", this.Ya);
        this.k = [];
        this.j = [];
        this.i = null;
        this.oz = !!(0, m.v)("COMMENTS_IS_LIVE_EVENT");
        dE(this);
        eE(this, this.Fc, "focus", this.as);
        eE(this, this.Fc, "blur", this.fA);
        eE(this, this.Ya, "submit", this.Zr);
        eE(this, this.Fc, "change", this.$r);
        eE(this, this.Fc, "keyup", this.$r);
        eE(this, this.Fc, "keydown", this.gA);
        b && this.as()
    };
    var eE = function(a, b, c, d) {
        a.k.push((0, m.R)(b, c, (0, m.r)(d, a)))
    };
    var fE = function(a) {
        a.Zf && (a.Zf.innerHTML = "")
    };
    var dE = function(a) {
        var b = a.o - a.Fc.value.length;
        a.b.innerHTML = (0, m.Xc)("CHARACTERS_REMAINING", b);
        b = 0 > b;
        (0, m.Id)(a.b, "too-many", b);
        a.hf.disabled = b
    };
    var gE = function(a, b) {
        var c = (0, m.r)(function() {
            0 == b ? ((0, m.Zc)(d), hE(this)) : (b--, this.g.innerHTML = (0, m.Xc)("SECONDS_REMAINING", b))
        }, a);
        iE(a);
        var d = (0, m.$c)(c, 1E3);
        c();
        a.j.push(d)
    };
    var iE = function(a) {
        m.T.hide(a.b);
        m.T.show(a.g);
        a.hf.disabled = !0
    };
    var hE = function(a) {
        m.T.hide(a.g);
        m.T.hide(a.Xf);
        m.T.show(a.b);
        a.g.innerHTML = "";
        a.hf.disabled = !1
    };
    var jE = function(a, b, c) {
        var d = bE(b) || (0, m.Yc)("COMMENT_ERROR");
        a.Jr.innerHTML = d;
        (0, m.Gd)(a.Xf, "yt-alert-info", "yt-alert-error");
        m.T.show(a.Xf);
        switch (b) {
            case "INLINE_CAPTCHA":
            case "INLINE_CAPTCHAFAIL":
                (0, m.U)("/comment_servlet?gimme_captcha=1", {
                    format: "XML",
                    method: "POST",
                    ba: {
                        session_token: (0, m.ad)("comment_servlet")
                    },
                    onSuccess: function(a, b) {
                        this.Zf || (this.Zf = window.document.createElement("div"), this.Zf.className = "comment-captcha", (0, m.Be)(this.Zf, this.Fc));
                        this.Zf.innerHTML = b.html_content;
                        this.hf.disabled = !1
                    },
                    N: a
                });
                break;
            case "SHOW_COUNTDOWN":
                gE(a, (0, window.parseInt)(c.countdown_timer, 10) || 30);
                break;
            default:
                a.hf.disabled = !1, fE(a)
        }
    };
    var kE = function(a) {
        this.Z = a;
        this.dt = (0, m.O)("yt-uix-pager-show-more");
        this.i = !!(0, m.v)("ENABLE_LIVE_COMMENTS");
        this.b = [];
        (a = (0, m.O)("comments-pagination", this.Z)) && (0, m.H)(a, "ajax-enabled") && this.b.push((0, m.hg)(this.Z, "click", (0, m.r)(this.j, this), "yt-uix-pager-button"))
    };
    var lE = function(a, b) {
        var c = (0, m.fe)("li", "comment", void 0),
            c = (0, m.H)(c[c.length - 1], "id"),
            d = a.rj ? !1 : !0;
        m.T.show("comments-loading");
        mE(a, c, function(a, c) {
            c.html_content && (m.T.hide("comments-loading"), this.rj = window.document.createElement("div"), this.rj.innerHTML = c.html_content, !d && 0 < (0, m.fe)("li", "comment", this.rj).length && m.T.show(this.dt), b && b())
        })
    };
    var mE = function(a, b, c) {
        (0, m.U)("/watch_ajax?action_get_comments=1", {
            format: "XML",
            ca: {
                v: (0, m.v)("VIDEO_ID"),
                p: 1,
                commentthreshold: (0, m.v)("COMMENTS_THRESHHOLD"),
                commenttype: "everything",
                enable_live_comments: a.i ? "yes" : null,
                last_comment_id: b,
                page_size: (0, m.v)("COMMENTS_PAGE_SIZE"),
                source: (0, m.v)("COMMENT_SOURCE")
            },
            onSuccess: c,
            N: a
        })
    };
    var nE = function(a, b, c) {
        a = (0, m.$e)(a, "form");
        (0, m.Fc)(a, "initialized") || ((0, m.Hc)(a, "initialized", "true"), oE = new cE(a, !b, c), b && oE.focus())
    };
    var pE = function(a) {
        a = a.currentTarget;
        var b = (0, m.$e)(a, null, "comment");
        switch ((0, m.H)(a, "action")) {
            case "approve":
                qE(b);
                break;
            case "block":
                (0, window.confirm)((0, m.Yc)("BLOCK_USER")) && (rE(b, !0), (0, m.L)(b, "blocked"));
                break;
            case "unblock":
                rE(b, !1);
                (0, m.M)(b, "blocked");
                break;
            case "flag-in-place":
                if (sE(!1)) {
                    var c = (0, m.D)("comment-flag-area");
                    a = (0, m.H)(b, "id");
                    var d = (0, m.H)(b, "author-id"),
                        e = (0, m.Ve)((0, m.O)("author", b)),
                        b = (0, m.O)("comment-text", b).innerHTML,
                        g = (0, m.v)("VIDEO_ID");
                    m.hm.getInstance().show(c);
                    c = (0, m.mm)();
                    (0, m.O)("flagged-comment-id", c).value = a;
                    (0, m.O)("flagged-comment-author-id", c).value = d;
                    (0, m.O)("flagged-comment-video-id", c).value = g;
                    (0, m.Se)((0, m.O)("flagged-comment-author-name", c), e);
                    (0, m.O)("flagged-comment-text", c).appendChild((0, m.we)(b));
                    (0, m.R)((0, m.O)("continue-flag-comment", c), "click", ZD);
                    (0, m.hg)(c, "click", $D, "submit-flag-comment");
                    (0, m.hg)(c, "click", aE, "abuse-type-radio-input")
                }
                break;
            case "flag":
                tE(b, "mark_comment_as_spam");
                break;
            case "flag-profile-pic":
                tE(b, "flag_profile_pic");
                break;
            case "unflag":
                a = (0, m.H)(b, "id");
                (0, m.U)("/comment_servlet", {
                    format: "XML",
                    method: "POST",
                    ba: {
                        unmark_comment_as_spam: a,
                        entity_id: (0, m.v)("VIDEO_ID"),
                        session_token: (0, m.ad)("comment_servlet")
                    }
                });
                break;
            case "hide":
                (0, m.L)(b, "hidden");
                break;
            case "show":
                (0, m.M)(b, "hidden");
                break;
            case "remove":
                uE(b);
                break;
            case "reply":
                vE(b);
                break;
            case "realtime-reply":
                sE(!0) && (oE || (a = (0, m.O)("comments-textarea", (0, m.D)("comments-view")), nE(a)), a = oE, a.reset(), a.focus());
                break;
            case "vote-up":
                wE(b, !0);
                break;
            case "vote-down":
                wE(b,
                    !1);
                break;
            case "show-parent":
                xE(b)
        }
    };
    var sE = function(a) {
        return (0, m.v)("COMMENTS_SIGNIN_URL") ? ((0, m.Bi)((0, m.v)("COMMENTS_SIGNIN_URL")), !1) : a && (0, m.v)("COMMENTS_CHANNEL_CREATE_URL") ? ((0, m.Bi)((0, m.v)("COMMENTS_CHANNEL_CREATE_URL")), !1) : (0, m.v)("COMMENTS_YPC_CAN_POST_OR_REACT_TO_COMMENT") ? !0 : !1
    };
    var qE = function(a) {
        var b = (0, m.H)(a, "id"),
            c = (0, m.v)("VIDEO_ID");
        (0, m.M)(a, "pending");
        (0, m.U)("/comment_servlet?field_approve_comment=1", {
            format: "XML",
            method: "POST",
            ba: {
                comment_id: b,
                entity_id: c,
                session_token: (0, m.ad)("comment_servlet")
            },
            onError: function() {
                (0, m.L)(a, "pending")
            }
        })
    };
    var rE = function(a, b) {
        var c = {};
        c["action_" + (b ? "" : "un") + "block_commenter"] = 1;
        var d = (0, m.H)(a, "id");
        (0, m.U)("/link_ajax", {
            format: "XML",
            method: "POST",
            ca: c,
            ba: {
                session_token: (0, m.ad)("link_ajax"),
                comment_id: d
            },
            onSuccess: function(a, b) {
                b && b.success_message && window.alert(b.success_message)
            },
            onError: function(a, b) {
                b && b.error_message && window.alert(b.error_message)
            }
        })
    };
    var tE = function(a, b) {
        if (sE(!1)) {
            var c = (0, m.H)(a, "id"),
                d = (0, m.v)("VIDEO_ID");
            m.T.hide(a);
            (0, m.L)(a, "flagged");
            d = {
                entity_id: d
            };
            d[b] = c;
            (0, m.U)("/comment_servlet", {
                format: "XML",
                method: "POST",
                ca: d,
                ba: {
                    session_token: (0, m.ad)("comment_servlet")
                },
                onError: function() {
                    m.T.show(a);
                    (0, m.M)(a, "flagged")
                }
            })
        }
    };
    var uE = function(a) {
        var b = (0, m.H)(a, "id"),
            c = (0, m.v)("VIDEO_ID");
        m.T.hide(a);
        (0, m.U)("/comment_servlet?remove_comment=1", {
            format: "XML",
            method: "POST",
            ba: {
                comment_id: b,
                entity_id: c,
                session_token: (0, m.ad)("comment_servlet")
            },
            onError: function() {
                m.T.show(a)
            }
        })
    };
    var vE = function(a) {
        if (sE(!0))
            if ((0, m.Hd)(a, "replying"))(0, m.Hd)(a, "replying") && ((0, m.M)(a, "replying"), a = (0, m.O)("comments-post-container", a), (0, m.De)(a));
            else {
                (0, m.L)(a, "replying");
                var b = (0, m.O)("comments-post", (0, m.D)("watch-discussion") || (0, m.D)("watch-discussion")),
                    b = (0, m.Mf)(b),
                    c = window.document.createElement("div");
                c.className = "comments-post-container";
                a.appendChild(c);
                c.appendChild(b);
                b = new cE(b);
                b.reset();
                c = (0, m.H)(a, "id");
                b.Ya.reply_parent_id.value = c;
                if (a = (0, m.H)(a, "tag")) b.i = a;
                b.focus()
            }
    };
    var wE = function(a, b) {
        if (sE(!1) && !(0, m.H)(a, "voted")) {
            var c = (0, m.H)(a, "id"),
                d = (0, m.v)("VIDEO_ID"),
                e = (0, m.H)(a, "score") || "0",
                g = b ? 1 : -1;
            (0, m.Hc)(a, "voted", g + "");
            b ? (0, m.Gd)(a, "voted-down", "voted-up") : (0, m.Gd)(a, "voted-up", "voted-down");
            c = {
                a: g,
                id: c,
                video_id: d,
                old_vote: e
            };
            (d = (0, m.H)(a, "tag")) && (c.tag = d);
            (0, m.U)("/comment_voting", {
                format: "XML",
                method: "POST",
                ca: c,
                ba: {
                    session_token: (0, m.ad)("comment_voting")
                }
            })
        }
    };
    var xE = function(a) {
        var b = (0, m.H)(a, "id"),
            c = (0, m.v)("VIDEO_ID");
        (0, m.M)(a, "has-child");
        (0, m.L)(a, "child");
        var d = (0, m.D)("parent-comment-loading");
        if (d) {
            var e = (0, m.Mf)(d);
            (0, m.Ae)(e, a);
            m.T.show(e)
        }(0, m.U)("/comment_servlet?get_comment_parent=1", {
            format: "XML",
            method: "POST",
            ba: {
                comment_id: b,
                entity_id: c,
                session_token: (0, m.ad)("comment_servlet")
            },
            onSuccess: function(b, c) {
                var d = window.document.createElement("ul");
                d.innerHTML = c.html_content;
                d = (0, m.He)(d);
                (0, m.Ae)(d, a);
                (0, m.De)(e);
                (0, m.uq)(d)
            },
            onError: function(b,
                c) {
                (0, m.L)(a, "has-child");
                (0, m.M)(a, "child");
                (0, m.De)(e);
                c && c.error_message ? window.alert(c.error_message) : window.alert("Request failed, please try later.")
            }
        })
    };
    var yE = function() {
        (0, m.hd)((0, m.nv)()) && (0, m.hd)((0, m.pv)()) || zE();
        if ((0, m.qv)()) {
            var a = AE;
            "html5" != a.getPlayerType() && a.loadNewVideoConfig(a.getCurrentVideoConfig(), "html5")
        }
    };
    var BE = function(a) {
        var b = (0, m.rv)();
        if ((0, m.Zu)(b, a) && (b = AE, "html5" != b.getPlayerType())) {
            var c = b.getVideoData().video_id,
                d = b.getCurrentTime(),
                d = (0, m.Wx)(d),
                e = {
                    key: a,
                    videoId: c,
                    currentTime: d
                },
                g = "Setting the delayed connect data: " + (0, m.Oi)(e);
            (0, m.nx)(m.qx, "RC", g);
            !(0, m.Qx)(m.Fx.getInstance(), a) && (a = (0, m.Rx)(m.Fx.getInstance(), a)) && (g = (0, m.Yu)(), e.pairingCode = g, (0, m.Ex)(a.id, g, c, d));
            (0, m.ej)("yt-remote-delayed-connect-key", e);
            b.loadNewVideoConfig(b.getCurrentVideoConfig(), "html5")
        }
    };
    var zE = function() {
        var a = AE;
        a.updateRemoteReceivers && a.updateRemoteReceivers((0, m.rv)())
    };
    var CE = function() {
        if (!DE) {
            var a = (0, m.n)("ytplayer.config");
            if (a && (a = (0, m.Eb)(a), DE = (0, m.iy)("player-api", a), (0, m.ra)("PLAYER_REFERENCE", DE), DE)) {
                var b = DE;
                b.addEventListener("onReady", EE);
                b.addEventListener("onStateChange", FE);
                b.addEventListener("RATE_SENTIMENT", GE);
                b.addEventListener("SHARE_CLICKED", HE);
                b.addEventListener("SIZE_CLICKED", IE);
                b.addEventListener("onError", JE);
                b.addEventListener("WATCH_LATER", KE);
                b.addEventListener("onAdStart", LE);
                b = DE;
                (0, m.tx)();
                AE = b;
                AE.addEventListener("onReady", yE);
                AE.addEventListener("onRemoteReceiverSelected", BE);
                b = m.Fx.getInstance();
                b.M("onlineReceiverChange", zE);
                ME = (0, m.y)("yt-remote-cast-device-tab-projected", BE);
                a.args.has_mdx_screens ? MB(b) : (0, m.hd)(b.vf) && (0, m.hd)((0, m.Gx)()) || (b.log_("Clear cached account screens."), b.vf = [], b.yl(), b.aj());
                NE();
                OE = (0, m.$c)(NE, 1E3);
                PE.push((0, m.y)("player-shortcut-rewind", QE));
                PE.push((0, m.y)("player-shortcut-fast-forward", RE));
                PE.push((0, m.y)("player-shortcut-play-pause", SE));
                PE.push((0, m.y)("watch-list-change", TE));
                (0, m.fz)(DE);
                UE.push((0, m.y)("sentiment-like", (0, m.E)(m.Rk, "like")), (0, m.y)("sentiment-dislike", (0, m.E)(m.Rk, "dislike")), (0, m.y)("sentiment-indifferent", (0, m.E)(m.Rk, "indifferent")));
                (0, m.v)("BG_P") && ((0, m.v)("BG_I") || (0, m.v)("BG_IU")) && XD()
            }
        }
    };
    var TE = function() {
        var a = DE;
        a && VE && a.updatePlaylist()
    };
    var WE = function(a, b) {
        var c = XE();
        if (c) {
            var d = (0, m.oh)(c, "").split(","),
                d = (0, m.Lb)(d, function(b) {
                    return 0 != b.indexOf(a) && !!b.length
                });
            4 <= d.length && d.shift();
            d.push(a + ":" + b);
            (0, m.mh)(c, d.join(","), 1814400)
        }
    };
    var YE = function(a) {
        var b = XE();
        if (b) {
            var c = (0, m.oh)(b, "").split(","),
                c = (0, m.Lb)(c, function(b) {
                    return 0 != b.indexOf(a)
                });
            0 == c.length ? (0, m.ph)(b) : (0, m.mh)(b, c.join(","), 1814400)
        }
    };
    var ZE = function(a) {
        var b = (0, m.ar)();
        if (b) {
            a && (0, m.ra)("RESUME_COOKIE_NAME", a);
            a = (0, m.v)("VIDEO_ID");
            var c = b.getDuration(),
                b = Math.floor(b.getCurrentTime());
            0 == c || 120 >= b || b + 120 >= c ? YE(a) : WE(a, Math.floor(b))
        }
    };
    var $E = function() {
        var a = DE;
        a && a.sendAbandonmentPing && a.sendAbandonmentPing();
        if (XE() && (ZE(), (0, m.v)("IS_RESUMABLE_PLAYBACK"))) {
            var b = DE;
            if (b) {
                var a = (0, m.v)("VIDEO_ID"),
                    c = b.getDuration(),
                    b = Math.floor(b.getCurrentTime());
                0 == c || 20 >= b || (0, m.Ua)("/save_resume_204?" + (0, m.Af)({
                    v: a,
                    t: b.toString()
                }))
            }
        }
    };
    var EE = function() {
        var a = (0, m.v)("PLAYER_REFERENCE");
        if (a) {
            VE = !0;
            (0, m.R)(window, "beforeunload", $E);
            aF(a.getPlayerState());
            var b = (0, m.v)("RELATED_PLAYER_ARGS");
            b && a && a.updateVideoData && a.updateVideoData(b)
        }
    };
    var FE = function(a) {
        aF(a);
        (0, m.B)("player-state-change", a)
    };
    var JE = function(a) {
        (0, m.B)("player-error", a)
    };
    var IE = function(a) {
        (0, m.mh)("wide", a ? "1" : "0");
        (0, m.B)("player-resize", a)
    };
    var GE = function(a) {
        (0, m.td)(a) && (a = {
            videoId: (0, m.v)("VIDEO_ID"),
            sentiment: a
        });
        (0, m.B)("player-sentiment", a.videoId, a.sentiment)
    };
    var HE = function() {
        (0, m.B)("player-share")
    };
    var KE = function(a) {
        (0, m.B)("player-watchlater", a)
    };
    var LE = function(a) {
        (0, m.B)("player-ad-start", a)
    };
    var SE = function() {
        var a = DE;
        a && (2 == a.getPlayerState() ? a.playVideo() : a.pauseVideo())
    };
    var RE = function() {
        var a = DE;
        if (a) {
            var b = a.getCurrentTime();
            a.seekTo(b + 10)
        }
    };
    var QE = function() {
        var a = DE;
        if (a) {
            var b = a.getCurrentTime();
            a.seekTo(b - 10)
        }
    };
    var bF = function(a, b) {
        var c = DE;
        if (c) {
            var d = null != b ? b : !0;
            c.seekTo(a, !0);
            d && window.scroll(0, 0);
            c.playVideo()
        }
    };
    var NE = function() {
        if (VE) {
            var a = window.location.hash;
            a != cF && (cF = a, a = (0, m.zf)(a), "t" in a && a.t != dF.t && bF((0, m.ew)(a.t), !1), dF = a)
        }
    };
    var aF = function(a) {
        eF || 1 != a && 2 != a && 0 != a || (eF = !0, (0, m.B)("player-playback-start"))
    };
    var XE = function() {
        return (0, m.v)("RESUME_COOKIE_NAME")
    };
    var fF = function(a, b) {
        var c = 3E3 == b;
        if (a) {
            var d = ["guide"];
            c && d.push("related");
            gF(d, function() {
                (0, m.x)(hF.guide)
            });
            hF.guide = (0, m.w)(function() {
                (0, m.S)(iF);
                jF(d, !1)
            }, 3E3)
        }!b || a && c || (hF.related = (0, m.w)(function() {
            jF(["related"])
        }, b));
        c = ["comments"];
        (0, m.v)("DELAY_LOAD_FOOTER") && c.push("footer");
        kF(c)
    };
    var gF = function(a, b) {
        iF = (0, m.eg)((0, m.D)("guide-loading-toggle"), "click", function(c) {
            b && !1 === b(c) || jF(a, !0)
        })
    };
    var kF = function(a) {
        var b = (0, m.D)((0, m.v)("IS_ACTIVE_LIVE_VIDEO") && !(0, m.v)("IS_DISTILLER") ? "watch7-sidebar-discussion" : "watch-discussion");
        if ((0, m.Oe)(b)) {
            (0, m.I)(b, "scrolldetect");
            (0, m.Hc)(b, "scrolldetect-callback", "comments-delay-load");
            var c = (0, m.C)() + 1E3;
            (0, m.At)({
                "comments-delay-load": function() {
                    if ((0, m.v)("WATCH_COMMENTS_LOAD_DELAY_PLAYBACK")) {
                        var b = (0, m.E)(jF, a);
                        eF ? b() : PE.push((0, m.y)("player-playback-start", b))
                    } else(0, m.w)((0, m.E)(jF, a), c - (0, m.C)())
                }
            })
        }
    };
    var jF = function(a, b) {
        var c = (0, m.v)("VIDEO_ID");
        if (!c && ((0, m.ka)(a, "comments"), !a || !a.length)) return;
        var d = {
            v: c
        };
        (0, m.lc)(a, "comments") && (0, m.v)("IS_DISTILLER") && (d.distiller = "1");
        var e = (0, m.yf)(window.location.href);
        e && (0, m.A)(lF, function(a) {
            a in e && (d[a] = e[a])
        });
        (0, m.Qr)(a, b, d, (0, m.E)(mF, a))
    };
    var mF = function(a) {
        if ((0, m.lc)(a, "comments")) {
            if (!(0, m.Yy)()) {
                var b = (0, m.D)("comments-view");
                nF = new kE((0, m.D)("watch-discussion"));
                oF.push((0, m.hg)(b, "click", pE, "comment-action"));
                if (b = (0, m.D)("comments-textarea")) b.disabled = !1, b.id = "";
                (0, m.v)("COMMENT_OPEN_REPLY_BOX") && (b = (0, m.N)("comment", (0, m.D)("linked-comments-header")), vE(b[b.length - 1]));
                (0, m.uq)((0, m.D)("comments-view"))
            }(b = (0, m.v)("JS_COMMENTS_MODULES")) && (0, m.Ta)(b)
        }(0, m.lc)(a, "related") && ((0, m.uq)((0, m.D)("watch-related")), a = (0, m.v)("RELATED_PLAYER_ARGS"),
            b = (0, m.v)("PLAYER_REFERENCE"), a && b && b.updateVideoData && b.updateVideoData(a), (0, m.v)("SKIP_RELATED_ADS") || aD())
    };
    var pF = function(a, b, c) {
        this.b = a;
        this.j = b;
        this.k = this.F = this.R = this.O = this.Q = this.J = this.P = this.W = this.Y = this.i = this.C = this.Nq = this.Oq = this.L = this.o = this.g = this.B = this.Tg = this.A = null;
        this.F = (0, m.U)("/playlist_ajax", {
            ca: {
                action_get_addto_panel: 1,
                video_id: this.j
            },
            onSuccess: function(a, b) {
                qF(this, b.html);
                c()
            },
            N: this
        })
    };
    var qF = function(a, b) {
        a.b.innerHTML = b;
        a.B = (0, m.O)("sort-playlists", a.b);
        a.g = (0, m.O)("playlist-items", a.b);
        a.o = (0, m.O)("added-to-message", a.b);
        a.L = (0, m.O)("added-to-message-title", a.b);
        a.Oq = (0, m.O)("note-added-message", a.b);
        a.Nq = (0, m.O)("note-added-message-title", a.b);
        a.C = (0, m.O)("create-playlist", a.b);
        a.C && (a.i = (0, m.O)("new-playlist-title", a.b), a.Y = (0, m.O)("create-new-playlist", a.b));
        a.W = (0, m.R)(a.B, "change", (0, m.r)(a.bB, a));
        a.P = (0, m.R)(a.C, "submit", (0, m.r)(a.fB, a));
        a.J = (0, m.hg)(a.b, "click", (0, m.r)(a.dB,
            a), "playlist-item");
        a.Q = (0, m.hg)(a.b, "click", (0, m.r)(a.eB, a), "save-note");
        a.O = (0, m.hg)(a.b, "click", (0, m.r)(a.cB, a), "cancel-note");
        a.R = (0, m.R)(a.i, "keyup", (0, m.r)(a.gB, a));
        rF(a, a.B.value);
        (0, m.Ol)()
    };
    var sF = function(a) {
        (0, m.S)(a.W);
        (0, m.S)(a.P);
        (0, m.S)(a.J);
        (0, m.S)(a.Q);
        (0, m.S)(a.O);
        (0, m.S)(a.R)
    };
    var rF = function(a, b) {
        var c = {
            updated: (0, m.E)(a.xv, "time-updated"),
            created: (0, m.E)(a.xv, "time-created"),
            privacy: a.bH,
            "a-z": a.yv,
            "z-a": a.cH
        } [b];
        if (c) {
            var d = (0, m.ed)((0, m.N)("playlist-item", a.g));
            tF(a, d.sort((0, m.r)(c, a)))
        }
    };
    var tF = function(a, b) {
        var c = window.document.createDocumentFragment();
        (0, m.A)(b, function(a) {
            c.appendChild(a)
        });
        (0, m.ze)(a.g);
        (0, m.ye)(a.g, c)
    };
    var uF = function(a, b) {
        (0, m.I)(b, "loading");
        a.k = (0, m.Pj)(b, {
            N: a,
            onSuccess: function(a, d) {
                (0, m.J)(b, "loading");
                d.html ? (sF(this), qF(this, d.html), d.show_feed_privacy_dialog && (0, m.B)("SHOW-FEED-PRIVACY-ADD-TO-PLAYLIST-DIALOG", d.video_id, d.playlist_id)) : d.errors && this.tj(d.errors[0])
            }
        })
    };
    var vF = function(a, b) {
        (0, m.I)(b, "loading");
        (0, m.Pj)(b, {
            format: "XML",
            ba: {
                session_token: (0, m.ad)("addto_ajax"),
                setvideo_id: a.A
            },
            N: a,
            onSuccess: function() {
                wF(this);
                (0, m.J)(b, "loading");
                var a = (0, m.O)("playlist-name", b);
                this.Nq.innerHTML = a.value;
                a = this.Oq;
                this.Tg && m.T.hide(this.Tg);
                this.Tg = a;
                m.T.show(a)
            },
            onError: function(a, d) {
                (0, m.J)(b, "loading");
                this.tj(d.errors[0])
            }
        })
    };
    var wF = function(a) {
        var b = (0, m.O)("selected", a.b);
        b && ((0, m.J)(b, "selected"), a.A = null)
    };
    var xF = function() {
        (0, m.Yb)("yt.net.apiloader.onApiLoaded_GOOGLE_JSAPI", function() {
            yF()
        })
    };
    var yF = function() {
        zF.GOOGLE_JSAPI = !0;
        (0, m.A)(AF.GOOGLE_JSAPI, function(a) {
            a.call()
        });
        delete AF.GOOGLE_JSAPI
    };
    var BF = function(a) {
        this.j = a;
        this.i = [];
        this.A = this.Fn = !1;
        this.o = this.b = this.k = this.g = null;
        var b = (0, m.r)(this.B, this),
            c = (0, m.v)("HL_LOCALE") || "en";
        if (a = CF.GOOGLE_JSAPI) zF.GOOGLE_JSAPI ? b.call() : (AF.GOOGLE_JSAPI || (AF.GOOGLE_JSAPI = []), AF.GOOGLE_JSAPI.push(b), DF.GOOGLE_JSAPI || (xF(), b = {
            callback: "yt.net.apiloader.onApiLoaded_GOOGLE_JSAPI"
        }, c && (b.language = c), a = (0, m.uf)(a, b), c = window.document.createElement("script"), c.src = a, window.document.body.appendChild(c), DF.GOOGLE_JSAPI = !0))
    };
    var EF = function(a, b) {
        var c = (0, m.D)("stats-optout-form");
        c && (m.T.hide("stats-optout-success"), m.T.hide("stats-optout-error"), a.o = (0, m.Pj)(c, {
            format: "XML",
            ca: {
                opt_out: b
            },
            onSuccess: function() {
                this.Fn = b;
                m.T.show("stats-optout-success")
            },
            onError: function() {
                (0, m.D)("stats-opt-out-chbox").checked = !this.Fn;
                m.T.show("stats-optout-error")
            }
        }))
    };
    var FF = function(a, b) {
        var c = (0, m.H)(a, b);
        if (c) {
            var d = (0, m.Q)(a, "watch-actions-stats-rats"),
                e = (0, m.H)(d, "current-" + b);
            e != c && ((0, m.Gd)(d, e, c), (0, m.Hc)(d, "current-" + b, c))
        }
    };
    var GF = function(a, b, c) {
        a = (0, m.O)("watch-actions-stats-rats", a.j);
        if (!a) return null;
        b = (0, m.H)(a, "current-" + b);
        return c && b && 0 == b.lastIndexOf(c, 0) ? b.substr(c.length) : b
    };
    var HF = function(a) {
        if (a.g && a.A && a.k) {
            var b = GF(a, "metric-css", "stats-metric-"),
                c = GF(a, "mode-css", "stats-mode-");
            b && c && (a.b || (a.b = new window.google.visualization.LineChart(a.k)), IF(a, a.b, a.k, a.g.day || {}, b in a.g ? a.g[b][c] || {} : {}))
        }
    };
    var IF = function(a, b, c, d, e) {
        var g = new window.google.visualization.DataTable;
        g.addColumn("date", "Date");
        g.addColumn("number", "value");
        "cmp_data" in e ? (g.addColumn("number", "cmp_data"), d = QC(d.data || [], e.data || [], e.cmp_data || [])) : d = QC(d.data || [], e.data || []);
        (0, m.A)(d, function(a) {
            a[0] = JF(a[0]);
            g.addRow(a)
        });
        e = e.opt || {};
        "hAxis" in e && "viewWindow" in e.hAxis && (d = e.hAxis.viewWindow, "min" in d && !(d.min instanceof Date) && (d.min = JF(d.min)), "max" in d && !(d.max instanceof Date) && (d.max = JF(d.max)));
        d = (0, m.Pe)(c);
        (0, m.De)(c);
        c.style.left = "-5000px";
        (0, m.ye)(a.j, c);
        try {
            b.draw(g, e)
        } catch (h) {
            throw h;
        } finally {
            c.style.left = "", (0, m.De)(c), d && (0, m.ye)(d, c)
        }
    };
    var JF = function(a) {
        return new Date(a + 6E4 * (new Date(a)).getTimezoneOffset())
    };
    var KF = function(a, b) {
        this.A = a;
        this.B = b;
        this.g = (0, m.D)("watch-like-dislike-buttons");
        this.i = "action-panel-details";
        var c = (0, m.H)(this.g, "vote-state"),
            c = (0, window.parseInt)(c, 10);
        (0, window.isNaN)(c) && (c = 2);
        (0, m.Gc)(this.g, "vote-state");
        this.j = c;
        this.b = [];
        this.ce = [];
        this.mn = this.qn = this.o = this.k = null;
        this.C = this.gr = 0;
        LF(this);
        MF(this, this.i);
        c = (0, m.zf)(window.location.hash).action;
        "share" == c ? this.Cr() : "flag" == c ? NF(this, "action-panel-report") : "stats" == c && NF(this, "action-panel-stats");
        (0, m.v)("RECIPROCAL_CIRCLE_ADD_PROMO") &&
        OF(this)
    };
    var PF = function(a) {
        switch (a) {
            case "action-panel-share":
                (0, m.Yj)("share");
                (0, m.v)("CONVERSION_CONFIG_DICT") && (0, m.Pk)("share", (0, m.v)("CONVERSION_CONFIG_DICT").uid || "");
                break;
            case "action-panel-addto":
                (0, m.Yj)("add_to_playlist")
        }
    };
    var LF = function(a) {
        a.ce.push((0, m.y)("player-share", a.Cr, a));
        a.ce.push((0, m.y)("player-state-change", a.CF, a));
        a.ce.push((0, m.y)("player-sentiment", a.wF, a));
        a.ce.push((0, m.y)("livestreaming-likes-updated", a.BF, a));
        a.b.push((0, m.hg)(a.A, "click", (0, m.r)(a.vF, a), "action-panel-trigger"));
        if ((0, m.v)("LOGGED_IN")) {
            var b = (0, m.D)("watch-dislike");
            a.b.push((0, m.R)((0, m.D)("watch-like"), "click", (0, m.r)(a.uF, a)));
            a.b.push((0, m.R)(b, "click", (0, m.r)(a.tF, a)));
            (0, m.v)("WATCH_STATS_RATING_BUTTONS") && (b = (0, m.D)("watch-stats-dislike"),
                a.b.push((0, m.R)((0, m.D)("watch-stats-like"), "click", (0, m.r)(a.zF, a))), a.b.push((0, m.R)(b, "click", (0, m.r)(a.yF, a))))
        }(b = (0, m.D)("watch-share-button")) && a.b.push((0, m.R)(b, "click", (0, m.r)(a.xF, a)));
        var c = (0, m.D)("donation-box");
        if (c) {
            var d = (0, m.O)("google-checkout-price", c);
            a.b.push((0, m.R)(d, "change", function() {
                (0, m.O)("google-checkout-donate", c).disabled = 1 > d.selectedIndex
            }));
            if (b = (0, m.D)("watch-donation-button")) {
                var e = new m.ty;
                (0, m.jw)(e, b);
                (0, m.G)(a, e)
            }
        }
        a.ce.push((0, m.y)("watch-video-liked", (0, m.r)(a.AF,
            a)))
    };
    var QF = function(a, b, c) {
        RF(!1);
        (0, m.Zj)(b, c, {
            vb: (0, m.v)("PLAYBACK_ID"),
            hv: (0, m.v)("STATION_ID"),
            onSuccess: (0, m.r)(function(a, e) {
                var g;
                t: switch (c) {
                    case 1:
                        g = "sentiment-dislike";
                        break t;
                    case 0:
                        g = "sentiment-like";
                        break t;
                    default:
                        g = "sentiment-indifferent"
                }(0, m.B)(g, b);
                0 == c ? ((0, m.B)("watch-video-liked"), (0, m.Gd)(this.g, "disliked", "liked")) : 1 == c ? ((0, m.B)("watch-video-disliked"), (0, m.Gd)(this.g, "liked", "disliked")) : (0, m.M)(this.g, "liked", "disliked");
                g = (0, m.D)("watch-like");
                var h;
                if (h = 0 == c ? (0, m.H)(g, "unlike-tooltip") :
                    (0, m.H)(g, "like-tooltip"))(0, m.Gc)(g, "tooltip-text"), g.title = h;
                this.j = c;
                0 == c && "True" == e.show_feed_privacy_dialog && (0, m.B)("SHOW-FEED-PRIVACY-LIKE-DIALOG", b)
            }, a),
            onError: (0, m.r)(function() {
                SF(this, "action-panel-error")
            }, a),
            za: (0, m.r)(function() {
                RF(!0)
            }, a)
        })
    };
    var RF = function(a) {
        var b = (0, m.D)("watch-like-dislike-buttons");
        (0, m.w)(function() {
            (0, m.Of)(b, a)
        }, 0)
    };
    var TF = function(a, b) {
        NF(a, "action-panel-share", b)
    };
    var NF = function(a, b, c) {
        var d = (0, m.D)("watch7-secondary-actions");
        PB(m.kl.getInstance(), d);
        d = UF(a, (0, m.D)(b));
        (0, m.L)(d, "yt-uix-button-toggled");
        MF(a, b, c)
    };
    var VF = function(a) {
        return (0, m.v)("ALLOW_RATINGS") ? (0, m.v)("LOGGED_IN") ? (0, m.v)("YPC_CAN_RATE_VIDEO") ? !0 : (SF(a, "action-panel-rental-required"), !1) : (SF(a, "action-panel-login"), !1) : (SF(a, "action-panel-ratings-disabled"), !1)
    };
    var MF = function(a, b, c) {
        if ("action-panel-none" != b) {
            var d = (0, m.D)(b),
                e = !!(0, m.H)(d, "auth-required"),
                d = !!(0, m.H)(d, "panel-loaded");
            if (e && !(0, m.v)("LOGGED_IN")) SF(a, "action-panel-login");
            else if (d) SF(a, b);
            else switch (b) {
                case "action-panel-details":
                    b = (0, m.D)("action-panel-details");
                    WF(a);
                    (0, m.Hc)(b, "panel-loaded", "true");
                    SF(a, "action-panel-details");
                    break;
                case "action-panel-share":
                    XF(a, c);
                    break;
                case "action-panel-addto":
                    b = (0, m.D)("action-panel-addto");
                    c = new pF(b, (0, m.v)("VIDEO_ID"), m.da);
                    (0, m.G)(a, c);
                    (0, m.Hc)(b, "panel-loaded", "true");
                    SF(a, "action-panel-addto");
                    break;
                case "action-panel-transcript":
                    YF(a);
                    break;
                case "action-panel-stats":
                    ZF(a);
                    break;
                case "action-panel-report":
                    $F(a)
            }
        }
    };
    var WF = function(a) {
        var b = (0, m.O)("yt-uix-expander", (0, m.D)("action-panel-details"));
        b && (a.b.push((0, m.R)((0, m.D)("watch-description-content"), "click", function() {
            if ((0, m.Hd)(b, "yt-uix-expander-collapsed")) {
                var a = m.Il.getInstance(),
                    d = a.wa(b);
                d && ((0, m.M)(d, (0, m.V)(a, "collapsed")), a.i(d, "expander-action"))
            }
        })), (0, m.Hd)(b, "yt-uix-expander-collapsed") && a.b.push((0, m.eg)(b, "click", function() {
            var a = (0, m.D)("watch-source-videos-list");
            a && (this.qn = HC(a))
        })))
    };
    var XF = function(a, b) {
        var c = LC(),
            d = KC(),
            e = (0, m.D)("action-panel-share"),
            g = new m.$z((0, m.D)("watch-actions-share-panel"), c, d, function() {
                m.T.hide("watch-actions-share-loading")
            }, !0, null, b, !1, (0, m.v)("SHARE_CAPTION"));
        (0, m.G)(a, g);
        var h = (0, m.$c)(function() {
            var a = (0, m.ar)(),
                b = m.T.Ra(e);
            if (a && b) {
                var a = a.getCurrentTime(),
                    b = Math.floor(a / 3600),
                    c = Math.floor(a % 3600 % 60),
                    a = (0 < b ? b + ":" : "") + (0, m.nd)(Math.floor(a % 3600 / 60), 0 < b ? 2 : 1) + ":" + (0, m.nd)(c, 2);
                g.pj(a)
            } else(0, m.Zc)(h)
        }, 1E3);
        a.C = h;
        (0, m.Hc)(e, "panel-loaded", "true");
        SF(a, "action-panel-share")
    };
    var ZF = function(a) {
        var b = (0, m.D)("action-panel-stats");
        if (b) {
            var c = new BF(b);
            (0, m.G)(a, c);
            a.o = IC((0, m.r)(function(a, e, g) {
                g ? (b.innerHTML = a, c.load(e)) : SF(this, "action-panel-error")
            }, a));
            (0, m.Hc)(b, "panel-loaded", "true");
            SF(a, "action-panel-stats")
        }
    };
    var $F = function(a) {
        var b, c = !1,
            d = !1,
            e = (0, m.D)("action-panel-report"),
            g = (0, m.r)(function() {
                SF(this, "action-panel-error")
            }, a);
        (0, m.Lh)((0, m.v)("REPORTVIDEO_CSS"));
        (0, m.Ra)((0, m.v)("REPORTVIDEO_JS"), (0, m.r)(function() {
            this.ma() || (c = !0, d && c && aG(e, b))
        }, a));
        a.k = JC((0, m.r)(function(a, k) {
            k ? (d = !0, b = a, d && c && aG(e, b)) : g()
        }, a));
        (0, m.Hc)(e, "panel-loaded", "true");
        SF(a, "action-panel-report")
    };
    var aG = function(a, b) {
        a.innerHTML = b;
        (0, m.n)("yt.www.report.reportvideo.init")(!0)
    };
    var YF = function(a) {
        var b = (0, m.D)("action-panel-transcript");
        (0, m.n)("yt.www.watch.transcript.open")(function() {
            m.T.hide("watch-actions-transcript-loading");
            m.T.show((0, m.D)("watch-actions-transcript"))
        });
        (0, m.Hc)(b, "panel-loaded", "true");
        SF(a, "action-panel-transcript")
    };
    var SF = function(a, b) {
        var c = bG[a.i],
            d = bG[b],
            e = (0, m.D)(a.i),
            g = (0, m.D)(b),
            h = a.B;
        if (d == c)(0, m.M)(h, "action-panel-transition"), (0, m.M)(e, "action-panel-center", "action-panel-left", "action-panel-right"), m.T.show(e);
        else {
            a.i = b;
            m.T.show(e);
            h.style.height = h.clientHeight + "px";
            (0, m.L)(h, "action-panel-transition");
            if (d > c) var k = "action-panel-right",
                p = "action-panel-left";
            else k = "action-panel-left", p = "action-panel-right";
            (0, m.L)(e, "action-panel-center");
            (0, m.L)(g, k);
            m.T.show(g);
            (0, m.w)(function() {
                (0, m.M)(e, "action-panel-center");
                (0, m.L)(e, p);
                (0, m.M)(g, k);
                (0, m.L)(g, "action-panel-center");
                this.gr = (0, m.w)(function() {
                    m.T.hide(e);
                    (0, m.M)(e, p);
                    (0, m.M)(g, "action-panel-center");
                    (0, m.M)(h, "action-panel-transition");
                    h.style.height = ""
                }, (0, m.Tp)(g))
            }, 0)
        }
    };
    var UF = function(a, b) {
        var c = (0, m.N)("action-panel-trigger", a.A);
        return (0, m.Wb)(c, function(a) {
            a = (0, m.H)(a, "trigger-for");
            return b.id == a
        })
    };
    var OF = function(a) {
        var b = (0, m.O)("yt-uix-clickcard-target", (0, m.D)("watch7-user-header")),
            c = (0, m.O)("rcap-dismiss-button", window.document);
        (0, m.yp)("plus:follow", (0, m.zp)(function() {
            var a = (0, m.O)("add-to-circle"),
                b = (0, m.n)("gapi.follow.render");
            b && a && (b(a, {
                href: (0, m.H)(a, "gplus-profile-url"),
                height: 24,
                source: "youtube:topfans-follow-back"
            }), a.style.zIndex = 2147483647)
        }));
        a.b.push((0, m.R)(c, "click", function() {
            this.mn = (0, m.U)("/engagement_wizard_ajax", {
                method: "POST",
                ca: {
                    action_dismiss_reciprocal_circle_add_promo: "1"
                },
                ba: {
                    session_token: (0, m.ad)("engagement_wizard_ajax"),
                    video_id: (0, m.v)("VIDEO_ID")
                }
            })
        }));
        m.Gl.getInstance().show(b)
    };
    var cG = function() {
        this.b = [];
        this.g = 0;
        this.i = window.document.title;
        (0, m.ar)() && this.au(1);
        this.b.push((0, m.y)("page-resize", this.uD, this));
        this.b.push((0, m.y)("player-state-change", this.au, this));
        this.b.push((0, m.y)("player-resize", this.vD, this));
        this.kl()
    };
    var dG = function(a) {
        1 == a && (0, m.Up)()
    };
    var eG = function(a, b) {
        if (!fG && b.swfcfg) {
            var c = b.swfcfg.args,
                d = DE;
            d && d.preloadVideoByPlayerVars && c && d.preloadVideoByPlayerVars(c);
            fG = !0
        }
    };
    var gG = function(a) {
        (0, m.$e)(a.target, "BUTTON") || a.currentTarget.click()
    };
    var hG = function(a, b) {
        b.subscriptionId && window.location.reload(!0)
    };
    m.Uz.prototype.pj = (0, m.Xb)(9, function() {
        if (this.ox) {
            var a = (0, m.ar)(),
                b = Math.round(1E3 * a.getCurrentTime()),
                b = [b, b + 1E3],
                b = (0, m.Vz)(this, b, !0);
            (0, m.Yz)(this, b, 1 != a.getPlayerState())
        }
    });
    m.$z.prototype.pj = (0, m.Xb)(8, function(a) {
        !this.g || (0, m.Hd)(this.g, "focused") || this.fa || (this.g.value = a, this.ji(), m.T.Ra(this.k) && this.L && this.L.pj())
    });
    var UB = "",
        cC = null,
        bC = null,
        WB = null,
        OB = null,
        jC = null,
        iG = [],
        pC = null,
        vC = null,
        xC = null,
        OC = [],
        NC = [],
        UE = [],
        nF, oE, jG, kG;
    m.f = RC.prototype;
    m.f.tg = !1;
    m.f.$i = !1;
    m.f.start = function(a) {
        var b = {
            start: 0
        };
        b.end = a.scrollHeight - a.clientHeight;
        b.duration = b.end / 3;
        b.Ni = "linear";
        this.b = new m.su(a, b);
        this.tg = !0;
        this.g.listen(a, "click", this.BE);
        this.g.listen(a, "mouseover", this.DE);
        this.g.listen(a, "mouseout", this.AE);
        this.g.listen(a, "scroll", this.CE)
    };
    m.f.CE = function() {
        this.$i || this.tg || (this.b.pause(), this.$i = !0)
    };
    m.f.BE = function() {
        this.b.pause();
        this.tg = !1;
        this.$i = !0
    };
    m.f.DE = function() {
        this.b.pause();
        this.tg = !1
    };
    m.f.AE = function() {
        this.tg || this.$i || (this.b.play(), this.tg = !0)
    };
    m.f.dispose = function() {
        this.g.removeAll();
        this.$i = this.tg = !1;
        this.b = null;
        this.i = !0
    };
    m.f.ma = function() {
        return this.i
    };
    var TC, VC, vD = "",
        wD = "",
        AD = !1,
        ZC = !1,
        gD = !1,
        iD = null,
        ED = null,
        HD = !1,
        DD = !1,
        JD = !1,
        TD = null,
        WC = null,
        QD = null,
        VD = null,
        BD = 0,
        jD = null,
        kD = null,
        lD = null,
        LD = [],
        MD = [],
        OD = null,
        PD = null,
        KD = !1;
    (0, m.l)("yt.www.watch.ads.setAdId", function(a) {
        window.ad_debug = a
    }, void 0);
    (0, m.l)("yt.www.watch.ads.setCompanion", mD, void 0);
    (0, m.l)("yt.www.watch.ads.showForcedMpu", function(a) {
        var b = oD(a, 250);
        a = pD(a);
        mD(b, a)
    }, void 0);
    (0, m.l)("yt.www.watch.ads.createGutSlot", bD, void 0);
    (0, m.l)("yt.www.watch.ads.handleMoveGutCompanion", function() {
        var a = (0, m.D)("google_companion_ad_div"),
            b = (0, m.D)("yt-gut-content");
        b ? b.innerHTML = "" : (b = window.document.createElement("div"), b.id = "yt-gut-content");
        a && (a.innerHTML = "", a.appendChild(b));
        nD()
    }, void 0);
    (0, m.l)("yt.www.watch.ads.setGutSlotSizes", function(a, b) {
        if (jD) {
            var c = jD.getSizes();
            (0, m.gd)(c);
            b && c.push(kD);
            a && c.push(lD)
        }
    }, void 0);
    (0, m.l)("yt.www.watch.ads.handleSetCompanion", qD, void 0);
    (0, m.l)("yt.www.watch.ads.handleSetCompanionForInstream", rD, void 0);
    (0, m.l)("yt.www.watch.ads.handleSetCompanionForFreewheel", sD, void 0);
    (0, m.l)("yt.www.watch.ads.handleHideCompanion", mD, void 0);
    (0, m.l)("yt.www.watch.ads.handleHideCompanionForInstream", mD, void 0);
    (0, m.l)("yt.www.watch.ads.handleCloseMpuCompanion", mD, void 0);
    (0, m.l)("yt.www.watch.ads.handleSetAfvCompanionVars", tD, void 0);
    (0, m.l)("yt.www.watch.ads.handleShowAfvCompanionAdDiv", yD, void 0);
    (0, m.l)("yt.www.watch.ads.handleHideAfvInstreamCompanionAdDiv", zD, void 0);
    (0, m.l)("yt.www.watch.ads.AD_LOAD_TOPIC", "watchads-adLoad", void 0);
    (0, m.l)("yt.www.watch.ads.companionSetupComplete", uD, void 0);
    (0, m.l)("yt.www.watch.ads.pauseVideo", xD, void 0);
    (0, m.l)("yt.www.watch.ads.loadAfc", cD, void 0);
    (0, m.l)("yt.www.watch.ads.isAfcAdVisible", function() {
        var a = (0, m.D)("google_companion_ad_div");
        return a ? (a = (0, m.He)(a)) && "IFRAME" == a.tagName ? -1 != a.src.indexOf("youtube.com/ad_frame") : !1 : !1
    }, void 0);
    (0, m.l)("yt.www.watch.ads.checkInit", dD, void 0);
    (0, m.l)("yt.www.ads.pyv.pyvWatchAfcWithPpvCallback", function(a) {
        FC(a);
        0 < a.length && EC()
    }, void 0);
    (0, m.l)("yt.www.ads.pyv.pyvWatchAfcCallback", FC, void 0);
    (0, m.l)("yt.www.ads.pyv.pyvHomeAfcCallback", m.cy, void 0);
    (0, m.l)("yt.www.ads.pyv.showPpvOnWatch", hC, void 0);
    (0, m.l)("yt.www.ads.pyv.loadPyvIframe", DC, void 0);
    (0, m.l)("setCompanion", qD, void 0);
    (0, m.l)("setInstreamCompanion", rD, void 0);
    (0, m.l)("setFreewheelCompanion", sD, void 0);
    (0, m.l)("closeInPageAdIframe", mD, void 0);
    (0, m.l)("hideInstreamCompanion", mD, void 0);
    (0, m.l)("closeMpuCompanion", mD, void 0);
    (0, m.l)("setAfvCompanionVars", tD, void 0);
    (0, m.l)("showAfvCompanionAdDiv", yD, void 0);
    (0, m.l)("hideAfvInstreamCompanionAdDiv", zD, void 0);
    (0, m.l)("setVideoWallCompanionTrackingUrl", function(a, b) {
        vD = a;
        wD = b;
        window.addEventListener("message", function(a) {
            "companion-setup-complete" == a.data ? uD() : "pause-video" == a.data && xD()
        }, !1)
    }, void 0);
    var YD = null;
    m.f = cE.prototype;
    m.f.destroy = function() {
        (0, m.S)(this.k);
        this.k = [];
        (0, m.A)(this.j, function(a) {
            (0, m.Zc)(a)
        });
        this.j = [];
        (0, m.Gc)(this.Ya, "initialized")
    };
    m.f.reset = function() {
        fE(this);
        hE(this);
        (0, m.M)(this.Ya, "has-focus");
        this.hf.disabled = !1;
        this.Fc.value = "";
        dE(this);
        this.Fc.blur();
        this.i = null;
        this.destroy();
        (0, m.B)("comment-form-reset")
    };
    m.f.focus = function() {
        this.Fc.focus()
    };
    m.f.$r = function() {
        this.Fc.readOnly || dE(this)
    };
    m.f.gA = function(a) {
        if (this.A) switch (a.keyCode) {
            case 13:
                this.Zr(a);
                break;
            case 27:
                this.reset()
        }
    };
    m.f.as = function() {
        (0, m.Hd)(this.Ya, "has-focus") || m.T.hide(this.Xf);
        (0, m.L)(this.Ya, "has-focus");
        (0, m.B)("comments-focus", this.Ya)
    };
    m.f.fA = function() {
        (0, m.B)("comments-blur", this.Ya)
    };
    m.f.Zr = function(a) {
        a.preventDefault();
        if (!this.hf.disabled) {
            this.hf.disabled = !0;
            this.Fc.readOnly = !0;
            a = (0, m.xf)((0, m.Fj)(this.Ya));
            a.screen = (0, m.Af)({
                h: window.screen.height,
                w: window.screen.width,
                d: window.screen.colorDepth
            });
            var b = a.comment,
                b = {
                    return_ajax: "true",
                    len: b.length,
                    wc: b.split(/\s+/).length
                };
            this.Ya.reply_parent_id.value && (b.reply = 1);
            this.i && (b.tag = this.i);
            var c = (0, m.v)("PLAYBACK_ID");
            c && (a.plid = c);
            (0, m.U)(this.Ya.action, {
                format: "XML",
                method: "POST",
                ca: b,
                ba: a,
                za: function(a, b) {
                    var c = b.str_code;
                    switch (c) {
                        case "OK":
                            c = window.document.createElement("ul");
                            c.innerHTML = b.html_content;
                            c = (0, m.He)(c);
                            if (this.Ya.reply_parent_id.value) {
                                var h = (0, m.$e)(this.Ya, null, "comments-post-container"),
                                    k = (0, m.$e)(h, null, "comment");
                                (0, m.De)(h);
                                (0, m.Gd)(k, "replying", "has-child");
                                (0, m.L)(c, "child");
                                (0, m.Id)(c, "last", !(0, m.Ke)(k));
                                (0, m.Be)(c, k)
                            } else this.oz ? this.Lr.appendChild(c) : (0, m.Ce)(this.Lr, c, 0), this.reset();
                            (0, m.zq)(c);
                            (0, m.B)("comment-submit-success");
                            "True" == b.show_feed_privacy_dialog && (0, m.B)("SHOW-FEED-PRIVACY-COMMENT-DIALOG",
                                (0, m.v)("VIDEO_ID"), b.time_created);
                            break;
                        case "PENDING":
                            fE(this);
                            this.Jr.innerHTML = (0, m.Yc)("COMMENT_PENDING");
                            (0, m.Gd)(this.Xf, "yt-alert-error", "yt-alert-info");
                            m.T.show(this.Xf);
                            break;
                        default:
                            jE(this, c, b)
                    }
                    this.Fc.readOnly = !1
                },
                N: this
            });
            (0, m.v)("CONVERSION_CONFIG_DICT") && (0, m.Pk)("comment", (0, m.v)("CONVERSION_CONFIG_DICT").uid || "");
            (0, m.Yj)("comment")
        }
    };
    kE.prototype.destroy = function() {
        (0, m.S)(this.b);
        this.b = []
    };
    kE.prototype.j = function(a) {
        a.preventDefault();
        (0, m.Hd)(a.currentTarget, "yt-uix-button-toggled") || (m.T.hide(this.dt), (0, m.B)("comments-page-changing"), this.rj ? this.g(2) : lE(this, (0, m.r)(this.g, this, 2)))
    };
    kE.prototype.g = function(a) {
        var b = (0, m.D)("comments-view");
        b.appendChild(this.rj);
        (0, m.zq)(b);
        if (b = (0, m.D)("comments-textarea")) b.disabled = !1, b.id = "";
        if (b = (0, m.O)("comment-list", this.Z)) {
            var c = (0, m.O)("live-comments-setting", this.Z);
            (0, m.B)("comments-page-changed", b, c, a)
        } else(0, m.B)("comments-page-changed");
        lE(this)
    };
    var oF = [];
    var AE = null,
        ME = window.NaN;
    var DE, PE = [],
        VE = !1,
        eF = !1,
        cF = "",
        dF = {},
        OE = 0;
    var iF, hF = {},
        lF = "lc lch lcor lcai generate_fake_live_comments debugjs".split(" ");
    (0, m.s)(pF, m.t);
    m.f = pF.prototype;
    m.f.G = function() {
        this.F && this.F.abort();
        this.k && this.k.abort();
        sF(this);
        pF.D.G.call(this)
    };
    m.f.bB = function(a) {
        a = a.currentTarget.value;
        rF(this, a);
        (0, m.U)("/playlist_ajax?action_update_addto_sort_criteria=1", {
            ca: {
                criteria: a
            }
        })
    };
    m.f.bH = function(a, b) {
        var c = (0, m.H)(a, "is-private") || "",
            d = (0, m.H)(b, "is-private") || "";
        return (0, m.xc)(c, d)
    };
    m.f.xv = function(a, b, c) {
        b = (0, window.parseInt)((0, m.H)(b, a), 10) || window.Infinity;
        return ((0, window.parseInt)((0, m.H)(c, a), 10) || window.Infinity) - b
    };
    m.f.yv = function(a, b) {
        var c = (0, m.H)(a, "title") || "",
            d = (0, m.H)(b, "title") || "";
        return (0, m.xc)(c, d)
    };
    m.f.cH = function(a, b) {
        return this.yv(b, a)
    };
    m.f.fB = function(a) {
        a.preventDefault();
        a = (0, m.O)("create-playlist", this.b);
        (0, m.zc)(this.i.value) || uF(this, a)
    };
    m.f.tj = function(a) {
        var b = (0, m.O)("added-to-error-message", this.b);
        (0, m.O)("yt-alert-content", b).innerHTML = a;
        m.T.show(b)
    };
    m.f.dB = function(a) {
        var b = a.currentTarget;
        (0, m.wd)(b, "selected") || (a.stopPropagation(), wF(this), (0, m.I)(b, "loading"), a = (0, m.O)("added-to-error-message", this.b), m.T.hide(a, this.o), a = (0, m.H)(b, "full-list-id"), (0, m.js)({
            ob: this.j,
            al: a,
            KE: (0, m.D)("playlist-addto-top-checkbox").checked ? "True" : "False",
            onSuccess: (0, m.E)(this.TE, b),
            onError: (0, m.E)(this.SE, b),
            N: this
        }))
    };
    m.f.TE = function(a, b, c) {
        this.A = c.setvideo_id;
        (0, m.Bd)(a, "loading", "contains-selected-videos");
        this.L.innerHTML = (0, m.H)(a, "title");
        b = this.o;
        this.Tg && m.T.hide(this.Tg);
        this.Tg = b;
        m.T.show(b);
        (0, m.B)("PLAYLIST_UPDATED");
        b = (0, m.O)("playlist-video-count", a);
        b.innerHTML = (0, window.parseInt)(b.innerHTML, 10) + 1;
        "True" == c.show_private_video_warning && (b = (0, m.O)("private-video-warning", (0, m.O)("watch-playlist-drawer"))) && m.T.show(b);
        b = (0, m.H)(a, "list-type");
        var d = "favorites" == b;
        d || "watch-later" == b || (0, m.I)(a, "selected");
        d ? (a = "playlist-favorite", b = "SHOW-FEED-PRIVACY-FAVORITE-DIALOG") : (a = "playlist-addto", b = "SHOW-FEED-PRIVACY-ADD-TO-PLAYLIST-DIALOG");
        (0, m.B)(a, this.j, c.full_list_id);
        "True" == c.show_feed_privacy_dialog && (0, m.B)(b, this.j, c.full_list_id)
    };
    m.f.SE = function(a, b, c) {
        (0, m.J)(a, "loading");
        this.tj(c.error_message)
    };
    m.f.eB = function(a) {
        a.preventDefault();
        a = (0, m.Q)(a.currentTarget, "playlist-note-form");
        vF(this, a)
    };
    m.f.cB = function() {
        wF(this)
    };
    m.f.gB = function() {
        this.Y.disabled = (0, m.zc)(this.i.value)
    };
    var CF = {
            GOOGLE_MAPS_API: "//maps.google.com/maps/api/js?sensor=false",
            GOOGLE_LANGUAGE_API_VIRTUAL_KEYBOARD: "//www.google.com/jsapi?key=youtube-internal-vk",
            GOOGLE_LANGUAGE_API_INPUT_TOOLS: "//www.google.com/jsapi?key=youtube-internal-it",
            GOOGLE_PLUS_ONE: "//apis.google.com/js/platform.js",
            GOOGLE_JSAPI: "//www.google.com/jsapi"
        },
        DF = {},
        zF = {},
        AF = {};
    (0, m.s)(BF, m.t);
    BF.prototype.G = function() {
        (0, m.S)(this.i);
        this.i.length = 0;
        this.o && this.o.abort();
        this.b && (this.b.clearChart(), this.b = null);
        BF.D.G.call(this)
    };
    BF.prototype.load = function(a) {
        var b = (0, m.D)("stats-opt-out-chbox");
        b && (this.Fn = !b.checked, this.i.push((0, m.R)(b, "change", (0, m.r)(function() {
            EF(this, !b.checked)
        }, this))));
        this.i.push((0, m.hg)(this.j, "click", (0, m.r)(function(a) {
            FF(a.currentTarget, "mode-css");
            HF(this)
        }, this), "stats-mode-button"));
        this.i.push((0, m.hg)(this.j, "click", (0, m.r)(function(a) {
            FF(a.currentTarget, "top-site-css");
            FF(a.currentTarget, "metric-css");
            HF(this)
        }, this), "stats-bragbar"));
        (0, m.el)(m.go);
        a && (this.g = (0, m.Ni)(a));
        this.k = (0, m.O)("stats-chart-gviz",
            this.j);
        HF(this)
    };
    BF.prototype.B = function() {
        window.google.load("visualization", "1.0", {
            packages: ["corechart"],
            callback: (0, m.r)(this.C, this),
            language: (0, m.v)("HL_LOCALE") || "en"
        })
    };
    BF.prototype.C = function() {
        this.A = !0;
        HF(this)
    };
    (0, m.s)(KF, m.t);
    var bG = {
        "action-panel-details": 1,
        "action-panel-share": 2,
        "action-panel-addto": 3,
        "action-panel-transcript": 4,
        "action-panel-stats": 5,
        "action-panel-report": 6,
        "action-panel-login": 7,
        "action-panel-ratings-disabled": 8,
        "action-panel-rental-required": 9,
        "action-panel-error": 10
    };
    m.f = KF.prototype;
    m.f.G = function() {
        (0, m.S)(this.b);
        this.b.length = 0;
        (0, m.Ka)(this.ce);
        this.ce.length = 0;
        (0, m.x)(this.gr);
        (0, m.Zc)(this.C);
        this.k && this.k.abort();
        this.o && this.o.abort();
        this.qn && this.qn.abort();
        this.mn && this.mn.abort();
        KF.D.G.call(this)
    };
    m.f.uF = function() {
        var a = 0 == this.j ? 2 : 0;
        VF(this) && QF(this, (0, m.v)("VIDEO_ID"), a)
    };
    m.f.tF = function() {
        var a = 1 == this.j ? 2 : 1;
        VF(this) && QF(this, (0, m.v)("VIDEO_ID"), a)
    };
    m.f.zF = function() {
        (0, m.Hf)("action=statsclick&sentiment=like")
    };
    m.f.yF = function() {
        (0, m.Hf)("action=statsclick&sentiment=dislike")
    };
    m.f.AF = function() {
        NF(this, "action-panel-share")
    };
    m.f.Cr = function() {
        TF(this);
        PF("action-panel-share")
    };
    m.f.CF = function(a) {
        0 == a ? (0, m.v)("SHARE_ON_VIDEO_END") && TF(this, !0) : ((0, m.v)("SHARE_ON_VIDEO_PAUSE") && 2 == a && 20 < (0, m.ar)().getCurrentTime() && TF(this, !0), 1 == a && (0, m.v)("SHARE_ON_VIDEO_START") && TF(this, !0))
    };
    m.f.xF = function() {
        var a = (0, m.D)("watch7-secondary-actions");
        PB(m.kl.getInstance(), a)
    };
    m.f.wF = function(a, b) {
        VF(this) && QF(this, a, b)
    };
    m.f.vF = function(a) {
        a = (0, m.H)(a.currentTarget, "trigger-for");
        var b = (0, m.D)("watch-share-button");
        b && (0, m.Hd)(b, "yt-uix-button-toggled") && (0, m.M)(b, "yt-uix-button-toggled");
        MF(this, a);
        PF(a)
    };
    m.f.BF = function(a, b, c, d) {
        var e = (0, m.D)("watch7-views-info"),
            g = (0, m.O)("likes-count", e);
        g && (0, m.Se)(g, a);
        (a = (0, m.O)("dislikes-count", e)) && (0, m.Se)(a, b);
        if (b = (0, m.O)("video-extras-sparkbar-likes", e)) b.style.width = c + "%";
        if (c = (0, m.O)("video-extras-sparkbar-dislikes", e)) c.style.width = d + "%"
    };
    m.f = cG.prototype;
    m.f.dispose = function() {
        (0, m.x)(this.g);
        (0, m.Ka)(this.b);
        this.b.length = 0
    };
    m.f.uD = function() {
        this.kl()
    };
    m.f.au = function(a) {
        window.document.title = 1 == a ? "\u25b6 " + this.i : this.i
    };
    m.f.vD = function(a) {
        a = !!a;
        var b = (0, m.D)("watch7-container"),
            c = (0, m.D)("player"),
            d = (0, m.D)("watch7-sidebar");
        if (b && c && d) {
            var e = (0, m.Tp)(d);
            if (a)(0, m.I)(b, "watch-wide"), (0, m.I)(c, "watch-playlist-collapsed"), (0, m.x)(this.g), this.g = (0, m.w)((0, m.r)(this.kl, this), e);
            else if ((0, m.J)(b, "watch-wide"), (0, m.J)(c, "watch-playlist-collapsed"), this.kl(), (0, m.zq)(d), a = (0, m.D)("watch7-playlist-tray-container")) a = (0, m.Tp)(a), (0, m.w)(gC, a)
        }
    };
    m.f.kl = function() {
        (0, m.x)(this.g);
        var a = (0, m.D)("player"),
            b = (0, m.D)("watch7-container");
        if (b && a) {
            var b = (0, m.wd)(b, "watch-wide"),
                c = (0, m.Zm)();
            b ? (b = 1540 <= c.width && 1040 <= c.height, (0, m.v)("ENABLE_AUTO_LARGE") && b ? ((0, m.yd)(a, ["watch-medium", "watch-small"]), (0, m.I)(a, "watch-large")) : ((0, m.yd)(a, ["watch-small", "watch-large"]), (0, m.I)(a, "watch-medium"))) : ((0, m.yd)(a, ["watch-medium", "watch-large"]), (0, m.I)(a, "watch-small"))
        }
    };
    var fG, lG = [];
    var mG = [],
        nG = [];
    var oG = [];
    (0, m.l)("yt.www.watch.player.init", CE, void 0);
    (0, m.l)("yt.www.watch.player.dispose", function() {
        (0, m.Zc)(OE);
        (0, m.ig)(window, "beforeunload", $E);
        (0, m.Ka)(UE);
        UE = [];
        (0, m.Ka)(ME);
        ME = window.NaN;
        m.Fx.getInstance().oa("onlineReceiverChange", zE);
        AE && (AE.removeEventListener("onRemoteReceiverSelected", BE), AE.removeEventListener("onReady", yE), AE = null);
        var a = (0, m.rx)();
        if (a) {
            (0, m.px)("API disposed");
            var b = m.kx,
                c = (0, m.n)("yt.mdx.remote.debug.handlers_");
            (0, m.ka)(c, b);
            a.setReloadTabRequestHandler && a.setReloadTabRequestHandler(m.da);
            a.removeReceiverListener("YouTube",
                m.wx);
            (0, m.xx)(null)
        }
        m.ux = !1;
        jC = null;
        (0, m.ig)(window, "message", iC);
        (0, m.oz)();
        a = !1;
        DE && (b = DE, b.removeEventListener("onReady", EE), b.removeEventListener("onStateChange", FE), b.removeEventListener("RATE_SENTIMENT", GE), b.removeEventListener("SHARE_CLICKED", HE), b.removeEventListener("SIZE_CLICKED", IE), b.removeEventListener("onError", JE), b.removeEventListener("WATCH_LATER", KE), b.removeEventListener("onAdStart", LE), DE.stopVideo && (DE.stopVideo(), a = !0));
        a || (a = (0, m.D)("movie_player")) && a.stopVideo && a.stopVideo();
        DE = null;
        eF = VE = !1;
        cF = "";
        dF = {};
        (0, m.Ka)(PE);
        PE.length = 0
    }, void 0);
    (0, m.l)("yt.www.watch.player.seekTo", bF, void 0);
    (0, m.l)("yt.www.watch.player.play", function() {
        var a = DE;
        a && a.playVideo()
    }, void 0);
    (0, m.l)("yt.www.watch.player.pause", function() {
        var a = DE;
        a && a.pauseVideo()
    }, void 0);
    (0, m.l)("yt.www.watch.player.saveResumeOffset", ZE, void 0);
    (0, m.l)("yt.www.watch.player.navigate", function(a) {
        (0, m.Ci)(a);
        return !0
    }, void 0);
    (0, m.l)("yt.www.watch.player.handleEndPreview", function(a) {
        var b = DE;
        b && b.stopVideo && b.stopVideo();
        (b = (0, m.D)("watch-checkout-offers")) && (0, m.B)("ypc-init-purchase-for-container", b, a)
    }, void 0);
    (0, m.l)("yt.tracking.social.onAdvertiserVideoView", m.Ok, void 0);
    (0, m.l)("checkCurrentVideo", function(a, b, c) {
        var d = (0, m.v)("VIDEO_ID");
        d && d != a && (a = c ? c : (0, m.Bf)(window.location.href, {
            v: a,
            list: b
        })) && (0, m.Bi)(a)
    }, void 0);
    (0, m.l)("yt.www.watch.related.loadMore", function() {
        m.T.hide("watch-more-related-button");
        m.T.show("watch-more-related");
        GC(function() {
            (0, m.zq)((0, m.D)("watch-more-related"))
        })
    }, void 0);
    (0, m.l)("yt.www.comments.initForm", nE, void 0);
    (0, m.l)("yt.www.thumbnaildelayload.classifyAndLoadVisibleImages", m.uq, void 0);
    (0, m.l)("yt.www.watch.lists.loadThumbnails", gC, void 0);
    (0, m.l)("yt.www.watch.lists.getState", function() {
        var a = [],
            b = {},
            c = -1,
            d = [],
            e = OB;
        if (!e) return null;
        (0, m.A)(e.getElementsByTagName("li"), function(e, g) {
            (0, m.wd)(e, UB) && (c = g);
            var p = (0, m.H)(e, "video-id"),
                u = (0, m.H)(e, "video-username"),
                z = (0, m.H)(e, "video-title"),
                u = {
                    id: p,
                    username: u,
                    title: z
                },
                z = (0, m.H)(e, "video-clip-start"),
                F = (0, m.H)(e, "video-clip-end");
            a[g] = p;
            b[p] = u;
            d[g] = {
                start: z,
                end: F
            }
        });
        var e = (0, m.Lq)(),
            g = m.Nq;
        return {
            author: (0, m.H)(g, "list-author"),
            autoPlay: e,
            clipRanges: d,
            index: c,
            listTitle: (0, m.H)(g, "list-title"),
            listDescription: (0, m.H)(g, "list-description"),
            videoData: b,
            videoIds: a
        }
    }, void 0);
    (0, m.l)("yt.www.watch.activity.getTimeSinceActive", m.Jq, void 0);
    (0, m.l)("yt.www.watch.activity.setTimestamp", m.Iq, void 0);
    (0, m.l)("yt.sharing.facebooktokenrefresh.finish", function(a) {
        var b = {
                session_token: (0, m.ad)("social_connector_ajax"),
                service: "facebook"
            },
            c;
        for (c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
        (0, m.U)("/social_connector_ajax", {
            method: "POST",
            format: "JSON",
            ca: {
                action_connect_service: 1
            },
            ba: b
        })
    }, void 0);
    (0, m.l)("yt.abuse.invokeBotguard", function() {
        return YD ? YD.invoke() : null
    }, void 0);
    (0, m.l)("yt.abuse.botguardInitialized", function() {
        return null != YD
    }, void 0);
    (0, m.Na)((0, m.Uc)({
        name: "www/watch",
        deps: ["www/common"],
        page: "watch",
        init: function() {
            CE();
            var a = (0, m.D)("watch7-action-buttons"),
                b = (0, m.D)("watch7-action-panels");
            kG = null;
            a && b && (kG = new KF(a, b));
            jG = new cG;
            (0, m.Eq)();
            (0, m.R)(window.document, "keypress", CC);
            SC();
            MC();
            if ((0, m.v)("BRANDED_BACKGROUND_IMAGE") || (0, m.v)("BRANDED_BACKGROUND_COLOR")) {
                (0, m.L)((0, m.D)("guide-container"), "branded");
                var a = (0, m.D)("player"),
                    b = (0, m.v)("BRANDED_BACKGROUND_IMAGE"),
                    c = (0, m.v)("BRANDED_BACKGROUND_COLOR");
                b && (a.style.background =
                    "transparent url(" + b + ") no-repeat center top", (0, m.Hd)(window.document.body, "site-left-aligned") && (a.style.backgroundPosition = "left top"));
                c && (a.style.backgroundColor = c)
            }
            a = (0, m.D)("watch7-sidebar");
            iG.push((0, m.hg)(a, "click", SB, "related-action"));
            (0, m.v)("RADIO_ENTRYPOINT_RESUMES_CURRENTLY_PLAYING_VIDEO") && iG.push((0, m.hg)(a, "click", RB, "resumable-list"));
            lG.push((0, m.y)("prefetch", eG));
            (a = (0, m.v)("PLAYER_REFERENCE")) && a.getPlayerState && 1 == a.getPlayerState() ? (0, m.Up)() : lG.push((0, m.y)("player-state-change",
                dG));
            m.Qb && (!window.document.documentMode || 8 > window.document.documentMode) && mG.push((0, m.hg)(window.document.body, "click", gG, "video-thumb"));
            (0, m.Qu)(1);
            a = (0, m.v)("WATCH_RELATED_DELAY");
            b = !!(0, m.O)("guide-module-loading");
            fF(b, a);
            oG.push((0, m.y)("ypc-purchase-success", hG));
            (0, m.Pu)();
            (0, m.v)("FACEBOOK_TOKEN_REFRESH_ENABLED") && (a = (0, m.D)("facebook_token_refresh_iframe"), b = (0, m.v)("FACEBOOK_TOKEN_REFRESH_URL"), a && (0, m.hj)("facebook_token_refresh") != b && ((0, m.ej)("facebook_token_refresh", b, 3600), a.src =
                b))
        },
        dispose: function() {
            kG && ((0, m.Ub)(kG), kG = null);
            jG && ((0, m.Ub)(jG), jG = null);
            (0, m.ig)(window.document, "keypress", m.Gq);
            (0, m.ig)(window.document, "click", m.Hq);
            m.Fq = -2;
            (0, m.ig)(window.document, "keypress", CC);
            null != window.adModuleLoaded && (0, m.Wc)("adModuleLoaded");
            (0, m.x)(BD);
            WC && (WC.removeEventListener("onApiChange", CD), WC = null);
            TC && (TC.dispose(), TC = null);
            LD = [];
            MD = [];
            JD = HD = !1;
            VC = lD = kD = jD = null;
            KD = ZC = AD = !1;
            if (iD) {
                for (var a = iD.length - 1; 0 <= a; a--)(0, m.Wc)(iD[a]);
                iD = []
            }
            FD();
            (0, m.Xx)();
            (0, m.Vq)(0);
            (0, m.S)(NC);
            NC.length = 0;
            if ((a = (0, m.ar)()) && a.getApiInterface) {
                a.removeEventListener("onCueRangeEnter", fC);
                a.removeEventListener("onReady", BC);
                for (var b = 5; 0 < b; b--) a.removeCueRange("NEAR_END" + b)
            }(0, m.Ka)(OC);
            OC.length = 0;
            m.$q && (0, m.J)(m.$q, "scrolled");
            m.Zq = null;
            m.Mq = m.Tq = m.Yq = !1;
            m.Nq = WB = m.Oq = vC = xC = OB = m.Wq = m.$q = null;
            UB = "";
            m.Rq = !1;
            m.Uq && ((0, m.x)(m.Uq), m.Uq = null);
            (a = (0, m.D)("guide-container")) && (0, m.M)(a, "branded");
            if (a = (0, m.D)("player")) a.style.background = "";
            iG && ((0, m.S)(iG), iG = []);
            fG = !1;
            (0, m.Ka)(lG);
            lG.length = 0;
            (0, m.S)(mG);
            mG.length = 0;
            (0, m.Ka)(nG);
            nG.length = 0;
            for (var c in hF)(0, m.x)(hF[c]);
            hF = {};
            (0, m.S)(iF);
            oE && (oE.destroy(), oE = null);
            nF && (nF.destroy(), nF = null);
            (0, m.Zy)();
            (0, m.S)(oF);
            oF.length = 0;
            (0, m.Ka)(oG)
        }
    }));
})(_yt_www);