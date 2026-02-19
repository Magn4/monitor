import {
    r as t
} from "./index-75d73738.js";

function e(t) {
    return t.split("-")[1]
}

function n(t) {
    return "y" === t ? "height" : "width"
}

function o(t) {
    return t.split("-")[0]
}

function i(t) {
    return ["top", "bottom"].includes(o(t)) ? "x" : "y"
}

function r(t, r, l) {
    let {
        reference: s,
        floating: c
    } = t;
    const a = s.x + s.width / 2 - c.width / 2,
        f = s.y + s.height / 2 - c.height / 2,
        u = i(r),
        d = n(u),
        m = s[d] / 2 - c[d] / 2,
        h = "x" === u;
    let p;
    switch (o(r)) {
        case "top":
            p = {
                x: a,
                y: s.y - c.height
            };
            break;
        case "bottom":
            p = {
                x: a,
                y: s.y + s.height
            };
            break;
        case "right":
            p = {
                x: s.x + s.width,
                y: f
            };
            break;
        case "left":
            p = {
                x: s.x - c.width,
                y: f
            };
            break;
        default:
            p = {
                x: s.x,
                y: s.y
            }
    }
    switch (e(r)) {
        case "start":
            p[u] -= m * (l && h ? -1 : 1);
            break;
        case "end":
            p[u] += m * (l && h ? -1 : 1)
    }
    return p
}

function l(t, e) {
    return "function" == typeof t ? t(e) : t
}

function s(t) {
    return "number" != typeof t ? function(t) {
        return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...t
        }
    }(t) : {
        top: t,
        right: t,
        bottom: t,
        left: t
    }
}

function c(t) {
    return {
        ...t,
        top: t.y,
        left: t.x,
        right: t.x + t.width,
        bottom: t.y + t.height
    }
}
async function a(t, e) {
    var n;
    void 0 === e && (e = {});
    const {
        x: o,
        y: i,
        platform: r,
        rects: a,
        elements: f,
        strategy: u
    } = t, {
        boundary: d = "clippingAncestors",
        rootBoundary: m = "viewport",
        elementContext: h = "floating",
        altBoundary: p = !1,
        padding: g = 0
    } = l(e, t), y = s(g), x = f[p ? "floating" === h ? "reference" : "floating" : h], w = c(await r.getClippingRect({
        element: null == (n = await (null == r.isElement ? void 0 : r.isElement(x))) || n ? x : x.contextElement || await (null == r.getDocumentElement ? void 0 : r.getDocumentElement(f.floating)),
        boundary: d,
        rootBoundary: m,
        strategy: u
    })), v = "floating" === h ? {
        ...a.floating,
        x: o,
        y: i
    } : a.reference, b = await (null == r.getOffsetParent ? void 0 : r.getOffsetParent(f.floating)), R = await (null == r.isElement ? void 0 : r.isElement(b)) && await (null == r.getScale ? void 0 : r.getScale(b)) || {
        x: 1,
        y: 1
    }, L = c(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
        rect: v,
        offsetParent: b,
        strategy: u
    }) : v);
    return {
        top: (w.top - L.top + y.top) / R.y,
        bottom: (L.bottom - w.bottom + y.bottom) / R.y,
        left: (w.left - L.left + y.left) / R.x,
        right: (L.right - w.right + y.right) / R.x
    }
}
const f = Math.min,
    u = Math.max;

function d(t, e, n) {
    return u(t, f(e, n))
}
const m = t => ({
        name: "arrow",
        options: t,
        async fn(o) {
            const {
                x: r,
                y: c,
                placement: a,
                rects: u,
                platform: m,
                elements: h
            } = o, {
                element: p,
                padding: g = 0
            } = l(t, o) || {};
            if (null == p) return {};
            const y = s(g),
                x = {
                    x: r,
                    y: c
                },
                w = i(a),
                v = n(w),
                b = await m.getDimensions(p),
                R = "y" === w,
                L = R ? "top" : "left",
                T = R ? "bottom" : "right",
                A = R ? "clientHeight" : "clientWidth",
                E = u.reference[v] + u.reference[w] - x[w] - u.floating[v],
                D = x[w] - u.reference[w],
                O = await (null == m.getOffsetParent ? void 0 : m.getOffsetParent(p));
            let S = O ? O[A] : 0;
            S && await (null == m.isElement ? void 0 : m.isElement(O)) || (S = h.floating[A] || u.floating[v]);
            const C = E / 2 - D / 2,
                H = S / 2 - b[v] / 2 - 1,
                P = f(y[L], H),
                F = f(y[T], H),
                k = P,
                W = S - b[v] - F,
                B = S / 2 - b[v] / 2 + C,
                M = d(k, B, W),
                V = null != e(a) && B != M && u.reference[v] / 2 - (B < k ? P : F) - b[v] / 2 < 0 ? B < k ? k - B : W - B : 0;
            return {
                [w]: x[w] - V,
                data: {
                    [w]: M,
                    centerOffset: B - M + V
                }
            }
        }
    }),
    h = ["top", "right", "bottom", "left"];
