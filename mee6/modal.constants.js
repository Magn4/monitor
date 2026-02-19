import {
    j as e,
    I as t,
    r as l,
    p as s,
    f as a,
    F as n,
    B as o
} from "./index-684a1b71.js";
const i = ({
        stroke: t = "currentColor",
        width: l = 24,
        height: s = 24,
        ...a
    }) => e.jsx("svg", {
        width: l,
        height: s,
        ...a,
        viewBox: "0 0 42 42",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: e.jsx("path", {
            d: "M0,0 L38,38 M38,0 L0,38",
            stroke: t,
            "data-stroke": "main",
            strokeWidth: 6,
            strokeLinecap: "round"
        })
    }),
    r = ({
        stroke: t = "currentColor",
        fill: l = "transparent",
        ...s
    }) => e.jsxs("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...s,
        children: [e.jsx("path", {
            d: "M3.353 8.95A7.511 7.511 0 018.95 3.353c2.006-.47 4.094-.47 6.1 0a7.511 7.511 0 015.597 5.597c.47 2.006.47 4.094 0 6.1a7.511 7.511 0 01-5.597 5.597c-2.006.47-4.094.47-6.1 0a7.511 7.511 0 01-5.597-5.597 13.354 13.354 0 010-6.1z",
            fill: l,
            stroke: t,
            strokeWidth: 1.5
        }), e.jsx("path", {
            d: "M13.768 10.232l-3.536 3.536m3.536 0l-3.536-3.536",
            stroke: t,
            strokeWidth: 1.5,
            strokeLinecap: "round"
        })]
    }),
    c = {
        modal_style: "_modal_style_1hucm_1",
        modal_container: "_modal_container_1hucm_37"
    },
    d = t.createContext({
        onClose: () => {},
        theme: "",
        center: !1,
        setTitle: e => {},
        title: "",
        hook: null,
        label: void 0
    }),
    m = ({
        open: t = !1,
        theme: n = "primary",
        center: o = !1,
        children: i,
        overflow: r = !0,
        label: m,
        closeOutside: u = !0,
        onClose: x = (() => {}),
        className: h = "",
        hook: f = null,
        useDefaultClassName: p = !0
    }) => {
        const w = s(),
            [j, g] = l.useState(""),
            [k, b] = l.useState(f ? f.isOpen : t);
        l.useEffect((() => {
            const e = f ? f.isOpen : t;
            b(e), e && w("modal_view", {
                label: m ?? j
            })
        }), [t, f?.isOpen]);
        const v = () => {
            b(!1), setTimeout((() => {
                x(), f?.close()
            }), 210), w("modal_close", {
                label: m ?? j
            })
        };
        return e.jsx("div", {
            onClick: u ? () => {
                v ? v() : f?.close(), m && w("modal_cancel", {
                    label: m
                })
            } : () => {
                m && w("modal_cancel", {
                    label: m
                })
            },
            className: a("fixed top-0 left-0 h-screen w-screen bg-dark-900 bg-opacity-90 flex items-center justify-center transition-all duration-200 z-50", {
                "opacity-0 pointer-events-none": !k,
                [c.modal_container]: !0
            }),
            children: e.jsx("div", {
                onClick: e => e.stopPropagation(),
                className: a("", {
                    "relative bg-dark-800 border-dark-700 shadow-lg p-6 transition-all duration-200 max-h-full text-left": p,
                    [h]: !!h,
                    "text-center": o,
                    "overflow-auto": r,
                    "max-w-[448px]": -1 === h.indexOf("max-w-"),
                    [c.modal_style]: !0
                }),
                children: k && e.jsx(d.Provider, {
                    value: {
                        onClose: v,
                        theme: n,
                        center: o,
                        setTitle: g,
                        title: j,
                        hook: f,
                        label: m
                    },
                    children: i
                })
            })
        })
    };
