import {
    u as e
} from "./drag-abe86584.js";
import {
    r as t,
    j as r,
    f as n,
    F as s
} from "./index-8524466f.js";
import {
    u as a
} from "./useUnmount-a66bc97f.js";
const l = ({
    value: l,
    onChange: i,
    onClick: u,
    max: c = 100,
    min: o = 0,
    step: d,
    values: f,
    marks: m,
    className: x,
    size: p = "medium",
    tooltip: h,
    liveUpdate: g = !1,
    tooltipAlwaysVisible: v = !1,
    theme: y = "default",
    labels: j,
    eventLabel: b,
    disabled: w = !1
}) => {
    t.useRef(null);
    const E = t.useRef(null),
        N = t.useRef(null),
        k = t.useRef(null),
        R = t.useRef([]),
        S = t.useRef(i),
        [C, O] = t.useState({
            x: 0
        }),
        [A, W] = t.useState(l),
        z = "medium" === p ? 8 : 12;
    t.useEffect((() => {
        W(l)
    }), [l]), t.useEffect((() => {
        g && S.current(A)
    }), [A]);
    let L = d ? Array.from(Array(Math.floor((c + d) / d)).keys()).map(((e, t) => t * d)) : f || (m ? m.map((e => e.value)) : Array.from(Array(c + 1).keys()).map(((e, t) => 1 * t)));
    const {
        dragElement: M,
        releaseElement: U,
        reposition: I
    } = e({
        onClick: u,
        vertical: !1,
        onMove: e => {
            if (N.current && E.current && k.current && void 0 !== e.x && E.current.parentElement)
                if (N.current.style.width = e.x + z + "px", L?.length) {
                    const t = R.current.findIndex((t => t.x === e.x));
                    W((() => L[t]))
                } else {
                    const t = (e.x + z) * (c - o) / E.current.parentElement.offsetWidth;
                    t !== A && W((() => t))
                }
        },
        onMouseUp: e => {
            if (k.current && void 0 !== e.x && E.current?.parentElement)
                if (L?.length) {
                    const t = R.current.findIndex((t => t.x === e.x));
                    W((() => L[t])), setTimeout((() => {
                        L && S.current(L[t])
                    }), 50)
                } else {
                    const t = (e.x + z) * (c - o) / E.current.parentElement.offsetWidth;
                    S.current(t), W(t), k.current.innerText = t.toString()
                }
        },
        draggingClasses: "bg-dark-200",
        idleClasses: "bg-dark-100",
        position: C,
        snapPoints: R
    });
    t.useEffect((() => {
        E.current && N.current && k.current && L?.length && (O(R.current[L.indexOf(l)]), N.current.style.width = R.current[L.indexOf(l)].x + z + "px")
    }), [l]), t.useEffect((() => {
        S.current = i
    }), [i]), a((() => {
        U()
    }));
    const J = () => {
        if (!N.current || !E.current || !E.current.parentElement) return;
        let e = c || L[L.length - 1],
            t = o || L[0];
        const r = E.current.parentElement.offsetWidth * l / (e - t);
        r === C?.x || L?.length || (O({
            x: r
        }), N.current.style.width = r + z + "px")
    };
    return t.useEffect((() => {
        E.current && N.current && (L?.length || J())
    }), [l]), r.jsxs("div", {
        className: n(`relative py-2 ${x}`, {
            "pointer-events-none opacity-50 brightness-75": w
        }),
        children: [j || m && m.some((e => e.label)) ? r.jsx("div", {
            className: "relative w-full h-4 mb-2 text-xs flex items-center justify-between",
            children: (j || m || []).map(((e, t) => r.jsx("div", {
                className: "w-0 flex " + (0 === t ? "justify-start" : t === (j || m || []).length - 1 ? "justify-end" : "justify-center"),
                children: e.label || e.value
            }, e.value)))
        }) : null, r.jsxs("div", {
            className: "relative",
            ref: e => {
                if (!e) return;
                if (!N.current) return;
                const t = L.map(((t, r) => ({
                    x: 100 * r / (L.length - 1) / 100 * e.getBoundingClientRect().width
                })));
                JSON.stringify(R.current) !== JSON.stringify(t) && (R.current = t, O(t[L.indexOf(l)]), N.current.style.width = t[L.indexOf(l)].x + z + "px")
            },
            children: [r.jsx("div", {
                className: n("w-full rounded bg-dark-900", {
                    "h-1.5": "medium" === p,
                    "h-2": "large" === p
                })
            }), r.jsx("div", {
                className: n("absolute top-0 rounded " + ((L?.length || 0) < 50 ? "transition-all" : ""), {
                    "h-1.5": "medium" === p,
                    "h-2": "large" === p,
                    "bg-brand-default": "default" === y,
                    "monetize-gradient": "monetize" === y
                }),
                ref: e => {
                    N.current = e
                }
            }), r.jsx("div", {
                className: n("absolute group shadow-md rounded-full cursor-pointer flex items-center justify-center", {
                    "h-4 w-4 -top-[0.33rem]": "medium" === p,
                    "h-6 w-6 -top-[0.5rem]": "large" === p
                }),
                style: {
                    transition: (L?.length || 0) < 50 ? "all 150ms ease" : ""
                },
                ref: e => {
                    e && (E.current = e, M(E.current), J())
                },
                children: r.jsx("div", {
                    ref: k,
                    className: n("whitespace-nowrap transition-all rounded bg-dark-900 text-xs font-medium text-dark-400 py-1 px-2 pointer-events-none", {
                        "show-dragged opacity-0 group-hover:opacity-100": !v,
                        "translate-y-6": "medium" === p,
                        "translate-y-8": "large" === p
                    }),
                    children: h ? r.jsx(s, {
                        id: h,
                        values: {
                            value: A.toLocaleString(),
                            b: e => r.jsx("span", {
                                className: "text-dark-100",
                                children: e
                            })
                        }
                    }) : r.jsx("span", {
                        className: "text-dark-100",
                        children: A.toLocaleString()
                    })
                })
            })]
        })]
    })
};
export {
    l as R
};
