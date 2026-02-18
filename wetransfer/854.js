"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5602], {
        45602: (e, a, t) => {
            t.r(a), t.d(a, {
                default: () => p
            });
            var r = t(23798),
                d = t(38169),
                l = t(62760),
                n = t(23376);
            let s = e => {
                let {
                    children: a
                } = e, {
                    auth: t
                } = (0, d.d4)(e => ({
                    auth: e.auth
                }));
                return (0, r.jsx)(n.Z3, {
                    auth: t,
                    isLoading: !t.isInitialized,
                    children: (0, r.jsx)(l.G, {
                        children: a
                    })
                })
            };
            var o = t(77765),
                i = t(55081),
                c = t(66976);
            let p = e => {
                let {
                    children: a
                } = e;
                return (0, r.jsx)(o.O7, {
                    children: (0, r.jsx)(i.t, {
                        logMessage: "ClientSideApp component crashed",
                        children: (0, r.jsx)(d.Kq, {
                            store: c.default,
                            children: (0, r.jsx)(s, {
                                children: a
                            })
                        })
                    })
                })
            }
        },
        55081: (e, a, t) => {
            t.d(a, {
                t: () => o
            });
            var r = t(23798),
                d = t(30530),
                l = t(33753),
                n = t(68505);
            let s = () => null,
                o = e => (0, r.jsx)(l.tH, {
                    onError: (a, t) => {
                        let r = "EMERGENCY: ".concat(e.logMessage) || 0,
                            l = {
                                error: a,
                                errorMessage: a.message,
                                errorStack: a.stack,
                                componentStack: null == t ? void 0 : t.componentStack,
                                digest: null == t ? void 0 : t.digest,
                                component: e.componentName
                            };
                        n.A.track(r, l), d.yf.logger.error(r, l)
                    },
                    FallbackComponent: e.fallbackComponent || s,
                    children: e.children
                })
        },
        77765: (e, a, t) => {
            t.d(a, {
                Kn: () => n,
                O7: () => s,
                on: () => o
            });
            var r = t(23798),
                d = t(21462);
            let l = {
                    data: {
                        isTransferAppLoaded: !1,
                        isAdsdkLoaded: !1,
                        isAdWallpaperEnabled: !1
                    }
                },
                n = (0, d.createContext)(l),
                s = e => {
                    let {
                        children: a
                    } = e, [t, s] = (0, d.useState)(l.data);
                    return (0, r.jsx)(n.Provider, {
                        value: {
                            data: t,
                            setTransferAppLoaded: e => s({
                                ...t,
                                isTransferAppLoaded: e
                            }),
                            setAdsdkLoaded: e => s({
                                ...t,
                                isAdsdkLoaded: e
                            }),
                            setAdWallpaperEnabled: e => s({
                                ...t,
                                isAdWallpaperEnabled: e
                            })
                        },
                        children: a
                    })
                },
                o = () => {
                    let {
                        data: e,
                        setTransferAppLoaded: a,
                        setAdsdkLoaded: t,
                        setAdWallpaperEnabled: r
                    } = (0, d.useContext)(n);
                    return {
                        data: e,
                        setTransferAppLoaded: a,
                        setAdsdkLoaded: t,
                        setAdWallpaperEnabled: r
                    }
                }
        }
    }
]);
//# sourceMappingURL=5602.32ec5aa52324a734.js.map
