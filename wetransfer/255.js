(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8716], {
        95: (e, l, t) => {
            "use strict";
            t.d(l, {
                Md: () => d,
                PI: () => _,
                VX: () => o,
                dT: () => a,
                n1: () => c
            });
            let a = t(10861).l.injectEndpoints({
                    endpoints: e => ({
                        getOwnEntitlements: e.query({
                            providesTags: ["Entitlements"],
                            query: e => {
                                let {
                                    entitlementCodes: l
                                } = e;
                                return {
                                    url: "entitlements/workspaces/own",
                                    method: "GET",
                                    requiresAuth: !0,
                                    params: {
                                        entitlementCodes: l
                                    }
                                }
                            }
                        }),
                        getWorkspaceEntitlements: e.query({
                            providesTags: ["Entitlements"],
                            query: e => {
                                let {
                                    workspaceId: l,
                                    entitlements: t
                                } = e;
                                return {
                                    url: "entitlements/workspaces/".concat(l),
                                    method: "GET",
                                    requiresAuth: !0,
                                    params: {
                                        entitlements: t
                                    }
                                }
                            }
                        }),
                        getAnonymousEntitlements: e.query({
                            query: e => {
                                let {
                                    entitlementCodes: l
                                } = e;
                                return {
                                    url: "entitlements/anonymous",
                                    method: "GET",
                                    params: {
                                        entitlementCodes: l
                                    }
                                }
                            }
                        }),
                        getChannelEntitlements: e.query({
                            query: e => {
                                let {
                                    channelName: l,
                                    entitlements: t
                                } = e;
                                return {
                                    url: "entitlements/channels/".concat(l),
                                    method: "GET",
                                    params: {
                                        entitlements: t
                                    }
                                }
                            }
                        })
                    })
                }),
                {
                    useLazyGetOwnEntitlementsQuery: i,
                    useLazyGetWorkspaceEntitlementsQuery: r,
                    useLazyGetAnonymousEntitlementsQuery: n,
                    useLazyGetChannelEntitlementsQuery: s,
                    useGetOwnEntitlementsQuery: d,
                    useGetWorkspaceEntitlementsQuery: o,
                    useGetAnonymousEntitlementsQuery: _,
                    useGetChannelEntitlementsQuery: c
                } = a
        },
        494: (e, l, t) => {
            "use strict";
            t.d(l, {
                aD: () => f,
                dB: () => y,
                z1: () => x
            });
            var a = t(21462),
                i = t(38169),
                r = t(32976),
                n = t(15566),
                s = t(55851),
                d = t(93052),
                o = t(46616),
                _ = t(20776),
                c = t(42599),
                u = t(30631),
                w = t(62760),
                m = t(72546),
                p = t(10694),
                g = t(15539);
            let h = "auto_applied_expiry_displayed",
                y = () => "true" === localStorage.getItem(h),
                x = () => {
                    let e = (0, i.wA)(),
                        l = (0, a.useCallback)(() => {
                            e((0, _.PG)("hidden")), localStorage.setItem(h, "true")
                        }, [e]);
                    return {
                        shouldShowAutoExpiryTooltip: "displayed" === (0, i.d4)(c.vb),
                        hideAutoExpiryTooltip: l
                    }
                },
                f = () => {
                    let {
                        settings: e
                    } = (0, w.k)(), {
                        isLimitReached: l
                    } = (0, r.i)(), t = (0, n.bV)(), c = u.Ay.isMobile, x = (0, d.q)(), f = (0, o.kC)(), v = (0, o.QR)(), b = (0, i.d4)(m.Kj), L = (0, i.d4)(g.nn), E = (0, i.wA)(), S = (0, a.useMemo)(() => x, [x]), C = !e.disable_gb_limits && (f || l(L)), A = !e.disable_transfer_numbers_limits && v, P = (0, a.useCallback)(() => (c && localStorage.setItem(h, "true"), !S && "tooltip_and_popup_every_time" === e.one_day_expiry_free_transfer_kind && (b.expiry === s.i.ONE_DAY_IN_SECONDS ? ((A || C) && (E((0, _.jW)()), E((0, _.f2)("displayed"))), !1) : C || A || !(L > 0) ? !y() && (!!C || !!A) && (E((0, _.PG)("displayed")), E((0, _.f2)("displayed")), !0) : (localStorage.removeItem(h), !1))), [S, e.one_day_expiry_free_transfer_kind, b.expiry, C, A, E, c, L]), T = (0, a.useCallback)(() => b.state === p.r.INIT && P(), [P, b.state]), k = (0, a.useCallback)(() => !!t && P(), [P, t]);
                    switch (e.softer_limits_tooltip_behaviour) {
                        case "on_limit_hit":
                            return {
                                shouldShowAutoExpiryTooltipOnAppearance: () => !1, shouldShowAutoExpiryTooltipOnLimitHit: k
                            };
                        case "on_appearance":
                            return {
                                shouldShowAutoExpiryTooltipOnAppearance: T, shouldShowAutoExpiryTooltipOnLimitHit: () => !1
                            }
                    }
                }
        },
        915: (e, l, t) => {
            "use strict";
            t.d(l, {
                Se: () => n,
                Z7: () => i,
                ZR: () => r,
                y: () => s
            });
            var a = t(4559);
            let i = e => e.layout,
                r = (0, a.Mz)(i, e => e.hidden);
            (0, a.Mz)(i, e => e.actionbarVisible), (0, a.Mz)(i, e => e.dropzoneActive);
            let n = (0, a.Mz)(i, e => e.transferBox),
                s = (0, a.Mz)(i, e => e.isResumeUploadModalOpen)
        },
        1150: (e, l, t) => {
            "use strict";
            t.d(l, {
                $: () => P,
                n: () => A
            });
            var a = t(23798),
                i = t(53526),
                r = t.n(i),
                n = t(21462),
                s = t(38169),
                d = t(33665),
                o = t(76849),
                _ = t(55851),
                c = t(89795),
                u = t(82667),
                w = t(68499),
                m = t(15913),
                p = t(36755),
                g = t(62760),
                h = t(63306),
                y = t(53155),
                x = t(86781),
                f = t(72546),
                v = t(78644),
                b = t(10694),
                L = t(92491),
                E = t(88797),
                S = t(15539);
            let C = (0, n.createContext)(void 0),
                A = e => {
                    var l;
                    let {
                        children: t
                    } = e, i = (0, s.wA)(), A = (0, s.d4)(f.Kj), P = (0, p.$)(), T = (0, s.d4)(S.nn), k = (0, s.d4)(v.fO), R = (0, s.d4)(x.JV), I = (0, w.l)(), j = (0, d.wE)(), {
                        settings: {
                            passwordless_anticipated_upload_enabled: M,
                            anonymous_login_step_enabled: O,
                            is_anticipated_upload_disabled: N
                        }
                    } = (0, g.k)(), [F, U] = (0, n.useState)(() => r()), D = (0, n.useCallback)(e => {
                        U(() => e)
                    }, [U]), {
                        currentTeam: z
                    } = (0, m.o)(), {
                        data: W
                    } = (0, o.DX)({
                        teamId: (null == z ? void 0 : z.id) || ""
                    }, {
                        skip: !(null == z ? void 0 : z.id)
                    }), B = (R || M || O) && !A.parent_id && !A.resumeUploadInProgress && !P && !(null == W ? void 0 : W.length) && !I && !N, [H, V] = (0, n.useState)(!1), [Z, q] = (0, n.useState)(null), G = (0, n.useCallback)(() => {
                        q({
                            displayName: A.displayName,
                            message: A.message,
                            expiry: A.expiry,
                            isRecoverable: A.isRecoverable,
                            password: A.password,
                            accessControl: A.downloaderEmailVerification,
                            price: A.price ? {
                                amount: A.price.amount,
                                currency: A.price.currency
                            } : void 0,
                            viewOption: A.viewOption
                        })
                    }, [A]), K = (0, n.useCallback)(async () => {
                        V(!1), F(), q(null), (0, E.R0)(), A.id && (await i(E.wM(A, !0)), await i(E.tr()), k && i((0, c.wX)(!0)))
                    }, [i, k, A, F]), Y = (0, n.useCallback)(async () => {
                        var e, l, t, a;
                        let r = {},
                            n = !1;
                        if (A.displayName !== (null == Z ? void 0 : Z.displayName) && (r.displayName = A.displayName, n = !0), A.message !== (null == Z ? void 0 : Z.message) && (r.message = A.message, n = !0), A.expiry !== (null == Z ? void 0 : Z.expiry)) {
                            let e = A.uploadStartedAt ? new Date(A.uploadStartedAt) : new Date,
                                l = null;
                            void 0 !== A.expiry && (null === A.expiry ? l = null : (l = new Date(e.setSeconds(e.getSeconds() + A.expiry - _.i.ONE_MINUTE_IN_SECONDS)).toISOString(), r.extendedExpiryDate = (0, u.f)({
                                transferExpiry: A.expiry,
                                currentSize: T,
                                isRecoverable: A.isRecoverable
                            }))), r.expiry = l, n = !0
                        }
                        A.password !== (null == Z ? void 0 : Z.password) && (r.password = A.password || "", n = !0), A.isRecoverable !== (null == Z ? void 0 : Z.isRecoverable) && A.expiry && (r.extendedExpiryDate = (0, u.f)({
                            transferExpiry: A.expiry,
                            currentSize: T,
                            isRecoverable: A.isRecoverable
                        }), n = !0), A.downloaderEmailVerification !== (null == Z ? void 0 : Z.accessControl) && (r.accessControl = A.downloaderEmailVerification, n = !0), (null == (e = A.price) ? void 0 : e.amount) !== (null == Z || null == (l = Z.price) ? void 0 : l.amount) && ((null == (t = A.price) ? void 0 : t.amount) !== void 0 && (r.price = A.price.amount), (null == (a = A.price) ? void 0 : a.currency) !== void 0 && (r.currency = A.price.currency), n = !0), A.viewOption === (null == Z ? void 0 : Z.viewOption) || j || (r.viewOption = A.viewOption, n = !0), (0, L.i)(A) && (r.extendedExpiryDate = null, n = !0, (null === A.expiry || A.expiry && A.expiry > _.i.DAYS_60_IN_SECONDS) && (r.expiry = new Date(new Date().setSeconds(_.i.DAYS_60_IN_SECONDS)).toISOString())), n && await i(y.Ay.updateTransferDetails({
                            id: A.id,
                            updateParams: r
                        }))
                    }, [A, null == Z ? void 0 : Z.displayName, null == Z ? void 0 : Z.message, null == Z ? void 0 : Z.expiry, null == Z ? void 0 : Z.password, null == Z ? void 0 : Z.isRecoverable, null == Z ? void 0 : Z.accessControl, null == Z || null == (l = Z.price) ? void 0 : l.amount, null == Z ? void 0 : Z.viewOption, j, T, i]), J = (0, n.useCallback)(async () => {
                        if (i(h.Ay.setState(b.r.STARTED)), i(h.Ay.setUploadPending()), (0, E.y9)(!0), A.id) try {
                            await Y()
                        } catch (e) {}
                        await new Promise(e => setTimeout(e, 1500)), (0, E.$5)()
                    }, [i, A, Y]);
                    return (0, n.useEffect)(() => {
                        A.state === b.r.FINISHED && (V(!1), q(null), (0, E.y9)(!1))
                    }, [A.state]), (0, n.useEffect)(() => {
                        let e = async () => {
                            await K(), await i(h.Ay.setState(b.r.INIT))
                        };
                        A.state === b.r.ANTICIPATED_UPLOAD_FAILED && e()
                    }, [A.state, i, K]), (0, a.jsx)(C.Provider, {
                        value: {
                            isEnabled: B,
                            isAnticipatedUploadStarted: H,
                            setIsAnticipatedUploadStarted: V,
                            resetAnticipatedUpload: K,
                            finalizeAnticipatedUpload: J,
                            saveTransferValues: G,
                            setResetTransferInitialized: D
                        },
                        children: t
                    })
                };

            function P() {
                let e = (0, n.useContext)(C);
                if (void 0 === e) throw Error("useAnticipatedUpload must be used within an AnticipatedUploadProvider");
                return e
            }
        },
        2749: (e, l, t) => {
            "use strict";
            t.d(l, {
                jn: () => L,
                CL: () => n,
                VO: () => T,
                el: () => E,
                SU: () => C
            });
            var a = t(582),
                i = t.n(a),
                r = t(30631);
            let n = async e => {
                let l = navigator.connection,
                    t = await Promise.race([new Promise(e => {
                        try {
                            var l, t;
                            e(null == (l = (t = navigator).getBattery) ? void 0 : l.call(t))
                        } catch (l) {
                            e(void 0)
                        }
                    }), new Promise(e => setTimeout(() => e(void 0), 25))]),
                    a = t ? {
                        level: t.level,
                        isCharging: t.charging
                    } : void 0,
                    n = r.Ay.isMobile ? "mobile" : r.Ay.isTablet ? "tablet" : "desktop",
                    s = i()(window.navigator.userAgent),
                    {
                        city: d,
                        country: o,
                        subdivision: _
                    } = e;
                return {
                    device: {
                        type: n,
                        os: s.os.name,
                        osVersion: s.os.version,
                        browser: s.browser.name,
                        browserVersion: s.browser.version,
                        languages: Array.from(navigator.languages)
                    },
                    battery: a,
                    location: {
                        city: d,
                        countryCode: o,
                        subdivision: _
                    },
                    localTime: {
                        weekdayFromSunday: new Date().getDay(),
                        hours: new Date().getHours(),
                        minutes: new Date().getMinutes(),
                        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
                    },
                    connection: l ? {
                        effectiveType: l.effectiveType,
                        downlinkMbps: l.downlink,
                        rttMs: l.rtt,
                        isDataSaverEnabled: l.saveData,
                        type: l.type
                    } : void 0,
                    screen: {
                        widthPx: window.screen.width,
                        heightPx: window.screen.height,
                        pixelDepth: window.screen.pixelDepth,
                        isExtended: window.screen.isExtended,
                        orientation: window.screen.orientation.type.split("-")[0]
                    },
                    window: {
                        widthPx: window.innerWidth,
                        heightPx: window.innerHeight,
                        zoom: window.outerWidth / window.innerWidth
                    }
                }
            };
            var s = t(87563),
                d = t(32693),
                o = t(33187);
            let _ = (e, l, t) => e ? l(e) : t,
                c = e => _(e, e => Number(e.isFreeTrialAvailable), -1),
                u = e => _(e, e => Number(e.isDefault), -1),
                w = e => _(e, e => {
                    var l;
                    return null != (l = e.amountPerSeat) ? l : -1
                }, -1),
                m = e => _(e, e => e.billingPeriod.toString(), ""),
                p = e => _(e, e => {
                    var l, t;
                    return null != (t = null == (l = e.currency) ? void 0 : l.toString()) ? t : ""
                }, ""),
                g = e => _(e, e => e.tier.toString(), ""),
                h = e => _(e, e => {
                    if ("file" === e.itemType) {
                        var l;
                        return null != (l = e.size) ? l : -1
                    }
                    return -1
                }, -1),
                y = e => _(e, e => {
                    if ("file" === e.itemType) {
                        var l;
                        return null != (l = e.extension) ? l : ""
                    }
                    return ""
                }, ""),
                x = e => _(e, e => {
                    var l;
                    return null != (l = e.itemType) ? l : ""
                }, ""),
                f = e => null == e ? -1 : Number(e),
                v = e => null == e || isNaN(e) ? -1 : e,
                b = e => {
                    var l;
                    return e && null != (l = e.split("-")[0]) ? l : ""
                },
                L = e => {
                    let {
                        paywallStyle: l,
                        isBlocking: t,
                        isDismissible: a,
                        availableProducts: i,
                        allowedPaymentMethods: r,
                        transferInfo: n,
                        senderInfo: _,
                        contextInfo: L,
                        picoUserInfo: E,
                        userEmail: S
                    } = e;
                    return {
                        style: l,
                        is_blocking: f(t),
                        is_dismissible: f(a),
                        ...(e => {
                            let l = l => Number(e.includes(l));
                            return {
                                payment_methods_available_card: l(s.l.CARD),
                                payment_methods_available_paypal: l(s.l.PAYPAL),
                                payment_methods_available_link: l(s.l.LINK),
                                payment_methods_available_ideal: l(s.l.IDEAL)
                            }
                        })(r),
                        ...(e => ({
                            paywall_info_products_displayed_is_free_trial_available_0: c(e[0]),
                            paywall_info_products_displayed_is_free_trial_available_1: c(e[1]),
                            paywall_info_products_displayed_is_free_trial_available_2: c(e[2]),
                            paywall_info_products_displayed_is_free_trial_available_3: c(e[3]),
                            paywall_info_products_displayed_is_default_0: u(e[0]),
                            paywall_info_products_displayed_is_default_1: u(e[1]),
                            paywall_info_products_displayed_is_default_2: u(e[2]),
                            paywall_info_products_displayed_is_default_3: u(e[3]),
                            paywall_info_products_displayed_amount_per_seat_0: w(e[0]),
                            paywall_info_products_displayed_amount_per_seat_1: w(e[1]),
                            paywall_info_products_displayed_amount_per_seat_2: w(e[2]),
                            paywall_info_products_displayed_amount_per_seat_3: w(e[3]),
                            paywall_info_products_displayed_billing_period_0: m(e[0]),
                            paywall_info_products_displayed_billing_period_1: m(e[1]),
                            paywall_info_products_displayed_billing_period_2: m(e[2]),
                            paywall_info_products_displayed_billing_period_3: m(e[3]),
                            paywall_info_products_displayed_currency_0: p(e[0]),
                            paywall_info_products_displayed_currency_1: p(e[1]),
                            paywall_info_products_displayed_currency_2: p(e[2]),
                            paywall_info_products_displayed_currency_3: p(e[3]),
                            paywall_info_products_displayed_tier_0: g(e[0]),
                            paywall_info_products_displayed_tier_1: g(e[1]),
                            paywall_info_products_displayed_tier_2: g(e[2]),
                            paywall_info_products_displayed_tier_3: g(e[3])
                        }))(i),
                        ...(e => {
                            var l, t;
                            let a = e => Number(null == e || 0 === e.length);
                            return {
                                ...(e => {
                                    var l, t, a, i, r;
                                    let n = e.filter(e => "file" === e.itemType).map(e => ({
                                            extension: e.extension,
                                            size: e.size
                                        })).reduce((e, l) => {
                                            let {
                                                extension: t,
                                                size: a
                                            } = l;
                                            return e[t] ? e[t] = {
                                                count: e[t].count + 1,
                                                size: e[t].size + a
                                            } : e[t] = {
                                                count: 1,
                                                size: a
                                            }, e
                                        }, {}),
                                        s = e && e.length > 0 ? Object.keys(n).length : -1,
                                        {
                                            mostCommonExtension: d,
                                            leastCommonExtension: o
                                        } = (e => {
                                            var l, t, a, i;
                                            let r = Object.entries(e).map(e => {
                                                let [l, t] = e;
                                                return {
                                                    extension: l,
                                                    count: t.count,
                                                    size: t.size
                                                }
                                            });
                                            return 0 === r.length ? {
                                                mostCommonExtension: "",
                                                leastCommonExtension: ""
                                            } : {
                                                mostCommonExtension: null != (a = null == (l = [...r].sort((e, l) => l.count !== e.count ? l.count - e.count : l.size !== e.size ? l.size - e.size : l.extension.localeCompare(e.extension))[0]) ? void 0 : l.extension) ? a : "",
                                                leastCommonExtension: null != (i = null == (t = [...r].sort((e, l) => e.count !== l.count ? e.count - l.count : e.size !== l.size ? e.size - l.size : e.extension.localeCompare(l.extension))[0]) ? void 0 : t.extension) ? i : ""
                                            }
                                        })(n),
                                        _ = e.filter(e => "file" === e.itemType).sort((e, l) => l.size - e.size)[0],
                                        c = e.filter(e => "file" === e.itemType).sort((e, l) => e.size - l.size)[0],
                                        u = e.filter(e => "file" === e.itemType).map(e => e.size).sort((e, l) => e - l),
                                        w = u.length > 0 ? u.reduce((e, l) => e + l, 0) : void 0,
                                        m = u[Math.floor((u.length - 1) / 2)];
                                    return {
                                        transfer_info_items_size_0: h(e[0]),
                                        transfer_info_items_size_1: h(e[1]),
                                        transfer_info_items_size_2: h(e[2]),
                                        transfer_info_items_size_3: h(e[3]),
                                        transfer_info_items_size_4: h(e[4]),
                                        transfer_info_items_size_5: h(e[5]),
                                        transfer_info_items_size_6: h(e[6]),
                                        transfer_info_items_size_7: h(e[7]),
                                        transfer_info_items_size_8: h(e[8]),
                                        transfer_info_items_size_9: h(e[9]),
                                        transfer_info_items_extension_0: y(e[0]),
                                        transfer_info_items_extension_1: y(e[1]),
                                        transfer_info_items_extension_2: y(e[2]),
                                        transfer_info_items_extension_3: y(e[3]),
                                        transfer_info_items_extension_4: y(e[4]),
                                        transfer_info_items_extension_5: y(e[5]),
                                        transfer_info_items_extension_6: y(e[6]),
                                        transfer_info_items_extension_7: y(e[7]),
                                        transfer_info_items_extension_8: y(e[8]),
                                        transfer_info_items_extension_9: y(e[9]),
                                        transfer_info_items_item_type_0: x(e[0]),
                                        transfer_info_items_item_type_1: x(e[1]),
                                        transfer_info_items_item_type_2: x(e[2]),
                                        transfer_info_items_item_type_3: x(e[3]),
                                        transfer_info_items_item_type_4: x(e[4]),
                                        transfer_info_items_item_type_5: x(e[5]),
                                        transfer_info_items_item_type_6: x(e[6]),
                                        transfer_info_items_item_type_7: x(e[7]),
                                        transfer_info_items_item_type_8: x(e[8]),
                                        transfer_info_items_item_type_9: x(e[9]),
                                        extension_of_largest_transfer_item: null != (l = null == _ ? void 0 : _.extension) ? l : "",
                                        extension_of_smallest_transfer_item: null != (t = null == c ? void 0 : c.extension) ? t : "",
                                        most_common_extension: null != d ? d : "",
                                        least_common_extension: null != o ? o : "",
                                        num_items: null != (a = e.length) ? a : 0,
                                        num_folders: null != (i = e.filter(e => "folder" === e.itemType).length) ? i : 0,
                                        num_files: null != (r = e.filter(e => "file" === e.itemType).length) ? r : 0,
                                        num_extensions: v(s),
                                        total_size: v(w),
                                        avg_size: v(void 0 === w ? void 0 : w / u.length),
                                        median_size: v(m),
                                        max_size: v(null == _ ? void 0 : _.size),
                                        min_size: v(null == c ? void 0 : c.size)
                                    }
                                })(null != (l = e.items) ? l : []),
                                transfer_type: null != (t = e.transferType) ? t : "",
                                transfer_has_password: f(e.transferHasPassword),
                                transfer_is_recoverable: f(e.transferIsRecoverable),
                                transfer_name_is_first_file_name: f((e => {
                                    var l, t;
                                    return !!e.transferName && !!(null == (t = e.items) || null == (l = t[0]) ? void 0 : l.name) && e.transferName.normalize("NFC") === e.items[0].name.normalize("NFC")
                                })(e)),
                                transfer_message_is_null: a(e.transferMessage),
                                char_length_transfer_message: (e => e ? [...e].length : 0)(e.transferMessage),
                                sender_email_is_null: a(e.senderEmail),
                                recipient_emails_is_null: a(e.recipientEmails)
                            }
                        })(n),
                        ...(e => ({
                            account_creation_date: e.accountCreationDate ? Math.floor(new Date(e.accountCreationDate).getTime() / 1e3) : -1
                        }))(_),
                        ...(e => {
                            var l, t, a, i, r, n, s, d, o, _, c, u, w, m, p, g, h, y, x, L, E, S, C, A, P, T, k, R, I, j, M, O, N, F, U, D, z;
                            return {
                                context_battery_level: v(null == e || null == (l = e.battery) ? void 0 : l.level),
                                context_battery_is_charging: f(null == e || null == (t = e.battery) ? void 0 : t.isCharging),
                                context_local_time_weekday: v(null == e || null == (a = e.localTime) ? void 0 : a.weekdayFromSunday),
                                context_local_time_hours: v(null == e || null == (i = e.localTime) ? void 0 : i.hours),
                                context_local_time_minutes: v(null == e || null == (r = e.localTime) ? void 0 : r.minutes),
                                context_screen_width_px: v(null == e || null == (n = e.screen) ? void 0 : n.widthPx),
                                context_screen_height_px: v(null == e || null == (s = e.screen) ? void 0 : s.heightPx),
                                context_screen_pixel_depth: v(null == e || null == (d = e.screen) ? void 0 : d.pixelDepth),
                                context_screen_is_extended: f(null == e || null == (o = e.screen) ? void 0 : o.isExtended),
                                context_window_width_px: v(null == e || null == (_ = e.window) ? void 0 : _.widthPx),
                                context_window_height_px: v(null == e || null == (c = e.window) ? void 0 : c.heightPx),
                                context_window_zoom: v(null == e || null == (u = e.window) ? void 0 : u.zoom),
                                context_device_type: null != (R = null == e || null == (w = e.device) ? void 0 : w.type) ? R : "",
                                context_device_os: null != (I = null == e || null == (m = e.device) ? void 0 : m.os) ? I : "",
                                context_device_os_version: null != (j = null == e || null == (p = e.device) ? void 0 : p.osVersion) ? j : "",
                                context_device_browser: null != (M = null == e || null == (g = e.device) ? void 0 : g.browser) ? M : "",
                                context_device_browser_version: null != (O = null == e || null == (h = e.device) ? void 0 : h.browserVersion) ? O : "",
                                context_device_first_language: b(null == e || null == (x = e.device) || null == (y = x.languages) ? void 0 : y[0]),
                                context_device_second_language: b(null == e || null == (E = e.device) || null == (L = E.languages) ? void 0 : L[1]),
                                context_location_city: null != (N = null == e || null == (S = e.location) ? void 0 : S.city) ? N : "",
                                context_location_country_code: null != (F = null == e || null == (C = e.location) ? void 0 : C.countryCode) ? F : "",
                                context_local_time_timezone: null != (U = null == e || null == (A = e.localTime) ? void 0 : A.timezone) ? U : "",
                                context_screen_orientation: null != (D = null == e || null == (P = e.screen) ? void 0 : P.orientation) ? D : "",
                                ip_geolocation_country: null != (z = null == e || null == (T = e.location) ? void 0 : T.countryCode) ? z : "",
                                ip_geolocation_subdivision: (e => {
                                    var l;
                                    return e && null != (l = e.split("-")[1]) ? l : ""
                                })(null == e || null == (k = e.location) ? void 0 : k.subdivision)
                            }
                        })(L),
                        ...(e => {
                            var l, t, a, i, r, n, s, o, _, c, u, w, m, p, g, h, y, x;
                            return {
                                device_type: null != (_ = e.device.type) ? _ : "",
                                browser: null != (c = e.device.browser) ? c : "",
                                language: null != (u = e.device.language) ? u : "",
                                os: null != (w = e.device.os) ? w : "",
                                os_version: null != (m = e.device.os_version) ? m : "",
                                persistent_t_s: null != (p = null == (t = e.persistent) || null == (l = t.t_s) ? void 0 : l.toString()) ? p : "",
                                persistent_t_network: null != (g = null == (i = e.persistent) || null == (a = i.t_network) ? void 0 : a.toString()) ? g : "",
                                t_s: null != (h = null == (n = e.landingPageInfo) || null == (r = n.t_s) ? void 0 : r.toString()) ? h : "",
                                t_network: null != (y = null == (o = e.landingPageInfo) || null == (s = o.t_network) ? void 0 : s.toString()) ? y : "",
                                entitlements_package_code: null != (x = e.entitlementsPackageCode) ? x : "",
                                landing_page: (e => {
                                    var l;
                                    if (!e) return "";
                                    if (/^https:\/\/[^/]+\/?$/.test(e)) return "home";
                                    let t = null == (l = /^https:\/\/[^/]+\/([^/?#]+)/.exec(e)) ? void 0 : l[1];
                                    return null != t ? t : ""
                                })(e.landingPageUrl),
                                locale: b(e.locale),
                                is_logged_in: f(e.isLoggedIn),
                                is_custom_domain: f((e => {
                                    if (e) return !/^https:\/\/(www\.)?wetransfer(beta)?\.com/.test(e) && /^https:\/\/([a-zA-Z0-9-]+\.)+wetransfer(beta)?\.com/.test(e)
                                })(e.landingPageUrl)),
                                seconds_from_session_start: v((() => {
                                    let e = localStorage.getItem(d.m);
                                    if (!e) return -1;
                                    let l = parseInt(e, 10);
                                    return (Date.now() - l) / 1e3
                                })())
                            }
                        })(E),
                        ...{
                            email_domain: (e => {
                                let l = (0, o.in)(e);
                                return l ? l.split(".")[0] : ""
                            })(S)
                        }
                    }
                },
                E = e => ({
                    accountCreationDate: e.created_at
                }),
                S = e => e.map(e => {
                    var l, t, a, i;
                    if ("file" === e.uiType) return {
                        name: null != (t = e.name.split("/").pop()) ? t : e.name,
                        itemType: "file",
                        extension: null != (a = e.name.split(".").pop()) ? a : "",
                        size: e.size,
                        addMethod: null != (i = e.addMethod) ? i : void 0
                    };
                    let r = e.items ? S(e.items) : [];
                    return {
                        name: e.name,
                        itemType: "folder",
                        children: r,
                        addMethod: null == (l = r[0]) ? void 0 : l.addMethod
                    }
                }),
                C = e => {
                    var l, t;
                    if (void 0 !== e && !1 !== e.id) return {
                        items: S(e.itemsTree.items),
                        senderEmail: e.sender,
                        recipientEmails: "email" === e.type ? e.recipients.map(e => {
                            var l;
                            return null != (l = e.email) ? l : e.toString()
                        }) : [],
                        transferType: null != (l = e.type) ? l : void 0,
                        transferName: e.displayName,
                        transferMessage: e.message,
                        transferExpirySeconds: null != (t = e.expiry) ? t : void 0,
                        transferIsRecoverable: e.isRecoverable,
                        transferHasPassword: !!e.password
                    }
                };
            var A = t(88848);
            let P = [{
                    trigger: A.vW.TRANSFER_BUTTON_CLICKED_TRANSFER_NUMBER_LIMIT_HIT,
                    isDismissible: !0,
                    isBlocking: !1
                }, {
                    trigger: A.vW.TRANSFER_BUTTON_CLICKED_GB_LIMIT_HIT,
                    isDismissible: !0,
                    isBlocking: !1
                }, {
                    trigger: A.vW.DOWNLOAD_PAGE_OPENED,
                    isDismissible: !0,
                    isBlocking: !1
                }, {
                    trigger: A.vW.INTRO_PAYWALL_NEW_USERS,
                    isDismissible: !0,
                    isBlocking: !1
                }, {
                    trigger: A.vW.INTRO_PAYWALL_PUA_USERS,
                    isDismissible: !0,
                    isBlocking: !1
                }, {
                    trigger: A.vW.BEFORE_TRANSFER_UPLOAD,
                    isDismissible: !0,
                    isBlocking: !1
                }, {
                    trigger: A.vW.TRANSFER_PAGE_OPENED,
                    isDismissible: !0,
                    isBlocking: !1
                }, {
                    trigger: A.vW.NU_PRICING,
                    isDismissible: !0,
                    isBlocking: !1
                }, {
                    trigger: A.vW.NU_UPGRADE,
                    isDismissible: !0,
                    isBlocking: !1
                }, {
                    trigger: A.vW.DW_RECOVER_EXPIRED_TRANSFER,
                    isDismissible: !1,
                    isBlocking: !0
                }, {
                    trigger: A.vW.TW_MULTI_STEP_EXPIRATION_UNPERMITTED,
                    isDismissible: !0,
                    isBlocking: !0
                }, {
                    trigger: A.vW.TW_TRANSFER_SIZE_LIMIT_HIT,
                    isDismissible: !0,
                    isBlocking: !0
                }],
                T = function(e) {
                    let {
                        dismissOnMouseLeave: l = !1,
                        dismissOnOutsideClick: t = !1,
                        autoDismissSeconds: a = -1
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (!e) return {
                        isSupported: !1
                    };
                    let i = P.find(l => l.trigger === e);
                    return i ? {
                        isSupported: !0,
                        isDismissible: i.isDismissible || l || t || a > 0,
                        isBlocking: i.isBlocking
                    } : {
                        isSupported: !1
                    }
                }
        },
        3432: (e, l, t) => {
            "use strict";
            t.d(l, {
                Jj: () => v,
                uF: () => b,
                aV: () => L,
                Qz: () => c
            });
            let a = (e, l) => ({
                    kind: e,
                    info: {
                        type: l.type,
                        segmentations: l.segmentations,
                        request_id: l.requestId,
                        ...l.transferId && {
                            transfer_id: l.transferId
                        },
                        ...l.transferState && {
                            transfer_state: l.transferState
                        },
                        ...l.senderRegistrationId && {
                            sender_registration_id: l.senderRegistrationId
                        }
                    }
                }),
                i = {
                    forceSegmentationRequested: e => a("force_segmentation_requested", e),
                    forceSegmentationSuccessful: e => a("force_segmentation_successful", e),
                    forceSegmentationRejected: e => a("force_segmentation_rejected", e),
                    forceSegmentationFailed: e => a("force_segmentation_failed", e)
                };
            var r = t(62760);
            let n = "limits_removal_virality_exp",
                s = "limits_removal_virality_senders_segmentation",
                d = "limits_removal_virality_downloaders_forced_experiment",
                o = ["limits_removal", "no_limits_but_downloaders_paywall"],
                _ = ["CH", "BR", "SE"],
                c = () => {
                    var e, l;
                    let {
                        experiments: t
                    } = (0, r.k)(), a = null == t || null == (e = t[s]) ? void 0 : e.index;
                    if (void 0 !== a) return {
                        isSegmented: !0,
                        segment: a
                    };
                    let i = null == t || null == (l = t[d]) ? void 0 : l.index;
                    return void 0 !== i ? {
                        isSegmented: !0,
                        segment: i
                    } : {
                        isSegmented: !1,
                        segment: void 0
                    }
                };
            var u = t(72590),
                w = t(65509),
                m = t(87963),
                p = t(24932),
                g = t(28326),
                h = t(23376),
                y = t(66976),
                x = t(98172),
                f = t(26573);
            let v = e => "".concat(n, "/").concat(e),
                b = e => {
                    let l = null == e ? void 0 : e.find(e => e.startsWith(n)),
                        t = null == l ? void 0 : l.split("/")[1],
                        a = parseInt(null != t ? t : "");
                    return !l || !t || isNaN(a) ? {
                        hasExperiment: !1,
                        segment: void 0
                    } : {
                        hasExperiment: !0,
                        segment: a
                    }
                },
                L = (e, l, t) => {
                    var a, r;
                    if (E((0, f.AP)(y.default.getState()))) return;
                    let n = null != (a = new URLSearchParams(window.location.search).get(g.ch)) ? a : "";
                    (e => {
                        let {
                            segment: l,
                            transferId: t,
                            transferState: a,
                            senderRegistrationId: r
                        } = e, n = (0, p.I)();
                        if (null === n) return;
                        let _ = (0, x.Lm)(y.default.getState()),
                            c = {
                                [d]: l
                            },
                            g = (0, u.A)();
                        (0, m.Od)().trackUserAction(i.forceSegmentationRequested({
                            type: "downloader",
                            segmentations: c,
                            transferId: t,
                            transferState: a,
                            senderRegistrationId: r,
                            requestId: g
                        })), w.A.User.forceOrionSegmentations({
                            lsid: n,
                            ..._ ? {
                                auth0_user_id: _
                            } : {},
                            segmentations: c,
                            conflicting_experiments: {
                                [d]: [s, ...o]
                            }
                        }).then(e => {
                            var l;
                            let n = null == e || null == (l = e.body) ? void 0 : l.applied_segmentations;
                            (null == n ? void 0 : n[d]) !== void 0 ? ((0, m.Od)().trackUserAction(i.forceSegmentationSuccessful({
                                type: "downloader",
                                segmentations: c,
                                transferId: t,
                                transferState: a,
                                senderRegistrationId: r,
                                requestId: g
                            })), (0, h.rQ)()) : (0, m.Od)().trackUserAction(i.forceSegmentationRejected({
                                type: "downloader",
                                segmentations: c,
                                transferId: t,
                                transferState: a,
                                senderRegistrationId: r,
                                requestId: g
                            }))
                        }).catch(() => {
                            (0, m.Od)().trackUserAction(i.forceSegmentationFailed({
                                type: "downloader",
                                segmentations: c,
                                transferId: t,
                                transferState: a,
                                senderRegistrationId: r,
                                requestId: g
                            }))
                        })
                    })({
                        segment: e,
                        transferId: l,
                        transferState: t,
                        senderRegistrationId: null != (r = (0, g.Ro)(n)) ? r : ""
                    })
                },
                E = e => _.includes(e.toUpperCase())
        },
        5712: (e, l, t) => {
            "use strict";
            t.d(l, {
                S: () => i
            });
            var a = t(21462);
            let i = e => {
                (0, a.useEffect)(e, [])
            }
        },
        6876: (e, l, t) => {
            "use strict";
            t.d(l, {
                U: () => n
            });
            var a = t(49944),
                i = t(25330),
                r = t(78694);

            function n() {
                var e, l, t, n, s;
                let {
                    entitlements: d
                } = (0, a.o)({
                    ignoreChannel: !0
                }), o = d[r.Z.EMAIL_RECIPIENTS_PER_TRANSFER];
                (0, i.A)(o, d, r.Z.EMAIL_RECIPIENTS_PER_TRANSFER);
                let _ = null != (n = null == o || null == (e = o.rule.counter) ? void 0 : e.unlimited) && n,
                    c = _ ? 1 / 0 : null != (s = null == o || null == (t = o.rule) || null == (l = t.counter) ? void 0 : l.value) ? s : 3;
                return {
                    quota: c,
                    isLimitReached: e => !_ && e > c,
                    unlimited: _
                }
            }
        },
        7686: (e, l, t) => {
            "use strict";
            t.d(l, {
                Ay: () => h,
                Mg: () => m,
                NW: () => y,
                RP: () => u,
                Ts: () => g,
                hN: () => c,
                kQ: () => p,
                sy: () => w,
                t: () => x
            });
            var a = t(60848),
                i = t(24932),
                r = t(28326),
                n = t(51853),
                s = t(88848),
                d = t(72754),
                o = t(41821),
                _ = t(66976);
            let c = () => n.vB.route,
                u = () => n.S3.route,
                w = e => "".concat(n.EW.route).concat(e),
                m = e => e ? "".concat(n.bP.route, "?trk=").concat(e) : n.bP.route,
                p = e => {
                    let l = new URLSearchParams;
                    (null == e ? void 0 : e.tier) && l.set(a.Ej, e.tier), (null == e ? void 0 : e.billingPeriod) && l.set(a.Rt, e.billingPeriod), (null == e ? void 0 : e.trk) && l.set(a.dH, e.trk), l.set("redirect", "transfer"), (null == e ? void 0 : e.coupon) && l.set(a.is, e.coupon), (null == e ? void 0 : e.requestFreeTrial) && l.set(a.vs, e.requestFreeTrial.toString()), (null == e ? void 0 : e.requestWeeklies) && l.set(a.Do, e.requestWeeklies.toString()), (null == e ? void 0 : e.transferId) && l.set(a.Rg, e.transferId);
                    let t = (0, i.I)();
                    null != t && l.set("lsid", t), r.m_.forEach(e => {
                        let t = window.localStorage.getItem(e);
                        null != t && l.set(e, t)
                    });
                    let o = (0, s.oR)(_.default.getState());
                    (null == e ? void 0 : e.paywallOverride) && (o = e.paywallOverride), o && l.set(a.OE, o.toString());
                    let c = (0, s.wn)(_.default.getState());
                    (null == e ? void 0 : e.triggerOverride) && (c = e.triggerOverride), c && l.set(a.GH, c.toString());
                    let u = (0, d.pq)(_.default.getState());
                    l.set(a.q0, null != u ? u : window.location.href);
                    let w = (0, d.og)(_.default.getState());
                    return l.set(a.MB, null != w ? w : window.location.pathname), (null == e ? void 0 : e.paywallId) && l.set(a.yR, e.paywallId), (null == e ? void 0 : e.loginHint) && l.set("loginHint", e.loginHint), "".concat(n.$b.route, "?").concat(l.toString())
                },
                g = (e, l, t) => "".concat(n.rS.route, "?").concat(((e, l, t) => {
                    let a = new URLSearchParams;
                    return a.set(o.INVITE_ID, e), a.set(o.INVITE_TOKEN, l), t && a.set(o.WORKSPACE_ID, t), a.toString()
                })(e, l, t)),
                h = {
                    signUpRoute: (e, l, t, a, i, r) => {
                        let s = r ? "&prefill_email=".concat(encodeURIComponent(r)) : "";
                        return "".concat(n.OE.route, "?tier=").concat(e, "&billing=").concat(l).concat(t ? "&trk=".concat(t) : "").concat(a ? "&public_id=".concat(a) : "").concat(i ? "&signature=".concat(i) : "").concat(s)
                    },
                    upgradeRoute: (e, l, t) => "".concat(n.XU.route, "?tier=").concat(e, "&billing=").concat(l).concat(t ? "&trk=".concat(t) : ""),
                    accountPaymentRoute: c,
                    pricingRoute: m,
                    createCheckoutRoute: p,
                    createRequestRoute: u,
                    createTermsOfServiceRoute: () => n.yy.route,
                    createPrivacyPolicyRoute: () => n.cg.route
                },
                y = e => {
                    let {
                        domain: l,
                        route: t
                    } = e;
                    try {
                        if (!l || !t) return;
                        let e = !l.includes(":") && location.port ? ":".concat(location.port) : "",
                            a = "".concat(location.protocol, "//").concat(l).concat(e).concat(t),
                            i = new URL(a);
                        location.replace(i.href)
                    } catch (e) {
                        console.error("Error redirecting to ".concat(t), e)
                    }
                },
                x = e => {
                    try {
                        return /^(\/(?!\/)[^]*)$/.test(e)
                    } catch (e) {
                        return !1
                    }
                }
        },
        8502: (e, l, t) => {
            "use strict";
            t.d(l, {
                A: () => r
            });
            var a = t(23798);
            t(21462);
            var i = t(15321);
            let r = e => {
                let {
                    className: l,
                    color: t = i.Uv
                } = e;
                return (0, a.jsx)("svg", {
                    className: l,
                    viewBox: "0 0 22 29",
                    children: (0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M11.0001 0.25C7.64035 0.25 4.91675 2.9736 4.91675 6.33333V8.33333C4.91675 8.74755 5.25253 9.08333 5.66675 9.08333C6.08096 9.08333 6.41675 8.74755 6.41675 8.33333V6.33333C6.41675 3.80203 8.46878 1.75 11.0001 1.75C13.5314 1.75 15.5834 3.80203 15.5834 6.33333V10.9167H4.33341C2.44644 10.9167 0.916748 12.4464 0.916748 14.3333V25C0.916748 26.887 2.44644 28.4167 4.33341 28.4167H17.6667C19.5537 28.4167 21.0834 26.887 21.0834 25V14.3333C21.0834 12.4464 19.5537 10.9167 17.6667 10.9167H17.0834V6.33333C17.0834 2.9736 14.3598 0.25 11.0001 0.25ZM2.41675 14.3333C2.41675 13.2748 3.27487 12.4167 4.33341 12.4167H17.6667C18.7253 12.4167 19.5834 13.2748 19.5834 14.3333V25C19.5834 26.0585 18.7253 26.9167 17.6667 26.9167H4.33341C3.27487 26.9167 2.41675 26.0585 2.41675 25V14.3333ZM10.9999 22.3333C12.4727 22.3333 13.6666 21.1394 13.6666 19.6667C13.6666 18.1939 12.4727 17 10.9999 17C9.52716 17 8.33325 18.1939 8.33325 19.6667C8.33325 21.1394 9.52716 22.3333 10.9999 22.3333Z",
                        fill: t
                    })
                })
            }
        },
        8997: (e, l, t) => {
            "use strict";
            t.d(l, {
                h: () => i
            });
            var a = t(36165);
            let i = () => ({
                isLoading: !!(0, a.GV)(e => !e.auth.isInitialized || e.auth.isLoading),
                sessionUser: (0, a.GV)(e => e.user)
            })
        },
        10988: e => {
            e.exports = {
                "wt-display-heading-x-small-bold": "SeatsSelector_wt-display-heading-x-small-bold__hsUTD",
                "wt-display-heading-small-bold-narrow": "SeatsSelector_wt-display-heading-small-bold-narrow__Hiheh",
                "wt-display-heading-small-bold": "SeatsSelector_wt-display-heading-small-bold__HkJhO",
                "wt-display-heading-small-bold-wide": "SeatsSelector_wt-display-heading-small-bold-wide__BIUn2",
                "wt-display-heading-small-narrow": "SeatsSelector_wt-display-heading-small-narrow__hQXNs",
                "wt-display-heading-small": "SeatsSelector_wt-display-heading-small__YFtD_",
                "wt-display-heading-small-wide": "SeatsSelector_wt-display-heading-small-wide__Q8UbH",
                "wt-display-heading-medium-bold-narrow": "SeatsSelector_wt-display-heading-medium-bold-narrow__uXxDl",
                "wt-display-heading-medium-bold": "SeatsSelector_wt-display-heading-medium-bold__MSxYC",
                "wt-display-heading-medium-bold-wide": "SeatsSelector_wt-display-heading-medium-bold-wide__iTQ1j",
                "wt-display-heading-medium-narrow": "SeatsSelector_wt-display-heading-medium-narrow__t6pk0",
                "wt-display-heading-medium": "SeatsSelector_wt-display-heading-medium__wk2dN",
                "wt-display-heading-medium-wide": "SeatsSelector_wt-display-heading-medium-wide__kIpUu",
                "wt-display-heading-large-bold-narrow": "SeatsSelector_wt-display-heading-large-bold-narrow__1TVGv",
                "wt-display-heading-large-bold": "SeatsSelector_wt-display-heading-large-bold__T_zSY",
                "wt-display-heading-large-bold-wide": "SeatsSelector_wt-display-heading-large-bold-wide__oKscQ",
                "wt-display-heading-large-narrow": "SeatsSelector_wt-display-heading-large-narrow__TYn30",
                "wt-display-heading-large": "SeatsSelector_wt-display-heading-large__IDWNk",
                "wt-display-heading-large-wide": "SeatsSelector_wt-display-heading-large-wide__ngIrm",
                "wt-display-heading": "SeatsSelector_wt-display-heading__WvW3c",
                "wt-sub-heading": "SeatsSelector_wt-sub-heading__O5v7n",
                "wt-text-heading-small-bold-narrow": "SeatsSelector_wt-text-heading-small-bold-narrow__KvicW",
                "wt-text-heading-small-bold": "SeatsSelector_wt-text-heading-small-bold__Z_Cvb",
                "wt-text-heading-small-bold-wide": "SeatsSelector_wt-text-heading-small-bold-wide__2B4Jq",
                "wt-text-heading-small-narrow": "SeatsSelector_wt-text-heading-small-narrow__0G1nb",
                "wt-text-heading-small": "SeatsSelector_wt-text-heading-small__81uJc",
                "wt-text-heading-small-wide": "SeatsSelector_wt-text-heading-small-wide__xvd35",
                "wt-text-heading-medium-bold": "SeatsSelector_wt-text-heading-medium-bold__J75qa",
                "wt-text-heading-medium-bold-wide": "SeatsSelector_wt-text-heading-medium-bold-wide___Iz_x",
                "wt-text-heading-medium-semi-narrow": "SeatsSelector_wt-text-heading-medium-semi-narrow__QuRq4",
                "wt-text-heading-medium-narrow": "SeatsSelector_wt-text-heading-medium-narrow__W1nZl",
                "wt-text-heading-medium-semi": "SeatsSelector_wt-text-heading-medium-semi__NoEkZ",
                "wt-text-heading-medium-semi-wide": "SeatsSelector_wt-text-heading-medium-semi-wide__7iZEz",
                "wt-text-heading-medium": "SeatsSelector_wt-text-heading-medium__c_kjg",
                "wt-text-heading-medium-wide": "SeatsSelector_wt-text-heading-medium-wide__YV04H",
                "wt-text-heading-large-bold-narrow": "SeatsSelector_wt-text-heading-large-bold-narrow__ryFLf",
                "wt-text-heading-large-bold": "SeatsSelector_wt-text-heading-large-bold__dnF9v",
                "wt-text-heading-large-bold-wide": "SeatsSelector_wt-text-heading-large-bold-wide__9TL9N",
                "wt-text-heading-large-narrow": "SeatsSelector_wt-text-heading-large-narrow__PI5n0",
                "wt-text-heading-large": "SeatsSelector_wt-text-heading-large__9ZVj2",
                "wt-text-heading-large-wide": "SeatsSelector_wt-text-heading-large-wide__W2QO1",
                "wt-text-heading-x-large-narrow": "SeatsSelector_wt-text-heading-x-large-narrow__SI0eR",
                "wt-text-heading-x-large": "SeatsSelector_wt-text-heading-x-large__cxhG9",
                "wt-text-heading-x-large-wide": "SeatsSelector_wt-text-heading-x-large-wide__f4wzh",
                "wt-text-heading": "SeatsSelector_wt-text-heading__l3o70",
                "wt-body-x-small-semi": "SeatsSelector_wt-body-x-small-semi__bSQTE",
                "wt-body-x-small": "SeatsSelector_wt-body-x-small__MfgfH",
                "wt-body-small-bold": "SeatsSelector_wt-body-small-bold__2QJxO",
                "wt-body-small-semi": "SeatsSelector_wt-body-small-semi__67liJ",
                "wt-body-small": "SeatsSelector_wt-body-small__S8VPI",
                containerPopover: "SeatsSelector_containerPopover__662Og",
                "wt-body-medium-bold": "SeatsSelector_wt-body-medium-bold__pscaB",
                "wt-body-medium-semi": "SeatsSelector_wt-body-medium-semi__O0b8A",
                "wt-body-medium": "SeatsSelector_wt-body-medium__Yx0g2",
                "wt-body-large-bold": "SeatsSelector_wt-body-large-bold__3Z3Ia",
                "wt-body-large": "SeatsSelector_wt-body-large__VtLB6",
                "wt-body-x-large": "SeatsSelector_wt-body-x-large__9ClaW",
                "wt-label-x-small-bold": "SeatsSelector_wt-label-x-small-bold__5ZZJe",
                "wt-label-x-small-semi": "SeatsSelector_wt-label-x-small-semi___evHE",
                "wt-label-x-small": "SeatsSelector_wt-label-x-small__XT0YK",
                "wt-label-small-bold": "SeatsSelector_wt-label-small-bold__grfgO",
                "wt-label-small-semi": "SeatsSelector_wt-label-small-semi__Wyp5A",
                "wt-label-small": "SeatsSelector_wt-label-small__wj_xF",
                "wt-label-medium-bold": "SeatsSelector_wt-label-medium-bold__c7dG4",
                "wt-label-medium-semi": "SeatsSelector_wt-label-medium-semi__osC7y",
                "wt-label-medium": "SeatsSelector_wt-label-medium__OxQpq",
                "wt-label-large-bold": "SeatsSelector_wt-label-large-bold__nhdtE",
                "wt-label-large-semi": "SeatsSelector_wt-label-large-semi___OH_l",
                input: "SeatsSelector_input__Elhc7",
                "wt-label-large": "SeatsSelector_wt-label-large__LmpT_",
                container: "SeatsSelector_container__xQpkc",
                "is-mobile-ready": "SeatsSelector_is-mobile-ready__zEocS",
                tooltipText: "SeatsSelector_tooltipText__6kFJg"
            }
        },
        10995: (e, l, t) => {
            "use strict";
            t.d(l, {
                A: () => w
            });
            var a = t(98175),
                i = t(68018),
                r = t(68081),
                n = t(57912),
                s = t(27498),
                d = t(63306),
                o = t(53155),
                _ = t(6481),
                c = t(53289),
                u = t(95467);
            let w = {
                Transfer: d.Ay,
                Session: {
                    acceptTermsConditions: r.Ee,
                    acceptTrackers: r.qM,
                    declineTrackers: r.yc,
                    setDomainUserId: r.tm,
                    setLanguage: r.xC,
                    setRedirect: r.LE,
                    setShowDataProcessingPrompt: r.rK
                },
                Transfers: o.Ay,
                TransfersReceived: _.A,
                User: u.default,
                Account: n.A,
                Pending: {
                    setPending: i.m$,
                    resetPending: i.lX
                },
                Errors: s.A,
                UI: c.A,
                Consent: {
                    setShowExperience: a.e5,
                    setIsWallVisible: a.x1
                }
            }
        },
        11428: (e, l, t) => {
            "use strict";
            t.d(l, {
                A: () => _
            });
            var a = t(23798),
                i = t(50496),
                r = t(85633),
                n = t(81436),
                s = t(84530),
                d = t(10988),
                o = t.n(d);

            function _(e) {
                let {
                    seats: l,
                    setSeats: t,
                    disableMinSeats: d,
                    disableMaxSeats: _,
                    totalMemberCount: c,
                    minSeatsDisabledReason: u,
                    isInputDisabled: w = !1
                } = e, m = e => {
                    t(Math.max(1, Math.min(e, 999)))
                }, p = 1 === l || d, g = (0, a.jsx)(i.K, {
                    icon: r.Rpb,
                    size: "x-small",
                    appearance: "tertiary",
                    variation: "neutral",
                    onClick: () => m(l - 1),
                    disabled: p
                });
                return (0, a.jsxs)("div", {
                    className: o().container,
                    children: [p ? (0, a.jsx)(n.A, {
                        containerClassName: o().containerPopover,
                        positions: "top",
                        content: (0, a.jsx)("span", {
                            dangerouslySetInnerHTML: {
                                __html: s.A.t("checkout" === u ? "members.suggest_plan_switch" : "minimum_commitment" === u ? "members.members_below_minimum_commitment" : "members.seats_selector_warning", {
                                    totalMemberCount: c
                                })
                            }
                        }),
                        eventTrigger: "hover",
                        isCondensed: !0,
                        mode: "dark",
                        children: g
                    }) : g, (0, a.jsx)("input", {
                        className: o().input,
                        type: "number",
                        min: "".concat(1),
                        max: "".concat(999),
                        onChange: e => m(Number(e.target.value)),
                        value: l,
                        disabled: w
                    }), (0, a.jsx)(i.K, {
                        icon: r.kS3,
                        size: "x-small",
                        appearance: "tertiary",
                        variation: "neutral",
                        onClick: () => m(l + 1),
                        disabled: 999 === l || _
                    })]
                })
            }
        },
        12127: (e, l, t) => {
            "use strict";
            t.d(l, {
                Tw: () => n,
                WI: () => o,
                Yw: () => c,
                av: () => s,
                fe: () => d,
                pV: () => _
            });
            var a = t(66976),
                i = t(85354);

            function r(e) {
                if (e) {
                    let l = e.getBoundingClientRect();
                    return {
                        x: Math.round(l.left),
                        y: Math.round(l.top),
                        width: Math.round(l.width),
                        height: Math.round(l.height)
                    }
                }
                return {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                }
            }
            let n = () => r(document.querySelector(".nav")),
                s = () => r(document.querySelector(".transfer") || document.getElementById("transfer-pro")),
                d = () => {
                    a.default.dispatch(i.g.showUI())
                },
                o = () => {
                    a.default.dispatch(i.g.hideUI())
                },
                _ = () => {
                    let e = a.default.getState();
                    !e.layout.dropzoneActive && e.session.tandc && a.default.dispatch(i.g.setDropZoneState(!0))
                },
                c = e => {
                    a.default.dispatch(i.g.setTransferBoxStyle(e))
                }
        },
        12924: (e, l, t) => {
            "use strict";
            t.d(l, {
                x: () => s
            });
            var a = t(21462),
                i = t(38169),
                r = t(55851),
                n = t(15913);

            function s() {
                let e = function() {
                    var e;
                    let {
                        memberships: l
                    } = (0, i.d4)(e => ({
                        memberships: e.user.memberships
                    })), {
                        currentTeam: t
                    } = (0, n.o)(), r = (0, a.useMemo)(() => t ? null == l ? void 0 : l.find(e => e.team_id === t.id) : void 0, [t, l]), s = null == r || null == (e = r.account.oldest_transfer_past_30_days) ? void 0 : e.ts;
                    return s ? new Date(s) : null
                }();
                return e ? Math.max(30 - Math.floor((Date.now() - e.getTime()) / (1e3 * r.i.ONE_DAY_IN_SECONDS)), 0) : void 0
            }
        },
        13732: (e, l, t) => {
            "use strict";
            t.d(l, {
                A: () => n
            });
            var a = t(38169),
                i = t(89187),
                r = t(72546);
            let n = () => {
                let e = (0, a.d4)(r.Kj),
                    l = [i.js.STARTER, i.js.ULTIMATE, i.js.ENTERPRISE, i.js.ENTERPRISE_CUSTOM_CONTRACT, i.js.PLUS, i.js.PRO_2022, i.js.PREMIUM_2022, i.js.TRANSFER, i.js.DISTRIBUTE, i.js.COLLABORATE, i.js.LITE];
                return e.workspaceTier && l.includes(e.workspaceTier)
            }
        },
        14974: (e, l, t) => {
            "use strict";
            t.d(l, {
                l: () => c
            });
            var a = t(95615),
                i = t(21462),
                r = t(38169),
                n = t(26232),
                s = t(40334),
                d = t(15913),
                o = t(95467),
                _ = t(96644);
            let c = () => {
                let e = (0, r.wA)(),
                    {
                        currentTeam: l
                    } = (0, d.o)(),
                    [t] = (0, n.o9)();
                return (0, i.useCallback)(async i => {
                    let {
                        priceAndPackageToken: r,
                        newQuantity: n
                    } = i;
                    if (!l) return !1;
                    try {
                        var d;
                        let i = await t({
                            teamId: l.id,
                            priceAndPackageToken: r,
                            newQuantity: n
                        }).unwrap();
                        if ("failed" === i.status) return e(_.P9.setPanelNotification({
                            category: _.aF.Error,
                            details: "something_went_wrong"
                        })), !1;
                        if ("requires_action" === i.status && (null == (d = i.nextAction) ? void 0 : d.clientSecret)) {
                            let l = await (0, a.c)(s.o.stripe.publishableKey);
                            if (!l) return e(_.P9.setPanelNotification({
                                category: _.aF.Error,
                                details: "complete_payment_exception"
                            })), !1;
                            let {
                                error: t
                            } = await l.confirmCardPayment(i.nextAction.clientSecret);
                            if (t) return e(_.P9.setPanelNotification({
                                category: _.aF.Error,
                                details: "complete_payment_exception"
                            })), !1
                        }
                        return await e(o.default.getUser()), !0
                    } catch (l) {
                        return e(_.P9.setPanelNotification({
                            category: _.aF.Error,
                            details: "something_went_wrong"
                        })), !1
                    }
                }, [l, e, t])
            }
        },
        15218: e => {
            e.exports = {
                "wt-display-heading-x-small-bold": "OneTrustPreferences_wt-display-heading-x-small-bold__TlknK",
                "wt-display-heading-small-bold-narrow": "OneTrustPreferences_wt-display-heading-small-bold-narrow__HyRpv",
                "wt-display-heading-small-bold": "OneTrustPreferences_wt-display-heading-small-bold__7zLAr",
                "wt-display-heading-small-bold-wide": "OneTrustPreferences_wt-display-heading-small-bold-wide__Vbpct",
                "wt-display-heading-small-narrow": "OneTrustPreferences_wt-display-heading-small-narrow__mdtpc",
                "wt-display-heading-small": "OneTrustPreferences_wt-display-heading-small__JcWH8",
                "wt-display-heading-small-wide": "OneTrustPreferences_wt-display-heading-small-wide__xjLa7",
                "wt-display-heading-medium-bold-narrow": "OneTrustPreferences_wt-display-heading-medium-bold-narrow__y_Tg9",
                "wt-display-heading-medium-bold": "OneTrustPreferences_wt-display-heading-medium-bold__ZCkdO",
                "wt-display-heading-medium-bold-wide": "OneTrustPreferences_wt-display-heading-medium-bold-wide__Ipwiv",
                "wt-display-heading-medium-narrow": "OneTrustPreferences_wt-display-heading-medium-narrow__aKTEN",
                "wt-display-heading-medium": "OneTrustPreferences_wt-display-heading-medium__9zDDS",
                "wt-display-heading-medium-wide": "OneTrustPreferences_wt-display-heading-medium-wide__o_JPf",
                "wt-display-heading-large-bold-narrow": "OneTrustPreferences_wt-display-heading-large-bold-narrow__eCYTH",
                "wt-display-heading-large-bold": "OneTrustPreferences_wt-display-heading-large-bold__0zkUY",
                "wt-display-heading-large-bold-wide": "OneTrustPreferences_wt-display-heading-large-bold-wide___l_24",
                "wt-display-heading-large-narrow": "OneTrustPreferences_wt-display-heading-large-narrow__6lGNz",
                "wt-display-heading-large": "OneTrustPreferences_wt-display-heading-large___YAZA",
                "wt-display-heading-large-wide": "OneTrustPreferences_wt-display-heading-large-wide__CpfUA",
                "wt-display-heading": "OneTrustPreferences_wt-display-heading__9vWZT",
                "wt-sub-heading": "OneTrustPreferences_wt-sub-heading__acytd",
                "wt-text-heading-small-bold-narrow": "OneTrustPreferences_wt-text-heading-small-bold-narrow__B_Dxj",
                "wt-text-heading-small-bold": "OneTrustPreferences_wt-text-heading-small-bold__tFlj0",
                "wt-text-heading-small-bold-wide": "OneTrustPreferences_wt-text-heading-small-bold-wide__JpFz6",
                "wt-text-heading-small-narrow": "OneTrustPreferences_wt-text-heading-small-narrow__XC6Yh",
                "wt-text-heading-small": "OneTrustPreferences_wt-text-heading-small__Kk4me",
                "wt-text-heading-small-wide": "OneTrustPreferences_wt-text-heading-small-wide__3QLzz",
                "wt-text-heading-medium-bold": "OneTrustPreferences_wt-text-heading-medium-bold__cGaRw",
                "wt-text-heading-medium-bold-wide": "OneTrustPreferences_wt-text-heading-medium-bold-wide__qw0Wo",
                "wt-text-heading-medium-semi-narrow": "OneTrustPreferences_wt-text-heading-medium-semi-narrow__RJ0lb",
                "wt-text-heading-medium-narrow": "OneTrustPreferences_wt-text-heading-medium-narrow__hYHP6",
                "wt-text-heading-medium-semi": "OneTrustPreferences_wt-text-heading-medium-semi__YIKY0",
                "wt-text-heading-medium-semi-wide": "OneTrustPreferences_wt-text-heading-medium-semi-wide__8ZlX4",
                "wt-text-heading-medium": "OneTrustPreferences_wt-text-heading-medium__fESE3",
                "wt-text-heading-medium-wide": "OneTrustPreferences_wt-text-heading-medium-wide__PkYer",
                "wt-text-heading-large-bold-narrow": "OneTrustPreferences_wt-text-heading-large-bold-narrow__lcAk8",
                "wt-text-heading-large-bold": "OneTrustPreferences_wt-text-heading-large-bold__L4imZ",
                title: "OneTrustPreferences_title__nnhh9",
                "wt-text-heading-large-bold-wide": "OneTrustPreferences_wt-text-heading-large-bold-wide__ssdva",
                "wt-text-heading-large-narrow": "OneTrustPreferences_wt-text-heading-large-narrow__WCxk1",
                "wt-text-heading-large": "OneTrustPreferences_wt-text-heading-large__ZR4Du",
                "wt-text-heading-large-wide": "OneTrustPreferences_wt-text-heading-large-wide__1uLtG",
                "wt-text-heading-x-large-narrow": "OneTrustPreferences_wt-text-heading-x-large-narrow__IUlDs",
                "wt-text-heading-x-large": "OneTrustPreferences_wt-text-heading-x-large__gaskM",
                "wt-text-heading-x-large-wide": "OneTrustPreferences_wt-text-heading-x-large-wide__NwHZN",
                "wt-text-heading": "OneTrustPreferences_wt-text-heading__2dyl4",
                "wt-body-x-small-semi": "OneTrustPreferences_wt-body-x-small-semi__wwZvL",
                "wt-body-x-small": "OneTrustPreferences_wt-body-x-small__714QH",
                "wt-body-small-bold": "OneTrustPreferences_wt-body-small-bold__53OeK",
                "wt-body-small-semi": "OneTrustPreferences_wt-body-small-semi__llBO4",
                "wt-body-small": "OneTrustPreferences_wt-body-small__6cWGl",
                "wt-body-medium-bold": "OneTrustPreferences_wt-body-medium-bold__o6jx1",
                "wt-body-medium-semi": "OneTrustPreferences_wt-body-medium-semi__QHVHm",
                "wt-body-medium": "OneTrustPreferences_wt-body-medium__UqcRU",
                description: "OneTrustPreferences_description___JkJj",
                "wt-body-large-bold": "OneTrustPreferences_wt-body-large-bold__ty570",
                "wt-body-large": "OneTrustPreferences_wt-body-large__3xHF7",
                "wt-body-x-large": "OneTrustPreferences_wt-body-x-large__gs8RW",
                "wt-label-x-small-bold": "OneTrustPreferences_wt-label-x-small-bold__gUxQc",
                "wt-label-x-small-semi": "OneTrustPreferences_wt-label-x-small-semi__kEs6v",
                "wt-label-x-small": "OneTrustPreferences_wt-label-x-small__EyYJh",
                "wt-label-small-bold": "OneTrustPreferences_wt-label-small-bold__Bzz4p",
                "wt-label-small-semi": "OneTrustPreferences_wt-label-small-semi__Gir1R",
                "wt-label-small": "OneTrustPreferences_wt-label-small__A4r6r",
                "wt-label-medium-bold": "OneTrustPreferences_wt-label-medium-bold__B_VLD",
                "wt-label-medium-semi": "OneTrustPreferences_wt-label-medium-semi__zDrtF",
                "wt-label-medium": "OneTrustPreferences_wt-label-medium__vvhQ_",
                "wt-label-large-bold": "OneTrustPreferences_wt-label-large-bold__QrWhF",
                "wt-label-large-semi": "OneTrustPreferences_wt-label-large-semi__zIcE1",
                "wt-label-large": "OneTrustPreferences_wt-label-large__fyeWT",
                container: "OneTrustPreferences_container__kKQim",
                button: "OneTrustPreferences_button__wuoyK"
            }
        },
        15412: e => {
            e.exports = {
                modalOverlay: "UpgradeSubscriptionModalWrapper_modalOverlay__7egha",
                spinner: "UpgradeSubscriptionModalWrapper_spinner__AjSyG",
                loadingIcon: "UpgradeSubscriptionModalWrapper_loadingIcon__zfYsr",
                "loading-pulse": "UpgradeSubscriptionModalWrapper_loading-pulse__DEBVE",
                modalContainerLoading: "UpgradeSubscriptionModalWrapper_modalContainerLoading__tTbcM",
                modalContainer: "UpgradeSubscriptionModalWrapper_modalContainer__KsH4n",
                closeIcon: "UpgradeSubscriptionModalWrapper_closeIcon__A94N7",
                "text-placeholder": "UpgradeSubscriptionModalWrapper_text-placeholder__mioOk",
                "pending-background": "UpgradeSubscriptionModalWrapper_pending-background__E3q6L"
            }
        },
        15566: (e, l, t) => {
            "use strict";
            t.d(l, {
                bV: () => M,
                eK: () => k,
                ev: () => j,
                fR: () => R,
                ks: () => T,
                zi: () => I
            });
            var a = t(21462),
                i = t(38169),
                r = t(6876),
                n = t(69769),
                s = t(40842),
                d = t(33665),
                o = t(39429),
                _ = t(1150),
                c = t(93052),
                u = t(81903),
                w = t(72754),
                m = t(42599),
                p = t(88919),
                g = t(62373),
                h = t(62760),
                y = t(10995),
                x = t(56915),
                f = t(44614),
                v = t(12637),
                b = t(45477),
                L = t(86781),
                E = t(26573),
                S = t(72546),
                C = t(62529),
                A = t(88797),
                P = t(15539);
            let T = () => {
                    let e = (0, i.wA)(),
                        l = (0, a.useCallback)(() => e(y.A.Transfer.create), [e]),
                        t = (0, a.useCallback)(l => e(y.A.Transfer.changeType(l)), [e]);
                    return {
                        createTransfer: l,
                        changeTransferType: t,
                        changeTransferFeature: (0, a.useCallback)(l => e(y.A.Transfer.changeFeature(l)), [e]),
                        setIsOptionsVisible: (0, a.useCallback)(l => e(y.A.UI.setUploaderOptions({
                            visible: l
                        })), [e])
                    }
                },
                k = () => {
                    let [e, l] = (0, a.useState)(!0), t = (0, i.d4)(E.vC), r = (0, i.d4)(S.Kj), {
                        isAnticipatedUploadStarted: n
                    } = (0, _.$)(), {
                        settings: {
                            should_hide_terms_and_conditions_step: s
                        }
                    } = (0, h.k)();
                    return (0, a.useEffect)(() => {
                        l(!t.tandc && !s || (0, C.gd)(r.state, r.id, n))
                    }, [t.tandc, r.state, r.id, l, n, s]), e
                },
                R = () => {
                    let e = (0, a.useRef)(null),
                        l = (0, a.useCallback)(function() {
                            for (var l = arguments.length, t = Array(l), a = 0; a < l; a++) t[a] = arguments[a];
                            e.current && e.current.scrollTo(...t)
                        }, [e]);
                    return {
                        scrollableRef: e,
                        scrollTo: l,
                        getScrollPosition: () => e.current.getScrollPosition()
                    }
                },
                I = () => {
                    let {
                        createTransfer: e
                    } = T(), l = (0, i.d4)(S.Jz), {
                        settings: t
                    } = (0, h.k)();
                    (0, a.useEffect)(() => {
                        "downloadable" === l && e(t)
                    }, [e, l, t])
                },
                j = e => {
                    let l = (0, p.Z)(e),
                        t = (0, i.wA)(),
                        c = (0, i.d4)(v.jZ),
                        {
                            quota: y
                        } = (0, n.H)(),
                        C = (0, i.d4)(b.Tb),
                        T = (0, i.d4)(P.nn),
                        k = (0, i.d4)(P.Y2),
                        R = (0, i.d4)(f.CL),
                        I = (0, i.d4)(E.vC),
                        j = (0, i.d4)(S.Kj),
                        M = (0, i.d4)(L.mB),
                        O = (0, r.U)().quota,
                        {
                            isAnticipatedUploadStarted: N
                        } = (0, _.$)(),
                        F = (0, i.d4)(m.Ov),
                        U = (0, i.d4)(m.cN),
                        {
                            settings: D
                        } = (0, h.k)(),
                        {
                            canShow: z,
                            isBlockingUpload: W
                        } = (0, u.BT)(),
                        B = (0, i.d4)(w.Sr),
                        H = D.disable_transfer_numbers_limits && (null == B ? void 0 : B.accountStorage) !== !0 || D.disable_gb_limits && (null == B ? void 0 : B.transferNumber) !== !0 || F || U,
                        V = (0, o.M)(),
                        Z = D.use_accelerated_upload,
                        q = (0, s.VW)(),
                        G = (0, a.useMemo)(() => Z || q, [Z, q]),
                        K = (0, d.wE)(),
                        Y = (0, a.useCallback)(() => {
                            null != j && j.resumeUploadInProgress || t(A.DG({
                                channel: C,
                                account: c,
                                user: M,
                                session: I,
                                notification: R,
                                allowedSize: y,
                                isForwardedTransfer: k,
                                currentSize: T,
                                maximumNumberOfRecipients: O,
                                shouldShowPaywall: z,
                                isBlockingUpload: W,
                                shouldUseGracePeriodSegment: H,
                                experimentIds: V,
                                orionSettings: D,
                                isAnticipatedUploadStarted: N,
                                canUseUploadCdn: G,
                                forcePreviewAndDownloadViewOption: K
                            }))
                        }, [c, C, T, t, V, N, k, O, R, I, D, K, H, null == j ? void 0 : j.resumeUploadInProgress, y, z, W, M, G]),
                        J = (0, a.useCallback)(() => {
                            g.A.trackSnowplowEvent({
                                category: "transfer",
                                action: "click_transfer",
                                label: "transfer-".concat(j.password ? "with" : "without", "-password-expiryDate-").concat(j.expiry)
                            })
                        }, [j.expiry, j.password]);
                    (0, a.useEffect)(() => {
                        e && !l && (t(x.P.clearTransferNotification()), J(), Y())
                    }, [e, l, Y, J, t])
                },
                M = () => {
                    let [e, l] = (0, a.useState)(!1), {
                        quota: t
                    } = (0, n.H)(), s = (0, i.d4)(S.Kj), d = (0, i.d4)(L.mB), {
                        rules: o
                    } = d, {
                        maximumNumberOfFiles: _
                    } = o, u = (0, r.U)().quota, {
                        settings: w
                    } = (0, h.k)(), p = (0, c.q)(), g = (0, i.d4)(m.cN), y = (0, a.useMemo)(() => p || g, [p, g]);
                    return (0, a.useEffect)(() => {
                        try {
                            let e = !!d.loggedIn,
                                a = (null == w ? void 0 : w.allow_anonymous_transfer) || !1;
                            (0, C.Ks)({
                                transfer: s,
                                maximumNumberOfRecipients: u,
                                maximumNumberOfFiles: _,
                                allowedSize: t,
                                currentSize: (0, P.nn)({
                                    transfer: s
                                }),
                                shouldBypassLimits: y,
                                isUserLoggedIn: e,
                                allowAnonymousTransfer: a
                            }), l(!0)
                        } catch (e) {
                            l(!1)
                        }
                    }, [_, u, s, t, y, d.loggedIn, null == w ? void 0 : w.allow_anonymous_transfer]), e
                }
        },
        15913: (e, l, t) => {
            "use strict";
            t.d(l, {
                o: () => c
            });
            var a = t(21462),
                i = t(38169),
                r = t(98172),
                n = t(76849),
                s = t(62760),
                d = t(57130),
                o = t(86781),
                _ = t(5619);

            function c() {
                var e;
                let {
                    data: l,
                    fetching: c
                } = function() {
                    let e = (0, i.d4)(r.e2),
                        l = (null == e ? void 0 : e.isInitialized) && (null == e ? void 0 : e.isLoading) === !1 && (null == e ? void 0 : e.isLoggedIn),
                        {
                            data: t,
                            isUninitialized: a,
                            isLoading: s,
                            isError: d
                        } = (0, n.gG)(void 0, {
                            skip: !l
                        });
                    return {
                        data: d ? null : {
                            teams: null != t ? t : []
                        },
                        fetching: (a || s) && l
                    }
                }(), {
                    auth0UserId: u
                } = (0, i.d4)(e => ({
                    auth0UserId: e.auth.auth0UserId
                })), {
                    settings: {
                        disable_workspace_switching: w
                    }
                } = (0, s.k)(), m = function(e, l, t) {
                    var a, i;
                    if (!e || !l || !e.length) return;
                    let r = (0, _.Sy)(),
                        n = e.find(e => e.id === r);
                    if (n && (!t || n.creatorId !== l)) return n;
                    let s = e.filter(e => e.creatorId !== l),
                        d = e.find(e => e.creatorId === l);
                    return null != (i = null != (a = s[0]) ? a : d) ? i : e[0]
                }(null == l ? void 0 : l.teams, u, w), p = null == l ? void 0 : l.teams, g = (0, i.d4)(o.eB), h = (0, i.d4)(o.gg), y = (0, i.d4)(e => (0, d.sF)(e, "getUser")), x = (0, i.wA)();
                (0, a.useEffect)(() => {
                    let e = (0, _.Sy)(),
                        l = null == m ? void 0 : m.id;
                    l && e !== l && (0, _.aC)(l)
                }, [null == m ? void 0 : m.id]), (0, a.useEffect)(() => {
                    !y && g && m && g !== (null == m ? void 0 : m.id) && Promise.resolve().then(t.bind(t, 95467)).then(e => x(e.default.getUser()))
                }, [g, m, x, y]);
                let f = (null != (e = null == m ? void 0 : m.members.length) ? e : 0) > 1,
                    v = e => !!(null == m ? void 0 : m.id) && (null == m ? void 0 : m.creatorId) === e && f;
                return {
                    ownTeam: null == p ? void 0 : p.find(e => e.creatorId === u),
                    currentTeam: m,
                    allTeams: p,
                    fetching: c,
                    getUserByAuth0Id: function(e) {
                        return null == m ? void 0 : m.members.find(l => l.user.auth0UserId === e)
                    },
                    getUserByEmail: function(e) {
                        return null == m ? void 0 : m.members.find(l => {
                            var t;
                            return (null == (t = l.user.email) ? void 0 : t.toLowerCase()) === e.toLowerCase()
                        })
                    },
                    getUserIndexByEmail: function(e) {
                        return null == m ? void 0 : m.members.findIndex(l => {
                            var t;
                            return (null == (t = l.user.email) ? void 0 : t.toLowerCase()) === e.toLowerCase()
                        })
                    },
                    onTeamSwitch: function(e) {
                        (0, _.aC)(e)
                    },
                    isCurrentTeamOfMany: f,
                    userIsTeamMember: e => !!(null == m ? void 0 : m.id) && (null == m ? void 0 : m.creatorId) !== e,
                    userIsTeamOwner: v,
                    userIsTeamAdmin: e => (null == h ? void 0 : h.role) === "admin" || v(e)
                }
            }
        },
        16268: (e, l, t) => {
            "use strict";
            t.d(l, {
                A: () => r
            });
            var a = t(23798);
            t(21462);
            var i = t(15321);
            let r = e => {
                let {
                    className: l,
                    color: t = i.W5
                } = e;
                return (0, a.jsx)("svg", {
                    className: l,
                    viewBox: "0 0 13 13",
                    children: (0, a.jsx)("path", {
                        stroke: t,
                        strokeWidth: "2.057",
                        d: "M3 6.888L6.16 10.2 11 3",
                        fill: "none",
                        fillRule: "evenodd",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                })
            }
        },
        16342: (e, l, t) => {
            "use strict";
            t.d(l, {
                KO: () => a.KO,
                OT: () => i.OT,
                qJ: () => i.qJ
            }), t(74452);
            var a = t(86248),
                i = t(24761)
        },
        17533: (e, l, t) => {
            "use strict";
            t.d(l, {
                V: () => a
            });
            var a = function(e) {
                return e.UK_AGE = "uk_age", e.US_DE_AGE_30_60 = "us_de_age_30_60", e.FR_25_PLUS = "fr_25_plus", e.UK_FEMALE_18_PLUS = "uk_female_18_plus", e
            }({})
        },
        20409: (e, l, t) => {
            "use strict";
            t.d(l, {
                T: () => o
            });
            var a = t(23798),
                i = t(46001),
                r = t.n(i),
                n = t(85633),
                s = t(24595),
                d = t.n(s);

            function o(e) {
                let {
                    title: l,
                    description: t,
                    textSize: i = "small"
                } = e, s = (() => {
                    switch (e.icon) {
                        case "check":
                            return (0, a.jsx)(n.bT1, {
                                className: r()(d().perkIcon, "large" === i && d().largeIcon)
                            });
                        case "disabled-check":
                            return (0, a.jsx)(n.bT1, {
                                className: r()(d().perkIconDisabled, "large" === i && d().largeIcon)
                            });
                        case "zap":
                            return (0, a.jsx)(n.s6j, {
                                className: r()(d().perkIconZap, "large" === i && d().largeIcon)
                            })
                    }
                })();
                return (0, a.jsxs)("div", {
                    className: d().perk,
                    children: [s, (0, a.jsxs)("div", {
                        className: d().perkText,
                        children: [l && (0, a.jsx)("span", {
                            className: d().perkTitle,
                            children: l
                        }), (0, a.jsx)("span", {
                            className: r()(d().perkDescription, "medium" === i && d().medium, "large" === i && d().large),
                            dangerouslySetInnerHTML: {
                                __html: t
                            }
                        })]
                    })]
                })
            }
        },
        20916: (e, l, t) => {
            "use strict";
            t.d(l, {
                Dg: () => n,
                Fg: () => d,
                My: () => r,
                kE: () => s
            });
            var a = t(4559);
            let i = e => e.passwordlessLogin,
                r = (0, a.Mz)(i, e => e.userExists),
                n = (0, a.Mz)(i, e => e.allowed),
                s = (0, a.Mz)(i, e => e.initializeScriptsAfterPasswordlessLogin),
                d = (0, a.Mz)(i, e => e.hasStartedPasswordlessLogin)
        },
        20997: (e, l, t) => {
            "use strict";
            t.d(l, {
                A: () => r
            });
            var a = t(23798);
            t(21462);
            var i = t(15321);
            let r = e => {
                let {
                    color: l = i.UE
                } = e;
                return (0, a.jsx)("svg", {
                    width: "33",
                    height: "32",
                    viewBox: "0 0 33 32",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, a.jsxs)("g", {
                        id: "Frame",
                        children: [(0, a.jsx)("path", {
                            id: "Vector",
                            d: "M11.1667 20C17.6663 20 20.5 17.2654 20.5 10.6667C20.5 17.2654 23.3139 20 29.8333 20C23.3139 20 20.5 22.8139 20.5 29.3334C20.5 22.8139 17.6663 20 11.1667 20Z",
                            fill: l,
                            stroke: "white",
                            strokeWidth: "1.5",
                            strokeLinejoin: "round"
                        }), (0, a.jsx)("path", {
                            id: "Vector_2",
                            d: "M3.16667 8.66669C7.34501 8.66669 9.16667 6.90873 9.16667 2.66669C9.16667 6.90873 10.9756 8.66669 15.1667 8.66669C10.9756 8.66669 9.16667 10.4756 9.16667 14.6667C9.16667 10.4756 7.34501 8.66669 3.16667 8.66669Z",
                            fill: l,
                            stroke: "white",
                            strokeWidth: "1.5",
                            strokeLinejoin: "round"
                        })]
                    })
                })
            }
        },
        22352: (e, l, t) => {
            "use strict";
            t.d(l, {
                $6: () => _,
                Ay: () => V,
                D_: () => F,
                Dm: () => x,
                Dn: () => W,
                E4: () => o,
                FQ: () => u,
                H_: () => U,
                I7: () => m,
                Kf: () => N,
                L8: () => S,
                Me: () => y,
                Oo: () => g,
                Qq: () => B,
                SC: () => z,
                Vb: () => k,
                Vl: () => b,
                XI: () => A,
                YP: () => c,
                aB: () => E,
                cA: () => I,
                cg: () => d,
                cu: () => Z,
                g6: () => s,
                j2: () => M,
                l_: () => q,
                oF: () => j,
                oZ: () => P,
                pZ: () => w,
                qw: () => T,
                rk: () => v,
                rz: () => p,
                sr: () => h,
                vO: () => O,
                xh: () => H,
                zl: () => C
            });
            var a = t(82493),
                i = t.n(a),
                r = t(98463),
                n = t(23901);
            let {
                useDownloadMonetaInvoiceMutation: s,
                useAcceptInviteMutation: d,
                useGetDomainStatusQuery: o,
                useClaimDomainMutation: _,
                useCreateFileUploadMutation: c,
                useDeletePaymentMethodMutation: u,
                useDescribePaymentMethodMutation: w,
                useFreeSeatMutation: m,
                useGetBillingInformationQuery: p,
                useGetInvoicesQuery: g,
                useGetLatestChargeForRefundQuery: h,
                useGetSamlSsoConfigQuery: y,
                useGetSubscriptionDetailsQuery: x,
                useGetSubscriptionStatusQuery: f,
                useGetUnpaidInvoicesQuery: v,
                useGetWorkspaceQuery: b,
                useInviteITManagerTeamsTrialMutation: L,
                useLazyGetEligibleMembersQuery: E,
                useLazyGetSubscriptionStatusQuery: S,
                useLazyGetWorkspaceQuery: C,
                useLazyValidateInviteQuery: A,
                useListPaymentMethodsQuery: P,
                usePaidSubscriptionMutation: T,
                useRefundAndCancelSubscriptionMutation: k,
                useRemoveMemberMutation: R,
                useRequestWorkspaceInvitationMutation: I,
                useRevokeInviteMutation: j,
                useSendInvitesMutation: M,
                useSetDefaultPaymentMethodMutation: O,
                useSetMinimumCommitmentSeatsMutation: N,
                useSetRoleMutation: F,
                useSetupPaymentMethodMutation: U,
                useSetupTeamsTrialMutation: D,
                useUnlinkDomainMutation: z,
                useUpdateBillingInformationMutation: W,
                useUpdateGuestEmailMutation: B,
                useUpdatePaymentMethodMutation: H,
                useUpdateRenewalReminderMutation: V,
                useUpdateSamlSsoConfigMutation: Z,
                useUpdateWorkspaceMutation: q
            } = r.K.injectEndpoints({
                endpoints: e => ({
                    getInvoices: e.query({
                        query: e => {
                            let {
                                teamId: l
                            } = e;
                            return {
                                url: "teams/".concat(l, "/invoices"),
                                method: "GET",
                                requiresAuth: !0
                            }
                        },
                        transformResponse: e => (0, n.x)(e.invoices),
                        providesTags: (e, l, t) => {
                            let {
                                teamId: a
                            } = t;
                            return e && a ? [{
                                type: "Workspace",
                                id: a
                            }] : []
                        }
                    }),
                    getUnpaidInvoices: e.query({
                        query: e => {
                            let {
                                teamId: l
                            } = e;
                            return {
                                url: "teams/".concat(l, "/invoices/unpaid"),
                                method: "GET",
                                requiresAuth: !0
                            }
                        },
                        transformResponse: e => (0, n.x)(e.invoices),
                        providesTags: (e, l, t) => {
                            let {
                                teamId: a
                            } = t;
                            return e && a ? [{
                                type: "Workspace",
                                id: a
                            }] : []
                        }
                    }),
                    getBillingInformation: e.query({
                        query: e => {
                            let {
                                teamId: l
                            } = e;
                            return {
                                url: "teams/".concat(l, "/billing-information"),
                                method: "GET",
                                requiresAuth: !0
                            }
                        },
                        transformResponse: e => (0, n.x)(e),
                        providesTags: (e, l, t) => {
                            let {
                                teamId: a
                            } = t;
                            return e && a ? [{
                                type: "Workspace",
                                id: a
                            }] : []
                        }
                    }),
                    updateBillingInformation: e.mutation({
                        query: e => {
                            let {
                                teamId: l,
                                payload: t
                            } = e;
                            return {
                                url: "teams/".concat(l, "/billing-information"),
                                method: "PATCH",
                                requiresAuth: !0,
                                data: t
                            }
                        },
                        transformResponse: e => (0, n.x)(e),
                        invalidatesTags: (e, l, t) => {
                            let {
                                teamId: a
                            } = t;
                            return e && a ? [{
                                type: "Workspace",
                                id: a
                            }] : []
                        }
                    }),
                    getWorkspace: e.query({
                        query: e => {
                            let {
                                teamId: l
                            } = e;
                            return {
                                url: "teams/".concat(l),
                                method: "GET",
                                requiresAuth: !0
                            }
                        },
                        providesTags: (e, l, t) => {
                            let {
                                teamId: a
                            } = t;
                            return e && a ? [{
                                type: "Workspace",
                                id: a
                            }] : []
                        },
                        transformResponse: e => {
                            let l = (0, n.x)(e);
                            return {
                                ...l,
                                name: i().decode(l.name || "")
                            }
                        }
                    }),
                    updateWorkspace: e.mutation({
                        query: e => {
                            let {
                                teamId: l,
                                scimEnabled: t,
                                name: a,
                                defaultName: i,
                                logo: r
                            } = e;
                            return {
                                url: "teams/".concat(l),
                                method: "PATCH",
                                requiresAuth: !0,
                                data: {
                                    scimEnabled: t,
                                    name: a,
                                    defaultName: i,
                                    logo: r
                                }
                            }
                        },
                        invalidatesTags: (e, l, t) => {
                            let {
                                teamId: a
                            } = t;
                            return e && a ? [{
                                type: "Workspace",
                                id: a
                            }] : []
                        },
                        transformResponse: e => (0, n.x)(e.team)
                    }),
                    setRole: e.mutation({
                        query: e => {
                            let {
                                teamId: l,
                                userId: t,
                                role: a
                            } = e;
                            return {
                                url: "teams/".concat(l, "/members/").concat(t),
                                method: "PATCH",
                                requiresAuth: !0,
                                data: {
                                    role: a
                                }
                            }
                        },
                        invalidatesTags: (e, l, t) => {
                            let {
                                teamId: a
                            } = t;
                            return e && a ? [{
                                type: "Workspace",
                                id: a
                            }] : []
                        },
                        transformResponse: e => (0, n.x)(e.member)
                    }),
                    sendInvites: e.mutation({
                        query: e => {
                            let {
                                teamId: l,
                                invites: t
                            } = e;
                            return {
                                url: "teams/".concat(l, "/invites"),
                                method: "POST",
                                requiresAuth: !0,
                                data: {
                                    invites: t.map(e => ({
                                        email: e
                                    }))
                                }
                            }
                        },
                        invalidatesTags: (e, l, t) => {
                            let {
                                teamId: a
                            } = t;
                            return e && a ? [{
                                type: "Workspace",
                                id: a
                            }] : []
                        },
                        transformResponse: e => (0, n.x)(e.invites)
                    }),
                    revokeInvite: e.mutation({
                        query: e => {
                            let {
                                inviteId: l
                            } = e;
                            return {
                                url: "teams/invites/".concat(l),
                                method: "DELETE",
                                requiresAuth: !0
                            }
                        },
                        invalidatesTags: (e, l, t) => {
                            let {
                                teamId: a
                            } = t;
                            return !l && a ? [{
                                type: "Workspace",
                                id: a
                            }] : []
                        }
                    }),
                    removeMember: e.mutation({
                        query: e => {
                            let {
                                teamId: l,
                                userId: t
                            } = e;
                            return {
                                url: "teams/".concat(l, "/members/").concat(t),
                                method: "DELETE",
                                requiresAuth: !0
                            }
                        },
                        invalidatesTags: (e, l, t) => {
                            let {
                                teamId: a
                            } = t;
                            return !l && a ? [{
                                type: "Workspace",
                                id: a
                            }] : []
                        }
                    }),
                    validateInvite: e.query({
                        query: e => {
                            let {
                                inviteId: l,
                                inviteToken: t
                            } = e;
                            return {
                                url: "teams/invites/".concat(l, "/validate?token=").concat(t),
                                method: "GET",
                                requiresAuth: !0
                            }
                        },
                        transformResponse: e => (0, n.x)(e.invite)
                    }),
                    acceptInvite: e.mutation({
                        query: e => {
                            let {
                                inviteId: l,
                                inviteToken: t
                            } = e;
                            return {
                                url: "teams/invites/accept",
                                method: "POST",
                                requiresAuth: !0,
                                data: {
                                    inviteId: l,
                                    inviteToken: t
                                }
                            }
                        }
                    }),
                    claimDomain: e.mutation({
                        query: e => {
                            let {
                                teamId: l,
                                allowAutomaticJoinByDomain: t
                            } = e;
                            return {
                                url: "teams/".concat(l, "/domain/claim"),
                                method: "PATCH",
                                requiresAuth: !0,
                                data: {
                                    allowAutomaticJoinByDomain: t
                                }
                            }
                        },
                        invalidatesTags: (e, l, t) => {
                            let {
                                teamId: a
                            } = t;
                            return e && a ? [{
                                type: "Workspace",
                                id: a
                            }] : []
                        },
                        transformResponse: e => (0, n.x)(e.team)
                    }),
                    unlinkDomain: e.mutation({
                        query: e => {
                            let {
                                teamId: l
                            } = e;
                            return {
                                url: "teams/".concat(l, "/domain"),
                                method: "DELETE",
                                requiresAuth: !0
                            }
                        },
                        invalidatesTags: (e, l, t) => {
                            let {
                                teamId: a
                            } = t;
                            return e && a ? [{
                                type: "Workspace",
                                id: a
                            }, {
                                type: "Domain"
                            }] : []
                        },
                        transformResponse: e => (0, n.x)(e.team)
                    }),
                    getEligibleMembers: e.query({
                        query: e => {
                            let {
                                teamId: l
                            } = e;
                            return {
                                url: "teams/".concat(l, "/domain/eligible"),
                                method: "GET",
                                requiresAuth: !0
                            }
                        },
                        transformResponse: e => e.users.map(e => (0, n.x)(e))
                    }),
                    createFileUpload: e.mutation({
                        query: e => {
                            let {
                                contentType: l
                            } = e;
                            return {
                                url: "teams/files",
                                method: "POST",
                                requiresAuth: !0,
                                data: {
                                    contentType: l
                                }
                            }
                        },
                        transformResponse: e => (0, n.x)(e)
                    }),
                    getLatestChargeForRefund: e.query({
                        query: e => {
                            let {
                                teamId: l
                            } = e;
                            return {
                                url: "teams/".concat(l, "/latest-charge"),
                                method: "GET",
                                requiresAuth: !0
                            }
                        },
                        transformResponse: e => (0, n.x)(e)
                    }),
                    refundAndCancelSubscription: e.mutation({
                        query: e => {
                            let {
                                teamId: l,
                                chargeId: t
                            } = e;
                            return {
                                url: "teams/".concat(l, "/subscription/cancel-and-refund"),
                                method: "POST",
                                requiresAuth: !0,
                                data: {
                                    chargeId: t
                                }
                            }
                        },
                        transformResponse: e => (0, n.x)(e)
                    }),
                    setupPaymentMethod: e.mutation({
                        query: e => {
                            let {
                                teamId: l,
                                billingInfo: t,
                                minimumCommitmentSeats: a,
                                isGuestAuth: i = !1,
                                useMoneta: r = !1
                            } = e;
                            return {
                                url: "teams/".concat(l, "/payment-method-setup"),
                                method: "POST",
                                requiresAuth: !0,
                                requiresGuestAuth: i,
                                headers: {
                                    "X-Payment-Provider": r ? "moneta" : "stripe"
                                },
                                data: {
                                    ...t,
                                    minimumCommitmentSeats: a
                                }
                            }
                        },
                        transformResponse: e => (0, n.x)(e)
                    }),
                    describePaymentMethod: e.mutation({
                        query: e => {
                            let {
                                teamId: l,
                                setupIntentId: t,
                                isGuestAuth: a = !1
                            } = e;
                            return {
                                url: "teams/".concat(l, "/payment-methods/describe"),
                                method: "POST",
                                requiresAuth: !0,
                                requiresGuestAuth: a,
                                data: {
                                    setupIntentId: t
                                }
                            }
                        },
                        transformResponse: e => (0, n.x)(e)
                    }),
                    paidSubscription: e.mutation({
                        query: e => {
                            let {
                                teamId: l,
                                payload: t,
                                isGuestAuth: a = !1,
                                useMoneta: i = !1
                            } = e;
                            return {
                                url: "teams/".concat(l, "/paid-subscription"),
                                method: "POST",
                                requiresAuth: !0,
                                requiresGuestAuth: a,
                                headers: {
                                    "X-Payment-Provider": i ? "moneta" : "stripe"
                                },
                                data: {
                                    ...t
                                }
                            }
                        },
                        transformResponse: e => (0, n.x)(e)
                    }),
                    getSubscriptionStatus: e.query({
                        query: e => {
                            let {
                                teamId: l,
                                isGuestAuth: t = !1
                            } = e;
                            return {
                                url: "teams/".concat(encodeURIComponent(l), "/subscription/status"),
                                method: "GET",
                                requiresAuth: !0,
                                requiresGuestAuth: t
                            }
                        },
                        transformResponse: e => ({
                            tier: e.tier,
                            status: e.status
                        }),
                        providesTags: (e, l, t) => {
                            let {
                                teamId: a
                            } = t;
                            return e ? [{
                                type: "Workspace",
                                id: a
                            }] : []
                        }
                    }),
                    updateGuestEmail: e.mutation({
                        query: e => {
                            let {
                                email: l,
                                isGuestAuth: t = !1
                            } = e;
                            return {
                                url: "guest-checkout/user/email",
                                method: "PATCH",
                                requiresAuth: !0,
                                requiresGuestAuth: t,
                                data: {
                                    email: l
                                }
                            }
                        }
                    }),
                    freeSeat: e.mutation({
                        query: e => {
                            let {
                                teamId: l,
                                userId: t
                            } = e;
                            return {
                                url: "teams/".concat(l, "/seats/free/").concat(t),
                                method: "DELETE",
                                requiresAuth: !0
                            }
                        },
                        invalidatesTags: (e, l, t) => {
                            let {
                                teamId: a
                            } = t;
                            return !l && a ? [{
                                type: "Workspace",
                                id: a
                            }] : []
                        }
                    }),
                    getDomainStatus: e.query({
                        providesTags: ["Domain"],
                        query: () => ({
                            url: "teams/domain",
                            method: "GET",
                            requiresAuth: !0
                        }),
                        transformResponse: e => (0, n.x)(e)
                    }),
                    requestWorkspaceInvitation: e.mutation({
                        query: e => {
                            let {
                                teamId: l
                            } = e;
                            return {
                                url: "teams/".concat(l, "/invites/request"),
                                method: "POST",
                                requiresAuth: !0
                            }
                        }
                    }),
                    setMinimumCommitmentSeats: e.mutation({
                        query: e => {
                            let {
                                teamId: l,
                                minimumCommitmentSeats: t
                            } = e;
                            return {
                                url: "teams/".concat(l, "/minimum-commitment-seats"),
                                method: "POST",
                                requiresAuth: !0,
                                data: {
                                    minimumCommitmentSeats: t
                                }
                            }
                        }
                    }),
                    updateRenewalReminder: e.mutation({
                        query: e => {
                            let {
                                teamId: l,
                                enabled: t
                            } = e;
                            return {
                                url: "teams/".concat(l, "/renewal-reminder"),
                                method: "PUT",
                                requiresAuth: !0,
                                data: {
                                    enabled: t
                                }
                            }
                        }
                    }),
                    setupTeamsTrial: e.mutation({
                        query: e => {
                            let {
                                freeTrialDays: l,
                                priceAndPackageToken: t,
                                teamId: a,
                                quantity: i
                            } = e;
                            return {
                                url: "teams/".concat(a, "/teams-trial/setup"),
                                method: "POST",
                                requiresAuth: !0,
                                data: {
                                    freeTrialDays: l,
                                    priceAndPackageToken: t,
                                    quantity: i
                                }
                            }
                        }
                    }),
                    inviteITManagerTeamsTrial: e.mutation({
                        query: e => {
                            let {
                                teamId: l,
                                email: t
                            } = e;
                            return {
                                url: "teams/".concat(l, "/invites"),
                                method: "POST",
                                requiresAuth: !0,
                                data: {
                                    invites: [{
                                        email: t,
                                        role: "Admin"
                                    }]
                                }
                            }
                        },
                        invalidatesTags: (e, l, t) => {
                            let {
                                teamId: a
                            } = t;
                            return e && a ? [{
                                type: "Workspace",
                                id: a
                            }] : []
                        },
                        transformResponse: e => (0, n.x)(e.invites)[0]
                    }),
                    updatePaymentMethod: e.mutation({
                        query: e => {
                            let {
                                teamId: l,
                                setupIntentId: t
                            } = e;
                            return {
                                url: "teams/".concat(l, "/payment-method"),
                                method: "POST",
                                requiresAuth: !0,
                                data: {
                                    setupIntentId: t
                                }
                            }
                        },
                        invalidatesTags: (e, l, t) => {
                            let {
                                teamId: a
                            } = t;
                            return e && a ? [{
                                type: "Workspace",
                                id: a
                            }, {
                                type: "PaymentMethods",
                                id: a
                            }] : []
                        },
                        transformResponse: e => (0, n.x)(e)
                    }),
                    listPaymentMethods: e.query({
                        query: e => {
                            let {
                                teamId: l
                            } = e;
                            return {
                                url: "teams/".concat(l, "/payment-methods"),
                                method: "GET",
                                requiresAuth: !0
                            }
                        },
                        transformResponse: e => (0, n.x)(e.paymentMethods),
                        providesTags: (e, l, t) => {
                            let {
                                teamId: a
                            } = t;
                            return e && a ? [{
                                type: "PaymentMethods",
                                id: a
                            }] : []
                        }
                    }),
                    deletePaymentMethod: e.mutation({
                        query: e => {
                            let {
                                teamId: l,
                                paymentMethodId: t
                            } = e;
                            return {
                                url: "teams/".concat(l, "/payment-methods/").concat(t),
                                method: "DELETE",
                                requiresAuth: !0
                            }
                        },
                        invalidatesTags: (e, l, t) => {
                            let {
                                teamId: a
                            } = t;
                            return !l && a ? [{
                                type: "PaymentMethods",
                                id: a
                            }] : []
                        }
                    }),
                    setDefaultPaymentMethod: e.mutation({
                        query: e => {
                            let {
                                teamId: l,
                                paymentMethodId: t
                            } = e;
                            return {
                                url: "teams/".concat(l, "/payment-methods/").concat(t, "/default"),
                                method: "POST",
                                requiresAuth: !0
                            }
                        },
                        invalidatesTags: (e, l, t) => {
                            let {
                                teamId: a
                            } = t;
                            return !l && a ? [{
                                type: "PaymentMethods",
                                id: a
                            }] : []
                        }
                    }),
                    getSamlSsoConfig: e.query({
                        query: e => {
                            let {
                                teamId: l
                            } = e;
                            return {
                                url: "teams/saml/config",
                                method: "GET",
                                requiresAuth: !0,
                                params: {
                                    team_id: l
                                }
                            }
                        },
                        providesTags: (e, l, t) => {
                            let {
                                teamId: a
                            } = t;
                            return e && a ? [{
                                type: "SamlSsoConfig",
                                id: a
                            }] : []
                        },
                        transformResponse: e => (0, n.x)(e)
                    }),
                    updateSamlSsoConfig: e.mutation({
                        query: e => {
                            let {
                                ssoUrl: l,
                                certificate: t,
                                enabled: a,
                                teamId: i
                            } = e;
                            return {
                                url: "teams/saml/config",
                                method: "POST",
                                requiresAuth: !0,
                                data: {
                                    sso_url: l,
                                    certificate: t,
                                    enabled: a,
                                    team_id: i
                                }
                            }
                        },
                        invalidatesTags: (e, l, t) => {
                            let {
                                teamId: a
                            } = t;
                            return e && a ? [{
                                type: "SamlSsoConfig",
                                id: a
                            }] : []
                        },
                        transformResponse: e => (0, n.x)(e)
                    }),
                    getSubscriptionDetails: e.query({
                        query: e => {
                            let {
                                teamId: l
                            } = e;
                            return {
                                url: "teams/".concat(l, "/subscription/details"),
                                method: "GET",
                                requiresAuth: !0
                            }
                        },
                        transformResponse: e => (0, n.x)(e),
                        providesTags: (e, l, t) => {
                            let {
                                teamId: a
                            } = t;
                            return e && a ? [{
                                type: "Workspace",
                                id: a
                            }] : []
                        }
                    }),
                    downloadMonetaInvoice: e.mutation({
                        query: e => {
                            let {
                                teamId: l,
                                invoiceId: t
                            } = e;
                            return {
                                url: "teams/".concat(l, "/invoices/moneta/").concat(t, "/download"),
                                method: "GET",
                                requiresAuth: !0,
                                responseType: "blob"
                            }
                        },
                        transformResponse: e => e
                    })
                })
            })
        },
        22844: (e, l, t) => {
            "use strict";
            t.d(l, {
                J: () => n
            });
            var a = t(87676),
                i = t(88848),
                r = t(62760);
            let n = e => {
                let {
                    settings: l
                } = (0, r.k)(), {
                    hasRedeemedFreeTrial: t
                } = (0, a.J)(), n = e === i.vW.TW_TRANSFER_SIZE_LIMIT_HIT || e === i.vW.TRANSFER_SIZE_ALERT_TOOLTIP;
                return {
                    canSeeFreeTrialForThisTrigger: n && l.transfer_size_limit_free_trial_enabled && !t,
                    isTriggerSpecificSetting: n && l.transfer_size_limit_free_trial_enabled
                }
            }
        },
        24028: (e, l, t) => {
            "use strict";
            t.d(l, {
                A: () => r
            });
            var a = t(23798),
                i = t(15321);
            let r = e => {
                let {
                    className: l,
                    color: t = i.W5,
                    circleStrokeWidth: r = 2
                } = e;
                return (0, a.jsxs)("svg", {
                    className: l,
                    viewBox: "0 0 64 64",
                    fill: "none",
                    children: [(0, a.jsx)("circle", {
                        cx: "32",
                        cy: "32",
                        r: "31",
                        stroke: t,
                        strokeWidth: r
                    }), (0, a.jsx)("path", {
                        d: "M18.667 32.667L29.333 42l16-17.333",
                        stroke: t,
                        strokeWidth: "2.667",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })]
                })
            }
        },
        24282: (e, l, t) => {
            "use strict";
            t.d(l, {
                g: () => s
            });
            var a = t(38169),
                i = t(62760),
                r = t(26573);
            let n = ["CH", "SE"],
                s = () => {
                    let {
                        settings: e
                    } = (0, i.k)(), l = (0, a.d4)(r.AP);
                    return e.is_bypass_anonymous_users_transfer_size_limit_enabled && n.includes(l)
                }
        },
        24595: e => {
            e.exports = {
                "wt-display-heading-x-small-bold": "PaywallPerk_wt-display-heading-x-small-bold__N62OJ",
                "wt-display-heading-small-bold-narrow": "PaywallPerk_wt-display-heading-small-bold-narrow__ibMUC",
                "wt-display-heading-small-bold": "PaywallPerk_wt-display-heading-small-bold__TclRs",
                "wt-display-heading-small-bold-wide": "PaywallPerk_wt-display-heading-small-bold-wide__6olHi",
                "wt-display-heading-small-narrow": "PaywallPerk_wt-display-heading-small-narrow__Zi4X_",
                "wt-display-heading-small": "PaywallPerk_wt-display-heading-small__AewlM",
                "wt-display-heading-small-wide": "PaywallPerk_wt-display-heading-small-wide__eD_Ig",
                "wt-display-heading-medium-bold-narrow": "PaywallPerk_wt-display-heading-medium-bold-narrow___ArYd",
                "wt-display-heading-medium-bold": "PaywallPerk_wt-display-heading-medium-bold__D1c65",
                "wt-display-heading-medium-bold-wide": "PaywallPerk_wt-display-heading-medium-bold-wide__hGT_j",
                "wt-display-heading-medium-narrow": "PaywallPerk_wt-display-heading-medium-narrow__HHHM8",
                "wt-display-heading-medium": "PaywallPerk_wt-display-heading-medium__euf_X",
                "wt-display-heading-medium-wide": "PaywallPerk_wt-display-heading-medium-wide__cMbYw",
                "wt-display-heading-large-bold-narrow": "PaywallPerk_wt-display-heading-large-bold-narrow__m_8_o",
                "wt-display-heading-large-bold": "PaywallPerk_wt-display-heading-large-bold__SeC1f",
                "wt-display-heading-large-bold-wide": "PaywallPerk_wt-display-heading-large-bold-wide__tQn3x",
                "wt-display-heading-large-narrow": "PaywallPerk_wt-display-heading-large-narrow__po5Cm",
                "wt-display-heading-large": "PaywallPerk_wt-display-heading-large__gEi_y",
                "wt-display-heading-large-wide": "PaywallPerk_wt-display-heading-large-wide__cLZey",
                "wt-display-heading": "PaywallPerk_wt-display-heading__Bp6eT",
                "wt-sub-heading": "PaywallPerk_wt-sub-heading__Icnn6",
                "wt-text-heading-small-bold-narrow": "PaywallPerk_wt-text-heading-small-bold-narrow__GumUD",
                "wt-text-heading-small-bold": "PaywallPerk_wt-text-heading-small-bold__zUZbp",
                "wt-text-heading-small-bold-wide": "PaywallPerk_wt-text-heading-small-bold-wide__3dsK6",
                "wt-text-heading-small-narrow": "PaywallPerk_wt-text-heading-small-narrow__Z9Hwd",
                "wt-text-heading-small": "PaywallPerk_wt-text-heading-small__Q_zwr",
                "wt-text-heading-small-wide": "PaywallPerk_wt-text-heading-small-wide__Fn67g",
                "wt-text-heading-medium-bold": "PaywallPerk_wt-text-heading-medium-bold__eIoi9",
                "wt-text-heading-medium-bold-wide": "PaywallPerk_wt-text-heading-medium-bold-wide__m4Qv0",
                "wt-text-heading-medium-semi-narrow": "PaywallPerk_wt-text-heading-medium-semi-narrow__re2aN",
                "wt-text-heading-medium-narrow": "PaywallPerk_wt-text-heading-medium-narrow__rIMwf",
                "wt-text-heading-medium-semi": "PaywallPerk_wt-text-heading-medium-semi__o4Lpx",
                "wt-text-heading-medium-semi-wide": "PaywallPerk_wt-text-heading-medium-semi-wide__d0Oe4",
                "wt-text-heading-medium": "PaywallPerk_wt-text-heading-medium__EgRDl",
                "wt-text-heading-medium-wide": "PaywallPerk_wt-text-heading-medium-wide__Gcpik",
                "wt-text-heading-large-bold-narrow": "PaywallPerk_wt-text-heading-large-bold-narrow__IgzBd",
                "wt-text-heading-large-bold": "PaywallPerk_wt-text-heading-large-bold___ReaI",
                "wt-text-heading-large-bold-wide": "PaywallPerk_wt-text-heading-large-bold-wide__V1yir",
                "wt-text-heading-large-narrow": "PaywallPerk_wt-text-heading-large-narrow__GnZTM",
                "wt-text-heading-large": "PaywallPerk_wt-text-heading-large__m7chB",
                "wt-text-heading-large-wide": "PaywallPerk_wt-text-heading-large-wide__Fc4E8",
                "wt-text-heading-x-large-narrow": "PaywallPerk_wt-text-heading-x-large-narrow__rR4Oj",
                "wt-text-heading-x-large": "PaywallPerk_wt-text-heading-x-large__zEZNj",
                "wt-text-heading-x-large-wide": "PaywallPerk_wt-text-heading-x-large-wide__XtCQh",
                "wt-text-heading": "PaywallPerk_wt-text-heading__eYu6u",
                "wt-body-x-small-semi": "PaywallPerk_wt-body-x-small-semi__ABHrA",
                "wt-body-x-small": "PaywallPerk_wt-body-x-small__nex4V",
                "wt-body-small-bold": "PaywallPerk_wt-body-small-bold__UySiE",
                "wt-body-small-semi": "PaywallPerk_wt-body-small-semi__w9yg6",
                "wt-body-small": "PaywallPerk_wt-body-small__PKZBE",
                perkDescription: "PaywallPerk_perkDescription__er2RZ",
                "wt-body-medium-bold": "PaywallPerk_wt-body-medium-bold__PpFoT",
                perkTitle: "PaywallPerk_perkTitle__Zc_8v",
                "wt-body-medium-semi": "PaywallPerk_wt-body-medium-semi__nogfl",
                "wt-body-medium": "PaywallPerk_wt-body-medium__HKH4X",
                medium: "PaywallPerk_medium__u4F4U",
                "wt-body-large-bold": "PaywallPerk_wt-body-large-bold__8fGKc",
                "wt-body-large": "PaywallPerk_wt-body-large__F8lC3",
                large: "PaywallPerk_large__Gy7Sx",
                "wt-body-x-large": "PaywallPerk_wt-body-x-large__61zyT",
                "wt-label-x-small-bold": "PaywallPerk_wt-label-x-small-bold__LfVWl",
                "wt-label-x-small-semi": "PaywallPerk_wt-label-x-small-semi__GHZE3",
                "wt-label-x-small": "PaywallPerk_wt-label-x-small__SCvVM",
                "wt-label-small-bold": "PaywallPerk_wt-label-small-bold__ixdUo",
                "wt-label-small-semi": "PaywallPerk_wt-label-small-semi__lh1my",
                "wt-label-small": "PaywallPerk_wt-label-small__qSNWB",
                "wt-label-medium-bold": "PaywallPerk_wt-label-medium-bold__ndAFb",
                "wt-label-medium-semi": "PaywallPerk_wt-label-medium-semi__GBr6V",
                "wt-label-medium": "PaywallPerk_wt-label-medium__MwyaQ",
                "wt-label-large-bold": "PaywallPerk_wt-label-large-bold__Zy1cN",
                "wt-label-large-semi": "PaywallPerk_wt-label-large-semi__wTHqz",
                "wt-label-large": "PaywallPerk_wt-label-large____w70",
                perk: "PaywallPerk_perk___fx0y",
                perkText: "PaywallPerk_perkText__qtcUS",
                perkIcon: "PaywallPerk_perkIcon__5y7Qd",
                perkIconDisabled: "PaywallPerk_perkIconDisabled__zSHky",
                perkIconZap: "PaywallPerk_perkIconZap__28BT7",
                largeIcon: "PaywallPerk_largeIcon__kijHI"
            }
        },
        24761: (e, l, t) => {
            "use strict";
            t.d(l, {
                C_: () => c,
                Mq: () => u,
                OT: () => p,
                SI: () => g,
                W8: () => w,
                qJ: () => m
            });
            var a = t(72590),
                i = t(36337),
                r = t(2749),
                n = t(87963),
                s = t(86781),
                d = t(26573),
                o = t(72546),
                _ = t(86248);
            let {
                initiatePaywallFlow: c,
                setPredictionInfo: u,
                completePaywallFlow: w
            } = t(74452).R.actions, m = e => {
                let {
                    paywallInfo: l,
                    predictionInfo: t,
                    paywallStyleOverride: u
                } = e;
                return (e, w) => {
                    var m;
                    let p = (0, _.zs)(w()),
                        g = null == p || null == (m = p.paywallInfo) ? void 0 : m.style,
                        h = (0, _.KO)(w()),
                        y = null != u ? u : l.style;
                    if (h && g === y) return void(0, n.Od)().trackUserAction(i.$.paywallDisplayed(h, (0, _.zs)(w())));
                    let x = (0, a.A)(),
                        f = (0, o.Kj)(w()),
                        v = (0, s.mB)(w());
                    e(c({
                        paywallId: x,
                        paywallInfo: l,
                        predictionInfo: t,
                        transferInfo: (0, r.SU)(f),
                        senderInfo: (0, r.el)(v)
                    })), (async () => {
                        let e;
                        try {
                            e = await (0, r.CL)((0, d.zj)(w()))
                        } catch (l) {
                            e = void 0
                        }(0, n.Od)().trackUserAction(i.$.paywallDisplayed(x, (0, _.zs)(w()), e))
                    })()
                }
            }, p = () => (e, l) => {
                let t = (0, _.KO)(l());
                void 0 !== t && (e(w()), (0, n.Od)().trackUserAction(i.$.paywallDismissed(t)))
            }, g = (e, l) => () => {
                void 0 !== e && (0, n.Od)().trackUserAction(i.$.paywallUserConverted(e, l))
            }
        },
        25330: (e, l, t) => {
            "use strict";
            t.d(l, {
                A: () => s,
                G: () => n
            });
            var a = t(30530),
                i = t(21462),
                r = t(38169);
            let n = () => {
                    let {
                        hasActiveSubscription: e,
                        isUserVerified: l
                    } = (0, r.d4)(e => ({
                        hasActiveSubscription: e.account.active_subscription,
                        isUserVerified: e.user.isVerified
                    }));
                    return l && e
                },
                s = (e, l, t) => {
                    (0, i.useEffect)(() => {
                        !e && Object.keys(l).length > 0 && a.yf.logger.error("Could not find entitlement ".concat(t))
                    }, [e, t, l])
                }
        },
        26094: (e, l, t) => {
            "use strict";
            t.d(l, {
                PE: () => $,
                iW: () => K,
                _n: () => Y,
                Vh: () => q,
                rI: () => G,
                XE: () => J,
                mN: () => X,
                fY: () => Q
            });
            var a, i, r, n, s, d, o, _, c, u, w, m, p = t(23798),
                g = t(21462),
                h = t(46001),
                y = t.n(h),
                x = t(56076),
                f = t.n(x);
            let v = e => {
                let {
                    className: l,
                    svg: t,
                    stroke: a,
                    fill: i = "none",
                    color: r,
                    viewBox: n = "0 0 24 24",
                    height: s = 24,
                    width: d = 24,
                    role: o,
                    ..._
                } = e;
                return g.createElement(t, {
                    className: y()("Icon", l),
                    stroke: "none" === a ? "none" : f()[a],
                    fill: "none" === i ? "none" : f()[i],
                    color: f()[r],
                    viewBox: n,
                    height: s,
                    width: d,
                    role: o,
                    ..._
                })
            };
            var b = ["title", "titleId"];

            function L() {
                return (L = Object.assign ? Object.assign.bind() : function(e) {
                    for (var l = 1; l < arguments.length; l++) {
                        var t = arguments[l];
                        for (var a in t)({}).hasOwnProperty.call(t, a) && (e[a] = t[a])
                    }
                    return e
                }).apply(null, arguments)
            }
            var E = function(e) {
                    var l = e.title,
                        t = e.titleId,
                        n = function(e, l) {
                            if (null == e) return {};
                            var t, a, i = function(e, l) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if (({}).hasOwnProperty.call(e, a)) {
                                        if (-1 !== l.indexOf(a)) continue;
                                        t[a] = e[a]
                                    } return t
                            }(e, l);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                for (a = 0; a < r.length; a++) t = r[a], -1 === l.indexOf(t) && ({}).propertyIsEnumerable.call(e, t) && (i[t] = e[t])
                            }
                            return i
                        }(e, b);
                    return g.createElement("svg", L({
                        width: 40,
                        height: 40,
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-labelledby": t
                    }, n), l ? g.createElement("title", {
                        id: t
                    }, l) : null, a || (a = g.createElement("path", {
                        d: "M20 .001C8.911-.076 1.978 4.406.536 13.88.187 16.164 0 18.1 0 20c0 1.89.187 3.834.536 6.12C1.978 35.594 8.914 40.076 20 40c11.087.077 18.02-4.405 19.464-13.879.349-2.284.536-4.22.536-6.12 0-1.89-.187-3.834-.536-6.12C38.02 4.406 31.087-.076 20 0Z",
                        fill: "#5268FF"
                    })), i || (i = g.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M20 2.001h-.014c-5.3-.037-9.35 1.022-12.194 3-2.786 1.938-4.628 4.905-5.28 9.18C2.175 16.407 2 18.235 2 20c0 1.756.174 3.593.513 5.819.65 4.275 2.493 7.242 5.28 9.18 2.844 1.978 6.894 3.037 12.193 3h.028c5.3.037 9.348-1.022 12.192-3 2.787-1.938 4.63-4.906 5.281-9.18.34-2.224.513-4.053.513-5.819 0-1.756-.174-3.593-.513-5.819l1.933-.294-1.933.294c-.651-4.274-2.494-7.242-5.28-9.18-2.845-1.978-6.894-3.037-12.193-3H20ZM.536 13.88C1.978 4.406 8.91-.076 20 0 31.087-.076 38.02 4.406 39.464 13.88c.349 2.286.536 4.23.536 6.12 0 1.9-.187 3.836-.536 6.12C38.02 35.594 31.087 40.076 20 40 8.914 40.076 1.978 35.594.536 26.12.187 23.834 0 21.89 0 20c0-1.9.187-3.836.536-6.12Z",
                        fill: "currentColor"
                    })), r || (r = g.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "m16.352 14.01-.407.9h-1.763A2.182 2.182 0 0 0 12 17.09v8c0 1.206.977 2.183 2.182 2.183h11.636A2.182 2.182 0 0 0 28 25.09v-8a2.182 2.182 0 0 0-2.182-2.182H24.1l-.57-1.045a2.182 2.182 0 0 0-1.915-1.137H18.34c-.857 0-1.635.502-1.988 1.282Zm-2.17 2.354h2.701l.794-1.755a.727.727 0 0 1 .663-.427h3.274c.266 0 .51.145.638.379l.984 1.803h2.582c.402 0 .727.325.727.727v8a.727.727 0 0 1-.727.727H14.182a.727.727 0 0 1-.728-.727v-8c0-.402.326-.727.728-.727ZM20 22.909a2.182 2.182 0 1 0 0-4.363 2.182 2.182 0 0 0 0 4.363Zm-3.636-2.182a3.636 3.636 0 1 0 7.272 0 3.636 3.636 0 0 0-7.272 0Z",
                        fill: "currentColor"
                    })))
                },
                S = ["title", "titleId"];

            function C() {
                return (C = Object.assign ? Object.assign.bind() : function(e) {
                    for (var l = 1; l < arguments.length; l++) {
                        var t = arguments[l];
                        for (var a in t)({}).hasOwnProperty.call(t, a) && (e[a] = t[a])
                    }
                    return e
                }).apply(null, arguments)
            }
            var A = function(e) {
                    var l = e.title,
                        t = e.titleId,
                        a = function(e, l) {
                            if (null == e) return {};
                            var t, a, i = function(e, l) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if (({}).hasOwnProperty.call(e, a)) {
                                        if (-1 !== l.indexOf(a)) continue;
                                        t[a] = e[a]
                                    } return t
                            }(e, l);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                for (a = 0; a < r.length; a++) t = r[a], -1 === l.indexOf(t) && ({}).propertyIsEnumerable.call(e, t) && (i[t] = e[t])
                            }
                            return i
                        }(e, S);
                    return g.createElement("svg", C({
                        width: 24,
                        height: 24,
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-labelledby": t
                    }, a), l ? g.createElement("title", {
                        id: t
                    }, l) : null, n || (n = g.createElement("path", {
                        d: "M9.472 18.373c.67.66 1.774.556 2.31-.217L18.91 7.85a1.516 1.516 0 0 0-2.493-1.722l-6.104 8.822-3.37-3.316a1.516 1.516 0 0 0-2.126 2.158l4.655 4.58Z",
                        fill: "currentColor"
                    })))
                },
                P = ["title", "titleId"];

            function T() {
                return (T = Object.assign ? Object.assign.bind() : function(e) {
                    for (var l = 1; l < arguments.length; l++) {
                        var t = arguments[l];
                        for (var a in t)({}).hasOwnProperty.call(t, a) && (e[a] = t[a])
                    }
                    return e
                }).apply(null, arguments)
            }
            var k = function(e) {
                    var l = e.title,
                        t = e.titleId,
                        a = function(e, l) {
                            if (null == e) return {};
                            var t, a, i = function(e, l) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if (({}).hasOwnProperty.call(e, a)) {
                                        if (-1 !== l.indexOf(a)) continue;
                                        t[a] = e[a]
                                    } return t
                            }(e, l);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                for (a = 0; a < r.length; a++) t = r[a], -1 === l.indexOf(t) && ({}).propertyIsEnumerable.call(e, t) && (i[t] = e[t])
                            }
                            return i
                        }(e, P);
                    return g.createElement("svg", T({
                        width: 24,
                        height: 24,
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-labelledby": t
                    }, a), l ? g.createElement("title", {
                        id: t
                    }, l) : null, s || (s = g.createElement("path", {
                        d: "M5 11.167 10.895 17 19 7",
                        stroke: "currentColor",
                        strokeWidth: 1.5,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })))
                },
                R = ["title", "titleId"];

            function I() {
                return (I = Object.assign ? Object.assign.bind() : function(e) {
                    for (var l = 1; l < arguments.length; l++) {
                        var t = arguments[l];
                        for (var a in t)({}).hasOwnProperty.call(t, a) && (e[a] = t[a])
                    }
                    return e
                }).apply(null, arguments)
            }
            var j = function(e) {
                    var l = e.title,
                        t = e.titleId,
                        a = function(e, l) {
                            if (null == e) return {};
                            var t, a, i = function(e, l) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if (({}).hasOwnProperty.call(e, a)) {
                                        if (-1 !== l.indexOf(a)) continue;
                                        t[a] = e[a]
                                    } return t
                            }(e, l);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                for (a = 0; a < r.length; a++) t = r[a], -1 === l.indexOf(t) && ({}).propertyIsEnumerable.call(e, t) && (i[t] = e[t])
                            }
                            return i
                        }(e, R);
                    return g.createElement("svg", I({
                        width: 32,
                        height: 32,
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-labelledby": t
                    }, a), l ? g.createElement("title", {
                        id: t
                    }, l) : null, d || (d = g.createElement("path", {
                        d: "M26.667 10.667 16 21.333 5.333 10.667",
                        stroke: "currentColor",
                        strokeWidth: 1.5,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })))
                },
                M = ["title", "titleId"];

            function O() {
                return (O = Object.assign ? Object.assign.bind() : function(e) {
                    for (var l = 1; l < arguments.length; l++) {
                        var t = arguments[l];
                        for (var a in t)({}).hasOwnProperty.call(t, a) && (e[a] = t[a])
                    }
                    return e
                }).apply(null, arguments)
            }
            var N = function(e) {
                    var l = e.title,
                        t = e.titleId,
                        a = function(e, l) {
                            if (null == e) return {};
                            var t, a, i = function(e, l) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if (({}).hasOwnProperty.call(e, a)) {
                                        if (-1 !== l.indexOf(a)) continue;
                                        t[a] = e[a]
                                    } return t
                            }(e, l);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                for (a = 0; a < r.length; a++) t = r[a], -1 === l.indexOf(t) && ({}).propertyIsEnumerable.call(e, t) && (i[t] = e[t])
                            }
                            return i
                        }(e, M);
                    return g.createElement("svg", O({
                        fill: "none",
                        height: 24,
                        width: 24,
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-labelledby": t
                    }, a), l ? g.createElement("title", {
                        id: t
                    }, l) : null, o || (o = g.createElement("path", {
                        clipRule: "evenodd",
                        d: "M4.677 10.364a2.313 2.313 0 0 0 0 3.271l9.688 9.688a2.313 2.313 0 0 0 3.27-3.271l-8.028-8.075 8.029-8.029a2.313 2.313 0 0 0-3.271-3.27z",
                        fill: "currentColor",
                        fillRule: "evenodd"
                    })))
                },
                F = ["title", "titleId"];

            function U() {
                return (U = Object.assign ? Object.assign.bind() : function(e) {
                    for (var l = 1; l < arguments.length; l++) {
                        var t = arguments[l];
                        for (var a in t)({}).hasOwnProperty.call(t, a) && (e[a] = t[a])
                    }
                    return e
                }).apply(null, arguments)
            }
            var D = function(e) {
                    var l = e.title,
                        t = e.titleId,
                        a = function(e, l) {
                            if (null == e) return {};
                            var t, a, i = function(e, l) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if (({}).hasOwnProperty.call(e, a)) {
                                        if (-1 !== l.indexOf(a)) continue;
                                        t[a] = e[a]
                                    } return t
                            }(e, l);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                for (a = 0; a < r.length; a++) t = r[a], -1 === l.indexOf(t) && ({}).propertyIsEnumerable.call(e, t) && (i[t] = e[t])
                            }
                            return i
                        }(e, F);
                    return g.createElement("svg", U({
                        width: 24,
                        height: 24,
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-labelledby": t
                    }, a), l ? g.createElement("title", {
                        id: t
                    }, l) : null, _ || (_ = g.createElement("path", {
                        d: "m5 5 7 7m7 7-7-7m0 0 7-7L5 19",
                        stroke: "#707070",
                        strokeWidth: 1.5,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })))
                },
                z = ["title", "titleId"];

            function W() {
                return (W = Object.assign ? Object.assign.bind() : function(e) {
                    for (var l = 1; l < arguments.length; l++) {
                        var t = arguments[l];
                        for (var a in t)({}).hasOwnProperty.call(t, a) && (e[a] = t[a])
                    }
                    return e
                }).apply(null, arguments)
            }
            var B = function(e) {
                    var l = e.title,
                        t = e.titleId,
                        a = function(e, l) {
                            if (null == e) return {};
                            var t, a, i = function(e, l) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if (({}).hasOwnProperty.call(e, a)) {
                                        if (-1 !== l.indexOf(a)) continue;
                                        t[a] = e[a]
                                    } return t
                            }(e, l);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                for (a = 0; a < r.length; a++) t = r[a], -1 === l.indexOf(t) && ({}).propertyIsEnumerable.call(e, t) && (i[t] = e[t])
                            }
                            return i
                        }(e, z);
                    return g.createElement("svg", W({
                        width: 24,
                        height: 25,
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-labelledby": t
                    }, a), l ? g.createElement("title", {
                        id: t
                    }, l) : null, c || (c = g.createElement("g", {
                        clipPath: "url(#icon-collect_svg__a)"
                    }, g.createElement("path", {
                        d: "M12 .501C5.347.455 1.187 3.144.321 8.83.112 10.199 0 11.36 0 12.5c0 1.134.112 2.3.321 3.672C1.187 21.857 5.348 24.546 12 24.5c6.652.046 10.812-2.643 11.679-8.327.209-1.37.321-2.532.321-3.672 0-1.135-.112-2.3-.321-3.672C22.812 3.144 18.652.455 12 .5Z",
                        fill: "#fff"
                    }), g.createElement("path", {
                        d: "M11.347 16.737c0 1.406-.898 2.39-2.547 2.39-1.648 0-2.645-1.043-2.645-2.39 0-1.346 1.014-2.246 2.547-2.246 1.533 0 2.645.75 2.645 2.246Z",
                        fill: "#5115AA"
                    }), g.createElement("path", {
                        d: "M17.308 6.54c.739.807.72 2.006.494 3.03-.184.837-.853 1.242-1.705.959-1.148-.38-3.029-1.927-3.581-2.824-.274-.443-.274-1.31.76-1.605.909-.26 3.294-.368 4.032.44Z",
                        fill: "#F9C346"
                    }), g.createElement("path", {
                        d: "M15.132 19.127c2.155 0 2.824-1.915 2.824-3.896 0-1.981-.686-3.897-2.824-3.897-2.137 0-2.832 1.916-2.832 3.897 0 1.98.678 3.896 2.832 3.896Z",
                        fill: "#F36464"
                    }), g.createElement("path", {
                        d: "M8.746 13.554C6.155 13.554 6 11.875 6 9.862S6.146 5.9 8.746 5.9s2.756 1.95 2.756 3.962c0 2.18-.166 3.692-2.756 3.692Z",
                        fill: "#FF904B"
                    }))), u || (u = g.createElement("defs", null, g.createElement("clipPath", {
                        id: "icon-collect_svg__a"
                    }, g.createElement("path", {
                        d: "M0 5.619A5.119 5.119 0 0 1 5.119.5h13.762A5.119 5.119 0 0 1 24 5.619v13.762a5.119 5.119 0 0 1-5.119 5.119H5.119A5.119 5.119 0 0 1 0 19.381V5.619Z",
                        fill: "#fff"
                    })))))
                },
                H = ["title", "titleId"];

            function V() {
                return (V = Object.assign ? Object.assign.bind() : function(e) {
                    for (var l = 1; l < arguments.length; l++) {
                        var t = arguments[l];
                        for (var a in t)({}).hasOwnProperty.call(t, a) && (e[a] = t[a])
                    }
                    return e
                }).apply(null, arguments)
            }
            var Z = function(e) {
                var l = e.title,
                    t = e.titleId,
                    a = function(e, l) {
                        if (null == e) return {};
                        var t, a, i = function(e, l) {
                            if (null == e) return {};
                            var t = {};
                            for (var a in e)
                                if (({}).hasOwnProperty.call(e, a)) {
                                    if (-1 !== l.indexOf(a)) continue;
                                    t[a] = e[a]
                                } return t
                        }(e, l);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            for (a = 0; a < r.length; a++) t = r[a], -1 === l.indexOf(t) && ({}).propertyIsEnumerable.call(e, t) && (i[t] = e[t])
                        }
                        return i
                    }(e, H);
                return g.createElement("svg", V({
                    width: 24,
                    height: 25,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-labelledby": t
                }, a), l ? g.createElement("title", {
                    id: t
                }, l) : null, w || (w = g.createElement("g", {
                    clipPath: "url(#icon-paste_svg__a)"
                }, g.createElement("path", {
                    d: "M12 .501C5.347.455 1.187 3.144.321 8.83.112 10.199 0 11.36 0 12.5c0 1.134.112 2.3.321 3.672C1.187 21.857 5.348 24.546 12 24.5c6.652.046 10.812-2.643 11.679-8.327.209-1.37.321-2.532.321-3.672 0-1.135-.112-2.3-.321-3.672C22.812 3.144 18.652.455 12 .5Z",
                    fill: "#fff"
                }), g.createElement("path", {
                    d: "M13.338 7.1c-4.383 0-6.37 1-6.37 4.409.005.263.028.53.066.793.158 1.121.666 1.974 1.576 2.508.666.39 1.387.566 2.125.678.914.14 1.834.156 2.753.163.307-.003 2.404.033 3.376-.336 1.285-.489 2.267-1.683 2.267-3.664 0-3.258-1.759-4.551-5.793-4.551Z",
                    fill: "#5115AA"
                }), g.createElement("path", {
                    d: "M10.27 11.105c-1.949 0-2.688.212-3.304.404-.917.36-1.567 1.071-1.567 2.688 0 2.418 2.169 3.183 5.615 3.183 1.525 0 2.744-.548 3.397-1.744.074-.147.303-.69.303-1.502 0-2.074-1.023-3.03-4.443-3.03Z",
                    fill: "#F9C346"
                }), g.createElement("path", {
                    d: "M14.41 15.634c-.306.008-.613.014-.92.015-.92-.006-3.433.038-4.88-.841-.944-.575-1.606-1.5-1.642-3.301.615-.192 1.355-.404 3.304-.404 3.42.002 4.442.957 4.442 3.03 0 .81-.231 1.354-.303 1.501Z",
                    fill: "#F36464"
                }))), m || (m = g.createElement("defs", null, g.createElement("clipPath", {
                    id: "icon-paste_svg__a"
                }, g.createElement("path", {
                    d: "M0 5.619A5.119 5.119 0 0 1 5.119.5h13.762A5.119 5.119 0 0 1 24 5.619v13.762a5.119 5.119 0 0 1-5.119 5.119H5.119A5.119 5.119 0 0 1 0 19.381V5.619Z",
                    fill: "#fff"
                })))))
            };
            let q = e => (0, p.jsx)(v, {
                    svg: N,
                    ...e
                }),
                G = e => (0, p.jsx)(v, {
                    svg: j,
                    ...e
                }),
                K = e => (0, p.jsx)(v, {
                    svg: A,
                    ...e
                }),
                Y = e => (0, p.jsx)(v, {
                    svg: k,
                    ...e
                }),
                J = e => (0, p.jsx)(v, {
                    svg: D,
                    ...e
                }),
                X = e => (0, p.jsx)(v, {
                    svg: B,
                    ...e
                }),
                Q = e => (0, p.jsx)(v, {
                    svg: Z,
                    ...e
                }),
                $ = e => (0, p.jsx)(v, {
                    svg: E,
                    ...e,
                    viewBox: "0 0 40 40"
                })
        },
        26187: (e, l, t) => {
            "use strict";
            t.d(l, {
                o: () => y
            });
            var a = t(23798),
                i = t(46001),
                r = t.n(i),
                n = t(39602),
                s = t.n(n),
                d = t(21462),
                o = t(98565),
                _ = t(76616),
                c = t(37796),
                u = t(97116),
                w = t(44259),
                m = t(15321),
                p = t(81903),
                g = t(58589),
                h = t.n(g);

            function y(e) {
                let {
                    title: l,
                    body: t,
                    mainCta: i,
                    onClickMainCta: n,
                    mainCtaVariation: g = "upsell",
                    onClickSecondaryCta: y,
                    secondaryCta: x,
                    image: f,
                    onPaywallDismiss: v,
                    shouldInvertCTAs: b,
                    shouldCenterDescription: L,
                    isLoading: E,
                    formField: S,
                    buttonsCustomHeader: C,
                    isProcessing: A = !1,
                    shouldShowCloseButton: P = !0,
                    mainCTAAppearance: T = "primary",
                    secondaryCTAAppearance: k = "secondary",
                    shouldDisableClickOutside: R = !1
                } = e, I = (0, d.useRef)(null), j = (0, d.useRef)(null);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(o.A, {
                        nodeRef: I,
                        in: !0,
                        appear: !0,
                        timeout: 200,
                        classNames: {
                            enter: h().backgroundEnter,
                            enterActive: h().backgroundEnterActive,
                            appear: h().backgroundAppear,
                            appearActive: h().backgroundAppearActive
                        },
                        children: (0, a.jsx)("div", {
                            ref: I,
                            className: h().background,
                            onClick: R ? void 0 : () => {
                                v(p.tS.CLICK_OUTSIDE)
                            },
                            "data-testid": "fullscreenPaywallBackground"
                        })
                    }), (0, a.jsx)("div", {
                        className: h().paywallContainer,
                        children: (0, a.jsx)(o.A, {
                            nodeRef: j,
                            in: !0,
                            appear: !0,
                            timeout: 200,
                            classNames: {
                                enter: h().paywallEnter,
                                enterActive: h().paywallEnterActive,
                                appear: h().paywallAppear,
                                appearActive: h().paywallAppearActive,
                                exit: h().paywallExit,
                                exitActive: h().paywallExitActive
                            },
                            children: (0, a.jsxs)("div", {
                                ref: j,
                                className: h().paywall,
                                children: [f && (0, a.jsx)("div", {
                                    className: h().imageContainer,
                                    children: (0, a.jsx)(s(), {
                                        className: h().image,
                                        src: f,
                                        fill: !0,
                                        alt: ""
                                    })
                                }), P && (0, a.jsx)("div", {
                                    className: h().buttonCloseRight,
                                    onClick: () => {
                                        v(p.tS.TOP_RIGHT_X)
                                    },
                                    tabIndex: 2,
                                    "data-testid": "fullscreenPaywallClose",
                                    children: (0, a.jsx)(w.Ay, {
                                        color: m.$A,
                                        hoverColor: m.Id,
                                        type: "Close"
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: h().content,
                                    children: [l && (0, a.jsx)("span", {
                                        className: h().title,
                                        children: l
                                    }), E && (0, a.jsx)("div", {
                                        className: h().spinnerWrapper,
                                        children: (0, a.jsx)(_.y, {
                                            size: "large"
                                        })
                                    }), (0, a.jsx)("p", {
                                        className: L ? h().textCenter : h().text,
                                        dangerouslySetInnerHTML: {
                                            __html: t
                                        }
                                    }), C && (0, a.jsx)("p", {
                                        className: h().text,
                                        children: C
                                    }), (0, a.jsxs)("div", {
                                        className: r()(h().buttonsContainer, {
                                            [h().buttonsContainerInverted]: b
                                        }),
                                        children: [S && (0, a.jsx)(c.A, {
                                            label: S.label,
                                            labelType: "inside",
                                            value: S.value,
                                            onChange: S.onChange,
                                            caption: S.isInvalid ? S.caption : void 0,
                                            state: S.isInvalid ? "invalid" : "default"
                                        }), (0, a.jsx)(u.$, {
                                            variation: g,
                                            as: "a",
                                            fullwidth: !0,
                                            size: "medium",
                                            appearance: T,
                                            onClick: n,
                                            tabIndex: 0,
                                            disabled: A,
                                            children: A ? (0, a.jsx)(_.y, {
                                                className: h().buttonSpinner,
                                                size: "medium",
                                                appearance: "neutral"
                                            }) : i
                                        }), x && (0, a.jsx)(u.$, {
                                            fullwidth: !0,
                                            size: "medium",
                                            appearance: k,
                                            onClick: y,
                                            tabIndex: 1,
                                            "data-testid": "fullscreenPaywallDismissCTA",
                                            disabled: A,
                                            children: x
                                        })]
                                    })]
                                })]
                            })
                        })
                    })]
                })
            }
        },
        26232: (e, l, t) => {
            "use strict";
            t.d(l, {
                Ex: () => n,
                HN: () => c,
                Ks: () => o,
                Zj: () => u,
                gA: () => _,
                o9: () => d,
                ry: () => s,
                uT: () => r
            });
            var a = t(98463),
                i = t(23901);
            let {
                useApplyCouponOnRenewalMutation: r,
                useCancelSubscriptionMutation: n,
                usePaidDowngradeSubscriptionMutation: s,
                usePaidUpgradeSubscriptionMutation: d,
                usePauseSubscriptionMutation: o,
                useReactivateSubscriptionMutation: _,
                useUpgradeSubscriptionPreviewQuery: c,
                useLazyUpgradeSubscriptionPreviewQuery: u
            } = a.K.injectEndpoints({
                endpoints: e => ({
                    pauseSubscription: e.mutation({
                        query: e => {
                            let {
                                teamId: l
                            } = e;
                            return {
                                url: "teams/".concat(l, "/subscription/pause"),
                                method: "POST",
                                requiresAuth: !0
                            }
                        },
                        invalidatesTags: (e, l, t) => {
                            let {
                                teamId: a
                            } = t;
                            return !l && a ? [{
                                type: "Workspace",
                                id: a
                            }] : []
                        }
                    }),
                    cancelSubscription: e.mutation({
                        query: e => {
                            let {
                                teamId: l
                            } = e;
                            return {
                                url: "teams/".concat(l, "/subscription/cancel"),
                                method: "POST",
                                requiresAuth: !0
                            }
                        },
                        invalidatesTags: (e, l, t) => {
                            let {
                                teamId: a
                            } = t;
                            return !l && a ? [{
                                type: "Workspace",
                                id: a
                            }] : []
                        }
                    }),
                    applyCouponOnRenewal: e.mutation({
                        query: e => {
                            let {
                                teamId: l,
                                couponCode: t
                            } = e;
                            return {
                                url: "teams/".concat(l, "/subscription/apply-coupon"),
                                method: "POST",
                                data: {
                                    couponCode: t
                                },
                                requiresAuth: !0
                            }
                        },
                        invalidatesTags: (e, l, t) => {
                            let {
                                teamId: a
                            } = t;
                            return !l && a ? [{
                                type: "Workspace",
                                id: a
                            }] : []
                        }
                    }),
                    reactivateSubscription: e.mutation({
                        query: e => {
                            let {
                                teamId: l
                            } = e;
                            return {
                                url: "teams/".concat(l, "/subscription/reactivate"),
                                method: "POST",
                                requiresAuth: !0
                            }
                        },
                        invalidatesTags: (e, l, t) => {
                            let {
                                teamId: a
                            } = t;
                            return !l && a ? [{
                                type: "Workspace",
                                id: a
                            }] : []
                        }
                    }),
                    paidDowngradeSubscription: e.mutation({
                        query: e => {
                            let {
                                teamId: l,
                                priceAndPackageToken: t
                            } = e;
                            return {
                                url: "teams/".concat(l, "/subscription/downgrade"),
                                method: "POST",
                                requiresAuth: !0,
                                data: {
                                    priceAndPackageToken: t
                                }
                            }
                        },
                        invalidatesTags: (e, l, t) => {
                            let {
                                teamId: a
                            } = t;
                            return !l && a ? [{
                                type: "Workspace",
                                id: a
                            }] : []
                        }
                    }),
                    upgradeSubscriptionPreview: e.query({
                        query: e => {
                            let {
                                teamId: l,
                                priceAndPackageToken: t,
                                quantity: a,
                                isDowngrade: i
                            } = e, r = new URLSearchParams;
                            a && r.append("quantity", a.toString()), i && r.append("isDowngrade", "true"), t && r.append("priceAndPackageToken", t);
                            let n = r.toString() ? "?".concat(r.toString()) : "";
                            return {
                                url: "teams/".concat(l, "/subscription/upgrade/preview").concat(n),
                                requiresAuth: !0
                            }
                        },
                        providesTags: (e, l, t) => {
                            let {
                                teamId: a
                            } = t;
                            return a ? [{
                                type: "Workspace",
                                id: a
                            }] : []
                        },
                        transformResponse: e => (0, i.x)(e)
                    }),
                    paidUpgradeSubscription: e.mutation({
                        query: e => {
                            let {
                                teamId: l,
                                priceAndPackageToken: t,
                                newQuantity: a
                            } = e;
                            return {
                                url: "teams/".concat(l, "/subscription/upgrade"),
                                method: "POST",
                                requiresAuth: !0,
                                data: {
                                    priceAndPackageToken: t,
                                    ...a ? {
                                        newQuantity: a
                                    } : {}
                                }
                            }
                        },
                        invalidatesTags: (e, l, t) => {
                            let {
                                teamId: a
                            } = t;
                            return !l && a ? [{
                                type: "Workspace",
                                id: a
                            }] : []
                        },
                        transformResponse: e => (0, i.x)(e)
                    })
                })
            })
        },
        30077: (e, l, t) => {
            "use strict";
            t.d(l, {
                R: () => _
            });
            var a = t(21462),
                i = t(87563),
                r = t(61149),
                n = t(62760);
            let s = {
                    [i.l.IDEAL]: ["NL"]
                },
                d = {
                    [i.l.APPLE_PAY]: ["MX"]
                };

            function o(e, l) {
                var t, a, i;
                return (null == (t = d[e]) || !t.includes(l)) && null != (i = null == (a = s[e]) ? void 0 : a.includes(l)) && i
            }

            function _() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "NL",
                    l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.Sj.EUR,
                    t = o(i.l.IDEAL, e) && (null == l ? void 0 : l.toLowerCase()) === r.Sj.EUR,
                    s = o(i.l.APPLE_PAY, e),
                    d = (() => {
                        let {
                            settings: e
                        } = (0, n.k)();
                        return e.is_link_payment_method_enabled
                    })();
                return (0, a.useMemo)(() => [i.l.CARD, i.l.PAYPAL, t && i.l.IDEAL, s && i.l.APPLE_PAY, d && i.l.LINK].filter(e => e), [s, t, d])
            }
        },
        31705: (e, l, t) => {
            "use strict";
            t.d(l, {
                jy: () => _,
                uz: () => d
            });
            var a = t(34811),
                i = t(21462),
                r = t(68849),
                n = t(33901),
                s = t(48804);
            let d = e => {
                    let {
                        auth: l,
                        session: t
                    } = e;
                    return (0, i.useMemo)(() => o({
                        auth: l,
                        session: t
                    }), [l, t])
                },
                o = e => {
                    let {
                        auth: l,
                        session: t
                    } = e, i = new URLSearchParams(window.location.search).get("user_key");
                    return i || (e => {
                        let {
                            auth0UserId: l,
                            domainUserId: t
                        } = e;
                        return l ? (0, a.SHA3)(l, {
                            outputLength: 224
                        }).toString() : t ? "sp-".concat(t) : "sp-".concat(Math.random())
                    })({
                        auth0UserId: null == l ? void 0 : l.auth0UserId,
                        domainUserId: null == t ? void 0 : t.domainUserId
                    })
                },
                _ = () => {
                    let e = (0, n.ox)(),
                        l = (0, r.GK)();
                    if (e) return l;
                    if (!window.Fides) return !1;
                    if (!(0, n.ET)()) {
                        var t;
                        let {
                            data_sales_and_sharing: e
                        } = null == (t = window.Fides) ? void 0 : t.consent;
                        return !!e
                    }
                    return !!(0, s.e)()
                }
        },
        32186: e => {
            e.exports = {
                blockingLayer: "BlockingLayer_blockingLayer__kokeg"
            }
        },
        32216: (e, l, t) => {
            "use strict";
            t.d(l, {
                CS: () => B,
                DC: () => T,
                Fl: () => N,
                KM: () => R,
                ME: () => E,
                N1: () => S,
                WD: () => M,
                ZK: () => O,
                a6: () => k,
                ir: () => I,
                oR: () => L
            });
            var a = t(21462),
                i = t(38169),
                r = t(40842),
                n = t(87676),
                s = t(55188),
                d = t(56741),
                o = t(20916),
                _ = t(88848),
                c = t(21301),
                u = t(36755),
                w = t(13732),
                m = t(73595),
                p = t(30631),
                g = t(62760),
                h = t(86781),
                y = t(72546),
                x = t(10694);
            let f = e => "transfer_window" === e || "billing_selector_transfer_window" === e,
                v = "spontaneous_paywall_last_shown",
                b = v + "/",
                L = () => {
                    let e = (0, i.wA)(),
                        l = (0, i.d4)(_.wn),
                        t = (0, i.d4)(_.oR),
                        s = (0, i.d4)(y.Jz),
                        o = (0, i.d4)(h.lD),
                        {
                            hasRedeemedFreeTrial: c
                        } = (0, n.J)(),
                        {
                            settings: m
                        } = (0, g.k)(),
                        v = C(),
                        L = (0, u.$)(),
                        E = (0, w.A)(),
                        {
                            settings: {
                                use_accelerated_upload: S
                            }
                        } = (0, g.k)(),
                        P = (0, r.VW)(),
                        T = (0, a.useMemo)(() => S || P, [S, P]);
                    if (!o || L || E) return;
                    let {
                        paywallConfiguration: k,
                        trigger: R
                    } = A(m, l, v);
                    if (!k || !R || "disabled" === k.type) return;
                    let {
                        canShow: I,
                        updateLastShownTime: j
                    } = (0, d.w)(k.frequency_seconds, b + R, k.time_window_seconds, "spontaneous_paywall_first_shown/" + R);
                    if (!t && !I) return;
                    let M = p.Ay.isMobile && f(k.type) && !k.is_upload_allowed;
                    if ("fullscreen" !== k.type && !M) return;
                    M && (k.type = "fullscreen", k.dismiss_on_outside_click = !1, k.close_on_left = !1);
                    let O = (R === _.vW.BEFORE_TRANSFER_UPLOAD || R === _.vW.INTRO_PAYWALL_NEW_USERS || R === _.vW.INTRO_PAYWALL_PUA_USERS) && s === x.r.PAYWALL;
                    t !== _.pU.SPONTANEOUS_FULLSCREEN && e((0, _.UK)(_.pU.SPONTANEOUS_FULLSCREEN)), (R === _.vW.INTRO_PAYWALL_NEW_USERS || R === _.vW.INTRO_PAYWALL_PUA_USERS) && e((0, _.jt)(R));
                    let {
                        dismissCount: N,
                        updateDismissCount: F
                    } = (0, d.k)("spontaneous_paywall_dismiss_count/" + R), U = !0;
                    return k.allow_action_after_dismiss_count && (U = N >= k.allow_action_after_dismiss_count), {
                        isLowDismissibility: k.low_dismissibility,
                        dismissOnOutsideClick: k.dismiss_on_outside_click,
                        dismissOnMouseLeave: k.dismiss_on_mouse_leave,
                        isLeftCloseButton: k.close_on_left,
                        trigger: R,
                        onPaywallDismiss: () => {
                            j(), e((0, _.Cb)(_.pU.SPONTANEOUS_FULLSCREEN)), O && e((0, _.ZL)(T)), F()
                        },
                        isFreeTrialEnabled: k.free_trial_enabled && !c,
                        billingCycle: k.billing_cycle,
                        couponCode: k.coupon_code,
                        allowActionOnDismiss: k.allow_action_on_dismiss && U,
                        closeButtonDelaySeconds: k.close_button_delay_seconds,
                        updateLastShownTime: j,
                        autoDismissSeconds: k.auto_dismiss_seconds
                    }
                },
                E = () => {
                    let e = (0, i.wA)(),
                        l = (0, i.d4)(_.oR),
                        t = (0, i.d4)(_.wn),
                        s = (0, i.d4)(h.lD),
                        {
                            hasRedeemedFreeTrial: o
                        } = (0, n.J)(),
                        y = (0, m.VJ)(),
                        {
                            settings: x
                        } = (0, g.k)(),
                        v = C(),
                        L = (0, u.$)(),
                        E = (0, w.A)(),
                        {
                            settings: {
                                use_accelerated_upload: S
                            }
                        } = (0, g.k)(),
                        P = (0, r.VW)(),
                        T = (0, a.useMemo)(() => S || P, [S, P]);
                    if (!s || L || E) return;
                    let {
                        paywallConfiguration: k,
                        trigger: R
                    } = A(x, t, v);
                    if (!k || !R || p.Ay.isMobile && !k.is_upload_allowed || !f(k.type)) return;
                    let {
                        canShow: I,
                        updateLastShownTime: j
                    } = (0, d.w)(k.frequency_seconds, b + R);
                    if (l || I) switch ((R === _.vW.INTRO_PAYWALL_NEW_USERS || R === _.vW.INTRO_PAYWALL_PUA_USERS) && e((0, _.jt)(R)), R) {
                        case _.vW.BEFORE_TRANSFER_UPLOAD:
                        case _.vW.INTRO_PAYWALL_NEW_USERS:
                        case _.vW.INTRO_PAYWALL_PUA_USERS:
                        case _.vW.DOWNLOAD_PAGE_OPENED:
                            let M = "transfer_window" === k.type ? _.pU.SPONTANEOUS_TRANSFER_WINDOW : _.pU.BILLING_SELECTOR_FT_CHECKBOX;
                            return l !== M && e((0, _.UK)(M)), {
                                isLowDismissibility: k.low_dismissibility,
                                dismissOnMouseLeave: k.dismiss_on_mouse_leave,
                                trigger: R,
                                onPaywallDismiss: function() {
                                    let l = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                                    if (j(), e((0, _.Cb)(M)), !l) return void e((0, c.BV)(!0));
                                    (R === _.vW.BEFORE_TRANSFER_UPLOAD || R === _.vW.INTRO_PAYWALL_NEW_USERS || R === _.vW.INTRO_PAYWALL_PUA_USERS) && e((0, _.ZL)(T))
                                },
                                isFreeTrialEnabled: k.free_trial_enabled && !o,
                                billingCycle: k.billing_cycle,
                                couponCode: k.coupon_code,
                                areWeekliesEnabled: k.weeklies_enabled && y,
                                updateLastShownTime: j,
                                autoDismissSeconds: k.auto_dismiss_seconds,
                                showCloseButton: k.show_close_button,
                                secondaryCtaType: k.secondary_cta_type,
                                isUploadAllowed: k.is_upload_allowed,
                                autoDismissOnTransferCompletion: k.auto_dismiss_on_transfer_completion
                            };
                        default:
                            return
                    }
                },
                S = () => {
                    let e = (0, i.d4)(h.lD),
                        {
                            settings: l
                        } = (0, g.k)(),
                        t = C(),
                        a = (0, u.$)(),
                        r = (0, w.A)();
                    if (!e || a || r || !l.spontaneous_paywalls_configuration) return {
                        canShow: !1,
                        isBlockingUpload: !0
                    };
                    let {
                        paywallConfiguration: n,
                        trigger: s
                    } = P(l.spontaneous_paywalls_configuration, t);
                    if (!n || !s || "disabled" === n.type) return {
                        canShow: !1,
                        isBlockingUpload: !0
                    };
                    let {
                        canShow: o
                    } = (0, d.w)(n.frequency_seconds, b + s);
                    return o && (f(n.type) || "fullscreen" === n.type) ? {
                        canShow: !0,
                        isBlockingUpload: !n.is_upload_allowed
                    } : {
                        canShow: !1,
                        isBlockingUpload: !0
                    }
                },
                C = () => {
                    let e = (0, i.d4)(o.My),
                        l = (0, i.d4)(o.Fg);
                    return !e && l
                },
                A = (e, l, t) => {
                    let {
                        spontaneous_paywalls_configuration: a
                    } = e;
                    return a && l ? l === _.vW.BEFORE_TRANSFER_UPLOAD ? P(a, t) : {
                        paywallConfiguration: a[l],
                        trigger: l
                    } : {
                        paywallConfiguration: void 0,
                        trigger: void 0
                    }
                },
                P = (e, l) => l ? (0, s.O)() ? {
                    paywallConfiguration: void 0,
                    trigger: void 0
                } : (0, s.g)() ? {
                    paywallConfiguration: e.intro_paywall_pua_users,
                    trigger: _.vW.INTRO_PAYWALL_PUA_USERS
                } : {
                    paywallConfiguration: e.intro_paywall_new_users,
                    trigger: _.vW.INTRO_PAYWALL_NEW_USERS
                } : {
                    paywallConfiguration: e.before_transfer_upload,
                    trigger: _.vW.BEFORE_TRANSFER_UPLOAD
                },
                T = () => {
                    let e = (0, i.d4)(_.oR),
                        l = (0, i.d4)(y.Jz),
                        t = (0, i.d4)(_.wn),
                        {
                            settings: r
                        } = (0, g.k)(),
                        {
                            paywallConfiguration: n
                        } = A(r, t, C()),
                        s = e === _.pU.BILLING_SELECTOR_FT_CHECKBOX && (t === _.vW.INTRO_PAYWALL_NEW_USERS || t === _.vW.BEFORE_TRANSFER_UPLOAD) && (null == n ? void 0 : n.is_upload_allowed),
                        [d, o] = (0, a.useState)(!1),
                        [c, u] = (0, a.useState)(0),
                        w = (0, a.useRef)(null);
                    return (0, a.useEffect)(() => {
                        if (l === x.r.INIT && (w.current = null, o(!1), u(0)), s && l === x.r.STARTED && !w.current) {
                            var e;
                            w.current = Date.now(), u(null != (e = null == n ? void 0 : n.minimum_upload_time_ms) ? e : 0)
                        }
                        if (l === x.r.FINISHED) {
                            if (w.current) {
                                let e = c - (Date.now() - w.current);
                                if (e > 0) {
                                    let l = setTimeout(() => o(!0), e);
                                    return () => clearTimeout(l)
                                }
                            }
                            o(!0)
                        }
                    }, [l, s, c, null == n ? void 0 : n.minimum_upload_time_ms]), {
                        shouldShowCompleteState: d
                    }
                },
                k = (e, l, t) => {
                    let r = (0, i.d4)(y.Jz),
                        n = (0, a.useRef)(!1),
                        s = (0, a.useMemo)(() => !!l && !!t && e === _.pU.BILLING_SELECTOR_FT_CHECKBOX && [_.vW.BEFORE_TRANSFER_UPLOAD, _.vW.INTRO_PAYWALL_NEW_USERS].includes(l), [l, t, e]),
                        d = (0, a.useMemo)(() => r === x.r.STARTED || r === x.r.PAUSED || r === x.r.FINISHED, [r]);
                    return (0, a.useEffect)(() => {
                        s && d && (n.current = !0), s || (n.current = !1)
                    }, [s, d]), s && (d || r === x.r.INIT && n.current)
                },
                R = () => {
                    let e = (0, i.wA)(),
                        l = (0, i.d4)(_.wn),
                        t = (0, i.d4)(_.oR),
                        n = (0, i.d4)(y.Jz),
                        s = (0, i.d4)(h.lD),
                        {
                            settings: d
                        } = (0, g.k)(),
                        {
                            canShow: o,
                            updateLastShownTime: c
                        } = F(),
                        m = (0, u.$)(),
                        v = (0, w.A)(),
                        {
                            settings: {
                                use_accelerated_upload: b
                            }
                        } = (0, g.k)(),
                        L = (0, r.VW)(),
                        E = (0, a.useMemo)(() => b || L, [b, L]);
                    if (!s || m || v || !o) return;
                    let {
                        type: S
                    } = V(d), C = p.Ay.isMobile && f(S);
                    if ("fullscreen" !== S && !C) return;
                    let {
                        trigger: A,
                        isLowDismissibility: P,
                        dismissOnOutsideClick: T,
                        dismissOnMouseLeave: k,
                        isLeftCloseButton: R,
                        isHomeScreenPaywallNewUsersEnabled: I
                    } = "fullscreen" === S ? V(d) : {
                        trigger: _.vW.BEFORE_TRANSFER_UPLOAD,
                        isLowDismissibility: d.spontaneous_paywall_low_dismissibility,
                        dismissOnOutsideClick: !1,
                        dismissOnMouseLeave: d.spontaneous_paywall_dismiss_on_mouse_leave,
                        isLeftCloseButton: !1,
                        isHomeScreenPaywallNewUsersEnabled: !1
                    }, j = A === _.vW.BEFORE_TRANSFER_UPLOAD && n === x.r.PAYWALL, M = I && l === _.vW.TRANSFER_PAGE_OPENED && l === A;
                    if (!(M && (!H() || z())) && (l === A || t === _.pU.SPONTANEOUS_FULLSCREEN || j)) return t !== _.pU.SPONTANEOUS_FULLSCREEN && (j || e((0, _.jt)(void 0)), e((0, _.UK)(_.pU.SPONTANEOUS_FULLSCREEN))), M && H() && !localStorage.getItem(U) && D(), {
                        isLowDismissibility: P,
                        dismissOnOutsideClick: T,
                        dismissOnMouseLeave: k,
                        isLeftCloseButton: R,
                        trigger: A,
                        onPaywallDismiss: () => {
                            c(), e((0, _.Cb)(_.pU.SPONTANEOUS_FULLSCREEN)), j && e((0, _.ZL)(E))
                        }
                    }
                },
                I = () => {
                    let e = (0, i.d4)(h.lD),
                        l = (0, i.d4)(o.My),
                        {
                            canShow: t
                        } = F(),
                        a = (0, u.$)(),
                        r = (0, w.A)(),
                        {
                            settings: {
                                is_intro_paywall_new_users_enabled: n,
                                spontaneous_paywall_type: d,
                                spontaneous_paywall_trigger: c,
                                pua_user_spontaneous_paywall_type: m,
                                pua_user_spontaneous_paywall_trigger: p
                            }
                        } = (0, g.k)();
                    return !!e && !a && !r && !!t && ((0, s.g)() ? p === _.vW.BEFORE_TRANSFER_UPLOAD && !l && "disabled" !== m : (!n || c !== _.vW.BEFORE_TRANSFER_UPLOAD || !l) && (!!f(d) || "fullscreen" === d) && c === _.vW.BEFORE_TRANSFER_UPLOAD)
                },
                j = () => {
                    let e = (0, i.d4)(_.oR),
                        l = (0, i.d4)(_.wn),
                        t = (0, i.d4)(h.lD),
                        {
                            canShow: a,
                            updateLastShownTime: r
                        } = F(),
                        {
                            type: n,
                            dismissOnMouseLeave: s,
                            isLowDismissibility: d,
                            trigger: o
                        } = V((0, g.k)().settings);
                    if (!p.Ay.isMobile && "transfer_window" === n) return {
                        currentPaywall: e,
                        currentTrigger: l,
                        trigger: o,
                        isUnpaidUser: t,
                        canShow: a,
                        updateLastShownTime: r,
                        isLowDismissibility: d,
                        dismissOnMouseLeave: s
                    }
                },
                M = () => {
                    let e = (0, i.wA)(),
                        {
                            settings: {
                                use_accelerated_upload: l
                            }
                        } = (0, g.k)(),
                        t = (0, r.VW)(),
                        n = (0, a.useMemo)(() => l || t, [l, t]),
                        s = j();
                    if (s) return s.currentPaywall !== _.pU.SPONTANEOUS_TRANSFER_WINDOW && e((0, _.UK)(_.pU.SPONTANEOUS_TRANSFER_WINDOW)), {
                        isLowDismissibility: s.isLowDismissibility,
                        dismissOnMouseLeave: s.dismissOnMouseLeave,
                        trigger: _.vW.BEFORE_TRANSFER_UPLOAD,
                        onPaywallDismiss: () => {
                            s.updateLastShownTime(), e((0, _.Cb)(_.pU.SPONTANEOUS_TRANSFER_WINDOW)), e((0, _.ZL)(n))
                        }
                    }
                },
                O = () => {
                    let e = (0, i.wA)(),
                        l = (0, w.A)(),
                        t = j();
                    if (t && t.isUnpaidUser && t.canShow && !l && t.currentTrigger === t.trigger && t.trigger == _.vW.DOWNLOAD_PAGE_OPENED) return t.currentPaywall !== _.pU.SPONTANEOUS_TRANSFER_WINDOW && e((0, _.UK)(_.pU.SPONTANEOUS_TRANSFER_WINDOW)), {
                        isLowDismissibility: t.isLowDismissibility,
                        dismissOnMouseLeave: t.dismissOnMouseLeave,
                        trigger: t.currentTrigger,
                        onPaywallDismiss: () => {
                            t.updateLastShownTime(), e((0, _.Cb)(_.pU.SPONTANEOUS_TRANSFER_WINDOW))
                        }
                    }
                },
                N = () => {
                    let e = (0, i.wA)(),
                        l = (0, i.d4)(_.oR),
                        t = (0, i.d4)(_.wn),
                        {
                            settings: r
                        } = (0, g.k)(),
                        {
                            spontaneous_paywall_low_dismissibility: n,
                            spontaneous_paywall_dismiss_on_outside_click: s,
                            spontaneous_paywall_dismiss_on_mouse_leave: d,
                            spontaneous_paywall_close_on_left: o
                        } = r;
                    return (0, a.useMemo)(() => {
                        if (l === _.pU.OPTION_UPSELL_FULLSCREEN) return {
                            isLowDismissibility: n,
                            dismissOnOutsideClick: s,
                            dismissOnMouseLeave: d,
                            isLeftCloseButton: o,
                            trigger: t,
                            onPaywallDismiss: () => {
                                e((0, _.Cb)(_.pU.OPTION_UPSELL_FULLSCREEN))
                            }
                        }
                    }, [l, t, d, s, e, o, n])
                },
                F = () => {
                    let e = (() => {
                        let {
                            settings: e
                        } = (0, g.k)();
                        return e.spontaneous_paywall_frequency_seconds
                    })();
                    return (0, d.w)(e, v)
                },
                U = "home_screen_paywall_new_user_last_shown",
                D = () => {
                    localStorage.setItem(U, Date.now().toString())
                },
                z = () => localStorage.getItem(U),
                W = "has_new_user_completed_passwordless_login",
                B = () => {
                    localStorage.setItem(W, Date.now().toString())
                },
                H = () => localStorage.getItem(W),
                V = e => (0, s.g)() ? {
                    type: e.pua_user_spontaneous_paywall_type,
                    trigger: e.pua_user_spontaneous_paywall_trigger,
                    isLowDismissibility: e.pua_user_spontaneous_paywall_low_dismissibility,
                    dismissOnOutsideClick: e.pua_user_spontaneous_paywall_dismiss_on_outside_click,
                    dismissOnMouseLeave: e.pua_user_spontaneous_paywall_dismiss_on_mouse_leave,
                    isLeftCloseButton: e.pua_user_spontaneous_paywall_close_on_left,
                    isHomeScreenPaywallNewUsersEnabled: e.is_home_screen_paywall_new_users_enabled
                } : {
                    type: e.spontaneous_paywall_type,
                    trigger: e.spontaneous_paywall_trigger,
                    isLowDismissibility: e.spontaneous_paywall_low_dismissibility,
                    dismissOnOutsideClick: e.spontaneous_paywall_dismiss_on_outside_click,
                    dismissOnMouseLeave: e.spontaneous_paywall_dismiss_on_mouse_leave,
                    isLeftCloseButton: e.spontaneous_paywall_close_on_left,
                    isHomeScreenPaywallNewUsersEnabled: e.is_home_screen_paywall_new_users_enabled
                }
        },
        32976: (e, l, t) => {
            "use strict";
            t.d(l, {
                i: () => d
            });
            var a = t(38169),
                i = t(49944),
                r = t(78694),
                n = t(86781),
                s = t(25330);

            function d() {
                var e, l, t, d, o, _, c;
                let u = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    {
                        entitlements: w
                    } = (0, i.o)({
                        ignoreChannel: u
                    }),
                    m = (0, a.d4)(n.JV),
                    p = w[r.Z.ACCOUNT_STORAGE];
                (0, s.A)(p, w, r.Z.ACCOUNT_STORAGE);
                let g = null != (_ = (null == p || null == (l = p.rule) || null == (e = l.counter) ? void 0 : e.unlimited) || !m) && _,
                    h = null == p || null == (d = p.rule) || null == (t = d.counter) ? void 0 : t.value,
                    y = g || null == h ? 1 / 0 : h,
                    x = null != (c = null == p || null == (o = p.metering) ? void 0 : o.value) ? c : 0;
                return {
                    currentUsage: x,
                    quota: y,
                    isLimitReached: function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        return !g && x + e >= y
                    },
                    unlimited: g
                }
            }
        },
        33665: (e, l, t) => {
            "use strict";
            t.d(l, {
                rz: () => A,
                iK: () => S,
                Ch: () => P,
                YS: () => C,
                wE: () => E,
                Sv: () => T
            });
            var a = t(53526),
                i = t.n(a),
                r = t(21462),
                n = t(38169),
                s = t(26115);
            let d = "previews_pw_exp",
                o = "".concat(d, "_tw"),
                _ = "".concat(d, "_fs"),
                c = "".concat(d, "_pp"),
                u = 25 * s.MB,
                w = [{
                    extension: "avif",
                    maxSize: 256 * s.MB
                }, {
                    extension: "gif",
                    maxSize: 256 * s.MB
                }, {
                    extension: "jpg",
                    maxSize: 256 * s.MB
                }, {
                    extension: "jpeg",
                    maxSize: 256 * s.MB
                }, {
                    extension: "png",
                    maxSize: 256 * s.MB
                }, {
                    extension: "tif",
                    maxSize: 256 * s.MB
                }, {
                    extension: "tiff",
                    maxSize: 256 * s.MB
                }, {
                    extension: "webp",
                    maxSize: 256 * s.MB
                }, {
                    extension: "heic",
                    maxSize: 256 * s.MB
                }, {
                    extension: "heif",
                    maxSize: 256 * s.MB
                }, {
                    extension: "arw",
                    maxSize: 256 * s.MB
                }, {
                    extension: "cr2",
                    maxSize: 256 * s.MB
                }, {
                    extension: "cr3",
                    maxSize: 256 * s.MB
                }, {
                    extension: "dng",
                    maxSize: 256 * s.MB
                }, {
                    extension: "nef",
                    maxSize: 256 * s.MB
                }, {
                    extension: "orf",
                    maxSize: 256 * s.MB
                }, {
                    extension: "raf",
                    maxSize: 256 * s.MB
                }, {
                    extension: "rw2",
                    maxSize: 256 * s.MB
                }, {
                    extension: "mov",
                    maxSize: 300 * s.MB
                }, {
                    extension: "mp4",
                    maxSize: 300 * s.MB
                }, {
                    extension: "m4a",
                    maxSize: 300 * s.MB
                }, {
                    extension: "mp3",
                    maxSize: 300 * s.MB
                }, {
                    extension: "wav",
                    maxSize: 300 * s.MB
                }, {
                    extension: "ai",
                    maxSize: 256 * s.MB
                }, {
                    extension: "csv",
                    maxSize: 256 * s.MB
                }, {
                    extension: "doc",
                    maxSize: 256 * s.MB
                }, {
                    extension: "docx",
                    maxSize: 256 * s.MB
                }, {
                    extension: "ods",
                    maxSize: 256 * s.MB
                }, {
                    extension: "odt",
                    maxSize: 256 * s.MB
                }, {
                    extension: "pdf",
                    maxSize: 256 * s.MB
                }, {
                    extension: "ppt",
                    maxSize: 256 * s.MB
                }, {
                    extension: "pptx",
                    maxSize: 256 * s.MB
                }, {
                    extension: "psb",
                    maxSize: 256 * s.MB
                }, {
                    extension: "psd",
                    maxSize: 256 * s.MB
                }, {
                    extension: "rtf",
                    maxSize: 256 * s.MB
                }, {
                    extension: "txt",
                    maxSize: 256 * s.MB
                }, {
                    extension: "xls",
                    maxSize: 256 * s.MB
                }, {
                    extension: "xlsx",
                    maxSize: 256 * s.MB
                }];
            var m = function(e) {
                return e.NONE = "none", e.TW_PAYWALL = "tw_paywall", e.FULLSCREEN_PAYWALL = "fullscreen_paywall", e.PREVIEW_PAGE_PAYWALL = "preview_page_paywall", e
            }({});
            let p = e => e.flatMap(e => e.items && Array.isArray(e.items) ? p(e.items) : [e]);
            var g = t(89187),
                h = t(88848),
                y = t(72754),
                x = t(7012),
                f = t(62760),
                v = t(86781),
                b = t(72546);
            let L = () => {
                    let {
                        settings: e
                    } = (0, f.k)(), l = (0, n.d4)(v.mB), t = (0, x.wx)(l);
                    return e.is_previews_monetization_enabled && t
                },
                E = e => {
                    let l = L(),
                        t = (0, n.d4)(b.Kj);
                    return l && (e => {
                        let l = p(e.items).filter(e => (e => {
                            var l;
                            let t = null != (l = e.name) ? l : "",
                                a = t.lastIndexOf(".");
                            if (a <= 0) return !1;
                            let i = t.slice(a + 1).toLowerCase();
                            return w.some(l => {
                                let {
                                    extension: t,
                                    maxSize: a
                                } = l;
                                return t === i && e.size <= a
                            })
                        })(e));
                        return l.length >= 5 || l.some(e => e.size >= u)
                    })(null != e ? e : t)
                },
                S = () => {
                    let e = (0, n.wA)(),
                        l = (0, n.d4)(y.oR),
                        t = (0, n.d4)(y.wn),
                        a = L(),
                        {
                            isFullscreenPaywall: i
                        } = A(),
                        s = (0, r.useMemo)(() => a && l === h.pU.PREVIEWS_HARD_MONETIZATION_FULLSCREEN && t === h.vW.PREVIEWS_HARD_MONETIZATION_SENDER, [a, l, t]),
                        d = (0, r.useMemo)(() => i && l === h.pU.PREVIEWS_HARD_MONETIZATION_FULLSCREEN && t === h.vW.PREVIEWS_HARD_MONETIZATION_DOWNLOADER, [i, l, t]);
                    if (s || d) return {
                        onDismiss: () => {
                            e((0, h.Cb)(h.pU.PREVIEWS_HARD_MONETIZATION_FULLSCREEN))
                        },
                        context: s ? "sender" : "downloader"
                    }
                },
                C = () => {
                    let e = (0, n.wA)(),
                        l = (0, n.d4)(y.oR),
                        t = (0, n.d4)(y.wn),
                        {
                            isTransferWindowPaywall: a
                        } = A();
                    if ((0, r.useMemo)(() => a && l === h.pU.PREVIEWS_HARD_MONETIZATION_TRANSFER_WINDOW && t === h.vW.PREVIEWS_HARD_MONETIZATION_DOWNLOADER, [a, l, t])) return {
                        isLowDismissibility: !1,
                        onPaywallDismiss: () => {
                            e((0, h.Cb)(h.pU.PREVIEWS_HARD_MONETIZATION_TRANSFER_WINDOW))
                        },
                        trigger: h.vW.PREVIEWS_HARD_MONETIZATION_DOWNLOADER,
                        dismissOnMouseLeave: !1,
                        type: h.pU.PREVIEWS_HARD_MONETIZATION_TRANSFER_WINDOW,
                        isFreeTrialEnabled: !0,
                        billingCycle: g.CS.WEEKLY,
                        areWeekliesEnabled: !0,
                        isPreviewsVariation: !0
                    }
                },
                A = () => {
                    var e;
                    let l = (0, n.d4)(b.Kj),
                        t = (0, n.d4)(v.mB),
                        a = (0, x.wx)(t),
                        i = null == (e = l.experimentIds) ? void 0 : e.find(e => e.startsWith(d)),
                        s = (0, r.useMemo)(() => {
                            if (!i || !a) return m.NONE;
                            switch (i) {
                                case o:
                                    return m.TW_PAYWALL;
                                case _:
                                    return m.FULLSCREEN_PAYWALL;
                                case c:
                                    return m.PREVIEW_PAGE_PAYWALL;
                                default:
                                    return m.NONE
                            }
                        }, [i, a]),
                        u = s !== m.NONE,
                        w = s === m.TW_PAYWALL,
                        p = s === m.FULLSCREEN_PAYWALL;
                    return {
                        isActive: u,
                        isTransferWindowPaywall: w,
                        isFullscreenPaywall: p,
                        isPreviewPagePaywall: s === m.PREVIEW_PAGE_PAYWALL,
                        isDownloadPagePaywall: w || p
                    }
                },
                P = () => {
                    let {
                        settings: e
                    } = (0, f.k)();
                    if (E()) switch (e.downloaders_previews_monetization_style) {
                        case m.TW_PAYWALL:
                            return o;
                        case m.FULLSCREEN_PAYWALL:
                            return _;
                        case m.PREVIEW_PAGE_PAYWALL:
                            return c;
                        case m.NONE:
                        default:
                            return
                    }
                },
                T = () => {
                    let {
                        isFullscreenPaywall: e,
                        isTransferWindowPaywall: l
                    } = A(), t = (0, n.wA)();
                    return l ? () => {
                        t((0, h.jt)(h.vW.PREVIEWS_HARD_MONETIZATION_DOWNLOADER)), t((0, h.UK)(h.pU.PREVIEWS_HARD_MONETIZATION_TRANSFER_WINDOW))
                    } : e ? () => {
                        t((0, h.jt)(h.vW.PREVIEWS_HARD_MONETIZATION_DOWNLOADER)), t((0, h.UK)(h.pU.PREVIEWS_HARD_MONETIZATION_FULLSCREEN))
                    } : i()
                }
        },
        34361: (e, l, t) => {
            "use strict";
            t.d(l, {
                x: () => o
            });
            var a = t(38169),
                i = t(31543),
                r = t(55296),
                n = t(90512),
                s = t(26573),
                d = t(72546);

            function o() {
                let e = (0, a.d4)(n.AX),
                    l = (0, a.d4)(n.rE),
                    t = (0, a.d4)(s.FB),
                    o = (0, a.d4)(d.He),
                    _ = (0, r.g)(),
                    c = !!(e && l && !o),
                    u = !i.A.isMobile && !s.FB && (!_ || c),
                    w = i.A.isMobile && !t;
                return c && !u && !w
            }
        },
        36165: (e, l, t) => {
            "use strict";
            t.d(l, {
                GV: () => r,
                jL: () => i
            });
            var a = t(38169);
            let i = a.wA,
                r = a.d4
        },
        36337: (e, l, t) => {
            "use strict";
            t.d(l, {
                $: () => a
            });
            let a = {
                paywallDisplayed: (e, l, t) => ({
                    kind: "wolf_paywall_displayed",
                    info: {
                        paywallId: e,
                        outcome: 0,
                        ...l.paywallInfo && {
                            paywallInfo: {
                                ...l.paywallInfo
                            }
                        },
                        ...l.predictionInfo && {
                            predictionInfo: {
                                ...l.predictionInfo
                            }
                        },
                        ...l.transferInfo && {
                            transferInfo: {
                                ...l.transferInfo
                            }
                        },
                        ...l.senderInfo && {
                            senderInfo: {
                                ...l.senderInfo
                            }
                        },
                        ...t && {
                            contextInfo: {
                                ...t
                            }
                        }
                    }
                }),
                paywallDismissed: e => ({
                    kind: "wolf_paywall_dismissed",
                    info: {
                        paywallId: e,
                        outcome: 0
                    }
                }),
                paywallUserConverted: (e, l) => ({
                    kind: "wolf_paywall_user_converted",
                    info: {
                        paywallId: e,
                        outcome: 1,
                        ...l && {
                            ...l
                        }
                    }
                }),
                predictionRequest: (e, l, t, a, i) => ({
                    kind: "wolf_prediction_request",
                    info: {
                        paywallId: e,
                        paywallTrigger: l,
                        rawData: {
                            ...t.paywallInfo && {
                                paywallInfo: {
                                    ...t.paywallInfo
                                }
                            },
                            ...t.predictionInfo && {
                                predictionInfo: {
                                    ...t.predictionInfo
                                }
                            },
                            ...t.transferInfo && {
                                transferInfo: {
                                    ...t.transferInfo
                                }
                            },
                            ...t.senderInfo && {
                                senderInfo: {
                                    ...t.senderInfo
                                }
                            },
                            ...t.contextInfo && {
                                contextInfo: {
                                    ...t.contextInfo
                                }
                            },
                            ...a && {
                                picoUserInfo: {
                                    ...a
                                }
                            }
                        },
                        requestPayload: i
                    }
                }),
                predictionSuccess: (e, l, t, a, i) => ({
                    kind: "wolf_prediction_success",
                    info: {
                        paywallId: e,
                        paywallTrigger: l,
                        prediction: t,
                        requestPayload: a,
                        latencyMs: i
                    }
                }),
                predictionError: (e, l, t, a, i) => ({
                    kind: "wolf_prediction_error",
                    info: {
                        paywallId: e,
                        paywallTrigger: l,
                        statusCode: t,
                        errorDetail: a,
                        requestPayload: i
                    }
                }),
                predictionTimeout: (e, l) => ({
                    kind: "wolf_prediction_timeout",
                    info: {
                        paywallId: e,
                        paywallTrigger: l
                    }
                }),
                predictionMissingContext: (e, l) => ({
                    kind: "wolf_prediction_missing_context",
                    info: {
                        paywallId: e,
                        paywallTrigger: null != l ? l : ""
                    }
                })
            }
        },
        36755: (e, l, t) => {
            "use strict";
            t.d(l, {
                $: () => n
            });
            var a = t(38169),
                i = t(12637),
                r = t(45477);
            let n = () => {
                let e = (0, a.d4)(r.Tb),
                    l = (0, a.d4)(i.jZ);
                return !!(e.name && e.name !== l.subdomain_name)
            }
        },
        37828: (e, l, t) => {
            "use strict";
            t.d(l, {
                f: () => r
            });
            var a = t(22352),
                i = t(15913);
            let r = () => {
                let {
                    currentTeam: e
                } = (0, i.o)(), {
                    data: l,
                    isLoading: t,
                    refetch: r
                } = (0, a.Dm)({
                    teamId: null == e ? void 0 : e.id
                }, {
                    skip: !(null == e ? void 0 : e.id)
                });
                return {
                    subscription: l,
                    isLoading: t,
                    refetch: r
                }
            }
        },
        37845: (e, l, t) => {
            "use strict";
            t.d(l, {
                N: () => a
            });
            let a = "fides_consent"
        },
        37982: (e, l, t) => {
            "use strict";
            t.d(l, {
                v: () => r
            });
            var a = t(26232),
                i = t(15913);
            let r = e => {
                let {
                    priceAndPackageToken: l,
                    quantity: t,
                    isDowngrade: r = !1
                } = e, {
                    currentTeam: n
                } = (0, i.o)(), {
                    data: s,
                    isLoading: d,
                    isError: o,
                    isFetching: _
                } = (0, a.HN)({
                    teamId: null == n ? void 0 : n.id,
                    priceAndPackageToken: l,
                    quantity: t,
                    isDowngrade: r
                }, {
                    skip: !(null == n ? void 0 : n.id) || !l && !t,
                    refetchOnMountOrArgChange: !0
                });
                return {
                    preview: s,
                    isLoading: d || _,
                    isError: o
                }
            }
        },
        39241: (e, l, t) => {
            "use strict";
            t.d(l, {
                A: () => r
            });
            var a = t(23798);
            t(21462);
            var i = t(49352);
            let r = e => {
                let {
                    className: l,
                    width: t = 14,
                    height: r = 20,
                    color: n = i.xm
                } = e;
                return (0, a.jsx)("svg", {
                    className: l,
                    width: t,
                    height: r,
                    viewBox: "0 0 14 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, a.jsx)("path", {
                        d: "M4.59018 19.3044C4.07471 19.5027 3.49611 19.2455 3.29786 18.7301L0.0670438 10.33C-0.131215 9.81449 0.125938 9.2359 0.64141 9.03764C1.15688 8.83938 1.73548 9.09653 1.93374 9.612L4.80557 17.0788L12.2723 14.2069C12.7878 14.0087 13.3664 14.2658 13.5647 14.7813C13.7629 15.2968 13.5058 15.8754 12.9903 16.0736L4.59018 19.3044ZM8.2312 0.371094L9.15968 -0.000297546C9.93358 1.93445 10.3461 3.54429 10.4326 5.02365C10.52 6.51773 10.2717 7.8251 9.7974 9.14646C9.3323 10.4421 8.64104 11.7708 7.85168 13.2799C7.05409 14.8047 6.13047 16.56 5.14501 18.7772L4.2312 18.3711L3.31739 17.965C4.33193 15.6822 5.28331 13.875 6.07948 12.3529C6.88387 10.8151 7.50511 9.61259 7.91501 8.47073C8.31568 7.35458 8.50491 6.31821 8.43604 5.14041C8.3663 3.9479 8.02883 2.55773 7.30272 0.742485L8.2312 0.371094Z",
                        fill: n
                    })
                })
            }
        },
        39377: (e, l, t) => {
            "use strict";
            t.d(l, {
                A: () => c,
                r: () => _
            });
            var a = t(23798),
                i = t(50084),
                r = t.n(i),
                n = t(21462),
                s = t(38169),
                d = t(44259),
                o = t(84530);
            class _ extends n.Component {
                componentDidMount() {
                    this.timer = setTimeout(() => {
                        this.setState({
                            mightBeBorked: !0
                        })
                    }, 15e3)
                }
                componentDidUpdate() {
                    this.props.onRefresh && this.textNode && this.textNode.querySelector("a") && (this.textNode.querySelector("a").onclick = this.props.onRefresh)
                }
                componentWillUnmount() {
                    clearTimeout(this.timer)
                }
                render() {
                    let e, {
                        route: l,
                        failed: t
                    } = this.props;
                    return (this.state.mightBeBorked || t) && (e = (0, a.jsx)("p", {
                        ref: e => this.textNode = e,
                        dangerouslySetInnerHTML: {
                            __html: o.A.t("panel.loading_error", {
                                path: l.path
                            })
                        }
                    })), (0, a.jsxs)("div", {
                        className: "panel__loading",
                        "data-testid": "panel-loading",
                        children: [(0, a.jsx)(d.Ay, {
                            type: "Loading"
                        }), e]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        mightBeBorked: !1
                    }
                }
            }
            _.propTypes = {
                failed: r().bool,
                onRefresh: r().func,
                route: r().object
            }, _.defaultProps = {
                onRefresh: e => (window.location.reload(), e.preventDefault(), !1)
            };
            let c = (0, s.Ng)(e => {
                let {
                    route: l
                } = e;
                return {
                    route: l
                }
            }, null)(_)
        },
        39429: (e, l, t) => {
            "use strict";
            t.d(l, {
                M: () => s
            });
            var a = t(99831),
                i = t(74882),
                r = t(33665),
                n = t(3432);
            let s = () => {
                let e = (0, a.Dt)(),
                    l = (0, a.FB)(),
                    {
                        isSegmented: t,
                        segment: s
                    } = (0, n.Qz)(),
                    d = (0, r.Ch)();
                return [...e ? [i.dc] : [], ...l ? [i.F] : [], ...t ? [(0, n.Jj)(s)] : [], ...d ? [d] : []]
            }
        },
        40842: (e, l, t) => {
            "use strict";
            t.d(l, {
                Ih: () => E,
                bF: () => T,
                VW: () => C,
                Gu: () => I,
                UG: () => P,
                XB: () => A,
                vr: () => k,
                Dd: () => R
            });
            var a = t(53526),
                i = t.n(a),
                r = t(21462),
                n = t(38169),
                s = t(16639),
                d = t(1150),
                o = t(56741),
                _ = t(15566),
                c = t(89187),
                u = t(55851),
                w = t(88848),
                m = t(21301),
                p = t(36755),
                g = t(30631),
                h = t(62760),
                y = t(90512),
                x = t(86781),
                f = t(72546),
                v = t(10694),
                b = function(e) {
                    return e.NONE = "none", e.FULLSCREEN = "fullscreen", e.TOOLTIP = "tooltip", e.TRANSFER_WINDOW = "transfer_window", e
                }({});
            let L = () => {
                    let {
                        canShow: e,
                        updateLastShownTime: l
                    } = (0, o.w)(u.i.ONE_DAY_IN_SECONDS, "faster_upload_fullscreen_paywall_last_shown");
                    return {
                        canShowFullscreenPaywall: e,
                        updateLastShownTimeFullscreenPaywall: l
                    }
                },
                E = () => {
                    let e = (0, n.wA)(),
                        l = (0, n.d4)(w.oR),
                        {
                            updateLastShownTimeFullscreenPaywall: t
                        } = L();
                    return (0, r.useMemo)(() => {
                        if (l) {
                            if (l === w.pU.FASTER_UPLOAD_FULLSCREEN) return {
                                onDismiss: () => {
                                    t(), e((0, w.Cb)(l))
                                }
                            };
                            if (l === w.pU.FASTER_UPLOAD_TOOLTIP) return {
                                onDismiss: () => {
                                    e((0, w.Cb)(l))
                                }
                            };
                            if (l === w.pU.FASTER_UPLOAD_TRANSFER_WINDOW) return {
                                onDismiss: () => {
                                    e((0, w.Cb)(l)), e((0, m.BV)(!0))
                                }
                            }
                        }
                    }, [l, e, t])
                },
                S = () => {
                    let {
                        settings: e
                    } = (0, h.k)();
                    return e.faster_upload_paywall_type
                },
                C = () => {
                    let e = S(),
                        l = (0, n.d4)(x.R2);
                    return !!l && e !== b.NONE && [c.js.ULTIMATE, c.js.ENTERPRISE, c.js.ENTERPRISE_CUSTOM_CONTRACT].includes(l)
                },
                A = () => {
                    let e = S(),
                        l = (0, n.d4)(y.W7),
                        t = C(),
                        a = (0, p.$)(),
                        i = g.Ay.isMobile,
                        r = "/sign" === l.path;
                    if (t || a || i || r) return {
                        shouldSeePaywall: !1,
                        shouldBlockTransferStart: !1
                    };
                    let {
                        canShowFullscreenPaywall: s
                    } = L();
                    return e !== b.FULLSCREEN || s ? {
                        shouldSeePaywall: e !== b.NONE,
                        shouldBlockTransferStart: e === b.FULLSCREEN
                    } : {
                        shouldSeePaywall: !1,
                        shouldBlockTransferStart: !1
                    }
                },
                P = () => {
                    let e = (0, n.wA)();
                    switch (S()) {
                        case b.FULLSCREEN:
                            return () => {
                                e((0, w.jt)(w.vW.TRANSFER_BLOCKED_FASTER_UPLOAD)), e((0, w.UK)(w.pU.FASTER_UPLOAD_FULLSCREEN))
                            };
                        case b.TOOLTIP:
                            return () => {
                                e((0, w.jt)(w.vW.TRANSFER_STARTED_FASTER_UPLOAD)), e((0, w.UK)(w.pU.FASTER_UPLOAD_TOOLTIP))
                            };
                        case b.TRANSFER_WINDOW:
                            return () => {
                                e((0, w.jt)(w.vW.TRANSFER_STARTED_FASTER_UPLOAD)), e((0, w.UK)(w.pU.FASTER_UPLOAD_TRANSFER_WINDOW))
                            };
                        case b.NONE:
                        default:
                            return () => i()()
                    }
                },
                T = () => {
                    let e = (0, n.d4)(w.oR),
                        l = (0, s.A)(e),
                        {
                            isAnticipatedUploadStarted: t,
                            finalizeAnticipatedUpload: a
                        } = (0, d.$)(),
                        i = (0, r.useMemo)(() => l === w.pU.FASTER_UPLOAD_FULLSCREEN && void 0 === e, [l, e]);
                    return (0, r.useEffect)(() => {
                        i && t && a()
                    }, [t, a, i]), (0, _.ev)(i && !t), {
                        shouldShow: e === w.pU.FASTER_UPLOAD_FULLSCREEN
                    }
                },
                k = () => {
                    let e = (0, n.d4)(w.oR),
                        l = (0, n.d4)(f.Jz);
                    return e === w.pU.FASTER_UPLOAD_TOOLTIP && (l === v.r.STARTED || l === v.r.PAUSED || l === v.r.FINISHED)
                },
                R = () => {
                    let e = (0, n.d4)(w.oR),
                        l = (0, n.d4)(f.Jz),
                        t = (0, r.useRef)(!1),
                        a = (0, r.useMemo)(() => e === w.pU.FASTER_UPLOAD_TRANSFER_WINDOW, [e]),
                        i = (0, r.useMemo)(() => l === v.r.STARTED || l === v.r.PAUSED || l === v.r.FINISHED, [l]);
                    return (0, r.useEffect)(() => {
                        a && i && (t.current = !0), a || (t.current = !1)
                    }, [a, i]), a && (i || l === v.r.INIT && t.current)
                },
                I = () => {
                    let e = (0, n.d4)(w.oR),
                        l = (0, n.d4)(f.Jz),
                        t = (0, n.wA)(),
                        a = e === w.pU.FASTER_UPLOAD_TRANSFER_WINDOW || e === w.pU.FASTER_UPLOAD_TOOLTIP,
                        [i, s] = (0, r.useState)(!1),
                        d = (0, r.useRef)(null);
                    return (0, r.useEffect)(() => {
                        if (a && l === v.r.STARTED && !d.current && (d.current = Date.now()), l === v.r.INIT && (d.current = null, s(!1)), a && l === v.r.FINISHED) {
                            if (d.current) {
                                let e = 5e3 - (Date.now() - d.current);
                                if (e > 0) {
                                    let l = setTimeout(() => s(!0), e);
                                    return () => clearTimeout(l)
                                }
                            }
                            s(!0)
                        } else s(l === v.r.FINISHED)
                    }, [l, a]), (0, r.useEffect)(() => {
                        i && a && t((0, m.BV)(!0))
                    }, [i, t, a]), {
                        shouldShowCompleteState: i
                    }
                }
        },
        41821: (e, l, t) => {
            "use strict";
            t.r(l), t.d(l, {
                INVITE_ACCEPTED: () => L,
                INVITE_ID: () => f,
                INVITE_TOKEN: () => v,
                WORKSPACE_ID: () => b,
                default: () => E
            });
            var a = t(23798),
                i = t(21462),
                r = t(75546),
                n = t(38169),
                s = t(30403),
                d = t(22352),
                o = t(56264),
                _ = t(21848),
                c = t(39377),
                u = t(89187),
                w = t(51853),
                m = t(72255),
                p = t(74067),
                g = t(98172),
                h = t(86781),
                y = t(60743),
                x = t.n(y);
            let f = "inviteId",
                v = "inviteToken",
                b = "workspaceId",
                L = "inviteAccepted";

            function E() {
                let e = (0, p.LT)(),
                    [l] = (0, d.cg)(),
                    [t] = (0, d.XI)(),
                    [y] = (0, o.kH)(),
                    E = e.get(f),
                    S = e.get(v),
                    C = e.get(b),
                    A = e.get("email"),
                    P = (0, n.d4)(g.RJ),
                    T = (0, n.d4)(g.bF),
                    k = (0, n.d4)(h.JV),
                    R = (0, n.d4)(h.mB).email,
                    I = (0, n.wA)(),
                    {
                        addToast: j
                    } = (0, s.d)(),
                    {
                        t: M
                    } = (0, r.Bd)(),
                    [O, N] = (0, i.useState)(),
                    [F, U] = (0, i.useState)(null);
                return (0, i.useEffect)(() => {
                    let e = async () => {
                        var e, a, i;
                        if (!E || !S) return void N("GENERIC_ERROR");
                        if (!k) {
                            let l = new URLSearchParams;
                            l.set(f, E), l.set(v, S), C && l.set(b, C);
                            let t = !0;
                            if (A && (t = null != (a = null == (e = (await y({
                                    email: A
                                })).data) ? void 0 : e.exists) && a), t) I((0, _.iD)(void 0, {
                                loginHint: A || void 0,
                                trigger: "workspace_invite",
                                triggerUrl: window.location.href,
                                triggerUrlPath: window.location.pathname
                            }));
                            else {
                                let e = new URLSearchParams;
                                C && e.set(b, C), e.set(L, "true"), I((0, _.Hh)({
                                    tier: u.js.FREE,
                                    search: e.toString(),
                                    customParameters: {
                                        login_hint: A || void 0,
                                        trigger: "workspace_invite",
                                        trigger_url: window.location.href,
                                        trigger_url_path: window.location.pathname,
                                        invite_id: E || void 0,
                                        invite_token: S || void 0
                                    }
                                }))
                            }
                            return
                        }
                        try {
                            let e = await t({
                                inviteId: E,
                                inviteToken: S
                            }).unwrap();
                            if (!e || !e.email || !e.team) return void N("GENERIC_ERROR");
                            if (e.email.toLowerCase() !== R.toLowerCase()) {
                                N("INVALID_EMAIL"), U(e);
                                return
                            }
                            await l({
                                inviteId: E,
                                inviteToken: S
                            }).unwrap(), window.location.href = "".concat(w.kH.route, "?").concat(L, "=").concat(C)
                        } catch (e) {
                            (null == (i = e.data) ? void 0 : i.message) ? N(e.data.message): N("GENERIC_ERROR")
                        }
                    };
                    P && !T && e()
                }, [I, R, E, S, C, T, k, P, l, t, y, A]), (0, i.useEffect)(() => {
                    if (O) {
                        let e = "GENERIC_ERROR" === O ? M("join_workspace.error_generic") : O;
                        "INVALID_EMAIL" === O && (null == F ? void 0 : F.email) && (e = (0, a.jsx)(r.x6, {
                            i18nKey: "join_workspace.error_wrong_email",
                            components: {
                                1: (0, a.jsx)("span", {
                                    className: x().email
                                })
                            },
                            values: {
                                workspaceName: F.team.name,
                                email: F.email
                            }
                        })), j(e), m.A.navigateTo("/")
                    }
                }, [O, F, j, M]), (0, a.jsx)(c.r, {})
            }
        },
        44259: (e, l, t) => {
            "use strict";
            t.d(l, {
                Ay: () => x
            });
            var a = t(23798),
                i = t(21462),
                r = t(15321);
            class n extends i.Component {
                onMouseOut() {
                    this.setState({
                        hover: !1
                    }), this.props.onMouseOut && this.props.onMouseOut()
                }
                onMouseOver() {
                    this.setState({
                        hover: !0
                    }), this.props.onMouseOver && this.props.onMouseOver()
                }
                render() {
                    let {
                        className: e,
                        color: l,
                        hoverColor: t,
                        onClick: i
                    } = this.props, r = this.state.hover && t ? t : l;
                    return (0, a.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        className: e,
                        onMouseOut: this.onMouseOut,
                        onMouseOver: this.onMouseOver,
                        onClick: i,
                        children: (0, a.jsx)("path", {
                            d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zM0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12zm10.576 0l3.23 3.23c.447.448.452 1.17.002 1.62-.446.445-1.17.444-1.618-.004L8.154 12.81c-.225-.225-.337-.517-.338-.81 0-.292.11-.584.335-.808l4.04-4.038c.447-.448 1.17-.452 1.618-.003.446.448.446 1.172-.002 1.62L10.576 12z",
                            fill: r,
                            fillRule: "evenodd"
                        })
                    })
                }
                constructor(e) {
                    super(e), this.state = {
                        hover: !1
                    }, this.onMouseOut = this.onMouseOut.bind(this), this.onMouseOver = this.onMouseOver.bind(this)
                }
            }
            n.defaultProps = {
                color: r.$A
            };
            var s = t(84530),
                d = t(93591),
                o = t(24028),
                _ = t(39241),
                c = t(64976),
                u = t(20997),
                w = t(99230),
                m = t(82679),
                p = t(8502),
                g = t(16268);
            let h = {
                Alert: function(e) {
                    let {
                        color: l = r.NI,
                        ...t
                    } = e;
                    return (0, a.jsxs)("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        ...t,
                        children: [(0, a.jsx)("title", {
                            children: "Alert icon"
                        }), (0, a.jsx)("path", {
                            d: "M8.0002 5.99488V9.08896M6.68009 2.74034L0.92961 12.1499C0.299608 13.1807 1.04155 14.5036 2.24972 14.5036H13.7507C14.9588 14.5036 15.7008 13.1807 15.0708 12.1499L9.32031 2.74034C8.71705 1.75322 7.28334 1.75322 6.68009 2.74034Z",
                            stroke: l,
                            strokeWidth: "1.3",
                            strokeLinecap: "round"
                        }), (0, a.jsx)("ellipse", {
                            cx: "7.99914",
                            cy: "11.4093",
                            rx: "0.773549",
                            ry: "0.773521",
                            fill: l
                        })]
                    })
                },
                AlertFull: e => {
                    let {
                        className: l,
                        color: t = r.T9
                    } = e;
                    return (0, a.jsx)("svg", {
                        className: l,
                        width: "17",
                        height: "16",
                        viewBox: "0 0 17 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M7.33874 3.1818L2.67196 11.5142C2.17418 12.403 2.81659 13.4991 3.83527 13.4991H13.1688C14.1875 13.4991 14.8299 12.403 14.3321 11.5142L9.66535 3.1818C9.15621 2.27273 7.84788 2.27273 7.33874 3.1818ZM8.63974 10.1084L8.50888 10.0947H8.50205C8.14306 10.0947 7.85166 10.3861 7.85166 10.7451C7.85181 11.1039 8.14315 11.3945 8.50205 11.3945H8.50888L8.63974 11.3818C8.93585 11.3212 9.15817 11.0591 9.1583 10.7451C9.1583 10.431 8.93589 10.169 8.63974 10.1084ZM7.85166 5.92477V8.67868C7.85166 9.03766 8.14306 9.32907 8.50205 9.32907C8.86103 9.32907 9.15244 9.03766 9.15244 8.67868V5.92477C9.15244 5.56578 8.86103 5.27438 8.50205 5.27438C8.14306 5.27438 7.85166 5.56578 7.85166 5.92477Z",
                            fill: t
                        })
                    })
                },
                AlertCircle: e => {
                    let {
                        className: l
                    } = e;
                    return (0, a.jsx)("svg", {
                        className: l,
                        viewBox: "0 0 160 160",
                        children: (0, a.jsxs)("g", {
                            fillRule: "evenodd",
                            fill: "none",
                            children: [(0, a.jsx)("path", {
                                d: "M80 155.294C121.584 155.294 155.294 121.584 155.294 80C155.294 38.4162 121.584 4.70589 80 4.70589C38.4162 4.70589 4.70587 38.4162 4.70587 80C4.70587 121.584 38.4162 155.294 80 155.294Z",
                                stroke: "#EACA37",
                                strokeWidth: "8"
                            }), (0, a.jsx)("path", {
                                d: "M73.1869 50.7207L42.1992 100.712C38.8957 106.041 42.7286 112.927 48.9988 112.927H110.974C117.244 112.927 121.077 106.041 117.774 100.712L86.7861 50.7207C83.6578 45.6738 76.3152 45.6738 73.1869 50.7207ZM80.2326 92.6702L80.0265 92.6653H79.9865C77.7774 92.6653 75.9866 94.4562 75.9865 96.6653C75.9865 98.8745 77.7774 100.665 79.9865 100.665H80.0265L80.2326 100.66C82.346 100.553 84.0265 98.8053 84.0265 96.6653C84.0265 94.5254 82.3459 92.7774 80.2326 92.6702ZM75.9865 68.2083V84.47C75.9868 86.6789 77.7775 88.47 79.9865 88.47C82.1955 88.47 83.9862 86.6789 83.9865 84.47V68.2083C83.9865 65.9991 82.1956 64.2083 79.9865 64.2083C77.7774 64.2083 75.9865 65.9991 75.9865 68.2083Z",
                                fill: "#EACA37"
                            })]
                        })
                    })
                },
                Add: e => {
                    let {
                        className: l,
                        color: t = r.W5,
                        onClick: i
                    } = e;
                    return (0, a.jsx)("svg", {
                        className: l,
                        onClick: i,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsx)("path", {
                            d: "M11 11H7.995c-.54 0-.995.448-.995 1 0 .556.446 1 .995 1H11v3.005c0 .54.448.995 1 .995.556 0 1-.446 1-.995V13h3.005c.54 0 .995-.448.995-1 0-.556-.446-1-.995-1H13V7.995c0-.54-.448-.995-1-.995-.556 0-1 .446-1 .995V11zm1 13c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm0-2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
                            fill: t,
                            fillRule: "evenodd"
                        })
                    })
                },
                AddUser: e => {
                    let {
                        className: l,
                        onClick: t
                    } = e;
                    return (0, a.jsx)("svg", {
                        className: l,
                        onClick: t,
                        viewBox: "0 0 24 24",
                        height: "24",
                        width: "24",
                        "data-testid": "addUserIcon",
                        children: (0, a.jsx)("path", {
                            d: "M15 5.25C13.2051 5.25 11.75 6.70507 11.75 8.5C11.75 10.2949 13.2051 11.75 15 11.75C16.7949 11.75 18.25 10.2949 18.25 8.5C18.25 6.70507 16.7949 5.25 15 5.25ZM10.25 8.5C10.25 5.87665 12.3766 3.75 15 3.75C17.6234 3.75 19.75 5.87665 19.75 8.5C19.75 11.1234 17.6234 13.25 15 13.25C12.3766 13.25 10.25 11.1234 10.25 8.5ZM5 8.75C5.41421 8.75 5.75 9.08579 5.75 9.5V11.75H8C8.41421 11.75 8.75 12.0858 8.75 12.5C8.75 12.9142 8.41421 13.25 8 13.25H5.75V15.5C5.75 15.9142 5.41421 16.25 5 16.25C4.58579 16.25 4.25 15.9142 4.25 15.5V13.25H2C1.58579 13.25 1.25 12.9142 1.25 12.5C1.25 12.0858 1.58579 11.75 2 11.75H4.25V9.5C4.25 9.08579 4.58579 8.75 5 8.75ZM7.25 19.5C7.25 16.8766 9.37665 14.75 12 14.75H18C20.6234 14.75 22.75 16.8766 22.75 19.5V20.5C22.75 20.9142 22.4142 21.25 22 21.25C21.5858 21.25 21.25 20.9142 21.25 20.5V19.5C21.25 17.7051 19.7949 16.25 18 16.25H12C10.2051 16.25 8.75 17.7051 8.75 19.5V20.5C8.75 20.9142 8.41421 21.25 8 21.25C7.58579 21.25 7.25 20.9142 7.25 20.5V19.5Z",
                            strokeLinecap: "round"
                        })
                    })
                },
                AdvertAnimated: () => (0, a.jsxs)("svg", {
                    viewBox: "0 0 70 45",
                    children: [(0, a.jsxs)("defs", {
                        children: [(0, a.jsx)("circle", {
                            id: "a",
                            cx: "18",
                            cy: "22",
                            r: "3"
                        }), (0, a.jsx)("circle", {
                            id: "b",
                            cx: "54",
                            cy: "25",
                            r: "3"
                        })]
                    }), (0, a.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, a.jsx)("rect", {
                            fill: r.W5,
                            width: "70",
                            height: "45",
                            rx: "5"
                        }), (0, a.jsx)("path", {
                            d: "M17.026 22.35s9.53 11.25 18 0 18 0 18 0",
                            stroke: r.UE,
                            strokeWidth: "2",
                            strokeLinecap: "square"
                        }), (0, a.jsx)("use", {
                            fill: r.UE,
                            xlinkHref: "#a"
                        }), (0, a.jsx)("circle", {
                            stroke: r.W5,
                            strokeWidth: "2",
                            cx: "18",
                            cy: "22",
                            r: "4"
                        }), (0, a.jsxs)("g", {
                            children: [(0, a.jsx)("use", {
                                fill: r.UE,
                                xlinkHref: "#b"
                            }), (0, a.jsx)("circle", {
                                stroke: r.W5,
                                strokeWidth: "2",
                                cx: "54",
                                cy: "25",
                                r: "4"
                            })]
                        })]
                    })]
                }),
                AdvertCustom: () => (0, a.jsx)("svg", {
                    viewBox: "0 0 70 45",
                    children: (0, a.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, a.jsx)("rect", {
                            fill: r.W5,
                            width: "70",
                            height: "45",
                            rx: "5"
                        }), (0, a.jsx)("path", {
                            d: "M45.757 19.692c.218-.214.295-.532.2-.82-.097-.29-.35-.5-.653-.543l-6.21-.876c-.264-.036-.492-.2-.61-.437l-2.8-5.57c-.136-.273-.416-.447-.723-.447s-.587.174-.722.448l-2.746 5.613c-.117.237-.343.4-.605.438l-6.202.93c-.302.045-.553.258-.647.548-.093.29-.013.607.207.82l4.513 4.33c.19.184.28.45.235.71l-1.034 6.148c-.05.3.075.604.323.78.25.18.578.2.85.058L34.67 28.9c.236-.123.517-.123.75 0l5.565 2.865c.272.14.6.115.847-.065s.37-.484.317-.784l-1.1-6.14c-.05-.258.033-.524.22-.71l4.487-4.374z",
                            fill: r.UE,
                            fillRule: "nonzero"
                        })]
                    })
                }),
                AdvertInteractive: () => (0, a.jsx)("svg", {
                    viewBox: "0 0 70 45",
                    children: (0, a.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, a.jsx)("rect", {
                            fill: r.W5,
                            width: "70",
                            height: "45",
                            rx: "5"
                        }), (0, a.jsx)("circle", {
                            fill: r.UE,
                            opacity: ".2",
                            cx: "27",
                            cy: "22",
                            r: "10"
                        }), (0, a.jsx)("circle", {
                            fill: r.UE,
                            opacity: ".4",
                            cx: "35",
                            cy: "22",
                            r: "10"
                        }), (0, a.jsx)("circle", {
                            fill: r.UE,
                            cx: "42",
                            cy: "22",
                            r: "10"
                        })]
                    })
                }),
                AdvertStatic: () => (0, a.jsx)("svg", {
                    viewBox: "0 0 70 45",
                    className: "icon__advert-static",
                    children: (0, a.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, a.jsx)("rect", {
                            width: "70",
                            height: "45",
                            fill: r.W5,
                            rx: "5"
                        }), (0, a.jsx)("path", {
                            fill: r.UE,
                            d: "M20.44 21.86l8.48-3.52v2.18l-6.1 2.36 6.1 2.38v2.24l-8.48-3.56v-2.08zm28.64 2.12L40.6 27.5v-2.18l6.08-2.34-6.08-2.4v-2.24l8.48 3.56v2.08zM36.24 15h2.18l-6.16 14.24h-2.18"
                        })]
                    })
                }),
                AdvertVideo: () => (0, a.jsx)("svg", {
                    viewBox: "0 0 70 45",
                    className: "icon__advert-video",
                    children: (0, a.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, a.jsx)("rect", {
                            fill: r.W5,
                            width: "70",
                            height: "45",
                            rx: "5"
                        }), (0, a.jsx)("path", {
                            d: "M28 15.243c0-1.105.77-1.56 1.728-1.01l12.98 7.452c.953.548.956 1.434 0 1.984l-12.98 7.45c-.954.548-1.728.094-1.728-1.01V15.243z",
                            fill: r.UE
                        })]
                    })
                }),
                Amex: e => {
                    let {
                        className: l = "",
                        active: t = !0
                    } = e;
                    return (0, a.jsx)("svg", {
                        className: l,
                        viewBox: "0 0 26 26",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, a.jsxs)("g", {
                            fillRule: "nonzero",
                            fill: "none",
                            opacity: t ? "1" : ".25",
                            children: [(0, a.jsx)("path", {
                                d: "M0 0h26v4.2297c-1.2706.002-2.5421-.003-3.8127.0029-.2845.7986-.5612 1.5992-.8565 2.394-.315-.7879-.5789-1.5954-.8624-2.395-1.6473-.0039-3.2947-.002-4.941-.001-.001 1.0665.0098 2.133-.0059 3.1995-.4935-1.0586-.9527-2.133-1.4295-3.1985-1.3314-.0049-2.6618 0-3.9932-.002-1.3834 3.125-2.7648 6.2528-4.1453 9.3797 1.1136.001 2.2282-.002 3.3417.001-.0068 2.7746.003 5.5492-.0049 8.3239 3.4536.0069 6.9072.0059 10.3598.001.5337-.6024 1.0793-1.194 1.6218-1.7877.5377.5985 1.0744 1.199 1.6209 1.7906 1.036-.001 2.0711.001 3.1072-.001V26H0V0z",
                                fill: "#016FD0"
                            }), (0, a.jsx)("path", {
                                d: "M10.813 5.2785c.8556-.0088 1.7112.001 2.5667-.0069 1.0841 2.4058 2.1163 4.836 3.2142 7.2349.0167-2.4097.004-4.8203.0059-7.231 1.038-.001 2.076-.0029 3.114.002.5368 1.4982 1.0656 2.9993 1.612 4.4946.573-1.4874 1.0891-2.9974 1.6337-4.4956 1.0135-.003 2.027-.001 3.0405-.002v7.2948h-1.9387c-.0098-1.6846.0157-3.3692-.0128-5.0528-.6465 1.6738-1.242 3.3672-1.8631 5.0508-.5828.003-1.1646.006-1.7474-.0049-.622-1.6826-1.2343-3.3692-1.8583-5.0509-.0412 1.6846-.005 3.3722-.0177 5.0578-1.403-.0079-2.806.0167-4.208-.0128a62.8355 62.8355 0 0 0-.6083-1.451c-1.1166.0039-2.2331.001-3.3496.001-.2012.4846-.4052.9683-.6005 1.456-.7319.0136-1.4628.0048-2.1948.0068 1.0685-2.4313 2.1507-4.8566 3.2123-7.2908zm.2728 4.1875c.6554.0029 1.3118.001 1.9682.001-.313-.788-.6486-1.567-.9704-2.3509-.3699.7663-.6613 1.5679-.9978 2.3499zM10.3912 13.6132c2.027-.0127 4.055.0196 6.081-.0167.05.0481.0981.0972.1472.1472-.0265.517-.0177 1.035-.0167 1.5531-1.404.001-2.809-.0039-4.214.003 0 .3787 0 .7574.005 1.1351 1.3686-.0058 2.7383-.0078 4.107.001-.003.5475-.003 1.095-.002 1.6424-1.3706.001-2.7413 0-4.111 0 .001.3768.001.7526 0 1.1293 1.405-.001 2.81-.001 4.215 0 0 .5583-.001 1.1175 0 1.6758 1.147-1.2029 2.2782-2.4214 3.4242-3.6253-1.0999-1.1656-2.184-2.3478-3.3064-3.4909-.0207-.0412-.0609-.1226-.0815-.1628.8595.0176 1.72.001 2.5804.0098.6995.779 1.401 1.556 2.1094 2.3263.6996-.783 1.4158-1.5522 2.1242-2.3283.8487-.002 1.6973.002 2.547-.002v.0334c-1.143 1.197-2.29 2.39-3.4261 3.594 1.143 1.2136 2.2988 2.4155 3.4261 3.6428v.0246c-.8565.0049-1.713 0-2.5696.0039-.723-.782-1.4354-1.5728-2.1467-2.3645-.7211.7868-1.4354 1.5776-2.1565 2.3635-2.9071-.003-5.8142 0-8.7213-.001-.0334-2.4302-.005-4.8624-.0147-7.2937z",
                                fill: "#016FD0"
                            }), (0, a.jsx)("path", {
                                d: "M24.02 17.2424c.6476-.7162 1.3452-1.3863 1.98-2.1133v4.2267c-.6485-.7153-1.3128-1.4158-1.98-2.1134z",
                                fill: "#016FD0"
                            }), (0, a.jsxs)("g", {
                                fill: "#FFF",
                                children: [(0, a.jsx)("path", {
                                    d: "M10.0988 4.2297c1.3314.002 2.6618-.003 3.9932.002.4768 1.0654.936 2.1398 1.4295 3.1984.0157-1.0665.005-2.133.0059-3.1995 1.6463-.001 3.2937-.0029 4.941.001.2835.7996.5474 1.6071.8624 2.395.2953-.7948.572-1.5954.8565-2.394 1.2706-.0059 2.5421-.001 3.8127-.003v1.045c-1.0135.001-2.027-.001-3.0405.002-.5446 1.4981-1.0606 3.008-1.6336 4.4955-.5465-1.4953-1.0753-2.9964-1.612-4.4946-1.038-.0049-2.076-.003-3.1141-.002-.002 2.4107.0108 4.8213-.006 7.231-1.0978-2.3989-2.13-4.8291-3.2141-7.2349-.8555.0079-1.7111-.002-2.5666.0069-1.0616 2.4342-2.1438 4.8595-3.2123 7.2908.732-.002 1.4629.0068 2.1948-.0069.1953-.4876.3993-.9713.6005-1.456 1.1165 0 2.233.003 3.3496-.001.208.4808.412.9645.6083 1.4511 1.402.0295 2.805.005 4.208.0128.0128-1.6856-.0235-3.3732.0177-5.0578.624 1.6817 1.2362 3.3683 1.8583 5.051.5828.0107 1.1646.0078 1.7474.0048.621-1.6836 1.2166-3.377 1.8631-5.0508.0285 1.6836.003 3.3682.0128 5.0528H26v1.041c-.8497.0039-1.6983 0-2.547.002-.7084.776-1.4246 1.5452-2.1242 2.3282-.7083-.7702-1.4099-1.5473-2.1094-2.3263-.8605-.0088-1.721.0078-2.5804-.0098.0206.0402.0608.1216.0815.1628 1.1224 1.143 2.2065 2.3253 3.3064 3.491-1.146 1.2038-2.2772 2.4223-3.4242 3.6252-.001-.5583 0-1.1175 0-1.6758-1.405-.001-2.81-.001-4.215 0 .001-.3767.001-.7525 0-1.1293 1.3697 0 2.7404.001 4.111 0-.001-.5474-.001-1.095.002-1.6424-1.3687-.0088-2.7384-.0068-4.107-.001-.005-.3777-.005-.7564-.005-1.1351 1.405-.0069 2.81-.002 4.214-.003-.001-.518-.0098-1.036.0167-1.5531-.049-.05-.0971-.0991-.1472-.1472-2.026.0363-4.054.004-6.081.0167.0098 2.4313-.0187 4.8635.0147 7.2937 2.907.001 5.8142-.002 8.7213.001.7211-.7859 1.4354-1.5767 2.1565-2.3635.7113.7917 1.4236 1.5825 2.1467 2.3645.8565-.004 1.713.001 2.5696-.004v1.0322c-1.036.002-2.0712 0-3.1072.001-.5465-.5916-1.0832-1.192-1.6209-1.7906-.5425.5936-1.088 1.1853-1.6218 1.7877-3.4526.0049-6.9062.0059-10.3598-.001.0079-2.7747-.002-5.5493.005-8.324-1.1136-.0029-2.2282 0-3.3418-.001 1.3805-3.1268 2.7619-6.2546 4.1453-9.3795z"
                                }), (0, a.jsx)("path", {
                                    d: "M11.0858 9.466c.3365-.782.628-1.5836.9978-2.3499.3218.784.6574 1.563.9704 2.3508-.6564 0-1.3128.002-1.9682-.001zM22.5739 17.2375c1.1361-1.2038 2.283-2.3969 3.4261-3.5939v1.4855c-.6348.727-1.3324 1.397-1.98 2.1133.6672.6976 1.3315 1.3981 1.98 2.1134v1.5247c-1.1273-1.2274-2.2831-2.4293-3.4261-3.643z"
                                })]
                            })]
                        })
                    })
                },
                Android: e => {
                    let {
                        width: l = 16,
                        color: t = r.UE
                    } = e;
                    return (0, a.jsx)("svg", {
                        width: l,
                        height: l,
                        viewBox: "20 17 15 16",
                        children: (0, a.jsx)("path", {
                            fill: t,
                            fillRule: "evenodd",
                            d: "M21.22 32.85c.37.067.808-.015 1.276-.27l8.213-4.482-2.39-2.41-7.1 7.162zM20.41 17.71c-.204.297-.322.704-.322 1.205V31.12c0 .49.112.89.307 1.182l7.24-7.304-7.224-7.287zM30.694 21.914l-8.197-4.46c-.455-.247-.882-.332-1.245-.275l7.068 7.128 2.374-2.394zM31.597 27.614l2.37-1.295c1.326-.723 1.325-1.904 0-2.625l-2.385-1.297-2.578 2.6 2.593 2.616z"
                        })
                    })
                },
                Apple: e => {
                    let {
                        width: l = 39,
                        color: t = r.UE
                    } = e;
                    return (0, a.jsx)("svg", {
                        width: l,
                        height: l,
                        viewBox: "78 0 32 39",
                        children: (0, a.jsx)("path", {
                            fill: t,
                            fillRule: "evenodd",
                            d: "M99.63 6.066c.984-1.67 1.937-3.858 1.73-6.066-1.992.07-4.318 1.256-6.05 2.6-.9 1.638-1.984 3.914-1.727 6.066 2.176.126 4.358-1.075 6.048-2.6zm6.05 18.2c-.784-1.27-1.068-3.203-.864-5.2.287-1.68 1.63-3.78 2.592-4.334.123-.218.137-.228 0 0 .393-.503 1.07-1.04 1.728-1.733-1.89-2.084-4.66-3.406-7.777-3.467-2.55-.217-5.502 1.792-6.913 1.733-1.72.06-4.048-1.754-6.912-1.733.33.09-.112.114 0 0-3.366.193-6.25 2.082-7.777 5.2-.77.777-1.547 3.182-1.728 4.332v.867c-.09.552.06 3.126 0 4.333.244.053.246.075 0 0 .39 1.324 1.025 3.708 1.728 5.2.23.973 1.508 3.39 2.592 4.332 1.42 2.66 3.382 5.31 6.05 5.2 2.422-.097 3.342-1.64 6.047-1.734 3.318.094 4.15 1.657 6.912 1.734 2.566-.18 4.233-2.537 6.048-5.2.67-.916 1.952-3.257 2.592-4.333-.13-.46-.054-.687 0-.866-1.77-.48-3.753-2.774-4.32-4.333z"
                        })
                    })
                },
                Appstore: e => {
                    let {
                        width: l = 19,
                        color: t = r.UE
                    } = e;
                    return (0, a.jsx)("svg", {
                        width: l,
                        height: l,
                        viewBox: "424 135 26 23",
                        children: (0, a.jsx)("path", {
                            fill: t,
                            fillRule: "evenodd",
                            d: "M449.5122 149.4132h-3.2455l-1.8206-3.244h5.0662v3.244zm-2.2302 7.8243s-.2298-.9433-.9887-1.6343c-.4154-.3783-1.2934-.7002-1.6333-1.2217-.9407-1.4436-.1566-2.0972-.0144-2.1874.004-.0064.005-.012.0265-.025.4014-.2388.895-.5358 1.3136-.785.0306-.018.117-.068.0883-.0523.3778-.2057 1.5604.198 1.8767 2.3398.2542 1.72-.6687 3.566-.6687 3.566zm-5.017-7.7724l2.4986-1.465 1.4648 2.4985-2.4982 1.465-1.465-2.4984zm-6.6617-11.756c-.186-.5175-.1175-1.0895.3274-1.3238l.775-.4203c.6138-.2346 1.0652.1477 1.2272.4237l6.5375 11.1117-2.4985 1.465-6.3687-11.2564zm-2.7358 11.4725l1.6085-3.0122h5.2336l1.631 3.0122h-8.473zm-5.6025 2.573l5.6736-9.7678 2.5046 1.4547-5.6736 9.7676-2.5046-1.4546zm-1.5607 5.4285l1.27-4.9277 2.5045 1.4547-3.7745 3.473zm-1.2165-11.0137h5.344l-1.7122 3.0122h-3.6318v-3.0122zm9.597-6.129c.1607-.2766.6602-.642 1.2446-.3185l.8872.4928c.349.215.624.696.391 1.2804l-.8736 1.4457c-.2146-.125-.3576-.208-.4535-.2635.004.002.002.001-.0063-.0037-.0002-.0002-.0007-.0002-.001-.0005l.0008.0003-.0292-.017c-.001-.0006-.0023.0186-.0035.018-.0002 0-.0007.0194-.001.0194h-.0003c-.002 0-.0937-.0223-.0937-.024v-.01c0-.0135-.0004-.0304-.0157-.0395.003.002.0276.001.0308.0028l-.0317-.026c.001.0007.007.0005.0085.0012-.004-.002-.0055-.005-.0085-.0067-.0183-.0107-.021-.0132-.0035-.003l-1.3965-.8117c-.011-.0065-.0167-.0097-.0232-.0137-.007-.0038-.014-.008-.024-.014.004.0025.0127.0074.018.0104l-.036-.0208-.435-.2528.8554-1.4454z"
                        })
                    })
                },
                Arrow: e => {
                    let {
                        className: l = "",
                        color: t = r.W5,
                        onClick: i,
                        orientation: n = "left",
                        thickness: s = 2
                    } = e;
                    return (0, a.jsx)("svg", {
                        className: "arrow-icon--".concat(n, " ").concat(l),
                        onClick: i,
                        viewBox: "-1 14 9 12",
                        children: (0, a.jsx)("path", {
                            stroke: t,
                            strokeWidth: s,
                            d: "M5 15l-5 5 5 5",
                            fill: "none",
                            fillRule: "evenodd",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                },
                ArrowCircle: n,
                ArrowLeft: e => {
                    let {
                        width: l = 24,
                        color: t = r.W5
                    } = e;
                    return (0, a.jsx)("svg", {
                        width: l,
                        height: l,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, a.jsx)("g", {
                            id: "icon=arrow.left",
                            children: (0, a.jsx)("path", {
                                fill: t,
                                id: "arrow.forward",
                                d: "M19 12L5 12M5 12L11.8571 19M5 12L11.8571 5",
                                stroke: "currentColor",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            })
                        })
                    })
                },
                ArrowRight: e => {
                    let {
                        width: l = 24,
                        color: t = r.W5
                    } = e;
                    return (0, a.jsx)("svg", {
                        width: l,
                        height: l,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, a.jsx)("g", {
                            id: "icon=arrow.right",
                            children: (0, a.jsx)("path", {
                                fill: t,
                                id: "arrow.forward",
                                d: "M5 12H19M19 12L12.1429 5M19 12L12.1429 19",
                                stroke: "currentColor",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            })
                        })
                    })
                },
                ArrowUpSolid: e => {
                    let {
                        fillColor: l = r.W5,
                        arrowColor: t = r.UE
                    } = e;
                    return (0, a.jsxs)("svg", {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, a.jsx)("path", {
                            d: "M11.8394 7.836C11.4065 10.6783 9.32591 12.0227 6 11.9997C2.67409 12.0227 0.593927 10.6783 0.16062 7.836C0.0560284 7.15083 0 6.57028 0 6C0 5.43277 0.0560284 4.84978 0.16062 4.164C0.59346 1.32169 2.67409 -0.0226802 6 0.000288486C9.32591 -0.0226802 11.4061 1.32169 11.8394 4.164C11.944 4.84917 12 5.42972 12 6C12 6.56784 11.944 7.15083 11.8394 7.836Z",
                            fill: l
                        }), (0, a.jsx)("path", {
                            d: "M5.68644 2.72251C5.84799 2.52058 6.15511 2.52058 6.31665 2.72252L8.48296 5.43061C8.72424 5.73223 8.44466 6.16786 8.06994 6.07414L6.09949 5.58129C6.03522 5.56521 5.96798 5.56521 5.90371 5.58128L3.93318 6.07391C3.55847 6.16759 3.27893 5.73197 3.52021 5.43036L5.68644 2.72251Z",
                            fill: t
                        }), (0, a.jsx)("rect", {
                            x: "5.35547",
                            y: "4.75",
                            width: "1.29127",
                            height: "4.84228",
                            rx: "0.645633",
                            fill: t
                        })]
                    })
                },
                Bancontact: e => {
                    let {
                        className: l = ""
                    } = e;
                    return (0, a.jsx)("svg", {
                        className: l,
                        viewBox: "0 0 45 32",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, a.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, a.jsx)("path", {
                                d: "M44.876 29.188c0 1.51-1.225 2.743-2.725 2.743H2.74c-1.5 0-2.725-1.233-2.725-2.743V2.743C.014 1.233 1.239 0 2.739 0H42.15c1.5 0 2.725 1.233 2.725 2.743v26.445z",
                                fill: r.UE
                            }), (0, a.jsx)("path", {
                                d: "M36.055 8.921H25.28l-1.101 1.247-3.55 4.031-1.101 1.247H8.904l1.073-1.26.51-.596 1.073-1.261H6.674c-.894 0-1.624.762-1.624 1.676v3.547c0 .928.73 1.676 1.624 1.676H25.417c.895 0 2.12-.554 2.711-1.247l2.835-3.242 5.092-5.818z",
                                fill: "#005498"
                            }), (0, a.jsx)("path", {
                                d: "M38.216 5.14c.894 0 1.623.761 1.623 1.676v3.532c0 .928-.729 1.676-1.623 1.676h-4.872l1.087-1.247.537-.623 1.087-1.247H25.28l-5.739 6.511H8.85l7.665-8.727.289-.333c.605-.678 1.83-1.246 2.725-1.246h18.688v.027z",
                                fill: "#FFD800"
                            }), (0, a.jsx)("path", {
                                d: "M39.84 26.653v-.513c0-.069-.042-.11-.138-.11h-.33c-.097 0-.166-.014-.18-.056-.027-.042-.027-.125-.027-.263v-1.94h.537a.125.125 0 0 0 .096-.041.126.126 0 0 0 .041-.097v-.54a.126.126 0 0 0-.04-.097.125.125 0 0 0-.097-.042h-.537v-.706c0-.042-.014-.07-.027-.083-.028-.014-.055-.028-.083-.028h-.014l-.798.138a.669.669 0 0 0-.096.042c-.028.028-.041.055-.041.083v.54h-.537a.125.125 0 0 0-.097.042.126.126 0 0 0-.04.097v.443c0 .042.013.07.04.083a.221.221 0 0 0 .097.056l.537.083v1.94c0 .235.027.429.068.58a.921.921 0 0 0 .207.347.73.73 0 0 0 .344.166c.137.028.303.042.481.042.097 0 .18 0 .262-.014.069-.014.165-.028.261-.041.07 0 .11-.042.11-.111zm-2.863-.07v-.595c0-.042-.014-.07-.041-.083a.195.195 0 0 0-.083-.028h-.014c-.123.014-.247.028-.357.028-.11.014-.262.014-.454.014a.524.524 0 0 1-.385-.166.535.535 0 0 1-.11-.236 1.403 1.403 0 0 1-.042-.374v-.554c0-.153.014-.277.041-.374a.749.749 0 0 1 .11-.236.524.524 0 0 1 .386-.166c.192 0 .344 0 .454.014.11.014.234.014.357.028h.014c.041 0 .069-.014.083-.028.027-.014.041-.042.041-.083v-.596c0-.055-.014-.083-.027-.097-.028-.014-.056-.041-.11-.055-.097-.028-.207-.042-.358-.07-.152-.027-.317-.027-.523-.027-.468 0-.84.138-1.129.43-.275.29-.426.706-.426 1.26v.554c0 .54.137.97.426 1.26.276.291.66.43 1.129.43.192 0 .371-.014.523-.028.151-.028.275-.041.357-.07a.207.207 0 0 0 .11-.054c.028-.014.028-.056.028-.097zm-4.307-.706c-.083.042-.165.07-.262.097a1.041 1.041 0 0 1-.289.042c-.137 0-.247-.014-.316-.056-.07-.041-.097-.125-.097-.277v-.055c0-.083.014-.153.028-.208a.359.359 0 0 1 .096-.152.36.36 0 0 1 .18-.084 1.45 1.45 0 0 1 .288-.027h.372v.72zm1.046-1.62c0-.25-.042-.458-.11-.624a1.157 1.157 0 0 0-.303-.416 1.124 1.124 0 0 0-.482-.235 2.362 2.362 0 0 0-.647-.083c-.22 0-.44.014-.646.041a2.85 2.85 0 0 0-.496.097c-.082.028-.124.07-.124.153v.54c0 .041.014.07.028.097.027.014.055.028.082.028h.028c.055 0 .124-.014.193-.014.082 0 .165-.014.261-.014s.206-.014.317-.014h.316c.151 0 .275.028.358.083.082.056.137.18.137.374v.236h-.357c-.565 0-.991.083-1.239.263-.261.18-.385.47-.385.859v.055c0 .222.027.402.096.54.069.153.151.264.262.36.11.084.22.153.357.194.138.042.276.056.427.056.193 0 .372-.028.51-.083.137-.056.274-.125.412-.222v.111c0 .042.014.07.041.097a.125.125 0 0 0 .097.041h.743a.125.125 0 0 0 .096-.041.126.126 0 0 0 .041-.097v-2.383h-.013zm-3.537 2.396v-.513c0-.069-.041-.11-.138-.11h-.33c-.096 0-.165-.014-.179-.056-.027-.042-.027-.125-.027-.263v-1.94h.536a.125.125 0 0 0 .097-.041.126.126 0 0 0 .04-.097v-.54a.126.126 0 0 0-.04-.097.125.125 0 0 0-.097-.042h-.536v-.706c0-.042-.014-.07-.028-.083-.027-.014-.055-.028-.083-.028h-.013l-.798.138c-.042.014-.07.028-.097.042-.027.028-.041.055-.041.083v.54h-.55a.125.125 0 0 0-.097.042.126.126 0 0 0-.041.097v.443c0 .042.014.07.041.083a.221.221 0 0 0 .097.056l.537.083v1.94c0 .235.028.429.069.58a.921.921 0 0 0 .206.347.73.73 0 0 0 .344.166c.137.028.303.042.482.042.096 0 .179 0 .262-.014.069-.014.165-.028.261-.041.083 0 .124-.042.124-.111zm-2.89-.014v-2.216c0-.208-.014-.402-.055-.596a1.36 1.36 0 0 0-.179-.485.803.803 0 0 0-.358-.319c-.151-.083-.344-.124-.591-.124-.207 0-.4.027-.565.083-.165.055-.33.138-.523.277v-.166a.126.126 0 0 0-.04-.097.125.125 0 0 0-.097-.042h-.743a.125.125 0 0 0-.097.042.126.126 0 0 0-.041.097v3.546c0 .042.014.07.041.097a.125.125 0 0 0 .097.041h.798a.125.125 0 0 0 .097-.041.126.126 0 0 0 .04-.097v-2.618c.11-.056.22-.111.33-.153a.78.78 0 0 1 .303-.055c.097 0 .18.014.248.028.069.014.11.055.152.097.04.055.055.11.068.194.014.083.014.18.014.29v2.217c0 .042.014.07.041.097a.125.125 0 0 0 .097.041h.798a.125.125 0 0 0 .097-.041c.055-.028.069-.07.069-.097zm-5.01-1.538c0 .54-.192.818-.59.818-.194 0-.345-.07-.441-.208-.097-.139-.152-.346-.152-.61v-.47c0-.278.055-.472.152-.61.096-.139.247-.208.44-.208.385 0 .592.277.592.817v.471zm1.074-.47c0-.264-.041-.513-.11-.721a1.512 1.512 0 0 0-.316-.54 1.387 1.387 0 0 0-.523-.347 1.89 1.89 0 0 0-.716-.124c-.275 0-.51.041-.716.124a1.387 1.387 0 0 0-.522.347 1.512 1.512 0 0 0-.317.54c-.069.208-.11.457-.11.72v.471c0 .264.041.513.11.72a1.387 1.387 0 0 0 .84.887c.206.083.44.125.715.125.275 0 .51-.042.716-.125.206-.083.385-.194.523-.346.137-.152.247-.333.316-.54.069-.208.11-.457.11-.72v-.472zm-3.674 1.953v-.596c0-.042-.014-.07-.041-.083-.028-.014-.055-.028-.097-.028h-.013c-.124.014-.248.028-.358.028-.11.014-.262.014-.454.014a.524.524 0 0 1-.385-.166.535.535 0 0 1-.11-.236 1.403 1.403 0 0 1-.042-.374v-.554c0-.153.014-.277.041-.374a.749.749 0 0 1 .11-.236.524.524 0 0 1 .386-.166c.192 0 .344 0 .454.014.11.014.234.014.358.028h.013c.042 0 .07-.014.097-.028.027-.014.04-.042.04-.083v-.596c0-.055-.013-.083-.027-.097-.027-.014-.055-.041-.11-.055-.096-.028-.206-.042-.358-.07-.15-.027-.316-.027-.522-.027-.468 0-.84.138-1.129.43-.275.29-.426.706-.426 1.26v.554c0 .54.137.97.426 1.26.275.291.66.43 1.129.43.192 0 .371-.014.522-.028.152-.028.262-.041.358-.07a.207.207 0 0 0 .11-.054c.028-.014.028-.056.028-.097zm-3.262.055v-2.216c0-.208-.013-.402-.055-.596a1.36 1.36 0 0 0-.179-.485.803.803 0 0 0-.357-.319c-.152-.083-.344-.124-.592-.124-.206 0-.4.027-.564.083-.165.055-.33.138-.523.277v-.166a.126.126 0 0 0-.041-.097.125.125 0 0 0-.097-.042h-.743a.125.125 0 0 0-.096.042.126.126 0 0 0-.042.097v3.546c0 .042.014.07.042.097a.125.125 0 0 0 .096.041h.798a.125.125 0 0 0 .097-.041.126.126 0 0 0 .04-.097v-2.618c.11-.056.221-.111.331-.153a.78.78 0 0 1 .303-.055c.096 0 .179.014.248.028.068.014.11.055.15.097.042.055.056.11.07.194.014.083.014.18.014.29v2.217c0 .042.013.07.04.097a.125.125 0 0 0 .097.041h.798a.125.125 0 0 0 .097-.041c.055-.028.068-.07.068-.097zm-5.119-.762c-.082.042-.165.07-.261.097a1.041 1.041 0 0 1-.29.042c-.137 0-.247-.014-.316-.056-.069-.041-.096-.125-.096-.277v-.055c0-.083.014-.153.027-.208a.359.359 0 0 1 .097-.152.36.36 0 0 1 .179-.084 1.45 1.45 0 0 1 .289-.027h.371v.72zm1.06-1.62c0-.25-.041-.458-.11-.624a1.157 1.157 0 0 0-.303-.416 1.124 1.124 0 0 0-.482-.235 2.362 2.362 0 0 0-.646-.083c-.22 0-.44.014-.647.041a2.85 2.85 0 0 0-.496.097c-.082.028-.124.07-.124.153v.54c0 .041.014.07.028.097.028.014.055.028.083.028h.027c.055 0 .124-.014.193-.014.082 0 .165-.014.275-.014.096 0 .206-.014.316-.014h.317c.151 0 .275.028.358.083.082.056.137.18.137.374v.236h-.357c-.565 0-.991.083-1.239.263-.261.18-.385.47-.385.859v.055c0 .222.027.402.096.54.069.153.151.264.262.36.11.084.22.153.357.194.138.042.276.056.427.056.193 0 .372-.028.51-.083.137-.056.274-.125.412-.222v.111c0 .042.014.07.041.097a.125.125 0 0 0 .097.041h.743a.125.125 0 0 0 .096-.041.126.126 0 0 0 .041-.097v-2.383h-.027zm-4.734 1.052a.53.53 0 0 1-.193.43c-.124.096-.371.152-.702.152h-.55v-1.247h.743c.261 0 .454.056.55.18a.67.67 0 0 1 .152.416v.07zm-.028-1.98c0 .068-.013.138-.027.207a.353.353 0 0 1-.11.166.728.728 0 0 1-.207.111 1.067 1.067 0 0 1-.33.042h-.743v-1.15h.509c.344 0 .578.041.716.124.137.084.206.222.206.402l-.014.097zm1.129 1.91c0-.235-.055-.429-.165-.595a1.048 1.048 0 0 0-.427-.388.935.935 0 0 0 .413-.388c.096-.18.151-.374.151-.581v-.125c0-.263-.055-.485-.151-.665a1.157 1.157 0 0 0-.427-.43c-.179-.11-.399-.18-.66-.235a5.322 5.322 0 0 0-.853-.07h-.33c-.11 0-.221.015-.331.015-.11 0-.206.013-.303.027-.096.014-.165.014-.22.028-.124.028-.22.055-.275.125-.055.055-.083.166-.083.318v4.06c0 .152.028.249.083.318a.569.569 0 0 0 .275.124c.069.014.151.028.234.028.096.014.193.014.303.028.11.014.22.014.33.014h.344c.289 0 .564-.028.812-.07.248-.041.468-.124.66-.235.193-.11.33-.263.455-.457.11-.194.165-.443.165-.734v-.111z",
                                fill: "#005498",
                                fillRule: "nonzero"
                            }), (0, a.jsx)("path", {
                                d: "M0 0h44.862v31.931H0z"
                            })]
                        })
                    })
                },
                Browser: e => {
                    let {
                        circles: l = [{
                            cx: 16,
                            cy: 20,
                            r: 6
                        }, {
                            cx: 33,
                            cy: 20,
                            r: 6
                        }, {
                            cx: 50,
                            cy: 20,
                            r: 6
                        }],
                        className: t,
                        domain: i,
                        height: n = 214,
                        navBar: d = {
                            height: 28,
                            rx: 3,
                            x: 66,
                            y: 6
                        },
                        navBarText: o = {
                            x: 75,
                            y: 23,
                            fontSize: 12
                        },
                        width: _ = 313
                    } = e, c = s.A.t("form.onboarding.placeholder.subdomain_name"), u = (0, a.jsxs)("tspan", {
                        x: o.x,
                        y: o.y,
                        fill: r.Id,
                        children: [(0, a.jsx)("tspan", {
                            fill: r.Uv,
                            children: c
                        }), ".", i]
                    }), w = ["browser"];
                    return t && w.push(t), (0, a.jsxs)("svg", {
                        className: w.join(" "),
                        width: "".concat(_, "px"),
                        height: "".concat(n, "px"),
                        viewBox: "0 0 313 214",
                        children: [(0, a.jsxs)("defs", {
                            children: [(0, a.jsx)("rect", {
                                id: "browser-icon-a",
                                width: "310",
                                height: "210",
                                rx: "5"
                            }), (0, a.jsxs)("filter", {
                                x: "0%",
                                y: "0%",
                                width: "100%",
                                height: "100%",
                                filterUnits: "objectBoundingBox",
                                id: "browser-icon-b",
                                children: [(0, a.jsx)("feOffset", {
                                    dx: "3",
                                    dy: "3",
                                    in: "SourceAlpha",
                                    result: "shadowOffsetOuter1"
                                }), (0, a.jsx)("feColorMatrix", {
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.114583333 0",
                                    in: "shadowOffsetOuter1"
                                })]
                            })]
                        }), (0, a.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, a.jsx)("mask", {
                                id: "browser-icon-c",
                                fill: r.UE,
                                children: (0, a.jsx)("use", {
                                    xlinkHref: "#browser-icon-a"
                                })
                            }), (0, a.jsx)("use", {
                                fill: r.Uv,
                                filter: "url(#browser-icon-b)",
                                xlinkHref: "#browser-icon-a"
                            }), (0, a.jsx)("use", {
                                fill: r._5,
                                xlinkHref: "#browser-icon-a"
                            }), (0, a.jsx)("path", {
                                fill: r.Id,
                                mask: "url(#browser-icon-c)",
                                d: "M0 40h470v280H0z"
                            }), (0, a.jsx)("rect", {
                                fill: r.UE,
                                mask: "url(#browser-icon-c)",
                                width: "75%",
                                ...d
                            }), (0, a.jsx)("clipPath", {
                                id: "browser-icon-browser-text-clip",
                                children: (0, a.jsx)("rect", {
                                    width: "70%",
                                    x: o.x,
                                    y: "6",
                                    height: "28"
                                })
                            }), (0, a.jsx)("text", {
                                clipPath: "url(#browser-icon-browser-text-clip)",
                                mask: "url(#browser-icon-c)",
                                fontSize: o.fontSize,
                                children: u
                            }), (0, a.jsx)("circle", {
                                fill: "#CECECE",
                                mask: "url(#browser-icon-c)",
                                ...l[0]
                            }), (0, a.jsx)("circle", {
                                fill: "#CECECE",
                                mask: "url(#browser-icon-c)",
                                ...l[1]
                            }), (0, a.jsx)("circle", {
                                fill: "#CECECE",
                                mask: "url(#browser-icon-c)",
                                ...l[2]
                            })]
                        })]
                    })
                },
                CheckCircle: e => {
                    let {
                        className: l,
                        color: t = r.$A,
                        onClick: i,
                        onKeyDown: n,
                        tabIndex: s
                    } = e;
                    return (0, a.jsxs)("svg", {
                        className: l,
                        tabIndex: s,
                        onClick: i,
                        onKeyDown: n,
                        viewBox: "0 0 24 24",
                        "data-testid": "check-circle-icon",
                        children: [(0, a.jsx)("path", {
                            d: "M10.44 16.733c.454.448 1.203.377 1.567-.148l1.15-1.666 3.69-5.335c.322-.467.205-1.108-.262-1.43-.467-.324-1.108-.207-1.43.26l-4.145 6.018-2.288-2.278c-.405-.398-1.056-.393-1.455.012-.398.404-.393 1.056.01 1.454l3.162 3.113z",
                            fill: t,
                            fillRule: "evenodd"
                        }), (0, a.jsx)("path", {
                            d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm0-2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
                            fill: t,
                            fillRule: "evenodd"
                        })]
                    })
                },
                CheckCircleFull: d.A,
                CheckCircleLight: o.A,
                Chrome: e => {
                    let {
                        width: l = 37,
                        color: t = r.UE
                    } = e;
                    return (0, a.jsx)("svg", {
                        width: l,
                        height: l,
                        viewBox: "222 3 37 38",
                        children: (0, a.jsx)("path", {
                            fill: t,
                            fillRule: "evenodd",
                            d: "M234.87 21.5c0-1.57.546-2.9 1.638-3.992 1.093-1.092 2.423-1.638 3.992-1.638 1.57 0 2.9.546 3.992 1.638 1.092 1.093 1.638 2.423 1.638 3.992 0 1.57-.546 2.9-1.638 3.992-1.093 1.092-2.423 1.638-3.992 1.638-1.57 0-2.9-.546-3.992-1.638-1.092-1.093-1.638-2.423-1.638-3.992zm23.878-3.226c.168.995.252 2.046.252 3.15 0 4.37-1.372 8.238-4.115 11.61-2.744 3.373-6.244 5.53-10.5 6.468-1.12.222-1.96.36-2.52.415-.39.055-.95.083-1.678.083-.952 0-1.652-.028-2.1-.083v-.083l8.567-14.677c.728-1.16 1.092-2.405 1.092-3.732 0-2.1-.896-3.952-2.688-5.555h13.102c.168.497.364 1.3.588 2.404-.224-1.105-.42-1.907-.588-2.404.168.497.364 1.3.588 2.404zM240.516 28.5c.77 0 1.57-.136 2.397-.41l-6.447 11.106c-3.417-.713-6.393-2.33-8.928-4.854C223.846 30.777 222 26.39 222 21.18c0-2.632.496-5.045 1.488-7.24.55-1.206 1.267-2.44 2.15-3.7l8.513 14.642c1.434 2.413 3.555 3.62 6.366 3.62zm-13.69-19.514v-.082c2.093-2.24 4.57-3.854 7.435-4.838C236.3 3.356 238.365 3 240.458 3c2.973 0 5.74.656 8.302 1.968 2.56 1.312 4.72 3.116 6.483 5.412h.083c.716.984 1.404 2.186 2.065 3.608-.66-1.422-1.348-2.624-2.064-3.608h-.083c.882 1.202 1.598 2.405 2.148 3.608h-16.933c-1.763 0-3.32.56-4.668 1.68-1.35 1.12-2.19 2.53-2.52 4.223l-6.444-10.904z"
                        })
                    })
                },
                Cli: e => {
                    let {
                        width: l = 38,
                        color: t = r.W5
                    } = e;
                    return (0, a.jsx)("svg", {
                        width: l,
                        height: l,
                        viewBox: "0 0 38 38",
                        children: (0, a.jsx)("path", {
                            fill: t,
                            fillRule: "evenodd",
                            d: "M5 0h28c2.76 0 5 2.24 5 5v28c0 2.76-2.24 5-5 5H5c-2.76 0-5-2.24-5-5V5c0-2.76 2.24-5 5-5zm1.282 15.304c-.385.397-.374 1.03.022 1.414.397.385 1.03.374 1.414-.022l4-4.13c.385-.397.374-1.03-.023-1.415l-4-3.87c-.397-.383-1.03-.372-1.414.025-.383.397-.372 1.03.025 1.414l3.28 3.173-3.303 3.41zM19 16h-5c-.552 0-1 .448-1 1s.448 1 1 1h5c.552 0 1-.448 1-1s-.448-1-1-1z"
                        })
                    })
                },
                CreditCard: e => {
                    let {
                        className: l = "",
                        active: t = !0
                    } = e;
                    return (0, a.jsx)("svg", {
                        className: l,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, a.jsx)("g", {
                            fillRule: "nonzero",
                            fill: "none",
                            opacity: t ? "1" : ".25",
                            children: (0, a.jsx)("path", {
                                d: "M6 15H8M3 11H21M3 8H21M12 15H16M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z",
                                stroke: "#000000",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            })
                        })
                    })
                },
                Circle: e => {
                    let {
                        width: l = 18,
                        color: t = r.W5
                    } = e;
                    return (0, a.jsx)("svg", {
                        width: l,
                        height: l,
                        viewBox: "0 0 18 18",
                        children: (0, a.jsx)("rect", {
                            fill: t,
                            fillRule: "evenodd",
                            x: "1",
                            y: "1",
                            width: "16",
                            height: "16",
                            rx: "8"
                        })
                    })
                },
                Close: e => {
                    let {
                        className: l,
                        color: t = r.$A,
                        hoverColor: n,
                        onClick: s,
                        onKeyDown: d,
                        tabIndex: o,
                        label: _
                    } = e, [c, u] = (0, i.useState)(!1);
                    return (0, a.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        className: l,
                        tabIndex: o,
                        onMouseOut: () => u(!1),
                        onMouseOver: () => u(!0),
                        onKeyDown: d,
                        onClick: s,
                        "aria-label": _,
                        "data-testid": "close-icon",
                        children: (0, a.jsx)("path", {
                            fill: c && n ? n : t,
                            fillRule: "evenodd",
                            d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zm-10-1.414L9.875 8.46c-.38-.38-1.02-.386-1.41.004-.394.394-.393 1.023-.004 1.41L10.587 12 8.46 14.125c-.38.38-.386 1.02.004 1.41.394.394 1.023.393 1.41.004L12 13.413l2.125 2.125c.38.38 1.02.386 1.41-.004.394-.394.393-1.023.004-1.41L13.413 12l2.125-2.125c.38-.38.386-1.02-.004-1.41-.394-.394-1.023-.393-1.41-.004L12 10.587zM0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12z"
                        })
                    })
                },
                CloseNoCircle: e => {
                    let {
                        width: l = 24,
                        color: t = r.W5
                    } = e;
                    return (0, a.jsx)("svg", {
                        width: l,
                        height: l,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, a.jsx)("g", {
                            id: "icon=x",
                            children: (0, a.jsx)("path", {
                                fill: t,
                                id: "decline",
                                d: "M5 5L12 12M19 19L12 12M12 12L19 5L5 19",
                                stroke: "currentColor",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            })
                        })
                    })
                },
                Clock: e => {
                    let {
                        className: l,
                        color: t = "#161616",
                        onClick: i
                    } = e;
                    return (0, a.jsxs)("svg", {
                        width: "16",
                        height: "17",
                        viewBox: "0 0 16 17",
                        fill: "none",
                        className: l,
                        onClick: i,
                        children: [(0, a.jsx)("title", {
                            children: "Clock icon"
                        }), (0, a.jsx)("g", {
                            clipPath: "url(#clockClipPath)",
                            children: (0, a.jsx)("path", {
                                d: "M7.33335 4.27774V8.49996C7.33335 8.86815 7.63183 9.16662 8.00002 9.16662H10.5926M8.00002 15.8333C3.94993 15.8333 0.666687 12.55 0.666687 8.49996C0.666687 4.44987 3.94993 1.16663 8.00002 1.16663C12.0501 1.16663 15.3334 4.44987 15.3334 8.49996C15.3334 12.55 12.0501 15.8333 8.00002 15.8333Z",
                                stroke: t,
                                strokeWidth: "1.3",
                                strokeLinecap: "round"
                            })
                        }), (0, a.jsx)("defs", {
                            children: (0, a.jsx)("clipPath", {
                                id: "clockClipPath",
                                children: (0, a.jsx)("rect", {
                                    width: "16",
                                    height: "16",
                                    fill: "white",
                                    transform: "translate(0 0.5)"
                                })
                            })
                        })]
                    })
                },
                Collect: e => {
                    let {
                        width: l = 24
                    } = e;
                    return (0, a.jsxs)("svg", {
                        className: "logo",
                        width: l,
                        id: "collect",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 366 169",
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            fill: "#f57767",
                            d: "M297 168.7c-54 0-85.9-36.7-85.9-84.9 0-51.7 36.7-82.3 84.3-82.3 42.5 0 70.6 22 70.6 51.7 0 28.1-24 46.3-51.1 46.3-14.7 0-25.6-2.9-32.9-8.6-2.9-2.2-4.5-1.9-4.5.6 0 10.5 3.8 19.5 10.9 26.5 5.7 5.7 16.6 9.6 26.8 9.6 10.5 0 19.8-2.2 28.1-6.4 8.3-4.1 15.3-2.9 19.5 3.8 4.8 7.7-1.9 17.5-7.7 23.9-10.8 11.5-31.3 19.8-58.1 19.8zM100.6 118.2c-5.1 0-8 2.9-11.5 8.3l-15.3 23.9c-5.7 9.3-10.5 15.6-21.7 15.6s-16.3-4.5-21.7-16.9c-6.7-15.3-13.7-33.8-20.1-58.7C3.2 62.7 0 45.5 0 31.4S4.5 9.1 19.8 6.2C40.9 2.4 69.3.1 100.6.1s59.7 2.2 80.8 6.1c15.3 2.9 19.8 11.2 19.8 25.2s-3.2 31.3-10.2 59c-6.4 24.9-13.4 43.4-20.1 58.7-5.4 12.4-10.5 16.9-21.7 16.9s-16-6.4-21.7-15.6l-15.3-23.9c-3.6-5.4-6.5-8.3-11.6-8.3z"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            fill: "#f5515c",
                            d: "M181.4 6.2c-3.1-.6-6.4-1.1-9.8-1.6-4.8 38.4 2.6 78.1 17.6 92.2.6-2.1 1.1-4.2 1.7-6.4 7-27.8 10.2-45 10.2-59 .1-14-4.4-22.3-19.7-25.2zM211.1 83.8c0 5.6.5 11.1 1.3 16.3 25.9-9.9 39.1-50.7 72.5-80.6 8.3-7.5 16.8-13 25.2-17.1-4.7-.6-9.6-.9-14.7-.9-47.6 0-84.3 30.6-84.3 82.3z"
                        }), (0, a.jsx)("path", {
                            d: "M112.1 126.5l15.3 23.9c5.7 9.3 10.5 15.6 21.7 15.6 6.1 0 10.5-1.4 14-4.6-43.6-75.3-57.2-122.2-97.9-106.8-25.5 9.7-37.9 41.9-38.5 86 1.2 2.9 2.4 5.8 3.6 8.5C35.7 161.5 40.8 166 52 166s16-6.4 21.7-15.6L89 126.5c3.5-5.4 6.4-8.3 11.5-8.3 5.2 0 8.1 2.9 11.6 8.3z",
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            fill: "#f75c2d"
                        })]
                    })
                },
                Compress: e => {
                    let {
                        color: l = r.UE
                    } = e;
                    return (0, a.jsxs)("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, a.jsx)("path", {
                            d: "M6.33301 6.33301L6.33301 3.66634",
                            stroke: l,
                            strokeWidth: "1.3",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, a.jsx)("path", {
                            d: "M6.33301 6.33301L3.66634 6.33301",
                            stroke: l,
                            strokeWidth: "1.3",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, a.jsx)("path", {
                            d: "M6 6L3 3",
                            stroke: l,
                            strokeWidth: "1.3",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, a.jsx)("path", {
                            d: "M9.6665 6.33301L12.3332 6.33301",
                            stroke: l,
                            strokeWidth: "1.3",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, a.jsx)("path", {
                            d: "M9.6665 6.33301L9.6665 3.66634",
                            stroke: l,
                            strokeWidth: "1.3",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, a.jsx)("path", {
                            d: "M9.99951 6L12.9995 3",
                            stroke: l,
                            strokeWidth: "1.3",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, a.jsx)("path", {
                            d: "M9.6665 9.6665L9.6665 12.3332",
                            stroke: l,
                            strokeWidth: "1.3",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, a.jsx)("path", {
                            d: "M9.6665 9.6665L12.3332 9.6665",
                            stroke: l,
                            strokeWidth: "1.3",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, a.jsx)("path", {
                            d: "M9.99951 9.99951L12.9995 12.9995",
                            stroke: l,
                            strokeWidth: "1.3",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, a.jsx)("path", {
                            d: "M6.33301 9.6665L3.66634 9.6665",
                            stroke: l,
                            strokeWidth: "1.3",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, a.jsx)("path", {
                            d: "M6.33301 9.6665L6.33301 12.3332",
                            stroke: l,
                            strokeWidth: "1.3",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, a.jsx)("path", {
                            d: "M6 9.99951L3 12.9995",
                            stroke: l,
                            strokeWidth: "1.3",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })]
                    })
                },
                Cross: e => {
                    let {
                        className: l,
                        color: t = r.Id,
                        hoverColor: n,
                        onClick: s,
                        tabIndex: d,
                        label: o
                    } = e, [_, c] = (0, i.useState)(!1);
                    return (0, a.jsx)("svg", {
                        className: l,
                        tabIndex: d,
                        onMouseOut: () => c(!1),
                        onMouseOver: () => c(!0),
                        onClick: s,
                        "aria-label": o,
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            fill: _ && n ? n : t,
                            d: "M5 3.15396L2.22669 0.380657C1.72851 -0.117528 0.894674 -0.124865 0.384905 0.384905C-0.128419 0.898228 -0.126767 1.71927 0.380657 2.22669L3.15396 5L0.380657 7.77331C-0.117528 8.27149 -0.124865 9.10533 0.384905 9.6151C0.898228 10.1284 1.71927 10.1268 2.22669 9.61934L5 6.84604L7.77331 9.61934C8.27149 10.1175 9.10533 10.1249 9.6151 9.6151C10.1284 9.10177 10.1268 8.28073 9.61934 7.77331L6.84604 5L9.61934 2.22669C10.1175 1.72851 10.1249 0.894674 9.6151 0.384905C9.10177 -0.128419 8.28073 -0.126767 7.77331 0.380657L5 3.15396Z"
                        })
                    })
                },
                CurvedArrow: _.A,
                DocumentFilled: e => {
                    let {
                        width: l = 24,
                        color: t = r.W5
                    } = e;
                    return (0, a.jsx)("svg", {
                        width: l,
                        height: l,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, a.jsx)("path", {
                            fill: t,
                            d: "M19 8H19.75C19.75 7.80109 19.671 7.61032 19.5303 7.46967L19 8ZM14 3L14.5303 2.46967C14.3897 2.32902 14.1989 2.25 14 2.25V3ZM17 20.25H7V21.75H17V20.25ZM5.75 19V5H4.25V19H5.75ZM18.25 8V19H19.75V8H18.25ZM7 3.75H14V2.25H7V3.75ZM19.5303 7.46967L14.5303 2.46967L13.4697 3.53033L18.4697 8.53033L19.5303 7.46967ZM7 20.25C6.30964 20.25 5.75 19.6904 5.75 19H4.25C4.25 20.5188 5.48122 21.75 7 21.75V20.25ZM17 21.75C18.5188 21.75 19.75 20.5188 19.75 19H18.25C18.25 19.6904 17.6904 20.25 17 20.25V21.75ZM5.75 5C5.75 4.30964 6.30964 3.75 7 3.75V2.25C5.48122 2.25 4.25 3.48122 4.25 5H5.75Z",
                            stroke: "none"
                        })
                    })
                },
                DoubleArrows: c.Ay,
                DownloadActive: e => {
                    let {
                        className: l
                    } = e;
                    return (0, a.jsxs)("svg", {
                        className: l,
                        viewBox: "0 0 121 170",
                        children: [(0, a.jsxs)("defs", {
                            children: [(0, a.jsx)("rect", {
                                id: "download-active-a",
                                width: "116",
                                height: "165",
                                rx: "4"
                            }), (0, a.jsxs)("filter", {
                                x: "-2.2%",
                                y: "-1.5%",
                                width: "106.9%",
                                height: "104.8%",
                                filterUnits: "objectBoundingBox",
                                id: "download-active-c",
                                children: [(0, a.jsx)("feMorphology", {
                                    radius: "1",
                                    operator: "dilate",
                                    in: "SourceAlpha",
                                    result: "shadowSpreadOuter1"
                                }), (0, a.jsx)("feOffset", {
                                    dx: "3",
                                    dy: "3",
                                    in: "shadowSpreadOuter1",
                                    result: "shadowOffsetOuter1"
                                }), (0, a.jsx)("feComposite", {
                                    in: "shadowOffsetOuter1",
                                    in2: "SourceAlpha",
                                    operator: "out",
                                    result: "shadowOffsetOuter1"
                                }), (0, a.jsx)("feColorMatrix", {
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1146 0",
                                    in: "shadowOffsetOuter1"
                                })]
                            })]
                        }), (0, a.jsxs)("g", {
                            transform: "translate(1 1)",
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, a.jsx)("mask", {
                                id: "download-active-b",
                                fill: r.UE,
                                children: (0, a.jsx)("use", {
                                    xlinkHref: "#download-active-a"
                                })
                            }), (0, a.jsx)("use", {
                                fill: r.Uv,
                                filter: "url(#download-active-c)",
                                xlinkHref: "#download-active-a"
                            }), (0, a.jsx)("use", {
                                fill: r.UE,
                                xlinkHref: "#download-active-a"
                            }), (0, a.jsx)("rect", {
                                strokeOpacity: ".0751",
                                stroke: r.Uv,
                                x: "-.5",
                                y: "-.5",
                                width: "117",
                                height: "166",
                                rx: "4"
                            }), (0, a.jsxs)("g", {
                                mask: "url(#download-active-b)",
                                children: [(0, a.jsx)("path", {
                                    d: "M80.2132 25.7868c11.7157 11.7157 11.7157 30.7107 0 42.4264-11.7157 11.7157-30.7107 11.7157-42.4264 0-11.7157-11.7157-11.7157-30.7107 0-42.4264 11.7157-11.7157 30.7107-11.7157 42.4264 0zm-2.4957 2.4957c-10.3374-10.3375-27.0976-10.3375-37.435 0-10.3375 10.3374-10.3375 27.0976 0 37.435 10.3374 10.3375 27.0976 10.3375 37.435 0 10.3375-10.3374 10.3375-27.0976 0-37.435z",
                                    fill: "#E6E8EB"
                                }), (0, a.jsxs)("g", {
                                    transform: "translate(49.1176 36.4118)",
                                    fill: "#E6E8EB",
                                    children: [(0, a.jsx)("rect", {
                                        x: "8.8235",
                                        width: "2.8235",
                                        height: "17.6471",
                                        rx: "1.4118"
                                    }), (0, a.jsx)("rect", {
                                        transform: "rotate(45 14.0038 15.4156)",
                                        x: "12.5921",
                                        y: "8.3568",
                                        width: "2.8235",
                                        height: "14.1176",
                                        rx: "1.4118"
                                    }), (0, a.jsx)("rect", {
                                        transform: "rotate(-45 6.2392 15.4156)",
                                        x: "4.8274",
                                        y: "8.3568",
                                        width: "2.8235",
                                        height: "14.1176",
                                        rx: "1.4118"
                                    })]
                                })]
                            }), (0, a.jsx)("path", {
                                d: "M.4957 132.5h115.008M-3 115.5h120",
                                stroke: r._5,
                                strokeLinecap: "square",
                                mask: "url(#download-active-b)"
                            }), (0, a.jsx)("rect", {
                                fill: r._5,
                                mask: "url(#download-active-b)",
                                x: "8",
                                y: "122",
                                width: "50",
                                height: "4",
                                rx: "2"
                            }), (0, a.jsx)("rect", {
                                fill: r.W5,
                                mask: "url(#download-active-b)",
                                x: "28",
                                y: "143",
                                width: "60",
                                height: "14",
                                rx: "7"
                            }), (0, a.jsx)("path", {
                                d: "M32 89c0-1.1046.9026-2 2.0066-2h47.9868C83.1016 87 84 87.8877 84 89c0 1.1046-.9026 2-2.0066 2H34.0066C32.8984 91 32 90.1123 32 89z",
                                fill: r._5,
                                mask: "url(#download-active-b)"
                            }), (0, a.jsx)("rect", {
                                fill: r._5,
                                mask: "url(#download-active-b)",
                                x: "40",
                                y: "94",
                                width: "36",
                                height: "3",
                                rx: "1.5"
                            })]
                        })]
                    })
                },
                DownloadArrow: e => {
                    let {
                        className: l,
                        color: t = r.UE
                    } = e;
                    return (0, a.jsx)("svg", {
                        className: l,
                        viewBox: "0 0 14 14",
                        children: (0, a.jsx)("path", {
                            d: "M7 0a7 7 0 1 0 0 14A7 7 0 0 0 7 0zm.759 3.705c0-.39-.342-.705-.763-.705-.424 0-.763.316-.763.705v4.876l-1.93-1.79a.809.809 0 0 0-1.078.002.669.669 0 0 0-.002.999l3.24 3.003A.79.79 0 0 0 7 11a.78.78 0 0 0 .54-.205l3.24-3.003a.673.673 0 0 0-.002-.999.803.803 0 0 0-1.077-.001l-1.941 1.8V3.704z",
                            fill: t,
                            fillRule: "evenodd"
                        })
                    })
                },
                DownloadArrowUnderscored: e => {
                    let {
                        color: l = r.UE
                    } = e;
                    return (0, a.jsx)("svg", {
                        width: "14",
                        height: "20",
                        viewBox: "0 0 14 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, a.jsx)("path", {
                            d: "M6.83333 1V15M6.83333 15L12.6667 9.16667M6.83333 15L1 9.16667M12.6667 18.5H1",
                            stroke: l,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                },
                DownloadBox: () => (0, a.jsxs)("svg", {
                    className: "download-box",
                    viewBox: "0 0 116 165",
                    children: [(0, a.jsx)("defs", {
                        children: (0, a.jsx)("rect", {
                            id: "download-box-a",
                            width: "116",
                            height: "165",
                            rx: "4"
                        })
                    }), (0, a.jsx)("mask", {
                        id: "download-box-b",
                        fill: r.UE,
                        children: (0, a.jsx)("use", {
                            xlinkHref: "#download-box-a"
                        })
                    }), (0, a.jsx)("use", {
                        className: "download-box__background",
                        fill: r.UE,
                        fillRule: "evenodd",
                        xlinkHref: "#download-box-a"
                    }), (0, a.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        mask: "url(#download-box-b)",
                        children: [(0, a.jsx)("path", {
                            d: "M80.213 25.787c11.716 11.716 11.716 30.71 0 42.426-11.716 11.716-30.71 11.716-42.426 0-11.716-11.716-11.716-30.71 0-42.426 11.716-11.716 30.71-11.716 42.426 0zm-2.495 2.495c10.337 10.338 10.337 27.098 0 37.436-10.338 10.337-27.098 10.337-37.436 0-10.337-10.338-10.337-27.098 0-37.436 10.338-10.337 27.098-10.337 37.436 0z",
                            fill: r._5,
                            className: "download-box__detail"
                        }), (0, a.jsxs)("g", {
                            transform: "translate(49.118 36.412)",
                            fill: r._5,
                            className: "download-box__detail",
                            children: [(0, a.jsx)("rect", {
                                x: "8.824",
                                width: "2.824",
                                height: "17.647",
                                rx: "1.412"
                            }), (0, a.jsx)("rect", {
                                transform: "rotate(45 14.004 15.416)",
                                x: "12.592",
                                y: "8.357",
                                width: "2.824",
                                height: "14.118",
                                rx: "1.412"
                            }), (0, a.jsx)("rect", {
                                transform: "rotate(-45 6.24 15.416)",
                                x: "4.827",
                                y: "8.357",
                                width: "2.824",
                                height: "14.118",
                                rx: "1.412"
                            })]
                        })]
                    }), (0, a.jsx)("path", {
                        d: "M.496 132.5h115.008M-3 115.5h120",
                        className: "download-box__bar",
                        stroke: r._5,
                        strokeLinecap: "square",
                        fill: "none",
                        mask: "url(#download-box-b)"
                    }), (0, a.jsx)("rect", {
                        fill: r._5,
                        className: "download-box__detail",
                        fillRule: "evenodd",
                        mask: "url(#download-box-b)",
                        x: "8",
                        y: "122",
                        width: "50",
                        height: "4",
                        rx: "2"
                    }), (0, a.jsx)("rect", {
                        fill: r._5,
                        className: "download-box__detail",
                        fillRule: "evenodd",
                        mask: "url(#download-box-b)",
                        x: "28",
                        y: "143",
                        width: "60",
                        height: "14",
                        rx: "7"
                    }), (0, a.jsx)("path", {
                        d: "M32 89c0-1.105.903-2 2.007-2h47.986c1.11 0 2.007.888 2.007 2 0 1.105-.903 2-2.007 2H34.007C32.897 91 32 90.112 32 89z",
                        fill: r._5,
                        className: "download-box__detail",
                        fillRule: "evenodd",
                        mask: "url(#download-box-b)"
                    }), (0, a.jsx)("rect", {
                        fill: r._5,
                        className: "download-box__detail",
                        fillRule: "evenodd",
                        mask: "url(#download-box-b)",
                        x: "40",
                        y: "94",
                        width: "36",
                        height: "3",
                        rx: "1.5"
                    })]
                }),
                DownloadCircle: e => {
                    let {
                        width: l = 24,
                        color: t = r.W5
                    } = e;
                    return (0, a.jsx)("svg", {
                        width: l,
                        height: l,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, a.jsx)("path", {
                            fill: t,
                            d: "M12 7V16M12 16L15.5 13M12 16L8.5 13M12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23Z",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                },
                DownloadSmall: e => {
                    let {
                        className: l,
                        color: t = r.$A,
                        onClick: i
                    } = e;
                    return (0, a.jsx)("svg", {
                        className: l,
                        onClick: i,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsx)("path", {
                            d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zm-9 1.492V7.998C13 7.446 12.552 7 12 7c-.556 0-1 .447-1 .998v5.48l-2.53-2.53c-.385-.385-1.022-.39-1.413.002-.393.393-.39 1.022-.002 1.412l4.247 4.247c.192.19.447.288.702.288.26.003.514-.095.708-.29l4.247-4.246c.383-.385.387-1.022-.003-1.412-.394-.393-1.023-.392-1.413-.002L13 13.492zM0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12z",
                            fill: t,
                            fillRule: "evenodd"
                        })
                    })
                },
                Error: e => {
                    let {
                        className: l,
                        color: t = r.UE
                    } = e;
                    return (0, a.jsx)("svg", {
                        className: l,
                        viewBox: "20 19 12 13",
                        children: (0, a.jsx)("path", {
                            d: "M26,31 C29.3137085,31 32,28.3137085 32,25 C32,21.6862915 29.3137085,19 26,19 C22.6862915,19 20,21.6862915 20,25 C20,28.3137085 22.6862915,31 26,31 Z M26.0000489,29.1999879 C26.6627906,29.1999879 27.2000489,28.6627296 27.2000489,27.9999878 C27.2000489,27.3372461 26.6627906,26.7999878 26.0000489,26.7999878 C25.3373071,26.7999878 24.8000488,27.3372461 24.8000488,27.9999878 C24.8000488,28.6627296 25.3373071,29.1999879 26.0000489,29.1999879 Z M25.0124512,21.8014527 C25.0124512,21.6606168 25.0987942,20.9847745 25.9823553,20.9847745 C26.8659164,20.9847745 27.0124511,21.5784025 27.0124512,21.8014527 C27.0124512,22.0245029 26.8549194,24.9874878 26.8549194,24.9874878 C26.8549194,24.9874878 26.7236328,25.8585815 25.9823553,25.8585815 C25.2410778,25.8585815 25.113787,24.9874878 25.113787,24.9874878 C25.113787,24.9874878 25.0124512,21.9422885 25.0124512,21.8014527 Z",
                            fill: t,
                            fillRule: "evenodd"
                        })
                    })
                },
                ErrorBig: function(e) {
                    let {
                        className: l,
                        color: t = r.vA
                    } = e;
                    return (0, a.jsxs)("svg", {
                        width: "170",
                        height: "170",
                        viewBox: "0 0 170 170",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: l,
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M145.104 145.104C178.299 111.91 178.299 58.0905 145.104 24.8959C111.91 -8.29864 58.0905 -8.29864 24.8959 24.8959C-8.29864 58.0905 -8.29864 111.91 24.8959 145.104C58.0905 178.299 111.91 178.299 145.104 145.104ZM31.967 138.033C61.2563 167.322 108.744 167.322 138.033 138.033C167.322 108.744 167.322 61.2563 138.033 31.967C108.744 2.67767 61.2563 2.67767 31.967 31.967C2.67767 61.2563 2.67767 108.744 31.967 138.033Z",
                            fill: t
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M75.3591 49.8252C75.0879 44.6279 79.2523 40.3354 84.4567 40.3354C89.6632 40.3354 93.8328 44.6367 93.5822 49.8373C93.2747 56.2156 92.7661 64.8059 91.9967 72.3825C90.9125 83.0586 89.1734 93.1929 88.3716 97.5925C88.1283 98.9276 86.9627 99.8882 85.6056 99.8882H83.3196C81.9688 99.8882 80.8093 98.9431 80.5667 97.6143C79.8173 93.5096 78.2406 84.1813 77.0424 72.3825C76.2045 64.1314 75.6754 55.8859 75.3591 49.8252Z",
                            fill: t
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M84.4721 126.229C89.4962 126.229 93.569 122.127 93.569 117.067C93.569 112.007 89.4962 107.905 84.4721 107.905C79.4479 107.905 75.3751 112.007 75.3751 117.067C75.3751 122.127 79.4479 126.229 84.4721 126.229Z",
                            fill: t
                        })]
                    })
                },
                Eye: e => {
                    let {
                        width: l = 18,
                        color: t = r.NI
                    } = e;
                    return (0, a.jsx)("svg", {
                        width: l,
                        height: l,
                        viewBox: "0 0 16 17",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, a.jsx)("path", {
                            d: "M8.00032 2.5C12.4215 2.50017 15.1972 7.02538 15.8509 8.21582C15.9491 8.39475 15.9491 8.60525 15.8509 8.78418C15.1972 9.97462 12.4215 14.4998 8.00032 14.5C3.57927 14.5 0.80362 9.97495 0.149733 8.78418C0.0514888 8.60525 0.0514888 8.39475 0.149733 8.21582C0.80362 7.02505 3.57927 2.5 8.00032 2.5ZM8.00032 5.83301C6.52756 5.83301 5.33333 7.02724 5.33333 8.5C5.33333 9.97276 6.52756 11.167 8.00032 11.167C9.47297 11.1669 10.6663 9.97268 10.6663 8.5C10.6663 7.02732 9.47297 5.83314 8.00032 5.83301Z",
                            fill: t
                        })
                    })
                },
                Facebook: e => {
                    let {
                        width: l = 20
                    } = e;
                    return (0, a.jsx)("svg", {
                        width: l,
                        height: l,
                        viewBox: "299 22 16 16",
                        children: (0, a.jsx)("path", {
                            d: "M299,25.0094776 C299,23.347389 300.336631,22 302.009478,22 L311.990522,22 C313.652611,22 315,23.3366311 315,25.0094776 L315,34.9905224 C315,36.652611 313.663369,38 311.990522,38 L302.009478,38 C300.347389,38 299,36.6633689 299,34.9905224 L299,25.0094776 Z M310.03529,38 L310.03529,31.8064419 L312.114271,31.8064419 L312.425522,29.3926592 L310.03529,29.3926592 L310.03529,27.8515655 C310.03529,27.1527191 310.229327,26.6764345 311.231515,26.6764345 L312.509717,26.6758951 L312.509717,24.5170337 C312.288593,24.4876704 311.529882,24.4219326 310.647185,24.4219326 C308.804309,24.4219326 307.542706,25.5467865 307.542706,27.6125843 L307.542706,29.3926592 L305.458451,29.3926592 L305.458451,31.8064419 L307.542706,31.8064419 L307.542706,38 L310.03529,38 Z",
                            stroke: "none",
                            fill: r.Id,
                            fillRule: "evenodd"
                        })
                    })
                },
                Fallback: e => {
                    let {
                        className: l,
                        color: t = r.UE
                    } = e;
                    return (0, a.jsx)("svg", {
                        width: "33",
                        height: "33",
                        viewBox: "0 0 33 33",
                        className: l,
                        children: (0, a.jsx)("path", {
                            fill: t,
                            d: "M.828 2.95A1.5 1.5 0 0 1 2.95.828l29.346 29.347a1.5 1.5 0 1 1-2.121 2.121L.828 2.95z"
                        })
                    })
                },
                Folder: e => {
                    let {
                        width: l = 9,
                        height: t = 7
                    } = e;
                    return (0, a.jsx)("svg", {
                        viewBox: "0 0 9 7",
                        width: l,
                        height: t,
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, a.jsx)("path", {
                            d: "M0 6.14285714V.85714286C0 .38375593.38375593 0 .85714286 0h2.26447876c1.33783784 0 .74324324 1.23673511 2.08108108 1.23673511h2.94015444C8.61624407 1.23673511 9 1.62049104 9 2.09387797v4.04897917C9 6.61624407 8.61624407 7 8.14285714 7H.85714286C.38375593 7 0 6.61624407 0 6.14285714z",
                            fill: r.Id
                        })
                    })
                },
                Forward: e => {
                    let {
                        className: l,
                        color: t
                    } = e;
                    return (0, a.jsx)("svg", {
                        className: l,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsx)("path", {
                            d: "M14.083 12.003h-.813c-.655 0-1.355 0-2.064-.002h-1.162c-.982.042-1.032.09-1.044 1v2c0 .552-.448 1-1 1s-1-.448-1-1v-2.013c.026-2.007.937-2.898 3-2.987h1.207l2.064.003h.82l-1.297-1.296c-.39-.39-.39-1.024 0-1.414.39-.39 1.024-.39 1.414 0l3 3c.39.39.39 1.024 0 1.414l-3 3c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.024 0-1.414l1.29-1.29zM12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
                            fill: t,
                            fillRule: "evenodd"
                        })
                    })
                },
                Frame: u.A,
                FullLock: () => (0, a.jsxs)("svg", {
                    width: "110",
                    height: "110",
                    viewBox: "0 0 110 110",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, a.jsx)("mask", {
                        id: "mask0_1123_29277",
                        style: {
                            maskType: "alpha"
                        },
                        maskUnits: "userSpaceOnUse",
                        x: "0",
                        y: "0",
                        width: "110",
                        height: "110",
                        children: (0, a.jsx)("path", {
                            d: "M78.3449 106.212C98.2639 99.4655 109.878 84.6617 110 55C109.878 25.3383 98.2639 10.5345 78.3449 3.78835C71.6091 1.50971 63.6427 -2.14168e-06 55 -2.54096e-06C46.3517 -2.94051e-06 38.3853 1.50971 31.6551 3.78835C11.736 10.5345 0.122031 25.3383 -2.27466e-06 55C0.122029 84.6617 11.736 99.4655 31.6551 106.212C38.3853 108.49 46.3517 110 55 110C63.6427 110 71.6091 108.49 78.3449 106.212Z",
                            fill: "#4369EE"
                        })
                    }), (0, a.jsxs)("g", {
                        mask: "url(#mask0_1123_29277)",
                        children: [(0, a.jsx)("path", {
                            d: "M78.3449 106.212C98.2639 99.4655 109.878 84.6617 110 55C109.878 25.3383 98.2639 10.5345 78.3449 3.78835C71.6091 1.50971 63.6427 -2.14168e-06 55 -2.54096e-06C46.3517 -2.94051e-06 38.3853 1.50971 31.6551 3.78835C11.736 10.5345 0.12203 25.3383 -2.27466e-06 55C0.122028 84.6617 11.736 99.4655 31.6551 106.212C38.3853 108.49 46.3517 110 55 110C63.6427 110 71.6091 108.49 78.3449 106.212Z",
                            fill: "#4369EE"
                        }), (0, a.jsx)("path", {
                            d: "M70.8883 95.1502C92.8663 88.7896 105.681 74.8317 105.815 46.865C105.681 18.8982 92.8663 4.94033 70.8883 -1.42031C63.4563 -3.56875 54.6665 -4.99219 45.1304 -4.99219C35.5881 -4.99219 26.7983 -3.56875 19.3724 -1.42031C-2.60552 4.94033 -15.42 18.8982 -15.5547 46.865C-15.42 74.8317 -2.60553 88.7896 19.3724 95.1502C26.7983 97.2987 35.5881 98.7221 45.1304 98.7221C54.6665 98.7221 63.4563 97.2987 70.8883 95.1502Z",
                            fill: "#1F47D3"
                        })]
                    }), (0, a.jsx)("path", {
                        d: "M46.6875 48.5908V40.4028C46.6875 35.8807 50.3534 32.2148 54.8755 32.2148C59.3976 32.2148 63.0634 35.8807 63.0634 40.4028V48.5908",
                        stroke: "white",
                        strokeWidth: "4.09398",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, a.jsx)("rect", {
                        x: "38.5",
                        y: "47.9082",
                        width: "32.7519",
                        height: "30.0226",
                        rx: "6.14098",
                        fill: "white"
                    })]
                }),
                GreyedOutLock: () => (0, a.jsxs)("svg", {
                    width: "64",
                    height: "64",
                    viewBox: "0 0 64 64",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, a.jsxs)("g", {
                        clipPath: "url(#clip0_1555_30877)",
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M54.6274 54.6274C67.1242 42.1306 67.1242 21.8694 54.6274 9.37258C42.1306 -3.12419 21.8694 -3.12419 9.37258 9.37258C-3.12419 21.8694 -3.12419 42.1306 9.37258 54.6274C21.8694 67.1242 42.1306 67.1242 54.6274 54.6274ZM12.201 51.799C23.1357 62.7337 40.8643 62.7337 51.799 51.799C62.7337 40.8643 62.7337 23.1357 51.799 12.201C40.8643 1.26633 23.1357 1.26633 12.201 12.201C1.26633 23.1357 1.26633 40.8643 12.201 51.799Z",
                            fill: "#BABCBF"
                        }), (0, a.jsx)("path", {
                            d: "M27 29V24C27 21.2386 29.2386 19 32 19C34.7614 19 37 21.2386 37 24V29",
                            stroke: "#BABCBF",
                            strokeWidth: "3",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, a.jsx)("path", {
                            d: "M22 34.4C22 32.1598 22 31.0397 22.436 30.184C22.8195 29.4314 23.4314 28.8195 24.184 28.436C25.0397 28 26.1598 28 28.4 28H35.6C37.8402 28 38.9603 28 39.816 28.436C40.5686 28.8195 41.1805 29.4314 41.564 30.184C42 31.0397 42 32.1598 42 34.4V35.4C42 38.7603 42 40.4405 41.346 41.7239C40.7708 42.8529 39.8529 43.7708 38.7239 44.346C37.4405 45 35.7603 45 32.4 45H31.6C28.2397 45 26.5595 45 25.2761 44.346C24.1471 43.7708 23.2292 42.8529 22.654 41.7239C22 40.4405 22 38.7603 22 35.4V34.4Z",
                            fill: "#BABCBF"
                        })]
                    }), (0, a.jsx)("defs", {
                        children: (0, a.jsx)("clipPath", {
                            id: "clip0_1555_30877",
                            children: (0, a.jsx)("rect", {
                                width: "64",
                                height: "64",
                                fill: "white"
                            })
                        })
                    })]
                }),
                Hamburger: e => {
                    let {
                        onClick: l
                    } = e;
                    return (0, a.jsxs)("svg", {
                        className: "hamburger",
                        onClick: l,
                        width: "20",
                        height: "14",
                        viewBox: "0 0 20 14",
                        children: [(0, a.jsx)("defs", {
                            children: (0, a.jsx)("path", {
                                d: "M0 1c0-.55229.44771-1 1-1h18c.5523 0 1 .44771 1 1 0 .55228-.4477 1-1 1H1c-.55229 0-1-.44772-1-1zm0 12c0-.5523.44771-1 1-1h18c.5523 0 1 .4477 1 1s-.4477 1-1 1H1c-.55229 0-1-.4477-1-1zm1-7c-.55229 0-1 .44772-1 1s.44771 1 1 1h18c.5523 0 1-.44772 1-1s-.4477-1-1-1H1z",
                                id: "hamburger-path-1"
                            })
                        }), (0, a.jsx)("g", {
                            id: "hamburger-shape",
                            stroke: "none",
                            fill: "none",
                            children: (0, a.jsx)("use", {
                                fillRule: "evenodd",
                                xlinkHref: "#hamburger-path-1"
                            })
                        })]
                    })
                },
                Ideal: e => {
                    let {
                        className: l = ""
                    } = e;
                    return (0, a.jsx)("svg", {
                        className: l,
                        viewBox: "0 0 34 30",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, a.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, a.jsx)("path", {
                                fill: "#0A0B09",
                                d: "M4 26.1547h5.4429V17H4z"
                            }), (0, a.jsxs)("g", {
                                fill: "#0A0B09",
                                children: [(0, a.jsx)("path", {
                                    d: "M9.162 12.1209c0 1.7234-1.3796 3.1214-3.081 3.1214S3 13.8443 3 12.121C3 10.3974 4.3796 9 6.081 9s3.081 1.3974 3.081 3.1209"
                                }), (0, a.jsx)("path", {
                                    d: "M19.1585 1.9924c3.7846 0 6.9389 1.0387 9.1218 3.0038 2.4676 2.2213 3.7188 5.5869 3.7188 10.0031 0 8.7523-4.2002 13.007-12.8406 13.007H1.967V1.9923h17.1916zM19.528 0H0v29.9986h19.528v-.0057c4.2656-.0588 7.6449-1.1322 10.0429-3.1989 2.9164-2.5134 4.3952-6.4817 4.3952-11.7947 0-2.5397-.389-4.8177-1.156-6.7708-.7339-1.8684-1.8183-3.457-3.2232-4.7217C27.1126 1.2794 23.6394.075 19.528.0066V0z"
                                })]
                            }), (0, a.jsx)("path", {
                                d: "M18.904 25.6325H12V4h6.904-.2787c5.7576 0 11.8862 2.3017 11.8862 10.8447 0 9.0315-6.1286 10.7878-11.8862 10.7878h.2786",
                                fill: "#B9215E"
                            }), (0, a.jsx)("path", {
                                d: "M12.0361 10.8824v3.4404h.7763c.2903 0 .4999-.0165.6287-.0496.1686-.0425.3085-.1146.4197-.2161.1112-.1016.202-.2687.2723-.5014.0702-.2326.1053-.5498.1053-.9513 0-.4016-.035-.7098-.1053-.9249-.0703-.2149-.1686-.3826-.295-.503-.1265-.1205-.287-.202-.4813-.2446-.1452-.033-.4297-.0495-.8535-.0495h-.4672zM11 10h1.8955c.4275 0 .7534.0331.9776.0994.3013.09.5594.2497.7743.4794.215.2295.3784.5106.4906.8432.1121.3326.1682.7427.1682 1.2302 0 .4285-.0526.7977-.1577 1.1078-.1285.3788-.3118.6853-.55.9197-.18.1775-.4229.316-.7289.4153-.229.0735-.5349.1101-.918.1101H11V10z",
                                fill: "#FFFFFE"
                            }), (0, a.jsx)("path", {
                                d: "M12.036 10.2846c.4122 0 .7278.0315.9382.0937.2755.0822.5151.2305.7118.4407.1998.2135.3544.4798.4595.7913.1066.3162.1607.7147.1607 1.1843 0 .4106-.0505.7678-.1501 1.0615-.1206.3556-.294.6462-.515.8637-.1636.1615-.3903.29-.6739.382-.2136.0686-.5082.1033-.8751.1033H10.281v-4.9205h1.755zM10 10v5.4898h2.0921c.3956 0 .7188-.0393.9604-.1167.326-.106.5897-.257.7845-.4492.253-.2488.4498-.577.5849-.9753.1097-.3236.1653-.7119.1653-1.154 0-.501-.0592-.9304-.1758-1.2763-.1182-.3506-.2936-.6517-.5215-.8952a1.8605 1.8605 0 0 0-.8366-.5179C12.8137 10.0344 12.481 10 12.036 10H10z",
                                fill: "#FFFFFE"
                            }), (0, a.jsx)("path", {
                                d: "M11.6077 11.2846c.5123 0 .7302.0251.8227.0461.1692.0372.3087.1075.4157.2094.1086.1035.1954.253.258.4442.0651.1995.0982.4955.0982.88 0 .3856-.0334.6916-.0992.9098-.0624.2064-.1404.3536-.232.4373-.0934.0852-.2144.147-.3596.1837-.1174.0301-.3173.0453-.5947.0453h-.6358v-3.1558h.3267zM11 11v3.725h.9168c.3048 0 .5218-.0176.6632-.0539.1898-.0478.3512-.1315.4793-.2484.1317-.1203.234-.3053.3124-.5655.0751-.2485.1116-.5733.1116-.9929 0-.4207-.0368-.7378-.1125-.9695-.0773-.2366-.1891-.4257-.3321-.562-.1448-.1379-.329-.232-.5478-.28-.156-.0355-.4452-.0528-.8832-.0528H11zM16 15.2051V10h3.804v.8824h-2.7678v1.1527h2.5745v.8824h-2.5745v1.4053h2.8661v.8823H16",
                                fill: "#FFFFFE"
                            }), (0, a.jsx)("path", {
                                d: "M19.804 10.2846v.5978h-2.7678v1.4373h2.5745v.5978h-2.5745v1.69h2.8661v.5976H16.281v-4.9205h3.523zM16 10v5.4898h4.1833v-1.167h-2.8661V13.202h2.5745v-1.167h-2.5745v-.8681h2.7677V10H16zM24.246 13.1416l-.7083-1.9284-.694 1.9284h1.4024zm1.9102 2.0635h-1.1287l-.4485-1.1812h-2.0529l-.4253 1.1812H21L22.9969 10h1.1043l2.055 5.2051z",
                                fill: "#FFFFFE"
                            }), (0, a.jsx)("path", {
                                d: "M23.2115 10.2846l1.9425 4.9205h-.8248l-.4484-1.1812h-2.2477l-.4253 1.1812h-.7972l1.8877-4.9205h.9132zM22.106 10L20 15.4898h1.4044l.4253-1.1812h1.8581l.4485 1.1812h1.4327L23.4016 10H22.106z",
                                fill: "#FFFFFE"
                            }), (0, a.jsx)("path", {
                                d: "M22.8961 11.8235l.505 1.3743h-.9996l.4946-1.3743zM22 13.4825h1.8054L22.8935 11 22 13.4824zM27 15.1624V10h1.0362v4.28h2.5816v.8824H27",
                                fill: "#FFFFFE"
                            }), (0, a.jsx)("path", {
                                d: "M27.0362 10.2846v4.2801h2.5816v.5977H26.281v-4.8778h.7552zM26 10v5.447h3.8988V14.28h-2.5816V10H26z",
                                fill: "#FFFFFE"
                            })]
                        })
                    })
                },
                Info: w.A,
                InfoCircle: e => {
                    let {
                        className: l,
                        iconColor: t = r.Id
                    } = e;
                    return (0, a.jsx)("svg", {
                        className: l,
                        viewBox: "0 0 16 16",
                        fill: "none",
                        children: (0, a.jsxs)("g", {
                            children: [(0, a.jsx)("ellipse", {
                                cx: "8",
                                cy: "5",
                                rx: "1",
                                ry: "1",
                                fill: t
                            }), (0, a.jsx)("path", {
                                d: "M8 15.25C3.99594 15.25 0.75 12.0041 0.75 8C0.75 3.99594 3.99594 0.75 8 0.75C12.0041 0.75 15.25 3.99594 15.25 8C15.25 12.0041 12.0041 15.25 8 15.25Z",
                                stroke: t,
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, a.jsx)("path", {
                                d: "M8 8.3335V11.0002",
                                stroke: t,
                                strokeWidth: "1.5",
                                strokeLinecap: "round"
                            })]
                        })
                    })
                },
                Instagram: e => {
                    let {
                        width: l = 20
                    } = e;
                    return (0, a.jsxs)("svg", {
                        width: l,
                        height: l,
                        viewBox: "0 0 17 18",
                        children: [(0, a.jsx)("path", {
                            d: "M8.497.005c-2.307 0-2.597.01-3.503.05C4.09.1 3.472.242 2.93.452c-.558.22-1.03.51-1.504.982-.472.472-.763.946-.98 1.505C.236 3.47.092 4.09.05 5 .01 5.905 0 6.194 0 8.502c0 2.307.01 2.597.05 3.503.042.905.186 1.522.396 2.063.217.558.508 1.03.98 1.504.473.472.946.763 1.505.98.55.21 1.16.354 2.07.395.91.04 1.2.05 3.51.05s2.6-.01 3.507-.05c.905-.042 1.523-.186 2.063-.396.56-.21 1.032-.5 1.504-.98.476-.47.766-.94.98-1.5.21-.54.357-1.16.4-2.06.04-.9.05-1.19.05-3.5s-.01-2.593-.05-3.5c-.043-.905-.186-1.523-.396-2.063-.22-.56-.51-1.033-.98-1.505-.472-.47-.946-.76-1.506-.98-.54-.205-1.16-.35-2.06-.39C11.1.02 10.81.01 8.505.01zm0 1.53c2.27 0 2.538.01 3.434.05.83.04 1.28.177 1.58.294.4.15.68.33.98.63.3.3.48.58.64.97.12.3.26.75.3 1.58.04.89.05 1.16.05 3.43 0 2.27-.01 2.533-.05 3.43-.04.83-.175 1.28-.292 1.576-.153.4-.337.68-.634.98-.3.3-.58.483-.977.64-.3.114-.75.253-1.58.29-.895.04-1.164.05-3.433.05-2.27 0-2.54-.01-3.437-.05-.83-.038-1.28-.177-1.577-.293-.4-.156-.68-.34-.98-.638-.3-.297-.48-.58-.636-.977-.114-.3-.253-.75-.29-1.578-.04-.895-.05-1.163-.05-3.43 0-2.27.01-2.54.05-3.436.038-.83.177-1.28.293-1.58.154-.393.338-.676.636-.974.3-.3.58-.48.98-.637.3-.12.75-.26 1.575-.297.896-.04 1.164-.05 3.43-.05z",
                            fill: r.Id,
                            fillRule: "evenodd"
                        }), (0, a.jsx)("path", {
                            d: "M8.497 11.335c-1.564 0-2.832-1.268-2.832-2.832 0-1.565 1.268-2.833 2.832-2.833 1.565 0 2.833 1.268 2.833 2.833 0 1.564-1.268 2.832-2.833 2.832zm0-7.196c-2.41 0-4.363 1.95-4.363 4.36s1.953 4.36 4.363 4.36 4.363-1.95 4.363-4.36-1.95-4.36-4.36-4.36zm5.556-.18c0 .56-.457 1.02-1.02 1.02s-1.02-.46-1.02-1.02.457-1.02 1.02-1.02 1.02.45 1.02 1.02z",
                            fill: r.Id,
                            fillRule: "evenodd"
                        })]
                    })
                },
                Landscape: e => {
                    let {
                        width: l = 113,
                        height: t = 67
                    } = e;
                    return (0, a.jsxs)("svg", {
                        width: "".concat(l, "px"),
                        height: "".concat(t, "px"),
                        viewBox: "-1 -1 112 66",
                        children: [(0, a.jsxs)("defs", {
                            children: [(0, a.jsx)("rect", {
                                id: "landscape-rect",
                                width: "110",
                                height: "61.875",
                                rx: "2"
                            }), (0, a.jsxs)("mask", {
                                id: "landscape-mask-1",
                                x: "-1",
                                y: "-1",
                                width: "112",
                                height: "63.875",
                                children: [(0, a.jsx)("path", {
                                    fill: r.UE,
                                    d: "M-1-1h112v63.875H-1z"
                                }), (0, a.jsx)("use", {
                                    xlinkHref: "#landscape-rect"
                                })]
                            })]
                        }), (0, a.jsx)("mask", {
                            id: "landscape-mask-2",
                            fill: r.UE,
                            children: (0, a.jsx)("use", {
                                xlinkHref: "#landscape-rect"
                            })
                        }), (0, a.jsxs)("g", {
                            fill: "none",
                            children: [(0, a.jsx)("use", {
                                fill: r.UE,
                                fillRule: "evenodd",
                                xlinkHref: "#landscape-rect"
                            }), (0, a.jsx)("use", {
                                stroke: r._5,
                                mask: "url(#landscape-mask-1)",
                                strokeWidth: "2",
                                xlinkHref: "#landscape-rect"
                            })]
                        }), (0, a.jsx)("circle", {
                            fill: r._5,
                            fillRule: "evenodd",
                            mask: "url(#landscape-mask-2)",
                            cx: "19",
                            cy: "21",
                            r: "9"
                        }), (0, a.jsx)("path", {
                            fill: r._5,
                            fillRule: "evenodd",
                            mask: "url(#landscape-mask-2)",
                            d: "M10 63.935L41.912 33.61l11.92 15.998L88.34 9l9.977 16.746 10.996-4.633L126 64.683"
                        })]
                    })
                },
                Lines: e => {
                    let {
                        className: l
                    } = e;
                    return (0, a.jsxs)("svg", {
                        viewBox: "852 1501 230 30",
                        className: l,
                        children: [(0, a.jsx)("rect", {
                            fill: r.vA,
                            fillRule: "evenodd",
                            opacity: ".5",
                            x: "852",
                            y: "1501",
                            width: "220",
                            height: "4",
                            rx: "2"
                        }), (0, a.jsx)("rect", {
                            fill: r.vA,
                            fillRule: "evenodd",
                            opacity: ".5",
                            x: "852",
                            y: "1513",
                            width: "230",
                            height: "4",
                            rx: "2"
                        }), (0, a.jsx)("rect", {
                            fill: r.vA,
                            fillRule: "evenodd",
                            opacity: ".5",
                            x: "852",
                            y: "1525",
                            width: "212",
                            height: "4",
                            rx: "2"
                        })]
                    })
                },
                Link: e => {
                    let {
                        className: l,
                        color: t = r.UE
                    } = e;
                    return (0, a.jsxs)("svg", {
                        className: l,
                        viewBox: "0 0 96 96",
                        children: [(0, a.jsx)("path", {
                            fill: t,
                            d: "M88.7001 7.3c-4.4-4.4-10.2-6.8-16.4-6.8-6.2 0-12 2.4-16.4 6.8l-10.7 10.6c-2.1 2.1-2.1 5.4 0 7.4 2.1 2.1 5.4 2.1 7.4 0l10.6-10.6c4.8-4.8 13.2-4.8 17.9 0 4.9 4.9 4.9 13 0 17.9l-17.5 17.8c-4.8 4.8-13.2 4.8-17.9 0-2.1-2.1-5.4-2.1-7.4 0-2.1 2.1-2.1 5.4 0 7.4 4.4 4.4 10.2 6.8 16.4 6.8 6.2 0 12-2.4 16.4-6.8l17.7-17.7c4.4-4.4 6.8-10.2 6.8-16.4 0-6.2-2.5-12-6.9-16.4z"
                        }), (0, a.jsx)("path", {
                            fill: t,
                            d: "M43.3001 70.6l-10.6 10.7c-4.9 4.9-13 4.9-17.9 0-4.9-4.9-4.9-13 0-17.9l17.7-17.7c4.9-4.9 13-4.9 17.9 0 2.1 2.1 5.4 2.1 7.4 0 2.1-2.1 2.1-5.4 0-7.4-9.1-9.1-23.8-9.1-32.8 0l-17.7 17.6c-9.1 9.1-9.1 23.8 0 32.8 4.5 4.5 10.5 6.8 16.4 6.8 5.9 0 11.9-2.3 16.4-6.8l10.6-10.6c2.1-2.1 2.1-5.4 0-7.4-2-2.1-5.3-2.1-7.4-.1z"
                        })]
                    })
                },
                Loading: e => {
                    let {
                        className: l,
                        onClick: t
                    } = e;
                    return (0, a.jsx)("svg", {
                        viewBox: "0 0 33 15",
                        className: l,
                        onClick: t,
                        children: (0, a.jsx)("path", {
                            fill: r.JK,
                            fillRule: "evenodd",
                            d: "M25.883 15c2.336 0 4.143-.62 5.2-1.75.5-.538 1.056-1.44.64-2.12-.362-.592-.974-.705-1.697-.338-.723.367-1.585.565-2.502.565-1.585 0-3.225-1.328-3.225-3.248 0-.2.165-.17.388 0 .5.422 1.53.76 2.808.76C29.86 8.87 32 7.32 32 4.833 32 2.206 29.61.2 25.91.2c-4.14 0-7.394 2.655-7.394 7.23 0 4.265 2.67 7.57 7.367 7.57zM4.497 15c.973 0 1.418-.593 1.752-1.13l1.5-2.372c.306-.48.556-.735 1-.735.446 0 .696.255 1.002.735l1.5 2.372c.335.537.78 1.13 1.753 1.13.89 0 1.334-.395 1.723-1.214.64-1.384 1.25-2.966 1.89-5.48.585-2.344.78-3.844.863-5 .112-1.555-.194-2.487-1.695-2.77C13.672.142 11.753 0 8.75 0S3.83.14 1.718.537C.215.82-.09 1.75.02 3.305c.084 1.157.28 2.657.863 5 .64 2.515 1.25 4.097 1.89 5.48.39.82.834 1.215 1.724 1.215z"
                        })
                    })
                },
                Locked: e => {
                    let {
                        className: l,
                        color: t = r.Uv
                    } = e;
                    return (0, a.jsx)("svg", {
                        className: l,
                        viewBox: "0 0 22 29",
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M10.9998 0.25C7.64011 0.25 4.9165 2.9736 4.9165 6.33333V10.9167H4.33317C2.4462 10.9167 0.916504 12.4464 0.916504 14.3333V25C0.916504 26.887 2.4462 28.4167 4.33317 28.4167H17.6665C19.5535 28.4167 21.0832 26.887 21.0832 25V14.3333C21.0832 12.4464 19.5535 10.9167 17.6665 10.9167H17.0832V6.33333C17.0832 2.9736 14.3596 0.25 10.9998 0.25ZM15.5832 6.33333V10.9167H6.4165V6.33333C6.4165 3.80203 8.46853 1.75 10.9998 1.75C13.5311 1.75 15.5832 3.80203 15.5832 6.33333ZM2.4165 14.3333C2.4165 13.2748 3.27462 12.4167 4.33317 12.4167H17.6665C18.725 12.4167 19.5832 13.2748 19.5832 14.3333V25C19.5832 26.0585 18.725 26.9167 17.6665 26.9167H4.33317C3.27462 26.9167 2.4165 26.0585 2.4165 25V14.3333ZM14.8843 18.1754C15.1652 17.871 15.1462 17.3965 14.8419 17.1156C14.5375 16.8346 14.063 16.8536 13.7821 17.158L10.2774 20.9547L8.16038 19.1023C7.84865 18.8295 7.37483 18.8611 7.10207 19.1728C6.82931 19.4845 6.8609 19.9584 7.17263 20.2311L9.83929 22.5645C10.1452 22.8321 10.6086 22.8074 10.8843 22.5087L14.8843 18.1754Z",
                            fill: t
                        })
                    })
                },
                Logo: m.A,
                MailClient: e => {
                    let {
                        className: l
                    } = e;
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 470 409",
                        preserveAspectRatio: "xMinYMin slice",
                        className: l,
                        children: [(0, a.jsx)("defs", {
                            children: (0, a.jsx)("pattern", {
                                id: "mailclient-pattern",
                                patternUnits: "objectBoundingBox",
                                y: "-16.966967%",
                                height: "116.966967%",
                                width: "100%",
                                children: (0, a.jsx)("use", {
                                    transform: "scale(0.232291667,0.232291667)"
                                })
                            })
                        }), (0, a.jsx)("rect", {
                            fill: r._5,
                            x: "0",
                            y: "0",
                            width: "470",
                            height: "410"
                        }), (0, a.jsx)("rect", {
                            fill: r._5,
                            x: "0",
                            y: "0",
                            width: "470",
                            height: "310"
                        }), (0, a.jsx)("circle", {
                            fill: r.$A,
                            cx: "29",
                            cy: "16",
                            r: "4"
                        }), (0, a.jsx)("circle", {
                            fill: r.$A,
                            cx: "40",
                            cy: "16",
                            r: "4"
                        }), (0, a.jsx)("circle", {
                            fill: r.$A,
                            cx: "51",
                            cy: "16",
                            r: "4"
                        })]
                    })
                },
                MailClientSmall: e => {
                    let {
                        className: l
                    } = e;
                    return (0, a.jsxs)("svg", {
                        className: l,
                        viewBox: "0 0 251 187",
                        children: [(0, a.jsxs)("defs", {
                            children: [(0, a.jsx)("path", {
                                d: "M0 3.992C0 1.7873 1.787 0 4.0014 0h237.9972C244.2086 0 246 1.7866 246 3.992V182H0V3.992z",
                                id: "mailclient-small-a"
                            }), (0, a.jsxs)("filter", {
                                x: "-1%",
                                y: "-1.4%",
                                width: "103.3%",
                                height: "104.4%",
                                filterUnits: "objectBoundingBox",
                                id: "mailclient-small-b",
                                children: [(0, a.jsx)("feMorphology", {
                                    radius: "1",
                                    operator: "dilate",
                                    in: "SourceAlpha",
                                    result: "shadowSpreadOuter1"
                                }), (0, a.jsx)("feOffset", {
                                    dx: "3",
                                    dy: "3",
                                    in: "shadowSpreadOuter1",
                                    result: "shadowOffsetOuter1"
                                }), (0, a.jsx)("feComposite", {
                                    in: "shadowOffsetOuter1",
                                    in2: "SourceAlpha",
                                    operator: "out",
                                    result: "shadowOffsetOuter1"
                                }), (0, a.jsx)("feColorMatrix", {
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1146 0",
                                    in: "shadowOffsetOuter1"
                                })]
                            })]
                        }), (0, a.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, a.jsxs)("g", {
                                transform: "translate(1 1)",
                                children: [(0, a.jsx)("use", {
                                    fill: r.Uv,
                                    filter: "url(#mailclient-small-b)",
                                    xlinkHref: "#mailclient-small-a"
                                }), (0, a.jsx)("use", {
                                    fill: r._5,
                                    xlinkHref: "#mailclient-small-a"
                                }), (0, a.jsx)("path", {
                                    strokeOpacity: ".0751",
                                    stroke: r.Uv,
                                    d: "M-.5 3.992C-.5 1.5094 1.5125-.5 4.0014-.5h237.9972c2.486 0 4.5014 2.0104 4.5014 4.492V182.5H-.5V3.992z"
                                })]
                            }), (0, a.jsx)("path", {
                                d: "M11.1333 10C9.9551 10 9 9.1046 9 8s.9551-2 2.1333-2c1.1782 0 2.1334.8954 2.1334 2s-.9552 2-2.1334 2zM17 10c-1.1782 0-2.1333-.8954-2.1333-2S15.8217 6 17 6c1.1782 0 2.1333.8954 2.1333 2s-.955 2-2.1333 2zm5.8667 0c-1.1782 0-2.1334-.8954-2.1334-2s.9552-2 2.1334-2S25 6.8954 25 8s-.9551 2-2.1333 2z",
                                fill: r.$A
                            })]
                        })]
                    })
                },
                MailContent: e => {
                    let {
                        className: l
                    } = e;
                    return (0, a.jsx)("svg", {
                        className: l,
                        viewBox: "0 0 180 133",
                        children: (0, a.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, a.jsx)("path", {
                                fill: r.UE,
                                d: "M0 0h179.3493v133H0z"
                            }), (0, a.jsx)("path", {
                                d: "M28.91 109.553a1.067 1.067 0 0 1 1.0725-1.0688h115.6368c.5923 0 1.0724.4744 1.0724 1.0688a1.067 1.067 0 0 1-1.0724 1.0688H29.9825c-.5923 0-1.0724-.4744-1.0724-1.0688zm0 6.4129c0-.5903.4707-1.0688 1.0646-1.0688h121.0063c.588 0 1.0645.4744 1.0645 1.0688 0 .5903-.4707 1.0688-1.0645 1.0688H29.9746c-.588 0-1.0645-.4744-1.0645-1.0688zm0 6.4128c0-.5903.4814-1.0688 1.069-1.0688h111.3608c.5903 0 1.069.4744 1.069 1.0688 0 .5903-.4814 1.0688-1.069 1.0688H29.979a1.0663 1.0663 0 0 1-1.069-1.0688z",
                                fill: r.vA,
                                opacity: ".5"
                            }), (0, a.jsx)("rect", {
                                fill: r.W5,
                                x: "54.0725",
                                y: "80.6951",
                                width: "70.669",
                                height: "12.2913",
                                rx: "6.1457"
                            })]
                        })
                    })
                },
                Mastercard: e => {
                    let {
                        className: l = "",
                        active: t = !0
                    } = e;
                    return (0, a.jsx)("svg", {
                        className: l,
                        viewBox: "0 0 30 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, a.jsxs)("g", {
                            fillRule: "nonzero",
                            fill: "none",
                            opacity: t ? "1" : ".25",
                            children: [(0, a.jsx)("path", {
                                d: "M5.936 23.4472v-1.5435c0-.5917-.3601-.9776-.9776-.9776-.3087 0-.6431.103-.8746.4374-.1801-.283-.4374-.4374-.8232-.4374-.2573 0-.5146.0772-.7204.3602v-.3087H2v2.4696h.5402v-1.3634c0-.4374.2316-.6432.5917-.6432.3602 0 .5403.2316.5403.6432v1.3634h.5402v-1.3634c0-.4374.2573-.6432.5917-.6432.3601 0 .5402.2316.5402.6432v1.3634h.5917zm8.0007-2.4696h-.8747v-.746h-.5402v.746h-.4888v.4888h.4888v1.1319c0 .566.2315.9004.8489.9004.2315 0 .4888-.0772.6689-.1801l-.1544-.463c-.1543.1028-.3344.1286-.463.1286-.2573 0-.3602-.1544-.3602-.4116v-1.1062h.8747v-.4888zm4.5791-.0515c-.3087 0-.5145.1544-.6431.3602v-.3087h-.5403v2.4696h.5403V22.058c0-.4116.18-.643.5145-.643.1029 0 .2315.0256.3344.0514l.1544-.5146c-.103-.0257-.2573-.0257-.3602-.0257zm-6.9202.2573c-.2572-.1801-.6174-.2573-1.0033-.2573-.6174 0-1.029.3087-1.029.7975 0 .4116.3087.6432.849.7203l.2572.0258c.283.0514.4373.1286.4373.2572 0 .18-.2058.3087-.566.3087-.36 0-.643-.1286-.8231-.2572l-.2573.4116c.283.2058.6689.3087 1.0548.3087.7203 0 1.1319-.3345 1.1319-.7975 0-.4374-.3344-.6689-.849-.746l-.2572-.0258c-.2315-.0257-.4116-.0772-.4116-.2315 0-.18.18-.283.463-.283.3087 0 .6174.1286.7718.2058l.2315-.4373zm14.3549-.2573c-.3087 0-.5145.1544-.6431.3602v-.3087h-.5403v2.4696h.5403V22.058c0-.4116.18-.643.5145-.643.1029 0 .2315.0256.3344.0514l.1544-.5146c-.103-.0257-.2573-.0257-.3602-.0257zm-6.8945 1.2863c0 .746.5146 1.2863 1.312 1.2863.3602 0 .6175-.0772.8747-.283l-.2572-.4373c-.2058.1543-.4116.2315-.6432.2315-.4373 0-.746-.3087-.746-.7975 0-.463.3087-.7718.746-.7975.2316 0 .4374.0772.6432.2315l.2572-.4373c-.2572-.2058-.5145-.283-.8747-.283-.7974 0-1.312.5403-1.312 1.2863zm4.9908 0v-1.2348h-.5402v.3087c-.1801-.2316-.4374-.3602-.7718-.3602-.6946 0-1.2348.5403-1.2348 1.2863s.5402 1.2863 1.2348 1.2863c.3602 0 .6174-.1287.7718-.3602v.3087h.5402v-1.2348zm-1.9809 0c0-.4373.283-.7975.746-.7975.4374 0 .7461.3344.7461.7975 0 .4373-.3087.7975-.746.7975-.463-.0257-.746-.3602-.746-.7975zm-6.457-1.2863c-.7204 0-1.235.5145-1.235 1.2863s.5146 1.2863 1.2606 1.2863c.3602 0 .7204-.103 1.0033-.3345l-.2572-.3858c-.2058.1543-.463.2572-.7203.2572-.3345 0-.6689-.1543-.746-.5917h1.8264v-.2058c.0258-.7975-.4373-1.312-1.1319-1.312zm0 .463c.3344 0 .5659.2059.6173.5918H14.94c.0514-.3345.283-.5917.6688-.5917zm13.403.8233V20h-.5403v1.2863c-.18-.2316-.4373-.3602-.7718-.3602-.6946 0-1.2348.5403-1.2348 1.2863s.5402 1.2863 1.2348 1.2863c.3602 0 .6174-.1287.7718-.3602v.3087h.5402v-1.2348zm-1.981 0c0-.4373.283-.7975.7461-.7975.4373 0 .746.3344.746.7975 0 .4373-.3087.7975-.746.7975-.463-.0257-.746-.3602-.746-.7975zm-18.0593 0v-1.2348h-.5402v.3087c-.18-.2316-.4373-.3602-.7718-.3602-.6946 0-1.2348.5403-1.2348 1.2863s.5402 1.2863 1.2348 1.2863c.3602 0 .6174-.1287.7718-.3602v.3087h.5402v-1.2348zm-2.0066 0c0-.4373.283-.7975.746-.7975.4374 0 .7461.3344.7461.7975 0 .4373-.3087.7975-.746.7975-.463-.0257-.746-.3602-.746-.7975z",
                                fill: r.Uv
                            }), (0, a.jsx)("path", {
                                fill: "#FF5F00",
                                d: "M11 2h8.1036v14.5607H11z"
                            }), (0, a.jsx)("path", {
                                d: "M11.4479 9.2612c0-2.9584 1.3892-5.5824 3.5244-7.2803C13.403.746 11.422 0 9.2612 0 4.1418 0 0 4.1418 0 9.2612c0 5.1194 4.1418 9.2612 9.2612 9.2612 2.161 0 4.1418-.746 5.711-1.9809-2.1351-1.6721-3.5243-4.3219-3.5243-7.2803z",
                                fill: "#EB001B"
                            }), (0, a.jsx)("path", {
                                d: "M29.9723 9.2612c0 5.1194-4.1418 9.2612-9.2612 9.2612-2.161 0-4.1418-.746-5.7111-1.9809 2.161-1.6979 3.5244-4.3219 3.5244-7.2803S17.1352 3.6788 15 1.9809C16.5693.746 18.5501 0 20.711 0c5.1195 0 9.2613 4.1675 9.2613 9.2612z",
                                fill: "#F79E1B"
                            })]
                        })
                    })
                },
                More: e => {
                    let {
                        className: l,
                        color: t = r.Uv,
                        onClick: i,
                        height: n,
                        width: s
                    } = e;
                    return (0, a.jsx)("svg", {
                        className: l,
                        onClick: i,
                        height: n,
                        width: s,
                        viewBox: "638 36 18 18",
                        children: (0, a.jsx)("path", {
                            d: "M647 47c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm7 0c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm-14 0c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z",
                            fill: t,
                            fillRule: "evenodd"
                        })
                    })
                },
                Padlock: e => {
                    let {
                        className: l,
                        color: t = r.Id
                    } = e;
                    return (0, a.jsx)("svg", {
                        className: l,
                        viewBox: "731 547 9 11",
                        children: (0, a.jsx)("path", {
                            d: "M738,551 L738,549.5093 C738,548.112366 736.880712,547 735.5,547 C734.109662,547 733,548.123452 733,549.5093 L733,551 L731.997545,551 C731.446311,551 731,551.449027 731,552.002929 L731,556.997071 C731,557.562119 731.446616,558 731.997545,558 L739.002455,558 C739.553689,558 740,557.550973 740,556.997071 L740,552.002929 C740,551.437881 739.553384,551 739.002455,551 L738,551 Z M734,551 L734,549.506398 C734,548.674437 734.665797,548 735.5,548 C736.328427,548 737,548.676463 737,549.506398 L737,551 L734,551 Z",
                            stroke: "none",
                            fill: t,
                            fillRule: "evenodd"
                        })
                    })
                },
                PayPal: e => {
                    let {
                        className: l = ""
                    } = e;
                    return (0, a.jsx)("svg", {
                        className: l,
                        viewBox: "0 0 26 31",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, a.jsxs)("g", {
                            fillRule: "nonzero",
                            fill: "none",
                            children: [(0, a.jsx)("path", {
                                d: "M21.57 2.254C20.185.676 17.683 0 14.482 0h-9.29a1.33 1.33 0 0 0-1.314 1.122L.01 25.655a.798.798 0 0 0 .788.922h5.735l1.44-9.136-.044.286a1.326 1.326 0 0 1 1.31-1.122h2.725c5.354 0 9.546-2.175 10.77-8.466.037-.186.068-.367.096-.544-.155-.082-.155-.082 0 0 .364-2.325-.003-3.908-1.26-5.34",
                                fill: "#27346A"
                            }), (0, a.jsx)("path", {
                                d: "M10.168 6.757c.153-.072.324-.113.502-.113h7.284c.862 0 1.667.056 2.402.175a10.093 10.093 0 0 1 1.191.265 6.58 6.58 0 0 1 1.283.511c.364-2.326-.003-3.908-1.26-5.34C20.184.675 17.683 0 14.482 0h-9.29a1.33 1.33 0 0 0-1.314 1.122L.01 25.654a.797.797 0 0 0 .787.922h5.736l2.989-18.95c.06-.39.31-.707.646-.869z",
                                fill: "#27346A"
                            }), (0, a.jsx)("path", {
                                d: "M22.606 8.544c-1.225 6.29-5.417 8.466-10.771 8.466H9.109c-.654 0-1.207.476-1.308 1.122l-1.792 11.36a.698.698 0 0 0 .689.807h4.834c.573 0 1.06-.417 1.149-.982l.047-.246.911-5.775.059-.32c.09-.564.576-.98 1.149-.98h.723c4.684 0 8.35-1.904 9.422-7.407.448-2.3.216-4.22-.967-5.568A4.618 4.618 0 0 0 22.701 8c-.028.178-.059.358-.095.544z",
                                fill: "#2790C3"
                            }), (0, a.jsx)("path", {
                                d: "M21.618 7.44a8.933 8.933 0 0 0-.578-.148 10.918 10.918 0 0 0-.614-.117C19.691 7.056 18.886 7 18.024 7H10.74a1.16 1.16 0 0 0-1.149.982l-1.547 9.815-.045.286a1.324 1.324 0 0 1 1.308-1.122h2.726c5.354 0 9.547-2.175 10.771-8.466.037-.186.067-.366.096-.544a6.613 6.613 0 0 0-1.283-.511",
                                fill: "#1F264F"
                            })]
                        })
                    })
                },
                Pencil: e => {
                    let {
                        className: l,
                        color: t = r.qL
                    } = e;
                    return (0, a.jsx)("svg", {
                        className: l,
                        fill: t,
                        fillRule: "evenodd",
                        height: "20",
                        viewBox: "0 0 20 20",
                        width: "20",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, a.jsx)("path", {
                            d: "m17.1199 7.17901-1.4639 1.49008-4.2682-4.27769 1.4579-1.48404c1.1541-1.17453 3.0407-1.18965 4.2129-.03327.009.00806.009.00806.0171.01613l.0271.02823c1.1732 1.17453 1.1803 3.07696.0171 4.26056zm-8.87738 9.03529-5.55706 1.1634 1.27884-5.431 6.01084-6.11764 4.26916 4.27664zm10.28408-14.72142-.0282-.02822-.0272-.02722c-1.965-1.937722-5.1254-1.913526-7.0593.05544l-8.88139 9.04032c-.25859.2621-.4407.5918-.52421.9517l-2.0063 8.5151 8.65404-1.8117c.38838-.0806.74457-.2762 1.02227-.5585l8.87739-9.03632c1.9389-1.97301 1.9268-5.14271-.0271-7.1006z",
                            fill: "#5c5e61"
                        })
                    })
                },
                PencilCircle: e => {
                    let {
                        className: l,
                        color: t = r.Id
                    } = e;
                    return (0, a.jsxs)("svg", {
                        className: l,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M12 -0.00195312C5.37258 -0.00195312 0 5.37063 0 11.998C0 18.6255 5.37258 23.998 12 23.998C18.6274 23.998 24 18.6255 24 11.998C24 5.37063 18.6274 -0.00195312 12 -0.00195312ZM12 1.99805C17.5228 1.99805 22 6.4752 22 11.998C22 17.5209 17.5228 21.998 12 21.998C6.47715 21.998 2 17.5209 2 11.998C2 6.4752 6.47715 1.99805 12 1.99805Z",
                            fill: t
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M15.2017 6.15292C15.9597 6.2763 16.566 6.685 16.9149 7.03386C17.711 7.83 17.9293 8.74341 17.7958 9.56334C17.6725 10.3213 17.2638 10.9276 16.9149 11.2765L12.3187 15.8727L12.1046 16.0868L11.8077 16.1462L8.27218 16.8533L6.80131 17.1474L7.09548 15.6766L7.80259 12.141L7.86197 11.8441L8.07607 11.6301L8.0823 11.6238L8.08856 11.6176L8.09485 11.6113L8.10117 11.6049L8.10752 11.5986L8.1139 11.5922L8.12032 11.5858L8.12676 11.5794L8.13323 11.5729L8.13973 11.5664L8.14626 11.5599L8.15282 11.5533L8.15941 11.5467L8.16603 11.5401L8.17268 11.5334L8.17936 11.5268L8.18606 11.5201L8.1928 11.5133L8.19956 11.5066L8.20636 11.4998L8.21318 11.4929L8.22003 11.4861L8.2269 11.4792L8.23381 11.4723L8.24074 11.4654L8.2477 11.4584L8.25469 11.4514L8.26171 11.4444L8.26875 11.4374L8.27582 11.4303L8.28292 11.4232L8.29004 11.4161L8.2972 11.4089L8.30438 11.4017L8.31158 11.3945L8.31882 11.3873L8.32607 11.38L8.33336 11.3728L8.34067 11.3654L8.34801 11.3581L8.35537 11.3507L8.36276 11.3434L8.37018 11.3359L8.37762 11.3285L8.38509 11.321L8.39258 11.3135L8.4001 11.306L8.40764 11.2985L8.41521 11.2909L8.42281 11.2833L8.43043 11.2757L8.43807 11.268L8.44574 11.2604L8.45343 11.2527L8.46115 11.245L8.46889 11.2372L8.47665 11.2295L8.48444 11.2217L8.49226 11.2139L8.50009 11.206L8.50795 11.1982L8.51584 11.1903L8.52375 11.1824L8.53168 11.1744L8.53963 11.1665L8.54761 11.1585L8.55561 11.1505L8.56364 11.1425L8.57168 11.1344L8.57975 11.1264L8.58785 11.1183L8.59596 11.1102L8.6041 11.102L8.61226 11.0939L8.62044 11.0857L8.62864 11.0775L8.63687 11.0693L8.64511 11.061L8.65338 11.0527L8.66167 11.0444L8.66998 11.0361L8.67831 11.0278L8.68667 11.0194L8.69504 11.0111L8.70344 11.0027L8.71185 10.9943L8.72029 10.9858L8.72875 10.9774L8.73723 10.9689L8.74573 10.9604L8.75425 10.9519L8.76278 10.9433L8.77134 10.9348L8.77992 10.9262L8.78852 10.9176L8.79714 10.909L8.80578 10.9003L8.81443 10.8917L8.82311 10.883L8.8318 10.8743L8.84052 10.8656L8.84925 10.8569L8.85801 10.8481L8.86678 10.8393L8.87557 10.8306L8.88437 10.8217L8.8932 10.8129L8.90204 10.8041L8.91091 10.7952L8.91979 10.7863L8.92869 10.7774L8.9376 10.7685L8.94654 10.7596L8.95549 10.7506L8.96446 10.7417L8.97344 10.7327L8.98245 10.7237L8.99147 10.7146L9.00051 10.7056L9.00956 10.6966L9.01863 10.6875L9.02772 10.6784L9.03682 10.6693L9.04594 10.6602L9.05508 10.651L9.06423 10.6419L9.0734 10.6327L9.08259 10.6235L9.09179 10.6143L9.101 10.6051L9.11024 10.5959L9.11948 10.5866L9.12875 10.5774L9.13802 10.5681L9.14732 10.5588L9.15662 10.5495L9.16595 10.5402L9.17528 10.5308L9.18464 10.5215L9.194 10.5121L9.20338 10.5027L9.21278 10.4933L9.22219 10.4839L9.23161 10.4745L9.24105 10.4651L9.2505 10.4556L9.25996 10.4462L9.26944 10.4367L9.27893 10.4272L9.28844 10.4177L9.29796 10.4082L9.30749 10.3986L9.31703 10.3891L9.32659 10.3795L9.33616 10.37L9.34574 10.3604L9.35534 10.3508L9.36494 10.3412L9.37456 10.3316L9.3842 10.3219L9.39384 10.3123L9.4035 10.3026L9.41316 10.293L9.42284 10.2833L9.43253 10.2736L9.44223 10.2639L9.45195 10.2542L9.46167 10.2444L9.47141 10.2347L9.48116 10.225L9.49091 10.2152L9.50068 10.2054L9.51046 10.1957L9.52025 10.1859L9.53005 10.1761L9.53986 10.1663L9.54968 10.1564L9.55951 10.1466L9.56935 10.1368L9.5792 10.1269L9.58906 10.1171L9.59893 10.1072L9.60881 10.0973L9.6187 10.0874L9.6286 10.0775L9.6385 10.0676L9.64842 10.0577L9.65834 10.0478L9.66828 10.0378L9.67822 10.0279L9.68817 10.0179L9.69813 10.008L9.7081 9.99802L9.71807 9.98804L9.72806 9.97806L9.73805 9.96807L9.74805 9.95807L9.75805 9.94806L9.76807 9.93805L9.77809 9.92803L9.78812 9.918L9.79816 9.90796L9.8082 9.89792L9.81825 9.88787L9.82831 9.87781L9.83837 9.86774L9.84844 9.85767L9.85852 9.84759L9.86861 9.83751L9.8787 9.82742L9.88879 9.81732L9.89889 9.80722L9.909 9.79711L9.91912 9.787L9.92924 9.77688L9.93936 9.76675L9.94949 9.75662L9.95963 9.74648L9.96977 9.73634L9.97992 9.7262L9.99007 9.71604L10.0002 9.70589L10.0104 9.69573L10.0206 9.68556L10.0307 9.67539L10.0409 9.66521L10.0511 9.65503L10.0613 9.64485L10.0715 9.63466L10.0816 9.62447L10.0918 9.61427L10.102 9.60407L10.1122 9.59387L10.1225 9.58366L10.1327 9.57345L10.1429 9.56324L10.1531 9.55302L10.1633 9.54281L10.1735 9.53258L10.1838 9.52236L10.194 9.51213L10.2042 9.5019L10.2144 9.49167L10.2247 9.48143L10.2349 9.47119L10.2452 9.46095L10.2554 9.45071L10.2656 9.44047L10.2759 9.43022L10.2861 9.41998L10.2964 9.40973L10.3066 9.39948L10.3169 9.38923L10.3271 9.37898L10.3374 9.36872L10.3476 9.35847L10.3579 9.34822L10.3682 9.33796L10.3784 9.3277L10.3887 9.31745L10.3989 9.30719L10.4092 9.29693L10.4194 9.28668L10.4297 9.27642L10.44 9.26616L10.4502 9.2559L10.4605 9.24565L10.4707 9.23539L10.481 9.22514L10.4912 9.21488L10.5015 9.20463L10.5117 9.19438L10.522 9.18412L10.5322 9.17387L10.5425 9.16362L10.5527 9.15338L10.563 9.14313L10.5732 9.13288L10.5835 9.12264L10.5937 9.1124L10.604 9.10216L10.6142 9.09192L10.6244 9.08169L10.6347 9.07146L10.6449 9.06123L10.6551 9.051L10.6653 9.04077L10.6756 9.03055L10.6858 9.02033L10.696 9.01012L10.7062 8.99991L10.7164 8.9897L10.7266 8.97949L10.7368 8.96929L10.747 8.95909L10.7572 8.94889L10.7674 8.9387L10.7776 8.92851L10.7878 8.91833L10.798 8.90815L10.8081 8.89798L10.8183 8.88781L10.8285 8.87764L10.8386 8.86748L10.8488 8.85733L10.8589 8.84717L10.8691 8.83703L10.8792 8.82689L10.8894 8.81675L10.8995 8.80662L10.9096 8.7965L10.9197 8.78638L10.9299 8.77626L10.94 8.76616L10.9501 8.75605L10.9602 8.74596L10.9702 8.73587L10.9803 8.72579L10.9904 8.71571L11.0005 8.70564L11.0105 8.69558L11.0206 8.68552L11.0306 8.67547L11.0407 8.66543L11.0507 8.65539L11.0608 8.64536L11.0708 8.63534L11.0808 8.62533L11.0908 8.61532L11.1008 8.60533L11.1108 8.59534L11.1208 8.58535L11.1307 8.57538L11.1407 8.56541L11.1507 8.55546L11.1606 8.54551L11.1705 8.53557L11.1805 8.52563L11.1904 8.51571L11.2003 8.5058L11.2102 8.49589L11.2201 8.486L11.23 8.47611L11.2399 8.46623L11.2498 8.45636L11.2596 8.4465L11.2695 8.43666L11.2793 8.42682L11.2891 8.41699L11.2989 8.40717L11.3088 8.39736L11.3186 8.38756L11.3283 8.37777L11.3381 8.368L11.3479 8.35823L11.3576 8.34847L11.3674 8.33873L11.3771 8.32899L11.3868 8.31927L11.3966 8.30956L11.4063 8.29986L11.4159 8.29017L11.4256 8.28049L11.4353 8.27083L11.4449 8.26117L11.4546 8.25153L11.4642 8.2419L11.4738 8.23228L11.4834 8.22268L11.493 8.21309L11.5026 8.20351L11.5122 8.19394L11.5217 8.18438L11.5313 8.17484L11.5408 8.16531L11.5503 8.1558L11.5598 8.14629L11.5693 8.1368L11.5788 8.12733L11.5883 8.11787L11.5977 8.10842L11.6071 8.09898L11.6166 8.08956L11.626 8.08015L11.6354 8.07076L11.6447 8.06138L11.6541 8.05202L11.6634 8.04267L11.6728 8.03333L11.6821 8.02401L11.6914 8.01471L11.7007 8.00542L11.71 7.99614L11.7192 7.98688L11.7285 7.97764L11.7377 7.96841L11.7469 7.95919L11.7561 7.95L11.7653 7.94081L11.7745 7.93165L11.7836 7.9225L11.7928 7.91336L11.8019 7.90425L11.811 7.89514L11.8201 7.88606L11.8291 7.87699L11.8382 7.86794L11.8472 7.8589L11.8562 7.84989L11.8652 7.84089L11.8742 7.8319L11.8832 7.82294L11.8921 7.81399L11.9011 7.80506L11.91 7.79614L11.9189 7.78725L11.9277 7.77837L11.9366 7.76951L11.9454 7.76067L11.9543 7.75184L11.9631 7.74304L11.9719 7.73425L11.9806 7.72548L11.9894 7.71673L11.9981 7.708L12.0068 7.69929L12.0155 7.6906L12.0242 7.68193L12.0328 7.67327L12.0415 7.66464L12.0501 7.65602L12.0587 7.64743L12.0673 7.63885L12.0758 7.6303L12.0844 7.62176L12.0929 7.61325L12.1014 7.60475L12.1098 7.59628L12.1183 7.58782L12.1267 7.57939L12.1351 7.57097L12.1435 7.56258L12.1519 7.55421L12.1603 7.54586L12.1686 7.53753L12.1769 7.52922L12.1852 7.52094L12.1934 7.51267L12.2017 7.50443L12.2099 7.49621L12.2181 7.48801L12.2263 7.47983L12.2344 7.47168L12.2426 7.46354L12.2507 7.45543L12.2588 7.44734L12.2668 7.43928L12.2749 7.43123L12.2829 7.42321L12.2909 7.41522L12.2989 7.40724L12.3068 7.39929L12.3148 7.39136L12.3227 7.38346L12.3305 7.37558L12.3384 7.36772L12.3462 7.35989L12.354 7.35208L12.3618 7.34429L12.3696 7.33653L12.3773 7.32879L12.385 7.32108L12.3927 7.31339L12.4004 7.30573L12.408 7.29809L12.4156 7.29047L12.4232 7.28288L12.4308 7.27532L12.4383 7.26778L12.4459 7.26027L12.4533 7.25278L12.4608 7.24531L12.4682 7.23788L12.4757 7.23046L12.483 7.22308L12.4904 7.21572L12.4977 7.20838L12.505 7.20108L12.5123 7.19379L12.5196 7.18654L12.5268 7.17931L12.534 7.17211L12.5412 7.16493L12.5483 7.15779L12.5555 7.15067L12.5625 7.14357L12.5696 7.13651L12.5766 7.12947L12.5837 7.12245L12.5906 7.11547L12.5976 7.10851L12.6045 7.10159L12.6114 7.09468L12.6183 7.08781L12.6251 7.08097L12.632 7.07415L12.6388 7.06736L12.6455 7.06061L12.6522 7.05387L12.6589 7.04717L12.6656 7.0405L12.6723 7.03386C13.4684 6.23771 14.3818 6.01944 15.2017 6.15292ZM14.8804 8.12693C14.6868 8.09542 14.4217 8.11285 14.0865 8.44807L14.0798 8.45471L14.0732 8.46139L14.0665 8.46809L14.0597 8.47482L14.053 8.48158L14.0462 8.48837L14.0394 8.49518L14.0325 8.50203L14.0256 8.5089L14.0187 8.5158L14.0118 8.52273L14.0049 8.52968L13.9979 8.53667L13.9909 8.54368L13.9838 8.55072L13.9768 8.55779L13.9697 8.56488L13.9625 8.572L13.9554 8.57915L13.9482 8.58632L13.941 8.59353L13.9338 8.60075L13.9265 8.60801L13.9193 8.61529L13.9119 8.6226L13.9046 8.62993L13.8973 8.63729L13.8899 8.64468L13.8825 8.65209L13.875 8.65953L13.8676 8.66699L13.8601 8.67448L13.8525 8.68199L13.845 8.68953L13.8374 8.6971L13.8299 8.70469L13.8222 8.7123L13.8146 8.71994L13.8069 8.7276L13.7992 8.73529L13.7915 8.74301L13.7838 8.75074L13.776 8.75851L13.7683 8.76629L13.7604 8.7741L13.7526 8.78193L13.7448 8.78979L13.7369 8.79767L13.729 8.80558L13.721 8.8135L13.7131 8.82146L13.7051 8.82943L13.6971 8.83743L13.6891 8.84545L13.6811 8.85349L13.673 8.86156L13.6649 8.86965L13.6568 8.87776L13.6487 8.88589L13.6405 8.89404L13.6323 8.90222L13.6241 8.91042L13.6159 8.91864L13.6077 8.92689L13.5994 8.93515L13.5911 8.94344L13.5828 8.95175L13.5745 8.96007L13.5661 8.96842L13.5577 8.9768L13.5494 8.98519L13.5409 8.9936L13.5325 9.00204L13.5241 9.01049L13.5156 9.01896L13.5071 9.02746L13.4986 9.03598L13.49 9.04451L13.4815 9.05307L13.4729 9.06164L13.4643 9.07024L13.4557 9.07885L13.4471 9.08749L13.4384 9.09614L13.4297 9.10481L13.421 9.11351L13.4123 9.12222L13.4036 9.13095L13.3948 9.1397L13.3861 9.14847L13.3773 9.15725L13.3685 9.16606L13.3597 9.17488L13.3508 9.18372L13.342 9.19258L13.3331 9.20146L13.3242 9.21036L13.3153 9.21927L13.3063 9.2282L13.2974 9.23715L13.2884 9.24612L13.2794 9.2551L13.2704 9.2641L13.2614 9.27312L13.2524 9.28215L13.2433 9.2912L13.2343 9.30027L13.2252 9.30936L13.2161 9.31846L13.207 9.32758L13.1978 9.33671L13.1887 9.34586L13.1795 9.35503L13.1703 9.36421L13.1611 9.37341L13.1519 9.38262L13.1427 9.39185L13.1334 9.4011L13.1242 9.41036L13.1149 9.41963L13.1056 9.42892L13.0963 9.43823L13.087 9.44755L13.0777 9.45688L13.0683 9.46623L13.0589 9.4756L13.0496 9.48497L13.0402 9.49437L13.0308 9.50377L13.0213 9.5132L13.0119 9.52263L13.0025 9.53208L12.993 9.54154L12.9835 9.55102L12.974 9.56051L12.9645 9.57001L12.955 9.57953L12.9455 9.58905L12.9359 9.5986L12.9264 9.60815L12.9168 9.61772L12.9072 9.6273L12.8976 9.63689L12.888 9.6465L12.8784 9.65612L12.8688 9.66575L12.8592 9.67539L12.8495 9.68504L12.8398 9.69471L12.8302 9.70438L12.8205 9.71407L12.8108 9.72377L12.8011 9.73349L12.7913 9.74321L12.7816 9.75294L12.7719 9.76269L12.7621 9.77244L12.7523 9.78221L12.7426 9.79199L12.7328 9.80178L12.723 9.81157L12.7132 9.82138L12.7033 9.8312L12.6935 9.84103L12.6837 9.85087L12.6738 9.86072L12.664 9.87058L12.6541 9.88044L12.6442 9.89032L12.6343 9.90021L12.6244 9.91011L12.6145 9.92001L12.6046 9.92992L12.5947 9.93985L12.5848 9.94978L12.5748 9.95972L12.5649 9.96967L12.5549 9.97963L12.5449 9.98959L12.535 9.99957L12.525 10.0095L12.515 10.0195L12.505 10.0295L12.495 10.0395L12.485 10.0496L12.475 10.0596L12.4649 10.0696L12.4549 10.0796L12.4449 10.0897L12.4348 10.0997L12.4248 10.1098L12.4147 10.1199L12.4046 10.1299L12.3945 10.14L12.3845 10.1501L12.3744 10.1602L12.3643 10.1703L12.3542 10.1804L12.3441 10.1905L12.334 10.2006L12.3238 10.2107L12.3137 10.2208L12.3036 10.231L12.2934 10.2411L12.2833 10.2512L12.2732 10.2614L12.263 10.2715L12.2528 10.2817L12.2427 10.2919L12.2325 10.302L12.2224 10.3122L12.2122 10.3224L12.202 10.3325L12.1918 10.3427L12.1816 10.3529L12.1714 10.3631L12.1612 10.3733L12.151 10.3835L12.1408 10.3937L12.1306 10.4039L12.1204 10.4141L12.1102 10.4243L12.1 10.4345L12.0898 10.4448L12.0796 10.455L12.0693 10.4652L12.0591 10.4754L12.0489 10.4857L12.0386 10.4959L12.0284 10.5061L12.0182 10.5164L12.0079 10.5266L11.9977 10.5369L11.9874 10.5471L11.9772 10.5573L11.967 10.5676L11.9567 10.5778L11.9465 10.5881L11.9362 10.5983L11.926 10.6086L11.9157 10.6188L11.9054 10.6291L11.8952 10.6394L11.8849 10.6496L11.8747 10.6599L11.8644 10.6701L11.8542 10.6804L11.8439 10.6906L11.8337 10.7009L11.8234 10.7111L11.8131 10.7214L11.8029 10.7317L11.7926 10.7419L11.7824 10.7522L11.7721 10.7624L11.7619 10.7727L11.7516 10.7829L11.7414 10.7932L11.7311 10.8034L11.7208 10.8137L11.7106 10.8239L11.7004 10.8342L11.6901 10.8444L11.6799 10.8547L11.6696 10.8649L11.6594 10.8752L11.6491 10.8854L11.6389 10.8956L11.6287 10.9059L11.6184 10.9161L11.6082 10.9263L11.598 10.9366L11.5877 10.9468L11.5775 10.957L11.5673 10.9672L11.5571 10.9775L11.5469 10.9877L11.5367 10.9979L11.5265 11.0081L11.5163 11.0183L11.5061 11.0285L11.4959 11.0387L11.4857 11.0489L11.4755 11.0591L11.4653 11.0692L11.4551 11.0794L11.4449 11.0896L11.4348 11.0998L11.4246 11.1099L11.4144 11.1201L11.4043 11.1303L11.3941 11.1404L11.384 11.1506L11.3738 11.1607L11.3637 11.1708L11.3536 11.181L11.3435 11.1911L11.3333 11.2012L11.3232 11.2113L11.3131 11.2214L11.303 11.2315L11.2929 11.2416L11.2828 11.2517L11.2727 11.2618L11.2627 11.2719L11.2526 11.282L11.2425 11.292L11.2325 11.3021L11.2224 11.3121L11.2124 11.3222L11.2023 11.3322L11.1923 11.3422L11.1823 11.3523L11.1723 11.3623L11.1623 11.3723L11.1523 11.3823L11.1423 11.3923L11.1323 11.4023L11.1223 11.4122L11.1123 11.4222L11.1024 11.4322L11.0924 11.4421L11.0825 11.4521L11.0726 11.462L11.0626 11.4719L11.0527 11.4818L11.0428 11.4917L11.0329 11.5016L11.023 11.5115L11.0131 11.5214L11.0033 11.5313L10.9934 11.5411L10.9836 11.551L10.9737 11.5608L10.9639 11.5706L10.9541 11.5805L10.9443 11.5903L10.9345 11.6001L10.9247 11.6099L10.9149 11.6196L10.9051 11.6294L10.8954 11.6392L10.8856 11.6489L10.8759 11.6587L10.8662 11.6684L10.8564 11.6781L10.8467 11.6878L10.8371 11.6975L10.8274 11.7072L10.8177 11.7168L10.8081 11.7265L10.7984 11.7361L10.7888 11.7458L10.7792 11.7554L10.7696 11.765L10.76 11.7746L10.7504 11.7842L10.7408 11.7937L10.7312 11.8033L10.7217 11.8128L10.7122 11.8224L10.7027 11.8319L10.6931 11.8414L10.6837 11.8509L10.6742 11.8604L10.6647 11.8698L10.6553 11.8793L10.6458 11.8887L10.6364 11.8981L10.627 11.9076L10.6176 11.9169L10.6082 11.9263L10.5988 11.9357L10.5895 11.945L10.5802 11.9544L10.5708 11.9637L10.5615 11.973L10.5522 11.9823L10.543 11.9916L10.5337 12.0008L10.5244 12.0101L10.5152 12.0193L10.506 12.0285L10.4968 12.0377L10.4876 12.0469L10.4784 12.0561L10.4693 12.0652L10.4602 12.0744L10.451 12.0835L10.4419 12.0926L10.4328 12.1017L10.4238 12.1108L10.4147 12.1198L10.4057 12.1289L10.3967 12.1379L10.3877 12.1469L10.3787 12.1559L10.3697 12.1648L10.3608 12.1738L10.3518 12.1827L10.3429 12.1916L10.334 12.2005L10.3251 12.2094L10.3163 12.2183L10.3074 12.2271L10.2986 12.236L10.2898 12.2448L10.281 12.2536L10.2722 12.2623L10.2635 12.2711L10.2547 12.2798L10.246 12.2885L10.2373 12.2972L10.2286 12.3059L10.22 12.3146L10.2114 12.3232L10.2027 12.3318L10.1941 12.3404L10.1856 12.349L10.177 12.3575L10.1685 12.3661L10.1599 12.3746L10.1514 12.3831L10.143 12.3916L10.1345 12.4L10.1261 12.4085L10.1177 12.4169L10.1093 12.4253L10.1009 12.4337L10.0925 12.442L10.0842 12.4503L10.0759 12.4587L10.0676 12.4669L10.0593 12.4752L10.0511 12.4835L10.0429 12.4917L10.0347 12.4999L10.0265 12.5081L10.0183 12.5162L10.0102 12.5244L10.0021 12.5325L9.99397 12.5406L9.9859 12.5486L9.97785 12.5567L9.96983 12.5647L9.96183 12.5727L9.95385 12.5807L9.94589 12.5887L9.93796 12.5966L9.93005 12.6045L9.92217 12.6124L9.91431 12.6202L9.90647 12.6281L9.89866 12.6359L9.89087 12.6437L9.8831 12.6514L9.87536 12.6592L9.86764 12.6669L9.85995 12.6746L9.85228 12.6823L9.84464 12.6899L9.83702 12.6975L9.82943 12.7051L9.82186 12.7127L9.81431 12.7202L9.8068 12.7277L9.7993 12.7352L9.79184 12.7427L9.78439 12.7501L9.77698 12.7576L9.76959 12.765L9.76222 12.7723L9.75489 12.7797L9.74757 12.787L9.74029 12.7943L9.73303 12.8015L9.7258 12.8087L9.71859 12.816L9.71141 12.8231L9.70437 12.8302L9.35082 14.5979L11.1186 14.2444L15.5007 9.86228C15.6232 9.73974 15.7802 9.49759 15.8218 9.24199C15.8533 9.0484 15.8359 8.7833 15.5007 8.44807C15.3781 8.32552 15.136 8.16854 14.8804 8.12693Z",
                            fill: t
                        })]
                    })
                },
                Pin: e => {
                    let {
                        className: l,
                        color: t = "#333333",
                        onClick: i
                    } = e;
                    return (0, a.jsx)("svg", {
                        className: l,
                        onClick: i,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, a.jsxs)("g", {
                            id: "wt.pin",
                            children: [(0, a.jsx)("path", {
                                id: "Vector",
                                d: "M20 10.25C20 14.8063 12 22 12 22C12 22 4 14.8063 4 10.25C4 5.69365 7.58172 2 12 2C16.4183 2 20 5.69365 20 10.25Z",
                                stroke: t,
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, a.jsx)("path", {
                                id: "Vector_2",
                                d: "M12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14Z",
                                stroke: t,
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            })]
                        })
                    })
                },
                Play: e => {
                    let {
                        width: l = 18,
                        color: t = r.NI
                    } = e;
                    return (0, a.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: l,
                        height: l,
                        viewBox: "0 0 16 17",
                        fill: "none",
                        children: (0, a.jsx)("g", {
                            transform: " translate(0.6887,0) translate(2.9537,0) scale(0.9315,1) translate(-2.9537,0) ",
                            children: (0, a.jsx)("path", {
                                d: " M2.9537 0.6954 L14.7614 7.0429 C16.0000 7.7088 16.0000 9.2913 14.7614 9.9572 L2.9537 16.3046 C1.6601 17.0000 0.0000 16.1811 0.0000 14.8475 L0.0000 2.1526 C0.0000 0.8191 1.6601 0.0000 2.9537 0.6954 Z ",
                                fill: t
                            })
                        })
                    })
                },
                Privacy: e => {
                    let {
                        width: l = 18,
                        color: t = r.NI,
                        ...i
                    } = e;
                    return (0, a.jsxs)("svg", {
                        width: l,
                        height: 14 * l / 30,
                        viewBox: "0 0 ".concat(30, " ").concat(14),
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        ...i,
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M7.4,12.8h6.8l3.1-11.6H7.4C4.2,1.2,1.6,3.8,1.6,7S4.2,12.8,7.4,12.8z",
                            fill: "#FFFFFF"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M22.6,0H7.4c-3.9,0-7,3.1-7,7s3.1,7,7,7h15.2c3.9,0,7-3.1,7-7S26.4,0,22.6,0z M1.6,7c0-3.2,2.6-5.8,5.8-5.8 h9.9l-3.1,11.6H7.4C4.2,12.8,1.6,10.2,1.6,7z",
                            fill: t
                        }), (0, a.jsx)("path", {
                            d: "M24.6,4c0.2,0.2,0.2,0.6,0,0.8l0,0L22.5,7l2.2,2.2c0.2,0.2,0.2,0.6,0,0.8c-0.2,0.2-0.6,0.2-0.8,0 l0,0l-2.2-2.2L19.5,10c-0.2,0.2-0.6,0.2-0.8,0c-0.2-0.2-0.2-0.6,0-0.8l0,0L20.8,7l-2.2-2.2c-0.2-0.2-0.2-0.6,0-0.8 c0.2-0.2,0.6-0.2,0.8,0l0,0l2.2,2.2L23.8,4C24,3.8,24.4,3.8,24.6,4z",
                            fill: "#FFFFFF"
                        }), (0, a.jsx)("path", {
                            d: "M12.7,4.1c0.2,0.2,0.3,0.6,0.1,0.8l0,0L8.6,9.8C8.5,9.9,8.4,10,8.3,10c-0.2,0.1-0.5,0.1-0.7-0.1l0,0 L5.4,7.7c-0.2-0.2-0.2-0.6,0-0.8c0.2-0.2,0.6-0.2,0.8,0l0,0L8,8.6l3.8-4.5C12,3.9,12.4,3.9,12.7,4.1z",
                            fill: t
                        })]
                    })
                },
                Purchase: e => {
                    let {
                        className: l,
                        color: t = r.UE,
                        onClick: i
                    } = e;
                    return (0, a.jsx)("svg", {
                        className: l,
                        onClick: i,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        width: "24",
                        height: "24",
                        children: (0, a.jsxs)("g", {
                            id: "wt.purchase",
                            children: [(0, a.jsx)("path", {
                                d: "M4.71023 9.0107C4.77303 7.95096 4.80443 7.42108 5.03076 7.01899C5.23 6.66501 5.5323 6.3801 5.89744 6.20215C6.31222 6 6.84302 6 7.90463 6H16.0949C17.1565 6 17.6873 6 18.1021 6.20215C18.4672 6.3801 18.7695 6.66501 18.9688 7.01899C19.1951 7.42108 19.2265 7.95095 19.2893 9.0107L19.5981 14.2214C19.7378 16.5802 19.8077 17.7596 19.3919 18.6668C19.0264 19.4641 18.409 20.1192 17.6347 20.5312C16.7537 21 15.5722 21 13.2093 21H10.7902C8.42732 21 7.24585 21 6.36485 20.5312C5.59054 20.1192 4.97311 19.4641 4.60762 18.6668C4.19178 17.7596 4.26167 16.5802 4.40145 14.2214L4.71023 9.0107Z",
                                stroke: t,
                                strokeWidth: "1.5",
                                strokeLinecap: "round"
                            }), (0, a.jsx)("path", {
                                d: "M15 5.5V5C15 3.34315 13.6569 2 12 2V2C10.3431 2 9 3.34315 9 5V5.5",
                                stroke: t,
                                strokeWidth: "1.5",
                                strokeLinecap: "round"
                            }), (0, a.jsx)("path", {
                                d: "M15 9V9.5C15 11.1569 13.6569 12.5 12 12.5V12.5C10.3431 12.5 9 11.1569 9 9.5V9",
                                stroke: t,
                                strokeWidth: "1.5",
                                strokeLinecap: "round"
                            })]
                        })
                    })
                },
                Phone: e => {
                    let {
                        color: l = r.W5
                    } = e;
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 64 64",
                        fill: "none",
                        children: [(0, a.jsx)("circle", {
                            cx: "32",
                            cy: "32",
                            r: "31",
                            stroke: l,
                            strokeWidth: "2"
                        }), (0, a.jsx)("path", {
                            d: "M28.44 16H35.56C36.7158 16 37.5214 16.0008 38.1483 16.0529C38.7632 16.1039 39.116 16.1991 39.3829 16.3378C39.9309 16.6224 40.3776 17.0691 40.6622 17.6171C40.8009 17.884 40.8961 18.2368 40.9471 18.8517C40.9992 19.4786 41 20.2842 41 21.44V43.56C41 44.7158 40.9992 45.5214 40.9471 46.1483C40.8961 46.7632 40.8009 47.116 40.6622 47.3829C40.3776 47.9309 39.9309 48.3776 39.3829 48.6622C39.116 48.8009 38.7632 48.8961 38.1483 48.9471C37.5214 48.9992 36.7158 49 35.56 49H28.44C27.2842 49 26.4786 48.9992 25.8517 48.9471C25.2368 48.8961 24.884 48.8009 24.6171 48.6622C24.0691 48.3776 23.6224 47.9309 23.3378 47.3829C23.1991 47.116 23.1039 46.7632 23.0529 46.1483C23.0008 45.5214 23 44.7158 23 43.56V21.44C23 20.2842 23.0008 19.4786 23.0529 18.8517C23.1039 18.2368 23.1991 17.884 23.3378 17.6171C23.6224 17.0691 24.0691 16.6224 24.6171 16.3378C24.884 16.1991 25.2368 16.1039 25.8517 16.0529C26.4786 16.0008 27.2842 16 28.44 16Z",
                            stroke: l,
                            strokeWidth: "2"
                        }), (0, a.jsx)("path", {
                            d: "M27 17H37L36.0206 18.5671C35.8522 18.8364 35.5571 19 35.2395 19H28.7605C28.4429 19 28.1478 18.8364 27.9794 18.5671L27 17Z",
                            fill: l
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M25 22C25 21.4477 25.4477 21 26 21H28C28.5523 21 29 21.4477 29 22V24C29 24.5523 28.5523 25 28 25H26C25.4477 25 25 24.5523 25 24V22ZM30 22C30 21.4477 30.4477 21 31 21H33C33.5523 21 34 21.4477 34 22V24C34 24.5523 33.5523 25 33 25H31C30.4477 25 30 24.5523 30 24V22ZM36 21C35.4477 21 35 21.4477 35 22V24C35 24.5523 35.4477 25 36 25H38C38.5523 25 39 24.5523 39 24V22C39 21.4477 38.5523 21 38 21H36ZM25 44C25 43.4477 25.4477 43 26 43H28C28.5523 43 29 43.4477 29 44V46C29 46.5523 28.5523 47 28 47H26C25.4477 47 25 46.5523 25 46V44ZM31 43C30.4477 43 30 43.4477 30 44V46C30 46.5523 30.4477 47 31 47H33C33.5523 47 34 46.5523 34 46V44C34 43.4477 33.5523 43 33 43H31ZM35 44C35 43.4477 35.4477 43 36 43H38C38.5523 43 39 43.4477 39 44V46C39 46.5523 38.5523 47 38 47H36C35.4477 47 35 46.5523 35 46V44ZM26 26C25.4477 26 25 26.4477 25 27V29C25 29.5523 25.4477 30 26 30H28C28.5523 30 29 29.5523 29 29V27C29 26.4477 28.5523 26 28 26H26ZM30 27C30 26.4477 30.4477 26 31 26H33C33.5523 26 34 26.4477 34 27V29C34 29.5523 33.5523 30 33 30H31C30.4477 30 30 29.5523 30 29V27ZM36 26C35.4477 26 35 26.4477 35 27V29C35 29.5523 35.4477 30 36 30H38C38.5523 30 39 29.5523 39 29V27C39 26.4477 38.5523 26 38 26H36ZM25 32C25 31.4477 25.4477 31 26 31H28C28.5523 31 29 31.4477 29 32V34C29 34.5523 28.5523 35 28 35H26C25.4477 35 25 34.5523 25 34V32ZM31 31C30.4477 31 30 31.4477 30 32V34C30 34.5523 30.4477 35 31 35H33C33.5523 35 34 34.5523 34 34V32C34 31.4477 33.5523 31 33 31H31Z",
                            fill: l
                        })]
                    })
                },
                PlusCircle: e => {
                    let {
                        className: l,
                        color: t = r.W5,
                        role: i,
                        ariaLabel: n
                    } = e;
                    return (0, a.jsx)("svg", {
                        className: l,
                        viewBox: "0 0 72 72",
                        role: i,
                        "aria-label": n,
                        children: (0, a.jsx)("path", {
                            d: "M36.493 72C16.118 72 0 55.883 0 36.493 0 16.118 16.118 0 36.493 0 55.882 0 72 16.118 72 36.493 72 55.882 55.883 72 36.493 72zM34 34h-9c-.553 0-1 .452-1 1.01v1.98A1 1 0 0 0 25 38h9v9c0 .553.452 1 1.01 1h1.98A1 1 0 0 0 38 47v-9h9c.553 0 1-.452 1-1.01v-1.98A1 1 0 0 0 47 34h-9v-9c0-.553-.452-1-1.01-1h-1.98A1 1 0 0 0 34 25v9z",
                            fill: t,
                            fillRule: "nonzero"
                        })
                    })
                },
                Pointer: () => (0, a.jsxs)("svg", {
                    className: "pointer",
                    width: "16px",
                    height: "7px",
                    children: [(0, a.jsxs)("defs", {
                        children: [(0, a.jsx)("path", {
                            d: "M7.49526119,1.31664646 C8.32630549,0.589482698 9.66831553,0.584776089 10.5047388,1.31664646 L17,7 L1,7 L7.49526119,1.31664646 Z",
                            id: "path-pointer"
                        }), (0, a.jsxs)("filter", {
                            x: "-50%",
                            y: "-50%",
                            width: "200%",
                            height: "200%",
                            filterUnits: "objectBoundingBox",
                            id: "filter-pointer",
                            children: [(0, a.jsx)("feOffset", {
                                dx: "0",
                                dy: "10",
                                in: "SourceAlpha",
                                result: "shadowOffsetOuter1"
                            }), (0, a.jsx)("feGaussianBlur", {
                                stdDeviation: "15",
                                in: "shadowOffsetOuter1",
                                result: "shadowBlurOuter1"
                            }), (0, a.jsx)("feColorMatrix", {
                                values: "0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0",
                                type: "matrix",
                                in: "shadowBlurOuter1",
                                result: "shadowMatrixOuter1"
                            }), (0, a.jsx)("feOffset", {
                                dx: "0",
                                dy: "0",
                                in: "SourceAlpha",
                                result: "shadowOffsetOuter2"
                            }), (0, a.jsx)("feGaussianBlur", {
                                stdDeviation: "6",
                                in: "shadowOffsetOuter2",
                                result: "shadowBlurOuter2"
                            }), (0, a.jsx)("feColorMatrix", {
                                values: "0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0",
                                type: "matrix",
                                in: "shadowBlurOuter2",
                                result: "shadowMatrixOuter2"
                            }), (0, a.jsxs)("feMerge", {
                                children: [(0, a.jsx)("feMergeNode", {
                                    in: "shadowMatrixOuter1"
                                }), (0, a.jsx)("feMergeNode", {
                                    in: "shadowMatrixOuter2"
                                })]
                            })]
                        })]
                    }), (0, a.jsxs)("g", {
                        id: "pointer-shape",
                        stroke: "none",
                        fill: "none",
                        children: [(0, a.jsx)("use", {
                            fill: "black",
                            fillOpacity: "1",
                            filter: "url(#filter-pointer)",
                            xlinkHref: "#path-pointer"
                        }), (0, a.jsx)("use", {
                            fill: r.UE,
                            fillRule: "evenodd",
                            xlinkHref: "#path-pointer"
                        })]
                    })]
                }),
                QRScanner: e => {
                    let {
                        color: l = r.W5
                    } = e;
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 64 64",
                        fill: "none",
                        children: [(0, a.jsx)("circle", {
                            cx: "32",
                            cy: "32",
                            r: "31",
                            stroke: l,
                            strokeWidth: "2"
                        }), (0, a.jsx)("mask", {
                            id: "mask0",
                            "mask-type": "alpha",
                            maskUnits: "userSpaceOnUse",
                            x: "2",
                            y: "2",
                            width: "60",
                            height: "60",
                            children: (0, a.jsx)("circle", {
                                cx: "32",
                                cy: "32",
                                r: "30",
                                fill: "#C4C4C4"
                            })
                        }), (0, a.jsxs)("g", {
                            mask: "url(#mask0)",
                            children: [(0, a.jsxs)("g", {
                                clipPath: "url(#clip0)",
                                children: [(0, a.jsx)("path", {
                                    d: "M26.88 16H37.12C39.4147 16 41.0747 16.0008 42.3794 16.1092C43.6722 16.2165 44.5264 16.4243 45.2268 16.7881C46.5053 17.4522 47.5478 18.4947 48.2119 19.7732C48.5757 20.4736 48.7835 21.3278 48.8908 22.6206C48.9992 23.9253 49 25.5853 49 27.88V69.2782C49 70.6928 48.9992 71.6926 48.9343 72.4736C48.8705 73.2425 48.7497 73.7093 48.5599 74.0747C48.189 74.7887 47.6069 75.3708 46.8929 75.7417C46.5274 75.9316 46.0607 76.0523 45.2917 76.1162C44.5108 76.181 43.511 76.1818 42.0964 76.1818H21.9036C20.489 76.1818 19.4892 76.181 18.7083 76.1162C17.9393 76.0523 17.4726 75.9316 17.1071 75.7417C16.3931 75.3708 15.811 74.7887 15.4401 74.0747C15.2503 73.7093 15.1295 73.2425 15.0657 72.4736C15.0008 71.6926 15 70.6928 15 69.2782V27.88C15 25.5853 15.0008 23.9253 15.1092 22.6206C15.2165 21.3278 15.4243 20.4736 15.7881 19.7732C16.4522 18.4947 17.4947 17.4522 18.7732 16.7881C19.4736 16.4243 20.3278 16.2165 21.6206 16.1092C22.9253 16.0008 24.5853 16 26.88 16Z",
                                    stroke: l,
                                    strokeWidth: "2"
                                }), (0, a.jsx)("path", {
                                    d: "M24 17H40L38.4858 19.2713C38.1823 19.7266 37.6714 20 37.1242 20H26.8758C26.3286 20 25.8177 19.7266 25.5142 19.2713L24 17Z",
                                    fill: l
                                })]
                            }), (0, a.jsx)("path", {
                                d: "M29 30H25C23.3431 30 22 31.3431 22 33V45M35.5931 30H39C40.6569 30 42 31.3431 42 33V36.4069M42 34.7042V47C42 48.6569 40.6569 50 39 50H35.5931M29 50H25C23.3431 50 22 48.6569 22 47V43",
                                stroke: l,
                                strokeWidth: "2",
                                strokeLinecap: "round"
                            }), (0, a.jsx)("path", {
                                d: "M35 27V53",
                                stroke: l,
                                strokeWidth: "2",
                                strokeLinecap: "round"
                            }), (0, a.jsx)("rect", {
                                x: "25.5",
                                y: "33.5",
                                width: "5",
                                height: "5",
                                stroke: l
                            }), (0, a.jsx)("mask", {
                                id: "path-12-inside-1",
                                fill: "white",
                                children: (0, a.jsx)("rect", {
                                    x: "27",
                                    y: "35",
                                    width: "2",
                                    height: "2",
                                    rx: "0.5"
                                })
                            }), (0, a.jsx)("rect", {
                                x: "27",
                                y: "35",
                                width: "2",
                                height: "2",
                                rx: "0.5",
                                stroke: l,
                                strokeWidth: "2",
                                mask: "url(#path-12-inside-1)"
                            }), (0, a.jsx)("rect", {
                                x: "25.5",
                                y: "41.5",
                                width: "5",
                                height: "5",
                                stroke: l
                            }), (0, a.jsx)("mask", {
                                id: "path-14-inside-2",
                                fill: "white",
                                children: (0, a.jsx)("rect", {
                                    x: "27",
                                    y: "43",
                                    width: "2",
                                    height: "2",
                                    rx: "0.5"
                                })
                            }), (0, a.jsx)("rect", {
                                x: "27",
                                y: "43",
                                width: "2",
                                height: "2",
                                rx: "0.5",
                                stroke: l,
                                strokeWidth: "2",
                                mask: "url(#path-14-inside-2)"
                            })]
                        }), (0, a.jsx)("defs", {
                            children: (0, a.jsx)("clipPath", {
                                id: "clip0",
                                children: (0, a.jsx)("rect", {
                                    x: "14",
                                    y: "15",
                                    width: "36",
                                    height: "62.1818",
                                    fill: "white"
                                })
                            })
                        })]
                    })
                },
                Remove: e => {
                    let {
                        className: l,
                        color: t = "#797C7F",
                        onClick: i
                    } = e;
                    return (0, a.jsx)("svg", {
                        className: l,
                        onClick: i,
                        viewBox: "-1 -1 16 16",
                        children: (0, a.jsx)("path", {
                            fill: t,
                            fillRule: "evenodd",
                            d: "M7 5.586L4.738 3.324c-.315-.315-.822-.31-1.136.003l-.186.186c-.315.315-.317.824-.004 1.137l2.262 2.262-2.35 2.35c-.315.315-.31.822.003 1.136l.186.186c.315.315.824.317 1.137.004L7 8.238l2.35 2.35c.315.315.822.31 1.137-.004l.186-.186c.314-.314.316-.823.003-1.136l-2.35-2.35 2.262-2.262c.315-.315.31-.822-.004-1.137l-.186-.186c-.314-.314-.823-.316-1.136-.003L7 5.586z"
                        })
                    })
                },
                RemoveCircle: e => {
                    let {
                        className: l,
                        color: t = "#797C7F",
                        onClick: i
                    } = e;
                    return (0, a.jsx)("svg", {
                        className: l,
                        onClick: i,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, a.jsx)("g", {
                            id: "wt.x",
                            children: (0, a.jsx)("path", {
                                id: "Subtract",
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM8.53033 7.46967C8.23744 7.17678 7.76256 7.17678 7.46967 7.46967C7.17678 7.76256 7.17678 8.23744 7.46967 8.53033L10.9393 12L7.46967 15.4697C7.17678 15.7626 7.17678 16.2374 7.46967 16.5303C7.76256 16.8232 8.23744 16.8232 8.53033 16.5303L12 13.0607L15.4697 16.5303C15.7626 16.8232 16.2374 16.8232 16.5303 16.5303C16.8232 16.2374 16.8232 15.7626 16.5303 15.4697L13.0607 12L16.5303 8.53033C16.8232 8.23744 16.8232 7.76256 16.5303 7.46967C16.2374 7.17678 15.7626 7.17678 15.4697 7.46967L12 10.9393L8.53033 7.46967Z",
                                fill: t
                            })
                        })
                    })
                },
                Search: e => {
                    let {
                        className: l,
                        color: t = r.Id
                    } = e;
                    return (0, a.jsx)("svg", {
                        className: l,
                        viewBox: "19 18 14 14",
                        children: (0, a.jsx)("path", {
                            d: "M28.198 23.62c0-.984-.35-1.826-1.05-2.526-.7-.7-1.542-1.05-2.527-1.05-.984 0-1.826.35-2.526 1.05-.7.7-1.05 1.542-1.05 2.527 0 .986.35 1.828 1.05 2.528.7.7 1.542 1.05 2.527 1.05.986 0 1.828-.35 2.528-1.05.7-.7 1.05-1.542 1.05-2.527zm4.088 6.644c0 .277-.1.516-.304.718-.202.203-.44.304-.718.304-.288 0-.527-.1-.72-.304l-2.737-2.73c-.953.66-2.015.99-3.186.99-.76 0-1.488-.148-2.183-.443-.694-.297-1.293-.696-1.796-1.2-.502-.502-.9-1.1-1.197-1.795-.295-.695-.443-1.423-.443-2.184 0-.76.148-1.488.443-2.183.296-.694.695-1.293 1.198-1.796.504-.502 1.103-.9 1.797-1.197.695-.295 1.423-.443 2.184-.443.762 0 1.49.148 2.185.443.694.296 1.293.695 1.796 1.198.504.504.903 1.103 1.2 1.797.294.695.442 1.423.442 2.184 0 1.172-.33 2.234-.99 3.187l2.738 2.738c.197.197.296.437.296.72z",
                            fill: t,
                            fillRule: "evenodd"
                        })
                    })
                },
                SearchCircle: e => {
                    let {
                        className: l,
                        color: t = r.W5
                    } = e;
                    return (0, a.jsx)("svg", {
                        className: l,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsx)("path", {
                            fill: t,
                            d: "M15.31 13.8957l1.397 1.3972c.3906.39.3906 1.0232 0 1.414-.3904.3902-1.0236.3902-1.414 0l-1.3973-1.397c-.6937.437-1.5152.69-2.3957.69C9.0147 16 7 13.985 7 11.5S9.0147 7 11.5 7 16 9.0147 16 11.5c0 .8805-.253 1.702-.69 2.3957zM0 12C0 5.3726 5.3726 0 12 0s12 5.3726 12 12-5.3726 12-12 12S0 18.6274 0 12zm22 0c0-5.5228-4.4772-10-10-10S2 6.4772 2 12s4.4772 10 10 10 10-4.4772 10-10zm-10.5 2c1.3807 0 2.5-1.1193 2.5-2.5S12.8807 9 11.5 9 9 10.1193 9 11.5s1.1193 2.5 2.5 2.5z"
                        })
                    })
                },
                Sofort: e => {
                    let {
                        className: l = ""
                    } = e;
                    return (0, a.jsxs)("svg", {
                        className: l,
                        viewBox: "0 0 48 32",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, a.jsx)("defs", {
                            children: (0, a.jsx)("rect", {
                                id: "a",
                                width: "48",
                                height: "32",
                                rx: "2.5"
                            })
                        }), (0, a.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, a.jsxs)("g", {
                                children: [(0, a.jsx)("mask", {
                                    id: "b",
                                    fill: r.UE,
                                    children: (0, a.jsx)("use", {
                                        xlinkHref: "#a"
                                    })
                                }), (0, a.jsx)("g", {
                                    mask: "url(#b)",
                                    fill: "#EB6F93",
                                    children: (0, a.jsx)("path", {
                                        d: "M0 0h48v32H0z"
                                    })
                                })]
                            }), (0, a.jsx)("path", {
                                d: "M14.405 28.604c1.088 0 1.92-.728 1.92-1.8 0-.992-.704-1.424-1.568-1.68-.552-.16-.896-.28-.896-.672 0-.328.24-.584.616-.584.32 0 .56.184.728.464l.904-.568c-.28-.624-.912-.944-1.6-.944-1.088 0-1.776.784-1.776 1.688 0 .72.432 1.28 1.504 1.592.584.168.952.28.952.744 0 .432-.312.704-.768.704-.488 0-.856-.312-1.08-.6l-.752.76c.4.544 1.056.896 1.816.896zm4.398 0c-1.152 0-2.088-.92-2.088-2.04s.936-2.04 2.088-2.04c1.152 0 2.088.92 2.088 2.04s-.936 2.04-2.088 2.04zm0-1.024c.56 0 1-.44 1-1.016a.994.994 0 0 0-1-1.016c-.56 0-1 .44-1 1.016a.994.994 0 0 0 1 1.016zm4.781-3.656V22.9h-.16c-1.328 0-1.976.88-1.976 1.92v3.68h1.088v-1.616c0-.536.416-.92 1.016-.936v-1.04c-.432 0-.776.128-1.016.384v-.416c0-.672.44-.976 1.048-.952zm2.373 4.68c-1.152 0-2.088-.92-2.088-2.04s.936-2.04 2.088-2.04c1.152 0 2.088.92 2.088 2.04s-.936 2.04-2.088 2.04zm0-1.024c.56 0 1-.44 1-1.016a.994.994 0 0 0-1-1.016c-.56 0-1 .44-1 1.016a.994.994 0 0 0 1 1.016zm3.734-2.512v-.44h-1.056V28.5h1.088v-1.768c0-.64.376-1 1.032-1v-1.168c-.496-.016-.848.152-1.064.504zm2.773 1.456v-.944c.24.256.584.384 1.016.384v-1.04c-.592-.016-1.016-.408-1.016-.936v-.608h-1.088v3.2c0 1.04.648 1.92 1.976 1.92h.16v-1.024c-.608.024-1.048-.28-1.048-.952zm2.35 2.04a.73.73 0 0 0 .727-.728.73.73 0 0 0-.728-.728.73.73 0 0 0-.728.728c0 .4.328.728.728.728z",
                                fill: r.UE
                            }), (0, a.jsxs)("g", {
                                fill: r.UE,
                                children: [(0, a.jsx)("path", {
                                    d: "M22.276 14.873a.866.866 0 0 1 .016 1.219l-.066.07a.867.867 0 0 1-1.22.015l-1.92-1.902c-.528-.53-.604-1.185-.268-1.53l.068-.07a.783.783 0 0 1 1.044-.068.346.346 0 0 0 .427-.543 1.475 1.475 0 0 0-1.97.132l-.066.07c-.623.64-.498 1.719.277 2.497l1.925 1.908a1.56 1.56 0 0 0 2.2-.03l.068-.071a1.556 1.556 0 0 0-.03-2.19.346.346 0 0 0-.485.493zM21.127 4.561l.785 6.462a.345.345 0 0 0 .686-.084l-.788-6.481-.008-.042c-.134-.538.2-1.14.645-1.235a.953.953 0 0 1 1.133.747l1.368 5.845a.345.345 0 0 0 .673-.157l-1.366-5.833a1.644 1.644 0 0 0-1.952-1.277c-.837.178-1.388 1.16-1.176 2.055z"
                                }), (0, a.jsx)("path", {
                                    d: "M28.347 12.154l1.554-7.745a1.64 1.64 0 0 0-1.139-1.916 1.714 1.714 0 0 0-2.086 1.215L24.956 9.6a.345.345 0 1 0 .663.193l1.722-5.901c.146-.547.697-.871 1.238-.734.463.138.75.623.646 1.109l-1.555 7.75a.345.345 0 1 0 .677.136zM24.435 19.616c-2.463 0-4.52-1.806-4.52-4.373a.345.345 0 0 0-.69 0c0 2.969 2.384 5.063 5.21 5.063a.345.345 0 1 0 0-.69zM23.216 13.579a.854.854 0 0 1-.34.475l-.073.05a.868.868 0 0 1-1.203-.232l-1.51-2.247c-.412-.625-.358-1.283.038-1.555l.074-.05c.51-.294.941-.07 1.386.576l1.263 1.88a.346.346 0 0 0 .573-.385L22.16 10.21c-.624-.91-1.398-1.31-2.322-.774l-.096.063c-.742.51-.83 1.592-.226 2.509l1.513 2.252a1.56 1.56 0 0 0 2.16.418l.076-.051c.303-.209.52-.513.618-.863a.345.345 0 1 0-.666-.184z"
                                }), (0, a.jsx)("path", {
                                    d: "M25.504 14.722c-.718.4-1.164 1.155-1.22 2.296a.345.345 0 0 0 .69.033c.05-1.033.452-1.59 1.102-1.835a2.347 2.347 0 0 1 1.146-.11c.445.082.58-.578.139-.677l-2.656-.593c-1.244-.34-1.431-.8-1.201-1.566.1-.335.303-.506.611-.574a1.701 1.701 0 0 1 .776.025l4.032.941c.026.005.045.01.078.025.067.03.136.079.204.151.27.289.42.833.344 1.727-.263 3.135-1.725 5.081-5.19 5.051a.345.345 0 1 0-.005.69c3.893.034 5.593-2.23 5.883-5.683.09-1.075-.11-1.811-.528-2.256-.23-.246-.472-.356-.658-.383l-3.987-.93a1.867 1.867 0 0 0-.18-.04 2.364 2.364 0 0 0-.919.008c-.54.12-.948.463-1.123 1.05-.332 1.107.022 1.977 1.696 2.434l.966.216z"
                                })]
                            })]
                        })]
                    })
                },
                Share: e => {
                    let {
                        color: l = r.W5
                    } = e;
                    return (0, a.jsx)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, a.jsx)("path", {
                            d: "M5 14V17C5 18.6569 6.34315 20 8 20H16C17.6569 20 19 18.6569 19 17V14M12 15V4M12 4L7 9M12 4L17 9",
                            stroke: l,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                },
                Time: e => {
                    let {
                        className: l,
                        color: t = r.iO
                    } = e;
                    return (0, a.jsxs)("svg", {
                        className: l,
                        width: "17",
                        height: "16",
                        viewBox: "0 0 17 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, a.jsx)("g", {
                            clipPath: "url(#clip0_6504_966)",
                            children: (0, a.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M8.5 16C4.08172 16 0.5 12.4183 0.5 8C0.5 3.58172 4.08172 0 8.5 0C12.9183 0 16.5 3.58172 16.5 8C16.5 12.4183 12.9183 16 8.5 16ZM7.18294 3.77777V8.00043C7.18318 8.7274 7.7733 9.31683 8.50033 9.31683H11.0921L11.224 9.30316C11.5199 9.24239 11.7425 8.98041 11.7425 8.66644C11.7424 8.35254 11.5199 8.09045 11.224 8.02972L11.0921 8.01703H8.50033C8.49683 8.01703 8.49458 8.01651 8.49349 8.01605C8.49209 8.01545 8.49049 8.01393 8.48868 8.01221L8.48861 8.01215C8.48668 8.01022 8.48536 8.00779 8.4847 8.00629C8.48426 8.00524 8.48377 8.00363 8.48372 8.00043V3.77777C8.48372 3.41879 8.19232 3.12738 7.83333 3.12738C7.47435 3.12738 7.18294 3.41879 7.18294 3.77777Z",
                                fill: t
                            })
                        }), (0, a.jsx)("defs", {
                            children: (0, a.jsx)("clipPath", {
                                id: "clip0_6504_966",
                                children: (0, a.jsx)("rect", {
                                    width: "16",
                                    height: "16",
                                    fill: "white",
                                    transform: "translate(0.5)"
                                })
                            })
                        })]
                    })
                },
                TransferAddMultiple: e => {
                    let {
                        className: l,
                        onClick: t
                    } = e;
                    return (0, a.jsx)("svg", {
                        className: l,
                        onClick: t,
                        viewBox: "0 0 24 25",
                        children: (0, a.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, a.jsx)("ellipse", {
                                cx: "12",
                                cy: "12",
                                fill: r.$A,
                                rx: "12",
                                ry: "12"
                            }), (0, a.jsx)("path", {
                                fill: r.UE,
                                d: "M11 11H7.995c-.54 0-.995.448-.995 1 0 .556.446 1 .995 1H11v3.005c0 .54.448.995 1 .995.556 0 1-.446 1-.995V13h3.005c.54 0 .995-.448.995-1 0-.556-.446-1-.995-1H13V7.995c0-.54-.448-.995-1-.995-.556 0-1 .446-1 .995V11z"
                            })]
                        })
                    })
                },
                TransferBack: e => {
                    let {
                        className: l,
                        onClick: t,
                        onKeyDown: i,
                        label: n,
                        buttonType: s
                    } = e;
                    return (0, a.jsx)("button", {
                        onClick: t,
                        onKeyDown: i,
                        className: l,
                        "aria-label": n,
                        type: s,
                        children: (0, a.jsx)("svg", {
                            viewBox: "0 0 32 32",
                            focusable: "false",
                            children: (0, a.jsxs)("g", {
                                fill: "none",
                                fillRule: "evenodd",
                                children: [(0, a.jsx)("rect", {
                                    width: "100%",
                                    height: "100%",
                                    fill: r._5,
                                    rx: "50%"
                                }), (0, a.jsx)("path", {
                                    fill: r.Id,
                                    d: "M18.885 10.814l-1.57-1.57-7.072 7.07 7.07 7.07 1.572-1.57-5.5-5.5 5.5-5.5z"
                                })]
                            })
                        })
                    })
                },
                TransferComplete: e => {
                    let {
                        className: l
                    } = e;
                    return (0, a.jsxs)("svg", {
                        className: l,
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100",
                        height: "100",
                        viewBox: "0 0 100 100",
                        fill: r.vA,
                        children: [(0, a.jsx)("path", {
                            d: "M14.645 14.645C34.1712 -4.88124 65.8288 -4.8812 85.355 14.645C104.881 34.1712 104.881 65.8287 85.355 85.3549C65.8288 104.881 34.1712 104.881 14.645 85.3549C-4.88114 65.8287 -4.88118 34.1712 14.645 14.645ZM81.1958 18.8041C63.9668 1.57518 36.0332 1.57514 18.8042 18.8041C1.5752 36.0331 1.57524 63.9667 18.8042 81.1957C36.0332 98.4248 63.9668 98.4248 81.1958 81.1957C98.4248 63.9667 98.4248 36.0331 81.1958 18.8041Z",
                            fill: r.vA
                        }), (0, a.jsx)("path", {
                            d: "M33.43 53.9321L44.5213 64.8454C46.1186 66.4171 48.7481 66.169 50.0229 64.3263L67.0062 39.7767C68.1399 38.1379 67.7296 35.891 66.0898 34.7581C64.45 33.6251 62.2017 34.0352 61.068 35.6739L44.0847 60.2235L49.5862 59.7045L38.495 48.7911C37.0744 47.3934 34.789 47.4111 33.3904 48.8308C31.9917 50.2504 32.0095 52.5343 33.43 53.9321Z",
                            fill: r.vA
                        })]
                    })
                },
                TransferDownloadErrorX: e => {
                    let {
                        className: l,
                        color: t = r.s3
                    } = e;
                    return (0, a.jsxs)("svg", {
                        className: l,
                        width: "101",
                        height: "101",
                        viewBox: "0 0 101 101",
                        fill: t,
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, a.jsx)("path", {
                            d: "M14.6445 15.3643C34.1708 -4.04068 65.8292 -4.04068 85.3555 15.3643C104.882 34.7693 104.882 66.2308 85.3555 85.6358C65.8292 105.041 34.1708 105.041 14.6445 85.6358C-4.88157 66.2309 -4.88154 34.7693 14.6445 15.3643ZM81.1963 19.4981C63.9672 2.37605 36.0328 2.37605 18.8037 19.4981C1.57513 36.6201 1.5751 64.3801 18.8037 81.502C36.0328 98.6241 63.9672 98.6241 81.1963 81.502C98.4251 64.38 98.4251 36.6201 81.1963 19.4981Z",
                            fill: t
                        }), (0, a.jsx)("path", {
                            d: "M39.2649 39.1763L50.5884 50.4998M61.912 61.8233L50.5884 50.4998M50.5884 50.4998L61.912 39.1763L39.2649 61.8233",
                            stroke: t,
                            strokeWidth: "7.05882",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })]
                    })
                },
                TransferDownloadErrorExclamation: e => {
                    let {
                        className: l,
                        color: t = r.s3
                    } = e;
                    return (0, a.jsxs)("svg", {
                        className: l,
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "101",
                        height: "101",
                        viewBox: "0 0 101 101",
                        fill: t,
                        children: [(0, a.jsx)("path", {
                            d: "M14.7363 15.145C34.3846 -4.38126 66.2404 -4.38126 85.8887 15.145C105.537 34.6711 105.537 66.3287 85.8887 85.8549C66.2404 105.381 34.3846 105.381 14.7363 85.8549C-4.91179 66.3287 -4.91183 34.6711 14.7363 15.145ZM81.7031 19.3041C64.3665 2.07525 36.2586 2.07528 18.9219 19.3041C1.58518 36.5331 1.58518 64.4667 18.9219 81.6957C36.2586 98.9247 64.3665 98.9247 81.7031 81.6957C99.0398 64.4667 99.0398 36.5331 81.7031 19.3041Z",
                            fill: t
                        }), (0, a.jsx)("path", {
                            d: "M44.6078 29.8438C44.4459 26.7677 46.9105 24.2267 49.9909 24.2267C53.0725 24.2267 55.5402 26.773 55.3906 29.8511C55.2085 33.5994 54.9079 38.635 54.4539 43.0779C53.8628 48.8623 52.9428 54.3762 52.4305 57.2329C52.219 58.412 51.1902 59.2577 49.9923 59.2577C48.8 59.2577 47.7761 58.4219 47.5667 57.2482C47.0897 54.5742 46.252 49.4358 45.6023 43.0779C45.1079 38.2402 44.7952 33.4057 44.6078 29.8438Z",
                            fill: t
                        }), (0, a.jsx)("path", {
                            d: "M50 74.7523C52.9738 74.7523 55.3846 72.3394 55.3846 69.3629C55.3846 66.3864 52.9738 63.9735 50 63.9735C47.0261 63.9735 44.6154 66.3864 44.6154 69.3629C44.6154 72.3394 47.0261 74.7523 50 74.7523Z",
                            fill: t
                        })]
                    })
                },
                TransferDownloadErrorNetwork: e => {
                    let {
                        className: l,
                        color: t = r.s3
                    } = e;
                    return (0, a.jsxs)("svg", {
                        className: l,
                        width: "100",
                        height: "100",
                        viewBox: "0 0 100 100",
                        fill: t,
                        xmlns: "http://www.w3.org/2000/svg",
                        fillRule: "evenodd",
                        children: [(0, a.jsx)("circle", {
                            cx: "50",
                            cy: "50",
                            r: "46.5",
                            stroke: t,
                            strokeWidth: "7",
                            fill: "none"
                        }), (0, a.jsx)("path", {
                            d: "M26.5 38C40.8 27.7 59.2 27.7 73.5 38",
                            stroke: t,
                            strokeWidth: "5.3",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            fill: "none"
                        }), (0, a.jsx)("path", {
                            d: "M33.7 47.9C43.2 40.8 56.8 40.8 66.3 47.9",
                            stroke: t,
                            strokeWidth: "5.3",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            fill: "none"
                        }), (0, a.jsx)("path", {
                            d: "M41.9 56.2C47.3 52.9 53.3 52.9 58.6 56.2",
                            stroke: t,
                            strokeWidth: "5.3",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            fill: "none"
                        }), (0, a.jsx)("circle", {
                            cx: "50",
                            cy: "65",
                            r: "2.5",
                            fill: t
                        }), (0, a.jsx)("path", {
                            d: "M62.5 72.5L67.5 67.5M67.5 67.5L72.5 62.5M67.5 67.5L62.5 62.5M67.5 67.5L72.5 72.5",
                            stroke: t,
                            strokeWidth: "5.3",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            fill: "none"
                        })]
                    })
                },
                TransferError: e => {
                    let {
                        circle: l = !0,
                        className: t,
                        color: i = r.vA
                    } = e;
                    return (0, a.jsx)("svg", {
                        className: t,
                        viewBox: "55 42 171 171",
                        children: (0, a.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [l ? (0, a.jsx)("path", {
                                fill: i,
                                d: "M200.104 66.896c33.195 33.194 33.195 87.014 0 120.208-33.194 33.195-87.014 33.195-120.208 0-33.195-33.194-33.195-87.014 0-120.208 33.194-33.195 87.014-33.195 120.208 0zm-7.07 7.07c29.288 29.29 29.288 76.778 0 106.067-29.29 29.29-76.778 29.29-106.067 0-29.29-29.29-29.29-76.777 0-106.066 29.29-29.29 76.777-29.29 106.066 0z"
                            }) : null, (0, a.jsx)("path", {
                                fill: i,
                                d: "M136.75 141.407h7.432l3.315-29.634V92.887h-14.164v18.886l3.416 29.634zM133.734 162h13.36v-13.26h-13.36V162z"
                            })]
                        })
                    })
                },
                TransferNext: e => {
                    let {
                        className: l,
                        onClick: t
                    } = e;
                    return (0, a.jsx)("svg", {
                        className: l,
                        viewBox: "0 0 32 32",
                        onClick: t,
                        children: (0, a.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, a.jsx)("rect", {
                                width: "100%",
                                height: "100%",
                                fill: r._5,
                                rx: "50%"
                            }), (0, a.jsx)("path", {
                                fill: r.Id,
                                d: "M18.885 10.814l-1.57-1.57-7.072 7.07 7.07 7.07 1.572-1.57-5.5-5.5 5.5-5.5z"
                            })]
                        })
                    })
                },
                TransferPlus: e => {
                    let {
                        color: l = r.UE,
                        backgroundColor: t = r.O1
                    } = e;
                    return (0, a.jsxs)("svg", {
                        className: "transfer__option-plus",
                        viewBox: "0 1 32 13",
                        children: [(0, a.jsx)("rect", {
                            width: "32",
                            height: "13",
                            y: "1",
                            fill: t,
                            fillRule: "evenodd",
                            rx: "6.5"
                        }), (0, a.jsx)("path", {
                            fill: l,
                            fillRule: "evenodd",
                            d: "M8 10.232V4.598h2.424c1.343 0 2.088.762 2.088 1.86 0 1.113-.745 1.932-2.088 1.932H9.097v1.842H8zm2.326-4.75H9.097v2.023h1.229c.712 0 1.072-.434 1.072-1.032 0-.59-.36-.99-1.072-.99zm3.201 4.75V4.598h2.416c1.351 0 2.08.655 2.08 1.753 0 .802-.41 1.433-1.188 1.703l1.4 2.178H17.04l-1.294-2.047h-1.121v2.047h-1.098zm2.367-4.75h-1.27v1.843h1.27c.671 0 1.015-.41 1.015-.966 0-.54-.36-.876-1.015-.876zm2.866 1.933c0-1.679 1.13-2.915 2.874-2.915 1.711 0 2.866 1.236 2.866 2.915s-1.155 2.915-2.866 2.915c-1.744 0-2.874-1.236-2.874-2.915zm1.13 0c0 1.147.696 1.974 1.744 1.974 1.04 0 1.736-.836 1.736-1.974s-.696-1.973-1.736-1.973c-1.048 0-1.744.827-1.744 1.973z"
                        })]
                    })
                },
                TransferProcessing: e => {
                    let {
                        className: l
                    } = e;
                    return (0, a.jsx)("svg", {
                        className: l,
                        viewBox: "0 0 171 171",
                        children: (0, a.jsxs)("g", {
                            fill: r.vA,
                            fillRule: "evenodd",
                            children: [(0, a.jsx)("circle", {
                                cx: "55",
                                cy: "85",
                                r: "8"
                            }), (0, a.jsx)("circle", {
                                cx: "85",
                                cy: "85",
                                r: "8"
                            }), (0, a.jsx)("circle", {
                                cx: "115",
                                cy: "85",
                                r: "8"
                            })]
                        })
                    })
                },
                TransferReady: e => {
                    let {
                        className: l
                    } = e;
                    return (0, a.jsxs)("svg", {
                        className: l,
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100",
                        height: "100",
                        viewBox: "0 0 100 100",
                        fill: r.vA,
                        fillRule: "evenodd",
                        children: [(0, a.jsx)("path", {
                            d: "M85.8553 85.3553C105.382 65.8291 105.382 34.1709 85.8553 14.6447C66.3291 -4.88155 34.6709 -4.88155 15.1447 14.6447C-4.38155 34.1709 -4.38155 65.8291 15.1447 85.3553C34.6709 104.882 66.3291 104.882 85.8553 85.3553ZM81.6958 81.1961C98.9248 63.9671 98.9248 36.0333 81.6958 18.8043C64.4668 1.57531 36.533 1.57531 19.304 18.8043C2.07501 36.0333 2.07501 63.9671 19.304 81.1961C36.533 98.4251 64.4668 98.4251 81.6958 81.1961Z",
                            fill: r.vA
                        }), (0, a.jsx)("path", {
                            d: "M48.7355 34.7065C48.7355 33.407 49.7889 32.3535 51.0884 32.3535C52.3879 32.3535 53.4414 33.407 53.4414 34.7065V59.2855L62.827 49.8999C63.7459 48.981 65.2357 48.981 66.1546 49.8999C67.0734 50.8187 67.0734 52.3085 66.1546 53.2274L52.8443 66.5377C52.3572 67.0248 51.7097 67.2537 51.0718 67.2243C50.4333 67.2541 49.7851 67.0253 49.2976 66.5377L35.9873 53.2275C35.0684 52.3086 35.0684 50.8188 35.9873 49.8999C36.9062 48.9811 38.396 48.9811 39.3149 49.8999L48.7355 59.3205V34.7065Z",
                            fill: r.vA
                        })]
                    })
                },
                Twitter: e => {
                    let {
                        width: l = 20
                    } = e;
                    return (0, a.jsx)("svg", {
                        width: l,
                        height: l,
                        viewBox: "262 24 17 14",
                        children: (0, a.jsx)("path", {
                            d: "M277.972039,24.25 C277.309208,24.625002 276.592932,24.885416 275.823191,25.03125 C275.160359,24.343746 274.337176,24 273.353618,24 C272.434206,24 271.643095,24.322914 270.980263,24.96875 C270.317431,25.614586 269.98602,26.385412 269.98602,27.28125 C269.98602,27.531252 270.018092,27.781248 270.082237,28.03125 C268.713809,27.96875 267.425581,27.63542 266.217515,27.03125 C265.009451,26.42708 263.988491,25.614588 263.154605,24.59375 C262.83388,25.093752 262.67352,25.64583 262.67352,26.25 C262.67352,27.416672 263.175982,28.322914 264.180921,28.96875 C263.646379,28.96875 263.143917,28.833334 262.67352,28.5625 L262.67352,28.625 C262.67352,29.395838 262.924751,30.08333 263.42722,30.6875 C263.92969,31.29167 264.576475,31.677082 265.367599,31.84375 C265.068255,31.90625 264.768916,31.9375 264.469572,31.9375 C264.255756,31.9375 264.041941,31.916666 263.828125,31.875 C264.063324,32.54167 264.464223,33.08854 265.03084,33.515624 C265.597454,33.94271 266.244241,34.15625 266.971217,34.15625 C265.752461,35.0937546 264.362671,35.5625 262.801809,35.5625 C262.545229,35.5625 262.277962,35.5520834 262,35.53125 C263.582245,36.5104216 265.303444,37 267.163651,37 C268.660369,37 270.028776,36.7187528 271.268914,36.15625 C272.509053,35.5937472 273.519321,34.85938 274.299752,33.953124 C275.080185,33.04687 275.684209,32.04688 276.111842,30.953124 C276.539475,29.85937 276.753289,28.760422 276.753289,27.65625 L276.753289,27.25 C277.416121,26.77083 277.972037,26.19792 278.421053,25.53125 C277.800983,25.802084 277.159542,25.979166 276.496711,26.0625 C277.223687,25.624998 277.715458,25.020838 277.972039,24.25 L277.972039,24.25 Z",
                            stroke: "none",
                            fill: r.Id,
                            fillRule: "evenodd"
                        })
                    })
                },
                Unlock: p.A,
                UpgradeLock: () => (0, a.jsxs)("svg", {
                    className: "transfer__option-lock",
                    width: "29",
                    height: "29",
                    viewBox: "0 0 29 29",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, a.jsx)("rect", {
                        x: "0.5",
                        y: "0.5",
                        width: "28",
                        height: "28",
                        rx: "14",
                        fill: "#FCB315"
                    }), (0, a.jsxs)("g", {
                        clipPath: "url(#clip0_4415_69268)",
                        children: [(0, a.jsx)("path", {
                            d: "M18.3095 13.1665H10.6905C9.84892 13.1665 9.16669 13.8629 9.16669 14.7221V19.3887C9.16669 21.1069 10.5312 22.4998 12.2143 22.4998H16.7857C18.4689 22.4998 19.8334 21.1069 19.8334 19.3887V14.7221C19.8334 13.8629 19.1511 13.1665 18.3095 13.1665Z",
                            fill: "white"
                        }), (0, a.jsx)("path", {
                            d: "M11.0833 13.8335C11.0833 14.2477 11.4191 14.5835 11.8333 14.5835C12.2475 14.5835 12.5833 14.2477 12.5833 13.8335H11.0833ZM16.4166 13.8335C16.4166 14.2477 16.7524 14.5835 17.1666 14.5835C17.5809 14.5835 17.9166 14.2477 17.9166 13.8335H16.4166ZM12.5833 13.8335V10.5002H11.0833V13.8335H12.5833ZM16.4166 10.5002V13.8335H17.9166V10.5002H16.4166ZM14.5 8.5835C15.5585 8.5835 16.4166 9.44162 16.4166 10.5002H17.9166C17.9166 8.61319 16.387 7.0835 14.5 7.0835V8.5835ZM14.5 7.0835C12.613 7.0835 11.0833 8.61319 11.0833 10.5002H12.5833C12.5833 9.44162 13.4414 8.5835 14.5 8.5835V7.0835Z",
                            fill: "white"
                        })]
                    }), (0, a.jsx)("defs", {
                        children: (0, a.jsx)("clipPath", {
                            id: "clip0_4415_69268",
                            children: (0, a.jsx)("rect", {
                                width: "16",
                                height: "16",
                                fill: "white",
                                transform: "translate(6.5 6.5)"
                            })
                        })
                    })]
                }),
                Valid: g.A,
                Video: e => {
                    let {
                        className: l,
                        color: t
                    } = e;
                    return (0, a.jsx)("svg", {
                        className: l,
                        viewBox: "0 0 21 14",
                        children: (0, a.jsx)("path", {
                            d: "M3 0h9a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm7.48 7.868l-3.984 2.277A1 1 0 0 1 5 9.277V4.723a1 1 0 0 1 1.496-.868l3.985 2.277a1 1 0 0 1 0 1.736zM16 9.578l.045-5.137 3.643-2.256s1.298-.732 1.312.718l-.067 8.25s-.046 1.376-1.395.62L16 9.578z",
                            fill: t,
                            fillRule: "evenodd"
                        })
                    })
                },
                Visa: e => {
                    let {
                        className: l = "",
                        active: t = !0
                    } = e;
                    return (0, a.jsxs)("svg", {
                        className: l,
                        viewBox: "0 0 30 10",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, a.jsx)("defs", {
                            children: (0, a.jsxs)("linearGradient", {
                                x1: "49.5802%",
                                y1: "-2.0062%",
                                x2: "50.5086%",
                                y2: "100%",
                                id: "visa-a",
                                children: [(0, a.jsx)("stop", {
                                    stopColor: "#222357",
                                    offset: "0%"
                                }), (0, a.jsx)("stop", {
                                    stopColor: "#254AA5",
                                    offset: "100%"
                                })]
                            })
                        }), (0, a.jsx)("path", {
                            d: "M15.5153 6.5906c-.0171-1.3495 1.2026-2.1026 2.1215-2.5503.944-.4594 1.2612-.754 1.2576-1.1648-.0072-.6288-.7531-.9062-1.4513-.917-1.218-.019-1.926.3288-2.489.5918l-.4388-2.053C15.0802.2369 16.1261.0099 17.2107 0c2.5458 0 4.2114 1.2567 4.2204 3.2052.01 2.4728-3.4205 2.6098-3.397 3.7151.008.3351.3279.6928 1.0287.7837.3468.046 1.3044.0811 2.39-.4189l.426 1.9864c-.5837.2126-1.334.4162-2.2683.4162-2.3962 0-4.0817-1.2738-4.0952-3.0971m10.458 2.926c-.465 0-.8568-.2712-1.0316-.6874L21.305.1459h2.544l.5063 1.399h3.1088l.2937-1.399H30l-1.9566 9.3706h-2.0702m.3558-2.5313l.7342-3.5187h-2.0107l1.2765 3.5187M12.4308 9.5165L10.4255.146h2.4242l2.0044 9.3706h-2.4233m-3.5863 0l-2.5233-6.378-1.0206 5.4231c-.1198.6054-.5928.955-1.118.955H.0576L0 9.2444c.8468-.1838 1.8089-.4802 2.3917-.7973.3568-.1936.4586-.363.5757-.8233L4.9006.1459h2.562l3.9277 9.3706H8.8445",
                            transform: "matrix(1 0 0 -1 0 9.6877)",
                            fill: "url(#visa-a)",
                            fillRule: "nonzero",
                            opacity: t ? "1" : ".25"
                        })]
                    })
                },
                Youtube: e => {
                    let {
                        width: l = 20
                    } = e;
                    return (0, a.jsx)("svg", {
                        width: l,
                        height: l,
                        viewBox: "0 0 24 17",
                        children: (0, a.jsx)("path", {
                            d: "M23.723 3.665S23.49 2 22.771 1.267C21.86.305 20.838.3 20.37.244 17.016 0 11.986 0 11.986 0h-.01s-5.03 0-8.384.244c-.467.056-1.49.061-2.4 1.023C.474 2 .239 3.665.239 3.665S0 5.618 0 7.573v1.833c0 1.955.24 3.908.24 3.908s.234 1.664.952 2.397c.912.963 2.109.932 2.641 1.034 1.917.184 8.148.243 8.148.243s5.035-.007 8.39-.253c.469-.057 1.49-.061 2.4-1.024.718-.733.952-2.397.952-2.397s.24-1.955.24-3.908V7.573c0-1.955-.24-3.908-.24-3.908zm-14.217 7.96V4.84l6.475 3.405-6.475 3.38z",
                            fillRule: "evenodd",
                            fill: r.Id
                        })
                    })
                },
                Zap: e => {
                    let {
                        className: l
                    } = e;
                    return (0, a.jsx)("svg", {
                        className: l,
                        width: "24",
                        height: "25",
                        viewBox: "0 0 24 25",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.8476 22.169C11.5693 22.5741 10.9348 22.3767 10.9354 21.8852L10.9448 14.7H4.01825C3.6029 14.7 3.36864 14.2229 3.6226 13.8943L12.3044 2.65907C12.5959 2.28173 13.2 2.48792 13.2 2.96479V10.3H19.05C19.4525 10.3 19.69 10.7513 19.4621 11.0831L11.8476 22.169Z",
                            fill: r.UE
                        })
                    })
                }
            };
            class y extends t.g.Error {
                constructor(e) {
                    super("Invalid icon type: ".concat(e)), this.iconType = e
                }
            }
            let x = e => {
                let {
                    type: l,
                    ...t
                } = e;
                if (void 0 === h[l]) throw new y(l);
                let i = h[l];
                return (0, a.jsx)(i, {
                    ...t
                })
            }
        },
        44765: (e, l, t) => {
            "use strict";
            t.d(l, {
                W: () => C
            });
            var a = t(93866),
                i = t(21462),
                r = t(38169),
                n = t(87412),
                s = t(85388),
                d = t(57222),
                o = t(58524),
                _ = t(75181),
                c = t(87983),
                u = t(26232),
                w = t(15913),
                m = t(95467),
                p = t(96644),
                g = t(37828),
                h = t(14974),
                y = t(22352),
                x = t(87963);
            let f = {
                modalDisplayed(e) {
                    let {
                        currentTier: l,
                        upgradeTo: t,
                        trigger: a
                    } = e;
                    return {
                        kind: "upgrade_popup_displayed",
                        info: {
                            ...l && {
                                currentTier: l
                            },
                            upgradeTo: t,
                            ...a && {
                                trigger: a
                            }
                        }
                    }
                },
                modalDismissed(e) {
                    let {
                        currentTier: l,
                        upgradeTo: t
                    } = e;
                    return {
                        kind: "upgrade_popup_dismissed",
                        info: {
                            ...l && {
                                currentTier: l
                            },
                            ...t && {
                                upgradeTo: t
                            }
                        }
                    }
                },
                purchaseButtonClicked(e) {
                    let {
                        currentTier: l,
                        upgradeTo: t
                    } = e;
                    return {
                        kind: "upgrade_popup_purchase_button_clicked",
                        info: {
                            ...l && {
                                currentTier: l
                            },
                            ...t && {
                                upgradeTo: t
                            }
                        }
                    }
                },
                userUpgraded(e) {
                    let {
                        previousTier: l,
                        upgradedTo: t,
                        seats: a
                    } = e;
                    return {
                        kind: "user_upgraded",
                        info: {
                            ...l && {
                                previousTier: l
                            },
                            ...t && {
                                upgradedTo: t
                            },
                            ...a && {
                                seats: a
                            }
                        }
                    }
                }
            };
            var v = t(89187),
                b = t(7012),
                L = t(62373),
                E = t(84530),
                S = t(86781);
            let C = () => {
                let e = (0, r.d4)(S.mB),
                    l = (0, r.d4)(S.R2),
                    [t] = (0, y.Kf)(),
                    C = (() => {
                        let e = (0, r.wA)(),
                            {
                                currentTeam: l
                            } = (0, w.o)(),
                            [t] = (0, u.ry)();
                        return (0, i.useCallback)(async a => {
                            if (!l) return !1;
                            try {
                                return await t({
                                    teamId: l.id,
                                    priceAndPackageToken: a
                                }).unwrap(), await e(m.default.getUser()), !0
                            } catch (l) {
                                return e(p.P9.setPanelNotification({
                                    category: p.aF.Error,
                                    details: "something_went_wrong"
                                })), !1
                            }
                        }, [t, l, e])
                    })(),
                    A = (0, h.l)(),
                    P = (0, n.l)(),
                    T = (0, r.d4)(S.eB),
                    {
                        subscription: k
                    } = (0, g.f)(),
                    R = (0, v.m4)(null == k ? void 0 : k.interval),
                    I = (0, r.d4)(s.yW),
                    {
                        getPlanByTierAndInterval: j
                    } = (0, c.d)(),
                    [M, O] = (0, i.useState)(null),
                    [N, F] = (0, i.useState)(null),
                    [U, D] = (0, i.useState)(!1),
                    [z, W] = (0, i.useState)(!1),
                    [B, H] = (0, i.useState)(!1),
                    V = (0, i.useMemo)(() => {
                        var e;
                        if (!z || !M || !N) return null;
                        let l = j(M, N);
                        return null == l || null == (e = l.price) ? void 0 : e.priceAndPackageToken
                    }, [z, M, N, j]),
                    Z = (null == k ? void 0 : k.endsAt) && (0, a.A)(new Date(k.endsAt)),
                    q = !!(null == k ? void 0 : k.cancelAtPeriodEnd) && !Z,
                    G = (0, i.useCallback)(() => {
                        (0, x.Od)().trackUserAction(f.modalDismissed({
                            currentTier: l,
                            upgradeTo: M
                        })), W(!1), O(null)
                    }, [l, M, W]),
                    K = (0, i.useMemo)(() => {
                        if (!M) return null;
                        switch (M) {
                            case v.js.LITE:
                                return E.A.t("tiers_2024.lite");
                            case v.js.TRANSFER:
                                return E.A.t("tiers_2024.transfer");
                            case v.js.COLLABORATE:
                                return E.A.t("tiers_2024.collaborate");
                            case v.js.DISTRIBUTE:
                                return E.A.t("tiers_2024.distribute");
                            case v.js.PREMIUM_2022:
                                return E.A.t("page.pricing_panel.plans.premium.title");
                            default:
                                return (0, v.Is)(M)
                        }
                    }, [M]),
                    Y = (0, i.useMemo)(() => {
                        var e, l, t, a;
                        if (!M) return;
                        let i = null == (l = j(M, v.CS.MONTHLY)) || null == (e = l.price) ? void 0 : e.totalBeforeDiscountInCents,
                            r = null == (a = j(M, v.CS.YEARLY)) || null == (t = a.price) ? void 0 : t.totalBeforeDiscountInCents;
                        if (i && r) return Math.round(100 - r / (12 * i) * 100)
                    }, [M, j]),
                    J = (0, i.useMemo)(() => {
                        var e, l;
                        if (!M) return;
                        let t = null == (l = j(M, v.CS.MONTHLY)) || null == (e = l.price) ? void 0 : e.totalAmountInCents;
                        if (t) return M === v.js.ENTERPRISE ? 12 * t * I : 12 * t
                    }, [M, j, I]),
                    X = (0, i.useCallback)(e => q && l === e && R === N, [q, l, R, N]),
                    Q = (0, i.useCallback)(function(t, a) {
                        let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        if ((0, b.to)(e)) return;
                        t === v.js.PLUS && (t = v.js.PRO_2022);
                        let r = (0, v.m4)(a);
                        return O(t), F(r), H(i), (0, x.Od)().trackUserAction(f.modalDisplayed({
                            currentTier: l,
                            upgradeTo: t
                        })), W(!0)
                    }, [e, l]);
                return {
                    showUpgradeSubscriptionModal: Q,
                    showMonthlyToYearlyUpgradeModal: (0, i.useCallback)((t, a) => {
                        if (!(0, b.to)(e) && (R !== v.CS.YEARLY || a !== v.CS.MONTHLY)) return O(t), F(a), (0, x.Od)().trackUserAction(f.modalDisplayed({
                            currentTier: l,
                            upgradeTo: t
                        })), W(!0)
                    }, [e, R, l]),
                    confirmPlanSwitchOrReactivate: (0, i.useCallback)(async () => {
                        let a;
                        if ((0, x.Od)().trackUserAction(f.purchaseButtonClicked({
                                currentTier: l,
                                upgradeTo: M
                            })), V) {
                            if (D(!0), q && R === N && M === e.planTier ? (await P(), (0, x.Od)().trackUserAction(d.C.subscriptionReactivated({
                                    tier: l,
                                    trigger: o.P.SETTINGS_MODAL
                                }))) : (L.A.trackSnowplowEvent({
                                    category: "pricing_page_2024",
                                    action: "click_upgrade_to_".concat(M, "_monthly_to_yearly")
                                }), a = B ? await C(V) : await A({
                                    priceAndPackageToken: V,
                                    newQuantity: I
                                })), a && !B) try {
                                let e = {
                                    teamId: null != T ? T : "",
                                    minimumCommitmentSeats: _.K
                                };
                                await t(e).unwrap()
                            } catch (e) {
                                console.error("Failed to set minimum commitment seats:", e)
                            }
                            D(!1), G(), a && ((0, x.Od)().trackUserAction(f.userUpgraded({
                                previousTier: l,
                                upgradedTo: M,
                                seats: I
                            })), window.location.assign("/workspace/payment"))
                        }
                    }, [N, G, R, l, C, I, B, q, V, P, M, t, T, A, e.planTier]),
                    closeUpgradeSubscriptionModal: G,
                    selectedTierName: K,
                    selectedTier: M,
                    selectedBillingInterval: N,
                    isSwitchInProgress: U,
                    isModalVisible: z,
                    isPendingDowngrade: q,
                    isReactivatingPlan: X,
                    yearlySavingsPercentage: Y,
                    monthlyTotalCostCents: J,
                    isDowngrade: B
                }
            }
        },
        45781: (e, l, t) => {
            "use strict";
            t.d(l, {
                A: () => o
            });
            var a = t(23798),
                i = t(46001),
                r = t.n(i);
            t(21462);
            var n = t(37717),
                s = t.n(n),
                d = t(61360);
            let o = e => {
                let {
                    showModal: l,
                    onClose: t,
                    className: i,
                    contentHeight: n,
                    children: o
                } = e;
                return (0, a.jsx)(s(), {
                    isOpen: l,
                    closeTimeoutMS: 200,
                    overlayClassName: {
                        base: "Modal__overlay",
                        afterOpen: "Modal__overlay--after-open",
                        beforeClose: "Modal__overlay--before-close"
                    },
                    style: {
                        overlay: {
                            zIndex: 49
                        },
                        content: {
                            height: n
                        }
                    },
                    htmlOpenClassName: "Modal__html--open",
                    bodyOpenClassName: "Modal__body--open",
                    className: r()("Modal", i),
                    shouldCloseOnEsc: !1,
                    shouldCloseOnOverlayClick: !0,
                    onRequestClose: t,
                    appElement: (0, d.Y)(),
                    children: o
                })
            }
        },
        45817: (e, l, t) => {
            "use strict";
            t.d(l, {
                AK: () => n,
                aO: () => d,
                tS: () => r,
                wj: () => s
            });
            var a = t(98876),
                i = t(88848),
                r = function(e) {
                    return e.TOP_RIGHT_X = "top_right_x", e.TOP_LEFT_X = "top_left_x", e.SECONDARY_CTA = "secondary_cta", e.CLICK_OUTSIDE = "click_outside", e.AUTO_DISMISS = "auto_dismiss", e
                }({}),
                n = function(e) {
                    return e.PAYWALL_DISPLAYED = "paywall_displayed", e.PAYWALL_DISMISSED = "paywall_dismissed", e.PURCHASE_BUTTON_TAPPED = "paywall_purchase_button_tapped", e.PERIODICITY_CHANGED = "paywall_periodicity_changed", e.CHECKBOX_TOGGLED = "paywall_checkbox_toggled", e.PAYWALL_MOVED_TO_BACKGROUND = "paywall_moved_to_background", e.PAYWALL_MOVED_TO_FOREGROUND = "paywall_moved_to_foreground", e.UPLOAD_COMPLETION_UPSELL_CLICKED = "upload_completion_upsell_clicked", e
                }({});
            let s = {
                paywallDisplayed(e) {
                    let {
                        trigger: l,
                        type: t,
                        webpage: i,
                        isBlockingUpload: r
                    } = e, n = (0, a.v)();
                    return {
                        kind: "paywall_displayed",
                        info: {
                            paywallType: t,
                            paywallTrigger: d(l),
                            ...i ? {
                                webpage: i
                            } : {},
                            ...n && {
                                email_type_origin: n
                            },
                            ...void 0 !== r ? {
                                isBlockingUpload: r
                            } : {}
                        }
                    }
                },
                paywallDismissed(e) {
                    let {
                        dismissMethod: l,
                        trigger: t,
                        type: a,
                        webpage: i
                    } = e;
                    return {
                        kind: "paywall_dismissed",
                        info: {
                            dismissMethod: l,
                            paywallTrigger: d(t),
                            ...a ? {
                                paywallType: a
                            } : {},
                            ...i ? {
                                webpage: i
                            } : {}
                        }
                    }
                },
                paywallPurchaseButtonTapped(e) {
                    let {
                        trigger: l,
                        type: t,
                        webpage: a
                    } = e;
                    return {
                        kind: "paywall_purchase_button_tapped",
                        info: {
                            paywallTrigger: d(l),
                            paywallType: t,
                            ...a ? {
                                webpage: a
                            } : {}
                        }
                    }
                },
                periodicityChanged(e) {
                    let {
                        changedFrom: l,
                        changedTo: t,
                        paywallType: a
                    } = e;
                    return {
                        kind: "paywall_periodicity_changed",
                        info: {
                            changedFrom: l,
                            changedTo: t,
                            paywallType: a
                        }
                    }
                },
                checkboxToggled(e) {
                    let {
                        changedTo: l,
                        paywallType: t
                    } = e;
                    return {
                        kind: "paywall_checkbox_toggled",
                        info: {
                            changedTo: l,
                            paywallType: t
                        }
                    }
                },
                paywallMovedToBackground(e) {
                    let {
                        trigger: l,
                        type: t,
                        webpage: a
                    } = e;
                    return {
                        kind: "paywall_moved_to_background",
                        info: {
                            paywallTrigger: d(l),
                            paywallType: t,
                            ...a ? {
                                webpage: a
                            } : {}
                        }
                    }
                },
                paywallMovedToForeground(e) {
                    let {
                        trigger: l,
                        type: t,
                        webpage: a
                    } = e;
                    return {
                        kind: "paywall_moved_to_foreground",
                        info: {
                            paywallTrigger: d(l),
                            paywallType: t,
                            ...a ? {
                                webpage: a
                            } : {}
                        }
                    }
                },
                uploadCompletionUpsellClicked(e) {
                    let {
                        trigger: l,
                        type: t,
                        webpage: a
                    } = e;
                    return {
                        kind: "upload_completion_upsell_clicked",
                        info: {
                            paywallTrigger: d(l),
                            paywallType: t,
                            ...a ? {
                                webpage: a
                            } : {}
                        }
                    }
                }
            };

            function d(e) {
                switch (e) {
                    case i.vW.BEFORE_TRANSFER_UPLOAD:
                        return "transfer_started";
                    case i.vW.TRANSFER_FILES_SELECTED:
                        return "file_selected";
                    case i.vW.TRANSFER_PAGE_OPENED:
                        return "home_screen";
                    case i.vW.TRANSFER_UPLOAD_FINISHED:
                        return "transfer_completed";
                    case i.vW.TW_REPACKAGING_WARNING_CLICKED:
                        return "warning_clicked";
                    case i.vW.TW_APPEARANCE_CLICKED:
                        return "appearance_option_clicked";
                    case i.vW.TW_EXPIRY_CLICKED:
                        return "expiry_option_clicked";
                    default:
                        return e
                }
            }
        },
        46616: (e, l, t) => {
            "use strict";
            t.d(l, {
                Kj: () => L,
                QR: () => b,
                h_: () => E,
                kC: () => v,
                up: () => S,
                zM: () => f
            });
            var a = t(21462),
                i = t(38169),
                r = t(32976),
                n = t(83489),
                s = t(15566),
                d = t(89187),
                o = t(55851),
                _ = t(93052),
                c = t(88848),
                u = t(494),
                w = t(42599),
                m = t(62760),
                p = t(56436),
                g = t(12637),
                h = t(86781),
                y = t(72546),
                x = t(15539);
            let f = () => {
                    let e = (0, i.wA)(),
                        l = (0, i.d4)(c.oR);
                    return (0, a.useMemo)(() => {
                        if (l === c.pU.FREE_LIMIT_FULLSCREEN) return {
                            isLowDismissibility: !0,
                            dismissOnOutsideClick: !0,
                            dismissOnMouseLeave: !1,
                            isLeftCloseButton: !1,
                            onPaywallDismiss: () => {
                                e((0, c.Cb)(c.pU.FREE_LIMIT_FULLSCREEN))
                            }
                        }
                    }, [l, e])
                },
                v = () => {
                    let {
                        currentUsage: e
                    } = (0, r.i)(), l = (0, i.d4)(h.R2), {
                        settings: t
                    } = (0, m.k)();
                    if (!t.enforce_gb_limits || "disabled" === t.one_day_expiry_free_transfer_kind) return !1;
                    let a = t.are_higher_limits_for_free_users_enabled ? 0x140000000 : 0xc0000000;
                    switch (l) {
                        case d.js.FREE:
                            return e > a;
                        case d.js.STARTER:
                            return e > 0x4b00000000;
                        default:
                            return !1
                    }
                },
                b = () => {
                    let {
                        currentUsage: e
                    } = (0, n.J)(), l = (0, i.d4)(h.R2), {
                        settings: t
                    } = (0, m.k)();
                    if (!t.enforce_transfer_number_limits || "disabled" === t.one_day_expiry_free_transfer_kind) return !1;
                    let a = t.are_higher_limits_for_free_users_enabled ? 20 : 10,
                        r = t.are_higher_limits_for_free_users_enabled ? 20 : 10;
                    switch (l) {
                        case d.js.FREE:
                            return (null != e ? e : 0) >= a;
                        case d.js.STARTER:
                            return (null != e ? e : 0) >= r;
                        default:
                            return !1
                    }
                },
                L = () => {
                    let {
                        isLimitReached: e
                    } = (0, n.J)(), {
                        isLimitReached: l
                    } = (0, r.i)(), t = (0, s.bV)(), f = (0, i.d4)(h.R2), L = (0, i.d4)(h.eQ), E = (0, i.d4)(g.G9), {
                        settings: S
                    } = (0, m.k)(), C = (0, i.d4)(y.Kj), A = "displayed" === (0, i.d4)(w.vb), P = (0, i.wA)(), T = (0, i.d4)(x.nn), k = v(), R = b(), I = !S.disable_gb_limits && (k || l(T)), j = !S.disable_transfer_numbers_limits && (R || e()), M = (0, _.q)(), O = (0, i.d4)(w.cN), N = (0, a.useMemo)(() => M || O, [M, O]), F = "tooltip_and_popup_every_time" === S.one_day_expiry_free_transfer_kind && (A || C.expiry === o.i.ONE_DAY_IN_SECONDS || !(0, u.dB)()), U = !N && (I || j) && !F;
                    if (!t || f && [d.js.ULTIMATE, d.js.ENTERPRISE, d.js.ENTERPRISE_CUSTOM_CONTRACT].includes(f) || L) return () => !1;
                    let D = (0, p.c)().name;
                    return D && D !== E ? () => !1 : U ? () => (P((0, c.UK)(c.pU.FREE_LIMIT_FULLSCREEN)), P((0, c.EQ)({
                        accountStorage: I,
                        transferNumber: j,
                        singleTransferSize: !1
                    })), !0) : () => !1
                },
                E = () => {
                    let e = (0, i.wA)(),
                        l = (0, i.d4)(c.oR);
                    return (0, a.useMemo)(() => {
                        if (l === c.pU.FREE_HIGHER_LIMITS_FULLSCREEN) return {
                            isLowDismissibility: !0,
                            dismissOnOutsideClick: !0,
                            dismissOnMouseLeave: !1,
                            isLeftCloseButton: !1,
                            onPaywallDismiss: () => {
                                e((0, c.Cb)(c.pU.FREE_HIGHER_LIMITS_FULLSCREEN))
                            }
                        }
                    }, [l, e])
                },
                S = () => {
                    let {
                        isLimitReached: e
                    } = (0, n.J)(), {
                        isLimitReached: l
                    } = (0, r.i)(), t = (0, s.bV)(), o = (0, i.d4)(h.R2), u = (0, i.d4)(h.eQ), y = (0, i.d4)(g.G9), {
                        settings: f
                    } = (0, m.k)(), v = (0, i.wA)(), b = (0, i.d4)(x.nn), L = (() => {
                        let {
                            currentUsage: e
                        } = (0, r.i)(), l = (0, i.d4)(h.R2), {
                            settings: t
                        } = (0, m.k)();
                        return !!t.enforce_gb_limits && !!t.are_higher_limits_for_free_users_enabled && l === d.js.FREE && e > 0x100000000
                    })(), E = (() => {
                        let {
                            currentUsage: e
                        } = (0, n.J)(), l = (0, i.d4)(h.R2), {
                            settings: t
                        } = (0, m.k)();
                        return !!t.enforce_transfer_number_limits && !!t.are_higher_limits_for_free_users_enabled && l === d.js.FREE && (null != e ? e : 0) >= 15
                    })(), S = !f.disable_gb_limits && L && !l(b), C = !f.disable_transfer_numbers_limits && E && !e(), A = (0, _.q)(), P = (0, i.d4)(w.cN), T = !(0, a.useMemo)(() => A || P, [A, P]) && (S || C);
                    if (!t || o && [d.js.STARTER, d.js.ULTIMATE, d.js.ENTERPRISE, d.js.ENTERPRISE_CUSTOM_CONTRACT].includes(o) || u) return () => !1;
                    let k = (0, p.c)().name;
                    return k && k !== y ? () => !1 : T ? () => (v((0, c.UK)(c.pU.FREE_HIGHER_LIMITS_FULLSCREEN)), v((0, c.EQ)({
                        accountStorage: S,
                        transferNumber: C,
                        singleTransferSize: !1
                    })), !0) : () => !1
                }
        },
        48804: (e, l, t) => {
            "use strict";
            t.d(l, {
                e: () => n
            });
            var a = t(68505),
                i = t(95690),
                r = t(85236);

            function n() {
                let e = (0, r.VX)(),
                    {
                        experience: l
                    } = window.Fides || {};
                if (!l) return a.A.track(Error(i.q.NO_EXPERIENCE), {
                    tcModel: e
                }), !1;
                if (!e) return;
                let {
                    tcf_purpose_legitimate_interests: t,
                    tcf_purpose_legitimate_interest_ids: n,
                    tcf_purpose_consent_ids: s,
                    tcf_purpose_consents: d
                } = l || {};
                return s instanceof Array && n instanceof Array ? n.every(l => {
                    var t, a;
                    return null == (a = e.purposeLegitimateInterests) || null == (t = a.has) ? void 0 : t.call(a, l)
                }) && s.every(l => {
                    var t, a;
                    return null == (a = e.purposeConsents) || null == (t = a.has) ? void 0 : t.call(a, l)
                }) : t && d ? (null == t ? void 0 : t.every(l => {
                    var t, a;
                    let {
                        id: i
                    } = l;
                    return null == (a = e.purposeLegitimateInterests) || null == (t = a.has) ? void 0 : t.call(a, i)
                })) && (null == d ? void 0 : d.every(l => {
                    var t, a;
                    let {
                        id: i
                    } = l;
                    return null == (a = e.purposeConsents) || null == (t = a.has) ? void 0 : t.call(a, i)
                })) : (a.A.track(Error(i.q.NO_PURPOSES), {
                    tcModel: e,
                    experience: l,
                    consents: d,
                    legitimateInterests: t
                }), !1)
            }
        },
        49944: (e, l, t) => {
            "use strict";
            t.d(l, {
                o: () => o
            });
            var a = t(21462),
                i = t(38169),
                r = t(95),
                n = t(15913),
                s = t(56436),
                d = function(e) {
                    return e.CHANNEL = "channel", e.WORKSPACE = "workspace", e.OWN = "own", e.ANONYMOUS = "anonymous", e
                }(d || {});

            function o(e) {
                let {
                    isAuthInitialized: l,
                    isAuthLoading: t,
                    isLoggedIn: d
                } = (0, i.d4)(e => ({
                    isAuthInitialized: e.auth.isInitialized,
                    isAuthLoading: e.auth.isLoading,
                    isLoggedIn: e.auth.isLoggedIn
                })), o = (0, s.c)().name, {
                    currentTeam: _,
                    fetching: c
                } = (0, n.o)(), u = t || !l || c, {
                    data: w,
                    isLoading: m
                } = (0, r.VX)({
                    workspaceId: null == _ ? void 0 : _.id
                }, {
                    skip: u || !(null == _ ? void 0 : _.id)
                }), {
                    data: p,
                    isLoading: g
                } = (0, r.Md)({}, {
                    skip: u || !d
                }), {
                    data: h,
                    isLoading: y
                } = (0, r.PI)({}, {
                    skip: u || d
                }), {
                    data: x,
                    isLoading: f
                } = (0, r.n1)({
                    channelName: o
                }, {
                    skip: u || !o
                }), v = (0, a.useMemo)(() => !o || (null == e ? void 0 : e.ignoreChannel) ? d && _ ? "workspace" : d ? "own" : "anonymous" : "channel", [o, null == e ? void 0 : e.ignoreChannel, d, _]), b = (0, a.useMemo)(() => {
                    var e, l, t, a;
                    switch (v) {
                        case "channel":
                            return null != (e = null == x ? void 0 : x.entitlements) ? e : [];
                        case "workspace":
                            return null != (l = null == w ? void 0 : w.entitlements) ? l : [];
                        case "own":
                            return null != (t = null == p ? void 0 : p.entitlements) ? t : [];
                        case "anonymous":
                            return null != (a = null == h ? void 0 : h.entitlements) ? a : [];
                        default:
                            return []
                    }
                }, [v, null == x ? void 0 : x.entitlements, null == w ? void 0 : w.entitlements, null == p ? void 0 : p.entitlements, null == h ? void 0 : h.entitlements]), L = (0, a.useMemo)(() => {
                    let e = {};
                    return b.forEach(l => {
                        e[l.feature.code] = l
                    }), e
                }, [b]), E = (0, a.useMemo)(() => {
                    switch (v) {
                        case "channel":
                            return f;
                        case "workspace":
                            return m;
                        case "own":
                            return g;
                        case "anonymous":
                            return y;
                        default:
                            return !1
                    }
                }, [v, f, m, g, y]);
                return {
                    entitlements: L,
                    isLoading: u || E
                }
            }
        },
        51033: (e, l, t) => {
            "use strict";
            t.d(l, {
                j: () => a
            });
            let a = (0, t(4559).Mz)(e => e.adWallpaper, e => e.adResponse)
        },
        51853: (e, l, t) => {
            "use strict";
            t.d(l, {
                $X: () => r,
                $b: () => h,
                EW: () => m,
                Km: () => x,
                OE: () => d,
                PJ: () => E,
                Rl: () => g,
                S3: () => w,
                U_: () => i,
                XU: () => c,
                YB: () => L,
                a0: () => _,
                bP: () => n,
                cg: () => u,
                kH: () => v,
                l9: () => S,
                pv: () => f,
                rS: () => b,
                s0: () => s,
                sA: () => C,
                tI: () => y,
                u4: () => a,
                vB: () => o,
                yy: () => p
            });
            let a = {
                    route: "/account",
                    name: "account"
                },
                i = {
                    route: "/account/notification-settings",
                    name: "notification-settings"
                },
                r = {
                    route: "/workspace/branded-page",
                    name: "branded-page"
                },
                n = {
                    route: "/pricing",
                    name: "pricing-page"
                },
                s = {
                    route: "/enterprise",
                    name: "enterprise-onboarding"
                },
                d = {
                    route: "/sign-up",
                    name: "sign-up-page"
                },
                o = {
                    route: "/workspace/payment",
                    name: "account-payment"
                },
                _ = {
                    route: "/workspace/integrations",
                    name: "workspace-integrations"
                },
                c = {
                    route: "/upgrade",
                    name: "upgrade"
                },
                u = {
                    route: "/legal/privacy",
                    name: "privacy-policy"
                },
                w = {
                    route: "/request",
                    name: "request"
                },
                m = {
                    route: "/requests/",
                    name: "requests-upload"
                },
                p = {
                    route: "/legal/terms",
                    name: "terms-of-service"
                },
                g = {
                    route: "/explore/legal/offers/terms-and-conditions",
                    name: "offers-terms-and-conditions"
                },
                h = {
                    route: "/checkout",
                    name: "checkout"
                },
                y = {
                    route: "/checkout/pending",
                    name: "checkout-pending"
                },
                x = {
                    route: "/checkout/feature-explanation",
                    name: "checkout-feature-explanation"
                },
                f = {
                    route: "/account/refund",
                    name: "account-refund"
                },
                v = {
                    route: "/workspace/members",
                    name: "members"
                },
                b = {
                    route: "/workspace/join",
                    name: "join-workspace"
                },
                L = {
                    route: "/workspace/saml-sso",
                    name: "saml-sso"
                },
                E = {
                    route: "/workspace/welcome",
                    name: "workspace-welcome"
                },
                S = {
                    route: "/payment/update",
                    name: "payment-update"
                },
                C = {
                    route: "/sign",
                    name: "wetransfer-sign"
                }
        },
        52016: (e, l, t) => {
            "use strict";
            t.d(l, {
                P: () => T,
                _: () => P
            });
            var a = t(21462),
                i = t(38169),
                r = t(71322),
                n = t(72590),
                s = t(30077),
                d = t(61149),
                o = t(2749),
                _ = t(24761),
                c = t(87983),
                u = t(97875),
                w = t(17198),
                m = t(87963),
                p = t(33187),
                g = t(89187),
                h = t(88848),
                y = t(36755),
                x = t(73595),
                f = t(62760),
                v = t(86781),
                b = t(26573),
                L = t(72546),
                E = t(10694),
                S = t(9912),
                C = t(36337),
                A = t(86248);
            let P = e => {
                    var l, t, a;
                    let {
                        defaultPlanTier: i,
                        defaultBillingPeriod: r,
                        freeTrialAvailable: n,
                        starterPlanEnabled: o,
                        monthlyBillingEnabled: _,
                        weeklyBillingEnabled: w
                    } = e, {
                        getPlanByTierAndInterval: m
                    } = (0, c.d)(), p = (0, u.G)(), h = null != (a = null == (t = m(i, r)) || null == (l = t.price) ? void 0 : l.currency) ? a : d.Sj.EUR, y = (0, s.R)(p, h);
                    return {
                        availableProducts: (e => {
                            let {
                                defaultPlanTier: l,
                                defaultBillingPeriod: t,
                                freeTrialAvailable: a,
                                starterPlanEnabled: i,
                                monthlyBillingEnabled: r,
                                weeklyBillingEnabled: n
                            } = e, {
                                getPlanByTierAndInterval: s
                            } = (0, c.d)(), d = [g.js.ULTIMATE, g.js.ENTERPRISE, ...i ? [g.js.STARTER] : []], o = [g.CS.YEARLY, ...r ? [g.CS.MONTHLY] : [], ...n ? [g.CS.WEEKLY] : []], _ = (0, x.tg)(g.js.ULTIMATE), u = (0, x.tg)(g.js.ENTERPRISE), w = (0, x.tg)(g.js.STARTER);
                            return d.flatMap(e => {
                                let i = e === g.js.ULTIMATE ? _ : e === g.js.ENTERPRISE ? u : w;
                                return o.filter(e => e !== g.CS.WEEKLY || i).map(i => {
                                    var r, n;
                                    let d = s(e, i);
                                    return {
                                        tier: e,
                                        billingPeriod: i,
                                        isFreeTrialAvailable: a,
                                        isDefault: e === l && i === t,
                                        amountPerSeat: null == d || null == (r = d.price) ? void 0 : r.totalAmountPerSeatInCents,
                                        currency: null == d || null == (n = d.price) ? void 0 : n.currency
                                    }
                                })
                            })
                        })({
                            defaultPlanTier: i,
                            defaultBillingPeriod: r,
                            freeTrialAvailable: n,
                            starterPlanEnabled: o,
                            monthlyBillingEnabled: _,
                            weeklyBillingEnabled: w
                        }),
                        allowedPaymentMethods: y
                    }
                },
                T = e => {
                    let {
                        paywallStyle: l,
                        trigger: t,
                        defaultPlanTier: s,
                        defaultBillingPeriod: d,
                        freeTrialAvailable: c,
                        starterPlanEnabled: u,
                        monthlyBillingEnabled: g,
                        weeklyBillingEnabled: x,
                        isPaywallShownByDefault: T,
                        allowedPaywallStyles: k
                    } = e, {
                        predictionPolicy: R,
                        displayThreshold: I,
                        predictionTimeoutSeconds: j
                    } = (e => {
                        var l, t;
                        let {
                            trigger: a,
                            isPaywallShownByDefault: r,
                            isPaywallTypeAllowed: n
                        } = e, {
                            settings: {
                                spontaneous_paywalls_configuration: s,
                                wolf_prediction_timeout_seconds: d
                            }
                        } = (0, f.k)(), o = (0, i.d4)(v.lD), _ = (0, y.$)();
                        if (!a || !n) return {
                            predictionPolicy: h.y5.DISABLED,
                            displayThreshold: -1,
                            predictionTimeoutSeconds: -1
                        };
                        let c = null == s || null == (l = s[a]) ? void 0 : l.wolf_prediction_policy,
                            u = null == s || null == (t = s[a]) ? void 0 : t.wolf_display_threshold;
                        if (!c || !o || _) return {
                            predictionPolicy: h.y5.DISABLED,
                            displayThreshold: -1,
                            predictionTimeoutSeconds: -1
                        };
                        if (c === h.y5.ENABLED_USE_PREDICTION) {
                            let e = h.y5.ENABLED_BACKGROUND;
                            return {
                                predictionPolicy: r ? c : e,
                                displayThreshold: void 0 === u ? 1 : u,
                                predictionTimeoutSeconds: d
                            }
                        }
                        return {
                            predictionPolicy: c,
                            displayThreshold: u,
                            predictionTimeoutSeconds: d
                        }
                    })({
                        trigger: t,
                        isPaywallShownByDefault: T,
                        isPaywallTypeAllowed: (0, a.useMemo)(() => !!l && k.includes(l), [l, k])
                    }), [M, {
                        isLoading: O,
                        isError: N
                    }] = (0, w.C)(), F = (0, a.useRef)(!1), U = (0, i.wA)(), D = (0, i.d4)(L.Kj), z = (0, i.d4)(v.mB), W = (0, i.d4)(b.zj), B = (0, i.d4)(A.KO), H = (0, i.d4)(L.Jz), [V, Z] = (0, a.useState)(!0), [q, G] = (0, a.useState)(!1), [K, Y] = (0, a.useState)(void 0), [J, X] = (0, a.useState)(void 0), [Q, $] = (0, a.useState)(!1), ee = (0, a.useMemo)(() => t === h.vW.DW_RECOVER_EXPIRED_TRANSFER || H === E.r.RECOVERING, [t, H]), el = (0, a.useMemo)(() => R !== h.y5.DISABLED, [R]), et = (0, a.useMemo)(() => [h.y5.ENABLED_AWAIT, h.y5.ENABLED_USE_PREDICTION].includes(R), [R]), ea = (0, a.useMemo)(() => R === h.y5.ENABLED_USE_PREDICTION, [R]), ei = (0, a.useMemo)(() => !!l && !!t && (!ea || !O && !N && !Q && !!q && void 0 !== J && void 0 !== I && J >= I), [ea, N, O, Q, q, J, I, l, t]), {
                        isSupported: er,
                        isDismissible: en,
                        isBlocking: es
                    } = (0, o.VO)(t), ed = (0, a.useMemo)(() => (0, n.A)(), []), eo = (0, a.useMemo)(() => (0, o.SU)(D), [D]), e_ = (0, a.useMemo)(() => (0, o.el)(z), [z]), ec = (0, a.useMemo)(() => (0, p.ug)(z), [z]), eu = (0, a.useMemo)(() => null == z ? void 0 : z.email, [z]);
                    (0, r.A)(() => {
                        (0, o.CL)(W).then(e => {
                            Y(e), Z(!1)
                        }).catch(() => {
                            (0, m.Od)().trackUserAction(C.$.predictionMissingContext(ed, t)), Z(!1)
                        })
                    });
                    let {
                        availableProducts: ew,
                        allowedPaymentMethods: em
                    } = P({
                        defaultPlanTier: s,
                        defaultBillingPeriod: d,
                        freeTrialAvailable: c,
                        starterPlanEnabled: u,
                        monthlyBillingEnabled: g,
                        weeklyBillingEnabled: x
                    }), ep = (0, a.useMemo)(() => el && er && !V && !ee, [er, V, el, ee]), eg = (0, a.useMemo)(() => {
                        if (l && t && ep && void 0 !== eo) return (0, o.jn)({
                            paywallStyle: l,
                            isBlocking: !!es,
                            isDismissible: !!en,
                            availableProducts: ew,
                            allowedPaymentMethods: em,
                            transferInfo: eo,
                            senderInfo: e_,
                            contextInfo: K,
                            picoUserInfo: ec,
                            userEmail: eu
                        })
                    }, [ep, K, l, en, es, ew, em, eo, e_, ec, eu, t]);
                    return (0, a.useEffect)(() => {
                        var e, a;
                        if (!l || !t || !ep || void 0 === eg || F.current) return;
                        F.current = !0;
                        let i = {
                            paywallId: ed,
                            paywallInfo: {
                                style: l,
                                trigger: t,
                                isDismissible: en,
                                isBlocking: es,
                                isFirstPaywall: void 0,
                                productsDisplayed: ew,
                                paymentMethodsAvailable: em
                            },
                            transferInfo: eo,
                            senderInfo: e_,
                            contextInfo: K
                        };
                        U((0, _.C_)(i));
                        let r = K ? {
                                country: K.location.countryCode,
                                ...K.device.os && {
                                    os: K.device.os
                                },
                                ...(null == (e = K.connection) ? void 0 : e.effectiveType) && {
                                    connection: K.connection.effectiveType
                                }
                            } : {},
                            n = performance.now();
                        (0, S.T)({
                            name: "wolf.prediction.request",
                            type: "action",
                            tags: r
                        }), (0, m.Od)().trackUserAction(C.$.predictionRequest(ed, t, i, {
                            ...ec,
                            entitlementsPackageCode: null != (a = ec.entitlementsPackageCode) ? a : ""
                        }, eg));
                        let s = setTimeout(() => {
                            et && ($(!0), (0, m.Od)().trackUserAction(C.$.predictionTimeout(ed, t)), clearTimeout(s))
                        }, 1e3 * j);
                        return M(eg).unwrap().then(e => {
                            clearTimeout(s);
                            let l = performance.now(),
                                a = e.prediction,
                                i = ea && void 0 !== I && a >= I;
                            X(a), U((0, _.Mq)({
                                prediction: a,
                                isExperienceModifiedByPrediction: i
                            })), G(!0), (0, S.T)({
                                name: "wolf.prediction.success",
                                type: "view",
                                time: l - n,
                                tags: r
                            }), (0, m.Od)().trackUserAction(C.$.predictionSuccess(ed, t, a, eg, l - n))
                        }).catch(e => {
                            var l;
                            clearTimeout(s), G(!0), (0, S.T)({
                                name: "wolf.prediction.error",
                                type: "view",
                                time: performance.now() - n,
                                tags: r
                            }), (0, m.Od)().trackUserAction(C.$.predictionError(ed, t, e.status, JSON.stringify(null == (l = e.data) ? void 0 : l.detail), eg))
                        }), () => clearTimeout(s)
                    }, [l, t, ep, eg, F]), (0, a.useEffect)(() => {
                        !O && (ea || !T) && B && (q && !(ei && T) || N || Q) && U((0, _.W8)())
                    }, [U, B, q, ei, T, N, O, Q, ea]), {
                        shouldShowPaywall: ei,
                        prediction: J,
                        isLoading: !ee && et && !q
                    }
                }
        },
        55296: (e, l, t) => {
            "use strict";
            t.d(l, {
                g: () => n
            });
            var a = t(38169),
                i = t(62760),
                r = t(58207);
            let n = () => {
                let e = (0, a.d4)(r.D),
                    {
                        settings: l
                    } = (0, i.k)();
                return !l.should_hide_consent_cookie_overlay && (null == e ? void 0 : e.isWallVisible)
            }
        },
        55613: (e, l, t) => {
            "use strict";
            t.d(l, {
                D: () => m,
                q: () => w
            });
            var a = t(21462),
                i = t(38169),
                r = t(87676),
                n = t(56741),
                s = t(88848),
                d = t(7012),
                o = t(30631),
                _ = t(62760),
                c = t(86781);
            let u = "ultimate_with_ft_modal_last_shown",
                w = () => {
                    let e = (0, i.d4)(c.mB),
                        {
                            hasRedeemedFreeTrial: l
                        } = (0, r.J)(),
                        {
                            settings: t
                        } = (0, _.k)(),
                        {
                            canShow: s
                        } = (0, n.w)(-1, u);
                    return (0, a.useMemo)(() => {
                        let a = t.show_ultimate_yearly_ft_modal_on_pricing_page_close,
                            i = (0, d.to)(e),
                            r = o.Ay.isMobile;
                        return a && !l && i && !r && s
                    }, [e, l, t, s])
                },
                m = () => {
                    let e = (0, i.wA)(),
                        l = (0, i.d4)(s.oR),
                        {
                            updateLastShownTime: t
                        } = (0, n.w)(-1, u);
                    return (0, a.useMemo)(() => {
                        if (l === s.pU.ULTIMATE_WITH_FT_MODAL) return {
                            onPaywallDismiss: () => {
                                t(), e((0, s.Cb)(s.pU.ULTIMATE_WITH_FT_MODAL))
                            }
                        }
                    }, [l, e, t])
                }
        },
        56076: e => {
            e.exports = {
                black: "#000",
                white: "#fff",
                highlight: "#5268ff",
                highlightAlt: "#2b4cbf",
                error: "#e65050",
                warning: "#ffc900",
                notification: "#000",
                success: "#5268ff",
                grey975: "#060606",
                grey950: "#0d0d0d",
                grey900: "#191919",
                grey850: "#262626",
                grey800: "#333",
                grey700: "#4c4c4c",
                grey300: "#b2b2b2",
                grey200: "#ccc",
                grey150: "#d9d9d9",
                grey100: "#e5e5e5",
                grey50: "#f2f2f2",
                grey25: "#f9f9f9"
            }
        },
        56741: (e, l, t) => {
            "use strict";
            t.d(l, {
                k: () => i,
                w: () => a
            });
            let a = function(e, l) {
                    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
                        a = arguments.length > 3 ? arguments[3] : void 0,
                        i = localStorage.getItem(l),
                        r = a ? localStorage.getItem(a) : null,
                        n = Date.now(),
                        s = !i;
                    if (i) {
                        let l = !r || -1 === t || n - parseInt(r, 10) < 1e3 * t;
                        s = -1 !== e && n - parseInt(i, 10) >= 1e3 * e && l
                    }
                    return {
                        canShow: s,
                        updateLastShownTime: () => {
                            localStorage.setItem(l, n.toString()), a && !r && localStorage.setItem(a, n.toString())
                        }
                    }
                },
                i = e => {
                    let l = localStorage.getItem(e),
                        t = l ? parseInt(l, 10) : 0;
                    return {
                        dismissCount: t,
                        updateDismissCount: () => {
                            localStorage.setItem(e, (t + 1).toString())
                        },
                        resetDismissCount: () => {
                            localStorage.setItem(e, "0")
                        }
                    }
                }
        },
        57127: (e, l, t) => {
            "use strict";
            t.d(l, {
                A: () => o
            });
            var a = t(87963),
                i = t(51853),
                r = t(81903),
                n = t(88848),
                s = t(72255),
                d = t(66976);

            function o() {
                let {
                    route: e
                } = d.default.getState();
                if (e.path === i.bP.route) {
                    var l, t;
                    (0, a.Od)().trackUserAction(r.wj.paywallDismissed({
                        dismissMethod: r.tS.CLICK_OUTSIDE,
                        trigger: null != (l = (0, n.wn)(d.default.getState())) ? l : n.vW.UNKNOWN,
                        type: n.pU.PRICING_PAGE,
                        webpage: null != (t = (0, n.jw)(d.default.getState())) ? t : "other"
                    })), d.default.dispatch((0, n.Bf)())
                }
                return s.A.navigateTo(s.A.getLastRoute("transfer", "/"))
            }
        },
        57130: (e, l, t) => {
            "use strict";
            t.d(l, {
                CU: () => n,
                SO: () => i,
                bQ: () => r,
                sF: () => s
            });
            var a = t(4559);
            let i = e => e.pending,
                r = (0, a.Mz)(i, e => e.signout),
                n = (0, a.Mz)(i, e => e.uploadAsset_email_background),
                s = (0, a.Mz)([i, (e, l) => l], (e, l) => e[l])
        },
        57222: (e, l, t) => {
            "use strict";
            t.d(l, {
                C: () => a
            });
            let a = {
                subscriptionReactivated(e) {
                    let {
                        tier: l,
                        trigger: t
                    } = e;
                    return {
                        kind: "subscription_reactivated",
                        info: {
                            ...l && {
                                tier: l
                            },
                            ...t && {
                                trigger: t
                            }
                        }
                    }
                },
                bannerButtonClicked: () => ({
                    kind: "reactivation_banner_button_clicked"
                }),
                popoverDisplayed(e) {
                    let {
                        paywallTrigger: l
                    } = e;
                    return {
                        kind: "reactivation_popover_displayed",
                        info: {
                            ...l && {
                                paywallTrigger: l
                            }
                        }
                    }
                },
                popoverButtonClicked(e) {
                    let {
                        paywallTrigger: l
                    } = e;
                    return {
                        kind: "reactivation_popover_button_clicked",
                        info: {
                            ...l && {
                                paywallTrigger: l
                            }
                        }
                    }
                },
                popupDisplayed(e) {
                    let {
                        paywallTrigger: l
                    } = e;
                    return {
                        kind: "reactivation_popup_displayed",
                        info: {
                            ...l && {
                                paywallTrigger: l
                            }
                        }
                    }
                },
                popupButtonClicked(e) {
                    let {
                        paywallTrigger: l
                    } = e;
                    return {
                        kind: "reactivation_popup_button_clicked",
                        info: {
                            ...l && {
                                paywallTrigger: l
                            }
                        }
                    }
                },
                popupDismissed(e) {
                    let {
                        paywallTrigger: l
                    } = e;
                    return {
                        kind: "reactivation_popup_dismissed",
                        info: {
                            ...l && {
                                paywallTrigger: l
                            }
                        }
                    }
                },
                productOpenedWithAutoRenewOff: () => ({
                    kind: "product_opened_with_auto_renew_off"
                })
            }
        },
        58174: e => {
            e.exports = {
                "wp-wrapper": "WallpaperWrapper_wp-wrapper__QGEZb",
                "wp-wrapper--no-transition": "WallpaperWrapper_wp-wrapper--no-transition__PVskw",
                "wp-wrapper--full-panel": "WallpaperWrapper_wp-wrapper--full-panel__6jF_m",
                "wp-wrapper--half-panel": "WallpaperWrapper_wp-wrapper--half-panel__I800r",
                "wp-wrapper--behind-dropzone": "WallpaperWrapper_wp-wrapper--behind-dropzone__kOMl1",
                "wp-wrapper__content": "WallpaperWrapper_wp-wrapper__content__aJ5k0",
                "wp-wrapper__content--appear-done": "WallpaperWrapper_wp-wrapper__content--appear-done__kw0Oi",
                "wp-wrapper__content--enter-done": "WallpaperWrapper_wp-wrapper__content--enter-done__y1uL3",
                "wp-wrapper__content--exit": "WallpaperWrapper_wp-wrapper__content--exit__Bi2Ac",
                "wp-wrapper__content--exit-active": "WallpaperWrapper_wp-wrapper__content--exit-active__5NqS6",
                mobileContainer: "WallpaperWrapper_mobileContainer__nBW67",
                mobileContainerLegacyNav: "WallpaperWrapper_mobileContainerLegacyNav__XgOAG"
            }
        },
        58207: (e, l, t) => {
            "use strict";
            t.d(l, {
                D: () => i
            });
            var a = t(4559);
            let i = e => e.consent;
            (0, a.Mz)(i, e => null == e ? void 0 : e.isWallVisible)
        },
        58524: (e, l, t) => {
            "use strict";
            t.d(l, {
                P: () => i,
                y: () => r
            });
            var a = t(69361),
                i = function(e) {
                    return e.BANNER = "banner", e.POPOVER = "popover", e.TW_POPUP = "tw_popup", e.SETTINGS_MODAL = "settings_modal", e.GOODBYE_OFFER_MODAL = "goodbye_offer_modal", e.WINBACK_OFFER_MODAL = "winback_offer_modal", e
                }({});
            let r = [a.vW.TW_MORE_SETTINGS_EXPIRY, a.vW.TW_MORE_SETTINGS_CUSTOM_BACKGROUND]
        },
        58589: e => {
            e.exports = {
                "wt-display-heading-x-small-bold": "FullscreenPaywall_wt-display-heading-x-small-bold__7sqGW",
                "wt-display-heading-small-bold-narrow": "FullscreenPaywall_wt-display-heading-small-bold-narrow__6zYn3",
                "wt-display-heading-small-bold": "FullscreenPaywall_wt-display-heading-small-bold__5zJGI",
                title: "FullscreenPaywall_title__NBBS9",
                "wt-display-heading-small-bold-wide": "FullscreenPaywall_wt-display-heading-small-bold-wide__Y85tF",
                "wt-display-heading-small-narrow": "FullscreenPaywall_wt-display-heading-small-narrow__pM08c",
                "wt-display-heading-small": "FullscreenPaywall_wt-display-heading-small__U67iY",
                "wt-display-heading-small-wide": "FullscreenPaywall_wt-display-heading-small-wide__gUW6u",
                "wt-display-heading-medium-bold-narrow": "FullscreenPaywall_wt-display-heading-medium-bold-narrow__Pa6rQ",
                "wt-display-heading-medium-bold": "FullscreenPaywall_wt-display-heading-medium-bold__ZrnIu",
                "wt-display-heading-medium-bold-wide": "FullscreenPaywall_wt-display-heading-medium-bold-wide__zTRbX",
                "wt-display-heading-medium-narrow": "FullscreenPaywall_wt-display-heading-medium-narrow__CmDK1",
                "wt-display-heading-medium": "FullscreenPaywall_wt-display-heading-medium__oIWb_",
                "wt-display-heading-medium-wide": "FullscreenPaywall_wt-display-heading-medium-wide__NNEag",
                "wt-display-heading-large-bold-narrow": "FullscreenPaywall_wt-display-heading-large-bold-narrow___V_mV",
                "wt-display-heading-large-bold": "FullscreenPaywall_wt-display-heading-large-bold__wEYGk",
                "wt-display-heading-large-bold-wide": "FullscreenPaywall_wt-display-heading-large-bold-wide__m7zkJ",
                "wt-display-heading-large-narrow": "FullscreenPaywall_wt-display-heading-large-narrow__C8wNY",
                "wt-display-heading-large": "FullscreenPaywall_wt-display-heading-large__HIRij",
                "wt-display-heading-large-wide": "FullscreenPaywall_wt-display-heading-large-wide__qF6Rq",
                "wt-display-heading": "FullscreenPaywall_wt-display-heading__EVCuP",
                "wt-sub-heading": "FullscreenPaywall_wt-sub-heading__V_QC0",
                "wt-text-heading-small-bold-narrow": "FullscreenPaywall_wt-text-heading-small-bold-narrow__wkl9J",
                "wt-text-heading-small-bold": "FullscreenPaywall_wt-text-heading-small-bold__hA4qi",
                "wt-text-heading-small-bold-wide": "FullscreenPaywall_wt-text-heading-small-bold-wide__8lhmg",
                "wt-text-heading-small-narrow": "FullscreenPaywall_wt-text-heading-small-narrow__gan84",
                "wt-text-heading-small": "FullscreenPaywall_wt-text-heading-small__WnaTI",
                "wt-text-heading-small-wide": "FullscreenPaywall_wt-text-heading-small-wide__axy46",
                "wt-text-heading-medium-bold": "FullscreenPaywall_wt-text-heading-medium-bold__yjjQI",
                "wt-text-heading-medium-bold-wide": "FullscreenPaywall_wt-text-heading-medium-bold-wide__7JhMl",
                "wt-text-heading-medium-semi-narrow": "FullscreenPaywall_wt-text-heading-medium-semi-narrow__7GtWX",
                "wt-text-heading-medium-narrow": "FullscreenPaywall_wt-text-heading-medium-narrow__oAE7_",
                "wt-text-heading-medium-semi": "FullscreenPaywall_wt-text-heading-medium-semi__RwIUy",
                "wt-text-heading-medium-semi-wide": "FullscreenPaywall_wt-text-heading-medium-semi-wide__oC_fV",
                "wt-text-heading-medium": "FullscreenPaywall_wt-text-heading-medium__efpdF",
                "wt-text-heading-medium-wide": "FullscreenPaywall_wt-text-heading-medium-wide__d3jCY",
                "wt-text-heading-large-bold-narrow": "FullscreenPaywall_wt-text-heading-large-bold-narrow__iJIKM",
                "wt-text-heading-large-bold": "FullscreenPaywall_wt-text-heading-large-bold__9Tdld",
                "wt-text-heading-large-bold-wide": "FullscreenPaywall_wt-text-heading-large-bold-wide__Ug_OR",
                "wt-text-heading-large-narrow": "FullscreenPaywall_wt-text-heading-large-narrow__jCLAB",
                "wt-text-heading-large": "FullscreenPaywall_wt-text-heading-large__hRqqf",
                "wt-text-heading-large-wide": "FullscreenPaywall_wt-text-heading-large-wide__xDOMN",
                "wt-text-heading-x-large-narrow": "FullscreenPaywall_wt-text-heading-x-large-narrow__xDkrM",
                "wt-text-heading-x-large": "FullscreenPaywall_wt-text-heading-x-large__yS3FK",
                "wt-text-heading-x-large-wide": "FullscreenPaywall_wt-text-heading-x-large-wide__4r_Rc",
                "wt-text-heading": "FullscreenPaywall_wt-text-heading__c7_da",
                "wt-body-x-small-semi": "FullscreenPaywall_wt-body-x-small-semi__chI6N",
                "wt-body-x-small": "FullscreenPaywall_wt-body-x-small__638aT",
                "wt-body-small-bold": "FullscreenPaywall_wt-body-small-bold__fLrlm",
                "wt-body-small-semi": "FullscreenPaywall_wt-body-small-semi__HmU1s",
                "wt-body-small": "FullscreenPaywall_wt-body-small__sF6sf",
                text: "FullscreenPaywall_text__Kv03X",
                textCenter: "FullscreenPaywall_textCenter__dPzTI",
                "wt-body-medium-bold": "FullscreenPaywall_wt-body-medium-bold___ll3V",
                "wt-body-medium-semi": "FullscreenPaywall_wt-body-medium-semi__iMYpu",
                "wt-body-medium": "FullscreenPaywall_wt-body-medium__siBg0",
                "wt-body-large-bold": "FullscreenPaywall_wt-body-large-bold__NyYtt",
                "wt-body-large": "FullscreenPaywall_wt-body-large__uB8ZF",
                "wt-body-x-large": "FullscreenPaywall_wt-body-x-large__W_pai",
                "wt-label-x-small-bold": "FullscreenPaywall_wt-label-x-small-bold__GpuUa",
                "wt-label-x-small-semi": "FullscreenPaywall_wt-label-x-small-semi__vwTXC",
                "wt-label-x-small": "FullscreenPaywall_wt-label-x-small__GvF65",
                "wt-label-small-bold": "FullscreenPaywall_wt-label-small-bold__jkt_8",
                "wt-label-small-semi": "FullscreenPaywall_wt-label-small-semi__lY_AT",
                "wt-label-small": "FullscreenPaywall_wt-label-small__WaH_y",
                "wt-label-medium-bold": "FullscreenPaywall_wt-label-medium-bold__O8F0O",
                "wt-label-medium-semi": "FullscreenPaywall_wt-label-medium-semi__bN83_",
                "wt-label-medium": "FullscreenPaywall_wt-label-medium__VJ1Eb",
                "wt-label-large-bold": "FullscreenPaywall_wt-label-large-bold__e8v_i",
                "wt-label-large-semi": "FullscreenPaywall_wt-label-large-semi__ypGhh",
                "wt-label-large": "FullscreenPaywall_wt-label-large__WjuYd",
                background: "FullscreenPaywall_background__4Z9uS",
                backgroundAppear: "FullscreenPaywall_backgroundAppear__MTkL9",
                backgroundEnter: "FullscreenPaywall_backgroundEnter__SsxmY",
                backgroundAppearActive: "FullscreenPaywall_backgroundAppearActive__zz_OZ",
                backgroundEnterActive: "FullscreenPaywall_backgroundEnterActive__S1rIh",
                paywallContainer: "FullscreenPaywall_paywallContainer__2qZ57",
                paywall: "FullscreenPaywall_paywall__nPXeM",
                paywallAppear: "FullscreenPaywall_paywallAppear__FdCkA",
                paywallEnter: "FullscreenPaywall_paywallEnter__t4P0j",
                paywallExitActive: "FullscreenPaywall_paywallExitActive__104XZ",
                paywallAppearActive: "FullscreenPaywall_paywallAppearActive__P74CG",
                paywallEnterActive: "FullscreenPaywall_paywallEnterActive__8WO1t",
                paywallExit: "FullscreenPaywall_paywallExit__J1oo_",
                imageContainer: "FullscreenPaywall_imageContainer__0ivuQ",
                image: "FullscreenPaywall_image__EGxSP",
                content: "FullscreenPaywall_content__Q5lrv",
                buttonsContainer: "FullscreenPaywall_buttonsContainer__5_WHN",
                buttonsContainerInverted: "FullscreenPaywall_buttonsContainerInverted__NmJeP",
                spinnerWrapper: "FullscreenPaywall_spinnerWrapper__9UY6h",
                buttonCloseRight: "FullscreenPaywall_buttonCloseRight__1fvDW",
                buttonSpinner: "FullscreenPaywall_buttonSpinner__5pZtF"
            }
        },
        60743: e => {
            e.exports = {
                "wt-display-heading-x-small-bold": "JoinWorkspace_wt-display-heading-x-small-bold__qy3l3",
                "wt-display-heading-small-bold-narrow": "JoinWorkspace_wt-display-heading-small-bold-narrow__wf6aE",
                "wt-display-heading-small-bold": "JoinWorkspace_wt-display-heading-small-bold__3bU4d",
                "wt-display-heading-small-bold-wide": "JoinWorkspace_wt-display-heading-small-bold-wide__XGp6j",
                "wt-display-heading-small-narrow": "JoinWorkspace_wt-display-heading-small-narrow__EJI_I",
                "wt-display-heading-small": "JoinWorkspace_wt-display-heading-small__rC9gJ",
                "wt-display-heading-small-wide": "JoinWorkspace_wt-display-heading-small-wide__aYL_w",
                "wt-display-heading-medium-bold-narrow": "JoinWorkspace_wt-display-heading-medium-bold-narrow__u9Kpr",
                "wt-display-heading-medium-bold": "JoinWorkspace_wt-display-heading-medium-bold__6jG0i",
                "wt-display-heading-medium-bold-wide": "JoinWorkspace_wt-display-heading-medium-bold-wide__caOCI",
                "wt-display-heading-medium-narrow": "JoinWorkspace_wt-display-heading-medium-narrow__522mm",
                "wt-display-heading-medium": "JoinWorkspace_wt-display-heading-medium__FC1qQ",
                "wt-display-heading-medium-wide": "JoinWorkspace_wt-display-heading-medium-wide__cy0Yi",
                "wt-display-heading-large-bold-narrow": "JoinWorkspace_wt-display-heading-large-bold-narrow__QK9cL",
                "wt-display-heading-large-bold": "JoinWorkspace_wt-display-heading-large-bold__8__QL",
                "wt-display-heading-large-bold-wide": "JoinWorkspace_wt-display-heading-large-bold-wide__5qg_L",
                "wt-display-heading-large-narrow": "JoinWorkspace_wt-display-heading-large-narrow__8tHRB",
                "wt-display-heading-large": "JoinWorkspace_wt-display-heading-large__rRU6G",
                "wt-display-heading-large-wide": "JoinWorkspace_wt-display-heading-large-wide___q_O9",
                "wt-display-heading": "JoinWorkspace_wt-display-heading__NAcMS",
                "wt-sub-heading": "JoinWorkspace_wt-sub-heading__j4B8Z",
                "wt-text-heading-small-bold-narrow": "JoinWorkspace_wt-text-heading-small-bold-narrow__xTnSc",
                "wt-text-heading-small-bold": "JoinWorkspace_wt-text-heading-small-bold__jfOI1",
                "wt-text-heading-small-bold-wide": "JoinWorkspace_wt-text-heading-small-bold-wide__YAkD0",
                "wt-text-heading-small-narrow": "JoinWorkspace_wt-text-heading-small-narrow__Kom3p",
                "wt-text-heading-small": "JoinWorkspace_wt-text-heading-small__rhMwy",
                "wt-text-heading-small-wide": "JoinWorkspace_wt-text-heading-small-wide___HxF9",
                "wt-text-heading-medium-bold": "JoinWorkspace_wt-text-heading-medium-bold__fUqQd",
                "wt-text-heading-medium-bold-wide": "JoinWorkspace_wt-text-heading-medium-bold-wide__EWanY",
                "wt-text-heading-medium-semi-narrow": "JoinWorkspace_wt-text-heading-medium-semi-narrow__wtmID",
                "wt-text-heading-medium-narrow": "JoinWorkspace_wt-text-heading-medium-narrow__k4rt1",
                "wt-text-heading-medium-semi": "JoinWorkspace_wt-text-heading-medium-semi__ZotM8",
                "wt-text-heading-medium-semi-wide": "JoinWorkspace_wt-text-heading-medium-semi-wide___amNs",
                "wt-text-heading-medium": "JoinWorkspace_wt-text-heading-medium__nSlAK",
                "wt-text-heading-medium-wide": "JoinWorkspace_wt-text-heading-medium-wide___z1iv",
                "wt-text-heading-large-bold-narrow": "JoinWorkspace_wt-text-heading-large-bold-narrow__FDVrz",
                "wt-text-heading-large-bold": "JoinWorkspace_wt-text-heading-large-bold__f3V2P",
                "wt-text-heading-large-bold-wide": "JoinWorkspace_wt-text-heading-large-bold-wide__QUUiL",
                "wt-text-heading-large-narrow": "JoinWorkspace_wt-text-heading-large-narrow__B9RDy",
                "wt-text-heading-large": "JoinWorkspace_wt-text-heading-large__eoU4D",
                "wt-text-heading-large-wide": "JoinWorkspace_wt-text-heading-large-wide__vsfrY",
                "wt-text-heading-x-large-narrow": "JoinWorkspace_wt-text-heading-x-large-narrow__LOjuu",
                "wt-text-heading-x-large": "JoinWorkspace_wt-text-heading-x-large__DXfID",
                "wt-text-heading-x-large-wide": "JoinWorkspace_wt-text-heading-x-large-wide__ngF2h",
                "wt-text-heading": "JoinWorkspace_wt-text-heading__eh_0P",
                "wt-body-x-small-semi": "JoinWorkspace_wt-body-x-small-semi__Skol3",
                "wt-body-x-small": "JoinWorkspace_wt-body-x-small__vfCNU",
                "wt-body-small-bold": "JoinWorkspace_wt-body-small-bold__AKO5l",
                "wt-body-small-semi": "JoinWorkspace_wt-body-small-semi__zgW7g",
                "wt-body-small": "JoinWorkspace_wt-body-small__ppMjt",
                "wt-body-medium-bold": "JoinWorkspace_wt-body-medium-bold__ujZAb",
                "wt-body-medium-semi": "JoinWorkspace_wt-body-medium-semi__Uq5qT",
                "wt-body-medium": "JoinWorkspace_wt-body-medium__qwD99",
                "wt-body-large-bold": "JoinWorkspace_wt-body-large-bold__VU5nX",
                "wt-body-large": "JoinWorkspace_wt-body-large__4k5uy",
                "wt-body-x-large": "JoinWorkspace_wt-body-x-large__hzEGq",
                "wt-label-x-small-bold": "JoinWorkspace_wt-label-x-small-bold__RibI7",
                "wt-label-x-small-semi": "JoinWorkspace_wt-label-x-small-semi__ITpEM",
                "wt-label-x-small": "JoinWorkspace_wt-label-x-small__c4L4k",
                "wt-label-small-bold": "JoinWorkspace_wt-label-small-bold___WhH6",
                "wt-label-small-semi": "JoinWorkspace_wt-label-small-semi__xh1Xf",
                "wt-label-small": "JoinWorkspace_wt-label-small__OzBHm",
                "wt-label-medium-bold": "JoinWorkspace_wt-label-medium-bold__cetI9",
                "wt-label-medium-semi": "JoinWorkspace_wt-label-medium-semi__L9I5y",
                "wt-label-medium": "JoinWorkspace_wt-label-medium__neJnf",
                "wt-label-large-bold": "JoinWorkspace_wt-label-large-bold__19wE9",
                "wt-label-large-semi": "JoinWorkspace_wt-label-large-semi__mJvko",
                "wt-label-large": "JoinWorkspace_wt-label-large__vvLRg",
                email: "JoinWorkspace_email__ai28I"
            }
        },
        60848: (e, l, t) => {
            "use strict";
            t.d(l, {
                Do: () => h,
                Ej: () => r,
                GH: () => _,
                MB: () => u,
                N5: () => m,
                OE: () => d,
                Rg: () => E,
                Rt: () => n,
                Si: () => b,
                UM: () => L,
                WV: () => x,
                Zu: () => f,
                dH: () => p,
                is: () => s,
                mX: () => S,
                q0: () => c,
                vs: () => g,
                w4: () => v,
                w_: () => w,
                yR: () => o,
                zQ: () => y
            });
            var a = t(21462),
                i = t(74067);
            let r = "tier",
                n = "billing",
                s = "coupon",
                d = "paywall",
                o = "paywallId",
                _ = "trigger",
                c = "triggerUrl",
                u = "triggerUrlPath",
                w = "paymentMethod",
                m = "isForBusiness",
                p = "trk",
                g = "startFreeTrial",
                h = "weekliesEnabled",
                y = "seats",
                x = "junoSubscriptionRedirect",
                f = "areNorCheckoutTermsAccepted",
                v = "setup_intent_client_secret",
                b = "priceToken",
                L = "currency",
                E = "transferId",
                S = () => (0, a.useMemo)(() => {
                    let e = (0, i.LT)(),
                        l = e.get(r),
                        t = e.get(n),
                        a = e.get(s),
                        S = e.get(d),
                        C = e.get(o),
                        A = e.get(_),
                        P = e.get(c),
                        T = e.get(u),
                        k = e.get(b),
                        R = e.get(L),
                        I = e.get(E),
                        j = e.get(w),
                        M = "true" === e.get(m),
                        O = "true" === e.get(g),
                        N = "true" === e.get(x),
                        F = e.get(p),
                        U = e.get(y),
                        D = e.get(v),
                        z = "true" === e.get(h),
                        W = "true" === e.get(f);
                    return {
                        billing: null != t ? t : void 0,
                        coupon: null != a ? a : void 0,
                        isForBusiness: M,
                        junoSubscriptionRedirect: N,
                        paymentMethod: null != j ? j : void 0,
                        paywall: null != S ? S : void 0,
                        paywallId: null != C ? C : void 0,
                        seats: null != U ? U : void 0,
                        startFreeTrial: O,
                        tier: null != l ? l : void 0,
                        trigger: A || void 0,
                        triggerUrl: null != P ? P : void 0,
                        triggerUrlPath: null != T ? T : void 0,
                        trk: null != F ? F : void 0,
                        weekliesEnabled: z,
                        setupIntentSecret: null != D ? D : void 0,
                        priceToken: null != k ? k : void 0,
                        currency: R || void 0,
                        areNorCheckoutTermsAccepted: null != W ? W : void 0,
                        transferId: null != I ? I : void 0
                    }
                }, [])
        },
        61149: (e, l, t) => {
            "use strict";
            t.d(l, {
                Sj: () => a,
                Sv: () => r,
                aB: () => c,
                bn: () => _,
                fP: () => n,
                g7: () => i,
                q: () => d,
                tG: () => o,
                tx: () => s
            });
            var a = function(e) {
                return e.AUD = "aud", e.BRL = "brl", e.CAD = "cad", e.DKK = "dkk", e.EUR = "eur", e.GBP = "gbp", e.MXN = "mxn", e.NOK = "nok", e.SEK = "sek", e.USD = "usd", e
            }({});
            let i = new Set(["US", "CA"]),
                r = new Set(["AT", "AU", "BE", "BG", "CH", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FR", "GB", "GR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "NO", "PL", "PT", "RO", "SE", "SI", "SK"]),
                n = {
                    AT: "AT",
                    BE: "BE",
                    BG: "BG",
                    CY: "CY",
                    CZ: "CZ",
                    DE: "DE",
                    DK: "DK",
                    EE: "EE",
                    ES: "ES",
                    FI: "FI",
                    FR: "FR",
                    GB: "GB",
                    GR: "EL",
                    HR: "HR",
                    HU: "HU",
                    IE: "IE",
                    IT: "IT",
                    LT: "LT",
                    LU: "LU",
                    LV: "LV",
                    MT: "MT",
                    NL: "NL",
                    PL: "PL",
                    PT: "PT",
                    RO: "RO",
                    SE: "SE",
                    SI: "SI",
                    SK: "SK"
                };
            var s = function(e) {
                return e.Automatic = "automatic", e.Manual = "manual", e
            }({});
            let d = ["vatNumber", "companyName", "streetAndNumber", "city"],
                o = {
                    EXPRESS_CHECKOUT_ERROR: "EXPRESS_CHECKOUT_ERROR",
                    INVALID_VAT_NUMBER: "INVALID_VAT_NUMBER",
                    PAYMENT_INTENT_AND_SETUP_INTENT_MISSING: "PAYMENT_INTENT_AND_SETUP_INTENT_MISSING",
                    PAYMENT_SETUP_FAILED: "PAYMENT_SETUP_FAILED",
                    UPGRADE_USER_ERROR: "UPGRADE_USER_ERROR",
                    PAYPAL_PAYMENT_FAILED: "PAYPAL_PAYMENT_FAILED",
                    IDEAL_PAYMENT_FAILED: "IDEAL_PAYMENT_FAILED",
                    CREATE_PAID_USER_ERROR: "CREATE_PAID_USER_ERROR",
                    POLL_FOR_SUBSCRIPTION_FAILED: "POLL_FOR_SUBSCRIPTION_FAILED",
                    JUNO_SUBSCRIPTION_CREATION_FAILED: "JUNO_SUBSCRIPTION_CREATION_FAILED",
                    CARD_VERIFICATION_FAILED: "CARD_VERIFICATION_FAILED",
                    SET_MINIMUM_COMMITMENT_SEATS_ERROR: "SET_MINIMUM_COMMITMENT_SEATS_ERROR",
                    NOR_CHECKOUT_CHECKBOX_ERROR: "NOR_CHECKOUT_CHECKBOX_ERROR",
                    NOR_CHECKOUT_POPUP_ERROR: "NOR_CHECKOUT_POPUP_ERROR",
                    EMAIL_ALREADY_EXISTS: "EMAIL_ALREADY_EXISTS",
                    GUEST_TEAM_CREATION_FAILED: "GUEST_TEAM_CREATION_FAILED",
                    GUEST_USER_CREATION_FAILED: "GUEST_USER_CREATION_FAILED",
                    GUEST_AUTHENTICATION_FAILED: "GUEST_AUTHENTICATION_FAILED",
                    PREPAID_CARD_NOT_ALLOWED: "PREPAID_CARD_NOT_ALLOWED"
                };
            class _ extends Error {
                constructor(e, l) {
                    super(e), this.message = e, this.code = l
                }
            }
            class c extends Error {
                constructor(e, l) {
                    super(e), this.message = e, this.code = l
                }
            }
        },
        61360: (e, l, t) => {
            "use strict";

            function a() {
                if ("undefined" != typeof document) return document.querySelector(".app") || void 0
            }
            t.d(l, {
                Y: () => a
            })
        },
        64976: (e, l, t) => {
            "use strict";
            t.d(l, {
                Ay: () => s,
                HM: () => r,
                eJ: () => n
            });
            var a = t(23798);
            t(21462);
            var i = t(15321);
            let r = "up",
                n = "down",
                s = e => {
                    let {
                        className: l,
                        orientation: t = r
                    } = e;
                    return (0, a.jsx)("svg", {
                        className: l,
                        viewBox: "0 0 17 13",
                        children: (0, a.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, a.jsx)("path", {
                                d: "M5.009 3.42V9a1 1 0 1 1-2 0V3.416L1.707 4.718A1 1 0 1 1 .293 3.305L3.3.293a1 1 0 0 1 1.416.001l3 3.012A1 1 0 1 1 6.3 4.717L5.01 3.421z",
                                fill: t === r ? i.$A : i.Id
                            }), (0, a.jsx)("path", {
                                d: "M12 9.58V4a1 1 0 0 1 2 0v5.584l1.301-1.302a1 1 0 1 1 1.415 1.413l-3.009 3.012a1 1 0 0 1-1.415-.001l-3-3.012a1 1 0 1 1 1.416-1.411L12 9.579z",
                                fill: t === n ? i.$A : i.Id
                            })]
                        })
                    })
                }
        },
        65459: e => {
            e.exports = {
                "wt-display-heading-x-small-bold": "FullscreenPaywall_wt-display-heading-x-small-bold__lJe1_",
                "wt-display-heading-small-bold-narrow": "FullscreenPaywall_wt-display-heading-small-bold-narrow__KpztI",
                "wt-display-heading-small-bold": "FullscreenPaywall_wt-display-heading-small-bold__4jfUM",
                "wt-display-heading-small-bold-wide": "FullscreenPaywall_wt-display-heading-small-bold-wide__pCSjF",
                "wt-display-heading-small-narrow": "FullscreenPaywall_wt-display-heading-small-narrow__iKuVL",
                "wt-display-heading-small": "FullscreenPaywall_wt-display-heading-small__Vnvkv",
                "wt-display-heading-small-wide": "FullscreenPaywall_wt-display-heading-small-wide__Jraah",
                "wt-display-heading-medium-bold-narrow": "FullscreenPaywall_wt-display-heading-medium-bold-narrow__rv1Qf",
                "wt-display-heading-medium-bold": "FullscreenPaywall_wt-display-heading-medium-bold__xtPI_",
                title: "FullscreenPaywall_title__zdOVH",
                "wt-display-heading-medium-bold-wide": "FullscreenPaywall_wt-display-heading-medium-bold-wide__8d9WP",
                "wt-display-heading-medium-narrow": "FullscreenPaywall_wt-display-heading-medium-narrow__sMz8r",
                "wt-display-heading-medium": "FullscreenPaywall_wt-display-heading-medium__PvZit",
                "wt-display-heading-medium-wide": "FullscreenPaywall_wt-display-heading-medium-wide__u7p7Y",
                "wt-display-heading-large-bold-narrow": "FullscreenPaywall_wt-display-heading-large-bold-narrow__weepQ",
                "wt-display-heading-large-bold": "FullscreenPaywall_wt-display-heading-large-bold__tRh23",
                "wt-display-heading-large-bold-wide": "FullscreenPaywall_wt-display-heading-large-bold-wide__04o6j",
                "wt-display-heading-large-narrow": "FullscreenPaywall_wt-display-heading-large-narrow__keWpN",
                "wt-display-heading-large": "FullscreenPaywall_wt-display-heading-large___dGHC",
                "wt-display-heading-large-wide": "FullscreenPaywall_wt-display-heading-large-wide__LytDX",
                "wt-display-heading": "FullscreenPaywall_wt-display-heading__lb7yX",
                "wt-sub-heading": "FullscreenPaywall_wt-sub-heading__cQzVk",
                "wt-text-heading-small-bold-narrow": "FullscreenPaywall_wt-text-heading-small-bold-narrow__qdNiB",
                "wt-text-heading-small-bold": "FullscreenPaywall_wt-text-heading-small-bold__oQYU_",
                "wt-text-heading-small-bold-wide": "FullscreenPaywall_wt-text-heading-small-bold-wide__U3x_q",
                "wt-text-heading-small-narrow": "FullscreenPaywall_wt-text-heading-small-narrow__Sp0uc",
                "wt-text-heading-small": "FullscreenPaywall_wt-text-heading-small__wYiC7",
                "wt-text-heading-small-wide": "FullscreenPaywall_wt-text-heading-small-wide___Tetm",
                "wt-text-heading-medium-bold": "FullscreenPaywall_wt-text-heading-medium-bold__5R_6v",
                "wt-text-heading-medium-bold-wide": "FullscreenPaywall_wt-text-heading-medium-bold-wide__jKcuu",
                "wt-text-heading-medium-semi-narrow": "FullscreenPaywall_wt-text-heading-medium-semi-narrow__9P6zz",
                "wt-text-heading-medium-narrow": "FullscreenPaywall_wt-text-heading-medium-narrow__OQ80J",
                "wt-text-heading-medium-semi": "FullscreenPaywall_wt-text-heading-medium-semi__Jm_HQ",
                "wt-text-heading-medium-semi-wide": "FullscreenPaywall_wt-text-heading-medium-semi-wide__XGJtB",
                "wt-text-heading-medium": "FullscreenPaywall_wt-text-heading-medium__ePcS_",
                "wt-text-heading-medium-wide": "FullscreenPaywall_wt-text-heading-medium-wide__pUdn7",
                "wt-text-heading-large-bold-narrow": "FullscreenPaywall_wt-text-heading-large-bold-narrow__dscDR",
                "wt-text-heading-large-bold": "FullscreenPaywall_wt-text-heading-large-bold__B_mCi",
                "wt-text-heading-large-bold-wide": "FullscreenPaywall_wt-text-heading-large-bold-wide__AQ9hM",
                "wt-text-heading-large-narrow": "FullscreenPaywall_wt-text-heading-large-narrow__NU8cx",
                "wt-text-heading-large": "FullscreenPaywall_wt-text-heading-large__7C7j6",
                "wt-text-heading-large-wide": "FullscreenPaywall_wt-text-heading-large-wide__IoWnD",
                "wt-text-heading-x-large-narrow": "FullscreenPaywall_wt-text-heading-x-large-narrow__kx_N_",
                "wt-text-heading-x-large": "FullscreenPaywall_wt-text-heading-x-large__rS36c",
                "wt-text-heading-x-large-wide": "FullscreenPaywall_wt-text-heading-x-large-wide__BiSd8",
                "wt-text-heading": "FullscreenPaywall_wt-text-heading__nrrqA",
                "wt-body-x-small-semi": "FullscreenPaywall_wt-body-x-small-semi__iLTEE",
                "wt-body-x-small": "FullscreenPaywall_wt-body-x-small__72sDY",
                "wt-body-small-bold": "FullscreenPaywall_wt-body-small-bold__4kDzJ",
                highlightTitle: "FullscreenPaywall_highlightTitle__C4htM",
                "wt-body-small-semi": "FullscreenPaywall_wt-body-small-semi___HNyU",
                "wt-body-small": "FullscreenPaywall_wt-body-small__ZApXu",
                buttonsHeader: "FullscreenPaywall_buttonsHeader__bCklw",
                highlightText: "FullscreenPaywall_highlightText__BNhkm",
                "wt-body-medium-bold": "FullscreenPaywall_wt-body-medium-bold__Uq2yy",
                perksTitle: "FullscreenPaywall_perksTitle__hay7k",
                "wt-body-medium-semi": "FullscreenPaywall_wt-body-medium-semi__vvUoT",
                "wt-body-medium": "FullscreenPaywall_wt-body-medium__Aoq6W",
                "wt-body-large-bold": "FullscreenPaywall_wt-body-large-bold__4Pf_5",
                "wt-body-large": "FullscreenPaywall_wt-body-large__rlhwI",
                "wt-body-x-large": "FullscreenPaywall_wt-body-x-large___2epF",
                "wt-label-x-small-bold": "FullscreenPaywall_wt-label-x-small-bold__7hFLs",
                "wt-label-x-small-semi": "FullscreenPaywall_wt-label-x-small-semi__zwDqy",
                "wt-label-x-small": "FullscreenPaywall_wt-label-x-small__V2l7V",
                "wt-label-small-bold": "FullscreenPaywall_wt-label-small-bold__vTTaT",
                "wt-label-small-semi": "FullscreenPaywall_wt-label-small-semi__UpurY",
                "wt-label-small": "FullscreenPaywall_wt-label-small__5kTm9",
                "wt-label-medium-bold": "FullscreenPaywall_wt-label-medium-bold__6l2FU",
                "wt-label-medium-semi": "FullscreenPaywall_wt-label-medium-semi__z7aBe",
                "wt-label-medium": "FullscreenPaywall_wt-label-medium__fPJwi",
                "wt-label-large-bold": "FullscreenPaywall_wt-label-large-bold__GLv7k",
                "wt-label-large-semi": "FullscreenPaywall_wt-label-large-semi__4wZDI",
                "wt-label-large": "FullscreenPaywall_wt-label-large__NE2j6",
                background: "FullscreenPaywall_background__aqO8r",
                backgroundAppear: "FullscreenPaywall_backgroundAppear__TILXF",
                backgroundEnter: "FullscreenPaywall_backgroundEnter__yjKnR",
                backgroundAppearActive: "FullscreenPaywall_backgroundAppearActive__UVqHx",
                backgroundEnterActive: "FullscreenPaywall_backgroundEnterActive__m0xmE",
                paywallContainer: "FullscreenPaywall_paywallContainer__Vt_S8",
                paywall: "FullscreenPaywall_paywall__Jrdat",
                paywallAppear: "FullscreenPaywall_paywallAppear__6eitE",
                paywallEnter: "FullscreenPaywall_paywallEnter__U_eEy",
                paywallExitActive: "FullscreenPaywall_paywallExitActive__5OYh2",
                paywallAppearActive: "FullscreenPaywall_paywallAppearActive__wlOxh",
                paywallEnterActive: "FullscreenPaywall_paywallEnterActive__CzQuS",
                paywallExit: "FullscreenPaywall_paywallExit__i_8xT",
                imageContainer: "FullscreenPaywall_imageContainer__o9enk",
                image: "FullscreenPaywall_image__qsbei",
                content: "FullscreenPaywall_content___vlUX",
                perksContainer: "FullscreenPaywall_perksContainer__I3PZw",
                buttonPrimary: "FullscreenPaywall_buttonPrimary__Oc9Rw",
                buttonCloseRight: "FullscreenPaywall_buttonCloseRight__MD4jR",
                buttonCloseLeft: "FullscreenPaywall_buttonCloseLeft__cQ7cK",
                highlightContainer: "FullscreenPaywall_highlightContainer__BMrvB",
                highlightTextContainer: "FullscreenPaywall_highlightTextContainer__Ez1Us",
                warningIcon: "FullscreenPaywall_warningIcon__ZIsiR",
                buttonSpinner: "FullscreenPaywall_buttonSpinner__2zUnY"
            }
        },
        68499: (e, l, t) => {
            "use strict";
            t.d(l, {
                l: () => o
            });
            var a = t(21462),
                i = t(38169),
                r = t(53123),
                n = t(62760),
                s = t(10995),
                d = t(86781);
            let o = () => {
                let e = (0, i.d4)(d.JV),
                    l = (() => {
                        let {
                            settings: e
                        } = (0, n.k)();
                        return e.is_data_processing_prompt_enabled
                    })(),
                    t = (() => {
                        let e = (() => {
                            let {
                                settings: e
                            } = (0, n.k)();
                            return e.data_processing_prompt_transfers_number_threshold
                        })();
                        return r.A.getWTSent() >= e - 1
                    })(),
                    o = (0, i.d4)(d.dw),
                    {
                        value: _,
                        isLoading: c
                    } = (e => {
                        let l = (0, i.wA)(),
                            [t, r] = (0, a.useState)(!0),
                            [n, d] = (0, a.useState)(null),
                            o = (0, a.useCallback)(async () => {
                                if (!e) {
                                    r(!0), d(null);
                                    return
                                }
                                let {
                                    value: t
                                } = await l(s.A.User.getUserDataProcessingOptIn());
                                d(t), r(!1)
                            }, [l, e]);
                        return (0, a.useEffect)(() => {
                            o()
                        }, [o]), {
                            isLoading: t,
                            value: n
                        }
                    })(e);
                return e && !c && l && null === _ && t && !o
            }
        },
        68849: (e, l, t) => {
            "use strict";
            t.d(l, {
                JF: () => ed,
                JM: () => m,
                Lh: () => v,
                vL: () => ee,
                Ol: () => w,
                nH: () => $,
                GK: () => et
            });
            var a = t(12130);
            let i = "019a7cff-b87a-796e-89ea-cd16a2434ba7".concat((0, a.R6)() ? "" : "-test");
            var r = function(e) {
                return e.STRICTLY_NECESSARY = "C0001", e.PERFORMANCE = "C0002", e.FUNCTIONAL = "C0003", e.TARGETING = "C0004", e.SOCIAL_MEDIA = "C0005", e
            }({});
            let n = "OptanonConsent",
                s = "OptanonAlertBoxClosed";
            var d = t(87963),
                o = t(72590),
                _ = t(74736);
            let c = ["eupubconsent-v2", "euconsent-v2", "IABTCF_TCString"],
                u = {
                    STORE_ACCESS_INFO: 1,
                    CREATE_AD_PROFILE: 3,
                    SELECT_PERSONALIZED_ADS: 4,
                    MEASURE_AD_PERFORMANCE: 7
                },
                w = () => "function" == typeof window.__tcfapi || "undefined" != typeof document && c.some(e => document.cookie.includes("".concat(e, "="))),
                m = () => {
                    if ("undefined" != typeof document)
                        for (let e of c) {
                            let l = document.cookie.match(new RegExp("(?:^|;\\s*)".concat(e, "=([^;]+)")));
                            if (null == l ? void 0 : l[1]) return decodeURIComponent(l[1])
                        }
                },
                p = e => {
                    try {
                        return _.TCString.decode(e)
                    } catch (e) {
                        return
                    }
                },
                g = () => {
                    let e = m();
                    if (!e) return !1;
                    let l = p(e);
                    return !!l && [u.STORE_ACCESS_INFO, u.CREATE_AD_PROFILE, u.SELECT_PERSONALIZED_ADS, u.MEASURE_AD_PERFORMANCE].every(e => l.purposeConsents.has(e))
                },
                h = "onetrust_banner_id";

            function y() {
                var e;
                return {
                    bannerId: null != (e = function() {
                        try {
                            if ("undefined" == typeof sessionStorage) return null;
                            return sessionStorage.getItem(h)
                        } catch (e) {
                            return null
                        }
                    }()) ? e : "",
                    isTCF: w()
                }
            }
            let x = {
                bannerShown: () => ({
                    kind: "onetrust_banner_shown",
                    info: {
                        bannerId: function() {
                            let e = (0, o.A)();
                            try {
                                "undefined" != typeof sessionStorage && sessionStorage.setItem(h, e)
                            } catch (e) {}
                            return e
                        }(),
                        isTCF: w()
                    }
                }),
                bannerDismissed: () => ({
                    kind: "onetrust_banner_dismissed",
                    info: y()
                }),
                allCookiesAccepted: () => ({
                    kind: "onetrust_all_cookies_accepted",
                    info: y()
                }),
                allCookiesRejected: () => ({
                    kind: "onetrust_all_cookies_rejected",
                    info: y()
                }),
                saveButtonClicked: e => ({
                    kind: "onetrust_save_button_clicked",
                    info: {
                        ...y(),
                        ...e
                    }
                }),
                preferencesButtonClicked: () => ({
                    kind: "onetrust_preferences_button_clicked",
                    info: y()
                }),
                trackersAccepted: e => ({
                    kind: "onetrust_trackers_accepted",
                    info: {
                        ...y(),
                        ...e
                    }
                }),
                trackersDeclined: () => ({
                    kind: "onetrust_trackers_declined",
                    info: y()
                }),
                implicitConsentGranted: e => ({
                    kind: "onetrust_implicit_consent_granted",
                    info: {
                        ...y(),
                        source: e
                    }
                }),
                consentRetriggered: () => ({
                    kind: "onetrust_consent_retriggered",
                    info: y()
                })
            };

            function f() {
                if ("undefined" == typeof document) return !1;
                let e = document.querySelector("#onetrust-banner-sdk");
                if (!e) return !1;
                let l = window.getComputedStyle(e);
                return "none" !== l.display && "hidden" !== l.visibility
            }

            function v() {
                let e = Q(),
                    l = g();
                return w() ? e && l : e
            }
            var b = t(26465),
                L = t(30631);
            let E = {
                    SDK_INITIALIZED: "onetrust-sdk-initialized",
                    BANNER_SHOWN: "onetrust-banner-shown",
                    CONSENT_UPDATED: "onetrust-consent-updated"
                },
                S = !1,
                C = !1,
                A = null,
                P = null;

            function T() {
                if (P) {
                    var e = P;
                    let l = function() {
                            let e = Q(),
                                l = g(),
                                t = J(),
                                a = m();
                            return {
                                hasConsent: w() ? e && l : e,
                                activeGroups: t,
                                tcString: a
                            }
                        }(),
                        t = function() {
                            let e = J(),
                                l = e.includes(r.PERFORMANCE),
                                t = e.includes(r.FUNCTIONAL),
                                a = e.includes(r.TARGETING),
                                i = [];
                            if (w()) {
                                let e = m();
                                if (e) {
                                    let l = p(e);
                                    l && (i = Array.from(l.purposeConsents).filter(e => {
                                        let [, l] = e;
                                        return l
                                    }).map(e => {
                                        let [l] = e;
                                        return String(l)
                                    }))
                                }
                            }
                            return {
                                analyticsActive: l,
                                functionalActive: t,
                                targetingActive: a,
                                tcfPurposesAccepted: i
                            }
                        }();
                    "accept_all" === e ? (0, d.Od)().trackUserAction(x.allCookiesAccepted()) : "reject_all" === e ? (0, d.Od)().trackUserAction(x.allCookiesRejected()) : "save_preferences" === e && (0, d.Od)().trackUserAction(x.saveButtonClicked(t)), l.hasConsent ? (0, d.Od)().trackUserAction(x.trackersAccepted(t)) : (0, d.Od)().trackUserAction(x.trackersDeclined()), b.L.addAction(E.CONSENT_UPDATED, {
                        method: e,
                        isTCF: w(),
                        ...l,
                        ...t
                    }), P = null, C = !1
                }
            }
            var k = function(e) {
                return e.ConsentChanged = "consent.onetrust", e.BannerLoaded = "OneTrustBannerLoaded", e.PreferenceCenterOpened = "OneTrustPCLoaded", e.PreferenceCenterClosed = "OneTrustPCClosed", e
            }({});
            let R = !1,
                I = !1,
                j = null,
                M = null;

            function O() {
                return "undefined" != typeof document && document.cookie.includes(s)
            }

            function N(e) {
                I || (I = !0, j && (clearTimeout(j), j = null), M && (M.disconnect(), M = null), "timeout" === e && function() {
                    if ("undefined" == typeof document) return;
                    let e = new Date;
                    e.setDate(e.getDate() + 365);
                    let l = new Date().toISOString();
                    document.cookie = "".concat(s, "=").concat(l, "; expires=").concat(e.toUTCString(), "; path=/; SameSite=Lax")
                }(), P = "implicit_consent", window.dispatchEvent(new CustomEvent(k.ConsentChanged)), (0, d.Od)().trackUserAction(x.implicitConsentGranted(e)))
            }

            function F(e) {
                e.target.closest(".onetrust-close-btn-ui") && N("close_button")
            }

            function U() {
                j || I || (j = setTimeout(() => {
                    I || O() || N("timeout")
                }, 1e4))
            }
            let D = "onetrust-overlay-visible",
                z = !1,
                W = null,
                B = null,
                H = [],
                V = () => {
                    f() ? document.documentElement.classList.add(D) : document.documentElement.classList.remove(D)
                },
                Z = () => {
                    let e = setTimeout(() => {
                        H = H.filter(l => l !== e), V()
                    }, 100);
                    H.push(e)
                },
                q = !1,
                G = null,
                K = () => {
                    "undefined" != typeof document && document.documentElement.classList.toggle("onetrust-tcf", w())
                },
                Y = (e, l) => {
                    let t = e.match(new RegExp("".concat(l, "=([^&]+)")));
                    if (!(null == t ? void 0 : t[1])) return [];
                    let a = [];
                    for (let e of t[1].split(",")) {
                        let [l, t] = e.split(":");
                        l && "1" === t && a.push(l)
                    }
                    return a
                },
                J = () => (() => {
                    if ("undefined" == typeof document) return {
                        activeGroups: [],
                        activeVendors: []
                    };
                    let e = document.cookie.match(new RegExp("(?:^|;\\s*)".concat(n, "=([^;]+)")));
                    if (!(null == e ? void 0 : e[1])) return {
                        activeGroups: [],
                        activeVendors: []
                    };
                    let l = decodeURIComponent(e[1]);
                    return {
                        activeGroups: Y(l, "groups"),
                        activeVendors: Y(l, "genVendors")
                    }
                })().activeGroups,
                X = () => {
                    if ("undefined" == typeof document) return !1;
                    let e = document.cookie.match(new RegExp("(?:^|;\\s*)".concat(n, "=([^;]+)")));
                    return !!(null == e ? void 0 : e[1]) && decodeURIComponent(e[1]).includes("AwaitingReconsent=true")
                },
                Q = () => {
                    let e = J().includes(r.TARGETING);
                    return w() ? e && !X() : e && (!!O() || I)
                },
                $ = e => (window.addEventListener(k.ConsentChanged, e), () => {
                    window.removeEventListener(k.ConsentChanged, e)
                }),
                ee = () => G || (q && window.OneTrust ? Promise.resolve() : (q = !0, G = new Promise(e => {
                    if (!i) return void e();
                    K();
                    let l = setTimeout(() => {
                        e()
                    }, 5e3);
                    (e => {
                        let l = window.OptanonWrapper;
                        window.OptanonWrapper = () => {
                            l && l(), e()
                        }
                    })(() => {
                        clearTimeout(l), K(), S || (S = !0, b.L.addAction(E.SDK_INITIALIZED, {
                                timestamp: Date.now()
                            }), function() {
                                if ("undefined" == typeof document) return;
                                let e = () => {
                                    let e = document.getElementById("onetrust-banner-sdk");
                                    if (e && !C) {
                                        let t = window.getComputedStyle(e);
                                        if ("none" !== t.display && "hidden" !== t.visibility) {
                                            var l;
                                            return C = !0, l = X(), (0, d.Od)().trackUserAction(x.bannerShown()), l && (0, d.Od)().trackUserAction(x.consentRetriggered()), b.L.addAction(E.BANNER_SHOWN, {
                                                isMobile: L.Ay.isMobile,
                                                isRetriggered: l
                                            }), !0
                                        }
                                    }
                                    return !1
                                };
                                e() || (A = new MutationObserver(() => {
                                    if (C) {
                                        null == A || A.disconnect();
                                        return
                                    }
                                    e()
                                })).observe(document.body, {
                                    childList: !0,
                                    subtree: !0,
                                    attributes: !0,
                                    attributeFilter: ["style", "class"]
                                })
                            }(), "undefined" != typeof document && document.addEventListener("click", e => {
                                let l = e.target;
                                if (!l) return;
                                let t = l.closest("button");
                                switch ((null == t ? void 0 : t.id) || l.id) {
                                    case "onetrust-accept-btn-handler":
                                    case "accept-recommended-btn-handler":
                                        P = "accept_all";
                                        break;
                                    case "onetrust-reject-all-handler":
                                        P = "reject_all";
                                        break;
                                    default:
                                        (null == t ? void 0 : t.classList.contains("ot-pc-refuse-all-handler")) ? P = "reject_all": (null == t ? void 0 : t.classList.contains("onetrust-close-btn-ui")) ? (0, d.Od)().trackUserAction(x.bannerDismissed()) : ((null == t ? void 0 : t.classList.contains("save-preference-btn-handler")) || (null == t ? void 0 : t.classList.contains("onetrust-close-btn-handler"))) && (P = "save_preferences")
                                }
                            }, {
                                capture: !0
                            }), $(T)),
                            function() {
                                if (!R) !w() && (O() || (R = !0, document.addEventListener("click", F, {
                                    capture: !0
                                }), function() {
                                    if ("undefined" != typeof document) {
                                        if (f()) return U();
                                        (M = new MutationObserver(() => {
                                            f() && (U(), null == M || M.disconnect())
                                        })).observe(document.body, {
                                            childList: !0,
                                            subtree: !0,
                                            attributes: !0,
                                            attributeFilter: ["style", "class"]
                                        })
                                    }
                                }()))
                            }(), !z && w() && (z = !0, "undefined" != typeof document && (V(), new MutationObserver(() => {
                                V()
                            }).observe(document.body, {
                                childList: !0,
                                subtree: !0,
                                attributes: !0,
                                attributeFilter: ["style", "class"]
                            })), W = () => {
                                Z()
                            }, B = () => {
                                Z()
                            }, window.addEventListener(k.ConsentChanged, W), window.addEventListener(k.PreferenceCenterClosed, B)), e()
                    }), new Promise((e, l) => {
                        if (window.OneTrust || !i) return void e();
                        let t = (() => {
                            let e = document.createElement("script");
                            e.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", e.type = "text/javascript", e.setAttribute("data-domain-script", i);
                            let l = (() => {
                                if ("undefined" == typeof document) return "en";
                                try {
                                    let e = document.cookie.match(new RegExp("(?:^|;\\s*)".concat("wt_lang", "=([^;]+)")));
                                    if (!(null == e ? void 0 : e[1])) return "en";
                                    return decodeURIComponent(e[1]).toLowerCase().split("-")[0] || "en"
                                } catch (e) {
                                    return "en"
                                }
                            })();
                            return e.setAttribute("data-language", l), e
                        })();
                        t.onload = () => {
                            e()
                        }, t.onerror = () => {
                            l(Error("[OneTrust] Failed to load SDK script"))
                        }, (document.head || document.getElementsByTagName("head")[0]).appendChild(t)
                    }).catch(() => {
                        clearTimeout(l), e()
                    })
                })));
            var el = t(21462);
            let et = () => {
                let [e, l] = (0, el.useState)(() => ({
                    hasProfilingConsent: Q(),
                    hasTCFConsent: g(),
                    isTCFActive: w()
                })), t = (0, el.useCallback)(() => {
                    l({
                        hasProfilingConsent: Q(),
                        hasTCFConsent: g(),
                        isTCFActive: w()
                    })
                }, []);
                return (0, el.useEffect)(() => {
                    t();
                    let e = () => {
                        t()
                    };
                    return window.addEventListener(k.ConsentChanged, e), window.addEventListener(k.BannerLoaded, e), () => {
                        window.removeEventListener(k.ConsentChanged, e), window.removeEventListener(k.BannerLoaded, e)
                    }
                }, [t]), (0, el.useMemo)(() => e.isTCFActive ? e.hasProfilingConsent && e.hasTCFConsent : e.hasProfilingConsent, [e])
            };
            var ea = t(23798),
                ei = t(75546),
                er = t(97116),
                en = t(15218),
                es = t.n(en);
            let ed = e => {
                let {
                    onPreferencesUpdate: l
                } = e, {
                    t
                } = (0, ei.Bd)(), a = (0, el.useCallback)(() => {
                    window.OneTrust && ((() => {
                        if (window.OneTrust) {
                            var e;
                            null == (e = window.OneTrust) || e.ToggleInfoDisplay()
                        }
                    })(), (0, d.Od)().trackUserAction(x.preferencesButtonClicked()))
                }, []);
                return (0, el.useEffect)(() => $(() => {
                    l()
                }), [l]), (0, ea.jsx)("div", {
                    className: es().container,
                    children: (0, ea.jsxs)("div", {
                        children: [(0, ea.jsx)("h2", {
                            className: es().title,
                            children: t("page.cookies.manage.title")
                        }), (0, ea.jsx)("p", {
                            className: es().description,
                            children: t("page.cookies.manage.description")
                        }), (0, ea.jsx)(er.$, {
                            as: "button",
                            type: "button",
                            appearance: "primary",
                            className: es().button,
                            onClick: a,
                            children: t("page.cookies.manage.button")
                        })]
                    })
                })
            }
        },
        69769: (e, l, t) => {
            "use strict";
            t.d(l, {
                H: () => o
            });
            var a = t(38169),
                i = t(49944),
                r = t(25330),
                n = t(78694),
                s = t(24282),
                d = t(86781);

            function o() {
                var e, l, t, o, _, c;
                let u = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    w = !(0, a.d4)(d.R2),
                    m = (0, s.g)(),
                    {
                        entitlements: p
                    } = (0, i.o)({
                        ignoreChannel: u
                    }),
                    g = p[n.Z.TRANSFER_SIZE_LIMIT];
                (0, r.A)(g, p, n.Z.TRANSFER_SIZE_LIMIT);
                let h = null != (_ = null == g || null == (l = g.rule) || null == (e = l.counter) ? void 0 : e.unlimited) && _,
                    y = h ? 1 / 0 : null != (c = null == g || null == (o = g.rule) || null == (t = o.counter) ? void 0 : t.value) ? c : 0xc0000000;
                return w && m && (y = 0x1900000000), {
                    quota: y,
                    isLimitReached: e => e >= y && !h,
                    unlimited: h
                }
            }
        },
        69887: e => {
            e.exports = {
                "wt-display-heading-x-small-bold": "UpgradeSubscriptionModal_wt-display-heading-x-small-bold___B_LP",
                "wt-display-heading-small-bold-narrow": "UpgradeSubscriptionModal_wt-display-heading-small-bold-narrow__ZI4oE",
                "wt-display-heading-small-bold": "UpgradeSubscriptionModal_wt-display-heading-small-bold__EPATq",
                "wt-display-heading-small-bold-wide": "UpgradeSubscriptionModal_wt-display-heading-small-bold-wide__oThIx",
                "wt-display-heading-small-narrow": "UpgradeSubscriptionModal_wt-display-heading-small-narrow__ZvADF",
                "wt-display-heading-small": "UpgradeSubscriptionModal_wt-display-heading-small__1ecyJ",
                "wt-display-heading-small-wide": "UpgradeSubscriptionModal_wt-display-heading-small-wide__NpbV3",
                "wt-display-heading-medium-bold-narrow": "UpgradeSubscriptionModal_wt-display-heading-medium-bold-narrow__KkBhQ",
                "wt-display-heading-medium-bold": "UpgradeSubscriptionModal_wt-display-heading-medium-bold__4tIjs",
                "wt-display-heading-medium-bold-wide": "UpgradeSubscriptionModal_wt-display-heading-medium-bold-wide__TK_EM",
                "wt-display-heading-medium-narrow": "UpgradeSubscriptionModal_wt-display-heading-medium-narrow__Ig5vm",
                "wt-display-heading-medium": "UpgradeSubscriptionModal_wt-display-heading-medium__FYQoE",
                "wt-display-heading-medium-wide": "UpgradeSubscriptionModal_wt-display-heading-medium-wide__Ue1E6",
                "wt-display-heading-large-bold-narrow": "UpgradeSubscriptionModal_wt-display-heading-large-bold-narrow__ABeaP",
                "wt-display-heading-large-bold": "UpgradeSubscriptionModal_wt-display-heading-large-bold__fibgk",
                "wt-display-heading-large-bold-wide": "UpgradeSubscriptionModal_wt-display-heading-large-bold-wide__Z4a_H",
                "wt-display-heading-large-narrow": "UpgradeSubscriptionModal_wt-display-heading-large-narrow__XnMKI",
                "wt-display-heading-large": "UpgradeSubscriptionModal_wt-display-heading-large__ovbzC",
                "wt-display-heading-large-wide": "UpgradeSubscriptionModal_wt-display-heading-large-wide__UqHVE",
                "wt-display-heading": "UpgradeSubscriptionModal_wt-display-heading__KWVJF",
                "wt-sub-heading": "UpgradeSubscriptionModal_wt-sub-heading__QYZ4o",
                "wt-text-heading-small-bold-narrow": "UpgradeSubscriptionModal_wt-text-heading-small-bold-narrow__j_HY_",
                "wt-text-heading-small-bold": "UpgradeSubscriptionModal_wt-text-heading-small-bold__TQhfb",
                modalTitle: "UpgradeSubscriptionModal_modalTitle__RPqtn",
                "wt-text-heading-small-bold-wide": "UpgradeSubscriptionModal_wt-text-heading-small-bold-wide__Y3Rhk",
                "wt-text-heading-small-narrow": "UpgradeSubscriptionModal_wt-text-heading-small-narrow__cNWyv",
                "wt-text-heading-small": "UpgradeSubscriptionModal_wt-text-heading-small__cuKII",
                "wt-text-heading-small-wide": "UpgradeSubscriptionModal_wt-text-heading-small-wide__bTpfC",
                "wt-text-heading-medium-bold": "UpgradeSubscriptionModal_wt-text-heading-medium-bold__H94G_",
                "wt-text-heading-medium-bold-wide": "UpgradeSubscriptionModal_wt-text-heading-medium-bold-wide__Rs3CQ",
                "wt-text-heading-medium-semi-narrow": "UpgradeSubscriptionModal_wt-text-heading-medium-semi-narrow__9LIE4",
                "wt-text-heading-medium-narrow": "UpgradeSubscriptionModal_wt-text-heading-medium-narrow__cTh83",
                "wt-text-heading-medium-semi": "UpgradeSubscriptionModal_wt-text-heading-medium-semi__CejCo",
                "wt-text-heading-medium-semi-wide": "UpgradeSubscriptionModal_wt-text-heading-medium-semi-wide__8iPPl",
                "wt-text-heading-medium": "UpgradeSubscriptionModal_wt-text-heading-medium__F7rXD",
                "wt-text-heading-medium-wide": "UpgradeSubscriptionModal_wt-text-heading-medium-wide__wQQoZ",
                "wt-text-heading-large-bold-narrow": "UpgradeSubscriptionModal_wt-text-heading-large-bold-narrow__t1Bqn",
                "wt-text-heading-large-bold": "UpgradeSubscriptionModal_wt-text-heading-large-bold__zirjV",
                "wt-text-heading-large-bold-wide": "UpgradeSubscriptionModal_wt-text-heading-large-bold-wide__qeOca",
                "wt-text-heading-large-narrow": "UpgradeSubscriptionModal_wt-text-heading-large-narrow__Kn_AQ",
                "wt-text-heading-large": "UpgradeSubscriptionModal_wt-text-heading-large__pfPlG",
                "wt-text-heading-large-wide": "UpgradeSubscriptionModal_wt-text-heading-large-wide__x5sl0",
                "wt-text-heading-x-large-narrow": "UpgradeSubscriptionModal_wt-text-heading-x-large-narrow__nDoWN",
                "wt-text-heading-x-large": "UpgradeSubscriptionModal_wt-text-heading-x-large__Z40dN",
                "wt-text-heading-x-large-wide": "UpgradeSubscriptionModal_wt-text-heading-x-large-wide__6_5V2",
                "wt-text-heading": "UpgradeSubscriptionModal_wt-text-heading__2ScuK",
                "wt-body-x-small-semi": "UpgradeSubscriptionModal_wt-body-x-small-semi__PxfQS",
                "wt-body-x-small": "UpgradeSubscriptionModal_wt-body-x-small__wJqYk",
                "wt-body-small-bold": "UpgradeSubscriptionModal_wt-body-small-bold__ZuRES",
                "wt-body-small-semi": "UpgradeSubscriptionModal_wt-body-small-semi__0_Wpy",
                "wt-body-small": "UpgradeSubscriptionModal_wt-body-small__gmzty",
                terms: "UpgradeSubscriptionModal_terms__dWoEY",
                disclaimer: "UpgradeSubscriptionModal_disclaimer__ssVv9",
                "wt-body-medium-bold": "UpgradeSubscriptionModal_wt-body-medium-bold__osmb_",
                planInfo: "UpgradeSubscriptionModal_planInfo__q_VM3",
                discountAmount: "UpgradeSubscriptionModal_discountAmount__9yLr5",
                planInfoPrice: "UpgradeSubscriptionModal_planInfoPrice__YM77T",
                "wt-body-medium-semi": "UpgradeSubscriptionModal_wt-body-medium-semi__smhZ6",
                "wt-body-medium": "UpgradeSubscriptionModal_wt-body-medium__DoW45",
                listItem: "UpgradeSubscriptionModal_listItem__PPpA1",
                areYouSure: "UpgradeSubscriptionModal_areYouSure__QwL5g",
                planSummary: "UpgradeSubscriptionModal_planSummary__uGITh",
                discountTitle: "UpgradeSubscriptionModal_discountTitle__i1HDH",
                tooltip: "UpgradeSubscriptionModal_tooltip__VCjX_",
                creditTitle: "UpgradeSubscriptionModal_creditTitle__uFuSq",
                planInfoTitle: "UpgradeSubscriptionModal_planInfoTitle__QltAt",
                subtitle: "UpgradeSubscriptionModal_subtitle__e8M1G",
                "wt-body-large-bold": "UpgradeSubscriptionModal_wt-body-large-bold__blFbI",
                "wt-body-large": "UpgradeSubscriptionModal_wt-body-large__cNSRV",
                "wt-body-x-large": "UpgradeSubscriptionModal_wt-body-x-large__4L6BQ",
                "wt-label-x-small-bold": "UpgradeSubscriptionModal_wt-label-x-small-bold__9dSms",
                "wt-label-x-small-semi": "UpgradeSubscriptionModal_wt-label-x-small-semi__WjAUb",
                "wt-label-x-small": "UpgradeSubscriptionModal_wt-label-x-small__aEtZr",
                "wt-label-small-bold": "UpgradeSubscriptionModal_wt-label-small-bold__gqSMQ",
                "wt-label-small-semi": "UpgradeSubscriptionModal_wt-label-small-semi__QAHkR",
                "wt-label-small": "UpgradeSubscriptionModal_wt-label-small__0IoxA",
                "wt-label-medium-bold": "UpgradeSubscriptionModal_wt-label-medium-bold__2Cz_E",
                "wt-label-medium-semi": "UpgradeSubscriptionModal_wt-label-medium-semi__lBfh5",
                "wt-label-medium": "UpgradeSubscriptionModal_wt-label-medium__gjQ14",
                "wt-label-large-bold": "UpgradeSubscriptionModal_wt-label-large-bold__tX9qG",
                "wt-label-large-semi": "UpgradeSubscriptionModal_wt-label-large-semi__UI2H_",
                "wt-label-large": "UpgradeSubscriptionModal_wt-label-large__ltVwI",
                modalDetails: "UpgradeSubscriptionModal_modalDetails__Rguvx",
                pendingDowngrade: "UpgradeSubscriptionModal_pendingDowngrade__75Rpr",
                tooltipContainer: "UpgradeSubscriptionModal_tooltipContainer__RP0fV",
                tooltipText: "UpgradeSubscriptionModal_tooltipText__9HIQF",
                ctaContainer: "UpgradeSubscriptionModal_ctaContainer__mU9su",
                payButton: "UpgradeSubscriptionModal_payButton__X3_CP",
                seperator: "UpgradeSubscriptionModal_seperator__dnacZ",
                areYouSureText: "UpgradeSubscriptionModal_areYouSureText__eAGzm",
                check: "UpgradeSubscriptionModal_check__zDUjR",
                "text-placeholder": "UpgradeSubscriptionModal_text-placeholder__68RLA",
                "loading-pulse": "UpgradeSubscriptionModal_loading-pulse__8Hxjj",
                "pending-background": "UpgradeSubscriptionModal_pending-background__vy28G"
            }
        },
        70939: e => {
            e.exports = {
                "wt-display-heading-x-small-bold": "FullscreenPaywall_wt-display-heading-x-small-bold__oBsZU",
                "wt-display-heading-small-bold-narrow": "FullscreenPaywall_wt-display-heading-small-bold-narrow__KHk8e",
                "wt-display-heading-small-bold": "FullscreenPaywall_wt-display-heading-small-bold__CwDTb",
                "wt-display-heading-small-bold-wide": "FullscreenPaywall_wt-display-heading-small-bold-wide__FauHx",
                "wt-display-heading-small-narrow": "FullscreenPaywall_wt-display-heading-small-narrow__rSP_V",
                "wt-display-heading-small": "FullscreenPaywall_wt-display-heading-small__SRrW_",
                "wt-display-heading-small-wide": "FullscreenPaywall_wt-display-heading-small-wide__rAQmo",
                "wt-display-heading-medium-bold-narrow": "FullscreenPaywall_wt-display-heading-medium-bold-narrow__bY_3v",
                "wt-display-heading-medium-bold": "FullscreenPaywall_wt-display-heading-medium-bold__uBsq3",
                title: "FullscreenPaywall_title__jbKwX",
                "wt-display-heading-medium-bold-wide": "FullscreenPaywall_wt-display-heading-medium-bold-wide__5Ww4r",
                "wt-display-heading-medium-narrow": "FullscreenPaywall_wt-display-heading-medium-narrow__5VKw2",
                "wt-display-heading-medium": "FullscreenPaywall_wt-display-heading-medium__8h2Hs",
                "wt-display-heading-medium-wide": "FullscreenPaywall_wt-display-heading-medium-wide__wKn6k",
                "wt-display-heading-large-bold-narrow": "FullscreenPaywall_wt-display-heading-large-bold-narrow__nA071",
                "wt-display-heading-large-bold": "FullscreenPaywall_wt-display-heading-large-bold__ftpOv",
                "wt-display-heading-large-bold-wide": "FullscreenPaywall_wt-display-heading-large-bold-wide__2JVRo",
                "wt-display-heading-large-narrow": "FullscreenPaywall_wt-display-heading-large-narrow__wsbC3",
                "wt-display-heading-large": "FullscreenPaywall_wt-display-heading-large__S9rxB",
                "wt-display-heading-large-wide": "FullscreenPaywall_wt-display-heading-large-wide__5k7hy",
                "wt-display-heading": "FullscreenPaywall_wt-display-heading__V5Rqj",
                "wt-sub-heading": "FullscreenPaywall_wt-sub-heading__KxZy0",
                "wt-text-heading-small-bold-narrow": "FullscreenPaywall_wt-text-heading-small-bold-narrow__CNht3",
                "wt-text-heading-small-bold": "FullscreenPaywall_wt-text-heading-small-bold__vOGSq",
                "wt-text-heading-small-bold-wide": "FullscreenPaywall_wt-text-heading-small-bold-wide__afr0Q",
                "wt-text-heading-small-narrow": "FullscreenPaywall_wt-text-heading-small-narrow__DnU0j",
                "wt-text-heading-small": "FullscreenPaywall_wt-text-heading-small__puw4u",
                "wt-text-heading-small-wide": "FullscreenPaywall_wt-text-heading-small-wide__IVcno",
                "wt-text-heading-medium-bold": "FullscreenPaywall_wt-text-heading-medium-bold__qjita",
                "wt-text-heading-medium-bold-wide": "FullscreenPaywall_wt-text-heading-medium-bold-wide__xt_Yb",
                "wt-text-heading-medium-semi-narrow": "FullscreenPaywall_wt-text-heading-medium-semi-narrow__mmYLc",
                "wt-text-heading-medium-narrow": "FullscreenPaywall_wt-text-heading-medium-narrow__07bSY",
                "wt-text-heading-medium-semi": "FullscreenPaywall_wt-text-heading-medium-semi__oG1OD",
                "wt-text-heading-medium-semi-wide": "FullscreenPaywall_wt-text-heading-medium-semi-wide__O4PdP",
                "wt-text-heading-medium": "FullscreenPaywall_wt-text-heading-medium__QcR0N",
                "wt-text-heading-medium-wide": "FullscreenPaywall_wt-text-heading-medium-wide__Nv2aF",
                "wt-text-heading-large-bold-narrow": "FullscreenPaywall_wt-text-heading-large-bold-narrow__I5IZ1",
                "wt-text-heading-large-bold": "FullscreenPaywall_wt-text-heading-large-bold__iwgQq",
                "wt-text-heading-large-bold-wide": "FullscreenPaywall_wt-text-heading-large-bold-wide__e6N1_",
                "wt-text-heading-large-narrow": "FullscreenPaywall_wt-text-heading-large-narrow__D9pm8",
                "wt-text-heading-large": "FullscreenPaywall_wt-text-heading-large__5Dv4G",
                "wt-text-heading-large-wide": "FullscreenPaywall_wt-text-heading-large-wide__0gx3W",
                "wt-text-heading-x-large-narrow": "FullscreenPaywall_wt-text-heading-x-large-narrow__yv7PL",
                "wt-text-heading-x-large": "FullscreenPaywall_wt-text-heading-x-large__GVOmH",
                "wt-text-heading-x-large-wide": "FullscreenPaywall_wt-text-heading-x-large-wide__pRjtI",
                "wt-text-heading": "FullscreenPaywall_wt-text-heading__exHYo",
                "wt-body-x-small-semi": "FullscreenPaywall_wt-body-x-small-semi__4awbb",
                "wt-body-x-small": "FullscreenPaywall_wt-body-x-small__XJvy_",
                "wt-body-small-bold": "FullscreenPaywall_wt-body-small-bold__BYd7g",
                "wt-body-small-semi": "FullscreenPaywall_wt-body-small-semi__Q7CJY",
                "wt-body-small": "FullscreenPaywall_wt-body-small__of1mn",
                buttonsHeader: "FullscreenPaywall_buttonsHeader__wVTt2",
                "wt-body-medium-bold": "FullscreenPaywall_wt-body-medium-bold___BW5k",
                "wt-body-medium-semi": "FullscreenPaywall_wt-body-medium-semi__QdhWF",
                "wt-body-medium": "FullscreenPaywall_wt-body-medium__694Uq",
                "wt-body-large-bold": "FullscreenPaywall_wt-body-large-bold__sZPvc",
                "wt-body-large": "FullscreenPaywall_wt-body-large__3VvHv",
                "wt-body-x-large": "FullscreenPaywall_wt-body-x-large__IooA0",
                "wt-label-x-small-bold": "FullscreenPaywall_wt-label-x-small-bold__I57N_",
                "wt-label-x-small-semi": "FullscreenPaywall_wt-label-x-small-semi__LDAGH",
                "wt-label-x-small": "FullscreenPaywall_wt-label-x-small__yH3fT",
                "wt-label-small-bold": "FullscreenPaywall_wt-label-small-bold__ypGK6",
                "wt-label-small-semi": "FullscreenPaywall_wt-label-small-semi__gyyxD",
                "wt-label-small": "FullscreenPaywall_wt-label-small__Gw3a3",
                "wt-label-medium-bold": "FullscreenPaywall_wt-label-medium-bold__TE_Gc",
                "wt-label-medium-semi": "FullscreenPaywall_wt-label-medium-semi__o24_j",
                "wt-label-medium": "FullscreenPaywall_wt-label-medium__ybZGh",
                "wt-label-large-bold": "FullscreenPaywall_wt-label-large-bold__PjkZL",
                "wt-label-large-semi": "FullscreenPaywall_wt-label-large-semi__ji_kf",
                "wt-label-large": "FullscreenPaywall_wt-label-large__VJZ_u",
                background: "FullscreenPaywall_background__FaiMv",
                backgroundAppear: "FullscreenPaywall_backgroundAppear__vnU3V",
                backgroundEnter: "FullscreenPaywall_backgroundEnter__FAYSd",
                backgroundAppearActive: "FullscreenPaywall_backgroundAppearActive__zki20",
                backgroundEnterActive: "FullscreenPaywall_backgroundEnterActive__mr1Ry",
                paywallContainer: "FullscreenPaywall_paywallContainer__WD1Lf",
                paywall: "FullscreenPaywall_paywall__b0rnG",
                paywallAppear: "FullscreenPaywall_paywallAppear__O9_zP",
                paywallEnter: "FullscreenPaywall_paywallEnter__IIniR",
                paywallExitActive: "FullscreenPaywall_paywallExitActive__ytHhb",
                paywallAppearActive: "FullscreenPaywall_paywallAppearActive__Pp4yL",
                paywallEnterActive: "FullscreenPaywall_paywallEnterActive__IJKeC",
                paywallExit: "FullscreenPaywall_paywallExit__AgBdf",
                imageContainer: "FullscreenPaywall_imageContainer__jh8aa",
                image: "FullscreenPaywall_image__Vr0CD",
                content: "FullscreenPaywall_content__ZNa_W",
                perksContainer: "FullscreenPaywall_perksContainer__ytXdO",
                buttonPrimary: "FullscreenPaywall_buttonPrimary__4GPJY",
                buttonCloseRight: "FullscreenPaywall_buttonCloseRight__aVCIR",
                buttonCloseLeft: "FullscreenPaywall_buttonCloseLeft__m_Yuu",
                buttonSpinner: "FullscreenPaywall_buttonSpinner__d4I1V"
            }
        },
        71335: e => {
            e.exports = {
                "wt-display-heading-x-small-bold": "FullscreenPaywall_wt-display-heading-x-small-bold__29rjG",
                "wt-display-heading-small-bold-narrow": "FullscreenPaywall_wt-display-heading-small-bold-narrow__swhfw",
                "wt-display-heading-small-bold": "FullscreenPaywall_wt-display-heading-small-bold__8_d_L",
                "wt-display-heading-small-bold-wide": "FullscreenPaywall_wt-display-heading-small-bold-wide__HNS9M",
                "wt-display-heading-small-narrow": "FullscreenPaywall_wt-display-heading-small-narrow__J0dWL",
                "wt-display-heading-small": "FullscreenPaywall_wt-display-heading-small__gR7uZ",
                "wt-display-heading-small-wide": "FullscreenPaywall_wt-display-heading-small-wide__wUxVU",
                "wt-display-heading-medium-bold-narrow": "FullscreenPaywall_wt-display-heading-medium-bold-narrow__HorGb",
                "wt-display-heading-medium-bold": "FullscreenPaywall_wt-display-heading-medium-bold__GMEU7",
                title: "FullscreenPaywall_title__EVKLo",
                "wt-display-heading-medium-bold-wide": "FullscreenPaywall_wt-display-heading-medium-bold-wide__pfFho",
                "wt-display-heading-medium-narrow": "FullscreenPaywall_wt-display-heading-medium-narrow__f7x0A",
                "wt-display-heading-medium": "FullscreenPaywall_wt-display-heading-medium__yczjy",
                "wt-display-heading-medium-wide": "FullscreenPaywall_wt-display-heading-medium-wide__b16xK",
                "wt-display-heading-large-bold-narrow": "FullscreenPaywall_wt-display-heading-large-bold-narrow__WSp2y",
                "wt-display-heading-large-bold": "FullscreenPaywall_wt-display-heading-large-bold__FVUFv",
                "wt-display-heading-large-bold-wide": "FullscreenPaywall_wt-display-heading-large-bold-wide__EnPId",
                "wt-display-heading-large-narrow": "FullscreenPaywall_wt-display-heading-large-narrow__84W9Z",
                "wt-display-heading-large": "FullscreenPaywall_wt-display-heading-large__rQrpk",
                "wt-display-heading-large-wide": "FullscreenPaywall_wt-display-heading-large-wide__HQdx4",
                "wt-display-heading": "FullscreenPaywall_wt-display-heading___qxYQ",
                "wt-sub-heading": "FullscreenPaywall_wt-sub-heading__RVVmC",
                "wt-text-heading-small-bold-narrow": "FullscreenPaywall_wt-text-heading-small-bold-narrow__IFb5w",
                "wt-text-heading-small-bold": "FullscreenPaywall_wt-text-heading-small-bold___tmbq",
                "wt-text-heading-small-bold-wide": "FullscreenPaywall_wt-text-heading-small-bold-wide__G_ij9",
                "wt-text-heading-small-narrow": "FullscreenPaywall_wt-text-heading-small-narrow__yJxGF",
                "wt-text-heading-small": "FullscreenPaywall_wt-text-heading-small__EeUQU",
                "wt-text-heading-small-wide": "FullscreenPaywall_wt-text-heading-small-wide__NW2tZ",
                "wt-text-heading-medium-bold": "FullscreenPaywall_wt-text-heading-medium-bold__7bWtk",
                "wt-text-heading-medium-bold-wide": "FullscreenPaywall_wt-text-heading-medium-bold-wide__X_ATk",
                "wt-text-heading-medium-semi-narrow": "FullscreenPaywall_wt-text-heading-medium-semi-narrow__FFk6m",
                "wt-text-heading-medium-narrow": "FullscreenPaywall_wt-text-heading-medium-narrow__aF9xk",
                "wt-text-heading-medium-semi": "FullscreenPaywall_wt-text-heading-medium-semi__M15vF",
                "wt-text-heading-medium-semi-wide": "FullscreenPaywall_wt-text-heading-medium-semi-wide__wlo8h",
                "wt-text-heading-medium": "FullscreenPaywall_wt-text-heading-medium__eBqA3",
                "wt-text-heading-medium-wide": "FullscreenPaywall_wt-text-heading-medium-wide__N0Qij",
                "wt-text-heading-large-bold-narrow": "FullscreenPaywall_wt-text-heading-large-bold-narrow__eUZfT",
                "wt-text-heading-large-bold": "FullscreenPaywall_wt-text-heading-large-bold__H2_uO",
                "wt-text-heading-large-bold-wide": "FullscreenPaywall_wt-text-heading-large-bold-wide__J6yJw",
                "wt-text-heading-large-narrow": "FullscreenPaywall_wt-text-heading-large-narrow__jRsEK",
                "wt-text-heading-large": "FullscreenPaywall_wt-text-heading-large__Z0TM_",
                "wt-text-heading-large-wide": "FullscreenPaywall_wt-text-heading-large-wide__35JeO",
                "wt-text-heading-x-large-narrow": "FullscreenPaywall_wt-text-heading-x-large-narrow__aXWhH",
                "wt-text-heading-x-large": "FullscreenPaywall_wt-text-heading-x-large__3EREO",
                "wt-text-heading-x-large-wide": "FullscreenPaywall_wt-text-heading-x-large-wide__pMFll",
                "wt-text-heading": "FullscreenPaywall_wt-text-heading__RQEae",
                "wt-body-x-small-semi": "FullscreenPaywall_wt-body-x-small-semi__AibUD",
                "wt-body-x-small": "FullscreenPaywall_wt-body-x-small__5rG8A",
                "wt-body-small-bold": "FullscreenPaywall_wt-body-small-bold__Acrq2",
                "wt-body-small-semi": "FullscreenPaywall_wt-body-small-semi__4Y4zE",
                usageText: "FullscreenPaywall_usageText__NW6fR",
                "wt-body-small": "FullscreenPaywall_wt-body-small__xSM9x",
                buttonsHeader: "FullscreenPaywall_buttonsHeader__v5_sm",
                perkText: "FullscreenPaywall_perkText__BKYiu",
                usageReset: "FullscreenPaywall_usageReset__RBtvC",
                "wt-body-medium-bold": "FullscreenPaywall_wt-body-medium-bold__EMOdL",
                perksTitle: "FullscreenPaywall_perksTitle__aWtmT",
                "wt-body-medium-semi": "FullscreenPaywall_wt-body-medium-semi__CTXqI",
                "wt-body-medium": "FullscreenPaywall_wt-body-medium__PVph9",
                "wt-body-large-bold": "FullscreenPaywall_wt-body-large-bold__4MClZ",
                "wt-body-large": "FullscreenPaywall_wt-body-large__fpguo",
                "wt-body-x-large": "FullscreenPaywall_wt-body-x-large__uBW59",
                "wt-label-x-small-bold": "FullscreenPaywall_wt-label-x-small-bold__lXv0_",
                "wt-label-x-small-semi": "FullscreenPaywall_wt-label-x-small-semi__SvsPR",
                "wt-label-x-small": "FullscreenPaywall_wt-label-x-small__zrChv",
                "wt-label-small-bold": "FullscreenPaywall_wt-label-small-bold__l4JBx",
                "wt-label-small-semi": "FullscreenPaywall_wt-label-small-semi__NqW4G",
                "wt-label-small": "FullscreenPaywall_wt-label-small___vewJ",
                "wt-label-medium-bold": "FullscreenPaywall_wt-label-medium-bold__RDrUH",
                "wt-label-medium-semi": "FullscreenPaywall_wt-label-medium-semi__jDjAY",
                "wt-label-medium": "FullscreenPaywall_wt-label-medium__rsj2d",
                "wt-label-large-bold": "FullscreenPaywall_wt-label-large-bold__h4ND4",
                "wt-label-large-semi": "FullscreenPaywall_wt-label-large-semi__9X15O",
                "wt-label-large": "FullscreenPaywall_wt-label-large__0OWZu",
                background: "FullscreenPaywall_background__AS5Ft",
                backgroundAppear: "FullscreenPaywall_backgroundAppear__waGz5",
                backgroundEnter: "FullscreenPaywall_backgroundEnter__yXNQC",
                backgroundAppearActive: "FullscreenPaywall_backgroundAppearActive__neZCb",
                backgroundEnterActive: "FullscreenPaywall_backgroundEnterActive__moFBC",
                paywallContainer: "FullscreenPaywall_paywallContainer__zTrbw",
                paywall: "FullscreenPaywall_paywall__xP9Tn",
                paywallAppear: "FullscreenPaywall_paywallAppear__BduXW",
                paywallEnter: "FullscreenPaywall_paywallEnter__3LahU",
                paywallExitActive: "FullscreenPaywall_paywallExitActive__OF3vq",
                paywallAppearActive: "FullscreenPaywall_paywallAppearActive__DWHEO",
                paywallEnterActive: "FullscreenPaywall_paywallEnterActive__gubhW",
                paywallExit: "FullscreenPaywall_paywallExit__SJoFY",
                imageContainer: "FullscreenPaywall_imageContainer__MBGs4",
                image: "FullscreenPaywall_image__Wv9Qu",
                content: "FullscreenPaywall_content__UB7Ku",
                perksContainer: "FullscreenPaywall_perksContainer__rQKk1",
                buttonCloseRight: "FullscreenPaywall_buttonCloseRight__WdE9O",
                buttonCloseLeft: "FullscreenPaywall_buttonCloseLeft__HRLot",
                usageContainer: "FullscreenPaywall_usageContainer__OA7A3",
                usageSpinner: "FullscreenPaywall_usageSpinner__C9PPC",
                usageInfo: "FullscreenPaywall_usageInfo__h_PZv",
                perkItem: "FullscreenPaywall_perkItem__NGhZo",
                perkIcon: "FullscreenPaywall_perkIcon__u5D3V",
                perkIconDisabled: "FullscreenPaywall_perkIconDisabled__2qJqm",
                buttonPrimary: "FullscreenPaywall_buttonPrimary__LlQwU"
            }
        },
        71336: (e, l, t) => {
            "use strict";
            t.d(l, {
                it: () => C,
                U_: () => A,
                o9: () => I
            });
            var a = t(23798),
                i = t(11927),
                r = t.n(i),
                n = t(72388),
                s = t(21462),
                d = t(38169),
                o = t(97116),
                _ = t(14603),
                c = t(96622),
                u = t(61360),
                w = t(87963),
                m = t(24932);
            let p = {
                popupShown: e => ({
                    kind: "user_research_survey_popup_shown",
                    info: {
                        surveyId: e
                    }
                }),
                popupDismissed: e => ({
                    kind: "user_research_survey_popup_dismissed",
                    info: {
                        surveyId: e
                    }
                }),
                ctaTapped: (e, l) => ({
                    kind: "user_research_survey_cta_tapped",
                    info: {
                        surveyId: e,
                        ctaId: l
                    }
                }),
                npsScaleSelected: (e, l) => ({
                    kind: "user_research_survey_nps_scale_selected",
                    info: {
                        surveyId: e,
                        rating: l
                    }
                }),
                freeTextSubmitted: (e, l) => ({
                    kind: "user_research_survey_free_text_submitted",
                    info: {
                        surveyId: e,
                        text: l
                    }
                })
            };
            var g = t(5712),
                h = t(98172),
                y = t(86781),
                x = t(89614),
                f = t(53123),
                v = t(62760);
            let b = e => {
                    var l, t;
                    return !!e.id.trim() && ("dismiss" === e.onClickEffect || "redirect" === e.onClickEffect && !!(null == (l = e.redirectUrl) ? void 0 : l.trim()) || "typeform" === e.onClickEffect && !!(null == (t = e.typeformUrl) ? void 0 : t.trim()))
                },
                L = e => {
                    let l = (0, d.d4)(h.Lm);
                    return "popup_survey_".concat(e, "_seen_").concat(l)
                };
            var E = t(77105),
                S = t.n(E);
            let C = (0, s.createContext)({
                    survey: void 0,
                    setSurvey: () => {},
                    hasShownSurvey: !1
                }),
                A = e => {
                    let {
                        children: l
                    } = e, [t, i] = (0, s.useState)(void 0), [r, n] = (0, s.useState)(!1);
                    return (0, a.jsx)(C.Provider, {
                        value: {
                            survey: t,
                            setSurvey: e => {
                                i(e), n(!0)
                            },
                            hasShownSurvey: r
                        },
                        children: (0, a.jsxs)(a.Fragment, {
                            children: [l, t && (0, a.jsx)(R, {
                                survey: t
                            })]
                        })
                    })
                },
                P = e => {
                    let {
                        cta: l,
                        surveyId: t,
                        hiddenFields: i,
                        dismissSurvey: r
                    } = e, d = (0, s.useCallback)(e => {
                        let l = i ? "".concat(e, "#").concat(n.stringify(i)) : e;
                        window.open(l)
                    }, [i]), _ = (0, s.useCallback)(() => {
                        switch ((0, w.Od)().trackUserAction(p.ctaTapped(t, l.id)), l.onClickEffect) {
                            case "dismiss":
                                r();
                                break;
                            case "redirect":
                                var e;
                                e = l.redirectUrl, window.open(e), r();
                                break;
                            case "typeform":
                                d(l.typeformUrl), r()
                        }
                    }, [l, r, d, t]);
                    return (0, a.jsx)(o.$, {
                        appearance: l.appearance,
                        fullwidth: !0,
                        onClick: _,
                        children: l.label
                    })
                },
                T = e => {
                    let {
                        onSelect: l
                    } = e;
                    return (0, a.jsx)("div", {
                        className: S().npsScaleContainer,
                        children: [1, 2, 3, 4, 5].map(e => (0, a.jsx)("div", {
                            className: S().npsScaleButton,
                            onClick: () => l(e),
                            children: e
                        }, e))
                    })
                },
                k = e => {
                    let {
                        placeholder: l,
                        submitLabel: t,
                        onSubmit: i
                    } = e, [r, n] = (0, s.useState)(""), d = (0, s.useCallback)(() => {
                        i(r)
                    }, [i, r]);
                    return (0, a.jsxs)("div", {
                        className: S().freeTextContainer,
                        children: [(0, a.jsx)(_.T, {
                            value: r,
                            className: S().areaText,
                            onChange: e => n(e.target.value),
                            placeholder: l,
                            rows: 4,
                            "aria-label": l,
                            inputClassName: S().areaTextInput
                        }), (0, a.jsx)(o.$, {
                            appearance: "primary",
                            fullwidth: !0,
                            onClick: d,
                            children: t
                        })]
                    })
                },
                R = e => {
                    var l;
                    let {
                        survey: t
                    } = e, {
                        dismissSurvey: i
                    } = I(), n = (0, d.d4)(y.mB), o = L(t.id), _ = (0, s.useMemo)(() => n.language && t.localized[n.language] ? t.localized[n.language] : t.fallbackLanguage && t.localized[t.fallbackLanguage] ? t.localized[t.fallbackLanguage] : null, [t, n.language]);
                    (0, g.S)(() => {
                        (0, w.Od)().trackUserAction(p.popupShown(t.id)), localStorage.setItem(o, Date.now().toString())
                    });
                    let m = (0, s.useCallback)(() => {
                            (0, w.Od)().trackUserAction(p.popupDismissed(t.id)), i()
                        }, [i, t.id]),
                        h = (0, s.useCallback)(e => {
                            (0, w.Od)().trackUserAction(p.npsScaleSelected(t.id, e)), i()
                        }, [i, t.id]),
                        f = (0, s.useCallback)(e => {
                            (0, w.Od)().trackUserAction(p.freeTextSubmitted(t.id, e)), i()
                        }, [i, t.id]),
                        v = (0, s.useMemo)(() => {
                            if (!_) return [];
                            let e = _.ctas || [];
                            return (t.randomizeCtasOrder ? r()(e) : e).map(e => (0, a.jsx)(P, {
                                cta: e,
                                surveyId: t.id,
                                hiddenFields: t.hiddenFields,
                                dismissSurvey: i
                            }, e.id))
                        }, [_, t.id, t.randomizeCtasOrder, i, t.hiddenFields]);
                    return _ && (0, a.jsx)(c.a, {
                        onClose: m,
                        showCloseButton: t.showDismissButton,
                        isOpen: !0,
                        size: "small",
                        appElement: (0, u.Y)(),
                        children: (0, a.jsxs)("div", {
                            className: S().container,
                            children: [(0, a.jsx)(x.h, {
                                className: S().chatsSvg
                            }), (0, a.jsx)("p", {
                                className: S().titleText,
                                children: _.titleText
                            }), (0, a.jsx)("p", {
                                className: S().contentText,
                                children: _.bodyText
                            }), t.npsScale && (0, a.jsx)(T, {
                                onSelect: h
                            }), t.freeTextField && (0, a.jsx)(k, {
                                placeholder: _.freeTextPlaceholder,
                                submitLabel: null != (l = _.freeTextSubmitLabel) ? l : "Submit",
                                onSubmit: f
                            }), v.length > 0 && (0, a.jsx)("div", {
                                className: S().buttonsContainer,
                                children: v
                            })]
                        })
                    })
                },
                I = () => {
                    let {
                        setSurvey: e
                    } = (0, s.useContext)(C), l = (() => {
                        let {
                            settings: e
                        } = (0, v.k)(), l = e.popup_survey_configuration, t = (0, d.d4)(h.RJ), {
                            hasShownSurvey: a
                        } = (0, s.useContext)(C), i = L(null == l ? void 0 : l.id);
                        if (!t) return;
                        let r = !(null == l ? void 0 : l.transfersNumberThreshold) || f.A.getWTSent() >= l.transfersNumberThreshold,
                            n = null !== localStorage.getItem(i),
                            o = Number(localStorage.getItem(i)),
                            _ = Date.now(),
                            c = l && l.showAgainAfterMilliseconds && !isNaN(o) && _ - o >= l.showAgainAfterMilliseconds;
                        if (l && (e => {
                                let l = e.localized && Object.keys(e.localized).length > 0 && (!e.fallbackLanguage || !!e.localized[e.fallbackLanguage]);
                                return !!e.id.trim() && !!l && Object.values(e.localized).every(l => !!e.npsScale || !!e.freeTextField || l.ctas.every(b))
                            })(l) && !a && r && (!n || c)) return l
                    })(), t = (0, d.d4)(y.R2), a = (0, d.d4)(y.mB), i = (0, d.d4)(h.Lm), r = (0, m.I)();
                    return {
                        showSurvey: e,
                        dismissSurvey: () => e(void 0),
                        surveyConfiguration: l,
                        hiddenFields: {
                            plan_tier: t || "anon",
                            email: a.email || "anon",
                            local_storage_id: r || "null",
                            language: navigator.language,
                            user_language: a.language || "none",
                            registration_id: i || "anon",
                            order_number: Math.floor(10 * Math.random()).toString()
                        }
                    }
                }
        },
        72889: (e, l, t) => {
            "use strict";
            t.d(l, {
                Sm: () => n,
                hb: () => r
            });
            var a = t(98876),
                i = t(45817);

            function r(e) {
                let {
                    sizeUsage: l,
                    sizeQuota: t,
                    sizePeriodicity: a,
                    countUsage: i,
                    countQuota: r,
                    countPeriodicity: n,
                    transferSize: s
                } = e;
                return {
                    current_usages: JSON.stringify({
                        bytes: l,
                        bytes_periodicity_in_days: a,
                        n_transfers: i,
                        transfers_periodicity_in_days: n
                    }),
                    new_usages: JSON.stringify({
                        bytes: l + s,
                        bytes_periodicity_in_days: a,
                        n_transfers: i + 1,
                        transfers_periodicity_in_days: n
                    }),
                    enforced_usage_limits: JSON.stringify({
                        bytes: t === 1 / 0 ? -1 : t,
                        bytes_periodicity_in_days: a,
                        n_transfers: r === 1 / 0 ? -1 : r,
                        transfers_periodicity_in_days: n
                    }),
                    violated_limits: JSON.stringify({
                        bytes: l + s > t,
                        bytes_periodicity_in_days: a,
                        n_transfers: i + 1 > r,
                        transfers_periodicity_in_days: n
                    })
                }
            }
            let n = {
                paywallDisplayed(e) {
                    let {
                        trigger: l,
                        type: t,
                        usageData: n
                    } = e, s = (0, a.v)();
                    return {
                        kind: i.AK.PAYWALL_DISPLAYED,
                        info: {
                            paywallTrigger: (0, i.aO)(l),
                            paywallType: t,
                            sizeOfTransfer: n.transferSize,
                            ...r(n),
                            ...s && {
                                email_type_origin: s
                            }
                        }
                    }
                },
                paywallDismissed(e) {
                    let {
                        dismissMethod: l,
                        usageData: t,
                        trigger: a,
                        type: n
                    } = e;
                    return {
                        kind: i.AK.PAYWALL_DISMISSED,
                        info: {
                            dismissMethod: l,
                            sizeOfTransfer: t.transferSize,
                            ...r(t),
                            paywallTrigger: (0, i.aO)(a),
                            paywallType: n
                        }
                    }
                },
                paywallPurchaseButtonTapped(e) {
                    let {
                        usageData: l,
                        isFreeTrialAvailable: t,
                        trigger: a,
                        type: n
                    } = e;
                    return {
                        kind: i.AK.PURCHASE_BUTTON_TAPPED,
                        info: {
                            sizeOfTransfer: l.transferSize,
                            ...r(l),
                            isFreeTrialAvailable: t,
                            paywallTrigger: (0, i.aO)(a),
                            paywallType: n
                        }
                    }
                },
                watchAnAdClicked(e) {
                    let {
                        usageData: l
                    } = e;
                    return {
                        kind: "free_limit_paywall_watch_ad_clicked",
                        info: {
                            sizeOfTransfer: l.transferSize,
                            ...r(l)
                        }
                    }
                }
            }
        },
        72939: (e, l, t) => {
            "use strict";
            t.d(l, {
                X: () => n
            });
            var a = t(37828),
                i = t(62760),
                r = t(12130);
            let n = () => {
                let {
                    settings: e
                } = (0, i.k)(), {
                    subscription: l
                } = (0, a.f)();
                return (!(0, r.R6)() || e.should_use_moneta_for_payments) && (null == l ? void 0 : l.externalProvider) !== "stripe"
            }
        },
        73278: (e, l, t) => {
            "use strict";
            t.d(l, {
                r: () => U
            });
            var a = t(23798),
                i = t(46001),
                r = t.n(i),
                n = t(21462),
                s = t(75546),
                d = t(38169),
                o = t(97116),
                _ = t(74941),
                c = t(85633),
                u = t(75600),
                w = t(61149),
                m = t(75181),
                p = t(74744),
                g = t(87983),
                h = t(97875),
                y = t(37982),
                x = t(37828),
                f = t(98851),
                v = t(75876),
                b = t(76616),
                L = t(45781),
                E = t(26094),
                S = t(15412),
                C = t.n(S);
            let A = e => {
                let {
                    isLoading: l,
                    onClose: t,
                    children: i
                } = e;
                return (0, a.jsx)(L.A, {
                    showModal: !0,
                    children: (0, a.jsxs)("div", {
                        className: C().modalOverlay,
                        children: [l && (0, a.jsx)("span", {
                            className: C().spinner,
                            children: (0, a.jsx)(b.y, {
                                appearance: "base",
                                mode: "light",
                                size: "medium"
                            })
                        }), (0, a.jsxs)("div", {
                            className: l ? C().modalContainerLoading : C().modalContainer,
                            children: [(0, a.jsx)(o.$, {
                                className: C().closeIcon,
                                as: "button",
                                size: "small",
                                type: "button",
                                onClick: t,
                                children: (0, a.jsx)(E.XE, {})
                            }), i]
                        })]
                    })
                })
            };
            var P = t(89187),
                T = t(11428),
                k = t(15913),
                R = t(62760),
                I = t(84530),
                j = t(28330),
                M = t(9209),
                O = t(69887),
                N = t.n(O),
                F = t(44765);
            let U = e => {
                var l, t, i, b, E, S, C, O, U;
                let {
                    closeModal: D,
                    planName: z,
                    switchPlansOrReactivate: W,
                    yearlySavingsPercentage: B,
                    monthlyTotalCostCents: H,
                    isReactivatingPlan: V,
                    isLoading: Z,
                    isDowngrade: q,
                    planTier: G,
                    selectedBillingInterval: K
                } = e, {
                    t: Y
                } = (0, s.Bd)(), {
                    isPendingDowngrade: J
                } = (0, F.W)(), {
                    getPlanByTierAndInterval: X,
                    isLoading: Q
                } = (0, g.d)(), $ = (0, n.useRef)(null), ee = (0, d.wA)(), {
                    currentTeam: el
                } = (0, k.o)(), et = (0, v.J)(), {
                    minimumCommitmentSeats: ea,
                    maximumSeats: ei
                } = (0, p.K)(), {
                    subscription: er
                } = (0, x.f)(), en = (0, h.G)(), {
                    settings: {
                        repackaging_enterprise_cta_url: es,
                        upgrade_subscription_modal_show_secondary_button: ed
                    }
                } = (0, R.k)(), eo = !q && z === (0, P.Is)(P.js.ENTERPRISE), [e_, ec] = (0, n.useState)(eo ? m.K : 1), eu = (0, n.useCallback)(e => {
                    ec(e), ee(u.jf.actions.setEnterpriseSeats(e))
                }, [ee]);
                (0, n.useEffect)(() => {
                    var e;
                    eu(eo ? Math.max(m.K, null != (e = null == er ? void 0 : er.quantity) ? e : 1) : 1)
                }, [eo, eu, null == er ? void 0 : er.quantity]);
                let ew = !el || el.members.length <= 1,
                    em = null != (t = null == er ? void 0 : er.currency) ? t : w.Sj.EUR,
                    ep = null != (i = null == er ? void 0 : er.interval) ? i : j.YF.month,
                    eg = e => (0, f.W)({
                        amount: e / 100,
                        currency: em,
                        locale: en
                    }),
                    eh = (0, n.useMemo)(() => {
                        let e = V ? ep : K;
                        return G && e && !Q ? X(G, e) : null
                    }, [Q, K, G, X, V, ep]),
                    {
                        preview: ey,
                        isLoading: ex,
                        isError: ef
                    } = (0, y.v)({
                        priceAndPackageToken: null == eh || null == (l = eh.price) ? void 0 : l.priceAndPackageToken,
                        quantity: e_,
                        isDowngrade: q || V
                    }),
                    ev = K === P.CS.YEARLY,
                    eb = !!K && ep !== (0, M.se)(K),
                    eL = null != (b = null == ey ? void 0 : ey.recurringTotalCents) ? b : 0,
                    eE = eg(eL),
                    eS = eg(null != (E = null == ey ? void 0 : ey.upfrontTotalCents) ? E : 0),
                    eC = (null != (S = null == ey ? void 0 : ey.recurringTotalCents) ? S : 0) - (null != (C = null == ey ? void 0 : ey.upfrontTotalCents) ? C : 0),
                    eA = "- ".concat(eg(eC)),
                    eP = eg(eL - eC),
                    eT = H ? "- ".concat(eg(H ? H - eL : 0)) : void 0,
                    ek = !et && K ? (0, M.se)(K) : ep,
                    eR = !et && !(null == er ? void 0 : er.isPaidDowngrade) && (null == ey ? void 0 : ey.recurringAt),
                    eI = null != eR ? eR : null == er ? void 0 : er.endsAt,
                    ej = eI ? I.A.date(new Date(eI), "without_day") : null,
                    eM = ek === j.YF.year ? I.A.t("page.account_payment.modal.year_term") : I.A.t("page.account_payment.modal.month_term"),
                    eO = ek === j.YF.year ? I.A.t("page.account_payment.modal.yearly") : I.A.t("page.account_payment.modal.monthly"),
                    eN = null == er ? void 0 : er.quantity,
                    eF = et ? I.A.t("page.account_payment.modal.title", {
                        plan_tier: z,
                        price: eS
                    }) : eo ? Y("page.account_payment.modal.plan_upgrade_title_enterprise") : I.A.t("page.account_payment.modal.plan_upgrade_title", {
                        plan_tier: z
                    }),
                    eU = et ? I.A.t("page.account_payment.modal.plan_info", {
                        plan_term: eO,
                        plan_name: z
                    }) : I.A.t("page.account_payment.modal.plan_upgrade_info", {
                        billing_interval: eO,
                        plan_tier: z
                    });
                return ef ? (D(), null) : (null == er ? void 0 : er.isPaidDowngrade) ? (0, a.jsx)(L.A, {
                    showModal: !0,
                    children: (0, a.jsxs)(A, {
                        isLoading: Z || ex,
                        onClose: D,
                        children: [(0, a.jsx)("h2", {
                            className: r()(N().modalTitle),
                            children: Y("downgrade.already_requested.title")
                        }), (0, a.jsx)("div", {
                            className: N().modalDetails,
                            children: (0, a.jsx)("p", {
                                className: N().planSummary,
                                children: (0, a.jsx)(s.x6, {
                                    i18nKey: "downgrade.already_requested.body",
                                    values: {
                                        current_plan: (0, P.Is)(null == er ? void 0 : er.tier),
                                        renewal_date: ej
                                    },
                                    components: {
                                        b: (0, a.jsx)("b", {})
                                    }
                                })
                            })
                        }), (0, a.jsx)(o.$, {
                            size: "large",
                            className: N().payButton,
                            onClick: D,
                            disabled: Z || ex,
                            children: Y("downgrade.already_requested.close")
                        })]
                    })
                }) : q ? (0, a.jsxs)(A, {
                    isLoading: Z || ex,
                    onClose: D,
                    children: [(0, a.jsx)("h2", {
                        className: r()(N().modalTitle),
                        children: eF
                    }), (0, a.jsxs)("div", {
                        className: N().modalDetails,
                        children: [(0, a.jsxs)("dl", {
                            className: N().planInfo,
                            children: [(0, a.jsx)("dt", {
                                className: N().planInfoTitle,
                                children: eU
                            }), (0, a.jsx)("dd", {
                                className: N().planInfoPrice,
                                children: (0, a.jsx)("span", {
                                    children: eE
                                })
                            })]
                        }), (0, a.jsx)("div", {
                            className: N().seperator
                        }), (0, a.jsxs)("dl", {
                            className: N().planInfo,
                            children: [(0, a.jsx)("dt", {
                                className: N().planInfoTitle,
                                children: I.A.t("page.account_payment.modal.todays_total")
                            }), (0, a.jsx)("dd", {
                                className: N().planInfoPrice,
                                children: eS
                            })]
                        })]
                    }), (0, a.jsx)("p", {
                        className: N().planSummary,
                        children: (0, a.jsx)(s.x6, {
                            i18nKey: "downgrade.summary",
                            values: {
                                price: eE,
                                interval: eM,
                                renewal: ej
                            },
                            components: {
                                strong: (0, a.jsx)("strong", {})
                            }
                        })
                    }), (0, a.jsxs)("p", {
                        className: N().areYouSure,
                        children: [(0, a.jsx)("p", {
                            className: N().areYouSureText,
                            children: (0, a.jsx)(s.x6, {
                                i18nKey: "downgrade.are_you_sure",
                                values: {
                                    plan_name: (0, P.Is)(null != (O = null == er ? void 0 : er.tier) ? O : P.js.FREE)
                                },
                                components: {
                                    strong: (0, a.jsx)("strong", {})
                                }
                            })
                        }), (0, a.jsxs)("ul", {
                            children: [(null == er ? void 0 : er.tier) === P.js.ENTERPRISE && (0, a.jsxs)("li", {
                                className: N().listItem,
                                children: [(0, a.jsx)(c.$Td, {
                                    "aria-hidden": !0,
                                    className: N().check
                                }), Y("downgrade.benefits.teams.benefit_1")]
                            }), z === (0, P.Is)(P.js.STARTER) && (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsxs)("li", {
                                    className: N().listItem,
                                    children: [(0, a.jsx)(c.$Td, {
                                        "aria-hidden": !0,
                                        className: N().check
                                    }), Y("downgrade.benefits.ultimate.benefit_1")]
                                }), (0, a.jsxs)("li", {
                                    className: N().listItem,
                                    children: [(0, a.jsx)(c.$Td, {
                                        "aria-hidden": !0,
                                        className: N().check
                                    }), Y("downgrade.benefits.ultimate.benefit_2")]
                                }), (0, a.jsxs)("li", {
                                    className: N().listItem,
                                    children: [(0, a.jsx)(c.$Td, {
                                        "aria-hidden": !0,
                                        className: N().check
                                    }), Y("downgrade.benefits.ultimate.benefit_3")]
                                }), (0, a.jsxs)("li", {
                                    className: N().listItem,
                                    children: [(0, a.jsx)(c.$Td, {
                                        "aria-hidden": !0,
                                        className: N().check
                                    }), Y("downgrade.benefits.ultimate.benefit_4")]
                                })]
                            })]
                        })]
                    }), (0, a.jsx)(o.$, {
                        size: "large",
                        variation: "destructive",
                        className: N().payButton,
                        onClick: W,
                        disabled: Z || ex,
                        children: Y("downgrade.confirm_cta")
                    }), ed && (0, a.jsx)(o.$, {
                        size: "large",
                        variation: "neutral",
                        appearance: "secondary",
                        className: N().payButton,
                        onClick: D,
                        disabled: Z || ex,
                        children: Y("page.account_payment.modal.no_thanks")
                    }), (0, a.jsx)("span", {
                        className: N().terms,
                        children: (0, a.jsx)(s.x6, {
                            i18nKey: "page.account_payment.modal.terms_text",
                            components: {
                                termsLink: (0, a.jsx)("a", {
                                    href: "/legal/terms",
                                    target: "_blank",
                                    rel: "noreferrer"
                                })
                            }
                        })
                    })]
                }) : (0, a.jsxs)(A, {
                    isLoading: Z || ex,
                    onClose: D,
                    children: [(0, a.jsx)("h2", {
                        className: r()(N().modalTitle, J && N().pendingDowngrade),
                        children: J ? I.A.t("page.account_payment.cancel_state.reactivate_cta_text") + " " + z : eF
                    }), eo && !eb && (0, a.jsx)("p", {
                        className: N().subtitle,
                        children: I.A.t("page.account_payment.modal.plan_upgrade_subtitle_enterprise")
                    }), (0, a.jsxs)("div", {
                        className: N().modalDetails,
                        children: [eo && !eb && (0, a.jsxs)("dl", {
                            className: N().planInfo,
                            children: [(0, a.jsx)("dt", {
                                className: N().planInfoTitle,
                                children: I.A.t("checkout.payment.form.seat-management.selected-seats")
                            }), (0, a.jsx)("dd", {
                                className: N().planInfoPrice,
                                children: (0, a.jsx)(T.A, {
                                    seats: e_,
                                    setSeats: e => {
                                        eu(e)
                                    },
                                    disableMinSeats: e_ === ea,
                                    disableMaxSeats: e_ === ei,
                                    totalMemberCount: ea,
                                    isInputDisabled: !0
                                })
                            })]
                        }), (0, a.jsxs)("dl", {
                            className: N().planInfo,
                            children: [(0, a.jsxs)("dt", {
                                className: N().planInfoTitle,
                                children: [!ew && "".concat(eN, " x "), eU]
                            }), (0, a.jsx)("dd", {
                                className: N().planInfoPrice,
                                children: et ? eS : (0, a.jsx)("span", {
                                    children: eE
                                })
                            })]
                        }), ev && !et && !V && eT && (0, a.jsxs)("dl", {
                            className: N().planInfo,
                            children: [(0, a.jsx)("dt", {
                                className: N().discountTitle,
                                children: I.A.t("page.account_payment.modal.yearly_savings_title", {
                                    savings_percentage: B
                                })
                            }), (0, a.jsx)("dd", {
                                className: N().discountAmount,
                                children: eT
                            })]
                        }), !et && (0, a.jsxs)("dl", {
                            className: N().planInfo,
                            children: [(0, a.jsxs)("dt", {
                                className: N().creditTitle,
                                children: [I.A.t("page.account_payment.modal.plan_upgrade_credit"), (0, a.jsx)("div", {
                                    ref: $,
                                    className: N().tooltipContainer,
                                    children: (0, a.jsx)(_.m, {
                                        content: (0, a.jsx)("span", {
                                            className: N().tooltipText,
                                            children: I.A.t("page.account_payment.modal.credit_information")
                                        }),
                                        parentElement: null != (U = $.current) ? U : void 0,
                                        mode: "dark",
                                        className: N().tooltip,
                                        isCondensed: !0,
                                        children: (0, a.jsx)(c.cFx, {
                                            "aria-label": I.A.t("page.account_payment.modal.credit_icon_label")
                                        })
                                    })
                                })]
                            }), (0, a.jsx)("dd", {
                                className: N().planInfoPrice,
                                children: eA
                            })]
                        }), !J && et && (0, a.jsx)("p", {
                            className: N().disclaimer,
                            children: I.A.t("page.account_payment.modal.disclaimer")
                        }), (0, a.jsx)("div", {
                            className: N().seperator
                        }), (0, a.jsxs)("dl", {
                            className: N().planInfo,
                            children: [(0, a.jsx)("dt", {
                                className: N().planInfoTitle,
                                children: et ? I.A.t("page.account_payment.modal.final_price") : I.A.t("page.account_payment.modal.todays_total")
                            }), (0, a.jsx)("dd", {
                                className: N().planInfoPrice,
                                children: eP
                            })]
                        })]
                    }), !eo && (0, a.jsx)("p", {
                        className: N().planSummary,
                        children: (0, a.jsx)(s.x6, {
                            i18nKey: "page.account_payment.modal.plan_summary",
                            values: {
                                renewal_date: ej
                            },
                            components: {
                                b: (0, a.jsx)("b", {})
                            }
                        })
                    }), (0, a.jsxs)("div", {
                        className: N().ctaContainer,
                        children: [(0, a.jsx)(o.$, {
                            size: "large",
                            className: N().payButton,
                            onClick: W,
                            disabled: Z || ex,
                            children: J ? Y("downgrade.reactivate.confirm_cta") : eo ? I.A.t("page.account_payment.modal.confirm_cta_enterprise") : I.A.t("page.account_payment.modal.confirm_cta")
                        }), eo && (0, a.jsx)(o.$, {
                            as: "a",
                            size: "large",
                            variation: "default",
                            appearance: "secondary",
                            className: N().payButton,
                            href: es,
                            target: "_blank",
                            disabled: Z || ex,
                            children: I.A.t("enterprise_banners.self_service.cta")
                        }), ed && (0, a.jsx)(o.$, {
                            size: "medium",
                            variation: "default",
                            appearance: "secondary",
                            className: N().payButton,
                            onClick: D,
                            disabled: Z || ex,
                            children: Y("page.account_payment.modal.no_thanks")
                        })]
                    }), (0, a.jsx)("span", {
                        className: N().terms,
                        children: (0, a.jsx)(s.x6, {
                            i18nKey: "page.account_payment.modal.terms_text",
                            components: {
                                termsLink: (0, a.jsx)("a", {
                                    href: "/legal/terms",
                                    target: "_blank",
                                    rel: "noreferrer"
                                })
                            }
                        })
                    })]
                })
            }
        },
        73595: (e, l, t) => {
            "use strict";
            t.d(l, {
                NA: () => d,
                VJ: () => s,
                ee: () => _,
                tg: () => o
            });
            var a = t(38169),
                i = t(87983),
                r = t(89187),
                n = t(62760);
            let s = () => {
                    let {
                        catalog: e,
                        isLoading: l
                    } = (0, i.d)(), {
                        user: t
                    } = (0, a.d4)(e => ({
                        user: e.user
                    })), n = [r.js.FREE, r.js.STARTER, r.js.ULTIMATE], s = n.includes(null == t ? void 0 : t.planTier), d = n.every(t => {
                        var a;
                        return !l && e && (null == (a = e[t]) ? void 0 : a.week) !== void 0
                    });
                    return (!(null == t ? void 0 : t.loggedIn) || s) && d
                },
                d = () => {
                    let {
                        settings: e
                    } = (0, n.k)(), l = s();
                    return e.should_see_weeklies && l
                },
                o = e => [r.js.STARTER, r.js.ULTIMATE].includes(e),
                _ = () => {
                    let {
                        settings: e
                    } = (0, n.k)(), l = s();
                    return e.transfer_recovery_weeklies_enabled && l
                }
        },
        73936: () => {},
        74067: (e, l, t) => {
            "use strict";
            t.d(l, {
                LT: () => r,
                nP: () => a
            });
            let a = e => {
                    let l = new URL(e).hostname.split(".");
                    return l.slice(4 === l.length ? -3 : -2).join(".")
                },
                i = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
                    return Object.fromEntries(new URLSearchParams(e).entries())
                },
                r = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
                    return new URLSearchParams(Object.entries(i(e)))
                }
        },
        74744: (e, l, t) => {
            "use strict";
            t.d(l, {
                K: () => c
            });
            var a = t(21462),
                i = t(38169),
                r = t(37828),
                n = t(22352),
                s = t(89187),
                d = t(15913),
                o = t(86781),
                _ = t(75181);
            let c = () => {
                var e, l, t, c, u, w;
                let {
                    currentTeam: m
                } = (0, d.o)(), {
                    subscription: p,
                    isLoading: g
                } = (0, r.f)(), {
                    data: h
                } = (0, n.Vl)({
                    teamId: null == m ? void 0 : m.id
                }, {
                    skip: !m
                }), y = (0, i.d4)(o.R2), x = y === s.js.ENTERPRISE && null != (t = null == h ? void 0 : h.minimumCommitmentSeats) ? t : _.K, f = (null != (c = null == h || null == (e = h.members) ? void 0 : e.length) ? c : 1) + (null != (u = null == h || null == (l = h.invites) ? void 0 : l.length) ? u : 0), v = Math.max(x, f), b = y === s.js.ENTERPRISE_CUSTOM_CONTRACT ? void 0 : null != (w = null == h ? void 0 : h.maximumSeats) ? w : _.f, L = g || !p ? f : null == p ? void 0 : p.quantity, E = (0, a.useCallback)(e => Math.max(0, f + e - L), [f, L]);
                return {
                    canExplicitlyManageSeats: y === s.js.ENTERPRISE,
                    currentSeats: L,
                    minimumCommitmentSeats: x,
                    minimumSeats: v,
                    seatsInUse: f,
                    maximumSeats: b,
                    additionalSeatsNeededForInvites: E
                }
            }
        },
        74882: (e, l, t) => {
            "use strict";
            t.d(l, {
                F: () => i,
                dc: () => a
            });
            let a = "downloaders_paywall_alert",
                i = "more_aggressive_downloaders_paywall"
        },
        75181: (e, l, t) => {
            "use strict";
            t.d(l, {
                K: () => a,
                f: () => i
            });
            let a = 2,
                i = 25
        },
        75876: (e, l, t) => {
            "use strict";
            t.d(l, {
                J: () => s
            });
            var a = t(21462),
                i = t(38169),
                r = t(89187),
                n = t(86781);
            let s = () => {
                let e = (0, i.d4)(n.R2),
                    l = (0, i.d4)(n.Me);
                return (0, a.useMemo)(() => e === r.js.PRO_2022 || e === r.js.PREMIUM_2022 || e === r.js.PLUS || l === r.sE, [e, l])
            }
        },
        76423: (e, l, t) => {
            "use strict";
            t.d(l, {
                Q0: () => n,
                cm: () => r,
                mx: () => s
            });
            var a = t(38169),
                i = t(72546);
            let r = ["pdf", "xlsx", "xls", "docx", "doc", "pptx", "ppt"],
                n = ["mp4", "mov", "avi", "mkv", "wmv", "flv", "webm", "m4v", "mpeg", "mpg", "3gp", "ogv", "ts", "mts", "m2ts", "vob", "divx", "xvid", "asf", "rm", "rmvb", "f4v"],
                s = e => {
                    var l;
                    let t = (0, a.d4)(i.Kj);
                    return d(null != (l = null == t ? void 0 : t.items) ? l : [], e)
                },
                d = (e, l) => 0 !== e.length && e.some(e => o(e, l)),
                o = (e, l) => {
                    let t = (e => {
                        var l, t, a;
                        let i = null != (t = null == e ? void 0 : e.name) ? t : "";
                        return ((null != (a = null == e || null == (l = e.file) ? void 0 : l.type) ? a : "") || i.split(".").pop() || "").toLowerCase()
                    })(e);
                    return l.includes(t)
                }
        },
        76849: (e, l, t) => {
            "use strict";
            t.d(l, {
                DX: () => d,
                gG: () => s,
                hm: () => o
            });
            var a = t(82493),
                i = t.n(a),
                r = t(10861),
                n = t(23901);
            let {
                useGetTeamsQuery: s,
                useGetTeamPoliciesQuery: d,
                useUpdateTeamPolicyMutation: o
            } = r.l.injectEndpoints({
                endpoints: e => ({
                    getTeams: e.query({
                        query: () => ({
                            url: "teams",
                            method: "GET",
                            requiresAuth: !0
                        }),
                        transformResponse: e => e && e.teams ? (0, n.x)(e.teams.map(e => ({
                            ...e,
                            name: i().decode(e.name || "")
                        }))) : []
                    }),
                    getTeamPolicies: e.query({
                        providesTags: ["TeamPolicies"],
                        query: e => {
                            let {
                                teamId: l
                            } = e;
                            return {
                                url: "teams/".concat(l, "/policies"),
                                method: "GET",
                                requiresAuth: !0
                            }
                        },
                        transformResponse: e => e && e.team_policies ? (0, n.x)(e.team_policies) : []
                    }),
                    updateTeamPolicy: e.mutation({
                        invalidatesTags: ["TeamPolicies"],
                        query: e => {
                            let {
                                teamId: l,
                                policy: t,
                                enabled: a
                            } = e;
                            return {
                                url: "teams/".concat(l, "/policies/").concat(t),
                                method: "PUT",
                                requiresAuth: !0,
                                data: {
                                    enabled: a
                                }
                            }
                        }
                    })
                })
            })
        },
        76850: (e, l, t) => {
            "use strict";
            t.d(l, {
                DC: () => O,
                vM: () => S,
                Re: () => F,
                x9: () => U,
                of: () => N,
                l0: () => C.l,
                WO: () => _,
                EX: () => M,
                lV: () => h
            });
            var a = t(23798),
                i = t(46001),
                r = t.n(i),
                n = t(38169),
                s = t(915),
                d = t(58174),
                o = t.n(d);
            let _ = e => {
                let {
                    children: l,
                    isMobile: t
                } = e, {
                    route: {
                        isPanelOpen: i,
                        isPanelFullOpen: d,
                        isPanelHalfOpen: _
                    },
                    layout: {
                        dropzoneActive: c
                    }
                } = h(), u = (0, n.d4)(s.y);
                return t ? (0, a.jsxs)("div", {
                    "data-testid": F,
                    id: F,
                    className: o().mobileContainer,
                    children: [l, (0, a.jsx)("div", {
                        id: O
                    })]
                }) : (0, a.jsxs)("div", {
                    "data-testid": N,
                    className: r()(o()["wp-wrapper"], {
                        [o()["wp-wrapper--no-transition"]]: !i,
                        [o()["wp-wrapper--half-panel"]]: _,
                        [o()["wp-wrapper--full-panel"]]: d,
                        [o()["wp-wrapper--behind-dropzone"]]: c && !u
                    }),
                    children: [i && (0, a.jsx)(S, {}), l, (0, a.jsx)("div", {
                        id: O
                    })]
                })
            };
            var c = t(90512),
                u = t(98172),
                w = t(45477),
                m = t(86781),
                p = t(26573),
                g = t(72546);
            let h = () => {
                let e = (0, n.d4)(c.W7),
                    l = (0, n.d4)(g.Kj),
                    t = (0, n.d4)(m.mB),
                    a = (0, n.d4)(w.Tb),
                    i = (0, n.d4)(u.e2);
                return {
                    auth: i,
                    route: e,
                    user: t,
                    session: (0, n.d4)(p.vC),
                    channel: a,
                    transfer: l,
                    layout: (0, n.d4)(s.Z7)
                }
            };
            var y = t(21462),
                x = t(55613),
                f = t(51853),
                v = t(88848),
                b = t(32186),
                L = t.n(b),
                E = t(57127);

            function S() {
                let e = (0, n.wA)(),
                    l = (0, n.d4)(c.W7),
                    t = (0, x.q)(),
                    i = () => {
                        if (l.name === f.bP.name && t) return void e((0, v.UK)(v.pU.ULTIMATE_WITH_FT_MODAL));
                        (0, E.A)()
                    };
                return (0, a.jsx)("div", {
                    className: L().blockingLayer,
                    onClick: i,
                    onKeyDown: i,
                    tabIndex: -1,
                    "data-testid": "blocking-layer",
                    role: "button"
                })
            }
            var C = t(57968),
                A = t(85664),
                P = t(34361),
                T = t(15168),
                k = t(36165),
                R = t(62760),
                I = t(55296),
                j = t(82261);
            let M = () => {
                    let [e, l] = (0, y.useState)(C.l.NONE), {
                        settings: {
                            disable_transfer_detail_panel_ad_rotation: t
                        }
                    } = (0, R.k)(), a = function() {
                        let e = (0, n.d4)(c.AX),
                            l = !!(0, n.d4)((0, T.fj)(e || "")),
                            t = !!(0, n.d4)(T.K0);
                        return (0, P.x)() && l || t
                    }(), i = (0, n.d4)(A.h), r = (0, k.GV)(j.MK), s = (0, I.g)();
                    return (0, y.useEffect)(() => {
                        if (!r) {
                            t || l(C.l.NONE);
                            return
                        }
                        let n = e;
                        s || (n = a ? C.l.CUSTOM : i ? C.l.BRANDED : C.l.AD), l(n)
                    }, [r, t, a, i, s]), e
                },
                O = "sdk-wallpaper-container",
                N = "wallpaper-container",
                F = "mobile-web-wallpaper-container",
                U = 254
        },
        77105: e => {
            e.exports = {
                "wt-display-heading-x-small-bold": "SurveyPopup_wt-display-heading-x-small-bold__d0x0Y",
                "wt-display-heading-small-bold-narrow": "SurveyPopup_wt-display-heading-small-bold-narrow__F4SI5",
                "wt-display-heading-small-bold": "SurveyPopup_wt-display-heading-small-bold__OJgeW",
                "wt-display-heading-small-bold-wide": "SurveyPopup_wt-display-heading-small-bold-wide__gcG7j",
                "wt-display-heading-small-narrow": "SurveyPopup_wt-display-heading-small-narrow__9v0eq",
                "wt-display-heading-small": "SurveyPopup_wt-display-heading-small__j_AZp",
                "wt-display-heading-small-wide": "SurveyPopup_wt-display-heading-small-wide__vht5N",
                "wt-display-heading-medium-bold-narrow": "SurveyPopup_wt-display-heading-medium-bold-narrow__AAM41",
                "wt-display-heading-medium-bold": "SurveyPopup_wt-display-heading-medium-bold__9kenj",
                "wt-display-heading-medium-bold-wide": "SurveyPopup_wt-display-heading-medium-bold-wide__UTC6t",
                "wt-display-heading-medium-narrow": "SurveyPopup_wt-display-heading-medium-narrow__qbhuf",
                "wt-display-heading-medium": "SurveyPopup_wt-display-heading-medium__PsyZk",
                "wt-display-heading-medium-wide": "SurveyPopup_wt-display-heading-medium-wide__shmYZ",
                "wt-display-heading-large-bold-narrow": "SurveyPopup_wt-display-heading-large-bold-narrow__j2jJP",
                "wt-display-heading-large-bold": "SurveyPopup_wt-display-heading-large-bold__A6e5k",
                "wt-display-heading-large-bold-wide": "SurveyPopup_wt-display-heading-large-bold-wide__4egQM",
                "wt-display-heading-large-narrow": "SurveyPopup_wt-display-heading-large-narrow__eg0d4",
                "wt-display-heading-large": "SurveyPopup_wt-display-heading-large__o22r5",
                "wt-display-heading-large-wide": "SurveyPopup_wt-display-heading-large-wide__6845D",
                "wt-display-heading": "SurveyPopup_wt-display-heading__FErUc",
                "wt-sub-heading": "SurveyPopup_wt-sub-heading__o1jX1",
                "wt-text-heading-small-bold-narrow": "SurveyPopup_wt-text-heading-small-bold-narrow__9tXnG",
                "wt-text-heading-small-bold": "SurveyPopup_wt-text-heading-small-bold__YV5Jz",
                "wt-text-heading-small-bold-wide": "SurveyPopup_wt-text-heading-small-bold-wide__zMjxL",
                "wt-text-heading-small-narrow": "SurveyPopup_wt-text-heading-small-narrow__C3TSV",
                "wt-text-heading-small": "SurveyPopup_wt-text-heading-small__TrmSo",
                "wt-text-heading-small-wide": "SurveyPopup_wt-text-heading-small-wide__baN9j",
                "wt-text-heading-medium-bold": "SurveyPopup_wt-text-heading-medium-bold__c6UrI",
                titleText: "SurveyPopup_titleText__1pRka",
                "wt-text-heading-medium-bold-wide": "SurveyPopup_wt-text-heading-medium-bold-wide__jmBI2",
                "wt-text-heading-medium-semi-narrow": "SurveyPopup_wt-text-heading-medium-semi-narrow__a03RK",
                "wt-text-heading-medium-narrow": "SurveyPopup_wt-text-heading-medium-narrow__brirS",
                "wt-text-heading-medium-semi": "SurveyPopup_wt-text-heading-medium-semi__u2_wN",
                "wt-text-heading-medium-semi-wide": "SurveyPopup_wt-text-heading-medium-semi-wide___NNfX",
                "wt-text-heading-medium": "SurveyPopup_wt-text-heading-medium__Qnxv3",
                "wt-text-heading-medium-wide": "SurveyPopup_wt-text-heading-medium-wide__Vehv9",
                "wt-text-heading-large-bold-narrow": "SurveyPopup_wt-text-heading-large-bold-narrow__wIX3m",
                "wt-text-heading-large-bold": "SurveyPopup_wt-text-heading-large-bold__ONXZP",
                "wt-text-heading-large-bold-wide": "SurveyPopup_wt-text-heading-large-bold-wide__m7eiN",
                "wt-text-heading-large-narrow": "SurveyPopup_wt-text-heading-large-narrow__rvP0e",
                "wt-text-heading-large": "SurveyPopup_wt-text-heading-large__LI_Rx",
                "wt-text-heading-large-wide": "SurveyPopup_wt-text-heading-large-wide__oPgdc",
                "wt-text-heading-x-large-narrow": "SurveyPopup_wt-text-heading-x-large-narrow___wgwC",
                "wt-text-heading-x-large": "SurveyPopup_wt-text-heading-x-large__8XSeD",
                "wt-text-heading-x-large-wide": "SurveyPopup_wt-text-heading-x-large-wide__bJ_ZB",
                "wt-text-heading": "SurveyPopup_wt-text-heading__uv_wa",
                "wt-body-x-small-semi": "SurveyPopup_wt-body-x-small-semi__e47bj",
                "wt-body-x-small": "SurveyPopup_wt-body-x-small__P_qNn",
                "wt-body-small-bold": "SurveyPopup_wt-body-small-bold__D1ZEP",
                "wt-body-small-semi": "SurveyPopup_wt-body-small-semi__ulNfE",
                "wt-body-small": "SurveyPopup_wt-body-small__bYdJD",
                "wt-body-medium-bold": "SurveyPopup_wt-body-medium-bold__0FAYL",
                "wt-body-medium-semi": "SurveyPopup_wt-body-medium-semi__HOmwR",
                "wt-body-medium": "SurveyPopup_wt-body-medium__JbBrf",
                contentText: "SurveyPopup_contentText__gy8DC",
                "wt-body-large-bold": "SurveyPopup_wt-body-large-bold__SzjLb",
                "wt-body-large": "SurveyPopup_wt-body-large__tTizy",
                "wt-body-x-large": "SurveyPopup_wt-body-x-large__hsACi",
                "wt-label-x-small-bold": "SurveyPopup_wt-label-x-small-bold__uCoOT",
                "wt-label-x-small-semi": "SurveyPopup_wt-label-x-small-semi__tCRaL",
                "wt-label-x-small": "SurveyPopup_wt-label-x-small__rCQJ0",
                "wt-label-small-bold": "SurveyPopup_wt-label-small-bold__B_21J",
                "wt-label-small-semi": "SurveyPopup_wt-label-small-semi__MazBP",
                "wt-label-small": "SurveyPopup_wt-label-small__ftOnH",
                "wt-label-medium-bold": "SurveyPopup_wt-label-medium-bold__XUK_4",
                "wt-label-medium-semi": "SurveyPopup_wt-label-medium-semi__OzFcY",
                "wt-label-medium": "SurveyPopup_wt-label-medium__WaNRC",
                "wt-label-large-bold": "SurveyPopup_wt-label-large-bold__pF3rM",
                "wt-label-large-semi": "SurveyPopup_wt-label-large-semi__roizP",
                "wt-label-large": "SurveyPopup_wt-label-large__DwcEB",
                container: "SurveyPopup_container__mXPyT",
                chatsSvg: "SurveyPopup_chatsSvg__fr1t9",
                buttonsContainer: "SurveyPopup_buttonsContainer__miOAk",
                freeTextContainer: "SurveyPopup_freeTextContainer__3be8L",
                areaText: "SurveyPopup_areaText__9m7ZO",
                areaTextInput: "SurveyPopup_areaTextInput__Ro5hd",
                widgetBackground: "SurveyPopup_widgetBackground__3y9sp",
                typeformWidget: "SurveyPopup_typeformWidget__5h2l0",
                npsScaleContainer: "SurveyPopup_npsScaleContainer__cHOGw",
                npsScaleButton: "SurveyPopup_npsScaleButton__jsg9M"
            }
        },
        77765: (e, l, t) => {
            "use strict";
            t.d(l, {
                Kn: () => n,
                O7: () => s,
                on: () => d
            });
            var a = t(23798),
                i = t(21462);
            let r = {
                    data: {
                        isTransferAppLoaded: !1,
                        isAdsdkLoaded: !1,
                        isAdWallpaperEnabled: !1
                    }
                },
                n = (0, i.createContext)(r),
                s = e => {
                    let {
                        children: l
                    } = e, [t, s] = (0, i.useState)(r.data);
                    return (0, a.jsx)(n.Provider, {
                        value: {
                            data: t,
                            setTransferAppLoaded: e => s({
                                ...t,
                                isTransferAppLoaded: e
                            }),
                            setAdsdkLoaded: e => s({
                                ...t,
                                isAdsdkLoaded: e
                            }),
                            setAdWallpaperEnabled: e => s({
                                ...t,
                                isAdWallpaperEnabled: e
                            })
                        },
                        children: l
                    })
                },
                d = () => {
                    let {
                        data: e,
                        setTransferAppLoaded: l,
                        setAdsdkLoaded: t,
                        setAdWallpaperEnabled: a
                    } = (0, i.useContext)(n);
                    return {
                        data: e,
                        setTransferAppLoaded: l,
                        setAdsdkLoaded: t,
                        setAdWallpaperEnabled: a
                    }
                }
        },
        78694: (e, l, t) => {
            "use strict";
            t.d(l, {
                Z: () => a
            });
            var a = function(e) {
                return e.ACCOUNT_STORAGE = "ACCOUNT_STORAGE", e.COLLECT_PAYMENTS = "COLLECT_PAYMENTS", e.CUSTOMIZED_COVER_ADOBE_INTEGRATION = "CUSTOMIZED_COVER_ADOBE_INTEGRATION", e.CUSTOMIZED_COVER_BACKGROUND_COLOR = "CUSTOMIZED_COVER_BACKGROUND_COLOR", e.CUSTOMIZED_COVER_BACKGROUND_IMAGE = "CUSTOMIZED_COVER_BACKGROUND_IMAGE", e.CUSTOMIZED_COVER_TEXT = "CUSTOMIZED_COVER_TEXT", e.CUSTOMIZED_DOMAIN_NAME = "CUSTOMIZED_DOMAIN_NAME", e.CUSTOMIZED_TRANSFER_BRANDING = "CUSTOMIZED_TRANSFER_BRANDING", e.EMAIL_BRANDING = "EMAIL_BRANDING", e.EMAIL_RECIPIENTS_PER_TRANSFER = "EMAIL_RECIPIENTS_PER_TRANSFER", e.NUMBER_OF_DOWNLOADS_PER_TRANSFER = "DOWNLOADS_PER_COLLECTION", e.PASSWORD_PROTECTED_TRANSFERS = "PASSWORD_PROTECTED_TRANSFERS", e.RECOVER_EXPIRED_TRANSFERS = "RECOVER_EXPIRED_TRANSFERS", e.REQUEST_RECEIVE_OPEN_REQUESTS = "REQUEST_RECEIVE_OPEN_REQUESTS", e.REQUEST_RECEIVE_RECIPIENTS_PER_REQUEST = "REQUEST_RECEIVE_RECIPIENTS_PER_REQUEST", e.SOCIAL_LINKS = "SOCIAL_LINKS", e.TRANSFER_DEFAULT_EXPIRATION = "TRANSFER_DEFAULT_EXPIRATION", e.TRANSFER_EXPIRATION_EXTEND_POST_SEND = "TRANSFER_EXPIRATION_EXTEND_POST_SEND", e.TRANSFER_EXPIRATION_EXTEND_PRE_SEND = "TRANSFER_EXPIRATION_EXTEND_PRE_SEND", e.TRANSFER_SIZE_LIMIT = "TRANSFER_SIZE_LIMIT", e.TRANSFER_NUMBER_LIMIT = "TRANSFER_NUMBER_LIMIT", e.INVITE_USERS = "INVITE_USERS", e
            }({})
        },
        80751: e => {
            e.exports = {
                "wt-display-heading-x-small-bold": "TransferSizeLimitPaywall_wt-display-heading-x-small-bold__qyb8X",
                "wt-display-heading-small-bold-narrow": "TransferSizeLimitPaywall_wt-display-heading-small-bold-narrow__Bo3x2",
                "wt-display-heading-small-bold": "TransferSizeLimitPaywall_wt-display-heading-small-bold__0HMgN",
                title: "TransferSizeLimitPaywall_title__S_kEJ",
                "wt-display-heading-small-bold-wide": "TransferSizeLimitPaywall_wt-display-heading-small-bold-wide__t1cKU",
                "wt-display-heading-small-narrow": "TransferSizeLimitPaywall_wt-display-heading-small-narrow__t6dKc",
                "wt-display-heading-small": "TransferSizeLimitPaywall_wt-display-heading-small__4Xtzk",
                "wt-display-heading-small-wide": "TransferSizeLimitPaywall_wt-display-heading-small-wide__JJsJw",
                "wt-display-heading-medium-bold-narrow": "TransferSizeLimitPaywall_wt-display-heading-medium-bold-narrow__oVeU1",
                "wt-display-heading-medium-bold": "TransferSizeLimitPaywall_wt-display-heading-medium-bold__jBOJX",
                "wt-display-heading-medium-bold-wide": "TransferSizeLimitPaywall_wt-display-heading-medium-bold-wide__7F4O0",
                "wt-display-heading-medium-narrow": "TransferSizeLimitPaywall_wt-display-heading-medium-narrow__Z1_AW",
                "wt-display-heading-medium": "TransferSizeLimitPaywall_wt-display-heading-medium__TGlfd",
                "wt-display-heading-medium-wide": "TransferSizeLimitPaywall_wt-display-heading-medium-wide__Ebgs_",
                "wt-display-heading-large-bold-narrow": "TransferSizeLimitPaywall_wt-display-heading-large-bold-narrow___tR3d",
                "wt-display-heading-large-bold": "TransferSizeLimitPaywall_wt-display-heading-large-bold__8tEIT",
                "wt-display-heading-large-bold-wide": "TransferSizeLimitPaywall_wt-display-heading-large-bold-wide__Z878d",
                "wt-display-heading-large-narrow": "TransferSizeLimitPaywall_wt-display-heading-large-narrow__Mynzn",
                "wt-display-heading-large": "TransferSizeLimitPaywall_wt-display-heading-large__Iy4J1",
                "wt-display-heading-large-wide": "TransferSizeLimitPaywall_wt-display-heading-large-wide__tLa48",
                "wt-display-heading": "TransferSizeLimitPaywall_wt-display-heading__hTyG5",
                "wt-sub-heading": "TransferSizeLimitPaywall_wt-sub-heading__YNb4u",
                "wt-text-heading-small-bold-narrow": "TransferSizeLimitPaywall_wt-text-heading-small-bold-narrow__EjSRm",
                "wt-text-heading-small-bold": "TransferSizeLimitPaywall_wt-text-heading-small-bold__P6PH_",
                "wt-text-heading-small-bold-wide": "TransferSizeLimitPaywall_wt-text-heading-small-bold-wide__WxJZk",
                "wt-text-heading-small-narrow": "TransferSizeLimitPaywall_wt-text-heading-small-narrow__ahxrw",
                "wt-text-heading-small": "TransferSizeLimitPaywall_wt-text-heading-small__6BscK",
                "wt-text-heading-small-wide": "TransferSizeLimitPaywall_wt-text-heading-small-wide__DCfXv",
                "wt-text-heading-medium-bold": "TransferSizeLimitPaywall_wt-text-heading-medium-bold__rzqBD",
                "wt-text-heading-medium-bold-wide": "TransferSizeLimitPaywall_wt-text-heading-medium-bold-wide__Fh_00",
                "wt-text-heading-medium-semi-narrow": "TransferSizeLimitPaywall_wt-text-heading-medium-semi-narrow__4xky0",
                "wt-text-heading-medium-narrow": "TransferSizeLimitPaywall_wt-text-heading-medium-narrow__bufSD",
                "wt-text-heading-medium-semi": "TransferSizeLimitPaywall_wt-text-heading-medium-semi__c67qe",
                "wt-text-heading-medium-semi-wide": "TransferSizeLimitPaywall_wt-text-heading-medium-semi-wide__08WoP",
                "wt-text-heading-medium": "TransferSizeLimitPaywall_wt-text-heading-medium__lNeY0",
                "wt-text-heading-medium-wide": "TransferSizeLimitPaywall_wt-text-heading-medium-wide__mN26O",
                "wt-text-heading-large-bold-narrow": "TransferSizeLimitPaywall_wt-text-heading-large-bold-narrow__VbEcv",
                "wt-text-heading-large-bold": "TransferSizeLimitPaywall_wt-text-heading-large-bold__LU7q3",
                "wt-text-heading-large-bold-wide": "TransferSizeLimitPaywall_wt-text-heading-large-bold-wide__yI9zU",
                "wt-text-heading-large-narrow": "TransferSizeLimitPaywall_wt-text-heading-large-narrow__CAwk4",
                "wt-text-heading-large": "TransferSizeLimitPaywall_wt-text-heading-large__OdVFR",
                "wt-text-heading-large-wide": "TransferSizeLimitPaywall_wt-text-heading-large-wide__v1JUy",
                "wt-text-heading-x-large-narrow": "TransferSizeLimitPaywall_wt-text-heading-x-large-narrow__VCD60",
                "wt-text-heading-x-large": "TransferSizeLimitPaywall_wt-text-heading-x-large__I31BY",
                "wt-text-heading-x-large-wide": "TransferSizeLimitPaywall_wt-text-heading-x-large-wide__LcRgz",
                "wt-text-heading": "TransferSizeLimitPaywall_wt-text-heading__WlWzi",
                "wt-body-x-small-semi": "TransferSizeLimitPaywall_wt-body-x-small-semi__I_WTK",
                "wt-body-x-small": "TransferSizeLimitPaywall_wt-body-x-small__9_5_8",
                "wt-body-small-bold": "TransferSizeLimitPaywall_wt-body-small-bold__vsM_j",
                "wt-body-small-semi": "TransferSizeLimitPaywall_wt-body-small-semi__Df9xJ",
                "wt-body-small": "TransferSizeLimitPaywall_wt-body-small__u8zTr",
                "wt-body-medium-bold": "TransferSizeLimitPaywall_wt-body-medium-bold__yv6N0",
                body: "TransferSizeLimitPaywall_body__jKzZe",
                bold: "TransferSizeLimitPaywall_bold__nTICh",
                "wt-body-medium-semi": "TransferSizeLimitPaywall_wt-body-medium-semi__GanbO",
                "wt-body-medium": "TransferSizeLimitPaywall_wt-body-medium__7dXqf",
                "wt-body-large-bold": "TransferSizeLimitPaywall_wt-body-large-bold__9RRmZ",
                "wt-body-large": "TransferSizeLimitPaywall_wt-body-large__rJa8W",
                "wt-body-x-large": "TransferSizeLimitPaywall_wt-body-x-large__Sdv97",
                "wt-label-x-small-bold": "TransferSizeLimitPaywall_wt-label-x-small-bold__vAWlh",
                "wt-label-x-small-semi": "TransferSizeLimitPaywall_wt-label-x-small-semi__x4lKe",
                "wt-label-x-small": "TransferSizeLimitPaywall_wt-label-x-small__zVoXR",
                "wt-label-small-bold": "TransferSizeLimitPaywall_wt-label-small-bold__Ac_zM",
                "wt-label-small-semi": "TransferSizeLimitPaywall_wt-label-small-semi__lBHOh",
                "wt-label-small": "TransferSizeLimitPaywall_wt-label-small__d2B6_",
                "wt-label-medium-bold": "TransferSizeLimitPaywall_wt-label-medium-bold___HUFI",
                "wt-label-medium-semi": "TransferSizeLimitPaywall_wt-label-medium-semi__mhjo6",
                "wt-label-medium": "TransferSizeLimitPaywall_wt-label-medium__VWUIk",
                "wt-label-large-bold": "TransferSizeLimitPaywall_wt-label-large-bold__VapZx",
                "wt-label-large-semi": "TransferSizeLimitPaywall_wt-label-large-semi__mDQd8",
                "wt-label-large": "TransferSizeLimitPaywall_wt-label-large__UARNp",
                background: "TransferSizeLimitPaywall_background__tnkOD",
                backgroundAppear: "TransferSizeLimitPaywall_backgroundAppear__nNuzZ",
                backgroundEnter: "TransferSizeLimitPaywall_backgroundEnter__iE803",
                backgroundAppearActive: "TransferSizeLimitPaywall_backgroundAppearActive__HsQei",
                backgroundEnterActive: "TransferSizeLimitPaywall_backgroundEnterActive__V0c2x",
                paywallContainer: "TransferSizeLimitPaywall_paywallContainer__qXW2_",
                paywall: "TransferSizeLimitPaywall_paywall__h8e3Y",
                paywallAppear: "TransferSizeLimitPaywall_paywallAppear__oTq1N",
                paywallEnter: "TransferSizeLimitPaywall_paywallEnter__iZbFx",
                paywallExitActive: "TransferSizeLimitPaywall_paywallExitActive__Vr9Ph",
                paywallAppearActive: "TransferSizeLimitPaywall_paywallAppearActive__z9Xta",
                paywallEnterActive: "TransferSizeLimitPaywall_paywallEnterActive__9Yh65",
                paywallExit: "TransferSizeLimitPaywall_paywallExit__FQtUz",
                imageContainer: "TransferSizeLimitPaywall_imageContainer__JyelY",
                image: "TransferSizeLimitPaywall_image__sFG2_",
                content: "TransferSizeLimitPaywall_content__C0vV7",
                bodyContainer: "TransferSizeLimitPaywall_bodyContainer__f3WP7",
                benefitsContainer: "TransferSizeLimitPaywall_benefitsContainer__2IiLs",
                closeButton: "TransferSizeLimitPaywall_closeButton__kLczu",
                buttonSpinner: "TransferSizeLimitPaywall_buttonSpinner__vVTjs"
            }
        },
        81903: (e, l, t) => {
            "use strict";
            t.d(l, {
                kJ: () => ei,
                oM: () => R,
                _g: () => e_,
                HV: () => em,
                tS: () => i.tS,
                wj: () => i.wj,
                e6: () => ev,
                zM: () => B.zM,
                KM: () => a.KM,
                oR: () => a.oR,
                BT: () => eb
            });
            var a = t(32216),
                i = t(45817),
                r = t(23798),
                n = t(39602),
                s = t.n(n),
                d = t(21462),
                o = t(75546),
                _ = t(38169),
                c = t(98565),
                u = t(97116),
                w = t(2749),
                m = t(52016),
                p = t(24761),
                g = t(86248),
                h = t(87963),
                y = t(44259),
                x = t(15321),
                f = t(89187),
                v = t(20409),
                b = t(88848),
                L = t(7686),
                E = t(87676),
                S = t(62760),
                C = t(97364),
                A = t(73595);
            let P = {
                src: "/_next/static/media/visual.87f9a9f4.png",
                height: 1334,
                width: 1190,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAARVBMVEX6rmfyt4L1vY6EVzj88ebim2HtpWb+smr3yZ/7q2C/tJHAi17DlI/RkVl0cca5glXnzrbbz+Dv6uzTx8CGimnnnFqmlUpnlQ/sAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOklEQVR4nBXFSRaAIAxEwQ8mpIMDzvc/qs/aFGQmQJFU2kM9zfrr1MOs386yab+U+EyMqUEQ6z8QwQcz0gGH5LIWeQAAAABJRU5ErkJggg==",
                blurWidth: 7,
                blurHeight: 8
            };
            var T = t(70939),
                k = t.n(T);

            function R(e) {
                let {
                    isLowDismissibility: l,
                    dismissOnOutsideClick: t,
                    dismissOnMouseLeave: a,
                    isLeftCloseButton: n,
                    trigger: T,
                    onPaywallDismiss: R,
                    isFreeTrialEnabled: I = !1,
                    billingCycle: j,
                    couponCode: M,
                    closeButtonDelaySeconds: O = 0,
                    updateLastShownTime: N,
                    autoDismissSeconds: F = 0
                } = e, {
                    t: U
                } = (0, o.Bd)(), {
                    canSeeFreeTrials: D
                } = (0, C.av)(), {
                    canSeeFreeTrials: z
                } = (0, C.n$)(b.vW.TRANSFER_PAGE_OPENED), {
                    canSeeFreeTrials: W
                } = (0, C.DD)(T), {
                    canSeeFreeTrials: B
                } = (0, C.O5)(T), {
                    canSeeFreeTrialForThisTrigger: H
                } = (e => {
                    let {
                        settings: l
                    } = (0, S.k)(), {
                        hasRedeemedFreeTrial: t
                    } = (0, E.J)();
                    return {
                        canSeeFreeTrialForThisTrigger: e === b.vW.TW_INCREASE_GB_LIMIT && l.tw_increase_gb_limit_free_trial_enabled && !t
                    }
                })(T), V = D || z || W || B || I || H, Z = (0, A.NA)(), q = T === b.vW.DOWNLOAD_PAGE_OPENED, G = T === b.vW.ADD_FOLDER_CLICKED, {
                    user: K
                } = (0, _.d4)(e => ({
                    user: e.user
                })), [Y, J] = (0, d.useState)(!1), X = (0, _.wA)(), Q = (0, _.d4)(g.KO), $ = Z ? f.CS.WEEKLY : null != j ? j : f.CS.MONTHLY, ee = (0, d.useCallback)(e => {
                    (0, h.Od)().trackUserAction(i.wj.paywallDismissed({
                        dismissMethod: e,
                        trigger: T,
                        type: b.pU.MODAL_PAYWALL
                    })), (0, w.VO)(T).isSupported && X((0, p.OT)()), R()
                }, [X, R, T]), {
                    availableProducts: el,
                    allowedPaymentMethods: et
                } = (0, m._)({
                    defaultPlanTier: f.js.ULTIMATE,
                    defaultBillingPeriod: $,
                    freeTrialAvailable: V,
                    starterPlanEnabled: !1,
                    monthlyBillingEnabled: !0,
                    weeklyBillingEnabled: Z
                });
                (0, d.useEffect)(() => {
                    (0, h.Od)().trackUserAction(i.wj.paywallDisplayed({
                        trigger: T,
                        type: b.pU.MODAL_PAYWALL
                    })), T === b.vW.DOWNLOAD_PAGE_OPENED && N && N();
                    let {
                        isSupported: e,
                        isDismissible: l,
                        isBlocking: r
                    } = (0, w.VO)(T, {
                        dismissOnMouseLeave: a,
                        dismissOnOutsideClick: t,
                        autoDismissSeconds: F
                    });
                    e && X((0, p.qJ)({
                        paywallStyleOverride: b.pU.SPONTANEOUS_FULLSCREEN,
                        paywallInfo: {
                            style: b.pU.MODAL_PAYWALL,
                            trigger: T,
                            isDismissible: l,
                            isBlocking: r,
                            isFirstPaywall: void 0,
                            productsDisplayed: el,
                            paymentMethodsAvailable: et
                        },
                        predictionInfo: {
                            prediction: void 0,
                            isExperienceModifiedByPrediction: void 0,
                            predictionModel: void 0
                        }
                    }))
                }, []), (0, d.useEffect)(() => {
                    let e = () => {
                        ee(i.tS.AUTO_DISMISS)
                    };
                    return a && document.addEventListener("mouseleave", e), () => {
                        a && document.removeEventListener("mouseleave", e)
                    }
                }, [a, ee]), (0, d.useEffect)(() => {
                    if (O <= 0) return void J(!0);
                    let e = setTimeout(() => {
                        J(!0)
                    }, 1e3 * O);
                    return () => clearTimeout(e)
                }, [O]), (0, d.useEffect)(() => {
                    if (!F || F <= 0) return;
                    let e = setTimeout(() => {
                        ee(i.tS.AUTO_DISMISS)
                    }, 1e3 * F);
                    return () => clearTimeout(e)
                }, [F, ee]);
                let ea = n ? k().buttonCloseLeft : k().buttonCloseRight,
                    ei = n ? x.Uv : x.$A,
                    er = (0, d.useMemo)(() => (0, L.kQ)({
                        loginHint: null == K ? void 0 : K.email,
                        tier: f.js.ULTIMATE,
                        billingPeriod: $,
                        requestFreeTrial: V,
                        coupon: M !== f.rx.NONE ? M : void 0,
                        paywallId: Q
                    }), [null == K ? void 0 : K.email, V, $, M, Q]),
                    en = (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(v.T, {
                            title: U("paywalls.spontaneous.perk_title_1"),
                            description: U("paywalls.spontaneous.perk_description_1"),
                            icon: "check"
                        }), (0, r.jsx)(v.T, {
                            title: U("paywalls.spontaneous.perk_title_2"),
                            description: U("paywalls.spontaneous.perk_description_2"),
                            icon: "check"
                        }), (0, r.jsx)(v.T, {
                            title: U("paywalls.spontaneous.perk_title_3"),
                            description: U("paywalls.spontaneous.perk_description_3"),
                            icon: "check"
                        })]
                    }),
                    es = (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(v.T, {
                            title: U("paywalls.spontaneous.downloader.perk_title_1"),
                            description: U("paywalls.spontaneous.downloader.perk_description_1"),
                            icon: "check"
                        }), (0, r.jsx)(v.T, {
                            title: U("paywalls.spontaneous.downloader.perk_title_2"),
                            description: U("paywalls.spontaneous.downloader.perk_description_2"),
                            icon: "check"
                        }), (0, r.jsx)(v.T, {
                            title: U("paywalls.spontaneous.perk_title_2"),
                            description: U("paywalls.spontaneous.perk_description_2"),
                            icon: "check"
                        })]
                    }),
                    ed = (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(v.T, {
                            title: U("paywalls.spontaneous.perk_title_1"),
                            description: U("paywalls.spontaneous.perk_description_1"),
                            icon: "check"
                        }), (0, r.jsx)(v.T, {
                            title: U("paywalls.spontaneous.perk_title_3"),
                            description: U("paywalls.spontaneous.perk_description_3"),
                            icon: "check"
                        }), (0, r.jsx)(v.T, {
                            title: U("paywalls.spontaneous.add_folder.perk_title_1"),
                            description: U("paywalls.spontaneous.add_folder.perk_description_1"),
                            icon: "check"
                        })]
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(c.A, {
                        in: !0,
                        appear: !0,
                        timeout: 200,
                        classNames: {
                            enter: k().backgroundEnter,
                            enterActive: k().backgroundEnterActive,
                            appear: k().backgroundAppear,
                            appearActive: k().backgroundAppearActive
                        },
                        children: (0, r.jsx)("div", {
                            className: k().background,
                            onClick: t ? () => {
                                ee(i.tS.CLICK_OUTSIDE)
                            } : void 0,
                            "data-testid": "fullscreenPaywallBackground"
                        })
                    }), (0, r.jsx)("div", {
                        className: k().paywallContainer,
                        children: (0, r.jsx)(c.A, {
                            in: !0,
                            appear: !0,
                            timeout: 200,
                            classNames: {
                                enter: k().paywallEnter,
                                enterActive: k().paywallEnterActive,
                                appear: k().paywallAppear,
                                appearActive: k().paywallAppearActive,
                                exit: k().paywallExit,
                                exitActive: k().paywallExitActive
                            },
                            children: (0, r.jsxs)("div", {
                                className: k().paywall,
                                children: [(0, r.jsx)("div", {
                                    className: k().imageContainer,
                                    children: (0, r.jsx)(s(), {
                                        src: P,
                                        alt: "",
                                        fill: !0,
                                        sizes: "50vw",
                                        style: {
                                            objectFit: "cover"
                                        }
                                    })
                                }), Y && (0, r.jsx)("div", {
                                    className: ea,
                                    onClick: () => {
                                        ee(n ? i.tS.TOP_LEFT_X : i.tS.TOP_RIGHT_X)
                                    },
                                    tabIndex: 2,
                                    "data-testid": "fullscreenPaywallClose",
                                    children: (0, r.jsx)(y.Ay, {
                                        color: ei,
                                        hoverColor: x.Id,
                                        type: "Close"
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: k().content,
                                    children: [(0, r.jsx)("span", {
                                        className: k().title,
                                        children: U(q ? "paywalls.spontaneous.downloader.title" : "paywalls.spontaneous.title")
                                    }), (0, r.jsx)("div", {
                                        className: k().perksContainer,
                                        children: q ? es : G ? ed : en
                                    }), (0, r.jsx)(u.$, {
                                        className: k().buttonPrimary,
                                        as: "a",
                                        fullwidth: !0,
                                        size: "medium",
                                        appearance: "primary",
                                        href: er,
                                        onClick: () => {
                                            R(), (0, h.Od)().trackUserAction(i.wj.paywallPurchaseButtonTapped({
                                                trigger: T,
                                                type: b.pU.MODAL_PAYWALL
                                            }))
                                        },
                                        tabIndex: 0,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: U(V ? "paywalls.spontaneous.cta_free_trial" : "paywalls.spontaneous.cta_checkout_repackaging")
                                    }), !l && (0, r.jsx)(u.$, {
                                        fullwidth: !0,
                                        size: "medium",
                                        appearance: "secondary",
                                        onClick: () => {
                                            ee(i.tS.SECONDARY_CTA)
                                        },
                                        tabIndex: 1,
                                        "data-testid": "fullscreenPaywallDismissCTA",
                                        children: U("paywalls.spontaneous.cta_dismiss")
                                    })]
                                })]
                            })
                        })
                    })]
                })
            }
            var I = t(85633),
                j = t(32976),
                M = t(83489),
                O = t(16342),
                N = t(87983),
                F = t(37828),
                U = t(73278),
                D = t(44765),
                z = t(55851),
                W = t(72889),
                B = t(46616),
                H = t(72754),
                V = t(42599),
                Z = t(86781),
                q = t(20776),
                G = t(59042),
                K = t(7012);
            let Y = () => {
                    let {
                        settings: e
                    } = (0, S.k)();
                    return e.free_limit_paywall_can_see_free_trials
                },
                J = () => {
                    let {
                        settings: e
                    } = (0, S.k)();
                    return e.free_limit_paywall_can_see_weeklies
                };
            var X = t(12924),
                Q = t(84530),
                $ = t(63306),
                ee = t(72546);
            let el = {
                src: "/_next/static/media/visual.49a09f94.png",
                height: 1170,
                width: 1193,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAWlBMVEWOIMyXJ6SWO7/Eb32UJdTBltSdPMiKGsyMHdLAismxc9PIzMHRruifN1p6KKmKGpmpQaFyJp6ZXsGrWeKkb1lpLaJOR2pjZom1nHyrXG3EfYq0doK6hYytXuRNWWfUAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAQklEQVR4nCXKRxKAIBAAwQEXlmjO4f/ftCxvfWjUp3EBCP28ryoQTL23ZAGRkrNTdHrKdTqFdnBHE/Xrsf7AdsbzAltVAkxV7YbpAAAAAElFTkSuQmCC",
                blurWidth: 8,
                blurHeight: 8
            };
            var et = t(65459),
                ea = t.n(et);

            function ei(e) {
                let l, {
                        isLowDismissibility: t,
                        dismissOnOutsideClick: a,
                        dismissOnMouseLeave: n,
                        isLeftCloseButton: p,
                        onPaywallDismiss: g
                    } = e,
                    {
                        t: E
                    } = (0, o.Bd)(),
                    P = (0, _.wA)(),
                    {
                        settings: T
                    } = (0, S.k)(),
                    k = (() => {
                        let {
                            settings: {
                                one_day_expiry_free_transfer_kind: e
                            }
                        } = (0, S.k)(), l = (0, _.d4)(Z.Ce), t = (0, _.d4)(H.Sr), a = (0, _.d4)(V.ie);
                        return {
                            enabled: (!!(null == t ? void 0 : t.accountStorage) || !!(null == t ? void 0 : t.transferNumber)) && !l && "disabled" !== e,
                            shouldShowUnlockPopup: (() => {
                                if ("disabled" === e) return !1;
                                if ("popup_every_time" === e || "tooltip_and_popup_every_time" === e) return !0;
                                let l = new Date,
                                    t = new Date(a);
                                return l.getDate() !== t.getDate() || l.getMonth() !== t.getMonth() || l.getFullYear() !== t.getFullYear()
                            })()
                        }
                    })(),
                    {
                        showUpgradeSubscriptionModal: R,
                        confirmPlanSwitchOrReactivate: et,
                        closeUpgradeSubscriptionModal: ei,
                        selectedTierName: er,
                        isModalVisible: en,
                        isSwitchInProgress: es,
                        selectedTier: ed,
                        selectedBillingInterval: eo
                    } = (0, D.W)(),
                    {
                        isLoading: e_
                    } = (0, N.d)(),
                    ec = (0, _.d4)(Z.mB),
                    {
                        quota: eu,
                        currentUsage: ew
                    } = (0, M.J)(),
                    {
                        quota: em,
                        currentUsage: ep
                    } = (0, j.i)(),
                    {
                        canSeeFreeTrials: eg
                    } = (0, C.av)(),
                    eh = Y(),
                    ey = (0, _.d4)(ee.Kj),
                    ex = (0, _.d4)(Z.R2),
                    ef = (0, _.d4)(Z.Me),
                    ev = (0, A.NA)(),
                    eb = J(),
                    eL = (0, _.d4)(O.KO),
                    {
                        subscription: eE
                    } = (0, F.f)(),
                    eS = (0, d.useMemo)(() => "tooltip_and_popup_every_time" === T.one_day_expiry_free_transfer_kind, [T.one_day_expiry_free_transfer_kind]),
                    eC = (0, B.QR)(),
                    eA = (0, B.kC)(),
                    eP = eg && eh,
                    eT = ev && eb,
                    ek = (0, d.useMemo)(() => {
                        let e = em,
                            l = eu;
                        if (eC && (l = T.are_higher_limits_for_free_users_enabled ? 20 : 10), eA) switch (ex) {
                            case f.js.FREE:
                                e = 0xc0000000;
                                break;
                            case f.js.STARTER:
                                e = 0x4b00000000
                        }
                        return {
                            sizeUsage: ep,
                            sizeQuota: e,
                            sizePeriodicity: 30,
                            countUsage: ew,
                            countQuota: l,
                            countPeriodicity: 30,
                            transferSize: ey.size
                        }
                    }, [em, eu, eC, eA, ep, ew, ey.size, T.are_higher_limits_for_free_users_enabled, ex]),
                    eR = (0, d.useMemo)(() => ek.countUsage >= ek.countQuota, [ek.countUsage, ek.countQuota]),
                    eI = (0, d.useMemo)(() => {
                        let e = eR ? b.vW.TRANSFER_BUTTON_CLICKED_TRANSFER_NUMBER_LIMIT_HIT : b.vW.TRANSFER_BUTTON_CLICKED_GB_LIMIT_HIT;
                        return P((0, b.jt)(e)), e
                    }, [eR, P]),
                    ej = (0, d.useMemo)(() => eR ? b.pU.POP_UP_LIMIT_NUMBER : b.pU.POP_UP_LIMIT_GB, [eR]),
                    eM = (0, d.useCallback)(e => {
                        let {
                            method: l
                        } = e;
                        g(), (0, h.Od)().trackUserAction(W.Sm.paywallDismissed({
                            dismissMethod: l,
                            usageData: ek,
                            trigger: eI,
                            type: ej
                        })), P((0, O.OT)()), k.enabled && (k.shouldShowUnlockPopup ? P((0, q.wb)(G.B.UnlockTransfer)) : (P($.Ay.changeExpiry(z.i.ONE_DAY_IN_SECONDS)), P((0, q.jW)())))
                    }, [g, ek, eI, ej, k.enabled, k.shouldShowUnlockPopup, P]),
                    eO = (0, X.x)(),
                    eN = f.js.ULTIMATE,
                    eF = eT ? f.CS.WEEKLY : f.CS.MONTHLY,
                    {
                        availableProducts: eU,
                        allowedPaymentMethods: eD
                    } = (0, m._)({
                        defaultPlanTier: eN,
                        defaultBillingPeriod: eF,
                        freeTrialAvailable: eP,
                        starterPlanEnabled: !1,
                        monthlyBillingEnabled: !0,
                        weeklyBillingEnabled: eT
                    });
                (0, d.useEffect)(() => {
                    if (ef || ek.sizeQuota != 1 / 0) {
                        (0, h.Od)().trackUserAction(W.Sm.paywallDisplayed({
                            trigger: eI,
                            type: ej,
                            usageData: ek
                        }));
                        let {
                            isSupported: e,
                            isDismissible: l,
                            isBlocking: t
                        } = (0, w.VO)(eI);
                        e && P((0, O.qJ)({
                            paywallInfo: {
                                style: b.pU.FREE_LIMIT_FULLSCREEN,
                                trigger: eI,
                                isDismissible: l,
                                isBlocking: t,
                                isFirstPaywall: void 0,
                                productsDisplayed: eU,
                                paymentMethodsAvailable: eD
                            },
                            predictionInfo: {
                                prediction: void 0,
                                isExperienceModifiedByPrediction: void 0,
                                predictionModel: void 0
                            }
                        }))
                    }
                }, [ek]), (0, d.useEffect)(() => {
                    let e = () => {
                        (0, h.Od)().trackUserAction(W.Sm.paywallDismissed({
                            dismissMethod: i.tS.AUTO_DISMISS,
                            usageData: ek,
                            trigger: eI,
                            type: ej
                        })), g(), P((0, O.OT)())
                    };
                    return n && document.addEventListener("mouseleave", e), () => {
                        n && document.removeEventListener("mouseleave", e)
                    }
                }, [g, n, ek, eI, ej, P]);
                let ez = p ? ea().buttonCloseLeft : ea().buttonCloseRight,
                    eW = p ? x.Uv : x.$A,
                    eB = (0, d.useMemo)(() => (0, L.kQ)({
                        loginHint: null == ec ? void 0 : ec.email,
                        tier: eN,
                        billingPeriod: eF,
                        requestFreeTrial: eP,
                        paywallId: eL
                    }), [null == ec ? void 0 : ec.email, eN, eF, eP, eL]),
                    eH = (0, d.useCallback)(() => {
                        if ((0, K.Je)(ec)) return void R(f.js.ULTIMATE, null == eE ? void 0 : eE.interval);
                        window.open(eB, "_blank", "noopener,noreferrer")
                    }, [ec, eB, R, null == eE ? void 0 : eE.interval]),
                    eV = (0, d.useMemo)(() => eS || !t ? (0, r.jsx)(u.$, {
                        fullwidth: !0,
                        size: "medium",
                        appearance: "secondary",
                        onClick: () => eM({
                            method: i.tS.SECONDARY_CTA
                        }),
                        tabIndex: 1,
                        "data-testid": "fullscreenPaywallDismissCTA",
                        children: eS ? E("paywalls.free_limit.secondary_softer_cta") : E("paywalls.free_limit.cta_dismiss")
                    }) : null, [t, eS, eM, E]);
                return e_ ? null : (0, r.jsxs)(r.Fragment, {
                    children: [en && (0, r.jsx)(U.r, {
                        switchPlansOrReactivate: et,
                        planName: er,
                        isLoading: es,
                        closeModal: ei,
                        planTier: ed,
                        selectedBillingInterval: eo
                    }), (0, r.jsx)(c.A, {
                        in: !0,
                        appear: !0,
                        timeout: 200,
                        classNames: {
                            enter: ea().backgroundEnter,
                            enterActive: ea().backgroundEnterActive,
                            appear: ea().backgroundAppear,
                            appearActive: ea().backgroundAppearActive
                        },
                        children: (0, r.jsx)("div", {
                            className: ea().background,
                            onClick: a ? () => eM({
                                method: i.tS.CLICK_OUTSIDE
                            }) : void 0,
                            "data-testid": "fullscreenPaywallBackground"
                        })
                    }), (0, r.jsx)("div", {
                        className: ea().paywallContainer,
                        children: (0, r.jsx)(c.A, {
                            in: !0,
                            appear: !0,
                            timeout: 200,
                            classNames: {
                                enter: ea().paywallEnter,
                                enterActive: ea().paywallEnterActive,
                                appear: ea().paywallAppear,
                                appearActive: ea().paywallAppearActive,
                                exit: ea().paywallExit,
                                exitActive: ea().paywallExitActive
                            },
                            children: (0, r.jsxs)("div", {
                                className: ea().paywall,
                                children: [(0, r.jsx)("div", {
                                    className: ea().imageContainer,
                                    children: (0, r.jsx)(s(), {
                                        src: el,
                                        alt: "",
                                        fill: !0,
                                        sizes: "50vw",
                                        style: {
                                            objectFit: "cover"
                                        }
                                    })
                                }), (0, r.jsx)("div", {
                                    className: ez,
                                    onClick: () => {
                                        eM({
                                            method: p ? i.tS.TOP_LEFT_X : i.tS.TOP_RIGHT_X
                                        })
                                    },
                                    tabIndex: 2,
                                    "data-testid": "fullscreenPaywallClose",
                                    children: (0, r.jsx)(y.Ay, {
                                        color: eW,
                                        hoverColor: x.Id,
                                        type: "Close"
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: ea().content,
                                    children: [(0, r.jsx)("span", {
                                        className: ea().title,
                                        children: E("paywalls.free_limit.title")
                                    }), (0, r.jsxs)("div", {
                                        className: ea().highlightContainer,
                                        children: [(0, r.jsx)(I.O5q, {
                                            className: ea().warningIcon,
                                            size: "medium"
                                        }), (0, r.jsxs)("div", {
                                            className: ea().highlightTextContainer,
                                            children: [(0, r.jsx)("span", {
                                                className: ea().highlightTitle,
                                                children: E("paywalls.free_limit.highlight_title")
                                            }), (0, r.jsx)("span", {
                                                className: ea().highlightText,
                                                dangerouslySetInnerHTML: {
                                                    __html: eR ? E("paywalls.free_limit.transfers_count", {
                                                        usedTransfers: ek.countUsage,
                                                        totalTransfers: ek.countQuota
                                                    }) : E("paywalls.free_limit.highlight_text_size", {
                                                        plan: String(l = ex || f.js.FREE).charAt(0).toUpperCase() + String(l || f.js.FREE).slice(1).toLowerCase(),
                                                        size: Q.A.numberOfGigabytes(ek.sizeQuota, 0) + " GB"
                                                    })
                                                }
                                            })]
                                        })]
                                    }), (0, r.jsx)("div", {
                                        className: ea().perksTitle,
                                        children: E("paywalls.free_limit.perks_title")
                                    }), (0, r.jsxs)("div", {
                                        className: ea().perksContainer,
                                        children: [(0, r.jsx)(v.T, {
                                            description: E("paywalls.free_limit.perk_1"),
                                            icon: "zap"
                                        }), (0, r.jsx)(v.T, {
                                            description: E(eS ? "paywalls.free_limit.perk_2_softer" : "paywalls.free_limit.perk_2", {
                                                days: Q.A.t("datetime.distance_in_words.x_days", {
                                                    count: eO
                                                }),
                                                href: "https://help.wetransfer.com/hc/en-us/articles/23797009758098"
                                            }),
                                            icon: "disabled-check"
                                        })]
                                    }), (0, r.jsx)(u.$, {
                                        variation: "upsell",
                                        className: ea().buttonPrimary,
                                        as: "a",
                                        fullwidth: !0,
                                        size: "medium",
                                        appearance: "primary",
                                        onClick: () => {
                                            (0, h.Od)().trackUserAction(W.Sm.paywallPurchaseButtonTapped({
                                                usageData: ek,
                                                isFreeTrialAvailable: eP,
                                                trigger: eI,
                                                type: ej
                                            })), eH()
                                        },
                                        tabIndex: 0,
                                        children: eP ? E("paywalls.free_limit.cta_free_trial") : E("paywalls.free_limit.cta_checkout_repackaging")
                                    }), eV]
                                })]
                            })
                        })
                    })]
                })
            }
            var er = t(76616),
                en = t(97151);
            let es = {
                src: "/_next/static/media/visual.c589e220.png",
                height: 1596,
                width: 1140,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAFVBMVEU2Z+svYeo+bep4luzO1u1KcNavwfGfEWhHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAJ0lEQVR4nFXHsQ0AIBDDQMd52H9kREGBm5NJEuABCratsGfmriz5OgcfAD2f2n+zAAAAAElFTkSuQmCC",
                blurWidth: 6,
                blurHeight: 8
            };
            var ed = t(71335),
                eo = t.n(ed);

            function e_(e) {
                let {
                    isLowDismissibility: l,
                    dismissOnOutsideClick: t,
                    dismissOnMouseLeave: a,
                    isLeftCloseButton: n,
                    onPaywallDismiss: p
                } = e, {
                    t: g
                } = (0, o.Bd)(), v = (0, _.wA)(), {
                    currentUsage: E,
                    quota: S
                } = (0, M.J)(), {
                    currentUsage: P,
                    quota: T
                } = (0, j.i)(), {
                    canSeeFreeTrials: k
                } = (0, C.av)(), R = Y(), N = (0, _.d4)(ee.Kj), F = (0, _.d4)(Z.R2), U = (0, _.d4)(Z.Me), D = (0, A.NA)(), z = J(), H = (0, _.d4)(O.KO), V = (0, _.d4)(e => {
                    var l;
                    return null == (l = e.catalog) ? void 0 : l.isLoading
                }), q = (0, B.QR)(), G = (0, B.kC)(), K = k && R, $ = D && z, el = (0, X.x)(), et = (0, d.useMemo)(() => {
                    let e = T,
                        l = S;
                    if (q && (l = 20), G) switch (F) {
                        case f.js.FREE:
                            e = 0x140000000;
                            break;
                        case f.js.STARTER:
                            e = 0x4b00000000
                    }
                    return {
                        countUsage: E,
                        countQuota: l,
                        countPeriodicity: 30,
                        transferSize: N.size,
                        sizeUsage: P,
                        sizeQuota: e,
                        sizePeriodicity: 30
                    }
                }, [T, S, q, G, E, N.size, P, F]), ea = (0, d.useMemo)(() => et.countUsage >= 15, [et.countUsage]), ei = (0, d.useMemo)(() => {
                    let e = ea ? b.vW.TRANSFER_BUTTON_CLICKED_TRANSFER_NUMBER_HIGHER_LIMITS_HIT : b.vW.TRANSFER_BUTTON_CLICKED_GB_HIGHER_LIMITS_HIT;
                    return v((0, b.jt)(e)), e
                }, [v, ea]), ed = (0, d.useMemo)(() => ea ? b.pU.POP_UP_HIGHER_LIMITS_NUMBER : b.pU.POP_UP_HIGHER_LIMITS_GB, [ea]), e_ = (0, d.useCallback)(e => {
                    let {
                        method: l
                    } = e;
                    p(), (0, h.Od)().trackUserAction(W.Sm.paywallDismissed({
                        dismissMethod: l,
                        usageData: et,
                        trigger: ei,
                        type: ed
                    })), v((0, O.OT)()), v((0, en.Tn)())
                }, [p, et, ei, ed, v]), ec = f.js.ULTIMATE, eu = $ ? f.CS.WEEKLY : f.CS.MONTHLY, {
                    availableProducts: ew,
                    allowedPaymentMethods: em
                } = (0, m._)({
                    defaultPlanTier: ec,
                    defaultBillingPeriod: eu,
                    freeTrialAvailable: K,
                    starterPlanEnabled: !1,
                    monthlyBillingEnabled: !0,
                    weeklyBillingEnabled: $
                });
                (0, d.useEffect)(() => {
                    if (U || et.sizeQuota != 1 / 0) {
                        (0, h.Od)().trackUserAction(W.Sm.paywallDisplayed({
                            trigger: ei,
                            type: ed,
                            usageData: et
                        }));
                        let {
                            isSupported: e,
                            isDismissible: l,
                            isBlocking: t
                        } = (0, w.VO)(ei);
                        e && v((0, O.qJ)({
                            paywallInfo: {
                                style: b.pU.FREE_HIGHER_LIMITS_FULLSCREEN,
                                trigger: ei,
                                isDismissible: l,
                                isBlocking: t,
                                isFirstPaywall: void 0,
                                productsDisplayed: ew,
                                paymentMethodsAvailable: em
                            },
                            predictionInfo: {
                                prediction: void 0,
                                isExperienceModifiedByPrediction: void 0,
                                predictionModel: void 0
                            }
                        }))
                    }
                }, [v, ei, ed, et, ew, em, U]), (0, d.useEffect)(() => {
                    let e = () => {
                        (0, h.Od)().trackUserAction(W.Sm.paywallDismissed({
                            dismissMethod: i.tS.AUTO_DISMISS,
                            usageData: et,
                            trigger: ei,
                            type: ed
                        })), p(), v((0, O.OT)()), v((0, en.Tn)())
                    };
                    return a && document.addEventListener("mouseleave", e), () => {
                        a && document.removeEventListener("mouseleave", e)
                    }
                }, [p, a, et, ei, ed, v]);
                let ep = n ? eo().buttonCloseLeft : eo().buttonCloseRight,
                    eg = n ? x.Uv : x.h3,
                    eh = (0, d.useMemo)(() => (0, L.kQ)({
                        tier: ec,
                        billingPeriod: eu,
                        requestFreeTrial: K,
                        paywallId: H
                    }), [ec, eu, K, H]),
                    ey = (0, d.useCallback)(() => {
                        window.open(eh, "_blank", "noopener,noreferrer")
                    }, [eh]);
                if (V) return null;
                let ex = et.countUsage,
                    ef = et.countQuota,
                    ev = Math.min(Math.floor(ex / ef * 100), 100),
                    eb = et.sizeUsage,
                    eL = et.sizeQuota,
                    eE = Math.min(Math.floor(eb / eL * 100), 100),
                    eS = ea ? ev : eE,
                    eC = ea ? g("paywalls.free_limit.higher_limits.transfer_limit.title", {
                        transfersLeft: ef - ex
                    }) : g("paywalls.free_limit.higher_limits.storage_limit.title", {
                        storageLeft: Q.A.numberOfGigabytes(eL - eb, 2)
                    }),
                    eA = ea ? g("paywalls.free_limit.higher_limits.transfer_limit.count", {
                        usedTransfers: ex,
                        totalTransfers: ef
                    }) : g("paywalls.free_limit.higher_limits.storage_limit.count", {
                        usedStorage: Q.A.numberOfGigabytes(eb, 2),
                        totalStorage: Q.A.numberOfGigabytes(eL, 0)
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(c.A, {
                        in: !0,
                        appear: !0,
                        timeout: 200,
                        classNames: {
                            enter: eo().backgroundEnter,
                            enterActive: eo().backgroundEnterActive,
                            appear: eo().backgroundAppear,
                            appearActive: eo().backgroundAppearActive
                        },
                        children: (0, r.jsx)("div", {
                            className: eo().background,
                            onClick: t ? () => e_({
                                method: i.tS.CLICK_OUTSIDE
                            }) : void 0,
                            "data-testid": "fullscreenPaywallBackground"
                        })
                    }), (0, r.jsx)("div", {
                        className: eo().paywallContainer,
                        children: (0, r.jsx)(c.A, {
                            in: !0,
                            appear: !0,
                            timeout: 200,
                            classNames: {
                                enter: eo().paywallEnter,
                                enterActive: eo().paywallEnterActive,
                                appear: eo().paywallAppear,
                                appearActive: eo().paywallAppearActive,
                                exit: eo().paywallExit,
                                exitActive: eo().paywallExitActive
                            },
                            children: (0, r.jsxs)("div", {
                                className: eo().paywall,
                                children: [(0, r.jsx)("div", {
                                    className: eo().imageContainer,
                                    children: (0, r.jsx)(s(), {
                                        src: es,
                                        alt: "",
                                        fill: !0,
                                        sizes: "50vw",
                                        style: {
                                            objectFit: "cover"
                                        }
                                    })
                                }), (0, r.jsx)("div", {
                                    className: ep,
                                    onClick: () => {
                                        e_({
                                            method: n ? i.tS.TOP_LEFT_X : i.tS.TOP_RIGHT_X
                                        })
                                    },
                                    tabIndex: 2,
                                    "data-testid": "fullscreenPaywallClose",
                                    children: (0, r.jsx)(y.Ay, {
                                        type: "CloseNoCircle",
                                        width: 16,
                                        color: eg
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: eo().content,
                                    children: [(0, r.jsx)("span", {
                                        className: eo().title,
                                        children: eC
                                    }), (0, r.jsxs)("div", {
                                        className: eo().usageContainer,
                                        children: [(0, r.jsx)(er.y, {
                                            size: "large",
                                            percentage: eS,
                                            className: eo().usageSpinner,
                                            appearance: "base"
                                        }), (0, r.jsxs)("div", {
                                            className: eo().usageInfo,
                                            children: [(0, r.jsx)("div", {
                                                className: eo().usageText,
                                                children: eA
                                            }), (0, r.jsx)("div", {
                                                className: eo().usageReset,
                                                children: g("paywalls.free_limit.higher_limits.counter_reset", {
                                                    days: el
                                                })
                                            })]
                                        })]
                                    }), (0, r.jsx)("div", {
                                        className: eo().perksTitle,
                                        children: g("paywalls.free_limit.perks_title")
                                    }), (0, r.jsxs)("div", {
                                        className: eo().perksContainer,
                                        children: [(0, r.jsxs)("div", {
                                            className: eo().perkItem,
                                            children: [(0, r.jsx)(I.DmQ, {
                                                size: "small",
                                                className: eo().perkIcon
                                            }), (0, r.jsx)("span", {
                                                className: eo().perkText,
                                                children: g("paywalls.free_limit.higher_limits.perk_1")
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: eo().perkItem,
                                            children: [(0, r.jsx)(I.a1W, {
                                                size: "small",
                                                className: eo().perkIconDisabled
                                            }), (0, r.jsx)("span", {
                                                className: eo().perkText,
                                                dangerouslySetInnerHTML: {
                                                    __html: g("paywalls.free_limit.higher_limits.perk_2", {
                                                        days: Q.A.t("datetime.distance_in_words.x_days", {
                                                            count: el
                                                        }),
                                                        href: "https://help.wetransfer.com/hc/en-us/articles/23797009758098"
                                                    })
                                                }
                                            })]
                                        })]
                                    }), (0, r.jsx)(u.$, {
                                        variation: "upsell",
                                        className: eo().buttonPrimary,
                                        as: "a",
                                        fullwidth: !0,
                                        size: "medium",
                                        appearance: "primary",
                                        onClick: () => {
                                            (0, h.Od)().trackUserAction(W.Sm.paywallPurchaseButtonTapped({
                                                usageData: et,
                                                isFreeTrialAvailable: K,
                                                trigger: ei,
                                                type: ed
                                            })), ey()
                                        },
                                        tabIndex: 0,
                                        children: g(K ? "paywalls.free_limit.cta_free_trial" : "paywalls.free_limit.higher_limits.cta_upgrade")
                                    }), !l && (0, r.jsx)(u.$, {
                                        fullwidth: !0,
                                        size: "medium",
                                        appearance: "secondary",
                                        onClick: () => e_({
                                            method: i.tS.SECONDARY_CTA
                                        }),
                                        tabIndex: 1,
                                        "data-testid": "fullscreenPaywallDismissCTA",
                                        children: g("paywalls.free_limit.cta_dismiss")
                                    })]
                                })]
                            })
                        })
                    })]
                })
            }
            var ec = t(26187),
                eu = t(69361);
            let ew = {
                src: "/_next/static/media/visual_unlimited.3a49d2d8.png",
                height: 670,
                width: 670,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEWq/tum/NjU9uid7sx/u6K9/OKh8M+y8td3hH2syb9iinqrurSNzbLIaY0dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGNgQAaMbIwQBhsLM4jLyMDCxczAwMjKxMTJwQ5hcIMYDIwMzCw8YMUQHQAPuwCF8jECVAAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 8
            };

            function em(e) {
                let {
                    onPaywallDismiss: l
                } = e, {
                    t
                } = (0, o.Bd)(), {
                    settings: a
                } = (0, S.k)(), {
                    canSeeFreeTrialForMultiStepExpiration: n
                } = (() => {
                    let {
                        settings: e
                    } = (0, S.k)(), {
                        hasRedeemedFreeTrial: l
                    } = (0, E.J)();
                    return {
                        canSeeFreeTrialForMultiStepExpiration: "v3" === e.multi_step_expiration_cta_copy && !l
                    }
                })(), {
                    showUpgradeSubscriptionModal: s
                } = (0, D.W)(), {
                    subscription: c
                } = (0, F.f)(), u = (0, _.d4)(Z.mB), {
                    isLoading: y
                } = (0, N.d)(), x = (0, _.wA)(), v = (0, _.d4)(g.KO), {
                    availableProducts: b,
                    allowedPaymentMethods: C
                } = (0, m._)({
                    defaultPlanTier: f.js.ULTIMATE,
                    defaultBillingPeriod: f.CS.MONTHLY,
                    freeTrialAvailable: n,
                    starterPlanEnabled: !1,
                    monthlyBillingEnabled: !0,
                    weeklyBillingEnabled: !1
                });
                (0, d.useEffect)(() => {
                    (0, h.Od)().trackUserAction(i.wj.paywallDisplayed({
                        trigger: eu.vW.TW_MULTI_STEP_EXPIRATION_UNPERMITTED,
                        type: eu.pU.MULTI_STEP_EXPIRATION_FULLSCREEN
                    }));
                    let {
                        isSupported: e,
                        isDismissible: l,
                        isBlocking: t
                    } = (0, w.VO)(eu.vW.TW_MULTI_STEP_EXPIRATION_UNPERMITTED);
                    e && x((0, p.qJ)({
                        paywallInfo: {
                            style: eu.pU.MULTI_STEP_EXPIRATION_FULLSCREEN,
                            trigger: eu.vW.TW_MULTI_STEP_EXPIRATION_UNPERMITTED,
                            isDismissible: l,
                            isBlocking: t,
                            isFirstPaywall: void 0,
                            productsDisplayed: b,
                            paymentMethodsAvailable: C
                        },
                        predictionInfo: {
                            prediction: void 0,
                            isExperienceModifiedByPrediction: void 0,
                            predictionModel: void 0
                        }
                    }))
                }, []);
                let A = e => {
                        l(), (0, h.Od)().trackUserAction(i.wj.paywallDismissed({
                            dismissMethod: e,
                            trigger: eu.vW.TW_MULTI_STEP_EXPIRATION_UNPERMITTED,
                            type: eu.pU.MULTI_STEP_EXPIRATION_FULLSCREEN
                        })), x((0, p.OT)())
                    },
                    P = (0, d.useMemo)(() => (0, L.kQ)({
                        loginHint: null == u ? void 0 : u.email,
                        tier: f.js.ULTIMATE,
                        billingPeriod: f.CS.MONTHLY,
                        requestFreeTrial: n,
                        paywallId: v
                    }), [null == u ? void 0 : u.email, v, n]),
                    T = (0, d.useCallback)(() => {
                        if ((0, h.Od)().trackUserAction(i.wj.paywallPurchaseButtonTapped({
                                trigger: eu.vW.TW_MULTI_STEP_EXPIRATION_UNPERMITTED,
                                type: eu.pU.MULTI_STEP_EXPIRATION_FULLSCREEN
                            })), (0, K.Je)(u)) return void s(f.js.ULTIMATE, null == c ? void 0 : c.interval);
                        window.open(P, "_blank", "noopener,noreferrer")
                    }, [u, P, s, null == c ? void 0 : c.interval]);
                return y ? null : (0, r.jsx)(ec.o, {
                    title: t("paywalls.multi_step_expiration.title"),
                    body: t("paywalls.multi_step_expiration.body"),
                    mainCta: t(n ? "paywalls.multi_step_expiration.cta_free_trial" : "v2" === a.multi_step_expiration_cta_copy ? "paywalls.multi_step_expiration.cta_checkout_v2" : "paywalls.multi_step_expiration.cta_checkout_v1"),
                    mainCtaVariation: "upsell",
                    onClickMainCta: T,
                    secondaryCta: t("paywalls.multi_step_expiration.cta_dismiss"),
                    onClickSecondaryCta: () => A(i.tS.SECONDARY_CTA),
                    image: ew,
                    onPaywallDismiss: e => A(e)
                })
            }
            var ep = t(46001),
                eg = t.n(ep),
                eh = t(22844);
            let ey = {
                src: "/_next/static/media/visual.2f0e57d0.png",
                height: 2101,
                width: 1520,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAJFBMVEXg6v/j7v/d5P/W3vDi5fnL1eBldfvWsturssLmz97FzNy5i4Nl8Zm6AAAACXBIWXMAACxLAAAsSwGlPZapAAAALElEQVR4nGNggAEmCMnOCmKwcHBzMjIwMLCxsYBEmVmZQTxGZi4QxcDAyAAACdoAYNenIxUAAAAASUVORK5CYII=",
                blurWidth: 6,
                blurHeight: 8
            };
            var ex = t(80751),
                ef = t.n(ex);

            function ev(e) {
                let {
                    onPaywallDismiss: l
                } = e, {
                    t
                } = (0, o.Bd)(), {
                    isLoading: a
                } = (0, N.d)(), n = (() => {
                    let {
                        settings: {
                            one_day_expiry_free_transfer_3gb_paywall_kind: e
                        }
                    } = (0, S.k)(), l = (0, _.d4)(Z.Ce), t = (0, _.d4)(H.Sr);
                    return !!(null == t ? void 0 : t.singleTransferSize) && !l && "disabled" !== e
                })(), {
                    user: y
                } = (0, _.d4)(e => ({
                    user: e.user
                })), x = (0, _.wA)(), b = (0, _.d4)(g.KO), {
                    canSeeFreeTrialForThisTrigger: E
                } = (0, eh.J)(eu.vW.TW_TRANSFER_SIZE_LIMIT_HIT), {
                    availableProducts: C,
                    allowedPaymentMethods: A
                } = (0, m._)({
                    defaultPlanTier: f.js.ULTIMATE,
                    defaultBillingPeriod: f.CS.MONTHLY,
                    freeTrialAvailable: E,
                    starterPlanEnabled: !1,
                    monthlyBillingEnabled: !0,
                    weeklyBillingEnabled: !1
                });
                (0, d.useEffect)(() => {
                    (0, h.Od)().trackUserAction(i.wj.paywallDisplayed({
                        trigger: eu.vW.TW_TRANSFER_SIZE_LIMIT_HIT,
                        type: eu.pU.TRANSFER_SIZE_LIMIT_FULLSCREEN
                    }));
                    let {
                        isSupported: e,
                        isDismissible: l,
                        isBlocking: t
                    } = (0, w.VO)(eu.vW.TW_TRANSFER_SIZE_LIMIT_HIT);
                    e && x((0, p.qJ)({
                        paywallInfo: {
                            style: eu.pU.TRANSFER_SIZE_LIMIT_FULLSCREEN,
                            trigger: eu.vW.TW_TRANSFER_SIZE_LIMIT_HIT,
                            isDismissible: l,
                            isBlocking: t,
                            isFirstPaywall: void 0,
                            productsDisplayed: C,
                            paymentMethodsAvailable: A
                        },
                        predictionInfo: {
                            prediction: void 0,
                            isExperienceModifiedByPrediction: void 0,
                            predictionModel: void 0
                        }
                    }))
                }, []);
                let P = e => {
                        l(), (0, h.Od)().trackUserAction(i.wj.paywallDismissed({
                            dismissMethod: e,
                            trigger: eu.vW.TW_TRANSFER_SIZE_LIMIT_HIT,
                            type: eu.pU.TRANSFER_SIZE_LIMIT_FULLSCREEN
                        })), (0, w.VO)(eu.vW.TW_TRANSFER_SIZE_LIMIT_HIT).isSupported && x((0, p.OT)()), n && x((0, q.o4)(G.B.UnlockTransfer))
                    },
                    T = (0, d.useMemo)(() => (0, L.kQ)({
                        loginHint: null == y ? void 0 : y.email,
                        tier: f.js.ULTIMATE,
                        billingPeriod: f.CS.MONTHLY,
                        paywallId: b,
                        requestFreeTrial: E
                    }), [null == y ? void 0 : y.email, b, E]),
                    k = (0, d.useCallback)(() => {
                        (0, h.Od)().trackUserAction(i.wj.paywallPurchaseButtonTapped({
                            trigger: eu.vW.TW_TRANSFER_SIZE_LIMIT_HIT,
                            type: eu.pU.TRANSFER_SIZE_LIMIT_FULLSCREEN
                        })), window.open(T, "_blank", "noopener,noreferrer")
                    }, [T]);
                return a ? null : (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(c.A, {
                        in: !0,
                        appear: !0,
                        timeout: 200,
                        classNames: {
                            enter: ef().backgroundEnter,
                            enterActive: ef().backgroundEnterActive,
                            appear: ef().backgroundAppear,
                            appearActive: ef().backgroundAppearActive
                        },
                        children: (0, r.jsx)("div", {
                            className: ef().background,
                            onClick: () => P(i.tS.CLICK_OUTSIDE),
                            "data-testid": "fullscreenPaywallBackground"
                        })
                    }), (0, r.jsx)("div", {
                        className: ef().paywallContainer,
                        children: (0, r.jsx)(c.A, {
                            in: !0,
                            appear: !0,
                            timeout: 200,
                            classNames: {
                                enter: ef().paywallEnter,
                                enterActive: ef().paywallEnterActive,
                                appear: ef().paywallAppear,
                                appearActive: ef().paywallAppearActive,
                                exit: ef().paywallExit,
                                exitActive: ef().paywallExitActive
                            },
                            children: (0, r.jsxs)("div", {
                                className: ef().paywall,
                                children: [(0, r.jsx)("div", {
                                    className: ef().imageContainer,
                                    children: (0, r.jsx)(s(), {
                                        src: ey,
                                        alt: "",
                                        fill: !0,
                                        sizes: "50vw",
                                        style: {
                                            objectFit: "cover"
                                        }
                                    })
                                }), (0, r.jsx)(I.$Td, {
                                    "aria-hidden": !0,
                                    className: ef().closeButton,
                                    onClick: () => {
                                        P(i.tS.TOP_RIGHT_X)
                                    },
                                    tabIndex: 2,
                                    "data-testid": "fullscreenPaywallClose"
                                }), (0, r.jsxs)("div", {
                                    className: ef().content,
                                    children: [(0, r.jsx)("div", {
                                        className: ef().title,
                                        children: t("paywalls.transfer_size_limit.title")
                                    }), (0, r.jsxs)("div", {
                                        className: ef().bodyContainer,
                                        children: [(0, r.jsx)("div", {
                                            className: ef().body,
                                            children: t("paywalls.transfer_size_limit.body_1")
                                        }), (0, r.jsxs)("div", {
                                            className: ef().benefitsContainer,
                                            children: [(0, r.jsx)(v.T, {
                                                description: t("paywalls.transfer_size_limit.benefit_1"),
                                                icon: "check"
                                            }), (0, r.jsx)(v.T, {
                                                description: t("paywalls.transfer_size_limit.benefit_2"),
                                                icon: "check"
                                            }), (0, r.jsx)(v.T, {
                                                description: t("paywalls.transfer_size_limit.benefit_3"),
                                                icon: "check"
                                            })]
                                        }), (0, r.jsx)("div", {
                                            className: eg()(ef().body, ef().bold),
                                            children: t("paywalls.transfer_size_limit.body_2")
                                        })]
                                    }), (0, r.jsx)(u.$, {
                                        variation: "upsell",
                                        as: "a",
                                        fullwidth: !0,
                                        size: "medium",
                                        appearance: "primary",
                                        onClick: k,
                                        tabIndex: 0,
                                        children: t(E ? "paywalls.transfer_size_limit.cta_free_trial" : "paywalls.transfer_size_limit.cta_checkout")
                                    })]
                                })]
                            })
                        })
                    })]
                })
            }

            function eb() {
                let e = (0, a.ir)(),
                    l = (0, a.N1)();
                return {
                    canShow: e || l.canShow,
                    isBlockingUpload: e || l.isBlockingUpload
                }
            }
        },
        82679: (e, l, t) => {
            "use strict";
            t.d(l, {
                A: () => r
            });
            var a = t(23798),
                i = t(15321);
            let r = e => {
                let {
                    className: l = "logo",
                    shadow: t = !1,
                    width: r = 42,
                    ...n
                } = e;
                return t ? (e => {
                    let {
                        className: l = "logo",
                        color: t,
                        onClick: r,
                        width: n,
                        height: s
                    } = e, d = s || 29 * Math.round(n / 52);
                    return (0, a.jsxs)("svg", {
                        onClick: r,
                        width: n + 8,
                        height: d,
                        className: l,
                        viewBox: "-4 -2 52 29",
                        children: [(0, a.jsxs)("defs", {
                            children: [(0, a.jsx)("path", {
                                id: "".concat(l, "-logo-path"),
                                d: "M25.4 10.6c0-6.2 4.4-9.9 10.1-9.9C40.6.7 44 3.3 44 6.9c0 3.4-2.9 5.6-6.1 5.6-1.8 0-3.1-.3-4-1-.3-.3-.5-.2-.5.1 0 1.3.5 2.3 1.3 3.2.7.7 2 1.2 3.2 1.2 1.3 0 2.4-.3 3.4-.8s1.8-.3 2.3.5c.6.9-.2 2.1-.9 2.9-1.3 1.4-3.8 2.4-7 2.4-6.5-.2-10.3-4.6-10.3-10.4zm-13.3 4.1c.6 0 1 .3 1.4 1l1.8 2.9c.7 1.1 1.3 1.9 2.6 1.9s2-.5 2.6-2c.8-1.8 1.7-4.1 2.4-7.1.9-3.4 1.3-5.4 1.3-7.1s-.5-2.7-2.4-3c-2.5-.5-6-.7-9.7-.7s-7.2.2-9.7.6C.5 1.6 0 2.6 0 4.3S.4 8 1.2 11.4c.8 3 1.6 5.2 2.4 7.1.7 1.5 1.3 2 2.6 2s1.9-.8 2.6-1.9l1.8-2.9c.5-.6.9-1 1.5-1z"
                            }), (0, a.jsxs)("filter", {
                                id: "logo-filter",
                                width: "200%",
                                height: "200%",
                                x: "-50%",
                                y: "-50%",
                                filterUnits: "objectBoundingBox",
                                children: [(0, a.jsx)("feOffset", {
                                    dx: "0",
                                    dy: "2",
                                    in: "SourceAlpha",
                                    result: "shadowOffsetOuter1"
                                }), (0, a.jsx)("feGaussianBlur", {
                                    stdDeviation: "2",
                                    in: "shadowOffsetOuter1",
                                    result: "shadowBlurOuter1"
                                })]
                            })]
                        }), (0, a.jsxs)("g", {
                            fill: "none",
                            className: "logo-shape",
                            children: [(0, a.jsx)("use", {
                                fill: i.NI,
                                fillOpacity: "0.11",
                                filter: "url(#logo-filter)",
                                xlinkHref: "#".concat(l, "-logo-path")
                            }), (0, a.jsx)("use", {
                                fill: t,
                                fillRule: "evenodd",
                                xlinkHref: "#".concat(l, "-logo-path")
                            })]
                        })]
                    })
                })({
                    className: l,
                    width: r,
                    ...n
                }) : (e => {
                    let {
                        className: l = "logo",
                        color: t,
                        onClick: i,
                        width: r,
                        height: n
                    } = e, s = n || 21 * Math.round(r / 44);
                    return (0, a.jsxs)("svg", {
                        onClick: i,
                        width: r,
                        height: s,
                        className: l,
                        viewBox: "0 0 44 21",
                        children: [(0, a.jsx)("defs", {
                            children: (0, a.jsx)("path", {
                                id: "".concat(l, "-logo-path"),
                                d: "M25.4 10.6c0-6.2 4.4-9.9 10.1-9.9C40.6.7 44 3.3 44 6.9c0 3.4-2.9 5.6-6.1 5.6-1.8 0-3.1-.3-4-1-.3-.3-.5-.2-.5.1 0 1.3.5 2.3 1.3 3.2.7.7 2 1.2 3.2 1.2 1.3 0 2.4-.3 3.4-.8s1.8-.3 2.3.5c.6.9-.2 2.1-.9 2.9-1.3 1.4-3.8 2.4-7 2.4-6.5-.2-10.3-4.6-10.3-10.4zm-13.3 4.1c.6 0 1 .3 1.4 1l1.8 2.9c.7 1.1 1.3 1.9 2.6 1.9s2-.5 2.6-2c.8-1.8 1.7-4.1 2.4-7.1.9-3.4 1.3-5.4 1.3-7.1s-.5-2.7-2.4-3c-2.5-.5-6-.7-9.7-.7s-7.2.2-9.7.6C.5 1.6 0 2.6 0 4.3S.4 8 1.2 11.4c.8 3 1.6 5.2 2.4 7.1.7 1.5 1.3 2 2.6 2s1.9-.8 2.6-1.9l1.8-2.9c.5-.6.9-1 1.5-1z"
                            })
                        }), (0, a.jsx)("g", {
                            fill: "none",
                            className: "logo-shape",
                            children: (0, a.jsx)("use", {
                                fill: t,
                                fillRule: "evenodd",
                                xlinkHref: "#".concat(l, "-logo-path")
                            })
                        })]
                    })
                })({
                    className: l,
                    width: r,
                    ...n
                })
            }
        },
        83489: (e, l, t) => {
            "use strict";
            t.d(l, {
                J: () => n
            });
            var a = t(49944),
                i = t(25330),
                r = t(78694);

            function n() {
                var e, l, t, n, s, d, o;
                let _ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    {
                        entitlements: c
                    } = (0, a.o)({
                        ignoreChannel: _
                    }),
                    u = c[r.Z.TRANSFER_NUMBER_LIMIT];
                (0, i.A)(u, c, r.Z.TRANSFER_NUMBER_LIMIT);
                let w = null != (d = null == u || null == (l = u.rule) || null == (e = l.counter) ? void 0 : e.unlimited) && d,
                    m = null == u || null == (n = u.rule) || null == (t = n.counter) ? void 0 : t.value,
                    p = w || null == m ? 1 / 0 : m,
                    g = null != (o = null == u || null == (s = u.metering) ? void 0 : s.value) ? o : 0;
                return {
                    quota: p,
                    currentUsage: g,
                    unlimited: w,
                    isLimitReached: () => g >= p && !w
                }
            }
        },
        85236: (e, l, t) => {
            "use strict";
            t.d(l, {
                E0: () => n,
                VX: () => s
            });
            var a = t(74736),
                i = t(55676),
                r = t(37845);

            function n() {
                let e = function() {
                    var e;
                    let l = i.A.get(r.N);
                    return l ? JSON.parse(l).fides_string : null == (e = window.Fides) ? void 0 : e.fides_string
                }();
                if (e) return e.substring(0, e.indexOf(","))
            }
            t(33901);
            let s = () => {
                let e = n();
                return e ? a.TCString.decode(e) : void 0
            }
        },
        85354: (e, l, t) => {
            "use strict";
            t.d(l, {
                g: () => a
            });
            let a = t(49835).d.actions
        },
        85388: (e, l, t) => {
            "use strict";
            t.d(l, {
                AS: () => w,
                HC: () => _,
                P2: () => c,
                Sr: () => r,
                aJ: () => s,
                cq: () => p,
                eV: () => g,
                gU: () => d,
                l_: () => u,
                nC: () => m,
                q5: () => i,
                vY: () => h,
                yW: () => o
            });
            var a = t(4559);
            let i = e => e.checkout;
            (0, a.Mz)(i, e => e.countryCode), (0, a.Mz)(i, e => e.selectedPaymentMethod), (0, a.Mz)(i, e => e.billingPeriod);
            let r = (0, a.Mz)(i, e => e.planTier),
                n = (0, a.Mz)(i, e => e.coupon),
                s = (0, a.Mz)(n, e => null == e ? void 0 : e.code),
                d = (0, a.Mz)(n, e => null == e ? void 0 : e.method),
                o = (0, a.Mz)(i, e => e.enterpriseSeats),
                _ = (0, a.Mz)(i, e => e.email),
                c = (0, a.Mz)(i, e => e.teamId),
                u = (0, a.Mz)(i, e => e.userId);
            (0, a.Mz)(i, e => e.guestToken);
            let w = (0, a.Mz)(i, e => e.showPayment),
                m = (0, a.Mz)(i, e => e.shouldShowFakeDoorModal),
                p = (0, a.Mz)(i, e => e.showFakeDoorModal),
                g = (0, a.Mz)(i, e => e.showPasswordlessLoginForm),
                h = (0, a.Mz)(i, e => e.showUpdateEmailForm);
            (0, a.Mz)(i, e => e.areNorCheckoutTermsAccepted)
        },
        85664: (e, l, t) => {
            "use strict";
            t.d(l, {
                P: () => _,
                h: () => c
            });
            var a = t(4559),
                i = t(7012),
                r = t(82261),
                n = t(90512),
                s = t(12637),
                d = t(45477),
                o = t(86781);
            let _ = (0, a.Mz)(d.d9, s.Pq, o.mB, (e, l, t) => (e => {
                    let {
                        channelWallpapers: l,
                        accountWallpapers: t,
                        user: a
                    } = e;
                    return l.length ? l.map(e => {
                        var l, t;
                        return {
                            format: e.wallpaperType,
                            src: e.src,
                            resizedSrcSmall: e.src,
                            resizedSrcMedium: e.src,
                            resizedSrcLarge: e.src,
                            href: null != (l = e.href) ? l : void 0,
                            title: null != (t = e.title) ? t : void 0,
                            key: String(e.id)
                        }
                    }) : (0, i.WU)(a) ? t.map(e => {
                        let {
                            wallpaper_type: l,
                            asset_url: t
                        } = e;
                        return {
                            format: l,
                            src: t
                        }
                    }) : []
                })({
                    channelWallpapers: e,
                    accountWallpapers: l,
                    user: t
                })),
                c = (0, a.Mz)(r.MK, r.Uh, _, n.Ei, (e, l, t, a) => !!(e && !a && (l || t.length)))
        },
        86248: (e, l, t) => {
            "use strict";
            t.d(l, {
                KO: () => a,
                zs: () => i
            });
            let a = e => e.wolfAnalytics.paywallId,
                i = e => {
                    let l = e.wolfAnalytics;
                    return {
                        paywallInfo: l.paywallInfo,
                        predictionInfo: l.predictionInfo,
                        transferInfo: l.transferInfo,
                        senderInfo: l.senderInfo,
                        contextInfo: l.contextInfo
                    }
                }
        },
        87412: (e, l, t) => {
            "use strict";
            t.d(l, {
                l: () => d
            });
            var a = t(21462),
                i = t(38169),
                r = t(26232),
                n = t(15913),
                s = t(96644);
            let d = () => {
                let {
                    currentTeam: e
                } = (0, n.o)(), [l] = (0, r.gA)(), t = (0, i.wA)();
                return (0, a.useCallback)(async () => {
                    if (e) try {
                        await l({
                            teamId: e.id
                        }).unwrap(), t(s.P9.setPanelNotification({
                            category: s.aF.Notification,
                            details: "reactivate_subscription_success"
                        }))
                    } catch (e) {
                        t(s.P9.setPanelNotification({
                            category: s.aF.Error,
                            details: "reactivate_subscription_success"
                        }))
                    }
                }, [e, l, t])
            }
        },
        87676: (e, l, t) => {
            "use strict";
            t.d(l, {
                J: () => s
            });
            var a = t(38169),
                i = t(8997),
                r = t(15913),
                n = t(86781);
            let s = () => {
                var e, l;
                let {
                    isLoading: t,
                    sessionUser: s
                } = (0, i.h)(), {
                    currentTeam: d,
                    fetching: o
                } = (0, r.o)();
                if (!(0, a.d4)(n.JV)) return {
                    isLoading: !1,
                    hasRedeemedFreeTrial: !1
                };
                let _ = (null != (l = null == s ? void 0 : s.memberships) ? l : []).find(e => e.team_id === (null == d ? void 0 : d.id));
                return {
                    isLoading: t || o,
                    hasRedeemedFreeTrial: !!(null == _ || null == (e = _.account) ? void 0 : e.free_trial_redeemed_at)
                }
            }
        },
        87983: (e, l, t) => {
            "use strict";
            t.d(l, {
                d: () => g
            });
            var a = t(21462),
                i = t(38169),
                r = t(85388),
                n = t(72939),
                s = t(97875),
                d = t(98463),
                o = t(23901);
            let {
                useGetTiersPricingQuery: _
            } = d.K.injectEndpoints({
                endpoints: e => ({
                    getTiersPricing: e.query({
                        query: e => {
                            let {
                                useMoneta: l,
                                ...t
                            } = e;
                            return {
                                url: "catalog/tiers",
                                method: "GET",
                                params: t,
                                headers: {
                                    "X-Payment-Provider": l ? "moneta" : "stripe"
                                }
                            }
                        },
                        transformResponse: e => (e => {
                            let l = {};
                            return Object.keys(e).forEach(t => {
                                l[t] = (0, o.x)(e[t])
                            }), l
                        })(e.plans)
                    })
                })
            });
            var c = t(89187),
                u = t(95281),
                w = t(62760),
                m = t(15913),
                p = t(28330);
            let g = () => {
                let e = (0, s.G)(),
                    {
                        currentTeam: l
                    } = (0, m.o)(),
                    t = (() => {
                        let e = (() => {
                                let {
                                    settings: e
                                } = (0, w.k)();
                                if ("none" !== e.enterprise_tier_price_billy_experiment_flag) return e.enterprise_tier_price_billy_experiment_flag
                            })(),
                            l = [e, (() => {
                                let {
                                    settings: e
                                } = (0, w.k)();
                                if ("none" !== e.ultimate_tier_weekly_price_billy_experiment_flag) return e.ultimate_tier_weekly_price_billy_experiment_flag
                            })(), (() => {
                                let {
                                    settings: e
                                } = (0, w.k)();
                                if ("none" !== e.ultimate_tier_price_billy_experiment_flag) return e.ultimate_tier_price_billy_experiment_flag
                            })()].filter(Boolean);
                        return l.length > 0 ? l.join(",") : void 0
                    })(),
                    d = (0, i.d4)(r.aJ),
                    o = (0, u.eL)(),
                    g = (0, n.X)(),
                    h = null != d ? d : o,
                    {
                        refetch: y,
                        data: x,
                        isError: f,
                        isFetching: v,
                        isLoading: b
                    } = _({
                        country_code: e,
                        ...(null == l ? void 0 : l.id) ? {
                            team_id: null == l ? void 0 : l.id
                        } : {},
                        ...t ? {
                            experiments: t
                        } : {},
                        ...h ? {
                            coupon_code: h
                        } : {},
                        useMoneta: g
                    }),
                    L = (0, a.useCallback)(e => {
                        if (x) return null == x ? void 0 : x[e]
                    }, [x]),
                    E = (0, a.useCallback)((e, l) => {
                        let t;
                        if (!x) return;
                        let a = L(e);
                        switch (l) {
                            case c.CS.MONTHLY:
                            case p.YF.month:
                                t = p.YF.month;
                                break;
                            case c.CS.WEEKLY:
                            case p.YF.week:
                                t = p.YF.week;
                                break;
                            default:
                                t = p.YF.year
                        }
                        return a ? a[t] : void 0
                    }, [x, L]);
                return {
                    catalog: x,
                    isLoading: b || v,
                    isError: f,
                    refetch: y,
                    getPlanByTierAndInterval: E,
                    getPackageByTier: L
                }
            }
        },
        88919: (e, l, t) => {
            "use strict";
            t.d(l, {
                Z: () => i
            });
            var a = t(21462);
            let i = e => {
                let l = (0, a.useRef)();
                return (0, a.useEffect)(() => {
                    l.current = e
                }, [e]), l.current
            }
        },
        89614: (e, l, t) => {
            "use strict";
            t.d(l, {
                h: () => d
            });
            var a, i, r = t(21462),
                n = ["title", "titleId"];

            function s() {
                return (s = Object.assign ? Object.assign.bind() : function(e) {
                    for (var l = 1; l < arguments.length; l++) {
                        var t = arguments[l];
                        for (var a in t)({}).hasOwnProperty.call(t, a) && (e[a] = t[a])
                    }
                    return e
                }).apply(null, arguments)
            }
            var d = function(e) {
                var l = e.title,
                    t = e.titleId,
                    d = function(e, l) {
                        if (null == e) return {};
                        var t, a, i = function(e, l) {
                            if (null == e) return {};
                            var t = {};
                            for (var a in e)
                                if (({}).hasOwnProperty.call(e, a)) {
                                    if (-1 !== l.indexOf(a)) continue;
                                    t[a] = e[a]
                                } return t
                        }(e, l);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            for (a = 0; a < r.length; a++) t = r[a], -1 === l.indexOf(t) && ({}).propertyIsEnumerable.call(e, t) && (i[t] = e[t])
                        }
                        return i
                    }(e, n);
                return r.createElement("svg", s({
                    width: 170,
                    height: 170,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-labelledby": t
                }, d), l ? r.createElement("title", {
                    id: t
                }, l) : null, a || (a = r.createElement("g", {
                    clipPath: "url(#chats_svg__a)"
                }, r.createElement("path", {
                    fill: "#fff",
                    d: "M0 0h170v170H0z"
                }), r.createElement("path", {
                    d: "M54 98.87c0-.808 0-1.212.007-1.553.366-17.138 14.172-30.944 31.31-31.31C85.66 66 86.062 66 86.87 66h39.26c.808 0 1.211 0 1.553.007 17.138.366 30.944 14.172 31.31 31.31.007.342.007.745.007 1.553 0 .807 0 1.211-.007 1.552-.366 17.138-14.172 30.944-31.31 31.31-.342.007-.745.007-1.553.007h-4.709c-1.479 0-2.218 0-2.946.033a32.001 32.001 0 0 0-13.222 3.532c-.647.334-1.288.703-2.57 1.44l-18.248 10.497c-1.574.906-2.361 1.359-3.007 1.29a2.002 2.002 0 0 1-1.407-.814c-.382-.525-.382-1.433-.382-3.249v-9.88a2.85 2.85 0 0 0-2.848-2.849C64.204 131.739 54 121.535 54 108.948V98.87Z",
                    fill: "#409FFF"
                }), r.createElement("g", {
                    filter: "url(#chats_svg__b)"
                }, r.createElement("path", {
                    d: "M120 65c0-17.673-14.327-32-32-32H47c-17.673 0-32 14.327-32 32v1.74c0 17.672 14.327 32 32 32h7.069c5.6 0 11.102 1.469 15.956 4.261l18.34 10.551c2.668 1.534 5.996-.391 5.996-3.468v-9.837c0-.833.675-1.508 1.508-1.508C109.196 98.74 120 87.935 120 74.608V65Z",
                    fill: "#fff"
                })), r.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M67 57.942a6.351 6.351 0 0 1 4.305-1.692c1.726 0 3.374.71 4.58 1.96a6.7 6.7 0 0 1 1.865 4.652 6.7 6.7 0 0 1-1.865 4.652c-.796.825-1.591 1.67-2.39 2.518-1.624 1.724-3.265 3.467-4.97 5.108l-.003.004a2.213 2.213 0 0 1-3.113-.069l-7.295-7.561c-2.485-2.577-2.485-6.727 0-9.303A6.328 6.328 0 0 1 67 57.942Z",
                    fill: "#409FFF"
                }))), i || (i = r.createElement("defs", null, r.createElement("clipPath", {
                    id: "chats_svg__a"
                }, r.createElement("path", {
                    fill: "#fff",
                    d: "M0 0h170v170H0z"
                })), r.createElement("filter", {
                    id: "chats_svg__b",
                    x: -9,
                    y: 21,
                    width: 153,
                    height: 129.09,
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB"
                }, r.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), r.createElement("feColorMatrix", {
                    in: "SourceAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                }), r.createElement("feOffset", {
                    dy: 12
                }), r.createElement("feGaussianBlur", {
                    stdDeviation: 12
                }), r.createElement("feColorMatrix", {
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                }), r.createElement("feBlend", {
                    in2: "BackgroundImageFix",
                    result: "effect1_dropShadow_5_997"
                }), r.createElement("feBlend", {
                    in: "SourceGraphic",
                    in2: "effect1_dropShadow_5_997",
                    result: "shape"
                })))))
            }
        },
        91192: (e, l, t) => {
            "use strict";
            t.d(l, {
                c: () => s
            });
            var a = t(38169),
                i = t(98172),
                r = t(86781),
                n = t(15913);
            let s = e => {
                var l, t, s;
                let d = (0, a.d4)(i.e2),
                    o = (0, a.d4)(r.mB),
                    {
                        allTeams: _
                    } = (0, n.o)();
                return !!e && (e.workspaceId ? _ && _.some(l => l.id === e.workspaceId) : e.creator ? (null == o || null == (l = o.email) ? void 0 : l.toLowerCase()) === (null == (t = e.creator.email) ? void 0 : t.toLowerCase()) || d && d.auth0UserId === e.creator.auth0UserId : !!e.sender && (null == o || null == (s = o.email) ? void 0 : s.toLowerCase()) === e.sender.toLowerCase())
            }
        },
        92491: (e, l, t) => {
            "use strict";
            t.d(l, {
                i: () => i
            });
            let a = [".dcm", ".dic"];

            function i(e) {
                var l, t;
                return (null != (t = null != (l = e.files) ? l : e.items) ? t : []).some(e => {
                    var l, t, i;
                    let r = null != (i = null != (t = e.name) ? t : null == (l = e.file) ? void 0 : l.name) ? i : "";
                    if (!r || "string" != typeof r) return !1;
                    let n = r.toLowerCase();
                    return a.some(e => n.endsWith(e))
                })
            }
        },
        93052: (e, l, t) => {
            "use strict";
            t.d(l, {
                q: () => s
            });
            var a = t(21462),
                i = t(38169),
                r = t(51033),
                n = t(35120);
            let s = () => {
                let e = (0, i.d4)(r.j);
                return (0, a.useMemo)(() => {
                    var l;
                    return n.R.includes(null != (l = null == e ? void 0 : e.campaignId) ? l : 0)
                }, [e])
            }
        },
        93591: (e, l, t) => {
            "use strict";
            t.d(l, {
                A: () => r
            });
            var a = t(23798);
            t(21462);
            var i = t(15321);
            let r = e => {
                let {
                    className: l,
                    color: t = i.W5
                } = e;
                return (0, a.jsxs)("svg", {
                    className: l,
                    width: "17",
                    height: "17",
                    viewBox: "0 0 17 17",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, a.jsx)("g", {
                        clipPath: "url(#clip0_6504_895)",
                        children: (0, a.jsx)("path", {
                            d: "M8.5 0.5C12.9183 0.5 16.5 4.08172 16.5 8.5C16.5 12.9183 12.9183 16.5 8.5 16.5C4.08172 16.5 0.5 12.9183 0.5 8.5C0.5 4.08172 4.08172 0.5 8.5 0.5ZM12.2588 6.00781C12.0212 5.80261 11.677 5.80014 11.4375 5.98438L11.3418 6.0752L7.70312 10.2842L5.64551 8.04395L5.16699 8.48438L4.68848 8.92383L7.24023 11.7012C7.36561 11.8376 7.54328 11.9149 7.72852 11.9121C7.91377 11.9092 8.08979 11.8267 8.21094 11.6865L12.3252 6.9248C12.5597 6.65324 12.5302 6.24251 12.2588 6.00781ZM5.64551 8.04395C5.40266 7.77994 4.9918 7.76327 4.72754 8.00586C4.46322 8.24873 4.44563 8.65948 4.68848 8.92383L5.64551 8.04395Z",
                            fill: t
                        })
                    }), (0, a.jsx)("defs", {
                        children: (0, a.jsx)("clipPath", {
                            id: "clip0_6504_895",
                            children: (0, a.jsx)("rect", {
                                width: "16",
                                height: "16",
                                fill: "white",
                                transform: "translate(0.5 0.5)"
                            })
                        })
                    })]
                })
            }
        },
        93705: (e, l, t) => {
            "use strict";
            t.d(l, {
                H: () => d,
                Oc: () => o,
                TP: () => r,
                hG: () => n,
                iV: () => a
            });
            let a = "renderer-micro-frontend",
                i = "adtech_wallpaper",
                r = {
                    UPDATE_STATE_FAILED: "".concat(i, "_update_state_failed"),
                    UPDATE_CHANNEL_FAILED: "".concat(i, "_update_channel_failed"),
                    UPDATE_TERMS_FAILED: "".concat(i, "_update_terms_failed"),
                    ERROR_BOUNDARY: "".concat(i, "_error_boundary")
                },
                n = "mobile-web-micro-frontend",
                s = "adtech_mobile_web",
                d = {
                    UPDATE_STATE_FAILED: "".concat(s, "_update_state_failed"),
                    UPDATE_CHANNEL_FAILED: "".concat(s, "_update_channel_failed"),
                    UPDATE_TERMS_FAILED: "".concat(s, "_update_terms_failed"),
                    ERROR_BOUNDARY: "".concat(s, "_error_boundary")
                },
                o = "wallpaper-mfe-baseline"
        },
        95281: (e, l, t) => {
            "use strict";
            t.d(l, {
                JA: () => s,
                eL: () => r,
                qp: () => n
            });
            var a = t(89187),
                i = t(62760);
            let r = () => {
                    let {
                        settings: e
                    } = (0, i.k)();
                    if (e.auto_applied_coupon !== a.rx.NONE) return e.auto_applied_coupon
                },
                n = e => {
                    let l = r();
                    return !!e && !!l && Object.values(a.rx).some(l => l === e)
                },
                s = e => e === a.rx.WELCOME_50
        },
        95690: (e, l, t) => {
            "use strict";
            t.d(l, {
                q: () => a
            });
            let a = {
                BUNDLE_LOAD: "fides_bundle_load_error",
                INIT_TIMEOUT: "fides_init_timeout",
                GTM_INTEGRATION: "fides_gtm_integration_error",
                NO_EXPERIENCE: "fides_no_defined_experience",
                NO_PURPOSES: "fides_no_defined_purposes",
                CONSENT_WALL_TIMEOUT: "fides_consent_wall_timeout",
                CONSENT_WALL_EMPTY: "fides_consent_wall_empty"
            }
        },
        97220: (e, l, t) => {
            "use strict";
            t.d(l, {
                vb: () => m,
                i3: () => p
            });
            var a = t(21462),
                i = t(38169),
                r = t(71336),
                n = t(31705),
                s = t(7012),
                d = t(62760),
                o = t(55296),
                _ = t(86781),
                c = t(94665),
                u = t(17533);
            let w = {
                    [u.V.UK_AGE]: {
                        surveyId: c.kt,
                        responseKey: c.w8,
                        orionSettingKey: c.Nb,
                        ageGroups: [{
                            id: "18-34",
                            labelKey: "ad_age_survey.survey_35_plus.age_categories.18-34"
                        }, {
                            id: "35+",
                            labelKey: "ad_age_survey.survey_35_plus.age_categories.35_plus"
                        }]
                    },
                    [u.V.US_DE_AGE_30_60]: {
                        surveyId: c.J8,
                        responseKey: c.NB,
                        orionSettingKey: c.Ks,
                        ageGroups: [{
                            id: "30-60",
                            labelKey: "ad_age_survey.survey_30_60.age_categories.30-60"
                        }, {
                            id: "other",
                            labelKey: "ad_age_survey.survey_30_60.age_categories.other"
                        }]
                    },
                    [u.V.FR_25_PLUS]: {
                        surveyId: c.hy,
                        responseKey: c.tl,
                        orionSettingKey: c.sP,
                        ageGroups: [{
                            id: "18-25",
                            labelKey: "ad_age_survey.survey_25_plus.age_categories.18_25"
                        }, {
                            id: "25+",
                            labelKey: "ad_age_survey.survey_25_plus.age_categories.25_plus"
                        }]
                    },
                    [u.V.UK_FEMALE_18_PLUS]: {
                        surveyId: c.Ch,
                        responseKey: c.es,
                        orionSettingKey: c.M6,
                        ageGroups: [{
                            id: "female_18_plus",
                            labelKey: "ad_age_survey.survey_uk_female_18_plus.age_categories.female_18_plus"
                        }, {
                            id: "other",
                            labelKey: "ad_age_survey.survey_uk_female_18_plus.age_categories.other"
                        }]
                    }
                },
                m = e => {
                    let l = w[e];
                    return localStorage.getItem(l.responseKey)
                },
                p = e => {
                    let [l, t] = (0, a.useState)(!1), c = (e => {
                        var l;
                        let {
                            settings: t
                        } = (0, d.k)(), {
                            hasShownSurvey: c
                        } = (0, a.useContext)(r.it), u = (0, o.g)(), p = (0, n.jy)(), g = (0, i.d4)(_.mB), h = (0, s.yw)(g), y = w[e], x = null !== m(e);
                        return null != (l = null == t ? void 0 : t[y.orionSettingKey]) && l && !c && !u && p && h && !x
                    })(e), u = w[e], p = (0, a.useCallback)(() => {
                        t(!0)
                    }, []), g = (0, a.useCallback)(() => {
                        t(!1)
                    }, []);
                    return {
                        showAdAgeSurvey: l,
                        shouldShowAdAgeSurvey: c,
                        showAdAgeSurveyModal: p,
                        onSurveyDismissed: (0, a.useCallback)(() => {
                            localStorage.setItem(u.responseKey, "dismissed"), g()
                        }, [g, u.responseKey]),
                        onAgeGroupSelected: (0, a.useCallback)(e => {
                            localStorage.setItem(u.responseKey, e), g()
                        }, [g, u.responseKey]),
                        closeAdAgeSurvey: g,
                        config: u
                    }
                }
        },
        97364: (e, l, t) => {
            "use strict";
            t.d(l, {
                DD: () => o,
                Kd: () => _,
                O5: () => s,
                av: () => n,
                n$: () => d
            });
            var a = t(87676),
                i = t(88848),
                r = t(62760);
            let n = () => {
                    let {
                        settings: e
                    } = (0, r.k)(), {
                        isLoading: l,
                        hasRedeemedFreeTrial: t
                    } = (0, a.J)();
                    return {
                        isLoading: l,
                        canSeeFreeTrials: e.can_see_free_trials && !t
                    }
                },
                s = e => {
                    let {
                        settings: l
                    } = (0, r.k)(), {
                        isLoading: t,
                        hasRedeemedFreeTrial: n
                    } = (0, a.J)();
                    return {
                        isLoading: t,
                        canSeeFreeTrials: l.is_intro_paywall_free_trial_enabled && e === i.vW.BEFORE_TRANSFER_UPLOAD && !n
                    }
                },
                d = e => {
                    let {
                        settings: l
                    } = (0, r.k)(), {
                        isLoading: t,
                        hasRedeemedFreeTrial: n
                    } = (0, a.J)();
                    return {
                        isLoading: t,
                        canSeeFreeTrials: l.is_home_screen_paywall_free_trial_enabled && e === i.vW.TRANSFER_PAGE_OPENED && !n
                    }
                },
                o = e => {
                    let {
                        settings: l
                    } = (0, r.k)(), {
                        isLoading: t,
                        hasRedeemedFreeTrial: n
                    } = (0, a.J)();
                    return {
                        isLoading: t,
                        canSeeFreeTrials: l.is_downloader_paywall_free_trial_enabled && e === i.vW.DOWNLOAD_PAGE_OPENED && !n
                    }
                },
                _ = () => {
                    let {
                        settings: e
                    } = (0, r.k)(), {
                        isLoading: l,
                        hasRedeemedFreeTrial: t
                    } = (0, a.J)();
                    return {
                        isLoading: l,
                        canSeeFreeTrials: e.transfer_recovery_free_trial_enabled && !t
                    }
                }
        },
        97875: (e, l, t) => {
            "use strict";
            t.d(l, {
                G: () => d
            });
            var a = t(38169),
                i = t(22352),
                r = t(15913),
                n = t(98172),
                s = t(26573);
            let d = () => {
                var e;
                let l = (0, a.d4)(n.Lm),
                    {
                        currentTeam: t,
                        userIsTeamAdmin: d
                    } = (0, r.o)(),
                    o = (0, a.d4)(s.AP),
                    {
                        data: _
                    } = (0, i.rz)({
                        teamId: null == t ? void 0 : t.id
                    }, {
                        skip: !(null == t ? void 0 : t.id) || !l || !d(l)
                    });
                return null != (e = null == _ ? void 0 : _.countryCode) ? e : o
            }
        },
        98851: (e, l, t) => {
            "use strict";
            t.d(l, {
                W: () => r
            });
            var a = t(61149),
                i = t(28330);

            function r(e) {
                let {
                    amount: l = NaN,
                    currency: t = a.Sj.EUR,
                    locale: r,
                    showCents: n = !1
                } = e, s = {
                    style: "currency",
                    currency: t.toUpperCase(),
                    currencyDisplay: "narrowSymbol"
                }, d = t.toLowerCase() === i.yR.brl || t.toLowerCase() === i.yR.mxn, o = new Intl.NumberFormat(r, {
                    ...s,
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                }), _ = new Intl.NumberFormat(r, {
                    ...s,
                    minimumFractionDigits: 2
                });
                return l % 1 == 0 && !n || d ? o.format(l) : _.format(l)
            }
        },
        98876: (e, l, t) => {
            "use strict";
            t.d(l, {
                F: () => r,
                v: () => n
            });
            let a = "email_type_origin",
                i = {
                    TRN_TDL_05: "notify_sender_on_upload_success",
                    TRN_TDL_09: "notify_sender_on_download",
                    TRN_TER_01: "notify_sender_of_expiry_without_download",
                    TRN_TER_02: "notify_sender_of_expiry_with_download",
                    TRN_TDL_01: "notify_recipient_old",
                    TRN_DL_WP_01: "notify_recipient_new_with_preview",
                    TRN_DL_WP_02: "notify_recipient_new_with_preview_button",
                    TRN_DL_WP_03: "notify_recipient_new_with_preview_button_from_thumbnail",
                    TRN_DL_WP_04: "notify_recipient_new_with_preview_button_from_button",
                    TRN_DL_WTP_01: "notify_recipient_new_without_preview",
                    TRN_PC_01: "preview_comment_left_notification"
                };

            function r() {
                let e = sessionStorage.getItem(a);
                if (e) return e;
                let l = new URLSearchParams(window.location.search),
                    t = l.get("utm_campaign"),
                    r = l.get("utm_template"),
                    n = "dw_recover_expired_transfer" === t && "transfer_expiry" === r ? "transfer_expiration_notifier" : t && i[t] ? i[t] : null;
                return n && sessionStorage.setItem(a, n), n
            }

            function n() {
                return sessionStorage.getItem(a)
            }
        },
        99230: (e, l, t) => {
            "use strict";
            t.d(l, {
                A: () => r
            });
            var a = t(23798);
            t(21462);
            var i = t(15321);
            let r = e => {
                let {
                    backgroundColor: l = i.Id,
                    iconColor: t = i.UE
                } = e;
                return (0, a.jsxs)("svg", {
                    viewBox: "-1 0 13 13",
                    focusable: "false",
                    children: [(0, a.jsx)("path", {
                        d: "M6 0C2.686 0 0 2.686 0 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z",
                        fill: l,
                        fillRule: "evenodd"
                    }), (0, a.jsx)("path", {
                        d: "M5 5.817c0-.14.086-.817.97-.817.883 0 1.03.594 1.03.817v3.186S6.94 10 5.97 10 5 9.002 5 9.002V5.817z",
                        fill: t,
                        fillRule: "evenodd"
                    }), (0, a.jsx)("ellipse", {
                        fill: t,
                        fillRule: "evenodd",
                        cx: "6",
                        cy: "3",
                        rx: "1.2",
                        ry: "1.2"
                    })]
                })
            }
        },
        99831: (e, l, t) => {
            "use strict";
            t.d(l, {
                Dt: () => p,
                FB: () => g,
                _I: () => h
            });
            var a = t(38169),
                i = t(87676),
                r = t(56741),
                n = t(88848),
                s = t(36755),
                d = t(13732),
                o = t(91192),
                _ = t(73595),
                c = t(30631),
                u = t(62760),
                w = t(86781),
                m = t(72546);
            let p = () => {
                    let {
                        settings: e
                    } = (0, u.k)();
                    return e.downloaders_paywall_alert_enabled
                },
                g = () => {
                    let {
                        settings: e
                    } = (0, u.k)();
                    return e.more_aggressive_downloaders_paywall
                },
                h = function(e) {
                    let l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        {
                            settings: t
                        } = (0, u.k)(),
                        p = (0, a.wA)(),
                        {
                            hasRedeemedFreeTrial: g
                        } = (0, i.J)(),
                        h = (0, _.VJ)(),
                        y = (0, a.d4)(m.Kj),
                        x = (0, o.c)(y),
                        f = (0, a.d4)(w.lD),
                        v = (0, s.$)(),
                        b = (0, d.A)();
                    if (x || !f || v || c.Ay.isMobile || b) return;
                    let {
                        canShow: L,
                        updateLastShownTime: E
                    } = (0, r.w)(-1, "dw_paywall_alert_override_last_shown");
                    if (e && L) {
                        let {
                            spontaneous_paywalls_configuration: e
                        } = t, a = null == e ? void 0 : e[n.vW.DOWNLOAD_PAGE_OPENED];
                        if (a) {
                            let e = n.pU.BILLING_SELECTOR_FT_CHECKBOX;
                            return p((0, n.UK)(e)), {
                                type: e,
                                dismissOnMouseLeave: !l && a.dismiss_on_mouse_leave,
                                trigger: n.vW.DOWNLOAD_PAGE_OPENED,
                                onPaywallDismiss: () => {
                                    E(), p((0, n.Cb)(e))
                                },
                                isFreeTrialEnabled: a.free_trial_enabled && !g,
                                billingCycle: a.billing_cycle,
                                couponCode: a.coupon_code,
                                areWeekliesEnabled: a.weeklies_enabled && h,
                                autoDismissSeconds: l ? -1 : a.auto_dismiss_seconds,
                                showCloseButton: !l && a.show_close_button,
                                secondaryCtaType: l ? n.Xl.TEXT_SMALL : a.secondary_cta_type,
                                isLowDismissibility: !1
                            }
                        }
                    }
                }
        }
    }
]);
//# sourceMappingURL=8716.8e566998f414a684.js.map
