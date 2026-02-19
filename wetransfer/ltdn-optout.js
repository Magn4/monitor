"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5251], {
        22775: (e, s, i) => {
            i.r(s), i.d(s, {
                LinkTransferUnsubscribePage: () => l,
                default: () => d
            });
            var r = i(23798),
                n = i(50084),
                a = i.n(n);
            i(21462);
            var t = i(38169),
                c = i(71318),
                u = i(84530),
                o = i(10995);
            let l = e => {
                let {
                    unsubscribeLinkTransfer: s,
                    route: i
                } = e;
                return (0, r.jsx)(c.A, {
                    message: u.A.t("page.link_downloads_unsubscribe.body"),
                    successHeading: u.A.t("page.unsubscribeonboarding.done"),
                    successCtaLabel: u.A.t("page.link_downloads_unsubscribe.cta"),
                    successCtaUrl: "/transfers",
                    action: () => s(i.query.vid)
                })
            };
            l.propTypes = {
                route: a().object.isRequired,
                unsubscribeLinkTransfer: a().func.isRequired
            };
            let b = {
                    unsubscribeLinkTransfer: o.A.User.unsubscribeLinkTransfer
                },
                d = (0, t.Ng)(e => {
                    let {
                        route: s
                    } = e;
                    return {
                        route: s
                    }
                }, b)(l)
        },
        71318: (e, s, i) => {
            i.d(s, {
                A: () => _
            });
            var r = i(23798),
                n = i(50084),
                a = i.n(n),
                t = i(21462),
                c = i(75546),
                u = i(38169),
                o = i(29069),
                l = i(42789),
                b = i(84530),
                d = i(96644);
            let g = "unsubscribe",
                p = e => {
                    let {
                        heading: s = b.A.t("page.unsubscribeonboarding.title"),
                        message: i,
                        ctaLabel: n = b.A.t("page.unsubscribeonboarding.action"),
                        successHeading: a,
                        successCtaLabel: u,
                        successCtaUrl: p,
                        action: f,
                        setNotification: _
                    } = e, [h, x] = t.useState(!1), [N, j] = t.useState(!1);
                    if (h) return (0, r.jsxs)("div", {
                        className: g,
                        children: [(0, r.jsx)("h1", {
                            children: a
                        }), (0, r.jsx)("a", {
                            href: p,
                            className: "button button--enabled",
                            children: u
                        })]
                    });
                    let k = async () => {
                        j(!0);
                        try {
                            await f(), x(!0)
                        } catch (e) {
                            e.status === l.iu.FORBIDDEN ? _({
                                category: d.aF.Error,
                                details: "unsubscribe_expiration_invalid_signature"
                            }) : _({
                                category: d.aF.Error,
                                details: "unsubscribe_expiration_exception"
                            })
                        }
                        j(!1)
                    };
                    return (0, r.jsxs)("div", {
                        className: g,
                        children: [(0, r.jsx)("h1", {
                            children: s
                        }), (0, r.jsx)("p", {
                            className: "".concat(g, "__message"),
                            children: i
                        }), (0, r.jsx)(o.A, {
                            text: n,
                            active: !N,
                            onClick: k
                        }), (0, r.jsx)("p", {
                            className: "".concat(g, "__footer"),
                            children: (0, r.jsx)(c.x6, {
                                i18nKey: "page.unsubscribeonboarding.contact",
                                components: {
                                    a: (0, r.jsx)("a", {
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
            let f = {
                    setNotification: d.P9.setPanelNotification
                },
                _ = (0, u.Ng)(null, f)(p)
        }
    }
]);
//# sourceMappingURL=ltdn-optout.293ca454185c56d9.js.map