h.reduce(((t, e) => t.concat(e, e + "-start", e + "-end")), []);
const p = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
};

function g(t) {
    return t.replace(/left|right|bottom|top/g, (t => p[t]))
}

function y(t, o, r) {
    void 0 === r && (r = !1);
    const l = e(t),
        s = i(t),
        c = n(s);
    let a = "x" === s ? l === (r ? "end" : "start") ? "right" : "left" : "start" === l ? "bottom" : "top";
    return o.reference[c] > o.floating[c] && (a = g(a)), {
        main: a,
        cross: g(a)
    }
}
const x = {
    start: "end",
    end: "start"
};

function w(t) {
    return t.replace(/start|end/g, (t => x[t]))
}
const v = function(t) {
    return void 0 === t && (t = {}), {
        name: "flip",
        options: t,
        async fn(n) {
            var i;
            const {
                placement: r,
                middlewareData: s,
                rects: c,
                initialPlacement: f,
                platform: u,
                elements: d
            } = n, {
                mainAxis: m = !0,
                crossAxis: h = !0,
                fallbackPlacements: p,
                fallbackStrategy: x = "bestFit",
                fallbackAxisSideDirection: v = "none",
                flipAlignment: b = !0,
                ...R
            } = l(t, n), L = o(r), T = o(f) === f, A = await (null == u.isRTL ? void 0 : u.isRTL(d.floating)), E = p || (T || !b ? [g(f)] : function(t) {
                const e = g(t);
                return [w(t), e, w(e)]
            }(f));
            p || "none" === v || E.push(... function(t, n, i, r) {
                const l = e(t);
                let s = function(t, e, n) {
                    const o = ["left", "right"],
                        i = ["right", "left"],
                        r = ["top", "bottom"],
                        l = ["bottom", "top"];
                    switch (t) {
                        case "top":
                        case "bottom":
                            return n ? e ? i : o : e ? o : i;
                        case "left":
                        case "right":
                            return e ? r : l;
                        default:
                            return []
                    }
                }(o(t), "start" === i, r);
                return l && (s = s.map((t => t + "-" + l)), n && (s = s.concat(s.map(w)))), s
            }(f, b, v, A));
            const D = [f, ...E],
                O = await a(n, R),
                S = [];
            let C = (null == (i = s.flip) ? void 0 : i.overflows) || [];
            if (m && S.push(O[L]), h) {
                const {
                    main: t,
                    cross: e
                } = y(r, c, A);
                S.push(O[t], O[e])
            }
            if (C = [...C, {
                    placement: r,
                    overflows: S
                }], !S.every((t => t <= 0))) {
                var H, P;
                const t = ((null == (H = s.flip) ? void 0 : H.index) || 0) + 1,
                    e = D[t];
                if (e) return {
                    data: {
                        index: t,
                        overflows: C
                    },
                    reset: {
                        placement: e
                    }
                };
                let n = null == (P = C.filter((t => t.overflows[0] <= 0)).sort(((t, e) => t.overflows[1] - e.overflows[1]))[0]) ? void 0 : P.placement;
                if (!n) switch (x) {
                    case "bestFit": {
                        var F;
                        const t = null == (F = C.map((t => [t.placement, t.overflows.filter((t => t > 0)).reduce(((t, e) => t + e), 0)])).sort(((t, e) => t[1] - e[1]))[0]) ? void 0 : F[0];
                        t && (n = t);
                        break
                    }
                    case "initialPlacement":
                        n = f
                }
                if (r !== n) return {
                    reset: {
                        placement: n
                    }
                }
            }
            return {}
        }
    }
};

function b(t, e) {
    return {
        top: t.top - e.height,
        right: t.right - e.width,
        bottom: t.bottom - e.height,
        left: t.left - e.width
    }
}

