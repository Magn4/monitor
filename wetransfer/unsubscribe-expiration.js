"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2604], {
        53824: (e, s, i) => {
            i.r(s), i.d(s, {
                UnsubscribeExpirationPage: () => d,
                default: () => x
            });
            var t = i(23798),
                n = i(50084),
                r = i.n(n),
                u = i(21462),
                a = i(38169),
                c = i(29069),
                b = i(84530),
                o = i(72255),
                p = i(10995);
            class d extends u.Component {
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
                    } = this.props, s = e.query.sig, i = e.query.email, n = "pro" === e.query.account_type, r = "transfer_downloaded" === e.query.email_type, u = "transfer_not_downloaded" === e.query.email_type, a = () => {
                        this.unsubscribe(i, s)
                    };
                    return this.state.unsubscribed ? (0, t.jsxs)("div", {
                        className: "unsubscribe-expiration",
                        children: [(0, t.jsx)("h1", {
                            children: b.A.t("page.unsubscribeexpiration.title_unsubscribed")
                        }), (0, t.jsx)("p", {
                            children: b.A.t("page.unsubscribeexpiration.description_unsubscribed")
                        }), (0, t.jsx)(c.A, {
                            text: b.A.t("page.unsubscribeexpiration.button_unsubscribed"),
                            active: !0,
                            onClick: () => o.A.navigateTo("/")
                        })]
                    }) : u && !n ? (0, t.jsxs)("div", {
                        className: "unsubscribe-expiration",
                        children: [(0, t.jsx)("h1", {
                            children: b.A.t("page.unsubscribeexpiration.not_downloaded.title")
                        }), (0, t.jsx)("p", {
                            children: b.A.t("page.unsubscribeexpiration.not_downloaded.body")
                        }), (0, t.jsx)(c.A, {
                            text: b.A.t("page.unsubscribeexpiration.button"),
                            active: !this.state.requesting,
                            onClick: a
                        })]
                    }) : r && !n ? (0, t.jsxs)("div", {
                        className: "unsubscribe-expiration",
                        children: [(0, t.jsx)("h1", {
                            children: b.A.t("page.unsubscribeexpiration.downloaded.title")
                        }), (0, t.jsx)("p", {
                            children: b.A.t("page.unsubscribeexpiration.downloaded.body")
                        }), (0, t.jsx)(c.A, {
                            text: b.A.t("page.unsubscribeexpiration.button"),
                            active: !this.state.requesting,
                            onClick: a
                        })]
                    }) : n ? (0, t.jsxs)("div", {
                        className: "unsubscribe-expiration",
                        children: [(0, t.jsx)("h1", {
                            children: b.A.t("page.unsubscribeexpiration.pro.title")
                        }), (0, t.jsx)("p", {
                            children: b.A.t("page.unsubscribeexpiration.pro.body_1")
                        }), (0, t.jsx)(c.A, {
                            text: b.A.t("page.unsubscribeexpiration.button"),
                            active: !this.state.requesting,
                            onClick: a
                        }), (0, t.jsx)("p", {
                            dangerouslySetInnerHTML: {
                                __html: b.A.t("page.unsubscribeexpiration.pro.body_2")
                            }
                        })]
                    }) : (0, t.jsxs)("div", {
                        className: "unsubscribe-expiration",
                        children: [(0, t.jsx)("h1", {
                            children: b.A.t("page.unsubscribeexpiration.title")
                        }), (0, t.jsx)("p", {
                            children: b.A.t("page.unsubscribeexpiration.description")
                        }), (0, t.jsx)(c.A, {
                            text: b.A.t("page.unsubscribeexpiration.button"),
                            active: !this.state.requesting,
                            onClick: a
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
            d.propTypes = {
                route: r().object,
                unsubscribeFromExpirationReminders: r().func
            };
            let l = {
                    unsubscribeFromExpirationReminders: p.A.User.unsubscribeFromExpirationReminders
                },
                x = (0, a.Ng)(null, l)(d)
        }
    }
]);
//# sourceMappingURL=unsubscribe-expiration.f32a83b37abe1d18.js.map
