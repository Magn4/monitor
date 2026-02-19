import {
    e,
    S as a,
    j as r,
    f as s,
    F as l,
    I as t,
    p as d
} from "./index-75d73738.js";
import {
    _ as n
} from "./_baseFlatten-d838f45c.js";
var o = n;
const i = e((function(e) {
        return (null == e ? 0 : e.length) ? o(e, 1) : []
    })),
    c = ({
        name: e,
        value: t = !1,
        disabled: d = !1,
        checked: n = !1,
        title: o,
        description: i,
        onChange: c = (() => {}),
        ...m
    }) => {
        const u = `radio-${a()}`;
        return r.jsxs("div", {
            className: "flex items-start justify-start cursor-pointer",
            children: [r.jsx("input", {
                type: "radio",
                name: e,
                value: u,
                className: "sr-only peer",
                id: u,
                onChange: () => {
                    d || c(t)
                }
            }), r.jsx("label", {
                htmlFor: u,
                className: s("cursor-pointer overflow-hidden min-w-[1.25rem] min-h-[1.25rem] w-5 h-5 flex items-center justify-center rounded-full border-[1px] border-solid transition-all duration-200 hover:border-brand-default", {
                    "border-brand-default bg-brand-default": !d && n,
                    "bg-dark-500 border-dark-700": !n,
                    "bg-dark-500 hover:border-dark-700 border-dark-700": d,
                    "transform translate-y-0.5": o,
                    "!cursor-not-allowed": d
                }),
                children: r.jsx("div", {
                    className: s("rounded-full transition-all duration-200", {
                        "bg-white scale-100 w-2.5 h-2.5": !d && n,
                        "bg-dark-700 scale-100 w-1.5 h-1.5": d && n,
                        "scale-0": !n
                    })
                })
            }), (o || i) && r.jsxs("label", {
                htmlFor: u,
                className: s("ml-2.5 select-none cursor-pointer", {
                    "!cursor-not-allowed": d
                }),
                children: [o && r.jsx("p", {
                    className: s("text-dark-100 text-base", {
                        "mb-1": i
                    }),
                    children: "string" == typeof o ? r.jsx(l, {
                        id: o
                    }) : o
                }), i && r.jsx("p", {
                    className: "text-dark-300 text-sm",
                    children: "string" == typeof i ? r.jsx(l, {
                        id: i
                    }) : i
                })]
            })]
        })
    };
c.displayName = "Radio";
const m = ({
    value: e,
    children: s,
    name: l = a(),
    disabled: n = !1,
    className: o,
    onChange: m = (e => {})
}) => {
    const u = t.useRef(null);
    return d(u), r.jsx("div", {
        className: `${o} grid grid-cols-1 gap-3`,
        ref: u,
        children: s && i(s).filter((e => !!e)).map(((a, s) => "Radio" === a.type.displayName ? r.jsx(c, {
            ...a.props,
            name: l,
            disabled: n,
            checked: a.props.value === e,
            onChange: e => {
                m(e)
            }
        }, s) : a))
    })
};
export {
    m as R, c as a
};
