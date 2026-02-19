import {
    r as e,
    j as r,
    f as t,
    t as n,
    p as s,
    F as l
} from "./index-75d73738.js";
import {
    a0 as o,
    R as a,
    L as i,
    a as d,
    T as u
} from "./app-61e5c911.js";
import {
    t as c
} from "./tslib-f175565a.js";
import {
    L as f
} from "./label-8afa9932.js";
import {
    a as p
} from "./modal.constants-8f18da75.js";
var m, x = {},
    h = {};
Object.defineProperty(x, "__esModule", {
    value: !0
});
var v = e,
    g = c.__importDefault(function() {
        if (m) return h;
        m = 1, Object.defineProperty(h, "__esModule", {
            value: !0
        });
        var r = e,
            t = o,
            n = t.isBrowser ? window : null,
            s = function(e) {
                return !!e.addEventListener
            },
            l = function(e) {
                return !!e.on
            };
        return h.default = function(e, o, a, i) {
            void 0 === a && (a = n), r.useEffect((function() {
                if (o && a) return s(a) ? t.on(a, e, o, i) : l(a) && a.on(e, o, i),
                    function() {
                        s(a) ? t.off(a, e, o, i) : l(a) && a.off(e, o, i)
                    }
            }), [e, o, a, JSON.stringify(i)])
        }, h
    }()),
    b = o,
    j = x.default = function(e, r, t, n) {
        void 0 === r && (r = b.noop), void 0 === t && (t = {}), void 0 === n && (n = [e]);
        var s = t.event,
            l = void 0 === s ? "keydown" : s,
            o = t.target,
            a = t.options,
            i = v.useMemo((function() {
                var t, n = "function" == typeof(t = e) ? t : "string" == typeof t ? function(e) {
                    return e.key === t
                } : t ? function() {
                    return !0
                } : function() {
                    return !1
                };
                return function(e) {
                    if (n(e)) return r(e)
                }
            }), n);
        g.default(l, i, o, a)
    };
