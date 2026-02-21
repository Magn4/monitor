(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2893, 7269], {
        4838: (a, e, l) => {
            "use strict";
            l.d(e, {
                Gn: () => i,
                pR: () => d,
                t0: () => t
            });
            var n = l(62760),
                i = function(a) {
                    return a.NONE = "none", a.MODAL = "modal", a.PAGE = "page", a
                }({});
            let t = () => {
                    let {
                        settings: a
                    } = (0, n.k)();
                    return a.is_compliant_cancellation_popup_enabled
                },
                d = () => {
                    let {
                        settings: a
                    } = (0, n.k)();
                    return a.compliant_cancellation_flow_variant
                }
        },
        5852: (a, e, l) => {
            "use strict";
            l.d(e, {
                Q: () => c,
                r: () => _
            });
            var n = l(21462),
                i = l(38169),
                t = l(37828),
                d = l(62760),
                o = l(86781),
                s = l(9209);
            let c = {
                    code: "ONETIME-50",
                    discount: 50
                },
                _ = () => {
                    let a = (0, i.d4)(o.mB),
                        {
                            subscription: e
                        } = (0, t.f)(),
                        l = !!(null == e ? void 0 : e.discountPercent) || !!(null == e ? void 0 : e.couponCode),
                        c = (null == e ? void 0 : e.isPaidDowngrade) || (null == e ? void 0 : e.isPaused),
                        _ = (null == e ? void 0 : e.status) === s.dH.trialing,
                        r = (() => {
                            let {
                                settings: a
                            } = (0, d.k)();
                            return a.simplified_cancel_subscription_discount_configuration
                        })(),
                        m = !!(null == r ? void 0 : r[a.planTier]);
                    return (0, n.useMemo)(() => m && !l && !c && !_, [m, l, c, _])
                }
        },
        5866: (a, e, l) => {
            "use strict";
            l.d(e, {
                A: () => g
            });
            var n = l(23798),
                i = l(46001),
                t = l.n(i),
                d = l(75546),
                o = l(38169),
                s = l(11828),
                c = l(16173),
                _ = l(15933),
                r = l(68018),
                m = l(50298),
                w = l.n(m);

            function g(a) {
                let {
                    context: e = "page",
                    shouldShowThirdFeature: l = !0,
                    onPauseSubscription: i
                } = a, {
                    t: m
                } = (0, d.Bd)(), g = (0, o.wA)();
                return (0, n.jsxs)("div", {
                    className: t()([w().pauseSection, "modal" === e && w().inModal]),
                    children: [(0, n.jsxs)("div", {
                        className: w().pauseText,
                        children: [(0, n.jsxs)("div", {
                            className: w().pauseTitleAndBadge,
                            children: [(0, n.jsx)(s.E, {
                                className: w().badge,
                                size: "small",
                                children: m("badge.new")
                            }), (0, n.jsx)("span", {
                                className: w().pauseTitle,
                                children: m("page.manage_plan.cancel.modal.pause.title")
                            })]
                        }), (0, n.jsxs)("div", {
                            className: w().pauseDescriptionAndFeatures,
                            children: [(0, n.jsx)("span", {
                                className: w().pauseDescription,
                                children: m("page.manage_plan.cancel.modal.pause.description")
                            }), (0, n.jsxs)("div", {
                                className: w().pauseFeatures,
                                children: [(0, n.jsxs)("div", {
                                    className: w().pauseFeature,
                                    children: [(0, n.jsx)(c.bT1, {}), (0, n.jsx)("span", {
                                        className: w().pauseFeatureText,
                                        children: m("page.manage_plan.cancel.modal.pause.feature_1")
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: w().pauseFeature,
                                    children: [(0, n.jsx)(c.bT1, {}), (0, n.jsx)("span", {
                                        className: w().pauseFeatureText,
                                        children: m("page.manage_plan.cancel.modal.pause.feature_2")
                                    })]
                                }), l && (0, n.jsxs)("div", {
                                    className: w().pauseFeature,
                                    children: [(0, n.jsx)(c.bT1, {}), (0, n.jsx)("span", {
                                        className: w().pauseFeatureText,
                                        children: m("page.manage_plan.cancel.modal.pause.feature_3")
                                    })]
                                })]
                            })]
                        })]
                    }), (0, n.jsx)(_.$, {
                        fullwidth: "modal" === e,
                        onClick: () => {
                            g((0, r.m$)("getScheduleData")), i()
                        },
                        children: m("page.manage_plan.cancel.modal.pause.button")
                    })]
                })
            }
        },
        12066: a => {
            a.exports = {
                "wt-display-heading-x-small-bold": "CompliantCancellationModal_wt-display-heading-x-small-bold__lpE6f",
                "wt-display-heading-small-bold-narrow": "CompliantCancellationModal_wt-display-heading-small-bold-narrow__yxNxU",
                "wt-display-heading-small-bold": "CompliantCancellationModal_wt-display-heading-small-bold__Tq6jW",
                "wt-display-heading-small-bold-wide": "CompliantCancellationModal_wt-display-heading-small-bold-wide__a_UI6",
                "wt-display-heading-small-narrow": "CompliantCancellationModal_wt-display-heading-small-narrow__FmmTi",
                "wt-display-heading-small": "CompliantCancellationModal_wt-display-heading-small__B70Oz",
                "wt-display-heading-small-wide": "CompliantCancellationModal_wt-display-heading-small-wide___0qhv",
                "wt-display-heading-medium-bold-narrow": "CompliantCancellationModal_wt-display-heading-medium-bold-narrow__83XQD",
                content: "CompliantCancellationModal_content__2MDke",
                title: "CompliantCancellationModal_title__IlRLp",
                "wt-display-heading-medium-bold": "CompliantCancellationModal_wt-display-heading-medium-bold__hJZ8j",
                "wt-display-heading-medium-bold-wide": "CompliantCancellationModal_wt-display-heading-medium-bold-wide__CBbKc",
                "wt-display-heading-medium-narrow": "CompliantCancellationModal_wt-display-heading-medium-narrow__UKhDE",
                "wt-display-heading-medium": "CompliantCancellationModal_wt-display-heading-medium__eaM7T",
                "wt-display-heading-medium-wide": "CompliantCancellationModal_wt-display-heading-medium-wide__KkAbl",
                "wt-display-heading-large-bold-narrow": "CompliantCancellationModal_wt-display-heading-large-bold-narrow__DEhYg",
                "wt-display-heading-large-bold": "CompliantCancellationModal_wt-display-heading-large-bold__MFVyP",
                "wt-display-heading-large-bold-wide": "CompliantCancellationModal_wt-display-heading-large-bold-wide__fw3zD",
                "wt-display-heading-large-narrow": "CompliantCancellationModal_wt-display-heading-large-narrow__4dlJ8",
                "wt-display-heading-large": "CompliantCancellationModal_wt-display-heading-large__epPFZ",
                "wt-display-heading-large-wide": "CompliantCancellationModal_wt-display-heading-large-wide__Xeq70",
                "wt-display-heading": "CompliantCancellationModal_wt-display-heading__xwbMx",
                "wt-sub-heading": "CompliantCancellationModal_wt-sub-heading__d2VYA",
                "wt-text-heading-small-bold-narrow": "CompliantCancellationModal_wt-text-heading-small-bold-narrow__GEbrr",
                "wt-text-heading-small-bold": "CompliantCancellationModal_wt-text-heading-small-bold__j5Xgo",
                "wt-text-heading-small-bold-wide": "CompliantCancellationModal_wt-text-heading-small-bold-wide__ybZnp",
                "wt-text-heading-small-narrow": "CompliantCancellationModal_wt-text-heading-small-narrow__6ZqwN",
                "wt-text-heading-small": "CompliantCancellationModal_wt-text-heading-small__fkcBv",
                "wt-text-heading-small-wide": "CompliantCancellationModal_wt-text-heading-small-wide__L8wtr",
                "wt-text-heading-medium-bold": "CompliantCancellationModal_wt-text-heading-medium-bold__d6zsf",
                "wt-text-heading-medium-bold-wide": "CompliantCancellationModal_wt-text-heading-medium-bold-wide__fpP4c",
                "wt-text-heading-medium-semi-narrow": "CompliantCancellationModal_wt-text-heading-medium-semi-narrow__9R603",
                "wt-text-heading-medium-narrow": "CompliantCancellationModal_wt-text-heading-medium-narrow__0avJg",
                "wt-text-heading-medium-semi": "CompliantCancellationModal_wt-text-heading-medium-semi__xEyoZ",
                "wt-text-heading-medium-semi-wide": "CompliantCancellationModal_wt-text-heading-medium-semi-wide__lZKlV",
                "wt-text-heading-medium": "CompliantCancellationModal_wt-text-heading-medium__z5Ykx",
                "wt-text-heading-medium-wide": "CompliantCancellationModal_wt-text-heading-medium-wide__Hsn98",
                "wt-text-heading-large-bold-narrow": "CompliantCancellationModal_wt-text-heading-large-bold-narrow__gzjE0",
                "wt-text-heading-large-bold": "CompliantCancellationModal_wt-text-heading-large-bold__ZRrR0",
                "wt-text-heading-large-bold-wide": "CompliantCancellationModal_wt-text-heading-large-bold-wide__H3LBa",
                "wt-text-heading-large-narrow": "CompliantCancellationModal_wt-text-heading-large-narrow__EwohH",
                "wt-text-heading-large": "CompliantCancellationModal_wt-text-heading-large__y4NGS",
                "wt-text-heading-large-wide": "CompliantCancellationModal_wt-text-heading-large-wide__orvjk",
                "wt-text-heading-x-large-narrow": "CompliantCancellationModal_wt-text-heading-x-large-narrow__BbEXh",
                "wt-text-heading-x-large": "CompliantCancellationModal_wt-text-heading-x-large__YTwXL",
                "wt-text-heading-x-large-wide": "CompliantCancellationModal_wt-text-heading-x-large-wide__nVW8H",
                "wt-text-heading": "CompliantCancellationModal_wt-text-heading__xReCP",
                "wt-body-x-small-semi": "CompliantCancellationModal_wt-body-x-small-semi__RMvQG",
                "wt-body-x-small": "CompliantCancellationModal_wt-body-x-small__wCP08",
                "wt-body-small-bold": "CompliantCancellationModal_wt-body-small-bold__6z16K",
                "wt-body-small-semi": "CompliantCancellationModal_wt-body-small-semi__ENzjv",
                benefitsSection: "CompliantCancellationModal_benefitsSection__sfm3D",
                benefitMore: "CompliantCancellationModal_benefitMore__ciRFa",
                "wt-body-small": "CompliantCancellationModal_wt-body-small___rJKc",
                benefitItem: "CompliantCancellationModal_benefitItem__tLVEq",
                benefitItemText: "CompliantCancellationModal_benefitItemText__fP_E7",
                "wt-body-medium-bold": "CompliantCancellationModal_wt-body-medium-bold__b7RsE",
                "wt-body-medium-semi": "CompliantCancellationModal_wt-body-medium-semi__IChf4",
                "wt-body-medium": "CompliantCancellationModal_wt-body-medium__B77ZO",
                benefitsText: "CompliantCancellationModal_benefitsText__54Fze",
                "wt-body-large-bold": "CompliantCancellationModal_wt-body-large-bold__EvufI",
                "wt-body-large": "CompliantCancellationModal_wt-body-large__3H60r",
                "wt-body-x-large": "CompliantCancellationModal_wt-body-x-large__5HADh",
                "wt-label-x-small-bold": "CompliantCancellationModal_wt-label-x-small-bold__TG9tl",
                "wt-label-x-small-semi": "CompliantCancellationModal_wt-label-x-small-semi__xOnD6",
                "wt-label-x-small": "CompliantCancellationModal_wt-label-x-small__1JHnc",
                "wt-label-small-bold": "CompliantCancellationModal_wt-label-small-bold__r5G5s",
                "wt-label-small-semi": "CompliantCancellationModal_wt-label-small-semi__oyGom",
                "wt-label-small": "CompliantCancellationModal_wt-label-small__9VOGq",
                "wt-label-medium-bold": "CompliantCancellationModal_wt-label-medium-bold__XSzvo",
                "wt-label-medium-semi": "CompliantCancellationModal_wt-label-medium-semi__vwevJ",
                "wt-label-medium": "CompliantCancellationModal_wt-label-medium___zLyl",
                "wt-label-large-bold": "CompliantCancellationModal_wt-label-large-bold__cB3Li",
                "wt-label-large-semi": "CompliantCancellationModal_wt-label-large-semi__03Ftu",
                "wt-label-large": "CompliantCancellationModal_wt-label-large__8B3uh",
                modal: "CompliantCancellationModal_modal__3V_oP",
                modalContent: "CompliantCancellationModal_modalContent__FTGEy",
                imageContainer: "CompliantCancellationModal_imageContainer__HJK4J",
                closeButton: "CompliantCancellationModal_closeButton__8t7It",
                benefitList: "CompliantCancellationModal_benefitList__oDm0q",
                benefitItemIcon: "CompliantCancellationModal_benefitItemIcon__sAMaH",
                buttons: "CompliantCancellationModal_buttons__EwbAW"
            }
        },
        18682: a => {
            a.exports = {
                "wt-display-heading-x-small-bold": "ManagePlanCancelAction_wt-display-heading-x-small-bold__iRgpr",
                "wt-display-heading-small-bold-narrow": "ManagePlanCancelAction_wt-display-heading-small-bold-narrow__TwRF5",
                "wt-display-heading-small-bold": "ManagePlanCancelAction_wt-display-heading-small-bold__NPROv",
                "wt-display-heading-small-bold-wide": "ManagePlanCancelAction_wt-display-heading-small-bold-wide__3kb_k",
                "wt-display-heading-small-narrow": "ManagePlanCancelAction_wt-display-heading-small-narrow__R2ypS",
                "wt-display-heading-small": "ManagePlanCancelAction_wt-display-heading-small__AUOgs",
                "wt-display-heading-small-wide": "ManagePlanCancelAction_wt-display-heading-small-wide__VDqY7",
                "wt-display-heading-medium-bold-narrow": "ManagePlanCancelAction_wt-display-heading-medium-bold-narrow__arhcA",
                "wt-display-heading-medium-bold": "ManagePlanCancelAction_wt-display-heading-medium-bold__AU4ds",
                "wt-display-heading-medium-bold-wide": "ManagePlanCancelAction_wt-display-heading-medium-bold-wide__sd6ew",
                "wt-display-heading-medium-narrow": "ManagePlanCancelAction_wt-display-heading-medium-narrow__9HYAN",
                "wt-display-heading-medium": "ManagePlanCancelAction_wt-display-heading-medium___6Qdx",
                "wt-display-heading-medium-wide": "ManagePlanCancelAction_wt-display-heading-medium-wide__JTt_Y",
                "wt-display-heading-large-bold-narrow": "ManagePlanCancelAction_wt-display-heading-large-bold-narrow__nfl5w",
                "wt-display-heading-large-bold": "ManagePlanCancelAction_wt-display-heading-large-bold__7dKG4",
                "wt-display-heading-large-bold-wide": "ManagePlanCancelAction_wt-display-heading-large-bold-wide__FNbxj",
                "wt-display-heading-large-narrow": "ManagePlanCancelAction_wt-display-heading-large-narrow__hw6pO",
                "wt-display-heading-large": "ManagePlanCancelAction_wt-display-heading-large__glKE1",
                "wt-display-heading-large-wide": "ManagePlanCancelAction_wt-display-heading-large-wide__vORel",
                "wt-display-heading": "ManagePlanCancelAction_wt-display-heading__fL7n9",
                "wt-sub-heading": "ManagePlanCancelAction_wt-sub-heading__U4cRA",
                "wt-text-heading-small-bold-narrow": "ManagePlanCancelAction_wt-text-heading-small-bold-narrow__XUuxC",
                "wt-text-heading-small-bold": "ManagePlanCancelAction_wt-text-heading-small-bold__4yKGg",
                "wt-text-heading-small-bold-wide": "ManagePlanCancelAction_wt-text-heading-small-bold-wide__g2V1o",
                "wt-text-heading-small-narrow": "ManagePlanCancelAction_wt-text-heading-small-narrow__QVcJ_",
                "wt-text-heading-small": "ManagePlanCancelAction_wt-text-heading-small__4z73h",
                "wt-text-heading-small-wide": "ManagePlanCancelAction_wt-text-heading-small-wide__nhUhu",
                "wt-text-heading-medium-bold": "ManagePlanCancelAction_wt-text-heading-medium-bold__bOIMp",
                "wt-text-heading-medium-bold-wide": "ManagePlanCancelAction_wt-text-heading-medium-bold-wide__D45jW",
                "wt-text-heading-medium-semi-narrow": "ManagePlanCancelAction_wt-text-heading-medium-semi-narrow__LAqkf",
                "wt-text-heading-medium-narrow": "ManagePlanCancelAction_wt-text-heading-medium-narrow__87Xjp",
                "wt-text-heading-medium-semi": "ManagePlanCancelAction_wt-text-heading-medium-semi__mjie7",
                "wt-text-heading-medium-semi-wide": "ManagePlanCancelAction_wt-text-heading-medium-semi-wide__5CCS4",
                "wt-text-heading-medium": "ManagePlanCancelAction_wt-text-heading-medium__YtH1X",
                "wt-text-heading-medium-wide": "ManagePlanCancelAction_wt-text-heading-medium-wide__DTOOU",
                "wt-text-heading-large-bold-narrow": "ManagePlanCancelAction_wt-text-heading-large-bold-narrow__a8WWb",
                "wt-text-heading-large-bold": "ManagePlanCancelAction_wt-text-heading-large-bold__ZblrN",
                "wt-text-heading-large-bold-wide": "ManagePlanCancelAction_wt-text-heading-large-bold-wide__zp4xj",
                "wt-text-heading-large-narrow": "ManagePlanCancelAction_wt-text-heading-large-narrow__tNxvu",
                "wt-text-heading-large": "ManagePlanCancelAction_wt-text-heading-large__sQJK0",
                "wt-text-heading-large-wide": "ManagePlanCancelAction_wt-text-heading-large-wide___bGsJ",
                "wt-text-heading-x-large-narrow": "ManagePlanCancelAction_wt-text-heading-x-large-narrow__Of4u_",
                "wt-text-heading-x-large": "ManagePlanCancelAction_wt-text-heading-x-large___SQje",
                "wt-text-heading-x-large-wide": "ManagePlanCancelAction_wt-text-heading-x-large-wide__EizDn",
                "wt-text-heading": "ManagePlanCancelAction_wt-text-heading__kCJFa",
                "wt-body-x-small-semi": "ManagePlanCancelAction_wt-body-x-small-semi__WNeTO",
                "wt-body-x-small": "ManagePlanCancelAction_wt-body-x-small__X2YPs",
                "wt-body-small-bold": "ManagePlanCancelAction_wt-body-small-bold__28_Tt",
                "wt-body-small-semi": "ManagePlanCancelAction_wt-body-small-semi__smDf_",
                "wt-body-small": "ManagePlanCancelAction_wt-body-small___jGuz",
                radioContainer: "ManagePlanCancelAction_radioContainer__po_9U",
                confirmationText: "ManagePlanCancelAction_confirmationText__yk3QU",
                confirmationTextSubtitle: "ManagePlanCancelAction_confirmationTextSubtitle__Cs7i5",
                confirmationContainer: "ManagePlanCancelAction_confirmationContainer__IiaCb",
                errorText: "ManagePlanCancelAction_errorText__xOHOW",
                "wt-body-medium-bold": "ManagePlanCancelAction_wt-body-medium-bold__brMWR",
                "wt-body-medium-semi": "ManagePlanCancelAction_wt-body-medium-semi__oYGUW",
                confirmationTextTitle: "ManagePlanCancelAction_confirmationTextTitle__PO5NP",
                "wt-body-medium": "ManagePlanCancelAction_wt-body-medium__VDZd7",
                "wt-body-large-bold": "ManagePlanCancelAction_wt-body-large-bold__jF2rf",
                "wt-body-large": "ManagePlanCancelAction_wt-body-large__T_e5w",
                "wt-body-x-large": "ManagePlanCancelAction_wt-body-x-large__E9T4d",
                "wt-label-x-small-bold": "ManagePlanCancelAction_wt-label-x-small-bold__r_XaQ",
                "wt-label-x-small-semi": "ManagePlanCancelAction_wt-label-x-small-semi__749zr",
                "wt-label-x-small": "ManagePlanCancelAction_wt-label-x-small__q7m2B",
                "wt-label-small-bold": "ManagePlanCancelAction_wt-label-small-bold__oVYKo",
                "wt-label-small-semi": "ManagePlanCancelAction_wt-label-small-semi__JuTvo",
                "wt-label-small": "ManagePlanCancelAction_wt-label-small__or5Cw",
                "wt-label-medium-bold": "ManagePlanCancelAction_wt-label-medium-bold__cC7L6",
                "wt-label-medium-semi": "ManagePlanCancelAction_wt-label-medium-semi__5MNof",
                "wt-label-medium": "ManagePlanCancelAction_wt-label-medium__vSl_n",
                "wt-label-large-bold": "ManagePlanCancelAction_wt-label-large-bold__MJfHk",
                "wt-label-large-semi": "ManagePlanCancelAction_wt-label-large-semi__WcYKr",
                "wt-label-large": "ManagePlanCancelAction_wt-label-large__mbpg2",
                topBorder: "ManagePlanCancelAction_topBorder__93jCU",
                cancelContainer: "ManagePlanCancelAction_cancelContainer__8pkhx",
                cancelHeader: "ManagePlanCancelAction_cancelHeader__T6Y4t",
                banner: "ManagePlanCancelAction_banner__LQoNR",
                bannerContent: "ManagePlanCancelAction_bannerContent__HGh9k",
                bannerTitle: "ManagePlanCancelAction_bannerTitle__OKDEJ",
                bannerButton: "ManagePlanCancelAction_bannerButton__r1da_",
                cancellationText: "ManagePlanCancelAction_cancellationText__mdOXE",
                cancellationTextInfo: "ManagePlanCancelAction_cancellationTextInfo__hX0Ia",
                subtext: "ManagePlanCancelAction_subtext__QOCG6",
                error: "ManagePlanCancelAction_error__ytMjE",
                confirmationContent: "ManagePlanCancelAction_confirmationContent__ihnWZ",
                confirmationCheckbox: "ManagePlanCancelAction_confirmationCheckbox__06T6S"
            }
        },
        24750: (a, e, l) => {
            "use strict";
            l.d(e, {
                X: () => n
            });
            let n = {
                cancelButtonClicked(a) {
                    let {
                        errorShown: e
                    } = a;
                    return {
                        kind: "cancel_button_clicked",
                        info: {
                            ...void 0 !== e && {
                                cancellation_unchecked_checkbox_error_message_shown: e
                            }
                        }
                    }
                },
                seatsUpdateConfirmed(a) {
                    let {
                        quantity: e
                    } = a;
                    return {
                        kind: "seats_update_confirmed",
                        info: {
                            quantity: e
                        }
                    }
                },
                seatsUpdateBelowMinimumCommitmentError(a) {
                    let {
                        quantity: e
                    } = a;
                    return {
                        kind: "seats_update_error",
                        info: {
                            quantity: e
                        }
                    }
                }
            }
        },
        29336: (a, e, l) => {
            "use strict";
            l.d(e, {
                T: () => s,
                p: () => c
            });
            var n = l(21462),
                i = l(38169),
                t = l(26232),
                d = l(15913),
                o = l(96644);
            let s = "paused",
                c = () => {
                    let {
                        currentTeam: a
                    } = (0, d.o)(), [e] = (0, t.Ks)(), l = (0, i.wA)();
                    return (0, n.useCallback)(async () => {
                        if (a) try {
                            await e({
                                teamId: a.id
                            }).unwrap(), l(o.P9.setPanelNotification({
                                category: o.aF.Notification,
                                details: "pause_subscription_success"
                            }))
                        } catch (a) {
                            l(o.P9.setPanelNotification({
                                category: o.aF.Error,
                                details: "pause_subscription_success"
                            }))
                        }
                    }, [a, e, l])
                }
        },
        43657: (a, e, l) => {
            "use strict";
            l.d(e, {
                f: () => ad
            });
            var n = l(23798),
                i = l(46001),
                t = l.n(i),
                d = l(21462),
                o = l(75546),
                s = l(90459),
                c = l(37874),
                _ = l(16173),
                r = l(15933),
                m = l(39602),
                w = l.n(m),
                g = l(38169),
                p = l(78207),
                u = l(7758),
                b = l(91632),
                h = l(61360),
                x = l(87963),
                C = l(89187),
                y = l(72255),
                M = l(99823),
                S = l(10995);
            let A = {
                src: "/_next/static/media/visual.015673bd.png",
                height: 2264,
                width: 1520,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAMFBMVEXI59zL6d/O6+HZ6uanxcX0+fu/2tHg6/O73NGx1c2Ai4movKTN3s+QpY2sy8vDy7wDZaXtAAAACXBIWXMAACxLAAAsSwGlPZapAAAAK0lEQVR4nB3Bhw0AIBADsUueXvffFgkbSXw2jkiHmvOe9Ii7aJSRsFQAYT0OOACfszvSdgAAAABJRU5ErkJggg==",
                blurWidth: 5,
                blurHeight: 8
            };
            var P = l(12066),
                f = l.n(P);

            function j(a) {
                let {
                    isVisible: e,
                    onDismiss: l,
                    expiryDate: i,
                    planTier: t
                } = a, {
                    t: s
                } = (0, o.Bd)("translation", {
                    keyPrefix: "page.manage_plan.cancel.compliance.modal"
                }), c = (0, g.wA)(), m = (0, u.X)(), P = t === C.js.STARTER ? [s("benefits_starter.benefit_1")] : [s("benefits_ultimate.benefit_1"), s("benefits_ultimate.benefit_2"), s("benefits_ultimate.benefit_3"), s("benefits_ultimate.benefit_4"), s("benefits_ultimate.benefit_5")];
                (0, d.useEffect)(() => {
                    e && (0, x.Od)().trackUserAction(b.$.confirmationDisplayed("modal"))
                }, [e]);
                let j = (0, d.useCallback)(() => {
                        (0, x.Od)().trackUserAction(b.$.confirmationDismissed("modal")), l()
                    }, [l]),
                    v = (0, d.useCallback)(async () => {
                        (0, x.Od)().trackUserAction(M.f.confirmCancelButtonClicked()), await m(), (0, x.Od)().trackUserAction(M.f.subscriptionCanceled()), c(S.A.Account.setCanSeeGoodbyeOffer(!0)), l(), y.A.navigateTo("/workspace/payment")
                    }, [m, c, l]);
                return (0, n.jsx)(p.a, {
                    isOpen: e,
                    onClose: j,
                    classes: {
                        containerClass: f().modal
                    },
                    appElement: (0, h.Y)(),
                    children: (0, n.jsxs)("div", {
                        className: f().modalContent,
                        children: [(0, n.jsx)("div", {
                            className: f().imageContainer,
                            children: (0, n.jsx)(w(), {
                                src: A,
                                alt: "",
                                fill: !0,
                                sizes: "50vw",
                                style: {
                                    objectFit: "cover"
                                }
                            })
                        }), (0, n.jsxs)("div", {
                            className: f().content,
                            children: [(0, n.jsx)(_.$Td, {
                                "aria-hidden": !0,
                                className: f().closeButton,
                                onClick: j
                            }), (0, n.jsx)("div", {
                                className: f().title,
                                children: s("title")
                            }), (0, n.jsxs)("div", {
                                className: f().benefitsSection,
                                children: [(0, n.jsx)("div", {
                                    className: f().benefitsText,
                                    children: s(t === C.js.STARTER ? "benefits_starter.text" : "benefits_ultimate.text", {
                                        renewal_date: i
                                    })
                                }), (0, n.jsxs)("div", {
                                    className: f().benefitList,
                                    children: [P.map((a, e) => (0, n.jsxs)("div", {
                                        className: f().benefitItem,
                                        children: [(0, n.jsx)(_.$Td, {
                                            "aria-hidden": !0,
                                            className: f().benefitItemIcon
                                        }), (0, n.jsx)("div", {
                                            className: f().benefitItemText,
                                            children: a
                                        })]
                                    }, e)), t !== C.js.STARTER && (0, n.jsx)("div", {
                                        className: f().benefitMore,
                                        children: s("benefits_ultimate.more")
                                    })]
                                })]
                            }), (0, n.jsxs)("div", {
                                className: f().buttons,
                                children: [(0, n.jsx)(r.$, {
                                    fullwidth: !0,
                                    size: "medium",
                                    appearance: "primary",
                                    onClick: j,
                                    children: s("buttons.keep_my_plan")
                                }), (0, n.jsx)(r.$, {
                                    fullwidth: !0,
                                    size: "medium",
                                    appearance: "tertiary",
                                    onClick: v,
                                    children: s("buttons.cancel_plan")
                                })]
                            })]
                        })]
                    })
                })
            }
            var v = l(4838),
                N = l(75876),
                T = l(62760),
                k = l(92288),
                B = l.n(k),
                E = l(19724),
                I = l(91384),
                D = l(29336),
                F = l(91053),
                O = l(61149),
                R = l(5866),
                H = l(97875),
                U = l(37828),
                L = l(98851),
                G = l(44259),
                V = l(15321),
                K = l(59457),
                Q = l(88848),
                W = l(7686),
                X = l(5852),
                z = l(33615),
                J = l(84530),
                Y = l(55112),
                Z = l(68018),
                q = l(86781),
                $ = l(28330);
            let aa = {
                src: "/_next/static/media/visual.ae882372.png",
                height: 288,
                width: 608,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAS1BMVEWhrplaUU65r5W90NS8vK7U1M+woI61j3iuhW64qJiigW2nrLLh09GgiXhrRDHRuqetk4LCrJmzrKt5RCydf2tcNiKlp6SEZ0nFnYp7no0DAAAAEnRSTlPz8/7X59fn+fnn83t71/5713tdJ43uAAAACXBIWXMAACxLAAAsSwGlPZapAAAALElEQVR4nGPgEWJmYBEQ4WfgYmcQl+ATZmdgFGMS5hAV5WDgFmJl4+QVEQQAGpgBik5mPO0AAAAASUVORK5CYII=",
                blurWidth: 8,
                blurHeight: 4
            };
            var ae = l(78148),
                al = l.n(ae);

            function an(a) {
                var e, l;
                let {
                    isVisible: i,
                    onDismiss: s
                } = a, {
                    t: c
                } = (0, o.Bd)(), m = (0, g.wA)(), b = (0, g.d4)(q.mB), S = (0, H.G)(), A = (0, D.p)(), P = (0, u.X)(), f = (0, I.d)(), {
                    subscription: j
                } = (0, U.f)(), N = (0, v.t0)(), T = (null == j ? void 0 : j.isPaidDowngrade) || (null == j ? void 0 : j.isPaused), k = (null == j ? void 0 : j.status) === $.dH.trialing, ae = (0, X.r)(), an = !T && !k && !(0, Y.h)(j), ai = a => {
                    var e;
                    return (0, L.W)({
                        amount: a,
                        currency: null != (e = null == j ? void 0 : j.currency) ? e : O.Sj.EUR,
                        locale: S
                    })
                }, at = (0, C.m4)(null == j ? void 0 : j.interval), ad = X.Q.discount, ao = (null == j ? void 0 : j.endsAt) ? J.A.date(new Date(null == j ? void 0 : j.endsAt), "without_day") : "", as = (0, C.Is)(b.planTier), ac = (null != (e = null == j ? void 0 : j.totalCents) ? e : 0) / 100, a_ = (null != (l = null == j ? void 0 : j.totalCentsBeforeTaxesAndDiscounts) ? l : 0) / 100 * (1 - ad / 100), ar = ai(ac), am = ai(ac - a_), aw = ai(a_), [ag, ap] = (0, d.useState)(!0);
                (0, d.useEffect)(() => {
                    i && (0, x.Od)().trackUserAction(M.f.popupDisplayed())
                }, [i]);
                let au = (0, d.useCallback)(async () => {
                        (0, x.Od)().trackUserAction(M.f.pauseSubscriptionButtonClicked()), await A(), s(), y.A.navigateTo("/workspace/payment?".concat(D.T, "=true"))
                    }, [A, s]),
                    ab = (0, d.useCallback)(() => {
                        (0, x.Od)().trackUserAction(M.f.contactSupportButtonClicked()), window.open(K.h7, "_blank"), s()
                    }, [s]),
                    ah = (0, d.useCallback)(async () => {
                        (0, x.Od)().trackUserAction(M.f.getDiscountButtonClicked()), await f(X.Q.code), m((0, Z.m$)("getCouponData")), (0, x.Od)().trackUserAction(F.X.userConverted({
                            subscriptionTier: b.planTier,
                            billingPeriod: at,
                            paywallType: Q.pU.CTA,
                            paywallTrigger: Q.vW.MANAGE_PLAN_CANCELLATION_DISCOUNT
                        })), (0, z.Ho)(), s(), y.A.navigateTo("/workspace/payment?".concat(I.V, "=true"))
                    }, [f, b.planTier, at, s, m]),
                    ax = (0, d.useCallback)(async () => {
                        (0, x.Od)().trackUserAction(M.f.confirmCancelButtonClicked()), await P(), (0, x.Od)().trackUserAction(M.f.subscriptionCanceled()), s(), y.A.navigateTo("/workspace/payment/cancel-reason")
                    }, [P, s]),
                    aC = (0, d.useCallback)(() => {
                        (0, x.Od)().trackUserAction(M.f.popupDismissed()), s()
                    }, [s]),
                    ay = (0, d.useCallback)(a => {
                        let e = a.currentTarget;
                        ap(e.scrollTop / (e.scrollHeight - e.clientHeight) * 100 < 80)
                    }, []),
                    aM = () => (0, n.jsxs)("div", {
                        className: al().offerSection,
                        children: [(0, n.jsx)("span", {
                            className: al().offerTitle,
                            children: c("page.manage_plan.cancel.modal.discount_title")
                        }), (0, n.jsxs)("div", {
                            className: al().priceAndBannerContainer,
                            children: [(0, n.jsxs)("div", {
                                className: al().priceInfoContainer,
                                children: [(0, n.jsx)("span", {
                                    className: al().priceInfoTitle,
                                    children: c("page.manage_plan.cancel.modal.stay", {
                                        discount: ad
                                    })
                                }), (0, n.jsxs)("div", {
                                    className: al().priceInfo,
                                    children: [(0, n.jsxs)("div", {
                                        className: al().priceRow,
                                        children: [(0, n.jsx)("span", {
                                            className: al().priceLabel,
                                            children: c("page.manage_plan.cancel.modal.plan", {
                                                billing: B()(at),
                                                plan_tier: as
                                            })
                                        }), (0, n.jsx)("span", {
                                            className: al().priceValue,
                                            children: ar
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: al().priceRow,
                                        children: [(0, n.jsx)("span", {
                                            className: t()(al().priceLabel, al().discount),
                                            children: c("page.manage_plan.cancel.modal.discount", {
                                                discount: ad
                                            })
                                        }), (0, n.jsxs)("span", {
                                            className: t()(al().priceValue, al().discount),
                                            children: ["- ", am]
                                        })]
                                    }), (0, n.jsx)("div", {
                                        className: al().divider
                                    }), (0, n.jsxs)("div", {
                                        className: al().priceRow,
                                        children: [(0, n.jsx)("span", {
                                            className: al().priceLabel,
                                            children: c("page.manage_plan.cancel.modal.new_price", {
                                                date: ao
                                            })
                                        }), (0, n.jsx)("span", {
                                            className: al().priceValue,
                                            children: aw
                                        })]
                                    })]
                                })]
                            }), (0, n.jsx)("div", {
                                className: al().banner,
                                children: (0, n.jsx)("span", {
                                    className: al().bannerText,
                                    children: c("page.manage_plan.cancel.modal.save_text", {
                                        amount: am,
                                        plan_tier: as
                                    })
                                })
                            })]
                        }), (0, n.jsxs)("div", {
                            className: al().actionButtons,
                            children: [(0, n.jsx)(r.$, {
                                fullwidth: !0,
                                size: "medium",
                                onClick: ah,
                                children: c("page.manage_plan.cancel.modal.get_offer")
                            }), (0, n.jsx)("span", {
                                className: al().renewalText,
                                children: c("page.manage_plan.cancel.modal.renewal_date", {
                                    date: ao
                                })
                            }), (0, n.jsx)("span", {
                                className: al().termsText,
                                children: (0, n.jsx)(o.x6, {
                                    i18nKey: "page.manage_plan.cancel.modal.terms",
                                    components: [(0, n.jsx)(E.N, {
                                        target: "_blank",
                                        href: W.Ay.createTermsOfServiceRoute()
                                    }, 0)]
                                })
                            })]
                        })]
                    }),
                    aS = () => (0, n.jsxs)("div", {
                        className: al().supportSection,
                        children: [(0, n.jsx)("h3", {
                            className: al().supportTitle,
                            children: c("page.manage_plan.cancel.modal.support.title")
                        }), (0, n.jsxs)("div", {
                            className: al().supportContainer,
                            children: [(0, n.jsx)("div", {
                                className: al().supportImageContainer,
                                children: (0, n.jsx)(w(), {
                                    src: aa,
                                    alt: "",
                                    className: al().supportImage,
                                    fill: !0,
                                    sizes: "50vw",
                                    style: {
                                        objectFit: "cover"
                                    }
                                })
                            }), (0, n.jsx)("span", {
                                className: al().supportText,
                                children: c("page.manage_plan.cancel.modal.support.text")
                            }), (0, n.jsx)(r.$, {
                                fullwidth: !0,
                                onClick: ab,
                                children: c("page.manage_plan.cancel.modal.support.button")
                            })]
                        })]
                    }),
                    aA = () => (0, n.jsxs)("div", {
                        className: al().goodbyeSection,
                        children: [(0, n.jsx)("h3", {
                            className: al().goodbyeTitle,
                            children: c("page.manage_plan.cancel.modal.goodbye.title")
                        }), (0, n.jsxs)("div", {
                            className: al().goodbyeContainer,
                            children: [(0, n.jsx)("span", {
                                className: al().goodbyeText,
                                children: c("page.manage_plan.cancel.modal.goodbye.text")
                            }), (0, n.jsx)(r.$, {
                                variation: "destructive",
                                appearance: "secondary",
                                fullwidth: !0,
                                onClick: ax,
                                children: N ? c("page.manage_plan.cancel.modal.goodbye.button_compliant") : c("page.manage_plan.cancel.modal.goodbye.button")
                            })]
                        })]
                    });
                return (0, n.jsx)(p.a, {
                    isOpen: i,
                    classes: {
                        containerClass: al().modal
                    },
                    onClose: aC,
                    appElement: (0, h.Y)(),
                    children: (0, n.jsxs)("div", {
                        className: al().modalContent,
                        children: [(0, n.jsx)("div", {
                            className: t()(al().scrollbarContainer, {
                                [al().compliant]: N
                            }),
                            onScroll: ay,
                            children: (0, n.jsxs)("div", {
                                className: al().container,
                                children: [(0, n.jsx)("div", {
                                    className: al().closeButton,
                                    onClick: aC,
                                    children: (0, n.jsx)(G.Ay, {
                                        color: V.$A,
                                        hoverColor: V.Id,
                                        type: "Close"
                                    })
                                }), (0, n.jsx)("div", {
                                    className: al().firstBlock,
                                    children: (0, n.jsx)("h2", {
                                        className: al().title,
                                        children: c("page.manage_plan.cancel.modal.title")
                                    })
                                }), (0, n.jsx)(() => N ? (0, n.jsxs)(n.Fragment, {
                                    children: [an && (0, n.jsx)(R.A, {
                                        context: "modal",
                                        shouldShowThirdFeature: !1,
                                        onPauseSubscription: au
                                    }), an && (0, n.jsx)("div", {
                                        className: al().divider
                                    }), (0, n.jsx)(aA, {}), (0, n.jsx)("div", {
                                        className: al().divider
                                    }), ae && (0, n.jsx)(aM, {}), ae && (0, n.jsx)("div", {
                                        className: al().divider
                                    }), (0, n.jsx)(aS, {})]
                                }) : (0, n.jsxs)(n.Fragment, {
                                    children: [an && (0, n.jsx)(R.A, {
                                        context: "modal",
                                        shouldShowThirdFeature: !0,
                                        onPauseSubscription: au
                                    }), an && (0, n.jsx)("div", {
                                        className: al().divider
                                    }), ae && (0, n.jsx)(aM, {}), ae && (0, n.jsx)("div", {
                                        className: al().divider
                                    }), (0, n.jsx)(aS, {}), (0, n.jsx)("div", {
                                        className: al().divider
                                    }), (0, n.jsx)(aA, {})]
                                }), {})]
                            })
                        }), (0, n.jsx)("div", {
                            className: t()(al().scrollHintContainer, {
                                [al().hidden]: !ag
                            }),
                            children: (0, n.jsxs)("div", {
                                className: al().scrollHintContent,
                                children: [(0, n.jsx)(_.ac, {
                                    size: "small"
                                }), (0, n.jsx)("span", {
                                    className: al().scrollHintText,
                                    children: c("page.manage_plan.cancel.modal.scroll_hint")
                                })]
                            })
                        })]
                    })
                })
            }
            var ai = l(18682),
                at = l.n(ai);
            let ad = a => {
                let {
                    user: e,
                    expiryDate: l,
                    pendingCancellation: i,
                    trackClick: m,
                    setShowCompliantCancellationPage: w
                } = a, g = (0, N.J)(), {
                    settings: p
                } = (0, T.k)(), [u, b] = (0, d.useState)(!1), [h, x] = (0, d.useState)(!1), [y, M] = (0, d.useState)(!1), [S, A] = (0, d.useState)(!1), P = (0, v.pR)(), f = (0, C.Is)(e.planTier), {
                    t: k
                } = (0, o.Bd)(), B = t()(at().cancelContainer, {
                    [at().topBorder]: !!g
                }), E = t()(at().radioContainer, {
                    [at().error]: h
                }), I = P !== v.Gn.NONE ? (0, n.jsx)(o.x6, {
                    i18nKey: "page.manage_plan.cancel.drawbacks.cancel_plan_compliant",
                    values: {
                        renewal_date: l
                    },
                    components: {
                        strong: (0, n.jsx)("strong", {})
                    }
                }) : k("page.manage_plan.cancel.drawbacks.cancel_plan", {
                    renewal_date: l
                }), D = (0, n.jsx)(o.x6, {
                    i18nKey: "page.manage_plan.cancel.drawbacks.cancel_plan_text",
                    components: {
                        li: (0, n.jsx)("li", {}),
                        strong: (0, n.jsx)("strong", {})
                    }
                });
                return (0, n.jsxs)("div", {
                    className: B,
                    children: [(0, n.jsx)(an, {
                        isVisible: y,
                        onDismiss: () => M(!1)
                    }), (0, n.jsx)(j, {
                        isVisible: S,
                        onDismiss: () => A(!1),
                        expiryDate: l,
                        planTier: e.planTier
                    }), (0, n.jsx)("h5", {
                        className: at().cancelHeader,
                        children: k("page.manage_plan.cancel.cancel_subscription")
                    }), (0, n.jsxs)("div", {
                        className: at().cancellationText,
                        children: [(0, n.jsx)("p", {
                            className: at().cancellationTextInfo,
                            children: I
                        }), P === v.Gn.NONE && (0, n.jsx)("span", {
                            className: t()(at().cancellationTextInfo, at().subtext),
                            children: D
                        })]
                    }), (0, n.jsxs)("div", {
                        className: at().confirmationContainer,
                        children: [(0, n.jsx)("div", {
                            className: E,
                            children: (0, n.jsxs)("div", {
                                className: at().confirmationContent,
                                children: [(0, n.jsx)(s.S, {
                                    id: "cancel-confirmation",
                                    value: "confirmed",
                                    className: at().confirmationCheckbox,
                                    checked: u,
                                    onChange: () => {
                                        u || x(!1), b(!u)
                                    }
                                }), (0, n.jsxs)("div", {
                                    className: at().confirmationText,
                                    children: [(0, n.jsx)("span", {
                                        className: at().confirmationTextTitle,
                                        children: k(P !== v.Gn.NONE ? "page.manage_plan.cancel.drawbacks.confirmation_title_compliant" : "page.manage_plan.cancel.drawbacks.confirmation_title")
                                    }), (0, n.jsx)("span", {
                                        className: at().confirmationTextSubtitle,
                                        children: k(P !== v.Gn.NONE ? "page.manage_plan.cancel.drawbacks.confirmation_subtitle_compliant" : "page.manage_plan.cancel.drawbacks.confirmation_subtitle", {
                                            plan_tier: f
                                        })
                                    })]
                                })]
                            })
                        }), h && (0, n.jsx)("span", {
                            className: at().errorText,
                            children: k("page.manage_plan.cancel.drawbacks.confirmation_error")
                        })]
                    }), !p.downgrade_to_starter_enabled && (0, n.jsxs)(c.l, {
                        isOpen: !0,
                        mode: "light",
                        variation: "default",
                        className: at().banner,
                        children: [(0, n.jsx)(c.l.Icon, {
                            icon: _.cFx
                        }), (0, n.jsx)(c.l.Content, {
                            children: (0, n.jsxs)("div", {
                                className: at().bannerContent,
                                children: [(0, n.jsx)("span", {
                                    className: at().bannerTitle,
                                    children: k("page.manage_plan.cancel.downgrade_banner.title")
                                }), (0, n.jsx)("span", {
                                    className: at().bannerText,
                                    children: k("page.manage_plan.cancel.downgrade_banner.text")
                                })]
                            })
                        }), (0, n.jsx)(c.l.Actions, {
                            className: at().bannerButton,
                            children: (0, n.jsx)(r.$, {
                                variation: "neutral",
                                appearance: "secondary",
                                size: "small",
                                as: "a",
                                href: "https://help.wetransfer.com/hc/en-us/articles/208154066-Our-payment-plans",
                                children: k("page.manage_plan.cancel.downgrade_banner.cta")
                            })
                        })]
                    }), i ? (0, n.jsx)("p", {
                        className: at().cancelMessage,
                        children: k("page.manage_plan.cancel.cancelling")
                    }) : (0, n.jsx)(r.$, {
                        variation: "destructive",
                        onClick: () => {
                            u ? P === v.Gn.MODAL ? A(!0) : P === v.Gn.PAGE ? (null == w || w(!0), window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            })) : M(!0) : x(!0), m && m(!u)
                        },
                        appearance: "secondary",
                        className: at().cancelButton,
                        size: "small",
                        children: k("page.manage_plan.cancel.cancel_subscription")
                    })]
                })
            }
        },
        50298: a => {
            a.exports = {
                "wt-display-heading-x-small-bold": "PauseSection_wt-display-heading-x-small-bold__wNmHi",
                "wt-display-heading-small-bold-narrow": "PauseSection_wt-display-heading-small-bold-narrow__QozMp",
                "wt-display-heading-small-bold": "PauseSection_wt-display-heading-small-bold__B38Dj",
                "wt-display-heading-small-bold-wide": "PauseSection_wt-display-heading-small-bold-wide__7VIPy",
                "wt-display-heading-small-narrow": "PauseSection_wt-display-heading-small-narrow__7xQGT",
                "wt-display-heading-small": "PauseSection_wt-display-heading-small__mmt5X",
                "wt-display-heading-small-wide": "PauseSection_wt-display-heading-small-wide__ugq_h",
                "wt-display-heading-medium-bold-narrow": "PauseSection_wt-display-heading-medium-bold-narrow__n7BUw",
                "wt-display-heading-medium-bold": "PauseSection_wt-display-heading-medium-bold__IZ3Wi",
                "wt-display-heading-medium-bold-wide": "PauseSection_wt-display-heading-medium-bold-wide__jO4GL",
                "wt-display-heading-medium-narrow": "PauseSection_wt-display-heading-medium-narrow__xOQRo",
                "wt-display-heading-medium": "PauseSection_wt-display-heading-medium__YYWLa",
                "wt-display-heading-medium-wide": "PauseSection_wt-display-heading-medium-wide__LjEAp",
                "wt-display-heading-large-bold-narrow": "PauseSection_wt-display-heading-large-bold-narrow__lg_NA",
                "wt-display-heading-large-bold": "PauseSection_wt-display-heading-large-bold__K_vb_",
                "wt-display-heading-large-bold-wide": "PauseSection_wt-display-heading-large-bold-wide__VP1fN",
                "wt-display-heading-large-narrow": "PauseSection_wt-display-heading-large-narrow__IhOq6",
                "wt-display-heading-large": "PauseSection_wt-display-heading-large__MRuth",
                "wt-display-heading-large-wide": "PauseSection_wt-display-heading-large-wide__m8EzT",
                "wt-display-heading": "PauseSection_wt-display-heading__rlfhh",
                "wt-sub-heading": "PauseSection_wt-sub-heading__CbFMs",
                "wt-text-heading-small-bold-narrow": "PauseSection_wt-text-heading-small-bold-narrow__mukS5",
                "wt-text-heading-small-bold": "PauseSection_wt-text-heading-small-bold__KfoFL",
                pauseSection: "PauseSection_pauseSection__iSBMa",
                pauseText: "PauseSection_pauseText__67BGk",
                pauseTitleAndBadge: "PauseSection_pauseTitleAndBadge__xm7XH",
                pauseTitle: "PauseSection_pauseTitle__5MYWR",
                "wt-text-heading-small-bold-wide": "PauseSection_wt-text-heading-small-bold-wide__00VP_",
                "wt-text-heading-small-narrow": "PauseSection_wt-text-heading-small-narrow__jg_95",
                "wt-text-heading-small": "PauseSection_wt-text-heading-small__NaYvT",
                "wt-text-heading-small-wide": "PauseSection_wt-text-heading-small-wide__FY99v",
                "wt-text-heading-medium-bold": "PauseSection_wt-text-heading-medium-bold__gwR_c",
                "wt-text-heading-medium-bold-wide": "PauseSection_wt-text-heading-medium-bold-wide__6_yxM",
                "wt-text-heading-medium-semi-narrow": "PauseSection_wt-text-heading-medium-semi-narrow__Pq6a7",
                "wt-text-heading-medium-narrow": "PauseSection_wt-text-heading-medium-narrow___YtwV",
                "wt-text-heading-medium-semi": "PauseSection_wt-text-heading-medium-semi__MQQu5",
                "wt-text-heading-medium-semi-wide": "PauseSection_wt-text-heading-medium-semi-wide__GCJHb",
                "wt-text-heading-medium": "PauseSection_wt-text-heading-medium__yfSUi",
                "wt-text-heading-medium-wide": "PauseSection_wt-text-heading-medium-wide__RGXEF",
                "wt-text-heading-large-bold-narrow": "PauseSection_wt-text-heading-large-bold-narrow__DoCeC",
                "wt-text-heading-large-bold": "PauseSection_wt-text-heading-large-bold__5VFuM",
                "wt-text-heading-large-bold-wide": "PauseSection_wt-text-heading-large-bold-wide__QFZdE",
                "wt-text-heading-large-narrow": "PauseSection_wt-text-heading-large-narrow__Cur0T",
                "wt-text-heading-large": "PauseSection_wt-text-heading-large__QnM2V",
                "wt-text-heading-large-wide": "PauseSection_wt-text-heading-large-wide__trTpk",
                "wt-text-heading-x-large-narrow": "PauseSection_wt-text-heading-x-large-narrow__m3jsq",
                "wt-text-heading-x-large": "PauseSection_wt-text-heading-x-large__2XiYO",
                "wt-text-heading-x-large-wide": "PauseSection_wt-text-heading-x-large-wide__RSQGY",
                "wt-text-heading": "PauseSection_wt-text-heading__0oTCn",
                "wt-body-x-small-semi": "PauseSection_wt-body-x-small-semi__UERRl",
                "wt-body-x-small": "PauseSection_wt-body-x-small__4MSee",
                inModal: "PauseSection_inModal___w34g",
                pauseDescriptionAndFeatures: "PauseSection_pauseDescriptionAndFeatures__H_6VF",
                pauseFeatureText: "PauseSection_pauseFeatureText___mRO0",
                "wt-body-small-bold": "PauseSection_wt-body-small-bold__U90_g",
                "wt-body-small-semi": "PauseSection_wt-body-small-semi__LYgMP",
                "wt-body-small": "PauseSection_wt-body-small__d3nn8",
                pauseDescription: "PauseSection_pauseDescription__CrJe5",
                "wt-body-medium-bold": "PauseSection_wt-body-medium-bold__g8_Go",
                "wt-body-medium-semi": "PauseSection_wt-body-medium-semi__0jrDl",
                "wt-body-medium": "PauseSection_wt-body-medium__eBLgp",
                "wt-body-large-bold": "PauseSection_wt-body-large-bold___mONr",
                "wt-body-large": "PauseSection_wt-body-large__biTqK",
                "wt-body-x-large": "PauseSection_wt-body-x-large___Zx07",
                "wt-label-x-small-bold": "PauseSection_wt-label-x-small-bold__Qt_Qx",
                "wt-label-x-small-semi": "PauseSection_wt-label-x-small-semi__BljGW",
                "wt-label-x-small": "PauseSection_wt-label-x-small__1EgNP",
                "wt-label-small-bold": "PauseSection_wt-label-small-bold__rIkVd",
                "wt-label-small-semi": "PauseSection_wt-label-small-semi__zTKgu",
                "wt-label-small": "PauseSection_wt-label-small__mnQRN",
                "wt-label-medium-bold": "PauseSection_wt-label-medium-bold__qKBCf",
                "wt-label-medium-semi": "PauseSection_wt-label-medium-semi__KrmV2",
                "wt-label-medium": "PauseSection_wt-label-medium__To1GU",
                "wt-label-large-bold": "PauseSection_wt-label-large-bold__jKaDk",
                "wt-label-large-semi": "PauseSection_wt-label-large-semi__K1mgy",
                "wt-label-large": "PauseSection_wt-label-large__6_9SP",
                badge: "PauseSection_badge__vB2rr",
                pauseFeatures: "PauseSection_pauseFeatures__nUrPj",
                pauseFeature: "PauseSection_pauseFeature__2Fbi4"
            }
        },
        55112: (a, e, l) => {
            "use strict";
            l.d(e, {
                h: () => d
            });
            var n = l(49302),
                i = l(55851),
                t = l(28330);

            function d(a) {
                let e = (null == a ? void 0 : a.status) === t.dH.active && (null == a ? void 0 : a.cancelAtPeriodEnd) === !1 && (null == a ? void 0 : a.externalProvider) === n.hL.MONETA && (null == a ? void 0 : a.endsAt) && new Date(a.endsAt) < new Date(Date.now() - i.i.ONE_DAY_IN_MILLISECONDS);
                return (null == a ? void 0 : a.status) === t.dH.past_due || !!e
            }
        },
        58436: a => {
            a.exports = {
                PanelHeader: "PanelHeader_PanelHeader___muol",
                WorkspaceName: "PanelHeader_WorkspaceName__6Ahjx",
                PanelInformation: "PanelHeader_PanelInformation__MGSx7",
                PanelAvatar: "PanelHeader_PanelAvatar__BVr9C",
                PanelName: "PanelHeader_PanelName__JiZmf",
                PanelDescription: "PanelHeader_PanelDescription__N0CQT",
                divider: "PanelHeader_divider__xAkWw"
            }
        },
        64674: (a, e, l) => {
            "use strict";
            l.d(e, {
                a: () => _
            });
            var n = l(23798);
            l(21462);
            var i = l(38169),
                t = l(15933),
                d = l(53123),
                o = l(15913),
                s = l(58436),
                c = l.n(s);

            function _(a) {
                var e;
                let {
                    showWorkspaceName: l,
                    showWorkspaceAvatar: s,
                    panelName: _,
                    panelDescription: r,
                    buttonLabel: m,
                    onClick: w,
                    isDisabled: g,
                    children: p,
                    formId: u,
                    setWorkspaceName: b,
                    id: h
                } = a, {
                    user: x
                } = (0, i.d4)(a => ({
                    user: a.user
                })), C = null == x || null == (e = x.profile_picture) ? void 0 : e.thumbnail_url, {
                    currentTeam: y
                } = (0, o.o)(), M = d.A.getWorkspaceName(y, x);
                return (0, n.jsxs)("div", {
                    className: c().PanelHeader,
                    "data-testid": "panel-header",
                    id: h,
                    children: [l && (0, n.jsx)("span", {
                        "data-testid": "workspace-name",
                        className: c().WorkspaceName,
                        children: b || M
                    }), (0, n.jsxs)("div", {
                        className: c().PanelInformation,
                        children: [s && (0, n.jsx)("span", {
                            "data-testid": "panel-avatar",
                            className: c().PanelAvatar,
                            style: {
                                backgroundImage: "url(".concat(C, ")")
                            }
                        }), (0, n.jsxs)("div", {
                            children: [(0, n.jsx)("h1", {
                                className: c().PanelName,
                                children: _
                            }), r && (0, n.jsx)("p", {
                                className: c().PanelDescription,
                                children: r
                            })]
                        }), m && (0, n.jsx)(t.$, {
                            type: u ? "submit" : void 0,
                            form: u,
                            className: c().PanelButton,
                            onClick: w,
                            disabled: g,
                            children: m
                        })]
                    }), p, (0, n.jsx)("div", {
                        className: c().divider
                    })]
                })
            }
        },
        78148: a => {
            a.exports = {
                "wt-display-heading-x-small-bold": "CancelSubscriptionModal_wt-display-heading-x-small-bold__ufcuv",
                "wt-display-heading-small-bold-narrow": "CancelSubscriptionModal_wt-display-heading-small-bold-narrow__p76L0",
                "wt-display-heading-small-bold": "CancelSubscriptionModal_wt-display-heading-small-bold__BcRIc",
                "wt-display-heading-small-bold-wide": "CancelSubscriptionModal_wt-display-heading-small-bold-wide__lqqLv",
                "wt-display-heading-small-narrow": "CancelSubscriptionModal_wt-display-heading-small-narrow__EW6do",
                "wt-display-heading-small": "CancelSubscriptionModal_wt-display-heading-small__BXVA5",
                "wt-display-heading-small-wide": "CancelSubscriptionModal_wt-display-heading-small-wide__nD_uW",
                "wt-display-heading-medium-bold-narrow": "CancelSubscriptionModal_wt-display-heading-medium-bold-narrow__h6FUj",
                "wt-display-heading-medium-bold": "CancelSubscriptionModal_wt-display-heading-medium-bold__eHx3d",
                "wt-display-heading-medium-bold-wide": "CancelSubscriptionModal_wt-display-heading-medium-bold-wide__xtM_g",
                "wt-display-heading-medium-narrow": "CancelSubscriptionModal_wt-display-heading-medium-narrow__QI9IH",
                "wt-display-heading-medium": "CancelSubscriptionModal_wt-display-heading-medium__MrosR",
                "wt-display-heading-medium-wide": "CancelSubscriptionModal_wt-display-heading-medium-wide__ACFpz",
                "wt-display-heading-large-bold-narrow": "CancelSubscriptionModal_wt-display-heading-large-bold-narrow__V_5bC",
                "wt-display-heading-large-bold": "CancelSubscriptionModal_wt-display-heading-large-bold__eXnMC",
                "wt-display-heading-large-bold-wide": "CancelSubscriptionModal_wt-display-heading-large-bold-wide__S6Nn1",
                "wt-display-heading-large-narrow": "CancelSubscriptionModal_wt-display-heading-large-narrow__v5SuV",
                "wt-display-heading-large": "CancelSubscriptionModal_wt-display-heading-large__vBWNk",
                "wt-display-heading-large-wide": "CancelSubscriptionModal_wt-display-heading-large-wide__4OAMG",
                "wt-display-heading": "CancelSubscriptionModal_wt-display-heading__EtrnF",
                "wt-sub-heading": "CancelSubscriptionModal_wt-sub-heading__RklTh",
                "wt-text-heading-small-bold-narrow": "CancelSubscriptionModal_wt-text-heading-small-bold-narrow__Ik5LI",
                "wt-text-heading-small-bold": "CancelSubscriptionModal_wt-text-heading-small-bold__6WMFj",
                supportSection: "CancelSubscriptionModal_supportSection__X771M",
                supportTitle: "CancelSubscriptionModal_supportTitle__00FoK",
                container: "CancelSubscriptionModal_container__wFqJQ",
                title: "CancelSubscriptionModal_title__mqs8F",
                "wt-text-heading-small-bold-wide": "CancelSubscriptionModal_wt-text-heading-small-bold-wide__sRpy7",
                "wt-text-heading-small-narrow": "CancelSubscriptionModal_wt-text-heading-small-narrow__mAFpT",
                "wt-text-heading-small": "CancelSubscriptionModal_wt-text-heading-small__SfD0_",
                "wt-text-heading-small-wide": "CancelSubscriptionModal_wt-text-heading-small-wide__bLI7E",
                "wt-text-heading-medium-bold": "CancelSubscriptionModal_wt-text-heading-medium-bold__lUS_w",
                "wt-text-heading-medium-bold-wide": "CancelSubscriptionModal_wt-text-heading-medium-bold-wide__JZCn1",
                "wt-text-heading-medium-semi-narrow": "CancelSubscriptionModal_wt-text-heading-medium-semi-narrow__DW8Kw",
                "wt-text-heading-medium-narrow": "CancelSubscriptionModal_wt-text-heading-medium-narrow__pp5R_",
                goodbyeSection: "CancelSubscriptionModal_goodbyeSection__bgf2e",
                goodbyeTitle: "CancelSubscriptionModal_goodbyeTitle__CAw3f",
                "wt-text-heading-medium-semi": "CancelSubscriptionModal_wt-text-heading-medium-semi__vL1zC",
                "wt-text-heading-medium-semi-wide": "CancelSubscriptionModal_wt-text-heading-medium-semi-wide___pYhV",
                "wt-text-heading-medium": "CancelSubscriptionModal_wt-text-heading-medium__rqGNL",
                "wt-text-heading-medium-wide": "CancelSubscriptionModal_wt-text-heading-medium-wide__X0sRr",
                "wt-text-heading-large-bold-narrow": "CancelSubscriptionModal_wt-text-heading-large-bold-narrow__66_rn",
                offerSection: "CancelSubscriptionModal_offerSection__WscnD",
                offerTitle: "CancelSubscriptionModal_offerTitle__51f7O",
                "wt-text-heading-large-bold": "CancelSubscriptionModal_wt-text-heading-large-bold___ozTx",
                "wt-text-heading-large-bold-wide": "CancelSubscriptionModal_wt-text-heading-large-bold-wide__LvzQj",
                "wt-text-heading-large-narrow": "CancelSubscriptionModal_wt-text-heading-large-narrow__Tp7qN",
                "wt-text-heading-large": "CancelSubscriptionModal_wt-text-heading-large__gQnP5",
                "wt-text-heading-large-wide": "CancelSubscriptionModal_wt-text-heading-large-wide___Oedg",
                "wt-text-heading-x-large-narrow": "CancelSubscriptionModal_wt-text-heading-x-large-narrow__CY4tg",
                "wt-text-heading-x-large": "CancelSubscriptionModal_wt-text-heading-x-large__LR9Ic",
                "wt-text-heading-x-large-wide": "CancelSubscriptionModal_wt-text-heading-x-large-wide__9ZhYi",
                "wt-text-heading": "CancelSubscriptionModal_wt-text-heading__tsHC5",
                "wt-body-x-small-semi": "CancelSubscriptionModal_wt-body-x-small-semi__N8Z7R",
                "wt-body-x-small": "CancelSubscriptionModal_wt-body-x-small__XUjo7",
                pauseSection: "CancelSubscriptionModal_pauseSection__3Ni9A",
                pauseText: "CancelSubscriptionModal_pauseText__eV4RZ",
                pauseDescriptionAndFeatures: "CancelSubscriptionModal_pauseDescriptionAndFeatures__dN_i8",
                pauseFeatureText: "CancelSubscriptionModal_pauseFeatureText__m_IsY",
                "wt-body-small-bold": "CancelSubscriptionModal_wt-body-small-bold__VXpQE",
                "wt-body-small-semi": "CancelSubscriptionModal_wt-body-small-semi__HIS4v",
                priceAndBannerContainer: "CancelSubscriptionModal_priceAndBannerContainer__z3nZD",
                banner: "CancelSubscriptionModal_banner__7kIUw",
                bannerText: "CancelSubscriptionModal_bannerText__6T6_i",
                "wt-body-small": "CancelSubscriptionModal_wt-body-small__Kg1g2",
                goodbyeContainer: "CancelSubscriptionModal_goodbyeContainer__SuZ_v",
                goodbyeText: "CancelSubscriptionModal_goodbyeText__gjWc1",
                pauseDescription: "CancelSubscriptionModal_pauseDescription__cl05a",
                termsText: "CancelSubscriptionModal_termsText__VCtsX",
                renewalText: "CancelSubscriptionModal_renewalText__w1lAh",
                priceInfoContainer: "CancelSubscriptionModal_priceInfoContainer__xu6Xm",
                priceLabel: "CancelSubscriptionModal_priceLabel__aNool",
                "wt-body-medium-bold": "CancelSubscriptionModal_wt-body-medium-bold__ybkT1",
                priceValue: "CancelSubscriptionModal_priceValue__jUf_i",
                priceInfoTitle: "CancelSubscriptionModal_priceInfoTitle__MouzT",
                "wt-body-medium-semi": "CancelSubscriptionModal_wt-body-medium-semi__9l2Nh",
                scrollHintContainer: "CancelSubscriptionModal_scrollHintContainer__kiUY5",
                scrollHintContent: "CancelSubscriptionModal_scrollHintContent__qTrxl",
                scrollHintText: "CancelSubscriptionModal_scrollHintText__ymRpk",
                pauseTitleAndBadge: "CancelSubscriptionModal_pauseTitleAndBadge__v8JhL",
                pauseTitle: "CancelSubscriptionModal_pauseTitle__RHA8s",
                "wt-body-medium": "CancelSubscriptionModal_wt-body-medium__K86oQ",
                supportContainer: "CancelSubscriptionModal_supportContainer__vvtsv",
                supportText: "CancelSubscriptionModal_supportText__bl3Ky",
                "wt-body-large-bold": "CancelSubscriptionModal_wt-body-large-bold__3Alnn",
                "wt-body-large": "CancelSubscriptionModal_wt-body-large__Qkcz3",
                "wt-body-x-large": "CancelSubscriptionModal_wt-body-x-large__2Teyq",
                "wt-label-x-small-bold": "CancelSubscriptionModal_wt-label-x-small-bold__E50Qb",
                "wt-label-x-small-semi": "CancelSubscriptionModal_wt-label-x-small-semi__a1aM6",
                "wt-label-x-small": "CancelSubscriptionModal_wt-label-x-small__q8klk",
                "wt-label-small-bold": "CancelSubscriptionModal_wt-label-small-bold__bdNJ6",
                "wt-label-small-semi": "CancelSubscriptionModal_wt-label-small-semi__vJZDs",
                "wt-label-small": "CancelSubscriptionModal_wt-label-small__aHXN4",
                "wt-label-medium-bold": "CancelSubscriptionModal_wt-label-medium-bold___m5J5",
                "wt-label-medium-semi": "CancelSubscriptionModal_wt-label-medium-semi__sb4Fb",
                "wt-label-medium": "CancelSubscriptionModal_wt-label-medium__NRdEO",
                "wt-label-large-bold": "CancelSubscriptionModal_wt-label-large-bold___1dGg",
                "wt-label-large-semi": "CancelSubscriptionModal_wt-label-large-semi__FlHas",
                "wt-label-large": "CancelSubscriptionModal_wt-label-large__NaJa9",
                modal: "CancelSubscriptionModal_modal__LWZVc",
                modalContent: "CancelSubscriptionModal_modalContent__MhsMA",
                scrollbarContainer: "CancelSubscriptionModal_scrollbarContainer__KmKhb",
                compliant: "CancelSubscriptionModal_compliant__sdPZi",
                closeButton: "CancelSubscriptionModal_closeButton__YG9mK",
                firstBlock: "CancelSubscriptionModal_firstBlock__Ryxsb",
                priceInfo: "CancelSubscriptionModal_priceInfo__nThzi",
                priceRow: "CancelSubscriptionModal_priceRow__bhdFJ",
                discount: "CancelSubscriptionModal_discount__1uJoE",
                actionButtons: "CancelSubscriptionModal_actionButtons__mU6w5",
                divider: "CancelSubscriptionModal_divider__sVRFn",
                badge: "CancelSubscriptionModal_badge__bFPL2",
                pauseFeatures: "CancelSubscriptionModal_pauseFeatures__YGpx7",
                pauseFeature: "CancelSubscriptionModal_pauseFeature__L7xmv",
                supportImageContainer: "CancelSubscriptionModal_supportImageContainer__Eroj0",
                supportImage: "CancelSubscriptionModal_supportImage__3XlB2",
                hidden: "CancelSubscriptionModal_hidden__ymoCu"
            }
        },
        91384: (a, e, l) => {
            "use strict";
            l.d(e, {
                V: () => s,
                d: () => c
            });
            var n = l(21462),
                i = l(38169),
                t = l(26232),
                d = l(15913),
                o = l(96644);
            let s = "apply-coupon-on-renewal",
                c = () => {
                    let {
                        currentTeam: a
                    } = (0, d.o)(), [e] = (0, t.uT)(), l = (0, i.wA)();
                    return (0, n.useCallback)(async n => {
                        if (a) try {
                            await e({
                                teamId: a.id,
                                couponCode: n
                            }).unwrap(), l(o.P9.setPanelNotification({
                                category: o.aF.Notification,
                                details: "apply_coupon_success"
                            }))
                        } catch (a) {
                            l(o.P9.setPanelNotification({
                                category: o.aF.Error,
                                details: "apply_coupon_exception"
                            }))
                        }
                    }, [a, e, l])
                }
        },
        91632: (a, e, l) => {
            "use strict";
            l.d(e, {
                $: () => n
            });
            let n = {
                confirmationDisplayed: a => ({
                    kind: "compliant_cancellation_confirmation_displayed",
                    info: {
                        type: a
                    }
                }),
                confirmationDismissed: a => ({
                    kind: "compliant_cancellation_confirmation_dismissed",
                    info: {
                        type: a
                    }
                }),
                goodbyeOfferModalDisplayed: () => ({
                    kind: "compliant_cancellation_goodbye_offer_displayed"
                }),
                goodbyeOfferModalDismissed: () => ({
                    kind: "compliant_cancellation_goodbye_offer_dismissed"
                })
            }
        },
        99823: (a, e, l) => {
            "use strict";
            l.d(e, {
                f: () => n
            });
            let n = {
                popupDisplayed: () => ({
                    kind: "cancellation_pop_up_displayed"
                }),
                getDiscountButtonClicked: () => ({
                    kind: "cancellation_pop_up_get_discount_button_clicked"
                }),
                pauseSubscriptionButtonClicked: () => ({
                    kind: "cancellation_pop_up_pause_subscription_button_clicked"
                }),
                confirmCancelButtonClicked: () => ({
                    kind: "cancellation_pop_up_confirm_cancel_button_clicked"
                }),
                popupDismissed: () => ({
                    kind: "cancellation_pop_up_dismissed"
                }),
                subscriptionCanceled: () => ({
                    kind: "subscription_canceled"
                }),
                contactSupportButtonClicked: () => ({
                    kind: "cancellation_pop_up_contact_support_button_clicked"
                })
            }
        }
    }
]);
//# sourceMappingURL=7269.9bc2e4e5a34f3c7c.js.map
