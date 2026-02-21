"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7963], {
        1172: (e, t, r) => {
            r.d(t, {
                t: () => a
            });

            function a(e) {
                return (null == e ? void 0 : e.memberships) && e.memberships.length > 0 && e.memberships[0].account || {}
            }
        },
        1568: (e, t, r) => {
            r.d(t, {
                QK: () => i,
                Xv: () => o,
                _C: () => s,
                ue: () => n
            });
            var a = r(96361);
            let n = {
                    isOpen: !1
                },
                i = (0, a.Z0)({
                    name: "appRedirectOverlay",
                    initialState: n,
                    reducers: {
                        showAppRedirectOverlay: e => {
                            e.isOpen = !0
                        },
                        hideAppRedirectOverlay: e => {
                            e.isOpen = !1
                        }
                    }
                }),
                {
                    showAppRedirectOverlay: o,
                    hideAppRedirectOverlay: s
                } = i.actions
        },
        2269: (e, t, r) => {
            r.d(t, {
                fW: () => a,
                cP: () => n.cP,
                r6: () => n.r6,
                DZ: () => n.DZ,
                _R: () => n._R,
                LG: () => n.LG,
                BW: () => n.BW,
                l1: () => n.l1,
                ue: () => i.u,
                VK: () => n.VK,
                Vx: () => n.Vx,
                VM: () => n.VM,
                bV: () => n.bV,
                Qv: () => n.Qv,
                LJ: () => o.LJ,
                lo: () => n.lo,
                pz: () => n.pz,
                lR: () => n.lR,
                fG: () => n.fG,
                F6: () => n.F6,
                gG: () => n.gG,
                _L: () => n._L,
                xm: () => n.xm,
                D8: () => n.D8,
                Bc: () => n.Bc,
                yX: () => n.yX,
                zj: () => n.zj,
                eR: () => n.eR,
                On: () => i.O,
                Cf: () => n.Cf,
                L4: () => n.L4,
                al: () => n.al,
                Bm: () => n.Bm,
                Tr: () => n.Tr,
                o$: () => n.o$
            });
            var a = function(e) {
                    return e.SPLASH = "splash", e.EDITOR = "editor", e.APPLY_CHANGES = "apply_changes", e
                }({}),
                n = r(42403),
                i = r(76780),
                o = r(15168)
        },
        2617: (e, t, r) => {
            r.d(t, {
                X: () => a
            });
            var a = function(e) {
                return e.CUSTOM = "custom", e.CURATED = "curated", e.BRANDED = "branded", e.COVER = "cover", e
            }({})
        },
        3749: (e, t, r) => {
            r.d(t, {
                BT: () => u,
                I0: () => f,
                Jl: () => c,
                MS: () => d,
                Ns: () => A,
                g3: () => _,
                g_: () => p,
                m9: () => S,
                rD: () => m,
                wX: () => E,
                xu: () => T
            });
            var a = r(44884),
                n = r(30899),
                i = r(53123),
                o = r(80933),
                s = r(23037),
                l = r(2617);
            let d = e => {
                    var t;
                    return (0, o.Dt)(e) ? {
                        localId: "curated_".concat(e.imagePath),
                        category: l.X.CURATED,
                        largeAssetUrl: n.A.lookup(e.thumbnailLarge),
                        extension: i.A.getFileExtension(e.imagePath),
                        fileName: e.imagePath.split("/").pop() || "",
                        assetUrl: e.imagePath,
                        description: e.credits,
                        descrId: e.imagePath.split("/")[2].split("-")[0]
                    } : {
                        category: l.X.BRANDED,
                        localId: "branded_".concat(e.id),
                        largeAssetUrl: e.asset_url,
                        mediumAssetUrl: e.asset_url,
                        smallAssetUrl: e.asset_url,
                        extension: i.A.getFileExtension(e.asset_url),
                        fileName: (null == (t = e.asset_url) ? void 0 : t.split("/").pop()) || "",
                        assetUrl: e.asset_url
                    }
                },
                c = e => {
                    var t;
                    return {
                        category: l.X.BRANDED,
                        localId: "branded_".concat(e.id),
                        largeAssetUrl: e.src,
                        mediumAssetUrl: e.src,
                        smallAssetUrl: e.src,
                        extension: i.A.getFileExtension(e.src),
                        fileName: (null == (t = e.src) ? void 0 : t.split("/").pop()) || "",
                        assetUrl: e.src
                    }
                },
                u = e => (null == e ? void 0 : e.largeAssetUrl) || (null == e ? void 0 : e.mediumAssetUrl) || (null == e ? void 0 : e.smallAssetUrl) || (null == e ? void 0 : e.localFileSrc),
                _ = async (e, t, r) => {
                    let a = 0,
                        n = async () => {
                            a++;
                            let i = await e();
                            if (i) return i;
                            if ("number" == typeof r && a >= r) throw Error("Failed to resolve the Promise within the given number of tries (".concat(r, ")"));
                            return new Promise(e => setTimeout(() => {
                                e(n())
                            }, t))
                        };
                    return n()
                }, p = async e => {
                    if (201 !== await (0, a.HA)(e)) throw Error("Error requesting previews");
                    return await _(async () => {
                        let t = await (0, a.jY)(e);
                        if (t.resizedSrcLarge && t.resizedSrcMedium && t.resizedSrcLarge) return t
                    }, 400, 5)
                }, E = async e => {
                    let {
                        assetId: t
                    } = await (0, a.dK)({
                        imagePath: e
                    });
                    return {
                        assetId: t
                    }
                }, f = async e => {
                    let {
                        assetId: t
                    } = await (0, a.VP)({
                        sourceUrl: e
                    });
                    return {
                        assetId: t
                    }
                }, A = async e => {
                    let {
                        assetId: t,
                        presignedPost: r
                    } = await (0, a.IS)({
                        originalFileName: e.name
                    });
                    if (204 !== await (0, a.QM)(r, e)) throw Error("An error occurred when uploading the file");
                    return {
                        assetId: t
                    }
                }, T = async e => Promise.all(e.map(e => _(async () => {
                    try {
                        return await (0, a.I$)(e), e
                    } catch (e) {}
                }, 1e3, 5))), m = e => !!((null == e ? void 0 : e.name) && e.size <= s.YE && s.$E.exec(e.name)), S = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                    return new Promise(function(r, a) {
                        let n = new Image;
                        n.onload = function() {
                            let e = n.naturalWidth,
                                i = n.naturalHeight,
                                o = document.createElement("canvas");
                            o.style.width = e + "px", o.style.height = i + "px", o.width = e, o.height = i;
                            let s = o.getContext("2d");
                            if (!s) return void a(Error("canvas context is null"));
                            s.filter = "blur(" + t + "px)", s.drawImage(n, -t, -t, e + 2 * t, i + 2 * t), o.toBlob(function(e) {
                                e ? (r(URL.createObjectURL(e)), o = null) : a(Error("couldn't blur image"))
                            })
                        }, n.src = e
                    })
                }
        },
        4054: (e, t, r) => {
            r.d(t, {
                v: () => i
            });
            let a = {
                get browser() {
                    return [{
                        string: navigator.userAgent,
                        subString: "Edge/",
                        identity: "Edge",
                        versionSearch: "Edge"
                    }, {
                        string: navigator.userAgent,
                        subString: "Chrome",
                        identity: "Chrome"
                    }, {
                        string: navigator.userAgent,
                        subString: "CriOS",
                        identity: "CriOS"
                    }, {
                        string: navigator.userAgent,
                        subString: "OmniWeb",
                        versionSearch: "OmniWeb/",
                        identity: "OmniWeb"
                    }, {
                        string: navigator.vendor,
                        subString: "Apple",
                        identity: "Safari",
                        versionSearch: "Version"
                    }, {
                        prop: window.opera,
                        identity: "Opera"
                    }, {
                        string: navigator.vendor,
                        subString: "iCab",
                        identity: "iCab"
                    }, {
                        string: navigator.vendor,
                        subString: "KDE",
                        identity: "Konqueror"
                    }, {
                        string: navigator.userAgent,
                        subString: "Firefox",
                        identity: "Firefox"
                    }, {
                        string: navigator.userAgent,
                        subString: "FxiOS",
                        identity: "FxiOS"
                    }, {
                        string: navigator.vendor,
                        subString: "Camino",
                        identity: "Camino"
                    }, {
                        string: navigator.userAgent,
                        subString: "Netscape",
                        identity: "Netscape"
                    }, {
                        string: navigator.userAgent,
                        subString: "MSIE",
                        identity: "Explorer",
                        versionSearch: "MSIE"
                    }, {
                        string: navigator.userAgent,
                        subString: "Trident/7.",
                        identity: "Explorer",
                        versionSearch: "rv"
                    }, {
                        string: navigator.userAgent,
                        subString: "Gecko",
                        identity: "Mozilla",
                        versionSearch: "rv"
                    }, {
                        string: navigator.userAgent,
                        subString: "Mozilla",
                        identity: "Netscape",
                        versionSearch: "Mozilla"
                    }]
                },
                get platform() {
                    return [{
                        string: navigator.platform,
                        subString: "Win",
                        identity: "Windows"
                    }, {
                        string: navigator.platform,
                        subString: "Mac",
                        identity: "Mac"
                    }, {
                        string: navigator.userAgent,
                        subString: "iPhone",
                        identity: "iPhone/iPod"
                    }, {
                        string: navigator.userAgent,
                        subString: "iPad",
                        identity: "iPad"
                    }, {
                        string: navigator.userAgent,
                        subString: "Android",
                        identity: "Android"
                    }, {
                        string: navigator.platform,
                        subString: "Linux",
                        identity: "Linux"
                    }]
                }
            };
            var n = r(12219);
            let i = {
                get platform() {
                    return o(a.platform)
                },
                get browser() {
                    return o(a.browser)
                },
                version: e => s(e, navigator.userAgent) || s(e, navigator.appVersion) || "unknown"
            };

            function o(e) {
                let t = e.filter(e => !!e.string && -1 !== e.string.indexOf(e.subString) || !!e.prop || void 0);
                return t.length ? t.shift() : {
                    identity: "unknown"
                }
            }

            function s(e, t) {
                let r = e.versionSearch || e.identity,
                    a = t.indexOf(r);
                if (-1 === a) return !1;
                let i = t.substring(a + r.length + 1).split(" ");
                return (0, n.BL)(i[0])
            }
        },
        5619: (e, t, r) => {
            r.d(t, {
                Aq: () => s,
                Sy: () => i,
                aC: () => o
            });
            var a = r(39412),
                n = r(40334);

            function i() {
                return a.e.get(n.o.cookies.currentTeam.name)
            }

            function o(e) {
                a.e.set(n.o.cookies.currentTeam.name, e)
            }

            function s() {
                a.e.remove(n.o.cookies.currentTeam.name)
            }
        },
        6286: (e, t, r) => {
            r.d(t, {
                G6: () => c,
                L$: () => u,
                yR: () => p,
                yH: () => _
            });
            var a = r(19653),
                n = r(40334),
                i = r(77612),
                o = r(68505),
                s = r(41993);
            let l = {
                Accept: "application/json",
                "Content-Type": "application/json"
            };
            var d = r(9198);
            let c = {
                    customizations: e => new URL("".concat(n.o.customWallpaperServiceUrl, "/v1/customizations/transfers/").concat(e)),
                    assets: e => new URL("".concat(n.o.customWallpaperServiceUrl, "/v1/assets").concat(e ? "/".concat(e) : ""))
                },
                u = async function() {
                    let {
                        withAuth: e = !1,
                        headers: t = l
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = new Headers(t), n = (0, i.g)();
                    if (n && r.set("Current-Workspace", n), e) {
                        let e = await (0, a.iD)();
                        r.set("Authorization", "Bearer ".concat(e))
                    }
                    return r
                }, _ = e => {
                    if ((0, d.CR)(e)) return p(e), e;
                    if (!e.ok) throw Error(e.statusText);
                    return e.json()
                }, p = e => {
                    e instanceof Error && "Not Found" === e.message || (s.A.error(e), o.A.track(e))
                }
        },
        6481: (e, t, r) => {
            r.d(t, {
                A: () => u,
                o: () => c
            });
            var a = r(32770),
                n = r.n(a),
                i = r(65509),
                o = r(78598),
                s = r(52737),
                l = r(72255),
                d = r(96644);
            let c = s.A.types(["RECEIVED_TRANSFERS_SUCCESS", "GET_RECEIVED_TRANSFER_SUCCESS", "RECEIVED_TRANSFERS_RESET_TRANSFER"]),
                u = s.A.generate({
                    list: () => async e => {
                        try {
                            let t = await i.A.TransfersReceived.getReceivedTransfers();
                            e({
                                type: c.RECEIVED_TRANSFERS_SUCCESS,
                                list: t.body || []
                            })
                        } catch (e) {
                            o.A.track(e)
                        }
                    },
                    getReceivedTransfer: e => async t => {
                        try {
                            let r = await i.A.TransfersReceived.getReceivedTransferById(null, {
                                pathExtValues: {
                                    transferId: e
                                }
                            });
                            t({
                                type: c.GET_RECEIVED_TRANSFER_SUCCESS,
                                transfer: r.body || null
                            })
                        } catch (r) {
                            let e = n()(r.body, "error", "retrieve_transfer_exception");
                            l.A.navigateTo("/transfers"), t(d.P9.setPanelNotification({
                                category: d.aF.Error,
                                details: e
                            }))
                        }
                    },
                    resetReceivedTransfer: [c.RECEIVED_TRANSFERS_RESET_TRANSFER]
                })
        },
        6596: (e, t, r) => {
            r.d(t, {
                Ay: () => s,
                BW: () => o,
                FZ: () => n,
                _G: () => i
            });
            let a = (0, r(96361).Z0)({
                    name: "multiStep",
                    initialState: {
                        state: void 0,
                        multiStepFlowSteps: []
                    },
                    reducers: {
                        setMultiStepState: (e, t) => {
                            e.state = t.payload
                        },
                        resetInitialMultiStepState: e => {
                            e.state = void 0, e.multiStepFlowSteps = []
                        },
                        setMultiStepFlowSteps: (e, t) => {
                            e.multiStepFlowSteps = t.payload
                        }
                    }
                }),
                {
                    setMultiStepState: n,
                    resetInitialMultiStepState: i,
                    setMultiStepFlowSteps: o
                } = a.actions,
                s = a.reducer
        },
        7012: (e, t, r) => {
            r.d(t, {
                Al: () => d,
                CY: () => h,
                FZ: () => u,
                Je: () => p,
                Jg: () => l,
                M3: () => N,
                MY: () => c,
                PF: () => y,
                WU: () => g,
                YB: () => O,
                Z_: () => f,
                ch: () => A,
                jb: () => T,
                nB: () => v,
                ns: () => L,
                oP: () => _,
                p7: () => P,
                pq: () => E,
                sf: () => m,
                to: () => I,
                w3: () => w,
                wx: () => S,
                yw: () => R
            });
            var a = r(49302),
                n = r(89187),
                i = r(76247),
                o = r(53123),
                s = r(84530);

            function l(e) {
                let t = !e || !e.loggedIn,
                    r = 1 === o.A.getWTPlus(),
                    a = 5 > o.A.getWTSent();
                return t && r && a
            }
            let d = e => !!e && (e.planTier || e.plan_tier);

            function c(e) {
                return d(e) === n.js.PLUS
            }

            function u(e) {
                return d(e) === n.js.PRO_2022
            }

            function _(e) {
                return d(e) === n.js.PRO_2022 || d(e) === n.js.PLUS
            }

            function p(e) {
                return d(e) === n.js.STARTER
            }

            function E(e) {
                return d(e) === n.js.ULTIMATE
            }

            function f(e) {
                return d(e) === n.js.ENTERPRISE || d(e) === n.js.ENTERPRISE_CUSTOM_CONTRACT
            }

            function A(e) {
                return d(e) === n.js.ENTERPRISE_CUSTOM_CONTRACT
            }

            function T(e) {
                return d(e) === n.js.PREMIUM_2022
            }

            function m(e) {
                var t, r, i;
                let o = d(e),
                    s = null == e || null == (i = e.memberships) || null == (r = i[0]) || null == (t = r.account) ? void 0 : t.subscription;
                return ((null == s ? void 0 : s.status) !== a.SI.PastDue || o !== n.js.ENTERPRISE || s.entitlements_package_code !== n.sX.FREE) && [n.js.ULTIMATE, n.js.ENTERPRISE, n.js.ENTERPRISE_CUSTOM_CONTRACT, n.js.PLUS, n.js.PRO_2022, n.js.PREMIUM_2022, n.js.TRANSFER, n.js.DISTRIBUTE].includes(o)
            }

            function S(e) {
                if ((null == e ? void 0 : e.planTier) === void 0) return !0;
                let t = d(e);
                return ![n.js.ULTIMATE, n.js.ENTERPRISE, n.js.ENTERPRISE_CUSTOM_CONTRACT, n.js.PLUS, n.js.PRO_2022, n.js.PREMIUM_2022, n.js.TRANSFER, n.js.DISTRIBUTE].includes(t)
            }

            function g(e) {
                return !!(null == e ? void 0 : e.loggedIn) && !R(e)
            }

            function R(e) {
                return d(e) === n.js.FREE
            }

            function h(e) {
                let t = d(e);
                return t === n.js.TRANSFER || t === n.js.DISTRIBUTE || t === n.js.COLLABORATE
            }

            function y(e) {
                return !!e && e.loggedIn && R(e)
            }

            function w(e) {
                let t = !1,
                    r = d(e);
                return t = r === n.js.PREMIUM_2022 || r === n.js.ULTIMATE, !!e && e.loggedIn && t
            }

            function I(e) {
                return v(e) || R(e)
            }

            function v(e) {
                return !e || !e.loggedIn
            }

            function N(e) {
                return !v(e)
            }

            function O(e) {
                return !!e && e.planTier || null
            }

            function P(e, t) {
                return t ? "".concat(t, ", ").concat(e) : e
            }

            function L(e, t, r) {
                let a = r.transferNumberLimit !== 1 / 0;
                if (e === n.js.FREE) switch (t) {
                    case n.zX:
                        return {
                            planName: s.A.t("tiers_2024.basic"), planFeatures: [a ? s.A.t("page.account_payment.plan_features.feature_one_alt", {
                                transfer_count_limit_30_days: r.transferNumberLimit,
                                transfer_size_limit_30_days: r.accountStorage
                            }) : s.A.t("page.account_payment.plan_features.feature_one", {
                                transfer_limit: r.transferLimit
                            }), s.A.t("page.account_payment.plan_features.feature_two", {
                                storage_limit: r.accountStorage
                            }), s.A.t("page.account_payment.plan_features.feature_three", {
                                expiration_limit: s.A.t("datetime.distance_in_words.x_days.other", {
                                    count: r.transferExpiryCount
                                })
                            })]
                        };
                    case n.sX.FREE:
                        return {
                            planName: s.A.t("page.pricing_panel.plans.free.title"), planFeatures: [s.A.t("pricing_repackaging.card.free.features.feature_0", {
                                size: "3 GB"
                            }), s.A.t("pricing_repackaging.card.free.features.feature_1", {
                                amount: 10
                            }), s.A.t("pricing_repackaging.card.free.features.feature_2")]
                        };
                    default:
                        return {
                            planName: s.A.t("page.pricing_panel.plans.free.title"), planFeatures: [a ? s.A.t("page.pricing_panel.plans.free.usp.feature_1_alt", {
                                transfer_count_limit_30_days: r.transferNumberLimit,
                                transfer_size_limit_30_days: r.accountStorage
                            }) : s.A.t("page.pricing_panel.plans.free.usp.feature_1", {
                                transferLimit: r.transferLimit
                            }), s.A.t("page.pricing_panel.plans.free.usp.feature_2"), s.A.t("page.pricing_panel.plans.free.usp.feature_3")]
                        }
                }
                return e === n.js.PRO_2022 || e === n.js.PLUS ? {
                    planName: s.A.t("page.pricing_panel.plans.pro.title"),
                    planFeatures: [s.A.t("page.pricing_panel.plans.pro.usp.feature_1", {
                        transferLimit: r.transferLimit
                    }), s.A.t("page.pricing_panel.plans.pro.usp.feature_2", {
                        storageLimit: r.accountStorage
                    }), s.A.t("page.pricing_panel.plans.pro.usp.feature_3", {
                        portalsLimit: i.hA.NEW_PORTALS_LIMIT
                    })]
                } : e === n.js.PREMIUM_2022 ? {
                    planName: s.A.t("page.pricing_panel.plans.premium.title"),
                    planFeatures: [s.A.t("page.pricing_panel.plans.premium.usp.feature_1"), s.A.t("page.pricing_panel.plans.premium.usp.feature_2"), s.A.t("page.pricing_panel.plans.premium.usp.feature_3")]
                } : e === n.js.LITE ? {
                    planName: s.A.t("tiers_2024.lite"),
                    planFeatures: [s.A.t("page.account_payment.plan_features.feature_one", {
                        transfer_limit: r.transferLimit
                    }), s.A.t("page.account_payment.plan_features.feature_two", {
                        storage_limit: r.accountStorage
                    }), s.A.t("page.account_payment.plan_features.feature_three", {
                        expiration_limit: s.A.t("datetime.distance_in_words.x_days.other", {
                            count: r.transferExpiryCount
                        })
                    })]
                } : e === n.js.TRANSFER ? {
                    planName: s.A.t("tiers_2024.transfer"),
                    planFeatures: [s.A.t("page.account_payment.plan_features.feature_one", {
                        transfer_limit: r.transferLimit
                    }), s.A.t("page.account_payment.plan_features.feature_two", {
                        storage_limit: r.accountStorage
                    }), s.A.t("page.account_payment.plan_features.feature_three", {
                        expiration_limit: s.A.t("datetime.distance_in_words.x_days.other", {
                            count: r.transferExpiryCount
                        })
                    })]
                } : e === n.js.COLLABORATE ? {
                    planName: s.A.t("tiers_2024.collaborate"),
                    planFeatures: [s.A.t("page.account_payment.plan_features.feature_one", {
                        transfer_limit: r.transferLimit
                    }), s.A.t("page.account_payment.plan_features.feature_two", {
                        storage_limit: r.accountStorage
                    }), s.A.t("page.account_payment.plan_features.feature_three", {
                        expiration_limit: s.A.t("datetime.distance_in_words.x_years.one")
                    })]
                } : e === n.js.DISTRIBUTE ? {
                    planName: s.A.t("tiers_2024.distribute"),
                    planFeatures: [s.A.t("page.account_payment.plan_features.feature_one", {
                        transfer_limit: r.transferLimit
                    }), s.A.t("page.account_payment.plan_features.feature_two", {
                        storage_limit: r.accountStorage
                    }), s.A.t("page.account_payment.plan_features.feature_three_unlimited")]
                } : e === n.js.ULTIMATE ? {
                    planName: "Ultimate",
                    planFeatures: [s.A.t("pricing_repackaging.card.unlimited.features.feature_0"), s.A.t("pricing_repackaging.card.unlimited.features.feature_2"), s.A.t("pricing_repackaging.card.unlimited.features.feature_3")]
                } : e === n.js.ENTERPRISE ? {
                    planName: "Teams",
                    planFeatures: [s.A.t("pricing_repackaging.card.unlimited.features.feature_0"), s.A.t("pricing_repackaging.card.unlimited.features.feature_2"), s.A.t("pricing_repackaging.card.unlimited.features.feature_3"), s.A.t("pricing_repackaging.card.unlimited.features.feature_6")]
                } : e === n.js.ENTERPRISE_CUSTOM_CONTRACT ? {
                    planName: s.A.t("enterprise_banners.custom_contract.plan"),
                    planFeatures: [s.A.t("pricing_repackaging.card.unlimited.features.feature_0"), s.A.t("pricing_repackaging.card.unlimited.features.feature_2"), s.A.t("pricing_repackaging.card.unlimited.features.feature_3"), s.A.t("pricing_repackaging.card.unlimited.features.feature_6")]
                } : e === n.js.STARTER ? {
                    planName: "Starter",
                    planFeatures: [s.A.t("pricing_repackaging.card.starter.features.feature_0", {
                        size: "300 GB"
                    }), s.A.t("pricing_repackaging.card.starter.features.feature_1", {
                        amount: 10
                    })]
                } : void 0
            }
        },
        9127: (e, t, r) => {
            r.d(t, {
                y: () => s
            });
            var a = r(96361),
                n = r(40334),
                i = r(48585),
                o = r(14901);
            let s = (0, a.Z0)({
                name: "notification",
                initialState: o.u,
                reducers: {
                    setTransferNotification(e, t) {
                        if (e.transfer && e.transfer.text && i.j.includes(e.transfer.text)) return e;
                        e.transfer = {
                            ...t.payload,
                            date: new Date
                        }
                    },
                    clearTransferNotification(e) {
                        e.transfer = o.u.transfer
                    },
                    setPanelNotification(e, t) {
                        let r, {
                                category: a,
                                details: o,
                                params: s,
                                duration: l = n.o.notification.duration
                            } = t.payload,
                            d = a;
                        switch (a) {
                            case i.a.Error:
                                r = "exception.".concat(o);
                                break;
                            case i.a.Form:
                                d = i.a.Default, r = "form.".concat(o);
                                break;
                            case i.a.Notification:
                            default:
                                d = i.a.Default, r = "notification.".concat(o)
                        }
                        e.panel = {
                            category: d,
                            i18nKey: (null == o ? void 0 : o.includes(" ")) ? o : r,
                            params: s,
                            duration: l,
                            value: o
                        }
                    },
                    clearPanelNotification(e) {
                        e.panel = o.u.panel
                    },
                    setPopoverNotification(e, t) {
                        let {
                            payload: r
                        } = t;
                        e.popover = {
                            category: r.category || i.a.Notification,
                            details: r.details
                        }
                    },
                    clearPopoverNotification(e) {
                        e.popover = o.u.popover
                    }
                }
            })
        },
        9198: (e, t, r) => {
            r.d(t, {
                CR: () => s,
                f0: () => o,
                i1: () => l
            });
            var a = r(80341),
                n = r(24870),
                i = r(83263);

            function o(e, t) {
                var r, n, i, o, s, l, d;
                let c = {};
                if (e[a._B.Background]) {
                    let {
                        backgroundColor: t,
                        assetId: r
                    } = e[a._B.Background];
                    c.background = {
                        backgroundColor: t,
                        assetId: r
                    }
                }
                return (e[a._B.TitleText] || e[a._B.BodyText]) && (c.textBlock = {
                    title: (null == (n = e[a._B.TitleText]) ? void 0 : n.text) || "",
                    description: (null == (i = e[a._B.BodyText]) ? void 0 : i.text) || "",
                    textBlockDisplayOptions: {
                        isTitleVisible: (null == (o = e[a._B.TitleText]) ? void 0 : o.visibility) || !1,
                        isDescriptionVisible: (null == (s = e[a._B.BodyText]) ? void 0 : s.visibility) || !1,
                        titleColor: (null == (l = e[a._B.TitleText]) ? void 0 : l.textColor) || void 0,
                        descriptionColor: (null == (d = e[a._B.BodyText]) ? void 0 : d.textColor) || void 0
                    }
                }), (null == t || null == (r = t.previewBackgroundAsset) ? void 0 : r.assetId) ? c.previewBackground = {
                    assetId: t.previewBackgroundAsset.assetId
                } : (null == t ? void 0 : t.previewBackgroundColor) && (c.previewBackground = {
                    backgroundColor: t.previewBackgroundColor
                }), c
            }
            let s = e => !!(null == e ? void 0 : e.errors);

            function l(e) {
                let t = e.views ? e.views[0] : void 0,
                    r = {};
                if ((null == t ? void 0 : t.background) && (r[a._B.Background] = {
                        type: a._B.Background,
                        backgroundColor: t.background.backgroundColor || void 0,
                        ...t.background.assetId && {
                            assetId: t.background.assetId
                        }
                    }), null == t ? void 0 : t.textBlock) {
                    var o;
                    let {
                        titleColor: e,
                        descriptionColor: s
                    } = t.textBlock.textBlockDisplayOptions, l = (null == t || null == (o = t.background) ? void 0 : o.backgroundColor) === i.tE.color ? n.eQ : n.O7;
                    r[a._B.TitleText] = {
                        type: a._B.TitleText,
                        text: t.textBlock.title,
                        visibility: t.textBlock.textBlockDisplayOptions.isTitleVisible,
                        textColor: e || l
                    }, r[a._B.BodyText] = {
                        type: a._B.BodyText,
                        text: t.textBlock.description,
                        visibility: t.textBlock.textBlockDisplayOptions.isDescriptionVisible,
                        textColor: s || l
                    }
                }
                return r
            }
        },
        9209: (e, t, r) => {
            r.d(t, {
                BD: () => s,
                YF: () => n,
                dH: () => o,
                se: () => l,
                yR: () => i
            });
            var a = r(89187),
                n = function(e) {
                    return e.week = "week", e.month = "month", e.year = "year", e
                }({}),
                i = function(e) {
                    return e.aud = "aud", e.brl = "brl", e.cad = "cad", e.dkk = "dkk", e.eur = "eur", e.gbp = "gbp", e.mxn = "mxn", e.nok = "nok", e.sek = "sek", e.usd = "usd", e
                }({}),
                o = function(e) {
                    return e.active = "active", e.past_due = "past_due", e.trialing = "trialing", e.pending = "pending", e.canceled = "canceled", e.unpaid = "unpaid", e.incomplete = "incomplete", e.incomplete_expired = "incomplete_expired", e
                }({});
            let s = ["pending", "canceled", "incomplete", "incomplete_expired"],
                l = e => {
                    switch (e) {
                        case a.CS.WEEKLY:
                            return "week";
                        case a.CS.MONTHLY:
                            return "month";
                        case a.CS.YEARLY:
                            return "year"
                    }
                }
        },
        9912: (e, t, r) => {
            r.d(t, {
                T: () => n
            });
            var a = r(95779);
            async function n(e) {
                try {
                    return (await (0, a.A)({
                        method: "POST",
                        path: "/api/web-metrics",
                        params: e
                    })).body
                } catch (e) {
                    console.error("There was an error collecting web-metrics. ".concat(e))
                }
            }
        },
        10148: (e, t, r) => {
            r.d(t, {
                Lv: () => d,
                MC: () => l,
                _8: () => s,
                cC: () => i,
                nT: () => o
            });
            var a = r(4559);
            let n = (0, a.Mz)(e => e.paymentIntegrations, e => {
                    let {
                        stripe: t
                    } = e;
                    return t
                }),
                i = (0, a.Mz)(n, e => {
                    let {
                        status: t
                    } = e;
                    return t
                }),
                o = (0, a.Mz)(n, e => {
                    let {
                        accountEmail: t
                    } = e;
                    return t
                }),
                s = (0, a.Mz)(n, e => {
                    let {
                        sellerCurrency: t
                    } = e;
                    return t
                }),
                l = (0, a.Mz)(n, e => {
                    let {
                        isSellerCurrencySupported: t
                    } = e;
                    return t
                }),
                d = (0, a.Mz)(n, e => {
                    let {
                        sellerMinimumChargeAmount: t
                    } = e;
                    return t
                })
        },
        10162: (e, t, r) => {
            r.d(t, {
                DL: () => l,
                SR: () => s,
                pP: () => d
            });
            var a = r(89187),
                n = r(7012),
                i = r(86781),
                o = r(96773);
            let s = (e, t, r, a) => {
                    t !== r && (r ? o.Ay.trackSnowplowEvent({
                        ...a,
                        label: "change_".concat(e)
                    }) : o.Ay.trackSnowplowEvent({
                        ...a,
                        label: "remove_".concat(e)
                    }))
                },
                l = e => {
                    let t = (0, i.Me)({
                        user: e
                    });
                    return (null == e ? void 0 : e.loggedIn) ? (0, n.MY)(e) ? "pro" : t === a.zX ? "free_2024" : null == e ? void 0 : e.planTier : "anonymous"
                },
                d = (e, t) => ({
                    schema: "iglu:com.wetransfer/user_context/jsonschema/2-0-0",
                    data: {
                        ...!!t && {
                            product_user_id: t
                        },
                        user_type: l(e)
                    }
                })
        },
        10694: (e, t, r) => {
            r.d(t, {
                r: () => a
            });
            let a = Object.freeze({
                ABORTED: "aborted",
                ACCESS_CONTROL_REQUIRED: "access_control_required",
                BLOCKED: "blocked",
                DATA_PROCESSING_PROMPT: "data_processing_prompt",
                DOWNLOADABLE: "downloadable",
                DOWNLOADING: "downloading",
                EXPIRED: "expired",
                FINISHED: "finished",
                INIT: "init",
                INVALID: "invalid",
                PASSWORD_PROTECTED: "password_protected",
                PAUSED: "paused",
                PROCESSING: "processing",
                RECOVERING: "recovering",
                RECAPTCHA: "recaptcha",
                SPAM: "spam",
                STARTED: "started",
                VERIFY: "verify",
                VERIFY_ACCOUNT: "verify-account",
                VERIFY_RESEND: "verify-resend",
                VERIFY_ACCOUNT_SUCCESS: "verify-account-success",
                VERIFY_ACCOUNT_FAILED: "verify-account-failed",
                TRANSFER_IN_UPLOADER: "transfer-in-uploader",
                PAYWALL: "paywall",
                PASSWORDLESS_LOGIN: "passwordless-login",
                ANTICIPATED_UPLOAD_FAILED: "anticipated-upload-failed"
            })
        },
        10861: (e, t, r) => {
            r.d(t, {
                l: () => o
            });
            var a = r(71034),
                n = r(82710),
                i = r(25402);
            let o = (0, a.xP)({
                baseQuery: (0, n.S)({
                    baseUrl: "".concat((0, i.A)().NEXT_PUBLIC_API_URL, "/api/v4/")
                }),
                tagTypes: ["Page", "TeamPolicies", "Entitlements", "Contacts", "UploadRequests", "Transfer", "TransferFolders", "Comments", "Previews", "UserSignatures", "MedicalConsentPreference", "DataProcessingPreference"],
                endpoints: () => ({})
            })
        },
        11076: (e, t, r) => {
            r.d(t, {
                Pw: () => l,
                WJ: () => o,
                gB: () => s
            });
            var a = r(71034),
                n = r(82710);
            let i = (0, r(25402).A)(),
                o = (0, a.xP)({
                    reducerPath: "adroitAuthApi",
                    baseQuery: (0, n.S)({
                        baseUrl: "https://".concat(i.NEXT_PUBLIC_AUTH_DOMAIN, "/")
                    }),
                    endpoints: e => ({
                        startOtpCheck: e.mutation({
                            query: e => {
                                let {
                                    context: t
                                } = e;
                                return {
                                    url: "api/v1/start-otp-check",
                                    method: "POST",
                                    data: {
                                        context: t
                                    },
                                    withCredentials: !0
                                }
                            }
                        }),
                        oauthToken: e.mutation({
                            query: e => ({
                                url: "oauth/token",
                                method: "POST",
                                data: e,
                                withCredentials: !0,
                                headers: {
                                    "X-CSRF-Token": "csrf-token"
                                }
                            })
                        })
                    })
                }),
                {
                    useStartOtpCheckMutation: s,
                    useOauthTokenMutation: l
                } = o
        },
        11138: (e, t, r) => {
            r.d(t, {
                r: () => i,
                u: () => n
            });
            var a = r(96361);
            let n = {
                    links: []
                },
                i = (0, a.Z0)({
                    name: "socialLinks",
                    initialState: n,
                    reducers: {
                        clearLinks: e => {
                            e.links = []
                        },
                        setLinks: (e, t) => {
                            e.links = t.payload
                        }
                    }
                })
        },
        11148: (e, t, r) => {
            r.d(t, {
                $e: () => a,
                a4: () => n,
                lJ: () => i
            });
            let a = {
                    ENGLISH: "en",
                    DUTCH: "nl",
                    ITALIAN: "it",
                    FRENCH: "fr",
                    GERMAN: "de",
                    SPANISH: "es",
                    PORTUGUESE: "pt",
                    BRAZILIAN: "pt-BR",
                    LATAM_SPANISH: "es-419",
                    POLISH: "pl",
                    TURKISH: "tr",
                    NORWEGIAN: "nb",
                    DANISH: "da",
                    SWEDISH: "sv"
                },
                n = {
                    en: "en-US",
                    nl: "nl-NL",
                    it: "it-IT",
                    fr: "fr-FR",
                    de: "de-DE",
                    es: "es-ES",
                    pt: "pt-PT",
                    "pt-BR": "pt-BR",
                    "es-419": "es-ES",
                    pl: "pl-PL",
                    tr: "tr-TR",
                    nb: "nb-NO",
                    da: "da-DK",
                    sv: "sv-SE"
                },
                i = {
                    [a.ENGLISH]: ["English", "English"],
                    [a.DUTCH]: ["Nederlands", "Dutch"],
                    [a.ITALIAN]: ["Italiano", "Italian"],
                    [a.FRENCH]: ["Fran\xe7ais", "French"],
                    [a.GERMAN]: ["Deutsch", "German"],
                    [a.SPANISH]: ["Espa\xf1ol", "Spanish"],
                    [a.POLISH]: ["Polski", "Polish"],
                    [a.PORTUGUESE]: ["Portugu\xeas", "Portuguese"],
                    [a.BRAZILIAN]: ["Portugu\xeas Brasil", "Brazilian Portuguese"],
                    [a.LATAM_SPANISH]: ["Espa\xf1ol Latino", "LATAM Spanish"],
                    [a.TURKISH]: ["T\xfcrk\xe7e", "Turkish"],
                    [a.NORWEGIAN]: ["Bokm\xe5l", "Norwegian Bokm\xe5l"],
                    [a.DANISH]: ["Dansk", "Danish"],
                    [a.SWEDISH]: ["Svenska", "Swedish"]
                }
        },
        11707: (e, t, r) => {
            r.d(t, {
                F5: () => i,
                XQ: () => s,
                kh: () => o,
                ue: () => n
            });
            var a = r(96361);
            let n = {
                    customDomain: void 0
                },
                i = (0, a.Z0)({
                    name: "customDomainOption",
                    initialState: n,
                    reducers: {
                        setCustomDomain(e, t) {
                            e.customDomain = t.payload
                        },
                        resetCustomDomain(e) {
                            e.customDomain = void 0
                        }
                    }
                }),
                {
                    setCustomDomain: o,
                    resetCustomDomain: s
                } = i.actions
        },
        11732: (e, t, r) => {
            r.d(t, {
                A: () => a
            });
            let a = (0, r(12062).A)({
                createSession: {
                    path: "/api/v4/auth/session",
                    method: "POST"
                },
                sync: {
                    path: "/api/v4/auth/sync",
                    method: "POST"
                },
                completePayment: {
                    path: "/api/v4/users/complete-payment",
                    method: "POST"
                },
                updatePaymentMethod: {
                    path: "/api/v4/users/payment-methods",
                    method: "PUT"
                },
                getCurrentUser: {
                    path: "/api/v4/auth/session"
                },
                updateUser: {
                    path: "/api/v4/users",
                    method: "PUT"
                },
                updateUserLanguage: {
                    path: "/api/v4/users/language",
                    method: "PUT"
                },
                unsubscribeUserOnboarding: {
                    path: "/api/v4/users/pm-onboarding-unsubscribe",
                    pathExt: !0,
                    method: "POST"
                },
                unsubscribeLinkTransfer: {
                    path: "/api/v4/users/link-transfer-download-notification-unsubscribe",
                    method: "POST"
                },
                updatePassword: {
                    path: "/api/v4/users/password",
                    method: "PUT"
                },
                requestPasswordReset: {
                    path: "/api/v4/auth/password",
                    method: "POST"
                },
                triggerPasswordReset: {
                    path: "/api/v4/users/trigger-password-reset",
                    method: "POST"
                },
                resetPassword: {
                    path: "/api/v4/auth/password",
                    method: "PUT"
                },
                assignTransfer: {
                    path: "/api/v4/users/assign-transfer",
                    method: "POST"
                },
                uploadPicture: {
                    path: "/api/v4/images/thumbs/profile_pictures",
                    method: "POST"
                },
                verifyAccountEmail: {
                    path: "/api/v4/users/account-verification",
                    method: "POST"
                },
                resendVerifyAccountEmail: {
                    path: "/api/v4/users/account-verification/resend",
                    method: "POST"
                },
                retrieveEnableTwoFactorRedirectUrl: {
                    path: "/api/v4/users/two-factor-authentication/sso/enroll-mfa-ticket",
                    method: "GET"
                },
                disableTwoFactorAuthentication: {
                    path: "/api/v4/users/two-factor-authentication/{type}/disable",
                    pathExt: !0,
                    method: "POST"
                },
                unsubscribeFromExpirationReminders: {
                    path: "/api/v4/users/unsubscribe-expiration-reminders",
                    method: "POST"
                },
                remove: {
                    path: "/api/v4/users/remove",
                    method: "POST"
                },
                getUserDataProcessingOptIn: {
                    path: "/api/v4/users/data-processing-preference",
                    method: "GET"
                },
                updateUserDataProcessingOptIn: {
                    path: "/api/v4/users/update-data-processing-preference",
                    method: "POST"
                },
                forceOrionSegmentations: {
                    path: "/api/v4/users/force-segmentations",
                    method: "PUT"
                },
                getNotificationSettings: {
                    path: "/api/v4/notification-settings",
                    method: "GET"
                },
                updateNotificationSettings: {
                    path: "/api/v4/notification-settings/{key}",
                    pathExt: !0,
                    method: "PUT"
                },
                verifyAuth0UserExists: {
                    path: "/api/v4/users/auth0-user-exists",
                    method: "POST"
                }
            })
        },
        12062: (e, t, r) => {
            r.d(t, {
                A: () => d
            });
            var a = r(19653),
                n = r(25402),
                i = r(5619),
                o = r(95779),
                s = r(42789);
            let l = !1;

            function d(e) {
                return Object.fromEntries(Object.keys(e).map(t => {
                    var r;
                    return [t, (r = e[t], function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (!r) throw Error("InvalidApiCall");
                        let d = "".concat((0, n.A)().NEXT_PUBLIC_API_URL).concat(r.path);
                        return r.pathExt && t.pathExtValues && Object.keys(t.pathExtValues).forEach(e => {
                            var r;
                            d = d.replace("{".concat(e, "}"), (null == (r = t.pathExtValues) ? void 0 : r[e]) || "")
                        }), (0, o.A)({
                            method: r.method,
                            path: d,
                            params: e,
                            headers: t.headers
                        }).catch(e => {
                            if (!l && e.status === s.iu.UNAUTHORIZED && "Unauthorized" === e.body.message) {
                                l = !0, (0, a.ri)();
                                return
                            }
                            if ((e.status === s.iu.FORBIDDEN || e.status === s.iu.NOT_FOUND) && "Team not found" === e.body.message) {
                                (0, i.Aq)(), location.reload();
                                return
                            }
                            throw e
                        })
                    })]
                }))
            }
        },
        12155: (e, t, r) => {
            r.d(t, {
                CI: () => l,
                FM: () => _,
                Qf: () => u,
                cN: () => s,
                nA: () => function e(t) {
                    return (t.items || []).reduce((t, r) => r.items ? [...t, ...e(r)] : [...t, r], [])
                },
                vN: () => d
            });
            var a = r(84530),
                n = r(34463);
            let i = e => ({
                    uiType: n.a.directory,
                    name: e,
                    map: {},
                    items: []
                }),
                o = (e, t, r) => {
                    let a = t.shift();
                    if (t.length) {
                        let n = e.map[a];
                        n || (n = i(a), e.map[a] = n, e.items.push(n)), o(n, t, r)
                    } else e.map[a] = r, e.items.push(r)
                },
                s = e => e.split("/"),
                l = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return e.map(e => ({
                        ...e,
                        uiType: e.apiType === n.i.emptyDirectory ? n.a.directory : n.a.file
                    }))
                },
                d = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = i("/");
                    return e.forEach(e => {
                        o(t, s(e.name), e)
                    }), t
                },
                c = e => new Date().getTime() - e.getTime() > 864e5,
                u = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "sent",
                        r = new Date(e);
                    return c(r) ? a.A.t("page.transfer.".concat(t, "_datetime"), {
                        date: a.A.date(r, "without_day"),
                        time: a.A.time(r)
                    }) : a.A.t("page.transfers.".concat(t, "_time_ago"), {
                        timeAgo: a.A.relativeTime(r)
                    })
                },
                _ = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "sent",
                        r = new Date(e);
                    return c(r) ? a.A.t("page.transfer.".concat(t, "_moment"), {
                        moment: a.A.date(r, "without_day")
                    }) : a.A.t("page.transfers.".concat(t, "_time_ago"), {
                        timeAgo: a.A.relativeTime(r)
                    })
                }
        },
        12219: (e, t, r) => {
            function a(e) {
                return "string" == typeof e ? e.split(".").map(e => parseFloat(e)) : e
            }
            r.d(t, {
                BL: () => a,
                Gm: () => i
            });
            let n = {
                ">=": e => e >= 0,
                ">": e => e > 0,
                "<": e => e < 0,
                "<=": e => e <= 0,
                "=": e => 0 === e,
                "==": e => 0 === e
            };

            function i(e, t, r) {
                let i = n[t];
                return !!i && i(function(e, t) {
                    if (e.some(isNaN) || t.some(isNaN)) return 0;
                    let r = -1,
                        a = t.length;
                    for (let n = 0; n < a && 0 == (r = e[n] - t[n]); n++);
                    return r
                }(a(e), a(r)))
            }
        },
        12637: (e, t, r) => {
            r.d(t, {
                G9: () => u,
                I_: () => d,
                Pq: () => i,
                Q_: () => l,
                hh: () => s,
                jZ: () => n,
                n9: () => c,
                oz: () => _,
                yD: () => o
            });
            var a = r(4559);
            let n = e => e.account,
                i = (0, a.Mz)(n, e => e.wallpapers),
                o = (0, a.Mz)(n, e => e.previews_wallpapers || []),
                s = (0, a.Mz)(n, e => e.active_subscription),
                l = (0, a.Mz)(n, e => e.wallpaper_link),
                d = (0, a.Mz)(n, e => e.title),
                c = (0, a.Mz)(n, e => e.id),
                u = (0, a.Mz)(n, e => e.subdomain_name || void 0),
                _ = (0, a.Mz)(n, e => {
                    var t;
                    return null != (t = e.canSeeGoodbyeOffer) && t
                })
        },
        12790: (e, t, r) => {
            r.d(t, {
                A8: () => i,
                oH: () => o,
                ue: () => n
            });
            var a = r(96361);
            let n = {
                    isDisplaying: !1
                },
                i = (0, a.Z0)({
                    name: "roktAd",
                    initialState: n,
                    reducers: {
                        setRoktAdDisplaying(e, t) {
                            e.isDisplaying = t.payload
                        }
                    }
                }),
                {
                    setRoktAdDisplaying: o
                } = i.actions
        },
        13672: (e, t, r) => {
            r.d(t, {
                aE: () => E,
                $7: () => p,
                eF: () => u,
                R9: () => l,
                cN: () => _
            });
            var a = r(4559),
                n = r(72546),
                i = r(45477);
            let o = e => e.transfers,
                s = (0, a.Mz)(o, e => null == e ? void 0 : e.list),
                l = (0, a.Mz)(o, e => null == e ? void 0 : e.transfer),
                d = e => e.transfersReceived,
                c = (0, a.Mz)(d, e => null == e ? void 0 : e.list),
                u = (0, a.Mz)(d, e => null == e ? void 0 : e.transfer),
                _ = (0, a.Mz)(e => e.upload, e => e.isPending);
            (0, a.Mz)([s], e => (e || []).reduce((e, t) => {
                let r = [...e];
                return t.recipients.forEach(t => {
                    -1 === e.indexOf(t.email) && r.push(t.email)
                }), t.files.forEach(t => {
                    -1 === e.indexOf(t.name) && r.push(t.name)
                }), -1 === r.indexOf(t.display_name) && r.push(t.display_name), r
            }, []).map(e => ({
                label: e,
                id: e,
                spellings: e
            }))), (0, a.Mz)([c], e => (e || []).reduce((e, t) => {
                let r = [...e];
                return e.includes(t.from) || r.push(t.from), t.files.forEach(t => {
                    -1 === e.indexOf(t.name) && r.push(t.name)
                }), r
            }, []).map(e => ({
                label: e,
                id: e,
                spellings: e
            })));
            let p = (0, a.Mz)(n.Kj, i.IJ, (e, t) => !!t && 1 === e.recipients.length && "email" === e.type && e.recipients[0] === t),
                E = (0, a.Mz)([s, l, n.Kj, (e, t) => t, _], (e, t, r, a) => {
                    if (!a) return;
                    if (t && t.id === a) return t;
                    let n = (e || []).find(e => {
                        let {
                            id: t
                        } = e;
                        return t === a
                    });
                    return n || (r && r.id === a ? (e => {
                        let t = (null == e ? void 0 : e.expiryInSeconds) || 0,
                            r = new Date;
                        return {
                            id: e.id,
                            parent_id: e.parent_id,
                            state: e.state,
                            shortened_url: e.shortURL,
                            expiresAt: new Date(r.getTime() + 1e3 * t).toISOString(),
                            password_protected: null !== e.password,
                            uploaded_at: r.toISOString(),
                            expiryInSeconds: t,
                            size: (e.items || []).reduce((e, t) => e += t.size, 0),
                            deleted_at: null,
                            account_id: e.accountId,
                            security_hash: e.securityHash,
                            signature: e.signature,
                            number_of_downloads: 0,
                            display_name: e.displayName,
                            items: (e.items || e.files || []).map(e => ({
                                ...e,
                                id: e.file.ref.id,
                                file: {
                                    ...e.file,
                                    ref: {
                                        ...e.file.ref,
                                        id: e.file.ref.id,
                                        name: e.file.ref.name,
                                        retries: 0,
                                        size: e.file.ref.size,
                                        item_type: e.file.ref.apiType,
                                        apiType: e.file.ref.apiType
                                    }
                                }
                            })),
                            files: (e.files || e.items || []).map(e => ({
                                id: e.id,
                                name: e.name,
                                retries: 0,
                                size: e.size,
                                item_type: e.apiType,
                                apiType: e.apiType
                            })),
                            itemsTree: e.itemsTree,
                            recipients: (e.recipients || []).map(e => ({
                                email: e,
                                transfer_downloaded: !1,
                                bounced: !1
                            })),
                            downloaderEmailVerification: e.downloaderEmailVerification,
                            viewOption: e.viewOption
                        }
                    })(r) : void 0)
                })
        },
        14901: (e, t, r) => {
            r.d(t, {
                u: () => a
            });
            let a = {
                panel: {},
                transfer: {},
                popover: {}
            }
        },
        15066: (e, t, r) => {
            r.d(t, {
                QK: () => a.QK,
                Xv: () => a.Xv,
                _C: () => a._C
            });
            var a = r(1568)
        },
        15168: (e, t, r) => {
            r.d(t, {
                $e: () => F,
                A3: () => u,
                Bt: () => $,
                D4: () => j,
                Di: () => b,
                HD: () => T,
                HM: () => y,
                K0: () => f,
                Ks: () => v,
                LJ: () => _,
                MJ: () => U,
                Mr: () => M,
                Py: () => m,
                R: () => q,
                RK: () => H,
                TB: () => k,
                Uf: () => G,
                W5: () => E,
                YF: () => K,
                Z6: () => A,
                _Q: () => W,
                eL: () => C,
                ef: () => X,
                f_: () => x,
                fj: () => N,
                jV: () => D,
                lc: () => V,
                lv: () => B,
                lw: () => Z,
                m$: () => J,
                mA: () => Y,
                pS: () => O,
                r7: () => w,
                u0: () => Q,
                wv: () => R,
                yi: () => I,
                zr: () => p
            });
            var a = r(16182),
                n = r.n(a),
                i = r(4559),
                o = r(80341),
                s = r(24870),
                l = r(24463),
                d = r(90512);
            let c = e => e.showcase,
                u = (0, i.Mz)(c, e => e.currentTransferId),
                _ = (0, i.Mz)(c, e => e.isModalOpen),
                p = (0, i.Mz)(c, e => e.selectedBlock),
                E = (0, i.Mz)(p, e => null !== e && ((null == e ? void 0 : e.type) == o._B.BodyText || (null == e ? void 0 : e.type) == o._B.TitleText));
            (0, i.Mz)(c, e => e.selectedBackgroundColor);
            let f = (0, i.Mz)(c, e => e.stagedCoverLayout),
                A = (0, i.Mz)(c, e => e.hoveredBlock),
                T = (0, i.Mz)(c, e => e.draftCoverLayout),
                m = (0, i.Mz)(p, T, (e, t) => {
                    var r, a, n, i, s, l;
                    switch (null == e ? void 0 : e.type) {
                        case o._B.Background:
                            return null != (a = null == t || null == (r = t.background) ? void 0 : r.backgroundColor) ? a : null;
                        case o._B.TitleText:
                            return null != (i = null == t || null == (n = t.titleText) ? void 0 : n.textColor) ? i : null;
                        case o._B.BodyText:
                            return null != (l = null == t || null == (s = t.bodyText) ? void 0 : s.textColor) ? l : null;
                        default:
                            return null
                    }
                });

            function S(e, t) {
                var r;
                if (null == (r = e.background) ? void 0 : r.assetId) {
                    let r = x(t, e.background.assetId);
                    return {
                        ...e,
                        background: {
                            ...e.background,
                            asset: r
                        }
                    }
                }
                return e
            }
            let g = e => e,
                R = (0, i.Mz)(T, g, (e, t) => {
                    if (e) return S(e, t)
                }),
                h = (0, i.Mz)(f, g, (e, t) => {
                    if (e) return S(e, t)
                }),
                y = (0, i.Mz)(c, e => e.coverLayouts),
                w = (0, i.Mz)(y, (e, t) => t, (e, t) => e[t]),
                I = (0, i.Mz)(w, g, (e, t) => {
                    if (e) return S(e, t)
                }),
                v = e => t => I(t, e),
                N = e => t => w(t, e),
                O = (0, i.Mz)(c, e => e.backgroundType),
                P = (0, i.Mz)(c, e => e.assets),
                L = (0, i.Mz)(c, e => e.selectedBackgroundAssets),
                D = (0, i.Mz)(L, P, (e, t) => e.map(e => e.assetId && t[e.assetId] || e)),
                C = (0, i.Mz)(D, e => e[0]),
                U = (0, i.Mz)(L, e => e.length > 1),
                k = (0, i.Mz)(c, e => e.multiImageLayout),
                b = (0, i.Mz)(c, e => e.isLoading),
                F = (0, i.Mz)(c, e => e.modalPageId),
                M = (0, i.Mz)(d.AX, h, _, g, (e, t, r, a) => !r && t ? t : I(a, e || "")),
                x = (0, i.Mz)((e, t) => t, P, (e, t) => t[e]),
                B = (0, i.Mz)(c, e => e.entryPoint),
                W = (0, i.Mz)(c, e => e.uploadedBackgroundAssets),
                z = (0, i.Mz)(c, e => e.selectedPreviewsBackgroundAssets),
                G = (0, i.Mz)(z, P, (e, t) => e.map(e => e.assetId && t[e.assetId] || e)),
                V = (0, i.Mz)(G, e => e[0]),
                H = (0, i.Mz)(c, e => e.uploadedPreviewsBackgroundAssets),
                j = (0, i.Mz)(c, e => e.savedPreviewsBackgroundAsset),
                Y = (0, i.Mz)(c, e => e.previewsBackgroundType),
                K = (0, i.Mz)(c, e => e.selectedPreviewsBackgroundColor),
                q = (0, i.Mz)(c, e => e.savedPreviewsBackgroundType),
                Q = (0, i.Mz)(c, e => e.savedPreviewsBackgroundColor),
                X = (0, i.Mz)(c, e => e.stagedPreviewsBackgroundAsset),
                J = (0, i.Mz)(c, e => e.stagedPreviewsBackgroundType),
                Z = (0, i.Mz)(c, e => e.stagedPreviewsBackgroundColor),
                $ = (0, i.Mz)(_, T, O, u, g, f, z, j, Y, q, K, Q, (e, t, r, a, i, d, c, u, _, p, E, f) => {
                    if (!e || !t) return !1;
                    if (null !== p && _ !== p || _ === o.hK.solidColor && null !== E && (null === f || E !== f)) return !0;
                    if (_ === o.hK.image) {
                        var A;
                        if ((null == (A = c[0]) ? void 0 : A.assetId) !== (null == u ? void 0 : u.assetId)) return !0
                    }
                    let {
                        layout: T
                    } = (0, l.Hh)(r, t), m = e => JSON.parse(JSON.stringify(e));
                    if (a) {
                        let e = w(i, a);
                        return !n()(m(null != e ? e : s.dL), m(T))
                    }
                    return d ? !n()(m(d), m(T)) : !n()(m(s.dL), m(T))
                })
        },
        15321: (e, t, r) => {
            r.d(t, {
                $A: () => s,
                Id: () => o,
                J5: () => E,
                JK: () => c,
                NI: () => n,
                O1: () => p,
                T9: () => f,
                UE: () => u,
                Uv: () => a,
                W5: () => _,
                _5: () => d,
                h3: () => m,
                iO: () => A,
                qL: () => i,
                s3: () => T,
                vA: () => l
            });
            let a = "#000000",
                n = "#17181a",
                i = "#484a4d",
                o = "#6a6d70",
                s = "#babcbf",
                l = "#d4d7d9",
                d = "#e8ebed",
                c = "#d8d8d8",
                u = "#ffffff",
                _ = "#5268ff",
                p = "#fbd767",
                E = "#6ab5bb",
                f = "#B82B00",
                A = "#A4A4A4",
                T = "#A63719",
                m = "#353535"
        },
        15539: (e, t, r) => {
            r.d(t, {
                NZ: () => o,
                Ut: () => d,
                Y2: () => c,
                bO: () => s,
                nn: () => l,
                v2: () => i
            });
            var a = r(4559),
                n = r(10694);
            let i = e => e.transferUpload,
                o = e => e.transfer,
                s = (0, a.Mz)(o, e => [n.r.STARTED, n.r.PAUSED].includes(e.state)),
                l = (0, a.Mz)(o, e => e ? (e.items || e.files || []).reduce((e, t) => {
                    let {
                        size: r
                    } = t, a = Number(r);
                    return isNaN(a) ? e : e + a
                }, 0) : 0),
                d = e => (0, a.Mz)(l, t => e - t);
            (0, a.Mz)(o, e => e.parent_id);
            let c = (0, a.Mz)([o], e => !!e.parent_id);
            (0, a.Mz)(c, o, (e, t) => {
                if (e) return t
            }), (0, a.Mz)(e => e.transfers, e => e.list.reduce((e, t) => {
                let {
                    size: r
                } = t;
                return e + r
            }, 0))
        },
        17198: (e, t, r) => {
            r.d(t, {
                C: () => s,
                f: () => o
            });
            var a = r(71034),
                n = r(82710);
            let i = (0, r(25402).A)(),
                o = (0, a.xP)({
                    reducerPath: "wolfApi",
                    baseQuery: (0, n.S)({
                        baseUrl: "".concat(i.NEXT_PUBLIC_WOLF_API_BASE, "/api/v1/")
                    }),
                    endpoints: e => ({
                        predict: e.mutation({
                            query: e => ({
                                url: "predict",
                                method: "POST",
                                data: e
                            })
                        })
                    })
                }),
                {
                    usePredictMutation: s
                } = o
        },
        18713: (e, t, r) => {
            r.d(t, {
                aR: () => d.aR,
                Qo: () => d.Qo,
                IL: () => d.IL,
                OJ: () => d.OJ,
                Jv: () => E,
                hS: () => p,
                TN: () => c,
                O0: () => u,
                aI: () => a.aI,
                H5: () => a.H5,
                Lr: () => l
            });
            var a = r(58712),
                n = r(21462),
                i = r(38169),
                o = r(98172),
                s = r(86781);

            function l() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        page: 1,
                        limit: 10
                    },
                    [t, r] = n.useState(null),
                    l = (0, i.d4)(o.e2),
                    d = (0, i.d4)(s.JV),
                    c = !!((null == l ? void 0 : l.isLoggedIn) && d),
                    {
                        data: u,
                        isLoading: _,
                        isFetching: p,
                        error: E,
                        refetch: f
                    } = (0, a.q9)(e, {
                        skip: !c
                    });
                return n.useEffect(() => {
                    c && u && r({
                        signatureTransfers: u.signatureTransfers || [],
                        relatedSignerTransfers: u.relatedSignerTransfers || [],
                        totalCount: u.pagination.totalCount || 0,
                        currentPage: u.pagination.page || 1,
                        statistics: {
                            waitingForOthers: u.statistics.pendingSignature || 0,
                            actionRequired: u.statistics.pendingYourSignature || 0,
                            completed: u.statistics.editorCompleted || 0
                        }
                    })
                }, [u, c]), {
                    data: t,
                    loading: !!_ || !!p,
                    error: E,
                    refetch: f
                }
            }
            var d = r(48255);

            function c(e) {
                return e.transfer.display_name || "Untitled"
            }

            function u(e, t) {
                let r = _(e.transfer.recipients);
                return e.type === d.OJ.EDITOR && (e.status === d.IL.PENDING || e.status === d.IL.PARTIAL) && r.length > 0 && r.includes(t.toLowerCase())
            }

            function _(e) {
                return e.map(e => {
                    var t;
                    return null == (t = e.email) ? void 0 : t.toLowerCase()
                }).filter(e => !!e)
            }

            function p(e, t) {
                let r = _(e);
                return r && 0 !== r.length ? 1 === r.length && t.toLowerCase() === r[0] ? "You" : 1 === r.length ? r[0] : "".concat(r[0], " [+").concat(r.length - 1, "]") : "-"
            }

            function E(e) {
                let t = new Map;
                return e.filter(e => e.type === d.OJ.SIGNER && e.editorTransferId).forEach(e => {
                    t.set(e.editorTransferId, e)
                }), t
            }
        },
        19511: (e, t, r) => {
            r.d(t, {
                Fx: () => A,
                lT: () => T,
                zi: () => m
            });
            var a = r(30530),
                n = r(21462),
                i = r(38169),
                o = r(82187),
                s = r(87963),
                l = r(87379),
                d = r(30631),
                c = r(82261),
                u = r(90512),
                _ = r(86781),
                p = r(26573),
                E = r(72546),
                f = r(10694);
            let A = "track_social_saml_user_login";

            function T() {
                let e = (0, i.d4)(E.Kj),
                    t = (0, i.d4)(p.FB),
                    r = (0, i.d4)(c.Uh),
                    a = (0, i.d4)(u.pe),
                    n = (0, l.GE)(e.paid),
                    o = e.state === f.r.RECOVERING;
                return !!a.includes("downloads") && !!t && !!d.Ay.isMobile && (!n || !!r) && !o
            }

            function m() {
                let e = (0, n.useRef)(!1),
                    t = (0, i.d4)(_.JV);
                (0, n.useEffect)(() => {
                    try {
                        let a = sessionStorage.getItem(A);
                        if (e.current || !t || !a) return;
                        e.current = !0, sessionStorage.removeItem(A);
                        let n = new URLSearchParams(a),
                            i = n.get("method") || void 0;
                        if (i && ["google", "apple", "slack", "saml"].includes(i)) {
                            var r;
                            let e = n.get("paywall") || void 0;
                            (0, s.Od)().trackUserAction(o.xO.userLogin({
                                trigger: (0, o._y)(null != (r = n.get("trigger")) ? r : void 0),
                                triggerUrl: n.get("trigger_url") || window.location.href,
                                triggerUrlPath: n.get("trigger_url_path") || window.location.pathname,
                                paywall: e || void 0,
                                paywallTrigger: e && n.get("paywall_trigger") || void 0,
                                method: i || "unknown",
                                isSignUp: "true" === n.get("is_signup"),
                                emailVerificationCompleted: !0
                            }))
                        }
                    } catch (e) {
                        a.yf.logger.error("Error tracking social/SAML user login", {
                            errorMessage: e.message,
                            errorStack: e.stack
                        })
                    }
                }, [t])
            }
        },
        19653: (e, t, r) => {
            let a;
            r.d(t, {
                BD: () => T,
                H8: () => A,
                Hh: () => _,
                IF: () => m,
                Rf: () => E,
                _E: () => p,
                iD: () => S,
                ri: () => f,
                wR: () => g
            });
            var n = r(7232),
                i = r(56941),
                o = r(63492),
                s = r(98654),
                l = r(25402),
                d = r(5619);
            let c = (0, i.Z)(),
                u = new n.AuthenticationClient(c);
            async function _() {
                if (void 0 === a) {
                    var e;
                    a = new n.AuthenticationAdapter({
                        authenticationClientOptions: c
                    }), ((null == (e = new URLSearchParams(window.location.search).get(s.m1.embeddedMobile)) ? void 0 : e.toLocaleLowerCase()) === "true" || "true" === (0, s.qg)(s.m1.embeddedMobile)) && ((0, s.qe)(s.m1.embeddedMobile, "true"), null == a || a.setActiveAuthClient("nativeAuthClient"))
                }
                return a
            }
            async function p(e) {
                let {
                    tier: t,
                    search: r,
                    customParameters: a,
                    redirectUri: n
                } = e, i = await _(), o = new URLSearchParams(r);
                o.set("tier", t), await i.signUp({
                    search: o.toString(),
                    appState: {
                        tier: t,
                        redirectUri: n
                    },
                    customParameters: a
                })
            }
            async function E(e) {
                let {
                    search: t,
                    appState: r,
                    customParameters: a
                } = e, n = await _();
                await n.login({
                    search: t,
                    customParameters: a,
                    appState: r
                })
            }
            async function f(e) {
                let t = await _(),
                    r = new URL(void 0 === e ? "".concat(location.origin).concat(o.zu) : "".concat(location.protocol, "//").concat(e));
                (0, d.Aq)(), await t.logoutSession({
                    returnTo: r.origin
                })
            }
            async function A(e) {
                let t = new URL(void 0 === e ? "".concat(location.origin).concat(o.zu) : "".concat(location.protocol, "//").concat(e));
                (0, d.Aq)(), await u.logoutAllSessions({
                    returnTo: t.origin
                })
            }
            async function T() {
                let e = await _();
                await e.forgotPassword()
            }
            async function m(e) {
                let {
                    config: t,
                    handleError: r
                } = e;
                if (void 0 === t.url || !t.url.startsWith((0, l.A)().NEXT_PUBLIC_API_URL + "/api") || o._O.includes(t.url)) return t;
                try {
                    let e = await S();
                    t.headers.Authorization = "Bearer ".concat(e)
                } catch (e) {
                    await r(e)
                }
                return t
            }
            async function S() {
                return (await _()).getTokenSilently()
            }
            async function g() {
                let e = await _();
                return await e.isAuthenticated()
            }
        },
        20445: (e, t, r) => {
            r.d(t, {
                A: () => E
            });
            var a = r(87963),
                n = r(40334),
                i = r(79716),
                o = r(62373),
                s = r(55676),
                l = r(55611),
                d = r(33901);
            let c = {
                    id: n.o.privacy.consentId,
                    version: n.o.privacy.consentVersion,
                    name: n.o.cookies.privacy.name,
                    durationInDays: 365,
                    init: !0,
                    domain: (0, i.R)(),
                    userId: null
                },
                u = {
                    ...c,
                    validVersion: "".concat(c.id, ":").concat(c.version)
                };

            function _(e) {
                let {
                    allowTracking: t = !1
                } = e;
                o.A.configure({
                    allowTracking: t,
                    userId: u.userId
                }), (0, d.ox)() || (o.A.trackSnowplowEvent({
                    category: "cookie_wall",
                    action: t ? "accept_trackers" : "decline_trackers"
                }), (0, a.Od)().trackUserAction(t ? l.I.trackersAccepted() : l.I.trackersDeclined()))
            }

            function p(e) {
                let {
                    allowFunctional: t = !0,
                    allowAnalytical: r = !0,
                    allowTracking: a = !1
                } = e;
                s.A.set(u.name, JSON.stringify({
                    v: u.validVersion,
                    f: +!!t,
                    a: +!!r,
                    t: +!!a
                }), {
                    days: u.durationInDays,
                    domain: u.domain
                })
            }
            let E = {
                settings: u,
                configure: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    (u = {
                        ...u,
                        ...e
                    }).init = !1
                },
                acceptTrackers: function() {
                    p({
                        allowTracking: !0
                    }), _({
                        allowTracking: !0
                    }), u.onAcceptTrackers && u.onAcceptTrackers(), o.A.trackFirstVisit()
                },
                declineTrackers: function() {
                    p({
                        allowTracking: !1
                    }), _({
                        allowTracking: !1
                    })
                },
                userAllowsTracking: function() {
                    let e = function() {
                        let e = null;
                        try {
                            e = s.A.get(u.name), e = {
                                version: (e = JSON.parse(e)).v || "",
                                allowFunctional: e.f || !0,
                                allowAnalytical: e.a || !0,
                                allowTracking: e.t || !1
                            }
                        } catch (t) {
                            e = null
                        }
                        return e
                    }();
                    return null != e && e.version === u.validVersion && 1 === e.allowTracking
                }
            }
        },
        20657: (e, t, r) => {
            r.d(t, {
                Zy: () => s,
                mM: () => n,
                nD: () => i,
                pu: () => l,
                tE: () => o,
                u4: () => d
            });
            let a = "download_page_href",
                n = e => window.location.protocol + "//" + window.location.host + e,
                i = (e, t) => [t, e].filter(e => e).join(", "),
                o = (e, t) => ({
                    name: i(e.firstName, e.lastName),
                    email: t,
                    phone: "",
                    address: {
                        country: e.country,
                        state: e.state || "",
                        postal_code: e.zipCode || "",
                        city: e.city || "",
                        line1: e.line1 || "",
                        line2: e.line2 || ""
                    }
                }),
                s = e => {
                    window.localStorage.setItem(a, e)
                },
                l = () => window.localStorage.getItem(a),
                d = () => {
                    window.localStorage.removeItem(a)
                }
        },
        20776: (e, t, r) => {
            r.d(t, {
                ue: () => o,
                Qg: () => c,
                UX: () => p,
                wb: () => l,
                PG: () => E,
                f2: () => f,
                o4: () => u,
                jW: () => d,
                F0: () => _,
                Pu: () => s
            });
            var a = r(96361),
                n = r(59042);
            let i = "lastUnlockPopupShownDay",
                o = {
                    state: n.B.Hidden,
                    transferUnlocked: !1,
                    lastUnlockPopupShownDay: (() => {
                        try {
                            let e = localStorage.getItem(i);
                            if (e) return new Date(e)
                        } catch (e) {}
                        return new Date(0)
                    })(),
                    transferSizeLimitPaywall: {
                        state: n.B.Hidden,
                        transferUnlocked: !1
                    },
                    autoExpiryTooltip: {
                        state: "hidden"
                    },
                    freeTransferBanner: {
                        state: "hidden"
                    }
                },
                s = (0, a.Z0)({
                    name: "unlockOneDayExpiryTransfer",
                    initialState: o,
                    reducers: {
                        unlockOneDayExpiryTransfer: e => {
                            e.transferUnlocked = !0, e.state = n.B.Hidden
                        },
                        resetTransferUnlocked: e => {
                            e.transferUnlocked = !1
                        },
                        setState: (e, t) => {
                            if (e.state = t.payload, t.payload === n.B.UnlockTransfer) {
                                let t = new Date;
                                e.lastUnlockPopupShownDay = t;
                                try {
                                    localStorage.setItem(i, t.toISOString())
                                } catch (e) {}
                            }
                        },
                        unlockOneDayExpiryTransferSizeLimitPaywall: e => {
                            e.transferSizeLimitPaywall.transferUnlocked = !0, e.transferSizeLimitPaywall.state = n.B.Hidden
                        },
                        resetTransferUnlockedSizeLimitPaywall: e => {
                            e.transferSizeLimitPaywall.transferUnlocked = !1
                        },
                        setStateSizeLimitPaywall: (e, t) => {
                            e.transferSizeLimitPaywall.state = t.payload
                        },
                        setStateAutoExpiryTooltip: (e, t) => {
                            e.autoExpiryTooltip.state = t.payload
                        },
                        setStateFreeTransferBanner: (e, t) => {
                            e.freeTransferBanner.state = t.payload
                        }
                    }
                }),
                {
                    setState: l,
                    unlockOneDayExpiryTransfer: d,
                    resetTransferUnlocked: c,
                    setStateSizeLimitPaywall: u,
                    unlockOneDayExpiryTransferSizeLimitPaywall: _,
                    resetTransferUnlockedSizeLimitPaywall: p,
                    setStateAutoExpiryTooltip: E,
                    setStateFreeTransferBanner: f
                } = s.actions
        },
        21301: (e, t, r) => {
            r.d(t, {
                $_: () => a.$_,
                BV: () => a.BV,
                NV: () => n.NV,
                TL: () => a.TL,
                xl: () => n.xl
            });
            var a = r(89795),
                n = r(78571)
        },
        21319: (e, t, r) => {
            r.d(t, {
                Y: () => a
            });
            var a = function(e) {
                return e.TransferWindow = "transfer", e.HalfWidthPanel = "plus", e.FullWidthPanel = "page", e
            }({})
        },
        21848: (e, t, r) => {
            r.d(t, {
                BD: () => k,
                Hh: () => D,
                QF: () => L,
                e4: () => y,
                iD: () => C,
                ri: () => U,
                xw: () => b,
                zh: () => O
            });
            var a = r(26465),
                n = r(85201),
                i = r(57455),
                o = r(65509),
                s = r(63492),
                l = r(19653),
                d = r(33448),
                c = r(24932),
                u = r(50467),
                _ = r(89187),
                p = r(79716),
                E = r(1172),
                f = r(7012),
                A = r(5619),
                T = r(78598),
                m = r(41993),
                S = r(19511),
                g = r(57912),
                R = r(95467);
            let h = null;
            var y = function(e) {
                return e.UPDATE_STATUS = "AUTH_UPDATE_STATUS", e.UPDATE_APP_STATE = "AUTH_UPDATE_APP_STATE", e.UPDATE_SYNC = "AUTH_UPDATE_SYNC", e.LOADING = "AUTH_LOADING", e
            }({});

            function w(e) {
                return !0 !== e.isLoggedIn ? {
                    type: "AUTH_UPDATE_STATUS",
                    isLoggedIn: !1,
                    auth0UserId: ""
                } : {
                    type: "AUTH_UPDATE_STATUS",
                    isLoggedIn: !1,
                    auth0UserId: "",
                    ...e
                }
            }

            function I(e) {
                return {
                    type: "AUTH_UPDATE_APP_STATE",
                    state: e
                }
            }

            function v(e) {
                return {
                    type: "AUTH_LOADING",
                    isLoading: e
                }
            }
            let N = async (e, t) => {
                "login_required" === e.error ? ((0, A.Aq)(), await t(w({}))) : "user_unknown" === e.error ? a.L.addAction(u.QD) : ["LoginRequiredError"].includes(e.name) || (m.A.error(e), T.A.track(e))
            };

            function O(e) {
                let {
                    tokenClaims: t,
                    dispatch: r
                } = e;
                null !== h && n.A.interceptors.request.eject(h), h = n.A.interceptors.request.use(async e => {
                    var a, n, i;
                    let o = await l.IF({
                            config: e,
                            handleError: e => N(e, r)
                        }),
                        s = null == t || null == (a = t.sub) ? void 0 : a.startsWith("email|");
                    return await r(w({
                        isLoggedIn: !0,
                        givenName: null == t ? void 0 : t.given_name,
                        familyName: null != (i = null == t ? void 0 : t.family_name) ? i : "",
                        email: null == t ? void 0 : t.email,
                        picture: null == t ? void 0 : t.picture,
                        auth0UserId: null == t ? void 0 : t.sub,
                        emailIsLocked: !(null == t || null == (n = t.sub) ? void 0 : n.startsWith("auth0|")) && !s,
                        isPasswordless: s
                    })), o
                })
            }
            async function P(e, t) {
                let r = await l.Hh();
                "/log-in" === location.pathname && r.clearLocalCache(), await r.getTokenSilently();
                let a = await r.getIdTokenClaims();
                O({
                    tokenClaims: a,
                    dispatch: e
                });
                let n = await e(R.default.getUser());
                if ((void 0 === n || !1 === n.id) && !(0, d.H)()) {
                    let e = Error("Unknown user");
                    throw e.error = "user_unknown", e
                }
                let i = (0, E.t)(n),
                    c = t().session.domain;
                if (n && R.default.setWTPlusCookie({
                        planTier: n.plan_tier,
                        domain: (0, p.R)()
                    }), (null == i ? void 0 : i.subdomain_name) !== void 0 && (null == i ? void 0 : i.active_subscription) === !0 && (0, f.WU)(n) && location.hostname === c) {
                    let e = location.pathname.replace("/account/callback", "/"),
                        t = (0, d.H)() ? "" : location.search,
                        r = new URL("".concat(location.protocol, "//").concat(i.subdomain_name, ".").concat(c).concat(e).concat(t));
                    "" !== location.port && (r.port = location.port), location.href = r.href;
                    return
                }
                if ((null == i ? void 0 : i.id) !== void 0) {
                    var u;
                    if (n.email.toLowerCase() !== (null == a || null == (u = a.email) ? void 0 : u.toLowerCase()) || n.is_verified !== (null == a ? void 0 : a.email_verified) || ((null == a ? void 0 : a.family_name) || n.family_name) && (null == a ? void 0 : a.family_name) !== n.family_name || n.given_name !== (null == a ? void 0 : a.given_name)) {
                        let t = await o.A.User.sync();
                        Object.keys((null == t ? void 0 : t.body) || {}).length > 0 && (await e(R.default.getUser()), await e({
                            type: "AUTH_UPDATE_SYNC",
                            updates: t.body
                        }))
                    }
                    await Promise.all([e(g.A.getAccount(i.id))]), localStorage.removeItem(s.Cm)
                }
            }

            function L() {
                return async (e, t) => {
                    await e(v(!0));
                    try {
                        let t = localStorage.getItem(s.Cm);
                        t && Object.values(_.js).includes(t) && await e(I({
                            signUpTier: t
                        }))
                    } catch (e) {}
                    let r = await l.Hh();
                    try {
                        if ((0, d.H)()) {
                            let t = await r.getActiveAuthClient().handleRedirectCallback(),
                                a = t.appState.redirectUri,
                                n = new URLSearchParams(window.location.search),
                                i = n.get("method") || void 0;
                            if (i && ["google", "apple", "slack", "saml"].includes(i) && sessionStorage.setItem(S.Fx, n.toString()), a) {
                                window.location.href = a;
                                return
                            }
                            let o = t.appState.tier;
                            Object.values(_.js).includes(o) && (await e(I({
                                signUpTier: o
                            })), localStorage.setItem(s.Cm, o))
                        }
                    } catch (t) {
                        t instanceof Error && "Invalid state" !== t.message && await N(t, e)
                    }
                    try {
                        let e = await l.Hh();
                        "/log-in" === location.pathname && e.clearLocalCache(), await e.getTokenSilently()
                    } catch (e) {
                        try {
                            await r.getActiveAuthClient().silentLogin()
                        } catch (e) {}
                    }
                    try {
                        await P(e, t)
                    } catch (t) {
                        await N(t, e)
                    }
                    await e(v(!1))
                }
            }

            function D(e) {
                let {
                    tier: t,
                    search: r,
                    customParameters: a,
                    redirectUri: n
                } = e;
                return async e => {
                    await e(v(!0));
                    let i = new URLSearchParams((r || location.search || "").replace("?", ""));
                    i.append(s.FX, "1"), l._E({
                        tier: t,
                        search: i.toString(),
                        customParameters: a,
                        redirectUri: n
                    })
                }
            }

            function C(e, t, r) {
                return async a => {
                    await a(v(!0));
                    let n = new URLSearchParams((location.search || "").replace("?", ""));
                    n.append(s.FX, "1"), n.append("login", "1"), r && Object.entries(r).forEach(e => {
                        let [t, r] = e;
                        n.append(t, r)
                    });
                    let i = (0, c.I)();
                    l.Rf({
                        search: n.toString(),
                        appState: e,
                        customParameters: {
                            lsid: i || void 0,
                            login_hint: null == t ? void 0 : t.loginHint,
                            error: null == t ? void 0 : t.error,
                            trigger: null == t ? void 0 : t.trigger,
                            trigger_url: null == t ? void 0 : t.triggerUrl,
                            trigger_url_path: null == t ? void 0 : t.triggerUrlPath,
                            paywall: null == t ? void 0 : t.paywall,
                            paywall_trigger: null == t ? void 0 : t.paywallTrigger,
                            connection: null == t ? void 0 : t.connection
                        }
                    })
                }
            }

            function U() {
                return async (e, t) => {
                    var r;
                    await e(v(!0)), (0, i.YA)(), await e(w({}));
                    let n = null == (r = t().session) ? void 0 : r.domain,
                        o = (0, p.R)();
                    await l.ri(n), R.default.unsetWTPlusCookie({
                        domain: o
                    }), a.L.removeUser()
                }
            }

            function k() {
                return async e => {
                    await e(v(!0)), l.BD(), await e(v(!1))
                }
            }

            function b() {
                return async e => {
                    await e(v(!0)), await o.A.User.triggerPasswordReset(), await e(v(!1))
                }
            }
        },
        22640: (e, t, r) => {
            r.d(t, {
                KC: () => i,
                RG: () => s,
                ju: () => o,
                oO: () => n
            });
            var a = r(82901);
            let n = "entire_transfer",
                i = "single_file",
                o = "single_file_preview";
            async function s(e) {
                let {
                    transfer: t,
                    secret: r,
                    recipientId: n,
                    fileIds: i,
                    domainUserId: o,
                    uploadInProgress: s,
                    intent: l,
                    downloaderEmail: d
                } = e;
                ! function(e) {
                    let {
                        downloadLink: t,
                        uploadInProgress: r
                    } = e;
                    if (!t) throw Error("DownloadFailed");
                    if (r) {
                        let e = window.open(t.direct_link);
                        return e && (e.opener = null)
                    }
                    location.assign(t.direct_link)
                }({
                    downloadLink: await (0, a.Cs)({
                        transferId: t.id,
                        secret: r,
                        recipientId: n,
                        fileIds: i,
                        password: t.password,
                        domainUserId: o,
                        intent: l,
                        downloaderEmail: d
                    }),
                    uploadInProgress: s
                })
            }
        },
        23007: (e, t, r) => {
            r.d(t, {
                n: () => o
            });
            var a = r(91295),
                n = r(25402),
                i = r(95779);
            async function o(e) {
                let {
                    email: t,
                    language: r
                } = e, o = (0, n.A)(), s = await (0, i.A)({
                    method: "GET",
                    path: "".concat(o.NEXT_PUBLIC_ADROIT_API_BASE, "/public/api/v1/users/exists"),
                    params: {
                        email: t
                    }
                }), l = s.body.allowed;
                return l && await (0, a.b)({
                    email: t,
                    language: r
                }), {
                    userExists: s.body.exists,
                    allowed: l
                }
            }
        },
        23037: (e, t, r) => {
            r.d(t, {
                $E: () => s,
                Gv: () => i,
                ND: () => n,
                YE: () => o
            });
            var a = r(26115);
            let n = "exception.generic_error",
                i = "exception.invalid_file_error",
                o = 5 * a.MB,
                s = /.(jp(e?)g|png)$/i
        },
        23901: (e, t, r) => {
            r.d(t, {
                x: () => function e(t) {
                    if (!c()(t) && !l()(t)) return t;
                    if (l()(t)) return t.map(e);
                    let r = {};
                    return o()(t, (t, a) => {
                        c()(t) || l()(t) ? r[n()(a)] = e(t) : r[n()(a)] = t
                    }), r
                }
            });
            var a = r(58200),
                n = r.n(a),
                i = r(89364),
                o = r.n(i),
                s = r(867),
                l = r.n(s),
                d = r(49657),
                c = r.n(d)
        },
        23966: (e, t, r) => {
            r.d(t, {
                I: () => a
            });
            let a = {
                hidden: !1,
                panel: {
                    size: r(92156).y.NONE
                },
                wallpaper: {},
                transferBox: void 0,
                dropzoneActive: !1,
                actionbarVisible: !1,
                isResumeUploadModalOpen: !1
            }
        },
        24433: (e, t, r) => {
            r.d(t, {
                a: () => l
            });
            var a = r(96361),
                n = r(38967),
                i = r(21319);

            function o(e) {
                return e === i.Y.HalfWidthPanel
            }

            function s(e) {
                return e === i.Y.FullWidthPanel
            }
            let l = (0, a.Z0)({
                name: "route",
                initialState: n.u,
                reducers: {
                    setRoute(e, t) {
                        let r, {
                                payload: a
                            } = t,
                            n = a.type,
                            i = a.name;
                        for (r in a) a.hasOwnProperty(r) && (e[r] = a[r]);
                        e.nextRoute = null, e.isPanelOpen = o(n) || s(n), e.isPanelHalfOpen = o(n), e.isPanelFullOpen = s(n), e.isMobileTransfer = "transfer-mobile" === i, e.isMobileTransfer && (e.isPanelOpen = !1)
                    },
                    setFormState(e, t) {
                        e.unSavedForm = t.payload
                    },
                    setNextAction(e, t) {
                        e.nextRoute = t.payload
                    }
                }
            })
        },
        24463: (e, t, r) => {
            r.d(t, {
                CT: () => s,
                Hh: () => i,
                Xb: () => o,
                Y9: () => l
            });
            var a = r(80341),
                n = r(83263);

            function i(e, t) {
                if (!t.background) return {
                    layout: t,
                    deletedAssetIds: []
                };
                let r = t[a._B.Background];
                switch (e) {
                    case a.hK.solidColor:
                        let {
                            assetId: n
                        } = r;
                        return {
                            layout: {
                                ...t,
                                [a._B.Background]: {
                                    ...r,
                                    asset: void 0,
                                    assetId: void 0
                                }
                            }, deletedAssetIds: n ? [n] : []
                        };
                    case a.hK.image:
                        return {
                            layout: {
                                ...t,
                                [a._B.Background]: {
                                    ...r,
                                    backgroundColor: void 0
                                }
                            }, deletedAssetIds: []
                        }
                }
                return {
                    layout: t,
                    deletedAssetIds: []
                }
            }

            function o(e, t) {
                if (!t.background || !e) return t;
                let r = {
                    ...t.background,
                    asset: e
                };
                return {
                    ...t,
                    background: r
                }
            }

            function s(e) {
                return "text" in e && !e.text && (e.type === a._B.TitleText || e.type === a._B.BodyText)
            }
            let l = e => !!((null == e ? void 0 : e.name) && e.size <= n.YE && n.$E.exec(e.name))
        },
        24870: (e, t, r) => {
            r.d(t, {
                Em: () => _,
                O7: () => s,
                Uk: () => o,
                _K: () => d,
                dL: () => u,
                eQ: () => l,
                jp: () => p,
                u6: () => c
            });
            var a = r(30899),
                n = r(54026),
                i = r(80341);
            let o = 500,
                s = "#161616",
                l = "#ffffff",
                d = s,
                c = {
                    fileName: "WeTransfer-Default.jpg",
                    fileSize: 2740665,
                    assetId: void 0,
                    previews: {
                        thumbnail: {
                            url: a.A.lookup("showcase/WeTransfer-Default.jpeg"),
                            ...n.DR
                        },
                        editorPreview: {
                            url: a.A.lookup("showcase/WeTransfer-Default.jpeg"),
                            ...n.ER
                        },
                        large: {
                            url: a.A.lookup("showcase/WeTransfer-Default.jpeg"),
                            ...n.WM
                        }
                    }
                },
                u = {
                    background: {
                        type: i._B.Background,
                        backgroundColor: void 0,
                        asset: c
                    },
                    titleText: {
                        type: i._B.TitleText,
                        text: "",
                        visibility: !0,
                        textColor: s
                    },
                    bodyText: {
                        type: i._B.BodyText,
                        text: "",
                        visibility: !0,
                        textColor: s
                    }
                },
                _ = "wt_showcase_splash_been_viewed",
                p = 6
        },
        26106: (e, t, r) => {
            r.d(t, {
                E: () => i,
                u: () => n
            });
            var a = r(96361);
            let n = {},
                i = (0, a.Z0)({
                    name: "paywalls",
                    initialState: n,
                    reducers: {
                        setPaywallTrigger(e, t) {
                            e.currentTrigger = t.payload, e.currentTriggerUrl = window.location.href, e.currentTriggerUrlPath = window.location.pathname
                        },
                        paywallShown(e, t) {
                            e.currentPaywall = t.payload
                        },
                        paywallLimitsHit(e, t) {
                            e.limitsHit = t.payload
                        },
                        paywallDismissed(e, t) {
                            e.currentPaywall === t.payload && (e.currentPaywall = void 0, e.currentTrigger = void 0, e.currentTriggerUrl = void 0, e.currentTriggerUrlPath = void 0, e.currentWebpage = void 0)
                        },
                        medicalConsentConfirmed(e) {
                            e.shouldStartTransferAfterMedicalConsent = !0, e.skipMedicalConsentCheckForNextRun = !0
                        },
                        clearMedicalConsentStartTrigger(e) {
                            e.shouldStartTransferAfterMedicalConsent = !1
                        },
                        clearSkipMedicalConsentCheck(e) {
                            e.skipMedicalConsentCheckForNextRun = !1
                        },
                        setTransferDetails(e, t) {
                            e.transferDetails = t.payload ? {
                                stormUploadToken: t.payload.storm_upload_token,
                                signature: t.payload.signature
                            } : void 0
                        },
                        resetPaywallState(e) {
                            e.currentPaywall = void 0, e.currentTrigger = void 0, e.currentTriggerUrl = void 0, e.currentTriggerUrlPath = void 0, e.currentWebpage = void 0
                        },
                        setCurrentWebpage(e, t) {
                            e.currentWebpage = t.payload
                        },
                        resetUnlockHigherLimitsPaywallTransfer(e) {
                            e.higherLimitsPaywallTransferUnlocked = !1
                        },
                        setUnlockHigherLimitsPaywallTransfer(e) {
                            e.higherLimitsPaywallTransferUnlocked = !0
                        }
                    }
                })
        },
        26573: (e, t, r) => {
            r.d(t, {
                AP: () => l,
                FB: () => u,
                Hw: () => o,
                Om: () => p,
                T: () => f,
                Vt: () => d,
                d6: () => _,
                ex: () => E,
                vC: () => i,
                x2: () => c,
                zj: () => s
            });
            var a = r(4559),
                n = r(11148);
            let i = e => e.session,
                o = (0, a.Mz)(i, e => e.language),
                s = (0, a.Mz)(i, e => e.region),
                l = (0, a.Mz)(i, e => e.region.country),
                d = (0, a.Mz)(i, e => e.domainUserId),
                c = (0, a.Mz)(o, e => e === n.$e.ENGLISH),
                u = (0, a.Mz)(i, e => e.tandc),
                _ = (0, a.Mz)(i, e => e.showDataProcessingPrompt),
                p = (0, a.Mz)(i, e => e.assetUpload),
                E = (0, a.Mz)(p, e => e.maxEmailBackgroundSize),
                f = (0, a.Mz)(i, e => e.redirect)
        },
        27023: (e, t, r) => {
            r.d(t, {
                nO: () => n,
                Re: () => a,
                Ai: () => u,
                ue: () => i,
                nu: () => l,
                Zt: () => c,
                cA: () => E,
                u4: () => f,
                ee: () => s,
                QA: () => d
            });
            var a = function(e) {
                    return e.Open = "open", e.Processing = "processing", e.Paid = "paid", e.Failed = "failed", e.Expired = "expired", e.Cancelled = "cancelled", e
                }({}),
                n = function(e) {
                    return e.ExpiredToken = "EXPIRED_TOKEN", e.UnrecognizedDevice = "unrecognizedDevice", e.Unknown = "unknown", e
                }({});
            let i = {
                order: null,
                errorType: null
            };
            var o = function(e) {
                return e.setCurrentOrder = "CURRENT_ORDER/SET_ORDER", e.resetCurrentOrder = "CURRENT_ORDER/RESET_ORDER", e.setCurrentOrderError = "CURRENT_ORDER/SET_ORDER_ERROR", e.resetCurrentOrderError = "CURRENT_ORDER/RESET_ORDER_ERROR", e
            }({});
            let s = e => ({
                    type: "CURRENT_ORDER/SET_ORDER",
                    payload: e
                }),
                l = () => ({
                    type: "CURRENT_ORDER/RESET_ORDER",
                    payload: null
                }),
                d = e => ({
                    type: "CURRENT_ORDER/SET_ORDER_ERROR",
                    payload: e
                }),
                c = () => ({
                    type: "CURRENT_ORDER/RESET_ORDER_ERROR"
                }),
                u = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case o.setCurrentOrder:
                            return {
                                order: t.payload, errorType: null
                            };
                        case o.setCurrentOrderError:
                            return {
                                order: null, errorType: t.payload
                            };
                        case o.resetCurrentOrderError:
                            return {
                                order: e.order, errorType: null
                            };
                        case o.resetCurrentOrder:
                            return {
                                order: null, errorType: e.errorType
                            };
                        default:
                            return e
                    }
                };
            var _ = r(4559);
            let p = e => e.currentOrder,
                E = (0, _.Mz)(p, e => e.order),
                f = (0, _.Mz)(p, e => e.errorType)
        },
        27214: (e, t, r) => {
            r.d(t, {
                J: () => i,
                e: () => n
            });
            let a = !1,
                n = () => {
                    a = !0
                },
                i = () => a
        },
        27498: (e, t, r) => {
            r.d(t, {
                A: () => l,
                o: () => s
            });
            var a = r(65509),
                n = r(56264),
                i = r(52737),
                o = r(68018);
            let s = i.A.types(["ERROR_SET", "ERROR_RESET", "ERRORS_FORM_RESET", "VALIDATE_FORM"]),
                l = i.A.generate({
                    setError: [s.ERROR_SET, "form", "errors"],
                    resetError: [s.ERROR_RESET, "form", "key"],
                    resetFormErrors: [s.ERRORS_FORM_RESET, "form"],
                    validateForm() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        if (!t) return;
                        let r = "validation",
                            i = {
                                ...e
                            };
                        return async (e, s) => {
                            let {
                                account: l,
                                user: d
                            } = s(), c = null, u = {};
                            switch (t) {
                                case "profile":
                                case "brandedPage":
                                    c = [a.A.Account.validate], void 0 !== i.subdomain_name && l.subdomain_name !== i.subdomain_name && c.push(a.A.Account.validateSubdomain);
                                    break;
                                case "createAccountSubdomain":
                                    c = a.A.Account.validateSubdomain;
                                    break;
                                case "user":
                                    c = async () => {
                                        if (i.email && i.email !== (null == d ? void 0 : d.email)) {
                                            var t;
                                            if (null == (t = (await e(n.jt.endpoints.userExists.initiate({
                                                    email: i.email
                                                }))).data) ? void 0 : t.exists) throw {
                                                body: {
                                                    fields: {
                                                        email: ["taken"]
                                                    }
                                                }
                                            }
                                        }
                                    };
                                    break;
                                case "upgrade":
                                    c = a.A.BillingDetails.validateUpgrade;
                                    break;
                                default:
                                    return
                            }
                            e((0, o.m$)(r));
                            try {
                                i.vat_number && i.vat_number.length <= 2 && (i.vat_number = ""), Array.isArray(c) ? await Promise.all(c.map(e => e.call(this, i, {
                                    pathExtValues: {
                                        formName: t,
                                        ...u
                                    }
                                }))) : await c.call(this, i, {
                                    pathExtValues: {
                                        formName: t,
                                        ...u
                                    }
                                }), e(this.resetFormErrors(t))
                            } catch (n) {
                                let r = {},
                                    a = {
                                        signup: e => i[e] || "country_code" === e,
                                        account: e => void 0 !== i[e] && "current_password" !== e,
                                        billingDetails: e => void 0 !== i[e] && "current_password" !== e,
                                        upgrade: e => void 0 !== i[e]
                                    };
                                if (a[t])
                                    for (let e in n.body.fields) a[t](e) && (r[e] = n.body.fields[e]);
                                else r = n.body.fields;
                                return e(this.setError(t, r)), r
                            }
                            e((0, o.lX)(r))
                        }
                    },
                    resetValidationError(e, t) {
                        return (r, a) => {
                            let {
                                pending: n,
                                errors: i
                            } = a();
                            !n.validation && i[e] && i[e][t] && (r(this.resetError(e, t)), Object.keys(i[e]).length || r(this.resetFormErrors(e)))
                        }
                    }
                })
        },
        28326: (e, t, r) => {
            r.d(t, {
                Ro: () => o,
                ZY: () => s,
                ch: () => a,
                m_: () => n,
                xg: () => l
            });
            let a = "t_rid",
                n = ["fbclid", "gclid", "keychain_id", "keychain_userdefaults_id", "pua_experiment", "registration_id", "t_agid", "t_agname", "t_bpid", "t_cid", "t_cname", "t_crid", "t_crname", "t_device", "t_exp", "t_gcid", "t_kid", "t_lsid", "t_match_type", "t_network", "t_s", "t_ts", "t_validation", "ttclid", "v", a],
                i = ["keychain_id", "keychain_userdefaults_id", "registration_id", "t_rid"],
                o = e => {
                    try {
                        let t = e.replace(/-/g, "+").replace(/_/g, "/"),
                            r = e.length % 4 == 0 ? "" : "=".repeat(4 - e.length % 4);
                        return atob(t + r).split("").map(e => String.fromCharCode(e.charCodeAt(0))).join("")
                    } catch (e) {
                        return
                    }
                },
                s = e => {
                    let t = n.filter(t => !!e[t]),
                        r = {};
                    return t.forEach(t => {
                        if (i.includes(t)) {
                            let a = o(e[t]);
                            void 0 !== a && (r[t] = a)
                        } else r[t] = e[t]
                    }), {
                        attributionParameters: r,
                        parametersFound: t
                    }
                },
                l = (e, t, r) => {
                    let a = new URL(e);
                    if (t && a.searchParams.append("t_wt_web_lsid", t), r) {
                        let e = btoa(r.split("").map(e => String.fromCharCode(e.charCodeAt(0))).join("")).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
                        a.searchParams.append("t_wt_web_rid", e)
                    }
                    return a.toString()
                }
        },
        28330: (e, t, r) => {
            r.d(t, {
                BD: () => a.BD,
                YF: () => a.YF,
                dH: () => a.dH,
                se: () => a.se,
                yR: () => a.yR
            });
            var a = r(9209)
        },
        28338: (e, t, r) => {
            r.d(t, {
                B: () => a
            });
            var a = function(e) {
                return e.TRACKING = "tracking", e.ANONYMOUS = "anonymous", e.RESTRICTED = "restricted", e
            }({})
        },
        28581: (e, t, r) => {
            var a;
            r.d(t, {
                Ay: () => o
            });
            let n = {
                    stage: "TRANSFER_INIT",
                    percentage: 0,
                    wasOffline: !(null == (a = navigator) ? void 0 : a.onLine),
                    networkVariabilityCounter: 0
                },
                i = () => {
                    n.networkVariabilityCounter++
                },
                o = {
                    initStats: () => {
                        var e;
                        n.stage = "TRANSFER_INIT", n.percentage = 0, n.wasOffline = !(null == (e = navigator) ? void 0 : e.onLine), n.networkVariabilityCounter = 0
                    },
                    currentUploadStats: n,
                    setStage: e => {
                        n.stage = e
                    },
                    setPercentage: e => {
                        n.percentage = e
                    },
                    setUserDisconnect: () => {
                        i(), n.wasOffline = !0
                    },
                    increaseNetworkCounter: i
                }
        },
        29966: (e, t, r) => {
            r.d(t, {
                cJ: () => n,
                rC: () => i
            });
            var a = r(42789);
            let n = (e, t) => t.startsWith("video") ? "".concat(e, "_upload_validation_error_videos") : "".concat(e, "_upload_validation_error"),
                i = function(e, t) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    switch (e) {
                        case a.iu.CONFLICT:
                        case a.iu.BAD_REQUEST:
                        case a.iu.NOT_FOUND:
                            return n(t, r);
                        default:
                            return "something_went_wrong"
                    }
                }
        },
        30423: (e, t, r) => {
            r.d(t, {
                Y: () => a
            });
            let {
                setLinks: a,
                clearLinks: n
            } = r(11138).r.actions
        },
        30631: (e, t, r) => {
            r.d(t, {
                Ay: () => a.A
            });
            var a = r(31543);
            r(4054), r(12219)
        },
        31543: (e, t, r) => {
            r.d(t, {
                A: () => i
            });
            var a = r(4054),
                n = r(12219);
            let i = {
                get currentBrowser() {
                    return a.v.browser
                },
                get currentPlatform() {
                    return a.v.platform
                },
                get currentVersion() {
                    return a.v.version(this.currentBrowser)
                },
                get identity() {
                    return {
                        platform: this.currentPlatform.identity,
                        browser: this.currentBrowser.identity,
                        version: this.currentVersion.join ? this.currentVersion.join(".") : this.currentVersion
                    }
                },
                get supportsTouchEvents() {
                    return (this.isMobile || this.isTablet) && ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch)
                },
                get isMobile() {
                    return !!/Android|CriOS|FxiOS|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                },
                get isIphone() {
                    return /iPhone/.test(navigator.platform)
                },
                get isAndroid() {
                    return /Android/.test(navigator.userAgent)
                },
                get isTablet() {
                    return /iPad/i.test(navigator.userAgent)
                },
                oneOf() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return "string" == typeof e && (e = [e]), e.filter(e => this.matches(e)).length > 0
                },
                platform() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    return this.currentPlatform.identity.toLowerCase().includes("".concat(e).toLowerCase())
                },
                isOutdated(e) {
                    return !this.oneOf(e)
                },
                matches(e) {
                    let t = e.split(/\s+/),
                        r = t[0];
                    if (!this.currentBrowser.identity.toLowerCase().includes("".concat(r).toLowerCase())) return !1;
                    if (t.length <= 1) return !0;
                    let a = t[1],
                        i = t[2];
                    return (0, n.Gm)(this.currentVersion, a, i)
                }
            }
        },
        31838: (e, t, r) => {
            r.d(t, {
                f: () => i
            });
            var a = r(54026);
            let n = (e, t, r) => e.find(e => e.width === t && e.height === r);

            function i(e) {
                let t = n(e, a.DR.width, a.DR.height);
                return {
                    thumbnail: t,
                    editorPreview: n(e, a.ER.width, a.ER.height),
                    large: n(e, a.WM.width, a.WM.height)
                }
            }
        },
        32091: (e, t, r) => {
            r.d(t, {
                H: () => a
            });
            let a = (0, r(96361).VP)("SET_TRANSFER_PRICE")
        },
        32401: (e, t, r) => {
            r.d(t, {
                T: () => n,
                v: () => a
            });
            let a = "1",
                n = "4"
        },
        32693: (e, t, r) => {
            r.d(t, {
                m: () => a
            });
            let a = "session_start"
        },
        32799: (e, t, r) => {
            r.d(t, {
                Hj: () => a,
                RD: () => n
            });
            var a = function(e) {
                return e.FACEBOOK = "facebook", e.X = "x", e.INSTAGRAM = "instagram", e.LINKEDIN = "linkedin", e.TIKTOK = "tiktok", e
            }({});
            let n = {
                facebook: "Facebook",
                x: "X",
                instagram: "Instagram",
                linkedin: "LinkedIn",
                tiktok: "TikTok"
            }
        },
        33061: (e, t, r) => {
            r.d(t, {
                Ay: () => l,
                kc: () => o,
                ue: () => n
            });
            var a = r(96361);
            let n = {
                    state: void 0
                },
                i = (0, a.Z0)({
                    name: "malwareProtection",
                    initialState: n,
                    reducers: {
                        setMalwareProtectionState: (e, t) => {
                            e.state = t.payload
                        },
                        resetInitialMalwareProtectionState: e => {
                            e.state = void 0
                        }
                    }
                }),
                {
                    setMalwareProtectionState: o,
                    resetInitialMalwareProtectionState: s
                } = i.actions,
                l = i.reducer
        },
        33187: (e, t, r) => {
            r.d(t, {
                Fb: () => u,
                in: () => c,
                ug: () => _
            });
            var a = r(582),
                n = r.n(a),
                i = r(28326),
                o = r(25402),
                s = r(89187),
                l = r(30631),
                d = r(41993);
            let c = e => {
                if (!e || "string" != typeof e) return;
                let t = e.split("@");
                if (2 === t.length && t[1]) return t[1].toLowerCase()
            };

            function u() {
                let e = Object.fromEntries(new URLSearchParams(window.location.search)),
                    t = (0, i.ZY)(e);
                return {
                    pageUrl: document.URL.split("?")[0],
                    pageQueryParams: JSON.stringify(e),
                    pageInfo: t.attributionParameters
                }
            }

            function _(e) {
                var t, r, a, c, u, _;
                let p, E = document.URL.split("?")[0],
                    f = new URLSearchParams(window.location.search),
                    A = Object.fromEntries(f),
                    T = (0, i.ZY)(A),
                    m = T.parametersFound.length > 0,
                    S = l.Ay.isMobile ? "mobile" : l.Ay.isTablet ? "tablet" : "desktop";
                try {
                    p = n()(window.navigator.userAgent)
                } catch (e) {
                    d.A.error("Error parsing user agent from window", e)
                }
                if (m)
                    for (let e in i.m_.forEach(e => window.localStorage.removeItem(e)), A) window.localStorage.setItem(e, A[e]);
                return {
                    language: null == e ? void 0 : e.language,
                    pageUrl: document.URL.split("?")[0],
                    pageQueryParams: JSON.stringify(Object.fromEntries(f)),
                    pageInfo: T.attributionParameters,
                    landingPageUrl: E,
                    landingPageQueryParams: JSON.stringify(A),
                    locale: navigator.language,
                    device: {
                        language: navigator.language.split("-")[0],
                        type: S,
                        ...(null == p ? void 0 : p.os.name) ? {
                            os: null == p ? void 0 : p.os.name
                        } : {},
                        ...(null == p ? void 0 : p.os.version) ? {
                            os_version: null == p ? void 0 : p.os.version
                        } : {},
                        ...(null == p ? void 0 : p.browser.name) ? {
                            browser: null == p ? void 0 : p.browser.name
                        } : {}
                    },
                    planTier: null == e ? void 0 : e.planTier,
                    entitlementsPackageCode: null == e || null == (_ = e.memberships) || null == (u = _[0]) || null == (c = u.account) || null == (a = c.subscription) ? void 0 : a.entitlements_package_code,
                    isCollaborateUser: (null == e ? void 0 : e.planTier) === s.js.COLLABORATE,
                    isDistributeUser: (null == e ? void 0 : e.planTier) === s.js.DISTRIBUTE,
                    isFreeUser: (null == e ? void 0 : e.planTier) === s.js.FREE,
                    isPlusUser: (null == e ? void 0 : e.planTier) === s.js.PLUS,
                    isPremiumUser: (null == e ? void 0 : e.planTier) === s.js.PREMIUM_2022,
                    isProUser: (null == e ? void 0 : e.planTier) === s.js.PRO_2022,
                    isTransferUser: (null == e ? void 0 : e.planTier) === s.js.TRANSFER,
                    isLoggedIn: !!(null == e ? void 0 : e.loggedIn),
                    version: null != (t = (0, o.A)().NEXT_PUBLIC_REVISION) ? t : "unknown",
                    landingPageInfo: m ? T.attributionParameters : {},
                    ...m ? {
                        persistent: T.attributionParameters
                    } : {},
                    randomPicoURLFlag: null != (r = localStorage.getItem("randomURLFlag")) ? r : ""
                }
            }
        },
        33448: (e, t, r) => {
            r.d(t, {
                H: () => n
            });
            var a = r(63492);
            let n = () => window && window.location && (window.location.search.includes(a.FX) || window.location.pathname.includes("/account/callback"))
        },
        33762: (e, t, r) => {
            r.d(t, {
                I: () => n,
                a: () => i
            });
            var a = r(96361);
            let n = (0, a.VP)("SOCIAL_LINK/SET_SOCIAL_LINK"),
                i = (0, a.VP)("SOCIAL_LINK/SET_SOCIAL_LINK_VALID")
        },
        33901: (e, t, r) => {
            r.d(t, {
                ET: () => l,
                ox: () => d
            });
            var a = r(40334),
                n = r(79716),
                i = r(55676);
            let o = "wt_onetrust_cmp",
                s = e => a.o.consentFlags.includes(e),
                l = () => !s("fides-opt-in"),
                d = () => {
                    let e = s("use-onetrust"),
                        t = "true" === i.A.get(o);
                    return e && !t && i.A.set(o, "true", {
                        days: 365,
                        domain: (0, n.R)()
                    }), e || t
                }
        },
        34463: (e, t, r) => {
            r.d(t, {
                a: () => n,
                i: () => a
            });
            let a = {
                    file: "file",
                    emptyDirectory: "empty_directory"
                },
                n = {
                    file: "file",
                    directory: "directory"
                }
        },
        35120: (e, t, r) => {
            r.d(t, {
                R: () => a
            });
            let a = [0x2436bb9f, 0x2436ba42, 0x24a83405, 0x24b6633d, 0x24b67d9b, 0x261ba59d]
        },
        37672: (e, t, r) => {
            r.d(t, {
                GZ: () => n.G,
                rS: () => a.r,
                ue: () => a.u
            }), r(30423);
            var a = r(11138),
                n = r(97402)
        },
        38838: (e, t, r) => {
            r.d(t, {
                F: () => a
            });
            var a = function(e) {
                return e.INFECTED = "infected", e.CLEAN = "clean", e.NOT_SCANNED = "not_scanned", e.FAILED = "failed", e
            }({})
        },
        38967: (e, t, r) => {
            r.d(t, {
                u: () => a
            });
            let a = {
                component: null,
                context: null,
                formState: !1,
                isMobileTransfer: !1,
                isPanelFullOpen: !1,
                isPanelHalfOpen: !1,
                isPanelOpen: !1,
                name: "",
                nextRoute: null,
                params: {},
                path: "/",
                query: {},
                raw: !1,
                requiresTOC: !1,
                requiresTransferPassword: !1,
                segment: "",
                type: r(21319).Y.TransferWindow,
                unSavedForm: !1,
                updateTransfer: !1,
                hideWallpaper: !1,
                hideDropzone: !1,
                showNavOnMobile: !1,
                hideNav: !1
            }
        },
        38969: (e, t, r) => {
            r.d(t, {
                EL: () => O,
                MN: () => R,
                SU: () => I,
                YH: () => N,
                i3: () => g,
                sF: () => S,
                wr: () => v
            });
            var a = r(53482);
            let n = "transfer-information",
                i = "transfer-id",
                o = "percentage",
                s = "created-at",
                l = "resume-token",
                d = "total-size",
                c = "files-count",
                u = "tracking-id",
                _ = "user-id",
                p = "files-resume-info",
                E = "can-use-upload-cdn",
                f = [i, o, s, l, d, c, u, _, p, E],
                A = "wt-active-upload-transfer",
                T = {};

            function m() {
                if (!(0, a.B)()) return null;
                try {
                    let e = window.localStorage.getItem(A);
                    if (!e) return null;
                    let t = JSON.parse(e);
                    if (!t || "string" != typeof t.transferId) return null;
                    return t
                } catch (e) {
                    return null
                }
            }

            function S(e) {
                if ((0, a.B)() && e) try {
                    let t = {
                        transferId: e,
                        updatedAt: Date.now()
                    };
                    window.localStorage.setItem(A, JSON.stringify(t))
                } catch (e) {}
            }

            function g(e) {
                if ((0, a.B)()) try {
                    let t = m();
                    if (e && t && t.transferId !== e) return;
                    window.localStorage.removeItem(A)
                } catch (e) {}
            }

            function R(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 9e5;
                if (!e) return !1;
                let r = m();
                return !!r && r.transferId === e && ("number" != typeof r.updatedAt || !t || t <= 0 || Date.now() - r.updatedAt <= t)
            }

            function h() {
                return new Promise((e, t) => {
                    if (!((0, a.B)() && window.indexedDB)) return t(Error("IndexedDB not available"));
                    let r = window.indexedDB.open("wt-uploader", 5);
                    r.onupgradeneeded = () => {
                        let e = r.result;
                        e.objectStoreNames.contains(n) || e.createObjectStore(n)
                    }, r.onsuccess = () => e(r.result), r.onerror = () => t(r.error)
                })
            }
            async function y() {
                let e = null;
                try {
                    return e = await h(), await new Promise((t, r) => {
                        let a = e.transaction(n, "readonly").objectStore(n),
                            A = f.map(e => new Promise((t, r) => {
                                let n = a.get(e);
                                n.onsuccess = () => t([e, n.result]), n.onerror = () => r(n.error)
                            }));
                        Promise.all(A).then(e => {
                            let r = Object.fromEntries(e),
                                a = r[i] || "",
                                n = r[l] || "",
                                f = r[o],
                                A = Number.isFinite(f) ? Math.max(0, Math.min(100, Math.floor(f))) : 0,
                                T = r[d],
                                m = Number.isFinite(T) ? Math.max(0, Math.floor(T)) : 0,
                                S = r[c],
                                g = Number.isFinite(S) ? Math.max(0, Math.floor(S)) : 0,
                                R = r[s],
                                h = R ? new Date(R) : new Date,
                                y = r[u],
                                w = r[p] || [],
                                I = r[_] || 0,
                                v = r[E] || !1;
                            t({
                                transferId: a,
                                percentage: A,
                                createdAt: h,
                                resumeToken: n,
                                totalSize: m,
                                filesCount: g,
                                trackingId: y,
                                userId: I,
                                filesResumeInfo: w,
                                canUseUploadCdn: v
                            })
                        }).catch(r)
                    })
                } catch (e) {
                    return console.error("file system loadState failed", e), null
                } finally {
                    e && e.close()
                }
            }
            async function w(e) {
                let t = null;
                try {
                    t = await h(), await new Promise((r, a) => {
                        let f = t.transaction(n, "readwrite"),
                            A = f.objectStore(n);
                        A.put(e.transferId, i), A.put(e.percentage, o), A.put(e.createdAt, s), A.put(e.resumeToken, l), A.put(e.totalSize, d), A.put(e.filesCount, c), A.put(e.trackingId, u), A.put(e.userId, _), A.put(e.filesResumeInfo, p), A.put(e.canUseUploadCdn, E), f.oncomplete = () => r(), f.onerror = () => a(f.error), f.onabort = () => a(f.error)
                    })
                } catch (e) {
                    console.error("file system saveState failed", e)
                } finally {
                    t && t.close()
                }
            }
            async function I() {
                var e, t, r, a, n, i, o, s, l;
                let d = await y();
                return {
                    id: null != (e = null == d ? void 0 : d.transferId) ? e : "",
                    percentage: null != (t = null == d ? void 0 : d.percentage) ? t : 0,
                    createdAt: null != (r = null == d ? void 0 : d.createdAt) ? r : new Date,
                    resumeToken: null != (a = null == d ? void 0 : d.resumeToken) ? a : "",
                    totalSize: null != (n = null == d ? void 0 : d.totalSize) ? n : 0,
                    filesCount: null != (i = null == d ? void 0 : d.filesCount) ? i : 0,
                    trackingId: null == d ? void 0 : d.trackingId,
                    userId: null != (o = null == d ? void 0 : d.userId) ? o : 0,
                    filesResumeInfo: null != (s = null == d ? void 0 : d.filesResumeInfo) ? s : [],
                    canUseUploadCdn: null != (l = null == d ? void 0 : d.canUseUploadCdn) && l
                }
            }
            async function v() {
                await w({
                    transferId: "",
                    percentage: 0,
                    createdAt: new Date,
                    resumeToken: "",
                    totalSize: 0,
                    filesCount: 0,
                    userId: 0,
                    filesResumeInfo: [],
                    canUseUploadCdn: !1
                })
            }
            async function N(e, t) {
                var r;
                let a = Math.max(0, Math.min(100, Math.floor(Number.isFinite(t) ? t : 0)));
                if (T[e] === a || (S(e), (null != (r = await y()) ? r : {
                        transferId: "",
                        percentage: 0,
                        createdAt: new Date,
                        resumeToken: "",
                        totalSize: 0,
                        filesCount: 0,
                        userId: 0,
                        filesResumeInfo: [],
                        canUseUploadCdn: !1
                    }).transferId !== e)) return;
                let i = null;
                try {
                    i = await h(), await new Promise((e, t) => {
                        let r = i.transaction(n, "readwrite");
                        r.objectStore(n).put(a, o), r.oncomplete = () => e(), r.onerror = () => t(r.error), r.onabort = () => t(r.error)
                    }), T[e] = a
                } catch (e) {
                    console.error("file system saveState failed", e)
                } finally {
                    i && i.close()
                }
            }
            async function O(e, t) {
                await w({
                    transferId: e.transferId,
                    percentage: 0,
                    createdAt: new Date,
                    resumeToken: e.resumeToken,
                    totalSize: e.totalSize,
                    filesCount: e.filesCount,
                    userId: e.userId,
                    filesResumeInfo: t,
                    canUseUploadCdn: e.canUseUploadCdn,
                    trackingId: e.trackingId
                })
            }
        },
        39075: (e, t, r) => {
            r.d(t, {
                K: () => n,
                U: () => i
            });
            var a = r(55851);
            let n = [a.i.ONE_DAY_IN_SECONDS, a.i.DAYS_3_IN_SECONDS, a.i.DAYS_7_IN_SECONDS, a.i.DAYS_30_IN_SECONDS, a.i.DAYS_60_IN_SECONDS, a.i.DAYS_365_IN_SECONDS],
                i = "REFETCH_ENTITLEMENTS"
        },
        39412: (e, t, r) => {
            r.d(t, {
                e: () => i
            });
            var a = r(79716),
                n = r(55676);
            let i = {
                get: (e, t) => n.A.get(e, t),
                set(e, t, r) {
                    let i = (null == r ? void 0 : r.domain) || (0, a.R)();
                    n.A.set(e, t, {
                        days: 365,
                        domain: i,
                        path: "/",
                        ...r
                    })
                },
                remove(e, t) {
                    let r = (null == t ? void 0 : t.domain) || (0, a.R)();
                    n.A.unset(e, {
                        path: "/",
                        domain: r,
                        ...t
                    })
                }
            }
        },
        39483: (e, t, r) => {
            r.d(t, {
                zj: () => a.z,
                NQ: () => l,
                ue: () => i,
                bo: () => d,
                oW: () => c.oW,
                fO: () => c.fO,
                pe: () => c.pe,
                ER: () => c.ER,
                s2: () => s,
                Tg: () => o
            });
            var a = r(62332),
                n = r(96361);
            let i = {
                    isDrawerOpen: !1,
                    currentPageId: null,
                    previousPageId: null
                },
                o = (0, n.Z0)({
                    name: "transferWindowDrawer",
                    initialState: i,
                    reducers: {
                        setTransferWindowPageId(e, t) {
                            let {
                                payload: r
                            } = t;
                            e.previousPageId = e.currentPageId, e.currentPageId = r
                        },
                        closeTransferWindowDrawer(e) {
                            e.isDrawerOpen = !1
                        },
                        openTransferWindowDrawer(e) {
                            e.isDrawerOpen = !0
                        }
                    }
                }),
                {
                    setTransferWindowPageId: s,
                    closeTransferWindowDrawer: l,
                    openTransferWindowDrawer: d
                } = o.actions;
            var c = r(61703)
        },
        39623: (e, t, r) => {
            r.d(t, {
                TH: () => l,
                V0: () => _,
                Ud: () => u,
                El: () => p
            });
            var a = r(96361);
            let n = (0, r(12062).A)({
                fetchWallpapers: {
                    path: "/api/v4/channels/{name}/wallpapers",
                    pathExt: !0
                },
                fetchPreviewsWallpapers: {
                    path: "/api/v4/channels/{name}/previews_wallpapers",
                    pathExt: !0
                },
                fetchChannel: {
                    path: "/api/v4/channels/{name}",
                    pathExt: !0
                }
            });
            var i = r(23901),
                o = r(78598),
                s = r(41993),
                l = function(e) {
                    return e.SET_WALLPAPERS = "SET_WALLPAPERS", e.SET_PREVIEWS_WALLPAPERS = "SET_PREVIEWS_WALLPAPERS", e.SET_WORKSPACE_ID = "SET_WORKSPACE_ID", e.SET_CHANNEL_TITLE = "SET_CHANNEL_TITLE", e
                }({});
            let d = (0, a.VP)("SET_WORKSPACE_ID"),
                c = (0, a.VP)("SET_CHANNEL_TITLE");

            function u(e) {
                let {
                    name: t
                } = e;
                return async e => {
                    try {
                        let {
                            body: r
                        } = await n.fetchWallpapers(null, {
                            pathExtValues: {
                                name: t
                            }
                        });
                        e({
                            type: "SET_WALLPAPERS",
                            wallpapers: (0, i.x)(r)
                        })
                    } catch (e) {
                        s.A.error(e), o.A.track(e)
                    }
                }
            }

            function _(e) {
                let {
                    name: t
                } = e;
                return async e => {
                    try {
                        let {
                            body: r
                        } = await n.fetchPreviewsWallpapers(null, {
                            pathExtValues: {
                                name: t
                            }
                        });
                        e({
                            type: "SET_PREVIEWS_WALLPAPERS",
                            wallpapers: (0, i.x)(r)
                        })
                    } catch (e) {
                        s.A.error(e), o.A.track(e)
                    }
                }
            }

            function p(e) {
                let {
                    name: t
                } = e;
                return async e => {
                    try {
                        let {
                            body: r
                        } = await n.fetchChannel(null, {
                            pathExtValues: {
                                name: t
                            }
                        });
                        e(c(r.title || "")), e(d(r.workspace_id))
                    } catch (e) {
                        s.A.error(e), o.A.track(e)
                    }
                }
            }
        },
        40334: (e, t, r) => {
            r.d(t, {
                o: () => l
            });
            var a = r(32770),
                n = r.n(a),
                i = r(30899),
                o = r(15321),
                s = r(23901);
            let l = {
                curatedWallpapers: (0, s.x)(n()(window, "__curated_wallpapers__", [])),
                env: {
                    development: !1
                },
                consentFlags: n()(window, "__consent_flags__") || [],
                recaptcha: (0, s.x)(n()(window, "__recaptcha__", {})),
                portalsUrl: n()(window, "portalsUrl", "https://portals.".concat(window.location.hostname, "/")),
                safetyUrl: n()(window, "safetyUrl", "https://safety.".concat(window.location.hostname, "/")),
                stripe: {
                    ...(0, s.x)(n()(window, "__stripe__", {})),
                    url: "https://js.stripe.com/v3/"
                },
                cookies: {
                    takeover: {
                        name: "wt_takeover"
                    },
                    plus: {
                        name: "wt_plus"
                    },
                    signout: {
                        name: "wt_signout"
                    },
                    featureBanner: {
                        name: "wt_banner"
                    },
                    transferType: {
                        name: "wt_ttype"
                    },
                    termsAndConditions: {
                        name: "wt_tandc"
                    },
                    privacy: {
                        name: "wt_privacy"
                    },
                    firstVisit: {
                        name: "wt_first_visit"
                    },
                    projectsOnboarded: {
                        name: "wt_projects_onboarded"
                    },
                    portalsOnboarded: {
                        name: "wt_portals_onboarded"
                    },
                    portalsCalloutSeenOnce: {
                        name: "wt_portals_callout_seen_once"
                    },
                    portalsCalloutSeen: {
                        name: "wt_portals_callout_seen"
                    },
                    currentTeam: {
                        name: "current-team"
                    },
                    seenDisplayNameTooltip: {
                        name: "seen-display-name-tooltip",
                        count: 0
                    },
                    teamsOnboardingCallout: {
                        name: "teams-onboarding-callout"
                    },
                    teamsOnboardingCalloutDate: {
                        name: "wt_teams_onboarding_callout_date"
                    },
                    dismissTeamsDrawerForever: {
                        name: "wt_teams_dismiss_drawer_forever"
                    },
                    showTeamsTooltip: {
                        name: "wt_show_teams_tooltip"
                    },
                    teamsDrawerSeenOnce: {
                        name: "wt_teams_drawer_seen_once"
                    },
                    customWallpaperPopoverClosed: {
                        name: "wt_custom_wallpaper_drawer_closed"
                    },
                    dismissedTeamInlineCuesSent: {
                        name: "wt_team_dismissed_inline_cues_sent"
                    },
                    dismissedTeamInlineCuesReceived: {
                        name: "wt_team_dismissed_inline_cues_received"
                    },
                    overrideLanguage: {
                        name: "wt_lang"
                    },
                    showPricingPageToFAExperiment: {
                        name: "wt_showPricingPageToFAExperiment"
                    },
                    discountModalSeen: {
                        name: "wt_discount_modal_seen"
                    },
                    requestsSeen: {
                        name: "wt_requests_been_seen"
                    },
                    dismissFreeTransferBanner: {
                        name: "wt_dismiss_free_transfer_banner"
                    }
                },
                localStorage: {
                    editableSubdomain: {
                        name: "showChangeSubdomainNotification"
                    },
                    currentOrderAccessToken: {
                        name: "currentOrderAccessToken"
                    }
                },
                featureBanner: {
                    featureTranslationKey: null,
                    featureHref: null,
                    featureName: null,
                    shouldShowFeatureBanner: !1
                },
                subdomainName: {
                    maxLength: 63
                },
                navigation: {
                    tooltip: {
                        showDelay: 2e3,
                        hideDelay: {
                            onboarding_success: 8e3,
                            already_signed_in: 4e3
                        }
                    }
                },
                textfield: {
                    debounceDelay: 300
                },
                actions: {
                    extended_pending: 1e4
                },
                notification: {
                    animation_duration: 200,
                    duration: 5e3
                },
                transfer: {
                    showWarningThreshold: 1728e5,
                    precisionThreshold: 0x40000000,
                    verificationCodeLength: 6
                },
                twoFactorAuthentication: {
                    codeLength: 6,
                    codeMaxLength: 13
                },
                route: {
                    "/": {
                        navStyle: {
                            backgroundColor: o.J5
                        }
                    }
                },
                panel: {
                    full_panel_breakpoint: 1049,
                    openDelay: 3e3
                },
                avatars: [i.A.lookup("avatars/01.png"), i.A.lookup("avatars/02.png"), i.A.lookup("avatars/03.png"), i.A.lookup("avatars/04.png"), i.A.lookup("avatars/05.png"), i.A.lookup("avatars/06.png"), i.A.lookup("avatars/07.png"), i.A.lookup("avatars/08.png"), i.A.lookup("avatars/09.png"), i.A.lookup("avatars/10.png"), i.A.lookup("avatars/11.png"), i.A.lookup("avatars/12.png")],
                mobileAppBanner: {
                    active: !0,
                    downloadUrl: "https://wetransfer.com/products",
                    downloadUrliOS: "https://itunes.apple.com/app/apple-store/id765359021?pt=658364&ct=wetransfer-web-popup&mt=8",
                    downloadUrlAndroid: "https://play.google.com/store/apps/details?id=com.wetransfer.app.live&referrer=utm_source%3Dwetransfer%26utm_medium%3Dweb-popup",
                    dynamicLinkBaseUrl: location.host.includes("wetransfer.com") ? "https://collectapp.page.link/" : "https://debugcollectapp.page.link/",
                    dynamicLinkParams: {
                        st: "Collect by WeTransfer",
                        sd: "The best way to save, organize and share ideas from all your apps",
                        efr: "1",
                        ibi: "com.wetransfer.app",
                        isi: 0x2d9e73ad,
                        apn: location.host.includes("wetransfer.com") ? "com.wetransfer.app.live" : "com.wetransfer.app.live.debug",
                        afl: "https://play.google.com/store/apps/details?id=com.wetransfer.app.live",
                        pt: "658364",
                        ct: "wetransfer-web-popup",
                        mt: "8",
                        utm_source: "wetransfer",
                        utm_medium: "web-popup"
                    }
                },
                supportedBrowsers: ["Chrome >= 42", "CriOS >= 42", "Firefox >= 38", "FxiOS >= 9", "Safari >= 6", "Explorer >= 11", "Edge >= 12"],
                assetUpload: {
                    wallpaperResolution: "1920 x 1200",
                    wallpaperVideoResolution: "1920 x 1080",
                    emailBackgroundResolution: "1600 x 800"
                },
                analytics: {
                    sdks: {
                        facebook: !0
                    }
                },
                termsAndConditions: {
                    consentId: "1",
                    consentVersion: "20240117"
                },
                privacy: {
                    consentId: "3",
                    consentVersion: "20190527"
                },
                payment: {
                    chargeableStatus: ["chargeable", "consumed"]
                },
                zendesk: {
                    baseUrl: "https://wetransfer.zendesk.com/hc/en-us/",
                    article_transfer_duration: "articles/202603916-How-long-are-uploads-available-to-download-"
                },
                salesforce: {
                    postLeadURL: "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8",
                    OID: "00D0Y000000YKnV",
                    budgetFieldID: "00N0Y00000A2Yi6"
                },
                layout: {
                    lists: {
                        initialItemsNumber: {
                            downloader: 5,
                            detail: 10,
                            progress: 10
                        }
                    }
                },
                profitWell: {
                    attributes: {
                        id: "profitwell-js",
                        "data-pw-auth": n()(window, "profitWellPublicAPIToken", "")
                    },
                    snippet: e => "(function(i,s,o,g,r,a,m){i[o]=i[o]||function(){(i[o].q=i[o].q||[]).push(arguments)};\n      a=s.createElement(g);m=s.getElementsByTagName(g)[0];a.async=1;a.src=r+'?auth='+\n      s.getElementById(o+'-js').getAttribute('data-pw-auth');m.parentNode.insertBefore(a,m);\n      })(window,document,'profitwell','script','https://public.profitwell.com/js/profitwell.js');\n      profitwell('start', ".concat(e ? JSON.stringify({
                        user_email: e
                    }) : "{}", ");")
                },
                customWallpaperServiceUrl: n()(window, "customWallpaperServiceUrl", "")
            }
        },
        41993: (e, t, r) => {
            r.d(t, {
                A: () => a
            });
            let a = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return ["error", "info", "log", "warn"].reduce((t, r) => (t[r] = function() {
                    for (var t = arguments.length, a = Array(t), n = 0; n < t; n++) a[n] = arguments[n];
                    if (e && console && "function" == typeof console[r]) return console[r](...a)
                }, t), {})
            }(!1)
        },
        42403: (e, t, r) => {
            r.d(t, {
                cP: () => T,
                r6: () => Y,
                DZ: () => m,
                _R: () => S,
                Wr: () => g,
                WI: () => R,
                LG: () => q,
                BW: () => h,
                l1: () => w,
                VK: () => ei,
                Vx: () => I,
                VM: () => v,
                bV: () => es,
                Qv: () => el,
                lo: () => N,
                pz: () => O,
                lR: () => P,
                fG: () => D,
                VX: () => U,
                F6: () => k,
                b: () => b,
                gG: () => $,
                _L: () => F,
                xm: () => M,
                D8: () => x,
                Bc: () => Q,
                yX: () => ee,
                zj: () => B,
                eR: () => W,
                Cf: () => eo,
                L4: () => z,
                al: () => X,
                Bm: () => G,
                sA: () => j,
                Tr: () => V,
                o$: () => H
            });
            var a = r(87963);
            let n = {
                backgroundChanged(e) {
                    let {
                        transferId: t,
                        wallpaperType: r
                    } = e;
                    return {
                        kind: "transfer_customization_background_changed",
                        info: {
                            transferId: t,
                            wallpaperType: r
                        }
                    }
                }
            };
            var i = r(89395),
                o = r(61670),
                s = r(9198),
                l = r(80341),
                d = r(24870),
                c = r(83263),
                u = r(24463),
                _ = r(51153),
                p = r(88359),
                E = r(78598),
                f = r(15168),
                A = r(76780);
            let {
                addUploadedBackgroundAsset: T,
                clearCurrentTransferId: m,
                clearDraftCoverLayout: S,
                clearHoveredBlock: g,
                clearSelectedBlock: R,
                clearStagedCoverLayout: h,
                clearUploadedBackgroundAssets: y,
                closeShowcaseModal: w,
                removeAsset: I,
                removeCoverLayoutByTransferId: v,
                setAsset: N,
                setBackgroundType: O,
                setCoverLayoutByTransferId: P,
                setCurrentTransferId: L,
                setDraftCoverLayout: D,
                setEntryPoint: C,
                setHoveredBlock: U,
                setIsLoading: k,
                setMultiImageLayout: b,
                setSelectedBackgroundAsset: F,
                setSelectedBackgroundColor: M,
                setSelectedBlock: x,
                setShowcaseModalPageId: B,
                setStagedCoverLayout: W,
                toggleBackgroundAssetSelection: z,
                updateBackgroundBlock: G,
                updateTextInBlock: V,
                updateVisibilityInBlock: H,
                updateTextColorInBlock: j,
                addUploadedPreviewsBackgroundAsset: Y,
                clearUploadedPreviewsBackgroundAssets: K,
                clearSelectedPreviewsBackgroundAssets: q,
                setSelectedPreviewsBackgroundAsset: Q,
                togglePreviewsBackgroundAssetSelection: X,
                setSavedPreviewsBackgroundAsset: J,
                clearSavedPreviewsBackgroundAsset: Z,
                setPreviewsBackgroundType: $,
                setSelectedPreviewsBackgroundColor: ee,
                setSavedPreviewsBackgroundType: et,
                setSavedPreviewsBackgroundColor: er,
                setStagedPreviewsBackground: ea,
                clearStagedPreviewsBackground: en
            } = A.O.actions, ei = (e, t) => r => {
                r(C(e)), t && r(L(t)), r(ec()), r(A.O.actions.openShowcaseModal())
            }, eo = () => async (e, t) => {
                var r;
                e(k(!0));
                let a = (0, f.HD)(t());
                if (!a) return void e(k(!1));
                let n = (0, f.pS)(t()),
                    o = (0, f.MJ)(t()),
                    s = (0, f.jV)(t()),
                    d = (0, f.TB)(t()),
                    c = null != (r = (0, f.lc)(t())) ? r : null,
                    _ = (0, f.mA)(t()),
                    A = (0, f.YF)(t()),
                    T = a;
                if (o && n === l.hK.image && s.length > 1) try {
                    let t = await (0, p.E)({
                            assets: s,
                            layout: d
                        }),
                        r = new File([t], "composite-background.jpg", {
                            type: "image/jpeg"
                        }),
                        {
                            assetId: n,
                            previews: o,
                            fileName: c,
                            fileSize: u,
                            error: _
                        } = await (0, i.tc)({
                            file: r,
                            fileName: r.name,
                            fileSize: r.size
                        });
                    if (_) throw Error("Failed to upload composite image");
                    e(N({
                        assetId: n,
                        previews: o,
                        fileName: c,
                        fileSize: u
                    })), T = {
                        ...a,
                        background: {
                            ...a.background,
                            assetId: n,
                            type: l._B.Background
                        }
                    }
                } catch (t) {
                    E.A.track(t);
                    let e = s[0];
                    T = {
                        ...a,
                        background: {
                            ...a.background,
                            assetId: null == e ? void 0 : e.assetId,
                            type: l._B.Background
                        }
                    }
                }
                let {
                    layout: m,
                    deletedAssetIds: S
                } = (0, u.Hh)(n, T);
                await Promise.all(S.map(async t => {
                    try {
                        await (0, i.AO)({
                            assetId: t
                        }), e(I(t))
                    } catch (e) {
                        E.A.track(e)
                    }
                })), e(W(m)), e(ea({
                    asset: c,
                    type: _,
                    color: A
                })), e(k(!1))
            }, es = e => async (t, r) => {
                t(k(!0));
                let a = (0, f.K0)(r()),
                    n = (0, f.ef)(r()),
                    i = (0, f.m$)(r()),
                    d = (0, f.lw)(r()),
                    c = {};
                i === l.hK.solidColor && d ? c.previewBackgroundColor = d : (null == n ? void 0 : n.assetId) && (c.previewBackgroundAsset = n);
                let u = a && (0, s.f0)(a, c);
                if (!u || 0 === Object.keys(u).length) return void t(k(!1));
                let _ = await (0, o.kj)(e, {
                    ...u
                });
                if ((0, s.CR)(_)) {
                    var p;
                    throw t(k(!1)), Error("Error creating customization: ".concat(null == (p = _.errors) ? void 0 : p.join(", ")))
                }
                t(h()), t(P({
                    coverLayout: a,
                    transferId: e
                })), t(k(!1))
            }, el = (e, t, r) => async i => {
                var l, d;
                i(k(!0));
                let c = (0, s.f0)(t, {
                    previewBackgroundAsset: null == r ? void 0 : r.previewBackgroundAsset,
                    previewBackgroundColor: null == r ? void 0 : r.previewBackgroundColor
                });
                if (!c || 0 === Object.keys(c).length) return void i(k(!1));
                let u = await (0, o.kj)(e, {
                    ...c
                });
                if ((0, s.CR)(u)) throw i(k(!1)), Error("Error creating customization: ".concat(null == (d = u.errors) ? void 0 : d.join(", ")));
                (null == (l = u.views) ? void 0 : l[0]) && i(P({
                    coverLayout: (0, s.i1)(u),
                    transferId: e
                })), i(P({
                    coverLayout: t,
                    transferId: e
                })), i(k(!1)), (0, a.Od)().trackUserAction(n.backgroundChanged({
                    transferId: e,
                    wallpaperType: "cover"
                }))
            }, ed = e => async (t, r) => {
                var a, n;
                t(D(e)), t(O((e => {
                    var t;
                    return (null == (t = e.background) ? void 0 : t.backgroundColor) ? l.hK.solidColor : l.hK.image
                })(e))), t(M((null == (a = e.background) ? void 0 : a.backgroundColor) || c.dK[0].color));
                let i = (0, f.f_)(r(), (null == (n = e.background) ? void 0 : n.assetId) || "") || d.u6;
                t(F(i)), i.assetId && i.assetId !== d.u6.assetId && t(T(i))
            }, ec = () => async (e, t) => {
                let r = (0, f.A3)(t()),
                    a = (0, f.lv)(t()),
                    n = (0, f.K0)(t()),
                    i = (0, f.fj)(r || "")(t());
                if (r && i && (a === _.$.transferDetails || a === _.$.previews)) {
                    e(ed(i));
                    try {
                        let a = await (0, o.RI)(r);
                        if (!(0, s.CR)(a) && a) {
                            var c, u;
                            let r = null == (u = a.views) || null == (c = u[0]) ? void 0 : c.previewBackground;
                            if (null == r ? void 0 : r.assetId) {
                                let a = (0, f.f_)(t(), r.assetId);
                                a && (e(J(a)), e(et(l.hK.image)), e(Q(a)), e(Y(a)), e($(l.hK.image)))
                            } else(null == r ? void 0 : r.backgroundColor) && (e(er(r.backgroundColor)), e(et(l.hK.solidColor)), e(ee(r.backgroundColor)), e($(l.hK.solidColor)))
                        }
                    } catch (e) {
                        E.A.track(e)
                    }
                    return
                }
                if (a === _.$.transferWindow && n) {
                    e(ed(n));
                    let r = (0, f.ef)(t()),
                        a = (0, f.m$)(t()),
                        i = (0, f.lw)(t());
                    a === l.hK.solidColor ? (e($(l.hK.solidColor)), i && e(ee(i))) : (null == r ? void 0 : r.assetId) && (e(Q(r)), e(Y(r)), e($(l.hK.image)));
                    return
                }
                e(ed(d.dL))
            }
        },
        42599: (e, t, r) => {
            r.d(t, {
                JK: () => u,
                Ov: () => o,
                cN: () => d,
                ie: () => s,
                tT: () => n,
                uV: () => l,
                vb: () => c,
                y_: () => i
            });
            var a = r(59042);
            let n = e => e.unlockOneDayExpiryTransfer,
                i = e => n(e).state !== a.B.Hidden,
                o = e => n(e).transferUnlocked,
                s = e => n(e).lastUnlockPopupShownDay,
                l = e => n(e).transferSizeLimitPaywall.state !== a.B.Hidden,
                d = e => n(e).transferSizeLimitPaywall.transferUnlocked,
                c = e => n(e).autoExpiryTooltip.state,
                u = e => n(e).freeTransferBanner.state
        },
        42789: (e, t, r) => {
            r.d(t, {
                CS: () => d,
                iu: () => s,
                p0: () => l
            });
            var a = r(32770),
                n = r.n(a),
                i = r(92211);
            let o = {
                    isAborted: e => 0 === e.status && !e.statusText
                },
                s = {
                    BLOCKED_BY_CLIENT: 0,
                    OK: 200,
                    BAD_REQUEST: 400,
                    UNAUTHORIZED: 401,
                    FORBIDDEN: 403,
                    NOT_FOUND: 404,
                    CONFLICT: 409,
                    EXPECTATION_FAILED: 417,
                    UNPROCESSABLE_ENTITY: 422,
                    TOO_MANY_REQUESTS: 429,
                    LIMIT_REACHED: 480,
                    USER_BLOCKED: 481,
                    UNAVAILABLE_PARENT: 482,
                    TOO_MANY_TRANSFERS: 484,
                    TEAM_POLICY_VIOLATION: 490,
                    MALWARE_SCAN_ERROR: 500
                };

            function l(e) {
                return {
                    status: e.status,
                    statusText: e.statusText,
                    ok: !0,
                    aborted: o.isAborted(e),
                    body: e.data
                }
            }

            function d(e) {
                throw e.body = n()(e, "response.data", {}), e.status = n()(e, "response.status", 0), e.statusText = n()(e, "response.statusText", ""), e.ok = !1, e
            }
            i.Ik({
                aborted: i.zM(),
                body: i.L5(),
                ok: i.zM(),
                status: i.ai(),
                statusText: i.Yj()
            })
        },
        44614: (e, t, r) => {
            r.d(t, {
                CL: () => n,
                Qy: () => s,
                vF: () => o
            });
            var a = r(4559);
            let n = e => e.notification,
                i = (0, a.Mz)(n, e => e.transfer),
                o = (0, a.Mz)(i, e => (null == e ? void 0 : e.text) !== void 0 && (null == e ? void 0 : e.date) !== void 0 ? e : void 0);
            (0, a.Mz)(n, e => e.panel);
            let s = (0, a.Mz)(i, e => null == e ? void 0 : e.text)
        },
        44884: (e, t, r) => {
            r.d(t, {
                sm: () => _,
                jY: () => u,
                I$: () => E,
                mZ: () => p,
                VP: () => s,
                dK: () => l,
                IS: () => o,
                HA: () => c,
                QM: () => d
            });
            var a = r(19653),
                n = r(40334),
                i = r(55676);
            let o = async e => {
                var t;
                let r = await (0, a.Hh)(),
                    o = await r.getTokenSilently(),
                    s = null != (t = i.A.get(n.o.cookies.currentTeam.name)) ? t : "";
                return (await fetch("".concat(n.o.customWallpaperServiceUrl, "/wallpapers/preallocate"), {
                    method: "POST",
                    headers: {
                        Authorization: "Bearer ".concat(o),
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Current-Workspace": s
                    },
                    body: JSON.stringify(e)
                })).json()
            }, s = async e => {
                var t;
                let r = await (0, a.Hh)(),
                    o = await r.getTokenSilently(),
                    s = null != (t = i.A.get(n.o.cookies.currentTeam.name)) ? t : "";
                return (await fetch("".concat(n.o.customWallpaperServiceUrl, "/wallpapers/preallocate-branded"), {
                    method: "POST",
                    headers: {
                        Authorization: "Bearer ".concat(o),
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Current-Workspace": s
                    },
                    body: JSON.stringify(e)
                })).json()
            }, l = async e => {
                var t;
                let r = await (0, a.Hh)(),
                    o = await r.getTokenSilently(),
                    s = null != (t = i.A.get(n.o.cookies.currentTeam.name)) ? t : "";
                return (await fetch("".concat(n.o.customWallpaperServiceUrl, "/wallpapers/preallocate-curated"), {
                    method: "POST",
                    headers: {
                        Authorization: "Bearer ".concat(o),
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Current-Workspace": s
                    },
                    body: JSON.stringify(e)
                })).json()
            }, d = async (e, t) => {
                let r = new FormData;
                return Object.entries(e.fields).forEach(e => {
                    let [t, a] = e;
                    r.append(t, a)
                }), r.append("file", t, t.name), (await fetch(e.url, {
                    method: "POST",
                    body: r
                })).status
            }, c = async e => {
                let t = await (0, a.Hh)(),
                    r = await t.getTokenSilently();
                return (await fetch("".concat(n.o.customWallpaperServiceUrl, "/wallpapers/process-previews/").concat(e), {
                    method: "POST",
                    headers: {
                        Authorization: "Bearer ".concat(r)
                    }
                })).status
            }, u = async e => {
                let t = await (0, a.Hh)(),
                    r = await t.getTokenSilently();
                return (await fetch("".concat(n.o.customWallpaperServiceUrl, "/wallpapers/preview-urls/").concat(e), {
                    method: "GET",
                    headers: {
                        Authorization: "Bearer ".concat(r),
                        Accept: "application/json"
                    }
                })).json()
            }, _ = async (e, t) => {
                let r = await (0, a.Hh)(),
                    i = await r.getTokenSilently();
                return (await fetch("".concat(n.o.customWallpaperServiceUrl, "/wallpapers/").concat(e), {
                    method: "PATCH",
                    headers: {
                        Authorization: "Bearer ".concat(i),
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        transferId: t
                    })
                })).status
            }, p = async e => {
                let t = await fetch("".concat(n.o.customWallpaperServiceUrl, "/wallpapers/").concat(e), {
                    method: "GET",
                    headers: {
                        Accept: "application/json"
                    }
                });
                if (204 !== t.status) return t.json()
            }, E = async e => {
                let t = await (0, a.Hh)(),
                    r = await t.getTokenSilently();
                return (await fetch("".concat(n.o.customWallpaperServiceUrl, "/wallpapers/").concat(e), {
                    method: "DELETE",
                    headers: {
                        Authorization: "Bearer ".concat(r),
                        Accept: "application/json"
                    }
                })).json()
            }
        },
        45391: (e, t, r) => {
            r.d(t, {
                Zz: () => u,
                fc: () => l,
                g3: () => c,
                hO: () => d,
                yZ: () => s
            });
            var a = r(28338),
                n = r(89187),
                i = r(55851),
                o = r(7012);
            let s = (e, t, r, a) => {
                    let i = (0, o.Al)(e);
                    return "CH" === t ? !i || i === n.js.FREE : !i && r || i === n.js.FREE && a
                },
                l = (e, t, r) => null !== t && !(t > i.i.DAYS_3_IN_SECONDS) || t === i.i.DAYS_7_IN_SECONDS && r || (0, o.sf)(e),
                d = (e, t, r, a) => {
                    if (a) return i.i.DAYS_30_IN_SECONDS;
                    if ((0, o.sf)(t)) return t.preferences.transfer_default_expire_in || null === t.preferences.transfer_default_expire_in ? t.preferences.transfer_default_expire_in : i.i.DAYS_30_IN_SECONDS;
                    let n = t.preferences.transfer_default_expire_in || i.i.DAYS_3_IN_SECONDS;
                    return l(t, n, s(t, r, e.is_7_days_expiration_supported_for_anonymous_users_enabled, e.is_7_days_expiration_supported_for_free_users_enabled)) || (n = i.i.DAYS_3_IN_SECONDS), n
                },
                c = (e, t, r) => t || r && e.preferences.transfer_default_downloader_email_verification === a.B.RESTRICTED ? a.B.ANONYMOUS : e.preferences.transfer_default_downloader_email_verification || a.B.ANONYMOUS,
                u = (e, t) => e && t === a.B.RESTRICTED ? a.B.ANONYMOUS : t || a.B.ANONYMOUS
        },
        45477: (e, t, r) => {
            r.d(t, {
                IJ: () => s,
                M0: () => _,
                SO: () => f,
                SR: () => E,
                Tb: () => d,
                Zy: () => l,
                d9: () => u,
                jk: () => c,
                yI: () => p
            });
            var a = r(4559),
                n = r(53123),
                i = r(12637),
                o = r(86781);
            let s = e => e.channel.defaultRecipient,
                l = e => !!e.channel.name,
                d = e => e.channel,
                c = (0, a.Mz)(d, e => e.name),
                u = (0, a.Mz)(d, e => e.wallpapers),
                _ = (0, a.Mz)(d, e => e.previewsWallpapers),
                p = (0, a.Mz)(d, e => e.workspaceId),
                E = (0, a.Mz)(d, e => e.title),
                f = (0, a.Mz)(d, o.JV, i.G9, (e, t, r) => n.A.isDefaultRecipientInUploadLocked({
                    channelDefaultRecipient: e.defaultRecipient,
                    userLoggedIn: t,
                    channelName: e.name,
                    accountSubDomainName: r
                }))
        },
        46966: (e, t, r) => {
            r.d(t, {
                nf: () => o,
                sJ: () => i,
                ue: () => n
            });
            var a = r(96361);
            let n = {
                    adResponse: void 0
                },
                i = (0, a.Z0)({
                    name: "adWallpaper",
                    initialState: n,
                    reducers: {
                        setAdResponse(e, t) {
                            e.adResponse = t.payload
                        }
                    }
                }),
                {
                    setAdResponse: o
                } = i.actions
        },
        48255: (e, t, r) => {
            r.d(t, {
                Gz: () => u,
                IL: () => a,
                OJ: () => o,
                Qo: () => s,
                aR: () => i,
                cA: () => n,
                mG: () => l,
                qy: () => c,
                uI: () => d
            });
            var a = function(e) {
                    return e.PENDING = "pending", e.COMPLETED = "completed", e.SIGNED = "signed", e.PARTIAL = "partial", e
                }({}),
                n = function(e) {
                    return e.ALL = "all", e.PENDING = "pending", e.COMPLETED = "completed", e
                }({}),
                i = function(e) {
                    return e.ALL = "all", e.WAITING = "waiting", e.COMPLETED = "completed", e.ACTION_REQUIRED = "action_required", e
                }({}),
                o = function(e) {
                    return e.EDITOR = "editor", e.SIGNER = "signer", e
                }({}),
                s = function(e) {
                    return e.BULK_SEND = "bulk_send", e.MULTI_SIGNER = "multisigner", e
                }({});

            function l(e) {
                return {
                    id: e.id,
                    type: e.type,
                    status: e.status,
                    editorTransferId: e.editor_transfer_id,
                    signedCount: e.signed_count,
                    totalRecipients: e.total_recipients,
                    completionPercentage: e.completion_percentage,
                    signatureMode: e.signature_mode,
                    createdAt: e.created_at,
                    updatedAt: e.updated_at,
                    transfer: e.transfer,
                    finalSignedTransfer: e.final_signed_transfer ? {
                        id: e.final_signed_transfer.id,
                        name: e.final_signed_transfer.name,
                        isReady: e.final_signed_transfer.is_ready
                    } : void 0
                }
            }

            function d(e) {
                var t;
                return {
                    pagination: {
                        totalCount: null != (t = e.pagination.editor_transfers_count) ? t : e.pagination.total_count,
                        page: e.pagination.page
                    },
                    signatureTransfers: e.signature_transfers.map(l),
                    relatedSignerTransfers: (e.related_signer_transfers || []).map(l),
                    statistics: {
                        editorCount: e.statistics.editor_count,
                        pendingSignature: e.statistics.pending_signature,
                        pendingYourSignature: e.statistics.pending_your_signature,
                        signed: e.statistics.signed,
                        signerCount: e.statistics.signer_count,
                        total: e.statistics.total,
                        editorCompleted: e.statistics.editor_completed
                    }
                }
            }
            var c = function(e) {
                return e.TYPED = "typed", e.DRAW = "drawn", e.IMAGE = "image", e
            }({});

            function u(e) {
                return {
                    id: e.id,
                    type: e.signature_type,
                    signatureText: e.signature_text,
                    fontFamily: e.font_family,
                    signatureUrl: e.signature_url,
                    displayName: e.display_name,
                    isDefault: e.is_default,
                    createdAt: e.created_at,
                    updatedAt: e.updated_at
                }
            }
        },
        48585: (e, t, r) => {
            r.d(t, {
                a: () => a,
                j: () => n
            });
            var a = function(e) {
                return e.Error = "error", e.Default = "default", e.Form = "form", e.Notification = "notification", e
            }({});
            let n = ["InvalidSender", "MissingSender", "MissingRecipients", "MessageTooLarge", "MissingFiles"]
        },
        49193: (e, t, r) => {
            r.d(t, {
                JK: () => a,
                Mz: () => n
            });
            let a = ["image/png", "image/jpg", "image/jpeg"],
                n = a.concat(["video/mp4"])
        },
        49302: (e, t, r) => {
            r.d(t, {
                Il: () => o,
                SI: () => n,
                gG: () => a,
                hL: () => i
            });
            var a = function(e) {
                    return e.Admin = "Admin", e.Member = "Member", e
                }({}),
                n = function(e) {
                    return e.Active = "active", e.Trialing = "trialing", e.PastDue = "past_due", e.Unpaid = "unpaid", e
                }({}),
                i = function(e) {
                    return e.GOOGLE = "google", e.APPLE = "apple", e.STRIPE = "stripe", e.ADROIT = "adroit", e.MONETA = "moneta", e
                }({});
            let o = ["google", "apple"]
        },
        49309: (e, t, r) => {
            r.d(t, {
                L: () => a
            });
            let a = (0, r(96361).Nc)()
        },
        49835: (e, t, r) => {
            r.d(t, {
                d: () => o
            });
            var a = r(96361),
                n = r(92156),
                i = r(23966);
            let o = (0, a.Z0)({
                name: "layout",
                initialState: i.I,
                reducers: {
                    hideUI(e) {
                        e.hidden = !0
                    },
                    showUI(e) {
                        e.hidden = !1
                    },
                    setWallpaperUIStyle(e, t) {
                        for (let r in t.payload) {
                            let a = t.payload[r];
                            e.wallpaper[r] = a
                        }
                    },
                    resetWallpaperUIStyle(e) {
                        e.wallpaper = {
                            uploadSpinnerTransitionColor: e.wallpaper.uploadSpinnerTransitionColor
                        }
                    },
                    setTransferBoxStyle(e, t) {
                        e.transferBox = t.payload
                    },
                    setPanelSizeFull(e) {
                        e.panel.size = n.y.FULL
                    },
                    setPanelSizeHalf(e) {
                        e.panel.size = n.y.HALF
                    },
                    setPanelSizeNone(e) {
                        e.panel.size = n.y.NONE
                    },
                    setDropZoneState(e, t) {
                        e.dropzoneActive = t.payload
                    },
                    setActionbarVisible(e, t) {
                        e.actionbarVisible = t.payload
                    },
                    setIsResumeUploadModalOpen(e, t) {
                        e.isResumeUploadModalOpen = t.payload
                    }
                }
            })
        },
        50467: (e, t, r) => {
            r.d(t, {
                E5: () => n,
                PL: () => o,
                QD: () => i,
                eg: () => a
            });
            let a = "upload-start",
                n = "upload-created",
                i = "user-not-recognized",
                o = "upload-result"
        },
        50808: (e, t, r) => {
            r.d(t, {
                k: () => i,
                u: () => n
            });
            var a = r(96361);
            let n = {
                    userExists: !1,
                    allowed: !1,
                    initializeScriptsAfterPasswordlessLogin: !1,
                    hasStartedPasswordlessLogin: !1
                },
                i = (0, a.Z0)({
                    name: "passwordlessLogin",
                    initialState: n,
                    reducers: {
                        setUserExists(e, t) {
                            e.userExists = t.payload
                        },
                        setAllowed(e, t) {
                            e.allowed = t.payload
                        },
                        setInitializeScriptsAfterPasswordlessLogin(e, t) {
                            e.initializeScriptsAfterPasswordlessLogin = t.payload
                        },
                        setHasStartedPasswordlessLogin(e, t) {
                            e.hasStartedPasswordlessLogin = t.payload
                        }
                    }
                })
        },
        50820: (e, t, r) => {
            r.d(t, {
                IX: () => n,
                So: () => i,
                _9: () => a
            });
            var a = function(e) {
                return e.PREVIEW_AND_DOWNLOAD = "preview_and_download", e.PREVIEW_ONLY = "preview_only", e.DOWNLOAD_ONLY = "download_only", e.PREVIEW_ONLY_WITH_WATERMARK = "preview_only_with_watermark", e
            }({});
            let n = e => "preview_only" === e || "preview_only_with_watermark" === e,
                i = e => "preview_only_with_watermark" === e
        },
        51153: (e, t, r) => {
            r.d(t, {
                $: () => a
            });
            var a = function(e) {
                return e.transferWindow = "TRANSFER_WINDOW", e.transferDetails = "TRANSFER_DETAILS", e.previews = "PREVIEWS", e.adWallpaper = "AD_WALLPAPER", e
            }({})
        },
        51384: (e, t, r) => {
            r.d(t, {
                SW: () => o,
                h7: () => n,
                i5: () => i
            });
            let a = new Map,
                n = (e, t) => {
                    a.set(e, t)
                },
                i = e => a.get(e),
                o = () => {
                    a.clear()
                }
        },
        52458: (e, t, r) => {
            r.d(t, {
                J: () => c
            });
            var a = r(53123),
                n = r(12155),
                i = r(82667),
                o = r(10694),
                s = r(91345);

            function l(e) {
                return void 0 !== e.apiType
            }

            function d(e) {
                return e.apiType = l(e) ? e.apiType : e.item_type, {
                    id: e.id,
                    content_identifier: "file",
                    name: e.name,
                    size: e.size,
                    downloadable: !0,
                    apiType: e.apiType,
                    file: new s.A(e),
                    addMethod: l(e) ? e.addMethod : void 0
                }
            }

            function c(e) {
                var t, r, s;
                let l = {};
                (e.expires_at && "string" == typeof e.expires_at || "object" == typeof e.expires_at) && (l.expiresAt = e.expires_at), "number" == typeof e.expiry_in_seconds && (l.expiryInSeconds = e.expiry_in_seconds);
                let c = e.files || e.items || [],
                    u = e.size || c.reduce((e, t) => {
                        let {
                            size: r = 0
                        } = t;
                        return e + r
                    }, 0),
                    _ = (0, i.f)({
                        transferExpiry: e.expiry,
                        currentSize: u,
                        isRecoverable: e.isRecoverable || !1
                    });
                return _ && (l.extendedExpiryDate = _.toString()), e.extended_expiry_date && "string" == typeof e.extended_expiry_date && (l.extendedExpiryDate = e.extended_expiry_date, l.extendedExpiryInSeconds = Math.floor((a.A.getEpochMillisFromString(e.extended_expiry_date) - new Date().getTime()) / 1e3), 0 === e.expiry_in_seconds && e.expires_at && (l.expiryInSeconds = Math.floor((a.A.getEpochMillisFromString(e.extended_expiry_date) - new Date().getTime()) / 1e3))), l.description = e.description || e.message, (e.state === o.r.INIT || e.files && !e.items) && (l.items = c.map(d)), l.size = u, l.items = n.CI(l.items || e.items), l.itemsTree = n.vN(l.items), l.files = c, l.title = e.displayName, !l.title && l.items.length && (l.title = n.cN(l.items[0].name).pop()), e.creator && (l.creator = {
                    auth0UserId: null == (r = e.creator) ? void 0 : r.auth0_user_id,
                    email: null == (s = e.creator) ? void 0 : s.email
                }), e.downloader_email_verification && (l.downloaderEmailVerification = e.downloader_email_verification), e.view_option && (l.viewOption = e.view_option), void 0 !== e.allow_comments && (l.allowComments = e.allow_comments), e.downloaders && (l.downloaders = e.downloaders), e.previewers && (l.previewers = e.previewers), e.allowlist && (l.allowlist = e.allowlist), e.experiment_ids && (l.experimentIds = e.experiment_ids), l.workspaceId = e.workspace_id, l.workspaceTier = null == (t = e.workspace) ? void 0 : t.tier, {
                    ...e,
                    ...l
                }
            }
        },
        52737: (e, t, r) => {
            r.d(t, {
                A: () => a
            });
            let a = {
                types(e) {
                    let t = {};
                    for (let r of e) t[r] = r;
                    return t
                },
                generate(e) {
                    for (let t of Object.keys(e)) e[t] = "function" == typeof e[t] ? e[t] : function(e) {
                        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) r[a - 1] = arguments[a];
                        if (!r.length) throw "ActionTypeMissing";
                        return function() {
                            for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                            let n = {
                                type: r[0]
                            };
                            for (let e of r) e !== n.type && (n[e] = t.shift());
                            return n
                        }
                    }(t, ...e[t]);
                    return e
                }
            }
        },
        53123: (e, t, r) => {
            r.d(t, {
                A: () => d
            });
            var a = r(23798);
            r(21462);
            var n = r(75546),
                i = r(40334),
                o = r(30631),
                s = r(55676),
                l = r(84530);
            let d = {
                getTransferSizeInMB: e => (e / 1024 / 1024).toFixed(10),
                getWorkspaceName(e, t) {
                    var r;
                    return e ? e.defaultName && 1 === e.members.length && t ? t.email : e.name : l.A.t("account.workspace.default_workspace", {
                        name: null == (r = t.given_name) ? void 0 : r.trim()
                    })
                },
                getWorkspaceInitials(e) {
                    let t = (null == e ? void 0 : e.givenName) || (null == e ? void 0 : e.given_name),
                        r = (null == e ? void 0 : e.familyName) || (null == e ? void 0 : e.family_name);
                    return e && t ? r ? t.charAt(0) + r.charAt(0) : t.charAt(0) : ""
                },
                highlightText(e, t) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "strong";
                    if (!e) return null;
                    let n = e.toLowerCase(),
                        i = t.toLowerCase(); - 1 === n.indexOf(i) && (i = "");
                    let o = e.substring(0, n.indexOf(i)),
                        s = e.substring(n.indexOf(i), n.indexOf(i) + i.length),
                        l = e.substring(n.indexOf(i) + i.length);
                    return [o || null, (0, a.jsx)(r, {
                        className: "text--is-highlighted",
                        children: s
                    }, e), l || null]
                },
                getAvatar: e => i.o.avatars[e % i.o.avatars.length],
                getLastUsedSender() {
                    let e = s.A.get("wt_from") || "";
                    return (e = e.split(",")).length ? e[0].replace(/\s*/g, "") : ""
                },
                getFileExtension: e => !!(e && e.indexOf(".") > -1) && e.substr(e.lastIndexOf(".") + 1).toLowerCase(),
                getWTSent() {
                    let e = s.A.get("wt_sent");
                    return parseInt(null === e || isNaN(e) ? 0 : e, 10)
                },
                getWTPlus() {
                    let e = s.A.get(i.o.cookies.plus.name);
                    if (!(null === e || isNaN(e))) return parseInt(e, 10)
                },
                incrementWTSent() {
                    s.A.set("wt_sent", this.getWTSent() + 1, {
                        days: 365
                    })
                },
                getWTDownloaded: () => parseInt(null === s.A.get("wt_downloaded") || isNaN(s.A.get("wt_downloaded")) ? 0 : s.A.get("wt_downloaded"), 10),
                incrementWTDownloaded() {
                    s.A.set("wt_downloaded", this.getWTDownloaded() + 1, {
                        days: 365
                    })
                },
                validateEmail: e => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e) && !/(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g.test(e),
                validateUri: e => /^\S+\.\w{2,}.*$/.test(e),
                getDaysSinceFirstVisit() {
                    let e = parseInt(s.A.get(i.o.cookies.firstVisit.name));
                    return e ? Math.floor((Date.now() - e) / 864e5) : null
                },
                treatAsUTC(e) {
                    if (!e || "function" != typeof e.getTimezoneOffset) {
                        if (3 !== (e = String(e).split("/")).length) return NaN;
                        e = new Date(e.join("/"))
                    }
                    let t = e;
                    return t.setMinutes(t.getMinutes() - t.getTimezoneOffset()), t
                },
                getDaysBetweenDates(e, t) {
                    return Math.floor(Math.abs(this.treatAsUTC(t) - this.treatAsUTC(e)) / 864e5)
                },
                getWallpaperPreviewType: e => o.Ay.isIphone || o.Ay.isTablet ? "image" : e,
                getNoticeOptions(e) {
                    let {
                        incompatibleVersion: t,
                        user: r
                    } = e, {
                        shouldShowFeatureBanner: d,
                        featureTranslationKey: c,
                        featureHref: u,
                        featureName: _
                    } = i.o.featureBanner;
                    return t ? {
                        text: (0, a.jsx)(n.x6, {
                            i18nKey: "force_update",
                            components: {
                                a: (0, a.jsx)("a", {
                                    href: "/",
                                    onClick: () => window.location.reload()
                                })
                            }
                        }),
                        color: "dark"
                    } : r.loggedIn && r.hasSkippedVerification ? {
                        text: l.A.t("notice.verification"),
                        showCloseIcon: !1
                    } : d && s.A.get(i.o.cookies.featureBanner.name) !== _ ? {
                        text: (0, a.jsx)(n.x6, {
                            i18nKey: c,
                            components: {
                                a: u ? (0, a.jsx)("a", {
                                    href: u
                                }) : (0, a.jsx)("span", {})
                            }
                        }),
                        onClose: () => {
                            s.A.set(i.o.cookies.featureBanner.name, _, {
                                days: 31
                            })
                        }
                    } : o.Ay.isOutdated(i.o.supportedBrowsers) ? {
                        text: l.A.t("transfer.outdated_browser.text"),
                        color: "dark"
                    } : {
                        text: null,
                        color: null
                    }
                },
                isDefaultRecipientInUploadLocked(e) {
                    let {
                        channelDefaultRecipient: t,
                        userLoggedIn: r,
                        channelName: a,
                        accountSubDomainName: n
                    } = e;
                    return !1 !== t && (!r || !1 !== a && n !== a)
                },
                isSenderLocked: e => e.loggedIn > 0 && e.isVerified && !e.hasSkippedVerification,
                getPortalsUrl() {
                    let e = new URL("".concat(i.o.portalsUrl));
                    return e.searchParams.set("returnUrl", location.href), e.searchParams.set("app", "transfer"), e.href
                },
                getSafetyUrl(e, t) {
                    let r = new URL("".concat(i.o.safetyUrl, "/user-reports"));
                    return e && t && (r.searchParams.set("content.content_id", e), r.searchParams.set("content.customerSpecific.contentType", t)), r.href
                },
                stripHtmlTags: e => e && e.replace(/(<([^>]+)>)/gi, ""),
                getEpochMillisFromString(e) {
                    if (null == e) return NaN;
                    let t = new Date(e).getTime();
                    if (!isNaN(t)) return t;
                    let r = e.split(/[^0-9]/),
                        a = new Date(r[0], r[1] - 1, r[2], r[3], r[4], r[5]).getTime();
                    return isNaN(a) ? NaN : a
                }
            }
        },
        53155: (e, t, r) => {
            r.d(t, {
                Ay: () => p,
                gg: () => u,
                o1: () => _
            });
            var a = r(39075),
                n = r(65509),
                i = r(52737),
                o = r(72255),
                s = r(63306),
                l = r(95467),
                d = r(96644),
                c = r(68018);
            let u = "null",
                _ = i.A.types(["TRANSFERS_SUCCESS", "GET_TRANSFER_SUCCESS", "DOWNLOAD_TRANSFER_SUCCESS", "TRANSFERS_RESET_LIST_LOADED", "TRANSFERS_RESET_TRANSFER"]),
                p = i.A.generate({
                    getTransfer(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = "retrieveTransfer_" + e;
                        return async a => {
                            a((0, c.m$)(r));
                            try {
                                let t = await n.A.Transfers.getTransfer(null, {
                                    pathExtValues: {
                                        transferId: e
                                    }
                                });
                                a({
                                    type: _.GET_TRANSFER_SUCCESS,
                                    transfer: t.body || !1
                                })
                            } catch (r) {
                                let e = r.body && r.body.error ? r.body.error : "retrieve_transfer_exception";
                                t.suppressRedirect || o.A.navigateTo("/transfers"), a(d.P9.setPanelNotification({
                                    category: d.aF.Error,
                                    details: e
                                }))
                            }
                            a((0, c.lX)(r))
                        }
                    },
                    deleteTransfer(e) {
                        let {
                            id: t,
                            account: r
                        } = e, i = "deleteTransfer";
                        return async (e, o) => {
                            let {
                                transfer: u,
                                transfers: p
                            } = o();
                            e((0, c.m$)(i));
                            try {
                                await n.A.Transfers.deleteMultipleTransfers({
                                    transfer_ids: [t],
                                    account_id: r.id
                                });
                                let i = p.list.filter(e => t !== e.id);
                                e({
                                    type: _.TRANSFERS_SUCCESS,
                                    list: i
                                }), e(d.P9.setPanelNotification({
                                    category: d.aF.Notification,
                                    details: "delete_transfer_success"
                                })), e(l.default.getUser()), "finished" === u.state && u.parent_id === t && (e(d.P9.clearTransferNotification()), e(s.Ay.createSimilar())), window.dispatchEvent(new CustomEvent(a.U))
                            } catch (t) {
                                e(d.P9.setPanelNotification({
                                    category: d.aF.Error,
                                    details: "delete_transfer_exception"
                                }))
                            }
                            e((0, c.lX)(i))
                        }
                    },
                    deleteMultipleTransfers() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            t = arguments.length > 1 ? arguments[1] : void 0,
                            r = "deleteMultipleTransfers";
                        return async (i, o) => {
                            i((0, c.m$)(r));
                            try {
                                await n.A.Transfers.deleteMultipleTransfers({
                                    transfer_ids: e,
                                    account_id: t
                                });
                                let r = o().transfers.list.filter(t => -1 === e.indexOf(t.id));
                                i({
                                    type: _.TRANSFERS_SUCCESS,
                                    list: r
                                }), i(d.P9.setPanelNotification({
                                    category: d.aF.Notification,
                                    details: "delete_transfers_success"
                                })), i(l.default.getUser()), window.dispatchEvent(new CustomEvent(a.U))
                            } catch (e) {
                                i(d.P9.setPanelNotification({
                                    category: d.aF.Error,
                                    details: "delete_transfers_exception"
                                }))
                            }
                            i((0, c.lX)(r))
                        }
                    },
                    deleteAllTransfers(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                            r = "deleteAllTransfers";
                        return async i => {
                            i((0, c.m$)(r));
                            try {
                                let r = {
                                    delete_all: !0,
                                    account_id: e
                                };
                                void 0 !== t && (r.folder_id = t), await n.A.Transfers.deleteMultipleTransfers(r), i({
                                    type: _.TRANSFERS_SUCCESS,
                                    list: []
                                }), i(d.P9.setPanelNotification({
                                    category: d.aF.Notification,
                                    details: "delete_transfers_success"
                                })), i(l.default.getUser()), window.dispatchEvent(new CustomEvent(a.U))
                            } catch (e) {
                                i(d.P9.setPanelNotification({
                                    category: d.aF.Error,
                                    details: "delete_transfers_exception"
                                }))
                            }
                            i((0, c.lX)(r))
                        }
                    },
                    updateTransferDetails(e) {
                        let {
                            id: t,
                            updateParams: r = {}
                        } = e, a = "transferDetailsUpdate";
                        return async e => {
                            e((0, c.m$)(a));
                            try {
                                let e = {};
                                void 0 !== r.displayName && (e.display_name = r.displayName), void 0 !== r.message && (e.message = r.message), void 0 !== r.expiry && (e.delete_after = r.expiry), void 0 !== r.password && (e.password = r.password), void 0 !== r.extendedExpiryDate && (e.extended_expiry_date = r.extendedExpiryDate), void 0 !== r.accessControl && (e.access_control = r.accessControl), void 0 !== r.price && (e.price = r.price), void 0 !== r.currency && (e.currency = r.currency), void 0 !== r.viewOption && (e.view_option = r.viewOption), await n.A.Transfers.updateTransfer(e, {
                                    pathExtValues: {
                                        transferId: t
                                    }
                                })
                            } catch (t) {
                                throw e(d.P9.setPanelNotification({
                                    category: d.aF.Error,
                                    details: "something_went_wrong"
                                })), Error("UpdateTransferDetailsFailed")
                            } finally {
                                e((0, c.lX)(a))
                            }
                        }
                    },
                    resetListLoaded: [_.TRANSFERS_RESET_LIST_LOADED],
                    resetTransfer: [_.TRANSFERS_RESET_TRANSFER]
                })
        },
        53289: (e, t, r) => {
            r.d(t, {
                A: () => d,
                o: () => l
            });
            var a = r(52737),
                n = r(29966),
                i = r(96644),
                o = r(68018),
                s = r(80933);
            let l = a.A.types(["SET_UPLOADER_OPTIONS", "SET_SHOW_CONSENT_WALL_PREFERENCES", "RESET_UPLOADER_SCROLL"]),
                d = a.A.generate({
                    uploadCuratedWallpaper(e, t) {
                        let r = "uploadAsset_wallpaper";
                        return async (a, l) => {
                            a((0, o.m$)(r));
                            try {
                                let {
                                    account: n
                                } = l(), i = await s.Ay.allocateCuratedWallpaper(n.id, e.imagePath, t);
                                return a((0, o.lX)(r)), i.body
                            } catch (e) {
                                e.aborted || a(i.P9.setPanelNotification({
                                    category: i.aF.Error,
                                    details: (0, n.rC)(e.status, "wallpaper")
                                })), a((0, o.lX)(r))
                            }
                        }
                    },
                    uploadAsset(e, t, r) {
                        let a = "uploadAsset_" + t;
                        return async (l, d) => {
                            let {
                                size: c,
                                name: u,
                                type: _
                            } = e, {
                                session: {
                                    assetUpload: p
                                }
                            } = d();
                            if (!s.Ay.isFileValid(t, c, _, p)) return void l(i.P9.setPanelNotification({
                                category: i.aF.Error,
                                details: (0, n.cJ)(t, _)
                            }));
                            l((0, o.m$)(a));
                            try {
                                let {
                                    account: n
                                } = d(), i = await s.Ay.allocateAsset(n.id, t, u, r);
                                return await s.Ay.uploadAsset(i.body.presigned_post_url, i.body.presigned_post_fields, e), l((0, o.lX)(a)), i.body.model
                            } catch (e) {
                                e.aborted || l(i.P9.setPanelNotification({
                                    category: i.aF.Error,
                                    details: (0, n.rC)(e.status, t, _)
                                })), l((0, o.lX)(a))
                            }
                        }
                    },
                    cancelUploadAsset(e) {
                        let t = "uploadAsset_" + e;
                        return s.Ay.cancelUpload(), async e => {
                            e((0, o.lX)(t))
                        }
                    },
                    setUploaderOptions: [l.SET_UPLOADER_OPTIONS, "options"],
                    setShowConsentWallPreferences: [l.SET_SHOW_CONSENT_WALL_PREFERENCES, "value"],
                    resetUploaderScroll: [l.RESET_UPLOADER_SCROLL, "value"]
                })
        },
        53379: (e, t, r) => {
            function a(e) {
                return {
                    ...e,
                    createdAt: e.createdAt.getTime()
                }
            }
            r.d(t, {
                n: () => n
            });
            let n = {
                resumablePresent: e => ({
                    kind: "upload_resumable_present",
                    info: a(e)
                }),
                modalShown: e => ({
                    kind: "resume_upload_modal_shown",
                    info: a(e)
                }),
                modalDismissed: e => ({
                    kind: "resume_upload_modal_dismissed",
                    info: a(e)
                }),
                seeMoreClicked: e => ({
                    kind: "resume_upload_modal_see_more_clicked",
                    info: a(e)
                }),
                resumeUploadClicked: e => ({
                    kind: "resume_upload_modal_resume_upload_clicked",
                    info: a(e)
                }),
                fileSelected: e => ({
                    kind: "resume_upload_modal_file_selected",
                    info: a(e)
                }),
                folderSelected: e => ({
                    kind: "resume_upload_modal_folder_selected",
                    info: a(e)
                }),
                fileSelectionError: e => ({
                    kind: "resume_upload_modal_file_selection_error",
                    info: a(e)
                }),
                folderSelectionError: e => ({
                    kind: "resume_upload_modal_folder_selection_error",
                    info: a(e)
                }),
                uploadResumed: e => ({
                    kind: "resume_upload_modal_upload_resumed",
                    info: a(e)
                }),
                resumeUploadTriggeredAfterFailure: (e, t) => ({
                    kind: "resume_upload_triggered_after_failure",
                    info: {
                        ...a(e),
                        attempts: t
                    }
                })
            }
        },
        54026: (e, t, r) => {
            r.d(t, {
                DR: () => a,
                ER: () => n,
                Fs: () => o,
                WM: () => i
            });
            let a = {
                    width: 256,
                    height: 256
                },
                n = {
                    width: 1e3,
                    height: 800
                },
                i = {
                    width: 1600,
                    height: 1200
                },
                o = [Object.values(a), Object.values(n), Object.values(i)]
        },
        55188: (e, t, r) => {
            r.d(t, {
                O: () => n,
                g: () => a
            });
            let a = () => {
                    let e = localStorage.getItem("t_s"),
                        t = localStorage.getItem("t_gcid"),
                        r = localStorage.getItem("fbclid");
                    return null !== e && (null !== t || null !== r)
                },
                n = () => {
                    if (!a()) return !1;
                    let e = localStorage.getItem("pua_experiment");
                    return null !== e && "simplified_intro" === e
                }
        },
        55256: (e, t, r) => {
            r.d(t, {
                $: () => i
            });
            var a = r(96230),
                n = r.n(a);
            let i = {
                generateTypes() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = {};
                    for (let r of e) t[r] = r;
                    return t
                },
                generateActions() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = {};
                    for (let r of Object.keys(e)) t[r] = n()(e[r]) ? e[r] : function(e) {
                        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) r[a - 1] = arguments[a];
                        if (!e) throw Error("ActionTypeMissing");
                        return function() {
                            for (var t = arguments.length, a = Array(t), n = 0; n < t; n++) a[n] = arguments[n];
                            let i = {
                                type: e
                            };
                            for (let e of r) i[e] = a.shift();
                            return i
                        }
                    }(...e[r]);
                    return t
                }
            }
        },
        55258: (e, t, r) => {
            r.d(t, {
                PK: () => o,
                DG: () => a,
                ue: () => i,
                I2: () => p,
                cC: () => E.cC,
                fW: () => d,
                KQ: () => _,
                MM: () => c,
                Pm: () => u,
                K0: () => l
            });
            var a = function(e) {
                    return e.FETCHING = "fetching", e.NOT_CONNECTED = "not_connected", e.PENDING = "pending", e.PENDING_VERIFICATION = "pending_verification", e.ACTIVE = "active", e.INACTIVE = "inactive", e.DUE = "due", e
                }({}),
                n = r(28330);
            let i = {
                    stripe: {
                        status: a.FETCHING,
                        accountEmail: null,
                        sellerCurrency: n.yR.usd,
                        sellerMinimumChargeAmount: 0,
                        isSellerCurrencySupported: !0
                    }
                },
                o = "fetchSellerCurrency";
            var s = function(e) {
                return e.setStripeStatus = "PAYMENT_INTEGRATIONS/SET_STRIPE_STATUS", e.setStripeAccountEmail = "PAYMENT_INTEGRATIONS/SET_STRIPE_ACCOUNT_EMAIL", e.setStripeSellerCurrency = "PAYMENT_INTEGRATIONS/SET_STRIPE_SELLER_CURRENCY", e.setStripeSellerMinimumChargeAmount = "PAYMENT_INTEGRATIONS/SET_STRIPE_SELLER_MINIMUM_CHARGE_AMOUNT", e.setStripeIsSellerCurrencySupported = "PAYMENT_INTEGRATIONS/SET_STRIPE_IS_SELLER_CURRENCY_SUPPORTED", e
            }({});
            let l = e => ({
                    type: "PAYMENT_INTEGRATIONS/SET_STRIPE_STATUS",
                    payload: e
                }),
                d = e => ({
                    type: "PAYMENT_INTEGRATIONS/SET_STRIPE_ACCOUNT_EMAIL",
                    payload: e
                }),
                c = e => ({
                    type: "PAYMENT_INTEGRATIONS/SET_STRIPE_SELLER_CURRENCY",
                    payload: e
                }),
                u = e => ({
                    type: "PAYMENT_INTEGRATIONS/SET_STRIPE_SELLER_MINIMUM_CHARGE_AMOUNT",
                    payload: e
                }),
                _ = e => ({
                    type: "PAYMENT_INTEGRATIONS/SET_STRIPE_IS_SELLER_CURRENCY_SUPPORTED",
                    payload: e
                }),
                p = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case s.setStripeStatus:
                            return {
                                ...e, stripe: {
                                    ...e.stripe,
                                    status: t.payload
                                }
                            };
                        case s.setStripeAccountEmail:
                            return {
                                ...e, stripe: {
                                    ...e.stripe,
                                    accountEmail: t.payload
                                }
                            };
                        case s.setStripeSellerCurrency:
                            return {
                                ...e, stripe: {
                                    ...e.stripe,
                                    sellerCurrency: t.payload
                                }
                            };
                        case s.setStripeIsSellerCurrencySupported:
                            return {
                                ...e, stripe: {
                                    ...e.stripe,
                                    isSellerCurrencySupported: t.payload
                                }
                            };
                        case s.setStripeSellerMinimumChargeAmount:
                            return {
                                ...e, stripe: {
                                    ...e.stripe,
                                    sellerMinimumChargeAmount: t.payload
                                }
                            };
                        default:
                            return e
                    }
                };
            var E = r(10148)
        },
        55450: (e, t, r) => {
            r.d(t, {
                H7: () => l,
                JD: () => u,
                SQ: () => i,
                UT: () => _,
                Uv: () => s,
                sz: () => c
            });
            var a = r(98463),
                n = r(23901);
            let i = a.K.injectEndpoints({
                    endpoints: e => ({
                        getCurrentUserAdroit: e.query({
                            query: () => ({
                                url: "users/me",
                                method: "GET",
                                requiresAuth: !0
                            }),
                            transformResponse: e => (0, n.x)(e),
                            providesTags: ["CurrentUser"]
                        }),
                        updateMarketingConsent: e.mutation({
                            query: e => ({
                                url: "users/marketing-consent",
                                method: "PATCH",
                                requiresAuth: !0,
                                data: e
                            }),
                            transformResponse: e => (0, n.x)(e),
                            invalidatesTags: ["CurrentUser"]
                        }),
                        updateUser: e.mutation({
                            query: e => ({
                                url: "users/me",
                                method: "PATCH",
                                requiresAuth: !0,
                                data: e
                            }),
                            transformResponse: e => (0, n.x)(e),
                            invalidatesTags: ["CurrentUser"]
                        }),
                        deleteAccount: e.mutation({
                            query: () => ({
                                url: "users",
                                method: "DELETE",
                                requiresAuth: !0
                            })
                        }),
                        preallocateAvatar: e.mutation({
                            query: e => ({
                                url: "users/profile-picture/preallocate",
                                method: "POST",
                                requiresAuth: !0,
                                data: e
                            })
                        }),
                        sendAccountDeletionOtp: e.mutation({
                            query: () => ({
                                url: "users/delete/send-otp",
                                method: "POST",
                                requiresAuth: !0
                            })
                        }),
                        deleteAccountWithOtp: e.mutation({
                            query: e => {
                                let {
                                    otp: t
                                } = e;
                                return {
                                    url: "users/delete",
                                    method: "POST",
                                    requiresAuth: !0,
                                    data: {
                                        otp: t
                                    }
                                }
                            }
                        })
                    })
                }),
                {
                    useGetCurrentUserAdroitQuery: o,
                    useUpdateMarketingConsentMutation: s,
                    useUpdateUserMutation: l,
                    useDeleteAccountMutation: d,
                    usePreallocateAvatarMutation: c,
                    useSendAccountDeletionOtpMutation: u,
                    useDeleteAccountWithOtpMutation: _
                } = i
        },
        55611: (e, t, r) => {
            r.d(t, {
                I: () => a
            });
            let a = {
                cookiesScreenShown(e) {
                    let {
                        snowplowCategory: t,
                        snowplowAction: r
                    } = e;
                    return {
                        kind: "transfer_cookies_screen_shown",
                        info: {
                            snowplowCategory: t,
                            snowplowAction: r
                        }
                    }
                },
                cookiesMobileBannerShown: () => ({
                    kind: "transfer_cookies_mobile_banner_shown"
                }),
                cookiesDesktopBannerShown: () => ({
                    kind: "transfer_cookies_desktop_banner_shown"
                }),
                cookiesMobileBannerDismissed: () => ({
                    kind: "transfer_cookies_mobile_banner_dismissed"
                }),
                allCookiesAccepted(e) {
                    let {
                        snowplowCategory: t,
                        snowplowLabel: r
                    } = e;
                    return {
                        kind: "transfer_all_cookies_accepted",
                        info: {
                            snowplowCategory: t,
                            snowplowAction: "click_accept_all",
                            ...r && {
                                snowplowLabel: r
                            }
                        }
                    }
                },
                allCookiesRejected(e) {
                    let {
                        snowplowCategory: t,
                        snowplowLabel: r
                    } = e;
                    return {
                        kind: "transfer_all_cookies_rejected",
                        info: {
                            snowplowCategory: t,
                            snowplowAction: "click_reject_all",
                            ...r && {
                                snowplowLabel: r
                            }
                        }
                    }
                },
                cookiesPreferencesSaved(e) {
                    let {
                        snowplowCategory: t,
                        snowplowAction: r,
                        snowplowLabel: a
                    } = e;
                    return {
                        kind: "transfer_cookies_preferences_save_button_clicked",
                        info: {
                            snowplowCategory: t,
                            snowplowAction: r,
                            snowplowLabel: a
                        }
                    }
                },
                privacyPreferencesClicked(e) {
                    let {
                        snowplowCategory: t
                    } = e;
                    return {
                        kind: "transfer_cookies_manage_preferences_button_clicked",
                        info: {
                            snowplowCategory: t,
                            snowplowAction: "click_privacy_preferences"
                        }
                    }
                },
                trackersAccepted: () => ({
                    kind: "transfer_cookies_trackers_accepted"
                }),
                trackersDeclined: () => ({
                    kind: "transfer_cookies_trackers_declined"
                }),
                cookiesWallMalfunctionEmpty: () => ({
                    kind: "transfer_cookies_wall_malfunction_empty"
                }),
                cookiesWallMalfunctionTimeout: () => ({
                    kind: "transfer_cookies_wall_malfunction_timeout"
                }),
                cookiesWallManualDismissed: () => ({
                    kind: "transfer_cookies_wall_manual_dismissed"
                })
            }
        },
        55786: (e, t, r) => {
            r.d(t, {
                ML: () => l,
                rh: () => o,
                sZ: () => s
            });
            var a = r(96361);
            let n = {
                    viewOption: r(50820)._9.PREVIEW_AND_DOWNLOAD,
                    allowComments: !1,
                    allowlist: []
                },
                i = (0, a.Z0)({
                    name: "transfer",
                    initialState: n,
                    reducers: {
                        changeViewOption: (e, t) => {
                            e.viewOption = t.payload
                        },
                        changeAllowComments: (e, t) => {
                            e.allowComments = t.payload
                        },
                        setAllowlist: (e, t) => {
                            e.allowlist = t.payload
                        }
                    }
                }),
                {
                    changeViewOption: o,
                    changeAllowComments: s,
                    setAllowlist: l
                } = i.actions;
            i.reducer
        },
        56264: (e, t, r) => {
            r.d(t, {
                jt: () => l,
                kH: () => c
            });
            var a = r(71034),
                n = r(82710),
                i = r(25402),
                o = r(23901);
            let s = (0, i.A)(),
                l = (0, a.xP)({
                    reducerPath: "adroitNoAuthApi",
                    baseQuery: (0, n.S)({
                        baseUrl: "".concat(s.NEXT_PUBLIC_ADROIT_API_BASE, "/public/api/v1/")
                    }),
                    tagTypes: ["Workspace"],
                    endpoints: e => ({
                        getWorkspace: e.query({
                            query: e => {
                                let {
                                    teamId: t
                                } = e;
                                return {
                                    url: "teams/".concat(t),
                                    method: "GET"
                                }
                            },
                            providesTags: (e, t, r) => {
                                let {
                                    teamId: a
                                } = r;
                                return e && a ? [{
                                    type: "Workspace",
                                    id: a
                                }] : []
                            },
                            transformResponse: e => (0, o.x)(e)
                        }),
                        userExists: e.query({
                            query: e => {
                                let {
                                    email: t
                                } = e;
                                return {
                                    url: "users/exists",
                                    method: "GET",
                                    params: {
                                        email: t
                                    }
                                }
                            }
                        })
                    })
                }),
                {
                    useGetWorkspaceQuery: d,
                    useLazyUserExistsQuery: c,
                    util: {
                        invalidateTags: u
                    }
                } = l
        },
        56277: (e, t, r) => {
            r.d(t, {
                I: () => s
            });
            var a = r(23007);
            let {
                setUserExists: n,
                setAllowed: i,
                setHasStartedPasswordlessLogin: o
            } = r(50808).k.actions;

            function s(e) {
                let {
                    email: t
                } = e;
                return async (e, r) => {
                    let {
                        userExists: s,
                        allowed: l
                    } = await (0, a.n)({
                        email: t,
                        language: r().user.language
                    });
                    e(n(s)), e(i(l)), e(o(!0))
                }
            }
        },
        56436: (e, t, r) => {
            r.d(t, {
                A: () => o,
                c: () => i
            });
            var a = r(82493),
                n = r.n(a);

            function i() {
                var e;
                let t = (window.__session__ || {}).profile || {};
                return {
                    name: !!t.subdomain_name && t.subdomain_name,
                    defaultRecipient: function(e) {
                        if ("string" == typeof e) {
                            let t = e.trim();
                            return "" !== t && t
                        }
                        return !1
                    }(t.default_recipient_email),
                    wallpapers: [],
                    previewsWallpapers: [],
                    workspaceId: "",
                    workspaceName: n().decode(null != (e = t.workspaceName) ? e : ""),
                    workspaceLogoUrl: t.workspaceLogoUrl,
                    rules: t.rules,
                    title: ""
                }
            }
            let o = i()
        },
        56682: (e, t, r) => {
            r.d(t, {
                a: () => a
            });
            var a = function(e) {
                return e.SENT = "sent", e.RECEIVED = "received", e
            }({})
        },
        56915: (e, t, r) => {
            r.d(t, {
                P: () => a
            });
            let a = r(9127).y.actions
        },
        56941: (e, t, r) => {
            r.d(t, {
                Z: () => a
            });
            let a = () => ({
                ...window.__auth0_config__
            })
        },
        57455: (e, t, r) => {
            r.d(t, {
                YA: () => n,
                bP: () => i,
                h2: () => s,
                qg: () => o
            });
            let a = "wetransfer_google_one_tap_logout_timestamp";

            function n() {
                try {
                    localStorage.setItem(a, Date.now().toString())
                } catch (e) {}
            }

            function i() {
                try {
                    let e = localStorage.getItem(a);
                    if (!e) return !1;
                    return Date.now() - parseInt(e) < 6e5
                } catch (e) {
                    return !1
                }
            }

            function o() {
                try {
                    localStorage.removeItem(a)
                } catch (e) {}
            }

            function s(e) {
                var t;
                (null == (t = window.google) ? void 0 : t.accounts) && window.google.accounts.id.revoke(e)
            }
        },
        57912: (e, t, r) => {
            r.d(t, {
                A: () => l,
                o: () => s
            });
            var a = r(65509),
                n = r(52737),
                i = r(96644),
                o = r(68018);
            let s = n.A.types(["GET_ACCOUNT", "CREATE_SUBDOMAIN", "UPDATE_ACCOUNT_MEMBERSHIP_USER_EMAIL", "ACCOUNT_UPDATE_SUCCESS", "PAYMENT_SUCCESS", "PAYMENT_ERROR", "PAYMENT_ERROR_RESET", "SET_CAN_SEE_GOODBYE_OFFER"]),
                l = n.A.generate({
                    updateAccountMembershipUserEmail: [s.UPDATE_ACCOUNT_MEMBERSHIP_USER_EMAIL, "email"],
                    getAccount(e) {
                        let t = "getAccount";
                        return async r => {
                            r((0, o.m$)(t));
                            try {
                                let t = await a.A.Account.getAccount(null, {
                                    pathExtValues: {
                                        accountId: e
                                    }
                                });
                                r({
                                    type: s.GET_ACCOUNT,
                                    details: t.body
                                })
                            } catch (e) {
                                r(i.P9.setPanelNotification({
                                    category: i.aF.Error,
                                    details: "retrieve_account_exception"
                                }))
                            }
                            r((0, o.lX)(t))
                        }
                    },
                    createSubdomain(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            n = "editAccount",
                            l = !!r.showNotification;
                        return async r => {
                            r((0, o.m$)(n));
                            try {
                                let n = await a.A.Account.createSubdomain(t, {
                                    pathExtValues: {
                                        accountId: e
                                    }
                                });
                                await r({
                                    type: s.CREATE_SUBDOMAIN,
                                    account: n.body
                                }), l && r(i.P9.setPanelNotification({
                                    category: i.aF.Notification,
                                    details: "update_profile_success"
                                }))
                            } catch (e) {
                                l && r(i.P9.setPanelNotification({
                                    category: i.aF.Error,
                                    details: "update_profile_error"
                                }))
                            }
                            r((0, o.lX)(n))
                        }
                    },
                    editAccount(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            n = "editAccount",
                            l = void 0 === r.notification || !0 === r.notification;
                        return async r => {
                            r((0, o.m$)(n));
                            try {
                                let n = await a.A.Account.editAccount(t, {
                                    pathExtValues: {
                                        accountId: e
                                    }
                                });
                                r({
                                    type: s.ACCOUNT_UPDATE_SUCCESS,
                                    details: n.body
                                }), l && r(i.P9.setPanelNotification({
                                    category: i.aF.Notification,
                                    details: "update_profile_success"
                                }))
                            } catch (e) {
                                l && r(i.P9.setPanelNotification({
                                    category: i.aF.Error,
                                    details: "update_profile_error"
                                }))
                            }
                            r((0, o.lX)(n))
                        }
                    },
                    setCanSeeGoodbyeOffer: e => ({
                        type: s.SET_CAN_SEE_GOODBYE_OFFER,
                        canSeeGoodbyeOffer: e
                    })
                })
        },
        57968: (e, t, r) => {
            r.d(t, {
                l: () => a
            });
            var a = function(e) {
                return e.AD = "Ad", e.BRANDED = "Branded", e.CUSTOM = "Custom", e.NONE = "None", e
            }({})
        },
        58155: (e, t, r) => {
            r.d(t, {
                $D: () => a.$D,
                sP: () => a.sP,
                dN: () => n,
                ef: () => a.ef
            });
            var a = r(61325);
            let n = e => e.rateLimit.isRateLimitModalOpen
        },
        58712: (e, t, r) => {
            r.d(t, {
                BI: () => u,
                F4: () => p,
                H5: () => d,
                Md: () => c,
                X2: () => _,
                aI: () => l,
                q9: () => i
            });
            var a = r(10861),
                n = r(48255);
            let {
                useGetSignatureTransfersQuery: i,
                useGetSignatureTransferQuery: o,
                useLazyGetSignatureTransfersQuery: s,
                useLazyGetFinalSignedPdfQuery: l,
                useLazyGetSignatureCertificateQuery: d,
                useGetUserSignaturesQuery: c,
                useCreateTypedSignatureMutation: u,
                useUploadImageSignatureMutation: _,
                useDeleteUserSignatureMutation: p
            } = a.l.injectEndpoints({
                endpoints: e => ({
                    getSignatureTransfers: e.query({
                        query: e => ({
                            url: "signature-transfers",
                            method: "GET",
                            params: e,
                            requiresAuth: !0
                        }),
                        transformResponse: e => (0, n.uI)(e),
                        providesTags: (e, t, r) => [{
                            type: "Page",
                            id: "signature_transfers_page_".concat(r.page)
                        }]
                    }),
                    getSignatureTransfer: e.query({
                        query: e => {
                            let {
                                signatureTransferId: t
                            } = e;
                            return {
                                url: "signature-transfers/".concat(t),
                                method: "GET",
                                requiresAuth: !0
                            }
                        },
                        transformResponse: e => (0, n.mG)(e)
                    }),
                    getFinalSignedPdf: e.query({
                        query: e => {
                            let {
                                transferId: t
                            } = e;
                            return {
                                url: "transfers/".concat(t, "/signature/final-pdf"),
                                method: "GET",
                                requiresAuth: !0
                            }
                        }
                    }),
                    getSignatureCertificate: e.query({
                        query: e => {
                            let {
                                transferId: t
                            } = e;
                            return {
                                url: "transfers/".concat(t, "/signature/certificate"),
                                method: "GET",
                                requiresAuth: !0
                            }
                        }
                    }),
                    getUserSignatures: e.query({
                        query: () => ({
                            url: "user-signatures",
                            method: "GET",
                            requiresAuth: !0
                        }),
                        transformResponse: e => ({
                            signatures: e.signatures.map(n.Gz)
                        }),
                        providesTags: ["UserSignatures"]
                    }),
                    createTypedSignature: e.mutation({
                        query: e => ({
                            url: "user-signatures/typed",
                            method: "POST",
                            data: e,
                            requiresAuth: !0
                        }),
                        transformResponse: e => (0, n.Gz)(e),
                        invalidatesTags: ["UserSignatures"]
                    }),
                    uploadImageSignature: e.mutation({
                        query: e => ({
                            url: "user-signatures/upload",
                            method: "POST",
                            data: e,
                            requiresAuth: !0
                        }),
                        transformResponse: e => (0, n.Gz)(e),
                        invalidatesTags: ["UserSignatures"]
                    }),
                    deleteUserSignature: e.mutation({
                        query: e => {
                            let {
                                signatureId: t
                            } = e;
                            return {
                                url: "user-signatures/".concat(t),
                                method: "DELETE",
                                requiresAuth: !0
                            }
                        },
                        invalidatesTags: ["UserSignatures"]
                    })
                })
            })
        },
        59042: (e, t, r) => {
            r.d(t, {
                B: () => a
            });
            var a = function(e) {
                return e.Hidden = "hidden", e.UnlockTransfer = "UnlockTransfer", e
            }({})
        },
        59184: (e, t, r) => {
            r.d(t, {
                A: () => d
            });
            var a = r(30530);
            let n = [],
                i = "NA",
                o = "NA",
                s = "NA",
                l = () => ({
                    collect: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "INFO",
                            a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        if (a) {
                            let a = n.findIndex(t => t.msg === e);
                            if (a > -1) {
                                n[a] = {
                                    msg: e,
                                    context: t,
                                    type: r,
                                    date: Date.now()
                                };
                                return
                            }
                        }
                        n.push({
                            msg: e,
                            context: t,
                            type: r,
                            date: Date.now()
                        })
                    },
                    flush: () => {
                        n.forEach(e => {
                            let t = {
                                ...e.context,
                                transfer_id: i,
                                transfer_size_bucket: o,
                                storm_client_version: s,
                                method: "uploadMonitoringTracker",
                                date: e.date
                            };
                            "ERROR" === e.type ? a.yf.logger.error("ERROR: ".concat(e.msg), t) : a.yf.logger.log(e.msg, t)
                        })
                    },
                    init: e => {
                        n = [], i = "Unknown", o = "Unknown", s = e
                    },
                    setTransferId: e => (i = e, l()),
                    setTransferSize: e => (o = e, l())
                }),
                d = l
        },
        61325: (e, t, r) => {
            r.d(t, {
                $D: () => s,
                ef: () => o,
                sP: () => i,
                ue: () => n
            });
            var a = r(96361);
            let n = {
                    isRateLimitModalOpen: !1
                },
                i = (0, a.Z0)({
                    name: "rateLimit",
                    initialState: n,
                    reducers: {
                        showRateLimitModal: e => {
                            e.isRateLimitModalOpen = !0
                        },
                        dismissRateLimitModal: e => {
                            e.isRateLimitModalOpen = !1
                        }
                    }
                }),
                {
                    showRateLimitModal: o,
                    dismissRateLimitModal: s
                } = i.actions
        },
        61670: (e, t, r) => {
            r.d(t, {
                C$: () => o,
                RI: () => i,
                kj: () => n
            });
            var a = r(6286);
            let n = async function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = a.G6.customizations(e);
                return fetch(r, {
                    method: "POST",
                    headers: await (0, a.L$)({
                        withAuth: !0
                    }),
                    body: JSON.stringify(t)
                }).then(a.yH).catch(a.yR)
            }, i = async e => fetch(a.G6.customizations(e), {
                method: "GET",
                headers: await (0, a.L$)()
            }).then(a.yH).catch(a.yR), o = async e => fetch(a.G6.customizations(e), {
                method: "DELETE",
                headers: await (0, a.L$)({
                    withAuth: !0
                })
            }).then(a.yH).catch(a.yR)
        },
        61703: (e, t, r) => {
            r.d(t, {
                ER: () => l,
                fO: () => o,
                oW: () => d,
                pe: () => s
            });
            var a = r(4559),
                n = r(62332);
            let i = e => e.transferWindowDrawer,
                o = (0, a.Mz)(i, e => e.isDrawerOpen),
                s = (0, a.Mz)(i, e => e.currentPageId),
                l = (0, a.Mz)(i, e => e.previousPageId),
                d = (0, a.Mz)(s, l, (e, t) => e === n.z.AudioPlayer || e !== n.z.Options && t === n.z.AudioPlayer)
        },
        62332: (e, t, r) => {
            r.d(t, {
                z: () => a
            });
            var a = function(e) {
                return e.Price = "Price", e.Options = "Options", e.AccessControl = "AccessControl", e.AudioPlayer = "AudioPlayer", e
            }({})
        },
        62373: (e, t, r) => {
            r.d(t, {
                A: () => a.Ay
            });
            var a = r(96773)
        },
        62529: (e, t, r) => {
            r.d(t, {
                E0: () => E,
                Ks: () => c,
                Nc: () => p,
                gd: () => _,
                gm: () => u
            });
            var a = r(26115),
                n = r(53123),
                i = r(63010),
                o = r(91010),
                s = r(96652),
                l = r(10694),
                d = r(97197);

            function c(e) {
                let {
                    transfer: t,
                    maximumNumberOfRecipients: r,
                    maximumNumberOfFiles: a,
                    allowedSize: l,
                    currentSize: c,
                    shouldBypassLimits: p,
                    isUserLoggedIn: E,
                    allowAnonymousTransfer: f = !1,
                    isAnticipatedUploadStarted: A = !1
                } = e;
                if (_(t.state, t.id, A)) throw new i.A("AlreadyStarted");
                if (!Object.values(d.aG).includes(t.type)) throw new i.A("InvalidTransferType");
                if (!t.files.length) throw new i.A("MissingFiles");
                let T = t.type === d.aG.LINK && !E && f;
                if (t.feature === d.xA.TRANSFER && !t.sender.replace(s.Fw, "") && !T) throw new i.A("MissingSender");
                if (t.type === d.aG.EMAIL && t.feature === d.xA.TRANSFER) {
                    if (!n.A.validateEmail(t.sender)) throw new i.A("InvalidSender");
                    if (t.recipients.filter(e => !n.A.validateEmail(e)).length) throw new i.A("InvalidRecipient");
                    if (t.recipients.length > r) throw new i.A(o.A.TOO_MANY_RECIPIENTS)
                }
                if (unescape(encodeURIComponent(t.message)).length > s.lN) throw new i.A("MessageTooLarge");
                if (!p && !u(l) && c > l) throw new i.A("TransferTooBig");
                if (t.files.length > a) throw new i.A("TooManyFiles")
            }

            function u(e) {
                return e === a.b
            }

            function _(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return e !== l.r.PASSWORDLESS_LOGIN && !r && (e !== l.r.INIT || !!t)
            }

            function p(e) {
                let {
                    currentSize: t,
                    files: r,
                    allowedSize: a,
                    bypassLimits: n
                } = e;
                return !!u(a) || !!n || t + r.reduce((e, t) => t.size + e, 0) < a
            }

            function E(e, t) {
                return !e.name && !t
            }
            r(68642)
        },
        63010: (e, t, r) => {
            r.d(t, {
                A: () => a
            });
            class a extends Error {
                constructor(e, t = {}) {
                    super(e), t.transferId && (this.transferId = t.transferId), t.rawError && (this.rawError = t.rawError), t.cause && (this.cause = t.cause)
                }
            }
        },
        63306: (e, t, r) => {
            r.d(t, {
                o1: () => R,
                Ay: () => w,
                IF: () => y,
                W2: () => h
            });
            var a = r(32770),
                n = r.n(a),
                i = r(55188),
                o = r(50820),
                s = r(45391),
                l = r(32401),
                d = r(55851),
                c = r(40334),
                u = r(53123),
                _ = r(7012),
                p = r(55676),
                E = r(52737),
                f = r(87682),
                A = r(56915),
                T = r(13672),
                m = r(96652),
                S = r(10694),
                g = r(97197);
            let R = E.A.types(["TRANSFER_INIT", "TRANSFER_CREATE", "TRANSFER_CHANGE_TYPE", "TRANSFER_CHANGE_FEATURE", "TRANSFER_CHANGE_EXPIRY", "TRANSFER_CHANGE_RECOVERABLE", "TRANSFER_CHANGE_PASSWORD", "TRANSFER_CHANGE_DOWNLOADER_EMAIL_VERIFICATION", "TRANSFER_SET_SENDER", "TRANSFER_SET_MESSAGE", "TRANSFER_SET_LANGUAGE", "TRANSFER_SET_REQUEST_ID", "TRANSFER_SET_DOMAIN_USER_ID", "TRANSFER_SET_CHANNEL", "TRANSFER_SET_RECIPIENT", "TRANSFER_ADD_RECIPIENT", "TRANSFER_ADD_FILES", "TRANSFER_REMOVE_FILE", "TRANSFER_REMOVE_DIRECTORY", "TRANSFER_REMOVE_ALL_ITEMS", "TRANSFER_REMOVE_RECIPIENT", "TRANSFER_REMOVE_ALL_RECIPIENTS", "TRANSFER_RESET", "TRANSFER_START", "TRANSFER_STATE_DOWNLOADABLE", "TRANSFER_STATE_DOWNLOAD_STARTING", "TRANSFER_STATE_DOWNLOADING", "TRANSFER_STATE_FINISHED", "TRANSFER_RESET_DOWNLOAD", "TRANSFER_SET_STATE", "TRANSFER_SET_EXPIRY_IN_SECONDS", "TRANSFER_SET_SHORT_URL", "TRANSFER_SET_ID", "TRANSFER_SET_RESUME_TOKEN", "TRANSFER_SET_STORM_UPLOAD_TOKEN", "TRANSFER_SET_DISPLAY_NAME", "TRANSFER_SET_SECURITY_HASH", "TRANSFER_SET_SIGNATURE", "TRANSFER_SET_UPLOAD_STARTED_AT", "TRANSFER_SET_TRACKING_ID", "DOWNLOAD_PENDING", "DOWNLOAD_SUCCESS", "DOWNLOAD_ERROR", "DOWNLOAD_COMPLETED_SUCCESS", "TRANSFER_DOWNLOAD_EXPIRED", "TRANSFER_DOWNLOAD_INVALID", "TRANSFER_RECOVER", "TRANSFER_STATE_DOWNLOAD_STARTING_FILE", "TRANSFER_STATE_DOWNLOADING_FILE", "TRANSFER_STATE_FINISHED_FILE", "TRANSFER_RESET_VERIFICATION_REQUIRED", "SHOW_TRANSFER_OPTIONS_TOOLTIP", "TRANSFER_SET_RESUME_UPLOAD_IN_PROGRESS", "TRANSFER_SET_RESUME_UPLOAD_ATTEMPTS", "RECAPTCHA_CHALLENGE_RECEIVED", "UPLOAD_PENDING", "UPLOAD_RESET", "UPLOAD_ERROR", "UPLOAD_ERROR_RESET", "UPLOAD_NEED_VERIFICATION", "UPLOAD_VERIFIED", "UPLOAD_DONE", "PREVIEW_LOADING", "PREVIEW_LOADED", "PREVIEW_ERROR"]),
                h = e => {
                    let {
                        user: t,
                        channel: r,
                        transferFromState: a
                    } = e;
                    return (0, _.WU)(t) || (0, T.$7)({
                        transfer: a,
                        channel: r
                    }) ? "plus" : (0, _.PF)(t) ? "freeAccount" : "free"
                };

            function y(e, t, r, a) {
                if (-1 === ["LimitReached", "UserBlocked", "TransferFailed", "UnavailableParent", "TransferCanceled", "HumanVerificationRequired"].indexOf(a)) {
                    if ("TransferTooBig" === a) {
                        let e = 1 === t.recipients.length && t.recipients[0] === r.defaultRecipient;
                        r.defaultRecipient && !e && (a = "RequiresDefaultRecipient")
                    }
                    e(A.P.setTransferNotification({
                        text: a
                    }))
                }
            }
            let w = E.A.generate({
                changeType: [R.TRANSFER_CHANGE_TYPE, "transferType"],
                changeFeature: [R.TRANSFER_CHANGE_FEATURE, "feature"],
                changeExpiry: [R.TRANSFER_CHANGE_EXPIRY, "period"],
                changeRecoverable: [R.TRANSFER_CHANGE_RECOVERABLE, "isRecoverable"],
                changePassword: [R.TRANSFER_CHANGE_PASSWORD, "password"],
                changeDownloaderEmailVerification: [R.TRANSFER_CHANGE_DOWNLOADER_EMAIL_VERIFICATION, "downloaderEmailVerification"],
                removeFile: [R.TRANSFER_REMOVE_FILE, "fileName"],
                removeDirectory: [R.TRANSFER_REMOVE_DIRECTORY, "directoryName"],
                removeAllItems: [R.TRANSFER_REMOVE_ALL_ITEMS],
                removeRecipient: [R.TRANSFER_REMOVE_RECIPIENT, "email"],
                removeAllRecipients: [R.TRANSFER_REMOVE_ALL_RECIPIENTS],
                clearUploadError: [R.UPLOAD_ERROR_RESET],
                displayError: [R.UPLOAD_ERROR, "error", "field"],
                resetDownload: [R.TRANSFER_RESET_DOWNLOAD],
                setDownloadable: [R.TRANSFER_STATE_DOWNLOADABLE, "transferId", "items"],
                previewLoading: [R.PREVIEW_LOADING, "file_id", "file_url"],
                previewLoaded: [R.PREVIEW_LOADED, "file_id"],
                previewError: [R.PREVIEW_ERROR, "file_id"],
                recaptcha: [R.RECAPTCHA_CHALLENGE_RECEIVED, "transfer_id"],
                setState: [R.TRANSFER_SET_STATE, "state"],
                resetVerificationRequired: [R.TRANSFER_RESET_VERIFICATION_REQUIRED],
                showTransferOptionsTooltip: [R.SHOW_TRANSFER_OPTIONS_TOOLTIP],
                setResumeUploadInProgress: [R.TRANSFER_SET_RESUME_UPLOAD_IN_PROGRESS, "inProgress"],
                setResumeUploadAttempts: [R.TRANSFER_SET_RESUME_UPLOAD_ATTEMPTS, "attempts"],
                setRequestId: [R.TRANSFER_SET_REQUEST_ID, "requestId"],
                setRecipient: [R.TRANSFER_SET_RECIPIENT, "email"],
                setUploadPending: [R.UPLOAD_PENDING],
                init(e) {
                    let {
                        transferType: t,
                        userType: r,
                        channelName: a,
                        accountId: n,
                        spaceId: i,
                        expiry: o,
                        defaultProExpiry: s,
                        defaultFreeExpiry: l,
                        recipients: d,
                        sender: c,
                        message: u,
                        displayName: _,
                        parentId: p,
                        isRecoverable: E,
                        downloaderEmailVerification: f,
                        signatureTransfer: A,
                        editorTransferId: T,
                        resumeUploadInProgress: m,
                        viewOption: S,
                        allowComments: g
                    } = e;
                    return {
                        type: R.TRANSFER_INIT,
                        transferType: t,
                        userType: r,
                        expiry: o,
                        defaultProExpiry: s,
                        defaultFreeExpiry: l,
                        recipients: d,
                        sender: c,
                        channelName: a,
                        accountId: n,
                        spaceId: i,
                        message: u,
                        displayName: _,
                        parentId: p,
                        isRecoverable: E,
                        downloaderEmailVerification: f,
                        signatureTransfer: A,
                        editorTransferId: T,
                        resumeUploadInProgress: m,
                        viewOption: S,
                        allowComments: g
                    }
                },
                create() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (t, r) => {
                        var a;
                        let {
                            user: n,
                            channel: _,
                            account: E,
                            transfer: f,
                            route: A,
                            session: T
                        } = r(), m = u.A.getLastUsedSender(), y = function(e, t, r) {
                            let a = r.name || "",
                                n = r.defaultRecipient || !1,
                                i = t.subdomain_name || "";
                            return (!!e.loggedIn && a !== i && !!n || !e.loggedIn && !!n) && n
                        }(n, E, _), w = p.A.get(c.o.cookies.transferType.name);
                        w === l.T && (w = g.aG.LINK), "3" === w && (w = g.aG.EMAIL), "2" === w && (w = g.aG.EMAIL), w === l.v && (w = g.aG.EMAIL), !w && e.link_transfers_default && (w = g.aG.LINK), (0, i.O)() && (w = g.aG.LINK), u.A.isDefaultRecipientInUploadLocked({
                            channelDefaultRecipient: _.defaultRecipient,
                            userLoggedIn: n.loggedIn,
                            channelName: _.name,
                            accountSubDomainName: E.subdomain_name
                        }) && (w = g.aG.EMAIL);
                        let I = _ && _.name && _.name !== E.subdomain_name,
                            v = n.hasSkippedVerification && "/account-verification" === A.path && !!A.query.sig,
                            N = n.loggedIn && (!n.isVerified || v),
                            O = (0, s.hO)(e, n, T.region.country, I),
                            P = (0, s.g3)(n, I, w === g.aG.LINK),
                            L = "boolean" != typeof e.transfer_recovery_enabled_by_default || e.transfer_recovery_enabled_by_default;
                        t({
                            type: R.TRANSFER_INIT,
                            userType: h({
                                user: n,
                                channel: _,
                                transferFromState: f
                            }),
                            transferType: w === g.aG.LINK ? g.aG.LINK : g.aG.EMAIL,
                            accountId: E.id,
                            channelName: _.name,
                            expiry: O,
                            isRecoverable: L,
                            defaultProExpiry: d.i.DAYS_30_IN_SECONDS,
                            defaultFreeExpiry: d.i.DAYS_7_IN_SECONDS,
                            recipients: y ? [y] : [],
                            sender: m,
                            state: N ? S.r.VERIFY_ACCOUNT : null,
                            downloaderEmailVerification: P,
                            viewOption: o._9.PREVIEW_AND_DOWNLOAD,
                            allowComments: null != (a = n.preferences.transfer_default_allow_comments) && a
                        })
                    }
                },
                createSimilar() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (t, r) => {
                        var a;
                        let {
                            transfer: n,
                            user: i,
                            account: l,
                            channel: c
                        } = r(), _ = "boolean" != typeof e.transfer_recovery_enabled_by_default || e.transfer_recovery_enabled_by_default, p = (0, s.Zz)(n.type === g.aG.LINK, n.downloaderEmailVerification);
                        t({
                            type: R.TRANSFER_INIT,
                            userType: h({
                                user: i,
                                channel: c,
                                transferFromState: n
                            }),
                            transferType: n.type,
                            feature: n.feature,
                            accountId: l.id,
                            channelName: n.channel,
                            expiry: n.expiry,
                            isRecoverable: _,
                            requestId: n.requestId,
                            defaultProExpiry: d.i.DAYS_30_IN_SECONDS,
                            defaultFreeExpiry: d.i.DAYS_7_IN_SECONDS,
                            recipients: u.A.isDefaultRecipientInUploadLocked({
                                channelDefaultRecipient: c.defaultRecipient,
                                userLoggedIn: i.loggedIn,
                                channelName: c.name,
                                accountSubDomainName: l.subdomain_name
                            }) ? n.recipients : [],
                            sender: n.sender,
                            downloaderEmailVerification: p,
                            viewOption: o._9.PREVIEW_AND_DOWNLOAD,
                            allowComments: null != (a = n.allowComments) && a
                        })
                    }
                },
                verifiedPassword: e => t => {
                    t({
                        type: R.TRANSFER_CHANGE_PASSWORD,
                        password: e
                    })
                },
                setSender: e => (t, r) => {
                    if (!e.replace(m.Fw, "")) return t({
                        type: R.TRANSFER_SET_SENDER,
                        email: ""
                    }), t(A.P.setTransferNotification({
                        text: "MissingSender"
                    }));
                    if (!u.A.validateEmail(e)) {
                        t({
                            type: R.TRANSFER_SET_SENDER,
                            email: ""
                        });
                        let {
                            notification: e
                        } = r();
                        if ("TipSenderRequireVerification" === n()(e, "transfer.text")) return;
                        return t(A.P.setTransferNotification({
                            text: "InvalidSender"
                        }))
                    }
                    return t(A.P.clearTransferNotification()), t({
                        type: R.TRANSFER_SET_SENDER,
                        email: e
                    })
                },
                setMessage: e => unescape(encodeURIComponent(e)).length > m.lN ? A.P.setTransferNotification({
                    text: "MessageTooLarge"
                }) : {
                    type: R.TRANSFER_SET_MESSAGE,
                    message: e
                },
                setDisplayName: e => ({
                    type: R.TRANSFER_SET_DISPLAY_NAME,
                    displayName: e
                }),
                addRecipient(e, t) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.j.MANUAL;
                    return (a, n) => {
                        let {
                            transfer: i
                        } = n(), o = [...new Set(e.replace(/^\s+|\s+$/g, "").replace(/\s+/g, " ").split(/\s*,\s*|\s*;\s*|\s+/).filter(e => !!e.match(m.QS)).map(e => e.toLocaleLowerCase()))].map(e => {
                            let t = e.match(m.QS);
                            return t[3] ? t[3] : t[6]
                        });
                        return i.recipients.length + o.length > t ? a(A.P.setTransferNotification({
                            text: "TooManyRecipients"
                        })) : e.replace(m.Fw, "") || 0 !== o.length ? !u.A.validateEmail(e) && o.length <= 1 ? a(A.P.setTransferNotification({
                            text: "InvalidRecipient"
                        })) : (a(A.P.clearTransferNotification()), a({
                            type: R.TRANSFER_ADD_RECIPIENT,
                            emails: o,
                            method: r
                        })) : a(A.P.setTransferNotification({
                            text: "MissingRecipients"
                        }))
                    }
                }
            })
        },
        63758: (e, t, r) => {
            r.d(t, {
                Is: () => i
            });
            var a = r(96361),
                n = r(72590);
            let i = (0, a.Z0)({
                    name: "funnelTracking",
                    initialState: {
                        funnelIds: {}
                    },
                    reducers: {
                        initFunnelId: (e, t) => {
                            e.funnelIds[t.payload] = (0, n.A)()
                        },
                        clearFunnelId: (e, t) => {
                            delete e.funnelIds[t.payload]
                        }
                    }
                }),
                {
                    initFunnelId: o,
                    clearFunnelId: s
                } = i.actions;
            i.reducer
        },
        64567: (e, t, r) => {
            r.d(t, {
                V: () => l,
                z: () => d
            });
            var a = r(18713),
                n = r(24932),
                i = r(28338),
                o = r(97197),
                s = r(52458);
            let l = "grace_period";

            function d(e) {
                var t, r;
                let d, {
                    transfer: c,
                    deliverableId: u,
                    shouldUseGracePeriodSegment: _,
                    isBackgroundAdFromDaciaCampaign: p = !1,
                    experimentIds: E = [],
                    isUserLoggedIn: f = !0,
                    allowAnonymousTransfer: A = !1,
                    bypassExpirationEntitlement: T = !1,
                    isAnticipatedUploadStarted: m = !1,
                    isPasswordlessAnticipatedUploadEnabled: S = !1
                } = e;
                c.files && (d = (0, s.J)(c));
                let g = {
                    message: d.message,
                    passwordless: !0,
                    from: d.sender
                };
                p && (g.segment_id = "dacia"), _ && (g.segment_id = l);
                let R = (0, n.I)();
                null !== R && (g.lsid = R), d.type === o.aG.EMAIL && (g.recipients = d.recipients), d.type === o.aG.LINK && "number" == typeof(null == (t = c.price) ? void 0 : t.amount) && (g.price = c.price.amount, g.currency = c.price.currency), d.type === o.aG.LINK && !f && A && (g.anonymous_transfer = !0), !f && S && m && (g.anonymous_transfer = !0, g.from = "placeholder@wetransfer.com"), d.displayName && (g.display_name = d.displayName), d.channel && (g.channel = d.channel), d.language && (g.ui_language = d.language), d.domainUserId && (g.domain_user_id = d.domainUserId), d.parent_id ? g.parent_id = d.parent_id : g.files = d.files.map(e => ({
                    name: e.name,
                    size: e.size,
                    item_type: e.apiType
                })), d.accountId && (g.account_id = d.accountId), d.spaceId && (g.project_id = d.spaceId), d.password && (g.password = d.password), g.expire_in = d.expiry, d.isRecoverable && (g.extended_expiry_date = parseInt(d.extendedExpiryDate)), u && (g.deliverable_id = u), d.downloaderEmailVerification && (g.downloader_email_verification = d.downloaderEmailVerification), d.type === o.aG.LINK && d.downloaderEmailVerification === i.B.RESTRICTED && (null == (r = d.allowlist) ? void 0 : r.length) > 0 && (g.allowlist = d.allowlist), d.viewOption && (g.view_option = d.viewOption), void 0 !== d.allowComments && (g.allow_comments = d.allowComments), E.length > 0 && (g.experiment_ids = E);
                let h = [];
                return T && h.push("delete_exp"), h.length > 0 && (g.flags = h), d.signatureTransfer && (g.signature_transfer = d.signatureTransfer, d.signatureTransfer === a.OJ.SIGNER && d.editor_transfer_id && (g.editor_transfer_id = d.editor_transfer_id), d.signatureTransfer === a.OJ.EDITOR && d.recipients && d.recipients.length > 1 && (g.signature_mode = a.Qo.MULTI_SIGNER)), g
            }
        },
        65370: (e, t, r) => {
            r.d(t, {
                C8: () => i,
                Cx: () => o,
                KD: () => s,
                LG: () => l
            });
            var a = r(96361),
                n = r(84870);
            let i = (0, a.Z0)({
                    name: "programmaticAd",
                    initialState: {
                        requestedPosition: null,
                        loadedSlots: {
                            mrec: null,
                            banner: null
                        }
                    },
                    reducers: {
                        setRequestedPosition(e, t) {
                            e.requestedPosition = t.payload, n.lD.log("Programmatic \uD83D\uDCCD Redux: Requested position set to ".concat(t.payload))
                        },
                        setLoadedSlot(e, t) {
                            e.loadedSlots[t.payload.placement] = {
                                slot: t.payload.slot,
                                position: t.payload.position
                            }, n.lD.log("Programmatic \uD83D\uDCE6 Redux: Loaded slot for ".concat(t.payload.placement, " at position ").concat(t.payload.position, ": ").concat(t.payload.slot))
                        },
                        clearLoadedSlot(e, t) {
                            e.loadedSlots[t.payload] = null, n.lD.log("Programmatic \uD83D\uDDD1️ Redux: Cleared loaded slot for ".concat(t.payload))
                        }
                    }
                }),
                {
                    setRequestedPosition: o,
                    setLoadedSlot: s,
                    clearLoadedSlot: l
                } = i.actions
        },
        65509: (e, t, r) => {
            r.d(t, {
                A: () => c
            });
            var a = r(12062);
            let n = (0, a.A)({
                    getAccount: {
                        path: "/api/v4/accounts/{accountId}",
                        method: "GET",
                        pathExt: !0
                    },
                    editAccount: {
                        path: "/api/v4/accounts/{accountId}",
                        pathExt: !0,
                        method: "PUT"
                    },
                    createSubdomain: {
                        path: "/api/v4/accounts/{accountId}/subdomains",
                        pathExt: !0,
                        method: "POST"
                    },
                    validate: {
                        path: "/api/v4/accounts/validate",
                        method: "POST"
                    },
                    validateSubdomain: {
                        path: "/api/v4/accounts/subdomains/validate",
                        method: "POST"
                    },
                    uploadWallpaper: {
                        path: "/api/v4/images/thumbs/wallpapers",
                        method: "POST"
                    },
                    uploadEmailBackground: {
                        path: "/api/v4/images/thumbs/email_backgrounds",
                        method: "POST"
                    }
                }),
                i = (0, a.A)({
                    validateUpgrade: {
                        path: "/api/v4/nu_subscriptions/billing-information/validate",
                        method: "POST",
                        pathExt: !0
                    }
                }),
                o = (0, a.A)({
                    unsubscribeExpiration: {
                        path: "/api/v4/transfers/opted_out_expiration_reminder",
                        method: "POST"
                    }
                }),
                s = (0, a.A)({
                    getTransfers: {
                        path: "/api/v4/transfers",
                        method: "GET"
                    },
                    deleteTransfer: {
                        path: "/api/v4/transfers/{transferId}",
                        pathExt: !0,
                        method: "DELETE"
                    },
                    deleteMultipleTransfers: {
                        path: "/api/v4/transfers/batch",
                        method: "POST"
                    },
                    getTransfer: {
                        path: "/api/v4/transfers/{transferId}",
                        pathExt: !0,
                        method: "GET"
                    },
                    updateTransfer: {
                        path: "/api/v4/transfers/{transferId}",
                        pathExt: !0,
                        method: "PUT"
                    },
                    scanForMalware: {
                        path: "/api/v4/transfers/{transferId}/scan-malware",
                        pathExt: !0,
                        method: "POST"
                    },
                    checkRecipientEmail: {
                        path: "/api/v4/transfers/{transferId}/check-recipient-email",
                        pathExt: !0,
                        method: "POST"
                    }
                }),
                l = (0, a.A)({
                    getReceivedTransfers: {
                        path: "/api/v4/received-transfers",
                        method: "GET"
                    },
                    getReceivedTransferById: {
                        path: "/api/v4/received-transfers/{transferId}",
                        pathExt: !0,
                        method: "GET"
                    }
                }),
                d = (0, a.A)({
                    getAssetUploadPresignedForm: {
                        path: "/api/v4/user-uploaded-assets/presigned-form"
                    },
                    allocateAsset: {
                        path: "/api/v4/user-uploaded-assets/preallocate",
                        method: "POST"
                    },
                    allocateCuratedImage: {
                        path: "/api/v4/user-uploaded-assets/preallocate-curated",
                        method: "POST"
                    }
                }),
                c = {
                    User: r(11732).A,
                    Account: n,
                    Transfers: s,
                    TransfersReceived: l,
                    Reminder: o,
                    UI: d,
                    BillingDetails: i
                }
        },
        66976: (e, t, r) => {
            r.r(t), r.d(t, {
                configureMockStore: () => eG,
                default: () => ez,
                initialState: () => eW
            });
            var a = r(61325),
                n = r(67739),
                i = r(75600),
                o = r(74452),
                s = r(1568);
            let l = {
                isInitialized: !1,
                isLoggedIn: !1,
                isLoading: !0,
                auth0UserId: "",
                isPasswordless: !1
            };
            var d = r(11707),
                c = r(44240),
                u = r(32136),
                _ = r(98463),
                p = r(11076),
                E = r(56264),
                f = r(10861),
                A = r(17198),
                T = r(49309),
                m = r(87963),
                S = r(87682);
            let g = {
                emailToAddressAdded(e) {
                    let {
                        emailTo: t,
                        method: r
                    } = e, a = function(e) {
                        switch (e) {
                            case S.j.AUTOCOMPLETE:
                            case S.j.CONTACT_LIST:
                                return "contact_used";
                            default:
                                return
                        }
                    }(r), n = function(e) {
                        switch (e) {
                            case S.j.AUTOCOMPLETE:
                                return "contact_used_autocompleted";
                            case S.j.CONTACT_LIST:
                                return "contact_used_added";
                            default:
                                return
                        }
                    }(r), i = function(e) {
                        switch (e) {
                            case S.j.AUTOCOMPLETE:
                                return "transfer_window";
                            case S.j.CONTACT_LIST:
                                return "contacts_page";
                            default:
                                return
                        }
                    }(r);
                    return {
                        kind: "transfer_email_to_address_added",
                        info: {
                            emailTo: t,
                            method: r,
                            ...a && {
                                snowplowCategory: a
                            },
                            ...n && {
                                snowplowAction: n
                            },
                            ...i && {
                                snowplowLabel: i
                            }
                        }
                    }
                }
            };
            var R = r(63306);
            let h = e => t => r => {
                    if (r.type === R.o1.TRANSFER_ADD_RECIPIENT) {
                        let a = e.getState().transfer.recipients,
                            n = t(r);
                        return e.getState().transfer.recipients.filter(e => !a.includes(e)).forEach(e => {
                            (0, m.Od)().trackUserAction(g.emailToAddressAdded({
                                emailTo: e,
                                method: r.method
                            }))
                        }), n
                    }
                    return t(r)
                },
                y = {
                    sessionDataMembershipReceived(e) {
                        let {
                            membership: t
                        } = e;
                        return {
                            kind: "session_data_membership_received",
                            info: {
                                id: t.id,
                                team_id: t.team_id,
                                role: t.role,
                                storage_full: t.storage_full,
                                account_id: t.account.id,
                                active_subscription: t.account.active_subscription,
                                oldest_transfer_past_30_days: JSON.stringify(t.account.oldest_transfer_past_30_days),
                                subscription: {
                                    id: t.account.subscription.id,
                                    ends_at: t.account.subscription.ends_at,
                                    status: t.account.subscription.status,
                                    payment_method: t.account.subscription.payment_method || "null",
                                    interval: t.account.subscription.interval
                                },
                                revenue_cat_user_id: t.account.revenue_cat_user_id
                            }
                        }
                    }
                };
            var w = r(95467);
            let I = {
                    user: e => {
                        let {
                            id: t,
                            full_name: r,
                            given_name: a,
                            family_name: n,
                            email: i,
                            language: o,
                            default_allow_comments: s,
                            transfer_default_expire_in: l,
                            plan_tier: d,
                            default_recipient_email: c,
                            is_verified: u,
                            skipped_verification: _,
                            has_skipped_verification: p,
                            has_profile_picture: E,
                            onboarded: f,
                            otp_enabled: A,
                            otp_enabled_at: T,
                            email_marketing_opted_in: m,
                            email_marketing_opt_in_seen_at: S,
                            created_at: g,
                            is_business_user: R,
                            default_downloader_email_verification_transfers: h,
                            marketing_consent: y,
                            marketing_consent_updated_at: w
                        } = e, I = {
                            id: t,
                            given_name: a || r || "",
                            family_name: n || "",
                            email: i,
                            language: o,
                            loggedIn: t,
                            preferences: {
                                transfer_default_expire_in: l,
                                transfer_default_allow_comments: null != s && s,
                                onboarded: f,
                                transfer_default_downloader_email_verification: h,
                                transfer_notify_sender_on_upload_success: !0,
                                transfer_notify_sender_on_link_download: !0
                            },
                            planTier: d,
                            rules: {
                                maximumNumberOfFiles: 65536
                            },
                            default_recipient_email: c || "",
                            hasProfilePicture: E,
                            hasSkippedVerification: _ || p,
                            isVerified: !0 === u,
                            otpEnabled: A,
                            otpEnabledAt: T,
                            hasEmailMarketing: !0 === m,
                            hasSeenMarketingOptIn: null !== S,
                            created_at: g,
                            isBusinessUser: R,
                            hasMarketingConsent: y,
                            marketingConsentUpdatedAt: w,
                            profile_picture: e.profile_picture || null
                        };
                        return e.memberships && e.memberships[0] && (I.memberships = e.memberships, I.storageFull = !!e.memberships[0].storage_full), I
                    },
                    account(e) {
                        let t = null;
                        return e.email_background && (t = e.email_background), {
                            ...e,
                            email_background: t
                        }
                    }
                },
                v = () => e => t => {
                    if (t.type === w.actions.GET_USER) {
                        let {
                            memberships: e
                        } = I.user(t.details);
                        (null == e ? void 0 : e[0]) && (0, m.Od)().trackUserAction(y.sessionDataMembershipReceived({
                            membership: null == e ? void 0 : e[0]
                        }))
                    }
                    return e(t)
                };

            function N() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = [u.A, h, v, T.L.middleware, f.l.middleware, _.K.middleware, p.WJ.middleware, E.jt.middleware, A.f.middleware],
                    a = c.Zz,
                    n = (0, c.y$)((0, c.HY)(t), e, a((0, c.Tw)(...r)));
                return n.asyncReducers = {}, n.injectReducer = (e, r) => {
                    var a;
                    n.asyncReducers[e] = r, n.replaceReducer((a = n.asyncReducers, (0, c.HY)({
                        ...t,
                        ...a
                    })))
                }, n
            }
            var O = r(12790),
                P = r(46966),
                L = r(50808),
                D = r(88848),
                C = r(2269),
                U = r(37672),
                k = r(96361),
                b = r(32799),
                F = r(33762);
            let M = {
                    links: {
                        [b.Hj.LINKEDIN]: {
                            value: "",
                            valid: !1,
                            firstTouch: !0
                        },
                        [b.Hj.X]: {
                            value: "",
                            valid: !1,
                            firstTouch: !0
                        },
                        [b.Hj.INSTAGRAM]: {
                            value: "",
                            valid: !1,
                            firstTouch: !0
                        },
                        [b.Hj.TIKTOK]: {
                            value: "",
                            valid: !1,
                            firstTouch: !0
                        },
                        [b.Hj.FACEBOOK]: {
                            value: "",
                            valid: !1,
                            firstTouch: !0
                        }
                    }
                },
                x = (0, k.Z0)({
                    name: "socialLinksInputs",
                    initialState: M,
                    reducers: {},
                    extraReducers: e => {
                        e.addCase(F.I, (e, t) => {
                            let {
                                platform: r,
                                value: a
                            } = t.payload;
                            e.links[r].value = a
                        }), e.addCase(F.a, (e, t) => {
                            let {
                                platform: r,
                                valid: a,
                                firstTouch: n
                            } = t.payload;
                            e.links[r].valid = a, e.links[r].firstTouch = n
                        })
                    }
                });
            var B = r(20776),
                W = r(92003),
                z = r(98175),
                G = r(68018),
                V = r(58155),
                H = r(63758),
                j = r(15066),
                Y = r(92633),
                K = r(21848),
                q = r(65370),
                Q = r(21301),
                X = r(27023),
                J = r(82261);
            let Z = r(49835).d.reducer;
            var $ = r(33061),
                ee = r(6596);
            let et = r(9127).y.reducer;
            var er = r(55258);
            let ea = r(24433).a.reducer;
            var en = r(68081),
                ei = r(91010),
                eo = r(12155),
                es = r(82667),
                el = r(32091),
                ed = r(55786),
                ec = r(10694),
                eu = r(97197),
                e_ = r(52458),
                ep = r(91345);
            let eE = e => t => t.id === e;
            var ef = r(39483),
                eA = r(88797);
            let eT = {
                progress: {
                    remainingTime: null,
                    lastUpdate: null,
                    bytesSentSoFar: 0,
                    progressBytesSentSoFar: 0,
                    bytesPerSecondLog: [],
                    duration: 0,
                    total: 0
                }
            };
            var em = r(57912),
                eS = r(11927),
                eg = r.n(eS),
                eR = r(39623);
            let eh = {
                isPending: !1
            };
            var ey = r(27498),
                ew = r(53155);
            let eI = {
                isLoaded: !1,
                list: []
            };
            var ev = r(6481);
            let eN = {
                isLoaded: !1,
                list: []
            };
            var eO = r(53289);
            let eP = {
                uploader: {
                    options: {
                        visible: !1
                    },
                    shouldResetScroll: !1
                },
                showConsentWallPreferences: !1
            };
            var eL = function(e) {
                return e.SET_TIER_USER = "@WEDEBUG/SET_TIER_USER", e
            }(eL || {});
            let eD = {
                adWallpaper: P.sJ.reducer,
                banner: W.lZ.reducer,
                roktAd: O.A8.reducer,
                programmaticAd: q.C8.reducer,
                channel: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        {
                            type: r
                        } = t;
                    switch (r) {
                        case em.o.ACCOUNT_UPDATE_SUCCESS: {
                            let r = I.account(t.details);
                            return {
                                ...e,
                                defaultRecipient: r.default_recipient_email
                            }
                        }
                        case eR.TH.SET_WORKSPACE_ID:
                            return {
                                ...e, workspaceId: t.payload
                            };
                        case eR.TH.SET_WALLPAPERS:
                            return {
                                ...e, wallpapers: eg()(t.wallpapers)
                            };
                        case eR.TH.SET_PREVIEWS_WALLPAPERS:
                            return {
                                ...e, previewsWallpapers: eg()(t.wallpapers)
                            };
                        case eR.TH.SET_CHANNEL_TITLE:
                            return {
                                ...e, title: t.payload
                            }
                    }
                    return e
                },
                download: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh,
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        {
                            type: r
                        } = t;
                    switch (r) {
                        case R.o1.DOWNLOAD_PENDING:
                            return {
                                ...e, isPending: !0, error: null, completed: !1
                            };
                        case R.o1.DOWNLOAD_SUCCESS:
                            return {
                                ...e, isPending: !1, error: null, completed: !1
                            };
                        case R.o1.DOWNLOAD_COMPLETED_SUCCESS:
                            return {
                                ...e, isPending: !1, error: null, completed: !0
                            };
                        case R.o1.DOWNLOAD_ERROR:
                            return {
                                ...e, isPending: !1, error: t.error || "Download failed", errorType: t.errorType || "DOWNLOAD_UNKNOWN_ERROR", completed: !1
                            };
                        case R.o1.TRANSFER_RESET_DOWNLOAD:
                            return {
                                ...e, isPending: !1, error: null, errorType: null, completed: !1
                            }
                    }
                    return e
                },
                errors: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        {
                            type: r,
                            form: a,
                            errors: n,
                            key: i
                        } = t;
                    switch (r) {
                        case ey.o.ERROR_SET:
                            return {
                                ...e, [a]: n
                            };
                        case ey.o.ERROR_RESET:
                            return e[a] && delete e[a][i], {
                                ...e
                            };
                        case ey.o.ERRORS_FORM_RESET:
                            return delete e[a], {
                                ...e
                            }
                    }
                    return e
                },
                layout: Z,
                notification: et,
                pending: G.CP.reducer,
                route: ea,
                session: en.hv.reducer,
                transfer: function() {
                    var e, t;
                    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        a = arguments.length > 1 ? arguments[1] : void 0,
                        {
                            type: n
                        } = a;
                    switch (n) {
                        case R.o1.TRANSFER_INIT: {
                            ep.A.resetFilenameCounter();
                            let t = a.userType || "free";
                            return {
                                channel: a.channelName || null,
                                domainUserId: a.domainUserId || null,
                                expiry: a.expiry,
                                isRecoverable: a.isRecoverable || !1,
                                files: a.files || [],
                                feature: a.feature || eu.xA.TRANSFER,
                                id: a.id || !1,
                                items: a.items || [],
                                itemsTree: a.itemsTree || eo.vN(),
                                language: a.language || "en",
                                message: a.message || "",
                                parent_id: a.parentId || !1,
                                password: a.password || null,
                                password_protected: a.password_protected || !1,
                                recipients: a.recipients || [],
                                sender: a.sender || "",
                                shortURL: a.shortURL || null,
                                state: a.state || ec.r.INIT,
                                type: a.transferType || eu.aG.EMAIL,
                                userType: t,
                                uploadStartedAt: a.uploadStartedAt || 0,
                                displayName: a.displayName || "",
                                paid: a.paid,
                                requestId: a.requestId || null,
                                price: a.price,
                                seller: a.seller,
                                workspaceId: a.workspaceId,
                                workspaceTier: a.workspaceTier,
                                viewOption: a.viewOption,
                                allowComments: null != (e = a.allowComments) && e,
                                ...a.spaceId ? {
                                    spaceId: a.spaceId
                                } : {},
                                ...a.secret ? {
                                    secret: a.secret
                                } : {},
                                ...a.recipientId ? {
                                    recipient_id: a.recipientId
                                } : {},
                                ...a.accountId ? {
                                    accountId: a.accountId
                                } : {},
                                ...a.editorTransferId ? {
                                    editor_transfer_id: a.editorTransferId
                                } : {},
                                ...a.expiryInSeconds || 0 === a.expiryInSeconds ? {
                                    expiryInSeconds: a.expiryInSeconds
                                } : {},
                                ...a.extendedExpiryInSeconds ? {
                                    extendedExpiryInSeconds: a.extendedExpiryInSeconds
                                } : {},
                                ...a.deletedAt ? {
                                    deletedAt: a.deletedAt
                                } : {},
                                ...a.downloaderEmailVerification ? {
                                    downloaderEmailVerification: a.downloaderEmailVerification
                                } : {},
                                ...a.signatureTransfer ? {
                                    signatureTransfer: a.signatureTransfer
                                } : {},
                                ...a.experimentIds ? {
                                    experimentIds: a.experimentIds
                                } : {},
                                resumeUploadInProgress: !!a.resumeUploadInProgress,
                                resumeUploadAttempts: 0
                            }
                        }
                        case R.o1.TRANSFER_RECOVER:
                            return {
                                ...r, state: a.state || ec.r.INIT, expiryInSeconds: a.expiryInSeconds, recovered: !0
                            };
                        case R.o1.TRANSFER_CHANGE_FEATURE:
                            return {
                                ...r, feature: a.feature
                            };
                        case R.o1.TRANSFER_CHANGE_TYPE:
                            return {
                                ...r, type: a.transferType
                            };
                        case R.o1.TRANSFER_CHANGE_EXPIRY: {
                            let e = {
                                    ...r,
                                    expiry: a.period
                                },
                                t = (0, es.f)({
                                    transferExpiry: a.period,
                                    currentSize: e.size || 0,
                                    isRecoverable: e.isRecoverable || !1
                                });
                            return t ? e.extendedExpiryDate = t.toString() : e.extendedExpiryDate = void 0, e
                        }
                        case R.o1.TRANSFER_CHANGE_DOWNLOADER_EMAIL_VERIFICATION:
                            return {
                                ...r, downloaderEmailVerification: a.downloaderEmailVerification
                            };
                        case ed.rh.type:
                            return {
                                ...r, viewOption: a.payload
                            };
                        case ed.sZ.type:
                            return {
                                ...r, allowComments: a.payload
                            };
                        case ed.ML.type:
                            return {
                                ...r, allowlist: a.payload
                            };
                        case R.o1.TRANSFER_CHANGE_RECOVERABLE:
                            return {
                                ...r, isRecoverable: a.isRecoverable
                            };
                        case R.o1.TRANSFER_CHANGE_PASSWORD:
                            return {
                                ...r, password: a.password
                            };
                        case R.o1.TRANSFER_SET_SENDER:
                            return {
                                ...r, sender: a.email
                            };
                        case R.o1.TRANSFER_SET_MESSAGE:
                            return {
                                ...r, message: a.message
                            };
                        case R.o1.TRANSFER_SET_REQUEST_ID:
                            return {
                                ...r, requestId: a.requestId
                            };
                        case R.o1.TRANSFER_SET_RECIPIENT:
                            return {
                                ...r, recipients: [a.email]
                            };
                        case R.o1.TRANSFER_ADD_RECIPIENT:
                            return {
                                ...r, recipients: [...new Set([...r.recipients, ...a.emails])]
                            };
                        case R.o1.TRANSFER_ADD_FILES: {
                            let {
                                files: e,
                                items: t,
                                itemsTree: n,
                                size: i
                            } = (0, e_.J)({
                                ...r,
                                files: [...r.files, ...a.files]
                            });
                            return {
                                ...r,
                                files: e,
                                items: t,
                                itemsTree: n,
                                size: i
                            }
                        }
                        case R.o1.TRANSFER_REMOVE_FILE: {
                            let {
                                files: e,
                                items: t,
                                itemsTree: n,
                                size: i
                            } = (0, e_.J)({
                                ...r,
                                files: r.files.filter(e => e.name !== a.fileName)
                            });
                            return {
                                ...r,
                                files: e,
                                items: t,
                                itemsTree: n,
                                size: i
                            }
                        }
                        case R.o1.TRANSFER_REMOVE_DIRECTORY: {
                            let e = a.directoryName,
                                t = "".concat(e, "/"),
                                {
                                    files: n,
                                    items: i,
                                    itemsTree: o,
                                    size: s
                                } = (0, e_.J)({
                                    ...r,
                                    files: r.files.filter(r => r.name !== e && !r.name.startsWith(t))
                                });
                            return {
                                ...r,
                                files: n,
                                items: i,
                                itemsTree: o,
                                size: s
                            }
                        }
                        case R.o1.TRANSFER_REMOVE_ALL_ITEMS: {
                            let {
                                files: e,
                                items: t,
                                itemsTree: a,
                                size: n
                            } = (0, e_.J)({
                                ...r,
                                files: []
                            });
                            return {
                                ...r,
                                files: e,
                                items: t,
                                itemsTree: a,
                                size: n
                            }
                        }
                        case R.o1.TRANSFER_REMOVE_RECIPIENT:
                            return {
                                ...r, recipients: r.recipients.filter(e => e !== a.email)
                            };
                        case R.o1.TRANSFER_REMOVE_ALL_RECIPIENTS:
                            return {
                                ...r, recipients: []
                            };
                        case R.o1.TRANSFER_RESET:
                            return {
                                ...r, id: !1, state: ec.r.INIT, resumeUploadAttempts: 0
                            };
                        case R.o1.TRANSFER_START:
                            break;
                        case R.o1.TRANSFER_STATE_DOWNLOADABLE:
                            return {
                                ...r, state: ec.r.DOWNLOADABLE
                            };
                        case R.o1.TRANSFER_STATE_DOWNLOAD_STARTING:
                            return {
                                ...r, state: ec.r.DOWNLOADING
                            };
                        case R.o1.TRANSFER_STATE_FINISHED:
                            return {
                                ...r, state: ec.r.FINISHED
                            };
                        case R.o1.RECAPTCHA_CHALLENGE_RECEIVED:
                            return {
                                ...r, id: a.transfer_id, state: ec.r.RECAPTCHA
                            };
                        case R.o1.UPLOAD_ERROR:
                            if ([ei.A.LIMIT_REACHED, ei.A.USER_BLOCKED, ei.A.UNAVAILABLE_PARENT, ei.A.TOO_MANY_TRANSFERS, ei.A.FIREWALL_BLOCKED, ei.A.NETWORK_ERROR, ei.A.INCOMPLETE_UPLOAD, ei.A.SERVER_ERROR, ei.A.FILESYSTEM_ERROR, ei.A.TEAM_POLICY_PASSWORD_REQUIRED, ei.A.TEAM_POLICY_LINK_BLOCKED, ei.A.DOCUMENT_ALREADY_SIGNED, ei.A.ONLY_TEAM_MEMBERS_CAN_UPLOAD].includes(a.error)) return {
                                ...r,
                                lastError: a.error
                            };
                            break;
                        case R.o1.TRANSFER_STATE_DOWNLOAD_STARTING_FILE:
                            r.items.find(e => e.id === a.file_id).file.state.download = "downloading";
                            break;
                        case R.o1.TRANSFER_STATE_FINISHED_FILE:
                            r.items.find(e => e.id === a.file_id).file.state.download = "done";
                            break;
                        case R.o1.TRANSFER_RESET_DOWNLOAD:
                            return {
                                ...r, state: ec.r.DOWNLOADABLE
                            };
                        case R.o1.TRANSFER_DOWNLOAD_INVALID:
                            return {
                                ...r, state: ec.r.INVALID
                            };
                        case R.o1.TRANSFER_DOWNLOAD_EXPIRED:
                            return {
                                ...r, state: ec.r.EXPIRED
                            };
                        case w.actions.GET_USER:
                            if (r.state === ec.r.INIT && (null == a || null == (t = a.details) ? void 0 : t.is_verified) === !1) return {
                                ...r,
                                state: ec.r.VERIFY_ACCOUNT
                            };
                            break;
                        case K.e4.UPDATE_SYNC:
                            if (void 0 !== a.updates.verified_at) return {
                                ...r,
                                state: ec.r.VERIFY_ACCOUNT_SUCCESS
                            };
                            break;
                        case R.o1.PREVIEW_LOADING: {
                            let e = r.items.findIndex(eE(a.file_id)),
                                t = r.items[e];
                            return t.file.state.error = !1, t.file.state.loaded = !1, t.file.previewUri = a.file_url, {
                                ...r
                            }
                        }
                        case R.o1.PREVIEW_LOADED: {
                            let e = r.items.findIndex(eE(a.file_id)),
                                t = r.items[e];
                            return t.file.state.error = !1, t.file.state.loaded = !0, {
                                ...r
                            }
                        }
                        case R.o1.UPLOAD_NEED_VERIFICATION:
                            return {
                                ...r, verification_required: !0
                            };
                        case R.o1.UPLOAD_VERIFIED:
                            return {
                                ...r, verification_required: !1
                            };
                        case R.o1.TRANSFER_RESET_VERIFICATION_REQUIRED:
                            return {
                                ...r, verification_required: void 0
                            };
                        case R.o1.SHOW_TRANSFER_OPTIONS_TOOLTIP:
                            return {
                                ...r, showTransferOptionsTooltip: !0
                            };
                        case R.o1.PREVIEW_ERROR: {
                            let e = r.items.findIndex(eE(a.file_id)),
                                t = r.items[e];
                            t.file.state.error = !0, t.file.state.loaded = !1, t.file.previewUri = null;
                            break
                        }
                        case R.o1.TRANSFER_SET_LANGUAGE:
                            return {
                                ...r, language: a.language
                            };
                        case R.o1.TRANSFER_SET_DOMAIN_USER_ID:
                            return {
                                ...r, domainUserId: a.domainUserId
                            };
                        case R.o1.TRANSFER_SET_CHANNEL:
                            return {
                                ...r, channel: a.channel
                            };
                        case R.o1.TRANSFER_SET_STATE:
                            return {
                                ...r, state: a.state
                            };
                        case R.o1.TRANSFER_SET_RESUME_UPLOAD_IN_PROGRESS:
                            return {
                                ...r, resumeUploadInProgress: !!a.inProgress
                            };
                        case R.o1.TRANSFER_SET_RESUME_UPLOAD_ATTEMPTS:
                            return {
                                ...r, resumeUploadAttempts: Number(a.attempts || 0)
                            };
                        case R.o1.TRANSFER_SET_EXPIRY_IN_SECONDS:
                            if ("number" != typeof a.expiryInSeconds) break;
                            return {
                                ...r, expiryInSeconds: a.expiryInSeconds
                            };
                        case R.o1.TRANSFER_SET_SHORT_URL:
                            return {
                                ...r, shortURL: a.shortURL
                            };
                        case R.o1.TRANSFER_SET_ID:
                            return {
                                ...r, id: a.id
                            };
                        case R.o1.TRANSFER_SET_STORM_UPLOAD_TOKEN:
                            return {
                                ...r, stormUploadToken: a.stormUploadToken
                            };
                        case R.o1.TRANSFER_SET_RESUME_TOKEN:
                            return {
                                ...r, resumeToken: a.resumeToken
                            };
                        case R.o1.TRANSFER_SET_DISPLAY_NAME:
                            return {
                                ...r, displayName: a.displayName
                            };
                        case R.o1.TRANSFER_SET_SECURITY_HASH:
                            return {
                                ...r, securityHash: a.securityHash
                            };
                        case R.o1.TRANSFER_SET_SIGNATURE:
                            return {
                                ...r, signature: a.signature
                            };
                        case R.o1.TRANSFER_SET_UPLOAD_STARTED_AT:
                            return {
                                ...r, uploadStartedAt: a.uploadStartedAt, monotonicStartTime: a.monotonicStartTime
                            };
                        case R.o1.TRANSFER_SET_TRACKING_ID:
                            return {
                                ...r, trackingId: a.trackingId
                            };
                        case el.H.type: {
                            let {
                                amount: e,
                                currency: t
                            } = a.payload;
                            return {
                                ...r,
                                price: {
                                    amount: e,
                                    currency: t
                                }
                            }
                        }
                    }
                    return r
                },
                transfers: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI,
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        {
                            type: r
                        } = t;
                    switch (r) {
                        case ew.o1.TRANSFERS_SUCCESS:
                            return {
                                ...e, list: t.list.map(e_.J), isLoaded: !0
                            };
                        case ew.o1.GET_TRANSFER_SUCCESS:
                            return {
                                ...e, transfer: (0, e_.J)(t.transfer)
                            };
                        case ew.o1.DOWNLOAD_TRANSFER_SUCCESS:
                            if (!e.transfer) break;
                            return {
                                ...e, transfer: {
                                    ...e.transfer,
                                    number_of_downloads: e.transfer.number_of_downloads + 1
                                }
                            };
                        case ew.o1.TRANSFERS_RESET_TRANSFER:
                            return {
                                ...e, transfer: null
                            };
                        case ew.o1.TRANSFERS_RESET_LIST_LOADED:
                            return {
                                ...e, isLoaded: !1
                            }
                    }
                    return e
                },
                transfersReceived: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eN,
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        {
                            type: r
                        } = t;
                    return r === ev.o.RECEIVED_TRANSFERS_SUCCESS ? {
                        ...e,
                        list: t.list.map(e_.J),
                        isLoaded: !0
                    } : r === ev.o.GET_RECEIVED_TRANSFER_SUCCESS ? {
                        ...e,
                        transfer: (0, e_.J)(t.transfer)
                    } : r === ev.o.RECEIVED_TRANSFERS_RESET_TRANSFER ? {
                        ...e,
                        transfer: null
                    } : e.isLoaded && r === R.o1.TRANSFER_STATE_DOWNLOADING && t.transferId ? {
                        ...e,
                        list: e.list.map(e => e.transfer && e.recipient && !1 === e.recipient.transfer_downloaded && e.transfer.id === t.transferId ? {
                            ...e,
                            recipient: {
                                ...e.recipient,
                                transfer_downloaded: !0
                            }
                        } : e)
                    } : e
                },
                upload: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        {
                            type: r
                        } = t;
                    switch (r) {
                        case R.o1.UPLOAD_PENDING:
                            return delete e.error, {
                                ...e,
                                isPending: !0
                            };
                        case R.o1.UPLOAD_ERROR_RESET:
                            return delete e.error, {
                                ...e
                            };
                        case R.o1.UPLOAD_RESET:
                            return delete e.error, {
                                ...e,
                                isPending: !1
                            };
                        case R.o1.UPLOAD_ERROR:
                            return {
                                ...e, isPending: !1, error: t.error
                            }
                    }
                    return e
                },
                user: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        {
                            type: r
                        } = t;
                    switch (r) {
                        case w.actions.GET_USER: {
                            let {
                                id: r = !1,
                                rules: a = e.rules || null,
                                created_at: n,
                                given_name: i,
                                family_name: o,
                                email: s,
                                profile_picture: l,
                                language: d,
                                memberships: c,
                                storageFull: u,
                                planTier: _,
                                isVerified: p,
                                otpEnabled: E,
                                otpEnabledAt: f,
                                preferences: A,
                                hasEmailMarketing: T,
                                hasSeenMarketingOptIn: m,
                                hasProfilePicture: S,
                                hasMarketingConsent: g,
                                marketingConsentUpdatedAt: R
                            } = I.user(t.details);
                            return {
                                ...e,
                                created_at: n,
                                id: r,
                                loggedIn: r,
                                storageFull: u,
                                given_name: i,
                                family_name: o,
                                email: s,
                                profile_picture: l,
                                language: d,
                                memberships: c,
                                planTier: _,
                                isVerified: p,
                                otpEnabled: E,
                                otpEnabledAt: f,
                                rules: a,
                                preferences: A,
                                hasEmailMarketing: T,
                                hasSeenMarketingOptIn: m,
                                hasProfilePicture: S,
                                hasMarketingConsent: g,
                                marketingConsentUpdatedAt: R
                            }
                        }
                        case w.actions.CHANGE_USER_LANGUAGE:
                            return {
                                ...e, language: t.language
                            };
                        case w.actions.REQUEST_PASSWORD_RESET_SUCCESS:
                            return {
                                ...e
                            };
                        case w.actions.CHANGE_USER_IS_VERIFIED:
                            return {
                                ...e, isVerified: t.isVerified
                            };
                        case w.actions.CHANGE_HAS_SKIPPED_VERIFICATION:
                            return {
                                ...e, hasSkippedVerification: t.hasSkippedVerification
                            };
                        case w.actions.UPDATE_USER_EMAIL:
                            return {
                                ...e, email: t.email
                            };
                        case w.actions.DISABLE_OTP:
                            return {
                                ...e, otpEnabled: !1, otpEnabledAt: null
                            }
                    }
                    return ((e, t) => {
                        if ("@WEDEBUG/SET_TIER_USER" === t.type) return {
                            ...e,
                            user: {
                                ...e.user,
                                planTier: t.tier
                            }
                        }
                    })(e, t) || e
                },
                account: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        {
                            type: r
                        } = t;
                    switch (r) {
                        case em.o.GET_ACCOUNT:
                        case em.o.ACCOUNT_UPDATE_SUCCESS:
                            return {
                                ...e, ...I.account(t.details)
                            };
                        case em.o.GET_LAST_ORDER:
                            return {
                                ...e, lastOrder: t.details
                            };
                        case em.o.PAYMENT_SUCCESS:
                            return {
                                ...e, payment: t.details
                            };
                        case em.o.UPDATE_ACCOUNT_MEMBERSHIP_USER_EMAIL:
                            if (0 === e.memberships.length) break;
                            return {
                                ...e, memberships: [{
                                    ...e.memberships[0],
                                    user: {
                                        ...e.memberships[0].user,
                                        email: t.email
                                    }
                                }]
                            };
                        case em.o.CREATE_SUBDOMAIN:
                            return {
                                ...e, ...I.account(t.account)
                            };
                        case em.o.PAYMENT_ERROR:
                            return {
                                ...e, payment: {
                                    ...e.payment,
                                    error: t.details
                                }
                            };
                        case em.o.SET_CAN_SEE_GOODBYE_OFFER:
                            return {
                                ...e, canSeeGoodbyeOffer: t.canSeeGoodbyeOffer
                            }
                    }
                    return e
                },
                ui: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP,
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        {
                            type: r
                        } = t;
                    switch (r) {
                        case eO.o.SET_UPLOADER_OPTIONS:
                            return {
                                ...e, uploader: {
                                    ...e.uploader,
                                    options: {
                                        ...e.uploader.options,
                                        ...t.options
                                    }
                                }
                            };
                        case eO.o.SET_SHOW_CONSENT_WALL_PREFERENCES:
                            return {
                                ...e, showConsentWallPreferences: t.value
                            };
                        case eO.o.RESET_UPLOADER_SCROLL:
                            return {
                                ...e, uploader: {
                                    ...e.uploader,
                                    shouldResetScroll: t.value
                                }
                            }
                    }
                    return e
                },
                transferUpload: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case eA.si.RESET_UPLOAD_PROGRESS:
                            return {
                                ...e, progress: {
                                    ...eT.progress
                                }
                            };
                        case eA.si.SET_LAST_UPDATE:
                            return {
                                ...e, progress: {
                                    ...e.progress,
                                    lastUpdate: Date.now()
                                }
                            };
                        case eA.si.UPDATE_UPLOAD_TIME: {
                            let r = (Date.now() - e.progress.lastUpdate) / 1e3,
                                a = [(t.bytesSentSoFar - e.progress.bytesSentSoFar) / r, ...e.progress.bytesPerSecondLog],
                                n = a.reduce((e, t) => e + t, 0) / a.length,
                                i = Math.round((t.currentSize - t.bytesSentSoFar) / n);
                            return {
                                ...e,
                                progress: {
                                    ...e.progress,
                                    remainingTime: i,
                                    bytesSentSoFar: t.bytesSentSoFar,
                                    bytesPerSecondLog: a
                                }
                            }
                        }
                        case eA.si.UPDATE_UPLOAD_PROGRESS: {
                            let r = (Date.now() - t.transferUploadStartedAt) / 1e3;
                            return {
                                ...e,
                                progress: {
                                    ...e.progress,
                                    duration: r,
                                    progressBytesSentSoFar: t.bytesSentSoFar
                                }
                            }
                        }
                        case eA.si.UPDATE_TOTAL_UPLOAD_PROGRESS: {
                            let r = Math.min(100, Math.round(100 * t.totalProgress));
                            return {
                                ...e,
                                progress: {
                                    ...e.progress,
                                    total: r
                                }
                            }
                        }
                        default:
                            return e
                    }
                },
                consent: z.p6.reducer,
                auth: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case K.e4.UPDATE_STATUS:
                            if (!t.isLoggedIn) return {
                                ...e,
                                isLoggedIn: !1,
                                givenName: void 0,
                                familyName: void 0,
                                email: void 0,
                                emailIsLocked: void 0,
                                auth0UserId: void 0,
                                "https://wetransfer.com/provider": void 0,
                                isPasswordless: !1
                            };
                            return {
                                ...e, isLoggedIn: !0, givenName: t.givenName, familyName: t.familyName, email: t.email, emailIsLocked: t.emailIsLocked, picture: t.picture, auth0UserId: t.auth0UserId, "https://wetransfer.com/provider": t.loginProvider, isPasswordless: t.isPasswordless
                            };
                        case K.e4.UPDATE_APP_STATE:
                            return {
                                ...e, state: t.state
                            };
                        case K.e4.LOADING:
                            if (e.isLoading && !1 === t.isLoading) return {
                                ...e,
                                isInitialized: !0,
                                isLoading: t.isLoading
                            };
                            return {
                                ...e, isLoading: t.isLoading
                            };
                        default:
                            return e
                    }
                },
                customWallpapers: J.Hi,
                paymentIntegrations: er.I2,
                currentOrder: X.Ai,
                transferWindowDrawer: ef.Tg.reducer,
                showcase: C.On.reducer,
                socialLinks: U.rS.reducer,
                socialLinksInputs: x.reducer,
                transferWindowCardSwitcher: Q.$_.reducer,
                paywalls: D.E1.reducer,
                passwordlessLogin: L.k.reducer,
                checkout: i.jf.reducer,
                unlockOneDayExpiryTransfer: B.Pu.reducer,
                malwareProtection: $.Ay,
                [f.l.reducerPath]: f.l.reducer,
                transferUploaderStep: ee.Ay,
                [_.K.reducerPath]: _.K.reducer,
                [p.WJ.reducerPath]: p.WJ.reducer,
                [E.jt.reducerPath]: E.jt.reducer,
                [A.f.reducerPath]: A.f.reducer,
                wolfAnalytics: o.R.reducer,
                customDomainOption: d.F5.reducer,
                rateLimit: V.sP.reducer,
                resumeTransferPersistence: Y.do.reducer,
                funnelTracking: H.Is.reducer,
                appRedirectOverlay: j.QK.reducer,
                browserNotifications: n.xq.reducer
            };
            var eC = r(56436),
                eU = r(53123);
            let ek = (() => {
                let e = window.__session__ || {},
                    {
                        id: t,
                        email: r,
                        given_name: a,
                        family_name: n,
                        storageFull: i,
                        preferences: o,
                        profile_picture: s,
                        memberships: l,
                        language: d,
                        planTier: c,
                        rules: u,
                        isVerified: _,
                        hasSkippedVerification: p,
                        hasProfilePicture: E,
                        otpEnabled: f,
                        otpEnabledAt: A,
                        hasSeenMarketingOptIn: T,
                        created_at: m,
                        isBusinessUser: S,
                        hasMarketingConsent: g,
                        marketingConsentUpdatedAt: R
                    } = I.user(e.user),
                    h = eU.A.getAvatar(t);
                return {
                    id: t,
                    loggedIn: t || !1,
                    storageFull: i,
                    given_name: a,
                    family_name: n,
                    email: r,
                    language: d,
                    profile_picture: s || {
                        id: void 0,
                        image_url: h,
                        represented_class_name: void 0,
                        source_url: void 0,
                        thumbnail_url: void 0
                    },
                    memberships: l,
                    preferences: o,
                    planTier: c,
                    rules: u,
                    isVerified: _,
                    hasProfilePicture: E,
                    hasSkippedVerification: p,
                    otpEnabled: f,
                    otpEnabledAt: A,
                    hasSeenMarketingOptIn: T,
                    created_at: m,
                    isBusinessUser: S,
                    hasMarketingConsent: g,
                    marketingConsentUpdatedAt: R
                }
            })();
            var eb = r(23966),
                eF = r(14901),
                eM = r(38967),
                ex = r(50820);
            let eB = {
                    accountId: 0,
                    expiry: null,
                    isRecoverable: !1,
                    files: [],
                    feature: eu.xA.TRANSFER,
                    id: !1,
                    items: [],
                    itemsTree: (0, eo.vN)(),
                    message: "",
                    paid: !1,
                    parent_id: !1,
                    password: "",
                    recipients: [],
                    sender: "",
                    shortURL: "",
                    size: 0,
                    state: null,
                    type: null,
                    userType: "",
                    title: "",
                    description: "",
                    language: "",
                    downloaderEmailVerification: void 0,
                    trackingId: "",
                    viewOption: ex._9.PREVIEW_AND_DOWNLOAD,
                    allowComments: !1,
                    allowlist: []
                },
                eW = {
                    channel: eC.A,
                    banner: W.ue,
                    checkout: i.ue,
                    unlockOneDayExpiryTransfer: B.ue,
                    layout: eb.I,
                    notification: eF.u,
                    pending: G.ue,
                    account: {
                        id: void 0,
                        active_subscription: !1,
                        active_paid_subscription: !1,
                        can_manage_web_subscription: !0,
                        memberships: [],
                        subdomain_name: void 0,
                        wallpapers: [],
                        previews_wallpapers: [],
                        email_background: null,
                        payment: {},
                        default_recipient_email: ""
                    },
                    route: eM.u,
                    session: (0, en.c3)(),
                    transfer: eB,
                    ui: eP,
                    user: ek,
                    transferUpload: eT,
                    upload: {
                        isPending: !1
                    },
                    consent: z.ue,
                    auth: l,
                    customWallpapers: J.ue,
                    paymentIntegrations: er.ue,
                    currentOrder: X.ue,
                    transferWindowDrawer: ef.ue,
                    showcase: C.ue,
                    socialLinks: U.ue,
                    socialLinksInputs: M,
                    paywalls: D.ue,
                    passwordlessLogin: L.u,
                    adWallpaper: P.ue,
                    roktAd: O.ue,
                    malwareProtection: $.ue,
                    wolfAnalytics: o.u,
                    customDomainOption: d.ue,
                    rateLimit: a.ue,
                    download: eh,
                    appRedirectOverlay: s.ue,
                    browserNotifications: n.ue
                },
                ez = N(eW, eD),
                eG = e => N(e, eD)
        },
        67739: (e, t, r) => {
            r.d(t, {
                Jt: () => o,
                Ro: () => s,
                ue: () => n,
                xq: () => i
            });
            var a = r(96361);
            let n = {
                    isOpen: !1
                },
                i = (0, a.Z0)({
                    name: "browserNotifications",
                    initialState: n,
                    reducers: {
                        openPermissionModal: e => {
                            e.isOpen = !0
                        },
                        closePermissionModal: e => {
                            e.isOpen = !1
                        }
                    }
                }),
                {
                    openPermissionModal: o,
                    closePermissionModal: s
                } = i.actions
        },
        68018: (e, t, r) => {
            r.d(t, {
                CP: () => i,
                lX: () => s,
                m$: () => o,
                ue: () => n
            });
            var a = r(96361);
            let n = {},
                i = (0, a.Z0)({
                    name: "pending",
                    initialState: n,
                    reducers: {
                        setPending(e, t) {
                            let r = t.payload;
                            e[r] || (e[r] = !0)
                        },
                        resetPending(e, t) {
                            let r = t.payload;
                            delete e[r]
                        }
                    }
                }),
                {
                    setPending: o,
                    resetPending: s
                } = i.actions
        },
        68081: (e, t, r) => {
            r.d(t, {
                Ee: () => c,
                LE: () => f,
                c3: () => l,
                hv: () => d,
                qM: () => u,
                rK: () => A,
                tm: () => p,
                xC: () => E,
                yc: () => _
            });
            var a = r(96361),
                n = r(25402),
                i = r(62373),
                o = r(20445),
                s = r(68401);
            let l = () => {
                    var e, t, r, a, i, l, d, c, u;
                    let _ = window.__session__ || {
                            user: {}
                        },
                        p = (0, n.A)();
                    return {
                        language: _.user.language,
                        tandc: s.A.areAccepted(),
                        showDataProcessingPrompt: !1,
                        privacy: {
                            allowTracking: o.A.userAllowsTracking()
                        },
                        domain: p.NEXT_PUBLIC_DOMAIN,
                        incompatible_version: !1,
                        region: {
                            city: null != (l = null == (e = _.region) ? void 0 : e.city) ? l : p.NEXT_PUBLIC_FALLBACK_CITY,
                            country: null != (d = null == (t = _.region) ? void 0 : t.country) ? d : p.NEXT_PUBLIC_FALLBACK_COUNTRY_CODE,
                            continent: null != (c = null == (r = _.region) ? void 0 : r.continent) ? c : p.NEXT_PUBLIC_FALLBACK_CONTINENT_CODE,
                            currency: null != (u = null == (a = _.region) ? void 0 : a.currency) ? u : p.NEXT_PUBLIC_FALLBACK_CURRENCY_CODE,
                            subdivision: null == (i = _.region) ? void 0 : i.subdivision
                        },
                        domainUserId: null,
                        assetUpload: {
                            maxWallpaperSize: 5242880,
                            maxProfilePictureSize: 5242880,
                            maxEmailBackgroundSize: 3145728
                        }
                    }
                },
                d = (0, a.Z0)({
                    name: "session",
                    initialState: l(),
                    reducers: {
                        setLanguage(e, t) {
                            e.language = t.payload
                        },
                        setRedirect(e, t) {
                            e.redirect = t.payload
                        },
                        acceptTermsConditions(e) {
                            s.A.accept(), e.tandc = s.A.areAccepted()
                        },
                        acceptTrackers(e) {
                            o.A.acceptTrackers(), i.A.trackFirstVisit(), e.privacy = {
                                allowTracking: o.A.userAllowsTracking()
                            }
                        },
                        declineTrackers(e) {
                            o.A.declineTrackers(), e.privacy = {
                                allowTracking: o.A.userAllowsTracking()
                            }
                        },
                        setDomainUserId(e, t) {
                            e.domainUserId = t.payload
                        },
                        setShowDataProcessingPrompt(e, t) {
                            e.showDataProcessingPrompt = t.payload
                        }
                    }
                }),
                {
                    acceptTermsConditions: c,
                    acceptTrackers: u,
                    declineTrackers: _,
                    setDomainUserId: p,
                    setLanguage: E,
                    setRedirect: f,
                    setShowDataProcessingPrompt: A
                } = d.actions
        },
        68401: (e, t, r) => {
            r.d(t, {
                A: () => a.Ay
            });
            var a = r(75555)
        },
        68642: (e, t, r) => {
            r.d(t, {
                O: () => i
            });
            var a = r(63010),
                n = r(91010);
            let i = e => {
                let t = e.message.toLowerCase();
                if (t.includes("put request error") || t.includes("firewall") || t.includes("zscaler")) throw new a.A(n.A.FIREWALL_BLOCKED);
                if (t.includes("failed to fetch") || t.includes("load failed") || t.includes("network timeout") || t.includes("networkerror") || t.includes("error budget exceeded") || t.includes("too many errors") || t.includes("429") || t.includes("400") || t.includes("leghtcomputable") || t.includes("cancelbubble")) throw new a.A(n.A.NETWORK_ERROR);
                if (t.includes("upload process halted")) throw new a.A(n.A.INCOMPLETE_UPLOAD);
                if (t.includes("expiredtoken") || t.includes("signaturedoesnotmatch") || t.includes("accessdenied") || t.includes("422")) throw new a.A(n.A.SERVER_ERROR);
                if (t.includes("409")) throw new a.A(n.A.FILESYSTEM_ERROR)
            }
        },
        69361: (e, t, r) => {
            r.d(t, {
                I4: () => i,
                Xl: () => o,
                pU: () => n,
                vW: () => a,
                y5: () => s
            });
            var a = function(e) {
                    return e.TRANSFER_UPLOAD_FINISHED = "transfer_upload_finished", e.BEFORE_TRANSFER_UPLOAD = "before_transfer_upload", e.TRANSFER_FILES_SELECTED = "transfer_files_selected", e.TRANSFER_PAGE_OPENED = "transfer_page_opened", e.DOWNLOAD_PAGE_OPENED = "download_page_opened", e.ADD_FOLDER_CLICKED = "add_folder_clicked", e.TW_REPACKAGING_WARNING_CLICKED = "tw_repackaging_warning_clicked", e.TW_APPEARANCE_CLICKED = "tw_appearance_clicked", e.TW_EXPIRY_CLICKED = "tw_expiry_clicked", e.TW_MULTI_STEP_EXPIRATION_UNPERMITTED = "tw_multi_step_expiration_unpermitted", e.TW_TRANSFER_SIZE_LIMIT_HIT = "tw_transfer_size_limit_hit", e.SETTINGS_BRANDED_PAGE_UPGRADE = "settings_branded_page_upgrade", e.SETTINGS_BRANDED_EMAILS_UPGRADE = "settings_branded_emails_upgrade", e.SETTINGS_PLAN_AND_PAYMENT_COMPARE_ALL_PLANS = "settings_plan_and_payment_compare_all_plans", e.WORKSPACE_ADD_MEMBERS_UPGRADE = "workspace_add_members_upgrade", e.NU_PANEL_USAGE_BAR_CTA = "nu_panel_usage_bar_cta", e.NU_UPGRADE = "nu_upgrade", e.NU_PRICING = "nu_pricing", e.TW_INCREASE_GB_LIMIT = "tw_increase_gb_limit", e.TW_MORE_SETTINGS_CUSTOM_BACKGROUND = "tw_more_settings_custom_background", e.TW_MORE_SETTINGS_EXPIRY = "tw_more_settings_expiry", e.BACKGROUND_AD_CTA = "background_ad_cta", e.TRANSFERS_SENT_INCREASE_NUMBER_LIMIT = "transfers_sent_increase_number_limit", e.TRANSFERS_SENT_INCREASE_GB_LIMIT = "transfers_sent_increase_gb_limit", e.TRANSFERS_SENT_UNIQUE_TRANSFER_EXPIRY_EXTENSION = "transfers_sent_unique_transfer_expiry_extension", e.ACCOUNT_SETTINGS_COMPARE_PLANS = "account_settings_compare_plans", e.WORKSPACE_SETTINGS_UPGRADE = "workspace_settings_upgrade", e.HOME_LEARN_MORE = "home_learn_more", e.ACCOUNT_SETTINGS_UPGRADE_BELOW_DELETION = "account_settings_upgrade_below_deletion", e.DW_RECOVER_EXPIRED_TRANSFER = "dw_recover_expired_transfer", e.TRANSFER_BUTTON_CLICKED_UNPROMPTED = "transfer_button_clicked_unprompted", e.TRANSFER_BUTTON_CLICKED_TRANSFER_NUMBER_LIMIT_HIT = "transfer_button_clicked_transfer_number_limit_hit", e.TRANSFER_BUTTON_CLICKED_TRANSFER_NUMBER_HIGHER_LIMITS_HIT = "transfer_button_clicked_transfer_number_higher_limits_hit", e.TRANSFER_BUTTON_CLICKED_GB_LIMIT_HIT = "transfer_button_clicked_gb_limit_hit", e.TRANSFER_BUTTON_CLICKED_GB_HIGHER_LIMITS_HIT = "transfer_button_clicked_gb_higher_limits_hit", e.UNPROMPTED_TRANSFER_BUTTON_CLICKED = "unprompted_transfer_button_clicked", e.ENTERPRISE_BANNER = "enterprise_banner", e.MANAGE_PLAN_FREE_USER = "manage_plan_free_user", e.MANAGE_PLAN_CREATE_WORKSPACE = "manage_plan_create_workspace", e.MANAGE_PLAN_UPGRADE = "manage_plan_upgrade", e.MANAGE_PLAN_CANCELLATION_DISCOUNT = "cancellation_pop_up_discount_button", e.ABOUT_US_PLUS = "about_us_plus", e.TRANSFER_SIZE_ALERT_TOOLTIP = "transfer_size_alert_tooltip", e.SHOW_PRICING_PAGE_TO_FA = "show_pricing_page_to_fa", e.WORKSPACE_MEMBERS_CREATE_TEAM = "workspace_members_create_team", e.DOWNGRADE_REACTIVATE = "downgrade_reactivate", e.PLAN_DETAILS_BUTTON = "plan_details_button", e.TRANSFER_LIST_UPSELL_BANNER = "transfer_list_upsell_banner", e.TRANSFER_NUMBER_LIMIT_REACHED_BIG_SENDER_ALERT = "transfer_number_limit_reached_big_sender_alert", e.GB_LIMIT_REACHED_BIG_SENDER_ALERT = "gb_limit_reached_big_sender_alert", e.TRANSFER_WINDOW_CUSTOM_WALLPAPER_PLACEHOLDER = "transfer_window_custom_wallpaper_placeholder", e.TRANSFER_WINDOW_CUSTOM_WALLPAPER_UPSELL = "transfer_window_custom_wallpaper_upsell", e.TRANSFER_WINDOW_PAID_TRANSFER_PLACEHOLDER = "transfer_window_paid_transfer_placeholder", e.TRANSFER_WINDOW_PAID_TRANSFER_UPSELL = "transfer_window_paid_transfer_upsell", e.TRANSFER_WINDOW_SET_EXPIRY = "transfer_window_set_expiry", e.TRANSFER_WINDOW_SET_PASSWORD_PLACEHOLDER = "transfer_window_set_password_placeholder", e.TRANSFER_WINDOW_SET_PASSWORD_UPSELL = "transfer_window_set_password_upsell", e.TRANSFER_WINDOW_SHOWCASE_PLACEHOLDER = "transfer_window_showcase_placeholder", e.TRANSFER_WINDOW_SHOWCASE_UPSELL = "transfer_window_showcase_upsell", e.TRANSFER_WINDOW_PROTECT_YOUR_TRANSFERS_PASSWORD_UPSELL = "transfer_window_protect_your_transfers_password_upsell", e.TRANSFER_WINDOW_DETAILS_PASSWORD_UPSELL = "transfer_window_details_password_upsell", e.REQUEST_FORM_STORAGE_UPSELL = "request_form_storage_upsell", e.REQUEST_ANONYMOUS_SIGN_UP = "request_anonymous_sign_up", e.GO_TO_PLUS = "go_to_plus", e.REQUEST_LIST = "request_list", e.REVIEW_LIMIT_UPSELL = "review_limit_upsell", e.DISCOUNT_BANNER = "discount_banner", e.UNLOCK_ONE_DAY_EXPIRY_TRANSFER_POPUP = "unlock_one_day_expiry_transfer_popup", e.TW_BACKGROUND_UPLOAD = "tw_background_upload", e.LEAVING_PAGE_BACKGROUND_UPLOAD_POPUP = "leaving_page_background_upload_popup", e.RETURNING_ON_PAGE_BACKGROUND_UPLOAD_POPUP = "returning_on_page_background_upload_popup", e.NAV_BAR_SIGN_UP = "nav_bar_sign_up", e.NAV_BAR_LOGIN = "nav_bar_login", e.UNKNOWN = "unknown", e.INTRO_PAYWALL_NEW_USERS = "intro_paywall_new_users", e.INTRO_PAYWALL_PUA_USERS = "intro_paywall_pua_users", e.FREE_TRIAL_BANNER = "free_trial_banner", e.EDITABLE_TRANSFER = "editable_transfer", e.RECOVER_EXPIRED_TRANSFER_TRANFER_LIST = "recover_expired_transfer_transfer_list", e.RECOVER_EXPIRED_TRANSFER_TRANSFER_DETAILS = "recover_expired_transfer_transfer_details", e.WE_TRANSFER_SIGN = "we_transfer_sign", e.FREE_1_DAY_TRANSFER_BANNER = "free_1_day_transfer_banner", e.TRANSFER_BLOCKED_FASTER_UPLOAD = "transfer_blocked_faster_upload", e.TRANSFER_STARTED_FASTER_UPLOAD = "transfer_started_faster_upload", e.WRAPPED_MODAL = "wrapped_modal", e.PREVIEWS_HARD_MONETIZATION_SENDER = "previews_hard_monetization_sender", e.PREVIEWS_HARD_MONETIZATION_DOWNLOADER = "previews_hard_monetization_downloader", e.MEDICAL_CONSENT_PROMPT = "medical_consent_prompt", e
                }({}),
                n = function(e) {
                    return e.OPTION_UPSELL_FULLSCREEN = "option_upsell_fullscreen", e.SPONTANEOUS_FULLSCREEN = "spontaneous_fullscreen", e.SPONTANEOUS_TRANSFER_WINDOW = "spontaneous_transfer_window", e.BILLING_SELECTOR_FT_CHECKBOX = "billing_selector_ft_checkbox", e.FREE_LIMIT_FULLSCREEN = "free_limit_fullscreen", e.FREE_HIGHER_LIMITS_FULLSCREEN = "free_higher_limits_fullscreen", e.REPACKAGING_WARNING_FROM_TW = "repackaging_warning_from_tw", e.TRANSFER_RECOVERY_DOWNLOAD_TRANSFER_WINDOW = "transfer_recovery_download_transfer_window", e.MULTI_STEP_EXPIRATION_FULLSCREEN = "multi_step_expiration_fullscreen", e.TRANSFER_SIZE_LIMIT_FULLSCREEN = "transfer_size_limit_fullscreen", e.TRANSFER_WINDOW_PAYWALL = "transfer_window_paywall", e.MODAL_PAYWALL = "modal_paywall", e.PRICING_PAGE = "pricing_page", e.POP_UP_LIMIT_GB = "pop_up_limit_GB", e.POP_UP_LIMIT_NUMBER = "pop_up_limit_number", e.POP_UP_HIGHER_LIMITS_NUMBER = "pop_up_higher_limits_number", e.POP_UP_HIGHER_LIMITS_GB = "pop_up_higher_limits_gb", e.POP_UP_SPONTANEOUS = "pop_up_spontaneous", e.TW_PAYWALL_LIMIT_NUMBER = "tw_paywall_limit_number", e.TW_SPONTANEOUS = "tw_spontaneous", e.CTA = "cta", e.EDITABLE_TRANSFER = "editable_transfer", e.TRANSFER_RECOVERY_DOWNLOAD_TRANSFER_LIST = "transfer_recovery_download_transfer_list", e.TRANSFER_RECOVERY_DOWNLOAD_TRANSFER_DETAILS = "transfer_recovery_download_transfer_details", e.WE_TRANSFER_SIGN = "we_transfer_sign", e.ULTIMATE_WITH_FT_MODAL = "ultimate_with_ft_modal", e.ULTIMATE_YEARLY_FT_POPOVER = "ultimate_yearly_ft_popover", e.ULTIMATE_YEARLY_FT_BANNER = "ultimate_yearly_ft_banner", e.NUDGE_STARTER_TO_ULTIMATE_MODAL = "nudge_starter_to_ultimate_modal", e.NUDGE_STARTER_TO_ULTIMATE_POPOVER = "nudge_starter_to_ultimate_popover", e.NUDGE_STARTER_TO_ULTIMATE_BANNER = "nudge_starter_to_ultimate_banner", e.DISCOUNTED_YEARLY_OFFER_UPGRADE_POST_CONVERSION_MODAL = "discounted_yearly_offer_upgrade_post_conversion_modal", e.DISCOUNTED_YEARLY_OFFER_PERIODICITY_SWITCH_MODAL = "discounted_yearly_offer_periodicity_switch_modal", e.DISCOUNTED_YEARLY_OFFER_ONE_CLICK_CHECKOUT_MODAL = "discounted_yearly_offer_one_click_checkout_modal", e.FASTER_UPLOAD_FULLSCREEN = "faster_upload_fullscreen", e.FASTER_UPLOAD_TOOLTIP = "faster_upload_tooltip", e.FASTER_UPLOAD_TRANSFER_WINDOW = "faster_upload_transfer_window", e.WRAPPED_MODAL = "wrapped_modal", e.PREVIEWS_HARD_MONETIZATION_FULLSCREEN = "previews_hard_monetization_fullscreen", e.PREVIEWS_HARD_MONETIZATION_TRANSFER_WINDOW = "previews_hard_monetization_transfer_window", e.PREVIEWS_HARD_MONETIZATION_PREVIEW_PAGE = "previews_hard_monetization_preview_page", e.MEDICAL_CONSENT_PROMPT = "medical_consent_prompt", e
                }({}),
                i = function(e) {
                    return e.TRANSFER = "transfer", e.DOWNLOAD = "download", e.OTHER = "other", e
                }({}),
                o = function(e) {
                    return e.NONE = "none", e.TEXT_SMALL = "text_small", e.TEXT_MEDIUM = "text_medium", e.BUTTON_ABOVE_CTA = "button_above_cta", e.BUTTON_BELOW_CTA = "button_below_cta", e
                }({}),
                s = function(e) {
                    return e.DISABLED = "disabled", e.ENABLED_BACKGROUND = "enabled_background", e.ENABLED_AWAIT = "enabled_await", e.ENABLED_USE_PREDICTION = "enabled_use_prediction", e
                }({})
        },
        70316: (e, t, r) => {
            r.d(t, {
                bi: () => j,
                _p: () => Q,
                WU: () => X,
                Vv: () => q,
                F4: () => K,
                A4: () => et,
                d5: () => z,
                lX: () => $,
                Rx: () => ee,
                qn: () => G
            });
            var a = r(582),
                n = r.n(a),
                i = r(87963),
                o = r(57968),
                s = r(71303),
                l = r(28338),
                d = r(89187),
                c = r(55851),
                u = r(56682),
                _ = r(55256),
                p = r(53123),
                E = r(91010),
                f = r(87379),
                A = r(62373),
                T = r(30631),
                m = r(27498),
                S = r(63306),
                g = r(53155),
                R = r(33061),
                h = r(38838),
                y = r(96644),
                w = r(68018),
                I = r(85218),
                v = r(34463),
                N = r(10694),
                O = r(97197),
                P = r(52458),
                L = r(91345),
                D = r(82901),
                C = r(22640),
                U = r(19653),
                k = r(24932),
                b = r(25402),
                F = r(5619);
            r(39994);
            let M = {
                DOWNLOAD_CANCELLED: "lb-download-cancelled",
                DOWNLOAD_FINISHED: "lb-download-finished",
                DOWNLOAD_ERROR: "lb-download-error"
            };
            async function x(e) {
                let {
                    transfer: t,
                    secret: r,
                    domainUserId: a,
                    intent: n,
                    fileIds: o,
                    recipientId: l,
                    downloaderEmail: d,
                    setMimeTypeExplicit: c,
                    onError: u,
                    onSuccess: _
                } = e, p = t.id ? t.id : "", E = (0, b.A)(), A = {
                    apiBase: String(E.NEXT_PUBLIC_API_URL + "/api/v4"),
                    ddProxyBase: E.NEXT_PUBLIC_LOCAL_BARTENDER_PROXY_API_URL + "/api",
                    transferId: p,
                    secret: r,
                    intent: n
                };
                a && (A.domainUserId = a), c && (A.setMimeTypeExplicit = "true"), d && (A.downloaderEmail = d), o && (A.fileIds = o.join(",")), l && (A.recipientId = l), t.password && (A.password = t.password);
                let T = (0, f.TS)(p);
                if (T && (A.orderAccessToken = T), await (0, U.wR)()) {
                    let e = await (0, U.iD)();
                    e && (A.accessToken = e)
                }
                let m = (0, k.I)();
                m && (A.localStorageId = m);
                let S = (0, F.Sy)();
                S && (A.currentTeamId = S);
                let g = setInterval(async () => {
                        try {
                            let e = await navigator.serviceWorker.getRegistration();
                            e && e.active && e.active.postMessage("ping")
                        } catch (e) {}
                    }, 5e3),
                    R = e => {
                        let {
                            type: t,
                            error: r,
                            transferId: a
                        } = e.data;
                        (!a || a === p) && (t === M.DOWNLOAD_ERROR || t === M.DOWNLOAD_FINISHED || t === M.DOWNLOAD_CANCELLED) && (clearInterval(g), navigator.serviceWorker.removeEventListener("message", R), t === M.DOWNLOAD_ERROR && r && u && u(function(e) {
                            let t = e.toLowerCase();
                            return t.includes("zscaler") || t.includes("internet_security") || t.includes("firewall") || t.includes("status_403_internet_security_by_zscaler") ? {
                                errorType: "FIREWALL_BLOCKED"
                            } : t.includes("proxy") || t.includes("corporate") || t.includes("status_407") || t.includes("proxy_authentication_required") ? {
                                errorType: "PROXY_BLOCKED"
                            } : t.includes("no_readable_stream_available") || t.includes("failed_to_execute_enqueue_on_readablestreamdefaultcontroller") || t.includes("cannot_enqueue_a_chunk_into_a_closed_readable_stream") || t.includes("remotesegmentreader") ? {
                                errorType: "STREAM_ERROR"
                            } : t.includes("network") || t.includes("connection") || t.includes("timeout") || t.includes("status_0") || t.includes("failed to fetch") || t.includes("failed_to_fetch") || t.includes("load_failed") ? {
                                errorType: "NETWORK_ERROR"
                            } : t.includes("status_504") || t.includes("fetch_waybill_timeout") || t.includes("gateway_timeout") ? {
                                errorType: "SERVER_TIMEOUT"
                            } : t.includes("status_5") || t.includes("server_error") || t.includes("internal_server_error") ? {
                                errorType: "SERVER_ERROR"
                            } : t.includes("status_403") || t.includes("forbidden") || t.includes("access_denied") ? {
                                errorType: "ACCESS_DENIED"
                            } : t.includes("status_404") || t.includes("not_found") || t.includes("fetch_waybill_not_found") || t.includes("caught_fetchwaybill_status_404") ? {
                                errorType: "TRANSFER_NOT_FOUND"
                            } : t.includes("status_429") || t.includes("too_many_requests") || t.includes("rate_limit") ? {
                                errorType: "RATE_LIMITED"
                            } : t.includes("missing_required_query_parameter") || t.includes("domainuserid") || t.includes("status_418") || t.includes("doctype_html") ? {
                                errorType: "CONFIGURATION_ERROR"
                            } : t.includes("status_undefined") || t.includes("undefined_fetch_waybill") ? {
                                errorType: "UNKNOWN_STATUS_ERROR"
                            } : t.includes("incomplete download") || t.includes("incomplete_download") ? {
                                errorType: "INCOMPLETE_DOWNLOAD"
                            } : {
                                errorType: "DOWNLOAD_UNKNOWN_ERROR"
                            }
                        }(r).errorType), t === M.DOWNLOAD_FINISHED ? _ && _() : (0, i.Od)().trackUserAction(s.Sf.downloadFailed({
                            transferId: p,
                            errorType: t
                        })))
                    };
                navigator.serviceWorker.addEventListener("message", R);
                let h = function(e) {
                        try {
                            let t = JSON.stringify(e);
                            return btoa(t)
                        } catch (e) {
                            throw Error("Failed to encode parameters: ".concat(e.message))
                        }
                    }(A),
                    y = "/download/local-bartender?id=".concat(encodeURIComponent(h));
                return location.assign(y)
            }

            function B(e) {
                let {
                    transfer: t,
                    secret: r,
                    fileIds: a
                } = e;
                if (!t.id) throw Error("InvalidTransfer");
                if (t.state !== N.r.DOWNLOADABLE && t.state !== N.r.DOWNLOADING && t.state !== N.r.FINISHED) throw Error("TransferNotDownloadable");
                if (!r) throw Error("MissingSecret");
                if (a && !a.every(e => t.items.find(t => {
                        let {
                            id: r
                        } = t;
                        return r === e
                    }))) throw Error("InvalidTransfer")
            }
            let W = "transferRecovered_";

            function z(e) {
                return !!e && "true" === window.sessionStorage.getItem("".concat(W).concat(e))
            }

            function G(e) {
                e && window.sessionStorage.setItem("".concat(W).concat(e), "true")
            }

            function V(e) {
                return z(e.id) || !!(e.extendedExpiryInSeconds && e.expiryInSeconds === e.extendedExpiryInSeconds)
            }
            async function H(e, t) {
                let r = !1,
                    a = !1;
                try {
                    let {
                        settings: t
                    } = await (null == e ? void 0 : e.identity.get());
                    r = (null == t ? void 0 : t.should_use_bartender_api) || !1, a = (null == t ? void 0 : t.local_bartender_safari_ios_enabled) || !1
                } catch (e) {}
                return "serviceWorker" in navigator && "ReadableStream" in window && !r && t.items.length <= 500 && ! function(e) {
                    if (j()) return !e || !Y();
                    let t = window.navigator.userAgent,
                        {
                            browser: r
                        } = n()(t);
                    if (!r.version) return !1;
                    if (r.name && r.name.toLowerCase().includes("safari")) {
                        let e = parseInt(r.version.split(".")[0], 10);
                        return !isNaN(e) && e <= 14
                    }
                    return !1
                }(a)
            }

            function j() {
                var e, t;
                let r = window.navigator.userAgent;
                return /iPad|iPhone|iPod/i.test(r) || (null == (e = navigator.platform) ? void 0 : e.toLowerCase()) === "ipad" || (null == (t = navigator.platform) ? void 0 : t.toLowerCase()) === "macintel" && navigator.maxTouchPoints > 1
            }

            function Y() {
                let e = function() {
                    if (!j()) return null;
                    let e = window.navigator.userAgent.match(/OS (\d+)_/);
                    if (e) {
                        let t = parseInt(e[1], 10);
                        if (!isNaN(t)) return t
                    }
                    return null
                }();
                return null !== e && e >= 18
            }

            function K(e) {
                let {
                    transfer: t,
                    secret: r,
                    recipientId: a,
                    domainUserId: n,
                    uploadInProgress: o,
                    transferGroup: l,
                    orionClient: d,
                    isFromQRCode: c,
                    fromPreviewPage: _ = !1
                } = e, p = t.id, E = "downloading_".concat(p);
                return async (e, T) => {
                    e((0, w.m$)(E));
                    try {
                        var R, h;
                        B({
                            transfer: t,
                            secret: r
                        });
                        let E = t.items.map(e => ({
                                id: e.id,
                                extension: e.file.type,
                                size: e.size
                            })),
                            m = (0, I.m)(T());
                        if (await H(d, t)) {
                            let o = Date.now();
                            await x({
                                transfer: t,
                                secret: r,
                                domainUserId: n,
                                recipientId: a,
                                intent: C.oO,
                                setMimeTypeExplicit: Y(),
                                onError: t => {
                                    e({
                                        type: S.o1.DOWNLOAD_ERROR,
                                        error: "Download failed",
                                        errorType: t
                                    })
                                },
                                onSuccess: () => {
                                    var r;
                                    let a = Date.now() - o;
                                    e({
                                        type: S.o1.DOWNLOAD_COMPLETED_SUCCESS
                                    }), (0, i.Od)().trackUserAction(s.Sf.downloadCompleted({
                                        transferId: t.id,
                                        filesNumber: ea(t),
                                        foldersNumber: en(t),
                                        size: t.size,
                                        hasPassword: er(t),
                                        transferDownloadPrice: (0, f.V6)(t) || 0,
                                        location: _ ? s.Cx.PREVIEW_PAGE : l === u.a.SENT ? s.Cx.SENT_TRANSFER_DETAILS_PAGE : s.Cx.RECEIVED_TRANSFER_DETAILS_PAGE,
                                        transferType: t.recipients.length > 0 ? "EMAIL" : "LINK",
                                        downloadType: s.zh.ALL_FILES,
                                        files: E,
                                        priceCurrency: null == (r = t.price) ? void 0 : r.currency,
                                        brandingType: m,
                                        recovered: V(t),
                                        downloaderEmailVerificationSelected: t.downloaderEmailVerification,
                                        isFromQRCode: c,
                                        downloadDurationMs: a,
                                        viewOption: t.viewOption
                                    }))
                                }
                            })
                        } else await (0, C.RG)({
                            transfer: {
                                id: p,
                                state: N.r.DOWNLOADABLE
                            },
                            secret: r,
                            recipientId: a,
                            domainUserId: n,
                            uploadInProgress: o,
                            intent: C.oO
                        });
                        A.A.trackUnstructSnowplowEvent("iglu:com.wetransfer/download_event/jsonschema/3-0-0", {
                            transfer_id: t.id,
                            transfer_type: t.recipients.length > 0 ? "EMAIL" : "LINK",
                            download_type: s.zh.ALL_FILES,
                            number_files: t.items.length,
                            files_total_size: t.size,
                            files: E,
                            branding_type: m,
                            price_amount: (0, f.V6)(t),
                            price_currency: null == (R = t.price) ? void 0 : R.currency,
                            is_paid: (0, f.GE)(t.paid)
                        }), (0, i.Od)().trackUserAction(s.Sf.downloadStarted({
                            transferId: t.id,
                            filesNumber: ea(t),
                            foldersNumber: en(t),
                            size: t.size,
                            hasPassword: er(t),
                            transferDownloadPrice: (0, f.V6)(t) || 0,
                            location: _ ? s.Cx.PREVIEW_PAGE : l === u.a.SENT ? s.Cx.SENT_TRANSFER_DETAILS_PAGE : s.Cx.RECEIVED_TRANSFER_DETAILS_PAGE,
                            transferType: t.recipients.length > 0 ? "EMAIL" : "LINK",
                            downloadType: s.zh.ALL_FILES,
                            files: E,
                            priceCurrency: null == (h = t.price) ? void 0 : h.currency,
                            brandingType: m,
                            recovered: V(t),
                            downloaderEmailVerificationSelected: t.downloaderEmailVerification,
                            isFromQRCode: c,
                            viewOption: t.viewOption
                        })), e({
                            type: g.o1.DOWNLOAD_TRANSFER_SUCCESS
                        })
                    } catch (t) {
                        e(m.A.setError("transfer", {
                            downloadFailed: !0
                        })), e(y.P9.setPanelNotification({
                            category: y.aF.Notification,
                            details: "something_went_wrong"
                        }))
                    }
                    e((0, w.lX)(E))
                }
            }

            function q(e) {
                let {
                    transfer: t,
                    secret: r,
                    recipientId: a,
                    items: n,
                    fileId: o,
                    domainUserId: l,
                    uploadInProgress: d,
                    transferGroup: c,
                    orionClient: _,
                    malwareProtectionStatus: p,
                    isFromQRCode: E,
                    fromPreviewPage: T = !1
                } = e, R = t.id, h = "downloading_".concat(R, "_").concat(o);
                return async (e, O) => {
                    e((0, w.m$)(h));
                    try {
                        var P, L;
                        B({
                            transfer: t,
                            secret: r,
                            fileIds: [o]
                        });
                        let m = t.items.find(e => e.id === o),
                            h = (0, I.m)(O()),
                            y = [{
                                id: m.id,
                                extension: m.file.type,
                                size: m.size
                            }];
                        if (await H(_, t)) {
                            let n = Date.now();
                            await x({
                                transfer: t,
                                secret: r,
                                domainUserId: l,
                                fileIds: [o],
                                recipientId: a,
                                intent: C.KC,
                                onError: t => {
                                    e({
                                        type: S.o1.DOWNLOAD_ERROR,
                                        error: "Download failed",
                                        errorType: t
                                    })
                                },
                                onSuccess: () => {
                                    var e;
                                    let r = Date.now() - n;
                                    (0, i.Od)().trackUserAction(s.Sf.downloadCompleted({
                                        transferId: t.id,
                                        filesNumber: +(m.uiType === v.a.file),
                                        foldersNumber: +(m.uiType === v.a.directory),
                                        size: m.size,
                                        hasPassword: er(t),
                                        transferDownloadPrice: (0, f.V6)(t) || 0,
                                        location: T ? s.Cx.PREVIEW_PAGE : c === u.a.SENT ? s.Cx.SENT_TRANSFER_DETAILS_PAGE : s.Cx.RECEIVED_TRANSFER_DETAILS_PAGE,
                                        transferType: t.recipients.length > 0 ? "EMAIL" : "LINK",
                                        downloadType: s.zh.SINGLE_FILE,
                                        files: y,
                                        priceCurrency: null == (e = t.price) ? void 0 : e.currency,
                                        brandingType: h,
                                        recovered: V(t),
                                        downloaderEmailVerificationSelected: t.downloaderEmailVerification,
                                        malwareProtectionStatus: p,
                                        isFromQRCode: E,
                                        downloadDurationMs: r,
                                        viewOption: t.viewOption
                                    }))
                                },
                                setMimeTypeExplicit: Y()
                            })
                        } else await (0, C.RG)({
                            transfer: {
                                id: R,
                                items: n,
                                state: N.r.DOWNLOADABLE
                            },
                            secret: r,
                            recipientId: a,
                            fileIds: [o],
                            domainUserId: l,
                            uploadInProgress: d,
                            intent: C.KC
                        });
                        A.A.trackUnstructSnowplowEvent("iglu:com.wetransfer/download_event/jsonschema/3-0-0", {
                            transfer_id: t.id,
                            transfer_type: t.recipients.length > 0 ? "EMAIL" : "LINK",
                            download_type: s.zh.SINGLE_FILE,
                            number_files: 1,
                            files_total_size: m.size,
                            files: y,
                            branding_type: h,
                            price_amount: (0, f.V6)(t),
                            price_currency: null == (P = t.price) ? void 0 : P.currency,
                            is_paid: (0, f.GE)(t.paid)
                        }), (0, i.Od)().trackUserAction(s.Sf.downloadStarted({
                            transferId: t.id,
                            filesNumber: +(m.uiType === v.a.file),
                            foldersNumber: +(m.uiType === v.a.directory),
                            size: m.size,
                            hasPassword: er(t),
                            transferDownloadPrice: (0, f.V6)(t) || 0,
                            location: T ? s.Cx.PREVIEW_PAGE : c === u.a.SENT ? s.Cx.SENT_TRANSFER_DETAILS_PAGE : s.Cx.RECEIVED_TRANSFER_DETAILS_PAGE,
                            transferType: t.recipients.length > 0 ? "EMAIL" : "LINK",
                            downloadType: s.zh.SINGLE_FILE,
                            files: y,
                            priceCurrency: null == (L = t.price) ? void 0 : L.currency,
                            brandingType: h,
                            recovered: V(t),
                            downloaderEmailVerificationSelected: t.downloaderEmailVerification,
                            malwareProtectionStatus: p,
                            isFromQRCode: E,
                            viewOption: t.viewOption
                        })), e({
                            type: g.o1.DOWNLOAD_TRANSFER_SUCCESS
                        })
                    } catch (t) {
                        e(m.A.setError("transfer", {
                            downloadFailed: !0
                        })), e(y.P9.setPanelNotification({
                            category: y.aF.Notification,
                            details: "something_went_wrong"
                        }))
                    }
                    e((0, w.lX)(h))
                }
            }

            function Q(e) {
                let {
                    transfer: t,
                    secret: r,
                    recipientId: a = !1,
                    domainUserId: n,
                    currentSize: l,
                    location: d = s.Cx.DOWNLOAD_WINDOW,
                    orionClient: c,
                    malwareProtectionStatus: u,
                    isFromQRCode: _
                } = e;
                return async (e, p) => {
                    e({
                        type: S.o1.TRANSFER_STATE_DOWNLOAD_STARTING
                    });
                    try {
                        var T, m;
                        B({
                            transfer: t,
                            secret: r
                        });
                        let E = (0, I.m)(p()),
                            g = t.items.map(e => ({
                                id: e.id,
                                extension: e.file.type,
                                size: e.size
                            }));
                        if (await H(c, t)) {
                            let c = Date.now();
                            await x({
                                transfer: t,
                                secret: r,
                                domainUserId: n,
                                recipientId: a,
                                intent: C.oO,
                                onError: t => {
                                    e({
                                        type: S.o1.DOWNLOAD_ERROR,
                                        error: "Download failed",
                                        errorType: t
                                    })
                                },
                                onSuccess: () => {
                                    var r;
                                    let a = Date.now() - c;
                                    e({
                                        type: S.o1.DOWNLOAD_COMPLETED_SUCCESS
                                    }), (0, i.Od)().trackUserAction(s.Sf.downloadCompleted({
                                        transferId: t.id,
                                        filesNumber: ea(t),
                                        foldersNumber: en(t),
                                        size: l,
                                        hasPassword: er(t),
                                        hasCustomBackground: E !== o.l.NONE,
                                        transferDownloadPrice: (0, f.V6)(t) || 0,
                                        location: d,
                                        transferType: t.type.toUpperCase(),
                                        downloadType: s.zh.ALL_FILES,
                                        files: g,
                                        priceCurrency: null == (r = t.price) ? void 0 : r.currency,
                                        brandingType: E,
                                        recovered: V(t),
                                        downloaderEmailVerificationSelected: t.downloaderEmailVerification,
                                        malwareProtectionStatus: u,
                                        isFromQRCode: _,
                                        downloadDurationMs: a,
                                        viewOption: t.viewOption
                                    }))
                                },
                                setMimeTypeExplicit: Y()
                            })
                        } else await (0, C.RG)({
                            transfer: t,
                            secret: r,
                            recipientId: a,
                            domainUserId: n,
                            intent: C.oO
                        });
                        let R = Z(t, "downloadAll");
                        J({
                            transferAnalyticsData: R
                        }), A.A.trackUnstructSnowplowEvent("iglu:com.wetransfer/download_event/jsonschema/3-0-0", {
                            transfer_id: t.id,
                            transfer_type: t.type.toUpperCase(),
                            download_type: s.zh.ALL_FILES,
                            number_files: t.items.length,
                            files_total_size: l,
                            files: g,
                            price_amount: (0, f.V6)(t),
                            price_currency: null == (T = t.price) ? void 0 : T.currency,
                            is_paid: (0, f.GE)(t.paid),
                            branding_type: E
                        }), (0, i.Od)().trackUserAction(s.Sf.downloadStarted({
                            transferId: t.id,
                            filesNumber: ea(t),
                            foldersNumber: en(t),
                            size: l,
                            hasPassword: er(t),
                            hasCustomBackground: E !== o.l.NONE,
                            transferDownloadPrice: (0, f.V6)(t) || 0,
                            location: d,
                            transferType: t.type.toUpperCase(),
                            downloadType: s.zh.ALL_FILES,
                            files: g,
                            priceCurrency: null == (m = t.price) ? void 0 : m.currency,
                            brandingType: E,
                            recovered: V(t),
                            downloaderEmailVerificationSelected: t.downloaderEmailVerification,
                            malwareProtectionStatus: u,
                            isFromQRCode: _,
                            viewOption: t.viewOption
                        })), e({
                            type: S.o1.TRANSFER_STATE_DOWNLOADING,
                            transferId: t.id
                        })
                    } catch (t) {
                        return e(y.P9.setTransferNotification({
                            text: t.message
                        })), t.message === E.A.TOO_MANY_REQUESTS ? e({
                            type: S.o1.TRANSFER_STATE_DOWNLOADABLE
                        }) : e({
                            type: S.o1.TRANSFER_DOWNLOAD_INVALID
                        }), e({
                            type: S.o1.DOWNLOAD_ERROR
                        })
                    }
                    e({
                        type: S.o1.TRANSFER_STATE_FINISHED
                    })
                }
            }

            function X(e) {
                let {
                    transfer: t,
                    secret: r,
                    recipientId: a = !1,
                    fileId: n,
                    domainUserId: l,
                    location: d = s.Cx.DOWNLOAD_WINDOW,
                    orionClient: c,
                    malwareProtectionStatus: u,
                    isFromQRCode: _
                } = e;
                return async (e, p) => {
                    e({
                        type: S.o1.TRANSFER_STATE_DOWNLOAD_STARTING_FILE,
                        file_id: n
                    });
                    try {
                        var T, m;
                        B({
                            transfer: t,
                            secret: r,
                            fileIds: [n]
                        });
                        let E = (0, I.m)(p()),
                            g = t.items.findIndex(e => {
                                let {
                                    id: t
                                } = e;
                                return t === n
                            }),
                            R = t.items[g],
                            h = [{
                                id: R.id,
                                extension: R.file.type,
                                size: R.size
                            }];
                        if (await H(c, t)) {
                            let c = Date.now();
                            await x({
                                transfer: t,
                                secret: r,
                                domainUserId: l,
                                fileIds: [n],
                                recipientId: a,
                                intent: C.KC,
                                onError: t => {
                                    e({
                                        type: S.o1.DOWNLOAD_ERROR,
                                        error: "Download failed",
                                        errorType: t
                                    })
                                },
                                onSuccess: () => {
                                    var e;
                                    let r = Date.now() - c;
                                    (0, i.Od)().trackUserAction(s.Sf.downloadCompleted({
                                        transferId: t.id,
                                        filesNumber: +(R.uiType === v.a.file),
                                        foldersNumber: +(R.uiType === v.a.directory),
                                        size: R.size,
                                        hasPassword: er(t),
                                        hasCustomBackground: E !== o.l.NONE,
                                        transferDownloadPrice: (0, f.V6)(t) || 0,
                                        location: d,
                                        transferType: t.type.toUpperCase(),
                                        downloadType: s.zh.SINGLE_FILE,
                                        files: h,
                                        priceCurrency: null == (e = t.price) ? void 0 : e.currency,
                                        brandingType: E,
                                        recovered: V(t),
                                        downloaderEmailVerificationSelected: t.downloaderEmailVerification,
                                        malwareProtectionStatus: u,
                                        isFromQRCode: _,
                                        downloadDurationMs: r,
                                        viewOption: t.viewOption
                                    }))
                                },
                                setMimeTypeExplicit: Y()
                            })
                        } else await (0, C.RG)({
                            transfer: t,
                            secret: r,
                            recipientId: a,
                            fileIds: [n],
                            domainUserId: l,
                            intent: C.KC
                        });
                        let y = Z(t, "downloadFile", g);
                        J({
                            transferAnalyticsData: y
                        }), A.A.trackUnstructSnowplowEvent("iglu:com.wetransfer/download_event/jsonschema/3-0-0", {
                            transfer_id: t.id,
                            transfer_type: t.type.toUpperCase(),
                            download_type: s.zh.SINGLE_FILE,
                            number_files: 1,
                            files_total_size: R.size,
                            files: h,
                            price_amount: (0, f.V6)(t),
                            price_currency: null == (T = t.price) ? void 0 : T.currency,
                            is_paid: (0, f.GE)(t.paid),
                            branding_type: E
                        }), (0, i.Od)().trackUserAction(s.Sf.downloadStarted({
                            transferId: t.id,
                            filesNumber: +(R.uiType === v.a.file),
                            foldersNumber: +(R.uiType === v.a.directory),
                            size: R.size,
                            hasPassword: er(t),
                            hasCustomBackground: E !== o.l.NONE,
                            transferDownloadPrice: (0, f.V6)(t) || 0,
                            location: d,
                            transferType: t.type.toUpperCase(),
                            downloadType: s.zh.SINGLE_FILE,
                            files: h,
                            priceCurrency: null == (m = t.price) ? void 0 : m.currency,
                            brandingType: E,
                            recovered: V(t),
                            downloaderEmailVerificationSelected: t.downloaderEmailVerification,
                            malwareProtectionStatus: u,
                            isFromQRCode: _,
                            viewOption: t.viewOption
                        })), e({
                            type: S.o1.TRANSFER_STATE_DOWNLOADING_FILE,
                            file_id: n
                        })
                    } catch (t) {
                        return e(y.P9.setTransferNotification({
                            text: t
                        })), t.message === E.A.TOO_MANY_REQUESTS ? (e({
                            type: S.o1.TRANSFER_STATE_FINISHED_FILE,
                            file_id: n
                        }), e({
                            type: S.o1.TRANSFER_STATE_DOWNLOADABLE
                        })) : e({
                            type: S.o1.TRANSFER_DOWNLOAD_INVALID
                        }), e({
                            type: S.o1.DOWNLOAD_ERROR
                        })
                    }
                    e({
                        type: S.o1.TRANSFER_STATE_FINISHED_FILE,
                        file_id: n
                    })
                }
            }

            function J(e) {
                let {
                    transferAnalyticsData: t
                } = e;
                0 === p.A.getWTDownloaded() && (t.days_since_first_download = p.A.getDaysSinceFirstVisit()), p.A.incrementWTDownloaded()
            }

            function Z(e, t, r) {
                let a = {
                    mode: t,
                    type: e.type,
                    item_count: e.items.length,
                    app_type: T.Ay.isMobile ? "mobile" : "web",
                    receiver_count: e.recipients.length
                };
                switch (t) {
                    case "downloadAll":
                        return a;
                    case "downloadFile":
                        return {
                            file_index: r, ...a
                        }
                }
            }

            function $(e, t) {
                return (r, a) => {
                    let {
                        transfer: n
                    } = a(), o = (e.items || []).map(e => {
                        let {
                            file: t,
                            item_type: r,
                            ...a
                        } = e;
                        return {
                            ...a,
                            file: t || new L.A(a),
                            apiType: r
                        }
                    }), s = (0, P.J)({
                        ...e,
                        items: o
                    }), d = "description" in s ? s.description : s.message || "", u = s.state || N.r.INIT;
                    (!s.expiryInSeconds || s.expiryInSeconds < 1) && s.extendedExpiryInSeconds && s.extendedExpiryInSeconds > 0 && "processed" === s.user_state && ((0, i.Od)().trackUserAction({
                        kind: "recoverable_transfer_prepared",
                        info: {
                            transfer_id: s.id,
                            recovered: n.recovered
                        }
                    }), u = n.recovered ? N.r.DOWNLOADABLE : N.r.RECOVERING), s.state !== N.r.PROCESSING && s.state !== N.r.DOWNLOADABLE || !0 !== s.password_protected || t || (u = N.r.PASSWORD_PROTECTED);
                    let _ = s.downloaderEmailVerification === l.B.TRACKING || s.downloaderEmailVerification === l.B.RESTRICTED;
                    (s.state === N.r.PROCESSING || s.state === N.r.DOWNLOADABLE) && _ && 0 === s.items.length && (u = N.r.ACCESS_CONTROL_REQUIRED), r({
                        type: S.o1.TRANSFER_INIT,
                        id: s.id,
                        items: s.items,
                        itemsTree: s.itemsTree,
                        defaultProExpiry: c.i.DAYS_30_IN_SECONDS,
                        defaultFreeExpiry: c.i.DAYS_7_IN_SECONDS,
                        transferType: O.R0[s.transfer_type],
                        message: d,
                        password: s.password_protected && t ? t : null,
                        password_protected: s.password_protected,
                        shortURL: s.shortened_url || null,
                        title: s.display_name,
                        displayName: s.display_name,
                        state: u,
                        paid: s.paid,
                        price: s.price,
                        seller: s.seller,
                        workspaceId: s.workspaceId,
                        workspaceTier: s.workspaceTier,
                        viewOption: s.viewOption,
                        allowComments: s.allowComments,
                        ...s.security_hash ? {
                            secret: s.security_hash
                        } : {},
                        ...s.recipient_id ? {
                            recipientId: s.recipient_id
                        } : {},
                        ...s.account_id ? {
                            accountId: s.account_id
                        } : {},
                        ..."expiryInSeconds" in s ? {
                            expiryInSeconds: s.expiryInSeconds
                        } : {},
                        ..."extendedExpiryInSeconds" in s ? {
                            extendedExpiryInSeconds: s.extendedExpiryInSeconds
                        } : {},
                        ...s.deleted_at ? {
                            deletedAt: s.deleted_at
                        } : {},
                        ...s.downloaderEmailVerification ? {
                            downloaderEmailVerification: s.downloaderEmailVerification
                        } : {},
                        ...s.experimentIds ? {
                            experimentIds: s.experimentIds
                        } : {}
                    })
                }
            }

            function ee(e) {
                let {
                    newExpiryInSeconds: t
                } = e;
                return (e, r) => {
                    let {
                        transfer: a
                    } = r(), n = a.password_protected && !a.password ? N.r.PASSWORD_PROTECTED : N.r.DOWNLOADABLE;
                    e({
                        type: S.o1.TRANSFER_RECOVER,
                        state: n,
                        expiryInSeconds: t
                    }), G(a.id)
                }
            }

            function et(e) {
                let {
                    id: t,
                    secret: r,
                    recipientId: a = !1,
                    password: n = !1,
                    canScanForMalware: i = !1
                } = e;
                return async e => {
                    e({
                        type: S.o1.DOWNLOAD_PENDING
                    });
                    try {
                        let o = await (0, D.IP)(t, r, a, n);
                        if (e({
                                type: S.o1.DOWNLOAD_SUCCESS
                            }), o.state !== N.r.PROCESSING) {
                            let t = !!o.workspace && null != o.workspace.tier && o.workspace.tier !== d.js.FREE;
                            if ((i || t) && o.state !== N.r.EXPIRED) try {
                                let t = await (0, D.Ob)(o.id),
                                    r = t === h.F.INFECTED ? h.F.INFECTED : t === h.F.CLEAN ? h.F.CLEAN : h.F.NOT_SCANNED;
                                e((0, R.kc)(r))
                            } catch (r) {
                                let {
                                    message: t
                                } = r;
                                t === E.A.MALWARE_SCAN_FAILED && (e((0, R.kc)(h.F.FAILED)), e($(o, n)))
                            }
                            e($(o, n))
                        }
                    } catch (r) {
                        let {
                            message: t
                        } = r;
                        if (t === E.A.INVALID_TRANSFER) return void e({
                            type: S.o1.TRANSFER_DOWNLOAD_EXPIRED
                        });
                        e({
                            type: S.o1.DOWNLOAD_ERROR
                        })
                    }
                }
            }

            function er(e) {
                return !!(e.password || e.password_protected)
            }

            function ea(e) {
                return e.items ? e.items.filter(e => e.uiType === v.a.file).length : 0
            }

            function en(e) {
                return e.itemsTree ? e.itemsTree.items.filter(e => e.uiType === v.a.directory).length : 0
            }
            _.$.generateActions({
                downloadTransferFromPage: K,
                downloadTransferFileFromPage: q,
                downloadTransfer: Q,
                downloadTransferFile: X
            })
        },
        71303: (e, t, r) => {
            r.d(t, {
                Cx: () => a,
                Sf: () => i,
                zh: () => n
            });
            var a = function(e) {
                    return e.DOWNLOAD_WINDOW = "download_window", e.SENT_TRANSFER_DETAILS_PAGE = "sent_transfer_details_page", e.RECEIVED_TRANSFER_DETAILS_PAGE = "received_transfer_details_page", e.PREVIEW_PAGE = "preview_page", e
                }({}),
                n = function(e) {
                    return e.ALL_FILES = "ALL_FILES", e.SINGLE_FILE = "SINGLE_FILE", e
                }({});
            let i = {
                downloadWindowDisplayed(e) {
                    let {
                        transferId: t,
                        versionNumber: r,
                        accessControlType: a,
                        malwareProtectionStatus: n,
                        downloaderAlertEnabled: i,
                        isFromQRCode: o,
                        isPreviewable: s,
                        viewOption: l,
                        extensionsCounter: d,
                        previewFailures: c,
                        isRecovered: u,
                        displayNameIsDefault: _,
                        fileCount: p,
                        loadTimeInMs: E
                    } = e;
                    return {
                        kind: "download_window_displayed",
                        info: {
                            transferPublicId: t,
                            versionNumber: r,
                            ...a && {
                                accessControlType: a
                            },
                            ...n && {
                                malwareProtectionStatus: n
                            },
                            ...i && {
                                downloaderAlertEnabled: i
                            },
                            ...o && {
                                isFromQRCode: o
                            },
                            ...void 0 !== s && {
                                isPreviewable: s
                            },
                            viewOption: l,
                            ...d && {
                                extensionsCounter: d
                            },
                            ...c && {
                                previewFailures: c
                            },
                            ...void 0 !== u && {
                                isRecovered: u
                            },
                            ...void 0 !== _ && {
                                displayNameIsDefault: _
                            },
                            ...void 0 !== p && {
                                fileCount: p
                            },
                            ...void 0 !== E && {
                                loadTimeInMs: E
                            }
                        }
                    }
                },
                downloadStarted(e) {
                    let {
                        transferId: t,
                        filesNumber: r,
                        foldersNumber: a,
                        size: n,
                        hasPassword: i,
                        hasCustomBackground: o,
                        transferDownloadPrice: s,
                        location: l,
                        transferType: d,
                        downloadType: c,
                        files: u,
                        priceCurrency: _,
                        brandingType: p,
                        recovered: E,
                        downloaderEmailVerificationSelected: f,
                        malwareProtectionStatus: A,
                        isFromQRCode: T,
                        viewOption: m
                    } = e;
                    return {
                        kind: "download_started",
                        info: {
                            transferPublicId: t,
                            nOfFiles: r,
                            nOfFolders: a,
                            size: n,
                            hasPassword: i,
                            hasCustomBackground: o,
                            transferDownloadPrice: s,
                            location: l,
                            transferType: d,
                            downloadType: c,
                            files: JSON.stringify(u),
                            priceCurrency: _,
                            brandingType: p,
                            recovered: E,
                            ...f && {
                                downloaderEmailVerificationSelected: f
                            },
                            ...A && {
                                malwareProtectionStatus: A
                            },
                            ...T && {
                                isFromQRCode: T
                            },
                            viewOption: m
                        }
                    }
                },
                downloadCompleted(e) {
                    let {
                        transferId: t,
                        filesNumber: r,
                        foldersNumber: a,
                        size: n,
                        hasPassword: i,
                        hasCustomBackground: o,
                        transferDownloadPrice: s,
                        location: l,
                        transferType: d,
                        downloadType: c,
                        files: u,
                        priceCurrency: _,
                        brandingType: p,
                        recovered: E,
                        downloaderEmailVerificationSelected: f,
                        malwareProtectionStatus: A,
                        isFromQRCode: T,
                        downloadDurationMs: m,
                        viewOption: S
                    } = e;
                    return {
                        kind: "download_completed",
                        info: {
                            transferPublicId: t,
                            nOfFiles: r,
                            nOfFolders: a,
                            size: n,
                            hasPassword: i,
                            hasCustomBackground: o,
                            transferDownloadPrice: s,
                            location: l,
                            transferType: d,
                            downloadType: c,
                            files: JSON.stringify(u),
                            priceCurrency: _,
                            brandingType: p,
                            recovered: E,
                            ...f && {
                                downloaderEmailVerificationSelected: f
                            },
                            ...A && {
                                malwareProtectionStatus: A
                            },
                            ...T && {
                                isFromQRCode: T
                            },
                            ...m && {
                                downloadDurationMs: m
                            },
                            viewOption: S
                        }
                    }
                },
                downloadFailed(e) {
                    let {
                        transferId: t,
                        errorType: r
                    } = e;
                    return {
                        kind: "download_failed",
                        info: {
                            transferId: t,
                            ...r && {
                                errorType: r
                            }
                        }
                    }
                },
                downloadRequested(e) {
                    let {
                        location: t,
                        downloadType: r,
                        malwareProtectionStatus: a,
                        isAppRedirectEnabled: n
                    } = e;
                    return {
                        kind: "download_requested",
                        info: {
                            location: t,
                            downloadType: r,
                            ...a && {
                                malwareProtectionStatus: a
                            },
                            ...void 0 !== n && {
                                isAppRedirectEnabled: n
                            }
                        }
                    }
                },
                downloadWindowExpiredShown(e) {
                    let {
                        transferId: t
                    } = e;
                    return {
                        kind: "download_window_transfer_expired_shown",
                        info: {
                            transferPublicId: t
                        }
                    }
                },
                downloaderPasswordlessLogin: e => ({
                    kind: "download_email_verification_passwordless_login",
                    info: e
                }),
                previewWindowDisplayed(e) {
                    let {
                        transferId: t,
                        isUsingPreviewV2: r,
                        isPreviewMonetized: a
                    } = e;
                    return {
                        kind: "preview_in_download_page",
                        info: {
                            transferPublicId: t,
                            isUsingPreviewV2: r,
                            isPreviewMonetized: a
                        }
                    }
                },
                openPreviewClicked(e) {
                    let {
                        transferId: t,
                        trigger: r,
                        isPreviewMonetized: a,
                        isAppRedirectEnabled: n
                    } = e;
                    return {
                        kind: "open_preview_clicked",
                        info: {
                            transferPublicId: t,
                            trigger: r,
                            isPreviewMonetized: a,
                            isAppRedirectEnabled: n
                        }
                    }
                },
                openPreviewFileClicked(e) {
                    let {
                        transferId: t,
                        fileId: r,
                        isPreviewMonetized: a,
                        isAppRedirectEnabled: n
                    } = e;
                    return {
                        kind: "open_preview_file_clicked",
                        info: {
                            transferPublicId: t,
                            filePublicId: r,
                            isPreviewMonetized: a,
                            isAppRedirectEnabled: n
                        }
                    }
                },
                shareButtonTapped(e) {
                    let {
                        transferId: t
                    } = e;
                    return {
                        kind: "share_button_tapped",
                        info: {
                            transferId: t
                        }
                    }
                }
            }
        },
        72255: (e, t, r) => {
            r.d(t, {
                A: () => _
            });
            var a = r(84530);
            class n {
                containsListener(e) {
                    return !!(this._events[e] && this._events[e].length)
                }
                on(e, t) {
                    this._events[e] || (this._events[e] = []), this._events[e].push(t)
                }
                once(e, t) {
                    this._events[e] || (this._events[e] = []), this._events[e].push(t), this._events[e].push(function r() {
                        this.off(e, t), this.off(e, r)
                    })
                }
                off(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (this._events[e]) {
                        if (!t) {
                            this._events[e] = [];
                            return
                        }
                        this._events[e] = this._events[e].filter(e => e !== t)
                    }
                }
                emit(e, t) {
                    let r = !1;
                    if (!this._events[e] && !this._events["*"]) return !0;
                    if (this._events[e] && this._events[e].forEach(e => {
                            !1 === e.call(this, t) && (r = !0)
                        }), !this._events["*"]) return !r;
                    for (let a in this._events["*"]) !1 === this._events["*"][a].call(this, t, e) && (r = !0);
                    return !r
                }
                constructor() {
                    this._events = {}
                }
            }
            var i = r(93040),
                o = r(47809),
                s = r(72388);
            class l {
                matches(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : location,
                        r = this.regexp.exec(e);
                    if (!r) return !1;
                    let a = t.hash || "";
                    return {
                        requiredAuthState: this.requiredAuthState,
                        component: this.component,
                        params: function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                r = {};
                            for (let a = 1; a < e.length; a++) e[a] && (r[t[a - 1].name] = decodeURIComponent(e[a]));
                            return r
                        }(r, this.keys),
                        segment: a.replace(/^#/, ""),
                        query: s.parse(t.search),
                        context: !1,
                        type: this.type,
                        name: this.name,
                        title: this.title,
                        path: e,
                        requiresTOC: !!this.requiresTOC,
                        requiresTransferPassword: !!this.requiresTransferPassword,
                        updateTransfer: !!this.updateTransfer,
                        payment: this.payment,
                        shouldRedirect: this.shouldRedirect,
                        redirectTo: this.redirectTo,
                        migrated: this.migrated,
                        raw: this.raw,
                        hideWallpaper: this.hideWallpaper,
                        hideDropzone: this.hideDropzone,
                        showNavOnMobile: this.showNavOnMobile,
                        hideNav: this.hideNav
                    }
                }
                constructor(e, t) {
                    "string" == typeof e ? (this.path = e, this.component = !1, this.requiresTOC = !1, this.requiresTransferPassword = !1, this.updateTransfer = !1) : (this.path = e.route, this.component = e.component, this.requiredAuthState = e.requiredAuthState, this.name = e.name, this.title = e.title, this.requiresTOC = !!e.requiresTOC, this.requiresTransferPassword = !!e.requiresTransferPassword, this.updateTransfer = !!e.updateTransfer, this.payment = e.payment, this.shouldRedirect = e.shouldRedirect, this.redirectTo = e.redirectTo, this.raw = e.raw, this.migrated = e.migrated, this.hideWallpaper = e.hideWallpaper, this.hideDropzone = e.hideDropzone, this.showNavOnMobile = e.showNavOnMobile, this.hideNav = e.hideNav), this.keys = [], this.type = t, this.regexp = (0, o.MM)(this.path, this.keys)
                }
            }
            let d = [],
                c = null,
                u = {};
            class _ extends n {
                start() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.resolve(e, !0), i.A.listen((e, t) => {
                        this.resolve(e, !0, t)
                    }), t.hijackLinks && document.body.addEventListener("click", e => {
                        let t = e.target;
                        for (; t && "A" !== t.nodeName && t.parentNode;) t = t.parentNode;
                        if (!t || "A" !== t.nodeName || t.hash || t.target && "_self" !== t.target || t.getAttribute("data-prevent-routing") || e.ctrlKey || e.metaKey || 2 === e.which) return;
                        if ((t.getAttribute("rel") || "").match(/external/)) {
                            let r = window.open(t.href);
                            return r && (r.opener = null), e.preventDefault(), !1
                        }
                        if ("" === t.host && (t.href = t.href || "#"), t.host !== location.host || t.protocol !== location.protocol) return;
                        e.preventDefault();
                        let r = {},
                            a = t.getAttribute("data-route-type");
                        a && (r.type = a);
                        let n = t.getAttribute("data-route-context");
                        n && (r.context = n), setTimeout(() => this.resolve(t.pathname, !1, t, r), 0)
                    })
                }
                resolve() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        o = !1;
                    !1 === a && (a = r.g.location);
                    for (let t = 0; t < d.length; t++) {
                        let r = e.split("?")[0];
                        if (o = d[t].matches(r, a)) break
                    }
                    if (!o) return this.emit("error", e);
                    let s = a !== r.g.location && (a.hash || a.search),
                        l = e;
                    if ((!this.lastPath || t || s || this.lastPath === l) && (a.search && (l += "?".concat(a.search.replace(/^\?/, ""))), a.hash && (l += "#".concat(a.hash.replace(/^#/, "")))), this.lastFullPath === l && (null === this.lastPathOptions || this.lastPathOptions.context === n.context)) return;
                    let c = !1,
                        p = () => {
                            let r = o.title || _.DEFAULT_TITLE;
                            !c && (c = !0, u[o.type] = e, t && "silent" !== t ? i.A.replace(l, r) : t || i.A.push(l, r), n.type && (o.type = n.type), n.context && (o.context = n.context), n.query && (o.query = n.query), this.lastPath = e, this.lastFullPath = l, this.lastPathOptions = n, this.emit("route", o), o.segment || window.scrollTo(0, 0))
                        };
                    return this.containsListener("beforeroute") ? !1 !== this.emit("beforeroute", p) && p() : p(), o
                }
                static get currentRouter() {
                    return c || !1
                }
                static navigateTo() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    if (!c) throw "NoRouterInitialized";
                    return c.resolve(...t)
                }
                static getLastRoute(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/";
                    return u[e] || t
                }
                static on() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    c.on(...t)
                }
                static once() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    c.once(...t)
                }
                static off() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    c.off(...t)
                }
                constructor(e = {}) {
                    if (super(), this.lastPath = null, this.lastFullPath = null, this.lastPathOptions = null, !e) throw "NoRoutesDefined";
                    d = [], c = this, Object.keys(e).forEach(t => {
                        d.push(...e[t].map(e => new l(e, t)))
                    })
                }
            }
            _.SILENT = "silent", _.DEFAULT_TITLE = a.A.t("site.titles.default")
        },
        72429: (e, t, r) => {
            r.d(t, {
                A8: () => n,
                c0: () => l,
                hH: () => i,
                mT: () => s,
                nv: () => a
            });
            var a = function(e) {
                return e.GRANTED = "granted", e.DENIED = "denied", e.DEFAULT = "default", e
            }({});

            function n() {
                return "Notification" in window
            }

            function i() {
                return n() ? Notification.permission : "denied"
            }

            function o() {
                return "granted" === i()
            }
            async function s() {
                if (!n()) return !1;
                if (o()) return !0;
                if ("denied" === i()) return !1;
                try {
                    let e = await Notification.requestPermission();
                    return "granted" === e
                } catch (e) {
                    return !1
                }
            }

            function l(e) {
                if ("visible" === document.visibilityState && document.hasFocus() || !n() || !o()) return null;
                var t = {
                    title: "WeTransfer",
                    body: e
                };
                if (!n() || !o()) return null;
                try {
                    let e = new Notification(t.title, {
                        body: t.body,
                        icon: "/favicon.svg"
                    });
                    return t.onClick && (e.onclick = () => {
                        var r;
                        window.focus(), null == (r = t.onClick) || r.call(t), e.close()
                    }), e
                } catch (e) {
                    return null
                }
            }
        },
        72546: (e, t, r) => {
            r.d(t, {
                FX: () => l,
                He: () => i,
                Jz: () => o,
                Kj: () => n,
                Rn: () => s,
                YS: () => E,
                gw: () => d,
                hV: () => u,
                kc: () => _,
                uX: () => p
            });
            var a = r(4559);
            let n = e => e.transfer,
                i = (0, a.Mz)(n, e => e.parent_id),
                o = (0, a.Mz)(n, e => e.state),
                s = (0, a.Mz)(n, e => (null == e ? void 0 : e.id) || !1),
                l = (0, a.Mz)(n, e => e.requestId),
                d = (0, a.Mz)(n, e => e.type),
                c = (0, a.Mz)(n, e => e.price),
                u = (0, a.Mz)(c, e => {
                    var t;
                    return null != (t = null == e ? void 0 : e.amount) ? t : null
                });
            (0, a.Mz)(n, e => e.secret);
            let _ = (0, a.Mz)(n, e => e.workspaceId),
                p = (0, a.Mz)(n, e => e.trackingId),
                E = (0, a.Mz)(n, e => e.resumeUploadAttempts)
        },
        72754: (e, t, r) => {
            r.d(t, {
                Ad: () => d,
                Sr: () => c,
                cJ: () => E,
                jw: () => u,
                oR: () => l,
                og: () => s,
                ow: () => p,
                pq: () => o,
                wn: () => i,
                y_: () => _
            });
            var a = r(4559);
            let n = e => e.paywalls,
                i = (0, a.Mz)(n, e => e.currentTrigger),
                o = (0, a.Mz)(n, e => e.currentTriggerUrl),
                s = (0, a.Mz)(n, e => e.currentTriggerUrlPath),
                l = (0, a.Mz)(n, e => e.currentPaywall),
                d = (0, a.Mz)(n, e => e.transferDetails),
                c = (0, a.Mz)(n, e => e.limitsHit),
                u = (0, a.Mz)(n, e => e.currentWebpage),
                _ = (0, a.Mz)(n, e => e.higherLimitsPaywallTransferUnlocked),
                p = (0, a.Mz)(n, e => e.shouldStartTransferAfterMedicalConsent),
                E = (0, a.Mz)(n, e => e.skipMedicalConsentCheckForNextRun)
        },
        73692: (e, t, r) => {
            r.d(t, {
                do: () => i,
                gE: () => o,
                k7: () => l,
                rU: () => d,
                t7: () => s,
                tZ: () => c
            });
            var a = r(96361);
            let n = {
                    info: {
                        transferId: "",
                        resumeToken: "",
                        totalSize: 0,
                        filesCount: 0,
                        userId: 0,
                        canUseUploadCdn: !1,
                        expectedResumeCount: 0
                    },
                    filesResumeInfo: [],
                    userClickedStart: !1,
                    persisted: !1
                },
                i = (0, a.Z0)({
                    name: "resumePersistence",
                    initialState: n,
                    reducers: {
                        setTransferInfoForPersistence(e, t) {
                            e.info = t.payload
                        },
                        addFileResumeInfoForPersistence(e, t) {
                            let {
                                transferId: r,
                                resumeInfo: a
                            } = t.payload;
                            e.info.transferId && e.info.transferId !== r || e.filesResumeInfo.push(a)
                        },
                        markUserClickedStartForTransfer(e) {
                            e.userClickedStart = !0
                        },
                        markPersistedForTransfer(e, t) {
                            let {
                                transferId: r
                            } = t.payload;
                            e.info.transferId && e.info.transferId !== r || (e.persisted = !0)
                        },
                        resetTransferResumePersistence(e) {
                            e.info = n.info, e.filesResumeInfo = n.filesResumeInfo, e.userClickedStart = n.userClickedStart, e.persisted = n.persisted
                        }
                    }
                }),
                {
                    setTransferInfoForPersistence: o,
                    addFileResumeInfoForPersistence: s,
                    markUserClickedStartForTransfer: l,
                    markPersistedForTransfer: d,
                    resetTransferResumePersistence: c
                } = i.actions
        },
        74452: (e, t, r) => {
            r.d(t, {
                R: () => i,
                u: () => n
            });
            var a = r(96361);
            let n = {},
                i = (0, a.Z0)({
                    name: "wolfAnalytics",
                    initialState: n,
                    reducers: {
                        initiatePaywallFlow(e, t) {
                            e.paywallId = t.payload.paywallId, e.paywallInfo = t.payload.paywallInfo, e.predictionInfo = t.payload.predictionInfo, e.transferInfo = t.payload.transferInfo, e.senderInfo = t.payload.senderInfo, e.contextInfo = t.payload.contextInfo
                        },
                        setPredictionInfo(e, t) {
                            e.predictionInfo = t.payload
                        },
                        completePaywallFlow(e) {
                            e.paywallId = void 0, e.paywallInfo = void 0, e.predictionInfo = void 0, e.transferInfo = void 0, e.senderInfo = void 0, e.contextInfo = void 0
                        }
                    }
                })
        },
        74469: (e, t, r) => {
            r.d(t, {
                i: () => a
            });
            var a = function(e) {
                return e.MAIN = "main", e
            }({})
        },
        74771: (e, t, r) => {
            r.d(t, {
                A: () => a
            });
            let a = {
                resumeStormUpload: void 0,
                pauseStormUpload: void 0,
                cancelStormUpload: void 0
            }
        },
        75555: (e, t, r) => {
            r.d(t, {
                Ay: () => _
            });
            var a = r(40334),
                n = r(79716),
                i = r(62373),
                o = r(55676);
            let s = {
                    id: a.o.termsAndConditions.consentId,
                    version: a.o.termsAndConditions.consentVersion,
                    name: a.o.cookies.termsAndConditions.name,
                    durationInDays: 365,
                    domain: (0, n.R)()
                },
                l = {
                    ...s,
                    validCookieValue: "".concat(s.version, ":").concat(s.id)
                };

            function d() {
                let e = o.A.get(l.name),
                    t = !1;
                return e === l.validCookieValue ? t = !0 : ("1" === e || e === l.version) && (u(), t = !0), t
            }

            function c() {
                i.A.trackTermsAccepted({
                    id: l.id,
                    version: l.version,
                    name: l.name
                })
            }

            function u() {
                let e = document.cookie.match(RegExp(l.name, "g")),
                    t = (0, n.x)();
                (null == e ? void 0 : e.length) > 0 && e.forEach(e => {
                    o.A.unset(e, {
                        domain: ""
                    }), o.A.unset(e, {
                        domain: t
                    })
                }), o.A.set(l.name, l.validCookieValue, {
                    days: l.durationInDays,
                    domain: l.domain
                })
            }
            let _ = {
                settings: l,
                configure: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    l = {
                        ...l,
                        ...e
                    }, d() && c()
                },
                accept: function() {
                    u(), c()
                },
                areAccepted: d,
                setCookie: u
            }
        },
        75600: (e, t, r) => {
            r.d(t, {
                NU: () => l,
                jf: () => d,
                ue: () => s
            });
            var a = r(96361),
                n = r(87563),
                i = r(89187),
                o = r(49309);
            let s = {
                    countryCode: "NL",
                    selectedPaymentMethod: n.l.CARD,
                    billingPeriod: i.CS.MONTHLY,
                    planTier: i.js.ULTIMATE,
                    isForBusiness: !1,
                    coupon: {
                        code: null,
                        method: null
                    },
                    startFreeTrial: !1,
                    monthliesEnabled: !0,
                    weekliesEnabled: !1,
                    trk: void 0,
                    source: void 0,
                    enterpriseSeats: 1,
                    email: "",
                    teamId: "",
                    userId: "",
                    showPayment: !1,
                    shouldShowFakeDoorModal: void 0,
                    showFakeDoorModal: !1,
                    showPasswordlessLoginForm: !1,
                    showUpdateEmailForm: !1,
                    areNorCheckoutTermsAccepted: !1
                },
                l = "wt-checkout-state",
                d = (0, a.Z0)({
                    name: "checkout",
                    initialState: s,
                    reducers: {
                        setCountryCode: (e, t) => {
                            e.countryCode = t.payload
                        },
                        setSelectedPaymentMethod: (e, t) => {
                            e.selectedPaymentMethod = t.payload
                        },
                        setBillingPeriod: (e, t) => {
                            e.billingPeriod = t.payload
                        },
                        setPlanTier: (e, t) => {
                            e.planTier = t.payload
                        },
                        setCoupon: (e, t) => {
                            let r = t.payload.code;
                            "Adobe40" === r && (r = "ADOBE40"), e.coupon = {
                                ...t.payload,
                                code: r
                            }
                        },
                        setTrk: (e, t) => {
                            e.trk = t.payload
                        },
                        setSource: (e, t) => {
                            e.source = t.payload
                        },
                        setIsForBusiness: (e, t) => {
                            e.isForBusiness = t.payload
                        },
                        setStartFreeTrial: (e, t) => {
                            e.startFreeTrial = t.payload
                        },
                        setMonthliesEnabled: (e, t) => {
                            e.monthliesEnabled = t.payload
                        },
                        setWeekliesEnabled: (e, t) => {
                            e.weekliesEnabled = t.payload
                        },
                        setEnterpriseSeats: (e, t) => {
                            e.enterpriseSeats = t.payload
                        },
                        setEmail: (e, t) => {
                            e.email = t.payload
                        },
                        deleteSession: e => {
                            e.email = "", e.teamId = "", e.userId = "", e.guestToken = void 0
                        },
                        setTeamId: (e, t) => {
                            e.teamId = t.payload
                        },
                        setUserId: (e, t) => {
                            e.userId = t.payload
                        },
                        setGuestToken: (e, t) => {
                            e.guestToken = t.payload
                        },
                        setShowPayment: (e, t) => {
                            e.showPayment = t.payload
                        },
                        setShouldShowFakeDoorModal: (e, t) => {
                            e.shouldShowFakeDoorModal = t.payload
                        },
                        setShowFakeDoorModal: (e, t) => {
                            e.showFakeDoorModal = t.payload
                        },
                        setShowPasswordlessLoginForm: (e, t) => {
                            e.showPasswordlessLoginForm = t.payload
                        },
                        setShowUpdateEmailForm: (e, t) => {
                            e.showUpdateEmailForm = t.payload
                        },
                        setAreNorCheckoutTermsAccepted: (e, t) => {
                            e.areNorCheckoutTermsAccepted = t.payload
                        }
                    }
                });
            o.L.startListening({
                matcher: (0, a.i0)(d.actions.deleteSession, d.actions.setEmail, d.actions.setTeamId, d.actions.setUserId, d.actions.setGuestToken),
                effect: async (e, t) => {
                    localStorage.setItem(l, JSON.stringify({
                        email: t.getState().checkout.email,
                        teamId: t.getState().checkout.teamId,
                        userId: t.getState().checkout.userId,
                        guestToken: t.getState().checkout.guestToken
                    }))
                }
            })
        },
        76247: (e, t, r) => {
            r.d(t, {
                I$: () => i,
                az: () => o,
                hA: () => l,
                jC: () => s
            });
            var a = r(28330);
            let n = [a.dH.active, a.dH.trialing],
                i = [a.dH.past_due, a.dH.unpaid],
                o = [...n, ...i],
                s = {
                    TRANSFER_LIMIT: "2 GB"
                },
                l = {
                    STORAGE_LIMIT: "1 TB",
                    PORTALS_LIMIT: 1,
                    NEW_PORTALS_LIMIT: 5
                }
        },
        76780: (e, t, r) => {
            r.d(t, {
                O: () => d,
                u: () => l
            });
            var a = r(96361),
                n = r(80341),
                i = r(24870),
                o = r(83263),
                s = r(99469);
            let l = {
                    assets: {},
                    backgroundType: n.hK.image,
                    coverLayouts: {},
                    selectedBackgroundAssets: [i.u6],
                    currentTransferId: null,
                    draftCoverLayout: null,
                    hoveredBlock: null,
                    isLoading: !1,
                    isModalOpen: !1,
                    modalPageId: void 0,
                    selectedBlock: null,
                    selectedBackgroundColor: o.wO.color,
                    stagedCoverLayout: null,
                    entryPoint: null,
                    uploadedBackgroundAssets: [i.u6],
                    multiImageLayout: n.n3.Columns,
                    selectedPreviewsBackgroundAssets: [i.u6],
                    uploadedPreviewsBackgroundAssets: [i.u6],
                    savedPreviewsBackgroundAsset: null,
                    previewsBackgroundType: n.hK.image,
                    selectedPreviewsBackgroundColor: o.wO.color,
                    savedPreviewsBackgroundType: null,
                    savedPreviewsBackgroundColor: null,
                    stagedPreviewsBackgroundAsset: null,
                    stagedPreviewsBackgroundType: null,
                    stagedPreviewsBackgroundColor: null
                },
                d = (0, a.Z0)({
                    name: "showcase",
                    initialState: l,
                    reducers: {
                        closeShowcaseModal(e) {
                            e.isModalOpen = !1, e.uploadedBackgroundAssets = [i.u6], e.selectedBackgroundAssets = [i.u6], e.uploadedPreviewsBackgroundAssets = [i.u6], e.selectedPreviewsBackgroundAssets = [i.u6], e.savedPreviewsBackgroundAsset = null, e.previewsBackgroundType = n.hK.image, e.selectedPreviewsBackgroundColor = o.wO.color, e.savedPreviewsBackgroundType = null, e.savedPreviewsBackgroundColor = null
                        },
                        openShowcaseModal(e) {
                            e.isModalOpen = !0
                        },
                        setEntryPoint(e, t) {
                            e.entryPoint = t.payload
                        },
                        setHoveredBlock(e, t) {
                            e.hoveredBlock = t.payload
                        },
                        clearHoveredBlock(e) {
                            e.hoveredBlock = null
                        },
                        setSelectedBlock(e, t) {
                            e.selectedBlock = t.payload
                        },
                        setSelectedBackgroundColor(e, t) {
                            var r, a, o, l, d, c, u;
                            e.selectedBackgroundColor = t.payload, (null == (r = e.draftCoverLayout) ? void 0 : r.background) && (e.draftCoverLayout.background.backgroundColor = t.payload), e.backgroundType === n.hK.solidColor ? ((null == (a = e.draftCoverLayout) ? void 0 : a.titleText) && (e.draftCoverLayout.titleText.textColor = (0, s.c)(t.payload)), (null == (o = e.draftCoverLayout) ? void 0 : o.bodyText) && (e.draftCoverLayout.bodyText.textColor = (0, s.c)(t.payload))) : ((null == (l = e.draftCoverLayout) ? void 0 : l.titleText) && !(null == (d = e.draftCoverLayout) ? void 0 : d.titleText.textColor) && (e.draftCoverLayout.titleText.textColor = i._K), (null == (c = e.draftCoverLayout) ? void 0 : c.bodyText) && !(null == (u = e.draftCoverLayout) ? void 0 : u.bodyText) && (e.draftCoverLayout.bodyText.textColor = i._K))
                        },
                        clearSelectedBlock(e) {
                            e.selectedBlock = null
                        },
                        setCoverLayoutByTransferId(e, t) {
                            let {
                                coverLayout: r,
                                transferId: a
                            } = t.payload;
                            e.coverLayouts[a] = r
                        },
                        setDraftCoverLayout(e, t) {
                            e.draftCoverLayout = t.payload
                        },
                        clearDraftCoverLayout(e) {
                            e.draftCoverLayout = null
                        },
                        setCurrentTransferId(e, t) {
                            e.currentTransferId = t.payload
                        },
                        clearCurrentTransferId(e) {
                            e.currentTransferId = null
                        },
                        clearStagedCoverLayout(e) {
                            e.stagedCoverLayout = null, e.stagedPreviewsBackgroundAsset = null, e.stagedPreviewsBackgroundType = null, e.stagedPreviewsBackgroundColor = null
                        },
                        setBackgroundType(e, t) {
                            var r, a, l, d, c, u;
                            let _ = t.payload;
                            e.backgroundType = _, _ === n.hK.solidColor ? ((null == (r = e.draftCoverLayout) ? void 0 : r.titleText) && (e.draftCoverLayout.titleText.textColor = (0, s.c)(e.selectedBackgroundColor || o.z6.color)), (null == (a = e.draftCoverLayout) ? void 0 : a.bodyText) && (e.draftCoverLayout.bodyText.textColor = (0, s.c)(e.selectedBackgroundColor || o.z6.color))) : ((null == (l = e.draftCoverLayout) ? void 0 : l.titleText) && !(null == (d = e.draftCoverLayout) ? void 0 : d.titleText.textColor) && (e.draftCoverLayout.titleText.textColor = i._K), (null == (c = e.draftCoverLayout) ? void 0 : c.bodyText) && !(null == (u = e.draftCoverLayout) ? void 0 : u.bodyText.textColor) && (e.draftCoverLayout.bodyText.textColor = i._K))
                        },
                        setIsLoading(e, t) {
                            e.isLoading = t.payload
                        },
                        setStagedCoverLayout(e, t) {
                            e.stagedCoverLayout = t.payload
                        },
                        updateTextInBlock(e, t) {
                            let {
                                blockType: r,
                                text: a
                            } = t.payload;
                            if (e.draftCoverLayout) {
                                let t = e.draftCoverLayout[r];
                                t && "text" in t && (t.text = a)
                            }
                        },
                        updateTextColorInBlock(e, t) {
                            let {
                                blockType: r,
                                color: a
                            } = t.payload;
                            if (e.draftCoverLayout) {
                                let t = e.draftCoverLayout[r];
                                t && "text" in t && (t.textColor = a)
                            }
                        },
                        updateVisibilityInBlock(e, t) {
                            let {
                                blockType: r,
                                visibility: a
                            } = t.payload;
                            if (e.draftCoverLayout) {
                                let t = e.draftCoverLayout[r];
                                t && "visibility" in t && (t.visibility = a)
                            }
                        },
                        setSelectedBackgroundAsset(e, t) {
                            e.selectedBackgroundAssets = [t.payload]
                        },
                        toggleBackgroundAssetSelection(e, t) {
                            let r = t.payload,
                                a = e.selectedBackgroundAssets.findIndex(e => e.assetId === r.assetId);
                            if (a >= 0) {
                                if (e.selectedBackgroundAssets.length > 1 && (e.selectedBackgroundAssets.splice(a, 1), 1 === e.selectedBackgroundAssets.length)) {
                                    var n;
                                    let t = e.selectedBackgroundAssets[0];
                                    (null == (n = e.draftCoverLayout) ? void 0 : n.background) && (e.draftCoverLayout.background.assetId = t.assetId, e.draftCoverLayout.background.asset = t)
                                }
                            } else e.selectedBackgroundAssets.push(r)
                        },
                        setAsset(e, t) {
                            let r = t.payload;
                            r.assetId && (e.assets[r.assetId] = r)
                        },
                        removeAsset(e, t) {
                            let r = t.payload;
                            delete e.assets[r]
                        },
                        removeCoverLayoutByTransferId(e, t) {
                            let r = t.payload;
                            delete e.coverLayouts[r]
                        },
                        updateBackgroundBlock(e, t) {
                            let r = t.payload;
                            e.draftCoverLayout && (e.draftCoverLayout[n._B.Background] = r)
                        },
                        setShowcaseModalPageId(e, t) {
                            e.modalPageId = t.payload
                        },
                        addUploadedBackgroundAsset(e, t) {
                            let r = t.payload;
                            e.uploadedBackgroundAssets.some(e => e.assetId === r.assetId) || e.uploadedBackgroundAssets.push(r)
                        },
                        clearUploadedBackgroundAssets(e) {
                            e.uploadedBackgroundAssets = [i.u6]
                        },
                        setMultiImageLayout(e, t) {
                            e.multiImageLayout = t.payload
                        },
                        setSelectedPreviewsBackgroundAsset(e, t) {
                            e.selectedPreviewsBackgroundAssets = [t.payload]
                        },
                        togglePreviewsBackgroundAssetSelection(e, t) {
                            let r = t.payload,
                                a = e.selectedPreviewsBackgroundAssets.findIndex(e => e.assetId === r.assetId);
                            a >= 0 ? e.selectedPreviewsBackgroundAssets.splice(a, 1) : e.selectedPreviewsBackgroundAssets = [r]
                        },
                        addUploadedPreviewsBackgroundAsset(e, t) {
                            let r = t.payload;
                            e.uploadedPreviewsBackgroundAssets.some(e => e.assetId === r.assetId) || e.uploadedPreviewsBackgroundAssets.push(r)
                        },
                        clearUploadedPreviewsBackgroundAssets(e) {
                            e.uploadedPreviewsBackgroundAssets = [i.u6]
                        },
                        clearSelectedPreviewsBackgroundAssets(e) {
                            e.selectedPreviewsBackgroundAssets = []
                        },
                        setSavedPreviewsBackgroundAsset(e, t) {
                            e.savedPreviewsBackgroundAsset = t.payload
                        },
                        clearSavedPreviewsBackgroundAsset(e) {
                            e.savedPreviewsBackgroundAsset = null
                        },
                        setPreviewsBackgroundType(e, t) {
                            e.previewsBackgroundType = t.payload, t.payload === n.hK.solidColor && (e.selectedPreviewsBackgroundAssets = [])
                        },
                        setSelectedPreviewsBackgroundColor(e, t) {
                            e.selectedPreviewsBackgroundColor = t.payload
                        },
                        setSavedPreviewsBackgroundType(e, t) {
                            e.savedPreviewsBackgroundType = t.payload
                        },
                        setSavedPreviewsBackgroundColor(e, t) {
                            e.savedPreviewsBackgroundColor = t.payload
                        },
                        setStagedPreviewsBackground(e, t) {
                            e.stagedPreviewsBackgroundAsset = t.payload.asset, e.stagedPreviewsBackgroundType = t.payload.type, e.stagedPreviewsBackgroundColor = t.payload.color
                        },
                        clearStagedPreviewsBackground(e) {
                            e.stagedPreviewsBackgroundAsset = null, e.stagedPreviewsBackgroundType = null, e.stagedPreviewsBackgroundColor = null
                        }
                    }
                })
        },
        77612: (e, t, r) => {
            r.d(t, {
                g: () => i
            });
            var a = r(40334),
                n = r(55676);
            let i = () => n.A.get(a.o.cookies.currentTeam.name)
        },
        78571: (e, t, r) => {
            r.d(t, {
                DZ: () => o,
                NV: () => s,
                xl: () => i
            });
            var a = r(4559);
            let n = e => e.transferWindowCardSwitcher,
                i = (0, a.Mz)(n, e => e.isSwitcherDisabled),
                o = (0, a.Mz)(n, e => e.isUploadForeground),
                s = (0, a.Mz)(n, e => e.uploadCompletionUpsellCardParams)
        },
        80341: (e, t, r) => {
            r.d(t, {
                _B: () => a,
                hK: () => n,
                n3: () => i
            });
            var a = function(e) {
                    return e.TitleText = "titleText", e.BodyText = "bodyText", e.Background = "background", e.PreviewsBackground = "previewsBackground", e
                }({}),
                n = function(e) {
                    return e.image = "Image", e.solidColor = "Solid color", e
                }({}),
                i = function(e) {
                    return e.Columns = "columns", e.Rows = "rows", e
                }({})
        },
        80933: (e, t, r) => {
            r.d(t, {
                Ay: () => d,
                Dt: () => s
            });
            var a = r(85201),
                n = r(65509),
                i = r(49193),
                o = r(95779);
            let s = e => "curated" in e && e.curated,
                l = {
                    wallpaper: "Wallpaper",
                    profile_picture: "ProfilePicture",
                    email_background: "EmailBackground"
                },
                d = {
                    cancelToken: null,
                    allocateAsset(e, t, r, a) {
                        let i = {
                            asset_model_class: l[t],
                            account_id: e,
                            original_asset_filename: r,
                            ...a && {
                                context: a
                            }
                        };
                        return n.A.UI.allocateAsset(i)
                    },
                    allocateCuratedWallpaper(e, t, r) {
                        let a = {
                            account_id: e,
                            image_path: t,
                            ...r && {
                                context: r
                            }
                        };
                        return n.A.UI.allocateCuratedImage(a)
                    },
                    uploadAsset(e, t, r) {
                        this.cancelToken = a.A.CancelToken.source();
                        let n = new FormData;
                        return Object.entries({
                            ...t,
                            file: r
                        }).forEach(e => {
                            let [t, r] = e;
                            n.append(t, r)
                        }), (0, o.A)({
                            method: "post",
                            path: e,
                            params: n,
                            cancelToken: this.cancelToken.token
                        })
                    },
                    cancelUpload() {
                        null !== this.cancelToken && (this.cancelToken.cancel(), this.cancelToken = null)
                    },
                    isFileValid(e, t, r, a) {
                        switch (e) {
                            case "wallpaper":
                                return t <= a.maxWallpaperSize && i.Mz.includes(r);
                            case "email_background":
                                return t <= a.maxEmailBackgroundSize && i.JK.includes(r);
                            case "profile_picture":
                                return t <= a.maxProfilePictureSize && i.JK.includes(r);
                            default:
                                return !1
                        }
                    }
                }
        },
        82187: (e, t, r) => {
            r.d(t, {
                Gi: () => s,
                _y: () => o,
                xO: () => i
            });
            var a = r(88848),
                n = function(e) {
                    return e.UserLogin = "user_login", e
                }(n || {});
            let i = {
                userLogin(e) {
                    let {
                        trigger: t,
                        triggerUrl: r,
                        triggerUrlPath: a,
                        isSignUp: n,
                        method: i,
                        paywall: o,
                        paywallTrigger: s,
                        emailVerificationCompleted: l,
                        transferId: d
                    } = e;
                    return {
                        kind: "user_login",
                        info: {
                            trigger: t || "unknown",
                            trigger_url: r,
                            trigger_url_path: a,
                            is_signup: n,
                            ...i ? {
                                method: i
                            } : {},
                            ...o ? {
                                paywall: o
                            } : {},
                            ...s ? {
                                paywall_trigger: s
                            } : {},
                            ...d ? {
                                transfer_id: d
                            } : {},
                            email_verification_completed: l
                        }
                    }
                }
            };

            function o(e) {
                if (e) switch (e) {
                    case a.vW.REQUEST_ANONYMOUS_SIGN_UP:
                    case a.vW.REQUEST_FORM_STORAGE_UPSELL:
                        return "request";
                    case a.vW.NAV_BAR_SIGN_UP:
                    case a.vW.NAV_BAR_LOGIN:
                        return "nav_bar";
                    case a.vW.TRANSFER_WINDOW_CUSTOM_WALLPAPER_PLACEHOLDER:
                    case a.vW.TRANSFER_WINDOW_CUSTOM_WALLPAPER_UPSELL:
                    case a.vW.TRANSFER_WINDOW_PAID_TRANSFER_PLACEHOLDER:
                    case a.vW.TRANSFER_WINDOW_PAID_TRANSFER_UPSELL:
                    case a.vW.TRANSFER_WINDOW_SET_EXPIRY:
                    case a.vW.TRANSFER_WINDOW_SET_PASSWORD_PLACEHOLDER:
                    case a.vW.TRANSFER_WINDOW_SET_PASSWORD_UPSELL:
                    case a.vW.TRANSFER_WINDOW_SHOWCASE_PLACEHOLDER:
                    case a.vW.TRANSFER_WINDOW_SHOWCASE_UPSELL:
                    case a.vW.TRANSFER_WINDOW_PROTECT_YOUR_TRANSFERS_PASSWORD_UPSELL:
                    case a.vW.TRANSFER_WINDOW_DETAILS_PASSWORD_UPSELL:
                        return "transfer_upsell";
                    case "request":
                    case "one_tap":
                    case "workspace_invite":
                    case "protected_route":
                    case "passwordless_login_error":
                    case "subscriber_benefits":
                    case "enterprise_onboarding":
                    case "referrals_modal":
                    case "nav_bar":
                    case "transfer":
                    case "transfer_upsell":
                    case "mobile_app":
                        return e;
                    default:
                        return "paywall"
                }
            }

            function s(e) {
                let {
                    emailVerificationCompleted: t,
                    ...r
                } = e;
                return {
                    trigger: o(r.trigger),
                    triggerUrl: r.triggerUrl || location.href,
                    triggerUrlPath: r.triggerUrlPath || location.pathname,
                    isSignUp: !0,
                    method: "passwordless",
                    paywall: r.paywall,
                    paywallTrigger: r.paywall ? r.trigger : void 0,
                    emailVerificationCompleted: t
                }
            }
        },
        82261: (e, t, r) => {
            r.d(t, {
                dA: () => s,
                Hi: () => l,
                ue: () => a,
                Uh: () => u,
                MK: () => _,
                qB: () => i,
                Ar: () => o
            });
            let a = {
                customWallpaper: null,
                isCheckOver: !1
            };
            var n = function(e) {
                return e.setCustomWallpaper = "SET_CUSTOM_WALLPAPER", e.clearCustomWallpaper = "CLEAR_CUSTOM_WALLPAPER", e.setIsCustomWallpaperCheckOver = "SET_IS_CUSTOM_WALLPAPER_CHECK_OVER", e
            }({});
            let i = e => ({
                    type: "SET_CUSTOM_WALLPAPER",
                    payload: e
                }),
                o = e => ({
                    type: "SET_IS_CUSTOM_WALLPAPER_CHECK_OVER",
                    payload: e
                }),
                s = () => ({
                    type: "CLEAR_CUSTOM_WALLPAPER"
                }),
                l = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case n.setCustomWallpaper:
                            return {
                                ...e, customWallpaper: t.payload
                            };
                        case n.clearCustomWallpaper:
                            return {
                                ...e, customWallpaper: null
                            };
                        case n.setIsCustomWallpaperCheckOver:
                            return {
                                ...e, isCheckOver: t.payload
                            };
                        default:
                            return e
                    }
                };
            var d = r(4559);
            let c = e => e.customWallpapers,
                u = (0, d.Mz)(c, e => e.customWallpaper),
                _ = (0, d.Mz)(c, e => e.isCheckOver)
        },
        82667: (e, t, r) => {
            r.d(t, {
                f: () => n
            });
            let a = 256 * r(26115).MB;

            function n(e) {
                let {
                    transferExpiry: t,
                    currentSize: r,
                    isRecoverable: n
                } = e;
                if (!n || !t) return null;
                let i = new Date;
                return i.setSeconds(i.getSeconds() + (t + (r && r < a ? 31536e3 : 7776e3))), Math.floor(i.getTime() / 1e3)
            }
        },
        82710: (e, t, r) => {
            r.d(t, {
                S: () => u,
                E: () => c
            });
            var a = r(85201),
                n = r(54557),
                i = r.n(n),
                o = r(19653),
                s = r(39901);
            class l extends Error {
                constructor(e) {
                    super(e), this.name = "GuestTokenError"
                }
            }
            var d = r(95779);

            function c(e) {
                return null != e && i()(e) && "data" in e && void 0 !== e.data
            }
            let u = function() {
                let {
                    baseUrl: e
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    baseUrl: ""
                };
                return async (t, r) => {
                    var n, i, c;
                    let {
                        url: u,
                        method: _,
                        data: p,
                        params: E,
                        headers: f,
                        requiresAuth: A = !1,
                        requiresGuestAuth: T = !1,
                        withCredentials: m,
                        responseType: S
                    } = t, {
                        getState: g
                    } = r;
                    try {
                        let t = e + u,
                            r = {
                                ...(0, d.W)(t),
                                ...f
                            };
                        if (A) {
                            let e, t = g();
                            e = T ? function(e) {
                                if (e && (0, s.A)(new Date(e.expiresAt))) return e.accessToken;
                                throw new l("Guest token missing or expired")
                            }(null == t || null == (n = t.checkout) ? void 0 : n.guestToken) : await (0, o.iD)(), r = {
                                ...r,
                                Authorization: "Bearer ".concat(e)
                            }
                        }
                        return {
                            data: (await (0, a.A)({
                                url: t,
                                method: _,
                                data: p,
                                params: E,
                                headers: r,
                                withCredentials: m,
                                responseType: S
                            })).data
                        }
                    } catch (e) {
                        if (a.A.isAxiosError(e)) return {
                            error: {
                                status: null == (i = e.response) ? void 0 : i.status,
                                data: (null == (c = e.response) ? void 0 : c.data) || e.message
                            }
                        };
                        if (e instanceof l) return {
                            error: {
                                status: 401,
                                data: {
                                    message: e.message,
                                    error: "guest_token_expired"
                                }
                            }
                        };
                        return {
                            error: {
                                status: 500,
                                data: {
                                    message: e instanceof Error ? e.message : "Unknown error",
                                    error: "internal_error"
                                }
                            }
                        }
                    }
                }
            }
        },
        82901: (e, t, r) => {
            r.d(t, {
                QQ: () => v,
                WR: () => I,
                IP: () => R,
                Cs: () => h,
                Hu: () => y,
                Ob: () => w
            });
            var a = r(32770),
                n = r.n(a),
                i = r(65509),
                o = r(63010),
                s = r(91010),
                l = r(87379),
                d = r(95779),
                c = r(42789),
                u = r(85201),
                _ = r(49992),
                p = r(3213),
                E = r.n(p);

            function f() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (429 === n()(t, "response.status")) {
                    let e = parseInt(t.response.headers["retry-after"], 10);
                    if (E()(e)) return 1e3 * e
                }
                return _.Ay.exponentialDelay(e)
            }
            var A = r(96652);
            let T = e => {
                try {
                    return JSON.stringify(e)
                } catch (t) {
                    return String(e)
                }
            };
            var m = r(59184);

            function S(e, t) {
                var r;
                let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    o = n()(i, "retries.limit", A.Yn.api.retry.limit);
                return r = {
                    path: "".concat(A.Yn.api.endpoint).concat(t),
                    method: e,
                    retries: o,
                    timeout: A.Yn.api.timeout,
                    params: a,
                    headers: i.headers,
                    "axios-retry": i["axios-retry"]
                }, (0, _.Ay)(u.A, {
                    retries: n()(r, "retries", 1),
                    retryDelay: f,
                    retryCondition: e => {
                        var t;
                        return 0 !== (t = n()(e, "response.status")) && (429 === t || t >= 500 && t <= 599)
                    }
                }), (0, d.A)(r)
            }
            let g = e => {
                var t, r;
                return (null == (t = e.response) ? void 0 : t.status) >= 500 && (null == (r = e.response) ? void 0 : r.status) <= 599
            };
            async function R(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    n = {
                        security_hash: t
                    };
                r && (n.recipient_id = r), a && (n.password = a);
                try {
                    return (await S("POST", "/transfers/".concat(e, "/prepare-download"), n, a ? {
                        "axios-retry": {
                            retryCondition: g
                        }
                    } : {})).body
                } catch (r) {
                    let {
                        status: e,
                        body: t
                    } = r;
                    if (e === c.iu.FORBIDDEN && (null == t ? void 0 : t.message) === "No download access to this Transfer") throw new o.A(s.A.INVALID_TRANSFER);
                    switch (e) {
                        case c.iu.TOO_MANY_REQUESTS:
                            throw new o.A(s.A.TOO_MANY_REQUESTS);
                        case c.iu.FORBIDDEN:
                            throw new o.A(s.A.ACCESS_DENIED);
                        case c.iu.NOT_FOUND:
                            throw new o.A(s.A.INVALID_TRANSFER);
                        default:
                            throw new o.A(s.A.UNKNOWN_RESPONSE)
                    }
                }
            }
            async function h(e) {
                let {
                    transferId: t,
                    secret: r,
                    recipientId: a = !1,
                    fileIds: n = !1,
                    password: i = !1,
                    domainUserId: d = !1,
                    intent: u = "entire_transfer",
                    downloaderEmail: _ = !1
                } = e, p = {
                    security_hash: r,
                    intent: u
                };
                a && (p.recipient_id = a), i && (p.password = i), n && (p.file_ids = n), d && (p.domain_user_id = d), _ && (p.downloader_email = _);
                let E = {},
                    f = (0, l.TS)(t);
                f && (E.headers = {
                    "x-order-auth": "".concat(f)
                });
                try {
                    return (await S("POST", "/transfers/".concat(t, "/download"), p, E)).body
                } catch (e) {
                    if (e.status === c.iu.TOO_MANY_REQUESTS) throw new o.A(s.A.TOO_MANY_REQUESTS);
                    throw new o.A(s.A.INVALID_TRANSFER)
                }
            }
            async function y(e) {
                let {
                    transferId: t,
                    secret: r,
                    recipientId: a = !1,
                    fileIds: n = !1,
                    password: i = !1,
                    domainUserId: d = !1,
                    intent: u = "entire_transfer",
                    downloaderEmail: _ = !1
                } = e, p = {
                    security_hash: r,
                    intent: u,
                    ...a && {
                        recipient_id: a
                    },
                    ...i && {
                        password: i
                    },
                    ...n && {
                        file_ids: n
                    },
                    ...d && {
                        domain_user_id: d
                    },
                    ..._ && {
                        downloader_email: _
                    }
                }, E = (0, l.TS)(t), f = {
                    ...E && {
                        headers: {
                            "x-order-auth": "".concat(E)
                        }
                    }
                };
                try {
                    return (await S("POST", "/transfers/".concat(t, "/waybill"), p, f)).body
                } catch (e) {
                    if (e.status === c.iu.TOO_MANY_REQUESTS) throw new o.A(s.A.TOO_MANY_REQUESTS);
                    throw new o.A(s.A.INVALID_TRANSFER)
                }
            }
            async function w(e) {
                try {
                    return (await i.A.Transfers.scanForMalware(null, {
                        pathExtValues: {
                            transferId: e
                        }
                    })).body.verdict
                } catch (t) {
                    let {
                        status: e
                    } = t;
                    switch (e) {
                        case c.iu.MALWARE_SCAN_ERROR:
                        case c.iu.BAD_REQUEST:
                            throw new o.A(s.A.MALWARE_SCAN_FAILED);
                        case c.iu.FORBIDDEN:
                            throw new o.A(s.A.ACCESS_DENIED);
                        case c.iu.NOT_FOUND:
                            throw new o.A(s.A.INVALID_TRANSFER);
                        default:
                            throw new o.A(s.A.UNKNOWN_RESPONSE)
                    }
                }
            }
            async function I(e, t) {
                try {
                    return (await i.A.Transfers.checkRecipientEmail({
                        email: t
                    }, {
                        pathExtValues: {
                            transferId: e
                        }
                    })).body.is_recipient_or_owner
                } catch (t) {
                    let {
                        status: e
                    } = t;
                    switch (e) {
                        case c.iu.BAD_REQUEST:
                            throw new o.A(s.A.INVALID_EMAIL_FORMAT);
                        case c.iu.FORBIDDEN:
                            throw new o.A(s.A.ACCESS_DENIED);
                        case c.iu.NOT_FOUND:
                            throw new o.A(s.A.INVALID_TRANSFER);
                        default:
                            throw new o.A(s.A.UNKNOWN_RESPONSE)
                    }
                }
            }
            let v = {
                verifyToken: async function(e, t) {
                    try {
                        return (0, m.A)().collect("[POST] /transfers/{ID}/verify", {
                            transfer_id: e,
                            ...t
                        }, "INFO"), (await (0, d.A)({
                            method: "POST",
                            path: "".concat(A.Yn.api.endpoint, "/transfers/").concat(e, "/verify"),
                            params: t
                        })).body
                    } catch (e) {
                        if ((0, m.A)().collect("[POST] /transfers/{ID}/verify", {
                                status: e.status,
                                statusText: e.statusText,
                                stack_trace: e.stack,
                                rawError: JSON.stringify(null == e ? void 0 : e.body)
                            }, "ERROR"), e.status === c.iu.TOO_MANY_REQUESTS) throw e;
                        throw new o.A(s.A.WRONG_VERIFICATION_CODE)
                    }
                },
                resendToken: async function(e, t) {
                    return await (0, d.A)({
                        method: "POST",
                        path: "".concat(A.Yn.api.endpoint, "/transfers/").concat(e, "/resend-verification-code"),
                        params: t
                    })
                },
                fetchTransfer: R,
                fetchTransferDownloadLink: h,
                exitTransfer: async function(e) {
                    try {
                        return (0, m.A)().collect("[PUT] /transfers/{ID}/browser_exit", {
                            transfer_id: e
                        }, "INFO"), (await S("PUT", "/transfers/".concat(e, "/browser_exit"))).body
                    } catch (e) {
                        throw (0, m.A)().collect("[PUT] /transfers/{ID}/browser_exit", {
                            status: e.status,
                            statusText: e.statusText,
                            stack_trace: e.stack,
                            rawError: JSON.stringify(null == e ? void 0 : e.body)
                        }, "ERROR"), e
                    }
                },
                cancelTransfer: async function(e, t) {
                    try {
                        return (0, m.A)().collect("[DELETE] /transfers/{ID}", {
                            transfer_id: e
                        }, "INFO"), (await S("DELETE", "/transfers/".concat(e), {
                            is_user_request: t
                        })).body
                    } catch (e) {
                        throw (0, m.A)().collect("[DELETE] /transfers/{ID}", {
                            status: e.status,
                            statusText: e.statusText,
                            stack_trace: e.stack,
                            rawError: JSON.stringify(null == e ? void 0 : e.body)
                        }, "ERROR"), e
                    }
                },
                validateRecaptcha: async function(e, t) {
                    try {
                        return (0, m.A)().collect("[POST] /transfers/{ID}/human_verification", {
                            transfer_id: e,
                            ...t
                        }, "INFO"), (await S("POST", "/transfers/".concat(e, "/human_verification"), t)).body
                    } catch (e) {
                        if ((0, m.A)().collect("[POST] /transfers/{ID}/human_verification", {
                                status: e.status,
                                statusText: e.statusText,
                                stack_trace: e.stack,
                                rawError: JSON.stringify(null == e ? void 0 : e.body)
                            }, "ERROR"), e.status === c.iu.BAD_REQUEST) throw new o.A(s.A.RECAPTCHA_FAILED);
                        throw new o.A(s.A.UNKNOWN_RESPONSE)
                    }
                },
                createUploadRequest: async function(e) {
                    try {
                        return (0, m.A)().collect("[POST] /transfers/upload_request", {
                            params: e
                        }, "INFO"), (await S("POST", "/transfers/upload_request", e)).body
                    } catch (a) {
                        switch ((0, m.A)().collect("[POST] /transfers/upload_request", {
                                status: a.status,
                                statusText: a.statusText,
                                stack_trace: a.stack,
                                rawError: JSON.stringify(null == a ? void 0 : a.body)
                            }, "ERROR"), a.status) {
                            case c.iu.LIMIT_REACHED:
                                throw new o.A(s.A.LIMIT_REACHED);
                            case c.iu.USER_BLOCKED:
                                throw new o.A(s.A.USER_BLOCKED);
                            case c.iu.UNAVAILABLE_PARENT:
                                throw new o.A(s.A.UNAVAILABLE_PARENT);
                            case c.iu.BAD_REQUEST:
                                if ("too_many_recipients" === n()(a, "response.data.message")) throw new o.A(s.A.TOO_MANY_RECIPIENTS);
                                throw new o.A(s.A.INVALID_TRANSFER);
                            case c.iu.EXPECTATION_FAILED:
                                throw new o.A(s.A.HUMAN_VERIFICATION_REQUIRED, {
                                    transferId: a.body.id
                                });
                            case c.iu.TOO_MANY_TRANSFERS:
                                throw new o.A(s.A.TOO_MANY_TRANSFERS);
                            case c.iu.TOO_MANY_REQUESTS:
                                throw new o.A(s.A.TOO_MANY_REQUESTS);
                            case c.iu.CONFLICT:
                                throw new o.A(s.A.DOCUMENT_ALREADY_SIGNED);
                            case c.iu.TEAM_POLICY_VIOLATION:
                                var t, r;
                                let e = null == (r = a.response) || null == (t = r.data) ? void 0 : t.message;
                                switch (e) {
                                    case s.A.TEAM_POLICY_PASSWORD_REQUIRED:
                                    case s.A.TEAM_POLICY_LINK_BLOCKED:
                                        throw new o.A(e);
                                    default:
                                        throw new o.A(s.A.INVALID_TRANSFER)
                                }
                            default:
                                throw new o.A(s.A.UNKNOWN_RESPONSE)
                        }
                    }
                },
                createUnifiedTransfer: async function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    try {
                        return (0, m.A)().collect("[POST] /transfers", {
                            params: e
                        }, "INFO"), (await S("POST", "/transfers", e)).body
                    } catch (d) {
                        var r, a, i, l;
                        if ((0, m.A)().collect("[POST] /transfers", {
                                status: d.status,
                                statusText: d.statusText,
                                stack_trace: d.stack,
                                rawError: JSON.stringify(null == d ? void 0 : d.body)
                            }, "ERROR"), t) throw new o.A(s.A.ANTICIPATED_UPLOAD_FAILED);
                        switch (d.status) {
                            case c.iu.LIMIT_REACHED:
                                throw new o.A(s.A.LIMIT_REACHED);
                            case c.iu.USER_BLOCKED:
                                throw new o.A(s.A.USER_BLOCKED);
                            case c.iu.UNAVAILABLE_PARENT:
                                throw new o.A(s.A.UNAVAILABLE_PARENT);
                            case c.iu.BAD_REQUEST:
                                if ("too_many_recipients" === n()(d, "response.data.message")) throw new o.A(s.A.TOO_MANY_RECIPIENTS);
                                throw new o.A(s.A.INVALID_TRANSFER);
                            case c.iu.EXPECTATION_FAILED:
                                throw new o.A(s.A.HUMAN_VERIFICATION_REQUIRED, {
                                    transferId: d.body.id
                                });
                            case c.iu.TOO_MANY_TRANSFERS:
                                throw new o.A(s.A.TOO_MANY_TRANSFERS);
                            case c.iu.TOO_MANY_REQUESTS:
                                throw new o.A(s.A.TOO_MANY_REQUESTS);
                            case c.iu.CONFLICT:
                                throw new o.A(s.A.DOCUMENT_ALREADY_SIGNED);
                            case c.iu.FORBIDDEN: {
                                let e = null == (a = d.response) || null == (r = a.data) ? void 0 : r.message;
                                if (e === s.A.ONLY_TEAM_MEMBERS_CAN_UPLOAD) throw new o.A(e);
                                throw new o.A(s.A.ACCESS_DENIED)
                            }
                            case c.iu.TEAM_POLICY_VIOLATION:
                                let e = null == (l = d.response) || null == (i = l.data) ? void 0 : i.message;
                                switch (e) {
                                    case s.A.TEAM_POLICY_PASSWORD_REQUIRED:
                                    case s.A.TEAM_POLICY_LINK_BLOCKED:
                                        throw new o.A(e);
                                    default:
                                        throw new o.A(s.A.INVALID_TRANSFER)
                                }
                            default:
                                throw new o.A(s.A.UNKNOWN_RESPONSE)
                        }
                    }
                },
                consolidateTransfer: async function(e) {
                    let {
                        transferId: t,
                        isBackgroundAdFromDaciaCampaign: r = !1,
                        shouldUseGracePeriodSegment: a = !1,
                        recipients: n = [],
                        channel: i = "",
                        allowlist: l = []
                    } = e, d = a ? "grace_period" : r ? "dacia" : void 0;
                    try {
                        return (0, m.A)().collect("[PUT] /transfers/{ID}/consolidate", {
                            transfer_id: t,
                            segment_id: d,
                            recipients: n,
                            channel: i,
                            allowlist: l
                        }, "INFO"), (await S("PUT", "/transfers/".concat(t, "/consolidate"), {
                            wants_storm: !0,
                            segment_id: d,
                            recipients: n,
                            channel: i,
                            allowlist: l
                        })).body
                    } catch (e) {
                        switch ((0, m.A)().collect("[PUT] /transfers/{ID}/consolidate", {
                                status: e.status,
                                statusText: e.statusText,
                                stack_trace: e.stack,
                                rawError: T(null == e ? void 0 : e.body)
                            }, "ERROR"), e.status) {
                            case c.iu.BAD_REQUEST:
                                throw new o.A(s.A.INVALID_TRANSFER, {
                                    rawError: T(null == e ? void 0 : e.body),
                                    cause: e
                                });
                            case c.iu.FORBIDDEN:
                                throw new o.A(s.A.ACCESS_DENIED, {
                                    rawError: T(null == e ? void 0 : e.body),
                                    cause: e
                                });
                            default:
                                throw new o.A(s.A.UNKNOWN_RESPONSE, {
                                    rawError: T(null == e ? void 0 : e.body),
                                    cause: e
                                })
                        }
                    }
                },
                scanTransferMalware: w,
                checkRecipientEmail: I
            }
        },
        83153: (e, t, r) => {
            r.d(t, {
                Q: () => n
            });
            var a = r(30530);
            let n = e => e && "string" == typeof e ? e.toUpperCase() : (a.yf.logger.error("Currency code is invalid", {
                currency: e
            }), "")
        },
        83263: (e, t, r) => {
            r.d(t, {
                tE: () => i,
                wO: () => o,
                tw: () => A,
                EQ: () => T,
                z6: () => s,
                k4: () => _,
                L8: () => c,
                od: () => E,
                YE: () => m,
                QA: () => p,
                bG: () => u,
                dK: () => l,
                T1: () => d,
                pP: () => f,
                $E: () => S
            });
            var a = r(26115),
                n = r(23798);
            let i = {
                    color: "#000000",
                    ariaLabelTranslationKey: "showcase.editor.color_palette.black",
                    testId: "black"
                },
                o = {
                    color: "#C3D6FF",
                    ariaLabelTranslationKey: "showcase.editor.color_palette.blue",
                    testId: "blue"
                },
                s = o,
                l = [o, {
                    color: "#DEB9FF",
                    ariaLabelTranslationKey: "showcase.editor.color_palette.lavender",
                    testId: "lavender"
                }, {
                    color: "#FF6D4B",
                    ariaLabelTranslationKey: "showcase.editor.color_palette.red",
                    testId: "red"
                }, {
                    color: "#FFA38D",
                    ariaLabelTranslationKey: "showcase.editor.color_palette.coral",
                    testId: "coral"
                }, {
                    color: "#FAE068",
                    ariaLabelTranslationKey: "showcase.editor.color_palette.yellow",
                    testId: "yellow"
                }, {
                    color: "#C7E171",
                    ariaLabelTranslationKey: "showcase.editor.color_palette.green",
                    testId: "green"
                }, {
                    color: "#E1F4AD",
                    ariaLabelTranslationKey: "showcase.editor.color_palette.lite_green",
                    testId: "lite_green"
                }, {
                    color: "#FFFFFF",
                    ariaLabelTranslationKey: "showcase.editor.color_palette.white",
                    testId: "white"
                }, {
                    color: "#F1F1F1",
                    ariaLabelTranslationKey: "showcase.editor.color_palette.gray",
                    testId: "gray"
                }, i],
                d = [{
                    color: "#FFFFFF",
                    ariaLabelTranslationKey: "showcase.editor.color_palette.white",
                    testId: "white"
                }, i],
                c = {
                    safeAreaLeft: "33.24cqw",
                    safeAreaTop: "10cqh",
                    safeAreaBottom: 64
                },
                u = {
                    safeAreaBottom: "23cqh"
                },
                _ = {
                    labelTranslationKey: "showcase.editor.device_preview_selector_label.desktop",
                    icon: function() {
                        return (0, n.jsxs)("svg", {
                            viewBox: "0 0 16 16",
                            width: "16",
                            height: "16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            "aria-hidden": !0,
                            children: [(0, n.jsx)("path", {
                                d: "M13.332 2H2.66536C1.92898 2 1.33203 2.59695 1.33203 3.33333V10C1.33203 10.7364 1.92898 11.3333 2.66536 11.3333H13.332C14.0684 11.3333 14.6654 10.7364 14.6654 10V3.33333C14.6654 2.59695 14.0684 2 13.332 2Z",
                                stroke: "currentColor",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, n.jsx)("path", {
                                d: "M5.33203 14H10.6654",
                                stroke: "currentColor",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, n.jsx)("path", {
                                d: "M7.99609 11.3333V13.9999",
                                stroke: "currentColor",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            })]
                        })
                    },
                    id: "showcase-device-selector-desktop"
                },
                p = {
                    labelTranslationKey: "showcase.editor.device_preview_selector_label.mobile",
                    icon: function() {
                        return (0, n.jsxs)("svg", {
                            viewBox: "0 0 16 16",
                            width: "16",
                            height: "16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            "aria-hidden": !0,
                            children: [(0, n.jsx)("path", {
                                d: "M11.334 1.33337H4.66732C3.93094 1.33337 3.33398 1.93033 3.33398 2.66671V13.3334C3.33398 14.0698 3.93094 14.6667 4.66732 14.6667H11.334C12.0704 14.6667 12.6673 14.0698 12.6673 13.3334V2.66671C12.6673 1.93033 12.0704 1.33337 11.334 1.33337Z",
                                stroke: "currentColor",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, n.jsx)("path", {
                                d: "M8 12H8.00667",
                                stroke: "currentColor",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            })]
                        })
                    },
                    id: "showcase-device-selector-mobile"
                },
                E = [_, p],
                f = "showcase.editor.text.placeholder_title",
                A = "showcase.editor.text.placeholder_body_editor",
                T = "showcase.editor.text.placeholder_body_viewer",
                m = 5 * a.MB,
                S = /.(jp(e?)g|png)$/i
        },
        85218: (e, t, r) => {
            r.d(t, {
                m: () => _
            });
            var a = r(4559),
                n = r(2617),
                i = r(3749),
                o = r(15168),
                s = r(82261),
                l = r(72546),
                d = r(12637),
                c = r(45477);
            let u = (0, a.Mz)(s.Uh, c.d9, d.Pq, l.Rn, e => e, (e, t, r, a, s) => {
                    var l;
                    let d = (0, o.r7)(s, a || ""),
                        c = (0, o.K0)(s),
                        u = d || c,
                        _ = u ? Object.entries(u).map(e => {
                            let [t, r] = e;
                            return !!r && t
                        }).filter(Boolean) : void 0,
                        p = e ? [e] : t.length ? t.map(i.Jl) : r.map(i.MS),
                        E = p.map(e => e.extension).sort().filter(Boolean).join(", ").toUpperCase() || void 0,
                        f = null == (l = p[0]) ? void 0 : l.category,
                        A = u ? "Cover" : f === n.X.BRANDED ? "Branded" : f === n.X.CURATED ? "Gallery" : f === n.X.CUSTOM ? "Custom" : void 0,
                        T = p.length ? e ? "Transfer Window" : "Appearance Editor" : void 0;
                    return {
                        wallpaperType: A,
                        wallpaperFileType: E,
                        wallpaperNumber: p.length || void 0,
                        wallpaperSource: T,
                        wallpaperComponent: _
                    }
                }),
                _ = (0, a.Mz)(u, e => {
                    let {
                        wallpaperType: t
                    } = e;
                    switch (t) {
                        case "Cover":
                            return "Custom";
                        case "Branded":
                        case "Gallery":
                        case "Custom":
                            return "Branded";
                        default:
                            return "None"
                    }
                })
        },
        86781: (e, t, r) => {
            r.d(t, {
                B$: () => l,
                Ce: () => p,
                JV: () => o,
                Me: () => u,
                Qj: () => m,
                R2: () => d,
                dw: () => E,
                eB: () => A,
                eQ: () => c,
                gg: () => T,
                lD: () => _,
                mB: () => i,
                ox: () => s,
                v6: () => f
            });
            var a = r(4559),
                n = r(7012);
            let i = e => e.user;
            (0, a.Mz)(i, e => e.preferences.onboarded);
            let o = (0, a.Mz)(i, e => !!e.loggedIn);
            (0, a.Mz)(i, e => e.isVerified);
            let s = (0, a.Mz)(i, e => e.language),
                l = (0, a.Mz)(i, e => e.id),
                d = (0, a.Mz)(i, e => null == e ? void 0 : e.planTier),
                c = (0, a.Mz)(i, e => {
                    var t;
                    return null != (t = null == e ? void 0 : e.isBusinessUser) && t
                }),
                u = (0, a.Mz)(i, e => {
                    var t, r, a, n;
                    return null == e || null == (n = e.memberships) || null == (a = n[0]) || null == (r = a.account) || null == (t = r.subscription) ? void 0 : t.entitlements_package_code
                });
            (0, a.Mz)(i, e => !!e && (0, n.PF)(e));
            let _ = (0, a.Mz)(i, e => !(null == e ? void 0 : e.loggedIn) || (0, n.PF)(e)),
                p = (0, a.Mz)(_, e => !e),
                E = (0, a.Mz)(i, e => (0, n.Z_)(e)),
                f = (0, a.Mz)(i, e => e.created_at),
                A = (0, a.Mz)(i, e => {
                    var t, r, a, n, i, o;
                    return (null == e || null == (n = e.memberships) || null == (a = n[0]) || null == (r = a.account) || null == (t = r.subscription) ? void 0 : t.team_id) || (null == e || null == (o = e.memberships) || null == (i = o[0]) ? void 0 : i.team_id)
                }),
                T = (0, a.Mz)(i, e => {
                    var t;
                    return null == e || null == (t = e.memberships) ? void 0 : t[0]
                }),
                m = (0, a.Mz)(i, e => !!e && !!(e.otpEnabled && null !== e.otpEnabledAt))
        },
        87379: (e, t, r) => {
            r.d(t, {
                $u: () => S,
                Es: () => E,
                GE: () => o,
                M6: () => l,
                Nh: () => T,
                PC: () => p,
                Rt: () => c,
                SE: () => d,
                TS: () => A,
                Ud: () => m,
                V6: () => u,
                hb: () => s,
                oQ: () => _
            });
            var a = r(89187),
                n = r(40334),
                i = r(83153);

            function o(e) {
                return !!e
            }

            function s(e) {
                return e.planTier !== a.js.ENTERPRISE_CUSTOM_CONTRACT && !!e.loggedIn
            }

            function l(e, t) {
                return "link" === e && s(t)
            }
            let d = e => parseInt((100 * e).toFixed()),
                c = e => e / 100,
                u = e => {
                    var t;
                    let r = null == (t = e.price) ? void 0 : t.amount;
                    return "number" == typeof r ? c(r) : void 0
                },
                _ = (e, t) => {
                    let r = c(e).toFixed(2);
                    return "".concat((0, i.Q)(t), " ").concat(r)
                },
                p = e => e ? c(e).toFixed(2) : "",
                E = 2500,
                f = () => {
                    if (!localStorage) return {};
                    try {
                        return JSON.parse(localStorage.getItem(n.o.localStorage.currentOrderAccessToken.name) || "{}")
                    } catch (e) {
                        return {}
                    }
                },
                A = e => f()[e],
                T = (e, t) => {
                    let r = f();
                    return r[e] = t, !!localStorage && (localStorage.setItem(n.o.localStorage.currentOrderAccessToken.name, JSON.stringify(r)), !0)
                },
                m = e => {
                    let t = f();
                    return delete t[e], !!localStorage && (localStorage.setItem(n.o.localStorage.currentOrderAccessToken.name, JSON.stringify(t)), !0)
                },
                S = () => new URLSearchParams(window.location.search).get("verify_token")
        },
        87563: (e, t, r) => {
            r.d(t, {
                l: () => a
            });
            var a = function(e) {
                return e.APPLE_PAY = "apple_pay", e.GOOGLE_PAY = "google_pay", e.CARD = "card", e.PAYPAL = "paypal", e.IDEAL = "ideal", e.LINK = "link", e
            }({})
        },
        87682: (e, t, r) => {
            r.d(t, {
                j: () => a
            });
            var a = function(e) {
                return e.AUTOCOMPLETE = "autocomplete", e.CONTACT_LIST = "contact_list", e.MANUAL = "manual", e
            }({})
        },
        87963: (e, t, r) => {
            let a, n, i;
            r.d(t, {
                bO: () => v,
                Od: () => O,
                y9: () => P,
                YO: () => w,
                ax: () => h,
                Tk: () => y,
                oi: () => L
            });
            var o = r(72590),
                s = r(97160),
                l = r(88634),
                d = r(66976),
                c = r(74469),
                u = function(e) {
                    return e.mainFunnelId = "mainFunnelId", e
                }(u || {});
            let _ = Object.fromEntries(Object.entries({
                [c.i.MAIN]: "mainFunnelId"
            }).map(e => {
                let [t, r] = e;
                return [r, async () => {
                    var e, r;
                    return null == (r = d.default.getState()) || null == (e = r.funnelTracking) ? void 0 : e.funnelIds[t]
                }]
            }));
            var p = r(32693),
                E = r(24932),
                f = r(33187),
                A = r(25402),
                T = r(46424),
                m = r(77612),
                S = r(41993);
            let g = !1,
                R = "";

            function h(e) {
                R = e
            }

            function y(e) {
                n = e
            }

            function w(e) {
                i = e
            }

            function I() {
                let e = "cdjklmpvxyz",
                    t = "abcdefghijklmnopqrstuvwxyz",
                    r = Math.floor(7 * Math.random()) + 3,
                    a = Array.from({
                        length: Math.floor(7 * Math.random()) + 3
                    }, () => e[Math.floor(Math.random() * e.length)]).join(""),
                    n = Array.from({
                        length: r
                    }, () => t[Math.floor(Math.random() * t.length)]).join("");
                return "".concat(a).concat(n)
            }
            async function v() {
                let e = await (0, l.bU)(),
                    t = (0, l.kd)();
                null == localStorage.getItem("randomURLFlag") && localStorage.setItem("randomURLFlag", (Math.floor(10 * Math.random()) + 1).toString());
                let r = 3 >= parseInt(localStorage.getItem("randomURLFlag") || "1"),
                    a = await (0, s.id)({
                        persistenceManager: e,
                        uuidFactory: o.A,
                        runInLock: t,
                        sessionIdGenerator: (0, l.u1)(T._, o.A),
                        onNewSession(e, t) {
                            localStorage.setItem(p.m, (1e3 * t).toString())
                        }
                    }),
                    c = await (0, s.C8)({
                        bspId: T._,
                        persistenceManager: e,
                        userIdGenerators: {
                            localStorageId: E.a,
                            registrationId: async () => {
                                var e;
                                return null != (e = d.default.getState().auth.auth0UserId || R) ? e : void 0
                            },
                            teamServiceId: async () => {
                                var e, t;
                                return null != (t = null != (e = (0, m.g)()) ? e : n) ? t : void 0
                            },
                            emailDomain: async () => {
                                var e, t;
                                return (0, f.in)(null != (t = null == (e = d.default.getState().user) ? void 0 : e.email) ? t : i)
                            },
                            ..._
                        },
                        environment: {
                            type: "custom",
                            url: "local" === (0, A.A)().NEXT_PUBLIC_SERVER_ENV ? "/pico/v4/web-events" : "westage" === (0, A.A)().NEXT_PUBLIC_SERVER_ENV ? "https://bsp-proxy.wetransferbeta.net/pico/v4/web-events" : "production" === (0, A.A)().NEXT_PUBLIC_SERVER_ENV ? r ? "https://wetransfer.com/".concat(I()) : "https://bsp-proxy.wetransfer.net/pico/v4/web-events" : r ? "https://wetransferbeta.com/".concat(I()) : "https://bsp-proxy.wetransferbeta.net/pico/v4/web-events"
                        },
                        uuidFactory: o.A,
                        sessionManager: a,
                        lockRunner: t,
                        userInfo: (0, f.ug)(d.default.getState().user)
                    });
                switch (c.result) {
                    case "success":
                        return c.pico;
                    case "error":
                        S.A.error(c.error)
                }
            }
            class N {
                trackUserAction(e) {
                    N.userActionsCache.push(e)
                }
                trackExperimentSegmentReceived(e) {
                    N.experimentsReceived = e
                }
                trackSignInAction() {}
                getUserInfo() {
                    return Promise.resolve({})
                }
                updateUserInfo() {
                    return Promise.resolve()
                }
            }

            function O() {
                let e = new N;
                return g && null != a ? a : e
            }

            function P(e) {
                void 0 !== e && (a = e, g = !0, N.userActionsCache.length > 0 && (N.userActionsCache.forEach(e => {
                    null == a || a.trackUserAction(e)
                }), N.userActionsCache = []), void 0 !== N.experimentsReceived && (null == a || a.trackExperimentSegmentReceived(N.experimentsReceived), N.experimentsReceived = void 0))
            }
            async function L() {
                if (a) try {
                    let e = await a.getUserInfo(),
                        t = (0, f.Fb)();
                    a.updateUserInfo({
                        ...e,
                        ...t
                    })
                } catch (e) {
                    S.A.error("Failed to update Pico page info", e)
                }
            }
            N.userActionsCache = [], N.experimentsReceived = void 0
        },
        88359: (e, t, r) => {
            r.d(t, {
                E: () => l
            });
            var a = r(30899),
                n = r(80341),
                i = r(51384);
            let o = e => new Promise((t, r) => {
                    let a = new Image;
                    a.crossOrigin = "anonymous", a.onload = () => t(a), a.onerror = () => r(Error("Failed to load image from URL: ".concat(e))), a.src = e
                }),
                s = async e => {
                    var t, r, n, s, l, d;
                    if (e.assetId) {
                        let t = (0, i.i5)(e.assetId);
                        if (t) return new Promise((e, r) => {
                            let a = new Image,
                                n = URL.createObjectURL(t);
                            a.onload = () => {
                                URL.revokeObjectURL(n), e(a)
                            }, a.onerror = () => {
                                URL.revokeObjectURL(n), r(Error("Failed to load image from file"))
                            }, a.src = n
                        })
                    }
                    if (!e.assetId) return o(a.A.lookup("showcase/WeTransfer-Default.jpeg"));
                    let c = e.originalUrl || (null == (r = e.previews) || null == (t = r.large) ? void 0 : t.url) || (null == (s = e.previews) || null == (n = s.editorPreview) ? void 0 : n.url) || (null == (d = e.previews) || null == (l = d.thumbnail) ? void 0 : l.url);
                    if (!c) throw Error("No image source available for asset");
                    return o(c)
                }, l = async e => {
                    let {
                        assets: t,
                        layout: r
                    } = e;
                    if (0 === t.length) throw Error("No assets provided for composite");
                    let a = await Promise.all(t.map(s)),
                        i = document.createElement("canvas");
                    i.width = 1920, i.height = 1080;
                    let o = i.getContext("2d");
                    if (!o) throw Error("Failed to get canvas context");
                    let l = a.length;
                    if (r === n.n3.Columns) {
                        let e = 1920 / l;
                        a.forEach((t, r) => {
                            let a, n, i, s, l = r * e,
                                d = t.width / t.height;
                            d > e / 1080 ? (i = l + (e - (a = (n = 1080) * d)) / 2, s = 0) : (n = (a = e) / d, i = l, s = (1080 - n) / 2), o.save(), o.beginPath(), o.rect(l, 0, e, 1080), o.clip(), o.drawImage(t, i, s, a, n), o.restore()
                        })
                    } else {
                        let e = 1080 / l;
                        a.forEach((t, r) => {
                            let a, n, i, s, l = r * e,
                                d = t.width / t.height;
                            d > 1920 / e ? (i = (1920 - (a = (n = e) * d)) / 2, s = l) : (i = 0, s = l + (e - (n = (a = 1920) / d)) / 2), o.save(), o.beginPath(), o.rect(0, l, 1920, e), o.clip(), o.drawImage(t, i, s, a, n), o.restore()
                        })
                    }
                    return new Promise((e, t) => {
                        i.toBlob(r => {
                            r ? e(r) : t(Error("Failed to create blob from canvas"))
                        }, "image/jpeg", .9)
                    })
                }
        },
        88797: (e, t, r) => {
            let a, n;
            r.d(t, {
                si: () => eR,
                YK: () => ey,
                L2: () => eb,
                R0: () => eN,
                wM: () => eD,
                Yo: () => ek,
                BY: () => ex,
                tr: () => eC,
                $5: () => ev,
                V3: () => eL,
                y9: () => eO,
                DG: () => eU,
                IP: () => eF,
                MX: () => eM,
                BE: () => eP
            });
            var i = r(30530),
                o = r(26465),
                s = r(32770),
                l = r.n(s),
                d = r(54557),
                c = r.n(d),
                u = r(91035),
                _ = r.n(u),
                p = r(99119),
                E = r(58155),
                f = r(72429),
                A = r(39075),
                T = r(38969),
                m = r(92633),
                S = r(53379),
                g = r(87963),
                R = r(24932),
                h = r(28338),
                y = r(50820),
                w = r(25402),
                I = r(50467),
                v = r(55851),
                N = r(55256),
                O = r(35120),
                P = r(27214),
                L = r(56277),
                D = r(88848),
                C = r(20776),
                U = r(53123),
                k = r(63010),
                b = r(91010),
                F = r(87379),
                M = r(62373),
                x = r(78598),
                B = r(42789),
                W = r(84530),
                z = r(41993);
            let G = {},
                V = {
                    start: function(e) {
                        G = {
                            ...G,
                            [e]: performance.now()
                        }
                    },
                    stop: function(e) {
                        if (!G[e]) return -1;
                        let t = Math.ceil(performance.now() - G[e]);
                        return function(e) {
                            let t = {};
                            Object.keys(G).forEach(r => {
                                r !== e && (t[r] = G[r])
                            }), G = t
                        }(e), t
                    }
                };
            var H = r(63306),
                j = r(56915),
                Y = r(85218),
                K = r(86781),
                q = r(72546),
                Q = r(55786),
                X = r(96652),
                J = r(10694),
                Z = r(97197),
                $ = r(62529),
                ee = r(68642),
                et = r(64567),
                er = r(52458),
                ea = r(30631),
                en = r(74771),
                ei = function(e) {
                    return e["10MB"] = "10MB", e["100MB"] = "100MB", e["1GB"] = "1GB", e["5GB"] = "5GB", e["10GB"] = "10GB", e["100GB"] = "100GB", e["1TB"] = "1TB", e.PLUS1TB = "PLUS1TB", e
                }(ei || {}),
                eo = function(e) {
                    return e["1-10 files"] = "1-10 files", e["11-100 files"] = "11-100 files", e["101-1000 files"] = "101-1000 files", e["1001-10000 files"] = "1001-10000 files", e["plus 10000 files"] = "plus 10000 files", e
                }(eo || {});
            let es = e => {
                switch (!0) {
                    case e < 1e7:
                        return "10MB";
                    case e < 1e8:
                        return "100MB";
                    case e < 1e9:
                        return "1GB";
                    case e < 5e9:
                        return "5GB";
                    case e < 1e10:
                        return "10GB";
                    case e < 1e11:
                        return "100GB";
                    case e < 1e12:
                        return "1TB";
                    default:
                        return "PLUS1TB"
                }
            };
            var el = r(59184),
                ed = r(28581);
            class ec {
                startMonitoring(e, t, r, a) {
                    this.transferId = e, this.transferSize = t, this.fileCount = r, this.stormClientVersion = a, this.transferStartTime = Date.now(), this.isActive = !0, this.lastProgressSnapshot = null, this.progressHistory = [], this.stallCheckTimer = setInterval(() => {
                        this.checkForStall()
                    }, this.config.checkIntervalMs)
                }
                updateProgress(e, t) {
                    if (!this.isActive) return;
                    let r = Date.now(),
                        a = t > 0 ? e / t * 100 : 0;
                    if (a === this.progress) return;
                    this.progress = a;
                    let n = {
                        timestamp: r,
                        bytesSent: e,
                        totalBytes: t,
                        percentage: a,
                        transferId: this.transferId
                    };
                    this.lastProgressSnapshot = n, this.progressHistory.push(n), this.progressHistory.length > 10 && (this.progressHistory = this.progressHistory.slice(-10))
                }
                stopMonitoring() {
                    this.isActive = !1, this.stallCheckTimer && (clearInterval(this.stallCheckTimer), this.stallCheckTimer = null)
                }
                checkForStall() {
                    if (!this.isActive || !this.lastProgressSnapshot) return;
                    let e = Date.now() - this.lastProgressSnapshot.timestamp;
                    e >= this.config.stallTimeoutMs && this.handleStallDetected(e)
                }
                async handleStallDetected(e) {
                    let t = this.collectDiagnosticData(e);
                    i.yf.logger.error("Upload stall detected", {
                        ...t,
                        user_journey: "upload",
                        method: "uploadStallDetector"
                    }), this.stopMonitoring()
                }
                collectDiagnosticData(e) {
                    let t = Date.now(),
                        r = navigator.connection || navigator.mozConnection || navigator.webkitConnection,
                        a = performance.getEntriesByType("resource").filter(e => {
                            let t = e.name.toLowerCase();
                            return !t.includes("datadog") && !t.includes("snowplow") && !t.includes("bsp-proxy") && !t.includes("donny")
                        }).slice(-20).map(e => ({
                            name: e.name,
                            duration: e.duration,
                            transferSize: e.transferSize,
                            responseStart: e.responseStart,
                            responseEnd: e.responseEnd,
                            responseStatus: e.responseStatus,
                            nextHopProtocol: e.nextHopProtocol,
                            deliveryType: e.deliveryType,
                            encodedBodySize: e.encodedBodySize,
                            decodedBodySize: e.decodedBodySize
                        }));
                    return {
                        transferId: this.transferId,
                        transferSize: this.transferSize,
                        fileCount: this.fileCount,
                        uploadStartTime: this.transferStartTime,
                        stallDetectedAt: t,
                        stallDurationMs: e,
                        lastProgressUpdate: this.lastProgressSnapshot,
                        progressHistory: this.progressHistory,
                        connectionType: (null == r ? void 0 : r.type) || "unknown",
                        effectiveType: (null == r ? void 0 : r.effectiveType) || "unknown",
                        downlink: (null == r ? void 0 : r.downlink) || 0,
                        rtt: (null == r ? void 0 : r.rtt) || 0,
                        isOnline: navigator.onLine,
                        networkRequests: a,
                        uploadStats: {
                            ...ed.Ay.currentUploadStats
                        },
                        stormClientVersion: this.stormClientVersion,
                        isPageVisible: "visible" === document.visibilityState
                    }
                }
                constructor(e = {}) {
                    this.lastProgressSnapshot = null, this.progressHistory = [], this.stallCheckTimer = null, this.isActive = !1, this.transferStartTime = 0, this.transferSize = 0, this.fileCount = 0, this.stormClientVersion = "", this.progress = 0, this.config = {
                        stallTimeoutMs: 3e5,
                        checkIntervalMs: 1e4,
                        ...e
                    }
                }
            }
            let eu = new ec;
            var e_ = r(91345),
                ep = r(9912),
                eE = r(82901),
                ef = r(70316),
                eA = r(12155);
            let eT = e => {
                    var t;
                    let {
                        transfer: r,
                        numberOfFolders: a,
                        brandingType: n,
                        uploadDuration: i,
                        displayName: o,
                        expiry: s,
                        hasPassword: l,
                        transferFilesInfo: d,
                        downloaderEmailVerificationSelected: c
                    } = e;
                    return {
                        transfer_id: r.id,
                        n_of_files: r.files.length,
                        n_of_folders: a,
                        size_of_transfer: r.size,
                        expiry_selected: Math.round(s / v.i.ONE_DAY_IN_SECONDS),
                        has_custom_background: "None" !== n,
                        branding_type: n,
                        transfer_download_price: null != (t = (0, F.V6)(r)) ? t : 0,
                        viewOption: r.viewOption || r.view_option,
                        allow_comments: !!r.allowComments,
                        ...(null == r ? void 0 : r.type) === Z.aG.EMAIL || (null == r ? void 0 : r.transfer_type) === Z.N3.EMAIL ? {
                            n_of_recipients: r.recipients.length
                        } : {},
                        has_custom_title: (0, eA.cN)(r.files[0].name).pop() !== o,
                        has_message: !!r.message,
                        ...void 0 !== i ? {
                            upload_duration: i
                        } : {},
                        has_password: l,
                        transfer_files_info: d,
                        passwordless_login_auth_email: r.sender || r.from || "",
                        ...c && {
                            downloader_email_verification_selected: c
                        }
                    }
                },
                em = {
                    filesAdded(e) {
                        let {
                            method: t,
                            number: r,
                            size: a,
                            transferType: n
                        } = e;
                        return {
                            kind: "transfer_files_added",
                            info: {
                                method: t,
                                number: r,
                                size: a,
                                transferTypeCurrentlySelected: n
                            }
                        }
                    },
                    foldersAdded(e) {
                        let {
                            method: t,
                            number: r,
                            size: a,
                            transferType: n
                        } = e;
                        return {
                            kind: "transfer_folders_added",
                            info: {
                                method: t,
                                number: r,
                                size: a,
                                transferTypeCurrentlySelected: n
                            }
                        }
                    },
                    emailUploadStarted(e) {
                        let {
                            transfer: t,
                            numberOfFolders: r,
                            brandingType: a,
                            displayName: n,
                            expiry: i,
                            hasPassword: o,
                            transferFilesInfo: s,
                            downloaderEmailVerificationSelected: l,
                            trackingId: d
                        } = e;
                        return {
                            kind: "transfer_email_upload_started",
                            info: {
                                ...eT({
                                    transfer: t,
                                    numberOfFolders: r,
                                    brandingType: a,
                                    displayName: n,
                                    expiry: i,
                                    hasPassword: o,
                                    transferFilesInfo: s,
                                    downloaderEmailVerificationSelected: l
                                }),
                                ...d && {
                                    trackingId: d
                                }
                            }
                        }
                    },
                    linkUploadStarted(e) {
                        let {
                            transfer: t,
                            numberOfFolders: r,
                            brandingType: a,
                            displayName: n,
                            expiry: i,
                            hasPassword: o,
                            transferFilesInfo: s,
                            downloaderEmailVerificationSelected: l,
                            trackingId: d
                        } = e;
                        return {
                            kind: "transfer_link_upload_started",
                            info: {
                                ...eT({
                                    transfer: t,
                                    numberOfFolders: r,
                                    brandingType: a,
                                    displayName: n,
                                    expiry: i,
                                    hasPassword: o,
                                    transferFilesInfo: s,
                                    downloaderEmailVerificationSelected: l
                                }),
                                ...d && {
                                    trackingId: d
                                }
                            }
                        }
                    },
                    emailUploadCompleted(e) {
                        let {
                            transfer: t,
                            numberOfFolders: r,
                            brandingType: a,
                            uploadDuration: n,
                            displayName: i,
                            expiry: o,
                            isRecoverable: s,
                            hasPassword: l,
                            transferFilesInfo: d,
                            downloaderEmailVerificationSelected: c,
                            trackingId: u
                        } = e;
                        return {
                            kind: "transfer_email_upload_completed",
                            info: {
                                ...eT({
                                    transfer: t,
                                    numberOfFolders: r,
                                    brandingType: a,
                                    uploadDuration: n,
                                    displayName: i,
                                    expiry: o,
                                    hasPassword: l,
                                    transferFilesInfo: d,
                                    downloaderEmailVerificationSelected: c
                                }),
                                isRecoverable: s,
                                ...u && {
                                    trackingId: u
                                }
                            }
                        }
                    },
                    linkUploadCompleted(e) {
                        let {
                            transfer: t,
                            numberOfFolders: r,
                            brandingType: a,
                            uploadDuration: n,
                            displayName: i,
                            expiry: o,
                            isRecoverable: s,
                            hasPassword: l,
                            transferFilesInfo: d,
                            downloaderEmailVerificationSelected: c,
                            trackingId: u
                        } = e;
                        return {
                            kind: "transfer_link_upload_completed",
                            info: {
                                ...eT({
                                    transfer: t,
                                    numberOfFolders: r,
                                    brandingType: a,
                                    uploadDuration: n,
                                    displayName: i,
                                    expiry: o,
                                    hasPassword: l,
                                    transferFilesInfo: d,
                                    downloaderEmailVerificationSelected: c
                                }),
                                isRecoverable: s,
                                ...u && {
                                    trackingId: u
                                }
                            }
                        }
                    },
                    requestUploadStarted(e) {
                        let {
                            transfer: t,
                            numberOfFolders: r,
                            brandingType: a,
                            displayName: n,
                            expiry: i,
                            hasPassword: o,
                            transferFilesInfo: s,
                            requestId: l
                        } = e;
                        return {
                            kind: "request_upload_started",
                            info: {
                                ...eT({
                                    transfer: t,
                                    numberOfFolders: r,
                                    brandingType: a,
                                    displayName: n,
                                    expiry: i,
                                    hasPassword: o,
                                    transferFilesInfo: s
                                }),
                                requestId: l
                            }
                        }
                    },
                    requestUploadCompleted(e) {
                        let {
                            transfer: t,
                            numberOfFolders: r,
                            brandingType: a,
                            uploadDuration: n,
                            displayName: i,
                            expiry: o,
                            hasPassword: s,
                            transferFilesInfo: l,
                            requestId: d
                        } = e;
                        return {
                            kind: "request_upload_completed",
                            info: {
                                ...eT({
                                    transfer: t,
                                    numberOfFolders: r,
                                    brandingType: a,
                                    uploadDuration: n,
                                    displayName: i,
                                    expiry: o,
                                    hasPassword: s,
                                    transferFilesInfo: l
                                }),
                                requestId: d
                            }
                        }
                    }
                };
            var eS = r(15539);
            let eg = "user_cancellation_request",
                eR = N.$.generateTypes(["RESET_UPLOAD_PROGRESS", "UPDATE_UPLOAD_TIME", "SET_LAST_UPDATE", "UPDATE_UPLOAD_PROGRESS", "UPDATE_TOTAL_UPLOAD_PROGRESS"]),
                eh = [b.A.NETWORK_ERROR, b.A.INCOMPLETE_UPLOAD, b.A.TRANSFER_FAILED],
                ey = N.$.generateActions({
                    resetUploadProgress: [eR.RESET_UPLOAD_PROGRESS],
                    updateUploadTime: [eR.UPDATE_UPLOAD_TIME, "bytesSentSoFar", "currentSize"],
                    setLastUpdate: [eR.SET_LAST_UPDATE],
                    updateUploadProgress: [eR.UPDATE_UPLOAD_PROGRESS, "bytesSentSoFar", "transferUploadStartedAt"],
                    updateTotalUploadProgress: [eR.UPDATE_TOTAL_UPLOAD_PROGRESS, "totalProgress"],
                    pauseUpload: function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return t => {
                            var r;
                            null == (r = en.A.pauseStormUpload) || r.call(en.A), t(ey.pauseUploadProgress()), e || t({
                                type: H.o1.TRANSFER_SET_STATE,
                                state: J.r.PAUSED
                            })
                        }
                    },
                    resumeUpload: function(e) {
                        return t => {
                            var r;
                            null == (r = en.A.resumeStormUpload) || r.call(en.A), t(ey.startUploadProgress(e.files, (0, eS.nn)({
                                transfer: e
                            }), e.uploadStartedAt)), t({
                                type: H.o1.TRANSFER_SET_STATE,
                                state: J.r.STARTED
                            })
                        }
                    },
                    cancelUpload: eD,
                    resetTransfer: eC,
                    abortTransfer: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        return r => {
                            r(eD(e, !1, t)), r({
                                type: H.o1.TRANSFER_SET_STATE,
                                state: J.r.ABORTED
                            })
                        }
                    },
                    stopUploadProgress: function() {
                        return e => {
                            e(ey.pauseUploadProgress()), e(ey.resetUploadProgress())
                        }
                    },
                    startUploadProgress: function(e, t, r) {
                        return a => {
                            a(ey.estimateUploadTime(e, t)), a(ey.calculateUploadProgress(e, t, r))
                        }
                    },
                    pauseUploadProgress: function() {
                        return () => {
                            a && (clearTimeout(a), a = null), n && (clearTimeout(n), n = null)
                        }
                    },
                    estimateUploadTime: function(e, t) {
                        return r => {
                            r(ey.setLastUpdate()), a && clearTimeout(a), a = setTimeout(() => {
                                let a = e.reduce((e, t) => e + t.bytesSent, 0);
                                r(ey.updateUploadTime(a, t)), r(ey.estimateUploadTime(e, t))
                            }, X.Yn.upload.remainingTimeInterval)
                        }
                    },
                    calculateUploadProgress: function(e, t, r) {
                        return (a, i) => {
                            let o = e.reduce((e, t) => e + t.bytesSent, 0);
                            a(ey.updateUploadProgress(o, r));
                            let s = i().transferUpload.progress.total;
                            ed.Ay.setPercentage(s.toFixed()), (0, el.A)().collect("upload progress", {
                                bytesSentSoFar: o,
                                currentSize: t,
                                fileCount: null == e ? void 0 : e.length,
                                percentage: s.toFixed(2),
                                bucketedPercentage: s.toFixed(),
                                networkVariability: ed.Ay.currentUploadStats.networkVariabilityCounter
                            }, "INFO", !0), n && clearTimeout(n), n = setTimeout(() => {
                                a(ey.calculateUploadProgress(e, t, r))
                            }, X.Yn.upload.progressInterval)
                        }
                    },
                    verifyPassword: eP,
                    abortUploadOnRefresh: function(e) {
                        return async () => {
                            e.id && (e.state === J.r.STARTED || e.state === J.r.PAUSED) && await Promise.all([eE.QQ.exitTransfer(e.id), (0, ep.T)({
                                name: I.PL,
                                type: "action",
                                tags: {
                                    stage: ed.Ay.currentUploadStats.stage,
                                    transfer_size: es(e.size),
                                    outcome: "canceled",
                                    storm_client_version: ez()
                                }
                            })])
                        }
                    },
                    resumeUploadFromFailure: eL,
                    createTransfer: function(e) {
                        let {
                            transfer: t,
                            isForwardedTransfer: r,
                            deliverableId: a,
                            shouldUseGracePeriodSegment: n,
                            isBackgroundAdFromDaciaCampaign: s = !1,
                            experimentIds: l = [],
                            isUserLoggedIn: d = !0,
                            allowAnonymousTransfer: c = !1,
                            bypassExpirationEntitlement: u = !1,
                            isAnticipatedUploadStarted: _ = !1,
                            isPasswordlessAnticipatedUploadEnabled: p = !1
                        } = e;
                        return async e => {
                            try {
                                let i;
                                if ((0, el.A)().init(ez()), ed.Ay.setStage("TRANSFER_INIT"), t.requestId) i = await eE.QQ.createUploadRequest(function(e) {
                                    let t, {
                                        transfer: r
                                    } = e;
                                    r.files && (t = (0, er.J)(r));
                                    let a = {
                                            message: null == t ? void 0 : t.message,
                                            from: r.sender,
                                            upload_request_id: r.requestId,
                                            files: [],
                                            passwordless: !0
                                        },
                                        n = (0, R.I)();
                                    return null !== n && (a.lsid = n), a.files = (null == t ? void 0 : t.files) ? null == t ? void 0 : t.files.map(e => ({
                                        name: e.name,
                                        size: e.size,
                                        item_type: e.apiType
                                    })) : [], a
                                }({
                                    transfer: t
                                }));
                                else {
                                    let e = (0, et.z)({
                                        transfer: t,
                                        deliverableId: a,
                                        shouldUseGracePeriodSegment: n,
                                        isBackgroundAdFromDaciaCampaign: s,
                                        experimentIds: l,
                                        isUserLoggedIn: d,
                                        allowAnonymousTransfer: c,
                                        bypassExpirationEntitlement: u,
                                        isAnticipatedUploadStarted: _,
                                        isPasswordlessAnticipatedUploadEnabled: p
                                    });
                                    i = await eE.QQ.createUnifiedTransfer(e, _)
                                }
                                if (!i || !i.id) throw new k.A("InvalidTransferId");
                                e({
                                    type: H.o1.TRANSFER_SET_SHORT_URL,
                                    shortURL: i.shortened_url
                                }), (0, el.A)().setTransferId(i.id).setTransferSize(es(t.size)), r && (e({
                                    type: H.o1.TRANSFER_SET_EXPIRY_IN_SECONDS,
                                    expiryInSeconds: i.expiry_in_seconds
                                }), e({
                                    type: H.o1.TRANSFER_SET_SHORT_URL,
                                    shortURL: i.shortened_url
                                })), e({
                                    type: H.o1.TRANSFER_SET_ID,
                                    id: i.id
                                }), i.display_name && e({
                                    type: H.o1.TRANSFER_SET_DISPLAY_NAME,
                                    displayName: i.display_name
                                }), i.resume_token && e({
                                    type: H.o1.TRANSFER_SET_RESUME_TOKEN,
                                    resumeToken: i.resume_token
                                }), i.storm_upload_token && e({
                                    type: H.o1.TRANSFER_SET_STORM_UPLOAD_TOKEN,
                                    stormUploadToken: i.storm_upload_token
                                }), i.signature && e({
                                    type: H.o1.TRANSFER_SET_SIGNATURE,
                                    signature: i.signature
                                });
                                let E = t.type === Z.aG.LINK && !d && c && !(null == t ? void 0 : t.requestId);
                                "passwordless_verification_required" !== i.message || E || (await e((0, L.I)({
                                    email: t.sender
                                })), e({
                                    type: H.o1.UPLOAD_NEED_VERIFICATION
                                })), "email_verification_required" !== i.message || E || e({
                                    type: H.o1.UPLOAD_NEED_VERIFICATION
                                }), o.L.addAction(I.E5, {
                                    files: t.files.length,
                                    storm: !0,
                                    transfer_id: t.id,
                                    transfer_size: t.size,
                                    transfer_type: "link" === t.type ? "Link" : "Email",
                                    domainUserId: t.domainUserId,
                                    userType: t.userType
                                })
                            } catch (r) {
                                var f, A;
                                if ((null == (f = r.body) ? void 0 : f.error) === "not_in_claiming_team") throw e(j.P.setTransferNotification({
                                    text: "NotInClaimingTeam"
                                })), e(ey.resetTransfer()), new k.A(b.A.NOT_IN_CLAIMING_TEAM);
                                if (r.message !== b.A.ANTICIPATED_UPLOAD_FAILED && e({
                                        type: H.o1.TRANSFER_SET_STATE,
                                        state: J.r.ABORTED
                                    }), i.yf.logger.error(r.toString(), {
                                        method: "createTransfer",
                                        user_journey: "upload",
                                        transfer_id: t.id,
                                        stack_trace: r.stack,
                                        transfer: {
                                            domainUserId: t.domainUserId,
                                            expiry: t.expiry,
                                            files: null == (A = t.files) ? void 0 : A.length,
                                            password: !!t.password,
                                            userType: t.userType,
                                            size: t.size
                                        }
                                    }), x.A.track(r), [b.A.LIMIT_REACHED, b.A.USER_BLOCKED, b.A.UNAVAILABLE_PARENT, b.A.HUMAN_VERIFICATION_REQUIRED, b.A.TOO_MANY_RECIPIENTS, b.A.TOO_MANY_TRANSFERS, b.A.ANTICIPATED_UPLOAD_FAILED, b.A.TEAM_POLICY_PASSWORD_REQUIRED, b.A.TEAM_POLICY_LINK_BLOCKED, b.A.DOCUMENT_ALREADY_SIGNED, b.A.ONLY_TEAM_MEMBERS_CAN_UPLOAD].includes(r.message)) throw r;
                                throw r.message === b.A.TOO_MANY_REQUESTS && e((0, E.ef)()), new k.A("TransferFailed", {
                                    transferId: t.id
                                })
                            }
                        }
                    },
                    processUpload: function(e) {
                        let {
                            transfer: t,
                            isForwardedTransfer: r,
                            stormUploadToken: a,
                            resumeInputs: n,
                            isBackgroundAdFromDaciaCampaign: o = !1,
                            shouldUseGracePeriodSegment: s = !1,
                            isAnticipatedUploadStarted: l = !1,
                            canUseUploadCdn: d = !1
                        } = e;
                        return async (e, u) => {
                            let _;
                            if (l || e({
                                    type: H.o1.TRANSFER_SET_STATE,
                                    state: J.r.STARTED
                                }), e({
                                    type: H.o1.TRANSFER_SET_UPLOAD_STARTED_AT,
                                    uploadStartedAt: Date.now(),
                                    monotonicStartTime: performance.now()
                                }), !r) {
                                try {
                                    ed.Ay.setStage("STORM_UPLOAD"), await eB(t, a, e, n, d)
                                } catch (o) {
                                    if ("Canceled via token" === o.message) throw Error(eg);
                                    let r = b.A.TRANSFER_FAILED;
                                    try {
                                        (0, ee.O)(o)
                                    } catch (e) {
                                        r = e.message
                                    }
                                    e(ey.abortTransfer(t, r));
                                    let a = u().transfer,
                                        n = a.displayName ? W.A.t("browser_notifications.notifications.upload_failed", {
                                            transferTitle: a.displayName
                                        }) : W.A.t("browser_notifications.notifications.upload_failed_generic");
                                    throw (0, f.c0)(n), z.A.error(o), x.A.track(o, {
                                        transfer_id: t.id,
                                        upload_method: "storm-client",
                                        short_description: c()(o.shortDescription) ? JSON.stringify(o.shortDescription) : o.shortDescription,
                                        user_journey: "upload"
                                    }), i.yf.logger.error(o.toString(), {
                                        method: "processUpload:uploadFiles",
                                        transfer_id: t.id,
                                        user_journey: "upload",
                                        stack_trace: o.stack,
                                        upload_method: "storm-client",
                                        short_description: c()(o.shortDescription) ? JSON.stringify(o.shortDescription) : o.shortDescription,
                                        short_description_debug: o.shortDescription
                                    }), (0, ee.O)(o), new k.A(b.A.TRANSFER_FAILED)
                                }
                                l && await (eI ? Promise.resolve() : new Promise((e, t) => {
                                    ew = {
                                        resolve: e,
                                        reject: t
                                    }
                                }));
                                try {
                                    var p;
                                    if (!t.id) throw new k.A(b.A.MISSING_TRANSFER_ID);
                                    let e = u().transfer;
                                    ed.Ay.setStage("TRANSFER_FINAL");
                                    let r = e.type === Z.aG.LINK && e.downloaderEmailVerification === h.B.RESTRICTED && (null == (p = e.allowlist) ? void 0 : p.length) > 0;
                                    _ = await eE.QQ.consolidateTransfer({
                                        transferId: t.id,
                                        isBackgroundAdFromDaciaCampaign: o,
                                        shouldUseGracePeriodSegment: s,
                                        recipients: e.recipients,
                                        channel: t.channel || "",
                                        allowlist: r ? e.allowlist : void 0
                                    })
                                } catch (r) {
                                    throw x.A.track(r, {
                                        transfer_id: t.id
                                    }), i.yf.logger.error(r.rawError || r.toString(), {
                                        method: "processUpload:consolidateTransfer",
                                        transfer_id: t.id,
                                        user_journey: "upload",
                                        stack_trace: r.stack,
                                        upload_method: "storm-client"
                                    }), e({
                                        type: H.o1.TRANSFER_SET_STATE,
                                        state: J.r.ABORTED
                                    }), new k.A(b.A.TRANSFER_FAILED)
                                }
                                e({
                                    type: H.o1.TRANSFER_SET_EXPIRY_IN_SECONDS,
                                    expiryInSeconds: _.expiry_in_seconds
                                }), e({
                                    type: H.o1.TRANSFER_SET_SHORT_URL,
                                    shortURL: _.shortened_url
                                }), e({
                                    type: H.o1.TRANSFER_SET_SECURITY_HASH,
                                    securityHash: _.security_hash
                                })
                            }
                            e({
                                type: H.o1.TRANSFER_SET_STATE,
                                state: J.r.FINISHED
                            }), e({
                                type: H.o1.UPLOAD_DONE,
                                transfer: {
                                    ...u().transfer,
                                    state: J.r.PROCESSING
                                }
                            });
                            let E = u().transfer,
                                A = E.displayName ? W.A.t("browser_notifications.notifications.upload_complete", {
                                    transferTitle: E.displayName
                                }) : W.A.t("browser_notifications.notifications.upload_complete_generic");
                            return (0, f.c0)(A), e((0, D.jt)(D.vW.TRANSFER_UPLOAD_FINISHED)), e((0, C.Qg)()), e((0, D.u)()), _
                        }
                    },
                    startUpload: function(e) {
                        let {
                            transfer: t,
                            channel: r,
                            isForwardedTransfer: a,
                            currentSize: n,
                            stormUploadToken: i,
                            signature: o,
                            resumeInputs: s,
                            isBackgroundAdFromDaciaCampaign: l = !1,
                            shouldUseGracePeriodSegment: d = !1,
                            isAnticipatedUploadStarted: c = !1,
                            canUseUploadCdn: u = !1
                        } = e;
                        return async (e, _) => {
                            let p = function(e) {
                                    let {
                                        transfer: t,
                                        mode: r,
                                        isForwardedTransfer: a,
                                        currentSize: n
                                    } = e;
                                    return {
                                        size: n,
                                        forward: a,
                                        password: !!t.password,
                                        expiry: t.expiry,
                                        file_types: Array.from(new Set(t.items.map(e => {
                                            let {
                                                file: t
                                            } = e;
                                            return t.type
                                        }))),
                                        mode: r,
                                        type: t.type,
                                        item_count: t.items.length,
                                        app_type: ea.Ay.isMobile ? "mobile" : "web",
                                        receiver_count: t.recipients.length,
                                        ...0 === U.A.getWTSent() && {
                                            days_since_first_upload: U.A.getDaysSinceFirstVisit()
                                        }
                                    }
                                }({
                                    transfer: t,
                                    mode: "upload",
                                    isForwardedTransfer: a,
                                    currentSize: n
                                }),
                                E = _(),
                                f = (0, Y.m)(E),
                                S = (0, K.B$)(E);
                            e((0, C.UX)());
                            let R = (0, q.uX)(_()),
                                h = t.itemsTree.items.filter(e => "directory" === e.uiType),
                                y = {
                                    transfer: t,
                                    numberOfFolders: h.length,
                                    brandingType: f,
                                    displayName: t.displayName,
                                    expiry: t.expiry,
                                    hasPassword: !!t.password,
                                    transferFilesInfo: JSON.stringify(t.files.map(e => ({
                                        file_type: e.type,
                                        file_size: e.size
                                    }))),
                                    requestId: t.requestId,
                                    downloaderEmailVerificationSelected: t.downloaderEmailVerification,
                                    trackingId: R
                                },
                                w = (null == t ? void 0 : t.type) === Z.aG.EMAIL || (null == t ? void 0 : t.transfer_type) === Z.N3.EMAIL;
                            (0, g.Od)().trackUserAction(t.requestId ? em.requestUploadStarted(y) : w ? em.emailUploadStarted(y) : em.linkUploadStarted(y)), await (0, ep.T)({
                                name: I.eg,
                                type: "action",
                                tags: {
                                    transfer_size: es(t.size),
                                    storm_client_version: ez()
                                }
                            }), V.start("transfer.upload"), (null == t ? void 0 : t.id) && (0, T.sF)(t.id), (null == t ? void 0 : t.id) && e((0, m.gE)({
                                transferId: t.id,
                                resumeToken: t.resumeToken,
                                totalSize: t.size,
                                filesCount: t.itemsTree.items.length,
                                userId: S,
                                canUseUploadCdn: u,
                                expectedResumeCount: t.files.filter(e => e.isFile).length,
                                trackingId: R
                            }));
                            try {
                                e(ey.startUploadProgress(t.files, n, t.uploadStartedAt)), e({
                                    type: H.o1.UPLOAD_ERROR_RESET
                                }), o && e({
                                    type: H.o1.TRANSFER_SET_SIGNATURE,
                                    signature: o
                                });
                                let r = await e(ey.processUpload({
                                    transfer: t,
                                    isForwardedTransfer: a,
                                    stormUploadToken: i,
                                    isBackgroundAdFromDaciaCampaign: l,
                                    shouldUseGracePeriodSegment: d,
                                    isAnticipatedUploadStarted: c,
                                    canUseUploadCdn: u,
                                    resumeInputs: s
                                }));
                                if ((0, P.e)(), U.A.incrementWTSent(), p.success = !0, p.cancelled = !1, p.duration = V.stop("transfer.upload"), await (0, ep.T)({
                                        name: I.PL,
                                        type: "view",
                                        time: p.duration,
                                        tags: {
                                            transfer_size: es(t.size),
                                            outcome: "success",
                                            storm_client_version: ez()
                                        }
                                    }), r) {
                                    var v;
                                    let a = t.files.reduce((e, t) => (e[t.name] = t.type, e), {}),
                                        n = (0, Y.m)(_());
                                    M.A.trackUnstructSnowplowEvent("iglu:com.wetransfer/transfer_event/jsonschema/6-0-0", {
                                        transfer_id: r.id,
                                        transfer_type: r.recipients.length > 0 ? "EMAIL" : "LINK",
                                        expiration_date: r.expires_at,
                                        expiration_duration: r.expiry_in_seconds,
                                        password_protected: r.password_protected,
                                        email_sender_recipient: r.recipients.some(e => {
                                            var t;
                                            return e.email === (null == (t = r.creator) ? void 0 : t.email)
                                        }),
                                        email_number_recipients: r.recipients.length,
                                        number_files: r.files.length,
                                        number_folders: h.length,
                                        files_total_size: r.files.reduce((e, t) => e + t.size, 0),
                                        files: r.files.map(e => ({
                                            id: e.id,
                                            extension: a[e.name],
                                            size: e.size
                                        })),
                                        branding_type: n,
                                        price_amount: (0, F.V6)(r),
                                        price_currency: null == (v = r.price) ? void 0 : v.currency,
                                        is_paid: (0, F.GE)(r.paid),
                                        is_request: !!t.requestId
                                    });
                                    let i = {
                                            transfer: r,
                                            numberOfFolders: h.length,
                                            brandingType: n,
                                            uploadDuration: p.duration,
                                            displayName: r.display_name,
                                            expiry: r.expiry_in_seconds,
                                            isRecoverable: null !== r.extended_expiry_date,
                                            hasPassword: r.password_protected,
                                            transferFilesInfo: JSON.stringify(r.files.reduce((e, t) => ({
                                                ...e,
                                                [t.id]: {
                                                    extension: a[t.name],
                                                    size: t.size
                                                }
                                            }), {})),
                                            requestId: t.requestId,
                                            downloaderEmailVerificationSelected: r.downloader_email_verification,
                                            trackingId: R
                                        },
                                        o = (null == r ? void 0 : r.type) === Z.aG.EMAIL || (null == r ? void 0 : r.transfer_type) === Z.N3.EMAIL;
                                    (0, g.Od)().trackUserAction(t.requestId ? em.requestUploadCompleted(i) : o ? em.emailUploadCompleted(i) : em.linkUploadCompleted(i)), e((0, m.tZ)());
                                    try {
                                        await (0, T.wr)()
                                    } catch (e) {}
                                }
                            } catch (a) {
                                if (a.message === eg) return;
                                (0, el.A)().flush(), e({
                                    type: H.o1.UPLOAD_ERROR,
                                    error: a.message
                                }), (0, H.IF)(e, t, r, a.message)
                            } finally {
                                e(ey.stopUploadProgress()), (null == t ? void 0 : t.id) && (0, T.i3)(t.id), window.dispatchEvent(new CustomEvent(A.U)), e({
                                    type: H.o1.UPLOAD_RESET
                                })
                            }
                        }
                    }
                }),
                ew = null,
                eI = !1;

            function ev() {
                ew && (ew.resolve(), ew = null)
            }

            function eN() {
                ew && (ew.reject(Error(eg)), ew = null), eI = !1
            }

            function eO(e) {
                eI = e
            }

            function eP(e, t, r, a) {
                let n = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
                return async i => {
                    try {
                        let n = await eE.QQ.fetchTransfer(e, t, r, a, !1);
                        i(H.Ay.verifiedPassword(a)), i((0, ef.lX)(n, a)), i(j.P.clearTransferNotification())
                    } catch (e) {
                        i((null == e ? void 0 : e.message) === b.A.TOO_MANY_REQUESTS ? j.P.setTransferNotification({
                            text: "PasswordThrottled"
                        }) : j.P.setTransferNotification({
                            text: n ? "InvalidPassword" : "NoInternet"
                        }))
                    }
                }
            }

            function eL() {
                return async (e, t) => {
                    try {
                        var r;
                        e(H.Ay.setResumeUploadInProgress(!0));
                        let a = t(),
                            n = a.transfer,
                            i = a.channel,
                            o = await (0, T.SU)(),
                            s = null != (r = n.resumeUploadAttempts) ? r : 0;
                        if (e(H.Ay.setResumeUploadAttempts(s + 1)), (0, g.Od)().trackUserAction(S.n.resumeUploadTriggeredAfterFailure({
                                transferId: o.id,
                                filesCount: o.filesCount,
                                createdAt: o.createdAt,
                                progressPercentage: (o.percentage || 0) / 100,
                                totalSize: o.totalSize,
                                trackingId: o.trackingId
                            }, s + 1)), !(o.filesResumeInfo.length && o.resumeToken && o.id && o.percentage > 0)) return;
                        !n.id && o.id && e({
                            type: H.o1.TRANSFER_SET_ID,
                            id: o.id
                        }), !n.resumeToken && o.resumeToken && e({
                            type: H.o1.TRANSFER_SET_RESUME_TOKEN,
                            resumeToken: o.resumeToken
                        }), !n.trackingId && o.trackingId && e({
                            type: H.o1.TRANSFER_SET_TRACKING_ID,
                            trackingId: o.trackingId
                        });
                        let l = t(),
                            d = l.transfer,
                            c = (0, eS.Y2)(l),
                            u = (0, eS.nn)({
                                transfer: d
                            });
                        try {
                            await e(ey.startUpload({
                                transfer: d,
                                channel: i,
                                currentSize: u,
                                isForwardedTransfer: c,
                                resumeInputs: o.filesResumeInfo,
                                isAnticipatedUploadStarted: !1,
                                canUseUploadCdn: o.canUseUploadCdn,
                                stormUploadToken: d.stormUploadToken,
                                signature: d.signature
                            }))
                        } catch (e) {
                            throw e
                        }
                    } finally {
                        e(H.Ay.setResumeUploadInProgress(!1))
                    }
                }
            }

            function eD(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                return async a => {
                    var n;
                    if (await (0, ep.T)({
                            name: I.PL,
                            type: "view",
                            time: Math.ceil(performance.now() - e.monotonicStartTime),
                            tags: {
                                stage: ed.Ay.currentUploadStats.stage,
                                transfer_size: es(e.size),
                                outcome: t ? "canceled" : "failure",
                                storm_client_version: ez()
                            }
                        }), i.yf.logger.info("cancelled upload", {
                            transfer_id: e.id,
                            isUserRequest: t
                        }), eu.stopMonitoring(), null == (n = en.A.cancelStormUpload) || n.call(en.A), e.id && "transfer" === e.feature && (t ? eE.QQ.cancelTransfer(e.id, !0) : r && eh.includes(r) || eE.QQ.cancelTransfer(e.id, !1)), e.files.forEach(e => e.reset()), a(ey.resetUploadProgress()), a({
                            type: H.o1.UPLOAD_RESET
                        }), a((0, m.tZ)()), t) try {
                        await (0, T.wr)()
                    } catch (e) {}
                }
            }

            function eC() {
                return e => {
                    e({
                        type: H.o1.TRANSFER_RESET
                    })
                }
            }

            function eU(e) {
                let {
                    channel: t,
                    account: r,
                    user: a,
                    session: n,
                    allowedSize: i,
                    isForwardedTransfer: o,
                    currentSize: s,
                    deliverableId: l,
                    maximumNumberOfRecipients: d,
                    shouldShowPaywall: c,
                    isBlockingUpload: u = !0,
                    shouldUseGracePeriodSegment: _,
                    experimentIds: p,
                    orionSettings: E,
                    bypassExpirationEntitlement: f = !1,
                    shouldBypassSizeLimit: A = !1,
                    isAnticipatedUploadStarted: T = !1,
                    canUseUploadCdn: m = !1,
                    forcePreviewAndDownloadViewOption: S = !1
                } = e;
                return async (e, g) => {
                    var R, h, w, I, v, N;
                    if (null == (R = g().transfer) ? void 0 : R.resumeUploadInProgress) return;
                    T || e({
                        type: H.o1.UPLOAD_PENDING
                    }), S && e((0, Q.rh)(y._9.PREVIEW_AND_DOWNLOAD)), e({
                        type: H.o1.TRANSFER_SET_LANGUAGE,
                        language: n.language
                    }), e({
                        type: H.o1.TRANSFER_SET_DOMAIN_USER_ID,
                        domainUserId: n.domainUserId
                    });
                    let P = t && t.name,
                        L = r && r.subdomain_name;
                    !P && a.loggedIn && L && e({
                        type: H.o1.TRANSFER_SET_CHANNEL,
                        channel: r.subdomain_name
                    });
                    let C = O.R.includes(null != (N = null == (w = g().adWallpaper) || null == (h = w.adResponse) ? void 0 : h.campaignId) ? N : 0),
                        U = !!(null == (v = g().unlockOneDayExpiryTransfer) || null == (I = v.transferSizeLimitPaywall) ? void 0 : I.transferUnlocked),
                        k = (null == E ? void 0 : E.anonymous_login_step_enabled) || !1,
                        F = (null == E ? void 0 : E.passwordless_anticipated_upload_enabled) || k;
                    try {
                        let e = !!a.loggedIn,
                            t = (null == E ? void 0 : E.allow_anonymous_transfer) || !1;
                        (0, $.Ks)({
                            transfer: g().transfer,
                            maximumNumberOfRecipients: d,
                            maximumNumberOfFiles: a.rules.maximumNumberOfFiles,
                            allowedSize: i,
                            currentSize: s,
                            shouldBypassLimits: C || U || A,
                            isUserLoggedIn: e,
                            allowAnonymousTransfer: t,
                            isAnticipatedUploadStarted: T
                        })
                    } catch (r) {
                        if (!(!a.loggedIn && T && F && ["MissingSender", "InvalidSender"].includes(r.message))) throw (0, H.IF)(e, g().transfer, t, r.message), T && e(H.Ay.setState(J.r.ANTICIPATED_UPLOAD_FAILED)), r
                    }
                    try {
                        let r = !!a.loggedIn,
                            n = (null == E ? void 0 : E.allow_anonymous_transfer) || !1;
                        if (await e(ey.createTransfer({
                                transfer: g().transfer,
                                isForwardedTransfer: o,
                                deliverableId: l,
                                shouldUseGracePeriodSegment: _,
                                isBackgroundAdFromDaciaCampaign: C,
                                experimentIds: p,
                                isUserLoggedIn: r,
                                allowAnonymousTransfer: n,
                                bypassExpirationEntitlement: f,
                                isAnticipatedUploadStarted: T,
                                isPasswordlessAnticipatedUploadEnabled: F
                            })), !g().transfer.verification_required) {
                            let r = g().session.showDataProcessingPrompt;
                            c && u ? (e((0, D.CD)(void 0)), e((0, D.jt)(D.vW.BEFORE_TRANSFER_UPLOAD)), e(H.Ay.setState(J.r.PAYWALL))) : c && !u ? (e((0, D.CD)(void 0)), e((0, D.jt)(D.vW.BEFORE_TRANSFER_UPLOAD)), await e(ey.startUpload({
                                transfer: g().transfer,
                                channel: t,
                                currentSize: s,
                                isForwardedTransfer: o,
                                isBackgroundAdFromDaciaCampaign: C,
                                shouldUseGracePeriodSegment: _,
                                isAnticipatedUploadStarted: T,
                                canUseUploadCdn: m
                            }))) : r ? (e((0, D.CD)(void 0)), e(H.Ay.setState(J.r.DATA_PROCESSING_PROMPT))) : await e(ey.startUpload({
                                transfer: g().transfer,
                                channel: t,
                                currentSize: s,
                                isForwardedTransfer: o,
                                isBackgroundAdFromDaciaCampaign: C,
                                shouldUseGracePeriodSegment: _,
                                isAnticipatedUploadStarted: T,
                                canUseUploadCdn: m
                            }))
                        }
                    } catch (a) {
                        let r = a.message;
                        r === b.A.NOT_IN_CLAIMING_TEAM || (r === b.A.HUMAN_VERIFICATION_REQUIRED ? e({
                            type: H.o1.RECAPTCHA_CHALLENGE_RECEIVED,
                            transfer_id: a.transferId
                        }) : r === b.A.ANTICIPATED_UPLOAD_FAILED ? e(H.Ay.setState(J.r.ANTICIPATED_UPLOAD_FAILED)) : (e({
                            type: H.o1.UPLOAD_ERROR,
                            error: r
                        }), (0, H.IF)(e, g().transfer, t, r)))
                    }
                }
            }

            function ek(e) {
                let {
                    transferToForward: t,
                    allowedSize: r,
                    currentSize: a
                } = e;
                return async (e, n) => {
                    var i;
                    null == (i = en.A.cancelStormUpload) || i.call(en.A), e(ey.stopUploadProgress());
                    let o = t.transfer_type === Z.N3.LINK ? Z.aG.LINK : Z.aG.EMAIL,
                        s = t.sender;
                    o === Z.aG.LINK && (s = U.A.getLastUsedSender(), o = Z.aG.EMAIL);
                    let d = n();
                    d.transfer.sender && !s && (s = d.transfer.sender);
                    let c = l()(d.user, "preferences.transfer_default_expire_in") || v.i.DAYS_3_IN_SECONDS;
                    await e(H.Ay.init({
                        userType: (0, H.W2)({
                            user: d.user,
                            channel: d.channel,
                            transferFromState: d.transfer
                        }),
                        expiry: c,
                        defaultProExpiry: v.i.DAYS_30_IN_SECONDS,
                        defaultFreeExpiry: v.i.DAYS_7_IN_SECONDS,
                        transferType: o,
                        accountId: d.account.id,
                        channelName: t.channel,
                        message: t.message,
                        displayName: t.display_name,
                        parentId: t.id,
                        sender: s,
                        isRecoverable: !0,
                        recipients: U.A.isDefaultRecipientInUploadLocked({
                            channelDefaultRecipient: d.channel.defaultRecipient,
                            userLoggedIn: d.user.loggedIn,
                            channelName: d.channel.name,
                            accountSubDomainName: d.account.subdomain_name
                        }) ? d.transfer.recipients : [],
                        downloaderEmailVerification: t.downloaderEmailVerification,
                        viewOption: t.viewOption,
                        allowComments: t.allowComments
                    })), e(eb({
                        transfer: (d = n()).transfer,
                        files: t.files,
                        allowedSize: r,
                        currentSize: a
                    }))
                }
            }

            function eb(e) {
                let {
                    transfer: t,
                    files: r,
                    allowedSize: a,
                    currentSize: n,
                    maximumNumberOfFiles: i,
                    addMethod: o = "add_files_button",
                    shouldThrowError: s = !1,
                    shouldBypassTooManyBytes: l = !1,
                    isAnticipatedUploadStarted: d = !1
                } = e;
                return async (e, c) => {
                    try {
                        var u, _;
                        if ((0, $.gd)(t.state, t.id, d)) throw Error("TransferStarted");
                        if (!r) throw Error("MissingFiles");
                        let s = Array.prototype.reduce.call(r, (e, t) => {
                                t.addMethod = o;
                                let r = new e_.A(t);
                                return [...e, r]
                            }, []),
                            p = c(),
                            E = (0, eS.Y2)(p),
                            f = null == (u = p.adWallpaper) ? void 0 : u.adResponse,
                            A = O.R.includes(null != (_ = null == f ? void 0 : f.campaignId) ? _ : 0);
                        if (!E) {
                            if (!(0, $.Nc)({
                                    currentSize: n,
                                    files: s,
                                    allowedSize: a,
                                    bypassLimits: A
                                })) {
                                if (U.A.isDefaultRecipientInUploadLocked({
                                        channelDefaultRecipient: p.channel.defaultRecipient,
                                        userLoggedIn: p.user.loggedIn,
                                        channelName: p.channel.name,
                                        accountSubDomainName: p.account.subdomain_name
                                    })) throw Error("TooManyBytesChannel");
                                if (!l) throw Error("TooManyBytes")
                            }
                            if (s.length + t.files.length > i) throw Error("TooManyFiles");
                            if (function(e, t) {
                                    let r = [...e.map(e => e.name.trim()), ...t.files.map(e => e.name.trim())];
                                    return [...new Set(r)].length !== r.length
                                }(s, t)) throw Error("DuplicateFilename")
                        }
                        e(j.P.clearTransferNotification()), e({
                            type: H.o1.TRANSFER_ADD_FILES,
                            files: s
                        });
                        let T = s.filter(e => 1 === e.name.split("/").length),
                            m = [...new Set(s.filter(e => e.name.split("/").length > 1).map(e => e.name.split("/")[0]))],
                            S = s.filter(e => !T.includes(e)),
                            R = T.reduce((e, t) => e + t.size, 0),
                            h = S.reduce((e, t) => e + t.size, 0);
                        T.length && (0, g.Od)().trackUserAction(em.filesAdded({
                            method: o,
                            number: T.length,
                            size: R,
                            transferType: t.type === Z.aG.EMAIL ? Z.aG.EMAIL : Z.aG.LINK
                        })), m.length && (0, g.Od)().trackUserAction(em.foldersAdded({
                            method: o,
                            number: m.length,
                            size: h,
                            transferType: t.type === Z.aG.EMAIL ? Z.aG.EMAIL : Z.aG.LINK
                        }))
                    } catch (t) {
                        if (x.A.track(t), e(j.P.setTransferNotification({
                                text: t.message
                            })), s) throw t
                    }
                }
            }

            function eF(e) {
                let {
                    token: t,
                    transfer: r,
                    channel: a,
                    isForwardedTransfer: n,
                    currentSize: i,
                    shouldShowPaywall: o,
                    shouldShowDataProcessingPrompt: s,
                    shouldUseGracePeriodSegment: l = !1,
                    canUseUploadCdn: d = !1
                } = e;
                return async e => {
                    try {
                        if (!r.id) throw new k.A(b.A.RECAPTCHA_FAILED);
                        await e({
                            type: H.o1.TRANSFER_SET_STATE,
                            state: J.r.INIT
                        });
                        let c = (0, R.I)(),
                            u = await eE.QQ.validateRecaptcha(r.id, {
                                token: t,
                                expire_in: r.expiry,
                                ...null != c ? {
                                    lsid: c
                                } : {}
                            });
                        o ? (e((0, D.CD)(u)), e((0, D.jt)(D.vW.BEFORE_TRANSFER_UPLOAD)), e(H.Ay.setState(J.r.PAYWALL))) : s ? (e((0, D.CD)(u)), e(H.Ay.setState(J.r.DATA_PROCESSING_PROMPT))) : await e(ey.startUpload({
                            transfer: r,
                            channel: a,
                            currentSize: i,
                            isForwardedTransfer: n,
                            stormUploadToken: null == u ? void 0 : u.storm_upload_token,
                            signature: null == u ? void 0 : u.signature,
                            shouldUseGracePeriodSegment: l,
                            canUseUploadCdn: d
                        }))
                    } catch (t) {
                        t.message === b.A.RECAPTCHA_FAILED && await e({
                            type: H.o1.TRANSFER_SET_STATE,
                            state: J.r.RECAPTCHA
                        }), (0, H.IF)(e, r, a, t.message)
                    }
                }
            }

            function eM(e) {
                let {
                    token: t,
                    isForwardedTransfer: r,
                    email: a,
                    shouldShowPaywall: n,
                    shouldShowDataProcessingPrompt: i,
                    shouldUseGracePeriodSegment: o = !1,
                    canUseUploadCdn: s = !1
                } = e;
                return async (e, l) => {
                    let {
                        transfer: d,
                        channel: c
                    } = l();
                    try {
                        let a = (0, R.I)(),
                            l = await eE.QQ.verifyToken(d.id, {
                                code: t,
                                expire_in: d.expiry,
                                ...null != a ? {
                                    lsid: a
                                } : {}
                            });
                        e({
                            type: H.o1.UPLOAD_VERIFIED
                        }), n ? (e((0, D.CD)(l)), e((0, D.jt)(D.vW.BEFORE_TRANSFER_UPLOAD)), e(H.Ay.setState(J.r.PAYWALL))) : i ? (e((0, D.CD)(l)), e(H.Ay.setState(J.r.DATA_PROCESSING_PROMPT))) : e(ey.startUpload({
                            transfer: d,
                            channel: c,
                            currentSize: d.size,
                            isForwardedTransfer: r,
                            stormUploadToken: null == l ? void 0 : l.storm_upload_token,
                            signature: null == l ? void 0 : l.signature,
                            shouldUseGracePeriodSegment: o,
                            canUseUploadCdn: s
                        }))
                    } catch (t) {
                        if (t.status === B.iu.TOO_MANY_REQUESTS) throw e(j.P.setTransferNotification({
                            text: "TransferEmailVerificationThrottleError",
                            button: {
                                text: W.A.t("transfer.email-verification.throttle-error-action"),
                                action() {
                                    e(H.Ay.setState(J.r.INIT)), e(H.Ay.resetVerificationRequired()), e({
                                        type: H.o1.TRANSFER_SET_ID,
                                        id: !1
                                    })
                                }
                            }
                        })), t;
                        throw e(j.P.setTransferNotification({
                            text: "TransferEmailVerificationError",
                            button: {
                                text: W.A.t("transfer.email-verification.error-expiry-time-action"),
                                action() {
                                    e(ex(a))
                                }
                            }
                        })), t
                    }
                }
            }

            function ex(e) {
                return async (t, r) => {
                    let {
                        transfer: a
                    } = r();
                    try {
                        await eE.QQ.resendToken(a.id, {
                            sender_email: e
                        }), t({
                            type: H.o1.TRANSFER_SET_SENDER,
                            email: e
                        }), t({
                            type: H.o1.TRANSFER_SET_STATE,
                            state: J.r.VERIFY
                        })
                    } catch (e) {
                        if (e.status === B.iu.TOO_MANY_REQUESTS) throw t(j.P.setTransferNotification({
                            text: "TransferEmailVerificationResendThrottleError",
                            button: {
                                text: W.A.t("transfer.email-verification-resend.throttle-error-action"),
                                action() {
                                    t(H.Ay.setState(J.r.INIT)), t(H.Ay.resetVerificationRequired()), t({
                                        type: H.o1.TRANSFER_SET_ID,
                                        id: !1
                                    })
                                }
                            }
                        })), e;
                        throw t(j.P.setTransferNotification({
                            text: "TransferEmailVerificationResendError"
                        })), e
                    }
                }
            }
            async function eB(e, t, r, a) {
                let n = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                    i = t || e.stormUploadToken;
                if (i) return eW({
                    ...e,
                    stormUploadToken: i
                }, r, a, n);
                throw Error("Upload Token not found")
            }
            async function eW(e, t, r) {
                let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                eu.startMonitoring(e.id, e.size, e.files.length, ez());
                let n = e.files.filter(e => e.isFile),
                    o = n.map(e => (e.ref.overriddenRelativePath = e.safename, e.ref)),
                    {
                        pause: s,
                        resume: l,
                        cancel: d,
                        start: c
                    } = (0, p.pJ)({
                        items: o,
                        token: e.stormUploadToken,
                        onProgress: r => {
                            let {
                                perFile: a,
                                progress: i,
                                completedProgress: o
                            } = r;
                            t(ey.updateTotalUploadProgress(i)), (0, T.YH)(e.id, 100 * o);
                            let s = 0;
                            for (let [e, {
                                    uploaded: t
                                }] of a.entries()) n[e].state.bytesSent = t, s += t;
                            eu.updateProgress(s, e.size)
                        },
                        onDebug: t => {
                            if ("TRACE" === t.type && (0, ep.T)({
                                    name: _()(t.details.metric),
                                    type: "view",
                                    time: t.details.duration,
                                    tags: {
                                        transfer_size: es(e.size),
                                        number_files: (e => {
                                            switch (!0) {
                                                case e <= 10:
                                                    return "1-10 files";
                                                case e <= 100:
                                                    return "11-100 files";
                                                case e <= 1e3:
                                                    return "101-1000 files";
                                                case e <= 1e4:
                                                    return "1001-10000 files";
                                                default:
                                                    return "plus 10000 files"
                                            }
                                        })(e.items.length),
                                        storm_client_version: ez()
                                    }
                                }), "ERROR" === t.type || "true" === (0, w.A)().NEXT_PUBLIC_STORM_CLIENT_DEBUG_MODE_ENABLED) {
                                var r;
                                let a = "ERROR" === t.type ? "error" : "log";
                                i.yf.logger[a]("".concat("ERROR" === t.type ? "[ERROR] " : "").concat(t.message), {
                                    ...t.details,
                                    method: "uploadFilesUsingStorm",
                                    transfer_id: e.id,
                                    connectionStatus: null == (r = navigator) ? void 0 : r.onLine,
                                    storm_client_version: ez()
                                })
                            }
                        },
                        useUploadCDN: a,
                        onResumeInfo: (r, a) => {
                            t((0, m.t7)({
                                transferId: e.id,
                                resumeInfo: {
                                    index: r,
                                    uploadId: a.uploadId,
                                    objectKey: a.objectKey
                                }
                            }))
                        },
                        resumeInputs: r
                    });
                en.A.pauseStormUpload = s, en.A.resumeStormUpload = l, en.A.cancelStormUpload = d;
                try {
                    let e = await c();
                    return eu.stopMonitoring(), e
                } catch (e) {
                    throw eu.stopMonitoring(), e
                }
            }
            let ez = () => "4.3.6"
        },
        88848: (e, t, r) => {
            r.d(t, {
                Ad: () => i.Ad,
                Bf: () => a.Bf,
                CD: () => a.CD,
                Cb: () => a.Cb,
                E1: () => o.E,
                EQ: () => a.EQ,
                I4: () => n.I4,
                Tt: () => a.Tt,
                UK: () => a.UK,
                Xl: () => n.Xl,
                ZL: () => a.ZL,
                cJ: () => i.cJ,
                jI: () => a.jI,
                jt: () => a.jt,
                jw: () => i.jw,
                oR: () => i.oR,
                ow: () => i.ow,
                pU: () => n.pU,
                u: () => a.u,
                ue: () => o.u,
                ut: () => a.ut,
                vT: () => a.vT,
                vW: () => n.vW,
                wn: () => i.wn,
                y5: () => n.y5,
                y_: () => i.y_
            });
            var a = r(97151),
                n = r(69361),
                i = r(72754),
                o = r(26106)
        },
        89187: (e, t, r) => {
            r.d(t, {
                CS: () => l,
                Is: () => s,
                d7: () => u,
                dg: () => o,
                js: () => i,
                m4: () => c,
                rx: () => d,
                sE: () => _,
                sX: () => n,
                zX: () => p
            });
            var a = r(28330),
                n = function(e) {
                    return e.FREE = "ACCOUNT_FREE_V3", e.STARTER = "STARTER_V1", e.ULTIMATE = "ULTIMATE_V1", e.ULTIMATE_V2 = "ULTIMATE_V2", e.ENTERPRISE = "ENTERPRISE_V1", e.STARTER_MOBILE = "STARTER_MOBILE_V1", e.ULTIMATE_MOBILE = "ULTIMATE_MOBILE_V1", e.ULTIMATE_MOBILE_V2 = "ULTIMATE_MOBILE_V2", e.ULTIMATE_STORAGE_EXTENDED = "ULTIMATE_V1_STORAGE_EXTENDED", e.ULTIMATE_V2_STORAGE_EXTENDED = "ULTIMATE_V2_STORAGE_EXTENDED", e.ULTIMATE_V3 = "ULTIMATE_V3", e
                }({}),
                i = function(e) {
                    return e.PLUS = "plus", e.PRO_2022 = "pro_2022", e.PREMIUM_2022 = "premium_2022", e.FREE = "free", e.TRANSFER = "transfer", e.DISTRIBUTE = "distribute", e.COLLABORATE = "collaborate", e.LITE = "lite", e.STARTER = "starter", e.ULTIMATE = "ultimate", e.ENTERPRISE = "enterprise", e.ENTERPRISE_CUSTOM_CONTRACT = "enterprise_custom_contract", e
                }({});
            let o = e => ({
                    collaborate: "Collaborate",
                    distribute: "Distribute",
                    free: "WeTransfer Free",
                    lite: "Lite",
                    premium_2022: "WeTransfer Premium",
                    pro_2022: "WeTransfer Pro",
                    starter: "WeTransfer Starter",
                    transfer: "Transfer",
                    ultimate: "WeTransfer Ultimate",
                    enterprise: "WeTransfer Teams",
                    enterprise_custom_contract: "WeTransfer Enterprise",
                    plus: "WeTransfer"
                })[e],
                s = e => {
                    switch (e) {
                        case "plus":
                            return "Plus";
                        case "pro_2022":
                            return "Pro";
                        case "premium_2022":
                            return "Premium";
                        case "free":
                            return "Free";
                        case "transfer":
                            return "Transfer";
                        case "distribute":
                            return "Distribute";
                        case "collaborate":
                            return "Collaborate";
                        case "lite":
                            return "Lite";
                        case "starter":
                            return "Starter";
                        case "ultimate":
                            return "Ultimate";
                        case "enterprise":
                            return "Teams";
                        case "enterprise_custom_contract":
                            return "Enterprise"
                    }
                };
            var l = function(e) {
                    return e.YEARLY = "yearly", e.MONTHLY = "monthly", e.WEEKLY = "weekly", e
                }({}),
                d = function(e) {
                    return e.NONE = "none", e.WELCOME25 = "WELCOME25", e.WELCOME50 = "WELCOME50", e.WELCOME_50 = "WELCOME-50", e
                }({});
            let c = e => {
                    switch (e) {
                        case a.YF.week:
                            return "weekly";
                        case a.YF.month:
                            return "monthly";
                        case a.YF.year:
                            return "yearly"
                    }
                },
                u = "yearly",
                _ = "ACCOUNT_FREE_V1",
                p = "ACCOUNT_FREE_V2"
        },
        89395: (e, t, r) => {
            r.d(t, {
                tc: () => _,
                AO: () => u,
                Ue: () => c
            });
            var a = r(6286),
                n = r(54026),
                i = r(31838);
            let o = async e => {
                let {
                    fileName: t,
                    fileSize: r
                } = e, n = a.G6.assets();
                return fetch(n, {
                    method: "POST",
                    headers: await (0, a.L$)({
                        withAuth: !0
                    }),
                    body: JSON.stringify({
                        fileName: t,
                        fileSize: r
                    })
                }).then(a.yH).catch(a.yR)
            }, s = async e => {
                let {
                    file: t,
                    presignedPutUrl: r,
                    putRequestHeaders: n
                } = e;
                return fetch(r, {
                    method: "PUT",
                    headers: await (0, a.L$)({
                        withAuth: !0,
                        headers: n
                    }),
                    body: t
                }).then(a.yH).catch(a.yR)
            }, l = async e => {
                let {
                    assetId: t,
                    stormId: r
                } = e, n = a.G6.assets(t);
                return fetch(n, {
                    method: "PATCH",
                    headers: await (0, a.L$)({
                        withAuth: !0
                    }),
                    body: JSON.stringify({
                        stormId: r
                    })
                }).then(a.yH).catch(a.yR)
            }, d = async e => {
                let {
                    assetId: t,
                    dimensions: r = n.Fs
                } = e, i = a.G6.assets(t, "workspace-id");
                return i.searchParams.set("dimensions", r.map(e => e.join("x")).join(",")), fetch(i, {
                    method: "GET",
                    headers: await (0, a.L$)()
                }).then(a.yH).catch(a.yR)
            }, c = e => {
                let {
                    assetId: t,
                    dimensions: r = n.Fs
                } = e;
                return new Promise((e, a) => {
                    let n = setInterval(async () => {
                        await d({
                            assetId: t,
                            dimensions: r
                        }).then(t => {
                            var r;
                            let {
                                fileSize: a,
                                fileName: i,
                                previews: o,
                                originalUrl: s
                            } = t;
                            o && (null == (r = o[0]) ? void 0 : r.url) && (clearInterval(n), e({
                                fileSize: a,
                                fileName: i,
                                previews: o,
                                originalUrl: s
                            }))
                        }).catch(() => {
                            clearInterval(n), a(Error("Error fetching asset"))
                        })
                    }, 1e3);
                    setTimeout(() => clearInterval(n), 6e4)
                })
            }, u = async e => {
                let {
                    assetId: t
                } = e;
                return fetch(a.G6.assets(t), {
                    method: "DELETE",
                    headers: await (0, a.L$)({
                        withAuth: !0
                    })
                }).then(a.yH).catch(a.yR)
            }, _ = async e => {
                try {
                    let {
                        presignedPutUrl: t,
                        assetId: r,
                        putRequestHeaders: a
                    } = await o({
                        fileName: e.fileName,
                        fileSize: e.fileSize
                    }), {
                        file: n
                    } = e, {
                        data: {
                            item_id: d
                        }
                    } = await s({
                        file: n,
                        presignedPutUrl: t,
                        putRequestHeaders: a
                    });
                    await l({
                        assetId: r,
                        stormId: d
                    });
                    let {
                        fileSize: u,
                        fileName: _,
                        previews: p
                    } = await c({
                        assetId: r
                    }), E = (0, i.f)(p);
                    return {
                        fileSize: u,
                        fileName: _,
                        assetId: r,
                        previews: E
                    }
                } catch (e) {
                    return {
                        fileSize: 0,
                        fileName: "",
                        assetId: "",
                        error: (null == e ? void 0 : e.message) || "UNKNOWN_ERROR",
                        previews: {}
                    }
                }
            }
        },
        89795: (e, t, r) => {
            r.d(t, {
                $_: () => i,
                BV: () => d,
                TL: () => c,
                wX: () => l
            });
            var a = r(96361),
                n = r(39483);
            let i = (0, a.Z0)({
                    name: "transferWindowCardSwitcher",
                    initialState: {
                        isSwitcherDisabled: !1,
                        isUploadForeground: null,
                        uploadCompletionUpsellCardParams: null
                    },
                    reducers: {
                        setIsSwitcherDisabled(e, t) {
                            e.isSwitcherDisabled = t.payload
                        },
                        setIsUploadForeground(e, t) {
                            e.isUploadForeground = t.payload
                        },
                        setUploadCompletionUpsellCardParams(e, t) {
                            e.uploadCompletionUpsellCardParams = t.payload
                        }
                    },
                    extraReducers: e => {
                        e.addCase(n.bo, e => {
                            e.isSwitcherDisabled = !0
                        }).addCase(n.NQ, e => {
                            e.isSwitcherDisabled = !1
                        }).addCase("UPLOAD_PENDING", e => {
                            e.isSwitcherDisabled = !0
                        }).addCase("TRANSFER_INIT", e => {
                            e.isSwitcherDisabled = !1, e.uploadCompletionUpsellCardParams = null
                        }).addCase("TRANSFER_RESET", e => {
                            e.isSwitcherDisabled = !1, e.uploadCompletionUpsellCardParams = null
                        })
                    }
                }),
                {
                    actions: o,
                    reducer: s
                } = i,
                {
                    setIsSwitcherDisabled: l,
                    setIsUploadForeground: d,
                    setUploadCompletionUpsellCardParams: c
                } = o
        },
        90512: (e, t, r) => {
            r.d(t, {
                AX: () => i,
                Ei: () => E,
                Is: () => l,
                Mm: () => c,
                Mp: () => p,
                O$: () => u,
                W7: () => n,
                eV: () => _,
                f4: () => s,
                pe: () => d,
                rE: () => o
            });
            var a = r(4559);
            let n = e => e.route,
                i = (0, a.Mz)(n, e => {
                    var t;
                    return (null == (t = e.params) ? void 0 : t.id) || void 0
                }),
                o = (0, a.Mz)(n, e => {
                    var t;
                    return (null == (t = e.params) ? void 0 : t.secret) || void 0
                }),
                s = (0, a.Mz)(n, e => null == e ? void 0 : e.params.file_id),
                l = (0, a.Mz)(n, e => null == e ? void 0 : e.params.recipient_id),
                d = (0, a.Mz)(n, e => e.path),
                c = (0, a.Mz)(n, e => e.query),
                u = (0, a.Mz)(c, e => {
                    let {
                        duration: t
                    } = e;
                    return t
                }),
                _ = (0, a.Mz)(c, e => {
                    let {
                        renewal: t
                    } = e;
                    return t
                }),
                p = (0, a.Mz)(c, e => {
                    let {
                        free: t
                    } = e;
                    return t
                });
            (0, a.Mz)(n, e => e.isPanelOpen), (0, a.Mz)(n, e => e.isPanelFullOpen), (0, a.Mz)(n, e => e.isPanelHalfOpen);
            let E = (0, a.Mz)(n, e => {
                var t;
                return null == (t = e.params) ? void 0 : t.advert_id
            })
        },
        91010: (e, t, r) => {
            r.d(t, {
                A: () => a
            });
            let a = {
                ACCESS_DENIED: "AccessDenied",
                HUMAN_VERIFICATION_REQUIRED: "HumanVerificationRequired",
                INVALID_REQUEST: "InvalidRequest",
                INVALID_TRANSFER: "InvalidTransfer",
                LIMIT_REACHED: "LimitReached",
                RECAPTCHA_FAILED: "RecaptchaFailed",
                TOO_MANY_RECIPIENTS: "TooManyRecipients",
                TOO_MANY_REQUESTS: "TooManyRequests",
                TOO_MANY_TRANSFERS: "TooManyTransfers",
                UNAVAILABLE_PARENT: "UnavailableParent",
                UNKNOWN_RESPONSE: "UnknownResponse",
                USER_BLOCKED: "UserBlocked",
                VALIDATION_FAILED: "ValidationFailed",
                WRONG_VERIFICATION_CODE: "WrongVerificationCode",
                TRANSFER_FAILED: "TransferFailed",
                MISSING_TRANSFER_ID: "MissingTransferId",
                MALWARE_SCAN_FAILED: "MalwareScanError",
                INVALID_EMAIL_FORMAT: "InvalidEmailFormat",
                ANTICIPATED_UPLOAD_FAILED: "AnticipatedUploadFailed",
                INCOMPLETE_UPLOAD: "IncompleteUpload",
                FILESYSTEM_ERROR: "FilesystemError",
                FIREWALL_BLOCKED: "FirewallBlocked",
                PROXY_BLOCKED: "ProxyBlocked",
                NETWORK_ERROR: "NetworkError",
                SERVER_ERROR: "ServerError",
                SERVER_TIMEOUT: "ServerTimeout",
                STREAM_ERROR: "StreamError",
                CONFIGURATION_ERROR: "ConfigurationError",
                UNKNOWN_STATUS_ERROR: "UnknownStatusError",
                TRANSFER_NOT_FOUND: "TransferNotFound",
                RATE_LIMITED: "RateLimited",
                INCOMPLETE_DOWNLOAD: "IncompleteDownload",
                DOWNLOAD_UNKNOWN_ERROR: "DownloadUnknownError",
                TEAM_POLICY_PASSWORD_REQUIRED: "team_policy_password_required",
                TEAM_POLICY_LINK_BLOCKED: "team_policy_link_blocked",
                DOCUMENT_ALREADY_SIGNED: "DocumentAlreadySigned",
                NOT_IN_CLAIMING_TEAM: "NotInClaimingTeam",
                ONLY_TEAM_MEMBERS_CAN_UPLOAD: "only_team_members_can_upload"
            }
        },
        91295: (e, t, r) => {
            r.d(t, {
                b: () => o
            });
            var a = r(56941),
                n = r(25402),
                i = r(95779);
            async function o(e) {
                let {
                    email: t,
                    language: r
                } = e, o = (0, n.A)(), s = (0, a.Z)();
                await (0, i.A)({
                    method: "POST",
                    path: "".concat(o.NEXT_PUBLIC_ADROIT_API_BASE, "/api/v1/login/passwordless"),
                    params: {
                        client_id: s.clientId,
                        email: t,
                        metadata: {
                            language: r
                        }
                    }
                })
            }
        },
        91345: (e, t, r) => {
            r.d(t, {
                A: () => i
            });
            var a = r(34463);
            let n = 0;
            class i {
                static resetFilenameCounter() {
                    n = 0
                }
                get bytesSent() {
                    return this.state.bytesSent
                }
                reset() {
                    this.id = null, o(this)
                }
                constructor(e, t) {
                    let r;
                    if (this.id = e.id || null, this.ref = e, this.name = e.relativePath || e.name || e.filename, this.apiType = e.apiType || a.i.file, this.isFile = this.apiType === a.i.file, this.size = e.size || e.filesize, this.safename = this.name.trim(), this.metadata = this.ref.metadata || {}, this.type = function(e) {
                            let t = e.name;
                            return (t = t.substring(t.lastIndexOf(".") + 1)) ? t.toUpperCase() : "Unknown file"
                        }(this), this.addMethod = e.addMethod, this.size || (this.size = 0), t) {
                        let {
                            fileIndex: e,
                            onProgress: r
                        } = t;
                        this.fileIndex = e || 0, this.onProgress = r
                    }!this.id && navigator.userAgent.match(/(iPad|iPhone|iPod)/i) && (r = this.safename.match(/\.(jpe?g|png|gif|bmp|tiff?)$/i)) && (this.name = this.safename = "image" + "00000".concat(++n).substr(-5) + "." + r[1]), this.state = {}, o(this)
                }
            }

            function o(e) {
                e.state = {
                    bytesSent: 0
                }
            }
        },
        92003: (e, t, r) => {
            r.d(t, {
                Cs: () => s,
                dd: () => o,
                lZ: () => i,
                ue: () => n
            });
            var a = r(96361);
            let n = {
                    activeBannerId: void 0
                },
                i = (0, a.Z0)({
                    name: "banner",
                    initialState: n,
                    reducers: {
                        setActiveBanner: (e, t) => {
                            e.activeBannerId = t.payload
                        },
                        clearBanner: e => {
                            e.activeBannerId = void 0
                        }
                    }
                }),
                {
                    setActiveBanner: o,
                    clearBanner: s
                } = i.actions;
            i.reducer
        },
        92156: (e, t, r) => {
            r.d(t, {
                y: () => a
            });
            var a = function(e) {
                return e.HALF = "half size panel", e.FULL = "full size panel", e.NONE = "no panel", e
            }({})
        },
        92633: (e, t, r) => {
            r.d(t, {
                t7: () => a.t7,
                rU: () => a.rU,
                k7: () => a.k7,
                tZ: () => a.tZ,
                do: () => a.do,
                aI: () => n,
                gE: () => a.gE
            });
            var a = r(73692);
            let n = e => e.resumeTransferPersistence
        },
        93040: (e, t, r) => {
            r.d(t, {
                A: () => a
            });
            let a = {
                replace(e, t) {
                    if ("function" != typeof window.history.replaceState) return this.forceNavigate(e);
                    setTimeout(() => {
                        window.history.replaceState({
                            secret: "wt"
                        }, t, e), document.title = t
                    }, 0)
                },
                push(e, t) {
                    if ("function" != typeof window.history.pushState) return this.forceNavigate(e);
                    window.history.pushState({
                        secret: "wt"
                    }, t, e), document.title = t
                },
                forceNavigate() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/";
                    window.location.pathname !== e && (window.location.href = e)
                },
                listen(e) {
                    window.addEventListener("hashchange", () => {
                        e(window.location.pathname, window.location)
                    }), window.addEventListener("popstate", t => {
                        t && t.state && "wt" === t.state.secret && e(window.location.pathname, window.location)
                    }, !1)
                }
            }
        },
        95467: (e, t, r) => {
            r.r(t), r.d(t, {
                actions: () => O,
                default: () => L
            });
            var a = r(32770),
                n = r.n(a),
                i = r(20657),
                o = r(65509),
                s = r(55450),
                l = r(56264),
                d = r(21848),
                c = r(89187),
                u = r(40334),
                _ = r(53123),
                p = r(79716),
                E = r(11148),
                f = r(84530);
            r(72076);
            var A = r(62373),
                T = r(55676),
                m = r(42789),
                S = r(52737),
                g = r(72255),
                R = r(57912),
                h = r(27498),
                y = r(63306),
                w = r(96644),
                I = r(68018),
                v = r(68081),
                N = r(10694);
            let O = S.A.types(["GET_USER", "CHANGE_USER_LANGUAGE", "CHANGE_USER_IS_VERIFIED", "UPDATE_USER_EMAIL", "REQUEST_PASSWORD_RESET_SUCCESS", "CHANGE_HAS_SKIPPED_VERIFICATION", "DISABLE_OTP"]),
                P = S.A.generate({
                    updateUserEmail: [O.UPDATE_USER_EMAIL, "email"],
                    disableOtp: [O.DISABLE_OTP],
                    setWTPlusCookie(e) {
                        let {
                            domain: t,
                            planTier: r
                        } = e, a = r === c.js.PLUS || r === c.js.PREMIUM_2022 || r === c.js.PRO_2022 || r === c.js.STARTER || r === c.js.ULTIMATE;
                        T.A.set(u.o.cookies.plus.name, +!!a, {
                            domain: t,
                            days: 365,
                            path: "/"
                        })
                    },
                    unsetWTPlusCookie(e) {
                        let {
                            domain: t
                        } = e;
                        T.A.unset(u.o.cookies.plus.name, {
                            domain: t,
                            path: "/"
                        })
                    },
                    pushSigninAnalytics(e, t) {
                        A.A.configure({
                            userId: t
                        }), e((0, v.Ee)())
                    },
                    pushSignoutAnalytics() {
                        A.A.trackSnowplowEvent({
                            category: "plus_account",
                            action: "signout"
                        })
                    },
                    pushSignupAnalytics(e, t) {
                        P.pushSigninAnalytics(e, t)
                    },
                    getNextPage(e, t, r) {
                        let a = g.A.getLastRoute("transfer", "/");
                        if (e && e.id && e.items.length > 0 && a && a.includes("downloads")) {
                            let {
                                id: t,
                                recipient_id: r,
                                secret: a
                            } = e, n = ["/downloads", t, r].filter(Boolean).join("/");
                            return "".concat(n, "/").concat(a)
                        }
                        return t || r
                    },
                    redirectWithRefresh(e) {
                        let {
                            session: t,
                            route: r,
                            account: a,
                            nextPage: n,
                            keepParams: i = !0,
                            keepSubDomain: o = !0
                        } = e;
                        window.onbeforeunload = null;
                        let {
                            subdomain_name: s,
                            active_subscription: l
                        } = a, d = l && s && o ? s : null, c = d ? "".concat(d, ".").concat(t.domain) : t.domain, u = new URL(n, "".concat(location.protocol, "//").concat(c, ":").concat(location.port));
                        i && Object.entries(r.query).forEach(e => {
                            let [t, r] = e;
                            u.searchParams.set(t, r)
                        }), r.segment && (u.hash = r.segment), location.assign(u.href)
                    },
                    delayedResetPending(e, t) {
                        setTimeout(() => e((0, I.lX)(t)), u.o.actions.extended_pending)
                    },
                    signout() {
                        let {
                            isForwardedTransfer: e
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = "signout";
                        return async r => {
                            r((0, I.m$)(t));
                            try {
                                e && r(y.Ay.create()), P.pushSignoutAnalytics();
                                let a = new Date(Date.now() + 18e5);
                                T.A.set(u.o.cookies.signout.name, 1, {
                                    expires: a
                                }), P.delayedResetPending(r, t), await r((0, d.ri)())
                            } catch (e) {
                                r(w.P9.setPanelNotification({
                                    category: w.aF.Error,
                                    details: "signout_exception"
                                })), r((0, I.lX)(t))
                            }
                        }
                    },
                    getUser() {
                        let e = "getUser";
                        return async (t, r) => {
                            t((0, I.m$)(e));
                            try {
                                var a, n, l;
                                let d = t(s.SQ.endpoints.getCurrentUserAdroit.initiate()),
                                    [c, A] = await Promise.all([o.A.User.getCurrentUser(), d]),
                                    m = A.data;
                                d.unsubscribe();
                                let S = (null == (a = r().auth) ? void 0 : a.picture) || "",
                                    g = S && !S.includes("cdn.auth0.com") ? S : _.A.getAvatar(c.body.id),
                                    R = (null == (n = (e => {
                                        if (e) return Object.entries(E.a4).map(e => {
                                            let [t, r] = e;
                                            return {
                                                key: t,
                                                value: r
                                            }
                                        }).find(t => {
                                            if (e === t.value) return t.key;
                                            let r = t.value.split("-")[0];
                                            if (e.split("-")[0] === r) return t.key
                                        })
                                    })(m.language || "en")) ? void 0 : n.key) || "en",
                                    h = {
                                        ...c.body,
                                        email: m.email,
                                        given_name: m.firstName,
                                        family_name: m.lastName,
                                        full_name: (0, i.nD)(m.firstName, m.lastName),
                                        language: R,
                                        is_verified: m.emailVerified,
                                        otp_enabled: m.mfaEnabled,
                                        otp_enabled_at: m.mfaUpdatedAt,
                                        created_at: m.createdAt,
                                        hasMarketingConsent: m.marketingConsent,
                                        marketingConsentUpdatedAt: m.marketingConsentUpdatedAt,
                                        has_profile_picture: !!m.avatar,
                                        profile_picture: {
                                            image_url: null != (l = m.avatar) ? l : g
                                        }
                                    };
                                return t({
                                    type: O.GET_USER,
                                    details: h
                                }), h.language !== r().session.language && (await f.R.changeLanguage(h.language), T.A.set(u.o.cookies.overrideLanguage.name, h.language, {
                                    domain: (0, p.R)(),
                                    days: 365,
                                    path: "/"
                                }), t((0, v.xC)(h.language))), t((0, I.lX)(e)), h
                            } catch (r) {
                                t(w.P9.setPanelNotification({
                                    category: w.aF.Error,
                                    details: "retrieve_user_exception"
                                })), t((0, I.lX)(e))
                            }
                        }
                    },
                    updatePassword() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = "password";
                        return async r => {
                            r((0, I.m$)(t));
                            try {
                                await o.A.User.updatePassword(e), r(w.P9.setPanelNotification({
                                    category: w.aF.Notification,
                                    details: "update_password"
                                }))
                            } catch (e) {
                                r(e.status === m.iu.BAD_REQUEST ? h.A.setError("password", e.body.fields) : w.P9.setPanelNotification({
                                    category: w.aF.Error,
                                    details: "update_password_exception"
                                }))
                            }
                            r((0, I.lX)(t))
                        }
                    },
                    requestPasswordReset(e) {
                        let t = "requestPasswordReset";
                        return async r => {
                            r((0, I.m$)(t));
                            try {
                                let t = await o.A.User.requestPasswordReset({
                                    email: e
                                });
                                r({
                                    type: O.REQUEST_PASSWORD_RESET_SUCCESS,
                                    details: t.body
                                })
                            } catch (e) {
                                e.status === m.iu.NOT_FOUND ? (r(h.A.setError("requestPasswordReset", e.body.message)), r(w.P9.setPanelNotification({
                                    category: w.aF.Error,
                                    details: "request_password_reset_no_user"
                                }))) : (r(h.A.setError("requestPasswordReset", "request_password_reset_exception")), r(w.P9.setPanelNotification({
                                    category: w.aF.Error,
                                    details: "request_password_reset_exception"
                                })))
                            }
                            r((0, I.lX)(t))
                        }
                    },
                    resetPassword() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = "password";
                        return async r => {
                            r((0, I.m$)(t));
                            try {
                                await o.A.User.resetPassword(e), g.A.navigateTo("/log-in")
                            } catch (e) {
                                e.status === m.iu.BAD_REQUEST ? r(e.body.fields && e.body.fields.reset_password_token ? w.P9.setPanelNotification({
                                    category: w.aF.Error,
                                    details: "reset_password_token_invalid"
                                }) : w.P9.setPanelNotification({
                                    category: w.aF.Error,
                                    details: "reset_password_error"
                                })) : (r(h.A.setError("password", "reset_password_exception")), r(w.P9.setPanelNotification({
                                    category: w.aF.Error,
                                    details: "reset_password_exception"
                                }))), r((0, I.lX)(t))
                            }
                        }
                    },
                    unsubscribeOnboarding(e) {
                        let t = "unsubscribeOnboarding";
                        return async r => {
                            r((0, I.m$)(t));
                            try {
                                await o.A.User.unsubscribeUserOnboarding({
                                    verifier_id: e
                                })
                            } finally {
                                r((0, I.lX)(t))
                            }
                        }
                    },
                    unsubscribeLinkTransfer(e) {
                        let t = "unsubscribeLinkTransfer";
                        return async r => {
                            r((0, I.m$)(t));
                            try {
                                await o.A.User.unsubscribeLinkTransfer({
                                    verifier_id: e
                                })
                            } finally {
                                r((0, I.lX)(t))
                            }
                        }
                    },
                    verifyAccountEmail(e) {
                        let {
                            verificationCode: t,
                            verificationSignature: r
                        } = e;
                        return async e => {
                            try {
                                await o.A.User.verifyAccountEmail({
                                    verification_code: t,
                                    verification_signature: r
                                }), e(y.Ay.setState(N.r.VERIFY_ACCOUNT_SUCCESS)), e({
                                    type: O.CHANGE_USER_IS_VERIFIED,
                                    isVerified: !0
                                }), e({
                                    type: O.CHANGE_HAS_SKIPPED_VERIFICATION,
                                    hasSkippedVerification: !1
                                })
                            } catch (t) {
                                throw t.status === m.iu.TOO_MANY_REQUESTS && e(w.P9.setTransferNotification({
                                    text: "AccountEmailVerificationLinkResendThrottleError"
                                })), t
                            }
                        }
                    },
                    resendVerifyAccountEmail(e) {
                        let {
                            email: t,
                            showTransferNotification: r
                        } = e;
                        return async (e, a) => {
                            let i = a().user.email;
                            try {
                                if (r && i !== t) {
                                    var s;
                                    if (null == (s = (await e(l.jt.endpoints.userExists.initiate({
                                            email: t
                                        }))).data) ? void 0 : s.exists) throw {
                                        status: m.iu.BAD_REQUEST,
                                        body: {
                                            fields: {
                                                email: ["taken"]
                                            }
                                        }
                                    }
                                }
                                await o.A.User.resendVerifyAccountEmail({
                                    email: t
                                });
                                let {
                                    route: n
                                } = a();
                                "/account-verification" === n.path && n.query.sig && g.A.navigateTo("/", !1, !1, {
                                    query: {}
                                }), e(P.updateUserEmail(t)), e(R.A.updateAccountMembershipUserEmail(t)), e(y.Ay.setState(N.r.VERIFY_ACCOUNT))
                            } catch (t) {
                                if (t.status === m.iu.TOO_MANY_REQUESTS) throw r && e(w.P9.setTransferNotification({
                                    text: "AccountEmailVerificationLinkResendThrottleError"
                                })), t;
                                throw e(n()(t, "body.fields.email", []).includes("taken") ? w.P9.setTransferNotification({
                                    text: "AccountEmailVerificationResendEmailExistsError"
                                }) : w.P9.setTransferNotification({
                                    text: "AccountEmailVerificationResendError"
                                })), t
                            }
                        }
                    },
                    redirectToTwoFactorSSOSetup: () => async e => {
                        try {
                            let {
                                body: {
                                    ticket_url: e
                                }
                            } = await o.A.User.retrieveEnableTwoFactorRedirectUrl();
                            location.assign(e)
                        } catch (t) {
                            throw t.status === m.iu.TOO_MANY_REQUESTS ? e(w.P9.setPanelNotification({
                                category: w.aF.Error,
                                details: "update_information_throttle",
                                params: {
                                    throttle_time: f.A.t("datetime.distance_in_words.x_minutes", {
                                        count: 10
                                    })
                                }
                            })) : w.P9.setPanelNotification({
                                category: w.aF.Error,
                                details: "something_went_wrong"
                            }), t
                        }
                    },
                    disableTwoFactorAuthentication(e) {
                        let {
                            password: t,
                            otp: r,
                            type: a = "otp"
                        } = e;
                        return async e => {
                            try {
                                await o.A.User.disableTwoFactorAuthentication({
                                    password: t,
                                    otp: r
                                }, {
                                    pathExtValues: {
                                        type: a
                                    }
                                }), e(P.disableOtp())
                            } catch (t) {
                                if (t.status === m.iu.TOO_MANY_REQUESTS) return e(w.P9.setPanelNotification({
                                    category: w.aF.Error,
                                    details: "update_information_throttle",
                                    params: {
                                        throttle_time: f.A.t("datetime.distance_in_words.x_minutes", {
                                            count: 10
                                        })
                                    }
                                }));
                                if ("invalid_password" === n()(t, "body.error")) return e(w.P9.setPanelNotification({
                                    category: w.aF.Error,
                                    details: "invalid_password"
                                }));
                                e(w.P9.setPanelNotification({
                                    category: w.aF.Error,
                                    details: "something_went_wrong"
                                }))
                            }
                        }
                    },
                    unsubscribeFromExpirationReminders(e) {
                        let {
                            signature: t,
                            isUser: r,
                            email: a,
                            emailType: n
                        } = e;
                        return async e => {
                            try {
                                if (r) return void await o.A.User.unsubscribeFromExpirationReminders({
                                    signature: t,
                                    email_type: n
                                });
                                await o.A.Reminder.unsubscribeExpiration({
                                    signature: t,
                                    email: a,
                                    email_type: n
                                })
                            } catch (t) {
                                throw e(t.status === m.iu.FORBIDDEN ? w.P9.setPanelNotification({
                                    category: w.aF.Error,
                                    details: "unsubscribe_expiration_invalid_signature"
                                }) : w.P9.setPanelNotification({
                                    category: w.aF.Error,
                                    details: "unsubscribe_expiration_exception"
                                })), t
                            }
                        }
                    },
                    getUserDataProcessingOptIn: () => async () => (await o.A.User.getUserDataProcessingOptIn()).body,
                    updateUserDataProcessingOptIn(e) {
                        let t = "userDataProcessingPreferenceValueUpdate";
                        return async r => {
                            r((0, I.m$)(t));
                            try {
                                await o.A.User.updateUserDataProcessingOptIn({
                                    value: e
                                })
                            } catch (e) {}
                            r((0, I.lX)(t))
                        }
                    }
                }),
                L = P
        },
        95779: (e, t, r) => {
            r.d(t, {
                A: () => _,
                W: () => u
            });
            var a = r(85201),
                n = r(32770),
                i = r.n(n),
                o = r(24932),
                s = r(25402),
                l = r(40334),
                d = r(55676),
                c = r(42789);

            function u(e) {
                let t = /^https?:/.test(e) && !e.includes((0, s.A)().NEXT_PUBLIC_API_URL || "/api/v4"),
                    r = {};
                t || (r["X-App-Origin"] = "decoupled");
                let a = d.A.get(l.o.cookies.currentTeam.name);
                a && !t && (r["X-Current-Team"] = a);
                let n = (0, o.I)();
                return n && !t && (r["X-Local-Storage-Id"] = n), r
            }

            function _(e) {
                return (0, a.A)(function(e) {
                    let t = i()(e, "method", "get").toLowerCase(),
                        r = "get" === t,
                        a = r ? null : e.params,
                        n = r ? e.params : null,
                        o = u(e.path);
                    return {
                        url: e.path,
                        method: t,
                        params: n,
                        data: a,
                        headers: {
                            ...o,
                            ...e.headers
                        },
                        timeout: i()(e, "timeout", 0),
                        onUploadProgress: i()(e, "onUploadProgress", null),
                        cancelToken: i()(e, "cancelToken", null),
                        validateStatus: e => e >= 200 && e < 400,
                        withCredentials: i()(e, "withCredentials", !1),
                        "axios-retry": i()(e, "axios-retry", void 0)
                    }
                }(e)).then(c.p0).catch(c.CS)
            }
        },
        96644: (e, t, r) => {
            r.d(t, {
                P9: () => a.P,
                aF: () => n.a,
                vF: () => i.vF
            });
            var a = r(56915),
                n = r(48585),
                i = r(44614)
        },
        96652: (e, t, r) => {
            r.d(t, {
                Fw: () => s,
                QS: () => o,
                Yn: () => l,
                lN: () => i
            });
            var a = r(25402),
                n = r(26115);
            let i = 65535,
                o = /^((.+\s)<([^@\s]+@([^@\s]+\.)+[^@\s]+)>|(<|\(|')?([^@\s]+@([^@\s]+\.)+[^@\s>)']+)('|\)|>)?)$/im,
                s = /\s*/g,
                l = Object.freeze({
                    upload: {
                        chunk: {
                            minSize: 15 * n.MB,
                            maxCount: 999
                        },
                        retry: {
                            limit: 10
                        },
                        remainingTimeInterval: 1e4,
                        progressInterval: 500
                    },
                    queue: {
                        retryLimit: 10
                    },
                    api: {
                        endpoint: (0, a.A)().NEXT_PUBLIC_API_URL + "/api/v4",
                        timeout: 3e4,
                        retry: {
                            limit: 10
                        }
                    }
                })
        },
        96773: (e, t, r) => {
            r.d(t, {
                Ay: () => _
            });
            var a = r(40334),
                n = r(79716),
                i = r(55676),
                o = r(78598),
                s = r(10162);
            let l = {
                settings: {
                    ...{
                        firstVisitCookieName: a.o.cookies.firstVisit.name,
                        allowTracking: !1,
                        userId: null,
                        user: {},
                        auth: {},
                        account: {},
                        currentTeam: {},
                        domain: (0, n.R)()
                    }
                },
                firstPageView: !0,
                snowplowQueue: [],
                SDKsLoaded: !1,
                waitForGTMInterval: null
            };
            async function d() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 ? arguments[1] : void 0;
                if (t && (l = t), l.settings = {
                        ...l.settings,
                        ...e
                    }, l.settings.userId && u("setUserId", l.settings.userId), l.settings.allowTracking && "/forgot-password" !== location.pathname && !l.SDKsLoaded) try {
                    a.o.analytics.sdks.facebook && await r.e(2662).then(r.t.bind(r, 22662, 23)), l.SDKsLoaded = !0
                } catch (e) {
                    o.A.track(e)
                }
            }

            function c(e, t, r, a) {
                let n = !e || t === r;
                return e && a ? [{
                    schema: "iglu:com.wetransfer/team_context/jsonschema/2-0-0",
                    data: {
                        team_id: e.toString(),
                        team_role: n ? "TEAM_CREATOR" : "TEAM_MEMBER"
                    }
                }] : []
            }

            function u(e) {
                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) r[a - 1] = arguments[a]
            }
            let _ = {
                state: l,
                configure: d,
                getEventCustomContext: c,
                getUserTypeContext: s.DL,
                trackSnowplowEvent: function() {
                    let {
                        category: e,
                        action: t,
                        label: r,
                        property: a,
                        value: n,
                        context: i
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (!e || !t) throw Error('Both "Category" and "Action" are required');
                    if (!i) {
                        let {
                            auth: e,
                            user: t,
                            currentTeam: r
                        } = l.settings;
                        i = [(0, s.pP)(t, null == e ? void 0 : e.auth0UserId)], e && r && i.push(...c(r.id, r.creatorId, null == e ? void 0 : e.auth0UserId, !1))
                    }
                    u("trackStructEvent:co", {
                        category: e,
                        action: t,
                        label: r,
                        property: a,
                        value: n,
                        context: i
                    })
                },
                trackPageView: function(e, t, r, a, n) {
                    let i = new URL("".concat(location.origin).concat(e)),
                        o = [(0, s.pP)(t, a)];
                    o.push(...c(null == r ? void 0 : r.id, null == r ? void 0 : r.creatorId, a, n)), u("trackPageView:co", {
                        title: "".concat(i.pathname).concat(i.search),
                        context: o
                    })
                },
                trackFirstVisit: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.settings.firstVisitCookieName;
                    i.A.get(e) || i.A.set(e, Date.now(), {
                        days: 365,
                        domain: l.settings.domain
                    })
                },
                trackTermsAccepted: function(e) {
                    let {
                        id: t,
                        version: r,
                        name: a
                    } = e;
                    u("trackConsentGranted:co", {
                        id: t,
                        version: r,
                        name: a,
                        description: null,
                        expiry: null,
                        context: null,
                        tstamp: Date.now()
                    })
                },
                trackUnstructSnowplowEvent: function(e, t) {
                    if (!t || !e) throw Error('Both "Schema" and "eventData" are required');
                    let {
                        auth: r,
                        user: a,
                        currentTeam: n
                    } = l.settings, i = [(0, s.pP)(a, null == r ? void 0 : r.auth0UserId)];
                    r && n && i.push(...c(n.id, n.creatorId, null == r ? void 0 : r.auth0UserId, !1)), u("trackSelfDescribingEvent", {
                        event: {
                            schema: e,
                            data: t
                        },
                        context: i
                    })
                }
            }
        },
        97151: (e, t, r) => {
            r.d(t, {
                Bf: () => A,
                CD: () => f,
                Cb: () => E,
                EQ: () => p,
                Tn: () => S,
                Tt: () => R,
                UK: () => _,
                ZL: () => y,
                jI: () => g,
                jt: () => u,
                u: () => m,
                ut: () => h,
                vT: () => T
            });
            var a = r(42599),
                n = r(63306),
                i = r(45477),
                o = r(72546),
                s = r(10694),
                l = r(88797),
                d = r(15539),
                c = r(72754);
            let {
                setPaywallTrigger: u,
                paywallShown: _,
                paywallLimitsHit: p,
                paywallDismissed: E,
                setTransferDetails: f,
                resetPaywallState: A,
                setCurrentWebpage: T,
                resetUnlockHigherLimitsPaywallTransfer: m,
                setUnlockHigherLimitsPaywallTransfer: S,
                medicalConsentConfirmed: g,
                clearMedicalConsentStartTrigger: R,
                clearSkipMedicalConsentCheck: h
            } = r(26106).E.actions, y = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return (t, r) => {
                    let a = () => {
                        (0, o.Jz)(r()) === s.r.PAYWALL ? t(w(e)) : setTimeout(a, 100)
                    };
                    a()
                }
            }, w = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return (t, r) => {
                    let s = r(),
                        u = (0, o.Kj)(s),
                        _ = (0, i.Tb)(s),
                        p = (0, d.Y2)(s),
                        E = (0, d.nn)(s),
                        f = (0, c.Ad)(s),
                        A = (0, a.cN)(s),
                        T = l.YK,
                        m = n.o1;
                    try {
                        t(T.startUpload({
                            transfer: u,
                            channel: _,
                            currentSize: E,
                            isForwardedTransfer: p,
                            stormUploadToken: null == f ? void 0 : f.stormUploadToken,
                            signature: null == f ? void 0 : f.signature,
                            shouldUseGracePeriodSegment: A,
                            canUseUploadCdn: e
                        }))
                    } catch (a) {
                        let e = a.message;
                        t({
                            type: m.UPLOAD_ERROR,
                            error: e
                        }), (0, n.IF)(t, r().transfer, _, e)
                    }
                }
            }
        },
        97197: (e, t, r) => {
            r.d(t, {
                N3: () => i,
                R0: () => o,
                aG: () => a,
                xA: () => n
            });
            var a = function(e) {
                    return e.LINK = "link", e.EMAIL = "email", e
                }({}),
                n = function(e) {
                    return e.TRANSFER = "transfer", e
                }({}),
                i = function(e) {
                    return e[e.LINK = 4] = "LINK", e[e.EMAIL = 1] = "EMAIL", e
                }({});
            let o = {
                4: "link",
                1: "email"
            }
        },
        97402: (e, t, r) => {
            r.d(t, {
                G: () => a
            });
            let a = (0, r(4559).Mz)(e => e.socialLinks, e => e.links)
        },
        98172: (e, t, r) => {
            r.d(t, {
                EA: () => s,
                JQ: () => d,
                Lm: () => i,
                RJ: () => o,
                bF: () => l,
                e2: () => n
            });
            var a = r(4559);
            let n = e => e.auth,
                i = (0, a.Mz)(n, e => null == e ? void 0 : e.auth0UserId),
                o = (0, a.Mz)(n, e => e.isInitialized),
                s = (0, a.Mz)(n, e => e.isLoggedIn),
                l = (0, a.Mz)(n, e => e.isLoading),
                d = (0, a.Mz)(n, e => e.email)
        },
        98175: (e, t, r) => {
            r.d(t, {
                e5: () => o,
                p6: () => i,
                ue: () => n,
                x1: () => s
            });
            var a = r(96361);
            let n = {
                    isWallVisible: !1,
                    showExperience: !1
                },
                i = (0, a.Z0)({
                    name: "consent",
                    initialState: n,
                    reducers: {
                        setIsWallVisible(e, t) {
                            e.isWallVisible = t.payload
                        },
                        setShowExperience(e, t) {
                            e.showExperience = t.payload
                        }
                    }
                }),
                {
                    setShowExperience: o,
                    setIsWallVisible: s
                } = i.actions
        },
        98463: (e, t, r) => {
            r.d(t, {
                K: () => o
            });
            var a = r(71034),
                n = r(82710);
            let i = (0, r(25402).A)(),
                o = (0, a.xP)({
                    reducerPath: "adroitApi",
                    baseQuery: (0, n.S)({
                        baseUrl: "".concat(i.NEXT_PUBLIC_ADROIT_API_BASE, "/api/v1/")
                    }),
                    tagTypes: ["CurrentUser", "Domain", "PaymentMethods", "SamlScimTokens", "SamlSsoConfig", "Workspace"],
                    endpoints: () => ({})
                }),
                {
                    util: {
                        invalidateTags: s
                    }
                } = o
        },
        98654: (e, t, r) => {
            r.d(t, {
                m1: () => a,
                qe: () => n,
                qg: () => i
            });
            var a = function(e) {
                return e.embeddedMobile = "embeddedMobile", e
            }({});
            let n = (e, t) => {
                    window.sessionStorage.setItem(e, t)
                },
                i = e => window.sessionStorage.getItem(e) || ""
        },
        99469: (e, t, r) => {
            r.d(t, {
                q: () => E,
                c: () => p
            });
            var a = r(2269),
                n = r(24870),
                i = r(83263),
                o = r(23798),
                s = r(75586),
                l = r.n(s),
                d = r(92917);
            let c = l()(() => Promise.all([r.e(6028), r.e(4932), r.e(2206), r.e(646), r.e(8135), r.e(3899), r.e(8197), r.e(4453), r.e(2760), r.e(365), r.e(3768), r.e(8225)]).then(r.bind(r, 98225)).then(e => {
                    let {
                        CoverEditor: t
                    } = e;
                    return t
                }), {
                    loadableGenerated: {
                        webpack: () => [98225]
                    },
                    loading: () => (0, o.jsx)(d.y, {})
                }),
                u = l()(() => Promise.all([r.e(646), r.e(7865), r.e(9333), r.e(1502)]).then(r.bind(r, 71502)).then(e => {
                    let {
                        SplashPage: t
                    } = e;
                    return t
                }), {
                    loadableGenerated: {
                        webpack: () => [71502]
                    },
                    loading: () => (0, o.jsx)(d.y, {})
                }),
                _ = l()(() => Promise.all([r.e(6028), r.e(4932), r.e(2206), r.e(646), r.e(3899), r.e(2760), r.e(365), r.e(3768), r.e(6192)]).then(r.bind(r, 16192)).then(e => {
                    let {
                        ApplyChangesPage: t
                    } = e;
                    return t
                }), {
                    loadableGenerated: {
                        webpack: () => [16192]
                    },
                    loading: () => (0, o.jsx)(d.y, {})
                });

            function p(e) {
                return e === i.tE.color ? n.eQ : n.O7
            }

            function E(e) {
                switch (e) {
                    case a.fW.EDITOR:
                        return c;
                    case a.fW.SPLASH:
                        return u;
                    case a.fW.APPLY_CHANGES:
                        return _;
                    default:
                        return
                }
            }
        }
    }
]);
//# sourceMappingURL=7963.af292b563fd1e87c.js.map
