(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6192], {
        10995: (e, a, l) => {
            "use strict";
            l.d(a, {
                A: () => h
            });
            var s = l(98175),
                n = l(68018),
                d = l(68081),
                i = l(57912),
                t = l(27498),
                r = l(63306),
                o = l(53155),
                g = l(6481),
                p = l(53289),
                _ = l(95467);
            let h = {
                Transfer: r.Ay,
                Session: {
                    acceptTermsConditions: d.Ee,
                    acceptTrackers: d.qM,
                    declineTrackers: d.yc,
                    setDomainUserId: d.tm,
                    setLanguage: d.xC,
                    setRedirect: d.LE,
                    setShowDataProcessingPrompt: d.rK
                },
                Transfers: o.Ay,
                TransfersReceived: g.A,
                User: _.default,
                Account: i.A,
                Pending: {
                    setPending: n.m$,
                    resetPending: n.lX
                },
                Errors: t.A,
                UI: p.A,
                Consent: {
                    setShowExperience: s.e5,
                    setIsWallVisible: s.x1
                }
            }
        },
        16192: (e, a, l) => {
            "use strict";
            l.r(a), l.d(a, {
                ApplyChangesPage: () => S
            });
            var s = l(23798),
                n = l(46001),
                d = l.n(n),
                i = l(16182),
                t = l.n(i),
                r = l(21462),
                o = l(75546),
                g = l(38169),
                p = l(97116),
                _ = l(74941),
                h = l(87963),
                w = l(89395),
                m = l(35320),
                c = l(80341),
                y = l(62594),
                u = l(24870),
                b = l(19632),
                C = l(24463),
                A = l(78283),
                x = l(2269),
                P = l(15168),
                v = l(51384),
                k = l(68505),
                f = l(62760),
                j = l(10995),
                N = l(12637),
                L = l(13672),
                T = l(86781),
                I = l(59204),
                D = l.n(I),
                E = function(e) {
                    return e.USE_FOR_TRANSFER_CLICKED = "apply_branded_changes_transfer", e.SAVE_TO_BRAND_CLICKED = "apply_branded_changes_brand", e.CANCEL_CLICKED = "apply_branded_changes_cancelled", e
                }(E || {});
            let M = {
                    applyToTransferClicked(e) {
                        let {
                            hasCoverChanges: a,
                            hasPreviewBackgroundChanges: l
                        } = e;
                        return {
                            kind: "apply_branded_changes_transfer",
                            info: {
                                hasCoverChanges: a,
                                hasPreviewBackgroundChanges: l
                            }
                        }
                    },
                    saveToBrandClicked(e) {
                        let {
                            hasCoverChanges: a,
                            hasPreviewBackgroundChanges: l
                        } = e;
                        return {
                            kind: "apply_branded_changes_brand",
                            info: {
                                hasCoverChanges: a,
                                hasPreviewBackgroundChanges: l
                            }
                        }
                    },
                    cancelClicked: () => ({
                        kind: "apply_branded_changes_cancelled",
                        info: {}
                    })
                },
                B = {
                    safeAreaTop: 32,
                    safeAreaBottom: 32,
                    safeAreaLeft: 60,
                    safeAreaRight: 60
                },
                K = {
                    background: {
                        type: c._B.Background,
                        backgroundColor: "#f5f5f5"
                    }
                };

            function R(e) {
                var a, l, s, n, d, i;
                return (null == e || null == (l = e.previews) || null == (a = l.large) ? void 0 : a.url) || (null == e || null == (n = e.previews) || null == (s = n.editorPreview) ? void 0 : s.url) || (null == e || null == (i = e.previews) || null == (d = i.thumbnail) ? void 0 : d.url)
            }

            function S() {
                var e, a, l, n;
                let {
                    t: i
                } = (0, o.Bd)(), I = (0, g.wA)(), {
                    settings: {
                        is_branded_previews_enabled: E
                    }
                } = (0, f.k)(), S = (0, g.d4)(x.LJ), O = (0, g.d4)(P.Di), U = (0, g.d4)(P.Bt), F = (0, g.d4)(P.A3), H = (0, g.d4)(P.HD), W = (0, g.d4)(P.pS), q = (0, g.d4)(P.eL), J = (0, g.d4)(N.n9), V = (0, g.d4)(N.Pq), z = (0, g.d4)(T.Ce), X = (0, g.d4)(P.MJ), G = (0, g.d4)(P.TB), Z = (0, g.d4)(P.jV), Q = (0, g.d4)(P.wv), $ = (0, g.d4)(P.lc), Y = (0, g.d4)(P.D4), ee = (0, g.d4)(P.mA), ea = (0, g.d4)(P.YF), el = (0, g.d4)(P.R), es = (0, g.d4)(P.u0), en = (0, g.d4)(N.yD), ed = (0, g.d4)(e => (0, L.aE)(e, F || "")), ei = (0, g.d4)(e => (0, P.yi)(e, F || "")), et = (0, g.d4)(e => (0, P.r7)(e, F || "")), er = (0, r.useMemo)(() => {
                    if (!H) return !1;
                    let {
                        layout: e
                    } = (0, C.Hh)(W, H), a = null != et ? et : u.dL;
                    return !t()(JSON.parse(JSON.stringify(a)), JSON.parse(JSON.stringify(e)))
                }, [W, H, et]), eo = (0, r.useMemo)(() => ee !== (null != el ? el : c.hK.image) || (ee === c.hK.solidColor ? null === es || ea !== es : !!$ && (!Y || $.assetId !== Y.assetId)), [$, Y, ee, el, ea, es]), eg = (0, r.useMemo)(() => {
                    var e;
                    if (el !== c.hK.solidColor) return R(Y) || (null == (e = en[0]) ? void 0 : e.asset_url)
                }, [Y, en, el]), ep = (0, r.useMemo)(() => {
                    var e;
                    return el === c.hK.solidColor ? es || void 0 : eg || null == ei || null == (e = ei.background) ? void 0 : e.backgroundColor
                }, [el, es, eg, null == ei || null == (e = ei.background) ? void 0 : e.backgroundColor]), e_ = (0, r.useMemo)(() => {
                    if (!Q) return;
                    let e = q.fileName === u.u6.fileName ? (0, C.Xb)(q, Q) : Q;
                    return (0, C.Hh)(W, e).layout
                }, [W, Q, q]), eh = (0, r.useMemo)(() => {
                    if (ee !== c.hK.solidColor) return eo ? R($) : eg
                }, [ee, eo, $, eg]), ew = (0, r.useMemo)(() => {
                    if (ee === c.hK.solidColor) return ea;
                    if (!eh) {
                        if (W === c.hK.solidColor) {
                            var e;
                            return null == e_ || null == (e = e_.background) ? void 0 : e.backgroundColor
                        }
                        return ep
                    }
                }, [ee, ea, eh, W, null == e_ || null == (a = e_.background) ? void 0 : a.backgroundColor, ep]), em = (0, r.useMemo)(() => {
                    let e = null == q ? void 0 : q.assetId;
                    return !!e && !!(0, v.i5)(e)
                }, [null == q ? void 0 : q.assetId]), ec = (0, r.useMemo)(() => {
                    if (!E) return !1;
                    let e = null == $ ? void 0 : $.assetId;
                    return !!e && !!(0, v.i5)(e)
                }, [null == $ ? void 0 : $.assetId, E]), ey = em || ec, eu = (0, r.useMemo)(() => z ? ey ? X ? i("showcase.apply_changes.save_to_brand_disabled.multi_image") : em && V.length >= 5 ? i("showcase.apply_changes.save_to_brand_disabled.max_wallpapers") : ec && en.length >= 5 ? i("showcase.apply_changes.save_to_brand_disabled.max_previews_wallpapers") : null : i("showcase.apply_changes.save_to_brand_disabled.no_images") : i("showcase.apply_changes.save_to_brand_disabled.no_access"), [z, ey, X, em, ec, V.length, en.length, i]), eb = (0, r.useCallback)(() => {
                    (0, h.Od)().trackUserAction(M.cancelClicked()), I((0, x.zj)(x.fW.EDITOR))
                }, [I]), eC = (0, r.useCallback)(async () => {
                    if (F && H) {
                        I((0, x.F6)(!0));
                        try {
                            let e, {
                                layout: a,
                                deletedAssetIds: l
                            } = (0, C.Hh)(W, H);
                            ee === c.hK.solidColor ? e = {
                                previewBackgroundColor: ea
                            } : $ && (e = {
                                previewBackgroundAsset: $
                            }), await I((0, x.Qv)(F, a, e)), await Promise.all(l.map(async e => {
                                try {
                                    await (0, w.AO)({
                                        assetId: e
                                    }), I((0, x.Vx)(e))
                                } catch (e) {
                                    k.A.track(e)
                                }
                            })), (0, h.Od)().trackUserAction(M.applyToTransferClicked({
                                hasCoverChanges: er,
                                hasPreviewBackgroundChanges: eo
                            })), I((0, x.F6)(!1)), I((0, x.l1)()), setTimeout(() => {
                                I((0, x._L)(u.u6)), I((0, x.LG)())
                            }, u.Uk)
                        } catch (e) {
                            I((0, x.F6)(!1)), k.A.track(e)
                        }
                    }
                }, [F, H, W, $, ee, ea, er, eo, I]), eA = (0, r.useCallback)(async () => {
                    if (J) {
                        I((0, x.F6)(!0));
                        try {
                            let e = {},
                                a = null == q ? void 0 : q.assetId,
                                l = a && (0, v.i5)(a);
                            if (l) {
                                let a = await I(j.A.UI.uploadAsset(l, "wallpaper"));
                                a && (e.wallpapers = [...V, a].slice(0, 5))
                            }
                            if (E) {
                                let a = null == $ ? void 0 : $.assetId,
                                    l = a && (0, v.i5)(a);
                                if (l) {
                                    let a = await I(j.A.UI.uploadAsset(l, "wallpaper", "previews"));
                                    a && (e.previews_wallpapers = [a])
                                }
                            }
                            Object.keys(e).length > 0 && await I(j.A.Account.editAccount(J, e, {
                                notification: !1
                            })), (0, h.Od)().trackUserAction(M.saveToBrandClicked({
                                hasCoverChanges: er,
                                hasPreviewBackgroundChanges: eo
                            })), I((0, x.F6)(!1)), I((0, x.l1)()), setTimeout(() => {
                                I((0, x._L)(u.u6)), I((0, x.LG)())
                            }, u.Uk)
                        } catch (e) {
                            I((0, x.F6)(!1)), k.A.track(e)
                        }
                    }
                }, [q, $, J, V, E, er, eo, I]), ex = O || E && !U, eP = E ? "light" : "dark", ev = E ? "secondary" : "primary", ek = E ? "default" : "neutral", ef = (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(p.$, {
                        autoFocus: S,
                        disabled: O,
                        onClick: eb,
                        mode: eP,
                        variation: ek,
                        appearance: ev,
                        as: "button",
                        "data-testid": "cancel-button",
                        children: i("showcase.apply_changes.cancel")
                    }), eu ? (0, s.jsx)(_.m, {
                        content: eu,
                        position: "top",
                        mode: "dark",
                        className: D().tooltip,
                        children: (0, s.jsx)("span", {
                            children: (0, s.jsx)(p.$, {
                                disabled: !0,
                                mode: eP,
                                variation: ek,
                                appearance: ev,
                                as: "button",
                                "data-testid": "save-to-brand-button",
                                children: i("showcase.apply_changes.save_to_brand")
                            })
                        })
                    }) : (0, s.jsx)(p.$, {
                        disabled: ex,
                        onClick: eA,
                        mode: eP,
                        variation: ek,
                        appearance: ev,
                        as: "button",
                        "data-testid": "save-to-brand-button",
                        children: i("showcase.apply_changes.save_to_brand")
                    }), (0, s.jsx)(p.$, {
                        disabled: ex,
                        onClick: eC,
                        as: "button",
                        "data-testid": "use-for-transfer-button",
                        children: i("showcase.apply_changes.use_for_transfer")
                    })]
                }), ej = E && (er || eo) && (0, s.jsxs)("div", {
                    className: D().comparisonContainer,
                    children: [(0, s.jsxs)("div", {
                        className: D().comparisonColumn,
                        children: [(0, s.jsxs)("span", {
                            className: D().comparisonLabel,
                            children: [(0, s.jsx)("span", {
                                className: d()(D().comparisonIcon, D().comparisonIconLive)
                            }), i("showcase.apply_changes.current_label")]
                        }), (0, s.jsxs)("div", {
                            className: D().previewsRow,
                            children: [er && (0, s.jsx)("div", {
                                className: D().previewWrapper,
                                children: (0, s.jsx)(y._, {
                                    layout: ei || K,
                                    isThumbnail: !0,
                                    ...B,
                                    className: D().coverViewer,
                                    children: (0, s.jsx)(m.z, {})
                                })
                            }), eo && (0, s.jsx)("div", {
                                className: D().previewWrapper,
                                children: (0, s.jsx)(b.C, {
                                    backgroundImageUrl: eg,
                                    backgroundColor: ep,
                                    className: D().previewsSkeleton,
                                    transferTitle: null == ed ? void 0 : ed.display_name,
                                    transferMessage: null == ei || null == (l = ei.bodyText) ? void 0 : l.text
                                })
                            })]
                        })]
                    }), (0, s.jsxs)("div", {
                        className: D().comparisonColumn,
                        children: [(0, s.jsxs)("span", {
                            className: D().comparisonLabel,
                            children: [(0, s.jsx)("span", {
                                className: D().comparisonIcon
                            }), i("showcase.apply_changes.new_label")]
                        }), (0, s.jsxs)("div", {
                            className: D().previewsRow,
                            children: [er && (0, s.jsx)("div", {
                                className: D().previewWrapper,
                                children: (0, s.jsx)(y._, {
                                    layout: e_ || K,
                                    isThumbnail: !0,
                                    ...B,
                                    className: D().coverViewer,
                                    selectedBackgroundAssets: X ? Z : void 0,
                                    multiImageLayout: X ? G : void 0,
                                    children: (0, s.jsx)(m.z, {})
                                })
                            }), eo && (0, s.jsx)("div", {
                                className: D().previewWrapper,
                                children: (0, s.jsx)(b.C, {
                                    backgroundImageUrl: eh,
                                    backgroundColor: ew,
                                    className: D().previewsSkeleton,
                                    transferTitle: null == ed ? void 0 : ed.display_name,
                                    transferMessage: null == e_ || null == (n = e_.bodyText) ? void 0 : n.text
                                })
                            })]
                        })]
                    })]
                });
                return (0, s.jsxs)("div", {
                    className: D().container,
                    children: [(0, s.jsxs)("div", {
                        className: D().content,
                        children: [(0, s.jsx)("h1", {
                            className: D().title,
                            children: i("showcase.apply_changes.title")
                        }), (0, s.jsxs)("p", {
                            className: D().description,
                            children: [i("showcase.apply_changes.description"), i("showcase.apply_changes.description_secondary")]
                        })]
                    }), ej, E ? (0, s.jsx)("div", {
                        className: D().inlineActions,
                        children: ef
                    }) : (0, s.jsx)(A.j, {
                        children: ef
                    })]
                })
            }
        },
        59204: e => {
            e.exports = {
                "wt-display-heading-x-small-bold": "ApplyChangesPage_wt-display-heading-x-small-bold__xvNVu",
                "wt-display-heading-small-bold-narrow": "ApplyChangesPage_wt-display-heading-small-bold-narrow__r2jWh",
                "wt-display-heading-small-bold": "ApplyChangesPage_wt-display-heading-small-bold__D5_ko",
                "wt-display-heading-small-bold-wide": "ApplyChangesPage_wt-display-heading-small-bold-wide__HwOkk",
                "wt-display-heading-small-narrow": "ApplyChangesPage_wt-display-heading-small-narrow__VQGrL",
                "wt-display-heading-small": "ApplyChangesPage_wt-display-heading-small__bsG2D",
                "wt-display-heading-small-wide": "ApplyChangesPage_wt-display-heading-small-wide__DNgMf",
                "wt-display-heading-medium-bold-narrow": "ApplyChangesPage_wt-display-heading-medium-bold-narrow__EwePR",
                "wt-display-heading-medium-bold": "ApplyChangesPage_wt-display-heading-medium-bold__5tEcB",
                "wt-display-heading-medium-bold-wide": "ApplyChangesPage_wt-display-heading-medium-bold-wide__i4eXk",
                "wt-display-heading-medium-narrow": "ApplyChangesPage_wt-display-heading-medium-narrow__DR4Hy",
                "wt-display-heading-medium": "ApplyChangesPage_wt-display-heading-medium__91lq3",
                "wt-display-heading-medium-wide": "ApplyChangesPage_wt-display-heading-medium-wide___iLqX",
                "wt-display-heading-large-bold-narrow": "ApplyChangesPage_wt-display-heading-large-bold-narrow__ovVHa",
                "wt-display-heading-large-bold": "ApplyChangesPage_wt-display-heading-large-bold__9hrSv",
                "wt-display-heading-large-bold-wide": "ApplyChangesPage_wt-display-heading-large-bold-wide__xMKrJ",
                "wt-display-heading-large-narrow": "ApplyChangesPage_wt-display-heading-large-narrow__qNKXE",
                "wt-display-heading-large": "ApplyChangesPage_wt-display-heading-large__3GzCl",
                "wt-display-heading-large-wide": "ApplyChangesPage_wt-display-heading-large-wide__l6B9M",
                "wt-display-heading": "ApplyChangesPage_wt-display-heading__OGJTo",
                "wt-sub-heading": "ApplyChangesPage_wt-sub-heading__a5DUm",
                "wt-text-heading-small-bold-narrow": "ApplyChangesPage_wt-text-heading-small-bold-narrow__kyEaF",
                "wt-text-heading-small-bold": "ApplyChangesPage_wt-text-heading-small-bold__s1VJK",
                "wt-text-heading-small-bold-wide": "ApplyChangesPage_wt-text-heading-small-bold-wide__XjYuW",
                "wt-text-heading-small-narrow": "ApplyChangesPage_wt-text-heading-small-narrow__0i_Xj",
                "wt-text-heading-small": "ApplyChangesPage_wt-text-heading-small__kDCFe",
                "wt-text-heading-small-wide": "ApplyChangesPage_wt-text-heading-small-wide__OQp_0",
                "wt-text-heading-medium-bold": "ApplyChangesPage_wt-text-heading-medium-bold__DWD6E",
                "wt-text-heading-medium-bold-wide": "ApplyChangesPage_wt-text-heading-medium-bold-wide__cwF91",
                "wt-text-heading-medium-semi-narrow": "ApplyChangesPage_wt-text-heading-medium-semi-narrow__ObIDz",
                "wt-text-heading-medium-narrow": "ApplyChangesPage_wt-text-heading-medium-narrow__IuGpR",
                "wt-text-heading-medium-semi": "ApplyChangesPage_wt-text-heading-medium-semi__LrZ_q",
                "wt-text-heading-medium-semi-wide": "ApplyChangesPage_wt-text-heading-medium-semi-wide__ZsLDA",
                "wt-text-heading-medium": "ApplyChangesPage_wt-text-heading-medium__so6Gm",
                "wt-text-heading-medium-wide": "ApplyChangesPage_wt-text-heading-medium-wide__v9gKo",
                "wt-text-heading-large-bold-narrow": "ApplyChangesPage_wt-text-heading-large-bold-narrow__ChmPC",
                "wt-text-heading-large-bold": "ApplyChangesPage_wt-text-heading-large-bold__nu__Z",
                title: "ApplyChangesPage_title__0dBs6",
                "wt-text-heading-large-bold-wide": "ApplyChangesPage_wt-text-heading-large-bold-wide__oRyev",
                "wt-text-heading-large-narrow": "ApplyChangesPage_wt-text-heading-large-narrow__Un4pf",
                "wt-text-heading-large": "ApplyChangesPage_wt-text-heading-large__2W2uL",
                "wt-text-heading-large-wide": "ApplyChangesPage_wt-text-heading-large-wide__yjv0U",
                "wt-text-heading-x-large-narrow": "ApplyChangesPage_wt-text-heading-x-large-narrow__OBH_l",
                "wt-text-heading-x-large": "ApplyChangesPage_wt-text-heading-x-large__xqa8R",
                "wt-text-heading-x-large-wide": "ApplyChangesPage_wt-text-heading-x-large-wide__ym_rq",
                "wt-text-heading": "ApplyChangesPage_wt-text-heading__YYzoN",
                "wt-body-x-small-semi": "ApplyChangesPage_wt-body-x-small-semi__qy1_x",
                "wt-body-x-small": "ApplyChangesPage_wt-body-x-small__BHxpx",
                "wt-body-small-bold": "ApplyChangesPage_wt-body-small-bold__f8RCm",
                "wt-body-small-semi": "ApplyChangesPage_wt-body-small-semi__T0amy",
                "wt-body-small": "ApplyChangesPage_wt-body-small__Oiet7",
                comparisonLabel: "ApplyChangesPage_comparisonLabel__XswuA",
                description: "ApplyChangesPage_description__jMKzy",
                "wt-body-medium-bold": "ApplyChangesPage_wt-body-medium-bold___dJ9D",
                "wt-body-medium-semi": "ApplyChangesPage_wt-body-medium-semi__CeQkk",
                "wt-body-medium": "ApplyChangesPage_wt-body-medium__NJH5M",
                "wt-body-large-bold": "ApplyChangesPage_wt-body-large-bold__wjHTb",
                "wt-body-large": "ApplyChangesPage_wt-body-large__6IiLL",
                "wt-body-x-large": "ApplyChangesPage_wt-body-x-large__th9Z3",
                "wt-label-x-small-bold": "ApplyChangesPage_wt-label-x-small-bold__vtisa",
                "wt-label-x-small-semi": "ApplyChangesPage_wt-label-x-small-semi__rjfT_",
                "wt-label-x-small": "ApplyChangesPage_wt-label-x-small__Hg3LH",
                "wt-label-small-bold": "ApplyChangesPage_wt-label-small-bold__84BLJ",
                "wt-label-small-semi": "ApplyChangesPage_wt-label-small-semi__uq3IO",
                "wt-label-small": "ApplyChangesPage_wt-label-small__S3WZz",
                "wt-label-medium-bold": "ApplyChangesPage_wt-label-medium-bold__DHlEM",
                "wt-label-medium-semi": "ApplyChangesPage_wt-label-medium-semi__Q66Za",
                "wt-label-medium": "ApplyChangesPage_wt-label-medium__ekyuk",
                "wt-label-large-bold": "ApplyChangesPage_wt-label-large-bold__uHANy",
                "wt-label-large-semi": "ApplyChangesPage_wt-label-large-semi__MZSs6",
                "wt-label-large": "ApplyChangesPage_wt-label-large__CzmDD",
                container: "ApplyChangesPage_container__uCK_3",
                content: "ApplyChangesPage_content__hr5ot",
                comparisonContainer: "ApplyChangesPage_comparisonContainer__7F8g1",
                comparisonColumn: "ApplyChangesPage_comparisonColumn__cCd7k",
                comparisonIcon: "ApplyChangesPage_comparisonIcon__zneQj",
                comparisonIconLive: "ApplyChangesPage_comparisonIconLive__3Xpg1",
                previewsRow: "ApplyChangesPage_previewsRow__4b4TS",
                previewWrapper: "ApplyChangesPage_previewWrapper__2PpXA",
                coverViewer: "ApplyChangesPage_coverViewer__LSZ8p",
                previewsSkeleton: "ApplyChangesPage_previewsSkeleton__5U_qR",
                emptyPreview: "ApplyChangesPage_emptyPreview__lzCK0",
                inlineActions: "ApplyChangesPage_inlineActions__qCF_T",
                tooltip: "ApplyChangesPage_tooltip__Kl6T_"
            }
        }
    }
]);
//# sourceMappingURL=6192.c214d0d874907205.js.map