import {
    a as e
} from "./app-b4886647.js";
import {
    r as s,
    j as t
} from "./index-e0afec69.js";
const a = ({
    title: a,
    renderHeader: n,
    suffix: i,
    children: r,
    isOpened: l,
    onSwitchOpen: c,
    expandable: d = !0,
    className: o = "",
    noChildren: x = !1,
    noShadow: p = !1,
    smooth: h = !0,
    id: m,
    getOpenStatus: j
}) => {
    const [u, f] = s.useState(l);
    return s.useEffect((() => {
        f(l)
    }), [l]), t.jsxs("div", {
        className: `bg-dark-800 ${!p&&"shadow-xs"} ${o}`,
        ...m && {
            id: m
        },
        children: [t.jsxs("h3", {
            className: `text-h6 text-dark-100 flex justify-between items-start hover:text-dark-200 transition-all py-4 lg:py-6 px-6 ${d&&"cursor-pointer"}`,
            onClick: d ? () => {
                f(!u), c && c(!l), j && j(!u)
            } : () => {},
            children: [n ? n() : a, d ? t.jsxs("div", {
                className: "flex items-center justify-between gap-4",
                children: [i || null, t.jsx("button", {
                    className: "pt-1",
                    children: t.jsx(e, {
                        className: "cursor-pointer transition-all " + (u ? "" : "-scale-y-100")
                    })
                })]
            }) : i || null]
        }), t.jsx("div", {
            className: "text-base transition-all",
            children: !x && u && t.jsx("div", {
                className: "p-6 pt-0",
                children: r
            })
        })]
    })
};
export {
    a as E
};
