"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [113], {
        77555: (e, s, t) => {
            t.r(s), t.d(s, {
                default: () => g
            });
            var i = t(23798),
                n = t(46001),
                r = t.n(n),
                u = t(21462),
                a = t(97116),
                c = t(87963),
                b = t(45223),
                l = t(84530),
                _ = t(72255),
                d = t(74067),
                k = function(e) {
                    return e.UNSUBSCRIBE_CLICKED = "marketing_email_unsubscribe_clicked", e.UNSUBSCRIBE_SUCCESS = "marketing_email_unsubscribe_success", e
                }(k || {});
            let o = {
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
                let [e, s] = (0, u.useState)(!1), [t, n] = (0, u.useState)(!1), {
                    setMarketingConsent: k
                } = (0, b.l)(), g = (0, d.LT)(), m = "pro" === g.get("account_type"), p = g.get("email"), f = (0, u.useCallback)(async () => {
                    if (!t) {
                        if (e) return void _.A.navigateTo("/");
                        n(!0), (0, c.Od)().trackUserAction(o.unsubscribeClicked(p));
                        try {
                            await k(!1), s(!0), (0, c.Od)().trackUserAction(o.unsubscribeSuccess(p))
                        } finally {
                            n(!1)
                        }
                    }
                }, [t, e, k]), S = e ? l.A.t("page.unsubscribemarketing.title_unsubscribed") : l.A.t("page.unsubscribemarketing.title"), C = e ? l.A.t("page.unsubscribemarketing.description_unsubscribed") : l.A.t("page.unsubscribemarketing.description"), A = e ? l.A.t("page.unsubscribemarketing.button_unsubscribed") : l.A.t("page.unsubscribemarketing.button"), [h, y] = (0, u.useState)(t);
                return (0, u.useEffect)(() => {
                    y(t)
                }, [t]), (0, i.jsxs)("div", {
                    className: "MarketingEmailsUnsubscribe",
                    children: [(0, i.jsx)("h1", {
                        children: S
                    }), (0, i.jsx)("p", {
                        children: C
                    }), (0, i.jsx)(a.$, {
                        type: "submit",
                        disabled: h,
                        onClick: f,
                        className: r()("transfer__button", "transfer__button--expiry-selector", {
                            "transfer__button--inactive": h
                        }),
                        "data-testid": "uploaderForm-transfer-button",
                        children: A
                    }), m && (0, i.jsx)("p", {
                        dangerouslySetInnerHTML: {
                            __html: l.A.t("page.unsubscribemarketing.pro.body")
                        },
                        className: "pro-message"
                    })]
                })
            }
        }
    }
]);
//# sourceMappingURL=unsubscribe-marketing.485a05d474a58da3.js.map