function R(t) {
    return h.some((e => t[e] >= 0))
}
const L = function(t) {
        return void 0 === t && (t = {}), {
            name: "hide",
            options: t,
            async fn(e) {
                const {
                    rects: n
                } = e, {
                    strategy: o = "referenceHidden",
                    ...i
                } = l(t, e);
                switch (o) {
                    case "referenceHidden": {
                        const t = b(await a(e, {
                            ...i,
                            elementContext: "reference"
                        }), n.reference);
                        return {
                            data: {
                                referenceHiddenOffsets: t,
                                referenceHidden: R(t)
                            }
                        }
                    }
                    case "escaped": {
                        const t = b(await a(e, {
                            ...i,
                            altBoundary: !0
                        }), n.floating);
                        return {
                            data: {
                                escapedOffsets: t,
                                escaped: R(t)
                            }
                        }
                    }
                    default:
                        return {}
                }
            }
        }
    },
    T = function(t) {
        return void 0 === t && (t = 0), {
            name: "offset",
            options: t,
            async fn(n) {
                const {
                    x: r,
                    y: s
                } = n, c = await async function(t, n) {
                    const {
                        placement: r,
                        platform: s,
                        elements: c
                    } = t, a = await (null == s.isRTL ? void 0 : s.isRTL(c.floating)), f = o(r), u = e(r), d = "x" === i(r), m = ["left", "top"].includes(f) ? -1 : 1, h = a && d ? -1 : 1, p = l(n, t);
                    let {
                        mainAxis: g,
                        crossAxis: y,
                        alignmentAxis: x
                    } = "number" == typeof p ? {
                        mainAxis: p,
                        crossAxis: 0,
                        alignmentAxis: null
                    } : {
                        mainAxis: 0,
                        crossAxis: 0,
                        alignmentAxis: null,
                        ...p
                    };
                    return u && "number" == typeof x && (y = "end" === u ? -1 * x : x), d ? {
                        x: y * h,
                        y: g * m
                    } : {
                        x: g * m,
                        y: y * h
                    }
                }(n, t);
                return {
                    x: r + c.x,
                    y: s + c.y,
                    data: c
                }
            }
        }
    };

