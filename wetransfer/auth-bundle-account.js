"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2704], {
        3899: (e, t, i) => {
            i.r(t), i.d(t, {
                AccountCallback: () => _,
                default: () => h
            });
            var r = i(23798),
                n = i(21462),
                o = i(38169),
                a = i(21848),
                s = i(39377),
                l = i(89187),
                c = i(51853),
                u = i(40334),
                d = i(8681),
                g = i(79716),
                f = i(7686),
                v = i(5619),
                E = i(5712),
                T = i(55676),
                A = i(72255),
                I = i(41821),
                k = i(10995);
            let p = {
                    login: a.iD
                },
                b = (0, o.Ng)(e => {
                    let {
                        auth: t,
                        user: i
                    } = e;
                    return {
                        isFromMFA: location.search.includes("enabledMFA="),
                        isLoggedIn: !1 !== i.loggedIn,
                        isLoading: t.isLoading,
                        isInitialized: t.isInitialized,
                        state: t.state,
                        loginProvider: t["https://wetransfer.com/provider"]
                    }
                }, p),
                w = [{
                    key: "transfer-subscriber-benefits",
                    route: "/workspace/subscriber-benefits"
                }, {
                    key: d.h,
                    route: c.s0.route
                }],
                _ = e => {
                    let {
                        isFromMFA: t,
                        isLoggedIn: i,
                        isInitialized: a,
                        isLoading: d,
                        state: p,
                        login: b,
                        loginProvider: _
                    } = e, h = (0, o.wA)();
                    return (0, E.S)(() => {
                        (0, v.Aq)()
                    }), (0, n.useEffect)(() => {
                        if (a && !d) {
                            if (!i && t) return void b();
                            let r = new URLSearchParams(location.search.replace("?", "")),
                                n = r.get(I.INVITE_ID),
                                o = r.get(I.INVITE_TOKEN),
                                a = r.get(I.WORKSPACE_ID);
                            if (n && o) {
                                window.location.href = (0, f.Ts)(n, o, a);
                                return
                            }
                            let s = r.get("tier"),
                                d = r.get("workspaceId"),
                                v = r.get("redirect"),
                                E = (e => !!e && e.includes("PMP_camp_"))(r.get("trk") || "");
                            if (d && (T.A.set(u.o.cookies.currentTeam.name, d, {
                                    days: 365,
                                    domain: (0, g.R)(),
                                    path: "/"
                                }), h(k.A.User.getUser())), i && t) return void A.A.navigateTo("/account");
                            if (i && (!s || s === l.js.FREE && !E)) {
                                var e;
                                if (r.get(I.INVITE_ACCEPTED) && d) return void A.A.navigateTo("".concat(c.kH.route, "?").concat(I.INVITE_ACCEPTED, "=").concat(d));
                                let t = w.find(e => null == v ? void 0 : v.includes(e.key));
                                return void A.A.navigateTo(null != (e = null == t ? void 0 : t.route) ? e : "/")
                            }!s && (null == p ? void 0 : p.signUpTier) && Object.values(l.js).includes(null == p ? void 0 : p.signUpTier) && (s = p.signUpTier);
                            let _ = s && s !== l.js.FREE ? c.bP.route : "/";
                            A.A.navigateTo(_), window.location.reload()
                        }
                    }, [t, i, a, d, p, b, _, h]), (0, r.jsx)(s.A, {})
                },
                h = b(_)
        }
    }
]);
//# sourceMappingURL=auth-bundle-account.d3a6e5885ff99000.js.map