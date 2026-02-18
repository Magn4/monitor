"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1996], {
        20856: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            let r = (0, n(21462).createContext)(null)
        },
        22448: (e, t, n) => {
            n.d(t, {
                A: () => r
            });

            function r(e, t) {
                if (!e) throw Error("Invariant failed")
            }
        },
        25615: (e, t, n) => {
            n.d(t, {
                Bd: () => i,
                UT: () => m,
                ci: () => u,
                h1: () => E,
                jA: () => f,
                mZ: () => d,
                mw: () => l,
                qC: () => p,
                qf: () => s,
                vS: () => h,
                xL: () => g,
                zL: () => c
            });
            var r = n(22448),
                o = n(38252);
            let i = "undefined" != typeof window,
                a = i && "file:" === window.location.protocol;

            function u(e) {
                return null != e
            }

            function l(e) {
                return e instanceof ArrayBuffer
            }

            function s(e) {
                return (0, r.A)(i, "isBlob can only be used in a browser environment"), e instanceof Blob
            }

            function c(e) {
                return "string" == typeof e && /^data:/.test(e)
            }

            function f(e) {
                (0, r.A)(c(e), "Invalid data URI.");
                let [t = "", n = ""] = e.split(",");
                return -1 !== t.split(";").indexOf("base64") ? atob(n) : unescape(n)
            }

            function d() {
                return i && window.devicePixelRatio || 1
            }

            function p() {
                o(!a, "Loading PDF as base64 strings/URLs may not work on protocols other than HTTP/HTTPS. On Chromium based browsers, you can use --allow-file-access-from-files flag for debugging purposes.")
            }

            function g(e) {
                (null == e ? void 0 : e.cancel) && e.cancel()
            }

            function h(e, t) {
                return Object.defineProperty(e, "width", {
                    get() {
                        return this.view[2] * t
                    },
                    configurable: !0
                }), Object.defineProperty(e, "height", {
                    get() {
                        return this.view[3] * t
                    },
                    configurable: !0
                }), Object.defineProperty(e, "originalWidth", {
                    get() {
                        return this.view[2]
                    },
                    configurable: !0
                }), Object.defineProperty(e, "originalHeight", {
                    get() {
                        return this.view[3]
                    },
                    configurable: !0
                }), e
            }

            function m(e) {
                return "RenderingCancelledException" === e.name
            }

            function E(e) {
                return new Promise((t, n) => {
                    let r = new FileReader;
                    r.onload = () => {
                        if (!r.result) return n(Error("Error while reading a file."));
                        t(r.result)
                    }, r.onerror = e => {
                        if (!e.target) return n(Error("Error while reading a file."));
                        let {
                            error: t
                        } = e.target;
                        if (!t) return n(Error("Error while reading a file."));
                        switch (t.code) {
                            case t.NOT_FOUND_ERR:
                                return n(Error("Error while reading a file: File not found."));
                            case t.SECURITY_ERR:
                                return n(Error("Error while reading a file: Security error."));
                            case t.ABORT_ERR:
                                return n(Error("Error while reading a file: Aborted."));
                            default:
                                return n(Error("Error while reading a file."))
                        }
                    }, r.readAsArrayBuffer(e)
                })
            }
        },
        46440: (e, t, n) => {
            n.d(t, {
                A: () => C
            });
            var r = n(23798),
                o = n(21462),
                i = n(71623),
                a = n(56186),
                u = n(64634);

            function l() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = e.filter(Boolean);
                return n.length <= 1 ? n[0] || null : function(e) {
                    for (var t = 0; t < n.length; t++) {
                        var r = n[t];
                        "function" == typeof r ? r(e) : r && (r.current = e)
                    }
                }
            }
            var s = n(22448),
                c = n(38252),
                f = n(72859),
                d = n(44059),
                p = n(20856);

            function g() {
                return (0, o.useContext)(p.A)
            }
            let h = (0, o.createContext)(null);

            function m() {
                return (0, o.useContext)(h)
            }
            var E = n(82588),
                y = n(25615);

            function v() {
                let e = g(),
                    t = m();
                (0, s.A)(t, "Unable to find Page context.");
                let {
                    imageResourcesPath: n,
                    linkService: u,
                    onGetAnnotationsError: l,
                    onGetAnnotationsSuccess: f,
                    onRenderAnnotationLayerError: p,
                    onRenderAnnotationLayerSuccess: h,
                    page: v,
                    pdf: A,
                    renderForms: w,
                    rotate: S,
                    scale: b = 1
                } = {
                    ...e,
                    ...t
                };
                (0, s.A)(A, "Attempted to load page annotations, but no document was specified. Wrap <Page /> in a <Document /> or pass explicit `pdf` prop."), (0, s.A)(v, "Attempted to load page annotations, but no page was specified."), (0, s.A)(u, "Attempted to load page annotations, but no linkService was specified.");
                let [R, x] = (0, E.A)(), {
                    value: T,
                    error: L
                } = R, P = (0, o.useRef)(null);
                c(1 === Number.parseInt(window.getComputedStyle(document.body).getPropertyValue("--react-pdf-annotation-layer"), 10), "AnnotationLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-annotations"), (0, o.useEffect)(function() {
                    x({
                        type: "RESET"
                    })
                }, [x, v]), (0, o.useEffect)(function() {
                    if (!v) return;
                    let e = (0, a.A)(v.getAnnotations());
                    return e.promise.then(e => {
                        x({
                            type: "RESOLVE",
                            value: e
                        })
                    }).catch(e => {
                        x({
                            type: "REJECT",
                            error: e
                        })
                    }), () => {
                        (0, y.xL)(e)
                    }
                }, [x, v]), (0, o.useEffect)(() => {
                    if (void 0 !== T) {
                        if (!1 === T) return void(L && (c(!1, L.toString()), l && l(L)));
                        T && f && f(T)
                    }
                }, [T]);
                let C = (0, o.useMemo)(() => v.getViewport({
                    scale: b,
                    rotation: S
                }), [v, S, b]);
                return (0, o.useEffect)(function() {
                    if (!A || !v || !u || !T) return;
                    let {
                        current: e
                    } = P;
                    if (!e) return;
                    let t = C.clone({
                            dontFlip: !0
                        }),
                        r = {
                            annotations: T,
                            annotationStorage: A.annotationStorage,
                            div: e,
                            imageResourcesPath: n,
                            linkService: u,
                            page: v,
                            renderForms: w,
                            viewport: t
                        };
                    e.innerHTML = "";
                    try {
                        new d.dU({
                            accessibilityManager: null,
                            annotationCanvasMap: null,
                            annotationEditorUIManager: null,
                            div: e,
                            l10n: null,
                            page: v,
                            structTreeLayer: null,
                            viewport: t
                        }).render(r), h && h()
                    } catch (e) {
                        c(!1, `${e}`), p && p(e)
                    }
                    return () => {}
                }, [T, n, u, v, A, w, C]), (0, r.jsx)("div", {
                    className: (0, i.A)("react-pdf__Page__annotations", "annotationLayer"),
                    ref: P
                })
            }
            let A = {
                    Document: null,
                    DocumentFragment: null,
                    Part: "group",
                    Sect: "group",
                    Div: "group",
                    Aside: "note",
                    NonStruct: "none",
                    P: null,
                    H: "heading",
                    Title: null,
                    FENote: "note",
                    Sub: "group",
                    Lbl: null,
                    Span: null,
                    Em: null,
                    Strong: null,
                    Link: "link",
                    Annot: "note",
                    Form: "form",
                    Ruby: null,
                    RB: null,
                    RT: null,
                    RP: null,
                    Warichu: null,
                    WT: null,
                    WP: null,
                    L: "list",
                    LI: "listitem",
                    LBody: null,
                    Table: "table",
                    TR: "row",
                    TH: "columnheader",
                    TD: "cell",
                    THead: "columnheader",
                    TBody: null,
                    TFoot: null,
                    Caption: null,
                    Figure: "figure",
                    Formula: null,
                    Artifact: null
                },
                w = /^H(\d+)$/;

            function S(e) {
                return "children" in e
            }

            function b(e) {
                return !!S(e) && 1 === e.children.length && 0 in e.children && "id" in e.children[0]
            }

            function R({
                className: e,
                node: t
            }) {
                let n = (0, o.useMemo)(() => t ? {
                        ... function(e) {
                            let t = {};
                            if (S(e)) {
                                let {
                                    role: n
                                } = e, r = n.match(w);
                                if (r) t.role = "heading", t["aria-level"] = Number(r[1]);
                                else if (n in A) {
                                    let e = A[n];
                                    e && (t.role = e)
                                }
                            }
                            return t
                        }(t),
                        ... function e(t) {
                            let n = {};
                            if (S(t)) {
                                if (void 0 !== t.alt && (n["aria-label"] = t.alt), void 0 !== t.lang && (n.lang = t.lang), b(t)) {
                                    let [r] = t.children;
                                    if (r) {
                                        let t = e(r);
                                        return {
                                            ...n,
                                            ...t
                                        }
                                    }
                                }
                            } else "id" in t && (n["aria-owns"] = t.id);
                            return n
                        }(t)
                    } : null, [t]),
                    i = (0, o.useMemo)(() => !S(t) || b(t) ? null : t.children.map((e, t) => (0, r.jsx)(R, {
                        node: e
                    }, t)), [t]);
                return (0, r.jsx)("span", {
                    className: e,
                    ...n,
                    children: i
                })
            }

            function x() {
                let e = m();
                (0, s.A)(e, "Unable to find Page context.");
                let {
                    onGetStructTreeError: t,
                    onGetStructTreeSuccess: n
                } = e, [i, u] = (0, E.A)(), {
                    value: l,
                    error: f
                } = i, {
                    customTextRenderer: d,
                    page: p
                } = e;
                return ((0, o.useEffect)(function() {
                    u({
                        type: "RESET"
                    })
                }, [u, p]), (0, o.useEffect)(function() {
                    if (d || !p) return;
                    let e = (0, a.A)(p.getStructTree());
                    return e.promise.then(e => {
                        u({
                            type: "RESOLVE",
                            value: e
                        })
                    }).catch(e => {
                        u({
                            type: "REJECT",
                            error: e
                        })
                    }), () => (0, y.xL)(e)
                }, [d, p, u]), (0, o.useEffect)(() => {
                    if (void 0 !== l) {
                        if (!1 === l) return void(f && (c(!1, f.toString()), t && t(f)));
                        l && n && n(l)
                    }
                }, [l]), l) ? (0, r.jsx)(R, {
                    className: "react-pdf__Page__structTree structTree",
                    node: l
                }) : null
            }
            let T = d.ng;

            function L(e) {
                let t = m();
                (0, s.A)(t, "Unable to find Page context.");
                let {
                    _className: n,
                    canvasBackground: i,
                    devicePixelRatio: a = (0, y.mZ)(),
                    onRenderError: u,
                    onRenderSuccess: f,
                    page: d,
                    renderForms: p,
                    renderTextLayer: g,
                    rotate: h,
                    scale: E
                } = {
                    ...t,
                    ...e
                }, {
                    canvasRef: v
                } = e;
                (0, s.A)(d, "Attempted to render page canvas, but no page was specified.");
                let A = (0, o.useRef)(null);

                function w(e) {
                    !(0, y.UT)(e) && (c(!1, e.toString()), u && u(e))
                }
                let S = (0, o.useMemo)(() => d.getViewport({
                        scale: E * a,
                        rotation: h
                    }), [a, d, h, E]),
                    b = (0, o.useMemo)(() => d.getViewport({
                        scale: E,
                        rotation: h
                    }), [d, h, E]);
                (0, o.useEffect)(function() {
                    if (!d) return;
                    d.cleanup();
                    let {
                        current: e
                    } = A;
                    if (!e) return;
                    e.width = S.width, e.height = S.height, e.style.width = `${Math.floor(b.width)}px`, e.style.height = `${Math.floor(b.height)}px`, e.style.visibility = "hidden";
                    let t = {
                        annotationMode: p ? T.ENABLE_FORMS : T.ENABLE,
                        canvasContext: e.getContext("2d", {
                            alpha: !1
                        }),
                        viewport: S
                    };
                    i && (t.background = i);
                    let n = d.render(t);
                    return n.promise.then(() => {
                        e.style.visibility = "", d && f && f((0, y.vS)(d, E))
                    }).catch(w), () => (0, y.xL)(n)
                }, [i, d, p, S, b]);
                let R = (0, o.useCallback)(() => {
                    let {
                        current: e
                    } = A;
                    e && (e.width = 0, e.height = 0)
                }, []);
                return (0, o.useEffect)(() => R, [R]), (0, r.jsx)("canvas", {
                    className: `${n}__canvas`,
                    dir: "ltr",
                    ref: l(v, A),
                    style: {
                        display: "block",
                        userSelect: "none"
                    },
                    children: g ? (0, r.jsx)(x, {}) : null
                })
            }

            function P() {
                let e = m();
                (0, s.A)(e, "Unable to find Page context.");
                let {
                    customTextRenderer: t,
                    onGetTextError: n,
                    onGetTextSuccess: u,
                    onRenderTextLayerError: l,
                    onRenderTextLayerSuccess: f,
                    page: p,
                    pageIndex: g,
                    pageNumber: h,
                    rotate: v,
                    scale: A
                } = e;
                (0, s.A)(p, "Attempted to load page text content, but no page was specified.");
                let [w, S] = (0, E.A)(), {
                    value: b,
                    error: R
                } = w, x = (0, o.useRef)(null);
                c(1 === Number.parseInt(window.getComputedStyle(document.body).getPropertyValue("--react-pdf-text-layer"), 10), "TextLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-text-layer"), (0, o.useEffect)(function() {
                    S({
                        type: "RESET"
                    })
                }, [p, S]), (0, o.useEffect)(function() {
                    if (!p) return;
                    let e = (0, a.A)(p.getTextContent());
                    return e.promise.then(e => {
                        S({
                            type: "RESOLVE",
                            value: e
                        })
                    }).catch(e => {
                        S({
                            type: "REJECT",
                            error: e
                        })
                    }), () => (0, y.xL)(e)
                }, [p, S]), (0, o.useEffect)(() => {
                    if (void 0 !== b) {
                        if (!1 === b) return void(R && (c(!1, R.toString()), n && n(R)));
                        b && u && u(b)
                    }
                }, [b]);
                let T = (0, o.useCallback)(() => {
                        f && f()
                    }, [f]),
                    L = (0, o.useCallback)(e => {
                        c(!1, e.toString()), l && l(e)
                    }, [l]),
                    P = (0, o.useMemo)(() => p.getViewport({
                        scale: A,
                        rotation: v
                    }), [p, v, A]);
                return (0, o.useLayoutEffect)(function() {
                    if (!p || !b) return;
                    let {
                        current: e
                    } = x;
                    if (!e) return;
                    e.innerHTML = "";
                    let n = p.streamTextContent({
                            includeMarkedContent: !0
                        }),
                        r = new d.D6({
                            container: e,
                            textContentSource: n,
                            viewport: P
                        });
                    return r.render().then(() => {
                        let n = document.createElement("div");
                        n.className = "endOfContent", e.append(n);
                        let r = e.querySelectorAll('[role="presentation"]');
                        if (t) {
                            let e = 0;
                            b.items.forEach((n, o) => {
                                if (!("str" in n)) return;
                                let i = r[e];
                                i && (i.innerHTML = t({
                                    pageIndex: g,
                                    pageNumber: h,
                                    itemIndex: o,
                                    ...n
                                }), e += n.str && n.hasEOL ? 2 : 1)
                            })
                        }
                        T()
                    }).catch(L), () => (0, y.xL)(r)
                }, [t, L, T, p, g, h, b, P]), (0, r.jsx)("div", {
                    className: (0, i.A)("react-pdf__Page__textContent", "textLayer"),
                    onMouseUp: function() {
                        let e = x.current;
                        e && e.classList.remove("selecting")
                    },
                    onMouseDown: function() {
                        let e = x.current;
                        e && e.classList.add("selecting")
                    },
                    ref: x
                })
            }

            function C(e) {
                let {
                    _className: t = "react-pdf__Page",
                    _enableRegisterUnregisterPage: n = !0,
                    canvasBackground: d,
                    canvasRef: p,
                    children: m,
                    className: A,
                    customRenderer: w,
                    customTextRenderer: S,
                    devicePixelRatio: b,
                    error: R = "Failed to load the page.",
                    height: x,
                    inputRef: T,
                    loading: C = "Loading page…",
                    noData: D = "No page specified.",
                    onGetAnnotationsError: k,
                    onGetAnnotationsSuccess: j,
                    onGetStructTreeError: _,
                    onGetStructTreeSuccess: M,
                    onGetTextError: O,
                    onGetTextSuccess: V,
                    onLoadError: N,
                    onLoadSuccess: I,
                    onRenderAnnotationLayerError: F,
                    onRenderAnnotationLayerSuccess: U,
                    onRenderError: $,
                    onRenderSuccess: G,
                    onRenderTextLayerError: B,
                    onRenderTextLayerSuccess: H,
                    pageIndex: z,
                    pageNumber: W,
                    pdf: q,
                    registerPage: J,
                    renderAnnotationLayer: K = !0,
                    renderForms: Y = !1,
                    renderMode: Z = "canvas",
                    renderTextLayer: Q = !0,
                    rotate: X,
                    scale: ee = 1,
                    unregisterPage: et,
                    width: en,
                    ...er
                } = {
                    ...g(),
                    ...e
                }, [eo, ei] = (0, E.A)(), {
                    value: ea,
                    error: eu
                } = eo, el = (0, o.useRef)(null);
                (0, s.A)(q, "Attempted to load a page, but no document was specified. Wrap <Page /> in a <Document /> or pass explicit `pdf` prop.");
                let es = (0, y.ci)(W) ? W - 1 : null != z ? z : null,
                    ec = null != W ? W : (0, y.ci)(z) ? z + 1 : null,
                    ef = null != X ? X : ea ? ea.rotate : null,
                    ed = (0, o.useMemo)(() => {
                        if (!ea) return null;
                        let e = 1,
                            t = null != ee ? ee : 1;
                        if (en || x) {
                            let t = ea.getViewport({
                                scale: 1,
                                rotation: ef
                            });
                            en ? e = en / t.width : x && (e = x / t.height)
                        }
                        return t * e
                    }, [x, ea, ef, ee, en]);
                (0, o.useEffect)(function() {
                    return () => {
                        (0, y.ci)(es) && n && et && et(es)
                    }
                }, [n, q, es, et]), (0, o.useEffect)(function() {
                    ei({
                        type: "RESET"
                    })
                }, [ei, q, es]), (0, o.useEffect)(function() {
                    if (!q || !ec) return;
                    let e = (0, a.A)(q.getPage(ec));
                    return e.promise.then(e => {
                        ei({
                            type: "RESOLVE",
                            value: e
                        })
                    }).catch(e => {
                        ei({
                            type: "REJECT",
                            error: e
                        })
                    }), () => (0, y.xL)(e)
                }, [ei, q, ec]), (0, o.useEffect)(() => {
                    if (void 0 !== ea) {
                        if (!1 === ea) return void(eu && (c(!1, eu.toString()), N && N(eu)));
                        ! function() {
                            if (I) {
                                if (!ea || !ed) return;
                                I((0, y.vS)(ea, ed))
                            }
                            if (n && J) {
                                if (!(0, y.ci)(es) || !el.current) return;
                                J(es, el.current)
                            }
                        }()
                    }
                }, [ea, ed]);
                let ep = (0, o.useMemo)(() => (0, y.ci)(es) && ec && (0, y.ci)(ef) && (0, y.ci)(ed) ? {
                        _className: t,
                        canvasBackground: d,
                        customTextRenderer: S,
                        devicePixelRatio: b,
                        onGetAnnotationsError: k,
                        onGetAnnotationsSuccess: j,
                        onGetStructTreeError: _,
                        onGetStructTreeSuccess: M,
                        onGetTextError: O,
                        onGetTextSuccess: V,
                        onRenderAnnotationLayerError: F,
                        onRenderAnnotationLayerSuccess: U,
                        onRenderError: $,
                        onRenderSuccess: G,
                        onRenderTextLayerError: B,
                        onRenderTextLayerSuccess: H,
                        page: ea,
                        pageIndex: es,
                        pageNumber: ec,
                        renderForms: Y,
                        renderTextLayer: Q,
                        rotate: ef,
                        scale: ed
                    } : null, [t, d, S, b, k, j, _, M, O, V, F, U, $, G, B, H, ea, es, ec, Y, Q, ef, ed]),
                    eg = (0, o.useMemo)(() => (0, u.Ay)(er, () => ea ? ed ? (0, y.vS)(ea, ed) : void 0 : ea), [er, ea, ed]),
                    eh = `${es}@${ed}/${ef}`;
                return (0, r.jsx)("div", {
                    className: (0, i.A)(t, A),
                    "data-page-number": ec,
                    ref: l(T, el),
                    style: {
                        "--scale-round-x": "1px",
                        "--scale-round-y": "1px",
                        "--scale-factor": "1",
                        "--user-unit": `${ed}`,
                        "--total-scale-factor": "calc(var(--scale-factor) * var(--user-unit))",
                        backgroundColor: d || "white",
                        position: "relative",
                        minWidth: "min-content",
                        minHeight: "min-content"
                    },
                    ...eg,
                    children: function() {
                        if (!ec) return (0, r.jsx)(f.A, {
                            type: "no-data",
                            children: "function" == typeof D ? D() : D
                        });
                        if (null === q || null == ea) return (0, r.jsx)(f.A, {
                            type: "loading",
                            children: "function" == typeof C ? C() : C
                        });
                        if (!1 === q || !1 === ea) return (0, r.jsx)(f.A, {
                            type: "error",
                            children: "function" == typeof R ? R() : R
                        });
                        if (!(null == ep ? void 0 : ep.page)) throw Error("page is undefined");
                        let e = "function" == typeof m ? m(ep) : m;
                        return (0, r.jsxs)(h.Provider, {
                            value: ep,
                            children: [function() {
                                switch (Z) {
                                    case "custom":
                                        return (0, s.A)(w, 'renderMode was set to "custom", but no customRenderer was passed.'), (0, r.jsx)(w, {}, `${eh}_custom`);
                                    case "none":
                                        return null;
                                    default:
                                        return (0, r.jsx)(L, {
                                            canvasRef: p
                                        }, `${eh}_canvas`)
                                }
                            }(), Q ? (0, r.jsx)(P, {}, `${eh}_text`) : null, K ? (0, r.jsx)(v, {}, `${eh}_annotations`) : null, e]
                        })
                    }()
                })
            }
        },
        56186: (e, t, n) => {
            n.d(t, {
                A: () => r
            });

            function r(e) {
                let t = !1;
                return {
                    promise: new Promise((n, r) => {
                        e.then(e => !t && n(e)).catch(e => !t && r(e))
                    }),
                    cancel() {
                        t = !0
                    }
                }
            }
        },
        64634: (e, t, n) => {
            n.d(t, {
                Ay: () => o
            });
            let r = ["onCopy", "onCut", "onPaste", "onCompositionEnd", "onCompositionStart", "onCompositionUpdate", "onFocus", "onBlur", "onInput", "onInvalid", "onReset", "onSubmit", "onLoad", "onError", "onKeyDown", "onKeyPress", "onKeyUp", "onAbort", "onCanPlay", "onCanPlayThrough", "onDurationChange", "onEmptied", "onEncrypted", "onEnded", "onError", "onLoadedData", "onLoadedMetadata", "onLoadStart", "onPause", "onPlay", "onPlaying", "onProgress", "onRateChange", "onSeeked", "onSeeking", "onStalled", "onSuspend", "onTimeUpdate", "onVolumeChange", "onWaiting", "onClick", "onContextMenu", "onDoubleClick", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onDrag", "onDragEnd", "onDragEnter", "onDragExit", "onDragLeave", "onDragOver", "onDragStart", "onDrop", "onSelect", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onGotPointerCapture", "onLostPointerCapture", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut", "onScroll", "onWheel", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionEnd", "onChange", "onToggle"];

            function o(e, t) {
                let n = {};
                for (let o of r) {
                    let r = e[o];
                    r && (t ? n[o] = e => r(e, t(o)) : n[o] = r)
                }
                return n
            }
        },
        72859: (e, t, n) => {
            n.d(t, {
                A: () => o
            });
            var r = n(23798);

            function o({
                children: e,
                type: t
            }) {
                return (0, r.jsx)("div", {
                    className: `react-pdf__message react-pdf__message--${t}`,
                    children: e
                })
            }
        },
        82588: (e, t, n) => {
            n.d(t, {
                A: () => i
            });
            var r = n(21462);

            function o(e, t) {
                switch (t.type) {
                    case "RESOLVE":
                        return {
                            value: t.value, error: void 0
                        };
                    case "REJECT":
                        return {
                            value: !1, error: t.error
                        };
                    case "RESET":
                        return {
                            value: void 0, error: void 0
                        };
                    default:
                        return e
                }
            }

            function i() {
                return (0, r.useReducer)(o, {
                    value: void 0,
                    error: void 0
                })
            }
        },
        84645: (e, t, n) => {
            n.d(t, {
                A: () => b
            });
            var r = n(23798),
                o = n(21462),
                i = n(71623),
                a = Object.prototype.hasOwnProperty;

            function u(e, t, n) {
                for (n of e.keys())
                    if (l(n, t)) return n
            }

            function l(e, t) {
                var n, r, o;
                if (e === t) return !0;
                if (e && t && (n = e.constructor) === t.constructor) {
                    if (n === Date) return e.getTime() === t.getTime();
                    if (n === RegExp) return e.toString() === t.toString();
                    if (n === Array) {
                        if ((r = e.length) === t.length)
                            for (; r-- && l(e[r], t[r]););
                        return -1 === r
                    }
                    if (n === Set) {
                        if (e.size !== t.size) return !1;
                        for (r of e)
                            if ((o = r) && "object" == typeof o && !(o = u(t, o)) || !t.has(o)) return !1;
                        return !0
                    }
                    if (n === Map) {
                        if (e.size !== t.size) return !1;
                        for (r of e)
                            if ((o = r[0]) && "object" == typeof o && !(o = u(t, o)) || !l(r[1], t.get(o))) return !1;
                        return !0
                    }
                    if (n === ArrayBuffer) e = new Uint8Array(e), t = new Uint8Array(t);
                    else if (n === DataView) {
                        if ((r = e.byteLength) === t.byteLength)
                            for (; r-- && e.getInt8(r) === t.getInt8(r););
                        return -1 === r
                    }
                    if (ArrayBuffer.isView(e)) {
                        if ((r = e.byteLength) === t.byteLength)
                            for (; r-- && e[r] === t[r];);
                        return -1 === r
                    }
                    if (!n || "object" == typeof e) {
                        for (n in r = 0, e)
                            if (a.call(e, n) && ++r && !a.call(t, n) || !(n in t) || !l(e[n], t[n])) return !1;
                        return Object.keys(t).length === r
                    }
                }
                return e != e && t != t
            }
            var s = n(56186),
                c = n(64634),
                f = n(44059),
                d = n(22448),
                p = n(38252),
                g = n(20856);
            class h {
                constructor() {
                    this.externalLinkEnabled = !0, this.externalLinkRel = void 0, this.externalLinkTarget = void 0, this.isInPresentationMode = !1, this.pdfDocument = void 0, this.pdfViewer = void 0
                }
                setDocument(e) {
                    this.pdfDocument = e
                }
                setViewer(e) {
                    this.pdfViewer = e
                }
                setExternalLinkRel(e) {
                    this.externalLinkRel = e
                }
                setExternalLinkTarget(e) {
                    this.externalLinkTarget = e
                }
                setHistory() {}
                get pagesCount() {
                    return this.pdfDocument ? this.pdfDocument.numPages : 0
                }
                get page() {
                    return (0, d.A)(this.pdfViewer, "PDF viewer is not initialized."), this.pdfViewer.currentPageNumber || 0
                }
                set page(e) {
                    (0, d.A)(this.pdfViewer, "PDF viewer is not initialized."), this.pdfViewer.currentPageNumber = e
                }
                get rotation() {
                    return 0
                }
                set rotation(e) {}
                goToDestination(e) {
                    return new Promise(t => {
                        (0, d.A)(this.pdfDocument, "PDF document not loaded."), (0, d.A)(e, "Destination is not specified."), "string" == typeof e ? this.pdfDocument.getDestination(e).then(t) : Array.isArray(e) ? t(e) : e.then(t)
                    }).then(e => {
                        (0, d.A)(Array.isArray(e), `"${e}" is not a valid destination array.`);
                        let t = e[0];
                        new Promise(e => {
                            (0, d.A)(this.pdfDocument, "PDF document not loaded."), t instanceof Object ? this.pdfDocument.getPageIndex(t).then(t => {
                                e(t)
                            }).catch(() => {
                                (0, d.A)(!1, `"${t}" is not a valid page reference.`)
                            }) : "number" == typeof t ? e(t) : (0, d.A)(!1, `"${t}" is not a valid destination reference.`)
                        }).then(t => {
                            let n = t + 1;
                            (0, d.A)(this.pdfViewer, "PDF viewer is not initialized."), (0, d.A)(n >= 1 && n <= this.pagesCount, `"${n}" is not a valid page number.`), this.pdfViewer.scrollPageIntoView({
                                dest: e,
                                pageIndex: t,
                                pageNumber: n
                            })
                        })
                    })
                }
                navigateTo(e) {
                    this.goToDestination(e)
                }
                goToPage(e) {
                    (0, d.A)(this.pdfViewer, "PDF viewer is not initialized."), (0, d.A)(e >= 1 && e <= this.pagesCount, `"${e}" is not a valid page number.`), this.pdfViewer.scrollPageIntoView({
                        pageIndex: e - 1,
                        pageNumber: e
                    })
                }
                addLinkAttributes(e, t, n) {
                    e.href = t, e.rel = this.externalLinkRel || "noopener noreferrer nofollow", e.target = n ? "_blank" : this.externalLinkTarget || ""
                }
                getDestinationHash() {
                    return "#"
                }
                getAnchorUrl() {
                    return "#"
                }
                setHash() {}
                executeNamedAction() {}
                cachePageRef() {}
                isPageVisible() {
                    return !0
                }
                isPageCached() {
                    return !0
                }
                executeSetOCGState() {}
            }
            var m = n(72859);
            let E = {
                NEED_PASSWORD: 1,
                INCORRECT_PASSWORD: 2
            };
            var y = n(82588),
                v = n(25615);
            let {
                Tm: A
            } = f, w = (e, t) => {
                switch (t) {
                    case E.NEED_PASSWORD:
                        e(prompt("Enter the password to open this PDF file."));
                        break;
                    case E.INCORRECT_PASSWORD:
                        e(prompt("Invalid password. Please try again."))
                }
            };

            function S(e) {
                return "object" == typeof e && null !== e && ("data" in e || "range" in e || "url" in e)
            }
            let b = (0, o.forwardRef)(function({
                children: e,
                className: t,
                error: n = "Failed to load PDF file.",
                externalLinkRel: a,
                externalLinkTarget: u,
                file: E,
                inputRef: b,
                imageResourcesPath: R,
                loading: x = "Loading PDF…",
                noData: T = "No PDF file specified.",
                onItemClick: L,
                onLoadError: P,
                onLoadProgress: C,
                onLoadSuccess: D,
                onPassword: k = w,
                onSourceError: j,
                onSourceSuccess: _,
                options: M,
                renderMode: O,
                rotate: V,
                scale: N,
                ...I
            }, F) {
                let [U, $] = (0, y.A)(), {
                    value: G,
                    error: B
                } = U, [H, z] = (0, y.A)(), {
                    value: W,
                    error: q
                } = H, J = (0, o.useRef)(new h), K = (0, o.useRef)([]), Y = (0, o.useRef)(void 0), Z = (0, o.useRef)(void 0);
                E && E !== Y.current && S(E) && (p(!l(E, Y.current), 'File prop passed to <Document /> changed, but it\'s equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "file" prop.'), Y.current = E), M && M !== Z.current && (p(!l(M, Z.current), 'Options prop passed to <Document /> changed, but it\'s equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "options" prop.'), Z.current = M);
                let Q = (0, o.useRef)({
                    scrollPageIntoView: e => {
                        let {
                            dest: t,
                            pageNumber: n,
                            pageIndex: r = n - 1
                        } = e;
                        if (L) return void L({
                            dest: t,
                            pageIndex: r,
                            pageNumber: n
                        });
                        let o = K.current[r];
                        if (o) return void o.scrollIntoView();
                        p(!1, `An internal link leading to page ${n} was clicked, but neither <Document> was provided with onItemClick nor it was able to find the page within itself. Either provide onItemClick to <Document> and handle navigating by yourself or ensure that all pages are rendered within <Document>.`)
                    }
                });
                (0, o.useImperativeHandle)(F, () => ({
                    linkService: J,
                    pages: K,
                    viewer: Q
                }), []), (0, o.useEffect)(function() {
                    $({
                        type: "RESET"
                    })
                }, [E, $]);
                let X = (0, o.useCallback)(async () => {
                    if (!E) return null;
                    if ("string" == typeof E) return (0, v.zL)(E) ? {
                        data: (0, v.jA)(E)
                    } : ((0, v.qC)(), {
                        url: E
                    });
                    if (E instanceof A) return {
                        range: E
                    };
                    if ((0, v.mw)(E)) return {
                        data: E
                    };
                    if (v.Bd && (0, v.qf)(E)) return {
                        data: await (0, v.h1)(E)
                    };
                    if ((0, d.A)("object" == typeof E, "Invalid parameter in file, need either Uint8Array, string or a parameter object"), (0, d.A)(S(E), "Invalid parameter object: need either .data, .range or .url"), "url" in E && "string" == typeof E.url) {
                        if ((0, v.zL)(E.url)) {
                            let {
                                url: e,
                                ...t
                            } = E;
                            return {
                                data: (0, v.jA)(e),
                                ...t
                            }
                        }(0, v.qC)()
                    }
                    return E
                }, [E]);
                (0, o.useEffect)(() => {
                    let e = (0, s.A)(X());
                    return e.promise.then(e => {
                        $({
                            type: "RESOLVE",
                            value: e
                        })
                    }).catch(e => {
                        $({
                            type: "REJECT",
                            error: e
                        })
                    }), () => {
                        (0, v.xL)(e)
                    }
                }, [X, $]), (0, o.useEffect)(() => {
                    if (void 0 !== G) {
                        if (!1 === G) return void(B && (p(!1, B.toString()), j && j(B)));
                        _ && _()
                    }
                }, [G]), (0, o.useEffect)(function() {
                    z({
                        type: "RESET"
                    })
                }, [z, G]), (0, o.useEffect)(function() {
                    if (!G) return;
                    let e = M ? {
                            ...G,
                            ...M
                        } : G,
                        t = f.YE(e);
                    C && (t.onProgress = C), k && (t.onPassword = k);
                    let n = t.promise.then(e => {
                        z({
                            type: "RESOLVE",
                            value: e
                        })
                    }).catch(e => {
                        t.destroyed || z({
                            type: "REJECT",
                            error: e
                        })
                    });
                    return () => {
                        n.finally(() => t.destroy())
                    }
                }, [M, z, G]), (0, o.useEffect)(() => {
                    if (void 0 !== W) {
                        if (!1 === W) return void(q && (p(!1, q.toString()), P && P(q)));
                        W && (D && D(W), K.current = Array(W.numPages), J.current.setDocument(W))
                    }
                }, [W]), (0, o.useEffect)(function() {
                    J.current.setViewer(Q.current), J.current.setExternalLinkRel(a), J.current.setExternalLinkTarget(u)
                }, [a, u]);
                let ee = (0, o.useCallback)((e, t) => {
                        K.current[e] = t
                    }, []),
                    et = (0, o.useCallback)(e => {
                        delete K.current[e]
                    }, []),
                    en = (0, o.useMemo)(() => ({
                        imageResourcesPath: R,
                        linkService: J.current,
                        onItemClick: L,
                        pdf: W,
                        registerPage: ee,
                        renderMode: O,
                        rotate: V,
                        scale: N,
                        unregisterPage: et
                    }), [R, L, W, ee, O, V, N, et]),
                    er = (0, o.useMemo)(() => (0, c.Ay)(I, () => W), [I, W]);
                return (0, r.jsx)("div", {
                    className: (0, i.A)("react-pdf__Document", t),
                    ref: b,
                    ...er,
                    children: function() {
                        if (!E) return (0, r.jsx)(m.A, {
                            type: "no-data",
                            children: "function" == typeof T ? T() : T
                        });
                        if (null == W) return (0, r.jsx)(m.A, {
                            type: "loading",
                            children: "function" == typeof x ? x() : x
                        });
                        if (!1 === W) return (0, r.jsx)(m.A, {
                            type: "error",
                            children: "function" == typeof n ? n() : n
                        });
                        if (!(null == en ? void 0 : en.pdf)) throw Error("pdf is undefined");
                        let t = "function" == typeof e ? e(en) : e;
                        return (0, r.jsx)(g.A.Provider, {
                            value: en,
                            children: t
                        })
                    }()
                })
            })
        }
    }
]);
//# sourceMappingURL=1996.a1797ab6f0991461.js.map