function A(t) {
    return "x" === t ? "y" : "x"
}
const E = function(t) {
        return void 0 === t && (t = {}), {
            name: "shift",
            options: t,
            async fn(e) {
                const {
                    x: n,
                    y: r,
                    placement: s
                } = e, {
                    mainAxis: c = !0,
                    crossAxis: f = !1,
                    limiter: u = {
                        fn: t => {
                            let {
                                x: e,
                                y: n
                            } = t;
                            return {
                                x: e,
                                y: n
                            }
                        }
                    },
                    ...m
                } = l(t, e), h = {
                    x: n,
                    y: r
                }, p = await a(e, m), g = i(o(s)), y = A(g);
                let x = h[g],
                    w = h[y];
                if (c) {
                    const t = "y" === g ? "bottom" : "right";
                    x = d(x + p["y" === g ? "top" : "left"], x, x - p[t])
                }
                if (f) {
                    const t = "y" === y ? "bottom" : "right";
                    w = d(w + p["y" === y ? "top" : "left"], w, w - p[t])
                }
                const v = u.fn({
                    ...e,
                    [g]: x,
                    [y]: w
                });
                return {
                    ...v,
                    data: {
                        x: v.x - n,
                        y: v.y - r
                    }
                }
            }
        }
    },
    D = function(t) {
        return void 0 === t && (t = {}), {
            options: t,
            fn(e) {
                const {
                    x: n,
                    y: r,
                    placement: s,
                    rects: c,
                    middlewareData: a
                } = e, {
                    offset: f = 0,
                    mainAxis: u = !0,
                    crossAxis: d = !0
                } = l(t, e), m = {
                    x: n,
                    y: r
                }, h = i(s), p = A(h);
                let g = m[h],
                    y = m[p];
                const x = l(f, e),
                    w = "number" == typeof x ? {
                        mainAxis: x,
                        crossAxis: 0
                    } : {
                        mainAxis: 0,
                        crossAxis: 0,
                        ...x
                    };
                if (u) {
                    const t = "y" === h ? "height" : "width",
                        e = c.reference[h] - c.floating[t] + w.mainAxis,
                        n = c.reference[h] + c.reference[t] - w.mainAxis;
                    g < e ? g = e : g > n && (g = n)
                }
                if (d) {
                    var v, b;
                    const t = "y" === h ? "width" : "height",
                        e = ["top", "left"].includes(o(s)),
                        n = c.reference[p] - c.floating[t] + (e && (null == (v = a.offset) ? void 0 : v[p]) || 0) + (e ? 0 : w.crossAxis),
                        i = c.reference[p] + c.reference[t] + (e ? 0 : (null == (b = a.offset) ? void 0 : b[p]) || 0) - (e ? w.crossAxis : 0);
                    y < n ? y = n : y > i && (y = i)
                }
                return {
                    [h]: g,
                    [p]: y
                }
            }
        }
    },
    O = function(t) {
        return void 0 === t && (t = {}), {
            name: "size",
            options: t,
            async fn(n) {
                const {
                    placement: r,
                    rects: s,
                    platform: c,
                    elements: d
                } = n, {
                    apply: m = (() => {}),
                    ...h
                } = l(t, n), p = await a(n, h), g = o(r), y = e(r), x = "x" === i(r), {
                    width: w,
                    height: v
                } = s.floating;
                let b, R;
                "top" === g || "bottom" === g ? (b = g, R = y === (await (null == c.isRTL ? void 0 : c.isRTL(d.floating)) ? "start" : "end") ? "left" : "right") : (R = g, b = "end" === y ? "top" : "bottom");
                const L = v - p[b],
                    T = w - p[R],
                    A = !n.middlewareData.shift;
                let E = L,
                    D = T;
                if (x) {
                    const t = w - p.left - p.right;
                    D = y || A ? f(T, t) : t
                } else {
                    const t = v - p.top - p.bottom;
                    E = y || A ? f(L, t) : t
                }
                if (A && !y) {
                    const t = u(p.left, 0),
                        e = u(p.right, 0),
                        n = u(p.top, 0),
                        o = u(p.bottom, 0);
                    x ? D = w - 2 * (0 !== t || 0 !== e ? t + e : u(p.left, p.right)) : E = v - 2 * (0 !== n || 0 !== o ? n + o : u(p.top, p.bottom))
                }
                await m({
                    ...n,
                    availableWidth: D,
                    availableHeight: E
                });
                const O = await c.getDimensions(d.floating);
                return w !== O.width || v !== O.height ? {
                    reset: {
                        rects: !0
                    }
                } : {}
            }
        }
    };

function S(t) {
    var e;
    return (null == t || null == (e = t.ownerDocument) ? void 0 : e.defaultView) || window
}

function C(t) {
    return S(t).getComputedStyle(t)
}

function H(t) {
    return t instanceof S(t).Node
}

function P(t) {
    return H(t) ? (t.nodeName || "").toLowerCase() : "#document"
}

function F(t) {
    return t instanceof HTMLElement || t instanceof S(t).HTMLElement
}

function k(t) {
    return "undefined" != typeof ShadowRoot && (t instanceof S(t).ShadowRoot || t instanceof ShadowRoot)
}

function W(t) {
    const {
        overflow: e,
        overflowX: n,
        overflowY: o,
        display: i
    } = C(t);
    return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i)
}

function B(t) {
    return ["table", "td", "th"].includes(P(t))
}

function M(t) {
    const e = V(),
        n = C(t);
    return "none" !== n.transform || "none" !== n.perspective || !!n.containerType && "normal" !== n.containerType || !e && !!n.backdropFilter && "none" !== n.backdropFilter || !e && !!n.filter && "none" !== n.filter || ["transform", "perspective", "filter"].some((t => (n.willChange || "").includes(t))) || ["paint", "layout", "strict", "content"].some((t => (n.contain || "").includes(t)))
}

function V() {
    return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
}

function z(t) {
    return ["html", "body", "#document"].includes(P(t))
}
const N = Math.min,
    I = Math.max,
    j = Math.round,
    q = Math.floor,
    X = t => ({
        x: t,
        y: t
    });

function Y(t) {
    const e = C(t);
    let n = parseFloat(e.width) || 0,
        o = parseFloat(e.height) || 0;
    const i = F(t),
        r = i ? t.offsetWidth : n,
        l = i ? t.offsetHeight : o,
        s = j(n) !== r || j(o) !== l;
    return s && (n = r, o = l), {
        width: n,
        height: o,
        $: s
    }
}

function $(t) {
    return t instanceof Element || t instanceof S(t).Element
}

