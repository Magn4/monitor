"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1063], {
        71063: (e, s, n) => {
            n.r(s), n.d(s, {
                default: () => R
            });
            var i = n(23798),
                r = n(21462),
                c = n(75546),
                u = n(38169),
                a = n(97116),
                d = n(22352),
                l = n(87963),
                b = n(15913),
                t = n(72255),
                o = n(96644),
                _ = function(e) {
                    return e.PAGE_DISPLAYED = "renewal_reminder_unsubscribe_page_displayed", e.UNSUBSCRIBE_CLICKED = "renewal_reminder_unsubscribe_clicked", e.UNSUBSCRIBE_SUCCESS = "renewal_reminder_unsubscribe_success", e
                }(_ || {});
            let m = {
                pageDisplayed: () => ({
                    kind: "renewal_reminder_unsubscribe_page_displayed"
                }),
                unsubscribeClicked: () => ({
                    kind: "renewal_reminder_unsubscribe_clicked"
                }),
                unsubscribeSuccess: () => ({
                    kind: "renewal_reminder_unsubscribe_success"
                })
            };

            function R() {
                let {
                    t: e
                } = (0, c.Bd)(), s = (0, u.wA)(), [n, _] = (0, r.useState)(!1), [R, w] = (0, r.useState)(!1), [k] = (0, d.Ay)(), {
                    currentTeam: p
                } = (0, b.o)();
                (0, r.useEffect)(() => {
                    (0, l.Od)().trackUserAction(m.pageDisplayed())
                }, []);
                let f = (0, r.useCallback)(async () => {
                        if (!(null == p ? void 0 : p.id)) return void s(o.P9.setPanelNotification({
                            category: o.aF.Error,
                            details: e("unsubscribeRenewalReminder.error")
                        }));
                        w(!0);
                        try {
                            (0, l.Od)().trackUserAction(m.unsubscribeClicked()), await k({
                                teamId: p.id,
                                enabled: !1
                            }), _(!0), (0, l.Od)().trackUserAction(m.unsubscribeSuccess())
                        } catch (n) {
                            s(o.P9.setPanelNotification({
                                category: o.aF.Error,
                                details: e("unsubscribeRenewalReminder.error")
                            }))
                        } finally {
                            w(!1)
                        }
                    }, [null == p ? void 0 : p.id, k, s]),
                    C = (0, r.useCallback)(() => {
                        t.A.navigateTo("/")
                    }, []);
                return (0, i.jsxs)("div", {
                    className: "RenewalReminderUnsubscribe",
                    children: [(0, i.jsx)("h1", {
                        children: n ? e("unsubscribeRenewalReminder.title_unsubscribed") : e("unsubscribeRenewalReminder.title")
                    }), (0, i.jsx)("p", {
                        children: n ? e("unsubscribeRenewalReminder.description_unsubscribed") : e("unsubscribeRenewalReminder.description")
                    }), (0, i.jsx)(a.$, {
                        onClick: n ? C : f,
                        disabled: R,
                        children: n ? e("unsubscribeRenewalReminder.button_unsubscribed") : e("unsubscribeRenewalReminder.button")
                    }), (0, i.jsx)("div", {
                        className: "contact-message",
                        children: (0, i.jsx)(c.x6, {
                            i18nKey: "unsubscribeRenewalReminder.contact",
                            components: [(0, i.jsx)("a", {
                                href: "mailto:subscriptions@wetransfer.com"
                            }, 0)]
                        })
                    })]
                })
            }
        }
    }
]);
//# sourceMappingURL=1063.6e2977a5c6a4f06e.js.map
