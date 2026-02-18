(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [928], {
        1427: (e, l, t) => {
            "use strict";
            t.d(l, {
                T: () => n
            });
            var i = t(23798),
                a = t(21462),
                d = t(26932);

            function r() {
                let {
                    innerWidth: e,
                    innerHeight: l
                } = window;
                return {
                    width: e,
                    height: l
                }
            }
            let n = () => {
                let [e, l] = a.useState(!0), {
                    width: t,
                    height: n
                } = function() {
                    let [e, l] = (0, a.useState)(r());
                    return (0, a.useEffect)(() => {
                        function e() {
                            l(r())
                        }
                        return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                    }, []), e
                }();
                return ((e, l) => {
                    let t = a.useRef();
                    a.useEffect(() => {
                        t.current = e
                    }, [e]), a.useEffect(() => {
                        {
                            let e = setTimeout(function() {
                                t.current()
                            }, 2e3);
                            return () => clearTimeout(e)
                        }
                    }, [l])
                })(() => l(!1), 2e3), (0, i.jsx)(d.A, {
                    width: t,
                    height: n,
                    recycle: e,
                    colors: ["#FF8E47", "#F15555", "#6040DD", "#FFC847"],
                    drawShape: function(e) {
                        e.fillRect(-this.w / 2, -this.h / 2, this.w, this.h)
                    }
                })
            }
        },
        20502: e => {
            e.exports = {
                "wt-display-heading-x-small-bold": "SelfServiceSurvey_wt-display-heading-x-small-bold__JYDhz",
                "wt-display-heading-small-bold-narrow": "SelfServiceSurvey_wt-display-heading-small-bold-narrow__qeUdw",
                "wt-display-heading-small-bold": "SelfServiceSurvey_wt-display-heading-small-bold__UEY8P",
                title: "SelfServiceSurvey_title__i3KW2",
                "wt-display-heading-small-bold-wide": "SelfServiceSurvey_wt-display-heading-small-bold-wide__sUvl5",
                "wt-display-heading-small-narrow": "SelfServiceSurvey_wt-display-heading-small-narrow__wGe0U",
                "wt-display-heading-small": "SelfServiceSurvey_wt-display-heading-small__kpsg5",
                "wt-display-heading-small-wide": "SelfServiceSurvey_wt-display-heading-small-wide__fLzcX",
                "wt-display-heading-medium-bold-narrow": "SelfServiceSurvey_wt-display-heading-medium-bold-narrow__fIu2K",
                "wt-display-heading-medium-bold": "SelfServiceSurvey_wt-display-heading-medium-bold__vDXUR",
                "wt-display-heading-medium-bold-wide": "SelfServiceSurvey_wt-display-heading-medium-bold-wide__HdnM5",
                "wt-display-heading-medium-narrow": "SelfServiceSurvey_wt-display-heading-medium-narrow__M4gsL",
                "wt-display-heading-medium": "SelfServiceSurvey_wt-display-heading-medium__IlErz",
                "wt-display-heading-medium-wide": "SelfServiceSurvey_wt-display-heading-medium-wide__b_hGP",
                "wt-display-heading-large-bold-narrow": "SelfServiceSurvey_wt-display-heading-large-bold-narrow__ejxRw",
                "wt-display-heading-large-bold": "SelfServiceSurvey_wt-display-heading-large-bold__V_oxi",
                "wt-display-heading-large-bold-wide": "SelfServiceSurvey_wt-display-heading-large-bold-wide__QpYSp",
                "wt-display-heading-large-narrow": "SelfServiceSurvey_wt-display-heading-large-narrow__yTtWH",
                "wt-display-heading-large": "SelfServiceSurvey_wt-display-heading-large__qbAk1",
                "wt-display-heading-large-wide": "SelfServiceSurvey_wt-display-heading-large-wide__Hq7QJ",
                "wt-display-heading": "SelfServiceSurvey_wt-display-heading__BL4JP",
                "wt-sub-heading": "SelfServiceSurvey_wt-sub-heading__kdAty",
                "wt-text-heading-small-bold-narrow": "SelfServiceSurvey_wt-text-heading-small-bold-narrow__PDF6f",
                "wt-text-heading-small-bold": "SelfServiceSurvey_wt-text-heading-small-bold__bWhIZ",
                "wt-text-heading-small-bold-wide": "SelfServiceSurvey_wt-text-heading-small-bold-wide__grBvN",
                "wt-text-heading-small-narrow": "SelfServiceSurvey_wt-text-heading-small-narrow__9Ia41",
                "wt-text-heading-small": "SelfServiceSurvey_wt-text-heading-small__gX5E5",
                "wt-text-heading-small-wide": "SelfServiceSurvey_wt-text-heading-small-wide__IhUNk",
                "wt-text-heading-medium-bold": "SelfServiceSurvey_wt-text-heading-medium-bold__5M7m7",
                "wt-text-heading-medium-bold-wide": "SelfServiceSurvey_wt-text-heading-medium-bold-wide__z0Mwd",
                "wt-text-heading-medium-semi-narrow": "SelfServiceSurvey_wt-text-heading-medium-semi-narrow__FC3VC",
                "wt-text-heading-medium-narrow": "SelfServiceSurvey_wt-text-heading-medium-narrow__J8t9j",
                "wt-text-heading-medium-semi": "SelfServiceSurvey_wt-text-heading-medium-semi__s_2sW",
                "wt-text-heading-medium-semi-wide": "SelfServiceSurvey_wt-text-heading-medium-semi-wide__H29qY",
                "wt-text-heading-medium": "SelfServiceSurvey_wt-text-heading-medium__p46rm",
                surveyCompletedBody: "SelfServiceSurvey_surveyCompletedBody__OW_i3",
                "wt-text-heading-medium-wide": "SelfServiceSurvey_wt-text-heading-medium-wide__Qkohl",
                "wt-text-heading-large-bold-narrow": "SelfServiceSurvey_wt-text-heading-large-bold-narrow__ZF8WS",
                "wt-text-heading-large-bold": "SelfServiceSurvey_wt-text-heading-large-bold__KX8iJ",
                "wt-text-heading-large-bold-wide": "SelfServiceSurvey_wt-text-heading-large-bold-wide__1oWST",
                "wt-text-heading-large-narrow": "SelfServiceSurvey_wt-text-heading-large-narrow__cmUsj",
                "wt-text-heading-large": "SelfServiceSurvey_wt-text-heading-large__j8gft",
                "wt-text-heading-large-wide": "SelfServiceSurvey_wt-text-heading-large-wide__Xrxj6",
                "wt-text-heading-x-large-narrow": "SelfServiceSurvey_wt-text-heading-x-large-narrow__qfjzv",
                "wt-text-heading-x-large": "SelfServiceSurvey_wt-text-heading-x-large__dmnB6",
                "wt-text-heading-x-large-wide": "SelfServiceSurvey_wt-text-heading-x-large-wide__haqr5",
                "wt-text-heading": "SelfServiceSurvey_wt-text-heading__fvK0j",
                "wt-body-x-small-semi": "SelfServiceSurvey_wt-body-x-small-semi__AAy9M",
                "wt-body-x-small": "SelfServiceSurvey_wt-body-x-small__xktXE",
                "wt-body-small-bold": "SelfServiceSurvey_wt-body-small-bold__32Adn",
                "wt-body-small-semi": "SelfServiceSurvey_wt-body-small-semi__ZCIqK",
                "wt-body-small": "SelfServiceSurvey_wt-body-small__QQaba",
                privacy: "SelfServiceSurvey_privacy__D5w5Y",
                "wt-body-medium-bold": "SelfServiceSurvey_wt-body-medium-bold__HdguL",
                "wt-body-medium-semi": "SelfServiceSurvey_wt-body-medium-semi__VPhu5",
                "wt-body-medium": "SelfServiceSurvey_wt-body-medium__j5MNA",
                "wt-body-large-bold": "SelfServiceSurvey_wt-body-large-bold__yhSQk",
                "wt-body-large": "SelfServiceSurvey_wt-body-large__hnqaM",
                "wt-body-x-large": "SelfServiceSurvey_wt-body-x-large__zeH7l",
                "wt-label-x-small-bold": "SelfServiceSurvey_wt-label-x-small-bold__F5Xu7",
                "wt-label-x-small-semi": "SelfServiceSurvey_wt-label-x-small-semi__xtAgy",
                "wt-label-x-small": "SelfServiceSurvey_wt-label-x-small__Bo5q4",
                "wt-label-small-bold": "SelfServiceSurvey_wt-label-small-bold__0y0Ta",
                "wt-label-small-semi": "SelfServiceSurvey_wt-label-small-semi__SAg9p",
                "wt-label-small": "SelfServiceSurvey_wt-label-small__rnA9N",
                "wt-label-medium-bold": "SelfServiceSurvey_wt-label-medium-bold__VluYB",
                "wt-label-medium-semi": "SelfServiceSurvey_wt-label-medium-semi__qv40s",
                "wt-label-medium": "SelfServiceSurvey_wt-label-medium__U8Ck1",
                "wt-label-large-bold": "SelfServiceSurvey_wt-label-large-bold__0Ec__",
                "wt-label-large-semi": "SelfServiceSurvey_wt-label-large-semi__2_bj7",
                "wt-label-large": "SelfServiceSurvey_wt-label-large__1d4UG",
                container: "SelfServiceSurvey_container__qYLDr",
                avatar: "SelfServiceSurvey_avatar__m_Eru",
                survey: "SelfServiceSurvey_survey__anBHE",
                buttons: "SelfServiceSurvey_buttons__Sr1gy",
                surveyCompleted: "SelfServiceSurvey_surveyCompleted__CvwN0"
            }
        },
        28233: (e, l, t) => {
            "use strict";
            t.d(l, {
                z: () => o
            });
            var i = t(13897),
                a = t(23798),
                d = t(71623),
                r = t(21462),
                n = t(22929),
                s = t(67584);
            (0, t(85752).$)(".styles_module_selectInsideLabel__de7c2301{padding-right:0}.styles_module_selectInsideButton__de7c2301{margin-bottom:0;margin-top:-1rem;padding-bottom:0;padding-top:1rem}.styles_module_selectInsideOptions__de7c2301{left:calc(-1rem - 2px);top:calc(100% + 16px);width:calc(100% + 1rem + 4px)}");
            var _ = {
                "select-inside-label": "styles_module_selectInsideLabel__de7c2301",
                "select-inside-button": "styles_module_selectInsideButton__de7c2301",
                "select-inside-options": "styles_module_selectInsideOptions__de7c2301"
            };
            let u = (0, r.forwardRef)((e, l) => {
                var {
                    children: t,
                    className: u,
                    inputClassName: o,
                    labelType: w = "default",
                    trailingElement: m
                } = e, y = (0, i.Tt)(e, ["children", "className", "inputClassName", "labelType", "trailingElement"]);
                let g = (0, r.useMemo)(() => "inside" === w, [w]);
                return (0, a.jsx)(n.F, Object.assign({}, y, {
                    labelAs: g ? "span" : "label",
                    labelType: w,
                    ref: l,
                    shouldAlwaysFocus: g,
                    className: (0, d.A)({
                        [_["select-inside-label"]]: g
                    }, u),
                    inputClassName: (0, d.A)({
                        [_["select-inside-button"]]: g
                    }, o),
                    children: g ? (0, a.jsx)(s.r, {
                        optionsClassName: _["select-inside-options"],
                        trailingElement: m,
                        children: t
                    }) : (0, a.jsx)(s.l, {
                        trailingElement: m,
                        children: t
                    })
                }))
            });
            u.displayName = "SelectField";
            let o = Object.assign(u, {
                Option: s.l.Option
            })
        },
        42408: e => {
            e.exports = {
                "wt-display-heading-x-small-bold": "SurveyQuestion_wt-display-heading-x-small-bold__Yujje",
                "wt-display-heading-small-bold-narrow": "SurveyQuestion_wt-display-heading-small-bold-narrow__MJvcx",
                "wt-display-heading-small-bold": "SurveyQuestion_wt-display-heading-small-bold__t7biI",
                "wt-display-heading-small-bold-wide": "SurveyQuestion_wt-display-heading-small-bold-wide__x_XB0",
                "wt-display-heading-small-narrow": "SurveyQuestion_wt-display-heading-small-narrow__y6ltx",
                "wt-display-heading-small": "SurveyQuestion_wt-display-heading-small__1K255",
                "wt-display-heading-small-wide": "SurveyQuestion_wt-display-heading-small-wide__jKyDb",
                "wt-display-heading-medium-bold-narrow": "SurveyQuestion_wt-display-heading-medium-bold-narrow__v_yiK",
                "wt-display-heading-medium-bold": "SurveyQuestion_wt-display-heading-medium-bold__cGBrF",
                "wt-display-heading-medium-bold-wide": "SurveyQuestion_wt-display-heading-medium-bold-wide__g67l1",
                "wt-display-heading-medium-narrow": "SurveyQuestion_wt-display-heading-medium-narrow__ZLt87",
                "wt-display-heading-medium": "SurveyQuestion_wt-display-heading-medium___bQkz",
                "wt-display-heading-medium-wide": "SurveyQuestion_wt-display-heading-medium-wide__7Ue6M",
                "wt-display-heading-large-bold-narrow": "SurveyQuestion_wt-display-heading-large-bold-narrow__5nNzg",
                "wt-display-heading-large-bold": "SurveyQuestion_wt-display-heading-large-bold__6SJ1p",
                "wt-display-heading-large-bold-wide": "SurveyQuestion_wt-display-heading-large-bold-wide__pdjIE",
                "wt-display-heading-large-narrow": "SurveyQuestion_wt-display-heading-large-narrow__sawPi",
                "wt-display-heading-large": "SurveyQuestion_wt-display-heading-large__26gQ9",
                "wt-display-heading-large-wide": "SurveyQuestion_wt-display-heading-large-wide__cs1vk",
                "wt-display-heading": "SurveyQuestion_wt-display-heading__igsJ2",
                "wt-sub-heading": "SurveyQuestion_wt-sub-heading__ha4FN",
                "wt-text-heading-small-bold-narrow": "SurveyQuestion_wt-text-heading-small-bold-narrow__RAkNg",
                "wt-text-heading-small-bold": "SurveyQuestion_wt-text-heading-small-bold__dSmRM",
                "wt-text-heading-small-bold-wide": "SurveyQuestion_wt-text-heading-small-bold-wide__yFlEC",
                "wt-text-heading-small-narrow": "SurveyQuestion_wt-text-heading-small-narrow__KyCGC",
                "wt-text-heading-small": "SurveyQuestion_wt-text-heading-small__ptMru",
                question: "SurveyQuestion_question__k7hfr",
                "wt-text-heading-small-wide": "SurveyQuestion_wt-text-heading-small-wide__TS71n",
                "wt-text-heading-medium-bold": "SurveyQuestion_wt-text-heading-medium-bold__j9q_E",
                "wt-text-heading-medium-bold-wide": "SurveyQuestion_wt-text-heading-medium-bold-wide__kbA_a",
                "wt-text-heading-medium-semi-narrow": "SurveyQuestion_wt-text-heading-medium-semi-narrow__z00ne",
                "wt-text-heading-medium-narrow": "SurveyQuestion_wt-text-heading-medium-narrow__wIOOr",
                "wt-text-heading-medium-semi": "SurveyQuestion_wt-text-heading-medium-semi__QS6jp",
                "wt-text-heading-medium-semi-wide": "SurveyQuestion_wt-text-heading-medium-semi-wide__bmPil",
                "wt-text-heading-medium": "SurveyQuestion_wt-text-heading-medium__Q0idl",
                "wt-text-heading-medium-wide": "SurveyQuestion_wt-text-heading-medium-wide__RHi_0",
                "wt-text-heading-large-bold-narrow": "SurveyQuestion_wt-text-heading-large-bold-narrow__DVEEa",
                "wt-text-heading-large-bold": "SurveyQuestion_wt-text-heading-large-bold__IYOId",
                "wt-text-heading-large-bold-wide": "SurveyQuestion_wt-text-heading-large-bold-wide__3haSS",
                "wt-text-heading-large-narrow": "SurveyQuestion_wt-text-heading-large-narrow__x2vEH",
                "wt-text-heading-large": "SurveyQuestion_wt-text-heading-large__H6UIk",
                "wt-text-heading-large-wide": "SurveyQuestion_wt-text-heading-large-wide__UMdVD",
                "wt-text-heading-x-large-narrow": "SurveyQuestion_wt-text-heading-x-large-narrow__rC5oR",
                "wt-text-heading-x-large": "SurveyQuestion_wt-text-heading-x-large__ONr74",
                "wt-text-heading-x-large-wide": "SurveyQuestion_wt-text-heading-x-large-wide__yAjiK",
                "wt-text-heading": "SurveyQuestion_wt-text-heading___DINq",
                "wt-body-x-small-semi": "SurveyQuestion_wt-body-x-small-semi__L5eed",
                "wt-body-x-small": "SurveyQuestion_wt-body-x-small__cG2Do",
                "wt-body-small-bold": "SurveyQuestion_wt-body-small-bold__kaTfX",
                "wt-body-small-semi": "SurveyQuestion_wt-body-small-semi__JYzHW",
                "wt-body-small": "SurveyQuestion_wt-body-small__JnS1X",
                "wt-body-medium-bold": "SurveyQuestion_wt-body-medium-bold__9PjTW",
                "wt-body-medium-semi": "SurveyQuestion_wt-body-medium-semi__NtJvd",
                "wt-body-medium": "SurveyQuestion_wt-body-medium__mNffC",
                "wt-body-large-bold": "SurveyQuestion_wt-body-large-bold__UhtFM",
                "wt-body-large": "SurveyQuestion_wt-body-large__XAJPs",
                "wt-body-x-large": "SurveyQuestion_wt-body-x-large__E710R",
                "wt-label-x-small-bold": "SurveyQuestion_wt-label-x-small-bold__g3kUe",
                "wt-label-x-small-semi": "SurveyQuestion_wt-label-x-small-semi__B855b",
                "wt-label-x-small": "SurveyQuestion_wt-label-x-small__3TUWU",
                "wt-label-small-bold": "SurveyQuestion_wt-label-small-bold__T_skH",
                "wt-label-small-semi": "SurveyQuestion_wt-label-small-semi__JQSQo",
                "wt-label-small": "SurveyQuestion_wt-label-small__fkFrj",
                "wt-label-medium-bold": "SurveyQuestion_wt-label-medium-bold__orG92",
                "wt-label-medium-semi": "SurveyQuestion_wt-label-medium-semi__EVfXj",
                "wt-label-medium": "SurveyQuestion_wt-label-medium__MTWmh",
                "wt-label-large-bold": "SurveyQuestion_wt-label-large-bold__fdeg7",
                "wt-label-large-semi": "SurveyQuestion_wt-label-large-semi__OCF1N",
                "wt-label-large": "SurveyQuestion_wt-label-large__wqI_j",
                container: "SurveyQuestion_container__SPJ1M",
                answerFullWidth: "SurveyQuestion_answerFullWidth__HCBMO"
            }
        },
        79467: (e, l, t) => {
            "use strict";
            t.r(l), t.d(l, {
                default: () => B
            });
            var i = t(23798),
                a = t(21462),
                d = t(38169),
                r = t(60848),
                n = t(45781),
                s = t(8681),
                _ = t(75546),
                u = t(30403),
                o = t(97116),
                w = t(37828),
                m = t(52236),
                y = t(87963),
                g = t(73278),
                S = t(44765),
                v = t(1427),
                h = t(11115),
                c = t(89187),
                b = t(17944),
                p = t(54494),
                x = t(37796),
                f = t(28233),
                Q = t(67584),
                j = t(31582),
                k = t(42408),
                T = t.n(k);

            function E(e) {
                let {
                    step: {
                        question: l,
                        answers: t
                    },
                    errors: a,
                    i18nPrefix: d,
                    onAnswerChange: r
                } = e, {
                    t: n
                } = (0, _.Bd)();
                return (0, i.jsxs)("form", {
                    className: T().container,
                    children: [(0, i.jsx)("span", {
                        className: T().question,
                        children: n("".concat(d).concat(l, ".question"))
                    }), t.map(e => {
                        switch (e.type) {
                            case j.G8.TEXT:
                                return (0, i.jsx)(x.A, {
                                    label: n("".concat(d).concat(l, ".").concat(e.key)),
                                    labelType: "inside",
                                    className: T().answerFullWidth,
                                    value: e.value,
                                    type: e.fieldType,
                                    state: a.includes(e.key) ? "invalid" : "default",
                                    caption: a.includes(e.key) ? n("".concat(d).concat(l, ".").concat(e.key, "_error")) : void 0,
                                    onChange: l => null == r ? void 0 : r({
                                        ...e,
                                        value: l.target.value
                                    })
                                }, e.key);
                            case j.G8.OPTIONS:
                                return (0, i.jsx)(f.z, {
                                    className: T().answerFullWidth,
                                    label: n("".concat(d).concat(l, ".").concat(e.key)),
                                    labelType: "inside",
                                    value: e.selected,
                                    onChange: l => null == r ? void 0 : r({
                                        ...e,
                                        selected: l
                                    }),
                                    children: e.optionKeys.map(e => (0, i.jsx)(Q.l.Option, {
                                        value: e,
                                        children: n("".concat(d).concat(l, ".").concat(e))
                                    }, e))
                                }, e.key)
                        }
                    })]
                })
            }
            var N = t(53123),
                C = t(7686),
                I = t(62760),
                A = t(72255),
                q = t(86781),
                M = t(20502),
                O = t.n(M);

            function F() {
                let {
                    t: e
                } = (0, _.Bd)(), {
                    addToast: l
                } = (0, u.d)(), t = (0, d.d4)(q.mB), {
                    subscription: r
                } = (0, w.f)(), {
                    showUpgradeSubscriptionModal: n,
                    confirmPlanSwitchOrReactivate: s,
                    closeUpgradeSubscriptionModal: x,
                    selectedTierName: f,
                    isModalVisible: Q,
                    isSwitchInProgress: k,
                    selectedTier: T,
                    selectedBillingInterval: M
                } = (0, S.W)(), {
                    settings: {
                        enterprise_onboarding_survey_seats_threshold: F,
                        pricing_page_teams_enterprise_split: B
                    }
                } = (0, I.k)(), [U, P] = (0, a.useState)(0), [X, z] = (0, a.useState)(!1), [G, H] = (0, a.useState)(!1), [W, L] = (0, a.useState)(j.ag), [R, J] = (0, a.useState)([]), K = (0, a.useCallback)(() => {
                    x(), H(!1)
                }, [x]);
                (0, a.useEffect)(() => {
                    t && t.loggedIn && L(e => e.map(e => ({
                        ...e,
                        answers: e.answers.map(e => e.key === j.vS.EMAIL && t.email && !e.value ? {
                            ...e,
                            value: t.email
                        } : e.key === j.vS.NAME && t.given_name && !e.value ? {
                            ...e,
                            value: "".concat(t.given_name, " ").concat(t.family_name)
                        } : e)
                    })))
                }, [t]);
                let D = (0, a.useCallback)(async () => {
                        let i = W[U].answers.filter(e => e.type === j.G8.TEXT).reduce((e, l) => {
                            var t;
                            return ("email" !== l.fieldType || N.A.validateEmail(l.value)) && ("number" !== l.fieldType || Number(l.value)) && (null == (t = l.value) ? void 0 : t.length) ? e : [...e, l.key]
                        }, []);
                        if (i.length) return void J(i);
                        if ((0, y.Od)().trackUserAction(b.XH.surveyStepNextClicked(W.slice(0, U + 1).reduce((e, l) => {
                                let t = l.answers.reduce((e, l) => {
                                    var t, i;
                                    return l.type === j.G8.TEXT && (null == (t = l.value) ? void 0 : t.length) ? {
                                        ...e,
                                        [l.key]: l.value
                                    } : l.type === j.G8.OPTIONS ? {
                                        ...e,
                                        [l.key]: null != (i = l.selected) ? i : l.optionKeys[0]
                                    } : e
                                }, {});
                                return {
                                    ...e,
                                    [l.question]: t
                                }
                            }, {}), U + 1)), U === j.ag.length - 1) {
                            if (H(!0), B || W.find(e => e.answers.some(e => e.key === j.vS.SEATS && Number(e.value) > F))) try {
                                await (0, m.U)({
                                    surveyData: W
                                }), z(!0)
                            } catch (t) {
                                l(e("enterprise_onboarding_survey.request_error")), H(!1)
                            } else t.planTier === c.js.ULTIMATE ? n(c.js.ENTERPRISE, null == r ? void 0 : r.interval) : window.location.href = (0, C.kQ)({
                                tier: c.js.ENTERPRISE
                            });
                            return
                        }
                        P(e => Math.min(e + 1, j.ag.length - 1))
                    }, [l, null == r ? void 0 : r.interval, U, B, F, n, W, e, t.planTier]),
                    Y = (0, a.useCallback)(() => {
                        P(e => Math.max(e - 1, 0))
                    }, [P]),
                    V = (0, a.useCallback)(e => {
                        J([]), L(l => l.map((l, t) => t === U ? {
                            ...l,
                            answers: l.answers.map(l => l.key !== e.key ? l : l.type === j.G8.TEXT && e.type === j.G8.TEXT ? {
                                ...l,
                                value: e.value
                            } : l.type === j.G8.OPTIONS && e.type === j.G8.OPTIONS ? {
                                ...l,
                                selected: e.selected
                            } : l)
                        } : l))
                    }, [U]);
                return (0, i.jsxs)("div", {
                    className: O().container,
                    children: [(0, i.jsx)(h.g, {}), (0, i.jsx)("h1", {
                        className: O().title,
                        children: X ? e("enterprise_onboarding_survey.request_received.title") : B ? e("enterprise_onboarding_survey.title_enterprise") : e("enterprise_onboarding_survey.title")
                    }), !X && (0, i.jsx)(p.S, {
                        currentStep: U,
                        steps: W.length
                    }), X ? (0, i.jsxs)("div", {
                        className: O().surveyCompleted,
                        children: [(0, i.jsx)("span", {
                            className: O().surveyCompletedBody,
                            children: e("enterprise_onboarding_survey.request_received.body")
                        }), (0, i.jsx)(o.$, {
                            fullwidth: !0,
                            size: "large",
                            onClick: () => A.A.navigateTo("/", !0),
                            children: e("enterprise_onboarding_survey.request_received.cta")
                        }), (0, i.jsx)(v.T, {})]
                    }) : (0, i.jsxs)("div", {
                        className: O().survey,
                        children: [(0, i.jsx)(E, {
                            step: W[U],
                            errors: R,
                            i18nPrefix: "enterprise_onboarding_survey.questions.",
                            onAnswerChange: V
                        }), (0, i.jsxs)("div", {
                            className: O().buttons,
                            children: [U > 0 && (0, i.jsx)(o.$, {
                                appearance: "secondary",
                                onClick: Y,
                                fullwidth: !0,
                                size: "large",
                                disabled: G,
                                children: e("enterprise_onboarding_survey.back")
                            }), (0, i.jsx)(o.$, {
                                onClick: D,
                                fullwidth: !0,
                                size: "large",
                                disabled: G,
                                children: e("enterprise_onboarding_survey.next")
                            })]
                        }), 0 === U && (0, i.jsx)("span", {
                            className: O().privacy,
                            children: (0, i.jsx)(_.x6, {
                                i18nKey: "enterprise_onboarding_survey.privacy",
                                components: {
                                    1: (0, i.jsx)("a", {
                                        href: "https://wetransfer.com/explore/legal/privacy",
                                        target: "_blank",
                                        rel: "noreferrer"
                                    })
                                }
                            })
                        })]
                    }), Q && (0, i.jsx)(g.r, {
                        closeModal: K,
                        planName: f,
                        switchPlansOrReactivate: s,
                        isLoading: k,
                        planTier: T,
                        selectedBillingInterval: M
                    })]
                })
            }

            function B() {
                let {
                    settings: {
                        enterprise_onboarding_survey_enabled: e
                    }
                } = (0, I.k)(), l = (0, d.d4)(q.mB);
                return (0, a.useEffect)(() => {
                    if (!e && !l.loggedIn) {
                        let e = new URLSearchParams;
                        e.set("redirect", "enterprise"), e.set(r.GH, "enterprise_onboarding"), e.set(r.q0, window.location.href), e.set(r.MB, window.location.pathname), A.A.navigateTo("/log-in?".concat(e.toString()))
                    }
                }, [e, l.loggedIn]), (0, i.jsx)(n.A, {
                    showModal: !0,
                    contentHeight: "100vh",
                    children: e ? (0, i.jsx)(F, {}) : (0, i.jsx)(s.L, {})
                })
            }
        }
    }
]);
//# sourceMappingURL=enterprise-onboarding.5a77c038e1dde82e.js.map
