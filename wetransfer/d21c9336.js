(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7110], {
        66216: (e, t, r) => {
            var a, i;
            ! function(e) {
                "use strict";
                if (!e.jQuery) {
                    var t = function(e, r) {
                        return new t.fn.init(e, r)
                    };
                    t.isWindow = function(e) {
                        return e && e === e.window
                    }, t.type = function(e) {
                        return e ? "object" == typeof e || "function" == typeof e ? a[n.call(e)] || "object" : typeof e : e + ""
                    }, t.isArray = Array.isArray || function(e) {
                        return "array" === t.type(e)
                    }, t.isPlainObject = function(e) {
                        var r;
                        if (!e || "object" !== t.type(e) || e.nodeType || t.isWindow(e)) return !1;
                        try {
                            if (e.constructor && !i.call(e, "constructor") && !i.call(e.constructor.prototype, "isPrototypeOf")) return !1
                        } catch (e) {
                            return !1
                        }
                        for (r in e);
                        return void 0 === r || i.call(e, r)
                    }, t.each = function(e, t, r) {
                        var a = 0,
                            i = e.length,
                            n = l(e);
                        if (r) {
                            if (n)
                                for (; a < i && !1 !== t.apply(e[a], r); a++);
                            else
                                for (a in e)
                                    if (e.hasOwnProperty(a) && !1 === t.apply(e[a], r)) break
                        } else if (n)
                            for (; a < i && !1 !== t.call(e[a], a, e[a]); a++);
                        else
                            for (a in e)
                                if (e.hasOwnProperty(a) && !1 === t.call(e[a], a, e[a])) break;
                        return e
                    }, t.data = function(e, a, i) {
                        if (void 0 === i) {
                            var n = e[t.expando],
                                o = n && r[n];
                            if (void 0 === a) return o;
                            if (o && a in o) return o[a]
                        } else if (void 0 !== a) {
                            var s = e[t.expando] || (e[t.expando] = ++t.uuid);
                            return r[s] = r[s] || {}, r[s][a] = i, i
                        }
                    }, t.removeData = function(e, a) {
                        var i = e[t.expando],
                            n = i && r[i];
                        n && (a ? t.each(a, function(e, t) {
                            delete n[t]
                        }) : delete r[i])
                    }, t.extend = function() {
                        var e, r, a, i, n, o, s = arguments[0] || {},
                            l = 1,
                            u = arguments.length,
                            c = !1;
                        for ("boolean" == typeof s && (c = s, s = arguments[l] || {}, l++), "object" != typeof s && "function" !== t.type(s) && (s = {}), l === u && (s = this, l--); l < u; l++)
                            if (n = arguments[l])
                                for (i in n) n.hasOwnProperty(i) && (e = s[i], s !== (a = n[i]) && (c && a && (t.isPlainObject(a) || (r = t.isArray(a))) ? (r ? (r = !1, o = e && t.isArray(e) ? e : []) : o = e && t.isPlainObject(e) ? e : {}, s[i] = t.extend(c, o, a)) : void 0 !== a && (s[i] = a)));
                        return s
                    }, t.queue = function(e, r, a) {
                        if (e) {
                            r = (r || "fx") + "queue";
                            var i, n = t.data(e, r);
                            return a ? (!n || t.isArray(a) ? n = t.data(e, r, (i = [], a && (l(Object(a)) ? ! function(e, t) {
                                for (var r = +t.length, a = 0, i = e.length; a < r;) e[i++] = t[a++];
                                if (r != r)
                                    for (; void 0 !== t[a];) e[i++] = t[a++];
                                e.length = i
                            }(i, "string" == typeof a ? [a] : a) : [].push.call(i, a)), i)) : n.push(a), n) : n || []
                        }
                    }, t.dequeue = function(e, r) {
                        t.each(e.nodeType ? [e] : e, function(e, a) {
                            r = r || "fx";
                            var i = t.queue(a, r),
                                n = i.shift();
                            "inprogress" === n && (n = i.shift()), n && ("fx" === r && i.unshift("inprogress"), n.call(a, function() {
                                t.dequeue(a, r)
                            }))
                        })
                    }, t.fn = t.prototype = {
                        init: function(e) {
                            if (e.nodeType) return this[0] = e, this;
                            throw Error("Not a DOM node.")
                        },
                        offset: function() {
                            var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                                top: 0,
                                left: 0
                            };
                            return {
                                top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                                left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                            }
                        },
                        position: function() {
                            var e = this[0],
                                r = function(e) {
                                    for (var t = e.offsetParent; t && "html" !== t.nodeName.toLowerCase() && t.style && "static" === t.style.position.toLowerCase();) t = t.offsetParent;
                                    return t || document
                                }(e),
                                a = this.offset(),
                                i = /^(?:body|html)$/i.test(r.nodeName) ? {
                                    top: 0,
                                    left: 0
                                } : t(r).offset();
                            return a.top -= parseFloat(e.style.marginTop) || 0, a.left -= parseFloat(e.style.marginLeft) || 0, r.style && (i.top += parseFloat(r.style.borderTopWidth) || 0, i.left += parseFloat(r.style.borderLeftWidth) || 0), {
                                top: a.top - i.top,
                                left: a.left - i.left
                            }
                        }
                    };
                    var r = {};
                    t.expando = "velocity" + new Date().getTime(), t.uuid = 0;
                    for (var a = {}, i = a.hasOwnProperty, n = a.toString, o = "Boolean Number String Function Array Date RegExp Object Error".split(" "), s = 0; s < o.length; s++) a["[object " + o[s] + "]"] = o[s].toLowerCase();
                    t.fn.init.prototype = t.fn, e.Velocity = {
                        Utilities: t
                    }
                }

                function l(e) {
                    var r = e.length,
                        a = t.type(e);
                    return !("function" === a || t.isWindow(e)) && (1 === e.nodeType && !!r || "array" === a || 0 === r || "number" == typeof r && r > 0 && r - 1 in e)
                }
            }(window),
            function(n) {
                "use strict";
                "object" == typeof e.exports ? e.exports = n() : void 0 === (i = "function" == typeof(a = n) ? a.call(t, r, t, e) : a) || (e.exports = i)
            }(function() {
                return function(e, t, r, a) {
                    var i = function() {
                            if (r.documentMode) return r.documentMode;
                            for (var e = 7; e > 4; e--) {
                                var t = r.createElement("div");
                                if (t.innerHTML = "\x3c!--[if IE " + e + "]><span></span><![endif]--\x3e", t.getElementsByTagName("span").length) return t = null, e
                            }
                            return a
                        }(),
                        n = (c = 0, t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(e) {
                            var t, r = new Date().getTime();
                            return t = Math.max(0, 16 - (r - c)), c = r + t, setTimeout(function() {
                                e(r + t)
                            }, t)
                        }),
                        o = function() {
                            var e = t.performance || {};
                            if ("function" != typeof e.now) {
                                var r = e.timing && e.timing.navigationStart ? e.timing.navigationStart : new Date().getTime();
                                e.now = function() {
                                    return new Date().getTime() - r
                                }
                            }
                            return e
                        }(),
                        s = function() {
                            var e = Array.prototype.slice;
                            try {
                                return e.call(r.documentElement), e
                            } catch (t) {
                                return function(t, r) {
                                    var a = this.length;
                                    if ("number" != typeof t && (t = 0), "number" != typeof r && (r = a), this.slice) return e.call(this, t, r);
                                    var i, n = [],
                                        o = t >= 0 ? t : Math.max(0, a + t),
                                        s = (r < 0 ? a + r : Math.min(r, a)) - o;
                                    if (s > 0)
                                        if (n = Array(s), this.charAt)
                                            for (i = 0; i < s; i++) n[i] = this.charAt(o + i);
                                        else
                                            for (i = 0; i < s; i++) n[i] = this[o + i];
                                    return n
                                }
                            }
                        }(),
                        l = function() {
                            return Array.prototype.includes ? function(e, t) {
                                return e.includes(t)
                            } : Array.prototype.indexOf ? function(e, t) {
                                return e.indexOf(t) >= 0
                            } : function(e, t) {
                                for (var r = 0; r < e.length; r++)
                                    if (e[r] === t) return !0;
                                return !1
                            }
                        };

                    function u(e) {
                        return f.isWrapped(e) ? e = s.call(e) : f.isNode(e) && (e = [e]), e
                    }
                    var c, p, f = {
                            isNumber: function(e) {
                                return "number" == typeof e
                            },
                            isString: function(e) {
                                return "string" == typeof e
                            },
                            isArray: Array.isArray || function(e) {
                                return "[object Array]" === Object.prototype.toString.call(e)
                            },
                            isFunction: function(e) {
                                return "[object Function]" === Object.prototype.toString.call(e)
                            },
                            isNode: function(e) {
                                return e && e.nodeType
                            },
                            isWrapped: function(e) {
                                return e && e !== t && f.isNumber(e.length) && !f.isString(e) && !f.isFunction(e) && !f.isNode(e) && (0 === e.length || f.isNode(e[0]))
                            },
                            isSVG: function(e) {
                                return t.SVGElement && e instanceof t.SVGElement
                            },
                            isEmptyObject: function(e) {
                                for (var t in e)
                                    if (e.hasOwnProperty(t)) return !1;
                                return !0
                            }
                        },
                        d = !1;
                    if (e.fn && e.fn.jquery ? (p = e, d = !0) : p = t.Velocity.Utilities, i <= 8 && !d) throw Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
                    if (i <= 7) {
                        jQuery.fn.velocity = jQuery.fn.animate;
                        return
                    }
                    var g = "swing",
                        m = {
                            State: {
                                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t.navigator.userAgent),
                                isAndroid: /Android/i.test(t.navigator.userAgent),
                                isGingerbread: /Android 2\.3\.[3-7]/i.test(t.navigator.userAgent),
                                isChrome: t.chrome,
                                isFirefox: /Firefox/i.test(t.navigator.userAgent),
                                prefixElement: r.createElement("div"),
                                prefixMatches: {},
                                scrollAnchor: null,
                                scrollPropertyLeft: null,
                                scrollPropertyTop: null,
                                isTicking: !1,
                                calls: [],
                                delayedElements: {
                                    count: 0
                                }
                            },
                            CSS: {},
                            Utilities: p,
                            Redirects: {},
                            Easings: {},
                            Promise: t.Promise,
                            defaults: {
                                queue: "",
                                duration: 400,
                                easing: g,
                                begin: a,
                                complete: a,
                                progress: a,
                                display: a,
                                visibility: a,
                                loop: !1,
                                delay: !1,
                                mobileHA: !0,
                                _cacheValues: !0,
                                promiseRejectEmpty: !0
                            },
                            init: function(e) {
                                p.data(e, "velocity", {
                                    isSVG: f.isSVG(e),
                                    isAnimating: !1,
                                    computedStyle: null,
                                    tweensContainer: null,
                                    rootPropertyValueCache: {},
                                    transformCache: {}
                                })
                            },
                            hook: null,
                            mock: !1,
                            version: {
                                major: 1,
                                minor: 5,
                                patch: 2
                            },
                            debug: !1,
                            timestamp: !0,
                            pauseAll: function(e) {
                                var t = new Date().getTime();
                                p.each(m.State.calls, function(t, r) {
                                    if (r) {
                                        if (a !== e && (r[2].queue !== e || !1 === r[2].queue)) return !0;
                                        r[5] = {
                                            resume: !1
                                        }
                                    }
                                }), p.each(m.State.delayedElements, function(e, r) {
                                    r && y(r, t)
                                })
                            },
                            resumeAll: function(e) {
                                var t = new Date().getTime();
                                p.each(m.State.calls, function(t, r) {
                                    if (r) {
                                        if (a !== e && (r[2].queue !== e || !1 === r[2].queue)) return !0;
                                        r[5] && (r[5].resume = !0)
                                    }
                                }), p.each(m.State.delayedElements, function(e, r) {
                                    r && v(r, t)
                                })
                            }
                        };

                    function h(e) {
                        var t = p.data(e, "velocity");
                        return null === t ? a : t
                    }

                    function y(e, t) {
                        var r = h(e);
                        r && r.delayTimer && !r.delayPaused && (r.delayRemaining = r.delay - t + r.delayBegin, r.delayPaused = !0, clearTimeout(r.delayTimer.setTimeout))
                    }

                    function v(e, t) {
                        var r = h(e);
                        r && r.delayTimer && r.delayPaused && (r.delayPaused = !1, r.delayTimer.setTimeout = setTimeout(r.delayTimer.next, r.delayRemaining))
                    }

                    function b(e) {
                        return function(t) {
                            return 1 / e * Math.round(t * e)
                        }
                    }

                    function x(e, r, a, i) {
                        var n = "Float32Array" in t;
                        if (4 != arguments.length) return !1;
                        for (var o = 0; o < 4; ++o)
                            if ("number" != typeof arguments[o] || isNaN(arguments[o]) || !isFinite(arguments[o])) return !1;
                        e = Math.min(e, 1), a = Math.min(a, 1), e = Math.max(e, 0), a = Math.max(a, 0);
                        var s = n ? new Float32Array(11) : Array(11);

                        function l(e, t, r) {
                            return (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e
                        }

                        function u(e, t, r) {
                            return 3 * (1 - 3 * r + 3 * t) * e * e + 2 * (3 * r - 6 * t) * e + 3 * t
                        }
                        var c = !1,
                            p = function(t) {
                                return (c || (c = !0, (e !== r || a !== i) && function() {
                                    for (var t = 0; t < 11; ++t) s[t] = l(.1 * t, e, a)
                                }()), e === r && a === i) ? t : 0 === t ? 0 : 1 === t ? 1 : l(function(t) {
                                    for (var r = 0, i = 1; 10 !== i && s[i] <= t; ++i) r += .1;
                                    var n = r + (t - s[--i]) / (s[i + 1] - s[i]) * .1,
                                        o = u(n, e, a);
                                    if (o >= .001) {
                                        for (var c = n, p = 0; p < 4; ++p) {
                                            var f = u(c, e, a);
                                            if (0 === f) break;
                                            var d = l(c, e, a) - t;
                                            c -= d / f
                                        }
                                        return c
                                    }
                                    return 0 === o ? n : function(t, r, i) {
                                        var n, o, s = 0;
                                        do(n = l(o = r + (i - r) / 2, e, a) - t) > 0 ? i = o : r = o; while (Math.abs(n) > 1e-7 && ++s < 10);
                                        return o
                                    }(t, r, r + .1)
                                }(t), r, i)
                            };
                        p.getControlPoints = function() {
                            return [{
                                x: e,
                                y: r
                            }, {
                                x: a,
                                y: i
                            }]
                        };
                        var f = "generateBezier(" + [e, r, a, i] + ")";
                        return p.toString = function() {
                            return f
                        }, p
                    }
                    t.pageYOffset !== a ? (m.State.scrollAnchor = t, m.State.scrollPropertyLeft = "pageXOffset", m.State.scrollPropertyTop = "pageYOffset") : (m.State.scrollAnchor = r.documentElement || r.body.parentNode || r.body, m.State.scrollPropertyLeft = "scrollLeft", m.State.scrollPropertyTop = "scrollTop");
                    var w = function() {
                        function e(e) {
                            return -e.tension * e.x - e.friction * e.v
                        }

                        function t(t, r, a) {
                            var i = {
                                x: t.x + a.dx * r,
                                v: t.v + a.dv * r,
                                tension: t.tension,
                                friction: t.friction
                            };
                            return {
                                dx: i.v,
                                dv: e(i)
                            }
                        }
                        return function r(a, i, n) {
                            var o, s, l, u, c, p, f, d, g, m, h, y = {
                                    x: -1,
                                    v: 0,
                                    tension: null,
                                    friction: null
                                },
                                v = [0],
                                b = 0;
                            for (a = parseFloat(a) || 500, i = parseFloat(i) || 20, n = n || null, y.tension = a, y.friction = i, m = (g = null !== n) ? (b = r(a, i)) / n * .016 : .016; o = h || y, s = m, l = {
                                    dx: o.v,
                                    dv: e(o)
                                }, u = t(o, .5 * s, l), c = t(o, .5 * s, u), p = t(o, s, c), f = 1 / 6 * (l.dx + 2 * (u.dx + c.dx) + p.dx), d = 1 / 6 * (l.dv + 2 * (u.dv + c.dv) + p.dv), o.x = o.x + f * s, o.v = o.v + d * s, h = o, v.push(1 + h.x), b += 16, Math.abs(h.x) > 1e-4 && Math.abs(h.v) > 1e-4;);
                            return g ? function(e) {
                                return v[e * (v.length - 1) | 0]
                            } : b
                        }
                    }();

                    function S(e, t) {
                        var r = e;
                        return f.isString(e) ? m.Easings[e] || (r = !1) : r = f.isArray(e) && 1 === e.length ? b.apply(null, e) : f.isArray(e) && 2 === e.length ? w.apply(null, e.concat([t])) : !!f.isArray(e) && 4 === e.length && x.apply(null, e), !1 === r && (r = m.Easings[m.defaults.easing] ? m.defaults.easing : g), r
                    }
                    m.Easings = {
                        linear: function(e) {
                            return e
                        },
                        swing: function(e) {
                            return .5 - Math.cos(e * Math.PI) / 2
                        },
                        spring: function(e) {
                            return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(-(6 * e))
                        }
                    }, p.each([
                        ["ease", [.25, .1, .25, 1]],
                        ["ease-in", [.42, 0, 1, 1]],
                        ["ease-out", [0, 0, .58, 1]],
                        ["ease-in-out", [.42, 0, .58, 1]],
                        ["easeInSine", [.47, 0, .745, .715]],
                        ["easeOutSine", [.39, .575, .565, 1]],
                        ["easeInOutSine", [.445, .05, .55, .95]],
                        ["easeInQuad", [.55, .085, .68, .53]],
                        ["easeOutQuad", [.25, .46, .45, .94]],
                        ["easeInOutQuad", [.455, .03, .515, .955]],
                        ["easeInCubic", [.55, .055, .675, .19]],
                        ["easeOutCubic", [.215, .61, .355, 1]],
                        ["easeInOutCubic", [.645, .045, .355, 1]],
                        ["easeInQuart", [.895, .03, .685, .22]],
                        ["easeOutQuart", [.165, .84, .44, 1]],
                        ["easeInOutQuart", [.77, 0, .175, 1]],
                        ["easeInQuint", [.755, .05, .855, .06]],
                        ["easeOutQuint", [.23, 1, .32, 1]],
                        ["easeInOutQuint", [.86, 0, .07, 1]],
                        ["easeInExpo", [.95, .05, .795, .035]],
                        ["easeOutExpo", [.19, 1, .22, 1]],
                        ["easeInOutExpo", [1, 0, 0, 1]],
                        ["easeInCirc", [.6, .04, .98, .335]],
                        ["easeOutCirc", [.075, .82, .165, 1]],
                        ["easeInOutCirc", [.785, .135, .15, .86]]
                    ], function(e, t) {
                        m.Easings[t[0]] = x.apply(null, t[1])
                    });
                    var P = m.CSS = {
                        RegEx: {
                            isHex: /^#([A-f\d]{3}){1,2}$/i,
                            valueUnwrap: /^[A-z]+\((.*)\)$/i,
                            wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                            valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/ig
                        },
                        Lists: {
                            colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                            transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                            transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
                            units: ["%", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "cm", "mm", "Q", "in", "pc", "pt", "px", "deg", "grad", "rad", "turn", "s", "ms"],
                            colorNames: {
                                aliceblue: "240,248,255",
                                antiquewhite: "250,235,215",
                                aquamarine: "127,255,212",
                                aqua: "0,255,255",
                                azure: "240,255,255",
                                beige: "245,245,220",
                                bisque: "255,228,196",
                                black: "0,0,0",
                                blanchedalmond: "255,235,205",
                                blueviolet: "138,43,226",
                                blue: "0,0,255",
                                brown: "165,42,42",
                                burlywood: "222,184,135",
                                cadetblue: "95,158,160",
                                chartreuse: "127,255,0",
                                chocolate: "210,105,30",
                                coral: "255,127,80",
                                cornflowerblue: "100,149,237",
                                cornsilk: "255,248,220",
                                crimson: "220,20,60",
                                cyan: "0,255,255",
                                darkblue: "0,0,139",
                                darkcyan: "0,139,139",
                                darkgoldenrod: "184,134,11",
                                darkgray: "169,169,169",
                                darkgrey: "169,169,169",
                                darkgreen: "0,100,0",
                                darkkhaki: "189,183,107",
                                darkmagenta: "139,0,139",
                                darkolivegreen: "85,107,47",
                                darkorange: "255,140,0",
                                darkorchid: "153,50,204",
                                darkred: "139,0,0",
                                darksalmon: "233,150,122",
                                darkseagreen: "143,188,143",
                                darkslateblue: "72,61,139",
                                darkslategray: "47,79,79",
                                darkturquoise: "0,206,209",
                                darkviolet: "148,0,211",
                                deeppink: "255,20,147",
                                deepskyblue: "0,191,255",
                                dimgray: "105,105,105",
                                dimgrey: "105,105,105",
                                dodgerblue: "30,144,255",
                                firebrick: "178,34,34",
                                floralwhite: "255,250,240",
                                forestgreen: "34,139,34",
                                fuchsia: "255,0,255",
                                gainsboro: "220,220,220",
                                ghostwhite: "248,248,255",
                                gold: "255,215,0",
                                goldenrod: "218,165,32",
                                gray: "128,128,128",
                                grey: "128,128,128",
                                greenyellow: "173,255,47",
                                green: "0,128,0",
                                honeydew: "240,255,240",
                                hotpink: "255,105,180",
                                indianred: "205,92,92",
                                indigo: "75,0,130",
                                ivory: "255,255,240",
                                khaki: "240,230,140",
                                lavenderblush: "255,240,245",
                                lavender: "230,230,250",
                                lawngreen: "124,252,0",
                                lemonchiffon: "255,250,205",
                                lightblue: "173,216,230",
                                lightcoral: "240,128,128",
                                lightcyan: "224,255,255",
                                lightgoldenrodyellow: "250,250,210",
                                lightgray: "211,211,211",
                                lightgrey: "211,211,211",
                                lightgreen: "144,238,144",
                                lightpink: "255,182,193",
                                lightsalmon: "255,160,122",
                                lightseagreen: "32,178,170",
                                lightskyblue: "135,206,250",
                                lightslategray: "119,136,153",
                                lightsteelblue: "176,196,222",
                                lightyellow: "255,255,224",
                                limegreen: "50,205,50",
                                lime: "0,255,0",
                                linen: "250,240,230",
                                magenta: "255,0,255",
                                maroon: "128,0,0",
                                mediumaquamarine: "102,205,170",
                                mediumblue: "0,0,205",
                                mediumorchid: "186,85,211",
                                mediumpurple: "147,112,219",
                                mediumseagreen: "60,179,113",
                                mediumslateblue: "123,104,238",
                                mediumspringgreen: "0,250,154",
                                mediumturquoise: "72,209,204",
                                mediumvioletred: "199,21,133",
                                midnightblue: "25,25,112",
                                mintcream: "245,255,250",
                                mistyrose: "255,228,225",
                                moccasin: "255,228,181",
                                navajowhite: "255,222,173",
                                navy: "0,0,128",
                                oldlace: "253,245,230",
                                olivedrab: "107,142,35",
                                olive: "128,128,0",
                                orangered: "255,69,0",
                                orange: "255,165,0",
                                orchid: "218,112,214",
                                palegoldenrod: "238,232,170",
                                palegreen: "152,251,152",
                                paleturquoise: "175,238,238",
                                palevioletred: "219,112,147",
                                papayawhip: "255,239,213",
                                peachpuff: "255,218,185",
                                peru: "205,133,63",
                                pink: "255,192,203",
                                plum: "221,160,221",
                                powderblue: "176,224,230",
                                purple: "128,0,128",
                                red: "255,0,0",
                                rosybrown: "188,143,143",
                                royalblue: "65,105,225",
                                saddlebrown: "139,69,19",
                                salmon: "250,128,114",
                                sandybrown: "244,164,96",
                                seagreen: "46,139,87",
                                seashell: "255,245,238",
                                sienna: "160,82,45",
                                silver: "192,192,192",
                                skyblue: "135,206,235",
                                slateblue: "106,90,205",
                                slategray: "112,128,144",
                                snow: "255,250,250",
                                springgreen: "0,255,127",
                                steelblue: "70,130,180",
                                tan: "210,180,140",
                                teal: "0,128,128",
                                thistle: "216,191,216",
                                tomato: "255,99,71",
                                turquoise: "64,224,208",
                                violet: "238,130,238",
                                wheat: "245,222,179",
                                whitesmoke: "245,245,245",
                                white: "255,255,255",
                                yellowgreen: "154,205,50",
                                yellow: "255,255,0"
                            }
                        },
                        Hooks: {
                            templates: {
                                textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                                boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                                clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                                backgroundPosition: ["X Y", "0% 0%"],
                                transformOrigin: ["X Y Z", "50% 50% 0px"],
                                perspectiveOrigin: ["X Y", "50% 50%"]
                            },
                            registered: {},
                            register: function() {
                                for (var e, t, r, a = 0; a < P.Lists.colors.length; a++) {
                                    var n = "color" === P.Lists.colors[a] ? "0 0 0 1" : "255 255 255 1";
                                    P.Hooks.templates[P.Lists.colors[a]] = ["Red Green Blue Alpha", n]
                                }
                                if (i) {
                                    for (e in P.Hooks.templates)
                                        if (P.Hooks.templates.hasOwnProperty(e)) {
                                            r = (t = P.Hooks.templates[e])[0].split(" ");
                                            var o = t[1].match(P.RegEx.valueSplit);
                                            "Color" === r[0] && (r.push(r.shift()), o.push(o.shift()), P.Hooks.templates[e] = [r.join(" "), o.join(" ")])
                                        }
                                }
                                for (e in P.Hooks.templates)
                                    if (P.Hooks.templates.hasOwnProperty(e)) {
                                        for (var s in r = (t = P.Hooks.templates[e])[0].split(" "))
                                            if (r.hasOwnProperty(s)) {
                                                var l = e + r[s];
                                                P.Hooks.registered[l] = [e, s]
                                            }
                                    }
                            },
                            getRoot: function(e) {
                                var t = P.Hooks.registered[e];
                                return t ? t[0] : e
                            },
                            getUnit: function(e, t) {
                                var r = (e.substr(t || 0, 5).match(/^[a-z%]+/) || [])[0] || "";
                                return r && l(P.Lists.units, r) ? r : ""
                            },
                            fixColors: function(e) {
                                return e.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function(e, t, r) {
                                    return P.Lists.colorNames.hasOwnProperty(r) ? (t || "rgba(") + P.Lists.colorNames[r] + (t ? "" : ",1)") : t + r
                                })
                            },
                            cleanRootPropertyValue: function(e, t) {
                                return P.RegEx.valueUnwrap.test(t) && (t = t.match(P.RegEx.valueUnwrap)[1]), P.Values.isCSSNullValue(t) && (t = P.Hooks.templates[e][1]), t
                            },
                            extractValue: function(e, t) {
                                var r = P.Hooks.registered[e];
                                if (!r) return t;
                                var a = r[0],
                                    i = r[1];
                                return (t = P.Hooks.cleanRootPropertyValue(a, t)).toString().match(P.RegEx.valueSplit)[i]
                            },
                            injectValue: function(e, t, r) {
                                var a = P.Hooks.registered[e];
                                if (!a) return r;
                                var i, n = a[0],
                                    o = a[1];
                                return (i = (r = P.Hooks.cleanRootPropertyValue(n, r)).toString().match(P.RegEx.valueSplit))[o] = t, i.join(" ")
                            }
                        },
                        Normalizations: {
                            registered: {
                                clip: function(e, t, r) {
                                    switch (e) {
                                        case "name":
                                            return "clip";
                                        case "extract":
                                            var a;
                                            return P.RegEx.wrappedValueAlreadyExtracted.test(r) ? r : (a = r.toString().match(P.RegEx.valueUnwrap)) ? a[1].replace(/,(\s+)?/g, " ") : r;
                                        case "inject":
                                            return "rect(" + r + ")"
                                    }
                                },
                                blur: function(e, t, r) {
                                    switch (e) {
                                        case "name":
                                            return m.State.isFirefox ? "filter" : "-webkit-filter";
                                        case "extract":
                                            var a = parseFloat(r);
                                            if (!(a || 0 === a)) {
                                                var i = r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                                a = i ? i[1] : 0
                                            }
                                            return a;
                                        case "inject":
                                            if (!parseFloat(r)) return "none";
                                            return "blur(" + r + ")"
                                    }
                                },
                                opacity: function(e, t, r) {
                                    if (i <= 8) switch (e) {
                                        case "name":
                                            return "filter";
                                        case "extract":
                                            var a = r.toString().match(/alpha\(opacity=(.*)\)/i);
                                            return a ? a[1] / 100 : 1;
                                        case "inject":
                                            if (t.style.zoom = 1, parseFloat(r) >= 1) return "";
                                            return "alpha(opacity=" + parseInt(100 * parseFloat(r), 10) + ")"
                                    } else switch (e) {
                                        case "name":
                                            return "opacity";
                                        case "extract":
                                        case "inject":
                                            return r
                                    }
                                }
                            },
                            register: function() {
                                i && !(i > 9) || m.State.isGingerbread || (P.Lists.transformsBase = P.Lists.transformsBase.concat(P.Lists.transforms3D));
                                for (var e = 0; e < P.Lists.transformsBase.length; e++) ! function() {
                                    var t = P.Lists.transformsBase[e];
                                    P.Normalizations.registered[t] = function(e, r, i) {
                                        switch (e) {
                                            case "name":
                                                return "transform";
                                            case "extract":
                                                if (h(r) === a || h(r).transformCache[t] === a) return +!!/^scale/i.test(t);
                                                return h(r).transformCache[t].replace(/[()]/g, "");
                                            case "inject":
                                                var n = !1;
                                                switch (t.substr(0, t.length - 1)) {
                                                    case "translate":
                                                        n = !/(%|px|em|rem|vw|vh|\d)$/i.test(i);
                                                        break;
                                                    case "scal":
                                                    case "scale":
                                                        m.State.isAndroid && h(r).transformCache[t] === a && i < 1 && (i = 1), n = !/(\d)$/i.test(i);
                                                        break;
                                                    case "skew":
                                                    case "rotate":
                                                        n = !/(deg|\d)$/i.test(i)
                                                }
                                                return n || (h(r).transformCache[t] = "(" + i + ")"), h(r).transformCache[t]
                                        }
                                    }
                                }();
                                for (var t = 0; t < P.Lists.colors.length; t++) ! function() {
                                    var e = P.Lists.colors[t];
                                    P.Normalizations.registered[e] = function(t, r, n) {
                                        switch (t) {
                                            case "name":
                                                return e;
                                            case "extract":
                                                var o;
                                                if (P.RegEx.wrappedValueAlreadyExtracted.test(n)) o = n;
                                                else {
                                                    var s, l = {
                                                        black: "rgb(0, 0, 0)",
                                                        blue: "rgb(0, 0, 255)",
                                                        gray: "rgb(128, 128, 128)",
                                                        green: "rgb(0, 128, 0)",
                                                        red: "rgb(255, 0, 0)",
                                                        white: "rgb(255, 255, 255)"
                                                    };
                                                    /^[A-z]+$/i.test(n) ? s = l[n] !== a ? l[n] : l.black : P.RegEx.isHex.test(n) ? s = "rgb(" + P.Values.hexToRgb(n).join(" ") + ")" : /^rgba?\(/i.test(n) || (s = l.black), o = (s || n).toString().match(P.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                                }
                                                return (!i || i > 8) && 3 === o.split(" ").length && (o += " 1"), o;
                                            case "inject":
                                                if (/^rgb/.test(n)) return n;
                                                return i <= 8 ? 4 === n.split(" ").length && (n = n.split(/\s+/).slice(0, 3).join(" ")) : 3 === n.split(" ").length && (n += " 1"), (i <= 8 ? "rgb" : "rgba") + "(" + n.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                        }
                                    }
                                }();

                                function r(e, t, r) {
                                    if ("border-box" === P.getPropertyValue(t, "boxSizing").toString().toLowerCase() === (r || !1)) {
                                        var a, i, n = 0,
                                            o = "width" === e ? ["Left", "Right"] : ["Top", "Bottom"],
                                            s = ["padding" + o[0], "padding" + o[1], "border" + o[0] + "Width", "border" + o[1] + "Width"];
                                        for (a = 0; a < s.length; a++) isNaN(i = parseFloat(P.getPropertyValue(t, s[a]))) || (n += i);
                                        return r ? -n : n
                                    }
                                    return 0
                                }

                                function n(e, t) {
                                    return function(a, i, n) {
                                        switch (a) {
                                            case "name":
                                                return e;
                                            case "extract":
                                                return parseFloat(n) + r(e, i, t);
                                            case "inject":
                                                return parseFloat(n) - r(e, i, t) + "px"
                                        }
                                    }
                                }
                                P.Normalizations.registered.innerWidth = n("width", !0), P.Normalizations.registered.innerHeight = n("height", !0), P.Normalizations.registered.outerWidth = n("width"), P.Normalizations.registered.outerHeight = n("height")
                            }
                        },
                        Names: {
                            camelCase: function(e) {
                                return e.replace(/-(\w)/g, function(e, t) {
                                    return t.toUpperCase()
                                })
                            },
                            SVGAttribute: function(e) {
                                var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                                return (i || m.State.isAndroid && !m.State.isChrome) && (t += "|transform"), RegExp("^(" + t + ")$", "i").test(e)
                            },
                            prefixCheck: function(e) {
                                if (m.State.prefixMatches[e]) return [m.State.prefixMatches[e], !0];
                                for (var t, r = ["", "Webkit", "Moz", "ms", "O"], a = 0, i = r.length; a < i; a++)
                                    if (t = 0 === a ? e : r[a] + e.replace(/^\w/, function(e) {
                                            return e.toUpperCase()
                                        }), f.isString(m.State.prefixElement.style[t])) return m.State.prefixMatches[e] = t, [t, !0];
                                return [e, !1]
                            }
                        },
                        Values: {
                            hexToRgb: function(e) {
                                var t;
                                return e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, r, a) {
                                    return t + t + r + r + a + a
                                }), (t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e)) ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                            },
                            isCSSNullValue: function(e) {
                                return !e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                            },
                            getUnitType: function(e) {
                                return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                            },
                            getDisplayType: function(e) {
                                var t = e && e.tagName.toString().toLowerCase();
                                if (/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)) return "inline";
                                if (/^(li)$/i.test(t)) return "list-item";
                                if (/^(tr)$/i.test(t)) return "table-row";
                                if (/^(table)$/i.test(t)) return "table";
                                if (/^(tbody)$/i.test(t)) return "table-row-group";
                                else return "block"
                            },
                            addClass: function(e, t) {
                                if (e)
                                    if (e.classList) e.classList.add(t);
                                    else if (f.isString(e.className)) e.className += (e.className.length ? " " : "") + t;
                                else {
                                    var r = e.getAttribute(i <= 7 ? "className" : "class") || "";
                                    e.setAttribute("class", r + (r ? " " : "") + t)
                                }
                            },
                            removeClass: function(e, t) {
                                if (e)
                                    if (e.classList) e.classList.remove(t);
                                    else if (f.isString(e.className)) e.className = e.className.toString().replace(RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ");
                                else {
                                    var r = e.getAttribute(i <= 7 ? "className" : "class") || "";
                                    e.setAttribute("class", r.replace(RegExp("(^|s)" + t.split(" ").join("|") + "(s|$)", "gi"), " "))
                                }
                            }
                        },
                        getPropertyValue: function(e, r, n, o) {
                            function s(e, r) {
                                var n = 0;
                                if (i <= 8) n = p.css(e, r);
                                else {
                                    var l, u = !1;
                                    /^(width|height)$/.test(r) && 0 === P.getPropertyValue(e, "display") && (u = !0, P.setPropertyValue(e, "display", P.Values.getDisplayType(e)));
                                    var c = function() {
                                        u && P.setPropertyValue(e, "display", "none")
                                    };
                                    if (!o) {
                                        if ("height" === r && "border-box" !== P.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                            var f = e.offsetHeight - (parseFloat(P.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(P.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(P.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(P.getPropertyValue(e, "paddingBottom")) || 0);
                                            return c(), f
                                        } else if ("width" === r && "border-box" !== P.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                            var d = e.offsetWidth - (parseFloat(P.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(P.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(P.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(P.getPropertyValue(e, "paddingRight")) || 0);
                                            return c(), d
                                        }
                                    }
                                    l = h(e) === a ? t.getComputedStyle(e, null) : h(e).computedStyle ? h(e).computedStyle : h(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === r && (r = "borderTopColor"), ("" === (n = 9 === i && "filter" === r ? l.getPropertyValue(r) : l[r]) || null === n) && (n = e.style[r]), c()
                                }
                                if ("auto" === n && /^(top|right|bottom|left)$/i.test(r)) {
                                    var g = s(e, "position");
                                    ("fixed" === g || "absolute" === g && /top|left/i.test(r)) && (n = p(e).position()[r] + "px")
                                }
                                return n
                            }
                            if (P.Hooks.registered[r]) {
                                var l, u, c, f = P.Hooks.getRoot(r);
                                a === n && (n = P.getPropertyValue(e, P.Names.prefixCheck(f)[0])), P.Normalizations.registered[f] && (n = P.Normalizations.registered[f]("extract", e, n)), l = P.Hooks.extractValue(r, n)
                            } else P.Normalizations.registered[r] && ("transform" !== (u = P.Normalizations.registered[r]("name", e)) && (c = s(e, P.Names.prefixCheck(u)[0]), P.Values.isCSSNullValue(c) && P.Hooks.templates[r] && (c = P.Hooks.templates[r][1])), l = P.Normalizations.registered[r]("extract", e, c));
                            if (!/^[\d-]/.test(l)) {
                                var d = h(e);
                                if (d && d.isSVG && P.Names.SVGAttribute(r))
                                    if (/^(height|width)$/i.test(r)) try {
                                        l = e.getBBox()[r]
                                    } catch (e) {
                                        l = 0
                                    } else l = e.getAttribute(r);
                                    else l = s(e, P.Names.prefixCheck(r)[0])
                            }
                            return P.Values.isCSSNullValue(l) && (l = 0), m.debug >= 2 && console.log("Get " + r + ": " + l), l
                        },
                        setPropertyValue: function(e, r, a, n, o) {
                            var s = r;
                            if ("scroll" === r) o.container ? o.container["scroll" + o.direction] = a : "Left" === o.direction ? t.scrollTo(a, o.alternateValue) : t.scrollTo(o.alternateValue, a);
                            else if (P.Normalizations.registered[r] && "transform" === P.Normalizations.registered[r]("name", e)) P.Normalizations.registered[r]("inject", e, a), s = "transform", a = h(e).transformCache[r];
                            else {
                                if (P.Hooks.registered[r]) {
                                    var l = r,
                                        u = P.Hooks.getRoot(r);
                                    n = n || P.getPropertyValue(e, u), a = P.Hooks.injectValue(l, a, n), r = u
                                }
                                if (P.Normalizations.registered[r] && (a = P.Normalizations.registered[r]("inject", e, a), r = P.Normalizations.registered[r]("name", e)), s = P.Names.prefixCheck(r)[0], i <= 8) try {
                                    e.style[s] = a
                                } catch (e) {
                                    m.debug && console.log("Browser does not support [" + a + "] for [" + s + "]")
                                } else {
                                    var c = h(e);
                                    c && c.isSVG && P.Names.SVGAttribute(r) ? e.setAttribute(r, a) : e.style[s] = a
                                }
                                m.debug >= 2 && console.log("Set " + r + " (" + s + "): " + a)
                            }
                            return [s, a]
                        },
                        flushTransformCache: function(e) {
                            var t, r, a = "",
                                n = h(e);
                            if ((i || m.State.isAndroid && !m.State.isChrome) && n && n.isSVG) {
                                var o = function(t) {
                                        return parseFloat(P.getPropertyValue(e, t))
                                    },
                                    s = {
                                        translate: [o("translateX"), o("translateY")],
                                        skewX: [o("skewX")],
                                        skewY: [o("skewY")],
                                        scale: 1 !== o("scale") ? [o("scale"), o("scale")] : [o("scaleX"), o("scaleY")],
                                        rotate: [o("rotateZ"), 0, 0]
                                    };
                                p.each(h(e).transformCache, function(e) {
                                    /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), s[e] && (a += e + "(" + s[e].join(" ") + ") ", delete s[e])
                                })
                            } else p.each(h(e).transformCache, function(n) {
                                if (t = h(e).transformCache[n], "transformPerspective" === n) return r = t, !0;
                                9 === i && "rotateZ" === n && (n = "rotate"), a += n + t + " "
                            }), r && (a = "perspective" + r + " " + a);
                            P.setPropertyValue(e, "transform", a)
                        }
                    };
                    P.Hooks.register(), P.Normalizations.register(), m.hook = function(e, t, r) {
                        var i;
                        return e = u(e), p.each(e, function(e, n) {
                            if (h(n) === a && m.init(n), a === r) a === i && (i = P.getPropertyValue(n, t));
                            else {
                                var o = P.setPropertyValue(n, t, r);
                                "transform" === o[0] && m.CSS.flushTransformCache(n), i = o
                            }
                        }), i
                    };
                    var k = function() {
                        function e() {
                            return d ? w.promise || null : g
                        }
                        var i, n, o, s, c, d, g, b, x = arguments[0] && (arguments[0].p || p.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || f.isString(arguments[0].properties));
                        f.isWrapped(this) ? (d = !1, b = 0, i = this, g = this) : (d = !0, b = 1, i = x ? arguments[0].elements || arguments[0].e : arguments[0]);
                        var w = {
                            promise: null,
                            resolver: null,
                            rejecter: null
                        };
                        if (d && m.Promise && (w.promise = new m.Promise(function(e, t) {
                                w.resolver = e, w.rejecter = t
                            })), x ? (n = arguments[0].properties || arguments[0].p, o = arguments[0].options || arguments[0].o) : (n = arguments[b], o = arguments[b + 1]), !(i = u(i))) {
                            w.promise && (n && o && !1 === o.promiseRejectEmpty ? w.resolver() : w.rejecter());
                            return
                        }
                        var V = i.length,
                            T = 0;
                        if (!/^(stop|finish|finishAll|pause|resume)$/i.test(n) && !p.isPlainObject(o)) {
                            var F = b + 1;
                            o = {};
                            for (var E = F; E < arguments.length; E++) !f.isArray(arguments[E]) && (/^(fast|normal|slow)$/i.test(arguments[E]) || /^\d/.test(arguments[E])) ? o.duration = arguments[E] : f.isString(arguments[E]) || f.isArray(arguments[E]) ? o.easing = arguments[E] : f.isFunction(arguments[E]) && (o.complete = arguments[E])
                        }
                        switch (n) {
                            case "scroll":
                                s = "scroll";
                                break;
                            case "reverse":
                                s = "reverse";
                                break;
                            case "pause":
                                var N = new Date().getTime();
                                return p.each(i, function(e, t) {
                                    y(t, N)
                                }), p.each(m.State.calls, function(e, t) {
                                    var r = !1;
                                    t && p.each(t[1], function(e, n) {
                                        var s = a === o ? "" : o;
                                        return !0 !== s && t[2].queue !== s && (a !== o || !1 !== t[2].queue) || (p.each(i, function(e, a) {
                                            if (a === n) return t[5] = {
                                                resume: !1
                                            }, r = !0, !1
                                        }), !r && void 0)
                                    })
                                }), e();
                            case "resume":
                                return p.each(i, function(e, t) {
                                    v(t, N)
                                }), p.each(m.State.calls, function(e, t) {
                                    var r = !1;
                                    t && p.each(t[1], function(e, n) {
                                        var s = a === o ? "" : o;
                                        return !0 !== s && t[2].queue !== s && (a !== o || !1 !== t[2].queue) || !t[5] || (p.each(i, function(e, a) {
                                            if (a === n) return t[5].resume = !0, r = !0, !1
                                        }), !r && void 0)
                                    })
                                }), e();
                            case "finish":
                            case "finishAll":
                            case "stop":
                                p.each(i, function(e, t) {
                                    h(t) && h(t).delayTimer && (clearTimeout(h(t).delayTimer.setTimeout), h(t).delayTimer.next && h(t).delayTimer.next(), delete h(t).delayTimer), "finishAll" === n && (!0 === o || f.isString(o)) && (p.each(p.queue(t, f.isString(o) ? o : ""), function(e, t) {
                                        f.isFunction(t) && t()
                                    }), p.queue(t, f.isString(o) ? o : "", []))
                                });
                                var H = [];
                                return p.each(m.State.calls, function(e, t) {
                                    t && p.each(t[1], function(r, s) {
                                        var l = a === o ? "" : o;
                                        if (!0 !== l && t[2].queue !== l && (a !== o || !1 !== t[2].queue)) return !0;
                                        p.each(i, function(r, a) {
                                            if (a === s)
                                                if ((!0 === o || f.isString(o)) && (p.each(p.queue(a, f.isString(o) ? o : ""), function(e, t) {
                                                        f.isFunction(t) && t(null, !0)
                                                    }), p.queue(a, f.isString(o) ? o : "", [])), "stop" === n) {
                                                    var i = h(a);
                                                    i && i.tweensContainer && (!0 === l || "" === l) && p.each(i.tweensContainer, function(e, t) {
                                                        t.endValue = t.currentValue
                                                    }), H.push(e)
                                                } else("finish" === n || "finishAll" === n) && (t[2].duration = 1)
                                        })
                                    })
                                }), "stop" === n && (p.each(H, function(e, t) {
                                    A(t, !0)
                                }), w.promise && w.resolver(i)), e();
                            default:
                                if (p.isPlainObject(n) && !f.isEmptyObject(n)) s = "start";
                                else if (f.isString(n) && m.Redirects[n]) {
                                    var O = (c = p.extend({}, o)).duration,
                                        j = c.delay || 0;
                                    return !0 === c.backwards && (i = p.extend(!0, [], i).reverse()), p.each(i, function(e, t) {
                                        parseFloat(c.stagger) ? c.delay = j + parseFloat(c.stagger) * e : f.isFunction(c.stagger) && (c.delay = j + c.stagger.call(t, e, V)), c.drag && (c.duration = parseFloat(O) || (/^(callout|transition)/.test(n) ? 1e3 : 400), c.duration = Math.max(c.duration * (c.backwards ? 1 - e / V : (e + 1) / V), .75 * c.duration, 200)), m.Redirects[n].call(t, t, c || {}, e, V, i, w.promise ? w : a)
                                    }), e()
                                } else {
                                    var q = "Velocity: First argument (" + n + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                    return w.promise ? w.rejecter(Error(q)) : t.console && console.log(q), e()
                                }
                        }
                        var L = {
                                lastParent: null,
                                lastPosition: null,
                                lastFontSize: null,
                                lastPercentToPxWidth: null,
                                lastPercentToPxHeight: null,
                                lastEmToPx: null,
                                remToPx: null,
                                vwToPx: null,
                                vhToPx: null
                            },
                            z = [];
                        p.each(i, function(e, u) {
                            f.isNode(u) && function(e, u) {
                                var c, d = p.extend({}, m.defaults, o),
                                    g = {};
                                switch (h(e) === a && m.init(e), parseFloat(d.delay) && !1 !== d.queue && p.queue(e, d.queue, function(t, r) {
                                        if (!0 === r) return !0;
                                        m.velocityQueueEntryFlag = !0;
                                        var a = m.State.delayedElements.count++;
                                        m.State.delayedElements[a] = e;
                                        var i = function() {
                                            m.State.delayedElements[a] = !1, t()
                                        };
                                        h(e).delayBegin = new Date().getTime(), h(e).delay = parseFloat(d.delay), h(e).delayTimer = {
                                            setTimeout: setTimeout(t, parseFloat(d.delay)),
                                            next: i
                                        }
                                    }), d.duration.toString().toLowerCase()) {
                                    case "fast":
                                        d.duration = 200;
                                        break;
                                    case "normal":
                                        d.duration = 400;
                                        break;
                                    case "slow":
                                        d.duration = 600;
                                        break;
                                    default:
                                        d.duration = parseFloat(d.duration) || 1
                                }

                                function y(y) {
                                    var v, b;
                                    if (d.begin && 0 === T) try {
                                        d.begin.call(i, i)
                                    } catch (e) {
                                        setTimeout(function() {
                                            throw e
                                        }, 1)
                                    }
                                    if ("scroll" === s) {
                                        var x, k, A, F = /^x$/i.test(d.axis) ? "Left" : "Top",
                                            E = parseFloat(d.offset) || 0;
                                        d.container ? f.isWrapped(d.container) || f.isNode(d.container) ? (d.container = d.container[0] || d.container, A = (x = d.container["scroll" + F]) + p(e).position()[F.toLowerCase()] + E) : d.container = null : (x = m.State.scrollAnchor[m.State["scrollProperty" + F]], k = m.State.scrollAnchor[m.State["scrollProperty" + ("Left" === F ? "Top" : "Left")]], A = p(e).offset()[F.toLowerCase()] + E), g = {
                                            scroll: {
                                                rootPropertyValue: !1,
                                                startValue: x,
                                                currentValue: x,
                                                endValue: A,
                                                unitType: "",
                                                easing: d.easing,
                                                scrollData: {
                                                    container: d.container,
                                                    direction: F,
                                                    alternateValue: k
                                                }
                                            },
                                            element: e
                                        }, m.debug && console.log("tweensContainer (scroll): ", g.scroll, e)
                                    } else if ("reverse" === s) {
                                        if (!(v = h(e))) return;
                                        if (!v.tweensContainer) return void p.dequeue(e, d.queue);
                                        for (var N in "none" === v.opts.display && (v.opts.display = "auto"), "hidden" === v.opts.visibility && (v.opts.visibility = "visible"), v.opts.loop = !1, v.opts.begin = null, v.opts.complete = null, o.easing || delete d.easing, o.duration || delete d.duration, d = p.extend({}, v.opts, d), b = p.extend(!0, {}, v ? v.tweensContainer : null))
                                            if (b.hasOwnProperty(N) && "element" !== N) {
                                                var H = b[N].startValue;
                                                b[N].startValue = b[N].currentValue = b[N].endValue, b[N].endValue = H, f.isEmptyObject(o) || (b[N].easing = d.easing), m.debug && console.log("reverse tweensContainer (" + N + "): " + JSON.stringify(b[N]), e)
                                            } g = b
                                    } else if ("start" === s) {
                                        (v = h(e)) && v.tweensContainer && !0 === v.isAnimating && (b = v.tweensContainer);
                                        var O = function(i, n) {
                                            var o, s = P.Hooks.getRoot(i),
                                                l = !1,
                                                u = n[0],
                                                h = n[1],
                                                y = n[2];
                                            if ((!v || !v.isSVG) && "tween" !== s && !1 === P.Names.prefixCheck(s)[1] && P.Normalizations.registered[s] === a) {
                                                m.debug && console.log("Skipping [" + s + "] due to a lack of browser support.");
                                                return
                                            }(d.display !== a && null !== d.display && "none" !== d.display || d.visibility !== a && "hidden" !== d.visibility) && /opacity|filter/.test(i) && !y && 0 !== u && (y = 0), d._cacheValues && b && b[i] ? (a === y && (y = b[i].endValue + b[i].unitType), l = v.rootPropertyValueCache[s]) : P.Hooks.registered[i] ? a === y ? (l = P.getPropertyValue(e, s), y = P.getPropertyValue(e, i, l)) : l = P.Hooks.templates[s][1] : a === y && (y = P.getPropertyValue(e, i));
                                            var x, w, S, k = !1,
                                                V = function(e, t) {
                                                    var r, a;
                                                    return a = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
                                                        return r = e, ""
                                                    }), r || (r = P.Values.getUnitType(e)), [a, r]
                                                };
                                            if (y !== u && f.isString(y) && f.isString(u)) {
                                                o = "";
                                                var T = 0,
                                                    C = 0,
                                                    A = [],
                                                    F = [],
                                                    E = 0,
                                                    N = 0,
                                                    H = 0;
                                                for (y = P.Hooks.fixColors(y), u = P.Hooks.fixColors(u); T < y.length && C < u.length;) {
                                                    var O = y[T],
                                                        j = u[C];
                                                    if (/[\d\.-]/.test(O) && /[\d\.-]/.test(j)) {
                                                        for (var q = O, z = j, R = ".", M = "."; ++T < y.length;) {
                                                            if ((O = y[T]) === R) R = "..";
                                                            else if (!/\d/.test(O)) break;
                                                            q += O
                                                        }
                                                        for (; ++C < u.length;) {
                                                            if ((j = u[C]) === M) M = "..";
                                                            else if (!/\d/.test(j)) break;
                                                            z += j
                                                        }
                                                        var $ = P.Hooks.getUnit(y, T),
                                                            B = P.Hooks.getUnit(u, C);
                                                        if (T += $.length, C += B.length, $ === B) q === z ? o += q + $ : (o += "{" + A.length + (N ? "!" : "") + "}" + $, A.push(parseFloat(q)), F.push(parseFloat(z)));
                                                        else {
                                                            var W = parseFloat(q),
                                                                I = parseFloat(z);
                                                            o += (E < 5 ? "calc" : "") + "(" + (W ? "{" + A.length + (N ? "!" : "") + "}" : "0") + $ + " + " + (I ? "{" + (A.length + +!!W) + (N ? "!" : "") + "}" : "0") + B + ")", W && (A.push(W), F.push(0)), I && (A.push(0), F.push(I))
                                                        }
                                                    } else if (O === j) o += O, T++, C++, 0 === E && "c" === O || 1 === E && "a" === O || 2 === E && "l" === O || 3 === E && "c" === O || E >= 4 && "(" === O ? E++ : (E && E < 5 || E >= 4 && ")" === O && --E < 5) && (E = 0), 0 === N && "r" === O || 1 === N && "g" === O || 2 === N && "b" === O || 3 === N && "a" === O || N >= 3 && "(" === O ? (3 === N && "a" === O && (H = 1), N++) : H && "," === O ? ++H > 3 && (N = H = 0) : (H && N < (H ? 5 : 4) || N >= (H ? 4 : 3) && ")" === O && --N < (H ? 5 : 4)) && (N = H = 0);
                                                    else {
                                                        E = 0;
                                                        break
                                                    }
                                                }(T !== y.length || C !== u.length) && (m.debug && console.error('Trying to pattern match mis-matched strings ["' + u + '", "' + y + '"]'), o = a), o && (A.length ? (m.debug && console.log('Pattern found "' + o + '" -> ', A, F, "[" + y + "," + u + "]"), y = A, u = F, w = S = "") : o = a)
                                            }
                                            if (!o && (y = (x = V(i, y))[0], S = x[1], u = (x = V(i, u))[0].replace(/^([+-\/*])=/, function(e, t) {
                                                    return k = t, ""
                                                }), w = x[1], y = parseFloat(y) || 0, u = parseFloat(u) || 0, "%" === w && (/^(fontSize|lineHeight)$/.test(i) ? (u /= 100, w = "em") : /^scale/.test(i) ? (u /= 100, w = "") : /(Red|Green|Blue)$/i.test(i) && (u = u / 100 * 255, w = ""))), /[\/*]/.test(k)) w = S;
                                            else if (S !== w && 0 !== y)
                                                if (0 === u) w = S;
                                                else {
                                                    c = c || function() {
                                                        var a = {
                                                                myParent: e.parentNode || r.body,
                                                                position: P.getPropertyValue(e, "position"),
                                                                fontSize: P.getPropertyValue(e, "fontSize")
                                                            },
                                                            i = a.position === L.lastPosition && a.myParent === L.lastParent,
                                                            n = a.fontSize === L.lastFontSize;
                                                        L.lastParent = a.myParent, L.lastPosition = a.position, L.lastFontSize = a.fontSize;
                                                        var o = {};
                                                        if (n && i) o.emToPx = L.lastEmToPx, o.percentToPxWidth = L.lastPercentToPxWidth, o.percentToPxHeight = L.lastPercentToPxHeight;
                                                        else {
                                                            var s = v && v.isSVG ? r.createElementNS("http://www.w3.org/2000/svg", "rect") : r.createElement("div");
                                                            m.init(s), a.myParent.appendChild(s), p.each(["overflow", "overflowX", "overflowY"], function(e, t) {
                                                                m.CSS.setPropertyValue(s, t, "hidden")
                                                            }), m.CSS.setPropertyValue(s, "position", a.position), m.CSS.setPropertyValue(s, "fontSize", a.fontSize), m.CSS.setPropertyValue(s, "boxSizing", "content-box"), p.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(e, t) {
                                                                m.CSS.setPropertyValue(s, t, "100%")
                                                            }), m.CSS.setPropertyValue(s, "paddingLeft", "100em"), o.percentToPxWidth = L.lastPercentToPxWidth = (parseFloat(P.getPropertyValue(s, "width", null, !0)) || 1) / 100, o.percentToPxHeight = L.lastPercentToPxHeight = (parseFloat(P.getPropertyValue(s, "height", null, !0)) || 1) / 100, o.emToPx = L.lastEmToPx = (parseFloat(P.getPropertyValue(s, "paddingLeft")) || 1) / 100, a.myParent.removeChild(s)
                                                        }
                                                        return null === L.remToPx && (L.remToPx = parseFloat(P.getPropertyValue(r.body, "fontSize")) || 16), null === L.vwToPx && (L.vwToPx = parseFloat(t.innerWidth) / 100, L.vhToPx = parseFloat(t.innerHeight) / 100), o.remToPx = L.remToPx, o.vwToPx = L.vwToPx, o.vhToPx = L.vhToPx, m.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(o), e), o
                                                    }();
                                                    var D = /margin|padding|left|right|width|text|word|letter/i.test(i) || /X$/.test(i) || "x" === i ? "x" : "y";
                                                    switch (S) {
                                                        case "%":
                                                            y *= "x" === D ? c.percentToPxWidth : c.percentToPxHeight;
                                                            break;
                                                        case "px":
                                                            break;
                                                        default:
                                                            y *= c[S + "ToPx"]
                                                    }
                                                    switch (w) {
                                                        case "%":
                                                            y *= 1 / ("x" === D ? c.percentToPxWidth : c.percentToPxHeight);
                                                            break;
                                                        case "px":
                                                            break;
                                                        default:
                                                            y *= 1 / c[w + "ToPx"]
                                                    }
                                                } switch (k) {
                                                case "+":
                                                    u = y + u;
                                                    break;
                                                case "-":
                                                    u = y - u;
                                                    break;
                                                case "*":
                                                    u *= y;
                                                    break;
                                                case "/":
                                                    u = y / u
                                            }
                                            g[i] = {
                                                rootPropertyValue: l,
                                                startValue: y,
                                                currentValue: y,
                                                endValue: u,
                                                unitType: w,
                                                easing: h
                                            }, o && (g[i].pattern = o), m.debug && console.log("tweensContainer (" + i + "): " + JSON.stringify(g[i]), e)
                                        };
                                        for (var j in n)
                                            if (n.hasOwnProperty(j)) {
                                                var q = P.Names.camelCase(j),
                                                    R = function(t, r) {
                                                        var a, i, n;
                                                        return f.isFunction(t) && (t = t.call(e, u, V)), f.isArray(t) ? (a = t[0], !f.isArray(t[1]) && /^[\d-]/.test(t[1]) || f.isFunction(t[1]) || P.RegEx.isHex.test(t[1]) ? n = t[1] : f.isString(t[1]) && !P.RegEx.isHex.test(t[1]) && m.Easings[t[1]] || f.isArray(t[1]) ? (i = S(t[1], d.duration), n = t[2]) : n = t[1] || t[2]) : a = t, i = i || d.easing, f.isFunction(a) && (a = a.call(e, u, V)), f.isFunction(n) && (n = n.call(e, u, V)), [a || 0, i, n]
                                                    }(n[j]);
                                                if (l(P.Lists.colors, q)) {
                                                    var M = R[0],
                                                        $ = R[1],
                                                        B = R[2];
                                                    if (P.RegEx.isHex.test(M)) {
                                                        for (var W = ["Red", "Green", "Blue"], I = P.Values.hexToRgb(M), D = B ? P.Values.hexToRgb(B) : a, G = 0; G < W.length; G++) {
                                                            var Q = [I[G]];
                                                            $ && Q.push($), a !== D && Q.push(D[G]), O(q + W[G], Q)
                                                        }
                                                        continue
                                                    }
                                                }
                                                O(q, R)
                                            } g.element = e
                                    }
                                    g.element && (P.Values.addClass(e, "velocity-animating"), z.push(g), (v = h(e)) && ("" === d.queue && (v.tweensContainer = g, v.opts = d), v.isAnimating = !0), T === V - 1 ? (m.State.calls.push([z, i, d, null, w.resolver, null, 0]), !1 === m.State.isTicking && (m.State.isTicking = !0, C())) : T++)
                                }
                                if (!1 !== m.mock && (!0 === m.mock ? d.duration = d.delay = 1 : (d.duration *= parseFloat(m.mock) || 1, d.delay *= parseFloat(m.mock) || 1)), d.easing = S(d.easing, d.duration), d.begin && !f.isFunction(d.begin) && (d.begin = null), d.progress && !f.isFunction(d.progress) && (d.progress = null), d.complete && !f.isFunction(d.complete) && (d.complete = null), d.display !== a && null !== d.display && (d.display = d.display.toString().toLowerCase(), "auto" === d.display && (d.display = m.CSS.Values.getDisplayType(e))), d.visibility !== a && null !== d.visibility && (d.visibility = d.visibility.toString().toLowerCase()), d.mobileHA = d.mobileHA && m.State.isMobile && !m.State.isGingerbread, !1 === d.queue)
                                    if (d.delay) {
                                        var v = m.State.delayedElements.count++;
                                        m.State.delayedElements[v] = e;
                                        var b = function() {
                                            m.State.delayedElements[v] = !1, y()
                                        };
                                        h(e).delayBegin = new Date().getTime(), h(e).delay = parseFloat(d.delay), h(e).delayTimer = {
                                            setTimeout: setTimeout(y, parseFloat(d.delay)),
                                            next: b
                                        }
                                    } else y();
                                else p.queue(e, d.queue, function(e, t) {
                                    if (!0 === t) return w.promise && w.resolver(i), !0;
                                    m.velocityQueueEntryFlag = !0, y(e)
                                });
                                ("" === d.queue || "fx" === d.queue) && "inprogress" !== p.queue(e)[0] && p.dequeue(e)
                            }(u, e)
                        }), (c = p.extend({}, m.defaults, o)).loop = parseInt(c.loop, 10);
                        var R = 2 * c.loop - 1;
                        if (c.loop)
                            for (var M = 0; M < R; M++) {
                                var $ = {
                                    delay: c.delay,
                                    progress: c.progress
                                };
                                M === R - 1 && ($.display = c.display, $.visibility = c.visibility, $.complete = c.complete), k(i, "reverse", $)
                            }
                        return e()
                    };
                    (m = p.extend(k, m)).animate = k;
                    var V = t.requestAnimationFrame || n;
                    if (!m.State.isMobile && r.hidden !== a) {
                        var T = function() {
                            r.hidden ? (V = function(e) {
                                return setTimeout(function() {
                                    e(!0)
                                }, 16)
                            }, C()) : V = t.requestAnimationFrame || n
                        };
                        T(), r.addEventListener("visibilitychange", T)
                    }

                    function C(e) {
                        if (e) {
                            var t = m.timestamp && !0 !== e ? e : o.now(),
                                r = m.State.calls.length;
                            r > 1e4 && (m.State.calls = function(e) {
                                for (var t = -1, r = e ? e.length : 0, a = []; ++t < r;) {
                                    var i = e[t];
                                    i && a.push(i)
                                }
                                return a
                            }(m.State.calls), r = m.State.calls.length);
                            for (var n = 0; n < r; n++)
                                if (m.State.calls[n]) {
                                    var s = m.State.calls[n],
                                        l = s[0],
                                        u = s[2],
                                        c = s[3],
                                        d = !c,
                                        g = null,
                                        y = s[5],
                                        v = s[6];
                                    if (c || (c = m.State.calls[n][3] = t - 16), y)
                                        if (!0 !== y.resume) continue;
                                        else c = s[3] = Math.round(t - v - 16), s[5] = null;
                                    for (var b = Math.min((v = s[6] = t - c) / u.duration, 1), x = 0, w = l.length; x < w; x++) {
                                        var S = l[x],
                                            k = S.element;
                                        if (h(k)) {
                                            var T = !1;
                                            if (u.display !== a && null !== u.display && "none" !== u.display) {
                                                if ("flex" === u.display) {
                                                    var F = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                                    p.each(F, function(e, t) {
                                                        P.setPropertyValue(k, "display", t)
                                                    })
                                                }
                                                P.setPropertyValue(k, "display", u.display)
                                            }
                                            for (var E in u.visibility !== a && "hidden" !== u.visibility && P.setPropertyValue(k, "visibility", u.visibility), S)
                                                if (S.hasOwnProperty(E) && "element" !== E) {
                                                    var N, H = S[E],
                                                        O = f.isString(H.easing) ? m.Easings[H.easing] : H.easing;
                                                    if (f.isString(H.pattern)) {
                                                        var j = 1 === b ? function(e, t, r) {
                                                            var a = H.endValue[t];
                                                            return r ? Math.round(a) : a
                                                        } : function(e, t, r) {
                                                            var a = H.startValue[t],
                                                                i = H.endValue[t] - a,
                                                                n = a + i * O(b, u, i);
                                                            return r ? Math.round(n) : n
                                                        };
                                                        N = H.pattern.replace(/{(\d+)(!)?}/g, j)
                                                    } else if (1 === b) N = H.endValue;
                                                    else {
                                                        var q = H.endValue - H.startValue;
                                                        N = H.startValue + q * O(b, u, q)
                                                    }
                                                    if (!d && N === H.currentValue) continue;
                                                    if (H.currentValue = N, "tween" === E) g = N;
                                                    else {
                                                        if (P.Hooks.registered[E]) {
                                                            var L = P.Hooks.getRoot(E),
                                                                z = h(k).rootPropertyValueCache[L];
                                                            z && (H.rootPropertyValue = z)
                                                        }
                                                        var R = P.setPropertyValue(k, E, H.currentValue + (i < 9 && 0 === parseFloat(N) ? "" : H.unitType), H.rootPropertyValue, H.scrollData);
                                                        P.Hooks.registered[E] && (P.Normalizations.registered[L] ? h(k).rootPropertyValueCache[L] = P.Normalizations.registered[L]("extract", null, R[1]) : h(k).rootPropertyValueCache[L] = R[1]), "transform" === R[0] && (T = !0)
                                                    }
                                                } u.mobileHA && h(k).transformCache.translate3d === a && (h(k).transformCache.translate3d = "(0px, 0px, 0px)", T = !0), T && P.flushTransformCache(k)
                                        }
                                    }
                                    u.display !== a && "none" !== u.display && (m.State.calls[n][2].display = !1), u.visibility !== a && "hidden" !== u.visibility && (m.State.calls[n][2].visibility = !1), u.progress && u.progress.call(s[1], s[1], b, Math.max(0, c + u.duration - t), c, g), 1 === b && A(n)
                                }
                        }
                        m.State.isTicking && V(C)
                    }

                    function A(e, t) {
                        if (!m.State.calls[e]) return !1;
                        for (var r = m.State.calls[e][0], i = m.State.calls[e][1], n = m.State.calls[e][2], o = m.State.calls[e][4], s = !1, l = 0, u = r.length; l < u; l++) {
                            var c = r[l].element;
                            t || n.loop || ("none" === n.display && P.setPropertyValue(c, "display", n.display), "hidden" === n.visibility && P.setPropertyValue(c, "visibility", n.visibility));
                            var f = h(c);
                            if (!0 !== n.loop && (p.queue(c)[1] === a || !/\.velocityQueueEntryFlag/i.test(p.queue(c)[1])) && f) {
                                f.isAnimating = !1, f.rootPropertyValueCache = {};
                                var d = !1;
                                p.each(P.Lists.transforms3D, function(e, t) {
                                    var r = +!!/^scale/.test(t),
                                        i = f.transformCache[t];
                                    f.transformCache[t] !== a && RegExp("^\\(" + r + "[^.]").test(i) && (d = !0, delete f.transformCache[t])
                                }), n.mobileHA && (d = !0, delete f.transformCache.translate3d), d && P.flushTransformCache(c), P.Values.removeClass(c, "velocity-animating")
                            }
                            if (!t && n.complete && !n.loop && l === u - 1) try {
                                n.complete.call(i, i)
                            } catch (e) {
                                setTimeout(function() {
                                    throw e
                                }, 1)
                            }
                            o && !0 !== n.loop && o(i), f && !0 === n.loop && !t && (p.each(f.tweensContainer, function(e, t) {
                                if (/^rotate/.test(e) && (parseFloat(t.startValue) - parseFloat(t.endValue)) % 360 == 0) {
                                    var r = t.startValue;
                                    t.startValue = t.endValue, t.endValue = r
                                }
                                /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
                            }), m(c, "reverse", {
                                loop: !0,
                                delay: n.delay
                            })), !1 !== n.queue && p.dequeue(c, n.queue)
                        }
                        m.State.calls[e] = !1;
                        for (var g = 0, y = m.State.calls.length; g < y; g++)
                            if (!1 !== m.State.calls[g]) {
                                s = !0;
                                break
                            }! 1 === s && (m.State.isTicking = !1, delete m.State.calls, m.State.calls = [])
                    }
                    return e.Velocity = m, e !== t && (e.fn.velocity = k, e.fn.velocity.defaults = m.defaults), p.each(["Down", "Up"], function(e, t) {
                        m.Redirects["slide" + t] = function(e, r, i, n, o, s) {
                            var l = p.extend({}, r),
                                u = l.begin,
                                c = l.complete,
                                f = {},
                                d = {
                                    height: "",
                                    marginTop: "",
                                    marginBottom: "",
                                    paddingTop: "",
                                    paddingBottom: ""
                                };
                            l.display === a && (l.display = "Down" === t ? "inline" === m.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function() {
                                for (var r in 0 === i && u && u.call(o, o), d)
                                    if (d.hasOwnProperty(r)) {
                                        f[r] = e.style[r];
                                        var a = P.getPropertyValue(e, r);
                                        d[r] = "Down" === t ? [a, 0] : [0, a]
                                    } f.overflow = e.style.overflow, e.style.overflow = "hidden"
                            }, l.complete = function() {
                                for (var t in f) f.hasOwnProperty(t) && (e.style[t] = f[t]);
                                i === n - 1 && (c && c.call(o, o), s && s.resolver(o))
                            }, m(e, d, l)
                        }
                    }), p.each(["In", "Out"], function(e, t) {
                        m.Redirects["fade" + t] = function(e, r, i, n, o, s) {
                            var l = p.extend({}, r),
                                u = l.complete;
                            0 !== i && (l.begin = null), i !== n - 1 ? l.complete = null : l.complete = function() {
                                u && u.call(o, o), s && s.resolver(o)
                            }, l.display === a && (l.display = "In" === t ? "auto" : "none"), m(this, {
                                opacity: +("In" === t)
                            }, l)
                        }
                    }), m
                }(window.jQuery || window.Zepto || window, window, window ? window.document : void 0)
            })
        }
    }
]);
//# sourceMappingURL=d21c9336.6a560a122758c672.js.map
