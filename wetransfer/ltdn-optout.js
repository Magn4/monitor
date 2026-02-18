"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5251], {
        22775: (e, s, r) => {
            r.r(s), r.d(s, {
                LinkTransferUnsubscribePage: () => l,
                default: () => d
            });
            var i = r(23798),
                n = r(50084),
                t = r.n(n);
            r(21462);
            var a = r(38169),
                c = r(71318),
                u = r(84530),
                o = r(10995);
            let l = e => {
                let {
                    unsubscribeLinkTransfer: s,
                    route: r
                } = e;
                return (0, i.jsx)(c.A, {
                    message: u.A.t("page.link_downloads_unsubscribe.body"),
                    successHeading: u.A.t("page.unsubscribeonboarding.done"),
                    successCtaLabel: u.A.t("page.link_downloads_unsubscribe.cta"),
                    successCtaUrl: "/transfers",
                    action: () => s(r.query.vid)
                })
            };
            l.propTypes = {
                route: t().object.isRequired,
                unsubscribeLinkTransfer: t().func.isRequired
            };
            let b = {
                    unsubscribeLinkTransfer: o.A.User.unsubscribeLinkTransfer
                },
                d = (0, a.Ng)(e => {
                    let {
                        route: s
                    } = e;
                    return {
                        route: s
                    }
                }, b)(l)
        },
        71318: (e, s, r) => {
            r.d(s, {
                A: () => f
            });
            var i = r(23798),
                n = r(50084),
                t = r.n(n),
                a = r(21462),
                c = r(38169),
                u = r(29069),
                o = r(42789),
                l = r(84530),
                b = r(96644);
            let d = "unsubscribe",
                g = e => {
                    let {
                        heading: s = l.A.t("page.unsubscribeonboarding.title"),
                        message: r,
                        ctaLabel: n = l.A.t("page.unsubscribeonboarding.action"),
                        footerHtml: t = l.A.t("page.unsubscribeonboarding.contact", {
                            email: '<a href="mailto:subscriptions@wetransfer.com">subscriptions@wetransfer.com</a>'
                        }),
                        successHeading: c,
                        successCtaLabel: g,
                        successCtaUrl: p,
                        action: f,
                        setNotification: _
                    } = e, [h, m] = a.useState(!1), [x, N] = a.useState(!1);
                    if (h) return (0, i.jsxs)("div", {
                        className: d,
                        children: [(0, i.jsx)("h1", {
                            children: c
                        }), (0, i.jsx)("a", {
                            href: p,
                            className: "button button--enabled",
                            children: g
                        })]
                    });
                    let k = async () => {
                        N(!0);
                        try {
                            await f(), m(!0)
                        } catch (e) {
                            e.status === o.iu.FORBIDDEN ? _({
                                category: b.aF.Error,
                                details: "unsubscribe_expiration_invalid_signature"
                            }) : _({
                                category: b.aF.Error,
                                details: "unsubscribe_expiration_exception"
                            })
                        }
                        N(!1)
                    };
                    return (0, i.jsxs)("div", {
                        className: d,
                        children: [(0, i.jsx)("h1", {
                            children: s
                        }), (0, i.jsx)("p", {
                            className: "".concat(d, "__message"),
                            children: r
                        }), (0, i.jsx)(u.A, {
                            text: n,
                            active: !x,
                            onClick: k
                        }), (0, i.jsx)("p", {
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
                    setNotification: b.P9.setPanelNotification
                },
                f = (0, c.Ng)(null, p)(g)
        }
    }
]);
//# sourceMappingURL=ltdn-optout.8fe3227327cc5337.js.map
