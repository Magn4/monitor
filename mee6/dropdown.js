import {
    I as e,
    r,
    j as s,
    f as a
} from "./index-684a1b71.js";
import {
    I as t
} from "./Icon-6914d147.js";
import {
    I as n
} from "./dropdown.constants-f4316a85.js";
import {
    l as i
} from "./app-91bc7f76.js";
const o = e.createContext({
        open: !1,
        setOpen: e => {}
    }),
    l = ({
        trigger: e,
        children: t,
        className: n,
        theme: l = "light"
    }) => {
        const [c, p] = r.useState(!1), m = r.useRef(null);
        return i(m, (() => p(!1))), s.jsxs("div", {
            ref: m,
            className: `relative max-w-max ${n}`,
            children: [e && s.jsx("div", {
                onClick: e => {
                    e.preventDefault(), p(!c)
                },
                children: e
            }), s.jsx("div", {
                className: a("z-10 rounded-lg shadow-sm p-2 min-w-[170px] max-w-max absolute right-0 mt-2 transform transition-all duration-200", {
                    "opacity-0 pointer-events-none -translate-y-6 h-0 overflow-hidden": !c,
                    "bg-dark-800 border border-solid z-10 border-dark-600": "light" === l,
                    "bg-dark-900": "dark" === l
                }),
                children: s.jsx(o.Provider, {
                    value: {
                        open: c,
                        setOpen: p
                    },
                    children: Array.isArray(t) ? t.map(((e, r) => e ? s.jsxs("div", {
                        children: [s.jsx(d, {
                            ...e.props,
                            dropdownTheme: l
                        }), r !== t.length - 1 && s.jsx("div", {
                            className: "h-[1px] w-full " + ("light" === l ? "bg-dark-700" : "bg-dark-800")
                        })]
                    }, r) : null)) : t && "string" != typeof t ? s.jsx(d, {
                        ...t.props,
                        dropdownTheme: l
                    }) : null
                })
            })]
        })
    },
    d = ({
        children: e,
        icon: i,
        theme: l = "primary",
        className: d,
        dropdownTheme: c,
        onClick: p
    }) => {
        const [m, h] = r.useState(!1), {
            setOpen: x
        } = r.useContext(o);
        return s.jsxs("div", {
            className: `whitespace-nowrap relative rounded-lg flex items-center justify-start ${e&&"p-3"} ${d} text-dark-300 text-base ${"light"===c?"hover:bg-dark-900 hover:bg-opacity-30":"hover:bg-dark-800 hover:bg-opacity-50"} cursor-pointer`,
            onClick: async e => {
                if (e.preventDefault(), p) {
                    const e = p();
                    e instanceof Promise && (h(!0), await e), h(!1), x(!1)
                }
            },
            children: [i ? s.jsx("div", {
                className: a("inline-block", {
                    "mr-2.5": e
                }),
                children: "string" == typeof i ? s.jsx(t, {
                    icon: i,
                    main: n[l]
                }) : i
            }) : null, e && s.jsxs(s.Fragment, {
                children: [s.jsx("span", {
                    className: a("transition-all duration-200", {
                        "opacity-0": m
                    }),
                    children: e
                }), s.jsx("span", {
                    className: a("transition-all duration-200 absolute top-0 left-0 w-full h-full flex items-center justify-center", {
                        "opacity-0": !m
                    }),
                    children: "loading"
                })]
            })]
        })
    };
export {
    l as D, d as a
};