function _(t) {
    return $(t) ? t : t.contextElement
}

function G(t) {
    const e = _(t);
    if (!F(e)) return X(1);
    const n = e.getBoundingClientRect(),
        {
            width: o,
            height: i,
            $: r
        } = Y(e);
    let l = (r ? j(n.width) : n.width) / o,
        s = (r ? j(n.height) : n.height) / i;
    return l && Number.isFinite(l) || (l = 1), s && Number.isFinite(s) || (s = 1), {
        x: l,
        y: s
    }
}
const J = X(0);

function K(t) {
    const e = S(t);
    return V() && e.visualViewport ? {
        x: e.visualViewport.offsetLeft,
        y: e.visualViewport.offsetTop
    } : J
}

function Q(t, e, n, o) {
    void 0 === e && (e = !1), void 0 === n && (n = !1);
    const i = t.getBoundingClientRect(),
        r = _(t);
    let l = X(1);
    e && (o ? $(o) && (l = G(o)) : l = G(t));
    const s = function(t, e, n) {
        return void 0 === e && (e = !1), !(!n || e && n !== S(t)) && e
    }(r, n, o) ? K(r) : X(0);
    let a = (i.left + s.x) / l.x,
        f = (i.top + s.y) / l.y,
        u = i.width / l.x,
        d = i.height / l.y;
    if (r) {
        const t = S(r),
            e = o && $(o) ? S(o) : o;
        let n = t.frameElement;
        for (; n && o && e !== t;) {
            const t = G(n),
                e = n.getBoundingClientRect(),
                o = getComputedStyle(n),
                i = e.left + (n.clientLeft + parseFloat(o.paddingLeft)) * t.x,
                r = e.top + (n.clientTop + parseFloat(o.paddingTop)) * t.y;
            a *= t.x, f *= t.y, u *= t.x, d *= t.y, a += i, f += r, n = S(n).frameElement
        }
    }
    return c({
        width: u,
        height: d,
        x: a,
        y: f
    })
}

function U(t) {
    return $(t) ? {
        scrollLeft: t.scrollLeft,
        scrollTop: t.scrollTop
    } : {
        scrollLeft: t.pageXOffset,
        scrollTop: t.pageYOffset
    }
}

function Z(t) {
    var e;
    return null == (e = (H(t) ? t.ownerDocument : t.document) || window.document) ? void 0 : e.documentElement
}

function tt(t) {
    return Q(Z(t)).left + U(t).scrollLeft
}

function et(t) {
    if ("html" === P(t)) return t;
    const e = t.assignedSlot || t.parentNode || k(t) && t.host || Z(t);
    return k(e) ? e.host : e
}

