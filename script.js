// ==UserScript==
// @name         Facebook Volume Save
// @namespace    http://tampermonkey.net/
// @version      1
// @description  this script saves the last set video volume for facebook.
// @author       You
// @match https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

! function(t) {
    function n(e) {
        if (r[e]) return r[e].exports;
        var o = r[e] = {
            exports: {},
            id: e,
            loaded: !1
        };
        return t[e].call(o.exports, o, o.exports, n), o.loaded = !0, o.exports
    }
    var r = {};
    return n.m = t, n.c = r, n.p = "", n(n.s = 9)
}([function(t, n) {
    var r = Array.isArray;
    t.exports = r
}, function(t, n, r) {
    function e(t) {
        return null != t && !("function" == typeof t && u(t)) && i(o(t))
    }
    var o = r(21),
        u = r(2),
        i = r(4);
    t.exports = e
}, function(t, n, r) {
    function e(t) {
        var n = o(t) ? f.call(t) : "";
        return n == u || n == i
    }
    var o = r(3),
        u = "[object Function]",
        i = "[object GeneratorFunction]",
        c = Object.prototype,
        f = c.toString;
    t.exports = e
}, function(t, n) {
    function r(t) {
        var n = typeof t;
        return !!t && ("object" == n || "function" == n)
    }
    t.exports = r
}, function(t, n) {
    function r(t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && e >= t
    }
    var e = 9007199254740991;
    t.exports = r
}, function(t, n) {
    function r(t) {
        return !!t && "object" == typeof t
    }
    t.exports = r
}, function(t, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = function(t) {
            var n = new Promise(function(n, r) {
                chrome.storage.sync.get(t, function(t) {
                    n(t);
                    var e = chrome.runtime.lastError;
                    return e ? r(e) : n(t)
                })
            });
            return n
        },
        e = function(t) {
            var n = new Promise(function(n, r) {
                chrome.storage.sync.set(t, function() {
                    var e = chrome.runtime.lastError;
                    return e ? r(e) : n(t)
                })
            });
            return n
        };
    n.get = r, n.set = e
}, function(t, n, r) {
    function e(t, n, r) {
        function e() {
            b && clearTimeout(b), x && clearTimeout(x), j = 0, d = x = g = b = h = void 0
        }

        function a(n, r) {
            r && clearTimeout(r), x = b = h = void 0, n && (j = u(), y = t.apply(g, d), b || x || (d = g = void 0))
        }

        function s() {
            var t = n - (u() - m);
            0 >= t || t > n ? a(h, x) : b = setTimeout(s, t)
        }

        function l() {
            return (b && h || x && w) && (y = t.apply(g, d)), e(), y
        }

        function p() {
            a(w, b)
        }

        function v() {
            if (d = arguments, m = u(), g = this, h = w && (b || !O), T === !1) var r = O && !b;
            else {
                j || x || O || (j = m);
                var e = T - (m - j),
                    o = (0 >= e || e > T) && (O || x);
                o ? (x && (x = clearTimeout(x)), j = m, y = t.apply(g, d)) : x || (x = setTimeout(p, e))
            }
            return o && b ? b = clearTimeout(b) : b || n === T || (b = setTimeout(s, n)), r && (o = !0, y = t.apply(g, d)), !o || b || x || (d = g = void 0), y
        }
        var d, x, y, m, g, b, h, j = 0,
            O = !1,
            T = !1,
            w = !0;
        if ("function" != typeof t) throw new TypeError(c);
        return n = i(n) || 0, o(r) && (O = !!r.leading, T = "maxWait" in r && f(i(r.maxWait) || 0, n), w = "trailing" in r ? !!r.trailing : w), v.cancel = e, v.flush = l, v
    }
    var o = r(3),
        u = r(30),
        i = r(31),
        c = "Expected a function",
        f = Math.max;
    t.exports = e
}, function(t, n, r) {
    function e(t, n) {
        return "function" == typeof n && c(t) ? o(t, n) : i(t, u(n))
    }
    var o = r(10),
        u = r(11),
        i = r(12),
        c = r(0);
    t.exports = e
}, function(t, n, r) {
    "use strict";

    function e(t) {
        if (t && t.__esModule) return t;
        var n = {};
        if (null != t)
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
        return n.default = t, n
    }

    function o(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    var u = r(7),
        i = o(u),
        c = r(8),
        f = o(c),
        a = r(6),
        s = e(a),
        l = .5,
        p = l,
        v = document.getElementsByTagName("video"),
        d = (0, i.default)(function() {
            s.set({
                fbvvs: p
            })
        }, 2e3),
        x = function(t) {
            p = t.target.volume, (0, f.default)(v, function(t) {
                return y(t)
            }), p !== l && d()
        },
        y = function(t) {
            t.volume = p, t.removeEventListener("volumechange", x), t.addEventListener("volumechange", x)
        },
        m = new MutationObserver(function(t) {
            (0, f.default)(t, function(t) {
                "childList" === t.type && t.addedNodes.length > 0 && (0, f.default)(t.addedNodes, function(t) {
                    if (t.tagName && "div" === t.tagName.toLowerCase()) {
                        var n = t.getElementsByTagName("video");
                        (0, f.default)(n, function(t) {
                            return y(t)
                        })
                    }
                })
            })
        });
    m.observe(document, {
        childList: !0,
        subtree: !0
    }), s.get("fbvvs").then(function(t) {
        var n = t.fbvvs,
            r = void 0 === n ? l : n;
        p = r, (0, f.default)(v, function(t) {
            return y(t)
        })
    })
}, function(t, n) {
    function r(t, n) {
        for (var r = -1, e = t.length; ++r < e && n(t[r], r, t) !== !1;);
        return t
    }
    t.exports = r
}, function(t, n, r) {
    function e(t) {
        return "function" == typeof t ? t : o
    }
    var o = r(25);
    t.exports = e
}, function(t, n, r) {
    var e = r(14),
        o = r(19),
        u = o(e);
    t.exports = u
}, function(t, n, r) {
    var e = r(20),
        o = e();
    t.exports = o
}, function(t, n, r) {
    function e(t, n) {
        return t && o(t, n, u)
    }
    var o = r(13),
        u = r(29);
    t.exports = e
}, function(t, n) {
    function r(t, n) {
        return o.call(t, n) || "object" == typeof t && n in t && null === u(t)
    }
    var e = Object.prototype,
        o = e.hasOwnProperty,
        u = Object.getPrototypeOf;
    t.exports = r
}, function(t, n) {
    function r(t) {
        return e(Object(t))
    }
    var e = Object.keys;
    t.exports = r
}, function(t, n) {
    function r(t) {
        return function(n) {
            return null == n ? void 0 : n[t]
        }
    }
    t.exports = r
}, function(t, n) {
    function r(t, n) {
        for (var r = -1, e = Array(t); ++r < t;) e[r] = n(r);
        return e
    }
    t.exports = r
}, function(t, n, r) {
    function e(t, n) {
        return function(r, e) {
            if (null == r) return r;
            if (!o(r)) return t(r, e);
            for (var u = r.length, i = n ? u : -1, c = Object(r);
                (n ? i-- : ++i < u) && e(c[i], i, c) !== !1;);
            return r
        }
    }
    var o = r(1);
    t.exports = e
}, function(t, n) {
    function r(t) {
        return function(n, r, e) {
            for (var o = -1, u = Object(n), i = e(n), c = i.length; c--;) {
                var f = i[t ? c : ++o];
                if (r(u[f], f, u) === !1) break
            }
            return n
        }
    }
    t.exports = r
}, function(t, n, r) {
    var e = r(17),
        o = e("length");
    t.exports = o
}, function(t, n, r) {
    function e(t) {
        var n = t ? t.length : void 0;
        return c(n) && (i(t) || f(t) || u(t)) ? o(n, String) : null
    }
    var o = r(18),
        u = r(26),
        i = r(0),
        c = r(4),
        f = r(28);
    t.exports = e
}, function(t, n) {
    function r(t, n) {
        return t = "number" == typeof t || o.test(t) ? +t : -1, n = null == n ? e : n, t > -1 && t % 1 == 0 && n > t
    }
    var e = 9007199254740991,
        o = /^(?:0|[1-9]\d*)$/;
    t.exports = r
}, function(t, n, r) {
    function e(t) {
        var n = t && t.constructor,
            r = o(n) && n.prototype || u;
        return t === r
    }
    var o = r(2),
        u = Object.prototype;
    t.exports = e
}, function(t, n) {
    function r(t) {
        return t
    }
    t.exports = r
}, function(t, n, r) {
    function e(t) {
        return o(t) && c.call(t, "callee") && (!a.call(t, "callee") || f.call(t) == u)
    }
    var o = r(27),
        u = "[object Arguments]",
        i = Object.prototype,
        c = i.hasOwnProperty,
        f = i.toString,
        a = i.propertyIsEnumerable;
    t.exports = e
}, function(t, n, r) {
    function e(t) {
        return u(t) && o(t)
    }
    var o = r(1),
        u = r(5);
    t.exports = e
}, function(t, n, r) {
    function e(t) {
        return "string" == typeof t || !o(t) && u(t) && f.call(t) == i
    }
    var o = r(0),
        u = r(5),
        i = "[object String]",
        c = Object.prototype,
        f = c.toString;
    t.exports = e
}, function(t, n, r) {
    function e(t) {
        var n = a(t);
        if (!n && !c(t)) return u(t);
        var r = i(t),
            e = !!r,
            s = r || [],
            l = s.length;
        for (var p in t) !o(t, p) || e && ("length" == p || f(p, l)) || n && "constructor" == p || s.push(p);
        return s
    }
    var o = r(15),
        u = r(16),
        i = r(22),
        c = r(1),
        f = r(23),
        a = r(24);
    t.exports = e
}, function(t, n) {
    var r = Date.now;
    t.exports = r
}, function(t, n, r) {
    function e(t) {
        if (u(t)) {
            var n = o(t.valueOf) ? t.valueOf() : t;
            t = u(n) ? n + "" : n
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(c, "");
        var r = a.test(t);
        return r || s.test(t) ? l(t.slice(2), r ? 2 : 8) : f.test(t) ? i : +t
    }
    var o = r(2),
        u = r(3),
        i = NaN,
        c = /^\s+|\s+$/g,
        f = /^[-+]0x[0-9a-f]+$/i,
        a = /^0b[01]+$/i,
        s = /^0o[0-7]+$/i,
        l = parseInt;
    t.exports = e
}]);
})();