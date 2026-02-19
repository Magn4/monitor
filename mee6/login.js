import {
    a as s,
    b as e,
    d as a,
    r as t,
    j as r,
    F as o,
    B as i,
    o as m
} from "./index-684a1b71.js";
import {
    L as c
} from "./LoginIllustration-f4b742e5.js";
import {
    s as l,
    b as n
} from "./app-91bc7f76.js";
import {
    G as d
} from "./page_view-956ac92e.js";
import {
    u as p
} from "./useSearchParam-31624506.js";
import {
    u as x
} from "./useMount-6e43746a.js";
import "./Loader2-db3a3ef5.js";
import "./modal.constants-e7a21a8a.js";
import "./moment-e0d604bc.js";
import "./useEffectOnce-d6a661a4.js";
const j = () => {
    const j = s(),
        {
            locale: u
        } = e(),
        {
            user: f
        } = a(),
        [h, g] = t.useState(!1),
        w = p("redirect"),
        N = p("from"),
        b = p("code"),
        k = w || N || `/${u}`;
    return x((() => {
        if (f?.id) return j({
            pathname: k,
            search: ""
        });
        b && (g(!0), window.postMessage({
            code: b,
            type: "user-oauth"
        }, "*"))
    })), l((() => {
        if (f?.id) {
            if (-1 != k.indexOf("//")) return j({
                pathname: "/",
                search: ""
            });
            j({
                pathname: k,
                search: ""
            })
        }
    }), [f]), r.jsx(d, {
        children: r.jsxs("div", {
            className: "min-h-screen bg-dark-700",
            children: [r.jsx(n, {}), r.jsxs("div", {
                className: "w-full mx-auto max-w-[560px] grid grid-cols-1 gap-5 text-center mt-20",
                children: [r.jsx("img", {
                    src: c,
                    alt: "Connect yourself in MEE6",
                    className: "w-full"
                }), r.jsx("p", {
                    className: "text-dark-100 text-h4 font-bold",
                    children: r.jsx(o, {
                        id: "welcome.title"
                    })
                }), r.jsx("p", {
                    className: "text-dark-300 text-base",
                    children: r.jsx(o, {
                        id: "welcome.pleaseLogin"
                    })
                }), r.jsx(i, {
                    className: "mx-auto mt-4",
                    size: "large",
                    loading: h,
                    onClick: () => m(k),
                    children: r.jsx(o, {
                        id: "welcome.loginWithDiscord"
                    })
                })]
            })]
        })
    })
};
export {
    j as
    default
};
