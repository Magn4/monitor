(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7252], {
        6037: (e, a, t) => {
            "use strict";
            t.d(a, {
                $S: () => o,
                Kt: () => c,
                Nq: () => g,
                RY: () => _,
                T_: () => b,
                jI: () => w
            });
            var r = t(21462),
                l = t(38169),
                i = t(53155),
                d = t(6481),
                n = t(56915),
                s = t(48585),
                m = t(6080);

            function _() {
                let [e] = (0, m.Fy)(), a = (0, l.wA)(), [t, _] = (0, r.useState)(!1);
                return {
                    updateExpiry: (0, r.useCallback)(async t => {
                        let {
                            id: r,
                            date: l,
                            requested: m
                        } = t;
                        try {
                            _(!0), await e({
                                transferId: r,
                                delete_after: l
                            }).unwrap(), m ? await a(d.A.getReceivedTransfer(r)) : await a(i.Ay.getTransfer(r)), a(n.P.setPanelNotification({
                                category: s.a.Notification,
                                details: "update_expiry_success"
                            }))
                        } catch (e) {
                            throw a(n.P.setPanelNotification({
                                category: s.a.Error,
                                details: "update_expiry_exception"
                            })), Error("UpdateTransferExpiryFailed")
                        } finally {
                            _(!1)
                        }
                    }, [e, a]),
                    isLoading: t
                }
            }

            function o() {
                let [e] = (0, m.Fy)(), a = (0, l.wA)(), [t, d] = (0, r.useState)(!1);
                return {
                    updateDisplayName: (0, r.useCallback)(async t => {
                        let {
                            id: r,
                            displayName: l
                        } = t;
                        try {
                            d(!0), await e({
                                transferId: r,
                                display_name: l
                            }).unwrap(), await a(i.Ay.getTransfer(r)), a(n.P.setPanelNotification({
                                category: s.a.Notification,
                                details: "display_name_updated"
                            }))
                        } catch (e) {
                            throw a(n.P.setPanelNotification({
                                category: s.a.Error,
                                details: "something_went_wrong"
                            })), Error("UpdateTransferDisplayNameFailed")
                        } finally {
                            d(!1)
                        }
                    }, [e, a]),
                    isLoading: t
                }
            }

            function w() {
                let [e] = (0, m.Fy)(), a = (0, l.wA)(), [t, d] = (0, r.useState)(!1);
                return {
                    updatePrice: (0, r.useCallback)(async t => {
                        let {
                            id: r,
                            price: l,
                            currency: m
                        } = t;
                        try {
                            d(!0), await e({
                                transferId: r,
                                price: l,
                                currency: m
                            }).unwrap(), await a(i.Ay.getTransfer(r)), a(n.P.setPanelNotification({
                                category: s.a.Notification,
                                details: "price_updated"
                            }))
                        } catch (e) {
                            throw a(n.P.setPanelNotification({
                                category: s.a.Error,
                                details: "price_general_error_transfer_details"
                            })), Error("UpdateTransferPriceFailed")
                        } finally {
                            d(!1)
                        }
                    }, [e, a]),
                    isLoading: t
                }
            }

            function b() {
                let [e] = (0, m.Fy)(), a = (0, l.wA)(), [t, d] = (0, r.useState)(!1);
                return {
                    updatePassword: (0, r.useCallback)(async t => {
                        let {
                            id: r,
                            password: l
                        } = t;
                        try {
                            d(!0), await e({
                                transferId: r,
                                password: l
                            }).unwrap(), await a(i.Ay.getTransfer(r)), a(n.P.setPanelNotification({
                                category: s.a.Notification,
                                details: l ? "password_changed" : "password_removed"
                            }))
                        } catch (e) {
                            throw a(n.P.setPanelNotification({
                                category: s.a.Error,
                                details: "something_went_wrong"
                            })), Error("UpdateTransferPasswordFailed")
                        } finally {
                            d(!1)
                        }
                    }, [e, a]),
                    isLoading: t
                }
            }

            function c() {
                let [e] = (0, m.Fy)(), a = (0, l.wA)(), [t, d] = (0, r.useState)(!1);
                return {
                    updateViewOption: (0, r.useCallback)(async t => {
                        let {
                            id: r,
                            viewOption: l
                        } = t;
                        try {
                            d(!0), await e({
                                transferId: r,
                                view_option: l
                            }).unwrap(), await a(i.Ay.getTransfer(r)), a(n.P.setPanelNotification({
                                category: s.a.Notification,
                                details: "view_option_updated"
                            }))
                        } catch (e) {
                            throw a(n.P.setPanelNotification({
                                category: s.a.Error,
                                details: "something_went_wrong"
                            })), Error("UpdateTransferViewOptionFailed")
                        } finally {
                            d(!1)
                        }
                    }, [e, a]),
                    isLoading: t
                }
            }

            function g() {
                let [e] = (0, m.Fy)(), a = (0, l.wA)(), [t, d] = (0, r.useState)(!1);
                return {
                    updateAllowComments: (0, r.useCallback)(async t => {
                        let {
                            id: r,
                            allowComments: l
                        } = t;
                        try {
                            d(!0), await e({
                                transferId: r,
                                allow_comments: l
                            }).unwrap(), await a(i.Ay.getTransfer(r)), a(n.P.setPanelNotification({
                                category: s.a.Notification,
                                details: "allow_comments_updated"
                            }))
                        } catch (e) {
                            throw a(n.P.setPanelNotification({
                                category: s.a.Error,
                                details: "something_went_wrong"
                            })), Error("UpdateTransferAllowCommentsFailed")
                        } finally {
                            d(!1)
                        }
                    }, [e, a]),
                    isLoading: t
                }
            }
        },
        24860: e => {
            e.exports = {
                "wt-display-heading-x-small-bold": "TeamMemberAvatar_wt-display-heading-x-small-bold__16q0M",
                "wt-display-heading-small-bold-narrow": "TeamMemberAvatar_wt-display-heading-small-bold-narrow__Kswzl",
                "wt-display-heading-small-bold": "TeamMemberAvatar_wt-display-heading-small-bold__QzBcn",
                "wt-display-heading-small-bold-wide": "TeamMemberAvatar_wt-display-heading-small-bold-wide__GKFGr",
                "wt-display-heading-small-narrow": "TeamMemberAvatar_wt-display-heading-small-narrow__RuSiZ",
                "wt-display-heading-small": "TeamMemberAvatar_wt-display-heading-small__9S7Dp",
                "wt-display-heading-small-wide": "TeamMemberAvatar_wt-display-heading-small-wide__n3_rd",
                "wt-display-heading-medium-bold-narrow": "TeamMemberAvatar_wt-display-heading-medium-bold-narrow__Q3NW6",
                "wt-display-heading-medium-bold": "TeamMemberAvatar_wt-display-heading-medium-bold__MCb1s",
                "wt-display-heading-medium-bold-wide": "TeamMemberAvatar_wt-display-heading-medium-bold-wide__Qv0da",
                "wt-display-heading-medium-narrow": "TeamMemberAvatar_wt-display-heading-medium-narrow__8csAu",
                "wt-display-heading-medium": "TeamMemberAvatar_wt-display-heading-medium__jTs8I",
                "wt-display-heading-medium-wide": "TeamMemberAvatar_wt-display-heading-medium-wide__mpODg",
                "wt-display-heading-large-bold-narrow": "TeamMemberAvatar_wt-display-heading-large-bold-narrow__Xw00a",
                "wt-display-heading-large-bold": "TeamMemberAvatar_wt-display-heading-large-bold__X5RpS",
                "wt-display-heading-large-bold-wide": "TeamMemberAvatar_wt-display-heading-large-bold-wide__fqoJs",
                "wt-display-heading-large-narrow": "TeamMemberAvatar_wt-display-heading-large-narrow__4_VDk",
                "wt-display-heading-large": "TeamMemberAvatar_wt-display-heading-large__dLthR",
                "wt-display-heading-large-wide": "TeamMemberAvatar_wt-display-heading-large-wide__HlDCY",
                "wt-display-heading": "TeamMemberAvatar_wt-display-heading__tzuDX",
                "wt-sub-heading": "TeamMemberAvatar_wt-sub-heading__3AoUY",
                "wt-text-heading-small-bold-narrow": "TeamMemberAvatar_wt-text-heading-small-bold-narrow__ijlYY",
                "wt-text-heading-small-bold": "TeamMemberAvatar_wt-text-heading-small-bold__VWWm2",
                "wt-text-heading-small-bold-wide": "TeamMemberAvatar_wt-text-heading-small-bold-wide__7j4V2",
                "wt-text-heading-small-narrow": "TeamMemberAvatar_wt-text-heading-small-narrow__hE3Wx",
                "wt-text-heading-small": "TeamMemberAvatar_wt-text-heading-small__vwToo",
                "wt-text-heading-small-wide": "TeamMemberAvatar_wt-text-heading-small-wide___K6NA",
                "wt-text-heading-medium-bold": "TeamMemberAvatar_wt-text-heading-medium-bold__9DUFT",
                "wt-text-heading-medium-bold-wide": "TeamMemberAvatar_wt-text-heading-medium-bold-wide__3Rdmi",
                "wt-text-heading-medium-semi-narrow": "TeamMemberAvatar_wt-text-heading-medium-semi-narrow__QV_VY",
                "wt-text-heading-medium-narrow": "TeamMemberAvatar_wt-text-heading-medium-narrow__falX7",
                "wt-text-heading-medium-semi": "TeamMemberAvatar_wt-text-heading-medium-semi__daUNM",
                "wt-text-heading-medium-semi-wide": "TeamMemberAvatar_wt-text-heading-medium-semi-wide__bIZM0",
                "wt-text-heading-medium": "TeamMemberAvatar_wt-text-heading-medium__cDHm7",
                "wt-text-heading-medium-wide": "TeamMemberAvatar_wt-text-heading-medium-wide__nWIIX",
                "wt-text-heading-large-bold-narrow": "TeamMemberAvatar_wt-text-heading-large-bold-narrow__ZNrXy",
                "wt-text-heading-large-bold": "TeamMemberAvatar_wt-text-heading-large-bold__ZgISE",
                "wt-text-heading-large-bold-wide": "TeamMemberAvatar_wt-text-heading-large-bold-wide__t_Gt_",
                "wt-text-heading-large-narrow": "TeamMemberAvatar_wt-text-heading-large-narrow__rNjiI",
                "wt-text-heading-large": "TeamMemberAvatar_wt-text-heading-large__19bif",
                "wt-text-heading-large-wide": "TeamMemberAvatar_wt-text-heading-large-wide__k758E",
                "wt-text-heading-x-large-narrow": "TeamMemberAvatar_wt-text-heading-x-large-narrow__uAaCP",
                "wt-text-heading-x-large": "TeamMemberAvatar_wt-text-heading-x-large___9Md8",
                "wt-text-heading-x-large-wide": "TeamMemberAvatar_wt-text-heading-x-large-wide__8iIuq",
                "wt-text-heading": "TeamMemberAvatar_wt-text-heading__PuGmA",
                "wt-body-x-small-semi": "TeamMemberAvatar_wt-body-x-small-semi___ad8s",
                "wt-body-x-small": "TeamMemberAvatar_wt-body-x-small__KBN__",
                teamMemberAvatarFromTransferList: "TeamMemberAvatar_teamMemberAvatarFromTransferList__jkbBY",
                "wt-body-small-bold": "TeamMemberAvatar_wt-body-small-bold__yytug",
                teamMemberAvatarInitials: "TeamMemberAvatar_teamMemberAvatarInitials__LyC2O",
                "wt-body-small-semi": "TeamMemberAvatar_wt-body-small-semi__CDqZJ",
                "wt-body-small": "TeamMemberAvatar_wt-body-small__BBFU5",
                "wt-body-medium-bold": "TeamMemberAvatar_wt-body-medium-bold__7GPMo",
                "wt-body-medium-semi": "TeamMemberAvatar_wt-body-medium-semi__l243t",
                "wt-body-medium": "TeamMemberAvatar_wt-body-medium__1_bks",
                "wt-body-large-bold": "TeamMemberAvatar_wt-body-large-bold__rOKK9",
                "wt-body-large": "TeamMemberAvatar_wt-body-large__ZoYK2",
                "wt-body-x-large": "TeamMemberAvatar_wt-body-x-large__kC7Mp",
                "wt-label-x-small-bold": "TeamMemberAvatar_wt-label-x-small-bold__33f6k",
                "wt-label-x-small-semi": "TeamMemberAvatar_wt-label-x-small-semi__5BOMq",
                "wt-label-x-small": "TeamMemberAvatar_wt-label-x-small__fS4TA",
                "wt-label-small-bold": "TeamMemberAvatar_wt-label-small-bold__6_Nh9",
                "wt-label-small-semi": "TeamMemberAvatar_wt-label-small-semi__Kp2kT",
                "wt-label-small": "TeamMemberAvatar_wt-label-small__nxd5F",
                "wt-label-medium-bold": "TeamMemberAvatar_wt-label-medium-bold__QxaKG",
                "wt-label-medium-semi": "TeamMemberAvatar_wt-label-medium-semi__sJSVr",
                "wt-label-medium": "TeamMemberAvatar_wt-label-medium__WcBy2",
                "wt-label-large-bold": "TeamMemberAvatar_wt-label-large-bold__dowNz",
                "wt-label-large-semi": "TeamMemberAvatar_wt-label-large-semi__P20H_",
                "wt-label-large": "TeamMemberAvatar_wt-label-large__jsDKw",
                teamMemberAvatar: "TeamMemberAvatar_teamMemberAvatar__Rtwh5"
            }
        },
        25418: (e, a, t) => {
            "use strict";
            t.d(a, {
                r: () => r
            });
            var r = function(e) {
                return e.TRANSFER_LIST = "TRANSFER_LIST", e.TRANSFER_DETAILS = "TRANSFER_DETAILS", e
            }({})
        },
        32410: e => {
            e.exports = {
                recoverButton: "RecoverTransferButton_recoverButton__Lv7Z6"
            }
        },
        35302: (e, a, t) => {
            "use strict";
            t.d(a, {
                n: () => o
            });
            var r = t(23798),
                l = t(46001),
                i = t.n(l),
                d = t(21462),
                n = t(57549),
                s = t(15913),
                m = t(24860),
                _ = t.n(m);
            let o = e => {
                var a, t, l, m;
                let o, {
                        member: w,
                        transferFrom: b,
                        transferCreator: c,
                        fromTransferList: g = !1
                    } = e,
                    u = !w,
                    {
                        currentTeam: v,
                        getUserIndexByEmail: A
                    } = (0, s.o)(),
                    h = (0, d.useMemo)(() => w || b ? w ? w.user.familyName ? "".concat(w.user.givenName.charAt(0)).concat(w.user.familyName.charAt(0)) : "".concat(w.user.givenName.substring(0, 2)) : "".concat(null == b ? void 0 : b.substring(0, 2).toUpperCase()) : "".concat(null == c ? void 0 : c.email.substring(0, 2).toUpperCase()), [w, b, null == c ? void 0 : c.email]);
                if (u) return null;
                if (null == w || null == (a = w.user.profilePicture) ? void 0 : a.imageUrl) {
                    let e = (null == (t = w.user) ? void 0 : t.familyName) ? "".concat(w.user.givenName, " ").concat(null == (l = w.user) ? void 0 : l.familyName, " avatar") : "".concat(w.user.givenName, " avatar");
                    return (0, r.jsx)("img", {
                        src: w.user.profilePicture.imageUrl,
                        alt: e,
                        title: e,
                        className: i()(_().teamMemberAvatar, {
                            [_().teamMemberAvatarFromTransferList]: g
                        })
                    })
                }
                if (v) {
                    let e = (null == w || null == (m = w.user) ? void 0 : m.email) || (null == c ? void 0 : c.email),
                        a = e ? A(e) : void 0;
                    o = void 0 !== a ? (0, n.is)(a) : void 0
                }
                return (0, r.jsx)("div", {
                    className: i()(_().teamMemberAvatar, _().teamMemberAvatarInitials, {
                        [_().teamMemberAvatarFromTransferList]: g
                    }),
                    style: o ? {
                        backgroundColor: o.backgroundColor,
                        color: o.fontColor
                    } : void 0,
                    children: h
                })
            }
        },
        37254: (e, a, t) => {
            "use strict";
            t.d(a, {
                w: () => o
            });
            var r = t(23798),
                l = t(75546),
                i = t(97116),
                d = t(85633),
                n = t(81507),
                s = t(32410),
                m = t.n(s),
                _ = t(41999);
            let o = e => {
                let {
                    recoverLocation: a,
                    transferId: t,
                    transferShortUrl: s,
                    transferGroup: o
                } = e, {
                    t: w
                } = (0, l.Bd)(), b = (0, n.Z)(), {
                    onRecoverTransfer: c
                } = (0, _.N)({
                    recoverLocation: a,
                    transferId: t,
                    transferShortUrl: s,
                    transferGroup: o,
                    isRecoveryAvailableOnUserPlan: b
                });
                return (0, r.jsxs)(i.$, {
                    variation: b ? void 0 : "upsell",
                    size: "small",
                    onClick: c,
                    className: m().recoverButton,
                    children: [(0, r.jsx)(d.DmQ, {
                        size: "small"
                    }), w("account.workspace.transfers.transferListItem.actions.recover")]
                })
            }
        },
        39252: (e, a, t) => {
            "use strict";
            t.d(a, {
                Ge: () => d,
                Q1: () => i,
                _X: () => n
            });
            var r = t(21462),
                l = t(96773);
            let i = e => {
                    (0, r.useEffect)(() => {
                        let a = document.querySelector(".panel__back"),
                            t = () => {
                                l.Ay.trackSnowplowEvent({
                                    category: "navigation",
                                    action: "back_to_transfers",
                                    label: "".concat(e, "_transfers_page")
                                })
                            };
                        return null == a || a.addEventListener("click", t), () => {
                            null == a || a.removeEventListener("click", t)
                        }
                    }, [e])
                },
                d = e => {
                    let {
                        isSearchValueValid: a,
                        transferGroup: t
                    } = e;
                    l.Ay.trackSnowplowEvent({
                        category: "navigation",
                        action: "transfer_card_clicked",
                        label: a ? "".concat(t, "_transfers_search_results") : "".concat(t, "_transfers_page")
                    })
                },
                n = e => {
                    l.Ay.trackSnowplowEvent({
                        category: "navigation",
                        action: "".concat(e, "_transfers_tab"),
                        label: "".concat("received" === e ? "sent" : "received", "_transfers_page")
                    })
                }
        },
        41999: (e, a, t) => {
            "use strict";
            t.d(a, {
                N: () => u
            });
            var r = t(21462),
                l = t(38169),
                i = t(87963),
                d = t(82830),
                n = t(89187),
                s = t(88848),
                m = t(7686),
                _ = t(97364),
                o = t(93853),
                w = t(12808),
                b = t(30631),
                c = t(86781),
                g = t(25418);
            let u = e => {
                let {
                    recoverLocation: a,
                    transferId: t,
                    transferShortUrl: u,
                    transferGroup: v,
                    isRecoveryAvailableOnUserPlan: A
                } = e, h = (0, l.wA)(), p = (0, l.d4)(c.R2), y = (0, w.$G)(), f = (0, o.v)(), {
                    canSeeFreeTrials: T
                } = (0, _.Kd)(), M = (0, r.useCallback)(() => {
                    (0, i.Od)().trackUserAction(d.p.subscribeClicked({
                        transferPublicId: t
                    }));
                    let e = m.Ay.createCheckoutRoute({
                        tier: n.js.ULTIMATE,
                        billingPeriod: y,
                        coupon: f,
                        requestFreeTrial: T,
                        requestWeeklies: y === n.CS.WEEKLY,
                        paywallOverride: a === g.r.TRANSFER_LIST ? s.pU.TRANSFER_RECOVERY_DOWNLOAD_TRANSFER_LIST : s.pU.TRANSFER_RECOVERY_DOWNLOAD_TRANSFER_DETAILS
                    });
                    window.location.href = e
                }, [T, y, f, t, a]);
                return {
                    onRecoverTransfer: (0, r.useCallback)(e => {
                        if (null == e || e.preventDefault(), null == e || e.stopPropagation(), (0, i.Od)().trackUserAction(a === g.r.TRANSFER_LIST ? d.p.recoverClickedTransferList({
                                transferPublicId: t,
                                isRecoveryAvailableOnUserPlan: A,
                                transferGroup: v
                            }) : d.p.recoverClickedTransferDetails({
                                transferPublicId: t,
                                isRecoveryAvailableOnUserPlan: A,
                                transferGroup: v
                            })), A || b.Ay.isMobile && p === n.js.STARTER) window.location.href = u || "";
                        else {
                            let e = a === g.r.TRANSFER_LIST ? s.vW.RECOVER_EXPIRED_TRANSFER_TRANFER_LIST : s.vW.RECOVER_EXPIRED_TRANSFER_TRANSFER_DETAILS;
                            h((0, s.jt)(e)), h((0, s.UK)(s.pU.CTA)), M()
                        }
                    }, [t, u, A, v, h, p, M, a])
                }
            }
        },
        73888: (e, a, t) => {
            "use strict";
            t.d(a, {
                M: () => r
            });
            let r = {
                expiryDateChanged(e) {
                    let {
                        transferId: a,
                        expiryDate: t
                    } = e;
                    return {
                        kind: "transfer_details_expiry_date_changed",
                        info: {
                            transferId: a,
                            expiryDate: t
                        }
                    }
                },
                displayNameChanged(e) {
                    let {
                        transferId: a
                    } = e;
                    return {
                        kind: "transfer_details_display_name_changed",
                        info: {
                            transferId: a
                        }
                    }
                },
                transferDeleted(e) {
                    let {
                        transferId: a
                    } = e;
                    return {
                        kind: "transfer_details_transfer_deleted",
                        info: {
                            transferId: a
                        }
                    }
                },
                listItemClick(e) {
                    let {
                        transferId: a,
                        transferGroup: t
                    } = e;
                    return {
                        kind: "transfer_details_list_item_clicked",
                        info: {
                            transferId: a,
                            transferGroup: t
                        }
                    }
                },
                forwardRequested(e) {
                    let {
                        transferId: a
                    } = e;
                    return {
                        kind: "transfer_details_forward_requested",
                        info: {
                            transferId: a
                        }
                    }
                },
                navigateToPreview(e) {
                    let {
                        transferId: a,
                        isExpired: t
                    } = e;
                    return {
                        kind: "transfer_details_navigate_to_preview_clicked",
                        info: {
                            transferId: a,
                            isExpired: t
                        }
                    }
                },
                previewFileClicked(e) {
                    let {
                        transferId: a,
                        fileId: t
                    } = e;
                    return {
                        kind: "transfer_details_preview_file_clicked",
                        info: {
                            transferId: a,
                            fileId: t
                        }
                    }
                },
                viewOptionChanged(e) {
                    let {
                        transferId: a,
                        viewOption: t
                    } = e;
                    return {
                        kind: "transfer_details_view_option_changed",
                        info: {
                            transferId: a,
                            viewOption: t
                        }
                    }
                },
                passwordAdded(e) {
                    let {
                        transferId: a
                    } = e;
                    return {
                        kind: "transfer_details_password_added",
                        info: {
                            transferId: a
                        }
                    }
                },
                passwordChanged(e) {
                    let {
                        transferId: a
                    } = e;
                    return {
                        kind: "transfer_details_password_changed",
                        info: {
                            transferId: a
                        }
                    }
                },
                passwordDeleted(e) {
                    let {
                        transferId: a
                    } = e;
                    return {
                        kind: "transfer_details_password_deleted",
                        info: {
                            transferId: a
                        }
                    }
                },
                backgroundDeleted(e) {
                    let {
                        transferId: a
                    } = e;
                    return {
                        kind: "transfer_details_background_deleted",
                        info: {
                            transferId: a
                        }
                    }
                },
                priceAdded(e) {
                    let {
                        transferId: a,
                        price: t
                    } = e;
                    return {
                        kind: "transfer_details_price_added",
                        info: {
                            transferId: a,
                            price: t
                        }
                    }
                },
                priceChanged(e) {
                    let {
                        transferId: a,
                        price: t
                    } = e;
                    return {
                        kind: "transfer_details_price_changed",
                        info: {
                            transferId: a,
                            price: t
                        }
                    }
                },
                priceDeleted(e) {
                    let {
                        transferId: a
                    } = e;
                    return {
                        kind: "transfer_details_price_deleted",
                        info: {
                            transferId: a
                        }
                    }
                },
                allowCommentsChanged(e) {
                    let {
                        transferId: a,
                        allowComments: t
                    } = e;
                    return {
                        kind: "transfer_details_allow_comments_changed",
                        info: {
                            transferPublicId: a,
                            allowComments: t
                        }
                    }
                }
            }
        },
        80714: (e, a, t) => {
            "use strict";
            t.d(a, {
                H: () => w
            });
            var r = t(21462),
                l = t(38169),
                i = t(89395),
                d = t(61670),
                n = t(9198),
                s = t(24870),
                m = t(2269),
                _ = t(15168),
                o = t(68505);
            let w = () => {
                let e = (0, l.wA)(),
                    a = (0, l.d4)(_.HM),
                    t = (0, l.d4)(_.lv),
                    w = (0, r.useCallback)(async t => {
                        if (!t) return Promise.resolve();
                        let r = async () => {
                            var r;
                            let l = null == a ? void 0 : a[t],
                                _ = null == l || null == (r = l.background) ? void 0 : r.assetId;
                            l && await (0, d.C$)(t).then(a => {
                                (0, n.CR)(a) || e((0, m.VM)(t))
                            }).catch(e => {
                                o.A.track(e)
                            }), _ && await (0, i.AO)({
                                assetId: _
                            }).then(a => {
                                (0, n.CR)(a) || e((0, m.Vx)(t))
                            }).catch(e => {
                                o.A.track(e)
                            }), e((0, m.fG)(s.dL))
                        };
                        await r()
                    }, [a, e, t]),
                    b = (0, r.useCallback)(async e => {
                        0 !== e.length && await Promise.all(e.map(e => w(e)))
                    }, [w]);
                return {
                    deleteTransferCustomization: w,
                    batchDeleteTransferCustomizations: b
                }
            }
        }
    }
]);
//# sourceMappingURL=7252.b99af3adb62a6e1d.js.map
