(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6192], {
        10995: (e, a, l) => {
            "use strict";
            l.d(a, {
                A: () => h
            });
            var s = l(98175),
                n = l(68018),
                i = l(68081),
                d = l(57912),
                t = l(27498),
                r = l(63306),
                o = l(53155),
                g = l(6481),
                p = l(53289),
                _ = l(95467);
            let h = {
                Transfer: r.Ay,
                Session: {
                    acceptTermsConditions: i.Ee,
                    acceptTrackers: i.qM,
                    declineTrackers: i.yc,
                    setDomainUserId: i.tm,
                    setLanguage: i.xC,
                    setRedirect: i.LE,
                    setShowDataProcessingPrompt: i.rK
                },
                Transfers: o.Ay,
                TransfersReceived: g.A,
                User: _.default,
                Account: d.A,
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
                ApplyChangesPage: () => O
            });
            var s = l(23798),
                n = l(46001),
                i = l.n(n),
                d = l(16182),
                t = l.n(d),
                r = l(21462),
                o = l(75546),
                g = l(38169),
                p = l(15933),
                _ = l(97460),
                h = l(87963),
                w = l(89395),
                m = l(35320),
                c = l(80341),
                u = l(65882),
                y = l(62594),
                b = l(24870),
                C = l(19632),
                A = l(24463),
                x = l(78283),
                v = l(2269),
                P = l(15168),
                k = l(51384),
                f = l(68505),
                j = l(62760),
                N = l(10995),
                I = l(12637),
                L = l(13672),
                T = l(86781),
                D = l(59204),
                M = l.n(D),
                E = function(e) {
                    return e.USE_FOR_TRANSFER_CLICKED = "apply_branded_changes_transfer", e.SAVE_TO_BRAND_CLICKED = "apply_branded_changes_brand", e.CANCEL_CLICKED = "apply_branded_changes_cancelled", e
                }(E || {});
            let B = {
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
                K = {
                    safeAreaTop: 32,
                    safeAreaBottom: 32,
                    safeAreaLeft: 60,
                    safeAreaRight: 60
                },
                R = {
                    background: {
                        type: c._B.Background,
                        backgroundColor: "#f5f5f5"
                    }
                };

            function S(e) {
                var a, l, s, n, i, d;
                return (null == e || null == (l = e.previews) || null == (a = l.large) ? void 0 : a.url) || (null == e || null == (n = e.previews) || null == (s = n.editorPreview) ? void 0 : s.url) || (null == e || null == (d = e.previews) || null == (i = d.thumbnail) ? void 0 : i.url)
            }

            function O() {
                var e, a, l, n;
                let {
                    t: d
                } = (0, o.Bd)(), D = (0, g.wA)(), {
                    settings: {
                        is_branded_previews_enabled: E
                    }
                } = (0, j.k)(), O = (0, g.d4)(v.LJ), U = (0, g.d4)(P.Di), F = (0, g.d4)(P.Bt), H = (0, g.d4)(P.A3), W = (0, g.d4)(P.HD), q = (0, g.d4)(P.pS), J = (0, g.d4)(P.eL), V = (0, g.d4)(I.n9), z = (0, g.d4)(I.Pq), X = (0, u.u)("wallpapers"), G = (0, g.d4)(T.Ce), Z = (0, g.d4)(P.MJ), Q = (0, g.d4)(P.TB), $ = (0, g.d4)(P.jV), Y = (0, g.d4)(P.wv), ee = (0, g.d4)(P.lc), ea = (0, g.d4)(P.D4), el = (0, g.d4)(P.mA), es = (0, g.d4)(P.YF), en = (0, g.d4)(P.R), ei = (0, g.d4)(P.u0), ed = (0, g.d4)(I.yD), et = (0, g.d4)(e => (0, L.aE)(e, H || "")), er = (0, g.d4)(e => (0, P.yi)(e, H || "")), eo = (0, g.d4)(e => (0, P.r7)(e, H || "")), eg = (0, r.useMemo)(() => {
                    if (!W) return !1;
                    let {
                        layout: e
                    } = (0, A.Hh)(q, W), a = null != eo ? eo : b.dL;
                    return !t()(JSON.parse(JSON.stringify(a)), JSON.parse(JSON.stringify(e)))
                }, [q, W, eo]), ep = (0, r.useMemo)(() => el !== (null != en ? en : c.hK.image) || (el === c.hK.solidColor ? null === ei || es !== ei : !!ee && (ea ? ee.assetId !== ea.assetId : !!ee.assetId)), [ee, ea, el, en, es, ei]), e_ = (0, r.useMemo)(() => {
                    var e;
                    if (en !== c.hK.solidColor) return S(ea) || (null == (e = ed[0]) ? void 0 : e.asset_url)
                }, [ea, ed, en]), eh = (0, r.useMemo)(() => {
                    var e;
                    return en === c.hK.solidColor ? ei || void 0 : e_ || null == er || null == (e = er.background) ? void 0 : e.backgroundColor
                }, [en, ei, e_, null == er || null == (e = er.background) ? void 0 : e.backgroundColor]), ew = (0, r.useMemo)(() => {
                    if (J.fileName !== b.u6.fileName || !X) return J;
                    let {
                        thumbnail: e,
                        editorPreview: a,
                        large: l
                    } = b.u6.previews;
                    return {
                        ...J,
                        previews: {
                            thumbnail: {
                                ...e,
                                url: X
                            },
                            editorPreview: {
                                ...a,
                                url: X
                            },
                            large: {
                                ...l,
                                url: X
                            }
                        }
                    }
                }, [J, X]), em = (0, r.useMemo)(() => {
                    var e;
                    if (!er || !X) return er;
                    let a = null == (e = er.background) ? void 0 : e.asset;
                    if (null == a ? void 0 : a.assetId) return er;
                    let {
                        thumbnail: l,
                        editorPreview: s,
                        large: n
                    } = b.u6.previews;
                    return {
                        ...er,
                        background: {
                            ...er.background,
                            asset: {
                                ...a || b.u6,
                                previews: {
                                    thumbnail: {
                                        ...l,
                                        url: X
                                    },
                                    editorPreview: {
                                        ...s,
                                        url: X
                                    },
                                    large: {
                                        ...n,
                                        url: X
                                    }
                                }
                            }
                        }
                    }
                }, [er, X]), ec = (0, r.useMemo)(() => {
                    if (!Y) return;
                    let e = J.fileName === b.u6.fileName ? (0, A.Xb)(ew, Y) : Y;
                    return (0, A.Hh)(q, e).layout
                }, [q, Y, J, ew]), eu = (0, r.useMemo)(() => {
                    if (el !== c.hK.solidColor) return ep ? S(ee) : e_
                }, [el, ep, ee, e_]), ey = (0, r.useMemo)(() => {
                    if (el === c.hK.solidColor) return es;
                    if (!eu) {
                        if (q === c.hK.solidColor) {
                            var e;
                            return null == ec || null == (e = ec.background) ? void 0 : e.backgroundColor
                        }
                        return eh
                    }
                }, [el, es, eu, q, null == ec || null == (a = ec.background) ? void 0 : a.backgroundColor, eh]), eb = (0, r.useMemo)(() => {
                    let e = null == J ? void 0 : J.assetId;
                    return !!e && !!(0, k.i5)(e)
                }, [null == J ? void 0 : J.assetId]), eC = (0, r.useMemo)(() => {
                    if (!E) return !1;
                    let e = null == ee ? void 0 : ee.assetId;
                    return !!e && !!(0, k.i5)(e)
                }, [null == ee ? void 0 : ee.assetId, E]), eA = eb || eC, ex = (0, r.useMemo)(() => G ? eA ? Z ? d("showcase.apply_changes.save_to_brand_disabled.multi_image") : eb && z.length >= 5 ? d("showcase.apply_changes.save_to_brand_disabled.max_wallpapers") : eC && ed.length >= 5 ? d("showcase.apply_changes.save_to_brand_disabled.max_previews_wallpapers") : null : d("showcase.apply_changes.save_to_brand_disabled.no_images") : d("showcase.apply_changes.save_to_brand_disabled.no_access"), [G, eA, Z, eb, eC, z.length, ed.length, d]), ev = (0, r.useCallback)(() => {
                    (0, h.Od)().trackUserAction(B.cancelClicked()), D((0, v.zj)(v.fW.EDITOR))
                }, [D]), eP = (0, r.useCallback)(async () => {
                    if (H && W) {
                        D((0, v.F6)(!0));
                        try {
                            let e, {
                                layout: a,
                                deletedAssetIds: l
                            } = (0, A.Hh)(q, W);
                            el === c.hK.solidColor ? e = {
                                previewBackgroundColor: es
                            } : ee && (e = {
                                previewBackgroundAsset: ee
                            }), await D((0, v.Qv)(H, a, e)), await Promise.all(l.map(async e => {
                                try {
                                    await (0, w.AO)({
                                        assetId: e
                                    }), D((0, v.Vx)(e))
                                } catch (e) {
                                    f.A.track(e)
                                }
                            })), (0, h.Od)().trackUserAction(B.applyToTransferClicked({
                                hasCoverChanges: eg,
                                hasPreviewBackgroundChanges: ep
                            })), D((0, v.F6)(!1)), D((0, v.l1)()), setTimeout(() => {
                                D((0, v._L)(b.u6)), D((0, v.LG)())
                            }, b.Uk)
                        } catch (e) {
                            D((0, v.F6)(!1)), f.A.track(e)
                        }
                    }
                }, [H, W, q, ee, el, es, eg, ep, D]), ek = (0, r.useCallback)(async () => {
                    if (V) {
                        D((0, v.F6)(!0));
                        try {
                            let e = {},
                                a = null == J ? void 0 : J.assetId,
                                l = a && (0, k.i5)(a);
                            if (l) {
                                let a = await D(N.A.UI.uploadAsset(l, "wallpaper"));
                                a && (e.wallpapers = [...z, a].slice(0, 5))
                            }
                            if (E) {
                                let a = null == ee ? void 0 : ee.assetId,
                                    l = a && (0, k.i5)(a);
                                if (l) {
                                    let a = await D(N.A.UI.uploadAsset(l, "wallpaper", "previews"));
                                    a && (e.previews_wallpapers = [a])
                                }
                            }
                            Object.keys(e).length > 0 && await D(N.A.Account.editAccount(V, e, {
                                notification: !1
                            })), (0, h.Od)().trackUserAction(B.saveToBrandClicked({
                                hasCoverChanges: eg,
                                hasPreviewBackgroundChanges: ep
                            })), D((0, v.F6)(!1)), D((0, v.l1)()), setTimeout(() => {
                                D((0, v._L)(b.u6)), D((0, v.LG)())
                            }, b.Uk)
                        } catch (e) {
                            D((0, v.F6)(!1)), f.A.track(e)
                        }
                    }
                }, [J, ee, V, z, E, eg, ep, D]), ef = U || E && !F, ej = E ? "light" : "dark", eN = E ? "secondary" : "primary", eI = E ? "default" : "neutral", eL = (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(p.$, {
                        autoFocus: O,
                        disabled: U,
                        onClick: ev,
                        mode: ej,
                        variation: eI,
                        appearance: eN,
                        as: "button",
                        "data-testid": "cancel-button",
                        children: d("showcase.apply_changes.cancel")
                    }), ex ? (0, s.jsx)(_.m, {
                        content: ex,
                        position: "top",
                        mode: "dark",
                        className: M().tooltip,
                        children: (0, s.jsx)("span", {
                            children: (0, s.jsx)(p.$, {
                                disabled: !0,
                                mode: ej,
                                variation: eI,
                                appearance: eN,
                                as: "button",
                                "data-testid": "save-to-brand-button",
                                children: d("showcase.apply_changes.save_to_brand")
                            })
                        })
                    }) : (0, s.jsx)(p.$, {
                        disabled: ef,
                        onClick: ek,
                        mode: ej,
                        variation: eI,
                        appearance: eN,
                        as: "button",
                        "data-testid": "save-to-brand-button",
                        children: d("showcase.apply_changes.save_to_brand")
                    }), (0, s.jsx)(p.$, {
                        disabled: ef,
                        onClick: eP,
                        as: "button",
                        "data-testid": "use-for-transfer-button",
                        children: d("showcase.apply_changes.use_for_transfer")
                    })]
                }), eT = E && (eg || ep) && (0, s.jsxs)("div", {
                    className: M().comparisonContainer,
                    children: [(0, s.jsxs)("div", {
                        className: M().comparisonColumn,
                        children: [(0, s.jsxs)("span", {
                            className: M().comparisonLabel,
                            children: [(0, s.jsx)("span", {
                                className: i()(M().comparisonIcon, M().comparisonIconLive)
                            }), d("showcase.apply_changes.current_label")]
                        }), (0, s.jsxs)("div", {
                            className: M().previewsRow,
                            children: [eg && (0, s.jsx)("div", {
                                className: M().previewWrapper,
                                children: (0, s.jsx)(y._, {
                                    layout: em || R,
                                    isThumbnail: !0,
                                    ...K,
                                    className: M().coverViewer,
                                    children: (0, s.jsx)(m.z, {})
                                })
                            }), ep && (0, s.jsx)("div", {
                                className: M().previewWrapper,
                                children: (0, s.jsx)(C.C, {
                                    backgroundImageUrl: e_,
                                    backgroundColor: eh,
                                    className: M().previewsSkeleton,
                                    transferTitle: null == et ? void 0 : et.display_name,
                                    transferMessage: null == er || null == (l = er.bodyText) ? void 0 : l.text
                                })
                            })]
                        })]
                    }), (0, s.jsxs)("div", {
                        className: M().comparisonColumn,
                        children: [(0, s.jsxs)("span", {
                            className: M().comparisonLabel,
                            children: [(0, s.jsx)("span", {
                                className: M().comparisonIcon
                            }), d("showcase.apply_changes.new_label")]
                        }), (0, s.jsxs)("div", {
                            className: M().previewsRow,
                            children: [eg && (0, s.jsx)("div", {
                                className: M().previewWrapper,
                                children: (0, s.jsx)(y._, {
                                    layout: ec || R,
                                    isThumbnail: !0,
                                    ...K,
                                    className: M().coverViewer,
                                    selectedBackgroundAssets: Z ? $ : void 0,
                                    multiImageLayout: Z ? Q : void 0,
                                    children: (0, s.jsx)(m.z, {})
                                })
                            }), ep && (0, s.jsx)("div", {
                                className: M().previewWrapper,
                                children: (0, s.jsx)(C.C, {
                                    backgroundImageUrl: eu,
                                    backgroundColor: ey,
                                    className: M().previewsSkeleton,
                                    transferTitle: null == et ? void 0 : et.display_name,
                                    transferMessage: null == ec || null == (n = ec.bodyText) ? void 0 : n.text
                                })
                            })]
                        })]
                    })]
                });
                return (0, s.jsxs)("div", {
                    className: M().container,
                    children: [(0, s.jsxs)("div", {
                        className: M().content,
                        children: [(0, s.jsx)("h1", {
                            className: M().title,
                            children: d("showcase.apply_changes.title")
                        }), (0, s.jsxs)("p", {
                            className: M().description,
                            children: [d("showcase.apply_changes.description"), d("showcase.apply_changes.description_secondary")]
                        })]
                    }), eT, E ? (0, s.jsx)("div", {
                        className: M().inlineActions,
                        children: eL
                    }) : (0, s.jsx)(x.j, {
                        children: eL
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
//# sourceMappingURL=6192.5e834b1619fdd38c.js.map