m.Main = ({
    children: t,
    className: l
}) => t && e.jsx("main", {
    className: l,
    children: t
}), m.Header = ({
    image: t,
    icon: o,
    title: r,
    subtitle: c,
    children: m,
    hideClose: u,
    centerTitle: h = !1,
    size: f = "medium",
    className: p
}) => {
    const w = s(),
        {
            onClose: j,
            theme: g,
            center: k,
            setTitle: b,
            label: v
        } = l.useContext(d);
    return l.useEffect((() => {
        "string" == typeof r && b(r)
    }), [r]), e.jsxs("header", {
        className: `relative ${p}`,
        children: [t && "string" == typeof t ? e.jsx("img", {
            src: t,
            className: "mb-4"
        }) : t && "string" != typeof t ? t : null, e.jsxs("div", {
            className: "relative flex justify-between",
            children: [o ? e.jsx("div", {
                className: `mb-3 scale-150 h-6 w-6 ${x[g]}`,
                children: o
            }) : null, e.jsxs("div", {
                className: "flex flex-col flex-1",
                children: [r && e.jsx("div", {
                    id: "title",
                    className: a("text-dark-100 font-medium w-full text-center lg:text-left", {
                        "text-lg": "medium" === f,
                        "text-base": "small" === f,
                        "lg:text-center": h
                    }),
                    children: "string" == typeof r ? e.jsx(n, {
                        id: r
                    }) : r
                }), c && e.jsx("div", {
                    className: a("text-dark-300 mt-1 w-full", {
                        "text-base": "medium" === f,
                        "text-sm": "small" === f
                    }),
                    children: "string" == typeof c ? e.jsx(n, {
                        id: c
                    }) : c
                })]
            }), e.jsx("div", {
                className: " max-w-[368px]",
                children: m
            }), !u && e.jsx(i, {
                onClick: () => {
                    j && j(), v && w("modal_cancel", {
                        label: v
                    })
                },
                className: "text-white h-3 w-3 transition-all duration-200 opacity-60 hover:opacity-100 cursor-pointer"
            })]
        })]
    })
}, m.Footer = ({
    icon: t = null,
    cancelButtonText: i = "button.cancel",
    confirmButtonText: r = "button.publish",
    hideConfirmButton: c = !1,
    hideCancelButton: m = !1,
    renderConfirmButton: u = null,
    renderCancelButton: x = null,
    onConfirm: h = null,
    onCancel: f = null,
    closeOnConfirmation: p = !0,
    sticky: w = !1,
    loading: j
}) => {
    const g = s(),
        {
            onClose: k,
            center: b,
            theme: v,
            title: y,
            hook: C,
            label: N
        } = l.useContext(d);
    return e.jsxs("footer", {
        className: a("flex items-center max-w-full justify-end", {
            "justify-center": b,
            "justify-between": !b,
            sticky: w,
            "bottom-0": w
        }),
        children: [!b && e.jsx("div", {}), e.jsxs("div", {
            className: a("flex flex-1 lg:flex-auto items-center justify-end max-w-full", {
                "w-full": b
            }),
            children: [m ? "" : x ? x() : e.jsx(o, {
                theme: "secondary",
                className: a("", {
                    "mr-3": !c,
                    "w-full": b
                }),
                onClick: async () => {
                    N && g("modal_cancel", {
                        label: y
                    }), f && await f(), k && k(), C?.close()
                },
                children: e.jsx(n, {
                    id: i
                })
            }), c ? null : u ? u() : null != h ? e.jsx(o, {
                loading: j,
                theme: "danger" === v || "premium" === v ? v : "primary",
                className: a("flex-1 lg:flex-initial", {
                    "w-full": b,
                    "max-w-[256px]": !b
                }),
                onClick: async () => {
                    N && g("modal_question_answered", {
                        label: N
                    });
                    const e = h();
                    e instanceof Promise && await e, p && k && k()
                },
                icon: t,
                children: e.jsx(n, {
                    id: r
                })
            }) : null]
        })]
    })
};
const u = ({
    open: t,
    ...s
}) => {
    const [a, n] = l.useState(t);
    return l.useEffect((() => {
        setTimeout((() => n((() => t))), 100)
    }), [t]), t || s.hook?.open ? e.jsx(m, {
        ...s,
        open: a
    }) : null
};
u.Header = m.Header, u.Footer = m.Footer, u.Main = m.Main;
const x = {
    primary: "text-brand-default",
    secondary: "text-dark-300",
    white: "text-dark-100",
    danger: "text-danger-default",
    success: "text-success-default",
    premium: "text-premium-default"
};
export {
    i as C, x as I, u as W, r as a, c as s
};
