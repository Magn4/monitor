"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2134], {
        6454: (e, t, r) => {
            let n, i;
            r.d(t, {
                K: () => I,
                H: () => D
            });
            let s = (e, t) => t.some(t => e instanceof t),
                a = new WeakMap,
                o = new WeakMap,
                u = new WeakMap,
                l = {
                    get(e, t, r) {
                        if (e instanceof IDBTransaction) {
                            if ("done" === t) return a.get(e);
                            if ("store" === t) return r.objectStoreNames[1] ? void 0 : r.objectStore(r.objectStoreNames[0])
                        }
                        return c(e[t])
                    },
                    set: (e, t, r) => (e[t] = r, !0),
                    has: (e, t) => e instanceof IDBTransaction && ("done" === t || "store" === t) || t in e
                };

            function c(e) {
                if (e instanceof IDBRequest) {
                    let t = new Promise((t, r) => {
                        let n = () => {
                                e.removeEventListener("success", i), e.removeEventListener("error", s)
                            },
                            i = () => {
                                t(c(e.result)), n()
                            },
                            s = () => {
                                r(e.error), n()
                            };
                        e.addEventListener("success", i), e.addEventListener("error", s)
                    });
                    return u.set(t, e), t
                }
                if (o.has(e)) return o.get(e);
                let t = function(e) {
                    if ("function" == typeof e) return (i || (i = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(e) ? function(...t) {
                        return e.apply(d(this), t), c(this.request)
                    } : function(...t) {
                        return c(e.apply(d(this), t))
                    };
                    return (e instanceof IDBTransaction && function(e) {
                        if (a.has(e)) return;
                        let t = new Promise((t, r) => {
                            let n = () => {
                                    e.removeEventListener("complete", i), e.removeEventListener("error", s), e.removeEventListener("abort", s)
                                },
                                i = () => {
                                    t(), n()
                                },
                                s = () => {
                                    r(e.error || new DOMException("AbortError", "AbortError")), n()
                                };
                            e.addEventListener("complete", i), e.addEventListener("error", s), e.addEventListener("abort", s)
                        });
                        a.set(e, t)
                    }(e), s(e, n || (n = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]))) ? new Proxy(e, l) : e
                }(e);
                return t !== e && (o.set(e, t), u.set(t, e)), t
            }
            let d = e => u.get(e),
                g = ["get", "getKey", "getAll", "getAllKeys", "count"],
                p = ["put", "add", "delete", "clear"],
                m = new Map;

            function y(e, t) {
                if (!(e instanceof IDBDatabase && !(t in e) && "string" == typeof t)) return;
                if (m.get(t)) return m.get(t);
                let r = t.replace(/FromIndex$/, ""),
                    n = t !== r,
                    i = p.includes(r);
                if (!(r in (n ? IDBIndex : IDBObjectStore).prototype) || !(i || g.includes(r))) return;
                let s = async function(e, ...t) {
                    let s = this.transaction(e, i ? "readwrite" : "readonly"),
                        a = s.store;
                    return n && (a = a.index(t.shift())), (await Promise.all([a[r](...t), i && s.done]))[0]
                };
                return m.set(t, s), s
            }
            l = (e => ({
                ...e,
                get: (t, r, n) => y(t, r) || e.get(t, r, n),
                has: (t, r) => !!y(t, r) || e.has(t, r)
            }))(l);
            let f = ["continue", "continuePrimaryKey", "advance"],
                h = {},
                v = new WeakMap,
                b = new WeakMap,
                w = {
                    get(e, t) {
                        if (!f.includes(t)) return e[t];
                        let r = h[t];
                        return r || (r = h[t] = function(...e) {
                            v.set(this, b.get(this)[t](...e))
                        }), r
                    }
                };
            async function* S(...e) {
                let t = this;
                if (t instanceof IDBCursor || (t = await t.openCursor(...e)), !t) return;
                let r = new Proxy(t, w);
                for (b.set(r, t), u.set(r, d(t)); t;) yield r, t = await (v.get(r) || t.continue()), v.delete(r)
            }

            function E(e, t) {
                return t === Symbol.asyncIterator && s(e, [IDBIndex, IDBObjectStore, IDBCursor]) || "iterate" === t && s(e, [IDBIndex, IDBObjectStore])
            }
            l = (e => ({
                ...e,
                get: (t, r, n) => E(t, r) ? S : e.get(t, r, n),
                has: (t, r) => E(t, r) || e.has(t, r)
            }))(l);
            let x = "identity";
            async function I() {
                let e = await
                function(e, t, {
                    blocked: r,
                    upgrade: n,
                    blocking: i,
                    terminated: s
                } = {}) {
                    let a = indexedDB.open(e, 1),
                        o = c(a);
                    return n && a.addEventListener("upgradeneeded", e => {
                        n(c(a.result), e.oldVersion, e.newVersion, c(a.transaction), e)
                    }), r && a.addEventListener("blocked", e => r(e.oldVersion, e.newVersion, e)), o.then(e => {
                        s && e.addEventListener("close", () => s()), i && e.addEventListener("versionchange", e => i(e.oldVersion, e.newVersion, e))
                    }).catch(() => {}), o
                }("orionV3", 0, {
                    upgrade(e) {
                        e.createObjectStore(x, {
                            keyPath: "userId"
                        })
                    }
                });
                return {
                    clearEntities: async () => {
                        await e.clear(x)
                    },
                    loadIdentity: async t => {
                        try {
                            let r = await e.get(x, t);
                            if (!r) return null;
                            let {
                                identity: n,
                                updatedAt: i,
                                userId: s
                            } = r;
                            if (!n || !i || !s) return null;
                            return {
                                identity: JSON.parse(n),
                                updatedAt: Number(i),
                                userId: s
                            }
                        } catch {
                            return null
                        }
                    },
                    saveIdentity: async (t, r) => {
                        await e.put(x, {
                            identity: JSON.stringify(t),
                            updatedAt: Date.now().toString(),
                            userId: r
                        })
                    }
                }
            }
            let D = () => "undefined" != typeof navigator && /(?:google|bing|msn|facebook)bot[-imagevdo]{0,6}|bingpreview|gptbot|slack(?:bot)?(?:-imgproxy|-linkexpanding)?/i.test(navigator.userAgent)
        },
        33753: (e, t, r) => {
            r.d(t, {
                tH: () => a
            });
            var n = r(21462);
            let i = (0, n.createContext)(null),
                s = {
                    didCatch: !1,
                    error: null
                };
            class a extends n.Component {
                constructor(e) {
                    super(e), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = s
                }
                static getDerivedStateFromError(e) {
                    return {
                        didCatch: !0,
                        error: e
                    }
                }
                resetErrorBoundary() {
                    let {
                        error: e
                    } = this.state;
                    if (null !== e) {
                        for (var t, r, n = arguments.length, i = Array(n), a = 0; a < n; a++) i[a] = arguments[a];
                        null == (t = (r = this.props).onReset) || t.call(r, {
                            args: i,
                            reason: "imperative-api"
                        }), this.setState(s)
                    }
                }
                componentDidCatch(e, t) {
                    var r, n;
                    null == (r = (n = this.props).onError) || r.call(n, e, t)
                }
                componentDidUpdate(e, t) {
                    let {
                        didCatch: r
                    } = this.state, {
                        resetKeys: n
                    } = this.props;
                    if (r && null !== t.error && function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                            return e.length !== t.length || e.some((e, r) => !Object.is(e, t[r]))
                        }(e.resetKeys, n)) {
                        var i, a;
                        null == (i = (a = this.props).onReset) || i.call(a, {
                            next: n,
                            prev: e.resetKeys,
                            reason: "keys"
                        }), this.setState(s)
                    }
                }
                render() {
                    let {
                        children: e,
                        fallbackRender: t,
                        FallbackComponent: r,
                        fallback: s
                    } = this.props, {
                        didCatch: a,
                        error: o
                    } = this.state, u = e;
                    if (a) {
                        let e = {
                            error: o,
                            resetErrorBoundary: this.resetErrorBoundary
                        };
                        if ("function" == typeof t) u = t(e);
                        else if (r) u = (0, n.createElement)(r, e);
                        else if (null === s || (0, n.isValidElement)(s)) u = s;
                        else throw o
                    }
                    return (0, n.createElement)(i.Provider, {
                        value: {
                            didCatch: a,
                            error: o,
                            resetErrorBoundary: this.resetErrorBoundary
                        }
                    }, u)
                }
            }
        },
        69065: (e, t, r) => {
            let n = r(19868),
                {
                    snakeCase: i
                } = r(63761);
            e.exports = function(e, t) {
                return n(e, function(e, r) {
                    var n, s, a, o, u;
                    return [(n = t.exclude, s = e, n.some(function(e) {
                        return "string" == typeof e ? e === s : e.test(s)
                    })) ? e : i(e, t.parsingOptions), r, (a = e, o = r, (u = t).shouldRecurse ? {
                        shouldRecurse: u.shouldRecurse(a, o)
                    } : void 0)]
                }, t = Object.assign({
                    deep: !0,
                    exclude: [],
                    parsingOptions: {}
                }, t))
            }
        },
        72393: (e, t, r) => {
            async function n(e) {
                return new Promise(t => {
                    e.then(e => t({
                        data: e,
                        err: void 0
                    })).catch(e => t({
                        err: e,
                        data: void 0
                    }))
                })
            }
            r.d(t, {
                o: () => c
            });
            var i = r(69065);
            class s extends Error {
                constructor(e) {
                    super(e), this.name = "Error4xx"
                }
            }
            async function a(e) {
                if (e.status >= 400 && e.status < 500) throw new s(`Received invalid response! Code: ${e.status}, Message: ${e.statusText}, Source: proxy`);
                let t = null;
                try {
                    t = await e.json()
                } catch {
                    throw Error(`Received invalid response! Code: ${e.status}, Message: ${e.statusText}, Extra: Invalid JSON content, Source: proxy`)
                }
                if (200 !== e.status) {
                    let e = (() => {
                        if ("object" != typeof t || !t) return {
                            code: "",
                            message: "Received unexpected json",
                            extra: JSON.stringify(t)
                        };
                        let {
                            error_code: e,
                            code: r,
                            error_message: n,
                            message: i,
                            extra: s
                        } = t;
                        return {
                            code: e ?? r ?? "",
                            message: n ?? i ?? "",
                            extra: JSON.stringify(s ?? {})
                        }
                    })();
                    throw Error(`Received invalid response! Code: ${e.code}, Message: ${e.message}, Extra: ${e.extra}, Source: orion`)
                }
                return t
            }

            function o(e) {
                async function t(t) {
                    return a(await e.fetcher(t.url, {
                        method: t.method,
                        ...t.body && {
                            body: JSON.stringify(i(t.body))
                        },
                        headers: {
                            ...t.body && {
                                "Content-Type": "application/json"
                            },
                            "bsp-id": e.appId
                        }
                    }))
                }
                let r = e.goesThroughOrionProxy ? `${e.baseUrl}/orion` : e.baseUrl;
                return {
                    async requestSettingsAndSegmentations(n) {
                        let i = {
                            ...n,
                            bspId: e.appId
                        };
                        return await t({
                            url: `${r}/v3/identity/settings`,
                            body: i,
                            method: "POST"
                        })
                    },
                    async getAllExperiments(e) {
                        let n = {
                            ...e,
                            returnIncompatible: !0
                        };
                        return await t({
                            url: `${r}/v3/secret/experiments`,
                            body: n,
                            method: "POST"
                        })
                    },
                    async forceExperimentSegmentation(e, n, i) {
                        let s = null != n ? `&segment_index=${n}` : "",
                            a = `${r}/v3/secret/forced-segmentation?segmentation_id_name=${i.idName}&segmentation_id=${i.idValue}&experiment_name=${e}${s}`;
                        await t({
                            url: a,
                            body: {},
                            method: null != n ? "PUT" : "DELETE"
                        })
                    },
                    async forceExperimentSegmentations(e) {
                        await t({
                            url: `${r}/v3/secret/forced-segmentations`,
                            method: "PUT",
                            body: {
                                segmentations_to_force: e
                            }
                        })
                    },
                    async setSegmentationState(e, n) {
                        await t({
                            url: `${r}/v3/secret/segmentation-state`,
                            method: "PUT",
                            body: {
                                excludeFromSegmentation: e,
                                segmentationIdName: n
                            }
                        })
                    }
                }
            }
            class u {
                mutex = Promise.resolve();
                async run(e) {
                    return new Promise((t, r) => {
                        this.mutex = this.mutex.then(async () => {
                            try {
                                t(await e())
                            } catch (e) {
                                r(e)
                            }
                        })
                    })
                }
            }
            async function l(e) {
                let t = new u,
                    r = t => ({
                        isDefaultIdentity: t?.isDefaultIdentity ?? !0,
                        settings: {
                            ...e.defaultSettings,
                            ...t?.settings ?? {}
                        },
                        segmentations: {
                            ...e.defaultSegmentations,
                            ...t?.segmentations ?? {}
                        },
                        settingsHash: t?.settingsHash ?? ""
                    }),
                    i = async e => {
                        let t = {};
                        for (let r in e) {
                            let n = e[r];
                            if (void 0 !== n) {
                                let e = await n();
                                void 0 !== e && (t[r] = e)
                            }
                        }
                        return t
                    }, s = async (t, i) => {
                        e.logger.debug(`Requesting latest settings from remote at time: ${new Date().getTime()}`);
                        let s = await n(e.apiManager.requestSettingsAndSegmentations(i));
                        if (s.err) return e.logger.debug(s.err.message), r(null);
                        if (null == s.data) return r(null);
                        try {
                            let n = s.data,
                                i = {
                                    isDefaultIdentity: !1,
                                    settings: n.settings,
                                    segmentations: n.segmentations,
                                    settingsHash: n.settings_hash
                                },
                                a = r(i);
                            return await e.persistenceManager.saveIdentity(a, t), a
                        } catch (t) {
                            return e.logger.error("Failed to store remote identity", t), r(null)
                        }
                    }, a = async t => {
                        let r = await e.persistenceManager.loadIdentity(t);
                        if (!r) return null;
                        let {
                            identity: n,
                            updatedAt: i
                        } = r;
                        return i + e.identityCacheTtlInMs < new Date().getTime() ? null : n
                    }, o = async () => {
                        if (e.shouldReturnDefaultsImmediately) return {
                            isDefaultIdentity: !0,
                            settings: e.defaultSettings,
                            segmentations: e.defaultSegmentations,
                            settingsHash: ""
                        };
                        let [t, n] = await Promise.all([i(e.deviceAttributeGetters), i(e.appSpecificAttributeGetters)]), o = {
                            ...t,
                            ...n
                        }, u = await e.userIdGenerator(o);
                        try {
                            let e = await a(u);
                            if (e) return r(e);
                            return await s(u, o)
                        } catch (t) {
                            return e.logger.error("Failed to fetch identity", t), r(null)
                        }
                    }, l = async () => await t.run(async () => await o());
                return {
                    isSecretMenuEligible: async () => {
                        let e = await l();
                        return !!e?.settings?.is_spooner_device
                    },
                    getAllExperiments: async () => {
                        let [t, r] = await Promise.all([i(e.deviceAttributeGetters), i(e.appSpecificAttributeGetters)]);
                        return await e.apiManager.getAllExperiments({
                            ...t,
                            ...r
                        })
                    },
                    setExperimentSegmentation: (t, r, n) => e.apiManager.forceExperimentSegmentation(t, r, n),
                    setExperimentSegmentations: t => e.apiManager.forceExperimentSegmentations(t),
                    getDeviceAttributes: async () => await i(e.deviceAttributeGetters),
                    getUserAttributes: async () => await i(e.appSpecificAttributeGetters),
                    excludeFromSegmentation: (t, r) => e.apiManager.setSegmentationState(t, r),
                    getIdentity: l
                }
            }
            async function c(e, t = {}) {
                let r = t.createAPIManager || o,
                    n = t.createEntityManager || l,
                    i = r({
                        fetcher: e.fetcher,
                        appId: e.appId,
                        baseUrl: e.baseUrl,
                        goesThroughOrionProxy: e.goesThroughOrionProxy ?? !1
                    }),
                    s = await n({
                        apiManager: i,
                        persistenceManager: e.persistenceManager,
                        logger: e.logger,
                        defaultSettings: e.defaultSettings,
                        defaultSegmentations: e.defaultSegmentations,
                        deviceAttributeGetters: e.deviceAttributeGetters,
                        appSpecificAttributeGetters: e.appSpecificAttributeGetters,
                        userIdGenerator: e.userIdGenerator,
                        shouldReturnDefaultsImmediately: e.shouldReturnDefaultsImmediately,
                        identityCacheTtlInMs: e.identityCacheTtlInMs
                    });
                return {
                    identity: {
                        get: s.getIdentity
                    },
                    secret: {
                        isAvailable: s.isSecretMenuEligible,
                        getAllExperiments: s.getAllExperiments,
                        setExperimentSegmentation: s.setExperimentSegmentation,
                        setExperimentSegmentations: s.setExperimentSegmentations,
                        getDeviceAttributes: s.getDeviceAttributes,
                        getUserAttributes: s.getUserAttributes,
                        excludeFromSegmentation: s.excludeFromSegmentation
                    }
                }
            }
        }
    }
]);
//# sourceMappingURL=2134.aca82b9211c081eb.js.map