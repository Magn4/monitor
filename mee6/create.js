import {
    z as r,
    a as e,
    b as a,
    r as t,
    j as s,
    f as i,
    F as o,
    $ as n
} from "./index-67e26437.js";
import {
    P as d
} from "./plus-9536984c.js";
const l = ({
    plugin: l,
    onPremium: c,
    onClick: u,
    text: m,
    icon: b,
    theme: f = "primary",
    disabled: p = !1
}) => {
    const {
        guild: x
    } = r(), h = e(), {
        locale: g
    } = a(), [j, v] = t.useState(!1);
    return s.jsxs("div", {
        className: i("bg-dark-800 rounded-lg border border-solid  p-6 flex items-center justify-between transition-all duration-200 relative", {
            "border-brand-default hover:border-brand-light hover:bg-dark-900 cursor-pointer": !p && !j && "primary" === f,
            "border-warning-default hover:border-warning-light hover:bg-dark-900 cursor-pointer": !p && !j && "premium" === f,
            "border-dark-600 cursor-not-allowed": p || j
        }),
        onClick: async r => {
            if (!p && !j) {
                if (c) return c((() => h(`/${g}/dashboard/${x?.id}/${l}/creation`)));
                if (u) {
                    const r = u();
                    return r instanceof Promise && (v(!0), await r), void v(!1)
                }
                return h(`/${g}/dashboard/${x?.id}/${l}/creation`)
            }
            r.preventDefault()
        },
        children: [s.jsx("p", {
            className: i("text-xl font-semibold", {
                "text-dark-100": !p && !j,
                "text-dark-400": p || j
            }),
            children: s.jsx(o, {
                id: m ?? `plugins.${l}.add`
            })
        }), b ?? s.jsx(d, {
            className: "w-6 h-6"
        }), j && s.jsx("div", {
            className: i("transition-all duration-200 absolute top-0 left-0 w-full h-full flex items-center justify-center", {
                "opacity-0": !j
            }),
            children: s.jsx(n, {
                className: "text-white"
            })
        })]
    })
};
export {
    l as C
};
