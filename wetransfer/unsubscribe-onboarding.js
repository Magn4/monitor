"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3548], {
        71318: (e, s, i) => {
            i.d(s, {
                A: () => f
            });
            var r = i(23798),
                n = i(50084),
                t = i.n(n),
                a = i(21462),
                c = i(38169),
                u = i(29069),
                o = i(42789),
                b = i(84530),
                l = i(96644);
            let d = "unsubscribe",
                g = e => {
                    let {
                        heading: s = b.A.t("page.unsubscribeonboarding.title"),
                        message: i,
                        ctaLabel: n = b.A.t("page.unsubscribeonboarding.action"),
                        footerHtml: t = b.A.t("page.unsubscribeonboarding.contact", {
                            email: '<a href="mailto:subscriptions@wetransfer.com">subscriptions@wetransfer.com</a>'
                        }),
                        successHeading: c,
                        successCtaLabel: g,
                        successCtaUrl: p,
                        action: f,
                        setNotification: h
                    } = e, [m, _] = a.useState(!1), [x, N] = a.useState(!1);
                    if (m) return (0, r.jsxs)("div", {
                        className: d,
                        children: [(0, r.jsx)("h1", {
                            children: c
                        }), (0, r.jsx)("a", {
                            href: p,
                            className: "button button--enabled",
                            children: g
                        })]
                    });
                    let j = async () => {
                        N(!0);
                        try {
                            await f(), _(!0)
                        } catch (e) {
                            e.status === o.iu.FORBIDDEN ? h({
                                category: l.aF.Error,
                                details: "unsubscribe_expiration_invalid_signature"
                            }) : h({
                                category: l.aF.Error,
                                details: "unsubscribe_expiration_exception"
                            })
                        }
                        N(!1)
                    };
                    return (0, r.jsxs)("div", {
                        className: d,
                        children: [(0, r.jsx)("h1", {
                            children: s
                        }), (0, r.jsx)("p", {
                            className: "".concat(d, "__message"),
                            children: i
                        }), (0, r.jsx)(u.A, {
                            text: n,
                            active: !x,
                            onClick: j
                        }), (0, r.jsx)("p", {
                            className: "".concat(d, "__footer"),
                            dangerouslySetInnerHTML: {
                                __html: t
                            }
                        })]
                    })
                };
            g.propTypes = {
                heading: t().string,
                message: t().string.isRequired,
                ctaLabel: t().string,
                footerHtml: t().string,
                successHeading: t().string.isRequired,
                successCtaLabel: t().string.isRequired,
                successCtaUrl: t().string.isRequired,
                action: t().func.isRequired,
                setNotification: t().func.isRequired
            };
            let p = {
                    setNotification: l.P9.setPanelNotification
                },
                f = (0, c.Ng)(null, p)(g)
        },
        76525: (e, s, i) => {
            i.r(s), i.d(s, {
                UnsubscribeOnboardingPage: () => b,
                default: () => d
            });
            var r = i(23798),
                n = i(50084),
                t = i.n(n);
            i(21462);
            var a = i(38169),
                c = i(71318),
                u = i(84530),
                o = i(10995);
            let b = e => {
                let {
                    unsubscribeOnboarding: s,
                    route: i
                } = e;
                return (0, r.jsx)(c.A, {
                    message: u.A.t("page.unsubscribeonboarding.message"),
                    successHeading: u.A.t("page.unsubscribeonboarding.done"),
                    successCtaLabel: u.A.t("page.unsubscribeonboarding.back"),
                    successCtaUrl: "/",
                    action: () => s(i.query.vid)
                })
            };
            b.propTypes = {
                route: t().object.isRequired,
                unsubscribeOnboarding: t().func.isRequired
            };
            let l = {
                    unsubscribeOnboarding: o.A.User.unsubscribeOnboarding
                },
                d = (0, a.Ng)(e => {
                    let {
                        route: s
                    } = e;
                    return {
                        route: s
                    }
                }, l)(b)
        }
    }
]);
//# sourceMappingURL=unsubscribe-onboarding.d2ddaa0ba91b02b1.js.map