function nt(t) {
    const e = et(t);
    return z(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : F(e) && W(e) ? e : nt(e)
}

function ot(t, e) {
    var n;
    void 0 === e && (e = []);
    const o = nt(t),
        i = o === (null == (n = t.ownerDocument) ? void 0 : n.body),
        r = S(o);
    return i ? e.concat(r, r.visualViewport || [], W(o) ? o : []) : e.concat(o, ot(o))
}

function it(t, e, n) {
    let o;
    if ("viewport" === e) o = function(t, e) {
        const n = S(t),
            o = Z(t),
            i = n.visualViewport;
        let r = o.clientWidth,
            l = o.clientHeight,
            s = 0,
            c = 0;
        if (i) {
            r = i.width, l = i.height;
            const t = V();
            (!t || t && "fixed" === e) && (s = i.offsetLeft, c = i.offsetTop)
        }
        return {
            width: r,
            height: l,
            x: s,
            y: c
        }
    }(t, n);
    else if ("document" === e) o = function(t) {
        const e = Z(t),
            n = U(t),
            o = t.ownerDocument.body,
            i = I(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth),
            r = I(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
        let l = -n.scrollLeft + tt(t);
        const s = -n.scrollTop;
        return "rtl" === C(o).direction && (l += I(e.clientWidth, o.clientWidth) - i), {
            width: i,
            height: r,
            x: l,
            y: s
        }
    }(Z(t));
    else if ($(e)) o = function(t, e) {
        const n = Q(t, !0, "fixed" === e),
            o = n.top + t.clientTop,
            i = n.left + t.clientLeft,
            r = F(t) ? G(t) : X(1);
        return {
            width: t.clientWidth * r.x,
            height: t.clientHeight * r.y,
            x: i * r.x,
            y: o * r.y
        }
    }(e, n);
    else {
        const n = K(t);
        o = {
            ...e,
            x: e.x - n.x,
            y: e.y - n.y
        }
    }
    return c(o)
}

function rt(t, e) {
    const n = et(t);
    return !(n === e || !$(n) || z(n)) && ("fixed" === C(n).position || rt(n, e))
}

function lt(t, e, n) {
    const o = F(e),
        i = Z(e),
        r = "fixed" === n,
        l = Q(t, !0, r, e);
    let s = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const c = X(0);
    if (o || !o && !r)
        if (("body" !== P(e) || W(i)) && (s = U(e)), F(e)) {
            const t = Q(e, !0, r, e);
            c.x = t.x + e.clientLeft, c.y = t.y + e.clientTop
        } else i && (c.x = tt(i));
    return {
        x: l.left + s.scrollLeft - c.x,
        y: l.top + s.scrollTop - c.y,
        width: l.width,
        height: l.height
    }
}

function st(t, e) {
    return F(t) && "fixed" !== C(t).position ? e ? e(t) : t.offsetParent : null
}

function ct(t, e) {
    const n = S(t);
    if (!F(t)) return n;
    let o = st(t, e);
    for (; o && B(o) && "static" === C(o).position;) o = st(o, e);
    return o && ("html" === P(o) || "body" === P(o) && "static" === C(o).position && !M(o)) ? n : o || function(t) {
        let e = et(t);
        for (; F(e) && !z(e);) {
            if (M(e)) return e;
            e = et(e)
        }
        return null
    }(t) || n
}
const at = {
    convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
        let {
            rect: e,
            offsetParent: n,
            strategy: o
        } = t;
        const i = F(n),
            r = Z(n);
        if (n === r) return e;
        let l = {
                scrollLeft: 0,
                scrollTop: 0
            },
            s = X(1);
        const c = X(0);
        if ((i || !i && "fixed" !== o) && (("body" !== P(n) || W(r)) && (l = U(n)), F(n))) {
            const t = Q(n);
            s = G(n), c.x = t.x + n.clientLeft, c.y = t.y + n.clientTop
        }
        return {
            width: e.width * s.x,
            height: e.height * s.y,
            x: e.x * s.x - l.scrollLeft * s.x + c.x,
            y: e.y * s.y - l.scrollTop * s.y + c.y
        }
    },
    getDocumentElement: Z,
    getClippingRect: function(t) {
        let {
            element: e,
            boundary: n,
            rootBoundary: o,
            strategy: i
        } = t;
        const r = [..."clippingAncestors" === n ? function(t, e) {
                const n = e.get(t);
                if (n) return n;
                let o = ot(t).filter((t => $(t) && "body" !== P(t))),
                    i = null;
                const r = "fixed" === C(t).position;
                let l = r ? et(t) : t;
                for (; $(l) && !z(l);) {
                    const e = C(l),
                        n = M(l);
                    n || "fixed" !== e.position || (i = null), (r ? !n && !i : !n && "static" === e.position && i && ["absolute", "fixed"].includes(i.position) || W(l) && !n && rt(t, l)) ? o = o.filter((t => t !== l)) : i = e, l = et(l)
                }
                return e.set(t, o), o
            }(e, this._c) : [].concat(n), o],
            l = r[0],
            s = r.reduce(((t, n) => {
                const o = it(e, n, i);
                return t.top = I(o.top, t.top), t.right = N(o.right, t.right), t.bottom = N(o.bottom, t.bottom), t.left = I(o.left, t.left), t
            }), it(e, l, i));
        return {
            width: s.right - s.left,
            height: s.bottom - s.top,
            x: s.left,
            y: s.top
        }
    },
    getOffsetParent: ct,
    getElementRects: async function(t) {
        let {
            reference: e,
            floating: n,
            strategy: o
        } = t;
        const i = this.getOffsetParent || ct,
            r = this.getDimensions;
        return {
            reference: lt(e, await i(n), o),
            floating: {
                x: 0,
                y: 0,
                ...await r(n)
            }
        }
    },
    getClientRects: function(t) {
        return Array.from(t.getClientRects())
    },
    getDimensions: function(t) {
        return Y(t)
    },
    getScale: G,
    isElement: $,
    isRTL: function(t) {
        return "rtl" === getComputedStyle(t).direction
    }
};

function ft(t, e, n, o) {
    void 0 === o && (o = {});
    const {
        ancestorScroll: i = !0,
        ancestorResize: r = !0,
        elementResize: l = "function" == typeof ResizeObserver,
        layoutShift: s = "function" == typeof IntersectionObserver,
        animationFrame: c = !1
    } = o, a = _(t), f = i || r ? [...a ? ot(a) : [], ...ot(e)] : [];
    f.forEach((t => {
        i && t.addEventListener("scroll", n, {
            passive: !0
        }), r && t.addEventListener("resize", n)
    }));
    const u = a && s ? function(t, e) {
        let n, o = null;
        const i = Z(t);

        function r() {
            clearTimeout(n), o && o.disconnect(), o = null
        }
        return function l(s, c) {
            void 0 === s && (s = !1), void 0 === c && (c = 1), r();
            const {
                left: a,
                top: f,
                width: u,
                height: d
            } = t.getBoundingClientRect();
            if (s || e(), !u || !d) return;
            const m = {
                rootMargin: -q(f) + "px " + -q(i.clientWidth - (a + u)) + "px " + -q(i.clientHeight - (f + d)) + "px " + -q(a) + "px",
                threshold: I(0, N(1, c)) || 1
            };
            let h = !0;

            function p(t) {
                const e = t[0].intersectionRatio;
                if (e !== c) {
                    if (!h) return l();
                    e ? l(!1, e) : n = setTimeout((() => {
                        l(!1, 1e-7)
                    }), 100)
                }
                h = !1
            }
            try {
                o = new IntersectionObserver(p, {
                    ...m,
                    root: i.ownerDocument
                })
            } catch (t) {
                o = new IntersectionObserver(p, m)
            }
            o.observe(t)
        }(!0), r
    }(a, n) : null;
    let d, m = -1,
        h = null;
    l && (h = new ResizeObserver((t => {
        let [o] = t;
        o && o.target === a && h && (h.unobserve(e), cancelAnimationFrame(m), m = requestAnimationFrame((() => {
            h && h.observe(e)
        }))), n()
    })), a && !c && h.observe(a), h.observe(e));
    let p = c ? Q(t) : null;
    return c && function e() {
        const o = Q(t);
        !p || o.x === p.x && o.y === p.y && o.width === p.width && o.height === p.height || n(), p = o, d = requestAnimationFrame(e)
    }(), n(), () => {
        f.forEach((t => {
            i && t.removeEventListener("scroll", n), r && t.removeEventListener("resize", n)
        })), u && u(), h && h.disconnect(), h = null, c && cancelAnimationFrame(d)
    }
}
const ut = (t, e, n) => {
    const o = new Map,
        i = {
            platform: at,
            ...n
        },
        l = {
            ...i.platform,
            _c: o
        };
    return (async (t, e, n) => {
        const {
            placement: o = "bottom",
            strategy: i = "absolute",
            middleware: l = [],
            platform: s
        } = n, c = l.filter(Boolean), a = await (null == s.isRTL ? void 0 : s.isRTL(e));
        let f = await s.getElementRects({
                reference: t,
                floating: e,
                strategy: i
            }),
            {
                x: u,
                y: d
            } = r(f, o, a),
            m = o,
            h = {},
            p = 0;
        for (let g = 0; g < c.length; g++) {
            const {
                name: n,
                fn: l
            } = c[g], {
                x: y,
                y: x,
                data: w,
                reset: v
            } = await l({
                x: u,
                y: d,
                initialPlacement: o,
                placement: m,
                strategy: i,
                middlewareData: h,
                rects: f,
                platform: s,
                elements: {
                    reference: t,
                    floating: e
                }
            });
            u = null != y ? y : u, d = null != x ? x : d, h = {
                ...h,
                [n]: {
                    ...h[n],
                    ...w
                }
            }, v && p <= 50 && (p++, "object" == typeof v && (v.placement && (m = v.placement), v.rects && (f = !0 === v.rects ? await s.getElementRects({
                reference: t,
                floating: e,
                strategy: i
            }) : v.rects), ({
                x: u,
                y: d
            } = r(f, m, a))), g = -1)
        }
        return {
            x: u,
            y: d,
            placement: m,
            strategy: i,
            middlewareData: h
        }
    })(t, e, {
        ...i,
        platform: l
    })
};
var dt = t.useLayoutEffect;
export {
    ft as A, ut as B, O as C, L as E, T as L, E as O, D as a, v as b, m as g, dt as i
};
