"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [443], {
        7232: (e, t, r) => {
            let n;
            var i, o, a, s, c, l, u, d, h, f, p, y, m, g, w, v, b, S, E, k, _, T, A = r(75075),
                R = r(64254).hp,
                O = Object.create,
                C = Object.defineProperty,
                P = Object.getOwnPropertyDescriptor,
                x = Object.getOwnPropertyNames,
                N = Object.getPrototypeOf,
                j = Object.prototype.hasOwnProperty,
                L = e => {
                    throw TypeError(e)
                },
                I = (e, t) => function() {
                    return t || (0, e[x(e)[0]])((t = {
                        exports: {}
                    }).exports, t), t.exports
                },
                U = (e, t) => {
                    for (var r in t) C(e, r, {
                        get: t[r],
                        enumerable: !0
                    })
                },
                D = (e, t, r, n) => {
                    if (t && "object" == typeof t || "function" == typeof t)
                        for (let i of x(t)) j.call(e, i) || i === r || C(e, i, {
                            get: () => t[i],
                            enumerable: !(n = P(t, i)) || n.enumerable
                        });
                    return e
                },
                W = (e, t, r) => (r = null != e ? O(N(e)) : {}, D(!t && e && e.__esModule ? r : C(r, "default", {
                    value: e,
                    enumerable: !0
                }), e)),
                M = (e, t, r) => ((e, t, r) => t in e ? C(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r)(e, "symbol" != typeof t ? t + "" : t, r),
                K = (e, t, r) => t.has(e) || L("Cannot " + r),
                J = (e, t, r) => (K(e, t, "read from private field"), r ? r.call(e) : t.get(e)),
                H = (e, t, r) => t.has(e) ? L("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r),
                F = (e, t, r, n) => (K(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r),
                q = I({
                    "node_modules/.pnpm/browser-tabs-lock@1.3.0/node_modules/browser-tabs-lock/processLock.js"(e) {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var t = function() {
                            function e() {
                                var e = this;
                                this.locked = new Map, this.addToLocked = function(t, r) {
                                    var n = e.locked.get(t);
                                    void 0 === n ? void 0 === r ? e.locked.set(t, []) : e.locked.set(t, [r]) : void 0 !== r && (n.unshift(r), e.locked.set(t, n))
                                }, this.isLocked = function(t) {
                                    return e.locked.has(t)
                                }, this.lock = function(t) {
                                    return new Promise(function(r, n) {
                                        e.isLocked(t) ? e.addToLocked(t, r) : (e.addToLocked(t), r())
                                    })
                                }, this.unlock = function(t) {
                                    var r = e.locked.get(t);
                                    if (void 0 === r || 0 === r.length) return void e.locked.delete(t);
                                    var n = r.pop();
                                    e.locked.set(t, r), void 0 !== n && setTimeout(n, 0)
                                }
                            }
                            return e.getInstance = function() {
                                return void 0 === e.instance && (e.instance = new e), e.instance
                            }, e
                        }();
                        e.default = function() {
                            return t.getInstance()
                        }
                    }
                }),
                B = I({
                    "node_modules/.pnpm/browser-tabs-lock@1.3.0/node_modules/browser-tabs-lock/index.js"(e) {
                        var t = e && e.__awaiter || function(e, t, r, n) {
                                return new(r || (r = Promise))(function(i, o) {
                                    function a(e) {
                                        try {
                                            c(n.next(e))
                                        } catch (e) {
                                            o(e)
                                        }
                                    }

                                    function s(e) {
                                        try {
                                            c(n.throw(e))
                                        } catch (e) {
                                            o(e)
                                        }
                                    }

                                    function c(e) {
                                        e.done ? i(e.value) : new r(function(t) {
                                            t(e.value)
                                        }).then(a, s)
                                    }
                                    c((n = n.apply(e, t || [])).next())
                                })
                            },
                            r = e && e.__generator || function(e, t) {
                                var r, n, i, o, a = {
                                    label: 0,
                                    sent: function() {
                                        if (1 & i[0]) throw i[1];
                                        return i[1]
                                    },
                                    trys: [],
                                    ops: []
                                };
                                return o = {
                                    next: s(0),
                                    throw: s(1),
                                    return: s(2)
                                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                                    return this
                                }), o;

                                function s(o) {
                                    return function(s) {
                                        var c = [o, s];
                                        if (r) throw TypeError("Generator is already executing.");
                                        for (; a;) try {
                                            if (r = 1, n && (i = 2 & c[0] ? n.return : c[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, c[1])).done) return i;
                                            switch (n = 0, i && (c = [2 & c[0], i.value]), c[0]) {
                                                case 0:
                                                case 1:
                                                    i = c;
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
                                                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                                        a = 0;
                                                        continue
                                                    }
                                                    if (3 === c[0] && (!i || c[1] > i[0] && c[1] < i[3])) {
                                                        a.label = c[1];
                                                        break
                                                    }
                                                    if (6 === c[0] && a.label < i[1]) {
                                                        a.label = i[1], i = c;
                                                        break
                                                    }
                                                    if (i && a.label < i[2]) {
                                                        a.label = i[2], a.ops.push(c);
                                                        break
                                                    }
                                                    i[2] && a.ops.pop(), a.trys.pop();
                                                    continue
                                            }
                                            c = t.call(e, a)
                                        } catch (e) {
                                            c = [6, e], n = 0
                                        } finally {
                                            r = i = 0
                                        }
                                        if (5 & c[0]) throw c[1];
                                        return {
                                            value: c[0] ? c[1] : void 0,
                                            done: !0
                                        }
                                    }
                                }
                            };
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var n = q(),
                            i = "browser-tabs-lock-key",
                            o = {
                                key: function(n) {
                                    return t(e, void 0, void 0, function() {
                                        return r(this, function(e) {
                                            throw Error("Unsupported")
                                        })
                                    })
                                },
                                getItem: function(n) {
                                    return t(e, void 0, void 0, function() {
                                        return r(this, function(e) {
                                            throw Error("Unsupported")
                                        })
                                    })
                                },
                                clear: function() {
                                    return t(e, void 0, void 0, function() {
                                        return r(this, function(e) {
                                            return [2, window.localStorage.clear()]
                                        })
                                    })
                                },
                                removeItem: function(n) {
                                    return t(e, void 0, void 0, function() {
                                        return r(this, function(e) {
                                            throw Error("Unsupported")
                                        })
                                    })
                                },
                                setItem: function(n, i) {
                                    return t(e, void 0, void 0, function() {
                                        return r(this, function(e) {
                                            throw Error("Unsupported")
                                        })
                                    })
                                },
                                keySync: function(e) {
                                    return window.localStorage.key(e)
                                },
                                getItemSync: function(e) {
                                    return window.localStorage.getItem(e)
                                },
                                clearSync: function() {
                                    return window.localStorage.clear()
                                },
                                removeItemSync: function(e) {
                                    return window.localStorage.removeItem(e)
                                },
                                setItemSync: function(e, t) {
                                    return window.localStorage.setItem(e, t)
                                }
                            };

                        function a(e) {
                            return new Promise(function(t) {
                                return setTimeout(t, e)
                            })
                        }

                        function s(e) {
                            for (var t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz", r = "", n = 0; n < e; n++) {
                                var i = Math.floor(Math.random() * t.length);
                                r += t[i]
                            }
                            return r
                        }
                        e.default = function() {
                            function e(t) {
                                this.acquiredIatSet = new Set, this.storageHandler = void 0, this.id = Date.now().toString() + s(15), this.acquireLock = this.acquireLock.bind(this), this.releaseLock = this.releaseLock.bind(this), this.releaseLock__private__ = this.releaseLock__private__.bind(this), this.waitForSomethingToChange = this.waitForSomethingToChange.bind(this), this.refreshLockWhileAcquired = this.refreshLockWhileAcquired.bind(this), this.storageHandler = t, void 0 === e.waiters && (e.waiters = [])
                            }
                            return e.prototype.acquireLock = function(n, c) {
                                return void 0 === c && (c = 5e3), t(this, void 0, void 0, function() {
                                    var t, l, u, d, h, f, p;
                                    return r(this, function(r) {
                                        switch (r.label) {
                                            case 0:
                                                t = Date.now() + s(4), l = Date.now() + c, u = i + "-" + n, d = void 0 === this.storageHandler ? o : this.storageHandler, r.label = 1;
                                            case 1:
                                                if (!(Date.now() < l)) return [3, 8];
                                                return [4, a(30)];
                                            case 2:
                                                if (r.sent(), null !== d.getItemSync(u)) return [3, 5];
                                                return h = this.id + "-" + n + "-" + t, [4, a(Math.floor(25 * Math.random()))];
                                            case 3:
                                                return r.sent(), d.setItemSync(u, JSON.stringify({
                                                    id: this.id,
                                                    iat: t,
                                                    timeoutKey: h,
                                                    timeAcquired: Date.now(),
                                                    timeRefreshed: Date.now()
                                                })), [4, a(30)];
                                            case 4:
                                                if (r.sent(), null !== (f = d.getItemSync(u)) && (p = JSON.parse(f)).id === this.id && p.iat === t) return this.acquiredIatSet.add(t), this.refreshLockWhileAcquired(u, t), [2, !0];
                                                return [3, 7];
                                            case 5:
                                                return e.lockCorrector(void 0 === this.storageHandler ? o : this.storageHandler), [4, this.waitForSomethingToChange(l)];
                                            case 6:
                                                r.sent(), r.label = 7;
                                            case 7:
                                                return t = Date.now() + s(4), [3, 1];
                                            case 8:
                                                return [2, !1]
                                        }
                                    })
                                })
                            }, e.prototype.refreshLockWhileAcquired = function(e, i) {
                                return t(this, void 0, void 0, function() {
                                    var a = this;
                                    return r(this, function(s) {
                                        return setTimeout(function() {
                                            return t(a, void 0, void 0, function() {
                                                var t, a, s;
                                                return r(this, function(r) {
                                                    switch (r.label) {
                                                        case 0:
                                                            return [4, n.default().lock(i)];
                                                        case 1:
                                                            if (r.sent(), !this.acquiredIatSet.has(i) || null === (a = (t = void 0 === this.storageHandler ? o : this.storageHandler).getItemSync(e))) return n.default().unlock(i), [2];
                                                            return (s = JSON.parse(a)).timeRefreshed = Date.now(), t.setItemSync(e, JSON.stringify(s)), n.default().unlock(i), this.refreshLockWhileAcquired(e, i), [2]
                                                    }
                                                })
                                            })
                                        }, 1e3), [2]
                                    })
                                })
                            }, e.prototype.waitForSomethingToChange = function(n) {
                                return t(this, void 0, void 0, function() {
                                    return r(this, function(t) {
                                        switch (t.label) {
                                            case 0:
                                                return [4, new Promise(function(t) {
                                                    var r = !1,
                                                        i = Date.now(),
                                                        o = !1;

                                                    function a() {
                                                        if (o || (window.removeEventListener("storage", a), e.removeFromWaiting(a), clearTimeout(s), o = !0), !r) {
                                                            r = !0;
                                                            var n = 50 - (Date.now() - i);
                                                            n > 0 ? setTimeout(t, n) : t(null)
                                                        }
                                                    }
                                                    window.addEventListener("storage", a), e.addToWaiting(a);
                                                    var s = setTimeout(a, Math.max(0, n - Date.now()))
                                                })];
                                            case 1:
                                                return t.sent(), [2]
                                        }
                                    })
                                })
                            }, e.addToWaiting = function(t) {
                                this.removeFromWaiting(t), void 0 !== e.waiters && e.waiters.push(t)
                            }, e.removeFromWaiting = function(t) {
                                void 0 !== e.waiters && (e.waiters = e.waiters.filter(function(e) {
                                    return e !== t
                                }))
                            }, e.notifyWaiters = function() {
                                void 0 !== e.waiters && e.waiters.slice().forEach(function(e) {
                                    return e()
                                })
                            }, e.prototype.releaseLock = function(e) {
                                return t(this, void 0, void 0, function() {
                                    return r(this, function(t) {
                                        switch (t.label) {
                                            case 0:
                                                return [4, this.releaseLock__private__(e)];
                                            case 1:
                                                return [2, t.sent()]
                                        }
                                    })
                                })
                            }, e.prototype.releaseLock__private__ = function(a) {
                                return t(this, void 0, void 0, function() {
                                    var t, s, c, l;
                                    return r(this, function(r) {
                                        switch (r.label) {
                                            case 0:
                                                if (t = void 0 === this.storageHandler ? o : this.storageHandler, s = i + "-" + a, null === (c = t.getItemSync(s))) return [2];
                                                if ((l = JSON.parse(c)).id !== this.id) return [3, 2];
                                                return [4, n.default().lock(l.iat)];
                                            case 1:
                                                r.sent(), this.acquiredIatSet.delete(l.iat), t.removeItemSync(s), n.default().unlock(l.iat), e.notifyWaiters(), r.label = 2;
                                            case 2:
                                                return [2]
                                        }
                                    })
                                })
                            }, e.lockCorrector = function(t) {
                                for (var r = Date.now() - 5e3, n = [], o = 0;;) {
                                    var a = t.keySync(o);
                                    if (null === a) break;
                                    n.push(a), o++
                                }
                                for (var s = !1, c = 0; c < n.length; c++) {
                                    var l = n[c];
                                    if (l.includes(i)) {
                                        var u = t.getItemSync(l);
                                        if (null !== u) {
                                            var d = JSON.parse(u);
                                            (void 0 === d.timeRefreshed && d.timeAcquired < r || void 0 !== d.timeRefreshed && d.timeRefreshed < r) && (t.removeItemSync(l), s = !0)
                                        }
                                    }
                                }
                                s && e.notifyWaiters()
                            }, e.waiters = void 0, e
                        }()
                    }
                }),
                $ = I({
                    "node_modules/.pnpm/@wetransfer+native-message-exchange-js@0.0.54/node_modules/@wetransfer/native-message-exchange-js/dist/index.js"(e) {
                        var t = Object.create,
                            n = Object.defineProperty,
                            i = Object.getOwnPropertyDescriptor,
                            o = Object.getOwnPropertyNames,
                            a = Object.getPrototypeOf,
                            s = Object.prototype.hasOwnProperty,
                            c = e => n(e, "__esModule", {
                                value: !0
                            }),
                            l = (e, t) => function() {
                                return t || (0, e[Object.keys(e)[0]])((t = {
                                    exports: {}
                                }).exports, t), t.exports
                            },
                            u = e => ((e, t, r) => {
                                if (t && "object" == typeof t || "function" == typeof t)
                                    for (let a of o(t)) s.call(e, a) || "default" === a || n(e, a, {
                                        get: () => t[a],
                                        enumerable: !(r = i(t, a)) || r.enumerable
                                    });
                                return e
                            })(c(n(null != e ? t(a(e)) : {}, "default", e && e.__esModule && "default" in e ? {
                                get: () => e.default,
                                enumerable: !0
                            } : {
                                value: e,
                                enumerable: !0
                            })), e),
                            d = l({
                                "node_modules/lodash/_freeGlobal.js"(e, t) {
                                    t.exports = "object" == typeof r.g && r.g && r.g.Object === Object && r.g
                                }
                            }),
                            h = l({
                                "node_modules/lodash/_root.js"(e, t) {
                                    var r = d(),
                                        n = "object" == typeof self && self && self.Object === Object && self;
                                    t.exports = r || n || Function("return this")()
                                }
                            }),
                            f = l({
                                "node_modules/lodash/_Symbol.js"(e, t) {
                                    t.exports = h().Symbol
                                }
                            }),
                            p = l({
                                "node_modules/lodash/_getRawTag.js"(e, t) {
                                    var r = f(),
                                        n = Object.prototype,
                                        i = n.hasOwnProperty,
                                        o = n.toString,
                                        a = r ? r.toStringTag : void 0;
                                    t.exports = function(e) {
                                        var t = i.call(e, a),
                                            r = e[a];
                                        try {
                                            e[a] = void 0;
                                            var n = !0
                                        } catch (e) {}
                                        var s = o.call(e);
                                        return n && (t ? e[a] = r : delete e[a]), s
                                    }
                                }
                            }),
                            y = l({
                                "node_modules/lodash/_objectToString.js"(e, t) {
                                    var r = Object.prototype.toString;
                                    t.exports = function(e) {
                                        return r.call(e)
                                    }
                                }
                            }),
                            m = l({
                                "node_modules/lodash/_baseGetTag.js"(e, t) {
                                    var r = f(),
                                        n = p(),
                                        i = y(),
                                        o = r ? r.toStringTag : void 0;
                                    t.exports = function(e) {
                                        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : o && o in Object(e) ? n(e) : i(e)
                                    }
                                }
                            }),
                            g = l({
                                "node_modules/lodash/isArray.js"(e, t) {
                                    t.exports = Array.isArray
                                }
                            }),
                            w = l({
                                "node_modules/lodash/isObjectLike.js"(e, t) {
                                    t.exports = function(e) {
                                        return null != e && "object" == typeof e
                                    }
                                }
                            }),
                            v = l({
                                "node_modules/lodash/isString.js"(e, t) {
                                    var r = m(),
                                        n = g(),
                                        i = w();
                                    t.exports = function(e) {
                                        return "string" == typeof e || !n(e) && i(e) && "[object String]" == r(e)
                                    }
                                }
                            }),
                            b = l({
                                "node_modules/lodash/_overArg.js"(e, t) {
                                    t.exports = function(e, t) {
                                        return function(r) {
                                            return e(t(r))
                                        }
                                    }
                                }
                            }),
                            S = l({
                                "node_modules/lodash/_getPrototype.js"(e, t) {
                                    t.exports = b()(Object.getPrototypeOf, Object)
                                }
                            }),
                            E = l({
                                "node_modules/lodash/isPlainObject.js"(e, t) {
                                    var r = m(),
                                        n = S(),
                                        i = w(),
                                        o = Object.prototype,
                                        a = Function.prototype.toString,
                                        s = o.hasOwnProperty,
                                        c = a.call(Object);
                                    t.exports = function(e) {
                                        if (!i(e) || "[object Object]" != r(e)) return !1;
                                        var t = n(e);
                                        if (null === t) return !0;
                                        var o = s.call(t, "constructor") && t.constructor;
                                        return "function" == typeof o && o instanceof o && a.call(o) == c
                                    }
                                }
                            }),
                            k = l({
                                "node_modules/lodash/isUndefined.js"(e, t) {
                                    t.exports = function(e) {
                                        return void 0 === e
                                    }
                                }
                            }),
                            _ = {
                                NativeMessageExchange: () => D,
                                createErrorMessage: () => L,
                                createMessage: () => j,
                                isEM: () => O,
                                isError: () => C
                            };
                        for (var T in c(e), _) n(e, T, {
                            get: _[T],
                            enumerable: !0
                        });
                        var A = u(v()),
                            R = u(E());

                        function O(e) {
                            return (0, R.default)(e) && (0, A.default)(e.type) && Object.keys(e).every(P)
                        }

                        function C(e) {
                            return O(e) && !0 === e.error
                        }

                        function P(e) {
                            return ["type", "payload", "error", "meta", "txId"].indexOf(e) > -1
                        }
                        var x = console.log,
                            N = u(k()),
                            j = (e, t = {}) => {
                                function r({
                                    payload: n,
                                    meta: i,
                                    txId: o
                                } = {}) {
                                    let a = {
                                        ...t
                                    };
                                    return (0, N.default)(n) || (a.payload = n), (0, N.default)(a) || (a.meta = i), (0, N.default)(o) || (a.txId = o), a.type = e, a
                                }
                                return r.type = e, r
                            },
                            L = (e, t = {}) => {
                                function r({
                                    payload: n,
                                    meta: i,
                                    txId: o
                                } = {}) {
                                    let a = {
                                        ...t
                                    };
                                    return (0, N.default)(n) || (a.payload = n), (0, N.default)(a) || (a.meta = i), (0, N.default)(o) || (a.txId = o), a.type = e, a
                                }
                                return r.type = e, r
                            },
                            I = L("RESPONSE_TIMEOUT", {
                                payload: {
                                    errorCode: "native_message_exchange_response_timout",
                                    errorDescription: "No response received after sending a message"
                                }
                            }),
                            U = "native_message_exchange:message",
                            D = class {
                                static _nativeExchangeClient() {
                                    var e, t;
                                    let r = null == (t = null == (e = window.webkit) ? void 0 : e.messageHandlers) ? void 0 : t.NME_NATIVE_CLIENT;
                                    if (void 0 !== window.NME_NATIVE_CLIENT) return window.NME_NATIVE_CLIENT;
                                    if (void 0 !== r) return r;
                                    throw Error("No Native Client Registered")
                                }
                                static async sendMessageToNative(e) {
                                    return new Promise((t, r) => {
                                        if (!O(e)) throw x("sendMessageToNative: Invalid Message"), Error("Invalid Message");
                                        let n = Date.now().toString(),
                                            i = setTimeout(() => {
                                                r(I({
                                                    txId: n
                                                })), window.removeEventListener(U, o)
                                            }, 1e4),
                                            o = e => {
                                                let a = e.detail;
                                                a.txId === n && (x("exchangeMessageHandler:", JSON.stringify(a)), a.error ? r(a) : t(a), clearTimeout(i), window.removeEventListener(U, o))
                                            };
                                        window.addEventListener(U, o, !1), D._nativeExchangeClient().postMessage(JSON.stringify({
                                            ...e,
                                            txId: n
                                        }))
                                    })
                                }
                                static sendMessageToNativeSync(e) {
                                    if (!O(e)) throw x("sendMessageToNative: Invalid Message"), Error("Invalid Message");
                                    let t = Date.now().toString();
                                    D._nativeExchangeClient().postMessage(JSON.stringify({
                                        ...e,
                                        txId: t
                                    }))
                                }
                                static init() {
                                    window.NME_WEB_CLIENT = D
                                }
                                static postMessage(e) {
                                    x("postMessage:", e);
                                    let t = JSON.parse(e);
                                    if (!O(t)) throw x("postMessage: Invalid Message"), Error("Invalid Message");
                                    let r = new CustomEvent(U, {
                                        detail: t
                                    });
                                    window.dispatchEvent(r)
                                }
                            }
                    }
                }),
                V = {};
            U(V, {
                AuthenticationAdapter: () => nf,
                AuthenticationClient: () => no,
                LoginRequiredError: () => z,
                NativeAuthClientAdapter: () => nu,
                nativeAuthClientAdapter: () => nd,
                nativeAuthClientAdapterLoader: () => nh
            }), e.exports = D(C({}, "__esModule", {
                value: !0
            }), V);
            var z = class extends Error {
                constructor(e) {
                    super(null != e ? e : "Login required"), this.name = "LoginRequiredError"
                }
            };
            async function G(e) {
                let t = new TextEncoder().encode(e);
                return btoa(String.fromCharCode(...new Uint8Array(await crypto.subtle.digest("SHA-256", t)))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
            }
            async function Y() {
                let e = function() {
                        let e = new Uint8Array(32);
                        return crypto.getRandomValues(e), btoa(String.fromCharCode(...e)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
                    }(),
                    t = await G(e);
                return {
                    codeVerifier: e,
                    codeChallenge: t
                }
            }
            var X = class {
                static saveTransaction(e, t = this.TRANSACTION_KEY) {
                    sessionStorage.setItem(t, JSON.stringify(e))
                }
                static getTransaction(e = this.TRANSACTION_KEY) {
                    let t = sessionStorage.getItem(e);
                    if (!t) return null;
                    try {
                        return JSON.parse(t)
                    } catch {
                        return null
                    }
                }
                static clearTransaction(e = this.TRANSACTION_KEY) {
                    sessionStorage.removeItem(e)
                }
            };
            X.TRANSACTION_KEY = "auth_transaction";
            var Q = Symbol.for("constructDateFrom");

            function Z(e, t) {
                return "function" == typeof e ? e(t) : e && "object" == typeof e && Q in e ? e[Q](t) : e instanceof Date ? new e.constructor(t) : new Date(t)
            }

            function ee(e, t) {
                return Z(t || e, e)
            }

            function et(e, t, r) {
                var n;
                return n = 1e3 * t, Z((null == r ? void 0 : r.in) || e, +ee(e) + n)
            }

            function er(e, t) {
                return +ee(e) > +ee(t)
            }
            var en = "@wetransfer/auth:",
                ei = class {
                    constructor() {
                        this.memoryCache = new Map
                    }
                    set(e, t, r) {
                        let n = et(new Date, r).getTime();
                        this.memoryCache.set(e, {
                            data: t,
                            expiresAt: n
                        })
                    }
                    get(e) {
                        let t = this.memoryCache.get(e);
                        return t ? t.data : null
                    }
                    remove(e) {
                        this.memoryCache.delete(e)
                    }
                    clear() {
                        this.memoryCache.clear()
                    }
                    setTokens(e) {
                        let t = Math.max(0, Math.floor((e.expiresAt - Date.now()) / 1e3));
                        this.set(`${en}tokens`, e, t)
                    }
                    getTokens() {
                        let e = this.get(`${en}tokens`);
                        if (e) {
                            var t, r;
                            if (t = new Date, r = new Date(e.expiresAt), +ee(t) < +ee(r)) return e;
                            this.remove(`${en}tokens`)
                        }
                        let n = this.getAuth0Tokens();
                        if (n) {
                            let e = this.migrateAuth0Tokens(n.entry);
                            this.setTokens(e);
                            try {
                                this.getAuth0Keys().forEach(e => {
                                    localStorage.removeItem(e)
                                })
                            } catch {}
                            return e
                        }
                        return null
                    }
                    removeTokens() {
                        this.remove(`${en}tokens`)
                    }
                    clearTokens() {
                        this.removeTokens()
                    }
                    getLegacyRefreshToken() {
                        var e;
                        try {
                            let t = localStorage.getItem(`${en}tokens`);
                            if (!t) return null;
                            let r = JSON.parse(t);
                            if (null == (e = null == r ? void 0 : r.data) ? void 0 : e.refresh_token) return r.data.refresh_token;
                            return null
                        } catch {
                            return null
                        }
                    }
                    clearLegacyRefreshToken() {
                        try {
                            localStorage.removeItem(`${en}tokens`)
                        } catch {}
                    }
                    getAuth0Keys() {
                        try {
                            return Object.keys(localStorage).filter(e => e.startsWith("@@auth0spajs@@"))
                        } catch {
                            return []
                        }
                    }
                    getAuth0Tokens() {
                        try {
                            let r = this.getAuth0Keys();
                            if (0 === r.length) return null;
                            for (let n of r) try {
                                var e, t;
                                let r = localStorage.getItem(n);
                                if (!r) continue;
                                let i = JSON.parse(r);
                                if (!i.body || !i.body.access_token) continue;
                                if (e = new Date, t = new Date(1e3 * i.expiresAt), +ee(e) < +ee(t)) return {
                                    key: n,
                                    entry: i
                                };
                                localStorage.removeItem(n)
                            } catch {}
                            return null
                        } catch {
                            return null
                        }
                    }
                    migrateAuth0Tokens(e) {
                        let t = {
                            access_token: e.body.access_token,
                            token_type: e.body.token_type,
                            expiresAt: e.expiresAt
                        };
                        return e.body.id_token && (t.id_token = e.body.id_token), e.body.scope && (t.scope = e.body.scope), t
                    }
                },
                eo = new TextEncoder,
                ea = new TextDecoder;

            function es(e) {
                if (Uint8Array.fromBase64) return Uint8Array.fromBase64("string" == typeof e ? e : ea.decode(e), {
                    alphabet: "base64url"
                });
                let t = e;
                t instanceof Uint8Array && (t = ea.decode(t)), t = t.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "");
                try {
                    var r = t;
                    if (Uint8Array.fromBase64) return Uint8Array.fromBase64(r);
                    let e = atob(r),
                        n = new Uint8Array(e.length);
                    for (let t = 0; t < e.length; t++) n[t] = e.charCodeAt(t);
                    return n
                } catch {
                    throw TypeError("The input to be decoded is not correctly encoded.")
                }
            }
            var ec = class extends Error {
                constructor(e, t) {
                    var r;
                    super(e, t), M(this, "code", "ERR_JOSE_GENERIC"), this.name = this.constructor.name, null == (r = Error.captureStackTrace) || r.call(Error, this, this.constructor)
                }
            };
            M(ec, "code", "ERR_JOSE_GENERIC");
            var el = class extends ec {
                constructor(e, t, r = "unspecified", n = "unspecified") {
                    super(e, {
                        cause: {
                            claim: r,
                            reason: n,
                            payload: t
                        }
                    }), M(this, "code", "ERR_JWT_CLAIM_VALIDATION_FAILED"), M(this, "claim"), M(this, "reason"), M(this, "payload"), this.claim = r, this.reason = n, this.payload = t
                }
            };
            M(el, "code", "ERR_JWT_CLAIM_VALIDATION_FAILED");
            var eu = class extends ec {
                constructor(e, t, r = "unspecified", n = "unspecified") {
                    super(e, {
                        cause: {
                            claim: r,
                            reason: n,
                            payload: t
                        }
                    }), M(this, "code", "ERR_JWT_EXPIRED"), M(this, "claim"), M(this, "reason"), M(this, "payload"), this.claim = r, this.reason = n, this.payload = t
                }
            };
            M(eu, "code", "ERR_JWT_EXPIRED");
            var ed = class extends ec {
                constructor() {
                    super(...arguments), M(this, "code", "ERR_JOSE_ALG_NOT_ALLOWED")
                }
            };
            M(ed, "code", "ERR_JOSE_ALG_NOT_ALLOWED");
            var eh = class extends ec {
                constructor() {
                    super(...arguments), M(this, "code", "ERR_JOSE_NOT_SUPPORTED")
                }
            };
            M(eh, "code", "ERR_JOSE_NOT_SUPPORTED");
            var ef = class extends ec {
                constructor() {
                    super(...arguments), M(this, "code", "ERR_JWS_INVALID")
                }
            };
            M(ef, "code", "ERR_JWS_INVALID");
            var ep = class extends ec {
                constructor() {
                    super(...arguments), M(this, "code", "ERR_JWT_INVALID")
                }
            };
            M(ep, "code", "ERR_JWT_INVALID");
            var ey = class extends ec {
                constructor() {
                    super(...arguments), M(this, "code", "ERR_JWKS_INVALID")
                }
            };
            M(ey, "code", "ERR_JWKS_INVALID");
            var em = class extends ec {
                constructor(e = "no applicable key found in the JSON Web Key Set", t) {
                    super(e, t), M(this, "code", "ERR_JWKS_NO_MATCHING_KEY")
                }
            };
            M(em, "code", "ERR_JWKS_NO_MATCHING_KEY");
            var eg = class extends(c = ec, s = Symbol.asyncIterator, c) {
                constructor(e = "multiple matching keys found in the JSON Web Key Set", t) {
                    super(e, t), M(this, s), M(this, "code", "ERR_JWKS_MULTIPLE_MATCHING_KEYS")
                }
            };
            M(eg, "code", "ERR_JWKS_MULTIPLE_MATCHING_KEYS");
            var ew = class extends ec {
                constructor(e = "request timed out", t) {
                    super(e, t), M(this, "code", "ERR_JWKS_TIMEOUT")
                }
            };
            M(ew, "code", "ERR_JWKS_TIMEOUT");
            var ev = class extends ec {
                constructor(e = "signature verification failed", t) {
                    super(e, t), M(this, "code", "ERR_JWS_SIGNATURE_VERIFICATION_FAILED")
                }
            };

            function eb(e, t = "algorithm.name") {
                return TypeError(`CryptoKey does not support this operation, its ${t} must be ${e}`)
            }

            function eS(e, t) {
                return e.name === t
            }

            function eE(e) {
                return parseInt(e.name.slice(4), 10)
            }

            function ek(e, t, ...r) {
                var n;
                if ((r = r.filter(Boolean)).length > 2) {
                    let t = r.pop();
                    e += `one of type ${r.join(", ")}, or ${t}.`
                } else 2 === r.length ? e += `one of type ${r[0]} or ${r[1]}.` : e += `of type ${r[0]}.`;
                return null == t ? e += ` Received ${t}` : "function" == typeof t && t.name ? e += ` Received function ${t.name}` : "object" == typeof t && null != t && (null == (n = t.constructor) ? void 0 : n.name) && (e += ` Received an instance of ${t.constructor.name}`), e
            }

            function e_(e, t, ...r) {
                return ek(`Key for the ${e} algorithm must be `, t, ...r)
            }

            function eT(e) {
                return (null == e ? void 0 : e[Symbol.toStringTag]) === "CryptoKey"
            }

            function eA(e) {
                return (null == e ? void 0 : e[Symbol.toStringTag]) === "KeyObject"
            }
            M(ev, "code", "ERR_JWS_SIGNATURE_VERIFICATION_FAILED");
            var eR = e => eT(e) || eA(e),
                eO = e => {
                    if (! function(e) {
                            return "object" == typeof e && null !== e
                        }(e) || "[object Object]" !== Object.prototype.toString.call(e)) return !1;
                    if (null === Object.getPrototypeOf(e)) return !0;
                    let t = e;
                    for (; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
                    return Object.getPrototypeOf(e) === t
                },
                eC = async e => {
                    var t, r;
                    if (!e.alg) throw TypeError('"alg" argument is required when "jwk.alg" is not present');
                    let {
                        algorithm: n,
                        keyUsages: i
                    } = function(e) {
                        let t, r;
                        switch (e.kty) {
                            case "RSA":
                                switch (e.alg) {
                                    case "PS256":
                                    case "PS384":
                                    case "PS512":
                                        t = {
                                            name: "RSA-PSS",
                                            hash: `SHA-${e.alg.slice(-3)}`
                                        }, r = e.d ? ["sign"] : ["verify"];
                                        break;
                                    case "RS256":
                                    case "RS384":
                                    case "RS512":
                                        t = {
                                            name: "RSASSA-PKCS1-v1_5",
                                            hash: `SHA-${e.alg.slice(-3)}`
                                        }, r = e.d ? ["sign"] : ["verify"];
                                        break;
                                    case "RSA-OAEP":
                                    case "RSA-OAEP-256":
                                    case "RSA-OAEP-384":
                                    case "RSA-OAEP-512":
                                        t = {
                                            name: "RSA-OAEP",
                                            hash: `SHA-${parseInt(e.alg.slice(-3),10)||1}`
                                        }, r = e.d ? ["decrypt", "unwrapKey"] : ["encrypt", "wrapKey"];
                                        break;
                                    default:
                                        throw new eh('Invalid or unsupported JWK "alg" (Algorithm) Parameter value')
                                }
                                break;
                            case "EC":
                                switch (e.alg) {
                                    case "ES256":
                                        t = {
                                            name: "ECDSA",
                                            namedCurve: "P-256"
                                        }, r = e.d ? ["sign"] : ["verify"];
                                        break;
                                    case "ES384":
                                        t = {
                                            name: "ECDSA",
                                            namedCurve: "P-384"
                                        }, r = e.d ? ["sign"] : ["verify"];
                                        break;
                                    case "ES512":
                                        t = {
                                            name: "ECDSA",
                                            namedCurve: "P-521"
                                        }, r = e.d ? ["sign"] : ["verify"];
                                        break;
                                    case "ECDH-ES":
                                    case "ECDH-ES+A128KW":
                                    case "ECDH-ES+A192KW":
                                    case "ECDH-ES+A256KW":
                                        t = {
                                            name: "ECDH",
                                            namedCurve: e.crv
                                        }, r = e.d ? ["deriveBits"] : [];
                                        break;
                                    default:
                                        throw new eh('Invalid or unsupported JWK "alg" (Algorithm) Parameter value')
                                }
                                break;
                            case "OKP":
                                switch (e.alg) {
                                    case "Ed25519":
                                    case "EdDSA":
                                        t = {
                                            name: "Ed25519"
                                        }, r = e.d ? ["sign"] : ["verify"];
                                        break;
                                    case "ECDH-ES":
                                    case "ECDH-ES+A128KW":
                                    case "ECDH-ES+A192KW":
                                    case "ECDH-ES+A256KW":
                                        t = {
                                            name: e.crv
                                        }, r = e.d ? ["deriveBits"] : [];
                                        break;
                                    default:
                                        throw new eh('Invalid or unsupported JWK "alg" (Algorithm) Parameter value')
                                }
                                break;
                            default:
                                throw new eh('Invalid or unsupported JWK "kty" (Key Type) Parameter value')
                        }
                        return {
                            algorithm: t,
                            keyUsages: r
                        }
                    }(e), o = {
                        ...e
                    };
                    return delete o.alg, delete o.use, crypto.subtle.importKey("jwk", o, n, null != (t = e.ext) ? t : !e.d, null != (r = e.key_ops) ? r : i)
                };
            async function eP(e, t, r) {
                var n;
                let i;
                if (!eO(e)) throw TypeError("JWK must be an object");
                switch (null != t || (t = e.alg), null != i || (i = null != (n = null == r ? void 0 : r.extractable) ? n : e.ext), e.kty) {
                    case "oct":
                        if ("string" != typeof e.k || !e.k) throw TypeError('missing "k" (Key Value) Parameter value');
                        return es(e.k);
                    case "RSA":
                        if ("oth" in e && void 0 !== e.oth) throw new eh('RSA JWK "oth" (Other Primes Info) Parameter value is not supported');
                    case "EC":
                    case "OKP":
                        return eC({
                            ...e,
                            alg: t,
                            ext: i
                        });
                    default:
                        throw new eh('Unsupported "kty" (Key Type) Parameter value')
                }
            }

            function ex(e) {
                return eO(e) && "string" == typeof e.kty
            }
            var eN = async (e, t, r, n = !1) => {
                l || (l = new WeakMap);
                let i = l.get(e);
                if (null == i ? void 0 : i[r]) return i[r];
                let o = await eC({
                    ...t,
                    alg: r
                });
                return n && Object.freeze(e), i ? i[r] = o : l.set(e, {
                    [r]: o
                }), o
            }, ej = async (e, t) => {
                if (e instanceof Uint8Array || eT(e)) return e;
                if (eA(e)) {
                    if ("secret" === e.type) return e.export();
                    if ("toCryptoKey" in e && "function" == typeof e.toCryptoKey) try {
                        return ((e, t) => {
                            var r;
                            let n;
                            l || (l = new WeakMap);
                            let i = l.get(e);
                            if (null == i ? void 0 : i[t]) return i[t];
                            let o = "public" === e.type,
                                a = !!o;
                            if ("x25519" === e.asymmetricKeyType) {
                                switch (t) {
                                    case "ECDH-ES":
                                    case "ECDH-ES+A128KW":
                                    case "ECDH-ES+A192KW":
                                    case "ECDH-ES+A256KW":
                                        break;
                                    default:
                                        throw TypeError("given KeyObject instance cannot be used for this algorithm")
                                }
                                n = e.toCryptoKey(e.asymmetricKeyType, a, o ? [] : ["deriveBits"])
                            }
                            if ("ed25519" === e.asymmetricKeyType) {
                                if ("EdDSA" !== t && "Ed25519" !== t) throw TypeError("given KeyObject instance cannot be used for this algorithm");
                                n = e.toCryptoKey(e.asymmetricKeyType, a, [o ? "verify" : "sign"])
                            }
                            if ("rsa" === e.asymmetricKeyType) {
                                let r;
                                switch (t) {
                                    case "RSA-OAEP":
                                        r = "SHA-1";
                                        break;
                                    case "RS256":
                                    case "PS256":
                                    case "RSA-OAEP-256":
                                        r = "SHA-256";
                                        break;
                                    case "RS384":
                                    case "PS384":
                                    case "RSA-OAEP-384":
                                        r = "SHA-384";
                                        break;
                                    case "RS512":
                                    case "PS512":
                                    case "RSA-OAEP-512":
                                        r = "SHA-512";
                                        break;
                                    default:
                                        throw TypeError("given KeyObject instance cannot be used for this algorithm")
                                }
                                if (t.startsWith("RSA-OAEP")) return e.toCryptoKey({
                                    name: "RSA-OAEP",
                                    hash: r
                                }, a, o ? ["encrypt"] : ["decrypt"]);
                                n = e.toCryptoKey({
                                    name: t.startsWith("PS") ? "RSA-PSS" : "RSASSA-PKCS1-v1_5",
                                    hash: r
                                }, a, [o ? "verify" : "sign"])
                            }
                            if ("ec" === e.asymmetricKeyType) {
                                let i = new Map([
                                    ["prime256v1", "P-256"],
                                    ["secp384r1", "P-384"],
                                    ["secp521r1", "P-521"]
                                ]).get(null == (r = e.asymmetricKeyDetails) ? void 0 : r.namedCurve);
                                if (!i) throw TypeError("given KeyObject instance cannot be used for this algorithm");
                                "ES256" === t && "P-256" === i && (n = e.toCryptoKey({
                                    name: "ECDSA",
                                    namedCurve: i
                                }, a, [o ? "verify" : "sign"])), "ES384" === t && "P-384" === i && (n = e.toCryptoKey({
                                    name: "ECDSA",
                                    namedCurve: i
                                }, a, [o ? "verify" : "sign"])), "ES512" === t && "P-521" === i && (n = e.toCryptoKey({
                                    name: "ECDSA",
                                    namedCurve: i
                                }, a, [o ? "verify" : "sign"])), t.startsWith("ECDH-ES") && (n = e.toCryptoKey({
                                    name: "ECDH",
                                    namedCurve: i
                                }, a, o ? [] : ["deriveBits"]))
                            }
                            if (!n) throw TypeError("given KeyObject instance cannot be used for this algorithm");
                            return i ? i[t] = n : l.set(e, {
                                [t]: n
                            }), n
                        })(e, t)
                    } catch (e) {
                        if (e instanceof TypeError) throw e
                    }
                    let r = e.export({
                        format: "jwk"
                    });
                    return eN(e, r, t)
                }
                if (ex(e)) return e.k ? es(e.k) : eN(e, e, t, !0);
                throw Error("unreachable")
            }, eL = e => null == e ? void 0 : e[Symbol.toStringTag], eI = (e, t, r) => {
                var n, i;
                if (void 0 !== t.use) {
                    let e;
                    switch (r) {
                        case "sign":
                        case "verify":
                            e = "sig";
                            break;
                        case "encrypt":
                        case "decrypt":
                            e = "enc"
                    }
                    if (t.use !== e) throw TypeError(`Invalid key for this operation, its "use" must be "${e}" when present`)
                }
                if (void 0 !== t.alg && t.alg !== e) throw TypeError(`Invalid key for this operation, its "alg" must be "${e}" when present`);
                if (Array.isArray(t.key_ops)) {
                    let o;
                    switch (!0) {
                        case "sign" === r || "verify" === r:
                        case "dir" === e:
                        case e.includes("CBC-HS"):
                            o = r;
                            break;
                        case e.startsWith("PBES2"):
                            o = "deriveBits";
                            break;
                        case /^A\d{3}(?:GCM)?(?:KW)?$/.test(e):
                            o = !e.includes("GCM") && e.endsWith("KW") ? "encrypt" === r ? "wrapKey" : "unwrapKey" : r;
                            break;
                        case "encrypt" === r && e.startsWith("RSA"):
                            o = "wrapKey";
                            break;
                        case "decrypt" === r:
                            o = e.startsWith("RSA") ? "unwrapKey" : "deriveBits"
                    }
                    if (o && (null == (i = null == (n = t.key_ops) ? void 0 : n.includes) ? void 0 : i.call(n, o)) === !1) throw TypeError(`Invalid key for this operation, its "key_ops" must include "${o}" when present`)
                }
                return !0
            }, eU = async (e, t, r) => {
                if (t instanceof Uint8Array) {
                    if (!e.startsWith("HS")) throw TypeError(((e, ...t) => ek("Key must be ", e, ...t))(t, "CryptoKey", "KeyObject", "JSON Web Key"));
                    return crypto.subtle.importKey("raw", t, {
                        hash: `SHA-${e.slice(-3)}`,
                        name: "HMAC"
                    }, !1, [r])
                }
                return ! function(e, t, r) {
                    switch (t) {
                        case "HS256":
                        case "HS384":
                        case "HS512": {
                            if (!eS(e.algorithm, "HMAC")) throw eb("HMAC");
                            let r = parseInt(t.slice(2), 10);
                            if (eE(e.algorithm.hash) !== r) throw eb(`SHA-${r}`, "algorithm.hash");
                            break
                        }
                        case "RS256":
                        case "RS384":
                        case "RS512": {
                            if (!eS(e.algorithm, "RSASSA-PKCS1-v1_5")) throw eb("RSASSA-PKCS1-v1_5");
                            let r = parseInt(t.slice(2), 10);
                            if (eE(e.algorithm.hash) !== r) throw eb(`SHA-${r}`, "algorithm.hash");
                            break
                        }
                        case "PS256":
                        case "PS384":
                        case "PS512": {
                            if (!eS(e.algorithm, "RSA-PSS")) throw eb("RSA-PSS");
                            let r = parseInt(t.slice(2), 10);
                            if (eE(e.algorithm.hash) !== r) throw eb(`SHA-${r}`, "algorithm.hash");
                            break
                        }
                        case "Ed25519":
                        case "EdDSA":
                            if (!eS(e.algorithm, "Ed25519")) throw eb("Ed25519");
                            break;
                        case "ES256":
                        case "ES384":
                        case "ES512": {
                            if (!eS(e.algorithm, "ECDSA")) throw eb("ECDSA");
                            let r = function(e) {
                                switch (e) {
                                    case "ES256":
                                        return "P-256";
                                    case "ES384":
                                        return "P-384";
                                    case "ES512":
                                        return "P-521";
                                    default:
                                        throw Error("unreachable")
                                }
                            }(t);
                            if (e.algorithm.namedCurve !== r) throw eb(r, "algorithm.namedCurve");
                            break
                        }
                        default:
                            throw TypeError("CryptoKey does not support this operation")
                    }
                    if (r && !e.usages.includes(r)) throw TypeError(`CryptoKey does not support this operation, its usages must include ${r}.`)
                }(t, e, r), t
            }, eD = async (e, t, r, n) => {
                let i = await eU(e, t, "verify");
                ((e, t) => {
                    if (e.startsWith("RS") || e.startsWith("PS")) {
                        let {
                            modulusLength: r
                        } = t.algorithm;
                        if ("number" != typeof r || r < 2048) throw TypeError(`${e} requires key modulusLength to be 2048 bits or larger`)
                    }
                })(e, i);
                let o = ((e, t) => {
                    let r = `SHA-${e.slice(-3)}`;
                    switch (e) {
                        case "HS256":
                        case "HS384":
                        case "HS512":
                            return {
                                hash: r, name: "HMAC"
                            };
                        case "PS256":
                        case "PS384":
                        case "PS512":
                            return {
                                hash: r, name: "RSA-PSS", saltLength: parseInt(e.slice(-3), 10) >> 3
                            };
                        case "RS256":
                        case "RS384":
                        case "RS512":
                            return {
                                hash: r, name: "RSASSA-PKCS1-v1_5"
                            };
                        case "ES256":
                        case "ES384":
                        case "ES512":
                            return {
                                hash: r, name: "ECDSA", namedCurve: t.namedCurve
                            };
                        case "Ed25519":
                        case "EdDSA":
                            return {
                                name: "Ed25519"
                            };
                        default:
                            throw new eh(`alg ${e} is not supported either by JOSE or your javascript runtime`)
                    }
                })(e, i.algorithm);
                try {
                    return await crypto.subtle.verify(o, i, r, n)
                } catch {
                    return !1
                }
            };
            async function eW(e, t, r) {
                var n, i;
                let o, a;
                if (!eO(e)) throw new ef("Flattened JWS must be an object");
                if (void 0 === e.protected && void 0 === e.header) throw new ef('Flattened JWS must have either of the "protected" or "header" members');
                if (void 0 !== e.protected && "string" != typeof e.protected) throw new ef("JWS Protected Header incorrect type");
                if (void 0 === e.payload) throw new ef("JWS Payload missing");
                if ("string" != typeof e.signature) throw new ef("JWS Signature missing or incorrect type");
                if (void 0 !== e.header && !eO(e.header)) throw new ef("JWS Unprotected Header incorrect type");
                let s = {};
                if (e.protected) try {
                    let t = es(e.protected);
                    s = JSON.parse(ea.decode(t))
                } catch {
                    throw new ef("JWS Protected Header is invalid")
                }
                if (!((...e) => {
                        let t, r = e.filter(Boolean);
                        if (0 === r.length || 1 === r.length) return !0;
                        for (let e of r) {
                            let r = Object.keys(e);
                            if (!t || 0 === t.size) {
                                t = new Set(r);
                                continue
                            }
                            for (let e of r) {
                                if (t.has(e)) return !1;
                                t.add(e)
                            }
                        }
                        return !0
                    })(s, e.header)) throw new ef("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
                let c = {
                        ...s,
                        ...e.header
                    },
                    l = ((e, t, r, n, i) => {
                        let o;
                        if (void 0 !== i.crit && (null == n ? void 0 : n.crit) === void 0) throw new e('"crit" (Critical) Header Parameter MUST be integrity protected');
                        if (!n || void 0 === n.crit) return new Set;
                        if (!Array.isArray(n.crit) || 0 === n.crit.length || n.crit.some(e => "string" != typeof e || 0 === e.length)) throw new e('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
                        for (let a of (o = void 0 !== r ? new Map([...Object.entries(r), ...t.entries()]) : t, n.crit)) {
                            if (!o.has(a)) throw new eh(`Extension Header Parameter "${a}" is not recognized`);
                            if (void 0 === i[a]) throw new e(`Extension Header Parameter "${a}" is missing`);
                            if (o.get(a) && void 0 === n[a]) throw new e(`Extension Header Parameter "${a}" MUST be integrity protected`)
                        }
                        return new Set(n.crit)
                    })(ef, new Map([
                        ["b64", !0]
                    ]), null == r ? void 0 : r.crit, s, c),
                    u = !0;
                if (l.has("b64") && "boolean" != typeof(u = s.b64)) throw new ef('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
                let {
                    alg: d
                } = c;
                if ("string" != typeof d || !d) throw new ef('JWS "alg" (Algorithm) Header Parameter missing or invalid');
                let h = r && ((e, t) => {
                    if (void 0 !== t && (!Array.isArray(t) || t.some(e => "string" != typeof e))) throw TypeError(`"${e}" option must be an array of strings`);
                    if (t) return new Set(t)
                })("algorithms", r.algorithms);
                if (h && !h.has(d)) throw new ed('"alg" (Algorithm) Header Parameter value not allowed');
                if (u) {
                    if ("string" != typeof e.payload) throw new ef("JWS Payload must be a string")
                } else if ("string" != typeof e.payload && !(e.payload instanceof Uint8Array)) throw new ef("JWS Payload must be a string or an Uint8Array instance");
                let f = !1;
                "function" == typeof t && (t = await t(s, e), f = !0), i = t, d.startsWith("HS") || "dir" === d || d.startsWith("PBES2") || /^A(?:128|192|256)(?:GCM)?(?:KW)?$/.test(d) || /^A(?:128|192|256)CBC-HS(?:256|384|512)$/.test(d) ? ((e, t, r) => {
                    if (!(t instanceof Uint8Array)) {
                        if (ex(t)) {
                            var n;
                            if ("oct" === (n = t).kty && "string" == typeof n.k && eI(e, t, r)) return;
                            throw TypeError('JSON Web Key for symmetric algorithms must have JWK "kty" (Key Type) equal to "oct" and the JWK "k" (Key Value) present')
                        }
                        if (!eR(t)) throw TypeError(e_(e, t, "CryptoKey", "KeyObject", "JSON Web Key", "Uint8Array"));
                        if ("secret" !== t.type) throw TypeError(`${eL(t)} instances for symmetric algorithms must be of type "secret"`)
                    }
                })(d, i, "verify") : ((e, t, r) => {
                    var n, i;
                    if (ex(t)) switch (r) {
                        case "decrypt":
                        case "sign":
                            if ("oct" !== (n = t).kty && "string" == typeof n.d && eI(e, t, r)) return;
                            throw TypeError("JSON Web Key for this operation be a private JWK");
                        case "encrypt":
                        case "verify":
                            if ("oct" !== (i = t).kty && void 0 === i.d && eI(e, t, r)) return;
                            throw TypeError("JSON Web Key for this operation be a public JWK")
                    }
                    if (!eR(t)) throw TypeError(e_(e, t, "CryptoKey", "KeyObject", "JSON Web Key"));
                    if ("secret" === t.type) throw TypeError(`${eL(t)} instances for asymmetric algorithms must not be of type "secret"`);
                    if ("public" === t.type) switch (r) {
                        case "sign":
                            throw TypeError(`${eL(t)} instances for asymmetric algorithm signing must be of type "private"`);
                        case "decrypt":
                            throw TypeError(`${eL(t)} instances for asymmetric algorithm decryption must be of type "private"`)
                    }
                    if ("private" === t.type) switch (r) {
                        case "verify":
                            throw TypeError(`${eL(t)} instances for asymmetric algorithm verifying must be of type "public"`);
                        case "encrypt":
                            throw TypeError(`${eL(t)} instances for asymmetric algorithm encryption must be of type "public"`)
                    }
                })(d, i, "verify");
                let p = function(...e) {
                    let t = new Uint8Array(e.reduce((e, {
                            length: t
                        }) => e + t, 0)),
                        r = 0;
                    for (let n of e) t.set(n, r), r += n.length;
                    return t
                }(eo.encode(null != (n = e.protected) ? n : ""), eo.encode("."), "string" == typeof e.payload ? eo.encode(e.payload) : e.payload);
                try {
                    o = es(e.signature)
                } catch {
                    throw new ef("Failed to base64url decode the signature")
                }
                let y = await ej(t, d);
                if (!await eD(d, y, o, p)) throw new ev;
                if (u) try {
                    a = es(e.payload)
                } catch {
                    throw new ef("Failed to base64url decode the payload")
                } else a = "string" == typeof e.payload ? eo.encode(e.payload) : e.payload;
                let m = {
                    payload: a
                };
                return (void 0 !== e.protected && (m.protectedHeader = s), void 0 !== e.header && (m.unprotectedHeader = e.header), f) ? {
                    ...m,
                    key: y
                } : m
            }
            async function eM(e, t, r) {
                if (e instanceof Uint8Array && (e = ea.decode(e)), "string" != typeof e) throw new ef("Compact JWS must be a string or Uint8Array");
                let {
                    0: n,
                    1: i,
                    2: o,
                    length: a
                } = e.split(".");
                if (3 !== a) throw new ef("Invalid Compact JWS");
                let s = await eW({
                        payload: i,
                        protected: n,
                        signature: o
                    }, t, r),
                    c = {
                        payload: s.payload,
                        protectedHeader: s.protectedHeader
                    };
                return "function" == typeof t ? {
                    ...c,
                    key: s.key
                } : c
            }
            var eK = /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i,
                eJ = e => {
                    let t, r = eK.exec(e);
                    if (!r || r[4] && r[1]) throw TypeError("Invalid time period format");
                    let n = parseFloat(r[2]);
                    switch (r[3].toLowerCase()) {
                        case "sec":
                        case "secs":
                        case "second":
                        case "seconds":
                        case "s":
                            t = Math.round(n);
                            break;
                        case "minute":
                        case "minutes":
                        case "min":
                        case "mins":
                        case "m":
                            t = Math.round(60 * n);
                            break;
                        case "hour":
                        case "hours":
                        case "hr":
                        case "hrs":
                        case "h":
                            t = Math.round(3600 * n);
                            break;
                        case "day":
                        case "days":
                        case "d":
                            t = Math.round(86400 * n);
                            break;
                        case "week":
                        case "weeks":
                        case "w":
                            t = Math.round(604800 * n);
                            break;
                        default:
                            t = Math.round(0x1e187e0 * n)
                    }
                    return "-" === r[1] || "ago" === r[4] ? -t : t
                },
                eH = e => e.includes("/") ? e.toLowerCase() : `application/${e.toLowerCase()}`;
            async function eF(e, t, r) {
                var n;
                let i = await eM(e, t, r);
                if ((null == (n = i.protectedHeader.crit) ? void 0 : n.includes("b64")) && !1 === i.protectedHeader.b64) throw new ep("JWTs MUST NOT use unencoded payload");
                let o = {
                    payload: function(e, t, r = {}) {
                        var n, i;
                        let o, a;
                        try {
                            o = JSON.parse(ea.decode(t))
                        } catch {}
                        if (!eO(o)) throw new ep("JWT Claims Set must be a top-level JSON object");
                        let {
                            typ: s
                        } = r;
                        if (s && ("string" != typeof e.typ || eH(e.typ) !== eH(s))) throw new el('unexpected "typ" JWT header value', o, "typ", "check_failed");
                        let {
                            requiredClaims: c = [],
                            issuer: l,
                            subject: u,
                            audience: d,
                            maxTokenAge: h
                        } = r, f = [...c];
                        for (let e of (void 0 !== h && f.push("iat"), void 0 !== d && f.push("aud"), void 0 !== u && f.push("sub"), void 0 !== l && f.push("iss"), new Set(f.reverse())))
                            if (!(e in o)) throw new el(`missing required "${e}" claim`, o, e, "missing");
                        if (l && !(Array.isArray(l) ? l : [l]).includes(o.iss)) throw new el('unexpected "iss" claim value', o, "iss", "check_failed");
                        if (u && o.sub !== u) throw new el('unexpected "sub" claim value', o, "sub", "check_failed");
                        if (d && (n = o.aud, i = "string" == typeof d ? [d] : d, "string" == typeof n ? !i.includes(n) : !(Array.isArray(n) && i.some(Set.prototype.has.bind(new Set(n)))))) throw new el('unexpected "aud" claim value', o, "aud", "check_failed");
                        switch (typeof r.clockTolerance) {
                            case "string":
                                a = eJ(r.clockTolerance);
                                break;
                            case "number":
                                a = r.clockTolerance;
                                break;
                            case "undefined":
                                a = 0;
                                break;
                            default:
                                throw TypeError("Invalid clockTolerance option type")
                        }
                        let {
                            currentDate: p
                        } = r, y = Math.floor((p || new Date).getTime() / 1e3);
                        if ((void 0 !== o.iat || h) && "number" != typeof o.iat) throw new el('"iat" claim must be a number', o, "iat", "invalid");
                        if (void 0 !== o.nbf) {
                            if ("number" != typeof o.nbf) throw new el('"nbf" claim must be a number', o, "nbf", "invalid");
                            if (o.nbf > y + a) throw new el('"nbf" claim timestamp check failed', o, "nbf", "check_failed")
                        }
                        if (void 0 !== o.exp) {
                            if ("number" != typeof o.exp) throw new el('"exp" claim must be a number', o, "exp", "invalid");
                            if (o.exp <= y - a) throw new eu('"exp" claim timestamp check failed', o, "exp", "check_failed")
                        }
                        if (h) {
                            let e = y - o.iat;
                            if (e - a > ("number" == typeof h ? h : eJ(h))) throw new eu('"iat" claim timestamp check failed (too far in the past)', o, "iat", "check_failed");
                            if (e < 0 - a) throw new el('"iat" claim timestamp check failed (it should be in the past)', o, "iat", "check_failed")
                        }
                        return o
                    }(i.protectedHeader, i.payload, r),
                    protectedHeader: i.protectedHeader
                };
                return "function" == typeof t ? {
                    ...o,
                    key: i.key
                } : o
            }

            function eq(e) {
                return eO(e)
            }
            var eB = class {
                constructor(e) {
                    if (H(this, u), H(this, d, new WeakMap), ! function(e) {
                            return e && "object" == typeof e && Array.isArray(e.keys) && e.keys.every(eq)
                        }(e)) throw new ey("JSON Web Key Set malformed");
                    F(this, u, structuredClone(e))
                }
                jwks() {
                    return J(this, u)
                }
                async getKey(e, t) {
                    let {
                        alg: r,
                        kid: n
                    } = {
                        ...e,
                        ...null == t ? void 0 : t.header
                    }, i = function(e) {
                        switch ("string" == typeof e && e.slice(0, 2)) {
                            case "RS":
                            case "PS":
                                return "RSA";
                            case "ES":
                                return "EC";
                            case "Ed":
                                return "OKP";
                            default:
                                throw new eh('Unsupported "alg" value for a JSON Web Key Set')
                        }
                    }(r), o = J(this, u).keys.filter(e => {
                        let t = i === e.kty;
                        if (t && "string" == typeof n && (t = n === e.kid), t && "string" == typeof e.alg && (t = r === e.alg), t && "string" == typeof e.use && (t = "sig" === e.use), t && Array.isArray(e.key_ops) && (t = e.key_ops.includes("verify")), t) switch (r) {
                            case "ES256":
                                t = "P-256" === e.crv;
                                break;
                            case "ES384":
                                t = "P-384" === e.crv;
                                break;
                            case "ES512":
                                t = "P-521" === e.crv;
                                break;
                            case "Ed25519":
                            case "EdDSA":
                                t = "Ed25519" === e.crv
                        }
                        return t
                    }), {
                        0: a,
                        length: s
                    } = o;
                    if (0 === s) throw new em;
                    if (1 !== s) {
                        let e = new eg,
                            t = J(this, d);
                        throw e[Symbol.asyncIterator] = async function*() {
                            for (let e of o) try {
                                yield await e$(t, e, r)
                            } catch {}
                        }, e
                    }
                    return e$(J(this, d), a, r)
                }
            };
            async function e$(e, t, r) {
                let n = e.get(t) || e.set(t, {}).get(t);
                if (void 0 === n[r]) {
                    let e = await eP({
                        ...t,
                        ext: !0
                    }, r);
                    if (e instanceof Uint8Array || "public" !== e.type) throw new ey("JSON Web Key Set members must be public keys");
                    n[r] = e
                }
                return n[r]
            }

            function eV(e) {
                let t = new eB(e),
                    r = async (e, r) => t.getKey(e, r);
                return Object.defineProperties(r, {
                    jwks: {
                        value: () => structuredClone(t.jwks()),
                        enumerable: !1,
                        configurable: !1,
                        writable: !1
                    }
                }), r
            }
            u = new WeakMap, d = new WeakMap, "undefined" != typeof navigator && (null == (p = null == (f = navigator.userAgent) ? void 0 : f.startsWith) ? void 0 : p.call(f, "Mozilla/5.0 ")) || (h = "jose/v6.0.11");
            var ez = Symbol();
            async function eG(e, t, r, n = fetch) {
                let i = await n(e, {
                    method: "GET",
                    signal: r,
                    redirect: "manual",
                    headers: t
                }).catch(e => {
                    if ("TimeoutError" === e.name) throw new ew;
                    throw e
                });
                if (200 !== i.status) throw new ec("Expected 200 OK from the JSON Web Key Set HTTP response");
                try {
                    return await i.json()
                } catch {
                    throw new ec("Failed to parse the JSON Web Key Set HTTP response as JSON")
                }
            }
            var eY = Symbol(),
                eX = class {
                    constructor(e, t) {
                        if (H(this, y), H(this, m), H(this, g), H(this, w), H(this, v), H(this, b), H(this, S), H(this, E), H(this, k), H(this, _), !(e instanceof URL)) throw TypeError("url must be an instance of URL");
                        F(this, y, new URL(e.href)), F(this, m, "number" == typeof(null == t ? void 0 : t.timeoutDuration) ? null == t ? void 0 : t.timeoutDuration : 5e3), F(this, g, "number" == typeof(null == t ? void 0 : t.cooldownDuration) ? null == t ? void 0 : t.cooldownDuration : 3e4), F(this, w, "number" == typeof(null == t ? void 0 : t.cacheMaxAge) ? null == t ? void 0 : t.cacheMaxAge : 6e5), F(this, S, new Headers(null == t ? void 0 : t.headers)), h && !J(this, S).has("User-Agent") && J(this, S).set("User-Agent", h), J(this, S).has("accept") || (J(this, S).set("accept", "application/json"), J(this, S).append("accept", "application/jwk-set+json")), F(this, E, null == t ? void 0 : t[ez]), (null == t ? void 0 : t[eY]) !== void 0 && (F(this, _, null == t ? void 0 : t[eY]), function(e, t) {
                            return !("object" != typeof e || null === e || !("uat" in e) || "number" != typeof e.uat || Date.now() - e.uat >= t) && "jwks" in e && !!eO(e.jwks) && !!Array.isArray(e.jwks.keys) && !!Array.prototype.every.call(e.jwks.keys, eO)
                        }(null == t ? void 0 : t[eY], J(this, w)) && (F(this, v, J(this, _).uat), F(this, k, eV(J(this, _).jwks))))
                    }
                    pendingFetch() {
                        return !!J(this, b)
                    }
                    coolingDown() {
                        return "number" == typeof J(this, v) && Date.now() < J(this, v) + J(this, g)
                    }
                    fresh() {
                        return "number" == typeof J(this, v) && Date.now() < J(this, v) + J(this, w)
                    }
                    jwks() {
                        var e;
                        return null == (e = J(this, k)) ? void 0 : e.jwks()
                    }
                    async getKey(e, t) {
                        J(this, k) && this.fresh() || await this.reload();
                        try {
                            return await J(this, k).call(this, e, t)
                        } catch (r) {
                            if (r instanceof em && !1 === this.coolingDown()) return await this.reload(), J(this, k).call(this, e, t);
                            throw r
                        }
                    }
                    async reload() {
                        J(this, b) && ("undefined" != typeof WebSocketPair || "undefined" != typeof navigator && "Cloudflare-Workers" === navigator.userAgent || "undefined" != typeof EdgeRuntime && "vercel" === EdgeRuntime) && F(this, b, void 0), J(this, b) || F(this, b, eG(J(this, y).href, J(this, S), AbortSignal.timeout(J(this, m)), J(this, E)).then(e => {
                            F(this, k, eV(e)), J(this, _) && (J(this, _).uat = Date.now(), J(this, _).jwks = e), F(this, v, Date.now()), F(this, b, void 0)
                        }).catch(e => {
                            throw F(this, b, void 0), e
                        })), await J(this, b)
                    }
                };

            function eQ(e) {
                let t, r;
                if ("string" != typeof e) throw new ep("JWTs must use Compact JWS serialization, JWT must be a string");
                let {
                    1: n,
                    length: i
                } = e.split(".");
                if (5 === i) throw new ep("Only JWTs using Compact JWS serialization can be decoded");
                if (3 !== i) throw new ep("Invalid JWT");
                if (!n) throw new ep("JWTs must contain a payload");
                try {
                    t = es(n)
                } catch {
                    throw new ep("Failed to base64url decode the payload")
                }
                try {
                    r = JSON.parse(ea.decode(t))
                } catch {
                    throw new ep("Failed to parse the decoded payload as JSON")
                }
                if (!eO(r)) throw new ep("Invalid JWT Claims Set");
                return r
            }

            function eZ(e) {
                let t = e.split(".");
                if (3 !== t.length) throw Error("Invalid JWT format");
                let r = JSON.parse(atob(t[0]));
                return {
                    header: r,
                    payload: eQ(e),
                    signature: t[2]
                }
            }
            async function e0(e, t) {
                let r = t.jwksUri || `${t.issuer}.well-known/jwks.json`;
                try {
                    let n = function(e, t) {
                            let r = new eX(e, void 0),
                                n = async (e, t) => r.getKey(e, t);
                            return Object.defineProperties(n, {
                                coolingDown: {
                                    get: () => r.coolingDown(),
                                    enumerable: !0,
                                    configurable: !1
                                },
                                fresh: {
                                    get: () => r.fresh(),
                                    enumerable: !0,
                                    configurable: !1
                                },
                                reload: {
                                    value: () => r.reload(),
                                    enumerable: !0,
                                    configurable: !1,
                                    writable: !1
                                },
                                reloading: {
                                    get: () => r.pendingFetch(),
                                    enumerable: !0,
                                    configurable: !1
                                },
                                jwks: {
                                    value: () => r.jwks(),
                                    enumerable: !0,
                                    configurable: !1,
                                    writable: !1
                                }
                            }), n
                        }(new URL(r)),
                        {
                            payload: i
                        } = await eF(e, n, {
                            issuer: t.issuer,
                            audience: t.audience,
                            algorithms: ["RS256"],
                            clockTolerance: "2 minutes",
                            requiredClaims: ["aud", "iat", "iss", "sub"]
                        });
                    if (t.nonce && i.nonce !== t.nonce) throw Error("Invalid nonce");
                    return i
                } catch (e) {
                    if (e instanceof Error) throw Error(`ID token verification failed: ${e.message}`);
                    throw Error("ID token verification failed")
                }
            }

            function e1(e, t) {
                return function() {
                    return e.apply(t, arguments)
                }
            }
            y = new WeakMap, m = new WeakMap, g = new WeakMap, w = new WeakMap, v = new WeakMap, b = new WeakMap, S = new WeakMap, E = new WeakMap, k = new WeakMap, _ = new WeakMap;
            var {
                toString: e2
            } = Object.prototype, {
                getPrototypeOf: e5
            } = Object, {
                iterator: e4,
                toStringTag: e3
            } = Symbol, e6 = (e => t => {
                let r = e2.call(t);
                return e[r] || (e[r] = r.slice(8, -1).toLowerCase())
            })(Object.create(null)), e8 = e => (e = e.toLowerCase(), t => e6(t) === e), e9 = e => t => typeof t === e, {
                isArray: e7
            } = Array, te = e9("undefined");

            function tt(e) {
                return null !== e && !te(e) && null !== e.constructor && !te(e.constructor) && ti(e.constructor.isBuffer) && e.constructor.isBuffer(e)
            }
            var tr = e8("ArrayBuffer"),
                tn = e9("string"),
                ti = e9("function"),
                to = e9("number"),
                ta = e => null !== e && "object" == typeof e,
                ts = e => {
                    if ("object" !== e6(e)) return !1;
                    let t = e5(e);
                    return (null === t || t === Object.prototype || null === Object.getPrototypeOf(t)) && !(e3 in e) && !(e4 in e)
                },
                tc = e8("Date"),
                tl = e8("File"),
                tu = e8("Blob"),
                td = e8("FileList"),
                th = e8("URLSearchParams"),
                [tf, tp, ty, tm] = ["ReadableStream", "Request", "Response", "Headers"].map(e8);

            function tg(e, t, {
                allOwnKeys: r = !1
            } = {}) {
                let n, i;
                if (null != e)
                    if ("object" != typeof e && (e = [e]), e7(e))
                        for (n = 0, i = e.length; n < i; n++) t.call(null, e[n], n, e);
                    else {
                        let i;
                        if (tt(e)) return;
                        let o = r ? Object.getOwnPropertyNames(e) : Object.keys(e),
                            a = o.length;
                        for (n = 0; n < a; n++) i = o[n], t.call(null, e[i], i, e)
                    }
            }

            function tw(e, t) {
                let r;
                if (tt(e)) return null;
                t = t.toLowerCase();
                let n = Object.keys(e),
                    i = n.length;
                for (; i-- > 0;)
                    if (t === (r = n[i]).toLowerCase()) return r;
                return null
            }
            var tv = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : r.g,
                tb = e => !te(e) && e !== tv,
                tS = (e => t => e && t instanceof e)("undefined" != typeof Uint8Array && e5(Uint8Array)),
                tE = e8("HTMLFormElement"),
                tk = (({
                    hasOwnProperty: e
                }) => (t, r) => e.call(t, r))(Object.prototype),
                t_ = e8("RegExp"),
                tT = (e, t) => {
                    let r = Object.getOwnPropertyDescriptors(e),
                        n = {};
                    tg(r, (r, i) => {
                        let o;
                        !1 !== (o = t(r, i, e)) && (n[i] = o || r)
                    }), Object.defineProperties(e, n)
                },
                tA = e8("AsyncFunction"),
                tR = (i = "function" == typeof setImmediate, o = ti(tv.postMessage), i ? setImmediate : o ? ((e, t) => (tv.addEventListener("message", ({
                    source: r,
                    data: n
                }) => {
                    r === tv && n === e && t.length && t.shift()()
                }, !1), r => {
                    t.push(r), tv.postMessage(e, "*")
                }))(`axios@${Math.random()}`, []) : e => setTimeout(e)),
                tO = "undefined" != typeof queueMicrotask ? queueMicrotask.bind(tv) : void 0 !== A && A.nextTick || tR,
                tC = {
                    isArray: e7,
                    isArrayBuffer: tr,
                    isBuffer: tt,
                    isFormData: e => {
                        let t;
                        return e && ("function" == typeof FormData && e instanceof FormData || ti(e.append) && ("formdata" === (t = e6(e)) || "object" === t && ti(e.toString) && "[object FormData]" === e.toString()))
                    },
                    isArrayBufferView: function(e) {
                        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && tr(e.buffer)
                    },
                    isString: tn,
                    isNumber: to,
                    isBoolean: e => !0 === e || !1 === e,
                    isObject: ta,
                    isPlainObject: ts,
                    isEmptyObject: e => {
                        if (!ta(e) || tt(e)) return !1;
                        try {
                            return 0 === Object.keys(e).length && Object.getPrototypeOf(e) === Object.prototype
                        } catch (e) {
                            return !1
                        }
                    },
                    isReadableStream: tf,
                    isRequest: tp,
                    isResponse: ty,
                    isHeaders: tm,
                    isUndefined: te,
                    isDate: tc,
                    isFile: tl,
                    isBlob: tu,
                    isRegExp: t_,
                    isFunction: ti,
                    isStream: e => ta(e) && ti(e.pipe),
                    isURLSearchParams: th,
                    isTypedArray: tS,
                    isFileList: td,
                    forEach: tg,
                    merge: function e() {
                        let {
                            caseless: t
                        } = tb(this) && this || {}, r = {}, n = (n, i) => {
                            let o = t && tw(r, i) || i;
                            ts(r[o]) && ts(n) ? r[o] = e(r[o], n) : ts(n) ? r[o] = e({}, n) : e7(n) ? r[o] = n.slice() : r[o] = n
                        };
                        for (let e = 0, t = arguments.length; e < t; e++) arguments[e] && tg(arguments[e], n);
                        return r
                    },
                    extend: (e, t, r, {
                        allOwnKeys: n
                    } = {}) => (tg(t, (t, n) => {
                        r && ti(t) ? e[n] = e1(t, r) : e[n] = t
                    }, {
                        allOwnKeys: n
                    }), e),
                    trim: e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
                    stripBOM: e => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
                    inherits: (e, t, r, n) => {
                        e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
                            value: t.prototype
                        }), r && Object.assign(e.prototype, r)
                    },
                    toFlatObject: (e, t, r, n) => {
                        let i, o, a, s = {};
                        if (t = t || {}, null == e) return t;
                        do {
                            for (o = (i = Object.getOwnPropertyNames(e)).length; o-- > 0;) a = i[o], (!n || n(a, e, t)) && !s[a] && (t[a] = e[a], s[a] = !0);
                            e = !1 !== r && e5(e)
                        } while (e && (!r || r(e, t)) && e !== Object.prototype);
                        return t
                    },
                    kindOf: e6,
                    kindOfTest: e8,
                    endsWith: (e, t, r) => {
                        e = String(e), (void 0 === r || r > e.length) && (r = e.length), r -= t.length;
                        let n = e.indexOf(t, r);
                        return -1 !== n && n === r
                    },
                    toArray: e => {
                        if (!e) return null;
                        if (e7(e)) return e;
                        let t = e.length;
                        if (!to(t)) return null;
                        let r = Array(t);
                        for (; t-- > 0;) r[t] = e[t];
                        return r
                    },
                    forEachEntry: (e, t) => {
                        let r, n = (e && e[e4]).call(e);
                        for (;
                            (r = n.next()) && !r.done;) {
                            let n = r.value;
                            t.call(e, n[0], n[1])
                        }
                    },
                    matchAll: (e, t) => {
                        let r, n = [];
                        for (; null !== (r = e.exec(t));) n.push(r);
                        return n
                    },
                    isHTMLForm: tE,
                    hasOwnProperty: tk,
                    hasOwnProp: tk,
                    reduceDescriptors: tT,
                    freezeMethods: e => {
                        tT(e, (t, r) => {
                            if (ti(e) && -1 !== ["arguments", "caller", "callee"].indexOf(r)) return !1;
                            if (ti(e[r])) {
                                if (t.enumerable = !1, "writable" in t) {
                                    t.writable = !1;
                                    return
                                }
                                t.set || (t.set = () => {
                                    throw Error("Can not rewrite read-only method '" + r + "'")
                                })
                            }
                        })
                    },
                    toObjectSet: (e, t) => {
                        let r = {};
                        return (e7(e) ? e : String(e).split(t)).forEach(e => {
                            r[e] = !0
                        }), r
                    },
                    toCamelCase: e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e, t, r) {
                        return t.toUpperCase() + r
                    }),
                    noop: () => {},
                    toFiniteNumber: (e, t) => null != e && Number.isFinite(e *= 1) ? e : t,
                    findKey: tw,
                    global: tv,
                    isContextDefined: tb,
                    isSpecCompliantForm: function(e) {
                        return !!(e && ti(e.append) && "FormData" === e[e3] && e[e4])
                    },
                    toJSONObject: e => {
                        let t = Array(10),
                            r = (e, n) => {
                                if (ta(e)) {
                                    if (t.indexOf(e) >= 0) return;
                                    if (tt(e)) return e;
                                    if (!("toJSON" in e)) {
                                        t[n] = e;
                                        let i = e7(e) ? [] : {};
                                        return tg(e, (e, t) => {
                                            let o = r(e, n + 1);
                                            te(o) || (i[t] = o)
                                        }), t[n] = void 0, i
                                    }
                                }
                                return e
                            };
                        return r(e, 0)
                    },
                    isAsyncFn: tA,
                    isThenable: e => e && (ta(e) || ti(e)) && ti(e.then) && ti(e.catch),
                    setImmediate: tR,
                    asap: tO,
                    isIterable: e => null != e && ti(e[e4])
                };

            function tP(e, t, r, n, i) {
                Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), i && (this.response = i, this.status = i.status ? i.status : null)
            }
            tC.inherits(tP, Error, {
                toJSON: function() {
                    return {
                        message: this.message,
                        name: this.name,
                        description: this.description,
                        number: this.number,
                        fileName: this.fileName,
                        lineNumber: this.lineNumber,
                        columnNumber: this.columnNumber,
                        stack: this.stack,
                        config: tC.toJSONObject(this.config),
                        code: this.code,
                        status: this.status
                    }
                }
            });
            var tx = tP.prototype,
                tN = {};

            function tj(e) {
                return tC.isPlainObject(e) || tC.isArray(e)
            }

            function tL(e) {
                return tC.endsWith(e, "[]") ? e.slice(0, -2) : e
            }

            function tI(e, t, r) {
                return e ? e.concat(t).map(function(e, t) {
                    return e = tL(e), !r && t ? "[" + e + "]" : e
                }).join(r ? "." : "") : t
            } ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
                tN[e] = {
                    value: e
                }
            }), Object.defineProperties(tP, tN), Object.defineProperty(tx, "isAxiosError", {
                value: !0
            }), tP.from = (e, t, r, n, i, o) => {
                let a = Object.create(tx);
                return tC.toFlatObject(e, a, function(e) {
                    return e !== Error.prototype
                }, e => "isAxiosError" !== e), tP.call(a, e.message, t, r, n, i), a.cause = e, a.name = e.name, o && Object.assign(a, o), a
            };
            var tU = tC.toFlatObject(tC, {}, null, function(e) {
                    return /^is[A-Z]/.test(e)
                }),
                tD = function(e, t, r) {
                    if (!tC.isObject(e)) throw TypeError("target must be an object");
                    t = t || new FormData;
                    let n = (r = tC.toFlatObject(r, {
                            metaTokens: !0,
                            dots: !1,
                            indexes: !1
                        }, !1, function(e, t) {
                            return !tC.isUndefined(t[e])
                        })).metaTokens,
                        i = r.visitor || l,
                        o = r.dots,
                        a = r.indexes,
                        s = (r.Blob || "undefined" != typeof Blob && Blob) && tC.isSpecCompliantForm(t);
                    if (!tC.isFunction(i)) throw TypeError("visitor must be a function");

                    function c(e) {
                        if (null === e) return "";
                        if (tC.isDate(e)) return e.toISOString();
                        if (tC.isBoolean(e)) return e.toString();
                        if (!s && tC.isBlob(e)) throw new tP("Blob is not supported. Use a Buffer instead.");
                        return tC.isArrayBuffer(e) || tC.isTypedArray(e) ? s && "function" == typeof Blob ? new Blob([e]) : R.from(e) : e
                    }

                    function l(e, r, i) {
                        let s = e;
                        if (e && !i && "object" == typeof e)
                            if (tC.endsWith(r, "{}")) r = n ? r : r.slice(0, -2), e = JSON.stringify(e);
                            else {
                                var l;
                                if (tC.isArray(e) && (l = e, tC.isArray(l) && !l.some(tj)) || (tC.isFileList(e) || tC.endsWith(r, "[]")) && (s = tC.toArray(e))) return r = tL(r), s.forEach(function(e, n) {
                                    tC.isUndefined(e) || null === e || t.append(!0 === a ? tI([r], n, o) : null === a ? r : r + "[]", c(e))
                                }), !1
                            } return !!tj(e) || (t.append(tI(i, r, o), c(e)), !1)
                    }
                    let u = [],
                        d = Object.assign(tU, {
                            defaultVisitor: l,
                            convertValue: c,
                            isVisitable: tj
                        });
                    if (!tC.isObject(e)) throw TypeError("data must be an object");
                    return ! function e(r, n) {
                        if (!tC.isUndefined(r)) {
                            if (-1 !== u.indexOf(r)) throw Error("Circular reference detected in " + n.join("."));
                            u.push(r), tC.forEach(r, function(r, o) {
                                !0 === (!(tC.isUndefined(r) || null === r) && i.call(t, r, tC.isString(o) ? o.trim() : o, n, d)) && e(r, n ? n.concat(o) : [o])
                            }), u.pop()
                        }
                    }(e), t
                };

            function tW(e) {
                let t = {
                    "!": "%21",
                    "'": "%27",
                    "(": "%28",
                    ")": "%29",
                    "~": "%7E",
                    "%20": "+",
                    "%00": "\0"
                };
                return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(e) {
                    return t[e]
                })
            }

            function tM(e, t) {
                this._pairs = [], e && tD(e, this, t)
            }
            var tK = tM.prototype;

            function tJ(e) {
                return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
            }

            function tH(e, t, r) {
                let n;
                if (!t) return e;
                let i = r && r.encode || tJ;
                tC.isFunction(r) && (r = {
                    serialize: r
                });
                let o = r && r.serialize;
                if (n = o ? o(t, r) : tC.isURLSearchParams(t) ? t.toString() : new tM(t, r).toString(i)) {
                    let t = e.indexOf("#"); - 1 !== t && (e = e.slice(0, t)), e += (-1 === e.indexOf("?") ? "?" : "&") + n
                }
                return e
            }
            tK.append = function(e, t) {
                this._pairs.push([e, t])
            }, tK.toString = function(e) {
                let t = e ? function(t) {
                    return e.call(this, t, tW)
                } : tW;
                return this._pairs.map(function(e) {
                    return t(e[0]) + "=" + t(e[1])
                }, "").join("&")
            };
            var tF = class {
                    constructor() {
                        this.handlers = []
                    }
                    use(e, t, r) {
                        return this.handlers.push({
                            fulfilled: e,
                            rejected: t,
                            synchronous: !!r && r.synchronous,
                            runWhen: r ? r.runWhen : null
                        }), this.handlers.length - 1
                    }
                    eject(e) {
                        this.handlers[e] && (this.handlers[e] = null)
                    }
                    clear() {
                        this.handlers && (this.handlers = [])
                    }
                    forEach(e) {
                        tC.forEach(this.handlers, function(t) {
                            null !== t && e(t)
                        })
                    }
                },
                tq = {
                    silentJSONParsing: !0,
                    forcedJSONParsing: !0,
                    clarifyTimeoutError: !1
                },
                tB = "undefined" != typeof URLSearchParams ? URLSearchParams : tM,
                t$ = "undefined" != typeof FormData ? FormData : null,
                tV = "undefined" != typeof Blob ? Blob : null,
                tz = {};
            U(tz, {
                hasBrowserEnv: () => tG,
                hasStandardBrowserEnv: () => tX,
                hasStandardBrowserWebWorkerEnv: () => tQ,
                navigator: () => tY,
                origin: () => tZ
            });
            var tG = "undefined" != typeof window && "undefined" != typeof document,
                tY = "object" == typeof navigator && navigator || void 0,
                tX = tG && (!tY || 0 > ["ReactNative", "NativeScript", "NS"].indexOf(tY.product)),
                tQ = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts,
                tZ = tG && window.location.href || "http://localhost",
                t0 = {
                    ...tz,
                    isBrowser: !0,
                    classes: {
                        URLSearchParams: tB,
                        FormData: t$,
                        Blob: tV
                    },
                    protocols: ["http", "https", "file", "blob", "url", "data"]
                },
                t1 = function(e) {
                    if (tC.isFormData(e) && tC.isFunction(e.entries)) {
                        let t = {};
                        return tC.forEachEntry(e, (e, r) => {
                            ! function e(t, r, n, i) {
                                let o = t[i++];
                                if ("__proto__" === o) return !0;
                                let a = Number.isFinite(+o),
                                    s = i >= t.length;
                                return (o = !o && tC.isArray(n) ? n.length : o, s) ? tC.hasOwnProp(n, o) ? n[o] = [n[o], r] : n[o] = r : (n[o] && tC.isObject(n[o]) || (n[o] = []), e(t, r, n[o], i) && tC.isArray(n[o]) && (n[o] = function(e) {
                                    let t, r, n = {},
                                        i = Object.keys(e),
                                        o = i.length;
                                    for (t = 0; t < o; t++) n[r = i[t]] = e[r];
                                    return n
                                }(n[o]))), !a
                            }(tC.matchAll(/\w+|\[(\w*)]/g, e).map(e => "[]" === e[0] ? "" : e[1] || e[0]), r, t, 0)
                        }), t
                    }
                    return null
                },
                t2 = {
                    transitional: tq,
                    adapter: ["xhr", "http", "fetch"],
                    transformRequest: [function(e, t) {
                        let r, n = t.getContentType() || "",
                            i = n.indexOf("application/json") > -1,
                            o = tC.isObject(e);
                        if (o && tC.isHTMLForm(e) && (e = new FormData(e)), tC.isFormData(e)) return i ? JSON.stringify(t1(e)) : e;
                        if (tC.isArrayBuffer(e) || tC.isBuffer(e) || tC.isStream(e) || tC.isFile(e) || tC.isBlob(e) || tC.isReadableStream(e)) return e;
                        if (tC.isArrayBufferView(e)) return e.buffer;
                        if (tC.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
                        if (o) {
                            if (n.indexOf("application/x-www-form-urlencoded") > -1) {
                                var a, s;
                                return (a = e, s = this.formSerializer, tD(a, new t0.classes.URLSearchParams, {
                                    visitor: function(e, t, r, n) {
                                        return t0.isNode && tC.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : n.defaultVisitor.apply(this, arguments)
                                    },
                                    ...s
                                })).toString()
                            }
                            if ((r = tC.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
                                let t = this.env && this.env.FormData;
                                return tD(r ? {
                                    "files[]": e
                                } : e, t && new t, this.formSerializer)
                            }
                        }
                        if (o || i) {
                            t.setContentType("application/json", !1);
                            var c = e;
                            if (tC.isString(c)) try {
                                return (0, JSON.parse)(c), tC.trim(c)
                            } catch (e) {
                                if ("SyntaxError" !== e.name) throw e
                            }
                            return (0, JSON.stringify)(c)
                        }
                        return e
                    }],
                    transformResponse: [function(e) {
                        let t = this.transitional || t2.transitional,
                            r = t && t.forcedJSONParsing,
                            n = "json" === this.responseType;
                        if (tC.isResponse(e) || tC.isReadableStream(e)) return e;
                        if (e && tC.isString(e) && (r && !this.responseType || n)) {
                            let r = t && t.silentJSONParsing;
                            try {
                                return JSON.parse(e)
                            } catch (e) {
                                if (!r && n) {
                                    if ("SyntaxError" === e.name) throw tP.from(e, tP.ERR_BAD_RESPONSE, this, null, this.response);
                                    throw e
                                }
                            }
                        }
                        return e
                    }],
                    timeout: 0,
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    maxContentLength: -1,
                    maxBodyLength: -1,
                    env: {
                        FormData: t0.classes.FormData,
                        Blob: t0.classes.Blob
                    },
                    validateStatus: function(e) {
                        return e >= 200 && e < 300
                    },
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*",
                            "Content-Type": void 0
                        }
                    }
                };
            tC.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
                t2.headers[e] = {}
            });
            var t5 = tC.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
                t4 = Symbol("internals");

            function t3(e) {
                return e && String(e).trim().toLowerCase()
            }

            function t6(e) {
                return !1 === e || null == e ? e : tC.isArray(e) ? e.map(t6) : String(e)
            }

            function t8(e, t, r, n, i) {
                if (tC.isFunction(n)) return n.call(this, t, r);
                if (i && (t = r), tC.isString(t)) {
                    if (tC.isString(n)) return -1 !== t.indexOf(n);
                    if (tC.isRegExp(n)) return n.test(t)
                }
            }
            var t9 = class {
                constructor(e) {
                    e && this.set(e)
                }
                set(e, t, r) {
                    let n = this;

                    function i(e, t, r) {
                        let i = t3(t);
                        if (!i) throw Error("header name must be a non-empty string");
                        let o = tC.findKey(n, i);
                        o && void 0 !== n[o] && !0 !== r && (void 0 !== r || !1 === n[o]) || (n[o || t] = t6(e))
                    }
                    let o = (e, t) => tC.forEach(e, (e, r) => i(e, r, t));
                    if (tC.isPlainObject(e) || e instanceof this.constructor) o(e, t);
                    else {
                        let n;
                        if (tC.isString(e) && (e = e.trim()) && (n = e, !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim()))) o((e => {
                            let t, r, n, i = {};
                            return e && e.split("\n").forEach(function(e) {
                                n = e.indexOf(":"), t = e.substring(0, n).trim().toLowerCase(), r = e.substring(n + 1).trim(), !t || i[t] && t5[t] || ("set-cookie" === t ? i[t] ? i[t].push(r) : i[t] = [r] : i[t] = i[t] ? i[t] + ", " + r : r)
                            }), i
                        })(e), t);
                        else if (tC.isObject(e) && tC.isIterable(e)) {
                            let r = {},
                                n, i;
                            for (let t of e) {
                                if (!tC.isArray(t)) throw TypeError("Object iterator must return a key-value pair");
                                r[i = t[0]] = (n = r[i]) ? tC.isArray(n) ? [...n, t[1]] : [n, t[1]] : t[1]
                            }
                            o(r, t)
                        } else null != e && i(t, e, r)
                    }
                    return this
                }
                get(e, t) {
                    if (e = t3(e)) {
                        let r = tC.findKey(this, e);
                        if (r) {
                            let e = this[r];
                            if (!t) return e;
                            if (!0 === t) {
                                let t, r = Object.create(null),
                                    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                                for (; t = n.exec(e);) r[t[1]] = t[2];
                                return r
                            }
                            if (tC.isFunction(t)) return t.call(this, e, r);
                            if (tC.isRegExp(t)) return t.exec(e);
                            throw TypeError("parser must be boolean|regexp|function")
                        }
                    }
                }
                has(e, t) {
                    if (e = t3(e)) {
                        let r = tC.findKey(this, e);
                        return !!(r && void 0 !== this[r] && (!t || t8(this, this[r], r, t)))
                    }
                    return !1
                }
                delete(e, t) {
                    let r = this,
                        n = !1;

                    function i(e) {
                        if (e = t3(e)) {
                            let i = tC.findKey(r, e);
                            i && (!t || t8(r, r[i], i, t)) && (delete r[i], n = !0)
                        }
                    }
                    return tC.isArray(e) ? e.forEach(i) : i(e), n
                }
                clear(e) {
                    let t = Object.keys(this),
                        r = t.length,
                        n = !1;
                    for (; r--;) {
                        let i = t[r];
                        (!e || t8(this, this[i], i, e, !0)) && (delete this[i], n = !0)
                    }
                    return n
                }
                normalize(e) {
                    let t = this,
                        r = {};
                    return tC.forEach(this, (n, i) => {
                        let o = tC.findKey(r, i);
                        if (o) {
                            t[o] = t6(n), delete t[i];
                            return
                        }
                        let a = e ? i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, r) => t.toUpperCase() + r) : String(i).trim();
                        a !== i && delete t[i], t[a] = t6(n), r[a] = !0
                    }), this
                }
                concat(...e) {
                    return this.constructor.concat(this, ...e)
                }
                toJSON(e) {
                    let t = Object.create(null);
                    return tC.forEach(this, (r, n) => {
                        null != r && !1 !== r && (t[n] = e && tC.isArray(r) ? r.join(", ") : r)
                    }), t
                } [Symbol.iterator]() {
                    return Object.entries(this.toJSON())[Symbol.iterator]()
                }
                toString() {
                    return Object.entries(this.toJSON()).map(([e, t]) => e + ": " + t).join("\n")
                }
                getSetCookie() {
                    return this.get("set-cookie") || []
                }
                get[Symbol.toStringTag]() {
                    return "AxiosHeaders"
                }
                static from(e) {
                    return e instanceof this ? e : new this(e)
                }
                static concat(e, ...t) {
                    let r = new this(e);
                    return t.forEach(e => r.set(e)), r
                }
                static accessor(e) {
                    let t = (this[t4] = this[t4] = {
                            accessors: {}
                        }).accessors,
                        r = this.prototype;

                    function n(e) {
                        let n = t3(e);
                        if (!t[n]) {
                            let i = tC.toCamelCase(" " + e);
                            ["get", "set", "has"].forEach(t => {
                                Object.defineProperty(r, t + i, {
                                    value: function(r, n, i) {
                                        return this[t].call(this, e, r, n, i)
                                    },
                                    configurable: !0
                                })
                            }), t[n] = !0
                        }
                    }
                    return tC.isArray(e) ? e.forEach(n) : n(e), this
                }
            };

            function t7(e, t) {
                let r = this || t2,
                    n = t || r,
                    i = t9.from(n.headers),
                    o = n.data;
                return tC.forEach(e, function(e) {
                    o = e.call(r, o, i.normalize(), t ? t.status : void 0)
                }), i.normalize(), o
            }

            function re(e) {
                return !!(e && e.__CANCEL__)
            }

            function rt(e, t, r) {
                tP.call(this, null == e ? "canceled" : e, tP.ERR_CANCELED, t, r), this.name = "CanceledError"
            }

            function rr(e, t, r) {
                let n = r.config.validateStatus;
                !r.status || !n || n(r.status) ? e(r) : t(new tP("Request failed with status code " + r.status, [tP.ERR_BAD_REQUEST, tP.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4], r.config, r.request, r))
            }
            t9.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), tC.reduceDescriptors(t9.prototype, ({
                value: e
            }, t) => {
                let r = t[0].toUpperCase() + t.slice(1);
                return {
                    get: () => e,
                    set(e) {
                        this[r] = e
                    }
                }
            }), tC.freezeMethods(t9), tC.inherits(rt, tP, {
                __CANCEL__: !0
            });
            var rn = function(e, t) {
                    let r, n = Array(e = e || 10),
                        i = Array(e),
                        o = 0,
                        a = 0;
                    return t = void 0 !== t ? t : 1e3,
                        function(s) {
                            let c = Date.now(),
                                l = i[a];
                            r || (r = c), n[o] = s, i[o] = c;
                            let u = a,
                                d = 0;
                            for (; u !== o;) d += n[u++], u %= e;
                            if ((o = (o + 1) % e) === a && (a = (a + 1) % e), c - r < t) return;
                            let h = l && c - l;
                            return h ? Math.round(1e3 * d / h) : void 0
                        }
                },
                ri = function(e, t) {
                    let r, n, i = 0,
                        o = 1e3 / t,
                        a = (t, o = Date.now()) => {
                            i = o, r = null, n && (clearTimeout(n), n = null), e(...t)
                        };
                    return [(...e) => {
                        let t = Date.now(),
                            s = t - i;
                        s >= o ? a(e, t) : (r = e, n || (n = setTimeout(() => {
                            n = null, a(r)
                        }, o - s)))
                    }, () => r && a(r)]
                },
                ro = (e, t, r = 3) => {
                    let n = 0,
                        i = rn(50, 250);
                    return ri(r => {
                        let o = r.loaded,
                            a = r.lengthComputable ? r.total : void 0,
                            s = o - n,
                            c = i(s);
                        n = o, e({
                            loaded: o,
                            total: a,
                            progress: a ? o / a : void 0,
                            bytes: s,
                            rate: c || void 0,
                            estimated: c && a && o <= a ? (a - o) / c : void 0,
                            event: r,
                            lengthComputable: null != a,
                            [t ? "download" : "upload"]: !0
                        })
                    }, r)
                },
                ra = (e, t) => {
                    let r = null != e;
                    return [n => t[0]({
                        lengthComputable: r,
                        total: e,
                        loaded: n
                    }), t[1]]
                },
                rs = e => (...t) => tC.asap(() => e(...t)),
                rc = t0.hasStandardBrowserEnv ? ((e, t) => r => (r = new URL(r, t0.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(new URL(t0.origin), t0.navigator && /(msie|trident)/i.test(t0.navigator.userAgent)) : () => !0,
                rl = t0.hasStandardBrowserEnv ? {
                    write(e, t, r, n, i, o) {
                        let a = [e + "=" + encodeURIComponent(t)];
                        tC.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()), tC.isString(n) && a.push("path=" + n), tC.isString(i) && a.push("domain=" + i), !0 === o && a.push("secure"), document.cookie = a.join("; ")
                    },
                    read(e) {
                        let t = document.cookie.match(RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                        return t ? decodeURIComponent(t[3]) : null
                    },
                    remove(e) {
                        this.write(e, "", Date.now() - 864e5)
                    }
                } : {
                    write() {},
                    read: () => null,
                    remove() {}
                };

            function ru(e, t, r) {
                let n = !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
                return e && (n || !1 == r) ? t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e : t
            }
            var rd = e => e instanceof t9 ? {
                ...e
            } : e;

            function rh(e, t) {
                t = t || {};
                let r = {};

                function n(e, t, r, n) {
                    return tC.isPlainObject(e) && tC.isPlainObject(t) ? tC.merge.call({
                        caseless: n
                    }, e, t) : tC.isPlainObject(t) ? tC.merge({}, t) : tC.isArray(t) ? t.slice() : t
                }

                function i(e, t, r, i) {
                    return tC.isUndefined(t) ? tC.isUndefined(e) ? void 0 : n(void 0, e, r, i) : n(e, t, r, i)
                }

                function o(e, t) {
                    if (!tC.isUndefined(t)) return n(void 0, t)
                }

                function a(e, t) {
                    return tC.isUndefined(t) ? tC.isUndefined(e) ? void 0 : n(void 0, e) : n(void 0, t)
                }

                function s(r, i, o) {
                    return o in t ? n(r, i) : o in e ? n(void 0, r) : void 0
                }
                let c = {
                    url: o,
                    method: o,
                    data: o,
                    baseURL: a,
                    transformRequest: a,
                    transformResponse: a,
                    paramsSerializer: a,
                    timeout: a,
                    timeoutMessage: a,
                    withCredentials: a,
                    withXSRFToken: a,
                    adapter: a,
                    responseType: a,
                    xsrfCookieName: a,
                    xsrfHeaderName: a,
                    onUploadProgress: a,
                    onDownloadProgress: a,
                    decompress: a,
                    maxContentLength: a,
                    maxBodyLength: a,
                    beforeRedirect: a,
                    transport: a,
                    httpAgent: a,
                    httpsAgent: a,
                    cancelToken: a,
                    socketPath: a,
                    responseEncoding: a,
                    validateStatus: s,
                    headers: (e, t, r) => i(rd(e), rd(t), r, !0)
                };
                return tC.forEach(Object.keys({
                    ...e,
                    ...t
                }), function(n) {
                    let o = c[n] || i,
                        a = o(e[n], t[n], n);
                    tC.isUndefined(a) && o !== s || (r[n] = a)
                }), r
            }
            var rf = e => {
                    let t, r = rh({}, e),
                        {
                            data: n,
                            withXSRFToken: i,
                            xsrfHeaderName: o,
                            xsrfCookieName: a,
                            headers: s,
                            auth: c
                        } = r;
                    if (r.headers = s = t9.from(s), r.url = tH(ru(r.baseURL, r.url, r.allowAbsoluteUrls), e.params, e.paramsSerializer), c && s.set("Authorization", "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))), tC.isFormData(n)) {
                        if (t0.hasStandardBrowserEnv || t0.hasStandardBrowserWebWorkerEnv) s.setContentType(void 0);
                        else if (!1 !== (t = s.getContentType())) {
                            let [e, ...r] = t ? t.split(";").map(e => e.trim()).filter(Boolean) : [];
                            s.setContentType([e || "multipart/form-data", ...r].join("; "))
                        }
                    }
                    if (t0.hasStandardBrowserEnv && (i && tC.isFunction(i) && (i = i(r)), i || !1 !== i && rc(r.url))) {
                        let e = o && a && rl.read(a);
                        e && s.set(o, e)
                    }
                    return r
                },
                rp = "undefined" != typeof XMLHttpRequest && function(e) {
                    return new Promise(function(t, r) {
                        let n, i, o, a, s, c = rf(e),
                            l = c.data,
                            u = t9.from(c.headers).normalize(),
                            {
                                responseType: d,
                                onUploadProgress: h,
                                onDownloadProgress: f
                            } = c;

                        function p() {
                            a && a(), s && s(), c.cancelToken && c.cancelToken.unsubscribe(n), c.signal && c.signal.removeEventListener("abort", n)
                        }
                        let y = new XMLHttpRequest;

                        function m() {
                            if (!y) return;
                            let n = t9.from("getAllResponseHeaders" in y && y.getAllResponseHeaders());
                            rr(function(e) {
                                t(e), p()
                            }, function(e) {
                                r(e), p()
                            }, {
                                data: d && "text" !== d && "json" !== d ? y.response : y.responseText,
                                status: y.status,
                                statusText: y.statusText,
                                headers: n,
                                config: e,
                                request: y
                            }), y = null
                        }
                        y.open(c.method.toUpperCase(), c.url, !0), y.timeout = c.timeout, "onloadend" in y ? y.onloadend = m : y.onreadystatechange = function() {
                            y && 4 === y.readyState && (0 !== y.status || y.responseURL && 0 === y.responseURL.indexOf("file:")) && setTimeout(m)
                        }, y.onabort = function() {
                            y && (r(new tP("Request aborted", tP.ECONNABORTED, e, y)), y = null)
                        }, y.onerror = function() {
                            r(new tP("Network Error", tP.ERR_NETWORK, e, y)), y = null
                        }, y.ontimeout = function() {
                            let t = c.timeout ? "timeout of " + c.timeout + "ms exceeded" : "timeout exceeded",
                                n = c.transitional || tq;
                            c.timeoutErrorMessage && (t = c.timeoutErrorMessage), r(new tP(t, n.clarifyTimeoutError ? tP.ETIMEDOUT : tP.ECONNABORTED, e, y)), y = null
                        }, void 0 === l && u.setContentType(null), "setRequestHeader" in y && tC.forEach(u.toJSON(), function(e, t) {
                            y.setRequestHeader(t, e)
                        }), tC.isUndefined(c.withCredentials) || (y.withCredentials = !!c.withCredentials), d && "json" !== d && (y.responseType = c.responseType), f && ([o, s] = ro(f, !0), y.addEventListener("progress", o)), h && y.upload && ([i, a] = ro(h), y.upload.addEventListener("progress", i), y.upload.addEventListener("loadend", a)), (c.cancelToken || c.signal) && (n = t => {
                            y && (r(!t || t.type ? new rt(null, e, y) : t), y.abort(), y = null)
                        }, c.cancelToken && c.cancelToken.subscribe(n), c.signal && (c.signal.aborted ? n() : c.signal.addEventListener("abort", n)));
                        let g = function(e) {
                            let t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                            return t && t[1] || ""
                        }(c.url);
                        if (g && -1 === t0.protocols.indexOf(g)) return void r(new tP("Unsupported protocol " + g + ":", tP.ERR_BAD_REQUEST, e));
                        y.send(l || null)
                    })
                },
                ry = function*(e, t) {
                    let r, n = e.byteLength;
                    if (!t || n < t) return void(yield e);
                    let i = 0;
                    for (; i < n;) r = i + t, yield e.slice(i, r), i = r
                },
                rm = async function*(e, t) {
                    for await (let r of rg(e)) yield* ry(r, t)
                }, rg = async function*(e) {
                    if (e[Symbol.asyncIterator]) return void(yield* e);
                    let t = e.getReader();
                    try {
                        for (;;) {
                            let {
                                done: e,
                                value: r
                            } = await t.read();
                            if (e) break;
                            yield r
                        }
                    } finally {
                        await t.cancel()
                    }
                }, rw = (e, t, r, n) => {
                    let i, o = rm(e, t),
                        a = 0,
                        s = e => {
                            !i && (i = !0, n && n(e))
                        };
                    return new ReadableStream({
                        async pull(e) {
                            try {
                                let {
                                    done: t,
                                    value: n
                                } = await o.next();
                                if (t) {
                                    s(), e.close();
                                    return
                                }
                                let i = n.byteLength;
                                if (r) {
                                    let e = a += i;
                                    r(e)
                                }
                                e.enqueue(new Uint8Array(n))
                            } catch (e) {
                                throw s(e), e
                            }
                        },
                        cancel: e => (s(e), o.return())
                    }, {
                        highWaterMark: 2
                    })
                }, rv = "function" == typeof fetch && "function" == typeof Request && "function" == typeof Response, rb = rv && "function" == typeof ReadableStream, rS = rv && ("function" == typeof TextEncoder ? (n = new TextEncoder, e => n.encode(e)) : async e => new Uint8Array(await new Response(e).arrayBuffer())), rE = (e, ...t) => {
                    try {
                        return !!e(...t)
                    } catch (e) {
                        return !1
                    }
                }, rk = rb && rE(() => {
                    let e = !1,
                        t = new Request(t0.origin, {
                            body: new ReadableStream,
                            method: "POST",
                            get duplex() {
                                return e = !0, "half"
                            }
                        }).headers.has("Content-Type");
                    return e && !t
                }), r_ = rb && rE(() => tC.isReadableStream(new Response("").body)), rT = {
                    stream: r_ && (e => e.body)
                };
            rv && (a = new Response, ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(e => {
                rT[e] || (rT[e] = tC.isFunction(a[e]) ? t => t[e]() : (t, r) => {
                    throw new tP(`Response type '${e}' is not supported`, tP.ERR_NOT_SUPPORT, r)
                })
            }));
            var rA = async e => {
                if (null == e) return 0;
                if (tC.isBlob(e)) return e.size;
                if (tC.isSpecCompliantForm(e)) {
                    let t = new Request(t0.origin, {
                        method: "POST",
                        body: e
                    });
                    return (await t.arrayBuffer()).byteLength
                }
                return tC.isArrayBufferView(e) || tC.isArrayBuffer(e) ? e.byteLength : (tC.isURLSearchParams(e) && (e += ""), tC.isString(e)) ? (await rS(e)).byteLength : void 0
            }, rR = async (e, t) => {
                let r = tC.toFiniteNumber(e.getContentLength());
                return null == r ? rA(t) : r
            }, rO = {
                http: null,
                xhr: rp,
                fetch: rv && (async e => {
                    let t, r, {
                        url: n,
                        method: i,
                        data: o,
                        signal: a,
                        cancelToken: s,
                        timeout: c,
                        onDownloadProgress: l,
                        onUploadProgress: u,
                        responseType: d,
                        headers: h,
                        withCredentials: f = "same-origin",
                        fetchOptions: p
                    } = rf(e);
                    d = d ? (d + "").toLowerCase() : "text";
                    let y = ((e, t) => {
                            let {
                                length: r
                            } = e = e ? e.filter(Boolean) : [];
                            if (t || r) {
                                let r, n = new AbortController,
                                    i = function(e) {
                                        if (!r) {
                                            r = !0, a();
                                            let t = e instanceof Error ? e : this.reason;
                                            n.abort(t instanceof tP ? t : new rt(t instanceof Error ? t.message : t))
                                        }
                                    },
                                    o = t && setTimeout(() => {
                                        o = null, i(new tP(`timeout ${t} of ms exceeded`, tP.ETIMEDOUT))
                                    }, t),
                                    a = () => {
                                        e && (o && clearTimeout(o), o = null, e.forEach(e => {
                                            e.unsubscribe ? e.unsubscribe(i) : e.removeEventListener("abort", i)
                                        }), e = null)
                                    };
                                e.forEach(e => e.addEventListener("abort", i));
                                let {
                                    signal: s
                                } = n;
                                return s.unsubscribe = () => tC.asap(a), s
                            }
                        })([a, s && s.toAbortSignal()], c),
                        m = y && y.unsubscribe && (() => {
                            y.unsubscribe()
                        });
                    try {
                        if (u && rk && "get" !== i && "head" !== i && 0 !== (r = await rR(h, o))) {
                            let e, t = new Request(n, {
                                method: "POST",
                                body: o,
                                duplex: "half"
                            });
                            if (tC.isFormData(o) && (e = t.headers.get("content-type")) && h.setContentType(e), t.body) {
                                let [e, n] = ra(r, ro(rs(u)));
                                o = rw(t.body, 65536, e, n)
                            }
                        }
                        tC.isString(f) || (f = f ? "include" : "omit");
                        let a = "credentials" in Request.prototype;
                        t = new Request(n, {
                            ...p,
                            signal: y,
                            method: i.toUpperCase(),
                            headers: h.normalize().toJSON(),
                            body: o,
                            duplex: "half",
                            credentials: a ? f : void 0
                        });
                        let s = await fetch(t, p),
                            c = r_ && ("stream" === d || "response" === d);
                        if (r_ && (l || c && m)) {
                            let e = {};
                            ["status", "statusText", "headers"].forEach(t => {
                                e[t] = s[t]
                            });
                            let t = tC.toFiniteNumber(s.headers.get("content-length")),
                                [r, n] = l && ra(t, ro(rs(l), !0)) || [];
                            s = new Response(rw(s.body, 65536, r, () => {
                                n && n(), m && m()
                            }), e)
                        }
                        d = d || "text";
                        let g = await rT[tC.findKey(rT, d) || "text"](s, e);
                        return !c && m && m(), await new Promise((r, n) => {
                            rr(r, n, {
                                data: g,
                                headers: t9.from(s.headers),
                                status: s.status,
                                statusText: s.statusText,
                                config: e,
                                request: t
                            })
                        })
                    } catch (r) {
                        if (m && m(), r && "TypeError" === r.name && /Load failed|fetch/i.test(r.message)) throw Object.assign(new tP("Network Error", tP.ERR_NETWORK, e, t), {
                            cause: r.cause || r
                        });
                        throw tP.from(r, r && r.code, e, t)
                    }
                })
            };
            tC.forEach(rO, (e, t) => {
                if (e) {
                    try {
                        Object.defineProperty(e, "name", {
                            value: t
                        })
                    } catch (e) {}
                    Object.defineProperty(e, "adapterName", {
                        value: t
                    })
                }
            });
            var rC = e => `- ${e}`,
                rP = e => tC.isFunction(e) || null === e || !1 === e,
                rx = {
                    getAdapter: e => {
                        let t, r, {
                                length: n
                            } = e = tC.isArray(e) ? e : [e],
                            i = {};
                        for (let o = 0; o < n; o++) {
                            let n;
                            if (r = t = e[o], !rP(t) && void 0 === (r = rO[(n = String(t)).toLowerCase()])) throw new tP(`Unknown adapter '${n}'`);
                            if (r) break;
                            i[n || "#" + o] = r
                        }
                        if (!r) {
                            let e = Object.entries(i).map(([e, t]) => `adapter ${e} ` + (!1 === t ? "is not supported by the environment" : "is not available in the build"));
                            throw new tP("There is no suitable adapter to dispatch the request " + (n ? e.length > 1 ? "since :\n" + e.map(rC).join("\n") : " " + rC(e[0]) : "as no adapter specified"), "ERR_NOT_SUPPORT")
                        }
                        return r
                    }
                };

            function rN(e) {
                if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new rt(null, e)
            }

            function rj(e) {
                return rN(e), e.headers = t9.from(e.headers), e.data = t7.call(e, e.transformRequest), -1 !== ["post", "put", "patch"].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", !1), rx.getAdapter(e.adapter || t2.adapter)(e).then(function(t) {
                    return rN(e), t.data = t7.call(e, e.transformResponse, t), t.headers = t9.from(t.headers), t
                }, function(t) {
                    return !re(t) && (rN(e), t && t.response && (t.response.data = t7.call(e, e.transformResponse, t.response), t.response.headers = t9.from(t.response.headers))), Promise.reject(t)
                })
            }
            var rL = "1.11.0",
                rI = {};
            ["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
                rI[e] = function(r) {
                    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
                }
            });
            var rU = {};
            rI.transitional = function(e, t, r) {
                function n(e, t) {
                    return "[Axios v" + rL + "] Transitional option '" + e + "'" + t + (r ? ". " + r : "")
                }
                return (r, i, o) => {
                    if (!1 === e) throw new tP(n(i, " has been removed" + (t ? " in " + t : "")), tP.ERR_DEPRECATED);
                    return t && !rU[i] && (rU[i] = !0, console.warn(n(i, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(r, i, o)
                }
            }, rI.spelling = function(e) {
                return (t, r) => (console.warn(`${r} is likely a misspelling of ${e}`), !0)
            };
            var rD = {
                    assertOptions: function(e, t, r) {
                        if ("object" != typeof e) throw new tP("options must be an object", tP.ERR_BAD_OPTION_VALUE);
                        let n = Object.keys(e),
                            i = n.length;
                        for (; i-- > 0;) {
                            let o = n[i],
                                a = t[o];
                            if (a) {
                                let t = e[o],
                                    r = void 0 === t || a(t, o, e);
                                if (!0 !== r) throw new tP("option " + o + " must be " + r, tP.ERR_BAD_OPTION_VALUE);
                                continue
                            }
                            if (!0 !== r) throw new tP("Unknown option " + o, tP.ERR_BAD_OPTION)
                        }
                    },
                    validators: rI
                },
                rW = rD.validators,
                rM = class {
                    constructor(e) {
                        this.defaults = e || {}, this.interceptors = {
                            request: new tF,
                            response: new tF
                        }
                    }
                    async request(e, t) {
                        try {
                            return await this._request(e, t)
                        } catch (e) {
                            if (e instanceof Error) {
                                let t = {};
                                Error.captureStackTrace ? Error.captureStackTrace(t) : t = Error();
                                let r = t.stack ? t.stack.replace(/^.+\n/, "") : "";
                                try {
                                    e.stack ? r && !String(e.stack).endsWith(r.replace(/^.+\n.+\n/, "")) && (e.stack += "\n" + r) : e.stack = r
                                } catch (e) {}
                            }
                            throw e
                        }
                    }
                    _request(e, t) {
                        let r, n;
                        "string" == typeof e ? (t = t || {}).url = e : t = e || {};
                        let {
                            transitional: i,
                            paramsSerializer: o,
                            headers: a
                        } = t = rh(this.defaults, t);
                        void 0 !== i && rD.assertOptions(i, {
                            silentJSONParsing: rW.transitional(rW.boolean),
                            forcedJSONParsing: rW.transitional(rW.boolean),
                            clarifyTimeoutError: rW.transitional(rW.boolean)
                        }, !1), null != o && (tC.isFunction(o) ? t.paramsSerializer = {
                            serialize: o
                        } : rD.assertOptions(o, {
                            encode: rW.function,
                            serialize: rW.function
                        }, !0)), void 0 !== t.allowAbsoluteUrls || (void 0 !== this.defaults.allowAbsoluteUrls ? t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t.allowAbsoluteUrls = !0), rD.assertOptions(t, {
                            baseUrl: rW.spelling("baseURL"),
                            withXsrfToken: rW.spelling("withXSRFToken")
                        }, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase();
                        let s = a && tC.merge(a.common, a[t.method]);
                        a && tC.forEach(["delete", "get", "head", "post", "put", "patch", "common"], e => {
                            delete a[e]
                        }), t.headers = t9.concat(s, a);
                        let c = [],
                            l = !0;
                        this.interceptors.request.forEach(function(e) {
                            ("function" != typeof e.runWhen || !1 !== e.runWhen(t)) && (l = l && e.synchronous, c.unshift(e.fulfilled, e.rejected))
                        });
                        let u = [];
                        this.interceptors.response.forEach(function(e) {
                            u.push(e.fulfilled, e.rejected)
                        });
                        let d = 0;
                        if (!l) {
                            let e = [rj.bind(this), void 0];
                            for (e.unshift(...c), e.push(...u), n = e.length, r = Promise.resolve(t); d < n;) r = r.then(e[d++], e[d++]);
                            return r
                        }
                        n = c.length;
                        let h = t;
                        for (d = 0; d < n;) {
                            let e = c[d++],
                                t = c[d++];
                            try {
                                h = e(h)
                            } catch (e) {
                                t.call(this, e);
                                break
                            }
                        }
                        try {
                            r = rj.call(this, h)
                        } catch (e) {
                            return Promise.reject(e)
                        }
                        for (d = 0, n = u.length; d < n;) r = r.then(u[d++], u[d++]);
                        return r
                    }
                    getUri(e) {
                        return tH(ru((e = rh(this.defaults, e)).baseURL, e.url, e.allowAbsoluteUrls), e.params, e.paramsSerializer)
                    }
                };
            tC.forEach(["delete", "get", "head", "options"], function(e) {
                rM.prototype[e] = function(t, r) {
                    return this.request(rh(r || {}, {
                        method: e,
                        url: t,
                        data: (r || {}).data
                    }))
                }
            }), tC.forEach(["post", "put", "patch"], function(e) {
                function t(t) {
                    return function(r, n, i) {
                        return this.request(rh(i || {}, {
                            method: e,
                            headers: t ? {
                                "Content-Type": "multipart/form-data"
                            } : {},
                            url: r,
                            data: n
                        }))
                    }
                }
                rM.prototype[e] = t(), rM.prototype[e + "Form"] = t(!0)
            });
            var rK = class e {
                    constructor(e) {
                        let t;
                        if ("function" != typeof e) throw TypeError("executor must be a function.");
                        this.promise = new Promise(function(e) {
                            t = e
                        });
                        let r = this;
                        this.promise.then(e => {
                            if (!r._listeners) return;
                            let t = r._listeners.length;
                            for (; t-- > 0;) r._listeners[t](e);
                            r._listeners = null
                        }), this.promise.then = e => {
                            let t, n = new Promise(e => {
                                r.subscribe(e), t = e
                            }).then(e);
                            return n.cancel = function() {
                                r.unsubscribe(t)
                            }, n
                        }, e(function(e, n, i) {
                            r.reason || (r.reason = new rt(e, n, i), t(r.reason))
                        })
                    }
                    throwIfRequested() {
                        if (this.reason) throw this.reason
                    }
                    subscribe(e) {
                        if (this.reason) return void e(this.reason);
                        this._listeners ? this._listeners.push(e) : this._listeners = [e]
                    }
                    unsubscribe(e) {
                        if (!this._listeners) return;
                        let t = this._listeners.indexOf(e); - 1 !== t && this._listeners.splice(t, 1)
                    }
                    toAbortSignal() {
                        let e = new AbortController,
                            t = t => {
                                e.abort(t)
                            };
                        return this.subscribe(t), e.signal.unsubscribe = () => this.unsubscribe(t), e.signal
                    }
                    static source() {
                        let t;
                        return {
                            token: new e(function(e) {
                                t = e
                            }),
                            cancel: t
                        }
                    }
                },
                rJ = {
                    Continue: 100,
                    SwitchingProtocols: 101,
                    Processing: 102,
                    EarlyHints: 103,
                    Ok: 200,
                    Created: 201,
                    Accepted: 202,
                    NonAuthoritativeInformation: 203,
                    NoContent: 204,
                    ResetContent: 205,
                    PartialContent: 206,
                    MultiStatus: 207,
                    AlreadyReported: 208,
                    ImUsed: 226,
                    MultipleChoices: 300,
                    MovedPermanently: 301,
                    Found: 302,
                    SeeOther: 303,
                    NotModified: 304,
                    UseProxy: 305,
                    Unused: 306,
                    TemporaryRedirect: 307,
                    PermanentRedirect: 308,
                    BadRequest: 400,
                    Unauthorized: 401,
                    PaymentRequired: 402,
                    Forbidden: 403,
                    NotFound: 404,
                    MethodNotAllowed: 405,
                    NotAcceptable: 406,
                    ProxyAuthenticationRequired: 407,
                    RequestTimeout: 408,
                    Conflict: 409,
                    Gone: 410,
                    LengthRequired: 411,
                    PreconditionFailed: 412,
                    PayloadTooLarge: 413,
                    UriTooLong: 414,
                    UnsupportedMediaType: 415,
                    RangeNotSatisfiable: 416,
                    ExpectationFailed: 417,
                    ImATeapot: 418,
                    MisdirectedRequest: 421,
                    UnprocessableEntity: 422,
                    Locked: 423,
                    FailedDependency: 424,
                    TooEarly: 425,
                    UpgradeRequired: 426,
                    PreconditionRequired: 428,
                    TooManyRequests: 429,
                    RequestHeaderFieldsTooLarge: 431,
                    UnavailableForLegalReasons: 451,
                    InternalServerError: 500,
                    NotImplemented: 501,
                    BadGateway: 502,
                    ServiceUnavailable: 503,
                    GatewayTimeout: 504,
                    HttpVersionNotSupported: 505,
                    VariantAlsoNegotiates: 506,
                    InsufficientStorage: 507,
                    LoopDetected: 508,
                    NotExtended: 510,
                    NetworkAuthenticationRequired: 511
                };
            Object.entries(rJ).forEach(([e, t]) => {
                rJ[t] = e
            });
            var rH = function e(t) {
                let r = new rM(t),
                    n = e1(rM.prototype.request, r);
                return tC.extend(n, rM.prototype, r, {
                    allOwnKeys: !0
                }), tC.extend(n, r, null, {
                    allOwnKeys: !0
                }), n.create = function(r) {
                    return e(rh(t, r))
                }, n
            }(t2);
            rH.Axios = rM, rH.CanceledError = rt, rH.CancelToken = rK, rH.isCancel = re, rH.VERSION = rL, rH.toFormData = tD, rH.AxiosError = tP, rH.Cancel = rH.CanceledError, rH.all = function(e) {
                return Promise.all(e)
            }, rH.spread = function(e) {
                return function(t) {
                    return e.apply(null, t)
                }
            }, rH.isAxiosError = function(e) {
                return tC.isObject(e) && !0 === e.isAxiosError
            }, rH.mergeConfig = rh, rH.AxiosHeaders = t9, rH.formToJSON = e => t1(tC.isHTMLForm(e) ? new FormData(e) : e), rH.getAdapter = rx.getAdapter, rH.HttpStatusCode = rJ, rH.default = rH;
            var {
                Axios: rF,
                AxiosError: rq,
                CanceledError: rB,
                isCancel: r$,
                CancelToken: rV,
                VERSION: rz,
                all: rG,
                Cancel: rY,
                isAxiosError: rX,
                spread: rQ,
                toFormData: rZ,
                AxiosHeaders: r0,
                HttpStatusCode: r1,
                formToJSON: r2,
                getAdapter: r5,
                mergeConfig: r4
            } = rH, r3 = W(B()), r6 = Error("timeout while waiting for mutex to become available");
            Error("mutex already locked");
            var r8 = Error("request for lock canceled"),
                r9 = class {
                    constructor(e, t = r8) {
                        this._value = e, this._cancelError = t, this._queue = [], this._weightedWaiters = []
                    }
                    acquire(e = 1, t = 0) {
                        if (e <= 0) throw Error(`invalid weight ${e}: must be positive`);
                        return new Promise((r, n) => {
                            let i = {
                                    resolve: r,
                                    reject: n,
                                    weight: e,
                                    priority: t
                                },
                                o = r7(this._queue, e => t <= e.priority); - 1 === o && e <= this._value ? this._dispatchItem(i) : this._queue.splice(o + 1, 0, i)
                        })
                    }
                    runExclusive(e) {
                        var t, r, n, i;
                        return t = this, r = arguments, n = void 0, i = function*(e, t = 1, r = 0) {
                            let [n, i] = yield this.acquire(t, r);
                            try {
                                return yield e(n)
                            } finally {
                                i()
                            }
                        }, new(n || (n = Promise))(function(e, o) {
                            function a(e) {
                                try {
                                    c(i.next(e))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function s(e) {
                                try {
                                    c(i.throw(e))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function c(t) {
                                var r;
                                t.done ? e(t.value) : ((r = t.value) instanceof n ? r : new n(function(e) {
                                    e(r)
                                })).then(a, s)
                            }
                            c((i = i.apply(t, r || [])).next())
                        })
                    }
                    waitForUnlock(e = 1, t = 0) {
                        if (e <= 0) throw Error(`invalid weight ${e}: must be positive`);
                        return this._couldLockImmediately(e, t) ? Promise.resolve() : new Promise(r => {
                            this._weightedWaiters[e - 1] || (this._weightedWaiters[e - 1] = []),
                                function(e, t) {
                                    let r = r7(e, e => t.priority <= e.priority);
                                    e.splice(r + 1, 0, t)
                                }(this._weightedWaiters[e - 1], {
                                    resolve: r,
                                    priority: t
                                })
                        })
                    }
                    isLocked() {
                        return this._value <= 0
                    }
                    getValue() {
                        return this._value
                    }
                    setValue(e) {
                        this._value = e, this._dispatchQueue()
                    }
                    release(e = 1) {
                        if (e <= 0) throw Error(`invalid weight ${e}: must be positive`);
                        this._value += e, this._dispatchQueue()
                    }
                    cancel() {
                        this._queue.forEach(e => e.reject(this._cancelError)), this._queue = []
                    }
                    _dispatchQueue() {
                        for (this._drainUnlockWaiters(); this._queue.length > 0 && this._queue[0].weight <= this._value;) this._dispatchItem(this._queue.shift()), this._drainUnlockWaiters()
                    }
                    _dispatchItem(e) {
                        let t = this._value;
                        this._value -= e.weight, e.resolve([t, this._newReleaser(e.weight)])
                    }
                    _newReleaser(e) {
                        let t = !1;
                        return () => {
                            t || (t = !0, this.release(e))
                        }
                    }
                    _drainUnlockWaiters() {
                        if (0 === this._queue.length)
                            for (let e = this._value; e > 0; e--) {
                                let t = this._weightedWaiters[e - 1];
                                t && (t.forEach(e => e.resolve()), this._weightedWaiters[e - 1] = [])
                            } else {
                                let e = this._queue[0].priority;
                                for (let t = this._value; t > 0; t--) {
                                    let r = this._weightedWaiters[t - 1];
                                    if (!r) continue;
                                    let n = r.findIndex(t => t.priority <= e);
                                    (-1 === n ? r : r.splice(0, n)).forEach(e => e.resolve())
                                }
                            }
                    }
                    _couldLockImmediately(e, t) {
                        return (0 === this._queue.length || this._queue[0].priority < t) && e <= this._value
                    }
                };

            function r7(e, t) {
                for (let r = e.length - 1; r >= 0; r--)
                    if (t(e[r])) return r;
                return -1
            }
            var ne = class {
                    constructor(e) {
                        this._semaphore = new r9(1, e)
                    }
                    acquire() {
                        var e, t, r, n;
                        return e = this, t = arguments, r = void 0, n = function*(e = 0) {
                            let [, t] = yield this._semaphore.acquire(1, e);
                            return t
                        }, new(r || (r = Promise))(function(i, o) {
                            function a(e) {
                                try {
                                    c(n.next(e))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function s(e) {
                                try {
                                    c(n.throw(e))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? i(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                                    e(t)
                                })).then(a, s)
                            }
                            c((n = n.apply(e, t || [])).next())
                        })
                    }
                    runExclusive(e, t = 0) {
                        return this._semaphore.runExclusive(() => e(), 1, t)
                    }
                    isLocked() {
                        return this._semaphore.isLocked()
                    }
                    waitForUnlock(e = 0) {
                        return this._semaphore.waitForUnlock(1, e)
                    }
                    release() {
                        this._semaphore.isLocked() && this._semaphore.release()
                    }
                    cancel() {
                        return this._semaphore.cancel()
                    }
                },
                nt = function(e, t, r, n) {
                    return new(r || (r = Promise))(function(i, o) {
                        function a(e) {
                            try {
                                c(n.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function s(e) {
                            try {
                                c(n.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function c(e) {
                            var t;
                            e.done ? i(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                                e(t)
                            })).then(a, s)
                        }
                        c((n = n.apply(e, t || [])).next())
                    })
                };

            function nr(e) {
                return void 0 !== e.getValue
            }
            var nn = class {
                    constructor() {
                        this.mutexes = new Map
                    }
                    async acquireLock(e, t = 5e3) {
                        this.mutexes.has(e) || this.mutexes.set(e, new ne);
                        let r = function(e, t, r = r6) {
                            return {
                                acquire: (n, i) => {
                                    let o;
                                    if (nr(e) ? o = n : (o = void 0, i = n), void 0 !== o && o <= 0) throw Error(`invalid weight ${o}: must be positive`);
                                    return new Promise((n, a) => nt(this, void 0, void 0, function*() {
                                        let s = !1,
                                            c = setTimeout(() => {
                                                s = !0, a(r)
                                            }, t);
                                        try {
                                            let t = yield nr(e) ? e.acquire(o, i) : e.acquire(i);
                                            s ? (Array.isArray(t) ? t[1] : t)() : (clearTimeout(c), n(t))
                                        } catch (e) {
                                            s || (clearTimeout(c), a(e))
                                        }
                                    }))
                                },
                                runExclusive(e, t, r) {
                                    return nt(this, void 0, void 0, function*() {
                                        let n = () => void 0;
                                        try {
                                            let i = yield this.acquire(t, r);
                                            if (Array.isArray(i)) return n = i[1], yield e(i[0]);
                                            return n = i, yield e()
                                        } finally {
                                            n()
                                        }
                                    })
                                },
                                release(t) {
                                    e.release(t)
                                },
                                cancel: () => e.cancel(),
                                waitForUnlock: (n, i) => {
                                    let o;
                                    if (nr(e) ? o = n : (o = void 0, i = n), void 0 !== o && o <= 0) throw Error(`invalid weight ${o}: must be positive`);
                                    return new Promise((n, a) => {
                                        let s = setTimeout(() => a(r), t);
                                        (nr(e) ? e.waitForUnlock(o, i) : e.waitForUnlock(i)).then(() => {
                                            clearTimeout(s), n()
                                        })
                                    })
                                },
                                isLocked: () => e.isLocked(),
                                getValue: () => e.getValue(),
                                setValue: t => e.setValue(t)
                            }
                        }(this.mutexes.get(e), t);
                        try {
                            return await r.acquire(), !0
                        } catch {
                            return !1
                        }
                    }
                    async releaseLock(e) {
                        let t = this.mutexes.get(e);
                        t && t.isLocked() && t.release()
                    }
                },
                ni = "token-refresh",
                no = class {
                    constructor(e) {
                        this.inflightTokenRequests = new Map, this.SILENT_AUTH_TRANSACTION_KEY = "auth_silent_transaction", this._releaseLockOnPageHide = async () => {
                            try {
                                await this.tokenRefreshLock.releaseLock(ni)
                            } catch {}
                            "undefined" != typeof window && window.removeEventListener && window.removeEventListener("pagehide", this._releaseLockOnPageHide)
                        }, this.options = e, this.cacheManager = new ei, this.tokenRefreshLock = this._createLock(), this._setupPageUnloadCleanup()
                    }
                    _createLock() {
                        return "undefined" != typeof window && void 0 !== window.localStorage ? new r3.default : new nn
                    }
                    async login(e) {
                        await this._redirectToAuth("login", e)
                    }
                    async silentLogin(e, t = 1e4) {
                        let r = this.generateRandomString(),
                            n = this.generateRandomString(),
                            {
                                codeVerifier: i,
                                codeChallenge: o
                            } = await Y(),
                            a = (null == e ? void 0 : e.redirectUri) || this.options.silentRedirectUri;
                        if (!a) throw Error("No silent redirect URI provided");
                        let s = this.buildRedirectUri(a, null == e ? void 0 : e.search),
                            c = (null == e ? void 0 : e.scope) || this.options.scope || "openid profile email",
                            l = (null == e ? void 0 : e.appState) || {};
                        X.saveTransaction({
                            state: r,
                            nonce: n,
                            codeVerifier: i,
                            redirectUri: s,
                            scope: c,
                            appState: l
                        }, this.SILENT_AUTH_TRANSACTION_KEY);
                        let u = this.buildAuthorizationUrl({
                            state: r,
                            nonce: n,
                            code_challenge: o,
                            redirect_uri: s,
                            scope: c,
                            initialScreen: "login",
                            customParameters: null == e ? void 0 : e.customParameters,
                            prompt: "none"
                        });
                        return new Promise((e, r) => {
                            let n = document.createElement("iframe");
                            n.style.display = "none", n.setAttribute("aria-hidden", "true"), n.src = u, document.body.appendChild(n);
                            let i = window.setTimeout(() => {
                                    a(), r(Error("Silent login timed out"))
                                }, t),
                                o = t => {
                                    t.origin === window.location.origin && t.data && "oidc:silent-result" === t.data.type && (a(), t.data.ok ? (this.cacheManager.setTokens(t.data.tokens), e()) : r(Error(t.data.error)))
                                },
                                a = () => {
                                    window.clearTimeout(i), window.removeEventListener("message", o), n.remove()
                                };
                            window.addEventListener("message", o)
                        })
                    }
                    async signUp(e) {
                        await this._redirectToAuth("signup", e)
                    }
                    async forgotPassword(e) {
                        await this._redirectToAuth("forgot-password", e)
                    }
                    async handleRedirectCallback(e) {
                        let t = new URLSearchParams(new URL(e || window.location.href).search),
                            r = t.get("code"),
                            n = t.get("state"),
                            i = t.get("error"),
                            o = t.get("error_description");
                        if (i) throw Error(`Authentication error: ${i}${o?` - ${o}`:""}`);
                        if (!r) throw Error("No authorization code found in callback URL");
                        if (!n) throw Error("No state parameter found in callback URL");
                        let a = X.getTransaction();
                        if (!a) throw Error("No transaction found in session storage");
                        if (a.state !== n) throw Error("State mismatch");
                        try {
                            return await this._exchangeCodeForTokens(r, a.codeVerifier, a.redirectUri, a.nonce), X.clearTransaction(), {
                                appState: a.appState || {}
                            }
                        } catch (e) {
                            throw X.clearTransaction(), e
                        }
                    }
                    async handleSilentRedirectCallback(e) {
                        let t = new URLSearchParams(new URL(e || window.location.href).search),
                            r = t.get("code"),
                            n = t.get("state"),
                            i = t.get("error"),
                            o = t.get("error_description");
                        if (i) {
                            let e = `Silent authentication error: ${i}${o?` - ${o}`:""}`;
                            throw window.parent.postMessage({
                                type: "oidc:silent-result",
                                ok: !1,
                                error: e
                            }, window.location.origin), Error(e)
                        }
                        if (!r) {
                            let e = "No authorization code found in callback URL";
                            throw window.parent.postMessage({
                                type: "oidc:silent-result",
                                ok: !1,
                                error: e
                            }, window.location.origin), Error(e)
                        }
                        if (!n) {
                            let e = "No state parameter found in callback URL";
                            throw window.parent.postMessage({
                                type: "oidc:silent-result",
                                ok: !1,
                                error: e
                            }, window.location.origin), Error(e)
                        }
                        let a = X.getTransaction(this.SILENT_AUTH_TRANSACTION_KEY);
                        if (!a) {
                            let e = "No transaction found in session storage";
                            throw window.parent.postMessage({
                                type: "oidc:silent-result",
                                ok: !1,
                                error: e
                            }, window.location.origin), Error(e)
                        }
                        if (a.state !== n) {
                            let e = "State mismatch";
                            throw window.parent.postMessage({
                                type: "oidc:silent-result",
                                ok: !1,
                                error: e
                            }, window.location.origin), Error(e)
                        }
                        try {
                            return await this._exchangeCodeForTokens(r, a.codeVerifier, a.redirectUri, a.nonce), X.clearTransaction(this.SILENT_AUTH_TRANSACTION_KEY), window.parent.postMessage({
                                type: "oidc:silent-result",
                                ok: !0,
                                tokens: this.cacheManager.getTokens()
                            }, window.location.origin), {
                                appState: a.appState || {}
                            }
                        } catch (e) {
                            throw X.clearTransaction(this.SILENT_AUTH_TRANSACTION_KEY), window.parent.postMessage({
                                type: "oidc:silent-result",
                                ok: !1,
                                error: JSON.stringify(e)
                            }, window.location.origin), e
                        }
                    }
                    async getTokenSilently(e) {
                        let t = JSON.stringify(e || {}),
                            r = this.inflightTokenRequests.get(t);
                        if (r) return r;
                        let n = this._getTokenSilentlyInternal(e);
                        this.inflightTokenRequests.set(t, n);
                        try {
                            return await n
                        } finally {
                            this.inflightTokenRequests.delete(t)
                        }
                    }
                    async _getTokenSilentlyInternal(e) {
                        let t = this._getCachedTokenIfValid(e);
                        if (t) return t;
                        let r = await this._acquireLockWithTimeout(ni, 5e3);
                        try {
                            let t = this._getCachedTokenIfValid(e);
                            if (t) return t;
                            let r = this.cacheManager.getLegacyRefreshToken();
                            try {
                                let e = await this._refreshTokens(r || void 0);
                                return r && this.cacheManager.clearLegacyRefreshToken(), e.access_token
                            } catch {
                                throw r && this.cacheManager.clearLegacyRefreshToken(), new z("Token refresh failed")
                            }
                        } finally {
                            r && await this.tokenRefreshLock.releaseLock(ni)
                        }
                    }
                    async checkSession(e) {
                        try {
                            await this.getTokenSilently(e)
                        } catch (e) {
                            throw e instanceof z && this.cacheManager.clearTokens(), e
                        }
                    }
                    async logoutSession(e) {
                        if (this.cacheManager.clearTokens(), null == e ? void 0 : e.returnTo) {
                            let t = new URLSearchParams({
                                    client_id: this.options.clientId,
                                    returnTo: e.returnTo
                                }),
                                r = `https://${this.options.domain}/v2/logout?${t.toString()}`;
                            window.location.assign(r)
                        }
                    }
                    async logoutAllSessions(e) {
                        this.cacheManager.clearTokens();
                        let t = new URLSearchParams({
                                client_id: this.options.clientId,
                                return_to: e.returnTo
                            }),
                            r = `https://${this.options.domain}/api/v1/logout-all?${t.toString()}`;
                        window.location.assign(r)
                    }
                    async getUser() {
                        let e = this.cacheManager.getTokens();
                        if (null == e ? void 0 : e.id_token) try {
                            let t = eZ(e.id_token).payload,
                                r = {
                                    sub: t.sub
                                };
                            return t.email && (r.email = t.email), t.name && (r.name = t.name), t.picture && (r.picture = t.picture), r
                        } catch {
                            return
                        }
                    }
                    async getIdTokenClaims() {
                        let e = this.cacheManager.getTokens();
                        if (null == e ? void 0 : e.id_token) try {
                            return eZ(e.id_token).payload
                        } catch {
                            return
                        }
                    }
                    async isAuthenticated() {
                        let e = this.cacheManager.getTokens();
                        return !!(null == e ? void 0 : e.id_token) && ! function(e) {
                            try {
                                var t;
                                let r = eQ(e);
                                if (!r.exp) return !1;
                                return er(new Date, (t = r.exp, ee(1e3 * t, void 0)))
                            } catch {
                                return !0
                            }
                        }(e.id_token)
                    }
                    clearLocalCache() {
                        this.cacheManager.clear()
                    }
                    async storeTokens(e) {
                        let t = et(new Date, e.expires_in).getTime(),
                            r = {
                                access_token: e.access_token,
                                token_type: "Bearer",
                                expiresAt: t
                            };
                        if (e.id_token && (r.id_token = e.id_token), e.scope && (r.scope = e.scope), this.cacheManager.setTokens(r), e.id_token) try {
                            return eZ(e.id_token).payload
                        } catch {}
                    }
                    async _exchangeCodeForTokens(e, t, r, n) {
                        var i, o;
                        let a = {
                            grant_type: "authorization_code",
                            client_id: this.options.clientId,
                            code: e,
                            redirect_uri: r,
                            code_verifier: t
                        };
                        try {
                            let e = await this._makeTokenRequest(a);
                            if (e.id_token) {
                                let t = {
                                    issuer: `https://${this.options.domain}/`,
                                    audience: this.options.clientId
                                };
                                n && (t.nonce = n), await e0(e.id_token, t)
                            }
                            return this._storeTokens(e), e
                        } catch (e) {
                            if (rH.isAxiosError(e)) throw Error(`Token exchange failed: ${(null==(o=null==(i=e.response)?void 0:i.data)?void 0:o.error_description)||e.message}`);
                            throw Error(`Token exchange failed: ${e instanceof Error?e.message:"Unknown error"}`)
                        }
                    }
                    async _makeTokenRequest(e) {
                        let t = `https://${this.options.domain}/oauth/token`,
                            r = {
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            };
                        return ("refresh_token" === e.grant_type || "authorization_code" === e.grant_type) && (r.withCredentials = !0), (await rH.post(t, e, r)).data
                    }
                    _storeTokens(e) {
                        let t = et(new Date, e.expires_in).getTime(),
                            r = {
                                access_token: e.access_token,
                                token_type: e.token_type,
                                expiresAt: t
                            };
                        e.id_token && (r.id_token = e.id_token), e.scope && (r.scope = e.scope), this.cacheManager.setTokens(r)
                    }
                    async _refreshTokens(e) {
                        let t = {
                            grant_type: "refresh_token",
                            client_id: this.options.clientId,
                            audience: this.options.audience
                        };
                        e && (t.refresh_token = e);
                        let r = await this._makeTokenRequest(t);
                        return this._storeTokens(r), r
                    }
                    async _redirectToAuth(e, t) {
                        let r = this.generateRandomString(),
                            n = this.generateRandomString(),
                            {
                                codeVerifier: i,
                                codeChallenge: o
                            } = await Y(),
                            a = this.buildRedirectUri((null == t ? void 0 : t.redirectUri) || this.options.redirectUri, null == t ? void 0 : t.search),
                            s = (null == t ? void 0 : t.scope) || this.options.scope || "openid profile email",
                            c = (null == t ? void 0 : t.appState) || {};
                        X.saveTransaction({
                            state: r,
                            nonce: n,
                            codeVerifier: i,
                            redirectUri: a,
                            scope: s,
                            appState: c
                        });
                        let l = this.buildAuthorizationUrl({
                            state: r,
                            nonce: n,
                            code_challenge: o,
                            redirect_uri: a,
                            scope: s,
                            initialScreen: e,
                            customParameters: null == t ? void 0 : t.customParameters
                        });
                        window.location.assign(l)
                    }
                    generateRandomString(e = 32) {
                        let t = new Uint8Array(e);
                        return crypto.getRandomValues(t), btoa(String.fromCharCode(...t)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
                    }
                    buildRedirectUri(e, t) {
                        if (!t) return e;
                        let r = new URL(e);
                        for (let [e, n] of new URLSearchParams(t).entries()) r.searchParams.set(e, n);
                        return r.toString()
                    }
                    buildAuthorizationUrl(e) {
                        let t = new URLSearchParams({
                            response_type: "code",
                            client_id: this.options.clientId,
                            redirect_uri: e.redirect_uri,
                            scope: e.scope,
                            state: e.state,
                            nonce: e.nonce,
                            code_challenge: e.code_challenge,
                            code_challenge_method: "S256"
                        });
                        if (e.initialScreen && (t.set("initialScreen", e.initialScreen), t.set("initial_screen", e.initialScreen)), e.prompt && t.set("prompt", e.prompt), this.options.audience && t.set("audience", this.options.audience), e.customParameters) {
                            let r = new Set;
                            for (let e of t.keys()) r.add(e);
                            for (let [n, i] of Object.entries(e.customParameters)) r.has(n) || void 0 === i || t.set(n, i)
                        }
                        return `https://${this.options.domain}/authorize?${t.toString()}`
                    }
                    _getCachedTokenIfValid(e) {
                        if (null == e ? void 0 : e.ignoreCache) return null;
                        let t = this.cacheManager.getTokens();
                        return (null == t ? void 0 : t.access_token) ? er(new Date(t.expiresAt), function(e, t, r) {
                            let n = ee(e, void 0);
                            return n.setTime(n.getTime() + 3e5), n
                        }(new Date, 0)) ? t.access_token : null : null
                    }
                    async _acquireLockWithTimeout(e, t) {
                        return await this.tokenRefreshLock.acquireLock(e, t)
                    }
                    _setupPageUnloadCleanup() {
                        "undefined" != typeof window && window.addEventListener && window.addEventListener("pagehide", this._releaseLockOnPageHide)
                    }
                },
                na = W($()),
                ns = W($()),
                nc = (0, ns.createMessage)("TOKEN_REQUEST");
            (0, ns.createMessage)("TOKEN_RESPONSE");
            var nl = (0, ns.createMessage)("LOGOUT_TRIGGERED"),
                nu = class {
                    constructor(e) {
                        var t;
                        this._log = null != (t = null == e ? void 0 : e.log) ? t : () => {}, na.NativeMessageExchange.init()
                    }
                    async _getTokens() {
                        (!this._expiry || er(new Date, et(new Date(this._expiry), -60, void 0))) && (this._log("_getTokens: needNewTokens"), await this.checkSession());
                        let e = this._accessToken,
                            t = this._idToken;
                        if (e && t) return {
                            accessToken: e,
                            idToken: t
                        };
                        throw new z("nativeAuthClient: no tokens")
                    }
                    async checkSession(e) {
                        let t = nc();
                        try {
                            let {
                                accessToken: e,
                                idToken: r
                            } = (await na.NativeMessageExchange.sendMessageToNative(t)).payload;
                            this._accessToken = e, this._idToken = r, this._expiry = 1e3 * eZ(e).payload.exp
                        } catch (e) {
                            throw this._log("checkSession error:", e), new z("Failed to get tokens from native app")
                        }
                        this._log("checkSession: complete")
                    }
                    async isAuthenticated() {
                        try {
                            return await this.checkSession(), !!this._accessToken
                        } catch {
                            return !1
                        }
                    }
                    async getIdTokenClaims() {
                        try {
                            let {
                                idToken: e
                            } = await this._getTokens();
                            return eZ(e).payload
                        } catch {
                            return
                        }
                    }
                    async getTokenSilently(e) {
                        let {
                            accessToken: t
                        } = await this._getTokens();
                        return t
                    }
                    async login(e) {
                        this._log("nativeAuthClient: login")
                    }
                    async signUp(e) {
                        this._log("nativeAuthClient: signUp")
                    }
                    async logoutSession(e) {
                        this._log("nativeAuthClient: logoutSession"), this.clearLocalCache(), await na.NativeMessageExchange.sendMessageToNative(nl())
                    }
                    async logoutAllSessions(e) {
                        throw Error("logoutAllSessions not implemented for native client")
                    }
                    async forgotPassword(e) {
                        this._log("nativeAuthClient: forgotPassword")
                    }
                    clearLocalCache() {
                        this._log("nativeAuthClient: clearLocalCache"), delete this._accessToken, delete this._idToken, delete this._expiry
                    }
                    async storeTokens(e) {
                        this._log("nativeAuthClient: storeTokens (not implemented for native)")
                    }
                },
                nd = e => (T || (T = new nu(e)), T),
                nh = e => () => nd(e),
                nf = class {
                    constructor({
                        authenticationClientOptions: e,
                        nativeAuthOptions: t
                    }) {
                        this._activeAuthClient = null, this._authenticationClient = new no(e), this._nativeAuthClient = new nu(t || void 0)
                    }
                    setActiveAuthClient(e) {
                        if ("authentication" === e) this._activeAuthClient = this._authenticationClient;
                        else if ("nativeAuthClient" === e) this._activeAuthClient = this._nativeAuthClient;
                        else throw Error(`Unknown client name: ${e}`)
                    }
                    getActiveAuthClient() {
                        return this._activeAuthClient || (this._activeAuthClient = this._authenticationClient), this._activeAuthClient
                    }
                    async checkSession(e) {
                        return this.getActiveAuthClient().checkSession(e)
                    }
                    async isAuthenticated() {
                        return this.getActiveAuthClient().isAuthenticated()
                    }
                    async getIdTokenClaims() {
                        return this.getActiveAuthClient().getIdTokenClaims()
                    }
                    async getTokenSilently(e) {
                        return this.getActiveAuthClient().getTokenSilently(e)
                    }
                    async signUp(e) {
                        return this.getActiveAuthClient().signUp(e)
                    }
                    async login(e) {
                        return this.getActiveAuthClient().login(e)
                    }
                    async logoutSession(e) {
                        return this.getActiveAuthClient().logoutSession(e)
                    }
                    async logoutAllSessions(e) {
                        return this.getActiveAuthClient().logoutAllSessions(e)
                    }
                    async forgotPassword(e) {
                        return this.getActiveAuthClient().forgotPassword(e)
                    }
                    async storeTokens(e) {
                        var t, r;
                        return null == (r = (t = this.getActiveAuthClient()).storeTokens) ? void 0 : r.call(t, e)
                    }
                    clearLocalCache() {
                        return this.getActiveAuthClient().clearLocalCache()
                    }
                }
        }
    }
]);
//# sourceMappingURL=a7be5a01.34dda8bc407cec0f.js.map
