import {
    al as e,
    r as t,
    j as r
} from "./index-67e26437.js";
var n, o, a, i, c, u, f, l, s, p, y, d, h, v, _, b, w, m, j, O, g, P, x, S, E, M, T = {},
    I = {
        exports: {}
    };
n = I,
    function(t) {
        var r = "object" == typeof e ? e : "object" == typeof self ? self : "object" == typeof this ? this : {};

        function T(e, t) {
            return e !== r && ("function" == typeof Object.create ? Object.defineProperty(e, "__esModule", {
                    value: !0
                }) : e.__esModule = !0),
                function(r, n) {
                    return e[r] = t ? t(r, n) : n
                }
        }! function(e) {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
            };
            o = function(e, r) {
                if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }
                t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
            }, a = Object.assign || function(e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }, i = function(e, t) {
                var r = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
                }
                return r
            }, c = function(e, t, r, n) {
                var o, a = arguments.length,
                    i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n);
                else
                    for (var c = e.length - 1; c >= 0; c--)(o = e[c]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, r, i) : o(t, r)) || i);
                return a > 3 && i && Object.defineProperty(t, r, i), i
            }, u = function(e, t) {
                return function(r, n) {
                    t(r, n, e)
                }
            }, f = function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            }, l = function(e, t, r, n) {
                function o(e) {
                    return e instanceof r ? e : new r((function(t) {
                        t(e)
                    }))
                }
                return new(r || (r = Promise))((function(r, a) {
                    function i(e) {
                        try {
                            u(n.next(e))
                        } catch (t) {
                            a(t)
                        }
                    }

                    function c(e) {
                        try {
                            u(n.throw(e))
                        } catch (t) {
                            a(t)
                        }
                    }

                    function u(e) {
                        e.done ? r(e.value) : o(e.value).then(i, c)
                    }
                    u((n = n.apply(e, t || [])).next())
                }))
            }, s = function(e, t) {
                var r, n, o, a, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function c(e) {
                    return function(t) {
                        return u([e, t])
                    }
                }

                function u(a) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (r = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                        switch (n = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                            case 0:
                            case 1:
                                o = a;
                                break;
                            case 4:
                                return i.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                i.label++, n = a[1], a = [0];
                                continue;
                            case 7:
                                a = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (!((o = (o = i.trys).length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                    i.label = a[1];
                                    break
                                }
                                if (6 === a[0] && i.label < o[1]) {
                                    i.label = o[1], o = a;
                                    break
                                }
                                if (o && i.label < o[2]) {
                                    i.label = o[2], i.ops.push(a);
                                    break
                                }
                                o[2] && i.ops.pop(), i.trys.pop();
                                continue
                        }
                        a = t.call(e, i)
                    } catch (c) {
                        a = [6, c], n = 0
                    } finally {
                        r = o = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }
            }, p = function(e, t) {
                for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || M(t, e, r)
            }, M = Object.create ? function(e, t, r, n) {
                void 0 === n && (n = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                    enumerable: !0,
                    get: function() {
                        return t[r]
                    }
                }), Object.defineProperty(e, n, o)
            } : function(e, t, r, n) {
                void 0 === n && (n = r), e[n] = t[r]
            }, y = function(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    r = t && e[t],
                    n = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && n >= e.length && (e = void 0), {
                            value: e && e[n++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }, d = function(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var n, o, a = r.call(e),
                    i = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(n = a.next()).done;) i.push(n.value)
                } catch (c) {
                    o = {
                        error: c
                    }
                } finally {
                    try {
                        n && !n.done && (r = a.return) && r.call(a)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return i
            }, h = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(d(arguments[t]));
                return e
            }, v = function() {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                var n = Array(e),
                    o = 0;
                for (t = 0; t < r; t++)
                    for (var a = arguments[t], i = 0, c = a.length; i < c; i++, o++) n[o] = a[i];
                return n
            }, _ = function(e, t, r) {
                if (r || 2 === arguments.length)
                    for (var n, o = 0, a = t.length; o < a; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
                return e.concat(n || Array.prototype.slice.call(t))
            }, b = function(e) {
                return this instanceof b ? (this.v = e, this) : new b(e)
            }, w = function(e, t, r) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var n, o = r.apply(e, t || []),
                    a = [];
                return n = {}, i("next"), i("throw"), i("return"), n[Symbol.asyncIterator] = function() {
                    return this
                }, n;

                function i(e) {
                    o[e] && (n[e] = function(t) {
                        return new Promise((function(r, n) {
                            a.push([e, t, r, n]) > 1 || c(e, t)
                        }))
                    })
                }

                function c(e, t) {
                    try {
                        u(o[e](t))
                    } catch (r) {
                        s(a[0][3], r)
                    }
                }

                function u(e) {
                    e.value instanceof b ? Promise.resolve(e.value.v).then(f, l) : s(a[0][2], e)
                }

                function f(e) {
                    c("next", e)
                }

                function l(e) {
                    c("throw", e)
                }

                function s(e, t) {
                    e(t), a.shift(), a.length && c(a[0][0], a[0][1])
                }
            }, m = function(e) {
                var t, r;
                return t = {}, n("next"), n("throw", (function(e) {
                    throw e
                })), n("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function n(n, o) {
                    t[n] = e[n] ? function(t) {
                        return (r = !r) ? {
                            value: b(e[n](t)),
                            done: "return" === n
                        } : o ? o(t) : t
                    } : o
                }
            }, j = function(e) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = y(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function n(r) {
                    t[r] = e[r] && function(t) {
                        return new Promise((function(n, a) {
                            o(n, a, (t = e[r](t)).done, t.value)
                        }))
                    }
                }

                function o(e, t, r, n) {
                    Promise.resolve(n).then((function(t) {
                        e({
                            value: t,
                            done: r
                        })
                    }), t)
                }
            }, O = function(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            };
            var r = Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            };
            g = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && M(t, e, n);
                return r(t, e), t
            }, P = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }, x = function(e, t, r, n) {
                if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
            }, S = function(e, t, r, n, o) {
                if ("m" === n) throw new TypeError("Private method is not writable");
                if ("a" === n && !o) throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === n ? o.call(e, r) : o ? o.value = r : t.set(e, r), r
            }, E = function(e, t) {
                if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
                return "function" == typeof e ? t === e : e.has(t)
            }, e("__extends", o), e("__assign", a), e("__rest", i), e("__decorate", c), e("__param", u), e("__metadata", f), e("__awaiter", l), e("__generator", s), e("__exportStar", p), e("__createBinding", M), e("__values", y), e("__read", d), e("__spread", h), e("__spreadArrays", v), e("__spreadArray", _), e("__await", b), e("__asyncGenerator", w), e("__asyncDelegator", m), e("__asyncValues", j), e("__makeTemplateObject", O), e("__importStar", g), e("__importDefault", P), e("__classPrivateFieldGet", x), e("__classPrivateFieldSet", S), e("__classPrivateFieldIn", E)
        }(T(r, T(n.exports)))
    }();
