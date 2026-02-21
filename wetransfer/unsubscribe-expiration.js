"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2604], {
        53824: (e, s, i) => {
            i.r(s), i.d(s, {
                UnsubscribeExpirationPage: () => x,
                default: () => h
            });
            var t = i(23798),
                n = i(50084),
                r = i.n(n),
                u = i(21462),
                a = i(75546),
                c = i(38169),
                o = i(29069),
                b = i(84530),
                p = i(72255),
                d = i(10995);
            class x extends u.Component {
                async unsubscribe(e, s) {
                    let {
                        unsubscribeFromExpirationReminders: i,
                        route: t
                    } = this.props;
                    if (!this.state.requesting) {
                        this.setState({
                            requesting: !0
                        });
                        try {
                            await i({
                                signature: s,
                                isUser: !!t.query.account_type,
                                email: e,
                                emailType: t.query.email_type
                            }), this.setState({
                                unsubscribed: !0
                            })
                        } catch (e) {}
                        this.setState({
                            requesting: !1
                        })
                    }
                }
                render() {
                    let {
                        route: e
                    } = this.props, s = e.query.sig, i = e.query.email, n = "pro" === e.query.account_type, r = "transfer_downloaded" === e.query.email_type, u = "transfer_not_downloaded" === e.query.email_type, c = () => {
                        this.unsubscribe(i, s)
                    };
                    return this.state.unsubscribed ? (0, t.jsxs)("div", {
                        className: "unsubscribe-expiration",
                        children: [(0, t.jsx)("h1", {
                            children: b.A.t("page.unsubscribeexpiration.title_unsubscribed")
                        }), (0, t.jsx)("p", {
                            children: b.A.t("page.unsubscribeexpiration.description_unsubscribed")
                        }), (0, t.jsx)(o.A, {
                            text: b.A.t("page.unsubscribeexpiration.button_unsubscribed"),
                            active: !0,
                            onClick: () => p.A.navigateTo("/")
                        })]
                    }) : u && !n ? (0, t.jsxs)("div", {
                        className: "unsubscribe-expiration",
                        children: [(0, t.jsx)("h1", {
                            children: b.A.t("page.unsubscribeexpiration.not_downloaded.title")
                        }), (0, t.jsx)("p", {
                            children: b.A.t("page.unsubscribeexpiration.not_downloaded.body")
                        }), (0, t.jsx)(o.A, {
                            text: b.A.t("page.unsubscribeexpiration.button"),
                            active: !this.state.requesting,
                            onClick: c
                        })]
                    }) : r && !n ? (0, t.jsxs)("div", {
                        className: "unsubscribe-expiration",
                        children: [(0, t.jsx)("h1", {
                            children: b.A.t("page.unsubscribeexpiration.downloaded.title")
                        }), (0, t.jsx)("p", {
                            children: b.A.t("page.unsubscribeexpiration.downloaded.body")
                        }), (0, t.jsx)(o.A, {
                            text: b.A.t("page.unsubscribeexpiration.button"),
                            active: !this.state.requesting,
                            onClick: c
                        })]
                    }) : n ? (0, t.jsxs)("div", {
                        className: "unsubscribe-expiration",
                        children: [(0, t.jsx)("h1", {
                            children: b.A.t("page.unsubscribeexpiration.pro.title")
                        }), (0, t.jsx)("p", {
                            children: b.A.t("page.unsubscribeexpiration.pro.body_1")
                        }), (0, t.jsx)(o.A, {
                            text: b.A.t("page.unsubscribeexpiration.button"),
                            active: !this.state.requesting,
                            onClick: c
                        }), (0, t.jsx)("p", {
                            children: (0, t.jsx)(a.x6, {
                                i18nKey: "page.unsubscribeexpiration.pro.body_2",
                                components: {
                                    a: (0, t.jsx)("a", {
                                        href: "mailto:subscriptions@wetransfer.com"
                                    })
                                }
                            })
                        })]
                    }) : (0, t.jsxs)("div", {
                        className: "unsubscribe-expiration",
                        children: [(0, t.jsx)("h1", {
                            children: b.A.t("page.unsubscribeexpiration.title")
                        }), (0, t.jsx)("p", {
                            children: b.A.t("page.unsubscribeexpiration.description")
                        }), (0, t.jsx)(o.A, {
                            text: b.A.t("page.unsubscribeexpiration.button"),
                            active: !this.state.requesting,
                            onClick: c
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        unsubscribed: !1,
                        requesting: !1
                    }
                }
            }
            x.propTypes = {
                route: r().object,
                unsubscribeFromExpirationReminders: r().func
            };
            let l = {
                    unsubscribeFromExpirationReminders: d.A.User.unsubscribeFromExpirationReminders
                },
                h = (0, c.Ng)(null, l)(x)
        }
    }
]);
//# sourceMappingURL=unsubscribe-expiration.797daed00ebcf1d3.js.map
