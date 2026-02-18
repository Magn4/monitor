"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5490], {
        32167: (e, t, s) => {
            s.r(t), s.d(t, {
                Enable: () => y,
                default: () => N
            });
            var a = s(23798),
                n = s(50084),
                o = s.n(n),
                r = s(21462),
                c = s(38169),
                i = s(72255),
                l = s(29069),
                p = s(44259),
                d = s(84530);
            let u = e => {
                    let {
                        appId: t = ""
                    } = e;
                    return (0, a.jsx)("a", {
                        href: "https://apps.apple.com/app/".concat(t),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "vendor__app-store-download",
                        children: (0, a.jsx)("img", {
                            src: d.A.image("vendors/app_store_download.svg"),
                            alt: "App Store Download"
                        })
                    })
                },
                _ = e => {
                    let {
                        appId: t = ""
                    } = e;
                    return (0, a.jsx)("a", {
                        href: "https://play.google.com/store/apps/details?id=".concat(t, "&hl=").concat(d.A.locale),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "vendor__google-play-download",
                        children: (0, a.jsx)("img", {
                            src: d.A.image("vendors/google_play_download.svg"),
                            alt: "Google Play Download"
                        })
                    })
                };
            var h = s(15321),
                g = s(30631),
                x = s(10995);
            let j = "google-authenticator/id388497605",
                m = "com.google.android.apps.authenticator2",
                f = e => {
                    let {
                        redirectToTwoFactorSSOSetup: t
                    } = e;
                    async function s() {
                        await t()
                    }
                    return (0, a.jsxs)("div", {
                        className: "instruction-step",
                        children: [(0, a.jsxs)("div", {
                            className: "instruction-step__text",
                            children: [(0, a.jsx)("div", {
                                className: "instruction-step__icon",
                                children: (0, a.jsx)(p.Ay, {
                                    color: h.W5,
                                    type: "Phone"
                                })
                            }), (0, a.jsx)("div", {
                                className: "instruction-step__heading",
                                children: (0, a.jsx)("h2", {
                                    className: "instruction-step__title",
                                    children: d.A.t("page.password_and_security.two-factor-authentication.step_one_title")
                                })
                            }), (0, a.jsx)("p", {
                                className: "instruction-step__body",
                                children: d.A.t("page.password_and_security.two-factor-authentication.step_one_text")
                            }), (0, a.jsx)("div", {
                                className: "instruction-step__badges",
                                children: g.Ay.isAndroid ? (0, a.jsx)(_, {
                                    appId: m
                                }) : g.Ay.isIphone || g.Ay.isTablet ? (0, a.jsx)(u, {
                                    appId: j
                                }) : (0, a.jsxs)(r.Fragment, {
                                    children: [(0, a.jsx)(u, {
                                        appId: j
                                    }), (0, a.jsx)(_, {
                                        appId: m
                                    })]
                                })
                            })]
                        }), (0, a.jsx)("div", {
                            className: "instruction-step__next-page",
                            children: (0, a.jsx)(l.A, {
                                onClick: s,
                                text: d.A.t("page.password_and_security.two-factor-authentication.next_step"),
                                className: "instruction-step__button"
                            })
                        })]
                    })
                };
            f.propTypes = {
                redirectToTwoFactorSSOSetup: o().func.isRequired
            };
            let w = {
                    redirectToTwoFactorSSOSetup: x.A.User.redirectToTwoFactorSSOSetup
                },
                v = (0, c.Ng)(null, w)(f);

            function y(e) {
                let {
                    setReturnPath: t,
                    otpEnabled: s
                } = e;
                return (0, r.useEffect)(() => (t("/account"), function() {
                    t(null, null)
                })), (0, r.useEffect)(() => {
                    s && i.A.navigateTo("/account")
                }, [s]), (0, a.jsx)("div", {
                    className: "enable",
                    children: (0, a.jsx)(v, {})
                })
            }
            y.propTypes = {
                setReturnPath: o().func.isRequired,
                otpEnabled: o().bool.isRequired
            };
            let N = (0, c.Ng)(e => {
                let {
                    user: t
                } = e;
                return {
                    otpEnabled: t.otpEnabled
                }
            })(y)
        }
    }
]);
//# sourceMappingURL=two-factor-authentication-enable.1e6105c0b034ef70.js.map