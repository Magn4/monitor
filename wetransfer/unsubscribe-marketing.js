"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [113], {
        77555: (e, s, i) => {
            i.r(s), i.d(s, {
                default: () => g
            });
            var t = i(23798),
                n = i(46001),
                r = i.n(n),
                u = i(21462),
                a = i(75546),
                c = i(15933),
                b = i(87963),
                l = i(45223),
                o = i(84530),
                d = i(72255),
                _ = i(74067),
                k = function(e) {
                    return e.UNSUBSCRIBE_CLICKED = "marketing_email_unsubscribe_clicked", e.UNSUBSCRIBE_SUCCESS = "marketing_email_unsubscribe_success", e
                }(k || {});
            let m = {
                unsubscribeClicked: e => ({
                    kind: "marketing_email_unsubscribe_clicked",
                    info: {
                        ...e && {
                            email: e
                        }
                    }
                }),
                unsubscribeSuccess: e => ({
                    kind: "marketing_email_unsubscribe_success",
                    info: {
                        ...e && {
                            email: e
                        }
                    }
                })
            };

            function g() {
                let [e, s] = (0, u.useState)(!1), [i, n] = (0, u.useState)(!1), {
                    setMarketingConsent: k
                } = (0, l.l)(), g = (0, _.LT)(), p = "pro" === g.get("account_type"), f = g.get("email"), C = (0, u.useCallback)(async () => {
                    if (!i) {
                        if (e) return void d.A.navigateTo("/");
                        n(!0), (0, b.Od)().trackUserAction(m.unsubscribeClicked(f));
                        try {
                            await k(!1), s(!0), (0, b.Od)().trackUserAction(m.unsubscribeSuccess(f))
                        } finally {
                            n(!1)
                        }
                    }
                }, [i, e, k]), S = e ? o.A.t("page.unsubscribemarketing.title_unsubscribed") : o.A.t("page.unsubscribemarketing.title"), h = e ? o.A.t("page.unsubscribemarketing.description_unsubscribed") : o.A.t("page.unsubscribemarketing.description"), x = e ? o.A.t("page.unsubscribemarketing.button_unsubscribed") : o.A.t("page.unsubscribemarketing.button"), [A, y] = (0, u.useState)(i);
                return (0, u.useEffect)(() => {
                    y(i)
                }, [i]), (0, t.jsxs)("div", {
                    className: "MarketingEmailsUnsubscribe",
                    children: [(0, t.jsx)("h1", {
                        children: S
                    }), (0, t.jsx)("p", {
                        children: h
                    }), (0, t.jsx)(c.$, {
                        type: "submit",
                        disabled: A,
                        onClick: C,
                        className: r()("transfer__button", "transfer__button--expiry-selector", {
                            "transfer__button--inactive": A
                        }),
                        "data-testid": "uploaderForm-transfer-button",
                        children: x
                    }), p && (0, t.jsx)("p", {
                        className: "pro-message",
                        children: (0, t.jsx)(a.x6, {
                            i18nKey: "page.unsubscribemarketing.pro.body",
                            components: {
                                a: (0, t.jsx)("a", {
                                    href: "mailto:subscriptions@wetransfer.com"
                                })
                            }
                        })
                    })]
                })
            }
        }
    }
]);
//# sourceMappingURL=unsubscribe-marketing.9df79465b933299f.js.map
