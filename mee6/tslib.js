import {
    al as e
} from "./index-afe8eeea.js";
var t, r, n, o, i, a, c, u, f, s, l, p, y, d, h, b, v, w, _, m, g, O, j, P, S, E, x, T, I, k, D, R, A = {
    exports: {}
};
t = A,
    function(A) {
        var C = "object" == typeof e ? e : "object" == typeof self ? self : "object" == typeof this ? this : {};

        function F(e, t) {
            return e !== C && ("function" == typeof Object.create ? Object.defineProperty(e, "__esModule", {
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
            r = function(e, r) {
                if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }
                t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
            }, n = Object.assign || function(e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }, o = function(e, t) {
                var r = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
                }
                return r
            }, i = function(e, t, r, n) {
                var o, i = arguments.length,
                    a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, n);
                else
                    for (var c = e.length - 1; c >= 0; c--)(o = e[c]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
                return i > 3 && a && Object.defineProperty(t, r, a), a
            }, a = function(e, t) {
                return function(r, n) {
                    t(r, n, e)
                }
            }, c = function(e, t, r, n, o, i) {
                function a(e) {
                    if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
                    return e
                }
                for (var c, u = n.kind, f = "getter" === u ? "get" : "setter" === u ? "set" : "value", s = !t && e ? n.static ? e : e.prototype : null, l = t || (s ? Object.getOwnPropertyDescriptor(s, n.name) : {}), p = !1, y = r.length - 1; y >= 0; y--) {
                    var d = {};
                    for (var h in n) d[h] = "access" === h ? {} : n[h];
                    for (var h in n.access) d.access[h] = n.access[h];
                    d.addInitializer = function(e) {
                        if (p) throw new TypeError("Cannot add initializers after decoration has completed");
                        i.push(a(e || null))
                    };
                    var b = (0, r[y])("accessor" === u ? {
                        get: l.get,
                        set: l.set
                    } : l[f], d);
                    if ("accessor" === u) {
                        if (void 0 === b) continue;
                        if (null === b || "object" != typeof b) throw new TypeError("Object expected");
                        (c = a(b.get)) && (l.get = c), (c = a(b.set)) && (l.set = c), (c = a(b.init)) && o.unshift(c)
                    } else(c = a(b)) && ("field" === u ? o.unshift(c) : l[f] = c)
                }
                s && Object.defineProperty(s, n.name, l), p = !0
            }, u = function(e, t, r) {
                for (var n = arguments.length > 2, o = 0; o < t.length; o++) r = n ? t[o].call(e, r) : t[o].call(e);
                return n ? r : void 0
            }, f = function(e) {
                return "symbol" == typeof e ? e : "".concat(e)
            }, s = function(e, t, r) {
                return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", {
                    configurable: !0,
                    value: r ? "".concat(r, " ", t) : t
                })
            }, l = function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            }, p = function(e, t, r, n) {
                function o(e) {
                    return e instanceof r ? e : new r((function(t) {
                        t(e)
                    }))
                }
                return new(r || (r = Promise))((function(r, i) {
                    function a(e) {
                        try {
                            u(n.next(e))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function c(e) {
                        try {
                            u(n.throw(e))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function u(e) {
                        e.done ? r(e.value) : o(e.value).then(a, c)
                    }
                    u((n = n.apply(e, t || [])).next())
                }))
            }, y = function(e, t) {
                var r, n, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function c(e) {
                    return function(t) {
                        return u([e, t])
                    }
                }

                function u(c) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; i && (i = 0, c[0] && (a = 0)), a;) try {
                        if (r = 1, n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, c[1])).done) return o;
                        switch (n = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                            case 0:
                            case 1:
                                o = c;
                                break;
                            case 4:
                                return a.label++, {
                                    value: c[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = c[1], c = [0];
                                continue;
                            case 7:
                                c = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                    a.label = c[1];
                                    break
                                }
                                if (6 === c[0] && a.label < o[1]) {
                                    a.label = o[1], o = c;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(c);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        c = t.call(e, a)
                    } catch (u) {
                        c = [6, u], n = 0
                    } finally {
                        r = o = 0
                    }
                    if (5 & c[0]) throw c[1];
                    return {
                        value: c[0] ? c[1] : void 0,
                        done: !0
                    }
                }
            }, d = function(e, t) {
                for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || k(t, e, r)
            }, k = Object.create ? function(e, t, r, n) {
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
            }, h = function(e) {
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
            }, b = function(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var n, o, i = r.call(e),
                    a = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(n = i.next()).done;) a.push(n.value)
                } catch (c) {
                    o = {
                        error: c
                    }
                } finally {
                    try {
                        n && !n.done && (r = i.return) && r.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return a
            }, v = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(b(arguments[t]));
                return e
            }, w = function() {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                var n = Array(e),
                    o = 0;
                for (t = 0; t < r; t++)
                    for (var i = arguments[t], a = 0, c = i.length; a < c; a++, o++) n[o] = i[a];
                return n
            }, _ = function(e, t, r) {
                if (r || 2 === arguments.length)
                    for (var n, o = 0, i = t.length; o < i; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
                return e.concat(n || Array.prototype.slice.call(t))
            }, m = function(e) {
                return this instanceof m ? (this.v = e, this) : new m(e)
            }, g = function(e, t, r) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var n, o = r.apply(e, t || []),
                    i = [];
                return n = {}, a("next"), a("throw"), a("return"), n[Symbol.asyncIterator] = function() {
                    return this
                }, n;

                function a(e) {
                    o[e] && (n[e] = function(t) {
                        return new Promise((function(r, n) {
                            i.push([e, t, r, n]) > 1 || c(e, t)
                        }))
                    })
                }

                function c(e, t) {
                    try {
                        u(o[e](t))
                    } catch (r) {
                        l(i[0][3], r)
                    }
                }

                function u(e) {
                    e.value instanceof m ? Promise.resolve(e.value.v).then(f, s) : l(i[0][2], e)
                }

                function f(e) {
                    c("next", e)
                }

                function s(e) {
                    c("throw", e)
                }

                function l(e, t) {
                    e(t), i.shift(), i.length && c(i[0][0], i[0][1])
                }
            }, O = function(e) {
                var t, r;
                return t = {}, n("next"), n("throw", (function(e) {
                    throw e
                })), n("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function n(n, o) {
                    t[n] = e[n] ? function(t) {
                        return (r = !r) ? {
                            value: m(e[n](t)),
                            done: !1
                        } : o ? o(t) : t
                    } : o
                }
            }, j = function(e) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = h(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function n(r) {
                    t[r] = e[r] && function(t) {
                        return new Promise((function(n, i) {
                            o(n, i, (t = e[r](t)).done, t.value)
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
            }, P = function(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            };
            var A = Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            };
            S = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && k(t, e, r);
                return A(t, e), t
            }, E = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }, x = function(e, t, r, n) {
                if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
            }, T = function(e, t, r, n, o) {
                if ("m" === n) throw new TypeError("Private method is not writable");
                if ("a" === n && !o) throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === n ? o.call(e, r) : o ? o.value = r : t.set(e, r), r
            }, I = function(e, t) {
                if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
                return "function" == typeof e ? t === e : e.has(t)
            }, D = function(e, t, r) {
                if (null != t) {
                    if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
                    var n;
                    if (r) {
                        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
                        n = t[Symbol.asyncDispose]
                    }
                    if (void 0 === n) {
                        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
                        n = t[Symbol.dispose]
                    }
                    if ("function" != typeof n) throw new TypeError("Object not disposable.");
                    e.stack.push({
                        value: t,
                        dispose: n,
                        async: r
                    })
                } else r && e.stack.push({
                    async: !0
                });
                return t
            };
            var C = "function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
                var n = new Error(r);
                return n.name = "SuppressedError", n.error = e, n.suppressed = t, n
            };
            R = function(e) {
                function t(t) {
                    e.error = e.hasError ? new C(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0
                }

                function r() {
                    for (; e.stack.length;) {
                        var n = e.stack.pop();
                        try {
                            var o = n.dispose && n.dispose.call(n.value);
                            if (n.async) return Promise.resolve(o).then(r, (function(e) {
                                return t(e), r()
                            }))
                        } catch (i) {
                            t(i)
                        }
                    }
                    if (e.hasError) throw e.error
                }
                return r()
            }, e("__extends", r), e("__assign", n), e("__rest", o), e("__decorate", i), e("__param", a), e("__esDecorate", c), e("__runInitializers", u), e("__propKey", f), e("__setFunctionName", s), e("__metadata", l), e("__awaiter", p), e("__generator", y), e("__exportStar", d), e("__createBinding", k), e("__values", h), e("__read", b), e("__spread", v), e("__spreadArrays", w), e("__spreadArray", _), e("__await", m), e("__asyncGenerator", g), e("__asyncDelegator", O), e("__asyncValues", j), e("__makeTemplateObject", P), e("__importStar", S), e("__importDefault", E), e("__classPrivateFieldGet", x), e("__classPrivateFieldSet", T), e("__classPrivateFieldIn", I), e("__addDisposableResource", D), e("__disposeResources", R)
        }(F(C, F(t.exports)))
    }();
var C = A.exports;
export {
    C as t
};
