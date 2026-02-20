import {
    r as e,
    L as t,
    j as r,
    f as l,
    h as s,
    i as a
} from "./index-8524466f.js";
import {
    L as o
} from "./app-3ecfb394.js";
const i = ({
    children: i,
    theme: n = "primary",
    icon: d,
    disabled: c = !1,
    loading: f = !1,
    to: p = "",
    className: g,
    dropdown: u = !1,
    iconPosition: b = "right",
    style: h,
    onClick: x = (() => {}),
    ...m
}) => {
    const [y, j] = e.useState(f), w = p ? t : m.href ? "a" : "button";
    return r.jsx(w, {
        ...m,
        to: p,
        href: m.href,
        target: m.target,
        disabled: c || y,
        className: l(`disabled:hover:bg-grey-600 hover:bg-dark-900 block w-full rounded-lg lg:text-xl text-base lg:leading-7 leading-6 box-border lg:p-6 p-4 outline-none cursor-pointer relative select-none bg-grey-600 border border-blue-default text-grey-100 ${n?s[n]:""} ${g}`),
        style: h,
        onClick: async e => {
            if (m.href || p) x && x(e);
            else if (c || y || p) e.preventDefault();
            else if (x) {
                const t = x(e);
                t instanceof Promise && (j(!0), await t), j(!1)
            }
        },
        children: r.jsxs("div", {
            className: l("flex align-center justify-between transition-all duration-200 whitespace-nowrap text-ellipsis overflow-hidden", {
                "opacity-0": y,
                "flex-row-reverse": "left" === b
            }),
            children: [i, d && d, y && r.jsx("span", {
                className: l("transition-all duration-200 absolute top-0 left-0 w-full h-full flex items-center justify-center", {
                    "opacity-0": !y
                }),
                children: r.jsx(o, {
                    color: a[n]
                })
            })]
        })
    })
};
export {
    i as B
};
