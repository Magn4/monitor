import {
    a as e,
    b as s,
    d as a,
    r as t,
    j as i,
    aL as r,
    aM as o,
    F as l,
    B as c,
    o as n,
    L as d
} from "./index-e0afec69.js";
import {
    G as x
} from "./page_view-8012ef9e.js";
import {
    s as m,
    y as h,
    z as p
} from "./app-b4886647.js";
import {
    u as j
} from "./useSearchParam-640c4b1b.js";
import {
    u
} from "./useMount-c7a3921f.js";
import "./Loader2-ea5f73c7.js";
import "./modal.constants-09c27985.js";
import "./moment-e0d604bc.js";
import "./useEffectOnce-84f073df.js";
const f = () => {
    const f = e(),
        {
            locale: g
        } = s(),
        {
            user: w
        } = a(),
        [v, b] = t.useState(!1),
        N = j("redirect"),
        y = j("from"),
        k = j("code"),
        F = N || y || `/${g}`;
    return u((() => {
        if (w?.id) return f({
            pathname: F,
            search: ""
        });
        k && (b(!0), window.postMessage({
            code: k,
            type: "user-oauth"
        }, "*"))
    })), m((() => {
        if (w?.id) {
            if (-1 != F.indexOf("//")) return f({
                pathname: "/",
                search: ""
            });
            f({
                pathname: F,
                search: ""
            })
        }
    }), [w]), i.jsx(x, {
        children: i.jsxs("div", {
            className: "min-h-screen bg-dark-700 flex flex-col",
            children: [i.jsx("div", {
                className: "bg-dark-800 fixed z-50 w-full top-0",
                children: i.jsxs("div", {
                    className: "max-w-[1240px] mx-auto px-10 h-20 flex items-center justify-between",
                    children: [i.jsx(r, {
                        to: `/${g}`,
                        children: i.jsx(h, {
                            color: o.white,
                            withMee6: !0
                        })
                    }), i.jsx(p, {})]
                })
            }), i.jsx("div", {
                className: "flex-1 flex items-start justify-center pt-20",
                children: i.jsxs("div", {
                    className: "w-full mx-auto max-w-[560px] px-4 sm:px-6 grid grid-cols-1 gap-5 text-center mt-20",
                    children: [i.jsx("img", {
                        src: "/assets/AchievementsShowcase-0614716d.png",
                        alt: "Rarest Achievements Showcase",
                        style: {
                            width: "400px",
                            height: "200px",
                            objectFit: "contain",
                            margin: "0 auto"
                        }
                    }), i.jsx("p", {
                        className: "text-dark-100 text-h4 font-bold",
                        children: i.jsx(l, {
                            id: "plugins.achievements.login.title"
                        })
                    }), i.jsx("p", {
                        className: "text-dark-300 text-base",
                        children: i.jsx(l, {
                            id: "plugins.achievements.login.description",
                            defaultMessage: "To access your achievements, please, log in using your Discord with the button below.",
                            values: {
                                nowrap: e => i.jsx("span", {
                                    className: "whitespace-nowrap",
                                    children: e
                                })
                            }
                        })
                    }), i.jsx("div", {
                        className: "mx-auto mt-4",
                        children: i.jsx(c, {
                            className: "[&]:!bg-[#2A59FF]",
                            size: "large",
                            loading: v,
                            onClick: () => n(F),
                            icon: i.jsx("img", {
                                src: "/assets/discord-logo-79215c1b.svg",
                                alt: "Discord",
                                className: "w-6 h-6",
                                style: {
                                    position: "relative",
                                    top: "1px"
                                }
                            }),
                            style: {
                                borderRadius: "16px",
                                border: "1px solid rgba(255, 255, 255, 0.24)",
                                backgroundColor: "#2A59FF",
                                boxShadow: "0 11px 15px 5px rgba(42, 89, 255, 0.10)"
                            },
                            children: i.jsx(l, {
                                id: "welcome.loginWithDiscord"
                            })
                        })
                    })]
                })
            }), i.jsx("footer", {
                className: "w-full py-6 px-4",
                children: i.jsxs("div", {
                    className: "max-w-[1240px] mx-auto flex items-center justify-between text-sm text-[#8A8F98]",
                    children: [i.jsx("div", {
                        children: i.jsx(l, {
                            id: "home.footer.copyright",
                            values: {
                                year: (new Date).getFullYear()
                            }
                        })
                    }), i.jsxs("div", {
                        className: "flex items-center gap-6",
                        children: [i.jsx(d, {
                            to: `/${g}/terms.html`,
                            className: "hover:text-dark-200 transition-colors",
                            children: i.jsx(l, {
                                id: "home.footer.link.terms"
                            })
                        }), i.jsx("div", {
                            className: "text-dark-600",
                            children: "✦"
                        }), i.jsx(d, {
                            to: `/${g}/privacy.html`,
                            className: "hover:text-dark-200 transition-colors",
                            children: i.jsx(l, {
                                id: "home.footer.link.policy"
                            })
                        })]
                    })]
                })
            })]
        })
    })
};
export {
    f as
    default
};