var R, F = I.exports,
    A = {};
Object.defineProperty(T, "__esModule", {
    value: !0
});
var k = F.__importDefault(function() {
        if (R) return A;
        R = 1, Object.defineProperty(A, "__esModule", {
            value: !0
        });
        var e = t;
        return A.default = function(t) {
            e.useEffect(t, [])
        }, A
    }()),
    D = T.default = function(e) {
        k.default((function() {
            e()
        }))
    },
    C = {},
    G = {};
Object.defineProperty(G, "__esModule", {
    value: !0
}), G.useFirstMountState = void 0;
var N = t;
G.useFirstMountState = function() {
    var e = N.useRef(!0);
    return e.current ? (e.current = !1, !0) : e.current
}, Object.defineProperty(C, "__esModule", {
    value: !0
});
var $ = t,
    z = G,
    B = C.default = function(e, t) {
        var r = z.useFirstMountState();
        $.useEffect((function() {
            if (!r) return e()
        }), t)
    };
const V = (e, t = !1) => `https://cdn.discordapp.com/emojis/${e}.${t?"gif":"png"}`,
    q = ({
        name: e,
        id: n,
        size: o = 16,
        style: a = {},
        className: i
    }) => {
        const c = t.useRef(null);
        return D((() => {
            c.current && !n && window.twemoji && window.twemoji.parse(c.current)
        })), B((() => {
            c.current && !n && window.twemoji && window.twemoji.parse(c.current)
        }), [e, n]), r.jsx(r.Fragment, {
            children: n ? r.jsx("div", {
                className: i,
                style: {
                    width: o + "px",
                    ...a
                },
                children: r.jsx("img", {
                    src: V(n)
                })
            }) : r.jsx("div", {
                ref: c,
                className: i,
                style: {
                    width: o + "px"
                },
                children: e
            })
        })
    };
export {
    q as E
};
