(function(m) {
    var window = this;
    var e7 = function() {
        f7 = (0, m.R)(window.document.body, "keypress", Jba)
    };
    var Jba = function(a) {
        var b = a.target.nodeName;
        "INPUT" != b && "TEXTAREA" != b && (a = String.fromCharCode(a.keyCode), " " != a && (a = g7 + a, -1 < a.indexOf("1980") ? (g7 = "", h7()) : -1 < a.indexOf("2600") ? (g7 = "", h7({
            auto_fire: 1,
            level_length: 5E3,
            turret_rof: 100
        })) : (a.length > i7 && (a = a.slice(a.length - i7)), g7 = a)))
    };
    var Kba = function() {
        if (!(0, m.n)("yt.player.getPlayerByElement")) return !1;
        try {
            var a = (0, m.ar)();
            if (!a.isReady() || a.getPlaylist() || 1 > a.getPlayerState()) return !1
        } catch (b) {
            return !1
        }
        return !0
    };
    var h7 = function(a) {
        if (Kba()) {
            (0, m.S)(f7);
            var b = (0, m.n)("yt.www.watch.missilecommand.Game");
            j7 = !1;
            a = (0, m.E)(Lba, a);
            b ? a() : ((0, m.Lh)(k7), (0, m.Lh)("//fonts.googleapis.com/css?family=Press+Start+2P"), window.spf.scripts.ignore(l7, m7), m7 = a, (0, m.Ra)(l7, m7))
        }
    };
    var Lba = function(a) {
        j7 || (n7 = a = new((0, m.n)("yt.www.watch.missilecommand.Game"))(window.document.body, a), a.init(), a.start(), a.onEndCallback = Mba)
    };
    var Mba = function() {
        var a = (0, m.v)("PLAYER_REFERENCE");
        a && a.playVideo && a.playVideo();
        window.spf.scripts.ignore(l7, m7);
        e7()
    };
    var l7, k7, m7, n7 = null,
        j7 = !1,
        f7 = "",
        g7 = "",
        i7 = Math.max(4, 4);
    (0, m.Na)((0, m.Uc)({
        name: "www/watch_missile",
        deps: ["www/watch"],
        page: "watch",
        init: function() {
            l7 = (0, m.v)("WATCH_MISSILECOMMAND_JS");
            k7 = (0, m.v)("WATCH_MISSILECOMMAND_CSS");
            e7()
        },
        dispose: function() {
            n7 && (n7.dispose(), n7 = null);
            (0, m.S)(f7);
            window.spf.scripts.ignore(l7, m7);
            j7 = !0
        }
    }));
})(_yt_www);