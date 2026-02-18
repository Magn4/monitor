(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1221], {
        1427: (e, a, l) => {
            "use strict";
            l.d(a, {
                T: () => d
            });
            var t = l(23798),
                i = l(21462),
                s = l(26932);

            function r() {
                let {
                    innerWidth: e,
                    innerHeight: a
                } = window;
                return {
                    width: e,
                    height: a
                }
            }
            let d = () => {
                let [e, a] = i.useState(!0), {
                    width: l,
                    height: d
                } = function() {
                    let [e, a] = (0, i.useState)(r());
                    return (0, i.useEffect)(() => {
                        function e() {
                            a(r())
                        }
                        return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                    }, []), e
                }();
                return ((e, a) => {
                    let l = i.useRef();
                    i.useEffect(() => {
                        l.current = e
                    }, [e]), i.useEffect(() => {
                        {
                            let e = setTimeout(function() {
                                l.current()
                            }, 2e3);
                            return () => clearTimeout(e)
                        }
                    }, [a])
                })(() => a(!1), 2e3), (0, t.jsx)(s.A, {
                    width: l,
                    height: d,
                    recycle: e,
                    colors: ["#FF8E47", "#F15555", "#6040DD", "#FFC847"],
                    drawShape: function(e) {
                        e.fillRect(-this.w / 2, -this.h / 2, this.w, this.h)
                    }
                })
            }
        },
        17913: (e, a, l) => {
            "use strict";
            l.d(a, {
                e: () => u
            });
            var t = l(23798),
                i = l(46001),
                s = l.n(i),
                r = l(21462),
                d = l(38169),
                o = l(11732),
                n = l(78598),
                c = l(10995);
            let _ = "coreShape",
                m = e => {
                    let {
                        className: a,
                        pathId: l = _
                    } = e;
                    return (0, t.jsx)("svg", {
                        shapeRendering: "geometricPrecision",
                        className: a,
                        width: "220",
                        height: "220",
                        viewBox: "0 0 220 220",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, t.jsx)("path", {
                            id: l,
                            d: "M217.055 76.34C209.12 24.231 170.975 -0.415789 110 0.00530375C49.0249 -0.415789 10.8887 24.231 2.9447 76.34C1.02719 88.9015 0 99.5448 0 110C0 120.399 1.02719 131.087 2.9447 143.66C10.8801 195.769 49.0249 220.416 110 219.995C170.975 220.416 209.111 195.769 217.055 143.66C218.973 131.098 220 120.455 220 110C220 99.5895 218.973 88.9015 217.055 76.34Z",
                            fill: "currentColor"
                        })
                    })
                },
                w = () => (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(m, {
                        className: "Shapes__Hidden",
                        pathId: _
                    }), (0, t.jsx)("svg", {
                        viewBox: "0 0 220 220",
                        className: "Shapes__Hidden",
                        children: (0, t.jsx)("clipPath", {
                            id: "coreShapeClip",
                            clipPathUnits: "objectBoundingBox",
                            transform: "scale(0.00450)",
                            children: (0, t.jsx)("use", {
                                xlinkHref: "#".concat(_)
                            })
                        })
                    })]
                });
            var g = l(53123),
                p = l(26094);
            let W = e => {
                    let {
                        familyName: a,
                        givenName: l
                    } = e, i = e => {
                        let a = e.substring(0, 2);
                        return /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gi.test(a)
                    };
                    return (0, t.jsx)("div", {
                        "data-testid": "avatar-initials",
                        className: "Avatar__Initials",
                        children: (() => {
                            if (a) {
                                let e = i(l) ? l.substring(0, 2) : l.charAt(0),
                                    t = i(a) ? a.substring(0, 2) : a.charAt(0);
                                return "".concat(e).concat(t)
                            }
                            return "".concat(l.substring(0, 2))
                        })()
                    })
                },
                h = e => {
                    let {
                        onUpload: a,
                        src: l,
                        className: i,
                        large: r,
                        squircle: d,
                        userId: o,
                        displayName: n
                    } = e, c = a ? "button" : "div", _ = l === (o ? g.A.getAvatar(o) : null);
                    return (0, t.jsxs)(c, {
                        onClick: a,
                        className: s()("Avatar", i, {
                            "Avatar--Large": r,
                            "Avatar--Small": !r,
                            "Avatar--Squircle": d,
                            "Avatar--Circle": !d
                        }),
                        children: [(0, t.jsx)(w, {}), a && (0, t.jsx)(p.PE, {
                            className: "Avatar__UploadIcon",
                            "data-testid": "upload-icon"
                        }), (0, t.jsx)("div", {
                            className: "Avatar__dropshadow",
                            children: (0, t.jsx)("div", {
                                className: s()("Avatar__ImageWrapper", {
                                    "Avatar__ImageWrapper--initials": _
                                }),
                                children: _ ? (0, t.jsx)(W, {
                                    familyName: n.familyName,
                                    givenName: n.givenName
                                }) : (0, t.jsx)("img", {
                                    className: "Avatar__Image",
                                    src: l,
                                    alt: a ? "update avatar" : "your avatar"
                                })
                            })
                        })]
                    })
                },
                u = e => {
                    let {
                        className: a
                    } = e, {
                        user: l
                    } = (0, d.d4)(e => {
                        let {
                            user: a
                        } = e;
                        return {
                            user: a
                        }
                    }), i = (0, r.useRef)(null), _ = (0, d.wA)(), {
                        given_name: m,
                        family_name: w,
                        id: g,
                        profile_picture: p = {
                            image_url: ""
                        }
                    } = l;
                    async function W(e) {
                        try {
                            let a = await _(c.A.UI.uploadAsset(e, "profile_picture"));
                            a && (await o.A.updateUser({
                                profile_picture: a
                            }), _(c.A.User.getUser()))
                        } catch (e) {
                            n.A.track(e)
                        }
                    }
                    return (0, t.jsxs)("div", {
                        className: s()(a),
                        children: [(0, t.jsx)("input", {
                            style: {
                                display: "none"
                            },
                            ref: i,
                            onChange: function(e) {
                                W(Array.from(e.currentTarget.files)[0])
                            },
                            type: "file",
                            accept: "image/png,image/jpg,image/jpeg",
                            "data-testid": "test-id-avatar-upload"
                        }), (0, t.jsx)(h, {
                            src: p.image_url,
                            displayName: {
                                familyName: w,
                                givenName: m
                            },
                            userId: g,
                            onUpload: function() {
                                i.current.click()
                            },
                            large: !0,
                            squircle: !0,
                            className: "OnboardingWelcome__Avatar"
                        })]
                    })
                }
        },
        17944: (e, a, l) => {
            "use strict";
            l.d(a, {
                Jv: () => i,
                Wr: () => s,
                XH: () => r
            });
            var t = function(e) {
                    return e.SIGN_UP_CLICKED = "enterprise_sign_up_clicked", e.SWITCH_SCREEN_DISPLAYED = "enterprise_switch_screen_displayed", e.SWITCH_SCREEN_CONTINUED = "enterprise_switch_screen_continued", e.CONTACT_BUBBLE_CLICKED = "enterprise_contact_bubble_clicked", e.SEATS_SIMULATOR_EDITED = "enterprise_seats_simulator_edited", e.WORKSPACE_SETTINGS_WELCOME_CLICKED = "enterprise_workspace_settings_welcome_clicked", e.SURVEY_STEP_NEXT_CLICKED = "enterprise_survey_step_next_clicked", e
                }(t || {}),
                i = function(e) {
                    return e.SELF_SERVICE = "self_service", e.CUSTOM = "custom", e
                }({}),
                s = function(e) {
                    return e.SWITCH = "switch", e.CHECKOUT = "checkout", e
                }({});
            let r = {
                enterpriseSignUpClicked: {
                    kind: "enterprise_sign_up_clicked"
                },
                switchScreenDisplayed: {
                    kind: "enterprise_switch_screen_displayed"
                },
                switchScreenContinued: e => ({
                    kind: "enterprise_switch_screen_continued",
                    info: {
                        selection: e
                    }
                }),
                contactBubbleClicked: e => ({
                    kind: "enterprise_contact_bubble_clicked",
                    info: {
                        context: e
                    }
                }),
                seatsSimulatorEdited: e => ({
                    kind: "enterprise_seats_simulator_edited",
                    info: {
                        seatsCount: e
                    }
                }),
                workspaceSettingsWelcomeClicked: {
                    kind: "enterprise_workspace_settings_welcome_clicked"
                },
                surveyStepNextClicked: (e, a) => ({
                    kind: "enterprise_survey_step_next_clicked",
                    info: {
                        currentStep: a,
                        surveyData: e
                    }
                })
            }
        },
        63334: e => {
            e.exports = {
                container: "WorkspaceWelcomePage_container__KJjuK"
            }
        },
        83438: e => {
            e.exports = {
                "wt-display-heading-x-small-bold": "WorkspaceWelcome_wt-display-heading-x-small-bold__8H7rr",
                "wt-display-heading-small-bold-narrow": "WorkspaceWelcome_wt-display-heading-small-bold-narrow__SFrjZ",
                "wt-display-heading-small-bold": "WorkspaceWelcome_wt-display-heading-small-bold__4zc5g",
                title: "WorkspaceWelcome_title__VJORp",
                "wt-display-heading-small-bold-wide": "WorkspaceWelcome_wt-display-heading-small-bold-wide__wlFGq",
                "wt-display-heading-small-narrow": "WorkspaceWelcome_wt-display-heading-small-narrow__5_Ncr",
                "wt-display-heading-small": "WorkspaceWelcome_wt-display-heading-small__HcaeM",
                "wt-display-heading-small-wide": "WorkspaceWelcome_wt-display-heading-small-wide__C5JNT",
                "wt-display-heading-medium-bold-narrow": "WorkspaceWelcome_wt-display-heading-medium-bold-narrow__FybsP",
                "wt-display-heading-medium-bold": "WorkspaceWelcome_wt-display-heading-medium-bold__ixItY",
                "wt-display-heading-medium-bold-wide": "WorkspaceWelcome_wt-display-heading-medium-bold-wide__6Qv4O",
                "wt-display-heading-medium-narrow": "WorkspaceWelcome_wt-display-heading-medium-narrow__YNTjr",
                "wt-display-heading-medium": "WorkspaceWelcome_wt-display-heading-medium__xFZDi",
                "wt-display-heading-medium-wide": "WorkspaceWelcome_wt-display-heading-medium-wide__b2hlZ",
                "wt-display-heading-large-bold-narrow": "WorkspaceWelcome_wt-display-heading-large-bold-narrow__azM5_",
                "wt-display-heading-large-bold": "WorkspaceWelcome_wt-display-heading-large-bold__F6ORt",
                "wt-display-heading-large-bold-wide": "WorkspaceWelcome_wt-display-heading-large-bold-wide__I_R_E",
                "wt-display-heading-large-narrow": "WorkspaceWelcome_wt-display-heading-large-narrow__pCxR7",
                "wt-display-heading-large": "WorkspaceWelcome_wt-display-heading-large__pBMBg",
                "wt-display-heading-large-wide": "WorkspaceWelcome_wt-display-heading-large-wide__cESYf",
                "wt-display-heading": "WorkspaceWelcome_wt-display-heading__NH_p7",
                "wt-sub-heading": "WorkspaceWelcome_wt-sub-heading__XQL0h",
                "wt-text-heading-small-bold-narrow": "WorkspaceWelcome_wt-text-heading-small-bold-narrow__xVGGF",
                "wt-text-heading-small-bold": "WorkspaceWelcome_wt-text-heading-small-bold__7Chq4",
                "wt-text-heading-small-bold-wide": "WorkspaceWelcome_wt-text-heading-small-bold-wide__mi7l3",
                "wt-text-heading-small-narrow": "WorkspaceWelcome_wt-text-heading-small-narrow__SCgNY",
                "wt-text-heading-small": "WorkspaceWelcome_wt-text-heading-small__xsDem",
                "wt-text-heading-small-wide": "WorkspaceWelcome_wt-text-heading-small-wide__P4eSO",
                "wt-text-heading-medium-bold": "WorkspaceWelcome_wt-text-heading-medium-bold__Lwvs9",
                "wt-text-heading-medium-bold-wide": "WorkspaceWelcome_wt-text-heading-medium-bold-wide__OLegM",
                "wt-text-heading-medium-semi-narrow": "WorkspaceWelcome_wt-text-heading-medium-semi-narrow__mWqn2",
                "wt-text-heading-medium-narrow": "WorkspaceWelcome_wt-text-heading-medium-narrow__yOIxU",
                "wt-text-heading-medium-semi": "WorkspaceWelcome_wt-text-heading-medium-semi__IL3VZ",
                "wt-text-heading-medium-semi-wide": "WorkspaceWelcome_wt-text-heading-medium-semi-wide__Zzraz",
                "wt-text-heading-medium": "WorkspaceWelcome_wt-text-heading-medium__kcgcU",
                message: "WorkspaceWelcome_message___2sBI",
                "wt-text-heading-medium-wide": "WorkspaceWelcome_wt-text-heading-medium-wide__SN_Yn",
                "wt-text-heading-large-bold-narrow": "WorkspaceWelcome_wt-text-heading-large-bold-narrow__FTL0s",
                "wt-text-heading-large-bold": "WorkspaceWelcome_wt-text-heading-large-bold__5Wfyc",
                "wt-text-heading-large-bold-wide": "WorkspaceWelcome_wt-text-heading-large-bold-wide__kfWsl",
                "wt-text-heading-large-narrow": "WorkspaceWelcome_wt-text-heading-large-narrow__YXDtT",
                "wt-text-heading-large": "WorkspaceWelcome_wt-text-heading-large__DGk18",
                "wt-text-heading-large-wide": "WorkspaceWelcome_wt-text-heading-large-wide__HPqGD",
                "wt-text-heading-x-large-narrow": "WorkspaceWelcome_wt-text-heading-x-large-narrow__24kdJ",
                "wt-text-heading-x-large": "WorkspaceWelcome_wt-text-heading-x-large__OzBwI",
                "wt-text-heading-x-large-wide": "WorkspaceWelcome_wt-text-heading-x-large-wide__AyMlC",
                "wt-text-heading": "WorkspaceWelcome_wt-text-heading___jD5O",
                "wt-body-x-small-semi": "WorkspaceWelcome_wt-body-x-small-semi___Ixwq",
                "wt-body-x-small": "WorkspaceWelcome_wt-body-x-small__M5nZ2",
                "wt-body-small-bold": "WorkspaceWelcome_wt-body-small-bold__0WuBf",
                "wt-body-small-semi": "WorkspaceWelcome_wt-body-small-semi__mXgZk",
                "wt-body-small": "WorkspaceWelcome_wt-body-small__WaUx9",
                "wt-body-medium-bold": "WorkspaceWelcome_wt-body-medium-bold__4tjky",
                "wt-body-medium-semi": "WorkspaceWelcome_wt-body-medium-semi__VYLf2",
                "wt-body-medium": "WorkspaceWelcome_wt-body-medium__3fAAg",
                "wt-body-large-bold": "WorkspaceWelcome_wt-body-large-bold__JY76w",
                "wt-body-large": "WorkspaceWelcome_wt-body-large___nxD0",
                "wt-body-x-large": "WorkspaceWelcome_wt-body-x-large__hBQgW",
                "wt-label-x-small-bold": "WorkspaceWelcome_wt-label-x-small-bold__nUBOn",
                "wt-label-x-small-semi": "WorkspaceWelcome_wt-label-x-small-semi__hXZe4",
                "wt-label-x-small": "WorkspaceWelcome_wt-label-x-small__1VdmM",
                "wt-label-small-bold": "WorkspaceWelcome_wt-label-small-bold__ozVZp",
                "wt-label-small-semi": "WorkspaceWelcome_wt-label-small-semi__6z3tW",
                "wt-label-small": "WorkspaceWelcome_wt-label-small__iPfY0",
                "wt-label-medium-bold": "WorkspaceWelcome_wt-label-medium-bold__V48jr",
                "wt-label-medium-semi": "WorkspaceWelcome_wt-label-medium-semi__dZuG4",
                "wt-label-medium": "WorkspaceWelcome_wt-label-medium__FRCrs",
                "wt-label-large-bold": "WorkspaceWelcome_wt-label-large-bold__cI_w4",
                "wt-label-large-semi": "WorkspaceWelcome_wt-label-large-semi__45Xxg",
                "wt-label-large": "WorkspaceWelcome_wt-label-large__3NP_r",
                container: "WorkspaceWelcome_container__2ThJP",
                messageContainer: "WorkspaceWelcome_messageContainer__HI8Et",
                inviteDomainMembersContainer: "WorkspaceWelcome_inviteDomainMembersContainer__6PLPV",
                button: "WorkspaceWelcome_button__H94cn"
            }
        },
        86780: (e, a, l) => {
            "use strict";
            l.r(a), l.d(a, {
                default: () => C
            });
            var t = l(23798),
                i = l(21462),
                s = l(38169),
                r = l(45781),
                d = l(75546),
                o = l(58915),
                n = l(87963),
                c = l(1427),
                _ = l(24834),
                m = l(27469),
                w = l(83552),
                g = l(17913),
                p = l(89187),
                W = l(51853),
                h = l(17944),
                u = l(86781),
                b = l(83438),
                x = l.n(b);

            function k() {
                var e;
                let {
                    t: a
                } = (0, d.Bd)(), l = (0, s.d4)(u.mB), i = null != (e = l.planTier) ? e : p.js.ENTERPRISE, r = (0, p.dg)(i), b = (0, p.Is)(i), {
                    isEnabled: k,
                    canShowSpontaneousFlow: y
                } = (0, m.S)(), f = k && y;
                return (0, t.jsxs)("div", {
                    className: x().container,
                    children: [(0, t.jsx)(c.T, {}), !f && (0, t.jsx)(g.e, {}), (0, t.jsx)("h1", {
                        className: x().title,
                        children: f ? a("enterprise_onboarding.welcome.title_no_name", {
                            planName: r
                        }) : a("enterprise_onboarding.welcome.title", {
                            firstName: l.given_name,
                            planName: r
                        })
                    }), !f && (0, t.jsxs)("div", {
                        className: x().messageContainer,
                        children: [(0, t.jsx)("p", {
                            className: x().message,
                            children: a("enterprise_onboarding.welcome.message", {
                                planTier: b
                            })
                        }), (0, t.jsx)(o.$, {
                            className: x().button,
                            onClick: () => {
                                (0, n.Od)().trackUserAction(h.XH.workspaceSettingsWelcomeClicked), window.location.href = W.kH.route
                            },
                            appearance: "primary",
                            size: "medium",
                            children: a("enterprise_onboarding.welcome.cta")
                        })]
                    }), f && (0, t.jsx)("div", {
                        className: x().inviteDomainMembersContainer,
                        children: (0, t.jsx)(w.o, {
                            onDismiss: () => {
                                window.location.href = W.kH.route
                            },
                            origin: _.nh.WELCOME_PAGE
                        })
                    })]
                })
            }
            var y = l(63334),
                f = l.n(y);

            function C() {
                let e = (0, s.d4)(u.dw);
                return (0, i.useEffect)(() => {
                    e || (window.location.href = "/")
                }, [e]), (0, t.jsx)(r.A, {
                    showModal: !0,
                    contentHeight: "100vh",
                    children: (0, t.jsx)("div", {
                        className: f().container,
                        children: (0, t.jsx)(k, {})
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=workspace-welcome.838b60070ba88964.js.map