"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3548], {
        71318: (e, s, i) => {
            i.d(s, {
                A: () => x
            });
            var n = i(23798),
                r = i(50084),
                a = i.n(r),
                t = i(21462),
                c = i(75546),
                u = i(38169),
                o = i(29069),
                b = i(42789),
                d = i(84530),
                l = i(96644);
            let g = "unsubscribe",
                p = e => {
                    let {
                        heading: s = d.A.t("page.unsubscribeonboarding.title"),
                        message: i,
                        ctaLabel: r = d.A.t("page.unsubscribeonboarding.action"),
                        successHeading: a,
                        successCtaLabel: u,
                        successCtaUrl: p,
                        action: h,
                        setNotification: x
                    } = e, [f, N] = t.useState(!1), [_, j] = t.useState(!1);
                    if (f) return (0, n.jsxs)("div", {
                        className: g,
                        children: [(0, n.jsx)("h1", {
                            children: a
                        }), (0, n.jsx)("a", {
                            href: p,
                            className: "button button--enabled",
                            children: u
                        })]
                    });
                    let m = async () => {
                        j(!0);
                        try {
                            await h(), N(!0)
                        } catch (e) {
                            e.status === b.iu.FORBIDDEN ? x({
                                category: l.aF.Error,
                                details: "unsubscribe_expiration_invalid_signature"
                            }) : x({
                                category: l.aF.Error,
                                details: "unsubscribe_expiration_exception"
                            })
                        }
                        j(!1)
                    };
                    return (0, n.jsxs)("div", {
                        className: g,
                        children: [(0, n.jsx)("h1", {
                            children: s
                        }), (0, n.jsx)("p", {
                            className: "".concat(g, "__message"),
                            children: i
                        }), (0, n.jsx)(o.A, {
                            text: r,
                            active: !_,
                            onClick: m
                        }), (0, n.jsx)("p", {
                            className: "".concat(g, "__footer"),
                            children: (0, n.jsx)(c.x6, {
                                i18nKey: "page.unsubscribeonboarding.contact",
                                components: {
                                    a: (0, n.jsx)("a", {
                                        href: "mailto:subscriptions@wetransfer.com"
                                    })
                                }
                            })
                        })]
                    })
                };
            p.propTypes = {
                heading: a().string,
                message: a().string.isRequired,
                ctaLabel: a().string,
                successHeading: a().string.isRequired,
                successCtaLabel: a().string.isRequired,
                successCtaUrl: a().string.isRequired,
                action: a().func.isRequired,
                setNotification: a().func.isRequired
            };
            let h = {
                    setNotification: l.P9.setPanelNotification
                },
                x = (0, u.Ng)(null, h)(p)
        },
        76525: (e, s, i) => {
            i.r(s), i.d(s, {
                UnsubscribeOnboardingPage: () => b,
                default: () => l
            });
            var n = i(23798),
                r = i(50084),
                a = i.n(r);
            i(21462);
            var t = i(38169),
                c = i(71318),
                u = i(84530),
                o = i(10995);
            let b = e => {
                let {
                    unsubscribeOnboarding: s,
                    route: i
                } = e;
                return (0, n.jsx)(c.A, {
                    message: u.A.t("page.unsubscribeonboarding.message"),
                    successHeading: u.A.t("page.unsubscribeonboarding.done"),
                    successCtaLabel: u.A.t("page.unsubscribeonboarding.back"),
                    successCtaUrl: "/",
                    action: () => s(i.query.vid)
                })
            };
            b.propTypes = {
                route: a().object.isRequired,
                unsubscribeOnboarding: a().func.isRequired
            };
            let d = {
                    unsubscribeOnboarding: o.A.User.unsubscribeOnboarding
                },
                l = (0, t.Ng)(e => {
                    let {
                        route: s
                    } = e;
                    return {
                        route: s
                    }
                }, d)(b)
        }
    }
]);
//# sourceMappingURL=unsubscribe-onboarding.1047d5f419a4d8e2.js.map