const w = ({
        selected: e,
        onSelect: n,
        onSetSelected: s,
        children: l
    }) => r.jsx("li", {
        className: t("p-2 rounded-lg transition duration-200 hover:bg-grey-600 font-sans text-base text-dark-100 cursor-pointer flex items-center justify-start", {
            "bg-grey-600": e
        }),
        onClick: () => n(),
        onMouseEnter: () => s(),
        children: l
    }),
    y = ({
        options: t,
        renderItem: n,
        onSelect: s,
        disabled: l,
        className: o
    }) => {
        const a = e.useRef(null),
            [i, d] = e.useState(10),
            u = e.useRef(!l),
            [c, f] = e.useState(0);
        e.useEffect((() => {
            u.current = !l;
            const e = () => {
                if (!a.current || !a.current.parentElement) return;
                const {
                    scrollTop: e,
                    scrollHeight: r,
                    clientHeight: t
                } = a.current.parentElement;
                r - t - e < 100 && d((e => e + 10))
            };
            return a.current?.parentElement?.addEventListener("scroll", e, {
                passive: !0
            }), () => {
                a.current?.parentElement?.removeEventListener("scroll", e)
            }
        }), [l]);
        const p = e.useCallback((e => {
            u.current && f((r => {
                const n = r + e;
                return n > t.length - 1 || n < 0 ? 0 : n
            }))
        }), [l]);
        return j("ArrowUp", (() => p(-1)), {}, [t]), j("ArrowDown", (() => p(1)), {}, [t]), j("Enter", (() => {
            u.current && s(t[c])
        }), {}, [c]), t ? r.jsx("ul", {
            className: `${o||""}`,
            ref: a,
            children: t.slice(0, i).map(((e, t) => r.jsx(w, {
                selected: c === t,
                onSelect: () => s(e),
                onSetSelected: () => f(t),
                children: n(e, t)
            }, t)))
        }) : null
    },
    S = ({
        value: o,
        disabled: c = !1,
        placeholder: m,
        label: x = !1,
        position: h = "left",
        showError: v = !0,
        error: g = null,
        className: b = "",
        validate: j,
        onChange: w,
        options: S,
        renderOption: N,
        search: k,
        onSearchChange: E,
        onSearchKeyDown: L,
        onSearchBlur: C,
        dropdownSuffix: _,
        isLoading: D,
        eventLabel: M,
        footer: O,
        showArrow: R = !0,
        required: q = !1
    }) => {
        const A = n(),
            B = e.useRef(null),
            [F, H] = e.useState(!1),
            [I, K] = e.useState(null),
            [P, T] = e.useState("");
        s(B), a((() => K(g)), [g]);
        return r.jsxs("div", {
            className: `relative ${b}`,
            children: ["left" === h && x && "string" == typeof x ? r.jsx(f, {
                required: q,
                children: r.jsx(l, {
                    id: x
                })
            }) : null, "left" === h && x && "string" != typeof x ? r.jsx(f, {
                required: q,
                children: x
            }) : null, r.jsxs("div", {
                translate: "no",
                children: [r.jsxs("div", {
                    ref: B,
                    onClick: () => H(!F),
                    className: t("overflow-hidden flex items-center justify-start group bg-dark-900 rounded-lg border border-solid transition-all duration-200 active:ring-opacity-30 active:ring-[4px]", {
                        "bg-opacity-70 cursor-not-allowed pointer-events-none bg-dark border border-dark-900 border-solid": c,
                        "hover:border-red-default border-red-default active:border-red-default ring-red-default": I,
                        "hover:border-blue-default border-dark-900 active:border-blue-default ring-blue-default": !I,
                        "ring-opacity-30 ring-[4px]": F
                    }),
                    children: [r.jsxs("div", {
                        className: t("bg-transparent outline-none border-none py-3 w-full px-4 cursor-pointer flex justify-between items-center text-body text-dark-100", {
                            "!text-dark-500 cursor-not-allowed": c,
                            "!text-dark-400": !c && !F && !o && 0 !== o
                        }),
                        children: [r.jsx("div", {
                            className: "flex-1 min-w-0 overflow-hidden",
                            children: F && k ? r.jsx("input", {
                                placeholder: A.formatMessage({
                                    id: m?.toLocaleString() ?? "select.channels.placeholder"
                                }),
                                className: "bg-transparent outline-none text-dark-300 w-full",
                                type: "text",
                                ref: e => e?.focus(),
                                value: P,
                                onChange: e => {
                                    T(e.target.value), E && E(e.target.value)
                                },
                                onKeyDown: e => {
                                    L && L(e, P)
                                },
                                onBlur: () => {
                                    C && C(P)
                                }
                            }) : null != o && "" !== o ? N ? N(o, F) : o : m
                        }), D ? r.jsx("div", {
                            className: "flex-shrink-0 ml-2 mr-2",
                            children: r.jsx(i, {
                                size: "small"
                            })
                        }) : null, R ? r.jsx(d, {
                            className: "transition-all flex-shrink-0 ml-auto " + (F ? "rotate-0" : "rotate-180")
                        }) : null]
                    }), "right" === h && x && r.jsx("div", {
                        className: "h-full flex items-center min-h-[48px] whitespace-nowrap pr-4",
                        children: x && x
                    })]
                }), v && I && r.jsxs("p", {
                    className: "mt-2 flex items-center justify-start text-sm text-red-default font-medium",
                    children: [r.jsx(p, {
                        className: "h-4 w-4 text-danger-default mr-1"
                    }), I]
                }), r.jsxs(u, {
                    visible: F && !!S && S.length > 0,
                    onDismiss: e => {
                        T(""), !B.current?.contains(e.target) && H(!1)
                    },
                    className: (x ? "top-[81px]" : "top-[50px]") + " absolute",
                    children: [_ && _, r.jsx(y, {
                        options: S?.filter((e => !k || k(P, e))),
                        onSelect: e => {
                            (e => {
                                if (T(""), j) {
                                    const r = j(e);
                                    if (!0 !== r) return void K(r.error);
                                    K(null)
                                }
                                w?.(e)
                            })(e), H(!1)
                        },
                        renderItem: e => r.jsx("div", {
                            className: "w-full",
                            children: N ? N(e, F) : "" + e
                        }),
                        disabled: !F || c
                    }), O && r.jsxs(r.Fragment, {
                        children: [r.jsx("div", {
                            className: "h-px bg-dark-700 w-full my-2"
                        }), O]
                    })]
                })]
            })]
        })
    };
export {
    y as O, S
};
